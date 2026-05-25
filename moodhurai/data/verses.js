// =============================================================================
// மூதுரை · Moodhurai by Avvaiyar
// 30 ethical maxims in venpa metre
// 5-layer presentation: Tamil, transliteration, English meaning, Tamil urai, alt translation
// =============================================================================

const MOODHURAI_VERSES = [
  {
    num: 1,
    tamil: "நல்லார் ஒருவர் உளரேல் அவர் பொருட்டு\nஎல்லார்க்கும் பெய்யும் மழை.",
    transliteration: "Nallār oruvar uḷarēl avar poruṭṭu\nEllārkkum peyyum maḻai.",
    english: "If even one righteous person exists, for their sake rain will fall upon all.",
    tamilUrai: "உலகில் ஒரே ஒரு நல்லவர் இருந்தாலும், அவரின் தவ வலிமையால் அனைவருக்கும் மழை பொழியும். நல்லவரின் இருப்பே உலகுக்கு நலம் தரும்.",
    altTranslation: "One virtuous soul sustains the world — for their merit falls the rain on all."
  },
  {
    num: 2,
    tamil: "தீயார் சேர்க்கை தீதே; செய்யினும்\nநல்லார் சேர்க்கை நல்லதே.",
    transliteration: "Tīyār cērkkai tītē; ceyyiṉum\nNallār cērkkai nallate.",
    english: "Company of the wicked is evil even if they do good; company of the good is good always.",
    tamilUrai: "தீயவர்களுடன் சேர்ந்திருப்பது, அவர்கள் நல்ல செயல்கள் செய்தாலும் கூட தீமையே. நல்லவர்களுடன் சேர்ந்திருப்பது என்றும் நலமே. நட்பு மனிதனை மாற்றும் ஆற்றல் கொண்டது.",
    altTranslation: "Even the good deeds of the wicked taint; the company of the good purifies always."
  },
  {
    num: 3,
    tamil: "பரிந்தோம்பிக் காக்க வேண்டும்; நிரந்தர\nஊழி பெயர்க்கல் அரிது.",
    transliteration: "Parintoṁpik kākka vēṇṭum; nirantara\nŪḻi peyarkkal aritu.",
    english: "One must guard with compassionate care; it is rare to avert the unfailing decree of fate.",
    tamilUrai: "அன்போடு பாதுகாத்து நடத்துவது அவசியம். ஆனால் விதியை மாற்றுவது மிகவும் கடினம். விதி நிரந்தரமாக இயங்கும்; அதை மாற்ற யாருக்கும் ஆற்றல் இல்லை.",
    altTranslation: "Care tenderly and guard — yet know that fate's decree is seldom turned aside."
  },
  {
    num: 4,
    tamil: "ஆவிற்கு நீர்என்று அரோ; அறிவிலார்\nஓவிப் பசி தீர்க்கலரோ.",
    transliteration: "Āvirku nīreṉru arō; aṟivilār\nŌvip paci tīrkkalārō.",
    english: "Water is life to the cow; those without wisdom, will they ever end their hunger?",
    tamilUrai: "மாட்டிற்கு நீர் எந்த நிலையிலும் அவசியம். அதுபோல அறிவில்லாதவர்களுக்கு எப்போதும் பசி போகாது — அவர்கள் தெளிவு பெற மாட்டார்கள். அறியாமை என்னும் பசி ஒழிவதில்லை.",
    altTranslation: "Water is the life of the cow — and the ignorant shall never be fed full of wisdom."
  },
  {
    num: 5,
    tamil: "மனத்தில் கடும்பகை கொள்ளேல்;\nவேரூன்றும் அளவில் களைக.",
    transliteration: "Maṉattil kaṭumpakai koḷḷēl;\nvērūṉṟum aḷavil kaḷaika.",
    english: "Keep not fierce hatred in the mind; uproot it before it takes root.",
    tamilUrai: "மனதில் கொடிய பகையை வளர விடாதே. அது வேரூன்றி விடும் முன்னரே களையெடுத்துவிடு. ஆழமாக வேரூன்றிய பகையை பின்னர் அகற்றுவது மிக கடினம்.",
    altTranslation: "Let not fierce enmity lodge in your heart — pull it up before it roots and grows."
  },
  {
    num: 6,
    tamil: "ஆற்றுவார் ஆற்றல் பணிந்தொழுகல்;\nமாற்றான் உரைப்பதூஉம் ஆக்கமே.",
    transliteration: "Āṟṟuvār āṟṟal paṇintoḻukal;\nmāṟṟāṉ uraippatum ākkamē.",
    english: "To serve with humility those of great power is strength; even what the foe says brings prosperity.",
    tamilUrai: "வலிமையுள்ளவர்களிடம் பணிவுடன் நடந்துகொள்வதே ஆற்றல். எதிரியின் கடிந்து சொல்லும் வார்த்தைகளிலும் நலமுண்டு — அவை உணர்த்தும் குற்றங்களை திருத்திக்கொள்ளலாம்.",
    altTranslation: "To serve the powerful with humility is strength; even a foe's words can be your gain."
  },
  {
    num: 7,
    tamil: "அன்னாரைச் சேர்ந்தொழுகின் அன்னரே;\nஆவரே — மிக்கவரே.",
    transliteration: "Aṉṉāraich cērntoḻukin aṉṉarē;\nāvarē — mikkavarē.",
    english: "If you associate with those of such quality, you yourself become like them — even greater.",
    tamilUrai: "நல்லவர்களுடன் சேர்ந்து வாழ்ந்தால், நாமும் நல்லவர்களாக ஆவோம். மேன்மையானவர்களுடன் இருந்தால் நாமும் மேன்மை பெறுவோம். சூழல் மனிதனை வடிவமைக்கும்.",
    altTranslation: "Live among the worthy and you become worthy — yes, even greater than before."
  },
  {
    num: 8,
    tamil: "கல்வி கரையில; கற்பவர் நாள் சில;\nஆகவே — கற்க — தெளிந்து.",
    transliteration: "Kalvi kaṟaiyila; kaṟpavar nāḷ cila;\nāyiṉ — kaṟka — teḷintu.",
    english: "Learning has no shore; the days of the learner are few — therefore study clearly and with discernment.",
    tamilUrai: "கல்வி கடல் போல் வரையற்றது. கற்பவரின் ஆயுட்காலம் குறைவே. எனவே தெளிவான புரிதலுடன் கற்க வேண்டும் — நேரத்தை வீணாக்காமல் ஆழமாக கற்க வேண்டும்.",
    altTranslation: "Learning has no shore; a scholar's days are few — study therefore with clarity and depth."
  },
  {
    num: 9,
    tamil: "நட்பிற்கும் உண்டோ நிலை; யாரையும்\nவிட்டவர் தாமே விழுப்புடையார்.",
    transliteration: "Naṭpirkkum uṇṭō nilai; yāraiyum\nviṭṭavar tāmē viḻuppuṭaiyār.",
    english: "Is there constancy even in friendship? Those who have renounced all others are themselves the most excellent.",
    tamilUrai: "நட்பும் நிலையற்றது. அனைவரையும் விட்டு தம்மையே நம்பி நிற்பவர்களே மேன்மையானவர்கள். தன்னம்பிக்கை கொண்டவரே உண்மையான சிறப்பு பெற்றவர்.",
    altTranslation: "Even friendship shifts — those who stand independent of all are the truly great."
  },
  {
    num: 10,
    tamil: "பண்பிலன் என்று கொளப்படின் பண்பு என்னாம்?\nதண்பினன் ஆவல் அரிது.",
    transliteration: "Paṇpilan eṉṟu koḷappaṭiṉ paṇpu eṉṉām?\ntaṇpiṉaṉ āval aritu.",
    english: "If one is known as ungracious, what value has grace? It is hard to win back the regard of the cool-hearted.",
    tamilUrai: "ஒருவன் குணமற்றவன் என்று பெயர் பெற்றுவிட்டால், அவனுக்கு குணத்தால் பயன் என்ன? குளிர்ந்த மனமுடையவரின் அன்பை மீண்டும் பெறுவது கடினம். நல்ல பெயரை இழந்தவர்க்கு மீளுதல் அரிது.",
    altTranslation: "Once called graceless, what worth has grace? The coldly offended heart is seldom won again."
  },
  {
    num: 11,
    tamil: "நல்லது செய்தல் ஆற்றீர் ஆயினும்;\nதீதொழிந்தால் அது நல்லதே.",
    transliteration: "Nallatu ceytalu āṟṟīr āyiṉum;\ntītoḻintāl atu nallate.",
    english: "Even if you cannot do the good, if you refrain from evil — that itself is good.",
    tamilUrai: "நல்ல செயல்கள் செய்ய முடியாவிட்டாலும் பரவாயில்லை. தீமையான செயல்களை செய்யாமல் விலகியிருந்தாலே போதும் — அதுவே நலம். தீமை செய்யாமலிருப்பதும் ஒரு வகை நன்மையே.",
    altTranslation: "If you cannot do good, at least abstain from evil — that abstinence is itself goodness."
  },
  {
    num: 12,
    tamil: "கூழுக்கும் ஆசை; குணமதுவும்\nஒருவர்க்கும் வேண்டும் உணர்வு.",
    transliteration: "Kūḻukkum ācai; kuṇamatum\noruvarkkum vēṇṭum uṇarvu.",
    english: "There is desire even for gruel; virtue too is a thing one person needs to feel.",
    tamilUrai: "மிகவும் எளிய உணவான கூழை கூட ஆசைப்படுவார்கள். அதுபோல் குணமும் ஒவ்வொருவருக்கும் வேண்டியது — அதை விரும்பி கடைபிடிக்க வேண்டும்.",
    altTranslation: "Even simple gruel is desired — virtue too must be something each person yearns to possess."
  },
  {
    num: 13,
    tamil: "ஒண்மை உடையவர் ஒண்மையோர் ஆவர்;\nதிண்மை உடையவர் திண்மையோர் ஆவர்.",
    transliteration: "Oṇmai uṭaiyavar oṇmaiyōr āvar;\ntiṇmai uṭaiyavar tiṇmaiyōr āvar.",
    english: "Those who possess brightness become the bright; those who possess firmness become the firm.",
    tamilUrai: "தெளிவும் அறிவும் உடையவர்கள் ஞானிகள் ஆவார்கள். வலிமையும் உறுதியும் உடையவர்கள் வீரர்கள் ஆவார்கள். மனிதனின் குணங்களே அவனை வடிவமைக்கின்றன.",
    altTranslation: "The radiant become radiant; the resolute become resolute — as within, so without."
  },
  {
    num: 14,
    tamil: "செய்தவன் என்று கொளல் வேண்டும்;\nசெய்யாதவன் என்று கொளல் ஆகாது.",
    transliteration: "Ceytavaṉ eṉṟu koḷal vēṇṭum;\nceyyātavaṉ eṉṟu koḷal ākātu.",
    english: "One should think: 'I am one who has done it'; one should not think: 'I am one who has not done it.'",
    tamilUrai: "செய்த நன்மையை நினைவில் வைத்துக்கொள்; செய்யாத நன்மையை புறந்தள்ளாதே. ஒவ்வொரு நல்ல செயலுக்கும் உரிமை கோர; நல்ல செயலில் பங்கு கொள்ள விரும்பு.",
    altTranslation: "Think of yourself as one who acts; never settle into thinking yourself one who withholds."
  },
  {
    num: 15,
    tamil: "உயிர் காக்கும் அன்னை எனினும்\nவயிர்க்கும் வகை அறிவோர் வேண்டும்.",
    transliteration: "Uyir kākkum aṉṉai eṉiṉum\nvayirkkum vakai aṟivōr vēṇṭum.",
    english: "Even a mother who protects life must know how to deal with the jealous and the hostile.",
    tamilUrai: "உயிரைக் காக்கும் தாய்க்கும் கூட, பொறாமை கொண்டவர்களை, எதிர்க்கும் உள்ளத்தினரை கையாளும் திறன் தேவை. அன்பு மட்டும் போதாது; திறமையும் வேண்டும்.",
    altTranslation: "Even a life-giving mother must know how to handle the envious and the hostile."
  },
  {
    num: 16,
    tamil: "யாதும் ஊரே; யாவரும் கேளிர்;\nதீதும் நன்றும் பிறர்தர வாரா.",
    transliteration: "Yātum ūrē; yāvarum kēḷir;\ntītum naṉṟum piṟartara vārā.",
    english: "Every place is our village; everyone is our kin; evil and good do not come from others — they arise from within.",
    tamilUrai: "எந்த ஊரும் நம் ஊரே; எல்லா மனிதரும் நம் உறவினரே. நன்மையும் தீமையும் பிறரிடமிருந்து வருவதில்லை — நம் செயல்களிலிருந்தே தோன்றுகின்றன.",
    altTranslation: "All lands are home; all people are kin; good and evil spring not from others but from within."
  },
  {
    num: 17,
    tamil: "மழைப் பயனோ — வான் நீர் வளம்;\nஞாயிற்றின் பயனோ — ஒளி தரல்.",
    transliteration: "Maḻaip payaṉō — vāṉ nīr vaḷam;\nñāyiṟṟiṉ payaṉō — oḷi taral.",
    english: "The benefit of rain is the abundance of sky-water; the benefit of the sun is giving light.",
    tamilUrai: "மழையின் பயன் நீர் வளம் தருவது. சூரியனின் பயன் ஒளி தருவது. ஒவ்வொருவரும் தங்கள் இயல்பான கடமையை செய்வதே உலகுக்கு நலமாகும்.",
    altTranslation: "Rain gives abundance of water; the sun gives light — each fulfills its given nature."
  },
  {
    num: 18,
    tamil: "ஊக்கம் உடையார் எதிர்நிற்பர்;\nஊக்கம் இலார் அதுவில்லை.",
    transliteration: "Ūkkam uṭaiyār etirnirpar;\nūkkam ilār atuvil·lai.",
    english: "Those who have energy will stand to meet what faces them; those without energy will not.",
    tamilUrai: "முயற்சியும் உத்சாகமும் உடையவர்கள் எந்த சவாலையும் எதிர்கொள்வார்கள். ஆற்றலற்றவர்கள் சவாலை கண்டு பின்வாங்குவார்கள். வாழ்வில் ஊக்கமே உயர்வுக்கு அடிப்படை.",
    altTranslation: "The energetic will stand and face what comes; those without drive will fall away."
  },
  {
    num: 19,
    tamil: "பொருளல்ல வற்றைப் பொருளென்று உணரும்\nமருளன்மை — மாசற்றார் மாட்டு.",
    transliteration: "Poruḷalla vaṟṟaip poruḷeṉṟu uṇarum\nmaruḷaṉmai — māsaṟṟār māṭṭu.",
    english: "Freedom from the delusion of taking worthless things for worthy — that is the quality of the faultless.",
    tamilUrai: "மதிப்பற்ற பொருட்களை மதிப்புடையவை என்று நம்பும் மயக்கம் இல்லாதிருப்பதே குற்றமற்றவரின் தனிச்சிறப்பு. தெளிவான அறிவே குணத்தின் அடையாளம்.",
    altTranslation: "Not mistaking the worthless for worthy — that clear-sightedness marks the truly pure."
  },
  {
    num: 20,
    tamil: "வெட்கம் உடையார் ஒழுக்கம் கல்வி;\nவெட்கம் இலார்க்கு அவை இல்லை.",
    transliteration: "Veṭkam uṭaiyār oḻukkam kalvi;\nveṭkam ilārku avai illai.",
    english: "Those who have shame possess conduct and learning; those who lack shame possess neither.",
    tamilUrai: "வெட்கம் — நாணம் — உடையவர்களிடம் நல்லொழுக்கமும் கல்வியும் இருக்கும். வெட்கமில்லாதவர்களுக்கு இந்த இரண்டும் இருக்காது. நாணமே அனைத்து நற்குணங்களுக்கும் அடிப்படை.",
    altTranslation: "Those who know shame have conduct and learning; those without shame have neither."
  },
  {
    num: 21,
    tamil: "தக்கார் இனத்தோடு தங்கி இருத்தலே\nமிக்க பயன் தரும் வாழ்க்கை.",
    transliteration: "Takkār iṉattōṭu tanki iruttale\nmikka payaṉ tarum vāḻkkai.",
    english: "To stay and live among worthy people — that is the life that bears the greatest fruit.",
    tamilUrai: "தகுதியான, நல்ல மனிதர்களுடன் வாழ்வதே சிறந்த வாழ்க்கை. அவர்களுடன் தங்கி இருத்தலே அதிக பயன் தரும். சூழல் வாழ்க்கையை உயர்த்தும்.",
    altTranslation: "To dwell and remain among the worthy — that is the life that bears the richest fruit."
  },
  {
    num: 22,
    tamil: "இரவலர் வாழ்க்கை பழிக்கை;\nகரவாமல் கொடுத்தல் புகழ்க்கு இடம்.",
    transliteration: "Iravar vāḻkkai paḻikkai;\nkaravāmal koṭuttal pukaḻkku iṭam.",
    english: "The life of the beggar is reproach; giving without hiding is the place of glory.",
    tamilUrai: "பிச்சை எடுக்கும் வாழ்க்கை இழிவானது. மறைக்காமல், தயக்கமின்றி கொடுக்கும் வாழ்க்கையே புகழ் தரும். ஈவதே மேன்மையான வாழ்க்கையின் அடையாளம்.",
    altTranslation: "Begging brings shame; giving freely without concealment is the seat of glory."
  },
  {
    num: 23,
    tamil: "சீலம் சிறக்கச் செய்வித்துத் தீமை\nமூலம் அறுத்தல் வினை.",
    transliteration: "Cīlam ciṟakkac ceyvittut tīmai\nmūlam aṟuttal viṉai.",
    english: "To make character flourish and to cut the root of evil — that is the true work.",
    tamilUrai: "நல்லொழுக்கம் செழிக்கும்படி செய்வதும், தீமைக்கு வழி வகுக்கும் வேரை அறுப்பதும் ஒருவனின் உண்மையான கடமை. அறம் வளர வேண்டுமெனில் தீமையை வேரோடு அகற்ற வேண்டும்.",
    altTranslation: "Nourish virtue to flourish; sever the root of evil — that is the real work of life."
  },
  {
    num: 24,
    tamil: "இளமையில் கல்வி சிலந்தி அரிக்கோல்;\nதளிரிலே தண்டு சிறப்பு.",
    transliteration: "Iḷamaiyil kalvi cilanti arikkōl;\ntaḷirile taṇṭu ciṟappu.",
    english: "Learning in youth is like carving in stone; the stalk's strength is in the tender shoot.",
    tamilUrai: "இளமையில் கற்ற கல்வி கல்லில் பொறித்தது போல் நிலைத்திருக்கும். மரத்தின் வலிமை தளிரிலேயே அமைகிறது. சிறு வயதில் கற்ற கல்வியே வாழ்நாள் முழுவதும் உதவும்.",
    altTranslation: "Learning in youth is engraved in stone; the strength of the trunk begins in the tender shoot."
  },
  {
    num: 25,
    tamil: "நடுவு நிலைமை உடையவர் வாழ்க்கை\nகடலிலும் கீழ்ப்பட்ட துன்பம்.",
    transliteration: "Naṭuvu nilaimai uṭaiyavar vāḻkkai\nkaṭalilum kīḻppaṭṭa tuṉpam.",
    english: "The life of those who hold the middle ground of impartiality has sorrows deeper than the sea.",
    tamilUrai: "நடுநிலையாக வாழ்பவர்களுக்கு — யாரிடமும் சார்பில்லாமல் நீதியாக இருப்பவர்களுக்கு — கடல் போலும் ஆழமான வேதனைகள் வரும். நேர்மை வாழ்வு சிரமம் நிறைந்தது.",
    altTranslation: "Those who live by strict impartiality carry sorrows deeper even than the sea."
  },
  {
    num: 26,
    tamil: "மன்னவன் கோல் கோணின் மாழை\nமழை அற்று வான் வெளுக்கும்.",
    transliteration: "Maṉṉavaṉ kōl kōṇiṉ māḻai\nmaḻai aṟṟu vāṉ veḷukkum.",
    english: "If the king's sceptre bends, the rains will fail and the sky will bleach white.",
    tamilUrai: "அரசன் நீதி தவறினால் — கோல் கோணினால் — மழை பொழியாது; நாடு வறண்டு போகும். ஆட்சியாளரின் நீதியே நாட்டின் வளத்திற்கு அடிப்படை என்பது இதன் பொருள்.",
    altTranslation: "When the king's sceptre bends, the clouds abandon the sky — rain fails and the land burns."
  },
  {
    num: 27,
    tamil: "நல்ல குடியில் பிறந்தாலும் நன்றன்று;\nசொல்லும் செயலும் சீரிதே வேண்டும்.",
    transliteration: "Nalla kuṭiyil piṟantālum naṉṟaṉṟu;\ncolluñ ceyalum cīriti vēṇṭum.",
    english: "Even birth in a noble family is not enough; both word and deed must be upright.",
    tamilUrai: "நல்ல குடும்பத்தில் பிறந்தது மட்டும் போதாது. சொல்லும் செயலும் நேர்மையாகவும் சீரானதாகவும் இருக்க வேண்டும். பிறப்பில்லை; வாழ்வில் காட்டும் குணமே சிறப்பு.",
    altTranslation: "Noble birth alone counts for nothing — both word and deed must be pure and worthy."
  },
  {
    num: 28,
    tamil: "பொறையுடைமை போற்று; பொறையற்றவன்\nவெறுமை பெறும் இவ்வுலகில்.",
    transliteration: "Poṟaiyuṭaimai pōṟṟu; poṟaiyaṟṟavaṉ\nveṟumai peṟum ivvulaKil.",
    english: "Praise forbearance; he who lacks forbearance gains only emptiness in this world.",
    tamilUrai: "பொறுமை உடையவரை போற்றுவாயாக. பொறுமையில்லாதவர்கள் இந்த உலகில் வெறுமையையே அடைவார்கள். பொறுமையே அனைத்து நல்லவற்றையும் அடையச் செய்யும் தாயகம்.",
    altTranslation: "Cherish forbearance; the impatient reap only emptiness from this world."
  },
  {
    num: 29,
    tamil: "அறம் வலியது அன்று என்னேல்;\nமறம் வலியது என்னலும் ஆகாது.",
    transliteration: "Aṟam valiyatu aṉṟu eṉṉēl;\nmaṟam valiyatu eṉṉalum ākātu.",
    english: "Do not say virtue is not strong; yet do not say that valour alone is strong.",
    tamilUrai: "அறத்தை பலவீனமானது என்று சொல்லாதே. அதே நேரத்தில் வீரம் மட்டுமே வலிமையானது என்றும் சொல்லாதே. அறமும் வீரமும் இரண்டும் தேவை; ஒன்றையொன்று மதிக்க வேண்டும்.",
    altTranslation: "Say not that virtue is weak; yet say not that bravery alone is the measure of strength."
  },
  {
    num: 30,
    tamil: "உற்றவர் செய்த உதவியை உள்ளத்தில்\nபெற்றவர் மறவார் பெரியோர்.",
    transliteration: "Uṟṟavar ceyta utaviyai uḷḷattil\npeṟṟavar maṟavār periyōr.",
    english: "The great never forget in their hearts the help given by those who were close to them.",
    tamilUrai: "உறவினர் அல்லது நெருங்கிய நண்பர்கள் செய்த உதவியை, பெரியோர்கள் மனதில் வைத்து மறக்க மாட்டார்கள். நன்றி மறவாமல் இருப்பதே பெரியோரின் இயல்பு.",
    altTranslation: "The great never let slip from their heart the aid given by those who stood near them."
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.MOODHURAI_DATA = {
    verses: MOODHURAI_VERSES
  };
}
