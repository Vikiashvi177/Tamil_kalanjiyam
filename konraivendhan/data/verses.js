// =============================================================================
// கொன்றைவேந்தன் · Konraivendhan by Avvaiyar
// 91 alphabetical moral maxims in the tradition of the Aathichudi
// 5-layer presentation: Tamil, transliteration, English meaning, Tamil urai, alt translation
// =============================================================================

const KONRAIVENDHAN_SECTIONS = [
  {
    id: 'uyir',
    tamilName: 'உயிர் எழுத்து',
    englishName: 'The Vowels',
    description: 'Verses beginning with the Tamil vowels — அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ.',
    letters: ['அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ','ஒ','ஓ','ஔ']
  },
  {
    id: 'kavargam',
    tamilName: 'க வர்க்கம்',
    englishName: 'The Ka-group',
    description: 'Verses beginning with க and its vowel combinations.',
    letters: ['க','கா','கி','கீ','கு','கூ','கெ','கே','கை','கொ','கோ']
  },
  {
    id: 'savargam',
    tamilName: 'ச வர்க்கம்',
    englishName: 'The Cha-group',
    description: 'Verses beginning with ச and its vowel combinations.',
    letters: ['ச','சா','சி','சீ','சு','சூ','செ','சே','சை','சொ','சோ']
  },
  {
    id: 'tavargam',
    tamilName: 'த வர்க்கம்',
    englishName: 'The Tha-group',
    description: 'Verses beginning with த and its vowel combinations.',
    letters: ['த','தா','தி','தீ','து','தூ','தெ','தே','தை','தொ','தோ']
  },
  {
    id: 'navargam',
    tamilName: 'ந வர்க்கம்',
    englishName: 'The Na-group',
    description: 'Verses beginning with ந and its vowel combinations.',
    letters: ['ந','நா','நி','நீ','நு','நூ','நெ','நே','நை','நொ','நோ']
  },
  {
    id: 'pavargam',
    tamilName: 'ப வர்க்கம்',
    englishName: 'The Pa-group',
    description: 'Verses beginning with ப and its vowel combinations.',
    letters: ['ப','பா','பி','பீ','பு','பூ','பெ','பே','பை','பொ','போ']
  },
  {
    id: 'mavargam',
    tamilName: 'ம வர்க்கம்',
    englishName: 'The Ma-group',
    description: 'Verses beginning with ம and its vowel combinations.',
    letters: ['ம','மா','மி','மீ','மு','மூ','மெ','மே','மை','மொ','மோ']
  },
  {
    id: 'finalgroup',
    tamilName: 'இறுதி வர்க்கம்',
    englishName: 'Final Group',
    description: 'Closing verses — ய, வ, ழ, ள, ற, ன.',
    letters: ['ய','வ','ழ','ள','ற','ன']
  }
];

