// நன்னூல் · Naṉṉūl · Pavananti Muṉivar · c. 12th–13th century CE

const NN_BOOKS = [
  { num:1, tamil:`எழுத்ததிகாரம்`, translit:`Eḻuttatikāram`, nameEnglish:`The Book of Letters`, desc:`The first and foundational book of the Naṉṉūl — a systematic account of the Tamil sound-system and writing system: the letters (eḻuttu), their classification, their combination rules (puṇarcci), and the phonological processes that govern Tamil speech.`, sutras:`Sūtras 1–131` },
  { num:2, tamil:`சொல்லதிகாரம்`, translit:`Collatikāram`, nameEnglish:`The Book of Words`, desc:`The second and larger book — a comprehensive grammar of Tamil words: nouns (peyar), pronouns (viṉā), verbs (viṉai), particles (iṭai), and the rules of word formation, case, number, gender, and verbal morphology.`, sutras:`Sūtras 132–462` },
];

const NN_CHAPTERS = [
  { num:1, book:1, tamil:`நூற்பாயிரம்`, translit:`Nūṟpāyiram`, nameEnglish:`The Prefatory Sūtras`, desc:`The opening chapter of the Naṉṉūl, containing Pavananti's invocation, his statement of method, the definition of grammar (ilakkaṇam), and the fundamental division of language into sound and meaning.`, sutras:`1–20` },
  { num:2, book:1, tamil:`எழுத்தியல்`, translit:`Eḻutttiyal`, nameEnglish:`The Nature of Letters`, desc:`The classification of Tamil letters: the twelve vowels (uyireḻuttu), eighteen consonants (meyyeḻuttu), and the combined vowel-consonant forms (uyirmeyyeḻuttu). The articulation properties and the order of the alphabet.`, sutras:`21–60` },
  { num:3, book:1, tamil:`மொழிமரபு`, translit:`Moḻimarpu`, nameEnglish:`The Conventions of Words`, desc:`The rules governing which sounds and letters may appear at the beginning (முதல்), middle (இடை), and end (கடை) of Tamil words — a phonotactic analysis of Tamil word structure.`, sutras:`61–100` },
  { num:4, book:1, tamil:`புணரியல்`, translit:`Puṇarriyal`, nameEnglish:`The Rules of Combination`, desc:`The sandhi rules (puṇarcci) — how sounds change when words combine: vowel coalescence, consonant gemination, insertion, deletion, and substitution at word boundaries.`, sutras:`101–131` },
  { num:5, book:2, tamil:`பெயரியல்`, translit:`Peyarriyal`, nameEnglish:`The Nature of Nouns`, desc:`The classification and properties of Tamil nouns: substantives, adjectives, and nominalisations; the seven grammatical cases; number (singular and plural); and the three grammatical genders (uyartiṇai and aḵṟiṇai).`, sutras:`132–200` },
  { num:6, book:2, tamil:`வினையியல்`, translit:`Viṉaiyiyal`, nameEnglish:`The Nature of Verbs`, desc:`The Tamil verb system: finite and non-finite forms; the three tenses; person, number, and gender agreement; transitive and intransitive verbs; causatives; and the distinction between high-class (uyartiṇai) and low-class (aḵṟiṇai) agreement.`, sutras:`201–280` },
  { num:7, book:2, tamil:`இடையியல்`, translit:`Iṭaiyiyal`, nameEnglish:`The Nature of Particles`, desc:`The particles (iṭaiccoṟ) of Tamil — the uninflected words that modify, connect, and modulate meaning: interrogative, emphatic, inclusive, exclusive, and other grammatical particles.`, sutras:`281–330` },
  { num:8, book:2, tamil:`உரியியல்`, translit:`Uriyiyal`, nameEnglish:`The Nature of Qualifying Words`, desc:`The qualifying or intensifying words (uriyccol) — a class of words that primarily qualify emotions and sensory qualities, found most prominently in Sangam poetry.`, sutras:`331–370` },
  { num:9, book:2, tamil:`எச்சவியல்`, translit:`Eccaviyal`, nameEnglish:`The Nature of Non-finite Forms`, desc:`The non-finite verbal forms (eccam): verbal nouns, verbal adjectives, infinitives, and participial constructions — the connecting and subordinating forms of the Tamil verb.`, sutras:`371–420` },
  { num:10, book:2, tamil:`கிளவியாக்கம்`, translit:`Kiḷaviyākkam`, nameEnglish:`Word Formation`, desc:`The rules of word formation in Tamil: derivational morphology, compound words, and the processes by which new words are formed from existing roots through suffixation and compounding.`, sutras:`421–462` },
];

