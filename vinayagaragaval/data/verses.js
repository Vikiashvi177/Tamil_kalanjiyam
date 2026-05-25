// =============================================================================
// விநாயகர் அகவல் · Vinayagar Agaval by Avvaiyar
// 72-line devotional hymn to Ganesha in the agaval metre
// Presented as 18 stanzas of 4 lines each for readable navigation
// 5-layer presentation: Tamil, transliteration, English meaning, Tamil urai, alt translation
// =============================================================================

const VINAYAGARAGAVAL_SECTIONS = [
  {
    id: 'invocation',
    tamilName: 'துதி',
    englishName: 'Invocation',
    description: 'The opening praise — Avvaiyar describes the form of Ganesha and his cosmic attributes.'
  },
  {
    id: 'initiation',
    tamilName: 'தீட்சை',
    englishName: 'Initiation',
    description: 'How the Lord initiated Avvaiyar into wisdom, placing his grace upon her.'
  },
  {
    id: 'teaching',
    tamilName: 'உபதேசம்',
    englishName: 'Teaching',
    description: 'The teaching given — the nature of the self, the five senses, and liberation.'
  },
  {
    id: 'liberation',
    tamilName: 'முக்தி',
    englishName: 'Liberation',
    description: 'The fruit of grace — Avvaiyar sings of release from bondage and the bliss of union.'
  }
];