const KONRAIVENDHAN_VERSES = [
  // ============================================================
  // உயிர் எழுத்து — The Vowels (verses 1–12)
  // ============================================================
  {
    num: 1, section: 'uyir', letter: 'அ',
    tamil: "அன்னையும் பிதாவும் முன்னறி தெய்வம்.",
    transliteration: "Aṉṉaiyum pitāvum muṉṉaṟi teyvam.",
    english: "Mother and father are the gods one knows first.",
    tamilUrai: "தெய்வங்களை காண்பதற்கு முன்பே தாயையும் தந்தையையும் காண்கிறோம். அவர்களே நமக்கு முதல் தெய்வங்கள். பெற்றோரை வணங்குவதே இறைவனை வணங்குவதற்கு சமம்.",
    altTranslation: "Mother and father are the first gods one comes to know."
  },
  {
    num: 2, section: 'uyir', letter: 'ஆ',
    tamil: "ஆலயம் தொழுவது சாலவும் நன்று.",
    transliteration: "Ālayam toḻuvatu cālavum naṉṟu.",
    english: "Worshipping at the temple is exceedingly good.",
    tamilUrai: "கோயிலுக்கு சென்று இறைவனை வழிபடுவது மிகவும் நல்லது. தெய்வ வழிபாடு மனதை தூய்மைப்படுத்தி நல்வாழ்வுக்கு வழி காட்டும்.",
    altTranslation: "Going to worship at the temple is greatly good."
  },
  {
    num: 3, section: 'uyir', letter: 'இ',
    tamil: "இல்லறம் சிறக்க விருந்தோம்பு.",
    transliteration: "Illaṟam ciṟakka viruntōmpu.",
    english: "To make the household life shine, cherish the guest.",
    tamilUrai: "இல்லற வாழ்க்கை சிறக்க வேண்டுமெனில் விருந்தினரை அன்புடன் வரவேற்று உபசரிக்க வேண்டும். விருந்தோம்பல் இல்லறத்தின் சிறப்பு அம்சம்.",
    altTranslation: "To make household life flourish, honour and tend the guest."
  },
  {
    num: 4, section: 'uyir', letter: 'ஈ',
    tamil: "ஈயார் தேட்டை இழப்பர் இழந்தக்கால்.",
    transliteration: "Īyār tēṭṭai iḻappar iḻantakkāl.",
    english: "Those who do not give will lose what they have accumulated when the time of loss comes.",
    tamilUrai: "கொடுக்க மறுப்பவர்கள் தாம் சேர்த்த செல்வத்தை இழந்துவிடுவார்கள். ஈகை இல்லாத செல்வம் நிலைக்காது. தர்ம வழியில் சேர்த்ததே நிலைக்கும்.",
    altTranslation: "The ungenerous will lose their hoard when the time of reckoning arrives."
  },
  {
    num: 5, section: 'uyir', letter: 'உ',
    tamil: "உடையார் முன் இல்லார் போல் நடவேல்.",
    transliteration: "Uṭaiyār muṉ illār pōl naṭavēl.",
    english: "Do not behave like one without means in the presence of those who have.",
    tamilUrai: "உடையவர்கள் முன்னிலையில் இல்லாதவர் போல் நடப்பது கேவலம். தன் நிலையில் மரியாதையுடன் நடக்க வேண்டும். தன்மானம் காத்துக்கொள்ள வேண்டும்.",
    altTranslation: "Do not demean yourself before the wealthy as though you were nothing."
  },
  {
    num: 6, section: 'uyir', letter: 'ஊ',
    tamil: "ஊருடன் பகைக்கில் வேரறுப்பர்.",
    transliteration: "Ūruṭaṉ pakaikil vēraṟuppar.",
    english: "If you quarrel with the whole village, they will uproot you.",
    tamilUrai: "ஊர் மக்கள் அனைவரோடும் பகைமை கொண்டால், அவர்கள் ஒன்றுசேர்ந்து உன்னை வேரறுத்துவிடுவார்கள். சமூகத்துடன் ஒத்துவாழ வேண்டியது அவசியம்.",
    altTranslation: "Make an enemy of the whole village and they will uproot you."
  },
  {
    num: 7, section: 'uyir', letter: 'எ',
    tamil: "எண்ணித் துணிக கருமம்; துணிந்த பின்\nஎண்ணுவம் என்பது இழுக்கு.",
    transliteration: "Eṇṇit tuṇika karumam; tuṇinta piṉ\neṇṇuvam eṉpatu iḻukku.",
    english: "Think before you undertake a task; to think after you have begun is a disgrace.",
    tamilUrai: "எந்த செயலையும் ஆரம்பிப்பதற்கு முன் நன்கு சிந்திக்க வேண்டும். ஆரம்பித்த பின்னர் யோசிக்கத் தொடங்குவது இழிவானது. முன் யோசனை அவசியம்.",
    altTranslation: "Think before you act; to begin and then reflect is a disgrace."
  },
  {
    num: 8, section: 'uyir', letter: 'ஏ',
    tamil: "ஏற்கனவே உணர்ந்தவர் கேட்கின் அறிவுடையர்.",
    transliteration: "Ēṟkaṉavē uṇarntavar kēṭkiṉ aṟivuṭaiyar.",
    english: "Those who already understand and still listen are truly wise.",
    tamilUrai: "ஏற்கனவே அறிந்தவர்களும் பிறர் கூறுவதை பணிவுடன் கேட்பவர்களே உண்மையான அறிவாளிகள். தெரிந்தது என்று புறக்கணிக்காமல் கேட்பதே பெரிய குணம்.",
    altTranslation: "Those who already know yet still listen are the truly wise."
  },
  {
    num: 9, section: 'uyir', letter: 'ஐ',
    tamil: "ஐயமிட்டு உண்.",
    transliteration: "Aiyamiṭṭu uṇ.",
    english: "Give alms before you eat.",
    tamilUrai: "உண்பதற்கு முன் பிச்சைக்காரர்களுக்கு தானம் செய்துவிட்டு உண்ண வேண்டும். தன் உணவில் பிறரையும் பங்கு கொள்ளச் செய்வது அறச்செயல்.",
    altTranslation: "Give to those who ask before you sit to eat."
  },
  {
    num: 10, section: 'uyir', letter: 'ஒ',
    tamil: "ஒப்புரவு ஒழுகு.",
    transliteration: "Oppuravu oḻuku.",
    english: "Conduct yourself with fairness and decorum.",
    tamilUrai: "எல்லாரிடமும் சரிசமான அன்புடன் நடந்துகொள். யாரையும் பாரபட்சமின்றி உதவி செய்வதே ஒப்புரவு. இது சமூக ஒழுக்கத்தின் அடிப்படை.",
    altTranslation: "Live with fairness and even-handed conduct toward all."
  },
  {
    num: 11, section: 'uyir', letter: 'ஓ',
    tamil: "ஓதுவது ஒழியேல்.",
    transliteration: "Ōtuvatu oḻiyēl.",
    english: "Cease not to study.",
    tamilUrai: "கற்றலை ஒரு நாளும் நிறுத்தாதே. தொடர்ந்து படித்தல் வேண்டும். கல்வி என்பது வாழ்நாள் தொடரும் செயல்; அதை கைவிடக்கூடாது.",
    altTranslation: "Never stop studying; let not learning cease."
  },
  {
    num: 12, section: 'uyir', letter: 'ஔ',
    tamil: "ஔவியம் பேசேல்.",
    transliteration: "Auviyam pēcēl.",
    english: "Do not speak with envy.",
    tamilUrai: "பொறாமையுடன் பேசாதே. பிறரின் நலனை கண்டு உள்ளம் வெதும்பி பேசுவது தாழ்வான குணம். பொறாமை மனிதனை அழிக்கும்.",
    altTranslation: "Speak not with envy in your heart."
  },
  // ============================================================
  // க வர்க்கம் — The Ka-group (verses 13–23)
  // ============================================================
  {
    num: 13, section: 'kavargam', letter: 'க',
    tamil: "கற்றோரை கனவிலும் வணங்கு.",
    transliteration: "Kaṟṟōrai kaṉavilum vaṇanku.",
    english: "Honour the learned even in your dreams.",
    tamilUrai: "கற்றவர்களை — அறிவாளிகளை — எப்போதும் மதித்து வணங்க வேண்டும். கனவிலும் கூட அவர்களை வணங்கும் மனப்பான்மை இருக்க வேண்டும். கல்வி மரியாதைக்கு உரியது.",
    altTranslation: "Revere the learned even in your dreams."
  },
  {
    num: 14, section: 'kavargam', letter: 'கா',
    tamil: "காலத்தில் பயிர் செய்.",
    transliteration: "Kālattil payir cey.",
    english: "Farm at the proper time.",
    tamilUrai: "பயிர் சாகுபடியை சரியான காலத்தில் செய்ய வேண்டும். காலம் தவறினால் உழைப்பு வீணாகும். எந்த செயலும் சரியான தருணத்தில் செய்தால்தான் பலன் தரும்.",
    altTranslation: "Cultivate your fields in their proper season."
  },
  {
    num: 15, section: 'kavargam', letter: 'கி',
    tamil: "கிழவரை ஏளனம் செய்யேல்.",
    transliteration: "Kiḻavurai ēḷaṉam ceyyēl.",
    english: "Do not mock the elderly.",
    tamilUrai: "முதியவர்களை இகழ்ந்து பேசாதே. அவர்களின் அனுபவமும் வயதும் மரியாதைக்குரியவை. முதியோரை ஏளனம் செய்வது குற்றமான செயல்.",
    altTranslation: "Never mock or belittle the old."
  },
  {
    num: 16, section: 'kavargam', letter: 'கீ',
    tamil: "கீழ்மேல் என்று அறி.",
    transliteration: "Kīḻmēl eṉṟu aṟi.",
    english: "Know what is above and what is below.",
    tamilUrai: "உயர்வு தாழ்வுகளை புரிந்துகொள். யாரோடு எப்படி நடந்துகொள்ள வேண்டும் என்று அறிவது அவசியம். தன் நிலையை அறிந்து நடப்பதே அறிவுடைமை.",
    altTranslation: "Know what is high and what is low — understand your place."
  },
  {
    num: 17, section: 'kavargam', letter: 'கு',
    tamil: "குணமது கைவிடேல்.",
    transliteration: "Kuṇamatu kaivitēl.",
    english: "Do not abandon good character.",
    tamilUrai: "நல்ல குணங்களை எந்த சூழலிலும் விட்டுவிடாதே. பணம் போகலாம், செல்வாக்கு போகலாம் — ஆனால் குணத்தை காத்துக்கொள்ள வேண்டும். குணமே உண்மையான செல்வம்.",
    altTranslation: "Never abandon your good character, whatever comes."
  },
  {
    num: 18, section: 'kavargam', letter: 'கூ',
    tamil: "கூடி வாழ்.",
    transliteration: "Kūṭi vāḻ.",
    english: "Live together in harmony.",
    tamilUrai: "ஒற்றுமையுடன் வாழ்க்கை நடத்து. குடும்பத்தோடும் சமூகத்தோடும் இணைந்து வாழ்வதே நல்வாழ்க்கை. தனித்து வாழ்வதை விட சேர்ந்து வாழ்வது சிறந்தது.",
    altTranslation: "Live in unity and togetherness."
  },
  {
    num: 19, section: 'kavargam', letter: 'கெ',
    tamil: "கெடுப்பவரை நம்பேல்.",
    transliteration: "Keṭuppavurai nampēl.",
    english: "Do not trust those who ruin you.",
    tamilUrai: "உன்னை கேட்டில் தள்ள நினைப்பவர்களை நம்பாதே. தீமை செய்யும் மனம் கொண்டவர்களிடம் நட்பு வேண்டாம். தீயவரை நம்புவது அழிவுக்கு வழி.",
    altTranslation: "Never trust those who seek your ruin."
  },
  {
    num: 20, section: 'kavargam', letter: 'கே',
    tamil: "கேள்வி முயல்வதோர் அறிவுடைமை.",
    transliteration: "Kēḷvi muyalvator aṟivuṭaimai.",
    english: "Striving to hear and learn is itself wisdom.",
    tamilUrai: "கேட்டு கற்க முயல்வதே அறிவுடைமையின் அடையாளம். கேட்கத் தயங்காமல், கற்றுக்கொள்ள விரும்பி இருப்பது ஒரு சிறந்த குணம்.",
    altTranslation: "Striving always to listen and learn — that itself is wisdom."
  },
  {
    num: 21, section: 'kavargam', letter: 'கை',
    tamil: "கைப்பொருள் விரயம் செய்யேல்.",
    transliteration: "Kaipporuḷ virayam ceyyēl.",
    english: "Do not squander what is in hand.",
    tamilUrai: "கையிலிருக்கும் பொருளை வீணாக்காதே. உள்ளதை கவனமாக பயன்படுத்து. கையில் உள்ளதை காத்துக்கொண்டால்தான் வாழ்க்கை நல்லபடி நடக்கும்.",
    altTranslation: "Do not waste what you have in hand."
  },
  {
    num: 22, section: 'kavargam', letter: 'கொ',
    tamil: "கொடுத்த கை கொள்ளும்.",
    transliteration: "Koṭutta kai koḷḷum.",
    english: "The hand that gives shall also receive.",
    tamilUrai: "கொடுக்கும் கைக்கு திரும்பவும் கிடைக்கும். தர்மம் செய்தவருக்கு பலன் கிட்டும். கொடுப்பவரை இறைவன் கைவிடமாட்டான்.",
    altTranslation: "The hand that gives shall in time receive."
  },
  {
    num: 23, section: 'kavargam', letter: 'கோ',
    tamil: "கோபம் கொள்ளேல்.",
    transliteration: "Kōpam koḷḷēl.",
    english: "Do not take to anger.",
    tamilUrai: "கோபத்தை மனதில் தேக்கிக்கொள்ளாதே. கோபம் அறிவை மழுங்கச் செய்யும். ஆற்றத்தக்க கோபத்தையும் ஆறவிடுவதே மேன்மை.",
    altTranslation: "Do not surrender yourself to anger."
  },
  // ============================================================
  // ச வர்க்கம் — The Cha-group (verses 24–34)
  // ============================================================
  {
    num: 24, section: 'savargam', letter: 'ச',
    tamil: "சனியன் என்று ஒதுக்கேல்.",
    transliteration: "Caṉiyaṉ eṉṟu oṭukkēl.",
    english: "Do not push away calling someone ill-starred.",
    tamilUrai: "ஒருவனை நதி அல்லது துரதிர்ஷ்டக்காரன் என்று சொல்லி விலக்காதே. மனித மரியாதையை எல்லாரிடமும் காட்ட வேண்டும். அவப்பெயர் சூட்டி ஒதுக்குவது அக்கிரமம்.",
    altTranslation: "Do not cast anyone aside with the label of ill-luck."
  },
  {
    num: 25, section: 'savargam', letter: 'சா',
    tamil: "சான்றோர் சொல் கேள்.",
    transliteration: "Cāṉṟōr col kēḷ.",
    english: "Listen to the words of the wise.",
    tamilUrai: "அறிவும் நல்ல குணமும் உடைய சான்றோர்களின் வார்த்தைகளை கவனமாக கேட்டு பின்பற்று. அவர்கள் சொல்வதில் வாழ்க்கைக்கு வழிகாட்டும் ஆற்றல் உண்டு.",
    altTranslation: "Hear the words of the wise and heed them."
  },
  {
    num: 26, section: 'savargam', letter: 'சி',
    tamil: "சினம் நன்றன்று.",
    transliteration: "Ciṉam naṉṟaṉṟu.",
    english: "Anger is not good.",
    tamilUrai: "சினம் கொள்வது நல்லதல்ல. கோபம் மனிதனை மூடனாக்கும்; நல்ல உறவுகளை கெடுக்கும். சினத்தை அடக்குவதே சிறந்த பண்பு.",
    altTranslation: "Anger is never a good thing."
  },
  {
    num: 27, section: 'savargam', letter: 'சீ',
    tamil: "சீர்தூக்கிப் பேசு.",
    transliteration: "Cīrtūkkip pēcu.",
    english: "Weigh your words before you speak.",
    tamilUrai: "பேசுவதற்கு முன் வார்த்தைகளை நன்றாக யோசித்து பேசு. தீமை செய்யும் வார்த்தைகளை கவனமில்லாமல் சொல்லிவிடாதே. அளந்து பேசுவதே அறிவுடைமை.",
    altTranslation: "Weigh your words carefully before you speak them."
  },
  {
    num: 28, section: 'savargam', letter: 'சு',
    tamil: "சுற்றம் விட்டகல்லேல்.",
    transliteration: "Cuṟṟam viṭṭakalēl.",
    english: "Do not abandon your kinsfolk.",
    tamilUrai: "உறவினர்களை விட்டு விலகாதே. குடும்ப பந்தம் மிக முக்கியமானது. சுற்றத்தை புறக்கணிப்பவன் தனிமையில் வாடுவான்.",
    altTranslation: "Do not withdraw and abandon your kin."
  },
  {
    num: 29, section: 'savargam', letter: 'சூ',
    tamil: "சூது விலக்கு.",
    transliteration: "Cūtu vilakku.",
    english: "Shun gambling.",
    tamilUrai: "சூதாட்டத்திலிருந்து விலகியிரு. சூது மனிதனின் செல்வத்தையும் குணத்தையும் கெடுக்கும். சூதாட்டத்திற்கு அடிமையானவன் அழிவையே அடைவான்.",
    altTranslation: "Keep away from gambling."
  },
  {
    num: 30, section: 'savargam', letter: 'செ',
    tamil: "செய்நன்றி மறவேல்.",
    transliteration: "Ceynaṉṟi maṟavēl.",
    english: "Never forget the good done to you.",
    tamilUrai: "உனக்கு உதவி செய்தவரை மறந்துவிடாதே. நன்றி மறப்பது மனிதத் தன்மைக்கு மாறானது. நன்றி உணர்வே நல்லவர்களின் அடையாளம்.",
    altTranslation: "Never forget the kindness that has been done to you."
  },
  {
    num: 31, section: 'savargam', letter: 'சே',
    tamil: "சேர்ந்தாரை அன்புசெய்.",
    transliteration: "Cērntārai aṉpucey.",
    english: "Love those who have joined with you.",
    tamilUrai: "உனக்கு நெருங்கியவர்களை, உன்னோடு வாழ்பவர்களை அன்போடு நேசி. சேர்ந்தாரை அன்புசெய்வதே கூட்டு வாழ்க்கையின் அடிப்படை.",
    altTranslation: "Show love to those who have become your companions."
  },
  {
    num: 32, section: 'savargam', letter: 'சை',
    tamil: "சைவம் விரும்பு.",
    transliteration: "Caivam virumpu.",
    english: "Desire a vegetarian way of life.",
    tamilUrai: "உயிர்களை கொல்லாத வாழ்க்கை முறையை விரும்பு. அஹிம்சை கொண்ட உணவு முறை உடலுக்கும் மனதுக்கும் நலம் தரும்.",
    altTranslation: "Desire and follow a life of non-violence at table."
  },
  {
    num: 33, section: 'savargam', letter: 'சொ',
    tamil: "சொல் சோர்வு படேல்.",
    transliteration: "Col cōrvu paṭēl.",
    english: "Let not your speech grow weary and slip.",
    tamilUrai: "பேசும்போது கவனக்குறைவாக வார்த்தைகளை தவறவிடாதே. சோர்வான மனநிலையில் பேசும்போது தவறான வார்த்தைகள் வெளியே வரும். எப்போதும் எச்சரிக்கையுடன் பேசு.",
    altTranslation: "Let not your speech falter and slip into carelessness."
  },
  {
    num: 34, section: 'savargam', letter: 'சோ',
    tamil: "சோம்பல் ஒழி.",
    transliteration: "Cōmpal oḻi.",
    english: "Rid yourself of laziness.",
    tamilUrai: "சோம்பேறித்தனத்தை விட்டொழி. சோம்பல் வாழ்க்கையை கெடுக்கும். முயற்சியுடன் உழைப்பவனே வாழ்வில் உயர்வான நிலை அடைவான்.",
    altTranslation: "Cast laziness out of your life."
  },
  // ============================================================
  // த வர்க்கம் — The Tha-group (verses 35–45)
  // ============================================================
  {
    num: 35, section: 'tavargam', letter: 'த',
    tamil: "தக்கோர் சொல் கேள்.",
    transliteration: "Takkōr col kēḷ.",
    english: "Listen to the words of worthy people.",
    tamilUrai: "தகுதியான, நல்லவர்களின் வார்த்தைகளை கவனமாக கேள். அவர்களின் அனுபவம் நிறைந்த வார்த்தைகளில் நலம் தரும் ஆற்றல் உண்டு.",
    altTranslation: "Heed the counsel of those who are worthy."
  },
  {
    num: 36, section: 'tavargam', letter: 'தா',
    tamil: "தானம் தவறேல்.",
    transliteration: "Tāṉam tavaṟēl.",
    english: "Do not fail in giving charity.",
    tamilUrai: "தர்ம தானம் செய்வதில் தவறாதே. கொடுக்கும் ஆற்றல் இருக்கும்போது கொடுக்க வேண்டும். தானம் செய்வது புண்ணியம் தரும்.",
    altTranslation: "Do not fail to give; let charity never lapse."
  },
  {
    num: 37, section: 'tavargam', letter: 'தி',
    tamil: "திருடர்தம்முடன் சேரேல்.",
    transliteration: "Tiruṭartam muṭaṉ cērēl.",
    english: "Do not associate with thieves.",
    tamilUrai: "கள்வர்களுடன் சேர்ந்திருக்காதே. கெட்டவர்களோடு சேர்பவர்கள் கெட்டவர்களாவார்கள். தீய சேர்க்கை அழிவுக்கே வழிகோலும்.",
    altTranslation: "Do not keep company with thieves."
  },
  {
    num: 38, section: 'tavargam', letter: 'தீ',
    tamil: "தீவினை அகற்று.",
    transliteration: "Tīviṉai akaṟṟu.",
    english: "Remove evil deeds from your life.",
    tamilUrai: "தீமையான செயல்களை உன் வாழ்விலிருந்து விலக்கு. பாவ செயல்கள் வாழ்வை கெடுக்கும். தீவினை விலகினால் நல்வாழ்வு தானாகவே கிட்டும்.",
    altTranslation: "Drive evil deeds away from your life."
  },
  {
    num: 39, section: 'tavargam', letter: 'து',
    tamil: "துன்பத்திற்கு இடம் கொடேல்.",
    transliteration: "Tuṉpattirku iṭam koṭēl.",
    english: "Do not give room to sorrow.",
    tamilUrai: "துன்பம் மனதில் குடியேறாமல் பார்த்துக்கொள். துன்பத்திற்கு இடம் கொடுக்காமல் தைரியமாக வாழ வேண்டும். மகிழ்ச்சியான மனம் கொள்ளுதல் அவசியம்.",
    altTranslation: "Do not make room in your life for sorrow to lodge."
  },
  {
    num: 40, section: 'tavargam', letter: 'தூ',
    tamil: "தூய்மை மறவேல்.",
    transliteration: "Tūymai maṟavēl.",
    english: "Do not forget purity.",
    tamilUrai: "உடலின் தூய்மையும் மனதின் தூய்மையும் மறக்காதே. உள்ளத் தூய்மை மனதை அமைதிப்படுத்தும். வெளி தூய்மையும் உள் தூய்மையும் சேர்ந்தே வேண்டும்.",
    altTranslation: "Never forget purity — of body and of mind."
  },
  {
    num: 41, section: 'tavargam', letter: 'தெ',
    tamil: "தெய்வம் தொழு.",
    transliteration: "Teyvam toḻu.",
    english: "Worship the divine.",
    tamilUrai: "இறைவனை வணங்கு. தெய்வ வழிபாடு மனதுக்கு அமைதியும் வாழ்வுக்கு வழிகாட்டுதலும் தரும். இறைவன் தொழுவது மனித கடமை.",
    altTranslation: "Bow before the divine; do not neglect worship."
  },
  {
    num: 42, section: 'tavargam', letter: 'தே',
    tamil: "தேவர் சொல் கேள்.",
    transliteration: "Tēvar col kēḷ.",
    english: "Hear the word of the divine.",
    tamilUrai: "இறைவனின் வார்த்தைகளை — வேதங்களின், சாத்திரங்களின் வழிகாட்டுதலை — கவனமாக கேள். தெய்வீக வழிகாட்டுதல் வாழ்வுக்கு வழிசெய்யும்.",
    altTranslation: "Hear and heed the word of the divine."
  },
  {
    num: 43, section: 'tavargam', letter: 'தை',
    tamil: "தைரியம் விடேல்.",
    transliteration: "Tairiyam viṭēl.",
    english: "Do not forsake courage.",
    tamilUrai: "எந்த சூழலிலும் தைரியத்தை கைவிடாதே. துன்பங்கள் வரும்போதும் தைரியமாக நிற்பவர்களே வெற்றி பெறுவார்கள். வீரம் மனிதனுக்கு அவசியம்.",
    altTranslation: "Never forsake courage, whatever you face."
  },
  {
    num: 44, section: 'tavargam', letter: 'தொ',
    tamil: "தொழிலின் கண் சோர்வு படேல்.",
    transliteration: "Toḻiliṉ kaṇ cōrvu paṭēl.",
    english: "Do not grow weary in your work.",
    tamilUrai: "தன் தொழிலில் சோர்வடையாதே. முயற்சியுடன் உழைப்பவனுக்கே பலன் கிட்டும். தொழிலில் தளர்வு மனிதனை வீழ்த்தும்.",
    altTranslation: "Do not falter or grow weary in your work."
  },
  {
    num: 45, section: 'tavargam', letter: 'தோ',
    tamil: "தோல்வியில் கலங்கேல்.",
    transliteration: "Tōlviyil kalanKēl.",
    english: "Do not be shaken by defeat.",
    tamilUrai: "தோல்வி வரும்போது தளர்ந்துவிடாதே. தோல்வி வாழ்க்கையின் ஒரு பகுதி; அதை தாண்டி எழுவதே வெற்றியாளரின் குணம்.",
    altTranslation: "When defeat comes, do not be unsteadied by it."
  },
  // ============================================================
  // ந வர்க்கம் — The Na-group (verses 46–56)
  // ============================================================
  {
    num: 46, section: 'navargam', letter: 'ந',
    tamil: "நன்மை பயக்கும் செயல் செய்.",
    transliteration: "Naṉmai payakkum ceyal cey.",
    english: "Do deeds that yield good.",
    tamilUrai: "நன்மை விளைவிக்கும் செயல்களை செய். பயனற்ற செயல்களில் நேரத்தை வீணாக்காதே. நன்மை தரும் செயல்களே வாழ்வை அர்த்தமுள்ளதாக்கும்.",
    altTranslation: "Do only those deeds that will yield good."
  },
  {
    num: 47, section: 'navargam', letter: 'நா',
    tamil: "நாணம் விடேல்.",
    transliteration: "Nāṇam viṭēl.",
    english: "Do not forsake modesty.",
    tamilUrai: "நாணம் — வெட்கம் — இழந்துவிடாதே. மரியாதை உணர்வும் நாணமும் உள்ளவர்களிடமே நற்குணங்கள் தங்கும். நாணமற்றவர் எந்த நன்மையும் இழப்பார்.",
    altTranslation: "Do not let go of modesty and shame."
  },
  {
    num: 48, section: 'navargam', letter: 'நி',
    tamil: "நிலையில் கொள்கை நில்.",
    transliteration: "Nilaiyil koḷkai nil.",
    english: "Stand firm in your principles.",
    tamilUrai: "தன்னுடைய கொள்கைகளில் உறுதியாக நில். நிலையற்றவர்களை யாரும் மதிக்க மாட்டார்கள். கொள்கை மாறாமல் இருப்பதே மேன்மையின் அடையாளம்.",
    altTranslation: "Stand firm and unwavering in your principles."
  },
  {
    num: 49, section: 'navargam', letter: 'நீ',
    tamil: "நீசரோடு சேரேல்.",
    transliteration: "Nīcarōṭu cērēl.",
    english: "Do not associate with the base.",
    tamilUrai: "இழிவான குணம் கொண்டவர்களோடு சேர்ந்திருக்காதே. தாழ்ந்த குணமுடையவர்களுடன் சேர்பவர்கள் தாமும் தாழ்வடைவார்கள்.",
    altTranslation: "Do not mix with those of base character."
  },
  {
    num: 50, section: 'navargam', letter: 'நு',
    tamil: "நுண்ணறிவு தேர்.",
    transliteration: "Nuṇṇaṟivu tēr.",
    english: "Seek subtle wisdom.",
    tamilUrai: "நுட்பமான அறிவை தேடிப் பெறு. மேலோட்டமான புரிதல் மட்டும் போதாது — ஆழமான நுண்ணிய அறிவே வாழ்க்கையில் உதவும்.",
    altTranslation: "Seek and cultivate subtle, penetrating wisdom."
  },
  {
    num: 51, section: 'navargam', letter: 'நூ',
    tamil: "நூல் கல்.",
    transliteration: "Nūl kal.",
    english: "Study the texts.",
    tamilUrai: "நூல்களை — நல்ல இலக்கியங்களை — கற்று அறிவை பெறு. நூல் கற்பவர்களுக்கே தெளிவான சிந்தனையும் வாழ்க்கை அனுபவமும் கிட்டும்.",
    altTranslation: "Study the great texts; read and learn."
  },
  {
    num: 52, section: 'navargam', letter: 'நெ',
    tamil: "நெறிதவறேல்.",
    transliteration: "Neṟitavaṟēl.",
    english: "Do not stray from the right path.",
    tamilUrai: "அறத்தின் நெறியிலிருந்து தவறாதே. சரியான வழியில் நடப்பது சிரமம் தரலாம் — ஆனால் அதுவே நன்மை தரும் வழி.",
    altTranslation: "Do not stray from the path of right conduct."
  },
  {
    num: 53, section: 'navargam', letter: 'நே',
    tamil: "நேர்மை விடேல்.",
    transliteration: "Nērmai viṭēl.",
    english: "Do not abandon honesty.",
    tamilUrai: "நேர்மையை எந்த சூழலிலும் விட்டுவிடாதே. நேர்மையே மனிதனுக்கு மிகப் பெரிய பலம். நேர்மையற்றவர்களை யாரும் நம்ப மாட்டார்கள்.",
    altTranslation: "Never abandon honesty, whatever the temptation."
  },
  {
    num: 54, section: 'navargam', letter: 'நை',
    tamil: "நைந்தோர்க்கு உதவு.",
    transliteration: "Naintōrkku utavu.",
    english: "Help those who are worn down.",
    tamilUrai: "கஷ்டத்தில் தளர்ந்தவர்களுக்கு உதவி செய். துன்பத்தில் மூழ்கியவர்களை கை தூக்கி விடுவது மனித கடமை.",
    altTranslation: "Come to the aid of those who are worn and afflicted."
  },
  {
    num: 55, section: 'navargam', letter: 'நொ',
    tamil: "நொந்தோர்க்கு இரங்கு.",
    transliteration: "Nontoṟku iraṅku.",
    english: "Show compassion to those in pain.",
    tamilUrai: "வலியில் தவிப்பவர்களுக்கு இரக்கம் காட்டு. அன்பும் கருணையும் மனிதனுக்கு அழகு சேர்க்கும். வலியை புரிந்துகொள்வதே மனிதாபிமானம்.",
    altTranslation: "Show compassion to those who suffer."
  },
  {
    num: 56, section: 'navargam', letter: 'நோ',
    tamil: "நோயற்ற வாழ்வே குறைவற்ற செல்வம்.",
    transliteration: "Nōyaṟṟa vāḻvē kuṟaivaṟṟa celvam.",
    english: "A life free from disease is wealth without lack.",
    tamilUrai: "நோயற்ற ஆரோக்கியமான வாழ்க்கையே குறைவில்லாத செல்வம். பணம் இருந்தாலும் உடல் நலமில்லாவிட்டால் அதை அனுபவிக்க முடியாது. ஆரோக்கியமே மிகப்பெரிய சொத்து.",
    altTranslation: "A life without disease is wealth without want."
  },
  // ============================================================
  // ப வர்க்கம் — The Pa-group (verses 57–67)
  // ============================================================
  {
    num: 57, section: 'pavargam', letter: 'ப',
    tamil: "பழிக்கு இடம் கொடேல்.",
    transliteration: "Paḻikku iṭam koṭēl.",
    english: "Give no room for blame.",
    tamilUrai: "பழிக்கப்படும் செயல்களுக்கு இடம் கொடாதே. தவறான செயல்கள் செய்தால் பழி வரும். பழி இல்லாத வாழ்க்கையை வாழ்வதே சிறந்தது.",
    altTranslation: "Give no foothold to blame and reproach."
  },
  {
    num: 58, section: 'pavargam', letter: 'பா',
    tamil: "பாரம் பொறு.",
    transliteration: "Pāram poṟu.",
    english: "Bear your burdens.",
    tamilUrai: "வாழ்க்கையில் வரும் கஷ்டங்களை, சுமைகளை தைரியமுடன் தாங்கிக்கொள். பாரத்தை தாங்குவதே வலிமையின் அடையாளம்.",
    altTranslation: "Carry your burdens with patience and strength."
  },
  {
    num: 59, section: 'pavargam', letter: 'பி',
    tamil: "பிறர் மனம் நோகச் செய்யேல்.",
    transliteration: "Piṟar maṉam nōkac ceyyēl.",
    english: "Do not cause pain to the minds of others.",
    tamilUrai: "பிறர் மனம் காயப்படும்படி செயல்படாதே, பேசாதே. மனதில் வலி உண்டாக்குவது கொடுமை. பிறர் மனம் புண்படாமல் நடப்பதே நற்குணம்.",
    altTranslation: "Do nothing that wounds the hearts of others."
  },
  {
    num: 60, section: 'pavargam', letter: 'பீ',
    tamil: "பீடு இல்லார்தம்முடன் சேரேல்.",
    transliteration: "Pīṭu illārtam muṭaṉ cērēl.",
    english: "Do not associate with those who lack dignity.",
    tamilUrai: "மரியாதையும் கெளரவமும் இல்லாதவர்களோடு சேர்ந்திருக்காதே. இழிவான நடவடிக்கை உடையவர்களுடன் சேர்பவர் தாமும் இழிவடைவார்கள்.",
    altTranslation: "Do not keep company with those who have no dignity."
  },
  {
    num: 61, section: 'pavargam', letter: 'பு',
    tamil: "புல்லரோடு நட்பு கொள்ளேல்.",
    transliteration: "Pullārōṭu naṭpu koḷḷēl.",
    english: "Do not befriend the contemptible.",
    tamilUrai: "இழிவான குணம் உடையவர்களோடு நட்பு கொள்ளாதே. கீழ்மக்களின் நட்பு நாளடைவில் தீமையையே தரும்.",
    altTranslation: "Do not make friends with the contemptible."
  },
  {
    num: 62, section: 'pavargam', letter: 'பூ',
    tamil: "பூசலிடேல்.",
    transliteration: "Pūcaliṭēl.",
    english: "Do not pick quarrels.",
    tamilUrai: "சண்டை வழக்கு தொடங்காதே. பூசலிடுவது நட்பையும் அமைதியையும் கெடுக்கும். சண்டையைத் தவிர்ப்பவரே அறிவுடையவர்.",
    altTranslation: "Do not pick fights or start quarrels."
  },
  {
    num: 63, section: 'pavargam', letter: 'பெ',
    tamil: "பெரியோரை வழிபடு.",
    transliteration: "Periyōrai vaḻipaṭu.",
    english: "Revere the great.",
    tamilUrai: "அனுபவமும் அறிவும் நிறைந்த பெரியோர்களை வழிபட்டு போற்று. அவர்களின் ஆசியும் வழிகாட்டுதலும் வாழ்வில் மிகவும் பயனுடையவை.",
    altTranslation: "Revere and honour those who are great."
  },
  {
    num: 64, section: 'pavargam', letter: 'பே',
    tamil: "பேதமை பேசேல்.",
    transliteration: "Pētamai pēcēl.",
    english: "Do not speak foolishness.",
    tamilUrai: "அறியாமையுடன் கூடிய வார்த்தைகளை பேசாதே. முட்டாள்தனமான பேச்சு மரியாதையை கெடுக்கும். யோசித்து பேசுவதே அறிவுடைமை.",
    altTranslation: "Do not speak foolish, empty words."
  },
  {
    num: 65, section: 'pavargam', letter: 'பை',
    tamil: "பைத்தியக்காரர்தம்முடன் நட்பு வேண்டாம்.",
    transliteration: "Paittiyakkārar tam muṭaṉ naṭpu vēṇṭām.",
    english: "Do not seek friendship with the reckless and mad.",
    tamilUrai: "மனம் தடுமாறி நடப்பவர்களோடு நட்பு தேடாதே. அவர்களுடன் சேர்வது பிரச்சினைகளையே கொண்டுவரும். அமைதியான, நல்ல நண்பர்களை தேர்வு செய்.",
    altTranslation: "Seek not friendship with the reckless or unstable."
  },
  {
    num: 66, section: 'pavargam', letter: 'பொ',
    tamil: "பொய் சொல்லேல்.",
    transliteration: "Poy collēl.",
    english: "Speak not lies.",
    tamilUrai: "பொய் சொல்லாதே. உண்மையே ஆயுள் நீட்டிக்கும். பொய் சொல்பவனை யாரும் நம்ப மாட்டார்கள்; நம்பிக்கை போனால் எல்லாம் போனதே.",
    altTranslation: "Speak no lies; let truth alone be your tongue."
  },
  {
    num: 67, section: 'pavargam', letter: 'போ',
    tamil: "போகம் மிகினும் விழியாதே.",
    transliteration: "Pōkam makiṉum viḻiyātē.",
    english: "Even when pleasures abound, do not be swallowed by them.",
    tamilUrai: "இன்பங்கள் மிகுந்திருந்தாலும் அவற்றில் மூழ்கிவிடாதே. அளவுக்கு மீறிய இன்பம் தீமையையே தரும். கட்டுப்பாட்டுடன் வாழ்வதே நலம்.",
    altTranslation: "Even when pleasures flow freely, do not be drowned in them."
  },
  // ============================================================
  // ம வர்க்கம் — The Ma-group (verses 68–78)
  // ============================================================
  {
    num: 68, section: 'mavargam', letter: 'ம',
    tamil: "மனம் ஒன்றி வாழ்.",
    transliteration: "Maṉam oṉṟi vāḻ.",
    english: "Live with a unified mind.",
    tamilUrai: "மனது ஒரே நிலையில் நிலைத்திருக்கும்படி வாழு. சிதறிய மனதுடன் செய்யும் செயல்கள் பலன் தராது. ஒரு நிலைப்பட்ட மனதே வெற்றிக்கு வழி.",
    altTranslation: "Live with a mind collected and at one."
  },
  {
    num: 69, section: 'mavargam', letter: 'மா',
    tamil: "மாசற்ற வாழ்வு வாழ்.",
    transliteration: "Māsaṟṟa vāḻvu vāḻ.",
    english: "Live a life without stain.",
    tamilUrai: "களங்கமற்ற தூய வாழ்க்கை வாழு. குற்றமற்ற வாழ்வே உண்மையான சிறப்பு. மாசான செயல்களில் ஈடுபடாமல் சுத்தமான மனதுடன் வாழ்வது பெருமை.",
    altTranslation: "Live a life unstained and without blemish."
  },
  {
    num: 70, section: 'mavargam', letter: 'மி',
    tamil: "மிகைப்பட சொல்லேல்.",
    transliteration: "Mikaippaṭa collēl.",
    english: "Do not speak excessively.",
    tamilUrai: "அளவுக்கு மேல் பேசாதே. மிகைப்படுத்தி பேசுவது நம்பகத்தன்மையை கெடுக்கும். அளவான வார்த்தைகளே மதிப்பு தரும்.",
    altTranslation: "Do not speak in excess or exaggeration."
  },
  {
    num: 71, section: 'mavargam', letter: 'மீ',
    tamil: "மீறி நடவேல்.",
    transliteration: "Mīṟi naṭavēl.",
    english: "Do not act beyond your bounds.",
    tamilUrai: "தன் எல்லையை மீறி நடக்காதே. சட்டத்தையும் நீதியையும் மீறி நடப்பவர்களுக்கு தண்டனை கிட்டும். அளவுடன் நடப்பதே நன்மை தரும்.",
    altTranslation: "Do not overstep your proper bounds."
  },
  {
    num: 72, section: 'mavargam', letter: 'மு',
    tamil: "முயற்சி கைவிடேல்.",
    transliteration: "Muyaṟci kaivitēl.",
    english: "Do not abandon effort.",
    tamilUrai: "முயற்சியை எந்த நிலையிலும் கைவிடாதே. முயற்சி செய்பவனுக்கே வெற்றி கிட்டும். சோர்வு வந்தாலும் முயற்சியை தொடர்வதே மேன்மை.",
    altTranslation: "Never abandon effort, however hard the going."
  },
  {
    num: 73, section: 'mavargam', letter: 'மூ',
    tamil: "மூர்க்கரோடு பழகேல்.",
    transliteration: "Mūrkkārōṭu paḻakēl.",
    english: "Do not associate with the stubborn and violent.",
    tamilUrai: "வீண் ஆணவமும் கோபமும் நிறைந்தவர்களோடு பழகாதே. மூர்க்கரின் தொடர்பு எப்போதும் கேட்டிலேயே முடியும்.",
    altTranslation: "Do not keep company with the pig-headed and violent."
  },
  {
    num: 74, section: 'mavargam', letter: 'மெ',
    tamil: "மெல்லியார்க்கு இரங்கு.",
    transliteration: "Melliyārkku iraṅku.",
    english: "Show compassion to the frail.",
    tamilUrai: "தளர்ந்தவர்களுக்கு, பலவீனமானவர்களுக்கு கருணை காட்டு. அவர்களுக்கு உதவுவது மனித கடமை. இரக்கமே மனிதனை மனிதனாக்குவது.",
    altTranslation: "Show mercy and compassion to the frail and weak."
  },
  {
    num: 75, section: 'mavargam', letter: 'மே',
    tamil: "மேன்மக்கள் சொல் கொள்.",
    transliteration: "Mēṉmakkal col koḷ.",
    english: "Accept the words of the noble.",
    tamilUrai: "மேன்மையான குணம் உடைய மக்களின் வார்த்தைகளை ஏற்றுக்கொள். அவர்கள் கூறுவதில் உண்மையும் நன்மையும் இருக்கும்.",
    altTranslation: "Receive and accept the words of the noble-hearted."
  },
  {
    num: 76, section: 'mavargam', letter: 'மை',
    tamil: "மையல் மனம் கொள்ளேல்.",
    transliteration: "Maiyal maṉam koḷḷēl.",
    english: "Do not harbour a confused and infatuated mind.",
    tamilUrai: "மையல் கொண்ட — குழைந்த, குழம்பிய — மனதை கொள்ளாதே. தெளிவான மனதே நல்ல முடிவுகளை எடுக்க உதவும். மனக் குழப்பத்தை விலக்கு.",
    altTranslation: "Do not harbour a mind confused by infatuation."
  },
  {
    num: 77, section: 'mavargam', letter: 'மொ',
    tamil: "மொழிவல்லார் தம்மை மதி.",
    transliteration: "Moḻivallār tammai mati.",
    english: "Respect those who are skilled in language.",
    tamilUrai: "மொழி வல்லவர்களை — அறிஞர்களை, கவிஞர்களை — மதித்து போற்று. மொழி ஆற்றல் உடையவர்கள் கலாச்சாரத்தை காக்கிறார்கள்.",
    altTranslation: "Honour and respect those who are masters of language."
  },
  {
    num: 78, section: 'mavargam', letter: 'மோ',
    tamil: "மோசம் கொள்ளேல்.",
    transliteration: "Mōcam koḷḷēl.",
    english: "Do not be deceived.",
    tamilUrai: "ஏமாற்றப்படாதே. நம்பிக்கை துரோகிகளால் மோசம் அடியாமல் இரு. விழிப்புடன் இருந்தால் தான் வாழ்வில் நஷ்டம் வராது.",
    altTranslation: "Do not let yourself be deceived or cheated."
  },
  // ============================================================
  // இறுதி வர்க்கம் — Final Group (verses 79–91 + closing)
  // ============================================================
  {
    num: 79, section: 'finalgroup', letter: 'ய',
    tamil: "யாரையும் இகழேல்.",
    transliteration: "Yāraiyum ikaḻēl.",
    english: "Do not despise anyone.",
    tamilUrai: "எந்த மனிதரையும் இகழ்ந்து பேசாதே. அனைவரும் மரியாதைக்குரியவர்கள். ஒருவரை இகழ்வது நம்மையே இகழ்வதாகும்.",
    altTranslation: "Do not look down upon or despise anyone."
  },
  {
    num: 80, section: 'finalgroup', letter: 'வ',
    tamil: "வாய்மை வழுவேல்.",
    transliteration: "Vāymai vaḻuvēl.",
    english: "Do not slip from truthfulness.",
    tamilUrai: "உண்மையிலிருந்து தவறாதே. வாய்மை என்னும் நற்பண்பை எந்த சூழலிலும் கைவிடாதே. உண்மை பேசுவதே வாழ்வின் தூண்.",
    altTranslation: "Never let your feet slip from the path of truth."
  },
  {
    num: 81, section: 'finalgroup', letter: 'வா',
    tamil: "வாதம் ஆடேல்.",
    transliteration: "Vātam āṭēl.",
    english: "Do not engage in pointless argument.",
    tamilUrai: "வீண் வாதங்களில் ஈடுபடாதே. பயனற்ற வாக்குவாதம் நட்பை கெடுக்கும். உண்மை தேடும் விவாதம் நல்லது; அகந்தைக்காக வாதிடுவது தீமையானது.",
    altTranslation: "Do not waste yourself in empty argumentation."
  },
  {
    num: 82, section: 'finalgroup', letter: 'வி',
    tamil: "விருந்தோம்பு.",
    transliteration: "Viruntōmpu.",
    english: "Cherish the guest.",
    tamilUrai: "வீட்டிற்கு வரும் விருந்தினரை அன்பாக உபசரி. விருந்தோம்பல் இல்லத்தின் பெருமை. விருந்தினரில் தெய்வம் உறைகிறது என்பது மரபு.",
    altTranslation: "Welcome and cherish the guest in your home."
  },
  {
    num: 83, section: 'finalgroup', letter: 'வீ',
    tamil: "வீண் வார்த்தை பேசேல்.",
    transliteration: "Vīṇ vārttai pēcēl.",
    english: "Speak no empty, wasteful words.",
    tamilUrai: "வீண் வார்த்தைகளை பேசாதே. அர்த்தமற்ற, பயனற்ற பேச்சு மரியாதையை குறைக்கும். ஒவ்வொரு வார்த்தையும் பயனுடையதாக இருக்க வேண்டும்.",
    altTranslation: "Speak no empty or purposeless words."
  },
  {
    num: 84, section: 'finalgroup', letter: 'வு',
    tamil: "வுலகியல் அறி.",
    transliteration: "Vulakayal aṟi.",
    english: "Know the ways of the world.",
    tamilUrai: "உலகம் எப்படி இயங்குகிறது என்பதை புரிந்துகொள். உலக அறிவு இல்லாமல் நடப்பவன் எளிதில் ஏமாறுவான். உலக இயல் தெரிந்தவனே வாழ்வில் திறமையாக முன்னேறுவான்.",
    altTranslation: "Know and understand the ways in which the world works."
  },
  {
    num: 85, section: 'finalgroup', letter: 'வூ',
    tamil: "வூக்கமுடன் வாழ்.",
    transliteration: "Vūkkam uṭaṉ vāḻ.",
    english: "Live with vigour and energy.",
    tamilUrai: "உத்சாகத்துடன் வாழு. உற்சாகமே வாழ்வின் உயிர்நாடி. சோர்வற்ற மனதுடன் செயல்படுவதே வெற்றிக்கு வழி.",
    altTranslation: "Live with vigour, drive, and full energy."
  },
  {
    num: 86, section: 'finalgroup', letter: 'ழ',
    tamil: "ழகர பெயர் சொல்லேல்.",
    transliteration: "Ḻakara peyar collēl.",
    english: "Do not use words that carry shame.",
    tamilUrai: "இழிவான, மானக்கேடான வார்த்தைகளை பயன்படுத்தாதே. கேட்பவர் மனம் காயப்படும் வார்த்தைகள் பேசுவது அறமல்ல.",
    altTranslation: "Do not use words that bring shame."
  },
  {
    num: 87, section: 'finalgroup', letter: 'ள',
    tamil: "ளகர ஒழுக்கம் கொள்.",
    transliteration: "Ḷakara oḻukkam koḷ.",
    english: "Hold to inner uprightness.",
    tamilUrai: "உள்ளொழுக்கம் — மனதின் ஆழத்திலிருந்து வரும் ஒழுக்கம் — கொள். வெளியே மட்டும் நல்லவனாக நடிக்காமல் உள்ளும் நல்லவனாக இரு.",
    altTranslation: "Hold to deep inner uprightness, not mere outward show."
  },
  {
    num: 88, section: 'finalgroup', letter: 'ற',
    tamil: "றகர வலிமை கொள்.",
    transliteration: "Ṟakara valimai koḷ.",
    english: "Hold to inner strength.",
    tamilUrai: "மனத்திண்மையை கொள். வலிமையான மனம் கடினமான சூழல்களை தாண்டும் ஆற்றல் தரும். உள் வலிமையே மனிதனின் மிகப் பெரிய ஆதரவு.",
    altTranslation: "Cultivate inner strength and fortitude."
  },
  {
    num: 89, section: 'finalgroup', letter: 'ன',
    tamil: "னகர நன்மை செய்.",
    transliteration: "Ṉakara naṉmai cey.",
    english: "Do good in all your dealings.",
    tamilUrai: "நன்மை செய்வதையே வாழ்க்கையின் குறிக்கோளாகக் கொள். நல்லது செய்தவருக்கு நன்மையே திரும்பி வரும். நன்மை செய்வதே மனித இயல்பு.",
    altTranslation: "Let doing good be the purpose running through all you do."
  },
  {
    num: 90, section: 'finalgroup', letter: 'ஃ',
    tamil: "அஃகம் சுருக்கேல்.",
    transliteration: "Akam curukkēl.",
    english: "Do not shrink the space of the heart.",
    tamilUrai: "உள்ளத்தை — அன்பை, கருணையை — சுருக்கிக்கொள்ளாதே. மனதை விரிவடையச் செய்வதே மேன்மை. தாராள மனம் கொண்டிருப்பதே வாழ்வின் சிறப்பு.",
    altTranslation: "Do not shrink the heart — keep it wide and generous."
  },
  {
    num: 91, section: 'finalgroup', letter: '◆',
    tamil: "கொன்றை வேந்தனைக் கொண்டாடு.",
    transliteration: "Koṉṟai vēntaṉai koṇṭāṭu.",
    english: "Celebrate Konraivendhan — the Lord of the Konrai tree.",
    tamilUrai: "முருகப்பெருமானை — கொன்றை மலர் அணிந்த வேந்தனை — கொண்டாடு. இந்த நூலின் நாயகனையும் சிறப்பித்து வாழ்க்கையை நடத்துவாயாக.",
    altTranslation: "Celebrate Konraivendhan — Murugan, the lord of the konrai flower."
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.KONRAIVENDHAN_DATA = {
    sections: KONRAIVENDHAN_SECTIONS,
    verses: KONRAIVENDHAN_VERSES
  };
}
