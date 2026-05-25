// =============================================================================
// நல்வழி · Nalvazhi by Avvaiyar
// 40 ethical verses on the good path
// 5-layer presentation: Tamil, transliteration, English meaning, Tamil urai, alt translation
// =============================================================================

const NALVAZHI_VERSES = [
  {
    num: 1,
    tamil: "உண்பது நாழி; உடுப்பது நான்குமுழம்;\nதண்டுடை கோலோர் தனிவேந்தர் — மண்டலத்துத்\nதிண்மை யுடையார் திறல்வாழ்வர்; மற்றவர்\nபண்மை இழப்பர் பட்டு.",
    transliteration: "Uṇpatu nāḻi; uṭuppatu nāṉkumuḻam;\ntaṇṭuṭai kōlōr taṉivēntar — maṇṭalattut\ntiṇmai yuṭaiyār tiṟalvāḻvar; maṟṟavar\npaṇmai iḻappar paṭṭu.",
    english: "One eats but a measure; wears but four cubits of cloth. Rulers with the staff are lone kings of their domain. The resolute live with vigour; others lose their worth on the spot.",
    tamilUrai: "ஒருவன் சாப்பிடுவது ஒரு நாழி தானிய அளவே. உடுப்பது நான்கு முழம் துணி மட்டுமே. தண்டம் — கோல் — ஏந்திய மன்னர்கள் தம் நாட்டிற்கு தனித் தலைவர்கள். திடமான மனம் உடையவர்கள் வலிமையுடன் வாழ்வார்கள். மற்றவர்கள் தம் பண்பை உடனே இழப்பார்கள்.",
    altTranslation: "A man eats but a measure, wears but four yards — yet kings rule alone. The steadfast thrive; the rest lose their worth."
  },
  {
    num: 2,
    tamil: "கல்லாத மாந்தர் கழிப்பர் உலகத்தை;\nவல்லாயர் என்றும் வருந்தார்; அறிவிலார்\nசொல்லால் பிறர்க்கு துன்பம் செய்வர்; நல்லோர்\nகல்வி கரையில கற்று.",
    transliteration: "Kallāta māntaṟ kaḻippar ulakatttai;\nvallāyar eṉṟum varuntār; aṟivilār\ncollāl piṟarkku tuṉpam ceyvār; nallōr\nkalvi kaṟaiyila kaṟṟu.",
    english: "The unlearned will waste away their life in the world; the capable never suffer; the ignorant cause pain to others by their words; the good study learning that has no shore.",
    tamilUrai: "கல்லாதவர்கள் வாழ்க்கையை வீணாக்கி கழிப்பார்கள். திறமையானவர்கள் எப்போதும் வருந்த மாட்டார்கள். அறியாதவர்கள் வார்த்தைகளால் பிறருக்கு துன்பம் தருவார்கள். நல்லவர்கள் கரையில்லாத கல்வியை கற்று வாழ்வார்கள்.",
    altTranslation: "The unlearned waste their lives; the capable endure; the ignorant wound with words; the good study learning without shore."
  },
  {
    num: 3,
    tamil: "அன்போடு இயைந்த வழக்கென்ப; ஆர்வலர்\nபண்போடு ஒழுகப் படும்; வலிய தீவினை\nஒண்பொருளால் நீங்கும்; ஒருதலையாப் பேதைமை\nகண்டார் கழறுவர் கண்டு.",
    transliteration: "Aṉpōṭu iyainta vaḻakkeṉpa; ārvalar\npaṇpōṭu oḻukap paṭum; valiya tīviṉai\noṇporuḷāl nīṅkum; orutalaiyāp pētaimai\nkaṇṭār kaḻaṟuvar kaṇṭu.",
    english: "Conduct united with love is called true practice; the earnest must act with character; even strong evil deeds depart with bright merit; those who see one-sided folly will rebuke it.",
    tamilUrai: "அன்போடு கூடிய நடவடிக்கையே உண்மையான வழக்கம். ஆர்வமுள்ளவர்கள் குணத்துடன் நடக்க வேண்டும். வலிமையான தீவினைகளும் நல்ல செயல்களால் நீங்கும். ஒரு பக்கமாக பேதைமை உடையவர்களை கண்டவர்கள் கடிவார்கள்.",
    altTranslation: "True conduct is joined with love; the zealous must act with character; even heavy sin yields to merit; the one-sided fool is rebuked by all who see."
  },
  {
    num: 4,
    tamil: "ஒருவர்க்கு ஒருவர் உதவல் வேண்டும்;\nஒருவர்க்கு ஒருவர் உதவாவிடில்\nஒருவர்க்கு ஒருவர் ஏதிலர் ஆவர்;\nஒருவர் தாமே ஒழிவர்.",
    transliteration: "Oruvarku oruvar utaval vēṇṭum;\noruvarku oruvar utavāviṭil\noruvarku oruvar ētilār āvar;\noruvar tāmē oḻivar.",
    english: "Each person must help another. If each does not help the other, they will become strangers to each other, and will end up alone.",
    tamilUrai: "மனிதர்கள் ஒருவருக்கொருவர் உதவி வாழ வேண்டும். உதவி செய்யாவிட்டால் ஒருவர் மற்றவருக்கு அந்நியர் ஆவார்கள். கடைசியில் தனிமையிலேயே தவிப்பார்கள்.",
    altTranslation: "Each must help the other; if not, each becomes a stranger to the other, and stands alone."
  },
  {
    num: 5,
    tamil: "செய்யாத செய்யேல்; செய்தால் திருவிலை;\nமெய்யன்று என்று ஓரேல் — மேன்மை உடையவர்\nவைது ஒழுகாவர்; வலிந்து செய்யார்; மற்றவர்\nமொய்த்து ஒழுகார் முன்.",
    transliteration: "Ceyyāta ceyyēl; ceytāl tiruvilai;\nmeyyaṉṟu eṉṟu ōrēl — mēṉmai uṭaiyavar\nvaitoḻukāvar; valintu ceyyār; maṟṟavar\nmoyttoḻukār muṉ.",
    english: "Do not do what should not be done; if done, it yields no prosperity. Do not think it is not real. The great will not revile; they do not act by force; others do not swarm before them.",
    tamilUrai: "செய்யக்கூடாதவற்றை செய்யாதே. செய்தாலும் அதனால் நலம் வராது. உண்மையல்ல என்று ஒதுக்காதே. மேன்மையானவர்கள் திட்டி நடக்க மாட்டார்கள், வற்புறுத்தி செய்வதில்லை.",
    altTranslation: "Do not what ought not to be done; if done, it brings no good. The great neither revile nor force; none crowd before them."
  },
  {
    num: 6,
    tamil: "நட்பொரால் நண்ணார்; நட்ட பின் நண்ணார்;\nகட்புரவி கண்டு கவலையுறார்; மட்டு அற்ற\nவன்மை யுடையார் வலி பாரார்; மாந்தர்க்கு\nஉன்மை யுடையார் உறும்.",
    transliteration: "Naṭporāl naṇṇār; naṭṭa piṉ naṇṇār;\nkaṭpuravi kaṇṭu kavalaiuṟār; maṭṭu aṟṟa\nvaṉmai yuṭaiyār vali pārār; māntarkku\nuṉmai yuṭaiyār uṟum.",
    english: "They do not approach through friendship alone; nor approach after having been befriended. Seeing a war-horse, they do not despair. The boundlessly strong do not look to force. Those with truth become companions to people.",
    tamilUrai: "நட்பை ஒட்டி மட்டும் நெருங்காதவர்கள். நட்பு கொண்ட பிறகும் அதை கட்டுக்காட்டாமல் நிற்கின்றனர். போர் குதிரை கண்டு கலங்காதவர்கள். அளவிலா வலிமையுடையவர்கள் பலத்தை நம்பமாட்டார்கள். உண்மை உடையவர்களே மக்களுக்கு உற்றவர்கள் ஆவார்கள்.",
    altTranslation: "They draw near not through mere friendship; nor depend on it after. The truly strong rely not on force; those with truth become companions to all."
  },
  {
    num: 7,
    tamil: "மன்னவன் செங்கோல் மறைந்தக்கால் — மாரி இல்;\nதன்னம்பிக்கை தான் குறைந்தக்கால் — உயிர் இல்;\nமின்னும் அறிவு மறைந்தக்கால் — வீடு இல்;\nமுன்னோர் மொழி மறந்தக்கால் — நன்மை இல்.",
    transliteration: "Maṉṉavaṉ ceṅkōl maṟaintakkāl — māri il;\ntaṉṉampikkai tāṉ kuṟaintakkāl — uyir il;\nmiṉṉum aṟivu maṟaintakkāl — vīṭu il;\nmuṉṉōr moḻi marantakkāl — naṉmai il.",
    english: "When the king's just sceptre is hidden — there is no rain. When self-confidence diminishes — there is no life. When brilliant knowledge is concealed — there is no liberation. When the words of ancestors are forgotten — there is no good.",
    tamilUrai: "மன்னன் நீதி வழுவினால் மழை வராது. தன்னம்பிக்கை குறைந்தால் வாழ்வு இல்லை. ஒளிரும் அறிவு மறைந்தால் வீடுபேறு இல்லை. முன்னோர் வார்த்தை மறந்தால் நலம் இல்லை.",
    altTranslation: "When justice bends — no rain. When confidence fails — no life. When wisdom hides — no liberation. When elders' words are forgotten — no good remains."
  },
  {
    num: 8,
    tamil: "வானம் வழங்கில் — வளம் வழங்கும்;\nமன்னவன் செங்கோல் வழங்கில் — நீதி வழங்கும்;\nதேனும் மலரும் — திருமணம் வழங்கும்;\nகோனும் குடிகளும் — கூடி வழங்கினால்.",
    transliteration: "Vāṉam vaḻaṅkil — vaḷam vaḻaṅkum;\nmaṉṉavaṉ ceṅkōl vaḻaṅkil — nīti vaḻaṅkum;\ntēṉum malarum — tirummaṇam vaḻaṅkum;\nkōṉum kuṭikaḷum — kūṭi vaḻaṅkiṉāl.",
    english: "When the sky gives rain — abundance flows. When the king's sceptre holds — justice flows. When honey and flower — auspice flows. When king and people come together and give.",
    tamilUrai: "வானம் மழை தந்தால் வளம் வரும். மன்னன் நீதி காத்தால் நியாயம் நிலைக்கும். தேனும் மலரும் இணைந்தால் நலம் நிலைக்கும். அரசனும் குடிமக்களும் ஒன்றாக கொடுத்தால் எல்லாம் நன்றாக இருக்கும்.",
    altTranslation: "Rain brings abundance; a just sceptre brings justice; honey and flower bring auspice; king and people together bring all good."
  },
  {
    num: 9,
    tamil: "அன்பு இல்லார் இல்லம் — அரும் தவ வேடம்;\nமன்பதை இல்லார் மனம் — மாண்பு இல்லாது;\nதன்பொருள் சேராத தர்மம் — சிரிப்பு;\nமன்னவன் ஆள்வது — மண்டலம் புகழ்.",
    transliteration: "Aṉpu illār illam — arum tava vēṭam;\nmaṉpatai illār maṉam — māṇpu illātu;\ntaṉporuḷ cērāta tarmam — ciripu;\nmaṉṉavaṉ āḷvatu — maṇṭalam pukaḻ.",
    english: "A home without love is merely a form of austere penance. A mind without humanity has no worth. Charity that does not reach one's own pocket is a joke. A king's rule is the glory of the domain.",
    tamilUrai: "அன்பு இல்லாத வீடு கடுந்தவம் செய்யும் இடம் போன்றது. மனிதாபிமானம் இல்லாத மனம் மதிப்பற்றது. தம் உழைப்பிலிருந்து செய்யாத தர்மம் சிரிப்பிற்குரியது. மன்னனின் ஆட்சியே நாட்டின் புகழ்.",
    altTranslation: "A loveless home is mere penance; a heartless mind has no worth; charity without self-giving is a joke; royal rule is the glory of the land."
  },
  {
    num: 10,
    tamil: "கற்றது கைம்மேல் வரும் கல்வி;\nதெற்றென விளங்கும் — தெளிவுடன் கற்பின்;\nமற்றவரோடு ஒவ்வாமல் மாண்பு கொள்க;\nபெற்றதை மறவேல் — பெரியோர்க்கு ஒப்பாய்.",
    transliteration: "Kaṟṟatu kaimmel varum kalvi;\nteṟṟeṉa viḷaṅkum — teḷivuṭaṉ kaṟpiṉ;\nmaṟṟavarōṭu ovvāmal māṇpu koḷka;\npeṟṟatai maṟavēl — periyōrkku oppāy.",
    english: "Learning that has been learnt comes readily to hand. It will shine brightly if studied with clarity. Hold to distinction without competing with others. Forget not what you have received — be the equal of the great.",
    tamilUrai: "கற்ற கல்வி எப்போதும் உதவும். தெளிவுடன் கற்றால் பிரகாசிக்கும். பிறருடன் போட்டி போடாமல் தனித்துவம் கொள்க. பெற்ற அனுகிரகத்தை மறவாதே — பெரியோருக்கு நிகராய் இரு.",
    altTranslation: "Learning at hand shines when studied clearly. Hold to distinction without rivalry; forget not what you've received — be equal to the great."
  },
  {
    num: 11,
    tamil: "தன்னை அறிந்தோன் — தகைமையோன்;\nதன்னை அறியாதோன் — தாழ்ந்தோன்;\nமன்னை அறிந்தோன் — மாண்பினோன்;\nமன்னை மறந்தோன் — மடவோன்.",
    transliteration: "Taṉṉai aṟintōṉ — takaimaiyōṉ;\ntaṉṉai aṟiyātōṉ — tāḻntōṉ;\nmaṉṉai aṟintōṉ — māṇpiṉōṉ;\nmaṉṉai marantōṉ — maṭavōṉ.",
    english: "One who knows the self is worthy. One who does not know the self is fallen. One who knows the king is distinguished. One who has forgotten the king is a fool.",
    tamilUrai: "தன்னை அறிந்தவன் தகுதியான மனிதன். தன்னை அறியாதவன் தாழ்ந்தவன். மன்னனை அறிந்தவன் மதிப்பானவன். தலைவரை மறந்தவன் மடையன்.",
    altTranslation: "He who knows himself is worthy; who does not is fallen. He who knows his king is distinguished; who forgets — a fool."
  },
  {
    num: 12,
    tamil: "ஆடல் அழகு; பாடல் இன்பம்;\nதேடல் அறிவு; கேடல் தவிர்;\nவாடல் இல்லா மலர்போல் வாழ்;\nஈடின்மை என்று ஒரு நாளும் நினையேல்.",
    transliteration: "Āṭal aḻaku; pāṭal iṉpam;\ntēṭal aṟivu; kēṭal tavir;\nvāṭal illā malarpōl vāḻ;\nīṭiṉmai eṉṟu oru nāḷum niṉaiyēl.",
    english: "Dance is beauty; song is joy; seeking is wisdom; avoid ruin; live like a flower that does not wilt; never think for a day that you have no equal.",
    tamilUrai: "நாட்டியம் அழகு தருகிறது. பாட்டு இன்பம் தருகிறது. தேடுதல் அறிவை தருகிறது. கேடான வழியை தவிர். வாடாத மலர் போல் வாழ். தனக்கு ஈடு இல்லை என்று ஒரு நாளும் நினைக்காதே — அகந்தை வேண்டாம்.",
    altTranslation: "Dance is beauty; song is joy; seeking is knowledge; shun ruin; live like a flower that will not wilt; never consider yourself without equal."
  },
  {
    num: 13,
    tamil: "கொடுப்பது அறம்; கொள்வது மறம்;\nதொடுப்பது நட்பு; தொடாமை பகை;\nநடப்பது வாழ்வு; நில்லாமை மரணம்;\nகடப்பது வினை; கடவாமை நிலை.",
    transliteration: "Koṭuppatu aṟam; koḷvatu maṟam;\ntoṭuppatu naṭpu; toṭāmai paka;\nnaṭappatu vāḻvu; nillāmai maraṇam;\nkaṭappatu viṉai; kaṭavāmai nilai.",
    english: "Giving is virtue; taking is transgression. Reaching out is friendship; not reaching is enmity. Moving forward is life; standing still is death. Crossing over karma is duty; not crossing it is the state of being bound.",
    tamilUrai: "கொடுப்பதே அறம்; பறித்து வாழ்வது மறம். தொடர்பு கொள்வது நட்பு; தொடாமல் இருப்பது பகை. முன்னேறுவதே வாழ்வு; நிற்பது மரணம். வினைகளை கடப்பது கடமை; கடக்காமல் இருப்பது கட்டுப்படுவது.",
    altTranslation: "Giving is virtue; taking is transgression. Reaching out is friendship; not reaching is enmity. Moving is life; stillness is death."
  },
  {
    num: 14,
    tamil: "உழவர்க்கு மழை துணை; உழைப்போர்க்கு உடல் துணை;\nதழைக்கும் குடிக்கு தலைவன் துணை;\nவழிக்கு ஒளி துணை; வாழ்வுக்கு அறம் துணை;\nகழிவு இல்லார்க்கு கல்வியே துணை.",
    transliteration: "Uḻavarku maḻai tuṇai; uḻaippōrkku uṭal tuṇai;\ntaḻaikkum kuṭikku talaivaṉ tuṇai;\nvaḻikku oḷi tuṇai; vāḻvukku aṟam tuṇai;\nkaḻivu illārkku kalviyē tuṇai.",
    english: "Rain is the companion of farmers; the body is the companion of workers; a leader is the companion of a flourishing community; light is the companion of the path; virtue is the companion of life; learning is the sole companion of those with nothing to lose.",
    tamilUrai: "விவசாயிக்கு மழை துணை. உழைப்பவருக்கு உடல் ஆரோக்கியம் துணை. வளரும் குடிகளுக்கு நல்ல தலைவன் துணை. வழிக்கு ஒளி துணை. வாழ்க்கைக்கு அறம் துணை. எல்லாம் இழந்தவருக்கு கல்வியே துணை.",
    altTranslation: "Rain for the farmer; health for the worker; a leader for the community; light for the path; virtue for life; learning for those who have lost all else."
  },
  {
    num: 15,
    tamil: "மதிப்பிற்கு வேண்டும் மனநிறை;\nகதிக்கு வேண்டும் கடவுள் நம்பிக்கை;\nவிதிக்கு வேண்டும் முயற்சி மேலோர்க்கு;\nபதிக்கு வேண்டும் பண்பு உடையோர்.",
    transliteration: "Matippirkku vēṇṭum maṉa niṟai;\nkatikku vēṇṭum kaṭavuḷ nampikkai;\nvitikku vēṇṭum muyaṟci mēlōrkku;\npatikku vēṇṭum paṇpu uṭaiyōr.",
    english: "Contentment of mind is needed for dignity. Faith in God is needed for progress. Effort is needed for fate's turning by the great. People of character are needed for a settlement.",
    tamilUrai: "மரியாதை பெற மனநிறைவு வேண்டும். நல்வழியில் செல்ல இறைவன் மீது நம்பிக்கை வேண்டும். விதியை மாற்ற மேன்மையானவர்களுக்கு முயற்சி வேண்டும். ஒரு நாட்டிற்கு குணமுடையவர்கள் வேண்டும்.",
    altTranslation: "Dignity needs inner fullness; progress needs faith; changing fate needs effort; a good land needs people of character."
  },
  {
    num: 16,
    tamil: "நல்வழி நடப்போர் நரகம் காணார்;\nகல்வி கற்போர் கவலை படார்;\nதொல்லைப் பகைவர் துன்பம் செய்யார்;\nவல்லவர் வழியே வாழ்வர் நல்லோர்.",
    transliteration: "Nalvaḻi naṭappōr narakam kāṇār;\nkalvi kaṟpōr kavalai paṭār;\ntollaip pakaivar tuṉpam ceyyār;\nvallavar vaḻiyē vāḻvar nallōr.",
    english: "Those who walk the good path will not see hell. Those who study will not worry. Ancient enemies will not cause harm. The good will live only the way the capable live.",
    tamilUrai: "நல்வழியில் நடப்பவர்கள் நரகம் அடைய மாட்டார்கள். கல்வி கற்றவர்கள் கவலைப்பட மாட்டார்கள். பழைய பகைவர்கள் துன்பம் செய்ய மாட்டார்கள். நல்லவர்கள் திறமையானவர்களின் வழியிலேயே வாழ்வார்கள்.",
    altTranslation: "Those on the good path see no hell; the learned have no anxiety; old enemies do no harm; the good live only as the capable live."
  },
  {
    num: 17,
    tamil: "அன்பு செய் என்பதன்று; அன்புசெய் என்பதன்று;\nமன்புகழ் வழி நட என்பதன்று;\nவென்று உலகில் விளங்க வேண்டுவோர்\nஒன்றே கருதுவர் ஊழ் அறிவோர்.",
    transliteration: "Aṉpu cey eṉpatanṟu; aṉpucey eṉpatanṟu;\nmaṉpukaḻ vaḻi naṭa eṉpatanṟu;\nveṉṟu ulaKil viḷaṅka vēṇṭuvōr\noṉṟē karutuvār ūḻ aṟivōr.",
    english: "It is not that you should love; it is not that you should love; it is not that you should walk the path of glory. Those who wish to shine victorious in the world hold only one thought — those who know fate.",
    tamilUrai: "அன்பு செய், புகழ் தேடு என்று திணிப்பதல்ல. விதியை அறிந்தவர்கள் வாழ்வில் வெற்றிகரமாக விளங்க ஒரே ஒரு கருத்தில் நிலைத்திருப்பார்கள் — அதுவே அவர்களின் நோக்கம்.",
    altTranslation: "Those who know fate and wish to shine hold to one single thought — not mere love, not mere glory."
  },
  {
    num: 18,
    tamil: "ஊரான் இகழ்ந்தாலும் ஒப்புக்கொள்; உண்மை\nபேராளர் கூறினும் பேணி ஒழுகு;\nதூராத அன்பு துணை ஆகும்; வேரூன்று\nவாராத நன்மை வழங்கும் பின்.",
    transliteration: "Ūrāṉ ikaḻntālum oppukkkoḷ; uṇmai\npērāḷar kūṟiṉum pēṇi oḻuku;\ntūrāta aṉpu tuṇai ākum; vērūṉṟu\nvārāta naṉmai vaḻaṅkum piṉ.",
    english: "Even if the villager scorns you, accept it. Even if a great person speaks the truth, listen and conduct yourself accordingly. Undying love becomes a support. Rooted virtue will yield good things later.",
    tamilUrai: "ஊரினர் இகழ்ந்தாலும் அதை ஏற்று திருத்திக்கொள். பெரியவர்கள் உண்மை சொன்னாலும் அதை கேட்டு நடந்துகொள். அழியாத அன்பு துணையாக வரும். வேரூன்றிய நன்மை பின்னர் பலன் தரும்.",
    altTranslation: "Accept the village's rebuke; heed even great people's truth; undying love will sustain; rooted virtue yields in time."
  },
  {
    num: 19,
    tamil: "பழுத்தவர்க்கு உரையேல்; பண்பிலர்க்கு அகலு;\nகழுத்தினால் அறியார் — கண்ணிலர்;\nவழுத்துவோர்க்கு உரைக்கும் வல்லவர் — வலியால்\nதொழுவோர் தொழும் தெய்வம் ஆவர்.",
    transliteration: "Paḻuttavarku uraiyēl; paṇpilarku akalu;\nkaḻuttinīl aṟiyār — kaṇṇilar;\nvaḻuttuvōrkku uraikkum vallavar — valiyāl\ntoḻuvōr toḻum teyvam āvar.",
    english: "Do not speak to the ripened-wise as if you know; distance yourself from the graceless. Those without eyes do not know by the throat. The capable who speak to the worshipping become the god whom the devout worship.",
    tamilUrai: "முதிர்ந்தவர்களிடம் தெரிந்தது போல் பேசாதே. குணமற்றவர்களிடம் விலகி இரு. கண்ணில்லாதவர்கள் தொண்டையால் அறிய மாட்டார்கள். வணங்குவோருக்கு உண்மை சொல்பவர் தெய்வமாவார்.",
    altTranslation: "Speak not to the wise as if you know; keep away from the graceless; those who truly speak to the devout become their very god."
  },
  {
    num: 20,
    tamil: "நல்லவர் நண்பர்கள் நாட்டம் கொண்டோர்;\nவல்லவர் வழியில் வாழ்வர் நல்லோர்;\nசொல்லவர் சொன்னது சோர்வு படார்;\nகல்லவர் கல்வி கரையில கற்று.",
    transliteration: "Nallavar naṇparkaḷ nāṭṭam koṇṭōr;\nvallavar vaḻiyil vāḻvar nallōr;\ncolavar conṉatu cōrvu paṭār;\nkallavar kalvi kaṟaiyila kaṟṟu.",
    english: "Friends of the good are those who have desire for it. The good live only in the way of the capable. Those who speak what they have said do not falter. Those who learn study learning without shore.",
    tamilUrai: "நல்லவர்களின் நண்பர்கள் அவர்களை விரும்பி நாடுபவர்கள். நல்லவர்கள் திறமையானவர்கள் வழியிலேயே வாழ்வார்கள். சொன்னதை செய்பவர்கள் சோர்வடைய மாட்டார்கள். கற்றவர்கள் கரையில்லாத கல்வியை கற்று கொண்டே இருப்பார்கள்.",
    altTranslation: "Good people's friends are those who seek them; the good live the capable's way; those true to their word never falter; learners study without shore."
  },
  {
    num: 21,
    tamil: "அறிவுடை யாளர் அகத்தே இருக்க;\nவெறுமை உடையவர் வீட்டிலே இருக்க;\nகுறிக்கோள் உடையவர் குன்றேறி நிற்க;\nமறவர் மண்டலத்தில் மாண்பு கொள்க.",
    transliteration: "Aṟivuṭai yāḷar akattē irukka;\nveṟumai uṭaiyavar vīṭṭilē irukka;\nkuṟikkōḷ uṭaiyavar kuṉṟēṟi niṟka;\nmaṟavar maṇṭalattil māṇpu koḷka.",
    english: "Let the wise dwell within. Let the empty dwell in the house. Let those with purpose stand on the hill. Let the brave hold distinction in the domain.",
    tamilUrai: "அறிவுடையவர்கள் உள்ளத்தில் வாழட்டும். வெற்றிடமுடையவர்கள் வீட்டிலேயே இருட்டும். குறிக்கோளுடையவர்கள் உயர்ந்த இடத்தில் நிற்கட்டும். வீரர்கள் நாட்டில் மரியாதை பெறட்டும்.",
    altTranslation: "Let the wise dwell within; the hollow stay home; those with purpose rise to the heights; the brave claim distinction in the land."
  },
  {
    num: 22,
    tamil: "செல்வம் சிறக்க — செய்யும் அறம்;\nகல்வி சிறக்க — கற்ற விரதம்;\nவில்வலன் சிறக்க — வெல்லும் வீரம்;\nநல்வழி சிறக்க — நடக்கும் ஒழுக்கம்.",
    transliteration: "Celvam ciṟakka — ceyyum aṟam;\nkalvi ciṟakka — kaṟṟa viratam;\nvilvalaṉ ciṟakka — vellum vīram;\nnalvaḻi ciṟakka — naṭakkum oḻukkam.",
    english: "For wealth to flourish — virtue through action. For learning to flourish — the vow of the learned. For the archer to excel — the courage that conquers. For the good path to flourish — the conduct that walks it.",
    tamilUrai: "செல்வம் வளர செய்யும் அறம் வேண்டும். கல்வி வளர கற்கும் உறுதி வேண்டும். வில்லாளி சிறக்க வெற்றி தரும் வீரம் வேண்டும். நல்வழி சிறக்க நடக்கும் ஒழுக்கம் வேண்டும்.",
    altTranslation: "Wealth grows through virtue; learning through the vow to learn; the archer through courage; the good path through conduct that walks it."
  },
  {
    num: 23,
    tamil: "பற்று விடு — பந்தம் போம்;\nதிற்று விடு — திறல் பெறும்;\nகற்று விடு — கல்வி பெறும்;\nமற்று விடு — மனம் தெளியும்.",
    transliteration: "Paṟṟu viṭu — pantam pōm;\ntiṟṟu viṭu — tiṟal peṟum;\nkaṟṟu viṭu — kalvi peṟum;\nmaṟṟu viṭu — maṉam teḷiyum.",
    english: "Release attachment — bondage departs. Release constriction — capability is gained. Release through learning — knowledge is gained. Release the rest — the mind becomes clear.",
    tamilUrai: "பற்றை விட்டால் கட்டுகள் போகும். அடக்கி வைப்பதை விட்டால் திறமை வரும். கற்று கற்று விட்டால் கல்வி கிட்டும். மற்றதை எல்லாம் விட்டுவிட்டால் மனம் தெளிவடையும்.",
    altTranslation: "Release attachment — bondage goes. Release the confined — capability comes. Study and let go — knowledge comes. Release all else — the mind clears."
  },
  {
    num: 24,
    tamil: "தீயவர் தீமை செய்வர்; நல்லவர்\nநோயவர் நோவு செய்வர்; நல்லது\nவாயவர் வாய்மை பேசுவர்; மறந்தோர்\nதாயவர் தாழ்வுசெய்வர் தாம்.",
    transliteration: "Tīyavar tīmai ceyvār; nallavar\nnōyavar nōvu ceyvār; nallatu\nvāyavar vāymai pēcuvār; marantōr\ntāyavar tāḻvuceyvar tām.",
    english: "The wicked do evil. Those of good quality who are suffering cause pain. Those whose mouths hold good speak truth. Those who have forgotten — those who depend — will bring themselves low.",
    tamilUrai: "தீயவர்கள் தீமையே செய்வார்கள். நல்லவர்களில் நோயுடையவர்கள் வலியை உண்டாக்குவார்கள். நல்லது வாய்ந்தவர்கள் உண்மையே பேசுவார்கள். மறந்தவர்கள், சார்ந்தவர்கள் தாழ்வை தாமே உண்டாக்கிக்கொள்வார்கள்.",
    altTranslation: "The wicked do evil; the noble in suffering cause hurt; those with truth speak truly; those who forget and cling bring their own downfall."
  },
  {
    num: 25,
    tamil: "இனியவன் என்று நம்பேல் — உறவை;\nகனியவன் என்று நம்பேல் — காயை;\nமனியவன் என்று நம்பேல் — மனத்தை;\nதனியவன் என்று நம்பேல் — தன்னை.",
    transliteration: "Iṉiyavaṉ eṉṟu nampēl — uṟavai;\nkaṉiyavaṉ eṉṟu nampēl — kāyai;\nmaṉiyavaṉ eṉṟu nampēl — maṉattai;\ntaṉiyavaṉ eṉṟu nampēl — taṉṉai.",
    english: "Do not trust a relative just because he seems sweet. Do not trust a fruit just because it is ripe. Do not trust the mind just because it is rich. Do not trust the self just because it stands alone.",
    tamilUrai: "இனியவன் என்று உறவை மட்டுமே நம்பாதே. பழுத்தது என்று காயை நம்பாதே. மணம் கொண்டது என்று மனதை நம்பாதே. தனிமையில் நிற்கிறது என்று தன்னை நம்பாதே — சோதனை வரும்போது புரியும்.",
    altTranslation: "Trust not kin for sweetness; trust not the unripe; trust not the mind for richness; trust not the lone self — test and then trust."
  },
  {
    num: 26,
    tamil: "உலகில் மூன்றே இன்பம்;\nகலைகள் கற்றல் — ஒன்று;\nமலைகள் காண்டல் — இரண்டு;\nவலையில் வாழ்தல் — மூன்று.",
    transliteration: "Ulakal mūṉṟē iṉpam;\nkalakaḷ kaṟṟal — oṉṟu;\nmalakaḷ kāṇṭal — iraṇṭu;\nvalaiyil vāḻtal — mūṉṟu.",
    english: "In the world there are three joys: learning the arts — one; seeing the mountains — two; living in the net of life — three.",
    tamilUrai: "உலகில் மூன்றே உண்மையான இன்பங்கள். கலைகளை கற்பது ஒன்று. இயற்கை அழகை — மலைகளை — காண்பது இரண்டு. வலையில் — வாழ்க்கையின் பிணைப்பில் — வாழ்வது மூன்று.",
    altTranslation: "Three joys exist in this world: learning the arts; seeing the mountains; living in the net of life."
  },
  {
    num: 27,
    tamil: "அரசன் அழியும் — ஆட்சி தவறில்;\nவரையன் அழியும் — வரம்பு மீறில்;\nகரையன் அழியும் — கடல் கடந்தால்;\nமுரசன் அழியும் — முறை மீறில்.",
    transliteration: "Aracaṉ aḻiyum — āṭci tavaṟil;\nvaraiyal aḻiyum — varampu mīṟil;\nkaraiyaṉ aḻiyum — kaṭal kaṭantāl;\nmuracaṉ aḻiyum — muṟai mīṟil.",
    english: "The king perishes when his governance falters. The hill-man perishes when he crosses his boundary. The shore-man perishes when he crosses the sea. The drummer perishes when he violates propriety.",
    tamilUrai: "அரசன் ஆட்சி தவறினால் அழிவான். மலை வாழ்பவன் தன் எல்லை மீறினால் அழிவான். கரையோரத்தான் கடல் கடந்தால் அழிவான். முரசு அடிப்பவன் முறை மீறினால் அழிவான் — ஒவ்வொருவரும் தன் நிலையில் நடக்க வேண்டும்.",
    altTranslation: "A king falls when governance fails; the hill-man when he oversteps; the shoreman when he crosses the sea; each perishes when they leave their proper place."
  },
  {
    num: 28,
    tamil: "துப்பு ஆர் துணையும் — துறந்தவர்க்கு;\nஒப்பு ஆர் வழியும் — ஒழுகுவோர்க்கு;\nகொப்பு ஆர் நிழலும் — கொடையுடையோர்க்கு;\nதப்பா வினையும் — தவத்துடையோர்க்கு.",
    transliteration: "Tuppu ār tuṇaiyum — tuṟantavarku;\noppu ār vaḻiyum — oḻukuvōrkku;\nkoppu ār niḻalum — koṭaiyuṭaiyōrkku;\ntappā viṉaiyum — tavattṭaiyōrkku.",
    english: "The best support goes to those who have renounced. The most even path goes to those who conduct themselves rightly. The most sheltering shade goes to those who are generous. The unfailing karma goes to those who have penance.",
    tamilUrai: "சிறந்த துணை துறவியர்க்கு கிட்டும். சரியான வழி ஒழுக்கமுடையவர்களுக்கு தெரியும். நல்ல நிழல் தருபவர்களுக்கு கிட்டும். தவமுடையவர்களுக்கு விதி கூட வளைந்து கொடுக்கும்.",
    altTranslation: "The best support attends the renunciant; the easiest path the upright; the best shade the generous; the unavoidable karma the ascetic."
  },
  {
    num: 29,
    tamil: "நல்வழி நடந்தோர் — நரகம் காணார்;\nசொல்வழி நடந்தோர் — சோர்வு படார்;\nகல்வழி நடந்தோர் — கால் வழுவார்;\nவல்வழி நடந்தோர் — வாழ்வர் என்றும்.",
    transliteration: "Nalvaḻi naṭantōr — narakam kāṇār;\ncolvaḻi naṭantōr — cōrvu paṭār;\nkalvaḻi naṭantōr — kāl vaḻuvār;\nvalvaḻi naṭantōr — vāḻvar eṉṟum.",
    english: "Those who walk the good path will not see hell. Those who walk the spoken path will not falter. Those who walk on the rocky path will have feet slip. Those who walk the strong path will live forever.",
    tamilUrai: "நல்வழியில் நடப்பவர்கள் நரகம் காண மாட்டார்கள். கூறிய வழியில் நடப்பவர்கள் சோர்வடைய மாட்டார்கள். கல் நிறைந்த வழியில் நடப்பவர்கள் கால் சறுக்குவார்கள். வலிமையான வழியில் நடப்பவர்கள் என்றும் வாழ்வார்கள்.",
    altTranslation: "The good path: no hell. The right path: no faltering. The rocky path: feet slip. The strong path: life forever."
  },
  {
    num: 30,
    tamil: "அன்பு கொண்டு வாழ் — ஆயுள் நீட்டும்;\nவன்மை கொண்டு வாழ் — வலிமை தேய்க்கும்;\nதன்மை கொண்டு வாழ் — தரமேறும்;\nபண்மை கொண்டு வாழ் — பயன் தரும்.",
    transliteration: "Aṉpu koṇṭu vāḻ — āyuḷ nīṭṭum;\nvaṉmai koṇṭu vāḻ — valimai tēykkum;\ntaṉmai koṇṭu vāḻ — taramēṟum;\npaṇmai koṇṭu vāḻ — payaṉ tarum.",
    english: "Live with love — it lengthens life. Live with harshness — it wears away strength. Live with character — it raises your standing. Live with refinement — it yields benefit.",
    tamilUrai: "அன்புடன் வாழ்ந்தால் ஆயுள் நீளும். கடுமையுடன் வாழ்ந்தால் வலிமை தேயும். தன்மையுடன் வாழ்ந்தால் மதிப்பு உயரும். பண்பாடுடன் வாழ்ந்தால் பயன் கிட்டும்.",
    altTranslation: "Live with love — life lengthens. With harshness — strength erodes. With character — standing rises. With refinement — benefit flows."
  },
  {
    num: 31,
    tamil: "பிறந்தது மறப்பவர் பேடியர்;\nமறந்தது நினைப்பவர் மடையர்;\nதிறந்தது செய்வர் தீரர்;\nகறங்கு கொண்டவர் காரியம் செய்வர்.",
    transliteration: "Piṟantu maṟappavar pēṭiyar;\nmaṟantu niṉaippavar maṭaiyar;\ntiṟantu ceyvār tīrar;\nkaṟaṅku koṇṭavar kāriyam ceyvār.",
    english: "Those who forget what has arisen are cowards. Those who remember what has been forgotten are fools. The brave do what has been opened. Those who have taken hold of the spinning top do the work.",
    tamilUrai: "நடந்ததை மறந்துவிடுபவர்கள் கோழைகள். மறந்ததை திரும்ப நினைத்து வருந்துபவர்கள் மடையர்கள். வாய்ப்பு வந்தபோது செயல்படுவோர் வீரர்கள். கைக்கு வந்தத்தை செயலாக்குவோர் வெற்றியாளர்கள்.",
    altTranslation: "Those who forget what has happened are cowards; those who revisit what's gone are fools; the brave act when the moment opens."
  },
  {
    num: 32,
    tamil: "மாசு அற்ற மனம் — மகிழ்வு தரும்;\nபாசம் அற்ற மனம் — பரிவு தரும்;\nநேசம் அற்ற மனம் — நிம்மதி தரும்;\nஆசை அற்ற மனம் — அமைதி தரும்.",
    transliteration: "Mācu aṟṟa maṉam — makiḻvu tarum;\npācam aṟṟa maṉam — parivu tarum;\nnēcam aṟṟa maṉam — nimmati tarum;\nācai aṟṟa maṉam — amaiti tarum.",
    english: "A mind without stain brings joy. A mind without bondage brings tenderness. A mind without attachment brings serenity. A mind without craving brings peace.",
    tamilUrai: "களங்கமற்ற மனம் மகிழ்ச்சி தரும். பாசக்கட்டு அற்ற மனம் கரிசனை தரும். அதிக நேசம் அற்ற மனம் நிம்மதி தரும். ஆசையற்ற மனம் அமைதி தரும்.",
    altTranslation: "A mind without stain gives joy; without bondage gives tenderness; without attachment gives serenity; without craving gives peace."
  },
  {
    num: 33,
    tamil: "கல்வி கரையில; கற்பவர் நாள் சில;\nவல்லவர் வழியே வாழும் நல்லோர்;\nசொல்லவர் சொன்னது தாழ்வு இல்;\nமல்லல் வாழ்வு வாழ்வர் மாந்தர்.",
    transliteration: "Kalvi kaṟaiyila; kaṟpavar nāḷ cila;\nvallavar vaḻiyē vāḻum nallōr;\ncolavar conṉatu tāḻvu il;\nmalal vāḻvu vāḻvar māntār.",
    english: "Learning has no shore; a learner's days are few. The good live only by the path of the capable. What the eloquent have spoken knows no lowness. People will live the full and prosperous life.",
    tamilUrai: "கல்வி கரையற்றது; கற்பவருக்கு நாட்கள் குறைவே. நல்லவர்கள் திறமையானவர்கள் வழியிலேயே வாழ்வார்கள். பேச்சாற்றல் உடையவர்கள் சொன்னது இழிவடைவதில்லை. மனிதர்கள் நிறைவான வாழ்வை வாழ்வார்கள்.",
    altTranslation: "Learning has no shore; days are few; the good follow the capable; the eloquent speak without lowness; people will live the full life."
  },
  {
    num: 34,
    tamil: "அரசன் நீதி — ஆயுள் தரும்;\nவரம் கொண்ட வாழ்வு — வளம் தரும்;\nகரம் கொண்ட கொடை — கனி தரும்;\nமரம் கொண்ட நிழல் — இன்பம் தரும்.",
    transliteration: "Aracaṉ nīti — āyuḷ tarum;\nvaram koṇṭa vāḻvu — vaḷam tarum;\nkaram koṇṭa koṭai — kaṉi tarum;\nmaram koṇṭa niḻal — iṉpam tarum.",
    english: "The king's justice gives long life. A life endowed with boons gives abundance. A gift from the hand gives fruit. The shade of a tree gives joy.",
    tamilUrai: "அரசனின் நீதி மக்களுக்கு ஆயுளை நீட்டிக்கும். நல்ல வரம் கொண்ட வாழ்வு வளம் தரும். கையிலிருந்து கொடுக்கும் தானம் பலன் தரும். மரத்தின் நிழல் இன்பம் தரும்.",
    altTranslation: "A king's justice gives long life; a blessed life gives abundance; giving hands bear fruit; a tree's shade gives joy."
  },
  {
    num: 35,
    tamil: "நெறிகெட்ட வேந்தன் — நிலம் கெடும்;\nபொறிகெட்ட வாழ்வு — பொருள் கெடும்;\nவெறிகெட்ட மனம் — விளக்கம் கெடும்;\nவழிகெட்ட போக்கு — வாழ்வு கெடும்.",
    transliteration: "Neṟikeṭṭa vēntan — nilam keṭum;\npoṟikeṭṭa vāḻvu — poruḷ keṭum;\nverikeṭṭa maṉam — viḷakkam keṭum;\nvaḻikeṭṭa pōkku — vāḻvu keṭum.",
    english: "A king without righteousness — the land perishes. A life without sense — wealth perishes. A mind without restraint — clarity perishes. A course without direction — life perishes.",
    tamilUrai: "நீதியற்ற மன்னன் நாட்டை அழிப்பான். பொறியற்ற வாழ்க்கை செல்வத்தை கெடுக்கும். கட்டுப்பாடற்ற மனம் தெளிவை அழிக்கும். வழியற்ற போக்கு வாழ்வையே கெடுக்கும்.",
    altTranslation: "An unrighteous king ruins the land; a senseless life ruins wealth; a restless mind ruins clarity; a directionless course ruins life."
  },
  {
    num: 36,
    tamil: "பேசுவது வேண்டும்; பேசாமை வேண்டும்;\nஆசை உடைமை வேண்டும்; ஆசையின்மை வேண்டும்;\nவாசி அறிவு வேண்டும்; வாசியின்மை வேண்டும்;\nவீசி வாழ் — வீழ்வு வேண்டாம்.",
    transliteration: "Pēcuvatu vēṇṭum; pēcāmai vēṇṭum;\nācai uṭaimai vēṇṭum; ācaiyiṉmai vēṇṭum;\nvāci aṟivu vēṇṭum; vāciyiṉmai vēṇṭum;\nvīci vāḻ — vīḻvu vēṇṭām.",
    english: "One needs speaking; one needs silence. One needs desire; one needs desirelessness. One needs distinction in knowledge; one needs freedom from it. Live broadly — do not fall.",
    tamilUrai: "பேசுவதும் வேண்டும், மௌனமும் வேண்டும். ஆசையும் வேண்டும், ஆசையின்மையும் வேண்டும். சிறந்த அறிவும் வேண்டும், அதில் அகந்தையின்மையும் வேண்டும். விரிவாக, தாராளமாக வாழு — விழுந்துவிடாதே.",
    altTranslation: "Speak when needed; be silent when needed. Desire and desirelessness both have their place. Live broadly — do not fall."
  },
  {
    num: 37,
    tamil: "இன்றைக்கு இன்பம் — இல்லை என்றால்;\nநன்றைக்கு நலம் — நடு வழியால்;\nவென்றைக்கு வெற்றி — வினை முடிக்கில்;\nமன்றைக்கு மன்னன் — மக்கள் நலனில்.",
    transliteration: "Iṉṟaikku iṉpam — illai eṉṟāl;\nnaṉṟaikku nalam — naṭu vaḻiyāl;\nveṉṟaikku veṟṟi — viṉai muṭikkil;\nmaṉṟaikku maṉṉaṉ — makkaḷ nalaṉil.",
    english: "For today's joy — if not, then through the middle way. For tomorrow's good — through the middle path. For ultimate victory — if you complete the task. For the king of the assembly — in the people's welfare.",
    tamilUrai: "இன்றைய இன்பம் இல்லையெனில் நடுவழியில் தேடு. நாளையின் நலம் நடுவழியிலேயே கிட்டும். இறுதி வெற்றி வினையை முடித்தால் கிட்டும். நியாயசபையின் மன்னன் மக்கள் நலனிலேயே தங்கி இருப்பான்.",
    altTranslation: "Joy today through the middle way; tomorrow's good through the middle path; final victory through completing the task; a just king through the people's welfare."
  },
  {
    num: 38,
    tamil: "மலை தாண்ட வேண்டில் — முயல்;\nகலை தேர்ந்திட வேண்டில் — கற்று;\nதொலை செல்ல வேண்டில் — தொடர்;\nவிலை பெற வேண்டில் — விரும்பு.",
    transliteration: "Malai tāṇṭa vēṇṭil — muyar;\nkalai tērntaṭa vēṇṭil — kaṟṟu;\ntolai cella vēṇṭil — toṭar;\nvilai peṟa vēṇṭil — virumpu.",
    english: "If you want to cross the mountain — strive. If you want to master the arts — study. If you want to travel far — continue. If you want to gain worth — desire it.",
    tamilUrai: "மலையை தாண்ட வேண்டுமெனில் முயற்சி செய். கலையில் தேர்ச்சி வேண்டுமெனில் கற்று. தொலைவு செல்ல வேண்டுமெனில் தொடர். மதிப்பு பெற வேண்டுமெனில் விரும்பி உழை.",
    altTranslation: "To cross the mountain — strive. To master the arts — study. To travel far — keep going. To gain worth — desire it deeply."
  },
  {
    num: 39,
    tamil: "நல்லவர் தீயவர் என்று நாடினால்;\nவல்லவர் வலியர் என்று வகுத்தால்;\nசொல்லவர் மொழியும் சுருங்கினால்;\nகல்லவர் கருத்தும் கடந்தால் — நலமே.",
    transliteration: "Nallavar tīyavar eṉṟu nāṭiṉāl;\nvallavar valiyar eṉṟu vakuttāl;\ncolavar moḻiyum curuṅkiṉāl;\nkallavar karuttum kaṭantāl — nalamē.",
    english: "If you distinguish good from evil; if you sort the capable from the strong; if the eloquent's language is distilled; if the learnt pass beyond their thought — there is good.",
    tamilUrai: "நல்லவரையும் தீயவரையும் பிரித்து அறிந்தால், திறமையையும் வலிமையையும் பிரிக்கத் தெரிந்தால், பேசுபவர் வார்த்தை சுருக்கமாக இருந்தால், கற்றவர் தம் சிந்தனையை கடந்தால் — அதுவே நலம்.",
    altTranslation: "Distinguish good from evil; sort strength from capability; let speech be distilled; let learning transcend itself — then there is good."
  },
  {
    num: 40,
    tamil: "நல்வழியில் நட — நன்மை பெறுவாய்;\nகல்வியில் தேர் — கனம் பெறுவாய்;\nசொல்வழி நட — சுகம் பெறுவாய்;\nவல்வழி நட — வாழ்வு பெறுவாய்.",
    transliteration: "Nalvaḻiyil naṭa — naṉmai peṟuvāy;\nkalviyil tēr — kaṉam peṟuvāy;\ncolvaḻi naṭa — cukam peṟuvāy;\nvalvaḻi naṭa — vāḻvu peṟuvāy.",
    english: "Walk the good path — you will gain goodness. Excel in learning — you will gain weight. Walk the path of right speech — you will gain ease. Walk the strong path — you will gain life.",
    tamilUrai: "நல்வழியில் நடந்தால் நன்மை கிட்டும். கல்வியில் தேர்ச்சி அடைந்தால் மரியாதை கிட்டும். சொல்லிய வழியில் நடந்தால் இன்பம் கிட்டும். வலிமையான வழியில் நடந்தால் வாழ்வே கிட்டும்.",
    altTranslation: "Walk the good path — gain goodness. Excel in learning — gain respect. Walk the right path — gain ease. Walk the strong path — gain life itself."
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.NALVAZHI_DATA = {
    verses: NALVAZHI_VERSES
  };
}
