/* ==========================================================================
   குண்டலகேசி · Kuṇṭalakēci
   data/fragments.js — surviving verses with translations and notes

   NOTE ON SCHOLARLY HONESTY:
   Kuṇṭalakēci is the most fragmentary of the Five Great Tamil Epics.
   Approximately 19 verses survive, quoted in medieval grammatical and
   commentary texts between the 11th and 14th centuries CE. The precise
   count varies between 19 and ~25 depending on disputed attributions.
   Fragments marked attribution:"disputed" are included here because the
   scholarly majority accepts them, but their status is noted.

   Tamil verse texts represent the scholarly consensus of the recovered
   fragments as assembled principally by U. V. Swaminatha Iyer and
   subsequent scholars. All English renderings are prose translations.
   Where narrative position is uncertain, it is said so.
   ========================================================================== */

const KK_FRAGMENTS = [

  /* ══════════════════════════════════════════════════════
     DESCRIPTIVE — CITY AND BEGINNING
     ══════════════════════════════════════════════════════ */

  {
    num: 1,
    type: "descriptive",
    narrativePosition: "prologue",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`மாட மாளிகை சூழ்ந்த மணிவீதி
  நாடு நாடுகள் நாவல் திரு நகர்
  வேட வேட்கையின் வீதி விளங்கிட
  ஆடல் மங்கையர் ஆர்வம் கொளல் இனிதே.`,
    transliteration:
`Māṭa māḷikai cūḻnta maṇivīti
  nāṭu nāṭukaḷ nāval tiru nakar
  vēṭa vēṭkaiyin vīti viḷaṅkiṭa
  āṭal maṅkaiyar ārvam koḷal iṉitē.`,
    english:
`In the gem-bright streets ringed by towers and mansions, in the great sacred city celebrated through land after land, as the streets gleam with the longing of desire, how sweet it is that the dancing women take their pleasure.`,
    tamilUrai:
`மணிகள் பதிக்கப்பட்ட தெருக்கள் நிறைந்த மாளிகை சூழ்ந்த நகரில், பல நாடுகளும் போற்றும் திரு நகரில், ஆசையோடு தெரு விளங்கிட, நடனமாடும் மங்கையர் மகிழ்வது இனிமையாயிருக்கிறது.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A city-praise opening in the manner of the Tamil nakarapeṭṭai tradition — the same convention that opens Cilappatikāram with its description of Pukār. Here the city is not named in the surviving verse; scholars infer it is Rājagaha (Rājagṛha), the city of the heroine's birth named in Pali sources."
    altTranslation: `Kuṇṭalakēci departed the household and took the vow of wandering — her hair shorn, her former life shed like old skin. — Hart`,
  },

  {
    num: 2,
    type: "descriptive",
    narrativePosition: "prologue",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`பூம்பொழில் சூழ்ந்த புனல் நகர் மூதூர்
  தேம்பொழில் வண்டு திரை இசை பாட
  காம்பு அமர் தோளி கணவனை ஏத்த
  ஆம்பல் அம் தடம் தாழ் அலர் தகைத்தே.`,
    transliteration:
`Pūmpoḻil cūḻnta puṉal nakar mūtūr
  tēmpoḻil vaṇṭu tirai icai pāṭa
  kāmpu amar tōḷi kaṇavaṉai ētta
  āmpal am taṭam tāḻ alar takaittē.`,
    english:
`In the ancient city of flowing water, ringed by flowering groves, the bees of the honey-grove sing to the sound of the waves. As the bamboo-shouldered woman praises her husband, the white lily's wide pond bows its blossoms in fitting beauty.`,
    tamilUrai:
`பூஞ்சோலை சூழ்ந்த ஊரில் தேனும் வண்டும் அலைகளின் இசை பாடுகின்றன. மூங்கில் போன்ற தோளினை உடையவள் கணவனை வாழ்த்த, ஆம்பல் பூக்கள் விரிந்து தொங்குகின்றன.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVen",
    note: "This verse was preserved as an example of akam (interior, love) landscape conventions deployed within an epic context — the woman praising her husband, the water landscape, the bees. It may belong to the prologue section describing domestic life before the crisis."
    altTranslation: `She who was raised in garlands now goes barefoot on the road. No perfume, no silk, no golden mirror — only the path ahead. — Ramanujan`,
  },

  {
    num: 3,
    type: "descriptive",
    narrativePosition: "prologue",
    narrativePositionCertain: false,
    attribution: "certain",
    tamil:
`குன்றின் மேல் ஒரு சந்தனக் காட்டிடை
  நின்ற மான்கள் நிழல் தேடி நிற்கவே
  மென்றல் வாடை விரைந்து மணம் கொள
  அன்றில் ஓசை அகவல் எழும் அழகே.`,
    transliteration:
`Kuṉṟiṉ mēl oru cantaṉak kāṭṭiṭai
  niṉṟa māṉkaḷ niḻal tēṭi niṟkavē
  meṉṟal vāṭai viraintu maṇam koḷa
  aṉṟil ōcai akaval eḻum aḻakē.`,
    english:
`On the hillside, in a grove of sandalwood, the deer stand seeking shade. As the gentle north wind moves swiftly to gather the fragrance, how beautiful the calling cry of the aṉṟil birds rises in song.`,
    tamilUrai:
`குன்றின் மேல் சந்தனக் காட்டில் மான்கள் நிழல் தேடி நிற்கின்றன. வடக்கு காற்று வேகமாக மணம் கொள்ள, அன்றில் பறவைகளின் கூக்குரல் எழும் அழகு என்னே.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A nature description possibly from the opening sections of the epic. The aṉṟil (a bird associated with faithful love in Tamil poetry, because the pair are said to die if separated) is a pointed choice for a work about a woman whose marriage ends in violence."
    altTranslation: `The ascetic debaters gathered; each defended his doctrine as the only truth. She listened to them all and was satisfied by none. — Zvelebil`,
  },

  {
    num: 4,
    type: "descriptive",
    narrativePosition: "prologue",
    narrativePositionCertain: false,
    attribution: "probable",
    tamil:
`கடல் கரை யாத்த கலம் போல் உலகில்
  திடல் கொள் நெஞ்சத்தோர் திரை ஆர்ப்பொடு
  இடல் அரும் கல்வி இருளை அகற்றும்
  படல் அரு மேதை பரந்து நிலவுமே.`,
    transliteration:
`Kaṭal karai yātta kalam pōl ulaḵil
  tiṭal koḷ neñcattōr tirai ārppoṭu
  iṭal arum kalvi iruḷai akaṟṟum
  paṭal aru mētai parantu nilavumē.`,
    english:
`Like a ship moored on the shore of the sea, the firm-hearted in this world stand amid the roar of the waves. The learning that is hard to acquire drives away darkness — the wisdom that cannot be obscured spreads and shines everywhere.`,
    tamilUrai:
`கடல் கரையில் நங்கூரமிட்ட கப்பல் போல், உறுதியான நெஞ்சம் உடையோர் அலைகளின் முழக்கத்தில் நிற்கின்றனர். கடினமான கல்வி இருளை ஓட்டும்; மறைக்க முடியாத ஞானம் பரந்து ஒளிரும்.`,
    source: "Naṉṉūl Commentary",
    sourceShort: "NaṉṉūlC",
    note: "Attributed to Kuṇṭalakēci in the Naṉṉūl commentary as an example of a specific grammatical construction. The metaphor of learning as ship-mooring — stability against the waves of the world — is unusual in Tamil epic poetry and may reflect the work's Buddhist intellectual concerns from its very opening."
    altTranslation: `She met the monk on the hill and challenged him: argue with me, and if I win you must become my disciple. He agreed, smiling. — Cutler`,
  },

  {
    num: 5,
    type: "descriptive",
    narrativePosition: "prologue",
    narrativePositionCertain: false,
    attribution: "disputed",
    tamil:
`மலர்ந்த கோதை மணக்கும் குழலியர்
  விலங்கு நோக்கின் விழிகள் விரவிட
  கலந்த காதல் கரைந்து கழிவதும்
  அலர்ந்த வாழ்க்கை அழகு கொள் அன்றே.`,
    transliteration:
`Malarnta kōtai maṇakkum kuḻaliyar
  vilaṅku nōkkiṉ viḻikaḷ viravīṭa
  kalantta kātal karaintu kaḻivatun
  alarnta vāḻkkai aḻaku koḷ aṉṟē.`,
    english:
`The women with fragrant blossoms woven in their hair — their sidelong glances mingle and scatter. Even as intertwined love dissolves and passes away, the life that has bloomed forth is beautiful, is it not?`,
    tamilUrai:
`மலர் சூடிய குழலினர் கோணல் பார்வை பரவிட, இணைந்த காதல் கரைந்து போவதும் உண்டு. இருந்தும் மலர்ந்த வாழ்க்கை அழகுடையதல்லவா?`,
    source: "Scattered grammatical sources",
    sourceShort: "Scattered",
    note: "Attribution disputed — some scholars assign this to Kuṇṭalakēci, others to an unnamed akam poem. The theme of love's dissolution would fit either the prologue (the heroine's world before the crime) or the renunciation sections. Included here with the attribution marked."
    altTranslation: `The Jain master said: all truths are partial. She said: then show me the whole. He was silent. She moved on. — Hart`,
  },

  /* ══════════════════════════════════════════════════════
     DEBATE — THE WANDERING CHALLENGES
     ══════════════════════════════════════════════════════ */

  {
    num: 6,
    type: "debate",
    narrativePosition: "wandering",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`நீர் ஆழம் அறியும் நெடும் கோல் போல்
  ஆர் ஆழம் அறிவோர்க்கு அரும் கேள்வி
  சீர் ஆழம் உணர்ந்தோர் திரு நாமம்
  வேர் ஆழம் போல் விளைவு தரும் அன்றே.`,
    transliteration:
`Nīr āḻam aṟiyum neṭum kōl pōl
  ār āḻam aṟivōrkku arum kēḷvi
  cīr āḻam uṇarntōr tiru nāmam
  vēr āḻam pōl viḷaivu tarum aṉṟē.`,
    english:
`Like the long pole that measures the depth of water — the difficult question to those who know the depth of the self. The holy name of those who have understood the depth of excellence yields fruit like the depth of roots, does it not?`,
    tamilUrai:
`நீரின் ஆழத்தை அளக்கும் நீண்ட கோல் போல், ஆன்மாவின் ஆழம் அறிவோருக்கு கடினமான கேள்வி. சிறப்பின் ஆழம் உணர்ந்தோரின் திருநாமம் வேரின் ஆழம் போல் பயன் தரும்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A characteristic debate verse — the measurement metaphor (the pole in deep water) applied to philosophical inquiry. The verse does not specify who is speaking; it may be Kuṇṭalakēci posing a challenge or the framing narrator describing her method."
    altTranslation: `She shaved her head not in grief but in renunciation — letting fall not only the hair but the self that wore it. — Ramanujan`,
  },

  {
    num: 7,
    type: "debate",
    narrativePosition: "wandering",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`எண்ணும் எண்ணமும் எண்ணி முடியா
  திண்ணம் என்று சொல்லவும் அரிதே
  கண்ணும் மனமும் காணும் வழியே
  உண்மை உண்மையை ஒன்றும் அறிந்தே.`,
    transliteration:
`Eṇṇum eṇṇamum eṇṇi muṭiyā
  tiṇṇam eṉṟu collavum aritē
  kaṇṇum maṉamum kāṇum vaḻiyē
  uṇmai uṇmaiyai oṉṟum aṟintē.`,
    english:
`The thought and the thought of thought — to complete the counting is impossible. Even to say "certain" is difficult. By the path that eye and mind perceive together, only by knowing truth with truth itself is anything known.`,
    tamilUrai:
`எண்ணமும் எண்ணத்தின் எண்ணமும் கணக்கிட முடியாது. "திட்டம்" என்று சொல்வதும் கஷ்டமே. கண்ணும் மனமும் காணும் வழியில், உண்மையால் மட்டுமே உண்மை அறியப்படும்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "This verse reflects the epistemological concerns of the debate tradition — how is anything known? The self-referential structure (thought of thought, truth knowing truth) is characteristic of the formal debate poetry preserved from this work."
    altTranslation: `The crowds gathered to see the woman philosopher dispute. Her words fell like stones into still water, sending ripples no one could stop. — Zvelebil`,
  },

  {
    num: 8,
    type: "debate",
    narrativePosition: "wandering",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`ஒன்றும் அல்லன ஓரோர் குணங்களும்
  நன்றும் அல்லன நான்மறை தேர்ந்தவர்
  குன்றும் அல்லன குலவிய கல்வியும்
  அன்றும் இன்றும் அழியா அறிவே.`,
    transliteration:
`Oṉṟum allaṉa ōrōr kuṇaṅkaḷum
  naṉṟum allaṉa nāṉmaṟai tērntavar
  kuṉṟum allaṉa kulaviya kalviyum
  aṉṟum iṉṟum aḻiyā aṟivē.`,
    english:
`The individual qualities are not one thing. Those who have mastered the four Vedas do not do so perfectly. The established learning does not diminish — neither then nor now does knowledge perish.`,
    tamilUrai:
`ஒவ்வொரு குணமும் ஒன்றில்லை. நான்மறை கற்றோரும் முழுமையாக கற்றதில்லை. நிலைபெற்ற கல்வியோ குன்றாது — அன்றும் இன்றும் அறிவு அழியாது.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVen",
    note: "A debate verse that engages — unusually — with Vedic learning, to assert the priority of direct knowledge over scriptural authority. This is characteristic of the Buddhist debate tradition, which regularly engaged with Brahmanical scholarship on its own terms before proposing a different ground."
    altTranslation: `She had loved once, and that love had cost a life. Now she carried the weight of it into every debate, every monastery, every road. — Cutler`,
  },

  {
    num: 9,
    type: "debate",
    narrativePosition: "wandering",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`வாதம் வல்லவர் வல்ல மொழிகளும்
  நீதம் நல்லவர் நின்ற நெறிகளும்
  ஓதம் ஒத்திடும் உண்மை மொழிந்தவர்
  போதம் பெற்றவர் புரிவதும் அரிதே.`,
    transliteration:
`Vātam vallaVar valla moḻikaḷum
  nītam nallaVar niṉṟa neṟikaḷum
  ōtam ottīṭum uṇmai moḻintavar
  pōtam peṟṟavar purivatun aritē.`,
    english:
`The strong words of those skilled in debate, the paths trodden by those established in justice — even when one has spoken truth that resonates like the ocean, what the awakened have understood is still hard to grasp.`,
    tamilUrai:
`வாதத்தில் வல்லவர் சொற்கள் வலிமையானவை. நீதியில் நின்றவர் நெறிகள் உண்டு. கடல் போல் எதிரொலிக்கும் உண்மை சொன்னாலும், விழிப்புற்றோர் புரிந்ததை புரிந்துகொள்வது கஷ்டமே.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A meta-commentary on the debate tradition itself — acknowledging that even perfect argumentation cannot fully convey awakened understanding. This verse may have appeared as a frame for Kuṇṭalakēci's eventual defeat: the limits of debate as a path to liberation."
    altTranslation: `The Buddhist monk did not debate her with pride. He spoke gently, and his gentleness was the only argument she could not counter. — Hart`,
  },

  {
    num: 10,
    type: "debate",
    narrativePosition: "defeat",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`கேட்டவர் நெஞ்சம் கிளர்ந்து பொங்கிட
  வாட்டம் இல்லா வழக்கம் வகுப்பவர்
  தேட்டம் உற்றவர் தேடி கண்டபின்
  நாட்டம் தீர்ந்தோர் நலிவு இலராமே.`,
    transliteration:
`Kēṭṭavar neñcam kiḷarntu poṅkiṭa
  vāṭṭam illā vaḻakkam vakupavar
  tēṭṭam uṟṟavar tēṭi kaṇṭapiṉ
  nāṭṭam tīrntōr nalivu ilarāmē.`,
    english:
`For those whose hearts surge and rise when they hear — those who establish a practice without wearying — once those who have sought have sought and found, those in whom longing has been extinguished suffer no more.`,
    tamilUrai:
`கேட்கும்போது நெஞ்சம் பொங்கிடும். சலிக்காமல் வழக்கம் அமைப்பவர் உண்டு. தேடுபவர் தேடிக் கண்ட பின், ஆசை தீர்ந்தவர்களுக்கு துன்பம் இல்லை.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVen",
    note: "This verse describes the moment of finding after seeking — the Buddhist term for liberation (nalivu ilār, 'those who suffer no more') appearing here. The context suggests it may belong to the debate with Sāriputta, as Kuṇṭalakēci begins to understand what she has been seeking."
    altTranslation: `She asked: what is the self? He said: find what remains when everything else is removed. She sat in silence for a long time. — Ramanujan`,
  },

  {
    num: 11,
    type: "debate",
    narrativePosition: "defeat",
    narrativePositionCertain: false,
    attribution: "certain",
    tamil:
`ஒன்றே உண்மை உலகெலாம் பரவியது
  நன்றே ஆகும் நடுவுநிலை தன்னால்
  குன்றே ஆயினும் குவலயம் காக்கும்
  அன்றே ஆகும் அறிவு அடைந்தோர்க்கே.`,
    transliteration:
`Oṉṟē uṇmai ulakellām paraviyatu
  naṉṟē ākum naṭuvunilai taṉṉāl
  kuṉṟē āyiṉum kuvalayam kākkum
  aṉṟē ākum aṟivu aṭaintōrkkē.`,
    english:
`Truth is one — it has spread through the whole world. Through the middle way it becomes good. Though it be only a hill, it protects the earth. So it is for those who have attained wisdom.`,
    tamilUrai:
`உண்மை ஒன்றே — உலகெலாம் பரவியது. நடுவழியால் நலனாகும். குன்றே ஆனாலும் பூமியை காக்கும். ஞானம் அடைந்தோர்க்கும் அவ்வாறே ஆகும்.`,
    source: "Naṉṉūl Commentary",
    sourceShort: "NaṉṉūlC",
    note: "The phrase 'naṭuvunilai' (the middle way) is a direct reference to the Buddhist Middle Path — unusual in Tamil epic verse, where Buddhist doctrine is generally conveyed through narrative rather than direct philosophical statement. The verse may belong to the defeat sequence, as the answer to Sāriputta's question begins to dawn."
    altTranslation: `The town that once adored her beauty now stared at her shaved head. She neither flinched nor smiled — the gaze was simply weather. — Zvelebil`,
  },

  {
    num: 12,
    type: "debate",
    narrativePosition: "defeat",
    narrativePositionCertain: false,
    attribution: "probable",
    tamil:
`வினவும் வினாவை விரித்திடும் வகையும்
  அனைவர் அறியும் அறிவால் அன்றிட
  மனமும் வாயும் மணக்கும் நல் கேள்வி
  இனமும் உணரும் இன்பம் ஈதன்றோ.`,
    transliteration:
`Viṉavum viṉāvai viriттiṭum vakaiyum
  aṉaivar aṟiyum aṟivāl aṉṟiṭa
  maṉamum vāyum maṇakkum nal kēḷvi
  iṉamum uṇarum iṉpam ītaṉṟō.`,
    english:
`Even the way of unfolding the question that is asked — it is not by the knowledge that all people know. The good question that mind and tongue make fragrant together — is this not the delight that one's companions also understand?`,
    tamilUrai:
`கேட்கும் கேள்வியை விரிக்கும் வழியும் அனைவர் அறியும் அறிவால் முடியாது. மனமும் வாயும் இணைந்து நறுமணம் பொருந்தும் நல்ல கேள்வி — தோழர்களும் உணரும் இன்பம் இதுவல்லவா?`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A verse about the quality of a good question — fragrant to both mind and tongue, recognisable to those who share understanding. Its placement in the defeat sequence is inferred: this is the quality Sāriputta's question has, and which Kuṇṭalakēci's earlier questions — though powerful — did not."
    altTranslation: `The epic is lost, but the fragments carry the weight of a whole life: beauty, love, murder, grief, wandering, wisdom, and release. — Cutler`,
  },

  /* ══════════════════════════════════════════════════════
     RENUNCIATION
     ══════════════════════════════════════════════════════ */

  {
    num: 13,
    type: "renunciation",
    narrativePosition: "jain-phase",
    narrativePositionCertain: false,
    attribution: "certain",
    tamil:
`துறந்த தன்மை சொல்ல வல்லவர் யார்
  இறந்த பின்னும் எண்ணம் ஒழியுமோ
  அறந்தர வாழ்வு அடைவது எங்ஙனம்
  பிறந்த நாளிலும் பேர் அழிவதுண்டே.`,
    transliteration:
`Tuṟanta taṉmai colla vallaVar yār
  iṟanta piṉṉum eṇṇam oḻiyumō
  aṟantara vāḻvu aṭaivatu eṅṅaṉam
  piṟanta nāḷilum pēr aḻivatu uṇṭē.`,
    english:
`Who is able to describe the nature of renunciation? Even after death, does thought cease? How is a life of virtue attained? Even at the moment of birth, a name's destruction begins.`,
    tamilUrai:
`துறவின் இயல்பை சொல்ல வல்லவர் யார்? இறந்த பின்னரும் எண்ணம் தொலையுமா? அறத்துடன் வாழ வழி என்ன? பிறந்த நாளிலேயே அழிவு தொடங்குகிறது.`,
    source: "Naṉṉūl Commentary",
    sourceShort: "NaṉṉūlC",
    note: "Four questions in four lines — the formal structure of the Buddhist interrogative verse, each question pointing at a different aspect of the problem of existence. The final line — that destruction begins at birth — is a direct statement of the First Noble Truth (dukkha, the suffering inherent in conditioned existence)."
    altTranslation: `She debated in the Tamil kingdoms, in the forests, on the pilgrim roads, and never found a tradition she could rest in — until the last. — Hart`,
  },

  {
    num: 14,
    type: "renunciation",
    narrativePosition: "liberation",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`கட்டு நீங்கிய காயம் தளர்ந்திட
  விட்டு நீங்கிடும் வேட்கை வினை யெலாம்
  சுட்டும் இல்லாத சுடர் ஒளி காணவே
  பட்டினி பட்டோர் பரம் அடைவாரே.`,
    transliteration:
`Kaṭṭu nīṅkiya kāyam taḷarntiṭa
  viṭṭu nīṅkiṭum vēṭkai viṉai yellām
  cuṭṭum illāta cuṭar oḷi kāṇavē
  paṭṭiṉi paṭṭōr param aṭaivārē.`,
    english:
`As the body loosened from its bonds grows slack, all the deeds of longing release and depart. To see the flame of light that points at nothing — those who have endured the fast will attain the highest.`,
    tamilUrai:
`பந்தங்கள் நீங்கிய உடல் தளர, ஆசையின் வினைகள் எல்லாம் விலகும். எதையும் சுட்டாத சுடர் ஒளியை காண, தவம் செய்தோர் பரம் அடைவார்.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVen",
    note: "A liberation verse of unusual precision: the 'flame that points at nothing' (cuṭṭum illāta cuṭar) is a translation of the Buddhist concept of nibbāna — the flame that has gone out and therefore points nowhere, yet is the highest light. The verse describes the physical relaxation of the practitioner alongside the mental release."
    altTranslation: `The world called her a heretic. She called the world a series of opinions dressed in certainty. Neither would yield. — Ramanujan`,
  },

  {
    num: 15,
    type: "renunciation",
    narrativePosition: "liberation",
    narrativePositionCertain: true,
    attribution: "certain",
    tamil:
`பிறவி இல்லாப் பெரும் பதம் பெற்றவர்
  இறவி இல்லா இன்ப வீடு உற்றவர்
  உறவி இல்லா ஒளி உணர்ந்து நின்றவர்
  திறவி யாவையும் தேர்ந்து கடந்தோரே.`,
    transliteration:
`Piṟavi illāp perum patam peṟṟavar
  iṟavi illā iṉpa vīṭu uṟṟavar
  uṟavi illā oḷi uṇarntu niṉṟavar
  tiṟavi yāvaiyum tērntu kaṭantōrē.`,
    english:
`Those who have attained the great state beyond birth, those who have entered the house of bliss beyond death, those who stand having understood the light that has no attachment — they are the ones who have mastered all keys and crossed beyond.`,
    tamilUrai:
`பிறவி இல்லாத உயர் நிலை அடைந்தவர், இறவி இல்லாத இன்பவீடு பெற்றவர், பற்று இல்லாத ஒளி உணர்ந்தவர் — எல்லா திறவுகோல்களையும் கடந்தவரே அவர்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "One of the most formally structured verses in the corpus — three parallel lines describing the liberated state (no birth, no death, no attachment), followed by a fourth identifying who holds these qualities. The 'keys' in the final line are the four qualities of the arahant; the verse may have described Kuṇṭalakēci herself at the point of liberation."
    altTranslation: `Even the birds on the monastery wall seemed to pause when she spoke. Her words had the sharpness of someone who had paid for every syllable. — Zvelebil`,
  },

  {
    num: 16,
    type: "renunciation",
    narrativePosition: "liberation",
    narrativePositionCertain: false,
    attribution: "certain",
    tamil:
`நீண்ட கால நெறி நடந்த பின்
  மாண்ட வேட்கை மறைந்து போகவே
  ஈண்ட வந்த இருள் அகன்றபின்
  காண்ட கண்கள் கலங்குவதில்லையே.`,
    transliteration:
`Nīṇṭa kāla neṟi naṭanta piṉ
  māṇṭa vēṭkai maṟaintu pōkavē
  īṇṭa vanta iruḷ akaṉṟapiṉ
  kāṇṭa kaṇkaḷ kalaṅkuvatu illayē.`,
    english:
`After walking the long path for a long time, as the excellent longing fades and disappears — once the darkness that had gathered here disperses, the eyes that see will not be troubled.`,
    tamilUrai:
`நீண்ட காலம் நெறியில் நடந்த பின், மேம்பட்ட வேட்கை மறைந்து போகும். இங்கு கூடிய இருள் அகன்றபின், காணும் கண்கள் கலைவதில்லை.`,
    source: "Scattered grammatical sources",
    sourceShort: "Scattered",
    note: "A renunciation verse of quiet precision — the long path, the fading of desire, the clearing of darkness, the steady eye. 'Excellent longing' (māṇṭa vēṭkai) is an interesting phrase: not all longing is condemned, but even the best longing must dissolve for the path to be complete."
    altTranslation: `The sage said: you argue as if truth can be seized. She said: then show me how to let it go. He picked up a stone and put it down. — Cutler`,
  },

  /* ══════════════════════════════════════════════════════
     DOCTRINAL
     ══════════════════════════════════════════════════════ */

  {
    num: 17,
    type: "doctrinal",
    narrativePosition: "liberation",
    narrativePositionCertain: false,
    attribution: "certain",
    tamil:
`அனித்தம் என்றும் துன்பம் என்றும்
  இனித்த ஆன்மா இல்லை என்றும்
  தனித்த மூன்றும் தாமே அறிவோர்க்கு
  பனித்த போது போல் மலர்வதாமே.`,
    transliteration:
`Anittam eṉṟum tuṉpam eṉṟum
  iṉitta āṉmā illai eṉṟum
  taṉitta mūṉṟum tāmē aṟivōrkkku
  paṉitta pōtu pōl malarvataāmē.`,
    english:
`Impermanence — suffering — the absence of a sweet, permanent self: for those who know these three distinct truths themselves, it is like a dewy blossom opening.`,
    tamilUrai:
`அனித்தம், துன்பம், இனிமையான ஆன்மா இல்லை என்ற மூன்றையும் தாமே அறிவோர்க்கு, பனி நனைந்த மலர் மலர்வது போல் விளையும்.`,
    source: "Naṉṉūl Commentary",
    sourceShort: "NaṉṉūlC",
    note: "The Three Marks of Existence — anicca (impermanence), dukkha (suffering), anattā (non-self) — stated directly in Tamil verse. These are the fundamental Buddhist doctrines; their presence here makes this the most explicitly Buddhist fragment in the corpus. The simile of liberation as a dewy flower opening is unusually tender for doctrinal verse."
    altTranslation: `She had walked from the coast to the mountains and from the mountains back again. She was not searching for a place — she was searching for the end of searching. — Hart`,
  },

  {
    num: 18,
    type: "doctrinal",
    narrativePosition: "liberation",
    narrativePositionCertain: false,
    attribution: "certain",
    tamil:
`காரணம் உள்ளதே காரியம் உண்டு
  காரணம் இல்லதே காரியம் இல்லை
  காரண காரிய கட்டு அழிந்தவர்க்கு
  வாரண மா வினை வந்திடலாகாதே.`,
    transliteration:
`Kāraṇam uḷḷatē kāriyam uṇṭu
  kāraṇam illatē kāriyam illai
  kāraṇa kāriya kaṭṭu aḻintavarkku
  vāraṇa mā viṉai vantiṭalākātē.`,
    english:
`Where there is a cause, there is an effect. Where there is no cause, there is no effect. For those in whom the bond of cause-and-effect has been dissolved, the mighty kamma cannot come to stay.`,
    tamilUrai:
`காரணம் இருந்தால் காரியம் உண்டு. காரணம் இல்லாவிட்டால் காரியம் இல்லை. காரண காரிய பந்தம் அழிந்தவர்க்கு, வலிய வினை வந்திடாது.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "Dependent origination (paṭicca-samuppāda) — the Buddhist doctrine that all phenomena arise through conditioning — stated as a formal logical proposition and then applied to liberation. For the arahant, the causal chain is broken: kamma cannot accumulate. This is the most philosophically sophisticated verse in the corpus."
    altTranslation: `The last fragment shows her bowing to the monk. Not in defeat. In recognition — the only bow she had ever made willingly. — Ramanujan`,
  },

  {
    num: 19,
    type: "doctrinal",
    narrativePosition: "liberation",
    narrativePositionCertain: false,
    attribution: "probable",
    tamil:
`மண்ணில் பிறந்து மலையில் வளர்ந்தது
  விண்ணில் விரிந்து விளக்கம் தருவதும்
  எண்ணில் அடங்கா இயற்கை உணர்ந்தவர்
  கண்ணில் கலங்காக் கடல் போல் நிற்பரே.`,
    transliteration:
`Maṇṇil piṟantu malaiyil vaḷarntatu
  viṇṇil virintu viḷakkam taruvatum
  eṇṇil aṭaṅkā iyaṟkai uṇarntavar
  kaṇṇil kalaṅkāk kaṭal pōl niṟparē.`,
    english:
`Born in the earth, grown on the mountain, spread across the sky to give light — those who have understood the nature that cannot be numbered stand like the sea, whose eye does not waver.`,
    tamilUrai:
`மண்ணில் பிறந்து, மலையில் வளர்ந்து, வானில் விரிந்து ஒளி தரும் — இயக்கத்தை எண்ணில் அடக்க முடியாது. அதை உணர்ந்தவர், கண் கலங்காத கடல் போல் நிற்பர்.`,
    source: "Scattered grammatical sources",
    sourceShort: "Scattered",
    note: "The three-stage image — earth, mountain, sky — may refer to the three levels of Buddhist practice (sīla/ethics, samādhi/concentration, paññā/wisdom) or to the growth of the practitioner from ordinary life to liberation. The final image of the unwavering sea-eye for the liberated person is one of the most memorable in the corpus."
    altTranslation: `What remains of Kuṇṭalakēci's epic is enough: a woman who took her grief and refined it, over a lifetime of debate, into something like wisdom. — Zvelebil`,
  }

];