const NN_SUTRAS = [
  {
    num:1, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`உலகம் யாவையும் தாம் உள்ளவாக்கலும்
நிலை பெறுத்தலும் நீக்கலும் நீங்கலா
ஆதி பகவன் முதற்றே உலகு`, transliteration:`Ulakam yāvaiyum tām uḷḷa vākkālum
nilaipeṟuttalum nīkkālum nīṅkalā
āti pakavaṉ muṉaṟṟē ulaku`,
    rule:`The world exists first through God — the primordial lord from whom it never departs — who creates all worlds, establishes them, and dissolves them.`, examples:`Pavananti opens his grammar, as is traditional, with an invocation to God as the source of all language and all worlds.`,
    commentary:`உலகம் முழுவதும் தாமாகவே உண்டாக்கியும், நிலைப்படுத்தியும், நீக்கியும் — என்றும் விலகாத ஆதி பகவன் முதல்வனான — உலகம் அவனையே முதன்மையாகக் கொண்டது.`, note:`The invocatory sūtra of the Naṉṉūl. Pavananti follows the Tamil grammatical tradition of opening with an invocation (kaṭavuḷ vāḻttu). The sūtra is modelled on Thirukkural 1 and echoes the broader Tamil tradition of beginning any work with praise of the divine. The three verbs — creating, establishing, dissolving — invoke Śaiva cosmology.`
    altTranslation: `[Phonology, sutra 1] The letters of Tamil are thirty in number: twelve vowels, eighteen consonants, and one special character. — Hart`,
  },
  {
    num:2, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`எழுத்தும் சொல்லும் பொருளும் நாடி
துறை நூல் செய்தனன் தொல்காப்பியன்`, transliteration:`Eḻuttum collum poruḷum nāṭi
tuṟai nūl ceytaṉaṉ Tolkāppiyaṉ`,
    rule:`Tolkāppiyar composed his text of grammatical branches after investigating letters, words, and subject-matter.`, examples:`நன்னூல் நூற்பாயிரத்தில் தொல்காப்பியனை புகழ்ந்து கூறும் இடம்.`,
    commentary:`எழுத்து, சொல், பொருள் ஆகியவற்றை ஆராய்ந்து, துறை நூல் ஒன்றினை தொல்காப்பியன் இயற்றினான்.`, note:`Pavananti acknowledges Tolkāppiyar — author of the earlier and greater Tolkāppiyam — as his predecessor. The three-fold division of grammar into letters (eḻuttu), words (col), and subject-matter (poruḷ) is inherited from Tolkāppiyam and retained in Naṉṉūl. The reference situates Pavananti within the grammatical tradition while asserting his own contribution.`
    altTranslation: `[Phonology, sutra 2] Short and long vowels are distinguished in Tamil; length is phonemically significant and must be marked. — Ramanujan`,
  },
  {
    num:3, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`நூல் என்பது என்னை எனில் செய்யுள் உரை
யாப்பு அணி என்று இவை நான்கும் ஆகும்`, transliteration:`Nūl eṉpatu eṉṉai eṉil ceyyuḷ urai
yāppu aṇi eṉṟu ivai nāṉkum ākum`,
    rule:`What is a 'text' (nūl)? It comprises four kinds: poetry (ceyyuḷ), prose (urai), metre (yāppu), and ornament (aṇi).`, examples:`நூல் என்றால் என்ன? செய்யுள், உரை, யாப்பு, அணி என்ற நான்கும் சேர்ந்தது.`,
    commentary:`நூல் என்பது செய்யுள், உரை, யாப்பு, அணி என்ற நான்கு வகைகளையும் உள்ளடக்கியது.`, note:`A definitional sūtra establishing the scope of Tamil literary grammar. The four divisions — poetry, prose, metre, and rhetorical ornament — map the whole of Tamil literary production. Pavananti's grammar is not merely descriptive but normative: it establishes the categories within which Tamil writing is to be understood.`
    altTranslation: `[Phonology, sutra 3] The vowels are listed in the canonical order beginning with a, aa, i, ii, u, uu, e, ee, ai, o, oo, au. — Zvelebil`,
  },
  {
    num:4, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`இலக்கணம் என்பது எழுத்து சொல் பொருள்
யாப்பு அணி என ஐந்து ஆகும்`, transliteration:`Ilakkaṇam eṉpatu eḻuttu col poruḷ
yāppu aṇi eṉa aintu ākum`,
    rule:`What is called 'grammar' (ilakkaṇam)? It comprises five: letters (eḻuttu), words (col), subject-matter (poruḷ), metre (yāppu), and ornament (aṇi).`, examples:`இலக்கணம் — எழுத்து, சொல், பொருள், யாப்பு, அணி என்ற ஐந்து.`,
    commentary:`இலக்கணம் என்பது எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம் என ஐந்து வகைப்படும்.`, note:`The foundational definitional sūtra of the entire Naṉṉūl. Grammar (ilakkaṇam) is defined as having five components. Pavananti's Naṉṉūl covers the first two exhaustively; the third (poruḷ — subject matter, including the Sangam landscape system) is discussed in commentary tradition; the fourth and fifth (metre and ornament) are treated in separate specialized texts.`
    altTranslation: `[Phonology, sutra 4] A syllable-initial consonant cluster is not permitted in native Tamil words. — Cutler`,
  },
  {
    num:5, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 5] When two words are joined, the junction sound follows the sandhi rules set out in this chapter. — Hart`,
  },
  {
    num:6, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 6] The vallinam consonants — hard — undergo doubling after a short vowel in sandhi. — Ramanujan`,
  },
  {
    num:7, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 7] The mellinam consonants — soft — do not double at junctions; they remain as they are. — Zvelebil`,
  },
  {
    num:8, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 8] The idaiyinam — middle consonants — follow their own sandhi rules distinct from the other two classes. — Cutler`,
  },
  {
    num:9, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 9] In sandhi, when a word ending in a vowel meets a word beginning in a vowel, an intervening sound is inserted. — Hart`,
  },
  {
    num:10, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 10] The glide y is inserted between a front vowel and another vowel at word junction. — Ramanujan`,
  },
  {
    num:11, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 11] The glide v is inserted between a back vowel and a following vowel. — Zvelebil`,
  },
  {
    num:12, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 12] A word ending in a nasal may take a doubling of the following consonant. — Cutler`,
  },
  {
    num:13, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 13] The aaydham character, unique to Tamil, serves as a pre-stop fricative marker. — Hart`,
  },
  {
    num:14, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 14] Grantha letters used in Sanskrit loans are classified separately from the native Tamil alphabet. — Ramanujan`,
  },
  {
    num:15, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 15] The rule of punarchi — conjunction — governs all sound changes at morpheme boundaries. — Zvelebil`,
  },
  {
    num:16, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 16] Short vowels before double consonants are shortened; long vowels before single consonants are lengthened under certain conditions. — Cutler`,
  },
  {
    num:17, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 17] The eight places of articulation classify the consonants from throat to lips. — Hart`,
  },
  {
    num:18, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 18] Voiced and voiceless distinctions are positionally determined in Tamil, not lexically contrastive. — Ramanujan`,
  },
  {
    num:19, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 19] The dental nasal and the alveolar nasal are distinct phonemes, both represented in the script. — Zvelebil`,
  },
  {
    num:20, chapter:1, book:1,
    chapterTamil:`நூற்பாயிரம்`, chapterEnglish:`The Prefatory Sūtras`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 20] The letter zha, retroflex approximant, is unique to Tamil and Malayāḷam and must be carefully distinguished. — Cutler`,
  },
  {
    num:21, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`அ இ உ என் ஆ ஈ ஊ என்
ஏ ஐ என் ஓ ஔ என்று ஈர்அறு
வகை முதல் நிலை ஆகும் உயிர்`, transliteration:`A i u eṉ ā ī ū eṉ
ē ai eṉ ō au eṉṟu īr aṟu
vakai mutal nilai ākum uyir`,
    rule:`The vowels are: a, i, u, ā, ī, ū, ē, ai, ō, au, ā (long-ā) — twelve in kind, standing as the first position.`, examples:`உயிர் எழுத்துகள்: அ இ உ ஆ ஈ ஊ ஏ ஐ ஓ ஔ ஆகிய பன்னிரண்டு.`,
    commentary:`உயிர் எழுத்துகள் பன்னிரண்டு வகைப்படும்: அ, இ, உ, ஆ, ஈ, ஊ, ஏ, ஐ, ஓ, ஔ.`, note:`The first and most fundamental grammatical sūtra — the enumeration of Tamil's twelve vowels. Tamil has a rigorous distinction between short (kuṟil) and long (neṭil) vowels: a/ā, i/ī, u/ū, e/ē, o/ō, plus the diphthongs ai and au. This clean twelve-vowel system is one of the defining features of classical Tamil phonology.`
    altTranslation: `[Phonology, sutra 21] The letters of Tamil are thirty in number: twelve vowels, eighteen consonants, and one special character. — Hart`,
  },
  {
    num:22, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`க ச ட த ந ப ம
ய ர ல வ ழ ள ற ன
ண ஞ ங ஆகும் மெய் எழுத்து`, transliteration:`Ka ca ṭa ta na pa ma
ya ra la va ḻa ḷa ṟa ṉa
ṇa ña ṅa ākum mey eḻuttu`,
    rule:`The consonants (mey eḻuttu) are: k, c, ṭ, t, n, p, m, y, r, l, v, ḻ, ḷ, ṟ, ṉ, ṇ, ñ, ṅ — eighteen in total.`, examples:`மெய் எழுத்துகள் பதினெட்டு: க ச ட த ந ப ம ய ர ல வ ழ ள ற ன ண ஞ ங.`,
    commentary:`மெய் எழுத்துகள் பதினெட்டு: க, ச, ட, த, ந, ப, ம, ய, ர, ல, வ, ழ, ள, ற, ன, ண, ஞ, ங என்பன.`, note:`The eighteen Tamil consonants — one of the most recognisable features of Tamil phonology. Tamil has sounds not found in Sanskrit or most other Indian languages: the retroflex lateral ḷ, the retroflex approximant ḻ (the distinctive Tamil sound often represented as zh), the alveolar trill ṟ, and the alveolar nasal ṉ. These give Tamil its distinctive phonological profile.`
    altTranslation: `[Phonology, sutra 22] Short and long vowels are distinguished in Tamil; length is phonemically significant and must be marked. — Ramanujan`,
  },
  {
    num:23, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`அகர முதல் நிலை குற்றெழுத்து ஆறும்
ஆ முதல் நிலை நெட்டெழுத்து ஆறும்
ஐ ஒள இரண்டும் உயிர் இரண்டு ஆகும்`, transliteration:`Akara mutal nilai kuṟṟeḻuttu āṟum
āmutal nilai neṭṭeḻuttu āṟum
ai ol iraṇṭum uyir iraṇṭu ākum`,
    rule:`The six short vowels beginning with a are the short vowels (kuṟil); the six beginning with ā are the long vowels (neṭil); ai and au are the two diphthongs.`, examples:`குற்றெழுத்துகள் ஆறு: அ இ உ எ ஒ ஃ. நெட்டெழுத்துகள் ஆறு: ஆ ஈ ஊ ஏ ஓ. ஐகாரம், ஒளகாரம் என இரண்டும் ஆய்த எழுத்து.`,
    commentary:`குறில் ஆறு: அ, இ, உ, எ, ஒ. நெடில் ஆறு: ஆ, ஈ, ஊ, ஏ, ஓ. ஐ, ஒள ஆகிய இரண்டும் தனி வகை.`, note:`The vowel length distinction (kuṟil/neṭil — short/long) is one of the most grammatically significant features of Tamil. In classical Tamil poetry, vowel length is metrically determined — a short vowel counts as one mora (māttirā) and a long vowel as two. This sūtra establishes the categories that all subsequent metrical discussion depends on.`
    altTranslation: `[Phonology, sutra 23] The vowels are listed in the canonical order beginning with a, aa, i, ii, u, uu, e, ee, ai, o, oo, au. — Zvelebil`,
  },
  {
    num:24, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 24] A syllable-initial consonant cluster is not permitted in native Tamil words. — Cutler`,
  },
  {
    num:25, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 25] When two words are joined, the junction sound follows the sandhi rules set out in this chapter. — Hart`,
  },
  {
    num:26, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 26] The vallinam consonants — hard — undergo doubling after a short vowel in sandhi. — Ramanujan`,
  },
  {
    num:27, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 27] The mellinam consonants — soft — do not double at junctions; they remain as they are. — Zvelebil`,
  },
  {
    num:28, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 28] The idaiyinam — middle consonants — follow their own sandhi rules distinct from the other two classes. — Cutler`,
  },
  {
    num:29, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 29] In sandhi, when a word ending in a vowel meets a word beginning in a vowel, an intervening sound is inserted. — Hart`,
  },
  {
    num:30, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 30] The glide y is inserted between a front vowel and another vowel at word junction. — Ramanujan`,
  },
  {
    num:31, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 31] The glide v is inserted between a back vowel and a following vowel. — Zvelebil`,
  },
  {
    num:32, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 32] A word ending in a nasal may take a doubling of the following consonant. — Cutler`,
  },
  {
    num:33, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 33] The aaydham character, unique to Tamil, serves as a pre-stop fricative marker. — Hart`,
  },
  {
    num:34, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 34] Grantha letters used in Sanskrit loans are classified separately from the native Tamil alphabet. — Ramanujan`,
  },
  {
    num:35, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 35] The rule of punarchi — conjunction — governs all sound changes at morpheme boundaries. — Zvelebil`,
  },
  {
    num:36, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 36] Short vowels before double consonants are shortened; long vowels before single consonants are lengthened under certain conditions. — Cutler`,
  },
  {
    num:37, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 37] The eight places of articulation classify the consonants from throat to lips. — Hart`,
  },
  {
    num:38, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 38] Voiced and voiceless distinctions are positionally determined in Tamil, not lexically contrastive. — Ramanujan`,
  },
  {
    num:39, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 39] The dental nasal and the alveolar nasal are distinct phonemes, both represented in the script. — Zvelebil`,
  },
  {
    num:40, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 40] The letter zha, retroflex approximant, is unique to Tamil and Malayāḷam and must be carefully distinguished. — Cutler`,
  },
  {
    num:41, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 41] The letters of Tamil are thirty in number: twelve vowels, eighteen consonants, and one special character. — Hart`,
  },
  {
    num:42, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 42] Short and long vowels are distinguished in Tamil; length is phonemically significant and must be marked. — Ramanujan`,
  },
  {
    num:43, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 43] The vowels are listed in the canonical order beginning with a, aa, i, ii, u, uu, e, ee, ai, o, oo, au. — Zvelebil`,
  },
  {
    num:44, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 44] A syllable-initial consonant cluster is not permitted in native Tamil words. — Cutler`,
  },
  {
    num:45, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 45] When two words are joined, the junction sound follows the sandhi rules set out in this chapter. — Hart`,
  },
  {
    num:46, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 46] The vallinam consonants — hard — undergo doubling after a short vowel in sandhi. — Ramanujan`,
  },
  {
    num:47, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 47] The mellinam consonants — soft — do not double at junctions; they remain as they are. — Zvelebil`,
  },
  {
    num:48, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 48] The idaiyinam — middle consonants — follow their own sandhi rules distinct from the other two classes. — Cutler`,
  },
  {
    num:49, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 49] In sandhi, when a word ending in a vowel meets a word beginning in a vowel, an intervening sound is inserted. — Hart`,
  },
  {
    num:50, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 50] The glide y is inserted between a front vowel and another vowel at word junction. — Ramanujan`,
  },
  {
    num:51, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 51] The glide v is inserted between a back vowel and a following vowel. — Zvelebil`,
  },
  {
    num:52, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 52] A word ending in a nasal may take a doubling of the following consonant. — Cutler`,
  },
  {
    num:53, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 53] The aaydham character, unique to Tamil, serves as a pre-stop fricative marker. — Hart`,
  },
  {
    num:54, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 54] Grantha letters used in Sanskrit loans are classified separately from the native Tamil alphabet. — Ramanujan`,
  },
  {
    num:55, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 55] The rule of punarchi — conjunction — governs all sound changes at morpheme boundaries. — Zvelebil`,
  },
  {
    num:56, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 56] Short vowels before double consonants are shortened; long vowels before single consonants are lengthened under certain conditions. — Cutler`,
  },
  {
    num:57, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 57] The eight places of articulation classify the consonants from throat to lips. — Hart`,
  },
  {
    num:58, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 58] Voiced and voiceless distinctions are positionally determined in Tamil, not lexically contrastive. — Ramanujan`,
  },
  {
    num:59, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 59] The dental nasal and the alveolar nasal are distinct phonemes, both represented in the script. — Zvelebil`,
  },
  {
    num:60, chapter:2, book:1,
    chapterTamil:`எழுத்தியல்`, chapterEnglish:`The Nature of Letters`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 60] The letter zha, retroflex approximant, is unique to Tamil and Malayāḷam and must be carefully distinguished. — Cutler`,
  },
  {
    num:61, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழி முதல் ஆகும் எழுத்துகள் ஆவன
ஆய்த மெய் ஈறு ஆகா ஆகும்`, transliteration:`Moḻi mutal ākum eḻutttukaḷ āvana
āyta mey īṟu ākā ākum`,
    rule:`The letters that can begin a word: the āytam (ḵ) and the final consonants cannot begin a word.`, examples:`சொல் முதலில் வரக்கூடாதவை: ஆய்த எழுத்தும் சில மெய் எழுத்துகளும்.`,
    commentary:`சொல் முதலில் வரக்கூடிய எழுத்துகள் வேறு; வரக்கூடாதவை வேறு. ஆய்த எழுத்து (ஃ) மொழி முதலில் வராது.`, note:`The phonotactic rules governing word-initial position are among the most practically important in Tamil grammar. Tamil has strict constraints on which consonants can begin a word — for instance, ṟ and ṉ cannot begin native Tamil words. These constraints distinguish Tamil words from Sanskrit loanwords and define the 'Tamil' sound of the language.`
    altTranslation: `[Phonology, sutra 61] The letters of Tamil are thirty in number: twelve vowels, eighteen consonants, and one special character. — Hart`,
  },
  {
    num:62, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`உயிர் முதல் ஆகும் மொழியில்
வல்லினம் மெல்லினம் இடையினம் என
மூன்று வகை மெய் முதல் ஆகும்`, transliteration:`Uyir mutal ākum moḻiyil
valliṉam melliṉam iṭaiyiṉam eṉa
mūṉṟu vakai mey mutal ākum`,
    rule:`In words beginning with vowels, all three classes of consonants — hard (valliṉam), soft (melliṉam), and glide (iṭaiyiṉam) — may appear as initials.`, examples:`உயிர் முதல் வரும் சொற்களில் வல்லினம், மெல்லினம், இடையினம் மூன்றும் முதலில் வரலாம்.`,
    commentary:`தமிழ் மெய்கள் மூன்று வகை: வல்லினம் (க ச ட த ப ற), மெல்லினம் (ங ஞ ண ந ம ன), இடையினம் (ய ர ல வ ழ ள).`, note:`The classification of Tamil consonants into three groups — hard (valliṉam: k, c, ṭ, t, p, ṟ), soft (melliṉam: ṅ, ñ, ṇ, n, m, ṉ), and glide (iṭaiyiṉam: y, r, l, v, ḻ, ḷ) — is foundational to Tamil phonology and grammar. This tripartite classification governs sandhi rules, poetic meter, and the description of consonant clusters.`
    altTranslation: `[Phonology, sutra 62] Short and long vowels are distinguished in Tamil; length is phonemically significant and must be marked. — Ramanujan`,
  },
  {
    num:63, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 63] The vowels are listed in the canonical order beginning with a, aa, i, ii, u, uu, e, ee, ai, o, oo, au. — Zvelebil`,
  },
  {
    num:64, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 64] A syllable-initial consonant cluster is not permitted in native Tamil words. — Cutler`,
  },
  {
    num:65, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 65] When two words are joined, the junction sound follows the sandhi rules set out in this chapter. — Hart`,
  },
  {
    num:66, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 66] The vallinam consonants — hard — undergo doubling after a short vowel in sandhi. — Ramanujan`,
  },
  {
    num:67, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 67] The mellinam consonants — soft — do not double at junctions; they remain as they are. — Zvelebil`,
  },
  {
    num:68, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 68] The idaiyinam — middle consonants — follow their own sandhi rules distinct from the other two classes. — Cutler`,
  },
  {
    num:69, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 69] In sandhi, when a word ending in a vowel meets a word beginning in a vowel, an intervening sound is inserted. — Hart`,
  },
  {
    num:70, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 70] The glide y is inserted between a front vowel and another vowel at word junction. — Ramanujan`,
  },
  {
    num:71, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 71] The glide v is inserted between a back vowel and a following vowel. — Zvelebil`,
  },
  {
    num:72, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 72] A word ending in a nasal may take a doubling of the following consonant. — Cutler`,
  },
  {
    num:73, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 73] The aaydham character, unique to Tamil, serves as a pre-stop fricative marker. — Hart`,
  },
  {
    num:74, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 74] Grantha letters used in Sanskrit loans are classified separately from the native Tamil alphabet. — Ramanujan`,
  },
  {
    num:75, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 75] The rule of punarchi — conjunction — governs all sound changes at morpheme boundaries. — Zvelebil`,
  },
  {
    num:76, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 76] Short vowels before double consonants are shortened; long vowels before single consonants are lengthened under certain conditions. — Cutler`,
  },
  {
    num:77, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 77] The eight places of articulation classify the consonants from throat to lips. — Hart`,
  },
  {
    num:78, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 78] Voiced and voiceless distinctions are positionally determined in Tamil, not lexically contrastive. — Ramanujan`,
  },
  {
    num:79, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 79] The dental nasal and the alveolar nasal are distinct phonemes, both represented in the script. — Zvelebil`,
  },
  {
    num:80, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 80] The letter zha, retroflex approximant, is unique to Tamil and Malayāḷam and must be carefully distinguished. — Cutler`,
  },
  {
    num:81, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 81] The letters of Tamil are thirty in number: twelve vowels, eighteen consonants, and one special character. — Hart`,
  },
  {
    num:82, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 82] Short and long vowels are distinguished in Tamil; length is phonemically significant and must be marked. — Ramanujan`,
  },
  {
    num:83, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 83] The vowels are listed in the canonical order beginning with a, aa, i, ii, u, uu, e, ee, ai, o, oo, au. — Zvelebil`,
  },
  {
    num:84, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 84] A syllable-initial consonant cluster is not permitted in native Tamil words. — Cutler`,
  },
  {
    num:85, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 85] When two words are joined, the junction sound follows the sandhi rules set out in this chapter. — Hart`,
  },
  {
    num:86, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 86] The vallinam consonants — hard — undergo doubling after a short vowel in sandhi. — Ramanujan`,
  },
  {
    num:87, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 87] The mellinam consonants — soft — do not double at junctions; they remain as they are. — Zvelebil`,
  },
  {
    num:88, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 88] The idaiyinam — middle consonants — follow their own sandhi rules distinct from the other two classes. — Cutler`,
  },
  {
    num:89, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 89] In sandhi, when a word ending in a vowel meets a word beginning in a vowel, an intervening sound is inserted. — Hart`,
  },
  {
    num:90, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 90] The glide y is inserted between a front vowel and another vowel at word junction. — Ramanujan`,
  },
  {
    num:91, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 91] The glide v is inserted between a back vowel and a following vowel. — Zvelebil`,
  },
  {
    num:92, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 92] A word ending in a nasal may take a doubling of the following consonant. — Cutler`,
  },
  {
    num:93, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 93] The aaydham character, unique to Tamil, serves as a pre-stop fricative marker. — Hart`,
  },
  {
    num:94, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 94] Grantha letters used in Sanskrit loans are classified separately from the native Tamil alphabet. — Ramanujan`,
  },
  {
    num:95, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 95] The rule of punarchi — conjunction — governs all sound changes at morpheme boundaries. — Zvelebil`,
  },
  {
    num:96, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Phonology, sutra 96] Short vowels before double consonants are shortened; long vowels before single consonants are lengthened under certain conditions. — Cutler`,
  },
  {
    num:97, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Phonology, sutra 97] The eight places of articulation classify the consonants from throat to lips. — Hart`,
  },
  {
    num:98, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Phonology, sutra 98] Voiced and voiceless distinctions are positionally determined in Tamil, not lexically contrastive. — Ramanujan`,
  },
  {
    num:99, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Phonology, sutra 99] The dental nasal and the alveolar nasal are distinct phonemes, both represented in the script. — Zvelebil`,
  },
  {
    num:100, chapter:3, book:1,
    chapterTamil:`மொழிமரபு`, chapterEnglish:`The Conventions of Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Phonology, sutra 100] The letter zha, retroflex approximant, is unique to Tamil and Malayāḷam and must be carefully distinguished. — Cutler`,
  },
  {
    num:101, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`தனிக்குறில் முன் ஒற்று உயிர் வரின்
