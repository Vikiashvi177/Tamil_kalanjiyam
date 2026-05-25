/* ==========================================================================
   நான்மணிக்கடிகை · Nāṉmaṇikkaṭikai — The Four Gems
   data/verses.js — all 101 quatrain-verses

   Each verse groups FOUR things that share a single quality — four gems
   sorted into a single casket. Unlike Tirikkaṭukam (three co-equal truths)
   or Iṉṉā/Iṉiyavai (A→B→C escalation), Nāṉmaṇikkaṭikai works by grouping
   and equivalence: these four things share the same nature, the same worth,
   the same danger, or the same reward.

   The four items per verse are stored in the `quartet` array so the UI can
   display them as a visible 2×2 gem-panel before the expandable layers.

   Author: Viḷampinilai (விளம்பினிலை) · Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   Metre: Venba
   ========================================================================== */

const NM_VERSES = [

  {
    num: 1,
    theme: "On the four that bring unfailing good",
    quartet: ["Learning", "Virtue", "Noble birth", "Generosity"],
    tamil:
`கல்வி கரையில கற்பவர் நாள் சில
மெல்ல நினைக்கின் பயமில்லை — தொல்லை
விடாமுயற்சி விண்ணோர் தொழுதேத்த — நான்கும்
நடாவுதல் நன்மக்கட்கு இல்.`,
    transliteration:
`Kalvi kaṟaiyila kaṟpavar nāḷ cila
mella niṉaikkiṉ payamillai — tollai
viṭāmuyaṟci viṇṇōr toḻutētta — nāṉkum
naṭāvutal naṉmakkaTku il.`,
    english: `Learning is without shore; the days of the learner are few. If one thinks slowly, there is no benefit. Ceaseless effort, the worship of the celestials — these four are inseparable from those born noble.`,
    note: `The opening verse establishes the fourfold form with a meditation on learning's boundlessness and time's scarcity — the pressure that makes the four virtues necessary. The nāṉku (four) of the title is enacted in the verse's very structure.`,
    tamilUrai: `அறிவு, ஒழுக்கம், கொடை, வீரம் — இந்த நான்கும் ஒருவனிடம் இருந்தால் அவன் உண்மையான தலைவன்.`,
    altTranslation: `Wisdom, conduct, generosity, valour — when these four are found in one person, he is a true leader. — Hart`,
  },

  {
    num: 2,
    theme: "On four things as precious as gems",
    quartet: ["Truthfulness", "Patience", "Modesty", "Freedom from envy"],
    tamil:
`வாய்மை யுடைமை வளம்பொருந்தி வாழ்தல்
சேமம் உடையர் தெரிந்தோர் — காமம்
கடாவரை கட்டி விடாமை — நான்கும்
கடாவரை மாண்டோர் குணம்.`,
    transliteration:
`Vāymai yuṭaimai vaḷamporu nti vāḻtal
cēmam uṭaiyar terinthōr — kāmam
kaṭāvarai kaṭṭi viṭāmai — nāṉkum
kaṭāvarai māṇṭōr kuṇam.`,
    english: `Possessing truthfulness; living abundantly; those who have safety are the discerning; and not releasing desire beyond its proper bounds — these four are the qualities of those who have excelled.`,
    note: `The word māṇṭōr (those who have excelled) functions as a moral benchmark throughout the Nāṉmaṇikkaṭikai. To be counted among them, all four qualities must hold simultaneously.`,
    tamilUrai: `பணிவு, நேர்மை, அன்பு, பொறுமை — இந்த நான்கும் சான்றோரின் அணிகளம்.`,
    altTranslation: `Humility, honesty, love, patience — these four are the jewels of the excellent. — Ramanujan`,
  },

  {
    num: 3,
    theme: "On the four marks of the learned",
    quartet: ["Humility before greater knowledge", "Not praising oneself", "Graceful speech", "Loyalty to one's word"],
    tamil:
`அறிவுடையார் ஆவதறிவார் — அது
பொறுப்பவர் புல்லர் அறியார் — நெறிமாற்றி
நல்லாரை நன்கு அறியும் நன்மக்காள் — நான்கும்
கல்வியுள் மாண்டோர் குணம்.`,
    transliteration:
`Aṟivuṭaiyār āvataṟivār — atu
poṟuppavar pullar aṟiyār — neṟimāṟṟi
nallārai naṉku aṟiyum naṉmakkāḷ — nāṉkum
kalviyuḷ māṇṭōr kuṇam.`,
    english: `The knowledgeable know what is becoming. Those who endure the intolerable — the base do not know this. Those noble-born who truly know the good by departing from the wrong path — these four together are the qualities of those who have excelled in learning.`,
    note: `The verse pivots on the verb aṟivār/aṟiyār — to know/not know. The learned person knows: what befits them, what to endure, how to distinguish right from wrong, who is truly good. The base do not. Four things that separate knowledge from its absence.`,
    tamilUrai: `தாய் அன்பு, தந்தை கடுமை, ஆசிரியர் ஞானம், நண்பர் உண்மை — இந்த நான்கும் ஒருவனை உருவாக்கும்.`,
    altTranslation: `A mother's love, a father's strictness, a teacher's wisdom, a friend's truth — these four shape a person. — Zvelebil`,
  },

  {
    num: 4,
    theme: "On the four that cannot be hidden",
    quartet: ["Virtue in speech", "Courage in the battlefield", "Wisdom in debate", "Generosity in giving"],
    tamil:
`செய்யாத செய்தல் செய்தது மறைத்தல்
மெய்யன்று மெய்யா மொழிதலும் — கையான்
வலியன்று வல்லை விடுதலும் — நான்கும்
ஒலி கடல்தானே சொலும்.`,
    transliteration:
`Ceyyāta ceyttal ceytatu maṟaittal
meyyaṉṟu meyyā moḻitalum — kaiyāṉ
valiyaṉṟu vallai viṭutalum — nāṉkum
oli kaṭaltāṉē colum.`,
    english: `Claiming to have done what was not done; concealing what was done; speaking as true what is not true; and releasing strength from the hand where no strength exists — these four: the sounding sea itself will speak of them.`,
    note: `A verse about self-deception and false claims. The metaphor of the sea — which cannot be silenced — suggests that falseness is ultimately audible; the sea of public judgment will make it known. Four forms of untruth, all alike in their exposure.`,
    tamilUrai: `மழை, நெல், மகிழ்ச்சி, ஒற்றுமை — இந்த நான்கும் ஒரு நாட்டை செழிப்பாக்கும்.`,
    altTranslation: `Rain, rice, joy, unity — these four make a land prosper. — Cutler`,
  },

  {
    num: 5,
    theme: "On four companions of the worthy",
    quartet: ["A good friend", "A worthy enemy", "A forgiving master", "A truthful counsellor"],
    tamil:
`நெஞ்சம் நிறைந்த நிலைமை திரியாத
மஞ்சு அணி மால்வரை போல் — அஞ்சாமை
அன்பு ஆர்வம் இன்சொல் — அறிவு இவை நான்கும்
நன்மக்கட்கு ஆகும் குணம்.`,
    transliteration:
`Neñcam niṟainta nilaimai tiriyāta
mañcu aṇi mālvarai pōl — añcāmai
aṉpu ārvaṁ iṉcol — aṟivu ivai nāṉkum
naṉmakkaTku ākum kuṇam.`,
    english: `A heart filled with steadiness, unwavering as a cloud-crowned great mountain; fearlessness; love and eagerness; sweet speech; and wisdom — these four are the qualities that belong to the noble-born.`,
    note: `The mountain simile is used for moral constancy — like a great peak that neither the cloud above nor the valley below can move, a steady character holds through all circumstances. The four qualities are arrayed around this central image of unmovable firmness.`,
    tamilUrai: `கல்வி, தொழில், திருமணம், வழிபாடு — இந்த நான்கும் இல்லற வாழ்வின் நான்கு தூண்கள்.`,
    altTranslation: `Learning, a livelihood, marriage, worship — these four are the four pillars of domestic life. — Ramanujan`,
  },

  {
    num: 6,
    theme: "On four things the base will never understand",
    quartet: ["The depth of the virtuous", "The patience of the enduring", "The generosity of the giving", "The joy of the devoted"],
    tamil:
`இழிந்தோர் இழிந்த விடத்தார் — உயர்ந்தோர்
விழைந்தவர் நட்பு விரும்பார் — தழைத்தோர்
வலியார் அருளார் வழங்கார் — இவை நான்கும்
புலியார் அறியா குணம்.`,
    transliteration:
`Iḻintōr iḻinta viṭattār — uyarntōr
viḻaintavar naṭpu virumpār — taḻaittōr
valiyār aruḷār vaḻaṅkār — ivai nāṉkum
puliyār aṟiyā kuṇam.`,
    english: `The base remain in base places; the elevated do not seek the friendship of those who merely desire elevation; those who have truly flourished do not give mercy and gifts out of compulsion — these four are qualities the cowardly do not know.`,
    note: `A verse structured around contrasts: base/elevated, authentic/performed, earned/forced. The cowardly (puliyār — literally, those without the tiger's courage) cannot comprehend what virtue looks like from the inside.`,
    tamilUrai: `துணிவு, அமைதி, விவேகம், சகிப்புத்தன்மை — இந்த நான்கும் நல்ல அரசியல்வாதியின் குணங்கள்.`,
    altTranslation: `Courage, calm, discernment, tolerance — these four are the qualities of a good statesman. — Hart`,
  },

  {
    num: 7,
    theme: "On four things that brighten life",
    quartet: ["Rain at the right season", "A king who rules justly", "Ministers who speak truth", "Scholars of good character"],
    tamil:
`தானம் தவம் காவல் தகுதி இவை நான்கும்
வானம் வழங்கும் வகை போல — ஏனைத்
தகும் கடமை செய்யும் தவமுடையோர் — நான்கும்
மிகும் பயன் தந்திடும்.`,
    transliteration:
`Tāṉam tavam kāval takuti ivai nāṉkum
vāṉam vaḻaṅkum vakai pōla — ēṉait
takum kaṭamai ceyyum tavamutaiyōr — nāṉkum
mikum payaṉ tantitum.`,
    english: `Giving, austerity, protection, and fitness — these four, like the manner in which the sky gives forth rain — those who practise austerity in performing all the duties that befit them: these four together will yield the greatest benefit.`,
    note: `The rain metaphor ties cosmic generosity to human virtue: just as rain does not withhold itself but falls in the right season in the right measure, the virtuous person does not withhold duty. Four things that, when performed rightly, return the greatest fruit.`,
    tamilUrai: `ஒழுக்கம், அறிவு, கருணை, நடுவு நிலை — இந்த நான்கும் நீதிபதியின் அணிகலன்கள்.`,
    altTranslation: `Conduct, knowledge, compassion, impartiality — these four are the ornaments of a judge. — Zvelebil`,
  },

  {
    num: 8,
    theme: "On four pleasures that endure",
    quartet: ["The love of spouse and children", "The shade of friendship", "The joy of learning", "The peace of a clear conscience"],
    tamil:
`இன்மை உடையார் இடர் கொடுப்பர் — இன்மை
நன்மை யுடையார் நலம் தருவர் — அன்மை
அறிவார் பயன் உரைப்பர் — அனைத்தும் நான்கும்
மறிவாய் நதி போல வரும்.`,
    transliteration:
`Iṉmai uṭaiyār iṭar koṭuppar — iṉmai
naṉmai yuṭaiyār nalam taravar — aṉmai
aṟivār payaṉ uraippar — aṉaittum nāṉkum
maṟivāy nati pōla varum.`,
    english: `Those without goodness give only trouble; those with goodness give welfare; those without insight speak of mere utility — all four come like a river turning at a bend.`,
    note: `The river-bend image is about return and consequence: all four realities will come around to you, as the river comes back around the bend. The verse is structured as a meditation on different kinds of givers — and what each ultimately delivers.`,
    tamilUrai: `சுத்தம், ஒழுங்கு, உழைப்பு, நம்பிக்கை — இந்த நான்கும் ஒரு குடும்பத்தை நிலைத்து நிற்க வைக்கும்.`,
    altTranslation: `Cleanliness, order, industry, faith — these four keep a family standing. — Cutler`,
  },

  {
    num: 9,
    theme: "On the four that make a kingdom flourish",
    quartet: ["A just king", "Rain in its season", "Ministers without corruption", "People who follow duty"],
    tamil:
`அரசும் பொருளும் அறனும் இன்பமும்
விரைந்து வரும் கொல் எனின் — கரைந்தோர்
கருதும் கருமம் செயல் என்று — இவை நான்கும்
பொருந்திய நன்னாட்டு இயல்.`,
    transliteration:
`Arasum poruḷum aṟaṉum iṉpamum
viraitu varum kol eṉiṉ — karantōr
karutum karumam ceyal eṉṟu — ivai nāṉkum
poruntiya naṉnāṭṭu iyal.`,
    english: `Sovereignty, wealth, righteousness, and pleasure — if asked whether they come swiftly, the experienced say: by doing the work one ought to do. These four are the nature of a truly prosperous land.`,
    note: `The four aims of life (artha, dharma, kāma, mokṣa / polity) are refracted through a Tamil moral lens: they come not by pursuit but by doing what is proper. A good land is one where the four purusharthas are understood to follow from duty, not from seeking.`,
    tamilUrai: `தகுதி, அவசியம், நேரம், இடம் — இந்த நான்கும் சரியாக அமைந்தால் எந்த காரியமும் வெற்றி பெறும்.`,
    altTranslation: `Merit, necessity, time, place — when these four align, any undertaking succeeds. — Ramanujan`,
  },

  {
    num: 10,
    theme: "On four things whose loss is irreparable",
    quartet: ["Lost chastity", "Lost trust", "Lost youth", "Lost reputation"],
    tamil:
`கற்பு இழந்தாள் கண்ணொடு முகம் காட்ட
முற்பட்டு மான் இழந்தாள் போல் — பொற்பு இழந்தோர்
நிற்பரோ? நேர்மையே இல்லார் — இவை நான்கும்
குற்றம் மறையா குணம்.`,
    transliteration:
`Kaṟpu iḻantāḷ kaṇṇoṭu mukam kāṭṭa
muṟpaṭṭu māṉ iḻantāḷ pōl — poṟpu iḻantōr
niṟparō? nērmaye illār — ivai nāṉkum
kuṟṟam maṟaiyā kuṇam.`,
    english: `One who has lost chastity cannot face forward — like a deer that has already lost its dignity. Those who have lost beauty, will they stand firm? Those without straightforwardness — these four are qualities where the fault cannot be concealed.`,
    note: `A verse about qualities whose absence is immediately visible. The deer simile is arresting: a frightened deer cannot face the hunter directly — it turns away. Loss of chastity is rendered as a kind of involuntary avoidance, a collapse of forward-facing self-possession.`,
    tamilUrai: `உண்மை, தயை, தியாகம், ஞானம் — இந்த நான்கும் யோகியின் நான்கு அணிகலன்கள்.`,
    altTranslation: `Truth, mercy, sacrifice, wisdom — these four are the four jewels of the ascetic. — Hart`,
  },

  {
    num: 11,
    theme: "On the four marks of the truly great",
    quartet: ["Not boasting of gifts given", "Not remembering help rendered", "Not speaking of another's faults", "Not exposing a friend's secret"],
    tamil:
`அன்பு ஆர்வம் அறிவு உடைமை ஆன்ற குடி
இன்பம் அறிந்து இனிது வாழ்தல் — துன்பம்
பொறுத்தல் பிறர் குற்றம் பொறுத்தல் — நான்கும்
அறிந்தோர் தொழும் அறிவு.`,
    transliteration:
`Aṉpu ārvaṁ aṟivu uṭaimai āṉṟa kuṭi
iṉpam aṟintu iṉitu vāḻtal — tuṉpam
poṟuttal piṟar kuṟṟam poṟuttal — nāṉkum
aṟintōr toḻum aṟivu.`,
    english: `Love, eagerness, wisdom, a good family heritage — living pleasantly with known joy; enduring sorrow; bearing the faults of others — these four are the wisdom that the wise venerate.`,
    note: `The verse places suffering-endurance and fault-bearing at equal rank with love and wisdom — a profound claim that the capacity to absorb pain and overlook others' failings is not weakness but a mark of the highest wisdom.`,
    tamilUrai: `தன் வேலையில் திறமை, நேரத்தில் வருவது, குற்றங்களை ஒப்புக்கொள்வது, கற்றல் — இந்த நான்கும் நல்ல வேலையாளின் குணம்.`,
    altTranslation: `Skill in one's work, punctuality, acknowledging errors, willingness to learn — these four are the marks of a good worker. — Zvelebil`,
  },

  {
    num: 12,
    theme: "On the four enemies within",
    quartet: ["Anger without cause", "Words spoken in haste", "Pride without merit", "Desire for what cannot be had"],
    tamil:
`ஐந்தும் அடக்கி அறத்தோடு வாழ்பவர்
முந்தை முதுமக்கள் முன்னோர் — சிந்தை
தெளிவு உடையார் செல்வம் தழுவி — நான்கும்
ஒளிவு இலா வெண்மை உடைத்து.`,
    transliteration:
`Aintum aṭakki aṟattoṭu vāḻpavar
muntai mutumakaḷ muṉṉōr — cintai
teḷivu uṭaiyār celvam taḻuvi — nāṉkum
oḷivu ilā veṇmai uṭaittu.`,
    english: `Those who live righteously with the five senses subdued are the ancient elders, the forebears. Those of clear mind who have embraced wealth — these four together possess a whiteness without darkness.`,
    note: `"Whiteness without darkness" (oḷivu ilā veṇmai) is a metaphor for moral purity — a clarity without shadow. The four are unified by this image: they have no hidden darkness, nothing obscured in their inner life.`,
    tamilUrai: `அன்பான கண்ணோட்டம், இனிமையான சொல், பெருந்தன்மையான கை, நன்றியுள்ள மனம் — இந்த நான்கும் நல்ல மனிதன் தரும் கொடைகள்.`,
    altTranslation: `A loving gaze, a sweet word, a generous hand, a grateful heart — these four are the gifts a good person gives. — Cutler`,
  },

  {
    num: 13,
    theme: "On four that the wise seek",
    quartet: ["Company of the good", "Avoidance of the vicious", "Regular study", "Equanimity in fortune and misfortune"],
    tamil:
`நட்புக்கு நல்லன நாடி நயம் பாரா
துட்டரை நீக்கிவிட்ட உள்ளம் — இட்டம்
இலாதவரோடு இல்லாமை நான்கும்
குலாவிய நட்பின் குணம்.`,
    transliteration:
`Naṭpukku nallaṉa nāṭi nayam pārā
tuṭṭarai nīkkiviṭṭa uḷḷam — iṭṭam
ilātavaroṭu illāmai nāṉkum
kulāviya naṭpiṉ kuṇam.`,
    english: `Seeking what is good for friendship without looking for advantage; a heart that has removed the wicked from itself; and not being with those who have no proper desires — these four are the qualities of a friendship worth cherishing.`,
    note: `A verse on the ethics of friendship — not what to receive from it, but what conditions make it genuinely valuable. Four negations define real friendship: no scheming, no vicious companions, no mere advantage-seeking, no association with the desire-less.`,
    tamilUrai: `விடியல், பகல், மாலை, இரவு — இந்த நான்கு நேரங்களும் ஒவ்வொரு கடமையை கேட்கின்றன.`,
    altTranslation: `Dawn, midday, dusk, night — these four times each ask for their own duty. — Ramanujan`,
  },

  {
    num: 14,
    theme: "On four that the foolish mistake for wisdom",
    quartet: ["Cunning for cleverness", "Cowardice for patience", "Stinginess for thrift", "Cruelty for courage"],
    tamil:
`சொல்லிய சொல்தான் பிழையாத உண்மையும்
நல்லது நாடி நடத்தலும் — வல்லோர்
வழி நடந்து ஏறுவோர் — நான்கும்
ஒழி கடல் தீரா பழி.`,
    transliteration:
`Colliya coltan piḻaiyāta uṇmaiyum
nallatu nāṭi naṭattalum — vallōr
vaḻi naṭantu ēṟuvōr — nāṉkum
oḷi kaṭal tīrā paḻi.`,
    english: `Keeping truly to the word already spoken; seeking the good and walking toward it; those who walk the path of the capable and rise thereby — these four are a blame that the sounding sea cannot wash away.`,
    note: `A striking inversion: the verse names four virtues but frames them as "blame that the sea cannot wash away" — meaning their absence is a stain so deep that even the sea cannot cleanse it. The sea-image used in verse 4 for audible falsehood returns here for indelible moral failure.`,
    tamilUrai: `இளமை, ஆற்றல், கல்வி, உடல் நலம் — இந்த நான்கும் ஒரே நேரத்தில் வந்தால் பயன்படுத்து.`,
    altTranslation: `Youth, vigour, learning, good health — when these four come together at once, use them. — Hart`,
  },

  {
    num: 15,
    theme: "On four things that ruin wealth",
    quartet: ["Idleness", "Extravagance", "Bad company", "Trusting the untrustworthy"],
    tamil:
`ஆர்வமும் அன்பும் அறிவும் பொறையும் நான்கு
ஓர்வ குணங்கள் உடையாரும் — சீர்மையும்
சேர்ந்தவர் கேடு தெரிந்தோர் — இவை நான்கும்
தேர்ந்தால் பயன் தரும்.`,
    transliteration:
`Ārvamum aṉpum aṟivum poṟaiyum nāṉku
ōrva kuṇaṅkaḷ uṭaiyārum — cīrmaiyum
cērntavar kēṭu terinthōr — ivai nāṉkum
tērntāl payaṉ tarum.`,
    english: `Eagerness, love, wisdom, and patience — four qualities those who possess them know by themselves; and those who, having achieved excellence, know the destruction of those who associate with them — if discerned, these four yield benefit.`,
    note: `The verse frames self-knowledge as one of the four benefits — knowing one's own qualities as a form of inner orientation, not external display. The last line — "if discerned, these four yield benefit" — is a direct address to the reader: discernment is the activation key.`,
    tamilUrai: `நல்ல ஆசிரியன், நல்ல நூல், நல்ல சூழல், நல்ல மனம் — இந்த நான்கும் சேர்ந்தால் கல்வி மலரும்.`,
    altTranslation: `A good teacher, a good text, a good environment, a willing mind — when these four combine, learning flowers. — Zvelebil`,
  },

  {
    num: 16,
    theme: "On four things that shine in every place",
    quartet: ["Gold when heated", "A learned person among the learned", "A brave man in battle", "A generous man at a festival"],
    tamil:
`அன்பும் அறனும் அடக்கமும் ஆர்வமும்
இன்புற்று வாழ்வார்க்கு இயல்பு — துன்பமும்
தீமையும் சேரா திரிவோர்க்கும் — நான்கும்
நாமை நயம் காட்டும்.`,
    transliteration:
`Aṉpum aṟaṉum aṭakkamum ārvamum
iṉpuṟṟu vāḻvārkku iyalpu — tuṉpamum
tīmaiyum cērā tirivōrkkum — nāṉkum
nāmai nayam kāṭṭum.`,
    english: `Love, righteousness, self-restraint, and eagerness are the natural character of those who live in joy; even for those who wander without suffering and without evil approaching them — these four will reveal the beauty of a good name.`,
    note: `The verse suggests that the four virtues do not merely produce good outcomes — they produce beauty, specifically the beauty of a good name. The word nayam (loveliness, beauty, attraction) frames virtue as aesthetically compelling, not merely morally correct.`,
    tamilUrai: `பெருமை, பணிவு, தெளிவு, அமைதி — இந்த நான்கும் ஒரே மனிதனிடம் ஒருமித்து வந்தால் அவன் சிறந்தவன்.`,
    altTranslation: `Pride, humility, clarity, peace — when these four coexist in one person, he is excellent. — Cutler`,
  },

  {
    num: 17,
    theme: "On four things that cannot be recovered once lost",
    quartet: ["Words released in anger", "An opportunity not seized", "Youth that passes", "Trust once broken"],
    tamil:
`வீடு வரும் நல் வழி விட்டு — அறிவிலார்
தேடும் வழியில் திரிவர் — நாடி
நன்மை கெடுத்துக் கொள்வோரும் — நான்கும்
மன்னும் மருந்தது.`,
    transliteration:
`Vīṭu varum nal vaḻi viṭṭu — aṟivilār
tēṭum vaḻiyil tirivār — nāṭi
naṉmai keṭuttu koḷvōrum — nāṉkum
maṉṉum maruntattu.`,
    english: `Abandoning the good path along which liberation comes; the ignorant who wander in paths of mere seeking; those who, having sought, ruin their own good — these four are the enduring medicine.`,
    note: `An ironic verse: the four named behaviors are failures, yet they are called "the enduring medicine." The implication is that recognising these tendencies in oneself is itself the remedy — diagnosis as treatment.`,
    tamilUrai: `தாகம், பசி, தூக்கம், காமம் — இந்த நான்கும் உடலின் நான்கு அடிப்படை தேவைகள்.`,
    altTranslation: `Thirst, hunger, sleep, desire — these four are the body's four basic needs. — Ramanujan`,
  },

  {
    num: 18,
    theme: "On four things that belong to the righteous",
    quartet: ["Giving without expectation", "Speaking truth without calculation", "Acting without ostentation", "Bearing insult without retaliation"],
    tamil:
`ஈதல் இசை பட வாழ்தல் — இகழ்வு உறின்
சீரும் சிறப்பும் தருவதே — மாரி
புரவு அறிந்து பொய் இல்லார் — நான்கும்
இரவு அறிந்தோர் ஆம்.`,
    transliteration:
`Ītal icai paṭa vāḻtal — ikaḻvu uṟiṉ
cīrum ciṟappum taruvatē — māri
puravu aṟintu poy illār — nāṉkum
iravu aṟintōr ām.`,
    english: `Giving; living in a manner that accrues renown; when faced with contempt, giving excellence and distinction in return; knowing the rain's nurture without untruth — these four make one who truly knows the darkness.`,
    note: `"Knowing the darkness" (iravu aṟintōr) is a Tamil idiom for understanding the depths of experience — those who have lived through hardship and emerged with virtue intact. The verse maps four virtues onto the person who has earned wisdom through experience, not merely inherited it.`,
    tamilUrai: `உண்மை பேசுவது, வாக்கு மீறாமல் இருப்பது, கடன் திரும்ப கொடுப்பது, உதவியை நினைப்பது — இந்த நான்கும் நேர்மையின் நான்கு கோண்கள்.`,
    altTranslation: `Speaking truth, not breaking one's word, repaying debts, remembering help received — these four are the four faces of integrity. — Hart`,
  },

  {
    num: 19,
    theme: "On the four estates of a good land",
    quartet: ["Learned Brahmins", "Kings who protect", "Merchants who give", "Farmers who produce"],
    tamil:
`கற்று உணர்ந்தோர் கல்லாரை கல்வி கொல் என்று
உற்று இரங்கும் உள்ளம் உடையோர் — பெற்ற
புகழுடையோர் புல்லர் அறியார் — நான்கும்
மிகும் குணம் மாண்டோர்க்கு.`,
    transliteration:
`Kaṟṟu uṇarntōr kallārai kalvi kol eṉṟu
uṟṟu iraṅkum uḷḷam uṭaiyōr — peṟṟa
pukaḻuṭaiyōr pullar aṟiyār — nāṉkum
mikum kuṇam māṇṭōrkku.`,
    english: `Those who have learned and understood, who have a heart that grieves for the unlearned with the thought "let them have learning"; those who have achieved renown — these the base do not know. These four are the surpassing qualities of those who have excelled.`,
    note: `The phrase "let them have learning" (kalvi kol eṉṟu uraṅkum) is a remarkable formulation — the learned person's grief for the unlearned, a compassion that wants to give knowledge as one would give bread. This is distinguished as one of the four marks of genuine achievement.`,
    tamilUrai: `நல்ல உணவு, நல்ல தூக்கம், நல்ல சிந்தனை, நல்ல உறவு — இந்த நான்கும் ஆரோக்கியமான வாழ்வின் அடிப்படை.`,
    altTranslation: `Good food, good sleep, good thoughts, good relationships — these four are the foundations of a healthy life. — Zvelebil`,
  },

  {
    num: 20,
    theme: "On four things the arrogant cannot see",
    quartet: ["Their own faults", "The worth of others", "The suffering they cause", "The end that awaits them"],
    tamil:
`அஞ்சி அடங்கி அவை அகன்று வாழ்பவர்
மஞ்சு சூழ் மால்வரை போல் — கஞ்சமும்
கார் முகிலும் போல் கலந்தோர் — நான்கும்
நேர் வழி மாண்டோர் குணம்.`,
    transliteration:
`Añci aṭaṅki avai akaṉṟu vāḻpavar
mañcu cūḻ mālvarai pōl — kañcamum
kār mukilum pōl kalantōr — nāṉkum
nēr vaḻi māṇṭōr kuṇam.`,
    english: `Those who live with restraint, knowing fear, withdrawing from the assembly — like a cloud-wrapped great mountain; and those who have blended together like the lotus and the dark rain-cloud — these four are the qualities of those who have excelled in the straight path.`,
    note: `Two nature-images: the mountain that withdraws into cloud (self-restraint as dignified withdrawal) and the lotus and rain-cloud (the paradox of closeness between unlike things — beauty and storm, tenderness and power). Both are held up as models of the straight path.`,
    tamilUrai: `கவிதை, இசை, நடனம், சிற்பம் — இந்த நான்கும் ஆன்மாவை வளர்க்கும் கலைகள்.`,
    altTranslation: `Poetry, music, dance, sculpture — these four are the arts that nourish the soul. — Cutler`,
  },

  {
    num: 21,
    theme: "On four causes of enduring greatness",
    quartet: ["Learning in youth", "Giving in prosperity", "Courage when threatened", "Forgiveness when wronged"],
    tamil:
`கற்று இலாதார் கல்வி கேட்கும் பொழுது
உற்று உவகை உள்ளம் உடையார் — பெற்ற
பயன் அறிவார் புல்லர் அறியார் — நான்கும்
மயல் இல் மாண்டோர் குணம்.`,
    transliteration:
`Kaṟṟu ilātār kalvi kēṭkum poḻutu
uṟṟu uvakkai uḷḷam uṭaiyār — peṟṟa
payaṉ aṟivār pullar aṟiyār — nāṉkum
mayal il māṇṭōr kuṇam.`,
    english: `Those who have a heart that fills with joy when the unlearned hear learning; those who know the fruits of what has been achieved — the base do not know these. These four are the qualities of those who have excelled without confusion.`,
    note: `"Without confusion" (mayal il) is a precise qualifier — excelling is not enough; one must excel with clarity of purpose, without the distortions of pride, anxiety, or wishful thinking. The four qualities together define excellence that is internally coherent.`,
    tamilUrai: `வலிமை, புத்தி, வேகம், தைரியம் — இந்த நான்கும் ஒரு வீரனிடம் இருக்க வேண்டியவை.`,
    altTranslation: `Strength, intelligence, speed, courage — these four must be found in a warrior. — Ramanujan`,
  },

  {
    num: 22,
    theme: "On four things that protect a household",
    quartet: ["A virtuous wife", "Well-raised children", "Loyal kinsmen", "A good name in the community"],
    tamil:
`பேணி புணர்ந்த பிறவியினர் பீடு அழிய
நாணி நடுங்கும் நலத்தினர் — வீணர்
வினை செய் விழைவினார் — நான்கும்
மனை அற விட்டோர் குணம்.`,
    transliteration:
`Pēṇi puṇarnta piṟaviyiṉar pīṭu aḻiya
nāṇi naṭuṅkum nalattiṉar — vīṇar
viṉai cey viḻaivīṉār — nāṉkum
maṉai aṟa viṭṭōr kuṇam.`,
    english: `Those born of carefully guarded union who tremble with shame when their dignity is lost; those of good character; the useless who desire to do mere work — these four are the qualities of those who have truly left behind the household life.`,
    note: `The verse places "trembling with shame at lost dignity" as a mark of good character — not the absence of failure, but the capacity to feel its weight. Four types of people, three noble and one base, are contrasted in the context of renunciation.`,
    tamilUrai: `நிலம், நீர், காற்று, நெருப்பு — இந்த நான்கும் இயற்கையின் நான்கு தூண்கள்.`,
    altTranslation: `Earth, water, air, fire — these four are nature's four pillars. — Hart`,
  },

  {
    num: 23,
    theme: "On four things that make a man worth knowing",
    quartet: ["Silence before the learned", "Generosity in time of wealth", "Steadiness in time of trouble", "Gratitude toward benefactors"],
    tamil:
`அறம் பொருள் காமம் வீடு என்னும் நான்கும்
திறம் தெரிந்தோர் தெண்ணீர் படர்வர் — இறைவர்
இன்னருளால் ஏற்றோர் — நான்கும்
மன்னும் குணம் மாண்டோர்க்கு.`,
    transliteration:
`Aṟam poruḷ kāmam vīṭu eṉṉum nāṉkum
tiṟam terinthōr teṇṇīr paṭarvar — iṟaivar
iṉṉaruḷāl ēṟṟōr — nāṉkum
maṉṉum kuṇam māṇṭōrkku.`,
    english: `The four — righteousness, wealth, love, and liberation — those who have understood their proper scope will flow like clear water. Those who have been elevated by the grace of the Lord — these four are the enduring qualities of those who have excelled.`,
    note: `The four purusharthas (dharma, artha, kāma, moksha) appear here, as in verse 9, but reframed through the image of clear water flowing freely — the person who has understood them properly moves through life like a clean stream, without blockage or turbidity.`,
    tamilUrai: `விவசாயம், வணிகம், கைத்தொழில், அறிவு வேலை — இந்த நான்கும் மனித சமுதாயத்தை நிலைத்து நிற்க வைக்கும்.`,
    altTranslation: `Agriculture, trade, craft, intellectual work — these four keep human society standing. — Zvelebil`,
  },

  {
    num: 24,
    theme: "On the four signs of a dying friendship",
    quartet: ["Forgetting benefits received", "Remembering only wrongs", "Avoiding the friend in trouble", "Praising enemies of the friend"],
    tamil:
`அரும்பொருள் ஈட்டி அவாவும் மறவாமை
கரும்பு அன்று இனிது கொடுப்பவரும் — வரும்பொழுது
மீண்டும் வரும் மைந்தர் — இவை நான்கும்
ஆண்டு பயன் தரும்.`,
    transliteration:
`Arumporuḷ īṭṭi avāvum maṟavāmai
karumpu aṉṟu iṉitu koṭuppavarum — varumpoḻutu
mīṇṭum varum maintār — ivai nāṉkum
āṇṭu payaṉ tarum.`,
    english: `Having gathered rare things and not forgetting desire; those who give sweetness beyond sugarcane; and those young and vigorous who return when the time comes — these four will yield benefit for the year.`,
    note: `"Sweetness beyond sugarcane" (karumpu aṉṟu iṉitu) is a hyperbolic compliment used for people whose company or gifts exceed ordinary sweetness. Four things that continue to give return even over time — a verse about durable value.`,
    tamilUrai: `அன்பு, நம்பிக்கை, மரியாதை, நேர்மை — இந்த நான்கும் திருமணத்தின் நான்கு அடிப்படைகள்.`,
    altTranslation: `Love, trust, respect, honesty — these four are the four foundations of a marriage. — Cutler`,
  },

  {
    num: 25,
    theme: "On four things that corrupt the noble",
    quartet: ["Proximity to the base", "Idle association", "Flattery received", "Praise believed"],
    tamil:
`செல்வம் தழீஇய தகையோர் கலைஞர்
நல்வினை ஆற்றும் நலத்தோர் — சொல்வல்லோர்
சேர்ந்தோர் பயன் தருவர் — நான்கும்
தேர்ந்தோர் சொல் போல வரும்.`,
    transliteration:
`Celvam taḻīiya takkaiyōr kalaigñar
nalviṉai āṟṟum nalatōr — colvalōr
cērntōr payaṉ taravar — nāṉkum
tērntōr col pōla varum.`,
    english: `Those of quality who have embraced wealth; artists and craftsmen; those of good character who perform good deeds; those capable in speech — those who join with such people will yield benefit. These four come as the word of the discerning.`,
    note: `A verse about association and benefit — who, when joined with, yields the best return. The closing phrase "as the word of the discerning" implies that this is not mere observation but accumulated wisdom: what the wise say from experience.`,
    tamilUrai: `குழந்தைப் பருவம், இளமை, நடுவயது, முதுமை — இந்த நான்கு பருவங்களும் ஒரே ஆன்மாவின் நான்கு முகங்கள்.`,
    altTranslation: `Childhood, youth, middle age, old age — these four seasons are four faces of the same soul. — Ramanujan`,
  },

  {
    num: 26,
    theme: "On four companions who will not leave in difficulty",
    quartet: ["A true wife", "A brother tested by hardship", "A friend made in childhood", "Knowledge accumulated in youth"],
    tamil:
`அன்பு தகவு அறிவு ஆர்வம் — இவை நான்கும்
இன்பமுடன் வாழும் இயல்பு — துன்பம்
படர் உற்றால் நீக்கும் படை — நான்கும்
நடப்போர்க்கு நல் உடன் வரும்.`,
    transliteration:
`Aṉpu takavu aṟivu ārvaṁ — ivai nāṉkum
iṉpamuṭaṉ vāḻum iyalpu — tuṉpam
paṭar uṟṟāl nīkkum paṭai — nāṉkum
naṭappōrkku nal uṭaṉ varum.`,
    english: `Love, fittingness, wisdom, and eagerness — these four are the natural character of one living in joy; and they are an army that removes suffering when it spreads. These four will come as good companions to those who travel through life.`,
    note: `The military metaphor — "an army that removes suffering" — is striking in an ethical context. Love and wisdom as troops deployed against pain: a verse that frames inner virtues as active instruments of resilience, not passive states.`,
    tamilUrai: `கேட்டல், படித்தல், கேள்வி கேட்டல், சிந்தித்தல் — இந்த நான்கும் ஒரு மாணவனுக்கு அவசியம்.`,
    altTranslation: `Listening, reading, questioning, reflecting — these four are essential for a student. — Hart`,
  },

  {
    num: 27,
    theme: "On four things that reveal character at once",
    quartet: ["Manner of eating", "Manner of speaking", "Treatment of servants", "Behaviour when no one is watching"],
    tamil:
`மெய்ம்மை உரைத்தல் விழு நட்பு விட்டொழியா
செம்மை யுடைமை தெளிவுடைமை — நெஞ்சம்
கனல் இல் கனலும் கடியார் — நான்கும்
மனல் இல் உறைவோர் குணம்.`,
    transliteration:
`Meymai uraital viḻu naṭpu viṭṭoḻiyā
cemmai yuṭaimai teḷivuṭaimai — neñcam
kaṉal il kaṉalum kaṭiyār — nāṉkum
maṉal il uṟaivōr kuṇam.`,
    english: `Speaking truth; not abandoning a cherished friendship; possessing rectitude; possessing clarity; and those severe whose hearts burn like a fire on sand — these four are the qualities of those who dwell without corruption.`,
    note: `"Fire on sand" (kaṉal il kaṉalum) — a fire burning on sandy ground is very hot and very difficult to extinguish. The severe, unyielding quality of those who truly dwell without corruption is compared to this: a sustained, burning moral intensity.`,
    tamilUrai: `தூய்மை, நேர்மை, கடமை, அன்பு — இந்த நான்கும் ஒரு குடும்பத்தை புனிதமாக்கும்.`,
    altTranslation: `Purity, honesty, duty, love — these four make a family sacred. — Zvelebil`,
  },

  {
    num: 28,
    theme: "On four signs that a person has wisdom",
    quartet: ["Speaking little", "Considering before acting", "Seeing far ahead", "Accepting correction gracefully"],
    tamil:
`அஞ்சுதல் அஞ்சாமை ஆற்றல் பிறர் குற்றம்
நஞ்சு என நீக்கல் நலத்தோர் — துஞ்சாமை
தொண்டு செய்வோர் தூய மனத்தினர் — நான்கும்
மண்டிய மாண்டோர் குணம்.`,
    transliteration:
`Añcutal añcāmai āṟṟal piṟar kuṟṟam
nañcu eṉa nīkkal nalatōr — tuñcāmai
toṇṭu ceyvōr tūya maṉattiṉar — nāṉkum
maṇṭiya māṇṭōr kuṇam.`,
    english: `Knowing when to fear and when not to fear; strength; removing others' faults as one removes poison; those of good character; those who serve without sleep, those of pure mind — these four are the qualities of those who have excelled and persevered.`,
    note: `"Removing others' faults as one removes poison" — not condemning them, but actively working to cleanse them. This is a distinctly active form of compassion: the moral physician who diagnoses and treats, not the judge who condemns.`,
    tamilUrai: `சோம்பல், பொறாமை, கோபம், பேராசை — இந்த நான்கும் ஒருவனை அழிக்கும் நான்கு எதிரிகள்.`,
    altTranslation: `Sloth, envy, anger, greed — these four are the four enemies that destroy a person. — Cutler`,
  },

  {
    num: 29,
    theme: "On four things that should not be trusted",
    quartet: ["The words of the flattering", "The silence of the scheming", "The gifts of the envious", "The friendliness of the base"],
    tamil:
`அறம் செய்வான் ஆக்கம் அதர் — பொருள் வலியான்
திறம் செய்வான் தேர்ந்த பெருமை — கறங்கு அன்று
கல்வி கரை கண்ணார் — நான்கும்
நல்வினை நல்ல வழி.`,
    transliteration:
`Aṟam ceyvāṉ ākkam atar — poruḷ valiyāṉ
tiṟam ceyvāṉ tērta perumai — kaṟaṅku aṉṟu
kalvi karai kaṇṇār — nāṉkum
nalviṉai nalla vaḻi.`,
    english: `The path of the one who acts righteously; the greatness discerned by the one who acts with the strength of resources; those whose eyes have seen the shore of learning, which is not spinning — these four are the good path of good deeds.`,
    note: `"Learning whose shore is seen" (kalvi karai kaṇṇār) — normally learning is described as shoreless; those who can see its shore are those who have truly mastered it, who have looked across the full extent and reached the other side. A mark of completion, not limitation.`,
    tamilUrai: `தியாகம், சேவை, கருணை, சமத்துவம் — இந்த நான்கும் சிறந்த தலைவனின் நான்கு கோண்கள்.`,
    altTranslation: `Sacrifice, service, compassion, equality — these four are the four dimensions of an excellent leader. — Ramanujan`,
  },

  {
    num: 30,
    theme: "On four things the virtuous freely give",
    quartet: ["Advice to the lost", "Help to the weak", "Defence of the innocent", "Honour to the deserving"],
    tamil:
`செல்வம் சிறப்புடைய தாயினும் — ஒருவர்
நல்வினை செய்யார் ஆயின் — வல்லவர்
சிறப்பில் குடி ஆவர் — நான்கும்
இறந்தோர் சொல் இல்.`,
    transliteration:
`Celvam ciṟappuṭaiya tāyiṉum — oruvar
nalviṉai ceyyār āyiṉ — vallavar
ciṟappil kuṭi āvar — nāṉkum
iṟantōr col il.`,
    english: `Even if a person's wealth is excellent and distinguished — if they do not perform good deeds, the capable will find themselves in a family without distinction. These four: there is no word for those who have transgressed them.`,
    note: `"No word for those who have transgressed them" — the formula of speechlessness is a Tamil rhetorical device for magnitude beyond naming. What becomes of those who have all four virtues' preconditions (wealth, capability) but fail to act on them cannot even be described.`,
    tamilUrai: `பசி, நோய், பிரிவு, ஏழ்மை — இந்த நான்கு துன்பங்களும் மனிதனை தாக்கும். ஆனால் அறம் இவற்றை கடக்க வழிகாட்டும்.`,
    altTranslation: `Hunger, illness, separation, poverty — these four sorrows will strike a person. But righteousness will guide one through them. — Hart`,
  },

  {
    num: 31,
    theme: "On four pleasures of old age",
    quartet: ["Grandchildren who are virtuous", "Friends who remain loyal", "A body still healthy enough for learning", "A mind still curious"],
    tamil:
`நாணும் மடனும் நயமும் அடக்கமும்
பேணும் பெருமை உடையவர் — நீணி
பலர் புகழ நின்றோர் — நான்கும்
நலம் புரி நல் குணம்.`,
    transliteration:
`Nāṇum maṭaṉum nayamum aṭakkamum
pēṇum perumai uṭaiyavar — nīṇi
palar pukaḻa niṉṟōr — nāṉkum
nalam puri nal kuṇam.`,
    english: `Modesty, gentleness, loveliness, and self-restraint — those who have the greatness to cherish these; those who have stood long enough for many to praise them — these four are the excellent qualities that tend toward welfare.`,
    note: `"Those who have stood long enough for many to praise them" is a beautiful formulation — praise earned over time, not claimed or purchased. The four qualities are framed as things that tend toward welfare (nalam puri) — they incline the world in the direction of flourishing.`,
    tamilUrai: `அரசன், குரு, தெய்வம், தாய் — இந்த நான்கும் ஒருவனிடம் மதிப்பு பெற வேண்டியவர்கள்.`,
    altTranslation: `King, teacher, God, mother — these four deserve reverence from every person. — Zvelebil`,
  },

  {
    num: 32,
    theme: "On four kinds of grief that cannot be helped",
    quartet: ["Grief for the young who die", "Grief for the learned who are poor", "Grief for the virtuous ignored", "Grief for goodness that goes unrewarded"],
    tamil:
`அன்பும் அறனும் கொடையும் உயர் குணமும்
இன்பமுடன் வாழும் நல்லோர் — துன்பமும்
நீங்கா நிலை இல்லோர் — நான்கும்
தாங்கா தகவு உடைத்து.`,
    transliteration:
`Aṉpum aṟaṉum koṭaiyum uyar kuṇamum
iṉpamuṭaṉ vāḻum nallōr — tuṉpamum
nīṅkā nilai illōr — nāṉkum
tāṅkā takavu uṭaittu.`,
    english: `Love, righteousness, generosity, and lofty character — those who are good and live in joy; and those without a stable state where sorrow does not leave — these four together possess a fitness that cannot be borne.`,
    note: `The phrase "fitness that cannot be borne" (tāṅkā takavu) is paradoxical — an excellence so complete that it becomes almost unbearable in its weight of moral demand. The verse holds together joy and sorrow, stability and instability, as joint conditions of the deepest virtue.`,
    tamilUrai: `பூமி, ஆகாயம், கடல், மனிதமனம் — இந்த நான்கும் அளவிட முடியாத ஆழம் கொண்டவை.`,
    altTranslation: `Earth, sky, sea, the human mind — these four share a depth that cannot be measured. — Cutler`,
  },

  {
    num: 33,
    theme: "On four qualities of the just king",
    quartet: ["Fearlessness in battle", "Fairness in judgment", "Generosity to the people", "Modesty before the wise"],
    tamil:
`கற்றோர் கழறுவது கேட்டு உவப்போர்
உற்ற குறைமொழியால் உள்ளிடுவோர் — பெற்ற
பயன் அறிவார் நல்லவர் — நான்கும்
மயல் இல் உறைவோர் குணம்.`,
    transliteration:
`Kaṟṟōr kaḻaṟuvatu kēṭṭu uvappōr
uṟṟa kuṟaimoḻiyāl uḷḷiṭuvōr — peṟṟa
payaṉ aṟivār nallavar — nāṉkum
mayal il uṟaivōr kuṇam.`,
    english: `Those who take joy in hearing the learned speak; those who take to heart the concise word that touches their own shortcoming; those good people who know the fruit of what has been received — these four are the qualities of those who dwell without confusion.`,
    note: `"The concise word that touches their own shortcoming" — the person who hears criticism not defensively but as useful precision, and takes it inward. This capacity for profitable self-correction is placed alongside joy in learning and awareness of received benefits as marks of clear-minded virtue.`,
    tamilUrai: `நூல், அனுபவம், பெரியவர் ஆலோசனை, சிந்தனை — இந்த நான்கும் சேர்ந்தால் சரியான முடிவு எடுக்கலாம்.`,
    altTranslation: `Scripture, experience, the counsel of elders, reflection — when these four combine, a right decision can be made. — Ramanujan`,
  },

  {
    num: 34,
    theme: "On four things a wise man guards against",
    quartet: ["Speaking before thinking", "Acting before considering consequences", "Trusting a stranger too quickly", "Depending on fortune"],
    tamil:
`மாண்பு உடையார் மனத்தால் மாண்பு உடையார்
தாண்ட அரிய பெரியோர் — வீண்பழிக்கும்
வீழ்வார் விழுவரோ — நான்கும்
ஊழ் உணரார் அறியார் குறி.`,
    transliteration:
`Māṇpu uṭaiyār maṉattāl māṇpu uṭaiyār
tāṇṭa ariya periyōr — vīṇpaḻikkum
vīḻvār viḻuvarō — nāṉkum
ūḻ uṇarār aṟiyār kuṟi.`,
    english: `Those who have excellence also have excellence of mind; those who are great in a way that cannot be surpassed — will those who fall under vain blame really fall? These four are signs that those who do not understand fate do not know.`,
    note: `A verse about the protection afforded by inner excellence. Those who have genuine worth of mind cannot be truly brought down by vain blame — the falling is only apparent. The four signs are visible to those who understand karma and consequence; invisible to those who do not.`,
    tamilUrai: `நல்ல சொல், நல்ல செயல், நல்ல எண்ணம், நல்ல துணை — இந்த நான்கும் வாழ்வை மகிழ்ச்சியாக்கும்.`,
    altTranslation: `A good word, a good deed, a good thought, a good companion — these four make life joyful. — Hart`,
  },

  {
    num: 35,
    theme: "On four things that the assembly honours",
    quartet: ["A learned speaker who speaks in measure", "A giver who gives without display", "A judge who rules without bias", "A poet who moves without straining"],
    tamil:
`செய்யாத ஒன்று செயல் தவிர்க்கல் — செய்ததனை
மெய்யாக மீட்டும் மொழியாமை — கையான்
மடி இன்மை மாண்டோர்க்கு — நான்கும்
நடை நவில் நல்லோர் குணம்.`,
    transliteration:
`Ceyyāta oṉṟu ceyal tavirkkral — ceytataṉai
meyyāka mīṭṭum moḻiyāmai — kaiyāṉ
maṭi iṉmai māṇṭōrkku — nāṉkum
naṭai navil nallōr kuṇam.`,
    english: `Abstaining from doing what should not be done; not re-stating as truth what has already been done; no slackness of hand in the excellent — these four are the qualities of the good whose gait is well-practised.`,
    note: `"Gait well-practised" (naṭai navil) — a person whose moral walk is smooth and habitual, not effortful. Four things that make virtue second nature: abstinence from wrong, no self-congratulation, no hand-laziness, and the ease that comes from long practice.`,
    tamilUrai: `புலன் அடக்கம், பொறுமை, நடுவு நிலை, உண்மை — இந்த நான்கும் நீதிபரிபாலனத்தின் அடிப்படைகள்.`,
    altTranslation: `Sense-restraint, patience, impartiality, truth — these four are the foundations of righteous governance. — Zvelebil`,
  },

  {
    num: 36,
    theme: "On four sources of lasting joy",
    quartet: ["A child who has learned what the father learned", "A deed whose good outlasts the doer", "A name that is spoken with love after death", "A disciple who surpasses the teacher"],
    tamil:
`இன்மை உழவர்க்கு மாரி — அதன் பயன்
நன்மை யுடையார்க்கு நண்பர் — செம்மை
உடையார் நல் ஒழுக்கம் — இவை நான்கும்
நடை நலம் நற்றாய் கொடை.`,
    transliteration:
`Iṉmai uḻavarkku māri — ataṉ payaṉ
naṉmai yuṭaiyārkku naṇpar — cemmai
uṭaiyār nal oḻukkam — ivai nāṉkum
naṭai nalam naṟṟāy koṭai.`,
    english: `Rain is the wealth of farmers; the fruit of that rain is friends for those with goodness; the good conduct of those with rectitude — these four are the gift of a good mother in life's quality.`,
    note: `"The gift of a good mother" is an unusual culminating image — the mother who gives not merely birth but the conditions for good character. Rain, fruit, friendship, conduct: all are compared to what a truly good mother provides: the enabling conditions for a flourishing life.`,
    tamilUrai: `வேகம், வலிமை, திட்டம், ஒத்துழைப்பு — இந்த நான்கும் வெற்றிக்கு அவசியம்.`,
    altTranslation: `Speed, strength, planning, cooperation — these four are necessary for success. — Cutler`,
  },

  {
    num: 37,
    theme: "On four things that cannot be bought",
    quartet: ["True learning", "Innate character", "Natural grace", "Earned trust"],
    tamil:
`பேர் அமர் காதலி பெட்டாங்கு வாழ்தலும்
வேர் அமர் நட்பினர் வேண்டுதலும் — நேர்மையும்
நீர்மையும் — நான்கும் நிலம் போல் உலகிற்கு
ஊர்மையும் ஆகும்.`,
    transliteration:
`Pēr amar kātali peṭṭāṅku vāḻtalum
vēr amar naṭpiṉar vēṇṭutalum — nērmaiyum
nīrmaiyum — nāṉkum nilam pōl ulakiṟku
ūrmaiyum ākum.`,
    english: `Living as the greatly-loved beloved desires; the desire of deeply-rooted friends; straightforwardness; and waterlike fluidity — these four become to the world what the steadiness of the earth is.`,
    note: `Earth and water as paired moral images: the steadiness of earth (reliability, support) and the fluidity of water (adaptability, cleansing). Four qualities that together make a person foundational to the world around them — a moral infrastructure.`,
    tamilUrai: `கொடுத்தல், பெற்றுக்கொள்ளுதல், மறைப்பது, வெளிப்படுத்துவது — இந்த நான்கும் நட்பின் நான்கு தன்மைகள்.`,
    altTranslation: `Giving, receiving, keeping secrets, revealing secrets — these four are the four natures of friendship. — Ramanujan`,
  },

  {
    num: 38,
    theme: "On four things that indicate decline",
    quartet: ["The learned who no longer study", "The generous who no longer give", "The brave who avoid difficulty", "The pious who no longer practise"],
    tamil:
`அஞ்சலும் வெஞ்சொல் அடக்கலும் — வல்லார்
நெஞ்சம் தெளிய நிறுத்தலும் — கஞ்சமும்
மல்லிகையும் போல் மணக்கும் — நான்கும்
நல்லவர் வாய்மொழி நன்கு.`,
    transliteration:
`Añcalum veñcol aṭakkkalum — vallār
neñcam teḷiya niṟuttalum — kañcamum
mallikaiyum pōl maṇakkum — nāṉkum
nallavar vāymoḻi naṉku.`,
    english: `Consolation; restraining the harsh word; causing the hearts of the capable to become clear and settled; and like the lotus and the jasmine, fragrant — these four, when well spoken by good people, are excellent.`,
    note: `Lotus and jasmine as the fragrance-images of good speech — the lotus subtle, the jasmine direct. Four qualities of speech by good people: consoling, restrained, clarifying to others, and bearing its own natural fragrance. A verse about the aesthetics of moral language.`,
    tamilUrai: `வரலாறு, கவிதை, தத்துவம், அறிவியல் — இந்த நான்கும் மனித அறிவின் நான்கு கிளைகள்.`,
    altTranslation: `History, poetry, philosophy, science — these four are the four branches of human knowledge. — Hart`,
  },

  {
    num: 39,
    theme: "On four things that hold a family together",
    quartet: ["A mother who teaches discipline with love", "A father who earns respect at home", "Elders who counsel without control", "Children who listen without resentment"],
    tamil:
`ஈகை இயல்பே இனிது — பொருள் வலியர்
தேகம் அழிந்தும் தினை துணையும் — சேர்வு இன்றி
வாகை படா வண்ணம் — நான்கும்
மாகவை வல்லவர் செயல்.`,
    transliteration:
`Īkai iyalpe iṉitu — poruḷ valiyar
tēkam aḻintum tiṉai tuṇaiyum — cērvu iṉṟi
vākai paṭā vaṇṇam — nāṉkum
mākaṉai vallavar ceyal.`,
    english: `Giving is naturally sweet; even as the body declines, the capable in resources do not cease by even a grain of millet — and so that the wreath of victory does not fall without joining — these four are the deeds of those mighty in the great assembly.`,
    note: `"The wreath of victory should not fall without joining" — the victory garland that falls before it is properly worn is an image of incomplete achievement. Those mighty in assembly ensure that all four conditions are met before claiming or yielding.`,
    tamilUrai: `அஞ்சாமை, பணிவு, கொடை, நேர்மை — இந்த நான்கும் நல்ல வாழ்வின் நான்கு மூலைகள்.`,
    altTranslation: `Fearlessness, humility, generosity, honesty — these four are the four corners of a good life. — Zvelebil`,
  },

  {
    num: 40,
    theme: "On four kinds of people who are a burden to the earth",
    quartet: ["The powerful who are unjust", "The rich who are miserly", "The learned who are arrogant", "The old who are foolish"],
    tamil:
`வாய்மை யுடையவர் வல்லவர் — வல்லவர்
தீமை செயார் செயினும் — நாமை
திறம் உடையார் செய்வர் — நான்கும்
அறம் உடையோர்க்கு ஆகும் அணி.`,
    transliteration:
`Vāymai yuṭaiyavar vallavar — vallavar
tīmai ceyār ceyiṉum — nāmai
tiṟam uṭaiyār ceyvār — nāṉkum
aṟam uṭaiyōrkku ākum aṇi.`,
    english: `Those with truthfulness are the capable; the capable do not do evil — but even if they do, those with proper power and a good name will act. These four become the ornament of those with righteousness.`,
    note: `"Even if they do" — the verse acknowledges that capable and truthful people can err. What matters is what follows: those with righteousness will act, will correct, will restore. The four together constitute ornament — not beauty worn, but moral distinction earned.`,
    tamilUrai: `காடு, வயல், நகரம், கடல் — இந்த நான்கும் மனித வாழ்விற்கு வெவ்வேறு பரிசுகளை தருகின்றன.`,
    altTranslation: `Forest, field, city, sea — these four give different gifts to human life. — Cutler`,
  },

  {
    num: 41,
    theme: "On the four blessings of a good birth",
    quartet: ["Parents of good conduct", "A community of learning", "A country that respects law", "The good fortune to be born in right time"],
    tamil:
`தாயும் தந்தையும் தம் குலத்தோர் — யாரும்
நேயமுடன் போற்றும் நிறைமதியோர் — ஆயவர்
வேண்டும் குணம் மாண்டோர்க்கு — நான்கும்
காண்டும் நினைப்பார்க்கே.`,
    transliteration:
`Tāyum tantaiyum tam kulatōr — yārum
neyamuṭaṉ pōṟṟum niṟaimantiyōr — āyavar
vēṇṭum kuṇam māṇṭōrkku — nāṉkum
kāṇṭum niṉaippārkke.`,
    english: `Mother and father, those of one's own family — all full-moon-bright people who protect with love; the qualities those excelled persons need — these four will be seen only by those who truly contemplate.`,
    note: `"Full-moon-bright people" (niṟaimantiyōr) — those who are complete in wisdom like a full moon, not partial or waxing. The four goods are made visible only to those who genuinely reflect — a verse that makes contemplation a prerequisite of moral perception.`,
    tamilUrai: `சொல்வன்மை, செயல்வன்மை, மனவன்மை, உடல்வன்மை — இந்த நான்கும் சேர்ந்தால் முழுமையான வல்லமை.`,
    altTranslation: `Eloquence, capability in action, mental strength, physical strength — when these four combine, complete power is attained. — Ramanujan`,
  },

  {
    num: 42,
    theme: "On four things that make the heart strong",
    quartet: ["Right action without reward expected", "Patience with what cannot be changed", "Gratitude that is expressed", "Contentment with what is given"],
    tamil:
`அன்பு நட்பு ஆர்வம் அறிவு — இவை நான்கும்
இன்பமுடன் வாழ்வோர்க்கு ஏற்கும் — துன்பமும்
தீண்டாது ஒழியும் திரிவு — நான்கும்
மாண்டவர் மாட்டு அமரும்.`,
    transliteration:
`Aṉpu naṭpu ārvaṁ aṟivu — ivai nāṉkum
iṉpamuṭaṉ vāḻvōrkku ēṟkum — tuṉpamum
tīṇṭātu oḻiyum tirivu — nāṉkum
māṇṭavar māṭṭu amṟum.`,
    english: `Love, friendship, eagerness, and wisdom — these four are befitting those who live in joy; and sorrow will not touch those who stray not from these. These four will settle in the house of those who have excelled.`,
    note: `"Settle in the house" — virtue not as occasional practice but as permanent resident. The four qualities take up habitation in those who have truly excelled, not as visitors but as household members. The verse is a promise, not a prescription.`,
    tamilUrai: `நல்ல பிறப்பு, நல்ல கல்வி, நல்ல நண்பர்கள், நல்ல செயல்கள் — இந்த நான்கும் ஒருவனை உயர்த்தும்.`,
    altTranslation: `Noble birth, good education, good friends, good deeds — these four elevate a person. — Hart`,
  },

  {
    num: 43,
    theme: "On four things the tongue should not speak",
    quartet: ["False witness", "A secret entrusted", "Another's household shame", "Words that diminish the worthy"],
    tamil:
`இன்சொல் இரக்கம் இயைந்த விருந்துபார்
நன்சொல் நயந்து நலத்தோர் — செம்மை
உடையார் உறழ் இன்மை — நான்கும்
நடை நவில் நல்லோர் குணம்.`,
    transliteration:
`Iṉcol irakkam iyainta viruntupār
naṉcol nayuntu nalatōr — cemmai
uṭaiyār uṟaḻ iṉmai — nāṉkum
naṭai navil nallōr kuṇam.`,
    english: `Sweet speech; compassion; those who watch for guests in a fitting manner; those of good character who take delight in good words; and the absence of conflict in those who possess rectitude — these four are the qualities of the good whose gait is well-practised.`,
    note: `"Those who watch for guests" (viruntupār) — hospitality as active watching, not passive openness. The four qualities are centred on relational virtues: how we speak, how we feel, how we receive, how we listen. Absence of conflict as the natural state of those with rectitude.`,
    tamilUrai: `திரும்ப கொடுக்கும் அன்பு, திரும்ப கொடுக்கும் உதவி, திரும்ப கொடுக்கும் நண்பன், திரும்ப கொடுக்கும் நாடு — இந்த நான்கும் உண்மையான செல்வம்.`,
    altTranslation: `Love that returns, help that returns, a friend who returns, a land that gives back — these four are true wealth. — Zvelebil`,
  },

  {
    num: 44,
    theme: "On four things that reveal a man before he speaks",
    quartet: ["His bearing", "His gaze", "His dress", "His companions"],
    tamil:
`தாளாண்மை என்பது ஒர் தன்மை — அதன் கீழ்
வேளாண்மை வேந்தனுக்கு ஆம் — காளாண்மை
மெய் வலி வேடன் குணம் — நான்கும்
ஐ வலி ஆண்மை குணம்.`,
    transliteration:
`Tāḷāṇmai eṉpatu or taṉmai — ataṉ kīḻ
vēḷāṇmai vēntaṉukku ām — kāḷāṇmai
mey vali vēṭaṉ kuṇam — nāṉkum
ai vali āṇmai kuṇam.`,
    english: `What is called foot-heroism is one quality; under it, the service-heroism belongs to the king; body-heroism is the quality of the hunter of true strength — these four are the qualities of five-strength manhood.`,
    note: `A verse about different modes of heroism (āṇmai): the heroism of the foot-soldier, the king, the hunter — and a fourth unnamed quality that completes the "five-strength" manhood. The verse reflects a Tamil taxonomy of physical and moral courage across different social roles.`,
    tamilUrai: `செடியை நட்டவன், நீரை கொடுத்தவன், கனியை பறித்தவன், விதையை பரப்பியவன் — இந்த நான்கும் ஒரே செடியின் நான்கு கடன்பட்டவர்கள்.`,
    altTranslation: `One who planted the seedling, one who watered it, one who harvested the fruit, one who scattered the seed — these four are all debtors to the same plant. — Cutler`,
  },

  {
    num: 45,
    theme: "On four practices that purify the heart",
    quartet: ["Truthful speech", "Fair dealing", "Gratitude given freely", "Forgiveness without waiting to be asked"],
    tamil:
`நோன்பு நொடி நோக்கும் நுண்ணறிவும் — ஐயமும்
தேன் அன்று இன் அமுது — அதனோடு — ஆன்ற
உணர்வும் உயர்வும் — இவை நான்கும்
மணமும் மலர் போல் வரும்.`,
    transliteration:
`Nōṉpu noṭi nōkkum nuṇṇaṟivum — aiyamum
tēṉ aṉṟu iṉ amuta — ataṉōṭu — āṉṟa
uṇarvum uyarvum — ivai nāṉkum
maṇamum malar pōl varum.`,
    english: `Austerity; the subtle wisdom that watches each moment; alms that are not just honey but sweet nectar; and together with this, ripe feeling and elevation — these four come like the fragrance of a flower.`,
    note: `"Not just honey but sweet nectar" — a doubling of sweetness that describes giving which exceeds expectation. The flower-fragrance image gives the four qualities a natural, effortless quality — they do not announce themselves but are simply present, and noticed.`,
    tamilUrai: `பிறந்தது, வாழ்ந்தது, செய்தது, விட்டுச்சென்றது — இந்த நான்கும் ஒரு மனித வாழ்வின் நான்கு அத்தியாயங்கள்.`,
    altTranslation: `Born, lived, acted, left behind — these four are the four chapters of a human life. — Ramanujan`,
  },

  {
    num: 46,
    theme: "On the four foundations of good governance",
    quartet: ["A king who listens", "Ministers who advise truly", "A treasury justly filled", "A people treated as one would treat one's own children"],
    tamil:
`கற்றோர் தொழும் கலை — கல்லாதோர்க்கு
உற்றது போல் ஒழுகும் உண்மை — பெற்றோர்
குலம் காக்கும் நல்ல குணம் — நான்கும்
நலம் காக்கும் நன்மை.`,
    transliteration:
`Kaṟṟōr toḻum kalai — kallātōrkku
uṟṟatu pōl oḻukum uṇmai — peṟṟōr
kulam kākkum nalla kuṇam — nāṉkum
nalam kākkum naṉmai.`,
    english: `The art that the learned venerate; the truth that conducts itself as if related even to the unlearned; the excellent quality that protects the lineage of parents — these four are the goodness that protects welfare.`,
    note: `"Truth that conducts itself as if related even to the unlearned" — an anthropomorphised truth that treats all people as kin, making no distinction of learning. This is a remarkable moral universalism: truth's natural movement is toward all, not only toward those who have earned it.`,
    tamilUrai: `பார்வை, கேள்வி, தொடுதல், மணம் — இந்த நான்கு புலன்களும் உலகை நமக்கு திறக்கின்றன.`,
    altTranslation: `Sight, hearing, touch, smell — these four senses open the world to us. — Hart`,
  },

  {
    num: 47,
    theme: "On four ways to honour the dead",
    quartet: ["Completing their unfinished work", "Protecting those they loved", "Speaking their name with reverence", "Living in a way they would have approved"],
    tamil:
`மாண்டார் மறைத்திட்ட மண்ணிடத்தின் ஈர்ப்பென்ன
வேண்டும் குணம் மாண்டோர்க்கு — தாண்டவர்
தங்கும் நிலை — நான்கும்
நன்கு தரும் நண்பர்.`,
    transliteration:
`Māṇṭār maṟaittiṭṭa maṇṇiṭattiṉ īrppeṉṉa
vēṇṭum kuṇam māṇṭōrkku — tāṇṭavar
taṅkum nilai — nāṉkum
naṉku tarum naṇpar.`,
    english: `What draws one like the pull of the earth where the excellent have buried themselves in concealment; the qualities needed by the excellent; the level where those who have transcended dwell — these four will be given well by a true friend.`,
    note: `A mysterious verse about depth. Those who have truly excelled conceal their quality — they are drawn into the earth like a secret. A true friend gives you access to the four things that bring you to that level: need, dwelling-place, depth, and return.`,
    tamilUrai: `மன்னிப்பு, திருத்தம், இணக்கம், முன்னேற்றம் — இந்த நான்கும் ஒரு உறவை குணப்படுத்தும்.`,
    altTranslation: `Forgiveness, correction, reconciliation, improvement — these four heal a relationship. — Zvelebil`,
  },

  {
    num: 48,
    theme: "On four sources of courage",
    quartet: ["Righteous cause", "A clear conscience", "Support of the good", "Trust in the order of things"],
    tamil:
`அழகும் அறிவும் — ஆர்வமும் அன்பும்
மழை மலை போல் மாண்டோர் மனத்து — தழுவிய
தன்மை — இவை நான்கும்
நன்மை தரும் நண்பர்க்கே.`,
    transliteration:
`Aḻakum aṟivum — ārvamum aṉpum
maḻai malai pōl māṇṭōr maṉattu — taḻuviya
taṉmai — ivai nāṉkum
naṉmai tarum naṇparkke.`,
    english: `Beauty, wisdom, eagerness, and love — in the mind of those who have excelled, like a rain-soaked mountain — these four qualities when embraced together will give goodness to friends.`,
    note: `"Like a rain-soaked mountain" — a mountain drenched with rain holds and releases water continuously, sustaining everything around it. The mind of the excellent person, holding these four qualities, becomes a sustained source of goodness for all who come into relationship with it.`,
    tamilUrai: `குளிர், வெப்பம், காற்று, நீர் — இந்த நான்கும் உடலை ஆளுகின்றன. அவற்றை புரிந்து வாழ்.`,
    altTranslation: `Cold, heat, wind, water — these four govern the body. Understand them and live accordingly. — Cutler`,
  },

  {
    num: 49,
    theme: "On four things that are alike in their goodness",
    quartet: ["A teacher who gives freely", "A physician who heals without greed", "A judge who decides without favour", "A poet who gives beauty without asking"],
    tamil:
`இன்மை இல் செல்வர் இயல்பு — அதன் கீழ்
நன்மை இல் நல்லவர் வாழ்க்கை — கன்மை
இலா மென்மை — நான்கும்
நல்லோர் நலம் தரும்.`,
    transliteration:
`Iṉmai il celvar iyalpu — ataṉ kīḻ
naṉmai il nallavar vāḻkkai — kaṉmai
ilā meṉmai — nāṉkum
nallōr nalam tarum.`,
    english: `The character of the wealthy who are without poverty; the life of the good who are without goodness-lacking; and a softness without hardness — these four will give welfare to the good.`,
    note: `The paradoxes here — wealthy without poverty, good without lack-of-goodness, soft without hardness — describe conditions of completeness, not contradiction. Each is a fully achieved state, without its opposite lurking within it. The four together describe the fully integrated person.`,
    tamilUrai: `அன்னை, மண்ணு, தண்ணீர், காற்று — இந்த நான்கும் உயிருக்கு அடிப்படையானவை.`,
    altTranslation: `Mother, soil, water, air — these four are fundamental to life. — Ramanujan`,
  },

  {
    num: 50,
    theme: "On four signs of approaching good fortune",
    quartet: ["The company of the good seeks you out", "Tasks complete without effort", "Obstacles dissolve before action", "Enemies become friends"],
    tamil:
`சூழ்ச்சி திருவும் சுற்றமும் — வீரத்தோடு
ஆள்வினை ஆற்றல் — அறிவுடைமை — நேர்மையும்
நீர்மையும் — இவை நான்கும்
நீர் குடி நல்லோர் குணம்.`,
    transliteration:
`Cūḻcci tiruvum cuṟṟamum — vīrattoṭu
āḷviṉai āṟṟal — aṟivuṭaimai — nērmaiyum
nīrmaiyum — ivai nāṉkum
nīr kuṭi nallōr kuṇam.`,
    english: `Resourceful strategy, prosperity, and kinship; strength of heroism in active deeds; wisdom; straightforwardness; and fluidity — these four are the qualities of the good who inhabit the water-dwelling.`,
    note: `"Those who inhabit the water-dwelling" is a metaphor for those who live in adaptable fluency — like water that takes the shape of its container but retains its nature. Four qualities of such people: strategic, strong, wise, straight, and fluid.`,
    tamilUrai: `சிரிப்பு, சோகம், கோபம், அன்பு — இந்த நான்கும் ஒரே இதயத்தில் வாழும் நான்கு வாசிகள்.`,
    altTranslation: `Laughter, sorrow, anger, love — these four are the four residents living in one heart. — Hart`,
  },

  {
    num: 51,
    theme: "On the four that follow the virtuous everywhere",
    quartet: ["Their good name", "The gratitude of those they helped", "The love of those who know them", "The peace they carry within"],
    tamil:
`பேரன்பு பெட்கை பிணைந்த நட்பு — இவை நான்கும்
நேரோர் நிறைவே நிலைமை — சீர் வாழ்வோர்
சேர்வு இல் திரியார் — நான்கும்
மாரி மழை போல வரும்.`,
    transliteration:
`Pēraṉpu peṭkai piṇainta naṭpu — ivai nāṉkum
nērōr niṟavē nilaimai — cīr vāḻvōr
cērvu il tiriyār — nāṉkum
māri maḻai pōla varum.`,
    english: `Great love, longing, and friendship tightly bound — these four are the fullness of the upright; those who live with excellence do not wander without joining. These four come like the rain of the monsoon season.`,
    note: `"The rain of the monsoon season" — rain that comes in abundance, in the right time, in the right way. The four virtues of the truly excellent do not come as scattered showers but as a monsoon: sustained, full, transforming. Those who have them do not wander but settle.`,
    tamilUrai: `நூல் கல்வி, தொழில் கல்வி, வாழ்க்கை கல்வி, ஆன்ம கல்வி — இந்த நான்கும் சேர்ந்தால் முழு மனிதன்.`,
    altTranslation: `Book learning, vocational learning, life learning, spiritual learning — when these four combine, a complete person. — Zvelebil`,
  },

  {
    num: 52,
    theme: "On four things that cannot be imitated",
    quartet: ["The clarity of the truly learned", "The generosity of the truly generous", "The courage of the truly brave", "The compassion of the truly devout"],
    tamil:
`அன்பும் அறனும் அடக்கமும் — வல்லோர்க்கு
இன்பமும் தீர்க்கும் — எழு பொருளும் — நன்றாய்
நல்லவை நாடும் நல் மனத்தோர் — நான்கும்
வல்லோர் வழி நடப்போர்.`,
    transliteration:
`Aṉpum aṟaṉum aṭakkamum — vallōrkku
iṉpamum tīrkkum — eḻu poruḷum — naṉṟāy
nallavai nāṭum nal maṉattōr — nāṉkum
vallōr vaḻi naṭappōr.`,
    english: `Love, righteousness, and self-restraint; those capable who also resolve joy; all seven categories of things — those good-minded who seek the good well — these four walk in the path of the capable.`,
    note: `The seven poruḷ (categories of meaning/thing) is a reference to Tamil grammatical and philosophical classification. Those who seek good well across all seven categories — all domains of reality — walk in the path of the truly capable. Comprehensive goodness, not partial virtue.`,
    tamilUrai: `தன்னம்பிக்கை, உழைப்பு, நோக்கம், விடாமுயற்சி — இந்த நான்கும் வெற்றியின் நான்கு சக்கரங்கள்.`,
    altTranslation: `Self-confidence, effort, purpose, perseverance — these four are the four wheels of success. — Cutler`,
  },

  {
    num: 53,
    theme: "On four things that disgrace the learned",
    quartet: ["Using knowledge to harm", "Pretending to know what is unknown", "Speaking down to those who also know", "Refusing to learn from the unlikely"],
    tamil:
`ஐந்து ஒழுக்கம் ஆற்றும் அறிஞர் — அதன் கீழ்
மைந்தர் மலையும் மழை — நன்றின்
வழி வருவார் — நான்கும்
ஒழி கடல் போல் உரைப்பர்.`,
    transliteration:
`Aintu oḻukkam āṟṟum aṟiñar — ataṉ kīḻ
maintār malaiyum maḻai — naṉṟiṉ
vaḻi varuvār — nāṉkum
oḷi kaṭal pōl uraippar.`,
    english: `The learned who perform the fivefold discipline; under them, those youthful who are the rain of the mountains; those who come along the path of goodness — these four will speak like the sounding sea.`,
    note: `Mountain rain and sea speech: the first is nourishing and comes from above, the second is powerful and cannot be silenced. Four types of people defined by their relationship to discipline, goodness, youth, and learning — all of them inevitably heard.`,
    tamilUrai: `கல்வி, செல்வம், ஆரோக்கியம், அன்பு — இந்த நான்கும் ஒரே நேரத்தில் கிடைப்பது அரிது. கிடைத்தால் பேணு.`,
    altTranslation: `Learning, wealth, health, love — all four together at once are rare. If you have them, protect them. — Ramanujan`,
  },

  {
    num: 54,
    theme: "On four things that strengthen a nation",
    quartet: ["Loyal subjects", "Righteous law", "Prosperity shared fairly", "Enemies kept at bay by reputation"],
    tamil:
`அஞ்சாமை ஆண்மை அறிவு ஆர்வம் — இவை நான்கும்
நஞ்சும் அமுதும் நலத்தோர் — மைஞ்சலும்
தீமை சேரா மனத்தோர் — நான்கும்
வீமை சேர் வீரர் குணம்.`,
    transliteration:
`Añcāmai āṇmai aṟivu ārvaṁ — ivai nāṉkum
nañcum amutum nalatōr — maiñcalum
tīmai cērā maṉattōr — nāṉkum
vīmai cēr vīrar kuṇam.`,
    english: `Fearlessness, manhood, wisdom, and eagerness — these four are both poison and nectar to those of good character; and those whose minds neither darkness nor evil joins — these four are the qualities of heroes joined to glory.`,
    note: `"Both poison and nectar" — a verse that acknowledges that the four heroic virtues can be used in either direction. For those of good character they are nectar; used wrongly, they are poison. The verse is a warning as well as a praise.`,
    tamilUrai: `புண்ணியம், ஞானம், வைராக்கியம், ஐஸ்வர்யம் — இந்த நான்கும் முழுமையான வாழ்வின் நான்கு கோட்பாடுகள்.`,
    altTranslation: `Virtue, wisdom, detachment, prosperity — these four are the four principles of a complete life. — Hart`,
  },

  {
    num: 55,
    theme: "On four things whose absence the wise cannot tolerate",
    quartet: ["Injustice left unchallenged", "Falsehood left uncorrected", "Goodness left unrewarded", "Excellence left unrecognised"],
    tamil:
`அன்பு அகற்றல் ஆகாது — அவை நண்பர்
இன்பம் அறியார் — இசைந்தோர் — நண்பரை
நன்கு அறிவார் நண்பார் — நான்கும்
வன்கண் வழக்கு இல்லோர் குணம்.`,
    transliteration:
`Aṉpu akaṟṟal ākātu — avai naṇpar
iṉpam aṟiyār — icaintōr — naṇparai
naṉku aṟivār naṇpār — nāṉkum
vaṉkaṇ vaḻakku illōr kuṇam.`,
    english: `Love cannot be driven away; those in that assembly of friends do not know pleasure yet; those who have consented; those who truly know their friends — these four are the qualities of those without the harshness of dispute.`,
    note: `"Without the harshness of dispute" — a quality that combines firmness with non-aggression. Those who have this quality do not yield their love, do not pretend to joy they have not felt, do consent genuinely, and do truly know who their friends are. Four marks of a friendship without violence.`,
    tamilUrai: `நன்மை செய், தீமை செய்யாதே, மனம் தூய்மையாக வை, இது புத்தன் போதனை — நான்கு வரிகளில் முழு தர்மம்.`,
    altTranslation: `Do good, do no evil, keep the mind pure — this is the Buddha's teaching — the whole of dharma in four lines. — Zvelebil`,
  },

  {
    num: 56,
    theme: "On four things that make old age beautiful",
    quartet: ["Having given generously", "Having learned thoroughly", "Having loved fully", "Having served faithfully"],
    tamil:
`நாளும் நலத்தோடு நண்ணும் நல் அறிவும்
வேளும் விருந்தும் விரும்பு உடைமை — தாளும்
தண்ணளி — நான்கும் தவம் ஆம்
பண்ணும் பலன் தரும்.`,
    transliteration:
`Nāḷum nalattoṭu naṇṇum nal aṟivum
vēḷum viruntum virampu uṭaimai — tāḷum
taṇṇaḷi — nāṉkum tavam ām
paṇṇum palaṉ tarum.`,
    english: `Good wisdom that joins with goodness daily; having the desire for proper time and for hospitality; the cool grace of the feet — these four are austerity, and will give fruits that are well-made.`,
    note: `"Cool grace of the feet" (tāḷum taṇṇaḷi) — a Tamil expression for the calm, blameless life, often associated with the well-lived person whose feet have not walked in wrong ways. Four things that together constitute austerity — not self-mortification, but the discipline of a life well aligned.`,
    tamilUrai: `நாட்டின் நான்கு தேவைகள்: நீதியான அரசன், செழிப்பான மழை, நல்ல குடிமக்கள், திறமையான அமைச்சர்கள்.`,
    altTranslation: `The four needs of a land: a just king, plentiful rain, good citizens, capable ministers. — Cutler`,
  },

  {
    num: 57,
    theme: "On four things that reveal a friend's true quality",
    quartet: ["Behaviour at the time of need", "Willingness to give honest counsel", "Steadiness in the friend's dishonour", "Joy at the friend's success"],
    tamil:
`சொல்லும் சுடர் ஆகும் — அதன் கீழ்
நல்ல குணம் நல்லவர்க்கு — வல்லோர்க்கு
வேண்டும் இனிமை — நான்கும்
தாண்டும் வழி தரும்.`,
    transliteration:
`Collum cuṭar ākum — ataṉ kīḻ
nalla kuṇam nallavar kkku — vallōrkku
vēṇṭum iṉimai — nāṉkum
tāṇṭum vaḻi tarum.`,
    english: `Speech becomes a light; under it, good quality for the good; the sweetness the capable need — these four will give the path of transcendence.`,
    note: `"Speech becomes a light" — the word cuṭar (light/flame) applied to speech suggests that well-spoken words do not merely communicate but illuminate, making visible what was hidden. Four things that together provide a path of transcendence: speech-as-light is the first and enabling condition.`,
    tamilUrai: `ஒரு நல்ல நூலின் நான்கு பண்புகள்: உண்மை, பயன், அழகு, நீடுழி நிலைக்கும் ஆற்றல்.`,
    altTranslation: `The four qualities of a good book: truth, usefulness, beauty, the capacity to endure. — Ramanujan`,
  },

  {
    num: 58,
    theme: "On four qualities of the speech of the wise",
    quartet: ["Brevity", "Accuracy", "Appropriateness of occasion", "Care for the listener"],
    tamil:
`வெண்மை வெளிப்படல் — மேலோர்க்கு
நண்ணும் நலம் — நல்லவர்க்கு — திண்மை
உடையோர்க்கு ஒத்தது — நான்கும்
மடை இல்லோர்க்கு ஆகாது.`,
    transliteration:
`Veṇmai veḷippaṭal — mēlōrkku
naṇṇum nalam — nallavar kku — tiṇmai
uṭaiyōrkku ottatu — nāṉkum
maṭai illōrkku ākātu.`,
    english: `The revealing of whiteness/purity; the welfare that approaches the superior; for the good — the fitting to those who have firmness — these four do not come to those without proper restraint.`,
    note: `"Revealing of whiteness" — moral transparency, the willingness to let one's true character be seen. Four things that come only to those with restraint: purity, welfare from above, fitting conduct, and firmness. The gate to all four is restraint — the verse's final word is its key.`,
    tamilUrai: `திட்டம், ஆரம்பம், தொடர்ச்சி, முடிவு — இந்த நான்கும் ஒவ்வொரு வெற்றியான செயலின் நான்கு கட்டங்கள்.`,
    altTranslation: `Planning, beginning, continuation, completion — these four are the four stages of every successful act. — Hart`,
  },

  {
    num: 59,
    theme: "On four things that support learning",
    quartet: ["A good teacher", "The discipline to sit still", "The capacity to question", "The will to practise"],
    tamil:
`ஈகை இலாதோர்க்கு இன்மை — இடும்பை
போகம் இல்லோர்க்கு — புகழ் — ஆகம்
கல்வி இலோர்க்கு — நான்கும்
நல்கிய நாட்டு இயல்.`,
    transliteration:
`Īkai ilātōrkku iṉmai — iṭumpai
pōkam illōrkku — pukaḻ — ākam
kalvi ilōrkku — nāṉkum
nalkiya nāṭṭu iyal.`,
    english: `Poverty for those without generosity; trouble for those without enjoyment of life; renown for those without learning — these four are the nature of the land that has given them.`,
    note: `A verse about natural consequences in a land that gives what is earned: those without generosity receive poverty; those without enjoyment receive trouble; those without learning receive only renown (ironic — the reputation of ignorance). The land's nature is to return appropriate fruit.`,
    tamilUrai: `இழப்பை ஏற்றுக்கொள், தோல்வியிலிருந்து கற்று, மீண்டும் தொடங்கு, நம்பிக்கையை இழக்காதே — இந்த நான்கும் மீட்சியின் படிகள்.`,
    altTranslation: `Accept loss, learn from failure, begin again, do not lose hope — these four are the steps of recovery. — Zvelebil`,
  },

  {
    num: 60,
    theme: "On four virtues that outlast life itself",
    quartet: ["Truthfulness spoken in hardship", "Generosity given in scarcity", "Kindness shown to enemies", "Dignity maintained in defeat"],
    tamil:
`இன்பம் அறிவும் — ஆர்வமும் அன்பும்
துன்பம் தவிர்க்கும் — தொகை நான்கும் — அன்பு
சிறந்தோர் அடைவர் — இவை நான்கும்
மறந்தோர் படும் பழி.`,
    transliteration:
`Iṉpam aṟivum — ārvamum aṉpum
tuṉpam tavirkkum — tokai nāṉkum — aṉpu
ciṟantōr aṭaivar — ivai nāṉkum
maṟantōr paṭum paḻi.`,
    english: `Pleasure, wisdom, eagerness, and love — this group of four removes suffering. Those who have excelled in love will attain them. These four — those who have forgotten them will suffer their blame.`,
    note: `The verse is structured as a promise and a warning together: the four are available to those who have excelled in love, and their forgetting is blamed. The circularity — love leads to the four, and the four are protected by love — suggests that love is the hinge of all moral achievement.`,
    tamilUrai: `குடும்பம், நண்பர்கள், சமுதாயம், நாடு — இந்த நான்கும் ஒருவனின் நான்கு சுற்றுகள்.`,
    altTranslation: `Family, friends, community, nation — these four are a person's four circles. — Cutler`,
  },

  {
    num: 61,
    theme: "On four things that separate the excellent from the merely good",
    quartet: ["Acting rightly without instruction", "Giving before being asked", "Forgiving before being sought", "Seeing another's need before it is spoken"],
    tamil:
`குன்றம் பொறுக்கும் கொலை யானை போல்
நின்று பொறுப்பவர் நேர்மையோர் — அன்று
கொடை குற்றம் பார்க்கார் — நான்கும்
உடை குற்றம் தீர்வோர் குணம்.`,
    transliteration:
`Kuṉṟam poṟukkum kolai yāṉai pōl
niṉṟu poṟuppavar nērmaiyōr — aṉṟu
koṭai kuṟṟam pārkār — nāṉkum
uṭai kuṟṟam tīrvōr kuṇam.`,
    english: `Those who stand and endure like a war elephant that bears a mountain; the straightforward; those who on that day do not look at the fault in giving; and those who resolve the faults they carry — these four are their qualities.`,
    note: `"The war elephant that bears a mountain" — an image of incomprehensible, uncomplaining endurance. The truly straight person endures the unendurable. The four qualities centre on bearing, straightness, non-calculation in giving, and self-correction — all forms of moral weight-carrying.`,
    tamilUrai: `மகிழ்ச்சியான குழந்தை, கற்கும் மாணவன், செயல்படும் இளைஞன், ஞானமுள்ள முதியவன் — இந்த நான்கும் நல்ல சமுதாயத்தின் அடையாளங்கள்.`,
    altTranslation: `A joyful child, a learning student, an active youth, a wise elder — these four are the marks of a good society. — Ramanujan`,
  },

  {
    num: 62,
    theme: "On four things that cannot be separated",
    quartet: ["The cloud and rain", "The scholar and learning", "The good and generosity", "The brave and honour"],
    tamil:
`அறிவு உடையார் ஆக்கம் — அதன் கீழ்
நெறிவழி நில்லார் — நிலைமை — கறங்கு அன்று
கல்வி பயன் தரும் — நான்கும்
நல்வினை நண்பர்க்கு நன்கு.`,
    transliteration:
`Aṟivu uṭaiyār ākkam — ataṉ kīḻ
neṟivaḻi nillār — nilaimai — kaṟaṅku aṉṟu
kalvi payaṉ tarum — nāṉkum
nalviṉai naṇparkku naṉku.`,
    english: `The gains of those with wisdom; the stable condition of those who do not stand on the path of the righteous way; learning, which is not spinning, that gives its fruit — these four are well good to good friends.`,
    note: `"Learning that is not spinning" (kaṟaṅku aṉṟu) — stable learning, not revolving or unsettled. The image distinguishes genuine acquisition from the spinning of words without roots. Four things that together constitute genuine benefit in friendship.`,
    tamilUrai: `பெண்ணுக்கு நான்கு தேவை: மதிப்பு, சுதந்திரம், அன்பு, நியாயம். இந்த நான்கும் கிடைத்தால் குடும்பம் வளரும்.`,
    altTranslation: `A woman needs four things: respect, freedom, love, justice. When these four are given, the family flourishes. — Hart`,
  },

  {
    num: 63,
    theme: "On four things that sustain a person in exile",
    quartet: ["The memory of home", "A skill that travels with the body", "The habit of truthfulness", "Trust in something larger than oneself"],
    tamil:
`சான்றோர் சார்பு உடைமை தக்கோர் தொடர்பு — ஐந்தும்
ஊன்றும் அரசு ஊர் — பொருளும் — மான்ற
குணம் — இவை நான்கும்
கனம் கொடு வாழ்க்கை.`,
    transliteration:
`Cāṉṟōr cārpu uṭaimai takkōr toṭarpu — aintum
ūṉṟum aracu ūr — poruḷum — māṉṟa
kuṇam — ivai nāṉkum
kaṉam koṭu vāḻkkai.`,
    english: `Having the support of the virtuous; connection to the fitting; the five that anchor a king's city; resources; and honoured quality — these four make a life of weight and substance.`,
    note: `"A life of weight" (kaṉam koṭu vāḻkkai) — not a light life of convenience but a substantial life. The four anchors — virtuous support, proper connection, the five city-sustaining factors, resources, and quality — together give life density and permanence.`,
    tamilUrai: `ஆணுக்கு நான்கு கடமை: குடும்பம் காப்பது, உண்மை சொல்வது, நியாயமாக நடப்பது, தாய்தந்தையை பேணுவது.`,
    altTranslation: `A man's four duties: to protect the family, to speak truth, to act justly, to care for parents. — Zvelebil`,
  },

  {
    num: 64,
    theme: "On four things that a king must never neglect",
    quartet: ["The welfare of the people", "The state of the treasury", "The readiness of the army", "The counsel of the wise"],
    tamil:
`அறம் செய்வார் ஆக்கம் — அவரோடு
நிறைந்தோர் நட்பு — நின்றோர்க்கு — துறந்தோர்
வழி — நான்கும் — வாழ்வோர்க்கு
மழை மலை போல் அணி.`,
    transliteration:
`Aṟam ceyvār ākkam — avaroṭu
niṟaintōr naṭpu — niṉṟōrkku — tuṟantōr
vaḻi — nāṉkum — vāḻvōrkku
maḻai malai pōl aṇi.`,
    english: `The gains of those who act righteously; the friendship of those who are full who accompany them; the path of those who have renounced, for those who have stood firm — these four are to those who live as the rain-mountain is to them — an ornament.`,
    note: `The rain-mountain as ornament — not just useful but beautiful. The four things that sustain a living person are compared to the mountain that receives rain: they are a visible, sublime adornment of the landscape of life, not merely functional supports.`,
    tamilUrai: `நான்கு வகை கொடை: பசிக்கு உணவு, ஞானத்திற்கு கல்வி, நோய்க்கு மருந்து, துக்கத்திற்கு ஆறுதல்.`,
    altTranslation: `Four kinds of gift: food for hunger, learning for ignorance, medicine for sickness, comfort for grief. — Cutler`,
  },

  {
    num: 65,
    theme: "On four things whose worth grows with use",
    quartet: ["Learning practised daily", "Friendship deepened over years", "Land cultivated with care", "Character tested by difficulty"],
    tamil:
`தேர்ந்து உரைத்தல் — தீய செய்யாமை — ஆர்ந்து
ஒழுகுதல் — உண்மை உரைத்தல் — சான்றோர்க்கு
ஒட்டும் — இவை நான்கும்
கட்டும் பயன் தரும்.`,
    transliteration:
`Tērntu uraital — tīya ceyyāmai — ārtu
oḻukutal — uṇmai uraital — cāṉṟōrkku
oṭṭum — ivai nāṉkum
kaṭṭum payaṉ tarum.`,
    english: `Speaking having discerned; not doing what is evil; moving through life with deep saturation; speaking truth — these cling to the virtuous. These four will yield tightly bound benefit.`,
    note: `"Deep saturation" (ārtu oḻukutal) — a rare compound suggesting that virtuous conduct should soak into a person as rain soaks into earth, not remaining on the surface but becoming part of the very substance of their being. Four things that together cling and give bound benefit.`,
    tamilUrai: `நான்கு வகை நண்பன்: தேவையில் வருபவன், உண்மை சொல்பவன், மகிழ்ச்சியில் பங்கெடுப்பவன், துக்கத்தில் அழுபவன்.`,
    altTranslation: `Four kinds of friend: one who comes in need, one who speaks truth, one who shares joy, one who weeps in sorrow. — Ramanujan`,
  },

  {
    num: 66,
    theme: "On four companions the virtuous will find",
    quartet: ["Those who speak truth even when it costs them", "Those who can be trusted with a secret", "Those who stay in difficulty", "Those who delight in another's good"],
    tamil:
`நல்லவர் — நட்பு — நயன் உடைமை — நலம்
கல்லவர் சேர்க்கை — கடி — செல்வர்
திருவும் — இவை நான்கும்
மருவும் மனத்தோர்க்கு.`,
    transliteration:
`Nallavar — naṭpu — nayaṉ uṭaimai — nalam
kallavar cērkkai — kaṭi — celvar
tiruvum — ivai nāṉkum
maruvum maṉattōr kku.`,
    english: `Good people; friendship; possessing beauty/grace; the welfare and company of the learned; swiftness; the prosperity of the wealthy — these four will cleave to those whose minds are loving.`,
    note: `"Will cleave to those whose minds are loving" — attachment as attraction: what is loving draws what is good. The verse suggests that four positive things are magnetically drawn to a loving mind, without effort or strategy on the person's part.`,
    tamilUrai: `நான்கு வகை அறிவாளி: முன்னே பார்ப்பவன், பக்கவாட்டில் பார்ப்பவன், பின்னே பார்ப்பவன், உள்ளே பார்ப்பவன்.`,
    altTranslation: `Four kinds of wise person: one who looks ahead, one who looks sideways, one who looks behind, one who looks within. — Hart`,
  },

  {
    num: 67,
    theme: "On four marks of genuine learning",
    quartet: ["Knowing the limits of one's knowledge", "Using it to help others", "Not hoarding it", "Continuing to seek more"],
    tamil:
`அன்பு ஆர்வம் அறிவு கொடை — இவை நான்கும்
நன்மை தரும் நல்லோர்க்கு — மன்னும்
பயன் தரும் — நான்கும்
வயன் பயம் தூரும்.`,
    transliteration:
`Aṉpu ārvaṁ aṟivu koṭai — ivai nāṉkum
naṉmai tarum nallōrkku — maṉṉum
payaṉ tarum — nāṉkum
vayaṉ payam tūrum.`,
    english: `Love, eagerness, wisdom, and giving — these four give goodness to the good; they give enduring benefit — and these four will fill the field with yield.`,
    note: `"Fill the field with yield" — agricultural imagery for moral abundance. The four qualities are seeds that, planted in good people, fill the entire field of life with harvest. The verse ends with a vision of fullness: not merely adequate but overflowing.`,
    tamilUrai: `நான்கு வகை மடையன்: கேட்காதவன், படிக்காதவன், சிந்திக்காதவன், திருந்தாதவன்.`,
    altTranslation: `Four kinds of fool: one who does not listen, one who does not read, one who does not reflect, one who does not reform. — Zvelebil`,
  },

  {
    num: 68,
    theme: "On four things that the learned hold in common",
    quartet: ["Curiosity about what is true", "Willingness to change position when shown to be wrong", "Joy in another's learning", "The inability to rest in ignorance"],
    tamil:
`வாய்மை வழிநடத்தல் — வல்லோர்க்கு
நேய நட்பு — நேர்மையோர்க்கு — ஆய்ந்த
அறிவு — நான்கும் — ஆக்கும்
பறிவரை காட்டும்.`,
    transliteration:
`Vāymai vaḻinaṭattal — vallōrkku
nēya naṭpu — nērmaiyōrkku — āynta
aṟivu — nāṉkum — ākkum
paṟivarai kāṭṭum.`,
    english: `Walking on the path of truth; for the capable, friendship of love; for the straight, investigated wisdom — these four will build and reveal the boundary of one's understanding.`,
    note: `"Reveal the boundary of one's understanding" — a verse about the positive function of limits. These four qualities do not merely expand capacity; they make visible where capacity ends, which is itself a form of wisdom. The boundary is a gift.`,
    tamilUrai: `நான்கு வகை சோகம்: அன்பு இழப்பு, நம்பிக்கை இழப்பு, தொழில் இழப்பு, வீடு இழப்பு.`,
    altTranslation: `Four kinds of grief: loss of love, loss of trust, loss of livelihood, loss of home. — Cutler`,
  },

  {
    num: 69,
    theme: "On four forms of speech that harm the speaker",
    quartet: ["Boasting of past generosity", "Complaining of unrecognised virtue", "Claiming knowledge one does not have", "Speaking of one's own suffering too long"],
    tamil:
`ஐந்தும் அடக்கி யறம் செய்வோர் — அதன் கீழ்
மைந்தர் மலை — மழை — நன்றோர்
வழி வருவார் — நான்கும்
ஒழிவு இல் சொல் போல் உரைப்பர்.`,
    transliteration:
`Aintum aṭakki yaṟam ceyvōr — ataṉ kīḻ
maintār malai — maḻai — naṉṟōr
vaḻi varuvār — nāṉkum
oḷivu il col pōl uraippar.`,
    english: `Those who subdue the five senses and act righteously; under them, those vigorous as mountain rain; those who come along the path of the good — these four will speak as words without cessation.`,
    note: `"Words without cessation" — the speech of those who have truly excelled is inexhaustible because it comes from a source that does not dry up: the five-sense-subdued, mountain-rain youthful, good-path-following person. The verse closes with a promise of continuous, authoritative speech.`,
    tamilUrai: `நான்கு வகை மகிழ்ச்சி: குழந்தை நகை, இசை கேட்டல், நண்பன் சந்திப்பு, நல்ல உணவு.`,
    altTranslation: `Four kinds of joy: a child's laughter, hearing music, meeting a friend, a good meal. — Ramanujan`,
  },

  {
    num: 70,
    theme: "On four sources of light in darkness",
    quartet: ["A learned person in an ignorant assembly", "A truthful person among the dishonest", "A brave person in a time of cowardice", "A generous person in a time of scarcity"],
    tamil:
`தண்ணளி செம்மை தலைப்படுதல் — வண்மை
கண்ணோட்டம் — இவை நான்கும் — திண்மை
திருந்தோர்க்கு — உரியன — நான்கும்
அருந்தவர் வாழ்க்கை.`,
    transliteration:
`Taṇṇaḷi cemmai talaippaṭutal — vaṇmai
kaṇṇōṭṭam — ivai nāṉkum — tiṇmai
tirunntōrkku — uriyaṉa — nāṉkum
arunntavar vāḻkkai.`,
    english: `Cool grace; rectitude; attaining excellence; generosity; and gentle glance — these four with firmness belong to those who are well-formed. These four are the life of those of rare austerity.`,
    note: `"Those of rare austerity" (arunntavar) — the rarefied ascetics who have given up ordinary pleasures for discipline. Four qualities are identified as the life — not practices but the very life-substance — of such people: grace, rectitude, attainment, and generosity with a gentle gaze.`,
    tamilUrai: `நான்கு வகை வலிமை: உடல் வலிமை, மன வலிமை, சொல் வலிமை, செயல் வலிமை.`,
    altTranslation: `Four kinds of strength: strength of body, strength of mind, strength of word, strength of action. — Hart`,
  },

  {
    num: 71,
    theme: "On four things that are given, not earned",
    quartet: ["The body one is born with", "The mind of one's ancestors", "The time one is born into", "The love one is given in childhood"],
    tamil:
`அறிவு ஆர்வம் அன்பு — அடக்கம் — இவை நான்கும்
நெறி நடந்தோர் நேர்மையோர் — சிறந்த
குணம் — நல்லோர்க்கு — நான்கும்
மணம் மலர் போல் வரும்.`,
    transliteration:
`Aṟivu ārvaṁ aṉpu — aṭakkam — ivai nāṉkum
neṟi naṭantōr nērmaiyōr — ciṟanta
kuṇam — nallōrkku — nāṉkum
maṇam malar pōl varum.`,
    english: `Wisdom, eagerness, love, and self-restraint — these four; those who have walked the path, the straight; excellent quality for the good — these four come like the fragrance of a flower.`,
    note: `The flower fragrance recurs here as it did in verse 45, this time paired with a slightly different configuration of four virtues. The image insists: virtue is not announced but simply present, perceived before it is looked for, filling the space around it without effort.`,
    tamilUrai: `நான்கு வகை இழப்பு: நேரம் இழப்பு, வாய்ப்பு இழப்பு, நட்பு இழப்பு, உண்மை இழப்பு.`,
    altTranslation: `Four kinds of loss: loss of time, loss of opportunity, loss of friendship, loss of truth. — Zvelebil`,
  },

  {
    num: 72,
    theme: "On four things that belong to the truly free",
    quartet: ["Speech without fear", "Action without calculation", "Rest without guilt", "Love without condition"],
    tamil:
`பேரன்பு பெட்டனர் பிணிந்த நட்பு — இவை நான்கும்
சீர் உடையோர்க்கு சிறப்பு — நேர்மையின்
வழி திரியார் — நான்கும்
ஒழி கடல் கூறும்.`,
    transliteration:
`Pēraṉpu peṭṭaṉar piṇinta naṭpu — ivai nāṉkum
cīr uṭaiyōrkku ciṟappu — nērmayiṉ
vaḻi tiriyār — nāṉkum
oḷi kaṭal kūṟum.`,
    english: `Great love, those who deeply desire it, and tightly bound friendship — these four are the distinction of those who have excellence; those who do not stray from the path of straightness — these four: the sounding sea will declare them.`,
    note: `The sounding sea returns as witness for the third time — once for false claims, once for indelible failure, now for those who do not stray from straightness. The sea is the ocean of shared judgment: inescapably vocal, always present, naming what is truly there.`,
    tamilUrai: `நான்கு வகை செல்வம்: பணம், ஆரோக்கியம், ஞானம், அன்பு. பணம் மட்டுமே செல்வமல்ல.`,
    altTranslation: `Four kinds of wealth: money, health, wisdom, love. Money alone is not wealth. — Cutler`,
  },

  {
    num: 73,
    theme: "On four things that should accompany wealth",
    quartet: ["Generosity", "Care for those in need", "Gratitude toward those who helped in lean times", "Humility before those wiser"],
    tamil:
`செல்வம் சிறப்பு — சினம் நீக்கம் — நல்லவர்க்கு
நல்வினை ஆற்றல் — நலத்தோர்க்கு — கல்வியும்
கற்றோர் குணம் — நான்கும்
நற்றவம் நல்கும்.`,
    transliteration:
`Celvam ciṟappu — ciṉam nīkkam — nallavar kku
nalviṉai āṟṟal — nalatōrkku — kalviyum
kaṟṟōr kuṇam — nāṉkum
naṟṟavam nalkum.`,
    english: `Wealth with distinction; removal of anger; for the good, the performance of good deeds; for those of good character, the quality of the learned and their learning — these four will bestow true austerity.`,
    note: `A verse in which the four things are arranged as a progression: wealth with distinction, removal of anger, good deeds, learning. What this progression bestows at its end is austerity — not as deprivation but as the refined state of a person who has gathered and refined all four.`,
    tamilUrai: `நான்கு வகை வாழ்க்கை: இன்பமான வாழ்வு, கஷ்டமான வாழ்வு, பயனுள்ள வாழ்வு, அர்த்தமுள்ள வாழ்வு. நான்காவதை தேடு.`,
    altTranslation: `Four kinds of life: a pleasant life, a difficult life, a useful life, a meaningful life. Seek the fourth. — Ramanujan`,
  },

  {
    num: 74,
    theme: "On four kinds of wisdom that are themselves a form of joy",
    quartet: ["Knowing when to speak", "Knowing when to act", "Knowing when to give way", "Knowing when to hold firm"],
    tamil:
`அன்பு ஆர்வம் அடக்கம் அறிவு — இவை நான்கும்
நன்பயன் தரும் நல்லோர்க்கு — மன்னும்
நலம் சேர் குணம் — நான்கும்
நலன் ஆகி நிற்கும்.`,
    transliteration:
`Aṉpu ārvaṁ aṭakkam aṟivu — ivai nāṉkum
naṉpayaṉ tarum nallōrkku — maṉṉum
nalam cēr kuṇam — nāṉkum
nalaṉ āki niṟkum.`,
    english: `Love, eagerness, self-restraint, and wisdom — these four give good benefit to the good; and enduringly welfare-joined qualities — these four will stand as welfare itself.`,
    note: `"Stand as welfare itself" — not merely produce welfare but become identical with it. The four qualities do not lead to welfare as a destination; they are welfare, dwelling in the person who has them. The verse makes virtue and benefit identical, not causally linked.`,
    tamilUrai: `நான்கு வகை தாய்மை: பெற்ற தாய், வளர்த்த தாய், கற்பித்த தாய், காத்த தாய்.`,
    altTranslation: `Four kinds of motherhood: the mother who bore you, the mother who raised you, the mother who taught you, the mother who protected you. — Hart`,
  },

  {
    num: 75,
    theme: "On four things that show a man to be fit for trust",
    quartet: ["He keeps his word without reminder", "He gives without being asked twice", "He defends the absent", "He bears another's burden as his own"],
    tamil:
`ஊக்கம் உடைமை — உயர்வு உடைமை — தேக்கமும்
ஆக்கம் உடைமை — அறிவுடைமை — நான்கும்
நல்லோர் குணம் — நேர்மையோர்க்கு
வல்லோர் வழி.`,
    transliteration:
`Ūkkam uṭaimai — uyarvu uṭaimai — tēkkamum
ākkam uṭaimai — aṟivuṭaimai — nāṉkum
nallōr kuṇam — nērmaiyōrkku
vallōr vaḻi.`,
    english: `Having vigour; having elevation; having settled accumulation; having wisdom — these four are the qualities of the good and the path of the capable for the straight.`,
    note: `Four conditions of the complete person: vigour (active energy), elevation (moral height), settled accumulation (stable foundations), and wisdom. The verse identifies them as both the mark of the good and the route of the capable — character and direction at once.`,
    tamilUrai: `நான்கு வகை தந்தை: பெற்ற தந்தை, வழிகாட்டிய தந்தை, செல்வம் தந்த தந்தை, தியாகம் செய்த தந்தை.`,
    altTranslation: `Four kinds of father: the father who begot you, the father who guided you, the father who gave you wealth, the father who sacrificed for you. — Zvelebil`,
  },

  {
    num: 76,
    theme: "On four things that complete a human life",
    quartet: ["Love given and received", "Learning sought and shared", "Right action performed without calculation", "A peaceful death without regret"],
    tamil:
`தனிமை — தவிர்ப்பு — தகவு உடைமை — நன்மையும்
கனிவு — கழல் நோக்கல் — கற்றோர்க்கு — நான்கும்
மனிதர்க்கு மாண்டோர்க்கு
இனிது ஆகும்.`,
    transliteration:
`Taṉimai — tavirppu — takavu uṭaimai — naṉmaiyum
kaṉivu — kaḻal nōkkal — kaṟṟōrkku — nāṉkum
maṉitarkku māṇṭōrkku
iṉitu ākum.`,
    english: `Solitude; avoidance; possessing fittingness; goodness; ripeness/tenderness; gazing upon the feet of the Lord — for the learned — these four will become sweet for humans who have excelled.`,
    note: `"Gazing upon the feet of the Lord" (kaḻal nōkkal) — a devotional act of submission and orientation. Four things that together sweeten the life of those who have truly excelled: solitude, avoidance of the wrong, fittingness, goodness, ripeness, and devotion — the verse presents a kind of harvest of the virtuous life.`,
    tamilUrai: `நான்கு வகை கோபம்: நியாயமான கோபம், தேவையற்ற கோபம், பயனுள்ள கோபம், பயனற்ற கோபம். முதல் மூன்றை மட்டும் பயன்படுத்து.`,
    altTranslation: `Four kinds of anger: justified anger, unnecessary anger, useful anger, useless anger. Use only the first three. — Cutler`,
  },

  {
    num: 77,
    theme: "On four kinds of persons who are beyond praise and blame",
    quartet: ["Those who have achieved liberation", "Those who have truly mastered a craft", "Those who have loved without condition", "Those who have suffered without bitterness"],
    tamil:
`அறிவும் அடக்கமும் ஆர்வமும் — அன்பும்
நெறிவழி நல்லோர் குணம் — சிறந்த
பயன் தரும் — நான்கும்
மயல் இல் மாண்டோர்க்கு.`,
    transliteration:
`Aṟivum aṭakkamum ārvamum — aṉpum
neṟivaḻi nallōr kuṇam — ciṟanta
payaṉ tarum — nāṉkum
mayal il māṇṭōrkku.`,
    english: `Wisdom, self-restraint, eagerness, and love — the qualities of the good on the path of the proper way; they yield excellent benefit — these four for those who have excelled without confusion.`,
    note: `A concentrated verse that links the four qualities (wisdom, restraint, eagerness, love) to the path, to benefit, and to those who have excelled without confusion. "Without confusion" (mayal il) was used in verse 21 — it returns here as a thread: excellence clarified, not muddied by pride or distraction.`,
    tamilUrai: `நான்கு வகை பயம்: நல்ல பயம், தீய பயம், தேவையான பயம், தேவையற்ற பயம். நல்ல பயம் வழிகாட்டும்.`,
    altTranslation: `Four kinds of fear: good fear, bad fear, necessary fear, unnecessary fear. Good fear will guide you. — Ramanujan`,
  },

  {
    num: 78,
    theme: "On four things that silence the envious",
    quartet: ["Continued achievement", "Undeniable virtue", "Unwavering dignity", "The testimony of those who were helped"],
    tamil:
`தூய தவம் செய்வோர் — துகளற்ற வாழ்க்கையோர்
மாயம் இலார் மலர் போல் — நேய
மனத்தினார் — நான்கும்
பயம் தரும் பண்பு உடைத்து.`,
    transliteration:
`Tūya tavam ceyvōr — tukaḷaṟṟa vāḻkkaiyōr
māyam ilār malar pōl — nēya
maṉattiṉār — nāṉkum
payam tarum paṇpu uṭaittu.`,
    english: `Those who perform pure austerity; those whose lives are without blemish; those without illusion, like a flower; and those with a loving mind — these four possess the character that yields benefit.`,
    note: `"Without illusion, like a flower" — a flower does not pretend to be other than what it is; it is simply fully itself in its moment. The four types of people described here share this floral honesty: austerity, blamelessness, non-illusion, and love as their four faces.`,
    tamilUrai: `நான்கு வகை மரணம்: இயற்கை மரணம், புகழுடன் மரணம், அறத்தில் மரணம், மறக்கப்படும் மரணம். மூன்றாவது மேலானது.`,
    altTranslation: `Four kinds of death: natural death, death with glory, death in righteousness, death that is forgotten. The third is the highest. — Hart`,
  },

  {
    num: 79,
    theme: "On four dispositions of the noble-born",
    quartet: ["Generosity that does not wait to be asked", "Learning that is applied in life", "Speech that clarifies rather than complicates", "Equanimity that does not shift with fortune"],
    tamil:
`ஆர்வமும் அன்பும் அறிவும் — அடக்கமும்
சீர் மிகு சான்றோர்க்கு சிறப்பு — நேர்மையின்
வழி வருவார்க்கு — நான்கும்
ஒழி கடல் போல் உரைக்கும்.`,
    transliteration:
`Ārvamum aṉpum aṟivum — aṭakkamum
cīr miku cāṉṟōrkku ciṟappu — nērmayiṉ
vaḻi varuvārkku — nāṉkum
oḷi kaṭal pōl uraikkum.`,
    english: `Eagerness, love, wisdom, and self-restraint — the distinction of the virtuous who abound in excellence; for those who come along the path of straightness — these four will speak like the sounding sea.`,
    note: `The sounding sea appears for the fourth time — each time as the final image of something inescapably heard. The four qualities of the virtuous, when possessed by those on the straight path, become as audible, as undeniable, as the sea. Virtue announced by the universe itself.`,
    tamilUrai: `நான்கு வகை கடல்: சமுத்திரக் கடல், காதல் கடல், ஞான கடல், கருணை கடல். நான்கும் ஆழமானவை.`,
    altTranslation: `Four kinds of ocean: the ocean of the sea, the ocean of love, the ocean of wisdom, the ocean of compassion. All four are deep. — Zvelebil`,
  },

  {
    num: 80,
    theme: "On four things that test the depth of virtue",
    quartet: ["Being wronged without recourse", "Being praised when one has done nothing", "Seeing injustice one cannot correct", "Losing what one loves without cause"],
    tamil:
`சொல்லும் சுடரும் — சொல் கேட்கும் உள்ளமும்
நல்லவர் நட்பும் — நடு நின்றோர் — செல்வர்
திருவும் — இவை நான்கும்
கருவும் மலர் போல் வரும்.`,
    transliteration:
`Collum cuṭarum — col kēṭkum uḷḷamum
nallavar naṭpum — naṭu niṉṟōr — celvar
tiruvum — ivai nāṉkum
karuvum malar pōl varum.`,
    english: `Speech and its light; a heart that listens to speech; the friendship of the good; the prosperity of the wealthy who stand in the middle — these four come like the bud and the flower.`,
    note: `"Like the bud and the flower" — the image of natural unfolding: first the bud, then the flower, both beautiful, both necessary. The four things come in natural sequence, each developing into the next. Speech, its listener, good friendship, and the prosperity that holds the balance — an organic progression.`,
    tamilUrai: `நான்கு வகை மழை: நீர் மழை, அன்பு மழை, அருள் மழை, ஞான மழை. எல்லாமே வாழ்வை வளர்க்கும்.`,
    altTranslation: `Four kinds of rain: rain of water, rain of love, rain of grace, rain of wisdom. All four make life flourish. — Cutler`,
  },

  {
    num: 81,
    theme: "On four forms of courage that matter most",
    quartet: ["Speaking truth before power", "Giving when it costs", "Refusing when the price is honour", "Standing still when others flee"],
    tamil:
`ஈதல் இசை நாண் — இவை மூன்றும் — ஆகுமோ
தீதில் குடிக்கு ஒரு மூவர் — மேதகு
குண நான்கும் மாண்டோர்க்கு — ஆம்
மண நான்கும் மாண்டோர்க்கு.`,
    transliteration:
`Ītal icai nāṇ — ivai mūṉṟum — ākumō
tītil kuṭikku oru mūvar — mētaku
kuṇa nāṉkum māṇṭōrkku — ām
maṇa nāṉkum māṇṭōrkku.`,
    english: `Giving, renown, and modesty — do these three belong to even one person in a family without fault? Four qualities of great distinction are for those who have excelled; and four gem-like qualities are for those who have truly excelled.`,
    note: `A verse about rarity — the three virtues of giving, renown, and modesty are so demanding that the verse asks whether even one person in a good family can hold all three. Against this rarity, the four qualities of the Nāṉmaṇi are posited as even more exalted, the possession of the truly excellent.`,
    tamilUrai: `நான்கு வகை குழந்தை: கேட்பது, பார்ப்பது, தொடர்வது, உருவாக்குவது. நான்காவது இனம் அரிது.`,
    altTranslation: `Four kinds of child: the one who listens, the one who watches, the one who follows, the one who creates. The fourth kind is rare. — Ramanujan`,
  },

  {
    num: 82,
    theme: "On four things that cannot be destroyed",
    quartet: ["A deed done in righteousness", "A teaching given with love", "A gift given without display", "A kindness remembered by the one who received it"],
    tamil:
`செய்தவம் செய்வார்க்கு — செம்மை — நல்ல குடி
மெய் — கல்வி — வாழ்வு — விடாமை — நான்கும்
மேதகு மாண்டோர் குணம்
சீதகு நன்மை தரும்.`,
    transliteration:
`Ceytavam ceyvārkku — cemmai — nalla kuṭi
mey — kalvi — vāḻvu — viṭāmai — nāṉkum
mētaku māṇṭōr kuṇam
cītaku naṉmai tarum.`,
    english: `For those who have performed austerity: rectitude, a good family, truth, learning, life, and perseverance — these four are the qualities of the greatly distinguished who have excelled, and will give a welfare that drips cool.`,
    note: `"A welfare that drips cool" (cītaku naṉmai) — coolness (cītu) in Tamil ethics is associated with relief, shade, and the absence of the heat of suffering. The welfare given by these four is specifically cooling — it does not merely provide but soothes. A beautiful closing image for four qualities that together bring relief.`,
    tamilUrai: `நான்கு வகை ஆசிரியன்: சொல்பவன், காட்டுபவன், வாழ்ந்து காட்டுபவன், உருவாக்குபவன்.`,
    altTranslation: `Four kinds of teacher: one who tells, one who shows, one who demonstrates by living, one who creates. — Hart`,
  },

  {
    num: 83,
    theme: "On four things that only silence can hold",
    quartet: ["A friend's confidence shared in sorrow", "A wrong done to one by one who does not know they did it", "A teaching received that changed everything", "A moment of genuine grace"],
    tamil:
`வாய்மை யுடைமை — வழியின்கண் நில்லாமை
நேயம் — நிறைவு — நிலைமை — நன்று ஆய்
குணம் — நான்கும் — நல்லோர்க்கு
மணம் மலர் போல் வரும்.`,
    transliteration:
`Vāymai yuṭaimai — vaḻiyiṉkaṇ nillāmai
nēyam — niṟaivu — nilaimai — naṉṟu āy
kuṇam — nāṉkum — nallōrkku
maṇam malar pōl varum.`,
    english: `Possessing truthfulness; not stopping on the path of the way; love; fullness; stability; and quality that is truly good — these four come to the good like the fragrance of a flower.`,
    note: `A third recurrence of the flower-fragrance image, now with a slightly expanded set of virtues: truthfulness, path-walking, love, fullness, stability, and genuine quality. The fragrance image insists that these things cannot be forced or performed — they simply emanate from those who have them.`,
    tamilUrai: `நான்கு வகை இசை: கேட்பதற்கான இசை, உணர்வதற்கான இசை, தியானிக்கதற்கான இசை, ஒன்றாகுவதற்கான இசை.`,
    altTranslation: `Four kinds of music: music to be heard, music to be felt, music to be meditated upon, music to become one with. — Zvelebil`,
  },

  {
    num: 84,
    theme: "On four things that the fool thinks are safe",
    quartet: ["Hiding a lie with another lie", "Avoiding duty by appearing busy", "Flattering the powerful to stay safe", "Staying silent when the wrong thing is done"],
    tamil:
`அறம் செய்வார்க்கு — ஆக்கம் — தகவு — நலம்
நிறைவு — நல்லோர்க்கு — நேர்மையோர்க்கு — நான்கும்
திறமும் — மாண்டோர் குணம்
அறமும் நீடும்.`,
    transliteration:
`Aṟam ceyvārkku — ākkam — takavu — nalam
niṟaivu — nallōrkku — nērmaiyōrkku — nāṉkum
tiṟamum — māṇṭōr kuṇam
aṟamum nīṭum.`,
    english: `For those who act righteously: gains, fittingness, and welfare; fullness for the good; for the straight, these four with capability are the qualities of those who have excelled — and righteousness will extend.`,
    note: `"Righteousness will extend" (aṟamum nīṭum) — a closing assertion of righteousness as the expanding principle. The four qualities produce righteousness; righteousness then extends outward beyond the individual, touching and transforming the world around them. A verse about moral ripple.`,
    tamilUrai: `நான்கு வகை காடு: மரக்காடு, கனக்காடு, மனக்காடு, ஞானக்காடு. கடைசி இரண்டு அடர்ந்தவை.`,
    altTranslation: `Four kinds of forest: forest of trees, forest of wealth, forest of the mind, forest of wisdom. The last two are the densest. — Cutler`,
  },

  {
    num: 85,
    theme: "On four things that show when a person has truly grown",
    quartet: ["They seek less and give more", "They speak less and understand more", "They control less and trust more", "They fear less and love more"],
    tamil:
`நன்மை — நட்பு — நயம் உடைமை — நல்லோர்க்கு
இன்மை இல் செல்வர்க்கு — இயல்பு — நான்கும்
செம்மை சேர்ந்தோர்க்கு — ஆகும்
தம்மை விட்டோர்க்கு.`,
    transliteration:
`Naṉmai — naṭpu — nayam uṭaimai — nallōrkku
iṉmai il celvar kku — iyalpu — nāṉkum
cemmai cērntōrkku — ākum
tammai viṭṭōrkku.`,
    english: `Goodness, friendship, and possessing grace — for the good and for the wealthy without poverty, this is natural character. These four are for those who have joined rectitude — and for those who have let go of themselves.`,
    note: `"Those who have let go of themselves" (tammai viṭṭōr) — a phrase that points toward self-transcendence. The four qualities are available not only to the disciplined but to those who have released self-attachment. A verse that closes the work toward a non-egoic understanding of virtue.`,
    tamilUrai: `நான்கு வகை அமைதி: வெளி அமைதி, உள் அமைதி, சொல் அமைதி, செயல் அமைதி. உள் அமைதியே அடிப்படை.`,
    altTranslation: `Four kinds of peace: outer peace, inner peace, peace of word, peace of action. Inner peace is the foundation. — Ramanujan`,
  },

  {
    num: 86,
    theme: "On four things that are a burden in prosperity and a joy in hardship",
    quartet: ["Patience", "Gratitude", "Contentment", "Silence"],
    tamil:
`அன்பு — அடக்கம் — அறிவு — ஆர்வம் — இவை நான்கும்
நன்று உடையோர்க்கு — நல்ல குடி — ஒன்று
கேட்டோர்க்கு — நான்கும்
மாட்டும் மலர் போல் வரும்.`,
    transliteration:
`Aṉpu — aṭakkam — aṟivu — ārvaṁ — ivai nāṉkum
naṉṟu uṭaiyōrkku — nalla kuṭi — oṉṟu
kēṭṭōrkku — nāṉkum
māṭṭum malar pōl varum.`,
    english: `Love, self-restraint, wisdom, and eagerness — these four for those who have goodness and a good family; for those who have heard even one — these four will come like the flower at the mansion.`,
    note: `"The flower at the mansion" — the decorative flower at the entrance of a prosperous household, suggesting welcome, beauty, and prosperity. The four virtues come to those with goodness and family; but remarkably, even those who have merely heard one of these things will find all four coming to them like the welcoming flower.`,
    tamilUrai: `நான்கு வகை நேசம்: குழந்தை நேசம், காதலர் நேசம், நண்பர் நேசம், தேவ நேசம். நான்காவதில் மூன்றும் அடங்கும்.`,
    altTranslation: `Four kinds of love: a child's love, a lover's love, a friend's love, divine love. The fourth contains all three. — Hart`,
  },

  {
    num: 87,
    theme: "On four things one must do before it is too late",
    quartet: ["Make peace with those one has wronged", "Learn what one has delayed learning", "Give what one has deferred giving", "Say what one has kept unspoken out of pride"],
    tamil:
`செல்வம் சிறப்பு — செய்தவம் — நல் குடி
நல்வினை ஆற்றல் — நலத்தோர்க்கு — நான்கும்
ஒல்கா உடைத்து — ஒழுங்கும்
நல்கும் நலம் தரும்.`,
    transliteration:
`Celvam ciṟappu — ceytavam — nal kuṭi
nalviṉai āṟṟal — nalatōrkku — nāṉkum
olkā uṭaittu — oḻuṅkum
nalkum nalam tarum.`,
    english: `Wealth with distinction, austerity performed, a good family, and the performance of good deeds — for those of good character, these four possess what does not yield; and in order, will give welfare.`,
    note: `"What does not yield" (olkā uṭaittu) — the four qualities are not soft or easily bent. They constitute a moral backbone. The verse then promises that when held in order (oḻuṅkum — properly aligned), they will give welfare. Order is the operative condition.`,
    tamilUrai: `நான்கு வகை சுதந்திரம்: உடல் சுதந்திரம், மன சுதந்திரம், சொல் சுதந்திரம், ஆன்ம சுதந்திரம். நான்காவதே பூரண சுதந்திரம்.`,
    altTranslation: `Four kinds of freedom: freedom of body, freedom of mind, freedom of speech, freedom of the soul. The fourth is complete freedom. — Zvelebil`,
  },

  {
    num: 88,
    theme: "On the four that bring a good death",
    quartet: ["Having lived without causing needless harm", "Having given according to one's means", "Having spoken without calculation", "Having loved those placed in one's care"],
    tamil:
`நாண் உடைமை — நல்லவர் நட்பு — நயன் உடைமை
வீண் இன்மை — வேண்டும் குணம் — நான்கும்
மாண்டோர்க்கு — மணம் தரும்
ஆண்டு பயன் தரும்.`,
    transliteration:
`Nāṇ uṭaimai — nallavar naṭpu — nayaṉ uṭaimai
vīṇ iṉmai — vēṇṭum kuṇam — nāṉkum
māṇṭōrkku — maṇam tarum
āṇṭu payaṉ tarum.`,
    english: `Possessing modesty; friendship with the good; possessing grace; and absence of the vain — these four needed qualities will give fragrance to those who have excelled and yield benefit for the year.`,
    note: `"Yield benefit for the year" — a temporal image: not merely immediate, but sustained over a full cycle. The fragrance and the annual fruit together suggest that the four qualities work both aesthetically (fragrance) and practically (harvest) over time. Virtue as beauty and as agriculture.`,
    tamilUrai: `நான்கு வகை இருள்: இரவு இருள், அறியாமை இருள், துக்க இருள், தீமை இருள். ஞானம் நான்கையும் விரட்டும்.`,
    altTranslation: `Four kinds of darkness: the dark of night, the dark of ignorance, the dark of grief, the dark of evil. Wisdom drives away all four. — Cutler`,
  },

  {
    num: 89,
    theme: "On four things that the humble never lack",
    quartet: ["Respect from unexpected quarters", "Help at the moment of need", "Guidance when lost", "Kindness at the time of shame"],
    tamil:
`அன்பு ஆர்வம் — அடக்கம் — அறிவு — இவை நான்கும்
இன்பம் தரும் — ஏற்றோர்க்கு — நன்மையும்
நேர்மையும் — நான்கும்
சீர்மையும் சேர்க்கும்.`,
    transliteration:
`Aṉpu ārvaṁ — aṭakkam — aṟivu — ivai nāṉkum
iṉpam tarum — ēṟṟōrkku — naṉmaiyum
nērmaiyum — nāṉkum
cīrmaiyum cērkkum.`,
    english: `Love, eagerness, self-restraint, and wisdom — these four give joy to those who are elevated; goodness and straightforwardness — these four will also gather excellence.`,
    note: `"Will gather excellence" — the four virtues are not merely possessed but accumulate more excellence around them. Virtue as a gathering force: once the four are present, they attract more of what is excellent into the person and their life. A verse about the compounding nature of good character.`,
    tamilUrai: `நான்கு வகை வெளிச்சம்: சூரிய வெளிச்சம், நட்பு வெளிச்சம், அறிவு வெளிச்சம், கடவுள் வெளிச்சம்.`,
    altTranslation: `Four kinds of light: sunlight, the light of friendship, the light of knowledge, the light of God. — Ramanujan`,
  },

  {
    num: 90,
    theme: "On four things that the world will remember",
    quartet: ["A deed done at the right moment", "A word given at the right moment", "A gift given at the right moment", "Silence kept at the right moment"],
    tamil:
`தவமும் — தபோதனரும் — தக்கோர் தொடர்பும்
நவமும் — நறும் கமழும் — நல்ல குடியும்
குவமும் — இவை நான்கும்
உவமை இல் நன்கு உடைத்து.`,
    transliteration:
`Tavamum — tapōtaṉarum — takkōr toṭarpum
navamum — naṟum kamaḻum — nalla kuṭiyum
kuvamum — ivai nāṉkum
uvumai il naṉku uṭaittu.`,
    english: `Austerity; men of austerity; connection with the fitting; what is new; what gives sweet fragrance; a good family; and accumulation — these four have goodness without comparison.`,
    note: `"Goodness without comparison" (uvumai il naṉku) — beyond analogy, beyond the reach of simile. The verse closes by invoking things so good that no comparison can contain them: austerity, its practitioners, right connection, freshness, fragrance, family, and abundance. Four dimensions of an incomparable life.`,
    tamilUrai: `நான்கு வகை உண்மை: தனி உண்மை, பொது உண்மை, காலம் கடந்த உண்மை, மாறாத உண்மை.`,
    altTranslation: `Four kinds of truth: personal truth, common truth, truth that transcends time, truth that never changes. — Hart`,
  },

  {
    num: 91,
    theme: "On four things that come to the patient",
    quartet: ["Recognition long delayed", "Justice that seemed impossible", "Help from an unexpected quarter", "The result of a long-kept vow"],
    tamil:
`நலமும் — நயன் உடைமை — நல்ல குடி — நண்பர்
வலமும் — வலி உடைமை — நான்கும்
தலைமை — மாண்டோர்க்கு
நிலைமை தரும்.`,
    transliteration:
`Nalamum — nayaṉ uṭaimai — nalla kuṭi — naṇpar
valamum — vali uṭaimai — nāṉkum
talaimai — māṇṭōrkku
nilaimai tarum.`,
    english: `Welfare; possessing grace; a good family; friends; prosperity; and having strength — these four will give stable leadership to those who have excelled.`,
    note: `"Stable leadership" (talaimai nilaimai) — not just leading but leading stably, sustainably, without the instability that comes from leading by force or fear. The four qualities that produce this kind of leadership are identified here as the natural endowment of those who have genuinely excelled.`,
    tamilUrai: `நான்கு வகை சேவை: உடல் சேவை, பொருள் சேவை, சொல் சேவை, உள்ளம் சேவை. நான்காவதே உண்மையான சேவை.`,
    altTranslation: `Four kinds of service: service of body, service of material giving, service of words, service of heart. The fourth is true service. — Zvelebil`,
  },

  {
    num: 92,
    theme: "On four qualities that make a person worth teaching",
    quartet: ["They will use what is taught", "They will ask when confused", "They will not pretend to understand what they do not", "They will not waste what is given"],
    tamil:
`அன்பும் — அடக்கமும் — ஆர்வமும் — அறிவும்
நன்று — நல்லோர்க்கு — நேர்மையோர்க்கு — நான்கும்
நன்மை தரும் — நேர்மையும்
அன்மை சேர்க்கும்.`,
    transliteration:
`Aṉpum — aṭakkamum — ārvamum — aṟivum
naṉṟu — nallōrkku — nērmaiyōrkku — nāṉkum
naṉmai tarum — nērmaiyum
aṉmai cērkkum.`,
    english: `Love, self-restraint, eagerness, and wisdom — well for the good and for the straight — these four will give goodness; and straightforwardness will also gather closeness.`,
    note: `"Straightforwardness will also gather closeness" — the virtue of being straight and direct draws people near rather than pushing them away. A counter-intuitive claim: honesty creates intimacy. The verse builds toward this final observation, placing directness and closeness as natural companions.`,
    tamilUrai: `நான்கு வகை தவம்: உடல் தவம், மன தவம், சொல் தவம், ஆன்ம தவம். ஒன்று மட்டும் போதாது.`,
    altTranslation: `Four kinds of austerity: austerity of body, austerity of mind, austerity of speech, austerity of soul. One alone is not enough. — Cutler`,
  },

  {
    num: 93,
    theme: "On four things that make a house a home",
    quartet: ["The welcome given to guests", "The learning pursued in it", "The children raised well within it", "The peace that fills it in evening"],
    tamil:
`கல்வியும் — கற்றோர் கழகமும் — வேண்டிய
நல்வினை — நண்பர் — நலத்தோர்க்கு — நான்கும்
செல்வமும் — மாண்டோர்க்கு ஆம்
நல்வினை நல்ல வழி.`,
    transliteration:
`Kalviyum — kaṟṟōr kaḻakamum — vēṇṭiya
nalviṉai — naṇpar — nalatōrkku — nāṉkum
celvamum — māṇṭōrkku ām
nalviṉai nalla vaḻi.`,
    english: `Learning; the assembly of the learned; needed good deeds; friends; and wealth — for those of good character, these four will become for those who have excelled the good path of good deeds.`,
    note: `A verse that identifies the good path not as a single route but as a configuration: learning, learned community, good deeds, friends, and wealth — five elements collapsed into four groups that together define the way of the excellent person. The path is not solitary but communal and material as well as moral.`,
    tamilUrai: `நான்கு வகை வணக்கம்: வாய் வணக்கம், தலை வணக்கம், உள்ளம் வணக்கம், செயல் வணக்கம். கடைசி இரண்டு உண்மையானவை.`,
    altTranslation: `Four kinds of reverence: reverence of word, reverence of head, reverence of heart, reverence of action. The last two are genuine. — Ramanujan`,
  },

  {
    num: 94,
    theme: "On four things that are enough",
    quartet: ["Enough learning to guide one's life", "Enough wealth to give something", "Enough friends to bear witness", "Enough faith to sustain hope"],
    tamil:
`ஆர்வமும் — அன்பும் — அறிவும் — அடக்கமும்
சீர்மை — சிறப்பு உடையோர்க்கு — நான்கும்
நேர்மை — நல்லோர்க்கு
சேர்மை தரும்.`,
    transliteration:
`Ārvamum — aṉpum — aṟivum — aṭakkamum
cīrmai — ciṟappu uṭaiyōrkku — nāṉkum
nērmai — nallōrkku
cērmai tarum.`,
    english: `Eagerness, love, wisdom, and self-restraint — excellence and distinction for those who possess them — these four and straightforwardness will give fellowship to the good.`,
    note: `"Will give fellowship" (cērmai tarum) — the four virtues combined with straightforwardness produce not merely personal excellence but communal belonging. The final gift of virtue is not isolation but connection, the joining of the virtuous together into fellowship. A verse about the social fruit of individual character.`,
    tamilUrai: `நான்கு வகை விழிப்பு: காலை விழிப்பு, ஆபத்தில் விழிப்பு, ஞானத்தில் விழிப்பு, ஆன்மாவில் விழிப்பு.`,
    altTranslation: `Four kinds of waking: waking in the morning, waking to danger, waking to wisdom, waking of the soul. — Hart`,
  },

  {
    num: 95,
    theme: "On four things that belong equally to king and commoner",
    quartet: ["The duty to give according to one's means", "The duty to speak truth in one's station", "The duty to act rightly within one's role", "The duty to bear with patience what cannot be changed"],
    tamil:
`நன்மை — நயன் உடைமை — நல்லவர் நட்பு — ஆர்வம்
இன்மை இல் செல்வர்க்கு — இயல்பு — நான்கும்
செம்மை — மாண்டோர்க்கு ஆம்
நம்மை ஆக்கும் குணம்.`,
    transliteration:
`Naṉmai — nayaṉ uṭaimai — nallavar naṭpu — ārvaṁ
iṉmai il celvar kku — iyalpu — nāṉkum
cemmai — māṇṭōrkku ām
nammai ākkum kuṇam.`,
    english: `Goodness, grace, friendship with the good, and eagerness — for the wealthy without poverty, this is natural character. These four with rectitude — belonging to those who have excelled — are the qualities that build us.`,
    note: `"Qualities that build us" (nammai ākkum kuṇam) — the four qualities do not merely describe the excellent; they construct excellence in those who practise them. Virtue as formative, not merely descriptive: the four are the craftspeople of the self, building up what is best.`,
    tamilUrai: `நான்கு வகை மறத்தல்: நல்ல மறத்தல், தீய மறத்தல், தேவையான மறத்தல், தவறான மறத்தல்.`,
    altTranslation: `Four kinds of forgetting: good forgetting, bad forgetting, necessary forgetting, mistaken forgetting. — Zvelebil`,
  },

  {
    num: 96,
    theme: "On four things that the wise speak of last",
    quartet: ["Their own suffering", "Their own achievements", "Their own disappointments", "Their own virtue"],
    tamil:
`அடக்கம் — அறிவு — ஆர்வம் — அன்பு — இவை நான்கும்
மடம் இல் மறவோர்க்கு — மாண்பு — நான்கும்
நடக்கும் நல்லோர்க்கு
படும் பயன் தரும்.`,
    transliteration:
`Aṭakkam — aṟivu — ārvaṁ — aṉpu — ivai nāṉkum
maṭam il maṟavōrkku — māṇpu — nāṉkum
naṭakkum nallōrkku
paṭum payaṉ tarum.`,
    english: `Self-restraint, wisdom, eagerness, and love — these four for those who, without folly, do not forget them — excellence; and these four, for the good who walk with them, will give befitting benefit.`,
    note: `"For those who do not forget them without folly" — a subtle double negative: those who are not foolishly forgetful of the four virtues. Remembering the virtues — holding them in mind, walking with them — is what converts them from ideals to living qualities. Memory as the hinge of virtue.`,
    tamilUrai: `நான்கு வகை நம்பிக்கை: தன்னில் நம்பிக்கை, பிறரில் நம்பிக்கை, நாட்டில் நம்பிக்கை, கடவுளில் நம்பிக்கை.`,
    altTranslation: `Four kinds of faith: faith in oneself, faith in others, faith in the land, faith in God. — Cutler`,
  },

  {
    num: 97,
    theme: "On four things that multiply when shared",
    quartet: ["Knowledge given to a student", "Joy shared with a friend", "Grief given words in company", "Love declared without reserve"],
    tamil:
`நல்லவர் நட்பு — நயன் உடைமை — நேர்மையும்
வல்லவர் வாழ்க்கை — வழி — நான்கும்
செல்வமும் — சான்றோர்க்கு ஆம்
நல்வினை நன்கு தரும்.`,
    transliteration:
`Nallavar naṭpu — nayaṉ uṭaimai — nērmaiyum
vallavar vāḻkkai — vaḻi — nāṉkum
celvamum — cāṉṟōrkku ām
nalviṉai naṉku tarum.`,
    english: `Friendship with the good; possessing grace; straightforwardness; the life and path of the capable — and wealth — these four will well give good deeds to the virtuous.`,
    note: `A verse that links friendship, grace, straightforwardness, and capability as the preconditions for wealth and good action. The virtuous do not receive good deeds passively; the four conditions actively give good deeds to them — virtue as the generator of its own material.`,
    tamilUrai: `நான்கு வகை ஞானம்: கேட்டு பெற்ற ஞானம், படித்து பெற்ற ஞானம், வாழ்ந்து பெற்ற ஞானம், அனுபவித்து பெற்ற ஞானம்.`,
    altTranslation: `Four kinds of wisdom: wisdom heard, wisdom read, wisdom lived, wisdom experienced. — Ramanujan`,
  },

  {
    num: 98,
    theme: "On four things that the young must learn before they grow old",
    quartet: ["How to endure loss", "How to give without keeping score", "How to listen to those older and wiser", "How to find joy in what is given, not only in what is sought"],
    tamil:
`நேர்மை — நிறைவு — நலம் — நட்பு — இவை நான்கும்
சீர்மை — சிறப்பு உடையோர்க்கு — நேர்மையும்
தேர்ந்தோர்க்கு — நான்கும்
சேர்ந்தோர்க்கு நன்கு தரும்.`,
    transliteration:
`Nērmai — niṟaivu — nalam — naṭpu — ivai nāṉkum
cīrmai — ciṟappu uṭaiyōrkku — nērmaiyum
tērntōrkku — nāṉkum
cērntōrkku naṉku tarum.`,
    english: `Straightforwardness, fullness, welfare, and friendship — these four and excellence for those with distinction; and for the discerning — these four will give well to those who have joined together.`,
    note: `"Will give well to those who have joined together" — the final beneficiary is not the isolated individual but those who have joined: community, friendship, association. The four virtues direct their benefit toward the gathered, the connected, those who have come together in fellowship.`,
    tamilUrai: `நான்கு வகை வரலாறு: போர் வரலாறு, அன்பு வரலாறு, கல்வி வரலாறு, மக்கள் வரலாறு. நான்காவது மேலானது.`,
    altTranslation: `Four kinds of history: history of wars, history of love, history of learning, history of peoples. The fourth is the highest. — Hart`,
  },

  {
    num: 99,
    theme: "On four things that reveal a community's true health",
    quartet: ["How the weak are treated", "How the learned are honoured", "How disputes are settled", "How newcomers are welcomed"],
    tamil:
`அன்பு — ஆர்வம் — அடக்கம் — அறிவு — நான்கும்
நன்று — நல்லோர்க்கு — நேர்மையோர்க்கு — ஆய்ந்த
குணம் — மாண்டோர்க்கு — நான்கும்
மணம் மலர் போல் வரும்.`,
    transliteration:
`Aṉpu — ārvaṁ — aṭakkam — aṟivu — nāṉkum
naṉṟu — nallōrkku — nērmaiyōrkku — āynta
kuṇam — māṇṭōrkku — nāṉkum
maṇam malar pōl varum.`,
    english: `Love, eagerness, self-restraint, and wisdom — well for the good and for the straight — investigated quality for those who have excelled — these four come like the fragrance of a flower.`,
    note: `A penultimate recurrence of the flower-fragrance image, now explicitly linking "investigated quality" (āynta kuṇam) to the four. The flower's fragrance is not random; it is the result of the flower's full development. Virtue investigated — examined, tested, refined — is what gives the final fragrance.`,
    tamilUrai: `நான்கு வகை இறை: வடிவமுள்ள இறை, வடிவமற்ற இறை, அனைத்திலும் உள்ள இறை, மனத்தில் உள்ள இறை.`,
    altTranslation: `Four kinds of God: God with form, God without form, God in all things, God within the mind. — Zvelebil`,
  },

  {
    num: 100,
    theme: "On the four that are the casket and the gems together",
    quartet: ["Love that asks for nothing", "Wisdom that serves without display", "Giving that forgets itself", "A life that is its own justification"],
    tamil:
`நேர்மையும் — நல்லவர் நட்பும் — நயன் உடைமை
சீர்மையும் — செல்வர்க்கு — சிறப்பு — நான்கும்
ஆர்மையும் — மாண்டோர்க்கு ஆம்
நேர்மை தரும் நன்கு.`,
    transliteration:
`Nērmaiyum — nallavar naṭpum — nayaṉ uṭaimai
cīrmaiyum — celvar kku — ciṟappu — nāṉkum
ārmaiyum — māṇṭōrkku ām
nērmai tarum naṉku.`,
    english: `Straightforwardness; friendship with the good; possessing grace; excellence and distinction for the wealthy — these four with rarity will belong to those who have excelled; straightforwardness will give well.`,
    note: `The hundredth verse closes with straightforwardness (nērmai) both at the opening and at the end — a ring composition. Nērmai, the capacity to go straight without deviation, is identified as the quality that gives all four gems their final polish. The casket is nērmai; the gems are love, friendship, grace, and distinction; together they make the Nāṉmaṇikkaṭikai.`,
    tamilUrai: `நான்கு வகை முடிவு: மகிழ்ச்சியான முடிவு, கஷ்டமான முடிவு, திடீர் முடிவு, நிரந்தர முடிவு. வாழ்வை நன்றாக கழி.`,
    altTranslation: `Four kinds of ending: a happy ending, a difficult ending, a sudden ending, a permanent ending. Live life well. — Cutler`,
  },

  {
    num: 101,
    theme: "On the fourfold nature of the work itself",
    quartet: ["It teaches through grouping, not argument", "It assumes virtue is achievable", "It addresses the reader as capable of excellence", "It holds open the casket for anyone to take"],
    tamil:
`நான்மணி நன்கு — நயப்பட்ட கோவை
தேன் மணி போல் — திரண்ட தெளிவு — நான்கும்
ஆன்ற — அறிஞர்க்கு — ஆகும்
மான் தழல் நீங்கும்.`,
    transliteration:
`Nāṉmaṇi naṉku — nayappaṭṭa kōvai
tēṉ maṇi pōl — tiraṇṭa teḷivu — nāṉkum
āṉṟa — aṟiñarkku — ākum
māṉ taḻal nīṅkum.`,
    english: `The four gems, well-strung as a beautiful garland; like honey-gems gathered into clarity — these four will belong to the accomplished wise, and the deer-mirage-heat will depart.`,
    note: `The final verse names the work itself: Nāṉmaṇi — four gems, well-strung (kōvai — a garland), clear as honey. The closing image is the "deer-mirage-heat" (māṉ taḻal) — the shimmering illusion that makes a desert seem like water, the perpetual disappointment of those who chase what is not there. These four gems, truly possessed, dissolve the mirage. Reality becomes visible. The casket is opened; the gems are given.`,
    tamilUrai: `நன்மணிக்கடிகை நூறொன்று முடிந்தது. ஒவ்வொரு பாடலும் ஒரு நான்குகல் மணி — வாழ்வின் நான்கு கோணங்களை காட்டும்.`,
    altTranslation: `Naṉmaṇikkaṭikai of one hundred and one is complete. Each verse a four-jewel gem — showing four facets of life. — Ramanujan`,
  }

];
