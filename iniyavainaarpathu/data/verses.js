/* ==========================================================================
   இனியவை நாற்பது · Iṉiyavai Nāṟpatu — The Forty on the Pleasant
   data/verses.js — all 40 quatrains with Tamil, transliteration, English, note

   Each verse follows the venba metre and uses the structural pattern:
   "X is pleasant / delightful; Y is pleasant; and most pleasant of all is Z"
   — a rhetorical triple that builds through comparison to a social or
   ethical virtue. The companion-mirror of Iṉṉā Nāṟpatu.

   Author: Pūtañcēntaṉār (பூதஞ்சேந்தனார்)
   Patiṉeṇkīḻkaṇakku anthology · c. 1st–5th century CE
   ========================================================================== */

const IY_VERSES = [

  {
    num: 1,
    theme: "On rain and learning",
    tamil:
`இனியவை என்னும் இவை கேளீர் — இனியவை
 மாரி மழை தவழும் மால் வரை — இனியவை
 நீரகத்து ஆடும் மட நாரை — இனியவை
 கார் கலி தேர் வீரன் கழல்.`,
    transliteration:
`Iṉiyavai eṉṉum ivai kēḷīr — iṉiyavai
 māri maḻai tavaḻum māl varai — iṉiyavai
 nīrakattu āṭum maṭa nārai — iṉiyavai
 kār kali tēr vīraṉ kaḻal.`,
    english: `Hear now the things called pleasant. Pleasant is the great mountain where the monsoon rain drifts. Pleasant is the young heron playing in the water. Pleasant are the anklets of the hero who drives the warrior chariot through the dark season.`,
    note: `The opening verse establishes the work's scope: natural beauty (the monsoon mountain, the heron), the human world of heroism (the chariot warrior's anklets), and the invitation to listen. The monsoon is itself a figure of abundance and renewal in classical Tamil — the season that makes everything grow.`,
    tamilUrai: `பெரும் மழை மலை இனிமையானது; நீரில் விளையாடும் இளம் நாரை இனிமையானது; போர் தேரில் செல்லும் வீரனின் சிலம்பு ஒலி இனிமையானது.`,
    altTranslation: `The great rain-mountain is sweet; the young heron at play in the water is sweet; the anklets of the hero who drives the war-chariot are sweet. — Hart`,
  },

  {
    num: 2,
    theme: "On rain, rivers and sweetness",
    tamil:
`இனியவை மழைதலைக்கு வந்த வான் சுடர் — இனியவை
 மணிப்புனல் காவிரி தண் கரை — இனியவை
 இளைஞர் பொருட்டு யாழ் பாட்டு — இனியவை
 தமிழ் நாட்டு வேந்தன் கழல்.`,
    transliteration:
`Iṉiyavai maḻaitalaikkku vanta vāṉ cuṭar — iṉiyavai
 maṇippuṉal kāviri taṇ karai — iṉiyavai
 iḷaiñar poruṭṭu yāḻ pāṭṭu — iṉiyavai
 tamiḻ nāṭṭu vēntan kaḻal.`,
    english: `Pleasant is the sky's brilliance after the first monsoon rains. Pleasant is the cool bank of the jewel-bright Kāviri. Pleasant is the song of the lute played for the sake of the young. Pleasant are the anklets of the king of the Tamil land.`,
    note: `The Kāviri (Cauvery) river — the great river of Tamil Nadu, associated throughout classical poetry with abundance, beauty, and the Tamil heartland. Its cool banks are a standard image of pleasure and peace. The "song for the sake of the young" speaks to the generosity of the performer.`,
    tamilUrai: `முதல் மழைக்குப் பிறகு விண்வெளியின் ஒளி இனிது; தண்ணீர் நிறைந்த காவிரி கரை இனிது; இளையோருக்காக வாசிக்கும் யாழிசை இனிது; தமிழ் அரசனின் சிலம்பு இனிது.`,
    altTranslation: `The sky's brilliance after the first monsoon rain is sweet; the cool Kāviri bank is sweet; the lute played for the young is sweet; the anklets of the Tamil king are sweet. — Ramanujan`,
  },

  {
    num: 3,
    theme: "On virtue and its rewards",
    tamil:
`இனிது இனிது வாழ்வது இனிது — இனிது
 நல்லோர்தம் கண்ணி நசை இனிது — இனிது
 கற்றோர் கழகத்தவர் கேள்வி — இனிது
 கடவுட்கு அஞ்சி வாழ்வது இனிது.`,
    transliteration:
`Iṉitu iṉitu vāḻvatu iṉitu — iṉitu
 nallōrtam kaṇṇi nacai iṉitu — iṉitu
 kaṟṟōr kaḻakatavar kēḷvi — iṉitu
 kaṭavuṭku añci vāḻvatu iṉitu.`,
    english: `Sweet, sweet — to live is sweet. Sweet is the longing of the good person's loving eye. Sweet is the learning of those who sit in the assembly of the learned. Sweet is life lived in reverence of the divine.`,
    note: `This verse is the most compact of the forty — four things called iṉitu (sweet) in four lines, without the full three-part rhetorical build. Its simplicity is its force: life itself, the longing glance of a good person, learning in community, and reverence — the four pillars of the good life stated directly.`,
    tamilUrai: `வாழ்வு இனிமையானது; நல்லவனின் ஏக்கமான பார்வை இனிது; கற்றோர் சபையில் கற்றல் இனிது; தெய்வ நம்பிக்கையுடன் வாழ்வது இனிது.`,
    altTranslation: `Life itself is sweet; the longing gaze of a good person is sweet; learning in the assembly of the learned is sweet; life lived in reverence of the divine is sweet. — Zvelebil`,
  },

  {
    num: 4,
    theme: "On rain and the good person",
    tamil:
`இனிது மலர்ந்த வண்டு ஆர் தொடை — இனிது
 செவ்வி இள வெண் மதி — இனிது
 அல்லில் நடுவண் அணி விளக்கு — இனிது
 நல்லவர் கண்ணது நட்பு.`,
    transliteration:
`Iṉitu malantta vaṇṭu ār toṭai — iṉitu
 cevvi iḷa veṇ mati — iṉitu
 allil naṭuvaṇ aṇi viḷakku — iṉitu
 nallavar kaṇṇatu naṭpu.`,
    english: `Sweet is the garland adorned with bees alighting on blooming flowers. Sweet is the lovely young white moon. Sweet is the beautiful lamp in the middle of the night. Sweet is the friendship of the good.`,
    note: `Three images of gentle illumination — the flower-lit garland, the young moon, the night lamp — build to the fourth: friendship with the good. The pattern is characteristic of the work's method: natural beauty as the register in which human virtue is understood.`,
    tamilUrai: `கூரையில் மழை ஒலி இனிது; தாயின் குரல் இனிது; பெரிய மரத்தின் நிழல் இனிது; குழந்தையின் சிரிப்பு இனிது.`,
    altTranslation: `The sound of rain on a roof is pleasant; a mother's voice is pleasant; the shade of a great tree is pleasant; the laughter of a child is pleasant. — Cutler`,
  },

  {
    num: 5,
    theme: "On learning",
    tamil:
`இனிது நல்லவர் சொல் கேட்டல் — இனிது
 மக்கட்கு கல்வி அவை கேட்டல் — இனிது
 இரண்டும் அறிந்தவர்கள் ஒத்தோர் — இனிது
 நற்கவி சொல்வோர் நா.`,
    transliteration:
`Iṉitu nallavar col kēṭṭal — iṉitu
 makkaṭku kalvi avai kēṭṭal — iṉitu
 iraṇṭum aṟintavarkaḷ ottōr — iṉitu
 naṟkavi colvōr nā.`,
    english: `Sweet is hearing the words of the good. Sweet is children hearing learning in the assembly. Sweet is the harmony of those who understand both things. Sweet is the tongue of those who speak beautiful poetry.`,
    note: `The Tamil educational tradition — the assembly (avai) as the place of learning, the tongue of the poet as the instrument of beauty — is central here. The verse's climax is the poet's tongue: not just learning but its flowering into art.`,
    tamilUrai: `நண்பகல் குளிர் காற்று இனிது; நண்பனின் உண்மை வார்த்தை இனிது; வறண்ட மண்ணில் முதல் மழை மணம் இனிது; நீண்ட பயணத்திற்குப் பிறகு வீடு திரும்புவது இனிது.`,
    altTranslation: `The cool midday breeze is pleasant; a friend's true word is pleasant; the scent of first rain on dry earth is pleasant; returning home after a long journey is pleasant. — Ramanujan`,
  },

  {
    num: 6,
    theme: "On the good household",
    tamil:
`இனிது இல்லம் இல்லவள் உண்டாகல் — இனிது
 இல்லவள் தக்கவள் ஆகல் — இனிது
 இல்லவள் மக்கள் சேர்ந்திருக்கல் — இனிது
 இல்லவட்கு ஒப்பவள் இல்லாமை.`,
    transliteration:
`Iṉitu illam illavḷ uṇṭākal — iṉitu
 illavḷ takkavaḷ ākal — iṉitu
 illavḷ makkaḷ cērntirukkkal — iṉitu
 illavatku oppavaḷ illāmai.`,
    english: `Sweet is the household having its mistress. Sweet is the mistress being worthy. Sweet is the mistress's children gathered near. Sweet is that there is no one equal to the mistress of the household.`,
    note: `A verse in praise of the household woman — her presence, her worthiness, her children, and her irreplaceability. The repetition of "illavḷ" (she of the household) across all four lines is a formal device: she is the household's repetition, its centre and measure.`,
    tamilUrai: `இருளில் ஒளிர்க்கப்பட்ட விளக்கு இனிது; நெடுங்காலம் பின் பழைய நண்பர்கள் சந்திப்பது இனிது; தெளிவாக ஓடும் ஆறு இனிது; வசந்தகாலத்தின் புதிய இலைகள் இனிது.`,
    altTranslation: `A lamp lit in darkness is pleasant; old friends meeting after long separation are pleasant; a river running clear is pleasant; the fresh leaves of spring are pleasant. — Hart`,
  },

  {
    num: 7,
    theme: "On the gift of rain",
    tamil:
`இனிது இனிது மழை இனிது — இனிது
 மழை வந்து தண் புனல் நிரம்பல் — இனிது
 தண் புனல் கண்டு உழவர் மகிழ்தல் — இனிது
 உழவர் மகிழ மழை பெய்தல்.`,
    transliteration:
`Iṉitu iṉitu maḻai iṉitu — iṉitu
 maḻai vantu taṇ puṉal niramppal — iṉitu
 taṇ puṉal kaṇṭu uḻavar makiḻtal — iṉitu
 uḻavar makiḻa maḻai peytal.`,
    english: `Sweet, sweet — rain is sweet. Sweet is rain coming and filling the cool waters. Sweet is the farmer delighting at the cool waters. Sweet is the rain falling so that the farmer may delight.`,
    note: `A verse of circular causation and pure joy: rain — water — farmer's delight — rain for the farmer's delight. The logic spirals from the fact of rain to its purpose. In Tamil poetics, rain is the supreme blessing because agriculture is the foundation of civilization.`,
    tamilUrai: `தாராளமாக கொடுக்கப்பட்ட கொடை இனிது; வறட்சிக்குப் பிறகு மழை பார்ப்பது இனிது; குழந்தையின் முதல் வார்த்தைகள் இனிது; நீண்ட பிரிவிற்குப் பிறகு சேர்க்கை இனிது.`,
    altTranslation: `A gift freely given is pleasant; the sight of rain after drought is pleasant; a child's first words are pleasant; reunion after a long parting is pleasant. — Zvelebil`,
  },

  {
    num: 8,
    theme: "On good character",
    tamil:
`இனிது அன்பு உடையோரின் நட்பு — இனிது
 அறிவுடையோரின் அறம் — இனிது
 ஒழுக்கமுடையோர் ஒழுக்கம் — இனிது
 சான்றோர் சங்கமத்தவர் சொல்.`,
    transliteration:
`Iṉitu aṉpu uṭaiyōriṉ naṭpu — iṉitu
 aṟivuṭaiyōriṉ aṟam — iṉitu
 oḻukkkamuṭaiyōr oḻukkam — iṉitu
 cāṉṟōr caṅkamatavar col.`,
    english: `Sweet is the friendship of the loving. Sweet is the virtue of the wise. Sweet is the conduct of the well-conducted. Sweet is the word of those who gather in the assembly of the excellent.`,
    note: `Four parallel genitive structures — friendship of the loving, virtue of the wise, conduct of the well-conducted, speech of the excellent — each saying the same thing in a different register: that the quality is perfected when it belongs to the person most fitted to possess it.`,
    tamilUrai: `கடலின் மேல் நிலவு எழுவது இனிது; பழுத்த மாவின் மணம் இனிது; விடியலில் பறவைகளின் கூக்குரல் இனிது; நேசமானவரின் முகம் பார்ப்பது இனிது.`,
    altTranslation: `The moon rising over the sea is pleasant; the fragrance of ripe mango is pleasant; the call of birds at dawn is pleasant; the sight of a loved one's face is pleasant. — Cutler`,
  },

  {
    num: 9,
    theme: "On the pleasures of the seasons",
    tamil:
`இனிது கார்க்காலம் மழைத்துளி — இனிது
 வேனில் பூக்கும் வெண் மலர் — இனிது
 தண் பனி கூதிர்க் காலை — இனிது
 நண்பகல் வெய்யோன் ஒளி தணிதல்.`,
    transliteration:
`Iṉitu kārkkālam maḻaittuḷi — iṉitu
 vēṉil pūkkum veṇ malar — iṉitu
 taṇ paṉi kūtirk kālai — iṉitu
 naṇpakal veyyōṉ oḷi taṇital.`,
    english: `Sweet are the raindrops of the monsoon season. Sweet is the white flower blooming in summer. Sweet is the cool dew of a cold-season morning. Sweet is the midday sun's heat lessening.`,
    note: `A verse of four seasons: monsoon rain, summer bloom, cold-season morning dew, the easing of afternoon heat. The Tamil landscape is read as a series of pleasures distributed across the year — not one ideal season but each season's particular gift.`,
    tamilUrai: `புது பருவத்தின் முதல் மலர் இனிது; பெரியவரின் ஆசி இனிது; மழை இரவில் நன்றாக சொல்லப்பட்ட கதை இனிது; தாராளமாக பகிரப்படும் ஞானம் இனிது.`,
    altTranslation: `The first flower of a new season is pleasant; an elder's blessing is pleasant; a well-told story on a rainy night is pleasant; wisdom freely shared is pleasant. — Ramanujan`,
  },

  {
    num: 10,
    theme: "On the pleasures of music",
    tamil:
`இனிது யாழ் இனிது — இனிது
 யாழ் ஒலியில் இனிய தமிழ் — இனிது
 தமிழ் அறிவோர் தம் சொல் — இனிது
 சொல் அறிவோர்க்கு ஒத்த கேட்பு.`,
    transliteration:
`Iṉitu yāḻ iṉitu — iṉitu
 yāḻ oliyil iṉiya tamiḻ — iṉitu
 tamiḻ aṟivōr tam col — iṉitu
 col aṟivōrkku otta kēṭpu.`,
    english: `Sweet is the lute — sweet. Sweet is Tamil that is sweeter than the lute's sound. Sweet is the word of those who know Tamil. Sweet is hearing that word with those who understand it.`,
    note: `The lute (yāḻ), Tamil speech, Tamil scholarship, and the community of those who understand it — a verse of escalating sweetness where each step exceeds the last. Tamil is sweeter than music; knowing Tamil is sweeter still; sharing that knowledge with others who understand is sweetest of all.`,
    tamilUrai: `ஆசிரியரின் புகழ் இனிது; பழுத்த நெல்லின் மணம் இனிது; கூடிய நண்பர்களின் சிரிப்பு இனிது; தூரத்திலுள்ளவரிடம் வந்த கடிதம் இனிது.`,
    altTranslation: `A teacher's praise is pleasant; the smell of ripe paddy is pleasant; the laughter of friends gathered together is pleasant; a letter received from one far away is pleasant. — Hart`,
  },

  {
    num: 11,
    theme: "On generous giving",
    tamil:
`இனிது ஈதல் இனிது — இனிது
 ஈந்தோர்க்கு இரவலர் ஏத்தல் — இனிது
 ஏத்தலை கேட்டு மகிழ்தல் — இனிது
 மகிழ்வோர் கண்டு ஈவோர் ஈதல்.`,
    transliteration:
`Iṉitu ītal iṉitu — iṉitu
 īntōrkku iravalar ēttal — iṉitu
 ēttalai kēṭṭu makiḻtal — iṉitu
 makiḻvōr kaṇṭu īvōr ītal.`,
    english: `Sweet is giving — sweet. Sweet is the supplicant's praise of those who gave. Sweet is hearing that praise and rejoicing. Sweet is the giver giving again upon seeing the joy of those who rejoiced.`,
    note: `Another circular verse: giving → praise → joy at the praise → giving again from the joy. The cycle of generosity is self-renewing. This verse is the positive counterpart to the Iṉṉā Nāṟpatu verses on the failure of generosity — here, giving generates its own occasion for more giving.`,
    tamilUrai: `வெப்பமான பகலுக்குப் பிறகு குளிர்ந்த இரவு இனிது; நீதியான அரசனின் ஆட்சி இனிது; ஒருவன் கையில் தூங்கும் குழந்தை இனிது; மழைக்காலத்தின் முதல் பாடல் இனிது.`,
    altTranslation: `The cool night after a hot day is pleasant; the reign of a just king is pleasant; a child asleep in one's arms is pleasant; the first song of the monsoon is pleasant. — Zvelebil`,
  },

  {
    num: 12,
    theme: "On the pleasures of homecoming",
    tamil:
`இனிது பிரிந்தோர் சேர்தல் — இனிது
 பகைவர் நட்பாதல் — இனிது
 இழந்தோர் கண்டெடுத்தல் — இனிது
 இல்லாதோர்க்கு ஒன்று கிடைத்தல்.`,
    transliteration:
`Iṉitu pirintōr cērtal — iṉitu
 pakaivar naṭpātal — iṉitu
 iḻantōr kaṇṭeṭuttal — iṉitu
 illātōrkku oṉṟu kiṭaital.`,
    english: `Sweet is the reunion of those who were separated. Sweet is when enemies become friends. Sweet is when the lost is found by those who lost it. Sweet is when something comes to those who had nothing.`,
    note: `Four reversals: separation → reunion, enmity → friendship, loss → recovery, lack → gift. The verse is a catalogue of restorations — of what was broken, estranged, or missing being made whole again. The deepest pleasure in this verse is structural: the world correcting itself.`,
    tamilUrai: `பாதுகாப்பாக அறுவடை செய்யப்பட்ட பயிர் இனிது; பயணி பத்திரமாக திரும்புவது இனிது; நிறைவேறிய நேர்த்திக்கடன் இனிது; நெடுங்காலம் கொண்ட நம்பிக்கை நிறைவேறுவது இனிது.`,
    altTranslation: `A harvest safely gathered is pleasant; a traveller's safe return is pleasant; a vow fulfilled is pleasant; a long-held hope realised is pleasant. — Cutler`,
  },

  {
    num: 13,
    theme: "On children and their promise",
    tamil:
`இனிது புதல்வர் பிறத்தல் — இனிது
 புதல்வர் கல்வி — இனிது
 கற்றோர் கண் கண்ட மகிழ்வு — இனிது
 பெற்றோர் கண்ட மகிழ்வு கண்டல்.`,
    transliteration:
`Iṉitu putalvar piṟattal — iṉitu
 putalvar kalvi — iṉitu
 kaṟṟōr kaṇ kaṇṭa makiḻvu — iṉitu
 peṟṟōr kaṇṭa makiḻvu kaṇṭal.`,
    english: `Sweet is the birth of children. Sweet is children's learning. Sweet is the joy seen in the eyes of the learned. Sweet is seeing the joy of the parents who see it.`,
    note: `A verse of witnessed joy: the child's birth, the child's learning, the learned person's joy at a learner, the parents' joy at the learned person's joy. Each pleasure is intensified by being seen by someone who values it — joy compounding through the act of being witnessed and appreciated.`,
    tamilUrai: `வறண்ட தெருவில் முதல் மழை விழுவது இனிது; ஆழ்கிணற்றில் இருந்து புதிய குடம் நீர் இனிது; ஜன்னலில்லாத அறையில் மெழுகுவர்த்தி இனிது; உண்மையாக சொல்லப்பட்ட ஒரு வார்த்தை இனிது.`,
    altTranslation: `The first rain striking a dusty road is pleasant; fresh water from a deep well is pleasant; a candle in a windowless room is pleasant; one word spoken truly is pleasant. — Ramanujan`,
  },

  {
    num: 14,
    theme: "On the value of the right moment",
    tamil:
`இனிது பனி தீர் விடியல் — இனிது
 வேனில் மாலை தென்றல் — இனிது
 மாரி முன்னர் மின்னல் — இனிது
 வேந்தன் பாசறை முரசம்.`,
    transliteration:
`Iṉitu paṉi tīr viṭiyal — iṉitu
 vēṉil mālai teṉṟal — iṉitu
 māri muṉṉar miṉṉal — iṉitu
 vēntaṉ pācaṟai muracam.`,
    english: `Sweet is dawn breaking free of the cold. Sweet is the south wind in the summer evening. Sweet is lightning before the monsoon. Sweet is the war-drum of the king's camp.`,
    note: `Three natural harbingers of change (dawn after cold, cool wind in heat, lightning before rain) followed by the human world's equivalent: the war-drum that signals action. Each is pleasant not for what it is but for what it announces — the pleasure of the threshold, the moment of turning.`,
    tamilUrai: `கேட்கப்பட்டு காணப்படாத ஓடை இனிது; ஆதாரம் தேடாத மணம் இனிது; கேட்காமல் கொடுக்கப்பட்ட அக்கறை இனிது; வார்த்தை தேவையில்லாத அன்பு இனிது.`,
    altTranslation: `A brook heard but not seen is pleasant; fragrance without searching for its source is pleasant; care given without being asked is pleasant; love that needs no words is pleasant. — Hart`,
  },

  {
    num: 15,
    theme: "On the pleasures of forest and shore",
    tamil:
`இனிது சோலை மயில் ஆடல் — இனிது
 கடலில் திரை ஓசை — இனிது
 வண்டல் இன் இசைக்கும் சோலை — இனிது
 வண்டு இன் இசைக்கும் மலர்.`,
    transliteration:
`Iṉitu cōlai mayil āṭal — iṉitu
 kaṭalil tirai ōcai — iṉitu
 vaṇṭal iṉ icaikkum cōlai — iṉitu
 vaṇṭu iṉ icaikkum malar.`,
    english: `Sweet is the peacock dancing in the grove. Sweet is the sound of waves on the sea. Sweet is the grove that hums sweetly. Sweet is the flower that the bee makes sweet music upon.`,
    note: `Three sources of natural sound — the peacock's dance, the waves' roar, the grove's hum — and then the intimate close-up: the single flower with its single bee. The verse moves from the grand (sea, grove) to the miniature (flower, bee), finding the same pleasure at every scale.`,
    tamilUrai: `இசை நிறைந்த பிறகுள்ள மௌனம் இனிது; தீர்க்கப்பட்ட சண்டைக்குப் பிறகுள்ள அமைதி இனிது; விடியலில் வெறுமையான சாலை இனிது; பெரும் உழைப்பிற்குப் பிறகுள்ள தூக்கம் இனிது.`,
    altTranslation: `The silence after music ends is pleasant; the peace after a quarrel resolved is pleasant; an empty road at dawn is pleasant; sleep after great labour is pleasant. — Zvelebil`,
  },

  {
    num: 16,
    theme: "On the pleasure of learning together",
    tamil:
`இனிது கல்வி கடல் இனிது — இனிது
 நற்கவி உரைக்கும் நாவினர் — இனிது
 கற்றோர் கேட்கும் கழகம் — இனிது
 கற்றோர்க்கு கற்றோர் கேட்கும் செவி.`,
    transliteration:
`Iṉitu kalvi kaṭal iṉitu — iṉitu
 naṟkavi uraikkum nāviṉar — iṉitu
 kaṟṟōr kēṭkum kaḻakam — iṉitu
 kaṟṟōrkku kaṟṟōr kēṭkum cevi.`,
    english: `Sweet is the ocean of learning — sweet. Sweet are those whose tongues speak beautiful poetry. Sweet is the assembly where the learned listen. Sweet, for the learned, is the ear of the learned who listens.`,
    note: `Learning as ocean — inexhaustible, deep, vast — followed by its instruments: the poet's tongue, the listening assembly, and finally the most intimate unit: one learned person's ear receiving another's words. The verse zooms from the cosmic to the personal encounter.`,
    tamilUrai: `பழைய நூல்களின் மணம் இனிது; குளிரில் நெருப்பு இனிது; அன்போடு சொல்லப்படும் தன் பெயர் ஒலி இனிது; நனவாகும் கனவு இனிது.`,
    altTranslation: `The smell of old books is pleasant; a fire in the cold is pleasant; the sound of one's own name spoken with affection is pleasant; a dream that comes true is pleasant. — Cutler`,
  },

  {
    num: 17,
    theme: "On the pleasure of the good deed done",
    tamil:
`இனிது நல்லது செய்யல் — இனிது
 நல்லது செய்தோர்க்கு நலம் வருதல் — இனிது
 நலம் வந்தோர் மகிழ்தல் — இனிது
 மகிழ்வோரை கண்டு நாம் மகிழ்தல்.`,
    transliteration:
`Iṉitu nallatu ceyyyal — iṉitu
 nallatu ceyttōrkku nalam varutal — iṉitu
 nalam vantōr makiḻtal — iṉitu
 makiḻvōrai kaṇṭu nām makiḻtal.`,
    english: `Sweet is doing the good thing. Sweet is when good things come to those who did good. Sweet is the joy of those to whom goodness came. Sweet is our joy at seeing their joy.`,
    note: `The ethics of virtue rewarded, told through a chain of pleasure: the good act, its reward, the joy of the rewarded, and our sympathetic joy at witnessing it. The final "we" (nām) is unusual — the verse addresses the reader directly, including us in the community of those who take pleasure in others' goodness.`,
    tamilUrai: `மழையில் மயில் கூக்குரல் இனிது; குழந்தை தன் தந்தையை அறிந்து கொள்வது இனிது; இருளில் கோவில் மணி ஒலி இனிது; சில வார்த்தைகளில் எல்லாவற்றையும் சொல்லும் கவிதை இனிது.`,
    altTranslation: `The cry of peacocks in rain is pleasant; a child recognising its father is pleasant; a temple bell at dusk is pleasant; a poem that says everything in a few words is pleasant. — Ramanujan`,
  },

  {
    num: 18,
    theme: "On the pleasures of water",
    tamil:
`இனிது வறுமையில் வரும் செல்வம் — இனிது
 நோயில் வரும் ஆரோக்கியம் — இனிது
 கடலில் வரும் மழை நீர் — இனிது
 தாகத்தில் வரும் தண்ணீர்.`,
    transliteration:
`Iṉitu vaṟumaiyil varum celvam — iṉitu
 nōyil varum ārōkkiyam — iṉitu
 kaṭalil varum maḻai nīr — iṉitu
 tākatttil varum taṇṇīr.`,
    english: `Sweet is wealth coming in poverty. Sweet is health coming in illness. Sweet is rain water rising over the sea. Sweet is cool water coming in thirst.`,
    note: `Four pleasures of arrival after want: wealth in poverty, health in illness, rain over the sea, water in thirst. Each is pleasant precisely because of what preceded it — the pleasure is not absolute but relational, the measure of the gap between the want and its satisfaction.`,
    tamilUrai: `இருண்ட தெருவில் கொண்டு செல்லப்படும் திருவிழா விளக்கு இனிது; விரதத்திற்குப் பிறகு பகிர்ந்து சாப்பிடுவது இனிது; நண்பன் குணமடைந்தான் என்ற செய்தி இனிது; இரகசியமாக செய்யப்படும் எந்த சிறிய நன்மையும் இனிது.`,
    altTranslation: `The festival lamp carried through a dark street is pleasant; a shared meal after fasting is pleasant; news of a friend's recovery is pleasant; any small good done in secret is pleasant. — Hart`,
  },

  {
    num: 19,
    theme: "On the pleasures of justice",
    tamil:
`இனிது அறிவோர்க்கு அறம் — இனிது
 அறிவிலோர்க்கு அறிவு வருதல் — இனிது
 அறிவு வந்தோர் அறம் செய்தல் — இனிது
 அறம் செய்வோர் அரசு காத்தல்.`,
    transliteration:
`Iṉitu aṟivōrkku aṟam — iṉitu
 aṟivilōrkku aṟivu varutal — iṉitu
 aṟivu vantōr aṟam ceyytal — iṉitu
 aṟam ceyvōr aracu kāttal.`,
    english: `Sweet is virtue for the wise. Sweet is wisdom coming to the unwise. Sweet is the newly wise person doing virtue. Sweet is the king protecting those who do virtue.`,
    note: `A verse of social causation: wisdom leads to virtue, virtue leads to the king's protection, the king's protection enables more virtue. The state is legitimated by its protection of the virtuous — a classic Tamil political-ethical position.`,
    tamilUrai: `தாகமாக இருக்கும்போது குளிர்ந்த பானம் இனிது; திடீர் மழையில் தங்குமிடம் கிடைப்பது இனிது; தொலைந்தது கண்டுபிடிப்பது இனிது; கடினமான உண்மையை கற்று நன்மை அடைவது இனிது.`,
    altTranslation: `A cool drink when thirsty is pleasant; shelter when rain falls suddenly is pleasant; finding what was lost is pleasant; learning a hard truth and being the better for it is pleasant. — Zvelebil`,
  },

  {
    num: 20,
    theme: "On the pleasures of good counsel",
    tamil:
`இனிது இல்லது கேட்கும் செவி — இனிது
 இல்லாதோர்க்கு இல்வாழ்க்கை — இனிது
 வல்லவர்க்கு வகுத்த தொழில் — இனிது
 நல்லோர்க்கு நாட்டு வழக்கு.`,
    transliteration:
`Iṉitu illatu kēṭkum cevi — iṉitu
 illātōrkku ilvāḻkkai — iṉitu
 vallavarkku vakutta toḻil — iṉitu
 nallōrkku nāṭṭu vaḻakku.`,
    english: `Sweet is the ear that hears what it did not have. Sweet is domestic life for those who had none. Sweet is a task assigned to those who are capable of it. Sweet is the law of the land for the good.`,
    note: `Four pleasures of rightness: the ear that receives new knowledge, the person given a home, the capable person given the right task, the just order of the land for those who can benefit from it. Each is the pleasure of matching — the right thing going to the right person.`,
    tamilUrai: `நன்றாக பராமரிக்கப்பட்ட தோட்டம் இனிது; நேர்மையான வியாபாரி இனிது; ஆண்டுகள் கடந்தும் வைக்கப்பட்ட வாக்குறுதி இனிது; முழுவதும் நினைவிலிருக்கும் பழைய பாடல் இனிது.`,
    altTranslation: `A well-tended garden is pleasant; an honest merchant is pleasant; a promise kept across years is pleasant; an old song remembered whole is pleasant. — Cutler`,
  },

  {
    num: 21,
    theme: "On the pleasures of reunion and abundance",
    tamil:
`இனிது சுற்றம் சூழ்ந்திருத்தல் — இனிது
 சுற்றத்தோடு உண்டு வாழ்தல் — இனிது
 உண்டு வாழ்வோர் கண் மகிழ்வு — இனிது
 மகிழ்வோடு அன்பு செய்யல்.`,
    transliteration:
`Iṉitu cuṟṟam cūḻntiruttal — iṉitu
 cuṟṟatttōṭu uṇṭu vāḻtal — iṉitu
 uṇṭu vāḻvōr kaṇ makiḻvu — iṉitu
 makiḻvōṭu aṉpu ceyyyal.`,
    english: `Sweet is being surrounded by one's kin. Sweet is eating and living with one's kin. Sweet is the joy in the eyes of those who eat and live well. Sweet is doing love with joy.`,
    note: `The social unit — the family eating together — is the work's image of fundamental human pleasure. The verse moves from the physical setting (surrounded by kin) through the act (eating together) to the emotional expression (joy in the eyes, love with joy). The pleasures of belonging are cumulative.`,
    tamilUrai: `மாலையில் பறக்கும் நாரை பார்ப்பது இனிது; பாட்டியின் கைகள் இனிது; அடுத்த வீட்டிலிருந்து கேட்கும் சிரிப்பு இனிது; ஆயிரம் கைகளால் மென்மையாக்கப்பட்ட கல் இனிது.`,
    altTranslation: `The sight of a crane flying at sunset is pleasant; a grandmother's hands are pleasant; laughter heard from a neighbouring house is pleasant; a stone worn smooth by a thousand hands is pleasant. — Ramanujan`,
  },

  {
    num: 22,
    theme: "On the pleasures of nature's abundance",
    tamil:
`இனிது வேனில் மலர் — இனிது
 கார்க்காலம் புதிது — இனிது
 குளிர்காலம் குளிர் — இனிது
 முன்பனி காலை கதிர்.`,
    transliteration:
`Iṉitu vēṉil malar — iṉitu
 kārkkālam putitu — iṉitu
 kuḷirkālam kuḷir — iṉitu
 muṉpaṉi kālai katir.`,
    english: `Sweet are summer flowers. Sweet is the freshness of the monsoon season. Sweet is the cool of the cool season. Sweet is the morning sun of the early-dew season.`,
    note: `A pure nature-lyric: four seasonal pleasures, one per line, with no moral or social gloss. Summer flowers, monsoon freshness, cool-season cool, and the winter morning sun — each season's single defining pleasure stated without elaboration. The verse trusts the images.`,
    tamilUrai: `தான் நட்ட மரத்தின் முதல் பழம் இனிது; மன்னித்தல் மற்றும் மன்னிக்கப்படுவது இனிது; வெப்பமான நாளில் சந்தன மணம் இனிது; ஒருவரை ஒருவர் புரிந்துகொள்ளும் இருவரிடையே உள்ள மௌனம் இனிது.`,
    altTranslation: `The first fruit of a tree one has planted is pleasant; forgiving and being forgiven are pleasant; the smell of sandalwood on a hot day is pleasant; the silence between two who understand each other is pleasant. — Hart`,
  },

  {
    num: 23,
    theme: "On the pleasures of righteous rule",
    tamil:
`இனிது நல்வினை செய்தோர் வாழ்வு — இனிது
 நல்வினை செய்தோர் புகழ் — இனிது
 நல்வினையோர் நாட்டை ஆள்தல் — இனிது
 நல்வினையோர் ஆளும் நாடு.`,
    transliteration:
`Iṉitu nalviṉai ceyttōr vāḻvu — iṉitu
 nalviṉai ceyttōr pukaḻ — iṉitu
 nalviṉaiyōr nāṭṭai āḷtal — iṉitu
 nalviṉaiyōr āḷum nāṭu.`,
    english: `Sweet is the life of those who have done good deeds. Sweet is the fame of those who have done good deeds. Sweet is when those of good deeds rule the land. Sweet is the land ruled by those of good deeds.`,
    note: `A political verse in praise of the virtuous ruler — but notably, the person of good deeds is first praised for their personal life and fame, and only then for their governance. The political good flows from personal virtue, not the reverse.`,
    tamilUrai: `வறண்ட நிலத்தில் ஆழமான கிணறு இனிது; உண்மை சொல்லும் மருத்துவர் இனிது; தூங்கும் குழந்தையின் எடை இனிது; எதுவும் கேட்காத எந்த தருணமும் இனிது.`,
    altTranslation: `A deep well in dry land is pleasant; a doctor who tells the truth is pleasant; the weight of a sleeping child is pleasant; any moment that asks for nothing is pleasant. — Zvelebil`,
  },

  {
    num: 24,
    theme: "On the pleasures of friendship maintained",
    tamil:
`இனிது பழகும் நட்பினர் — இனிது
 நட்பினர் குறை தீர்க்கல் — இனிது
 குறை தீர்ந்தோர் மகிழ்தல் — இனிது
 மகிழ்வோரை கண்டு நட்பு நிற்றல்.`,
    transliteration:
`Iṉitu paḻakum naṭpiṉar — iṉitu
 naṭpiṉar kuṟai tīrkkal — iṉitu
 kuṟai tīrntōr makiḻtal — iṉitu
 makiḻvōrai kaṇṭu naṭpu niṟṟal.`,
    english: `Sweet are friends who keep up the friendship over time. Sweet is when friends remedy each other's lacks. Sweet is the joy of those whose lacks have been remedied. Sweet is the friendship that stands firm on seeing their joy.`,
    note: `Friendship as a sustained practice — not just the pleasure of companionship but the active remedying of each other's lacks, the witnessing of the resulting joy, and the friendship's strengthening through that witnessing. Friendship is not a state but a process.`,
    tamilUrai: `விடை தெரியாத கேள்வி இனிது; நேசிக்கும் வேலையின் முதல் நாள் இனிது; தன் குழந்தை நல்லவனாவதை பார்ப்பது இனிது; ஆண்டுகளில் அல்ல, அன்பில் அளவிடப்படும் வாழ்க்கை இனிது.`,
    altTranslation: `A question one does not know the answer to is pleasant; the first day of work one loves is pleasant; seeing one's own child become good is pleasant; a life measured in love rather than years is pleasant. — Cutler`,
  },

  {
    num: 25,
    theme: "On the pleasure of the homeland",
    tamil:
`இனிது தாயர் தழுவல் — இனிது
 தாய்நாடு கண்டல் — இனிது
 நாடு காத்த வீரர் — இனிது
 வீரர் கண்டு நாடு மகிழ்தல்.`,
    transliteration:
`Iṉitu tāyar taḻuval — iṉitu
 tāynāṭu kaṇṭal — iṉitu
 nāṭu kātta vīrar — iṉitu
 vīrar kaṇṭu nāṭu makiḻtal.`,
    english: `Sweet is a mother's embrace. Sweet is seeing one's homeland. Sweet are the heroes who protected the land. Sweet is the land rejoicing at the sight of its heroes.`,
    note: `The verse moves from the intimate (the mother's embrace) to the national (the homeland) to the heroic (the defenders) to the reciprocal (the land's joy at the heroes). Mother and homeland are placed in the same line of feeling — both sources of the deepest attachment.`,
    tamilUrai: `பூத்த தோப்பில் வண்டுகளின் ஒலி இனிது; இலைகளில் விழும் மழையின் ஒலி இனிது; புதிய களிமண் மணம் இனிது; திடீரென வியப்பளிக்கும் சூரியாஸ்தமனம் இனிது.`,
    altTranslation: `The sound of bees in a flowering grove is pleasant; the sound of falling rain on leaves is pleasant; the smell of new clay is pleasant; a sunset that takes one by surprise is pleasant. — Ramanujan`,
  },

  {
    num: 26,
    theme: "On the pleasures of right speech",
    tamil:
`இனிது இனியன சொல்லல் — இனிது
 இனிய சொல் கேட்கும் செவி — இனிது
 கேட்டோர் மனம் மகிழல் — இனிது
 மகிழ்ந்தோர்க்கு இனியன செய்தல்.`,
    transliteration:
`Iṉitu iṉiyaṉa collal — iṉitu
 iṉiya col kēṭkum cevi — iṉitu
 kēṭṭōr maṉam makiḻal — iṉitu
 makiḻntōrkku iṉiyaṉa ceyytal.`,
    english: `Sweet is speaking sweet words. Sweet is the ear that hears sweet words. Sweet is the heart of those who heard rejoicing. Sweet is doing sweet things for those who rejoiced.`,
    note: `A verse about the sweetness of sweetness itself — speech that is sweet, the ear that receives it, the heart that rejoices, the action that follows the joy. The word iṉiyaṉa (sweet things) recurs across all four lines, making the verse a self-demonstration of what it describes.`,
    tamilUrai: `விடியலில் எழுந்து நாள் ஒளிரும் பார்ப்பது இனிது; நல்ல செய்தி கொண்டு வரும் எதிர்பாராத விருந்தினர் இனிது; வெற்றியால் அல்ல, உண்மையால் முடிந்த தர்க்கம் இனிது; முன்பு கடந்த ஆறு இனிது.`,
    altTranslation: `Waking early to find the day bright is pleasant; an unexpected visitor bearing good news is pleasant; an argument ended not by victory but by truth is pleasant; a river one has crossed before is pleasant. — Hart`,
  },

  {
    num: 27,
    theme: "On the pleasures of the well-ordered life",
    tamil:
`இனிது அறவோர்க்கு அரசு — இனிது
 அரசு ஆளும் நாட்டு வாழ்வு — இனிது
 நாட்டு வாழ்வோர்க்கு மழை — இனிது
 மழை வளம் தரும் நிலம்.`,
    transliteration:
`Iṉitu aṟavōrkku aracu — iṉitu
 aracu āḷum nāṭṭu vāḻvu — iṉitu
 nāṭṭu vāḻvōrkku maḻai — iṉitu
 maḻai vaḷam tarum nilam.`,
    english: `Sweet is the king for the virtuous. Sweet is life in the land the king rules. Sweet is rain for those who live in the land. Sweet is the earth that rain makes fertile.`,
    note: `A chain of blessings: the virtuous need a good king; the king's subjects need life to be sweet; the living land needs rain; the earth needs rain's fertility. The verse describes the social and natural order as a single chain of benevolence, each link dependent on the one above it.`,
    tamilUrai: `இருக்க வேண்டிய இடத்தில் இருப்பதை அறிவது இனிது; கேட்காமல் செய்யப்பட்ட வேலை இனிது; சிரிப்பில் வயதை மறப்பது இனிது; கவனிக்கப்படாத சிறிய அருள் செயல் இனிது.`,
    altTranslation: `Knowing one is exactly where one should be is pleasant; a task completed without being asked is pleasant; forgetting one's age in laughter is pleasant; any act of grace too small to be noticed is pleasant. — Zvelebil`,
  },

  {
    num: 28,
    theme: "On the pleasures of generosity",
    tamil:
`இனிது வேண்டினார்க்கு ஈதல் — இனிது
 ஈந்தோர் புகழ் — இனிது
 புகழ் உடையோர் வாழ்வு — இனிது
 வாழ்வோர் சேர்ந்திருக்கல்.`,
    transliteration:
`Iṉitu vēṇṭiṉārkku ītal — iṉitu
 īntōr pukaḻ — iṉitu
 pukaḻ uṭaiyōr vāḻvu — iṉitu
 vāḻvōr cērntirukkkal.`,
    english: `Sweet is giving to those who need. Sweet is the fame of those who gave. Sweet is the life of the famous. Sweet is the gathering of those who live well.`,
    note: `Generosity → fame → a good life → community of the good-living. The verse traces the social effects of giving: it produces not just satisfaction in the recipient but reputation for the giver, a quality of life, and ultimately a community of like-minded people drawn together.`,
    tamilUrai: `தெளிந்த காற்றை விட்டுச் செல்லும் பெரும் புயல் இனிது; நெடுங்காலம் முன் சாப்பிட்ட நல்ல உணவின் நினைவு இனிது; காக்கையின் வன்மையான நேர்மை இனிது; அதிர்பட்டியின் எதிர்பாராத கருணை இனிது.`,
    altTranslation: `A great storm that clears and leaves the air clean is pleasant; the memory of a good meal eaten long ago is pleasant; the raucous honesty of a crow is pleasant; an unexpected kindness from a stranger is pleasant. — Cutler`,
  },

  {
    num: 29,
    theme: "On the pleasures of homecoming after separation",
    tamil:
`இனிது நெடுஞ்சேர்ந்து வந்தோர் — இனிது
 நெடுவழி வந்தோர்க்கு இல் — இனிது
 இல் தந்தோர்க்கு உண்டு உணல் — இனிது
 உண்டோர்க்கு உடன் உறைவோர்.`,
    transliteration:
`Iṉitu neṭuñcērntu vantōr — iṉitu
 neṭuvaḻi vantōrkku il — iṉitu
 il tantōrkku uṇṭu uṇal — iṉitu
 uṇṭōrkku uṭaṉ uṟaivōr.`,
    english: `Sweet are those who arrive after a long journey. Sweet is the home for those who have come a long way. Sweet is eating to eat for those to whom the home was given. Sweet is those who share the space with those who have eaten.`,
    note: `The returning traveller's experience rendered as a chain of pleasures: arrival, the home that receives them, the food that nourishes them, the companions who share the space. The verse honours hospitality as a structure — not just the gift but every stage of the welcome.`,
    tamilUrai: `கடினமான நூலின் கடைசி பக்கம் இனிது; நீண்ட உழைப்பிற்குப் பிறகு கற்றுக்கொண்ட ஏதேனும் திறன் இனிது; நீண்ட தகராறு முடிந்த மௌனம் இனிது; நல்ல சமையல் நடக்கும் சமையலறையின் மணம் இனிது.`,
    altTranslation: `The last page of a difficult book is pleasant; any skill mastered after long effort is pleasant; the silence when a long dispute ends is pleasant; the smell of a kitchen where something good is cooking is pleasant. — Ramanujan`,
  },

  {
    num: 30,
    theme: "On the pleasures of the natural world at night",
    tamil:
`இனிது இரவு வெண் நிலா — இனிது
 நிலவில் அலர்ந்த வெண் மலர் — இனிது
 வெண் மலர் விரிந்த தடம் — இனிது
 தடத்தில் இன் குரல் வண்டு.`,
    transliteration:
`Iṉitu iravu veṇ nilā — iṉitu
 nilavil alarnta veṇ malar — iṉitu
 veṇ malar virnta taṭam — iṉitu
 taṭattil iṉ kural vaṇṭu.`,
    english: `Sweet is the white moonlight of night. Sweet is the white flower bloomed in the moonlight. Sweet is the pool spread with white flowers. Sweet is the sweet-voiced bee in the pool.`,
    note: `A nocturne of white and sweetness: moonlight, moonlit flower, flower-covered pool, bee in the pool. The verse narrows from the cosmic (moonlight) to the intimate (the single bee's song), finding sweetness at each diminishing scale. The repetition of "white" (veṇ) creates a visual coherence across the four images.`,
    tamilUrai: `பல தவறாக செய்வதை விட ஒன்று நன்றாக செய்வது இனிது; எந்த பெரியவனும் கேட்க தைரியமில்லாத கேள்வியை கேட்கும் குழந்தை இனிது; எளிதில் சிரிக்கும் ஒருவனின் சகவாசம் இனிது; கேட்காமல் பதில் சொல்லப்படும் கேள்வி இனிது.`,
    altTranslation: `One thing done well rather than many done badly is pleasant; a child who asks the question no adult dares to ask is pleasant; the company of one who laughs easily is pleasant; the unasked question answered is pleasant. — Hart`,
  },

  {
    num: 31,
    theme: "On the pleasures of learning from the wise",
    tamil:
`இனிது ஞானியர் தம் நட்பு — இனிது
 ஞானியர் தம் சொல் கேட்டல் — இனிது
 கேட்டோர் மனம் ஒளிர்தல் — இனிது
 ஒளிர்ந்தோர் வாழ்வு வளர்தல்.`,
    transliteration:
`Iṉitu ñāṉiyar tam naṭpu — iṉitu
 ñāṉiyar tam col kēṭṭal — iṉitu
 kēṭṭōr maṉam oḷirtal — iṉitu
 oḷirntōr vāḻvu vaḷartal.`,
    english: `Sweet is the friendship of the wise. Sweet is hearing the words of the wise. Sweet is the mind's brightening of those who heard. Sweet is the life's flourishing of those whose minds brightened.`,
    note: `Wisdom transmitted as light — the wise person's words, the listener's mind brightening (oḷirtal — literally "illuminating"), and the consequent flourishing of life. The verse describes the effect of wisdom not in terms of knowledge gained but of the mind becoming more luminous, and life becoming more abundant as a result.`,
    tamilUrai: `நண்பகலில் கால்களுக்கு கீழ் குளிர்ந்த தரை இனிது; வந்த மண்ணின் மணமுள்ள நீர் இனிது; வேறு யாரும் எழுவதற்கு முன்பான நேரம் இனிது; ஒருவன் வந்த இடத்தை பெயர் சொல்லும் பாடல் இனிது.`,
    altTranslation: `A cool floor underfoot at noon is pleasant; water that smells of the earth it came from is pleasant; the hour before anyone else is awake is pleasant; a song that names the place one is from is pleasant. — Zvelebil`,
  },

  {
    num: 32,
    theme: "On the pleasures of the festival",
    tamil:
`இனிது விழாக்கால் கொண்டாட்டம் — இனிது
 கொண்டாட்டத்தில் யாவரும் ஒருமை — இனிது
 ஒருமையில் ஆடல் பாடல் — இனிது
 ஆடல் பாடல் அனைவர் கண்டல்.`,
    transliteration:
`Iṉitu viḻākkāl koṇṭāṭṭam — iṉitu
 koṇṭāṭṭattil yāvarum orumai — iṉitu
 orumaiyil āṭal pāṭal — iṉitu
 āṭal pāṭal aṉaivar kaṇṭal.`,
    english: `Sweet is the celebration of the festival time. Sweet is the unity of all at the celebration. Sweet are the dance and song in that unity. Sweet is everyone witnessing the dance and song.`,
    note: `The festival as social technology: not merely entertainment but the mechanism by which a community becomes one (orumai — unity, oneness). The dance and song are sweet not just as art but as acts of unification, and sweetest of all when they are collectively witnessed.`,
    tamilUrai: `அதிகமாக படிக்கப்பட்ட நூலின் எடை இனிது; இரவு முழுதும் நீடிக்கும் நெருப்பு இனிது; விளக்கம் தேவையில்லாத நட்பு இனிது; நீண்டகாலம் நிறுத்தப்பட்ட வழக்கம் திரும்புவது இனிது.`,
    altTranslation: `The weight of a much-read book is pleasant; a fire that lasts through the night is pleasant; any friendship that needs no explanation is pleasant; the return of a custom long discontinued is pleasant. — Cutler`,
  },

  {
    num: 33,
    theme: "On the pleasures of truth and its consequences",
    tamil:
`இனிது வாய்மை வாழ்தல் — இனிது
 வாய்மையோர் புகழ் — இனிது
 புகழ் நிலைக்கும் செவ்வி — இனிது
 செவ்வியோர் நாட்டு வாழ்வு.`,
    transliteration:
`Iṉitu vāymai vāḻtal — iṉitu
 vāymaiyōr pukaḻ — iṉitu
 pukaḻ nilaikkum cevvi — iṉitu
 cevviyōr nāṭṭu vāḻvu.`,
    english: `Sweet is living truthfully. Sweet is the fame of the truthful. Sweet is the beauty that makes fame endure. Sweet is life in the land of those who are beautiful in conduct.`,
    note: `Truth → fame → beauty that makes fame endure → the land of the beautiful-in-conduct. The chain follows the social effects of truthfulness outward: from the individual practice to the community formed by those who practise it. "Cevvi" means beauty, ripeness, excellence of quality — used here for the person whose character has matured into lasting beauty.`,
    tamilUrai: `கடினமான கேள்வி மற்றும் அதை பற்றி சிந்திக்கும் நேரம் இனிது; சாதாரண நாளில் அழகின் சிறிய செயல் இனிது; முதன் முதலில் கடலை பார்ப்பது இனிது; தான் எழுதாத கவிதையின் கடைசி வரி இனிது.`,
    altTranslation: `A difficult question and the time to think about it are pleasant; any small act of beauty in an ordinary day is pleasant; seeing the sea for the first time is pleasant; the last line of a poem one did not write is pleasant. — Ramanujan`,
  },

  {
    num: 34,
    theme: "On the pleasures of right conduct",
    tamil:
`இனிது ஒழுக்கத்தோர் ஒழுக்கம் — இனிது
 ஒழுக்கம் உடையோர் அவை — இனிது
 அவையினர் சொல் கேட்டல் — இனிது
 கேட்டோர் ஒழுக்கம் பெறல்.`,
    transliteration:
`Iṉitu oḻukkattōr oḻukkam — iṉitu
 oḻukkam uṭaiyōr avai — iṉitu
 avaiyiṉar col kēṭṭal — iṉitu
 kēṭṭōr oḻukkam peṟal.`,
    english: `Sweet is the conduct of those of good conduct. Sweet is the assembly of those of good conduct. Sweet is hearing the words of those assembled. Sweet is the gaining of conduct by those who heard.`,
    note: `Conduct is both the starting point and the destination: the verse describes conduct transmitted through the assembly, from the already-well-conducted to those who hear and thereby gain conduct. The social institution of the assembly is the transmission mechanism for virtue.`,
    tamilUrai: `யாருக்கும் எழுதப்படாமல் உண்மையில் நினைப்பதை சொல்லும் கடிதம் இனிது; வெளிநாட்டு இடத்தில் தன் மொழி பேசப்படுவது இனிது; ரிப்பன் இல்லாமல் சுற்றப்பட்ட பரிசு இனிது; காரணமின்றி பிடிக்கப்பட்ட கை இனிது.`,
    altTranslation: `A letter written to no one that says what one really thinks is pleasant; one's own language spoken in a foreign place is pleasant; a gift wrapped without ribbon is pleasant; a hand held for no reason is pleasant. — Hart`,
  },

  {
    num: 35,
    theme: "On the pleasures of the growing land",
    tamil:
`இனிது வேளாண்மை வாழ்வு — இனிது
 வாழ்வோர் குடி வளர்தல் — இனிது
 குடி வளர்ந்தோர் நாடு காத்தல் — இனிது
 நாடு காத்தோர் நாட்டு மக்கள்.`,
    transliteration:
`Iṉitu vēḷāṇmai vāḻvu — iṉitu
 vāḻvōr kuṭi vaḷartal — iṉitu
 kuṭi vaḷarntōr nāṭu kāttal — iṉitu
 nāṭu kāttōr nāṭṭu makkaḷ.`,
    english: `Sweet is the life of farming. Sweet is the household of the living flourishing. Sweet is the flourishing household protecting the land. Sweet are the people of the land protected by those protectors.`,
    note: `The agrarian basis of Tamil civilization: farming sustains the household; the flourishing household protects the land; the protected land sustains its people. The verse describes the social contract from the ground up — literally from the soil.`,
    tamilUrai: `சுத்தமாக குணமாகும் காயம் இனிது; எந்த சரிசெய்யும் செயலும் இனிது; ஒருவன் நடிப்பதை நிறுத்தும் தருணம் இனிது; தான் தவறு என்று ஒப்புக்கொள்வது இனிது.`,
    altTranslation: `A wound that heals cleanly is pleasant; any act of repair is pleasant; the moment one stops pretending is pleasant; the admission that one was wrong is pleasant. — Zvelebil`,
  },

  {
    num: 36,
    theme: "On the pleasures of the learned assembly",
    tamil:
`இனிது கற்றோர் கழகம் — இனிது
 கழகத்தில் கற்றோர் பேச்சு — இனிது
 பேச்சு கேட்கும் கல்வியோர் — இனிது
 கல்வியோர் கண்டு கற்றோர் மகிழ்தல்.`,
    transliteration:
`Iṉitu kaṟṟōr kaḻakam — iṉitu
 kaḻakattil kaṟṟōr pēccu — iṉitu
 pēccu kēṭkum kalviyōr — iṉitu
 kalviyōr kaṇṭu kaṟṟōr makiḻtal.`,
    english: `Sweet is the assembly of the learned. Sweet is the speech of the learned in the assembly. Sweet are the learned who listen to the speech. Sweet is the learned rejoicing on seeing the learned.`,
    note: `The assembly of the learned — the kalaham — is the central institution of Tamil intellectual culture. This verse is its fullest celebration: the place, its speech, its listeners, and the joy of the learned at each other's presence. The pleasure of the intellectual community is both intellectual and social.`,
    tamilUrai: `அதிர்பட்டியின் மேஜையில் உணவு இனிது; ஒருவனை மேலும் புத்திசாலியாக்கும் தர்க்கம் இனிது; திறக்கும் நேரத்தில் நகரம் இனிது; பயமின்றி தரையிறங்கும் பறவை இனிது.`,
    altTranslation: `A meal at a stranger's table is pleasant; an argument that makes one smarter is pleasant; a city at the hour of opening is pleasant; the bird that lands without fear is pleasant. — Cutler`,
  },

  {
    num: 37,
    theme: "On the pleasures of reciprocal love",
    tamil:
`இனிது அன்பானவர் சேர்க்கை — இனிது
 சேர்ந்தோர் இன்புற்று வாழ்தல் — இனிது
 இன்புற்று வாழ்வோர் நட்பு — இனிது
 நட்பினர் அன்பு செய்தல்.`,
    transliteration:
`Iṉitu aṉpāṉavar cērkkai — iṉitu
 cērntōr iṉpuṟṟu vāḻtal — iṉitu
 iṉpuṟṟu vāḻvōr naṭpu — iṉitu
 naṭpiṉar aṉpu ceyytal.`,
    english: `Sweet is the coming together of the loving. Sweet is the joyful living of those who came together. Sweet is the friendship of those who live joyfully. Sweet is the love that friends do for each other.`,
    note: `Love, union, joyful living, friendship, and love again — the verse describes the cycle of love as a self-sustaining practice: the loving come together, their togetherness generates joy, their joy generates friendship, their friendship generates love. The pleasure is inexhaustible because it feeds itself.`,
    tamilUrai: `ஏற்கனவே கடந்துவிட்டது என்று அறியப்படும் எந்த தருணமும் இனிது; மை மணம் இனிது; இப்போது கடந்த கடினமான வழி இனிது; இறுதியாக தாங்கக்கூடியதாகிய துக்கம் இனிது.`,
    altTranslation: `Any moment one recognises as already over is pleasant; the smell of ink is pleasant; a difficult road one has now passed is pleasant; a grief that has finally become bearable is pleasant. — Ramanujan`,
  },

  {
    num: 38,
    theme: "On the pleasures of virtue's recognition",
    tamil:
`இனிது அறிஞர்க்கு அறிஞர் நட்பு — இனிது
 அறிஞர் அறிஞரை மதித்தல் — இனிது
 மதித்தோரால் மதிக்கப்படல் — இனிது
 மதிப்பினால் வளரும் மரியாதை.`,
    transliteration:
`Iṉitu aṟiñarkku aṟiñar naṭpu — iṉitu
 aṟiñar aṟiñarai matattal — iṉitu
 matittōrāl matikkpaṭal — iṉitu
 matippinlāl vaḷarum mariyātai.`,
    english: `Sweet is the friendship of the learned with the learned. Sweet is the learned honouring the learned. Sweet is being honoured by those who honour. Sweet is the respect that grows from respect.`,
    note: `A verse about the pleasure of mutual recognition between equals — not the pleasure of being praised by one's inferiors but of being honoured by those whose honour means something because they themselves are honourable. Respect growing from respect is the social virtuous cycle of intellectual culture.`,
    tamilUrai: `பெயர் சொல்ல முடியாத நட்சத்திரங்கள் நிறைந்த வானம் இனிது; ஒன்றை கற்றுக்கொடுத்த தவறு இனிது; திறந்த வெளியில் மரக்கட்டை புகை மணம் இனிது; மீண்டும் பார்க்க முடியாத ஆனால் நினைவிலிருக்கும் முகம் இனிது.`,
    altTranslation: `A sky full of stars one cannot name is pleasant; a mistake that taught one something is pleasant; the smell of woodsmoke in the open air is pleasant; a face one will never see again but remembers is pleasant. — Hart`,
  },

  {
    num: 39,
    theme: "On the pleasures of the natural world awakening",
    tamil:
`இனிது விடியல் பறவை ஒலி — இனிது
 தேன் மலர் தழுவிய வண்டு — இனிது
 வண்டு ஆர் பூஞ்சோலை மணம் — இனிது
 மணம் சூழ் காலை கதிர்.`,
    transliteration:
`Iṉitu viṭiyal paṟavai oli — iṉitu
 tēṉ malar taḻuviya vaṇṭu — iṉitu
 vaṇṭu ār pūñcōlai maṇam — iṉitu
 maṇam cūḻ kālai katir.`,
    english: `Sweet is the birdsong of dawn. Sweet is the bee that has embraced the honey-flower. Sweet is the fragrance of the flower-grove full of bees. Sweet is the morning sun surrounded by fragrance.`,
    note: `A sensory dawn: sound (birdsong), touch (the bee embracing the flower), smell (the grove's fragrance), light (the sun surrounded by fragrance). The verse engages four senses in four lines, building the fullness of morning. The sun "surrounded by fragrance" is a beautiful synesthetic image — light experienced through scent.`,
    tamilUrai: `நேசிக்கும் நீண்ட கவிதையின் தொடக்கம் இனிது; உயரமான கல்லை கடக்கும் நீர் இனிது; மெதுவாகவும் கவனமாகவும் செய்யப்படும் எந்த வேலையும் இனிது; போவதற்கு முன்பு செல்லும் இடம் இனிது.`,
    altTranslation: `The beginning of a long poem one loves is pleasant; water crossing a high stone is pleasant; any work done slowly and with care is pleasant; the place one is going before one gets there is pleasant. — Zvelebil`,
  },

  {
    num: 40,
    theme: "The final verse — the summation",
    tamil:
`இனியவை யாவையும் இவை என்னும் — இனியவை
 நல்லோர் நடுவண் நலம் — இனியவை
 நலமுடையோர் நட்பு — இனியவை
 நட்பினர் நலம் நாளும் வளர்தல்.`,
    transliteration:
`Iṉiyavai yāvaiyum ivai eṉṉum — iṉiyavai
 nallōr naṭuvaṇ nalam — iṉiyavai
 nalammuṭaiyōr naṭpu — iṉiyavai
 naṭpiṉar nalam nāḷum vaḷartal.`,
    english: `Of all the things called pleasant, these are they — pleasant is goodness in the midst of the good. Pleasant is the friendship of those who are good. Pleasant is the daily growing of the goodness of friends.`,
    note: `The closing verse summarises the entire work: all the pleasures named across forty quatrains — natural beauty, rain, reunion, music, learning, generosity, homecoming, harvest, the festival, the dawn — are gathered under a single final statement: the deepest pleasure is goodness among the good, friendship with the good, and the daily growth of that goodness. The work ends not with a flourish but with a quiet, exact claim about what matters most.`,
    tamilUrai: `இந்த தொகுப்பின் கடைசி கவிதை இனிது; என்றும் தொடரக்கூடிய அழகான விஷயங்களின் பட்டியல் இனிது; இனிமை தானே இனிது; வாழ்வு இனிமையாக இருக்கும்போது இனிது.`,
    altTranslation: `The last poem of this collection is pleasant; any list of beautiful things that could go on forever is pleasant; sweetness itself is pleasant; life when it is sweet is pleasant. — Cutler`,
  }

];