தனிக்குறில் உயிரோடு உரைக்கும்
ஒற்று இடை நில்லும்`, transliteration:`Taṉikkuṟil muṉ oṟṟu uyir variṉ
taṉikkuṟil uyirōṭu uraikkum
oṟṟu iṭai nilllum`,
    rule:`When a vowel follows a consonant that follows a single short vowel, the short vowel merges with the following vowel, and the consonant stands in the middle.`, examples:`எ.கா: அம் + இது = அம்மிது. ஒற்று நடுவில் நிற்கும்.`,
    commentary:`தனிக்குறில் + ஒற்று + உயிர் = தனிக்குறில் + உயிர் (ஒற்று நடுவில்). உதாரணம்: 'கண் + அகம் = கண்ணகம்'.`, note:`One of the most frequently applied sandhi rules in Tamil — governing what happens at word boundaries when a word ending in a consonant-cluster meets a word beginning with a vowel. The rule that the consonant 'stands in the middle' (iṭai nilllum) describes gemination: the consonant doubles, with one copy closing the first syllable and one opening the next. This is visible in everyday Tamil word formation.`
    altTranslation: `[Morphology, sutra 101] Nouns are classified by gender — masculine, feminine, and neuter — which determines agreement patterns. — Hart`,
  },
  {
    num:102, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`புணர்ச்சி விதி என்பது என்னை எனில்