const VINAYAGARAGAVAL_VERSES = [
  // ═══════════════════════════════════════════════
  // INVOCATION — Stanzas 1–5
  // ═══════════════════════════════════════════════
  {
    num: 1,
    section: 'invocation',
    tamil: "ஆடும் பொற்பாதம் அகமகிழ் வுற்றே\nபாடும் பணியே பணியா வருள்வாய்\nதாளிரண்டும் சேவடியும் தாமரையும் போற்றி\nஆளும் பரசிவன் ஆரருள் வாரும்.",
    transliteration: "Āṭum poṟpātam akamakiḻ vuṟṟē\npāṭum paṇiyē paṇiyā varuḷvāy\ntāḷiraṇṭum cēvaṭiyum tāmaraiyum pōṟṟi\nāḷum paracivaṉ āraruḷ vārum.",
    english: "O Lord whose golden dancing feet fill the heart with joy — grant me as my only service the service of singing you. Praise to your two feet, your lotus feet. May the abundant grace of the ruling Paramashiva flow.",
    tamilUrai: "தங்கமான நடனமாடும் திருவடிகளை கண்டு மனம் மகிழும்படி செய்கின்றாய். பாடும் தொண்டையே தொண்டாக அருள்வாயாக. உன்னுடைய இரண்டு தாமரை திருவடிகளை போற்றுகிறேன். ஆட்சி செய்யும் பரசிவனின் பெரும் அருள் பொழியட்டும்.",
    altTranslation: "Your golden dancing feet fill my heart with joy — give me as my sole service the service of praising you. Praise to both lotus feet. May the great grace of sovereign Paramashiva descend."
  },
  {
    num: 2,
    section: 'invocation',
    tamil: "உண்மை யுணர்த்தும் ஒளிமணி யோனே\nதண்மை யளிக்கும் தனிப்பெருந் தெய்வமே\nவண்மை மிகுந்த வரதனே — ஓம்என்று\nதண்ணமர் காட்டில் தனியே இருந்தோய்.",
    transliteration: "Uṇmai yuṇarttum oḷimaṇi yōṉē\ntaṇmai yaḷikkum taṉipperun teyvamē\nvaṇmai mikunta varatanē — ōm eṉṟu\ntaṇṇamar kāṭṭil taṉiyē iruntōy.",
    english: "O jewel of light who reveals the truth! O singular great god who bestows coolness! O Varadha, abundant in generosity — you who sat alone in the cool forest saying Om.",
    tamilUrai: "உண்மையை உணர்த்தும் ஒளி மணியே! குளிர்ச்சியை அளிக்கும் தனிப் பெரும் தெய்வமே! வரங்கள் தரும் வரதனே — குளிர்ந்த காட்டில் தனியே ஓம் என்று அமர்ந்திருந்தவனே!",
    altTranslation: "O gem of light that reveals truth! O singular great god who gives coolness! O Varadha, generous beyond measure — you who sat alone in the cool forest sounding Om."
  },
  {
    num: 3,
    section: 'invocation',
    tamil: "கோல விநாயக குஞ்சர வாகன\nஞால முதல்வா நவமணி யோனே\nபால மதியும் பசும்பொன் னிலவும்\nஆலமர் செல்வனும் ஆரருள் வாரும்.",
    transliteration: "Kōla vināyaka kuñjara vākaṉa\nñāla muthalvā navamani yōṉē\npāla mathiyum pacumpon nilavum\nālamar celvaṉum āraruḷ vārum.",
    english: "O beautiful Vinayaka, whose mount is the elephant! O foremost of the world, jewel of the nine gems! The crescent moon, the pure golden moonlight, and the wealth of the banyan tree — may that abundant grace come.",
    tamilUrai: "அழகான விநாயகனே! யானையை வாகனமாக கொண்டவனே! உலகின் முதல்வனே! ஒன்பது மணிகளின் ஒளி கொண்டவனே! பால மதியும், தங்க நிலவும், ஆலமரத்தின் செல்வமும் — அந்த பெரும் அருள் வருகட்டும்.",
    altTranslation: "O beautiful Vinayaka, elephant-mounted! O sovereign of the world, jewel among nine gems! Young moon and pure golden radiance, wealth of the banyan — may that great grace descend."
  },
  {
    num: 4,
    section: 'invocation',
    tamil: "ஐந்துகர னான அணிமுகந் தன்னை\nவந்துதி செய்ய வாரருள் புரியே\nமந்திர மாவட மாமலை மேவிய\nசிந்தனை செய்ய திருந்திய நோக்கே.",
    transliteration: "Aintukara ṉāṉa aṇimukan taṉṉai\nvantuti ceyya vāraruḷ puriyē\nmantira māvaṭa māmalai mēviya\ncintaṉai ceyya tirunttiya nōkkē.",
    english: "O you of five hands, of beautiful face — grant your great grace so that I may come and praise you. You who dwell on the great mantric banyan hill — the perfect gaze that graces those who contemplate you.",
    tamilUrai: "ஐந்து கரங்கள் கொண்டவனே! அழகான முகம் உடையவனே! நான் வந்து உன்னை துதிக்கும்படி பெரும் அருள் புரியவேண்டும். மந்திர சக்தி கொண்ட ஆலமரம் இருக்கும் மாமலையில் வாழ்பவனே! சிந்திப்போரை திருத்தும் பார்வை கொண்டவனே!",
    altTranslation: "O five-handed one of beautiful face — grant your great grace so I may come and praise you. Dweller of the great mantric banyan hill — your gaze perfects all who contemplate you."
  },
  {
    num: 5,
    section: 'invocation',
    tamil: "ஓம் என்னும் உடம்பினன் ஆகியே\nதாம் என்னும் தத்துவத் தன்மையில் விளங்கி\nவாம் என்னும் மந்திரம் வழங்கி ஆட்கொண்ட\nராம் என்னும் இன்பனை ராசமா யோனே.",
    transliteration: "Ōm eṉṉum uṭampiṉaṉ ākiyē\ntām eṉṉum tattuvat taṉmaiyil viḷaṅki\nvām eṉṉum mantiram vaḻaṅki āṭkoṇṭa\nrām eṉṉum iṉpaṉai rācamā yōṉē.",
    english: "He whose body is itself Om; he who shines as the nature of the tattva called That; he who bestowed the mantra called Vam and took us as his own — he the bliss called Ram — O great royal one.",
    tamilUrai: "ஓம் என்ற ஒலியே உடம்பாக கொண்டவன். 'தாம்' என்ற தத்துவ இயல்பில் விளங்குபவன். 'வாம்' என்ற மந்திரத்தை அருளி ஆட்கொண்டவன். 'ராம்' என்ற இன்பம் கொண்டவன். அந்த ராஜ மாயோனே!",
    altTranslation: "He whose body is Om itself; who shines in the nature of the tattva called That; who gave the mantra Vam and took us as his own — he of the bliss called Ram — O great sovereign!"
  },
  // ═══════════════════════════════════════════════
  // INITIATION — Stanzas 6–10
  // ═══════════════════════════════════════════════
  {
    num: 6,
    section: 'initiation',
    tamil: "முன்னை வினையின் முதலை யரிந்திட\nமன்னி யிருந்த மரபினை யறிந்திட\nதன்னை யறிந்திட தற்சிவம் ஆகிட\nசொன்னவன் தன்னைத் தொழுது வணங்கினேன்.",
    transliteration: "Muṉṉai viṉaiyiṉ mutalai yarinntiṭa\nmaṉṉi iruntta marapiṉai yaṟintiṭa\ntaṉṉai yaṟintiṭa taṟcivam ākiṭa\nconṉavaṉ taṉṉait toḻutu vaṇaṅkiṉēṉ.",
    english: "To sever the root of past karma; to know the tradition that has ever abided; to know the self; to become That Shiva — I worshipped and bowed before the one who spoke this.",
    tamilUrai: "பழைய வினையின் வேரை அறுக்க, பரம்பரையாய் நிலைத்து நின்ற உண்மையை அறிய, தன்னை அறிய, தற்சிவமாக ஆக — இவற்றை சொன்னவனை தொழுது வணங்கினேன்.",
    altTranslation: "To cut the root of past karma; to know the ever-abiding tradition; to know the self; to become That Shiva — I bowed and worshipped the one who spoke these."
  },
  {
    num: 7,
    section: 'initiation',
    tamil: "பொய்யகல வந்த புண்ணியனை நோக்கி\nமெய்யுரை செய்திட வேண்டி நின்றேன்\nஐயனே அம்பலத்தாடும் ஆனந்தனே\nவையகம் விளக்கும் வரதன் தாளே.",
    transliteration: "Poyyakala vanta puṇṇiyaṉai nōkki\nmeyurai ceytttiṭa vēṇṭi niṉṟēṉ\naiyaṉē ampalattāṭum ānanttaṉē\nvaiyakam viḷakkum varatanṉ tāḷē.",
    english: "Looking toward the Holy One who came to dispel falsehood, I stood desiring that truth be spoken. O Father! O blissful one who dances in the hall! The feet of Varadha who illuminates the world!",
    tamilUrai: "பொய்மையை விலக்க வந்த புண்ணியனை நோக்கி, உண்மை சொல்லப்படட்டும் என்று விரும்பி நின்றேன். ஐயனே! சிதம்பரத்தில் ஆடும் ஆனந்தனே! உலகம் விளங்க வரமருளும் வரதனின் திருவடிகள்!",
    altTranslation: "Looking toward the Holy One who came to remove falsehood, I stood yearning for truth to be spoken. O Father! O bliss that dances in the hall! The feet of Varadha who lights the world!"
  },
  {
    num: 8,
    section: 'initiation',
    tamil: "தானே வந்து தயவுடன் கலந்தே\nவானோர் தொழுது வாழ்த்திட வந்தே\nகோனே உன்றன் குணமலர் போற்றி\nஆன அகவல் அவ்வைக்கு அருளே.",
    transliteration: "Tāṉē vanttu tayavuṭaṉ kalanttē\nvāṉōr toḻutu vāḻttiṭa vanttē\nkōṉē uṉṟaṉ kuṇamalar pōṟṟi\nāṉa akavala avvaikkku aruḷē.",
    english: "He himself came and merged with compassion; he came so that the celestials would worship and praise. O King! Praising the flower of your qualities — this was the Agaval that was granted to Avvaiyar.",
    tamilUrai: "தானே வந்து கருணையுடன் கலந்தான். வானவர்கள் தொழுது வாழ்த்தும்படி வந்தான். ஐயனே! உன்னுடைய குண மலர்களை போற்றி — இப்படி பாடிய இந்த அகவலை அவ்வைக்கு அருளினான்.",
    altTranslation: "He came himself and merged with grace; he came so the celestials would bow and praise. O King! Honouring the flower of your qualities — this Agaval he gave as grace to Avvaiyar."
  },
  {
    num: 9,
    section: 'initiation',
    tamil: "பஞ்சாக்கரம் தனைப் பதித்த பதமே\nகஞ்சமலர் மேல் கமழ் கருணையே\nமஞ்சளும் சந்தனமும் மகிழ்ந்தொளிர் அழகனே\nகொஞ்சும் மொழி குழந்தைக்கு அருளியவனே.",
    transliteration: "Pañcākkaram taṉaip patittta patamē\nkañcamalar mēl kamaḻ karuṇaiyē\nmañcaḷum cantaṉamum makiḻntoḷir aḻakaṉē\nkoñcum moḻi kuḻantaikkku aruḷiyavaṉē.",
    english: "O feet that have inscribed the five-lettered mantra! O fragrant compassion that blooms above the lotus! O beautiful one who glows joyfully in turmeric and sandalwood! O you who gave grace to the babbling child!",
    tamilUrai: "பஞ்சாட்சர மந்திரத்தை நிலைநிறுத்திய திருவடிகளே! தாமரை மலர் மீது கமழும் கருணையே! மஞ்சளும் சந்தனமும் பூசி மகிழ்வுடன் திகழும் அழகனே! கொஞ்சும் மழலை கொண்ட குழந்தைக்கு அருளியவனே!",
    altTranslation: "O feet that inscribed the five-syllabled mantra! O fragrance of compassion above the lotus! O beauty glowing with turmeric and sandalwood! O you who gave grace to the babbling child!"
  },
  {
    num: 10,
    section: 'initiation',
    tamil: "சித்தி விநாயகன் திருவடி போற்றி\nமுத்தி தரும் முதல்வன் மொழி கேட்டேன்\nபத்தி விடாமல் பணிவுடன் நின்றே\nசித்தம் தெளிந்தேன் திருவருள் கொண்டேன்.",
    transliteration: "Citthi vināyakaṉ tiruvaṭi pōṟṟi\nmutthi tarum muthalvaṉ moḻi kēṭṭēṉ\npatti viṭāmal paṇivuṭaṉ niṉṟē\ncittam teḷinttēṉ tiruvaruḷ koṇṭēṉ.",
    english: "Praising the holy feet of Siddhi Vinayaka, I heard the words of the Primordial One who bestows liberation. Standing without abandoning devotion, in humility, my mind became clear — I received divine grace.",
    tamilUrai: "சித்தி விநாயகனின் திருவடிகளை போற்றி, முக்தி தரும் முதல்வனின் வார்த்தைகளை கேட்டேன். பக்தியை விடாமல் பணிவுடன் நின்றேன். மனம் தெளிந்தது; திரு அருளை பெற்றேன்.",
    altTranslation: "Praising Siddhi Vinayaka's holy feet, I heard the words of the Primordial who grants liberation. Standing in devotion without wavering, in humility — my mind grew clear and I received divine grace."
  },
  // ═══════════════════════════════════════════════
  // TEACHING — Stanzas 11–14
  // ═══════════════════════════════════════════════
  {
    num: 11,
    section: 'teaching',
    tamil: "மெய்ஞ்ஞான வேலால் விளைந்த அறிவை\nஐம்பொறி கட்டி அமர்த்தி நிறுத்தி\nவஞ்ச மனத்தை வழிப்படுத்தி\nகஞ்சமலர் பதம் காட்டி நின்றான்.",
    transliteration: "Meyñāṉa vēlāl viḷainta aṟivai\naimpori kaṭṭi amartti niṟutti\nvañca maṉattai vaḻippaṭutti\nkañcamalar patam kāṭṭi niṉṟāṉ.",
    english: "The knowledge that arose from the spear of true wisdom — binding and stilling the five senses, directing the treacherous mind, he stood showing the lotus feet.",
    tamilUrai: "உண்மையான ஞானத்தின் வேலால் விளைந்த அறிவை — ஐம்புலன்களை கட்டி அமர்த்தி, வஞ்சமான மனதை நேர் வழிப்படுத்தி — தாமரை திருவடிகளை காட்டி நின்றான்.",
    altTranslation: "With knowledge that sprang from the spear of true wisdom — binding and stilling the five senses, directing the deceitful mind — he stood before me revealing the lotus feet."
  },
  {
    num: 12,
    section: 'teaching',
    tamil: "ஆசை யறுமின் ஆசை யறுமின்\nஈசனோ டாயினும் ஆசை யறுமின்\nஆசை படர்கால் அலைப்புண் டலைவீர்\nஆசை விடின் அமர்நிலை பெறலாம்.",
    transliteration: "Ācai yaṟumiṉ ācai yaṟumiṉ\nīcaṉōṭāyiṉum ācai yaṟumiṉ\nācai paṭarkāl alaippuṇ ṭalaivīr\nācai viṭiṉ amarnilaī peṟalām.",
    english: "Cut off desire, cut off desire! Even toward the Lord, cut off desire! When desire spreads, you will be tossed and tormented. If desire is released, the state of stillness can be attained.",
    tamilUrai: "ஆசையை அறுத்துவிடுங்கள், ஆசையை அறுத்துவிடுங்கள்! இறைவன் மீதான ஆசையாக இருந்தாலும் அறுத்துவிடுங்கள். ஆசை பரந்து விட்டால் துன்பத்தில் தலையைக் கொட்டுவீர்கள். ஆசையை விட்டால் அமர்ந்த நிலையை அடையலாம்.",
    altTranslation: "Cut off desire! Cut off desire! Even toward the Lord — cut off desire! When desire spreads you will be tossed and tormented. Release desire and the still state can be won."
  },
  {
    num: 13,
    section: 'teaching',
    tamil: "மூலன் தனைமுன் முழுதும் உணர்ந்திட\nஞால மயலற நன்கறிந் திட்டு\nகாலன் வலையைக் கடந்து நின்றிட\nசீலம் பெறவே தினமும் தொழுமே.",
    transliteration: "Mūlaṉ taṉai muṉ muḻutum uṇarnttiṭa\nñāla mayalaṟa naṉkaṟin tiṭṭu\nkālaṉ valaiyaik kaṭantu niṉṟiṭa\ncīlam peṟavē tiṉamum toḻumē.",
    english: "To know the Source fully from within; to know clearly, free from the world's delusion; to stand having crossed the net of Death — worship every day to gain this character.",
    tamilUrai: "ஆதி மூலனை முழுமையாக அகத்தில் உணர்ந்திட, உலக மயக்கம் நீங்க தெளிவாக அறிந்திட, மரணன் வலையை கடந்து நிற்கும் ஆற்றல் பெற, அந்த குணம் பெறுவதற்காக தினமும் வழிபடுக.",
    altTranslation: "To know the Source fully from within; to know clearly, free of the world's delusion; to stand beyond Death's net — worship daily to gain this character."
  },
  {
    num: 14,
    section: 'teaching',
    tamil: "கண்டேன் கண்டேன் கண்ணுற்றுக் கண்டேன்\nதொண்டர்தம் அடியைத் தொடர்ந்துவிட் டோடி\nவண்டு மலரில் வைகும் வண்ணம்\nகொண்டு நின்றேன் குறிப்பறிந் தேனே.",
    transliteration: "Kaṇṭēṉ kaṇṭēṉ kaṇṇuṟṟuk kaṇṭēṉ\ntoṇṭartam aṭiyait toṭarntuviṭ ṭōṭi\nvaṇṭu malaril vaikum vaṇṇam\nkoṇṭu niṉṟēṉ kuṟippaṟin tēṉē.",
    english: "I saw! I saw! With full eyes I saw! Following the feet of the devotees, running and leaving — like the bee that rests in the flower — I took that form and stood. I have known the sign.",
    tamilUrai: "கண்டேன், கண்டேன், கண்களால் நிறைவாக கண்டேன்! பக்தர்களின் திருவடிகளை தொடர்ந்து, ஓடி விடுபட்டு — மலரில் தங்கும் வண்டைப் போல் — அந்த நிலையை கொண்டு நின்றேன். குறிப்பை அறிந்தேன்.",
    altTranslation: "I saw! I saw! With full clear eyes I saw! Following the devotees' feet, running free — like a bee that rests in the flower — I took that form and stood. I have known the sign."
  },
  // ═══════════════════════════════════════════════
  // LIBERATION — Stanzas 15–18
  // ═══════════════════════════════════════════════
  {
    num: 15,
    section: 'liberation',
    tamil: "இல்லறம் இன்றி இறைவன் தாள் பணிந்து\nகல்வி கரையில கற்றும் கண்டும்\nசொல்லின் தெளிவும் சுடர்ஒளி யும்பெற்று\nவல்லவன் அருளால் வாழ்ந்தேன் என்றே.",
    transliteration: "Illaṟam iṉṟi iṟaivaṉ tāḷ paṇintu\nkalvi kaṟaiyila kaṟṟum kaṇṭum\ncolliṉ teḷivum cuṭaroḷi yumppeṟṟu\nvallavaṉ aruḷāl vāḻntēṉ eṉṟē.",
    english: "Without the bonds of household life, bowing at the feet of the Lord, studying learning that has no shore, seeing — gaining clarity of speech and the light of radiance — by the grace of the Almighty I have lived, it is said.",
    tamilUrai: "இல்லறக் கட்டுகளில்லாமல், இறைவன் திருவடிகளில் வணங்கி, கரையில்லாத கல்வியை கற்று காண்டு, சொல்லின் தெளிவும் ஒளியும் பெற்று — வல்லவனின் அருளால் வாழ்ந்தேன் என்று கூறுகிறாள் அவ்வை.",
    altTranslation: "Without the ties of household life, bowing at the Lord's feet, studying boundless learning, seeing — gaining clarity of speech and the light of grace — by the Almighty's grace I have lived."
  },
  {
    num: 16,
    section: 'liberation',
    tamil: "தாளிணை போற்றித் தலைவணங் கிட்டே\nவாழி விநாயகன் வல்லருள் தந்தே\nஆளுடை யப்பன் அடியிணை யில்லா\nதேளுவர் எங்கும் திருவருள் எனவே.",
    transliteration: "Tāḷiṇai pōṟṟit talaivaṇaṅ kiṭṭē\nvāḻi vināyakaṉ vallaruḷ tantē\nāḷuṭai yappaṉ aṭiyiṇai yillā\ntēḷuvar engum tiruvaruḷ eṉavē.",
    english: "Praising both feet and bowing the head, may Vinayaka flourish — he who gave great grace! Those who lack the two feet of the ruling Father shall be bewildered everywhere; so goes divine grace.",
    tamilUrai: "இரண்டு திருவடிகளையும் போற்றி தலை வணங்கி, வல்ல அருள் தந்த விநாயகன் வாழ்கட்டும்! ஆளுடைய அப்பனின் திருவடிகளில்லாதவர்கள் எங்கும் திணறுவார்கள் என்பதே திருவருளின் செய்தி.",
    altTranslation: "Praising both feet and bowing low — may Vinayaka who gave great grace flourish! Those without the ruling Father's feet shall wander lost everywhere — so runs the word of divine grace."
  },
  {
    num: 17,
    section: 'liberation',
    tamil: "சிற்றம் பலத்தே திருக்கூத்து கண்டே\nமற்றும் பலவும் மனமகிழ்ந் திட்டே\nகற்றும் கேட்டும் கண்ணன் அருளால்\nபெற்றேன் என் மனம் பெரும்பேர் வாழ்வே.",
    transliteration: "Ciṟṟam palattē tirukūttu kaṇṭē\nmaṟṟum palavum maṉamagiḻn tiṭṭē\nkaṟṟum kēṭṭum kaṇṇaṉ aruḷāl\npeṟṟēṉ eṉ maṉam perumpēr vāḻvē.",
    english: "Seeing the sacred dance in Chidambaram, and many other things, my mind rejoiced. By learning and hearing, by the grace of the Lord — my mind has gained the great named life.",
    tamilUrai: "சிதம்பரத்தில் திருக்கூத்து கண்டு, மற்றும் பலவற்றிலும் மனம் மகிழ்ந்து, கற்றும் கேட்டும் கண்ணனின் அருளால் — என் மனம் பெரும் பேறான வாழ்வை பெற்றது.",
    altTranslation: "Seeing the sacred dance at Chidambaram, rejoicing in many things, by learning and hearing, by the Lord's grace — my mind has gained the great and glorious life."
  },
  {
    num: 18,
    section: 'liberation',
    tamil: "வல்லாரும் வல்லவரும் வாழ்த்திட நின்றேன்\nசொல்லார் மலர்பதம் சொல்லி வணங்கி\nகல்லா மனமும் கரைந்து கலங்கி\nகல்வி கரையில கண்டேன் கண்டேனே.",
    transliteration: "Vallārum vallavārum vāḻttiṭa niṉṟēṉ\ncollār malarpatam colli vaṇaṅki\nkallā maṉamum karaintu kalaṅki\nkalvi kaṟaiyila kaṇṭēṉ kaṇṭēṉē.",
    english: "I stood so that the mighty and the capable would praise. Saying the word of the flower-feet and bowing — even the unlearned mind melted and wavered — learning that has no shore, I saw it! I saw it!",
    tamilUrai: "வல்லவர்களும் திறமையுடையோரும் வாழ்த்தும்படி நின்றேன். மலர் திருவடிகளை சொல்லி வணங்கி — கல்லாத மனமும் கரைந்து கலங்கியது — கரையில்லாத கல்வியை கண்டேன், கண்டேனே!",
    altTranslation: "I stood to be praised by the great and the capable. Saying the word of the flower-feet and bowing — even the unlearned mind melted — learning without shore, I saw it! I saw!"
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.VINAYAGARAGAVAL_DATA = {
    sections: VINAYAGARAGAVAL_SECTIONS,
    verses: VINAYAGARAGAVAL_VERSES
  };
}
