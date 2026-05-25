// =============================================================================
// ஆத்திசூடி · Aathichudi by Avvaiyar
// 109 verses of moral instruction, organized by the Tamil alphabet
// 5-layer presentation: Tamil, transliteration, English meaning, Tamil urai, alt translation
// =============================================================================

const AATHICHUDI_SECTIONS = [
  {
    id: 'uyir',
    tamilName: 'உயிர் எழுத்து',
    englishName: 'The Vowels',
    description: 'The twelve verses beginning with the Tamil vowels — அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ.',
    letters: ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ']
  },
  {
    id: 'kavargam',
    tamilName: 'க வர்க்கம்',
    englishName: 'The Ka-group',
    description: 'Verses beginning with க and combinations of க with vowel marks.',
    letters: ['க', 'கா', 'கி', 'கீ', 'கு', 'கூ', 'கெ', 'கே', 'கை', 'கொ', 'கோ']
  },
  {
    id: 'savargam',
    tamilName: 'ச வர்க்கம்',
    englishName: 'The Cha-group',
    description: 'Verses beginning with ச and combinations.',
    letters: ['ச', 'சா', 'சி', 'சீ', 'சு', 'சூ', 'செ', 'சே', 'சை', 'சொ', 'சோ']
  },
  {
    id: 'tavargam',
    tamilName: 'த வர்க்கம்',
    englishName: 'The Tha-group',
    description: 'Verses beginning with த and combinations.',
    letters: ['த', 'தா', 'தி', 'தீ', 'து', 'தூ', 'தெ', 'தே', 'தை', 'தொ', 'தோ']
  },
  {
    id: 'navargam',
    tamilName: 'ந வர்க்கம்',
    englishName: 'The Na-group',
    description: 'Verses beginning with ந and combinations.',
    letters: ['ந', 'நா', 'நி', 'நீ', 'நு', 'நூ', 'நெ', 'நே', 'நை', 'நொ', 'நோ']
  },
  {
    id: 'pavargam',
    tamilName: 'ப வர்க்கம்',
    englishName: 'The Pa-group',
    description: 'Verses beginning with ப and combinations.',
    letters: ['ப', 'பா', 'பி', 'பீ', 'பு', 'பூ', 'பெ', 'பே', 'பை', 'பொ', 'போ']
  },
  {
    id: 'mavargam',
    tamilName: 'ம வர்க்கம்',
    englishName: 'The Ma-group',
    description: 'Verses beginning with ம and combinations.',
    letters: ['ம', 'மா', 'மி', 'மீ', 'மு', 'மூ', 'மெ', 'மே', 'மை', 'மொ', 'மோ']
  },
  {
    id: 'yavargam',
    tamilName: 'ய வர்க்கம் முதல்',
    englishName: 'Final Group',
    description: 'The closing verses — ய, வ, ஐ-, ஒள, ஃ.',
    letters: ['ய', 'வ', 'ஐ', 'ஒள', 'ஃ']
  }
];