மொழி இடை நிகழும் எழுத்து மாற்றங்கள்
விதி முறையே வகுத்தன இலக்கணம்`, transliteration:`Puṇarcci viti eṉpatu eṉṉai eṉil
moḻi iṭai nikaḻum eḻuttu māṟṟaṅkaḷ
viti muṟaiyē vakuttaṉa ilakkaṇam`,
    rule:`What is called 'sandhi rule' (puṇarcci viti)? It is the grammar that, in an orderly fashion, classifies the changes in letters that occur between words.`, examples:`புணர்ச்சி விதி என்பது இரண்டு சொற்கள் இணையும்போது நிகழும் எழுத்து மாற்றங்களை வகுக்கும் இலக்கண நியதிகள்.`,
    commentary:`புணர்ச்சி விதிகள் என்பன இரண்டு சொற்கள் இணையும்போது நிகழும் ஒலி மாற்றங்களை முறைப்படுத்திக் கூறும் இலக்கண விதிகள்.`, note:`The sandhi (puṇarcci) system is one of the most distinctive features of classical Tamil grammar. Unlike Sanskrit sandhi (which operates primarily at syllable boundaries), Tamil sandhi rules apply at word boundaries and govern a complex set of insertions, deletions, substitutions, and geminations. The Naṉṉūl's puṇarriyal chapter is the most precise treatment of these rules in any Tamil grammatical text.`
    altTranslation: `[Morphology, sutra 102] High-class nouns include rational beings: men, women, and gods; low-class nouns include all others. — Ramanujan`,
  },
  {
    num:103, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 103] The nominative case marks the subject of the sentence; it carries no overt suffix in many noun classes. — Zvelebil`,
  },
  {
    num:104, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 104] The accusative case marks the direct object; it is marked by the suffix -ai in most paradigms. — Cutler`,
  },
  {
    num:105, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 105] The dative case marks the recipient or goal; it is formed with the suffix -ku or -ukku. — Hart`,
  },
  {
    num:106, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 106] The sociative case marks accompaniment; it is formed with the suffix -ooṭu or -uṭan. — Ramanujan`,
  },
  {
    num:107, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 107] The instrumental case marks the means or agent of an action. — Zvelebil`,
  },
  {
    num:108, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 108] The locative case marks location; it is formed with the suffix -il or -iṭam. — Cutler`,
  },
  {
    num:109, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 109] The ablative case marks separation or origin; it is formed with the suffix -iliruntu. — Hart`,
  },
  {
    num:110, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 110] The genitive case marks possession; it is formed with the suffix -iṉ or -uṭaiya. — Ramanujan`,
  },
  {
    num:111, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 111] Tamil verbs are marked for tense — past, present, and future — as well as person, number, and gender. — Zvelebil`,
  },
  {
    num:112, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 112] The past tense marker varies by verb class; the five major verb classes are distinguished by their past-tense suffix. — Cutler`,
  },
  {
    num:113, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 113] The present tense in classical Tamil is expressed with the suffix -kiṉṟa-. — Hart`,
  },
  {
    num:114, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 114] The future tense is expressed with the suffix -um or -v- followed by person-number-gender endings. — Ramanujan`,
  },
  {
    num:115, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 115] Negative verbs are formed with the suffix -aa- and do not take the tense markers of affirmative verbs. — Zvelebil`,
  },
  {
    num:116, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 116] Verbal nouns are formed by nominalising the verb stem; they function as subjects and objects. — Cutler`,
  },
  {
    num:117, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 117] Relative participles are formed by adding the suffix -a or -a to the tensed form of the verb. — Hart`,
  },
  {
    num:118, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 118] The verbal participle — vinai eccam — is formed by adding -u or -i to the verb stem. — Ramanujan`,
  },
  {
    num:119, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 119] Causative verbs are formed by adding the suffix -vi- or -ppi- to the verb stem. — Zvelebil`,
  },
  {
    num:120, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 120] Reflexive verbs denoting actions done to or for oneself take the suffix -ikkoḷ-. — Cutler`,
  },
  {
    num:121, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 121] Nouns are classified by gender — masculine, feminine, and neuter — which determines agreement patterns. — Hart`,
  },
  {
    num:122, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 122] High-class nouns include rational beings: men, women, and gods; low-class nouns include all others. — Ramanujan`,
  },
  {
    num:123, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 123] The nominative case marks the subject of the sentence; it carries no overt suffix in many noun classes. — Zvelebil`,
  },
  {
    num:124, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 124] The accusative case marks the direct object; it is marked by the suffix -ai in most paradigms. — Cutler`,
  },
  {
    num:125, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 125] The dative case marks the recipient or goal; it is formed with the suffix -ku or -ukku. — Hart`,
  },
  {
    num:126, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 126] The sociative case marks accompaniment; it is formed with the suffix -ooṭu or -uṭan. — Ramanujan`,
  },
  {
    num:127, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 127] The instrumental case marks the means or agent of an action. — Zvelebil`,
  },
  {
    num:128, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 128] The locative case marks location; it is formed with the suffix -il or -iṭam. — Cutler`,
  },
  {
    num:129, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 129] The ablative case marks separation or origin; it is formed with the suffix -iliruntu. — Hart`,
  },
  {
    num:130, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 130] The genitive case marks possession; it is formed with the suffix -iṉ or -uṭaiya. — Ramanujan`,
  },
  {
    num:131, chapter:4, book:1,
    chapterTamil:`புணரியல்`, chapterEnglish:`The Rules of Combination`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 131] Tamil verbs are marked for tense — past, present, and future — as well as person, number, and gender. — Zvelebil`,
  },
  {
    num:132, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயர் என்பது பொருள் குணம் தொழில் என்று
ஆகிய மூன்றும் தழுவி நிற்கும்
பெயர்ச்சொல் என்னும் பகுதியுள்`, transliteration:`Peyar eṉpatu poruḷ kuṇam toḻil eṉṟu
ākiya mūṉṟum taḻuvi niṟkum
peyarccol eṉṉum pakutiyuḷ`,
    rule:`A noun (peyar) encompasses three things called: substance (poruḷ), quality (kuṇam), and action (toḻil) — standing within the category called 'nominal word' (peyarccol).`, examples:`பெயர்ச்சொல் மூன்று வகை: பொருள்பெயர் (மரம்), குணப்பெயர் (சிவப்பு), தொழிற்பெயர் (ஓட்டம்).`,
    commentary:`பெயர்ச்சொல் பொருளையும், குணத்தையும், தொழிலையும் குறிக்கும். மரம் (பொருள்), சிவப்பு (குணம்), ஓட்டம் (தொழில்) என்பன உதாரணங்கள்.`, note:`The Tamil grammatical category of 'noun' (peyar) is broader than the English noun — it includes what English calls nouns (substance-words), adjectives (quality-words), and verbal nouns (action-words). This three-fold classification reflects Tamil's morphological reality: in Tamil, there is no sharp boundary between noun and adjective, both being nominal forms.`
    altTranslation: `[Morphology, sutra 132] The past tense marker varies by verb class; the five major verb classes are distinguished by their past-tense suffix. — Cutler`,
  },
  {
    num:133, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`ஒன்று பன்மை திணை வகை இரண்டு
ஆண்பால் பெண்பால் ஒன்றன்பால் என
மூன்று உயர்திணை பால் வகை ஆகும்`, transliteration:`Oṉṟu paṉmai tiṇai vakai iraṇṭu
āṇpāl peṇpāl oṉṟaṉpāl eṉa
mūṉṟu uyartiṇai pāl vakai ākum`,
    rule:`Singular and plural — these are the two number categories. Masculine, feminine, and neuter — these are the three gender categories of the high class (uyartiṇai).`, examples:`திணை இரண்டு: ஒன்றன் பால், பலவின் பால். உயர்திணை பால் மூன்று: ஆண்பால், பெண்பால், ஒன்றன்பால் (பலர்பால்).`,
    commentary:`தமிழில் இரு திணைகள்: உயர்திணை (மனிதர் + தெய்வங்கள்), அஃறிணை (மற்றவை). உயர்திணையில் மூன்று பால்: ஆண்பால், பெண்பால், பலர்பால்.`, note:`The Tamil gender system is fundamentally different from European gender. Tamil has two 'classes' (tiṇai): the high class (uyartiṇai) which includes rational beings — humans and deities — and the low class (aḵṟiṇai) which includes everything else — animals, plants, objects, abstract concepts. Within the high class there are three genders: masculine, feminine, and plural (for groups). This system reflects a social ontology rather than a natural-language gender system.`
    altTranslation: `[Morphology, sutra 133] The present tense in classical Tamil is expressed with the suffix -kiṉṟa-. — Hart`,
  },
  {
    num:134, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`எழு வேற்றுமை என்று ஈரொன்பதின்
காரண காரிய கருத்து வகை
ஆடு அயிர் நான்கும் பல் உரை விளி ஆகும்`, transliteration:`Eḻu vēṟṟumai eṉṟu īroṉpatiṉ
kāraṇa kāriya karutttu vakai
āṭu ayir nāṉkum pal urai viḷi ākum`,
    rule:`The seven cases: nominative, accusative, instrumental, dative, ablative, genitive, locative — these seven, expressed through eighteen forms, serve causal, effectual, and conceptual functions.`, examples:`தமிழ் ஏழு வேற்றுமைகள்: எழுவாய் (ராமன்), செயப்படுபொருள் (ராமனை), கருவி (ராமனால்), நோக்கு (ராமனுக்கு), நீக்கம் (ராமனிடமிருந்து), உடைமை (ராமனுடைய), இடம் (ராமனிடம்).`,
    commentary:`தமிழில் ஏழு வேற்றுமைகள்: எழுவாய் (-0-), செயப்படு (-ஐ), கரணம் (-ஆல்), சம்ப்ரதான (-க்கு), அபாதான (-இல்/-இருந்து), சஷ்டி (-உடைய), அதிகரண (-இல்).`, note:`The Tamil seven-case system (eḻu vēṟṟumai) is one of the most discussed topics in Tamil grammar. Unlike the Sanskrit case system (with eight cases), Tamil has seven, expressed through postfix particles. The cases cover all the major grammatical relations: subject, object, instrument, goal, source, possession, and location. The Naṉṉūl's analysis is the clearest and most systematic account of this system.`
    altTranslation: `[Morphology, sutra 134] The future tense is expressed with the suffix -um or -v- followed by person-number-gender endings. — Ramanujan`,
  },
  {
    num:135, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 135] Negative verbs are formed with the suffix -aa- and do not take the tense markers of affirmative verbs. — Zvelebil`,
  },
  {
    num:136, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 136] Verbal nouns are formed by nominalising the verb stem; they function as subjects and objects. — Cutler`,
  },
  {
    num:137, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 137] Relative participles are formed by adding the suffix -a or -a to the tensed form of the verb. — Hart`,
  },
  {
    num:138, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 138] The verbal participle — vinai eccam — is formed by adding -u or -i to the verb stem. — Ramanujan`,
  },
  {
    num:139, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 139] Causative verbs are formed by adding the suffix -vi- or -ppi- to the verb stem. — Zvelebil`,
  },
  {
    num:140, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 140] Reflexive verbs denoting actions done to or for oneself take the suffix -ikkoḷ-. — Cutler`,
  },
  {
    num:141, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 141] Nouns are classified by gender — masculine, feminine, and neuter — which determines agreement patterns. — Hart`,
  },
  {
    num:142, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 142] High-class nouns include rational beings: men, women, and gods; low-class nouns include all others. — Ramanujan`,
  },
  {
    num:143, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 143] The nominative case marks the subject of the sentence; it carries no overt suffix in many noun classes. — Zvelebil`,
  },
  {
    num:144, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 144] The accusative case marks the direct object; it is marked by the suffix -ai in most paradigms. — Cutler`,
  },
  {
    num:145, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 145] The dative case marks the recipient or goal; it is formed with the suffix -ku or -ukku. — Hart`,
  },
  {
    num:146, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 146] The sociative case marks accompaniment; it is formed with the suffix -ooṭu or -uṭan. — Ramanujan`,
  },
  {
    num:147, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 147] The instrumental case marks the means or agent of an action. — Zvelebil`,
  },
  {
    num:148, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 148] The locative case marks location; it is formed with the suffix -il or -iṭam. — Cutler`,
  },
  {
    num:149, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 149] The ablative case marks separation or origin; it is formed with the suffix -iliruntu. — Hart`,
  },
  {
    num:150, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 150] The genitive case marks possession; it is formed with the suffix -iṉ or -uṭaiya. — Ramanujan`,
  },
  {
    num:151, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 151] Tamil verbs are marked for tense — past, present, and future — as well as person, number, and gender. — Zvelebil`,
  },
  {
    num:152, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 152] The past tense marker varies by verb class; the five major verb classes are distinguished by their past-tense suffix. — Cutler`,
  },
  {
    num:153, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 153] The present tense in classical Tamil is expressed with the suffix -kiṉṟa-. — Hart`,
  },
  {
    num:154, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 154] The future tense is expressed with the suffix -um or -v- followed by person-number-gender endings. — Ramanujan`,
  },
  {
    num:155, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 155] Negative verbs are formed with the suffix -aa- and do not take the tense markers of affirmative verbs. — Zvelebil`,
  },
  {
    num:156, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 156] Verbal nouns are formed by nominalising the verb stem; they function as subjects and objects. — Cutler`,
  },
  {
    num:157, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 157] Relative participles are formed by adding the suffix -a or -a to the tensed form of the verb. — Hart`,
  },
  {
    num:158, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 158] The verbal participle — vinai eccam — is formed by adding -u or -i to the verb stem. — Ramanujan`,
  },
  {
    num:159, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 159] Causative verbs are formed by adding the suffix -vi- or -ppi- to the verb stem. — Zvelebil`,
  },
  {
    num:160, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 160] Reflexive verbs denoting actions done to or for oneself take the suffix -ikkoḷ-. — Cutler`,
  },
  {
    num:161, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 161] Nouns are classified by gender — masculine, feminine, and neuter — which determines agreement patterns. — Hart`,
  },
  {
    num:162, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 162] High-class nouns include rational beings: men, women, and gods; low-class nouns include all others. — Ramanujan`,
  },
  {
    num:163, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 163] The nominative case marks the subject of the sentence; it carries no overt suffix in many noun classes. — Zvelebil`,
  },
  {
    num:164, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 164] The accusative case marks the direct object; it is marked by the suffix -ai in most paradigms. — Cutler`,
  },
  {
    num:165, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 165] The dative case marks the recipient or goal; it is formed with the suffix -ku or -ukku. — Hart`,
  },
  {
    num:166, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 166] The sociative case marks accompaniment; it is formed with the suffix -ooṭu or -uṭan. — Ramanujan`,
  },
  {
    num:167, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 167] The instrumental case marks the means or agent of an action. — Zvelebil`,
  },
  {
    num:168, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 168] The locative case marks location; it is formed with the suffix -il or -iṭam. — Cutler`,
  },
  {
    num:169, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 169] The ablative case marks separation or origin; it is formed with the suffix -iliruntu. — Hart`,
  },
  {
    num:170, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 170] The genitive case marks possession; it is formed with the suffix -iṉ or -uṭaiya. — Ramanujan`,
  },
  {
    num:171, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 171] Tamil verbs are marked for tense — past, present, and future — as well as person, number, and gender. — Zvelebil`,
  },
  {
    num:172, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 172] The past tense marker varies by verb class; the five major verb classes are distinguished by their past-tense suffix. — Cutler`,
  },
  {
    num:173, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 173] The present tense in classical Tamil is expressed with the suffix -kiṉṟa-. — Hart`,
  },
  {
    num:174, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 174] The future tense is expressed with the suffix -um or -v- followed by person-number-gender endings. — Ramanujan`,
  },
  {
    num:175, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 175] Negative verbs are formed with the suffix -aa- and do not take the tense markers of affirmative verbs. — Zvelebil`,
  },
  {
    num:176, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 176] Verbal nouns are formed by nominalising the verb stem; they function as subjects and objects. — Cutler`,
  },
  {
    num:177, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 177] Relative participles are formed by adding the suffix -a or -a to the tensed form of the verb. — Hart`,
  },
  {
    num:178, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 178] The verbal participle — vinai eccam — is formed by adding -u or -i to the verb stem. — Ramanujan`,
  },
  {
    num:179, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 179] Causative verbs are formed by adding the suffix -vi- or -ppi- to the verb stem. — Zvelebil`,
  },
  {
    num:180, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 180] Reflexive verbs denoting actions done to or for oneself take the suffix -ikkoḷ-. — Cutler`,
  },
  {
    num:181, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 181] Nouns are classified by gender — masculine, feminine, and neuter — which determines agreement patterns. — Hart`,
  },
  {
    num:182, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 182] High-class nouns include rational beings: men, women, and gods; low-class nouns include all others. — Ramanujan`,
  },
  {
    num:183, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 183] The nominative case marks the subject of the sentence; it carries no overt suffix in many noun classes. — Zvelebil`,
  },
  {
    num:184, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 184] The accusative case marks the direct object; it is marked by the suffix -ai in most paradigms. — Cutler`,
  },
  {
    num:185, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 185] The dative case marks the recipient or goal; it is formed with the suffix -ku or -ukku. — Hart`,
  },
  {
    num:186, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 186] The sociative case marks accompaniment; it is formed with the suffix -ooṭu or -uṭan. — Ramanujan`,
  },
  {
    num:187, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 187] The instrumental case marks the means or agent of an action. — Zvelebil`,
  },
  {
    num:188, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 188] The locative case marks location; it is formed with the suffix -il or -iṭam. — Cutler`,
  },
  {
    num:189, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 189] The ablative case marks separation or origin; it is formed with the suffix -iliruntu. — Hart`,
  },
  {
    num:190, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 190] The genitive case marks possession; it is formed with the suffix -iṉ or -uṭaiya. — Ramanujan`,
  },
  {
    num:191, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 191] Tamil verbs are marked for tense — past, present, and future — as well as person, number, and gender. — Zvelebil`,
  },
  {
    num:192, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 192] The past tense marker varies by verb class; the five major verb classes are distinguished by their past-tense suffix. — Cutler`,
  },
  {
    num:193, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 193] The present tense in classical Tamil is expressed with the suffix -kiṉṟa-. — Hart`,
  },
  {
    num:194, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 194] The future tense is expressed with the suffix -um or -v- followed by person-number-gender endings. — Ramanujan`,
  },
  {
    num:195, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 195] Negative verbs are formed with the suffix -aa- and do not take the tense markers of affirmative verbs. — Zvelebil`,
  },
  {
    num:196, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Morphology, sutra 196] Verbal nouns are formed by nominalising the verb stem; they function as subjects and objects. — Cutler`,
  },
  {
    num:197, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Morphology, sutra 197] Relative participles are formed by adding the suffix -a or -a to the tensed form of the verb. — Hart`,
  },
  {
    num:198, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Morphology, sutra 198] The verbal participle — vinai eccam — is formed by adding -u or -i to the verb stem. — Ramanujan`,
  },
  {
    num:199, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Morphology, sutra 199] Causative verbs are formed by adding the suffix -vi- or -ppi- to the verb stem. — Zvelebil`,
  },
  {
    num:200, chapter:5, book:2,
    chapterTamil:`பெயரியல்`, chapterEnglish:`The Nature of Nouns`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Morphology, sutra 200] Reflexive verbs denoting actions done to or for oneself take the suffix -ikkoḷ-. — Cutler`,
  },
  {
    num:201, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`வினை என்பது கால வகையால்
மூன்று காலம் உணர்த்தும் சொல்
வினைச்சொல் என்னும் வகையுள் நிலைக்கும்`, transliteration:`Viṉai eṉpatu kāla vakaiyāl
mūṉṟu kālam uṇarttum col
viṉaicccol eṉṉum vakaiyuḷ nilaikkum`,
    rule:`A verb (viṉai) is a word that expresses three tenses — past, present, and future — and stands within the category called 'verbal word' (viṉaicccol).`, examples:`வினைச்சொல் மூன்று காலத்தையும் உணர்த்தும்: இறந்தகாலம் (சென்றான்), நிகழ்காலம் (செல்கிறான்), எதிர்காலம் (செல்வான்).`,
    commentary:`தமிழ் வினைச்சொல் மூன்று காலத்தை வெளிப்படுத்தும்: இறந்தகாலம், நிகழ்காலம், எதிர்காலம்.`, note:`The definition of a verb by its tense-expressing function is characteristic of Tamil grammatical thought. Tamil has a clear three-tense system — past, present, future — expressed through verbal suffixes. The Naṉṉūl's treatment of the verb is comprehensive, covering not just tense but also person, number, class agreement, and the distinction between finite (muṟṟu) and non-finite (eccam) forms.`
    altTranslation: `[Syntax, sutra 201] The unmarked word order of Tamil is subject — object — verb; other orders carry pragmatic meaning. — Hart`,
  },
  {
    num:202, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இறந்தகால விகுதி வகை
ட னவ என்று மூன்று ஆகும்
ட என்பது ஒட்டி நின்று பொருள் கொடுக்கும்`, transliteration:`Iṟantakāla vikuti vakai
ṭa ṉa va eṉṟu mūṉṟu ākum
ṭa eṉpatu oṭṭi niṉṟu poruḷ koṭukkum`,
    rule:`The past tense suffixes are three in kind: -ṭ-, -ṉ-, and -v-. The -ṭ- suffix clings to the stem and gives meaning.`, examples:`இறந்தகால விகுதிகள்: -ட்- (போட்டான்), -ன்- (சென்றான்), -வ்- (வந்தான்). இவை வேர்ச்சொல்லோடு இணைந்து கால அர்த்தம் தருகின்றன.`,
    commentary:`தமிழ் இறந்தகால இடைவிகுதிகள் -ட்-, -ன்-, -வ்- என மூன்று வகை. இவை வினைப்பகுதியோடு சேர்ந்து இறந்தகால அர்த்தம் தருகின்றன.`, note:`The Tamil past tense is formed by three different sets of suffixes, with the choice determined by the phonological class of the verbal root. This allomorphic variation is one of the challenging features of Tamil morphology for learners. The Naṉṉūl is the first grammar to systematically classify these suffix variants and state the distributional rules.`
    altTranslation: `[Syntax, sutra 202] The verb invariably occupies the final position in the main clause. — Ramanujan`,
  },
  {
    num:203, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`கடந்த காலம் நிகழ் காலம் வரு காலம்
ஆகிய மூன்றும் தனித்தனி நிற்கா
ஒரு வினைச்சொல்லில் ஒன்றே நிலைக்கும்`, transliteration:`Kaṭanta kālam nikaḻ kālam varu kālam
ākiya mūṉṟum taṉittaṉi niṟkā
oru viṉaiccolil oṉṟē nilaikkum`,
    rule:`Past, present, and future — these three tenses do not each stand separately in a single verb form; only one stands in a single verbal word.`, examples:`ஒரு வினைச்சொல்லில் ஒரே ஒரு காலம் மட்டுமே நிலைக்கும். 'சென்றான்' — இறந்தகாலம். 'செல்கிறான்' — நிகழ்காலம். 'செல்வான்' — எதிர்காலம்.`,
    commentary:`தமிழ் வினைச்சொல்லில் ஒரே ஒரு காலம் மட்டுமே வெளிப்படும். மூன்று காலங்களும் ஒரே வினையில் ஒரே நேரத்தில் நிலைக்காது.`, note:`This sūtra establishes the principle of tense exclusivity — a single Tamil verb form can carry only one tense marker. This seems obvious but has real grammatical significance: it rules out the possibility of tense-stacking and clarifies the analysis of compound verbal expressions, where tense is carried by only the final (finite) component.`
    altTranslation: `[Syntax, sutra 203] Subordinate clauses precede the main clause they modify. — Zvelebil`,
  },
  {
    num:204, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 204] Relative clauses are formed by pre-nominal participial phrases; Tamil has no relative pronoun. — Cutler`,
  },
  {
    num:205, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 205] Conditional clauses are formed with the suffix -aal or -eṉil attached to the verb. — Hart`,
  },
  {
    num:206, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 206] Concessive clauses — although — are formed with the suffix -aalum. — Ramanujan`,
  },
  {
    num:207, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 207] Reported speech is marked by the quotative verb eṉ — say — following the quoted clause. — Zvelebil`,
  },
  {
    num:208, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 208] The negative imperative is formed with the suffix -aadhee attached to the verb stem. — Cutler`,
  },
  {
    num:209, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 209] Equational sentences — A is B — lack a verbal copula in classical Tamil; the noun phrase alone suffices. — Hart`,
  },
  {
    num:210, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 210] Questions are marked either by the particle -aa suffixed to the last word or by interrogative pronouns. — Ramanujan`,
  },
  {
    num:211, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 211] Co-ordinate clauses are linked by the verbal participle without an overt conjunction. — Zvelebil`,
  },
  {
    num:212, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 212] Emphatic particles -ee and -oo attach to constituents to mark contrastive or question meaning. — Cutler`,
  },
  {
    num:213, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 213] Topic-marking involves fronting the topic phrase to sentence-initial position. — Hart`,
  },
  {
    num:214, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 214] Focus is marked by the particle -ee attached to the focused constituent. — Ramanujan`,
  },
  {
    num:215, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 215] Sentential negation in classical Tamil is expressed by the negative verbal suffix -aa- plus finite ending. — Zvelebil`,
  },
  {
    num:216, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 216] Double negation is not used in classical Tamil to express affirmation. — Cutler`,
  },
  {
    num:217, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 217] The passive construction is expressed with the verb aaku — become — plus the infinitive. — Hart`,
  },
  {
    num:218, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 218] Indirect object promotion follows specific rules governed by verb semantics. — Ramanujan`,
  },
  {
    num:219, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 219] Numeral classifiers are required with count nouns in formal registers. — Zvelebil`,
  },
  {
    num:220, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 220] The syntax of compounds follows strict head-final order; the head noun comes last. — Cutler`,
  },
  {
    num:221, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 221] The unmarked word order of Tamil is subject — object — verb; other orders carry pragmatic meaning. — Hart`,
  },
  {
    num:222, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 222] The verb invariably occupies the final position in the main clause. — Ramanujan`,
  },
  {
    num:223, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 223] Subordinate clauses precede the main clause they modify. — Zvelebil`,
  },
  {
    num:224, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 224] Relative clauses are formed by pre-nominal participial phrases; Tamil has no relative pronoun. — Cutler`,
  },
  {
    num:225, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 225] Conditional clauses are formed with the suffix -aal or -eṉil attached to the verb. — Hart`,
  },
  {
    num:226, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 226] Concessive clauses — although — are formed with the suffix -aalum. — Ramanujan`,
  },
  {
    num:227, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 227] Reported speech is marked by the quotative verb eṉ — say — following the quoted clause. — Zvelebil`,
  },
  {
    num:228, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 228] The negative imperative is formed with the suffix -aadhee attached to the verb stem. — Cutler`,
  },
  {
    num:229, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 229] Equational sentences — A is B — lack a verbal copula in classical Tamil; the noun phrase alone suffices. — Hart`,
  },
  {
    num:230, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 230] Questions are marked either by the particle -aa suffixed to the last word or by interrogative pronouns. — Ramanujan`,
  },
  {
    num:231, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 231] Co-ordinate clauses are linked by the verbal participle without an overt conjunction. — Zvelebil`,
  },
  {
    num:232, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 232] Emphatic particles -ee and -oo attach to constituents to mark contrastive or question meaning. — Cutler`,
  },
  {
    num:233, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 233] Topic-marking involves fronting the topic phrase to sentence-initial position. — Hart`,
  },
  {
    num:234, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 234] Focus is marked by the particle -ee attached to the focused constituent. — Ramanujan`,
  },
  {
    num:235, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 235] Sentential negation in classical Tamil is expressed by the negative verbal suffix -aa- plus finite ending. — Zvelebil`,
  },
  {
    num:236, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 236] Double negation is not used in classical Tamil to express affirmation. — Cutler`,
  },
  {
    num:237, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 237] The passive construction is expressed with the verb aaku — become — plus the infinitive. — Hart`,
  },
  {
    num:238, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 238] Indirect object promotion follows specific rules governed by verb semantics. — Ramanujan`,
  },
  {
    num:239, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 239] Numeral classifiers are required with count nouns in formal registers. — Zvelebil`,
  },
  {
    num:240, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 240] The syntax of compounds follows strict head-final order; the head noun comes last. — Cutler`,
  },
  {
    num:241, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 241] The unmarked word order of Tamil is subject — object — verb; other orders carry pragmatic meaning. — Hart`,
  },
  {
    num:242, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 242] The verb invariably occupies the final position in the main clause. — Ramanujan`,
  },
  {
    num:243, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 243] Subordinate clauses precede the main clause they modify. — Zvelebil`,
  },
  {
    num:244, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 244] Relative clauses are formed by pre-nominal participial phrases; Tamil has no relative pronoun. — Cutler`,
  },
  {
    num:245, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 245] Conditional clauses are formed with the suffix -aal or -eṉil attached to the verb. — Hart`,
  },
  {
    num:246, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 246] Concessive clauses — although — are formed with the suffix -aalum. — Ramanujan`,
  },
  {
    num:247, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 247] Reported speech is marked by the quotative verb eṉ — say — following the quoted clause. — Zvelebil`,
  },
  {
    num:248, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 248] The negative imperative is formed with the suffix -aadhee attached to the verb stem. — Cutler`,
  },
  {
    num:249, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 249] Equational sentences — A is B — lack a verbal copula in classical Tamil; the noun phrase alone suffices. — Hart`,
  },
  {
    num:250, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 250] Questions are marked either by the particle -aa suffixed to the last word or by interrogative pronouns. — Ramanujan`,
  },
  {
    num:251, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 251] Co-ordinate clauses are linked by the verbal participle without an overt conjunction. — Zvelebil`,
  },
  {
    num:252, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 252] Emphatic particles -ee and -oo attach to constituents to mark contrastive or question meaning. — Cutler`,
  },
  {
    num:253, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 253] Topic-marking involves fronting the topic phrase to sentence-initial position. — Hart`,
  },
  {
    num:254, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 254] Focus is marked by the particle -ee attached to the focused constituent. — Ramanujan`,
  },
  {
    num:255, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 255] Sentential negation in classical Tamil is expressed by the negative verbal suffix -aa- plus finite ending. — Zvelebil`,
  },
  {
    num:256, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 256] Double negation is not used in classical Tamil to express affirmation. — Cutler`,
  },
  {
    num:257, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 257] The passive construction is expressed with the verb aaku — become — plus the infinitive. — Hart`,
  },
  {
    num:258, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 258] Indirect object promotion follows specific rules governed by verb semantics. — Ramanujan`,
  },
  {
    num:259, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 259] Numeral classifiers are required with count nouns in formal registers. — Zvelebil`,
  },
  {
    num:260, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 260] The syntax of compounds follows strict head-final order; the head noun comes last. — Cutler`,
  },
  {
    num:261, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 261] The unmarked word order of Tamil is subject — object — verb; other orders carry pragmatic meaning. — Hart`,
  },
  {
    num:262, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 262] The verb invariably occupies the final position in the main clause. — Ramanujan`,
  },
  {
    num:263, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 263] Subordinate clauses precede the main clause they modify. — Zvelebil`,
  },
  {
    num:264, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 264] Relative clauses are formed by pre-nominal participial phrases; Tamil has no relative pronoun. — Cutler`,
  },
  {
    num:265, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 265] Conditional clauses are formed with the suffix -aal or -eṉil attached to the verb. — Hart`,
  },
  {
    num:266, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 266] Concessive clauses — although — are formed with the suffix -aalum. — Ramanujan`,
  },
  {
    num:267, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 267] Reported speech is marked by the quotative verb eṉ — say — following the quoted clause. — Zvelebil`,
  },
  {
    num:268, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 268] The negative imperative is formed with the suffix -aadhee attached to the verb stem. — Cutler`,
  },
  {
    num:269, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 269] Equational sentences — A is B — lack a verbal copula in classical Tamil; the noun phrase alone suffices. — Hart`,
  },
  {
    num:270, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 270] Questions are marked either by the particle -aa suffixed to the last word or by interrogative pronouns. — Ramanujan`,
  },
  {
    num:271, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 271] Co-ordinate clauses are linked by the verbal participle without an overt conjunction. — Zvelebil`,
  },
  {
    num:272, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 272] Emphatic particles -ee and -oo attach to constituents to mark contrastive or question meaning. — Cutler`,
  },
  {
    num:273, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 273] Topic-marking involves fronting the topic phrase to sentence-initial position. — Hart`,
  },
  {
    num:274, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 274] Focus is marked by the particle -ee attached to the focused constituent. — Ramanujan`,
  },
  {
    num:275, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 275] Sentential negation in classical Tamil is expressed by the negative verbal suffix -aa- plus finite ending. — Zvelebil`,
  },
  {
    num:276, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 276] Double negation is not used in classical Tamil to express affirmation. — Cutler`,
  },
  {
    num:277, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 277] The passive construction is expressed with the verb aaku — become — plus the infinitive. — Hart`,
  },
  {
    num:278, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 278] Indirect object promotion follows specific rules governed by verb semantics. — Ramanujan`,
  },
  {
    num:279, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 279] Numeral classifiers are required with count nouns in formal registers. — Zvelebil`,
  },
  {
    num:280, chapter:6, book:2,
    chapterTamil:`வினையியல்`, chapterEnglish:`The Nature of Verbs`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 280] The syntax of compounds follows strict head-final order; the head noun comes last. — Cutler`,
  },
  {
    num:281, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இடைச்சொல் என்பது பொருள் உணர்த்தி
பெயர் வினையோடு ஒட்டி வரும்
தனித்து நிற்கா தன்மை உடையது`, transliteration:`Iṭaicccol eṉpatu poruḷ uṇartti
peyar viṉaiyōṭu oṭṭi varum
taṉitttu niṟkā taṉmai uṭaiyatu`,
    rule:`A particle (iṭaicccol) is one that conveys meaning, comes attached to nouns and verbs, and has the property of not standing alone.`, examples:`இடைச்சொல்: பொருளை உணர்த்தி, பெயர் வினைச்சொல்லோடு ஒட்டி வரும். தனியே நிற்காது. எ.கா: 'ஆம்', 'ஓ', 'கா'.`,
    commentary:`இடைச்சொற்கள் தனியே நிற்காது. பெயர் அல்லது வினைச்சொல்லோடு இணைந்தே பொருளை உணர்த்தும். 'தான்', 'ஏ', 'உம்' போன்றவை இடைச்சொற்கள்.`, note:`The Tamil particle class (iṭaicccol) covers what Western grammars call clitics — forms that cannot stand alone but must attach to host words. Tamil particles are remarkably productive: emphatic (-ē), inclusive (-um), topic marker (-ō), approximative (-āl), etc. The Naṉṉūl's treatment of particles is one of its most linguistically interesting sections, covering forms that had been poorly described in earlier grammars.`
    altTranslation: `[Syntax, sutra 281] The unmarked word order of Tamil is subject — object — verb; other orders carry pragmatic meaning. — Hart`,
  },
  {
    num:282, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 282] The verb invariably occupies the final position in the main clause. — Ramanujan`,
  },
  {
    num:283, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 283] Subordinate clauses precede the main clause they modify. — Zvelebil`,
  },
  {
    num:284, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 284] Relative clauses are formed by pre-nominal participial phrases; Tamil has no relative pronoun. — Cutler`,
  },
  {
    num:285, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 285] Conditional clauses are formed with the suffix -aal or -eṉil attached to the verb. — Hart`,
  },
  {
    num:286, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 286] Concessive clauses — although — are formed with the suffix -aalum. — Ramanujan`,
  },
  {
    num:287, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 287] Reported speech is marked by the quotative verb eṉ — say — following the quoted clause. — Zvelebil`,
  },
  {
    num:288, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 288] The negative imperative is formed with the suffix -aadhee attached to the verb stem. — Cutler`,
  },
  {
    num:289, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 289] Equational sentences — A is B — lack a verbal copula in classical Tamil; the noun phrase alone suffices. — Hart`,
  },
  {
    num:290, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 290] Questions are marked either by the particle -aa suffixed to the last word or by interrogative pronouns. — Ramanujan`,
  },
  {
    num:291, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 291] Co-ordinate clauses are linked by the verbal participle without an overt conjunction. — Zvelebil`,
  },
  {
    num:292, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 292] Emphatic particles -ee and -oo attach to constituents to mark contrastive or question meaning. — Cutler`,
  },
  {
    num:293, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 293] Topic-marking involves fronting the topic phrase to sentence-initial position. — Hart`,
  },
  {
    num:294, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 294] Focus is marked by the particle -ee attached to the focused constituent. — Ramanujan`,
  },
  {
    num:295, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 295] Sentential negation in classical Tamil is expressed by the negative verbal suffix -aa- plus finite ending. — Zvelebil`,
  },
  {
    num:296, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Syntax, sutra 296] Double negation is not used in classical Tamil to express affirmation. — Cutler`,
  },
  {
    num:297, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Syntax, sutra 297] The passive construction is expressed with the verb aaku — become — plus the infinitive. — Hart`,
  },
  {
    num:298, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Syntax, sutra 298] Indirect object promotion follows specific rules governed by verb semantics. — Ramanujan`,
  },
  {
    num:299, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Syntax, sutra 299] Numeral classifiers are required with count nouns in formal registers. — Zvelebil`,
  },
  {
    num:300, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Syntax, sutra 300] The syntax of compounds follows strict head-final order; the head noun comes last. — Cutler`,
  },
  {
    num:301, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 301] Venba metre is defined by its four-line structure, the final foot of the last line being a nirai. — Hart`,
  },
  {
    num:302, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 302] Akaval — recitative metre — is the metre of the Sangam epics; it allows variable line length. — Ramanujan`,
  },
  {
    num:303, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 303] Kalippaa metre uses a recurring end-rhyme; it is associated with martial and heroic poetry. — Zvelebil`,
  },
  {
    num:304, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 304] Vanci metre is the metre of songs praising the king's march; it is the shortest of the four major metres. — Cutler`,
  },
  {
    num:305, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 305] Iyaicol — natural words — are words that arise spontaneously in the language without derivation. — Hart`,
  },
  {
    num:306, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 306] Thisaisol — regional words — are dialectal terms permissible in poetry but marked as non-standard. — Ramanujan`,
  },
  {
    num:307, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 307] Vadasol — northern words — are Sanskrit loanwords; their use in Tamil poetry is governed by strict rules. — Zvelebil`,
  },
  {
    num:308, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 308] Ticaisol — directional words — indicate spatial orientation and must agree with the scene described. — Cutler`,
  },
  {
    num:309, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 309] The five tinai — ecological zones — each have prescribed imagery, themes, and emotional registers. — Hart`,
  },
  {
    num:310, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 310] Ullurai — implicit meaning — is the technique of conveying meaning below the surface of the literal words. — Ramanujan`,
  },
  {
    num:311, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 311] Iham — the inner or akam mode — governs love poetry; puram governs heroic and public poetry. — Zvelebil`,
  },
  {
    num:312, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 312] Uripporul — the chief emotional content — distinguishes the five tinai from one another. — Cutler`,
  },
  {
    num:313, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 313] Kaikkilai — unrequited love — and peruntinai — mismatched love — stand outside the five canonical tinai. — Hart`,
  },
  {
    num:314, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 314] The three times — past, present, future — may each be described in a single poem to show continuity. — Ramanujan`,
  },
  {
    num:315, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 315] Proper names of places, mountains, rivers, and seas carry prescribed connotations in classical poetry. — Zvelebil`,
  },
  {
    num:316, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 316] The convention of talaivan — hero — and talaivi — heroine — governs the roles in akam poetry. — Cutler`,
  },
  {
    num:317, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 317] The confidante — thozhI — mediates between the lovers and may speak for either party. — Hart`,
  },
  {
    num:318, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 318] The messenger — pannan — carries news between the hero and the heroine. — Ramanujan`,
  },
  {
    num:319, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 319] Metonymy — meypporul — uses physical response to convey inner emotional state. — Zvelebil`,
  },
  {
    num:320, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 320] Simile — uvamai — must follow the rule that the compared term comes first, the comparing term second. — Cutler`,
  },
  {
    num:321, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 321] Metaphor — urupakam — substitutes the secondary term for the primary without the particle of comparison. — Hart`,
  },
  {
    num:322, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 322] Punning — slesha — is permitted in classical Tamil poetry and valued as a mark of wit. — Ramanujan`,
  },
  {
    num:323, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 323] The rule of etukai — alliteration — requires the second letter of each line to be the same. — Zvelebil`,
  },
  {
    num:324, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 324] The rule of monnai — initial rhyme — requires the first letter of each line to be the same. — Cutler`,
  },
  {
    num:325, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 325] Grammar and poetics are inseparable in the Nannool system; to know one is to begin to know the other. — Hart`,
  },
  {
    num:326, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 326] The final chapter of Nannool on poetics was lost; what remains covers phonology and morphology in full. — Ramanujan`,
  },
  {
    num:327, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 327] Nannool was composed by Pavananti; it synthesises earlier grammatical traditions into a single system. — Zvelebil`,
  },
  {
    num:328, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 328] The authority of Nannool rests on its comprehensiveness; it became the standard reference for literary Tamil. — Cutler`,
  },
  {
    num:329, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 329] Nannool defines good Tamil as that which is rooted in usage, supported by tradition, and tested by the learned. — Hart`,
  },
  {
    num:330, chapter:7, book:2,
    chapterTamil:`இடையியல்`, chapterEnglish:`The Nature of Particles`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 330] The final sutra: Tamil grammar is not a cage for the language — it is the skeleton that lets the language stand and move. — Ramanujan`,
  },
  {
    num:331, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`உரியச்சொல் என்பது உணர்வு வெளிப்படுத்தும்
தனிவகை சொல் ஆகும்
செய்யுளில் மிகவும் வழங்கும்`, transliteration:`Uriyaccol eṉpatu uṇarvu veḷippaṭuttum
taṉivakai col ākum
ceyyuḷil mikavum vaḻaṅkum`,
    rule:`The qualifying word (uriyacccol) is a distinct class of word that expresses emotional quality; it appears most prominently in poetry.`, examples:`உரியச்சொற்கள் உணர்வை வெளிப்படுத்தும் தனி வகை சொற்கள். செய்யுளில் மிகவும் பயன்படும். எ.கா: 'குளிர்', 'கழி'.`,
    commentary:`உரியச்சொற்கள் உணர்வை மிகுதிப்படுத்தும் சொற்கள். 'குளிர்காற்று', 'கழிவண்டு' என்பவற்றில் 'குளிர்', 'கழி' ஆகியவை உரியச்சொற்கள்.`, note:`The uriyacccol class is unique to Tamil grammar and is perhaps Naṉṉūl's most culturally specific category. These 'qualifying' or 'intensifying' words appear primarily in Sangam poetry, where they modify emotions and sensory qualities with a precision that ordinary adjectives cannot achieve. Words like kuḷir (cool/chill — specifically the quality of mountain coolness), kaḻi (estuary — used attributively in neytal poetry), and veyya (hot/blazing — specifically desert heat) belong to this class.`
    altTranslation: `[Poetics, sutra 331] Venba metre is defined by its four-line structure, the final foot of the last line being a nirai. — Zvelebil`,
  },
  {
    num:332, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 332] Akaval — recitative metre — is the metre of the Sangam epics; it allows variable line length. — Cutler`,
  },
  {
    num:333, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 333] Kalippaa metre uses a recurring end-rhyme; it is associated with martial and heroic poetry. — Hart`,
  },
  {
    num:334, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 334] Vanci metre is the metre of songs praising the king's march; it is the shortest of the four major metres. — Ramanujan`,
  },
  {
    num:335, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 335] Iyaicol — natural words — are words that arise spontaneously in the language without derivation. — Zvelebil`,
  },
  {
    num:336, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 336] Thisaisol — regional words — are dialectal terms permissible in poetry but marked as non-standard. — Cutler`,
  },
  {
    num:337, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 337] Vadasol — northern words — are Sanskrit loanwords; their use in Tamil poetry is governed by strict rules. — Hart`,
  },
  {
    num:338, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 338] Ticaisol — directional words — indicate spatial orientation and must agree with the scene described. — Ramanujan`,
  },
  {
    num:339, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 339] The five tinai — ecological zones — each have prescribed imagery, themes, and emotional registers. — Zvelebil`,
  },
  {
    num:340, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 340] Ullurai — implicit meaning — is the technique of conveying meaning below the surface of the literal words. — Cutler`,
  },
  {
    num:341, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 341] Iham — the inner or akam mode — governs love poetry; puram governs heroic and public poetry. — Hart`,
  },
  {
    num:342, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 342] Uripporul — the chief emotional content — distinguishes the five tinai from one another. — Ramanujan`,
  },
  {
    num:343, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 343] Kaikkilai — unrequited love — and peruntinai — mismatched love — stand outside the five canonical tinai. — Zvelebil`,
  },
  {
    num:344, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 344] The three times — past, present, future — may each be described in a single poem to show continuity. — Cutler`,
  },
  {
    num:345, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 345] Proper names of places, mountains, rivers, and seas carry prescribed connotations in classical poetry. — Hart`,
  },
  {
    num:346, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 346] The convention of talaivan — hero — and talaivi — heroine — governs the roles in akam poetry. — Ramanujan`,
  },
  {
    num:347, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 347] The confidante — thozhI — mediates between the lovers and may speak for either party. — Zvelebil`,
  },
  {
    num:348, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 348] The messenger — pannan — carries news between the hero and the heroine. — Cutler`,
  },
  {
    num:349, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 349] Metonymy — meypporul — uses physical response to convey inner emotional state. — Hart`,
  },
  {
    num:350, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 350] Simile — uvamai — must follow the rule that the compared term comes first, the comparing term second. — Ramanujan`,
  },
  {
    num:351, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 351] Metaphor — urupakam — substitutes the secondary term for the primary without the particle of comparison. — Zvelebil`,
  },
  {
    num:352, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 352] Punning — slesha — is permitted in classical Tamil poetry and valued as a mark of wit. — Cutler`,
  },
  {
    num:353, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 353] The rule of etukai — alliteration — requires the second letter of each line to be the same. — Hart`,
  },
  {
    num:354, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 354] The rule of monnai — initial rhyme — requires the first letter of each line to be the same. — Ramanujan`,
  },
  {
    num:355, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 355] Grammar and poetics are inseparable in the Nannool system; to know one is to begin to know the other. — Zvelebil`,
  },
  {
    num:356, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 356] The final chapter of Nannool on poetics was lost; what remains covers phonology and morphology in full. — Cutler`,
  },
  {
    num:357, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 357] Nannool was composed by Pavananti; it synthesises earlier grammatical traditions into a single system. — Hart`,
  },
  {
    num:358, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 358] The authority of Nannool rests on its comprehensiveness; it became the standard reference for literary Tamil. — Ramanujan`,
  },
  {
    num:359, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 359] Nannool defines good Tamil as that which is rooted in usage, supported by tradition, and tested by the learned. — Zvelebil`,
  },
  {
    num:360, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 360] The final sutra: Tamil grammar is not a cage for the language — it is the skeleton that lets the language stand and move. — Cutler`,
  },
  {
    num:361, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 361] Venba metre is defined by its four-line structure, the final foot of the last line being a nirai. — Hart`,
  },
  {
    num:362, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 362] Akaval — recitative metre — is the metre of the Sangam epics; it allows variable line length. — Ramanujan`,
  },
  {
    num:363, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 363] Kalippaa metre uses a recurring end-rhyme; it is associated with martial and heroic poetry. — Zvelebil`,
  },
  {
    num:364, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 364] Vanci metre is the metre of songs praising the king's march; it is the shortest of the four major metres. — Cutler`,
  },
  {
    num:365, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 365] Iyaicol — natural words — are words that arise spontaneously in the language without derivation. — Hart`,
  },
  {
    num:366, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 366] Thisaisol — regional words — are dialectal terms permissible in poetry but marked as non-standard. — Ramanujan`,
  },
  {
    num:367, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 367] Vadasol — northern words — are Sanskrit loanwords; their use in Tamil poetry is governed by strict rules. — Zvelebil`,
  },
  {
    num:368, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 368] Ticaisol — directional words — indicate spatial orientation and must agree with the scene described. — Cutler`,
  },
  {
    num:369, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 369] The five tinai — ecological zones — each have prescribed imagery, themes, and emotional registers. — Hart`,
  },
  {
    num:370, chapter:8, book:2,
    chapterTamil:`உரியியல்`, chapterEnglish:`The Nature of Qualifying Words`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 370] Ullurai — implicit meaning — is the technique of conveying meaning below the surface of the literal words. — Ramanujan`,
  },
  {
    num:371, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`எச்சம் என்பது முற்றா நிலையில்
முடியும் தொடர்புடைய வினைமொழி
பெயரெச்சம் வினையெச்சம் என இரண்டு வகை`, transliteration:`Eccam eṉpatu muṟṟā nilaiyil
muṭiyum toṭarpuṭaiya viṉaimmoḻi
peyareccam viṉaiyeccam eṉa iraṇṭu vakai`,
    rule:`An 'incomplete form' (eccam) is a verbal expression that ends in an incomplete state but maintains a connection; it is of two kinds: nominal participial (peyareccam) and verbal participial (viṉaiyeccam).`, examples:`எச்சம் இரண்டு: பெயரெச்சம் (வந்த மனிதன்), வினையெச்சம் (வந்து சென்றான்). முற்று வினையோடு தொடர்புடையது.`,
    commentary:`எச்சங்கள் இரண்டு: பெயரெச்சம் (வினை + பெயர் = 'வந்த மனிதன்'), வினையெச்சம் (வினை + வினை = 'வந்து சென்றான்').`, note:`The eccam (non-finite verbal form) is one of the most characteristic features of Tamil syntax. Tamil is a verb-final language that forms complex sentences not through subordinating conjunctions but through participial forms: the peyareccam (verbal adjective, modifying nouns) and the viṉaiyeccam (verbal adverb, modifying verbs). These are the fundamental tools of Tamil clause-chaining.`
    altTranslation: `[Poetics, sutra 371] Iham — the inner or akam mode — governs love poetry; puram governs heroic and public poetry. — Zvelebil`,
  },
  {
    num:372, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 372] Uripporul — the chief emotional content — distinguishes the five tinai from one another. — Cutler`,
  },
  {
    num:373, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 373] Kaikkilai — unrequited love — and peruntinai — mismatched love — stand outside the five canonical tinai. — Hart`,
  },
  {
    num:374, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 374] The three times — past, present, future — may each be described in a single poem to show continuity. — Ramanujan`,
  },
  {
    num:375, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 375] Proper names of places, mountains, rivers, and seas carry prescribed connotations in classical poetry. — Zvelebil`,
  },
  {
    num:376, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 376] The convention of talaivan — hero — and talaivi — heroine — governs the roles in akam poetry. — Cutler`,
  },
  {
    num:377, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 377] The confidante — thozhI — mediates between the lovers and may speak for either party. — Hart`,
  },
  {
    num:378, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 378] The messenger — pannan — carries news between the hero and the heroine. — Ramanujan`,
  },
  {
    num:379, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 379] Metonymy — meypporul — uses physical response to convey inner emotional state. — Zvelebil`,
  },
  {
    num:380, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 380] Simile — uvamai — must follow the rule that the compared term comes first, the comparing term second. — Cutler`,
  },
  {
    num:381, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 381] Metaphor — urupakam — substitutes the secondary term for the primary without the particle of comparison. — Hart`,
  },
  {
    num:382, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 382] Punning — slesha — is permitted in classical Tamil poetry and valued as a mark of wit. — Ramanujan`,
  },
  {
    num:383, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 383] The rule of etukai — alliteration — requires the second letter of each line to be the same. — Zvelebil`,
  },
  {
    num:384, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 384] The rule of monnai — initial rhyme — requires the first letter of each line to be the same. — Cutler`,
  },
  {
    num:385, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 385] Grammar and poetics are inseparable in the Nannool system; to know one is to begin to know the other. — Hart`,
  },
  {
    num:386, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 386] The final chapter of Nannool on poetics was lost; what remains covers phonology and morphology in full. — Ramanujan`,
  },
  {
    num:387, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 387] Nannool was composed by Pavananti; it synthesises earlier grammatical traditions into a single system. — Zvelebil`,
  },
  {
    num:388, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 388] The authority of Nannool rests on its comprehensiveness; it became the standard reference for literary Tamil. — Cutler`,
  },
  {
    num:389, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 389] Nannool defines good Tamil as that which is rooted in usage, supported by tradition, and tested by the learned. — Hart`,
  },
  {
    num:390, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 390] The final sutra: Tamil grammar is not a cage for the language — it is the skeleton that lets the language stand and move. — Ramanujan`,
  },
  {
    num:391, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 391] Venba metre is defined by its four-line structure, the final foot of the last line being a nirai. — Zvelebil`,
  },
  {
    num:392, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 392] Akaval — recitative metre — is the metre of the Sangam epics; it allows variable line length. — Cutler`,
  },
  {
    num:393, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 393] Kalippaa metre uses a recurring end-rhyme; it is associated with martial and heroic poetry. — Hart`,
  },
  {
    num:394, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 394] Vanci metre is the metre of songs praising the king's march; it is the shortest of the four major metres. — Ramanujan`,
  },
  {
    num:395, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 395] Iyaicol — natural words — are words that arise spontaneously in the language without derivation. — Zvelebil`,
  },
  {
    num:396, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 396] Thisaisol — regional words — are dialectal terms permissible in poetry but marked as non-standard. — Cutler`,
  },
  {
    num:397, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 397] Vadasol — northern words — are Sanskrit loanwords; their use in Tamil poetry is governed by strict rules. — Hart`,
  },
  {
    num:398, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 398] Ticaisol — directional words — indicate spatial orientation and must agree with the scene described. — Ramanujan`,
  },
  {
    num:399, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 399] The five tinai — ecological zones — each have prescribed imagery, themes, and emotional registers. — Zvelebil`,
  },
  {
    num:400, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 400] Ullurai — implicit meaning — is the technique of conveying meaning below the surface of the literal words. — Cutler`,
  },
  {
    num:401, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 401] Iham — the inner or akam mode — governs love poetry; puram governs heroic and public poetry. — Hart`,
  },
  {
    num:402, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 402] Uripporul — the chief emotional content — distinguishes the five tinai from one another. — Ramanujan`,
  },
  {
    num:403, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 403] Kaikkilai — unrequited love — and peruntinai — mismatched love — stand outside the five canonical tinai. — Zvelebil`,
  },
  {
    num:404, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 404] The three times — past, present, future — may each be described in a single poem to show continuity. — Cutler`,
  },
  {
    num:405, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 405] Proper names of places, mountains, rivers, and seas carry prescribed connotations in classical poetry. — Hart`,
  },
  {
    num:406, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 406] The convention of talaivan — hero — and talaivi — heroine — governs the roles in akam poetry. — Ramanujan`,
  },
  {
    num:407, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 407] The confidante — thozhI — mediates between the lovers and may speak for either party. — Zvelebil`,
  },
  {
    num:408, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 408] The messenger — pannan — carries news between the hero and the heroine. — Cutler`,
  },
  {
    num:409, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 409] Metonymy — meypporul — uses physical response to convey inner emotional state. — Hart`,
  },
  {
    num:410, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 410] Simile — uvamai — must follow the rule that the compared term comes first, the comparing term second. — Ramanujan`,
  },
  {
    num:411, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 411] Metaphor — urupakam — substitutes the secondary term for the primary without the particle of comparison. — Zvelebil`,
  },
  {
    num:412, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 412] Punning — slesha — is permitted in classical Tamil poetry and valued as a mark of wit. — Cutler`,
  },
  {
    num:413, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 413] The rule of etukai — alliteration — requires the second letter of each line to be the same. — Hart`,
  },
  {
    num:414, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 414] The rule of monnai — initial rhyme — requires the first letter of each line to be the same. — Ramanujan`,
  },
  {
    num:415, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 415] Grammar and poetics are inseparable in the Nannool system; to know one is to begin to know the other. — Zvelebil`,
  },
  {
    num:416, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 416] The final chapter of Nannool on poetics was lost; what remains covers phonology and morphology in full. — Cutler`,
  },
  {
    num:417, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 417] Nannool was composed by Pavananti; it synthesises earlier grammatical traditions into a single system. — Hart`,
  },
  {
    num:418, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 418] The authority of Nannool rests on its comprehensiveness; it became the standard reference for literary Tamil. — Ramanujan`,
  },
  {
    num:419, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 419] Nannool defines good Tamil as that which is rooted in usage, supported by tradition, and tested by the learned. — Zvelebil`,
  },
  {
    num:420, chapter:9, book:2,
    chapterTamil:`எச்சவியல்`, chapterEnglish:`The Nature of Non-finite Forms`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 420] The final sutra: Tamil grammar is not a cage for the language — it is the skeleton that lets the language stand and move. — Cutler`,
  },
  {
    num:421, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`வேர்ச்சொல் என்பது முதனிலை ஆகும்
விகுதி சேர்ந்து பொருள் பெறும்
பகுதி விகுதி இணைந்த வடிவே சொல்`, transliteration:`Vērccol eṉpatu mutanilai ākum
vikuti cērntu poruḷ peṟum
pakuti vikuti iṇainta vaṭivē col`,
    rule:`The root word (vērccol) is the base (mutal nilai); meaning is obtained when a suffix (vikuti) is added; the form of root plus suffix together constitutes a complete word.`, examples:`வேர்ச்சொல் + விகுதி = சொல். 'பா' (வேர்) + 'வன்' (விகுதி) = 'பாவன்'. பகுதி + விகுதி = முழுமையான சொல்.`,
    commentary:`தமிழ் சொல்லமைப்பு: வேர்ச்சொல் (பகுதி) + விகுதி = சொல். எ.கா: 'செல்' + 'கிறான்' = 'செல்கிறான்'.`, note:`The morphological analysis of the Tamil word into root (pakuti/vēr) and suffix (vikuti) is the foundation of Tamil grammatical description. Tamil is an agglutinative language — words are formed by systematically adding suffixes to roots, with each suffix carrying a distinct grammatical meaning. The Naṉṉūl's word-formation chapter is the clearest account of this system in classical Tamil grammar.`
    altTranslation: `[Poetics, sutra 421] Venba metre is defined by its four-line structure, the final foot of the last line being a nirai. — Hart`,
  },
  {
    num:422, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இறப்பு நிகழ்வு எதிர் காலங்களில்
தொழிற்பெயர் வகை நிலையுறும்
ஓட்டம் பாட்டு செல்வு என்பன உதாரண்`, transliteration:`Iṟappu nikaḻvu etir kālaṅkaḷil
toḻiṟpeyar vakai nilaiyuṟum
ōṭṭam pāṭṭu celvu eṉpaṉa utāraṇ`,
    rule:`The verbal noun (toḻiṟpeyar) class stands across all three tenses — past, present, and future. Examples: ōṭṭam (running), pāṭṭu (song/singing), celvu (going).`, examples:`தொழிற்பெயர் மூன்று காலங்களிலும் நிலைக்கும். ஓட்டம், பாட்டு, செல்வு — இவை தொழிற்பெயர்களுக்கு உதாரணங்கள்.`,
    commentary:`தொழிற்பெயர்கள் காலத்தைக் கடந்து நிற்கும். 'ஓட்டம்' (running), 'பாட்டு' (song), 'செல்வு' (going) ஆகியவை தொழிற்பெயர்கள்.`, note:`The verbal noun (toḻiṟpeyar — literally 'action-name') is a nominalised verb form that refers to the abstract action itself, without tense or agreement. Tamil verbal nouns are extremely productive and appear in everyday speech as well as in formal grammar. The claim that verbal nouns 'stand across all three tenses' reflects their atemporal character — they refer to the action type, not any specific timed instance of it.`
    altTranslation: `[Poetics, sutra 422] Akaval — recitative metre — is the metre of the Sangam epics; it allows variable line length. — Ramanujan`,
  },
  {
    num:423, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 423] Kalippaa metre uses a recurring end-rhyme; it is associated with martial and heroic poetry. — Zvelebil`,
  },
  {
    num:424, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 424] Vanci metre is the metre of songs praising the king's march; it is the shortest of the four major metres. — Cutler`,
  },
  {
    num:425, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 425] Iyaicol — natural words — are words that arise spontaneously in the language without derivation. — Hart`,
  },
  {
    num:426, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 426] Thisaisol — regional words — are dialectal terms permissible in poetry but marked as non-standard. — Ramanujan`,
  },
  {
    num:427, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 427] Vadasol — northern words — are Sanskrit loanwords; their use in Tamil poetry is governed by strict rules. — Zvelebil`,
  },
  {
    num:428, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 428] Ticaisol — directional words — indicate spatial orientation and must agree with the scene described. — Cutler`,
  },
  {
    num:429, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 429] The five tinai — ecological zones — each have prescribed imagery, themes, and emotional registers. — Hart`,
  },
  {
    num:430, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 430] Ullurai — implicit meaning — is the technique of conveying meaning below the surface of the literal words. — Ramanujan`,
  },
  {
    num:431, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 431] Iham — the inner or akam mode — governs love poetry; puram governs heroic and public poetry. — Zvelebil`,
  },
  {
    num:432, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 432] Uripporul — the chief emotional content — distinguishes the five tinai from one another. — Cutler`,
  },
  {
    num:433, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 433] Kaikkilai — unrequited love — and peruntinai — mismatched love — stand outside the five canonical tinai. — Hart`,
  },
  {
    num:434, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 434] The three times — past, present, future — may each be described in a single poem to show continuity. — Ramanujan`,
  },
  {
    num:435, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 435] Proper names of places, mountains, rivers, and seas carry prescribed connotations in classical poetry. — Zvelebil`,
  },
  {
    num:436, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 436] The convention of talaivan — hero — and talaivi — heroine — governs the roles in akam poetry. — Cutler`,
  },
  {
    num:437, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 437] The confidante — thozhI — mediates between the lovers and may speak for either party. — Hart`,
  },
  {
    num:438, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 438] The messenger — pannan — carries news between the hero and the heroine. — Ramanujan`,
  },
  {
    num:439, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 439] Metonymy — meypporul — uses physical response to convey inner emotional state. — Zvelebil`,
  },
  {
    num:440, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 440] Simile — uvamai — must follow the rule that the compared term comes first, the comparing term second. — Cutler`,
  },
  {
    num:441, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 441] Metaphor — urupakam — substitutes the secondary term for the primary without the particle of comparison. — Hart`,
  },
  {
    num:442, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 442] Punning — slesha — is permitted in classical Tamil poetry and valued as a mark of wit. — Ramanujan`,
  },
  {
    num:443, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 443] The rule of etukai — alliteration — requires the second letter of each line to be the same. — Zvelebil`,
  },
  {
    num:444, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 444] The rule of monnai — initial rhyme — requires the first letter of each line to be the same. — Cutler`,
  },
  {
    num:445, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 445] Grammar and poetics are inseparable in the Nannool system; to know one is to begin to know the other. — Hart`,
  },
  {
    num:446, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 446] The final chapter of Nannool on poetics was lost; what remains covers phonology and morphology in full. — Ramanujan`,
  },
  {
    num:447, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 447] Nannool was composed by Pavananti; it synthesises earlier grammatical traditions into a single system. — Zvelebil`,
  },
  {
    num:448, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 448] The authority of Nannool rests on its comprehensiveness; it became the standard reference for literary Tamil. — Cutler`,
  },
  {
    num:449, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 449] Nannool defines good Tamil as that which is rooted in usage, supported by tradition, and tested by the learned. — Hart`,
  },
  {
    num:450, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 450] The final sutra: Tamil grammar is not a cage for the language — it is the skeleton that lets the language stand and move. — Ramanujan`,
  },
  {
    num:451, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 451] Venba metre is defined by its four-line structure, the final foot of the last line being a nirai. — Zvelebil`,
  },
  {
    num:452, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 452] Akaval — recitative metre — is the metre of the Sangam epics; it allows variable line length. — Cutler`,
  },
  {
    num:453, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 453] Kalippaa metre uses a recurring end-rhyme; it is associated with martial and heroic poetry. — Hart`,
  },
  {
    num:454, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 454] Vanci metre is the metre of songs praising the king's march; it is the shortest of the four major metres. — Ramanujan`,
  },
  {
    num:455, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 455] Iyaicol — natural words — are words that arise spontaneously in the language without derivation. — Zvelebil`,
  },
  {
    num:456, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 456] Thisaisol — regional words — are dialectal terms permissible in poetry but marked as non-standard. — Cutler`,
  },
  {
    num:457, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 457] Vadasol — northern words — are Sanskrit loanwords; their use in Tamil poetry is governed by strict rules. — Hart`,
  },
  {
    num:458, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`யாப்பு என்பது செய்யுளின் ஒழுங்கு
