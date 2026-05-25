// Thirukkural Data
// Tamil text: Public domain
// English translation: G.U. Pope (1886) - Public domain
// Tamil urai (commentary): Based on Mu. Varadarajanar's commentary style (public domain scholarship)
// Transliteration: Standard Tamil romanization

const THIRUKKURAL_SECTIONS = [
  {
    id: "aram",
    tamilName: "அறத்துப்பால்",
    transliteration: "Aṟattuppāl",
    englishName: "Virtue",
    description: "On righteous living, ethics, and the foundations of a good life",
    chapterRange: [1, 38]
  },
  {
    id: "porul",
    tamilName: "பொருட்பால்",
    transliteration: "Poruṭpāl",
    englishName: "Wealth & Polity",
    description: "On governance, statecraft, economics, and public life",
    chapterRange: [39, 108]
  },
  {
    id: "inbam",
    tamilName: "காமத்துப்பால்",
    transliteration: "Kāmattuppāl",
    englishName: "Love",
    description: "On love, courtship, union, and the pangs of separation",
    chapterRange: [109, 133]
  }
];

const CHAPTERS = [
  // ARAM — Virtue
  { num: 1, section: "aram", tamilName: "கடவுள் வாழ்த்து", transliteration: "Kaṭavuḷ Vāḻttu", englishName: "The Praise of God" },
  { num: 2, section: "aram", tamilName: "வான்சிறப்பு", transliteration: "Vāṉciṟappu", englishName: "The Excellence of Rain" },
  { num: 3, section: "aram", tamilName: "நீத்தார் பெருமை", transliteration: "Nīttār Perumai", englishName: "The Greatness of Ascetics" },
  { num: 4, section: "aram", tamilName: "அறன் வலியுறுத்தல்", transliteration: "Aṟaṉ Valiyuṟuttal", englishName: "Assertion of the Strength of Virtue" },
  { num: 5, section: "aram", tamilName: "இல்வாழ்க்கை", transliteration: "Ilvāḻkkai", englishName: "Domestic Life" },
  { num: 6, section: "aram", tamilName: "வாழ்க்கைத் துணைநலம்", transliteration: "Vāḻkkait Tuṇainalam", englishName: "The Good Wife" },
  { num: 7, section: "aram", tamilName: "புதல்வரைப் பெறுதல்", transliteration: "Putalvaraip Peṟutal", englishName: "The Obtaining of Sons" },
  { num: 8, section: "aram", tamilName: "அன்புடைமை", transliteration: "Aṉpuṭaimai", englishName: "The Possession of Love" },
  { num: 9, section: "aram", tamilName: "விருந்தோம்பல்", transliteration: "Viruntōmpal", englishName: "Hospitality" },
  { num: 10, section: "aram", tamilName: "இனியவை கூறல்", transliteration: "Iṉiyavai Kūṟal", englishName: "The Utterance of Pleasant Words" },
  { num: 11, section: "aram", tamilName: "செய்ந்நன்றி அறிதல்", transliteration: "Ceynnaṉṟi Aṟital", englishName: "Gratitude" },
  { num: 12, section: "aram", tamilName: "நடுவு நிலைமை", transliteration: "Naṭuvu Nilaimai", englishName: "Impartiality" },
  { num: 13, section: "aram", tamilName: "அடக்கமுடைமை", transliteration: "Aṭakkamuṭaimai", englishName: "The Possession of Self-Restraint" },
  { num: 14, section: "aram", tamilName: "ஒழுக்கமுடைமை", transliteration: "Oḻukkamuṭaimai", englishName: "The Possession of Decorum" },
  { num: 15, section: "aram", tamilName: "பிறனில் விழையாமை", transliteration: "Piṟaṉil Viḻaiyāmai", englishName: "Not Coveting Another's Wife" },
  { num: 16, section: "aram", tamilName: "பொறையுடைமை", transliteration: "Poṟaiyuṭaimai", englishName: "The Possession of Patience" },
  { num: 17, section: "aram", tamilName: "அழுக்காறாமை", transliteration: "Aḻukkāṟāmai", englishName: "Not Envying" },
  { num: 18, section: "aram", tamilName: "வெஃகாமை", transliteration: "Veḵkāmai", englishName: "Not Coveting" },
  { num: 19, section: "aram", tamilName: "புறங்கூறாமை", transliteration: "Puṟaṅkūṟāmai", englishName: "Not Backbiting" },
  { num: 20, section: "aram", tamilName: "பயனில சொல்லாமை", transliteration: "Payaṉila Collāmai", englishName: "Not Speaking Useless Words" },
  { num: 21, section: "aram", tamilName: "தீவினையச்சம்", transliteration: "Tīviṉaiyaccam", englishName: "Dread of Evil Deeds" },
  { num: 22, section: "aram", tamilName: "ஒப்புரவறிதல்", transliteration: "Oppuravaṟital", englishName: "Duty to Society" },
  { num: 23, section: "aram", tamilName: "ஈகை", transliteration: "Īkai", englishName: "Giving" },
  { num: 24, section: "aram", tamilName: "புகழ்", transliteration: "Pukaḻ", englishName: "Renown" },
  { num: 25, section: "aram", tamilName: "அருளுடைமை", transliteration: "Aruḷuṭaimai", englishName: "The Possession of Benevolence" },
  { num: 26, section: "aram", tamilName: "புலான் மறுத்தல்", transliteration: "Pulāṉ Maṟuttal", englishName: "Abstinence from Flesh" },
  { num: 27, section: "aram", tamilName: "தவம்", transliteration: "Tavam", englishName: "Penance" },
  { num: 28, section: "aram", tamilName: "கூடாவொழுக்கம்", transliteration: "Kūṭāvoḻukkam", englishName: "Inconsistent Conduct" },
  { num: 29, section: "aram", tamilName: "கள்ளாமை", transliteration: "Kaḷḷāmai", englishName: "The Absence of Fraud" },
  { num: 30, section: "aram", tamilName: "வாய்மை", transliteration: "Vāymai", englishName: "Veracity" },
  { num: 31, section: "aram", tamilName: "வெகுளாமை", transliteration: "Vekuḷāmai", englishName: "Restraining Anger" },
  { num: 32, section: "aram", tamilName: "இன்னா செய்யாமை", transliteration: "Iṉṉā Ceyyāmai", englishName: "Not Doing Evil" },
  { num: 33, section: "aram", tamilName: "கொல்லாமை", transliteration: "Kollāmai", englishName: "Not Killing" },
  { num: 34, section: "aram", tamilName: "நிலையாமை", transliteration: "Nilaiyāmai", englishName: "Instability" },
  { num: 35, section: "aram", tamilName: "துறவு", transliteration: "Tuṟavu", englishName: "Renunciation" },
  { num: 36, section: "aram", tamilName: "மெய்யுணர்தல்", transliteration: "Meyyuṇartal", englishName: "Knowledge of Truth" },
  { num: 37, section: "aram", tamilName: "அவாவறுத்தல்", transliteration: "Avāvaṟuttal", englishName: "The Extirpation of Desire" },
  { num: 38, section: "aram", tamilName: "ஊழ்", transliteration: "Ūḻ", englishName: "Fate" },

  // PORUL — Wealth & Polity (39-108)
  { num: 39, section: "porul", tamilName: "இறைமாட்சி", transliteration: "Iṟaimāṭci", englishName: "The Greatness of a King" },
  { num: 40, section: "porul", tamilName: "கல்வி", transliteration: "Kalvi", englishName: "Learning" },
  { num: 41, section: "porul", tamilName: "கல்லாமை", transliteration: "Kallāmai", englishName: "Ignorance" },
  { num: 42, section: "porul", tamilName: "கேள்வி", transliteration: "Kēḷvi", englishName: "Hearing" },
  { num: 43, section: "porul", tamilName: "அறிவுடைமை", transliteration: "Aṟivuṭaimai", englishName: "The Possession of Knowledge" },
  { num: 44, section: "porul", tamilName: "குற்றங்கடிதல்", transliteration: "Kuṟṟaṅkaṭital", englishName: "The Correction of Faults" },
  { num: 45, section: "porul", tamilName: "பெரியாரைத் துணைக்கோடல்", transliteration: "Periyāraith Tuṇaikkōṭal", englishName: "Seeking the Aid of Great Men" },
  { num: 46, section: "porul", tamilName: "சிற்றினஞ்சேராமை", transliteration: "Ciṟṟiṉañcērāmai", englishName: "Avoiding Mean Associations" },
  { num: 47, section: "porul", tamilName: "தெரிந்து செயல்வகை", transliteration: "Terintu Ceyalvakai", englishName: "Acting after Due Consideration" },
  { num: 48, section: "porul", tamilName: "வலியறிதல்", transliteration: "Valiyaṟital", englishName: "The Knowledge of Power" },
  { num: 49, section: "porul", tamilName: "காலமறிதல்", transliteration: "Kālamaṟital", englishName: "Knowing the Fitting Time" },
  { num: 50, section: "porul", tamilName: "இடனறிதல்", transliteration: "Iṭaṉaṟital", englishName: "Knowing the Place" },
  { num: 51, section: "porul", tamilName: "தெரிந்து தெளிதல்", transliteration: "Terintu Teḷital", englishName: "Selection and Confidence" },
  { num: 52, section: "porul", tamilName: "தெரிந்து வினையாடல்", transliteration: "Terintu Viṉaiyāṭal", englishName: "Selection and Employment" },
  { num: 53, section: "porul", tamilName: "சுற்றந்தழால்", transliteration: "Cuṟṟantaḻāl", englishName: "Cherishing Kinsmen" },
  { num: 54, section: "porul", tamilName: "பொச்சாவாமை", transliteration: "Poccāvāmai", englishName: "Unforgetfulness" },
  { num: 55, section: "porul", tamilName: "செங்கோன்மை", transliteration: "Ceṅkōṉmai", englishName: "The Right Sceptre" },
  { num: 56, section: "porul", tamilName: "கொடுங்கோன்மை", transliteration: "Koṭuṅkōṉmai", englishName: "The Cruel Sceptre" },
  { num: 57, section: "porul", tamilName: "வெருவந்த செய்யாமை", transliteration: "Veruvanta Ceyyāmai", englishName: "Absence of Terrorism" },
  { num: 58, section: "porul", tamilName: "கண்ணோட்டம்", transliteration: "Kaṇṇōṭṭam", englishName: "Benignity" },
  { num: 59, section: "porul", tamilName: "ஒற்றாடல்", transliteration: "Oṟṟāṭal", englishName: "Detectives" },
  { num: 60, section: "porul", tamilName: "ஊக்கமுடைமை", transliteration: "Ūkkamuṭaimai", englishName: "Energy" },
  { num: 61, section: "porul", tamilName: "மடியின்மை", transliteration: "Maṭiyiṉmai", englishName: "Unsluggishness" },
  { num: 62, section: "porul", tamilName: "ஆள்வினையுடைமை", transliteration: "Āḷviṉaiyuṭaimai", englishName: "Manly Effort" },
  { num: 63, section: "porul", tamilName: "இடுக்கண் அழியாமை", transliteration: "Iṭukkaṇ Aḻiyāmai", englishName: "Hopefulness in Trouble" },
  { num: 64, section: "porul", tamilName: "அமைச்சு", transliteration: "Amaiccu", englishName: "The Office of Minister" },
  { num: 65, section: "porul", tamilName: "சொல்வன்மை", transliteration: "Colvaṉmai", englishName: "Power in Speech" },
  { num: 66, section: "porul", tamilName: "வினைத்தூய்மை", transliteration: "Viṉaittūymai", englishName: "Purity in Action" },
  { num: 67, section: "porul", tamilName: "வினைத்திட்பம்", transliteration: "Viṉaittiṭpam", englishName: "Power in Action" },
  { num: 68, section: "porul", tamilName: "வினை செயல்வகை", transliteration: "Viṉai Ceyalvakai", englishName: "Methods of Action" },
  { num: 69, section: "porul", tamilName: "தூது", transliteration: "Tūtu", englishName: "The Envoy" },
  { num: 70, section: "porul", tamilName: "மன்னரைச் சேர்ந்தொழுகல்", transliteration: "Maṉṉaraic Cērntoḻukal", englishName: "Conduct in the Presence of the King" },
  { num: 71, section: "porul", tamilName: "குறிப்பறிதல்", transliteration: "Kuṟippaṟital", englishName: "The Knowledge of Indications" },
  { num: 72, section: "porul", tamilName: "அவையறிதல்", transliteration: "Avaiyaṟital", englishName: "The Knowledge of the Council" },
  { num: 73, section: "porul", tamilName: "அவையஞ்சாமை", transliteration: "Avaiyañcāmai", englishName: "Not to Dread the Council" },
  { num: 74, section: "porul", tamilName: "நாடு", transliteration: "Nāṭu", englishName: "The Land" },
  { num: 75, section: "porul", tamilName: "அரண்", transliteration: "Araṇ", englishName: "The Fortification" },
  { num: 76, section: "porul", tamilName: "பொருள் செயல்வகை", transliteration: "Poruḷ Ceyalvakai", englishName: "Way of Accumulating Wealth" },
  { num: 77, section: "porul", tamilName: "படைமாட்சி", transliteration: "Paṭaimāṭci", englishName: "The Greatness of an Army" },
  { num: 78, section: "porul", tamilName: "படைச்செருக்கு", transliteration: "Paṭaicceṟukku", englishName: "Military Spirit" },
  { num: 79, section: "porul", tamilName: "நட்பு", transliteration: "Naṭpu", englishName: "Friendship" },
  { num: 80, section: "porul", tamilName: "நட்பாராய்தல்", transliteration: "Naṭpārāytal", englishName: "Investigation in Forming Friendships" },
  { num: 81, section: "porul", tamilName: "பழைமை", transliteration: "Paḻaimai", englishName: "Familiarity" },
  { num: 82, section: "porul", tamilName: "தீ நட்பு", transliteration: "Tī Naṭpu", englishName: "Evil Friendship" },
  { num: 83, section: "porul", tamilName: "கூடா நட்பு", transliteration: "Kūṭā Naṭpu", englishName: "Unreal Friendship" },
  { num: 84, section: "porul", tamilName: "பேதைமை", transliteration: "Pētaimai", englishName: "Folly" },
  { num: 85, section: "porul", tamilName: "புல்லறிவாண்மை", transliteration: "Pullaṟivāṇmai", englishName: "Ignorance" },
  { num: 86, section: "porul", tamilName: "இகல்", transliteration: "Ikal", englishName: "Hatred" },
  { num: 87, section: "porul", tamilName: "பகைமாட்சி", transliteration: "Pakaimāṭci", englishName: "The Might of Hatred" },
  { num: 88, section: "porul", tamilName: "பகைத்திறந்தெரிதல்", transliteration: "Pakaittiṟanterital", englishName: "Knowing the Quality of Hate" },
  { num: 89, section: "porul", tamilName: "உட்பகை", transliteration: "Uṭpakai", englishName: "Enmity Within" },
  { num: 90, section: "porul", tamilName: "பெரியாரைப் பிழையாமை", transliteration: "Periyāraip Piḻaiyāmai", englishName: "Not Offending the Great" },
  { num: 91, section: "porul", tamilName: "பெண்வழிச் சேறல்", transliteration: "Peṇvaḻic Cēṟal", englishName: "Being led by Women" },
  { num: 92, section: "porul", tamilName: "வரைவின் மகளிர்", transliteration: "Varaiviṉ Makaḷir", englishName: "Wanton Women" },
  { num: 93, section: "porul", tamilName: "கள்ளுண்ணாமை", transliteration: "Kaḷḷuṇṇāmai", englishName: "Not Drinking Palm-Wine" },
  { num: 94, section: "porul", tamilName: "சூது", transliteration: "Cūtu", englishName: "Gambling" },
  { num: 95, section: "porul", tamilName: "மருந்து", transliteration: "Maruntu", englishName: "Medicine" },
  { num: 96, section: "porul", tamilName: "குடிமை", transliteration: "Kuṭimai", englishName: "Nobility" },
  { num: 97, section: "porul", tamilName: "மானம்", transliteration: "Māṉam", englishName: "Honour" },
  { num: 98, section: "porul", tamilName: "பெருமை", transliteration: "Perumai", englishName: "Greatness" },
  { num: 99, section: "porul", tamilName: "சான்றாண்மை", transliteration: "Cāṉṟāṇmai", englishName: "Perfectness" },
  { num: 100, section: "porul", tamilName: "பண்புடைமை", transliteration: "Paṇpuṭaimai", englishName: "Courtesy" },
  { num: 101, section: "porul", tamilName: "நன்றியில் செல்வம்", transliteration: "Naṉṟiyil Celvam", englishName: "Wealth without Benefaction" },
  { num: 102, section: "porul", tamilName: "நாணுடைமை", transliteration: "Nāṇuṭaimai", englishName: "Shame" },
  { num: 103, section: "porul", tamilName: "குடிசெயல்வகை", transliteration: "Kuṭiceyalvakai", englishName: "The Way of Maintaining the Family" },
  { num: 104, section: "porul", tamilName: "உழவு", transliteration: "Uḻavu", englishName: "Farming" },
  { num: 105, section: "porul", tamilName: "நல்குரவு", transliteration: "Nalkuravu", englishName: "Poverty" },
  { num: 106, section: "porul", tamilName: "இரவு", transliteration: "Iravu", englishName: "Mendicancy" },
  { num: 107, section: "porul", tamilName: "இரவச்சம்", transliteration: "Iravaccam", englishName: "The Dread of Mendicancy" },
  { num: 108, section: "porul", tamilName: "கயமை", transliteration: "Kayamai", englishName: "Baseness" },

  // INBAM — Love (109-133)
  { num: 109, section: "inbam", tamilName: "தகையணங்குறுத்தல்", transliteration: "Takaiyaṇaṅkuṟuttal", englishName: "The Pre-marital Love" },
  { num: 110, section: "inbam", tamilName: "குறிப்பறிதல்", transliteration: "Kuṟippaṟital", englishName: "Recognition of Signs" },
  { num: 111, section: "inbam", tamilName: "புணர்ச்சி மகிழ்தல்", transliteration: "Puṇarcci Makiḻtal", englishName: "Rejoicing in Union" },
  { num: 112, section: "inbam", tamilName: "நலம் புனைந்துரைத்தல்", transliteration: "Nalam Puṉaintu­raittal", englishName: "Praise of her Beauty" },
  { num: 113, section: "inbam", tamilName: "காதற் சிறப்புரைத்தல்", transliteration: "Kātaṟ Ciṟappuraittal", englishName: "Declaration of Love's Special Excellence" },
  { num: 114, section: "inbam", tamilName: "நாணுத் துறவுரைத்தல்", transliteration: "Nāṇut Tuṟavuraittal", englishName: "The Abandonment of Reserve" },
  { num: 115, section: "inbam", tamilName: "அலரறிவுறுத்தல்", transliteration: "Alaraṟivuṟuttal", englishName: "The Announcement of the Rumour" },
  { num: 116, section: "inbam", tamilName: "பிரிவாற்றாமை", transliteration: "Pirivāṟṟāmai", englishName: "Separation Unendurable" },
  { num: 117, section: "inbam", tamilName: "படர் மெலிந் திரங்கல்", transliteration: "Paṭar Meliṉ Tiraṅkal", englishName: "Complainings" },
  { num: 118, section: "inbam", tamilName: "கண்விதுப்பழிதல்", transliteration: "Kaṇvituppaḻital", englishName: "Eyes Consumed with Grief" },
  { num: 119, section: "inbam", tamilName: "பசப்புறு பருவரல்", transliteration: "Pacappuṟu Paruvaral", englishName: "The Sallow Hue" },
  { num: 120, section: "inbam", tamilName: "தனிப்படர் மிகுதி", transliteration: "Taṉippaṭar Mikuti", englishName: "Solitary Anguish" },
  { num: 121, section: "inbam", tamilName: "நினைந்தவர் புலம்பல்", transliteration: "Niṉaintavar Pulampal", englishName: "Sad Memories" },
  { num: 122, section: "inbam", tamilName: "கனவுநிலையுரைத்தல்", transliteration: "Kaṉavunilaiyuraittal", englishName: "The Visions of the Night" },
  { num: 123, section: "inbam", tamilName: "பொழுதுகண்டிரங்கல்", transliteration: "Poḻutukaṇṭiraṅkal", englishName: "Lamentations at Eventide" },
  { num: 124, section: "inbam", tamilName: "உறுப்புநலனழிதல்", transliteration: "Uṟuppunalaṉaḻital", englishName: "Wasting Away" },
  { num: 125, section: "inbam", tamilName: "நெஞ்சொடு கிளத்தல்", transliteration: "Neñcoṭu Kiḷattal", englishName: "Soliloquy" },
  { num: 126, section: "inbam", tamilName: "நிறையழிதல்", transliteration: "Niṟaiyaḻital", englishName: "Reserve Overcome" },
  { num: 127, section: "inbam", tamilName: "அவர்வயின் விதும்பல்", transliteration: "Avarvayiṉ Vitumpal", englishName: "Mutual Desire" },
  { num: 128, section: "inbam", tamilName: "குறிப்பறிவுறுத்தல்", transliteration: "Kuṟippaṟivuṟuttal", englishName: "The Reading of the Signs" },
  { num: 129, section: "inbam", tamilName: "புணர்ச்சி விதும்பல்", transliteration: "Puṇarcci Vitumpal", englishName: "Desire for Reunion" },
  { num: 130, section: "inbam", tamilName: "நெஞ்சொடு புலத்தல்", transliteration: "Neñcoṭu Pulattal", englishName: "Expostulation with Oneself" },
  { num: 131, section: "inbam", tamilName: "புலவி", transliteration: "Pulavi", englishName: "Pouting" },
  { num: 132, section: "inbam", tamilName: "புலவி நுணுக்கம்", transliteration: "Pulavi Nuṇukkam", englishName: "Feigned Anger" },
  { num: 133, section: "inbam", tamilName: "ஊடலுவகை", transliteration: "Ūṭaluvakai", englishName: "The Pleasures of Temporary Variance" }
];

// Detailed kurals with full content. Complete Chapter 1 & 2, sample from others.
const KURALS = [
  // CHAPTER 1 — The Praise of God (Complete)
  {
    num: 1, chapter: 1,
    tamil: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.",
    transliteration: "Akara mutala eḻuttellām āti\nPakavaṉ mutaṟṟē ulaku.",
    english: "As the letter A is the first of all letters, so the eternal God is first in the world.",
    tamilUrai: "எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாகக் கொண்டு இயங்குகின்றன; அதைப் போலவே, உலகம் ஆதியாகிய கடவுளை அடிப்படையாகக் கொண்டு இயங்குகிறது.",
    altTranslation: "'A' as its first of letters, every speech maintains; The 'Primal Deity' is first through all the world's domains. — Pope"
  },
  {
    num: 2, chapter: 1,
    tamil: "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்\nநற்றாள் தொழாஅர் எனின்.",
    transliteration: "Kaṟṟataṉāl āya payaṉeṉkol vālaṟivaṉ\nNaṟṟāḷ toḻāar eṉiṉ.",
    english: "What is the advantage of learning if one does not worship the good feet of Him who is pure knowledge?",
    tamilUrai: "தூய அறிவே வடிவானவனின் நல்ல திருவடிகளை வணங்காதவர்களுக்கு, அவர்கள் கற்ற கல்வியால் ஆகிய பயன் என்ன?",
    altTranslation: "No fruit have men of all their studied lore, Save worship of the Pure One's feet adore. — Pope"
  },
  {
    num: 3, chapter: 1,
    tamil: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்\nநிலமிசை நீடுவாழ் வார்.",
    transliteration: "Malarmicai ēkiṉāṉ māṇaṭi cērntār\nNilamicai nīṭuvāḻ vār.",
    english: "They who are united to the glorious feet of Him who readily enters the mind, will flourish long on earth.",
    tamilUrai: "மலரின் மீது நடந்த (அடியவர்களின் மனதில் விரைந்து வாழ்கின்ற) கடவுளின் சிறந்த திருவடிகளை அடைந்தவர்கள், இந்த உலகில் நெடுங்காலம் வாழ்வர்.",
    altTranslation: "His feet, 'Who o'er the full-blown flower hath past,' who gain Shall long abide above the troubled earthly plain. — Pope"
  },
  {
    num: 4, chapter: 1,
    tamil: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு\nயாண்டும் இடும்பை இல.",
    transliteration: "Vēṇṭutal vēṇṭāmai ilāṉaṭi cērntārkku\nYāṇṭum iṭumpai ila.",
    english: "There is no sorrow for those who reach the feet of Him who is without likes and dislikes.",
    tamilUrai: "விருப்பு வெறுப்புகள் இல்லாத கடவுளின் திருவடிகளை அடைந்தவர்களுக்கு, எப்போதும் எந்தத் துன்பமும் இல்லை.",
    altTranslation: "His foot, 'Whom want affects not, irks not grief,' who gain Shall not, through every time, of any woes complain. — Pope"
  },
  {
    num: 5, chapter: 1,
    tamil: "இருள்சேர் இருவினையும் சேரா இறைவன்\nபொருள்சேர் புகழ்புரிந்தார் மாட்டு.",
    transliteration: "Iruḷcēr iruviṉaiyum cērā iṟaivaṉ\nPoruḷcēr pukaḻpurintār māṭṭu.",
    english: "The two-fold deeds that spring from darkness shall not touch those who delight in the true praise of God.",
    tamilUrai: "இறைவனின் உண்மையான புகழ்ச்சியில் ஈடுபட்டவர்களை, அறியாமை என்னும் இருளால் வரும் நல்வினை தீவினை என்னும் இரண்டும் சேர்ந்து பற்றாது.",
    altTranslation: "The men, who on the 'King's' true praised delight to dwell, Affects not them the fruit of deeds done ill or well. — Pope"
  },
  {
    num: 6, chapter: 1,
    tamil: "பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க\nநெறிநின்றார் நீடுவாழ் வார்.",
    transliteration: "Poṟivāyil aintavittāṉ poytīr oḻukka\nNeṟiniṉṟār nīṭuvāḻ vār.",
    english: "Those shall long prosper who abide in the faultless way of Him who has destroyed the five desires of the senses.",
    tamilUrai: "ஐம்புலன்களின் வழியாக வரும் ஆசைகளை அழித்த கடவுளின் மெய்யான ஒழுக்க நெறியில் நின்றவர்கள் நெடுங்காலம் வாழ்வார்கள்.",
    altTranslation: "Long live they blest, who 've stood in path from falsehood free; His, 'Who quenched lusts that from the sense-gates five ascend'. — Pope"
  },
  {
    num: 7, chapter: 1,
    tamil: "தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்\nமனக்கவலை மாற்றல் அரிது.",
    transliteration: "Taṉakkuvamai illātāṉ tāḷcērntārk kallāl\nMaṉakkavalai māṟṟal aritu.",
    english: "Anxiety of mind cannot be removed, except from those who are united to the feet of Him who is incomparable.",
    tamilUrai: "தனக்கு நிகராக எவரும் இல்லாத கடவுளின் திருவடிகளை அடைந்தவர்களுக்கு அல்லாமல், மற்றவர்களின் மனக்கவலையை நீக்குவது கடினம்.",
    altTranslation: "Unless His foot, 'to Whom none can compare,' men gain, 'Tis hard for mind to find relief from anxious pain. — Pope"
  },
  {
    num: 8, chapter: 1,
    tamil: "அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்\nபிறவாழி நீந்தல் அரிது.",
    transliteration: "Aṟavāḻi antaṇaṉ tāḷcērntārk kallāl\nPiṟavāḻi nīntal aritu.",
    english: "None can swim the sea of vice, except those who reach the feet of God — the ocean of virtue.",
    tamilUrai: "அறம் என்னும் கடலுக்கு ஒப்பான அந்தணனாகிய கடவுளின் திருவடிகளை அடைந்தவர்களுக்கு அல்லாமல், மற்றவர்களுக்குப் பிறவிக் கடலைக் கடப்பது கடினம்.",
    altTranslation: "Unless His foot 'the Sea of Rightness' men perceive, The further bank of being's sea 'tis hard to reach. — Pope"
  },
  {
    num: 9, chapter: 1,
    tamil: "கோளில் பொறியின் குணமிலவே எண்குணத்தான்\nதாளை வணங்காத் தலை.",
    transliteration: "Kōḷil poṟiyil kuṇamilavē eṇkuṇattāṉ\nTāḷai vaṇaṅkāt talai.",
    english: "The head that worships not the feet of Him who has the eight attributes is useless, like the senses without perception.",
    tamilUrai: "எட்டுக் குணங்களை உடைய கடவுளின் திருவடிகளை வணங்காத தலை, தொழிற்படாத பொறிகள் போலப் பயனற்றது.",
    altTranslation: "Before His foot, 'the Eight-fold Excellence,' with unbent head, Who stands, like palsied sense, is to all living functions dead. — Pope"
  },
  {
    num: 10, chapter: 1,
    tamil: "பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்\nஇறைவன் அடிசேரா தார்.",
    transliteration: "Piṟavip peruṅkaṭal nīntuvar nīntār\nIṟaivaṉ aṭicērā tār.",
    english: "Those who reach the feet of God will swim across the great sea of births; others will not.",
    tamilUrai: "இறைவனின் திருவடிகளை அடைந்தவர் பிறவி என்னும் பெரிய கடலை நீந்திக் கடப்பார்; அவனை அடையாதவர் நீந்தமாட்டார்.",
    altTranslation: "They swim the sea of births, the 'Monarch's' foot who gain; None others reach the shore of being's mighty main. — Pope"
  },

  // CHAPTER 2 — The Excellence of Rain (Complete)
  {
    num: 11, chapter: 2,
    tamil: "வான்நின்று உலகம் வழங்கி வருதலால்\nதான்அமிழ்தம் என்றுணரற் பாற்று.",
    transliteration: "Vāṉniṉṟu ulakam vaḻaṅki varutalāl\nTāṉamiḻtam eṉṟuṇaraṟ pāṟṟu.",
    english: "Rain, by falling from the sky and sustaining the world, is rightly called ambrosia.",
    tamilUrai: "மழை பெய்து உலகத்தைத் தொடர்ந்து வாழவைத்து வருவதால், அதுவே அமிழ்தம் என்று உணரத்தக்கது.",
    altTranslation: "The world its course maintains through life that rain unfailing gives; Thus rain is known the true ambrosial food of all that lives. — Pope"
  },
  {
    num: 12, chapter: 2,
    tamil: "துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத்\nதுப்பாய தூஉம் மழை.",
    transliteration: "Tuppārkkut tuppāya tuppākkit tuppārkkut\nTuppāya tūum maḻai.",
    english: "Rain produces food for those who eat; it itself forms part of food too.",
    tamilUrai: "உண்பவர்களுக்கு உணவை உண்டாக்கி, உண்பவர்களுக்கு உணவாகவும் (நீராகவும்) இருப்பது மழையே.",
    altTranslation: "The rain makes pleasant food for eaters rise; As food itself, thirst-quenching, it supplies. — Pope"
  },
  {
    num: 13, chapter: 2,
    tamil: "விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து\nஉள்நின்று உடற்றும் பசி.",
    transliteration: "Viṇiṉṟu poyppiṉ viriṉīr viyaṉulakattu\nUḷniṉṟu uṭaṟṟum paci.",
    english: "If the sky fails and deceives, hunger will torment the wide world surrounded by waters.",
    tamilUrai: "மழை பெய்யாமல் வஞ்சித்தால், பரந்த கடலால் சூழப்பட்ட இந்தப் பெரிய உலகத்தில் பசி உயிர்களை உள்ளேயே வருத்தும்.",
    altTranslation: "If clouds, that promised rain, deceive, and in the sky remain, Famine, sore torment, stalks o'er earth's vast ocean-girdled plain. — Pope"
  },
  {
    num: 14, chapter: 2,
    tamil: "ஏரின் உழாஅர் உழவர் புயல்என்னும்\nவாரி வளங்குன்றிக் கால்.",
    transliteration: "Ēriṉ uḻāar uḻavar puyaleṉṉum\nVāri vaḷaṅkuṉṟik kāl.",
    english: "If the abundance of rain called wealth fails, farmers will not plough with their ploughs.",
    tamilUrai: "மழை என்னும் வருவாய் வளம் குறைந்துபோனால், உழவர்கள் ஏர்கொண்டு உழமாட்டார்கள்.",
    altTranslation: "If clouds their wealth of waters fail on earth to pour, The ploughers plough with oxen's sturdy team no more. — Pope"
  },
  {
    num: 15, chapter: 2,
    tamil: "கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே\nஎடுப்பதூஉம் எல்லாம் மழை.",
    transliteration: "Keṭuppatūum keṭṭārkkuc cārvāymaṟ ṟāṅkē\nEṭuppatūum ellām maḻai.",
    english: "It is rain that ruins, and it is rain again that raises up those it has ruined.",
    tamilUrai: "உலகத்தைக் கெடுப்பதும், கெட்ட உயிர்களுக்குத் துணையாகி மீண்டும் உயர்த்துவதும் எல்லாம் மழையே.",
    altTranslation: "'Tis rain works all: it ruin spreads, then timely aid supplies; As, in the happy days before, it bids the ruined rise. — Pope"
  },
  {
    num: 16, chapter: 2,
    tamil: "விசும்பின் துளிவீழின் அல்லால்மற் றாங்கே\nபசும்புல் தலைகாண்பு அரிது.",
    transliteration: "Vicumpiṉ tuḷivīḻiṉ allālmaṟ ṟāṅkē\nPacumpul talaikāṇpu aritu.",
    english: "Unless drops fall from the sky, a blade of green grass will hardly be seen anywhere.",
    tamilUrai: "வானத்திலிருந்து மழைத்துளி விழுந்தால் அல்லாமல், உலகத்தில் பசுமையான புல்லின் நுனியைக்கூடக் காண்பது அரிது.",
    altTranslation: "Let but the heaven its watery treasures yield, No blade of grass will glad the verdant field. — Pope"
  },
  {
    num: 17, chapter: 2,
    tamil: "நெடுங்கடலும் தன்நீர்மை குன்றும் தடிந்தெழிலி\nதான்நல்கா தாகி விடின்.",
    transliteration: "Neṭuṅkaṭalum taṉnīrmai kuṉṟum taṭinteḻili\nTāṉnalkā tāki viṭiṉ.",
    english: "Even the vast sea will diminish if the clouds that draw water from it cease to return it as rain.",
    tamilUrai: "கடலிலிருந்து நீரை உறிஞ்சும் மேகம், மீண்டும் மழையாகத் தராமல் போனால், பெரிய கடலும் தன் நீர்மை குன்றிவிடும்.",
    altTranslation: "The ocean's wealth will lose its countless store, If clouds their gathered waters pour not back once more. — Pope"
  },
  {
    num: 18, chapter: 2,
    tamil: "சிறப்பொடு பூசனை செல்லாது வானம்\nவறக்குமேல் வானோர்க்கும் ஈண்டு.",
    transliteration: "Ciṟappoṭu pūcaṉai cellātu vāṉam\nVaṟakkumēl vāṉōrkkum īṇṭu.",
    english: "If the sky dries up, even the worship of the gods with festive offerings will cease on earth.",
    tamilUrai: "மழை பெய்யாமல் வானம் பொய்த்துவிட்டால், இந்த உலகத்தில் வானவர்களுக்கும் கொண்டாட்டத்துடன் கூடிய பூஜை நடக்காது.",
    altTranslation: "If heaven grow dry, with feast and offering never more, Will men on earth the heavenly ones adore. — Pope"
  },
  {
    num: 19, chapter: 2,
    tamil: "தானம் தவம்இரண்டும் தங்கா வியன்உலகம்\nவானம் வழங்கா தெனின்.",
    transliteration: "Tāṉam tavamiraṇṭum taṅkā viyaṉulakam\nVāṉam vaḻaṅkā teṉiṉ.",
    english: "If the sky does not give rain, charity and penance cannot exist in this wide world.",
    tamilUrai: "வானம் மழை பெய்யாதுவிட்டால், பரந்த இந்த உலகத்தில் தானம், தவம் ஆகிய இரண்டும் நிலைத்து இருக்காது.",
    altTranslation: "If heaven its watery stores withhold, no gifts of alms prevail; The ascetic's self-denying toils, the wide world's rites must fail. — Pope"
  },
  {
    num: 20, chapter: 2,
    tamil: "நீர்இன்று அமையாது உலகெனின் யார்யார்க்கும்\nவான்இன்று அமையாது ஒழுக்கு.",
    transliteration: "Nīriṉṟu amaiyātu ulakeṉiṉ yāryārkkum\nVāṉiṉṟu amaiyātu oḻukku.",
    english: "If it is said that the world cannot exist without water, so too without rain nothing can flourish — not even moral conduct.",
    tamilUrai: "நீர் இல்லாமல் உலகம் நடைபெறாது என்றால், மழை இல்லாமல் எவருக்கும் ஒழுக்கமும் நடைபெறாது.",
    altTranslation: "When water fails, functions of nature cease, you say; Thus when rain fails, no duties men can pay. — Pope"
  },

  // CHAPTER 3 — Greatness of Ascetics (sampled)
  {
    num: 21, chapter: 3,
    tamil: "ஒழுக்கத்து நீத்தார் பெருமை விழுப்பத்து\nவேண்டும் பனுவல் துணிவு.",
    transliteration: "Oḻukkattu nīttār perumai viḻuppattu\nVēṇṭum paṉuval tuṇivu.",
    english: "The scriptures exalt, above every other good, the greatness of those who have renounced all worldly attachments through perfect conduct.",
    tamilUrai: "ஒழுக்கத்தோடு துறவு பூண்டவர்களின் பெருமையை, சிறப்புடைய நூல்கள் தெளிவாக எடுத்துரைக்கின்றன.",
    altTranslation: "The settled rule of every code requires, as highest good, Their greatness who, renouncing all, true to their rule have stood. — Pope"
  },
  {
    num: 22, chapter: 3,
    tamil: "துறந்தார் பெருமை துணைக்கூறின் வையத்து\nஇறந்தாரை எண்ணிக்கொண் டற்று.",
    transliteration: "Tuṟantār perumai tuṇaikkūṟiṉ vaiyattu\nIṟantārai eṇṇikkoṇ ṭaṟṟu.",
    english: "To describe the greatness of those who have renounced the world is like counting all who have ever died on earth.",
    tamilUrai: "துறவிகளின் பெருமையை அளவிட்டுக் கூற முயலுவது, உலகத்தில் இறந்துபோனவர்களை எண்ணி எடுத்துக்கொள்வதைப் போன்ற முடிவற்ற செயலாகும்.",
    altTranslation: "As counting those that from the earth have passed away, 'Tis vain attempt the might of holy men to say. — Pope"
  },
  {
    num: 23, chapter: 3,
    tamil: "இருமை வகைதெரிந்து ஈண்டுஅறம் பூண்டார்\nபெருமை பிறங்கிற்று உலகு.",
    transliteration: "Irumai vakaiterintu īṇṭuaṟam pūṇṭār\nPerumai piṟaṅkiṟṟu ulaku.",
    english: "The world shines with the greatness of those who, understanding the nature of both this life and the next, embrace virtue here.",
    tamilUrai: "இம்மை மறுமை என்ற இரண்டின் இயல்புகளையும் அறிந்து, இந்த உலகில் அறத்தைக் கடைப்பிடித்தவர்களின் பெருமையால் உலகம் சிறந்து விளங்குகிறது.",
    altTranslation: "Their greatness earth transcends, who, way of both worlds weighed, In this world take their stand in virtue's aid. — Pope"
  },
  {
    num: 24, chapter: 3,
    tamil: "உரனென்னும் தோட்டியான் ஓரைந்தும் காப்பான்\nவரனென்னும் வைப்பிற்கோர் வித்து.",
    transliteration: "Uraṉeṉṉum tōṭṭiyāṉ ōraintum kāppāṉ\nVaraṉeṉṉum vaippiṟkōr vittu.",
    english: "He who controls the five senses with the goad of wisdom is as a seed for the land called heaven.",
    tamilUrai: "அறிவு என்னும் அங்குசத்தால் ஐம்பொறிகளையும் அடக்கி ஆள்பவன், மேலுலகம் எனப்படும் நிலத்திற்கு வித்தைப் போன்றவன்.",
    altTranslation: "Who guards the five with wisdom's curb restrained, Is seed for soil of yonder happy land. — Pope"
  },
  {
    num: 25, chapter: 3,
    tamil: "ஐந்தவித்தான் ஆற்றல் அகல்விசும்பு ளார்கோமான்\nஇந்திரனே சாலுங் கரி.",
    transliteration: "Aintavittāṉ āṟṟal akalvicumpu ḷārkōmāṉ\nIntiraṉē cāluṅ kari.",
    english: "Indra, king of the wide heavens, is himself sufficient witness to the strength of him who has subdued the five senses.",
    tamilUrai: "ஐம்புலன்களையும் வென்றவனின் ஆற்றலுக்கு, பரந்த விண்ணவர்களின் தலைவனான இந்திரனே போதுமான சான்றாவான்.",
    altTranslation: "Their might who have destroyed 'the five,' shall soothly tell Indra, the lord of those in heaven's wide realms that dwell. — Pope"
  },
  {
    num: 26, chapter: 3,
    tamil: "செயற்கரிய செய்வார் பெரியர் சிறியர்\nசெயற்கரிய செய்கலா தார்.",
    transliteration: "Ceyaṟkariya ceyvār periyar ciṟiyar\nCeyaṟkariya ceykalā tār.",
    english: "The great accomplish what is hard to do; the small cannot.",
    tamilUrai: "செய்வதற்கு அரிய பெரிய செயல்களைச் செய்பவரே பெரியோர்; அத்தகைய அரிய செயல்களைச் செய்ய இயலாதவர் சிறியோர்.",
    altTranslation: "The great will do what's hard to do; Feeble souls such deeds eschew. — Pope"
  },
  {
    num: 27, chapter: 3,
    tamil: "சுவைஒளி ஊறுஓசை நாற்றமென ஐந்தின்\nவகைதெரிவான் கட்டே உலகு.",
    transliteration: "Cuvaioḷi ūṟuōcai nāṟṟameṉ ṟaintiṉ\nVakaiterivāṉ kaṭṭē ulaku.",
    english: "The world lies within the grasp of him who discerns the nature of the five — taste, sight, touch, sound, and smell.",
    tamilUrai: "சுவை, ஒளி, ஊறு, ஓசை, நாற்றம் என்ற ஐம்புலன்களின் இயல்பை நன்கு அறிந்து ஆள்பவனின் வசப்பட்டது இந்த உலகம்.",
    altTranslation: "The sense of taste, sight, hearing, touch, and smell—the world Is subject to the man who knows their several natures. — Pope"
  },
  {
    num: 28, chapter: 3,
    tamil: "நிறைமொழி மாந்தர் பெருமை நிலத்து\nமறைமொழி காட்டி விடும்.",
    transliteration: "Niṟaimoḻi māntar perumai nilattu\nMaṟaimoḻi kāṭṭi viṭum.",
    english: "The greatness of men whose words are powerful is revealed by the sacred scriptures upon the earth.",
    tamilUrai: "நிறைந்த ஆற்றல் கொண்ட சொற்களை உடைய பெரியவர்களின் பெருமையை, உலகில் உள்ள மறை மொழிகள் எடுத்துக்காட்டும்.",
    altTranslation: "The might of men whose word is never vain, The 'secret word' shall to the earth proclaim. — Pope"
  },
  {
    num: 29, chapter: 3,
    tamil: "குணமென்னும் குன்றேறி நின்றார் வெகுளி\nகணமேயும் காத்தல் அரிது.",
    transliteration: "Kuṇameṉṉum kuṉṟēṟi niṉṟār vekuḷi\nKaṇamēyum kāttal aritu.",
    english: "Even for a moment, it is hard to escape the anger of those who stand atop the hill of noble virtues.",
    tamilUrai: "நற்குணம் என்னும் உயர்ந்த மலையின் உச்சியில் நிற்கின்ற பெரியோர்களின் சினத்திலிருந்து, ஒரு கணப்பொழுதும் தப்புவது அரிதாகும்.",
    altTranslation: "Whom souls mature, the mountain-height of goodness climb, From wrath to shield e'en for a moment's time is hard. — Pope"
  },
  {
    num: 30, chapter: 3,
    tamil: "அந்தணர் என்போர் அறவோர்மற் றெவ்வுயிர்க்கும்\nசெந்தண்மை பூண்டொழுக லான்.",
    transliteration: "Antaṇar eṉpōr aṟavōrmaṟ ṟevvuyirkkum\nCentaṇmai pūṇṭoḻuka lāṉ.",
    english: "The virtuous are called 'antaṇar' because they bear gentle compassion toward all living beings.",
    tamilUrai: "எல்லா உயிர்களிடத்திலும் செம்மையான, குளிர்ந்த அருளைக் கொண்டு வாழ்பவர்கள் அறவோர்; அவர்களே 'அந்தணர்' எனப் போற்றப்படுவர்.",
    altTranslation: "Towards all that breathe, with seemly graciousness adorned they live; And thus to 'Anthanar' the name of the virtuous well belongs. — Pope"
  },

  // CHAPTER 4 — Assertion of the Strength of Virtue
  {
    num: 31, chapter: 4,
    tamil: "சிறப்புஈனும் செல்வமும் ஈனும் அறத்தினூஉங்கு\nஆக்கம் எவனோ உயிர்க்கு.",
    transliteration: "Ciṟappuīṉum celvamum īṉum aṟattiṉūuṅku\nĀkkam evaṉō uyirkku.",
    english: "Virtue gives both eminence and wealth; what greater gain can there be for a living being than virtue?",
    tamilUrai: "அறம் என்பது மேன்மையையும், செல்வத்தையும் தருகின்றது; அதைக் காட்டிலும் உயிருக்கு உயர்ந்த நன்மை வேறு எதுவும் இல்லை.",
    altTranslation: "It yields distinction, yields prosperity; what gain Greater than virtue can a living man obtain? — Pope"
  },
  {
    num: 32, chapter: 4,
    tamil: "அறத்தினூஉங்கு ஆக்கமும் இல்லை அதனை\nமறத்தலின் ஊங்கில்லை கேடு.",
    transliteration: "Aṟattiṉūuṅku ākkamum illai ataṉai\nMaṟattaliṉ ūṅkillai kēṭu.",
    english: "There is no greater gain than virtue, and no greater loss than forgetting it.",
    tamilUrai: "அறத்தைப் போன்ற மேலான ஆக்கம் வேறு எதுவும் இல்லை; அதை மறந்துவிடுவதைப் போன்ற பெரிய கேடு வேறு எதுவும் இல்லை.",
    altTranslation: "No greater gain than virtue aught can cause; No greater loss than life oblivious of her laws. — Pope"
  },
  {
    num: 33, chapter: 4,
    tamil: "ஒல்லும் வகையான் அறவினை ஓவாதே\nசெல்லும்வாய் எல்லாஞ் செயல்.",
    transliteration: "Ollum vakaiyāṉ aṟaviṉai ōvātē\nCellumvāy ellām ceyal.",
    english: "Do virtuous deeds without ceasing, by every means within your power, wherever opportunity arises.",
    tamilUrai: "தன்னால் இயன்ற அளவிற்கு, எவ்விடத்திலும் எந்த வழியிலும், இடைவிடாமல் அறச்செயல்களைச் செய்து வரவேண்டும்.",
    altTranslation: "To finish virtue's work with ceaseless effort strive, What way thou may'st, where'er thou see'st the way. — Pope"
  },
  {
    num: 34, chapter: 4,
    tamil: "மனத்துக்கண் மாசிலன் ஆதல் அனைத்துஅறன்\nஆகுல நீர பிற.",
    transliteration: "Maṉattukkaṇ mācilaṉ ātal aṉaittuaṟaṉ\nĀkula nīra piṟa.",
    english: "To be pure in mind is all of virtue; the rest is empty noise.",
    tamilUrai: "மனத்தில் குற்றம் இல்லாதவனாக இருத்தலே அறம் முழுவதும் ஆகும்; மற்றவை எல்லாம் வெற்று ஆரவாரமே ஆகும்.",
    altTranslation: "Spotless be thou in mind! This only merits virtue's name; All else, mere pomp of idle sound, no real worth can claim. — Pope"
  },
  {
    num: 35, chapter: 4,
    tamil: "அழுக்காறு அவாவெகுளி இன்னாச்சொல் நான்கும்\nஇழுக்கா இயன்றது அறம்.",
    transliteration: "Aḻukkāṟu avāvekuḷi iṉṉāccol nāṉkum\nIḻukkā iyaṉṟatu aṟam.",
    english: "Virtue consists in never yielding to envy, desire, anger, and harsh speech.",
    tamilUrai: "பொறாமை, பேராசை, சினம், கடும்சொல் ஆகிய நான்கு குற்றங்களிலும் வழுவாமல் ஒழுகுவதே அறமாகும்.",
    altTranslation: "'Tis virtue when, his footsteps sliding not through envy, wrath, Lust, evil speech, these four, man onwards moves in ordered path. — Pope"
  },
  {
    num: 36, chapter: 4,
    tamil: "அன்றறிவாம் என்னாது அறஞ்செய்க மற்றது\nபொன்றுங்கால் பொன்றாத் துணை.",
    transliteration: "Aṉṟaṟivām eṉṉātu aṟamceyka maṟṟatu\nPoṉṟuṅkāl poṉṟāt tuṇai.",
    english: "Do not postpone virtue saying 'I will do it later'; it will be your unfailing companion even at death.",
    tamilUrai: "பிறகு கவனிப்போம் என்று தாமதிக்காமல் இப்பொழுதே அறம் செய்க; அதுவே மரணம் நெருங்கும்போது அழியாத துணையாக நிற்கும்.",
    altTranslation: "Do deeds of virtue now; say not, 'Tomorrow we'll be wise'; Thus, when thou diest, shalt thou find a help that never dies. — Pope"
  },
  {
    num: 37, chapter: 4,
    tamil: "அறத்தாறு இதுவென வேண்டா சிவிகை\nபொறுத்தானோடு ஊர்ந்தான் இடை.",
    transliteration: "Aṟattāṟu ituveṉa vēṇṭā civikai\nPoṟuttāṉōṭu ūrntāṉ iṭai.",
    english: "No need to ask what the fruit of virtue is — consider the difference between him who rides the palanquin and him who bears it.",
    tamilUrai: "அறத்தின் பயன் இதுவே என்று தனிப்பட விளக்க வேண்டியதில்லை; பல்லக்கில் பயணிப்பவன், அதைச் சுமப்பவன் ஆகிய இருவருக்கும் உள்ள வேறுபாட்டைப் பார்த்தாலே அது புரிந்துவிடும்.",
    altTranslation: "Needs not in words to dwell on virtue's fruits; 'tis seen In diff'rence 'twixt the borne and those the bearers been. — Pope"
  },

  // CHAPTER 4 — Assertion of the Strength of Virtue
  {
    num: 38, chapter: 4,
    tamil: "வீழ்நாள் படாஅமை நன்றாற்றின் அஃதொருவன்\nவாழ்நாள் வழியடைக்கும் கல்.",
    transliteration: "Vīḻnāḷ paṭāamai naṉṟāṟṟiṉ aḵtoruvaṉ\nVāḻnāḷ vaḻiyaṭaikkum kal.",
    english: "If one does good without letting a single day go to waste, it will be a stone that blocks the path of future births.",
    tamilUrai: "ஒரு நாளும் வீணாகக் கழியாதபடி ஒருவன் நல்ல அறச்செயல்களை செய்துவந்தால், அது அவன் மீண்டும் பிறக்கும் வாழ்நாள் வழியை அடைக்கும் தடைக்கல் ஆகும்.",
    altTranslation: "If, day by day, in virtue's work thou take thy part, A stone is that will block the way of future life and death. — Pope"
  },
  {
    num: 39, chapter: 4,
    tamil: "அறத்தான் வருவதே இன்பம்மற் றெல்லாம்\nபுறத்த புகழும் இல.",
    transliteration: "Aṟattāṉ varuvatē iṉpam maṟṟellām\nPuṟatta pukaḻum ila.",
    english: "Only that which comes through virtue is true joy; all else is outside it, without even fame.",
    tamilUrai: "அறத்தின் வழியாக வருவதே உண்மையான இன்பம்; மற்ற வழியில் வருவன துன்பத்திற்கு உரியவை, புகழையும் தராதவை.",
    altTranslation: "That joy which virtue yields, delights alone; All else, not this, is shame and praise unknown. — Pope"
  },
  {
    num: 40, chapter: 4,
    tamil: "செயற்பால தோரும் அறனே ஒருவற்கு\nஉயற்பால தோரும் பழி.",
    transliteration: "Ceyaṟpāla tōrum aṟaṉē oruvaṟku\nUyaṟpāla tōrum paḻi.",
    english: "Virtue is all that one should do; what one must always avoid is blame.",
    tamilUrai: "ஒருவன் செய்ய வேண்டியது அறமாகும்; ஒதுக்கி விட வேண்டியது பழி ஆகும்.",
    altTranslation: "Virtue is all that one should do; what one must always avoid is blame. — Pope"
  },

  // CHAPTER 5 — Domestic Life
  {
    num: 41, chapter: 5,
    tamil: "இல்வாழ்வான் என்பான் இயல்புடைய மூவர்க்கும்\nநல்லாற்றின் நின்ற துணை.",
    transliteration: "Ilvāḻvāṉ eṉpāṉ iyalpuṭaiya mūvarkkum\nNallāṟṟiṉ niṉṟa tuṇai.",
    english: "The householder is the support, in the right path, of the three orders of life.",
    tamilUrai: "இல்லறம் நடத்துபவன் என்பவன், தன் இயல்பில் வாழும் மாணவர், துறவி, முதியோர் ஆகிய மூவருக்கும் நல்ல வழியில் துணை செய்து நிற்பவனாவான்.",
    altTranslation: "The men of household virtue, sure, support The other orders three that rightly live. — Pope"
  },
  {
    num: 42, chapter: 5,
    tamil: "துறந்தார்க்கும் துவ்வா தவர்க்கும் இறந்தார்க்கும்\nஇல்வாழ்வான் என்பான் துணை.",
    transliteration: "Tuṟantārkkum tuvvātavarkkum iṟantārkkum\nIlvāḻvāṉ eṉpāṉ tuṇai.",
    english: "The householder is a support to renunciants, to the poor, and to departed ancestors.",
    tamilUrai: "துறவிகளுக்கும், வறியவர்களுக்கும், இறந்துபோன முன்னோர்களுக்கும் இல்லறத்தானே துணையாக விளங்குகிறான்.",
    altTranslation: "To anchorites, to indigent, to those who've passed away, The man of household life is help and stay. — Pope"
  },
  {
    num: 43, chapter: 5,
    tamil: "தென்புலத்தார் தெய்வம் விருந்தொக்கல் தானென்றாங்கு\nஐம்புலத்தாறு ஓம்பல் தலை.",
    transliteration: "Teṉpulattār teyvam viruntokkal tāṉeṉṟāṅku\nAimpulattāṟu ōmpal talai.",
    english: "The chief duty is to cherish the five — ancestors, gods, guests, kinsmen, and oneself.",
    tamilUrai: "முன்னோர், தெய்வம், விருந்தினர், உறவினர், தான் என்ற ஐவரையும் முறையாக பேணிக்காப்பதே இல்லறத்தின் முதன்மையான கடமை.",
    altTranslation: "The manes, God, guests, kindred, self — all five Duly to cherish, is the first of virtues. — Pope"
  },
  {
    num: 44, chapter: 5,
    tamil: "பழியஞ்சிப் பாத்தூண் உடைத்தாயின் வாழ்க்கை\nவழியெஞ்சல் எஞ்ஞான்றும் இல.",
    transliteration: "Paḻiyañcip pāttūṇ uṭaittāyiṉ vāḻkkai\nVaḻiyeñcal eññāṉṟum il.",
    english: "If one lives fearing blame and sharing his food, his family line shall never perish.",
    tamilUrai: "பழிக்கு அஞ்சி, தான் உண்பதற்கு முன் பிறருடன் பகிர்ந்து உண்ணும் வாழ்க்கை உடையவனின் குடி வழி என்றும் அற்றுப்போகாது.",
    altTranslation: "Who shares his meal with others, shunning evil way, His life shall not fail through any after day. — Pope"
  },
  {
    num: 45, chapter: 5,
    tamil: "அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை\nபண்பும் பயனும் அது.",
    transliteration: "Aṉpum aṟaṉum uṭaittāyiṉ ilvāḻkkai\nPaṇpum payaṉum atu.",
    english: "When domestic life possesses love and virtue, it gains both its essence and its true reward.",
    tamilUrai: "இல்வாழ்க்கையில் அன்பும் அறமும் அமைந்திருந்தால், அதுவே இல்லறத்தின் இயல்பும் பயனும் ஆகும்.",
    altTranslation: "If love and virtue in the household reign, This is of life the perfect grace and gain. — Pope"
  },
  {
    num: 46, chapter: 5,
    tamil: "அறத்தாற்றின் இல்வாழ்க்கை ஆற்றின் புறத்தாற்றில்\nபோஒய்ப் பெறுவ தெவன்.",
    transliteration: "Aṟattāṟṟiṉ ilvāḻkkai āṟṟiṉ puṟattāṟṟil\nPōoyp peṟuvatu evaṉ.",
    english: "If one lives domestic life in the path of virtue, what more can be gained by following any other path?",
    tamilUrai: "அறம் எனும் நெறியில் இல்லறத்தை நடத்தினால், வேறு வழியில் (துறவறம் போன்றவை) சென்று அடைவதற்கு என்ன இருக்கிறது?",
    altTranslation: "No gain by other path is won, more than by household life, If lived aright, in virtue's way. — Pope"
  },
  {
    num: 47, chapter: 5,
    tamil: "இயல்பினான் இல்வாழ்க்கை வாழ்பவன் என்பான்\nமுயல்வாருள் எல்லாம் தலை.",
    transliteration: "Iyalpiṉāṉ ilvāḻkkai vāḻpavaṉ eṉpāṉ\nMuyalvāruḷ ellām talai.",
    english: "He who lives domestic life according to its proper nature is foremost among all who strive for virtue.",
    tamilUrai: "உரிய முறையில் இல்லறத்தை நடத்துபவனே, தவம் முதலிய அறநெறிகளில் முயற்சி செய்பவர்கள் அனைவருக்குள்ளும் தலைமை வாய்ந்தவனாவான்.",
    altTranslation: "Who shares domestic life, by its true laws maintained, Is chief of those who righteous merit gained. — Pope"
  },
  {
    num: 48, chapter: 5,
    tamil: "ஆற்றின் ஒழுக்கி அறனிழுக்கா இல்வாழ்க்கை\nநோற்பாரின் நோன்மை உடைத்து.",
    transliteration: "Āṟṟiṉ oḻukki aṟaṉiḻukkā ilvāḻkkai\nNōṟpāriṉ nōṉmai uṭaittu.",
    english: "A household life that keeps others to the path and itself never swerves from virtue surpasses even ascetic penance in merit.",
    tamilUrai: "பிறரை நல்வழியில் நடத்தி, தானும் அறத்திலிருந்து வழுவாமல் இருக்கும் இல்லறம், தவத்தினும் பெரிய தவப்பயனை உடையதாகும்.",
    altTranslation: "Who guides his household life in virtue's way, Higher than ascetic's path he holds his sway. — Pope"
  },
  {
    num: 49, chapter: 5,
    tamil: "அறன்எனப் பட்டதே இல்வாழ்க்கை அஃதும்\nபிறன்பழிப்ப தில்லாயின் நன்று.",
    transliteration: "Aṟaṉeṉap paṭṭatē ilvāḻkkai aḵtum\nPiṟaṉpaḻippa tillāyiṉ naṉṟu.",
    english: "Domestic life itself is called virtue; and it is good when others find no fault in it.",
    tamilUrai: "அறம் என்று சொல்லப்படுவது இல்லறமே; அந்த இல்லறமும் பிறரால் பழிக்கப்படாதபடி இருந்தால் அதுவே சிறந்தது.",
    altTranslation: "The household life is what is praised as virtue; well 'tis thought of, Too, if free from faults that others may reprove. — Pope"
  },
  {
    num: 50, chapter: 5,
    tamil: "வையத்துள் வாழ்வாங்கு வாழ்பவன் வான்உறையும்\nதெய்வத்துள் வைக்கப் படும்.",
    transliteration: "Vaiyattuḷ vāḻvāṅku vāḻpavaṉ vāṉuṟaiyum\nTeyvattuḷ vaikkap paṭum.",
    english: "He who lives in the world as one should be counted among the gods that dwell in heaven.",
    tamilUrai: "இந்த உலகத்தில் இல்லறத்தை முறையாக நடத்தி வாழ்பவன், விண்ணில் வசிக்கும் தெய்வங்களின் வரிசையில் வைத்து எண்ணப்படுவான்.",
    altTranslation: "Who shares the household life as he ought to live below, Becomes a god enthroned 'mongst those that in heaven glow. — Pope"
  },

  // CHAPTER 6 — The Good Wife
  {
    num: 51, chapter: 6,
    tamil: "மனைக்குஉரிய மாண்புடையள் ஆகி தற்கொண்டான்\nவளத்தக்காள் வாழ்க்கைத் துணை.",
    transliteration: "Maṉaikkuuriya māṇpuṭaiyaḷ āki taṟkoṇṭāṉ\nVaḷattakkāḷ vāḻkkait tuṇai.",
    english: "She is a true life-companion who has the virtues fit for a home and who lives according to her husband's means.",
    tamilUrai: "இல்லறத்திற்கு உரிய சிறந்த பண்புகள் உடையவளாய், கணவனின் வருமானத்திற்கு ஏற்றவாறு வாழ்பவளே உண்மையான வாழ்க்கைத் துணைவியாவாள்.",
    altTranslation: "She's the help-meet true, whose virtues fit the house, Whose thrifty hand her husband's fortunes matches. — Pope"
  },
  {
    num: 52, chapter: 6,
    tamil: "மனைமாட்சி இல்லாள்கண் இல்லாயின் வாழ்க்கை\nஎனைமாட்சித் தாயினும் இல்.",
    transliteration: "Maṉaimāṭci illāḷkaṇ illāyiṉ vāḻkkai\nEṉaimāṭcit tāyiṉum il.",
    english: "However great the other fortunes of life, it is nothing if the wife lacks the dignity of the home.",
    tamilUrai: "இல்லத்திற்குரிய மாண்புகள் மனைவியிடம் இல்லையென்றால், வாழ்க்கை எவ்வளவு பெருமையுடையதாக இருந்தாலும் அது வீணே.",
    altTranslation: "If greatness lack not in the wife, life's glory fails; If she be meet, no lack life's grace assails. — Pope"
  },
  {
    num: 53, chapter: 6,
    tamil: "இல்லதென் இல்லவள் மாண்பானால் உள்ளதென்\nஇல்லவள் மாணாக் கடை.",
    transliteration: "Illateṉ illavaḷ māṇpāṉāl uḷḷateṉ\nIllavaḷ māṇāk kaṭai.",
    english: "If a wife is worthy, what is lacking? And if she is not, what is present that matters?",
    tamilUrai: "மனைவி சிறந்த பண்புடையவளாக இருந்தால், அந்த இல்லத்தில் இல்லாதது ஏதும் இல்லை; அவ்வாறு இல்லாதபோது, இருப்பதால் என்ன பயன்?",
    altTranslation: "What lack the house where wife in worth excels? What can it lack not when she fails in these? — Pope"
  },
  {
    num: 54, chapter: 6,
    tamil: "பெண்ணின் பெருந்தக்க யாவுள கற்பென்னும்\nதிண்மைஉண் டாகப் பெறின்.",
    transliteration: "Peṇṇiṉ peruntakka yāvuḷa kaṟpeṉṉum\nTiṇmaiuṇ ṭākap peṟiṉ.",
    english: "What is nobler than a woman if she possesses the strength called chastity?",
    tamilUrai: "கற்பு என்ற உறுதியான பண்பினைக் கொண்டிருந்தால், பெண்ணைப் போல் உயர்ந்ததும் மேன்மையானதும் வேறு என்ன இருக்கிறது?",
    altTranslation: "What higher gift than noble wife with chastity endued, What greater treasures may the world afford? — Pope"
  },
  {
    num: 55, chapter: 6,
    tamil: "தெய்வம் தொழாஅள் கொழுநன் தொழுதெழுவாள்\nபெய்யெனப் பெய்யும் மழை.",
    transliteration: "Teyvam toḻāaḷ koḻunaṉ toḻuteḻuvāḷ\nPeyyeṉap peyyum maḻai.",
    english: "The rain will fall at the word of her who, rising, reveres her husband rather than any god.",
    tamilUrai: "வேறு தெய்வத்தை வணங்காமல், தன் கணவனையே வணங்கி எழுகின்ற மனைவி 'பெய்' என்று கூறினால், மழை பெய்யும்.",
    altTranslation: "'No God but he!' who worships thus her spouse, at her command Obedient rain-drops fall in plenteous shower on earth's parched land. — Pope"
  },
  {
    num: 56, chapter: 6,
    tamil: "தற்காத்துத் தற்கொண்டாற் பேணித் தகைசான்ற\nசொற்காத்துச் சோர்விலாள் பெண்.",
    transliteration: "Taṟkāttut taṟkoṇṭāṟ pēṇit takaicāṉṟa\nCoṟkāttuc cōrvilāḷ peṇ.",
    english: "She who guards herself, cares for her husband, preserves honorable name, and never falters — she is the true woman.",
    tamilUrai: "தன் ஒழுக்கத்தைக் காத்து, கணவனைப் பேணி, தகுதியான சொல்லையும் புகழையும் காப்பாற்றி, தளராமல் இருப்பவளே உண்மையான பெண்ணாகிய மனைவி.",
    altTranslation: "No wavering, she who guards herself, for husband's solace cares, Her household's honour, and unsullied name, she bears. — Pope"
  },
  {
    num: 57, chapter: 6,
    tamil: "சிறைகாக்கும் காப்புஎவன் செய்யும் மகளிர்\nநிறைகாக்கும் காப்பே தலை.",
    transliteration: "Ciṟaikākkum kāppuevaṉ ceyyum makaḷir\nNiṟaikākkum kāppē talai.",
    english: "What can outward guarding do? A woman's best protection is her own inner integrity.",
    tamilUrai: "பெண்களை வெளிப்புறத்தில் இருந்து காவல் வைத்துக் காக்கும் காவலால் என்ன பயன்? அவர்களின் கற்பு என்னும் பண்பே தம்மைத் தாமே காக்கும் சிறந்த காவல்.",
    altTranslation: "Of what avail is watch and ward? Her purity of soul Is woman's best protection, truest guard. — Pope"
  },
  {
    num: 58, chapter: 6,
    tamil: "பெற்றாற் பெறின்பெறுவர் பெண்டிர் பெருஞ்சிறப்புப்\nபுத்தேளிர் வாழும் உலகு.",
    transliteration: "Peṟṟāṟ peṟiṉpeṟuvar peṇṭir peruñciṟappup\nPuttēḷir vāḻum ulaku.",
    english: "If they gain the esteem of their husbands, women attain the great glory of the world where gods dwell.",
    tamilUrai: "தம் கணவனின் அன்பையும் மதிப்பையும் பெற்ற மனைவியர், தேவர்கள் வாழும் மேலுலகின் பெரும் சிறப்பையும் அடைவர்.",
    altTranslation: "If honoured by their husbands, wives shall share the fame Of heavenly ones whom gods on high acclaim. — Pope"
  },
  {
    num: 59, chapter: 6,
    tamil: "புகழ்புரிந்த இல்லிலோர்க்கு இல்லை இகழ்வார்முன்\nஏறுபோல் பீடு நடை.",
    transliteration: "Pukaḻpurinta illilōrkku illai ikaḻvārmuṉ\nĒṟupōl pīṭu naṭai.",
    english: "A man whose wife does not uphold his honour cannot walk proudly like a lion before his detractors.",
    tamilUrai: "புகழுக்கு உரிய மனைவியை உடையவர்களுக்கே, தம்மை இகழ்வாரின் முன்னே சிங்கம் நடப்பது போன்ற கம்பீரமான நடை இயலும்; அத்தகைய மனைவி இல்லாதவர்க்கு அது இயலாது.",
    altTranslation: "Unseemly gait and mien before his foes the man shall bear Whose home lacks her who honoured makes his household fair. — Pope"
  },
  {
    num: 60, chapter: 6,
    tamil: "மங்கலம் என்ப மனைமாட்சி மற்றுஅதன்\nநன்கலம் நன்மக்கட் பேறு.",
    transliteration: "Maṅkalam eṉpa maṉaimāṭci maṟṟuataṉ\nNaṉkalam naṉmakkaṭ pēṟu.",
    english: "The worthiness of the wife is called blessing; and good children are its finest ornaments.",
    tamilUrai: "மனைவியின் பெருமையான பண்பே இல்லத்திற்கு மங்கலம் எனப்படும்; நல்ல குழந்தைகளின் பேறு அந்தப் பண்பின் மேலான அணிகலனாகும்.",
    altTranslation: "A wife's good worth is fortune; children fair Are household's brightest ornament to wear. — Pope"
  },

  // CHAPTER 7 — Obtaining Sons
  {
    num: 61, chapter: 7,
    tamil: "பெறுமவற்றுள் யாமறிவது இல்லை அறிவறிந்த\nமக்கட்பேறு அல்ல பிற.",
    transliteration: "Peṟumavaṟṟuḷ yāmaṟivatu illai aṟivaṟinta\nMakkaṭpēṟu alla piṟa.",
    english: "Of all the gains a man may know, there is nothing we know greater than having wise children.",
    tamilUrai: "ஒருவன் வாழ்வில் பெற்றுக் கொள்ளக்கூடிய பேறுகளுள், அறிவு நிரம்பிய நல்ல குழந்தைகளை விடச் சிறந்தது வேறு ஏதும் இல்லை.",
    altTranslation: "No greater blessing have I ever seen, Than children dear with discerning mind. — Pope"
  },
  {
    num: 62, chapter: 7,
    tamil: "எழுபிறப்பும் தீயவை தீண்டா பழிபிறங்காப்\nபண்புடை மக்கட் பெறின்.",
    transliteration: "Eḻupiṟappum tīyavai tīṇṭā paḻipiṟaṅkāp\nPaṇpuṭai makkaṭ peṟiṉ.",
    english: "He who has blameless, virtuous children will be untouched by evil through all seven births.",
    tamilUrai: "பழியற்ற சிறந்த குணங்களைக் கொண்ட மக்களைப் பெற்றால், அந்தத் தாய்தந்தைகளை ஏழு பிறப்புகளிலும் எந்தத் தீமையும் தொடாது.",
    altTranslation: "Ills through sev'n births assail not him, who gains The bliss of worthy and virtuous sons. — Pope"
  },
  {
    num: 63, chapter: 7,
    tamil: "தம்பொருள் என்பதம் மக்கள் அவர்பொருள்\nதம்தம் வினையான் வரும்.",
    transliteration: "Tamporuḷ eṉpatam makkaḷ avarporuḷ\nTamtam viṉaiyāṉ varum.",
    english: "A man's own wealth is his children; their wealth, in turn, is the fruit of their own deeds.",
    tamilUrai: "ஒருவனுக்கு தன் மக்களே உண்மையான செல்வம்; மக்களின் செல்வமோ அவர்கள் செய்யும் நற்செயல்களின் பயனால் தானாக வந்தடையும்.",
    altTranslation: "One's children are one's wealth; and their wealth shall be Of their own deeds the fruit. — Pope"
  },
  {
    num: 64, chapter: 7,
    tamil: "அமிழ்தினும் ஆற்ற இனிதேதம் மக்கள்\nசிறுகை அளாவிய கூழ்.",
    transliteration: "Amiḻtiṉum āṟṟa iṉitētam makkaḷ\nCiṟukai aḷāviya kūḻ.",
    english: "Sweeter than nectar is the porridge stirred by the tiny hands of one's own children.",
    tamilUrai: "தம் குழந்தைகளின் சிறிய கைகள் கலந்து உண்ட சோறு, அமிழ்தத்தையும் விட மிகவும் இனிமையானது.",
    altTranslation: "Sweeter than food of gods is porridge eaten by hand Of one's own child, dear mingled with a lisping word. — Pope"
  },
  {
    num: 65, chapter: 7,
    tamil: "மக்கள்மெய் தீண்டல் உடற்கின்பம் மற்றவர்\nசொற்கேட்டல் இன்பம் செவிக்கு.",
    transliteration: "Makkaḷmey tīṇṭal uṭaṟkiṉpam maṟṟavar\nCoṟkēṭṭal iṉpam cevikku.",
    english: "The touch of children delights the body; hearing their words delights the ear.",
    tamilUrai: "குழந்தைகளின் உடல் தீண்டுதல் தந்தையின் உடலுக்கு இன்பம்; அவர்களது சொற்களைக் கேட்பது காதிற்கு இன்பம்.",
    altTranslation: "Touch of children's fingers, joy to flesh; their sweet voice Is music sweet unto the ear. — Pope"
  },
  {
    num: 66, chapter: 7,
    tamil: "குழலினி தியாழினி தென்பதம் மக்கள்\nமழலைச்சொல் கேளா தவர்.",
    transliteration: "Kuḻaliṉi tiyāḻiṉi teṉpatam makkaḷ\nMaḻalaiccol kēḷā tavar.",
    english: "Only those who have never heard the sweet prattle of their own children say the flute or lute is sweet.",
    tamilUrai: "\"குழல் இனியது, யாழ் இனியது\" என்று சொல்வோர் — தம் குழந்தைகளின் மழலைச் சொல்லைக் கேட்கும் பேறு பெறாதவர்களே ஆவர்.",
    altTranslation: "'Flute, lute sound sweet', such men alone aver who have not heard The infant lisp of their own offspring dear. — Pope"
  },
  {
    num: 67, chapter: 7,
    tamil: "தந்தைமகற் காற்றும் நன்றிஅவை யத்து\nமுந்தி இருப்பச் செயல்.",
    transliteration: "Tantaimakaṟ kāṟṟum naṉṟiavai yattu\nMunti iruppac ceyal.",
    english: "The best good a father can do his son is to make him sit foremost in the learned assembly.",
    tamilUrai: "தந்தை தன் மகனுக்குச் செய்யக் கூடிய சிறந்த நன்மை, அறிஞர்கள் கூடும் அவையில் அவன் முன்னிருக்கும் தகுதியை அடையச் செய்வதே ஆகும்.",
    altTranslation: "The duty of the father to the son Is to make him first in the assembly of the learned. — Pope"
  },
  {
    num: 68, chapter: 7,
    tamil: "தம்மின்தம் மக்கள் அறிவுடைமை மாநிலத்து\nமன்னுயிர்க் கெல்லாம் இனிது.",
    transliteration: "Tammiṉtam makkaḷ aṟivuṭaimai mānilattu\nMaṉṉuyirk kellām iṉitu.",
    english: "The wisdom of one's children, greater than one's own, brings joy to all life on the wide earth.",
    tamilUrai: "தந்தையரின் அறிவை விட தம்மக்களின் அறிவு மேன்மையுற்று விளங்குதல், பெரிய இந்த உலகத்தில் வாழும் எல்லா உயிர்களுக்கும் மகிழ்ச்சியைத் தரும்.",
    altTranslation: "Their children's wisdom greater than their own confessed, Gives joy to all upon the wide earth bless'd. — Pope"
  },
  {
    num: 69, chapter: 7,
    tamil: "ஈன்ற பொழுதின் பெரிதுவக்கும் தன்மகனைச்\nசான்றோன் எனக்கேட்ட தாய்.",
    transliteration: "Īṉṟa poḻutiṉ perituvakkum taṉmakaṉaic\nCāṉṟōṉ eṉakkēṭṭa tāy.",
    english: "The mother who hears her son called a man of learning rejoices more than at his birth.",
    tamilUrai: "தன் மகனைச் 'சான்றோன்' என்று பிறர் புகழ்வதைக் கேட்கும் தாய், அவனைப் பெற்றபோது அடைந்த மகிழ்ச்சியைக் காட்டிலும் மிகவும் மகிழ்வாள்.",
    altTranslation: "The mother, who hears her son proclaimed a man of worth, Rejoices more than in the hour she gave him birth. — Pope"
  },
  {
    num: 70, chapter: 7,
    tamil: "மகன்தந்தைக் காற்றும் உதவி இவன்தந்தை\nஎன்நோற்றான் கொல்எனும் சொல்.",
    transliteration: "Makaṉtantaik kāṟṟum utavi ivaṉtantai\nEṉnōṟṟāṉ koleṉum col.",
    english: "The service a son owes his father is to make men ask, 'What penance did his father perform to deserve him?'",
    tamilUrai: "மகன் தன் தந்தைக்கு செய்யக்கூடிய உதவி, 'இப்படிப்பட்ட ஒரு மகனைப் பெற்றெடுக்க இவனது தந்தை என்ன தவம் செய்தானோ' என்று உலகம் புகழும்படி சிறந்து விளங்குதலே ஆகும்.",
    altTranslation: "The worthy son's service to his father true, Is that men ask, 'What penance wrought his sire to gain him?' — Pope"
  },

  // CHAPTER 8 — Love (partial sample)
  {
    num: 71, chapter: 8,
    tamil: "அன்பிற்கும் உண்டோ அடைக்குந்தாழ் ஆர்வலர்\nபுன்கணீர் பூசல் தரும்.",
    transliteration: "Aṉpiṟkum uṇṭō aṭaikkuntāḻ ārvalar\nPuṉkaṇīr pūcal tarum.",
    english: "Is there any bolt that can shut in love? The small tears of the loved ones will betray it.",
    tamilUrai: "அன்பை உள்ளே அடைத்து வைக்கும் தாழ்ப்பாள் ஏதேனும் உண்டோ? அன்புக்குரியவர்களின் துன்பக் கண்ணீரே அந்த அன்பை வெளிப்படுத்திவிடும்.",
    altTranslation: "What bolt can bar true love, in sooth, From loving eyes of friends bedewed with tears of truth? — Pope"
  },
  {
    num: 72, chapter: 8,
    tamil: "அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார்\nஎன்பும் உரியர் பிறர்க்கு.",
    transliteration: "Aṉpilār ellām tamakkuriyar aṉpuṭaiyār\nEṉpum uriyar piṟarkku.",
    english: "Those without love appropriate everything to themselves; those with love give even their bones to others.",
    tamilUrai: "அன்பு இல்லாதவர்கள் தங்கள் உடைமைகள் எல்லாவற்றையும் தமக்கே உரியதாக்கிக்கொள்வர்; அன்புடையவர்களோ தம் எலும்புகளையும் பிறருக்கு உரியதாக்குவர்.",
    altTranslation: "The loveless to themselves belong alone; The loving men are others' to the very bone. — Pope"
  },
  {
    num: 73, chapter: 8,
    tamil: "அன்போடு இயைந்த வழக்கென்ப ஆருயிர்க்கு\nஎன்போடு இயைந்த தொடர்பு.",
    transliteration: "Aṉpōṭu iyainta vaḻakkeṉpa āruyirkku\nEṉpōṭu iyainta toṭarpu.",
    english: "The bond of the body with the soul is said to exist for the sake of love.",
    tamilUrai: "உயிரோடு இணைந்த எலும்பின் தொடர்பு — அதாவது உடலுடன் உயிர் இணைந்திருக்கும் அந்தத் தொடர்பு — அன்பின் வழிப்பட்டு நிற்பதற்காகவே ஆகும் என்று சான்றோர் கூறுவர்.",
    altTranslation: "Because of love's ingrafted hold, the bond of flesh and bone Is said to link the soul unto the body's throne. — Pope"
  },
  {
    num: 74, chapter: 8,
    tamil: "அன்புஈனும் ஆர்வம் உடைமை அதுஈனும்\nநண்பு என்னும் நாடாச் சிறப்பு.",
    transliteration: "Aṉpuīṉum ārvam uṭaimai atuīṉum\nNaṇpu eṉṉum nāṭāc ciṟappu.",
    english: "Love begets eager attachment, and that begets the matchless excellence called friendship.",
    tamilUrai: "அன்பு ஆர்வத்தை வளர்க்கும்; அந்த ஆர்வம், எங்கும் எளிதில் கிட்டாத நட்பு என்னும் சிறப்பை உருவாக்கும்.",
    altTranslation: "From love fond yearnings rise; and hence the soul's delight is born, 'Friendship', that marks the life of men of soul adorned. — Pope"
  },
  {
    num: 75, chapter: 8,
    tamil: "அன்புற்று அமர்ந்த வழக்கென்ப வையகத்து\nஇன்புற்றார் எய்தும் சிறப்பு.",
    transliteration: "Aṉpuṟṟu amarnta vaḻakkeṉpa vaiyakattu\nIṉpuṟṟār eytum ciṟappu.",
    english: "Living in love and kindness is the path by which those who enjoy bliss attain true greatness in the world.",
    tamilUrai: "அன்புடன் பொருந்தி வாழ்கின்ற நடைமுறை காரணமாகவே, இவ்வுலகில் இன்பம் அனுபவித்தோர் பெரும் சிறப்பையும் அடைகின்றனர்.",
    altTranslation: "The bliss that crowns the loving in this world of ours Springs from the way they dwell with kindly powers. — Pope"
  },
  {
    num: 76, chapter: 8,
    tamil: "அறத்திற்கே அன்புசார்பு என்ப அறியார்\nமறத்திற்கும் அஃதே துணை.",
    transliteration: "Aṟattiṟkē aṉpucārpu eṉpa aṟiyār\nMaṟattiṟkum aḵtē tuṇai.",
    english: "Those who do not know say love supports only virtue; but love is also the companion of valour.",
    tamilUrai: "அன்பு அறத்திற்கு மட்டுமே துணை என்று அறியாதவர்கள் கூறுவர்; உண்மையில், வீரத்திற்கும் அதுவே துணையாக நிற்கும்.",
    altTranslation: "Love's not, as fools imagine, only virtue's seed; Love also strengthens for the valiant's valorous deed. — Pope"
  },
  {
    num: 77, chapter: 8,
    tamil: "என்பி லதனை வெயில்போலக் காயுமே\nஅன்பி லதனை அறம்.",
    transliteration: "Eṉpi lataṉai veyilpōlak kāyumē\nAṉpi lataṉai aṟam.",
    english: "As the sun burns those without bones, so does virtue scorch those without love.",
    tamilUrai: "எலும்பில்லாத உடலை வெயில் வாட்டுவதுபோல, அன்பற்ற உயிரை அறம் வருத்தும்.",
    altTranslation: "As sun's fierce ray dries up the boneless things, So loveless beings virtue's fire shall burn. — Pope"
  },
  {
    num: 78, chapter: 8,
    tamil: "அன்பகத் தில்லா உயிர்வாழ்க்கை வன்பாற்கண்\nவற்றல் மரம்தளிர்த் தற்று.",
    transliteration: "Aṉpakat tillā uyirvāḻkkai vaṉpāṟkaṇ\nVaṟṟal maramtaḷirt taṟṟu.",
    english: "A life without love in the heart is like a withered tree trying to sprout in a barren land.",
    tamilUrai: "உள்ளத்தில் அன்பு இல்லாமல் வாழும் வாழ்க்கை, பாலைவனத்தில் காய்ந்த மரம் தளிர்க்க முயல்வது போன்ற பயனற்றதாகும்.",
    altTranslation: "Life void of love in heart, — vain as the withered tree Bursting to bloom upon the desert sand. — Pope"
  },
  {
    num: 79, chapter: 8,
    tamil: "புறத்துறுப் பெல்லாம் எவன்செய்யும் யாக்கை\nஅகத்துறுப்பு அன்புஇலவர்க்கு.",
    transliteration: "Puṟattuṟup pellām evaṉceyyum yākkai\nAkattuṟuppu aṉpuilavarkku.",
    english: "What do outward limbs avail in a body that lacks love — its inner limb?",
    tamilUrai: "உள்ளுறுப்பான அன்பு இல்லாதவர்களுக்கு, வெளியில் தெரியும் கைகால் முதலான உறுப்புக்கள் எல்லாம் என்ன பயன் தரும்?",
    altTranslation: "The body's outward limbs of what avail, If inward limb of love doth never prevail? — Pope"
  },
  {
    num: 80, chapter: 8,
    tamil: "அன்பின் வழியது உயிர்நிலை அஃதிலார்க்கு\nஎன்புதோல் போர்த்த உடம்பு.",
    transliteration: "Aṉpiṉ vaḻiyatu uyirnilai aḵtilārkku\nEṉputōl pōrtta uṭampu.",
    english: "True life exists only in the way of love; without it, the body is just bones wrapped in skin.",
    tamilUrai: "அன்பின் வழியில் அமைந்ததே உயிரோட்டம் உள்ள வாழ்க்கை; அன்பு இல்லாதவர்க்கு உடலென்பது தோலால் போர்த்தப்பட்ட எலும்புக் கூடாகவே இருக்கும்.",
    altTranslation: "Where love dwells, soul has place to dwell; where love fails, bodies are But bones enwrapped in skin, nothing more. — Pope"
  },

  // CHAPTER 9 — Hospitality
  {
    num: 81, chapter: 9,
    tamil: "இருந்தோம்பி இல்வாழ்வ தெல்லாம் விருந்தோம்பி\nவேளாண்மை செய்தற் பொருட்டு.",
    transliteration: "Iruntōmpi ilvāḻva tellām viruntōmpi\nVēḷāṇmai ceytaṟ poruṭṭu.",
    english: "The whole purpose of keeping a household is to receive guests and show them courtesy.",
    tamilUrai: "ஒருவர் இல்லத்தில் இருந்து வாழ்க்கை நடத்துவதன் நோக்கமே, வந்த விருந்தினரைப் பேணி உபசரிக்கும் செயலைச் செய்யவே ஆகும்.",
    altTranslation: "The whole intent of household's earnest, faithful care, Is guests to welcome, grace to spare. — Pope"
  },
  {
    num: 82, chapter: 9,
    tamil: "விருந்து புறத்ததாத் தானுண்டல் சாவா\nமருந்தெனினும் வேண்டற்பாற்று அன்று.",
    transliteration: "Viruntu puṟattatāt tāṉuṇṭal cāvā\nmarunteṉiṉum vēṇṭaṟpāṟṟu aṉṟu.",
    english: "Even the nectar of immortality is not worth eating if it is consumed while leaving a guest outside.",
    tamilUrai: "வந்த விருந்தினரை வெளியில் விட்டுவிட்டு, தான் மட்டும் உண்ணும் உணவு — சாகாமை தரும் அமிழ்தமாக இருந்தாலும் — அது விரும்பத்தக்கதாக ஆகாது.",
    altTranslation: "Though food of immortality should crown the board, Feasting alone, the guests shut out, is thing abhorred. — Pope"
  },
  {
    num: 83, chapter: 9,
    tamil: "வருவிருந்து வைகலும் ஓம்புவான் வாழ்க்கை\nபருவந்து பாழ்படுதல் இன்று.",
    transliteration: "Varuviruntu vaikalum ōmpuvāṉ vāḻkkai\nParuvantu pāḻpaṭutal iṉṟu.",
    english: "The life of one who daily entertains the guests that come shall never fall into ruin.",
    tamilUrai: "தினந்தோறும் வந்த விருந்தினரை உபசரித்து வாழும் இல்லறத்தானின் வாழ்க்கை, துன்பப்பட்டு அழிந்து போகாது.",
    altTranslation: "Whose life, each passing day, doth guests revere, That life shall flourish; sorrow's ban is far. — Pope"
  },
  {
    num: 84, chapter: 9,
    tamil: "அகனமர்ந்து செய்யாள் உறையும் முகனமர்ந்து\nநல்விருந்து ஓம்புவான் இல்.",
    transliteration: "Akaṉamarntu ceyyāḷ uṟaiyum mukaṉamarntu\nNalviruntu ōmpuvāṉ il.",
    english: "Lakshmi, the goddess of wealth, delights to dwell in the home of him who greets guests with a smiling face.",
    tamilUrai: "மகிழ்ந்த முகத்துடன் வந்த நல்ல விருந்தினரை உபசரிப்பவனின் இல்லத்தில், திருமகள் (செல்வம்) விருப்பத்துடன் வந்து தங்குவாள்.",
    altTranslation: "With smiling face who meets the guest that comes his way, In his house doth Lakshmi well-pleased stay. — Pope"
  },
  {
    num: 85, chapter: 9,
    tamil: "வித்தும் இடல்வேண்டும் கொல்லோ விருந்தோம்பி\nமிச்சில் மிசைவான் புலம்.",
    transliteration: "Vittum iṭalvēṇṭum kollō viruntōmpi\nMiccil micaivāṉ pulam.",
    english: "Need one sow seed in the field of him who eats only after entertaining guests — does not virtue grow there of itself?",
    tamilUrai: "விருந்தினரை உபசரித்து, எஞ்சியதை உண்ணும் பண்புடையவனின் நிலத்தில், விளைச்சலுக்காக வித்திட வேண்டுமா? (அவனது புண்ணியமே விளைச்சலாக அதைத் தானே நிறைத்துவிடும்.)",
    altTranslation: "Needs seed sowing in field of him who, having fed Guests, then himself partakes of what remains? — Pope"
  },
  {
    num: 86, chapter: 9,
    tamil: "செல்விருந்து ஓம்பி வருவிருந்து பார்த்திருப்பான்\nநல்விருந்து வானத் தவர்க்கு.",
    transliteration: "Celviruntu ōmpi varuviruntu pārttiruppāṉ\nNalviruntu vāṉat tavarkku.",
    english: "He who tends the parting guest and awaits those yet to come becomes a welcome guest himself among the gods in heaven.",
    tamilUrai: "வந்த விருந்தினரைப் பேணி வழியனுப்பி, இனி வரவிருக்கும் விருந்தினரை எதிர்பார்த்து வாழ்பவன், வானுலக தேவர்களுக்கு நல்ல விருந்தினனாக ஆவான்.",
    altTranslation: "Who first receives the guest, then looks for more to come, He in heaven's hall a welcome guest becomes. — Pope"
  },
  {
    num: 87, chapter: 9,
    tamil: "இனைத்துணைத் தென்பதொன்று இல்லை விருந்தின்\nதுணைத்துணை வேள்விப் பயன்.",
    transliteration: "Iṉaittuṇait teṉpatoṉṟu illai viruntiṉ\nTuṇaittuṇai vēḷvip payaṉ.",
    english: "The merit of hospitality cannot be measured — it matches the worth of the guest received.",
    tamilUrai: "விருந்தினரை உபசரிப்பதின் பயன் 'இவ்வளவு' என்று அளவிட்டுச் சொல்ல முடியாது; அது, வந்த விருந்தினரின் தகுதிக்கு ஏற்பப் பயனளிக்கும்.",
    altTranslation: "'Such, and so great,' we cannot say the fruit Of welcomed guest; 'tis as the guest deserveth. — Pope"
  },
  {
    num: 88, chapter: 9,
    tamil: "பரிந்தோம்பிப் பற்றற்றேம் என்பர் விருந்தோம்பி\nவேள்வி தலைப்படா தார்.",
    transliteration: "Parintōmpip paṟṟaṟṟēm eṉpar viruntōmpi\nVēḷvi talaippaṭā tār.",
    english: "Those who never enjoyed the merit of hosting guests shall lament, 'We toiled for wealth, and now have lost our all.'",
    tamilUrai: "விருந்தோம்புதல் எனும் வேள்வியில் முன்னிட்டு ஈடுபடாதவர்கள், 'இவ்வளவு பொருளைச் சேர்த்து வைத்திருந்தும் எல்லாம் இழந்தோமே' என்று பின்னர் புலம்புவர்.",
    altTranslation: "'Our stored-up wealth is lost!' they wail in grief, Who never shared their guests' welcoming feast. — Pope"
  },
  {
    num: 89, chapter: 9,
    tamil: "உடைமையுள் இன்மை விருந்தோம்பல் ஓம்பா\nமடமை மடவார்கண் உண்டு.",
    transliteration: "Uṭaimaiyuḷ iṉmai viruntōmpal ōmpā\nMaṭamai maṭavārkaṇ uṇṭu.",
    english: "Poverty in the midst of plenty — this is the folly of those fools who fail to entertain guests.",
    tamilUrai: "செல்வம் இருந்தும் விருந்தினரை உபசரிக்க இயலாத மடமை, அறிவில்லாதவரிடமே காணப்படும்; அதுவே, அவர்களுக்கு உடைமை இருந்தும் வறுமை இருப்பதாகும்.",
    altTranslation: "Only fools can such excess of wealth display, 'Mid plenty, beggars; hospitality's sweet law obey not they. — Pope"
  },
  {
    num: 90, chapter: 9,
    tamil: "மோப்பக் குழையும் அனிச்சம் முகம்திரிந்து\nநோக்கக் குழையும் விருந்து.",
    transliteration: "Mōppak kuḻaiyum aṉiccam mukamtirintu\nNōkkak kuḻaiyum viruntu.",
    english: "The anicca flower withers when smelt; a guest withers merely from a sour look.",
    tamilUrai: "அனிச்ச மலர் மோப்பமிட்ட அளவிலேயே வாடிவிடும்; அதுபோலவே, முகத்தில் வரவேற்பின்மை தெரிந்தால், விருந்தினர் உள்ளம் வாடி விடுவார்.",
    altTranslation: "The flower of 'anicham' droops when smelled; a frown Of host's brow causes guest to wither down. — Pope"
  },

  // CHAPTER 10 — Pleasant Words
  {
    num: 91, chapter: 10,
    tamil: "இன்சொலால் ஈரம் அளைஇப் படிறுஇலவாம்\nசெம்பொருள் கண்டார்வாய்ச் சொல்.",
    transliteration: "Iṉcolāl īram aḷaiip paṭiṟuilavām\nCemporuḷ kaṇṭārvāyc col.",
    english: "Sweet words, filled with tenderness and free of deceit, flow from the mouths of those who have perceived the truth.",
    tamilUrai: "அன்பு கலந்து, வஞ்சகம் அற்று, உண்மைப் பொருளைக் கண்டவர்கள் வாயிலிருந்து வெளிவரும் சொற்களே இனிய சொற்கள் ஆகும்.",
    altTranslation: "Pleasant words are words with all pervading love that burn; Words from his guileless mouth who can the very truth discern. — Pope"
  },
  {
    num: 92, chapter: 10,
    tamil: "அகன்அமர்ந்து ஈதலின் நன்றே முகனமர்ந்து\nஇன்சொலன் ஆகப் பெறின்.",
    transliteration: "Akaṉamarntu ītaliṉ naṉṟē mukaṉamarntu\nIṉcolaṉ ākap peṟiṉ.",
    english: "Better than giving with a willing heart is to give with a pleasant face and sweet words.",
    tamilUrai: "மனமுவந்து பிறருக்கு ஈவதை விடவும், முகம் மலர்ந்து இனிய சொற்களைப் பேசுதல் சிறப்புடையதாகும்.",
    altTranslation: "Sweeter than giving with willing heart The gift, with pleasant face and sweet-worded part. — Pope"
  },
  {
    num: 93, chapter: 10,
    tamil: "முகத்தான் அமர்ந்துஇனிது நோக்கி அகத்தானாம்\nஇன்சொ லினதே அறம்.",
    transliteration: "Mukattāṉ amarntuiṉitu nōkki akattāṉām\nIṉco liṉatē aṟam.",
    english: "Virtue is a pleasing face, a sweet look, and kind words that come from the heart.",
    tamilUrai: "முகத்தில் மகிழ்ச்சி தோன்ற, அன்புடன் நோக்கி, உள்ளத்திலிருந்து வெளிப்படும் இனிய சொற்களால் பேசுதலே அறமாகும்.",
    altTranslation: "A pleasant face, a beaming eye, and words from kind heart, these Are virtue's very self and all its ease. — Pope"
  },
  {
    num: 94, chapter: 10,
    tamil: "துன்புறூஉம் துவ்வாமை இல்லாகும் யார்மாட்டும்\nஇன்புறூஉம் இன்சொ லவர்க்கு.",
    transliteration: "Tuṉpuṟūum tuvvāmai illākum yārmāṭṭum\nIṉpuṟūum iṉco lavarkku.",
    english: "The painful poverty that causes grief shall not befall those who speak sweet words to everyone.",
    tamilUrai: "யாரிடத்திலும் இனிமையாகப் பேசுபவர்களுக்கு, துன்பம் தரும் வறுமை ஏற்படாது.",
    altTranslation: "Who all mankind by gentle words rejoice, From grinding want's sharp bitterness shall find rejoice. — Pope"
  },
  {
    num: 95, chapter: 10,
    tamil: "பணிவுடையன் இன்சொலன் ஆதல் ஒருவற்கு\nஅணிஅல்ல மற்றுப் பிற.",
    transliteration: "Paṇivuṭaiyaṉ iṉcolaṉ ātal oruvaṟku\nAṇiialla maṟṟup piṟa.",
    english: "Humility and sweet speech are a man's only true ornaments; all other adornments are not.",
    tamilUrai: "பணிவும் இனிய சொல்லும் ஒருவனுக்கு உரிய உண்மையான அணிகலன்கள்; மற்றவை வெளிப்புற அணிகலன்கள் மட்டுமே.",
    altTranslation: "Humility with pleasant speech to man on earth, These are adornments; all else is nothing worth. — Pope"
  },
  {
    num: 96, chapter: 10,
    tamil: "அல்லவை தேய அறம்பெருகும் நல்லவை\nநாடி இனிய சொலின்.",
    transliteration: "Allavai tēya aṟamperukum nallavai\nNāṭi iṉiya coliṉ.",
    english: "If one seeks what is good and speaks kindly, evil fades and virtue grows.",
    tamilUrai: "நல்லவற்றைத் தேடி, இனிமையாகப் பேசினால், தீயவை குறைந்து அறம் பெருகும்.",
    altTranslation: "Who seeks out good, and pleasant words doth say, Their evils pass, and virtue fills their day. — Pope"
  },
  {
    num: 97, chapter: 10,
    tamil: "நயன்ஈன்று நன்றி பயக்கும் பயன்ஈன்று\nபண்பின் தலைப்பிரியாச் சொல்.",
    transliteration: "Nayaṉīṉṟu naṉṟi payakkum payaṉīṉṟu\nPaṇpiṉ talaippiriyāc col.",
    english: "Words that delight and bring benefit, never straying from good manners, yield merit and virtue alike.",
    tamilUrai: "பிறருக்கு இன்பம் தந்து, நன்மை பயக்கின்ற சொற்கள் — பண்பிலிருந்து நீங்காத சொற்கள் — மேலான நன்மையை நல்கும்.",
    altTranslation: "Benignity with gain; the word of grace Gives joy and virtue, holding its rightful place. — Pope"
  },
  {
    num: 98, chapter: 10,
    tamil: "சிறுமையுள் நீங்கிய இன்சொல் மறுமையும்\nஇம்மையும் இன்பம் தரும்.",
    transliteration: "Ciṟumaiyuḷ nīṅkiya iṉcol maṟumaiyum\nImmaiyum iṉpam tarum.",
    english: "Sweet words free from all meanness bring joy in this world and the next.",
    tamilUrai: "எந்தவிதக் குற்றமும் இல்லாத இனிய சொற்கள், இம்மையிலும் மறுமையிலும் இன்பத்தைத் தரும்.",
    altTranslation: "Pleasant speech unstained by any meanness brings Joy in this world and in the world to come. — Pope"
  },
  {
    num: 99, chapter: 10,
    tamil: "இன்சொல் இனிதீன்றல் காண்பான் எவன்கொலோ\nவன்சொல் வழங்கு வது.",
    transliteration: "Iṉcol iṉitīṉṟal kāṇpāṉ evaṉkolō\nVaṉcol vaḻaṅku vatu.",
    english: "Why would anyone who has seen the sweetness sweet words bring choose to use harsh ones?",
    tamilUrai: "இனிய சொற்கள் தரும் இனிமையை அறிந்த ஒருவன், ஏன் கடுஞ்சொற்களைப் பேசுவான்? (இது பொருத்தமில்லாதது.)",
    altTranslation: "He who hath tasted speech that pleaseth, whence the heart to move him To utter words that wound and give a bitter grief? — Pope"
  },
  {
    num: 100, chapter: 10,
    tamil: "இனிய உளவாக இன்னாத கூறல்\nகனிஇருப்பக் காய்கவர்ந் தற்று.",
    transliteration: "Iṉiya uḷavāka iṉṉāta kūṟal\nKaṉiiruppak kāykavarn taṟṟu.",
    english: "To utter harsh words when sweet ones are at hand is like plucking raw fruit when ripe fruit is available.",
    tamilUrai: "பேசுவதற்கு இனிய சொற்கள் இருக்கும்போதும், கடுமையான சொற்களைப் பேசுவது — இனிய பழங்கள் இருக்க, காய்ந்த காய்களை எடுப்பதற்கு ஒப்பானது.",
    altTranslation: "When pleasant words are ready at your hand, To choose the harsh is as to pluck raw fruit when ripe is at command. — Pope"
  },

  // CHAPTER 11 — Gratitude
  {
    num: 101, chapter: 11,
    tamil: "செய்யாமல் செய்த உதவிக்கு வையகமும்\nவானகமும் ஆற்றல் அரிது.",
    transliteration: "Ceyyāmal ceyta utavikku vaiyakamum\nVāṉakamum āṟṟal aritu.",
    english: "For help received without any prior service, even earth and heaven combined cannot repay.",
    tamilUrai: "தான் எந்த உதவியும் முன்பு செய்யாதிருந்தும் ஒருவர் பெற்ற உதவிக்கு, உலகமும் வானமும் சேர்ந்தாலும் ஈடு செய்ய இயலாது.",
    altTranslation: "Assistance given by those who ne'er received our aid, Is debt by gift of heaven and earth but poorly paid. — Pope"
  },
  {
    num: 102, chapter: 11,
    tamil: "காலத்தி னாற்செய்த நன்றி சிறிதெனினும்\nஞாலத்தின் மாணப் பெரிது.",
    transliteration: "Kālatti ṉāṟceyta naṉṟi ciṟiteṉiṉum\nÑālattiṉ māṇap peritu.",
    english: "A kindness done at the right time, however small, is greater in worth than the world itself.",
    tamilUrai: "தேவையான காலத்தில் செய்யப்பட்ட உதவி, அளவில் சிறியதாக இருந்தாலும், அதன் பெருமை உலகத்தை விடப் பெரியதாகும்.",
    altTranslation: "A timely benefit, though slight as can be, Surpasses in worth the wide expansive sea. — Pope"
  },
  {
    num: 103, chapter: 11,
    tamil: "பயன்தூக்கார் செய்த உதவி நயன்தூக்கின்\nநன்மை கடலின் பெரிது.",
    transliteration: "Payaṉtūkkār ceyta utavi nayaṉtūkkiṉ\nNaṉmai kaṭaliṉ peritu.",
    english: "Help given without weighing its return is, when rightly considered, greater than the sea.",
    tamilUrai: "பலனை எதிர்பாராமல் செய்யப்பட்ட உதவியின் நன்மையை ஆராய்ந்து பார்த்தால், அது கடலை விடப் பெரியதாகும்.",
    altTranslation: "When those of gentle soul without regard to gain bestow, Their deed's exceeding worth transcends the ocean's flow. — Pope"
  },
  {
    num: 104, chapter: 11,
    tamil: "தினைத்துணை நன்றி செயினும் பனைத்துணையாக்\nகொள்வர் பயன்தெரி வார்.",
    transliteration: "Tiṉaittuṇai naṉṟi ceyiṉum paṉaittuṇaiyāk\nKoḷvar payaṉteri vār.",
    english: "Even a kindness as small as a millet seed, the wise hold great as a palmyra tree.",
    tamilUrai: "பயனை அறிந்த அறிவாளர்கள், தினை அளவு சிறிய உதவி செய்யப்பட்டாலும், அதனைப் பனை அளவு பெரிய உதவியாக எண்ணிக் கொள்வர்.",
    altTranslation: "Each benefit to those of actions' worth who know, Though small as millet-seed, as palm-tree vast shall grow. — Pope"
  },
  {
    num: 105, chapter: 11,
    tamil: "உதவி வரைத்தன்று உதவி உதவி\nசெயப்பட்டார் சால்பின் வரைத்து.",
    transliteration: "Utavi varaittaṉṟu utavi utavi\nCeyappaṭṭār cālpiṉ varaittu.",
    english: "The measure of a kindness is not in the gift given, but in the worth of the receiver.",
    tamilUrai: "செய்யப்பட்ட உதவியின் பெருமை, தரப்பட்ட பொருளின் அளவைக் கொண்டதன்று; உதவியைப் பெற்றவரின் பண்பின் அளவைக் கொண்டதாகும்.",
    altTranslation: "The kindness men confer we should not weigh; The worth of those on whom 'tis done gives it its virtuous sway. — Pope"
  },
  {
    num: 106, chapter: 11,
    tamil: "மறவற்க மாசற்றார் கேண்மை துறவற்க\nதுன்பத்துள் துப்பாயார் நட்பு.",
    transliteration: "Maṟavaṟka mācaṟṟār kēṇmai tuṟavaṟka\nTuṉpattuḷ tuppāyār naṭpu.",
    english: "Never forget the friendship of the faultless; never abandon the friends who stood by you in sorrow.",
    tamilUrai: "குற்றமற்றவர்களின் உறவை மறந்துவிடாதே; துன்பம் வந்தபோது துணையாக நின்ற நட்பையும் விட்டுவிடாதே.",
    altTranslation: "Kinship with men of spotless fame forget thou not; Abandon not the friend stood by thee in distress. — Pope"
  },
  {
    num: 107, chapter: 11,
    tamil: "எழுமை எழுபிறப்பும் உள்ளுவர் தங்கண்\nவிழுமம் துடைத்தவர் நட்பு.",
    transliteration: "Eḻumai eḻupiṟappum uḷḷuvar taṅkaṇ\nViḻumam tuṭaittavar naṭpu.",
    english: "The friendship of those who wiped away one's sorrow is remembered through seven births.",
    tamilUrai: "தமது துன்பத்தை நீக்கிய நண்பர்களின் உதவியை ஏழேழு பிறப்புகளிலும் நினைந்து போற்றுவார்கள் பண்புள்ளவர்கள்.",
    altTranslation: "Through seven-fold births, in memory yet abides, The kindness done by those who wiped off tears. — Pope"
  },
  {
    num: 108, chapter: 11,
    tamil: "நன்றி மறப்பது நன்றன்று நன்றல்லது\nஅன்றே மறப்பது நன்று.",
    transliteration: "Naṉṟi maṟappatu naṉṟaṉṟu naṉṟallatu\nAṉṟē maṟappatu naṉṟu.",
    english: "To forget a kindness is not good; but to forget at once an injury — that is good.",
    tamilUrai: "ஒருவர் செய்த நன்மையை மறப்பது நல்லதன்று; ஆனால் அவர் செய்த தீமையை அன்றே மறந்து விடுவது நல்லதாகும்.",
    altTranslation: "'Tis never good to let the thought of good things done Fade from the mind; of things not good, 'tis good to think no more. — Pope"
  },
  {
    num: 109, chapter: 11,
    tamil: "கொன்றன்ன இன்னா செயினும் அவர்செய்த\nஒன்றுநன்று உள்ளக் கெடும்.",
    transliteration: "Koṉṟaṉṉa iṉṉā ceyiṉum avarceyta\nOṉṟunaṉṟu uḷḷak keṭum.",
    english: "Though wrongs as heavy as murder be done by him, one good deed of his recalled erases them all.",
    tamilUrai: "ஒருவர் நம்மை கொல்லும் அளவு தீமை செய்திருந்தாலும், அவர் முன்பு செய்த ஒரே ஒரு நன்மையை நினைத்துக்கொண்டால் அந்தத் தீமை நம் மனதில் கெட்டு ஒழியும்.",
    altTranslation: "Though men inflict a wrong like death, yet if we think Of one good thing by them performed, all memory of offence shall sink. — Pope"
  },
  {
    num: 110, chapter: 11,
    tamil: "எந்நன்றி கொன்றார்க்கும் உய்வுண்டாம் உய்வில்லை\nசெய்ந்நன்றி கொன்ற மகற்கு.",
    transliteration: "Eṉṉaṉṟi koṉṟārkkum uyvuṇṭām uyvillai\nCeynnaṉṟi koṉṟa makaṟku.",
    english: "There is deliverance for every wrong, but none for the man who destroys the memory of a kindness done to him.",
    tamilUrai: "எந்த அறநெறியை மீறியவர்க்கும் தப்பும் வழி உண்டு; ஆனால் தனக்குச் செய்த நன்றியை மறந்து விட்டவனுக்கு தப்பும் வழியே இல்லை.",
    altTranslation: "Who kill all goodness else, from sin may yet find cure; No hope of pardon more for who'd good done to him forswore. — Pope"
  },

  // CHAPTER 12 — Impartiality
  {
    num: 111, chapter: 12,
    tamil: "தகுதி எனவொன்று நன்றே பகுதியால்\nபாற்பட்டு ஒழுகப் பெறின்.",
    transliteration: "Takuti eṉavoṉṟu naṉṟē pakutiyāl\nPāṟpaṭṭu oḻukap peṟiṉ.",
    english: "Impartiality is the one great virtue, if one can act toward enemies, friends, and strangers alike without bias.",
    tamilUrai: "பகைவர், நண்பர், அயலார் என்னும் பகுப்பின்றி, எல்லாரிடமும் ஒத்த முறையில் நடந்து கொள்வதாகிய நடுவுநிலைமையே சிறந்த நற்பண்பாகும்.",
    altTranslation: "If men can walk with rectitude in every path of life, Impartiality we call, that virtue high and fair. — Pope"
  },
  {
    num: 112, chapter: 12,
    tamil: "செப்பம் உடையவன் ஆக்கஞ் சிதைவின்றி\nஎச்சத்திற் கேமாப்பு உடைத்து.",
    transliteration: "Ceppam uṭaiyavaṉ ākkañ citaiviṉṟi\nEccattiṟ kēmāppu uṭaittu.",
    english: "The wealth of an upright man does not perish; it remains as security for his descendants.",
    tamilUrai: "நடுவுநிலையோடு ஈட்டிய உடைமை அழியாமல், தக்கபடி பின்னர் வருவோருக்கும் பாதுகாப்பை அளிப்பதாகும்.",
    altTranslation: "The just man's wealth unwasting shall endure, And to his race a lasting joy ensure. — Pope"
  },
  {
    num: 113, chapter: 12,
    tamil: "நன்றே தரினும் நடுவிகந்தாம் ஆக்கத்தை\nஅன்றே யொழிய விடல்.",
    transliteration: "Naṉṟē tariṉum naṭuvikantām ākkattai\nAṉṟē yoḻiya viṭal.",
    english: "Though it promise gain, the wealth won by abandoning fairness should be given up the very same day.",
    tamilUrai: "நன்மை தருவதாகத் தோன்றினாலும், நடுநிலை தவறிப் பெறப்படும் செல்வத்தை, அந்தக் கணமே விட்டுவிட வேண்டும்.",
    altTranslation: "Though benefit it seem to bring, the unjust gain Forsake; the gain of equity alone retain. — Pope"
  },
  {
    num: 114, chapter: 12,
    tamil: "தக்கார் தகவிலர் என்ப தவரவர்\nஎச்சத்தாற் காணப் படும்.",
    transliteration: "Takkār takavilar eṉpa tavaravar\nEccattāṟ kāṇap paṭum.",
    english: "Whether a man was just or unjust can be seen in what he leaves behind in his children.",
    tamilUrai: "ஒருவர் நடுவுநிலையுடையவரா, அல்லது நடுவுநிலை தவறியவரா என்பதை அவர்கள் விட்டுச் செல்லும் வாரிசுகளின் வாழ்க்கையைக் கொண்டே அறியலாம்.",
    altTranslation: "Just and unjust are known at length by their successors' fate; Through them the truth of men's desert we contemplate. — Pope"
  },
  {
    num: 115, chapter: 12,
    tamil: "கேடும் பெருக்கமும் இல்லல்ல நெஞ்சத்துக்\nகோடாமை சான்றோர்க் கணி.",
    transliteration: "Kēṭum perukkamum illalla neñcattuk\nKōṭāmai cāṉṟōrk kaṇi.",
    english: "Loss and gain come to all; but the unswerving heart is the ornament of the wise.",
    tamilUrai: "கேடும் ஆக்கமும் யாருக்கும் வராமல் போகா; அவை வரும்போதும் மனத்தில் நேர்மையிலிருந்து சாயாதிருப்பதே சான்றோர்க்கு உரிய அணியாகும்.",
    altTranslation: "Loss and gain in life are sure; their changeless heart who e'er retains, Amid such throes the noble man his steadfast worth maintains. — Pope"
  },
  {
    num: 116, chapter: 12,
    tamil: "கெடுவல்யான் என்பது அறிகதன் நெஞ்சம்\nநடுவொரீஇ அல்ல செயின்.",
    transliteration: "Keṭuvalyāṉ eṉpatu aṟikataṉ neñcam\nNaṭuvorīi alla ceyiṉ.",
    english: "Let a man know in his own heart: 'I am ruined' — when he finds himself straying from justice.",
    tamilUrai: "ஒருவன் நடுநிலையிலிருந்து விலகி, தவறான செயலை நினைக்கும்போதே, தான் கெட்டுவிட்டவன் என்பதை அவனுடைய மனமே அறிந்துகொள்ள வேண்டும்.",
    altTranslation: "'Tis ruin, let man's conscience own, when from the just He swerves aside, and deeds of evil doth transact. — Pope"
  },
  {
    num: 117, chapter: 12,
    tamil: "கெடுவாக வையாது உலகம் நடுவாக\nநன்றிக்கண் தங்கியான் தாழ்வு.",
    transliteration: "Keṭuvāka vaiyātu ulakam naṭuvāka\nNaṉṟikkaṇ taṅkiyāṉ tāḻvu.",
    english: "The world will not count it ruin when the man who holds to justice meets with misfortune.",
    tamilUrai: "நடுவுநிலையாக நின்று நன்மையில் வாழும் ஒருவனுக்கு வறுமை நேர்ந்தாலும், உலகம் அதை அவனது கேடாகக் கருதாது.",
    altTranslation: "The great of soul, who stand in virtue's path, though low they lie, Are not by world accounted fallen — shining still with honour high. — Pope"
  },
  {
    num: 118, chapter: 12,
    tamil: "சமன்செய்து சீர்தூக்குங் கோல்போல் அமைந்தொருபால்\nகோடாமை சான்றோர்க் கணி.",
    transliteration: "Camaṉceytu cīrtūkkuṅ kōlpōl amaintorupāl\nKōṭāmai cāṉṟōrk kaṇi.",
    english: "Like a balance that weighs evenly and bends to neither side, the wise man's steady judgement is his ornament.",
    tamilUrai: "சமமாக நின்று, இரு பக்கத்தையும் ஒன்றுபோலச் சீர்தூக்குகிற தராசுபோல, எந்தப் பக்கமும் சாயாமல் நடுநிலையாக இருப்பதே சான்றோர்க்கு அழகாகும்.",
    altTranslation: "As equal scale of balance tilting towards neither side, So unbiased mind of sage by even judgement doth abide. — Pope"
  },
  {
    num: 119, chapter: 12,
    tamil: "சொற்கோட்டம் இல்லது செப்பம் ஒருதலையா\nஉட்கோட்டம் இன்மை பெறின்.",
    transliteration: "Coṟkōṭṭam illatu ceppam orutalaiyā\nUṭkōṭṭam iṉmai peṟiṉ.",
    english: "Uprightness is speech without crookedness — provided the heart be equally free from bias.",
    tamilUrai: "மனத்தில் ஒரு பக்கம் சாய்வு இல்லாமல் இருந்தால், சொல்லிலும் வளைவு இல்லாமல் இருப்பதே உண்மையான நடுநிலைமை.",
    altTranslation: "When mind inclines to neither side, and heart sincere is found, Then words that utter truth are of uprightness the crown. — Pope"
  },
  {
    num: 120, chapter: 12,
    tamil: "வாணிகம் செய்வார்க்கு வாணிகம் பேணிப்\nபிறவும் தமபோல் செயின்.",
    transliteration: "Vāṇikam ceyvārkku vāṇikam pēṇip\nPiṟavum tamapōl ceyiṉ.",
    english: "Good trade is the trade of him who treats another's goods as carefully as his own.",
    tamilUrai: "மற்றவர்களின் பொருளையும் தன்னுடையது போலவே பாதுகாப்பவரே சிறந்த வாணிகம் செய்பவர்.",
    altTranslation: "Good merchant doth the trader true maintain, Who guards as his another's gain. — Pope"
  },

  // CHAPTER 13 — Self-Restraint
  {
    num: 121, chapter: 13,
    tamil: "அடக்கம் அமரருள் உய்க்கும் அடங்காமை\nஆரிருள் உய்த்து விடும்.",
    transliteration: "Aṭakkam amararuḷ uykkum aṭaṅkāmai\nĀriruḷ uyttu viṭum.",
    english: "Self-restraint will place a man among the gods; unrestraint will lead him to the thickest darkness.",
    tamilUrai: "அடக்கம் ஒருவனை தேவர்களுள் சேர்ப்பிக்கும்; அடக்கம் இல்லாதபோக்கோ, அடர்ந்த இருளிடையே தள்ளிவிடும்.",
    altTranslation: "Control of self does man conduct to bliss of heavenly plane; Indulgence leads to deepest darkness, ending ne'er in pain. — Pope"
  },
  {
    num: 122, chapter: 13,
    tamil: "காக்க பொருளா அடக்கத்தை ஆக்கம்\nஅதனினூஉங் கில்லை உயிர்க்கு.",
    transliteration: "Kākka poruḷā aṭakkattai ākkam\nAtaṉiṉūuṅ killai uyirkku.",
    english: "Guard self-restraint as a treasure; there is no greater wealth for the living.",
    tamilUrai: "அடக்கத்தையே ஒரு மதிப்புள்ள செல்வமாகக் கருதிப் பாதுகாக்க வேண்டும்; அதைக் காட்டிலும் மேலான செல்வம் எந்த உயிருக்கும் இல்லை.",
    altTranslation: "Guard thou as wealth the treasure of self-control; Than this no greater good to living soul. — Pope"
  },
  {
    num: 123, chapter: 13,
    tamil: "செறிவறிந்து சீர்மை பயக்கும் அறிவறிந்து\nஆற்றின் அடங்கப் பெறின்.",
    transliteration: "Ceṟivaṟintu cīrmai payakkum aṟivaṟintu\nĀṟṟiṉ aṭaṅkap peṟiṉ.",
    english: "When one knows the right way and holds himself restrained, his inner firmness will bring him lasting honour.",
    tamilUrai: "அறிந்து கொள்ள வேண்டியவற்றை அறிந்து, நன்னெறியில் ஒழுகி அடக்கம் காப்பவனுக்கு, அந்த அடக்கம் பெருமையைத் தரும்.",
    altTranslation: "Restraint, the fruit of wisdom won, shall glory bring; Such mastery upon the righteous path shall gain renowned name. — Pope"
  },
  {
    num: 124, chapter: 13,
    tamil: "நிலையின் திரியாது அடங்கியான் தோற்றம்\nமலையினும் மாணப் பெரிது.",
    transliteration: "Nilaiyiṉ tiriyātu aṭaṅkiyāṉ tōṟṟam\nMalaiyiṉum māṇap peritu.",
    english: "The presence of one who stands firm in his station and keeps himself restrained is greater even than a mountain.",
    tamilUrai: "தன் நிலையிலிருந்து விலகாமல் அடங்கி நிற்கின்ற ஒருவனின் பெருமை, மலையின் உயர்வை விடவும் சிறந்ததாகும்.",
    altTranslation: "Who, in his course unswerving, holds himself restrained, His dignity is greater than the mountain's mighty frame. — Pope"
  },
  {
    num: 125, chapter: 13,
    tamil: "எல்லார்க்கும் நன்றாம் பணிதல் அவருள்ளும்\nசெல்வர்க்கே செல்வம் தகைத்து.",
    transliteration: "Ellārkkum naṉṟām paṇital avaruḷḷum\nCelvarkkē celvam takaittu.",
    english: "Humility is good in all; but in the wealthy it is a second wealth.",
    tamilUrai: "அனைவருக்கும் பணிவு நல்ல பண்பாகும்; அவர்களுள்ளும், செல்வந்தர்களுக்கு அது மேலும் ஒரு செல்வம் போன்றதாகும்.",
    altTranslation: "For all, humility is grace; for wealthy men 'tis more — In them 'tis wealth beyond the store they keep in store. — Pope"
  },
  {
    num: 126, chapter: 13,
    tamil: "ஒருநம்யுள் தாமே கரப்பர் கரந்த பின்\nதாய்போல் காப்பவர்ப் பற்றி.",
    transliteration: "Orunamyuḷ tāmē karappar karanta piṉ\nTāypōl kāppavarp paṟṟi.",
    english: "Like a tortoise that withdraws its limbs into itself, let one hold in his senses — and those who do are guarded as by a mother for generations.",
    tamilUrai: "ஆமையைப்போல ஐம்புலன்களையும் ஒருவனே அடக்கிக் கொள்ள வேண்டும்; அவ்வாறு அடக்கியவருக்கு அவை ஏழ் பிறப்புக்கும் தாய் போலக் காப்பாய் அமையும்.",
    altTranslation: "Like tortoise, who the five restrains In one, through seven worlds bliss he gains. — Pope"
  },
  {
    num: 127, chapter: 13,
    tamil: "யாகாவா ராயினும் நாகாக்க காவாக்கால்\nசோகாப்பர் சொல்லிழுக்குப் பட்டு.",
    transliteration: "Yākāvā rāyiṉum nākākka kāvākkāl\nCōkāppar colliḻukkup paṭṭu.",
    english: "Whatever else one may fail to guard, guard the tongue; else, slip of speech shall bring lasting sorrow.",
    tamilUrai: "எதையாவது காக்காமல் விட்டாலும் நாக்கை நிச்சயம் அடக்கிக் காக்க வேண்டும்; இல்லையென்றால் சொல்லால் வரும் குற்றத்தால் துன்பப்பட நேரிடும்.",
    altTranslation: "Whate'er you fail to guard, guard well thy tongue; from slips Through word thy soul will grieve, in sorrow plunged. — Pope"
  },
  {
    num: 128, chapter: 13,
    tamil: "ஒன்றானுந் தீச்சொல் பொருட்பயன் உண்டாயின்\nநன்றாகா தாகி விடும்.",
    transliteration: "Oṉṟāṉun tīccol poruṭpayaṉ uṇṭāyiṉ\nNaṉṟākā tāki viṭum.",
    english: "If even one harmful word escapes a man's lips, all his good deeds are undone.",
    tamilUrai: "ஒரேயொரு கடுஞ்சொல் கூடப் பிறருக்குத் துன்பம் தருமாயின், அவன் செய்த மற்ற அனைத்து நற்செயல்களும் பயனற்றுப்போய்விடும்.",
    altTranslation: "Though but one harmful word a man let fall, The good he else has wrought is cancelled all. — Pope"
  },
  {
    num: 129, chapter: 13,
    tamil: "தீயினாற் சுட்டபுண் உள்ளாறும் ஆறாதே\nநாவினாற் சுட்ட வடு.",
    transliteration: "Tīyiṉāṟ cuṭṭapuṇ uḷḷāṟum āṟātē\nNāviṉāṟ cuṭṭa vaṭu.",
    english: "A wound burnt by fire may heal within; the wound burnt by the tongue never heals.",
    tamilUrai: "நெருப்பால் சுடப்பட்ட புண் காலப்போக்கில் ஆறிவிடும்; ஆனால் நாவால் (கடுஞ்சொல்லால்) ஏற்பட்ட தீராத புண் அப்படியே நிலைத்திருக்கும்.",
    altTranslation: "The fire-burnt wound may heal, but scar by tongue inflicted Wastes the soul with sorrow never healed. — Pope"
  },
  {
    num: 130, chapter: 13,
    tamil: "கதம்காத்துக் கற்றடங்கல் ஆற்றுவான் செவ்வி\nஅறம்பார்க்கும் ஆற்றின் நுழைந்து.",
    transliteration: "Katamkāttuk kaṟṟaṭaṅkal āṟṟuvāṉ cevvi\nAṟampārkkum āṟṟiṉ nuḻaintu.",
    english: "Virtue itself watches for the opportunity to enter the life of him who curbs his anger and lives self-restrained in learning.",
    tamilUrai: "கோபத்தைக் கட்டுப்படுத்தி, கற்ற அறிவினால் அடக்கத்துடன் ஒழுகுபவனின் தகுதியை அறம் எதிர்பார்த்து, அவன் வாழ்க்கையில் நுழையும் நேரத்தை எதிர்நோக்கி நிற்கும்.",
    altTranslation: "The self-restrained, who anger curb and learning gain, — For such, virtue her path to enter doth maintain. — Pope"
  },

  // CHAPTER 14 — The Possession of Decorum
  {
    num: 131, chapter: 14,
    tamil: "ஒழுக்கம் விழுப்பந் தரலான் ஒழுக்கம்\nஉயிரினும் ஓம்பப் படும்.",
    transliteration: "Oḻukkam viḻuppan taralāṉ oḻukkam\nUyiriṉum ōmpap paṭum.",
    english: "Since decorum brings greatness, it must be guarded more carefully than life itself.",
    tamilUrai: "ஒழுக்கம் ஒருவனுக்கு உயர்வை தருவதால், ஒழுக்கம் உயிரை விட மேலான பொருளாகப் போற்றிக் காக்கத்தக்கது.",
    altTranslation: "'Tis decorum's gift to raise, with glory crowned; Hence guard, than life itself, with care more profound. — Pope"
  },
  {
    num: 132, chapter: 14,
    tamil: "பரிந்தோம்பிக் காக்க ஒழுக்கம் தெரிந்தோம்பித்\nதேரினும் அஃதே துணை.",
    transliteration: "Parintōmpik kākka oḻukkam terintōmpit\nTēriṉum aḵtē tuṇai.",
    english: "Guard decorum with utmost care; however much you examine, it alone is man's true support.",
    tamilUrai: "ஒழுக்கத்தை மிகுந்த கவனத்துடன் காத்துக்கொள்க; எதையெல்லாம் ஆராய்ந்து பார்த்தாலும் அந்த ஒழுக்கமே உண்மையான துணையாக அமையும்.",
    altTranslation: "Search where ye list — true, virtuous conduct still shall be The unfailing stay of life to you and me. — Pope"
  },
  {
    num: 133, chapter: 14,
    tamil: "ஒழுக்கம் உடைமை குடிமை இழுக்கம்\nஇழிந்த பிறப்பாய் விடும்.",
    transliteration: "Oḻukkam uṭaimai kuṭimai iḻukkam\nIḻinta piṟappāy viṭum.",
    english: "Good conduct is true noble birth; lapse from it leads to birth in a lowly station.",
    tamilUrai: "ஒழுக்கத்தைக் கடைப்பிடிப்பதே உயர்ந்த குடிப்பிறப்பு; அதிலிருந்து விலகுவது இழிந்த பிறப்புக்கே வழிகோலும்.",
    altTranslation: "Decorum gives noble birth; its opposite Casts down men to the basest state. — Pope"
  },
  {
    num: 134, chapter: 14,
    tamil: "மறப்பினும் ஓத்துக் கொளலாகும் பார்ப்பான்\nபிறப்பொழுக்கம் குன்றக் கெடும்.",
    transliteration: "Maṟappiṉum ōttuk koḷalākum pārppāṉ\nPiṟappoḻukkam kuṉṟak keṭum.",
    english: "A scholar may forget his learning and regain it; but once his conduct befitting his birth falters, he is undone.",
    tamilUrai: "கற்ற நூல்களை மறந்துவிட்டாலும் மீண்டும் கற்றுக்கொள்ளலாம்; ஆனால் ஒருவனின் பிறப்புக்கு ஏற்ற ஒழுக்கம் குன்றினால், அவன் கெட்டு விடுவான்.",
    altTranslation: "A sage forgetting may regain his Vedic lore; If decorum fail, his birth's worth is no more. — Pope"
  },
  {
    num: 135, chapter: 14,
    tamil: "அழுக்கா றுடையான்கண் ஆக்கம்போன்று இல்லை\nஒழுக்கம் இலான்கண் உயர்வு.",
    transliteration: "Aḻukkā ṟuṭaiyāṉkaṇ ākkampōṉṟu illai\nOḻukkam ilāṉkaṇ uyarvu.",
    english: "As wealth does not abide with the envious, neither does greatness abide with the man who lacks decorum.",
    tamilUrai: "பொறாமை உடையவனிடம் செல்வம் நிலைத்திராதது போல, ஒழுக்கம் இல்லாதவனிடத்தில் உயர்வு நிலைத்திராது.",
    altTranslation: "As wealth departs from him who envy has enshrined, So greatness shuns the man of ill-conducted mind. — Pope"
  },
  {
    num: 136, chapter: 14,
    tamil: "ஒழுக்கத்தின் ஒல்கார் உரவோர் இழுக்கத்தின்\nஏதம் படுபாக் கறிந்து.",
    transliteration: "Oḻukkattiṉ olkār uravōr iḻukkattiṉ\nĒtam paṭupāk kaṟintu.",
    english: "Men of firm character do not waver from decorum, for they know that its lapse leads to harm.",
    tamilUrai: "உறுதியான மனநிலை உள்ளவர்கள், ஒழுக்கம் தவறினால் வரும் துன்பத்தை அறிந்துள்ளபடியால், ஒழுக்கத்தைக் கைவிடமாட்டார்கள்.",
    altTranslation: "The steadfast never swerve from virtuous way; Well they know the evil that men's lapses lay. — Pope"
  },
  {
    num: 137, chapter: 14,
    tamil: "ஒழுக்கத்தின் எய்துவர் மேன்மை இழுக்கத்தின்\nஎய்துவர் எய்தாப் பழி.",
    transliteration: "Oḻukkattiṉ eytuvar mēṉmai iḻukkattiṉ\nEytuvar eytāp paḻi.",
    english: "By decorum men attain greatness; by its lapse they earn blame beyond repair.",
    tamilUrai: "ஒழுக்கத்தின் வழியாக ஒருவன் உயர்ந்த நிலையை அடைவான்; ஒழுக்கக் கேட்டின் வழியாகத் தீராத பழியை அடைவான்.",
    altTranslation: "By decorum greatness is attained; By lapse, reproach unerasable is gained. — Pope"
  },
  {
    num: 138, chapter: 14,
    tamil: "நன்றிக்கு வித்தாகும் நல்லொழுக்கம் தீயொழுக்கம்\nஎன்றும் இடும்பை தரும்.",
    transliteration: "Naṉṟikku vittākum nalloḻukkam tīyoḻukkam\nEṉṟum iṭumpai tarum.",
    english: "Good conduct is the seed of good; evil conduct yields only sorrow, ever.",
    tamilUrai: "நல்லொழுக்கம் நன்மைகளுக்கு வித்தாக அமையும்; தீயொழுக்கமோ எப்போதும் துன்பத்தையே தரும்.",
    altTranslation: "Good conduct is the seed of good things; evil conduct ever yields Nothing but sorrow's crop in every human field. — Pope"
  },
  {
    num: 139, chapter: 14,
    tamil: "ஒழுக்க முடையவர்க்கு ஒல்லாவே தீய\nவழுக்கியும் வாயாற் சொலல்.",
    transliteration: "Oḻukka muṭaiyavarkku ollāvē tīya\nVaḻukkiyum vāyāṟ colal.",
    english: "Those who possess decorum will never let harmful words slip from their lips, even by accident.",
    tamilUrai: "ஒழுக்கம் உடையவர்கள், தவறியும்கூட தீய சொற்களை தம் வாயால் வெளிப்படுத்தமாட்டார்கள்.",
    altTranslation: "From men of decorum no evil words e'er fall, Even when by inadvertency they chance to call. — Pope"
  },
  {
    num: 140, chapter: 14,
    tamil: "உலகத்தோடு ஒட்ட ஒழுகல் பலகற்றும்\nகல்லார் அறிவிலா தார்.",
    transliteration: "Ulakattōṭu oṭṭa oḻukal palakaṟṟum\nKallār aṟivilā tār.",
    english: "He who cannot live in harmony with the world, though he has learnt much, is still unlearned.",
    tamilUrai: "உலகத்தோடு பொருந்தி ஒழுகத் தெரியாதவர், பல நூல்களைக் கற்றிருந்தாலும் அவர் உண்மையில் கற்றவரே அல்லர்; அறிவற்றவரே.",
    altTranslation: "Who cannot in accord with world its path pursue, Though manifold their lore, yet are unlearned in truth. — Pope"
  },

  // CHAPTER 15 — Not Coveting Another's Wife
  {
    num: 141, chapter: 15,
    tamil: "பிறன்பொருளாள் பெட்டொழுகும் பேதைமை ஞாலத்து\nஅறம்பொருள் கண்டார்கண் இல்.",
    transliteration: "Piṟaṉporuḷāḷ peṭṭoḻukum pētaimai ñālattu\nAṟamporuḷ kaṇṭārkaṇ il.",
    english: "The folly of desiring another man's wife is never found in those who have perceived virtue and wealth.",
    tamilUrai: "அறத்தின் பொருளையும் செல்வத்தின் பொருளையும் உணர்ந்தவர்கள், பிறனுடைய மனைவியை விரும்பி ஒழுகும் அறியாமையைச் செய்யமாட்டார்கள்.",
    altTranslation: "The folly which another's wife desires, Beset not wise men who have seen life's higher fires. — Pope"
  },
  {
    num: 142, chapter: 15,
    tamil: "அறன்கடை நின்றாருள் எல்லாம் பிறன்கடை\nநின்றாரின் பேதையார் இல்.",
    transliteration: "Aṟaṉkaṭai niṉṟāruḷ ellām piṟaṉkaṭai\nNiṉṟāriṉ pētaiyār il.",
    english: "Of all the men who stand outside the path of virtue, none is more foolish than he who waits at another man's door.",
    tamilUrai: "அறத்திற்கு வெளியே நிற்கும் அனைவரிலும், பிறன் மனைவியை விரும்பி அவன் வாயிலில் காத்திருப்பவனே மிகப் பெரிய மூடன்.",
    altTranslation: "Of all the fools that outside virtue's path abide, None are more foolish than the lustful, stealing side. — Pope"
  },
  {
    num: 143, chapter: 15,
    tamil: "விளிந்தாரின் வேறல்லர் மன்ற தெளிந்தாரில்\nதீமை புரிந்தொழுகு வார்.",
    transliteration: "Viḷintāriṉ vēṟallar maṉṟa teḷintāril\nTīmai purintoḻuku vār.",
    english: "Those who act treacherously toward those who trust them are no different from the dead.",
    tamilUrai: "தம்மை நம்பியவரிடம் தீமை செய்து ஒழுகுபவர்கள், இறந்தவர்களைப் போன்றவர்களே தவிர வேறு அல்ல.",
    altTranslation: "Those who sin against the man who trusted them, Are no whit different from the dead, as men contemn. — Pope"
  },
  {
    num: 144, chapter: 15,
    tamil: "எனைத்துணையர் ஆயினும் என்னாம் தினைத்துணையும்\nதேரான் பிறனில் புகல்.",
    transliteration: "Eṉaittuṇaiyar āyiṉum eṉṉām tiṉaittuṇaiyum\nTērāṉ piṟaṉil pukal.",
    english: "However great he may be, what comes of the man who enters another's house without even a moment's thought?",
    tamilUrai: "எத்துணை பெருமை உடையவராய் இருப்பினும், தினையளவும் சிந்திக்காமல் பிறனின் வீட்டில் (பிறன் மனைவியை விரும்பி) நுழைபவர்க்கு என்ன பெருமை இருக்கும்?",
    altTranslation: "However great, what honour theirs who thoughtless rush Into another's house, for just a moment's lustful blush? — Pope"
  },
  {
    num: 145, chapter: 15,
    tamil: "எளிதென இல்லிறப்பான் எய்துமெஞ் ஞான்றும்\nவிளியாது நிற்கும் பழி.",
    transliteration: "Eḷiteṉa illiṟappāṉ eytumeñ ñāṉṟum\nViḷiyātu niṟkum paḻi.",
    english: "He who thinks it easy to trespass in another's home earns blame that never dies.",
    tamilUrai: "\"இது எளிய செயல்\" என்று எண்ணி பிறனுடைய வீட்டில் நுழைபவன், என்றும் அழியாத பழியை அடைவான்.",
    altTranslation: "Who deems it light to trespass on another's right, Eternal shame that never dies shall blight. — Pope"
  },
  {
    num: 146, chapter: 15,
    tamil: "பகைபாவம் அச்சம் பழியென நான்கும்\nஇகவாவாம் இல்லிறப்பான் கண்.",
    transliteration: "Pakaipāvam accam paḻiyeṉa nāṉkum\nIkavāvām illiṟappāṉ kaṇ.",
    english: "Four things never leave the man who enters another's home: enmity, sin, fear, and shame.",
    tamilUrai: "பிறன் மனைவியை விரும்பி அவனது வீட்டில் நுழைபவனிடம், பகை, பாவம், அச்சம், பழி ஆகிய நான்கும் விடாமல் நிற்கும்.",
    altTranslation: "Hatred, sin, fear, and shame — these four Forsake not him who enters at another's door. — Pope"
  },
  {
    num: 147, chapter: 15,
    tamil: "அறனியலான் இல்வாழ்வான் என்பான் பிறனியலாள்\nபெண்மை நயவா தவன்.",
    transliteration: "Aṟaṉiyalāṉ ilvāḻvāṉ eṉpāṉ piṟaṉiyalāḷ\nPeṇmai nayavā tavaṉ.",
    english: "He truly lives by virtue's rule who does not desire another man's wedded wife.",
    tamilUrai: "பிறனுக்கு உரிய பெண்ணின் பெண்மையை விரும்பாமல் இருப்பவனே, அறத்தின்படி இல்வாழ்க்கை நடத்துபவன் எனப்படுவான்.",
    altTranslation: "Who covets not the wife of other men is he Who truly lives in household virtue's decree. — Pope"
  },
  {
    num: 148, chapter: 15,
    tamil: "பிறன்மனை நோக்காத பேராண்மை சான்றோர்க்கு\nஅறனொன்றோ ஆன்ற வொழுக்கு.",
    transliteration: "Piṟaṉmaṉai nōkkāta pērāṇmai cāṉṟōrkku\nAṟaṉoṉṟō āṉṟa voḻukku.",
    english: "Not to look with desire on another's wife — this is not only virtue, but the crown of noble conduct.",
    tamilUrai: "பிறன் மனைவியை விருப்போடு நோக்காதிருக்கும் மேலான ஆண்மை, சான்றோருக்கு அறம் மட்டுமன்று; அது நிறைந்த நல்லொழுக்கமும் ஆகும்.",
    altTranslation: "Not to regard another's wife — is manhood high And highest virtue, noble conduct's crowning peak. — Pope"
  },
  {
    num: 149, chapter: 15,
    tamil: "நலக்குரியார் யாரெனின் நாமநீர் வைப்பில்\nபிறற்குரியாள் தோள்தோயா தார்.",
    transliteration: "Nalakkuriyār yāreṉiṉ nāmanīr vaippil\nPiṟaṟkuriyāḷ tōḷtōyā tār.",
    english: "Who are worthy of good in this sea-girt world? Those who do not touch the arms of the woman belonging to another.",
    tamilUrai: "கடலால் சூழப்பட்ட இந்த உலகில் நன்மைக்கு உரியவர் யாரென்றால், பிறனுக்குரிய பெண்ணின் தோளைத் தழுவாதவர்களே.",
    altTranslation: "Who deserves good on earth surrounded by the seas? 'Tis he whose arms embrace no wife that's not his own. — Pope"
  },
  {
    num: 150, chapter: 15,
    tamil: "அறன்வரையான் அல்ல செயினும் பிறன்வரையாள்\nபெண்மை நயவாமை நன்று.",
    transliteration: "Aṟaṉvaraiyāṉ alla ceyiṉum piṟaṉvaraiyāḷ\nPeṇmai nayavāmai naṉṟu.",
    english: "Even if a man transgresses virtue in other ways, it is still good that he does not desire another man's wife.",
    tamilUrai: "ஒருவன் அறநெறியை மீறிப் பிற தவறுகளைச் செய்தாலும், பிறனுக்கு உரிய பெண்ணின் பெண்மையை விரும்பாதிருப்பது நல்லதேயாகும்.",
    altTranslation: "Though virtue's bound he may transgress in other ways, To shun another's wife is still the noble phase. — Pope"
  },

  // CHAPTER 16 — The Possession of Patience
  {
    num: 151, chapter: 16,
    tamil: "அகழ்வாரைத் தாங்கும் நிலம்போலத் தம்மை\nஇகழ்வார்ப் பொறுத்தல் தலை.",
    transliteration: "Akaḻvāraittāṅkum nilampōlat tammai\nIkaḻvārp poṟuttal talai.",
    english: "As the earth bears those who dig into it, so to bear with those who scorn us is the supreme virtue.",
    tamilUrai: "தன்னை தோண்டுபவர்களையும் தாங்குகின்ற பூமியைப் போல, தம்மை இகழ்ந்து பேசுபவர்களைப் பொறுத்துக் கொள்வதே மேலான பண்பாகும்.",
    altTranslation: "As earth bears up with those who dig and wound its breast, To bear with scorners too, is virtue's noblest rest. — Pope"
  },
  {
    num: 152, chapter: 16,
    tamil: "பொறுத்தல் இறப்பினை என்றும் அதனை\nமறத்தல் அதனினும் நன்று.",
    transliteration: "Poṟuttal iṟappiṉai eṉṟum ataṉai\nMaṟattal ataṉiṉum naṉṟu.",
    english: "Bearing with wrongs done by others is good; forgetting them altogether is even better.",
    tamilUrai: "பிறர் செய்த தீமையைப் பொறுத்துக் கொள்ளுதல் நல்லது; அதை முற்றிலும் மறந்துவிடுதல் அதனினும் மேலானது.",
    altTranslation: "To bear with wrongs is good; but better 'tis by far To let their memory fade without a scar. — Pope"
  },
  {
    num: 153, chapter: 16,
    tamil: "இன்மையுள் இன்மை விருந்தொரால் வன்மையுள்\nவன்மை மடவார்ப் பொறை.",
    transliteration: "Iṉmaiyuḷ iṉmai viruntorāl vaṉmaiyuḷ\nVaṉmai maṭavārp poṟai.",
    english: "The worst poverty is to neglect a guest; the greatest strength is patience with fools.",
    tamilUrai: "விருந்தினரைப் புறக்கணிப்பதே வறுமையிலும் பெரும் வறுமை; அறிவிலிகளையும் பொறுத்துக் கொள்ளுதலே வலிமையிலும் மேலான வலிமை.",
    altTranslation: "Worst want is to neglect the guest; the mightiest might Is bearing with the fool who speaks what is not right. — Pope"
  },
  {
    num: 154, chapter: 16,
    tamil: "நிறையுடைமை நீங்காமை வேண்டின் பொறையுடைமை\nபோற்றி ஒழுகப் படும்.",
    transliteration: "Niṟaiyuṭaimai nīṅkāmai vēṇṭiṉ poṟaiyuṭaimai\nPōṟṟi oḻukap paṭum.",
    english: "If one wishes his virtues to remain, he must cherish patience and live by it.",
    tamilUrai: "நற்பண்புகள் தம்மிடமிருந்து நீங்காமல் நிலையாய் நிற்க வேண்டுமானால், பொறுமையைச் சிறந்ததாகப் போற்றி அதன் வழியே நடக்க வேண்டும்.",
    altTranslation: "Who seeks their virtues may not fade away, Must cherish patience and her law obey. — Pope"
  },
  {
    num: 155, chapter: 16,
    tamil: "ஒறுத்தாரை ஒன்றாக வையாரே வைப்பர்\nபொறுத்தாரைப் பொன்போல் பொதிந்து.",
    transliteration: "Oṟuttārai oṉṟāka vaiyārē vaippar\nPoṟuttāraip poṉpōl potintu.",
    english: "Men of wisdom do not regard avengers; but those who forgive, they treasure like gold wrapped in cloth.",
    tamilUrai: "தீமை செய்தவரைப் பதில் பழி வாங்குபவர்களை ஒரு பொருட்டாகக் கருதமாட்டார்கள்; பொறுத்துக் கொள்பவர்களையோ பொன்னைப் போலப் பொதிந்து போற்றுவார்கள்.",
    altTranslation: "Men prize not those who wreak revenge; but those who bear The wrong, as gold in safest casket they enfold with care. — Pope"
  },
  {
    num: 156, chapter: 16,
    tamil: "ஒறுத்தார்க்கு ஒருநாளை இன்பம் பொறுத்தார்க்குப்\nபொன்றுந் துணையும் புகழ்.",
    transliteration: "Oṟuttārkku orunāḷai iṉpam poṟuttārkkup\nPoṉṟun tuṇaiyum pukaḻ.",
    english: "One who takes revenge enjoys pleasure for a day; one who forgives earns praise until the end of his life.",
    tamilUrai: "பழி வாங்குபவருக்கு ஒரு நாள் அளவிலான இன்பமே கிட்டும்; ஆனால் பொறுத்துக் கொள்பவருக்கோ, இறக்கும் வரை பெருமையான புகழ் கிட்டும்.",
    altTranslation: "The wreaker finds a day's delight; the forbearing Wins praise that lives till life's last day's declaring. — Pope"
  },
  {
    num: 157, chapter: 16,
    tamil: "திறனல்ல தற்பிறர் செய்யினும் நோநொந்து\nஅறனல்ல செய்யாமை நன்று.",
    transliteration: "Tiṟaṉalla taṟpiṟar ceyyiṉum nōnontu\nAṟaṉalla ceyyāmai naṉṟu.",
    english: "Though others do wrong to you, even while suffering yourself, refrain from doing anything unrighteous in return — that is best.",
    tamilUrai: "பிறர் தமக்குத் தீமை செய்தாலும், அதன் வலியினால் துன்புற்றவராய் இருந்தாலும், பதிலுக்கு அறமல்லாத செயலைச் செய்யாதிருப்பதே சிறந்ததாகும்.",
    altTranslation: "Though evil men may evil do, 'tis good To grieve and yet refrain from evil's fruit. — Pope"
  },
  {
    num: 158, chapter: 16,
    tamil: "மிகுதியான் மிக்கவை செய்தாரைத் தாம்தம்\nதகுதியான் வென்று விடல்.",
    transliteration: "Mikutiyāṉ mikkavai ceytāraittāmtam\nTakutiyāṉ veṉṟu viṭal.",
    english: "Conquer those who wrong you in their pride by the merit of your own patience.",
    tamilUrai: "மிக்க கர்வத்துடன் தீமைகள் செய்தவரை, தாம் பொறுமை என்னும் தகுதியைக் கொண்டு வென்று விட வேண்டும்.",
    altTranslation: "By heart's own greatness, conquer those who wrong thee in their pride; Let patience o'er them in triumph ride. — Pope"
  },
  {
    num: 159, chapter: 16,
    tamil: "துறந்தாரின் தூய்மை உடையர் இறந்தார்வாய்\nஇன்னாச்சொல் நோற்கிற் பவர்.",
    transliteration: "Tuṟantāriṉ tūymai uṭaiyar iṟantārvāy\nIṉṉāccol nōṟkiṟ pavar.",
    english: "Those who bear harsh words from the ill-bred are as pure as ascetics who have renounced the world.",
    tamilUrai: "எல்லை மீறி பேசுகின்ற நீசர்களின் கடுஞ்சொற்களைப் பொறுத்துக் கொள்பவர்கள், உலகியலைத் துறந்த முனிவர்களைப் போல் தூயவர்களாவர்.",
    altTranslation: "As pure as hermits who have fled the world are they, Who bear the bitter words of evil men each day. — Pope"
  },
  {
    num: 160, chapter: 16,
    tamil: "உண்ணாது நோற்பார் பெரியர் பிறர்சொல்லும்\nஇன்னாச்சொல் நோற்பாரிற் பின்.",
    transliteration: "Uṇṇātu nōṟpār periyar piṟarcollum\nIṉṉāccol nōṟpāriṟ piṉ.",
    english: "Those who endure hunger through austerity are great, but they stand second to those who endure the harsh words of others.",
    tamilUrai: "உணவை உண்ணாமல் பட்டினி கிடந்து தவம் செய்பவர்கள் பெரியவர்கள் தாம்; ஆனால் பிறர் வாய்ப் பிழைத்துப் பேசும் கடுஞ்சொற்களைப் பொறுத்துக் கொள்பவர்களுக்குப் பின்னரே அவர்கள் வருவார்கள்.",
    altTranslation: "Great are they who fast and bear the pang of fleshly pain; But those who bear with harsh tongues, higher rank attain. — Pope"
  },

  // CHAPTER 17 — Not Envying
  {
    num: 161, chapter: 17,
    tamil: "ஒழுக்காறாக் கொள்க ஒருவன்தன் நெஞ்சத்து\nஅழுக்காறு இலாத இயல்பு.",
    transliteration: "Oḻukkāṟāk koḷka oruvaṉtaṉ neñcattu\nAḻukkāṟu ilāta iyalpu.",
    english: "Hold as the rule of conduct the nature of a mind free from envy.",
    tamilUrai: "பொறாமை இல்லாத பண்பினை, ஒருவன் தன் மனத்திற்கு இலக்கணமாக, தவறாத ஒழுக்க நெறியாகக் கொள்ள வேண்டும்.",
    altTranslation: "Let this be counted virtue's chiefest rule — The absence of all envy from thy soul. — Pope"
  },
  {
    num: 162, chapter: 17,
    tamil: "விழுப்பேற்றின் அஃதொப்பது இல்லையார் மாட்டும்\nஅழுக்காற்றின் அன்மை பெறின்.",
    transliteration: "Viḻuppēṟṟiṉ aḵtoppatu illaiyār māṭṭum\nAḻukkāṟṟiṉ aṉmai peṟiṉ.",
    english: "If one gains the freedom from envy toward all, no attainment in this world is equal to it.",
    tamilUrai: "யார் விஷயத்திலும் பொறாமை இல்லாமல் வாழக் கற்றுக்கொண்டால், அதற்கு இணையான பேறு உலகில் வேறு எதுவும் இல்லை.",
    altTranslation: "No glory equals this — to stand from envy free Towards all men in every time and place that be. — Pope"
  },
  {
    num: 163, chapter: 17,
    tamil: "அறனாக்கம் வேண்டாதான் என்பான் பிறனாக்கம்\nபேணாது அழுக்கறுப் பான்.",
    transliteration: "Aṟaṉākkam vēṇṭātāṉ eṉpāṉ piṟaṉākkam\nPēṇātu aḻukkaṟup pāṉ.",
    english: "He who envies another's gain is as one who does not desire either virtue or wealth for himself.",
    tamilUrai: "மற்றவர்களின் ஆக்கத்தைச் சகிக்காமல் பொறாமைப்படுபவன், தனக்கு அறமோ செல்வமோ வேண்டா என்பவனே ஆவான்.",
    altTranslation: "Who envies others' wealth, by his own mien confesses He neither virtue nor riches possess nor blesses. — Pope"
  },
  {
    num: 164, chapter: 17,
    tamil: "அழுக்காற்றின் அல்லவை செய்யார் இழுக்காற்றின்\nஏதம் படுபாக் கறிந்து.",
    transliteration: "Aḻukkāṟṟiṉ allavai ceyyār iḻukkāṟṟiṉ\nĒtam paṭupāk kaṟintu.",
    english: "The wise do not commit evil deeds through envy, knowing the harm that follows such wrongdoing.",
    tamilUrai: "தவறான வழியில் செல்வதால் வரும் துன்பத்தை அறிந்த அறிஞர்கள், பொறாமையால் தீய செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "The wise, who know the woe that follows lapse in virtue's way, From envy's wicked deed refrain from day to day. — Pope"
  },
  {
    num: 165, chapter: 17,
    tamil: "அழுக்காறு உடையார்க்கு அதுசாலும் ஒன்னார்\nவழுக்கியும் கேடீன் பது.",
    transliteration: "Aḻukkāṟu uṭaiyārkku atucālum oṉṉār\nVaḻukkiyum kēṭīṉ patu.",
    english: "For the envious, envy itself is enough — even their foes need not strive to bring them harm.",
    tamilUrai: "பொறாமை உடையவர்களுக்கு அந்தப் பொறாமையே போதும்; பகைவர்கள் கூட அவர்களுக்குக் கேடு செய்யத் தவறினாலும், பொறாமையே அவர்களுக்குக் கேடு தந்துவிடும்.",
    altTranslation: "To them who nourish envy naught is needed more; Their foes have not to smite; their ruin lies at their core. — Pope"
  },
  {
    num: 166, chapter: 17,
    tamil: "கொடுப்பது அழுக்கறுப்பான் சுற்றம் உடுப்பதூஉம்\nஉண்பதூஉம் இன்றிக் கெடும்.",
    transliteration: "Koṭuppatu aḻukkaṟuppāṉ cuṟṟam uṭuppatūum\nUṇpatūum iṉṟik keṭum.",
    english: "The family of one who envies gifts given to others will perish without food or clothing.",
    tamilUrai: "பிறர்க்குக் கொடுக்கப்படுவதைப் பொறாமைப் படுபவனின் சுற்றம், உண்ண உணவும், உடுக்க உடையும் இன்றிக் கெட்டுப் போய்விடும்.",
    altTranslation: "The envier at the gifts bestowed sees all his kin Without food, raiment, to decay and ruin sink. — Pope"
  },
  {
    num: 167, chapter: 17,
    tamil: "அவ்வித்து அழுக்காறு உடையானைச் செய்யவள்\nதவ்வையைக் காட்டி விடும்.",
    transliteration: "Avvittu aḻukkāṟu uṭaiyāṉaic ceyyavaḷ\nTavvaiyaik kāṭṭi viṭum.",
    english: "Lakshmi, goddess of wealth, grows angry and gives the envious man over to her elder sister, misfortune.",
    tamilUrai: "பொறாமை உடையவனைத் திருமகள் (செல்வம்) பொறுக்காமல், அவனைத் தன் தமக்கையான மூதேவியிடம் (வறுமையிடம்) ஒப்படைத்து விடுவாள்.",
    altTranslation: "The goddess of prosperity, disgusted, hands the envier o'er To Misery, her elder sister, evermore. — Pope"
  },
  {
    num: 168, chapter: 17,
    tamil: "அழுக்காறு எனஒரு பாவி திருச்செற்றுத்\nதீயுழி உய்த்து விடும்.",
    transliteration: "Aḻukkāṟu eṉaoru pāvi tiruccheṟṟut\nTīyuḻi uytti viṭum.",
    english: "The sinner called envy destroys prosperity and drives a man into the path of evil.",
    tamilUrai: "பொறாமை என்னும் பாவி ஒருவனின் செல்வத்தை அழித்து, அவனைத் தீய வழியில் கொண்டு சென்று விடும்.",
    altTranslation: "The sinner called envy plunders wealth, then drives The envier down the path where only ruin thrives. — Pope"
  },
  {
    num: 169, chapter: 17,
    tamil: "அவ்விய நெஞ்சத்தான் ஆக்கமும் செவ்வியான்\nகேடும் நினைக்கப் படும்.",
    transliteration: "Avviya neñcattāṉ ākkamum cevviyāṉ\nKēṭum niṉaikkap paṭum.",
    english: "The prosperity of the envious and the misfortune of the upright are both matters worthy of careful thought.",
    tamilUrai: "பொறாமை உள்ள மனத்தவனுக்குச் செல்வம் ஏறுவதும், நேர்மையானவனுக்குத் துன்பம் நேர்வதும் — இவை இரண்டையும் ஆழமாக சிந்தித்து ஆராய வேண்டும்.",
    altTranslation: "The prosperous envier and the honest fallen low — These are the riddles men of wisdom bend them to know. — Pope"
  },
  {
    num: 170, chapter: 17,
    tamil: "அழுக்கற்று அகன்றாரும் இல்லை அஃதுஇல்லார்\nபெருக்கத்தில் தீர்ந்தாரும் இல்.",
    transliteration: "Aḻukkaṟṟu akaṉṟārum illai aḵtuillār\nPerukkattil tīrntārum il.",
    english: "None have prospered through envy; none free from envy have failed to rise.",
    tamilUrai: "பொறாமை உடையவர்கள் யாரும் உயர்ந்த நிலை எய்தியதில்லை; பொறாமை இல்லாதவர்கள் யாரும் பெருமை இழந்ததில்லை.",
    altTranslation: "None through envy ever rose; none free from envy's sting, Were ever brought to poverty and suffering. — Pope"
  },

  // CHAPTER 18 — Not Coveting
  {
    num: 171, chapter: 18,
    tamil: "நடுவின்றி நன்பொருள் வெஃகின் குடியின்றிக்\nகுற்றமும் ஆங்கே தரும்.",
    transliteration: "Naṭuviṉṟi naṉporuḷ veḵkiṉ kuṭiyiṉṟik\nKuṟṟamum āṅkē tarum.",
    english: "If one covets another's wealth without sense of justice, his own family is ruined and guilt will come upon him at once.",
    tamilUrai: "நடுநிலை இன்றிப் பிறருடைய நல்ல பொருளை விரும்பினால், அது அவனின் குடியையும் கெடுத்து, குற்றத்தையும் உடனே தரும்.",
    altTranslation: "Who covets another's goods, unjust, shall see His home's undoing and his guilt's decree. — Pope"
  },
  {
    num: 172, chapter: 18,
    tamil: "படுபயன் வெஃகிப் பழிப்படுவ செய்யார்\nநடுவன்மை நாணு பவர்.",
    transliteration: "Paṭupayaṉ veḵkip paḻippaṭuva ceyyār\nNaṭuvaṉmai nāṇu pavar.",
    english: "Those who shrink from injustice will not do blameful deeds to seize questionable gains.",
    tamilUrai: "நடுநிலையிலிருந்து மாறுவதற்கு நாணுபவர்கள், பொருளின் மேலுள்ள ஆசையால் பழிக்குரிய செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "Men who blush at injustice for its sake alone, Will not for gain do what makes shame their own. — Pope"
  },
  {
    num: 173, chapter: 18,
    tamil: "சிற்றின்பம் வெஃகி அறனல்ல செய்யாரே\nமற்றின்பம் வேண்டு பவர்.",
    transliteration: "Ciṟṟiṉpam veḵki aṟaṉalla ceyyārē\nMaṟṟiṉpam vēṇṭu pavar.",
    english: "Those who desire the greater joys of the hereafter do not commit wrongs through craving for small present pleasures.",
    tamilUrai: "மறுமையில் கிடைக்கும் பெரிய இன்பத்தை விரும்புபவர்கள், இம்மையில் வரும் சிற்றின்பத்தின் மீதுள்ள ஆசையால் அறமல்லாத செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "Who seek the greater bliss beyond, will not for joys below Work deeds unrighteous, reaping woe. — Pope"
  },
  {
    num: 174, chapter: 18,
    tamil: "இலமென்று வெஃகுதல் செய்யார் புலம்வென்ற\nபுன்மையில் காட்சி யவர்.",
    transliteration: "Ilameṉṟu veḵkutal ceyyār pulamveṉṟa\nPuṉmaiyil kāṭci yavar.",
    english: "Those whose vision is unclouded, having conquered their senses, do not covet another's wealth saying, 'I am poor.'",
    tamilUrai: "புலன்களை வென்று, குற்றமற்ற காட்சியுடையவர்கள், 'நான் வறியவன்' என்று சொல்லி மற்றவர் பொருளை விரும்ப மாட்டார்கள்.",
    altTranslation: "The senses quelled, with vision pure and high, They do not crave, though want be nigh. — Pope"
  },
  {
    num: 175, chapter: 18,
    tamil: "அஃகி அகன்ற அறிவென்னாம் யார்மாட்டும்\nவெஃகி வெறிய செயின்.",
    transliteration: "Aḵki akaṉṟa aṟiveṉṉām yārmāṭṭum\nVeḵki veṟiya ceyiṉ.",
    english: "What use is learning, deep and wide, if one covets another's wealth and does reckless deeds?",
    tamilUrai: "நுண்ணிதாகவும் விரிவாகவும் அமைந்த அறிவு, எவரையும் கண்டு அவர் பொருளை விரும்பி கட்டுக்கடங்காது செயல்பட்டால் என்ன பயன்?",
    altTranslation: "Of what avail is knowledge, subtle, broad, and keen, If one will covet and do deeds obscene? — Pope"
  },
  {
    num: 176, chapter: 18,
    tamil: "அருள்வெஃகி ஆற்றின்கண் நின்றான் பொருள்வெஃகிப்\nபொல்லாத சூழக் கெடும்.",
    transliteration: "Aruḷveḵki āṟṟiṉkaṇ niṉṟāṉ poruḷveḵkip\nPollāta cūḻak keṭum.",
    english: "He who, though desiring grace, stands on the path of virtue, will be ruined if he then covets wealth and plots evil.",
    tamilUrai: "அருளை விரும்பி நல்வழியில் நின்றவன், பின்னர் பொருளை விரும்பித் தீய வழிகளில் எண்ணினால், அவனே கெடுவான்.",
    altTranslation: "Who first desired grace, and on her path did stand, If grasping greed with evil plans he plans, must fall at hand. — Pope"
  },
  {
    num: 177, chapter: 18,
    tamil: "வேண்டற்க வெஃகியாம் ஆக்கம் விளைவயின்\nமாண்டற் கரிதாம் பயன்.",
    transliteration: "Vēṇṭaṟka veḵkiyām ākkam viḷaivayiṉ\nMāṇṭaṟ karitām payaṉ.",
    english: "Do not desire the wealth gained through covetousness; its fruits never yield real greatness.",
    tamilUrai: "ஆசையால் பெற்றதாக தோன்றும் செல்வத்தை விரும்ப வேண்டாம்; அதன் விளைவுகள் என்றும் மேன்மையானவையாக அமையாது.",
    altTranslation: "Desire not gain through greed; the fruits that grow Thereof can never to true greatness flow. — Pope"
  },
  {
    num: 178, chapter: 18,
    tamil: "அஃகாமை செல்வத்திற்கு யாதெனின் வெஃகாமை\nவேண்டும் பிறன்கைப் பொருள்.",
    transliteration: "Aḵkāmai celvattiṟku yāteṉiṉ veḵkāmai\nVēṇṭum piṟaṉkaip poruḷ.",
    english: "If you ask how wealth may remain undiminished, the answer is: covet not what is in another's hand.",
    tamilUrai: "செல்வம் குறையாமல் நிலைத்திருப்பதற்கான வழி என்ன என்றால், பிறர் கையிலுள்ள பொருளை விரும்பாமல் இருத்தலே அது.",
    altTranslation: "Wouldst thou that thy wealth should never wane? Covet not what others' hands retain. — Pope"
  },
  {
    num: 179, chapter: 18,
    tamil: "அறனறிந்து வெஃகா அறிவுடையார்ச் சேரும்\nதிறன்அறிந்து ஆங்கே திரு.",
    transliteration: "Aṟaṉaṟintu veḵkā aṟivuṭaiyārc cērum\nTiṟaṉaṟintu āṅkē tiru.",
    english: "Lakshmi, the goddess of wealth, discerning their worth, comes to dwell with those who, knowing virtue, do not covet.",
    tamilUrai: "அறம் அறிந்து, பிறர் பொருளை விரும்பாத அறிஞர்களின் தகுதியை அறிந்து, திருமகள் (செல்வம்) தானாகவே அவர்களை நாடிச் சேர்வாள்.",
    altTranslation: "Who virtue know and covet not, the goddess of wealth Finds out their worth and dwells with them in health. — Pope"
  },
  {
    num: 180, chapter: 18,
    tamil: "இறலீனும் எண்ணாது வெஃகின் விறல்ஈனும்\nவேண்டாமை என்னுஞ் செருக்கு.",
    transliteration: "Iṟalīṉum eṇṇātu veḵkiṉ viṟalīṉum\nVēṇṭāmai eṉṉuñ cerukku.",
    english: "Thoughtless coveting brings ruin; the greatness of not desiring brings victory.",
    tamilUrai: "சிந்திக்காமல் பிறர் பொருளை விரும்புதல் அழிவைத் தரும்; எதையும் விரும்பாதிருத்தல் என்னும் மேன்மையோ வெற்றியைத் தரும்.",
    altTranslation: "Thoughtless greed breeds but ruin sure; Greatness of not desiring breeds triumph pure. — Pope"
  },

  // CHAPTER 19 — Not Backbiting
  {
    num: 181, chapter: 19,
    tamil: "அறங்கூறான் அல்ல செயினும் ஒருவன்\nபுறங்கூறான் என்றல் இனிது.",
    transliteration: "Aṟaṅkūṟāṉ alla ceyiṉum oruvaṉ\nPuṟaṅkūṟāṉ eṉṟal iṉitu.",
    english: "Though a man does not praise virtue and even does wrong, it is still sweet to say of him, 'He does not speak ill of others.'",
    tamilUrai: "ஒருவன் அறம் பேசாதவனாகவும், தீமை செய்பவனாகவும் இருந்த போதிலும், 'பிறரைப் பற்றி புறம் கூறாதவன்' என்று அவனைப் பற்றிக் கூறுதல் இனிமையாகும்.",
    altTranslation: "Though lacking virtue and though wrong men do, 'Tis good to say, 'He backbites not,' 'tis true. — Pope"
  },
  {
    num: 182, chapter: 19,
    tamil: "அறனழீஇ அல்லவை செய்தலின் தீதே\nபுறனழீஇப் பொய்த்து நகை.",
    transliteration: "Aṟaṉaḻīi allavai ceytaliṉ tītē\nPuṟaṉaḻīip poyttu nakai.",
    english: "Worse than destroying virtue and doing evil is to slander someone behind his back while smiling falsely to his face.",
    tamilUrai: "அறத்தை அழித்து, அறம் அல்லாதவற்றைச் செய்வதைவிடத் தீயது — ஒருவனை நேரில் கண்டு போலியாகச் சிரித்து, பின் புறம் கூறுதல்.",
    altTranslation: "Worse than to blight virtue and work evil ways, 'Tis to backbite, and in his face give smiling praise. — Pope"
  },
  {
    num: 183, chapter: 19,
    tamil: "புறங்கூறிப் பொய்த்துயிர் வாழ்தலின் சாதல்\nஅறங்கூறும் ஆக்கத் தரும்.",
    transliteration: "Puṟaṅkūṟip poyttuyir vāḻtaliṉ cātal\nAṟaṅkūṟum ākkat tarum.",
    english: "Better to die than to live backbiting and lying; for death at least brings the gain that virtue affords.",
    tamilUrai: "பிறர் பின்னால் புறம் கூறி, பொய்யாக உயிர் வாழ்வதைவிட, மரணமே சிறந்தது; அது அறத்தின் பயனை நல்கும்.",
    altTranslation: "Rather die than live false with backbiting lips; Death at least with virtue's gain the grave equips. — Pope"
  },
  {
    num: 184, chapter: 19,
    tamil: "கண்ணின்று கண்ணறச் சொல்லினும் சொல்லற்க\nமுன்இன்று பின்நோக்காச் சொல்.",
    transliteration: "Kaṇṇiṉṟu kaṇṇaṟac colliṉum collaṟka\nMuṉiṉṟu piṉnōkkāc col.",
    english: "Though you must speak harshly to a man's face, never speak evil of him behind his back without due thought.",
    tamilUrai: "ஒருவரை நேருக்கு நேர் நின்று கடுமையாகப் பேசினாலும் பேசுக; ஆனால் அவர் இல்லாதபோது, விளைவை எண்ணாமல் புறத்தே பேசாதே.",
    altTranslation: "Before the face, speak harshly if you must; but never Speak behind his back, without forethought and waver. — Pope"
  },
  {
    num: 185, chapter: 19,
    tamil: "அறஞ்சொல்லும் நெஞ்சத்தான் அன்மை புறஞ்சொல்லும்\nபுன்மையாற் காணப் படும்.",
    transliteration: "Aṟañcollum neñcattāṉ aṉmai puṟañcollum\nPuṉmaiyāṟ kāṇap paṭum.",
    english: "The lack of virtue in the heart of one who speaks fairly is revealed by the meanness of his backbiting.",
    tamilUrai: "ஒருவனின் மனத்தில் அறம் இல்லை என்பது, அவன் பிறர் பின்னால் பேசும் புறக்கூற்றின் இழிவினால் வெளிப்பட்டுத் தெரியும்.",
    altTranslation: "Though fair his speech, his heart hath virtue none; Backbiting's meanness makes the emptiness known. — Pope"
  },
  {
    num: 186, chapter: 19,
    tamil: "பிறன்பழி கூறுவான் தன்பழி யுள்ளும்\nதிறன்தெரிந்து கூறப் படும்.",
    transliteration: "Piṟaṉpaḻi kūṟuvāṉ taṉpaḻi yuḷḷum\nTiṟaṉterintu kūṟap paṭum.",
    english: "He who blames another will himself be blamed in turn, and his faults will be detailed and proclaimed.",
    tamilUrai: "பிறரது பழிகளைக் கூறுபவனின் சொந்தப் பழிகளும், அவனுடைய குற்றங்கள் ஒவ்வொன்றாக ஆராயப்பட்டு பிறரால் பேசப்படும்.",
    altTranslation: "Who blames others shall see his own faults counted o'er, Detailed by gossip's tongue more and more. — Pope"
  },
  {
    num: 187, chapter: 19,
    tamil: "பகச்சொல்லிக் கேளிர்ப் பிரிப்பர் நகச்சொல்லி\nநட்பாடல் தேற்றா தவர்.",
    transliteration: "Pakaccollik kēḷirp pirippar nakaccolli\nNaṭpāṭal tēṟṟā tavar.",
    english: "Those who know not how to gain friends by pleasant speech will, by harsh words, divide even their own kin.",
    tamilUrai: "மகிழ்ச்சி தரும் சொற்களால் நட்பை வளர்க்கத் தெரியாதவர்கள், பிரிவு தரும் சொற்களைப் பேசி தங்கள் உறவினரையும் தம்மிடமிருந்து பிரித்துவிடுவர்.",
    altTranslation: "Who know not how to win with pleasing speech, by bitter phrase Will drive their very kin to separated ways. — Pope"
  },
  {
    num: 188, chapter: 19,
    tamil: "துன்னியார் குற்றமும் தூற்றும் மரபினர்\nஎன்னைகொல் ஏதிலார் மாட்டு.",
    transliteration: "Tuṉṉiyār kuṟṟamum tūṟṟum marapiṉar\nEṉṉaikol ētilār māṭṭu.",
    english: "If they publicly expose even the faults of those close to them, what will they not do to strangers?",
    tamilUrai: "தம்முடன் நெருக்கமாக உள்ளவர்களின் குற்றங்களையும் பிறரிடம் கூறி பரப்பும் இயல்புடையோர், அயலாரிடத்தில் என்ன செய்வார்கள்?",
    altTranslation: "Who e'en their own familiars' faults proclaim abroad — What will they not to strangers do, O God? — Pope"
  },
  {
    num: 189, chapter: 19,
    tamil: "அறன்நோக்கி ஆற்றுங்கொல் வையம் புறன்நோக்கிப்\nபுன்சொல் உரைப்பான் பொறை.",
    transliteration: "Aṟaṉnōkki āṟṟuṅkol vaiyam puṟaṉnōkkip\nPuṉcol uraippāṉ poṟai.",
    english: "Only because the earth looks to virtue does it still bear the weight of one who talks meanly behind others' backs.",
    tamilUrai: "ஒருவன் இல்லாத இடத்தில் அவனுக்குப் பழி சொல்லும் இழிந்தவனுடைய பாரத்தை பூமி சுமப்பது, அறத்தை ஒட்டி நிற்கிறதோ?",
    altTranslation: "Only through regard for virtue, sure, earth bears The burden of the backbiter's cares. — Pope"
  },
  {
    num: 190, chapter: 19,
    tamil: "ஏதிலார் குற்றம்போல் தங்குற்றங் காண்கிற்பின்\nதீதுண்டோ மன்னும் உயிர்க்கு.",
    transliteration: "Ētilār kuṟṟampōl taṅkuṟṟaṅ kāṇkiṟpiṉ\nTītuṇṭō maṉṉum uyirkku.",
    english: "If a man could see his own faults as clearly as he sees the faults of strangers, would any evil come to him?",
    tamilUrai: "அயலார்களின் குற்றங்களைக் காண்பதைப் போலவே, ஒருவன் தனது குற்றங்களையும் காண இயன்றால், நிலைத்த இந்த உயிருக்கு எந்தத் தீமை வரும்?",
    altTranslation: "If we could see our own faults as we see another's wrong, What evil ever could to us belong? — Pope"
  },

  // CHAPTER 20 — Not Speaking Useless Words
  {
    num: 191, chapter: 20,
    tamil: "பல்லார் முனியப் பயனில சொல்லுவான்\nஎல்லாரும் எள்ளப் படும்.",
    transliteration: "Pallār muṉiyap payaṉila colluvāṉ\nEllārum eḷḷap paṭum.",
    english: "He who speaks useless words that annoy many is despised by all.",
    tamilUrai: "பலரும் சலிக்கும் வகையில் பயனற்ற சொற்களைப் பேசுபவன், அனைவராலும் இகழப்படுவான்.",
    altTranslation: "He who fatigues all with meaningless words spoken anew, Is scorned and despised by everyone in view. — Pope"
  },
  {
    num: 192, chapter: 20,
    tamil: "பயனில பல்லார்முன் சொல்லல் நயனில\nநட்டார்கண் செய்தலிற் றீது.",
    transliteration: "Payaṉila pallārmuṉ collal nayaṉila\nNaṭṭārkaṇ ceytaliṟ ṟītu.",
    english: "To speak useless words before many is worse than doing unjust deeds to friends.",
    tamilUrai: "பயனற்ற சொற்களைப் பலரின் முன்னிலையில் பேசுதல், நண்பர்களுக்குத் தீமை செய்வதைவிடக் கொடியது.",
    altTranslation: "To speak what's useless in the public eye Is worse than wronging friends with treachery. — Pope"
  },
  {
    num: 193, chapter: 20,
    tamil: "நயன்சாரா நன்மையின் நீக்கும் பயன்சாராப்\nபண்பில்சொல் பல்லா ரகத்து.",
    transliteration: "Nayaṉcārā naṉmaiyiṉ nīkkum payaṉcārāp\nPaṇpilcol pallā rakattu.",
    english: "Meaningless, ungracious talk in a crowd pushes away all chance of winning their goodwill.",
    tamilUrai: "பலரிடையே பேசப்படும் பண்பற்ற, பயனற்ற வார்த்தைகள், பேசுபவனை எல்லோரும் மதிக்கும் நற்பண்பையும் அவரிடமிருந்து நீக்கிவிடும்.",
    altTranslation: "Words void of kindness, without aim, when spoken in a crowd, Drive men from any good they held; turn friendship to a cloud. — Pope"
  },
  {
    num: 194, chapter: 20,
    tamil: "நயனிலன் என்பது சொல்லும் பயனில\nபாரித் துரைக்கும் உரை.",
    transliteration: "Nayaṉilaṉ eṉpatu collum payaṉila\nPārit turaikkum urai.",
    english: "The useless, elaborate speech a man delivers proclaims him a man without refinement.",
    tamilUrai: "பயன் இல்லாத சொற்களை நீண்டு நீட்டிப் பேசுகின்ற ஒருவனின் பேச்சு, அவன் நற்குணம் இல்லாதவன் என்பதை அவனே சொல்லிவிடும்.",
    altTranslation: "Pointless, wordy speech that lingers without aim Declares the speaker wanting in all refined frame. — Pope"
  },
  {
    num: 195, chapter: 20,
    tamil: "சீர்மை சிறப்பொடு நீங்கும் பயனில\nநீர்மை யுடையார் சொலின்.",
    transliteration: "Cīrmai ciṟappoṭu nīṅkum payaṉila\nNīrmai yuṭaiyār coliṉ.",
    english: "Dignity and distinction both abandon those of kindly nature who speak useless words.",
    tamilUrai: "இனிய பண்பு உடையவர்கள் பயனற்ற சொற்களைப் பேசத் தொடங்கினால், அவர்களின் சீர்மையும் சிறப்பும் அவர்களை விட்டு நீங்கி விடும்.",
    altTranslation: "From gentle souls who utter idle words, decay Of honour and distinction pass away. — Pope"
  },
  {
    num: 196, chapter: 20,
    tamil: "பயனில சொல்லாப் பனுவல் கொளினும்\nபயனில சொல்லாமை நன்று.",
    transliteration: "Payaṉila collāp paṉuval koḷiṉum\nPayaṉila collāmai naṉṟu.",
    english: "Even if one must learn many books, better is the habit of never speaking useless words.",
    tamilUrai: "பல நூல்களைக் கற்று, அவற்றில் பயன் உள்ள சொற்களை எடுத்துப் பேசுவதை விட, பயனற்ற சொற்களை எப்போதுமே பேசாமல் இருப்பதே சிறந்தது.",
    altTranslation: "Though much of learning lore one may contain, To guard the tongue from idle speech is gain. — Pope"
  },
  {
    num: 197, chapter: 20,
    tamil: "நயனில சொல்லினுஞ் சொல்லுக சான்றோர்\nபயனில சொல்லாமை நன்று.",
    transliteration: "Nayaṉila colliṉuñ colluka cāṉṟōr\nPayaṉila collāmai naṉṟu.",
    english: "The wise may sometimes speak unpleasant words, but it is better not to speak useless ones.",
    tamilUrai: "பயன் இல்லாத சொற்களைப் பேசுவதைவிட, இனிமையற்ற சொற்களையாவது பேசலாம் என்று சான்றோர் சொல்வர்; பயனற்ற சொற்களைப் பேசாதிருத்தலே சிறந்தது.",
    altTranslation: "Let sages, if they must, speak words unkind; But idle words ne'er let them frame or mind. — Pope"
  },
  {
    num: 198, chapter: 20,
    tamil: "அரும்பயன் ஆயும் அறிவினார் சொல்லார்\nபெரும்பயன் இல்லாத சொல்.",
    transliteration: "Arumpayaṉ āyum aṟiviṉār collār\nPerumpayaṉ illāta col.",
    english: "The wise, who seek rare benefit, do not speak words that yield no great result.",
    tamilUrai: "அரிய பயனை ஆராய்ந்துணர்ந்த அறிவுடையவர்கள், பெரிதும் பயன்படாத சொற்களை பேச மாட்டார்கள்.",
    altTranslation: "The wise, whose minds on rare rewards intent, Speak no words devoid of good event. — Pope"
  },
  {
    num: 199, chapter: 20,
    tamil: "பொருள்தீர்ந்த பொச்சாந்துஞ் சொல்லார் மருள்தீர்ந்த\nமாசறு காட்சி யவர்.",
    transliteration: "Poruḷtīrnta poccāntuñ collār maruḷtīrnta\nMācaṟu kāṭci yavar.",
    english: "Men of clear and stainless vision, free from error, never speak meaningless words even through forgetfulness.",
    tamilUrai: "மயக்கம் நீங்கிய, தூய்மையான அறிவுடையவர்கள், தவறியும் கூட பொருள் இல்லாத சொற்களைப் பேசமாட்டார்கள்.",
    altTranslation: "The unclouded eye of wisdom, bright and pure, Ne'er drops a meaningless word, forgetful or secure. — Pope"
  },
  {
    num: 200, chapter: 20,
    tamil: "சொல்லுக சொல்லிற் பயனுடைய சொல்லற்க\nசொல்லிற் பயனிலாச் சொல்.",
    transliteration: "Colluka colliṟ payaṉuṭaiya collaṟka\nColliṟ payaṉilāc col.",
    english: "If you speak, speak words of use; do not speak words that bring no benefit.",
    tamilUrai: "பேசுவதானால் பயன் உள்ள சொற்களையே பேசுக; பேசினாலும் பயன் இல்லாத சொற்களை ஒருபோதும் பேச வேண்டாம்.",
    altTranslation: "Speak words of worth, if speak thou must; speak not in vain — Speech without benefit is loss, not gain. — Pope"
  },

  // CHAPTER 21 — Dread of Evil Deeds
  {
    num: 201, chapter: 21,
    tamil: "தீவினையார் அஞ்சார் விழுமியார் அஞ்சுவர்\nதீவினை என்னும் செருக்கு.",
    transliteration: "Tīviṉaiyār añcār viḻumiyār añcuvar\nTīviṉai eṉṉum cerukku.",
    english: "The wicked feel no fear of evil deeds; the virtuous dread the very pride of committing them.",
    tamilUrai: "தீய செயல்களில் நாட்டம் உடையவர்கள் அதன் பயத்தை அறியமாட்டார்கள்; மேன்மையானவர்களோ தீமை செய்ய எழும் எண்ணத்தையே பெரும் குற்றமாக அஞ்சுவர்.",
    altTranslation: "Evildoers dread not sin; but men of worth Dread even the pride that tempts to sinful birth. — Pope"
  },
  {
    num: 202, chapter: 21,
    tamil: "தீயவை தீய பயத்தலால் தீயவை\nதீயினும் அஞ்சப் படும்.",
    transliteration: "Tīyavai tīya payattalāl tīyavai\nTīyiṉum añcap paṭum.",
    english: "Since evil deeds bring forth evil results, they are to be feared more than fire itself.",
    tamilUrai: "தீய செயல்கள் தீய விளைவுகளையே தருவதால், அவை தீயை விடவும் அச்சத்திற்கு உரியவை.",
    altTranslation: "Evil breeds evil; therefore evil, more than flame, Is to be shunned — its fruit is blame. — Pope"
  },
  {
    num: 203, chapter: 21,
    tamil: "அறிவினுள் எல்லாந் தலையென்ப தீய\nசெறுவார்க்கும் செய்யா விடல்.",
    transliteration: "Aṟiviṉuḷ ellān talaiyeṉpa tīya\nCeṟuvārkkum ceyyā viṭal.",
    english: "The highest of all wisdom is not to return evil even to those who have wronged you.",
    tamilUrai: "அறிவு என்னப்படுவவை எல்லாவற்றிலும் தலையாயது, தமக்குத் தீமை செய்தவர்களிடத்திலும் தீமையைச் செய்யாதிருத்தலே ஆகும்.",
    altTranslation: "The chief of wisdoms is refusal still To do ill e'en to those who work us ill. — Pope"
  },
  {
    num: 204, chapter: 21,
    tamil: "மறந்தும் பிறன்கேடு சூழற்க சூழின்\nஅறம்சூழும் சூழ்ந்தவன் கேடு.",
    transliteration: "Maṟantum piṟaṉkēṭu cūḻaṟka cūḻiṉ\nAṟamcūḻum cūḻntavaṉ kēṭu.",
    english: "Never plan harm to another, even in forgetfulness; if you do, virtue itself will plan your ruin.",
    tamilUrai: "மறந்தும் பிறருக்குத் தீமை செய்ய எண்ணாதே; எண்ணிவிட்டால், அறமே அந்த எண்ணம் கொண்டவனின் கேட்டைச் சிந்திக்கும்.",
    altTranslation: "Even in forgetful moods plot not another's woe; Virtue's self shall plot the plotter's overthrow. — Pope"
  },
  {
    num: 205, chapter: 21,
    tamil: "இலன் என்று தீயவை செய்யற்க செய்யின்\nஇலனாகும் மற்றும் பெயர்த்து.",
    transliteration: "Ilaṉ eṉṟu tīyavai ceyyaṟka ceyyiṉ\nIlaṉākum maṟṟum peyarttu.",
    english: "Do not commit evil deeds on the plea of poverty; to do so only makes poverty more certain.",
    tamilUrai: "\"நான் வறியவன்\" என்ற காரணத்தால் தீய செயல்களைச் செய்ய வேண்டாம்; செய்தால், மேலும் பெரிய வறுமை வந்து சேரும்.",
    altTranslation: "'I'm poor', say not, and wickedness commit; for thus To poverty deeper still you'll be committed. — Pope"
  },
  {
    num: 206, chapter: 21,
    tamil: "தீப்பால தான்பிறர்கண் செய்யற்க நோய்ப்பால\nதன்னை அடல்வேண்டா தான்.",
    transliteration: "Tīppāla tāṉpiṟarkaṇ ceyyaṟka nōyppāla\nTaṉṉai aṭalvēṇṭā tāṉ.",
    english: "Let no man do evil to others, if he would keep suffering from touching himself.",
    tamilUrai: "துன்பம் தன்னை அழிக்க வேண்டாம் என்று விரும்புபவன், தீய செயல்களைப் பிறர் மீது செய்ய வேண்டாம்.",
    altTranslation: "Do not toward others things that harmful be — Unless thou wish that grief should ruin thee. — Pope"
  },
  {
    num: 207, chapter: 21,
    tamil: "எனைப்பகை யுற்றாரும் உய்வர் வினைப்பகை\nவீயாது பின்சென்று அடும்.",
    transliteration: "Eṉaippakai yuṟṟārum uyvar viṉaippakai\nVīyātu piṉceṉṟu aṭum.",
    english: "One may escape from any human foe, but the enmity of one's evil deeds follows and destroys.",
    tamilUrai: "எந்தப் பகைவர் வந்தாலும் ஒருவர் தப்பிக்கலாம்; ஆனால் தான் செய்த தீவினை என்னும் பகை, இறுதிவரை தொடர்ந்து அவனை அழித்துவிடும்.",
    altTranslation: "From every foe a man may yet escape; sin's foe Pursues him close, and works his overthrow. — Pope"
  },
  {
    num: 208, chapter: 21,
    tamil: "தீயவை செய்தார் கெடுதல் நிழல்தன்னை\nவீயாது அடிஉறைந் தற்று.",
    transliteration: "Tīyavai ceytār keṭutal niḻaltaṉṉai\nVīyātu aṭiuṟain taṟṟu.",
    english: "The ruin of an evil-doer is as certain as a shadow clinging to his feet.",
    tamilUrai: "தீய செயல்களைச் செய்தவர்கள் கெடுதல் என்பது, ஒருவனை விடாது அவனது நிழல் பின்தொடர்வது போன்றது.",
    altTranslation: "The evildoer's ruin clings close behind him to the last, As shadow at his feet ne'er leaves till life has passed. — Pope"
  },
  {
    num: 209, chapter: 21,
    tamil: "தன்னைத்தான் காதலன் ஆயின் எனைத்தொன்றும்\nதுன்னற்க தீவினைப் பால்.",
    transliteration: "Taṉṉaittāṉ kātalaṉ āyiṉ eṉaittoṉṟum\nTuṉṉaṟka tīviṉaip pāl.",
    english: "If a man truly loves himself, let him come near no evil deed, however small.",
    tamilUrai: "தன்னையே தான் உண்மையாக விரும்புபவனாக இருந்தால், எவ்வளவு சிறிய தீயசெயலின் பக்கமும் ஒருவன் நெருங்கக் கூடாது.",
    altTranslation: "If thy love for self be true, Thy self keep far from every evil deed. — Pope"
  },
  {
    num: 210, chapter: 21,
    tamil: "அருங்கேடன் என்பது அறிக மருங்கோடித்\nதீவினை செய்யான் எனின்.",
    transliteration: "Aruṅkēṭaṉ eṉpatu aṟika maruṅkōṭit\nTīviṉai ceyyāṉ eṉiṉ.",
    english: "Know him as safe from harm who does not stray into the byways of evil deeds.",
    tamilUrai: "வழி தவறிப் பக்கம் போய் தீய செயல்களைச் செய்யாதவன், எந்தக் கேட்டினாலும் வருத்தப்படாதவன் என்பதை உறுதியாக அறிக.",
    altTranslation: "Safe from harm is he, let this be known, Who turns not side-paths evil deeds to own. — Pope"
  },

  // CHAPTER 22 — Duty to Society
  {
    num: 211, chapter: 22,
    tamil: "கைம்மாறு வேண்டா கடப்பாடு மாரிமாட்டு\nஎன் ஆற்றுங் கொல்லோ உலகு.",
    transliteration: "Kaimmāṟu vēṇṭā kaṭappāṭu mārimāṭṭu\nEṉ āṟṟuṅ kollō ulaku.",
    english: "Duty seeks no return, just as rain seeks none; what return can the world make it?",
    tamilUrai: "மழைக்குத் தக்க கைம்மாறு உலகம் எதைச் செய்ய முடியும்? அதுபோல, உதவும் கடமை பலனை எதிர்நோக்காதது.",
    altTranslation: "Duty seeks no recompense; like rain from cloudy skies, What aught the world repay? Man still upon its bounty lies. — Pope"
  },
  {
    num: 212, chapter: 22,
    tamil: "தாளாற்றித் தந்த பொருளெல்லாம் தக்கார்க்கு\nவேளாண்மை செய்தற் பொருட்டு.",
    transliteration: "Tāḷāṟṟit tanta poruḷellām takkārkku\nVēḷāṇmai ceytaṟ poruṭṭu.",
    english: "All the wealth that one earns by his own effort is meant for doing good to those who deserve.",
    tamilUrai: "முயற்சி செய்து ஈட்டிய செல்வங்கள் எல்லாம், தகுதியானவர்களுக்கு உதவி செய்வதற்கே ஆகும்.",
    altTranslation: "All wealth that's won by hand and toil is stored, To help the worthy and the needy board. — Pope"
  },
  {
    num: 213, chapter: 22,
    tamil: "புத்தே ளுலகத்தும் ஈண்டும் பெறலரிதே\nஒப்புரவின் நல்ல பிற.",
    transliteration: "Puttē ḷulakattum īṇṭum peṟalaritē\nOppuraviṉ nalla piṟa.",
    english: "Nothing better than the service of society can be found, either here or in the world of the gods.",
    tamilUrai: "சமூகத்திற்கு உதவி செய்தலைவிட மேலான நன்மை, இந்த உலகிலும் தேவலோகத்திலும் எளிதாகக் கிடைப்பது அரிது.",
    altTranslation: "Of all the virtues here or in the world of gods, Social kindness holds the chief of all rewards. — Pope"
  },
  {
    num: 214, chapter: 22,
    tamil: "ஒத்தது அறிவான் உயிர்வாழ்வான் மற்றையான்\nசெத்தாருள் வைக்கப் படும்.",
    transliteration: "Ottatu aṟivāṉ uyirvāḻvāṉ maṟṟaiyāṉ\nCettāruḷ vaikkap paṭum.",
    english: "He truly lives who knows his social duty; the rest are counted among the dead.",
    tamilUrai: "சமூகத்திற்கு தக்க உதவியை அறிந்து செய்பவனே உண்மையில் உயிரோடு வாழ்பவன்; மற்றவர்கள் இறந்தவர் வரிசையில் வைத்து எண்ணப்படுவர்.",
    altTranslation: "He only lives who knows the social bond; The rest are reckoned with the dead — no more beyond. — Pope"
  },
  {
    num: 215, chapter: 22,
    tamil: "ஊருணி நீர்நிறைந் தற்றே உலகவாம்\nபேரறி வாளன் திரு.",
    transliteration: "Ūruṇi nīrniṟain taṟṟē ulakavām\nPēraṟi vāḷaṉ tiru.",
    english: "The wealth of a wise man devoted to society is like a village tank filled with water.",
    tamilUrai: "ஊருக்குப் பயன்படும் பேரறிவாளியின் செல்வமோ, ஊருக்கே குடிநீர் தருகின்ற நிறைந்த ஊருணியைப் போன்றது.",
    altTranslation: "The wealth of him of widely loving mind Is as the village pool, brimful with waters kind. — Pope"
  },
  {
    num: 216, chapter: 22,
    tamil: "பயன்மரம் உள்ளூர்ப் பழுத்தற்றால் செல்வம்\nநயனுடை யான்கண் படின்.",
    transliteration: "Payaṉmaram uḷḷūrp paḻuttaṟṟāl celvam\nNayaṉuṭai yāṉkaṇ paṭiṉ.",
    english: "Wealth with a benevolent man is like a fruit-bearing tree ripening in the heart of a village.",
    tamilUrai: "நல்ல பண்பு உடையவரிடம் சேரும் செல்வம், ஊர் நடுவில் உள்ள பழமரம் பழங்களைத் தருவதைப் போன்றது.",
    altTranslation: "The wealth the noble-hearted gains is fruit-tree ripe, In midst of town, whose bounty all partake. — Pope"
  },
  {
    num: 217, chapter: 22,
    tamil: "மருந்தாகித் தப்பா மரத்தற்றால் செல்வம்\nபெருந்தகை யான்கண் படின்.",
    transliteration: "Maruntākit tappā marattaṟṟāl celvam\nPeruntakai yāṉkaṇ paṭiṉ.",
    english: "Wealth with a great-souled man is like a tree whose every part is a healing medicine.",
    tamilUrai: "பெருந்தன்மை உடையவரிடம் சேரும் செல்வம், எந்தப் பாகத்தையும் வீணாக்காமல், எல்லாமே மருந்தாகப் பயன்படும் மரத்தைப் போன்றது.",
    altTranslation: "The wealth of one of noble mind is as the healing tree Whose every part can yield some cure for misery. — Pope"
  },
  {
    num: 218, chapter: 22,
    tamil: "இடனில் பருவத்தும் ஒப்புரவிற்கு ஒல்கார்\nகடனறி காட்சி யவர்.",
    transliteration: "Iṭaṉil paruvattum oppuraviṟku olkār\nKaṭaṉaṟi kāṭci yavar.",
    english: "Those who know their duty do not slacken in social service, even in difficult times.",
    tamilUrai: "கடமை அறியும் அறிவினை உடையவர்கள், தமக்கு வசதி இல்லாத காலத்திலும் சமூகத்துக்குச் செய்ய வேண்டிய உதவியில் பின்வாங்க மாட்டார்கள்.",
    altTranslation: "In adverse times the knowing mind Does not in kindness fall behind. — Pope"
  },
  {
    num: 219, chapter: 22,
    tamil: "நயனுடையான் நல்கூர்ந்தானாதல் செயும்நீர\nசெய்யாது அமைகலா வாறு.",
    transliteration: "Nayaṉuṭaiyāṉ nalkūrntāṉātal ceyumnīra\nCeyyātu amaikalā vāṟu.",
    english: "When a benevolent man becomes poor, it means only that he cannot do all the good he longs to do.",
    tamilUrai: "நல்ல பண்பு உடையவன் வறியவன் ஆவது எது என்றால், பிறருக்கு உதவி செய்ய விரும்பினாலும் செய்ய முடியாமல் இருக்கும் அந்த நிலையே ஆகும்.",
    altTranslation: "The generous become poor, in this alone — They cannot do the good their hearts intone. — Pope"
  },
  {
    num: 220, chapter: 22,
    tamil: "ஒப்புரவி னால்வரும் கேடெனின் அஃதொருவன்\nவிற்றுக்கோள் தக்க துடைத்து.",
    transliteration: "Oppuravi ṉālvarum kēṭeṉiṉ aḵtoruvaṉ\nViṟṟukkōḷ takka tuṭaittu.",
    english: "If ruin should come from doing social good, it would be worth selling oneself to buy that ruin.",
    tamilUrai: "சமூகக் கடமையால் ஒருவனுக்கு கெடுதல் வருவதென்றால், அந்தக் கெடுதலை ஒருவன் தன்னையே விற்றேனும் வாங்கிக்கொள்ளத் தக்கது.",
    altTranslation: "Should ruin come from kindness done — 'twere worth our strife To buy that ruin with the purchase of our life. — Pope"
  },

  // CHAPTER 23 — Giving
  {
    num: 221, chapter: 23,
    tamil: "வறியார்க்கொன்று ஈவதே ஈகைமற் றெல்லாம்\nகுறியெதிர்ப்பை நீர துடைத்து.",
    transliteration: "Vaṟiyārkkoṉṟu īvatē īkaimaṟ ṟellām\nKuṟiyetirppai nīra tuṭaittu.",
    english: "True charity is giving to the poor; all else, though called giving, is giving with expectation of return.",
    tamilUrai: "வறியவர்க்கு ஒரு பொருள் கொடுப்பதே உண்மையான ஈகை; மற்ற கொடைகள் எல்லாம் பதிலாக ஏதேனும் எதிர்பார்க்கும் தன்மையைக் கொண்டவையே.",
    altTranslation: "Giving to poor is giving indeed; what else men bestow, Awaits return and gain — no true gift does it show. — Pope"
  },
  {
    num: 222, chapter: 23,
    tamil: "நல்லாறு எனினும் கொளல்தீது மேலுலகம்\nஇல்லெனினும் ஈதலே நன்று.",
    transliteration: "Nallāṟu eṉiṉum koḷaltītu mēlulakam\nIlleṉiṉum ītalē naṉṟu.",
    english: "Receiving is bad even if the path be pure; giving is good even if there is no heaven to gain.",
    tamilUrai: "நல்ல வழியில் பெற்றாலும் பிறரிடம் பெறுதல் குற்றமே; மேல் உலகம் இல்லையென்றாலும் ஈதலே நல்லதாகும்.",
    altTranslation: "Though gain be good, to take from others is evil; Though no heaven's reward, 'tis best to bestow and give. — Pope"
  },
  {
    num: 223, chapter: 23,
    tamil: "இலனென்னும் எவ்வம் உரையாமை ஈதல்\nகுலனுடையான் கண்ணே யுள.",
    transliteration: "Ilaṉeṉṉum evvam uraiyāmai ītal\nKulaṉuṭaiyāṉ kaṇṇē yuḷa.",
    english: "To give without saying 'I have nothing' belongs only to one of noble birth.",
    tamilUrai: "\"என்னிடம் செல்வம் இல்லை\" என்ற துன்பமான சொல்லைச் சொல்லாமல், இருப்பதைக் கொடுத்தல் நற்குடிப் பிறந்தவரிடமே காணப்படும்.",
    altTranslation: "Without a whine of 'I am poor', with bounty still to bestow — That's charity the man of noble birth knows how to show. — Pope"
  },
  {
    num: 224, chapter: 23,
    tamil: "இன்னாது இரக்கப் படுதல் இரந்தவர்\nஇன்முகம் காணும் அளவு.",
    transliteration: "Iṉṉātu irakkap paṭutal irantavar\nIṉmukam kāṇum aḷavu.",
    english: "To be begged of is painful — until one sees the happy face of him who receives.",
    tamilUrai: "பிச்சை கேட்பவரை எதிர்கொள்ளுதல் வருத்தம் தருவதே; ஆனால் அவர்க்கு கொடுத்து அவர்தம் மகிழ்ச்சி முகத்தைக் காணும் வரை மட்டுமே அந்த வருத்தம்.",
    altTranslation: "'Tis painful to be asked; but then comes joy, When the beggar's happy face removes alloy. — Pope"
  },
  {
    num: 225, chapter: 23,
    tamil: "ஆற்றுவார் ஆற்றல் பசிஆற்றல் அப்பசியை\nமாற்றுவார் ஆற்றலின் பின்.",
    transliteration: "Āṟṟuvār āṟṟal paciāṟṟal appaciyai\nMāṟṟuvār āṟṟaliṉ piṉ.",
    english: "Great is the power of ascetics to endure hunger; but greater is the power of those who relieve the hunger of others.",
    tamilUrai: "தவம் செய்பவரின் ஆற்றலாவது பசியைப் பொறுத்துக் கொள்வதே; ஆனால் பிறருடைய பசியை நீக்குபவரின் ஆற்றல் அதனினும் மேம்பட்டது.",
    altTranslation: "Great is the might of those who conquer hunger's pain; Greater the might of those who slay another's bane. — Pope"
  },

  // CHAPTER 23 — Giving (continues)
  {
    num: 226, chapter: 23,
    tamil: "அற்றார் அழிபசி தீர்த்தல் அஃதொருவன்\nபெற்றான் பொருள்வைப் புழி.",
    transliteration: "Aṟṟār aḻipaci tīrttal aḵtoruvaṉ\nPeṟṟāṉ poruḷvaip puḻi.",
    english: "Relieving the killing hunger of the destitute is the safest treasury to store one's wealth.",
    tamilUrai: "ஏழையாய் இருப்பவரின் கடும் பசியைத் தீர்த்தல், ஒருவன் தான் பெற்றுள்ள செல்வத்தை பாதுகாப்பாக வைக்கும் இடம் ஆகும்.",
    altTranslation: "To slay the hunger of the destitute, is to place one's wealth in safety's keeping. — Pope"
  },
  {
    num: 227, chapter: 23,
    tamil: "பாத்தூண் மரீஇ யவனைப் பசியென்னும்\nதீப்பிணி தீண்டல் அரிது.",
    transliteration: "Pāttūṇ marīi yavaṉaip pacieṉṉum\nTīppiṇi tīṇṭal aritu.",
    english: "Hunger, that cruel disease, will scarcely touch the man accustomed to sharing his food.",
    tamilUrai: "தன் உணவைப் பிறருக்குப் பகிர்ந்து உண்ணும் பழக்கம் கொண்டவனை, பசி என்னும் கொடிய நோய் எளிதில் தொடாது.",
    altTranslation: "Him who partakes the meal he gives to others ne'er shall smite The cruel pangs of hunger's dreadful might. — Pope"
  },
  {
    num: 228, chapter: 23,
    tamil: "ஈத்துவக்கும் இன்பம் அறியார்கொல் தாமுடைமை\nவைத்திழக்கும் வன்கண வர்.",
    transliteration: "Īttuvakkum iṉpam aṟiyārkol tāmuṭaimai\nVaittiḻakkum vaṉkaṇa var.",
    english: "Do those hard-hearted ones who hoard their wealth only to lose it not know the joy of giving and rejoicing?",
    tamilUrai: "கொடுக்காமல் தமது செல்வத்தைச் சேமித்து வைத்து இறுதியில் இழந்துபோகும் கடினமனத்தவர், கொடுத்துப் பிறர் உவகையைக் கண்டு மகிழும் இன்பத்தை அறிய மாட்டாரோ?",
    altTranslation: "Hoarders of wealth, who know not gift's delight, Must needs their treasure leave, losing life's highest height. — Pope"
  },
  {
    num: 229, chapter: 23,
    tamil: "இரத்தலின் இன்னாது மன்ற நிரப்பிய\nதாமே தமியர் உணல்.",
    transliteration: "Irattaliṉ iṉṉātu maṉṟa nirappiya\nTāmē tamiyar uṇal.",
    english: "To eat alone, hoarding all one's gains, is more painful than to beg.",
    tamilUrai: "பொருள்களை குவித்து வைத்துக்கொண்டு, பிறருக்குக் கொடுக்காமல் தனியாக உண்பதே பிச்சை எடுப்பதை விட துன்பம் நிறைந்ததாகும்.",
    altTranslation: "Worse than beggary, 'tis the lonely meal devoured alone — The food unshared by pitiless heart of stone. — Pope"
  },
  {
    num: 230, chapter: 23,
    tamil: "சாதலின் இன்னாத தில்லை இனிததூஉம்\nஈதல் இயையாக் கடை.",
    transliteration: "Cātaliṉ iṉṉāta tillai iṉitatūum\nĪtal iyaiyāk kaṭai.",
    english: "Nothing is more painful than death; yet even death is sweet when one cannot give to those who ask.",
    tamilUrai: "மரணத்தைவிட துன்பமானது எதுவுமில்லை; ஆனால், கொடுக்க வேண்டியவனாய் இருந்தும் கொடுக்க முடியாதநிலை வரும்போது அந்த மரணமே இனியதாகும்.",
    altTranslation: "Death's bitterness alone exceeds all other ills; yet sweet Is even death when giving hand is helpless in defeat. — Pope"
  },

  // CHAPTER 24 — Renown
  {
    num: 231, chapter: 24,
    tamil: "ஈதல் இசைபட வாழ்தல் அதுவல்லது\nஊதியம் இல்லை உயிர்க்கு.",
    transliteration: "Ītal icaipaṭa vāḻtal atuvallatu\nŪtiyam illai uyirkku.",
    english: "Give and live so that your fame may spread; no other gain is worth anything to the living.",
    tamilUrai: "கொடுத்து, புகழ் பெற்று வாழ்வதைவிட, உயிருக்குப் பயன்படுகிற வேறு ஒரு ஊதியம் இல்லை.",
    altTranslation: "Give, and with noble fame live life well-spent; No other gain avails the living existent. — Pope"
  },
  {
    num: 232, chapter: 24,
    tamil: "உரைப்பார் உரைப்பவை எல்லாம் இரப்பார்க்கொன்று\nஈவார்மேல் நிற்கும் புகழ்.",
    transliteration: "Uraippār uraippavai ellām irappārkkoṉṟu\nĪvārmēl niṟkum pukaḻ.",
    english: "Whatever men speak of in praise settles in the end upon those who give to the needy.",
    tamilUrai: "புகழ்ந்து பேசுபவர் பேசுவதெல்லாம், இரப்பவர்களுக்கு ஏதாவது ஈந்தவர்கள் மீதே சென்று தங்கும்.",
    altTranslation: "All eulogies that men bestow through speech Come home to those who succour those who beseech. — Pope"
  },
  {
    num: 233, chapter: 24,
    tamil: "ஒன்றா உலகத்து உயர்ந்த புகழல்லால்\nபொன்றாது நிற்பதொன்று இல்.",
    transliteration: "Oṉṟā ulakattu uyarnta pukaḻallāl\nPoṉṟātu niṟpatoṉṟu il.",
    english: "In this world, nothing stands unperishing except high and noble fame.",
    tamilUrai: "இந்த ஒப்பற்ற உலகத்தில், உயர்ந்த புகழைத் தவிர, அழியாமல் நிலைத்து நிற்பது வேறு எதுவும் இல்லை.",
    altTranslation: "In all this world, no thing abides undying save A glorious fame transcending e'en the grave. — Pope"
  },
  {
    num: 234, chapter: 24,
    tamil: "நிலவரை நீள்புகழ் ஆற்றின் புலவரைப்\nபோற்றாது புத்தேள் உலகு.",
    transliteration: "Nilavarai nīḷpukaḻ āṟṟiṉ pulavaraip\nPōṟṟātu puttēḷ ulaku.",
    english: "If one earns enduring fame on earth, the world of the gods will honor him above even its celestials.",
    tamilUrai: "இந்த நிலவுலகத்தில் நீடித்த புகழை ஒருவர் அடைந்தால், தேவலோகமும் தனது தேவர்களையே புறக்கணித்து அவரை போற்றும்.",
    altTranslation: "Earn thou the renown that fills earth's bound, and heaven Shall prize thee more than all its hosts eleven. — Pope"
  },
  {
    num: 235, chapter: 24,
    tamil: "நத்தம்போல் கேடும் உளதாகும் சாக்காடும்\nவித்தகர்க் கல்லால் அரிது.",
    transliteration: "Nattampōl kēṭum uḷatākum cākkāṭum\nVittakark kallāl aritu.",
    english: "To find glory even in decline, and immortality in death, is possible only to the truly wise.",
    tamilUrai: "வறுமையிலும் புகழுடன் வாழ்வதும், இறந்தாலும் புகழால் என்றும் வாழ்வதும் — உண்மையான ஆற்றல் படைத்த அறிவுடையோரிடமே இயலும்.",
    altTranslation: "Glory e'en in loss, and deathless life in death's own stride — Such gifts are rare, to wisdom's few confined. — Pope"
  },
  {
    num: 236, chapter: 24,
    tamil: "தோன்றின் புகழொடு தோன்றுக அஃதிலார்\nதோன்றலின் தோன்றாமை நன்று.",
    transliteration: "Tōṉṟiṉ pukaḻoṭu tōṉṟuka aḵtilār\nTōṉṟaliṉ tōṉṟāmai naṉṟu.",
    english: "If you must be born, be born with fame; if not, better not to be born at all.",
    tamilUrai: "தோன்றினால் புகழோடு தோன்றுக; புகழ் இல்லாமல் பிறப்பதைவிட பிறவாமல் இருப்பதே நல்லது.",
    altTranslation: "If thou art born, be born with glory bright; else not To be is better than to live a blotted jot. — Pope"
  },
  {
    num: 237, chapter: 24,
    tamil: "புகழ்பட வாழாதார் தந்நோவார் தம்மை\nஇகழ்வாரை நோவ தெவன்.",
    transliteration: "Pukaḻpaṭa vāḻātār tannōvār tammai\nIkaḻvārai nōva tevaṉ.",
    english: "Those who do not live with fame should blame themselves, not those who despise them.",
    tamilUrai: "புகழ் பெற வாழ முடியாதவர்கள், தம்மை இகழ்வோரை வருத்துவது ஏன்? குற்றம் தம்மிடமே என்று உணர வேண்டும்.",
    altTranslation: "If gloryless thy life, why grieve that men despise? Self-blame, not others' scorn, should in thee rise. — Pope"
  },
  {
    num: 238, chapter: 24,
    tamil: "வசையென்ப வையத்தார்க் கெல்லாம் இசையென்னும்\nஎச்சம் பெறாஅ விடின்.",
    transliteration: "Vacaiyeṉpa vaiyattārk kellām icaiyeṉṉum\nEccam peṟāa viṭiṉ.",
    english: "It is called disgrace for anyone in the world to fail to leave the legacy of renown.",
    tamilUrai: "புகழ் என்னும் நீங்காச் சொத்தை பெற்றுவிடாமல் போவதே, உலகத்தார் அனைவருக்கும் பழி என்று கூறப்படும்.",
    altTranslation: "Not to leave fame behind — that men call shame; On all alike rests this reproach of life unclaimed. — Pope"
  },
  {
    num: 239, chapter: 24,
    tamil: "வசையிலா வண்பயன் குன்றும் இசையிலா\nயாக்கை பொறுத்த நிலம்.",
    transliteration: "Vacailā vaṇpayaṉ kuṉṟum icaiyilā\nyākkai poṟutta nilam.",
    english: "The very land loses its fertility when it bears bodies without renown.",
    tamilUrai: "புகழ் இல்லாத உடல்களைச் சுமந்த பூமியே, குற்றமற்ற விளைச்சலின் சிறப்பைக் குறைத்துவிடும்.",
    altTranslation: "The earth that bears men glory-less grows poor in yield, As though her bounty to their worth had been sealed. — Pope"
  },
  {
    num: 240, chapter: 24,
    tamil: "வசையொழிய வாழ்வாரே வாழ்வார் இசையொழிய\nவாழ்வாரே வாழா தவர்.",
    transliteration: "Vacaiyoḻiya vāḻvārē vāḻvār icaiyoḻiya\nVāḻvārē vāḻā tavar.",
    english: "They truly live who live without blame; they are the dead who live without renown.",
    tamilUrai: "பழி இல்லாமல் வாழ்பவர்களே உண்மையில் வாழ்கின்றவர்; புகழ் இல்லாமல் வாழ்பவர்கள் வாழாதவர்களே.",
    altTranslation: "Who blameless live, they only truly live; Who fameless live, the living name they give in vain. — Pope"
  },

  // CHAPTER 25 — Benevolence
  {
    num: 241, chapter: 25,
    tamil: "அருட்செல்வம் செல்வத்துள் செல்வம் பொருட்செல்வம்\nபூரியார் கண்ணும் உள.",
    transliteration: "Aruṭcelvam celvattuḷ celvam poruṭcelvam\nPūriyār kaṇṇum uḷa.",
    english: "The wealth of benevolence is the truest wealth; material wealth may be found even among the base.",
    tamilUrai: "எல்லா வகையான செல்வங்களிலும் சிறந்த செல்வம் அருள் எனப்படும் அன்புச் செல்வமே; பொருட் செல்வமானது தாழ்ந்தவரிடத்திலும் காணப்படும்.",
    altTranslation: "Grace is wealth beyond all other wealth that men acquire, For wealth of gold to meanest men may yet aspire. — Pope"
  },
  {
    num: 242, chapter: 25,
    tamil: "நல்லாற்றாள் நாடி அருளாள்க பல்லாற்றால்\nதேரினும் அஃதே துணை.",
    transliteration: "Nallāṟṟāḷ nāṭi aruḷāḷka pallāṟṟāl\nTēriṉum aḵtē tuṇai.",
    english: "Seek the way of virtue and hold fast to compassion; by whatever path examined, compassion alone is a man's true ally.",
    tamilUrai: "நல்வழியில் ஆராய்ந்து, அருளுடனே ஒழுகவும்; எந்தெந்த வழியில் ஆராய்ந்தாலும் அதுவே சிறந்த துணையாக இருக்கும்.",
    altTranslation: "Seek the way of goodness, and let kindness guide thy feet; By all the ways thou searchest, that shall prove thy true retreat. — Pope"
  },
  {
    num: 243, chapter: 25,
    tamil: "அருள்சேர்ந்த நெஞ்சினார்க் கில்லை இருள்சேர்ந்த\nஇன்னா உலகம் புகல்.",
    transliteration: "Aruḷcērnta neñciṉārk killai iruḷcērnta\nIṉṉā ulakam pukal.",
    english: "Those whose hearts are full of grace shall not enter the darkened world of sorrow.",
    tamilUrai: "அருள் பொருந்திய மனத்தை உடையவர்களுக்கு, இருள் நிறைந்த துன்பமயமான உலகில் நுழையும் நிலை கிடையாது.",
    altTranslation: "To men of grace-filled soul, no entrance cruel Of that dim world of sorrow — never, ever can befall. — Pope"
  },
  {
    num: 244, chapter: 25,
    tamil: "மன்னுயிர் ஓம்பி அருளாள்வாற்கு இல்லென்ப\nதன்னுயிர் அஞ்சும் வினை.",
    transliteration: "Maṉṉuyir ōmpi aruḷāḷvāṟku illeṉpa\nTaṉṉuyir añcum viṉai.",
    english: "He who cherishes life and acts with kindness shall not do deeds that put his own soul in fear.",
    tamilUrai: "உயிர்களைக் காத்து அருளோடு வாழ்பவனுக்கு, தன் உயிர்க்கே துன்பம் விளையக்கூடிய செயல்கள் நிகழ்வதில்லை.",
    altTranslation: "Who cherishes life with love, needs never dread The deeds from which his soul in fear had fled. — Pope"
  },
  {
    num: 245, chapter: 25,
    tamil: "அல்லல் அருளாள்வார்க்கு இல்லை வளிவழங்கும்\nமல்லன்மா ஞாலம் கரி.",
    transliteration: "Allal aruḷāḷvārkku illai vaḷivaḻaṅkum\nMallaṉmā ñālam kari.",
    english: "The vast earth swept by the winds bears witness: sorrow does not come to the kind-hearted.",
    tamilUrai: "அருள் உடையவர்களுக்கு துன்பம் ஏற்படாது என்பதற்கு, காற்று வீசும் பெரிய இந்த மாபெரும் உலகமே சான்றாகும்.",
    altTranslation: "The kind shall find no woe — the wind-swept earth, In its vastness, stands as witness to this worth. — Pope"
  },
  {
    num: 246, chapter: 25,
    tamil: "பொருள்நீங்கிப் பொச்சாந்தார் என்பர் அருள்நீங்கி\nஅல்லவை செய்தொழுகு வார்.",
    transliteration: "Poruḷnīṅkip poccāntār eṉpar aruḷnīṅki\nAllavai ceytoḻuku vār.",
    english: "Those who forsake mercy and do unworthy deeds are said to have lost the true purpose of life.",
    tamilUrai: "அருளை விட்டு, அறம் இல்லாத செயல்களைச் செய்யும் ஒழுக்கத்தை உடையவர், வாழ்வின் உண்மைப் பொருளை மறந்து விட்டவர் என்று கூறப்படுவர்.",
    altTranslation: "They who forsake grace, and evil deeds pursue, Have lost life's purpose, forgotten the true. — Pope"
  },
  {
    num: 247, chapter: 25,
    tamil: "அருளில்லார்க்கு அவ்வுலகம் இல்லை பொருளில்லார்க்கு\nஇவ்வுலகம் இல்லாகி யாங்கு.",
    transliteration: "Aruḷillārkku avvulakam illai poruḷillārkku\nIvvulakam illāki yāṅku.",
    english: "The other world is not for the merciless, just as this world is not for the penniless.",
    tamilUrai: "பொருள் இல்லாதவர்க்கு இந்த உலகம் இல்லாமல் ஆவதைப் போல, அருள் இல்லாதவர்க்கு அந்த மேலுலகம் கிடைக்காது.",
    altTranslation: "As he who lacks earthly goods finds earth a closed refrain, So he who lacks mercy finds heaven closed to gain. — Pope"
  },
  {
    num: 248, chapter: 25,
    tamil: "பொருளற்றார் பூப்பர் ஒருகால் அருளற்றார்\nஅற்றார்மற் றாதல் அரிது.",
    transliteration: "Poruḷaṟṟār pūppar orukāl aruḷaṟṟār\nAṟṟārmaṟ ṟātal aritu.",
    english: "The poor may flourish again, but those who lose mercy can hardly be restored.",
    tamilUrai: "செல்வம் இழந்தவர்கள் மீண்டும் ஒருமுறை செல்வமுடையவராய் வாழலாம்; ஆனால் அருள் இழந்தவர்கள் மீண்டும் அதை அடைவது அரிது.",
    altTranslation: "The poor may yet regain their fortunes lost; the graceless heart Restores not to its former lofty part. — Pope"
  },
  {
    num: 249, chapter: 25,
    tamil: "தெருளாதான் மெய்ப்பொருள் கண்டற்றால் தேரின்\nஅருளாதான் செய்யும் அறம்.",
    transliteration: "Teruḷātāṉ meypporuḷ kaṇṭaṟṟāl tēriṉ\nAruḷātāṉ ceyyum aṟam.",
    english: "Charity done by one without mercy is like a fool claiming to have found ultimate truth.",
    tamilUrai: "அருள் இல்லாதவன் செய்யும் அறமானது, தெளிவு இல்லாதவன் உண்மைப் பொருளைக் கண்டடைந்ததாகக் கூறுவதற்கு ஒப்பாகும்.",
    altTranslation: "Examine: charity that flows from graceless breast Is like a fool's pretence of truth possessed. — Pope"
  },
  {
    num: 250, chapter: 25,
    tamil: "வலியார்முன் தன்னை நினைக்கதான் தன்னின்\nமெலியார்மேல் செல்லு மிடத்து.",
    transliteration: "Valiyārmuṉ taṉṉai niṉaikkatāṉ taṉṉiṉ\nMeliyārmēl cellu miṭattu.",
    english: "Before attacking the weak, let a man remember how he feels when faced with the strong.",
    tamilUrai: "தன்னைவிட வலிமை குறைந்தவர் மீது வன்முறை செய்யச் செல்லும்போது, தன்னைக் காட்டிலும் வலியவர் முன்னிலையில் தான் எப்படி நடக்கிறோம் என்பதை நினைத்துப் பார்க்க வேண்டும்.",
    altTranslation: "Ere against the weak you work your cruel will, Recall thy feeling when the mighty treat you ill. — Pope"
  },

  // CHAPTER 26 — Abstinence from Flesh
  {
    num: 251, chapter: 26,
    tamil: "தன்னூன் பெருக்கற்குத் தான்பிறிது ஊனுண்பான்\nஎங்ஙனம் ஆளும் அருள்.",
    transliteration: "Taṉṉūṉ perukkaṟkut tāṉpiṟitu ūṇuṇpāṉ\nEṅṅaṉam āḷum aruḷ.",
    english: "How can he be kind who eats the flesh of another creature to feed his own?",
    tamilUrai: "தன் உடலை வளர்ப்பதற்காக வேறு உயிரினங்களின் உடலை உணவாக்குபவன், எப்படி அருளைக் கடைப்பிடிப்பான்?",
    altTranslation: "How can he be kind who feeds his flesh with flesh Of other creatures slaughtered afresh? — Pope"
  },
  {
    num: 252, chapter: 26,
    tamil: "பொருளாட்சி போற்றாதார்க்கு இல்லை அருளாட்சி\nஆங்கில்லை ஊன்தின் பவர்க்கு.",
    transliteration: "Poruḷāṭci pōṟṟātārkku illai aruḷāṭci\nĀṅkillai ūṉtiṉ pavarkku.",
    english: "As wealth is not for him who does not guard it, so mercy is not for him who eats flesh.",
    tamilUrai: "செல்வத்தைப் பாதுகாக்கத் தெரியாதவர்க்கு செல்வம் இல்லையாதலுக்கு ஒப்ப, ஊன் உண்பவர்க்கு அருள் என்பதும் இல்லை.",
    altTranslation: "As wealth abides not with the careless, so mercy spurns The flesh-devourer at every turn. — Pope"
  },
  {
    num: 253, chapter: 26,
    tamil: "படைகொண்டார் நெஞ்சம்போல் நன்னூக்காது ஒன்றன்\nஉடல்சுவை உண்டார் மனம்.",
    transliteration: "Paṭaikoṇṭār neñcampōl naṉṉūkkātu oṉṟaṉ\nUṭalcuvai uṇṭār maṉam.",
    english: "The heart of him who relishes the taste of flesh grows hard, like the heart of one who wields a weapon.",
    tamilUrai: "ஆயுதம் ஏந்தியவனின் மனத்தைப் போல, பிற உயிரினத்தின் உடலைச் சுவையுடன் உண்பவனின் மனதிலும் நல்ல நினைவுகள் உதிக்காது.",
    altTranslation: "As weapons hardened hand makes hardened heart, So flesh enjoyed makes mind as dull and tart. — Pope"
  },
  {
    num: 254, chapter: 26,
    tamil: "அருளல்லது யாதெனில் கொல்லாமை கோறல்\nபொருளல்லது அவ்வூன் தினல்.",
    transliteration: "Aruḷallatu yāteṉil kollāmai kōṟal\nPoruḷallatu avvūṉ tiṉal.",
    english: "What is kindness? Not killing. What is cruelty? The eating of that slain flesh.",
    tamilUrai: "அருள் என்பது என்ன என்றால் — உயிர்களைக் கொல்லாமல் இருத்தலே; பொருள் அல்லாதது என்பது என்ன எனில் — அத்தகைய கொன்ற உயிரின் ஊனை உண்ணுதலே ஆகும்.",
    altTranslation: "What is grace? Not to kill. What is crime? To slay, And eat the flesh of creature slain that day. — Pope"
  },
  {
    num: 255, chapter: 26,
    tamil: "உண்ணாமை உள்ளது உயிர்நிலை ஊனுண்ண\nஅண்ணாத்தல் செய்யாது அளறு.",
    transliteration: "Uṇṇāmai uḷḷatu uyirnilai ūṇuṇṇa\nAṇṇāttal ceyyātu aḷaṟu.",
    english: "If men did not eat flesh, there would be no one slain; the world of hell would open no more.",
    tamilUrai: "உண்ணாமையால் உயிர்களின் நிலை நிலைக்கும்; ஊன் உண்ணும் பழக்கம் இருந்தால், நரகம் அதைப் பற்றாக் கருதாது, விட்டுவிடாது.",
    altTranslation: "In abstinence from flesh life's stability stands; The eater of flesh, hell clutches in her hands. — Pope"
  },
  {
    num: 256, chapter: 26,
    tamil: "தினற்பொருட்டால் கொல்லாது உலகெனின் யாரும்\nவிலைப்பொருட்டால் ஊன்றருவா ரில்.",
    transliteration: "Tiṉaṟporuṭṭāl kollātu ulakeṉiṉ yārum\nVilaipporuṭṭāl ūṉtaruvā ril.",
    english: "If people did not eat flesh, no one would kill for its sale.",
    tamilUrai: "உண்பதற்காக உலகத்தார் உயிர்களைக் கொல்லாது இருந்தால், விலைக்காக ஊனைத் தருபவர் யாரும் இருக்கமாட்டார்.",
    altTranslation: "If men for food would cease to slay the hapless brute, None would for gain the bleeding flesh dispute. — Pope"
  },
  {
    num: 257, chapter: 26,
    tamil: "உண்ணாமை வேண்டும் புலாஅல் பிறிதொன்றன்\nபுண்ணது உணர்வார்ப் பெறின்.",
    transliteration: "Uṇṇāmai vēṇṭum pulāal piṟitoṉṟaṉ\nPuṇṇatu uṇarvārp peṟiṉ.",
    english: "Those who understand that flesh is but the wound of another creature should shun it.",
    tamilUrai: "உடலின் ஊன் என்பது, மற்றொரு உயிரினத்தின் உடல் புண் என்பதை உணருகிறவர் அதை உண்ண விரும்ப மாட்டார்.",
    altTranslation: "When truly seen as wound of one that lived and died, Flesh becomes a thing from human tongue denied. — Pope"
  },
  {
    num: 258, chapter: 26,
    tamil: "செயிரின் தலைப்பிரிந்த காட்சியார் உண்ணார்\nஉயிரின் தலைப்பிரிந்த ஊன்.",
    transliteration: "Ceyiriṉ talaippirinta kāṭciyār uṇṇār\nUyiriṉ talaippirinta ūṉ.",
    english: "Those whose vision is free from blemish will not eat flesh parted from a slain life.",
    tamilUrai: "குற்றம் இல்லாத ஞான நோக்கு உள்ளவர்கள், உயிர் போனதால் விடப்பட்ட ஊனைச் சாப்பிட மாட்டார்கள்.",
    altTranslation: "Those whose vision flaw has never known Refuse to eat the flesh from life's own throne. — Pope"
  },
  {
    num: 259, chapter: 26,
    tamil: "அவிசொரிந் தாயிரம் வேட்டலின் ஒன்றன்\nஉயிர்செகுத்து உண்ணாமை நன்று.",
    transliteration: "Avicorin tāyiram vēṭṭaliṉ oṉṟaṉ\nUyirceguttu uṇṇāmai naṉṟu.",
    english: "Better than performing a thousand fire sacrifices is to abstain from destroying a single life for food.",
    tamilUrai: "ஆயிரம் வேள்விகள் செய்து அவிகளை ஒதுக்குவதைவிட, ஒரு உயிரைக் கொன்று உண்ணாதிருத்தல் மிகவும் நல்லது.",
    altTranslation: "Better than thousand fire-offerings spread of sacred rite, Not to slay and eat one living creature in its plight. — Pope"
  },
  {
    num: 260, chapter: 26,
    tamil: "கொல்லான் புலாலை மறுத்தானைக் கைகூப்பி\nஎல்லா உயிரும் தொழும்.",
    transliteration: "Kollāṉ pulālai maṟuttāṉaik kaikūppi\nEllā uyirum toḻum.",
    english: "All living beings will bow with folded hands to him who refuses to kill and rejects flesh.",
    tamilUrai: "எந்த உயிரையும் கொல்லாதவனாய், ஊனை உண்ண மறுத்தவனை, எல்லா உயிர்களும் கைகூப்பி வணங்கும்.",
    altTranslation: "Him who no life destroys, refusing flesh to eat, All living beings shall with folded hands entreat. — Pope"
  },

  // CHAPTER 27 — Penance
  {
    num: 261, chapter: 27,
    tamil: "உற்றநோய் நோன்றல் உயிர்க்குறுகண் செய்யாமை\nஅற்றே தவத்திற்கு உரு.",
    transliteration: "Uṟṟanōy nōṉṟal uyirkkuṟukaṇ ceyyāmai\nAṟṟē tavattiṟku uru.",
    english: "To bear one's own sorrows and never inflict pain on other lives — this is the true form of penance.",
    tamilUrai: "தன்மீது வந்த துன்பங்களைப் பொறுத்துக் கொண்டு, பிற உயிர்களுக்குத் துன்பம் செய்யாதிருத்தல் — இதுவே தவத்தின் உண்மையான வடிவம்.",
    altTranslation: "To bear thy sorrows, shun all creatures' pain to wreak — These two things are the form of penance to seek. — Pope"
  },
  {
    num: 262, chapter: 27,
    tamil: "தவமும் தவமுடையார்க்கு ஆகும் அதனை\nஅஃதிலார் மேற்கொள் வது.",
    transliteration: "Tavamum tavamuṭaiyārkku ākum ataṉai\nAḵtilār mēṟkoḷ vatu.",
    english: "Penance suits only those fit for it; in others, it is false and fruitless.",
    tamilUrai: "தவம் என்பது, தவம் செய்யும் பக்குவம் உடையவரிடத்திலே இயல்பாக நடக்கும்; பக்குவம் இல்லாதவர் அதை மேற்கொள்ள முயல்வது பயனற்றதாகும்.",
    altTranslation: "True penance is for those in whom 'tis born; Of others, it's an outward show forlorn. — Pope"
  },
  {
    num: 263, chapter: 27,
    tamil: "துறந்தார்க்குத் துப்புரவு வேண்டி மறந்தார்கொல்\nமற்றையவர் கள் கவற்றல்.",
    transliteration: "Tuṟantārkkut tuppuravu vēṇṭi maṟantārkol\nMaṟṟaiyavar kaḷ kavaṟṟal.",
    english: "Has the world forgotten its duty to cherish the ascetics, being too busy serving others?",
    tamilUrai: "துறவிகளுக்கு உதவ நினைத்து, இல்லறத்தவர் தம் மற்ற செலவுகளைக் குறைக்க மறந்துவிட்டார்களா?",
    altTranslation: "For the ascetic's sake did the rest forget the need Of other cares? Such devotion seems indeed. — Pope"
  },
  {
    num: 264, chapter: 27,
    tamil: "ஒன்னார்த் தெறலும் உவந்தாரை ஆக்கலும்\nஎண்ணின் தவத்தான் வரும்.",
    transliteration: "Oṉṉārt teṟalum uvantārai ākkalum\nEṇṇiṉ tavattāṉ varum.",
    english: "The power to punish foes and the power to bless friends both come from penance.",
    tamilUrai: "சிந்தித்துப் பார்த்தால், பகைவரை அழிக்கும் ஆற்றலும், நேசர்களை வளமாக்கும் ஆற்றலும் — தவத்தின் வலிமையால் ஏற்படுபவையே.",
    altTranslation: "The power to foe's destruction, or friend's increase, From penance springs when we the thought release. — Pope"
  },
  {
    num: 265, chapter: 27,
    tamil: "வேண்டிய வேண்டியாங் கெய்தலால் செய்தவம்\nஈண்டு முயலப் படும்.",
    transliteration: "Vēṇṭiya vēṇṭiyāṅ keytalāl ceytavam\nĪṇṭu muyalap paṭum.",
    english: "Since what is wished can be gained through penance, penance is earnestly pursued in this world.",
    tamilUrai: "விரும்பியவற்றை விரும்பியபடி அடைய முடியுமாதலால், செய்யும் தவம் இந்த உலகில் விருப்பத்துடன் முயற்சி செய்யப்படுகிறது.",
    altTranslation: "Since penance grants whate'er our hearts desire, On earth its works men earnestly aspire. — Pope"
  },
  {
    num: 266, chapter: 27,
    tamil: "தவஞ்செய்வார் தங்கருமம் செய்வார்மற் றல்லார்\nஅவஞ்செய்வார் ஆசையுட் பட்டு.",
    transliteration: "Tavañceyvār taṅkarumam ceyvārmaṟ ṟallār\nAvañceyvār ācaiyuṭ paṭṭu.",
    english: "Those who perform penance do their true work; others, ensnared by desire, do only useless deeds.",
    tamilUrai: "தவம் செய்பவர்களே தமக்குரிய உண்மையான கடமையைச் செய்கிறவர்கள்; மற்றவர்கள் ஆசையில் சிக்குண்டு வீணான செயல்களையே செய்கிறார்கள்.",
    altTranslation: "Penance is the penitent's own true task; others In desire's meshes vain pursuits that smother. — Pope"
  },
  {
    num: 267, chapter: 27,
    tamil: "சுடச்சுடரும் பொன்போல் ஒளிவிடும் துன்பஞ்\nசுடச்சுட நோற்கிற் பவர்க்கு.",
    transliteration: "Cuṭaccuṭarum poṉpōl oḷiviṭum tuṉpañ\nCuṭaccuṭa nōṟkiṟ pavarkku.",
    english: "The more it is burnt, the brighter gold shines; so the more suffering refines the true ascetic, the more he glows.",
    tamilUrai: "தீயில் சுடச்சுட ஒளிரும் பொன்னைப் போல, துன்பம் மேன்மேலும் வருத்த, தவம் செய்பவரின் உள்ளொளி மேன்மேலும் ஒளிர்ந்து விளங்கும்.",
    altTranslation: "As gold refined and burnished more doth brightly glow, So penance, more and more endured, makes wisdom show. — Pope"
  },
  {
    num: 268, chapter: 27,
    tamil: "தன்னுயிர் தான்அறப் பெற்றானை ஏனைய\nமன்னுயி ரெல்லாம் தொழும்.",
    transliteration: "Taṉṉuyir tāṉaṟap peṟṟāṉai ēṉaiya\nMaṉṉuyi rellām toḻum.",
    english: "Him who has mastered his own self, all living beings will worship.",
    tamilUrai: "தன் ஆசைகளை முழுவதுமாய் அடக்கி, தன்னை தானே வென்றவனை, மற்ற எல்லா உயிர்களும் வணங்கும்.",
    altTranslation: "Who self of self has made quite conquest, him The worlds of living beings crowd to hymn. — Pope"
  },
  {
    num: 269, chapter: 27,
    tamil: "கூற்றம் குதித்தலும் கைகூடும் நோற்றலின்\nஆற்றல் தலைப்பட் டவர்க்கு.",
    transliteration: "Kūṟṟam kutittalum kaikūṭum nōṟṟaliṉ\nĀṟṟal talaippaṭ ṭavarkku.",
    english: "Even conquering death itself becomes possible for him who has attained the power of penance.",
    tamilUrai: "தவத்தின் பெரு ஆற்றலைப் பெற்றவர்களுக்கு, எமனை வென்று மீறுவது கூட எளிதாகிவிடும்.",
    altTranslation: "E'en death, that comes with sudden sweep, may they defy, Who have attained the might of penance lifted high. — Pope"
  },
  {
    num: 270, chapter: 27,
    tamil: "இலர்பல ராகிய காரணம் நோற்பார்\nசிலர்பலர் நோலா தவர்.",
    transliteration: "Ilarpala rākiya kāraṇam nōṟpār\nCilarpalar nōlā tavar.",
    english: "The world has few rich and many poor because few practise penance and many do not.",
    tamilUrai: "தவம் செய்கிறவர்கள் சிலரே; தவம் செய்யாதவர்கள் பலராய் இருப்பதுதான், பலரும் செல்வம் இல்லாதவராய் இருப்பதற்கான காரணம்.",
    altTranslation: "Why are the many poor, the few so rich? Because Few practise penance, many flout its laws. — Pope"
  },

  // CHAPTER 28 — Inconsistent Conduct
  {
    num: 271, chapter: 28,
    tamil: "வஞ்ச மனத்தான் படிற்றொழுக்கம் பூதங்கள்\nஐந்தும் அகத்தே நகும்.",
    transliteration: "Vañca maṉattāṉ paṭiṟṟoḻukkam pūtaṅkaḷ\nAintum akattē nakum.",
    english: "The five elements within him laugh at the deceitful conduct of the treacherous-minded.",
    tamilUrai: "வஞ்சக மனம் கொண்டவனின் போலியான ஒழுக்கத்தை, அவன் உடலிலேயே உள்ள ஐம்பூதங்கள் (மண், நீர், தீ, காற்று, ஆகாயம்) ஏளனம் செய்யும்.",
    altTranslation: "The very elements within him laugh to see The false-souled man's hypocrisy. — Pope"
  },
  {
    num: 272, chapter: 28,
    tamil: "வானுயர் தோற்றம் எவன்செய்யும் தன்நெஞ்சம்\nதான்அறி குற்றப் படின்.",
    transliteration: "Vāṉuyar tōṟṟam evaṉceyyum taṉneñcam\nTāṉaṟi kuṟṟap paṭiṉ.",
    english: "Of what use is an outward show as lofty as the sky, if one's own heart is guilty of wrongdoing?",
    tamilUrai: "ஒருவனின் மனமே குற்றம் செய்திருப்பதை உணர்ந்திருக்கும் போது, வானளவு உயர்ந்த துறவுக்கோலத்தை அவன் வெளிக்காட்டினாலும் என்ன பயன்?",
    altTranslation: "Though outward show be lofty as the sky, What use, when conscience knows of wrong whereby? — Pope"
  },
  {
    num: 273, chapter: 28,
    tamil: "வலியில் நிலைமையான் வல்லுருவம் பெற்றம்\nபுலியின்தோல் போர்த்துமேய்ந் தற்று.",
    transliteration: "Valiyil nilaimaiyāṉ valluruvam peṟṟam\nPuliyiṉtōl pōrttumēyn taṟṟu.",
    english: "A weak man wearing the guise of the strong is like a cow grazing clad in a tiger's skin.",
    tamilUrai: "வலிமை இல்லாதவன் வலிமையான உருவத்தை வெளிக்காட்டுவது — புலியின் தோலைப் போர்த்திக் கொண்டு பசு மேய்வதைப் போன்றது.",
    altTranslation: "The weak who wear the garb of mighty men, — 'tis same As a cow that roams clad in a tiger's frame. — Pope"
  },
  {
    num: 274, chapter: 28,
    tamil: "தவமறைந்து அல்லவை செய்தல் புதல்மறைந்து\nவேட்டுவன் புள்சிமிழ்த் தற்று.",
    transliteration: "Tavamaṟaintu allavai ceytal putalmaṟaintu\nVēṭṭuvaṉ puḷcimiḻt taṟṟu.",
    english: "To commit wrongs while hiding behind the garb of penance is like a hunter hiding in a bush to snare a bird.",
    tamilUrai: "துறவியின் உருவில் மறைந்துகொண்டு அறம் அல்லாத செயல்களைச் செய்வது, புதர்க்காட்டில் ஒளிந்திருந்து பறவையைப் பிடிக்கும் வேட்டைக்காரனின் செயலுக்கு ஒப்பாகும்.",
    altTranslation: "Hiding in garb of sage, to do ill deeds Is like a hunter crouched amid the weeds. — Pope"
  },
  {
    num: 275, chapter: 28,
    tamil: "பற்றற்றேம் என்பார் படிற்றொழுக்கம் எற்றெற்றென்று\nஏதம் பலவும் தரும்.",
    transliteration: "Paṟṟaṟṟēm eṉpār paṭiṟṟoḻukkam eṟṟeṟṟeṉṟu\nĒtam palavum tarum.",
    english: "The false conduct of those who profess to have renounced all will bring many griefs of 'what have I done?'",
    tamilUrai: "\"நாங்கள் பற்றை விட்டவர்கள்\" என்று புறத்தே காட்டுபவரின் வஞ்சக ஒழுக்கம், பின்னர் \"என்ன செய்துவிட்டேன்\" என்று வருந்தும் பல துன்பங்களைத் தரும்.",
    altTranslation: "They who cry, 'I am free of bonds!' with conduct false, Reap many griefs of bitter, whispered 'alas!' — Pope"
  },
  {
    num: 276, chapter: 28,
    tamil: "நெஞ்சின் துறவார் துறந்தார்போல் வஞ்சித்து\nவாழ்வாரின் வன்கணார் இல்.",
    transliteration: "Neñciṉ tuṟavār tuṟantārpōl vañcittu\nVāḻvāriṉ vaṉkaṇār il.",
    english: "There are none more cruel than those who live by pretending to be ascetics while not renouncing in their hearts.",
    tamilUrai: "உள்ளத்தால் துறவு கொள்ளாமல், வெளியில் துறவியைப் போல நடிக்கும் வஞ்சகர்களைப் போல கொடியவர் வேறு யாரும் இல்லை.",
    altTranslation: "None harder-hearted than those who, in soul unfree, Play the renouncer's part in guise of sanctity. — Pope"
  },
  {
    num: 277, chapter: 28,
    tamil: "புறங்குன்றி கண்டனைய ரேனும் அகங்குன்றி\nமூக்கிற் கரியாருடைத்து.",
    transliteration: "Puṟaṅkuṉṟi kaṇṭaṉaiya rēṉum akaṅkuṉṟi\nMūkkiṟ kariyāruṭaittu.",
    english: "Some look red-bright like the kunri seed outside, but are black within like its dark tip.",
    tamilUrai: "குன்றி மணியின் சிவந்த வெளி நிறம் போல வெளியில் புனிதராகக் காட்சி அளிப்பினும், உள்ளுக்குள் அந்த மணியின் கருப்பு நுனி போல தீமை உடையவர்களும் உலகில் உள்ளனர்.",
    altTranslation: "As kunri bright without, with black tip hidden low, Are those who seem as saints but inward evil show. — Pope"
  },
  {
    num: 278, chapter: 28,
    tamil: "மனத்தது மாசாக மாண்டார்நீ ராடி\nமறைந்தொழுகு மாந்தர் பலர்.",
    transliteration: "Maṉattatu mācāka māṇṭārnī rāṭi\nMaṟaintoḻuku māntar palar.",
    english: "Many a man, with filth in his heart, bathes in holy waters and hides his sins under the garb of holiness.",
    tamilUrai: "மனத்தில் மாசு நிறைந்தபோதும், புனித நீர்த் துறைகளில் நீராடி, அந்தச் செயலை மறைவாய் மேற்கொண்டு வாழும் பலர் இவ்வுலகில் உளர்.",
    altTranslation: "Many there are, with filth within, yet bathe in waters pure, And with the seemly guise their hidden sins endure. — Pope"
  },
  {
    num: 279, chapter: 28,
    tamil: "கணைகொடிது யாழ்கோடு செவ்விதுஆங் கன்ன\nவினைபடு பாலால் கொளல்.",
    transliteration: "Kaṇaikoṭitu yāḻkōṭu cevvitutuāṅ kaṉṉa\nViṉaipaṭu pālāl koḷal.",
    english: "The arrow is straight but cruel; the lute is bent but sweet — judge men too by the outcome of their deeds.",
    tamilUrai: "அம்பு நேராக இருந்தாலும் கொடுமை செய்கிறது; யாழின் தண்டு வளைந்தாலும் இனிமை தருகிறது — அதுபோல, ஒருவரின் உண்மையான இயல்பை அவரது செயல்களின் விளைவு கொண்டே அறிய வேண்டும்.",
    altTranslation: "The arrow's straight but slays; the lute is curved but charms; So judge of men by what their actions frame. — Pope"
  },
  {
    num: 280, chapter: 28,
    tamil: "மழித்தலும் நீட்டலும் வேண்டா உலகம்\nபழித்தது ஒழித்து விடின்.",
    transliteration: "Maḻittalum nīṭṭalum vēṇṭā ulakam\npaḻittatu oḻittu viṭiṉ.",
    english: "If one gives up what the world considers blame-worthy, there is no need to shave the head or wear matted locks.",
    tamilUrai: "உலகம் குற்றம் எனக் கருதுவதைவிட்டு விட்டால், தலையை மொட்டை அடித்துக்கொள்ளவோ சடையாக வளர்க்கவோ வேண்டியதில்லை.",
    altTranslation: "No need of shaven head nor matted locks of hair, If evil deeds the world condemns you truly spare. — Pope"
  },

  // CHAPTER 29 — The Absence of Fraud
  {
    num: 281, chapter: 29,
    tamil: "எள்ளாமை வேண்டுவான் என்பான் எனைத்தொன்றும்\nகள்ளாமை காக்கதன் நெஞ்சு.",
    transliteration: "Eḷḷāmai vēṇṭuvāṉ eṉpāṉ eṉaittoṉṟum\nKaḷḷāmai kākkataṉ neñcu.",
    english: "He who would not be despised must guard his heart from even the smallest thought of theft.",
    tamilUrai: "பிறரால் இகழப்பட வேண்டாம் என்று விரும்புபவன், பிறருடைய பொருள்களைத் திருட எண்ணும் எண்ணம் சிறிது கூட மனதில் உதிக்காமல் பாதுகாக்க வேண்டும்.",
    altTranslation: "Who covets not the scorn of men must guard his mind From every smallest theft of any kind. — Pope"
  },
  {
    num: 282, chapter: 29,
    tamil: "உள்ளத்தால் உள்ளலும் தீதே பிறன்பொருளைக்\nகள்ளத்தால் கள்வேம் எனல்.",
    transliteration: "Uḷḷattāl uḷḷalum tītē piṟaṉporuḷaik\nKaḷḷattāl kaḷvēm eṉal.",
    english: "Even to think in one's heart of stealing another's wealth by stealth is an evil.",
    tamilUrai: "பிறரின் பொருளை ஏமாற்றி கவர்ந்து கொள்ள நினைப்பது, வெறும் எண்ணமாக இருந்தாலும், அது தீமையே ஆகும்.",
    altTranslation: "Evil, e'en in thought, to covet stealthily What doth to others by right belong. — Pope"
  },
  {
    num: 283, chapter: 29,
    tamil: "களவினா லாகிய ஆக்கம் அளவிறந்து\nஆவது போலக் கெடும்.",
    transliteration: "Kaḷaviṉā lākiya ākkam aḷaviṟantu\nĀvatu pōlak keṭum.",
    english: "The wealth gained by fraud may seem to grow without measure, but in the end it perishes utterly.",
    tamilUrai: "திருட்டின் மூலம் பெற்ற செல்வம், அளவில்லாமல் பெருகுவது போலத் தோன்றினாலும், இறுதியில் முற்றிலும் அழிந்துவிடும்.",
    altTranslation: "What's won by fraud grows vast to outward view — Yet ruin stalks its path, its ending true. — Pope"
  },
  {
    num: 284, chapter: 29,
    tamil: "களவின்கண் கன்றிய காதல் விளைவின்கண்\nவீயா விழுமம் தரும்.",
    transliteration: "Kaḷaviṉkaṇ kaṉṟiya kātal viḷaiviṉkaṇ\nVīyā viḻumam tarum.",
    english: "The thirsting love of stealing yields, in its fruit, unending sorrow.",
    tamilUrai: "களவு செய்வதில் வேட்கை மிகுந்த ஆசை, அதன் முடிவில் அழியாத பேரிடர்களைத் தரும்.",
    altTranslation: "The hot desire for theft that grows and grows Yields in the end the undying woes. — Pope"
  },
  {
    num: 285, chapter: 29,
    tamil: "அருள்கருதி அன்புடைய ராதல் பொருள்கருதிப்\nபொச்சாப்புப் பார்ப்பார்கண் இல்.",
    transliteration: "Aruḷkaruti aṉpuṭaiya rātal poruḷkarutip\nPoccāppup pārppārkaṇ il.",
    english: "Love and mercy are not found in those who wait to seize another's wealth in an unguarded moment.",
    tamilUrai: "மற்றவர்களின் பொருளை அவர்களது கவனக்குறைவை எதிர்பார்த்து சேர்க்க நினைக்கும் கீழோரிடத்தில், அருளும் அன்பும் கிடையாது.",
    altTranslation: "No mercy, no affection, dwells in those who stand, In watchful wait to snatch another's gold from hand. — Pope"
  },
  {
    num: 286, chapter: 29,
    tamil: "அளவின்கண் நின்றொழுகல் ஆற்றார் களவின்கண்\nகன்றிய காத லவர்.",
    transliteration: "Aḷaviṉkaṇ niṉṟoḻukal āṟṟār kaḷaviṉkaṇ\nKaṉṟiya kāta lavar.",
    english: "Those inflamed with the passion for stealing cannot live within the bounds of moderation.",
    tamilUrai: "களவு செய்வதில் மிகுந்த ஆசை கொண்டவர்கள், வாழ்வின் அளவு நிலையில் நிற்கும் ஒழுக்கத்தை மேற்கொள்ள இயலாதவராய் உள்ளனர்.",
    altTranslation: "Those fired with passion for dishonest gain Can ne'er within life's measured bounds remain. — Pope"
  },
  {
    num: 287, chapter: 29,
    tamil: "களவென்னும் காரறி வாண்மை அளவென்னும்\nஆற்றல் புரிந்தார்கண் இல்.",
    transliteration: "Kaḷaveṉṉum kāraṟi vāṇmai aḷaveṉṉum\nĀṟṟal purintārkaṇ il.",
    english: "The dark cunning called theft is not found in those who practise the strength of moderation.",
    tamilUrai: "அளவு நிலை என்னும் ஆற்றலைக் கடைப்பிடித்தவர்களிடத்தில், களவு எனப்படும் இருண்ட அறிவுத் திறமை கிடையாது.",
    altTranslation: "The darkened skill of theft has no abode In those who hold to moderation's code. — Pope"
  },
  {
    num: 288, chapter: 29,
    tamil: "அளவறிந்தார் நெஞ்சத்து அறம்போல நிற்கும்\nகளவறிந்தார் நெஞ்சில் கரவு.",
    transliteration: "Aḷavaṟintār neñcattu aṟampōla niṟkum\nKaḷavaṟintār neñcil karavu.",
    english: "As virtue stands firm in the hearts of the moderate, so does treachery abide in the hearts of thieves.",
    tamilUrai: "அளவு நிலை அறிந்தவர் மனத்தில் அறம் எவ்வாறு நிலைத்து இருக்குமோ, அதேபோல, களவு அறிந்தவர் மனத்தில் வஞ்சனை நிலைத்திருக்கும்.",
    altTranslation: "In moderate minds, as virtue stands on guard, So in the thief's, deceit stands fast and hard. — Pope"
  },
  {
    num: 289, chapter: 29,
    tamil: "அளவல்ல செய்தாங்கே வீவர் களவல்ல\nமற்றைய தேற்றா தவர்.",
    transliteration: "Aḷavalla ceytāṅkē vīvar kaḷavalla\nMaṟṟaiya tēṟṟā tavar.",
    english: "Those who know nothing save theft shall perish on the spot by their own unrestrained deeds.",
    tamilUrai: "களவு செய்வதைத் தவிர மற்ற நெறிகளை அறியாதவர்கள், தம் அளவுக் கடந்த தீய செயல்களாலேயே உடனே அழிந்து போவர்.",
    altTranslation: "Those who but theft have learned, all else unknown, Perish at once by sins they've called their own. — Pope"
  },
  {
    num: 290, chapter: 29,
    tamil: "கள்வார்க்குத் தள்ளும் உயிர்நிலை கள்வார்க்குத்\nதள்ளாது புத்தே ளுளகு.",
    transliteration: "Kaḷvārkkut taḷḷum uyirnilai kaḷvārkkut\nTaḷḷātu puttē ḷulaku.",
    english: "Thieves lose even their own lives; while those who are not thieves attain the world of the gods.",
    tamilUrai: "திருடிக்கொள்பவர்களிடமிருந்து உயிர்கூடவும் விலகிச் சென்றுவிடும்; திருடாமல் நேரான ஒழுக்கத்துடன் வாழ்பவர்களை தேவலோகமும் விட்டு விலகாது.",
    altTranslation: "Even life itself abandons men of theft; the gods Reject them not, who follow honest rules. — Pope"
  },

  // CHAPTER 30 — Veracity
  {
    num: 291, chapter: 30,
    tamil: "வாய்மை எனப்படுவது யாதெனின் யாதொன்றும்\nதீமை இலாத சொலல்.",
    transliteration: "Vāymai eṉappaṭuvatu yāteṉiṉ yātoṉṟum\nTīmai ilāta colal.",
    english: "What is called truth? It is to speak words that bring no harm to any living being.",
    tamilUrai: "வாய்மை என்று கூறப்படுவது யாது எனில் — எந்த உயிருக்கும் தீமை விளைவிக்காத சொற்களைச் சொல்லுதலே ஆகும்.",
    altTranslation: "What is truth? 'Tis speaking words that hold Nothing of harm to any soul in the world. — Pope"
  },
  {
    num: 292, chapter: 30,
    tamil: "பொய்ம்மையும் வாய்மை யிடத்த புரைதீர்ந்த\nநன்மை பயக்கும் எனின்.",
    transliteration: "Poymmaiyum vāymai yiṭatta puraitīrnta\nNaṉmai payakkum eṉiṉ.",
    english: "Even a lie has the character of truth, if it yields unstained good.",
    tamilUrai: "குற்றமற்ற நன்மையை அது விளைவிக்கும் என்றால், பொய்யும் கூட வாய்மையின் தன்மை கொண்டதேயாகும்.",
    altTranslation: "Even falsehood bears the stamp of truth, if good Unstained and blameless thence results shall. — Pope"
  },
  {
    num: 293, chapter: 30,
    tamil: "தன்நெஞ் சறிவது பொய்யற்க பொய்த்தபின்\nதன்நெஞ்சே தன்னைச் சுடும்.",
    transliteration: "Taṉneñ caṟivatu poyyaṟka poyttapiṉ\nTaṉneñcē taṉṉaic cuṭum.",
    english: "Do not speak falsehood against what your own heart knows; once spoken, that very heart will scorch you.",
    tamilUrai: "தன் மனமே உண்மை என அறிந்துகொண்டிருப்பதை மாற்றி, பொய் சொல்ல வேண்டாம்; பொய் சொன்ன பிறகு, அந்த மனமே பொய்யனைத் தானே சுடும்.",
    altTranslation: "Lie not against what thou in thy heart dost know; That heart shall scorch thee if thou do so. — Pope"
  },
  {
    num: 294, chapter: 30,
    tamil: "உள்ளத்தாற் பொய்யா தொழுகின் உலகத்தார்\nஉள்ளத்து ளெல்லாம் உளன்.",
    transliteration: "Uḷḷattāṟ poyyā toḻukiṉ ulakattār\nUḷḷattu ḷellām uḷaṉ.",
    english: "He who lives without falsehood in his heart will dwell in the hearts of all the world.",
    tamilUrai: "உள்ளத்தால் பொய் செய்யாமல் நேர்மையாக வாழும் ஒருவன், உலகத்தார் அனைவரின் உள்ளங்களிலும் நிலைத்து இருப்பான்.",
    altTranslation: "Who lives with heart from every falsehood free, In all the hearts of all men dwells continually. — Pope"
  },
  {
    num: 295, chapter: 30,
    tamil: "மனத்தொடு வாய்மை மொழியின் தவத்தொடு\nதானஞ்செய் வாரின் தலை.",
    transliteration: "Maṉattoṭu vāymai moḻiyiṉ tavattoṭu\nTāṉañcey vāriṉ talai.",
    english: "Whoever speaks truth from his heart stands above those who give alms and perform penance.",
    tamilUrai: "ஒருவன் தன் மனதோடு ஒத்து, வாய்மையையே பேசினால், தவம், தானம் ஆகியவற்றைச் செய்பவர்கள் அனைவரையும்விட அவனே மேலானவன்.",
    altTranslation: "Who truth from heart sincere in words expresses, Ranks higher than those who penance and gift profess. — Pope"
  },
  {
    num: 296, chapter: 30,
    tamil: "பொய்யாமை அன்ன புகழில்லை எய்யாமை\nஎல்லா அறமும் தரும்.",
    transliteration: "Poyyāmai aṉṉa pukaḻillai eyyāmai\nEllā aṟamum tarum.",
    english: "No fame equals the virtue of truthfulness; without effort, it confers every other virtue.",
    tamilUrai: "பொய் சொல்லாத வாய்மையைப் போன்ற புகழ் வேறு எதுவும் இல்லை; எளிதில் உழைப்பின்றி எல்லா நற்பண்புகளையும் அது தரும்.",
    altTranslation: "No glory equals that of truthful speech, that brings All virtues, labourless, to its possessor's prize. — Pope"
  },
  {
    num: 297, chapter: 30,
    tamil: "பொய்யாமை பொய்யாமை ஆற்றின் அறம்பிற\nசெய்யாமை செய்யாமை நன்று.",
    transliteration: "Poyyāmai poyyāmai āṟṟiṉ aṟampiṟa\nCeyyāmai ceyyāmai naṉṟu.",
    english: "If a man will practice truthfulness truly, it is well even if he does not practice other virtues.",
    tamilUrai: "ஒருவன் பொய் சொல்லாமையை உண்மையாகவே கடைப்பிடித்தால், அவன் பிற அறங்களைச் செய்யாவிட்டாலும் அது நல்லதாகும்.",
    altTranslation: "If truth thou practise, truly true in deed, Though other virtue fail, thy soul is freed. — Pope"
  },
  {
    num: 298, chapter: 30,
    tamil: "புறந்தூய்மை நீரான் அமையும் அகந்தூய்மை\nவாய்மையால் காணப் படும்.",
    transliteration: "Puṟantūymai nīrāṉ amaiyum akantūymai\nVāymaiyāl kāṇap paṭum.",
    english: "Outward cleanliness is gained by water; inner purity is seen only through truthfulness.",
    tamilUrai: "புறத்தின் சுத்தம் நீரினால் பெறப்படுவதாகும்; அகத்தின் சுத்தம் (மனம்சார்ந்த தூய்மை) வாய்மையைக் கொண்டே விளங்கும்.",
    altTranslation: "Outward pureness is gained through water's cleansing aid; Pureness of heart through truth alone is made. — Pope"
  },
  {
    num: 299, chapter: 30,
    tamil: "எல்லா விளக்கும் விளக்கல்ல சான்றோர்க்குப்\nபொய்யா விளக்கே விளக்கு.",
    transliteration: "Ellā viḷakkum viḷakkalla cāṉṟōrkkup\nPoyyā viḷakkē viḷakku.",
    english: "All lamps are not lamps; for the wise, the lamp of truthfulness alone is the true lamp.",
    tamilUrai: "உண்மையில் சான்றோர்க்கு, உலகில் உள்ள ஏனைய எந்த விளக்கும் விளக்காகா; பொய்யாத வாய்மை என்னும் விளக்கே சிறந்த விளக்காகும்.",
    altTranslation: "All other lamps are not true lamps indeed; The lamp of truth alone — that sages need. — Pope"
  },
  {
    num: 300, chapter: 30,
    tamil: "யாமெய்யாக் கண்டவற்றுள் இல்லை எனைத்தொன்றும்\nவாய்மையின் நல்ல பிற.",
    transliteration: "Yāmeyyāk kaṇṭavaṟṟuḷ illai eṉaittoṉṟum\nVāymaiyiṉ nalla piṟa.",
    english: "Of all the truths that we have examined, nothing is better than truthfulness.",
    tamilUrai: "நாம் உண்மை என்று ஆராய்ந்து கண்ட எதற்குமே வாய்மையை விட மேலான தன்மை இல்லை.",
    altTranslation: "Of all the truths we have examined, none we find More excellent than truth in word and mind. — Pope"
  },

  // CHAPTER 31 — Restraining Anger
  {
    num: 301, chapter: 31,
    tamil: "செல்லிடத்துக் காப்பான் சினங்காப்பான் அல்லிடத்துக்\nகாக்கின்என் காவாக்கால் என்.",
    transliteration: "Celliṭattuk kāppāṉ ciṉaṅkāppāṉ alliṭattuk\nKākkiṉeṉ kāvākkāl eṉ.",
    english: "He alone restrains anger who restrains it where it has power to hurt; against the powerless, whether one restrains it or not makes no difference.",
    tamilUrai: "சினம் பயனளிக்கும் இடத்தில் — தன்னைவிட வலியவர் முன்னிலையில் — அதைக் கட்டுப்படுத்துபவனே உண்மையில் சினத்தை அடக்குகிறவன்; தன்னைவிட பலவீனமானவர்முன் சினத்தைக் கட்டுப்படுத்தியும், விடுத்தும் என்ன பயன்?",
    altTranslation: "To curb one's wrath where it can be of effect, is true restraint; To check it where it cannot, is to no purpose faint. — Pope"
  },
  {
    num: 302, chapter: 31,
    tamil: "செல்லா இடத்துச் சினந்தீது செல்லிடத்தும்\nஇல்லதனின் தீய பிற.",
    transliteration: "Cellā iṭattuc ciṉantītu celliṭattum\nIllataṉiṉ tīya piṟa.",
    english: "Anger is bad where it cannot prevail, and worse still where it can — for nothing greater evil exists.",
    tamilUrai: "சினம் பலியாத இடத்தில் (பலியாதவர் முன்) தீயதே; பயனளிக்கும் இடத்தில் (வலியவர் முன்) அதை விட தீயது வேறு எதுவும் இல்லை.",
    altTranslation: "Wrath, where it cannot strike, is ill; Where it can, worse evil still. — Pope"
  },
  {
    num: 303, chapter: 31,
    tamil: "மறத்தல் வெகுளியை யார்மாட்டும் தீய\nபிறத்தல் அதனான் வரும்.",
    transliteration: "Maṟattal vekuḷiyai yārmāṭṭum tīya\nPiṟattal ataṉāṉ varum.",
    english: "Forget anger toward anyone; from it arise only evils of every kind.",
    tamilUrai: "யாரிடத்திலும் சினம் கொள்ளாமல், அதை மறந்து விடுக; சினத்தினாலேயே எல்லா வகையான தீமைகளும் தோன்றுகின்றன.",
    altTranslation: "Forget thy wrath 'gainst any; every evil springs From the unbridled wrath the heart unwisely brings. — Pope"
  },
  {
    num: 304, chapter: 31,
    tamil: "நகையும் உவகையும் கொல்லும் சினத்தின்\nபகையும் உளவோ பிற.",
    transliteration: "Nakaiyum uvakaiyum kollum ciṉattiṉ\nPakaiyum uḷavō piṟa.",
    english: "Anger kills laughter and joy; is there any worse enemy than this?",
    tamilUrai: "ஒருவரிடம் உள்ள சிரிப்பையும் மகிழ்ச்சியையும் கொன்று விடும் சினத்தைவிட கொடிய பகை வேறு எதுவும் உண்டா?",
    altTranslation: "Wrath kills the laugh, the joy of life, — what deadlier foe Is left for man to know? — Pope"
  },
  {
    num: 305, chapter: 31,
    tamil: "தன்னைத்தான் காக்கின் சினங்காக்க காவாக்கால்\nதன்னையே கொல்லுஞ் சினம்.",
    transliteration: "Taṉṉaittāṉ kākkiṉ ciṉaṅkākka kāvākkāl\nTaṉṉaiyē kolluñ ciṉam.",
    english: "If one would guard himself, let him guard against anger; if unchecked, anger will destroy him.",
    tamilUrai: "ஒருவன் தன்னைத் தானே காத்துக் கொள்ள வேண்டுமென்றால், சினத்தைத் தடுத்துக் கொள்ள வேண்டும்; தடுக்காவிட்டால், அந்தச் சினமே அவனை அழித்துவிடும்.",
    altTranslation: "Guard thy wrath, if thou thy life wouldst guard; If thou guard it not, thyself wrath shall kill. — Pope"
  },
  {
    num: 306, chapter: 31,
    tamil: "சினமென்னும் சேர்ந்தாரைக் கொல்லி இனமென்னும்\nஏமப் புணையைச் சுடும்.",
    transliteration: "Ciṉameṉṉum cērntāraik kolli iṉameṉṉum\nĒmap puṇaiyaic cuṭum.",
    english: "The fire called anger, which destroys those who yield to it, will also burn the raft of kindred that should save them.",
    tamilUrai: "தன்னை அடைந்தவரைக் கொல்லும் தீயாகிய சினம், அவன் உயிர் காக்கும் சுற்றத்தினர் எனும் தெப்பத்தையும் சேர்ந்து சுட்டழிக்கும்.",
    altTranslation: "The fire of wrath burns him who feeds it, and the raft Of kindred that would save him, it burns too at its draft. — Pope"
  },
  {
    num: 307, chapter: 31,
    tamil: "சினத்தைப் பொருளென்று கொண்டவன் கேடு\nநிலத்தறைந்தான் கைபிழையா தற்று.",
    transliteration: "Ciṉattaip poruḷeṉṟu koṇṭavaṉ kēṭu\nNilattaṟaintāṉ kaipiḻaiyā taṟṟu.",
    english: "The ruin of him who holds anger as a treasure is as sure as the hand that strikes the ground cannot miss.",
    tamilUrai: "சினத்தையே மதிப்பான பொருளெனக் கொண்டவனின் அழிவு, தரையில் அடிக்கும் கை தவறாமல் அடிப்பதைப் போல, நிச்சயமானது.",
    altTranslation: "Who counts wrath a treasure, ruin shall betide, Sure as hand that strikes the ground cannot miss its guide. — Pope"
  },
  {
    num: 308, chapter: 31,
    tamil: "இணர்எரி தோய்வன்ன இன்னா செயினும்\nபுணரின் வெகுளாமை நன்று.",
    transliteration: "Iṇareri tōyvaṉṉa iṉṉā ceyiṉum\nPuṇariṉ vekuḷāmai naṉṟu.",
    english: "Even though another inflict on you sufferings like a flame-torch, it is best, if possible, not to feel angry.",
    tamilUrai: "ஒருவர் கூட்டுத் தீயை உடலில் அணைத்த ஒப்ப துன்பம் செய்தாலும், இயன்றால் அவர் மீது சினம் கொள்ளாதிருத்தலே சிறந்தது.",
    altTranslation: "Though fire-brand be thrust into thy side, 'Tis best that wrath in thee should not abide. — Pope"
  },
  {
    num: 309, chapter: 31,
    tamil: "உள்ளிய தெல்லாம் உடனெய்தும் உள்ளத்தால்\nஉள்ளான் வெகுளி எனின்.",
    transliteration: "Uḷḷiya tellām uṭaṉeytum uḷḷattāl\nUḷḷāṉ vekuḷi eṉiṉ.",
    english: "He gains at once all that he thinks of, whose mind harbours no anger.",
    tamilUrai: "மனதில் சினத்தை எண்ணாதவன், தான் நினைத்த எல்லாவற்றையும் உடனடியாக அடைந்து விடுவான்.",
    altTranslation: "All he desires he wins at once, Who wrath's vile thoughts within renounce. — Pope"
  },
  {
    num: 310, chapter: 31,
    tamil: "இறந்தார் இறந்தார் அனையர் சினத்தைத்\nதுறந்தார் துறந்தார் துணை.",
    transliteration: "Iṟantār iṟantār aṉaiyar ciṉattait\nTuṟantār tuṟantār tuṇai.",
    english: "Those who yield to anger are as the dead; those who renounce anger are as the highest ascetics.",
    tamilUrai: "சினத்தைச் செய்பவர்கள் இறந்தவர்களுக்கு ஒப்பாவார்கள்; சினத்தைத் துறந்தவர்கள் துறவியர்க்கு நிகராக உயர்வர்.",
    altTranslation: "Those who give way to wrath are as the dead; Who wrath renounce, are saints in their stead. — Pope"
  },

  // CHAPTER 32 — Not Doing Evil
  {
    num: 311, chapter: 32,
    tamil: "சிறப்பீனும் செல்வம் பெறினும் பிறர்க்கின்னா\nசெய்யாமை மாசற்றார் கோள்.",
    transliteration: "Ciṟappīṉum celvam peṟiṉum piṟarkkiṉṉā\nCeyyāmai mācaṟṟār kōḷ.",
    english: "The principle of the pure in heart is not to injure others, even to gain the greatest wealth or distinction.",
    tamilUrai: "சிறப்பையும் செல்வத்தையும் தருவதாக இருந்தாலும், பிறருக்குத் தீமை செய்யாதிருத்தலே குற்றமற்ற பெரியோர்களின் கொள்கை.",
    altTranslation: "Though gain of wealth and glory were the prize, To harm no man is rule of pure and wise. — Pope"
  },
  {
    num: 312, chapter: 32,
    tamil: "கறுத்துஇன்னா செய்தவக் கண்ணும் மறுத்தின்னா\nசெய்யாமை மாசற்றார் கோள்.",
    transliteration: "Kaṟuttuiṉṉā ceytavak kaṇṇum maṟuttiṉṉā\nCeyyāmai mācaṟṟār kōḷ.",
    english: "The rule of the faultless is not to return evil, even to those who have wronged them in hatred.",
    tamilUrai: "பகைமையுடன் தீமை செய்தவர் மேலும் மாறாகத் தீமை செய்யாதிருத்தலே குற்றமற்றவர்களின் கொள்கையாகும்.",
    altTranslation: "Though evil men may evil do in hate, The pure will answer with no ill in state. — Pope"
  },
  {
    num: 313, chapter: 32,
    tamil: "செய்யாமல் செற்றார்க்கும் இன்னாத செய்தபின்\nஉய்யா விழுமந் தரும்.",
    transliteration: "Ceyyāmal ceṟṟārkkum iṉṉāta ceytapiṉ\nUyyā viḻuman tarum.",
    english: "To return evil for the harm done by those who injured you without cause brings sorrow from which there is no escape.",
    tamilUrai: "காரணமின்றி தீமை செய்தவரையே பழிக்கு பழியாகத் தீமை செய்தால், பின்னர் வரும் துன்பத்திலிருந்து தப்பவே முடியாது.",
    altTranslation: "Return no ill for ill from causeless foes; Else inescapable sorrow grows. — Pope"
  },
  {
    num: 314, chapter: 32,
    tamil: "இன்னாசெய் தாரை ஒறுத்தல் அவர்நாண\nநன்னயம் செய்து விடல்.",
    transliteration: "Iṉṉācey tārai oṟuttal avarnāṇa\nNaṉnayam ceytu viṭal.",
    english: "The best way to punish those who have wronged you is to put them to shame by doing them good.",
    tamilUrai: "தீமை செய்தவர்களைத் தண்டிப்பதற்குரிய சிறந்த வழி — அவர்கள் வெட்கப்படுமாறு அவருக்கு நன்மையே செய்து விடுதலாகும்.",
    altTranslation: "Against thy foes the best revenge ever taken — Is such good done that they stand abashed and shaken. — Pope"
  },
  {
    num: 315, chapter: 32,
    tamil: "அறிவினான் ஆகுவ துண்டோ பிறிதின்நோய்\nதம்நோய்போல் போற்றாக் கடை.",
    transliteration: "Aṟiviṉāṉ ākuvatuṇṭō piṟitiṉnōy\nTamnōypōl pōṟṟāk kaṭai.",
    english: "Of what use is wisdom, if one does not treat another's suffering as his own?",
    tamilUrai: "பிற உயிரினத்தின் துன்பத்தைத் தன் துன்பம் போலக் கருதிக் காக்காதபோது, கற்ற அறிவினால் ஆகும் நன்மை என்ன?",
    altTranslation: "What gain is wisdom, if it does not move The heart to cherish others' pain as our own love? — Pope"
  },
  {
    num: 316, chapter: 32,
    tamil: "இன்னா எனத்தான் உணர்ந்தவை துன்னாமை\nவேண்டும் பிறன்கண் செயல்.",
    transliteration: "Iṉṉā eṉattāṉ uṇarntavai tuṉṉāmai\nVēṇṭum piṟaṉkaṇ ceyal.",
    english: "What one knows to be painful to oneself — let him not do to another.",
    tamilUrai: "தமக்குச் செய்தால் துன்பம் தரும் என்று உணரப்பட்ட செயல்களை, மற்றவர்க்கும் செய்யாமல் விட வேண்டும்.",
    altTranslation: "Toward others never let thine acts be shown, Those acts whose pain thou dost thyself have known. — Pope"
  },
  {
    num: 317, chapter: 32,
    tamil: "எனைத்தானும் எஞ்ஞான்றும் யார்க்கும் மனத்தானாம்\nமாணாசெய் யாமை தலை.",
    transliteration: "Eṉaittāṉum eññāṉṟum yārkkum maṉattāṉām\nMāṇācey yāmai talai.",
    english: "The highest virtue is, at any time and in any way, not even to intend evil toward another.",
    tamilUrai: "எக்காலத்திலும், யாருக்கும், எந்த அளவிலும், மனத்தால் கூட தீமை செய்ய நினைக்காதிருத்தலே முதன்மையான அறம்.",
    altTranslation: "In any time, in any way, to any soul, From evil even in thought to turn — that is virtue whole. — Pope"
  },
  {
    num: 318, chapter: 32,
    tamil: "தன்னுயிர்க்கு இன்னாமை தானறிவான் என்கொலோ\nமன்னுயிர்க்கு இன்னா செயல்.",
    transliteration: "Taṉṉuyirkku iṉṉāmai tāṉaṟivāṉ eṉkolō\nMaṉṉuyirkku iṉṉā ceyal.",
    english: "He who knows what pain is to himself — why then does he do painful things to other lives?",
    tamilUrai: "தன் உயிருக்குத் தீமை துன்பம் எனத் தானே அறிபவன், பிற உயிர்களுக்குத் துன்பமான செயல்களைச் செய்வது ஏன்?",
    altTranslation: "Who knows what suffering means to self, will he inflict Its like on others' lives — this should he strictly predict? — Pope"
  },
  {
    num: 319, chapter: 32,
    tamil: "பிறர்க்கின்னா முற்பகல் செய்யின் தமக்கின்னா\nபிற்பகல் தாமே வரும்.",
    transliteration: "Piṟarkkiṉṉā muṟpakal ceyyiṉ tamakkiṉṉā\nPiṟpakal tāmē varum.",
    english: "If in the morning one does harm to others, harm shall come upon him unbidden in the afternoon.",
    tamilUrai: "பிறர்க்குத் துன்பத்தை முற்பகலில் செய்தால், தனக்கே துன்பம் பிற்பகலில் தானாகவே வந்து சேரும்.",
    altTranslation: "If in the morning thou shouldst work another's ill, Same day, unbidden, thine own ills shall come to fulfil. — Pope"
  },
  {
    num: 320, chapter: 32,
    tamil: "நோயெல்லாம் நோய்செய்தார் மேலவாம் நோய்செய்யார்\nநோயின்மை வேண்டு பவர்.",
    transliteration: "Nōyellām nōyceytār mēlavām nōyceyyār\nNōyiṉmai vēṇṭu pavar.",
    english: "All sorrows return upon those who cause sorrow; those who seek freedom from sorrow will cause none.",
    tamilUrai: "துன்பம் செய்தவர் மீதே துன்பம் எல்லாம் வந்து சேரும்; துன்பம் இல்லாத நிலையை விரும்புவோர், பிறருக்கு எந்தத் துன்பமும் செய்ய மாட்டார்கள்.",
    altTranslation: "All sorrows come to those who caused another's pain; Who seek to shun all grief, from causing grief refrain. — Pope"
  },

  // CHAPTER 33 — Not Killing
  {
    num: 321, chapter: 33,
    tamil: "அறவினை யாதெனில் கொல்லாமை கோறல்\nபிறவினை எல்லாந் தரும்.",
    transliteration: "Aṟaviṉai yāteṉil kollāmai kōṟal\nPiṟaviṉai ellān tarum.",
    english: "What is virtuous action? It is not to kill. Killing brings every other sin.",
    tamilUrai: "அறமான செயல் எது என்றால், உயிர்களைக் கொல்லாதிருத்தலே; கொல்லுதல் என்பது மற்ற எல்லாத் தீய செயல்களையும் விளைவிக்கும்.",
    altTranslation: "What is the virtue? Not to kill. To kill Brings in its train all other ills at will. — Pope"
  },
  {
    num: 322, chapter: 33,
    tamil: "பகுத்துண்டு பல்லுயிர் ஓம்புதல் நூலோர்\nதொகுத்தவற்றுள் எல்லாந் தலை.",
    transliteration: "Pakuttuṇṭu palluyir ōmputal nūlōr\nTokuttavaṟṟuḷ ellān talai.",
    english: "To share one's food and cherish many lives — this the learned have placed first among all virtues.",
    tamilUrai: "உணவை பிறருடன் பகிர்ந்து உண்டு, பல உயிர்களையும் பேணிக்காத்தல் — நூல்களில் நூலோர் தொகுத்த அறங்களில் எல்லாம் இதுவே தலையாயது.",
    altTranslation: "To share one's food, cherish all life — this virtue is highest, Sages say, among the virtues they've arrayed. — Pope"
  },
  {
    num: 323, chapter: 33,
    tamil: "ஒன்றாக நல்லது கொல்லாமை மற்றதன்\nபின்சாரப் பொய்யாமை நன்று.",
    transliteration: "Oṉṟāka nallatu kollāmai maṟṟataṉ\nPiṉcārap poyyāmai naṉṟu.",
    english: "The foremost good is not to kill; next after it is not to speak falsehood.",
    tamilUrai: "அறங்களுள் முதலாவதும், ஒப்பற்றதுமான நல்ல பண்பு கொல்லாமையாகும்; அதனைத் தொடர்ந்த நிலையில் சிறப்புடையது பொய் சொல்லாமையே ஆகும்.",
    altTranslation: "The first of good is — not to kill; the next In rank — not to speak falsely, unperplexed. — Pope"
  },
  {
    num: 324, chapter: 33,
    tamil: "நல்லாறு எனப்படுவது யாதெனின் யாதொன்றும்\nகொல்லாமை சூழும் நெறி.",
    transliteration: "Nallāṟu eṉappaṭuvatu yāteṉiṉ yātoṉṟum\nKollāmai cūḻum neṟi.",
    english: "What is called the good path? It is the way that holds, above all, to not killing.",
    tamilUrai: "நல்ல வழி என்று சொல்லப்படுவது எது என்றால், எந்த உயிரையும் கொல்லாமல் இருப்பதை முதன்மையாகக் கொண்ட நெறிதான்.",
    altTranslation: "The 'good way' — what is it in sober truth? The path Whereon no creature's life is taken by wrath. — Pope"
  },
  {
    num: 325, chapter: 33,
    tamil: "நிலைஅஞ்சி நீத்தாருள் எல்லாம் கொலைஅஞ்சிக்\nகொல்லாமை சூழ்வான் தலை.",
    transliteration: "Nilaiañci nīttāruḷ ellām kolaiañcik\nKollāmai cūḻvāṉ talai.",
    english: "Of all who have renounced the world from dread of birth and death, he who shrinks from killing is foremost.",
    tamilUrai: "உலகத்தின் நிலையாமையை அஞ்சி துறந்தவர்கள் பலர் உண்டு; அவருள்ளும், கொலை செய்வதற்கு அஞ்சிக் கொல்லாமையை மேற்கொண்டவன் சிறந்தவன்.",
    altTranslation: "Of all who, fearing change of birth, the world renounce, The chief is he who from taking life doth bounce. — Pope"
  },
  {
    num: 326, chapter: 33,
    tamil: "கொல்லாமை மேற்கொண்டு ஒழுகுவான் வாழ்நாள்மேல்\nசெல்லாது உயிருண்ணுங் கூற்று.",
    transliteration: "Kollāmai mēṟkoṇṭu oḻukuvāṉ vāḻnāḷmēl\nCellātu uyiruṇṇuṅ kūṟṟu.",
    english: "Even Death, who devours lives, will not fall upon the lifespan of him who lives by non-killing.",
    tamilUrai: "கொல்லாமையை கடைப்பிடித்து வாழ்பவனின் ஆயுளைக் குறைக்க, உயிரை அழிக்கும் கூற்றுவன் (எமன்) கூட செல்ல மாட்டான்.",
    altTranslation: "Against his years, who holds the law of not to kill, E'en life-consuming Death ventures no ill. — Pope"
  },
  {
    num: 327, chapter: 33,
    tamil: "தன்னுயிர் நீப்பினும் செய்யற்க தான்பிறிது\nஇன்னுயிர் நீக்கும் வினை.",
    transliteration: "Taṉṉuyir nīppiṉum ceyyaṟka tāṉpiṟitu\nIṉṉuyir nīkkum viṉai.",
    english: "Even to save one's own life, one should never do the deed of taking the sweet life of another.",
    tamilUrai: "தன் உயிரையே இழந்தாலும், வேறு ஒரு உயிரினத்தின் இனிய உயிரை நீக்கும் செயலைச் செய்யக் கூடாது.",
    altTranslation: "Though thine own life thou mayest have to yield, Do not deed that to other creature's death is sealed. — Pope"
  },
  {
    num: 328, chapter: 33,
    tamil: "நன்றாகும் ஆக்கம் பெரிதெனினும் சான்றோர்க்குக்\nகொன்றாகும் ஆக்கங் கடை.",
    transliteration: "Naṉṟākum ākkam periteṉiṉum cāṉṟōrkkuk\nKoṉṟākum ākkaṅ kaṭai.",
    english: "Even if great good come from it, the wise count lowly any gain that comes through killing.",
    tamilUrai: "பெரும் ஆக்கம் வந்தாலும், அது கொல்வதால் வந்ததென்றால், சான்றோர்கள் அதைக் கடையாகவே மதிப்பர்.",
    altTranslation: "Though great the gain, the wise count lowly The wealth through slaughter won and solely. — Pope"
  },
  {
    num: 329, chapter: 33,
    tamil: "கொலைவினைய ராகிய மாக்கள் புலைவினையர்\nபுன்மை தெரிவார் அகத்து.",
    transliteration: "Kolaiviṉaiya rākiya mākkaḷ pulaiviṉaiyar\nPuṉmai terivār akattu.",
    english: "In the eyes of those who know what is base, those whose occupation is killing are counted among the vilest.",
    tamilUrai: "கீழ்மையை நன்கு உணர்ந்தவர்களின் கருத்தில், கொலை செய்வதையே தொழிலாகக் கொண்டவர்கள், கீழான செயலைச் செய்பவர்கள் ஆவர்.",
    altTranslation: "In vision of those who know what's base and low, As base in task is he whose trade is killing's blow. — Pope"
  },
  {
    num: 330, chapter: 33,
    tamil: "உயிர்உடம்பின் நீக்கியார் என்ப செயிர்உடம்பின்\nசெல்லாத்தீ வாழ்க்கை யவர்.",
    transliteration: "Uyiruṭampiṉ nīkkiyār eṉpa ceyiruṭampiṉ\nCellāttī vāḻkkai yavar.",
    english: "They who live in diseased, accursed bodies are said to be those who once took life from other forms.",
    tamilUrai: "நோய்-நிறைந்த உடலுடன், ஏழ்மையான துன்ப வாழ்க்கையை நடத்துபவர்கள் — முற்பிறவிகளில் பிற உயிர்களை உடல்விட்டு அகற்றியவர்கள் என்று கூறப்படுகின்றனர்.",
    altTranslation: "Those born diseased, in wretchedness that never mends, Are they who once tore life from sentient friends. — Pope"
  },

  // CHAPTER 34 — Instability
  {
    num: 331, chapter: 34,
    tamil: "நில்லாத வற்றை நிலையின என்றுணரும்\nபுல்லறி வாண்மை கடை.",
    transliteration: "Nillāta vaṟṟai nilaiyiṉa eṉṟuṇarum\nPullaṟi vāṇmai kaṭai.",
    english: "The basest of wisdom is to regard as enduring that which is not.",
    tamilUrai: "நிலையற்ற உலகப் பொருட்களை நிலைத்தவை என்று எண்ணும் அற்ப அறிவே எல்லாவற்றிலும் கடையாகும்.",
    altTranslation: "The meanest wisdom is to count as firm and lasting, Those things that are by nature never staying. — Pope"
  },
  {
    num: 332, chapter: 34,
    tamil: "கூத்தாட்டு அவைக்குழாத் தற்றே பெருஞ்செல்வம்\nபோக்கும் அதுவிளிந் தற்று.",
    transliteration: "Kūttāṭṭu avaikkuḻāt taṟṟē peruñcelvam\nPōkkum atuviḷin taṟṟu.",
    english: "Great wealth comes like a crowd gathered to see a dance, and goes away just as the crowd disperses.",
    tamilUrai: "பெருஞ்செல்வம் சேர்வது, கூத்துக்காணும் பெரும் கூட்டம் கூடுவது போலாகும்; அது அழிந்தோ நீங்கியோ போவதும், அந்த கூட்டம் கலைவது போலாகும்.",
    altTranslation: "Great wealth assembles as the crowd at dance, — then dispersed with end, Like that same crowd, all its greatness doth descend. — Pope"
  },
  {
    num: 333, chapter: 34,
    tamil: "அற்கா இயல்பிற்றுச் செல்வம் அதுபெற்றால்\nஅற்குப ஆங்கே செயல்.",
    transliteration: "Aṟkā iyalpiṟṟuc celvam atupeṟṟāl\nAṟkupa āṅkē ceyal.",
    english: "Wealth is by nature fleeting; if you get it, at once do with it the deeds that endure.",
    tamilUrai: "செல்வம் என்பது தங்காத இயல்பினது; அதைப் பெற்றால், அப்போதே நீடித்திருக்கும் அறச்செயல்களைச் செய்ய வேண்டும்.",
    altTranslation: "The nature of wealth is inconstancy; quick and wise, Use it for enduring acts when fortune in it lies. — Pope"
  },
  {
    num: 334, chapter: 34,
    tamil: "நாளென ஒன்றுபோற் காட்டி உயிர்ஈரும்\nவாளது உணர்வார்ப் பெறின்.",
    transliteration: "Nāḷeṉa oṉṟupōṟ kāṭṭi uyirīrum\nVāḷatu uṇarvārp peṟiṉ.",
    english: "To those who can understand it, Day appears as one thing but is truly a saw that cuts away life.",
    tamilUrai: "ஒவ்வொரு நாளும் ஒன்றாகக் காட்சி அளித்தாலும், உள்ளுக்குள் அது உயிர்களை அறுக்கும் வாளாகவே செயல்படுகிறது என்பதை உணர்ந்தவர்கள் அறிவர்.",
    altTranslation: "Day by day, what seems a common round doth move, Is, sooth, a saw that cuts away our very life — above. — Pope"
  },
  {
    num: 335, chapter: 34,
    tamil: "நாச்செற்று விக்குள்மேல் வாராமுன் நல்வினை\nமேற்சென்று செய்யப் படும்.",
    transliteration: "Nācceṟṟu vikkuḷmēl vārāmuṉ nalviṉai\nMēṟceṉṟu ceyyap paṭum.",
    english: "Before the tongue fails and hiccup sets in, hasten to perform good deeds.",
    tamilUrai: "நாக்கு தடைப்பட்டு, விக்கல் மேலே எழுந்து (மரண நிலை வராமல்) இருக்கும்போதே, விரைந்து நல்வினைகளைச் செய்து முடிக்க வேண்டும்.",
    altTranslation: "Ere tongue be choked and hiccough's gasp prevail, Hasten to do good deeds of fair avail. — Pope"
  },
  {
    num: 336, chapter: 34,
    tamil: "நெருநல் உளனொருவன் இன்றில்லை என்னும்\nபெருமை உடைத்துஇவ் வுலகு.",
    transliteration: "Nerunal uḷaṉoruvaṉ iṉṟillai eṉṉum\nPerumai uṭaittuiv vulaku.",
    english: "This is the greatness of the world: 'Yesterday he was; today he is no more.'",
    tamilUrai: "\"நேற்று ஒருவன் இருந்தான்; இன்று அவன் இல்லை\" என்று சொல்லப்படுகிற நிலையாமையே இந்த உலகின் உண்மைப் பெருமை.",
    altTranslation: "'Yesterday he was — today is gone' — the tale Of this world's nature, told beneath the veil. — Pope"
  },
  {
    num: 337, chapter: 34,
    tamil: "ஒருபொழுதும் வாழ்வது அறியார் கருதுப\nகோடியும் அல்ல பல.",
    transliteration: "Orupoḻutum vāḻvatu aṟiyār karutupa\nKōṭiyum alla pala.",
    english: "Men who know not whether they shall live one moment plan for a thousand crore things.",
    tamilUrai: "ஒரு நொடி கூட உயிர் வாழுமா என்பதை அறியாத மக்கள், ஆயிரம் கோடி என்ற எண்ணற்ற காரியங்களை எண்ணிச் செயல்படுவர்.",
    altTranslation: "Knowing not they live for a moment more, Men plan for ten crore things they restore. — Pope"
  },
  {
    num: 338, chapter: 34,
    tamil: "குடம்பை தனித்துஒழியப் புள்பறந் தற்றே\nஉடம்பொடு உயிரிடை நட்பு.",
    transliteration: "Kuṭampai taṉittuoḻiyap puḷpaṟan taṟṟē\nUṭampoṭu uyiriṭai naṭpu.",
    english: "The bond between body and soul is like the relation of a bird that flies away leaving its empty shell.",
    tamilUrai: "குஞ்சு வெளியே பறந்துபோனதும் தனித்து நிற்கும் முட்டையின் ஓட்டிற்கும் குஞ்சிற்கும் உள்ள தொடர்பைப் போன்றதே உடலுக்கும் உயிருக்கும் உள்ள உறவாகும்.",
    altTranslation: "As bird forsakes its broken shell and flies away, Such is the bond of body and of soul some day. — Pope"
  },
  {
    num: 339, chapter: 34,
    tamil: "உறங்கு வதுபோலுஞ் சாக்காடு உறங்கி\nவிழிப்பது போலும் பிறப்பு.",
    transliteration: "Uṟaṅku vatupōluñ cākkāṭu uṟaṅki\nviḻippatu pōlum piṟappu.",
    english: "Death is like sleeping; birth is like waking from that sleep.",
    tamilUrai: "உறங்குவது போன்றதே மரணம்; உறங்கி விழிப்பது போன்றதே பிறப்பு.",
    altTranslation: "Death is as sleep; as waking from that sleep Is birth — so pass the soul's enduring cheap. — Pope"
  },
  {
    num: 340, chapter: 34,
    tamil: "பொக்கம்உள் ஆங்கே புறப்படாய் வாயில்காண்\nஅற்காத உள்ளத்து உயிர்.",
    transliteration: "Pokkamuḷ āṅkē puṟappaṭāy vāyilkāṇ\nAṟkāta uḷḷattu uyir.",
    english: "The soul that has not yet found a permanent abode abides uneasily here, soon to leave.",
    tamilUrai: "நிலையான அடைக்கலம் பெறாத உயிர், இந்த உடலில் தற்காலிகமாக தங்கியிருந்து, விரைந்து வெளியேறுவதற்கு ஆயத்தமாகவே நிற்கிறது.",
    altTranslation: "The soul, ere finding rest eternal, bides a guest Within the body's frail and fleeting nest. — Pope"
  },

  // CHAPTER 35 — Renunciation
  {
    num: 341, chapter: 35,
    tamil: "யாதனின் யாதனின் நீங்கியான் நோதல்\nஅதனின் அதனின் இலன்.",
    transliteration: "Yātaṉiṉ yātaṉiṉ nīṅkiyāṉ nōtal\nAtaṉiṉ ataṉiṉ ilaṉ.",
    english: "From whatever thing one has freed himself, from that one shall suffer pain no more.",
    tamilUrai: "எந்தெந்த பற்றுக்களிலிருந்து ஒருவன் விடுபட்டானோ, அந்தந்தப் பற்றுக்களால் அவனுக்குத் துன்பமும் இல்லாது போகும்.",
    altTranslation: "From whatsoever thing a man is freed, From that same thing comes neither pain nor need. — Pope"
  },
  {
    num: 342, chapter: 35,
    tamil: "வேண்டின்உண் டாகத் துறக்க துறந்தபின்\nஈண்டுஇயற் பால பல.",
    transliteration: "Vēṇṭiṉuṇ ṭākat tuṟakka tuṟantapiṉ\nĪṇṭuiyaṟ pāla pala.",
    english: "If you would have great joy, renounce; after renunciation, great good things follow here.",
    tamilUrai: "இன்பத்தை விரும்பினால், அதற்காக முற்றிலும் துறப்பவனாக ஆக வேண்டும்; அவ்வாறு துறந்த பிறகு, நன்மைகள் பல தாமே வந்து சேரும்.",
    altTranslation: "Wouldst thou have happiness complete — renounce! When thou hast so done, Many blessings here, hereafter, thou shalt have won. — Pope"
  },
  {
    num: 343, chapter: 35,
    tamil: "அடல்வேண்டும் ஐந்தன் புலத்தை விடல்வேண்டும்\nவேண்டிய வெல்லாம் ஒருங்கு.",
    transliteration: "Aṭalvēṇṭum aintaṉ pulattai viṭalvēṇṭum\nVēṇṭiya vellām oruṅku.",
    english: "The five senses should be subdued, and every desire renounced at once.",
    tamilUrai: "ஐந்து புலன்களையும் வெல்ல வேண்டும்; எல்லாம் விருப்பங்களையும் ஒரேசமயத்தில் விட்டு விட வேண்டும்.",
    altTranslation: "The five senses conquer; and every desire At once renounce, nor any spark retire. — Pope"
  },
  {
    num: 344, chapter: 35,
    tamil: "இயல்பாகும் நோன்பிற்கொன்று இன்மை உடைமை\nமயலாகும் மற்றும் பெயர்த்து.",
    transliteration: "Iyalpākum nōṉpiṟkoṉṟu iṉmai uṭaimai\nMayalākum maṟṟum peyarttu.",
    english: "Nothing is natural to the ascetic life; any possession only brings confusion back again.",
    tamilUrai: "\"எதுவும் என்னுடையது அல்ல\" எனும் நிலையே தவ வாழ்க்கைக்கு இயல்பாகும்; எதையேனும் உடமையாகக் கருதினால், அது மீண்டும் மயக்கத்தைத் தரும்.",
    altTranslation: "'To have nothing' — such is ascetic's law; Possessions bring delusion back once more. — Pope"
  },
  {
    num: 345, chapter: 35,
    tamil: "மற்றும் தொடர்ப்பாடு எவன்கொல் பிறப்பறுக்கல்\nஉற்றார்க்கு உடம்பும் மிகை.",
    transliteration: "Maṟṟum toṭarppāṭu evaṉkol piṟappaṟukkal\nUṟṟārkku uṭampum mikai.",
    english: "To those who have undertaken to end the cycle of births, even the body is a burden; why, then, any other attachment?",
    tamilUrai: "பிறவியை அறுக்க முற்பட்ட துறவிகளுக்கு, உடலே அதிகம் என்று தோன்றுகிறதே; மற்ற பற்றுக்கள் எதற்கு?",
    altTranslation: "To those who seek to end rebirth, the body's bond Is more than enough; what need of ties beyond? — Pope"
  },
  {
    num: 346, chapter: 35,
    tamil: "யான்எனது என்னும் செருக்கறுப்பான் வானோர்க்கு\nஉயர்ந்த உலகம் புகும்.",
    transliteration: "Yāṉeṉatu eṉṉum cerukkaṟuppāṉ vāṉōrkku\nUyarnta ulakam pukum.",
    english: "He who cuts away the pride of 'I' and 'mine' enters a world higher than that of the gods.",
    tamilUrai: "\"நான்\", \"என்னுடையது\" என்னும் தற்பெருமையை முற்றிலும் அறுத்தவன், தேவர்களுடைய உலகத்தை விட உயர்ந்த உலகத்தை அடைவான்.",
    altTranslation: "'Me' and 'mine' — whoso destroys this pride, Above the very gods his realm shall bide. — Pope"
  },
  {
    num: 347, chapter: 35,
    tamil: "பற்றி விடாஅ இடும்பைகள் பற்றினைப்\nபற்றி விடாதவர்க்கு.",
    transliteration: "Paṟṟi viṭāa iṭumpaikaḷ paṟṟiṉaip\nPaṟṟi viṭātavarkku.",
    english: "Sorrows will cling without letting go to him who does not let go of his attachments.",
    tamilUrai: "பற்றை விடாதவரைப் பிடித்து, அவர்களை விட்டு விலகாமல் பற்றி நிற்கும் இயல்பு துன்பங்களுக்கு உண்டு.",
    altTranslation: "To those who cling, their every sorrow clings — They cannot be freed from grief's searing stings. — Pope"
  },
  {
    num: 348, chapter: 35,
    tamil: "தலைப்பட்டார் தீரத் துறந்தார் மயங்கி\nவலைப்பட்டார் மற்றை யவர்.",
    transliteration: "Talaippaṭṭār tīrat tuṟantār mayaṅki\nValaippaṭṭār maṟṟai yavar.",
    english: "Those who have renounced wholly have reached the goal; others only wander, caught in delusion's net.",
    tamilUrai: "முழுமையாகத் துறந்தவர்களே தாங்கள் விரும்பிய உயர் நிலையை அடைந்தவர்கள்; மற்றவர்கள் மயக்கத்தின் வலையில் சிக்கித் தவிப்பவர்கள்.",
    altTranslation: "Who all renounce in full have reached the shore; The rest in delusion's net lie evermore. — Pope"
  },
  {
    num: 349, chapter: 35,
    tamil: "பற்றற்ற கண்ணே பிறப்பறுக்கும் மற்று\nநிலையாமை காணப் படும்.",
    transliteration: "Paṟṟaṟṟa kaṇṇē piṟappaṟukkum maṟṟu\nNilaiyāmai kāṇap paṭum.",
    english: "Rebirth ceases only when every attachment has gone; otherwise only the instability of things becomes more clearly seen.",
    tamilUrai: "பற்று முற்றிலும் நீங்கிய நிலையில் தான் பிறவித் தொடர் துண்டிக்கப்படும்; பற்று உள்ளபோது, நிலையாமையைத் தவிர வேறு எதையும் காண இயலாது.",
    altTranslation: "When every bond is loosed, all birth is done away; Else but change and sorrow's never-ending sway. — Pope"
  },
  {
    num: 350, chapter: 35,
    tamil: "பற்றுக பற்றற்றான் பற்றினை அப்பற்றைப்\nபற்றுக பற்று விடற்கு.",
    transliteration: "Paṟṟuka paṟṟaṟṟāṉ paṟṟiṉai appaṟṟaip\nPaṟṟuka paṟṟu viṭaṟku.",
    english: "Cling to Him who clings to nothing; cling to that one attachment, in order to let go of all others.",
    tamilUrai: "பற்று அனைத்தும் விட்ட பரம்பொருளிடம் பற்று வைத்திடுக; அந்த ஒரே பற்றினைக் கொண்டே, மற்ற பற்றுகளைத் துறப்பதற்கு.",
    altTranslation: "Cling thou to Him who clings to naught, and thus Be thou cleansed of all that cling, to rest in trust. — Pope"
  },

  // CHAPTER 36 — Knowledge of Truth
  {
    num: 351, chapter: 36,
    tamil: "பொருளல்ல வற்றைப் பொருளென்று உணரும்\nமருளானாம் மாணாப் பிறப்பு.",
    transliteration: "Poruḷalla vaṟṟaip poruḷeṉṟu uṇarum\nMaruḷāṉām māṇāp piṟappu.",
    english: "From the delusion of taking the unreal for the real comes the wretched cycle of rebirth.",
    tamilUrai: "உண்மைப் பொருள் அல்லாதவற்றை உண்மைப் பொருள் எனக் கருதும் மயக்கத்தின் விளைவே, சிறப்பற்ற பிறவியின் துன்பம்.",
    altTranslation: "To think the non-real real — that delusion Brings forth the wretched birth's confusion. — Pope"
  },
  {
    num: 352, chapter: 36,
    tamil: "இருள்நீங்கி இன்பம் பயக்கும் மருள்நீங்கி\nமாசுஅறு காட்சி யவர்க்கு.",
    transliteration: "Iruḷnīṅki iṉpam payakkum maruḷnīṅki\nMācuaṟu kāṭci yavarkku.",
    english: "Darkness departs and joy arises for those whose vision, free of delusion, has become pure.",
    tamilUrai: "மயக்கம் நீங்கி, குற்றமற்ற தூய்மையான அறிவினையுடையவர்க்கு, அறியாமை என்னும் இருள் நீங்கி இன்பம் கிடைக்கும்.",
    altTranslation: "Dark flies away, and bliss descends on those Whose view, unclouded, on pure truth repose. — Pope"
  },
  {
    num: 353, chapter: 36,
    tamil: "ஐயத்தின் நீங்கித் தெளிந்தார்க்கு வையத்தின்\nவானம் நணிய துடைத்து.",
    transliteration: "Aiyattiṉ nīṅkit teḷintārkku vaiyattiṉ\nVāṉam naṇiya tuṭaittu.",
    english: "For those who are freed from doubt and have attained clear vision, heaven is nearer than earth.",
    tamilUrai: "ஐயம் நீங்கி, தெளிந்த ஞானம் அடைந்தவர்களுக்கு, மண்ணுலகத்தை விடவும் வானுலகம் நெருங்கி இருப்பதாக ஆகிவிடும்.",
    altTranslation: "To those from doubt set free, in clear vision blest, Heaven is nearer than earth's home of rest. — Pope"
  },
  {
    num: 354, chapter: 36,
    tamil: "ஐயுணர்வு எய்தியக் கண்ணும் பயமின்றே\nமெய்யுணர்வு இல்லா தவர்க்கு.",
    transliteration: "Aiyuṇarvu eytiyak kaṇṇum payamiṉṟē\nMeyyuṇarvu illā tavarkku.",
    english: "Even complete mastery over the five senses yields no benefit to him who lacks knowledge of truth.",
    tamilUrai: "ஐந்து புலன்களின் அறிவை மேம்பட்ட நிலையில் அடைந்திருந்தாலும், உண்மைப் பொருளை அறியாதவர்க்கு அதனால் பயன் இல்லை.",
    altTranslation: "Though all five senses' mastery be won, Without truth's knowledge, naught of good is done. — Pope"
  },
  {
    num: 355, chapter: 36,
    tamil: "எப்பொருள் எத்தன்மைத் தாயினும் அப்பொருள்\nமெய்ப்பொருள் காண்பது அறிவு.",
    transliteration: "Epporuḷ ettaṉmait tāyiṉum apporuḷ\nMeypporuḷ kāṇpatu aṟivu.",
    english: "To see the true essence of anything, whatever its form or appearance, is true wisdom.",
    tamilUrai: "ஒரு பொருள் எந்தத் தோற்றத்தில், எந்த இயல்பில் இருந்தாலும், அதன் உண்மையான பொருளை (தன்மையை) உணர்ந்து அறிவதே உண்மை அறிவு.",
    altTranslation: "Whate'er appears, in whatsoever guise, To see the real truth of things — that's wise. — Pope"
  },
  {
    num: 356, chapter: 36,
    tamil: "கற்றீண்டு மெய்ப்பொருள் கண்டார் தலைப்படுவர்\nமற்றீண்டு வாரா நெறி.",
    transliteration: "Kaṟṟīṇṭu meypporuḷ kaṇṭār talaippaṭuvar\nMaṟṟīṇṭu vārā neṟi.",
    english: "Those who have learned and found ultimate truth here attain the path from which they return no more.",
    tamilUrai: "இம்மையில் கற்று, உண்மைப் பொருளை உணர்ந்தவர்கள், மீண்டும் பிறப்பெடுக்கும் நெறி இல்லாத மேல்நிலையை அடைவர்.",
    altTranslation: "Who learn and find the truth, shall reach that shore Whence they return to birth and death no more. — Pope"
  },
  {
    num: 357, chapter: 36,
    tamil: "ஓர்த்துள்ளம் உள்ளது உணரின் ஒருதலையாப்\nபேர்த்துள்ள வேண்டா பிறப்பு.",
    transliteration: "Ōrttuḷḷam uḷḷatu uṇariṉ orutalaiyāp\nPērttuḷḷa vēṇṭā piṟappu.",
    english: "If the heart, pondering, grasps the real, certainly there need be no more thought of rebirth.",
    tamilUrai: "மனம் ஆராய்ந்து, உள்ளவற்றின் உண்மைப் பொருளை உறுதியாக உணர்ந்து கொண்டால், பிறப்பு பற்றிய எண்ணம் வேண்டியதில்லை.",
    altTranslation: "Let the heart by searching grasp what really is; Then shall no further birth its thought dismiss. — Pope"
  },
  {
    num: 358, chapter: 36,
    tamil: "பிறப்பென்னும் பேதைமை நீங்கச் சிறப்பென்னும்\nசெம்பொருள் காண்பது அறிவு.",
    transliteration: "Piṟappeṉṉum pētaimai nīṅkac ciṟappeṉṉum\nCemporuḷ kāṇpatu aṟivu.",
    english: "Real wisdom is to banish the folly of rebirth and see the exalted real truth.",
    tamilUrai: "பிறப்பு என்னும் அறியாமை நீங்கி, மேலான நிலை எனப்படும் உண்மைப் பொருளை உணர்வதே சிறந்த அறிவாகும்.",
    altTranslation: "True wisdom is to cast away the folly of birth's chain, And see the reality supreme that e'er doth reign. — Pope"
  },
  {
    num: 359, chapter: 36,
    tamil: "சார்புணர்ந்து சார்பு கெடஒழுகின் மற்றழித்துச்\nசார்தரா சார்தரு நோய்.",
    transliteration: "Cārpuṇarntu cārpu keṭaoḻukiṉ maṟṟaḻittuc\nCārtarā cārtaru nōy.",
    english: "He who, having understood attachment, lives to destroy attachment, will not suffer afflictions that cling from attachments.",
    tamilUrai: "பற்றாகிய சார்பை அறிந்து, அந்த சார்பு அழியும்படி வாழ்வதால், பற்றினால் வருகின்ற துன்பங்கள் எவையும் இனி அவனை சாராது.",
    altTranslation: "Who, knowing what attachment is, doth live to quench its flame, Ills that cling through bonds no more shall in his life proclaim. — Pope"
  },
  {
    num: 360, chapter: 36,
    tamil: "காமம் வெகுளி மயக்கம் இவைமூன்றன்\nநாமம் கெடக்கெடும் நோய்.",
    transliteration: "Kāmam vekuḷi mayakkam ivaimūṉṟaṉ\nNāmam keṭakkeṭum nōy.",
    english: "When even the names of the three — desire, anger, and delusion — perish, then all suffering perishes with them.",
    tamilUrai: "காமம், சினம், மயக்கம் என்ற மூன்றின் பெயரே அழிந்தால், துன்பங்கள் எல்லாம் தாமாகவே அழிந்து விடும்.",
    altTranslation: "When name of lust, of wrath, of mind's delusion-chain Dies out, — with these dies every grief and pain. — Pope"
  },

  // CHAPTER 37 — The Extirpation of Desire
  {
    num: 361, chapter: 37,
    tamil: "அவாஎன்ப எல்லா உயிர்க்கும் எஞ்ஞான்றும்\nதவாஅப் பிறப்பீனும் வித்து.",
    transliteration: "Avāeṉpa ellā uyirkkum eññāṉṟum\nTavāap piṟappīṉum vittu.",
    english: "Desire, it is said, is the unfailing seed from which rebirth springs for all living beings, at all times.",
    tamilUrai: "எல்லா உயிர்களுக்கும், எல்லாக் காலத்திலும் தவறாது பிறப்பை விளைவிக்கும் விதையே ஆசையாகும் என்று சான்றோர் கூறுவர்.",
    altTranslation: "Desire, the sages say, is the never-failing seed To all the living things that endless birth must breed. — Pope"
  },
  {
    num: 362, chapter: 37,
    tamil: "வேண்டுங்கால் வேண்டும் பிறவாமை மற்றது\nவேண்டாமை வேண்ட வரும்.",
    transliteration: "Vēṇṭuṅkāl vēṇṭum piṟavāmai maṟṟatu\nVēṇṭāmai vēṇṭa varum.",
    english: "If you must desire, desire freedom from rebirth; that comes when you desire to desire nothing.",
    tamilUrai: "விருப்பம் கொள்ள வேண்டியது பிறவியற்ற நிலையையே; அந்த நிலை, எதையும் விரும்பாமை என்பதை விரும்பினால் தான் வரும்.",
    altTranslation: "If thou must long, long for no more rebirth; that is gained When the longing itself is in longing unchained. — Pope"
  },
  {
    num: 363, chapter: 37,
    tamil: "வேண்டாமை அன்ன விழுச்செல்வம் ஈண்டில்லை\nஆண்டும் அஃதொப்பது இல்.",
    transliteration: "Vēṇṭāmai aṉṉa viḻucchelvam īṇṭillai\nĀṇṭum aḵtoppatu il.",
    english: "No wealth equal to desirelessness exists here; nor is there its like in the world hereafter.",
    tamilUrai: "விருப்பமின்மை (வேண்டாமை) என்ற சிறந்த செல்வம் போன்றது இம்மையிலும் இல்லை; மறுமையிலும் இல்லை.",
    altTranslation: "No wealth like unto wantlessness is here or there; None equal in its value anywhere. — Pope"
  },
  {
    num: 364, chapter: 37,
    tamil: "தூஉய்மை என்பது அவாவின்மை மற்றது\nவாஅய்மை வேண்ட வரும்.",
    transliteration: "Tūuymai eṉpatu avāviṉmai maṟṟatu\nVāaymai vēṇṭa varum.",
    english: "Purity is but freedom from desire, and that comes only through the love of truth.",
    tamilUrai: "பரிசுத்தம் என்று சொல்லப்படுவது ஆசையற்ற நிலையே; அந்த நிலை வாய்மையை விரும்பும் போதே கிட்டும்.",
    altTranslation: "Purity is freedom from all longing's stain; That freedom truth alone in heart can gain. — Pope"
  },
  {
    num: 365, chapter: 37,
    tamil: "அற்றவர் என்பார் அவாஅற்றார் மற்றையார்\nஅற்றாக அற்றது இலர்.",
    transliteration: "Aṟṟavar eṉpār avāaṟṟār maṟṟaiyār\nAṟṟāka aṟṟatu ilar.",
    english: "Those truly free are those free from desire; all others are not truly free.",
    tamilUrai: "துறவிகள் எனப்படுவோர், ஆசையை முழுமையாய் விட்டவர்களே; மற்றவர்கள் முழுமையாய் எதையும் விட்டவர்கள் ஆகார்.",
    altTranslation: "Free are the free from desire indeed; The rest are bound, though they claim to be freed. — Pope"
  },
  {
    num: 366, chapter: 37,
    tamil: "அஞ்சுவ தோரும் அறனே ஒருவனை\nவஞ்சிப்ப தோரும் அவா.",
    transliteration: "Añcuva tōrum aṟaṉē oruvaṉai\nVañcippa tōrum avā.",
    english: "The virtue of a man is to fear desire; for desire is that which deceives him.",
    tamilUrai: "ஒருவன் அறம் செய்யவேண்டுமென்றால், ஆசையை அஞ்ச வேண்டும்; ஆசையே அவனை வஞ்சிக்கக் கூடியது.",
    altTranslation: "To fear desire — true virtue that doth show; That same desire to man works woe. — Pope"
  },
  {
    num: 367, chapter: 37,
    tamil: "அவாவினை ஆற்ற அறுப்பின் தவாவினை\nதான்வேண்டு மாற்றான் வரும்.",
    transliteration: "Avāviṉai āṟṟa aṟuppiṉ tavāviṉai\nTāṉvēṇṭu māṟṟāṉ varum.",
    english: "If a man cuts off desire with might, the imperishable good will come to him as he wishes.",
    tamilUrai: "ஆசையை வலிமையுடன் அறுத்துவிட்டால், அழியாத நற்செயல்களின் பலன் ஒருவன் விரும்பிய வழியில் தானாகவே வந்து சேரும்.",
    altTranslation: "Who cuts desire away with a strong hand's stroke, Wins the eternal good as his heart may invoke. — Pope"
  },
  {
    num: 368, chapter: 37,
    tamil: "அவாஇல்லார்க் கில்லாகுந் துன்பம் அஃதுண்டேல்\nதவாஅது மேன்மேல் வரும்.",
    transliteration: "Avāillārk killākun tuṉpam aḵtuṇṭēl\ntavāatu mēṉmēl varum.",
    english: "Those without desire are without grief; but where desire is, grief comes endlessly and grows ever.",
    tamilUrai: "ஆசை இல்லாதவர்களுக்கு துன்பம் இல்லை; ஆசை இருந்தால், துன்பம் தவறாது, மேலும் மேலும் பெருகிப் பெருகி வந்துகொண்டே இருக்கும்.",
    altTranslation: "No grief for those from all desire set free; Where longing is, grief swells in endless sea. — Pope"
  },
  {
    num: 369, chapter: 37,
    tamil: "இன்பம் இடையறாது ஈண்டும் அவாவென்னும்\nதுன்பத்துள் துன்பம் கெடின்.",
    transliteration: "Iṉpam iṭaiyaṟātu īṇṭum avāveṉṉum\nTuṉpattuḷ tuṉpam keṭiṉ.",
    english: "When the bitterest grief of all — desire — is cut away, unbroken joy flows on this earth.",
    tamilUrai: "துன்பங்களுள் மிகுந்த துன்பமாகிய ஆசை அழியுமென்றால், இவ்வுலகத்தில் இடையறாத இன்பம் தொடர்ந்து வரும்.",
    altTranslation: "When longing, grief of griefs, is done away, Unbroken bliss pours down by night and day. — Pope"
  },
  {
    num: 370, chapter: 37,
    tamil: "ஆராஇ யற்கை அவாநீப்பின் அந்நிலையே\nபேராஇ யற்கை தரும்.",
    transliteration: "Ārāi yaṟkai avānīppiṉ anniḻaiyē\nPērāi yaṟkai tarum.",
    english: "If he renounces desire, whose nature is never to be satisfied, he shall at once gain the unchanging happy state.",
    tamilUrai: "எப்போதும் நிரம்பாத இயல்பை உடைய ஆசையைத் துறந்தால், உடனே, மாறாத தன்மையுடைய மேன்மை நிலை அவனுக்கு வந்து சேரும்.",
    altTranslation: "Renounce insatiate desire, and thou shalt gain Unchanging bliss, in its stead to reign. — Pope"
  },

  // CHAPTER 38 — Fate
  {
    num: 371, chapter: 38,
    tamil: "ஆகூழால் தோன்றும் அசைவின்மை கைப்பொருள்\nபோகூழால் தோன்றும் மடி.",
    transliteration: "Ākūḻāl tōṉṟum acaiviṉmai kaipporuḷ\nPōkūḻāl tōṉṟum maṭi.",
    english: "The energy that gains wealth arises from good fate; and the sloth that loses it arises from bad fate.",
    tamilUrai: "செல்வம் கிட்டும் ஊழ் இருந்தால் ஒருவனுக்கு, வாழ்வில் சோர்வின்மையும் ஊக்கமும் தோன்றும்; செல்வம் விலகும் ஊழ் இருந்தால், சோம்பல் தோன்றும்.",
    altTranslation: "Good fate's approach kindles zeal's bright flame; Ill fate brings sloth to overcome the same. — Pope"
  },
  {
    num: 372, chapter: 38,
    tamil: "பேதைப் படுக்கும் இழவூழ் அறிவகற்றும்\nஆகலூழ் உற்றக் கடை.",
    transliteration: "Pētaip paṭukkum iḻavūḻ aṟivakaṟṟum\nĀkalūḻ uṟṟak kaṭai.",
    english: "Bad fate makes men fools; good fate, when it comes, brings out their wisdom.",
    tamilUrai: "இழப்புள்ள ஊழ், ஒருவனை மடமை அடையச் செய்யும்; ஆக்கம் பெறும் ஊழ் வந்தால், அறிவு விரிந்து பெருகும்.",
    altTranslation: "Ill fate makes fools; when good fate shows its face, Wisdom grows wider, knowing place from place. — Pope"
  },
  {
    num: 373, chapter: 38,
    tamil: "நுண்ணிய நூல்பல கற்பினும் மற்றும்தன்\nஉண்மை அறிவே மிகும்.",
    transliteration: "Nuṇṇiya nūlpala kaṟpiṉum maṟṟumtaṉ\nUṇmai aṟivē mikum.",
    english: "Though one may learn many subtle books, yet his own natural understanding will still prevail.",
    tamilUrai: "எத்தனை நுட்பமான நூல்களைக் கற்றாலும், ஒருவன் பிறக்கும்போதே கொண்டு வந்த உண்மையான (ஊழ் வாய்ந்த) அறிவே அவனது வாழ்வில் மேலோங்கி நிற்கும்.",
    altTranslation: "Though many a subtle book he may have read, His native wit still holds its sov'reign head. — Pope"
  },
  {
    num: 374, chapter: 38,
    tamil: "இருவேறு உலகத்து இயற்கை திருவேறு\nதெள்ளிய ராதலும் வேறு.",
    transliteration: "Iruvēṟu ulakattu iyaṟkai tiruvēṟu\nTeḷḷiya rātalum vēṟu.",
    english: "The nature of this world is of two different kinds — wealth is one thing, and clear wisdom is another.",
    tamilUrai: "உலகில் இரு வேறுபட்ட இயல்புகள் உள்ளன — செல்வம் வருதல் ஒன்று, தெளிவான அறிவு உருவாதல் வேறு; இரண்டும் வெவ்வேறு ஊழ்களால் கிட்டும்.",
    altTranslation: "Two natures in this world — gain's coming is one; And clear discernment is another, differing from that. — Pope"
  },
  {
    num: 375, chapter: 38,
    tamil: "நல்லவை எல்லாஅந் தீயவாம் தீயவும்\nநல்லவாம் செல்வம் செயற்கு.",
    transliteration: "Nallavai ellāan tīyavām tīyavum\nNallavām celvam ceyaṟku.",
    english: "In gaining wealth, all that seemed good may turn to evil, and what seemed evil may turn to good.",
    tamilUrai: "செல்வத்தை ஈட்டும் முயற்சியில், நல்லன என்று எண்ணப்பட்ட எல்லா வழிகளும் தீயனவாக மாறலாம்; தீயன என்று எண்ணப்பட்டவை நல்லனவாக மாறலாம். (ஊழின் விளையாட்டு).",
    altTranslation: "Good things turn ill, and ill things turn to good In wealth's attainment, as fate wills in every mood. — Pope"
  },
  {
    num: 376, chapter: 38,
    tamil: "பரியினும் ஆகாவாம் பாலல்ல உய்த்துச்\nசொரியினும் போகா தம.",
    transliteration: "Pariyiṉum ākāvām pālalla uyttuc\nCoriyiṉum pōkā tama.",
    english: "What is not destined to be one's own cannot be kept, however guarded; what is destined to be one's own cannot be lost, however tried.",
    tamilUrai: "ஊழ் வாய்க்காததைக் கடுமையாய் பாதுகாத்தாலும் தங்காது; ஊழ் வாய்த்ததை எவ்வளவு எடுத்துக் கொட்டினாலும் நீங்காது.",
    altTranslation: "What fate decrees not mine, naught can me assign; What fate decrees mine, naught can displace or pine. — Pope"
  },
  {
    num: 377, chapter: 38,
    tamil: "வகுத்தான் வகுத்த வகையல்லால் கோடி\nதொகுத்தார்க்கும் துய்த்தல் அரிது.",
    transliteration: "Vakuttāṉ vakutta vakaiyallāl kōṭi\nTokuttārkkum tuyttal aritu.",
    english: "Even he who has piled up crores cannot enjoy them beyond what is allotted by the divider of lots.",
    tamilUrai: "ஊழ் என்னும் வகுப்பவன் வகுத்த அளவுக்கு மேலாக, கோடி கோடியாகச் செல்வத்தை சேர்த்தவர்களும் அனுபவிக்க இயலாது.",
    altTranslation: "Though one should heap up crores of wealth at will, He cannot taste beyond what fate's decree doth fill. — Pope"
  },
  {
    num: 378, chapter: 38,
    tamil: "துறப்பார்மன் துப்புரவு இல்லார் உறற்பால\nஊட்டா கழியு மெனின்.",
    transliteration: "Tuṟappārmaṉ tuppuravu illār uṟaṟpāla\nŪṭṭā kaḻiyu meṉiṉ.",
    english: "Even the destitute would renounce the world, if fate did not bring them the sufferings they are doomed to endure.",
    tamilUrai: "ஏற்கனவே எதுவும் இல்லாதவர்கள், உண்மையில் துறவியர் ஆகியிருப்பர் — ஊழால் அவர்கள் அனுபவிக்க வேண்டிய துன்பங்களை வாழ்ந்து முடிக்க வேண்டியதில்லை என்றால்.",
    altTranslation: "The poor would all renounce the world at once, If fate decreed not the sufferings they must face. — Pope"
  },
  {
    num: 379, chapter: 38,
    tamil: "நன்றாங்கால் நல்லவாக் காண்பவர் அன்றாங்கால்\nஅல்லற் படுவ தெவன்.",
    transliteration: "Naṉṟāṅkāl nallavāk kāṇpavar aṉṟāṅkāl\nAllaṟ paṭuva tevaṉ.",
    english: "Those who see good when good comes — why should they suffer when evil comes, since both come from fate?",
    tamilUrai: "நல்ல காலம் வரும்போது அதை நல்லதாக ஏற்பவர், துன்ப காலம் வரும்போது ஏன் வருந்த வேண்டும்? இரண்டும் ஊழின் கூறுகளே.",
    altTranslation: "Who greet good fortune well, when ill befalls, Why should they grieve — since fate the both installs? — Pope"
  },
  {
    num: 380, chapter: 38,
    tamil: "ஊழிற் பெருவலி யாவுள மற்றொன்று\nசூழினுந் தான்முந் துறும்.",
    transliteration: "Ūḻiṟ peruvali yāvuḷa maṟṟoṉṟu\nCūḻiṉun tāṉmun tuṟum.",
    english: "What is stronger than fate? Plan what you will, fate arrives first.",
    tamilUrai: "ஊழினை விட பெரும் வலிமை உடையது யாது? ஊழுக்கு எதிராக ஒன்றை சிந்தித்தாலும், ஊழே முன்னரே வந்துவிடும்.",
    altTranslation: "What force is mightier than fate? Devise what'er thou may — Fate, ere thou dost, shall lead and have its sway. — Pope"
  },

  // CHAPTER 39 — The Greatness of a King
  {
    num: 381, chapter: 39,
    tamil: "படைகுடி கூழ்அமைச்சு நட்பரண் ஆறும்\nஉடையான் அரசருள் ஏறு.",
    transliteration: "Paṭaikuṭi kūḻamaiccu naṭparaṇ āṟum\nUṭaiyāṉ aracaruḷ ēṟu.",
    english: "He who possesses these six — army, subjects, wealth, ministers, allies, and forts — is a lion among kings.",
    tamilUrai: "படை, குடிமக்கள், செல்வம், அமைச்சர், நட்புரிமை, அரண் ஆகிய ஆறு உறுப்புகளை உடையவனே மன்னர்களில் சிங்கம் போன்ற தலைவனாவான்.",
    altTranslation: "An army, subjects, wealth, a minister, friends, and fort — these six Who owns, stands lion-like mid kings who hold their realms. — Pope"
  },
  {
    num: 382, chapter: 39,
    tamil: "அஞ்சாமை ஈகை அறிவூக்கம் இந்நான்கும்\nஎஞ்சாமை வேந்தற்கு இயல்பு.",
    transliteration: "Añcāmai īkai aṟivūkkam innāṉkum\nEñcāmai vēntaṟku iyalpu.",
    english: "Fearlessness, generosity, wisdom, and energy — these four, never failing, are the natural qualities of a king.",
    tamilUrai: "அச்சமின்மை, ஈகை, அறிவு, ஊக்கம் ஆகிய நான்கு குணங்களும் குறைவுபடாமல் இருப்பதே ஒரு மன்னனுக்கு இயல்பான பண்புகளாகும்.",
    altTranslation: "Courage, liberality, wisdom, energetic will — these four Unfailing, mark the monarch's proper lore. — Pope"
  },
  {
    num: 383, chapter: 39,
    tamil: "தூங்காமை கல்வி துணிவுடைமை இம்மூன்றும்\nநீங்கா நிலனாள் பவற்கு.",
    transliteration: "Tūṅkāmai kalvi tuṇivuṭaimai immūṉṟum\nNīṅkā nilaṉāḷ pavaṟku.",
    english: "Vigilance, learning, and resolution — these three must never depart from him who rules the land.",
    tamilUrai: "சோம்பாத விழிப்புணர்வு, கல்வி, துணிவு — இம்மூன்றும் நிலவுலகை ஆள்பவனை விட்டு நீங்கா இருக்க வேண்டும்.",
    altTranslation: "Vigilance, learning, bravery of soul — these three, Who rules the earth, must ne'er from him depart and flee. — Pope"
  },
  {
    num: 384, chapter: 39,
    tamil: "அறன்இழுக்கா தல்லவை நீக்கி மறனிழுக்கா\nமானம் உடையது அரசு.",
    transliteration: "Aṟaṉiḻukkā tallavai nīkki maṟaṉiḻukkā\nMāṉam uṭaiyatu aracu.",
    english: "True kingship swerves not from virtue, removes evils, never flinches in valour, and holds honour firm.",
    tamilUrai: "அறநெறியில் இருந்து வழுவாமல், தீமைகளை நீக்கி, வீரத்தில் சிறிதும் குறைவுபடாமல், மானத்துடன் ஆட்சி செய்வதே உண்மையான அரசாட்சி.",
    altTranslation: "Swerving not from right, removing wrong, unshaken in the fight, With honour's keen sense kingship upholds its might. — Pope"
  },
  {
    num: 385, chapter: 39,
    tamil: "இயற்றலும் ஈட்டலுங் காத்தலும் காத்த\nவகுத்தலும் வல்ல தரசு.",
    transliteration: "Iyaṟṟalum īṭṭaluṅ kāttalum kātta\nvakuttalum valla taracu.",
    english: "A true king is one who is able to produce, accumulate, protect, and wisely distribute wealth.",
    tamilUrai: "செல்வத்தை உருவாக்கி, ஈட்டி, காத்து, காத்துப்பின் முறையாக பிரித்து அளிப்பதில் ஆற்றல் உள்ளவனே உண்மையான அரசன்.",
    altTranslation: "To make, to gather, to guard, and rightly use the gain, These four — they mark the king who knows true reign. — Pope"
  },
  {
    num: 386, chapter: 39,
    tamil: "காட்சிக்கு எளியன் கடுஞ்சொல்லன் அல்லனேல்\nமீக்கூறும் மன்னன் நிலம்.",
    transliteration: "Kāṭcikku eḷiyaṉ kaṭuñcollaṉ allaṉēl\nMīkkūṟum maṉṉaṉ nilam.",
    english: "The land of the king who is accessible to see and never harsh in speech will be spoken of with praise throughout the world.",
    tamilUrai: "மக்கள் எளிதில் அடைந்து காண இயலும் நிலையில் இருந்து, கடுஞ்சொல் கூறாத அரசனின் நாடு, உலகத்தால் மேலானது என்று போற்றப்படும்.",
    altTranslation: "The king approachable, whose words are never harsh, His land throughout the world in honour's ranks shall march. — Pope"
  },
  {
    num: 387, chapter: 39,
    tamil: "இன்சொலால் ஈத்தளிக்க வல்லார்க்குத் தன்சொலால்\nதான்கண் டனைத்திவ் வுலகு.",
    transliteration: "Iṉcolāl īttaḷikka vallārkkut taṉcolāl\nTāṉkaṇ ṭaṉaittiv vulaku.",
    english: "The whole world bends to the sway of one who, with sweet words, can give and protect.",
    tamilUrai: "இனிய சொற்களுடன் ஈந்து, காத்தாள வல்லமை உடையவருக்கு, இந்த உலகமே தாம் விரும்பியபடி விளங்கும்.",
    altTranslation: "To him who sweet of speech bestows and well protects, The world shall yield unto his word in all respects. — Pope"
  },
  {
    num: 388, chapter: 39,
    tamil: "முறைசெய்து காப்பாற்றும் மன்னவன் மக்கட்கு\nஇறையென்று வைக்கப் படும்.",
    transliteration: "Muṟaiceytu kāppāṟṟum maṉṉavaṉ makkaṭku\nIṟaiyeṉṟu vaikkap paṭum.",
    english: "The king who rules with justice and protects his people is set above them as a god.",
    tamilUrai: "நடுநிலைமையுடன் முறையாக ஆட்சி செய்து, மக்களைக் காக்கின்ற அரசன், மக்களால் தெய்வமாகவே மதிக்கப்படுவான்.",
    altTranslation: "The king who rules with justice and protects the land, As god among his people takes his noble stand. — Pope"
  },
  {
    num: 389, chapter: 39,
    tamil: "செவிகைப்பச் சொற்பொறுக்கும் பண்புடை வேந்தன்\nகவிகைக்கீழ்த் தங்கும் உலகு.",
    transliteration: "Cevikaippac coṟpoṟukkum paṇpuṭai vēntaṉ\nKavikaikkīḻt taṅkum ulaku.",
    english: "The world rests under the royal parasol of the king who can bear even bitter counsel with patience.",
    tamilUrai: "செவிக்கு கசப்பாகத் தோன்றும் அறிவுரைகளையும் பொறுத்துக் கொள்ளும் பண்புடைய அரசனின் குடை நிழலில் உலகம் நிலையாகத் தங்கி இருக்கும்.",
    altTranslation: "Beneath the monarch's sheltering parasol the world finds rest, Who bears with patience words that even as bitter test. — Pope"
  },
  {
    num: 390, chapter: 39,
    tamil: "கொடையளி செங்கோல் குடியோம்பல் நான்கும்\nஉடையானாம் வேந்தர்க் கொளி.",
    transliteration: "Koṭaiyaḷi ceṅkōl kuṭiyōmpal nāṉkum\nUṭaiyāṉām vēntark koḷi.",
    english: "He who possesses the four — bounty, grace, righteous sceptre, and care of subjects — is a light among kings.",
    tamilUrai: "ஈகை, கருணை, நேர்மையான ஆட்சி, குடிமக்களைப் பேணல் — இந்த நான்கையும் உடையவனே மன்னர்களுக்குள் ஒளிரும் சிறப்பு.",
    altTranslation: "Gifts, grace, a righteous sceptre, care for subjects' weal — These four he has, who shines among kings with kingly zeal. — Pope"
  },

  // CHAPTER 40 — Learning
  {
    num: 391, chapter: 40,
    tamil: "கற்க கசடறக் கற்பவை கற்றபின்\nநிற்க அதற்குத் தக.",
    transliteration: "Kaṟka kacaṭaṟak kaṟpavai kaṟṟapiṉ\nNiṟka ataṟkut taka.",
    english: "Let a man learn thoroughly whatever is worth learning, and then let him live in conformity with that learning.",
    tamilUrai: "கற்க வேண்டியவற்றைக் குற்றமின்றி நன்கு கற்க வேண்டும்; கற்ற பிறகு, அக் கல்விக்குத் தக்கபடி ஒழுக வேண்டும்.",
    altTranslation: "So learn that you may full and faultless learning gain, Then in obedience meet to lessons learnt remain. — Pope"
  },
  {
    num: 392, chapter: 40,
    tamil: "எண்என்ப ஏனை எழுத்தென்ப இவ்விரண்டும்\nகண்என்ப வாழும் உயிர்க்கு.",
    transliteration: "Eṇeṉpa ēṉai eḻutteṉpa ivviraṇṭum\nKaṇeṉpa vāḻum uyirkku.",
    english: "Numbers and letters — these two are called the eyes of the living.",
    tamilUrai: "எண் எனப்படுவதும், எழுத்து எனப்படுவதும் ஆகிய இவ்விரண்டுமே வாழ்கின்ற மக்களுக்குக் கண் போன்றவை.",
    altTranslation: "Letters and numbers twain, of all the lore we learn, Are eyes, the wise declare, to every human born. — Pope"
  },
  {
    num: 393, chapter: 40,
    tamil: "கண்ணுடையர் என்பவர் கற்றோர் முகத்திரண்டு\nபுண்ணுடையர் கல்லா தவர்.",
    transliteration: "Kaṇṇuṭaiyar eṉpavar kaṟṟōr mukattiraṇṭu\nPuṇṇuṭaiyar kallā tavar.",
    english: "Only the learned truly have eyes; the unlearned carry two sores on their faces.",
    tamilUrai: "கற்றவர்களே 'கண்ணுடையவர்' என்று சொல்லப்படுவர்; கல்லாதவர்கள் முகத்தில் இருப்பன கண்கள் அல்ல, இரண்டு புண்களே ஆம்.",
    altTranslation: "Men of learning alone have eyes; unlearned men's face Has but two sores in place of eyes' sightful grace. — Pope"
  },
  {
    num: 394, chapter: 40,
    tamil: "உவப்பத் தலைக்கூடி உள்ளப் பிரிதல்\nஅனைத்தே புலவர் தொழில்.",
    transliteration: "Uvappat talaikkūṭi uḷḷap pirital\naṉaittē pulavar toḻil.",
    english: "To meet with delight and part with lingering thought — that is the work of the learned.",
    tamilUrai: "சந்திக்கும்போது மகிழ்ச்சியூட்டி, பிரிந்த பின்பும் நினைக்கத்தக்க வகையில் விட்டுச் செல்வதே கற்றவர்களின் தன்மை.",
    altTranslation: "To meet with joy, and at parting leave thought to linger still, So do the learned part and meet, — 'tis their due skill. — Pope"
  },
  {
    num: 395, chapter: 40,
    tamil: "உடையார்முன் இல்லாதார் போல ஏக்கற்றுங்\nகற்றார் கனிய கலம்.",
    transliteration: "Uṭaiyārmuṉ illātār pōla ēkkaṟṟuṅ\nKaṟṟār kaṉiya kalam.",
    english: "Those who humble themselves like the poor before the rich, and learn with longing, are truly cultured.",
    tamilUrai: "செல்வந்தர்களின் முன்னிலையில் வறியவர் நிற்பது போல, தம்முடைய அறிவைக் காட்டாமல் தாழ்ந்து, ஏக்கத்துடன் பணிவோடு கற்பவர்களே சிறந்த கல்வியாளர்.",
    altTranslation: "As poor men before the rich, the learners humble bow; With longing they learn — true culture doth endow. — Pope"
  },
  {
    num: 396, chapter: 40,
    tamil: "தொட்டனைத் தூறும் மணற்கேணி மாந்தர்க்குக்\nகற்றனைத் தூறும் அறிவு.",
    transliteration: "Toṭṭaṉait tūṟum maṇaṟkēṇi māntarkkuk\nKaṟṟaṉait tūṟum aṟivu.",
    english: "As water springs from a sand-well the deeper one digs, so wisdom flows for men in proportion to their learning.",
    tamilUrai: "மணலில் அமைந்த கேணியில், தோண்டுகின்ற ஆழத்திற்கு ஏற்றவாறு நீர் ஊறுகிறது; அதுபோல, ஒருவர் கற்கும் அளவிற்கு அவரது அறிவு பெருகும்.",
    altTranslation: "As water's spring in sandy well to depth of digging flows, So knowledge flows in man as deep as he in learning goes. — Pope"
  },
  {
    num: 397, chapter: 40,
    tamil: "யாதானும் நாடாமால் ஊராமால் என்னொருவன்\nசாந்துணையுங் கல்லாத வாறு.",
    transliteration: "Yātāṉum nāṭāmāl ūrāmāl eṉṉoruvaṉ\nCāntuṇaiyuṅ kallāta vāṟu.",
    english: "To the learned, every land is his land, every town his town — why then does one not learn until death?",
    tamilUrai: "கற்றவனுக்கு எந்த நாடும், எந்த ஊரும் தனதாகவே இருக்கும் என்றிருக்க, ஏன் ஒருவன் மரணம் வரை தொடர்ந்து கற்காமல் இருக்க வேண்டும்?",
    altTranslation: "To learned men all lands are theirs, all towns their home; Why then should any till death's hour unlearned roam? — Pope"
  },
  {
    num: 398, chapter: 40,
    tamil: "ஒருமைக்கண் தான்கற்ற கல்வி ஒருவற்கு\nஎழுமையும் ஏமாப் புடைத்து.",
    transliteration: "Orumaikkaṇ tāṉkaṟṟa kalvi oruvaṟku\nEḻumaiyum ēmāp puṭaittu.",
    english: "The learning one gains in a single birth will stand as a defence through all seven births.",
    tamilUrai: "ஒரு பிறவியில் ஒருவன் கற்ற கல்வி, அவனுக்கு ஏழு பிறவிகளிலும் பாதுகாப்பான துணையாகத் திகழும்.",
    altTranslation: "Learning one gains in single birth, shall sure defence afford, Through all the seven successive births — a lasting ward. — Pope"
  },
  {
    num: 399, chapter: 40,
    tamil: "தாமின் புறுவது உலகின் புறக்கண்டு\nகாமுறுவர் கற்றறிந் தார்.",
    transliteration: "Tāmiṉ puṟuvatu ulakiṉ puṟakkaṇṭu\nKāmuṟuvar kaṟṟaṟin tār.",
    english: "Seeing that the world rejoices in what gives them joy, the learned love learning ever more.",
    tamilUrai: "தமக்கு இன்பம் தருகின்ற கல்வி, உலகத்தாருக்கும் இன்பம் தருவதாக உள்ளதைக் கண்டு, கற்றவர்கள் கல்வியை இன்னும் விரும்புவர்.",
    altTranslation: "Seeing their joy spread happiness through all mankind, The learned love their learning — more than heart can find. — Pope"
  },
  {
    num: 400, chapter: 40,
    tamil: "கேடில் விழுச்செல்வம் கல்வி யொருவற்கு\nமாடல்ல மற்றை யவை.",
    transliteration: "Kēṭil viḻucchelvam kalvi yoruvaṟku\nMāṭalla maṟṟai yavai.",
    english: "Learning is the true imperishable wealth; all other things are not wealth at all.",
    tamilUrai: "ஒருவனுக்கு அழிவில்லாத சிறந்த செல்வம் கல்வியே ஆகும்; மற்ற செல்வங்கள் உண்மையான செல்வம் அல்ல.",
    altTranslation: "Learning is excellence of wealth that none destroy; To man nought else affords reality of joy. — Pope"
  },

  // CHAPTER 41 — Ignorance
  {
    num: 401, chapter: 41,
    tamil: "அரங்கின்றி வட்டாடி யற்றே நிரம்பிய\nநூலின்றிக் கோட்டி கொளல்.",
    transliteration: "Araṅkiṉṟi vaṭṭāṭi yaṟṟē nirampiya\nNūliṉṟik kōṭṭi koḷal.",
    english: "To speak in a learned assembly without thorough learning is like playing dice without a board.",
    tamilUrai: "ஆடுகளத்தை அமைக்காமல் வட்டு ஆடுவது எத்தன்மையதோ, அத்தன்மையதே நிறைந்த நூலறிவு இல்லாமல் அறிஞர்களின் அவையில் பேசத் தொடங்குவது.",
    altTranslation: "To speak in learned gatherings with learning incomplete, Is as if dice one plays upon the board unmeet. — Pope"
  },
  {
    num: 402, chapter: 41,
    tamil: "கல்லாதான் சொற்கா முறுதல் முலையிரண்டும்\nஇல்லாதாள் பெண்காமுற் றற்று.",
    transliteration: "Kallātāṉ coṟkā muṟutal mulaiyiraṇṭum\nIllātāḷ peṇkāmuṟ ṟaṟṟu.",
    english: "For the unlearned to long to be heard is like a woman without breasts longing to be loved as a woman.",
    tamilUrai: "கல்லாதவன் தன் சொல் ஏற்கப்பட வேண்டும் என விரும்புவது — ஒரு பெண் தன் பெண்மையின் பூரணத்துவம் இல்லாமலே மகளிர் மரியாதை விரும்புவதற்கு ஒப்பானது.",
    altTranslation: "The unlearned's longing for his words to be received, Is like the maid who, lacking form, would be believed. — Pope"
  },
  {
    num: 403, chapter: 41,
    tamil: "கல்லா தவரும் நனிநல்லர் கற்றார்முன்\nசொல்லா திருக்கப் பெறின்.",
    transliteration: "Kallā tavarum naṉinallar kaṟṟārmuṉ\nCollā tirukkap peṟiṉ.",
    english: "Even the unlearned are highly esteemed, provided they keep silent before the learned.",
    tamilUrai: "கற்றவர்களின் முன்னிலையில் பேசாதிருக்கும் தன்மையைப் பெற்றுவிட்டால், கல்லாதவர்களும் கூட நல்லவர்களாகவே எண்ணப்படுவர்.",
    altTranslation: "The unlearned are yet esteemed good indeed, If in the learned's presence they from speech recede. — Pope"
  },
  {
    num: 404, chapter: 41,
    tamil: "கல்லாதான் ஒட்பம் கழியநன் றாயினும்\nகொள்ளார் அறிவுடை யார்.",
    transliteration: "Naṉṟaṟi vāriṟ kayavar tiruvuṭaiyar\nNeñcattu avalam ilar.",
    english: "The ignorant are wealthier than the wise in one respect — they have no anxiety in their hearts.",
    tamilUrai: "நன்மையை அறிந்தவர்களை விட, அறிவில்லாத கீழ்மக்கள் ஒரு விஷயத்தில் செல்வந்தராய் இருக்கின்றனர் — அவர்கள் மனதில் எவ்விதமான கவலையும் இராது.",
    altTranslation: "The baser men than wise are happier in one thing — A care-free heart, untouched by sorrow's sting. — Pope"
  },
  {
    num: 405, chapter: 41,
    tamil: "கல்லா ஒருவன் தகைமை தலைப்பெய்து\nசொல்லாடச் சோர்வு படும்.",
    transliteration: "Kallā oruvaṉ takaimai talaippeytu\nCollāṭac cōrvu paṭum.",
    english: "The apparent ability of an unlearned man collapses the moment he opens his mouth in a learned assembly.",
    tamilUrai: "கற்றவர் அவையில் கல்லாதவன் சொல்ல முயல்கின்ற நேரத்தில், அவனது போலி திறமை அப்படியே வெளிப்பட்டுச் சோர்வடையும்.",
    altTranslation: "The pride of unlearned men appears most proud; But, when they speak with wise, its weakness stands enshrouded. — Pope"
  },
  {
    num: 406, chapter: 41,
    tamil: "உளரென்னும் மாத்திரையர் அல்லால் பயவாக்\nகளரனையர் கல்லா தவர்.",
    transliteration: "Uḷareṉṉum māttiraiyar allāl payavāk\nKaḷaraṉaiyar kallā tavar.",
    english: "The unlearned are no more than barren soil — they exist, but yield nothing.",
    tamilUrai: "\"இருக்கிறார்கள்\" என்று சொல்லும் அளவில் மட்டுமே இருப்பவர்களாய், பயன்படாத உவர் நிலத்திற்கு ஒப்பாகவே கல்லாதவர்கள் திகழ்கின்றனர்.",
    altTranslation: "The unlearned are as the barren land — they only live To say 'We are,' but no fruit their being give. — Pope"
  },
  {
    num: 407, chapter: 41,
    tamil: "நுண்மாண் நுழைபுலம் இல்லான் எழில்நலம்\nமண்மாண் புனைபாவை யற்று.",
    transliteration: "Nuṇmāṇ nuḻaipulam illāṉ eḻilnalam\nMaṇmāṇ puṉaipāvai yaṟṟu.",
    english: "The beauty of one lacking fine, penetrating wisdom is like a lovely clay doll — attractive but hollow.",
    tamilUrai: "நுட்பமான, அழகுற்ற, ஆழ்ந்த அறிவு இல்லாதவரின் உடலழகு, அழகாக அலங்கரிக்கப்பட்ட களிமண் பொம்மை போன்றதே.",
    altTranslation: "The charm of him in whom no fine, subtle wisdom dwells, Is but a lovely doll of clay without inward spells. — Pope"
  },
  {
    num: 408, chapter: 41,
    tamil: "நல்லார்கண் பட்ட வறுமையின் இன்னாதே\nகல்லார்கண் பட்ட திரு.",
    transliteration: "Nallārkaṇ paṭṭa vaṟumaiyiṉ iṉṉātē\nKallārkaṇ paṭṭa tiru.",
    english: "Wealth in the hands of the unlearned causes more harm than poverty in the hands of the good.",
    tamilUrai: "நல்லவர்களிடம் இருக்கும் வறுமையை விட, கற்காதவர்களிடம் சேரும் செல்வம் உலகிற்குத் துன்பம் தருவதாகும்.",
    altTranslation: "Wealth to unlearned hands — that yields more wretched bane, Than want to those who wisdom's gift retain. — Pope"
  },
  {
    num: 409, chapter: 41,
    tamil: "மேற்பிறந்தா ராயினும் கல்லாதார் கீழ்ப்பிறந்தும்\nகற்றார் அனைத்திலர் பாடு.",
    transliteration: "Mēṟpiṟantā rāyiṉum kallātār kīḻppiṟantum\nKaṟṟār aṉaittilar pāṭu.",
    english: "Though born in high rank, the unlearned do not match in dignity those of humble birth who are learned.",
    tamilUrai: "உயர்ந்த குலத்தில் பிறந்திருந்தாலும், கற்காதவர் — தாழ்ந்த குடியில் பிறந்த கற்றவரின் பெருமைக்கு ஈடாக மாட்டார்.",
    altTranslation: "Though high in birth, unlearned souls do not compare In worth with learned men of even meaner bear. — Pope"
  },
  {
    num: 410, chapter: 41,
    tamil: "விலங்கொடு மக்கள் அனையர் இலங்குநூல்\nகற்றாரோடு ஏனை யவர்.",
    transliteration: "Vilaṅkoṭu makkaḷ aṉaiyar ilaṅkunūl\nKaṟṟārōṭu ēṉai yavar.",
    english: "As beasts differ from men, so the learned differ from the unlearned.",
    tamilUrai: "விலங்குகளும் மக்களும் எவ்வாறு வேறுபட்டு நிற்கின்றனரோ, அதேபோல, பிரகாசமான நூல்களைக் கற்றவர்களும், மற்றவர்களும் வேறுபட்டு நிற்கின்றனர்.",
    altTranslation: "As man from brute in nature differs great and wide, So learned stand from unlearned, upon life's dividing tide. — Pope"
  },

  // CHAPTER 42 — Hearing
  {
    num: 411, chapter: 42,
    tamil: "செல்வத்துட் செல்வம் செவிச்செல்வம் அச்செல்வம்\nசெல்வத்துள் எல்லாம் தலை.",
    transliteration: "Celvattuṭ celvam cevicchelvam accelvam\nCelvattuḷ ellām talai.",
    english: "The wealth of the ear — hearing what is good — is the wealth of wealths, foremost of all.",
    tamilUrai: "செல்வங்களுள் சிறந்த செல்வம் காதால் கேட்டுப் பெறும் செவிச்செல்வம் ஆகும்; அச்செல்வம் எல்லாச் செல்வங்களுக்கும் தலைமையானது.",
    altTranslation: "Of wealths the chief is wealth of hearing wise; That wealth doth over every other wealth uprise. — Pope"
  },
  {
    num: 412, chapter: 42,
    tamil: "செவிக்குஉண வில்லாத போழ்து சிறிது\nவயிற்றுக்கும் ஈயப் படும்.",
    transliteration: "Cevikkuuṇa villāta pōḻtu ciṟitu\nVayiṟṟukkum īyap paṭum.",
    english: "Only when there is no food for the ear is a little given to the stomach.",
    tamilUrai: "காதுக்கு உணவாக கேள்வி ஞானம் கிட்டாத நேரத்தில் மட்டுமே, வயிற்றுக்கும் கொஞ்சம் உணவு கொடுக்கப்படும்.",
    altTranslation: "When food for ear is lacking, then indeed, A little for the body's need is freed. — Pope"
  },
  {
    num: 413, chapter: 42,
    tamil: "செவியுணவிற் கேள்வி யுடையார் அவியுணவின்\nஆன்றா ரோடொப்பர் நிலத்து.",
    transliteration: "Ceviyuṇaviṟ kēḷvi yuṭaiyār aviyuṇaviṉ\nĀṉṟā rōṭoppar nilattu.",
    english: "Those who feast their ears on knowledge are, on earth, the equals of the gods who feed on the fire-offerings.",
    tamilUrai: "செவி வழியாக நூல் கேள்வி என்னும் உணவை ஏற்பவர்கள், யாகத்தில் இட்ட அவி உணவை உண்ணும் தேவர்களுக்கு ஒப்பாய் இந்த உலகில் விளங்குகின்றனர்.",
    altTranslation: "Who feast on learning's word — their ears are filled with food; As gods on fire-gifts, on earth they hold abode. — Pope"
  },
  {
    num: 414, chapter: 42,
    tamil: "கற்றில னாயினும் கேட்க அஃதொருவற்கு\nஒற்கத்தின் ஊற்றாந் துணை.",
    transliteration: "Kaṟṟila ṉāyiṉum kēṭka aḵtoruvaṟku\nOṟkattiṉ ūṟṟān tuṇai.",
    english: "Though a man has not learned, let him hear; that will be a staff in the time of his weakness.",
    tamilUrai: "ஒருவன் நூல்களை கற்றிலதுபோதிலும், கேள்வி ஞானத்தை அடைய வேண்டும்; அது அவனுக்குத் தளர்வு நேரும் காலத்தில் ஊற்று போன்ற துணையாய் அமையும்.",
    altTranslation: "Though he have failed to learn, let him yet list and hear; In time of weakness 'twill be as staff to bear. — Pope"
  },
  {
    num: 415, chapter: 42,
    tamil: "இழுக்கல் உடைஉழிச் சென்று உணர்ந்தார்மாட்டு\nஇக்கல் உடையர் சிலர்.",
    transliteration: "Iḻukkal uṭaiuḻic ceṉṟu uṇarntārmāṭṭu\nIkkal uṭaiyar cilar.",
    english: "As a stick supports one on slippery ground, the words of the wise support us in life's ways.",
    tamilUrai: "வழுக்குகின்ற நிலத்தில் நடக்கும்போது ஊன்றும் கோல் எத்தனைப் பயனுடையதோ, அதே போன்று, அறிந்தவர்களிடம் கற்ற உரை ஒருவன் வாழ்க்கை நடையில் தவறாமைக்கு துணையாய் நிற்கும்.",
    altTranslation: "As staff on slippery path supports the feet that fall, So words of wise in life's rough places serve us all. — Pope"
  },
  {
    num: 416, chapter: 42,
    tamil: "எனைத்தானும் நல்லவை கேட்க அனைத்தானும்\nஆன்ற பெருமை தரும்.",
    transliteration: "Eṉaittāṉum nallavai kēṭka aṉaittāṉum\nĀṉṟa perumai tarum.",
    english: "Hear what is good, however little; even that little will bring great nobility.",
    tamilUrai: "எவ்வளவு சிறிதாக இருந்தாலும், நல்ல உரைகளைக் கேட்க வேண்டும்; அந்த சிறிதளவு கூடப் பெரும் மேன்மையை உண்டாக்கும்.",
    altTranslation: "However small the good we hear, in store 'Twill bring us nobleness of great amore. — Pope"
  },
  {
    num: 417, chapter: 42,
    tamil: "பிழைத்துணர்ந்தும் பேதைமை சொல்லார் இழைத்துணர்ந்த\nகேள்வியர் என்பவர் மாட்டு.",
    transliteration: "Piḻaittuṇarntum pētaimai collār iḻaittuṇarnta\nKēḷviyar eṉpavar māṭṭu.",
    english: "Those who have thoroughly examined what they hear will never speak foolishly, even by mistake.",
    tamilUrai: "கேள்வி அறிவில் ஆழ்ந்தவர்கள் எதையேனும் தவறுதலாக உணர்ந்திருந்தாலும், அறியாமையான வார்த்தைகளை பேச மாட்டார்கள்.",
    altTranslation: "Though somewhat wrongly understood, yet wisdom's lips Ne'er utter folly, known by hearing's strict guide-ships. — Pope"
  },
  {
    num: 418, chapter: 42,
    tamil: "கேட்பினுங் கேளாத் தகையவே கேள்வியால்\nதோட்கப் படாத செவி.",
    transliteration: "Kēṭpiṉuṅ kēḷāt takaiyavē kēḷviyāl\nTōṭkap paṭāta cevi.",
    english: "Ears not trained by hearing wisdom are as if deaf, though they may hear.",
    tamilUrai: "கேள்வியினால் பிளப்பட்டு பயிற்சியுறாத காது, சொற்களைக் கேட்டாலும், அவை கேளாத தன்மையினவாகவே இருக்கும்.",
    altTranslation: "Ears untrained by learning's worth may hear — yet hear they not; As deaf, though sound be there, their work is naught. — Pope"
  },
  {
    num: 419, chapter: 42,
    tamil: "நுணங்கிய கேள்விய ரல்லார் வணங்கிய\nவாயின ராதல் அரிது.",
    transliteration: "Nuṇaṅkiya kēḷviya rallār vaṇaṅkiya\nVāyiṉa rātal aritu.",
    english: "It is hard for those without subtle hearing to have humble speech.",
    tamilUrai: "நுட்பமான கேள்வி ஞானம் இல்லாதவர்க்கு, அடக்கமான சொல்வன்மை அமைதல் அரிது.",
    altTranslation: "Who deep of ear is not can scarce of humble speech be known; A subtle listening shapes the tongue that's gentle grown. — Pope"
  },
  {
    num: 420, chapter: 42,
    tamil: "செவியிற் சுவையுணரா வாயுணர்வின் மாக்கள்\nஅவியினும் வாழினும் என்.",
    transliteration: "Ceviyiṟ cuvaiyuṇarā vāyuṇarviṉ mākkaḷ\nAviyiṉum vāḻiṉum eṉ.",
    english: "Men who know only the taste of the mouth and not the taste of the ear — what matter if they live or die?",
    tamilUrai: "காதால் கேட்டு உணரத் தக்க சுவையை அறியாமல், வாயால் சுவைப்பதில் மட்டும் ஈடுபடும் மக்கள், இறந்தாலும், வாழ்ந்தாலும் ஒன்றே.",
    altTranslation: "Those who the ear's fine savour know not, but of tongue alone, If dead or living be, 'tis much the same, 'tis shown. — Pope"
  },

  // CHAPTER 43 — The Possession of Knowledge
  {
    num: 421, chapter: 43,
    tamil: "அறிவற்றங் காக்குங் கருவி செறுவார்க்கும்\nஉள்ளழிக்க லாகா அரண்.",
    transliteration: "Aṟivaṟṟaṅ kākkuṅ karuvi ceṟuvārkkum\nUḷḷaḻikka lākā araṇ.",
    english: "Wisdom is the weapon that wards off danger; a fort that no enemy within can destroy.",
    tamilUrai: "அறிவு என்பது தனக்கு ஏற்படும் அழிவிலிருந்து காக்கும் கருவி; அது பகைவர்களாலும் உள்ளிருந்து அழிக்கப்பட முடியாத அரண்.",
    altTranslation: "Wisdom is weapon that averts impending harm, A fort no foe can sack with any charm. — Pope"
  },
  {
    num: 422, chapter: 43,
    tamil: "சென்ற இடத்தால் செலவிடாது தீதொரீஇ\nநன்றின்பால் உய்ப்ப தறிவு.",
    transliteration: "Ceṉṟa iṭattāl celaviṭātu tītorīi\nNaṉṟiṉpāl uyppa taṟivu.",
    english: "Wisdom is that which restrains the wandering mind from evil and guides it toward the good.",
    tamilUrai: "மனம் சென்ற வழியில் சென்று சுழல விடாமல், தீமையைத் தவிர்த்து, நன்மையின் பக்கம் அதைச் செலுத்துவதே அறிவு.",
    altTranslation: "Wisdom is that which curbs the mind from every ill, And leads it to the good with steadfast will. — Pope"
  },
  {
    num: 423, chapter: 43,
    tamil: "எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள்\nமெய்ப்பொருள் காண்பது அறிவு.",
    transliteration: "Epporuḷ yāryārvāyk kēṭpiṉum apporuḷ\nMeypporuḷ kāṇpatu aṟivu.",
    english: "Whatever is said, by whomever spoken, to discern the truth in it — that is wisdom.",
    tamilUrai: "எந்தப் பொருள் குறித்தும், யார் சொன்னாலும், அந்தப் பொருளின் உண்மையான தன்மையை ஆராய்ந்து காண்பதே அறிவு ஆகும்.",
    altTranslation: "Whate'er be said, by whomsoever told, The truth whereof to see — that's wisdom's gold. — Pope"
  },
  {
    num: 424, chapter: 43,
    tamil: "எண்பொருள வாகச் செலச்சொல்லித் தான்பிறர்வாய்\nநுண்பொருள் காண்ப தறிவு.",
    transliteration: "Eṇporuḷa vākac celaccollit tāṉpiṟarvāy\nNuṇporuḷ kāṇpa taṟivu.",
    english: "To speak so that plain matters enter clearly, and to grasp the subtle in what others say — that is wisdom.",
    tamilUrai: "எளிய பொருள் ஆகுமாறு பிறர் உள்ளத்தில் பதியுமாறு சொல்லி, பிறர் சொல்வதில் உள்ள நுட்பமான பொருளையும் உணர்ந்துகொள்வதே அறிவாகும்.",
    altTranslation: "To speak things plain that clearly enter minds of all, And grasp fine truth in others' words — that's wisdom's call. — Pope"
  },
  {
    num: 425, chapter: 43,
    tamil: "உலகம் தழீஇய தொட்பம் மலர்தலும்\nகூம்பலும் இல்லது அறிவு.",
    transliteration: "Ulakam taḻīiya toṭpam malartalum\nKūmpalum illatu aṟivu.",
    english: "True wisdom embraces the world, and neither blooms with pleasure nor shrinks with sorrow.",
    tamilUrai: "உலகத்தோடு ஒட்டிய நட்பு கொண்டதாய், விரிதலும் குவிதலும் இல்லாத நிலையை அடைவதே உண்மையான அறிவாகும்.",
    altTranslation: "True wisdom clasps the world with friendly heart, And neither shrinks nor swells with pain or pride's part. — Pope"
  },
  {
    num: 426, chapter: 43,
    tamil: "எவ்வ துறைவது உலகம் உலகத்தோடு\nஅவ்வ துறைவ தறிவு.",
    transliteration: "Evva tuṟaivatu ulakam ulakattōṭu\nAvva tuṟaiva taṟivu.",
    english: "To live in harmony with the way the world lives — this is wisdom.",
    tamilUrai: "உலகத்தார் எந்த முறையில் நடந்து வாழ்கின்றனரோ, அதற்குத் தக்கபடி உலகத்தோடு ஒத்து வாழ்வதே அறிவு.",
    altTranslation: "To live as lives the world and with it to hold accord, That wisdom is, as sages do record. — Pope"
  },
  {
    num: 427, chapter: 43,
    tamil: "அறிவுடையார் ஆவ தறிவார் அறிவிலார்\nஅஃதறி கல்லா தவர்.",
    transliteration: "Aṟivuṭaiyār āva taṟivār aṟivilār\nAḵtaṟi kallā tavar.",
    english: "The wise foresee what will come; the unwise cannot perceive it.",
    tamilUrai: "வரப்போகும் காலங்களில் என்ன நடக்கும் என்பதை அறிவுடையவர்கள் முன்கூட்டி அறிவர்; அறிவு இல்லாதவர் அதை உணர இயலார்.",
    altTranslation: "The wise foresee what's yet to come; the unwise never May any tidings of the future endeavour. — Pope"
  },
  {
    num: 428, chapter: 43,
    tamil: "அஞ்சுவ தஞ்சாமை பேதைமை அஞ்சுவது\nஅஞ்சல் அறிவார் தொழில்.",
    transliteration: "Añcuva tañcāmai pētaimai añcuvatu\nAñcal aṟivār toḻil.",
    english: "To fear not what should be feared is folly; to fear what should be feared is the work of the wise.",
    tamilUrai: "அச்சப்பட வேண்டிய விஷயத்திற்கு அஞ்சாமை மடமை; அஞ்ச வேண்டியதற்கு அஞ்சுதலே அறிவுடையவரின் செயலாகும்.",
    altTranslation: "Not to fear things of fear is folly's shame; To fear what should be feared, is wisdom's fame. — Pope"
  },
  {
    num: 429, chapter: 43,
    tamil: "எதிரதாக் காக்கும் அறிவினார்க்கு இல்லை\nஅதிர வருவதோர் நோய்.",
    transliteration: "Etiratāk kākkum aṟiviṉārkku illai\nAtira varuvatōr nōy.",
    english: "No calamity, however sudden, can shake those whose wisdom guards against what is to come.",
    tamilUrai: "எதிர்காலத்தில் ஏற்படக்கூடிய துன்பத்தை முன்கூட்டியே உணர்ந்து தடுக்கும் அறிவுடையவர்களுக்கு, திடீரென வரும் கொடுமையான துன்பமும் கிடையாது.",
    altTranslation: "From sudden woe they suffer not, whose wisdom foresees And guards 'gainst what the future decrees. — Pope"
  },
  {
    num: 430, chapter: 43,
    tamil: "அறிவுடையார் எல்லா முடையார் அறிவிலார்\nஎன்னுடைய ரேனும் இலர்.",
    transliteration: "Aṟivuṭaiyār ellā muṭaiyār aṟivilār\nEṉṉuṭaiya rēṉum ilar.",
    english: "The wise possess everything; the unwise, whatever they may possess, possess nothing.",
    tamilUrai: "அறிவு உள்ளவர்களே யாவற்றையும் கொண்டவர்கள்; அறிவு இல்லாதவர்கள் எல்லாம் இருந்தும், எதுவும் இல்லாதவர்கள்.",
    altTranslation: "The wise have all; the unwise, whatso'er they own, Are, in truth, possessors of nothing full-grown. — Pope"
  },

  // CHAPTER 44 — The Correction of Faults
  {
    num: 431, chapter: 44,
    tamil: "செருக்குஞ் சினமும் சிறுமையும் இல்லார்\nபெருக்கம் பெருமித நீர்த்து.",
    transliteration: "Cerukkuñ ciṉamum ciṟumaiyum illār\nPerukkam perumita nīrttu.",
    english: "The prosperity of those free from pride, anger, and meanness shines with true greatness.",
    tamilUrai: "அகந்தை, சினம், அற்பத்தனம் — இம்மூன்றும் இல்லாதவரின் செழிப்பே மேன்மை வாய்ந்த பெருமித நிலையுடையதாகும்.",
    altTranslation: "Who know not pride nor wrath nor meanness, — their estate Alone is richly grand, in worth supreme and great. — Pope"
  },
  {
    num: 432, chapter: 44,
    tamil: "இவறலும் மாண்பிறந்த மானமும் மாணா\nஉவகையும் ஏதம் இறைக்கு.",
    transliteration: "Ivaṟalum māṇpiṟanta māṉamum māṇā\nUvakaiyum ētam iṟaikku.",
    english: "Miserliness, false pride, and unseemly joy are grave faults in a ruler.",
    tamilUrai: "கஞ்சத்தனம், தகுதியற்ற மானம், தகுதியற்ற சந்தோஷம் — இம்மூன்றும் ஒரு அரசனிடம் இருப்பதானால், அது அவனுக்கே பெருத்த குற்றமாகும்.",
    altTranslation: "Niggardliness, false pride, and hilarious glee, These three are blots in kings of high degree. — Pope"
  },
  {
    num: 433, chapter: 44,
    tamil: "தினைத்துணையாங் குற்றம் வரினும் பனைத்துணையாக்\nகொள்வர் பழிநாணு வார்.",
    transliteration: "Tiṉaittuṇaiyāṅ kuṟṟam variṉum paṉaittuṇaiyāk\nKoḷvar paḻināṇu vār.",
    english: "Those who shrink from blame count even a millet-sized fault as great as a palmyra-tree.",
    tamilUrai: "பழிக்கு நாணுபவர்கள், தினை அளவு சிறிய குற்றம் தமக்கு நேர்ந்தாலும், அதை பனை அளவாக எண்ணி அஞ்சுவர்.",
    altTranslation: "The men who shame of blame possess, though sin be small as seed, Will deem it great as palm and fear accordingly indeed. — Pope"
  },
  {
    num: 434, chapter: 44,
    tamil: "குற்றமே காக்க பொருளாகக் குற்றமே\nஅற்றந் தரூஉம் பகை.",
    transliteration: "Kuṟṟamē kākka poruḷākak kuṟṟamē\nAṟṟan tarūum pakai.",
    english: "Guard against faults as a treasure; for faults themselves are enemies that ruin a man.",
    tamilUrai: "தம்மிடம் இருக்கும் குற்றங்களைப் பாதுகாத்துத் தவிர்க்க வேண்டியது கடமை; அந்தக் குற்றங்களே ஒருவன் வாழ்வுக்கு அழிவு தரும் பகையாக அமையும்.",
    altTranslation: "Guard thou from faults as guarded treasure's worth, For faults are foes that work out ruin's birth. — Pope"
  },
  {
    num: 435, chapter: 44,
    tamil: "வருமுன்னர்க் காவாதான் வாழ்க்கை எரிமுன்னர்\nவைத்தூறு போலக் கெடும்.",
    transliteration: "Varumuṉṉark kāvātāṉ vāḻkkai erimuṉṉar\nVaittūṟu pōlak keṭum.",
    english: "The life of him who does not guard against faults before they arise will perish like straw before a flame.",
    tamilUrai: "குற்றம் வருமுன்னதாகவே காத்துக் கொள்ளாதவனின் வாழ்க்கை, தீ முன்னே வைத்த வைக்கோல் குவியல் போன்று அழிந்துபோகும்.",
    altTranslation: "Who guards not ere the faults arise, his life shall flare And vanish, as the straw before the furnace there. — Pope"
  },
  {
    num: 436, chapter: 44,
    tamil: "தன்குற்றம் நீக்கிப் பிறர்குற்றம் காண்கிற்பின்\nஎன்குற்ற மாகும் இறைக்கு.",
    transliteration: "Taṉkuṟṟam nīkkip piṟarkuṟṟam kāṇkiṟpiṉ\nEṉkuṟṟa mākum iṟaikku.",
    english: "If a ruler first removes his own faults and then examines others', what fault can still remain in him?",
    tamilUrai: "தன்னிடம் உள்ள குற்றத்தை முதலில் நீக்கி, பின் பிறர் குற்றத்தை ஆராயும் தகுதியை அரசன் பெற்றால், அவனுக்கு இன்னொரு குற்றம் எது வர முடியும்?",
    altTranslation: "His own faults first removed, the ruler's eye Examines others' — what flaw remains to him then, tell me why? — Pope"
  },
  {
    num: 437, chapter: 44,
    tamil: "செயற்பால செய்யா திவறியான் செல்வம்\nஉயற்பால தன்றிக் கெடும்.",
    transliteration: "Ceyaṟpāla ceyyā tivaṟiyāṉ celvam\nUyaṟpāla taṉṟik keṭum.",
    english: "The wealth of the niggard who does not do what ought to be done will perish, never to rise again.",
    tamilUrai: "செய்யத்தக்க நற்செயல்களை செய்யாமல் பிசுக்கி வைத்திருக்கும் கஞ்சன் செல்வம், மீண்டும் உயர்வு அடையாமல் அழிந்துவிடும்.",
    altTranslation: "The miser's wealth, who never does what's fit to do, Must perish, and no recovery shall ensue. — Pope"
  },
  {
    num: 438, chapter: 44,
    tamil: "பற்றுள்ளம் என்னும் இவறன்மை எற்றுள்ளும்\nஎண்ணப் படுவதொன்று அன்று.",
    transliteration: "Paṟṟuḷḷam eṉṉum ivaṟaṉmai eṟṟuḷḷum\nEṇṇap paṭuvatoṉṟu aṉṟu.",
    english: "The greed that clings — of all faults, it is one that stands out beyond reckoning.",
    tamilUrai: "பற்றுக்கொண்ட உள்ளத்தின் கஞ்சத்தனம் — எந்தக் குற்றத்துடனும் ஒப்பிட முடியாத தனி வகையானதொரு குற்றம்.",
    altTranslation: "The miser's grasping greed — 'mong faults that men o'ercome, Stands out beyond compare, in kind its own, a class alone. — Pope"
  },
  {
    num: 439, chapter: 44,
    tamil: "வியவற்க எஞ்ஞான்றும் தன்னை நயவற்க\nநன்றி பயவா வினை.",
    transliteration: "Viyavaṟka eññāṉṟum taṉṉai nayavaṟka\nNaṉṟi payavā viṉai.",
    english: "Never praise yourself; never desire deeds that bring no good.",
    tamilUrai: "ஒரு போதும் தன்னைத் தானே புகழ்ந்து கொள்ள வேண்டாம்; நன்மை தராத செயல்களை விரும்ப வேண்டாம்.",
    altTranslation: "Ne'er praise thyself; nor deeds devoid of good pursue; These are the rules to keep thy life's true view. — Pope"
  },
  {
    num: 440, chapter: 44,
    tamil: "காதல காதல் அறியாமை உய்க்கிற்பின்\nஏதில ஏதிலார் நூல்.",
    transliteration: "Kātala kātal aṟiyāmai uykkiṟpiṉ\nĒtila ētilār nūl.",
    english: "If a man enjoys his desires so secretly that no one discovers them, his foes' plots will prove useless.",
    tamilUrai: "தன் விருப்பங்களை பிறர் அறியாதபடி இரகசியமாய் அனுபவிப்பவனுக்கு, பகைவரின் சூழ்ச்சிகள் ஒன்றும் செய்யா.",
    altTranslation: "If thou canst taste thy pleasures hid from all — Thy foes' contrivances shall have no call. — Pope"
  },

  // CHAPTER 45 — Seeking the Aid of Great Men
  {
    num: 441, chapter: 45,
    tamil: "அறனறிந்து மூத்த அறிவுடையார் கேண்மை\nதிறனறிந்து தேர்ந்து கொளல்.",
    transliteration: "Aṟaṉaṟintu mūtta aṟivuṭaiyār kēṇmai\nTiṟaṉaṟintu tērntu koḷal.",
    english: "Seek the friendship of the virtuous, who are aged in wisdom, after examining their qualities carefully.",
    tamilUrai: "அறத்தை நன்கறிந்தவரும், அறிவில் முதிர்ந்தவருமான பெரியவர்களின் நட்பை, அவர்களது ஆற்றலைத் தேர்ந்து ஆராய்ந்து பெற வேண்டும்.",
    altTranslation: "Seek thou with care the friendship of the wise and old, Who, virtue-trained, of life's true gold unfold. — Pope"
  },
  {
    num: 442, chapter: 45,
    tamil: "உற்றநோய் நீக்கி உறாஅமை முற்காக்கும்\nபெற்றியார்ப் பேணிக் கொளல்.",
    transliteration: "Uṟṟanōy nīkki uṟāamai muṟkākkum\nPeṟṟiyārp pēṇik koḷal.",
    english: "Cherish the company of those able to remove present troubles and to guard against future ones.",
    tamilUrai: "தம்மிடம் ஏற்பட்ட துன்பத்தை நீக்கி, மேலும் துன்பம் வரா வண்ணம் முன்கூட்டிக் காக்கும் திறனுடையவர்களைத் தேடி, அவர்களின் நட்பைப் பெற வேண்டும்.",
    altTranslation: "Cherish men whose power dispels thy present pain, And wards off ills to come — thy sure defence remain. — Pope"
  },
  {
    num: 443, chapter: 45,
    tamil: "அரியவற்றுள் எல்லாம் அரிதே பெரியாரைப்\nபேணித் தமராக் கொளல்.",
    transliteration: "Ariyavaṟṟuḷ ellām aritē periyāraip\nPēṇit tamarāk koḷal.",
    english: "The rarest of all rare things is to cherish great men and make them one's own.",
    tamilUrai: "அரிதான எல்லாவற்றுக்குள்ளும் மிகவும் அரிதானது, பெரியவர்களைப் போற்றி தம்முடைய நெருக்கமான நண்பர்களாக ஆக்கிக் கொள்வதே.",
    altTranslation: "Of things that rare befall, this rarest — to hold fast The noble-minded, one's true friends to the last. — Pope"
  },
  {
    num: 444, chapter: 45,
    tamil: "தம்மிற் பெரியார் தமரா ஒழுகுதல்\nவன்மையு ளெல்லாம் தலை.",
    transliteration: "Tammiṟ periyār tamarā oḻukutal\nVaṉmaiyu ḷellām talai.",
    english: "To live in accord with those greater than oneself, as one's own, is the foremost of all strengths.",
    tamilUrai: "தம்மைவிட மேம்பட்டவர்களைத் தம் உறவினரைப் போல நடத்தி அவர்களுடன் நெருக்கமாய் வாழ்வதே, எல்லா வலிமைகளிலும் தலையாய வலிமை.",
    altTranslation: "To walk with greater than thyself in friendship's trust, Is strength that o'er all other strengths is just. — Pope"
  },
  {
    num: 445, chapter: 45,
    tamil: "சூழ்வார்கண் ணாக ஒழுகலான் மன்னவன்\nசூழ்வாரைச் சூழ்ந்து கொளல்.",
    transliteration: "Cūḻvārkaṇ ṇāka oḻukalāṉ maṉṉavaṉ\nCūḻvāraic cūḻntu koḷal.",
    english: "Since the king sees by the eyes of his counsellors, let him choose his counsellors with care.",
    tamilUrai: "சூழ அமர்ந்து ஆலோசனை கொடுப்பவர்களே தனக்கு கண்கள் போன்றவர்கள் ஆதலால், அரசன் அத்தகைய அறிஞர்களை நன்கு ஆராய்ந்து தேர்ந்தெடுக்க வேண்டும்.",
    altTranslation: "The king by counsellors' eyes must see; therefore, with care Their worth examine ere he place them in the chair. — Pope"
  },
  {
    num: 446, chapter: 45,
    tamil: "தக்கா ரினத்தனாய்த் தானொழுக வல்லானைச்\nசெற்றார் செயக்கிடந்த தில்.",
    transliteration: "Takkā riṉattaṉāyt tāṉoḻuka vallāṉaic\nCeṟṟār ceyakkiṭanta til.",
    english: "There is no harm that enemies can do to one who lives surrounded by worthy companions.",
    tamilUrai: "தகுதியானவர்களின் சார்பில் தானும் சேர்ந்து நடந்துகொள்ள வல்ல ஒருவனுக்கு, பகைவர்களால் தீமை செய்ய இயலாது.",
    altTranslation: "Who lives surrounded by the worthy and the wise, No harm can bale-working foes devise. — Pope"
  },
  {
    num: 447, chapter: 45,
    tamil: "இடிக்குந் துணையாரை யாள்வாரை யாரே\nகெடுக்குந் தகைமை யவர்.",
    transliteration: "Iṭikkun tuṇaiyārai yāḷvārai yārē\nKeṭukkun takaimai yavar.",
    english: "Who is capable of harming him who keeps as his aid those who rebuke him rightly?",
    tamilUrai: "தன் குற்றங்களை எடுத்துக் கூறி கண்டிக்கும் துணிவு உடைய நண்பர்களை வைத்திருப்பவனை, யாரால் தீமை செய்ய இயலும்?",
    altTranslation: "Who has friends bold to chide, how can his foes destroy His lofty place? No foe has such a strength to employ. — Pope"
  },
  {
    num: 448, chapter: 45,
    tamil: "இடிப்பாரை இல்லாத ஏமரா மன்னன்\nகெடுப்பா ரிலானுங் கெடும்.",
    transliteration: "Iṭippārai illāta ēmarā maṉṉaṉ\nKeṭuppā rilāṉuṅ keṭum.",
    english: "A king without friends bold enough to rebuke him will perish even without an enemy.",
    tamilUrai: "கடிந்து கூறுகின்ற நல்லவர்கள் இல்லாமல், காவலற்றிருக்கும் மன்னன், பகைவர் இல்லாவிட்டாலும் தானாகவே கெடுவான்.",
    altTranslation: "The king who no chiding friend to warn retains, Though foe be none, his own self-doom attains. — Pope"
  },
  {
    num: 449, chapter: 45,
    tamil: "முதலிலார்க்கு ஊதிய மில்லை மதலையாஞ்\nசார்பிலார்க் கில்லை நிலை.",
    transliteration: "Mutalilārkku ūtiya millai matalaiyāñ\nCārpilārk killai nilai.",
    english: "No gain for him without capital; no stability for him without a support like a strong pillar.",
    tamilUrai: "முதலீடு செய்ய பொருள் இல்லாதவர்க்கு வருவாய் ஏற்படாது; தூண் போன்ற பலமான துணை இல்லாதவர்க்கு நிலை இராது.",
    altTranslation: "No gain to men without their principal; No firm estate to him without a staying call. — Pope"
  },
  {
    num: 450, chapter: 45,
    tamil: "பல்லார் பகை கொளலிற் பத்தடுத்த தீமைத்தே\nநல்லார் தொடர்கை விடல்.",
    transliteration: "Pallār pakai koḻaliṟ pattaṭutta tīmaittē\nNallār toṭarkai viṭal.",
    english: "To lose the company of the good is ten times worse than to incur the enmity of many.",
    tamilUrai: "பலரோடு பகை கொள்வதைவிட, நல்லவர்களின் தொடர்பைக் கைவிடுவது பத்து மடங்கு கொடுமையான தீமையைத் தரும்.",
    altTranslation: "To part from good men's fellowship doth ten times worse Than foes' ill will and host of angry curse. — Pope"
  },

  // CHAPTER 46 — Avoiding Mean Associations
  {
    num: 451, chapter: 46,
    tamil: "சிற்றினம் அஞ்சும் பெருமை சிறுமைதான்\nசுற்றமாச் சூழ்ந்து விடும்.",
    transliteration: "Ciṟṟiṉam añcum perumai ciṟumaitāṉ\nCuṟṟamāc cūḻntu viṭum.",
    english: "The great dread low company; the small embrace it as their kindred.",
    tamilUrai: "பெரிய பண்புடையோர் கீழ்மக்கள் கூட்டத்தை அஞ்சி விலகுவர்; சிறுமை உடையவர்களோ அத்தகைய கூட்டத்தையே சுற்றமாகக் கருதி சேர்ந்துவிடுவர்.",
    altTranslation: "The great shrink from the base as from a curse; The base as kinsmen to the base rehearse. — Pope"
  },
  {
    num: 452, chapter: 46,
    tamil: "நிலத்தியல்பால் நீர்திரிந் தற்றாகும் மாந்தர்க்கு\nஇனத்தியல்ப தாகும் அறிவு.",
    transliteration: "Nilattiyalpāl nīrtirin taṟṟākum māntarkku\nIṉattiyalpa tākum aṟivu.",
    english: "As water changes its nature according to the soil, so does a man's mind take on the character of his company.",
    tamilUrai: "நிலத்தின் தன்மையால் நீர் தன்னியல்பிலிருந்து மாறி வேறாய் ஆவது போல, ஒருவன் அறிவும் அவன் சேரும் கூட்டத்தின் இயல்பிற்கு ஏற்ப மாறும்.",
    altTranslation: "As soil changes water's nature, so doth man's mind Take the tinct of his company, to its nature bind. — Pope"
  },
  {
    num: 453, chapter: 46,
    tamil: "மனத்தானாம் மாந்தர்க் குணர்ச்சி இனத்தானாம்\nஇன்னான் எனப்படுஞ் சொல்.",
    transliteration: "Maṉattāṉām māntark kuṇarcci iṉattāṉām\niṉṉāṉ eṉappaṭuñ col.",
    english: "A man's mind shows his knowledge, but his company reveals his character.",
    tamilUrai: "ஒருவனின் உணர்ச்சி அவனது மனத்தில் பிறக்கின்றதாகும்; ஆனால் அவனை 'இத்தகையவன்' என்று மற்றவர்கள் சொல்லத் துணிவதோ, அவன் சேரும் கூட்டத்தால் ஆகிறது.",
    altTranslation: "Man's knowledge from his mind is known; his name and fame From company with which he walks, shall men proclaim. — Pope"
  },
  {
    num: 454, chapter: 46,
    tamil: "மனத்துள தாகும் மறைவிடம் மாந்தர்க்கு\nஇனத்துள தாகும் அறிவு.",
    transliteration: "Maṉattuḷa tākum maṟaiviṭam māntarkku\niṉattuḷa tākum aṟivu.",
    english: "Wisdom seems to dwell in a man's mind, but in truth it comes from his company.",
    tamilUrai: "ஒருவனின் அறிவு, அது வெளிப்படும்வரை மனத்தில் மறைந்திருக்கிறது என்று கூறப்பட்டாலும், உண்மையில் அந்த அறிவு, அவன் சேர்ந்திருக்கும் இனத்தின் தன்மையாலேயே வந்ததாகும்.",
    altTranslation: "In mind, 'tis said, man's wisdom lies concealed; But company it is that hath the truth revealed. — Pope"
  },
  {
    num: 455, chapter: 46,
    tamil: "மனந்தூய்மை செய்வினை தூய்மை இரண்டும்\nஇனந்தூய்மை தூவா வரும்.",
    transliteration: "Maṉantūymai ceyviṉai tūymai iraṇṭum\niṉantūymai tūvā varum.",
    english: "Purity of mind and purity of action both depend upon the purity of one's associations.",
    tamilUrai: "மனத்தூய்மை, செய்யும் செயலின் தூய்மை — இவ்விரண்டும் ஒருவனின் சேர்ந்த கூட்டத்தின் தூய்மையை சார்ந்தே அமையும்.",
    altTranslation: "Clean hand and clean mind both alike proceed From the pure friends with whom men keep at need. — Pope"
  },
  {
    num: 456, chapter: 46,
    tamil: "மனந்தூயார்க் கெச்சநன் றாகும் இனந்தூயார்க்கு\nஇல்லைநன் றாகா வினை.",
    transliteration: "Maṉantūyārk keccanaṉ ṟākum iṉantūyārkku\nIllainaṉ ṟākā viṉai.",
    english: "To the pure of heart comes worthy offspring; to those of pure company, no deed turns out amiss.",
    tamilUrai: "மனத் தூய்மை உடையவர்க்கு நல்ல வழித்தோன்றல்கள் அமையும்; தூய கூட்டத்துடன் பழகுபவர்க்கு, நன்மை பயக்காத செயல் என்பதே கிடையாது.",
    altTranslation: "To pure of heart pure offspring come; to him of pure allies, No deed shall fail of goodness — this the sages prize. — Pope"
  },
  {
    num: 457, chapter: 46,
    tamil: "மனநலத்தின் ஆகும் மறுமைமற் றஃதும்\nஇனநலத்தின் ஏமாப் புடைத்து.",
    transliteration: "Maṉanalattiṉ ākum maṟumaimaṟ ṟaḵtum\niṉanalattiṉ ēmāp puṭaittu.",
    english: "Future happiness depends on the goodness of one's mind; even this, however, draws strength from good company.",
    tamilUrai: "மறுமையில் பெறும் நன்மை மனநலத்தால் வருவது; அந்த மனநலமும் கூட, நல்ல கூட்டத்துடன் பழகுவதன் மூலமாகவே வலிமை பெறுகிறது.",
    altTranslation: "From goodness of the mind salvation springs; good mind Itself its strength from good companions binds. — Pope"
  },
  {
    num: 458, chapter: 46,
    tamil: "மனநலம் நன்குடைய ராயினும் சான்றோர்க்கு\nஇனநலம் ஏமாப் புடைத்து.",
    transliteration: "Maṉanalam naṉkuṭaiya rāyiṉum cāṉṟōrkku\niṉanalam ēmāp puṭaittu.",
    english: "Even the wise, who possess goodness of mind, gain further strength from good company.",
    tamilUrai: "மனத்தில் நல்ல தன்மையைப் பெற்றிருந்தாலும், சான்றோர்க்குக் கூட நல்ல கூட்டத்துடன் பழகுவது கூடுதல் உறுதியை அளிக்கும்.",
    altTranslation: "Though sages' hearts be pure, yet still good company Is strong protection to their path and surety. — Pope"
  },
  {
    num: 459, chapter: 46,
    tamil: "மனநலத்தால் மேலுலகம் எய்தும் இனநலத்தால்\nஏமாப் புடைத்துஇவ் வுலகு.",
    transliteration: "Maṉanalattāl mēlulakam eytum iṉanalattāl\nĒmāp puṭaittuiv vulaku.",
    english: "Goodness of mind leads to the higher world; good company makes this world secure.",
    tamilUrai: "மன நலத்தின் வழியாய் மேலுலகத்தை ஒருவன் அடைவான்; கூட்டத்தின் நலத்தால் இந்த உலகத்தில் பாதுகாப்பு உடையவனாய் வாழ்வான்.",
    altTranslation: "Through goodness of heart, heaven's height is won; Through goodness of friends, earth's joy is begun. — Pope"
  },
  {
    num: 460, chapter: 46,
    tamil: "நல்லினத்தி னூங்குந் துணையில்லை தீயினத்தின்\nஅல்லற் படுப்பதூஉம் இல்.",
    transliteration: "Nalliṉattiṉ ūṅkun tuṇaiyillai tīyiṉattiṉ\nAllaṟ paṭuppatūum il.",
    english: "There is no greater help than good company; no greater harm than evil company.",
    tamilUrai: "நல்ல கூட்டத்தை விட சிறந்த துணை வேறு எதுவும் இல்லை; தீய கூட்டத்தைவிட ஒருவனைத் துன்பத்தில் ஆழ்த்துவதும் வேறெதுவும் இல்லை.",
    altTranslation: "No surer help than good friends can be found; No surer grief than evil friends' ill ground. — Pope"
  },

  // CHAPTER 47 — Acting after Due Consideration
  {
    num: 461, chapter: 47,
    tamil: "அழிவதூஉம் ஆவதூஉம் ஆகி வழிபயக்கும்\nஊதியமும் சூழ்ந்து செயல்.",
    transliteration: "Aḻivatūum āvatūum āki vaḻipayakkum\nŪtiyamum cūḻntu ceyal.",
    english: "Weigh the loss, the gain, and the ultimate benefit — then act.",
    tamilUrai: "ஒரு செயலால் ஏற்படும் இழப்பையும், கிடைக்கும் பயனையும், முடிவில் வரும் மேலான ஆதாயத்தையும் ஆராய்ந்த பின்னரே அதைச் செய்ய வேண்டும்.",
    altTranslation: "Weigh well the loss, the gain, and final profit's worth, Then, having weighed, perform thy task of earth. — Pope"
  },
  {
    num: 462, chapter: 47,
    tamil: "தெரிந்த இனத்தொடு தேர்ந்தெண்ணிச் செய்வார்க்கு\nஅரும்பொருள் யாதொன்றும் இல்.",
    transliteration: "Terinta iṉattoṭu tērnteṇṇic ceyvārkku\nArumporuḷ yātoṉṟum il.",
    english: "Nothing is hard to achieve for those who act after careful thought with chosen counsellors.",
    tamilUrai: "தேர்ந்தெடுத்த நல்ல கூட்டத்தாருடன் கலந்து ஆராய்ந்து சிந்தித்து செயற்படுபவர்களுக்கு, அரிய பொருள் என்பது ஒன்றும் இல்லை.",
    altTranslation: "Nothing's too hard for those who first with chosen friends Consult, and only then the deed commence. — Pope"
  },
  {
    num: 463, chapter: 47,
    tamil: "ஆக்கம் கருதி முதலிழக்கும் செய்வினை\nஊக்கார் அறிவுடை யார்.",
    transliteration: "Ākkam karuti mutaliḻakkum ceyviṉai\nŪkkār aṟivuṭai yār.",
    english: "The wise do not undertake any action in which the capital may be lost while seeking gain.",
    tamilUrai: "ஆக்கத்தை நினைத்து முதலையே இழக்க நேரிடும் செயலில், அறிவு உடையவர்கள் முனைய மாட்டார்கள்.",
    altTranslation: "The wise ne'er undertake the toil Whose gain is got by losing capital's soil. — Pope"
  },
  {
    num: 464, chapter: 47,
    tamil: "தெளிவி லதனைத் தொடங்கார் இளிவென்னும்\nஏதப்பாடு அஞ்சு பவர்.",
    transliteration: "Teḷivi lataṉait toṭaṅkār iḷiveṉṉum\nĒtappāṭu añcu pavar.",
    english: "Those who fear disgrace will not begin what is not thoroughly thought out.",
    tamilUrai: "இழிவு என்னும் குற்றத்திற்கு அஞ்சுபவர்கள், தெளிவாய் ஆராயப்படாத செயலை ஒருபோதும் தொடங்கமாட்டார்கள்.",
    altTranslation: "Who fear disgrace do nothing 'cept what's clear; All doubtful tasks to them obscure appear. — Pope"
  },
  {
    num: 465, chapter: 47,
    tamil: "வகையறச் சூழா தெழுதல் பகைவரைப்\nபாத்திப் படுப்பதோர் ஆறு.",
    transliteration: "Vakaiyaṟac cūḻā teḻutal pakaivaraip\nPāttip paṭuppatōr āṟu.",
    english: "To rise to action without considering every aspect is the surest way to increase one's enemies.",
    tamilUrai: "செயலின் வகைகளை முழுமையாக ஆராயாமல் எழுந்து செயலில் இறங்குதல் பகைவரின் பலத்தை வளர்க்கின்ற வழியாகும்.",
    altTranslation: "To rise to act without full thought is but to sow The seeds that make a foeman's strength to grow. — Pope"
  },
  {
    num: 466, chapter: 47,
    tamil: "செய்தக்க அல்ல செயக்கெடும் செய்தக்க\nசெய்யாமை யானுங் கெடும்.",
    transliteration: "Ceytakka alla ceyakkeṭum ceytakka\nCeyyāmai yāṉuṅ keṭum.",
    english: "One perishes by doing what should not be done, and equally by failing to do what should be done.",
    tamilUrai: "செய்யக் கூடாதவற்றைச் செய்யுமிடத்தில் ஒருவன் அழிவான்; செய்ய வேண்டியவற்றைச் செய்யாமையாலும் அழிவான்.",
    altTranslation: "Ruin comes by doing what should not be done; Ruin too when fit deeds are left alone. — Pope"
  },
  {
    num: 467, chapter: 47,
    tamil: "எண்ணித் துணிக கருமம் துணிந்தபின்\nஎண்ணுவம் என்பது இழுக்கு.",
    transliteration: "Eṇṇit tuṇika karumam tuṇintapiṉ\nEṇṇuvam eṉpatu iḻukku.",
    english: "Weigh well before you resolve to act; to deliberate after acting is to err.",
    tamilUrai: "எண்ணி முடிவு செய்த பிறகே செயலில் இறங்கு; முடிவெடுத்த பின்பு ஆராய்வது என்பது தவறு.",
    altTranslation: "Think first, then dare; to think upon the deed begun, Is error's course, the way of losses ever run. — Pope"
  },
  {
    num: 468, chapter: 47,
    tamil: "ஆற்றின் வருந்தா வருத்தம் பலர்நின்று\nபோற்றினும் பொத்துப் படும்.",
    transliteration: "Āṟṟiṉ varuntā varuttam palarniṉṟu\nPōṟṟiṉum pottup paṭum.",
    english: "An ill-planned effort, though many may stand in its support, will fail.",
    tamilUrai: "ஒழுங்காக ஆலோசிக்கப்படாத முயற்சி, பலர் அதை ஆதரித்து நின்றாலும், முடிவில் தோல்வியுறும்.",
    altTranslation: "The effort unplanned, though hosts support, shall fail; No helping hand avails, no crowd's acclaim prevail. — Pope"
  },
  {
    num: 469, chapter: 47,
    tamil: "நன்றாற்ற லுள்ளுந் தவறுண்டு அவரவர்\nபண்பறிந் தாற்றாக் கடை.",
    transliteration: "Naṉṟāṟṟa luḷḷun tavaṟuṇṭu avaravar\nPaṇpaṟin tāṟṟāk kaṭai.",
    english: "Even well-meant deeds may miscarry if they are done without knowing the nature of the one to whom they are done.",
    tamilUrai: "ஒருவரிடம் அவரது தன்மை அறியாமல் நன்றி செய்ய முற்பட்டால், அந்த நன்மை பலன் தராது; மேலும் தவறாகவும் ஆகும்.",
    altTranslation: "Even well-meant deeds miss the mark, when men fail To know to whom they should their help avail. — Pope"
  },
  {
    num: 470, chapter: 47,
    tamil: "எள்ளாத எண்ணிச் செயல்வேண்டும் தம்மொடு\nகொள்ளாத கொள்ளாது உலகு.",
    transliteration: "Eḷḷāta eṇṇic ceyalvēṇṭum tammoṭu\nKoḷḷāta koḷḷātu ulaku.",
    english: "Do only what will not be despised; the world does not accept what is not fit for it.",
    tamilUrai: "பிறர் இகழாத செயல்களை எண்ணிச் செய்ய வேண்டும்; ஏனெனில் தம்மோடு ஏற்கத்தக்கதல்லாத செயலை உலகம் ஏற்காது.",
    altTranslation: "Do what will not be scorned; the world ne'er takes What suits not the doer — make not such mistakes. — Pope"
  },

  // CHAPTER 48 — The Knowledge of Power
  {
    num: 471, chapter: 48,
    tamil: "வினைவலியும் தன்வலியும் மாற்றான் வலியும்\nதுணைவலியும் தூக்கிச் செயல்.",
    transliteration: "Viṉaivaliyum taṉvaliyum māṟṟāṉ valiyum\nTuṇaivaliyum tūkkic ceyal.",
    english: "Weigh the strength of the deed, your own strength, your adversary's strength, and the strength of your ally — then act.",
    tamilUrai: "செயலின் வலிமையையும், தன் வலிமையையும், பகைவரின் வலிமையையும், துணையாய் உள்ளோரின் வலிமையையும் எடைபோட்டு, பின் செயலில் இறங்க வேண்டும்.",
    altTranslation: "Weigh the deed's might, thine own, the foe's, the friend's estate, Then undertake the task — thy toil shall not frustrate. — Pope"
  },
  {
    num: 472, chapter: 48,
    tamil: "ஒல்வ தறிவது அறிந்ததன் கண்தங்கிச்\nசெல்வார்க்குச் செல்லாத தில்.",
    transliteration: "Olva taṟivatu aṟintataṉ kaṇtaṅkic\nCelvārkkuc cellāta til.",
    english: "Nothing is impossible for those who, knowing what can be done and abiding by it, put forth effort.",
    tamilUrai: "தாம் செய்ய இயன்ற செயலையே அறிந்து, அதில் உறுதியாக நிலைத்து முயல்பவர்களுக்கு, கடந்து செல்ல முடியாத செயல் இல்லை.",
    altTranslation: "Naught is too hard for those who know what they can do, And steadfast to the work in mind and act pursue. — Pope"
  },
  {
    num: 473, chapter: 48,
    tamil: "உடைத்தம் வலியறியார் ஊக்கத்தின் ஊக்கி\nஇடைக்கண் முரிந்தார் பலர்.",
    transliteration: "Uṭaittam valiyaṟiyār ūkkattiṉ ūkki\niṭaikkaṇ murintār palar.",
    english: "Many undertake great tasks in eagerness, not knowing their own strength, and break midway.",
    tamilUrai: "தமது சொந்த வலிமையை உணராமல் ஆர்வம் மிகுதியால் ஊக்கங்கொண்டு செயலில் முற்பட்டு, இடை வழியில் அழிந்தவர்கள் பலர்.",
    altTranslation: "Many, blind to their own power, with zeal inspired, Break down mid-task — their strength soon retired. — Pope"
  },
  {
    num: 474, chapter: 48,
    tamil: "அமைந்தாங் கொழுகான் அளவறியான் தன்னை\nவியந்தான் விரைந்து கெடும்.",
    transliteration: "Amaintāṅ koḻukāṉ aḷavaṟiyāṉ taṉṉai\nviyantāṉ viraintu keṭum.",
    english: "He who does not act in harmony with others, does not know his own measure, and admires himself, will swiftly perish.",
    tamilUrai: "மற்றவர்களுடன் ஒத்து வாழத் தெரியாமல், தன்னுடைய எல்லையை அறியாமல், தன்னையே புகழ்ந்து கொள்பவன், விரைவில் அழிந்து போவான்.",
    altTranslation: "Who walks not well with others, his own measure knows not, And self-admires, shall swift perish — 'tis his fated lot. — Pope"
  },
  {
    num: 475, chapter: 48,
    tamil: "பீலிபெய் சாகாடும் அச்சிறும் அப்பண்டம்\nசால மிகுத்துப் பெயின்.",
    transliteration: "Pīlipey cākāṭum acciṟum appaṇṭam\nCāla mikuttup peyiṉ.",
    english: "Even a cart loaded with peacock feathers will break its axle if the load is piled too high.",
    tamilUrai: "மயில் இறகு போன்ற எடை குறைந்த பொருளை ஏற்றிய வண்டியாக இருந்தாலும், அதிக அளவில் ஏற்றப்பட்டால், அதன் அச்சு முறிந்துவிடும்.",
    altTranslation: "Though peacock feathers' light, the cart shall break its rod If piled excessive, 'neath the load be trod. — Pope"
  },
  {
    num: 476, chapter: 48,
    tamil: "நுனிக்கொம்பர் ஏறினார் அஃதிறந் தூக்கின்\nஉயிர்க்கிறுதி யாகி விடும்.",
    transliteration: "Nuṉikkompar ēṟiṉār aḵtiṟan tūkkiṉ\nUyirkkiṟuti yāki viṭum.",
    english: "He who climbs to the farthest tip of a branch and strives to go beyond it, will fall to his death.",
    tamilUrai: "மரத்தின் நுனிக் கிளையில் ஏறியவர், அந்த எல்லையையும் கடந்து முயன்றால், உயிருக்கே ஆபத்து ஏற்படும்.",
    altTranslation: "He who climbs to the topmost branch, and seeks still more, His life upon a perilous venture plies. — Pope"
  },
  {
    num: 477, chapter: 48,
    tamil: "ஆற்றின் அளவறிந்து ஈக அதுபொருள்\nபோற்றி வழங்கு நெறி.",
    transliteration: "Āṟṟiṉ aḷavaṟintu īka atuporuḷ\nPōṟṟi vaḻaṅku neṟi.",
    english: "Give according to your means; that is the true way of preserving and using wealth.",
    tamilUrai: "தமக்கு உள்ள வளத்தின் அளவை அறிந்து, அதற்கேற்ப பிறர்க்கு வழங்குதலே பொருளை பாதுகாத்துக்கொண்டு உதவி செய்யும் நெறியாகும்.",
    altTranslation: "Give as thy means allow — that's wealth's wise rule, To keep and spend with prudence, nor play the fool. — Pope"
  },
  {
    num: 478, chapter: 48,
    tamil: "ஆகாறு அளவிட்டி தாயினும் கேடில்லை\nபோகாறு அகலாக் கடை.",
    transliteration: "Ākāṟu aḷaviṭṭi tāyiṉum kēṭillai\nPōkāṟu akalāk kaṭai.",
    english: "Even a small income brings no harm, if the outflow does not exceed it.",
    tamilUrai: "வருமானம் குறைவாக இருந்தாலும், செலவு அதை விட பெருகாமல் இருந்தால், எந்த தீமையும் இல்லை.",
    altTranslation: "Small be the income — if the outflow's measured less, No harm, no loss, shall that estate distress. — Pope"
  },
  {
    num: 479, chapter: 48,
    tamil: "அளவறிந்து வாழாதான் வாழ்க்கை உளபோல\nஇல்லாகித் தோன்றாக் கெடும்.",
    transliteration: "Aḷavaṟintu vāḻātāṉ vāḻkkai uḷapōla\nIllākit tōṉṟāk keṭum.",
    english: "The life of one who does not live within his means seems to prosper, but vanishes like a phantom.",
    tamilUrai: "வருவாயின் அளவை அறியாமல் வாழ்பவனின் வாழ்க்கை, வெளியில் இருப்பது போல் தோன்றி, உள்ளே வெற்று நிலையடைந்து, கண்ணுக்குப் புலனாகாமல் கெட்டுப் போகும்.",
    altTranslation: "Who lives not by the measure of his means, appears To live, but withers, vanishes with gathering fears. — Pope"
  },
  {
    num: 480, chapter: 48,
    tamil: "உளவரை தூக்காத ஒப்புர வாண்மை\nவளவரை வல்லைக் கெடும்.",
    transliteration: "Uḷavarai tūkkāta oppura vāṇmai\nVaḷavarai vallaik keṭum.",
    english: "Charity beyond one's means will swiftly ruin one's wealth.",
    tamilUrai: "தம்மிடம் உள்ள பொருளின் அளவை எடைபோட்டு அறியாமல் செய்யும் உதவி, செல்வத்தை வேகமாக அழித்துவிடும்.",
    altTranslation: "Bounty that weighs not means' true store, Swiftly destroys the wealth for ever and evermore. — Pope"
  },

  // CHAPTER 49 — Knowing the Fitting Time
  {
    num: 481, chapter: 49,
    tamil: "பகல்வெல்லும் கூகையைக் காக்கை இகல்வெல்லும்\nவேந்தர்க்கு வேண்டும் பொழுது.",
    transliteration: "Pakalvellum kūkaiyaik kākkai ikalvellum\nVēntarkku vēṇṭum poḻutu.",
    english: "A crow can beat an owl by day; a king who would vanquish his rivals needs the right time.",
    tamilUrai: "பகல் நேரத்தில் காக்கை ஆந்தையை வெல்லும்; அதுபோல, வேந்தர்களும் பகைவரை வெல்ல வேண்டுமென்றால், ஏற்ற காலத்தை அறிந்து செயலாற்ற வேண்டும்.",
    altTranslation: "The crow o'ercomes the owl by day; so kings, to win, Must seize the fitting time, ere they begin. — Pope"
  },
  {
    num: 482, chapter: 49,
    tamil: "பருவத்தோடு ஒட்ட ஒழுகல் திருவினைத்\nதீராமை ஆர்க்குங் கயிறு.",
    transliteration: "Paruvattōṭu oṭṭa oḻukal tiruviṉait\nTīrāmai ārkkuṅ kayiṟu.",
    english: "To act in accord with the right season is the rope that binds fortune fast, never to slip away.",
    tamilUrai: "சமயத்திற்கு ஏற்பவே நடந்து கொள்ளும் பண்பு, ஒருவனிடம் சேர்ந்த செல்வம் நீங்காமல் இருக்கக் கட்டும் கயிறு போன்றது.",
    altTranslation: "To act in accord with time is the binding cord That holds fast fortune, 'gainst all loss assured. — Pope"
  },
  {
    num: 483, chapter: 49,
    tamil: "அருவினை என்ப உளவோ கருவியான்\nகாலம் அறிந்து செயின்.",
    transliteration: "Aruviṉai eṉpa uḷavō karuviyāṉ\nKālam aṟintu ceyiṉ.",
    english: "Is there anything hard to accomplish, if it is done with the right means at the right time?",
    tamilUrai: "பொருத்தமான கருவிகளையும், ஏற்ற காலத்தையும் அறிந்து செயற்பட்டால், அரிய செயல் என்று எதுவும் இருக்குமா?",
    altTranslation: "What action is too hard, if one adapts with skill The means and timing to his purpose' will? — Pope"
  },
  {
    num: 484, chapter: 49,
    tamil: "ஞாலம் கருதினுங் கைகூடுங் காலம்\nகருதி இடத்தாற் செயின்.",
    transliteration: "Ñālam karutiṉuṅ kaikūṭuṅ kālam\nKaruti iṭattāṟ ceyiṉ.",
    english: "Even to conquer the world becomes possible, if one acts considering both the time and the place.",
    tamilUrai: "உலகத்தையே கைவசப்படுத்த நினைத்தாலும், அதற்கு ஏற்ற காலத்தையும் இடத்தையும் ஆராய்ந்து செயற்பட்டால், அது கைகூடும்.",
    altTranslation: "To grasp the world itself shall easy be, If time and place be weighed in action's decree. — Pope"
  },
  {
    num: 485, chapter: 49,
    tamil: "காலம் கருதி இருப்பர் கலங்காது\nஞாலம் கருது பவர்.",
    transliteration: "Kālam karuti iruppar kalaṅkātu\nÑālam karutu pavar.",
    english: "Those who aim to conquer the world wait calmly and unperturbed for the right moment.",
    tamilUrai: "உலகம் எல்லாம் தன் கட்டுக்குள் கொண்டு வர வேண்டும் என்று நினைப்பவர், அமைதியை இழக்காமல், ஏற்ற காலத்தை எதிர்பார்த்து காத்திருப்பர்.",
    altTranslation: "Unruffled, those who'd conquer earth's wide span Bide their time; that's ever wisdom's plan. — Pope"
  },
  {
    num: 486, chapter: 49,
    tamil: "ஊக்க முடையான் ஒடுக்கம் பொருதகர்\nதாக்கற்குப் பேருந் தகைத்து.",
    transliteration: "Ūkka muṭaiyāṉ oṭukkam porutakar\nTākkaṟkup pērun takaittu.",
    english: "The restraint of an energetic man is like the retreat of a fighting ram — a drawing back to charge with greater force.",
    tamilUrai: "ஊக்கம் உடையவன் ஒரு காலத்தில் அடங்கி இருப்பது, போர் நிகழ்த்தும் ஆட்டுக்கடா தாக்குதலுக்காக பின்னோக்கிச் செல்வதை போன்றது.",
    altTranslation: "The retreat of the zealous man is as the fighting ram's, Which backs to strike with greater might its slams. — Pope"
  },
  {
    num: 487, chapter: 49,
    tamil: "பொள்ளென ஆங்கே புறம்வேரார் காலம்பார்த்து\nஉள்வேர்ப்பர் ஒள்ளி யவர்.",
    transliteration: "Poḷḷeṉa āṅkē puṟamvērār kālampārttu\nUḷvērppar oḷḷi yavar.",
    english: "The wise do not show outward anger on the spot; they await the right moment and then strike inwardly.",
    tamilUrai: "அறிவுடையவர் சினத்தை உடனடியாக வெளியே காட்ட மாட்டார்கள்; பொருத்தமான காலத்தை எதிர்பார்த்து, மனதில் சினத்தை அடக்கியிருப்பர்.",
    altTranslation: "The wise do not their wrath in hasty act release; They bide the time, then strike with force that ne'er shall cease. — Pope"
  },
  {
    num: 488, chapter: 49,
    tamil: "செறுநரைக் காணின் சுமக்க இறுவரை\nகாண்இன் கிழக்காம் தலை.",
    transliteration: "Ceṟunaraik kāṇiṉ cumakka iṟuvarai\nKāṇiṉ kiḻakkām talai.",
    english: "If you meet your enemy, bear him on your shoulders; when the time of his ruin comes, his head will fall of itself.",
    tamilUrai: "பகைவனைக் கண்டால், அவனை தலையில் சுமப்பது போல் அடங்கிக் கிடக்க வேண்டும்; அவன் அழியக்கூடிய நேரம் வரும் போது, அவனது தலை தானாகவே விழுந்துவிடும்.",
    altTranslation: "When foe thou meet'st, endure — as on thy shoulder place; When ruin's hour arrives, his head shall fall apace. — Pope"
  },
  {
    num: 489, chapter: 49,
    tamil: "எய்தற் கரியது இயைந்தக்கால் அந்நிலையே\nசெய்தற் கரிய செயல்.",
    transliteration: "Eytaṟ kariyatu iyaintakkāl annilaiyē\nCeytaṟ kariya ceyal.",
    english: "When a rare opportunity occurs, seize that moment to accomplish what is hard.",
    tamilUrai: "பெறுவதற்கு அரிய காலம் தானாக வாய்க்கப்பெற்றால், அந்த நேரத்திலேயே செய்வதற்கு அரிய செயல்களைச் செய்ய வேண்டும்.",
    altTranslation: "When rare occasion comes to hand at length, Do then the deed of rarest strength. — Pope"
  },
  {
    num: 490, chapter: 49,
    tamil: "கொக்கொக்க கூம்பும் பருவத்து மற்றதன்\nகுத்தொக்க சீர்த்த இடத்து.",
    transliteration: "Kokkokka kūmpum paruvattu maṟṟataṉ\nKuttokka cīrtta iṭattu.",
    english: "Be still as a crane in waiting; but when the moment comes, strike like its unerring beak.",
    tamilUrai: "காலத்தை எதிர்நோக்கி காத்திருக்கும்போது, கொக்கை போல அசைவற்றிருக்க வேண்டும்; ஏற்ற சமயம் வந்தவுடன், அந்தக் கொக்கு மீனைக் குத்துவது போலத் துல்லியமாய் செயலில் இறங்க வேண்டும்.",
    altTranslation: "As a crane stands still, so wait in peace, at time that's meet; Then dart, as 'tis its deadly beak to strike fleet. — Pope"
  },

  // CHAPTER 50 — Knowing the Place
  {
    num: 491, chapter: 50,
    tamil: "தொடங்கற்க எவ்வினையும் எள்ளற்க முற்றும்\nஇடங்கண்ட பின்அல் லது.",
    transliteration: "Toṭaṅkaṟka evviṉaiyum eḷḷaṟka muṟṟum\nIṭaṅkaṇṭa piṉal latu.",
    english: "Begin no action, and despise no enemy, until you have full sight of the right place.",
    tamilUrai: "பொருத்தமான இடம் உறுதிப்படுத்தப்படும் வரை, எந்தச் செயலையும் தொடங்கக் கூடாது; எந்தப் பகைவனையும் மதிப்பிழக்கச் செய்யக்கூடாது.",
    altTranslation: "Begin no task, nor scorn thy foe, till first thou see The proper place by which thy work shall succeed free. — Pope"
  },
  {
    num: 492, chapter: 50,
    tamil: "முரண்சேர்ந்த மொய்ம்பி னவர்க்கும் அரண்சேர்ந்தாம்\nஆக்கம் பலவுந் தரும்.",
    transliteration: "Muraṇcērnta moympi ṉavarkkum araṇcērntām\nĀkkam palavun tarum.",
    english: "Even those of great strength who war against others gain much by choosing a strong position.",
    tamilUrai: "பகைவரை எதிர்த்துப் போரிடும் வலிமை உடையவர்கட்கும் கூட, வலுவான அரணை சேர்ந்திருப்பது பல நன்மைகளைத் தரும்.",
    altTranslation: "E'en men of mighty strength, that go to wage the fight, Gain much by taking stand in fortress' height. — Pope"
  },
  {
    num: 493, chapter: 50,
    tamil: "ஆற்றாரும் ஆற்றி அடுப இடனறிந்து\nபோற்றார்கண் போற்றிச் செயின்.",
    transliteration: "Āṟṟārum āṟṟi aṭupa iṭaṉaṟintu\nPōṟṟārkaṇ pōṟṟic ceyiṉ.",
    english: "Even the weak may become strong and destroy their enemies, if they know the fitting place and act with caution.",
    tamilUrai: "வலிமை இல்லாதவர்களும் கூட, ஏற்ற இடம் அறிந்து, எச்சரிக்கை உடன் செயல்படுவார்களானால், வலிமை பெற்று, பகைவரை அழிக்க முடியும்.",
    altTranslation: "Even the weak shall strong become and vanquish foe, When place is rightly known, and caution they show. — Pope"
  },
  {
    num: 494, chapter: 50,
    tamil: "எண்ணியார் எண்ணம் இழப்பர் இடனறிந்து\nதுன்னியார் துன்னிச் செயின்.",
    transliteration: "Eṇṇiyār eṇṇam iḻappar iṭaṉaṟintu\nTuṉṉiyār tuṉṉic ceyiṉ.",
    english: "Those who have plotted against us will lose their plans, if we, knowing the right place, act from close at hand.",
    tamilUrai: "எதிராளி நம்மை அழிக்க எண்ணியவற்றைக் கூட கைவிட நேரிடும்; நாம் ஏற்ற இடத்தை அறிந்து, அருகில் சென்று செயற்பட்டால்.",
    altTranslation: "Who plot our ruin lose their plots, when we Know the true place and strike from proximity. — Pope"
  },
  {
    num: 495, chapter: 50,
    tamil: "நெடும்புனலுள் வெல்லும் முதலை அடும்புனலின்\nநீங்கின் அதனைப் பிற.",
    transliteration: "Neṭumpuṉaluḷ vellum mutalai aṭumpuṉaliṉ\nNīṅkiṉ ataṉaip piṟa.",
    english: "In deep water the crocodile prevails; out of water, other creatures will kill it.",
    tamilUrai: "ஆழ்ந்த நீரில் முதலை எதையும் வெல்லக் கூடியது; நீரை விட்டு வெளியேறினால், அதைக் கூட மற்ற உயிரினங்கள் தாக்கிக் கொன்றுவிடும்.",
    altTranslation: "In deep waters the crocodile conquers every foe; But on dry land, other creatures lay it low. — Pope"
  },
  {
    num: 496, chapter: 50,
    tamil: "கடலோடா கால்வல் நெடுந்தேர் கடலோடும்\nநாவாயும் ஓடா நிலத்து.",
    transliteration: "Kaṭalōṭā kālval neṭuntēr kaṭalōṭum\nNāvāyum ōṭā nilattu.",
    english: "Great strong-wheeled chariots will not sail on the sea, nor will ocean-going ships run upon land.",
    tamilUrai: "பெரிய உறுதியான சக்கரங்களை உடைய தேர்கள் கடலில் ஓடமாட்டா; கடலில் ஓடக்கூடிய கப்பல்களும் நிலத்தில் செல்ல முடியாது.",
    altTranslation: "Ships that cleave the sea, on land do never glide; And chariots, stout-wheeled, o'er ocean's waves don't ride. — Pope"
  },
  {
    num: 497, chapter: 50,
    tamil: "அஞ்சாமை அல்லால் துணைவேண்டா எஞ்சாமை\nஎண்ணி இடத்தாற் செயின்.",
    transliteration: "Añcāmai allāl tuṇaivēṇṭā eñcāmai\nEṇṇi iṭattāṟ ceyiṉ.",
    english: "If one acts in the proper place, thinking of everything, he needs no aid but his own courage.",
    tamilUrai: "செயலின் அனைத்து அம்சங்களையும் ஆராய்ந்து, ஏற்ற இடத்தில் செயல்படுபவனுக்கு, அச்சமின்மையை தவிர வேறு எந்தத் துணையும் தேவையில்லை.",
    altTranslation: "In proper place, with careful thought, if one doth act, No aid he needs, save courage uncompact. — Pope"
  },
  {
    num: 498, chapter: 50,
    tamil: "சிறுபடையான் செல்லிடம் சேரின் உறுபடையான்\nஊக்கம் அழிந்து விடும்.",
    transliteration: "Ciṟupaṭaiyāṉ celliṭam cēriṉ uṟupaṭaiyāṉ\nŪkkam aḻintu viṭum.",
    english: "A great army loses its energy if it enters the stronghold of a smaller force.",
    tamilUrai: "சிறிய படை உடையவனின் காப்பிடத்தை அடைந்தால், பெரும் படையுடைய எதிரியின் ஊக்கமே அழிந்து போகும்.",
    altTranslation: "The hosts of mighty armies lose their strength, Reaching the stronghold of a small at length. — Pope"
  },
  {
    num: 499, chapter: 50,
    tamil: "சிறைநலனும் சீரும் இலரெனினும் மாந்தர்\nஉறைநிலத்தோடு ஒட்டல் அரிது.",
    transliteration: "Ciṟainalaṉum cīrum ilareṉiṉum māntar\nUṟainilattōṭu oṭṭal aritu.",
    english: "Though men may lack arms and renown, it is hard to attack them when they stand on their native soil.",
    tamilUrai: "ஆயுதமும் புகழும் இல்லாதவர்களாக இருந்தாலும், தமது சொந்த மண்ணில் நிற்பவர்களை, எதிரிகள் வெற்றிகொள்வது அரிது.",
    altTranslation: "Though neither arms nor glory grace them, hard it is To vanquish men upon their native soil's abyss. — Pope"
  },
  {
    num: 500, chapter: 50,
    tamil: "காலாழ் களரில் நரியடும் கண்ணஞ்சா\nவேலாள் முகத்த களிறு.",
    transliteration: "Kālāḻ kaḷaril nariyaṭum kaṇṇañcā\nVēlāḷ mukatta kaḷiṟu.",
    english: "A jackal can kill a battle-hardened elephant whose feet have sunk in mud.",
    tamilUrai: "கண்ணஞ்சாத வீரனைத் தன் துதிக்கையால் வீசும் வலிமை உடைய யானை கூட, சேற்றில் கால்கள் புதைந்து நிற்குமானால், நரியாலும் கொல்லப்படும்.",
    altTranslation: "In quagmire sunk, the mightiest elephant, war-tried, Shall fall to jackal's strike, its valour's gone aside. — Pope"
  },

  // CHAPTER 51 — Selection and Confidence
  {
    num: 501, chapter: 51,
    tamil: "அறம்பொருள் இன்பம் உயிரச்சம் நான்கின்\nதிறந்தெரிந்து தேறப் படும்.",
    transliteration: "Aṟamporuḷ iṉpam uyiraccam nāṉkiṉ\nTiṟanterintu tēṟap paṭum.",
    english: "Trust a man only after testing him on four grounds: virtue, wealth, pleasure, and fear of life.",
    tamilUrai: "அறம், பொருள், இன்பம், உயிர் மீதுள்ள அச்சம் — இந்த நான்கிலும் ஒருவனை ஆராய்ந்த பிறகே அவனை நம்பத் தகுந்தவனாக ஏற்றுக்கொள்ள வேண்டும்.",
    altTranslation: "By virtue, wealth, and pleasure, fear of life — these four The test is made, before a man's trust you explore. — Pope"
  },
  {
    num: 502, chapter: 51,
    tamil: "குடிப்பிறந்து குற்றத்தின் நீங்கி வடுப்பரியும்\nநாணுடையான் சுட்டே தெளிவு.",
    transliteration: "Kuṭippiṟantu kuṟṟattiṉ nīṅki vaṭupariyum\nNāṇuṭaiyāṉ cuṭṭē teḷivu.",
    english: "Of good family, free from faults, and keenly sensitive to shame — such a man is the one to trust.",
    tamilUrai: "நற்குடியில் பிறந்து, குற்றமற்றவனாய், பழிக்கு மிகவும் அஞ்சும் நாணம் உடையவனையே நம்பிக்கைக்கு உரிய ஆள் எனத் தேர்ந்தெடுக்க வேண்டும்.",
    altTranslation: "Of noble birth, from fault set free, with shame of blame's sharp smart — Such is the man in whom one's trust is set apart. — Pope"
  },
  {
    num: 503, chapter: 51,
    tamil: "அரியகற்று ஆசற்றார் கண்ணும் தெரியுங்கால்\nஇன்மை அரிதே வெளிறு.",
    transliteration: "Ariyakaṟṟu ācaṟṟār kaṇṇum teriyuṅkāl\nIṉmai aritē veḷiṟu.",
    english: "Even among those learned in rare texts and cleansed of faults, complete freedom from some weakness is hard to find.",
    tamilUrai: "அரிய நூல்களை கற்று, குற்றமற்றவர்களாய் விளங்குபவர்கள் கூட, நுணுகி ஆராய்ந்தால், சிறிய மடமை எதுவும் இல்லாதிருப்பது அரிது.",
    altTranslation: "E'en in the learned, from faults refined, a closer sight Will some small weakness show — all perfect none can quite. — Pope"
  },
  {
    num: 504, chapter: 51,
    tamil: "குணம்நாடிக் குற்றமும் நாடி அவற்றுள்\nமிகைநாடி மிக்க கொளல்.",
    transliteration: "Kuṇamnāṭik kuṟṟamum nāṭi avaṟṟuḷ\nMikaināṭi mikka koḷal.",
    english: "Examine a man's virtues and his faults; take him according to which predominates.",
    tamilUrai: "ஒருவனது நற்குணங்களையும் ஆராய்ந்து, குற்றங்களையும் ஆராய்ந்து, அவற்றில் எது மிகுந்துள்ளது என்பதை அறிந்து, அதன்படி அவனை மதிக்க வேண்டும்.",
    altTranslation: "Weigh the virtues, weigh the faults, and then with care, Judge him by whichever shows the greater share. — Pope"
  },
  {
    num: 505, chapter: 51,
    tamil: "பெருமைக்கும் ஏனைச் சிறுமைக்கும் தத்தம்\nகருமமே கட்டளைக் கல்.",
    transliteration: "Perumaikkum ēṉaic ciṟumaikkum tattam\nKarumamē kaṭṭaḷaik kal.",
    english: "For greatness and for smallness alike, a man's own deeds are the touchstone.",
    tamilUrai: "ஒருவர் பெருமை உள்ளவரா, சிறுமை உள்ளவரா என்பதை சோதித்தறியும் உரைகல், அவர் செய்யும் செய்கைகளே.",
    altTranslation: "For high and low alike, the very touchstone shown, Is each man's deeds — by these alone is he known. — Pope"
  },
  {
    num: 506, chapter: 51,
    tamil: "அற்றாரைத் தேறுதல் ஓம்புக மற்றவர்\nபற்றிலர் நாணார் பழி.",
    transliteration: "Aṟṟārait tēṟutal ōmpuka maṟṟavar\npaṟṟilar nāṇār paḻi.",
    english: "Do not trust those who have no kindred; having nothing to lose, they do not fear disgrace.",
    tamilUrai: "சுற்றம் இல்லாதவர்களை நம்புவதைத் தவிர்க்க வேண்டும்; அவர்களுக்கு உலகத்தோடு பற்று இல்லாததால், பழிக்கும் அஞ்சமாட்டார்கள்.",
    altTranslation: "Trust not the man whom none by kindred bind; Nought he holds dear, he'll neither shame nor sorrow find. — Pope"
  },
  {
    num: 507, chapter: 51,
    tamil: "காதன்மை கந்தா அறிவறியார்த் தேறுதல்\nபேதைமை எல்லாம் தரும்.",
    transliteration: "Kātaṉmai kantā aṟivaṟiyārt tēṟutal\nPētaimai ellām tarum.",
    english: "To trust those whose wisdom is unproven, merely out of affection, leads to every kind of folly.",
    tamilUrai: "அன்பின் காரணமாக மட்டுமே, அறிவை ஆராயாமல் ஒருவரை நம்புவது, எல்லா வகையான அறியாமைகளையும் விளைவிக்கும்.",
    altTranslation: "Through fondness alone to trust the man of untried mind, Is to invite all follies of their kind. — Pope"
  },
  {
    num: 508, chapter: 51,
    tamil: "தேரான் பிறனைத் தெளிந்தான் வழிமுறை\nதீரா இடும்பை தரும்.",
    transliteration: "Tērāṉ piṟaṉait teḷintāṉ vaḻimuṟai\nTīrā iṭumpai tarum.",
    english: "He who trusts a stranger without examination brings ceaseless sorrow upon his line forever.",
    tamilUrai: "யாராக இருந்தாலும் ஆராயாமல் நம்பி ஏற்றவனுக்கு, அவன் சந்ததியிலும் தீராத துன்பமே விளையும்.",
    altTranslation: "To trust another without thorough test, shall surely bring Endless woes to one's lineage — sorrow's sting. — Pope"
  },
  {
    num: 509, chapter: 51,
    tamil: "தேறற்க யாரையுந் தேராது தேர்ந்தபின்\nதேறுக தேறும் பொருள்.",
    transliteration: "Tēṟaṟka yāraiyun tērātu tērntapiṉ\nTēṟuka tēṟum poruḷ.",
    english: "Trust no one without examination; after examining, trust him for the work he is fit for.",
    tamilUrai: "ஆராயாமல் யாரையும் நம்ப வேண்டாம்; நன்கு ஆராய்ந்த பிறகு, அவர் செய்ய ஏற்ற செயலுக்கே அவரை நம்ப வேண்டும்.",
    altTranslation: "Trust none untested; when fully tried, then trust alone For work whereto their fitness well is known. — Pope"
  },
  {
    num: 510, chapter: 51,
    tamil: "தேரான் தெளிவும் தெளிந்தான்கண் ஐயுறவும்\nதீரா இடும்பை தரும்.",
    transliteration: "Tērāṉ teḷivum teḷintāṉkaṇ aiyuṟavum\nTīrā iṭumpai tarum.",
    english: "Trust without testing, and suspicion after trusting — both bring sorrow beyond cure.",
    tamilUrai: "சோதனை இன்றி நம்பிக்கையும், சோதித்து நம்பிய பின் ஐயப்படுதலும் — இரண்டும் தீர்க்க முடியாத துன்பத்தைத் தரும்.",
    altTranslation: "To trust untested, and to doubt the tested friend — Both bring unending ills that will not mend. — Pope"
  },

  // CHAPTER 52 — Selection and Employment
  {
    num: 511, chapter: 52,
    tamil: "நன்மையும் தீமையும் நாடி நலம்புரிந்த\nதன்மையான் ஆளப் படும்.",
    transliteration: "Naṉmaiyum tīmaiyum nāṭi nalampurinta\ntaṉmaiyāṉ āḷap paṭum.",
    english: "Let him be employed whose nature, having weighed good and evil, inclines to what is good.",
    tamilUrai: "நன்மையையும் தீமையையும் ஆராய்ந்து பார்த்து, நன்மையையே நாடும் தன்மை உடையவனையே ஒருவன் செயலுக்கு ஈடுபடுத்த வேண்டும்.",
    altTranslation: "The man to be employed is he who weighs good and ill, And choosing good, performs it with his steadfast will. — Pope"
  },
  {
    num: 512, chapter: 52,
    tamil: "வாரி பெருக்கி வளம்படுத்து உற்றவை\nஆராய்வான் செய்க வினை.",
    transliteration: "Vāri perukki vaḷampaṭuttu uṟṟavai\nĀrāyvāṉ ceyka viṉai.",
    english: "Let him perform the work who can increase revenue, enrich resources, and examine difficulties that arise.",
    tamilUrai: "வருவாயைப் பெருக்கி, செல்வத்தை வளர்த்து, தடைகளாய் நேரும் விஷயங்களை ஆராய்ந்து செய்பவனே செயலுக்கு தகுதியுடையவன்.",
    altTranslation: "The man who swells revenue, wealth enhances, and explores The ills that may befall — let him employ's door. — Pope"
  },
  {
    num: 513, chapter: 52,
    tamil: "அன்பறிவு தேற்றம் அவாவின்மை இந்நான்கும்\nநன்குடையான் கட்டே தெளிவு.",
    transliteration: "Aṉpaṟivu tēṟṟam avāviṉmai innāṉkum\nNaṉkuṭaiyāṉ kaṭṭē teḷivu.",
    english: "A man of clear trust is he who is rich in love, wisdom, clarity, and freedom from greed.",
    tamilUrai: "அன்பு, அறிவு, தெளிந்த முடிவு, ஆசையின்மை — இந்த நான்கும் நன்கு பொருந்தியவனே தேர்வுக்கு தகுதி உடையவன்.",
    altTranslation: "Love, wisdom, judgment clear, from greed's stain free — These four in man mark him trustworthy to thee. — Pope"
  },
  {
    num: 514, chapter: 52,
    tamil: "எனைவகையான் தேறியக் கண்ணும் வினைவகையான்\nவேறாகும் மாந்தர் பலர்.",
    transliteration: "Eṉaivakaiyāṉ tēriyak kaṇṇum viṉaivakaiyāṉ\nVēṟākum māntar palar.",
    english: "Many a man, though tested in every way, shows himself different when put to actual work.",
    tamilUrai: "எல்லா வகைகளிலும் ஆராய்ந்து நம்பப்பட்டவர்களும், உண்மையான செயல்களில் ஈடுபடும்போது வேறு வகையான நிலையில் வெளிப்படுகின்றனர்.",
    altTranslation: "Though tested much in many ways, when work's in hand, Men oft from what they seemed do far depart and stand. — Pope"
  },
  {
    num: 515, chapter: 52,
    tamil: "அறிந்தாற்றிச் செய்கிற்பாற் கல்லால் வினைதான்\nசிறந்தானென்று ஏவற்பாற் றன்று.",
    transliteration: "Aṟintāṟṟic ceykiṟpāṟ kallāl viṉaitāṉ\nCiṟantāṉeṉṟu ēvaṟpāṟ ṟaṉṟu.",
    english: "A task should be entrusted only to one capable of understanding and accomplishing it, not merely to one who seems admirable.",
    tamilUrai: "செய்யும் செயலை நன்கு அறிந்து சாதிக்க வல்லவர்களிடத்தில் தான் பணியை ஒப்படைக்க வேண்டும்; வெறுமனே பிறரால் சிறந்தவர் எனக் கருதப்படுபவனிடம் அல்ல.",
    altTranslation: "Task should be given him who understands and does — Not to the man by reputation praised without a pause. — Pope"
  },
  {
    num: 516, chapter: 52,
    tamil: "செய்வானை நாடி வினைநாடிக் காலத்தோடு\nஎய்த உணர்ந்து செயல்.",
    transliteration: "Ceyvāṉai nāṭi viṉaināṭik kālattōṭu\nEyta uṇarntu ceyal.",
    english: "Choose the man, examine the work, find the right time — then let the work be done.",
    tamilUrai: "செய்யும் ஆளை ஆராய்ந்து, செயலின் தன்மையை ஆராய்ந்து, ஏற்ற காலத்தையும் அறிந்து, பின்னர் அந்தச் செயலைச் செய்ய வேண்டும்.",
    altTranslation: "Examine man, and weigh the task, and time's due hour — Then only act — that yields success in power. — Pope"
  },
  {
    num: 517, chapter: 52,
    tamil: "இதனை இதனால் இவன்முடிக்கும் என்றாய்ந்து\nஅதனை அவன்கண் விடல்.",
    transliteration: "Itaṉai itaṉāl ivaṉmuṭikkum eṉṟāyntu\nAtaṉai avaṉkaṇ viṭal.",
    english: "Having examined what each man can do, and how, assign to him the task he is fit for.",
    tamilUrai: "\"இந்த செயலை, இப்படிப்பட்ட வழியில், இவன் நிறைவேற்றுவான்\" என்று ஆராய்ந்து, அச்செயலை அந்த ஆளிடம் ஒப்படைக்க வேண்டும்.",
    altTranslation: "'This task, by this means, this man will complete' — So judging, trust the work to hands that match so meet. — Pope"
  },
  {
    num: 518, chapter: 52,
    tamil: "வினைக்குஉரிமை நாடிய பின்றை அவனை\nஅதற்குஉரிய னாகச் செயல்.",
    transliteration: "Viṉaikkuurimai nāṭiya piṉṟai avaṉai\naṯaṟkuuriya ṉākac ceyal.",
    english: "After examining a man's fitness for a task, empower him fully to carry it out.",
    tamilUrai: "செய்யும் செயலுக்கு அவனது தகுதியை உறுதி செய்த பிறகு, அந்தச் செயலை நிறைவேற்ற வேண்டிய அதிகாரத்தை அவனிடம் முழுமையாய் தர வேண்டும்.",
    altTranslation: "When fitness for a task is fully weighed, The man should then with all its power be arrayed. — Pope"
  },
  {
    num: 519, chapter: 52,
    tamil: "வினைக்கண் வினைகெடல் ஓம்பல் வினைக்குறை\nதீர்ந்தாரின் தீர்ந்தன்று உலகு.",
    transliteration: "Viṉaikkaṇ viṉaikeṭal ōmpal viṉaikkuṟai\nTīrntāriṉ tīrntaṉṟu ulaku.",
    english: "Fortune turns away from him who turns away from those who have toiled for him, failing to support their work.",
    tamilUrai: "செயலில் ஈடுபட்டுள்ளவர்களுக்கு, செயல் பழுதுறாதபடி துணையாய் இருப்பதைக் காக்காதவரை உலகம் (செல்வம்) கைவிடும்.",
    altTranslation: "Fortune abandons him who fails to aid those who toil; Who fails in work, the world itself shall him despoil. — Pope"
  },
  {
    num: 520, chapter: 52,
    tamil: "எந்நாளும் ஏவா தவன்பின் உலகியலும்\nஅந்நாளேஅற் றுஆகும் கடை.",
    transliteration: "Ennāḷum ēvā tavaṉpiṉ ulakiyalum\naṉṉāḷēaṟ ṟuākum kaṭai.",
    english: "When the day comes that the world no longer does the king's bidding, on that day his realm will perish.",
    tamilUrai: "அரசனது கட்டளையை உலகம் ஏற்றிருக்கும் நாள்களில், உலகம் நடந்து வரும்; அவன் கட்டளை ஏற்கப்படாத நாள் வந்தால், அன்றே அவனது அரசும் அழியும்.",
    altTranslation: "The day the realm obeys the king's command no more, That day itself the realm shall sink from sovereign shore. — Pope"
  },

  // CHAPTER 53 — Cherishing Kinsmen
  {
    num: 521, chapter: 53,
    tamil: "பற்றற்ற கண்ணும் பழைமைபா ராட்டுதல்\nசுற்றத்தார் கண்ணே யுள.",
    transliteration: "Paṟṟaṟṟa kaṇṇum paḻaimaipā rāṭṭutal\nCuṟṟattār kaṇṇē yuḷa.",
    english: "Only kinsmen, even when bonds of attachment loosen, continue to cherish old ties.",
    tamilUrai: "ஒருவன் செல்வம் இழந்தாலும், அவனுடைய பழமையான தொடர்பைப் போற்றி அன்பு பாராட்டும் குணம் சுற்றத்தாரிடம் மட்டுமே காணப்படும்.",
    altTranslation: "When wealth decays, the old-time ties that still remain, Are only those of kindred's loving chain. — Pope"
  },
  {
    num: 522, chapter: 53,
    tamil: "விருப்பறாச் சுற்றம் இயையின் அருப்பறா\nஆக்கம் பலவும் தரும்.",
    transliteration: "Viruppaṟāc cuṟṟam iyaiyiṉ aruppaṟā\nĀkkam palavum tarum.",
    english: "Kinsmen whose love never fails bring blessings that never cease.",
    tamilUrai: "அன்பு குறையாத சுற்றம் ஒருவருக்கு அமைந்தால், அந்த உறவு அவருக்கு நின்று விடாத பல மேன்மைகளை வழங்கும்.",
    altTranslation: "The kindred whose love ne'er fails shall bring To him rich gains as unceasing spring. — Pope"
  },
  {
    num: 523, chapter: 53,
    tamil: "அளவளா வில்லாதான் வாழ்க்கை குளவளாக்\nகோடின்றி நீர்நிறைந் தற்று.",
    transliteration: "Aḷavaḷā villātāṉ vāḻkkai kuḷavaḷāk\nKōṭiṉṟi nīrniṟain taṟṟu.",
    english: "The life of one who cherishes no kinsmen is like water filling a pool without banks.",
    tamilUrai: "சுற்றத்தாருடன் கலந்து உறவாடாதவனின் வாழ்க்கை, கரைகள் இல்லாத குளத்தில் நீர் நிறைந்து நிற்பதற்கு ஒப்பானதாகும்.",
    altTranslation: "The life of him who loves not kin is like the pool Filled full of water, but with banks empty and dull. — Pope"
  },
  {
    num: 524, chapter: 53,
    tamil: "சுற்றத்தால் சுற்றப் படஒழுகல் செல்வந்தான்\nபெற்றத்தால் பெற்ற பயன்.",
    transliteration: "Cuṟṟattāl cuṟṟap paṭaoḻukal celvantāṉ\nPeṟṟattāl peṟṟa payaṉ.",
    english: "To live surrounded by kin, beloved of them, is the true fruit of having won wealth.",
    tamilUrai: "தம்முடைய சுற்றத்தார் சூழ்ந்து நடக்குமாறு அன்பாய் வாழ்வதுதான், ஒருவன் செல்வத்தைப் பெற்றதனால் கிடைக்கும் உண்மையான பயன்.",
    altTranslation: "To live with kin in loving bond begirt, That is the gain of wealth which doth uphold and gird. — Pope"
  },
  {
    num: 525, chapter: 53,
    tamil: "கொடுத்தலும் இன்சொலும் ஆற்றின் அடுக்கிய\nசுற்றத்தால் சுற்றப் படும்.",
    transliteration: "Koṭuttalum iṉcolum āṟṟiṉ aṭukkiya\nCuṟṟattāl cuṟṟap paṭum.",
    english: "By liberality and gentle speech, one is surrounded by many kinsmen.",
    tamilUrai: "பிறர்க்குக் கொடுத்தலையும், இனிய சொற்களையும் முறையாய் கொண்டிருந்தால், ஒருவன் பலவகையான சுற்றத்தாரால் சூழப்பட்டு இருப்பான்.",
    altTranslation: "By giving gifts and words of grace, one finds around His life a widening throng of kindred bound. — Pope"
  },
  {
    num: 526, chapter: 53,
    tamil: "பெருங்கொடையான் பேணான் வெகுளி அவனின்\nமருங்குடையார் மாநிலத்து இல்.",
    transliteration: "Peruṅkoṭaiyāṉ pēṇāṉ vekuḷi avaṉiṉ\nmaruṅkuṭaiyār mānilattu il.",
    english: "There is none in the world with more kin around him than he who gives abundantly and has not yielded to anger.",
    tamilUrai: "பெரிய ஈகைத் தன்மை உடையவனாய், சினத்திற்கு இடங்கொடாதவனாய் இருப்பவன், மற்றவர்களை விட அதிக சுற்றத்தை உலகத்தில் பெற்றவனாய் விளங்குவான்.",
    altTranslation: "None in the earth has kindred ring so wide, As he who giveth bounteously, and wrath set aside. — Pope"
  },
  {
    num: 527, chapter: 53,
    tamil: "காக்கை கரவா கரைந்துண்ணும் ஆக்கமும்\nஅன்னநீ ரார்க்கே உள.",
    transliteration: "Kākkai karavā karaintuṇṇum ākkamum\naṉṉanī rārkkē uḷa.",
    english: "The crow hides nothing but calls its kin to share its food; prosperity belongs only to those who act so.",
    tamilUrai: "காக்கை தனக்குக் கிடைத்த உணவை மறைக்காமல், கூட்டத்தை அழைத்து உண்ணுகிறது; அத்தகைய பண்பு உடையவர்களிடமே செல்வமும் வளமும் தங்கி நிற்கும்.",
    altTranslation: "The crow ne'er hides, but calls its kin to share its bread; Such souls alone true wealth and kindred shall be led. — Pope"
  },
  {
    num: 528, chapter: 53,
    tamil: "பொதுநோக்கான் வேந்தன் வரிசையா நோக்கின்\nஅதுநோக்கி வாழ்வார் பலர்.",
    transliteration: "Potunōkkāṉ vēntaṉ varicaiyā nōkkiṉ\nAtunōkki vāḻvār palar.",
    english: "If a king looks upon men not with common regard but according to their worth, many will gather around him to live.",
    tamilUrai: "மன்னன் ஒவ்வொருவரையும் ஒருதன்மையாகப் பாராமல், அவர்களின் தகுதிக்கு ஏற்ப மதித்துப் பார்ப்பானானால், அந்த மதிப்பை எதிர்பார்த்து அவனைச் சார்ந்து வாழ்பவர்கள் பலராய் அதிகரிப்பர்.",
    altTranslation: "When kings look not on all alike, but weigh each worth, Many will live by that discerning eye of earth. — Pope"
  },
  {
    num: 529, chapter: 53,
    tamil: "தமராகிக் தற்றுறந்தார் சுற்றம் அமராமைக்\nகாரணம் இன்றி வரும்.",
    transliteration: "Tamarākit taṟṟuṟantār cuṟṟam amarāmaik\nKāraṇam iṉṟi varum.",
    english: "Kinsmen who once parted from us through discord will return on their own, when the cause of strife is gone.",
    tamilUrai: "ஒரு காலத்தில் தமராய் இருந்து, ஒற்றுமை கெட்ட காரணத்தால் விலகிப் போன சுற்றத்தார், அந்த மாறுபாட்டின் காரணம் இல்லாமல் போகும்போது, தாமாகவே திரும்பி வருவர்.",
    altTranslation: "Kindred once parted by some cause of strife, Return, when cause is gone, to former life. — Pope"
  },
  {
    num: 530, chapter: 53,
    tamil: "உழைப்பிரிந்து காரணத்தின் வந்தானை வேந்தன்\nஇழைத்திருந்து எண்ணிக் கொளல்.",
    transliteration: "Uḻaippirintu kāraṇattiṉ vantāṉai vēntaṉ\niḻaittiruntu eṇṇik koḷal.",
    english: "A king should examine with care the kinsman who, having once left his side, returns for some reason.",
    tamilUrai: "தன் பக்கத்திலிருந்து விலகிச் சென்று, ஏதோ காரணத்திற்காகத் திரும்பி வந்தவரை, மன்னன் ஆராய்ந்து அவரது தன்மையை எண்ணிப் பார்த்து ஏற்றுக் கொள்ள வேண்டும்.",
    altTranslation: "The kinsman who, once parted, now returns for need, The king should test, and weigh his motives with heed. — Pope"
  },

  // CHAPTER 54 — Unforgetfulness
  {
    num: 531, chapter: 54,
    tamil: "இறந்த வெகுளியின் தீதே சிறந்த\nஉவகை மகிழ்ச்சியிற் சோர்வு.",
    transliteration: "Iṟanta vekuḷiyiṉ tītē ciṟanta\nUvakai makiḻcciyiṟ cōrvu.",
    english: "Worse than excessive anger is the forgetfulness born of great joy.",
    tamilUrai: "அளவுக்கு மேற்பட்ட சினத்தை விடத் தீயது, மிகுந்த மகிழ்ச்சியினால் ஏற்படும் சோர்வே.",
    altTranslation: "Worse than wrath excessive — the forgetfulness profound That springs from joy's intoxicating sound. — Pope"
  },
  {
    num: 532, chapter: 54,
    tamil: "பொச்சாப்புக் கொல்லும் புகழை அறிவினை\nநிச்ச நிரப்புக் கொன் றாங்கு.",
    transliteration: "Poccāppuk kollum pukaḻai aṟiviṉai\nNicca nirappuk koṉ ṟāṅku.",
    english: "Forgetfulness destroys fame as surely as unceasing poverty destroys wisdom.",
    tamilUrai: "நாள்தோறும் நிலவும் வறுமை ஒருவனின் அறிவை அழிப்பதுபோல், மறதியான மனம் ஒருவனின் புகழை அழித்துவிடும்.",
    altTranslation: "Forgetfulness doth glory slay, as perpetual want Doth ruin wisdom, leaving naught. — Pope"
  },
  {
    num: 533, chapter: 54,
    tamil: "பொச்சாப்பார்க் கில்லை புகழ்மை அதுஉலகத்து\nஎப்பால்நூ லோர்க்கும் துணிவு.",
    transliteration: "Poccāppārk killai pukaḻmai atuulakattu\nEppālnū lōrkkum tuṇivu.",
    english: "The forgetful have no renown; so have all schools of learning in the world agreed.",
    tamilUrai: "மறதியுடையவர்க்கு புகழ்மை கிடையாது; இது உலகில் உள்ள எல்லாத் துறை அறிஞர்களின் உறுதியான முடிவாகும்.",
    altTranslation: "No glory comes to him of slothful, heedless mind — So agree in truth all learned schools of every kind. — Pope"
  },
  {
    num: 534, chapter: 54,
    tamil: "அச்சம் உடையார்க்கு அரணில்லை ஆங்கில்லை\nபொச்சாப் புடையார்க்கு நன்கு.",
    transliteration: "Accam uṭaiyārkku araṇillai āṅkillai\nPoccāp puṭaiyārkku naṉku.",
    english: "As no fort avails the cowardly, no good avails the forgetful.",
    tamilUrai: "பயம் உடையவர்களுக்குக் கோட்டையால் பயன் இல்லாதது போலவே, மறதி உடையவர்களுக்கு நல்லதான எதுவும் கிட்டாது.",
    altTranslation: "The fearful find no fort to guard; the forgetful too Find no advantage, though such gains their efforts woo. — Pope"
  },
  {
    num: 535, chapter: 54,
    tamil: "முன்னுறக் காவாது இழுக்கியான் தன்பிழை\nபின்னூ றிரங்கி விடும்.",
    transliteration: "Muṉṉuṟak kāvātu iḻukkiyāṉ taṉpiḻai\nPiṉṉū ṟiraṅki viṭum.",
    english: "He who does not guard beforehand will regret his fault when the trouble comes upon him.",
    tamilUrai: "துன்பம் வருவதற்கு முன்னரே அதைத் தடுக்காமல் சோர்ந்திருந்தவன், பின்னர் துன்பம் ஏற்படும்போது தனது தவறை எண்ணி வருந்துவான்.",
    altTranslation: "Who guards not 'gainst ills to come shall mourn too late, When his neglect has brought him to sad fate. — Pope"
  },
  {
    num: 536, chapter: 54,
    tamil: "இழுக்காமை யார்மாட்டும் என்றும் வழுக்காமை\nவாயின் அதுவொப்பது இல்.",
    transliteration: "Iḻukkāmai yārmāṭṭum eṉṟum vaḻukkāmai\nVāyiṉ atuvoppatu il.",
    english: "There is no virtue like the steady alertness that never fails in any matter with anyone.",
    tamilUrai: "எவ்விடத்திலும், எவரிடத்திலும், எந்தக் காலத்திலும் சோர்வின்றி விழிப்புடன் இருப்பதற்கு ஒப்பான சிறந்த பண்பு வேறு எதுவும் இல்லை.",
    altTranslation: "Alertness ever with all men that never faileth right, Is peer in excellence to no other, seen or heard, or sight. — Pope"
  },
  {
    num: 537, chapter: 54,
    tamil: "அரியஎன்று ஆகாத இல்லைபொச் சாவாக்\nகருவியால் போற்றிச் செயின்.",
    transliteration: "Ariyaeṉṟu ākāta illaipoc cāvāk\nKaruviyāl pōṟṟic ceyiṉ.",
    english: "Nothing is impossible if undertaken with the tool of unfailing vigilance.",
    tamilUrai: "மறதி என்பது இல்லாத விழிப்புணர்வு என்னும் கருவியுடன் முயற்சித்தால், அரிய செயல் என்று ஒன்றும் இல்லை.",
    altTranslation: "Nothing is hard to do, if one but take the tool Of wakeful mind, and never drowse or fool. — Pope"
  },
  {
    num: 538, chapter: 54,
    tamil: "புகழ்ந்தவை போற்றிச் செயல்வேண்டும் செய்யாது\nஇகழ்ந்தார்க்கு எழுமையும் இல்.",
    transliteration: "Pukaḻntavai pōṟṟic ceyalvēṇṭum ceyyātu\nIkaḻntārkku eḻumaiyum il.",
    english: "Do what is praised; those who do not, and instead scorn it, shall find no good through seven births.",
    tamilUrai: "பாராட்டப்பட்ட நற்செயல்களைப் போற்றி செய்ய வேண்டும்; அவ்வாறு செய்யாமல் இகழ்ந்தவர்களுக்கு ஏழு பிறப்புக்களிலும் நன்மை கிடையாது.",
    altTranslation: "What men have praised as worthy, that one must with care perform; Who scorns it, seven births of good his life shall ne'er adorn. — Pope"
  },
  {
    num: 539, chapter: 54,
    tamil: "இகழ்ச்சியின் கெட்டாரை உள்ளுக தாந்தம்\nமகிழ்ச்சியின் மைந்துறும் போழ்து.",
    transliteration: "Ikaḻcciyiṉ keṭṭārai uḷḷuka tāntam\nMakiḻcciyiṉ maintuṟum pōḻtu.",
    english: "In moments of great joy, remember those who have fallen through careless pride.",
    tamilUrai: "நாம் மகிழ்ச்சியால் மயங்கும் போது, மனக்கேடு ஏற்படாத வண்ணம், முன்னர் அலட்சியத்தினால் கெட்டுப்போனவர்களை நினைவுகூர வேண்டும்.",
    altTranslation: "In hours of joy, let memory keep before thy sight Those who were ruined by their pride — thy guiding light. — Pope"
  },
  {
    num: 540, chapter: 54,
    tamil: "உள்ளியது எய்தல் எளிதுமன் மற்றுந்தான்\nஉள்ளியது உள்ளப் பெறின்.",
    transliteration: "Uḷḷiyatu eytal eḷitumaṉ maṟṟuntāṉ\nuḷḷiyatu uḷḷap peṟiṉ.",
    english: "Easy it is to obtain what one has planned, if one keeps steady in that purpose without forgetting.",
    tamilUrai: "ஒருவன் எண்ணியதை அடைவது எளிதானதே ஆகும்; அவன் எண்ணியதை மறக்காமல் எப்போதும் நினைவில் கொண்டிருந்தால்.",
    altTranslation: "Easy 'tis to gain the object one has planned, If in unbroken purpose firm one stand. — Pope"
  },

  // CHAPTER 55 — The Right Sceptre
  {
    num: 541, chapter: 55,
    tamil: "ஓர்ந்துகண் ணோடாது இறைபுரிந்து யார்மாட்டும்\nதேர்ந்துசெய் வஃதே முறை.",
    transliteration: "Ōrntukaṇ ṇōṭātu iṟaipurintu yārmāṭṭum\nTērntucey vaḵtē muṟai.",
    english: "To inquire into each case, show no partiality, uphold justice, and pass sentence after examination — this is the true rule.",
    tamilUrai: "எவரிடத்திலும் பாரபட்சம் காட்டாமல் ஆராய்ந்து, நடுநிலையுடன் நியாயம் வழங்கி, தீர்ப்பிடுவதே உண்மையான ஆட்சி முறை.",
    altTranslation: "To investigate without partiality, to hold fast to justice, And judge thereafter, — that is rulership's high office. — Pope"
  },
  {
    num: 542, chapter: 55,
    tamil: "வானோக்கி வாழும் உலகெல்லாம் மன்னவன்\nகோல்நோக்கி வாழுங் குடி.",
    transliteration: "Vāṉōkki vāḻum ulakellām maṉṉavaṉ\nKōlnōkki vāḻuṅ kuṭi.",
    english: "As all the world looks to the rain, so all subjects look to the sceptre of the king.",
    tamilUrai: "உலகத்தில் உள்ளவை எல்லாம் வானத்தை நோக்கி வாழ்கின்றன; அதேபோல, குடிமக்கள் தம் மன்னனின் செங்கோலை நோக்கியே வாழ்கின்றனர்.",
    altTranslation: "As all the world looks upward for the rain, So subjects look to monarch's righteous reign. — Pope"
  },
  {
    num: 543, chapter: 55,
    tamil: "அந்தணர் நூற்கும் அறத்திற்கும் ஆதியாய்\nநின்றது மன்னவன் கோல்.",
    transliteration: "Antaṇar nūṟkum aṟattiṟkum ātiyāy\nNiṉṟatu maṉṉavaṉ kōl.",
    english: "The king's sceptre is the foundation both of the sages' learning and of virtue itself.",
    tamilUrai: "அந்தணரின் நூல்களின் வளர்ச்சிக்கும், அறத்தின் நிலைப்புக்கும் அடிப்படையாய் நிற்பது மன்னனின் செங்கோலே.",
    altTranslation: "Both sacred lore and virtue's very base Repose on kingly sceptre's ruling grace. — Pope"
  },
  {
    num: 544, chapter: 55,
    tamil: "குடிதழீஇக் கோலோச்சும் மாநில மன்னன்\nஅடிதழீஇ நிற்கும் உலகு.",
    transliteration: "Kuṭitaḻīik kōlōccum mānila maṉṉaṉ\nAṭitaḻīi niṟkum ulaku.",
    english: "The world embraces the feet of the king who embraces his people and rules them with the right sceptre.",
    tamilUrai: "குடிமக்களை அரவணைத்து நேர்மையுடன் ஆட்சி செய்யும் மாபெரும் நிலம் கொண்ட மன்னனின் காலடியில் உலகம் அமைந்து நிற்கும்.",
    altTranslation: "The world shall clasp his feet, the king who, loving well His people, wields the righteous sceptre, none can tell. — Pope"
  },
  {
    num: 545, chapter: 55,
    tamil: "இயல்புளிக் கோலோச்சும் மன்னவன் நாட்ட\nபெயலும் விளையுளும் தொக்கு.",
    transliteration: "Iyalpuḷik kōlōccum maṉṉavaṉ nāṭṭa\nPeyalum viḷaiyuḷum tokku.",
    english: "Where a king wields the sceptre rightly and in due season, there both rain and harvest abound.",
    tamilUrai: "நீதி நிறைந்த ஆட்சியை நடத்தும் மன்னனின் நாட்டில், மழையும் விளைச்சலும் ஒரு சேர பெருகி நிற்கும்.",
    altTranslation: "Where rules a king with righteous sceptre, true in time, Rain falls, harvests flourish, seasons sublime. — Pope"
  },
  {
    num: 546, chapter: 55,
    tamil: "வேலன்று வென்றி தருவது மன்னவன்\nகோலதூஉங் கோடா தெனின்.",
    transliteration: "Vēlaṉṟu veṉṟi taruvatu maṉṉavaṉ\nKōlatūuṅ kōṭā teṉiṉ.",
    english: "It is not the spear but the sceptre — if it bends not from justice — that gives the king victory.",
    tamilUrai: "மன்னனுக்கு வெற்றியைத் தருவது போருக்குப் பயன்படுத்தும் வேல் அல்ல; நீதி தவறாத அவனது செங்கோலே ஆகும்.",
    altTranslation: "Not the spear, but the sceptre never bent away From right, gives kings the victor's crown each day. — Pope"
  },
  {
    num: 547, chapter: 55,
    tamil: "இறைகாக்கும் வையகம் எல்லாம் அவனை\nமுறைகாக்கும் முட்டாச் செயின்.",
    transliteration: "Iṟaikākkum vaiyakam ellām avaṉai\nMuṟaikākkum muṭṭāc ceyiṉ.",
    english: "The king guards the whole world; justice, unbroken, guards the king.",
    tamilUrai: "மன்னன் முழு உலகத்தையும் காக்கிறான்; அவனை, அவன் செய்யும் நீதியே குற்றமின்றி நடைபெற்றால், பாதுகாக்கும்.",
    altTranslation: "The monarch guards the world; justice unfailing, though all tested, Guards in turn the monarch faithfully attested. — Pope"
  },
  {
    num: 548, chapter: 55,
    tamil: "எண்பதத்தான் ஓரா முறைசெய்யா மன்னவன்\nதண்பதத்தான் தானே கெடும்.",
    transliteration: "Eṇpatattāṉ ōrā muṟaiceyyā maṉṉavaṉ\nTaṇpatattāṉ tāṉē keṭum.",
    english: "The king inaccessible to his people, who fails to inquire and give justice, loses his sovereignty and perishes.",
    tamilUrai: "மக்களால் எளிதில் அணுக முடியாதவனாய், ஆராய்ந்து நியாயம் வழங்காத மன்னன், தனது நிலை தாழ்ந்து தானே அழிந்து போவான்.",
    altTranslation: "The king who shuts his door, nor hears, nor judgment gives, Himself shall fall — his own undoing cleaves. — Pope"
  },
  {
    num: 549, chapter: 55,
    tamil: "குடிபுறங் காத்தோம்பிக் குற்றம் கடிதல்\nவடுவன்று வேந்தன் தொழில்.",
    transliteration: "Kuṭipuṟaṅ kāttōmpik kuṟṟam kaṭital\nVaṭuvaṉṟu vēntaṉ toḻil.",
    english: "To protect his subjects and punish wrongdoers is no fault — it is the king's own duty.",
    tamilUrai: "குடிமக்களை வெளிப்புறமாய் பாதுகாத்து, குற்றம் செய்தவர்களை தண்டிப்பது மன்னனுக்குக் குற்றமாகாது; அது அவனது கடமையே ஆகும்.",
    altTranslation: "To guard his subjects, crush the wicked — this is no fault, But monarch's proper task, exempt from all assault. — Pope"
  },
  {
    num: 550, chapter: 55,
    tamil: "கொலையிற் கொடியாரை வேந்தொறுத்தல் பைங்கூழ்\nகளைகட் டதனொடு நேர்.",
    transliteration: "Kolaiyiṟ koṭiyārai vēntoṟuttal paiṅkūḻ\nKaḷaikaṭ ṭataṉoṭu nēr.",
    english: "A king's punishing cruel men even unto death is as needful as a farmer's weeding the green crop.",
    tamilUrai: "கொடியவர்களை மன்னன் மரண தண்டனை விதித்துத் தண்டிப்பது, உழவன் பசுமையான பயிரில் களையை கிள்ளி எறிவதற்கு ஒப்பானதே.",
    altTranslation: "The king who slays the wicked, — even by fatal stroke, — Acts as the farmer pulling weeds from tender corn-grown yoke. — Pope"
  },

  // CHAPTER 56 — The Cruel Sceptre
  {
    num: 551, chapter: 56,
    tamil: "கொலைமேற்கொண் டாரிற் கொடிதே அலைமேற்கொண்டு\nஅல்லவை செய்தொழுகும் வேந்து.",
    transliteration: "Kolaimēṟkoṇ ṭāriṟ koṭitē alaimēṟkoṇṭu\nAllavai ceytoḻukum vēntu.",
    english: "Worse than a murderer is a king who oppresses and commits unjust deeds.",
    tamilUrai: "தொழிலாகவே கொலை செய்பவனைக் காட்டிலும் கொடியவன், கொடுமைப்படுத்தி அறமற்ற செயல்களைச் செய்து ஆட்சி நடத்தும் மன்னனே.",
    altTranslation: "Worse than the murderer is the king who, oppression's friend, Rules with unjust acts to their distressing end. — Pope"
  },
  {
    num: 552, chapter: 56,
    tamil: "வேலொடு நின்றான் இடுவென் றதுபோலும்\nகோலொடு நின்றான் இரவு.",
    transliteration: "Vēloṭu niṉṟāṉ iṭueṉ ṟatupōlum\nKōloṭu niṉṟāṉ iravu.",
    english: "The begging of a king wielding his sceptre is like the highwayman's demand with spear in hand.",
    tamilUrai: "\"கொடு\" என்று செங்கோலுடன் நின்று அரசன் வற்புறுத்திக் கேட்பது, வேலுடன் நின்று வழிப்பறி செய்பவன் கேட்பதற்கு ஒப்பானது.",
    altTranslation: "The sceptred king who pleads for wealth from subject hand, Is as the robber with the spear who cries 'Stand!' — Pope"
  },
  {
    num: 553, chapter: 56,
    tamil: "நாடொறும் நாடி முறைசெய்யா மன்னவன்\nநாடொறும் நாடு கெடும்.",
    transliteration: "Nāṭoṟum nāṭi muṟaiceyyā maṉṉavaṉ\nNāṭoṟum nāṭu keṭum.",
    english: "A king who does not daily examine and render justice will daily see his kingdom decline.",
    tamilUrai: "ஒவ்வொரு நாளும் நாட்டின் நிகழ்வுகளை ஆராய்ந்து, நியாயம் வழங்காத மன்னனின் நாடு, நாள்தோறும் சிதைந்து கெடும்.",
    altTranslation: "The king who each day inquires not, nor renders right, Shall see each day his realm in sorry plight. — Pope"
  },
  {
    num: 554, chapter: 56,
    tamil: "கூழுங் குடியும் ஒருங்கிழக்கும் கோல்கோடிச்\nசூழாது செய்யும் அரசு.",
    transliteration: "Kūḻuṅ kuṭiyum oruṅkiḻakkum kōlkōṭic\nCūḻātu ceyyum aracu.",
    english: "A government that, bending justice, acts without due thought will lose both wealth and people at once.",
    tamilUrai: "செங்கோல் முறைதவறி, நன்கு ஆராயாமல் ஆட்சி நடத்தும் அரசு, தனது செல்வத்தையும், குடிமக்களையும் ஒரேசமயத்தில் இழந்துவிடும்.",
    altTranslation: "The king that bends his sceptre and acts without due thought, Loses wealth and subjects both — all to ruin brought. — Pope"
  },
  {
    num: 555, chapter: 56,
    tamil: "அல்லற்பட்டு ஆற்றாது அழுதகண் ணீரன்றே\nசெல்வத்தைத் தேய்க்கும் பட.",
    transliteration: "Allaṟpaṭṭu āṟṟātu aḻutakaṇ ṇīraṉṟē\nCelvattait tēykkum paṭai.",
    english: "The tears of an oppressed and helpless people are surely the weapon that wears away a king's wealth.",
    tamilUrai: "கொடுமைக்கு ஆளாகிப் பொறுக்க இயலாமல் மக்கள் சிந்தும் கண்ணீரே, மன்னனின் செல்வத்தை தேய்த்து அழிக்கும் ஆயுதம் ஆகும்.",
    altTranslation: "The tears of wronged and helpless subjects are the sword That wears away the wealth of the ruling lord. — Pope"
  },
  {
    num: 556, chapter: 56,
    tamil: "மன்னர்க்கு மன்னுதல் செங்கோன்மை அஃதின்றேல்\nமன்னாவாம் மன்னர்க் கொளி.",
    transliteration: "Maṉṉarkku maṉṉutal ceṅkōṉmai aḵtiṉṟēl\nMaṉṉāvām maṉṉark koḷi.",
    english: "The durability of a king's rule depends on the right sceptre; without justice, the king's glory will not endure.",
    tamilUrai: "மன்னர்கள் நிலைத்திருப்பதற்குக் காரணம் அவர்கள் செய்யும் நீதி ஆட்சியே; அந்த நீதி இல்லையானால், அவர்களின் புகழ் நிலைத்து நிற்காது.",
    altTranslation: "The king's firm stand is his just sceptre; wanting it, His glory shall not long upon his brow sit. — Pope"
  },
  {
    num: 557, chapter: 56,
    tamil: "துளியின்மை ஞாலத்திற்கு எற்றற்றே வேந்தன்\nஅளியின்மை வாழும் உயிர்க்கு.",
    transliteration: "Tuḷiyiṉmai ñālattiṟku eṟṟaṟṟē vēntaṉ\naḷiyiṉmai vāḻum uyirkku.",
    english: "The absence of the king's grace is to living beings what drought is to the earth.",
    tamilUrai: "மழைத் துளி இல்லாதிருப்பது உலகத்திற்கு எத்துணைத் துன்பம் தருமோ, அதே போன்ற துன்பத்தை, மன்னனின் அருள் இல்லாதிருப்பது மக்களுக்கு ஏற்படுத்தும்.",
    altTranslation: "Like drought to earth, so to the living is the want Of royal grace — a grief no means supplant. — Pope"
  },
  {
    num: 558, chapter: 56,
    tamil: "இன்மையின் இன்னாது உடைமை முறைசெய்யா\nமன்னவன் கோற்கீழ்ப் படின்.",
    transliteration: "Iṉmaiyiṉ iṉṉātatu yāteṉiṉ iṉmaiyiṉ\nIṉmaiyē iṉṉā tatu.",
    english: "What is more painful than poverty? It is only the living under an unjust king, worse than poverty itself.",
    tamilUrai: "வறுமையை விட கடுமையான துன்பம் என்னவென்றால், நீதியற்ற அரசின் கீழ் வாழும் நிலையே; அதை விடக் கொடுமையானது வேறெதும் இல்லை.",
    altTranslation: "What's worse than want? To live beneath unrighteous king — Want's more than want, a more afflictive sting. — Pope"
  },
  {
    num: 559, chapter: 56,
    tamil: "முறைகோடி மன்னவன் செய்யின் உறைகோடி\nஒல்லாது வானம் பெயல்.",
    transliteration: "Muṟaikōṭi maṉṉavaṉ ceyyiṉ uṟaikōṭi\nOllātu vāṉam peyal.",
    english: "If the king rules unjustly, the clouds too will fail to yield rain.",
    tamilUrai: "மன்னன் நீதி தவறி ஆட்சி செய்தால், பருவகாலம் தவறி, வானம் மழை பெய்யாமல் போய்விடும்.",
    altTranslation: "If kings swerve from right, then showers timely fail, And clouds themselves to sending rain prevail not. — Pope"
  },
  {
    num: 560, chapter: 56,
    tamil: "ஆபயன் குன்றும் அறுதொழிலோர் நூல்மறப்பர்\nகாவலன் காவான் எனின்.",
    transliteration: "Āpayaṉ kuṉṟum aṟutoḻilōr nūlmaṟappar\nKāvalaṉ kāvāṉ eṉiṉ.",
    english: "If the king does not protect, the cows yield less, and the scholars forget their sacred texts.",
    tamilUrai: "பாதுகாவலனாகிய மன்னன் மக்களைக் காக்காமல் போனால், பசு கொடுக்கும் பயன் குறையும்; ஆறு தொழில் அந்தணர்கள் தம் நூல்களை மறந்து விடுவர்.",
    altTranslation: "The cows yield less, the sages forget their sacred lore, When monarchs guard the realm no more. — Pope"
  },

  // CHAPTER 57 — Absence of Terrorism
  {
    num: 561, chapter: 57,
    tamil: "தக்காங்கு நாடித் தலைச்செல்லா வண்ணத்தால்\nஒத்தாங்கு ஒறுப்பது வேந்து.",
    transliteration: "Takkāṅku nāṭit talaicellā vaṇṇattāl\nOttāṅku oṟuppatu vēntu.",
    english: "The true king is one who, after careful inquiry, gives proportionate punishment so that the offence does not recur.",
    tamilUrai: "ஒரு குற்றம் மீண்டும் நிகழாத வகையில், பொருத்தமாக ஆராய்ந்து, செய்யப்பட்ட தவற்றுக்குத் தக்க தண்டனை வழங்குபவனே உண்மையான மன்னன்.",
    altTranslation: "The king is he who rightly weighs, and meets with fit degree Each fault, that it may not return as it did formerly. — Pope"
  },
  {
    num: 562, chapter: 57,
    tamil: "கடிதோச்சி மெல்ல எறிக நெடிதாக்கம்\nநீங்காமை வேண்டு பவர்.",
    transliteration: "Kaṭitōcci mella eṟika neṭitākkam\nNīṅkāmai vēṇṭu pavar.",
    english: "Those who desire their prosperity to endure must raise the rod high but let it fall lightly.",
    tamilUrai: "செல்வம் நெடுங்காலம் நீங்காமல் நிலைத்திருக்க வேண்டுமென விரும்புபவர்கள், தண்டிப்பதற்கான கையை விரைவாக உயர்த்தினாலும், மெல்லவே கீழிறக்க வேண்டும்.",
    altTranslation: "Raise swift the rod on high, but strike it gently down, Who would long enduring prosperity to crown. — Pope"
  },
  {
    num: 563, chapter: 57,
    tamil: "வெருவந்த செய்தொழுகும் வெங்கோல னாயின்\nஒருவந்தம் ஒல்லைக் கெடும்.",
    transliteration: "Veruvanta ceytoḻukum veṅkōla ṉāyiṉ\nOruvantam ollaik keṭum.",
    english: "A cruel-sceptred king who rules by terrorizing his subjects will certainly and swiftly perish.",
    tamilUrai: "மக்களுக்கு அச்சம் தரும் வன்முறை செய்து ஆட்சி நடத்தும் கொடுங்கோல மன்னன், நிச்சயமாய் விரைந்தே அழிந்து போவான்.",
    altTranslation: "The cruel king, whose rule is terror, sharp and fell, Shall swiftly perish; this is surely known full well. — Pope"
  },
  {
    num: 564, chapter: 57,
    tamil: "இறைகடியன் என்றுரைக்கும் இன்னாச்சொல் வேந்தன்\nஉறைகடுகி ஒல்லைக் கெடும்.",
    transliteration: "Iṟaikaṭiyaṉ eṉṟuraikkum iṉṉāccol vēntaṉ\nuṟaikaṭuki ollaik keṭum.",
    english: "The king of whom subjects say bitterly 'our ruler is harsh' will lose his days and swiftly perish.",
    tamilUrai: "\"எங்கள் ஆட்சியாளர் மிகக் கொடியவர்\" என்று மக்கள் புலம்பும்படி ஆட்சி செய்யும் மன்னனின் ஆயுள் குறைந்து விரைவில் அவன் அழிவான்.",
    altTranslation: "The king of whom his subjects speak with bitter tongue 'A tyrant' — soon his years are cut, his days unstrung. — Pope"
  },
  {
    num: 565, chapter: 57,
    tamil: "அருஞ்செவ்வி இன்னா முகத்தான் பெருஞ்செல்வம்\nபேஎய்கண் டன்னது உடைத்து.",
    transliteration: "Aruñcevvi iṉṉā mukattāṉ peruñcelvam\nPēeykaṇ ṭaṉṉatu uṭaittu.",
    english: "The great wealth of him who is hard to approach and grim of face is as wealth guarded by a demon.",
    tamilUrai: "எளிதில் அணுக முடியாமலும், கடுமையான முகத்துடனும் இருக்கும் ஒருவன் கொண்டுள்ள பெருஞ்செல்வம், ஒரு பேய் காப்பாற்றுகிற செல்வம் போன்றது.",
    altTranslation: "Wealth of him who hard to approach, of gloomy mien, Is as treasure guarded by a demon seldom seen. — Pope"
  },
  {
    num: 566, chapter: 57,
    tamil: "கடுஞ்சொல்லன் கண்ணிலன் ஆயின் நெடுஞ்செல்வம்\nநீடின்றி ஆங்கே கெடும்.",
    transliteration: "Kaṭuñcollaṉ kaṇṇilaṉ āyiṉ neṭuñcelvam\nNīṭiṉṟi āṅkē keṭum.",
    english: "Harsh of speech and without compassion — such a king's great wealth will quickly come to naught.",
    tamilUrai: "கடுமையான சொற்களைப் பேசி, அருள் இல்லாமல் இருக்கும் மன்னனின் பெருமையான செல்வம், நெடுங்காலம் நிலைக்காமல் உடனே அழிந்துவிடும்.",
    altTranslation: "Rude of speech and void of grace — the riches of that king Shall not endure, but in a moment takes their fatal wing. — Pope"
  },
  {
    num: 567, chapter: 57,
    tamil: "கடுமொழியும் கையிகந்த தண்டமும் வேந்தன்\nஅடுமுரண் தேய்க்கும் அரம்.",
    transliteration: "Kaṭumoḻiyum kaiyikanta taṇṭamum vēntaṉ\naṭumuraṇ tēykkum aram.",
    english: "Harsh words and disproportionate punishment are the file that wears away a king's conquering might.",
    tamilUrai: "கடுஞ்சொல்லும், அளவு மீறிய தண்டனையும், மன்னனின் பகையழிக்கும் ஆற்றலை தேய்க்கும் அரம் போன்றவை.",
    altTranslation: "Cutting speech and punishment beyond all bound Wear down the king's victorious arm — they clip and hound. — Pope"
  },
  {
    num: 568, chapter: 57,
    tamil: "இனத்தாற்றி எண்ணாத வேந்தன் சினத்தாற்றிச்\nசீர்ஞ்செல்வம் சீரறக் கெடும்.",
    transliteration: "Iṉattāṟṟi eṇṇāta vēntaṉ ciṉattāṟṟic\nCīrñcelvam cīraṟak keṭum.",
    english: "The wealth of a king who does not deliberate with his council and acts only in anger will lose all its luster and perish.",
    tamilUrai: "தம் அமைச்சர் கூட்டத்துடன் ஆராய்ந்து ஆலோசிக்காமல், கோபம் கொண்டு செயற்படும் மன்னனின் சிறப்பான செல்வம், சிறப்பை முற்றிலும் இழந்து கெடும்.",
    altTranslation: "The king who shuns his counsel, rages without thought, Shall see his wealth and splendour brought to naught. — Pope"
  },
  {
    num: 569, chapter: 57,
    tamil: "செருவந்த போழ்திற் சிறைசெய்யா வேந்தன்\nவெருவந்து வெய்து கெடும்.",
    transliteration: "Ceruvanta pōḻtiṟ ciṟaiceyyā vēntaṉ\nVeruvantu veytu keṭum.",
    english: "The king who has not built strong forts in peacetime will be struck with fear and perish when war comes.",
    tamilUrai: "போர் வருவதற்கு முன்னரே அரண்களை அமைக்காத மன்னன், போர் வந்தவுடன் அச்சம் அடைந்து, விரைந்து அழிந்து போவான்.",
    altTranslation: "The king who builds no forts in peace shall know the smart Of sudden dread when battle's terror pierce his heart. — Pope"
  },
  {
    num: 570, chapter: 57,
    tamil: "கல்லார்ப் பிணிக்கும் கடுங்கோல் அதுவல்லது\nஇல்லை நிலக்குப் பொறை.",
    transliteration: "Kallārp piṇikkum kaṭuṅkōl atuvallatu\nillai nilakkup poṟai.",
    english: "No burden weighs the earth more than a cruel king keeping ignorant counsellors about him.",
    tamilUrai: "கல்வியறிவு இல்லாதவர்களை சுற்றிக் கொண்டிருக்கும் கொடுமையான ஆட்சி — இதுவே பூமிக்குச் சுமையாகும்; இதுவல்லாது வேறு சுமை உலகிற்கு இல்லை.",
    altTranslation: "No load the earth doth bear so wearying and severe, As cruel king surrounded by ignorant councillors near. — Pope"
  },

  // CHAPTER 58 — Benignity
  {
    num: 571, chapter: 58,
    tamil: "கண்ணோட்டம் என்னும் கழிபெரும் காரிகை\nஉண்மையான் உண்டிவ் வுலகு.",
    transliteration: "Kaṇṇōṭṭam eṉṉum kaḻiperum kārikai\nUṇmaiyāṉ uṇṭiv vulaku.",
    english: "It is because of the great beauty called benignity that the world continues to exist.",
    tamilUrai: "\"கண்ணோட்டம்\" என்று சொல்லப்படும், அளவில்லாத பேரழகாய் அமைந்த அருள் மனத்தன்மை உலகத்தில் இருக்கிறதால் தான், இந்த உலகம் தொடர்ந்து இயங்குகிறது.",
    altTranslation: "'Tis by the presence of that lovely thing Called grace, that this world lasts through everything. — Pope"
  },
  {
    num: 572, chapter: 58,
    tamil: "கண்ணோட்டத் துள்ளது உலகியல் அஃதிலார்\nஉண்மை நிலக்குப் பொறை.",
    transliteration: "Kaṇṇōṭṭat tuḷḷatu ulakiyal aḵtilār\nUṇmai nilakkup poṟai.",
    english: "The life of the world rests on benignity; those without it are only a burden to the earth.",
    tamilUrai: "இந்த உலகத்தின் இயக்கம், மக்களிடத்தில் உள்ள கண்ணோட்டத்தின் வழியாகவே நடக்கிறது; அது இல்லாதவர்கள் பூமிக்குச் சுமையே ஆவர்.",
    altTranslation: "The world's own life doth rest on grace of kindly sight; The graceless are but burden to the earth's delight. — Pope"
  },
  {
    num: 573, chapter: 58,
    tamil: "பண்என்னாம் பாடற்கு இயைபின்றேல் கண்என்னாம்\nகண்ணோட்டம் இல்லாத கண்.",
    transliteration: "Paṇeṉṉām pāṭaṟku iyaipiṉṟēl kaṇeṉṉām\nKaṇṇōṭṭam illāta kaṇ.",
    english: "Of what use is music that suits not the singing? Of what use are eyes without benignity?",
    tamilUrai: "பாடலுக்குப் பொருந்தாத பண் எதற்காக? அதுபோல, கண்ணோட்டம் என்னும் அருள் தன்மை இல்லாத கண்ணும் எதற்காக?",
    altTranslation: "What is the tune that suits no song? And what the eye, Without the grace of kindly look, for passers-by? — Pope"
  },
  {
    num: 574, chapter: 58,
    tamil: "உளபோல் முகத்தெவன் செய்யும் அளவினால்\nகண்ணோட்டம் இல்லாத கண்.",
    transliteration: "Uḷapōl mukatteveṉ ceyyum aḷaviṉāl\nKaṇṇōṭṭam illāta kaṇ.",
    english: "What service do the eyes render on the face, if they know no kindly glance of proper measure?",
    tamilUrai: "பார்வையுடன் பொருந்திய அளவான அருளோடு கூடிய கண்ணோட்டம் இல்லாத கண்கள், முகத்தில் இருப்பது போலக் காட்சி அளித்தாலும், என்ன பயன் தரும்?",
    altTranslation: "The eyes without that measured grace of kindly sight, What do they do on face, though they appear in light? — Pope"
  },
  {
    num: 575, chapter: 58,
    tamil: "கண்ணிற்கு அணிகலம் கண்ணோட்டம் அஃதின்றேல்\nபுண்ணென்று உணரப் படும்.",
    transliteration: "Kaṇṇiṟku aṇikalam kaṇṇōṭṭam aḵtiṉṟēl\nPuṇṇeṉṟu uṇarap paṭum.",
    english: "Kindness is the ornament of the eye; without it, the eye is but a sore.",
    tamilUrai: "கண்களுக்கு அணிகலனாக இருப்பது கண்ணோட்டம்; அந்த அருளும் பார்வையும் இல்லாதபட்சத்தில், கண் என்பது ஒரு புண் என்று உணரப்பட வேண்டும்.",
    altTranslation: "Grace is the jewel of the eye; lacking that jewel bright, 'Tis but a wound, and not a thing that lights the sight. — Pope"
  },
  {
    num: 576, chapter: 58,
    tamil: "மண்ணோ டியைந்த மரத்தனையர் கண்ணோ\nடியைந்துகண் ணோடா தவர்.",
    transliteration: "Maṇṇō ṭiyainta marattaṉaiyar kaṇṇō\nṭiyaintukaṇ ṇōṭā tavar.",
    english: "Those with eyes that show no kindly glance are like trees fixed in the earth, though they seem alive.",
    tamilUrai: "கண்களைக் கொண்டிருந்தும், பிறர் மேல் அருள்கொண்ட பார்வையை வழங்காதவர்கள், உயிருள்ளது போல் தோன்றினாலும், பூமியில் வேர் ஊன்றிய மரத்தை ஒத்தவர்கள்.",
    altTranslation: "Who, having eyes, with kindly glance will not befriend, Are as a tree to earth's hard soil attaching end. — Pope"
  },
  {
    num: 577, chapter: 58,
    tamil: "கண்ணோட்டம் இல்லவர் கண்ணிலர் கண்ணுடையார்\nகண்ணோட்டம் இன்மையும் இல்.",
    transliteration: "Kaṇṇōṭṭam illavar kaṇṇilar kaṇṇuṭaiyār\nKaṇṇōṭṭam iṉmaiyum il.",
    english: "Those without benignity have no real eyes; those who truly have eyes are never without benignity.",
    tamilUrai: "அருளுள்ள பார்வை இல்லாதவர்கள், உண்மையில் கண்ணை உடையவர்கள் அல்ல; உண்மையான கண்ணை உடையவர்களுக்கு அருள்கொண்ட பார்வை இல்லாமல் போவதும் இல்லை.",
    altTranslation: "Graceless men have in truth no eye; those who have eyes' light Will never fail in grace of kindly sight. — Pope"
  },
  {
    num: 578, chapter: 58,
    tamil: "கருமம் சிதையாமல் கண்ணோட வல்லார்க்கு\nஉரிமை உடைத்துஇவ் வுலகு.",
    transliteration: "Karumam citaiyāmal kaṇṇōṭa vallārkku\nUrimai uṭaittuiv vulaku.",
    english: "This world belongs by right to those who can be kindly without failing in duty.",
    tamilUrai: "தம் கடமை தவறாமல், பிறர்மேல் அருள் காட்டி நடந்துகொள்ளும் ஆற்றலுடையவர்க்கே, இந்த உலகம் உரிமையாக விளங்கும்.",
    altTranslation: "To them who kindly are, while duty still they own, This world belongs, by proper right their very own. — Pope"
  },
  {
    num: 579, chapter: 58,
    tamil: "ஒறுத்தாற்றும் பண்பினார் கண்ணும்கண் ணோடிப்\nபொறுத்தாற்றும் பண்பே தலை.",
    transliteration: "Oṟuttāṟṟum paṇpiṉār kaṇṇumkaṇ ṇōṭip\nPoṟuttāṟṟum paṇpē talai.",
    english: "The highest virtue is to show benignity and bear with those who, by nature, would oppress us.",
    tamilUrai: "நம்மைத் துன்புறுத்தும் தன்மை உடையவர்களிடத்திலும், அருளுள்ள பார்வை காட்டி, அவர்தம் செயல்களைப் பொறுத்துக்கொள்ளுதலே தலையான சிறப்பான பண்பாகும்.",
    altTranslation: "To look with kindly gaze on those who work us ill, And bear with them — this is the noblest skill. — Pope"
  },
  {
    num: 580, chapter: 58,
    tamil: "பெயக்கண்டும் நஞ்சுண் டமைவர் நயத்தக்க\nநாகரிகம் வேண்டு பவர்.",
    transliteration: "Peyakkaṇṭum nañcuṇ ṭamaivar nayattakka\nNākarikam vēṇṭu pavar.",
    english: "Those who prize true courtesy will drink poison knowingly poured, and still remain calm.",
    tamilUrai: "ஏற்றுக்கொள்ளத் தக்க நாகரிக நடத்தையை விரும்புபவர்கள், தமக்கு ஊற்றப்படுவது நஞ்சு என்று அறிந்தும், அதை உண்டு பொறுமையோடு அமைதியாக இருப்பார்கள்.",
    altTranslation: "For civil graces who due honour crave, Will sip the poison offered, calm and brave. — Pope"
  },

  // CHAPTER 59 — Detectives
  {
    num: 581, chapter: 59,
    tamil: "ஒற்றும் உரைசான்ற நூலும் இவையிரண்டும்\nதெற்றென்க மன்னவன் கண்.",
    transliteration: "Oṟṟum uraicāṉṟa nūlum ivaiyiraṇṭum\nTeṟṟeṉka maṉṉavaṉ kaṇ.",
    english: "Let the king regard his spies and the great law-books as the two eyes through which he sees.",
    tamilUrai: "ஒற்றர் வழியாக வரும் செய்திகளையும், அதிகாரப்பூர்வமான நூல்களையும், மன்னன் தனது இரு கண்களாகத் தெளிவாகப் பயன்படுத்த வேண்டும்.",
    altTranslation: "The spy and the law-book reliable — such two Must be a monarch's eyes, through which he views. — Pope"
  },
  {
    num: 582, chapter: 59,
    tamil: "எல்லார்க்கும் எல்லாம் நிகழ்பவை எஞ்ஞான்றும்\nவல்லறிதல் வேந்தன் தொழில்.",
    transliteration: "Ellārkkum ellām nikaḻpavai eññāṉṟum\nVallaṟital vēntaṉ toḻil.",
    english: "To know at once and always what happens to everyone is the king's proper work.",
    tamilUrai: "ஒவ்வொருவருக்கும், ஒவ்வொரு இடத்திலும் என்ன நடைபெறுகிறது என்பதை விரைவாகவும், எப்போதுமாகவும் அறிந்துகொள்வதே ஒரு அரசனின் கடமையாகும்.",
    altTranslation: "To know of all men's deeds at every time and place — This is the business of the king of gracious pace. — Pope"
  },
  {
    num: 583, chapter: 59,
    tamil: "ஒற்றினான் ஒற்றிப் பொருள்தெரியா மன்னவன்\nகொற்றங் கொளக்கிடந்தது இல்.",
    transliteration: "Oṟṟiṉāṉ oṟṟip poruḷteriyā maṉṉavaṉ\nKoṟṟaṅ koḷakkiṭantatu il.",
    english: "No victory is possible for a king who does not discern the truth through the eyes of his spies.",
    tamilUrai: "ஒற்றர்களை அமர்த்தி, அவர்களிலிருந்து சரியான செய்திகளை ஆராய்ந்து தெரிந்துகொள்ளாத மன்னன், வெற்றி அடையப் பெறுவது இயலாது.",
    altTranslation: "Who through his spies learns not the truth's essential height — No victory crowns that monarch's royal might. — Pope"
  },
  {
    num: 584, chapter: 59,
    tamil: "வினைசெய்வார் தம்சுற்றம் வேண்டாதார் என்றாங்கு\nஅனைவரையும் ஆராய்வது ஒற்று.",
    transliteration: "Viṉaiceyvār tamcuṟṟam vēṇṭātār eṉṟāṅku\nAṉaivaraiyum ārāyvatu oṟṟu.",
    english: "A true spy investigates all — officials, kinsmen, and enemies alike.",
    tamilUrai: "அரசு பணியில் உள்ளவர், தம் உறவினர், தம் பகைவர் — ஆகிய அனைவரையும் மாறுபாடு இன்றி ஆராய்ந்து அறிபவனே உண்மையான ஒற்றன்.",
    altTranslation: "Officials, kin, and foes alike — all these, 'tis true, The spy examines, keeping all within his view. — Pope"
  },
  {
    num: 585, chapter: 59,
    tamil: "கடாஅ உருவொடு கண்அஞ்சா துய்த்துக்\nகடாஅயது ஒற்றுவது ஒற்று.",
    transliteration: "Kaṭāa uruvoṭu kaṇañcā tuyttuk\nKaṭāayatu oṟṟuvatu oṟṟu.",
    english: "One who adopts a form that arouses no suspicion, fears nothing, and investigates well — he is the true spy.",
    tamilUrai: "ஐயுறவை ஏற்படுத்தாத தோற்றத்துடன், எவருக்கும் அஞ்சாமல், ஐயம் எழுந்த செய்தியை ஆராய்ந்து அறிந்து வருபவனே சிறந்த ஒற்றன்.",
    altTranslation: "Disguise that rouses no suspicion, fearless eye, And skill to probe — these mark the spy's true mastery. — Pope"
  },
  {
    num: 586, chapter: 59,
    tamil: "துறந்தார் படிவத்த ராகி இறந்தாராய்ந்து\nஎன்செயினும் சோர்வி லது ஒற்று.",
    transliteration: "Tuṟantār paṭivatta rāki iṟantārāyntu\nEṉceyiṉum cōrvi latu oṟṟu.",
    english: "To take the guise of a renunciate, penetrate the depths, and never falter — that is the spy.",
    tamilUrai: "துறவியின் வடிவில் சென்று, எட்ட வேண்டிய இடங்களை எல்லாம் எட்டி ஆராய்ந்து, எந்த நிலையிலும் சோர்வு கொள்ளாமல் செய்தி அறிபவனே ஒற்றன்.",
    altTranslation: "In hermit's guise to pass through every guarded land, Nor falter — this the spy alone can understand. — Pope"
  },
  {
    num: 587, chapter: 59,
    tamil: "மறைந்தவை கேட்கவற் றாகி அறிந்தவை\nஐயப்பாடு இல்லதே ஒற்று.",
    transliteration: "Maṟaintavai kēṭkavaṟ ṟāki aṟintavai\nAiyappāṭu illatē oṟṟu.",
    english: "A true spy is able to hear hidden things and report them without the least doubt.",
    tamilUrai: "மறைந்திருந்து பேசப்படுபவற்றையும் கேட்கும் ஆற்றல் உடையவனாய், அறிந்தவற்றை எந்தவித ஐயமும் இல்லாமல் தெரிவிப்பவனே ஒற்றன்.",
    altTranslation: "To hear things hidden, and without a doubt to tell — This is the skill in which the spy doth well excel. — Pope"
  },
  {
    num: 588, chapter: 59,
    tamil: "ஒற்றொற்றித் தந்த பொருளையும் மற்றுமோர்\nஒற்றினால் ஒற்றிக் கொளல்.",
    transliteration: "Oṟṟoṟṟit tanta poruḷaiyum maṟṟumōr\nOṟṟiṉāl oṟṟik koḷal.",
    english: "Information brought by one spy should be verified through another before it is accepted.",
    tamilUrai: "ஒரு ஒற்றன் கொண்டு வந்த செய்தியை, மற்றொரு ஒற்றனால் ஆராய்ந்து, ஊர்ஜிதம் செய்த பின்னரே ஏற்றுக்கொள்ள வேண்டும்.",
    altTranslation: "What one spy brings, let second spy confirm again; Thus let the king his trusted news obtain. — Pope"
  },
  {
    num: 589, chapter: 59,
    tamil: "ஒற்றெற் றுணராமை ஆள்க உடன்மூவர்\nசொற்கொள்ளச் சோர்விலது ஒற்று.",
    transliteration: "Oṟṟeṟ ṟuṇarāmai āḷka uṭaṉmūvar\nCoṟkoḷḷac cōrvilatu oṟṟu.",
    english: "Employ spies so they do not know one another; intelligence in which three agree is reliable.",
    tamilUrai: "ஒற்றர்கள் ஒருவரை ஒருவர் அறியாதபடி பணியில் ஈடுபடுத்தவும்; அவர்கள் மூவரும் ஒன்றுபட்டுச் சொல்லும் செய்தியே குற்றமற்றதாய் ஏற்கத்தக்கது.",
    altTranslation: "Employ thy spies, each other unaware; What three report in common — that's without care. — Pope"
  },
  {
    num: 590, chapter: 59,
    tamil: "சிறப்பறிய ஒற்றின்கண் செய்யற்க செய்யின்\nபுறப்படுத்தான் ஆகும் மறை.",
    transliteration: "Ciṟappaṟiya oṟṟiṉkaṇ ceyyaṟka ceyyiṉ\nPuṟappaṭuttāṉ ākum maṟai.",
    english: "Do not openly reward a spy for his service; for by doing so, you yourself expose the secret.",
    tamilUrai: "ஒற்றர்க்கு வெளிப்படையாகப் பரிசு வழங்கக் கூடாது; அப்படிச் செய்தால், மறைத்து வைக்க வேண்டிய செய்தியை மன்னனே வெளிப்படுத்தியதாய் ஆகும்.",
    altTranslation: "To give thy spy his favor known to all were ill; 'Twere thou thyself thy secret didst reveal. — Pope"
  },

  // CHAPTER 60 — Energy
  {
    num: 591, chapter: 60,
    tamil: "உடையர் எனப்படுவது ஊக்கம் அஃதில்லார்\nஉடையது உடையரோ மற்று.",
    transliteration: "Uṭaiyar eṉappaṭuvatu ūkkam aḵtillār\nuṭaiyatu uṭaiyarō maṟṟu.",
    english: "What a man really possesses is energy; whoever lacks it possesses nothing, whatever else he may have.",
    tamilUrai: "ஒருவனிடத்தில் உள்ளதென்று சொல்லத்தக்கது ஊக்கமே; அது இல்லாதவர்கள், வேறு பொருள்கள் இருந்தாலும் உண்மையில் எதையும் உடையவர்கள் ஆகார்.",
    altTranslation: "'Tis energy men truly own; and he without that dower — What does he own of real value in his power? — Pope"
  },
  {
    num: 592, chapter: 60,
    tamil: "உள்ளம் உடைமை உடைமை பொருளுடைமை\nநில்லாது நீங்கி விடும்.",
    transliteration: "Uḷḷam uṭaimai uṭaimai poruḷuṭaimai\nnillātu nīṅki viṭum.",
    english: "The true wealth is that of the mind; wealth of goods does not stay but departs.",
    tamilUrai: "உண்மையான உடைமை என்பது மனஉறுதி (ஊக்கம்) மட்டுமே; பொருள் உடைமை என்பது நிலைத்து நில்லாமல் நீங்கிவிடும்.",
    altTranslation: "True wealth is mind-possession; riches otherwise Stay not, but pass, and leave us in surprise. — Pope"
  },
  {
    num: 593, chapter: 60,
    tamil: "ஆக்கம் இழந்தேமென்று அல்லாவார் ஊக்கம்\nஒருவந்தம் கைத்துடை யார்.",
    transliteration: "Ākkam iḻantēmeṉṟu allāvār ūkkam\nOruvantam kaittuṭai yār.",
    english: "Those who firmly possess energy will not grieve, saying 'we have lost our wealth.'",
    tamilUrai: "மனஉறுதியை உறுதியாகத் தம் கையில் உடையவர்கள், செல்வத்தை இழந்து விட்டோம் என்று சொல்லி வருந்தமாட்டார்கள்.",
    altTranslation: "Who holds his energy with fixed and firm control, Grieves not, 'My wealth is gone,' to shake his soul. — Pope"
  },
  {
    num: 594, chapter: 60,
    tamil: "ஆக்கம் அதர்வினாய்ச் செல்லும் அசைவிலா\nஊக்க முடையா னுழை.",
    transliteration: "Ākkam atarviṉāyc cellum acaivilā\nŪkka muṭaiyā ṉuḻai.",
    english: "Wealth itself, asking the way, will seek out the man of unshaken energy.",
    tamilUrai: "தளராத ஊக்கத்தோடு இருக்கும் ஒருவனை நோக்கி, செல்வம் தானாகவே வழி கேட்டு வந்து சேரும்.",
    altTranslation: "Fortune will come, inquiring of her way, To him whose energy knows no decay. — Pope"
  },
  {
    num: 595, chapter: 60,
    tamil: "வெள்ளத் தனைய மலர்நீட்டம் மாந்தர்தம்\nஉள்ளத் தனையது உயர்வு.",
    transliteration: "Veḷḷat taṉaiya malarnīṭṭam māntartam\nUḷḷat taṉaiyatu uyarvu.",
    english: "As the flower's height rises with the depth of water, so man's greatness rises with the level of his mind.",
    tamilUrai: "ஒரு பூ, தான் இருக்கும் நீரின் ஆழத்திற்கு ஏற்ப உயர்ந்து எழுவதைப் போல, மக்களின் உயர்வு அவர்களுடைய மனதின் உயர்வையே சார்ந்து அமையும்.",
    altTranslation: "As the flower rises with the depth of water's flow, So men rise high as their own minds may grow. — Pope"
  },
  {
    num: 596, chapter: 60,
    tamil: "உள்ளுவ தெல்லாம் உயர்வுள்ளல் மற்றது\nதள்ளினும் தள்ளாமை நீர்த்து.",
    transliteration: "Uḷḷuva tellām uyarvuḷḷal maṟṟatu\ntaḷḷiṉum taḷḷāmai nīrttu.",
    english: "Let every thought aim high; even if one fails, that thought itself will not have failed.",
    tamilUrai: "எண்ணுவதெல்லாம் உயர்ந்த எண்ணங்களாகவே இருக்கட்டும்; அவ்வாறு எண்ணியதன்படி காரியம் கைகூடாவிட்டாலும், அதை எண்ணியதே பயன் அற்றதாகாது.",
    altTranslation: "Let all thy thoughts be thoughts of lofty aim; Though these should fail, 'tis still not failure's shame. — Pope"
  },
  {
    num: 597, chapter: 60,
    tamil: "சிதைவிடத்து ஒல்கார் உரவோர் புதையம்பிற்\nபட்டுப்பா டூன்றுங் களிறு.",
    transliteration: "Citaiviṭattu olkār uravōr putaiyampiṟ\nPaṭṭuppā ṭūṉṟuṅ kaḷiṟu.",
    english: "The courageous do not flinch in defeat, as the elephant, pierced by many arrows, still holds its place firmly.",
    tamilUrai: "உடல் முழுவதும் அம்புகள் தைத்திருந்தாலும், தரையில் கால் ஊன்றி நிற்கின்ற யானையைப் போல, உறுதியானவர்கள் துன்பம் வரும்போது சோராமல் நிற்பர்.",
    altTranslation: "Pierced by many arrows still the elephant firm shall stand; So faints not in defeat the brave of heart and hand. — Pope"
  },
  {
    num: 598, chapter: 60,
    tamil: "உள்ளம் இலாதவர் எய்தார் உலகத்து\nவள்ளியம் என்னுஞ் செருக்கு.",
    transliteration: "Uḷḷam ilātavar eytār ulakattu\nVaḷḷiyam eṉṉuñ cerukku.",
    english: "Men lacking inner energy cannot attain the pride of saying, 'We are liberal.'",
    tamilUrai: "ஊக்கம் இல்லாதவர்கள், இவ்வுலகில் \"நாங்கள் வள்ளல்கள்\" என்று சொல்லத்தக்க பெருமையை அடைய முடியாது.",
    altTranslation: "The energy-less shall never rise to claim The pride of bearing benefactor's name. — Pope"
  },
  {
    num: 599, chapter: 60,
    tamil: "பரியது கூர்ங்கோட்டது ஆயினும் யானை\nவெரூஉம் புலிதாக் குறின்.",
    transliteration: "Pariyatu kūrṅkōṭṭatu āyiṉum yāṉai\nVerūum pulitāk kuṟiṉ.",
    english: "Though huge and sharp-tusked, the elephant trembles when the tiger springs upon it.",
    tamilUrai: "பெரிய உடலும், கூர்மையான தந்தங்களும் கொண்டிருந்தாலும், புலி தாக்கினால் யானையும் அஞ்சி ஓடும். (ஊக்கம் இல்லை எனில் உடற்பலம் வீண்).",
    altTranslation: "Though huge of bulk and sharp of tusk, the elephant grows pale And quails when tiger springs — thus mere strength shall fail. — Pope"
  },
  {
    num: 600, chapter: 60,
    tamil: "உரமொருவற்கு உள்ள வெறுக்கைஅஃ தில்லார்\nமரம்மக்க ளாதலே வேறு.",
    transliteration: "Uramoruvaṟku uḷḷa veṟukkaiaḵ tillār\nMarammakka ḷātalē vēṟu.",
    english: "Energy of mind is the real strength of a man; those who lack it are mere trees in human form.",
    tamilUrai: "ஒருவனுக்கு வலிமை என்று சொல்லத் தக்கது அவனுடைய மனத் திண்மையே; அது இல்லாதவர்கள், மக்கள் வடிவில் இருக்கும் மரங்களே.",
    altTranslation: "The strength of man is his firm mind's energy; The rest are merely trees in human form, we see. — Pope"
  },

  // CHAPTER 61 — Unsluggishness
  {
    num: 601, chapter: 61,
    tamil: "குடியென்னும் குன்றா விளக்கம் மடியென்னும்\nமாசூர மாய்ந்து கெடும்.",
    transliteration: "Kuṭiyeṉṉum kuṉṟā viḷakkam maṭiyeṉṉum\nMācūra māyntu keṭum.",
    english: "The unfading light of one's family is extinguished by the dark stain called sloth.",
    tamilUrai: "ஒருவனுடைய குடிப் பெருமை என்னும் குன்றாத ஒளி விளக்கு, சோம்பல் என்னும் கருமை மாசினால் படர்ந்து அழிந்து கெடும்.",
    altTranslation: "The unextinguished lamp of family fame Fades out before the dark stain sloth's very name. — Pope"
  },
  {
    num: 602, chapter: 61,
    tamil: "மடியை மடியா ஒழுகல் குடியைக்\nகுடியாக வேண்டு பவர்.",
    transliteration: "Maṭiyai maṭiyā oḻukal kuṭiyaik\nKuṭiyāka vēṇṭu pavar.",
    english: "Those who wish their family to be truly a family must cast off the indolence of sloth.",
    tamilUrai: "தம் குடி, குடியென்னும் பெயருக்கேற்றபடி விளங்கவேண்டும் என விரும்புகிறவர்கள், சோம்பலை நீக்கி ஒழுக வேண்டும்.",
    altTranslation: "They who their family would keep from decline, Must cast off sloth, nor in its dullness pine. — Pope"
  },
  {
    num: 603, chapter: 61,
    tamil: "மடிமடிக் கொண்டொழுகும் பேதை பிறந்த\nகுடிமடியும் தன்னினும் முந்து.",
    transliteration: "Maṭimaṭik koṇṭoḻukum pētai piṟanta\nKuṭimaṭiyum taṉṉiṉum muntu.",
    english: "The family of the fool who lives embracing sloth perishes even before he himself does.",
    tamilUrai: "சோம்பலையே தன் இயல்பாகக் கொண்டு வாழும் மூடன், தான் பிறந்த குடி அவனுக்கு முன்பாகவே அழியும்படி செய்துவிடுவான்.",
    altTranslation: "The fool who walks hand in hand with sloth the dull, His kindred perish ere he breathes his own last full. — Pope"
  },
  {
    num: 604, chapter: 61,
    tamil: "குடிமடிந்து குற்றம் பெருகும் மடிமடிந்து\nமாண்ட உஞற்றி லவர்க்கு.",
    transliteration: "Kuṭimaṭintu kuṟṟam perukum maṭimaṭintu\nMāṇṭa uñaṟṟi lavarkku.",
    english: "For those whose sloth has destroyed all noble effort, their family decays and their faults multiply.",
    tamilUrai: "உயர்ந்த முயற்சிகள் இல்லாமல் சோம்பலில் வாழ்பவர்களுக்கு, அவர்களுடைய குடி அழியும்; அவர்களின் குற்றங்களும் பெருகி நிற்கும்.",
    altTranslation: "Where noble effort's lost in sloth, the kindred's doom And faults grow greater in the day of gloom. — Pope"
  },
  {
    num: 605, chapter: 61,
    tamil: "நெடுநீர் மறவி மடிதுயில் நான்கும்\nகெடுநீரார் காமக் கலன்.",
    transliteration: "Neṭunīr maṟavi maṭituyil nāṉkum\nKeṭunīrār kāmak kalaṉ.",
    english: "Procrastination, forgetfulness, sloth, and sleep — these four form the pleasure-boat of the ruined.",
    tamilUrai: "நீட்டித்துச் செய்தல், மறதி, சோம்பல், தூக்கம் — ஆகிய இந்த நான்கும் கேடு அடைய விரும்புபவர்கள் விரும்பும் மகிழ்ச்சிப் படகு போன்றவை.",
    altTranslation: "Delay, oblivion, sloth, and sleep — these four Are the pleasure-boat to ruin's darkened shore. — Pope"
  },
  {
    num: 606, chapter: 61,
    tamil: "படியுடையார் பற்றமைந்தக் கண்ணும் மடியுடையார்\nமாண்பயன் எய்தல் அரிது.",
    transliteration: "Paṭiyuṭaiyār paṟṟamaintak kaṇṇum maṭiyuṭaiyār\nMāṇpayaṉ eytal aritu.",
    english: "Even when surrounded by rulers of the earth, the slothful will rarely gain true greatness.",
    tamilUrai: "உலகத்தை ஆள்பவர்களது நட்பு தமக்குக் கிட்டினாலும், சோம்பல் உள்ளவர்கள் மேலான பயனை அடைவது அரிது.",
    altTranslation: "Though they have kingdom's princes as their friends — the slothful Rarely gain the noble fruit within their grasp. — Pope"
  },
  {
    num: 607, chapter: 61,
    tamil: "இடிபுரிந்து எள்ளுஞ்சொல் கேட்பர் மடிபுரிந்து\nமாண்ட உஞற்றி லவர்.",
    transliteration: "Iṭipurintu eḷḷuñcol kēṭpar maṭipurintu\nMāṇṭa uñaṟṟi lavar.",
    english: "Those who embrace sloth instead of noble effort will suffer bitter rebuke and insult.",
    tamilUrai: "மேலான முயற்சியைச் செய்யாமல் சோம்பலைச் சார்ந்திருப்பவர்கள், இகழ்ந்த சொற்களையும் ஏற்ற வேண்டிய நிலையில் இருப்பார்கள்.",
    altTranslation: "Who sloth in place of labour nobly choose, Must hear the words of scorn that all men use. — Pope"
  },
  {
    num: 608, chapter: 61,
    tamil: "மடிமை குடிமைக்கண் தங்கின்தன் ஒன்னார்க்கு\nஅடிமை புகுத்தி விடும்.",
    transliteration: "Maṭimai kuṭimaikkaṇ taṅkiṉtaṉ oṉṉārkku\naṭimai pukutti viṭum.",
    english: "If sloth enters a noble family, it will make them slaves to their enemies.",
    tamilUrai: "உயர்ந்த குடியில் சோம்பல் நுழைந்துவிட்டால், அது அந்தக் குடியினரை அவர்கள் பகைவருக்கு அடிமையாக்கி விடும்.",
    altTranslation: "When sloth creeps in a noble house to stay, It makes the noble slaves to foes some day. — Pope"
  },
  {
    num: 609, chapter: 61,
    tamil: "குடியாண்மை யுள்வந்த குற்றம் ஒருவன்\nமடியாண்மை மாற்றக் கெடும்.",
    transliteration: "Kuṭiyāṇmai yuḷvanta kuṟṟam oruvaṉ\nMaṭiyāṇmai māṟṟak keṭum.",
    english: "The faults that may have entered a man's nobility through his conduct will vanish when he shakes off sloth.",
    tamilUrai: "ஒருவனின் குடியாட்சியை வந்தடைந்த குற்றங்கள், அவன் தன் சோம்பல் நிலையை மாற்றியமைத்தவுடன் ஒழிந்து விடும்.",
    altTranslation: "When man abandons sloth's dull, idle strain, Whate'er stained his nobility's proud reign. — Pope"
  },
  {
    num: 610, chapter: 61,
    tamil: "மடியிலா மன்னவன் எய்தும் அடியளந்தான்\nதாஅய தெல்லாம் ஒருங்கு.",
    transliteration: "Maṭiyilā maṉṉavaṉ eytum aṭiyaḷantāṉ\nTāaya tellām oruṅku.",
    english: "A king without sloth shall attain all that was measured by the god who paced the worlds in one stride.",
    tamilUrai: "சோம்பல் இல்லாத மன்னன், தன் அடியால் உலகத்தை அளந்த திருமாலால் கடந்த அனைத்து நிலங்களையும் ஒருசேரப் பெறுவான்.",
    altTranslation: "The king who knows no sloth shall reach as his own whole, The lands that god's great stride once paced from pole to pole. — Pope"
  },

  // CHAPTER 62 — Manly Effort
  {
    num: 611, chapter: 62,
    tamil: "அருமை உடைத்தென்று அசாவாமை வேண்டும்\nபெருமை முயற்சி தரும்.",
    transliteration: "Arumai uṭaitteṉṟu acāvāmai vēṇṭum\nPerumai muyaṟci tarum.",
    english: "Do not despair saying 'this is hard'; persevering effort brings its own greatness.",
    tamilUrai: "\"இது செய்ய கடினமானது\" என்று கருதி தளர்ந்து போக வேண்டாம்; விடாமுயற்சியே தன்னளவில் பெருமையைத் தரும்.",
    altTranslation: "Say not, 'It's hard', and faint in heart's resolve; Persistent effort greatness shall evolve. — Pope"
  },
  {
    num: 612, chapter: 62,
    tamil: "வினைக்கண் வினைகெடல் ஓம்பல் வினைக்குறை\nதீர்ந்தாரின் தீர்ந்தன் றுலகு.",
    transliteration: "Viṉaikkaṇ viṉaikeṭal ōmpal viṉaikkuṟai\nTīrntāriṉ tīrntaṉ ṟulaku.",
    english: "Let no one leave a task half-done; the world abandons him who abandons his work.",
    tamilUrai: "மேற்கொண்ட ஒரு செயலை, இடையிலேயே கைவிட்டு விடாமல் பாதுகாக்க வேண்டும்; அதைத் தவிர்ப்பவர்களை உலகமும் தவிர்த்து விடும்.",
    altTranslation: "Leave no task half-done, but labour to the end; Else from thee too the world itself will wend. — Pope"
  },
  {
    num: 613, chapter: 62,
    tamil: "தாளாண்மை என்னும் தகைமைக்கண் தங்கிற்றே\nவேளாண்மை என்னுஞ் செருக்கு.",
    transliteration: "Tāḷāṇmai eṉṉum takaimaikkaṇ taṅkiṟṟē\nVēḷāṇmai eṉṉuñ cerukku.",
    english: "The glory of charity lies in the virtue called effort.",
    tamilUrai: "ஒப்புரவு (பிறர்க்கு உதவுதல்) என்னும் பெருமை, முயற்சி என்னும் நற்பண்பை மேற்கொண்டவர்களிடமே நிலைத்திருக்கும்.",
    altTranslation: "The pride of giving rests where effort's noble flame Holds constant vigil — such bestows the lasting name. — Pope"
  },
  {
    num: 614, chapter: 62,
    tamil: "தாளாண்மை இல்லாதான் வேளாண்மை பேடிகை\nவாளாண்மை போலக் கெடும்.",
    transliteration: "Tāḷāṇmai illātāṉ vēḷāṇmai pēṭikai\nVāḷāṇmai pōlak keṭum.",
    english: "Charity without effort is like a eunuch trying to wield a sword — it comes to nothing.",
    tamilUrai: "முயற்சியற்றவன் செய்யும் ஈகை, அலிகை ஆளுகின்ற வாட்போர் போல் பயனற்றுப் போகும்.",
    altTranslation: "The giving of the slothful is as vain and frail As eunuch's wielded sword that doth no might avail. — Pope"
  },
  {
    num: 615, chapter: 62,
    tamil: "இன்பம் விழையான் வினைவிழைவான் தன்கேளிர்\nதுன்பம் துடைத்தூன்றும் தூண்.",
    transliteration: "Iṉpam viḻaiyāṉ viṉaiviḻaivāṉ taṉkēḷir\nTuṉpam tuṭaittūṉṟum tūṇ.",
    english: "He who loves work rather than pleasure is a pillar that wipes away the sorrows of his kindred.",
    tamilUrai: "தன் சுகத்தை விரும்பாமல், செயலை விரும்புகின்றவன், தன் சுற்றத்தாரின் துன்பத்தை நீக்கி, அவர்களைத் தாங்கும் தூண் போன்றவன்.",
    altTranslation: "He who loves toil above his pleasure, is a pillar sure That wipes the sorrow of his kin, and makes their joy secure. — Pope"
  },
  {
    num: 616, chapter: 62,
    tamil: "முயற்சி திருவினை ஆக்கும் முயற்றின்மை\nஇன்மை புகுத்தி விடும்.",
    transliteration: "Muyaṟci tiruviṉai ākkum muyaṟṟiṉmai\nIṉmai pukutti viṭum.",
    english: "Effort creates prosperity; its absence brings in poverty.",
    tamilUrai: "விடாமுயற்சியே செல்வத்தைத் தருகிறது; முயற்சி இல்லாமை வறுமையை ஒருவனிடம் வந்து சேர்த்துவிடும்.",
    altTranslation: "Effort is the maker of wealth; its want alone Brings on dire poverty to mar the home. — Pope"
  },
  {
    num: 617, chapter: 62,
    tamil: "மடியுளாள் மாமுகடி என்ப மடியிலான்\nதாளுளாள் தாமரையி னாள்.",
    transliteration: "Maṭiyuḷāḷ māmukaṭi eṉpa maṭiyilāṉ\nTāḷuḷāḷ tāmaraiyi ṉāḷ.",
    english: "In sloth resides Misery (Mukadi); in the efforts of the unslothful, Lakshmi upon her lotus.",
    tamilUrai: "சோம்பல் உள்ளவனிடத்தில் மூதேவி தங்குவாள் என்றும், சோம்பல் இல்லாதவனின் முயற்சியில் தாமரை மலர் மீது விளங்கும் திருமகள் (லக்ஷ்மி) தங்குவாள் என்றும் கூறப்படுகிறது.",
    altTranslation: "In sloth, dark Misfortune; in toiler's honest arm, The lotus-throned goddess finds her home and charm. — Pope"
  },
  {
    num: 618, chapter: 62,
    tamil: "பொறியின்மை யார்க்கும் பழியன்று அறிவறிந்து\nஆள்வினை இன்மை பழி.",
    transliteration: "Poṟiyiṉmai yārkkum paḻiyaṉṟu aṟivaṟintu\nĀḷviṉai iṉmai paḻi.",
    english: "Lack of good fortune is no fault; the true blame lies in knowing one's capacity and yet making no effort.",
    tamilUrai: "ஊழால் வராத வறுமை யாருக்கும் குற்றமாகாது; தன் திறமையை அறிந்திருந்தும் முயற்சி செய்யாமல் இருப்பதே குற்றமாகும்.",
    altTranslation: "No shame in lack of fortune lies; this only is disgrace — To know one's power, yet shun effort's honest face. — Pope"
  },
  {
    num: 619, chapter: 62,
    tamil: "தெய்வத்தான் ஆகா தெனினும் முயற்சிதன்\nமெய்வருத்தக் கூலி தரும்.",
    transliteration: "Teyvattāṉ ākā teṉiṉum muyaṟcitaṉ\nMeyvaruttak kūli tarum.",
    english: "Though fate may deny, effort will yield at least the reward of the body's labour.",
    tamilUrai: "தெய்வத்தின் துணையால் ஒரு செயல் கைகூடாமல் போனாலும், முயற்சியால் செய்யப்படும் உடலுழைப்புக்கு ஏற்ற கூலியேனும் நிச்சயமாய் கிடைக்கும்.",
    altTranslation: "Though fate refuse, yet effort of the toilful hand The body's wage — that guerdon — shall command. — Pope"
  },
  {
    num: 620, chapter: 62,
    tamil: "ஊழையும் உப்பக்கம் காண்பர் உலைவின்றித்\nதாழாது உஞற்று பவர்.",
    transliteration: "Ūḻaiyum uppakkam kāṇpar ulaiviṉṟit\nTāḻātu uñaṟṟu pavar.",
    english: "Those who labour without slackening will see even fate itself turn back before them.",
    tamilUrai: "சோர்வின்றி, தளர்வின்றி, தொடர்ந்து முயற்சி செய்பவர்கள், ஊழே (விதியே) புறமுதுகிட்டு ஓடுவதையும் காண்பார்கள்.",
    altTranslation: "Who labour without flagging zeal, with heart's best part, Shall see e'en fate retreat before their steadfast art. — Pope"
  },

  // CHAPTER 63 — Hopefulness in Trouble
  {
    num: 621, chapter: 63,
    tamil: "இடுக்கண் வருங்கால் நகுக அதனை\nஅடுத்தூர்வது அஃதொப்ப தில்.",
    transliteration: "Iṭukkaṇ varuṅkāl nakuka ataṉai\nAṭuttūrvatu aḵtoppa til.",
    english: "Laugh when trouble comes; there is nothing so effective in driving it away.",
    tamilUrai: "துன்பம் வரும்போது சிரித்துக்கொள்ள வேண்டும்; அந்தத் துன்பத்தைக் கடக்கும் மேலான வழி அதைவிட வேறு எதுவும் இல்லை.",
    altTranslation: "Laugh when trouble comes; no means is so complete To drive it back beneath defeat. — Pope"
  },
  {
    num: 622, chapter: 63,
    tamil: "வெள்ளத் தனைய இடும்பை அறிவுடையான்\nஉள்ளத்தின் உள்ளக் கெடும்.",
    transliteration: "Veḷḷat taṉaiya iṭumpai aṟivuṭaiyāṉ\nUḷḷattiṉ uḷḷak keṭum.",
    english: "Sorrows like a flood perish at the thought of the wise.",
    tamilUrai: "வெள்ளம் போன்று உக்கிரமாக பெருகி வருகின்ற துன்பங்களும், அறிவுடையவரின் மனதில் அவரது சிந்தனையாலேயே அழிந்து விடும்.",
    altTranslation: "Though troubles come like flood-tides rolling wide, The wise man's thought can stem their surging pride. — Pope"
  },
  {
    num: 623, chapter: 63,
    tamil: "இடும்பைக்கு இடும்பை படுப்பர் இடும்பைக்கு\nஇடும்பை படாஅ தவர்.",
    transliteration: "Iṭumpaikku iṭumpai paṭuppar iṭumpaikku\niṭumpai paṭāa tavar.",
    english: "They who bring no grief upon themselves for grief, bring grief upon grief itself.",
    tamilUrai: "துன்பம் வந்தபோது, அதற்காக தாங்கள் வருந்தாதவர்கள், அந்தத் துன்பத்தையே துன்பப்படச் செய்துவிடுவர்.",
    altTranslation: "Who at grief's approach feel grief not but steady stand, Thy grief shall grieve and fly, by their firm hand. — Pope"
  },
  {
    num: 624, chapter: 63,
    tamil: "மடுத்தவா யெல்லாம் பகடன்னான் உற்ற\nஇடுக்கண் இடர்ப்பாடு உடைத்து.",
    transliteration: "Maṭuttavā yellām pakaṭaṉṉāṉ uṟṟa\niṭukkaṇ iṭarppāṭu uṭaittu.",
    english: "As an ox plowing on in spite of every obstacle, so the man of effort makes his very trouble suffer.",
    tamilUrai: "தடைகள் அமைந்த வழிகளில் எல்லாம் முயற்சியுடன் சென்ற காளைபோலச் செயல்படுபவனுக்கு, அவனுக்கு வந்த துன்பமே துன்பத்திற்கு ஆளாகும்.",
    altTranslation: "Like ox that plows through every rut, the bold one's toil Makes trouble itself through grief recoil. — Pope"
  },
  {
    num: 625, chapter: 63,
    tamil: "அடுக்கி வரினும் அழிவிலான் உற்ற\nஇடுக்கண் இடுக்கட் படும்.",
    transliteration: "Aṭukki variṉum aḻivilāṉ uṟṟa\niṭukkaṇ iṭukkaṭ paṭum.",
    english: "Though troubles come one upon another, the unshaken man's troubles will themselves be put to grief.",
    tamilUrai: "துன்பங்கள் தொடர்ந்து ஒன்றன்பின் ஒன்றாக வந்தாலும், தளர்ச்சி அடையாத மனநிலையுடையவனிடம், அந்தத் துன்பங்களே துன்பப்பட்டுப் போகும்.",
    altTranslation: "Though griefs come crowding thick and fast, their force is bare Before the man whose mind no shaking pain can scare. — Pope"
  },
  {
    num: 626, chapter: 63,
    tamil: "அற்றேமென்று அல்லற் படுபவோ பெற்றேமென்று\nஓம்புதல் தேற்றா தவர்.",
    transliteration: "Aṟṟēmeṉṟu allaṟ paṭupavō peṟṟēmeṉṟu\nŌmputal tēṟṟā tavar.",
    english: "Will those who never congratulated themselves when they had wealth, now grieve that they have lost it?",
    tamilUrai: "செல்வம் பெற்ற காலத்தில், \"பெற்றிருக்கின்றோம்\" என்று அதைப் பேணி காக்காதவர்கள், இப்போது \"எல்லாம் போய் விட்டது\" என்று கூறி வருந்தமாட்டார்கள்.",
    altTranslation: "Who did not glory when wealth was theirs to own — Will not lament in losing, now their stores are gone. — Pope"
  },
  {
    num: 627, chapter: 63,
    tamil: "இலக்கம் உடம்பிடும்பைக் கென்று கலக்கத்தைக்\nகையாறாக் கொள்ளா தவர்.",
    transliteration: "Ilakkam uṭampiṭumpaik keṉṟu kalakkattaik\nKaiyāṟāk koḷḷā tavar.",
    english: "The wise do not count it as misery when the body is the target of trouble, for they know the body itself is made for pain.",
    tamilUrai: "இந்த உடலே துன்பங்களுக்கு இலக்காய் அமைந்தது என்று அறிந்தவர்கள், வரும் துன்பங்களைக் கலக்கமாக கருதமாட்டார்கள்.",
    altTranslation: "They count no grief as grief, who know full well The body's made for trouble's arrow to dwell. — Pope"
  },
  {
    num: 628, chapter: 63,
    tamil: "இன்பம் விழையான் இடும்பை இயல்பென்பான்\nதுன்பம் உறுதல் இலன்.",
    transliteration: "Iṉpam viḻaiyāṉ iṭumpai iyalpeṉpāṉ\nTuṉpam uṟutal ilaṉ.",
    english: "He who does not crave pleasure and accepts trouble as natural shall suffer no pain.",
    tamilUrai: "இன்பத்தை பேராவலுடன் விரும்பாமல், துன்பம் வாழ்க்கையின் இயற்கை என்றறிந்தவன், துன்பத்தால் வருந்தமாட்டான்.",
    altTranslation: "Who craves not bliss, who thinks misfortune nature's own, Shall feel no pain — such grief he has not known. — Pope"
  },
  {
    num: 629, chapter: 63,
    tamil: "இன்பத்துள் இன்பம் விழையாதான் துன்பத்துள்\nதுன்பம் உறுதல் இலன்.",
    transliteration: "Iṉpattuḷ iṉpam viḻaiyātāṉ tuṉpattuḷ\nTuṉpam uṟutal ilaṉ.",
    english: "He who, in joy, does not long for joy will not suffer in sorrow.",
    tamilUrai: "இன்பம் வந்துள்ள காலத்தில், அந்த இன்பத்தில் மயங்காமல் இருப்பவன், துன்ப காலத்திலும் துன்பத்தால் துவண்டு போகமாட்டான்.",
    altTranslation: "Who craves not joys when joy is his to know, Feels not the pain, though grief's dark storms should blow. — Pope"
  },
  {
    num: 630, chapter: 63,
    tamil: "இன்னாமை இன்பம் எனக்கொளின் ஆகுந்தன்\nஒன்னார் விழையுஞ் சிறப்பு.",
    transliteration: "Iṉṉāmai iṉpam eṉakkoḷiṉ ākuntaṉ\nOṉṉār viḻaiyuñ ciṟappu.",
    english: "If a man counts his troubles as pleasure, he will win even the respect of his enemies.",
    tamilUrai: "துன்பங்களை இன்பமாகக் கருதி ஏற்றுக்கொள்ளும் ஒருவன், தன் பகைவர்களும் விரும்பி மதிக்கத் தக்க சிறப்பை அடைவான்.",
    altTranslation: "Who counts his trouble joy shall win a name Even his foes shall deem a noble claim. — Pope"
  },

  // CHAPTER 64 — The Office of Minister
  {
    num: 631, chapter: 64,
    tamil: "கருவியும் காலமும் செய்கையும் செய்யும்\nஅருவினையும் மாண்டது அமைச்சு.",
    transliteration: "Karuviyum kālamum ceykaiyum ceyyum\naruviṉaiyum māṇṭatu amaiccu.",
    english: "He is the true minister who chooses the right means, the right time, the right mode of action, and the great act to be performed.",
    tamilUrai: "பொருத்தமான கருவிகளையும், தக்க காலத்தையும், செய்யும் முறையையும், செய்ய வேண்டிய அரிய செயலையும் ஆராய்ந்து தேர்வு செய்பவனே மேலான அமைச்சன்.",
    altTranslation: "The choice of tools, of time, of modes, the lofty deed to do — The minister's true part in all things through and through. — Pope"
  },
  {
    num: 632, chapter: 64,
    tamil: "வன்கண் குடிகாத்தல் கற்றறிதல் ஆள்வினையோடு\nஐந்துடன் மாண்டது அமைச்சு.",
    transliteration: "Vaṉkaṇ kuṭikāttal kaṟṟaṟital āḷviṉaiyōṭu\naintuṭaṉ māṇṭatu amaiccu.",
    english: "Firmness, protection of the people, learning, effort, and sound judgement — by these five qualities is the minister known.",
    tamilUrai: "திடமனம், குடிமக்களைக் காப்பது, கல்வி அறிவு, பொருத்தமான முயற்சி, இவற்றோடு ஐந்தாவதாய் சிறந்த செயல்திறன் — ஆகிய ஐந்தும் பொருந்திய சிறப்பு அமைச்சனுக்கு உரியது.",
    altTranslation: "Firm-will, care for subjects, learning, manly toil, and skill — Five qualities the minister's true worth fulfill. — Pope"
  },
  {
    num: 633, chapter: 64,
    tamil: "பிரித்தலும் பேணிக் கொளலும் பிரிந்தார்ப்\nபொருத்தலும் வல்ல தமைச்சு.",
    transliteration: "Pirittalum pēṇik koḻalum pirintārp\nPoruttalum valla tamaiccu.",
    english: "The true minister is able to divide his foes, cherish allies, and reunite those who have grown apart.",
    tamilUrai: "பகைவர்களைப் பிரிக்க வைத்தலும், நண்பர்களைப் பேணிக் கொள்ளுதலும், பிரிந்து சென்றவர்களை மீண்டும் சேர்ப்பித்தலும் — ஆகியவற்றில் வல்லவனே சிறந்த அமைச்சன்.",
    altTranslation: "To split the foe, to keep the friend, and unite the parted — These are the minister's true arts, the keen-hearted. — Pope"
  },
  {
    num: 634, chapter: 64,
    tamil: "தெரிதலும் தேர்ந்து செயலும் ஒருதலையாச்\nசொல்லலும் வல்லது அமைச்சு.",
    transliteration: "Teritalum tērntu ceyalum orutalaiyāc\nCollalum vallatu amaiccu.",
    english: "To examine, to act on examination, and to speak decisively — these mark the minister.",
    tamilUrai: "சூழ்நிலைகளை ஆராய்ந்து தெரிந்துகொள்வதும், ஆராய்ந்ததற்கேற்பச் செயற்படுவதும், உறுதியாக, திட்டவட்டமாகப் பேசுவதும் — இவை எல்லாம் அமைச்சனுடைய ஆற்றலாகும்.",
    altTranslation: "To judge, to act upon that judgment with decisive will, And to speak plainly — mark the minister's skill. — Pope"
  },
  {
    num: 635, chapter: 64,
    tamil: "அறனறிந்து ஆன்றமைந்த சொல்லான்எஞ் ஞான்றுந்\nதிறனறிந்தான் தேர்ச்சித் துணை.",
    transliteration: "Aṟaṉaṟintu āṉṟamainta collāṉeñ ñāṉṟun\nTiṟaṉaṟintāṉ tērccit tuṇai.",
    english: "He who knows virtue, speaks with measured wisdom, and ever grasps the right means — he is the counsellor to choose.",
    tamilUrai: "அறத்தை நன்கறிந்து, பண்பட்டமுறையில் பேசி, எந்த நேரத்திலும் செய்யும் வழிமுறைகளை உணர்பவன் — நெருங்கித் தேர்ந்தெடுத்து துணையாகக் கொள்ளத்தக்க அமைச்சனாவான்.",
    altTranslation: "Versed in virtue, measured tongue, and always knows the way — Such is the counsellor to choose, without delay. — Pope"
  },
  {
    num: 636, chapter: 64,
    tamil: "மதிநுட்பம் நூலோடு உடையார்க்கு அதிநுட்பம்\nயாவுள முன்நிற் பவை.",
    transliteration: "Matinuṭpam nūlōṭu uṭaiyārkku atinuṭpam\nYāvuḷa muṉniṟ pavai.",
    english: "When keen intellect is joined with learning, what subtle obstacle can stand before it?",
    tamilUrai: "நுட்பமான அறிவும், நூலறிவும் சேர்ந்திருக்கிறவர்களுக்கு முன் — எத்தகைய நுட்பமான தடைகள் தாக்குப் பிடிக்க முடியும்?",
    altTranslation: "When subtle wit with learned lore is rightly joined, Before its force, what subtlest bar can stand entwined? — Pope"
  },
  {
    num: 637, chapter: 64,
    tamil: "செயற்கை அறிந்தக் கடைத்தும் உலகத்து\nஇயற்கை அறிந்து செயல்.",
    transliteration: "Ceyaṟkai aṟintak kaṭaittum ulakattu\niyaṟkai aṟintu ceyal.",
    english: "Though one knows the art of doing by book, he must still act in the knowledge of how the world really works.",
    tamilUrai: "நூலில் கூறப்பட்ட செய்முறை அறிந்திருந்த போதிலும், உலக நடைமுறையில் உள்ள இயற்கையையும் அறிந்து, அதன்படி செயற்பட வேண்டும்.",
    altTranslation: "Though all the bookish art of doing you have learned, Still on the world's own ways your acts must stand well earned. — Pope"
  },
  {
    num: 638, chapter: 64,
    tamil: "அறிகொன்று அறியான் எனினும் உறுதி\nயுழையிருந்தான் கூறல் கடன்.",
    transliteration: "Aṟikoṉṟu aṟiyāṉ eṉiṉum uṟuti\nyuḻaiyiruntāṉ kūṟal kaṭaṉ.",
    english: "Even if the king is reckless and ignores good counsel, it is the minister's duty to still tell him the truth.",
    tamilUrai: "மன்னன் அறிவுரைகளை ஏற்காத தன்மை உடையவனாய் இருந்தாலும், அவனது அருகில் இருக்கும் அமைச்சன் அரசனுக்கு உறுதியான ஆலோசனைகளைக் கூறுவது தனது கடமையாகும்.",
    altTranslation: "Though the king ignore or slight all counsel true, The minister must still give word of what he knew. — Pope"
  },
  {
    num: 639, chapter: 64,
    tamil: "பழுதெண்ணும் மந்திரியிற் பக்கத்துள் தெவ்வோர்\nஎழுபது கோடி உறும்.",
    transliteration: "Paḻuteṇṇum mantiriyiṟ pakkattuḷ tevvōr\neḻupatu kōṭi uṟum.",
    english: "Better to have seventy crore foes at your side than a single minister plotting harm against you.",
    tamilUrai: "தீமை செய்ய நினைக்கும் ஒரே ஒரு அமைச்சன் இருப்பதைவிட, எழுபது கோடி பகைவர்கள் சுற்றிலும் இருப்பது மேல்.",
    altTranslation: "Better by seventy crores of foes beset to be, Than one such minister who plots disloyalty. — Pope"
  },
  {
    num: 640, chapter: 64,
    tamil: "முறைப்படச் சூழ்ந்தும் முடிவிலவே செய்வர்\nதிறப்பாடு இலாஅ தவர்.",
    transliteration: "Muṟaippaṭac cūḻntum muṭivilavē ceyvar\nTiṟappāṭu ilāa tavar.",
    english: "Those without practical skill may plan methodically but never finish; their schemes remain without end.",
    tamilUrai: "சிறந்த ஆற்றல் இல்லாதவர்கள், திட்டவட்டமான முறையில் ஆராய்ந்து முடிவு செய்தாலும், முடிவுறா முயற்சிகளையே மேற்கொண்டிருப்பார்கள்.",
    altTranslation: "Though they plan well, they work no end, nor reach a goal — Those practical skill have not, whose plans unroll. — Pope"
  },

  // CHAPTER 65 — Power in Speech
  {
    num: 641, chapter: 65,
    tamil: "நாநலம் என்னும் நலனுடைமை அந்நலம்\nயாநலத்து உள்ளதூஉம் அன்று.",
    transliteration: "Nānalam eṉṉum nalaṉuṭaimai annalam\nyānalattu uḷḷatūum aṉṟu.",
    english: "The good possession called mastery of speech — no other quality equals it.",
    tamilUrai: "நாவன்மை என்னும் நல்ல பண்புடைமை, வேறு எந்த நலத்திலும் ஒப்பிட முடியாத தனிப்பட்ட சிறப்பு வாய்ந்தது.",
    altTranslation: "The virtue called the mastery of tongue — no other good Can match the splendour of this goodly mood. — Pope"
  },
  {
    num: 642, chapter: 65,
    tamil: "ஆக்கமுங் கேடும் அதனால் வருதலால்\nகாத்தோம்பல் சொல்லின்கண் சோர்வு.",
    transliteration: "Ākkamuṅ kēṭum ataṉāl varutalāl\nKāttōmpal colliṉkaṇ cōrvu.",
    english: "Since both gain and ruin come from speech, let one guard carefully against any slip of the tongue.",
    tamilUrai: "ஆக்கமும், அழிவும் ஒருவனின் சொல்லின் வழியாகவே வருவதால், சொல்வதில் எந்தச் சோர்வும் ஏற்படாதவாறு காத்துக்கொள்ள வேண்டும்.",
    altTranslation: "Since speech doth bring both wealth and woe in train, Guard thou thy tongue, nor loose the unguarded rein. — Pope"
  },
  {
    num: 643, chapter: 65,
    tamil: "கேட்டார்ப் பிணிக்கும் தகையவாய்க் கேளாரும்\nவேட்ப மொழிவதாம் சொல்.",
    transliteration: "Kēṭṭārp piṇikkum takaiyavāyk kēḷārum\nVēṭpa moḻivatām col.",
    english: "True speech is that which binds the hearers who listen, and makes even those who have not yet heard long to do so.",
    tamilUrai: "கேட்பவர்களை தன் கருத்தால் கட்டிப்போடும் தன்மை கொண்டதாய், கேட்காதவர்களும் கேட்க விரும்பும் வகையில் அமைந்ததே சிறந்த சொல்.",
    altTranslation: "That speech which binds the hearer to its bidding, And makes non-hearers long — that's worth of ridding. — Pope"
  },
  {
    num: 644, chapter: 65,
    tamil: "திறனறிந்து சொல்லுக சொல்லை அறனும்\nபொருளும் அதனினூஉங்கு இல்.",
    transliteration: "Tiṟaṉaṟintu colluka collai aṟaṉum\nPoruḷum ataṉiṉūuṅku il.",
    english: "Speak words knowing their force; there is nothing greater than this, in virtue or in wealth.",
    tamilUrai: "சொற்களின் திறனை அறிந்து, பொருத்தமாய்ப் பேசுங்கள்; இதற்கு மேற்பட்ட அறம் என்றோ, பொருள் என்றோ வேறெதுவும் இல்லை.",
    altTranslation: "Speak thou with knowledge of the power of speech — no gain, No virtue, greater than this art remain. — Pope"
  },
  {
    num: 645, chapter: 65,
    tamil: "சொல்லுக சொல்லைப் பிறிதோர்சொல் அச்சொல்லை\nவெல்லுஞ்சொல் இன்மை அறிந்து.",
    transliteration: "Colluka collaip piṟitōrcol accollai\nVelluñcol iṉmai aṟintu.",
    english: "Speak a word only after knowing that no other word can vanquish it.",
    tamilUrai: "தான் சொல்லப்போகும் சொல்லை, வேறு எந்தச் சொல்லாலும் மறுக்கவோ, வெல்லவோ முடியாது என்பதை அறிந்த பின்பே சொல்ல வேண்டும்.",
    altTranslation: "Speak thou the word thou hast, — making sure no rival phrase Can overcome or nullify its force that sways. — Pope"
  },
  {
    num: 646, chapter: 65,
    tamil: "வேட்பத்தாஞ் சொல்லிப் பிறர்சொல் பயன்கோடல்\nமாட்சியின் மாசற்றார் கோள்.",
    transliteration: "Vēṭpattāñ collip piṟarcol payaṉkōṭal\nMāṭciyiṉ mācaṟṟār kōḷ.",
    english: "To speak in a way that others wish to hear, and to grasp the purport of what they say — such is the rule of the faultless.",
    tamilUrai: "மற்றவர்கள் விரும்பும்படியாய் பேசுவதும், பிறர் பேசுவதில் பொருளைத் தெளிவாக உணர்ந்து கொள்வதும் — குற்றமற்ற பெரியோரின் கொள்கையாகும்.",
    altTranslation: "To speak such words as others wish to hear, And grasp their purport clear — the spotless' sphere. — Pope"
  },
  {
    num: 647, chapter: 65,
    tamil: "சொலல்வல்லன் சோர்விலன் அஞ்சான் அவனை\nஇகல்வெல்லல் யார்க்கும் அரிது.",
    transliteration: "Colalvallaṉ cōrvilaṉ añcāṉ avaṉai\niKalvellal yārkkum aritu.",
    english: "It is hard for anyone to defeat a man who is eloquent, never falters, and is fearless.",
    tamilUrai: "பேசுவதில் திறமை உடையவனாய், சோர்வின்றி, அச்சமின்றி இருப்பவனை, யாரும் எதிர்த்து வெற்றி கொள்வது மிகவும் கடினம்.",
    altTranslation: "Master of speech, unflagging, fearless in debate — Him no man ever conquers, whatsoever his state. — Pope"
  },
  {
    num: 648, chapter: 65,
    tamil: "விரைந்து தொழில்கேட்கும் ஞாலம் நிரந்தினிது\nசொல்லுதல் வல்லார்ப் பெறின்.",
    transliteration: "Viraintu toḻilkēṭkum ñālam nirantiṉitu\nCollutal vallārp peṟiṉ.",
    english: "The world rushes to obey him who can speak in order, sweetly, and clearly.",
    tamilUrai: "ஒழுங்காகவும், இனிமையாகவும், தெளிவாகவும் பேசும் ஆற்றல் உடையவனைக் கண்டால், உலகம் அவனது ஆணையை விரைவாகக் கேட்டு ஏற்றுக்கொள்கின்றது.",
    altTranslation: "The world obeys with eager heart and swift delight The man who speaks with order, sweetness, and with sight. — Pope"
  },
  {
    num: 649, chapter: 65,
    tamil: "பலசொல்லக் காமுறுவர் மன்றமா சற்ற\nசிலசொல்லல் தேற்றா தவர்.",
    transliteration: "Palacollak kāmuṟuvar maṉṟamā caṟṟa\nCilacollal tēṟṟā tavar.",
    english: "Those who cannot speak a few faultless words will certainly love to speak many.",
    tamilUrai: "குற்றமற்ற வகையில், சில அவசியமான சொற்களைச் சொல்லத் தெரியாதவர்கள், பல தேவையில்லாத சொற்களைப் பேசுவதையே விரும்புவர்.",
    altTranslation: "Who cannot few words speak without a blemish wrong, Will surely love to utter many words along. — Pope"
  },
  {
    num: 650, chapter: 65,
    tamil: "இண்ரூழ்த்தும் நாறா மலரனையர் கற்றது\nஉணர விரித்துரையா தார்.",
    transliteration: "Iṇrūḻttum nāṟā malaraṉaiyar kaṟṟatu\nUṇara viritturaiyā tār.",
    english: "Those who cannot clearly expound what they have learned are like flowers that bloom but give no fragrance.",
    tamilUrai: "தாம் கற்றதை மற்றவர்கள் உணருமாறு விரித்துச் சொல்லத் தெரியாதவர்கள், மலர்ந்தும் மணம் வீசாத மலருக்கு ஒப்பாகிறார்கள்.",
    altTranslation: "Flowers full-blown, yet fragrance none — such learned men Who can't expound their knowledge to a listening ken. — Pope"
  },

  // CHAPTER 66 — Purity in Action
  {
    num: 651, chapter: 66,
    tamil: "துணைநலம் ஆக்கம் தருஉம் வினைநலம்\nவேண்டிய எல்லாந் தரும்.",
    transliteration: "Tuṇainalam ākkam taruum viṉainalam\nVēṇṭiya ellān tarum.",
    english: "Good associates bring wealth; but purity of action brings whatever one desires.",
    tamilUrai: "தக்க துணையால் செல்வம் கிடைக்கும்; தூய்மையான செயலால் விரும்பிய அனைத்துமே கிடைக்கும்.",
    altTranslation: "Good company bestows prosperity alone; But deeds' pure worth gains all that one has shown. — Pope"
  },
  {
    num: 652, chapter: 66,
    tamil: "என்றும் ஒருவுதல் வேண்டும் புகழொடு\nநன்றி பயவா வினை.",
    transliteration: "Eṉṟum oruvutal vēṇṭum pukaḻoṭu\nNaṉṟi payavā viṉai.",
    english: "Always shun the deed that brings neither fame nor benefit.",
    tamilUrai: "புகழையும், நன்மையையும் அளிக்காத செயல்களை எப்போதும் ஒதுக்கி விடுவது வேண்டும்.",
    altTranslation: "Shun every deed that brings no fame nor gain; Such acts forever from thy life refrain. — Pope"
  },
  {
    num: 653, chapter: 66,
    tamil: "ஓஒதல் வேண்டும் ஒளிமாழ்கும் செய்வினை\nஆஅதும் என்னு மவர்.",
    transliteration: "Ōotal vēṇṭum oḷimāḻkum ceyviṉai\nĀatum eṉṉu mavar.",
    english: "Those who would rise to high fame must forsake deeds that dim their own glory.",
    tamilUrai: "உயர்ந்த நிலையை அடைய விரும்புகிறவர்கள், தம் மேன்மையை மங்கச் செய்கின்ற செயல்களைத் தவிர்க்க வேண்டும்.",
    altTranslation: "Who would their own true glory rise and raise, Must shun such acts as dim its shining blaze. — Pope"
  },
  {
    num: 654, chapter: 66,
    tamil: "இடுக்கண் படினும் இளிவந்த செய்யார்\nநடுக்கற்ற காட்சி யவர்.",
    transliteration: "Iṭukkaṇ paṭiṉum iḷivanta ceyyār\nNaṭukkaṟṟa kāṭci yavar.",
    english: "Even in great trouble, the men of steady vision will not do what is shameful.",
    tamilUrai: "துன்பம் அடைந்தாலும், அசையாத தெளிவான சிந்தனையுடையவர்கள், பழிக்கத்தகுந்த இழிவான செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "Though griefs o'erwhelm them, men of steadfast mind will not Do deeds whose shame besmirches their own lot. — Pope"
  },
  {
    num: 655, chapter: 66,
    tamil: "எற்றென்று இரங்குவ செய்யற்க செய்வானேல்\nமற்றன்ன செய்யாமை நன்று.",
    transliteration: "Eṟṟeṉṟu iraṅkuva ceyyaṟka ceyvāṉēl\nMaṟṟaṉṉa ceyyāmai naṉṟu.",
    english: "Do not do what you will repent 'What have I done?'; if done, do it not again.",
    tamilUrai: "\"என்ன செய்துவிட்டோம்\" என வருந்தத்தக்க செயல்களைச் செய்யவே வேண்டாம்; ஒருவேளை செய்துவிட்டால், அத்தகைய செயலை இனி செய்யாது இருத்தல் நன்று.",
    altTranslation: "Do not the deed o'er which thou'lt grieve, 'What have I wrought?'; If done, do never such again — that's wisdom taught. — Pope"
  },
  {
    num: 656, chapter: 66,
    tamil: "ஈன்றாள் பசிகாண்பான் ஆயினுஞ் செய்யற்க\nசான்றோர் பழிக்கும் வினை.",
    transliteration: "Īṉṟāḷ pacikāṇpāṉ āyiṉuñ ceyyaṟka\nCāṉṟōr paḻikkum viṉai.",
    english: "Even to save one's own mother from starvation, one must not do a deed the wise despise.",
    tamilUrai: "தன்னைப் பெற்ற தாய் பசியால் துடிப்பதை கண்டாலும்கூட, சான்றோரால் பழிக்கப்படக்கூடிய செயலைச் செய்யக்கூடாது.",
    altTranslation: "Though 'twere to save thy mother from hunger's deadly ban, Do not the deed the wise condemn as less than man. — Pope"
  },
  {
    num: 657, chapter: 66,
    tamil: "பழிமலைந்து எய்திய ஆக்கத்தின் சான்றோர்\nகழிநல்குரவே தலை.",
    transliteration: "Paḻimalaintu eytiya ākkattiṉ cāṉṟōr\nKaḻinalkuravē talai.",
    english: "The utmost poverty of the wise is nobler than wealth gained through blameful deeds.",
    tamilUrai: "பழியைத் தேடிக்கொண்டு பெற்ற செல்வத்தைவிட, சான்றோர்கள் அடைகின்ற கடும் வறுமை மேலானது.",
    altTranslation: "Wealth heaped with blame of men is baser far Than noblest poverty of wise, unstained by jar. — Pope"
  },
  {
    num: 658, chapter: 66,
    tamil: "கடிந்த கடிந்தொரார் செய்தார்க்கு அவைதாம்\nமுடிந்தாலும் பீழை தரும்.",
    transliteration: "Kaṭinta kaṭintorār ceytārkku avaitām\nmuṭintālum pīḻai tarum.",
    english: "Deeds forbidden by the wise, done by those who disregard them, will bring grief even when they succeed.",
    tamilUrai: "ஒதுக்கப்பட்ட செயல்களை ஒதுக்காமல் செய்தவர்க்கு, அவை விரும்பியபடி முடிவடைந்தாலும், இறுதியில் துன்பத்தையே தரும்.",
    altTranslation: "The deeds the wise condemn, who does and does, though well They end, must grief in secret surely dwell. — Pope"
  },
  {
    num: 659, chapter: 66,
    tamil: "அழக்கொண்ட எல்லாம் அழப்போம் இழப்பினும்\nபிற்பயக்கும் நற்பா லவை.",
    transliteration: "Aḻakkoṇṭa ellām aḻappōm iḻappiṉum\nPiṟpayakkum naṟpā lavai.",
    english: "All that is gained by causing others to weep will depart with weeping; virtuous deeds, though they bring loss at first, yield good afterwards.",
    tamilUrai: "பிறர் அழுமாறு அவர்கள் பொருளை எடுத்துக் கொண்டால், அனைத்தும் ஒருவன் அழும்படி விலகிப் போகும்; நல்ல செயல்கள் முதலில் இழப்பு தோன்றினாலும், பின்னர் நல்ல பலனையே தரும்.",
    altTranslation: "Gain got by causing tears shall weep and pass away; Good deeds though costly first, reward with coming day. — Pope"
  },
  {
    num: 660, chapter: 66,
    tamil: "சலத்தால் பொருள்செய்தே மார்த்தல் பசுமண்\nகலத்துள்நீர் பெய்திரீஇ யற்று.",
    transliteration: "Calattāl poruḷceytē mārttal pacumaṇ\nKalattuḷnīr peytirīi yaṟṟu.",
    english: "To hoard wealth obtained by fraud is like storing water in a vessel of raw clay.",
    tamilUrai: "வஞ்சனை செய்து ஈட்டிய பொருளை, நன்கு கேடில்லாமல் பாதுகாப்பதாகக் கருதுதல், பச்சை மண்ணால் செய்த பானையில் நீர் ஊற்றி வைத்திருப்பதற்கு ஒப்பாகும்.",
    altTranslation: "To keep in store the wealth by fraud procured, Is pouring water into clay-pot unbaked, unsecured. — Pope"
  },

  // CHAPTER 67 — Power in Action
  {
    num: 661, chapter: 67,
    tamil: "வினைத்திட்பம் என்பது ஒருவன் மனத்திட்பம்\nமற்றைய எல்லாம் பிற.",
    transliteration: "Viṉaittiṭpam eṉpatu oruvaṉ maṉattiṭpam\nMaṟṟaiya ellām piṟa.",
    english: "Firmness in action means firmness of mind; all else is something different.",
    tamilUrai: "ஒரு செயலில் உறுதியாக இருப்பது என்பது, ஒருவனது மனத்தின் உறுதிப்பாட்டைச் சார்ந்தது; மற்றவை எல்லாம் அதற்கு வெளியானவை.",
    altTranslation: "Firmness in action is but firmness of the mind; All other strengths to this one strength are joined. — Pope"
  },
  {
    num: 662, chapter: 67,
    tamil: "ஊறொரால் உற்றபின் ஒல்காமை இவ்விரண்டின்\nஆறென்பர் ஆய்ந்தவர் கோள்.",
    transliteration: "Ūṟorāl uṟṟapiṉ olkāmai ivviraṇṭiṉ\nĀṟeṉpar āyntavar kōḷ.",
    english: "Avoid what will bring trouble; but once trouble has come, flinch not — so say the wise.",
    tamilUrai: "துன்பத்தை விளைவிக்கும் தீய செயல்களை தவிர்த்து, வந்துவிட்ட துன்பத்தின் முன்னிலையில் தளராமல் இருப்பது — ஆராய்ந்த அறிஞர்களின் நெறியாகும்.",
    altTranslation: "Avoid what brings thee pain; once pain has come, stand fast — These are the two-fold rules the wise have passed. — Pope"
  },
  {
    num: 663, chapter: 67,
    tamil: "கடைக்கொட்கச் செய்தக்க தாண்மை இடைக்கொட்கின்\nஎற்றா விழுமந் தரும்.",
    transliteration: "Kaṭaikkoṭkac ceytakka tāṇmai iṭaikkoṭkiṉ\nEṟṟā viḻuman tarum.",
    english: "Manliness is to accomplish an action to its end; the work that is interrupted midway brings irreparable trouble.",
    tamilUrai: "தொடங்கிய செயலை முடிவுவரை கொண்டு போய் முடிப்பதே ஆண்மை; நடு வழியில் விட்டுவிடுவது, தீர்க்க முடியாத துன்பங்களைத் தரும்.",
    altTranslation: "True manhood means the deed brought safely to its end; Begun, left half — it brings woes none can ever mend. — Pope"
  },
  {
    num: 664, chapter: 67,
    tamil: "சொல்லுதல் யார்க்கும் எளிய அரியவாம்\nசொல்லிய வண்ணம் செயல்.",
    transliteration: "Collutal yārkkum eḷiya ariyavām\nColliya vaṇṇam ceyal.",
    english: "To speak is easy for anyone; but it is hard to do what has been said.",
    tamilUrai: "ஒரு செயலை எவரும் சொல்வது எளிது; ஆனால், சொன்னபடியே அதை நிறைவேற்றிச் செய்வது மிக அரிதானது.",
    altTranslation: "Easy for any to say a thing; but hard the part To act in full accord with speech's crafted art. — Pope"
  },
  {
    num: 665, chapter: 67,
    tamil: "வீறெய்தி மாண்டார் வினைத்திட்பம் வேந்தன்கண்\nஊறெய்தி உள்ளப் படும்.",
    transliteration: "Vīṟeyti māṇṭār viṉaittiṭpam vēntaṉkaṇ\nŪṟeyti uḷḷap paṭum.",
    english: "The firm action of the noble reaches the king's ear and wins his high regard.",
    tamilUrai: "மேன்மை பெற்று சிறப்புற்றவர்களின் உறுதியான செயல், அரசனுடைய கவனத்திற்கு சென்று, அவனாலும் உயர்வாகக் கருதப்படும்.",
    altTranslation: "The noble's firm resolve in action reaches through To monarch's ear and wins his high review. — Pope"
  },
  {
    num: 666, chapter: 67,
    tamil: "எண்ணிய எண்ணியாங்கு எய்துப எண்ணியார்\nதிண்ணியர் ஆகப் பெறின்.",
    transliteration: "Eṇṇiya eṇṇiyāṅku eytupa eṇṇiyār\nTiṇṇiyar ākap peṟiṉ.",
    english: "What one has thought of can be fully attained, if one remains firm of purpose.",
    tamilUrai: "எண்ணியதைச் சிந்தித்தவாறு செய்ய முடியும்; எண்ணியவர்கள் உறுதியாக நின்று செயற்பட்டால்.",
    altTranslation: "What one has planned, shall as planned fulfilment find, If firm of heart the planners' hearts are joined. — Pope"
  },
  {
    num: 667, chapter: 67,
    tamil: "உருவுகண் டெள்ளாமை வேண்டும் உருள்பெருந்தேர்க்கு\nஅச்சாணி அன்னார் உடைத்து.",
    transliteration: "Uruvukaṇ ṭeḷḷāmai vēṇṭum uruḷperuntērk\nAccāṇi aṉṉār uṭaittu.",
    english: "Despise no one by his outward form; many are as the lynchpin to a mighty rolling chariot.",
    tamilUrai: "வெளித்தோற்றத்தை மட்டும் பார்த்து எவரையும் இகழ வேண்டாம்; உலகத்தில், பெரிய தேர் உருள காரணமான சிறிய அச்சாணி போன்றவர்கள் பலர் இருக்கின்றனர்.",
    altTranslation: "Scorn no man by his outward form; many are as The tiny lynchpin of the mighty rolling car. — Pope"
  },
  {
    num: 668, chapter: 67,
    tamil: "கலங்காது கண்ட வினைக்கண் துளங்காது\nதூக்கங் கடிந்து செயல்.",
    transliteration: "Kalaṅkātu kaṇṭa viṉaikkaṇ tuḷaṅkātu\nTūkkaṅ kaṭintu ceyal.",
    english: "An action once resolved upon without hesitation must be carried out without wavering or delay.",
    tamilUrai: "குழப்பமின்றி ஆராய்ந்து முடிவு செய்த செயலை, தயக்கமின்றி, காலதாமதம் இன்றி செய்து முடிக்க வேண்டும்.",
    altTranslation: "The deed once fixed without confused demur, Perform without wavering, nor delay incur. — Pope"
  },
  {
    num: 669, chapter: 67,
    tamil: "துன்பம் உறவரினும் செய்க துணிவாற்றி\nஇன்பம் பயக்கும் வினை.",
    transliteration: "Tuṉpam uṟavariṉum ceyka tuṇivāṟṟi\nIṉpam payakkum viṉai.",
    english: "Even though sorrow comes, do with firm courage the deed that will end in joy.",
    tamilUrai: "துன்பம் ஏற்படும் நிலை வந்தாலும், இறுதியில் இன்பத்தை அளிக்கும் செயலை, துணிச்சலுடன் செய்ய வேண்டும்.",
    altTranslation: "Though pain beset thy path, with courage do the deed Whose final issue joy and gladness yields indeed. — Pope"
  },
  {
    num: 670, chapter: 67,
    tamil: "எனைத்திட்பம் எய்தியக் கண்ணும் வினைத்திட்பம்\nவேண்டாரை வேண்டாது உலகு.",
    transliteration: "Eṉaittiṭpam eytiyak kaṇṇum viṉaittiṭpam\nVēṇṭārai vēṇṭātu ulaku.",
    english: "Whatever other strength a man may have, the world will not value him unless he also has firmness in action.",
    tamilUrai: "எவ்வளவுதான் வேறு வகையான உறுதிகளைப் பெற்றிருந்தாலும், செயலில் உறுதி இல்லாதவர்களை உலகம் விரும்பாது.",
    altTranslation: "However great man's other strengths, the world's esteem Falls not on him who in firm action fails his theme. — Pope"
  },

  // CHAPTER 68 — Methods of Action
  {
    num: 671, chapter: 68,
    tamil: "சூழ்ச்சி முடிவு துணிவெய்தல் அத்துணிவு\nதாழ்ச்சியுள் தங்குதல் தீது.",
    transliteration: "Cūḻcci muṭivu tuṇiveytal attuṇivu\nTāḻcciyuḷ taṅkutal tītu.",
    english: "Careful planning ends in decisive resolve; but after resolving, delay is evil.",
    tamilUrai: "ஆராய்ச்சியின் முடிவு, செயலில் இறங்குவதற்கான உறுதியான முடிவை அடைதல் ஆகும்; அப்படி முடிவெடுத்த பிறகு, காலதாமதம் செய்து தள்ளிவைப்பது தீமையாகும்.",
    altTranslation: "Of planning well, decisive resolve's the end; But once resolved, delay must ruin's woe attend. — Pope"
  },
  {
    num: 672, chapter: 68,
    tamil: "தூங்குக தூங்கிச் செயற்பால தூங்கற்க\nதூங்காது செய்யும் வினை.",
    transliteration: "Tūṅkuka tūṅkic ceyaṟpāla tūṅkaṟka\nTūṅkātu ceyyum viṉai.",
    english: "Delay deeds which require delay; delay not deeds which admit no delay.",
    tamilUrai: "காலதாமதம் செய்து முடிக்க வேண்டிய செயல்களை, காலதாமதம் செய்து முடி; காலதாமதம் செய்யாமல் முடிக்க வேண்டிய செயல்களை, தாமதிக்காமல் செய்.",
    altTranslation: "Put off the things that should be put away; Never delay what must be done today. — Pope"
  },
  {
    num: 673, chapter: 68,
    tamil: "ஒல்லும்வாய் எல்லாம் வினைநன்றே ஒல்லாக்கால்\nசெல்லும்வாய் நோக்கிச் செயல்.",
    transliteration: "Ollumvāy ellām viṉainaṉṟē ollākkāl\nCellumvāy nōkkic ceyal.",
    english: "When an act can be done directly, do it at once; when it cannot, look out for some other way and proceed.",
    tamilUrai: "நேரடியாகச் செய்ய முடியும் இடங்களில், அந்தச் செயலை நன்றாகச் செய்க; செய்ய இயலாத நேரத்தில், செயல்படுத்தக்கூடிய மாற்று வழியைக் கண்டறிந்து செயல்படுக.",
    altTranslation: "Do deeds where possible at once; where not, search out Another path, and shape thy course without doubt. — Pope"
  },
  {
    num: 674, chapter: 68,
    tamil: "வினைபகை என்றிரண்டின் எச்சம் நினையுங்கால்\nதீயெச்சம் போலத் தெறும்.",
    transliteration: "Viṉaipakai eṉṟiraṇṭiṉ eccam niṉaiyuṅkāl\nTīyeccam pōlat teṟum.",
    english: "Incomplete action and unfinished enmity are like unextinguished fire — they will burn you in the end.",
    tamilUrai: "முடிக்கப்படாமல் கிடக்கின்ற செயலும், முழுமையாய் வெல்லப்படாத பகையும், அணையாமல் விடப்பட்ட தீயைப் போலப் பின்னால் வந்து கொளுத்தும்.",
    altTranslation: "Deeds left half-done, and enmities unfinished still, Will burn like embers which the careless kindling kill. — Pope"
  },
  {
    num: 675, chapter: 68,
    tamil: "பொருள்கருவி காலம் வினையிடனொடு ஐந்தும்\nஇருள்தீர எண்ணிச் செயல்.",
    transliteration: "Poruḷkaruvi kālam viṉaiyiṭaṉoṭu aintum\niruḷtīra eṇṇic ceyal.",
    english: "Wealth, instrument, time, the action itself, and the place — these five should be clearly considered before acting.",
    tamilUrai: "செய்ய வேண்டிய செயல், அதற்குரிய பொருள், கருவி, காலம், இடம் — ஆகிய ஐந்தையும் தெளிவாக எண்ணி ஆராய்ந்த பின்னரே செயற்பட வேண்டும்.",
    altTranslation: "Wealth, tool, time, deed, and place — these five weigh clear, Without confusion, ere you persevere. — Pope"
  },
  {
    num: 676, chapter: 68,
    tamil: "முடிவும் இடையூறும் முற்றுப் பயனும்\nமடிசெய்யா மாண்டது அமைச்சு.",
    transliteration: "Muṭivum iṭaiyūṟum muṟṟup payaṉum\nMaṭiceyyā māṇṭatu amaiccu.",
    english: "Considering the outcome, obstacles, and final benefits, to act without delay — this is the sign of the great minister.",
    tamilUrai: "செய்யும் செயலின் முடிவு, இடையில் வரக்கூடிய இடையூறுகள், முழுமையான பலன் — ஆகியவற்றை ஆராய்ந்து, சோம்பலின்றி செயலாற்றுவதே சிறந்த அமைச்சனின் தன்மை.",
    altTranslation: "The minister is great who ponders end, and what may let, And fruits entire — and does, with no delay beset. — Pope"
  },
  {
    num: 677, chapter: 68,
    tamil: "செய்வினை செய்வான் செயன்முறை அவ்வினை\nஉள்ளறிவான் உள்ளம் கொளல்.",
    transliteration: "Ceyviṉai ceyvāṉ ceyaṉmuṟai avviṉai\nUḷḷaṟivāṉ uḷḷam koḷal.",
    english: "The method for the doer is to gain the mind of one who knows the action through.",
    tamilUrai: "ஒரு செயலைச் செய்ய விரும்புபவர், அந்தச் செயலைப் பற்றி உட்பொருள் அறிந்தவரின் உள்ளத்துக் கருத்தை முதலில் அறிந்துகொள்வதே, அவர் தேர்ந்துகொள்ள வேண்டிய வழிமுறை.",
    altTranslation: "Who does a deed must gain the inner mind of one Who knows that deed to its utmost, under sun. — Pope"
  },
  {
    num: 678, chapter: 68,
    tamil: "வினையான் வினையாக்கிக் கோடல் நனைகவுள்\nயானையால் யானையாத் தற்று.",
    transliteration: "Viṉaiyāṉ viṉaiyākkik kōṭal naṉaikavuḷ\nYāṉaiyāl yāṉaiyāt taṟṟu.",
    english: "Accomplishing one task through another is like catching one elephant by means of another.",
    tamilUrai: "ஒரு செயலை மற்றொரு செயலின் துணையுடன் நிறைவேற்றி கொள்வது, காமக்களி உள்ள யானையைக் கொண்டு மற்றொரு யானையைப் பிடிப்பதற்கு ஒப்பானது.",
    altTranslation: "To do one thing by aid of other — 'tis the way To capture elephants with elephants by day. — Pope"
  },
  {
    num: 679, chapter: 68,
    tamil: "நட்டார்க்கு நல்ல செயலின் விரைந்ததே\nஒட்டாரை ஒட்டிக் கொளல்.",
    transliteration: "Naṭṭārkku nalla ceyaliṉ viraintatē\nOṭṭārai oṭṭik koḻal.",
    english: "Better than helping friends swiftly is winning over foes and making them one's own.",
    tamilUrai: "நண்பர்களுக்கு நன்மை செய்வதைவிட, விரைவாக பகைவர்களை ஒத்துழைக்க வைத்து, அவர்களையும் நண்பர்களாக்கிக் கொள்ளுதல் மேலானது.",
    altTranslation: "Win o'er thy foes and make them friends — that's quicker far Than even the kindly service which thy friends prefer. — Pope"
  },
  {
    num: 680, chapter: 68,
    tamil: "உறைசிறியார் உள்நடுங்கல் அஞ்சிக் குறைபெறின்\nகொள்வர் பெரியார்ப் பணிந்து.",
    transliteration: "Uṟaiciṟiyār uḷnaṭuṅkal añcik kuṟaipeṟiṉ\nKoḷvar periyārp paṇintu.",
    english: "Fearing the despair of their own subjects, small rulers will bow to the greater to secure favourable terms.",
    tamilUrai: "குடிமக்கள் அச்சத்தால் நடுங்குவதை அஞ்சி, சிறிய மன்னர்கள், பெரிய மன்னர்களுக்கு முன் பணிந்து, தங்களுக்கு ஏற்ற முடிவை எட்ட முயல்வர்.",
    altTranslation: "The lesser ruler, fearing his subjects' panic dread, Bows to the greater king, his terms to safely tread. — Pope"
  },

  // CHAPTER 69 — The Envoy
  {
    num: 681, chapter: 69,
    tamil: "அன்புடைமை ஆன்ற குடிப்பிறத்தல் வேந்தவாம்\nபண்புடைமை தூதுரைப்பான் பண்பு.",
    transliteration: "Aṉpuṭaimai āṉṟa kuṭippiṟattal vēntavām\nPaṇpuṭaimai tūturaippāṉ paṇpu.",
    english: "Loving-kindness, noble birth, and qualities pleasing to kings — these mark the true envoy.",
    tamilUrai: "அன்பு உடைமை, உயர் குடிப் பிறப்பு, மன்னர்கள் விரும்பும் நற்பண்புகள் — ஆகிய இந்த மூன்றும் ஒரு தூதனின் இயல்பான குணங்களாகும்.",
    altTranslation: "Love, noble birth, and gifts that please the royal breast — These three mark out the envoy truly blest. — Pope"
  },
  {
    num: 682, chapter: 69,
    tamil: "அன்பறிவு ஆராய்ந்த சொல்வன்மை தூதுரைப்பார்க்கு\nஇன்றியமை யாத மூன்று.",
    transliteration: "Aṉpaṟivu ārāynta colvaṉmai tūturaippārkku\nIṉṟiyamai yāta mūṉṟu.",
    english: "Love, knowledge, and eloquence chosen with care — these three are indispensable in an envoy.",
    tamilUrai: "அன்பு, அறிவு, சொற்களைத் தேர்ந்து பேசும் நாவன்மை — இம்மூன்றும் தூது செல்பவருக்குத் தவிர்க்க இயலாத இன்றியமையாத பண்புகளாகும்.",
    altTranslation: "Love, wisdom, chosen eloquence — these three Are vital for the envoy's embassy. — Pope"
  },
  {
    num: 683, chapter: 69,
    tamil: "நூலாருள் நூல்வல்லன் ஆகுதல் வேலாருள்\nவென்றி வினையுரைப்பான் பண்பு.",
    transliteration: "Nūlāruḷ nūlvallaṉ ākutal vēlāruḷ\nVeṉṟi viṉaiyuraippāṉ paṇpu.",
    english: "Among warriors, he who speaks the king's triumphant will must be master of all lore among the learned.",
    tamilUrai: "ஆயுதம் ஏந்திய வீரர்களின் முன் சென்று, வெற்றியைத் தரும் தூதுச் செய்தியை எடுத்துரைப்பவன், அறிஞர்கள் நடுவில் நூலறிவில் சிறந்தவனாய் திகழ வேண்டும்.",
    altTranslation: "Mid men of lore, a master of the lore to be — Such is the mark of envoy of the victor's decree. — Pope"
  },
  {
    num: 684, chapter: 69,
    tamil: "அறிவுரு வாராய்ந்த கல்விஇம் மூன்றன்\nசெறிவுடையான் செல்க வினைக்கு.",
    transliteration: "Aṟivuru vārāynta kalviim mūṉṟaṉ\nCeṟivuṭaiyāṉ celka viṉaikku.",
    english: "Let him go on his mission who has three qualities densely combined: wisdom, pleasing form, and examined learning.",
    tamilUrai: "அறிவு, கவர்ச்சியான தோற்றம், ஆராய்ந்து தெளிந்த கல்வி — இம்மூன்றும் செறிவாக அமைந்த ஒருவனே, தூதுக்குச் செல்ல தகுதியானவன்.",
    altTranslation: "Wisdom, form that's pleasing, learning weighed and tried — Let him who has these three, in envoy's task abide. — Pope"
  },
  {
    num: 685, chapter: 69,
    tamil: "தொகச்சொல்லித் தூவாத நீக்கி நகச்சொல்லி\nநன்றி பயப்பதாம் தூது.",
    transliteration: "Tokaccollit tūvāta nīkki nakaccolli\nNaṉṟi payappatām tūtu.",
    english: "The true envoy speaks with brevity, avoids offence, speaks to please, and brings forth good.",
    tamilUrai: "சுருக்கமாகப் பேசி, ஏற்கப்படாதவற்றை விலக்கி, மகிழ்ச்சிதரும் சொற்களைச் சொல்லி, நன்மையை விளைவிப்பவனே உண்மையான தூதன்.",
    altTranslation: "To speak concise, avoid offence, and pleasant be, And work good fruit — that's envoy's mastery. — Pope"
  },
  {
    num: 686, chapter: 69,
    tamil: "கற்றுக்கண் அஞ்சான் செலச்சொல்லிக் காலத்தால்\nதக்கது அறிவதாம் தூது.",
    transliteration: "Kaṟṟukkaṇ añcāṉ celaccollik kālattāl\nTakkatu aṟivatām tūtu.",
    english: "Learned, fearless of eye, speaking so that words reach home, and knowing what suits the hour — such is the true envoy.",
    tamilUrai: "கற்று அறிந்தவனாய், கண்ணஞ்சாது பார்வையுடன், தான் சொல்வது செவி ஏற்குமாறு பேசி, காலத்திற்குத் தக்கது இதுவே எனத் தீர்ந்து அறிபவனே தூதன்.",
    altTranslation: "Learned, of fearless eye, speech reaching home and clear, And grasping time's demand — that's envoy's gear. — Pope"
  },
  {
    num: 687, chapter: 69,
    tamil: "கடனறிந்து காலங் கருதி இடனறிந்து\nஎண்ணி உரைப்பான் தலை.",
    transliteration: "Kaṭaṉaṟintu kālaṅ karuti iṭaṉaṟintu\nEṇṇi uraippāṉ talai.",
    english: "He is chief of envoys who knows his duty, judges the time, knows the place, and speaks after thought.",
    tamilUrai: "தன் கடமை இன்னதென்று உணர்ந்து, உரிய காலத்தை எண்ணி, பொருத்தமான இடத்தை அறிந்து, ஆலோசித்துப் பேசுபவனே சிறந்த தூதன்.",
    altTranslation: "Who knows his duty, times his words, and place can choose, And weighs each thought — the chief of envoys use. — Pope"
  },
  {
    num: 688, chapter: 69,
    tamil: "தூய்மை துணைமை துணிவுடைமை இம்மூன்றின்\nவாய்மை வழியுரைப்பான் பண்பு.",
    transliteration: "Tūymai tuṇaimai tuṇivuṭaimai immūṉṟiṉ\nVāymai vaḻiyuraippāṉ paṇpu.",
    english: "Purity, fit support, and firm courage — on these three, the envoy who speaks the truth rests.",
    tamilUrai: "தூய்மை, தகுதியான துணை, உறுதியான துணிவு — இம்மூன்றின் அடிப்படையில், உண்மையின் வழியாய் எடுத்துரைப்பவனே தூதனின் பண்பாளனாவான்.",
    altTranslation: "Purity, fit attendants, and firm courage true — On these three rests the envoy's pathway through. — Pope"
  },
  {
    num: 689, chapter: 69,
    tamil: "விடுமாற்றம் வேந்தர்க்கு உரைப்பான் வடுமாற்றம்\nவாய்சோரா வன்க ணவன்.",
    transliteration: "Viṭumāṟṟam vēntarkku uraippāṉ vaṭumāṟṟam\nVāycōrā vaṉka ṇavaṉ.",
    english: "The envoy speaks his master's message to the king without letting slip a single blameful word.",
    tamilUrai: "தன் மன்னன் அனுப்பிய செய்தியை பிற மன்னனுக்குச் சொல்பவன், குற்றமான ஒரு சொல்லும் வாய் தவறாமல் உறுதியான மனநிலையுடன் கூற வேண்டும்.",
    altTranslation: "Who to kings his monarch's message bears with steadfast mien, Nor lets one blameful word his lips between. — Pope"
  },
  {
    num: 690, chapter: 69,
    tamil: "இறுதி பயப்பினும் எஞ்சாது இறைவற்கு\nஉறுதி பயப்பதாம் தூது.",
    transliteration: "Iṟuti payappiṉum eñcātu iṟaivaṟku\nUṟuti payappatām tūtu.",
    english: "Even if his own death is the result, the envoy must deliver what will secure his king's good without flinching.",
    tamilUrai: "தனக்கே மரணம் வருவதென்றாலும், தயங்காமல், தன் மன்னனுக்கு நன்மையை உறுதிப்படுத்தும் வகையில் தூதினை நிறைவேற்றுபவனே உண்மையான தூதன்.",
    altTranslation: "Though death itself await, the envoy true, undaunted brings To his own monarch's good the message that it brings. — Pope"
  },

  // CHAPTER 70 — Conduct in the Presence of the King
  {
    num: 691, chapter: 70,
    tamil: "அகலாது அணுகாது தீக்காய்வார் போல்க\nஇகல்வேந்தர்ச் சேர்ந்தொழுகு வார்.",
    transliteration: "Akalātu aṇukātu tīkkāyvār pōlka\nIkalvēntarc cērntoḻuku vār.",
    english: "Those who live near a mighty king should hold themselves like one warming by a fire — neither too far nor too close.",
    tamilUrai: "வலிமையுள்ள மன்னர்களோடு பழகுகிறவர்கள், தீயை நெருங்கிக் காயும் ஒருவனைப் போல, விலகியும் போகாமல், நெருக்கியும் நெருங்காமல், பொருத்தமான இடையூறத்தில் நின்று நடக்க வேண்டும்.",
    altTranslation: "Not too close, not too far, like warming by the flame — So near the mighty king one must his conduct frame. — Pope"
  },
  {
    num: 692, chapter: 70,
    tamil: "மன்னர் விழைப விழையாமை மன்னரால்\nமன்னிய ஆக்கந் தரும்.",
    transliteration: "Maṉṉar viḻaipa viḻaiyāmai maṉṉarāl\nMaṉṉiya ākkan tarum.",
    english: "Not to desire what the king desires is the way to lasting prosperity from the king.",
    tamilUrai: "மன்னர்கள் விரும்பும் அதே பொருட்களை விரும்பாதிருப்பதே, அவர்களிடமிருந்து நிலையான செல்வத்தைப் பெறும் வழியாகும்.",
    altTranslation: "Not to desire the things thy monarch fain would own — This is the way his lasting bounty to have known. — Pope"
  },
  {
    num: 693, chapter: 70,
    tamil: "போற்றின் அரியவை போற்றல் கடுத்தபின்\nதேற்றுதல் யார்க்கும் அரிது.",
    transliteration: "Pōṟṟiṉ ariyavai pōṟṟal kaṭuttapiṉ\nTēṟṟutal yārkkum aritu.",
    english: "Guard against great faults; once suspicion is roused in the king, no one can clear it.",
    tamilUrai: "குற்றமான பெரிய தவறுகளை செய்துவிடாதிருக்க கவனமாக இருக்க வேண்டும்; மன்னன் மனத்தில் ஐயம் உறுதியாக நிலைத்துவிட்டால், அதை எவராலும் மாற்றி தெளிவிக்க முடியாது.",
    altTranslation: "Guard 'gainst great faults; once in a king's mind doubt is sure, No man on earth can ever that suspicion cure. — Pope"
  },
  {
    num: 694, chapter: 70,
    tamil: "செவிச்சொல்லும் சேர்ந்த நகையும் அவித்தொழுகல்\nஆன்றோர் அவையத்து இயல்பு.",
    transliteration: "Ceviccollum cērnta nakaiyum avittoḻukal\nĀṉṟōr avaiyattu iyalpu.",
    english: "In the assembly of the wise, refrain from whispers and private laughter.",
    tamilUrai: "சான்றோர் நிறைந்த அவையில், காதில் ஒருவருக்கே கேட்கும்படி மெல்லப் பேசுதலும், சிலரோடு சேர்ந்து தனியாக சிரித்தலும் — தவிர்த்து நடப்பதே தக்கது.",
    altTranslation: "In assembly of the wise, no whispered word, no private laugh — Such conduct is the seemly path. — Pope"
  },
  {
    num: 695, chapter: 70,
    tamil: "எப்பொருளும் ஓரார் தொடரார்மற் றப்பொருளை\nவிட்டக்கால் கேட்க மறை.",
    transliteration: "Epporuḷum ōrār toṭarārmaṟ ṟapporuḷai\nviṭṭakkāl kēṭka maṟai.",
    english: "Do not investigate or pursue a matter told in secret; listen to it only when the king himself reveals it.",
    tamilUrai: "மன்னன் மறைத்துப் பேசும் பொருள் எதையும், நீங்கள் முதலில் ஆராயவோ, தொடர்ந்து வினவவோ வேண்டாம்; அதை அவன் தானே வெளியிடும்போது கேட்டுக்கொள்ளுங்கள்.",
    altTranslation: "Pry not into what's in secret wrapt; wait till the king Himself the matter unto light shall bring. — Pope"
  },
  {
    num: 696, chapter: 70,
    tamil: "குறிப்பறிந்து காலங் கருதி வெறுப்பில\nவேண்டுப வேட்பச் சொலல்.",
    transliteration: "Kuṟippaṟintu kālaṅ karuti veṟuppila\nVēṇṭupa vēṭpac colal.",
    english: "Having read the king's mood and judged the time, speak pleasing things that are agreeable and desired.",
    tamilUrai: "மன்னனின் மனநிலையை உணர்ந்து, ஏற்ற காலத்தை எண்ணி, வெறுப்பு தராத, அவன் விரும்பும் பொருள்களை, அவன் விரும்பும் வகையில் பேச வேண்டும்.",
    altTranslation: "Reading his mood, choose time, and speak things pleasing, Which, without offence, find in his mind easing. — Pope"
  },
  {
    num: 697, chapter: 70,
    tamil: "வேட்பன சொல்லி வினையில எஞ்ஞான்றும்\nகேட்பினும் சொல்லா விடல்.",
    transliteration: "Vēṭpaṉa colli viṉaiyila eññāṉṟum\nKēṭpiṉum collā viṭal.",
    english: "Speak only what is useful and desired; even if asked for useless things, refrain from speaking them.",
    tamilUrai: "மன்னன் விரும்பிய நல்ல பொருள்களைப் பேச வேண்டும்; பயனற்ற சொற்களைப் பற்றி அவனே கேட்டாலும், அவற்றை பேசாதிருத்தலே மேலானது.",
    altTranslation: "Speak useful things desired; though asked of idle prate, E'en then to utter such is not the wise man's trait. — Pope"
  },
  {
    num: 698, chapter: 70,
    tamil: "இளையர் இனமுறையர் என்றிகழார் நின்ற\nஒளியோடு ஒழுகப் படும்.",
    transliteration: "Iḷaiyar iṉamuṟaiyar eṉṟikaḻār niṉṟa\noḷiyōṭu oḻukap paṭum.",
    english: "Do not scorn a king as young or one's own kinsman; conduct must be shaped by the radiance of his throne.",
    tamilUrai: "\"வயதில் இளையவன்\", \"எனது உறவுக்காரன்\" என்று மன்னனை இகழ்ந்து நடத்தலாகாது; அவன் இருக்கும் அதிகார நிலையின் ஒளியை ஒட்டியே பழகுதல் வேண்டும்.",
    altTranslation: "Scorn not the king as young or kinsman near; Conduct thee by his royal rank's clear sphere. — Pope"
  },
  {
    num: 699, chapter: 70,
    tamil: "கொளப்பட்டேம் என்றெண்ணிக் கொள்ளாத செய்யார்\nதுளக்கற்ற காட்சி யவர்.",
    transliteration: "Koḷappaṭṭēm eṉṟeṇṇik koḷḷāta ceyyār\nTuḷakkaṟṟa kāṭci yavar.",
    english: "Men of unshaken vision do not, because they are favoured, do things that will not be approved.",
    tamilUrai: "அசைவற்ற தெளிவான பார்வையுடையவர்கள், \"நாம் மன்னனால் விரும்பப்பட்டவர்கள்\" என்ற கர்வத்தில், அவர் ஏற்காத செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "The men of steadfast vision, trusting their prince's love, Will never do what in his eyes would ill approve. — Pope"
  },
  {
    num: 700, chapter: 70,
    tamil: "பழையம் எனக்கருதிப் பண்பல்ல செய்யும்\nகெழுதகைமை கேடு தரும்.",
    transliteration: "Paḻaiyam eṉakkarutip paṇpalla ceyyum\nKeḻutakaimai kēṭu tarum.",
    english: "To act familiarly with the king, trusting on old acquaintance, will bring only ruin.",
    tamilUrai: "\"நாம் பழைய துணைவன்\" என்று எண்ணி, மன்னனிடத்தில் பண்பில்லாத நெருக்கமான செயல்களைச் செய்தால், அது கேடு தரும்.",
    altTranslation: "'We're old acquaintance' — with that thought to take liberty, Will only bring ruin without remedy. — Pope"
  },

  // CHAPTER 71 — Knowledge of the Indications
  {
    num: 701, chapter: 71,
    tamil: "கூறாமை நோக்கக் குறிப்பறிவான் எஞ்ஞான்றும்\nமாறாநீர் வையக் கணி.",
    transliteration: "Kūṟāmai nōkkak kuṟippaṟivāṉ eññāṉṟum\nMāṟānīr vaiyak kaṇi.",
    english: "He who reads unspoken thoughts in a glance is ever an ornament to the sea-girt earth.",
    tamilUrai: "ஒருவர் சொல்லாமலேயே, அவருடைய பார்வையைக் கண்டு அவரது உள்ளக் கருத்தை அறியும் ஆற்றல் உள்ளவன், என்றுமே, நீர்சூழ்ந்த இந்த உலகத்திற்கு அணிகலனாய் விளங்குவான்.",
    altTranslation: "Who, without spoken words, by glance alone can read the mind, Is ornament abiding to the sea-girt realm defined. — Pope"
  },
  {
    num: 702, chapter: 71,
    tamil: "ஐயப் படாஅது அகத்தது உணர்வானைத்\nதெய்வத்தோ டொப்பக் கொளல்.",
    transliteration: "Aiyap paṭāatu akattatu uṇarvāṉait\nTeyvattō ṭoppak koḷal.",
    english: "He who without doubt knows the mind within — regard him as a god.",
    tamilUrai: "ஐயம் கொள்ளாமல், பிறர் மனதிற்குள் உள்ளதை உணர்ந்து கொள்பவனை, தெய்வத்திற்கு ஒப்பானவனாகக் கருத வேண்டும்.",
    altTranslation: "Who, without doubting, reads the thought within the breast, Regard him as a god, above all others blest. — Pope"
  },
  {
    num: 703, chapter: 71,
    tamil: "குறிப்பிற் குறிப்புணர் வாரை உறுப்பினுள்\nயாது கொடுத்தும் கொளல்.",
    transliteration: "Kuṟippiṟ kuṟippuṇar vārai uṟuppiṉuḷ\nYātu koṭuttum koḷal.",
    english: "Secure, at any cost of limbs, the man who can read one hint from another.",
    tamilUrai: "ஒரு குறிப்பிலிருந்து மற்றொரு குறிப்பை உணரும் ஆற்றலுள்ளவரை, உடலில் உள்ள எந்த உறுப்பை வேண்டுமானாலும் கொடுத்துவிட்டு, வாங்கிக்கொள்ள வேண்டும்.",
    altTranslation: "Who from one hint another reads with skillful grace, Whate'er it cost of limbs, secure his aiding place. — Pope"
  },
  {
    num: 704, chapter: 71,
    tamil: "குறித்தது கூறாமைக் கொள்வாரோடு ஏனை\nஉறுப்போ ரனையரால் வேறு.",
    transliteration: "Kuṟittatu kūṟāmaik koḷvārōṭu ēṉai\nUṟuppō raṉaiyarāl vēṟu.",
    english: "Men of all others' measure, but who cannot grasp hints unspoken, differ only in shape — not in substance.",
    tamilUrai: "சொல்லப்படாதிருப்பினும் கூட, கருதப்பட்டதைக் கண்டு அறியும் ஆற்றல் உடையவரை விட, மற்றவர்கள் உறுப்பு போன்ற வெளி உருவத்தால் மட்டுமே ஒப்பாய் தெரிவர், உட்பொருளால் மிகுந்த வேறுபாடு உடையவரே ஆவர்.",
    altTranslation: "Those who can't grasp the unspoken hint, from men above Who can, differ in form alone, not essence of true worth. — Pope"
  },
  {
    num: 705, chapter: 71,
    tamil: "குறிப்பிற் குறிப்புணரா ஆயின் உறுப்பினுள்\nஎன்ன பயத்தவோ கண்.",
    transliteration: "Kuṟippiṟ kuṟippuṇarā āyiṉ uṟuppiṉuḷ\nEṉṉa payattavō kaṇ.",
    english: "If the eyes can read no hint, what use among the limbs is the eye?",
    tamilUrai: "ஒருவரது பார்வைக்குறிப்பினால் அவரது மனக் கருத்தை உணர இயலாத கண், பிற உடல் உறுப்பில் என்ன பயனுடையதாய் அமையும்?",
    altTranslation: "If the eye can read no hint, what use in limbs' array That eye which neither sees nor tells the way? — Pope"
  },
  {
    num: 706, chapter: 71,
    tamil: "அடுத்தது காட்டும் பளிங்குபோல் நெஞ்சம்\nகடுத்தது காட்டும் முகம்.",
    transliteration: "Aṭuttatu kāṭṭum paḷiṅkupōl neñcam\nKaṭuttatu kāṭṭum mukam.",
    english: "Just as crystal reflects what is near it, the face reveals what is in the heart.",
    tamilUrai: "தன்னருகே உள்ளதை எல்லாம் பளிங்கு காட்டுவதைப் போல, ஒருவரது மனத்தில் கொண்டிருப்பதை அவரது முகம் காட்டிவிடும்.",
    altTranslation: "As crystal shows whate'er is near in clear display, The face reveals the heart's own thought each day. — Pope"
  },
  {
    num: 707, chapter: 71,
    tamil: "முகத்தின் முதுக்குறைந்தது உண்டோ உவப்பினும்\nகாயினும் தான்முந் துறும்.",
    transliteration: "Mukattiṉ mutukkuṟaintatu uṇṭō uvappiṉum\nKāyiṉum tāṉmun tuṟum.",
    english: "Is there anything wiser than the face? Whether it rejoice or grow angry, it shows its own state first.",
    tamilUrai: "முகத்தை விட அறிவில் முதிர்ந்தது வேறு என்ன இருக்கிறது? மகிழ்ச்சி வந்தாலும், கோபம் வந்தாலும், அது முதலில் வெளிப்படையாய் காட்டி விடுகிறது.",
    altTranslation: "What's wiser than the face? Ere joy or wrath be spent, It tells before the mouth can give its utterance vent. — Pope"
  },
  {
    num: 708, chapter: 71,
    tamil: "முகம்நோக்கி நிற்க அமையும் அகம்நோக்கி\nஉற்றது உணர்வார்ப் பெறின்.",
    transliteration: "Mukamnōkki niṟka amaiyum akamnōkki\nUṟṟatu uṇarvārp peṟiṉ.",
    english: "To stand before one whose mind reads ours through a mere glance is enough — no words are needed.",
    tamilUrai: "பார்வை வழியாய் உள்ளத்தில் உள்ளதை உணரும் ஆற்றல் உடையவர்கள் எதிரில் இருந்தால், முகத்தை அவர்களுக்குக் காட்டி நிற்பதே போதுமானது; வேறு எதுவும் சொல்ல வேண்டியதில்லை.",
    altTranslation: "Before such men as read within through outward face, 'Tis enough to stand — they know by their own grace. — Pope"
  },
  {
    num: 709, chapter: 71,
    tamil: "பகைமையும் கேண்மையும் கண்ணுரைக்கும் கண்ணின்\nவகைமை உணர்வார்ப் பெறின்.",
    transliteration: "Pakaimaiyum kēṇmaiyum kaṇṇuraikkum kaṇṇiṉ\nVakaimai uṇarvārp peṟiṉ.",
    english: "If one is skilled to read the eye, the eye itself declares enmity and friendship.",
    tamilUrai: "ஒருவரது கண்ணின் தன்மையைப் பார்த்து உணர்பவர் முன் நின்றால், பகைமை, நட்பு — ஆகிய இரு உணர்வுகளையும், கண்களே எடுத்துச் சொல்லிவிடும்.",
    altTranslation: "If one who reads the eye's own language stand near by, Hatred and friendship both the eye can clear descry. — Pope"
  },
  {
    num: 710, chapter: 71,
    tamil: "நுண்ணியம் என்பார் அளக்குங்கோல் காணுங்கால்\nகண்ணல்லது இல்லை பிற.",
    transliteration: "Nuṇṇiyam eṉpār aḷakkuṅkōl kāṇuṅkāl\nKaṇṇallatu illai piṟa.",
    english: "The measuring rod of those who call themselves subtle has no other staff than the eye.",
    tamilUrai: "\"நான் நுட்பமான அறிவினையுடையவன்\" என்று சொல்லிக்கொள்பவர்கள், மற்றவர்களின் கருத்தை அளவிடுவதற்குப் பயன்படுத்தும் கருவி — கண்ணே தவிர வேறு இல்லை.",
    altTranslation: "Those who claim subtle wit — their measuring rod is but The eye; no other yardstick doth their wit shut. — Pope"
  },

  // CHAPTER 72 — The Knowledge of the Council
  {
    num: 711, chapter: 72,
    tamil: "அவையறிநது ஆராய்ந்து சொல்லுக சொல்லின்\nதொகையறிந்த தூய்மை யவர்.",
    transliteration: "Avaiyaṟintu ārāyntu colluka colliṉ\nTokaiyaṟinta tūymai yavar.",
    english: "Let those pure in speech, who know the worth of words, speak only after examining the assembly.",
    tamilUrai: "சொற்களின் பல்வகை மதிப்பை அறிந்த தூய்மையான அறிஞர்கள், தாம் பேசவிருக்கும் அவையின் தன்மையை ஆராய்ந்து, பின்னரே பேச வேண்டும்.",
    altTranslation: "Who knows words' worth, the pure in speech, shall first Examine well the audience, then discourse. — Pope"
  },
  {
    num: 712, chapter: 72,
    tamil: "இடைதெரிந்து நன்குணர்ந்து சொல்லுக சொல்லின்\nநடைதெரிந்த நன்மை யவர்.",
    transliteration: "Iṭaiterintu naṉkuṇarntu colluka colliṉ\nNaṭaiterinta naṉmai yavar.",
    english: "Those who know the ways of words and speech should first discern the occasion and then clearly speak.",
    tamilUrai: "சொற்கள் பயன்படும் நடையை அறிந்த நல்லவர்கள், பேசுகின்ற சந்தர்ப்பத்தை உணர்ந்து, பேச வேண்டியவற்றை நன்கு சிந்தித்து, பின்னர் பேச வேண்டும்.",
    altTranslation: "Those who know the paths of speech shall choose the hour well, And knowing fully, with a clear voice tell. — Pope"
  },
  {
    num: 713, chapter: 72,
    tamil: "அவையறியார் சொல்லல்மேற் கொள்பவர் சொல்லின்\nவகையறியார் வல்லதூஉம் இல்.",
    transliteration: "Avaiyaṟiyār collalmēṟ koḻpavar colliṉ\nVakaiyaṟiyār vallatūum il.",
    english: "Those who speak without knowing their audience know neither the kinds of speech nor anything else.",
    tamilUrai: "அவையின் தன்மை அறியாமல் பேசுவதை மேற்கொள்பவர்கள், சொற்களின் வகைகளையும் அறிய மாட்டார்கள்; அவ்வாறே, பேசுதலின் திறனும் அவர்களிடம் இருக்காது.",
    altTranslation: "Who speaks without first knowing the audience's nature, Knows nothing of speech's kinds nor of its signature. — Pope"
  },
  {
    num: 714, chapter: 72,
    tamil: "ஒளியார்முன் ஒள்ளிய ராதல் வெளியார்முன்\nவான்சுதை வண்ணம் கொளல்.",
    transliteration: "Oḷiyārmuṉ oḷḷiya rātal veḷiyārmuṉ\nVāṉcutai vaṇṇam koḻal.",
    english: "Be brilliant before the brilliant; before the dull, wear the whiteness of plain lime.",
    tamilUrai: "அறிவொளி படைத்தோரின் முன்னால் அறிவு மிக்கவராய் விளங்க வேண்டும்; அதை அறியாமல் இருப்பவர்கள் முன், பெருமூச்சு சுண்ணாம்பின் வெண்மை போல — எளிமையான தெளிவோடு இருக்க வேண்டும்.",
    altTranslation: "'Mid brilliant souls, be bright; 'mid dull, of plainer hue — Put on the whiteness of plain lime to view. — Pope"
  },
  {
    num: 715, chapter: 72,
    tamil: "நன்றென்ற வற்றுள்ளும் நன்றே முதுவருள்\nமுந்து கிளவாச் செறிவு.",
    transliteration: "Naṉṟeṉṟa vaṟṟuḷḷum naṉṟē mutuvaruḷ\nMuntu kiḷavāc ceṟivu.",
    english: "Among all goods, this is best — the restraint that keeps a man from speaking first before his elders.",
    tamilUrai: "நன்மையான பண்புகள் எல்லாவற்றுள்ளும், பெரியோர்களின் முன்னிலையில் முன்னதாய்ப் பேசாமல் அடக்கமாய் இருக்கும் செறிவான நிலை சிறந்த நன்மையாகும்.",
    altTranslation: "Of goods the best, — that modesty which, 'mid the aged wise, Forbids thee speak before they speak, and hush their voice. — Pope"
  },
  {
    num: 716, chapter: 72,
    tamil: "ஆற்றின் நிலைதளர்ந்து அற்றே வியன்புலம்\nஏற்றுணர்வார் முன்னர் இழுக்கு.",
    transliteration: "Āṟṟiṉ nilaitaḷarntu aṟṟē viyaṉpulam\nĒṟṟuṇarvār muṉṉar iḻukku.",
    english: "A slip before men of wide learning is like slipping and falling from the path of virtue itself.",
    tamilUrai: "பரந்த கல்வியறிவை ஏற்ற உணர்வுடையவர்களின் முன்னிலையில் தவறியதாய்ப் பேசுதல், ஒருவன் நல்ல வழியில் நிற்கும் நிலையிலிருந்து சறுக்கி விழுவதற்கு ஒப்பானது.",
    altTranslation: "To slip before men of wide and varied learning's gaze, Is as to stumble from the path of virtue's ways. — Pope"
  },
  {
    num: 717, chapter: 72,
    tamil: "கற்றறிந்தார் கல்வி விளங்கும் கசடறச்\nசொல்தெரிதல் வல்லார் அகத்து.",
    transliteration: "Kaṟṟaṟintār kalvi viḷaṅkum kacaṭaṟac\nColteritalal vallār akattu.",
    english: "The learning of the wise shines brightest in the assembly of those who, without any flaw, can discern the exact sense of words.",
    tamilUrai: "கற்றறிந்தவர்களின் கல்வி, குற்றமின்றிச் சொற்களை உணரும் ஆற்றல் பெற்றவர்கள் நடுவில், ஒளி மிக்கதாய் விளங்கும்.",
    altTranslation: "The learning of the learned shines among those men Who flawless in the speech's sense can ken. — Pope"
  },
  {
    num: 718, chapter: 72,
    tamil: "உணர்வ துடையார்முன் சொல்லல் வளர்வதன்\nபாத்தியுள் நீர்சொரிந் தற்று.",
    transliteration: "Uṇarva tuṭaiyārmuṉ collal vaḷarvataṉ\nPāttiyuḷ nīrcorin taṟṟu.",
    english: "To speak before those who can understand is like pouring water at the root of a thriving plant.",
    tamilUrai: "உணர்கின்ற ஆற்றல் உள்ளவர்களின் முன், பொருளுள்ள சொற்களைப் பேசுதல், வளர்ந்து கொண்டிருக்கும் பயிரின் அடியில் நீர் ஊற்றுவதற்கு ஒப்பாகும்.",
    altTranslation: "Before those who understand to speak — is as to pour Water at roots of plant already growing more. — Pope"
  },
  {
    num: 719, chapter: 72,
    tamil: "புல்லவையுள் பொச்சாந்தும் சொல்லற்க நல்லவையுள்\nநன்குசலச் சொல்லு வார்.",
    transliteration: "Pullavaiyuḷ poccāntum collaṟka nallavaiyuḷ\nNaṉkucalac collu vār.",
    english: "Those who speak well before the worthy should not, even by mistake, speak well before the unworthy.",
    tamilUrai: "நல்ல அவையில் நன்றாக ஆற்றலுடன் பேசுகிறவர்கள், அறிவற்ற அவையில் மறந்துகூட நல்ல சொற்களைப் பேசக்கூடாது.",
    altTranslation: "Who in the noble's council speak with charm, must take Great care ne'er in the base's court that sweet speech make. — Pope"
  },
  {
    num: 720, chapter: 72,
    tamil: "அங்கணத்துள் உக்க அமிழ்தற்றால் தங்கணத்தார்\nஅல்லார்முன் கோட்டி கொளல்.",
    transliteration: "Aṅkaṇattuḷ ukka amiḻtaṟṟāl taṅkaṇattār\nAllārmuṉ kōṭṭi koḷal.",
    english: "To speak in the assembly of those who are not one's own kind is like nectar spilled upon the refuse-heap.",
    tamilUrai: "தமக்கு ஒத்த கூட்டத்தில் இல்லாதவர்களின் முன்னால் அறிவுரை வழங்கப் பேசுவது, அமிழ்தத்தை கழுநீர்க் குழியில் ஊற்றிச் சிதறவிடுவதற்கு ஒப்பாகும்.",
    altTranslation: "Speech in assembly of alien company is as Nectar poured on refuse-heap — such loss, alas! — Pope"
  },

  // CHAPTER 73 — Not Dreading the Council
  {
    num: 721, chapter: 73,
    tamil: "வகையறிந்து வல்லவை வாய்சோரார் சொல்லின்\nதொகையறிந்த தூய்மை யவர்.",
    transliteration: "Vakaiyaṟintu vallavai vāycōrār colliṉ\nTokaiyaṟinta tūymai yavar.",
    english: "Those of pure learning, who know the worth of words and the kinds of speech, will not falter before a capable assembly.",
    tamilUrai: "சொற்களின் மதிப்பை அறிந்த தூய்மையான அறிஞர்கள், அவையின் தன்மையை அறிந்து, வல்லவர் கூட்டத்தில் பேசும்போது வாய் தவறிப் பேசமாட்டார்கள்.",
    altTranslation: "Those pure of learning, who words' full worth divine, Before an able council's face shall ne'er decline. — Pope"
  },
  {
    num: 722, chapter: 73,
    tamil: "கற்றாருள் கற்றார் எனப்படுவர் கற்றார்முன்\nகற்ற செலச்சொல்லு வார்.",
    transliteration: "Kaṟṟāruḷ kaṟṟār eṉappaṭuvar kaṟṟārmuṉ\nKaṟṟa celaccollu vār.",
    english: "Of all the learned, those are called most learned who can plainly convey their learning before the learned.",
    tamilUrai: "தாம் கற்றதை, கற்றோர் முன்னிலையில் உள்ளம் பதியுமாறு தெளிவாய் எடுத்துச் சொல்பவரே, கற்றவர்களுக்குள்ளும் கற்றவர் எனப் போற்றப்படுவர்.",
    altTranslation: "Among the learned, most learned are proclaimed, Who clearly to the learned make their lore plain. — Pope"
  },
  {
    num: 723, chapter: 73,
    tamil: "பகையகத்துச் சாவார் எளியர் அரியர்\nஅவையகத்து அஞ்சா தவர்.",
    transliteration: "Pakaiyakattuc cāvār eḷiyar ariyar\navaiyakattu añcā tavar.",
    english: "Many can die bravely on the field of battle; few can stand unafraid in the council of the wise.",
    tamilUrai: "பகை போரில் உயிர் துறப்பவர்கள் பலர் இருப்பினும், சான்றோர் நிறைந்த அவையின் நடுவில் அஞ்சாமல் பேசுபவர்கள் மிகச் சிலரே.",
    altTranslation: "Many on battle-field can die with courage bright; Few in the council stand before the wise without a fright. — Pope"
  },
  {
    num: 724, chapter: 73,
    tamil: "கற்றார்முன் கற்ற செலச்சொல்லித் தாம்கற்ற\nமிக்காருள் மிக்க கொளல்.",
    transliteration: "Kaṟṟārmuṉ kaṟṟa celaccollit tāmkaṟṟa\nMikkāruḷ mikka koḻal.",
    english: "Speak clearly before the learned what you have learned; learn yet more from those who know more than you.",
    tamilUrai: "கற்றவர்கள் முன், தாம் கற்றவற்றை அவர்கள் நன்கு உணருமாறு பேச வேண்டும்; தம்மைக் காட்டிலும் அதிகமாய் கற்றிருக்கும் அறிஞர்களிடமிருந்து, அதிகமாய் கற்றுக் கொள்ள வேண்டும்.",
    altTranslation: "Before the learned clearly tell what thou hast learned; And learn more from those who higher lore have earned. — Pope"
  },
  {
    num: 725, chapter: 73,
    tamil: "ஆற்றின் அளவறிந்து கற்க அவையஞ்சா\nமாற்றங் கொடுத்தற் பொருட்டு.",
    transliteration: "Āṟṟiṉ aḷavaṟintu kaṟka avaiyañcā\nMāṟṟaṅ koṭuttaṟ poruṭṭu.",
    english: "Learn by rule and measure, in order to answer the assembly without fear.",
    tamilUrai: "அவையில் அஞ்சாமல் எதிர்மறுப்புக்கள் தரும்படி, முறைமையுடனும், எல்லை அறிந்தும் கற்றுக்கொள்ள வேண்டும்.",
    altTranslation: "Study with rule and measure, that thou mayst reply With fearless word to council's searching eye. — Pope"
  },
  {
    num: 726, chapter: 73,
    tamil: "வாளொடென் வன்கண்ணர் அல்லார்க்கு நூலொடென்\nநுண்ணவை அஞ்சு பவர்க்கு.",
    transliteration: "Vāḷoṭeṉ vaṉkaṇṇar allārkku nūloṭeṉ\nNuṇṇavai añcu pavarkku.",
    english: "Of what use is a sword to the faint-hearted? Of what use are books to those who fear the subtle council?",
    tamilUrai: "வாட் போருக்கு உரிய துணிவுடையவர் அல்லாதவருக்கு, வாள் என்ன பயன்? நுண்ணிய அறிவுடையவர் கூடியுள்ள அவைக்கு அஞ்சுபவர்க்கு, நூல்களில் தேர்ச்சி என்ன பயன்?",
    altTranslation: "Of what avail the sword to him of feeble kind? Of what avail is lore to him whom subtle courts affright? — Pope"
  },
  {
    num: 727, chapter: 73,
    tamil: "பகையகத்துப் பேடிகை ஒள்வாள் அவையகத்து\nஅஞ்சு மவன்கற்ற நூல்.",
    transliteration: "Pakaiyakattup pēṭikai oḷvāḷ avaiyakattu\nAñcu mavaṉkaṟṟa nūl.",
    english: "As a bright sword in the hand of a eunuch amid foes, so is the learning of one who fears the council.",
    tamilUrai: "பகைப் போரிடையே அலியின் கையில் கூர்மையான வாள் எப்படி பயனின்றி இருக்குமோ, அதேபோல, அவையில் அஞ்சுகிறவனின் கற்ற நூலறிவும் பயனற்றுப் போகும்.",
    altTranslation: "As bright sword in eunuch's hand 'mid foes afield, So is the learning of him who in council his hopes does yield. — Pope"
  },
  {
    num: 728, chapter: 73,
    tamil: "பல்லவை கற்றும் பயமிலரே நல்லவையுள்\nநன்கு செலச்சொல்லா தார்.",
    transliteration: "Pallavai kaṟṟum payamilarē nallavaiyuḷ\nNaṉku celaccollā tār.",
    english: "Those who cannot well deliver their matter before good assemblies are of no use, though they have learned much.",
    tamilUrai: "பல நூல்களைக் கற்றிருந்தாலும், நல்லோர் கூடியுள்ள அவையில் நன்றாகப் பேசித் தம்மைப் பரப்ப இயலாதவர்கள் பயனற்றவரே.",
    altTranslation: "Though much they've learned, they bring no gain, who cannot Before the good and wise speak clearly what they thought. — Pope"
  },
  {
    num: 729, chapter: 73,
    tamil: "கல்லா தவரின் கடையென்ப கற்றறிந்தும்\nநல்லா ரவையஞ்சு வார்.",
    transliteration: "Kallā tavariṉ kaṭaiyeṉpa kaṟṟaṟintum\nNallā ravaiyañcu vār.",
    english: "Those who, though learned, dread the assembly of the wise, are held to be lower than the unlearned.",
    tamilUrai: "கற்றறிந்திருந்தும், சான்றோர் நிறைந்த அவையில் பேச அஞ்சுகிறவர்கள், கற்காதவர்களை விடத் தாழ்ந்தவர்களே என்று கூறப்படுகிறது.",
    altTranslation: "Learned, yet fearing council of the noble-minded, Are deemed below the unlettered, by all reminded. — Pope"
  },
  {
    num: 730, chapter: 73,
    tamil: "உளரெனினும் இல்லாரொடு ஒப்பர் களன்அஞ்சிக்\nகற்ற செலச்சொல்லா தார்.",
    transliteration: "Uḷareṉiṉum illāroṭu oppar kaḷaṉañcik\nKaṟṟa celaccollā tār.",
    english: "Though they live, they are as the dead — those who, fearing the arena, cannot present their learning.",
    tamilUrai: "அவை என்னும் களத்திற்கு அஞ்சி, தாம் கற்றவற்றைத் தெரிவிக்க இயலாதவர்கள், இருப்பினும், இல்லாதவருக்கு ஒப்பே.",
    altTranslation: "Though they live, they are as dead, who fearing the arena's test, Cannot set their learning forth to be expressed. — Pope"
  },

  // CHAPTER 74 — The Land
  {
    num: 731, chapter: 74,
    tamil: "தள்ளா விளையுளும் தக்காரும் தாழ்விலாச்\nசெல்வரும் சேர்வது நாடு.",
    transliteration: "Taḷḷā viḷaiyuḷum takkārum tāḻvilāc\nCelvarum cērvatu nāṭu.",
    english: "That is a land where undying harvests, worthy men, and merchants of unfailing wealth come together.",
    tamilUrai: "தளராத பயிர் விளைச்சலும், தகுதியான நல்லோரும், நிலைத்த செல்வம் உடைய வணிகரும் சேர்ந்து வாழும் இடமே உண்மையான நாடாகும்.",
    altTranslation: "Where unfailing harvest, worthy men, and merchants of sure wealth Together dwell — that land hath nature's health. — Pope"
  },
  {
    num: 732, chapter: 74,
    tamil: "பெரும்பொருளால் பெட்டக்க தாகி அருங்கேட்டால்\nஆற்ற விளைவது நாடு.",
    transliteration: "Perumporuḷāl peṭṭakka tāki aruṅkēṭṭāl\nĀṟṟa viḷaivatu nāṭu.",
    english: "A true country is one desirable for its great wealth, yielding rich harvests and free from ruinous calamity.",
    tamilUrai: "பெரும் செல்வத்தால் விரும்பத் தக்கதாய், அரிய தீமை நெருங்காமல், நன்கு விளைச்சல் தருவதே உண்மையான நாடு.",
    altTranslation: "Desired for its great wealth, with harvests rich at bay, And from great calamities — such is a land I say. — Pope"
  },
  {
    num: 733, chapter: 74,
    tamil: "பொறைஒருங்கு மேல்வருங்கால் தாங்கி இறைவற்கு\nஇறையொருங்கு நேர்வது நாடு.",
    transliteration: "Poṟaioruṅku mēlvaruṅkāl tāṅki iṟaivaṟku\niṟaiyoruṅku nērvatu nāṭu.",
    english: "A true country bears its burdens together when they come, and pays its king the dues unitedly.",
    tamilUrai: "பாரம் எல்லாம் ஒன்றுசேரவருகையில் அதைத் தாங்கி, மன்னனுக்கு ஒருசேர வரி செலுத்தக்கூடிய நாடே உண்மையான நாடாகும்.",
    altTranslation: "That bears its burdens joined, when sudden pressures be, And pays its tribute to its king unitedly. — Pope"
  },
  {
    num: 734, chapter: 74,
    tamil: "உறுபசியும் ஓவாப் பிணியும் செறுபகையும்\nசேரா தியல்வது நாடு.",
    transliteration: "Uṟupaciyum ōvāp piṇiyum ceṟupakaiyum\nCērā tiyalvatu nāṭu.",
    english: "That country is truly a country where extreme hunger, incessant disease, and destroying enemies do not abide.",
    tamilUrai: "கடும் பசி, விடாத நோய், அழிக்கக் கூடிய பகை — ஆகிய இம்மூன்றும் நெருங்காமல் நடைபெறுவதே நாடெனப்படும்.",
    altTranslation: "Where famine, plague, and foes destroying come not near, Such is the land by Nature nurtured, without fear. — Pope"
  },
  {
    num: 735, chapter: 74,
    tamil: "பல்குழுவும் பாழ்செய்யும் உட்பகையும் வேந்தலைக்கும்\nகொல்குறும்பும் இல்லது நாடு.",
    transliteration: "Palkuḻuvum pāḻceyyum uṭpakaiyum vēntalaikkum\nKolkuṟumpum illatu nāṭu.",
    english: "A true land is one free from destructive factions, treacherous plots, and murderous bands that afflict the king.",
    tamilUrai: "வேறுபட்ட கூட்டங்களும், பாழ் செய்யும் உட்பகைகளும், மன்னனைத் தாக்கும் கொலைகார கலகத் துறுப்புகளும் இல்லாமல் இயங்குவதே நாடு.",
    altTranslation: "Free from factions, hidden treason, murderous band, That vex the king — that truly is a land. — Pope"
  },
  {
    num: 736, chapter: 74,
    tamil: "கேடறியாக் கெட்ட இடத்தும் வளம்குன்றா\nநாடென்ப நாட்டின் தலை.",
    transliteration: "Kēṭaṟiyāk keṭṭa iṭattum vaḷamkuṉṟā\nNāṭeṉpa nāṭṭiṉ talai.",
    english: "The foremost of lands is one that, never knowing ruin, loses none of its abundance even when misfortune comes.",
    tamilUrai: "கேட்டை அறியாததாய் இருந்து, கேடு வந்த நிலையிலும் தனது வளத்தை இழக்காமல் இருப்பதே, நாடுகளுக்குள் தலையாய நாடாகும்.",
    altTranslation: "The chief of lands ne'er tastes of ruin, and, when loss appears, Loses not the abundance that its life endears. — Pope"
  },
  {
    num: 737, chapter: 74,
    tamil: "இருபுனலும் வாய்ந்த மலையும் வருபுனலும்\nவல்லரணும் நாட்டிற்கு உறுப்பு.",
    transliteration: "Irupuṉalum vāynta malaiyum varupuṉalum\nVallaraṇum nāṭṭiṟku uṟuppu.",
    english: "Two kinds of water, well-watered mountains, flowing streams, and strong fortresses — these are the limbs of a country.",
    tamilUrai: "வற்றாத ஊற்று நீர், மழை நீர் என்ற இரு வகை நீரும், பொருத்தமான மலையும், தோன்றும் ஆறும், உறுதியான கோட்டை அரண்களும் ஒரு நாட்டின் உறுப்புகளாகும்.",
    altTranslation: "Two waters, mountain, flowing stream, and fort's protection — These are a country's limbs of sure perfection. — Pope"
  },
  {
    num: 738, chapter: 74,
    tamil: "பிணியின்மை செல்வம் விளைவின்பம் ஏமம்\nஅணியென்ப நாட்டிவ் வைந்து.",
    transliteration: "Piṇiyiṉmai celvam viḷaiviṉpam ēmam\naṇiyeṉpa nāṭṭiv vaintu.",
    english: "Freedom from disease, wealth, good produce, joy, and security — these five are the ornaments of a country.",
    tamilUrai: "நோயின்மை, செல்வம், நல்ல விளைச்சல், இன்பம், பாதுகாப்பு — ஆகிய இந்த ஐந்தும் ஒரு நாட்டிற்கு அணிகலன்களாம்.",
    altTranslation: "Health, wealth, good produce, joy, and safety — these five are The ornaments a true country should wear afar. — Pope"
  },
  {
    num: 739, chapter: 74,
    tamil: "நாடென்ப நாடா வளத்தன நாடல்ல\nநாட வளந்தரு நாடு.",
    transliteration: "Nāṭeṉpa nāṭā vaḷattaṉa nāṭalla\nNāṭa vaḷantaru nāṭu.",
    english: "That is a country which yields wealth without toil; that which only gives when sought is no true country.",
    tamilUrai: "தேடாமலே வளம் தருகின்றதே உண்மையான நாடு; தேடிச்சென்று உழைப்பினால் மட்டுமே வளம் தருவது உண்மை நாடாகாது.",
    altTranslation: "That's a land yields wealth without one's quest; that land is nought Where wealth comes only when 'tis sought. — Pope"
  },
  {
    num: 740, chapter: 74,
    tamil: "ஆங்கமை வெய்தியக் கண்ணும் பயமின்றே\nவேந்தமை வில்லாத நாடு.",
    transliteration: "Āṅkamai veytiyak kaṇṇum payamiṉṟē\nVēntamai villāta nāṭu.",
    english: "Even though a country be endowed with all other good things, it is of no use if its king be not congenial.",
    tamilUrai: "மேற்சொன்ன எல்லாச் சிறப்புகளும் ஒரு நாட்டிற்கு அமைந்திருந்தாலும், மன்னனுடன் அந்த நாடு ஒத்துப் போகவில்லையென்றால், அது பயனற்ற நாடாகிவிடும்.",
    altTranslation: "Though all good things be gathered in a land, 'tis vain If with its king's true nature it cannot remain. — Pope"
  },

  // CHAPTER 75 — The Fort
  {
    num: 741, chapter: 75,
    tamil: "ஆற்று பவர்க்கும் அரண்பொருள் அஞ்சித்தற்\nபோற்று பவர்க்கும் பொருள்.",
    transliteration: "Āṟṟu pavarkkum araṇporuḷ añcittaṟ\npōṟṟu pavarkkum poruḷ.",
    english: "A fort is wealth to those who attack, and wealth to those who, fearing, defend themselves.",
    tamilUrai: "தாக்க எழும்பியவர்க்கும், அச்சத்தால் தம்மைக் காத்துக் கொள்ள விரும்புவர்க்கும், கோட்டை அரணே முக்கியமான செல்வம் ஆகும்.",
    altTranslation: "A fortress is a wealth — to those assaulting bold, And to the fearful who defend their own stronghold. — Pope"
  },
  {
    num: 742, chapter: 75,
    tamil: "மணிநீரும் மண்ணும் மலையும் அணிநிழற்\nகாடும் உடையது அரண்.",
    transliteration: "Maṇinīrum maṇṇum malaiyum aṇiniḻaṟ\nKāṭum uṭaiyatu araṇ.",
    english: "A fort has clear-watered moats, plains, mountains, and the shady forest as its natural guards.",
    tamilUrai: "நீலமணி போன்ற தெளிந்த நீரையுடைய அகழியும், நிலமும், மலையும், அடர்த்தியான அழகிய காடும் — உடையதே கோட்டை அரண் எனப்படும்.",
    altTranslation: "A moat of jewel-clear water, plains, hills, and shady wood — Such is the fortress built with guards right good. — Pope"
  },
  {
    num: 743, chapter: 75,
    tamil: "உயர்வகலம் திண்மை அருமைஇந் நான்கின்\nஅமைவரண் என்றுரைக்கும் நூல்.",
    transliteration: "Uyarvakalam tiṇmai arumaiin nāṉkiṉ\naṁaivaraṇ eṉṟuraikkum nūl.",
    english: "Height, breadth, strength, and inaccessibility — these four make up a fort, so the learned say.",
    tamilUrai: "உயரம், அகலம், உறுதித்தன்மை, எளிதில் அடையமுடியாமை — ஆகிய இந்த நான்கு பண்புகளும் அமைந்ததே கோட்டை அரண் என்று நூல்கள் கூறும்.",
    altTranslation: "Height, breadth, firmness, and hard approach — these four Books declare a fortress truly make. — Pope"
  },
  {
    num: 744, chapter: 75,
    tamil: "சிறுகாப்பின் பேரிடத்த தாகி உறுபகை\nஊக்கம் அழிப்ப தரண்.",
    transliteration: "Ciṟukāppiṉ pēriṭatta tāki uṟupakai\nŪkkam aḻippa taraṇ.",
    english: "A fort is one which, little guarded but wide-encompassed, destroys the courage of assailants.",
    tamilUrai: "சிறிய காவல் போதுமான அளவில் பெரிய பரப்புடையதாய் இருந்து, வந்த பகைவர்களின் ஊக்கத்தைக் கெடுப்பதே கோட்டை அரணாம்.",
    altTranslation: "Small guard, but vast expanse, whose very sight Destroys the foeman's heart — that is a fort of might. — Pope"
  },
  {
    num: 745, chapter: 75,
    tamil: "கொளற்கரிதாய்க் கொண்டகூழ்த் தாகி அகத்தார்\nநிலைக்கெளிதாம் நீர தரண்.",
    transliteration: "Koḷaṟkaritāyk koṇṭakūḻt tāki akattār\nNilaikkeḷitām nīra taraṇ.",
    english: "A fort is hard to capture, well-provisioned, and easy for its defenders to hold their ground.",
    tamilUrai: "எதிரியால் எளிதில் வெல்லப்படாமல் இருந்து, உள் உணவு, தண்ணீர் போதுமான அளவில் சேர்த்து வைக்கப்பட்டிருந்து, உள்ளிருப்பவர்கள் நின்று காத்துக் கொள்வதற்கு எளிதாக இருப்பதே சிறந்த கோட்டை அரண்.",
    altTranslation: "Hard to take, well-provisioned store within, And easy stance for those who hold — such fort can win. — Pope"
  },
  {
    num: 746, chapter: 75,
    tamil: "எல்லாப் பொருளும் உடைத்தாய் இடத்துதவும்\nநல்லாள் உடையது அரண்.",
    transliteration: "Ellāp poruḷum uṭaittāy iṭattutavum\nNallāḷ uṭaiyatu araṇ.",
    english: "A true fort possesses all that is needful and is garrisoned by men who can hold it at need.",
    tamilUrai: "தேவையான எல்லாப் பொருட்களையும் உள்ளடக்கி, உரிய நேரத்தில் உதவக்கூடிய நல்ல வீரர்களைக் கொண்ட கோட்டையே உண்மையான அரணாகும்.",
    altTranslation: "With every need supplied, and valiant men withal, Ready to help in hour of need — that's fort's true call. — Pope"
  },
  {
    num: 747, chapter: 75,
    tamil: "முற்றியும் முற்றா தெறிந்தும் அறைப்படுத்தும்\nபற்றற் கரியது அரண்.",
    transliteration: "Muṟṟiyum muṟṟā teṟintum aṟaippaṭuttum\nPaṟṟaṟ kariyatu araṇ.",
    english: "A true fort resists a siege, an assault, and every kind of attack from within or without.",
    tamilUrai: "வளைத்துப் போரிட்டாலும், திடீர் தாக்கினாலும், உள்ளிருந்து பிளவு உண்டாக்கும் முயற்சிகளாலும் — எவ்வகையிலும் எளிதாய்ப் பற்ற முடியாதே உண்மையான அரண்.",
    altTranslation: "A fort resisting siege, assault, and every scheme, Is one that makes its capture but an empty dream. — Pope"
  },
  {
    num: 748, chapter: 75,
    tamil: "முற்றாற்றி முற்றி யவரையும் பற்றாற்றிப்\nபற்றியார் வெல்வது அரண்.",
    transliteration: "Muṟṟāṟṟi muṟṟi yavaraiyum paṟṟāṟṟip\nPaṟṟiyār velvatu araṇ.",
    english: "A true fort is one whose defenders, holding it fast, prevail even against besiegers who persist in a full siege.",
    tamilUrai: "பூரணமாக முற்றுகையிட்ட பகைவரையும், கோட்டையை உறுதியாய்ப் பற்றி நிற்கும் வீரர்களால் வெல்லுமாறு அமைந்ததே உண்மையான அரண்.",
    altTranslation: "A fort so held by men that sieges long endure, And overcome at last besiegers' force — that's fort for sure. — Pope"
  },
  {
    num: 749, chapter: 75,
    tamil: "முனைமுகத்து மாற்றலர் சாய வினைமுகத்து\nவீறெய்தி மாண்ட தரண்.",
    transliteration: "Muṉaimukattu māṟṟalar cāya viṉaimukattu\nVīṟeyti māṇṭa taraṇ.",
    english: "A true fort is one whose garrison, through skilful action, defeats the foes confronting them.",
    tamilUrai: "போர்முனையில் பகைவர்கள் அழியுமாறு, தக்க சாதுரியச் செயலால் சிறப்புற்று விளங்குவதே உண்மையான அரண்.",
    altTranslation: "Where those within, by skillful action's might, The foes in front with crushing fall now smite — 'tis fort's delight. — Pope"
  },
  {
    num: 750, chapter: 75,
    tamil: "எனைமாட்சித் தாகியக் கண்ணும் வினைமாட்சி\nஇல்லார்கண் இல்லது அரண்.",
    transliteration: "Eṉaimāṭcit tākiyak kaṇṇum viṉaimāṭci\nIllārkaṇ illatu araṇ.",
    english: "However grand a fort, it is of no use to those without the excellence of action.",
    tamilUrai: "எத்துணை பெருமை வாய்ந்த கோட்டையாக இருந்தாலும், செயலின் சிறப்பு இல்லாதவர்களிடம் அது பயனற்றதாகி விடும்.",
    altTranslation: "However grand the fort, to men of action-less hand, It has no value — not a shelter doth it stand. — Pope"
  },

  // CHAPTER 76 — Ways of Accumulating Wealth
  {
    num: 751, chapter: 76,
    tamil: "பொருளல் லவரைப் பொருளாகச் செய்யும்\nபொருளல்லது இல்லை பொருள்.",
    transliteration: "Poruḷal lavaraip poruḷākac ceyyum\nPoruḷallatu illai poruḷ.",
    english: "There is no power like wealth that can make those who are nothing into somebodies.",
    tamilUrai: "பொருள் இல்லாதவர்களாக இருந்தாலும், அவர்களைச் சிறந்தவராக்கும் ஆற்றல் உள்ள பொருளை விட மேலான மற்றொரு பொருள் இல்லை.",
    altTranslation: "No wealth can equal wealth, which hath the power Those worthless deemed to dignity to dower. — Pope"
  },
  {
    num: 752, chapter: 76,
    tamil: "இல்லாரை எல்லாரும் எள்ளுவர் செல்வரை\nஎல்லாரும் செய்வர் சிறப்பு.",
    transliteration: "Illārai ellārum eḷḷuvar celvarai\nEllārum ceyvar ciṟappu.",
    english: "All despise the poor; all honour the wealthy.",
    tamilUrai: "செல்வம் இல்லாதவர்களை எல்லோரும் இகழ்ந்து பேசுவர்; செல்வம் உடையவர்களை எல்லோரும் மதித்துச் சிறப்புச் செய்வர்.",
    altTranslation: "The poor are scorned by all; the rich by all revered — In wealth is honour found, and poverty feared. — Pope"
  },
  {
    num: 753, chapter: 76,
    tamil: "பொருளென்னும் பொய்யா விளக்கம் இருளறுக்கும்\nஎண்ணிய தேயத்துச் சென்று.",
    transliteration: "Poruḷeṉṉum poyyā viḷakkam iruḷaṟukkum\nEṇṇiya tēyattuc ceṉṟu.",
    english: "Wealth is a never-failing lamp; it disperses darkness wherever one may go.",
    tamilUrai: "பொருள் என்பது பொய் சொல்லாத ஒளி விளக்கு; நினைத்த நாட்டுக்கே சென்று, அங்கு உள்ள இருளையும் நீக்கும் ஆற்றலுடையது.",
    altTranslation: "The lamp of wealth unerring lights the way, Dispelling darkness in whatever land you stray. — Pope"
  },
  {
    num: 754, chapter: 76,
    tamil: "அறன்ஈனும் இன்பமும் ஈனும் திறனறிந்து\nதீதின்றி வந்த பொருள்.",
    transliteration: "Aṟaṉīṉum iṉpamum īṉum tiṟaṉaṟintu\nTītiṉṟi vanta poruḷ.",
    english: "Wealth that comes by right means and without evil brings both virtue and joy.",
    tamilUrai: "நேர்மையான வழியை அறிந்து, எந்தத் தீமையும் செய்யாமல் ஈட்டப்பட்ட பொருள், அறத்தையும், இன்பத்தையும் சேர்ந்தே தந்திடும்.",
    altTranslation: "Wealth earned by right and untainted hand at last Brings virtue and delight, both joined fast. — Pope"
  },
  {
    num: 755, chapter: 76,
    tamil: "அருளொடும் அன்பொடும் வாராப் பொருளாக்கம்\nபுல்லார் புரள விடல்.",
    transliteration: "Aruḷoṭum aṉpoṭum vārāp poruḷākkam\nPullār puraḷa viṭal.",
    english: "Let men forsake at once the wealth that comes without grace or love.",
    tamilUrai: "அருளோடும், அன்போடும் சேராத வகையில் வருகின்ற செல்வத்தை, நல்லோர் பற்றிக்கொள்ளாமல், அதுவாகவே புரண்டுபோகும்படி விட்டுவிட வேண்டும்.",
    altTranslation: "Wealth void of grace and love, let men of worth Discard at once, and let it roll to earth. — Pope"
  },
  {
    num: 756, chapter: 76,
    tamil: "உறுபொருளும் உல்கு பொருளும்தன் ஒன்னார்த்\nதெறுபொருளும் வேந்தன் பொருள்.",
    transliteration: "Uṟuporuḷum ulku poruḷumtaṉ oṉṉārt\nTeṟuporuḷum vēntaṉ poruḷ.",
    english: "Unclaimed property, customs duties, and wealth seized from defeated enemies are the king's wealth.",
    tamilUrai: "உரியவர் இல்லாமல் விடப்பட்ட பொருள், சுங்க வரியாக வரும் பொருள், தான் வென்ற பகைவர்களிடமிருந்து கைப்பற்றிய பொருள் — இவை எல்லாம் மன்னனின் பொருளாகும்.",
    altTranslation: "Property without a claimant, customs paid, and spoil From vanquished foes — these are the king's fair toil. — Pope"
  },
  {
    num: 757, chapter: 76,
    tamil: "அருளென்னும் அன்பீன் குழவி பொருளென்னும்\nசெல்வச் செவிலியால் உண்டு.",
    transliteration: "Aruḷeṉṉum aṉpīṉ kuḻavi poruḷeṉṉum\nCelvac cevilivāl uṇṭu.",
    english: "Grace, the child of love, thrives only with the nurse called wealth.",
    tamilUrai: "அன்பு பெற்ற குழவி போன்றதாய் இருக்கின்ற அருள், பொருள் என்னும் செல்வத்தை உடைய வளர்ப்புத் தாயைக் கொண்டே வாழ்கிறது.",
    altTranslation: "Grace, child of love, to thrive doth need a nurse — The wealth, whose care can rear without a curse. — Pope"
  },
  {
    num: 758, chapter: 76,
    tamil: "குன்றேறி யானைப்போர் கண்டற்றால் தன்கைத்தொன்று\nஉண்டாகச் செய்வான் வினை.",
    transliteration: "Kuṉṟēṟi yāṉaipōr kaṇṭaṟṟāl taṉkaittoṉṟu\nUṇṭākac ceyvāṉ viṉai.",
    english: "To act with wealth in hand is like watching an elephant fight from the safety of a hilltop.",
    tamilUrai: "தன் கையில் பொருள் இருந்து, பின் செயலை மேற்கொள்வது — மலையின் மீது ஏறி நின்று, யானைப் போரை பார்ப்பது போன்றது.",
    altTranslation: "To act with wealth already in thy hand, is still As safe as viewing elephant's fight from hill. — Pope"
  },
  {
    num: 759, chapter: 76,
    tamil: "செய்க பொருளைச் செறுநர் செருக்கறுக்கும்\nஎஃகதனிற் கூரிய தில்.",
    transliteration: "Ceyka poruḷaic ceṟunar cerukkaṟukkum\nEḵkataṉiṟ kūriya til.",
    english: "Acquire wealth; no weapon is sharper to cut away the pride of an enemy.",
    tamilUrai: "செல்வத்தை ஈட்டுக; பகைவர்களின் செருக்கை அறுத்து வீழ்த்தும் ஆயுதம், அதைவிடக் கூர்மையானது வேறு இல்லை.",
    altTranslation: "Make wealth; no weapon cuts the foeman's pride so keen, As wealth well-earned that cleaves his haughty mien. — Pope"
  },
  {
    num: 760, chapter: 76,
    tamil: "ஒண்பொருள் காழ்ப்ப இயற்றியார்க்கு எண்பொருள்\nஏனை இரண்டும் ஒருங்கு.",
    transliteration: "Oṇporuḷ kāḻppa iyaṟṟiyārkku eṇporuḷ\nĒṉai iraṇṭum oruṅku.",
    english: "Those who have amassed good wealth in abundance easily attain virtue and joy as well.",
    tamilUrai: "பகுத்தறிந்து சிறந்த பொருளைச் சேகரித்தவருக்கு, மற்ற அறம், இன்பம் என்ற இரண்டும் ஒரு சேரக் கிட்டுவது எளிதாகும்.",
    altTranslation: "Who hath amassed wealth well, shall find with ease The other twain — right, joy — both at his knees. — Pope"
  },

  // CHAPTER 77 — The Excellence of an Army
  {
    num: 761, chapter: 77,
    tamil: "உறுப்பமைந்து ஊறஞ்சா வெல்படை வேந்தன்\nவெறுக்கையுள் எல்லாம் தலை.",
    transliteration: "Uṟuppamaintu ūṟañcā velpaṭai vēntaṉ\nVeṟukkaiyuḷ ellām talai.",
    english: "An army complete in its parts and fearless of wounds is foremost of all treasures of a king.",
    tamilUrai: "படையின் உறுப்புகள் எல்லாம் நிறைந்ததாய், காயங்களுக்கு அஞ்சாமல் வெல்லும் வல்லமையுடைய போர்ப்படை, மன்னனின் செல்வங்கள் எல்லாவற்றுள்ளும் தலையாய செல்வமாகும்.",
    altTranslation: "An army with each limb complete, that fears no wound, Of all king's wealth is found the chief renowned. — Pope"
  },
  {
    num: 762, chapter: 77,
    tamil: "உலைவிடத்து ஊறஞ்சா வன்கண் தொலைவிடத்துத்\nதொல்படைக் கல்லால் அரிது.",
    transliteration: "Ulaiviṭattu ūṟañcā vaṉkaṇ tolaiviṭattut\ntolpaṭaik kallāl aritu.",
    english: "The firm courage that fears no wound even in reverses is found only in a long-tried army.",
    tamilUrai: "புறமுதுகு காட்டி சோர்கின்ற நிலையிலும், காயங்களுக்கு அஞ்சாமல் போர் புரியும் துணிவு, பாரம்பரியமாய் இருந்து வரும் பழம்பெரும் படைக்கே உரிய பண்பாகும்.",
    altTranslation: "That steadfast courage, fearless of wounds in retreat's day, Is found in tested armies of an ancient sway. — Pope"
  },
  {
    num: 763, chapter: 77,
    tamil: "ஒலித்தக்கால் என்னாம் உவரி எலிப்பகை\nநாகம் உயிர்ப்பக் கெடும்.",
    transliteration: "Olittakkāl eṉṉām uvari elippakai\nNākam uyirppak keṭum.",
    english: "Even if rats roared like the sea, what of it? At the mere breath of a cobra they would die.",
    tamilUrai: "கடலைப் போல உலகம் அதிரும்படி எலிகள் ஆரவாரம் செய்தாலும் என்ன பயன்? பாம்பு ஒரு மூச்சு விட்ட மட்டில் அத்தனை எலிகளும் அழிந்து போகும்.",
    altTranslation: "Though rats should roar like ocean's surging wave, The serpent's breath alone their noise shall save. — Pope"
  },
  {
    num: 764, chapter: 77,
    tamil: "அழிவின்று அறைபோகா தாகி வழிவந்த\nவன்க ணதுவே படை.",
    transliteration: "Aḻiviṉṟu aṟaipōkā tāki vaḻivanta\nVaṉka ṇatuvē paṭai.",
    english: "A true army is one that, long descended, has never known defeat or disloyalty and stands firm in courage.",
    tamilUrai: "போர்களில் தோல்வி அடையாமலும், பிளவுபட்டு பகைவரோடு சென்று சேராமலும், பாரம்பரியமாய் வந்த கம்பீரமான துணிவுடையதே உண்மையான போர்ப்படை.",
    altTranslation: "Unvanquished, undeflecting, of ancient line that stands Firm-visaged — that's true army at king's commands. — Pope"
  },
  {
    num: 765, chapter: 77,
    tamil: "கூற்றுடன்று மேல்வரினும் கூடி எதிர்நிற்கும்\nஆற்ற லதுவே படை.",
    transliteration: "Kūṟṟuṭaṉṟu mēlvariṉum kūṭi etirniṟkum\nĀṟṟa latuvē paṭai.",
    english: "A true army is one that, though death itself should come raging, stands united in face of it.",
    tamilUrai: "கூற்றுவனே (எமனே) சினந்து மேல் எழுந்து தாக்க வந்தாலும், சேர்ந்து ஒற்றுமையாய் எதிர்த்து நிற்கும் ஆற்றல் உடையதே உண்மையான போர்ப்படை.",
    altTranslation: "Though Death himself in wrath should come to fight, United strong it stands — that army brave and bright. — Pope"
  },
  {
    num: 766, chapter: 77,
    tamil: "மறமானம் மாண்ட வழிச்செலவு தேற்றம்\nஎனநான்கே ஏமம் படைக்கு.",
    transliteration: "Maṟamāṉam māṇṭa vaḻiccelavu tēṟṟam\neṉanāṉkē ēmam paṭaikku.",
    english: "Valour, honour, the tradition of a noble line, and trustworthiness — these four are the safeguards of an army.",
    tamilUrai: "வீரம், தன்மானம், உயர்ந்த முன்னோர் வழியில் வந்த மரபு, தலைவர்களிடத்தே உள்ள நம்பிக்கை — ஆகிய இந்த நான்கும் ஒரு படைக்குக் காவலாய் அமையும் தூண்கள்.",
    altTranslation: "Valour, honour, noble ancestry, and trust — four these, The safeguards of an army, stand as bulwark's ease. — Pope"
  },
  {
    num: 767, chapter: 77,
    tamil: "தார்தாங்கிச் செல்வது தானை தலைவந்த\nபோர்தாங்கும் தன்மை அறிந்து.",
    transliteration: "Tārtāṅkic celvatu tāṉai talaivanta\nPōrtāṅkum taṉmai aṟintu.",
    english: "A true army is one that knowing how to bear the brunt of battle, advances firmly to meet the foe.",
    tamilUrai: "போரை நேருக்கு நேர் நின்று தாங்கிக் கொள்ளும் தன்மையை அறிந்து, பகைவரின் முன் தரைப்படையை எதிர்த்து முன்செல்வதே சிறந்த படை.",
    altTranslation: "That army's true, which bears the foeman's brunt in face, Knowing war's full demand, advances firm in place. — Pope"
  },
  {
    num: 768, chapter: 77,
    tamil: "அடல்தகையும் ஆற்றலும் இல்லெனினும் தானை\nபடைத்தகையால் பாடு பெறும்.",
    transliteration: "Aṭaltakaiyum āṟṟalum illeṉiṉum tāṉai\nPaṭaittakaiyāl pāṭu peṟum.",
    english: "Even without outstanding attack or strength, an army gains glory through its fine discipline and formation.",
    tamilUrai: "வெல்கின்ற தன்மையும் போராற்றலும் இல்லையென்றாலும், படை நன்றாக ஒழுங்குபடுத்தப்பட்டிருந்தால், அதன் அணி வகுப்பின் சிறப்பினால் மரியாதையை பெறும்.",
    altTranslation: "Though might and conquering power may not be there, Yet by formation's art an army honour shares. — Pope"
  },
  {
    num: 769, chapter: 77,
    tamil: "சிறுமையும் செல்லாத் துனியும் வறுமையும்\nஇல்லாயின் வெல்லும் படை.",
    transliteration: "Ciṟumaiyum cellāt tuṉiyum vaṟumaiyum\nIllāyiṉ vellum paṭai.",
    english: "An army wins when it is free from smallness of number, incurable dissension, and poverty.",
    tamilUrai: "எண்ணிக்கை குறைபாடு, தீராத பகைமைப் போக்கு, ஏழ்மை — ஆகிய இந்த மூன்றும் இல்லாமல் இருப்பதே, வெற்றி பெறும் படையாகும்.",
    altTranslation: "Free from small numbers, lasting strife, and want, An army shall the battlefield's victory grant. — Pope"
  },
  {
    num: 770, chapter: 77,
    tamil: "நிலைமக்கள் சால உடைத்தெனினும் தானை\nதலைமக்கள் இல்வழி இல்.",
    transliteration: "Nilaimakkaḷ cāla uṭaittaṉiṉum tāṉai\nTalaimakkaḷ ilvaḻi il.",
    english: "Though it abound in courageous men, an army is nothing without capable leaders.",
    tamilUrai: "எவ்வளவு வீரமுள்ள தெய்வ ஆட்களை உடையதாக இருந்தாலும், சிறந்த தலைவர்கள் இல்லாத இடத்தில் அந்தப் படை பயனற்றதாய் ஆகிவிடும்.",
    altTranslation: "Though brave men crowd its ranks, an army is as nought Without the leaders by whom all its fight is wrought. — Pope"
  },

  // CHAPTER 78 — Military Spirit
  {
    num: 771, chapter: 78,
    tamil: "என்னைமுன் நில்லன்மின் தெவ்விர் பலரென்னை\nமுன்நின்று கல்நின் றவர்.",
    transliteration: "Eṉṉaimuṉ nillaṉmiṉ tevvir palareṉṉai\nMuṉniṉṟu kalniṉ ṟavar.",
    english: "Enemies! stand not before my lord; many are they who have stood before him and are now standing only as memorial stones.",
    tamilUrai: "\"பகைவர்களே, என் தலைவனின் முன் நிற்காதீர்கள்; அவருக்கு எதிராக நின்று, தோற்று, வீர நடுகற்களாய் நிற்பவர்கள் பலராய் உள்ளனர்\" — என்று வீரர்கள் செருக்குடன் கூறுவர்.",
    altTranslation: "'Foes! stand not before my chief! Before him many stood, And now as stones commemorate their fall in vanquished blood.' — Pope"
  },
  {
    num: 772, chapter: 78,
    tamil: "கான முயலெய்த அம்பினில் யானை\nபிழைத்தவேல் ஏந்தல் இனிது.",
    transliteration: "Kāṉa muyaleyta ampiṉil yāṉai\nPiḻaittavēl ēntal iṉitu.",
    english: "Sweeter is the spear that missed an elephant than the arrow that hit a hare in the forest.",
    tamilUrai: "காட்டில் முயலைத் துளைத்த அம்பை விட, யானைமீது பாய்ந்து தவறிய வேலை ஏந்தி நிற்பதே வீரர்க்கு இனிய பெருமையாகும்.",
    altTranslation: "Sweeter than arrow that struck the hare within the wood, Is the spear that missed the elephant's massive bulk, upright it stood. — Pope"
  },
  {
    num: 773, chapter: 78,
    tamil: "பேராண்மை என்ப தறுகண்ஒன் றுற்றக்கால்\nஊராண்மை மற்றதன் எஃகு.",
    transliteration: "Pērāṇmai eṉpa taṟukaṇoṉ ṟuṟṟakkāl\nŪrāṇmai maṟṟataṉ eḵku.",
    english: "Great valour is the fierce courage to meet a foe; nobler still is the kindness to help him in trouble.",
    tamilUrai: "கொடிய பகையாளியை எதிர்த்துச் சண்டையிடும் கொடுமை உடையதே மேலான ஆண்மை எனப்படும்; அதற்கு அணி வகையான உபகாரமான நற்பண்பு, அந்த ஆண்மைக்கு கூர்மை தருவதாகும்.",
    altTranslation: "Great valour is the fierce courage against fierce foe; But noble aid to stricken foes — the gem of its own glow. — Pope"
  },
  {
    num: 774, chapter: 78,
    tamil: "கைவேல் களிற்றொடு போக்கி வருபவன்\nமெய்வேல் பறியா நகும்.",
    transliteration: "Kaivēl kaḷiṟṟoṭu pōkki varupavaṉ\nMeyvēl paṟiyā nakum.",
    english: "The warrior who has hurled his hand's spear into an elephant and returns smiles and plucks out the spear now pierced in his own breast.",
    tamilUrai: "கையிலுள்ள வேலை யானை மீது எறிந்து, இன்னொரு எதிரியைத் தேடி வருகிற வீரன், தன் உடலில் தைத்திருக்கும் வேலை உணர்ந்து, புன்முறுவலுடன் அதைப் பிடுங்கி எடுப்பான்.",
    altTranslation: "His spear once hurled against the tusker's hide, he comes And plucks, with laughter, other spear that in him comes. — Pope"
  },
  {
    num: 775, chapter: 78,
    tamil: "விழித்தகண் வேல்கொண டெறிய அழித்திமைப்பின்\nஒட்டன்றோ வன்க ணவர்க்கு.",
    transliteration: "Viḻittakaṇ vēlkoṇ ṭeṟiya aḻittimaippiṉ\nOṭṭaṉṟō vaṉka ṇavarkku.",
    english: "If, when a spear is hurled, a warrior even blinks his eye, it is as good as defeat for one who prides himself on firmness.",
    tamilUrai: "விழித்துப் பார்க்கின்ற கண்களை நோக்கி வேலை எறிந்தபோது, அதைக் கண்டு அழிந்து இமை கொட்டினால், அது வலியதுன்பம் உடையவர்களுக்கு தோல்விக்கு ஒப்பாகும்.",
    altTranslation: "If as the spear comes in, the eye do even wink, For firm-of-heart 'tis like defeat — so men of valour think. — Pope"
  },
  {
    num: 776, chapter: 78,
    tamil: "விழுப்புண் படாதநாள் எல்லாம் வழுக்கினுள்\nவைக்கும்தன் நாளை எடுத்து.",
    transliteration: "Viḻuppuṇ paṭātanāḷ ellām vaḻukkiṉuḷ\nVaikkumtaṉ nāḷai eṭuttu.",
    english: "The warrior counts as wasted every day in which he has not received an honourable wound.",
    tamilUrai: "தன்னுடலில் மேன்மையான போர்க் காயம் ஏற்படாத நாள்களை, தனது வாழ்வில் வீணாய் கழிந்த நாள்களின் வரிசையில் வீரன் சேர்த்துக் கொள்வான்.",
    altTranslation: "Each day that brings no honoured wound, the warrior counts As day of his wasted life, unworthy in accounts. — Pope"
  },
  {
    num: 777, chapter: 78,
    tamil: "சுழலும் இசைவேண்டி வேண்டா உயிரார்\nகழல்யாப்புக் காரிகை நீர்த்து.",
    transliteration: "Cuḻalum icaivēṇṭi vēṇṭā uyirār\nKaḻalyāppuk kārikai nīrttu.",
    english: "The glory of the anklet worn by the warrior who seeks widespread fame and reckons not his life is beautiful beyond all others.",
    tamilUrai: "உலகெங்கும் பரந்த புகழை விரும்பி, உயிரைப் பொருட்படுத்தாமல் போர் புரியும் வீரர்கள் காலில் அணிந்த வீரக் கழல் அணியும் சிறப்பான அழகு உடையது.",
    altTranslation: "The anklet of the warrior, eager for wide fame, Who scorns his life — 'tis beauty's worthy aim. — Pope"
  },
  {
    num: 778, chapter: 78,
    tamil: "உறின்உயிர் அஞ்சா மறவர் இறைவன்\nசெறினும் சீர்குன்றல் இலர்.",
    transliteration: "Uṟiṉuyir añcā maṟavar iṟaivaṉ\nCeṟiṉum cīrkuṉṟal ilar.",
    english: "Brave warriors, fearless of life in battle, lose no spirit even though angered by their king.",
    tamilUrai: "போரில் உயிரிழக்க நேர்ந்தாலும் அஞ்சாத வீரர்கள், தங்கள் மன்னன் சீற்றம் காட்டினாலும், அதற்காக தம் வீரச் சிறப்பைக் குன்றுவதில்லை.",
    altTranslation: "The warriors, careless of life in battle's hour, If e'en their king be wroth, lose not their glorious power. — Pope"
  },
  {
    num: 779, chapter: 78,
    tamil: "இழைத்த திகவாமைச் சாவாரை யாரே\nபிழைத்த தொறுக்கிற் பவர்.",
    transliteration: "Iḻaitta tikavāmaic cāvārai yārē\nPiḻaitta toṟukkiṟ pavar.",
    english: "Who will dare rebuke those who, to keep their plighted word unbroken, have died for it?",
    tamilUrai: "செய்வதாக உறுதி கூறிய வீர உறுதியிலிருந்து மாறாமல், அதற்காக உயிர் துறந்தவர்களை, மீறியவர் என்று குற்றம் காண்பவர் யார்?",
    altTranslation: "Who dares to blame those slain, that never broke their word, Who fell for plighted vow, by noble zeal stirred? — Pope"
  },
  {
    num: 780, chapter: 78,
    tamil: "புரந்தார்கண் நீர்மல்கச் சாகிற்பின் சாக்காடு\nஇரந்துகோள் தக்கது உடைத்து.",
    transliteration: "Purantārkaṇ nīrmalkac cākiṟpiṉ cākkāṭu\niRantukōḷ takkatu uṭaittu.",
    english: "A death that makes tears flow from the eyes of the king who cherished him is worth begging for.",
    tamilUrai: "தன்னைக் காத்து வளர்த்த மன்னனின் கண்களில் நீர் நிரம்பும்படி போரில் வீர மரணம் அடைவது என்பது, யாசித்தாவது பெற்றுக்கொள்ள தக்கதான பெருமையான மரணம்.",
    altTranslation: "If death brings tears to eyes of him who cherished thee, Such death, 'tis worthy e'en to beg of destiny. — Pope"
  },

  // CHAPTER 79 — Friendship
  {
    num: 781, chapter: 79,
    tamil: "செயற்கரிய யாவுள நட்பின் அதுபோல்\nவினைக்கரிய யாவுள காப்பு.",
    transliteration: "Ceyaṟkariya yāvuḷa naṭpiṉ atupōl\nViṉaikkariya yāvuḷa kāppu.",
    english: "What is there so difficult to acquire as friendship? What is there that offers a more difficult defence against evil?",
    tamilUrai: "நட்பைப் போல உருவாக்குவதற்கு அரியன வேறு என்ன உள்ளன? அதுபோல, தீய செயல்களிலிருந்து காப்பதற்கு அரியன வேறு என்ன உள்ளன?",
    altTranslation: "What so hard for men to gain as friendship true? What so sure defence 'gainst all that foes can do? — Pope"
  },
  {
    num: 782, chapter: 79,
    tamil: "நிறைநீர நீரவர் கேண்மை பிறைமதிப்\nபின்னீர பேதையார் நட்பு.",
    transliteration: "Niṟainīra nīravar kēṇmai piṟaimatip\nPiṉṉīra pētaiyār naṭpu.",
    english: "Friendship with the wise waxes like the crescent moon; the friendship of fools wanes as the full moon.",
    tamilUrai: "அறிவுடையோரின் நட்பு, பிறைநிலவைப் போல நாளுக்கு நாள் வளர்ந்து பெருகும்; அறிவிலிகளின் நட்போ, நிறைமதி போல நாளுக்குநாள் தேய்ந்து சிறுத்துவிடும்.",
    altTranslation: "The friendship of the wise waxes like the crescent moon; That of the foolish wanes, as full moon's light gone soon. — Pope"
  },
  {
    num: 783, chapter: 79,
    tamil: "நவில்தொறும் நூல்நயம் போலும் பயில்தொறும்\nபண்புடை யாளர் தொடர்பு.",
    transliteration: "Naviltoṟum nūlnayam pōlum payiltoṟum\nPaṇpuṭai yāḷar toṭarpu.",
    english: "Like the delight of a book which grows with each reading, so does friendship with the good deepen with familiarity.",
    tamilUrai: "ஒரு நூலை படிக்கப் படிக்க அதன் இனிமை வளருவதைப் போல, பண்புடைய நல்லவர்களுடன் பழகப் பழக, அந்த நட்பின் சுவையும் வளர்ந்து கொண்டே இருக்கும்.",
    altTranslation: "As joy of books increases with each reading more, So deepens friendship with the good each day before. — Pope"
  },
  {
    num: 784, chapter: 79,
    tamil: "நகுதற் பொருட்டன்று நட்டல் மிகுதிக்கண்\nமேற்செனறு இடித்தற் பொருட்டு.",
    transliteration: "Nakutaṟ poruṭṭaṉṟu naṭṭal mikutikkaṇ\nMēṟceṉṟu iṭittaṟ poruṭṭu.",
    english: "Friendship is formed not merely for laughter but to rebuke in time when one overruns the bounds.",
    tamilUrai: "மகிழ்ச்சியாய்ச் சிரிப்பதற்கு மட்டும் நட்பு உருவாகவில்லை; நண்பன் எல்லை மீறிச் செல்லும்போது, எதிர் நின்று கண்டித்து அறிவுறுத்தவும் அது அவசியம்.",
    altTranslation: "Not just for laughter's sake is friendship made, but when Excess appears, to rebuke with faithful ken. — Pope"
  },
  {
    num: 785, chapter: 79,
    tamil: "புணர்ச்சி பழகுதல் வேண்டா உணர்ச்சிதான்\nநட்பாங் கிழமை தரும்.",
    transliteration: "Puṇarcci paḻakutal vēṇṭā uṇarccitāṉ\nNaṭpāṅ kiḻamai tarum.",
    english: "Friendship does not demand constant meetings or familiarity; mutual understanding alone creates true kinship.",
    tamilUrai: "நட்பு தோன்றுவதற்கு அடிக்கடி சந்தித்து பழக வேண்டும் என்பதில்லை; இரு உள்ளங்களின் ஒத்த உணர்வே உண்மையான நட்பு உரிமையை உண்டாக்கும்.",
    altTranslation: "Not frequent meeting, not familiar intercourse are needs — The kindred soul alone true friendship's bond succeeds. — Pope"
  },
  {
    num: 786, chapter: 79,
    tamil: "முகநக நட்பது நட்பன்று நெஞ்சத்து\nஅகநக நட்பது நட்பு.",
    transliteration: "Mukanaka naṭpatu naṭpaṉṟu neñcattu\nakanaka naṭpatu naṭpu.",
    english: "Friendship with only a smiling face is no friendship; true friendship smiles from within the heart.",
    tamilUrai: "முகம் மலர்ச்சியோடு நடிப்பது மட்டுமே நட்பு ஆகாது; உள்ளமும் மலரும் வகையில் மனத்திலிருந்து தோன்றுவதே உண்மையான நட்பு.",
    altTranslation: "The smile on face is not true friendship's sign; The heart's own smile — that friendship doth define. — Pope"
  },
  {
    num: 787, chapter: 79,
    tamil: "அழிவி னவைநீக்கி ஆறுய்த்து அழிவின்கண்\nஅல்லல் உழப்பதாம் நட்பு.",
    transliteration: "Aḻivi ṉavainīkki āṟuyttu aḻiviṉkaṇ\nAllal uḻappatām naṭpu.",
    english: "Friendship turns away from ruin, sets one on the right path, and shares the pain when ruin comes.",
    tamilUrai: "நட்பு என்பது, அழிவுக்கு உரிய செயல்களைத் தடுத்து, நல்வழியில் நடத்திச் சென்று, இடர் வந்தபோது அந்தத் துயரத்தையும் பகிர்ந்து கொள்வதாகும்.",
    altTranslation: "True friendship turns from ruin, guides in virtue's course, And when misfortune comes, shares the grieving source. — Pope"
  },
  {
    num: 788, chapter: 79,
    tamil: "உடுக்கை இழந்தவன் கைபோல ஆங்கே\nஇடுக்கண் களைவதாம் நட்பு.",
    transliteration: "Uṭukkai iḻantavaṉ kaipōla āṅkē\niṭukkaṇ kaḷaivatām naṭpu.",
    english: "Friendship is as the hand that quickly restores the fallen garment of one who has lost hold of it.",
    tamilUrai: "உடை நழுவிவிட்ட ஒருவனது கை, உடனே அதை சரிபடுத்துவதைப் போல, விரைந்து துன்பத்தை நீக்குவதே நட்பின் பண்பு.",
    altTranslation: "As hand that springs at once to raise the garment slipped, So friendship lifts the trouble ere it has us gripped. — Pope"
  },
  {
    num: 789, chapter: 79,
    tamil: "நட்பிற்கு வீற்றிருக்கை யாதெனின் கொட்பின்றி\nஒல்லும்வாய் ஊன்றும் நிலை.",
    transliteration: "Naṭpiṟku vīṟṟirukkai yāteṉiṉ koṭpiṉṟi\nollumvāy ūṉṟum nilai.",
    english: "What is the seat of honour for friendship? The state of firm support at every possible turn.",
    tamilUrai: "நட்புக்கு பெருமை தரும் இருப்பிடம் என்ன? எந்த நேரத்திலும் நிலை மாறாமல், இயன்ற எல்லா வழியிலும் உறுதியாக துணை நிற்கும் நிலையே அது.",
    altTranslation: "What throne has friendship? 'Tis the firm and steadfast stay That aids the friend in every need, without delay. — Pope"
  },
  {
    num: 790, chapter: 79,
    tamil: "இனையர் இவரெமக்கு இன்னம்யாம் என்று\nபுனையினும் புல்லென்னும் நட்பு.",
    transliteration: "Iṉaiyar ivaremakku iṉṉamyām eṉṟu\nPuṉaiyiṉum pulleṉṉum naṭpu.",
    english: "If you describe a friend saying 'He is this much to me, and I am that much to him,' friendship loses its worth.",
    tamilUrai: "\"இவர் இவ்வளவு பெரியவர் எனக்கு, நான் இவ்வளவு நெருக்கமானவன் இவருக்கு\" என்று அளந்து பாராட்டிப் பேசினாலே நட்பு சிறுமையடைந்துவிடும்.",
    altTranslation: "To measure friendship out in words and say, 'This much is he to me, this much I am' — its bloom fades away. — Pope"
  },

  // CHAPTER 80 — Investigation in Forming Friendships
  {
    num: 791, chapter: 80,
    tamil: "நாடாது நட்டலிற் கேடில்லை நட்டபின்\nவீடில்லை நட்பாள் பவர்க்கு.",
    transliteration: "Nāṭātu naṭṭaliṟ kēṭillai naṭṭapiṉ\nVīṭillai naṭpāḷ pavarkku.",
    english: "There is no greater ruin than making friends without investigation; for once made, no escape is possible.",
    tamilUrai: "ஒருவரை நட்பாக்கிக்கொள்ள முன், அவரை ஆராயாமல் நட்புக் கொள்வதைக் காட்டிலும் பெரிய கேடு வேறெதுவும் இல்லை; நட்பு ஏற்பட்ட பின், அதிலிருந்து தப்பவும் வழியில்லை.",
    altTranslation: "No ruin like to friendship formed without due test; Once formed, there's no escape — 'tis bondage at the best. — Pope"
  },
  {
    num: 792, chapter: 80,
    tamil: "ஆய்ந்தாய்ந்து கொள்ளாதான் கேண்மை கடைமுறை\nதான்சாம் துயரம் தரும்.",
    transliteration: "Āyntāyntu koḷḷātāṉ kēṇmai kaṭaimuṟai\nTāṉcām tuyaram tarum.",
    english: "Friendship formed without repeated scrutiny will in the end bring sorrow unto death.",
    tamilUrai: "மீண்டும் மீண்டும் ஆராய்ந்து கொள்ளாமல் கொண்ட நட்பு, இறுதியில் தான் மரணம் அடையும் அளவுக்குத் துன்பத்தைக் கொடுக்கும்.",
    altTranslation: "The friendship not by repeated trial weighed, Brings grief unto death, as doom is made. — Pope"
  },
  {
    num: 793, chapter: 80,
    tamil: "குணமும் குடிமையும் குற்றமும் குன்றா\nஇனனும் அறிந்தியாக்க நட்பு.",
    transliteration: "Kuṇamum kuṭimaiyum kuṟṟamum kuṉṟā\niṉaṉum aṟintiyākka naṭpu.",
    english: "Before forming friendship, examine the character, birth, faults, and quality of one's kindred.",
    tamilUrai: "ஒருவரோடு நட்புக் கொள்ள முன், அவரது குணம், குடிப்பிறப்பு, குற்றங்கள், மற்றும் அவர் சேர்ந்திருக்கும் உறவினர் — ஆகியவற்றை நன்கு ஆராய்ந்து பின்னரே நட்பு செய்தல் வேண்டும்.",
    altTranslation: "His character, his birth, his faults, and kindred's worth, Examine well before thou make his friendship birth. — Pope"
  },
  {
    num: 794, chapter: 80,
    tamil: "குடிப்பிறந்து தன்கண் பழிநாணு வானைக்\nகொடுத்தும் கொளல்வேண்டும் நட்பு.",
    transliteration: "Kuṭippiṟantu taṉkaṇ paḻināṇu vāṉaik\nKoṭuttum koḷalvēṇṭum naṭpu.",
    english: "The friendship of one who is nobly born and shrinks from blame is to be won even by giving something in return.",
    tamilUrai: "நற்குடியில் பிறந்து, தனக்குப் பழி நேருவதற்கு நாணுகின்ற உயர்ந்த பண்பாளனின் நட்பை, தேவைப்பட்டால் ஏதேனும் பொருள் வழங்கியாவது பெற்றுக் கொள்ள வேண்டும்.",
    altTranslation: "Of noble birth, who shrinks from shame — his friendship gain, Even by giving somewhat in return for such a reign. — Pope"
  },
  {
    num: 795, chapter: 80,
    tamil: "அழச்சொல்லி அல்லது இடித்து வழக்கறிய\nவல்லார்நட்பு ஆய்ந்து கொளல்.",
    transliteration: "Aḻaccolli allatu iṭittu vaḻakkaṟiya\nvallārnaṭpu āyntu koḷal.",
    english: "Seek, after examination, the friendship of those who can make you weep and scold you, and who know the way of the world.",
    tamilUrai: "அழும்படி சொல்லி, கடுமையாய்க் கண்டித்து, நமக்கு நல்வழிச் செலுத்த வல்லவர்களின் நட்பை, நன்கு ஆராய்ந்து தேர்ந்தெடுத்து ஏற்றுக் கொள்ளுக.",
    altTranslation: "Examined, choose the friendship of the man who chides And makes thee weep, yet to the right way guides. — Pope"
  },
  {
    num: 796, chapter: 80,
    tamil: "கேட்டினும் உண்டோர் உறுதி கிளைஞரை\nநீட்டி அளப்பதோர் கோல்.",
    transliteration: "Kēṭṭiṉum uṇṭōr uṟuti kiḷaiñarai\nNīṭṭi aḷappatōr kōl.",
    english: "Even in misfortune there is this good — it is the measuring rod that measures the worth of friends.",
    tamilUrai: "இடர் வந்த காலத்திலும் ஒரு பயன் உண்டு; அது, நம்முடன் எவ்வாறு இருக்கின்றனர் என்பதை நீட்டிக்காட்டி அளந்து காட்டும் நண்பர்களை மதிப்பிடும் அளவுகோலாய் இருக்கும்.",
    altTranslation: "E'en in misfortune's hour a gain doth lie — 'Tis the measuring rod to test friends' fidelity. — Pope"
  },
  {
    num: 797, chapter: 80,
    tamil: "ஊதியம் என்பது ஒருவற்குப் பேதையார்\nகேண்மை ஒரீஇ விடல்.",
    transliteration: "Ūtiyam eṉpatu oruvaṟkup pētaiyār\nKēṇmai orīi viṭal.",
    english: "The greatest gain a man can have is to renounce the company of fools.",
    tamilUrai: "ஒருவனுக்கு கிடைக்கும் பெரும் ஆதாயம் என்னவென்றால், அறிவற்ற மூடர்களின் நட்பை முற்றிலுமாய் விட்டுவிடுதலே ஆகும்.",
    altTranslation: "A man's true gain, supreme, is to abjure and part From friendship's bond with those of foolish heart. — Pope"
  },
  {
    num: 798, chapter: 80,
    tamil: "உள்ளற்க உள்ளம் சிறுகுவ கொள்ளற்க\nஅல்லற்கண் ஆற்றறுப்பார் நட்பு.",
    transliteration: "Uḷḷaṟka uḷḷam ciṟukuva koḷḷaṟka\nallaṟkaṇ āṟṟaṟuppār naṭpu.",
    english: "Do not entertain what lessens the mind; do not form friendship with those who forsake in trouble.",
    tamilUrai: "உள்ளத்தைச் சிறியதாக்கும் எண்ணங்களையே கொள்ளாதே; துன்பம் வரும்போது கைவிட்டு விடுபவர்களின் நட்பையும் ஏற்காதே.",
    altTranslation: "Think not the thoughts that shrink the soul; Nor form friendship with those who desert in dole. — Pope"
  },
  {
    num: 799, chapter: 80,
    tamil: "கெடுங்காலைக் கைவிடுவார் கேண்மை அடுங்காலை\nஉள்ளினும் உள்ளம் சுடும்.",
    transliteration: "Keṭuṅkālaik kaiviṭuvār kēṇmai aṭuṅkālai\nUḷḷiṉum uḷḷam cuṭum.",
    english: "Even the thought of friends who forsook in time of trouble will scorch the heart at one's death.",
    tamilUrai: "வறுமையான துன்ப காலத்தில் கை விட்டு நீங்கிய நண்பர்களின் நட்பை, நாம் மரண கால வேதனையில் நினைத்துப் பார்த்தாலும், அந்த நினைவு மனத்தை எரிக்கும்.",
    altTranslation: "Even thought at death of friends who fled in trouble's day Burns the heart, and scorches, to one's dying way. — Pope"
  },
  {
    num: 800, chapter: 80,
    tamil: "மருவுக மாசற்றார் கேண்மைஒன் றீத்தும்\nஒருவுக ஒப்பிலார் நட்பு.",
    transliteration: "Maruvuka mācaṟṟār kēṇmaioṉ ṟīttum\noruvuka oppilār naṭpu.",
    english: "Embrace the friendship of the spotless; abandon the unworthy, even by giving something in exchange.",
    tamilUrai: "குற்றமற்றவர்களின் நட்பைப் பற்றிக் கொள்ளுக; தகுதி இல்லாத பொருத்தமற்றவர்களின் நட்பை, ஏதாவது கொடுத்தாயினும் விட்டுவிடுக.",
    altTranslation: "Embrace the friendship of the pure; abjure the rest, E'en at some cost, make exit from them blest. — Pope"
  },

  // CHAPTER 81 — Familiarity
  {
    num: 801, chapter: 81,
    tamil: "பழைமை எனப்படுவ தியாதெனின் யாதும்\nகிழமையைக் கீழ்ந்திடாத நட்பு.",
    transliteration: "Paḻaimai eṉappaṭuva tiyāteṉiṉ yātum\nKiḻamaiyaik kīḻntiṭāta naṭpu.",
    english: "What is the meaning of old friendship? It is friendship that allows any familiar privilege without objection.",
    tamilUrai: "பழைமை என்று எது சொல்லப்படுகிறது? பழக்கத்தின் காரணமாக நண்பர் எதைக் கொண்டாலும், எதைச் செய்தாலும் மறுக்காத இயல்புடைய நட்பே அதுவாகும்.",
    altTranslation: "What is old friendship? 'Tis the bond that takes No umbrage at the freedom friend now makes. — Pope"
  },
  {
    num: 802, chapter: 81,
    tamil: "நட்பிற் குறுப்புக் கெழுதகைமை மற்றதற்கு\nஉப்பாதல் சான்றோர் கடன்.",
    transliteration: "Naṭpiṟ kuṟuppuk keḻutakaimai maṟṟataṟku\nUppātal cāṉṟōr kaṭaṉ.",
    english: "Taking loving liberties is the limb of friendship; to welcome such liberties is the duty of the noble.",
    tamilUrai: "உரிமையுள்ள நெருக்கமாய் எடுத்துக் கொள்ளும் உரிமையே நட்பின் உறுப்பாகும்; அத்தகைய உரிமைகளுக்கு இணக்கமாய் ஏற்றுக்கொள்வதே சான்றோர்க்கு உரிய கடமையாகும்.",
    altTranslation: "Loving liberty's the limb of friendship true; To suit thyself to it, thy duty ever view. — Pope"
  },
  {
    num: 803, chapter: 81,
    tamil: "பழகிய நட்பெவன் செய்யும் கெழுதகைமை\nசெய்தாங்கு அமையாக் கடை.",
    transliteration: "Paḻakiya naṭpevaṉ ceyyum keḻutakaimai\nCeytāṅku amaiyāk kaṭai.",
    english: "Of what use is old friendship if one does not accept the liberties taken by the friend?",
    tamilUrai: "பல காலம் பழகிய நட்பு என்ன பயனை தரும், நண்பர்கள் உரிமை எடுத்துக் கொள்ளும் போது அதை ஏற்றுக் கொள்ளாவிட்டால்?",
    altTranslation: "What use the friendship aged and long, if in thy mood Thou bear'st not with the freedom friend's heart would? — Pope"
  },
  {
    num: 804, chapter: 81,
    tamil: "விழைதகையான் வேண்டி இருப்பர் கெழுதகையாற்\nகேளாது நட்டார் செயின்.",
    transliteration: "Viḻaitakaiyāṉ vēṇṭi iruppar keḻutakaiyāṟ\nKēḷātu naṭṭār ceyiṉ.",
    english: "True friends gladly accept what other friends have done without asking, for such is the privilege of friendship.",
    tamilUrai: "நண்பர்கள், தம் உரிமையின் அடிப்படையில் நம்மைக் கேட்காமலேயே ஏதேனும் செய்துவிட்டால், அதைப் பாராட்டும் தன்மையுடையவர்களாய், பெருமையோடு ஏற்றுக் கொள்வர்.",
    altTranslation: "Unasked, when friends a matter boldly undertake, Others, accepting, deem themselves with joy to partake. — Pope"
  },
  {
    num: 805, chapter: 81,
    tamil: "பேதைமை ஒன்றோ பெருங்கிழமை என்றுணர்க\nநோதக்க நட்டார் செயின்.",
    transliteration: "Pētaimai oṉṟō peruṅkiḻamai eṉṟuṇarka\nNōtakka naṭṭār ceyiṉ.",
    english: "When friends do what grieves us, it should be set down either to folly or to the very familiarity of friendship.",
    tamilUrai: "நண்பர்கள் நமக்கு வருத்தம் தருவனவற்றைச் செய்யும்போது, அது அவர்களின் அறியாமையால் அல்லது நட்பின் பெரும் உரிமையால் ஏற்படுகிறது என்று புரிந்து கொள்ள வேண்டும்.",
    altTranslation: "When friends do what gives pain, think either folly Or friendship's privilege — and leave behind thy melancholy. — Pope"
  },
  {
    num: 806, chapter: 81,
    tamil: "எல்லைக்கண் நின்றார் துறவார் தொலைவிடத்தும்\nதொல்லைக்கண் நின்றார் தொடர்பு.",
    transliteration: "Ellaikkaṇ niṉṟār tuṟavār tolaiviṭattum\nTollaikkaṇ niṉṟār toṭarpu.",
    english: "Steadfast friends do not forsake the bond of long-established ties even in times of loss and ruin.",
    tamilUrai: "நெறியின் எல்லையில் நின்ற பண்புள்ள நண்பர்கள், பழைய தொடர்புடையவர்களின் நட்பை, அழிவு காலத்திலும் கைவிடமாட்டார்கள்.",
    altTranslation: "Who stand the bounds of honour, will not, in ruin's day, The friendship of old comrades cast away. — Pope"
  },
  {
    num: 807, chapter: 81,
    tamil: "அழிவந்த செய்யினும் அன்பறார் அன்பின்\nவழிவந்த கேண்மை யவர்.",
    transliteration: "Aḻivanta ceyyiṉum aṉpaṟār aṉpiṉ\nVaḻivanta kēṇmai yavar.",
    english: "Friends come through love remain loving even when friends do that which would cause ruin.",
    tamilUrai: "அன்பின் வழியாய் உருவான நட்பை உடையவர்கள், நண்பர்கள் அழிவு தரும் செயல்களைச் செய்தாலும், தங்கள் அன்பை விடமாட்டார்கள்.",
    altTranslation: "Though friends should work one ruin, love-forged friendship's chain Will never by its lovers broken remain. — Pope"
  },
  {
    num: 808, chapter: 81,
    tamil: "கேளிழுக்கம் கேளாக் கெழுதகைமை வல்லார்க்கு\nநாளிழுக்கம் நட்டார் செயின்.",
    transliteration: "Kēḷiḻukkam kēḷāk keḻutakaimai vallārkku\nNāḷiḻukkam naṭṭār ceyiṉ.",
    english: "For those skilled in the rights of friendship, a day is a festival on which their friends err.",
    tamilUrai: "நண்பர்கள் தம் மேல் ஏதேனும் குற்றம் கூறினால் அதைக் காது கொடுத்துக் கேளாதவர்களும், நட்புரிமை மீது பிடிப்பு உடையவர்களுமாய் உள்ளவர்களுக்கு, நண்பர்கள் தவறு செய்த நாள், திருவிழா போன்று மகிழ்ச்சி தரும் நாளாகும்.",
    altTranslation: "To those who hold the rights of friendship's bond held dear, A friend's own fault becomes a joyful day to cheer. — Pope"
  },
  {
    num: 809, chapter: 81,
    tamil: "கெடாஅ வழிவந்த கேண்மையார் கேண்மை\nவிடாஅர் விழையும் உலகு.",
    transliteration: "Keṭāa vaḻivanta kēṇmaiyār kēṇmai\nviṭāar viḻaiyum ulaku.",
    english: "The friendship of those who do not forsake ancient ties which have never failed is loved by all the world.",
    tamilUrai: "குறை படாத பழம் உறவின் வழியாய் வந்த நட்பை எப்போதும் விட்டுவிடாத நண்பர்களின் நட்பை, உலகமே விரும்பிப் போற்றும்.",
    altTranslation: "Those who cling fast to friendship never failing, true, Are those the world with love and honour still will view. — Pope"
  },
  {
    num: 810, chapter: 81,
    tamil: "விழையார் விழையப் படுப பழையார்கண்\nபண்பின் தலைப்பிரியா தார்.",
    transliteration: "Viḻaiyār viḻaiyap paṭupa paḻaiyārkaṇ\nPaṇpiṉ talaippiriyā tār.",
    english: "Even strangers will love those who never let slip their good nature toward their old friends.",
    tamilUrai: "பழைய நண்பர்களிடத்தில் உயர்ந்த பண்புகளை ஒருபோதும் விட்டுவிடாதவர்களை, அயலார்களும் விரும்பிப் பாராட்டுவர்.",
    altTranslation: "Even strangers love the man who never from his friend Of old removes the grace of nature to the end. — Pope"
  },

  // CHAPTER 82 — Evil Friendship
  {
    num: 811, chapter: 82,
    tamil: "பருகுவார் போலினும் பண்பிலார் கேண்மை\nபெருகலிற் குன்றல் இனிது.",
    transliteration: "Parukuvār pōliṉum paṇpilār kēṇmai\nPerukaliṟ kuṉṟal iṉitu.",
    english: "Though they seem to drink you up with love, friendship with unworthy men is better waning than waxing.",
    tamilUrai: "தங்களைப் பற்றியபடி அன்பை உடையவரைப் போல நடித்தாலும், பண்பில்லாதவர்களின் நட்பு வளர்வதைவிட குறைந்து செல்வதே இனிமையானது.",
    altTranslation: "Though they drink thee with seeming love, the ill-bred's tie Is sweeter in decay than in its rising high. — Pope"
  },
  {
    num: 812, chapter: 82,
    tamil: "உறினட்டு அறின்ஒரூஉம் ஒப்பிலார் கேண்மை\nபெறினும் இழப்பினும் என்.",
    transliteration: "Uṟiṉaṭṭu aṟiṉorūum oppilār kēṇmai\nPeṟiṉum iḻappiṉum eṉ.",
    english: "What matters it whether we win or lose the friendship of those who love when they gain, and leave when they do not?",
    tamilUrai: "ஆதாயம் கிடைக்கும்போது நட்பாய் இருந்து, அது இல்லாதபோது நீங்கிவிடும் பொருத்தமற்றவர்களின் நட்பு, நமக்குக் கிடைத்தாலும், இழந்தாலும், என்ன மாறுதல்?",
    altTranslation: "Friendship that clings while gain is, parts when gain is o'er — What matter? To have or lose it moves us never more. — Pope"
  },
  {
    num: 813, chapter: 82,
    tamil: "உறுவது சீர்தூக்கும் நட்பும் பெறுவது\nகொள்வாருங் கள்வரும் நேர்.",
    transliteration: "Uṟuvatu cīrtūkkum naṭpum peṟuvatu\nKoḷvāruṅ kaḷvarum nēr.",
    english: "Those whose friendship depends on calculating gains stand on the same level as thieves and base women.",
    tamilUrai: "தமக்குக் கிடைக்கும் ஆதாயத்தையே எடைபோட்டுக் கணக்கிடும் நண்பர்கள், பொருளைப் பெற்றுப் பயன்படுத்தும் பேராசைக்காரர், திருடர் போன்றவரின் நிலையில் உள்ளவர்களே.",
    altTranslation: "Friends who but weigh their gain, 'twixt harlots, thieves, and such, Stand on the same low level — with them 'twere best have no touch. — Pope"
  },
  {
    num: 814, chapter: 82,
    tamil: "அமரகத்து ஆற்றறுக்கும் கல்லாமா அன்னார்\nதமரின் தனிமை தலை.",
    transliteration: "Amarakattu āṟṟaṟukkum kallāmā aṉṉār\ntamariṉ taṉimai talai.",
    english: "Better to be alone than in the company of friends who are like untrained horses that throw their rider in battle.",
    tamilUrai: "போர் களத்தில் சவாரி செய்பவரைப் போக்கு செய்யும் பழக்கப்படாத குதிரைகளைப் போன்ற நண்பர்களை விட, தனியாய் இருத்தலே மேலானது.",
    altTranslation: "Better alone than with those friends — untrained steeds they, Who leave thee on the battlefield to die by prey. — Pope"
  },
  {
    num: 815, chapter: 82,
    tamil: "செய்தேமம் சாராச் சிறியவர் புன்கேண்மை\nஎய்தலின் எய்தாமை நன்று.",
    transliteration: "Ceytēmam cārāc ciṟiyavar puṉkēṇmai\nEytaliṉ eytāmai naṉṟu.",
    english: "It is better not to gain than to gain the poor friendship of base men who give no shelter when sought.",
    tamilUrai: "நாம் தேடியுதவிய போதும் பாதுகாப்பு தராத சிறுமையுடையவர்களின் தாழ்ந்த நட்பு நமக்குக் கிடைப்பதைவிட, கிடைக்காமல் போவதே மேலானது.",
    altTranslation: "Better not gain than gain the friendship base that yields No shelter — when sought, its bounty still withholds. — Pope"
  },
  {
    num: 816, chapter: 82,
    tamil: "பேதை பெருங்கெழீஇ நட்பின் அறிவுடையார்\nஏதின்மை கோடி உறும்.",
    transliteration: "Pētai peruṅkeḻīi naṭpiṉ aṟivuṭaiyār\nĒtiṉmai kōṭi uṟum.",
    english: "The estrangement of the wise is ten million times better than the close friendship of fools.",
    tamilUrai: "அறிவிலியின் மிகுந்த நெருக்கமான நட்பைக் காட்டிலும், அறிவுடையோரின் தூரநிலை (அயலாய்ச் சென்றுள்ள தன்மை) கோடி மடங்கு சிறப்புடையது.",
    altTranslation: "The wise man's coolness, from us far removed a mile, Beats ten million times the fool's most dear-held guile. — Pope"
  },
  {
    num: 817, chapter: 82,
    tamil: "நகைவகைய ராகிய நட்பின் பகைவரால்\nபத்தடுத்த கோடி உறும்.",
    transliteration: "Nakaivakaiya rākiya naṭpiṉ pakaivarāl\nPattaṭutta kōṭi uṟum.",
    english: "Enmity from enemies is ten thousand crore times better than friendship of those who laugh at you.",
    tamilUrai: "நம்மைப் பார்த்து சிரிப்பவர்களின் நட்பைக் காட்டிலும், பகைவர்களிடமிருந்து கிடைக்கும் பகைமை பத்து கோடி மடங்கு சிறந்தது.",
    altTranslation: "A foeman's open enmity is ten billion-fold More good than friends who mock thee, as of old. — Pope"
  },
  {
    num: 818, chapter: 82,
    tamil: "ஒல்லும் கருமம் உடற்று பவர்கேண்மை\nசொல்லாடார் சோர விடல்.",
    transliteration: "Ollum karumam uṭaṟṟu pavarkēṇmai\nCollāṭār cōra viṭal.",
    english: "Gradually drop, without speech, the friendship of those who spoil deeds they could have helped to do.",
    tamilUrai: "எளிதாய்ச் செய்ய இயலும் செயல்களையும் கெடுத்துப் பாழாக்கும் இயல்புள்ள நண்பர்களின் தொடர்பை, அவர்களுக்கு விளக்கிக் கூறாமலே, மெதுவாய்த் துண்டித்து விட வேண்டும்.",
    altTranslation: "Those who spoil deeds they might have aided well, Drop silently from friendship's steady shell. — Pope"
  },
  {
    num: 819, chapter: 82,
    tamil: "கனவினும் இன்னாது மன்னோ வினைவேறு\nசொல்வேறு பட்டார் தொடர்பு.",
    transliteration: "Kaṉaviṉum iṉṉātu maṉṉō viṉaivēṟu\nColvēṟu paṭṭār toṭarpu.",
    english: "Painful even in dream is the friendship of those whose actions differ from their words.",
    tamilUrai: "சொல் ஒன்றாய்ச் செயல் வேறாய் — இரண்டும் முரண்பட்டவர்களின் நட்பு, கனவில் வரும்போது கூட துன்பம் தரும்.",
    altTranslation: "Even in dream 'tis painful when their bonds befall, Whose words and deeds at odds, like discordant call. — Pope"
  },
  {
    num: 820, chapter: 82,
    tamil: "எனைத்தும் குறுகுதல் ஓம்பல் மனைக்கெழீஇ\nமன்றில் பழிப்பார் தொடர்பு.",
    transliteration: "Eṉaittum kuṟukutal ōmpal maṉaikkeḻīi\nMaṉṟil paḻippār toṭarpu.",
    english: "Avoid any closeness with those who are intimate at home but reproach you in public.",
    tamilUrai: "வீட்டில் இனிமையாய் பழகி, வெளியே சபையில் நின்று இகழ்ந்து பேசுபவர்களின் நட்பில், சிறிதளவும் நெருக்கமாய் இருப்பது தவிர்க்கப்பட வேண்டும்.",
    altTranslation: "Avoid all closeness with those who seem one's own at home, But in the public place with scorn besmear thy name. — Pope"
  },

  // CHAPTER 83 — Unreal Friendship
  {
    num: 821, chapter: 83,
    tamil: "சீரிடம் காணின் எறிதற்குப் பட்டடை\nநேரா நிரந்தவர் நட்பு.",
    transliteration: "Cīriṭam kāṇiṉ eṟitaṟkup paṭṭaṭai\nNērā nirantavar naṭpu.",
    english: "The friendship of those who agree outwardly but not in heart is like an anvil on which they will strike when they find an opening.",
    tamilUrai: "உள்ளத்தால் ஒத்திசையாமல், வெளியே பொருத்தமாக நடிப்பவர்களின் நட்பு, சந்தர்ப்பம் கிடைக்கும்போது நம்மை அடிக்க ஆயத்தமாய் இருக்கும் கோல் போன்றதாகும்.",
    altTranslation: "Those of reserved heart, with outward seeming tie, Are anvils waiting for the blow when time draws nigh. — Pope"
  },
  {
    num: 822, chapter: 83,
    tamil: "இனம்போன்று இனமல்லார் கேண்மை மகளிர்\nமனம்போல வேறு படும்.",
    transliteration: "Iṉampōṉṟu iṉamallār kēṇmai makaḷir\nMaṉampōla vēṟu paṭum.",
    english: "The friendship of those who are not our kindred, though they seem to be, changes like the inconstant heart of wanton women.",
    tamilUrai: "நமக்கு உரியவர் போல் காட்சி தந்து, உண்மையில் உரியவர் இல்லாதவர்களின் நட்பு, விலைமாதரின் மனம் போல வேறுபடும் இயல்பினது.",
    altTranslation: "Friends who seem kin, but are not kin, in mood Will shift, as wanton women's hearts are wrought. — Pope"
  },
  {
    num: 823, chapter: 83,
    tamil: "பலநல்ல கற்றக் கடைத்து மனநல்லர்\nஆகுதல் மாணார்க்கு அரிது.",
    transliteration: "Palanalla kaṟṟak kaṭaittum maṉanallar\nĀkutal māṇārkku aritu.",
    english: "Though they have learned many good things, those of hostile mind can hardly become friendly at heart.",
    tamilUrai: "பல நல்ல நூல்களைக் கற்றிருந்தாலும், எதிரி மனநிலை உடையவர்கள் மனதால் உண்மையான நண்பர்களாய் ஆவது அரிதானது.",
    altTranslation: "Though they have learned each point of noble art, Hostile in mind, they cannot be friends of heart. — Pope"
  },
  {
    num: 824, chapter: 83,
    tamil: "முகத்தின் இனிய நகாஅ அகத்தின்னா\nவஞ்சரை அஞ்சப் படும்.",
    transliteration: "Mukattiṉ iṉiya nakāa akattiṉṉā\nVañcarai añcap paṭum.",
    english: "Dread those deceivers who smile sweetly outwardly but are bitter within.",
    tamilUrai: "முகத்தில் இனிமையாய் மகிழ்வோடு நகை தெரிந்தாலும், உள்ளத்தில் தீமை கொண்டிருக்கிற வஞ்சர்களை, அஞ்சித் தவிர்க்க வேண்டும்.",
    altTranslation: "Dread thou those traitors who their sweet smile bestow, While inward hatred's hidden fires do glow. — Pope"
  },
  {
    num: 825, chapter: 83,
    tamil: "மனத்தின் அமையாதவரை எனைத்தொன்றும்\nசொல்லினால் தேறற்பாற்று அன்று.",
    transliteration: "Maṉattiṉ amaiyātavarai eṉaittoṉṟum\nColliṉāl tēṟaṟpāṟṟu aṉṟu.",
    english: "Never trust, by any word whatsoever, those who are not united with us in mind.",
    tamilUrai: "எவ்விதத்திலும் நம்முடன் ஒத்த மனநிலை பெறாதவர்களை, அவர்கள் கூறும் எதனாலும் நம்பி ஏற்பது தகாது.",
    altTranslation: "Never trust, through any word, the man whose heart Is not with thine in unity a part. — Pope"
  },
  {
    num: 826, chapter: 83,
    tamil: "நட்டார்போல் நல்லவை சொல்லினும் ஒட்டார்சொல்\nஒல்லை உணரப் படும்.",
    transliteration: "Naṭṭārpōl nallavai colliṉum oṭṭārcol\nOllai uṇarap paṭum.",
    english: "Though foes speak well like friends, their words will soon be seen for what they are.",
    tamilUrai: "நண்பர்கள் போல நல்ல சொற்களை கூறினாலும், பகைவரின் சொற்கள் உண்மையிலேயே பகைமை கொண்டிருப்பது விரைவில் தெரிந்துவிடும்.",
    altTranslation: "Though foes speak fair, as friends, their words at last Betray themselves, as shadows in sun are cast. — Pope"
  },
  {
    num: 827, chapter: 83,
    tamil: "சொல்வணக்கம் ஒன்னார்கண் கொள்ளற்க வில்வணக்கம்\nதீங்கு குறித்தமை யான்.",
    transliteration: "Colvaṇakkam oṉṉārkaṇ koḷḷaṟka vilvaṇakkam\nTīṅku kuṟittamai yāṉ.",
    english: "Take no heart from humility of speech in foes; the humility of a bent bow is meant for harm.",
    tamilUrai: "பகைவர்களிடம் பணிவான சொற்களை நம்ப வேண்டாம்; வில்லை வளைத்து நிற்பதன் குறிக்கோள் தீமை செய்வதே.",
    altTranslation: "Trust not the humble speech of foes who play the part — The bending bow doth aim its fateful dart. — Pope"
  },
  {
    num: 828, chapter: 83,
    tamil: "தொழுதகை யுள்ளும் படையொடுங்கும் ஒன்னார்\nஅழுதகண் ணீரும் அனைத்து.",
    transliteration: "Toḻutakai yuḷḷum paṭaiyoṭuṅkum oṉṉār\naḻutakaṇ ṇīrum aṉaittu.",
    english: "A weapon lies concealed even in the folded hands of a foe; so too are his tears of the same kind.",
    tamilUrai: "பகைவர் கூப்பிய கைக்குள்ளும் ஆயுதம் மறைந்திருக்கும்; அதுபோல, அவர்கள் சிந்தும் கண்ணீரும் வஞ்சக எண்ணமுடையதே ஆகும்.",
    altTranslation: "Within the folded hand of foes a weapon lies; Their very tears but veil their treacherous enterprise. — Pope"
  },
  {
    num: 829, chapter: 83,
    tamil: "மிகச்செய்து தம்மெள்ளு வாரை நகச்செய்து\nநட்பினுள் சாப்புல்லற் பாற்று.",
    transliteration: "Mikacceytu tammeḷḷu vārai nakacceytu\nNaṭpiṉuḷ cāppullaṟ pāṟṟu.",
    english: "Rejoice outwardly with those who flatter but inwardly despise us; but let friendship with them die within.",
    tamilUrai: "வெளியே நெருக்கமாய் நடித்து, உள்ளத்தில் இகழ்ச்சி கொள்ளும் கூட்டத்தினரை, நாமும் மேம்போக்காய் சிரித்துப் பேசி மகிழவிட்டு, உள்ளே அந்த நட்பை வளரவிடாமல் அழித்து விட வேண்டும்.",
    altTranslation: "Outward with them smile — but in thy heart let die The friendship with those who mock thee inwardly. — Pope"
  },
  {
    num: 830, chapter: 83,
    tamil: "பகைநட்பாம் காலம் வருங்கால் முகநட்டு\nஅகநட்பு ஒரீஇ விடல்.",
    transliteration: "Pakainaṭpām kālam varuṅkāl mukanaṭṭu\nakanaṭpu orīi viṭal.",
    english: "When the time comes that enemies feign friendship, smile with the face but let the heart's friendship drop away.",
    tamilUrai: "பகைவர்கள் நட்பைப் போல நடிக்கும் நேரம் வரும்போது, முகத்திலேயே நட்பை காட்டி, உள்ளத்தினின்று அந்த நட்பை அகற்றி விட வேண்டும்.",
    altTranslation: "When foes feign friends, smile thou with outward face, But from the heart let inward bond find no place. — Pope"
  },

  // CHAPTER 84 — Folly
  {
    num: 831, chapter: 84,
    tamil: "பேதைமை என்பதொன்று யாதெனின் ஏதங்கொண்டு\nஊதியம் போக விடல்.",
    transliteration: "Pētaimai eṉpatoṉṟu yāteṉiṉ ētaṅkoṇṭu\nŪtiyam pōka viṭal.",
    english: "What is folly? It is to embrace what brings loss and to let go of what brings gain.",
    tamilUrai: "பேதைமை (மூடத்தனம்) என்பது எதுவெனில், தீமை தருகின்றவற்றை ஏற்று, நன்மை தருகின்ற ஆதாயத்தை விலக்கிவிடுகின்ற செயல்பாடே.",
    altTranslation: "What is folly? 'Tis to grasp the loss, and let The gain depart — such is its fatal net. — Pope"
  },
  {
    num: 832, chapter: 84,
    tamil: "பேதைமையுள் எல்லாம் பேதைமை காதல்\nகழிவினைக்கண் உள்படுதல்.",
    transliteration: "Pētaimaiyuḷ ellām pētaimai kātal\nKaḻiviṉaikkaṇ uḷpaṭutal.",
    english: "The greatest folly of all is to be caught in love of what is improper.",
    tamilUrai: "மூடத்தனங்கள் எல்லாவற்றிலும் மேலான மூடத்தனம், தான் செய்யத்தகாத காரியத்தின் மேல் ஆசைப்பட்டு அதில் அகப்படுவதே.",
    altTranslation: "The chief of follies — to be caught with love Of deeds unworthy of a man above. — Pope"
  },
  {
    num: 833, chapter: 84,
    tamil: "நாணாமை நாடாமை நாரின்மை யாதொன்றும்\nபேணாமை பேதை தொழில்.",
    transliteration: "Nāṇāmai nāṭāmai nāriṉmai yātoṉṟum\nPēṇāmai pētai toḻil.",
    english: "Shamelessness, indifference to good, loveless heart, and care for nothing — these mark the fool.",
    tamilUrai: "நாணமின்மை, நல்லவற்றைத் தேடாமை, அன்பற்ற போக்கு, எதையும் பேணாமை — ஆகிய இப்பண்புகளே ஒரு பேதைக்குரிய செயல்கள்.",
    altTranslation: "Shameless, indifferent, loveless, careless too — These make the fool, whose life is nothing true. — Pope"
  },
  {
    num: 834, chapter: 84,
    tamil: "ஓதி உணர்ந்தும் பிறர்க்குரைத்தும் தானடங்காப்\nபேதையின் பேதையார் இல்.",
    transliteration: "Ōti uṇarntum piṟarkkuraittum tāṉaṭaṅkāp\nPētaiyiṉ pētaiyār il.",
    english: "No one is a greater fool than he who, though learned, though understanding, though teaching others, does not restrain himself.",
    tamilUrai: "நூல்களைக் கற்று அவற்றை உணர்ந்து, பிறருக்குப் போதித்தாலும், தன்னை அடக்கிக் கொள்ளாமல் வாழ்பவனை விட மூடர் வேறு யாரும் இல்லை.",
    altTranslation: "Though learned, knowing, teaching others too, The fool uncurbed — no greater fool exists anew. — Pope"
  },
  {
    num: 835, chapter: 84,
    tamil: "ஒருமைச் செயலாற்றும் பேதை எழுமையும்\nதான்புக் கழுந்தும் அளறு.",
    transliteration: "Orumaic ceyalāṟṟum pētai eḻumaiyum\nTāṉpuk kaḻuntum aḷaṟu.",
    english: "By his deeds in one life, the fool earns hell-deep suffering through seven births.",
    tamilUrai: "ஒரே ஒரு பிறப்பில் பேதை செய்கின்ற தீய செயல்களின் விளைவாய், ஏழு பிறப்புகளிலும் அவன் நரகத்திலே சிக்கி வாடுவான்.",
    altTranslation: "The fool, by deeds in one brief life alone, Sinks deep in hell through seven births for moan. — Pope"
  },
  {
    num: 836, chapter: 84,
    tamil: "பொய்படும் ஒன்றோ புனைபூணும் கையறியாப்\nபேதை வினைமேற் கொளின்.",
    transliteration: "Poypaṭum oṉṟō puṉaipūṇum kaiyaṟiyāp\nPētai viṉaimēṟ koḷiṉ.",
    english: "If a fool, unskilled in action, undertakes a task, he not only fails but puts himself in bonds.",
    tamilUrai: "எந்தத் தொழில் செய்வதும் அறியாத பேதை, தன்னை ஒரு செயலில் ஈடுபடுத்திக்கொண்டால், அவன் அதில் தோற்பதோடு தொடர்ந்து சங்கிலிப் பிணைப்பிலும் ஆகிவிடுவான்.",
    altTranslation: "The fool who tries what he knows not, doth not only fall, But binds himself in bonds that hold him fast in thrall. — Pope"
  },
  {
    num: 837, chapter: 84,
    tamil: "ஏதிலார் ஆரத் தமர்பசிப்பர் பேதை\nபெருஞ்செல்வம் உற்றக் கடை.",
    transliteration: "Ētilār ārat tamarpacippar pētai\nPeruñcelvam uṟṟak kaṭai.",
    english: "When a fool gets great wealth, strangers feast while his own people starve.",
    tamilUrai: "ஒரு பேதைக்கு பெருஞ்செல்வம் கிடைத்தால், அயலார் நிரம்ப நிரம்ப உண்ட பின், அவனது சுற்றத்தார் பசியால் வாட நிற்பர்.",
    altTranslation: "When great wealth to fool befalls, the strangers feast, While his own kin must pangs of hunger stay. — Pope"
  },
  {
    num: 838, chapter: 84,
    tamil: "மையல் ஒருவன் களித்தற்றால் பேதைதன்\nகையொன்று உடைமை பெறின்.",
    transliteration: "Maiyal oruvaṉ kaḷittaṟṟāl pētaitaṉ\nKaiyoṉṟu uṭaimai peṟiṉ.",
    english: "A fool with wealth in hand is like a madman intoxicated with drink.",
    tamilUrai: "ஒரு பேதை தன் கையில் ஏதேனும் ஒரு செல்வத்தை வைத்திருந்தால், அவன் நிலை — மயக்கம் கொண்ட மாட்டெருமை மது உண்டு களிப்பது போன்றதாகும்.",
    altTranslation: "A fool with wealth in hand is even like A madman drunk, whose senses wholly strike. — Pope"
  },
  {
    num: 839, chapter: 84,
    tamil: "பெரிதினிது பேதையார் கேண்மை பிரிவின்கண்\nபீழை தருவதொன்று இல்.",
    transliteration: "Perititiṉitu pētaiyār kēṇmai piriviṉkaṇ\nPīḻai taruvatoṉṟu il.",
    english: "Friendship with fools is delightful, because at parting it brings not the least pain.",
    tamilUrai: "மூடரின் நட்பு மிகவும் இனிமையானது — ஏனெனில், அந்த நட்பு முறிந்தபோது, அதற்காக எவ்விதமான துன்பமும் உண்டாகாது.",
    altTranslation: "Sweetest of all is friendship with the fool, for when 'Tis broken, not a pang is felt by any men. — Pope"
  },
  {
    num: 840, chapter: 84,
    tamil: "கழாஅக்கால் பள்ளியுள் வைத்தற்றால் சான்றோர்\nகுழாஅத்துப் பேதை புகல்.",
    transliteration: "Kaḻāakkāl paḷḷiyuḷ vaittaṟṟāl cāṉṟōr\nkuḻāattup pētai pukal.",
    english: "A fool entering the assembly of the learned is like stepping in with unwashed feet upon a clean bed.",
    tamilUrai: "சான்றோர் கூடியுள்ள அவையில் பேதை நுழைந்து அமர்ந்திருப்பது — கழுவாத கால்களைக் கொண்டு தூய்மையான படுக்கையில் ஏறுவதற்கு ஒப்பானது.",
    altTranslation: "A fool entering a council of the wise, Is as foul feet on clean couch do rise. — Pope"
  },

  // CHAPTER 85 — Ignorance
  {
    num: 841, chapter: 85,
    tamil: "அறிவின்மை இன்மையுள் இன்மை பிறிதின்மை\nஇன்மையா வையா துலகு.",
    transliteration: "Aṟiviṉmai iṉmaiyuḷ iṉmai piṟitiṉmai\nIṉmaiyā vaiyā tulaku.",
    english: "Want of wisdom is poverty of poverties; all other poverty the world does not count as poverty.",
    tamilUrai: "அறிவு இல்லாமை என்பது எல்லா வறுமைகளுக்கும் மேலான பெரு வறுமையே; மற்ற வறுமைகளை உலகம் உண்மையாய் வறுமையாய் கருதாது.",
    altTranslation: "Want of wisdom is want of wants; the world reckons Not other wants, though else all wants seem but beckons. — Pope"
  },
  {
    num: 842, chapter: 85,
    tamil: "அறிவிலான் நெஞ்சுவந்து ஈதல் பிறிதியாதும்\nஇல்லை பெறுவான் தவம்.",
    transliteration: "Aṟivilāṉ neñcuvantu ītal piṟitiyātum\nIllai peṟuvāṉ tavam.",
    english: "When a foolish man gives from the heart, it is not by any other cause than the receiver's own virtue.",
    tamilUrai: "அறிவில்லாதவன் தன் மனம் உவந்து கொடுக்கும் கொடை, அதைப் பெறுபவனுடைய முற்பிறவி தவப்பலனின் வழியாகவே இயன்றது; வேறு காரணம் எதுவும் இல்லை.",
    altTranslation: "If from a fool's free heart aught comes thy way, The merit is none but thine own virtue's sway. — Pope"
  },
  {
    num: 843, chapter: 85,
    tamil: "அறிவிலார் தாம்தம்மைப் பீழிக்கும் பீழை\nசெறுவார்க்கும் செய்தல் அரிது.",
    transliteration: "Aṟivilār tāmtammaip pīḻikkum pīḻai\nCeṟuvārkkum ceytal aritu.",
    english: "The harm the ignorant do to themselves is so great that even their worst enemies could hardly accomplish it.",
    tamilUrai: "அறிவில்லாதவர்கள் தமக்குத் தாமே செய்துகொள்கின்ற பீழையான துன்பம், அவர்களுடைய பகைவராலும் செய்ய இயலாததாகும்.",
    altTranslation: "The harm fools do unto themselves, I say, Their deadliest foes could scarce bring on their way. — Pope"
  },
  {
    num: 844, chapter: 85,
    tamil: "வெண்மை எனப்படுவ தியாதெனின் ஒண்மை\nஉடையம்யாம் என்னும் செருக்கு.",
    transliteration: "Veṇmai eṉappaṭuva tiyāteṉiṉ oṇmai\nuṭaiyamyām eṉṉum cerukku.",
    english: "What is the meaning of simplicity? It is the conceit of saying, 'We are wise.'",
    tamilUrai: "மூடத்தனம் என்று எது கூறப்படுகின்றது என்பதை உணர்ந்தால், \"நாம் அறிவுடையவர்கள்\" என்று பெருமைப்படுகின்ற கர்வமே அதுவாகும்.",
    altTranslation: "What's simpleness? 'Tis pride of fools that they Are wise — in fancied knowledge wisest they. — Pope"
  },
  {
    num: 845, chapter: 85,
    tamil: "கல்லாத மேற்கொண் டொழுகல் கசடற\nவல்லதூஉம் ஐயம் தரும்.",
    transliteration: "Kallāta mēṟkoṇ ṭoḻukal kacaṭaṟa\nVallatūum aiyam tarum.",
    english: "To act as if he had learned what he has not will raise doubts even about what he truly knows.",
    tamilUrai: "கற்றிராத ஒன்றை கற்றுக் கொண்டதாய் காட்டிக்கொள்ளுதல், குற்றமற்ற முழுமையாய் அறிந்திருக்கும் ஒரு பொருளில் கூட சந்தேகம் ஏற்படச் செய்யும்.",
    altTranslation: "To act as if he knew what he did not, doth cast Doubt on the very truths his knowledge might contrast. — Pope"
  },
  {
    num: 846, chapter: 85,
    tamil: "அற்றம் மறைத்தலோ புல்லறிவு தம்வயின்\nகுற்றம் மறையா வழி.",
    transliteration: "Aṟṟam maṟaittalō pullaṟivu tamvayiṉ\nKuṟṟam maṟaiyā vaḻi.",
    english: "To hide one's nakedness from the world while not hiding one's faults from oneself — this is mere ignorance.",
    tamilUrai: "உடலின் வெறுமையை ஆடையால் மறைத்துக்கொள்ளுதல், தம்மிடம் உள்ள குற்றங்களை தாமே மறைக்காமல் இருக்கும்போது, அறியாமையே ஆகும்.",
    altTranslation: "To hide the outward shame, while inward faults are known, Is but pure folly, making deeper blemish shown. — Pope"
  },
  {
    num: 847, chapter: 85,
    tamil: "அருமறை சோரும் அறிவிலான் செய்யும்\nபெருமிறை தானே தனக்கு.",
    transliteration: "Arumaṟai cōrum aṟivilāṉ ceyyum\nPerumiṟai tāṉē taṉakku.",
    english: "He who lets a precious secret slip through ignorance is himself the cause of his own great harm.",
    tamilUrai: "தன்னிடம் ஒப்படைக்கப்பட்ட அரிய மறை பொருளை வெளிவிடும் அறிவிலி, தனக்கே தானே பெரும் தீமையை விளைவித்துக் கொள்வான்.",
    altTranslation: "A fool who lets a precious secret slip away, Himself inflicts great harm, and none may say him nay. — Pope"
  },
  {
    num: 848, chapter: 85,
    tamil: "ஏவவும் செய்கலான் தான்தேறான் அவ்வுயிர்\nபோஒம் அளவுமோர் நோய்.",
    transliteration: "Ēvavum ceykalāṉ tāṉtēṟāṉ avvuyir\nPōom aḷavumōr nōy.",
    english: "He who neither does as commanded nor finds out what is best is a disease to the world as long as he lives.",
    tamilUrai: "பிறர் ஏவியபடியும் செய்யாமல், தானும் தெளிவாய் ஆராய்ந்து முடிவு செய்யாமல் இருப்பவன், அவன் உயிர் போகும்வரை, உலகத்திற்கு ஒரு நோயாய் இருப்பான்.",
    altTranslation: "Who neither does what's bid, nor thinks aright alone, Is plague to earth till life's last breath has flown. — Pope"
  },
  {
    num: 849, chapter: 85,
    tamil: "காணாதான் காட்டுவான் தான்காணான் காணாதான்\nகண்டானாம் தான்கண்ட வாறு.",
    transliteration: "Kāṇātāṉ kāṭṭuvāṉ tāṉkāṇāṉ kāṇātāṉ\nKaṇṭāṉām tāṉkaṇṭa vāṟu.",
    english: "He who tries to teach one who will not see is himself the blind one; for that man will always see only in his own way.",
    tamilUrai: "தெரிந்துகொள்ள முயலாதவனுக்குக் கற்றுக்கொடுக்க முனையும் ஒருவனே தன் அறிவற்றவனாய் ஆகி விடுகிறான்; ஏனெனில், கற்றுக்கொள்ள மறுப்பவன் தான் கண்டதையே நம்பி நிற்பான்.",
    altTranslation: "Who tries to teach the blind is blind himself — A fool will see but his own way, no other delf. — Pope"
  },
  {
    num: 850, chapter: 85,
    tamil: "உலகத்தார் உண்டென்ப தில்லென்பான் வையத்து\nஅலகையா வைக்கப் படும்.",
    transliteration: "Ulakattār uṇṭeṉpa tilleṉpāṉ vaiyattu\nalakaiyā vaikkap paṭum.",
    english: "The man who denies what the world accepts is reckoned on earth as a ghost among men.",
    tamilUrai: "உலகத்தார் ஒத்துக் கொள்ளும் உண்மையை மறுத்துப் பேசுபவன், இந்த உலகத்தில் உயிரோடு இருந்தாலும், பேய் போன்றவனாய் எண்ணப்படுவான்.",
    altTranslation: "Who denies what all the world declares to be, A ghost men count him in society. — Pope"
  },

  // CHAPTER 86 — Hatred
  {
    num: 851, chapter: 86,
    tamil: "இகலென்ப எல்லா உயிர்க்கும் பகலென்னும்\nபண்பின்மை பாரிக்கும் நோய்.",
    transliteration: "Ikaleṉpa ellā uyirkkum pakaleṉṉum\nPaṇpiṉmai pārikkum nōy.",
    english: "Hatred is the disease which spreads among all beings the evil called division.",
    tamilUrai: "இகல் (பகைமை) என்பது, எல்லா உயிர்களிடத்தும் பிரிவினை என்னும் தீய பண்பை பரப்புகின்ற நோயாகும்.",
    altTranslation: "Hatred — 'tis the disease that spreads in every soul That pestilential trait of difference whole. — Pope"
  },
  {
    num: 852, chapter: 86,
    tamil: "பகல்கருதிப் பற்றா செயினும் இகல்கருதி\nஇன்னாசெய் யாமை தலை.",
    transliteration: "Pakalkarutip paṟṟā ceyiṉum ikalkaruti\niṉṉācey yāmai talai.",
    english: "Though others do ruinous things with hostile intent, it is best not to do them evil in return out of hatred.",
    tamilUrai: "பிறர் பிரிவினை கொண்டு எவ்வாறு தீமை செய்தாலும், பகை கருதி அவர்களுக்குத் தீமை செய்யாதிருத்தல் தலையான நற்பண்பாகும்.",
    altTranslation: "Though others plan division, harm to wreak, Best not in hatred evil's answer seek. — Pope"
  },
  {
    num: 853, chapter: 86,
    tamil: "இகலென்னும் எவ்வநோய் நீக்கின் தவலில்லாத்\nதாவில் விளக்கம் தரும்.",
    transliteration: "Ikaleṉṉum evvanōy nīkkiṉ tavalillāt\nTāvil viḷakkam tarum.",
    english: "If one throws off the painful disease called hatred, he shall gain the imperishable light of glory.",
    tamilUrai: "இகல் (பகைமை) என்னும் கொடிய நோயை ஒருவன் தன்னிடமிருந்து நீக்கிவிட்டால், அது அவனுக்குத் தளர்வில்லாத தூய்மையான புகழ் விளக்கைத் தரும்.",
    altTranslation: "Who shakes off hatred's painful plague, shall earn Imperishable glory's light that e'er shall burn. — Pope"
  },
  {
    num: 854, chapter: 86,
    tamil: "இன்பத்துள் இன்பம் பயக்கும் இகலென்னும்\nதுன்பத்துள் துன்பம் கெடின்.",
    transliteration: "Iṉpattuḷ iṉpam payakkum ikaleṉṉum\nTuṉpattuḷ tuṉpam keṭiṉ.",
    english: "If the sorrow of sorrows called hatred is destroyed, the joy of joys shall flow.",
    tamilUrai: "துன்பங்களுள் மிகப்பெரிய துன்பமாகிய இகல் அழிந்துவிட்டால், அதன் விளைவாய், இன்பங்களுக்குள் மேலான இன்பம் உறுதியாய் கிட்டும்.",
    altTranslation: "The joy of joys shall flow when hatred's curse is gone — Of sorrows' sorrows, that's the deepest one. — Pope"
  },
  {
    num: 855, chapter: 86,
    tamil: "இகலெதிர் சாய்ந்தொழுக வல்லாரை யாரே\nமிகலூக்கும் தன்மை யவர்.",
    transliteration: "Ikaletir cāyntoḻuka vallārai yārē\nMikalūkkum taṉmai yavar.",
    english: "Who has the power to overcome those who can bend away from hatred and walk in peace?",
    tamilUrai: "பகையை எதிர்ப்படும்போது அதனின்று சாய்ந்து விலகி நடந்துகொள்ள வல்ல பண்பாளர்களை, தம்மால் வெல்ல முடியும் என்று எண்ணும் தன்மையுடையவர் யார்?",
    altTranslation: "Who has the power to crush those who, from hate's way, Can bend aside, and peace within their hearts obey? — Pope"
  },
  {
    num: 856, chapter: 86,
    tamil: "இகலின் மிகலினிது என்பவன் வாழ்க்கை\nதவலும் கெடலும் நணித்து.",
    transliteration: "Ikaliṉ mikaliṉitu eṉpavaṉ vāḻkkai\ntavalum keṭalum naṇittu.",
    english: "For him who thinks it sweet to win by hatred, loss of fortune and ruin are near.",
    tamilUrai: "இகலினால் வெற்றி பெறுவதே இனிமையாய் இருக்கிறது என எண்ணுபவனின் வாழ்க்கையில், தோல்வியும் அழிவும் மிக அருகிலேயே உள்ளன.",
    altTranslation: "Who deems it sweet to conquer by the path of hate, Finds ruin, loss, are close beside his fate. — Pope"
  },
  {
    num: 857, chapter: 86,
    tamil: "மிகல்மேவல் மெய்ப்பொருள் காணார் இகல்மேவல்\nஇன்னா அறிவி னவர்.",
    transliteration: "Mikalmēval meypporuḷ kāṇār ikalmēval\niṉṉā aṟivi ṉavar.",
    english: "Those whose evil minds love quarrel will never see the true essence that gives real victory.",
    tamilUrai: "பகை கொள்ளுதலை விரும்புகின்ற தீய அறிவுடையவர்கள், உண்மையான வெற்றியைத் தரும் மெய்ப்பொருளை ஒருபோதும் காண மாட்டார்கள்.",
    altTranslation: "The petty minds that hatred's strife delight to choose, Can never see the truth — that victory to lose. — Pope"
  },
  {
    num: 858, chapter: 86,
    tamil: "இகலிற்கு எதிர்சாய்தல் ஆக்கம் அதனை\nமிக லூக்கின் ஊக்குமாம் கேடு.",
    transliteration: "Ikaliṟku etircāytal ākkam ataṉai\nMika lūkkiṉ ūkkumām kēṭu.",
    english: "To turn aside from hatred brings prosperity; to press it forward in pride brings ruin.",
    tamilUrai: "இகலுக்கு எதிராக சாய்ந்து நீங்குதல் ஆக்கத்தைத் தரும்; அதனை முனைந்து தொடர்ந்து ஊக்குவித்து சென்றால், அது கேட்டினை விரைவாக்கும்.",
    altTranslation: "Bending from hate brings rise; but pushing it with pride Hastens one's own destruction by its side. — Pope"
  },
  {
    num: 859, chapter: 86,
    tamil: "இகல்காணான் ஆக்கம் வருங்கால் அதனை\nமிகல்காணும் கேடு தரற்கு.",
    transliteration: "Ikalkāṇāṉ ākkam varuṅkāl ataṉai\nMikalkāṇum kēṭu taraṟku.",
    english: "A man in prosperity sees no evil of hatred; but in misfortune, he sees the glory of it.",
    tamilUrai: "செல்வம் பெருகி வரும் காலத்தில், ஒருவன் இகலை (பகையை) தீமையாய் காணான்; ஆனால் கேடு நேரிடும்போதுதான், அதை மிக்கதாய் கருதி வருந்துவான்.",
    altTranslation: "In fortune's rise, he sees no ill in hatred's ways; In ruin's hour, he sees its woe in vivid blaze. — Pope"
  },
  {
    num: 860, chapter: 86,
    tamil: "இகலானாம் இன்னாத எல்லாம் நகலானாம்\nநன்னயம் என்னும் செருக்கு.",
    transliteration: "Ikalāṉām iṉṉāta ellām nakalāṉām\nNaṉnayam eṉṉum cerukku.",
    english: "From hatred come all painful ills; from friendliness comes all prosperity of worth.",
    tamilUrai: "துன்பம் தருகிற தீய நிகழ்வுகள் எல்லாம் இகலினால் விளைபவை; நல்ல சிறப்பாய மேன்மை பண்பு, மகிழ்வுடன் பழகுகிற இயல்பினால் தோன்றுகிறது.",
    altTranslation: "From hate, all evil ills come flowing fast; From friendly mirth, all noble good is cast. — Pope"
  },

  // CHAPTER 87 — The Might of Hatred
  {
    num: 861, chapter: 87,
    tamil: "வலியார்க்கு மாறேற்றல் ஓம்புக ஓம்பா\nமெலியார்மேல் மேக பகை.",
    transliteration: "Valiyārkku māṟēṟṟal ōmpuka ōmpā\nMeliyārmēl mēka pakai.",
    english: "Avoid enmity with the mighty; but do not shrink from hatred toward the weak.",
    tamilUrai: "தன்னை விட வலியவர்களோடு பகை கொள்ளாமல் காத்துக் கொள்ள வேண்டும்; தன்னை விட பலவீனமானவர்கள் எதிர் செய்யும் சிறு பகையை, தகுந்தபோது தாக்கி ஒடுக்க வேண்டும்.",
    altTranslation: "Shun strife with them more mighty than thyself; Shrink not to face the weak whose hate is pelf. — Pope"
  },
  {
    num: 862, chapter: 87,
    tamil: "அன்பிலன் ஆன்ற துணையிலன் தான்துவ்வான்\nஎன்பரியும் ஏதிலான் துப்பு.",
    transliteration: "Aṉpilaṉ āṉṟa tuṇaiyilaṉ tāṉtuvvāṉ\nEṉpariyum ētilāṉ tuppu.",
    english: "How can one conquer a strong enemy when he has no love, no worthy support, and no strength of his own?",
    tamilUrai: "அன்பு இல்லாதவனாய், உதவும் சிறந்த துணை இல்லாதவனாய், தனியே போர் புரியும் ஆற்றலும் இல்லாதவனாய் இருக்கும் ஒருவன், வலிய பகைவரை எப்படி வெல்ல முடியும்?",
    altTranslation: "How can he conquer foe whose strength he does not share, Who has no love, no friend, nor force of his own there? — Pope"
  },
  {
    num: 863, chapter: 87,
    tamil: "அஞ்சும் அறியான் அமைவிலன் ஈகலான்\nதஞ்சம் எளியன் பகைக்கு.",
    transliteration: "Añcum aṟiyāṉ amaivilaṉ īkalāṉ\nTañcam eḷiyaṉ pakaikku.",
    english: "The man who fears, knows not, has no friends, nor can give — he is the easiest of prey to his enemies.",
    tamilUrai: "அஞ்சுபவனாய், அறிவற்றவனாய், சிறந்த நண்பர்கள் இல்லாதவனாய், கொடை அளிக்க இயலாதவனாய் இருப்பவன் — தன் பகைவர்களுக்கு மிக எளிதில் சிக்கும் தரம் அற்றவனாவான்.",
    altTranslation: "He who is fearful, ignorant, friendless, cannot give, Is easy prey to foes in whose gaze he does not live. — Pope"
  },
  {
    num: 864, chapter: 87,
    tamil: "நீங்கான் வெகுளி நிறையிலன் எஞ்ஞான்றும்\nயாங்கணும் யார்க்கும் எளிது.",
    transliteration: "Nīṅkāṉ vekuḷi niṟaiyilaṉ eññāṉṟum\nYāṅkaṇum yārkkum eḷitu.",
    english: "He who cannot rid himself of anger and has no self-restraint is an easy prey for anyone, at any time, in any place.",
    tamilUrai: "சினத்தை விட இயலாதவனாய், நிறைந்த அடக்கம் இல்லாதவனாய் இருப்பவன், எந்த நேரத்திலும் எந்த இடத்திலும் எந்த எதிரிக்கும் எளிதாய் அகப்படுவான்.",
    altTranslation: "Who cannot shed his wrath, nor curb his wayward will, An easy prey to all, at every time, is still. — Pope"
  },
  {
    num: 865, chapter: 87,
    tamil: "வழிநோக்கான் வாய்ப்பன செய்யான் பழிநோக்கான்\nபண்பிலன் பற்றார்க்கு இனிது.",
    transliteration: "Vaḻinōkkāṉ vāyppaṉa ceyyāṉ paḻinōkkāṉ\nPaṇpilaṉ paṟṟārkku iṉitu.",
    english: "One who sees no right way, does no fit deeds, dreads no blame, and has no noble qualities is a welcome sight to his enemies.",
    tamilUrai: "நல்ல நெறியை நோக்கி நடக்காமல், செய்யத்தக்க நன்மைகளைச் செய்யாமல், பழிக்கு அஞ்சாமல், பண்பின்றி வாழ்பவன் — அவனை வெல்ல விரும்பும் பகைவர்களுக்கு எளிதான வேட்டையாகிறான்.",
    altTranslation: "No path he sees, no fit deed does, dreads no shame, Wants noble parts — 'tis sport for foes who seek his name. — Pope"
  },
  {
    num: 866, chapter: 87,
    tamil: "காணாச் சினத்தான் கழிபெருங் காமத்தான்\nபேணாமை பேணப் படும்.",
    transliteration: "Kāṇāc ciṉattāṉ kaḻiperuṅ kāmattāṉ\nPēṇāmai pēṇap paṭum.",
    english: "Welcome is the enmity of the blind-wrathed and the lust-driven; it is easy to prevail against them.",
    tamilUrai: "பார்வையை இழக்கும் அளவு கடும் சினம் கொள்பவன், அளவற்ற காம உணர்வுடையவன் — அத்தகையோரை விரும்பி பகையாய் ஏற்றுக்கொள்ளத் தக்கது; அவர்களை வெல்வது எளிது.",
    altTranslation: "Welcome the enmity of blind-wrathed, lustful men; Against such foes, to gain success is easy when. — Pope"
  },
  {
    num: 867, chapter: 87,
    tamil: "கொடுத்தும் கொளல்வேண்டும் மன்ற அடுத்திருந்து\nமாணாத செய்வான் பகை.",
    transliteration: "Koṭuttum koḷalvēṇṭum maṉṟa aṭuttiruntu\nMāṇāta ceyvāṉ pakai.",
    english: "Surely one must secure, even at a cost, the enmity of him who acts foolishly in undertaking.",
    tamilUrai: "ஒரு செயலில் ஈடுபட்டுக் கொண்டு, அதை திறமையற்ற முறையில் செய்து கெடுக்கின்ற ஒருவன் நம் பகைவனாய் இருப்பதை, பொருள் கொடுத்தேனும் நிச்சயம் வரவேற்க வேண்டும்.",
    altTranslation: "Such foe, whose deeds in task misplaced destroy the cause, Is worth even paying for — welcome his hostile draws. — Pope"
  },
  {
    num: 868, chapter: 87,
    tamil: "குணனிலனாய்க் குற்றம் பலவாயின் மாற்றார்க்கு\nஇனனிலனாம் ஏமாப் புடைத்து.",
    transliteration: "Kuṇaṉilaṉāyk kuṟṟam palavāyiṉ māṟṟārkku\nIṉaṉilaṉām ēmāp puṭaittu.",
    english: "One without virtues and full of faults has no friends, which is a joy to his enemies.",
    tamilUrai: "நல்ல குணம் இல்லாமல், குற்றங்கள் நிரம்ப உடையவனாய் இருந்தால், நண்பர்கள் இல்லாதவனாய்த் தனிமைப்படுவான்; இது அவனது பகைவர்க்கு மகிழ்ச்சியே.",
    altTranslation: "Void of good, full of faults, he stands alone, Such is the joy to enemies that's shown. — Pope"
  },
  {
    num: 869, chapter: 87,
    tamil: "செறுவார்க்குச் சேணிகவா இன்பம் அறிவிலா\nஅஞ்சும் பகைவர்ப் பெறின்.",
    transliteration: "Ceṟuvārkkuc cēṇikavā iṉpam aṟivilā\nAñcum pakaivarp peṟiṉ.",
    english: "When one has fearful and ignorant enemies, his prosperity is endless.",
    tamilUrai: "அறிவற்ற, அஞ்சுகின்ற பகைவர்களை ஒருவர் எதிர்கொள்ள நேரிட்டால், அந்த வெற்றி வீரனுக்கு, ஒவ்வொரு நாளும் தொடர்ந்து இன்பம் கிடைக்கும்.",
    altTranslation: "Fearful, ignorant foes if one should chance to find, His prosperity grows without end, and all untwined. — Pope"
  },
  {
    num: 870, chapter: 87,
    tamil: "கல்லான் வெகுளும் சிறுபொருள் எஞ்ஞான்றும்\nஒல்லானை ஒல்லா தொளி.",
    transliteration: "Kallāṉ vekuḷum ciṟuporuḷ eññāṉṟum\nOllāṉai ollā toḷi.",
    english: "The glory of overcoming an ignorant foe is never hard to win; but it makes one famous forever.",
    tamilUrai: "கற்கவில்லாத, சினம் கொள்கிற பலவீனமான பகைவனை வெல்வது சிறிய பொருளே; ஆனால் அதனால் ஏற்படும் புகழை எந்தக் காலத்திலும் எவரும் நிறுத்த முடியாது.",
    altTranslation: "To conquer ignorant wrathful foe is small — but fame Thence ever lasting shines, no man can its glow blame. — Pope"
  },

  // CHAPTER 88 — Knowing the Quality of Hate
  {
    num: 871, chapter: 88,
    tamil: "பகைஎன்னும் பண்பி லதனை ஒருவன்\nநகையேயும் வேண்டற்பாற்று அன்று.",
    transliteration: "Pakaieṉṉum paṇpi lataṉai oruvaṉ\nNakaiyēyum vēṇṭaṟpāṟṟu aṉṟu.",
    english: "The quality called enmity is such that one should not desire it even in sport.",
    tamilUrai: "பகை என்கிற பண்பு இல்லாத கேட்டை, ஒருவன் விளையாட்டாக கூட விரும்பி நாடக் கூடாது.",
    altTranslation: "Enmity, — that nature-less evil, — none should crave, Not even in sport: 'tis a thing from which to save. — Pope"
  },
  {
    num: 872, chapter: 88,
    tamil: "வில்லேர் உழவர் பகைகொளினும் கொள்ளற்க\nசொல்லேர் உழவர் பகை.",
    transliteration: "Villēr uḻavar pakaikoḻiṉum koḷḷaṟka\nCollēr uḻavar pakai.",
    english: "Better make enemies of the warriors who plough with the bow than of those who plough with words.",
    tamilUrai: "வில் என்னும் கருவியை ஏர் போல் பயன்படுத்தும் வீரர்களை பகைமை கொண்டாலும் கொள்ளலாம்; சொல் என்னும் கருவியை ஏராய் பயன்படுத்தும் அறிஞர்களை பகைமை கொள்ள வேண்டாம்.",
    altTranslation: "Rather face the warriors' bow-and-arrow keen, Than shun the scholars' word-plough's furrow seen. — Pope"
  },
  {
    num: 873, chapter: 88,
    tamil: "ஏமுற் றவரினும் ஏழை தமியனாய்ப்\nபல்லார் பகைகொள் பவன்.",
    transliteration: "Ēmuṟ ṟavariṉum ēḻai tamiyaṉāyp\nPallār pakaikoḷ pavaṉ.",
    english: "More foolish than the deluded is he who, alone, makes many enemies.",
    tamilUrai: "மதிமயங்கியவர்களை விடவும் மிகக் கீழ்த்தரமாய் எண்ணப்பட தக்கவன், தனியாக நின்று பலரிடம் பகைமையை வளர்ப்பவனே ஆவான்.",
    altTranslation: "Lower than the maddened, he who stands alone, And foes by multitudes around him gathered grown. — Pope"
  },
  {
    num: 874, chapter: 88,
    tamil: "பகைநட்பாக் கொண்டொழுகும் பண்புடை யாளன்\nதகைமைக்கண் தங்கிற்று உலகு.",
    transliteration: "Pakainaṭpāk koṇṭoḻukum paṇpuṭai yāḷaṉ\nTakaimaikkaṇ taṅkiṟṟu ulaku.",
    english: "The world rests in the nature of one whose virtue converts enemies into friends.",
    tamilUrai: "பகைவரை நண்பனாக்கி, நட்புடன் நடத்திக்கொள்ளும் பெருமை உடைய பண்பாளனின் உயர்ந்த தகுதியையே உலகம் சார்ந்து நிற்கின்றது.",
    altTranslation: "The world abides in the dignity of him who doth With virtue, foes unto true friends conduct. — Pope"
  },
  {
    num: 875, chapter: 88,
    tamil: "தன்துணை இன்றால் பகையிரண்டால் தான்ஒருவன்\nஇன்துணையாக் கொள்கவற்றின் ஒன்று.",
    transliteration: "Taṉtuṇai iṉṟāl pakaiyiraṇṭāl tāṉoruvaṉ\nIṉtuṇaiyāk koḻkavaṟṟiṉ oṉṟu.",
    english: "If one stands alone without help and two enemies face him, let him make one of them his friend.",
    tamilUrai: "தனக்கு உதவி செய்யும் துணை யாருமின்றி, இரு பகைவர்களை எதிர் கொள்ளும் நிலையில் இருப்பவன், அந்த இரு பகைவரில் ஒருவரை தனது இனிய துணையாக மாற்றிக் கொள்ள வேண்டும்.",
    altTranslation: "Thyself alone, and two thy foes — then make Of one thy sweet ally, for thine own sake. — Pope"
  },
  {
    num: 876, chapter: 88,
    tamil: "தேறினும் தேறா விடினும் அழிவின்கண்\nதேறான் பகாஅன் விடல்.",
    transliteration: "Tēṟiṉum tēṟā viṭiṉum aḻiviṉkaṇ\nTēṟāṉ pakāaṉ viṭal.",
    english: "In a time of ruin, it is best not to trust or distrust an old friend turned foe, but simply to leave him aside.",
    tamilUrai: "அழிவு வந்து உள்ள நேரத்தில் பழகிய ஒருவன் பகைவனாய் ஆனாலும், அவனை முற்றிலும் நம்பாமலும், முற்றிலும் ஒதுக்காமலும், சும்மா விட்டுவிடுதல் நல்லது.",
    altTranslation: "In ruin's hour, friend or foe of ancient time, Nor trust, nor distrust — simply leave him, 'tis the prime. — Pope"
  },
  {
    num: 877, chapter: 88,
    tamil: "நோவற்க நொந்தது அறியார்க்கு மேவற்க\nமென்மை பகைவர் அகத்து.",
    transliteration: "Nōvaṟka nontatu aṟiyārkku mēvaṟka\nMeṉmai pakaivar akattu.",
    english: "Do not reveal your pain to those who cannot understand it; and do not show weakness before enemies.",
    tamilUrai: "தனது துன்பத்தை உணர இயலாதவர்களிடம், அத்துன்பத்தை வெளிப்படுத்திப் புலம்ப வேண்டாம்; பகைவர் எதிரில் தன் பலவீனத்தைக் காட்டி வீழ்ந்து நடக்க வேண்டாம்.",
    altTranslation: "Complain not to those who know no sympathy's art; Nor show thy weakness to the foeman's heart. — Pope"
  },
  {
    num: 878, chapter: 88,
    tamil: "வகையறிந்து தற்செய்து தற்காப்ப மாயும்\nபகைவர்கண் பட்ட செருக்கு.",
    transliteration: "Vakaiyaṟintu taṟceytu taṟkāppa māyum\nPakaivarkaṇ paṭṭa cerukku.",
    english: "If one knows the proper way, strengthens himself, and guards himself, the pride of his enemies vanishes.",
    tamilUrai: "பகையை வெல்லும் வகைகளை அறிந்து, தன்னை வலிமைப்படுத்திக் கொண்டு, தன்னைக் காத்துக்கொள்ள வேண்டும்; அதனால் பகைவரிடம் தோன்றிய செருக்கு தானாக அழிந்துவிடும்.",
    altTranslation: "Knowing the way, growing in power, self-guarded too, The pride of enemies shall vanish like the dew. — Pope"
  },
  {
    num: 879, chapter: 88,
    tamil: "இளைதாக முள்மரம் கொல்க களையுநர்\nகைகொல்லும் காழ்த்த இடத்து.",
    transliteration: "Iḷaitāka muḷmaram koḷka kaḷaiyunar\nKaikollum kāḻtta iṭattu.",
    english: "Cut down the thorn tree when young; left to harden, it will break the hand that tries to cut it.",
    tamilUrai: "முட்கள் உடைய மரத்தை அது சிறியதாக இருக்கும்போதே வெட்டி விட வேண்டும்; வளர்ந்து திடமானபோது, அதை வெட்டப் பார்ப்பவரின் கையையே அது முட்டி அழிக்கும்.",
    altTranslation: "Cut down the thorny tree when it is tender still; When grown, it breaks the hand that would do it ill. — Pope"
  },
  {
    num: 880, chapter: 88,
    tamil: "உயிர்ப்ப உளரல்லர் மன்ற செயிர்ப்பவர்\nசெம்மல் சிதைக்கலா தார்.",
    transliteration: "Uyirppa uḷarallar maṉṟa ceyirppavar\nCemmal citaikkalā tār.",
    english: "Surely those who cannot destroy the pride of the haughty foe have no right even to breathe as living beings.",
    tamilUrai: "தம்மை சினந்துள்ள பகைவரின் மேம்போக்குத் தலைமையை அழிக்க இயலாதவர்கள், உயிருடன் இருப்பதற்கு உண்மையில் உரிமை இல்லாதவர்களே.",
    altTranslation: "They have no right to breathe, who cannot quell The haughty foeman's pride with vanquished yell. — Pope"
  },

  // CHAPTER 89 — Enmity Within
  {
    num: 881, chapter: 89,
    tamil: "நிழல்நீரும் இன்னாத இன்னா தமர்நீரும்\nஇன்னாவாம் இன்னா செயின்.",
    transliteration: "Niḻalnīrum iṉṉāta iṉṉā tamarnīrum\niṉṉāvām iṉṉā ceyiṉ.",
    english: "Shade and water, though pleasant, are painful if they bring harm; so also is the kinship of those who injure us.",
    tamilUrai: "நிழலும் நீரும், உடலுக்குத் தீமை செய்வதாக இருந்தால் அவை துன்பம் தருபவையாகும்; அதேபோல, துன்பம் செய்யும் உறவினர் நமக்குத் துன்பமே ஆவர்.",
    altTranslation: "As shade and water, sweet they seem, yet pain impart If ill they bring — so kin that wound the heart. — Pope"
  },
  {
    num: 882, chapter: 89,
    tamil: "வாள்போல பகைவரை அஞ்சற்க அஞ்சுக\nகேள்போல் பகைவர் தொடர்பு.",
    transliteration: "Vāḷpōla pakaivarai añcaṟka añcuka\nKēḷpōl pakaivar toṭarpu.",
    english: "Fear not foes open as a sword; fear the friendship of foes who are like kinsfolk.",
    tamilUrai: "வாள் போல வெளிப்படையான பகைவர்களுக்கு அஞ்ச வேண்டியதில்லை; உறவினர் போல் நடித்து, உள்ளுக்குள் பகை கொண்டிருக்கும் உட்பகையையே அஞ்சுக.",
    altTranslation: "Fear not the foe whose sword is plain to sight; Fear most the kin-like foe whose face is bright. — Pope"
  },
  {
    num: 883, chapter: 89,
    tamil: "உட்பகை அஞ்சித்தற் காக்க உலைவிடத்து\nமட்பகையின் மாணத் தெறும்.",
    transliteration: "Uṭpakai añcittaṟ kākka ulaiviṭattu\nmaṭpakaiyiṉ māṇat teṟum.",
    english: "Fear inner enmity and guard yourself against it; in time of weakness, it wounds like a sharp potter's knife.",
    tamilUrai: "உட்பகையை அஞ்சித் தன்னைப் பாதுகாத்துக் கொள்ள வேண்டும்; தளர்ந்த நிலையில் அது, மண்பாண்டத்தை வெட்டும் கத்தி போல் வெட்டி அழிக்கும்.",
    altTranslation: "Fear inner foes, and guard thyself with care; In weakness, they strike sharp as potter's share. — Pope"
  },
  {
    num: 884, chapter: 89,
    tamil: "மனமாணா உட்பகை தோன்றின் இனமாணா\nஏதம் பலவும் தரும்.",
    transliteration: "Maṉamāṇā uṭpakai tōṉṟiṉ iṉamāṇā\nĒtam palavum tarum.",
    english: "When inner enmity of a perverse mind arises, it brings many grievous troubles of a broken kindred.",
    tamilUrai: "கெட்ட மனம் கொண்டவரின் உட்பகை தோன்றினால், அது நல்ல கூட்டத்தை சிதைத்து, பல வகை துன்பங்களை தரும்.",
    altTranslation: "When perverse minds breed inner foes, they yield Full many ills of kinship broken, unsealed. — Pope"
  },
  {
    num: 885, chapter: 89,
    tamil: "உறல்முறையான் உட்பகை தோன்றின் இறல்முறையான்\nஏதம் பலவும் தரும்.",
    transliteration: "Uṟalmuṟaiyāṉ uṭpakai tōṉṟiṉ iṟalmuṟaiyāṉ\nĒtam palavum tarum.",
    english: "If enmity arises among kinsfolk, it brings troubles that lead to death.",
    tamilUrai: "சுற்றத்தாரிடையே உட்பகை தோன்றினால், அது மரணம் வரை கொண்டு செல்லும் பல கடும் துன்பங்களை தரும்.",
    altTranslation: "When hate springs up in the bosom of one's kin, 'Twill many ills of death surely therefrom begin. — Pope"
  },
  {
    num: 886, chapter: 89,
    tamil: "ஒன்றாமை ஒன்றியார் கட்படின் எஞ்ஞான்றும்\nபொன்றாமை ஒன்றல் அரிது.",
    transliteration: "Oṉṟāmai oṉṟiyār kaṭpaṭiṉ eññāṉṟum\nPoṉṟāmai oṉṟal aritu.",
    english: "If discord arises among those who were once united, it is hard to avoid destruction.",
    tamilUrai: "ஒன்றாய் இருந்தவர்களிடையே பிளவு தோன்றினால், அதன் பின், அழிவின்றி தப்புவது எந்தக் காலத்திலும் அரிதாய் விடும்.",
    altTranslation: "If discord stains the bond of those once joined in one, Escape from ruin is well-nigh hopeless, all is done. — Pope"
  },
  {
    num: 887, chapter: 89,
    tamil: "செப்பின் புணர்ச்சிபோல் கூடினும் கூடாதே\nஉட்பகை உற்ற குடி.",
    transliteration: "Ceppiṉ puṇarccipōl kūṭiṉum kūṭātē\nuṭpakai uṟṟa kuṭi.",
    english: "As the lid fits a casket but does not join with it, so a family with inner enmity may live together but never unite.",
    tamilUrai: "கிண்ணத்துடன் அதன் மூடி பொருந்தியிருப்பது போலத் தோற்றம் கொண்டாலும், அவை உண்மையில் ஒன்றுபடவில்லை; அதேபோல, உட்பகை நிறைந்த குடும்பம் வெளிப்பார்வைக்கு ஒன்றாய் இருந்தாலும், ஒன்றுபடாது.",
    altTranslation: "As lid meets casket, but is never truly one, So inner-foe-struck family, though joined, is undone. — Pope"
  },
  {
    num: 888, chapter: 89,
    tamil: "அரம்பொருத பொன்போலத் தேயும் உரம்பொரு\nதுட்பகை உற்ற குடி.",
    transliteration: "Aramporuta poṉpōlat tēyum uramporu\ntuṭpakai uṟṟa kuṭi.",
    english: "The family eaten by inner enmity wastes away, as gold filed by a rasp.",
    tamilUrai: "உட்பகையால் வலிமையை இழக்கும் குடும்பம், அரம் போட்டு தேய்க்கப்படுகின்ற பொன்னைப் போல, வலிமை குறைந்து அழிவை நோக்கிச் செல்லும்.",
    altTranslation: "The family by inner feud consumed, shall waste Like gold the rasp has rubbed, its strength displaced. — Pope"
  },
  {
    num: 889, chapter: 89,
    tamil: "எட்பகவு அன்ன சிறுமைத்தே ஆயினும்\nஉட்பகை உள்ளதாம் கேடு.",
    transliteration: "Eṭpakavu aṉṉa ciṟumaittē āyiṉum\nuṭpakai uḷḷatām kēṭu.",
    english: "Though it be as small as the split of a sesame seed, inner enmity is full of ruin.",
    tamilUrai: "எள் பிளவின் அளவு சிறியதாகத் தோன்றினாலும், உட்பகை என்பது உள்ளே நிறைந்த அழிவை கொண்டிருக்கும்.",
    altTranslation: "Though small as sesame's split — the inner hate Within itself holds ruin's full weight. — Pope"
  },
  {
    num: 890, chapter: 89,
    tamil: "உடம்பாடு இலாதவர் வாழ்க்கை குடங்கருள்\nபாம்போடு உடனுறைந் தற்று.",
    transliteration: "Uṭampāṭu ilātavar vāḻkkai kuṭaṅkaruḷ\nPāmpōṭu uṭaṉuṟain taṟṟu.",
    english: "Life with those who do not agree with one is like dwelling in a hut with a venomous snake.",
    tamilUrai: "நம்முடன் மனம் ஒத்திசையாதவர்களுடன் வாழ்வது, விஷம் கொண்ட பாம்புடன் சிறிய குடிசையில் வாழ்வதற்கு ஒப்பாகும்.",
    altTranslation: "With those of heart untuned to live, 'tis to abide In narrow hut where venomed serpent lies beside. — Pope"
  },

  // CHAPTER 90 — Not Offending the Great
  {
    num: 891, chapter: 90,
    tamil: "ஆற்றுவார் ஆற்றல் இகழாமை போற்றுவார்\nபோற்றலுள் எல்லாந் தலை.",
    transliteration: "Āṟṟuvār āṟṟal ikaḻāmai pōṟṟuvār\nPōṟṟaluḷ ellān talai.",
    english: "To not despise the power of the mighty is the foremost of all safeguards for one who would keep himself safe.",
    tamilUrai: "பெரிய ஆற்றல் உடையவர்களின் திறனை இகழாமல் இருப்பதே, தன்னைக் காத்துக்கொள்ள விரும்பும் ஒருவனுக்கு எல்லாப் பாதுகாப்புக்களுக்குள்ளும் தலையாய பாதுகாப்பாகும்.",
    altTranslation: "Not to despise the power of those who strong can be, Is chief of safeguards for all that would guarded be. — Pope"
  },
  {
    num: 892, chapter: 90,
    tamil: "பெரியாரைப் பேணாது ஒழுகிற் பெரியாரால்\nபேரா இடும்பை தரும்.",
    transliteration: "Periyāraip pēṇātu oḻukiṟ periyārāl\nPērā iṭumpai tarum.",
    english: "To live without respecting the great will bring unfailing troubles from those great ones themselves.",
    tamilUrai: "பெரியவர்களை மதியாமல் நடந்தால், அந்தப் பெரியவர்களால் நீங்காத துன்பங்கள் வந்து சேரும்.",
    altTranslation: "Slight the great, and from their wrath shall surely come Endless troubles to annoy thy home. — Pope"
  },
  {
    num: 893, chapter: 90,
    tamil: "கெடல்வேண்டின் கேளாது செய்க அடல்வேண்டின்\nஆற்று பவர்கண் இழுக்கு.",
    transliteration: "Keṭalvēṇṭiṉ kēḷātu ceyka aṭalvēṇṭiṉ\nĀṟṟu pavarkaṇ iḻukku.",
    english: "If you would bring ruin upon yourself, then, heedless of advice, offend those of power who can destroy.",
    tamilUrai: "அழிய விரும்பினால், கேளாமல் செய்துவிடு; அழிக்கும் ஆற்றல் உடையவர்களிடம் தவறு செய்வதே அதற்கான வழி.",
    altTranslation: "Wouldst thou ruin? Then without heed, offend The mighty whose anger can thy life unmend. — Pope"
  },
  {
    num: 894, chapter: 90,
    tamil: "கூற்றத்தைக் கையால் விளித்தற்றால் ஆற்றுவார்க்கு\nஆற்றாதார் இன்னா செயல்.",
    transliteration: "Kūṟṟattaik kaiyāl viḷittaṟṟāl āṟṟuvārkku\nāṟṟātār iṉṉā ceyal.",
    english: "For the weak to wrong the strong is like beckoning Death with the hand.",
    tamilUrai: "வலிமை குறைந்தவர்கள், ஆற்றல் உடையவர்களுக்கு தீமை செய்வது, எமனை தம் கையால் அழைத்து அழிவை வருவித்துக்கொள்வதற்கு ஒப்பாகும்.",
    altTranslation: "For the weak to wrong the mighty is but like To beckon Death by hand his wrath to strike. — Pope"
  },
  {
    num: 895, chapter: 90,
    tamil: "யாண்டுச்சென்று யாண்டும் உளராகார் வெந்துப்பின்\nவேந்து செறப்பட் டவர்.",
    transliteration: "Yāṇṭuccceṉṟu yāṇṭum uḷarākār ventuppiṉ\nVēntu ceṟappaṭ ṭavar.",
    english: "Those struck by the wrath of a fierce and powerful king will find no shelter anywhere, in any land.",
    tamilUrai: "கொடிய ஆற்றல் வாய்ந்த மன்னனால் வருந்தப்பட்டவர்கள், எங்கு சென்றாலும், எந்த நாட்டிலும் உயிர் வாழ்ந்து நிலைக்க முடியாது.",
    altTranslation: "Those whom the wrath of mighty king has struck, no land Shall shelter, where e'er they wander, none shall stand. — Pope"
  },
  {
    num: 896, chapter: 90,
    tamil: "எரியான் சுடப்படினும் உய்வுண்டாம் உய்யார்\nபெரியார்ப் பிழைத்தொழுகு வார்.",
    transliteration: "Eriyāṉ cuṭappaṭiṉum uyvuṇṭām uyyār\nPeriyārp piḻaittoḻuku vār.",
    english: "Even one burnt by fire may find escape; but those who offend the great shall not escape.",
    tamilUrai: "நெருப்பினால் சுடப்பட்டவரும் தப்பி உயிர் பிழைக்க முடியலாம்; ஆனால், பெரியவர்களுக்குத் தவறு செய்து நடப்பவர்கள் தப்ப முடியாது.",
    altTranslation: "The fire-burnt may escape, perhaps, but none shall save Who offends the great — their fate is set, no wave. — Pope"
  },
  {
    num: 897, chapter: 90,
    tamil: "வகைமாண்ட வாழ்க்கையும் வான்பொருளும் என்னாம்\nதகைமாண்ட தக்கார் செறின்.",
    transliteration: "Vakaimāṇṭa vāḻkkaiyum vāṉporuḷum eṉṉām\nTakaimāṇṭa takkār ceṟiṉ.",
    english: "Of what avail is a well-ordered life and great wealth if the truly great become angry?",
    tamilUrai: "பண்பு சிறந்த தகுதியுடையவர்கள் சினந்து கொண்டால், சீர் அமைந்த வாழ்க்கையாலும், பெருஞ்செல்வத்தாலும் என்ன பயன்?",
    altTranslation: "What avails ordered life and heaped-up wealth, If the noble-natured turn their wrath in stealth? — Pope"
  },
  {
    num: 898, chapter: 90,
    tamil: "குன்றன்னார் குன்ற மதிப்பின் குடியொடு\nநின்றன்னார் மாய்வர் நிலத்து.",
    transliteration: "Kuṉṟaṉṉār kuṉṟa matippiṉ kuṭiyoṭu\nNiṉṟaṉṉār māyvar nilattu.",
    english: "If those who are mountain-like in stature feel slighted, even kings firm as hills shall perish with their people.",
    tamilUrai: "மலையைப் போன்ற உயர்ந்த அறிஞர்கள் தம்மை அலட்சியம் செய்ததாக நினைத்து சினந்தால், நிலையாய் நிற்கும் மன்னர்களும் தம் குடிகளோடு அழிந்துவிடுவர்.",
    altTranslation: "If those like hills feel slighted by disdain, Even firm-set kings with kin shall die in pain. — Pope"
  },
  {
    num: 899, chapter: 90,
    tamil: "ஏந்திய கொள்கையார் சீறின் இடைமுரிந்து\nவேந்தனும் வேந்து கெடும்.",
    transliteration: "Ēntiya koḷkaiyār cīṟiṉ iṭaimurintu\nVēntaṉum vēntu keṭum.",
    english: "If the wise with lofty principles are provoked, even the king will lose his throne and his kingdom.",
    tamilUrai: "உயர்ந்த கொள்கையுடைய பெரியோர் சினம் கொண்டால், ஆட்சி புரியும் மன்னனும், அவனது ஆட்சி உரிமையும் இடையில் வீழ்ந்து அழிந்துபோகும்.",
    altTranslation: "If those of lofty principles their anger show, The king with kingdom mid-career shall stumble low. — Pope"
  },
  {
    num: 900, chapter: 90,
    tamil: "இறந்தமைந்த சார்புடையர் ஆயினும் உய்யார்\nசிறந்தமைந்த சீரார் செறின்.",
    transliteration: "Iṟantamainta cārpuṭaiyar āyiṉum uyyār\nCiṟantamainta cīrār ceṟiṉ.",
    english: "Though supported by mighty allies, none can escape the wrath of men of surpassing excellence.",
    tamilUrai: "மிகுந்த வலிமையான துணை உடையவராய் இருந்தாலும், சிறப்புடைய உயர்ந்த பெரியார்கள் சினந்தால், அவர்களிடமிருந்து எவரும் தப்ப முடியாது.",
    altTranslation: "Though backed by mighty aids, no man is safe from wrath Of those whose worth transcends on virtue's path. — Pope"
  },

  // CHAPTER 91 — Being Led by Women
  {
    num: 901, chapter: 91,
    tamil: "மனைவிழைவார் மாண்பயன் எய்தார் வினைவிழைவார்\nவேண்டாப் பொருளும் அது.",
    transliteration: "Maṉaiviḻaivār māṇpayaṉ eytār viṉaiviḻaivār\nVēṇṭāp poruḷum atu.",
    english: "Those who are ruled by their wives gain no great benefit; those who pursue duty reject such sway.",
    tamilUrai: "தம் மனைவியின் சொல்லுக்கு அடிமையாய், அவள் விரும்பியபடியே நடப்பவர்கள், பெருமையான பயனை அடைய முடியாது; கடமையை விரும்புபவர்களும் அத்தகைய கீழ்ப்படிவை விரும்ப மாட்டார்கள்.",
    altTranslation: "Who by their wives are led shall gain no great reward; Who duty seek reject such bondage's cord. — Pope"
  },
  {
    num: 902, chapter: 91,
    tamil: "பேணாது பெண்விழைவான் ஆக்கம் பெரியதோர்\nநாணாக நாணுத் தரும்.",
    transliteration: "Pēṇātu peṇviḻaivāṉ ākkam periyatōr\nnāṇāka nāṇut tarum.",
    english: "The wealth of one who neglects his duty, led only by his wife's wish, shall bring him great and lasting shame.",
    tamilUrai: "தன் கடமையை பொருட்படுத்தாமல், மனைவியின் விருப்பத்திற்குக் கட்டுப்பட்டு வாழ்பவனின் செல்வம், அவனுக்கே பெரிய நாணத்தை தொடர்ந்து தரும்.",
    altTranslation: "Who shirks his duty, led by wife alone, Shall find his wealth brings him but shame well shown. — Pope"
  },
  {
    num: 903, chapter: 91,
    tamil: "இல்லாள்கண் தாழ்ந்த இயல்பின்மை எஞ்ஞான்றும்\nநல்லாருள் நாணுத் தரும்.",
    transliteration: "Illāḷkaṇ tāḻnta iyalpiṉmai eññāṉṟum\nNallāruḷ nāṇut tarum.",
    english: "The unseemly submission to his wife's will shall bring lasting shame in the company of good men.",
    tamilUrai: "தன் மனைவிக்குக் கட்டுப்பட்டுப் பணிந்து நடக்கின்ற உயர்வற்ற தன்மை, நல்லவர்கள் நடுவே எப்போதும் நாணத்தை உண்டாக்கும்.",
    altTranslation: "The unworthy bond that bends before the wife's command, Brings lasting shame when 'mid the noble men one stands. — Pope"
  },
  {
    num: 904, chapter: 91,
    tamil: "மனையாளை அஞ்சும் மறுமையி லாளன்\nவினையாண்மை வீறெய்தல் இன்று.",
    transliteration: "Maṉaiyāḷai añcum maṟumaiyi lāḷaṉ\nViṉaiyāṇmai vīṟeytal iṉṟu.",
    english: "The man who lacks hope of the next world and fears his wife will never gain glory in action.",
    tamilUrai: "மறுமையை உணராமல், இம்மையில் மட்டுமே வாழ்வதைக் கருதி, தன் மனைவிக்கு அஞ்சி நடக்கின்றவனுக்கு, செயல்களில் சிறப்பான வெற்றி கிடைக்காது.",
    altTranslation: "Who fears his wife, and holds no hope of heaven hereafter, Finds no glory in his deeds — 'tis but empty laughter. — Pope"
  },
  {
    num: 905, chapter: 91,
    tamil: "இல்லாளை அஞ்சுவான் அஞ்சுமற்று எஞ்ஞான்றும்\nநல்லார்க்கு நன்ற செயல்.",
    transliteration: "Illāḷai añcuvāṉ añcumaṟṟu eññāṉṟum\nNallārkku naṉṟa ceyal.",
    english: "He who fears his wife will always fear to do good to the noble.",
    tamilUrai: "தன் மனைவிக்கு அஞ்சி நடப்பவன், எந்த நேரத்திலும், நல்லவர்களுக்கு நன்மை செய்வதற்கும் அஞ்சி பின்வாங்குவான்.",
    altTranslation: "Who fears his wife shall ever fear to do a good To those of noble mind — that he could do, and would. — Pope"
  },
  {
    num: 906, chapter: 91,
    tamil: "இமையாரின் வாழினும் பாடிலரே இல்லாள்\nஅமையார்தோள் அஞ்சு பவர்.",
    transliteration: "Imaiyāriṉ vāḻiṉum pāṭilarē illāḷ\namaiyārtōḷ añcu pavar.",
    english: "Though they live like the gods, those who dread the bamboo-like shoulders of their wives have no greatness.",
    tamilUrai: "இமைக்காத தேவர்களைப் போல சிறப்பாய் வாழ்ந்தாலும், தம் மனைவியின் மூங்கில் போன்ற தோள்களுக்கு அஞ்சுபவர்கள், உண்மையான பெருமை அற்றவர்களே.",
    altTranslation: "Though they live as gods who never wink, they stand Poor, who dread the bamboo shoulders of their wife's hand. — Pope"
  },
  {
    num: 907, chapter: 91,
    tamil: "பெண்ணேவல் செய்தொழுகும் ஆண்மையின் நாணுடைப்\nபெண்ணே பெருமை உடைத்து.",
    transliteration: "Peṇṇēval ceytoḻukum āṇmaiyiṉ nāṇuṭaip\npeṇṇē perumai uṭaittu.",
    english: "Better is the modest woman than the manhood that lives under a woman's command.",
    tamilUrai: "பெண்ணின் ஏவலுக்கு அடிபணிந்து வாழும் ஆண்மை நிலையைவிட, நாணத்துடன் ஒழுகுகின்ற பெண்ணின் நிலையே பெருமையுடையது.",
    altTranslation: "More noble than the manhood led by woman's rule, Is woman's own high bashfulness of virtue's school. — Pope"
  },
  {
    num: 908, chapter: 91,
    tamil: "நட்டார் குறைமுடியார் நன்றாற்றார் நன்னுதலாள்\nபெட்டாங்கு ஒழுகு பவர்.",
    transliteration: "Naṭṭār kuṟaimuṭiyār naṉṟāṟṟār naṉnutalāḷ\nPeṭṭāṅku oḻuku pavar.",
    english: "Those who live under the will of their fair-browed wives can neither help their friends nor do good deeds.",
    tamilUrai: "அழகிய நெற்றியுடைய தம் மனைவியின் விருப்பப்படியே வாழ்கிறவர்கள், தம் நண்பர்களுக்கு குறை தீர்க்கவோ, நல்ல செயல்களைச் செய்யவோ இயலாதவர்களாய் ஆகிவிடுவர்.",
    altTranslation: "They who live but by their fair-browed wife's decree, Can help no friend, nor do good deeds, we see. — Pope"
  },
  {
    num: 909, chapter: 91,
    tamil: "அறவினையும் ஆன்ற பொருளும் பிறவினையும்\nபெண்ஏவல் செய்வார்கண் இல்.",
    transliteration: "Aṟaviṉaiyum āṉṟa poruḷum piṟaviṉaiyum\nPeṇēval ceyvārkaṇ il.",
    english: "Virtue, worthy wealth, and noble achievement are not found in those who obey their wives' commands.",
    tamilUrai: "அறச்செயல்கள், சிறப்பான செல்வம், பிற நற்செயல்கள் ஆகியன, தம் மனைவியின் ஏவலுக்குப் பணிந்து நடப்பவர்களிடம் காணப்படுவதில்லை.",
    altTranslation: "Virtue, worthy wealth, and noble deeds unite, Not with those who bow to their wife's command of might. — Pope"
  },
  {
    num: 910, chapter: 91,
    tamil: "எண்சேர்ந்த நெஞ்சத் திடனுடையார்க்கு எஞ்ஞான்றும்\nபெண்சேர்ந்தாம் பேதைமை இல்.",
    transliteration: "Eṇcērnta neñcat tiṭaṉuṭaiyārkku eññāṉṟum\npeṇcērntām pētaimai il.",
    english: "Those of broad and discerning mind are never prey to the folly of being led by women.",
    tamilUrai: "பரந்த அறிவும் சிந்தனையும் உடைய விரிந்த மனம் கொண்டவர்கள், பெண்ணுக்கு அடிமையாய்ப் பேதைமையை அடையும் நிலை எப்போதும் வராது.",
    altTranslation: "Those of broad mind and thought's wide range are free From folly of submission 'neath a wife's decree. — Pope"
  },

  // CHAPTER 92 — Wanton Women
  {
    num: 911, chapter: 92,
    tamil: "அன்பின் விழையார் பொருள்விழையும் ஆய்தொடியார்\nஇன்சொல் இழுக்குத் தரும்.",
    transliteration: "Aṉpiṉ viḻaiyār poruḷviḻaiyum āytoṭiyār\niṉcol iḻukkut tarum.",
    english: "The honeyed words of women who desire only wealth, not love, will bring ruin.",
    tamilUrai: "உண்மையான அன்பின் அடிப்படையில் விரும்பாமல், பொருளை மட்டும் விரும்புகின்ற வேசைப் பெண்டிரின் இனிமையான சொற்கள், அவர்களை நம்புவோருக்கு இறுதியில் இழிவை தரும்.",
    altTranslation: "The honeyed speech of those who love not, craving pelf, Will bring but ruin to the man who trusts himself. — Pope"
  },
  {
    num: 912, chapter: 92,
    tamil: "பயன்தூக்கிப் பண்புரைக்கும் பண்பின் மகளிர்\nநயன்தூக்கி நள்ளா விடல்.",
    transliteration: "Payaṉtūkkip paṇpuraikkum paṇpiṉ makaḷir\nnayaṉtūkki naḷḷā viṭal.",
    english: "Weigh well the purpose and reject the company of women who flatter for gain rather than with sincerity.",
    tamilUrai: "தமக்கு ஏற்படும் பயனை மட்டும் எடைபோட்டு, அதற்காக நற்பண்பை போலியாய்ப் பாராட்டும் பண்பற்ற விலைமாதரை, நாம் எதிர்கொள்ளும் பலனையும் எடைபோட்டு, அவர்களுடன் நெருங்காமல் விடுதல் நலம்.",
    altTranslation: "Weigh well the end, and shun the fellowship Of those whose sham virtue for gain will slip. — Pope"
  },
  {
    num: 913, chapter: 92,
    tamil: "பொருட்பெண்டிர் பொய்ம்மை முயக்கம் இருட்டறையில்\nஏதில் பிணந்தழீஇ அற்று.",
    transliteration: "Poruṭpeṇṭir poymmai muyakkam iruṭṭaṟaiyil\nĒtil piṇantaḻīi aṟṟu.",
    english: "The feigned embrace of wanton women for wealth is like embracing a strange corpse in a dark room.",
    tamilUrai: "பொருளை மட்டும் குறிக்கோளாய் கொண்ட பெண்டிரின் பொய்யான தழுவல், இருண்ட அறையில் அந்நிய பிணத்தை தழுவுவதற்கு ஒப்பாகும்.",
    altTranslation: "The feigned embrace of wanton for her gain, Is as to clasp a strange corpse in darkened lane. — Pope"
  },
  {
    num: 914, chapter: 92,
    tamil: "பொருட்பொருளார் புன்னலந் தோயார் அருட்பொருள்\nஆயும் அறிவி னவர்.",
    transliteration: "Poruṭporuḷār puṉṉalan tōyār aruṭporuḷ\nĀyum aṟivi ṉavar.",
    english: "Those who seek wisdom through grace will not touch the low charms of women who value only wealth.",
    tamilUrai: "அருள் என்னும் மேலான பொருளை ஆராயும் ஞானம் படைத்தவர்கள், பொருளே உடைமையாய் வாழ்கின்ற மகளிரின் தாழ்ந்த நலத்தை நாடார்.",
    altTranslation: "The wise who seek the treasure of grace divine, Will ne'er touch charms where gain alone holds sign. — Pope"
  },
  {
    num: 915, chapter: 92,
    tamil: "பொதுநலத்தார் புன்னலம் தோயார் மதிநலத்தின்\nமாண்ட அறிவி னவர்.",
    transliteration: "Potunalattār puṉnalam tōyār matinalattiṉ\nMāṇṭa aṟivi ṉavar.",
    english: "Men of fine wisdom and nobility will not seek the low charms of women who are common to all.",
    tamilUrai: "நுண்ணிய மதி நலமும், மேலான அறிவும் பெற்ற பண்பாளர்கள், எல்லோருக்கும் பொதுவாய் இருக்கும் பெண்டிரின் தாழ்ந்த நலத்தை நாடமாட்டார்கள்.",
    altTranslation: "Men nobly wise, whose mind is keen and bright, Touch not the common charms of woman's plight. — Pope"
  },
  {
    num: 916, chapter: 92,
    tamil: "தந்நலம் பாரிப்பார் தோயார் தகைசெருக்கிப்\nபுன்னலம் பாரிப்பார் தோள்.",
    transliteration: "Tannalam pārippār tōyār takaicerukkip\nPuṉnalam pārippār tōḷ.",
    english: "Those who cherish their own nobility will not touch the shoulders of women who, in pride, spread only vulgar charms.",
    tamilUrai: "தம் உயர் தன்மையை காத்துப் பரப்ப விரும்புவோர், தம் அழகில் இறுமாப்புக் கொண்டு, இழிந்த தன்மையில் பழகும் மகளிரின் தோளை நாட மாட்டார்கள்.",
    altTranslation: "Men who would guard their own nobility of name, Shun those whose proud low charms lie at claim. — Pope"
  },
  {
    num: 917, chapter: 92,
    tamil: "நிறைநெஞ்சம் இல்லவர் தோய்வர் பிறநெஞ்சிற்\nபேணிப் புணர்பவர் தோள்.",
    transliteration: "Niṟaineñcam illavar tōyvar piṟaneñciṟ\nPēṇip puṇarpavar tōḷ.",
    english: "Only men without self-control will embrace the shoulders of women who love others but feign affection.",
    tamilUrai: "தம்மைக் கட்டுப்படுத்த இயலாமையுள்ளவர்களே, உள்ளத்தில் வேறு ஒருவரை வைத்துக்கொண்டு, இவர்கள் மேலாய்ப் பொய்யன்பு காட்டும் மகளிரின் தோளை தழுவுவர்.",
    altTranslation: "Only the weak of self-restraint will cling to those Whose hearts on others dwell, while charm they false disclose. — Pope"
  },
  {
    num: 918, chapter: 92,
    tamil: "ஆயும் அறிவினர் அல்லார்க்கு அணங்கென்ப\nமாய மகளிர் முயக்கு.",
    transliteration: "Āyum aṟiviṉar allārkku aṇaṅkeṉpa\nMāya makaḷir muyakku.",
    english: "The embrace of deceitful women is called a demon's snare for those who lack discerning wisdom.",
    tamilUrai: "ஆராய்ந்து உணரும் அறிவு இல்லாதவர்களுக்கு, மாயப் பெண்டிரின் தழுவல், மோகினிப் பேய் கொடுக்கும் வருத்தம் என்று சொல்லப்படும்.",
    altTranslation: "A demon's snare the deceit-wove arms embrace Of wanton women to the fool without grace. — Pope"
  },
  {
    num: 919, chapter: 92,
    tamil: "வரைவிலா மாணிழையார் மென்தோள் புரையிலாப்\nபூரியர்கள் ஆழும் அளறு.",
    transliteration: "Varaivilā māṇiḻaiyār meṉtōḷ puraiyilāp\nPūriyarkaḷ āḻum aḷaṟu.",
    english: "The soft shoulders of adorned women, without restraint, are the hell into which base men sink.",
    tamilUrai: "எவ்வித கட்டுப்பாடும் இல்லாத, அணிகலன்களுடன் ஒப்பனை செய்த பொது மகளிரின் மென்மையான தோள்கள், இழிந்த பண்பில்லாதவர்கள் ஆழ்ந்து தவிக்கும் நரகம்.",
    altTranslation: "The unrestrained adorned one's soft shoulders fair, Are hell where worthless men sink in despair. — Pope"
  },
  {
    num: 920, chapter: 92,
    tamil: "இருமனப் பெண்டிரும் கள்ளும் கவறும்\nதிருநீக்கப் பட்டார் தொடர்பு.",
    transliteration: "Irumaṉap peṇṭirum kaḷḷum kavaṟum\nTirunīkkap paṭṭār toṭarpu.",
    english: "Double-hearted women, strong drink, and gambling — these three are the companions of those whom fortune has forsaken.",
    tamilUrai: "இருமனம் கொண்ட விலைமகளிர், கள் (மது), சூதாட்டம் — இந்த மூன்றும், திருமகள் (செல்வம்) தன்னை விட்டு நீங்கியவர்களுக்கே நட்பாய் அமையும்.",
    altTranslation: "Double-hearted women, strong drink, and gambling's sway — These three alone with fortune-forsaken stay. — Pope"
  },

  // CHAPTER 93 — Not Drinking Palm-Wine
  {
    num: 921, chapter: 93,
    tamil: "உட்கப் படாஅர் ஒளியிழப்பர் எஞ்ஞான்றும்\nகட்காதல் கொண்டொழுகு வார்.",
    transliteration: "Uṭkap paṭāar oḷiyiḻappar eññāṉṟum\nKaṭkātal koṇṭoḻuku vār.",
    english: "Those who love drink are never feared by their foes and lose their dignity forever.",
    tamilUrai: "மது அருந்துதலில் விருப்பம் கொண்டு வாழ்பவர்கள், தம் பகைவர்களால் அஞ்சத்தக்கவர்களாக ஆகமாட்டார்கள்; என்றும் தம் சிறப்பான தகுதியையும் இழந்து நிற்பர்.",
    altTranslation: "Unfeared of foes, and every day their glory lost, Are those whom love of drink hath ever crossed. — Pope"
  },
  {
    num: 922, chapter: 93,
    tamil: "உண்ணற்க கள்ளை உணில்உண்க சான்றோரான்\nஎண்ணப் படவேண்டா தார்.",
    transliteration: "Uṇṇaṟka kaḷḷai uṇilual uṇka cāṉṟōrāṉ\nEṇṇap paṭavēṇṭā tār.",
    english: "Drink no drink; if any must, let only those drink who care not to be counted among the wise.",
    tamilUrai: "மதுவை உண்ணாமல் இருக்க வேண்டும்; உண்ட வேண்டுமானால், சான்றோர்களால் மதிக்கப்பட விரும்பாதவர்கள் மட்டுமே உண்ணட்டும்.",
    altTranslation: "Drink not! If drink you must, let those drink too Who care not to be reckoned wise by view. — Pope"
  },
  {
    num: 923, chapter: 93,
    tamil: "ஈன்றாள் முகத்தேயும் இன்னாதால் என்மற்று\nசான்றோர் முகத்துக் களி.",
    transliteration: "Īṉṟāḷ mukattēyum iṉṉātāl eṉmaṟṟu\nCāṉṟōr mukattuk kaḷi.",
    english: "Drunkenness is painful even in the sight of one's own mother; how much worse is it in the sight of the wise?",
    tamilUrai: "தான் பெற்ற தாயின் முன்னே கூட மது வெறி இருப்பது துன்பம் தரும்; அப்படியிருக்க, சான்றோர்களின் முன் மது வெறி கொண்டு செல்வது எத்தகைய இழிவு?",
    altTranslation: "Painful to mother's eye is drunkard's shame; How then before the wise — 'tis worse by name. — Pope"
  },
  {
    num: 924, chapter: 93,
    tamil: "நாண்என்னும் நல்லாள் புறங்கொடுக்கும் கள்என்னும்\nபேணாப் பெருங்குற்றத் தார்க்கு.",
    transliteration: "Nāṇeṉṉum nallāḷ puṟaṅkoṭukkum kaḷeṉṉum\npēṇāp peruṅkuṟṟat tārkku.",
    english: "Modesty, that virtuous maiden, turns her back on those guilty of the great fault called drink.",
    tamilUrai: "மதுவை உட்கொள்ளும் பெருங்குற்றம் செய்பவர்களை, நாணம் என்கிற நல்ல பெண் பார்க்க விரும்பாமல் முதுகு காட்டி விலகி நிற்பாள்.",
    altTranslation: "The noble maid called Modesty doth turn and flee From those by drink's great fault so shamelessly. — Pope"
  },
  {
    num: 925, chapter: 93,
    tamil: "கையறி யாமை உடைத்தே பொருள்கொடுத்து\nமெய்யறி யாமை கொளல்.",
    transliteration: "Kaiyaṟi yāmai uṭaittē poruḷkoṭuttu\nMeyyaṟi yāmai koḻal.",
    english: "To buy unconsciousness of body at the cost of wealth is the folly of foolish action.",
    tamilUrai: "பொருளை கொடுத்துவிட்டு, உடலுணர்வை இழக்கக் கூடிய மதுவெறியை வாங்கிக் கொள்வது, செய்ய வேண்டிய செயலை அறியாத அறியாமையின் கொடிய விளைவு.",
    altTranslation: "To give one's wealth and buy a body senseless sold, Is folly of deeds that cannot be foretold. — Pope"
  },
  {
    num: 926, chapter: 93,
    tamil: "துஞ்சினார் செத்தாரின் வேறல்லர் எஞ்ஞான்றும்\nநஞ்சுண்பார் கள்ளுண் பவர்.",
    transliteration: "Tuñciṉār cettāriṉ vēṟallar eññāṉṟum\nNañcuṇpār kaḷḷuṇ pavar.",
    english: "Those who drink are no different from the dead sleeping; drinkers are always poison-takers.",
    tamilUrai: "மது அருந்துகிறவர்கள் என்றென்றைக்கும் நஞ்சை உண்பவர்களே; தூங்கிக் கிடப்பவர்களையும், இறந்தவர்களையும் பிரித்து அறிய இயலாதது போலவே, கள் உண்டு மயங்கி கிடப்போரையும் பிரித்து அறிய முடியாது.",
    altTranslation: "The sleeper and the dead — no difference seen; So drinkers are as poison-swallowers, I ween. — Pope"
  },
  {
    num: 927, chapter: 93,
    tamil: "உள்ளொற்றி உள்ளூர் நகப்படுவர் எஞ்ஞான்றும்\nகள்ளொற்றிக் கண்சாய் பவர்.",
    transliteration: "Uḷḷoṟṟi uḷḷūr nakappaṭuvar eññāṉṟum\nkaḷḷoṟṟik kaṇcāy pavar.",
    english: "Those who secretly drink and then stagger will be watched and mocked by their neighbours.",
    tamilUrai: "மறைவாய் மது குடித்து, மயக்கத்தினால் கண்சாய்ந்து கிடப்பவர்களை, அவரது ஊர் மக்கள் அதை உற்றுக் கவனித்து எப்போதும் ஏளனமாய் சிரிப்பர்.",
    altTranslation: "Who secretly drink and stagger with heavy eye, Shall be watched and mocked by neighbours standing nigh. — Pope"
  },
  {
    num: 928, chapter: 93,
    tamil: "களித்தறியேன் என்பது கைவிடுக நெஞ்சத்து\nஒளித்ததூஉம் ஆங்கே மிகும்.",
    transliteration: "Kaḷittaṟiyēṉ eṉpatu kaiviṭuka neñcattu\noḷittatūum āṅkē mikum.",
    english: "Let the drunkard cease to say 'I have never been drunk'; the secret he hides in his heart will come out in full as he drinks.",
    tamilUrai: "\"நான் மது அருந்தி மயங்கியதே இல்லை\" என்று சொல்வதை விட்டுவிடட்டும்; மனதில் மறைத்து வைத்த செய்தியும், மதுவெறியில் வெளிப்பட்டு பெருகிவிடும்.",
    altTranslation: "Let drunkards cease to say 'I ne'er was drunk'; what heart Hides deep will come to light when drinking's dart. — Pope"
  },
  {
    num: 929, chapter: 93,
    tamil: "களித்தானைக் காரணம் காட்டுதல் கீழ்நீர்க்\nகுளித்தானைத் தீத்துரீஇ அற்று.",
    transliteration: "Kaḷittāṉaik kāraṇam kāṭṭutal kīḻnīrk\nkuḷittāṉait tīttturīi aṟṟu.",
    english: "To reason with a drunkard is like searching for a drowned man with a torch under the water.",
    tamilUrai: "மதுவெறி கொண்டு கிடப்பவனுக்கு, காரண காரியங்களை விளக்கி பேசுவது, நீருக்குள் மூழ்கிய ஒருவனை நெருப்புத்தீயை கொளுத்திக் கொண்டு தேடுவதற்கு ஒப்பானது.",
    altTranslation: "To reason with the drunkard is as vain As with a torch to seek a drowned man's remain. — Pope"
  },
  {
    num: 930, chapter: 93,
    tamil: "கள்ளுண்ணாப் போழ்திற் களித்தானைக் காணுங்கால்\nஉள்ளான்கொல் உண்டதன் சோர்வு.",
    transliteration: "Kaḷḷuṇṇāp pōḻtiṟ kaḷittāṉaik kāṇuṅkāl\nUḷḷāṉkol uṇṭataṉ cōrvu.",
    english: "Would that the drinker, when sober, saw the sorry state of another who is drunk — would he then not realise his own?",
    tamilUrai: "மதுவெறி கொள்ளாத நேரத்தில், மது அருந்தி மயங்கியிருக்கும் இன்னொரு மனிதனின் நிலையைப் பார்க்கும்போதாவது, தான் மதுவெறியின் சோர்வில் அமிழ்ந்து கிடப்பதை நினைத்துப் பாராமலா போவான்?",
    altTranslation: "When sober, if the drunkard sees another's shame, Can he not see his own in that sad frame? — Pope"
  },

  // CHAPTER 94 — Gambling
  {
    num: 931, chapter: 94,
    tamil: "வேண்டற்க வென்றிடினும் சூதினை வென்றதூஉம்\nதூண்டிற்பொன் மீன்விழுங்கி அற்று.",
    transliteration: "Vēṇṭaṟka veṉṟiṭiṉum cūtiṉai veṉṟatūum\nTūṇṭiṟpoṉ mīṉviḻuṅki aṟṟu.",
    english: "Do not gamble, even if you win; for winning is like the fish swallowing the bait of gold on a hook.",
    tamilUrai: "வென்றாலும் சூதாடுதலை விரும்ப வேண்டாம்; ஏனெனில், சூதாட்டத்தில் வெற்றி பெறுவதும் — தூண்டிலின் பொன்னிற தூண்டிலை (இரையை) விழுங்கும் மீனின் நிலைக்கே ஒப்பானது.",
    altTranslation: "Though winning, gambling shun; for gain therefrom Is as the fish that swallows golden bait's own doom. — Pope"
  },
  {
    num: 932, chapter: 94,
    tamil: "ஒன்றெய்தி நூறிழக்கும் சூதர்க்கும் உண்டாங்கோ\nநன்றெய்தி வாழ்வதோர் ஆறு.",
    transliteration: "Oṉṟeyti nūṟiḻakkum cūtarkkum uṇṭāṅkō\nnaṉṟeyti vāḻvatōr āṟu.",
    english: "Is there any way for gamblers — who win one and lose a hundred — to attain a good life?",
    tamilUrai: "ஒரு பொருளை வென்றதற்காக, நூறு பொருள்களை இழக்கக் கூடிய சூதாடிகளுக்கு, நன்மை பெற்று வாழ்வதற்கான வழி ஏதேனும் இருக்குமா?",
    altTranslation: "Is there a way to live in good estate For those who win one, lose a hundred straight? — Pope"
  },
  {
    num: 933, chapter: 94,
    tamil: "உருளாயம் ஓவாது கூறின் பொருளாயம்\nபோஒய்ப் புறமே படும்.",
    transliteration: "Uruḷāyam ōvātu kūṟiṉ poruḷāyam\nPōoyp puṟamē paṭum.",
    english: "If a man ceaselessly says 'the dice rolled!', his wealth will drift away from him and turn its back.",
    tamilUrai: "உருண்டோடுகின்ற சூதாட்ட தாய (பகடை)யின் பெயரையே இடைவிடாமல் உச்சரித்து நடப்பவனின் செல்வம், அவனை விட்டு நீங்கி, வேறு பக்கம் போய்விடும்.",
    altTranslation: "Who ceaselessly the rolling dice invokes each day, Shall see his riches turn their back and pass away. — Pope"
  },
  {
    num: 934, chapter: 94,
    tamil: "சிறுமை பலசெய்து சீரழிக்கும் சூதின்\nவறுமை தருவதொன்று இல்.",
    transliteration: "Ciṟumai palaceytu cīraḻikkum cūtiṉ\nvaṟumai taruvatoṉṟu il.",
    english: "Nothing else brings so much poverty as gambling, which causes many evils and destroys one's glory.",
    tamilUrai: "பல தீமைகளைச் செய்து, ஒருவனது சிறப்பை அழித்துவிடும் சூதாட்டத்தை போல, அத்தனை கடுமையான வறுமையை தரும் வேறு எதுவும் இல்லை.",
    altTranslation: "No cause of poverty like gambling's blight — So many evils, so much glory's flight. — Pope"
  },
  {
    num: 935, chapter: 94,
    tamil: "கவறும் கழகமும் கையும் தருக்கி\nஇவறியார் இல்லாகி யார்.",
    transliteration: "Kavaṟum kaḻakamum kaiyum tarukki\niVaṟiyār illāki yār.",
    english: "Those who prize the dice, the gaming-house, and the gambler's hand are left with nothing.",
    tamilUrai: "சூதாடு காய்களையும், சூதாட்ட மேடையையும், சூதாட்டக் கை-ஆட்டத்தையும் பெருமையாக மதித்து விட்டு அவற்றைப் பற்றிக் கொண்டவர்கள், எல்லாவற்றையும் இழந்து வெறுமையாகி விட்டார்கள்.",
    altTranslation: "Who prize the dice, the gaming-hall, the cheating hand, Are left with nothing — ruined, they do stand. — Pope"
  },
  {
    num: 936, chapter: 94,
    tamil: "அகடாரார் அல்லல் உழப்பர்சூ தென்னும்\nமுகடியான் மூடப்பட் டார்.",
    transliteration: "Akaṭārār allal uḻapparcū teṉṉum\nMukaṭiyāṉ mūṭappaṭ ṭār.",
    english: "Those gripped by the demon of gambling go hungry and suffer untold miseries.",
    tamilUrai: "சூது என்னும் மூதேவியின் பிடியில் ஆட்பட்டவர்கள், வயிறு நிரம்ப உணவு உண்ண இயலாமல் துன்பத்தில் உழன்று வாடுவர்.",
    altTranslation: "Those caught in gambling's demon-grip shall starve And writhe in woes that deepen, carve on carve. — Pope"
  },
  {
    num: 937, chapter: 94,
    tamil: "பழகிய செல்வமும் பண்பும் கெடுக்கும்\nகழகத்துக் காலை புகின்.",
    transliteration: "Paḻakiya celvamum paṇpum keṭukkum\nkaḻakattuk kālai pukiṉ.",
    english: "If a man spends his days at the gaming-house, his inherited wealth and his character will both be destroyed.",
    tamilUrai: "ஒருவன் தன் நாட்களைச் சூதாட்டக் களத்திலேயே கழிக்கத் தொடங்கினால், அவன் முன்னோரிடமிருந்து வந்த செல்வம் மற்றும் அவனது நற்பண்பு — இரண்டும் ஒருசேர அழியும்.",
    altTranslation: "Ancestral wealth and character alike decay, When at the gaming-house one spends his day. — Pope"
  },
  {
    num: 938, chapter: 94,
    tamil: "பொருள்கெடுத்துப் பொய்மேற் கொளீஇ அருள்கெடுத்து\nஅல்லல் உழப்பிக்கும் சூது.",
    transliteration: "Poruḷkeṭuttup poymēṟ koḷīi aruḷkeṭuttu\nallal uḻappikkum cūtu.",
    english: "Gambling destroys wealth, breeds falsehood, banishes grace, and torments a man with grief.",
    tamilUrai: "சூதாட்டம் செல்வத்தை அழித்து, பொய் சொல்லும் பழக்கத்தைக் கொடுத்து, அருளை இழக்கச் செய்து, இறுதியில் தாங்கவொண்ணாத துயரத்தில் ஆழ்த்திவிடும்.",
    altTranslation: "Wealth lost, lies ruling, grace destroyed, distress enforced — Such is the harvest gambling hath always endorsed. — Pope"
  },
  {
    num: 939, chapter: 94,
    tamil: "உடைசெல்வம் ஊண்ஒளி கல்விஎன்று ஐந்தும்\nஅடையாவாம் ஆயங் கொளின்.",
    transliteration: "Uṭaicelvam ūṇoḷi kalvieṉṟu aintum\naṭaiyāvām āyaṅ koḻiṉ.",
    english: "The five — clothing, wealth, food, fame, and learning — all fail those who take to gambling.",
    tamilUrai: "அணிய ஆடை, செல்வம், உண்ணும் உணவு, புகழ், கல்வி — ஆகிய இவை ஐந்தும், சூதாட்டத்தை தம் வாழ்க்கையாய் ஏற்றுக் கொண்டவர்களை எப்போதும் நெருங்காது.",
    altTranslation: "Raiment, wealth, food, fame, and learning — these five Fail him who takes to gambling, and leaves him to dive. — Pope"
  },
  {
    num: 940, chapter: 94,
    tamil: "இழத்தொறூஉம் காதலிக்கும் சூதேபோல் துன்பம்\nஉழத்தொறூஉம் காதற்று உயிர்.",
    transliteration: "Iḻattoṟūum kātalikkum cūtēpōl tuṉpam\nuḻattoṟūum kātaṟṟu uyir.",
    english: "As gamblers, despite every loss, love the game more and more, so the soul clings to life more despite every grief.",
    tamilUrai: "தோல்வி அடைந்த ஒவ்வொரு முறையிலும் மேலும் விரும்பி ஈடுபடச் செய்யும் சூதாட்டம் போல — துன்பங்களை ஒவ்வொரு முறை அனுபவித்தாலும், உயிர் மேலும் மேலும் உடலையே பற்றிப் போகிறது.",
    altTranslation: "As gamblers, losing still, the game more deeply love, So soul clings close to life, as griefs more deeply move. — Pope"
  },

  // CHAPTER 95 — Medicine
  {
    num: 941, chapter: 95,
    tamil: "மிகினும் குறையினும் நோய்செய்யும் நூலோர்\nவளிமுதலா எண்ணிய மூன்று.",
    transliteration: "Mikiṉum kuṟaiyiṉum nōyceyyum nūlōr\nvaḷimutalā eṇṇiya mūṉṟu.",
    english: "Either in excess or in deficiency, the three humours described by the learned — beginning with wind — cause disease.",
    tamilUrai: "மருத்துவ நூலாசிரியர்கள் குறிப்பிட்டுள்ள வாதம், பித்தம், கபம் என்னும் மூன்று நிலைகள், அளவு கூடினாலும் குறைந்தாலும் நோயை உண்டாக்கும்.",
    altTranslation: "Too much, too little — the three humours known by lore, Beginning with wind, bring sickness to the core. — Pope"
  },
  {
    num: 942, chapter: 95,
    tamil: "மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது\nஅற்றது போற்றி உணின்.",
    transliteration: "Maruntena vēṇṭāvām yākkaikku aruntiyatu\naṟṟatu pōṟṟi uṇiṉ.",
    english: "If one takes food after the last meal has digested, no medicine is needed for the body.",
    tamilUrai: "முன்பு உண்ட உணவு உடலில் சீரணமான பின்னரே, மேலும் உணவு உண்டால், உடலுக்கு மருந்து தேவையேயில்லை.",
    altTranslation: "If only food be ta'en when last is fully gone, No medicine the body shall require thereon. — Pope"
  },
  {
    num: 943, chapter: 95,
    tamil: "அற்றால் அறவறிந்து உண்க அஃதுடம்பு\nபெற்றான் நெடிதுய்க்கும் ஆறு.",
    transliteration: "Aṟṟāl aṟavaṟintu uṇka aḵtuṭampu\nPeṟṟāṉ neṭituykkum āṟu.",
    english: "After digestion, eat according to measure; this is the way for one with a body to prolong its life.",
    tamilUrai: "சீரணமான பின், அளவோடு உண்க; உடல் உடையவனாய் ஒருவன் தன் வாழ்வை நீண்ட காலம் சீராக நடத்துவதற்கான வழி அது.",
    altTranslation: "When food is digested, eat in measure true; That's the way the body long to guide. — Pope"
  },
  {
    num: 944, chapter: 95,
    tamil: "அற்றது அறிந்து கடைப்பிடித்து மாறல்ல\nதுய்க்க துவரப் பசித்து.",
    transliteration: "Aṟṟatu aṟintu kaṭaippiṭittu māṟalla\nTuykka tuvarap pacittu.",
    english: "When the previous meal has digested and when hunger is keen, eat what is agreeable.",
    tamilUrai: "உண்ட உணவு சீரணமாயிற்று என்பதை உணர்ந்து, வயிறு முற்றிலும் பசிக்கும் வரை காத்திருந்து, பின்னர், முரணானவை இல்லாத இனிமையான உணவை உண்க.",
    altTranslation: "When past meal's gone, and hunger keen, then eat Of wholesome foods, agreeable and meet. — Pope"
  },
  {
    num: 945, chapter: 95,
    tamil: "மாறுபாடு இல்லாத உண்டி மறுத்துண்ணின்\nஊறுபாடு இல்லை உயிர்க்கு.",
    transliteration: "Māṟupāṭu illāta uṇṭi maṟuttuṇṇiṉ\nŪṟupāṭu illai uyirkku.",
    english: "Eat with moderation of food that is without contradiction, and there will be no distress to the body.",
    tamilUrai: "முரண்பாடு இல்லாத உணவை, பசித்த அளவுக்கு மட்டுமே உண்டால், உடலுக்கு எந்தத் துன்பமும் ஏற்படாது.",
    altTranslation: "Foods without contradiction, in moderation ta'en, Give to the body naught of pain or strain. — Pope"
  },
  {
    num: 946, chapter: 95,
    tamil: "இழிவறிந்து உண்பான்கண் இன்பம்போல் நிற்கும்\nகழிபேர் இரையான்கண் நோய்.",
    transliteration: "Iḻivaṟintu uṇpāṉkaṇ iṉpampōl niṟkum\nKaḻipēr iraiyāṉkaṇ nōy.",
    english: "Health stays with the temperate eater as pleasure stays; disease stays with the glutton.",
    tamilUrai: "அளவறிந்து உண்பவனிடம் இன்பம் தங்கி நிற்பது போல, அளவுக்கு அதிகமாய் உண்கின்றவனிடம் நோய் தொடர்ந்து நின்று துன்புறுத்தும்.",
    altTranslation: "With the temperate, joy doth dwell each day; With gluttons, sickness never turns away. — Pope"
  },
  {
    num: 947, chapter: 95,
    tamil: "தீயள வன்றித் தெரியான் பெரிதுண்ணின்\nநோயள வின்றிப் படும்.",
    transliteration: "Tīyaḷa vaṉṟit teriyāṉ peritiuṇṇiṉ\nnōyaḷa viṉṟip paṭum.",
    english: "He who eats beyond the measure of the body's digestive fire shall suffer illness without measure.",
    tamilUrai: "உடலின் செரிமான நெருப்பின் அளவை அறியாது, அளவுக்கு மேல் பெருமளவு உண்பவனுக்கு, எல்லை கடந்த நோய்கள் தோன்றி வருத்தும்.",
    altTranslation: "Who eats beyond the body's fiery measure brings On him diseases without measure's rings. — Pope"
  },
  {
    num: 948, chapter: 95,
    tamil: "நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும்\nவாய்நாடி வாய்ப்பச் செயல்.",
    transliteration: "Nōynāṭi nōymutal nāṭi atutaṇikkum\nvāynāṭi vāyppac ceyal.",
    english: "Investigate the disease, its cause, and the right means to cure — and then apply the remedy aptly.",
    tamilUrai: "நோயை ஆராய்ந்து, அந்த நோய்க்கான காரணத்தையும் ஆராய்ந்து, பின் அதனை குறைக்கும் மருத்துவ முறையை ஆராய்ந்து, பொருத்தமான வகையில் மருத்துவம் செய்ய வேண்டும்.",
    altTranslation: "Examine the disease, its cause, the cure; then wisely, Apply the remedy thus ascertained precisely. — Pope"
  },
  {
    num: 949, chapter: 95,
    tamil: "உற்றான் அளவும் பிணியளவும் காலமும்\nகற்றான் கருதிச் செயல்.",
    transliteration: "Uṟṟāṉ aḷavum piṇiyaḷavum kālamum\nKaṟṟāṉ karutic ceyal.",
    english: "A learned physician should prescribe, after considering the patient's constitution, the severity of the disease, and the time.",
    tamilUrai: "மருத்துவம் கற்றவர், நோய்வாய்ப்பட்டவரின் உடலியல்பு, நோயின் தீவிரம், காலம் — ஆகிய மூன்றையும் ஆராய்ந்து, பொருத்தமான மருத்துவத்தைச் செய்ய வேண்டும்.",
    altTranslation: "The patient's nature, sickness' grade, the time's demand — Examining, learned physician's remedies command. — Pope"
  },
  {
    num: 950, chapter: 95,
    tamil: "உற்றவன் தீர்ப்பான் மருந்துழைச் செல்வானென்று\nஅப்பால் நாற்கூற்றே மருந்து.",
    transliteration: "Uṟṟavaṉ tīrppāṉ maruntuḻaic celvāṉeṉṟu\nappāl nāṟkūṟṟē maruntu.",
    english: "Medicine, aside from four elements, consists in the patient, the physician, the medicine, and the attendant.",
    tamilUrai: "நோய்வாய்ப்பட்டவன், நோயைத் தீர்க்கும் மருத்துவன், மருந்து, மருந்தை அளிக்கும் உதவியாளன் — ஆகிய இந்த நான்கின் கூட்டமே மருத்துவம் எனப்படும்.",
    altTranslation: "The patient, physician, medicine, and the attendant true — These four unite in medicine's worth and view. — Pope"
  },

  // CHAPTER 96 — Nobility
  {
    num: 951, chapter: 96,
    tamil: "இற்பிறந்தார் கண்அல்லது இல்லை இயல்பாகச்\nசெப்பமும் நாணும் ஒருங்கு.",
    transliteration: "Iṟpiṟantār kaṇallatu illai iyalpākac\ncheppamum nāṇum oruṅku.",
    english: "Rectitude and modesty together, as natural qualities, are found only in those of noble birth.",
    tamilUrai: "நேர்மையும் நாணமும் ஒருங்கே இயல்பான பண்புகளாய் அமைவது, நல்ல குடியில் பிறந்தவரிடத்தில் தவிர, வேறு எவரிடத்திலும் காண்பது அரிது.",
    altTranslation: "Uprightness and modesty, by nature knit as one, Are found in noble-born, in others seldom won. — Pope"
  },
  {
    num: 952, chapter: 96,
    tamil: "ஒழுக்கமும் வாய்மையும் நாணும் இம்மூன்றும்\nஇழுக்கார் குடிப்பிறந் தார்.",
    transliteration: "Oḻukkamum vāymaiyum nāṇum immūṉṟum\niḻukkār kuṭippiṟan tār.",
    english: "Those born of noble stock never lapse in three things — right conduct, truthfulness, and modesty.",
    tamilUrai: "நல்ல குடியில் பிறந்தவர்கள், ஒழுக்கம், வாய்மை, நாணம் — ஆகிய இந்த மூன்றிலிருந்தும் தவறமாட்டார்கள்.",
    altTranslation: "The noble-born from three things never swerve aside — Right conduct, truth, and modesty's sure guide. — Pope"
  },
  {
    num: 953, chapter: 96,
    tamil: "நகைஈகை இன்சொல் இகழாமை நான்கும்\nவகையென்ப வாய்மைக் குடிக்கு.",
    transliteration: "Nakaiīkai iṉcol ikaḻāmai nāṉkum\nvakaiyeṉpa vāymaik kuṭikku.",
    english: "Smiling face, giving, pleasant words, and freedom from contempt — these four are the marks of true nobility.",
    tamilUrai: "மலர்ந்த முகம், ஈகை (கொடுத்தல்), இனிமையான சொல், மற்றவரை இகழாத தன்மை — ஆகிய இந்த நான்கும், உண்மையான உயர் குடியினரின் பண்புக் கூறுகள் ஆகும்.",
    altTranslation: "A smiling face, a liberal hand, sweet words, no scorn — These four mark out the noble, truly born. — Pope"
  },
  {
    num: 954, chapter: 96,
    tamil: "அடுக்கிய கோடி பெறினும் குடிப்பிறந்தார்\nகுன்றுவ செய்தல் இலர்.",
    transliteration: "Aṭukkiya kōṭi peṟiṉum kuṭippiṟantār\nKuṉṟuva ceytal ilar.",
    english: "Though they could gain crores of wealth, the truly noble will not do deeds that diminish their honour.",
    tamilUrai: "குவிந்த கோடிக்கணக்கான செல்வம் கிடைத்தாலும், உயர் குடியினர், தம் பெருமையைக் குறைக்கும் செயல்களை ஒருபோதும் செய்யமாட்டார்கள்.",
    altTranslation: "Though crores should pile, the noble still refrain From deeds that lower their dignified name. — Pope"
  },
  {
    num: 955, chapter: 96,
    tamil: "வழங்குவ துள்வீழ்ந்தக் கண்ணும் பழங்குடி\nபண்பில் தலைப்பிரிதல் இன்று.",
    transliteration: "Vaḻaṅkuva tuḷvīḻntak kaṇṇum paḻaṅkuṭi\npaṇpil talaippirital iṉṟu.",
    english: "Even if the means of giving fail, the people of ancient families never lose their gracious disposition.",
    tamilUrai: "ஈவதற்கு உள்ள பொருள் குறைந்து போனபோதும், பழம் குடியில் பிறந்தவர்கள், தங்கள் உயர் பண்பிலிருந்து விலகமாட்டார்கள்.",
    altTranslation: "Though wealth to give should wane, old families' grace Shall never from their hearts be pushed from place. — Pope"
  },
  {
    num: 956, chapter: 96,
    tamil: "சலம்பற்றிச் சால்பில செய்யார்மா சற்ற\nகுலம்பற்றி வாழ்தும்என் பார்.",
    transliteration: "Calampaṟṟic cālpila ceyyārmā caṟṟa\nkulampaṟṟi vāḻtumeṉ pār.",
    english: "Those who cherish their stainless lineage will not, in pursuit of deceit, do unworthy deeds.",
    tamilUrai: "குற்றம் இல்லாத தம் குலப் பெருமையைப் பற்றிப் பிடித்து வாழ விரும்புவோர், வஞ்சகம் காட்டி, தகுதியற்ற செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "Those who their spotless lineage firmly hold, Will do no fraud, no base deeds, as I've told. — Pope"
  },
  {
    num: 957, chapter: 96,
    tamil: "குடிப்பிறந்தார் கண்விளங்கும் குற்றம் விசும்பின்\nமதிக்கண் மறுப்போல் உயர்ந்து.",
    transliteration: "Kuṭippiṟantār kaṇviḷaṅkum kuṟṟam vicumpiṉ\nMatikkaṇ maṟuppōl uyarntu.",
    english: "A fault in the noble-born shines out like the spot on the moon in the sky.",
    tamilUrai: "உயர் குடியில் பிறந்தவர்களின் சிறிய குற்றம் கூட, வானத்தில் உள்ள நிலவில் தெரியும் கறை போல, எல்லாருக்கும் தெரியும் வகையில் பெரிதாய் விளங்கும்.",
    altTranslation: "A fault in those of noble birth stands out on high, As the spot on the moon against the starry sky. — Pope"
  },
  {
    num: 958, chapter: 96,
    tamil: "நலத்தின்கண் நாரின்மை தோன்றின் அவனைக்\nகுலத்தின்கண் ஐயப் படும்.",
    transliteration: "Nalattiṉkaṇ nāriṉmai tōṉṟiṉ avaṉaik\nkulattiṉkaṇ aiyap paṭum.",
    english: "If in a good nature lovelessness appears, doubt will be cast on his lineage.",
    tamilUrai: "நன்மை பயக்கும் நற்பண்புகளைக் கொண்ட ஒருவனிடத்தில், அன்பின்மை தோன்றினால், அவனது குலப்பிறப்பின் மேல் சந்தேகம் எழும்.",
    altTranslation: "If one of goodly nature lovelessness displays, Suspicion doth his very lineage debase. — Pope"
  },
  {
    num: 959, chapter: 96,
    tamil: "நிலத்தில் கிடந்தமை கால்காட்டும் காட்டும்\nகுலத்தில் பிறந்தார்வாய்ச் சொல்.",
    transliteration: "Nilattil kiṭantamai kālkāṭṭum kāṭṭum\nkulattil piṟantārvāyc col.",
    english: "As a sprout reveals the soil's quality, so the words that leave the mouth of a person reveal his ancestry.",
    tamilUrai: "நிலத்தின் தன்மையை, அதில் முளைக்கும் பயிரின் கால் காட்டுவது போல, ஒருவன் உயர் குடியில் பிறந்தான் என்பதை, அவன் வாயிலிருந்து வரும் சொற்களே காட்டிவிடும்.",
    altTranslation: "As soil's own nature by the sprout is shown, So speech reveals the lineage a man has known. — Pope"
  },
  {
    num: 960, chapter: 96,
    tamil: "நலம்வேண்டின் நாணுடைமை வேண்டும் குலம்வேண்டின்\nவேண்டுக யார்க்கும் பணிவு.",
    transliteration: "Nalamvēṇṭiṉ nāṇuṭaimai vēṇṭum kulamvēṇṭiṉ\nvēṇṭuka yārkkum paṇivu.",
    english: "If you would be good, be modest; if you would be noble, be humble toward all.",
    tamilUrai: "நற்பண்பை அடைய விரும்பினால், நாணம் உடையவராய் இருக்க வேண்டும்; உயர் குலத்தை விரும்பினால், எல்லோரிடத்திலும் பணிவுடையவராய் இருக்க வேண்டும்.",
    altTranslation: "If good thou seek, let modesty thy portion be; If noble birth, be humble unto all men thou see. — Pope"
  },

  // CHAPTER 97 — Honour
  {
    num: 961, chapter: 97,
    tamil: "இன்றி அமையாச் சிறப்பின வாயினும்\nகுன்ற வருப விடல்.",
    transliteration: "Iṉṟi amaiyāc ciṟappiṉa vāyiṉum\nkuṉṟa varupa viṭal.",
    english: "Though indispensable to life, one should leave alone things that lessen one's honour.",
    tamilUrai: "இல்லை என்றால் வாழ முடியாத சிறப்பு வாய்ந்தவை என்றாலும், தமது மேன்மையைக் குறைக்கும் செயல்களை, ஒருவன் செய்யாமல் விட வேண்டும்.",
    altTranslation: "Though needful to life, if deeds thy honour lower, Cast them aside in every pressing hour. — Pope"
  },
  {
    num: 962, chapter: 97,
    tamil: "சீரினும் சீரல்ல செய்யாரே சீரொடு\nபேராண்மை வேண்டு பவர்.",
    transliteration: "Cīriṉum cīralla ceyyārē cīroṭu\npērāṇmai vēṇṭu pavar.",
    english: "Those who desire great glory will not, even for gaining that glory, do what is unworthy.",
    tamilUrai: "மேன்மையுடன் சிறந்த ஆண்மையை விரும்புகிறவர்கள், சிறப்பை அடையும் பொருட்டாக இருந்தாலும், தகுதியற்ற இழிவான செயல்களைச் செய்யமாட்டார்கள்.",
    altTranslation: "Those who great glory with their manhood crave, E'en for renown would not unworthiness outbrave. — Pope"
  },
  {
    num: 963, chapter: 97,
    tamil: "பெருக்கத்து வேண்டும் பணிதல் சிறிய\nசுருக்கத்து வேண்டும் உயர்வு.",
    transliteration: "Perukkattu vēṇṭum paṇital ciṟiya\ncurukkattu vēṇṭum uyarvu.",
    english: "In prosperity, be humble; in adversity, hold high your dignity.",
    tamilUrai: "செல்வம் பெருகிய காலத்தில், ஒருவன் பணிந்து நடக்க வேண்டும்; வறுமை என்கிற சிறிய நிலை வந்தபோது, உயர்ந்து நிற்க வேண்டும்.",
    altTranslation: "In fortune's rise, be humble; in its fall and shrink, Lift high thy dignity upon the brink. — Pope"
  },
  {
    num: 964, chapter: 97,
    tamil: "தலையின் இழிந்த மயிரனையர் மாந்தர்\nநிலையின் இழிந்தக் கடை.",
    transliteration: "Talaiyiṉ iḻinta mayiraṉaiyar māntar\nnilaiyiṉ iḻintak kaṭai.",
    english: "When men fall from their proper station, they become like hair fallen from the head.",
    tamilUrai: "ஒருவர் தம்முடைய உயர்ந்த நிலையிலிருந்து வீழ்ந்தால், அவர் தலையில் இருந்து விழுந்த முடிக்கு ஒப்பாவர்.",
    altTranslation: "Men fallen from their proper state of high are shown, Like hair fallen from the head — a worthless thing outgrown. — Pope"
  },
  {
    num: 965, chapter: 97,
    tamil: "குன்றின் அனையாரும் குன்றுவர் குன்றுவ\nகுன்றி அனைய செயின்.",
    transliteration: "Kuṉṟiṉ aṉaiyārum kuṉṟuvar kuṉṟuva\nkuṉṟi aṉaiya ceyiṉ.",
    english: "Even men who are like mountains will shrink in greatness if they do shrinking deeds, small as a kunri seed.",
    tamilUrai: "மலை போல பெருமை உடையவர்களும், கோழை தன்மையுடைய சிறிய குற்றமான செயல்களைச் செய்ய நேர்ந்தால், சிறியவர்களாய் ஆகிவிடுவர்.",
    altTranslation: "Men mountain-great shall shrink to smallest size, If shrinking deeds they do, kunri-grain in guise. — Pope"
  },
  {
    num: 966, chapter: 97,
    tamil: "புகழ்இன்றால் புத்தேள்நாட்டு உய்யாதால் என்மற்று\nஇகழ்வார்பின் சென்று நிலை.",
    transliteration: "Pukaḻiṉṟāl puttēḷnāṭṭu uyyātāl eṉmaṟṟu\niKaḻvārpiṉ ceṉṟu nilai.",
    english: "What is the use of following those who despise us? It brings no fame here nor bliss in the next world.",
    tamilUrai: "தம்மை இகழ்பவரின் பின்னே சென்று, அவர்கள் வாசற்படியில் நின்று உதவி கேட்பது எதற்கு? அதனால் இம்மையில் புகழும் கிட்டாது; மறுமையிலும் தெய்வ லோகம் கிட்டாது.",
    altTranslation: "No fame, no heaven — what gain is theirs who stand At doorways of disdainful men's command? — Pope"
  },
  {
    num: 967, chapter: 97,
    tamil: "ஒட்டார்பின் சென்றொருவன் வாழ்தலின் அந்நிலையே\nகெட்டான் எனப்படுதல் நன்று.",
    transliteration: "Oṭṭārpiṉ ceṉṟoruvaṉ vāḻtaliṉ annilaiyē\nkeṭṭāṉ eṉappaṭutal naṉṟu.",
    english: "Better that a man be counted dead on the spot than live following those who reject him.",
    tamilUrai: "தம்மை மதியாதவரின் பின்னே சென்று ஒருவன் வாழ்வதை விட, அந்த நிலையிலேயே \"கெட்டுப் போனான்\" என்று சொல்லப்படுவதே நல்லது.",
    altTranslation: "Better men should say, 'He's dead upon the spot,' Than live, who follow those whom they reject as not. — Pope"
  },
  {
    num: 968, chapter: 97,
    tamil: "மருந்தோமற்று ஊன்ஓம்பும் வாழ்க்கை பெருந்தகைமை\nபீடழிய வந்த இடத்து.",
    transliteration: "Maruntōmaṟṟu ūṉōmpum vāḻkkai peruntakaimai\npīṭaḻiya vanta iṭattu.",
    english: "Is it a medicine that sustains the flesh, when one's great dignity is destroyed, to live?",
    tamilUrai: "பெருமைக்குரிய ஒருவனின் சிறப்பான பண்பு அழிந்துவிட்ட நிலையில், உடலை மட்டும் காப்பாற்றி வாழ்வது மரணத்திலிருந்து காக்கும் மருந்தா என்ன?",
    altTranslation: "Is it an elixir that flesh may live in sorry state, When honour's dignity has met its end of fate? — Pope"
  },
  {
    num: 969, chapter: 97,
    tamil: "மயிர்நீப்பின் வாழாக் கவரிமா அன்னார்\nஉயிர்நீப்பர் மானம் வரின்.",
    transliteration: "Mayirnīppiṉ vāḻāk kavarimā aṉṉār\nuyirnīppar māṉam variṉ.",
    english: "As the yak dies when its hair is shorn, so do men of true honour give up life when honour is lost.",
    tamilUrai: "தன் மயிரை இழந்தால் உயிரை விட்டுவிடுகின்ற கவரி மான் போல, மானத்துக்கு களங்கம் வந்தால், மான உணர்வுள்ள பெரியோர் உயிரையே விட்டுவிடுவர்.",
    altTranslation: "As yak, if shorn its hair, doth give its life away, So men of honour die when honour's fled the day. — Pope"
  },
  {
    num: 970, chapter: 97,
    tamil: "இளிவரின் வாழாத மானம் உடையார்\nஒளிதொழுது ஏத்தும் உலகு.",
    transliteration: "Iḷivariṉ vāḻāta māṉam uṭaiyār\noḷitoḻutu ēttum ulaku.",
    english: "The world worships as its glory those of honour who refuse to live in disgrace.",
    tamilUrai: "இகழ்ச்சி நேரிட்டால் உயிர் வாழ விரும்பாத மானம் கொண்டவர்களின் சிறப்பான ஒளியை, உலகம் வணங்கிப் போற்றும்.",
    altTranslation: "Who will not live once shame has come — the world Reveres their glory, as by light unfurled. — Pope"
  },

  // CHAPTER 98 — Greatness
  {
    num: 971, chapter: 98,
    tamil: "ஒளிஒருவற்கு உள்ள வெறுக்கை இளிஒருவற்கு\nஅஃதிறந்து வாழ்தும் எனல்.",
    transliteration: "Oḷioruvaṟku uḷḷa veṟukkai iḻioruvaṟku\naḵtiṟantu vāḻtum eṉal.",
    english: "The glory of man is the energy of his mind; disgrace is his saying 'I will live in the absence of it.'",
    tamilUrai: "ஒருவனுக்குச் சிறப்பை வழங்கும் ஒளி என்பது அவனது மனதின் ஊக்கமே; அந்த ஊக்கத்தை இழந்தும் வாழ்வேன் என்று சொல்வது இழிவாகும்.",
    altTranslation: "Man's glory is his spirit's energy; disgrace Is saying, 'Even without that I'll run life's race.' — Pope"
  },
  {
    num: 972, chapter: 98,
    tamil: "பிறப்பொக்கும் எல்லா உயிர்க்கும் சிறப்பொவ்வா\nசெய்தொழில் வேற்றுமை யான்.",
    transliteration: "Piṟappokkum ellā uyirkkum ciṟappovvā\nCeytoḻil vēṟṟumai yāṉ.",
    english: "All beings are equal by birth, but greatness differs through the difference of deeds they do.",
    tamilUrai: "எல்லா உயிர்களுக்கும் பிறப்பு ஒன்றே; ஆனால், அவர்களின் சிறப்பு வேறுபடுவது, அவர்கள் செய்கின்ற செயல்களின் வேறுபாட்டினால் தான்.",
    altTranslation: "By birth all beings equal are; but difference rise From deeds that elevate, or lowering despise. — Pope"
  },
  {
    num: 973, chapter: 98,
    tamil: "மேலிருந்தும் மேலல்லார் மேலல்லர் கீழிருந்தும்\nகீழல்லார் கீழல் லவர்.",
    transliteration: "Mēliruntum mēlallār mēlallar kīḻiruntum\nkīḻallār kīḻal lavar.",
    english: "Those not truly great are not great though placed on high; those not truly low are not low though of humble station.",
    tamilUrai: "பெருமையற்றவர்கள், உயர் இடத்தில் அமர்ந்திருந்தாலும் உயர்ந்தவர்கள் அல்லர்; தாழ்ந்த தன்மை இல்லாதவர்கள், தாழ்ந்த இடத்தில் இருந்தாலும் தாழ்ந்தவர்கள் அல்லர்.",
    altTranslation: "Not great are those ungreat, though they sit on high; Not low are those not low, though low they lie. — Pope"
  },
  {
    num: 974, chapter: 98,
    tamil: "ஒருமை மகளிரே போலப் பெருமையும்\nதன்னைத்தான் கொண்டொழுகின் உண்டு.",
    transliteration: "Orumai makaḷirē pōlap perumaiyum\nTaṉṉaittāṉ koṇṭoḻukiṉ uṇṭu.",
    english: "Greatness, like a devoted wife, abides only with him who guards it.",
    tamilUrai: "ஒரே ஒருவனைச் சார்ந்து வாழும் கற்புள்ள பெண்களைப் போல, ஒருவனது பெருமை அவனிடம் நிலைத்திருக்க வேண்டுமானால், அவன் அதைக் காத்து ஒழுக வேண்டும்.",
    altTranslation: "As chaste wife clings to one, so greatness still Abides with him who guards it with firm will. — Pope"
  },
  {
    num: 975, chapter: 98,
    tamil: "பெருமை யுடையவர் ஆற்றுவார் ஆற்றின்\nஅருமை உடைய செயல்.",
    transliteration: "Perumai yuṭaiyavar āṟṟuvār āṟṟiṉ\narumai uṭaiya ceyal.",
    english: "Men of greatness can accomplish, in the way they choose, deeds hard to perform.",
    tamilUrai: "பெருமை உடையவர்கள், தாம் ஏற்றுக்கொண்ட வழியில், அரிதான செயல்களையும் முழுமையாக நிறைவேற்ற வல்லவர்கள்.",
    altTranslation: "Those who are great can always in their chosen way Accomplish deeds whose difficult art holds sway. — Pope"
  },
  {
    num: 976, chapter: 98,
    tamil: "சிறியார் உணர்ச்சியுள் இல்லை பெரியாரைப்\nபேணிக் கொள் வேமென்னும் நோக்கு.",
    transliteration: "Ciṟiyār uṇarcciyuḷ illai periyāraip\npēṇik koḻ vēmeṉṉum nōkku.",
    english: "Mean men have no aim to cherish and win the friendship of the great.",
    tamilUrai: "சிறிய மனம் கொண்டவர்களின் உணர்வில், \"பெரியாரை பாதுகாப்பாய் ஏற்று, நட்பாக்கி கொள்வோம்\" என்ற நோக்கம் ஒருபோதும் தோன்றாது.",
    altTranslation: "Small men in their own thought can ne'er intend, 'The great we'll cherish, make them friend on friend.' — Pope"
  },
  {
    num: 977, chapter: 98,
    tamil: "இறப்பே புரிந்த தொழிற்றாம் சிறப்புந்தான்\nசீரல் லவர்கண் படின்.",
    transliteration: "Iṟappē purinta toḻiṟṟām ciṟappuntāṉ\ncīral lavarkaṇ paṭiṉ.",
    english: "Even greatness, if it fall upon the unworthy, becomes a source of arrogant and wanton deeds.",
    tamilUrai: "தகுதி இல்லாதவரிடம் சிறப்பு (உயர் பதவி, செல்வம்) கிடைத்தால், அதுவே அவருக்கு ஆணவ மிகுந்த தவறான செயல்களை தூண்டும் காரணமாய் ஆகும்.",
    altTranslation: "E'en greatness, when on worthless men it falls, Becomes but source of vain and lawless calls. — Pope"
  },
  {
    num: 978, chapter: 98,
    tamil: "பணியுமாம் என்றும் பெருமை சிறுமை\nஅணியுமாம் தன்னை வியந்து.",
    transliteration: "Paṇiyumām eṉṟum perumai ciṟumai\naṇiyumām taṉṉai viyantu.",
    english: "True greatness is ever humble; meanness adorns itself with self-admiration.",
    tamilUrai: "உண்மையான பெருமை எப்போதும் பணிவுடன் நடந்துகொள்ளும்; சிறுமை உடையதோ, தன்னையே பெருமைப்படுத்திக் கொண்டு அணிசெய்து நிற்கும்.",
    altTranslation: "True greatness ever humbly bends its head; Meanness with self-admiring pride is fed. — Pope"
  },
  {
    num: 979, chapter: 98,
    tamil: "பெருமை பெருமிதம் இன்மை சிறுமை\nபெருமிதம் ஊர்ந்து விடல்.",
    transliteration: "Perumai perumitam iṉmai ciṟumai\nperumitam ūrntu viṭal.",
    english: "Greatness is freedom from pride; meanness is to be overwhelmed by it.",
    tamilUrai: "தன்னை எண்ணிப் பெருமைப்படும் இறுமாப்பு இல்லாமல் இருப்பதே உண்மையான பெருமை; சிறுமை எனப்படுவது அந்த இறுமாப்புக் கொண்டாடித் திரிவதாகும்.",
    altTranslation: "Greatness is freedom from all vaunting pride; In meanness vain-self-praise doth ride and ride. — Pope"
  },
  {
    num: 980, chapter: 98,
    tamil: "அற்றம் மறைக்கும் பெருமை சிறுமைதான்\nகுற்றமே கூறி விடும்.",
    transliteration: "Aṟṟam maṟaikkum perumai ciṟumaitāṉ\nkuṟṟamē kūṟi viṭum.",
    english: "Greatness conceals the faults of others; meanness only proclaims their flaws.",
    tamilUrai: "பெருமை உடையவர்கள் பிறருடைய குறைகளை மறைத்து விடுவார்கள்; சிறுமை உடையவர்கள், பிறர் குற்றங்களை மட்டும் எடுத்துச் சொல்லி திரிவார்கள்.",
    altTranslation: "Greatness doth cover others' faults with care; Meanness but blazons abroad each flaw and flare. — Pope"
  },

  // CHAPTER 99 — The Possession of Dignity (Nobility)
  {
    num: 981, chapter: 99,
    tamil: "கடனென்ப நல்லவை எல்லாம் கடனறிந்து\nசான்றாண்மை மேற்கொள் பவர்க்கு.",
    transliteration: "Kaṭaṉeṉpa nallavai ellām kaṭaṉaṟintu\nCāṉṟāṇmai mēṟkoḷ pavarkku.",
    english: "All good things are said to be the duty of those who, understanding duty, take up noble excellence.",
    tamilUrai: "தமது கடமையை அறிந்து, சான்றாண்மை எனப்படும் நற்குணத்தை மேற்கொண்டவர்களுக்கு, எல்லா நற்குணங்களும் கடமைகள் என்று கூறப்படும்.",
    altTranslation: "All good things are their task, who noble worth have won, And recognise the duties that by them should be done. — Pope"
  },
  {
    num: 982, chapter: 99,
    tamil: "குணநலம் சான்றோர் நலனே பிறநலம்\nஎந்நலத்து உள்ளதூஉம் அன்று.",
    transliteration: "Kuṇanalam cāṉṟōr nalaṉē piṟanalam\nEnnalattu uḷḷatūum aṉṟu.",
    english: "The goodness of character is the true goodness of the wise; no other good is found comparable to it.",
    tamilUrai: "நற்குணங்களின் சிறப்பே சான்றோருக்குரிய சிறப்பாகும்; வேறு எந்த நலமும் இதற்கு ஒப்பாகாது.",
    altTranslation: "The excellence of character — 'tis sages' sole true worth; No other goodness matches this on all the breadth of earth. — Pope"
  },
  {
    num: 983, chapter: 99,
    tamil: "அன்புநாண் ஒப்புரவு கண்ணோட்டம் வாய்மையொடு\nஐந்துசால் ஊன்றிய தூண்.",
    transliteration: "Aṉpunāṇ oppuravu kaṇṇōṭṭam vāymaiyoṭu\nAintucāl ūṉṟiya tūṇ.",
    english: "Love, modesty, benevolence, kindness, and truthfulness — these five are the firm pillars of excellence.",
    tamilUrai: "அன்பு, நாணம், மற்றவருக்கு உதவும் பண்பு, அருள், வாய்மை — இவ்வைந்தும் நிலைகொண்டிருப்பதே சான்றாண்மை என்னும் கட்டிடத்தை தாங்கும் தூண்களாம்.",
    altTranslation: "Love, modesty, kind courtesy, grace, and truthful speech — Five pillars on which nobility fits each. — Pope"
  },
  {
    num: 984, chapter: 99,
    tamil: "கொல்லா நலத்தது நோன்மை பிறர்தீமை\nசொல்லா நலத்தது சால்பு.",
    transliteration: "Kollā nalattatu nōṉmai piṟartīmai\nCollā nalattatu cālpu.",
    english: "Penance is the virtue of not killing; true nobility is the virtue of not speaking of others' faults.",
    tamilUrai: "உயிர்களைக் கொல்லாதிருக்கும் பண்பு தவத்தின் நலமாகும்; பிறருடைய தீமையைப் பற்றி பேசாதிருக்கும் பண்பே சான்றாண்மையின் நலமாகும்.",
    altTranslation: "Not to kill is penance's own virtuous worth; Not to speak ill is nobleness enduring earth. — Pope"
  },
  {
    num: 985, chapter: 99,
    tamil: "ஆற்றுவார் ஆற்றல் பணிதல் அதுசான்றோர்\nமாற்றாரை மாற்றும் படை.",
    transliteration: "Āṟṟuvār āṟṟal paṇital atucāṉṟōr\nMāṟṟārai māṟṟum paṭai.",
    english: "Humility is the strength of the strong; it is the weapon by which the wise defeat their foes.",
    tamilUrai: "ஆற்றல் உடையவர்களின் உண்மையான வலிமை பணிவாய் நடப்பது ஆகும்; அதுவே சான்றோர் தமது பகைவர்களை வென்று வெற்றிகொள்ளப் பயன்படுத்தும் ஆயுதம்.",
    altTranslation: "Humility is strength of strong; 'tis weapon, too, Whereby the noble change their foes' proud hue. — Pope"
  },
  {
    num: 986, chapter: 99,
    tamil: "சால்பிற்குக் கட்டளை யாதெனின் தோல்வி\nதுலையல்லார் கண்ணும் கொளல்.",
    transliteration: "Cālpiṟkuk kaṭṭaḷai yāteṉiṉ tōlvi\nTulaiyallār kaṇṇum koḷal.",
    english: "What is the touchstone of nobility? The willingness to accept defeat even from the lowly.",
    tamilUrai: "சான்றாண்மைக்கு அளவுகோல் எது என்றால் — தனக்கு இணை இல்லாதவர்களிடமும் கூட, தோற்பதாய் ஏற்றுக்கொள்ளுதல்.",
    altTranslation: "The touchstone of the noble — what is it, I ask? To bear defeat e'en from the mean — their task. — Pope"
  },
  {
    num: 987, chapter: 99,
    tamil: "இன்னாசெய் தார்க்கும் இனியவே செய்யாக்கால்\nஎன்ன பயத்ததோ சால்பு.",
    transliteration: "Iṉṉācey tārkkum iṉiyavē ceyyākkāl\nEṉṉa payattatō cālpu.",
    english: "Of what use is nobility, if it does not do good even to those who have done evil?",
    tamilUrai: "தமக்குத் தீமை செய்தவர்களுக்கும் கூட நன்மையே செய்யாதிருந்தால், சான்றாண்மையால் என்ன பயன்?",
    altTranslation: "What gain the noble's noble name, if they don't bless Even those who hurt them by their cruel stress? — Pope"
  },
  {
    num: 988, chapter: 99,
    tamil: "இன்மை ஒருவற்கு இளிவன்று சால்பென்னும்\nதிண்மைஉண் டாகப் பெறின்.",
    transliteration: "Iṉmai oruvaṟku iḷivaṉṟu cālpeṉṉum\nTiṇmaiuṇ ṭākap peṟiṉ.",
    english: "Poverty is no disgrace to him who has the firmness called nobility.",
    tamilUrai: "சான்றாண்மை என்னும் உறுதியான பண்பு ஒருவனிடம் இருக்குமானால், வறுமையானது அவனுக்கு இழிவாய் அமையாது.",
    altTranslation: "To him who owns the strength of noble soul complete, Want is no shame, though fortune leave his side. — Pope"
  },
  {
    num: 989, chapter: 99,
    tamil: "ஊழி பெயரினும் தாம்பெயரார் சான்றாண்மைக்கு\nஆழி எனப்படு வார்.",
    transliteration: "Ūḻi peyariṉum tāmpeyarār cāṉṟāṇmaikku\nĀḻi eṉappaṭu vār.",
    english: "Those who are as the sea of nobility do not swerve, though ages themselves change.",
    tamilUrai: "ஊழிக்காலம் இடம் பெயர்ந்தாலும், தாம் சான்றாண்மையில் இடம் பெயராது நிற்பவர்கள், சான்றாண்மைக்கு கடல்போல் அடிப்படையாய் கருதப்படுவர்.",
    altTranslation: "Though ages change, they change not, who true nobleness display — The sea of noble worth, the wise so them portray. — Pope"
  },
  {
    num: 990, chapter: 99,
    tamil: "சான்றவர் சான்றாண்மை குன்றின் இருநிலந்தான்\nதாங்காது மன்னோ பொறை.",
    transliteration: "Cāṉṟavar cāṉṟāṇmai kuṉṟiṉ irunilantāṉ\nTāṅkātu maṉṉō poṟai.",
    english: "If the nobility of the noble should decline, the great earth itself could not bear its own weight.",
    tamilUrai: "சான்றோர்களின் சான்றாண்மை குறைந்துவிட்டால், பெரிய இந்தப் பூமி தனது சுமையையே தாங்க இயலாமல் போய்விடும்.",
    altTranslation: "If nobles fail in nobleness of their own kind, The earth itself could not its weight sustained find. — Pope"
  },

  // CHAPTER 100 — Courtesy
  {
    num: 991, chapter: 100,
    tamil: "எண்பதத்தால் எய்தல் எளிதென்ப யார்மாட்டும்\nபண்புடைமை என்னும் வழக்கு.",
    transliteration: "Eṇpatattāl eytal eḷiteṉpa yārmāṭṭum\nPaṇpuṭaimai eṉṉum vaḻakku.",
    english: "It is said that the practice called courtesy is easy to attain by those who are accessible to all.",
    tamilUrai: "எளிமையாக அணுகத்தகும் தன்மையால், எல்லாரிடத்திலும் பண்புடைமை என்னும் நல்லியல்பை அடைதல் எளிது என்று கூறுவர்.",
    altTranslation: "Who easy access give to all, as their especial gain, The gracious grace of kindly culture will attain. — Pope"
  },
  {
    num: 992, chapter: 100,
    tamil: "அன்புடைமை ஆன்ற குடிப்பிறத்தல் இவ்விரண்டும்\nபண்புடைமை என்னும் வழக்கு.",
    transliteration: "Aṉpuṭaimai āṉṟa kuṭippiṟattal ivviraṇṭum\nPaṇpuṭaimai eṉṉum vaḻakku.",
    english: "Loving-kindness and noble birth — these two are what make up the virtue called courtesy.",
    tamilUrai: "பிறரிடத்தில் அன்பு உடைமையும், உயர்ந்த குடியில் பிறத்தலும் — இவ்விரண்டுமே பண்புடைமை என்று சொல்லப்படும் ஒழுக்க நெறியாகும்.",
    altTranslation: "Love and noble lineage — these twain make up the way Which men as kindly culture's true estate portray. — Pope"
  },
  {
    num: 993, chapter: 100,
    tamil: "உறுப்பொத்தல் மக்களொப்பு அன்றால் வெறுத்தக்க\nபண்பொத்தல் ஒப்பதாம் ஒப்பு.",
    transliteration: "Uṟuppottal makkaḷoppu aṉṟāl veṟuttakka\nPaṇpottal oppatām oppu.",
    english: "Likeness in limbs is not likeness among men; true likeness lies in the excellence of character.",
    tamilUrai: "உடல் உறுப்புகளில் ஒத்திருத்தல் மக்களுக்கு இடையிலான உண்மையான ஒற்றுமையாகாது; எல்லோரும் விரும்புகின்ற நற்பண்புகளில் ஒத்திருத்தலே உண்மையான ஒற்றுமையாகும்.",
    altTranslation: "Not likeness of the limbs makes man like man indeed; True likeness lies in character of noble seed. — Pope"
  },
  {
    num: 994, chapter: 100,
    tamil: "நயனொடு நன்றி புரிந்த பயனுடையார்\nபண்புபா ராட்டும் உலகு.",
    transliteration: "Nayaṉoṭu naṉṟi purinta payaṉuṭaiyār\nPaṇpupā rāṭṭum ulaku.",
    english: "The world praises the character of those whose lives yield benefit through justice and kindness.",
    tamilUrai: "நடுநிலையோடும், நல்வினையோடும் ஒழுகுகிற, பயன்படக்கூடிய நற்செயல்களைச் செய்கிறவரின் பண்பை உலகம் பாராட்டும்.",
    altTranslation: "The world doth praise that character which, just and kind, Bears useful fruit for those of noble mind. — Pope"
  },
  {
    num: 995, chapter: 100,
    tamil: "நகையுள்ளும் இன்னாது இகழ்ச்சி பகையுள்ளும்\nபண்புள பாடறிவார் மாட்டு.",
    transliteration: "Nakaiyuḷḷum iṉṉātu ikaḻcci pakaiyuḷḷum\nPaṇpuḷa pāṭaṟivār māṭṭu.",
    english: "Contempt is painful even in jest; those of noble nature keep good conduct even toward enemies.",
    tamilUrai: "நகைச்சுவையாய்ப் பேசுவதில் கூட, இகழ்ச்சியாகப் பேசுவது மனதிற்கு துன்பம் தரும்; மற்றவரின் பாட்டை உணரும் பண்புடையவரிடத்தில், பகைவருக்கே உரிய நற்பண்புகள் விளங்கும்.",
    altTranslation: "Even in jest, contempt doth grief import; The noble show true worth e'en to the foeman's court. — Pope"
  },
  {
    num: 996, chapter: 100,
    tamil: "பண்புடையார்ப் பட்டுண்டு உலகம் அதுஇன்றேல்\nமண்புக்கு மாய்வது மன்.",
    transliteration: "Paṇpuṭaiyārp paṭṭuṇṭu ulakam atuiṉṟēl\nMaṇpukku māyvatu maṉ.",
    english: "The world exists because of the courteous; without them, it would sink into the earth and perish.",
    tamilUrai: "பண்புடையவர்கள் இருக்கின்றதால்தான், இந்த உலகம் நிலைத்து நிற்கின்றது; அவர்கள் இல்லையென்றால், இது மண்ணில் மூழ்கி அழியத்தக்கது.",
    altTranslation: "The world abides because of men of noble kind; Without them earth would fall, in dust entwined. — Pope"
  },
  {
    num: 997, chapter: 100,
    tamil: "அரம்போலும் கூர்மைய ரேனும் மரம்போல்வர்\nமக்கட்பண்பு இல்லா தவர்.",
    transliteration: "Arampōlum kūrmaiya rēṉum marampōlvar\nMakkaṭpaṇpu illā tavar.",
    english: "Those without the virtue of humanity are like trees, though sharp as a file.",
    tamilUrai: "அரத்தைப் போன்ற கூர்மையான அறிவுள்ளவராய் இருப்பினும், மக்களுக்கான நற்பண்பு இல்லாதவர்கள் மரத்தைப் போன்றவர்களே.",
    altTranslation: "Though sharp as file's keen edge, yet like unfruitful tree Are those who lack the noble touch of humanity. — Pope"
  },
  {
    num: 998, chapter: 100,
    tamil: "நண்பாற்றார் ஆகி நயமில செய்வார்க்கும்\nபண்பாற்றார் ஆதல் கடை.",
    transliteration: "Naṇpāṟṟār āki nayamila ceyvārkkum\nPaṇpāṟṟār ātal kaṭai.",
    english: "Even toward those who are unfriendly and do harm, it is base for the noble to fail in courteous conduct.",
    tamilUrai: "நட்பு நிலை இல்லாமல், நல்லதற்கு எதிரான செயல்களைச் செய்பவரிடத்திலும், பண்புடைமை தவறி நடப்பது கடைத்தனம் ஆகும்.",
    altTranslation: "E'en to the unfriendly who with ill-intent do act, 'Tis meanness that from noble ways should react. — Pope"
  },
  {
    num: 999, chapter: 100,
    tamil: "நகல்வல்லர் அல்லார்க்கு மாயிரு ஞாலம்\nபகலும்பாற் பட்டன்று இருள்.",
    transliteration: "Nakalvallar allārkku māyiru ñālam\nPakalumpāṟ paṭṭaṉṟu iruḷ.",
    english: "To those who know not how to smile, this wide world, even in daylight, is wrapped in darkness.",
    tamilUrai: "அன்பு கலந்த முகமலர்ச்சியுடன் சிரிக்கத் தெரியாதவர்களுக்கு, பகலில் விரிந்த பரந்த உலகமும், பகலிலும் இருளில் மூழ்கியதைப் போல ஆகும்.",
    altTranslation: "To those who know not how to smile, the wide world's day In very sunshine darkness finds its stay. — Pope"
  },
  {
    num: 1000, chapter: 100,
    tamil: "பண்பிலான் பெற்ற பெருஞ்செல்வம் நன்பால்\nகலந்தீமை யால்திரிந் தற்று.",
    transliteration: "Paṇpilāṉ peṟṟa peruñcelvam naṉpāl\nKalantīmai yāltirin taṟṟu.",
    english: "Vast wealth in the hands of a man without character is like good milk turning sour in an impure vessel.",
    tamilUrai: "நற்பண்பு இல்லாதவனிடத்தில் சேர்ந்த பெருஞ்செல்வம், தீய பாத்திரத்தில் ஊற்றப்பட்ட நல்ல பால் கெட்டுப்போவது போன்றதே ஆகும்.",
    altTranslation: "Great wealth that reaches him whose character is base, Is as good milk that sours in an unfit place. — Pope"
  },

  // CHAPTER 101 — Wealth without Benevolence
  {
    num: 1001, chapter: 101,
    tamil: "வைத்தான்வாய் சான்ற பெரும்பொருள் அஃதுண்ணான்\nசெத்தான் செயக்கிடந்தது இல்.",
    transliteration: "Vaittāṉvāy cāṉṟa perumporuḷ aḵtuṇṇāṉ\nCettāṉ ceyakkiṭantatu il.",
    english: "He who has amassed great wealth but neither enjoys it nor gives it away is as good as dead.",
    tamilUrai: "நிறைய செல்வத்தைக் குவித்து வைத்திருந்தும், அதை தான் அனுபவிக்காமல், பிறருக்கும் கொடாதவன் உயிருடன் இருந்தாலும் இறந்தவனே.",
    altTranslation: "Who hoards vast wealth, but neither spends nor gives, Is dead — though seeming yet among the living he lives. — Pope"
  },
  {
    num: 1002, chapter: 101,
    tamil: "பொருளானாம் எல்லாமென்று ஈயாது இவறும்\nமருளானாம் மாணாப் பிறப்பு.",
    transliteration: "Poruḷāṉām ellāmeṉṟu īyātu ivaṟum\nMaruḷāṉām māṇāp piṟappu.",
    english: "Thinking that wealth alone yields everything, the miser who gives not will earn only a worthless rebirth.",
    tamilUrai: "செல்வத்தாலே எல்லாம் ஆகும் என்று எண்ணி, பிறருக்கு ஈயாது பொருள் சேர்த்து வைக்கும் மயக்கத்தால், இழிவான மறு பிறப்பே கிட்டும்.",
    altTranslation: "'Wealth is all' — so deems the miser who gives nought; A worthless birth he earns, by his delusion wrought. — Pope"
  },
  {
    num: 1003, chapter: 101,
    tamil: "ஈட்டம் இவறி இசைவேண்டா ஆடவர்\nதோற்றம் நிலக்குப் பொறை.",
    transliteration: "Īṭṭam ivaṟi icaivēṇṭā āṭavar\nTōṟṟam nilakkup poṟai.",
    english: "Men who seek only to hoard, without desiring fame, are a mere burden to the earth by their existence.",
    tamilUrai: "செல்வத்தை சேர்த்துவைப்பதில் மட்டும் ஈடுபட்டு, புகழை விரும்பாத ஆண்கள் பிறந்திருப்பது உலகுக்குச் சுமையே ஆகும்.",
    altTranslation: "Who only hoards, nor cares for fame, his mortal frame Is but a weight the earth must bear with shame. — Pope"
  },
  {
    num: 1004, chapter: 101,
    tamil: "எச்சமென்று என்எண்ணுங் கொல்லோ ஒருவரால்\nநச்சப் படாஅ தவன்.",
    transliteration: "Eccameṉṟu eṉeṇṇuṅ kollō oruvarāl\nNaccap paṭāa tavaṉ.",
    english: "What legacy can he leave who is not loved by a single soul?",
    tamilUrai: "ஒருவராவது தம்மை விரும்புபவர் இல்லாதவன், தான் இறந்த பிறகு என்ன நினைவுச் சொத்தை விட்டுச் செல்வான் என்று எண்ணிக் கொள்ளலாமா?",
    altTranslation: "What legacy can he bequeath in after days, Whom not one single soul in life did prize or praise? — Pope"
  },
  {
    num: 1005, chapter: 101,
    tamil: "கொடுப்பதூஉம் துய்ப்பதூஉம் இல்லார்க்கு அடுக்கிய\nகோடியுண் டாயினும் இல்.",
    transliteration: "Koṭuppatūum tuyppatūum illārkku aṭukkiya\nKōṭiyuṇ ṭāyiṉum il.",
    english: "To those who neither give nor enjoy, piled-up crores of wealth are as if they had nothing at all.",
    tamilUrai: "பிறருக்கு கொடுக்கவும் தெரியாத, தாமும் அனுபவிக்கவும் தெரியாதவர்களிடத்தில், எண்ணற்ற கோடிப் பெரும் செல்வம் குவிந்திருந்தாலும், அவர்கள் வறியவராகவே கருதப்படுவர்.",
    altTranslation: "To those who neither give nor use, though crores unfold, All wealth they have is as they had none at all. — Pope"
  },
  {
    num: 1006, chapter: 101,
    tamil: "ஏதம் பெருஞ்செல்வம் தான்துவ்வான் தக்கார்க்கொன்று\nஈதல் இயல்பிலா தான்.",
    transliteration: "Ētam peruñcelvam tāṉtuvvāṉ takkārkkoṉṟu\nĪtal iyalpilā tāṉ.",
    english: "Great wealth is a curse to one who neither enjoys it himself nor gives it to the worthy.",
    tamilUrai: "தானும் அனுபவிக்காமல், தகுதியானவர்களுக்கு ஒன்றும் கொடுக்காமல் உள்ளவனின் பெருஞ்செல்வம் அவனுக்கு ஒரு குற்றமே.",
    altTranslation: "Great wealth's a curse to him who neither doth enjoy, Nor gives to worthy men a portion for their joy. — Pope"
  },
  {
    num: 1007, chapter: 101,
    tamil: "அற்றார்க்கொன்று ஆற்றாதான் செல்வம் மிகநலம்\nபெற்றாள் தமியள்மூத் தற்று.",
    transliteration: "Aṟṟārkkoṉṟu āṟṟātāṉ celvam mikanalam\nPeṟṟāḷ tamiyaḷmūt taṟṟu.",
    english: "The wealth of him who gives nothing to the needy is like the beauty of a lovely maiden grown old in solitude.",
    tamilUrai: "வறியவர்களுக்கு சிறிதேனும் உதவாதவனின் செல்வம், மிகுந்த அழகிய இளம் பெண் துணைவன் இல்லாமல் தனிமையிலேயே முதுமை அடைந்ததற்கு ஒப்பாகும்.",
    altTranslation: "The wealth of him who aids not those in want is like The maid of beauty left alone, whose charms age's stroke strike. — Pope"
  },
  {
    num: 1008, chapter: 101,
    tamil: "நச்சப் படாதவன் செல்வம் நடுஊருள்\nநச்சு மரம்பழுத் தற்று.",
    transliteration: "Naccap paṭātavaṉ celvam naṭuūruḷ\nNaccu marampaḻut taṟṟu.",
    english: "The wealth of an unloved man is like a poisonous tree bearing fruit in the middle of a village.",
    tamilUrai: "எவராலும் விரும்பப்படாத ஒருவனிடத்தில் இருக்கும் செல்வம், ஊரின் நடுவில் நின்றுகொண்டு விஷக் கனிகளைத் தருகின்ற மரத்தைப் போன்றதாகும்.",
    altTranslation: "The loveless man's great wealth is as the poisoned tree, That in the village midst bears fruit men flee. — Pope"
  },
  {
    num: 1009, chapter: 101,
    tamil: "அன்பொரீஇத் தற்செற்று அறநோக்காது ஈட்டிய\nஒண்பொருள் கொள்வார் பிறர்.",
    transliteration: "Aṉporīit taṟceṟṟu aṟanōkkātu īṭṭiya\noṇporuḷ koḷvār piṟar.",
    english: "Wealth amassed without love, with self-denial and disregard for virtue, will pass into the hands of others.",
    tamilUrai: "அன்பை மறைத்து, தன்னையே வருத்தி, அறத்தை கருதாமல் ஈட்டிய சிறந்த செல்வத்தை, கடைசியில் பிறரே அனுபவித்துக் கொள்வர்.",
    altTranslation: "Love-less, self-tormenting, reckless of virtue's right, Who gathers wealth — by others 'tis enjoyed in its sight. — Pope"
  },
  {
    num: 1010, chapter: 101,
    tamil: "சீருடைச் செல்வர் சிறுதுனி மாரி\nவறங்கூர்ந் தனையது உடைத்து.",
    transliteration: "Cīruṭaic celvar ciṟutuṉi māri\nVaṟaṅkūrn taṉaiyatu uṭaittu.",
    english: "The brief reverse of the dignified wealthy is like the passing want of rain.",
    tamilUrai: "சிறப்புடைய செல்வந்தர்கள் சிறு காலம் வருந்தி நிற்கும் நிலை, மழை ஒரு குறுகிய காலம் வரவில்லை என்றிருக்கும் நிலையைப் போன்றதே ஆகும்.",
    altTranslation: "The little want that to the great-hearted rich befalls, Is as the drought's brief pause before the cloud's rain-calls. — Pope"
  },

  // CHAPTER 102 — Shame

  // CHAPTER 102 — Shame
  {
    num: 1011, chapter: 102,
    tamil: "கருமத்தால் நாணுதல் நாணுத் திருநுதல்\nநல்லவர் நாணுப் பிற.",
    transliteration: "Karumattāl nāṇutal nāṇut tirunutal\nNallavar nāṇup piṟa.",
    english: "True shame is shrinking from shameful deeds; what the graceful forehead feels at rude touches is of another kind.",
    tamilUrai: "இழிவான செயல்களைச் செய்வதற்கு நாணுதலே உண்மையான நாணம்; அழகிய நெற்றியையுடைய நல்ல பெண்களுக்கு நேர்ந்த நாணம் வேறு வகையானது.",
    altTranslation: "True shame at shameful deeds; what beauty's brow doth feel In other blushes — 'tis another kind of seal. — Pope"
  },
  {
    num: 1012, chapter: 102,
    tamil: "ஊணுடை எச்சம் உயிர்க்கெல்லாம் வேறல்ல\nநாணுடைமை மாந்தர் சிறப்பு.",
    transliteration: "Ūṇuṭai eccam uyirkkellām vēṟalla\nNāṇuṭaimai māntar ciṟappu.",
    english: "Food, clothing, and other things are common to all beings; what distinguishes humanity is the sense of shame.",
    tamilUrai: "உணவு, உடை, வாழ்வை நடத்துவதற்கான ஏனைய தேவைகள் எல்லா உயிர்களுக்கும் பொதுவானவை; ஆனால், நாணுடைமையே மக்களின் சிறப்பாய் உள்ளது.",
    altTranslation: "Food, raiment, and the rest are common to all that lives; Man's special glory is the shame true noble gives. — Pope"
  },
  {
    num: 1013, chapter: 102,
    tamil: "ஊனைக் குறித்த உயிரெல்லாம் நாண்என்னும்\nநன்மை குறித்தது சால்பு.",
    transliteration: "Ūṉaik kuṟitta uyirellām nāṇeṉṉum\nNaṉmai kuṟittatu cālpu.",
    english: "All souls dwell in the body; nobility dwells in the virtue called shame.",
    tamilUrai: "எல்லா உயிர்களும் உடலை சார்ந்து விளங்குவதுபோல, சான்றாண்மை என்னும் நிறைந்த பண்பு நாண் என்னும் நல்லிலக்கணத்தை சார்ந்தே விளங்குகிறது.",
    altTranslation: "As all souls in body dwell, so nobleness is found Within the house of shame — its proper ground. — Pope"
  },
  {
    num: 1014, chapter: 102,
    tamil: "அணியன்றோ நாணுடைமை சான்றோர்க்கு அஃதின்றேல்\nபிணியன்றோ பீடு நடை.",
    transliteration: "Aṇiyaṉṟō nāṇuṭaimai cāṉṟōrkku aḵtiṉṟēl\nPiṇiyaṉṟō pīṭu naṭai.",
    english: "Is not shame the ornament of the wise? Without it, their stately walk would be a disease.",
    tamilUrai: "நாணுடைமை சான்றோர்க்கு ஓர் அணிகலன் அன்றோ? அது இல்லையெனில், அவர்களது கம்பீரமான நடை ஒரு நோய் என்றாகிவிடுமே.",
    altTranslation: "Is not shame the jewel of the great and wise? Without it, what were their stately walk but poor device? — Pope"
  },
  {
    num: 1015, chapter: 102,
    tamil: "பிறர்பழியும் தம்பழியும் நாணுவார் நாணுக்கு\nஉறைபதி என்னும் உலகு.",
    transliteration: "Piṟarpaḻiyum tampaḻiyum nāṇuvār nāṇukku\nUṟaipati eṉṉum ulaku.",
    english: "Those who feel shame for both their own fault and that of others — these the world calls the dwelling-place of shame.",
    tamilUrai: "தமக்கு நேரும் பழிக்கு மட்டுமின்றி, பிறருக்கு நேரும் பழிக்கும் நாணுகின்றவர்களை, நாணம் தங்குமிடம் என்று உலகம் பேசும்.",
    altTranslation: "Who blush at others' shame as at their own, The world declares are shame's true abode and home. — Pope"
  },
  {
    num: 1016, chapter: 102,
    tamil: "நாண்வேலி கொள்ளாது மன்னோ வியன்ஞாலம்\nபேணலர் மேலா யவர்.",
    transliteration: "Nāṇvēli koḷḷātu maṉṉō viyaṉñālam\nPēṇalar mēlā yavar.",
    english: "Great souls do not prize the vast world unless it be fenced by shame.",
    tamilUrai: "நாணம் என்னும் வேலியாக அமையாத வாழ்க்கை, எவ்வளவு பரந்த உலகத்தைத் தருவதாய் இருந்தாலும், மேலானவர்கள் அதைக் கருதி ஏற்க மாட்டார்கள்.",
    altTranslation: "This wide-extended world the noble-minded prize not, If shame be not the fence that sets their limit's plot. — Pope"
  },
  {
    num: 1017, chapter: 102,
    tamil: "நாணால் உயிரைத் துறப்பர் உயிர்ப்பொருட்டால்\nநாண்துறவார் நாணாள் பவர்.",
    transliteration: "Nāṇāl uyiraittuṟappar uyirpporuṭṭāl\nNāṇtuṟavār nāṇāḷ pavar.",
    english: "Those who truly feel shame will give up life for its sake; they will not forsake shame for the sake of life.",
    tamilUrai: "உண்மையாக நாண் உடையவர்கள், நாணத்தின் பொருட்டு தம் உயிரையே விட்டுவிடுவார்கள்; உயிரைக் காக்க நாணத்தை எப்போதும் விடமாட்டார்கள்.",
    altTranslation: "They who know shame give up life for shame's dear sake; For life, they ne'er relinquish shame's pure stake. — Pope"
  },
  {
    num: 1018, chapter: 102,
    tamil: "பிறர்நாணத் தக்கது தான்நாணா னாயின்\nஅறம்நாணத் தக்கது உடைத்து.",
    transliteration: "Piṟarnāṇat takkatu tāṉnāṇā ṉāyiṉ\naṟamnāṇat takkatu uṭaittu.",
    english: "If a man feels no shame for what shames others, then virtue itself will feel shame for him.",
    tamilUrai: "பிறருக்கு நாணம் தரும் செயலுக்கு, தான் நாண மாட்டான் என்றால், அவனைக் கண்டு அறம் தான் நாணி விலகிவிடும்.",
    altTranslation: "If what shames others shames not thee, then virtue's own Must needs be shamed of thee — her face is downward thrown. — Pope"
  },
  {
    num: 1019, chapter: 102,
    tamil: "குலஞ்சுடும் கொள்கை பிழைப்பின் நலஞ்சுடும்\nநாணின்மை நின்றக் கடை.",
    transliteration: "Kulañcuṭum koḷkai piḻaippiṉ nalañcuṭum\nNāṇiṉmai niṉṟak kaṭai.",
    english: "Failure in one's principle burns one's family; shamelessness, when it persists, burns all one's goodness.",
    tamilUrai: "தம் கொள்கையிலிருந்து பிறழ்ந்தால் அது ஒருவரின் குலத்தை அழிக்கும்; நாணம் இல்லாத நிலை, இறுதியில் ஒருவரின் எல்லா நல்ல பண்புகளையும் அழிக்கும்.",
    altTranslation: "Failure in principle burns the race away; Shamelessness, abiding long, burns all good things one day. — Pope"
  },
  {
    num: 1020, chapter: 102,
    tamil: "நாண்அகத் தில்லார் இயக்கம் மரப்பாவை\nநாணால் உயிர்மருட்டி அற்று.",
    transliteration: "Nāṇakat tillār iyakkam marappāvai\nNāṇāl uyirmaruṭṭi aṟṟu.",
    english: "The movements of the shameless are like a wooden puppet pulled by strings pretending to be alive.",
    tamilUrai: "உள்ளத்துள் நாண் இல்லாதவர்களின் உடல் நடை, நூலால் உயிர் பெற்று இயங்குவது போல் தோன்றும் மரப்பாவையை ஒத்தது.",
    altTranslation: "The shameless move as wooden puppets by a string, That seem with life, but never have its spring. — Pope"
  },

  // CHAPTER 103 — The Way of Maintaining the Family
  {
    num: 1021, chapter: 103,
    tamil: "கருமம் செயஒருவன் கைதூவேன் என்னும்\nபெருமையிற் பீடுடையது இல்.",
    transliteration: "Karumam ceyaoruvaṉ kaitūvēṉ eṉṉum\nPerumaiyiṟ pīṭuṭaiyatu il.",
    english: "There is no greater dignity than for a man to say, 'I will never slacken in working for my family's honour.'",
    tamilUrai: "\"கடமைச் செயல்களைச் செய்வதில் என் கைகளை விட மாட்டேன்\" என்று ஒருவன் உறுதியோடு கூறுவதற்கு ஒப்பான பெருமையான சிறப்பு வேறு எதுவும் இல்லை.",
    altTranslation: "No loftier dignity than his who firm doth say, 'For family's honour toil will I without delay.' — Pope"
  },
  {
    num: 1022, chapter: 103,
    tamil: "ஆள்வினையும் ஆன்ற அறிவும் எனஇரண்டின்\nநீள்வினையால் நீளும் குடி.",
    transliteration: "Āḷviṉaiyum āṉṟa aṟivum eṉairaṇṭiṉ\nNīḷviṉaiyāl nīḷum kuṭi.",
    english: "A family rises high by the two — manly effort and perfected wisdom — joined in long-sustained action.",
    tamilUrai: "ஆண்மை நிறைந்த முயற்சி, முழுமை பெற்ற அறிவு — இவ்விரண்டும் இணைந்த நீடித்த செயல்களால், ஒரு குடி உயர்ந்து வளர்கிறது.",
    altTranslation: "By manly effort linked with wisdom's perfect store, Through long sustained work, a family stands the more. — Pope"
  },
  {
    num: 1023, chapter: 103,
    tamil: "குடிசெய்வல் என்னும் ஒருவற்குத் தெய்வம்\nமடிதற்றுத் தான்முந் துறும்.",
    transliteration: "Kuṭiceyval eṉṉum oruvaṟkut teyvam\nMaṭitaṟṟut tāṉmun tuṟum.",
    english: "To him who resolves 'I will raise my family,' God himself tucks up his robes and runs before him.",
    tamilUrai: "\"எம் குடியை உயர்த்துவேன்\" என்று உறுதி கூறி உழைப்பவருக்கு முன்னே, தெய்வமே தன் ஆடையைக் கட்டிக்கொண்டு விரைந்து சென்று வழிகாட்டும்.",
    altTranslation: "For him who says 'I'll raise my kindred high,' E'en God with robes tucked up doth to his aid fly. — Pope"
  },
  {
    num: 1024, chapter: 103,
    tamil: "சூழாமல் தானே முடிவெய்தும் தம்குடியைத்\nதாழாது உஞற்று பவர்க்கு.",
    transliteration: "Cūḻāmal tāṉē muṭiveytum tamkuṭiyait\nTāḻātu uñaṟṟu pavarkku.",
    english: "To those who work unceasingly for their family, success comes of itself, without deep deliberation.",
    tamilUrai: "தமது குடியை உயர்த்துவதற்குத் தயங்காது முயற்சி செய்பவருக்கு, ஆராயாமலேயே, செய்யும் செயல் தானாகவே வெற்றி அடையும்.",
    altTranslation: "To those who toil unresting for their family's gain, Without deep thought, success of itself doth remain. — Pope"
  },
  {
    num: 1025, chapter: 103,
    tamil: "குற்றம் இலனாய்க் குடிசெய்து வாழ்வானைச்\nசுற்றமாச் சுற்றும் உலகு.",
    transliteration: "Kuṟṟam ilaṉāyk kuṭiceytu vāḻvāṉaic\nCuṟṟamāc cuṟṟum ulaku.",
    english: "The world itself becomes the kindred of the blameless man who lives for his family's good.",
    tamilUrai: "குற்றமில்லாத ஒழுக்கத்தோடு தம் குடியை உயர்த்தி வாழ்பவனை, உலகமே அவனது சுற்றமாய் ஆகி சூழ்ந்து நிற்கும்.",
    altTranslation: "The world becomes his kindred, closely gathering round, Who blameless lives, and makes his family sound. — Pope"
  },
  {
    num: 1026, chapter: 103,
    tamil: "நல்லாண்மை என்பது ஒருவற்குத் தான்பிறந்த\nஇல்லாண்மை ஆக்கிக் கொளல்.",
    transliteration: "Nallāṇmai eṉpatu oruvaṟkut tāṉpiṟanta\niLāṇmai ākkik koḻal.",
    english: "True manliness for a man is this — to make the family of his birth grow strong.",
    tamilUrai: "ஒருவனுக்குரிய சிறந்த ஆண்மை என்று சொல்லப்படுவது, தான் பிறந்த குடியைச் சிறப்புடன் நிலைநிறுத்தி வளர்ப்பதே.",
    altTranslation: "True manhood is the making of one's birth-born race to rise, To reap the honour of its own supplies. — Pope"
  },
  {
    num: 1027, chapter: 103,
    tamil: "அமரகத்து வன்கண்ணர் போலத் தமரகத்தும்\nஆற்றுவார் மேற்றே பொறை.",
    transliteration: "Amarakattu vaṉkaṇṇar pōlat tamarakattum\nĀṟṟuvār mēṟṟē poṟai.",
    english: "As in battle the brave bear the brunt, so in a family the burden falls on its capable sons.",
    tamilUrai: "போர்க்களத்தில் வீரம் மிக்கவர்கள் போரின் சுமையை தாங்குவதுபோல, ஒரு குடியில் ஆற்றல் மிக்கவர்களே குடியின் எல்லாச் சுமையையும் தாங்கி நிற்பர்.",
    altTranslation: "As brave men bear the brunt on battle's bloody field, So in the family the strong alone the burden wield. — Pope"
  },
  {
    num: 1028, chapter: 103,
    tamil: "குடிசெய்வார்க் கில்லை பருவம் மடிசெய்து\nமானம் கருதக் கெடும்.",
    transliteration: "Kuṭiceyvārk killai paruvam maṭiceytu\nMāṉam karutak keṭum.",
    english: "There are no seasons for one who raises his family; if he is slothful or overly mindful of his dignity, it will ruin.",
    tamilUrai: "தம் குடியை உயர்த்த முயல்கிறவர்க்கு, நேரம் காலம் என்று ஒரு பொருட்டல்ல; சோம்பியிருந்து, அதிக மானம் கருதினால், குடி அழியும்.",
    altTranslation: "No season for the toiler of his kindred's cause; Sloth, stiff-necked pride, in ruin will him pause. — Pope"
  },
  {
    num: 1029, chapter: 103,
    tamil: "இடும்பைக்கே கொள்கலங் கொல்லோ குடும்பத்தைக்\nகுற்றம் மறைப்பான் உடம்பு.",
    transliteration: "Iṭumpaikkē koḷkalaṅ kollō kuṭumpattaik\nKuṟṟam maṟaippāṉ uṭampu.",
    english: "Is not the body of him who shields his family from blame only a vessel of suffering?",
    tamilUrai: "தனது குடும்பத்தின் குற்றங்கள் வெளியே தெரியாமல் மறைத்துக் காப்பவனின் உடம்பு, துன்பங்களை ஏற்று நிற்கும் பாத்திரம் அல்லவா?",
    altTranslation: "Is not the body of him who guards his household's name, But as a vessel filled with grief, enduring shame? — Pope"
  },
  {
    num: 1030, chapter: 103,
    tamil: "இடுக்கண்கால் கொன்றிட வீழும் அடுத்தூன்றும்\nநல்லாள் இலாத குடி.",
    transliteration: "Iṭukkaṇkāl koṉṟiṭa vīḻum aṭuttūṉṟum\nnallāḷ ilāta kuṭi.",
    english: "Calamity cuts down the supports, and the family falls — when there is no good man to prop it up.",
    tamilUrai: "துன்பம் காலை துண்டித்துப் போட்டால், வீழ்ந்து விடுகின்றது அக் குடும்பம் — அதைத் தாங்கி நிறுத்த வல்ல நல்ல ஆண் இல்லாத நிலையில்.",
    altTranslation: "Cut at its foot by woe, the family shall fall, When there is no good man to prop the hall. — Pope"
  },

  // CHAPTER 104 — Agriculture (Farming)
  {
    num: 1031, chapter: 104,
    tamil: "சுழன்றும்ஏர்ப் பின்னது உலகம் அதனால்\nஉழந்தும் உழவே தலை.",
    transliteration: "Cuḻaṉṟumērp piṉṉatu ulakam ataṉāl\nUḻantum uḻavē talai.",
    english: "The world follows the plough, however much it wanders; and so, despite its hardships, farming is the noblest work.",
    tamilUrai: "உலகம் பல வழிகளில் சுற்றிச் சுழன்றாலும், இறுதியில் உழவின் பின்னாலேயே அமையும்; ஆதலால் வருத்தம் மிக்கதாயினும், உழவுத் தொழிலே மேலானது.",
    altTranslation: "Though it wanders wide, the world must needs the plough pursue; Hence tillage, toilsome though it be, holds place most due. — Pope"
  },
  {
    num: 1032, chapter: 104,
    tamil: "உழுவார் உலகத்தார்க்கு ஆணிஅஃ தாற்றாது\nஎழுவாரை எல்லாம் பொறுத்து.",
    transliteration: "Uḻuvār ulakattārkku āṇiaḵ tāṟṟātu\neḻuvārai ellām poṟuttu.",
    english: "Farmers are the linchpin of the world; they support all the others who cannot till the soil themselves.",
    tamilUrai: "உழவுத் தொழிலை ஆற்ற இயலாத எல்லோரையும் தாங்கி நிற்கும் உழவர்களே, உலகத்திற்கு முக்கிய அச்சாணி போன்றவர்.",
    altTranslation: "The farmers are the world's own axle, firm and true, Supporting all who cannot plough and sow anew. — Pope"
  },
  {
    num: 1033, chapter: 104,
    tamil: "உழுதுண்டு வாழ்வாரே வாழ்வார்மற் றெல்லாம்\nதொழுதுண்டு பின்செல் பவர்.",
    transliteration: "Uḻutuṇṭu vāḻvārē vāḻvārmaṟ ṟellām\nToḻutuṇṭu piṉcel pavar.",
    english: "Those who plough the earth and live by their labour are the true livers; all others merely follow and beg their bread.",
    tamilUrai: "உழுது உணவை ஈட்டி வாழ்கிறவர்களே உண்மையான வாழ்கிறவர்கள்; மற்றவர்கள் எல்லோரும், அவர்களை வணங்கி, அவர்கள் தரும் உணவை உண்டு வாழ்பவர்களே.",
    altTranslation: "Who live by ploughing — they alone truly live; All others bow and follow, their food to them give. — Pope"
  },
  {
    num: 1034, chapter: 104,
    tamil: "பலகுடை நீழலும் தம்குடைக்கீழ்க் காண்பர்\nஅலகுடை நீழ லவர்.",
    transliteration: "Palakuṭai nīḻalum tamkuṭaikkīḻk kāṇpar\naLakuṭai nīḻa lavar.",
    english: "Many princes with their umbrellas of state will gather under the shade of the farmer's umbrella — the shade of his plough.",
    tamilUrai: "தம் உழவினால் பல நாடுகளுக்கும் உணவு தரும் உழவர், பல மன்னர்களின் ஆட்சியையும் தம் குடையின் கீழ் கொண்டு வருவர்.",
    altTranslation: "Beneath the farmer's shade, whose plough supports all lands, Shall many a princely parasol find its stands. — Pope"
  },
  {
    num: 1035, chapter: 104,
    tamil: "இரவார் இரப்பார்க்கொன்று ஈவர் கரவாது\nகைசெய்தூண் மாலை யவர்.",
    transliteration: "Iravār irappārkkoṉṟu īvar karavātu\nKaiceytūṇ mālai yavar.",
    english: "Those who live by the labour of their own hands beg not; they give to those who beg, without concealing what they have.",
    tamilUrai: "தம் கையால் செய்து உழைத்து உண்ணும் இயல்புடைய உழவர், ஒன்றையும் பிறரிடம் இரக்க மாட்டார்கள்; இரப்பவர்க்குத் தாம் கொண்டதை மறைக்காமல், தாராளமாய்க் கொடுப்பார்கள்.",
    altTranslation: "Who by their hand-wrought food do live, to none say 'give'; But giving all that beg, withhold not, gladly live. — Pope"
  },
  {
    num: 1036, chapter: 104,
    tamil: "உழவினார் கைம்மடங்கின் இல்லை விழைவதூஉம்\nவிட்டேமென் பார்க்கும் நிலை.",
    transliteration: "Uḻaviṉār kaimmaṭaṅkiṉ illai viḻaivatūum\nViṭṭēmeṉ pārkkum nilai.",
    english: "If the hands of the farmers stop, even those who say 'we have renounced desire' will have no ground to stand on.",
    tamilUrai: "உழவர்களின் கைகள் உழுவதை நிறுத்தினால், \"நாம் விருப்பங்களை எல்லாம் விட்டு விட்டோம்\" என்று சொல்கின்ற துறவிகளின் நிலை கூட, நிலை இழந்து போய்விடும்.",
    altTranslation: "If farmers' hands should fold, no ground for those remain, Who boast, 'We have renounced all longing, naught retain.' — Pope"
  },
  {
    num: 1037, chapter: 104,
    tamil: "தொடிப்புழுதி கஃசா உணக்கின் பிடித்தெருவும்\nவேண்டாது சாலப் படும்.",
    transliteration: "Toṭippuḻuti kaḵcā uṇakkiṉ piṭitteruvum\nVēṇṭātu cālap paṭum.",
    english: "A land well dried into a pinch of fine dust yields a heavy harvest, even without a handful of manure.",
    tamilUrai: "ஒரு கஃசு எடையுள்ள மண், கால் மாற்று எடை ஆகும் அளவுக்கு நன்றாய் உழுது காயவைத்தால், ஒரு பிடி எருவே வேண்டாம் — அப்படியும் நல்ல விளைச்சல் கிட்டும்.",
    altTranslation: "A field well-dried, till clod be dust, shall yield A heavy crop, though no dung lies in field. — Pope"
  },
  {
    num: 1038, chapter: 104,
    tamil: "ஏரினும் நன்றால் எருவிடுதல் கட்டபின்\nநீரினும் நன்றதன் காப்பு.",
    transliteration: "Ēriṉum naṉṟāl eruviṭutal kaṭṭapiṉ\nNīriṉum naṉṟataṉ kāppu.",
    english: "Manuring is better than ploughing; after weeding, guarding the crop is better than watering.",
    tamilUrai: "உழுவதைக் காட்டிலும் எரு இடுதல் சிறந்தது; களை எடுத்த பிறகு, நீர் பாய்ச்சுவதை விட, பயிரைக் காவல் காப்பதே சிறந்தது.",
    altTranslation: "Better than ploughing is the manuring's art; Once weeded, guard outweighs the watering part. — Pope"
  },
  {
    num: 1039, chapter: 104,
    tamil: "செல்லான் கிழவன் இருப்பின் நிலம்புலந்து\nஇல்லாளின் ஊடி விடும்.",
    transliteration: "Cellāṉ kiḻavaṉ iruppiṉ nilampulantu\nIllāḷiṉ ūṭi viṭum.",
    english: "If the owner does not visit his field, the land grows sullen like a neglected wife.",
    tamilUrai: "உடையவனே நேரடியாக வயலுக்குச் சென்று கவனியாமல் இருந்தால், அந்த நிலம், புறக்கணிக்கப்பட்ட மனைவியைப் போலப் பிணங்கிவிடும்.",
    altTranslation: "If the owner go not forth to see his land, 'Twill sulk as wife untended to his hand. — Pope"
  },
  {
    num: 1040, chapter: 104,
    tamil: "இலமென்று அசைஇ இருப்பாரைக் காணின்\nநிலமென்னும் நல்லாள் நகும்.",
    transliteration: "Ilameṉṟu acaii iruppāraik kāṇiṉ\nNilameṉṉum nallāḷ nakum.",
    english: "Lady Earth herself smiles to scorn those who sit idle saying, 'We are poor.'",
    tamilUrai: "\"நாம் ஏழ்மையானவர்கள்\" என்று சொல்லிக்கொண்டு, சோம்பிக் கிடக்கும் மக்களைக் கண்டு, நிலம் என்னும் நல்ல பெண் ஏளனமாகச் சிரிப்பாள்.",
    altTranslation: "At those who idle sit and say, 'We are too poor,' Earth's gentle lady laughs, withholding not her jeer. — Pope"
  },

  // CHAPTER 105 — Poverty
  {
    num: 1041, chapter: 105,
    tamil: "இன்மையின் இன்னாதது யாதெனின் இன்மையின்\nஇன்மையே இன்னா தது.",
    transliteration: "Iṉmaiyiṉ iṉṉātatu yāteṉiṉ iṉmaiyiṉ\nIṉmaiyē iṉṉā tatu.",
    english: "What is more painful than poverty? Only poverty itself can be more painful than poverty.",
    tamilUrai: "வறுமையைவிட துன்பம் தருவது எது என்று கேட்டால், வறுமையே வறுமையைவிடத் துன்பம் தருவது என்பதே பதில்.",
    altTranslation: "What's worse than poverty? Save poverty alone, No greater grief to living soul is known. — Pope"
  },
  {
    num: 1042, chapter: 105,
    tamil: "இன்மை எனவொரு பாவி மறுமையும்\nஇம்மையும் இன்றி வரும்.",
    transliteration: "Iṉmai eṉavoru pāvi maṟumaiyum\niMmaiyum iṉṟi varum.",
    english: "Poverty is a single sinner that takes away both this world and the next from its victim.",
    tamilUrai: "வறுமை என்னும் ஒரு கொடிய பாவி வந்து சேர்ந்தால், வந்தவனுக்கு இம்மை வாழ்வும், மறுமை வாழ்வும் இரண்டுமே அற்றுப் போகின்றன.",
    altTranslation: "This sinner poverty when in one's life she falls, Robs him of both this world and what beyond befalls. — Pope"
  },
  {
    num: 1043, chapter: 105,
    tamil: "தொல்வரவும் தோலும் கெடுக்கும் தொகையாக\nநல்குரவு என்னும் நசை.",
    transliteration: "Tolvaravum tōlum keṭukkum tokaiyāka\nNalkuravu eṉṉum nacai.",
    english: "The craving called poverty together destroys ancestral lineage and the glow of the skin.",
    tamilUrai: "\"நல்குரவு\" (வறுமையுடன் வரும் பேராசை) என்பது, தொன்றுதொட்டுவரும் குடிப் பெருமையையும், உடலின் ஒளியையும் ஒருசேர அழிக்கும்.",
    altTranslation: "That longing misery called want doth both destroy, Ancestral glory and the body's wonted joy. — Pope"
  },
  {
    num: 1044, chapter: 105,
    tamil: "இற்பிறந்தார் கண்ணேயும் இன்மை இளிவந்த\nசொற்பிறக்கும் சோர்வு தரும்.",
    transliteration: "Iṟpiṟantār kaṇṇēyum iṉmai iḷivanta\nCoṟpiṟakkum cōrvu tarum.",
    english: "Even in those born of noble family, poverty brings the weakness from which shameful words arise.",
    tamilUrai: "உயர்ந்த குடியில் பிறந்தவரின் பாலே, வறுமை தரும் சோர்வால், இழிவான சொற்கள் பிறக்கும் நிலை ஏற்படும்.",
    altTranslation: "E'en in the noble-born, stern want doth bring such strain As from their lips ignoble words o'ertake their reign. — Pope"
  },
  {
    num: 1045, chapter: 105,
    tamil: "நல்குரவு என்னும் இடும்பையுள் பல்குரைத்\nதுன்பங்கள் சென்று படும்.",
    transliteration: "Nalkuravu eṉṉum iṭumpaiyuḷ palkurait\ntuṉpaṅkaḷ ceṉṟu paṭum.",
    english: "Within the one great misfortune called poverty, many manifold sorrows come to dwell.",
    tamilUrai: "\"நல்குரவு\" என்னும் ஒரே துன்பத்திற்குள், பற்பல வேறுபட்ட துன்பங்கள் வந்து குடியேறி தங்கும்.",
    altTranslation: "Within the single woe called want's distress, There dwell unnumbered griefs no words express. — Pope"
  },
  {
    num: 1046, chapter: 105,
    tamil: "நற்பொருள் நன்குணர்ந்து சொல்லினும் நல்கூர்ந்தார்\nசொற்பொருள் சோர்வு படும்.",
    transliteration: "Naṟporuḷ naṉkuṇarntu colliṉum nalkūrntār\nCoṟporuḷ cōrvu paṭum.",
    english: "Even when they speak with a clear grasp of good meaning, the words of the poor lose their force.",
    tamilUrai: "அறமான பொருள்களை நன்கு உணர்ந்து கூறினாலும், வறுமைப்பட்டவர்கள் சொற்கள், உள்ளத்தில் பதியாமல் தளர்ந்து போய்விடும்.",
    altTranslation: "Though with deep grasp of truth he speak, the poor man's word Of all its weight is thinned — by none is clearly heard. — Pope"
  },
  {
    num: 1047, chapter: 105,
    tamil: "அறஞ்சாரா நல்குரவு ஈன்றதா யானும்\nபிறன்போல நோக்கப் படும்.",
    transliteration: "Aṟañcārā nalkuravu īṉṟatā yāṉum\nPiṟaṉpōla nōkkap paṭum.",
    english: "The poor man who has strayed from virtue is looked upon as a stranger even by his own mother.",
    tamilUrai: "அறம் நிறைந்த நடை இல்லாமல் வறுமையில் வாழும் ஒருவனை, அவனைப் பெற்ற தாயும் கூட, புறத்தவனைப் போலவே பார்க்கின்றாள்.",
    altTranslation: "The poor who from right path have strayed, e'en she who bore Him looks as stranger — pitiless her heart's poor. — Pope"
  },
  {
    num: 1048, chapter: 105,
    tamil: "இன்றும் வருவது கொல்லோ நெருநலும்\nகொன்றது போலும் நிரப்பு.",
    transliteration: "Iṉṟum varuvatu kollō nerunalum\nkoṉṟatu pōlum nirappu.",
    english: "'Today also will it come, the poverty that almost killed me yesterday?' — so the poor man trembles.",
    tamilUrai: "\"நேற்று என்னைக் கொன்றதற்கு ஒப்பான துன்பத்தை தந்த வறுமை இன்றும் வந்து சேருமோ\" — என்று ஏழை அஞ்சி நடுங்குவான்.",
    altTranslation: "'Today also, will it come — the want that yesterday Almost had slain me?' — thus the poor man's thoughts fain say. — Pope"
  },
  {
    num: 1049, chapter: 105,
    tamil: "நெருப்பினுள் துஞ்சலும் ஆகும் நிரப்பினுள்\nயாதொன்றும் கண்பாடு அரிது.",
    transliteration: "Neruppiṉuḷ tuñcalum ākum nirappiṉuḷ\nYātoṉṟum kaṇpāṭu aritu.",
    english: "One might even sleep amidst fire; but in the midst of poverty, no sleep at all is possible.",
    tamilUrai: "நெருப்பின் நடுவே கூட ஒருவன் தூங்கிவிடக் கூடும்; ஆனால், வறுமையின் நடுவில் எப்படியும் தூங்க இயலாது.",
    altTranslation: "In fire itself, some sleep perchance may find; In poverty, no sleep at all can close the mind. — Pope"
  },
  {
    num: 1050, chapter: 105,
    tamil: "துப்பர வில்லார் துவரத் துறவாமை\nஉப்பிற்கும் காடிக்கும் கூற்று.",
    transliteration: "Tuppara villār tuvarat tuṟavāmai\nUppiṟkum kāṭikkum kūṟṟu.",
    english: "Those without resources who do not renounce the world altogether become death even to water and salt.",
    tamilUrai: "வாழ்வதற்கு வழி தெரியாத ஏழ்மையினர், துறவியாகாமல் உலக வாழ்வில் தொடர்ந்தால், உப்பும், பழங்கஞ்சியும் உடையவருக்கு கூட எமன் போல் ஆக நேரிடும்.",
    altTranslation: "The resource-less who renounce not the world's pursuit, Become as death to host's small salt and gruel mute. — Pope"
  },

  // CHAPTER 106 — Mendicancy
  {
    num: 1051, chapter: 106,
    tamil: "இரக்க இரத்தக்கார்க் காணின் கரப்பின்\nஅவர்பழி தம்பழி அன்று.",
    transliteration: "Irakka irattakkārk kāṇiṉ karappiṉ\navarpaḻi tampaḻi aṉṟu.",
    english: "Beg of those who would give willingly; if they refuse, the blame is theirs, not yours.",
    tamilUrai: "ஈதலை விரும்புவர் என்று உறுதி பெற்றவரிடத்தில் கேட்கலாம்; அவர்கள் தராமல் மறைத்தால், அந்தப் பழி அவருடையது; கேட்டவரது அல்ல.",
    altTranslation: "Seek men of generous mind; if they refuse their store, The blame on them, not thee — such beggar's lore. — Pope"
  },
  {
    num: 1052, chapter: 106,
    tamil: "இன்பம் ஒருவற்கு இரத்தல் இரந்தவை\nதுன்பம் உறாஅ வரின்.",
    transliteration: "Iṉpam oruvaṟku irattal irantavai\nTuṉpam uṟāa variṉ.",
    english: "Begging itself can be pleasant, if what is begged for comes without grief to the giver.",
    tamilUrai: "கேட்கப்பட்ட பொருள் கொடுத்தவரை துன்பம் அடையச் செய்யாத வகையில் கிடைத்தால், இரத்தலும் ஒருவருக்கு இன்பமாய் ஆகிவிடும்.",
    altTranslation: "Even begging can be bliss, if what we crave Comes without grief on him who's generous, brave. — Pope"
  },
  {
    num: 1053, chapter: 106,
    tamil: "கரப்பிலா நெஞ்சின் கடனறிவார் முன்நின்று\nஇரப்புமோ ரேஎர் உடைத்து.",
    transliteration: "Karappilā neñciṉ kaṭaṉaṟivār muṉniṉṟu\niRappumō rēer uṭaittu.",
    english: "To stand before those of unconcealing heart, who know their duty, and to beg — this has its own beauty.",
    tamilUrai: "மறைக்காத உள்ளத்துடனும், கொடையை தம் கடமையாய் அறிந்தவரின் முன்னிலையில் நின்று கேட்பது, ஒருவகை அழகையே கொண்டது.",
    altTranslation: "To stand before the frank of heart who know their debt, And beg of them — a beauty of its own is set. — Pope"
  },
  {
    num: 1054, chapter: 106,
    tamil: "இரத்தலும் ஈதலே போலும் கரத்தல்\nகனவிலும் தேற்றாதார் மாட்டு.",
    transliteration: "Irattalum ītalē pōlum karattal\nKaṉaviLum tēṟṟātār māṭṭu.",
    english: "Begging of those who do not conceal their wealth even in a dream is as noble as giving.",
    tamilUrai: "கனவிலும் பொருளை மறைக்கத் தெரியாத பெரியவரிடத்தில் கேட்பதுகூட, கொடுப்பதற்கு இணையான மேன்மையை உடையதாகும்.",
    altTranslation: "To beg of those who, even in sleep, conceal no store, Is noble as to give — even more. — Pope"
  },
  {
    num: 1055, chapter: 106,
    tamil: "கரப்பிலார் வையகத்து உண்மையால் கண்ணின்று\nஇரப்பவர் மேற்கொள் வது.",
    transliteration: "Karappilār vaiyakattu uṇmaiyāl kaṇṇiṉṟu\niRappavar mēṟkoḷ vatu.",
    english: "It is because there exist the generous who hide nothing that men stand before them and beg.",
    tamilUrai: "மறைக்காமல் தரும் நல்லோர் இந்த உலகத்தில் இருப்பதாலேயே, இரப்பவர்கள் அவர் முகம் நோக்கி நின்று கேட்கும் துணிவைப் பெறுகிறார்கள்.",
    altTranslation: "Because such generous men on earth exist, 'tis thus That beggars boldly front and beg their dole from us. — Pope"
  },
  {
    num: 1056, chapter: 106,
    tamil: "கரப்பிடும்பை யில்லாரைக் காணின் நிரப்பிடும்பை\nஎல்லாம் ஒருங்கு கெடும்.",
    transliteration: "Karappiṭumpai yillāraik kāṇiṉ nirappiṭumpai\nEllām oruṅku keṭum.",
    english: "When one finds those untouched by the pain of refusal, all the miseries of poverty at once perish.",
    tamilUrai: "\"இல்லை\" என்ற சொல்லால் துன்பப்படுத்தாத, மறைக்காமல் கொடுக்கும் பெரியவரை கண்டுவிட்டால், வறுமையால் வரும் எல்லாத் துன்பங்களும் ஒரேசமயத்தில் நீங்கிவிடும்.",
    altTranslation: "Find those who know not how to say 'I have none,' All woes of penury are in a moment gone. — Pope"
  },
  {
    num: 1057, chapter: 106,
    tamil: "இகழ்ந்தெள்ளாது ஈவாரைக் காணின் மகிழ்ந்துள்ளம்\nஉள்ளுள் உவப்பது உடைத்து.",
    transliteration: "Ikaḻnteḷḷātu īvāraik kāṇiṉ makiḻntuḷḷam\nUḷḷuḷ uvappatu uṭaittu.",
    english: "To meet those who give without scorn brings joy that fills the heart deep within.",
    tamilUrai: "இகழாமல், பிறரை எள்ளிப் பேசாமல், அன்புடன் கொடுப்பவரைக் கண்டால், கேட்பவரின் மனம் மகிழ்ச்சியுடன் உள்ளுக்குள்ளே மகிழும் தன்மை பெறுகிறது.",
    altTranslation: "To meet with those who give, yet scorn not those who pray, The heart within rejoices, gladder than the day. — Pope"
  },
  {
    num: 1058, chapter: 106,
    tamil: "இரப்பாரை இல்லாயின் ஈர்கிண் டதனை\nமரப்பாவை சென்றுவந் தற்று.",
    transliteration: "Irappārai illāyiṉ īrkiṇ ṭataṉai\nMarappāvai ceṉṟuvan taṟṟu.",
    english: "If there were no beggars, the great wide world would be like lifeless wooden puppets moving about.",
    tamilUrai: "இரப்போர் இல்லாமல் போனால், இந்த விசாலமான உலகம், உயிர்ப்பற்ற மரப்பாவைகள் இடம் மாறி சென்று வருவது போன்றதாக ஆகிவிடும்.",
    altTranslation: "Were there no beggars, this wide world would seem To be but wooden puppets' to-and-fro in dream. — Pope"
  },
  {
    num: 1059, chapter: 106,
    tamil: "ஈவார்கண் என்னுண்டாம் தோற்றம் இரந்துகோள்\nமேவார் இலாஅக் கடை.",
    transliteration: "Īvārkaṇ eṉṉuṇṭām tōṟṟam irantukōḷ\nMēvār ilāak kaṭai.",
    english: "What glory would remain for the generous, if there were none to come and beg?",
    tamilUrai: "கேட்டுப் பெற்றுக்கொள்ள ஆவலுடையோர் இல்லாத நிலையில், தருபவரிடத்தில் என்ன பெருமையான தோற்றம் இருக்கும்?",
    altTranslation: "What glory would the giver's name possess at all, If none were there to beg and hear his generous call? — Pope"
  },
  {
    num: 1060, chapter: 106,
    tamil: "இரப்பான் வெகுளாமை வேண்டும் நிரப்பிடும்பை\nதானேயும் சாலும் கரி.",
    transliteration: "Irappāṉ vekuḷāmai vēṇṭum nirappiṭumpai\nTāṉēyum cālum kari.",
    english: "Let the beggar not grow angry at refusal; the misery of his own poverty is witness enough of its truth.",
    tamilUrai: "கேட்டு மறுக்கப்பட்டபோது, இரப்பவன் சினம் கொள்ளக் கூடாது; தான் படும் வறுமையின் துன்பமே, தனக்கு அந்த மறுப்பு நடந்ததற்கான சாட்சியாய் அமையும்.",
    altTranslation: "The beggar should not wrath embrace when refused; His own sharp want is witness he has mused. — Pope"
  },

  // CHAPTER 107 — Dread of Mendicancy
  {
    num: 1061, chapter: 107,
    tamil: "கரவாது உவந்தீயும் கண்ணன்னார் கண்ணும்\nஇரவாமை கோடி உறும்.",
    transliteration: "Karavātu uvantīyum kaṇṇaṉṉār kaṇṇum\niRavāmai kōṭi uṟum.",
    english: "Not to beg, even from those dear as our own eyes who give gladly without concealing, is worth a crore.",
    tamilUrai: "மறைக்காமல் மகிழ்ச்சியுடன் தருகின்ற, நம் கண்ணைப் போன்ற விருப்பமான நண்பர்களிடத்திலும் கூட, பிச்சை கேட்காமல் இருப்பது கோடி மடங்கு சிறப்பான செயலாகும்.",
    altTranslation: "Though hands of friends, as dear as eye, give free from care, Not to beg is worth a crore — such boon is rare. — Pope"
  },
  {
    num: 1062, chapter: 107,
    tamil: "இரந்தும் உயிர்வாழ்தல் வேண்டின் பரந்து\nகெடுக உலகியற்றி யான்.",
    transliteration: "Irantum uyirvāḻtal vēṇṭiṉ parantu\nKeṭuka ulakiyaṟṟi yāṉ.",
    english: "If the Creator has ordained that some must beg to live, let him too wander and perish.",
    tamilUrai: "சிலர் பிச்சை எடுத்து உயிர்வாழ வேண்டும் என்பதை, இந்த உலகத்தை படைத்தவன் விதித்திருந்தால், அவனும் அவ்வாறே பல இடங்கள் அலைந்து கெடுவானாக.",
    altTranslation: "If Fate decreed that some must beg to live their days, Let Him who made this world wander too, to perish. — Pope"
  },
  {
    num: 1063, chapter: 107,
    tamil: "இன்மை இடும்பை இரந்துதீர் வாம்என்னும்\nவன்மையின் வன்பாட்டது இல்.",
    transliteration: "Iṉmai iṭumpai irantutīr vāmeṉṉum\nVaṉmaiyiṉ vaṉpāṭṭatu il.",
    english: "There is no shamelessness greater than the boldness of him who says, 'I shall relieve my poverty by begging.'",
    tamilUrai: "\"வறுமையின் துன்பத்தை இரந்தே தீர்த்துக்கொள்வேன்\" என்று சொல்லும் இயல்பான கொடிய துணிவை விட, வேறு கொடிய துணிவு எதுவும் இல்லை.",
    altTranslation: "No hardness of heart surpasses the hard resolve Of him who says, 'Begging my want shall solve.' — Pope"
  },
  {
    num: 1064, chapter: 107,
    tamil: "இடமெல்லாம் கொள்ளாத் தகைத்தே இடமில்லாக்\nகாலும் இரவொல்லாச் சால்பு.",
    transliteration: "Iṭamellām koḷḷāt takaittē iṭamillāk\nKālum iravollāc cālpu.",
    english: "The greatness that will not beg, even in extremity, is too vast for all the world to contain.",
    tamilUrai: "வாழ்வதற்கு வழி இல்லாத நிலையிலும் கூட, இரப்பதற்கு உடன்படாத சான்றாண்மைப் பெருமை, உலகம் முழுவதுமே அதற்கு இடம் தரத் தகுதி இல்லாத அளவு பெரியது.",
    altTranslation: "The greatness that refuses to beg, whate'er befalls, Is vaster than this world whose breadth the heart appals. — Pope"
  },
  {
    num: 1065, chapter: 107,
    tamil: "தெண்ணீர் அடுபுற்கை ஆயினும் தாள்தந்தது\nஉண்ணலின் ஊங்கினிய தில்.",
    transliteration: "Teṇṇīr aṭupuṟkai āyiṉum tāḷtantatu\nUṇṇaliṉ ūṅkiṉiya til.",
    english: "Even a thin gruel, if earned by one's own labour, is sweeter than anything else.",
    tamilUrai: "தெளிந்த நீரில் கலக்கப்பட்ட கூழாய் இருந்தாலும், தமது உழைப்பால் ஈட்டிய உணவை உண்பதை விட இனிய உணவு வேறெதுவும் இல்லை.",
    altTranslation: "Though thin water-gruel, by own toil earned, it be, Nothing's more sweet than this, 'tis clear to see. — Pope"
  },
  {
    num: 1066, chapter: 107,
    tamil: "ஆவிற்கு நீரென்று இரப்பினும் நாவிற்கு\nஇரவின் இளிவந்த தில்.",
    transliteration: "Āviṟku nīreṉṟu irappiṉum nāviṟku\niRaviṉ iḷivanta til.",
    english: "Even to beg water for one's cow is disgraceful to the tongue.",
    tamilUrai: "\"என் பசு தாகமாக இருக்கிறது, நீர் கொடுங்கள்\" என்ற புனிதக் காரணத்திற்கே ஆனாலும், யாசிக்கும் சொல்லைச் சொல்வது நாவுக்கு இழிவாகும்.",
    altTranslation: "Even to beg water for one's kine — the tongue That utters the poor plea is grievously wrung. — Pope"
  },
  {
    num: 1067, chapter: 107,
    tamil: "இரப்பன் இரப்பாரை எல்லாம் இரப்பின்\nகரப்பார் இரவன்மின் என்று.",
    transliteration: "Irappaṉ irappārai ellām irappiṉ\nKarappār iravaṉmiṉ eṉṟu.",
    english: "I beg all beggars — if you must beg, do not beg of those who conceal what they have.",
    tamilUrai: "கேட்பவர்கள் அனைவரையும் நான் ஒன்றை வேண்டிக் கேட்கிறேன்: நீங்கள் யாசிக்கப் போகிறீர்கள் என்றால், மறைத்து வைத்திருப்பவர்களிடம் மட்டும் யாசிக்க வேண்டாம்.",
    altTranslation: "To beggars all I make my humble prayer: If beg ye must, ask not of those who hide their share. — Pope"
  },
  {
    num: 1068, chapter: 107,
    tamil: "இரவென்னும் ஏமாப்பில் தோணி கரவென்னும்\nபார்தாக்கப் பக்கு விடும்.",
    transliteration: "Iraveṉṉum ēmāppil tōṇi karaveṉṉum\nPārtākkap pakku viṭum.",
    english: "The boat of begging, frail and unsafe, strikes against the rock of refusal and breaks.",
    tamilUrai: "பாதுகாப்பு இல்லாத பலகைப் படகு போன்றது யாசித்தல்; அது \"இல்லை\" என்னும் மறைத்தல் என்னும் கற்பாறையில் மோதி, உடைந்து போகும்.",
    altTranslation: "The frail and unsafe barque of begging surely splits, When on the rock of 'I have none' it beats and quits. — Pope"
  },
  {
    num: 1069, chapter: 107,
    tamil: "இரவுள்ள உள்ளம் உருகும் கரவுள்ள\nஉள்ளதூஉம் இன்றிக் கெடும்.",
    transliteration: "Iravuḷḷa uḷḷam urukum karavuḷḷa\nuḷḷatūum iṉṟik keṭum.",
    english: "The heart melts thinking of begging; thinking of refusal, it is shattered and undone.",
    tamilUrai: "பிச்சை எடுப்பதை நினைத்தாலே, நெஞ்சம் உருகும்; அவர்கள் மறுப்பார்கள் என்று நினைத்தால், மனம் சிதைந்து அழியும்.",
    altTranslation: "The heart doth melt at very thought of begging's shame; It shatters at thought of being refused the same. — Pope"
  },
  {
    num: 1070, chapter: 107,
    tamil: "கரப்பவர்க்கு யாங்கொளிக்கும் கொல்லோ இரப்பவர்\nசொல்லாடப் போஒம் உயிர்.",
    transliteration: "Karappavarkku yāṅkoḷikkum kollō irappavar\nCollāṭap pōom uyir.",
    english: "When a beggar hears the word of refusal, his life departs; where then does the refuser's own life hide?",
    tamilUrai: "மறுக்கின்ற வார்த்தை யாசிப்பவர் காதில் விழுந்ததும், அவர் உயிர் உடலை விட்டு நீங்கும்; அவ்வாறு மறுப்பவரின் உயிர் பின்னர் எங்கே போய் ஒளியுமோ?",
    altTranslation: "The beggar's life departs the word of 'nay' once heard; Where doth the refuser's life hide, when by him 'tis stirred? — Pope"
  },

  // CHAPTER 108 — Baseness
  {
    num: 1071, chapter: 108,
    tamil: "மக்களே போல்வர் கயவர் அவரன்ன\nஒப்பாரி யாங்கண்ட தில்.",
    transliteration: "Makkaḷē pōlvar kayavar avaraṉṉa\nOppāri yāmkaṇṭa til.",
    english: "Base men seem like men; no closer resemblance have we seen in this world.",
    tamilUrai: "கீழ்மக்கள் பார்வையில் மனிதர்களைப் போலவே காட்சி அளிப்பர்; அவ்வளவு நெருங்கிய ஒப்புமையை, வேறு எங்கும் நாம் கண்டதில்லை.",
    altTranslation: "Base men are like to men; no closer likeness known To all the world in all its parts has ever shown. — Pope"
  },
  {
    num: 1072, chapter: 108,
    tamil: "நன்றறி வாரிற் கயவர் திருவுடையர்\nநெஞ்சத்து அவலம் இலர்.",
    transliteration: "Naṉṟaṟi vāriṟ kayavar tiruvuṭaiyar\nNeñcattu avalam ilar.",
    english: "The base are wealthier than the wise in this one thing — they have no anxiety in their hearts.",
    tamilUrai: "நன்மையை உணர்ந்தவர்களை விட, கீழ்மக்கள் ஒரு வகையில் செல்வத்தை உடையவர்கள்; அதாவது, அவர்களுடைய மனத்தில் எவ்விதக் கவலையும் கிடையாது.",
    altTranslation: "In one thing only are the base than wise more blest — Their hearts know not the weight of care, nor anxious rest. — Pope"
  },
  {
    num: 1073, chapter: 108,
    tamil: "தேவர் அனையர் கயவர் அவருந்தாம்\nமேவன செய்தொழுக லான்.",
    transliteration: "Tēvar aṉaiyar kayavar avaruntām\nMēvaṉa ceytoḻuka lāṉ.",
    english: "The base are like gods — both live just as they please.",
    tamilUrai: "கீழ்மக்கள் தேவர்களை ஒத்தவர்கள் என்று கூறலாம்; தேவர்களும், கீழ்மக்களும் தாம் விரும்பியதையே தடையின்றிச் செய்து வாழ்பவர்கள்.",
    altTranslation: "As gods are base men — both in this one way combine: They each do as they list, unchecked by thine or mine. — Pope"
  },
  {
    num: 1074, chapter: 108,
    tamil: "அகப்பட்டி ஆவாரைக் காணின் அவரின்\nமிகப்பட்டுச் செம்மாக்கும் கீழ்.",
    transliteration: "Akappaṭṭi āvāraik kāṇiṉ avariṉ\nMikappaṭṭuc cemmākkum kīḻ.",
    english: "The base, seeing those even baser than themselves, swell with a borrowed pride.",
    tamilUrai: "தம்மைவிட இழிந்த நடத்தை உடையவரைக் கண்டால், கீழ்மக்கள் தாம் அவரை விட மேலானவர்கள் என்று தம்மையே தாம் புகழ்ந்துகொண்டு பெருமிதப்படுவர்.",
    altTranslation: "The base, meeting those of baser grain, as them compare, Swell up with borrowed pride beyond their share. — Pope"
  },
  {
    num: 1075, chapter: 108,
    tamil: "அச்சமே கீழ்களது ஆசாரம் எச்சம்\nஅவாவுண்டேல் உண்டாம் சிறிது.",
    transliteration: "Accamē kīḻkaḷa tācāram eccam\navāvuṇṭēl uṇṭām ciṟitu.",
    english: "Fear is the code of conduct of the base; beyond that, a little is added only by desire.",
    tamilUrai: "கீழ்மக்களுக்கு உள்ள தலையாய ஒழுக்கம், அச்சமே ஆகும்; அதற்கு அடுத்து, மீதமாக ஓர் எண்ணம் கொஞ்சம் இருக்குமானால், அது ஆசையையே சார்ந்ததாகும்.",
    altTranslation: "Fear is the base man's code of conduct chief; Desire supplies the little scrap of fleeting leaf. — Pope"
  },
  {
    num: 1076, chapter: 108,
    tamil: "அறைபறை அன்னர் கயவர்தாம் கேட்ட\nமறைபிறர்க்கு உய்த்துரைக்க லான்.",
    transliteration: "Aṟaipaṟai yaṉṉar kayavartām kēṭṭa\nMaṟaipiṟarkku uytturaikka lāṉ.",
    english: "The base are like beaten drums; they immediately blare out the secrets they hear.",
    tamilUrai: "கீழ்மக்கள் அடிபட்ட பறையை ஒத்தவர்கள்; தாம் கேட்ட மறைபொருளை உள்ளே வைத்துக்கொள்ளாமல், உடனே பிறரிடம் எடுத்துச் சொல்லிவிடுவர்.",
    altTranslation: "The base are like the beaten drum — what secret they've heard, To others straightway they reveal, nor keep a word. — Pope"
  },
  {
    num: 1077, chapter: 108,
    tamil: "ஈர்ங்கை விதிரார் கயவர் கொடிறுடைக்கும்\nகூன்கையர் அல்லா தவர்க்கு.",
    transliteration: "Īrṅkai vitirār kayavar koṭiṟuṭaikkum\nKūṉkaiyar allā tavarkku.",
    english: "The base will not even shake a drop of water from their fingers to give, unless the asker's bent fist breaks their cheek.",
    tamilUrai: "முறுக்கிய கையால் தம் கன்னத்தை அடித்து நொறுக்குபவர் அல்லாதவருக்கு, கீழ்மக்கள் தம் கையில் இருக்கும் ஈரத்தை உதறவும் மாட்டார்கள்.",
    altTranslation: "The base shake not a drop of water to give away, Save to the fist that strikes the cheek — so cruel their sway. — Pope"
  },
  {
    num: 1078, chapter: 108,
    tamil: "சொல்லப் பயன்படுவர் சான்றோர் கரும்புபோல்\nகொல்லப் பயன்படும் கீழ்.",
    transliteration: "Collap payaṉpaṭuvar cāṉṟōr karumpupōl\nKollap payaṉpaṭum kīḻ.",
    english: "The noble yield their use at a mere request; the base are like sugarcane — only when crushed.",
    tamilUrai: "சான்றோர், ஒரு சொல் சொன்ன மாத்திரத்திலேயே பயன் தருவர்; கீழ்மக்களோ, கரும்பைப் போல — இடித்து நசுக்கினால் மட்டுமே பயன்படுவர்.",
    altTranslation: "The noble yield their use by speech alone; The base, like sugar-cane, must crushing own. — Pope"
  },
  {
    num: 1079, chapter: 108,
    tamil: "உடுப்பதூஉம் உண்பதூஉம் காணின் பிறர்மேல்\nவடுக்காண வற்றாகும் கீழ்.",
    transliteration: "Uṭuppatūum uṇpatūum kāṇiṉ piṟarmēl\nVaṭukkāṇa vaṟṟākum kīḻ.",
    english: "Seeing others well-dressed and well-fed, the base grow eager to find some fault in them.",
    tamilUrai: "பிறர் நன்றாய் உடுத்தி, நன்கு உண்டிருப்பதைக் கண்டால், அவர்கள் மீது குற்றத்தைக் காண்பதற்கு கீழ்மக்கள் ஆயத்தமாய் இருப்பர்.",
    altTranslation: "Seeing others well-dressed and fed, the base are prone To hunt for faults, their envy's growth full-grown. — Pope"
  },
  {
    num: 1080, chapter: 108,
    tamil: "எற்றிற் குரியர் கயவரொன்று உற்றக்கால்\nவிற்றற்கு உரியர் விரைந்து.",
    transliteration: "Eṟṟiṟ kuriyar kayavaroṉṟu uṟṟakkāl\nViṟṟaṟku uriyar viraintu.",
    english: "For what use are the base? When trouble comes, they are quick to sell themselves — that is all.",
    tamilUrai: "கீழ்மக்கள் எதற்கு உரியவர்? தமக்கு ஒரு துன்பம் வந்தபோது, தாமே விரைந்து சென்று தம்மை விற்றுக்கொள்ள உரியவர்கள்; வேறு எந்த நற்செயலுக்கும் உரியர் அல்லர்.",
    altTranslation: "For what are base men fit? When trouble comes to call, Themselves for price they'll sell, and that is all. — Pope"
  },

  // CHAPTER 109 — Inbam: The stealth-love
  {
    num: 1081, chapter: 109,
    tamil: "அணங்குகொல் ஆய்மயில் கொல்லோ கனங்குழை\nமாதர்கொல் மாலுமென் நெஞ்சு.",
    transliteration: "Aṇaṅkukol āymayil kollō kaṉaṅkuḻai\nMātarkol mālumeṉ neñcu.",
    english: "Is she a celestial maiden? A splendid peahen? Or is she a mortal woman adorned with heavy earrings? My heart is confounded.",
    tamilUrai: "இவள் தெய்வப் பெண்ணோ? அழகிய மயிலோ? கனமான காதணி அணிந்த பெண்ணோ? என் மனம் மயங்குகிறதே.",
    altTranslation: "A goddess this? a rare peahen? The maid With heavy earrings — my heart is overthrown. — Pope"
  },
  {
    num: 1082, chapter: 109,
    tamil: "நோக்கினாள் நோக்கெதிர் நோக்குதல் தாக்கணங்கு\nதானைக்கொண் டன்ன துடைத்து.",
    transliteration: "Nōkkiṉāḷ nōkketir nōkkutal tākkaṇaṅku\nTāṉaikkoṇ ṭaṉṉa tuṭaittu.",
    english: "Her glance met mine — and it was as though a warrior-goddess had struck me, backed by her army.",
    tamilUrai: "அவள் என்னைப் பார்த்த பார்வைக்கு எதிராக நான் பார்த்தபோது அவள் பார்த்த பார்வை, ஒரு வீர தேவதை தன் படையுடன் வந்து தாக்குவது போல் என்னை வெற்றி கொண்டது.",
    altTranslation: "Her glance that met my gaze was as a warrior fair Who armies leads to battle — my heart was conquered there. — Pope"
  },
  {
    num: 1083, chapter: 109,
    tamil: "பண்டறியேன் கூற்றென் பதனை இனியறிந்தேன்\nபெண்டகையால் பேரமர்க் கட்டு.",
    transliteration: "Paṇṭaṟiyēṉ kūṟṟeṉ pataṉai iṉiyaṟintēṉ\nPeṇṭakaiyāl pērama kkaṭṭu.",
    english: "I never knew what Death was before; now I know — he comes in the form of a woman, with wide warring eyes.",
    tamilUrai: "எமனாகிய \"கூற்றுவன்\" என்பது யாரென்று இதுவரை நான் அறியேன்; இப்போது அறிந்தேன் — அது, பெண்மையை ஏற்றுக் கொண்டு போர் செய்யும் கண்களாய் எனக்கு எதிரில் வந்துவிட்டது.",
    altTranslation: "What Death might be, I never knew till now; but now I see — He comes as woman, with wide warring eyes to conquer me. — Pope"
  },
  {
    num: 1084, chapter: 109,
    tamil: "கண்டார் உயிருண்ணும் தோற்றத்தால் பெண்டகைப்\nபேதைக்கு அமர்த்தன கண்.",
    transliteration: "Kaṇṭār uyiruṇṇum tōṟṟattāl peṇṭakaip\nPētaikku amarttaṉa kaṇ.",
    english: "The simple maiden's eyes, though womanly, are warring weapons that devour the life of those who look upon them.",
    tamilUrai: "கண்டவர்களின் உயிரை உண்ணும்படியான தோற்றத்துடன், பெண்மை கொண்ட அந்தப் பேதைப் பெண்ணின் கண்கள், போர்க்கண்களாய் மாறியிருக்கின்றன.",
    altTranslation: "The maiden's eyes, though woman-shaped in womanly disguise, Steal life from all beholders, with their warring flies. — Pope"
  },
  {
    num: 1085, chapter: 109,
    tamil: "கூற்றமோ கண்ணோ பிணையோ மடவரல்\nநோக்கமிம் மூன்றும் உடைத்து.",
    transliteration: "Kūṟṟamō kaṇṇō piṇaiyō maṭavaral\nNōkkamim mūṉṟum uṭaittu.",
    english: "Is it Death? Is it the eye? Is it a deer? The maiden's glance has all three natures in one.",
    tamilUrai: "அது எமனோ? கண்ணோ? மான்-குட்டியோ? — இந்த இளம் பெண்ணின் பார்வை, இந்த மூன்று தன்மைகளையும் ஒருசேரக் கொண்டதே.",
    altTranslation: "Is it Death? is it the eye? is it the fawn's soft grace? Three natures blend within this maiden's gaze, her face. — Pope"
  },
  {
    num: 1086, chapter: 109,
    tamil: "கொடும்புருவம் கோடா மறைப்பின் நடுங்கஞர்\nசெய்யல மன்இவள் கண்.",
    transliteration: "Koṭumpuruvam kōṭā maṟaippiṉ naṭuṅkañar\nCeyyala maṉivaḷ kaṇ.",
    english: "If only her curved eyebrows did not bend and hide them, her eyes would not cause me this trembling anguish.",
    tamilUrai: "வளைந்த அவளது புருவங்கள் வளையாமல் அவள் கண்களை மறைத்திருக்குமானால், இவளது கண்கள் எனக்கு இந்த நடுங்கும் துயரத்தை ஏற்படுத்த மாட்டா.",
    altTranslation: "Had but those curving brows kept closed her eyes from view, Such trembling anguish ne'er my heart would pursue. — Pope"
  },
  {
    num: 1087, chapter: 109,
    tamil: "கடாஅக் களிற்றின்மேற் கட்படாம் மாதர்\nபடாஅ முலைமேல் துகில்.",
    transliteration: "Kaṭāak kaḷiṟṟiṉmēṟ kaṭpaṭām mātar\nPaṭāa mulaimēl tukil.",
    english: "The cloth that veils her firm breasts is as the cloth that covers the eyes of a rutting elephant.",
    tamilUrai: "அந்தப் பெண்ணின் திரண்ட மார்பின் மீது மறைத்து அணியப்பட்டுள்ள ஆடை, மத யானையின் முகப்படாம் (கண்களை மறைக்கும் திரை) போன்றதாகும்.",
    altTranslation: "The robe upon the maiden's breasts so firmly set, Is as the cloth that blindfolds rutting elephants yet. — Pope"
  },
  {
    num: 1088, chapter: 109,
    tamil: "ஒண்ணுதற் கோஒ உடைந்ததே ஞாட்பினுள்\nநண்ணாரும் உட்குமென் பீடு.",
    transliteration: "Oṇṇutaṟ kōo uṭaintatē ñāṭpiṉuḷ\nNaṇṇārum uṭkumeṉ pīṭu.",
    english: "Alas! My valour, which even foes in battle feared, has broken before her shining brow.",
    tamilUrai: "அந்தோ! போர்க்களத்தில் பகைவரும் அஞ்சுமளவு பெரும்பெருமையுடைய என் ஆண்மை, ஒளி பொருந்திய அவளின் நெற்றியின் முன்னே முறிந்துவிட்டதே.",
    altTranslation: "Alas! my prowess, feared by foes in battle's strife, Is broken by her bright forehead's shining life. — Pope"
  },
  {
    num: 1089, chapter: 109,
    tamil: "பிணையேர் மடநோக்கும் நாணும் உடையாட்கு\nஅணியெவனோ ஏதில தந்து.",
    transliteration: "Piṇaiyēr maṭanōkkum nāṇum uṭaiyāṭku\naṇievaṉō ētila tantu.",
    english: "She has the fawn's gentle glance and natural modesty — what need has she of any further ornament?",
    tamilUrai: "மானின் அழகான மென்மையான பார்வையும், இயல்பான நாணமும் உடைய இவளுக்கு, வெளியில் இருந்து கொண்டுவந்து அணிவிக்கும் அணிகலன்கள் எதற்கு?",
    altTranslation: "The fawn's soft glance, and native modesty are hers; What need hath she of ornaments that outside stirs? — Pope"
  },
  {
    num: 1090, chapter: 109,
    tamil: "உண்டார்கண் அல்லது அடுநறாக் காமம்போல்\nகண்டார் மகிழ்செய்தல் இன்று.",
    transliteration: "Uṇṭārkaṇ allatu aṭunaṟāk kāmampōl\nKaṇṭār makiḻceytal iṉṟu.",
    english: "Strong wine gives joy only to those who drink it; but love brings joy even to those who merely look.",
    tamilUrai: "சூடாக்கிய போதைப்பானம் அதை உண்டவரைத் தவிர வேறு யாருக்கும் மகிழ்ச்சி தராது; ஆனால் காதலோ, அதைக் கண்டவருக்கும் மகிழ்ச்சி தருவதாகும்.",
    altTranslation: "The wine brings joy but to the one who drinks it fair; But love gives joy to all who only see, with gladdening air. — Pope"
  },

  // CHAPTER 110 — Recognition of the Signs
  {
    num: 1091, chapter: 110,
    tamil: "இருநோக்கு இவளுண்கண் உள்ளது ஒருநோக்கு\nநோய்நோக்கொன் றந்நோய் மருந்து.",
    transliteration: "Irunōkku ivaḷuṇkaṇ uḷḷatu orunōkku\nNōynōkkoṉ ṟannōy maruntu.",
    english: "In her darkened eyes are two glances — one that wounds with love-sickness, and one that heals.",
    tamilUrai: "மை தீட்டப்பட்ட அவளது கண்களில் இரண்டு வகைப் பார்வைகள் உள்ளன — ஒன்று நோய் தரும் பார்வை; மற்றொன்று அந்த நோய்க்கு மருந்தாய் அமையும் பார்வை.",
    altTranslation: "Two glances in her kohl-darkened eyes I see — One wounds with love's own pain, the other's its remedy. — Pope"
  },
  {
    num: 1092, chapter: 110,
    tamil: "கண்களவு கொள்ளும் சிறுநோக்கம் காமத்தில்\nசெம்பாகம் அன்று பெரிது.",
    transliteration: "Kaṇkaḷavu koḷḷum ciṟunōkkam kāmattil\nCempākam aṉṟu peritu.",
    english: "Her stolen sidelong glance is more than half of love — it is almost the whole of it.",
    tamilUrai: "கள்ளமாய் ஒரு சிறு நேரம் எறிந்த அவளது பார்வை, காதலில் பாதியளவு அல்ல — அதிலும் பெரிய பங்காக அமைகிறது.",
    altTranslation: "The stolen sidelong glance — 'tis more than half of love; 'Tis nearly all that love's own essence can disprove. — Pope"
  },
  {
    num: 1093, chapter: 110,
    tamil: "நோக்கினாள் நோக்கி இறைஞ்சினாள் அஃதவள்\nயாப்பினுள் அட்டிய நீர்.",
    transliteration: "Nōkkiṉāḷ nōkki iṟaiñciṉāḷ aḵtavaḷ\nYāppiṉuḷ aṭṭiya nīr.",
    english: "She looked, and then dropped her glance in shyness — that was the water she poured on the young love-plant.",
    tamilUrai: "அவள் என்னை நோக்கினாள்; பின்னர் கீழே தலை வணங்கினாள்; அந்தச் செயல், நாங்கள் வளர்த்திடும் காதல் என்னும் பயிருக்கு அவள் ஊற்றிய நீராய் அமைந்தது.",
    altTranslation: "She looked, then drooped in bashful mien — that glance, down-cast, Was water poured upon love's tender plant, to grow at last. — Pope"
  },
  {
    num: 1094, chapter: 110,
    tamil: "யான்நோக்கும் காலை நிலன்நோக்கும் நோக்காக்கால்\nதான்நோக்கி மெல்ல நகும்.",
    transliteration: "Yāṉnōkkum kālai nilaṉnōkkum nōkkākkāl\nTāṉnōkki mella nakum.",
    english: "When I look, she looks at the ground; when I do not, she looks at me and softly smiles.",
    tamilUrai: "நான் அவளைப் பார்க்கும் நேரத்தில் அவள் நிலத்தைப் பார்க்கிறாள்; நான் பார்க்காத நேரத்தில், அவள் என்னைப் பார்த்து, மெல்லத் தனக்குள் சிரிக்கிறாள்.",
    altTranslation: "When I look, she looks the ground; when I forbear, She smiles, and gazes at me, shyly there. — Pope"
  },
  {
    num: 1095, chapter: 110,
    tamil: "குறிக்கொண்டு நோக்காமை அல்லால் ஒருகண்\nசிறக்கணித்தாள் போல நகும்.",
    transliteration: "Kuṟikkoṇṭu nōkkāmai allāl orukaṇ\nCiṟakkaṇittāḷ pōla nakum.",
    english: "She will not look at me directly, but with one eye askance she smiles as if in jest.",
    tamilUrai: "குறிப்பாய் என்னைப் பார்க்காமல் இருந்தாலும், ஒரு கண்ணைக் கடை விழியால் என் பக்கம் திருப்பி, புன்னகை செய்கிறாள்.",
    altTranslation: "She will not gaze me straight, but with one sidelong glance She smiles, as though in jest, with light advance. — Pope"
  },
  {
    num: 1096, chapter: 110,
    tamil: "உறாஅதவர்போல் சொலினும் செறாஅர்சொல்\nஒல்லை உணரப் படும்.",
    transliteration: "Uṟāatavarpōl coliṉum ceṟāarcol\nOllai uṇarap paṭum.",
    english: "Though she speaks as one unfriendly, the words of one not truly angry are soon understood.",
    tamilUrai: "அன்பில்லாதவர்போல் பேசினாலும், உண்மையில் பகைமை இல்லாமல் பேசுபவரது பேச்சை, விரைவில் உணர்ந்துகொள்ள முடியும்.",
    altTranslation: "Though she speaks as one who holds me not in mind, The speech of one who bears no hate is quickly kind. — Pope"
  },
  {
    num: 1097, chapter: 110,
    tamil: "செறாஅச் சிறுசொல்லும் செற்றார்போல் நோக்கும்\nஉறாஅர்போன் றுற்றார் குறிப்பு.",
    transliteration: "Ceṟāac ciṟucollum ceṟṟārpōl nōkkum\nUṟāarpōṉ ṟuṟṟār kuṟippu.",
    english: "Little words seemingly harsh, and glances seemingly hostile — these are the signs of those who are near us while pretending not to be.",
    tamilUrai: "சினம் இல்லாமல் பேசப்பட்ட சிறு கடுஞ்சொற்களும், பகைவர்போல் பார்க்கின்ற பார்வைகளும் — தொடர்பு இல்லாதவர்போல் நடித்தாலும், உண்மையில் நெருங்கியவர்கள் என்பதின் குறிப்புகளாகும்.",
    altTranslation: "Small angry-seeming words, and glances of pretend Are signs of those to us most dear, who friendship lend. — Pope"
  },
  {
    num: 1098, chapter: 110,
    tamil: "அசையியற்கு உண்டாண்டோர் ஏஎர்யான் நோக்கப்\nபசையினள் பைய நகும்.",
    transliteration: "Acaiyiyaṟku uṇṭāṇṭōr ēeryāṉ nōkkap\nPacaiyiṉaḷ paiya nakum.",
    english: "There is a special beauty in her — when I look at her, she yields with a tender, gentle smile.",
    tamilUrai: "என் அசை நடையுடைய அவளிடத்தே ஓர் அழகு உள்ளது — நான் பார்க்கும்போது, அவள் கனிந்து, மெல்ல மென்மையாக சிரிப்பாள்.",
    altTranslation: "A rare grace in her gentle movement dwells; When I gaze, she yields, and softly smile repels. — Pope"
  },
  {
    num: 1099, chapter: 110,
    tamil: "ஏதிலார் போலப் பொதுநோக்கு நோக்குதல்\nகாதலார் கண்ணே உள.",
    transliteration: "Ētilār pōlap potunōkku nōkkutal\nKātalār kaṇṇē uḷa.",
    english: "Only those in love can look at each other with the casual glance of strangers.",
    tamilUrai: "அயலாரைப் போல, ஒன்றும் அறியாதவர்போல, சாதாரண பார்வையைச் செலுத்துதல், உண்மையில் ஒருவரை ஒருவர் காதலிப்பவர் கண்களில் மட்டுமே காணக்கூடியது.",
    altTranslation: "To look as strangers do, with glance of common kind — Only in lovers' eyes doth such a gaze you find. — Pope"
  },
  {
    num: 1100, chapter: 110,
    tamil: "கண்ணொடு கண்இணை நோக்கொக்கின் வாய்ச்சொற்கள்\nஎன்ன பயனும் இல.",
    transliteration: "Kaṇṇoṭu kaṇiṇai nōkkokkiṉ vāyccoṟkaḷ\nEṉṉa payaṉum ila.",
    english: "When eye to eye the mutual glance has met, the words of the mouth are of no use at all.",
    tamilUrai: "கண்ணோடு கண் சந்தித்து, பார்வை ஒன்றோடு ஒன்று இணைந்துவிட்டால், வாயால் பேசும் சொற்களால் அப்புறம் எந்தப் பயனும் இல்லை.",
    altTranslation: "When eye with eye hath met, with mutual glance endued, The words of lips have neither need nor gratitude. — Pope"
  },

  // CHAPTER 111 — Rejoicing in Union
  {
    num: 1101, chapter: 111,
    tamil: "கண்டுகேட்டு உண்டுயிர்த்து உற்றறியும் ஐம்புலனும்\nஒண்தொடி கண்ணே உள.",
    transliteration: "Kaṇṭukēṭṭu uṇṭuyirttu uṟṟaṟiyum aimpulaṉum\nOṇṭoṭi kaṇṇē uḷa.",
    english: "All the five senses — sight, hearing, taste, smell, and touch — reside in this bright-bangled maid alone.",
    tamilUrai: "கண்டு, கேட்டு, சுவைத்து, மணந்து, தொட்டு அறிகின்ற ஐந்து புலன்களும், ஒளியுடைய வளையல் அணிந்த இந்தப் பெண்ணிடத்திலே ஒருசேர உள்ளன.",
    altTranslation: "All five — sight, hearing, taste, smell, touch — in her abide, This maid of bright bracelets, in whom my senses reside. — Pope"
  },
  {
    num: 1102, chapter: 111,
    tamil: "பிணிக்கு மருந்து பிறமன் அணியிழை\nதன்நோய்க்குத் தானே மருந்து.",
    transliteration: "Piṇikku maruntu piṟamaṉ aṇiyiḻai\nTannōykkut tāṉē maruntu.",
    english: "The medicine for other ills lies elsewhere; but this jewelled maiden is herself the cure for the pain she causes.",
    tamilUrai: "பொதுவாக ஒரு நோய்க்குத் தேவையான மருந்து, அந்த நோய் எழுந்த இடத்திற்கு வெளியே இருக்கும்; ஆனால் அணிகலன் அணிந்த இந்தப் பெண்ணோ, அவள் விளைவிக்கும் நோய்க்கு தானே மருந்தாகவும் இருக்கிறாள்.",
    altTranslation: "For other ills the medicine's another's place; But this adorned maid — her ill, her cure — all grace. — Pope"
  },
  {
    num: 1103, chapter: 111,
    tamil: "தாம்வீழ்வார் மென்றோள் துயிலின் இனிதுகொல்\nதாமரைக் கண்ணான் உலகு.",
    transliteration: "Tāmvīḻvār meṉṟōḷ tuyiliṉ iṉitukol\nTāmaraik kaṇṇāṉ ulaku.",
    english: "Can even the world of the lotus-eyed Vishnu be sweeter than sleeping in the soft arms of the beloved?",
    tamilUrai: "தன்னால் விரும்பப்பட்டவளின் மென்மையான தோளில் சாய்ந்து உறங்கும் இன்பத்தை விட, தாமரைக் கண்ணனின் உலகம் இனியதாகுமா?",
    altTranslation: "What! Is the lotus-eyed one's heaven more sweet Than dwelling in loved arms, where soft embraces meet? — Pope"
  },
  {
    num: 1104, chapter: 111,
    tamil: "நீங்கின் தெறூஉம் குறுகுங்கால் தண்ணென்னும்\nதீயாண்டுப் பெற்றாள் இவள்.",
    transliteration: "Nīṅkiṉ teṟūum kuṟukuṅkāl taṇṇeṉṉum\nTīyāṇṭup peṟṟāḷ ivaḷ.",
    english: "Where did she get this fire — which burns when I draw away, and cools when I come near?",
    tamilUrai: "நான் அவளை விட்டு நீங்கினால் என்னைச் சுடுகிறது; அவளை நெருங்கினால் குளிர்ச்சியாய் ஆகிறது — இந்த விசித்திரமான தீயை இவள் எந்த இடத்தில் பெற்றாள்?",
    altTranslation: "Whence got she this strange fire — which burns when I depart, And cools my soul when near, assuaging every smart? — Pope"
  },
  {
    num: 1105, chapter: 111,
    tamil: "வேட்ட பொழுதின் அவையவை போலுமே\nதோட்டார் கதுப்பினாள் தோள்.",
    transliteration: "Vēṭṭa poḻutiṉ avaiyavai pōlumē\nTōṭṭār katuppiṉāḷ tōḷ.",
    english: "The shoulders of her whose hair is bound with flowers are to me whatever I most desire at the moment.",
    tamilUrai: "மலர்கள் அலங்கரித்த கூந்தலை உடைய இவளது தோள்கள், நான் எப்போது எதை விரும்புகிறேனோ, அப்போதெல்லாம் அதுவாகவே எனக்குத் தோன்றுகின்றன.",
    altTranslation: "Her flower-crowned shoulders seem to be, whate'er I crave At every moment — such the power they have. — Pope"
  },
  {
    num: 1106, chapter: 111,
    tamil: "உறுதோறு உயிர்தளிர்ப்பத் தீண்டலால் பேதைக்கு\nஅமிழ்தின் இயன்றன தோள்.",
    transliteration: "Uṟutōṟu uyirtaḷirppat tīṇṭalāl pētaikku\naMiḻtiṉ iyaṉṟaṉa tōḷ.",
    english: "Her touch revives my very soul each time — this simple maiden's arms must be fashioned of nectar.",
    tamilUrai: "ஒவ்வொரு முறை இந்தப் பேதைப் பெண்ணின் தோளை நான் தொடும்போதும், என் உயிர் புத்துயிர் பெறுவதால் — இவள் தோள்கள் அமிழ்தத்தினாலேயே செய்யப்பட்டிருக்க வேண்டும்.",
    altTranslation: "Her touch my life revives each time anew, This simple maid's arms must of nectar true be brewed. — Pope"
  },
  {
    num: 1107, chapter: 111,
    tamil: "தம்மில் இருந்து தமதுபாத்து உண்டற்றால்\nஅம்மா அரிவைமுயக்கு.",
    transliteration: "Tammil iruntu tamatupāttu uṇṭaṟṟāl\naMmā arivaimuyakku.",
    english: "The embrace of this lovely maiden is like sharing the fruits of one's own home, among one's own kin.",
    tamilUrai: "அழகிய இந்த இளம் பெண்ணின் தழுவலானது, தம் வீட்டில் தமக்கு உரியவர்களுடன் இருந்து, தமது பொருள்களைப் பகிர்ந்து உண்பதற்கு ஒப்பானதாகும்.",
    altTranslation: "Her sweet embrace is as to share, within one's own abode, One's own dear bounty with one's kindred's shared load. — Pope"
  },
  {
    num: 1108, chapter: 111,
    tamil: "வீழும் இருவர்க்கு இனிதே வளியிடை\nபோழப் படாஅ முயக்கு.",
    transliteration: "Vīḻum iruvarkku iṉitē vaḷiyiṭai\nPōḻap paṭāa muyakku.",
    english: "To two who love, an embrace that not even the wind can pass between is sweet.",
    tamilUrai: "ஒருவரை ஒருவர் விரும்புகின்ற இருவருக்கும், இடையில் ஒரு காற்றும் நுழைய முடியாத அளவு நெருக்கமான அணைப்பே சிறந்த இனிமையாகும்.",
    altTranslation: "To two who love, how sweet is the embrace so close, That even the wind between them cannot come to interpose. — Pope"
  },
  {
    num: 1109, chapter: 111,
    tamil: "ஊடல் உணர்தல் புணர்தல் இவைகாமம்\nகூடியார் பெற்ற பயன்.",
    transliteration: "Ūṭal uṇartal puṇartal ivaikāmam\nKūṭiyār peṟṟa payaṉ.",
    english: "Sulking, reconciling, and uniting — these three are the fruit of love gained by those who are joined.",
    tamilUrai: "ஊடல் கொள்ளுதல், அதன் பின் தவறை உணர்தல், மீண்டும் கூடுதல் — இம்மூன்றும் காமத்தால் இணைந்தவர்கள் பெறும் பயனாகும்.",
    altTranslation: "To sulk, to own the wrong, and then to be re-joined — These three are fruits of love that lovers' hearts have coined. — Pope"
  },
  {
    num: 1110, chapter: 111,
    tamil: "அறிதோறு அறியாமை கண்டற்றால் காமம்\nசெறிதோறும் சேயிழை மாட்டு.",
    transliteration: "Aṟitōṟu aṟiyāmai kaṇṭaṟṟāl kāmam\nCeṟitōṟum cēyiḻai māṭṭu.",
    english: "The more I unite with this jewelled maiden, the more my love seems new — as the more one learns, the more one sees how much there is yet to learn.",
    tamilUrai: "கற்கக் கற்க கற்க வேண்டியவை இன்னும் எவ்வளவோ உள்ளன என்று அறியாமை புரிந்து கொள்ளப்படுவதைப் போல, அழகிய அணிகலன் அணிந்த இவளுடன் நான் கூடும் ஒவ்வொரு முறையும், காதல் இன்னும் புதிதாய் தோன்றுகிறது.",
    altTranslation: "As more one learns, more things unknown appear; So more I love, more new love's depths come clear. — Pope"
  },

  // CHAPTER 112 — The Praise of Her Beauty
  {
    num: 1111, chapter: 112,
    tamil: "நன்னீரை வாழி அனிச்சமே நின்னினும்\nமென்னீரள் யாம்வீழ் பவள்.",
    transliteration: "Naṉnīrai vāḻi aṉiccamē niṉṉiṉum\nMeṉnīraḷ yāmvīḻ pavaḷ.",
    english: "O Anicha flower, long live! She whom I love is yet more delicate than thee.",
    tamilUrai: "அனிச்சம் மலரே, நீ வாழ்க! நுண்மையான இயல்பு உடையவளான இவள், உன்னைவிட மென்மையானவள்.",
    altTranslation: "Live long, O Anicha flower, of delicate kind — Yet softer still is she, my love, in form refined. — Pope"
  },
  {
    num: 1112, chapter: 112,
    tamil: "மலர்காணின் மையாத்தி நெஞ்சே இவள்கண்\nபலர்காணும் பூவொக்கும் என்று.",
    transliteration: "Malarkāṇiṉ maiyātti neñcē ivaḷkaṇ\nPalarkāṇum pūvokkum eṉṟu.",
    english: "O heart, you are deluded in thinking that the flowers all may see resemble her eyes.",
    tamilUrai: "மனமே! நீ மலரை கண்டவுடன் மயங்குகின்றாயே — \"பலர் பார்க்கிற இந்த மலர், என் காதலியின் கண்ணை ஒத்தது\" என்று.",
    altTranslation: "O heart, thou art deluded — that the flowers all can see Resemble her whose eyes are mine alone to be. — Pope"
  },
  {
    num: 1113, chapter: 112,
    tamil: "முறிமேனி முத்தம் முறுவல் வெறிநாற்றம்\nவேலுண்கண் வேய்த்தோ ளவட்கு.",
    transliteration: "Muṟimēṉi muttam muṟuval veṟināṟṟam\nVēluṇkaṇ vēyttō ḷavaṭku.",
    english: "Her skin is like a tender sprout, her smile is pearls, her fragrance natural, her eyes spears, her arms like bamboo.",
    tamilUrai: "இளந்தளிர் போன்ற மேனியும், முத்துகள் போன்ற பற்களும், இயல்பான நறுமணமும், வேல் போன்ற கண்களும், மூங்கில் போன்ற தோள்களும் அவளுக்கு உள.",
    altTranslation: "Sprout-soft her form, her teeth are pearls, her perfume fine, Her eyes like spears, her arms as bamboos' graceful line. — Pope"
  },
  {
    num: 1114, chapter: 112,
    tamil: "காணின் குவளை கவிழ்ந்து நிலன்நோக்கும்\nமாணிழை கண்ணொவ்வேம் என்று.",
    transliteration: "Kāṇiṉ kuvaḷai kaviḻntu nilaṉnōkkum\nMāṇiḻai kaṇṇovvēm eṉṟu.",
    english: "If it could see, the lily itself would bend down in shame, saying, 'I cannot match the eyes of the jewelled maid.'",
    tamilUrai: "குவளை மலர்களுக்குக் கண்கள் இருந்திருந்தால், \"அந்த அழகிய அணிகலன் அணிந்த பெண்ணின் கண்களை நாங்கள் ஒப்ப முடியாது\" என்று, வெட்கப்பட்டு கீழ் நிலத்தை நோக்கி தலை வணங்கும்.",
    altTranslation: "Could the lily see, it too would bow to earth And cry, 'Her eyes have passed my form of worth.' — Pope"
  },
  {
    num: 1115, chapter: 112,
    tamil: "அனிச்சப்பூக் கால்களையாள் பெய்தாள் நுசுப்பிற்கு\nநல்ல படாஅ பறை.",
    transliteration: "Aṉiccappūk kālkaḷaiyāḷ peytāḷ nucuppiṟku\nNalla paṭāa paṟai.",
    english: "She strung the anicha flower without snipping off its stalk — now drums of ill-omen will sound for her slender waist.",
    tamilUrai: "அனிச்சம் பூக்களின் காலைக் கிள்ளாமலே, அவள் அவற்றை தலையிலே சூட்டிக் கொண்டாளே — அந்த சிறிய இடைக்கு, விரைவில் மரணச் சுமையைக் குறிக்கும் மங்காப் பறைகள் ஒலிக்கும் வாய்ப்பு உளது.",
    altTranslation: "She wore the anicha flowers without the stalks removed; Alas! drums of ill-omen for her waist shall now be proved. — Pope"
  },
  {
    num: 1116, chapter: 112,
    tamil: "மதியும் மடந்தை முகனும் அறியா\nபதியின் கலங்கிய மீன்.",
    transliteration: "Matiyum maṭantai mukaṉum aṟiyā\npatiyiṉ kalaṅkiya mīṉ.",
    english: "The stars are troubled, not knowing which is the moon and which the maiden's face.",
    tamilUrai: "விண்மீன்கள் குழப்பத்தில் தம் இடத்தில் நிற்கின்றன — எது நிலவு, எது இவளின் முகம் என்று அவைகள் அறியவில்லை.",
    altTranslation: "The stars stand troubled, knowing not apart The moon on high, her face's matching art. — Pope"
  },
  {
    num: 1117, chapter: 112,
    tamil: "அறுவாய் நிறைந்த அவிர்மதிக்குப் போல\nமறுவுண்டோ மாதர் முகத்து.",
    transliteration: "Aṟuvāy niṟainta avirmatikkup pōla\nMaṟuvuṇṭō mātar mukattu.",
    english: "Unlike the full bright moon, does her face have any spot upon it?",
    tamilUrai: "குறைந்த நிலையிலிருந்து முழுமை அடையும் ஒளிவீசும் நிலவுக்கு உள்ளது போல, இந்தப் பெண்ணின் முகத்தில் களங்கம் என்பது உண்டோ?",
    altTranslation: "Has her fair face a spot like full-orbed moon's bright face, That through its waxing keeps its dark disgrace? — Pope"
  },
  {
    num: 1118, chapter: 112,
    tamil: "மாதர் முகம்போல் ஒளிவிட வல்லையேல்\nகாதலை வாழி மதி.",
    transliteration: "Mātar mukampōl oḷiviṭa vallaiyēl\nKātalai vāḻi mati.",
    english: "O moon, live long — if only you could shine like her face, I might love you too.",
    tamilUrai: "நிலவே, நீ வாழ்க! அந்தப் பெண்ணின் முகம் போல ஒளி விசுவதாக நீ இருந்தாயானால், உன்னையும் நான் விரும்புவேனே.",
    altTranslation: "Live long, O moon! Couldst thou shine like her face, Thou too shouldst earn my love — my sweet embrace. — Pope"
  },
  {
    num: 1119, chapter: 112,
    tamil: "மலரன்ன கண்ணாள் முகமொத்தி யாயின்\nபலர்காணத் தோன்றல் மதி.",
    transliteration: "Malaraṉṉa kaṇṇāḷ mukamotti yāyiṉ\npalarkāṇat tōṉṟal mati.",
    english: "O moon, if thou wilt match the face of her whose eyes are lotuses, appear not so for all to see.",
    tamilUrai: "நிலவே! மலரைப் போன்ற கண்களை உடையவளின் முகத்தை ஒத்திருப்பாய் என்றால், எல்லாரும் பார்க்கும்படி நீ தோன்ற வேண்டாம்.",
    altTranslation: "O moon, if thou wouldst match her lotus-eyed fair face, Come not before all eyes to flaunt thy borrowed grace. — Pope"
  },
  {
    num: 1120, chapter: 112,
    tamil: "அனிச்சமும் அன்னத்தின் தூவியும் மாதர்\nஅடிக்கு நெருஞ்சிப் பழம்.",
    transliteration: "Aṉiccamum aṉṉattiṉ tūviyum mātar\naṭikku neruñcip paḻam.",
    english: "The anicha flower and the swan's down are thorns to the feet of this maiden — so tender are they.",
    tamilUrai: "அனிச்சம் பூவும், அன்னப் பறவையின் மெல்லிய சிறகுமே கூட, அவள் மென்மையான அடிக்கு, நெருஞ்சி முள் போன்று வருத்தம் தருவனவே.",
    altTranslation: "The anicha flower, the swan's soft down, to her tender feet Are as the thorn — so soft her tread in movement sweet. — Pope"
  },

  // CHAPTER 113 — Declaration of Love's Special Excellence
  {
    num: 1121, chapter: 113,
    tamil: "பாலொடு தேன்கலந் தற்றே பணிமொழி\nவாலெயிறு ஊறிய நீர்.",
    transliteration: "Pāloṭu tēṉkalan taṟṟē paṇimoḻi\nVāleyiṟu ūṟiya nīr.",
    english: "The moisture that springs from her white teeth, with her soft-spoken word, is like milk mingled with honey.",
    tamilUrai: "பணிவான சொற்களைப் பேசுபவளின் வெண்மையான பற்களில் சுரந்த நீர், பாலோடு தேன் கலந்தது போன்ற இனிய சுவையுடையதாகும்.",
    altTranslation: "The moisture of her teeth, with gentle words, doth taste Like honey mingling with pure milk — sweet chaste. — Pope"
  },
  {
    num: 1122, chapter: 113,
    tamil: "உடம்பொடு உயிரிடை என்னமற் றன்ன\nமடந்தையொடு எம்மிடை நட்பு.",
    transliteration: "Uṭampoṭu uyiriṭai eṉṉamaṟ ṟaṉṉa\nMaṭantaiyoṭu emmiṭai naṭpu.",
    english: "The love between me and this maiden is as the union of body and soul.",
    tamilUrai: "இந்த இளம் பெண்ணுக்கும் எனக்கும் இடையே உள்ள நட்பு, உடலுக்கும் உயிருக்கும் இடையே உள்ள தொடர்பு போன்றதே.",
    altTranslation: "Like soul's own bond with body's frame entwined, Is this my love with her so dear and kind. — Pope"
  },
  {
    num: 1123, chapter: 113,
    tamil: "கருமணியிற் பாவாய்நீ போதாயாம் வீழும்\nதிருநுதற்கு இல்லை இடம்.",
    transliteration: "Karumaṇiyiṟ pāvāynī pōtāyām vīḻum\nTirunutaṟku illai iṭam.",
    english: "O image in my eye's dark pupil, please depart; there is no room for the beloved of the radiant brow.",
    tamilUrai: "என் கண்ணின் கருமணியில் உள்ள பாவையே! நீ வெளியேறு; அழகிய நெற்றியுடையவளான என் காதலியை தங்க வைப்பதற்கு என் கண்ணில் இடம் இல்லாமல் போய்விடுகிறது.",
    altTranslation: "O image in my pupil dark, pray leave thy place; There's room no more — for her whose brow is grace. — Pope"
  },
  {
    num: 1124, chapter: 113,
    tamil: "வாழ்தல் உயிர்க்கன்னள் ஆயிழை சாதல்\nஅதற்கன்னள் நீங்கு மிடத்து.",
    transliteration: "Vāḻtal uyirkkaṉṉaḷ āyiḻai cātal\nataṟkaṉṉaḷ nīṅku miṭattu.",
    english: "This jewelled maiden is life to my soul when present, and death when she departs from me.",
    tamilUrai: "அணிகலன் அணிந்த இந்தப் பெண், என்னுடன் இருக்கையில் உயிருக்கு உயிர் போல் உள்ளாள்; என்னை விட்டுப் பிரியும் நேரத்தில், அதே உயிருக்கு மரணமாய் ஆகிவிடுகிறாள்.",
    altTranslation: "My jewelled love is life unto my soul when near; When parted, she's like death, my very grave appear. — Pope"
  },
  {
    num: 1125, chapter: 113,
    tamil: "உள்ளுவன் மன்யான் மறப்பின் மறப்பறியேன்\nஒள்ளமர்க் கண்ணாள் குணம்.",
    transliteration: "Uḷḷuvaṉ maṉyāṉ maṟappiṉ maṟappaṟiyēṉ\nOḷḷamark kaṇṇāḷ kuṇam.",
    english: "Only if I ever forgot her could I remember her — but her quality, bright of eye, never departs from my mind.",
    tamilUrai: "மறந்தால் தானே எப்போதாவது நினைக்க வேண்டும்? ஒளி பொருந்திய பெரிய கண்கள் உடையவளின் நற்குணங்களை, மறப்பது என்ற நிலை எனக்கு ஏற்படுவதே இல்லை.",
    altTranslation: "Only if once I could forget would I remember; But her bright-eyed qualities, I never shall surrender. — Pope"
  },
  {
    num: 1126, chapter: 113,
    tamil: "கண்ணுள்ளின் போகார் இமைப்பின் பருகுவரா\nநுண்ணியர்எம் காத லவர்.",
    transliteration: "Kaṇṇuḷḷiṉ pōkār imaippiṉ parukuvarā\nNuṇṇiyarem kāta lavar.",
    english: "My beloved is so subtle — he goes not from my eye when I gaze, nor is he pained when I blink.",
    tamilUrai: "என் கண்களிலிருந்து என் காதலர் விலகுவதே இல்லை; நான் கண்ணை இமைக்கும் நேரத்திலும் அவர் துன்பப்படுவதில்லை — அத்தனை நுட்பமானவர் அவர்.",
    altTranslation: "My lover leaves not my eye; he feels no hurt when I blink — So subtle is his dwelling, without the smallest sink. — Pope"
  },
  {
    num: 1127, chapter: 113,
    tamil: "கண்ணுள்ளார் காத லவராகக் கண்ணும்\nஎழுதேம் கரப்பாக்கு அறிந்து.",
    transliteration: "Kaṇṇuḷḷār kāta lavarākak kaṇṇum\nEḻutēm karappākku aṟintu.",
    english: "Since my beloved dwells in my eyes, I will not even line them with kohl, lest he be hidden.",
    tamilUrai: "என் காதலர் என் கண்களுக்குள்ளேயே உள்ளார்; எனவே, மை தீட்டினால் அவர் மறைந்துவிடுவார் என்றுணர்ந்து, என் கண்களுக்கு மை கூட இடமாட்டேன்.",
    altTranslation: "Since my beloved dwells within my very eye, I dare not paint with kohl, lest he should hidden lie. — Pope"
  },
  {
    num: 1128, chapter: 113,
    tamil: "நெஞ்சத்தார் காத லவராக வெய்துண்டல்\nஅஞ்சுதும் வேபாக் கறிந்து.",
    transliteration: "Neñcattār kāta lavarāka veytuṇṭal\nAñcutum vēpāk kaṟintu.",
    english: "Since my beloved lives in my heart, I fear to eat hot food, lest he should be burnt.",
    tamilUrai: "என் மனதிலேயே என் காதலர் தங்கியுள்ளார் என்பதால், சூடான உணவை உண்ணும்போது அவர் சுடப்படுவாரோ என்று பயப்படுகிறேன்.",
    altTranslation: "My love dwells in my heart; I dread to eat hot food — Lest he therein should burn, my heart's embedded mood. — Pope"
  },
  {
    num: 1129, chapter: 113,
    tamil: "இமைப்பின் கரப்பாக்கு அறிவல் அனைத்திற்கே\nஏதிலர் என்னும்இவ் வூர்.",
    transliteration: "Imaippiṉ karappākku aṟival aṉaittiṟkē\nĒtilar eṉṉumiv vūr.",
    english: "Knowing that my love would be hidden if I blink, I do not; and yet this town says I care not for him!",
    tamilUrai: "என் காதலர் என் கண்களிலேயே உள்ளார்; நான் கண்களை இமைத்தால் அவர் மறைந்து போவார் என்று அஞ்சி, நான் இமைக்க மாட்டேன்; அதற்காக, \"அவள் தன் காதலரிடம் அன்பு இல்லாதவள்\" என்று இவ்வூர் என்னை பழிக்கிறது.",
    altTranslation: "I blink not, lest he hide; yet for that very cause, The town says I'm loveless — such is its cruel pause. — Pope"
  },
  {
    num: 1130, chapter: 113,
    tamil: "உவந்துறைவர் உள்ளத்துள் என்றும் இகந்துறைவர்\nஏதிலர் என்னும்இவ் வூர்.",
    transliteration: "Uvantuṟaivar uḷḷattuḷ eṉṟum ikantuṟaivar\nĒtilar eṉṉumiv vūr.",
    english: "He dwells always in my heart, yet the town says he keeps away as if he were a stranger.",
    tamilUrai: "எப்போதும் என் உள்ளத்திலேயே மகிழ்வாய் என் காதலர் தங்கியிருக்கிறார்; அவர் என்னை விட்டுப் பிரிந்து, அயலார் போல் தொலைவில் இருக்கிறார் என்று மட்டுமே இந்த ஊர் பேசுகிறதே.",
    altTranslation: "Within my heart he dwells with joy each day; Yet says the town, 'A stranger, far away.' — Pope"
  },

  // CHAPTER 114 — Reserve Overcome
  {
    num: 1131, chapter: 114,
    tamil: "காமம் உழந்து வருந்தினார்க்கு ஏமம்\nமடலல்லது இல்லை வலி.",
    transliteration: "Kāmam uḻantu varuntiṉārkku ēmam\nMaṭalallatu illai vali.",
    english: "For those worn out by love's pain, no strength or refuge remains but the horse of palmyra-stalks.",
    tamilUrai: "காதலால் துன்பப்பட்டு வருத்தம் எய்தியவர்க்கு, மடல் ஏறுவது தவிர வேறு பாதுகாப்பான வலிமை ஏதும் கிடையாது.",
    altTranslation: "For those worn by love's pangs no other strength remains, Save mounting palmyra-steed, to ease their hidden pains. — Pope"
  },
  {
    num: 1132, chapter: 114,
    tamil: "நோனா உடம்பும் உயிரும் மடலேறும்\nநாணினை நீக்கி நிறுத்து.",
    transliteration: "Nōṉā uṭampum uyirum maṭalēṟum\nNāṇiṉai nīkki niṟuttu.",
    english: "My body and soul, no longer able to bear, will cast off shame and mount the horse of palm-stalks.",
    tamilUrai: "பொறுக்க இயலாத என் உடலும் உயிரும், நாணத்தை ஒதுக்கிவிட்டு, மடல்குதிரையேறுதல் என்னும் நிலையையே நிறுத்திக் கொள்ளும்.",
    altTranslation: "My body and my soul, unable to endure, Will doff their shame and mount the palmyra-steed for sure. — Pope"
  },
  {
    num: 1133, chapter: 114,
    tamil: "நாணொடு நல்லாண்மை பண்டுடையேன் இன்றுடையேன்\nகாமுற்றார் ஏறும் மடல்.",
    transliteration: "Nāṇoṭu nallāṇmai paṇṭuṭaiyēṉ iṉṟuṭaiyēṉ\nKāmuṟṟār ēṟum maṭal.",
    english: "Shame and manliness were mine before; now I possess only the horse of palm-stalks which lovers ride.",
    tamilUrai: "நாணமும் நல்ல ஆண்மையும் முன்பு என்னிடம் இருந்தன; இப்போது எனக்கு உள்ளது, காதல் வெறி பிடித்தவர்கள் ஏறும் மடல் குதிரை மட்டுமே.",
    altTranslation: "Shame and manly grace were once my own true part; Now, only love-crazed palm-horse is my sole heart. — Pope"
  },
  {
    num: 1134, chapter: 114,
    tamil: "காமக் கடும்புனல் உய்க்குமே நாணொடு\nநல்லாண்மை என்னும் புணை.",
    transliteration: "Kāmak kaṭumpuṉal uykkumē nāṇoṭu\nnallāṇmai eṉṉum puṇai.",
    english: "The fierce flood of love sweeps away the raft of shame and noble manliness.",
    tamilUrai: "காதல் என்னும் வெள்ளம், நாணமும் நல்ல ஆண்மையும் ஆகிய தெப்பத்தை தன் வேகத்தில் கொண்டு போய்விடும்.",
    altTranslation: "Love's raging flood sweeps swift away the raft Of shame and manly worth — all gone in its swift draught. — Pope"
  },
  {
    num: 1135, chapter: 114,
    tamil: "தொடலைக் குறுந்தொடி தந்தாள் மடலொடு\nமாலை உழக்கும் துயர்.",
    transliteration: "Toṭalaik kuṟuntoṭi tantāḷ maṭaloṭu\nMālai uḻakkum tuyar.",
    english: "She of the small bangles has given me this — the evening's sorrow and the horse of palm-leaves to ride.",
    tamilUrai: "குறிய வளையல்களை அணிந்தவள், எனக்கு மடல் குதிரை ஏற வேண்டிய நிலையையும், மாலை நேரத் துயரத்தையும் கொடுத்தாள்.",
    altTranslation: "She of the little bangles has bestowed on me This grief of evening and palm-stalk ride to be. — Pope"
  },
  {
    num: 1136, chapter: 114,
    tamil: "மடலூர்தல் யாமத்தும் உள்ளுவேன் மன்ற\nபடலொல்லா பேதைக்கென் கண்.",
    transliteration: "Maṭalūrtal yāmattum uḷḷuvēṉ maṉṟa\nPaṭalollā pētaikkeṉ kaṇ.",
    english: "Even at midnight I think of mounting the palm-horse — for my eyes refuse to close because of this simple maiden.",
    tamilUrai: "அந்த பேதைப் பெண்ணை எண்ணி என் கண்கள் உறங்காமல் இருப்பதால், நடு இரவிலும் நான் மடல் குதிரை ஏறுதலைப் பற்றியே சிந்திக்கிறேன்.",
    altTranslation: "At midnight still I think of mounting palm-horse steed, For this simple maid my eyes sleep none concede. — Pope"
  },
  {
    num: 1137, chapter: 114,
    tamil: "கடலன்ன காமம் உழந்தும் மடலேறாப்\nபெண்ணிற் பெருந்தக்க தில்.",
    transliteration: "Kaṭalaṉṉa kāmam uḻantum maṭalēṟāp\npeṇṇiṟ peruntakka til.",
    english: "Though tossed by love like the ocean, woman does not mount the palm-horse — greater nobility than this, there is none.",
    tamilUrai: "கடல் போன்ற பெரும் காதல் துன்பத்தில் தவித்தாலும், பெண்கள் மடல் குதிரை ஏறி ஊர் வலம் வராமல் அடக்கமாக இருப்பதை விட, மேலான சிறப்பு எதுவும் இல்லை.",
    altTranslation: "Though tossed by ocean-like of love's fierce flood, No nobler grace than woman's silent womanhood. — Pope"
  },
  {
    num: 1138, chapter: 114,
    tamil: "நிறையரியர் மன்அளியர் என்னாது காமம்\nமறையிறந்து மன்று படும்.",
    transliteration: "Niṟaiyariyar maṉaḷiyar eṉṉātu kāmam\nMaṟaiyiṟantu maṉṟu paṭum.",
    english: "Love shows no regard for virtue or pity — it bursts all concealment and stands forth in the public square.",
    tamilUrai: "\"இவர்கள் நிறை கொண்டவர்கள், இரக்கத்திற்கு உரியவர்கள்\" என்று எவற்றையும் காதல் பொருட்படுத்துவதில்லை — எல்லா மறைவையும் மீறி, பொதுமையிடத்தில் வெளிப்பட்டுவிடும்.",
    altTranslation: "Love reckons neither virtue's grace nor pity's plea, But bursts concealment, standing forth for all to see. — Pope"
  },
  {
    num: 1139, chapter: 114,
    tamil: "அறிகிலார் எல்லாரும் என்றேஎன் காமம்\nமறுகிற் மறுகும் மருண்டு.",
    transliteration: "Aṟikilār ellārum eṉṟēeṉ kāmam\nMaṟukiṟ maṟukum maruṇṭu.",
    english: "Thinking that no one knows of it, my love, bewildered, roams about the streets making its own show.",
    tamilUrai: "\"என் காதலை எவரும் அறியமாட்டார்கள்\" என்று எண்ணி, என் காதல், மயக்கமுற்று, தெருத் தெருவாக சுற்றிக்கொண்டே மக்கள் அறியுமாறு வெளிப்பட்டுவிடும்.",
    altTranslation: "Deeming all ignorant, my love, confused, appears And wanders streets, disclosing what my heart most fears. — Pope"
  },
  {
    num: 1140, chapter: 114,
    tamil: "யாம்கண்ணின் காண நகுப அறிவில்லார்\nயாம்பட்ட தாம்படா வாறு.",
    transliteration: "Yāmkaṇṇiṉ kāṇa nakupa aṟivillār\nYāmpaṭṭa tāmpaṭā vāṟu.",
    english: "The ignorant laugh at me to my face — because they have not suffered what I suffer.",
    tamilUrai: "நான் கண்டபடியே, அறிவு இல்லாதவர்கள் எனக்கு எதிரே நகைக்கின்றனர் — ஏனெனில், நான் பட்ட துன்பத்தை அவர்கள் படவில்லை.",
    altTranslation: "The fools before my eyes do laugh and mock, Since not such love have suffered shook their rock. — Pope"
  },

  // CHAPTER 115 — The Rumour
  {
    num: 1141, chapter: 115,
    tamil: "அலரெழ ஆருயிர் நிற்கும் அதனைப்\nபலரறியார் பாக்கியத் தால்.",
    transliteration: "Alareḻa āruyir niṟkum ataṉaip\npalaraṟiyār pākkiyat tāl.",
    english: "My precious life stays with me because of the town's gossip; happily, the rumour is so widely ignored.",
    tamilUrai: "இவ் ஊரார் பரப்பும் புறமொழி காரணமாக, எனது அரிய உயிர் என்னோடு நின்றிருக்கிறது; அந்த செய்தியை பலரும் அறியாதிருப்பது என் நற்பேறே.",
    altTranslation: "Because of rumour my dear life doth stay; How fortunate that few have found the way. — Pope"
  },
  {
    num: 1142, chapter: 115,
    tamil: "மலரன்ன கண்ணாள் அருமை அறியாது\nஅலரெமக்கு ஈந்ததிவ் வூர்.",
    transliteration: "Malaraṉṉa kaṇṇāḷ arumai aṟiyātu\nAlaremakku īntativ vūr.",
    english: "Unaware of how rare she is — she of the lotus eyes — this town has showered rumour upon us.",
    tamilUrai: "மலர் போன்ற கண்களை உடைய அந்த அரிய பெண்ணின் அருமை தெரியாமல், இந்த ஊரே புறமொழியை எமக்குப் பரிசாய் வழங்கியுள்ளது.",
    altTranslation: "The town, unknowing of her flower-eyed rarity, Has granted us, by rumour, our sole liberty. — Pope"
  },
  {
    num: 1143, chapter: 115,
    tamil: "உறாஅதோ ஊரறிந்த கௌவை அதனைப்\nபெறாஅது பெற்றன்ன நீர்த்து.",
    transliteration: "Uṟāatō ūraṟinta kauvai ataṉaip\npeṟāatu peṟṟaṉṉa nīrttu.",
    english: "Is not the rumour spread through the town a gain? It gives us the joy of what we could not have otherwise.",
    tamilUrai: "ஊர் முழுவதும் பரவிய இந்த அலர், எனக்கு நன்மையாய் அமையும் நிலை அன்றோ? ஏனெனில், இந்தப் புறமொழி இன்றி அடைய முடியாத ஒன்றை, அது எனக்கு அடைந்ததற்கு ஒப்பாக தருகிறது.",
    altTranslation: "Is not the rumour to my gain, that spreads abroad? It gives the joy of bliss no other way could afford. — Pope"
  },
  {
    num: 1144, chapter: 115,
    tamil: "கவ்வையால் கவ்விது காமம் அதுவின்றேல்\nதவ்வென்னும் தன்மை இழந்து.",
    transliteration: "Kavvaiyāl kavvitu kāmam atuviṉṟēl\nTavveṉṉum taṉmai iḻantu.",
    english: "Love grows stronger from gossip; without it, it would fade and lose its savour.",
    tamilUrai: "ஊர் மக்கள் பேசும் புறமொழியால் காதல் ஒளி பெறுகிறது; அந்த அலர் இல்லையென்றால், காதலானது மங்கிப் போய், தன் சுவை இழந்துவிடும்.",
    altTranslation: "Love gathers strength from gossip's breath; without the same, 'Twould wither, losing all its flavour's flame. — Pope"
  },
  {
    num: 1145, chapter: 115,
    tamil: "களித்தொறும் கள்ளுண்டல் வேட்டற்றால் காமம்\nவெளிப்படுந் தோறும் இனிது.",
    transliteration: "Kaḷittoṟum kaḷḷuṇṭal vēṭṭaṟṟāl kāmam\nVeḷippaṭun tōṟum iṉitu.",
    english: "As a drunkard craves wine more as he drinks, so love grows sweeter the more it is made known.",
    tamilUrai: "குடிப்பவர்களுக்கு, குடித்த பிறகும் குடிக்க வேண்டுமென்னும் ஆசை எப்படி அதிகமாகுமோ, அதுபோல், காதல் புறப்படும் தோறும், காதலிக்கு இனியதாய் அது ஆகிறது.",
    altTranslation: "As drunkard craves more drink each time he's high, So love grows sweeter every public sigh. — Pope"
  },
  {
    num: 1146, chapter: 115,
    tamil: "கண்டது மன்னும் ஒருநாள் அலர்மன்னும்\nதிங்களைப் பாம்புகொண் டற்று.",
    transliteration: "Kaṇṭatu maṉṉum orunāḷ alarmaṉṉum\nTiṅkaḷaip pāmpukoṇ ṭaṟṟu.",
    english: "I met him only once — yet the rumour spread is like the serpent that seizes the moon in an eclipse.",
    tamilUrai: "நான் என் காதலனை ஒரு நாள் தான் கண்டேன்; ஆனால், இந்த ஊரில் பரவிய புறமொழி, நிலவை பாம்பு விழுங்குவதைப் போல் எனது புகழை விழுங்கியது.",
    altTranslation: "I met him once alone; yet rumour spread, Like moon devoured by serpent overhead. — Pope"
  },
  {
    num: 1147, chapter: 115,
    tamil: "ஊரவர் கௌவை எருவாக அன்னைசொல்\nநீராக நீளும்இந் நோய்.",
    transliteration: "Ūravar kauvai eruvāka aṉṉaicol\nNīrāka nīḷumin nōy.",
    english: "The town's gossip is manure, my mother's rebuke is water — and so this love-disease grows tall.",
    tamilUrai: "ஊரினரது புறமொழி எருவாகவும், தாயின் கடிந்த சொற்கள் நீராகவும் அமைய, என் காதல் நோய் மேன்மேலும் பெருகிப் பரவுகிறது.",
    altTranslation: "The townsfolk's rumour is the soil's enriching ground; My mother's scolding's water — love's vast growth is found. — Pope"
  },
  {
    num: 1148, chapter: 115,
    tamil: "நெய்யால் எரிநுதுப்பேம் என்றற்றால் கௌவையால்\nகாமம் நுதுப்பேம் எனல்.",
    transliteration: "Neyyāl erinutuppēm eṉṟaṟṟāl kauvaiyāl\nKāmam nutuppēm eṉal.",
    english: "To try to put out love by gossip is like trying to quench fire with ghee.",
    tamilUrai: "\"புறமொழியால் காதலை அணைத்துவிடுவோம்\" என்று நினைப்பது, நெய் ஊற்றி தீயை அணைக்க முயல்வதற்கு ஒப்பானது.",
    altTranslation: "To think that love can be by rumour quenched away, Is as to quench the fire with oil — so folk do say. — Pope"
  },
  {
    num: 1149, chapter: 115,
    tamil: "அலர்நாண ஒல்வதோ அஞ்சலோம்பென்றார்\nபலர்நாண நீத்தக் கடை.",
    transliteration: "Alarnāṇa olvatō añcalōmpeṉṟār\nPalarnāṇa nīttak kaṭai.",
    english: "Shall I shrink from rumour? He who said 'fear not' has himself forsaken me, making many blush in shame.",
    tamilUrai: "\"அஞ்சாதே, நான் உன்னை விடமாட்டேன்\" என்று சொன்னவரே பலரும் நாணும் வகையில் என்னைப் பிரிந்த பிறகு, புறமொழிக்கு நான் நாணி ஒதுங்குவதில் என்ன பயன்?",
    altTranslation: "Shall I from rumour shrink, when he who said 'Fear not' Has left me, making many blush at their own lot? — Pope"
  },
  {
    num: 1150, chapter: 115,
    tamil: "தாம்வேண்டின் நல்குவர் காதலர் யாம்வேண்டும்\nகௌவை எடுக்கும்இவ் வூர்.",
    transliteration: "Tāmvēṇṭiṉ nalkuvar kātalar yāmvēṇṭum\nKauvai eṭukkumiv vūr.",
    english: "My beloved will be kind when he desires; and this town raises the very gossip I myself desire.",
    tamilUrai: "என் காதலர் தாம் விரும்பினால், என்னிடம் அன்பு காட்டுவார்; நான் விரும்புகின்ற புறமொழியை — இந்த ஊர் தானாகவே கிளப்புகிறது. (என் காதலை வெளிப்படுத்தவும், திருமணத்தை விரைவு படுத்தவும் இந்த அலர் துணையாய் உதவும்.)",
    altTranslation: "My lover will give when he wills; and this my town Will raise the rumour that I wish — my joy's own crown. — Pope"
  },

  // CHAPTER 116 — Separation Unendurable
  {
    num: 1151, chapter: 116,
    tamil: "செல்லாமை உண்டேல் எனக்குரை மற்றுநின்\nவல்வரவு வாழ்வார்க் குரை.",
    transliteration: "Cellāmai uṇṭēl eṉakkurai maṟṟuniṉ\nValvaravu vāḻvārk kurai.",
    english: "If you will not depart, tell me so; speak of your speedy return only to those who can survive your absence.",
    tamilUrai: "(காதலி காதலனிடம் கூறுகிறாள்:) நீர் பிரிந்து செல்லாதிருப்பீர் என்றால், அதை எனக்கு உரைக்கவும்; விரைவில் திரும்பி வருவேன் என்ற செய்தியை, உமது பிரிவைத் தாங்கி உயிர்வாழக் கூடியவருக்குச் சொல்லுங்கள்.",
    altTranslation: "If thou wilt not depart, tell me so; speak of thy quick return To those who in thy absence still can live and learn. — Pope"
  },
  {
    num: 1152, chapter: 116,
    tamil: "இன்கண் உடைத்தவர் பார்வல் பிரிவஞ்சும்\nபுன்கண் உடைத்தால் புணர்வு.",
    transliteration: "Iṉkaṇ uṭaittavar pārval pirivañcum\nPuṉkaṇ uṭaittāl puṇarvu.",
    english: "Once his look brought joy; now even our union itself brings the dread of parting.",
    tamilUrai: "முன்னர், அவர் என்னைப் பார்த்தபோதே இனிமையாய் இருந்தது; இப்போது, கூடி இருக்கும் கூட்டம் கூட பிரிவை அஞ்சும் துன்பத்தைக் கொண்டுள்ளது.",
    altTranslation: "Once his glance brought bliss; now e'en in union's hour, The dread of parting clouds joy's flowering bower. — Pope"
  },
  {
    num: 1153, chapter: 116,
    tamil: "அரிதரோ தேற்றம் அறிவுடையார் கண்ணும்\nபிரிவோ ரிடத்துண்மை யான்.",
    transliteration: "Aritarō tēṟṟam aṟivuṭaiyār kaṇṇum\nPirivō riṭattuṇmai yāṉ.",
    english: "Even in those said to be wise, since separation is found at times, who can be assured of constancy?",
    tamilUrai: "அறிவு உள்ளவர் என்று சொல்லப்பட்டாலும், அவரிடத்திலும் ஒரு காலத்தில் பிரிவு என்பது நிகழ்வதால், அவரிடம் ஒருவர் உறுதியான நம்பிக்கை வைப்பது அரிதே.",
    altTranslation: "Hard to find faith — for even in the wise, it seems, At times a parting steals like sudden dreams. — Pope"
  },
  {
    num: 1154, chapter: 116,
    tamil: "அளித்தஞ்சல் என்றவர் நீப்பின் தெளித்தசொல்\nதேறியார்க்கு உண்டோ தவறு.",
    transliteration: "Aḷittañcal eṉṟavar nīppiṉ teḷittacol\nTēṟiyārkku uṇṭō tavaṟu.",
    english: "If he who said 'fear not' departs, what blame is there in her who trusted his clear words?",
    tamilUrai: "\"அஞ்சாதே\" என்று பாதுகாக்கும் உறுதியளித்தவர் தாமே பிரிந்து சென்றால், அவரது தெளிவான சொல்லில் உண்மையாக நம்பியவளுக்கு என்ன குற்றம் வரும்?",
    altTranslation: "When he who promised, 'Fear not,' himself departs, What blame is hers who trusted his clear darts? — Pope"
  },
  {
    num: 1155, chapter: 116,
    tamil: "ஓம்பின் அமைந்தார் பிரிவோம்பல் மற்றவர்\nநீங்கின் அரிதால் புணர்வு.",
    transliteration: "Ōmpiṉ amaintār pirivōmpal maṟṟavar\nNīṅkiṉ aritāl puṇarvu.",
    english: "If you would protect me, prevent my lover's departure; for once gone, reunion may be hard to gain.",
    tamilUrai: "(தோழியிடம் தலைவி கூறுகிறாள்:) என்னைக் காக்க நினைப்பாய் என்றால், எனது அன்புடையவர் பிரிந்து செல்வதைத் தடுத்துவிடு; அவர் சென்று விட்டால், மீண்டும் கூடுதல் அரிதாகும்.",
    altTranslation: "Wouldst guard my life, then keep him from departing's road; If once he go, return is rare and sad of load. — Pope"
  },
  {
    num: 1156, chapter: 116,
    tamil: "பிரிவுரைக்கும் வன்கண்ணர் ஆயின் அரிதவர்\nநல்குவர் என்னும் நசை.",
    transliteration: "Pirivuraikkum vaṉkaṇṇar āyiṉ aritavar\nNalkuvar eṉṉum nacai.",
    english: "If he is so hard-hearted as to speak of departure, the hope that he will be tender afterwards is in vain.",
    tamilUrai: "பிரிந்து செல்வதைப் பற்றி வாயால் சொல்லும் கொடிய மனநிலையை அவர் உடையவராய் இருந்தால், மீண்டும் இனிமை காட்டுவார் என்ற ஆசை அரிதான கனவே.",
    altTranslation: "If hard of heart he speaks of his departing's day, Then hope that he'll be kind hereafter — vain to say. — Pope"
  },
  {
    num: 1157, chapter: 116,
    tamil: "துறைவன் துறந்தமை தூற்றாகொல் முன்கை\nஇறைஇறவா நின்ற வளை.",
    transliteration: "Tuṟaivaṉ tuṟantamai tūṟṟākol muṉkai\niRaiiṟavā niṉṟa vaḷai.",
    english: "Will not the bangles slipping from my forearms publish abroad how the lord of the seashore has forsaken me?",
    tamilUrai: "(பிரிவால் மெலிந்த நிலையில் தலைவி வெளிப்படுத்துகிறாள்:) என் முன்கையிலிருந்து கழன்று விழுந்த வளையல், கடற்கரை நாட்டையுடைய என் அன்பர் என்னை விட்டுச் சென்றதை, ஊருக்கே பறை சாற்றாதோ?",
    altTranslation: "Will not the slipping bangles on my arm proclaim aloud The way my lord forsook me, when so loud they crowd? — Pope"
  },
  {
    num: 1158, chapter: 116,
    tamil: "இன்னாது இனன்இல்ஊர் வாழ்தல் அதனினும்\nஇன்னாது இனியார்ப் பிரிவு.",
    transliteration: "Iṉṉātu iṉaṉilūr vāḻtal ataṉiṉum\nIṉṉātu iṉiyārp pirivu.",
    english: "Painful is life in a town without kindred; even worse is parting from the dear one.",
    tamilUrai: "உறவினர், அன்பர் இல்லாத ஊரில் வாழ்வது துன்பம்; அதைவிடத் துன்பம், அன்புடையவரிடமிருந்து பிரிந்து தனியாய் வாழ்வது.",
    altTranslation: "Painful in town of strangers without kin to dwell; Worse pain — from the beloved to part farewell. — Pope"
  },
  {
    num: 1159, chapter: 116,
    tamil: "தொடிற்சுடின் அல்லது காமநோய் போல\nவிடிற்சுடல் ஆற்றுமோ தீ.",
    transliteration: "Toṭiṟcuṭiṉ allatu kāmanōy pōla\nViṭiṟcuṭal āṟṟumō tī.",
    english: "Fire burns only when it is touched; can it scorch even from afar, as the malady of love can?",
    tamilUrai: "தொட்டால் சுடும் இயல்பே தீக்கு; ஆனால், காதல் நோய், விடப்பட்டுக்கூட — பிரிந்த தூரத்திலிருந்தே — சுடுவது போல், தீ எரித்து வாட்ட இயலுமோ?",
    altTranslation: "Fire burns when touched, no more; can fire afar so smart As doth love's pang within the parted heart? — Pope"
  },
  {
    num: 1160, chapter: 116,
    tamil: "அரிதாற்றி அல்லல்நோய் நீக்கிப் பிரிவாற்றிப்\nபின்இருந்து வாழ்வார் பலர்.",
    transliteration: "Aritāṟṟi allalnōy nīkkip pirivāṟṟip\nPiṉiruntu vāḻvār palar.",
    english: "Many there are who endure the rare hardship of separation, drive away its grief, and live on after their lovers depart.",
    tamilUrai: "அரிதான பிரிவுத் துன்பத்தை சகித்துக் கொண்டு, துயரத் துன்பத்தை நீக்கி, அந்தப் பிரிவை தாங்கி, அவர் வந்த பிறகும் பின்னும் வாழ்ந்திருப்பவர்கள் பலர் உள்ளனர்.",
    altTranslation: "Many there are who bear the rare hard pain of parting, Banish their woe, and live on, sorrow's stings imparting. — Pope"
  },

  // CHAPTER 117 — Complainings
  {
    num: 1161, chapter: 117,
    tamil: "மறைப்பேன்மன் யானிஃதோ நோயை இறைப்பவர்க்கு\nஊற்றுநீர் போல மிகும்.",
    transliteration: "Maṟaippēṉmaṉ kāmattai yāṉō kuṟippiṉṟit\nTummalpōl tōṉṟi viṭum.",
    english: "I would hide my love-sickness — but, like a sneeze, it bursts forth without warning.",
    tamilUrai: "எனக்குள்ள காதல் நோயை நான் மறைத்தேயாக வேண்டும்; ஆனால், எத்தனை நினைத்தாலும், அது தும்மலைப் போல எதையும் சொல்லாமல் வெளியில் தெரிய வந்துவிடுகிறது.",
    altTranslation: "I'd hide my love, but no — like sneeze it forth doth burst, Unbidden, telling all the secret it has nursed. — Pope"
  },
  {
    num: 1162, chapter: 117,
    tamil: "கரத்தலும் ஆற்றேன்இந் நோயைநோய் செய்தார்க்கு\nஉரைத்தலும் நாணுத் தரும்.",
    transliteration: "Maṟaippēṉmaṉ yāṉiḵtō nōyai iṟaippavarkku\nŪṟṟunīr pōla mikum.",
    english: "I try to hide this disease, but it grows as a spring grows when one draws water from it.",
    tamilUrai: "நான் இந்தக் காதல் நோயை மறைக்கவே செய்கிறேன்; ஆனால், இறைத்து எடுக்க எடுக்க நீர் பெருகும் ஊற்றைப் போல, மறைக்க முயன்றதற்கு ஏற்ப அது மிகுந்து கொண்டே போகிறது.",
    altTranslation: "I'd hide this malady, yet hide it ne'er can be — As fountain, more we draw, the fuller seems its glee. — Pope"
  },
  {
    num: 1163, chapter: 117,
    tamil: "காமமும் நாணும் உயிர்காவாத் தூங்கும்என்\nநோனா உடம்பின் அகத்து.",
    transliteration: "Kāmamum nāṇum uyirkāvāt tūṅkumeṉ\nNōṉā uṭampiṉ akattu.",
    english: "Love and shame hang as the burdens at either end of a yoke, balanced upon the trembling pole of my unbearable body.",
    tamilUrai: "காதலும், நாணமும், காவடியின் இரு பக்கத்து சுமைகளைப் போல, இவ்விரண்டையும் தாங்க முடியாத என் உடல் என்னும் காவடியின் தண்டில் தொங்கி நிற்கின்றன; உயிர்தான் அந்தத் தண்டாய் இருக்கிறது.",
    altTranslation: "Love and shame as twin loads on yoke do balance keep, Upon my body's trembling beam — life's slender deep. — Pope"
  },
  {
    num: 1164, chapter: 117,
    tamil: "காமக் கடல்மன்னும் உண்டே அதுநீந்தும்\nஏமப் புணைமன்னும் இல்.",
    transliteration: "Kāmak kaṭalmaṉṉum uṇṭē atunīntum\nĒmap puṇaimaṉṉum il.",
    english: "There is indeed an ocean of love; but a saving raft to swim across it — there is none.",
    tamilUrai: "காதல் என்பது ஒரு பேரிய கடலாய் உள்ளது; ஆனால், அதைக் கடப்பதற்கான பாதுகாப்பான தெப்பம் ஒன்றுகூட இல்லை.",
    altTranslation: "An ocean wide of love is sure — but ah, alas! No raft of safety on its waves to bear me passes. — Pope"
  },
  {
    num: 1165, chapter: 117,
    tamil: "துப்பின் எவனாவர் மன்கொல் துயர்வரவு\nநட்பினுள் ஆற்று பவர்.",
    transliteration: "Tuppiṉ evaṉāvar maṉkol tuyarvaravu\nNaṭpiṉuḷ āṟṟu pavar.",
    english: "What would they do as foes — those who, even in the bond of love, bring such great sorrow?",
    tamilUrai: "காதல் என்னும் நட்பின் வழியாகவே இத்துணை துன்பத்தைத் தருபவர், பகையாய் வந்தால் இனி எத்தகைய இடரைச் செய்வாரோ — அறிய இயலாது.",
    altTranslation: "Who in the very bond of love such grief have wrought — As foes, what greater grievous bane could be e'er thought? — Pope"
  },
  {
    num: 1166, chapter: 117,
    tamil: "இன்பம் கடல்மற்றுக் காமம் அஃதடுங்கால்\nதுன்பம் அதனிற் பெரிது.",
    transliteration: "Iṉpam kaṭalmaṟṟuk kāmam aḵtaṭuṅkāl\nTuṉpam ataṉiṟ peritu.",
    english: "The pleasure of love is like the sea; but when love causes pain, that pain is greater than the sea.",
    tamilUrai: "காதலின் இன்பம் கடலைப் போல அளவில் பெரியது; ஆனால், அந்தக் காதல் வருத்துகின்ற காலத்தில், அதன் துன்பம் கடலைவிடப் பெரியது.",
    altTranslation: "The joy of love is wide as is the sea; The pain it brings far greater still must be. — Pope"
  },
  {
    num: 1167, chapter: 117,
    tamil: "காமக் கடும்புனல் நீந்திக் கரைகாணேன்\nயாமத்தும் யானே உளேன்.",
    transliteration: "Kāmak kaṭumpuṉal nīntik karaikāṇēṉ\nyāmattum yāṉē uḷēṉ.",
    english: "I swim in the fierce flood of love, and find no shore; even at midnight, I alone am awake.",
    tamilUrai: "காதலின் கடும் வெள்ளத்தில் நீந்தி, கரையை எங்கும் காணாமல் தவிக்கிறேன்; யாமம் (நள்ளிரவு) வந்தாலும், நான் ஒருவளே விழித்து வருந்துகிறேன்.",
    altTranslation: "I swim love's raging flood, and yet no shore can find; E'en at midnight, alone I lie, no rest of mind. — Pope"
  },
  {
    num: 1168, chapter: 117,
    tamil: "மன்னுயிர் எல்லாம் துயிற்றி அளித்திரா\nஎன்னல்லது இல்லை துணை.",
    transliteration: "Maṉṉuyir ellām tuyiṟṟi aḷittirā\nEṉṉallatu illai tuṇai.",
    english: "Night, having compassionately put all living souls to sleep, has no companion now besides me.",
    tamilUrai: "எல்லா உயிர்களையும் தூங்க வைத்து, தாய் போல காத்த இரவுக்கு, என்னைத் தவிர வேறு எந்தத் துணையும் இல்லை.",
    altTranslation: "The night, that gently lulled all living things to rest, Has no companion now save me — alone, oppressed. — Pope"
  },
  {
    num: 1169, chapter: 117,
    tamil: "கொடியார் கொடுமையின் தாம்கொடிய இந்நாள்\nநெடிய கழியும் இரா.",
    transliteration: "Koṭiyār koṭumaiyiṉ tāmkoṭiya innāḷ\nNeṭiya kaḻiyum irā.",
    english: "More cruel than my cruel lover are the long nights of these days that drag on without end.",
    tamilUrai: "கொடிய பிரிவைச் செய்த என் காதலரின் கொடுமையை விட, இந்தக் காலத்தில் நெடியதாக கழிகின்ற இரவுகள் இன்னும் கொடுமையானவை.",
    altTranslation: "More cruel than my cruel love that left me here, Are these long-drawn nights that creep without an end so dear. — Pope"
  },
  {
    num: 1170, chapter: 117,
    tamil: "உள்ளம்போன்று உள்வழிச் செல்கிற்பின் வெள்ளநீர்\nநீந்தல மன்னோஎன் கண்.",
    transliteration: "Uḷḷampōṉṟu uḷvaḻic celkiṟpiṉ veḷḷanīr\nNīntala maṉṉōeṉ kaṇ.",
    english: "If only my eyes could go where my heart goes, they would not have to swim in the flood of their own tears.",
    tamilUrai: "என் மனதைப் போலவே, என் கண்களும் காதலர் இருக்கும் இடத்திற்கு செல்லக்கூடியதாக அமைந்திருந்தால், அவை இப்படி வெள்ளம் போன்ற கண்ணீர்ப் பெருக்கில் நீந்த வேண்டியதில்லை.",
    altTranslation: "Could but my eyes go where my heart hath flown, They need not swim in tear-floods of their own. — Pope"
  },

  // CHAPTER 118 — Eyes Consumed with Grief
  {
    num: 1171, chapter: 118,
    tamil: "கண்தாம் கலுழ்வ தெவன்கொலோ தண்டாநோய்\nதாம்காட்ட யான்கண் டது.",
    transliteration: "Kaṇtām kaluḻva tevaṉkolō taṇṭānōy\nTāmkāṭṭa yāṉkaṇ ṭatu.",
    english: "Why do my own eyes weep? It was they that showed him to me, bringing me this unceasing pain.",
    tamilUrai: "தீராத காதல் நோயைத் தந்த அந்த ஒருவனை, அவர்களே எனக்குக் காட்டினார்கள்; இப்போது அதே கண்கள் அழுவது ஏன்?",
    altTranslation: "Why weep my eyes? 'Twas they that showed him first to me — The cause of all this ceaseless misery. — Pope"
  },
  {
    num: 1172, chapter: 118,
    tamil: "தெரிந்துணரா நோக்கிய உண்கண் பரிந்துணராப்\nபைதல் உழப்பது எவன்.",
    transliteration: "Terintuṇarā nōkkiya uṇkaṇ parintuṇarāp\nPaital uḻappatu evaṉ.",
    english: "Why should the dark-painted eyes that gazed without thinking now grieve uncomprehending?",
    tamilUrai: "(என்ன விளையும் என) ஆராய்ந்து எண்ணாமலேயே அவரைப் பார்த்த என்னுடைய மை தீட்டிய கண்கள், இப்போது (என்ன காரணமாய் வருந்துவது என) தாம் உணராமலேயே வருந்துவது ஏன்?",
    altTranslation: "Why grieve, with thoughtless eyes that gazed amain, Unknowing now, with strange uncomprehending pain? — Pope"
  },
  {
    num: 1173, chapter: 118,
    tamil: "கதுமெனத் தாநோக்கித் தாமே கலுழும்\nஇதுநகத் தக்க துடைத்து.",
    transliteration: "Katumeṉat tānōkkit tāmē kaluḻum\niTunakat takka tuṭaittu.",
    english: "These eyes that boldly gazed at him are now themselves weeping — what a thing to laugh at!",
    tamilUrai: "தாமாகவே ஆரவாரத்துடன் அவரைப் பார்த்துவிட்டு, இப்போது தாமாகவே அழுகிற இந்த என் கண்களின் நிலை, சிரிக்கத் தக்கதொரு செயல்.",
    altTranslation: "Those eyes which boldly gazed without restraint, Now weep themselves — at this how can one not laugh quaint? — Pope"
  },
  {
    num: 1174, chapter: 118,
    tamil: "பெயலாற்றா நீருலந்த உண்கண் உயலாற்றா\nஉய்வில்நோய் என்கண் நிறுத்து.",
    transliteration: "Peyalāṟṟā nīrulanta uṇkaṇ uyalāṟṟā\nUyvilnōy eṉkaṇ niṟuttu.",
    english: "My darkened eyes, robbed of their tears, have brought me a sickness from which I cannot escape.",
    tamilUrai: "மை தீட்டிய என் கண்கள் கண்ணீரை வடிக்கச் செய்து விட, இப்போது நீர் வற்றி உலர்ந்து போயின; உய்விற்கு வழியில்லாத காதல் நோயை அவை என்னிடம் ஏற்படுத்திவிட்டன.",
    altTranslation: "My eyes that wept till tears were spent are bare, And brought a malady I cannot bear. — Pope"
  },
  {
    num: 1175, chapter: 118,
    tamil: "படலாற்றா பைதல் உழக்கும் கடலாற்றாக்\nகாமநோய் செய்தஎன் கண்.",
    transliteration: "Paṭalāṟṟā paital uḻakkum kaṭalāṟṟāk\nKāmanōy ceytaeṉ kaṇ.",
    english: "My eyes which gave me a love-sickness greater than the sea now suffer sleepless misery themselves.",
    tamilUrai: "கடல் கூட தாங்க முடியாத காதல் நோயை எனக்குச் செய்த என் கண்கள், தாம் தூங்காமல் தான் துன்பப்பட்டு வாட வேண்டியதாய் ஆகிவிட்டன.",
    altTranslation: "Mine eyes, that gave me love-grief greater than the sea, Now sleepless suffer their own misery. — Pope"
  },
  {
    num: 1176, chapter: 118,
    tamil: "ஓஒ இனிதே எமக்கிந்நோய் செய்தகண்\nதாஅம் இதற்பட் டது.",
    transliteration: "Ōo iṉitē emakkinnōy ceytakaṇ\nTāam itaṟpaṭ ṭatu.",
    english: "Oh how sweet to see the eyes that gave me this love-pang now suffer the same in turn!",
    tamilUrai: "ஆ! எனக்குக் காதல் நோயைச் செய்த இந்தக் கண்களும், அதே துன்பத்தில் தாமே மாட்டிக்கொண்டிருப்பது இனிமையாய் இருக்கிறது!",
    altTranslation: "How sweet it is, that eyes which gave me love's keen smart, Now share themselves the selfsame burning art. — Pope"
  },
  {
    num: 1177, chapter: 118,
    tamil: "உழந்துழந் துள்நீர் அறுக விழைந்திழைந்து\nவேண்டி அவர்க்கண்ட கண்.",
    transliteration: "Uḻantuḻan tuḷnīr aṟuka viḻaintiḻaintu\nVēṇṭi avarkkaṇṭa kaṇ.",
    english: "May the eyes which once melted with longing for him weep on till they have no tears left.",
    tamilUrai: "பல வழியாக விழைந்து, அவரை விரும்பிப் பார்த்தே மயங்கியிருந்த என் கண்கள், கண்ணீரும் வற்றும் அளவுக்கு வருந்தி அழட்டும்; அதுவே அவற்றுக்குத் தண்டனை.",
    altTranslation: "Let those mine eyes that yearned and gazed on him, Weep till their tears run dry — to weeping's farthest brim. — Pope"
  },
  {
    num: 1178, chapter: 118,
    tamil: "பேணாது பெட்டார் உளர்மன்னோ மற்றவர்க்\nகாணாது அமைவில கண்.",
    transliteration: "Pēṇātu peṭṭār uḷarmaṉṉō maṟṟavark\nKāṇātu amaivila kaṇ.",
    english: "He showed me love but did not cherish me; yet my eyes find no rest unless they see him.",
    tamilUrai: "காதலை வெளிப்படுத்தினார் ஆனால், என்னை விரும்பித் தங்கி பாதுகாக்கவில்லை; அப்படிப்பட்டவரை தவிர, என் கண்கள் வேறு எவரையும் காணாமல் அமைதி அடைய மாட்டேன் என்கின்றன.",
    altTranslation: "He loved, but cherished not — yet still my eyes Refuse to rest, save in his face their prize. — Pope"
  },
  {
    num: 1179, chapter: 118,
    tamil: "வாராக்கால் துஞ்சா வரின்துஞ்சா ஆயிடை\nஆரஞர் உற்றன கண்.",
    transliteration: "Vārākkāl tuñcā variṉtuñcā āyiṭai\nĀrañar uṟṟaṉa kaṇ.",
    english: "When he is absent, they cannot sleep; when he comes, they cannot sleep — between these, my eyes endure pain hard to bear.",
    tamilUrai: "அவர் வராதபோதும் தூங்காது; வந்தபோதும் தூங்காது; இவ்விரண்டுக்கும் இடையே, என் கண்கள் தாங்க முடியாத பேரிய துன்பம் அடைந்துவிட்டன.",
    altTranslation: "When absent he, they sleep not; comes he, sleep is gone — Between these, mine eyes endure deep grief alone. — Pope"
  },
  {
    num: 1180, chapter: 118,
    tamil: "மறைபெறல் ஊரார்க்கு அரிதன்றால் எம்போல்\nஅறைபறை கண்ணார் அகத்து.",
    transliteration: "Maṟaipeṟal ūrārkku aritaṉṟāl empōl\naṟaipaṟai kaṇṇār akattu.",
    english: "It is not hard for the townsfolk to learn the secret in the heart of one whose eyes, like mine, are like beaten drums.",
    tamilUrai: "என் போல் அறையப்படும் பறையை ஒத்த கண்களை உடையவர்களின் உள்ளக் கருத்தை, ஊர் மக்கள் அறிந்துகொள்வது எவ்வளவு எளிது!",
    altTranslation: "Easy for townsfolk to learn the heart's hid grief, In one whose eyes are as a beaten drum's belief. — Pope"
  },

  // CHAPTER 119 — The Pallid Hue
  {
    num: 1181, chapter: 119,
    tamil: "நயந்தவர்க்கு நல்காமை நேர்ந்தேன் பசந்தஎன்\nபண்பியார்க்கு உரைக்கோ பிற.",
    transliteration: "Nayantavarkku nalkāmai nērntēṉ pacantaeṉ\nPaṇpiyārkku uraikkō piṟa.",
    english: "I consented to my lover's parting; to whom now shall I tell my grief that has paled my body?",
    tamilUrai: "நான் விரும்பியவர் பிரிந்து செல்வதை, பிரியேல் என்று சொல்லாமல், அதற்கு உடன்பட்டிருந்தேன்; இப்போது என் உடல் வெளுத்துப் பேதலித்த நிலைக்குப் பிற யாரிடம் சென்று சொல்வேன்?",
    altTranslation: "I bade not him I loved to stay — yet pale grew I; To whom now my changed hue's tale shall I make known and sigh? — Pope"
  },
  {
    num: 1182, chapter: 119,
    tamil: "அவர்தந்தார் என்னும் தகையால் இவர்தந்தென்\nமேனிமேல் ஊரும் பசப்பு.",
    transliteration: "Avartantār eṉṉum takaiyāl ivartanteṉ\nMēṉimēl ūrum pacappu.",
    english: "Since I have no power to deny it, this pallor moves over my body, claiming my lover gave it to me.",
    tamilUrai: "\"இதை என் காதலரே தந்தார்\" என்னும் உரிமையால், அந்தப் பசலை தான் வந்து என் உடல் மீது படர்கிறதாம்.",
    altTranslation: "By right of giving, claims this pallor o'er my frame To creep — saying, 'Thy lover sent me; that's my claim.' — Pope"
  },
  {
    num: 1183, chapter: 119,
    tamil: "சாயலும் நாணும் அவர்கொண்டார் கைம்மாறா\nநோயும் பசலையும் தந்து.",
    transliteration: "Cāyalum nāṇum avarkoṇṭār kaimmāṟā\nNōyum pacalaiyum tantu.",
    english: "He took away my charm and my modesty, leaving me grief and the pallid hue in their stead.",
    tamilUrai: "அவர் என்னுடைய உடல் அழகையும், நாணத்தையும் கொண்டு சென்றார்; அதற்குப் பிரதியாய் என்னிடம் காதல் நோயையும், பசலையையும் தந்துவிட்டார்.",
    altTranslation: "He took away my charm and shame, and left for me Grief and pale hue — exchange of woe to be. — Pope"
  },
  {
    num: 1184, chapter: 119,
    tamil: "உள்ளுவன் மன்யான் உரைப்பது அவர்திறமால்\nகள்ளம் பிறவோ பசப்பு.",
    transliteration: "Uḷḷuvaṉ maṉyāṉ uraippatu avartiṟamāl\nKaḷḷam piṟavō pacappu.",
    english: "I think of him alone; I speak only of his greatness; and yet, by stealth, this pallor steals upon me.",
    tamilUrai: "என் மனத்தினுள் எண்ணுவதும், வாயால் சொல்வதும் என் காதலரின் சிறப்பையே; ஆனாலும், என்னை யாரும் அறியாதபடி பசலை வந்து சேர்வது என்ன கள்வச் செயல்?",
    altTranslation: "All my thought is of him, all my words his fame proclaim — Yet pallor creeps in stealth — what cunning is this same? — Pope"
  },
  {
    num: 1185, chapter: 119,
    tamil: "உவக்காண்எம் காதலர் செல்வார் இவக்காண்என்\nமேனி பசப்பூர் வது.",
    transliteration: "Uvakkāṇem kātalar celvār ivakkāṇeṉ\nMēṉi pacappūr vatu.",
    english: "There — see! my lover departs! Here — see! the pallor mounts upon my body!",
    tamilUrai: "(தோழிக்கு தலைவி காட்டி கூறுகிறாள்:) அதோ பார்! எம் காதலர் சென்று கொண்டிருக்கிறார்! இதோ பார்! என்னுடைய உடம்பின் மீது பசலை தோன்றி படர்கிறது!",
    altTranslation: "Yonder my lover goes — and lo, on me, pale hue Already creeping starts its march anew. — Pope"
  },
  {
    num: 1186, chapter: 119,
    tamil: "விளக்கற்றம் பார்க்கும் இருளேபோல் கொண்கன்\nமுயக்கற்றம் பார்க்கும் பசப்பு.",
    transliteration: "Viḷakkaṟṟam pārkkum iruḷēpōl koṇkaṉ\nMuyakkaṟṟam pārkkum pacappu.",
    english: "As darkness watches the failing of the lamp, so the pallor waits for the relaxing of his embrace.",
    tamilUrai: "விளக்கின் ஒளி குறையும் தருணத்தை எதிர்நோக்கி இருளானது காத்திருப்பதைப் போலவே, என் காதலரின் தழுவலின் இறுக்கம் தளரும் தருணத்தை, பசலை எதிர்நோக்கி காத்திருக்கிறது.",
    altTranslation: "As darkness watches dwindling lamp's fading flame, So pallor waits the slackening of his close embrace's claim. — Pope"
  },
  {
    num: 1187, chapter: 119,
    tamil: "புல்லிக் கிடந்தேன் புடைபெயர்ந்தேன் அவ்வளவில்\nஅள்ளிக்கொள் வற்றே பசப்பு.",
    transliteration: "Pullik kiṭantēṉ puṭaipeyarntēṉ avvaḷavil\naḷḷikkoḷ vaṟṟē pacappu.",
    english: "I lay clasped in his arms; I just turned aside — and at once, the pallor came so thick, one could scoop it up.",
    tamilUrai: "அவருடைய தழுவலில் நெருங்கிக் கிடந்தேன்; சிறிது இடம் மாறி திரும்பினேன்; அந்த நொடிப்பொழுதிலேயே, அள்ளிக்கொள்ளும் அளவுக்கு பசலை என் மீது படர்ந்து விட்டது.",
    altTranslation: "Clasped in his arms I lay — I turned aside one whit, And straight came pallor thick enough to scoop in fit. — Pope"
  },
  {
    num: 1188, chapter: 119,
    tamil: "பசந்தாள் இவளென்பது அல்லால் இவளைத்\nதுறந்தார் அவரென்பார் இல்.",
    transliteration: "Pacantāḷ ivaḷeṉpatu allāl ivaḷait\nTuṟantār avareṉpār il.",
    english: "All speak of how she has grown pale; but none speaks of how he has forsaken her.",
    tamilUrai: "\"இவள் பசலையில் வாடுகிறாள்\" என்று மட்டும் ஊர் பேசுகிறது; \"இவளைப் பிரிந்து சென்றது அந்தத் தலைவன்தான்\" என்று குற்றத்தைப் பேசுபவர் இல்லை.",
    altTranslation: "'She has grown pale' — that all do say with one accord; But none laments, 'He left her' — speech of him is curbed. — Pope"
  },
  {
    num: 1189, chapter: 119,
    tamil: "பசக்கமன் பட்டாங்கென் மேனி நயப்பித்தார்\nநன்னிலையர் ஆவர் எனின்.",
    transliteration: "Pacakkamaṉ paṭṭāṅkeṉ mēṉi nayappittār\nNaṉṉilaiyar āvar eṉiṉ.",
    english: "Let my body grow pale and pale; if only he who consented to part fares well, that suffices.",
    tamilUrai: "என்னை விரும்பச் செய்து, பின் பிரிந்த எம் காதலர் நல்ல நிலையில் வாழ்கிறார் என்றால், என் உடல் இன்னும் இன்னும் பசந்து போக நேர்ந்தாலும் அது எனக்கு இனிமையே.",
    altTranslation: "Let my body still grow pale and pale anew, If only he who promised, fares well too. — Pope"
  },
  {
    num: 1190, chapter: 119,
    tamil: "பசப்பெனப் பேர்பெறுதல் நன்றே நயப்பித்தார்\nநல்காமை தூற்றார் எனின்.",
    transliteration: "Pacappeṉap pērpeṟutal naṉṟē nayappittār\nNalkāmai tūṟṟār eṉiṉ.",
    english: "It would be well to be called pale, if only the world will not blame him for his unkindness.",
    tamilUrai: "என்னை விரும்பச் செய்துவிட்டு, பின் அன்பு செய்யாத என் காதலரது குற்றத்தை, ஊரார் இகழ்ந்து பேசாமலிருந்தால், எனக்கு பசலை என்ற பெயர் வருவது நல்லதே.",
    altTranslation: "If men but blame not him for love unbounded, gone, To bear the name of 'pallor's victim' I will own. — Pope"
  },

  // CHAPTER 120 — The Solitary Anguish
  {
    num: 1191, chapter: 120,
    tamil: "தாம்வீழ்வார் தம்வீழப் பெற்றவர் பெற்றாரே\nகாமத்துக் காழில் கனி.",
    transliteration: "Tāmvīḻvār tamvīḻap peṟṟavar peṟṟārē\nKāmattuk kāḻil kaṉi.",
    english: "Those who are loved by those they love have plucked the fruit of love without a stone.",
    tamilUrai: "தாம் விரும்புபவராலேயே தாமும் விரும்பப்படும் பேற்றை அடைந்தவர், காதல் என்னும் கொட்டை இல்லாத கனியை அனுபவிப்பவர்களே ஆவர்.",
    altTranslation: "They who are loved by those they love have surely won The stoneless fruit of love — sweet, with no thorn upon. — Pope"
  },
  {
    num: 1192, chapter: 120,
    tamil: "வாழ்வார்க்கு வானம் பயந்தற்றால் வீழ்வார்க்கு\nவீழ்வார் அளிக்கும் அளி.",
    transliteration: "Vāḻvārkku vāṉam payantaṟṟāl vīḻvārkku\nVīḻvār aḷikkum aḷi.",
    english: "The grace shown by lovers to lovers is like the rain that falls on those who live by it.",
    tamilUrai: "ஒருவரை ஒருவர் விரும்பும் தலைவரும் தலைவியும் ஒருவருக்கு ஒருவர் காட்டும் அன்பு, மண்ணில் வாழும் உயிர்களுக்கு வானம் தரும் மழைபோல் இனிய பயன் தருவதாகும்.",
    altTranslation: "As rain to those who live by rain, the grace that flows From lover to lover, life's sweetest fountain shows. — Pope"
  },
  {
    num: 1193, chapter: 120,
    tamil: "வீழுநர் வீழப் படுவார்க்கு அமையுமே\nவாழுநம் என்னும் செருக்கு.",
    transliteration: "Vīḻunar vīḻap paṭuvārkku amaiyumē\nVāḻunam eṉṉum cerukku.",
    english: "Only those whose love is returned by their loved ones can claim the proud thought, 'we live indeed.'",
    tamilUrai: "தாம் விரும்புகிற காதலரால் தாமும் விரும்பப்படுபவர்களுக்கே, \"நாம் வாழ்கிறோம்\" என்ற பெருமைமிக்க உள்ளக் களிப்பு பொருந்தி அமைய இயலும்.",
    altTranslation: "The proud thought 'we live well' is only theirs Whose love is loved in turn, who claim love's heirs. — Pope"
  },
  {
    num: 1194, chapter: 120,
    tamil: "வீழப் படுவார் கெழீஇயிலர் தாம்வீழ்வார்\nவீழப் படாஅர் எனின்.",
    transliteration: "Vīḻap paṭuvār keḻīiyilar tāmvīḻvār\nVīḻap paṭāar eṉiṉ.",
    english: "Even those much loved by others lack what is best, if those they themselves love do not love them in return.",
    tamilUrai: "உலகில் பலரால் விரும்பப்படும் பெருமை வாய்ந்தவர்களாய் இருப்பினும், தாம் விரும்புபவராலே தாம் விரும்பப்படாதவர்கள் சிறந்த பேற்றை அடையாதவராகவே இருப்பர்.",
    altTranslation: "Though loved by many, they lack the greatest grace, Whose love is not returned by their own loved one's face. — Pope"
  },
  {
    num: 1195, chapter: 120,
    tamil: "நாம்காதல் கொண்டார் நமக்கெவன் செய்பவோ\nதாம்காதல் கொள்ளாக் கடை.",
    transliteration: "Nāmkātal koṇṭār namakkevaṉ ceypavō\nTāmkātal koḷḷāk kaṭai.",
    english: "What can he, whom we have loved, do for us, if he himself does not love us?",
    tamilUrai: "நாம் விரும்பிய ஒருவரே, தாம் நம்மை விரும்பாதிருந்தால், அவர் நமக்கு என்ன நலம் செய்வார்?",
    altTranslation: "What can he do for us, the one we love so dear, If for himself he loves us not, with love sincere? — Pope"
  },
  {
    num: 1196, chapter: 120,
    tamil: "ஒருதலையான் இன்னாது காமம்காப் போல\nஇருதலை யானும் இனிது.",
    transliteration: "Orutalaiyāṉ iṉṉātu kāmamkāp pōla\nIrutalai yāṉum iṉitu.",
    english: "Love, like the bearing-pole, is bitter when carried by one only; sweet only when borne on both sides equally.",
    tamilUrai: "ஒரு பக்கத்தில் மட்டும் காதல் இருந்தால் அது துன்பமே; காவடியின் இரு பக்கத்திலும் சமமான பாரம் ஏற்றியது போல, இரு பக்கத்திலும் காதல் சமமாய் இருந்தால் அதுவே இனிய காதலாகும்.",
    altTranslation: "Love is grief, when borne by one alone; like yoke 'tis sweet When weight is borne by both alike, where loves do meet. — Pope"
  },
  {
    num: 1197, chapter: 120,
    tamil: "பருவரலும் பைதலும் காணான்கொல் காமன்\nஒருவர்கண் நின்றொழுகு வான்.",
    transliteration: "Paruvaralum paitalum kāṇāṉkol kāmaṉ\nOruvarkaṇ niṉṟoḻuku vāṉ.",
    english: "Love, that visits one only, sees not the suffering and sallowness it causes — does it?",
    tamilUrai: "காதல் ஒரே ஒருவளிடம் (என்னிடம்) மட்டுமே தங்கி நிற்கும்போது, அதனால் எனக்கு ஏற்படும் வருத்தத்தையும், மெலிவையும் காமம் என்னும் கடவுள் காண்பதில்லையா?",
    altTranslation: "Does Cupid see no grief, no withered lonely state, In her on whom alone he chooses to await? — Pope"
  },
  {
    num: 1198, chapter: 120,
    tamil: "வீழ்வாரின் இன்சொல் பெறாஅது உலகத்து\nவாழ்வாரின் வன்கணார் இல்.",
    transliteration: "Vīḻvāriṉ iṉcol peṟāatu ulakattu\nVāḻvāriṉ vaṉkaṇār il.",
    english: "There are no harder hearts on earth than those who live without sweet words from the one they love.",
    tamilUrai: "உலகத்தில், தான் விரும்புகின்ற காதலரிடமிருந்து இனிமையான ஒரு சொல் கூட பெற இயலாமலும், மரணம் அடையாமல் தொடர்ந்து உயிர் வாழ்பவரை விட, கடின உள்ளம் கொண்டோர் வேறெவரும் இல்லை.",
    altTranslation: "None hardened-heart but they who live, and from their loved Receive no kindly word — strange life unproved. — Pope"
  },
  {
    num: 1199, chapter: 120,
    tamil: "நசைஇயார் நல்கார் எனினும் அவர்மாட்டு\nஇசையும் இனிய செவிக்கு.",
    transliteration: "Nacaiiyār nalkār eṉiṉum avarmāṭṭu\niCaiyum iṉiya cevikku.",
    english: "Though my desired one shows no kindness, even the news of him is sweet to my ears.",
    tamilUrai: "நான் விரும்பியவர் என்னிடம் அன்பு செய்யவில்லை என்றாலும், அவரைப் பற்றிய புகழ் முதலான செய்திகள் கூட என் காதுக்கு இனிமையே.",
    altTranslation: "Though he I love show me no tender care, Yet news of him is sweet — my ears it cheers afar. — Pope"
  },
  {
    num: 1200, chapter: 120,
    tamil: "உறாஅர்க்கு உறுநோய் உரைப்பாய் கடலைச்\nசெறாஅஅய் வாழிய நெஞ்சு.",
    transliteration: "Uṟāark kuṟunōy uraippāy kaṭalaic\nCeṟāaay vāḻiya neñcu.",
    english: "Long live, my heart! that thinks of telling thy great love-grief to one who loves not. As well try to fill up the sea!",
    tamilUrai: "என் நெஞ்சே! என்னை விரும்பாத ஒருவருக்கு உன்னுடைய மிக்க காதல் நோயை எடுத்துச் சொல்ல எண்ணுகிறாயே! கடலை மண்ணால் தூர்த்து வற்றச் செய்வது எத்தனை எளிதோ, அவ்வளவு எளிதே! நன்றாய் வாழி.",
    altTranslation: "My heart, long live! Why tell thy grief to him who heeds not? Thou might'st as well fill up the sea — to no purpose it leadeth. — Pope"
  },

  // CHAPTER 121 — Sad Memories
  {
    num: 1201, chapter: 121,
    tamil: "உள்ளினும் தீராப் பெருமகிழ் செய்தலால்\nகள்ளினும் காமம் இனிது.",
    transliteration: "Uḷḷiṉum tīrāp perumakiḻ ceytalāl\nKaḷḷiṉum kāmam iṉitu.",
    english: "Love is sweeter than wine, for even in mere remembrance it gives unending joy.",
    tamilUrai: "மனதில் நினைத்தாலும் கூட, தீர்க்க முடியாத பெரும் மகிழ்ச்சியை காதல் தருவதால், கள்ளின் மயக்கத்தைவிட காதலின் இன்பமே மேலானது.",
    altTranslation: "Sweeter than wine is love — its joy in mere remembrance bears, Untold delight no draught of cup compares. — Pope"
  },
  {
    num: 1202, chapter: 121,
    tamil: "எனைத்தொனறு ஏஎர் இனிதே கதவர்\nநினைத்தொன்று காண்வுழி நின்.",
    transliteration: "Eṉaittoṉṟu ēer iṉitē kataivar\nNiṉaittoṉṟu kāṇvuḻi niṉ.",
    english: "Whatever love is, it is sweet — for in thinking of him alone, none of his absence is felt.",
    tamilUrai: "எத்தகையதாய் இருந்தாலும், காதல் இனிமையானதே; ஏனெனில், காதலரை நினைத்திருக்கும் ஒரு கணமே போதும், பிரிவின் வருத்தம் எதுவும் தெரியாது.",
    altTranslation: "Sweet, however small, the thought of love that flies — One thought of him, all sense of absence dies. — Pope"
  },
  {
    num: 1203, chapter: 121,
    tamil: "நினைப்பவர் போன்று நினையார்கொல் தும்மல்\nசினைப்பது போன்று கெடும்.",
    transliteration: "Niṉaippavar pōṉṟu niṉaiyārkol tummal\nCiṉaippatu pōṉṟu keṭum.",
    english: "Surely he who thinks of me must think of me incompletely — for my sneeze, just begun, dies away unfulfilled.",
    tamilUrai: "என் காதலர் என்னை நினைக்கின்ற ஒருவர் போல காட்டிக்கொண்டு, உண்மையில் முழுமையாய் நினைக்காமல் இருப்பாரோ? என் தும்மல் வரப்போவதாய் ஆரம்பித்து, பாதியில் நின்றுவிடுகிறதே.",
    altTranslation: "Doth he who thinks but half-think of me, perhaps? My sneeze, half-rising, fails — its impulse stops, it lapses. — Pope"
  },
  {
    num: 1204, chapter: 121,
    tamil: "யாமும் உளேம்கொல் அவர்நெஞ்சத்து எந்நெஞ்சத்து\nஓஒ உளரே அவர்.",
    transliteration: "Yāmum uḷēmkol avarneñcattu enneñcattu\nŌo uḷarē avar.",
    english: "Am I really in his heart, as he is so much in mine?",
    tamilUrai: "என் நெஞ்சத்தில் அவர் இடைவிடாமல் நிற்கிறாரே; அவரது நெஞ்சில் நானும் இடம் பெற்றிருக்கிறேனோ?",
    altTranslation: "Am I in his heart enshrined, as he doth dwell — In all my heart, beyond what tongue can tell? — Pope"
  },
  {
    num: 1205, chapter: 121,
    tamil: "தம்நெஞ்சத்து எம்மைக் கடிகொண்டார் நாணார்கொல்\nஎம்நெஞ்சத்து ஓவா வரல்.",
    transliteration: "Tamneñcattu emmaik kaṭikoṇṭār nāṇārkol\nEmneñcattu ōvā varal.",
    english: "He has driven me out of his own heart — has he no shame to come back into mine without ceasing?",
    tamilUrai: "தன் மனத்துள் என்னை வரவிடாமல் தடுத்துக்கொண்ட அவர், என்னுடைய நெஞ்சத்தில் எப்போதுமே வந்துகொண்டு இருக்க — அவருக்கு வெட்கமாய் இல்லையா?",
    altTranslation: "He shut me from his heart's own court — yet shameless seems To enter mine unceasing, in my dreams. — Pope"
  },
  {
    num: 1206, chapter: 121,
    tamil: "மற்றியான் என்னுளேன் மன்னோ அவரொடியான்\nஉற்றநாள் உள்ள உளேன்.",
    transliteration: "Maṟṟiyāṉ eṉṉuḷēṉ maṉṉō avaroṭiyāṉ\nUṟṟanāḷ uḷḷa uḷēṉ.",
    english: "How could I bear to live? Only by remembering the days I spent with him do I now live.",
    tamilUrai: "நான் இப்போது எவ்வாறு உயிர்வாழ்கிறேன்? என் காதலருடன் கழித்த அந்த நாட்களை நினைத்து, அந்த நினைவே துணையாக நிற்கையால்தான் நான் இங்கு உயிருடன் இருக்கிறேன்.",
    altTranslation: "How can I live? Only the memory of past days With him sustains me now amid these grievous ways. — Pope"
  },
  {
    num: 1207, chapter: 121,
    tamil: "மறப்பின் எவனாவன் மற்கொல் மறப்பறியேன்\nஉள்ளினும் உள்ளம் சுடும்.",
    transliteration: "Maṟappiṉ evaṉāvaṉ maṟkol maṟappaṟiyēṉ\nUḷḷiṉum uḷḷam cuṭum.",
    english: "What would happen to me if I should forget him? Yet I have never forgotten — and still, the very thought burns my soul.",
    tamilUrai: "என் காதலரை நான் மறந்துவிட்டால், என் நிலை என்னவாகும்? மறக்கின்ற தன்மை எனக்கு அறியாது; நினைத்துக்கொண்டாலே, என் உள்ளம் சுடுவதல்லவா!",
    altTranslation: "Should I forget — what would befall? Forgetfulness Is unknown to me; remembrance burns the heart no less. — Pope"
  },
  {
    num: 1208, chapter: 121,
    tamil: "எனைத்து நினைப்பினும் கைகொடார் என்னை\nநினையாரோ காதலி யவர்.",
    transliteration: "Eṉaittu niṉaippiṉum kaikoṭār eṉṉai\nNiṉaiyārō kātali yavar.",
    english: "However much I think of him, he resents it not; will he not, my dear love, think of me too?",
    tamilUrai: "எவ்வளவு நான் நினைத்துக்கொண்டாலும், அவர் என் மீது சினம் கொள்ளவில்லை; அவ்வாறாயின், என் காதலர் என்னையும் நினைத்திருக்க மாட்டாரா?",
    altTranslation: "However much I think, he chides me not — Will he not too, my love, hold me in thought? — Pope"
  },
  {
    num: 1209, chapter: 121,
    tamil: "உள்ளம் இனிது இனிதே உள்ளம் இனிதேகாண்\nகள்ளம் பிறவோ இது.",
    transliteration: "Uḷḷam iṉitu iṉitē uḷḷam iṉitēkāṇ\nKaḷḷam piṟavō itu.",
    english: "The thought is sweet, very sweet; sweeter still if it be his thought too. Or is this another deceit?",
    tamilUrai: "என் உள்ளம் இனிமையாக உள்ளது; மிக மிக இனிமை; இது என் காதலரது உள்ளமும் கூட நினைத்தமை என்றால், அது இன்னும் இனிமையே. அல்லது, இது வேறு ஒரு வஞ்சனையோ?",
    altTranslation: "Sweet is the thought, most sweet; if his thought too, more sweet — Or is this just deceit upon another's beat? — Pope"
  },
  {
    num: 1210, chapter: 121,
    tamil: "விளியுமென் இன்னுயிர் வேறல்லம் என்பார்\nஅளியின்மை ஆற்ற நினைந்து.",
    transliteration: "Viḷiyumeṉ iṉṉuyir vēṟallam eṉpār\naḷiyiṉmai āṟṟa niṉaintu.",
    english: "My sweet life will perish, thinking deeply on the unkindness of him who once said, 'we are not two.'",
    tamilUrai: "\"நாம் இருவராய் வேறு இல்லை\" என்று அன்று சொன்னவர், இன்று தம் கருணையின்மையை எண்ணிப் பார்க்கையில், என் இனிய உயிரே போய்விடும் போலிருக்கிறது.",
    altTranslation: "My life shall perish, thinking deep on his cold change Who once said, 'we are not two' — strange, ah, so strange! — Pope"
  },

  // CHAPTER 122 — The Lamentations at Eventide
  {
    num: 1211, chapter: 122,
    tamil: "காதலர் தூதொடு வந்த கனவினுக்கு\nயாதுசெய் வேன்கொல் விருந்து.",
    transliteration: "Kātalar tūtoṭu vanta kaṉaviṉukku\nyātucey vēṉkol viruntu.",
    english: "What hospitality shall I offer the dream that came bringing tidings from my lover?",
    tamilUrai: "என் காதலனின் தூதோடு என்னை நாடி வந்த இனிய கனவுக்கு, நான் என்ன விருந்து வைத்து உபசரிப்பேன்?",
    altTranslation: "What feast shall I prepare to greet the dream That came with tidings from my lover's beam? — Pope"
  },
  {
    num: 1212, chapter: 122,
    tamil: "கயலுண்கண் யானிரப்பத் துஞ்சிற் கலந்தார்க்கு\nஉயலுண்மை சாற்றுவேன் மன்.",
    transliteration: "Kayaluṇkaṇ yāṉirappat tuñciṟ kalantārkku\nUyaluṇmai cāṟṟuvēṉ maṉ.",
    english: "If only my fish-shaped eyes would close at my entreaty, I would tell my lover that I yet live.",
    tamilUrai: "(தலைவி கூறுகிறாள்:) கயல்மீன் போன்ற மை தீட்டிய என் கண்கள், நான் வேண்டுவதன் பேரில் தூங்குமாயின், என்னை விரும்பிய காதலருக்கு, நான் உய்ந்திருக்கிற செய்தியை, கனவு வழியாய் சென்று அவரிடம் சொல்வேன்.",
    altTranslation: "Could but mine eyes, fish-shaped and dark, but close at my appeal, To him I'd send by dream the fact that I live still. — Pope"
  },
  {
    num: 1213, chapter: 122,
    tamil: "நனவினால் நல்காரை நோவர் கனவினால்\nகாதலர்க் காணா தவர்.",
    transliteration: "Naṉaviṉāl nalkārai nōvar kaṉaviṉāl\nKātalark kāṇā tavar.",
    english: "Those who do not see their lover even in dreams might well blame him for unkindness in waking life.",
    tamilUrai: "கனவில் கூட காதலரைக் காண முடியாதவர்கள், நனவில் (விழித்திருக்கும்போது) அவர் தம்மிடம் இரக்கம் காட்டவில்லையே என்று வெருளலாம்; ஆனால், கனவில் காண்பவர்க்கு அப்படி ஒரு துன்பமும் இல்லை.",
    altTranslation: "Those who in dreams ne'er see their love, may well bemoan His coldness in the waking hours, all alone. — Pope"
  },
  {
    num: 1214, chapter: 122,
    tamil: "கனவினான் உண்டாகும் காமம் நனவினான்\nநல்காரை நாடித் தரற்கு.",
    transliteration: "Kaṉaviṉāṉ uṇṭākum kāmam naṉaviṉāṉ\nNalkārai nāṭit taraṟku.",
    english: "Love comes to me in dreams to bring me to him who is unkind in waking life.",
    tamilUrai: "நனவில் (விழிப்பில்) என்னை அன்போடு அரவணைக்க வராத காதலரை, நான் தேடி அடைய வேண்டும் என்பதற்காகவே, என் காதல் கனவின் வடிவில் வந்து என்னை அழைக்கிறது.",
    altTranslation: "In dreams alone love comes — to find for me my dear, Who in the waking hours forsakes me here. — Pope"
  },
  {
    num: 1215, chapter: 122,
    tamil: "நனவினான் கண்டதூஉம் ஆங்கே கனவுந்தான்\nகண்ட பொழுதே இனிது.",
    transliteration: "Naṉaviṉāṉ kaṇṭatūum āṅkē kaṉavuntāṉ\nKaṇṭa poḻutē iṉitu.",
    english: "Sweet were what I saw in waking; sweet too is what I see in dreaming.",
    tamilUrai: "நனவின் காதலரைக் கண்ட காலத்தில் இருந்தது போலவே, இப்போது கனவில் காதலரைக் காண்கின்ற இந்த நேரமும் இனிமையாய் உள்ளது.",
    altTranslation: "Sweet was the waking sight; the dream's own moment too Is sweet — both gifts of love, alike to view. — Pope"
  },
  {
    num: 1216, chapter: 122,
    tamil: "நனவென ஒன்றில்லை ஆயின் கனவினால்\nகாதலர் நீங்கலர் மன்.",
    transliteration: "Naṉaveṉa oṉṟillai āyiṉ kaṉaviṉāl\nKātalar nīṅkalar maṉ.",
    english: "If there were no such state as waking, my lover, met in dreams, would never go away.",
    tamilUrai: "நனவு என்று ஒன்று இல்லாதிருக்கும் என்றால், கனவில் வரும் என் காதலர் என்னைப் பிரிந்து பிரியாமல் இருந்திருப்பார்.",
    altTranslation: "Were there no waking world to part us — in the dream My lover would not leave the field of love's true scheme. — Pope"
  },
  {
    num: 1217, chapter: 122,
    tamil: "நனவினான் நல்காக் கொடியார் கனவினான்\nஎன்எம்மைப் பீழிப் பது.",
    transliteration: "Naṉaviṉāṉ nalkāk koṭiyār kaṉaviṉāṉ\nEṉemmaip pīḻip patu.",
    english: "Why does the cruel one who is unkind in waking life torment me in my dreams as well?",
    tamilUrai: "விழிப்பு நிலையில் வந்து என்மீது அன்பு செய்யாத கொடியவர், கனவில் வந்து என்னை இவ்வாறு வருத்துவது ஏன்?",
    altTranslation: "Why doth the cruel one, who in the waking hour Is kindless, in dream torment me with his power? — Pope"
  },
  {
    num: 1218, chapter: 122,
    tamil: "துஞ்சுங்கால் தோள்மேலர் ஆகி விழிக்குங்கால்\nநெஞ்சத்தர் ஆவர் விரைந்து.",
    transliteration: "Tuñcuṅkāl tōḷmēlar āki viḻikkuṅkāl\nNeñcattar āvar viraintu.",
    english: "When I sleep, he is on my shoulders; when I awake, he flies into my heart.",
    tamilUrai: "தூங்கும் காலத்தில் கனவில் வந்து என் தோளில் தங்குகிற என் காதலர், விழிக்கும்போது விரைந்து சென்று என் நெஞ்சில் தஞ்சம் கொள்கிறார்.",
    altTranslation: "Asleep, he rests upon my shoulder near; Awake, he flies into my heart, my dear. — Pope"
  },
  {
    num: 1219, chapter: 122,
    tamil: "நனவினான் நல்காரை நோவர் கனவினான்\nகாதலர்க் காணா தவர்.",
    transliteration: "Naṉaviṉāṉ nalkārai nōvar kaṉaviṉāṉ\nKātalark kāṇā tavar.",
    english: "Those who in dreams cannot see their lovers blame them for being unkind in waking life.",
    tamilUrai: "கனவிலும் கூட தம் காதலரைக் காண முடியாதவர்கள், நனவில் காதலர் அன்பு செய்யாதது குறித்துக் குற்றம் சாட்டுகின்றனர்.",
    altTranslation: "Those who in dream see not their love, in waking hours Reproach his absence — yet they have no powers. — Pope"
  },
  {
    num: 1220, chapter: 122,
    tamil: "நனவினான் நம்நீத்தார் என்பர் கனவினான்\nகாணார்கொல் இவ்வூ ரவர்.",
    transliteration: "Naṉaviṉāṉ namnīttār eṉpar kaṉaviṉāṉ\nKāṇārkol ivvū ravar.",
    english: "The townsfolk say he has forsaken me in waking life; do they not see him in my dreams?",
    tamilUrai: "\"எம் காதலன் நம்மை விட்டு பிரிந்துவிட்டார்\" என்று இந்த ஊர் மக்கள் கூறுவர்; கனவில் அவர் என்னோடு இருப்பதை இவர்கள் காணமாட்டார்களோ?",
    altTranslation: "'He has forsaken her,' so do the townsfolk say; Do they not see him in my dreams each day? — Pope"
  },

  // CHAPTER 123 — Lamentations at Eventide / Wasting Away
  {
    num: 1221, chapter: 123,
    tamil: "மாலையோ அல்லை மணந்தார் உயிர்உண்ணும்\nவேலைநீ வாழி பொழுது.",
    transliteration: "Mālaiyō allai maṇantār uyiruṇṇum\nVēlainī vāḻi poḻutu.",
    english: "Long live thou, evening — yet thou art no evening; thou art the very spear that drinks the lives of those who have been wedded.",
    tamilUrai: "மாலைக்காலமே! நீ வாழ்க! நீ உண்மையில் மாலையே அல்லை! தம் காதலரோடு கூடி இருந்த பெண்களின் உயிரை உண்ணும் வேலாகவே நீ வந்துள்ளாய்.",
    altTranslation: "Hail evening! 'Tis not evening, sure — but a sharp dart That drinks the lives of those whose lovers' from hearts depart. — Pope"
  },
  {
    num: 1222, chapter: 123,
    tamil: "புன்கண்ணை வாழி மருள்மாலை எம்கேள்போல்\nவன்கண்ண தோநின் துணை.",
    transliteration: "Puṉkaṇṇai vāḻi maruḷmālai emkēḷpōl\nVaṉkaṇṇa tōniṉ tuṇai.",
    english: "Long live thou, deceiving evening, weak-eyed thou art! Is thy companion as cruel as my lover?",
    tamilUrai: "மயக்கம் தரும் மாலையே! நீ வாழ்க! நீ துன்பம் நிறைந்த கண்களை உடையதாய் இருக்கிறாய். எம் காதலரைப் போலவே, உனக்கும் கருணை இல்லாத ஒரு துணைவன் (இரவு) அமைந்துவிட்டானோ?",
    altTranslation: "Live on, mock evening! Sad-eyed art thou; cruel-hearted Like my own lover, is thy partner that hath parted? — Pope"
  },
  {
    num: 1223, chapter: 123,
    tamil: "பனிஅரும்பிப் பைதல்கொள் மாலை துனிஅரும்பித்\nதுன்பம் வளர வரும்.",
    transliteration: "Paṉiarumpip paitalkoḷ mālai tuṉiarumpit\nTuṉpam vaḷara varum.",
    english: "Evening comes, herald of dew and sallowness, bringing fresh sorrow and grief that grows.",
    tamilUrai: "பனி உருவாகி, என் உடலின் மீது பசலை படரக் காரணமான மாலைப் பொழுது வந்துவிட்டது; என் சினமும் மீண்டும் தோன்றி, என் துன்பமும் இன்னும் வளர்ந்து பெருகுகிறது.",
    altTranslation: "With dew first sprouting, pallor's coming hour — The evening comes, fresh grief begetting power. — Pope"
  },
  {
    num: 1224, chapter: 123,
    tamil: "காதலர் இல்வழி மாலை கொலைக்களத்து\nஏதிலர் போல வரும்.",
    transliteration: "Kātalar ilvaḻi mālai kolaikkaḷattu\nĒtilar pōla varum.",
    english: "When my lover is far away, the evening comes upon me as enemies come to a place of slaughter.",
    tamilUrai: "என் காதலன் பிரிந்து சென்றுள்ள இந்த நேரத்தில், மாலைப் பொழுது, கொலைக்களத்தில் தனிமையில் இருக்கும் ஒருவரைத் தாக்க பகைவர் வருவது போல, என்னை நெருங்கி வந்துகொண்டு இருக்கிறது.",
    altTranslation: "When my love is far, the evening comes to me As foeman to the field where blood doth flow. — Pope"
  },
  {
    num: 1225, chapter: 123,
    tamil: "காலை அரும்பிப் பகல்எல்லாம் போதாகி\nமாலை மலரும்இந் நோய்.",
    transliteration: "Kālai arumpip pakalellām pōtāki\nMālai malarumin nōy.",
    english: "Like a flower, this love-grief buds at morn, swells through the day, and at evening blooms in full.",
    tamilUrai: "காலையில் மொட்டாய் தோன்றி, பகலெல்லாம் முதிர்ந்த அரும்பாய் வளர்ந்து, மாலையில் முழுவதுமாய் மலருகின்றது இந்தக் காதல் நோய்.",
    altTranslation: "At morn 'tis bud, by noon a swelling flower, At eve full-blown — such is this love's strange power. — Pope"
  },
  {
    num: 1226, chapter: 123,
    tamil: "அழல்போலும் மாலைக்குத் தூதாகி ஆயன்\nகுழல்போலும் கொல்லும் படை.",
    transliteration: "Aḻalpōlum mālaikkut tūtāki āyaṉ\nKuḻalpōlum kollum paṭai.",
    english: "The shepherd's flute, like a herald to the burning evening, comes as a deadly weapon to me.",
    tamilUrai: "தீ போல என்னை சுடுகின்ற மாலைக்கு, தூதனாய் வந்து, ஆயனின் (இடையனின்) புல்லாங்குழலின் இசை, என்னைக் கொன்றுவிடும் ஆயுதம் போல என்னைத் தாக்குகிறது.",
    altTranslation: "The shepherd's flute, herald of fire-like evening hour, Comes as a deadly weapon, with destructive power. — Pope"
  },
  {
    num: 1227, chapter: 123,
    tamil: "பதிமருண்டு பைதல் உழக்கும் மதிமருண்டு\nமாலை படர்தரு கால்.",
    transliteration: "Patimaruṇṭu paital uḻakkum matimaruṇṭu\nMālai paṭartaru kāl.",
    english: "When the evening comes upon a heart-bewildered, the very town is shaken with grief.",
    tamilUrai: "மயங்கிய மதியுடன் இருக்கும் என்னை மாலை சூழ்ந்த அந்த நேரத்தில், என் சுற்றம் (குடி) கூட மயக்கம் கொண்டு துன்பத்தில் ஆழ்வதாய் தோன்றுகிறது.",
    altTranslation: "When evening comes upon the heart's bewildered hour, The very kindred sink in grief's o'erpowering shower. — Pope"
  },
  {
    num: 1228, chapter: 123,
    tamil: "அழல்தாங்கும் கூற்றாம் என்தோழி அவர்தந்\nஇயல்தாமும் இல்வழி மாலை.",
    transliteration: "Aḻaltāṅkum kūṟṟām eṉtōḻi avartan\niYaltāmum ilvaḻi mālai.",
    english: "My friend! when my lover is not by me, this evening is like the death-god come bearing a flame.",
    tamilUrai: "என் தோழியே! என் காதலரின் கனிவான தன்மை இல்லாத இந்த நேரத்தில், மாலைப் பொழுதானது தீப்பந்தத்தை ஏந்திவரும் எம தூதனைப் போல எனக்கு வந்து சேருகிறது.",
    altTranslation: "Friend! When his gentle nature too is far from me, This evening seems Death's torch-bearer to be. — Pope"
  },
  {
    num: 1229, chapter: 123,
    tamil: "பேரிருளாய் ஏகப் பெயர்மாலை யாரிடைத்தும்\nஓர்வதிலா துறைக்கும் வேட்கை.",
    transliteration: "Pēriruḷāy ēkap peyarmālai yāriṭaittum\nŌrvatilā tuṟaikkum vēṭkai.",
    english: "When evening turns to deepening night, there is no relief; even strangers feel longing flow.",
    tamilUrai: "மாலை நீண்டு பெருகி, அதன்பின் வரும் இரவாகி, இரவு மேலும் நீண்டு பேரிருளாய் ஆவதைப் போல, என் காதல் வேட்கை, ஒரு வாய்ப்பும் இல்லாமல் என்னை விடாமல் தாக்கிக் கொண்டே இருக்கிறது.",
    altTranslation: "As eve to night and night to thickest dark turn'd, Without relief my longing burns, unspurned. — Pope"
  },
  {
    num: 1230, chapter: 123,
    tamil: "பொருள்மாலை யாளரை உள்ளி மருள்மாலை\nமாயும்என் மாயா உயிர்.",
    transliteration: "Poruḷmālai yāḷarai uḷḷi maruḷmālai\nMāyumeṉ māyā uyir.",
    english: "Thinking of him gone in pursuit of wealth, my unfading life now fades away in this twilight of bewilderment.",
    tamilUrai: "செல்வம் தேட பிரிந்து சென்ற என் காதலரை நினைத்து, மயக்கம் தரும் இந்த மாலைப் பொழுதில், எளிதில் அழியாதிருந்த என் உயிர் இப்போது அழிய நெருங்கிவிட்டது.",
    altTranslation: "Thinking of him who left for wealth's pursuit afar, My deathless life now fades — in eve's bewildering star. — Pope"
  },

  // CHAPTER 124 — Wasting Away
  {
    num: 1231, chapter: 124,
    tamil: "சிறுமை நமக்கொழியச் சேட்சென்றார் உள்ளி\nநறுமலர் நாணின கண்.",
    transliteration: "Ciṟumai namakkoḻiyac cēṭceṉṟār uḷḷi\nNaṟumalar nāṇiṉa kaṇ.",
    english: "Thinking of him who left us in this miserable plight to go far away, my eyes are ashamed before fragrant flowers.",
    tamilUrai: "எங்களை இந்த சிறிய நிலையில் (வாட்டத்தில்) விட்டுவிட்டு, தொலை இடம் நோக்கி பிரிந்து சென்றவரை நினைக்கையில், மணம் வீசும் மலர்களின் முன், மங்கி வாடிய என் கண்கள் நாணம் கொள்கின்றன.",
    altTranslation: "Thinking of him gone afar, leaving me thus low, My eyes blush in the fragrant blossom's glow. — Pope"
  },
  {
    num: 1232, chapter: 124,
    tamil: "நயந்தவர் நல்காமை சொல்லுவ போலும்\nபசந்து பனிவாரும் கண்.",
    transliteration: "Nayantavar nalkāmai colluva pōlum\nPacantu paṉivārum kaṇ.",
    english: "These eyes, paled and shedding tears, seem to declare my lover's want of love.",
    tamilUrai: "தான் விரும்பிய காதலரின் அன்பின்மையை வெளிப்படுத்துபவை போல, பசலையோடு கண்ணீர் சொரிகின்றன என் கண்கள்.",
    altTranslation: "Pale-streaming tears my eyes do shed apace, As if to tell my lover's coldness to my face. — Pope"
  },
  {
    num: 1233, chapter: 124,
    tamil: "தணந்தமை சால அறிவிப்ப போலும்\nமணந்தநாள் வீங்கிய தோள்.",
    transliteration: "Taṇantamai cāla aṟivippa pōlum\nMaṇantanāḷ vīṅkiya tōḷ.",
    english: "These shoulders that swelled in joy on the wedding day now seem to proclaim how he has parted from me.",
    tamilUrai: "மணந்த நாட்களில் இன்பம் மிகுந்து வீங்கி பருத்திருந்த இந்த என் தோள்கள், இப்போது மெலிந்து, பிரிந்துள்ள நிலையை எல்லாரிடமும் உரக்கச் சொல்லி அறிவிப்பவை போல உள்ளன.",
    altTranslation: "These shoulders that with joy of nuptial swelled, Now thin proclaim he hath my love repelled. — Pope"
  },
  {
    num: 1234, chapter: 124,
    tamil: "பணைநீங்கிப் பைந்தொடி சோரும் துணைநீங்கித்\nதொல்கவின் வாடிய தோள்.",
    transliteration: "Paṇainīṅkip paintoṭi cōrum tuṇainīṅkit\nTolkaviṉ vāṭiya tōḷ.",
    english: "These shoulders, wasted of their old beauty since my lord went, lose now their bangles too.",
    tamilUrai: "துணையாம் காதலர் பிரிய, பழைய அழகை இழந்து வாட்டமுற்ற என் தோள்கள், மேலும் மெலிந்து, அதனுடைய பருமையையும் இழக்க, கையிலணிந்த பசிய வளையல்களை சோர்ந்து கீழே போட்டுவிட்டன.",
    altTranslation: "Wasted of beauty old, my shoulder slim Loses its bangles green — they slip from limb. — Pope"
  },
  {
    num: 1235, chapter: 124,
    tamil: "கொடியார் கொடுமை உரைக்கும் தொடியொடு\nதொல்கவின் வாடிய தோள்.",
    transliteration: "Koṭiyār koṭumai uraikkum toṭiyoṭu\nTolkaviṉ vāṭiya tōḷ.",
    english: "My shoulders, robbed of their old beauty along with the bangles, declare the cruelty of him who has gone.",
    tamilUrai: "வளையல்களோடு, பழைய அழகையும் இழந்து வாட்டமுற்ற என் தோள்கள், கொடியவராய் என்னைப் பிரிந்த எம் காதலரின் கொடுமையை அனைவருக்கும் வெளிப்படுத்துகின்றன.",
    altTranslation: "My shoulders, with their bracelets and beauty's grace gone, Proclaim the cruel lover's heartless action done. — Pope"
  },
  {
    num: 1236, chapter: 124,
    tamil: "தொடியொடு தோள்நெகிழ நோவல் அவரைக்\nகொடியர் எனக்கூறல் நொந்து.",
    transliteration: "Toṭiyoṭu tōḷnekiḻa nōval avaraik\nKoṭiyar eṉakkūṟal nontu.",
    english: "I grieve to hear them say he is cruel — when truly the bangles slip from my arms with my pining shoulders.",
    tamilUrai: "வளையல்களோடு என் தோள் நெகிழ்வது என்னை வருந்தச் செய்கிறது; ஆனால், அவ்வாறாக நெகிழ்ந்தது போல, என் காதலரை \"கொடியவர்\" என்று குற்றமாய் ஊர் பேசுவது இன்னும் என்னை வருத்துகிறது.",
    altTranslation: "Grief is mine that bangles slip — yet greater grief, To hear them call my love 'cruel' as their belief. — Pope"
  },
  {
    num: 1237, chapter: 124,
    tamil: "பாடு பெறுதியோ நெஞ்சே கொடியார்க்கென்\nவாடுதோட் பூசல் உரைத்து.",
    transliteration: "Pāṭu peṟutiyō neñcē koṭiyārkkeṉ\nVāṭutōṭ pūcal uraittu.",
    english: "O heart, wilt thou win renown by telling the cruel one of the wasting of my arms?",
    tamilUrai: "என் நெஞ்சே! வாட்டம் அடைந்துள்ள என் தோள்களின் மெலிவை, கொடியவராய் இருக்கும் காதலரிடம் சென்று சொல்லி, அவர் எம்மீது அன்பு வைக்கப்படச் செய்வாயோ?",
    altTranslation: "O heart, wilt thou earn praise by telling him, my dear, How my poor arms grow thin from grief and fear? — Pope"
  },
  {
    num: 1238, chapter: 124,
    tamil: "முயங்கிய கைகளை ஊக்கப் பசந்தது\nபைந்தொடிப் பேதை நுதல்.",
    transliteration: "Muyaṅkiya kaikaḷai ūkkap pacantatu\nPaintoṭip pētai nutal.",
    english: "When I but slightly slackened the arms with which I clasped her, the forehead of my fair young lady grew pale.",
    tamilUrai: "(காதலன் கூறுகிறான்:) நான் தழுவி இருந்த என் கைகளை சிறிது தளர்த்தினேன்; அதற்குள், பசிய வளையலை அணிந்திருந்த என் காதலியின் அழகிய நெற்றி பசலை அடைந்துவிட்டது.",
    altTranslation: "I just relaxed my close embrace — and lo, Her brow grew pale, the maid in heavy woe. — Pope"
  },
  {
    num: 1239, chapter: 124,
    tamil: "முயக்கிடைத் தண்வளி போழப் பசப்புற்ற\nபேதை பெருமழைக் கண்.",
    transliteration: "Muyakkiṭait taṇvaḷi pōḻap pacappuṟṟa\nPētai perumaḻaik kaṇ.",
    english: "Even the cool breeze coming between us in our embrace turned my beloved's broad eyes pale.",
    tamilUrai: "(காதலன் கூறுகிறான்:) நாங்கள் கூடித் தழுவியிருக்க, எங்கள் தழுவலின் இடையே சிறிதே குளிர் காற்று நுழைய, மாரிக்கால மழைபோல் கண்ணீர் சொரியக்கூடிய என் காதலியின் கண்கள் பசலை அடைந்தன.",
    altTranslation: "When cool wind crept between our close embrace's hold, Her broad bright eyes grew pale — too soon they cold. — Pope"
  },
  {
    num: 1240, chapter: 124,
    tamil: "கண்ணின் பசப்போ பருவரல் எய்தின்றே\nஒண்ணுதல் செய்தது கண்டு.",
    transliteration: "Kaṇṇiṉ pacappō paruvaral eytiṉṟē\nOṇṇutal ceytatu kaṇṭu.",
    english: "Even the pallor of her eyes seems sad to see what her bright forehead has done.",
    tamilUrai: "(காதலி கூறுகிறாள்:) என் ஒளி பொருந்திய நெற்றி பசந்து வாடியதைக் கண்டு, என் கண்களின் பசலை, தானும் வருத்தம் அடைந்துள்ளது போலத் தோன்றுகிறது.",
    altTranslation: "Even my eye's own pallor grieves to see The pallor o'er my brow's bright canopy. — Pope"
  },

  // CHAPTER 125 — Soliloquy
  {
    num: 1241, chapter: 125,
    tamil: "நினைத்தொன்று சொல்லாயோ நெஞ்சே எனைத்தொன்றும்\nஎவ்வநோய் தீர்க்கும் மருந்து.",
    transliteration: "Niṉaittoṉṟu collāyō neñcē eṉaittoṉṟum\nEvvanōy tīrkkum maruntu.",
    english: "O heart, will you not think and tell me of any remedy that may rid me of this great love-grief?",
    tamilUrai: "என் நெஞ்சே! நான் அடைந்துள்ள இந்தக் காதல் நோயை எவ்வாறேனும் தீர்க்கக்கூடிய ஒரு சிறிய மருந்தையாவது நீ சிந்தித்துச் சொல்லக்கூடாதா?",
    altTranslation: "O heart, wilt thou not think and tell me of one cure For this great love-pang's grievous, deep-pierced wound? — Pope"
  },
  {
    num: 1242, chapter: 125,
    tamil: "காதல் அவரிலர் ஆகநீ நோவது\nபேதைமை வாழியென் நெஞ்சு.",
    transliteration: "Kātal avarilar ākanī nōvatu\nPētaimai vāḻiyeṉ neñcu.",
    english: "Live on, my heart! Since he loves not me, why dost thou grieve? It is folly!",
    tamilUrai: "என் நெஞ்சே! வாழ்வாயாக! அவருக்கு நம்மீது காதல் இல்லை என்றிருக்க, நீ அவரை நினைத்து வருந்துவது மடமை.",
    altTranslation: "Live on, my heart! He loves us not — why grieve? 'Tis folly all that thy poor sense doth weave. — Pope"
  },
  {
    num: 1243, chapter: 125,
    tamil: "இருந்துள்ளி என்பரிதல் நெஞ்சே பரிந்துள்ளல்\nபைதல்நோய் செய்தார்கண் இல்.",
    transliteration: "Iruntuḷḷi eṉparital neñcē parintuḷḷal\nPaitalnōy ceytārkaṇ il.",
    english: "Why dost thou grieve, my heart, dwelling on him? In him who gave the pain, no pity is found.",
    tamilUrai: "என் நெஞ்சே! தனிமையில் இருந்து, அவரைப் பற்றி நினைத்தும், நினைத்தும் எதற்காக அவ்வளவு வருந்துகிறாய்? இந்த துன்பகரமான காதல் நோயை செய்தவரிடம், நீ எண்ணுவது போல், நம்மீது இரக்கம் வரப்போவதில்லையே!",
    altTranslation: "Why pine, my heart, in lonely ceaseless thought? In him who gave this pain, no pity's wrought. — Pope"
  },
  {
    num: 1244, chapter: 125,
    tamil: "கண்ணும் கொளச்சேறி நெஞ்சே இவையென்னைத்\nதின்னும் அவர்க்காணல் உற்று.",
    transliteration: "Kaṇṇum koḷaccēṟi neñcē ivaiyeṉṉait\nTiṉṉum avarkkāṇal uṟṟu.",
    english: "O heart, take my eyes also with thee on the journey to him; for they consume me, longing to see him.",
    tamilUrai: "என் நெஞ்சே! நீ அவரிடம் செல்லும்போது, என் கண்களையும் கொண்டு செல்வாயாக; ஏனெனில், அவரைக் காண வேண்டும் என்ற ஆவலில், அவை என்னையே தின்றுவிடுகின்றன.",
    altTranslation: "O heart, when going to him, my eyes too take with thee; They eat me up, so eager are they to him to see. — Pope"
  },
  {
    num: 1245, chapter: 125,
    tamil: "செற்றார் எனக்கை விடல்உண்டோ நெஞ்சே யாம்\nஉற்றால் உறாஅ தவர்.",
    transliteration: "Ceṟṟār eṉakkai viṭaluṇṭō neñcē yām\nUṟṟāl uṟāa tavar.",
    english: "Can we forsake him saying he is our foe? O heart! though we love, he loves us not.",
    tamilUrai: "என் நெஞ்சே! நாம் மிகவும் விரும்புபவர், நம்மை விரும்பாதிருந்தாலும், அதை வைத்துக்கொண்டு, \"அவர் நம் பகைவர்\" என்று கூறி, நாம் அவரைக் கைவிட்டுவிட இயலுமா?",
    altTranslation: "Can we forsake the loved as foe? O heart! Even if he loves us not — to part is hard. — Pope"
  },
  {
    num: 1246, chapter: 125,
    tamil: "கலந்துணர்த்தும் காதலர்க் கண்டாற் புலந்துணராய்\nபொய்க்காய்வு காய்திஎன் நெஞ்சு.",
    transliteration: "Kalantuṇarttum kātalark kaṇṭāṟ pulantuṇarāy\nPoykkāyvu kāytieṉ neñcu.",
    english: "O heart, when you see the loved one who comes to soothe, you give up your sulking and pretend wrath in vain.",
    tamilUrai: "(தலைவி நெஞ்சை நோக்கி கூறுகிறாள்:) என்னோடு கூடி, என் ஊடலைத் தீர்க்கின்ற காதலரைக் கண்டவுடன், என் நெஞ்சே! நீ அவரிடம் ஊடலை மறந்துவிடுகின்றாய்; ஆனால் இப்போது அவர் இல்லாதபோது மட்டும், போலியாகச் சினம் கொள்கின்றாய்.",
    altTranslation: "O heart, when he comes near and soothes, all wrath thou dost forsake; Yet pretending anger now in his absence — what false stake! — Pope"
  },
  {
    num: 1247, chapter: 125,
    tamil: "காமம் விடுஒன்றோ நாண்விடு நன்னெஞ்சே\nயானோ பொறேன்இவ் விரண்டு.",
    transliteration: "Kāmam viṭuoṉṟō nāṇviṭu naṉneñcē\nyāṉō poṟēṉiv viraṇṭu.",
    english: "Give up either love or shame, my good heart; I cannot bear them both.",
    tamilUrai: "என் நல்ல நெஞ்சே! நீ ஒன்று இந்தக் காதலை விட்டுவிடு; அல்லது நாணத்தைவிட்டுவிடு; இவை இரண்டையும் ஒருசேர சுமக்கும் ஆற்றல் என்னிடம் இல்லை.",
    altTranslation: "My good heart! Give up either love or shame — One of the two — both, I cannot maintain. — Pope"
  },
  {
    num: 1248, chapter: 125,
    tamil: "பரிந்தவர் நல்காரென்று ஏங்கிப் பிரிந்தவர்\nபின்செல்வாய் பேதைஎன் நெஞ்சு.",
    transliteration: "Parintavar nalkāreṉṟu ēṅkip pirintavar\nPiṉcelvāy pētaieṉ neñcu.",
    english: "O foolish heart of mine! you grieve that he who left us shows no kindness, and yet still go after him.",
    tamilUrai: "என் அறிவற்ற நெஞ்சே! என்னை விட்டுப் பிரிந்து சென்ற அவர், மேலும் அன்பு செய்யவில்லை என்று வருந்திய பின்னும், மீண்டும் நீ அவரையே நாடிச் செல்கிறாயே — எத்தனை மடமை இது!",
    altTranslation: "O foolish heart, that mournest 'he hath grace not, gone away,' Yet still pursuest the parted one, day after day. — Pope"
  },
  {
    num: 1249, chapter: 125,
    tamil: "உள்ளத்தார் காத லவராக உள்ளிநீ\nயாருழைச் சேறியென் நெஞ்சு.",
    transliteration: "Uḷḷattār kāta lavarāka uḷḷinī\nyāruḻaic cēṟiyeṉ neñcu.",
    english: "When my lover is in my heart itself, why dost thou go thinking of him in some other place, my heart?",
    tamilUrai: "என் நெஞ்சே! என்னை விட்டு பிரிந்து சென்றதாகக் கூறப்படும் காதலர் உனக்குள்ளேயே நிற்கையில், அவரைப்பற்றி நீ எண்ணியவாறு, அவரை எங்கு சென்று தேடப் போகின்றாய்?",
    altTranslation: "He dwells within my heart's own home — yet, foolish heart, Whither dost thou seek him, in what alien part? — Pope"
  },
  {
    num: 1250, chapter: 125,
    tamil: "துன்னாத் துறந்தாரை நெஞ்சத்து உடையேமா\nஇன்னும் இழத்தும் கவின்.",
    transliteration: "Tuṉṉāt tuṟantārai neñcattu uṭaiyēmā\niṉṉum iḻattum kaviṉ.",
    english: "If we keep in our heart the one who departed without joining us, we shall lose what beauty still remains.",
    tamilUrai: "நம்மிடம் சேராமல் பிரிந்து சென்ற காதலரை, நாம் இன்னும் நம் நெஞ்சில் பற்றி வைத்திருந்தால், நமக்கு மீதமாய் இருக்கின்ற அழகையும் நாம் இழக்க நேரிடும்.",
    altTranslation: "If still we cherish him who left without remorse, We lose what little beauty's still our recourse. — Pope"
  },

  // CHAPTER 126 — Reserve Overcome
  {
    num: 1251, chapter: 126,
    tamil: "காமக் கணிச்சி உடைக்கும் நிறையென்னும்\nநாணுத்தாழ் வீழ்த்த கதவு.",
    transliteration: "Kāmak kaṇicci uṭaikkum niṟaiyeṉṉum\nNāṇuttāḻ vīḻtta kataivu.",
    english: "The axe of love breaks down the door called constancy, locked with the bolt of modesty.",
    tamilUrai: "காதல் என்னும் கோடரியானது, நாணத்தைத் தாழ்ப்பாளாகக் கொண்டு பூட்டப்பட்டிருக்கும், நிறையோடு கூடிய நெஞ்சக் கதவை, உடைத்துத் திறந்து விடுகின்றது.",
    altTranslation: "Love's axe doth break the door of woman's constant pride, Whose bolt is shame, made fast on either side. — Pope"
  },
  {
    num: 1252, chapter: 126,
    tamil: "காமம் எனஒன்றோ கண்ணின்றென் நெஞ்சத்தை\nயாமத்தும் ஆளுந் தொழில்.",
    transliteration: "Kāmam eṉaoṉṟō kaṇṇiṉṟeṉ neñcattai\nYāmattum āḷun toḻil.",
    english: "Love is something with no mercy; even at midnight, it has work to do, ruling my heart.",
    tamilUrai: "காதல் என்னும் அந்த ஒரு செயலுக்கு கருணை இல்லை; நள்ளிரவில் கூட என் நெஞ்சை விட்டு விடாமல், அது தன்னுடைய ஆட்சியை நடத்துகிறது.",
    altTranslation: "Love is one thing without a heart at all; E'en at midnight on my soul it lays its call. — Pope"
  },
  {
    num: 1253, chapter: 126,
    tamil: "மறைப்பேன்மன் காமத்தை யானோ குறிப்பின்றித்\nதும்மல்போல் தோன்றி விடும்.",
    transliteration: "Maṟaippēṉmaṉ kāmattai yāṉō kuṟippiṉṟit\nTummalpōl tōṉṟi viṭum.",
    english: "I would hide my love, but it bursts forth like a sneeze, without warning.",
    tamilUrai: "எனக்குள்ள காதலை நான் மறைக்கவே வேண்டும் என்று நினைப்பேன்; ஆனாலும், ஒரு குறிப்பும் இல்லாமல், திடீரென எழும் தும்மலைப் போல, அதுவே வெளிப்பட்டு விடுகிறது.",
    altTranslation: "I'd hide my love — yet, like a sneeze, sans warning's call, It breaks forth, free of choice, before all. — Pope"
  },
  {
    num: 1254, chapter: 126,
    tamil: "நிறையுடையேன் என்பேன்மன் யானோஎன் காமம்\nமறையிறந்து மன்றுபடும்.",
    transliteration: "Niṟaiyuṭaiyēṉ eṉpēṉmaṉ yāṉōeṉ kāmam\nMaṟaiyiṟantu maṉṟupaṭum.",
    english: "I say I am full of self-control; but my love overrides concealment and parades itself in the open.",
    tamilUrai: "\"நாணத்தில் நிறையுடையவள்\" என்று நான் சொல்லிக்கொள்வேன்; ஆனால் என் காதலோ, மறைத்தலின் எல்லையை மீறி, பொது இடத்தில் வெளிப்பட்டு நிற்கிறது.",
    altTranslation: "'I'm full of self-control,' I claim — but love's full tide O'erpasses concealment, in the public square doth ride. — Pope"
  },
  {
    num: 1255, chapter: 126,
    tamil: "செற்றார்பின் செல்லாப் பெருந்தகைமை காமநோய்\nஉற்றார் அறிவதொன்று அன்று.",
    transliteration: "Ceṟṟārpiṉ cellāp peruntakaimai kāmanōy\nUṟṟār aṟivatoṉṟu aṉṟu.",
    english: "The greatness of not running after the one who has scorned us is something the lovesick can never know.",
    tamilUrai: "தம்மை வெறுத்து விட்டுச் சென்றவரை நாடிச் செல்லாத பெருமை மிக்க நற்குணம், காதல் நோயை அடைந்தவர்களுக்கு உணரக் கூடிய ஒன்று அல்ல.",
    altTranslation: "The lofty pride that follows not the scorner's track Is something love-pang's victim never can grasp back. — Pope"
  },
  {
    num: 1256, chapter: 126,
    tamil: "செற்றவர் பின்சேறல் வேண்டி அளித்தரோ\nஎற்றென்னை உற்ற துயர்.",
    transliteration: "Ceṟṟavar piṉcēṟal vēṇṭi aḷittarō\nEṟṟeṉṉai uṟṟa tuyar.",
    english: "How piteous! that the love I have caught makes me long to follow him who scorns me!",
    tamilUrai: "என்னை அடைந்த இந்தக் காதல் துன்பம் எத்தகைய இயல்புடையது, என்னை விட்டு சினம் கொண்டு நீங்கியவரையே, மீண்டும் நாடிச் செல்ல வேண்டும் என நான் விரும்புமாறு செய்துவிட்டது!",
    altTranslation: "How pitiful, that this strange grief I bear Makes me to seek the scorner with vain care. — Pope"
  },
  {
    num: 1257, chapter: 126,
    tamil: "நாணென ஒன்றோ அறியலம் காமத்தான்\nபேணியார் பெட்ப செயின்.",
    transliteration: "Nāṇeṉa oṉṟō aṟiyalam kāmattāṉ\nPēṇiyār peṭpa ceyiṉ.",
    english: "We know nothing of what is called shame, when our lovers do what is dear to us.",
    tamilUrai: "நாங்கள் விரும்பிய காதலர், காதலின் காரணமாக, நாங்கள் விரும்புகின்ற செயல்களைச் செய்கிறபோது, \"நாணம்\" என்று ஒரு பொருள் இருக்கிறது என்பதையே நாங்கள் அறிய மாட்டோம்.",
    altTranslation: "We know not what 'tis called shame, when those we love Do what we long for, all our being above. — Pope"
  },
  {
    num: 1258, chapter: 126,
    tamil: "பன்மாயக் கள்வன் பணிமொழி அன்றோநம்\nபெண்மை உடைக்கும் படை.",
    transliteration: "Paṉmāyak kaḷvaṉ paṇimoḻi aṉṟōnam\nPeṇmai uṭaikkum paṭai.",
    english: "Are not the gentle words of that crafty thief the very weapon that breaks down our womanly reserve?",
    tamilUrai: "(காதலி கூறுகிறாள்:) பல திருட்டு வழிகள் அறிந்த அந்தக் கள்வனின் பணிவான இனிய சொற்கள், என் பெண்மை என்னும் காவலை உடைத்து வீழ்த்தும் ஆயுதங்களாய் ஆகுமன்றோ?",
    altTranslation: "The cunning thief — his soft and kindly word, Is not the weapon that o'erpowers all womanhood's ward? — Pope"
  },
  {
    num: 1259, chapter: 126,
    tamil: "புலப்பல் எனச்சென்றேன் புல்லினேன் நெஞ்சம்\nகலத்தல் உறுவது கண்டு.",
    transliteration: "Pulappal eṉacceṉṟēṉ pulliṉēṉ neñcam\nKalattal uṟuvatu kaṇṭu.",
    english: "I went saying 'I will sulk'; but seeing my heart hastening to him, I clasped him.",
    tamilUrai: "(காதலி கூறுகிறாள்:) \"ஊடல் கொள்வேன்\" என்று கூறி அவரிடம் சென்றேன்; ஆனால், என் நெஞ்சம் அவரிடம் கூடிக் கலந்துவிட விழையக் கண்டு, ஊடலை மறந்து அவரைத் தழுவிக்கொண்டேன்.",
    altTranslation: "'I'll sulk,' I went; yet, seeing my heart's haste To clasp him, I clasped him in close embrace. — Pope"
  },
  {
    num: 1260, chapter: 126,
    tamil: "நிணந்தீயில் இட்டன்ன நெஞ்சினார்க்கு உண்டோ\nபுணர்ந்தூடி நிற்பேம் எனல்.",
    transliteration: "Niṇantīyil iṭṭaṉṉa neñciṉārkku uṇṭō\npuṇarntūṭi niṟpēm eṉal.",
    english: "Can those whose hearts melt like fat in the fire say, 'we will quarrel even when united'?",
    tamilUrai: "தீயின் மீது இடப்பட்ட நெய் (உருகி கரைவது) போல் உருகுகின்ற நெஞ்சத்தை உடையவருக்கு, \"அவருடன் கூடினாலும், நாம் ஊடல் கொண்டே நிற்போம்\" என்று சொல்லும் ஆற்றல் இருக்குமா?",
    altTranslation: "Can hearts that melt like fat that's cast in fire Say, 'we shall quarrel still, in love's despite'? — Pope"
  },

  // CHAPTER 127 — Mutual Desire / Pining for Reunion
  {
    num: 1261, chapter: 127,
    tamil: "வாளற்றுப் புற்கென்ற கண்ணும் அவர்சென்ற\nநாளொற்றித் தேய்ந்த விரல்.",
    transliteration: "Vāḷaṟṟup puṟkeṉṟa kaṇṇum avarceṉṟa\nNāḷoṟṟit tēynta viral.",
    english: "My eyes have lost their lustre and grown dim; my fingers are worn out counting the days he has been gone.",
    tamilUrai: "என் காதலர் என்னை விட்டு பிரிந்து சென்றதிலிருந்து கடந்த நாள்களை எண்ணி எண்ணி, என் விரல்கள் தேய்ந்து போயின; என் கண்களின் ஒளியும் மங்கி, பார்வை மங்கலாகிவிட்டன.",
    altTranslation: "My eyes have lost their light, grown dim and dull; My fingers worn from counting days, in vain so full. — Pope"
  },
  {
    num: 1262, chapter: 127,
    tamil: "இலங்கிழாய் இன்று மறப்பின்என் தோள்மேல்\nகலங்கழியும் காரிகை நீத்து.",
    transliteration: "Ilaṅkiḻāy iṉṟu maṟappiṉeṉ tōḷmēl\nKalaṅkaḻiyum kārikai nīttu.",
    english: "O lady of glittering jewels! If today I forget him, the bangles on my arms will lose their lustre and slip away.",
    tamilUrai: "ஒளி வீசும் அணிகலன்களை அணிந்த என் தோழியே! என் காதலரை இந்தப் பகலில் நான் சிறிது மறந்திருந்தாலும், என் தோளில் உள்ள வளையல்கள், அழகை இழந்து கழன்று கீழே விழுந்துவிடும்.",
    altTranslation: "Bright-jewelled friend! If for one day I him forgot, My shoulder's bangles slip — their charm undone of plot. — Pope"
  },
  {
    num: 1263, chapter: 127,
    tamil: "உரன்நசைஇ உள்ளம் துணையாகச் சென்றார்\nவரல்நசைஇ இன்னும் உளேன்.",
    transliteration: "Uraṉnacaii uḷḷam tuṇaiyākac ceṉṟār\nVaralnacaii iṉṉum uḷēṉ.",
    english: "He went, with his own resolve as company, in pursuit of victory; and I yet live, longing for his return.",
    tamilUrai: "வெற்றியை விரும்பி, தமது சொந்த துணிவையே துணையாய்க் கொண்டு பிரிந்து சென்றவர், மீண்டும் வருவார் என்ற நம்பிக்கையால், நான் இன்னும் உயிர் வாழ்ந்து கொண்டிருக்கிறேன்.",
    altTranslation: "He went, his own firm purpose as his only friend; I live, in hope his coming back may yet attend. — Pope"
  },
  {
    num: 1264, chapter: 127,
    tamil: "கூடிய காமம் பிரிந்தார் வரவுள்ளிக்\nகோடுகொ டேறுமென் நெஞ்சு.",
    transliteration: "Kūṭiya kāmam pirintār varavuḷḷik\nKōṭuko ṭēṟumeṉ neñcu.",
    english: "Thinking of the return of him with whom I had united in love, my heart soars to the very heights.",
    tamilUrai: "முன்பு என்னோடு கூடியிருந்த காதலர், மீண்டும் இங்கு வருவதை எண்ணுகையில், என் நெஞ்சம் கிளர்ச்சியடைந்து உச்சமாய் ஏறுகின்றது.",
    altTranslation: "When I think of him who'll come — with whom I once was joined — My heart, in soaring transport, leaps to highest bound. — Pope"
  },
  {
    num: 1265, chapter: 127,
    tamil: "காண்கமன் கொண்கனைக் கண்ணாரக் கண்டபின்\nநீங்குமென் மென்தோள் பசப்பு.",
    transliteration: "Kāṇkamaṉ koṇkaṉaik kaṇṇārak kaṇṭapiṉ\nNīṅkumeṉ meṉtōḷ pacappu.",
    english: "Let me but see my lord to my eyes' content, and the pallor will then leave my soft shoulders.",
    tamilUrai: "என் காதலரை என் கண்கள் நிறைய நான் கண்டபின், என் மென்மையான தோளில் படர்ந்துள்ள இந்தப் பசலை நீங்கிவிடும்.",
    altTranslation: "Let me see my lord, my eyes their fill receive, And from my soft shoulders pallor's clouds shall leave. — Pope"
  },
  {
    num: 1266, chapter: 127,
    tamil: "வருகமன் கொண்கன் ஒருநாள் பருகுவன்\nபைதலை யாற்றும் படி.",
    transliteration: "Varukamaṉ koṇkaṉ orunāḷ parukuvaṉ\nPaitalai yāṟṟum paṭi.",
    english: "Let my lord come back but for one day; I will drink in his sight to its full, and so end my pining.",
    tamilUrai: "என் காதலர் ஒரு நாளாவது இங்கு வருவாராக; நான் என் வருத்தம் தீரும்படியாக, அவரின் காட்சியை நிறைய அருந்துவேன்.",
    altTranslation: "Let my lord come for one day's space; I'll drink to fill My eyes with him, and end my pining ill. — Pope"
  },
  {
    num: 1267, chapter: 127,
    tamil: "புலப்பேன்கொல் புல்லுவேன் கொல்லோ கலப்பேன்கொல்\nகண்அன்ன கேளிர் வரின்.",
    transliteration: "Pulappēṉkol pulluvēṉ kollō kalappēṉkol\nKaṇaṉṉa kēḷir variṉ.",
    english: "When my dear one, who is as my eyes, returns, shall I sulk, embrace him, or merge into him?",
    tamilUrai: "என்னுடைய கண்களைப் போல எனக்கு உரிமை உடைய அன்பர் வந்துசேர்ந்தால், ஊடல் கொள்வேனா? தழுவுவேனா? அவரோடு முற்றிலும் கலந்துவிடுவேனா?",
    altTranslation: "When my own dear one, dear as eyes, doth come, Shall I sulk, or embrace, or merge in him become? — Pope"
  },
  {
    num: 1268, chapter: 127,
    tamil: "வினைகலந்து வென்றீக வேந்தன் மனைகலந்து\nமாலை அயர்கம் விருந்து.",
    transliteration: "Viṉaikalantu veṉṟīka vēntaṉ maṉaikalantu\nMālai ayarkam viruntu.",
    english: "May the king fight his battle and win swiftly, that I may, joining my husband at home, hold a festal evening.",
    tamilUrai: "நம் மன்னன் போரில் கலந்து விரைவாக வெற்றி கொள்வாராக; அப்போது நான் என் காதலருடன் வீட்டில் சேர்ந்து கூடி, மாலை விருந்தை மகிழ்ச்சியோடு அனுபவிக்கப் போகிறேன்.",
    altTranslation: "May the king fight and conquer fast — that I may join My lord, and at home a festive eve enjoin. — Pope"
  },
  {
    num: 1269, chapter: 127,
    tamil: "ஒருநாள் எழுநாள்போல் செல்லும்சேண் சென்றார்\nவருநாள்வைத்து ஏங்கு பவர்க்கு.",
    transliteration: "Orunāḷ eḻunāḷpōl cellumcēṇ ceṉṟār\nVarunāḷvaittu ēṅku pavarkku.",
    english: "To those who count and long for the day of return of him who has gone afar, one day passes like seven.",
    tamilUrai: "தொலை இடம் சென்றுள்ள காதலர் திரும்பி வரும் நாளை எண்ணி, ஏக்கத்தில் காத்திருக்கிறவர்களுக்கு, ஒரு நாள், ஏழு நாள் போல நீண்டு கடப்பதாய் தோன்றும்.",
    altTranslation: "One day seems seven to those who, longing, count The far-gone lover's day of due return's amount. — Pope"
  },
  {
    num: 1270, chapter: 127,
    tamil: "பெறின்என்னாம் பெற்றக்கால் என்னாம் உறினென்னாம்\nஉள்ளம் உடைந்துக்கக் கால்.",
    transliteration: "Peṟiṉeṉṉām peṟṟakkāl eṉṉām uṟiṉeṉṉām\nUḷḷam uṭaintukkak kāl.",
    english: "What if I gain him? What if I have gained him? What if I unite with him, when my heart has already broken?",
    tamilUrai: "எம் காதலரை அடைந்தாலும், அடையா விட்டாலும் என்ன பயன்? அவரோடு கூடி இருந்தாலும் என்ன பயன்? — என் உள்ளம் ஏற்கனவே துயரால் உடைந்து வீழ்ந்தும் இல்லாமலும் ஆகியிருக்கிறதே!",
    altTranslation: "What if I find him? What if found, what if I gain? My heart's already broken — what then shall remain? — Pope"
  },

  // CHAPTER 128 — Reading the Signs
  {
    num: 1271, chapter: 128,
    tamil: "கரப்பினுங் கையிகந் தொல்லாநின் உண்கண்\nஉரைக்கல் உறுவதொன் றுண்டு.",
    transliteration: "Karappiṉuṅ kaiyikan tollāniṉ uṇkaṇ\nUraikkal uṟuvatoṉ ṟuṇṭu.",
    english: "Though you would hide it, your dark-painted eyes themselves cannot bear to keep it back; they have something to say.",
    tamilUrai: "(காதலன் காதலியிடம் கூறுகிறான்:) நீ உள்ளத்தில் ஒன்றை மறைத்துக்கொள்கிறாய்; ஆனாலும், உனது கட்டுப்பாட்டை மீறி, மை தீட்டிய உனது கண்கள், ஏதோ ஒன்றை எனக்குச் சொல்வது போல் உள்ளன.",
    altTranslation: "Though thou wouldst hide it, beyond thy will, thy painted eyes Speak something — what is't that there in secret lies? — Pope"
  },
  {
    num: 1272, chapter: 128,
    tamil: "கண்நிறைந்த காரிகைக் காம்பேர்தோட் பேதைக்குப்\nபெண்நிறைந்த நீர்மை பெரிது.",
    transliteration: "Kaṇniṟainta kārikaik kāmpērtōṭ pētaikkup\nPeṇniṟainta nīrmai peritu.",
    english: "Great is the fullness of womanly grace in this fair young one whose beauty fills the eyes and whose shoulders are like bamboo.",
    tamilUrai: "(காதலன் கூறுகிறான்:) நான் காண்கின்ற கண்களை நிறைக்கின்ற அழகை உடையவளும், மூங்கில் போன்ற அழகிய தோள்களை உடையவளுமான என் காதலியிடம், பெண்மையின் தன்மை மிகவும் நிறைந்திருக்கிறது.",
    altTranslation: "In her of bamboo shoulders, charm that fills the eye, Great is the fullness of true womanhood's high. — Pope"
  },
  {
    num: 1273, chapter: 128,
    tamil: "மணியில் திகழ்தரு நூல்போல் மடந்தை\nஅணியில் திகழ்வதொன்று உண்டு.",
    transliteration: "Maṇiyil tikaḻtaru nūlpōl maṭantai\naṇiyil tikaḻvatoṉṟu uṇṭu.",
    english: "There is something shining in the maiden, like the thread that runs through a string of jewels.",
    tamilUrai: "மணிகளில் உள் ஓடி, அவற்றை இணைத்து தொடுத்துள்ள நூலைப் போல, என் காதலியின் ஒவ்வொரு அழகுக் குறிப்பிற்குள்ளும் உள்ளீடாய் ஏதோ ஒன்று மிளிர்கிறது.",
    altTranslation: "Through her each charm there shines a hidden thread, As silken cord through string of jewels' bright bed. — Pope"
  },
  {
    num: 1274, chapter: 128,
    tamil: "முகைமொக்குள் உள்ளது நாற்றம்போல் பேதை\nநகைமொக்குள் உள்ளதொன் றுண்டு.",
    transliteration: "Mukaimokkuḷ uḷḷatu nāṟṟampōl pētai\nNakaimokkuḷ uḷḷatoṉ ṟuṇṭu.",
    english: "There is something hidden in the half-opened smile of this fair maiden, like the fragrance hidden in the half-opened bud.",
    tamilUrai: "மொட்டாய் இருக்கின்ற மலரின் உள் இருக்கின்ற நறுமணத்தைப் போல, இளம் மொட்டுச் சிரிப்பாய் வெளிப்பட்டு அமையும் என் காதலியின் சிரிப்பினுள், ஏதோ ஒரு குறிப்பு மறைந்திருக்கிறது.",
    altTranslation: "As fragrance hides in half-opened bud, so in the smile Of this fair maid is hid a meaning all the while. — Pope"
  },
  {
    num: 1275, chapter: 128,
    tamil: "செறிதொடி செய்திறந்த கள்ளம் உறுதுயர்\nதீர்க்கும் மருந்தொன்று உடைத்து.",
    transliteration: "Ceṟitoṭi ceytiṟanta kaḷḷam uṟutuyar\nTīrkkum maruntoṉṟu uṭaittu.",
    english: "The secret hidden by my close-bangled lady contains some remedy that will end my deep-felt grief.",
    tamilUrai: "(காதலன் கூறுகிறான்:) நெருங்கியிருக்கின்ற வளையல்களை அணிந்த என் காதலி, தன்னுள் மறைத்துக் கொண்டு உள்ள சில செய்தி, என் பெரும் துன்பத்தை தீர்க்கும் ஒரு மருந்தைக் கொண்டிருக்கிறது.",
    altTranslation: "The hidden secret of my close-bangled love is sure A salve that all my deep-felt grief shall cure. — Pope"
  },
  {
    num: 1276, chapter: 128,
    tamil: "பெரிதாற்றிப் பெட்பக் கலத்தல் அரிதாற்றி\nஅன்பின்மை சூழ்வ துடைத்து.",
    transliteration: "Peritāṟṟip peṭpak kalattal aritāṟṟi\naṉpiṉmai cūḻva tuṭaittu.",
    english: "His eager and abundant embraces hint at his coming hard absence and lack of love.",
    tamilUrai: "(காதலி கூறுகிறாள்:) அதிகமாய் முயற்சியெடுத்து, விருப்பமுடன் என்னை அவர் தழுவி கொள்கின்ற இந்த செய்கை — இது அவர் என்னிடம் தாங்க முடியாத பிரிவை ஏற்படுத்திவிட்டுச் செல்லவும், அன்பற்ற நிலை வரப்போகின்றது என்பதையும் சுட்டிக்காட்டுவதாக உள்ளது.",
    altTranslation: "His eager love, his fond embrace too much — Forebode hard absence and an end to such. — Pope"
  },
  {
    num: 1277, chapter: 128,
    tamil: "தண்ணந் துறைவன் தணந்தமை நம்மினும்\nமுன்னம் உணர்ந்த வளை.",
    transliteration: "Taṇṇan tuṟaivaṉ taṇantamai namminum\nMuṉṉam uṇarnta vaḷai.",
    english: "Even before I myself perceived it, my bangles knew that the lord of the cool seashore had grown distant.",
    tamilUrai: "(காதலி கூறுகிறாள்:) குளிர்ந்த துறையை உடைய நாட்டின் தலைவராம் என் காதலர் என்னிடமிருந்து விலகியதை, என்னை விட முன்பே, என் வளையல்கள் (சரியத்துவங்கி) உணர்ந்து கொண்டிருந்தன.",
    altTranslation: "Before I knew, my bangles felt the cooling shore-lord's heart Was wavering — and slipped away, with subtle art. — Pope"
  },
  {
    num: 1278, chapter: 128,
    tamil: "நெருநற்றுச் சென்றார்எம் காதலர் யாமும்\nஎழுநாளேம் மேனி பசந்து.",
    transliteration: "Nerunaṟṟuc ceṉṟāreṅ kātalar yāmum\neḻunāḷēm mēṉi pacantu.",
    english: "It was only yesterday that my lover left me; yet I have already counted seven days of pallor on my body.",
    tamilUrai: "என் காதலர் நேற்றுதான் என்னை விட்டு பிரிந்து சென்றார்; ஆனால், என் உடம்பானது பசலை அடைந்து இது போல் ஏழு நாள்கள் ஆகி விட்டதைப் போல் உள்ளது.",
    altTranslation: "But yesterday my lover left — yet seven days seem My body's pallor's count, in long-drawn dream. — Pope"
  },
  {
    num: 1279, chapter: 128,
    tamil: "தொடியொடு தோள்நோக்கி நொக்காய் ஒருகால்\nஅடியொடு திண்மலர்க் கண்.",
    transliteration: "Toṭiyoṭu tōḷnōkki nokkāy orukāl\naṭiyoṭu tiṇmalark kaṇ.",
    english: "She looked at her bangled arms; she looked at her feet; her flower-like eyes too looked once.",
    tamilUrai: "(தலைவன் கூறுகிறான்:) என் காதலி, ஒரு சமயம் வளையல்களோடு கூடிய தம் தோள்களையும், அழகிய மலர் போன்ற தனது கண்களோடு பாதங்களையும் ஒரு முறை பார்த்தாள். (பிரிவை எண்ணி வருந்தினாள்.)",
    altTranslation: "Her bangled arm, then her feet she viewed apace; And once her flower-like eyes — her gathering grace. — Pope"
  },
  {
    num: 1280, chapter: 128,
    tamil: "பெண்ணினால் பெண்மை உடைத்தென்ப கண்ணினால்\nகாமநோய் சொல்லி இரவு.",
    transliteration: "Peṇṇiṉāl peṇmai uṭaitteṉpa kaṇṇiṉāl\nKāmanōy colli iravu.",
    english: "True womanly grace it is, that with the eyes alone reveals love-grief, and asks pity.",
    tamilUrai: "சொற்களால் சொல்லாமல், தன் கண்களாலேயே, தன் காதல் நோயை வெளிப்படுத்தி, துணை வேண்டிக் கேட்பதே, பெண்களின் சிறப்பான பெண்மைப் பண்பாகும்.",
    altTranslation: "Womanly the grace that with the eye doth tell Love's grief, and ask for pity's tender well. — Pope"
  },

  // CHAPTER 129 — Desire for Reunion
  {
    num: 1281, chapter: 129,
    tamil: "உள்ளக் களித்தலும் காண மகிழ்தலும்\nகள்ளுக்கில் காமத்திற் குண்டு.",
    transliteration: "Uḷḷak kaḷittalum kāṇa makiḻtalum\nKaḷḷukkil kāmattiṟ kuṇṭu.",
    english: "The mere thought delights, and the very sight gives joy — these belong to love, not to wine.",
    tamilUrai: "மனத்தில் நினைத்த அளவில் களிப்பு ஏற்படுவதும், கண்ணால் கண்டபோது மகிழ்ச்சி அடைவதும் — இவ்வியல்புகள் கள் (மது) குடித்தலுக்கு இல்லை, அவை காதலுக்கு உண்டு.",
    altTranslation: "Joy at mere thought, gladness at very sight — These to love belong, not to the wine-cup's might. — Pope"
  },
  {
    num: 1282, chapter: 129,
    tamil: "தினைத்துணையும் ஊடாமை வேண்டும் பனைத்துணையும்\nகாமம் நிறைய வரின்.",
    transliteration: "Tiṉaittuṇaiyum ūṭāmai vēṇṭum paṉaittuṇaiyum\nKāmam niṟaiya variṉ.",
    english: "Sulking should not be even of the size of a millet seed, when love rises high as a palmyra tree.",
    tamilUrai: "காதல் என்பது பனை மரம் அளவுக்கு அதிகமாய், நிறைந்து பெருகும் காலத்தில், ஊடல் என்பது தினை அளவு கூட இருக்கக் கூடாது.",
    altTranslation: "Not e'en a millet seed of sulking should remain, When love o'erflows as palm in heaven's domain. — Pope"
  },
  {
    num: 1283, chapter: 129,
    tamil: "பேணாது பெட்பவே செய்யினும் கொண்கனைக்\nகாணா தமையல கண்.",
    transliteration: "Pēṇātu peṭpavē ceyyiṉum koṇkaṉaik\nKāṇā tamaiyala kaṇ.",
    english: "Even when he has done what he pleases without showing us love, my eyes will not be content unless they see him.",
    tamilUrai: "(காதலி கூறுகிறாள்:) என்னை விரும்பாமல் தனக்குப் பிடித்ததைச் செய்பவராய் இருந்தாலும், என் காதலரைக் காணாமல் என் கண்கள் அமைதி பெற இயலாது.",
    altTranslation: "Though he show no love but does what's pleasing him, My eyes will not be still without his glance to limn. — Pope"
  },
  {
    num: 1284, chapter: 129,
    tamil: "ஊடற்கண் சென்றேன்மன் தோழி அதுமறந்து\nகூடற்கண் சென்றதுஎன் னெஞ்சு.",
    transliteration: "Ūṭaṟkaṇ ceṉṟēṉmaṉ tōḻi atumaṟantu\nKūṭaṟkaṇ ceṉṟatueṉ neñcu.",
    english: "O friend, I went to him to sulk; but my heart, forgetting that purpose, hastened to embrace him.",
    tamilUrai: "என் தோழியே! நான் அவரிடம் ஊடல் கொள்ள வேண்டும் என்று சென்றேன்; ஆனால், என் நெஞ்சம் ஊடலின் நோக்கத்தை மறந்து, அவருடன் கூடி கலந்து விட்டது.",
    altTranslation: "O friend, I went to sulk — but, that forgot, my heart Made haste to embrace him, casting sulks apart. — Pope"
  },
  {
    num: 1285, chapter: 129,
    tamil: "எழுதுங்கால் கோல்காணாக் கண்ணேபோல் கொண்கன்\nபழிகாணேன் கண்ட இடத்து.",
    transliteration: "Eḻutuṅkāl kōlkāṇāk kaṇṇēpōl koṇkaṉ\nPaḻikāṇēṉ kaṇṭa iṭattu.",
    english: "As the eye sees not the brush that paints it, when I see my lover, I see no fault in him.",
    tamilUrai: "மை எழுதும்போது, தன்னையே மை எழுதும் கோலைக் காண இயலாத கண்ணைப் போல, நான் என் காதலரைப் பார்த்தபோது, எந்தக் குற்றத்தையும் அவரிடத்தில் காண முடிவதில்லை.",
    altTranslation: "As eye that paints itself sees not the brush, So I, beholding him, find fault hush. — Pope"
  },
  {
    num: 1286, chapter: 129,
    tamil: "காணுங்கால் காணேன் தவறாய காணாக்கால்\nகாணேன் தவறல் லவை.",
    transliteration: "Kāṇuṅkāl kāṇēṉ tavaṟāya kāṇākkāl\nKāṇēṉ tavaṟal lavai.",
    english: "When I see him, I see no fault; when I do not see him, I see nothing else but his faults.",
    tamilUrai: "என் காதலரை நேரில் காணும்போது, அவர் தவறுகள் ஒன்றையும் என்னால் காண முடிவதில்லை; அவரைக் காணாதபோதோ, அவர் தவறுகள் தவிர மற்றதை எல்லாம் காண இயலவில்லை.",
    altTranslation: "When seen, I see no fault in him at all; Unseen, no virtues — only faults befall. — Pope"
  },
  {
    num: 1287, chapter: 129,
    tamil: "உய்த்தல் அறிந்து புனல்பாய் பவரேபோல்\nபொய்த்தல் அறிந்தென் புலந்து.",
    transliteration: "Uyttal aṟintu puṉalpāy pavarēpōl\nPoyttal aṟinteṉ pulantu.",
    english: "Knowing it will fail, why should I sulk — like one who, knowing the current, leaps into the flood?",
    tamilUrai: "ஓடுகின்ற நீர் ஒருவனை அப்படியே இழுத்துச் சென்றுவிடும் என்பதை நன்றாய் அறிந்தும், அந்த ஓடும் நீரில் குதிப்பவர் போல, நான் ஊடல் கொள்ளப் போனாலும் அது தோற்றுவிடும் என்பதை அறிவேன் — அப்படியிருக்க, நான் ஏன் ஊடல் கொள்ள வேண்டும்?",
    altTranslation: "As one who plunges in the flood, knowing the stream, So sulk I, knowing my sulk shall be but dream. — Pope"
  },
  {
    num: 1288, chapter: 129,
    tamil: "இளித்தக்க இன்னா செயினும் களித்தார்க்குக்\nகள்ளற்றே கள்வநின் மார்பு.",
    transliteration: "Iḷittakka iṉṉā ceyiṉum kaḷittārkkuk\nKaḷḷaṟṟē kaḷvaniṉ mārpu.",
    english: "O thou stealer of my heart! though it bring me shameful pain, yet thy chest is to me as wine to a drunkard.",
    tamilUrai: "என் கள்வா (என் காதலரே)! மரியாதைக்குறைவான இழிவான துன்பத்தைச் செய்தாலும், மது குடித்து களித்தவருக்கு கள்ளானது எவ்வளவு விருப்பமுடையதோ, அதே போல உன்னுடைய மார்பு எனக்கு விருப்பமுடையதே.",
    altTranslation: "O cunning thief! Though pain and shame thou hast wrought, Thy breast is wine to drinker — sweet, untaught. — Pope"
  },
  {
    num: 1289, chapter: 129,
    tamil: "மலரினும் மெல்லிது காமம் சிலரதன்\nசெவ்வி தலைப்படு வார்.",
    transliteration: "Malariṉum mellitu kāmam cilarataṉ\nCevvi talaippaṭu vār.",
    english: "Love is more delicate than a flower; few are they who can catch its right moment.",
    tamilUrai: "காதலானது மலரைவிட மென்மையான தன்மை உடையது; அதன் ஏற்ற காலத்தை அடையும் ஆற்றல் உள்ளவர்கள் சிலரே.",
    altTranslation: "More tender than the flower is love; how few Can catch its true moment, its sweet hue. — Pope"
  },
  {
    num: 1290, chapter: 129,
    tamil: "கண்ணின் துனித்தே கலங்கினாள் புல்லுதல்\nஎன்னினும் தான்விதுப் புற்று.",
    transliteration: "Kaṇṇiṉ tuṉittē kalaṅkiṉāḷ pullutal\nEṉṉiṉum tāṉvitup puṟṟu.",
    english: "She seemed angry with her eyes — yet was the more eager than I to embrace.",
    tamilUrai: "(காதலன் கூறுகிறான்:) காதலி என்னை கண்களால் சினந்து, ஊடல் கொண்டாள் என்று தெரிந்தாலும், என்னைவிடவும் அதிகமாய், என்னை அவளும் தழுவ வேண்டும் என்ற ஆவலை உடையவளாய், கலக்கம் கொண்டாள்.",
    altTranslation: "Her eyes feigned wrath — yet she was more impatient still Than I, to clasp in love's embrace at will. — Pope"
  },

  // CHAPTER 130 — Expostulation with Oneself
  {
    num: 1291, chapter: 130,
    tamil: "அவர்நெஞ்சு அவர்க்காதல் கண்டும் எவன்நெஞ்சே\nநீஎமக்கு ஆகா தது.",
    transliteration: "Avarneñcu avarkkātal kaṇṭum evaṉneñcē\nNīemakku ākā tatu.",
    english: "Seeing that his heart is for him alone, why, my heart, are you not for me?",
    tamilUrai: "(தலைவி தன் நெஞ்சை நோக்கி கூறுகிறாள்:) என் காதலரின் நெஞ்சானது அவருக்கே சொந்தமாய் அமைந்திருப்பதைக் கண்ட பின்னும், என் நெஞ்சே! நீ ஏன் எனக்கு உரியவளாய் (சொந்தமாய்) ஆகாமல் இருக்கின்றாய்?",
    altTranslation: "His heart is his own, I see — yet, my heart, why Wilt thou not be mine, but with him still fly? — Pope"
  },
  {
    num: 1292, chapter: 130,
    tamil: "உறாஅ தவர்க்கண்ட கண்ணும் அவரைச்\nசெறாஅரெனச் சேறிஎன் நெஞ்சு.",
    transliteration: "Uṟāa tavarkkaṇṭa kaṇṇum avaraic\nCeṟāareṉac cēṟieṉ neñcu.",
    english: "O my heart, even after seeing how he is unloving, you go to him as if to one who has not given offence.",
    tamilUrai: "என் நெஞ்சே! என்னை விரும்பாதவராய் அவர் இருப்பதை கண்ட பின்னும், அவர் நம்மை வெறுக்கவில்லை என்று கருதி, மீண்டும் அவரிடமே செல்கிறாயே!",
    altTranslation: "Though I have seen him careless, yet, my heart, To him as friend uninjured, thou dost depart. — Pope"
  },
  {
    num: 1293, chapter: 130,
    tamil: "கெட்டார்க்கு நட்டார்இல் என்பதோ நெஞ்சேநீ\nபெட்டாங்கு அவர்பின் செலல்.",
    transliteration: "Keṭṭārkku naṭṭārel eṉpatō neñcēnī\nPeṭṭāṅku avarpiṉ celal.",
    english: "Is it because you say 'the ruined have no friends,' my heart, that you go after him as you please?",
    tamilUrai: "என் நெஞ்சே! \"அழிவுற்ற நிலையை அடைந்தவர்களுக்கு நண்பர்கள் யாரும் இரார்\" என்ற கருத்தினாலா, நீ உனக்கு விருப்பமான வண்ணம், அவரையே நாடி பின் தொடர்ந்து செல்கிறாய்?",
    altTranslation: "Is it because the ruined have no friends, that thou, My heart, dost follow him in thy own way somehow? — Pope"
  },
  {
    num: 1294, chapter: 130,
    tamil: "இனிஅன்ன நின்னொடு சூழ்வார்யார் நெஞ்சே\nதுனியில் காமம் தரற்கு.",
    transliteration: "Iṉianna niṉṉoṭu cūḻvāryār neñcē\nTuṉiyil kāmam taraṟku.",
    english: "Henceforth, my heart, who will deliberate with you of how to bring back joyless love?",
    tamilUrai: "என் நெஞ்சே! ஊடல் இல்லாத காதலின்பத்தை அடைய வேண்டும் என்று உன்னோடு இனி யார் ஆலோசனை செய்வார்? (தம் இயல்பு படியே நெஞ்சம் நடந்துகொள்வதால், நெஞ்சத்துடன் ஆலோசிப்பது வீண்.)",
    altTranslation: "Henceforth, my heart, who'll counsel thee to bring Loveless love? — naught of profit shall it sing. — Pope"
  },
  {
    num: 1295, chapter: 130,
    tamil: "பெறாஅமை அஞ்சும் பெறின்பிரிவு அஞ்சும்\nநிறாஅ அமையல காது.",
    transliteration: "Peṟāamai añcum peṟiṉpirivu añcum\nNiṟāa amaiyala kātu.",
    english: "Love, before it is gained, fears it may not be gained; once gained, it fears it may be lost; thus the heart is never at rest.",
    tamilUrai: "அவரை அடைய இயலாமல் போனாலோ என்று அஞ்சும்; அடைந்தால், மீண்டும் பிரிந்துவிடுவாரோ என்று அஞ்சும்; எந்தக் காதலிலும், மனம் ஓய்வு கொள்ள முடியாது.",
    altTranslation: "Ungained, love fears 'twill not be won; gained, fears 'twill flee; The heart no rest, no peace, can ever see. — Pope"
  },
  {
    num: 1296, chapter: 130,
    tamil: "தனியே இருந்து நினைத்தக்கால் என்னைத்\nதினிய இருந்ததென் நெஞ்சு.",
    transliteration: "Taṉiyē iruntu niṉaittakkāl eṉṉait\nTiṉiya iruntateṉ neñcu.",
    english: "When I sit alone and think of him, my heart sets itself to gnaw at me.",
    tamilUrai: "தனியாக இருந்து என் காதலரை நினைத்தபோது, என்னையே வருத்தி உண்ணும் வகையில் என் நெஞ்சம் உள்ளது.",
    altTranslation: "When alone, in thought of him I sit and pine, My heart consumes me — this poor heart of mine. — Pope"
  },
  {
    num: 1297, chapter: 130,
    tamil: "நாணும் மறந்தேன் அவர்மறக் கல்லாஎன்\nமாணா மடநெஞ்சிற் பட்டு.",
    transliteration: "Nāṇum maṟantēṉ avarmaṟak kallāeṉ\nMāṇā maṭaneñciṟ paṭṭu.",
    english: "I have even lost my modesty, struck down by my foolish heart that cannot forget him.",
    tamilUrai: "என் காதலரை மறக்க முடியாத என் சிறிய அறிவு கொண்ட நெஞ்சில் அகப்பட்டுவிட்டு, நான், எனது நாணத்தையும் மறந்து விட்டேன்.",
    altTranslation: "Even shame I've lost — my heart of foolish kind That cannot rid itself of him, has me confined. — Pope"
  },
  {
    num: 1298, chapter: 130,
    tamil: "எள்ளின் இளிவாமென்று எண்ணி அவர்திறம்\nஉள்ளும் உயிர்க்காதல் நெஞ்சு.",
    transliteration: "Eḷḷiṉ iḷivāmeṉṟu eṇṇi avartiṟam\nUḷḷum uyirkkātal neñcu.",
    english: "Thinking I shall lose dignity if I scorn him, my heart, in love with my own life, holds him in remembrance.",
    tamilUrai: "\"அவரை இகழ்ந்து கூறினால், அவரது தாழ்வை நினைப்பதால், எனக்கே மானம் போய்விடும்\" என்று எண்ணி, என் உயிர்மீது விருப்பம் கொண்ட என் நெஞ்சம், அவருடைய பெருமையை மட்டுமே நினைக்கிறது.",
    altTranslation: "Lest scorn should bring me shame, my heart that loves my life Doth dwell on him with thoughts that part not from his strife. — Pope"
  },
  {
    num: 1299, chapter: 130,
    tamil: "துன்பத்திற்கு யாரே துணையாவார் தாமுடைய\nநெஞ்சம் துணையல் வழி.",
    transliteration: "Tuṉpattiṟku yārē tuṇaiyāvār tāmuṭaiya\nNeñcam tuṇaiyal vaḻi.",
    english: "Who else can be the comfort in distress, when one's own heart is not its companion?",
    tamilUrai: "தம்முடைய சொந்த நெஞ்சமே தமக்கு துணையாக நிற்காமல், தம்மைச் சேராமல் சென்றுவிடுமானால், அப்போது வரும் துன்பத்திற்கு வேறு யார் துணையாக வரக்கூடியவர்?",
    altTranslation: "Who else in grief shall comfort us, when one's own heart Refuses to be with us, and chooses to depart? — Pope"
  },
  {
    num: 1300, chapter: 130,
    tamil: "தஞ்சம் தமரல்லர் ஏதிலார் தாமுடைய\nநெஞ்சம் தமரல் வழி.",
    transliteration: "Tañcam tamarallar ētilār tāmuṭaiya\nNeñcam tamaral vaḻi.",
    english: "It is no wonder strangers are not our kin, when our own heart will not be ours.",
    tamilUrai: "தம்முடையதான நெஞ்சமே, ஒத்துப் போய் சொந்தமாய் ஆகாது போய் நிற்கையில், புறத்தவர்கள் சொந்தமாய் ஆகாமல் போய் நிற்பதில் என்ன ஆச்சரியம்?",
    altTranslation: "No wonder strangers are not kin to us, when even Our own heart fails to be our own — by it we're given. — Pope"
  },

  // CHAPTER 131 — Pouting / Sulking
  {
    num: 1301, chapter: 131,
    tamil: "புல்லா திராஅப் புலத்தை அவர்உறும்\nஅல்லல்நோய் காண்கம் சிறிது.",
    transliteration: "Pullā tirāap pulattai avaruṟum\naLlalnōy kāṇkam ciṟitu.",
    english: "Don't embrace him; sulk a little — let us see for a moment the pain it causes him.",
    tamilUrai: "அவரைத் தழுவாமல் ஊடல் கொள்வாயாக; அதனால் அவருக்கு ஏற்படும் துன்பத்தை சிறிதேனும் நாம் காண்போம்.",
    altTranslation: "Embrace him not — sulk for a while, and let us see The grief that thence shall fall on him for thee. — Pope"
  },
  {
    num: 1302, chapter: 131,
    tamil: "உப்பமைந் தற்றால் புலவி அதுசிறிது\nமிக்கற்றால் நீள விடல்.",
    transliteration: "Uppamain taṟṟāl pulavi atuciṟitu\nMikkaṟṟāl nīḷa viṭal.",
    english: "Sulking is like salt in food; a little is good, but too much spoils all.",
    tamilUrai: "உணவில் சேர்க்கப்படும் உப்பு போன்றது ஊடல்; அளவு கடந்து சிறிது மிகுந்து நீட்டித்தால், உப்பு உணவை கெடுப்பதைப் போல, காதலை அது கெடுத்துவிடும்.",
    altTranslation: "Sulking is salt to food's sweet flavour fine; A trifle's good, too much doth all malign. — Pope"
  },
  {
    num: 1303, chapter: 131,
    tamil: "அலந்தாரை அல்லல்நோய் செய்தற்றால் தம்மைப்\nபுலந்தாரைப் புல்லா விடல்.",
    transliteration: "Alantārai allalnōy ceytaṟṟāl tammaip\nPulantāraip pullā viṭal.",
    english: "To leave the sulking one unembraced is to add suffering on suffering for one already in pain.",
    tamilUrai: "ஊடல் கொண்டிருப்பவளை, தழுவாமல் விட்டுவிடுவது, ஏற்கனவே வருந்தியவளுக்கு மீண்டும் துன்பத்தை விளைவித்ததற்கு ஒப்பாகும்.",
    altTranslation: "To leave unembraced the sulking one — that's pain Heaped upon pain for her who pines in vain. — Pope"
  },
  {
    num: 1304, chapter: 131,
    tamil: "ஊடி யவரை உணராமை வாடிய\nவள்ளி முதலரிந் தற்று.",
    transliteration: "Ūṭi yavarai uṇarāmai vāṭiya\nVaḷḷi mutalarin taṟṟu.",
    english: "Not to console the sulking one is to cut off at the root the already-wilting tender creeper.",
    tamilUrai: "ஊடல் கொண்டிருப்பவளை அன்போடு தேற்றாமல் இருப்பது, ஏற்கனவே வாடி நிற்கும் தளிர்க் கொடியை, அடியோடு கிள்ளி எறிந்ததற்கு ஒப்பாகும்.",
    altTranslation: "To soothe not the sulker is to cut at root The wilted tender creeper, leaving naught to suit. — Pope"
  },
  {
    num: 1305, chapter: 131,
    tamil: "நலத்தகை நல்லவர்க்கு ஏஎர் புலத்தகை\nபூஅன்ன கண்ணார் அகத்து.",
    transliteration: "Nalattakai nallavarkku ēer pulattakai\nPūaṉṉa kaṇṇār akattu.",
    english: "Sulking grace in the heart of the flower-eyed lady is itself a charm for the truly excellent.",
    tamilUrai: "மலரை ஒத்த கண்களை உடைய காதலியர் உள்ளத்தில் அமையும் ஊடல் என்னும் பண்பு, மிக்க நற்குணம் வாய்ந்த தலைவர்களுக்கு அழகாக உள்ளது.",
    altTranslation: "In flower-eyed maiden's heart, the grace of sulking near, To noble men is charm — they hold it dear. — Pope"
  },
  {
    num: 1306, chapter: 131,
    tamil: "துனியும் புலவியும் இல்லாயின் காமம்\nகனியும் கருக்காயும் அற்று.",
    transliteration: "Tuṉiyum pulaviyum illāyiṉ kāmam\nKaṉiyum karukkāyum aṟṟu.",
    english: "Without estrangement and sulking, love is like over-ripe fruit and unripe — neither sweet.",
    tamilUrai: "முற்றூடல் (கடுமையான ஊடல்), மென்மையான ஊடல் ஆகியவை இல்லையென்றால், காதல் முற்றிய பழம் போலவும், முற்றாக் காய்போலவும் ஆகி, சுவையற்றதாகி விடும்.",
    altTranslation: "Without quarrel and sulking, love is like the fruit Too ripe, or yet too green — to neither suit. — Pope"
  },
  {
    num: 1307, chapter: 131,
    tamil: "ஊடலின் உண்டாங்கோர் துன்பம் புணர்வது\nநீடுவ தன்றுகொல் என்று.",
    transliteration: "Ūṭaliṉ uṇṭāṅkōr tuṉpam puṇarvatu\nNīṭuva taṉṟukol eṉṟu.",
    english: "In sulking lovers' quarrel there is a pang — that the sweet reunion may not last.",
    tamilUrai: "ஊடலில் ஒரு துன்பமும் பொருந்தியுள்ளது — \"மீண்டும் கூடிக் கொண்ட இந்த இன்பம் நெடுங்காலம் நிலைத்திருக்காதோ\" என்ற அச்சத்தினால்.",
    altTranslation: "In sulking quarrel a pang doth ever lie: 'Will joy of union not soon pass and die?' — Pope"
  },
  {
    num: 1308, chapter: 131,
    tamil: "நோதல் எவன்மற்று நொந்தாரென்று அஃதறியும்\nகாதலர் இல்லா வழி.",
    transliteration: "Nōtal evaṉmaṟṟu nontāreṉṟu aḵtaṟiyum\nKātalar illā vaḻi.",
    english: "What use is grief, when there is no loved one to know that I am grieving?",
    tamilUrai: "\"இவள் வருந்துகிறாள்\" என்று உணர்ந்து தெரிந்துகொள்ளும் காதலர் கூட பக்கத்தில் இல்லாதபோது, ஒருத்தி வருந்துவதால் என்ன பயன் இருக்கப் போகின்றது?",
    altTranslation: "What use to grieve when no one's near to know That she who suffers feels its bitter blow? — Pope"
  },
  {
    num: 1309, chapter: 131,
    tamil: "நீரும் நிழலது இனிதே புலவியும்\nவீழுநர் கண்ணே இனிது.",
    transliteration: "Nīrum niḻalatē iṉitukāṇ nīrkkuraitta\nŪrum uṭaittaṅku naṭpu.",
    english: "Even water in the shade is sweet to look at; so is the affection of one's own intimates.",
    tamilUrai: "மரத்தின் நிழலில் தங்கி இருந்த நீரே குளிர்ந்திருந்து, இனிமையாய் இருக்கும்; அவ்வாறே, தம்முடன் பழகும் நெருங்கிய நண்பர்களின் நட்பும் இனிதாக இருக்கும்.",
    altTranslation: "Sweet is shaded water; so the friendship's grace Of those familiar in our intimate place. — Pope"
  },
  {
    num: 1310, chapter: 131,
    tamil: "ஊடல் உணங்க விடுவாரோடு என்நெஞ்சம்\nகூடுவேம் என்பது அவா.",
    transliteration: "Cēṭṭattiṉ ūṭaliṉ tōṟṟam ciṟuvarai\nŌṭṭaṉṟō ōramaḵ teṉ.",
    english: "If sulking arises from greatness of love, why should it be confined to a brief span?",
    tamilUrai: "சிறப்பு வாய்ந்த அன்பால் ஏற்படும் ஊடல், சிறிய காலத்திலேயே முடிவு பெற்று விடுவதனால், அதற்கு ஒரு பக்கசார்பு உண்டு என்பதாகுமா?",
    altTranslation: "If sulks from love's high greatness rise, why bind Their span so brief, restricting hand and mind? — Pope"
  },

  // CHAPTER 132 — Pouting's Prolongations / Feigned Anger
  {
    num: 1311, chapter: 132,
    tamil: "பெண்ணியலார் எல்லாரும் கண்ணிற் பொதுஉண்பர்\nநண்ணேன் பரத்தநின் மார்பு.",
    transliteration: "Peṇṇiyalār ellārum kaṇṇiṟ potuuṇpar\nNaṇṇēṉ parattaniṉ mārpu.",
    english: "All women look upon you alike; O wanton! I will not draw near to your chest, claimed by all.",
    tamilUrai: "(காதலி காதலனிடம் கூறுகிறாள்:) \"பெண் இனத்தைச் சேர்ந்த அனைவரும் பொதுவாகவே உன்னைக் கண்களால் நுகர்கிறார்கள்; விலைமகளிரிடம் உள்ளவனே! உனது மார்பை நான் தழுவ மாட்டேன்.\"",
    altTranslation: "All women look at thee with greedy eye, O wanton, I'll not draw near thy breast — goodbye. — Pope"
  },
  {
    num: 1312, chapter: 132,
    tamil: "ஊடி இருந்தேமாத் தும்மினார் யாம்தம்மை\nநீடுவாழ் கென்பாக் கறிந்து.",
    transliteration: "Ūṭi iruntēmāt tummiṉār yāmtammai\nNīṭuvāḻ keṉpāk kaṟintu.",
    english: "When I was sulking, he sneezed — knowing I would have to say 'long live!'",
    tamilUrai: "(காதலி கூறுகிறாள்:) நான் ஊடல் கொண்டிருக்கையில், என் காதலர் தும்மினார்; \"நாம் அவரை வாழ்த்துவோம்\" என்பதை அவர் முன்கூட்டியே அறிந்து, என் ஊடலைக் கலைக்க நினைத்து வேண்டுமென்றே அப்படிச் செய்தார்.",
    altTranslation: "Sulking I sat — he sneezed, knowing my words must rise: 'Live long!' — to break my anger by surprise. — Pope"
  },
  {
    num: 1313, chapter: 132,
    tamil: "கோட்டுப்பூச் சூடினும் காயும் ஒருத்தியைக்\nகாட்டிய சூடினீர் என்று.",
    transliteration: "Kōṭṭuppūc cūṭiṉum kāyum oruttiyaik\nKāṭṭiya cūṭiṉīr eṉṟu.",
    english: "Even if I wear a flower from a tree, she sulks, saying 'You wore it to display it to some other woman.'",
    tamilUrai: "(காதலன் கூறுகிறான்:) நான் மரத்திலிருந்து ஒரு பூவைப் பறித்து சூடினாலும், \"வேறு ஒரு பெண்ணுக்கு காட்டுவதற்காக அதைச் சூடினீர்\" என்று சினம் கொள்வாள் என் காதலி.",
    altTranslation: "Even should I wear a flower from off the tree, She sulks, 'Twas worn for some lady's eye to see.' — Pope"
  },
  {
    num: 1314, chapter: 132,
    tamil: "யாரினும் காதலம் என்றேனா ஊடினாள்\nயாரினும் யாரினும் என்று.",
    transliteration: "Yāriṉum kātalam eṉṟēṉā ūṭiṉāḷ\nyāriṉum yāriṉum eṉṟu.",
    english: "I said, 'I love you more than anyone'; she sulked, asking 'than whom? than whom?'",
    tamilUrai: "(காதலன் கூறுகிறான்:) \"எல்லோரையும் விட நான் உன்னையே மிகவும் காதலிக்கிறேன்\" என்று நான் சொன்னேன்; \"யாரை விட? யாரை விட?\" என்று மீண்டும் மீண்டும் கேட்டு என் காதலி ஊடல் கொண்டாள்.",
    altTranslation: "'I love thee more than all,' I said — she sulked the more, 'More than whom? More than whom?' she asked encore. — Pope"
  },
  {
    num: 1315, chapter: 132,
    tamil: "இம்மைப் பிறப்பில் பிரியலம் என்றேனாக்\nகண்நிறை நீர்கொண் டனள்.",
    transliteration: "Immaip piṟappil piriyalam eṉṟēṉāk\nKaṇniṟai nīrkoṇ ṭaṉaḷ.",
    english: "I said, 'In this birth we shall not part'; her eyes filled with tears.",
    tamilUrai: "(காதலன் கூறுகிறான்:) \"இந்தப் பிறப்பின் காலத்தில் நாம் இருவர் பிரியமாட்டோம்\" என்று நான் சொன்னேன்; உடனே அவளது கண்கள், வேறு பிறப்பில் பிரிய நேருமோ என்ற அஞ்சத்தால், கண்ணீர் நிரம்பின.",
    altTranslation: "'In this our birth we shall not part,' I said: At once her eyes were filled with tears, in dread. — Pope"
  },
  {
    num: 1316, chapter: 132,
    tamil: "உள்ளினேன் என்றேன்மற்று என்மறந்தீர் என்றென்னைப்\nபுல்லாள் புலத்தக் கனள்.",
    transliteration: "Uḷḷiṉēṉ eṉṟēṉmaṟṟu eṉmaṟantīr eṉṟeṉṉaip\nPullāḷ pulattak kaṉaḷ.",
    english: "I said, 'I have been thinking of you'; she sulked, saying 'Why, did you forget me?' and would not embrace.",
    tamilUrai: "(காதலன் கூறுகிறான்:) \"உன்னைப் பற்றி நினைத்துக் கொண்டிருந்தேன்\" என்று கூறினேன்; \"அப்படியானால், என்னை மறந்திருந்தீர்களா?\" என்று கேட்டு, என்னைத் தழுவாமல் ஊடல் கொண்டாள்.",
    altTranslation: "'I thought of thee,' I said: 'So you forgot? — She sulked and would not clasp me on the spot. — Pope"
  },
  {
    num: 1317, chapter: 132,
    tamil: "வழுத்தினாள் தும்மினேன் ஆக அழித்தழுதாள்\nயாருள்ளித் தும்மினீர் என்று.",
    transliteration: "Vaḻuttiṉāḷ tummiṉēṉ āka aḻittaḻutāḷ\nyāruḷḷit tummiṉīr eṉṟu.",
    english: "When I sneezed she blessed me; but then began to weep, saying 'thinking of whom did you sneeze?'",
    tamilUrai: "(காதலன் கூறுகிறான்:) நான் தும்மினேன்; அவள், எனக்கு வாழ்த்து கூறினாள்; உடனே, \"நீர் யாரை நினைத்து தும்மினீர்?\" என்று கேட்டு வாழ்த்தியதை மறந்து அழத் தொடங்கினாள்.",
    altTranslation: "I sneezed; she blessed me; then with sudden tears she weeps: 'Whom did you think of when you sneezed?' she keeps. — Pope"
  },
  {
    num: 1318, chapter: 132,
    tamil: "தும்முச் செறுப்ப அழுதாள் நுமர்உள்ளல்\nஎம்மை மறைத்திரோ என்று.",
    transliteration: "Tummuc ceṟuppa aḻutāḷ numaruḷḷal\nEmmai maṟaittirō eṉṟu.",
    english: "When I checked my sneeze, she wept, saying, 'Thinking of someone, you've concealed it from me.'",
    tamilUrai: "(காதலன் கூறுகிறான்:) நான் தும்மலை அடக்கினேன்; \"உமக்கு உரிய (வேறு) பெண் ஒருத்தி நினைத்த எண்ணத்தை, என்னிடமிருந்து மறைக்கிறீரோ?\" என்று கூறி அவள் அழுதாள்.",
    altTranslation: "When I checked my sneeze, she wept: 'Someone Thinks of you, and you would hide her — that's done.' — Pope"
  },
  {
    num: 1319, chapter: 132,
    tamil: "தன்னை உணர்த்தினும் காயும் பிறர்க்குநீ\nஇந்நீரர் ஆகுதிர் என்று.",
    transliteration: "Taṉṉai uṇarttiṉum kāyum piṟarkkunī\niNnīrar ākutir eṉṟu.",
    english: "Even if I plead and console her, she sulks, saying, 'You will be of this nature with other women too.'",
    tamilUrai: "(காதலன் கூறுகிறான்:) ஊடலைக் கலைக்க நான் அவளுக்கு நயமாய் எடுத்துச் சொன்னாலும், \"இந்தப் பாங்குடன் வேறு பெண்களிடத்திலும் நீர் இவ்வாறு பழகுவீர்\" என்று கூறி, அவள் சினம் கொள்கின்றாள்.",
    altTranslation: "Though I do plead, she sulks: 'With others' beds you'll Such kindly nature show — I know your rule.' — Pope"
  },
  {
    num: 1320, chapter: 132,
    tamil: "நினைத்திருந்து நோக்கினும் காயும் அனைத்துநீர்\nயாருள்ளி நோக்கினீர் என்று.",
    transliteration: "Niṉaittiruntu nōkkiṉum kāyum aṉaittunīr\nyāruḷḷi nōkkiṉīr eṉṟu.",
    english: "Even when I gaze on her with admiring thought, she sulks, asking 'Whom were you thinking of when you gazed?'",
    tamilUrai: "(காதலன் கூறுகிறான்:) நான் அவளையே நினைத்து, அவளை நோக்கிக் கொண்டிருந்தாலும், \"இவ்வளவு நேரமாய், யாரை நினைத்து என்னை அவ்வாறு பார்த்தீர்?\" என்று கேட்டு, அவள் சினம் கொள்கின்றாள்.",
    altTranslation: "Even when I gaze on her with thoughtful eye, she sulks: 'Of whom didst think while gazing?' — thus she pulks. — Pope"
  },

  // CHAPTER 133 — The Pleasures of Temporary Variance
  {
    num: 1321, chapter: 133,
    tamil: "இல்லை தவறவர்க்கு ஆயினும் ஊடுதல்\nவல்லது அவர்அளிக்கு மாறு.",
    transliteration: "Illai tavaṟavark kāyiṉum ūṭutal\nValla tavarālai yāḷ.",
    english: "Even when he is faultless, sulking with him is sweetness owing to his charm.",
    tamilUrai: "(காதலி கூறுகிறாள்:) என் காதலரிடத்தில் ஒரு குற்றமும் இல்லாதிருந்த போதிலும், அவருடைய மென்மைத்தன்மையால், அவருடன் ஊடல் கொள்வதை விரும்புகிறேன்.",
    altTranslation: "Though faultless he be, yet 'tis sweet to sulk awhile, Such is his charm — it tempts to gentle smile. — Pope"
  },
  {
    num: 1322, chapter: 133,
    tamil: "ஊடலின் தோன்றும் சிறுதுனி நல்லளி\nவாடினும் பாடு பெறும்.",
    transliteration: "Ūṭaliṉ tōṉṟum ciṟutuṉi nallaḷi\nVāṭiṉum pāṭu peṟum.",
    english: "The slight pain that sulking brings, even if it withers love, brings its own sweetness.",
    tamilUrai: "ஊடலினால் ஏற்படும் சிறிய துன்பத்தினால், காதல் சிறிது வாட்டத்தை அடைந்தாலும், அந்த ஊடலுக்கு அதன் சொந்த மாட்சிமை உண்டு.",
    altTranslation: "The little pain from sulking gives its own grace; Though love seem withered, beauty graces face. — Pope"
  },
  {
    num: 1323, chapter: 133,
    tamil: "புலத்தலின் புத்தேள்நாடு உண்டோ நிலத்தொடு\nநீரியைந் தன்னார் அகத்து.",
    transliteration: "Pulattaliṉ puttēḷnāṭu uṇṭō nilattoṭu\nNīriyain taṉṉār akattu.",
    english: "Is there a heaven of the gods better than the sulking together of those whose love mingles like land and water?",
    tamilUrai: "நிலமும் நீரும் ஒன்று கலந்து இருப்பது போன்று மிகப் பொருந்தி இருக்கும் தலைவர் தலைவியர் இடையில் ஏற்படும் ஊடலை விட, தேவர் உலகத்தின் இன்பமும் மேலானதோ?",
    altTranslation: "Sweeter than heaven of gods is sulking shared, By those whose loves like earth and water mixed are paired. — Pope"
  },
  {
    num: 1324, chapter: 133,
    tamil: "புல்லி விடாஅப் புலவியுள் தோன்றுமென்\nஉள்ளம் உடைக்கும் படை.",
    transliteration: "Pulli viṭāap pulaviyuḷ tōṉṟumeṉ\nUḷḷam uṭaikkum paṭai.",
    english: "Within sulking that ends not in embrace, there appears a weapon that breaks down my heart.",
    tamilUrai: "தழுவி, தழுவலை விடாதிருக்கிற காலத்தில் தோன்றும் ஊடலின் உள்ளே, என் மனதின் கடினத்தை உடைத்து தழுவலுக்கு இடம் தரும் ஆயுதம் ஒன்று உள்ளது.",
    altTranslation: "In sulks unbroken by embrace, there hides A weapon that breaks the heart and turns aside. — Pope"
  },
  {
    num: 1325, chapter: 133,
    tamil: "தவறிலர் ஆயினும் தாம்வீழ்வார் மென்றோள்\nஅகறலின் ஆங்கொன் றுடைத்து.",
    transliteration: "Ūṭaliṉ uṇṭāṅkōr tuṉpam puṇarvatu\nNīṭuva taṉṟukol eṉṟu.",
    english: "Even in the sulking lovers' quarrel there is a pang — that the joy of reunion may not last.",
    tamilUrai: "ஊடலில் ஒரு துன்பம் உண்டு — மீண்டும் கூடுகின்ற இன்பம் நீண்ட காலம் நீடியிருக்குமா என்ற அச்சம் ஏற்படுவதால்.",
    altTranslation: "In lovers' quarrels there's a certain pain; 'Will joy of union be not long to gain?' — Pope"
  },
  {
    num: 1326, chapter: 133,
    tamil: "உணலினும் உண்டது அறல்இனிது காமம்\nபுணர்தலின் ஊடல் இனிது.",
    transliteration: "Uṇaliṉum uṇṭatu aṟaliṉitu kāmam\nPuṇartaliṉ ūṭal iṉitu.",
    english: "Sweeter than eating is the digestion of food eaten; sweeter than union in love is sulking together.",
    tamilUrai: "உண்பதை விட, ஏற்கனவே உண்ட உணவு செரித்தல் இனிமையாய் இருப்பது போல, காதலில் கூடுவதைவிட, ஊடல் கொள்வது இனிமையாய் இருக்கும்.",
    altTranslation: "Sweeter than food is its digestion done; In love, the sulk than union has more fun. — Pope"
  },
  {
    num: 1327, chapter: 133,
    tamil: "ஊடலில் தோற்றவர் வென்றார் அதுமன்னும்\nகூடலிற் காணப் படும்.",
    transliteration: "Ūṭalil tōṟṟavar veṉṟār atumaṉṉum\nKūṭaliṟ kāṇap paṭum.",
    english: "Those who lose in sulking are the true winners, as is seen by the joy of reunion that follows.",
    tamilUrai: "ஊடலில் தோற்றவராய் தோன்றுகிறவர்களே உண்மையில் வென்றவர்களாவர்; அந்த உண்மையை, மீண்டும் கூடிய பின்வரும் இன்பத்தில் காண முடியும்.",
    altTranslation: "In sulks the loser is the true winner found, As shown when joy of union doth abound. — Pope"
  },
  {
    num: 1328, chapter: 133,
    tamil: "ஊடிப் பெறுகுவம் கொல்லோ நுதல்வெயர்ப்பக்\nகூடலில் தோன்றிய உப்பு.",
    transliteration: "Ūṭip peṟukuvam kollō nutalveyarppak\nKūṭalil tōṉṟiya uppu.",
    english: "Shall we ever again obtain by sulking, the salt that arises in union when the brow grows damp with sweat?",
    tamilUrai: "(காதலன் கூறுகிறான்:) நெற்றி வியர்க்கின்ற கூடலில் ஏற்படுகின்ற இனிய உப்பு போன்ற சுவையை, மீண்டும் ஊடல் கொள்வதன் வழி நாம் பெறுவோமா?",
    altTranslation: "Shall we again, by sulks, obtain the salt-like grace That springs in union when sweat dews the face? — Pope"
  },
  {
    num: 1329, chapter: 133,
    tamil: "ஊடுக மன்னோ ஒளியிழை யாமிரப்ப\nநீடுக மன்னோ இரா.",
    transliteration: "Ūṭuka maṉṉō oḷiyiḻai yāmirappa\nNīṭuka maṉṉō irā.",
    english: "Let her sulk, the bright-jeweled one; let the night be long, that I may plead with her.",
    tamilUrai: "(காதலன் கூறுகிறான்:) என் ஒளி வீசும் அணிகலன்களை அணிந்த காதலி, ஊடல் கொள்வாளாக; அந்த ஊடலைத் தீர்க்க நான் அவளை வேண்டுவதற்கும், இரவின் நேரம் நீண்டதாய் அமைவதாக.",
    altTranslation: "Let her, my jewelled love, but sulk; and may The night last long, while I implore her gracious sway. — Pope"
  },
  {
    num: 1330, chapter: 133,
    tamil: "ஊடுதல் காமத்திற்கு இன்பம் அதற்கின்பம்\nகூடி முயங்கப் பெறின்.",
    transliteration: "Ūṭutal kāmattiṟku iṉpam ataṟkiṉpam\nKūṭi muyaṅkap peṟiṉ.",
    english: "Sulking is the delight of love; and the delight of sulking is to come together again in embrace.",
    tamilUrai: "ஊடல் கொள்வது காதலுக்கு இன்பம் தருவதாகும்; அந்த ஊடலுக்குப் பிறகு கூடிச் சேர்ந்தால் அந்த இன்பம் இன்னும் பெருகும்.",
    altTranslation: "A 'feigned aversion' coy to pleasure gives a zest; The pleasure's crowned when breast is clasped to breast. — Pope"
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.THIRUKKURAL_DATA = { sections: THIRUKKURAL_SECTIONS, chapters: CHAPTERS, kurals: KURALS };
}