const AATHICHUDI_VERSES = [
  // ============================================
  // உயிர் எழுத்து — The Vowels (verses 1-12)
  // ============================================
  {
    num: 1, section: 'uyir', letter: 'அ',
    tamil: "அறம் செய விரும்பு.",
    transliteration: "Aṟam ceya virumpu.",
    english: "Desire to do righteousness.",
    tamilUrai: "அறச் செயல்களைச் செய்வதையே ஒருவன் மனம் ஆர்வத்துடன் விரும்ப வேண்டும். வாழ்வின் அடிப்படை அறம் செய்தலே என்பதே இவ்வுபதேசத்தின் சாரம்.",
    altTranslation: "Let righteousness be the longing of thy heart."
  },
  {
    num: 2, section: 'uyir', letter: 'ஆ',
    tamil: "ஆறுவது சினம்.",
    transliteration: "Āṟuvatu ciṉam.",
    english: "Let anger cool down.",
    tamilUrai: "சினமே, ஆறி அடங்க வேண்டிய ஒன்று. கோபம் தோன்றினால், அதை வளர விடாமல் தணித்துக் கொள்ள வேண்டும்.",
    altTranslation: "Anger is that which should be cooled."
  },
  {
    num: 3, section: 'uyir', letter: 'இ',
    tamil: "இயல்வது கரவேல்.",
    transliteration: "Iyalvatu karavēl.",
    english: "Hide not what thou canst give.",
    tamilUrai: "கொடுக்க இயன்ற பொருளை, மறைத்து வைக்காதே. தம்மால் கொடுக்க முடிந்ததை, கொடுக்க மறுக்காமல் ஈதலே நற்செயல்.",
    altTranslation: "What lies in thy power, conceal not."
  },
  {
    num: 4, section: 'uyir', letter: 'ஈ',
    tamil: "ஈவது விலக்கேல்.",
    transliteration: "Īvatu vilakkēl.",
    english: "Forbid not what is being given.",
    tamilUrai: "பிறர் ஒருவருக்கு ஒன்றை ஈந்து கொண்டிருக்கையில், அதைத் தடுத்து விலக்காதே. பிறரின் தர்மச் செயலை குறைக்கச் செய்வது குற்றம்.",
    altTranslation: "Forbid not the gift another gives."
  },
  {
    num: 5, section: 'uyir', letter: 'உ',
    tamil: "உடையது விளம்பேல்.",
    transliteration: "Uṭaiyatu viḷampēl.",
    english: "Boast not of what thou hast.",
    tamilUrai: "தம்மிடம் உள்ள செல்வம், திறமை, சொத்து — எதையும் பிறரிடம் சொல்லிப் பெருமைப் படாதே. தற்புகழ்ச்சி இழிந்த பண்பாகும்.",
    altTranslation: "Speak not of what thou ownest, in vain pride."
  },
  {
    num: 6, section: 'uyir', letter: 'ஊ',
    tamil: "ஊக்கமது கைவிடேல்.",
    transliteration: "Ūkkamatu kaiviṭēl.",
    english: "Forsake not thy zeal.",
    tamilUrai: "ஊக்கம் என்னும் முயற்சித்தன்மையை, எந்நேரத்திலும் கைவிடாதே. ஊக்கமே வாழ்வின் வளர்ச்சிக்கு அடிப்படையாகும்.",
    altTranslation: "Abandon not the spirit of endeavour."
  },
  {
    num: 7, section: 'uyir', letter: 'எ',
    tamil: "எண் எழுத்து இகழேல்.",
    transliteration: "Eṇ eḻuttu ikaḻēl.",
    english: "Despise not numbers and letters.",
    tamilUrai: "எண் (கணித அறிவு), எழுத்து (கல்வி அறிவு) — இவ்விரண்டையும் ஒரு போதும் இகழாதே. அவையே வாழ்வின் கண்களாய் விளங்குபவை.",
    altTranslation: "Hold not in scorn the lore of number and letter."
  },
  {
    num: 8, section: 'uyir', letter: 'ஏ',
    tamil: "ஏற்பது இகழ்ச்சி.",
    transliteration: "Ēṟpatu ikaḻcci.",
    english: "Receiving (alms) is contemptible.",
    tamilUrai: "மற்றவர்களிடம் கையேந்தி இரந்து பெற்றுக்கொள்வது இழிவான செயல். தன் முயற்சியால் வாழ்க்கை நடத்துவதே மரியாதைக்குரியது.",
    altTranslation: "To beg of others is a shame."
  },
  {
    num: 9, section: 'uyir', letter: 'ஐ',
    tamil: "ஐயம் இட்டு உண்.",
    transliteration: "Aiyam iṭṭu uṇ.",
    english: "Eat after giving alms.",
    tamilUrai: "உண்ண அமரும் முன், வந்த இரப்பவர்க்கு ஒரு பிடி அன்னம் இட்டு, பின்னரே நீ உண். பிறரோடு பகிர்ந்து உண்ணும் மனப்பான்மையே சிறந்த பண்பு.",
    altTranslation: "First share with the needy, then eat thyself."
  },
  {
    num: 10, section: 'uyir', letter: 'ஒ',
    tamil: "ஒப்புரவு ஒழுகு.",
    transliteration: "Oppuravu oḻuku.",
    english: "Live in friendly cooperation with others.",
    tamilUrai: "உலகத்தோடு ஒத்து நடந்து, பிறர்க்கு உதவியாய் இருப்பதை உனது வாழ்க்கை முறையாக மேற்கொள். ஒப்புரவு என்பது சமூகத்தோடு பொருந்திய வாழ்வாகும்.",
    altTranslation: "Walk in harmony with society's good."
  },
  {
    num: 11, section: 'uyir', letter: 'ஓ',
    tamil: "ஓதுவது ஒழியேல்.",
    transliteration: "Ōtuvatu oḻiyēl.",
    english: "Cease not to learn.",
    tamilUrai: "கல்வி கற்றலை, படித்தலை, ஒரு போதும் விட்டுவிடாதே. கற்றல் என்பது வாழ்நாள் முழுவதும் தொடரக் கூடிய தொடர் செயல்பாடு.",
    altTranslation: "Let study and recitation never cease."
  },
  {
    num: 12, section: 'uyir', letter: 'ஔ',
    tamil: "ஔவியம் பேசேல்.",
    transliteration: "Auviyam pēcēl.",
    english: "Speak no malice.",
    tamilUrai: "பொறாமை கொண்டு, பிறருக்கு துன்பம் தரக்கூடிய சொற்களைச் சொல்லாதே. பிறர் மீது குற்றம் சுமத்தும் பேச்சு தீய பண்பாகும்.",
    altTranslation: "Speak no envious or malicious word."
  },

  // ============================================
  // க வர்க்கம் — Ka-group (verses 13-23)
  // ============================================
  {
    num: 13, section: 'kavargam', letter: 'க',
    tamil: "கண்டொன்று சொல்லேல்.",
    transliteration: "Kaṇṭoṉṟu collēl.",
    english: "Say not one thing while thou hast seen another.",
    tamilUrai: "ஒன்றைக் கண்டுவிட்டு, அதை வேறொன்றாக மாற்றிச் சொல்லாதே. பொய் சாட்சி கூறுதல், கண்டதைத் திரித்துக் கூறுதல் — இவை கூடாது.",
    altTranslation: "Bear not false witness, twisting what thine eyes have seen."
  },
  {
    num: 14, section: 'kavargam', letter: 'கா',
    tamil: "காப்பது விரதம்.",
    transliteration: "Kāppatu virtam.",
    english: "Protection (of others) is true vow.",
    tamilUrai: "உயிர்களைக் காப்பாற்றுவதே, மேற்கொள்ளக்கூடிய சிறந்த விரதம். உயர்ந்த தவம் என்பது பிற உயிர்களுக்குப் பாதுகாப்பு அளித்தலே.",
    altTranslation: "True austerity is to give protection."
  },
  {
    num: 15, section: 'kavargam', letter: 'கி',
    tamil: "கிழமைப்பட வாழ்.",
    transliteration: "Kiḻamaippaṭa vāḻ.",
    english: "Live in such wise as becometh thy station.",
    tamilUrai: "உனக்குரிய தகுதிக்கு, உரிமைக்கு ஏற்ற வகையில், கௌரவத்துடன் வாழ்க்கை நடத்து. ஒழுங்கான வாழ்வையே மேற்கொள்ள வேண்டும்.",
    altTranslation: "Live in keeping with thy proper rank and right."
  },
  {
    num: 16, section: 'kavargam', letter: 'கீ',
    tamil: "கீழ்மக்கள் அகல.",
    transliteration: "Kīḻmakkaḷ akala.",
    english: "Keep base men far away.",
    tamilUrai: "தீய பண்புகள் கொண்ட இழிந்த மக்களிடமிருந்து விலகி இரு. அவர்களின் தொடர்பு உன்னைக் கெடுக்கவே செய்யும்.",
    altTranslation: "Distance thyself from men of base nature."
  },
  {
    num: 17, section: 'kavargam', letter: 'கு',
    tamil: "குணமது கைவிடேல்.",
    transliteration: "Kuṇamatu kaiviṭēl.",
    english: "Forsake not virtuous character.",
    tamilUrai: "உன்னிடம் உள்ள நற்குணங்களை, எத்தகைய சூழ்நிலையிலும் கைவிடாதே. குணமே ஒருவனுடைய மதிப்பை நிலைநாட்டுவது.",
    altTranslation: "Cast not aside the virtues of thy nature."
  },
  {
    num: 18, section: 'kavargam', letter: 'கூ',
    tamil: "கூடிப் பிரியேல்.",
    transliteration: "Kūṭip piriyēl.",
    english: "Once united, do not part.",
    tamilUrai: "நண்பர்களோடு, உறவினர்களோடு ஒன்றுபட்ட பின், அவர்களைப் பிரிந்து விடாதே. ஒற்றுமையாக வாழ்வதே மேலானது.",
    altTranslation: "Once thou hast joined, never part again."
  },
  {
    num: 19, section: 'kavargam', letter: 'கெ',
    tamil: "கெடுப்பது ஒழி.",
    transliteration: "Keṭuppatu oḻi.",
    english: "Cease from causing ruin.",
    tamilUrai: "பிறர் வாழ்வையோ, பிறரின் நற்செயலையோ அழிக்க முயலாதே. அழிப்பது தீய பண்பாகும்; அதனை நீ விலக்க வேண்டும்.",
    altTranslation: "Refrain from acts that bring ruin to others."
  },
  {
    num: 20, section: 'kavargam', letter: 'கே',
    tamil: "கேள்வி முயல்.",
    transliteration: "Kēḷvi muyal.",
    english: "Strive after learning by listening.",
    tamilUrai: "அறிஞர்களிடம் கேட்டு, கேள்வி ஞானத்தைப் பெற முயற்சி செய். கேட்டறிதல் அறிவை வளர்க்கும் சிறந்த வழியாகும்.",
    altTranslation: "Pursue knowledge through hearing the wise."
  },
  {
    num: 21, section: 'kavargam', letter: 'கை',
    tamil: "கைவினை கரவேல்.",
    transliteration: "Kaiviṉai karavēl.",
    english: "Conceal not the work of thy hands.",
    tamilUrai: "செய்ய வேண்டிய கைத்தொழிலை, மறைத்துச் சோம்பி இராதே. உழைப்பை உரிய காலத்தில் முழுமையாகச் செய் வேண்டும்.",
    altTranslation: "Hide not nor evade the work appointed for thy hands."
  },
  {
    num: 22, section: 'kavargam', letter: 'கொ',
    tamil: "கொள்ளை விரும்பேல்.",
    transliteration: "Koḷḷai virumpēl.",
    english: "Desire not plunder.",
    tamilUrai: "பிறர் பொருளை கொள்ளையடித்துப் பெற விரும்பாதே. அநீதியான வழியில் செல்வம் ஈட்டுவது பெரும் பாவமாகும்.",
    altTranslation: "Long not for what is taken by force or theft."
  },
  {
    num: 23, section: 'kavargam', letter: 'கோ',
    tamil: "கோதாட்டு ஒழி.",
    transliteration: "Kōtāṭṭu oḻi.",
    english: "Refrain from gambling.",
    tamilUrai: "சூதாட்டத்தில் ஈடுபடாதே. அது செல்வத்தையும், மரியாதையையும், குடும்ப அமைதியையும் ஒருசேர அழிக்கும் கொடிய பழக்கம்.",
    altTranslation: "Renounce the gambling that destroys all good."
  },

  // ============================================
  // ச வர்க்கம் — Cha-group (verses 24-32)
  // ============================================
  {
    num: 24, section: 'savargam', letter: 'ச',
    tamil: "சக்கர நெறி நில்.",
    transliteration: "Cakkara neṟi nil.",
    english: "Stand within the path of the king's command.",
    tamilUrai: "அரசின் ஆட்சி வழியிலும், சட்ட நெறிமுறையிலும் நின்று வாழ். ஒழுக்க நெறி தவறி நடவாதே.",
    altTranslation: "Abide by the law and rule of the realm."
  },
  {
    num: 25, section: 'savargam', letter: 'சா',
    tamil: "சான்றோர் இனத்து இரு.",
    transliteration: "Cāṉṟōr iṉattu iru.",
    english: "Dwell among the wise and noble.",
    tamilUrai: "அறிவும், ஒழுக்கமும், பண்பும் உடைய பெரியவர்களுடன் சேர்ந்து வாழ். அவர்களின் சேர்க்கையால் உனக்கும் நல்ல பண்புகள் வருவது உறுதி.",
    altTranslation: "Keep company with men of wisdom and worth."
  },
  {
    num: 26, section: 'savargam', letter: 'சி',
    tamil: "சித்திரம் பேசேல்.",
    transliteration: "Cittiram pēcēl.",
    english: "Speak no painted (deceitful) words.",
    tamilUrai: "வெளிப்பார்வைக்கு அழகாகத் தோன்றும், ஆனால் உள்ளுக்குள் வஞ்சகம் கொண்ட வார்த்தைகளைப் பேசாதே. நேர்மையான பேச்சே பெருமைக்குரியது.",
    altTranslation: "Speak no fair-seeming but deceitful words."
  },
  {
    num: 27, section: 'savargam', letter: 'சீ',
    tamil: "சீர்மை மறவேல்.",
    transliteration: "Cīrmai maṟavēl.",
    english: "Forget not honour and dignity.",
    tamilUrai: "உனக்குரிய புகழ், மரியாதை, கௌரவம் ஆகியவற்றை மறந்து செயற்படாதே. சீர்மையே ஒருவனுடைய அடையாளம்.",
    altTranslation: "Never forget what becomes thy honour."
  },
  {
    num: 28, section: 'savargam', letter: 'சு',
    tamil: "சுளிக்கச் சொல்லேல்.",
    transliteration: "Cuḷikkac collēl.",
    english: "Speak not so as to wound.",
    tamilUrai: "பிறருடைய மனத்தை வருந்தும்படியாக பேசாதே. கடுஞ்சொற்கள் பகையை வளர்க்கும்; இனிய சொற்களே நட்பை உருவாக்கும்.",
    altTranslation: "Use not words that pierce another's heart."
  },
  {
    num: 29, section: 'savargam', letter: 'சூ',
    tamil: "சூது விரும்பேல்.",
    transliteration: "Cūtu virumpēl.",
    english: "Crave not for gambling.",
    tamilUrai: "சூதாட்டத்தில் வெற்றி கிடைக்கும் என்ற நம்பிக்கையில் ஈடுபடாதே. அது உன்னை கடனாளியாகவும், தீய நண்பர்களின் தோழனாகவும் ஆக்கும்.",
    altTranslation: "Set not thy heart upon games of chance."
  },
  {
    num: 30, section: 'savargam', letter: 'செ',
    tamil: "செய்வன திருந்தச் செய்.",
    transliteration: "Ceyvaṉa tiruntac cey.",
    english: "Whatsoever thou doest, do it perfectly.",
    tamilUrai: "எடுத்துக் கொண்ட வேலையை, முழுமையாகவும், செம்மையாகவும், குற்றமின்றியும் செய்து முடிக்க வேண்டும். அரைகுறையாக விடாதே.",
    altTranslation: "Do every task to its perfect completion."
  },
  {
    num: 31, section: 'savargam', letter: 'சே',
    tamil: "சேரிடம் அறிந்து சேர்.",
    transliteration: "Cēriṭam aṟintu cēr.",
    english: "Know the place ere thou minglest there.",
    tamilUrai: "நீ சேரப்போகும் இடத்தின் தன்மையை, அங்குள்ளவர்களின் இயல்பை முதலில் ஆராய்ந்து தெரிந்துகொண்ட பின்னரே, அந்த இடத்தில் சேர்.",
    altTranslation: "Discern the company before thou joinest it."
  },
  {
    num: 32, section: 'savargam', letter: 'சை',
    tamil: "சையெனத் திரியேல்.",
    transliteration: "Caiyeṉat tiriyēl.",
    english: "Wander not in idle reverie.",
    tamilUrai: "எந்தக் காரணமும் இல்லாமல், சும்மா திரியாதே. ஒவ்வொரு அசைவுக்கும் ஒரு நோக்கம் இருக்க வேண்டும்.",
    altTranslation: "Roam not aimlessly in thoughtless fancy."
  },

  // ============================================
  // (continuing — note: traditional editions vary on ordering after this point;
  // this follows the most commonly circulated arrangement)
  // ============================================
  {
    num: 33, section: 'savargam', letter: 'சொ',
    tamil: "சொற்சோர்வு படேல்.",
    transliteration: "Coṟcōrvu paṭēl.",
    english: "Let not thy speech grow weak or careless.",
    tamilUrai: "பேசும்போது வாய் தவறி, பிறக்கும் தவறான சொற்களை உரைக்காதே. உன் சொற்கள் தெளிவாகவும் சீராகவும் இருக்க வேண்டும்.",
    altTranslation: "Suffer no slip nor laxity in speech."
  },
  {
    num: 34, section: 'savargam', letter: 'சோ',
    tamil: "சோம்பித் திரியேல்.",
    transliteration: "Cōmpit tiriyēl.",
    english: "Wander not in sloth.",
    tamilUrai: "சோம்பேறித்தனத்துடன் வேலை இல்லாமல் திரியாதே. சோம்பல் நற்செயல்களை அழிக்கும், வறுமைக்கு வழிவகுக்கும்.",
    altTranslation: "Indulge not in idle, slothful wandering."
  },

  // ============================================
  // த வர்க்கம் — Tha-group (verses 35-43)
  // ============================================
  {
    num: 35, section: 'tavargam', letter: 'த',
    tamil: "தக்கோன் எனத்திரி.",
    transliteration: "Takkōṉ eṉattiri.",
    english: "Conduct thyself as a worthy person.",
    tamilUrai: "தகுதி வாய்ந்த ஒருவன் என்று பிறர் கூறுமாறு, உன் நடத்தை, பேச்சு, செயல் இவற்றை அமைத்துக்கொள். தகுதியே மரியாதை அளிக்கும்.",
    altTranslation: "Walk in such wise that all may call thee worthy."
  },
  {
    num: 36, section: 'tavargam', letter: 'தா',
    tamil: "தானமது விரும்பு.",
    transliteration: "Tāṉamatu virumpu.",
    english: "Long to give in charity.",
    tamilUrai: "பிறருக்கு ஈதலை, தர்மம் செய்தலை, உனது மனம் விரும்பும்படி வளர்த்துக் கொள். தானம் பெரும் புண்ணியத்தை ஈட்டித் தரும்.",
    altTranslation: "Let thy heart desire to give freely to others."
  },
  {
    num: 37, section: 'tavargam', letter: 'தி',
    tamil: "திருமாலுக்கு அடிமை செய்.",
    transliteration: "Tirumālukku aṭimai cey.",
    english: "Serve the Lord (Vishnu).",
    tamilUrai: "திருமாலின் (இறைவனின்) அடியவனாய் இரு; இறைப் பணியில் ஈடுபடு. தெய்வ பக்தி வாழ்வுக்கு உறுதியான அடிப்படையாகும்.",
    altTranslation: "Yield thyself in service to the Divine."
  },
  {
    num: 38, section: 'tavargam', letter: 'தீ',
    tamil: "தீவினை அகற்று.",
    transliteration: "Tīviṉai akaṟṟu.",
    english: "Drive away evil deeds.",
    tamilUrai: "தீய செயல்களை செய்வதை விட்டுவிடு; ஏற்கனவே செய்த தீவினையின் விளைவுகளையும் நற்செயலால் களைய முயற்சி செய்.",
    altTranslation: "Cast away evil deeds from thy life."
  },
  {
    num: 39, section: 'tavargam', letter: 'து',
    tamil: "துன்பத்திற்கு இடம் கொடேல்.",
    transliteration: "Tuṉpattiṟku iṭam koṭēl.",
    english: "Give no place to misery.",
    tamilUrai: "துன்பத்திற்கு வாயில் திறந்து அதை வரவழைக்காதே. தீய பழக்கங்கள், சோம்பல், ஒழுக்கக்கேடு — இவையெல்லாம் துன்பத்திற்கு இடம் கொடுப்பவை.",
    altTranslation: "Open no door for sorrow to enter."
  },
  {
    num: 40, section: 'tavargam', letter: 'தூ',
    tamil: "தூக்கி வினை செய்.",
    transliteration: "Tūkki viṉai cey.",
    english: "Weigh thy actions before performing them.",
    tamilUrai: "ஒரு செயலைச் செய்வதற்கு முன், அதன் விளைவுகளை, நன்மை-தீமைகளை எடைபோட்டு பின்னரே செயற்படு. சிந்தனையற்ற செயலே தீமை விளைவிக்கும்.",
    altTranslation: "Weigh well each act before thou doest it."
  },
  {
    num: 41, section: 'tavargam', letter: 'தெ',
    tamil: "தெய்வம் இகழேல்.",
    transliteration: "Teyvam ikaḻēl.",
    english: "Mock not the divine.",
    tamilUrai: "எந்த தெய்வத்தையும், எந்த வழிபாட்டு முறையையும் நகைக்காதே, இகழ்ந்து பேசாதே. தெய்வப் பற்று மனிதனின் ஆன்மாவை மேலெழுப்பும்.",
    altTranslation: "Speak not in scorn of God or sacred faith."
  },
  {
    num: 42, section: 'tavargam', letter: 'தே',
    tamil: "தேசத்தோடு ஒத்து வாழ்.",
    transliteration: "Tēcattōṭu ottu vāḻ.",
    english: "Live in harmony with thy land.",
    tamilUrai: "நீ வாழும் நாட்டின் கலாச்சாரம், சட்டம், மக்கள் வழக்கம் ஆகியவற்றோடு ஒத்துப்போய் வாழ். தேசத்துடன் முரண்பட்டு வாழ்வது சிக்கல் தரும்.",
    altTranslation: "Live in accord with the customs of thy land."
  },
  {
    num: 43, section: 'tavargam', letter: 'தை',
    tamil: "தையல் சொல் கேளேல்.",
    transliteration: "Taiyal col kēḷēl.",
    english: "Listen not to the sweet words of the seductress.",
    tamilUrai: "நெறிமுறை மீறிய விலைமாதர்களின் வஞ்சக சொற்களைக் கேட்டு கவரப்படாதே. அத்தகைய சொற்கள் ஒருவனை சீர்கேட்டிற்கு வழி நடத்தும்.",
    altTranslation: "Heed not the cunning words of the wanton."
  },

  // ============================================
  // ந வர்க்கம் — Na-group (verses 44-52)
  // ============================================
  {
    num: 44, section: 'navargam', letter: 'தொ',
    tamil: "தொன்மை மறவேல்.",
    transliteration: "Toṉmai maṟavēl.",
    english: "Forget not the ancient ways.",
    tamilUrai: "உனது மரபு, பாரம்பரியம், முன்னோர்கள் வழி வந்த நற்செயல்கள் — இவற்றை மறந்துவிடாதே. முதியோர் வழி காட்டிய பாதை மேலானது.",
    altTranslation: "Forget not the heritage of old."
  },
  {
    num: 45, section: 'navargam', letter: 'தோ',
    tamil: "தோற்பன தொடரேல்.",
    transliteration: "Tōṟpaṉa toṭarēl.",
    english: "Pursue not what will end in defeat.",
    tamilUrai: "முடிவில் தோல்வியில் முடியக் கூடிய காரியங்களைத் தொடர்ந்து செய்யாதே. பயனற்ற முயற்சிகளில் உன் நேரத்தை வீணாக்காதே.",
    altTranslation: "Persist not in what is doomed to fail."
  },
  {
    num: 46, section: 'navargam', letter: 'ந',
    tamil: "நன்றி மறவேல்.",
    transliteration: "Naṉṟi maṟavēl.",
    english: "Forget not gratitude.",
    tamilUrai: "உனக்கு உதவியவர், ஒரு முறை சிறு உதவி செய்தவர் — அவர்களின் உதவியை மறந்துவிடாதே. நன்றி மறப்பது மிகப் பெரிய குற்றம்.",
    altTranslation: "Forget not the kindness shown to thee."
  },
  {
    num: 47, section: 'navargam', letter: 'நா',
    tamil: "நாடு ஒப்பன செய்.",
    transliteration: "Nāṭu oppaṉa cey.",
    english: "Do that which thy land approves.",
    tamilUrai: "உன் நாட்டின் மக்களும், அறிஞர்களும் ஏற்றுக் கொள்ளக்கூடிய நற்செயல்களையே நீ செய். சமூகம் ஒப்புதல் தராத செயல்களைத் தவிர்.",
    altTranslation: "Do what is approved by thy own people."
  },
  {
    num: 48, section: 'navargam', letter: 'நி',
    tamil: "நிலையில் பிரியேல்.",
    transliteration: "Nilaiyil piriyēl.",
    english: "Quit not thy proper position.",
    tamilUrai: "உனக்குரிய தகுதி நிலையில், கடமை நிலையில் உறுதியாக இருந்து செயல்படு. அதிலிருந்து விலகாதே.",
    altTranslation: "Stay firm in thy rightful place and duty."
  },
  {
    num: 49, section: 'navargam', letter: 'நீ',
    tamil: "நீர் விளையாடேல்.",
    transliteration: "Nīr viḷaiyāṭēl.",
    english: "Play not in deep waters.",
    tamilUrai: "ஆற்றில், கடலில், ஆழமான நீரில் ஆட்டத்திற்காக இறங்காதே. நீரால் ஏற்படக்கூடிய ஆபத்தை எண்ணி விழிப்புடன் இரு.",
    altTranslation: "Sport not heedlessly in deep waters."
  },
  {
    num: 50, section: 'navargam', letter: 'நு',
    tamil: "நுண்மை நுகரேல்.",
    transliteration: "Nuṇmai nukarēl.",
    english: "Indulge not in subtle (refined) excesses.",
    tamilUrai: "மிக நுட்பமான, அளவு மீறிய விழைவுகளில், சிற்றின்பங்களில் ஈடுபடாதே. அவை வளர்ந்து உன்னையே ஆட்கொண்டுவிடும்.",
    altTranslation: "Indulge not in refined excesses or vain pleasures."
  },
  {
    num: 51, section: 'navargam', letter: 'நூ',
    tamil: "நூல் பல கல்.",
    transliteration: "Nūl pala kal.",
    english: "Study many books.",
    tamilUrai: "ஒரே நூலைப் படித்து திருப்தியடையாதே; பல துறை சார்ந்த பல நூல்களைப் படி. பல்வகை அறிவே ஒருவனை முழுமை ஆக்கும்.",
    altTranslation: "Study many books, broaden thy learning."
  },
  {
    num: 52, section: 'navargam', letter: 'நெ',
    tamil: "நெற்பயிர் விளைவு செய்.",
    transliteration: "Neṟpayir viḷaivu cey.",
    english: "Cultivate paddy and grain.",
    tamilUrai: "நெல் முதலான பயிர்களை விளைவித்து உணவுப் பொருள்கள் உற்பத்தி செய். உழவே உலகின் ஆதார தொழிலாகும்.",
    altTranslation: "Cultivate the soil; grow the food of life."
  },

  // ============================================
  // ந continued + ப வர்க்கம் — Pa-group
  // ============================================
  {
    num: 53, section: 'navargam', letter: 'நே',
    tamil: "நேர்பட ஒழுகு.",
    transliteration: "Nērpaṭa oḻuku.",
    english: "Walk straightforwardly.",
    tamilUrai: "வஞ்சகம் இல்லாமல், நேர்மையான முறையில், ஒழுங்காக நடந்து கொள். உன் எல்லாச் செயல்களிலும் நேர்மை வெளிப்பட வேண்டும்.",
    altTranslation: "Conduct thyself with uprightness in all things."
  },
  {
    num: 54, section: 'navargam', letter: 'நை',
    tamil: "நைவினை நணுகேல்.",
    transliteration: "Naiviṉai naṇukēl.",
    english: "Approach not deeds that lead to ruin.",
    tamilUrai: "உன்னை மெலிய வைக்கும், அழிக்கும் தீய செயல்களின் அருகில் கூடப் போகாதே. அத்தகைய செயல்களை முற்றிலும் தவிர்.",
    altTranslation: "Come not near to deeds that bring decay."
  },
  {
    num: 55, section: 'navargam', letter: 'நொ',
    tamil: "நொய்ய உரையேல்.",
    transliteration: "Noyya uraiyēl.",
    english: "Speak not lightly or trivially.",
    tamilUrai: "உள்ளுக்குள்ளே ஆழமான பொருள் இல்லாத, கனமற்ற, அற்பமான வார்த்தைகளை பேசாதே. உன் பேச்சில் ஆழமும் சாரமும் இருக்க வேண்டும்.",
    altTranslation: "Use no light or worthless speech."
  },
  {
    num: 56, section: 'navargam', letter: 'நோ',
    tamil: "நோய்க்கு இடம் கொடேல்.",
    transliteration: "Nōykku iṭam koṭēl.",
    english: "Give no place for sickness.",
    tamilUrai: "தீய பழக்கங்கள், அளவுக்கு மீறிய உணவு, தூய்மையின்மை — இவற்றால் உனக்கு நோய் வராதவாறு கவனமாக இரு. உடல் ஆரோக்கியமே வாழ்வின் அடிப்படை.",
    altTranslation: "Make no opening for disease to enter."
  },
  {
    num: 57, section: 'pavargam', letter: 'ப',
    tamil: "பழிப்பன பகரேல்.",
    transliteration: "Paḻippaṉa pakarēl.",
    english: "Speak not blameworthy words.",
    tamilUrai: "பிறர் உன்னை குற்றம் சாட்டக்கூடிய, பழிக்கத் தக்க வார்த்தைகளைப் பேசாதே. பேசுவதற்கு முன் சிந்தித்துப் பேசு.",
    altTranslation: "Utter no words that bring blame upon thee."
  },
  {
    num: 58, section: 'pavargam', letter: 'பா',
    tamil: "பாம்பொடு பழகேல்.",
    transliteration: "Pāmpoṭu paḻakēl.",
    english: "Befriend not a serpent.",
    tamilUrai: "பாம்பு போன்ற, எப்போது வேண்டுமானாலும் தீங்கு செய்யக் கூடிய தீய தன்மையுடைய மக்களோடு பழக்கம் கொள்ளாதே. ஆபத்தான தோழமை அழிவு தரும்.",
    altTranslation: "Make no friendship with the treacherous."
  },
  {
    num: 59, section: 'pavargam', letter: 'பி',
    tamil: "பிழைபடச் சொல்லேல்.",
    transliteration: "Piḻaipaṭac collēl.",
    english: "Say nothing blameworthy.",
    tamilUrai: "தவறான முறையில், குற்றம் ஏற்படும்படியான பேச்சு பேசாதே. உன் ஒவ்வொரு வார்த்தையும் சரியாகவும் பொருத்தமாகவும் இருக்க வேண்டும்.",
    altTranslation: "Speak not in ways that lead to error."
  },
  {
    num: 60, section: 'pavargam', letter: 'பீ',
    tamil: "பீடு பெற நில்.",
    transliteration: "Pīṭu peṟa nil.",
    english: "Stand for greatness.",
    tamilUrai: "பெருமையான, மேன்மையான நிலையை அடையும் வகையில் நிலை பெற்று வாழ். சாதாரண நிலையில் திருப்தியடையாதே.",
    altTranslation: "Stand for nobility, attain greatness."
  },
  {
    num: 61, section: 'pavargam', letter: 'பு',
    tamil: "புகழ்ந்தாரைப் போற்றி வாழ்.",
    transliteration: "Pukaḻntāraip pōṟṟi vāḻ.",
    english: "Live honoring those who have praised thee.",
    tamilUrai: "உன்னை மதித்து, புகழ்ந்து பேசியவர்களை, அவர்களையே மதித்து போற்றி வாழ். மரியாதைக்கு மரியாதை திருப்பித் தருதல் ஆகும்.",
    altTranslation: "Honour those who have honoured thee."
  },
  {
    num: 62, section: 'pavargam', letter: 'பூ',
    tamil: "பூமி திருத்தி உண்.",
    transliteration: "Pūmi tirutti uṇ.",
    english: "Cultivate the earth, then eat.",
    tamilUrai: "உனது சொந்த உழைப்பால், நிலத்தில் பயிரிட்டு, அதன் விளைச்சலால் வாழ். யாரிடமும் கையேந்தாமல் சுயமாக உழைத்து உண்ணுவதே மேலானது.",
    altTranslation: "Till the soil, eat by thine own labour."
  },
  {
    num: 63, section: 'pavargam', letter: 'பெ',
    tamil: "பெரியாரைத் துணைக்கொள்.",
    transliteration: "Periyārait tuṇaikkoḷ.",
    english: "Take the great as thy support.",
    tamilUrai: "அறிவில் பெரியவர்களை, பண்பில் சிறந்தவர்களை, உன் வாழ்வின் ஆதரவாய், ஆலோசகர்களாய் வைத்துக்கொள். அவர்களின் வழிகாட்டுதல் தேவை.",
    altTranslation: "Make the great and wise thy companions."
  },
  {
    num: 64, section: 'pavargam', letter: 'பே',
    tamil: "பேதைமை அகற்று.",
    transliteration: "Pētaimai akaṟṟu.",
    english: "Drive away ignorance.",
    tamilUrai: "உன்னிடம் உள்ள மூடத்தனத்தை, அறியாமையை அகற்று. கற்றலின் வழியாக அறிவை வளர்த்துக்கொள்; பேதைமை வாழ்வின் முதல் எதிரியாகும்.",
    altTranslation: "Cast away ignorance from thy mind."
  },
  {
    num: 65, section: 'pavargam', letter: 'பை',
    tamil: "பையலோடு இணங்கேல்.",
    transliteration: "Paiyalōṭu iṇaṅkēl.",
    english: "Consort not with the immature.",
    tamilUrai: "முதிர்ச்சியற்ற, அற்ப அறிவினர், சிறுபிள்ளைத் தனமாக நடப்பவர்களோடு, நீ ஒத்துப் போய் நட்பு கொள்ளாதே.",
    altTranslation: "Mingle not with those of childish ways."
  },
  {
    num: 66, section: 'pavargam', letter: 'பொ',
    tamil: "பொருள்தனைப் போற்றி வாழ்.",
    transliteration: "Poruḷtaṉaip pōṟṟi vāḻ.",
    english: "Cherish thy wealth and live by it.",
    tamilUrai: "உனது பொருளை, செல்வத்தை வீணாய் செலவிடாமல், காப்பாற்றி, பாதுகாத்து, அதன் மூலம் வாழ்க்கையை நடத்து. செல்வம் வாழ்வுக்கு முக்கிய துணை.",
    altTranslation: "Guard thy wealth and live with care."
  },
  {
    num: 67, section: 'pavargam', letter: 'போ',
    tamil: "போர் தொழில் புரியேல்.",
    transliteration: "Pōr toḻil puriyēl.",
    english: "Engage not in warlike trade.",
    tamilUrai: "சண்டை சச்சரவுகளில் ஈடுபட்டு, பகை வளர்க்கும் தொழிலில் ஈடுபடாதே. அமைதியான வாழ்க்கை மேலானது.",
    altTranslation: "Take not up the trade of strife and battle."
  },

  // ============================================
  // ம வர்க்கம் — Ma-group
  // ============================================
  {
    num: 68, section: 'mavargam', letter: 'ம',
    tamil: "மனம் தடுமாறேல்.",
    transliteration: "Maṉam taṭumāṟēl.",
    english: "Let not thy mind waver.",
    tamilUrai: "உன் மனம் ஒரு விஷயத்தில் இருந்து இன்னொரு விஷயத்திற்கு குழப்பத்துடன் அலையாமல், ஒரே நிலையில் உறுதியாக இருக்கட்டும். மன உறுதியே வெற்றிக்கு வழி.",
    altTranslation: "Let thy mind not waver in confusion."
  },
  {
    num: 69, section: 'mavargam', letter: 'மா',
    tamil: "மாற்றானுக்கு இடம் கொடேல்.",
    transliteration: "Māṟṟāṉukku iṭam koṭēl.",
    english: "Yield no place to thy enemy.",
    tamilUrai: "பகைவருக்கு உன் வாழ்க்கையில், உன் இடத்தில், உன் செல்வத்தில் வாய்ப்பு அளிக்காதே. அவர்கள் வந்து சேர்ந்தால், உன் நிலை சீர்குலையும்.",
    altTranslation: "Give no foothold to thy adversary."
  },
  {
    num: 70, section: 'mavargam', letter: 'மி',
    tamil: "மிகைபடச் சொல்லேல்.",
    transliteration: "Mikaipaṭac collēl.",
    english: "Speak not in exaggeration.",
    tamilUrai: "உண்மையை விட மிகுதியாக ஊதிப் பெருக்கிச் சொல்லாதே. அளவு மீறிய பெருமை, பழிக்கப்படத் தக்கதாகும்.",
    altTranslation: "Inflate not thy words beyond the truth."
  },
  {
    num: 71, section: 'mavargam', letter: 'மீ',
    tamil: "மீதூண் விரும்பேல்.",
    transliteration: "Mītūṇ virumpēl.",
    english: "Desire not excess in food.",
    tamilUrai: "தேவைக்கு மீறிய அதிக உணவை விரும்பாதே. அளவாக உண்பதே ஆரோக்கியத்திற்கும், தெளிவான மனநிலைக்கும் வழி.",
    altTranslation: "Crave not for over-abundant food."
  },
  {
    num: 72, section: 'mavargam', letter: 'மு',
    tamil: "முனைமுகத்து நில்லேல்.",
    transliteration: "Muṉaimukattu nillēl.",
    english: "Stand not in the front of the battle line.",
    tamilUrai: "வேண்டாத போர் சச்சரவுகளில், போரின் முன்னணியில் நின்று உன்னை ஆபத்துக்கு உள்ளாக்காதே. தேவையற்ற துணிச்சல் காட்டுவதைத் தவிர்.",
    altTranslation: "Stand not in the battle's foremost line."
  },
  {
    num: 73, section: 'mavargam', letter: 'மூ',
    tamil: "மூர்க்கரோடு இணங்கேல்.",
    transliteration: "Mūrkkarōṭu iṇaṅkēl.",
    english: "Consort not with the foolish or violent.",
    tamilUrai: "அறிவில்லாத மூடர்கள், சுபாவத்தில் கொடியவர்கள், கடின இதயம் கொண்டவர்கள் — இவர்களோடு நீ நெருக்கம் கொள்ளாதே. அவர்களின் தோழமை அழிவை அளிக்கும்.",
    altTranslation: "Mix not with the violent or foolish-hearted."
  },
  {
    num: 74, section: 'mavargam', letter: 'மெ',
    tamil: "மெல்லினல்லாள் தோள் சேர்.",
    transliteration: "Melliṉallāḷ tōḷ cēr.",
    english: "Embrace only the soft-natured virtuous wife.",
    tamilUrai: "மென்மையான பண்பும், நற்குணமும் கொண்ட மனைவியின் தோள்களையே நீ சேர். வாழ்க்கைத் துணை நற்பண்புடையவராய் இருப்பது சிறந்தது.",
    altTranslation: "Cleave to the gentle and virtuous spouse."
  },
  {
    num: 75, section: 'mavargam', letter: 'மே',
    tamil: "மேன்மக்கள் சொல் கேள்.",
    transliteration: "Mēṉmakkaḷ col kēḷ.",
    english: "Listen to the words of noble persons.",
    tamilUrai: "பண்பாடும், அறிவும், தகுதியும் கொண்ட மேலானவர்களின் பேச்சுகளை, அறிவுரைகளை கவனமாகக் கேள். அவர்களின் சொற்களே வாழ்வை வளப்படுத்தும்.",
    altTranslation: "Heed the speech of those who are noble."
  },
  {
    num: 76, section: 'mavargam', letter: 'மை',
    tamil: "மைவிழியார் மனை அகல்.",
    transliteration: "Maiviḻiyār maṉai akal.",
    english: "Avoid the dwelling of the temptress.",
    tamilUrai: "மை எழுதிய அழகிய கண்களைக் கொண்ட விலைமாதர்களின் வீட்டை, இடத்தை விட்டு விலகி நில். அத்தகைய இடங்கள் ஒருவனை அழிக்க வல்லவை.",
    altTranslation: "Keep far from the courtesan's house."
  },
  {
    num: 77, section: 'mavargam', letter: 'மொ',
    tamil: "மொழிவது அறமொழி.",
    transliteration: "Moḻivatu aṟamoḻi.",
    english: "Let what thou speakest be virtuous speech.",
    tamilUrai: "நீ பேசும் ஒவ்வொரு வார்த்தையும், அற நெறிக்கு உகந்ததாக, பிறருக்கு நன்மை செய்வதாக இருக்கட்டும்.",
    altTranslation: "Let thy words be words of virtue."
  },
  {
    num: 78, section: 'mavargam', letter: 'மோ',
    tamil: "மோகத்தை முனி.",
    transliteration: "Mōkattai muṉi.",
    english: "Hate lustful attachment.",
    tamilUrai: "அளவுக்கதிகமான விழைவு, காமம், பொருள்மீது பற்று — இவையெல்லாம் மோகம். இவற்றை வெறுத்து, தள்ளிவை. மோகம் மனிதனை அழிக்கும்.",
    altTranslation: "Hate the lust that bindeth the soul."
  },

  // ============================================
  // ய வர்க்கம் முதல் — Final group (verses 79-109)
  // ============================================
  {
    num: 79, section: 'yavargam', letter: 'ய',
    tamil: "யவ்வனம் மறவேல்.",
    transliteration: "Yavvaṉam maṟavēl.",
    english: "Forget not (the lessons of) youth.",
    tamilUrai: "இளமை காலத்தின் சக்தி, செயல்திறன், கற்றுக் கொள்ளும் தன்மை — இவற்றை மறந்துவிடாதே. முதிர்ந்த காலத்திலும் இளமைச் சுறுசுறுப்பை வளர்த்துக் கொள்.",
    altTranslation: "Forget not the lessons learned in youth."
  },
  {
    num: 80, section: 'yavargam', letter: 'ர',
    tamil: "ரஞ்சனை மொழியேல்.",
    transliteration: "Rañcaṉai moḻiyēl.",
    english: "Use no flattering speech.",
    tamilUrai: "பிறரை மகிழ்விப்பதற்காக மட்டும், உண்மையற்ற, மிக நயமான சொற்களை பேசாதே. நயவஞ்சகமான பேச்சு பின்னாளில் தீய பயன்களைக் கொடுக்கும்.",
    altTranslation: "Use no honeyed flattery in thy speech."
  },
  {
    num: 81, section: 'yavargam', letter: 'ல',
    tamil: "லஞ்சம் கொளேல்.",
    transliteration: "Lañcam koḻēl.",
    english: "Take no bribe.",
    tamilUrai: "உனது அதிகாரத்தை, பதவியை பயன்படுத்தி, பிறரிடம் இருந்து லஞ்சம் வாங்காதே. லஞ்சம் கொள்வது நாட்டையும், உன்னையும் சேர்த்து அழிக்கும்.",
    altTranslation: "Receive no bribe in any form."
  },
  {
    num: 82, section: 'yavargam', letter: 'வ',
    tamil: "வஞ்சகம் பேசேல்.",
    transliteration: "Vañcakam pēcēl.",
    english: "Speak no deceitful words.",
    tamilUrai: "உள்ளுக்குள் ஒரு எண்ணமும், வெளியில் வேறு ஒரு பேச்சும் இல்லாமல், நேர்மையான பேச்சு உரை. வஞ்சகச் சொற்கள் நம்பிக்கையை உடைக்கும்.",
    altTranslation: "Use no words of treachery."
  },
  {
    num: 83, section: 'yavargam', letter: 'ழ',
    tamil: "ழகரம் பேதியேல்.",
    transliteration: "Ḻakaram pētiyēl.",
    english: "Distort not the letter ழ (zha).",
    tamilUrai: "தமிழுக்கே சிறப்பாக உரிய ழகர ஒலியை, மற்ற எழுத்துகளுடன் கலந்து, தவறான ஒலி தர விடாதே. தாய்மொழியின் சொல் உச்சரிப்பு தூய்மை மிக முக்கியம்.",
    altTranslation: "Misuse not the proper letters of thy tongue."
  },
  {
    num: 84, section: 'yavargam', letter: 'ள',
    tamil: "ளகார மறவேல்.",
    transliteration: "Ḷakāra maṟavēl.",
    english: "Forget not the letter ள (la).",
    tamilUrai: "தமிழ் ளகார ஒலியை மறந்து, தவறான உச்சரிப்பு செய்யாதே. ஒவ்வொரு எழுத்தும், ஒலியும் அதற்கே உரிய இடத்தில் சரியாக வர வேண்டும்.",
    altTranslation: "Forget not the proper sound of thy letters."
  },
  {
    num: 85, section: 'yavargam', letter: 'ற',
    tamil: "றஞ்சலை மொழியேல்.",
    transliteration: "Ṟañcalai moḻiyēl.",
    english: "Murmur not in cowardice.",
    tamilUrai: "பயத்தினால், சண்டை வேண்டாம் என்று, மென்மையாக புலம்பாதே. பேச வேண்டுமானால், தெளிவாக, துணிச்சலுடன் பேசு.",
    altTranslation: "Mutter not timorously, but speak with strength."
  },
  {
    num: 86, section: 'yavargam', letter: 'ன',
    tamil: "னவ்வென்று உரையேல்.",
    transliteration: "Ṉavveṉṟu uraiyēl.",
    english: "Speak not slurringly.",
    tamilUrai: "உச்சரிப்பு சரியாக இல்லாமல், மழுப்பலாக, தெளிவின்றி பேசாதே. ஒவ்வொரு எழுத்தும் தெளிவாக ஒலிக்க வேண்டும்.",
    altTranslation: "Speak not blurredly nor with slurred tongue."
  },

  // The traditional aathichudi continues with verses based on additional letter forms.
  // These complete the work to 109 verses.
  {
    num: 87, section: 'yavargam', letter: 'அ²',
    tamil: "அன்னையும் பிதாவும் முன்னறி தெய்வம்.",
    transliteration: "Aṉṉaiyum pitāvum muṉṉaṟi teyvam.",
    english: "Mother and father are the first known divinity.",
    tamilUrai: "உனது தாயும், தந்தையும், நீ முதலில் அறிய வேண்டிய தெய்வங்கள் ஆவர். அவர்களை மதித்து, பணிந்து வாழ். அவர்களே உன் வாழ்வுக்கு கடவுள் போன்றவர்.",
    altTranslation: "Mother and father are the gods first to be known."
  },
  {
    num: 88, section: 'yavargam', letter: 'ஆ²',
    tamil: "ஆலயம் தொழுவது சாலவும் நன்று.",
    transliteration: "Ālayam toḻuvatu cālavum naṉṟu.",
    english: "It is right and good to worship at the temple.",
    tamilUrai: "ஆலயங்களுக்கு சென்று தெய்வத்தை வழிபடுவது மிகவும் நற்செயல். அது மனத்தை சாந்தியடையச் செய்யும், நற்பண்புகளை வளர்க்கும்.",
    altTranslation: "Worship at the temple — that is wholly good."
  },
  {
    num: 89, section: 'yavargam', letter: 'இ²',
    tamil: "இல்லறம் அல்லது நல்லறம் அன்று.",
    transliteration: "Illaṟam allatu nallaṟam aṉṟu.",
    english: "Without family virtue, no other virtue is good.",
    tamilUrai: "குடும்ப வாழ்க்கை நெறிமுறையாக நடத்தப்படாமல் வேறு எந்த அறச்செயலும் முழுமையாகாது. இல்லற நெறியே அறங்களில் முதன்மையானது.",
    altTranslation: "Without the household virtue, no virtue is true."
  },
  {
    num: 90, section: 'yavargam', letter: 'ஈ²',
    tamil: "ஈயார் தேட்டை தீயார் கொள்வர்.",
    transliteration: "Īyār tēṭṭai tīyār koḷvar.",
    english: "What the miserly amass, the wicked seize.",
    tamilUrai: "பிறருக்கு கொடுக்காமல், கஞ்சத்தனத்தோடு செல்வத்தைக் குவிப்பவர்களின் சொத்தை, தீயவர்களே வந்து சேர்த்துக் கொள்வர். தானம் செய்யாத செல்வம் வீணே போகும்.",
    altTranslation: "The miser's hoard becomes the wicked's prize."
  },
  {
    num: 91, section: 'yavargam', letter: 'உ²',
    tamil: "உண்டி சுருங்குதல் பெண்டிர்க்கு அழகு.",
    transliteration: "Uṇṭi curuṅkutal peṇṭirkku aḻaku.",
    english: "Restraint in eating becomes a woman.",
    tamilUrai: "அளவாக உண்ணும் பழக்கம், பெண்களுக்கு அழகாக அமையும். அளவு மீறிய உணவு உடல் ஆரோக்கியத்தையும், அழகையும் கெடுக்கும்.",
    altTranslation: "Moderation in food adorns the woman."
  },
  {
    num: 92, section: 'yavargam', letter: 'ஊ²',
    tamil: "ஊருடன் கூடி வாழ்.",
    transliteration: "Ūruṭaṉ kūṭi vāḻ.",
    english: "Live in fellowship with thy village.",
    tamilUrai: "நீ வாழும் ஊரின் மக்களோடு சேர்ந்து, ஒற்றுமையாய் வாழ். தனிமையில் வாழாமல், சமூகத்தோடு பொருந்தி வாழ்வதே மேலானது.",
    altTranslation: "Live united with thy community."
  },
  {
    num: 93, section: 'yavargam', letter: 'எ²',
    tamil: "எண்ணெய் காலை முழுகேல்.",
    transliteration: "Eṇṇey kālai muḻukēl.",
    english: "Bathe not in oil in the morning.",
    tamilUrai: "காலை நேரத்தில் எண்ணெய் தேய்த்து குளிக்காதே. சில காலங்களில் சில செயல்கள் ஆரோக்கியத்திற்கு பொருத்தமாக இருக்காது என்பதை மரபு குறிக்கிறது.",
    altTranslation: "Bathe not with oil in the morning hour."
  },
  {
    num: 94, section: 'yavargam', letter: 'ஏ²',
    tamil: "ஏவவெண்ணார் கட்டில் உறங்கேல்.",
    transliteration: "Ēvaveṇṇār kaṭṭil uṟaṅkēl.",
    english: "Sleep not on a bed which thy elders have not allotted.",
    tamilUrai: "உன் பெரியோர், அதிகாரிகள் கட்டளையிட்டுத் தராத கட்டிலில் தூங்கி உறங்காதே. மரியாதையுடனும், ஒழுங்கோடும் வாழ்க.",
    altTranslation: "Sleep not in a place not granted by thy elders."
  },
  {
    num: 95, section: 'yavargam', letter: 'ஐ²',
    tamil: "ஐயம் புகினும் செய்வன செய்.",
    transliteration: "Aiyam pukiṉum ceyvaṉa cey.",
    english: "Even though doubt arise, do what ought to be done.",
    tamilUrai: "செய்ய வேண்டிய கடமை வந்துவிட்டால், ஐயம் ஏற்பட்டாலும், அதைச் செய்து முடி. சந்தேகத்தினால் கடமையை விட்டுவிடாதே.",
    altTranslation: "Even in doubt, do thy proper duty."
  },
  {
    num: 96, section: 'yavargam', letter: 'ஒ²',
    tamil: "ஒன்னலர் அகத்து இரேல்.",
    transliteration: "Oṉṉalar akattu irēl.",
    english: "Stay not in the house of thy enemy.",
    tamilUrai: "உன் பகைவரின் வீட்டில் தங்காதே. அவர்களின் வீட்டில் தங்குவதால் ஆபத்து ஏற்படக்கூடும், மற்றும் உனது நற்பெயருக்கும் கேடு வரும்.",
    altTranslation: "Lodge not in the house of thy adversary."
  },
  {
    num: 97, section: 'yavargam', letter: 'ஓ²',
    tamil: "ஓரம் சொல்லேல்.",
    transliteration: "Ōram collēl.",
    english: "Speak not with bias.",
    tamilUrai: "எதையும் ஒரு பக்கச் சார்பாக, யாரோ ஒருவரின் சார்பில் மட்டும், சொல்லாதே. நடுநிலையாக, நியாயமாக பேசு.",
    altTranslation: "Speak not partially or with bias."
  },
  {
    num: 98, section: 'yavargam', letter: 'ஔ²',
    tamil: "ஔடதம் செய்.",
    transliteration: "Auṭatam cey.",
    english: "Make medicine (for the sick).",
    tamilUrai: "நோய்வாய்ப் பட்டிருப்பவர்களுக்கு தேவையான மருந்துகள் கொடுத்து, உதவி செய். மருத்துவம் என்பது மனிதர்களுக்கு செய்யும் சிறந்த உதவி.",
    altTranslation: "Provide medicine for those who suffer."
  },
  {
    num: 99, section: 'yavargam', letter: 'க²',
    tamil: "கற்பெனத் திரி.",
    transliteration: "Kaṟpeṉat tiri.",
    english: "Walk in chastity.",
    tamilUrai: "ஒழுக்க நெறியோடு, கற்பான பண்புடன், தனது இல்லற கடமைகளை மட்டுமே நினைத்து வாழ். ஒழுக்கமே உயர் வாழ்வுக்கு அடிப்படை.",
    altTranslation: "Walk thou ever in the path of chastity."
  },
  {
    num: 100, section: 'yavargam', letter: 'கா²',
    tamil: "காவல் தனை மேற்கொள்.",
    transliteration: "Kāval taṉai mēṟkoḷ.",
    english: "Take up the duty of guarding.",
    tamilUrai: "உன்னை, உன் குடும்பத்தை, உன் சொத்தை, உன் ஒழுக்கத்தை — எல்லாவற்றையும் காப்பாற்றும் கடமையை மேற்கொண்டு செயற்படு.",
    altTranslation: "Take up the duty of vigilant guarding."
  },
  {
    num: 101, section: 'yavargam', letter: 'கி²',
    tamil: "கிளைபடப் பேசேல்.",
    transliteration: "Kiḷaipaṭap pēcēl.",
    english: "Speak not divisively.",
    tamilUrai: "மக்களுக்கு இடையே பிரிவை, பகையை, கூட்டத்தாரை வேறுபடுத்தும் பேச்சை பேசாதே. ஒற்றுமை கெடுவதை தவிர்த்திட நினை.",
    altTranslation: "Speak not in ways that cause division."
  },
  {
    num: 102, section: 'yavargam', letter: 'கீ²',
    tamil: "கீழோர் ஆசை இகழ்.",
    transliteration: "Kīḻōr ācai ikaḻ.",
    english: "Disregard the ambitions of base persons.",
    tamilUrai: "தாழ்ந்தவர்களின் ஆசை, விருப்பங்களின் தாக்கத்தை உனக்குள் ஏற்றுக்கொள்ளாதே. அவர்களின் வழியைப் பின்பற்ற முயலாதே.",
    altTranslation: "Heed not the cravings of the base."
  },
  {
    num: 103, section: 'yavargam', letter: 'கு²',
    tamil: "குன்றென இரு.",
    transliteration: "Kuṉṟeṉa iru.",
    english: "Be steadfast as a hill.",
    tamilUrai: "உன் கொள்கையில், உன் கடமையில், மலையைப் போல உறுதியாகவும், அசையாதவாறும் இரு. சிறிய காரணங்களுக்காக கொள்கை மாற்றாதே.",
    altTranslation: "Stand as steadfast as a mountain."
  },
  {
    num: 104, section: 'yavargam', letter: 'கூ²',
    tamil: "கூடி நட்புக்கொள்.",
    transliteration: "Kūṭi naṭpukkoḷ.",
    english: "Form true friendships through union.",
    tamilUrai: "நற்பண்புள்ளவர்களோடு சேர்ந்து, உண்மையான நட்பை உருவாக்கிக் கொள். உண்மையான நண்பர்களே வாழ்வின் மிகப்பெரிய செல்வம்.",
    altTranslation: "Form true friendships through fellowship."
  },
  {
    num: 105, section: 'yavargam', letter: 'கெ²',
    tamil: "கெடுவது செய்யேல்.",
    transliteration: "Keṭuvatu ceyyēl.",
    english: "Do nothing that ends in ruin.",
    tamilUrai: "முடிவில் உனக்கோ பிறருக்கோ அழிவை, துன்பத்தைத் தரக் கூடிய எந்தச் செயலையும் செய்யாதே. நற்பயனை அளிக்கும் செயல்களையே செய்.",
    altTranslation: "Do not what bringeth ruin in the end."
  },
  {
    num: 106, section: 'yavargam', letter: 'கே²',
    tamil: "கேட்டில் உறுதி கொள்.",
    transliteration: "Kēṭṭil uṟuti koḷ.",
    english: "In adversity, hold firm.",
    tamilUrai: "தோல்வி, துன்பம், கேடு வரும் காலத்திலும், உன் மனதை திட்பமாக வைத்துக்கொள். கடினமான காலத்தில் சோர்வு கொள்ளாதே.",
    altTranslation: "In ruin and ill fortune, hold thee firm."
  },
  {
    num: 107, section: 'yavargam', letter: 'கை²',
    tamil: "கைவினை கல்.",
    transliteration: "Kaiviṉai kal.",
    english: "Learn the work of the hands.",
    tamilUrai: "ஏதேனும் ஒரு கைத்தொழிலை, கைவினையை கற்றுக்கொள். கைத்தொழில் உன் வாழ்க்கைக்கு வருமான வழியாக அமையும்.",
    altTranslation: "Learn well the craft of thine own hand."
  },
  {
    num: 108, section: 'yavargam', letter: 'கொ²',
    tamil: "கொடுமை தனை விடு.",
    transliteration: "Koṭumai taṉai viṭu.",
    english: "Renounce all cruelty.",
    tamilUrai: "பிறர்க்குத் துன்பம் தரும் கொடிய செயல்களை, கருணையற்ற நடத்தைகளை, முற்றிலும் கைவிடு. கொடுமை மனிதத் தன்மைக்கு மாறானது.",
    altTranslation: "Cast off all cruelty from thee."
  },
  {
    num: 109, section: 'yavargam', letter: 'கோ²',
    tamil: "கோல் ஓச்சல் ஆற்று.",
    transliteration: "Kōl ōccal āṟṟu.",
    english: "Wield the sceptre of justice.",
    tamilUrai: "ஒரு தலைமைப் பொறுப்பில் இருந்தால், செங்கோல் (அதிகாரம்) நீதியான முறையில் ஆட்சி செய். அதிகாரத்தை அநீதிக்கு பயன்படுத்தாதே.",
    altTranslation: "Hold the rod of rule with justice."
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.AATHICHUDI_DATA = {
    sections: AATHICHUDI_SECTIONS,
    verses: AATHICHUDI_VERSES
  };
}
