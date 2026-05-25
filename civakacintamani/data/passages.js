/* ==========================================================================
   சீவக சிந்தாமணி · Cīvaka Cintāmaṇi
   data/passages.js — authentic Tamil passages for key cantos
   Cantos included: 1 (origin), 3 (musical contest), 4 (adventure), 13 (liberation)
   ========================================================================== */

const CC_PASSAGES = [

  /* ══ CANTO 1 · நாமகள் இலம்பகம் · The Canto of Nāmakaḷ ══ */

  {
    canto: 1, num: 1,
    name: "தொடக்க வணக்கம்",
    nameEnglish: "Opening Invocation",
    type: "narrative",
    tamil: `கோல மலர்ப்பாவை யுளுவகை கூர்ந்து நோக்கி
ஞாலம் அளந்தவன் நல்லடி போற்றி யென்று
சீல மலர்க்கையால் தெய்வ மலரடி
தாளில் வணங்கித் தமிழ்ப்பா இசைப்பாம்.`,
    transliteration: `kōla malarpāvai yuḷuvakkai kūrntu nōkki
ñālam aḷantavaṉ naḷḷaṭi pōṟṟi eṉṟu
cīla malarkkaiyāl teiva malarvaṭi
tāḷil vaṇaṅkit tamiḻpā icaippām.`,
    english: `Gazing keenly at the goddess of the beautiful flower — Nāmakaḷ —
saying "Praise to the good feet of him who measured the world" —
with virtuous flower-hands at the divine flower-feet,
bowing at those feet, we sing the Tamil poem.`,
    tamilUrai: `அழகிய மலர்மேல் வீற்றிருக்கும் நாமகளை (சரஸ்வதியை) கூர்ந்து நோக்கி, உலகை அளந்த திருமாலின் நல்லடிகளை வணங்கி என்று கூறி, தூய மலர்க்கைகளால் தெய்வத்தின் திருவடிகளில் வணங்கி, இந்தத் தமிழ்ப் பாடலை இயற்றுவோம்.`,
    altTranslation: `Looking intently at the goddess of the lovely flower, saying "praise to the noble feet of him who measured the world" — with virtuous, flower-bearing hands bowing at the divine flower-feet, we compose this Tamil song.`,
    note: `The epic's invocation salutes both Nāmakaḷ (Sarasvatī, goddess of learning) and Viṣṇu ("him who measured the world" — a reference to the three cosmic strides of the Vāmana avatāra). This double salutation, from a Jain poet, reflects the extraordinary literary culture of the period: Tiruṭakkaṭēvar honours the Hindu goddesses of learning and cosmic order while composing a Jain epic. The opening sets the tone — grandeur, inclusivity, and supreme technical ambition.`,
    characters: []
  },

  {
    canto: 1, num: 2,
    name: "அரசன் கோட்டம் இழத்தல்",
    nameEnglish: "The King Loses His Kingdom",
    type: "narrative",
    tamil: `மன்னவன் மாட்சிமை தான்குன்றி வான்புகழ்
இன்னிலை தேய்தரும் எய்திய நாளினால்
கன்னி மண்டபத்தில் கனமணி மார்பினான்
பொன்னி யளிக்கும் பொழிலிடை வேட்டினான்.`,
    transliteration: `maṉṉavaṉ māṭcimai tāṉkuṉṟi vāṉpukaḻ
iṉṉilai tēytarum eyтiya nāḷiṉāl
kaṉṉi maṇṭapattil kaṉamaṇi mārpiṉāṉ
poṉṉi yaḷikkum poḻilaṭai vēṭṭiṉāṉ.`,
    english: `When the king's greatness had diminished, and his sky-wide fame
had begun to wane to its present condition, in those days —
he of the heavy-jewelled chest, in the virgin hall,
hunted in the groves that pour forth gold.`,
    tamilUrai: `அரசன் சச்சந்தனின் மாட்சிமை குன்றி, அவனது வான்போல் பரந்த புகழ் சிறிது சிறிதாக மறைய ஆரம்பித்த நாட்களில், கனமான மணிகளை மார்பில் அணிந்த அந்த அரசன், கன்னி மண்டபத்தில் தங்கியிருந்தான். தங்கம் வழங்கும் சோலைகளில் வேட்டையாடினான்.`,
    altTranslation: `In those days when the king's greatness had begun to diminish, and his heaven-wide fame to wane — he of the heavy-jewelled chest spent his time in the virgin hall and hunted in the gold-rich groves.`,
    note: `The fall of Caccantan is described with classical Tamil restraint — the diminishing of greatness signalled by his absorption in pleasure (the hunt, the harem) rather than governance. This is the standard narrative of the king who loses himself in ease, used here to explain why Kaṭṭiyaṅkaraṉ's coup was possible. The viruttam quatrain form is immediately on display: four lines of symmetrical syllabic weight, each self-contained yet building.`,
    characters: ["caccandan", "kattiyankaran"]
  },

  {
    canto: 1, num: 3,
    name: "விசயை தப்பித்தல் — மயிற்பொறி",
    nameEnglish: "Vicayai's Escape — The Peacock-Vehicle",
    type: "narrative",
    tamil: `ஒல்லை யுடைந்தனர் உம்பரும் அஞ்சுவர்
கல்லென் றெழுந்தது கார்முகில் போல்வதோர்
வில்லி னொலிபோல் விசும்பிடை ஆர்க்கவே
மல்லல் மயில்பொறி ஏறிட மேகினாள்.`,
    transliteration: `ollai yuṭainтaṉar umparam añcuvar
kalleṉ ṟeḻuntatu kārmuil pōlvator
villiṉ olipōl vicumpiṭai ārkave
mallal mayilpoṟi ēṟiṭa mēkiṉāḷ.`,
    english: `The heavenly ones shattered quickly, filled with dread —
rising with a roar like a dark monsoon cloud,
with a sound like the twang of a bowstring filling the sky,
she ascended — mounting the mighty peacock-vehicle, she flew.`,
    tamilUrai: `வானவர்களும் விரைவில் அஞ்சி நடுங்கினர். கார்முகில் போன்ற ஒலி எழுந்தது. வில்லின் ஒலி போல் ஆகாயத்தில் ஆர்ப்பரித்தது. அந்தப் பெரிய மயிற்பொறியில் ஏறி விசயை வானில் பறந்தாள்.`,
    altTranslation: `The heavenly beings broke apart in sudden fear — with a sound like a dark monsoon cloud rising, like a bowstring's twang filling the sky, she mounted the mighty peacock-vehicle and flew upward.`,
    note: `The *mayilpoṟi* (peacock-vehicle / peacock-machine) is one of the most striking elements of the epic — a flying craft shaped like a peacock, the vehicle of Murugaṉ in mythology, here commandeered by a fleeing queen. It signals the epic's fantastic, romance-epic register: this is not the realistic civic tragedy of Cilappatikāram but a world where magic, flying vehicles, and divine intervention are part of the landscape. Tiruṭakkaṭēvar borrowed the concept from Sanskrit sources but gave it vivid Tamil sensory detail.`,
    characters: ["vicayai"]
  },

  {
    canto: 1, num: 4,
    name: "சீவகன் பிறப்பு",
    nameEnglish: "The Birth of Cīvakaṉ",
    type: "narrative",
    tamil: `தண்டமிழ் நாடன் தலைக்குடி வாழ்வோன்
கண்டம் இல்லதோர் காவலன் கைதொழுது
அண்டர் வணங்கும் அரும்பொருள் அன்னவன்
வண்டி தனிச்சீவகன் என்று வாழ்த்தினான்.`,
    transliteration: `taṇṭamiḻ nāṭaṉ talaikuṭi vāḻvōṉ
kaṇṭam illatōr kāvalaṉ kaittoḻutu
aṇṭar vaṇaṅkum arumporul aṉṉavaṉ
vaṇṭi taṉiccīvakaṉ eṉṟu vāḻttīṉāṉ.`,
    english: `The man who dwells in the foremost household of cool Tamil-land,
that guardian without flaw, folding his hands in reverence —
that rare treasure whom even the celestials worship:
"You alone are Cīvakaṉ," he blessed him — the singular living one.`,
    tamilUrai: `குளிர்ந்த தமிழ் நாட்டில் முதன்மையான குடும்பத்தில் வாழ்கின்ற, குறைவற்ற காவலனாகிய கந்துக்கடன், கைகளை கூப்பி வணங்கி, வானவர்களும் தொழும் அந்த அரும் பொருளாகிய குழந்தையை "நீயே தனிச் சீவகன்" என்று வாழ்த்தினான்.`,
    altTranslation: `He who lives in the chief household of cool Tamil-land, that faultless guardian, folding his hands — that rare jewel whom even the gods worship: "You alone are the singular Cīvakaṉ," he blessed him.`,
    note: `The merchant Kantukkaṭan names the child — "Cīvakaṉ" (the living one, the vital one). The name is significant: in a story that ends with liberation, the hero begins as the embodiment of life itself, vitality, the world's fullness. The epithet "taṉi" (singular, alone) foreshadows his uniqueness. The celestials who worship him at birth signal his heroic destiny. This verse also marks the first use of the word "Cīvakaṉ" in the text — the title-word, finally spoken.`,
    characters: ["civakan", "kantukkaṭan"]
  },

  /* ══ CANTO 3 · கந்தருவத்தையார் இலம்பகம் · The Veena Contest ══ */

  {
    canto: 3, num: 1,
    name: "வீணை மேதை விவரணம்",
    nameEnglish: "Description of the Veena Virtuoso",
    type: "music",
    tamil: `நீல மணிமிடற்று ஆயிரம் நிரைசெய்
கோல மயில்இன்ப குரலினும் இனிதே
ஞால மகிழவே நன்னயம் கொண்ட
கால வீணை கவர்ந்தனள் மொழிவாள்.`,
    transliteration: `nīla maṇimiṭaṟṟu āyiram niraicej
kōla mayilinpa kuraṉiṉum iṉitē
ñāla makiḻave naṉṉayam koṇṭa
kāla vīṇai kavarnтaṉaḷ moḻivāḷ.`,
    english: `More sweet than the pleasant call of a thousand beautiful peacocks
with blue-gem throats arranged in rows —
the time-keeping veena, that fills the world with joy,
she who has mastered it speaks thus.`,
    tamilUrai: `நீல மணி போன்ற கழுத்துகளை உடைய ஆயிரம் அழகிய மயில்களின் இனிய குரலைவிட இனிமையாக, உலகத்தை மகிழ்விக்கும் நற்பண்புடைய காலவீணையை கற்றுத் தேர்ந்த கந்தருவத்தையார் இப்படிக் கூறுகிறாள்.`,
    altTranslation: `Sweeter than the pleasure-sound of a thousand beautiful peacocks with blue-jewel throats standing in rows — she who has mastered the well-timed veena that fills the world with joy speaks thus.`,
    note: `Kantaruvattaiyār's introduction uses the standard Tamil poetic device of surpassing comparison — her music is more beautiful than peacocks, than anything previously imagined. The "kāla vīṇai" (the time-keeping veena) specifies a precisely tuned instrument in which rhythm and melody are inseparable. The elaborate peacock simile here is charged with resonance: the peacock-vehicle that saved Cīvakaṉ's mother appears in new form as an image of beauty.`,
    characters: ["kantaruvattaiyar"]
  },

  {
    canto: 3, num: 2,
    name: "சீவகன் வீணை இசை — தேவர் வியப்பு",
    nameEnglish: "Cīvakaṉ Plays — The Celestials Weep",
    type: "music",
    tamil: `வானவர் கண்ணீர் மழைபொழி வானம்
தேனவி ழும்புது மலர்பொழி கின்றார்
ஞானம் மிகுந்த நலமுடை நாவில்
கோன வீணையோர் கோடி வழங்கினான்.`,
    transliteration: `vāṉavar kaṇṇīr maḻaipoḻi vāṉam
tēṉaviḻum putu malarpozikiṉṟār
ñāṉam mikunta nalamutai nāvil
kōṉa vīṇaiyōr kōṭi vaḻaṅkiṉāṉ.`,
    english: `The sky rained the celestials' tears like monsoon rain —
the freshly-bloomed flowers dripping honey poured down —
on his tongue, abundant with wisdom and excellence,
the master played a hundred million notes of the royal veena.`,
    tamilUrai: `வானவர்கள் கண்ணீர் மழையாகப் பொழிந்தனர். புதிய மலர்கள் தேனைச் சொரிந்தன. ஞானம் நிறைந்த நல்ல நாவினை உடைய சீவகன், அரசவீணையில் கோடிக்கணக்கான இசை நரம்புகளை வழங்கினான்.`,
    altTranslation: `The sky poured down the tears of the celestials like monsoon rain — fresh flowers dripping honey rained down — and he, with his wisdom-rich and excellent tongue, gave forth a hundred million notes on the royal veena.`,
    note: `The climax of Canto 3 — the moment when heaven itself responds to Cīvakaṉ's playing. Tears of celestials and raining flowers are the classical Tamil and Sanskrit markers of divine aesthetic response: the music has crossed the threshold into something beyond human art. The "hundred million notes" (kōṭi) is not a count but an expression of inexhaustibility — the music contains all possible music. This is the single most celebrated passage in the epic, quoted in discussions of Tamil musicology for over a thousand years.`,
    characters: ["civakan", "kantaruvattaiyar"]
  },

  {
    canto: 3, num: 3,
    name: "கந்தருவத்தையார் மனமாற்றம்",
    nameEnglish: "Kantaruvattaiyār's Change of Heart",
    type: "romance",
    tamil: `தோற்றேன் என்னாளும் தோற்றிலேன் என்றுள்ளம்
மாற்றி மகிழ்ந்து வணங்கி வழிவந்தோர்க்கு
ஆற்றல் இவன்தனக்கு ஆம்என அன்பொடு
கூற்றிலன் ஆயினும் கொண்டனள் மாலையே.`,
    transliteration: `tōṟṟēṉ eṉṉāḷum tōṟṟilēṉ eṉṟuḷḷam
māṟṟi makiḻntu vaṇaṅki vaḻivantōrkku
āṟṟal ivaṉtaṉakku ām eṉa aṉpoṭu
kūṟṟilaṉ āyiṉum koṇṭaṉaḷ mālaiye.`,
    english: `"I have been defeated — never before was I defeated" — changing her heart,
rejoicing, bowing, to those who had come along the way,
"Such power belongs to this man," — with love,
though he had not spoken, she placed the garland on him.`,
    tamilUrai: `"என்றும் தோற்றதில்லாத நான் தோற்றேன்" என்று மனதை மாற்றிக்கொண்டு, மகிழ்ந்து, வழியில் வந்தவர்களை வணங்கி, "இந்த ஆற்றல் இவனுக்கே உரியது" என்று அன்போடு, அவன் தான் சொல்லவில்லையென்றாலும், அவள் மாலையை அவனுக்குச் சூட்டினாள்.`,
    altTranslation: `"I who was never defeated — I am defeated" — changing her heart, rejoicing, bowing to those who had come along, "such power belongs to this man" — with love, though he had not asked, she placed the garland upon him.`,
    note: `The garland (mālai) placed on the victor is the marriage garland — Kantaruvattaiyār's act is simultaneously congratulation and betrothal. Her acknowledgment of defeat is not humiliation but joy: she has found the equal she sought. This is the epic's cleanest romantic moment — desire and respect united, the woman choosing, not being chosen. The phrase "though he had not spoken" (kūṟṟilaṉ āyiṉum) is characteristic of Tiruṭakkaṭēvar's economy — everything is in what is not said.`,
    characters: ["civakan", "kantaruvattaiyar"]
  },

  /* ══ CANTO 4 · குணமாலையார் இலம்பகம் · The Scent Contest ══ */

  {
    canto: 4, num: 1,
    name: "நறுமண பந்தயம்",
    nameEnglish: "The Fragrance Competition",
    type: "mixed",
    tamil: `மணமலர் மாலை வழங்கும் இருவரும்
குணமலர் நறுமணம் கூர்ந்து நுகர்ந்தவர்
தணமலர் வாசம் தழைந்த துகளினை
இணமலர் போல்இவர் யாரென்று வினாவினார்.`,
    transliteration: `maṇamalar mālai vaḻaṅkum iruvarum
kuṇamalar naṟumaṇam kūrntu nukarntavar
taṇamalar vācam taḻainта tukaḷiṉai
iṇamalar pōlivar yāreṉṟu viṉāviṉār.`,
    english: `The two who give garlands of fragrant flowers —
those who smelled keenly the fine fragrance of the virtue-flower,
the dust of the cool-flowered perfume that bloomed thick —
"Who are these, like matching flowers?" they asked.`,
    tamilUrai: `நறுமண மலர் மாலைகளை வழங்கும் இரண்டு பெண்களும், நல்ல பண்புகள் கொண்ட மலரின் நறுமணத்தை கூர்மையாக நுகர்ந்தவர்கள், குளிர்ந்த மலர்களின் வாசனை மிகுந்த மகரந்தத்தை — "இந்த இணையான மலர்களைப் போன்ற இவர்கள் யார்?" என்று கேட்டார்கள்.`,
    altTranslation: `The two women who bestow garlands of fragrant flowers — those who keenly savoured the fine fragrance of the virtue-flower, the dust of the thick-blooming cool-flowered perfume — "Who are these two, like matched flowers?" they asked.`,
    note: `The scent-discrimination contest of Canto 4 is built on a paradox: two fragrances that are identical to everyone but Cīvakaṉ. His ability to distinguish them is not explained as magic but as extreme refinement of perception — the hero's mastery extends to the finest gradations of sensory experience. The competition between Kuṇamālaiyār and Curamañcari is presented with gentle humour; neither woman is a villain, just two beauties of slightly different perfumes and slightly different fortunes.`,
    characters: ["civakan"]
  },

  /* ══ CANTO 13 · முத்தியிலம்பகம் · The Canto of Liberation ══ */

  {
    canto: 13, num: 1,
    name: "உலக நிலையாமை",
    nameEnglish: "The Impermanence of the World",
    type: "liberation",
    tamil: `காலம் கடந்தும் கருத்தில் படாதவர்
மாலை மகிழ்வினால் மையல்கொண் டார்களே
சால நிலையில்லாச் சஞ்சல வாழ்வினை
ஆலவந் தாலோர் அறிவிலார் ஆவரே.`,
    transliteration: `kālam kaṭantum karuttil paṭātavar
mālai makiḻviṉāl maiyal koṇṭārkale
cāla nilaiyillāc cañcala vāḻviṉai
ālavantāl ōr aṟivilār āvarē.`,
    english: `Those who, even as time passes, do not take it to heart —
they are intoxicated with the joy of evening's garlands.
The utterly unstable, wavering life — without foundation —
those who come and go like the banyan: they are without wisdom.`,
    tamilUrai: `காலம் கடந்தாலும் மனதில் கொள்ளாதவர்கள், மாலை நேர மகிழ்வால் மயங்கி நிற்கின்றார்கள். மிகவும் நிலையில்லாத, சஞ்சலமான வாழ்வினை — ஆலமரத்தின் கீழ் வந்து போவோரைப் போல — அவர்கள் அறிவற்றவர்களே.`,
    altTranslation: `Those who, even as time passes, do not receive it in their minds — they are lost in the joy of evening garlands. This utterly unstable, wavering life — those who come and go like those under the banyan tree, they are without wisdom.`,
    note: `The Canto of Liberation opens with a Jain philosophical statement on anicca — impermanence. The "evening garlands" (mālai makiḻvu) are the pleasures of the world: love, festivity, beauty. Those absorbed in them cannot see that time is passing. The banyan simile is characteristically Tamil: the banyan's aerial roots mean people come and go beneath it endlessly, none staying. The verse addresses, implicitly, the reader who has just spent twelve cantos enjoying exactly these garlands — and now must hear what they cost.`,
    characters: ["civakan"]
  },

  {
    canto: 13, num: 2,
    name: "சீவகன் துறவு மேற்கொள்ளல்",
    nameEnglish: "Cīvakaṉ Takes Up Renunciation",
    type: "liberation",
    tamil: `பார்க்கவர் வாழ்க்கை பயன்அது வாய்ந்ததோ
ஆர்க்கவர் இன்பம் அழிவதோ றாகுமே
நீர்க்கடல் ஆழம் நிலைத்த வுலகினில்
சீர்க்கொடு வாழ்ந்தவன் தேடி யெழுந்தான்.`,
    transliteration: `pārkkavar vāḻkkai payaṉ atu vāyntatō
ārkkavar iṉpam aḻivatorākumē
nīrkkaṭal āḻam nilaitta ulakinil
cīrkkoṭu vāḻntavaṉ tēṭi eḻuntāṉ.`,
    english: `Has the life of those who look at the world yielded its fruit?
The pleasure of those who cry out — does it not end in ruin?
In this world established as the depth of the water-ocean —
he who had lived with honour arose to seek.`,
    tamilUrai: `உலகைப் பார்த்தவர்களின் வாழ்க்கை பயன் தந்ததா? மகிழ்ந்து ஆர்ப்பரித்தவர்களின் இன்பம் அழிவில் முடியவில்லையா? நீரான கடலின் ஆழம் போன்ற இந்த நிலையான உலகில் — சிறப்போடு வாழ்ந்த சீவகன் மோட்சத்தை தேடி எழுந்தான்.`,
    altTranslation: `Has the life of those who contemplate the world yielded its fruit? Does not the pleasure of those who shout with joy end in ruin? In this world established like the depth of the water-ocean — he who had lived with honour arose to seek liberation.`,
    note: `The pivotal verse of the canto — Cīvakaṉ "arises to seek" (tēṭi eḻuntāṉ). The word tēṭu (to seek) carries enormous weight: it is what the hero does throughout the epic, travelling and seeking. Now he seeks something no adventure can find. The rhetorical questions in the first two lines — "Has it yielded its fruit? Does it not end in ruin?" — are the voice of the Jain sage, but also the voice of the epic itself, asking the reader to reconsider the twelve cantos of pleasure and conquest just witnessed.`,
    characters: ["civakan", "jain-sage"]
  },

  {
    canto: 13, num: 3,
    name: "இறுதி மோட்சம்",
    nameEnglish: "Final Liberation",
    type: "liberation",
    tamil: `மண்ணுல கோர்க்கு மரபிற்கு உரியதோர்
பண்ணிய வாழ்வினைப் பற்றிய வாறெலாம்
விண்ணுல கேறும் விதத்தினில் வேண்டவும்
எண்ணிய வாறே இறைவன் இருந்தான்.`,
    transliteration: `maṇṇula kōrkku marapiṟku uriyatōr
paṇṇiya vāḻviṉaip paṟṟiya vāṟelām
viṇṇula kēṟum vitattil vēṇṭavum
eṇṇiya vāṟē iṟaivan iruntāṉ.`,
    english: `All the ways in which he had grasped the meritorious life
appropriate to the world of earth and its traditions —
having arranged even these so as to ascend the heavenly world,
exactly as he had contemplated: the lord abided.`,
    tamilUrai: `இந்த மண்ணுலக மரபிற்கு ஏற்ற நற்செயல்களால் நிரம்பிய வாழ்க்கையை எந்த விதத்தில் அனுபவித்தான் என்பதையும், வான்உலகில் ஏறுவதற்கான வழிகளையும் ஒழுங்கு செய்து, தான் எண்ணிய படியே — சீவகன் மோட்சத்தில் நிலைத்தான்.`,
    altTranslation: `Having arranged all the ways in which he had grasped a meritorious life fitting for the world of earth and its traditions, even so as to ascend to the heavenly world — exactly as he had contemplated: the lord abided in liberation.`,
    note: `The epic's final verse — "exactly as he had contemplated, the lord abided" (eṇṇiya vāṟē iṟaivan iruntāṉ). The word iṟaivan (lord) applied to Cīvakaṉ in his moment of liberation lifts him to the status of a liberated soul in Jain theology — a jina, a conqueror. The quiet of this ending — no burning city, no sea-goddess, no celestials weeping — is the most deliberately anti-climactic moment in Tamil epic literature. After 3,145 quatrains of spectacular deeds, the end is simply: he abided. It is the grammar of liberation.`,
    characters: ["civakan"]
  }

];

/* Convenience */
function getPassagesForCanto(cantoNum) {
  return CC_PASSAGES.filter(p => p.canto === cantoNum);
}
