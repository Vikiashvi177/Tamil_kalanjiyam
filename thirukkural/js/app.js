// ==========================================================================
// Thirukkural Site — Main JavaScript
// ==========================================================================

(function() {
  'use strict';

  const DATA = window.THIRUKKURAL_DATA;
  if (!DATA) {
    console.error('Thirukkural data not loaded');
    return;
  }

  const { sections, chapters, kurals } = DATA;

  // ----- Helpers ------------------------------------------------------------
  function getChapter(num) { return chapters.find(c => c.num === num); }
  function getSection(id) { return sections.find(s => s.id === id); }
  function getKural(num) { return kurals.find(k => k.num === num); }
  function getKuralsForChapter(chapterNum) {
    return kurals.filter(k => k.chapter === chapterNum);
  }
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Split a multi-line text into an array of line HTML spans
  // Handles both '\n' and actual line separators
  function splitLines(text) {
    if (!text) return [];
    return text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  }

  function renderTamilLines(text) {
    const lines = splitLines(text);
    return lines.map(l => `<span class="line">${escapeHtml(l)}</span>`).join('');
  }

  // ----- Audio playback — robust voice handling with diagnostics ----------
  const AudioPlayer = (() => {
    let currentBtn = null;
    let voices = [];
    let voicesLoaded = false;
    let tamilVoiceAvailable = null;
    let noticeShown = false;
    let warmedUp = false;

    function loadVoices() {
      if (typeof speechSynthesis === 'undefined') return;
      voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        voicesLoaded = true;
        tamilVoiceAvailable = !!findTamilVoice();
        checkAndNotify();
      }
    }

    function findTamilVoice() {
      // 1. Voices with Tamil language code (ta, ta-IN, ta-LK, ta_IN, etc.)
      let v = voices.find(v => v.lang && /^ta(-|_|$)/i.test(v.lang));
      if (v) return v;
      // 2. Voices with 'tamil' in the name (any locale)
      v = voices.find(v => v.name && /tamil/i.test(v.name));
      if (v) return v;
      // 3. macOS-specific Tamil voice names
      v = voices.find(v => v.name && /veena|valluvar/i.test(v.name));
      if (v) return v;
      return null;
    }

    function findFallbackVoice() {
      // If no Tamil voice, try Hindi (closer to Tamil phonetics than English)
      let v = voices.find(v => v.lang && /^hi(-|_|$)/i.test(v.lang));
      if (v) return v;
      // Then English-India
      v = voices.find(v => v.lang && /^en-IN/i.test(v.lang));
      if (v) return v;
      return null;
    }

    function checkAndNotify() {
      if (tamilVoiceAvailable === false && !noticeShown) {
        const notice = document.querySelector('.audio-notice');
        if (notice) {
          notice.classList.add('show');
          noticeShown = true;
        }
      }
    }

    // Warm-up hack: on first user gesture, speak an empty utterance.
    // Chrome/Safari sometimes don't "wake up" the synthesis engine until this is done.
    function warmUp() {
      if (warmedUp) return;
      warmedUp = true;
      try {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;  // silent
        speechSynthesis.speak(u);
        // Reload voices after warm-up (some browsers only expose full list after first speak)
        setTimeout(loadVoices, 100);
        setTimeout(loadVoices, 500);
      } catch (e) { /* ignore */ }
    }

    if (typeof speechSynthesis !== 'undefined') {
      loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
      }
      // Poll a few times as fallback (some browsers populate voices late)
      let attempts = 0;
      const poll = setInterval(() => {
        if (voicesLoaded || attempts >= 15) {
          clearInterval(poll);
          return;
        }
        loadVoices();
        attempts++;
      }, 200);
    }

    function speak(text, btn) {
      if (typeof speechSynthesis === 'undefined') {
        alert('Your browser does not support speech synthesis. Please use Chrome, Edge, or Safari.');
        return;
      }

      // Warm up engine on first click
      warmUp();

      // Always reload voices right before speaking (catches voices added after page load)
      loadVoices();

      // Toggle off if same button is clicked again
      if (currentBtn === btn && speechSynthesis.speaking) {
        speechSynthesis.cancel();
        btn.classList.remove('playing');
        currentBtn = null;
        return;
      }

      // Cancel any previous speech
      speechSynthesis.cancel();
      if (currentBtn) currentBtn.classList.remove('playing');

      const tamilVoice = findTamilVoice();
      const fallbackVoice = tamilVoice ? null : findFallbackVoice();
      const chosenVoice = tamilVoice || fallbackVoice;

      // Prepare utterance
      const utter = new SpeechSynthesisUtterance(text);
      if (chosenVoice) {
        utter.voice = chosenVoice;
        utter.lang = chosenVoice.lang;
      } else {
        utter.lang = 'ta-IN';
      }
      utter.rate = 0.7;
      utter.pitch = 1;
      utter.volume = 1;

      let started = false;
      let errored = false;

      utter.onstart = () => {
        started = true;
        btn.classList.add('playing');
        currentBtn = btn;
      };

      utter.onend = () => {
        btn.classList.remove('playing');
        if (currentBtn === btn) currentBtn = null;
      };

      utter.onerror = (e) => {
        errored = true;
        btn.classList.remove('playing');
        if (currentBtn === btn) currentBtn = null;
        console.warn('Speech synthesis error:', e);
      };

      // Small delay helps on Chrome — it sometimes drops the first speak() call
      setTimeout(() => {
        try {
          speechSynthesis.speak(utter);
        } catch (err) {
          console.error('speak() threw:', err);
        }
      }, 60);

      // Safety: if after 2s nothing started and no error fired, something is wrong
      setTimeout(() => {
        if (!started && !errored) {
          btn.classList.remove('playing');
          console.warn('Speech did not start. Voices available:', voices.length, 'Tamil voice:', !!tamilVoice);
        }
      }, 2500);
    }

    // Diagnostic: returns list of all voices and which one was chosen as Tamil
    function diagnose() {
      loadVoices();
      const tamil = findTamilVoice();
      const fallback = findFallbackVoice();
      return {
        supported: typeof speechSynthesis !== 'undefined',
        totalVoices: voices.length,
        voicesList: voices.map(v => ({
          name: v.name,
          lang: v.lang,
          localService: v.localService,
          default: v.default
        })),
        tamilVoice: tamil ? { name: tamil.name, lang: tamil.lang } : null,
        fallbackVoice: fallback ? { name: fallback.name, lang: fallback.lang } : null
      };
    }

    return { speak, diagnose, hasTamilVoice: () => tamilVoiceAvailable };
  })();

  window.AudioPlayer = AudioPlayer;

  // ----- Audio diagnostic panel --------------------------------------------
  function initAudioDiagnostic() {
    const panel = document.querySelector('.audio-diagnostic');
    const trigger = document.querySelector('.audio-diagnostic-trigger');
    const output = document.querySelector('.audio-diagnostic-output');
    if (!panel || !trigger || !output) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const info = AudioPlayer.diagnose();
      let html = '';
      html += `<div class="diag-row"><strong>Browser supports speech:</strong> ${info.supported ? '✓ Yes' : '✗ No'}</div>`;
      html += `<div class="diag-row"><strong>Total voices detected:</strong> ${info.totalVoices}</div>`;
      html += `<div class="diag-row"><strong>Tamil voice found:</strong> ${info.tamilVoice ? '✓ ' + info.tamilVoice.name + ' (' + info.tamilVoice.lang + ')' : '✗ None'}</div>`;
      if (!info.tamilVoice && info.fallbackVoice) {
        html += `<div class="diag-row"><strong>Using fallback:</strong> ${info.fallbackVoice.name} (${info.fallbackVoice.lang})</div>`;
      }
      html += `<div class="diag-row" style="margin-top: 1rem;"><strong>All available voices:</strong></div>`;
      if (info.voicesList.length === 0) {
        html += '<div class="diag-row" style="color: var(--accent-vermillion);">No voices detected yet. This sometimes happens on first page load — try clicking Listen once, then reopen this panel.</div>';
      } else {
        html += '<ul class="diag-voices">';
        info.voicesList.forEach(v => {
          const isTamil = /tamil|veena|valluvar/i.test(v.name) || /^ta(-|_|$)/i.test(v.lang);
          html += `<li${isTamil ? ' class="is-tamil"' : ''}>${v.name} — <code>${v.lang}</code></li>`;
        });
        html += '</ul>';
      }
      output.innerHTML = html;
      panel.classList.toggle('open');
    });
  }


  // ----- Search -------------------------------------------------------------
  function initSearch() {
    const input = document.querySelector('.search-input');
    const results = document.querySelector('.search-results');
    if (!input || !results) return;

    let selectedIdx = -1;

    function truncate(s, n) {
      return s.length > n ? s.slice(0, n) + '…' : s;
    }

    function render(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        results.classList.remove('active');
        results.innerHTML = '';
        return;
      }

      const matches = [];
      for (const k of kurals) {
        const searchable = [
          k.english, k.transliteration, k.tamil, k.tamilUrai || '',
          k.altTranslation || '', String(k.num)
        ].join(' ').toLowerCase();
        if (searchable.includes(q)) {
          matches.push(k);
          if (matches.length >= 20) break;
        }
      }

      const chapterMatches = chapters.filter(c =>
        c.englishName.toLowerCase().includes(q) ||
        c.transliteration.toLowerCase().includes(q) ||
        c.tamilName.includes(query.trim())
      ).slice(0, 5);

      if (!matches.length && !chapterMatches.length) {
        results.innerHTML = '<div class="search-empty">No matches found</div>';
        results.classList.add('active');
        return;
      }

      let html = '';
      if (chapterMatches.length) {
        html += chapterMatches.map(c => `
          <a href="chapter.html?ch=${c.num}" class="search-result-item">
            <span class="search-result-kural-num">Ch. ${c.num}</span>
            <span class="search-result-text"><strong>${escapeHtml(c.englishName)}</strong> — ${escapeHtml(c.transliteration)}</span>
          </a>
        `).join('');
      }
      if (matches.length) {
        html += matches.map(k => `
          <a href="chapter.html?ch=${k.chapter}#k${k.num}" class="search-result-item">
            <span class="search-result-kural-num">§${k.num}</span>
            <span class="search-result-text">${escapeHtml(truncate(k.english, 100))}</span>
          </a>
        `).join('');
      }

      results.innerHTML = html;
      results.classList.add('active');
      selectedIdx = -1;
    }

    input.addEventListener('input', (e) => render(e.target.value));
    input.addEventListener('focus', (e) => {
      if (e.target.value.trim()) render(e.target.value);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrap')) {
        results.classList.remove('active');
      }
    });

    input.addEventListener('keydown', (e) => {
      const items = results.querySelectorAll('.search-result-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIdx = (selectedIdx + 1) % items.length;
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIdx = selectedIdx <= 0 ? items.length - 1 : selectedIdx - 1;
        updateSelection(items);
      } else if (e.key === 'Enter' && selectedIdx >= 0) {
        e.preventDefault();
        items[selectedIdx].click();
      } else if (e.key === 'Escape') {
        results.classList.remove('active');
        input.blur();
      }
    });

    function updateSelection(items) {
      items.forEach((el, i) => el.classList.toggle('selected', i === selectedIdx));
      if (selectedIdx >= 0) {
        items[selectedIdx].scrollIntoView({ block: 'nearest' });
      }
    }
  }

  // ----- Daily Kural --------------------------------------------------------
  function initDailyKural() {
    const el = document.querySelector('.daily-kural');
    if (!el) return;

    const withContent = kurals.filter(k => k.tamil && k.english);
    if (!withContent.length) return;

    const dayIdx = Math.floor(Date.now() / 86400000) % withContent.length;
    const k = withContent[dayIdx];

    const numEl = el.querySelector('.kural-num');
    const tamilEl = el.querySelector('.tamil');
    const englishEl = el.querySelector('.english');
    const link = el.querySelector('.daily-link');

    if (numEl) numEl.textContent = `குறள் ${k.num} · அதிகாரம் ${k.chapter} · Kural ${k.num} · Adhigāram ${k.chapter}`;
    if (tamilEl) tamilEl.innerHTML = renderTamilLines(k.tamil);
    if (englishEl) englishEl.textContent = k.english;
    if (link) link.href = `chapter.html?ch=${k.chapter}#k${k.num}`;
  }

  // ----- Page: Section listing ---------------------------------------------
  function initSectionPage() {
    const root = document.querySelector('[data-page="section"]');
    if (!root) return;

    const params = new URLSearchParams(location.search);
    const secId = params.get('sec');
    const section = getSection(secId);
    if (!section) {
      root.innerHTML = '<p style="text-align:center;padding:4rem;">Section not found.</p>';
      return;
    }

    document.title = `${section.tamilName} · ${section.englishName} — திருக்குறள் · Thirukkural`;

    root.querySelector('.page-title').innerHTML = `<em>${section.englishName}</em>`;
    root.querySelector('.page-tamil').textContent = section.tamilName;
    root.querySelector('.page-desc').textContent = section.description;
    root.querySelector('.breadcrumb-current').textContent = section.englishName;

    const [start, end] = section.chapterRange;
    const inSection = chapters.filter(c => c.num >= start && c.num <= end);

    const grid = root.querySelector('.chapter-grid');
    grid.innerHTML = inSection.map(c => `
      <a href="chapter.html?ch=${c.num}" class="chapter-card">
        <div class="chapter-num">அதிகாரம் ${c.num} · Adhigāram ${c.num}</div>
        <div class="chapter-tamil">${escapeHtml(c.tamilName)}</div>
        <div class="chapter-translit">${escapeHtml(c.transliteration)}</div>
        <div class="chapter-english">${escapeHtml(c.englishName)}</div>
      </a>
    `).join('');
  }

  // ----- Page: All Chapters -------------------------------------------------
  function initAllChaptersPage() {
    const root = document.querySelector('[data-page="chapters"]');
    if (!root) return;

    const grid = root.querySelector('.chapter-grid');
    let html = '';
    for (const s of sections) {
      html += `
        <div class="section-divider">
          <div class="section-divider-label">${escapeHtml(s.tamilName)} · ${escapeHtml(s.transliteration)} — ${escapeHtml(s.englishName)}</div>
          <div class="section-divider-title">அதிகாரங்கள் ${s.chapterRange[0]}–${s.chapterRange[1]}<span class="section-divider-tamil">${escapeHtml(s.tamilName)}</span></div>
        </div>
      `;
      const [start, end] = s.chapterRange;
      const inSection = chapters.filter(c => c.num >= start && c.num <= end);
      html += inSection.map(c => `
        <a href="chapter.html?ch=${c.num}" class="chapter-card">
          <div class="chapter-num">அதிகாரம் ${c.num} · Adhigāram ${c.num}</div>
          <div class="chapter-tamil">${escapeHtml(c.tamilName)}</div>
          <div class="chapter-translit">${escapeHtml(c.transliteration)}</div>
          <div class="chapter-english">${escapeHtml(c.englishName)}</div>
        </a>
      `).join('');
    }
    grid.innerHTML = html;
  }

  // ----- Page: Individual chapter ------------------------------------------
  function initChapterPage() {
    const root = document.querySelector('[data-page="chapter"]');
    if (!root) return;

    const params = new URLSearchParams(location.search);
    const chNum = parseInt(params.get('ch'), 10);
    const chapter = getChapter(chNum);
    if (!chapter) {
      root.innerHTML = '<p style="text-align:center;padding:4rem;">Chapter not found.</p>';
      return;
    }

    const section = getSection(chapter.section);
    document.title = `${chapter.tamilName} · அதிகாரம் ${chNum} — திருக்குறள் · Thirukkural`;

    root.querySelector('.breadcrumb-section').textContent = section.tamilName + ' · ' + section.englishName;
    root.querySelector('.breadcrumb-section').href = `section.html?sec=${section.id}`;
    root.querySelector('.breadcrumb-current').textContent = `அதிகாரம் ${chNum} · Adhigāram ${chNum}`;

    root.querySelector('.page-title').innerHTML = `<span class="tamil">${chapter.tamilName}</span> <em>${chapter.englishName}</em>`;
    root.querySelector('.page-tamil').textContent = chapter.transliteration;
    root.querySelector('.page-desc').textContent = `அதிகாரம் ${chNum} · Adhigāram ${chNum} · ${chapter.transliteration} · 10 குறள்கள்`;

    const list = root.querySelector('.kural-list');

    const firstNum = (chNum - 1) * 10 + 1;
    const lastNum = chNum * 10;

    let html = '';
    for (let n = firstNum; n <= lastNum; n++) {
      const k = getKural(n);
      if (k && k.tamil) {
        html += renderKural(k);
      } else {
        html += renderPlaceholder(n);
      }
    }
    list.innerHTML = html;

    // Wire up audio buttons
    list.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        if (text) AudioPlayer.speak(text, btn);
      });
    });

    // Chapter nav
    const nav = document.querySelector('.chapter-nav');
    if (nav) {
      const prev = chNum > 1 ? getChapter(chNum - 1) : null;
      const next = chNum < 133 ? getChapter(chNum + 1) : null;
      nav.innerHTML = `
        ${prev ? `
          <a href="chapter.html?ch=${prev.num}" class="prev">
            <div class="label">← முந்தைய · அதிகாரம் ${prev.num} · Adhigāram ${prev.num}</div>
            <div class="name"><span class="tamil">${escapeHtml(prev.tamilName)}</span> ${escapeHtml(prev.englishName)}</div>
          </a>
        ` : '<div></div>'}
        ${next ? `
          <a href="chapter.html?ch=${next.num}" class="next">
            <div class="label">அடுத்தது · அதிகாரம் ${next.num} · Adhigāram ${next.num} →</div>
            <div class="name"><span class="tamil">${escapeHtml(next.tamilName)}</span> ${escapeHtml(next.englishName)}</div>
          </a>
        ` : '<div></div>'}
      `;
    }

    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  function renderKural(k) {
    // The tamil speech text needs to be the spoken sentence (single string)
    const audioText = k.tamil.replace(/\n/g, ' ').trim();
    const escapedAudio = escapeHtml(audioText);

    const tamilLinesHtml = renderTamilLines(k.tamil);
    const translitLinesHtml = splitLines(k.transliteration)
      .map(l => `<span class="line">${escapeHtml(l)}</span>`).join('');

    return `
      <article class="kural-card" id="k${k.num}">
        <div class="kural-card-header">
          <div class="kural-number">
            <span class="num-big">${k.num}</span>
            <span class="num-label">· குறள் · Kural</span>
          </div>
          <button class="audio-btn" data-text="${escapedAudio}" aria-label="குறள் ${k.num} கேட்க · Listen to Kural ${k.num}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span>Listen</span>
          </button>
        </div>

        <div class="kural-tamil">${tamilLinesHtml}</div>
        <div class="kural-translit">${translitLinesHtml}</div>

        <div class="kural-layers">
          <div class="kural-layer vermillion">
            <div class="layer-label">English Translation</div>
            <div class="content">${escapeHtml(k.english)}</div>
          </div>

          ${k.tamilUrai ? `
            <div class="kural-layer tamil-urai">
              <div class="layer-label"><span class="tamil-bit">தமிழ் உரை</span>Tamil Commentary</div>
              <div class="content">${escapeHtml(k.tamilUrai)}</div>
            </div>
          ` : ''}

          ${k.altTranslation ? `
            <div class="kural-layer gold alt-translation">
              <div class="layer-label">Alternate Translation</div>
              <div class="content">${escapeHtml(k.altTranslation)}</div>
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }

  function renderPlaceholder(num) {
    return `
      <article class="kural-card" id="k${num}">
        <div class="kural-card-header">
          <div class="kural-number">
            <span class="num-big">${num}</span>
            <span class="num-label">· குறள் · Kural</span>
          </div>
        </div>
        <div class="kural-placeholder">
          <span class="ornament">❦</span>
          <div>குறள் ${num} இன் உரை தயாரிக்கப்படுகிறது · Content for Kural ${num} is being prepared.</div>
          <div style="font-size: 0.9rem; margin-top: 0.5rem;">This site ships with a curated sample; the full text, transliteration, and commentary for all 1,330 kurals will be added.</div>
        </div>
      </article>
    `;
  }

  // ----- Set active nav -----------------------------------------------------
  function initNav() {
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === here || (here === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  // ----- Boot ---------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initSearch();
    initDailyKural();
    initSectionPage();
    initAllChaptersPage();
    initChapterPage();
    initAudioDiagnostic();
  });
})();