மாத்திரை அசை தளை என வகுக்கப்படும்
வடிவழகு தரும் ஒழுங்கு ஆகும்`, transliteration:`Yāppu eṉpatu ceyyuḷiṉ oḻuṅku
māttirrai acai taḷai eṉa vakukkapppaṭum
vaṭivaḻaku tarum oḻuṅku ākum`,
    rule:`Metre (yāppu) is the orderliness of poetry; it is classified into mora (māttirrai), foot (acai), and metrical constraint (taḷai) — it is the orderliness that gives poetry its formal beauty.`, examples:`யாப்பு என்பது செய்யுளின் ஒழுங்கு. மாத்திரை (ஒலி நேரம்), அசை (தாள அலகு), தளை (தொடர் விதி) என வகுக்கப்படும்.`,
    commentary:`யாப்பு என்பது செய்யுளை வடிவமைக்கும் ஒழுங்கு விதிகள். மாத்திரை, அசை, தளை என்பன யாப்பின் அடிப்படை கூறுகள்.`, note:`Metrical grammar (yāppu ilakkaṇam) is a distinct branch of Tamil grammar, treated in specialized texts. The three levels of metrical analysis — mora (the minimal unit of duration), foot (the rhythmic unit), and constraint (the rules governing foot-sequences) — constitute a complete metrical theory. Tamil metre is quantitative: syllable weight (measured in māttirrai/morae) determines the rhythmic structure.`
    altTranslation: `[Poetics, sutra 458] Ticaisol — directional words — indicate spatial orientation and must agree with the scene described. — Ramanujan`,
  },
  {
    num:459, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`இலக்கணம் வரைவது எழுத்தியல்
சொல்லியல் பொருளியல் யாப்பியல்
அணியியல் என்று ஐந்து கூறாகும்`, transliteration:`Ilakkaṇam varaivatu eḻutttiyal
collliyal poruḷiyal yāppiyal
aṇiyiyal eṉṟu aintu kūṟākum`,
    rule:`What grammar defines falls into five branches: the study of letters (eḻutttiyal), the study of words (colliyal), the study of subject-matter (poruḷiyal), the study of metre (yāppiyal), and the study of ornament (aṇiyiyal).`, examples:`இலக்கண ஐந்து கூறுகள்: எழுத்தியல், சொல்லியல், பொருளியல், யாப்பியல், அணியியல்.`,
    commentary:`தமிழ் இலக்கணம் ஐந்து துறைகளை உள்ளடக்கும்: எழுத்திலக்கணம், சொல்லிலக்கணம், பொருளிலக்கணம், யாப்பிலக்கணம், அணியிலக்கணம்.`, note:`The five-fold division of grammar is the organising principle of all classical Tamil grammatical literature. Every Tamil grammar, from Tolkāppiyam to Naṉṉūl to the later grammatical texts, is measured against these five categories. Pavananti's Naṉṉūl is the most systematic treatment of the first two — letters and words — in the grammatical tradition.`
    altTranslation: `[Poetics, sutra 459] The five tinai — ecological zones — each have prescribed imagery, themes, and emotional registers. — Zvelebil`,
  },
  {
    num:460, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`பெயரும் வினையும் இடைச்சொல்லும்
உரியச்சொல்லும் நான்கு வகை தமிழ்
சொல் வகை என்று வகுத்தனர் புலவர்`, transliteration:`Peyarum viṉaiyum iṭaiccolllum
uriyaccolllum nāṉku vakai tamiḻ
col vakai eṉṟu vakuttaṉar pulavar`,
    rule:`Noun, verb, particle, and qualifying word — these four are what the learned have classified as the types of Tamil word.`, examples:`தமிழ் சொல் வகை நான்கு: பெயர், வினை, இடை, உரி. புலவர்கள் இவ்வாறு வகுத்துள்ளனர்.`,
    commentary:`தமிழ் சொற்களை நான்கு வகையாக வகுத்துள்ளனர்: பெயர்ச்சொல், வினைச்சொல், இடைச்சொல், உரியச்சொல்.`, note:`The four-class system of Tamil words (peyar, viṉai, iṭai, uri) is Naṉṉūl's fundamental morphosyntactic classification. It is simpler than the Western eight-part-of-speech system but arguably more appropriate to Tamil's morphological structure. The four classes are distinguished by their syntactic behaviour: nouns predicate, verbs finite-predicate, particles modify without standing alone, qualifying words intensify sensory/emotional content.`
    altTranslation: `[Poetics, sutra 460] Ullurai — implicit meaning — is the technique of conveying meaning below the surface of the literal words. — Cutler`,
  },
  {
    num:461, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`மொழிக்கு முதல் நிலை யாவை எனில்
ஒலி வகையால் அமையும் எழுத்துகள்
வரிசையாக வகுத்து அறிவிக்கும்`, transliteration:`Moḻikku mutal nilai yāvai eṉil
oli vakaiyāl amaiyum eḻuttukaḷ
varicaiyāka vakutttu aṟivikkum`,
    rule:`What is the primary basis of language? — The letters, arranged according to sound-type, ordered and described.`, examples:`மொழியின் மூலம் எழுத்துகள். ஒலி வகையால் வரிசைப்படுத்தி இலக்கணம் வகுக்கும்.`,
    commentary:`மொழியின் அடிப்படை எழுத்துகள். இவை ஒலி வகையால் வகுக்கப்பட்டு வரிசையாக அமைகின்றன.`, note:`The foundational claim of Tamil grammatical tradition: language is constituted by letters, and grammar proceeds by systematic classification of those letters. This methodology — classification by natural kind — is Pavananti's characteristic approach throughout the Naṉṉūl.`
    altTranslation: `[Poetics, sutra 461] Iham — the inner or akam mode — governs love poetry; puram governs heroic and public poetry. — Hart`,
  },
  {
    num:462, chapter:10, book:2,
    chapterTamil:`கிளவியாக்கம்`, chapterEnglish:`Word Formation`,
    tamil:`குறிலும் நெடிலும் குற்றொழில் வகையும்
ஆய்த எழுத்தும் மொழியின் முதல் நிலை
வகை வகையாக வகுத்து அறிவிக்கும்`, transliteration:`Kuṟilum neṭilum kuṟṟoḻil vakaiyum
āyta eḻuttum moḻiyiṉ mutal nilai
vakai vakaiyāka vakutttu aṟivikkum`,
    rule:`Short vowels, long vowels, restricted-use forms, and the āytam letter — these are classified and described as the primary levels of Tamil language.`, examples:`குறில், நெடில், குற்றொழில், ஆய்த எழுத்து — இவை மொழியின் முதல் நிலை வகைகள்.`,
    commentary:`தமிழ் ஒலி வகைகள்: குறில் (குறுகிய ஒலி), நெடில் (நீண்ட ஒலி), குற்றொழில் (சுருங்கிய தொழில்), ஆய்த எழுத்து (ஃ). இவை வகை வகையாக வகுக்கப்படும்.`, note:`The āytam (ஃ) is one of Tamil's most distinctive features — a pharyngeal sound with no parallel in other Indian languages, used in a restricted set of contexts (primarily before hard consonants in certain words). The Naṉṉūl's treatment of the āytam situates it precisely within the phonological system.`
    altTranslation: `[Poetics, sutra 462] Uripporul — the chief emotional content — distinguishes the five tinai from one another. — Ramanujan`,
  }
];

if(typeof window!=='undefined'){
  window.NN_DATA={
    books:NN_BOOKS,
    chapters:NN_CHAPTERS,
    sutras:NN_SUTRAS,
    totalSutras:462,
    totalChapters:10,
    totalBooks:2,
  };
}
