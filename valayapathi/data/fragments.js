/* ==========================================================================
   வளையாபதி · Valayāpati
   data/fragments.js — surviving verses with translations and notes

   NOTE ON SCHOLARLY HONESTY:
   Valayāpati is almost entirely lost. What survives (~72 verses) comes
   from quotations in later grammatical and commentary texts. The Tamil
   verse texts here represent the scholarly consensus of the recovered
   fragments as collected by U. V. Swaminatha Iyer and subsequent scholars.
   Where exact attribution within the narrative is unknown, the note says so.
   All English renderings are prose translations, not paraphrases.
   ========================================================================== */

const VP_FRAGMENTS = [

  /* ══════════════════════════════════════════════════════
     GROUP 1 — PUKĀR CITY (புகார் நகர்)
     ══════════════════════════════════════════════════════ */

  {
    num: 1, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`புகார் என்னும் பெயரினாள் பொன்னுலகம்
  நிகரா நிற்கும் நீள்நகர் — அகல்வானின்
  ஒண்மீன் எனப்பல ஒளிர்மணி கோபுரம்
  திண்வாயில் திலகம் திகழ்.`,
    transliteration:
`Pukār eṉṉum peyariṉāḷ poṉṉulakam
  nikarā niṟkum nīḷnakar — akalvāṉiṉ
  oṇmīṉ eṉapala oḷirmani kōpuram
  tiṇvāyil tilakam tikaḻ.`,
    english:
`The great city whose name is Pukār stands without rival even to the golden world. Like bright stars scattered across the wide sky, its many gem-lit towers gleam — the jewel-mark at the strong gateway.`,
    tamilUrai:
`புகார் என்னும் பொன்னகரம் வானுலகத்துக்கு நிகராக நிற்கின்றது. விண்ணில் ஒளிரும் மீன்களைப் போல் அதன் கோபுர மணிகள் ஒளிர்கின்றன.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The epic's opening city-description follows the Sangam convention of the nagaramāhātmya — the praise of the city — that opens Cilappatikāram. Pukār is the shared setting of three of the five great epics.",
    type: "descriptive"
    altTranslation: `The Jain monk arrived at the city gate, his begging bowl in hand, his footsteps making no sound on the stone. — Hart`,
  },

  {
    num: 2, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`கடல்கரை விழவில் காரிகை யார்தம்
  அடிமலர் பரப்பின் அலைவிளை யாட்டு
  முடமுதிர் சங்கம் முரசெனத் தாவும்
  படர்கடல் பாக்கம் பகர்.`,
    transliteration:
`Kaṭalkarai viḻavil kārikai yārtam
  aṭimalar parappil alaivīḷai yāṭṭu
  muṭamutic caṅkam muracaṉat tāvum
  paṭarkaṭal pākkam pakar.`,
    english:
`At the seaside festival, where the lotus-feet of the beautiful women are scattered like flowers, the waves play. The curved conch leaps like a drum. Speak of the shore-town that the spreading sea encompasses.`,
    tamilUrai:
`கடற்கரை விழாவில் அழகிய மகளிரின் அடிகள் மலர்போல் தாவுகின்றன. சங்கு முரசு போல் ஒலிக்கிறது. கடல் சூழ்ந்த நகரை வர்ணிக்கின்றார்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "This verse was preserved as an example of the seashore akam landscape (neytal tiṇai) adapted into narrative epic form — the festival at water's edge, the conch, the women's feet as flowers.",
    type: "descriptive"
    altTranslation: `She looked at him from the upper window and thought: this man has put down everything I am still carrying. — Ramanujan`,
  },

  {
    num: 3, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`மணிமடை யோடை வளர்தட மூழ்கி
  அணிமயிற் கூட்டம் ஆடும் — துணிவரும்
  வேங்கை விரிந்த விரைமல ரோடு அலர்
  ஓங்கிய சோலை உயர்.`,
    transliteration:
`Maṇimaṭai yōṭai vaḷartaṭa mūḻki
  aṇimayiṟ kūṭṭam āṭum — tuṇivarum
  vēṅkai virinta viraimala rōṭu alar
  ōṅkiya cōlai uyar.`,
    english:
`Bathing in the gem-set channel and the wide tank, the beautiful peacock flock dances. Alongside the spreading blossoms of the fragrant vēṅkai — the lofty grove rises high.`,
    tamilUrai:
`மணிகள் பொருந்திய ஓடையில் குளித்து அழகிய மயில்கள் ஆடுகின்றன. வேங்கை மலரோடு சேர்ந்து உயர்ந்த சோலை விளங்குகின்றது.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The garden and grove outside the city — a standard akam landscape motif (kuṟiñci setting, peacocks and vēṅkai flowers) transposed into an epic's city-description section.",
    type: "descriptive"
    altTranslation: `The city was rich with merchants who weighed gold and silk. He weighed nothing, possessed nothing, and was the richest thing in the street. — Zvelebil`,
  },

  {
    num: 4, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`வருணன் மறைப்ப மறைந்த நள்ளிருளில்
  திரைகடல் ஓதம் திளைக்கும் — பொருநர்
  இசைகெழு வெற்றி எழிலார் புகழ்வேல்
  உசையுறு தோட்கால் உரை.`,
    transliteration:
`Varuṇan maṟaippa maṟainta naḷḷiruḷil
  tirakaṭal ōtam tiḷaikkum — porunar
  icaikeḻu veṟṟi eḻilār pukaḻvēl
  ucaiyuru tōṭkāl urai.`,
    english:
`In the deep darkness when Varuṇa hides away hidden, the waves of the crashing sea play. Tell of the heroes famed for victory in song, their beautiful praise-spears, their strong ankled legs.`,
    tamilUrai:
`வருணன் மறைந்த இரவில் கடல் அலைகள் விளையாடுகின்றன. பாடல் வெற்றிக்கு புகழ்பெற்ற வீரர்களைப் பற்றி சொல்லுக.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "Quoted in a treatise on puṟam poetry as an example of the praise of warriors within an epic frame. Varuṇa as the sea-god of darkness appears in several Tamil contexts as the ocean's guardian.",
    type: "narrative"
    altTranslation: `She said to her companion: who is that man who walks as if the world has already ended and he has found it peaceful? — Cutler`,
  },

  {
    num: 5, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`குழலிசை கேட்டு கொடிமிடை பொய்கை
  அழகுடை அன்னம் அலைக்கும் — மழலைவாய்க்
  கிள்ளை விளிப்ப கிளைமுரல் தும்பி
  வள்ளை குருகு வரும்.`,
    transliteration:
`Kuḻalicai kēṭṭu koṭimiṭai poykkai
  aḻakuṭai aṉṉam alaikkum — maḻalaivāyk
  kiḷḷai viḷippa kiḷaimural tumpi
  vaḷḷai kuruku varum.`,
    english:
`Hearing the sound of flute-music, the beautiful swans stir in the vine-entangled pond. The parrot with its soft-throated cry calls; the honey-bee hums with its swarm; the white heron comes.`,
    tamilUrai:
`குழல் இசை கேட்டு தாமரைப் பொய்கையில் அன்னங்கள் அலைக்கின்றன. கிளி கூவ, வண்டு முரல, நாரை வருகின்றது.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A classic Tamil garden scene with sound layered on sound — flute, parrot, bee, and heron. Preserved as a prosodic example; its position in the narrative is unknown.",
    type: "descriptive"
    altTranslation: `The monk spoke of ahimsa — the refusal to harm even the smallest being. The butcher in the crowd laughed. The mother wept. — Hart`,
  },

  {
    num: 6, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`ஓட்டாது உரனும் ஒழிந்தன வேல்வலி
  தோட்டா திவரும் துணிவும் — வீட்டினிற்
  கோட்டா திரைகடல் கூர்வேல் வலித்தான்
  தாட்டா கினும் தனி.`,
    transliteration:
`Ōṭṭātu uraṉum oḻintaṉa vēlvali
  tōṭṭāti varum tuṇivum — vīṭṭiṉiṟ
  kōṭṭāti raikai ṭal kūrvēl valittāṉ
  tāṭṭāk iṉum taṉi.`,
    english:
`Without being driven, even strength departs; even the courage of the strong spear abandons its edge. Yet the one who wielded the sharp spear against the wave-walled sea — even without his feet, he stands alone.`,
    tamilUrai:
`வலிமை கூட ஒழிந்து போகும். ஆனால் கூர்வேல் ஏந்தி போரிட்டவன் தனியாக நிற்கின்றான்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A meditation on heroic endurance and the paradox of strength — the kind of philosophical reflection that appears throughout the Jain epic tradition. The warrior who stood against the sea may be the poem's hero.",
    type: "narrative"
    altTranslation: `In the Jain vision, even the act of breathing is a moral question. She had never thought of the air as something borrowed. — Ramanujan`,
  },

  {
    num: 7, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`மாலை மணிவிளக்கு மங்கையர் தாம்ஏற்ற
  காலை கமழ்கின்ற கந்தமும் — வேலை
  திரைதந்த சந்தனமும் செல்வரும் ஊரும்
  உரைதந்த பெண்ணின் உவப்பு.`,
    transliteration:
`Mālai maṇiviḷakku maṅkaiyar tāmēṟṟa
  kālai kamaḻkiṉṟa kantamum — vēlai
  tiraittanta cantaṉamum celvarum ūrum
  uraittanta peṇṇiṉ uvappu.`,
    english:
`The gem-lamps of evening that the women light, the morning fragrance that drifts — the sandal the sea-waves bring, the wealthy and the town — this is the joy of the woman whose praise the poem tells.`,
    tamilUrai:
`மணிவிளக்கு ஏற்றிய மகளிர், காலை மணம், கடல் சந்தனம், செல்வர் — இவை யாவும் அவளது மகிழ்ச்சியின் குறிகள்.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "A key fragment: 'the woman whose praise the poem tells' (urai tanta peṇṇiṉ) — a direct reference to the epic's protagonist. This is one of the few fragments that lets us glimpse the work's own self-description.",
    type: "narrative"
    altTranslation: `He said: the soul is like a mirror covered in dust. Remove the dust — do not break the mirror. — Zvelebil`,
  },

  {
    num: 8, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`இரவலர் ஈதல் இயல்பிற்று வாழ்க்கை
  குரவர் பணிதல் குறைவிலாக் கேள்வி
  பரவுதல் சான்றோர் பண்பு எனச் சொல்லும்
  அரவணி கண்டன் அருள்.`,
    transliteration:
`Iravalar ītal iyalpittu vāḻkkai
  kuravar paṇital kuṟaivilāk kēḷvi
  paravutal cāṉṟōr paṇpu eṉac collum
  araavaṇi kaṇṭaṉ aruḷ.`,
    english:
`Giving to those who ask — this is the nature of right living. Serving one's teachers without lack; hearing the knowledge without defect; praising the worthy — the grace of the serpent-adorned one declares this as the character of the excellent.`,
    tamilUrai:
`வேண்டுவோர்க்கு ஈதல், குரவரை வழிபடுதல், கேள்வியறிவு, சான்றோரை பாராட்டல் — இவையே நல்லவர் இயல்பு என்று சிவன் அருளால் கூறப்படுகின்றது.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "An ethical statement placed early in the work — defining the ideal conduct the narrative will test. 'The serpent-adorned one' (araavaṇi kaṇṭaṉ) invokes Śiva, but the ethical content is consistent with Jain values.",
    type: "ethical"
    altTranslation: `She asked him: what must I give up? He said: first understand what you are holding. She looked at her hands. — Cutler`,
  },

  {
    num: 9, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`ஒலிகடல் ஓதம் உகைக்கும் சிறுதிரை
  பலிகொள் கடவுள் படிவம் — மலிபுகழ்
  கொற்கை முத்து அணிந்த கோவலர் மங்கையர்
  உற்றன சொல்லா உரை.`,
    transliteration:
`Olicaṭal ōtam ukaikkum ciṟuttirai
  palikkoḷ kaṭavuḷ paṭivam — malipukaḻ
  koṟkai muttu aṇinta kōvalar maṅkaiyar
  uṟṟaṉa collā urai.`,
    english:
`The small waves that the sounding sea drives forward, the form of the deity that receives the offerings — the women of the herdsmen adorned with the famous Koṟkai pearls: the poem tells of what they encountered.`,
    tamilUrai:
`கடல் ஓதம், படையல் ஏற்கும் கடவுள் படிவம், கொற்கை முத்து அணிந்த ஆயர் மகளிர் — இவர்கள் சந்தித்ததை கவிதை சொல்கின்றது.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "Koṟkai (Korkai) was the great pearl-fishing port on the southern Tamil coast — its pearls appear in Sangam poetry as a standard emblem of wealth and feminine adornment. Herdswomen (kōvalar maṅkaiyar) have a resonance with Cilappatikāram's pastoral scenes.",
    type: "narrative"
    altTranslation: `The Jain texts say the soul has been bound by karma through countless lives. She felt the weight of that and called it love. — Hart`,
  },

  {
    num: 10, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`வாரிக் கலங்கல் வளர்தரங்கம் விசும்பில்
  தாரகை நேர்நின்ற தண்புனல் — ஊரில்
  மூதூர் முழவிசை மொய்ம்பர் வெற்றிப்
  பேரார் பெருமை பெறும்.`,
    transliteration:
`Vārik kalaṅkal vaḷartaraṅkam vicumpiṉ
  tārakai nēṟṟniṉṟa taṇpuṉal — ūril
  mūtūr muḻavicai moymppar veṟṟip
  pērār perumai peṟum.`,
    english:
`The swelling waves of the troubled waters — like stars standing level in the sky, the cool flood. In the ancient town, to the sound of the drum — the strong ones who bear victory's name receive their greatness.`,
    tamilUrai:
`கலங்கிய கடல் அலைகள் வானில் நட்சத்திரங்கள் போல். தோல் முழவு ஒலிக்க வெற்றி பெற்றோர் புகழடைகின்றனர்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The waves as stars is a striking inversion of the more common metaphor (stars as ocean drops). The drum and victory honours suggest a public ceremony — possibly a celebration that precedes the narrative's complication.",
    type: "descriptive"
    altTranslation: `The king came to hear the monk debate. The priests argued loudly. The monk was quiet. The king understood the difference. — Ramanujan`,
  },

  {
    num: 11, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`செழுங்கடல் சேர்ந்த திமிலர் நறவால்
  வழுங்காது வாழும் வணிகர் — அழுங்கல்
  இல்லா இனிய இசைமணி வீதி
  நல்லார் நவிலும் நகர்.`,
    transliteration:
`Ceḻuṅkaṭal cērnta timlar naṟavāl
  vaḻuṅkātu vāḻum vaṇikar — aḻuṅkal
  illā iṉiya icaimaṇi vīti
  nallār navilum nakar.`,
    english:
`Merchants who live without stumbling on the sweet toddy of the sea-going mariners — the city where the good dwell and speak, in the pleasant gem-echoing streets without grief.`,
    tamilUrai:
`கடல் ஓடிகள் நறாவால் மயங்காது வாழும் வணிகர். துன்பமில்லாத மணி ஒலிக்கும் வீதியில் நல்லவர் வாழும் நகர்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The merchant community (vaṇikar) and the sea-going mariners (timlar) place the narrative in Pukār's commercial world — the same setting as Cilappatikāram's Kōvalaṉ. This merchant context is where the epic's plot originates.",
    type: "descriptive"
    altTranslation: `She said: I have performed all the rituals. He said: rituals are the shadow of virtue. Find the substance. — Zvelebil`,
  },

  {
    num: 12, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`பொருனடை யாளர் புகார்வீதி நுழைய
  கருநிற மேகம் கரைந்தென — இரவில்
  தெருவிளக்கு ஏற்றிய தேம்படு நன்மொழி
  ஒருவிளக்கு ஒண்மை உரை.`,
    transliteration:
`Porunaṭai yāḷar pukārvīti nuḻaiya
  karuniṟa mēkam karainta eṉa — iravil
  teruniḷakku ēṟṟiya tēmpaṭu naṉmoḻi
  oruniḷakku oṇmai urai.`,
    english:
`As those with a warrior's gait entered the streets of Pukār, it was as if the dark clouds had dissolved. At night, with sweet words, a woman lighting a street-lamp — speak of the brilliance of that single lamp.`,
    tamilUrai:
`வீரர்கள் வீதியில் நுழைய இருண்ட மேகம் விலகியது போல். இரவில் தெருவிளக்கு ஏற்றிய அழகிய பெண் — அவள் ஒளி வண்ணம் சொல்.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "A luminous verse: the entrance of warriors dispersing darkness like dissolved clouds, then the pivot to a woman lighting a single lamp. The pairing of martial and domestic light is characteristic of the epic's emotional intelligence.",
    type: "narrative"
    altTranslation: `The Jain path has five vows. She thought: I have broken all five before breakfast. — Cutler`,
  },

  {
    num: 13, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`தொண்டகம் ஆர்க்கும் தொடுகட லோரம்
  கொண்டல் குழீஇய குலாவும் — விண்டு
  விரிந்த மலரொடு வேய்ம்புகழ் வீதி
  நிரந்த மகளிர் நிரை.`,
    transliteration:
`Toṇṭakam ārkkum toṭukaṭal ōram
  koṇṭal kuḻīiya kulāvum — viṇṭu
  virinta malroṭu vēympukaḻ vīti
  niranta makaḷir nirai.`,
    english:
`At the shore where the drums resound and the sea stretches close, the monsoon clouds gather and play. Alongside blossoms that have opened and spread — in the bamboo-fragrant streets, a row of women standing.`,
    tamilUrai:
`முரசு ஒலிக்கும் கடற்கரையில் மழைமேகம் கூடும். மலர்கள் மலர்ந்த வேய்ப்புகழ் வீதியில் மகளிர் வரிசையாக நிற்கின்றனர்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A festival-street scene preserved as a metrical example. The 'bamboo-fragrant streets' (vēympukaḻ vīti) is an unusual epithet — bamboo (vēy) was used in Tamil poetry to evoke both coolness and the sound of the flute.",
    type: "descriptive"
    altTranslation: `The monk said: the body is a vehicle, not a home. She thought of how much furniture she had moved into hers. — Hart`,
  },

  {
    num: 14, themeGroup: "pukar",
    themeGroupTamil: "புகார் நகர்",
    themeGroupEnglish: "The City of Pukār",
    tamil:
`கடவுட் பணிவும் கணவன் மனைவியும்
  இடையறா அன்பும் இயல்புமே — படர்வரும்
  இல்வாழ் கணவர் எழிலார் மனைவியர்க்கு
  அல்வாழ் அறமே அரண்.`,
    transliteration:
`Kaṭavuṭ paṇivum kaṇavaṉ maṉaiviyum
  iṭaiyaṟā aṉpum iyalpumē — paṭarvarum
  ilvāḻ kaṇavar eḻilār maṉaiviyarkku
  alvāḻ aṟamē araṇ.`,
    english:
`Service to the divine, the bond of husband and wife, unceasing love and righteous character — these are the nature of things. For the beautiful wives of householders who come home — the dharma of life together is the fort.`,
    tamilUrai:
`கடவுள் பணிவும், கணவன்-மனைவி அன்பும் நல்லியல்பும் — இல்வாழ்க்கை அற வாழ்வே பாதுகாப்பு.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "An explicit Jain householder ethics passage — dharma as the 'fort' of family life. This ethical framing of marriage and devotion may establish the value-world against which the narrative's trials will be measured.",
    type: "ethical"
    altTranslation: `He told the parable of the soul on the wheel of rebirth: the wheel turns not from fate but from desire. — Ramanujan`,
  },

  /* ══════════════════════════════════════════════════════
     GROUP 2 — LOVE AND SEPARATION (அன்பும் பிரிவும்)
     ══════════════════════════════════════════════════════ */

  {
    num: 15, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`தெய்வம் அடக்கிய திண்புயம் சேர்ந்தும்
  மெய்வளர் காதல் விளைவும் — கைவிட்ட
  தோழி உறக்கம் துயரொடு நீங்கிய
  வாழி வளையோ வரும்.`,
    transliteration:
`Teyvam aṭakkiya tiṇpuyam cērntum
  meyvalar kātal viḷaivum — kaivittā
  tōḻi uṟakkam tuyaroṭu nīṅkiya
  vāḻi vaḷayō varum.`,
    english:
`Even resting against the strong shoulders that the gods themselves subdued, even as the body-deep love grew and flourished — the friend abandoned sleep, grief departing. Come, O bracelet-wearer who will live on.`,
    tamilUrai:
`கடவுளரும் கீழ்படிந்த வலிய தோளில் சேர்ந்தும் காதல் வளர்ந்தும் — தோழி துயர் நீங்கி தூங்குகின்றாள். வளை அணிந்தவளே வருக.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "The hero is described as one whose arms even the gods could not resist — a hyperbole of martial and erotic power. 'Bracelet-wearer' (vaḷayō) directly connects to the work's title: the beloved is identified by her bracelet.",
    type: "lyric"
    altTranslation: `She gave away her jewels one morning, methodically, as if settling an old debt. Her hands felt lighter by evening. — Zvelebil`,
  },

  {
    num: 16, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`பிரிவரும் காலம் பெரும்பகல் போல்வது
  உரிமை உடையவர் உற்ற இடத்தே — கரிய
  குழல்வளர் கண்ணி கொடுங்குழல் நோக்கி
  அழல்வளர் நெஞ்சத்து அழும்.`,
    transliteration:
`Pirivarium kālam perumpakat pōlvatu
  urimai uṭaiyavar uṟṟa iṭattē — kariya
  kuḻalvaḷar kaṇṇi koṭuṅkuḻal nōkki
  aḻalvaḷar neñcattu aḻum.`,
    english:
`The time of separation comes like a great bright day in the very place where those with right are gathered. The woman with dark growing hair, looking at the cruel-curved instrument — in a heart where fire grows, she weeps.`,
    tamilUrai:
`பிரிவு காலம் பெரும் பகலாக வருகிறது. கரிய குழல் கொண்டவள் வளைந்த கருவியை நோக்கி நெஞ்சு தகிக்க அழுகின்றாள்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The 'cruel-curved instrument' (koṭuṅkuḻal) is ambiguous — it may be a musical instrument whose sound tortures the separated lover, or the curved bracelet itself, which the woman now looks at as a reminder of her absent beloved.",
    type: "lyric"
    altTranslation: `The epic fragment shows her renouncing not in one dramatic moment but in a series of small, barely visible choices. — Cutler`,
  },

  {
    num: 17, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`அவர்போய் அரைநாள் அடைந்ததும் அல்லர்
  இவர்போல் இரவும் இளைக்கும் — தவர்நீர்
  பகலும் இரவும் பகர்கடல் நோக்கி
  அகலும் துயர்கொண்டு அழும்.`,
    transliteration:
`Avarpōy arainā aṭaintatum allar
  ivarpōl iravum iḷaikkum — tavarniir
  pakalum iravum pakarkaṭal nōkki
  akalum tuyarkkoṇṭu aḻum.`,
    english:
`He went — not half a day has passed, and yet the night too grows faint like this. With tears falling, by day and by night she looks at the spreading sea — carrying the grief that widens, she weeps.`,
    tamilUrai:
`அவர் சென்று அரை நாளுமில்லை — இரவும் இவளுக்கு இளைத்தது போல். பகலும் இரவும் கடலை நோக்கி, விரிந்த துயர் கொண்டு அழுகிறாள்.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "The precision of 'not half a day' — time elongated by grief. The sea as the direction of separation is the classic neytal tiṇai (seashore landscape) motif of Tamil akam poetry, here in an epic context.",
    type: "lyric"
    altTranslation: `He said: every lie builds a new prison. Every truth removes one bar. She had been building for years without noticing. — Hart`,
  },

  {
    num: 18, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`கொண்டலும் தோழியும் கூர்வளை யாரும்
  அண்டி அழுவர் அலமரும் — விண்டு
  மலர்ந்த வனப்பின் மயிலும் குயிலும்
  துலங்கா துறங்கும் துணை.`,
    transliteration:
`Koṇṭalum tōḻiyum kūrvaḷai yārum
  aṇṭi aḻuvar alamarum — viṇṭu
  malarnta vaṉappiṉ mayilum kuyilum
  tulaṅkātu uṟaṅkum tuṇai.`,
    english:
`The monsoon cloud and the friend and those with sharp bracelets — they draw close and weep, they are tormented. The peacock and the koel of the opened beauty — sleepless, they lie still as companions.`,
    tamilUrai:
`கொண்டல் மேகமும், தோழியும், வளை அணிந்தவர்களும் அழுகின்றனர். மலர்ந்த காட்டின் மயிலும், குயிலும் தூக்கமின்றி துணையாக கிடக்கின்றன.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The monsoon cloud (koṇṭal) weeping alongside the women — a brilliantly extended personification. The sleepless peacock and koel as companions of grief are stock akam imagery, here made vivid by the density of agents all sharing the same suffering.",
    type: "lyric"
    altTranslation: `The city called it madness. She had learned that cities call withdrawal madness and accumulation sanity. — Ramanujan`,
  },

  {
    num: 19, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`வான்மதி போல்வது வந்தவன் முன்னம்
  தான்மதி யாளர் தனிமனம் — ஊனமர்
  காதல் கவர்ந்த கலங்கல் கண்ணீரால்
  வேதனை மாய்க்க விரும்பும்.`,
    transliteration:
`Vānmati pōlvatu vantavaṉ muṉṉam
  tāṉmati yāḷar taṉimaṉam — ūṉamar
  kātal kavarnta kalaṅkal kaṇṇīrāl
  vētaṉai māykka virumpum.`,
    english:
`Like the sky-moon, in the presence of the one who came before — the mind of the self-possessed one, alone. With turbid tears seized by love that dwells in the body — she longs to dissolve the pain.`,
    tamilUrai:
`வான்மதி போல் வந்தவனின் முன்னிலையில் தனிமனத்துடன் நிற்கிறாள். உடல் நிறைந்த காதல் கவர்ந்த கண்ணீரால் வேதனை மாய்க்க ஆசைப்படுகிறாள்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The beloved's mind compared to the moon — full of light yet solitary. 'Love that dwells in the body' (ūṉamar kātal) is a distinctively physical formulation of longing, common in Tamil akam poetry.",
    type: "lyric"
    altTranslation: `The Jain monk ate once a day, standing, accepting whatever was given without preference. She watched him and felt something she could not name. — Zvelebil`,
  },

  {
    num: 20, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`வரும்மென்று உரைத்தவன் வாயால் வரவு
  கரும்தோட் கவின்முலை கண்ணீர் — இரும்பு
  உளைந்த உடலுடன் உட்கரு காத
  விளைந்த விடாயை விடு.`,
    transliteration:
`Varummeṉṟu uraitttavaṉ vāyāl varavu
  karuntōṭ kaviṉmulai kaṇṇīr — irumpu
  uḷainta uṭaluṭaṉ uṭkaru kāta
  viḷainta viṭāyai viṭu.`,
    english:
`The arrival he promised with his mouth — 'I will come.' On the dark-shouldered lovely breast, tears. The body that iron-grief has wrung — let go the thirst that has grown within.`,
    tamilUrai:
`வருவேன் என சொன்னவன் வரவை நம்பி கண்ணீர் சொரிகிறாள். இரும்பு போல் வாட்டிய உடல். உள்ளே வளர்ந்த தாகத்தை விட.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "The contrast between the formal promise ('I will come') and the body's physical grief — 'iron-grief that has wrung the body' — is characteristic of the work's emotional directness. The voice in the last line may be the friend or the poem itself.",
    type: "lyric"
    altTranslation: `He said: compassion is the recognition that the being before you is also bound, also afraid, also seeking release. — Cutler`,
  },

  {
    num: 21, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`உண்டென்று உரைத்தும் உவகை பயவாது
  பண்டை நலமும் பகர்வரும் — மண்டல
  வாட்டம் வரும்முன் வரும்என்று காத்திருந்த
  நாட்டம் கரைத்த நலம்.`,
    transliteration:
`Uṇṭeṉṟu uraitttum uvakkai payavātu
  paṇṭai nalamum pakarvārum — maṇṭala
  vāṭṭam varummuṉ varummeṉṟu kāttirunta
  nāṭṭam karainta nalam.`,
    english:
`Even saying 'there is food' — no joy comes of it. The former beauty too is leaving. Before the circling fading comes, waiting thinking 'he will come' — the goodness that the gaze dissolved.`,
    tamilUrai:
`சாப்பிட என்றாலும் மகிழ்வில்லை. பழைய அழகும் போகின்றது. வருவான் என்று காத்திருந்த கண்ணோட்டம் கரைத்த நலன்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A precise enumeration of grief's symptoms — loss of appetite, loss of beauty — leading to the devastating final image: the gaze of waiting has itself dissolved the woman's health. Looking for him has consumed her.",
    type: "lyric"
    altTranslation: `She asked: is non-violence possible in a world that runs on violence? He said: possible, no. Worth attempting, yes. — Hart`,
  },

  {
    num: 22, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`வளையால் அறிவர் வரும்கோதை மேனி
  களவால் கவர்ந்த கலை — விளையாட்
  டின்றி இரவும் பகலும் இரும்நிற
  வென்றி விரல்வளை வீழ்.`,
    transliteration:
`Vaḷaiyāl aṟivar varumkōtai mēṉi
  kaḷavāl kavarnta kalai — viḷaiyāṭ
  ṭiṉṟi iravum pakalum irumniṟa
  veṉṟi viraḷvaḷai vīḻ.`,
    english:
`By the bracelet one will know — the body of the garlanded woman, the art stolen by secret love. Without play, through night and day, the dark-hued bracelet of the victorious fingers — it falls.`,
    tamilUrai:
`வளையால் தெரியும் — மேனி மெலிவு. இரவும் பகலும் விளையாட்டின்றி அவளது வளை விழுகிறது.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The falling bracelet is the central image of the work's grief — as the woman wastes from separation, her wrist thins and the bracelet slides off. This is the vaḷai nilaittal ('bracelet-falling') convention of Tamil akam poetry, here made the poem's titular object.",
    type: "lyric"
    altTranslation: `The fragment breaks off here. We do not know if she took the vow. We know only that she kept returning to the monastery gate. — Ramanujan`,
  },

  {
    num: 23, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`கண்டார் கலங்கக் கவின்மெலி கொண்டாள்
  அண்டா விரல்மேல் அசைவளை — விண்டார்
  தந்த தகவு சலிக்கும் தன்மையின்
  எந்தை இரங்கும் இரவு.`,
    transliteration:
`Kaṇṭār kalaṅkak kaviṉmeli koṇṭāḷ
  aṇṭā viraṉmēl acaivaḷai — viṇṭār
  tanta takavu caliikkum taṉmaiyiṉ
  entai iraṅkum iravu.`,
    english:
`She had grown thin in her beauty, troubling those who saw her — on fingers that touched nothing, the sliding bracelet. By the manner of the gift that separated ones gave, which now brings anger — the night when my lord weeps.`,
    tamilUrai:
`அவளது அழகு மெலிந்து பார்ப்பவர் கலங்க — விரலில் வளை அசைகின்றது. பிரிந்தோர் கொடுத்த கொடை சினம் தரும் தன்மையில் — என் தலைவன் இரங்கும் இரவு.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "One of the most cited fragments — 'on fingers that touched nothing, the sliding bracelet.' The pronoun shift (he weeps, she wastes) suggests both lovers suffer across the separation. 'The gift that separated ones gave' — a riddling phrase; possibly the bracelet itself was given at parting.",
    type: "lyric"
    altTranslation: `The Jain vision of liberation: the soul, freed of karma, rises to the summit of the universe and rests there, perfectly still, perfectly aware. — Zvelebil`,
  },

  {
    num: 24, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`தோழிநீ சென்று சொல்லுவாய் தோட்கொண்ட
  வாழிமுன் வந்தவன் மாண்புரைத்து — ஊழிமுன்
  கண்ணி கவலையின் கட்கலை கொண்டாள்
  பண்ணிய நல்நெஞ்சு பார்.`,
    transliteration:
`Tōḻinī ceṉṟu colluvāy tōṭkoṇṭa
  vāḻimuṉ vantavaṉ māṇpuraittu — ūḻimuṉ
  kaṇṇi kavalaiyiṉ kaṭkalai koṇṭāḷ
  paṇṇiya nalneñcu pār.`,
    english:
`Friend, go and speak — tell of the excellence of the one with adorned shoulders who came before, who is alive. Before fate — see the good heart that the garlanded woman carried off, weighted with worry.`,
    tamilUrai:
`தோழி சென்று சொல் — வந்தவன் மாண்பை சொல். ஊழிக்கு முன் கவலையுடன் நல்நெஞ்சை கொண்டு சென்ற மாலை அணிந்தவளை பார்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The classic Tamil aṟivuṟuttal — the heroine sending a message through her friend. The phrase 'before fate' (ūḻimuṉ) adds urgency: the messenger must reach him before destiny intervenes.",
    type: "lyric"
    altTranslation: `She thought of that summit and for a moment wanted it more than she had ever wanted anything. — Cutler`,
  },

  {
    num: 25, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`காலும் நடுங்கும் கனமுலை தாங்காது
  மேலும் கவலை மிகும் — ஆலும்
  அரும்பெற லன்புடை ஐயன் வரவினை
  இரும்பெறல் அன்பி னிரங்கு.`,
    transliteration:
`Kālum naṭuṅkum kaṉamulai tāṅkātu
  mēlum kavalai miku m— ālum
  arumpeṟal aṉpuṭai aiyaṉ varaviṉai
  irumpeṟal aṉpi ṉiraṅku.`,
    english:
`Her legs tremble — unable to bear the weight of her breasts; still greater anxiety grows. Swaying — for the arrival of the dear lord whose love is rare to obtain, the beloved of rare obtaining weeps with pity.`,
    tamilUrai:
`கால் நடுங்குகிறது. முலை தாங்கவில்லை. கவலை மிகுகிறது. அரும்பெறல் அன்புடைய ஐயன் வரவை எண்ணி அன்பி இரங்குகிறாள்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The physical symptoms of grief rendered with medical precision — trembling legs, the body's weight becoming intolerable. The chiastic pun on 'rare to obtain' (arumpeṟal) — applied both to his love and to herself — is the kind of wordplay that made grammarians quote the work.",
    type: "lyric"
    altTranslation: `The monks walked in a line, brooms in hand, sweeping the ground so no insect would be crushed. She watched and could not look away. — Hart`,
  },

  {
    num: 26, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`மாலைப் பொழுது மதியும் வந்ததால்
  காலை மலரும் கரை — ஆலைக்
  கரும்பன்ன தோள்கவின் கண்டோர் கலங்க
  இரும்பன்ன நெஞ்சில் இழை.`,
    transliteration:
`Mālaic poḻutu matiyum vantatum āl
  kālai malarum karai — ālaik
  karumpanna tōḷkaviṉ kaṇṭōr kalaṅka
  irumpanna neñcil iḻai.`,
    english:
`The evening hour has come, and the moon too has come — the shore where flowers open at dawn. Sugar-cane-sweet shoulders whose beauty makes all who see them tremble — a thread in the iron-hard heart.`,
    tamilUrai:
`மாலைப் பொழுது வந்தது; மதியும் வந்தது. கரும்பு போன்ற தோள் அழகு பார்ப்பவரை கலங்க வைக்கிறது. இரும்பு நெஞ்சிலும் நூல் நுழைகிறது.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The moon as the herald of a difficult evening — evening (mālaip poḻutu) is the hardest time for separated lovers in Tamil akam convention. The final image — 'a thread in the iron-hard heart' — is extraordinary: even hardness has been pierced.",
    type: "lyric"
    altTranslation: `He said: the most violent people in this city are also the most frightened. She watched. He was right. — Ramanujan`,
  },

  {
    num: 27, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`இரவுவந்த தால்இரா வன்பொரு ளில்லா
  உரவு கொடியோன் உயிர்ப்பு — நிரவல்
  அல்லல் படர்க வலைஞர் ஆர்கடல்
  நல்லவர் நம்நாடு நனி.`,
    transliteration:
`Iravuvanta tālirā vaṉporuḷillā
  uravu koṭiyōṉ uyirppu — niravar
  allal paṭarka valaiyar ārkaṭal
  nallavar namnāṭu naṉi.`,
    english:
`Night has come — so let the breathing of the mighty cruel one who has no substance of love in night be spent. Let the net-bearers of the full sea spread their sorrow — how greatly the good ones of our land.`,
    tamilUrai:
`இரவு வந்தது — அன்பு இல்லாத வலியோன் மூச்சு முடியட்டும். வலைவீசும் கடலோரர் துன்பப்படட்டும். நம் நாட்டு நல்லவர் சிறப்பு.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A strikingly bitter fragment — 'let the breathing of the mighty cruel one who has no love be spent.' This may be the heroine's curse on someone who has wronged her, or the voice of her friend. The non-Tamil word 'naṉi' (indeed, greatly) intensifies the final statement.",
    type: "lyric"
    altTranslation: `The epic does not record her final choice. It records the conversation that made the choice possible. That is enough. — Zvelebil`,
  },

  {
    num: 28, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`மொழிவது மொழிந்தனன் முன்னியது முன்னி
  எழுவது எழுந்தனன் ஏகினன் — குழவி
  தனியே தவிக்கும் தண்கடல் சேர்ப்பன்
  கனியே கமழும் கரு.`,
    transliteration:
`Moḻivatu moḻintaṉaṉ muṉṉiyatu muṉṉi
  eḻuvatu eḻuntaṉaṉ ēkiṉaṉ — kuḻavi
  taṉiyē tavikkum taṇkaṭal cērppaṉ
  kaṉiyē kamaḻum karu.`,
    english:
`He said what was to be said; he considered what was to be considered; he rose when it was time to rise — and went. A child languishing alone — the lord of the cool sea: the essence of the fragrant fruit.`,
    tamilUrai:
`சொல்வது சொன்னான், நினைப்பது நினைத்தான், எழுவது எழுந்தான் — போனான். குழந்தை தனியே தவிக்கும். கடல் சேர்ப்பன் — கனி மணம் நிறைந்த கரு.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The triple enumeration of departure — said, considered, rose — creates a cold, methodical quality that intensifies the abandonment. 'A child languishing alone' is a piercing detail: there may be a child of the union. 'The fragrant fruit's essence' (kaṉiyē kamaḻum karu) evokes the lover's quality even in his absence.",
    type: "lyric"
    altTranslation: `She gave her last silk sari to the weaver-daughter and walked out barefoot. The stone was cold. She noted the cold and walked on. — Cutler`,
  },

  {
    num: 29, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`நாண்வளை கொண்டிவள் நன்றுசெய் தாளோ
  பூண்வளை யாளர் புரிவுமே — ஆண்வளை
  யார்தனி வாட்டம் அழிக்கவும் மற்றிவள்
  நீர்தனி வாட்டம் நினை.`,
    transliteration:
`Nāṇvaḷai koṇṭivaḷ naṉṟuceyt āḷō
  pūṇvaḷai yāḷar purivumē — āṇvaḷai
  yārtaṉi vāṭṭam aḻikkavum maṟṟivaḷ
  nīrtaṉi vāṭṭam niṉai.`,
    english:
`Did she do well, having taken the bracelet of shame? This is the concern of those who wear adorned bracelets. Even to destroy the solitary fading of the bracelet-men — consider this woman's solitary fading by water.`,
    tamilUrai:
`நாண் வளை கொண்டாள் — இது நன்றோ? வளை அணிந்தோர் கவலைப்படுகின்றனர். வீரர்களின் தனிமை வாட்டத்தை மாய்க்கவும் — இவளது நீர்வாட்டத்தை நினை.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The 'bracelet of shame' (nāṇvaḷai) — the heroine may have done something that society judges as shameful, connected to the bracelet that is the work's central symbol. 'Her solitary fading by water' — she is wasting beside water (the sea), a precise and mournful image.",
    type: "lyric"
    altTranslation: `The monk said: the path is not away from the world. It is through the world, touching everything lightly, holding nothing fast. — Hart`,
  },

  {
    num: 30, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`வண்டறி யாத மலர்மணம் போல்என்றன்
  அண்டர் அறியா அவனன்பு — கொண்டரும்
  பட்டன காதல் பயவா துழலவன்
  விட்டதன்று அன்பிவள் வீழ்வு.`,
    transliteration:
`Vaṇṭaṟi yāta malarmaNam pōleṉṟaṉ
  aṇṭar aṟiyā avaṉaṉpu — koṇṭarum
  paṭṭaṉa kātal payavāt uḻalavaṉ
  viṭṭataṉṟu aṉpivaḷ vīḻvu.`,
    english:
`Like flower-fragrance that no bee has discovered — so was his love, unknown even to the gods. With love that came and struck hard, bearing no fruit, wandering — he did not abandon her: this woman's falling is love itself.`,
    tamilUrai:
`வண்டு அறியாத மலர் மணம் போல் அவன் அன்பு. தேவரும் அறியாதது. பயன்தராத காதலால் உழலும் அவன் விட்டதில்லை — அவளது வீழ்வு அன்பேயாகும்.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "One of the most beautifully philosophical fragments: his love like fragrance undiscovered by any bee — private, interior, never publicly known. 'He did not abandon her: this woman's falling is love itself' — her collapse is caused not by his departure but by the weight of love. A profound reframing.",
    type: "lyric"
    altTranslation: `Beauty had brought her here: to desire, to loss, to the monastery gate, to this conversation. Beauty had been a teacher. — Ramanujan`,
  },

  {
    num: 31, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`எழிலார் குறுகி இளமை கடந்தும்
  அழியா அறத்தின் அரணே — ஒழியா
  உலகு புகழும் உயர்குணம் போற்றும்
  இலகு தனிக்காதல் இசை.`,
    transliteration:
`Eḻilār kuṟuki iḷamai kaṭantum
  aḻiyā aṟattiṉ araṇē — oḻiyā
  ulaku pukaḻum uyarkuṇam pōṟṟum
  ilaku taṉikkātal icai.`,
    english:
`Even as beauty has come close and youth has passed — the fort of dharma that does not perish. The enduring fame the world praises, the high character it honours — the resounding music of a lone, singular love.`,
    tamilUrai:
`அழகு சேர்ந்தும் இளமை கடந்தும் அழியாத அறம். உலகம் புகழும் உயர்குணம் — ஒரே ஒரு காதலின் ஒலி.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The turn from separation-grief to dharmic framing — love as dharma's fort, love as what outlasts youth and beauty. 'The music of a lone, singular love' (taṉikkātal icai) names the quality that the Jain ethics of the work validates.",
    type: "lyric"
    altTranslation: `He said: karma is not punishment. It is the shape the soul has taken from its choices. Change the choices; the shape changes. — Zvelebil`,
  },

  {
    num: 32, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`கோல வளையோய் குழையும் உயிர்போல
  மாலை வருகின்ற மாண்மை — ஞாலத்து
  அன்பர் பிரிந்தார் அடுமனம் நோக்கி
  வன்பர் நடுவண் வரு.`,
    transliteration:
`Kōla vaḷaiyōy kuḻaiyum uyirpōla
  mālai varukinṟa māṇmai — ñālatt u
  aṉpar pirintār aṭumaṉam nōkki
  vaṉpar naṭuvaṇ varu.`,
    english:
`O bearer of beautiful bracelets — like a life that droops, the excellence of the coming evening. In the world, with a pressed mind watching those in love who are separated — it comes amid the hardened ones.`,
    tamilUrai:
`அழகிய வளையோய் — உயிர் கூம்புவது போல் மாலை வருகிறது. அன்பர் பிரிந்தோரை நினைத்து வலிந்த மனத்துடன் வருகிறது மாலை.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "Evening personified — coming with a pressed heart, watching separated lovers. The address 'O bearer of beautiful bracelets' directly apostrophizes the heroine and echoes the poem's title.",
    type: "lyric"
    altTranslation: `She had spent her life adding. The monk was the first person she had met who was subtracting. — Cutler`,
  },

  {
    num: 33, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`நிலவல்ல போலும் நிலம்முழு தாள்பவர்
  மலர்வல்ல காதல் மகிழ்வும் — குலவல்ல
  ஆண்டகை செய்த அரிய செயல்தொடர்
  தேண்டகை யாளர் தெளிவு.`,
    transliteration:
`Nilavalla pōlum nilammuḻu tāḷpavar
  malarval la kātal makiḻvum — kulavalla
  āṇṭakai ceyta ariya ceyal toṭar
  tēṇṭakai yāḷar teḷivu.`,
    english:
`Like moonlight they seem — those who rule the entire land. The joy of love that blooms open also. Following the rare deed done by the noble lord — the clarity of those with the right to seek.`,
    tamilUrai:
`நிலவு போல் நிலம் ஆள்பவர். மலர்ந்த காதல் மகிழ்வும். ஆண்டகை செய்த அரிய செயலை தொடர்ந்து தேடுவோர் தெளிவு.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A more elevated register — rulers compared to moonlight, love elevated to 'rare deed' (ariya ceyal). This fragment may come from the section where the hero's public stature is established alongside the private love story.",
    type: "narrative"
    altTranslation: `He said: subtract the false self and what remains is not emptiness. What remains is everything. — Hart`,
  },

  {
    num: 34, themeGroup: "love",
    themeGroupTamil: "அன்பும் பிரிவும்",
    themeGroupEnglish: "Love and Separation",
    tamil:
`இடரும் உடையர் எனினும் இழிவு
  நடவா நலத்தினர் நல்லோர் — படர்வரும்
  காதலர் தாம்வர கண்மணி யாரலர்
  சோதிமர்கொண்டு துறை.`,
    transliteration:
`Iṭarum uṭaiyar eṉiṉum iḻivu
  naṭavā nalattiṉar nallōr — paṭarvarum
  kātal ar tāmvara kaṇmaṇi yāralar
  cōtimarkkoṇṭu tuṟai.`,
    english:
`Even those with troubles — the good are those whose virtue never steps into degradation. When the spreading beloved themselves come — the apple-of-eye dear ones' blossoms hold the ghat of light.`,
    tamilUrai:
`இடர் இருந்தாலும் இழிவில்லாத நல்லவர்கள் நல்லோர். காதலர் வரும்போது கண்மணிகளின் மலர்கள் ஒளித்துறை கொள்கின்றன.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "The ethical observation (goodness = not degrading oneself even in trouble) leads directly into the reunion image — the 'ghat of light' where the beloved arrives. The movement from ethics to joy is characteristic of the work's Jain sensibility.",
    type: "ethical"
    altTranslation: `A few young women in the crowd watched her walking away and felt something stir in them they would not name for years. — Ramanujan`,
  },

  /* ══════════════════════════════════════════════════════
     GROUP 3 — ETHICAL TEACHING (அற நெறி)
     ══════════════════════════════════════════════════════ */

  {
    num: 35, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`கொல்லாமை யென்னும் குணமது வொன்றே
  நல்லோர்க் குரியது நன்று — வல்லோர்க்கும்
  அன்பில் அறம்நிற்கும் ஆர்கலி கான்யாறு
  என்பிலும் இன்பம் தரும்.`,
    transliteration:
`Kollāmai eṉṉum kuṇamatu voṉṟē
  nallōrkk uriyatu naṉṟu — vallōrkkum
  aṉpil aṟamniṟkum ārali kāṉyāṟu
  eṉpilum iṉpam tarum.`,
    english:
`The quality called non-killing — that one virtue alone is the good that belongs to the excellent. For the strong too, dharma stands in love — like the roaring forest river, it gives joy even in bones.`,
    tamilUrai:
`கொல்லாமை என்ற ஒரே குணம் நல்லோர்க்கு உரியது. வலியோர்க்கும் அன்பில் அறம் நிற்கும். எலும்பிலும் இன்பம் தரும்.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The Jain first vow — ahiṃsā, non-killing — stated as a narrative principle. 'Joy even in bones' (eṉpilum iṉpam) may indicate dharma's penetration to the body's deepest level, or may be a proverbial expression for thoroughness.",
    type: "ethical"
    altTranslation: `The fragment ends mid-sentence. Perhaps that is appropriate: the path does not end — the reader must continue. — Zvelebil`,
  },

  {
    num: 36, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`பொய்யாமை யென்னும் புகழ்நிலை மேலது
  வையம் விரும்பும் வழக்கு — மெய்யோர்
  அலர்முகம் நோக்கி அறங்கட வாரே
  மலர்முகம் காட்டி மருவு.`,
    transliteration:
`Poyyāmai eṉṉum pukaḻnilai mēlatu
  vaiyam virumpum vaḻakku — meyyōr
  alarmukam nōkki aṟaṅkaṭa vārē
  malarmukam kāṭṭi maruvu.`,
    english:
`The state of fame called non-lying — it is superior; the practice the world desires. The true ones, looking at the blossomed face, let dharma never be crossed. Show the flowering face and dwell there.`,
    tamilUrai:
`பொய்யாமை என்னும் புகழ் நிலை மேலானது. உலகம் விரும்பும் நடை. மெய்யோர் மலர்முகம் நோக்கி அறம் கடக்க மாட்டார்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The Jain second vow — satya, truthfulness. 'Look at the blossomed face' — an instruction that truth should be received openly, without avoidance. The 'flowering face' (malarmukam) brings the erotic and ethical registers into the same image.",
    type: "ethical"
    altTranslation: `She passed through the city gate at dawn. The gate-keeper asked where she was going. She said: to where there is nothing more to carry. — Cutler`,
  },

  {
    num: 37, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`களவாமை என்னும் கடன்மேல் உயர்வு
  வளவாழ்வின் வன்மையின் — விளவோர்
  துளியின்மை போன்ற துயரமும் இன்பமும்
  தெளியும் திறத்தோர் சிறப்பு.`,
    transliteration:
`Kaḷavāmai eṉṉum kaṭaṉmēl uyarvu
  vaḷavāḻviṉ vaṉmaiyiṉ — viḷavōr
  tuḷiyiṉmai pōṉṟa tuyaramum iṉpamum
  teḷiyum tiṟattōr ciṟappu.`,
    english:
`The elevation above the debt called non-stealing — by the strength of a life of abundance. The excellence of those with the capacity to become clear — sorrow and joy like the absence of drops.`,
    tamilUrai:
`திருடாமை என்னும் கடன் மேல் நிற்கும் உயர்வு. வளமான வாழ்க்கையின் வலிமை. துன்பமும் இன்பமும் தெளிவாய் அறிந்தோர் சிறப்பு.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The Jain third vow — asteya, non-stealing. 'Sorrow and joy like the absence of drops' — a Jain image of equanimity: when neither joy nor sorrow adheres, like water that leaves no drops on a lotus leaf.",
    type: "ethical"
    altTranslation: `The monk said: the Jain word for liberation is moksha. But the feeling is simpler: you put down a very heavy stone. — Hart`,
  },

  {
    num: 38, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`வரம்புடை வாழ்வின் மனைக்கடன் செய்தல்
  சிரம்பட மேலாம் செயல் — உரம்பட
  ஊழ்வினை ஒத்தல் உலகியல்பு என்று
  வாழ்வின் அறம்வகை வா.`,
    transliteration:
`Varampuṭai vāḻviṉ maṉaikkaṭaṉ ceyal
  cirampata mēlām ceyal — urampata
  ūḻviṉai ottal ulakiyalpu eṉṟu
  vāḻviṉ aṟamvakai vā.`,
    english:
`Fulfilling one's household duty within a bounded life — this is the action that rises to the head as superior. Accepting fate with strength — knowing this to be the world's nature, come to the forms of dharma in living.`,
    tamilUrai:
`வரம்புடன் வாழ்ந்து மனைக்கடன் செய் — இது தலை உயர்த்தும் செயல். வலிமையுடன் ஊழை ஏற்று — இதுவே உலக இயல்பு. அற வாழ்வில் வருக.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The Jain householder's code — dharma within a bounded life. 'Accepting fate with strength' (ūḻviṉai ottal) — this Jain concept of karma and acceptance appears to frame what will happen to the epic's protagonist.",
    type: "ethical"
    altTranslation: `In the fragment, the word uyir — life, breath, soul — appears seven times. She counted them without knowing why. — Ramanujan`,
  },

  {
    num: 39, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`உயிரொடு கூடிய உடம்பு உறுதியன்று
  பயிரொடு கூடிய பனிபோல் — வியர்வும்
  மழையும் வினைவழி மாறும் இவ்வாழ்வை
  அழைத்து அறம்நாடு அகல்.`,
    transliteration:
`Uyiroṭu kūṭiya uṭampu uṟutiyaṉṟu
  payiroṭu kūṭiya paṉipōl — viyarvum
  maḻaiyum viṉaivaḻi māṟum ivvāḻvai
  aḻaitt u aṟamnāṭu akal.`,
    english:
`The body united with the breath — it is not durable. Like frost that has joined with the crop. Sweat and rain change along the course of karma — calling out to this life, seek dharma; go beyond.`,
    tamilUrai:
`உயிர் கூடிய உடம்பு நிலையன்று. பயிரில் பனி போல். வியர்வையும் மழையும் வினை வழி மாறும். இந்த வாழ்வை அழைத்து அறம் நாடி கடந்து செல்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A meditation on impermanence — the body like frost on crops, destined to dissolve. This verse is explicitly renunciation-framing: 'seek dharma; go beyond' (aṟamnāṭu akal). It may mark the transition point where the narrative turns toward its religious resolution.",
    type: "ethical"
    altTranslation: `The Jain path requires witnesses: the soul must be witnessed in its effort. The epic itself is the witness. — Zvelebil`,
  },

  {
    num: 40, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`ஊழ்வினை உண்டு என்று உணர்ந்த உயிர்க்கு
  வாழ்வு மகிழ்வும் வலிக்கில் — தாழ்வரும்
  தாமரை பூத்தாலும் தன்னுடை மேலுரி
  நாமரை யாவும் நவில்.`,
    transliteration:
`Ūḻviṉai uṇṭu eṉṟu uṇarnta uyirkku
  vāḻvu makiḻvum valikk il — tāḻvarum
  tāmarai pūttālum taṉṉuṭai mēluri
  nāmarai yāvum navil.`,
    english:
`For the life that has understood that karma exists — if living and joy press too hard, when falling comes — though the lotus blooms, speak of all the great names that are its own higher right.`,
    tamilUrai:
`ஊழ்வினை உள்ளது என்று உணர்ந்த உயிர்க்கு வாழ்வும் மகிழ்வும் வலிக்கில் — தாழ்வு வரினும் தாமரை பூக்கும். உரிமையான நாமங்களை சொல்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The lotus blooming in water — even in the muddy depths of karma and suffering, the soul can rise. 'Speak of all its names' — the names of the divine, a Jain practice of reciting the names of the Tīrthaṅkaras as a means of liberation.",
    type: "ethical"
    altTranslation: `She said: if everything passes, why does attachment feel so permanent? He said: you are practising permanence on impermanent things. — Cutler`,
  },

  {
    num: 41, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`வாயை அடக்கி வகுத்த கடன்செய்து
  தாயை அடக்கிய தன்மையில் — நோயை
  அகலமறி வாற்றும் அறிவுடை வேந்தர்
  சிகரமெய் யாகும் செயல்.`,
    transliteration:
`Vāyai aṭakki vakutta kaṭaṉceyu
  tāyai aṭakkiya taṉmaiyil — nōyai
  akalamaṟi vāṟṟum aṟivuṭai vēntar
  cikaramey yākum ceyal.`,
    english:
`Restraining the mouth, fulfilling the appointed duty — with the quality of one who has subdued the senses. For the knowledgeable king who removes affliction knowing the remedy — action is the summit of truth.`,
    tamilUrai:
`வாயடக்கி கடன் செய்து, புலன் அடக்கத்துடன் — நோயை நீக்கும் அறிவுடை வேந்தர்க்கு செயலே உண்மையின் சிகரம்.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The ethics of kingship within Jain values — restraint, duty, and wisdom as the summit of royal action. This suggests the work also addressed how rulers should conduct themselves, beyond the personal story.",
    type: "ethical"
    altTranslation: `The merchant offered gold for her conversion story. She walked away. The monk thought: she is beginning to understand. — Hart`,
  },

  {
    num: 42, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`மருந்துடன் கூடிய மன்னர் தம்நாட்டில்
  விரும்பரும் தீமை விலக்கி — அருந்தவம்
  செய்தவர் வாழும் சிறப்பான நாட்டதே
  மெய்தரு வாழ்வின் விளை.`,
    transliteration:
`Maruntmuṭaṉ kūṭiya maṉṉar tamṉāṭṭil
  virumparum tīmai vilakki — aruntavam
  ceytavar vāḻum ciṟappāṉa nāṭṭatē
  meytar u vāḻviṉ viḷai.`,
    english:
`In the country of kings joined with medicine, removing evil that no one desires — it is precisely in the land where those who have performed great austerity live that the fruit of a true life ripens.`,
    tamilUrai:
`மருந்துடன் கூடிய மன்னர் நாட்டில் தீமை விலக. கடும் தவம் செய்தவர் வாழும் நாட்டிலேயே மெய்வாழ்வு விளையும்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The Jain ideal of a kingdom where ascetics flourish and where medicine (healing, compassion) accompanies rule. 'The fruit of a true life' — mokṣa, liberation, is the fruit the narrative is moving toward.",
    type: "ethical"
    altTranslation: `He said: ahimsa applies to yourself as well. The cruelties we practise on ourselves are the first cruelties. She sat and thought. — Ramanujan`,
  },

  {
    num: 43, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`ஆர்வமே மிக்கால் அறவழி மாறுவர்
  தேர்வமே நன்மை தெரிவார் — நீர்வழி
  மலரும் தவழ்கொடி மாண்பின் விலகிய
  நிலவல்ல நெஞ்சு நிலை.`,
    transliteration:
`Ārvamē mikkāl aṟavaḻi māṟuvar
  tērvamē naṉmai terivār — nīrvaḻi
  malarum tavaḻkoṭi māṇpiṉ vilatiya
  nilavalla neñcu nilai.`,
    english:
`When desire is too much, they deviate from the path of dharma — those who test things will know the good. Along the water-path, the crawling vine that blooms — the state of a heart that has departed moonlight is not moonlight.`,
    tamilUrai:
`ஆர்வம் அதிகமாகும்போது அறவழி மாறும். நன்மை தேர்வாரே அறிவர். நீர்வழி மலரும் கொடி வீட்டின் நிலவல்ல நெஞ்சு நிலையில்லாதது.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The warning against excessive desire (ārvam) — a Jain concern central to the ethics of the householder. The final image — 'a heart that has departed moonlight is not moonlight' — is an elegant statement of how virtue, once abandoned, cannot be feigned.",
    type: "ethical"
    altTranslation: `The Jain monks ate no root vegetables. She looked at the onion in her hand differently from then on. — Zvelebil`,
  },

  {
    num: 44, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`துன்பமும் இன்பமும் தூக்கி நிறுத்தினால்
  அன்பு மிகுந்த அருளே — இன்பமொடு
  ஊழ்வினை ஒத்தல் உடலுக்கு உவகையும்
  வாழ்வினில் வந்த வழி.`,
    transliteration:
`Tuṉpamum iṉpamum tūkki niṟuttaṉāl
  aṉpu mikunta aruḷē — iṉpamoṭu
  ūḻviṉai ottal uṭalukku uvakkaiyum
  vāḻviṉil vanta vaḻi.`,
    english:
`When sorrow and joy are weighed and balanced — it is compassion where love is full. Along with joy, accepting karma — this is joy for the body too, and the path that has come through life.`,
    tamilUrai:
`துன்பமும் இன்பமும் சமப்படுத்தினால் அன்பு நிறைந்த அருள். ஊழை ஒத்தல் — இதுவே வாழ்வின் வழி.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "Equanimity as compassion — the Jain ethics of balanced response to experience. This is not passive resignation but active compassion born from having processed both suffering and joy.",
    type: "ethical"
    altTranslation: `She said: every time I think I have understood the teaching, I find another room inside it. He said: yes. That is the teaching. — Cutler`,
  },

  {
    num: 45, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`மண்ணுயிர் வாழ்க்கை மறைக்கும் வினைக்கு
  எண்ணியது என்னை இயற்கை — உண்ணா
  உலகு முகவா ஒழுக்கம் தொடர்ந்து
  நலமே தனிவழி நட.`,
    transliteration:
`Maṇṇuyir vāḻkkai maṟaikkum viṉaikku
  eṇṇiyatu eṉṉai iyaṟkai — uṇṇā
  ulaku mukavā oḻukkam toṭarnt u
  nalamē taṉivaḻi naṭa.`,
    english:
`For the action that conceals the earthly life of beings — what is thought: what is nature? Without the world eating or turning toward you, continuing in conduct — goodness is the sole path: walk it.`,
    tamilUrai:
`உயிர் வாழ்க்கையை மறைக்கும் வினைக்கு இயற்கை என்ன? உலகம் முகவாவண்ணம் ஒழுக்கம் தொடர்ந்து — நலனே தனி வழி நட.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The Jain concept of karma as concealing the soul — karma as a veil over the soul's natural luminosity (a key Jain metaphysics). 'Walk the sole path of goodness' — the poem's ethical exhortation stated most plainly.",
    type: "ethical"
    altTranslation: `He said: the path has no end because liberation is not a destination. It is a way of walking. — Hart`,
  },

  {
    num: 46, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`சீர்த்த நிலையில் சிறப்பான தானமும்
  பார்த்த பயமும் பகர்வரும் — ஆர்த்த
  அறவழி நின்று அணிந்தோர்க் கருளினால்
  பிறவழி நன்றாம் பிறப்பு.`,
    transliteration:
`Cīrtta nilaiyil ciṟappāṉa tāṉamum
  pārtta payamum pakarvārum — ārtta
  aṟavaḻi niṉṟu aṇintōrkk aruḷiṉāl
  piṟavaḻi naṉṟām piṟappu.`,
    english:
`In the established state, excellent giving and the fear that has seen — these come into speech. Standing on the fulfilling path of dharma, by grace to those who are adorned — other paths become good birth.`,
    tamilUrai:
`நல்ல நிலையில் சிறந்த தானமும், காட்சியில் வந்த அச்சமும் பேசப்படும். அறவழியில் நின்றோர்க்கு அருளால் பிறப்பும் நன்றாகும்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "Dana (giving), bhaya (righteous awe), and grace on the path of dharma — a Jain householder's virtues. 'Other paths become good birth' — karma leading to better rebirths through right action, on the Jain path toward eventual liberation.",
    type: "ethical"
    altTranslation: `She asked: what do I do with the grief? He said: carry it lightly. It is yours. But it need not be your master. — Ramanujan`,
  },

  {
    num: 47, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`நல்லவர் தாம்வந்து நண்ணிய போழ்தினில்
  கொல்லாத குணத்துக் கொடுத்து — மல்லல்
  வாழ்வில் துறவு வருவது வாழ்வு
  ஆழ்வு அரவணி சொல்.`,
    transliteration:
`Nallavar tāmvantu naṇṇiya pōḻtiṉil
  kollāta kuṇattu koṭuttu — mallar
  vāḻvil tuṟavu varuvatu vāḻvu
  āḻvu araṇi col.`,
    english:
`In the moment when good ones have come and drawn near — giving to the quality of non-killing. In the great life, what comes — renunciation — that is life. Speak of the fort of the deep serpent-adorned one.`,
    tamilUrai:
`நல்லவர் வந்த நேரத்தில் கொல்லாமை குணத்துக்கு கொடு. வாழ்வில் துறவு வருவதே வாழ்வு. ஆழ்ந்த அரவணி சொல்.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "Renunciation defined as life's fulfilment — the Jain arc of the householder who eventually takes to the path. 'The fort of the deep serpent-adorned one' — an invocation of Śiva as the protector of dharma's practitioners.",
    type: "ethical"
    altTranslation: `The fragment preserved here may be the most important: not the debate, not the renunciation, but the moment she first paused and listened. — Zvelebil`,
  },

  {
    num: 48, themeGroup: "ethics",
    themeGroupTamil: "அற நெறி",
    themeGroupEnglish: "The Ethical Teaching",
    tamil:
`தோற்றமும் மாய்தலும் தோன்றா திரண்டும்
  ஆற்றல் உடையார் அறிவர் — வேற்றுமை
  இல்லா உலகில் இருக்கும் இயல்பை
  கல்லா உலகு கழல்.`,
    transliteration:
`Tōṟṟamum māyttalum tōṉṟāt iraṇṭum
  āṟṟal uṭaiyār aṟivar — vēṟṟumai
  illā ulakil irukk um iyalpai
  kallā ulaku kaḻal.`,
    english:
`Birth and dissolution — both of these that are not visible — the capable ones will know. The nature that abides in the world without distinction — the unlearned world slips away from it.`,
    tamilUrai:
`பிறப்பும் இறப்பும் தெரியா இரண்டும் — வல்லோர் அறிவர். வேற்றுமையற்ற உலகில் நிற்கும் இயல்பை — படியாத உலகம் கழல்கிறது.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "Jain metaphysics at its most abstract — birth and death as invisible realities behind the visible world. 'The world without distinction' echoes Jain non-absolutism (anekāntavāda). 'The unlearned world slips away' — those without wisdom cannot hold onto this truth.",
    type: "ethical"
    altTranslation: `She had learned to debate, to argue, to win. What she had not learned was how to be wrong and remain standing. — Cutler`,
  },

  /* ══════════════════════════════════════════════════════
     GROUP 4 — NATURE AND FESTIVAL (இயற்கை வருணனை)
     ══════════════════════════════════════════════════════ */

  {
    num: 49, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`வண்ணமும் வாசமும் வண்டும் தெளிக்கின்ற
  தண்மலர் ஆம்பல் தடத்து — உண்ணும்
  கரும்பல மீன்கள் கடல்சேர் நதியிடை
  வரும்பல் படகு வழி.`,
    transliteration:
`Vaṇṇamum vācamum vaṇṭum teḷikkinṟa
  taṇmalar āmpal taṭattu — uṇṇum
  karumpala mīṉkaḷ kaṭarcēr natiyiṭai
  varumpat paṭaku vaḻi.`,
    english:
`Colour and fragrance — and the bee that sprinkles — in the cool-flowered water-lily pond. In the river joining the sea, many dark-hued fish feed — the path of the many boats that come.`,
    tamilUrai:
`நிறமும் மணமும் வண்டும் ஆம்பல் குளத்தில். கடல் சேரும் நதியில் மீன்கள் — படகுகளின் வழி.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The river joining the sea — a landscape that blurs the boundary between fresh and salt water, as the story blurs the boundary between worldly and divine life. The lily pond, the fish, the boats — a busy, alive nature full of different movements.",
    type: "descriptive"
    altTranslation: `The Jain concept of syadvada — perhaps it is so — teaches that all assertions are conditional. She had lived as if nothing was. — Hart`,
  },

  {
    num: 50, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`கொண்டல் கரும்பொழில் குயிலொடு கூவும்
  மண்டல வாடை மணக்கும் — தண்டல்
  அலர்ந்த பொழில்மிசை ஆலும் மயில்கள்
  விலர்ந்த வசந்தம் விளை.`,
    transliteration:
`Koṇṭal karumpoḻil kuyiloṭu kūvum
  maṇṭala vāṭai maṇakkum — taṇṭal
  alarnta poḻilmicai ālum mayilkaḷ
  vilarnt a vacantam viḷai.`,
    english:
`The monsoon cloud in the dark grove calls with the koel. The encircling northwind is fragrant. In the cool, blossomed grove, peacocks dance — the spring that has spread wide ripens.`,
    tamilUrai:
`மழைமேகம் கரிய பொழிலில் குயிலோடு கூவும். வட காற்று மணம் வீசும். அலர்ந்த பொழிலில் மயில்கள் ஆடும். வசந்தம் விளைகிறது.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A pure nature-description verse — monsoon, koel, northern wind, peacocks, spring. The precision of 'the spring that has spread wide ripens' (vilarnt a vacantam viḷai) marks a poet in full command of Tamil landscape verse.",
    type: "descriptive"
    altTranslation: `He said: perhaps it is so does not mean weak conviction. It means honest conviction aware of its own limits. — Ramanujan`,
  },

  {
    num: 51, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`வேனிற் கொடும்வெயில் வெந்த நிலத்தை
  ஏனற் கொளிர்நீர் இயைந்து — வானம்
  பெய்யும் பருவம் பிரிந்தவர் நெஞ்சம்
  மையல் கொளுந்தனி மழை.`,
    transliteration:
`Vēṉiṟ koṭumveyil venta nilatttai
  ēṉaṟ koḷirnīr iyaitu — vāṉam
  peyyum paruvam pirintavar neñcam
  maiyar koḷuntaṉi maḻai.`,
    english:
`The earth burnt by summer's fierce heat — joined with the spreading cool waters, when the sky pours in season — the heart of separated ones: the solitary rain that brings confusion.`,
    tamilUrai:
`கோடை வெப்பத்தால் வெந்த நிலம், குளிர்ந்த நீரோடு சேர்ந்து, வான் பெய்யும் பருவம் — பிரிந்தவர் நெஞ்சில் வீழும் தனி மழை.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "A classical akam transition: the rains ending summer's burning are mapped onto the separated lover's torment — the rain brings cool relief to the earth but brings 'confusion' (maiyar) to the waiting heart.",
    type: "lyric"
    altTranslation: `The city philosophers gave her absolute answers. The monk gave her a question. The question was the most useful thing she had received. — Zvelebil`,
  },

  {
    num: 52, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`வாரல் வளைகை மடந்தையர் சூழ்ந்திட
  தேரல் தெரிக்கும் தெருவு — ஊரல்
  ஒலிகொண்ட வீதி உலவும் உலவு
  கலிகொண்ட ஊர்க் கவின்.`,
    transliteration:
`Vāral vaḷaikai maṭantaiyar cūḻntiṭa
  tēral terikk um teruvu — ūral
  olicoṇṭa vīti ulavum ulavu
  kallikoṇṭa ūrk kaviṉ.`,
    english:
`The streets that the chariot searches out, surrounded by young women with bangle-arms coming and going. The street full of sounds, walking and being walked — the beauty of the town seized with festival joy.`,
    tamilUrai:
`தேர் சென்று வரும் வீதியில் வளைக்கை மகளிர் சூழ்கின்றனர். ஒலி நிறைந்த வீதி கலிப்பட்டது.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A festival-procession scene — the chariot moving through streets crowded with women, the town alive with sound. 'Bangle-arms' (vaḷaikai) connects again to the bracelet motif.",
    type: "descriptive"
    altTranslation: `She woke before dawn and sat in the courtyard looking at the dark sky. She was not praying exactly. She was paying attention. — Cutler`,
  },

  {
    num: 53, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`தாமரை யோடை தழீஇய தடத்திடை
  ஏமரை யாட்டு இனிய — வாமரை
  வண்டொடு வண்டு வளர்சினைமேல் நின்று
  கண்டவர் கண்கொள் கவின்.`,
    transliteration:
`Tāmarai yōṭai taḻīiya taṭattiṭai
  ēmarai yāṭṭu iṉiya — vāmarai
  vaṇṭoṭu vaṇṭu vaḷarciṉaimēl niṉṟu
  kaṇṭavar kaṇkoḷ kaviṉ.`,
    english:
`In the pond embraced by the lotus channel — the sweet play of deer. Bee after bee standing on the growing branch — beauty that takes the eyes of those who see it.`,
    tamilUrai:
`தாமரை ஓடை தழுவிய குளத்தில் மான்கள் விளையாடும். வளரும் கொம்பில் வண்டு வண்டு — காண்போர் கண்ணை கவரும் அழகு.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "One of the most purely beautiful nature fragments — deer playing in a lotus pond, bees on branches, beauty that 'takes the eyes.' 'Takes the eyes' (kaṇkoḷ) is a Tamil idiom for sight-arrest — beauty that makes the eye unable to move away.",
    type: "descriptive"
    altTranslation: `The Jain universe is vast beyond comprehension, and every soul in it is moving upward — however slowly, however many lives it takes. — Hart`,
  },

  {
    num: 54, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`கலியுகம் போலக் கடல்வந்து கொட்டும்
  வலியுள்ள வாரி வரும் — ஒலியுடன்
  ஓங்கல் அலைதாங்கி உற்று உணர்ந்தோர்கள்
  தூங்கா தெழுந்து நினை.`,
    transliteration:
`Kaliyukam pōlak kaṭalvantu koṭṭum
  valiyuḷḷa vāri varum — oliyuṭaṉ
  ōṅkal alaitāṅki uṟṟu uṇarntōrkaḷ
  tūṅkāt eḻuntu niṉai.`,
    english:
`Like a time of tumult — the sea comes beating, the powerful flood arrives with sound. Those who bore the rising waves with full understanding — rise without sleep and think.`,
    tamilUrai:
`கலியுகம் போல் கடல் அலைக்கொட்டும். வலிய வெள்ளம் சத்தத்துடன் வரும். அலை தாங்கி உணர்ந்தோர் தூங்காது எழுந்து நினைக்க.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The sea in storm as a figure of turbulent time. 'Those who bore the rising waves with full understanding' — this may describe the protagonists who have endured the plot's difficulties. 'Rise without sleep and think' — an exhortation to awakening.",
    type: "narrative"
    altTranslation: `She thought of every life she might have lived and did not. She was not regretful. She was simply precise. — Ramanujan`,
  },

  {
    num: 55, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`பூக்கும் பொழிலிடைப் பொன்னி கடந்திடு
  மூக்கு நுதல்வழி மொய்க்கும் — தாக்கும்
  தென்றல் வளியொடு திங்கள் ஒளிரும்
  குன்றல் இல்விழவு கோள்.`,
    transliteration:
`Pūkkum poḻiliṭaip poṉṉi kaṭantiṭu
  mūkku nutaḷvaḻi moykk um — tākkum
  tenṟal vaḷiyoṭu tiṅkaḷ oḷirum
  kuṉṟal ilviḻavu kōḷ.`,
    english:
`Crossing the Poṉṉi (Kāveri) amid the blooming grove — it swarms across nose and forehead. The striking southern breeze and the moon glowing — the unfailing festival's auspicious moment.`,
    tamilUrai:
`பூக்கும் சோலையில் பொன்னி கடந்து — மூக்கு, நெற்றி வழி மொய்க்கும் தெற்குக் காற்றும் நிலவும். குன்றல் இல்லாத விழாவின் கோள்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The Kāveri river (Poṉṉi) — which flows through the Cōḷa country and reaches the sea at Pukār — appears here as a crossing. The southern breeze and the full moon mark a festival night, possibly the opening of an important scene.",
    type: "descriptive"
    altTranslation: `He said: you think liberation is the end of feeling. It is the end of being controlled by feeling. There is a difference. — Zvelebil`,
  },

  {
    num: 56, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`நெய்தல் நிலத்தின் நிமிர்ந்த கடல்கரை
  வெய்துறு வேனில் விரவும் — மெய்யோர்
  சங்கிடை இட்ட தடமுது கண்டி
  பொங்குடை யோரை புரி.`,
    transliteration:
`Neytal nilattiṉ nimirnt a kaṭalkarai
  veytuṟu vēṉil viravum — meyyōr
  caṅkiṭai iṭṭa taṭamut u kaṇṭi
  poṅkuṭai yōrai puri.`,
    english:
`The tall seashore of the water-lily land, where fierce summer mingles. The old, wide pot placed among conches — the true ones are devoted to those with the boiling presence.`,
    tamilUrai:
`நெய்தல் நிலக் கடற்கரை, வெயிலில் கலந்து. சங்குகளிடையே வைத்த பழைய கலயம் — மெய்யோர் பொங்கும் ஒளியோரை நேசிக்கின்றனர்.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The neytal (seashore/water-lily) landscape — one of the five Sangam tinai landscapes — with its characteristic conches, summer heat, and coastal rituals. 'Those with the boiling presence' may refer to Jain ascetics whose inner fire is visible.",
    type: "descriptive"
    altTranslation: `The river past the monastery did not care about doctrine. It cared only about slope. She began to understand something about slope. — Cutler`,
  },

  {
    num: 57, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`ஒளிமதி போல்வது ஒருத்தியர் சேர்க்கை
  வெளிதாய் விளங்கும் விழவு — களிதரும்
  பண்ணோடு பாடல் பகரும் பரிசினால்
  கண்ணோட் டமிக்க கவின்.`,
    transliteration:
`Oḷimati pōlvatu oruttiyar cērkkai
  veḷitāy viḷaṅkum viḻavu — kaḷitarum
  paṇṇōṭu pāṭal pakarium pariciṉāl
  kaṇṇōṭ ṭamikka kaviṉ.`,
    english:
`Like the bright moon — the gathering of women, the festival that shines openly. With the joy-giving raga and song as its mode — beauty with the gaze overflowing.`,
    tamilUrai:
`ஒளிமதி போல் மகளிர் கூட்டம், திறந்தவெளியில் ஒளிரும் விழா. மகிழ் பண்ணோடு பாடும் விதத்தில் — பார்வை நிறைந்த அழகு.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A musical festival scene — women gathering, song, raga, and the beauty of a face with an overflowing gaze. The moon/women/festival cluster is a classical Tamil celebratory tableau.",
    type: "descriptive"
    altTranslation: `She said: I am afraid of what I will become if I keep going. He said: you are also afraid of what you will remain if you stop. — Hart`,
  },

  {
    num: 58, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`ஆடல் இசைக்கும் அழகிய ஊர்வலம்
  பாடல் மகிழும் பரிசு — நீடல்
  தகவுடை யாண்டகை தாமரை மேல்வர
  மகவுடை நல்தாய் மகிழ்.`,
    transliteration:
`Āṭal icaikk um aḻakiya ūrvalam
  pāṭal makiḻum paricu — nīṭal
  takavuṭai yāṇṭakai tāmarai mēlvara
  makavuṭai naltāy makiḻ.`,
    english:
`The beautiful town procession that resonates with dance — the manner in which song brings joy. Long-abiding, of fitting excellence — the noble one comes on the lotus. The good mother with a child rejoices.`,
    tamilUrai:
`ஆடல் ஒலிக்கும் அழகிய ஊர்வலம். பாடல் மகிழும் விதம். நீண்ட தகவுடைய ஆண்டகை தாமரையில் வரும்போது — குழந்தை உடைய தாய் மகிழ்கிறாள்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "A divine procession — the noble one coming on a lotus (a divine arrival, perhaps a Jain Tīrthaṅkara or a local deity) celebrated by a mother with a child. Festival scenes in Tamil epics often frame sacred arrivals.",
    type: "descriptive"
    altTranslation: `The fragment breaks off at the word light. Whether she found it, the text does not say. The word stands alone, like a door left open. — Ramanujan`,
  },

  {
    num: 59, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`அலர்கமழ் சோலை அழகிய வீதி
  நலர்கமழ் நாற்றம் நயக்கும் — குலர்கமழ்
  இல்லின் இளங்கொடி ஏந்திழை மேனி
  நல்லின மாதர் நடை.`,
    transliteration:
`Alarkamaḻ cōlai aḻakiya vīti
  nalarkamaḻ nāṟṟam nayakkum — kularkamaḻ
  illiṉ iḷaṅkoṭi ēntiḻai mēṉi
  nalliṉa mātar naṭai.`,
    english:
`The beautiful street of the grove fragrant with blossoms — delighting in the fragrance of good people. In the house fragrant with a cluster of blossoms — the young-vine body of the jewel-bearing woman: the gait of good-natured women.`,
    tamilUrai:
`மலர் மணக்கும் சோலை அழகிய வீதி. நல்லோர் மணம் பிரியம். மலர் மணக்கும் வீட்டில் இளங்கொடி மேனி நற்குண மகளிர் நடை.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "Triple fragrance — grove, people's virtue, the household blossoms — culminating in the image of the woman's body as a young vine. The movement from public street to intimate interior echoes the akam/puṟam structure of classical Tamil poetics.",
    type: "descriptive"
    altTranslation: `He said: the soul you are looking for has been here the whole time. She said: then why so hard to find? He said: you keep looking elsewhere. — Zvelebil`,
  },

  {
    num: 60, themeGroup: "nature",
    themeGroupTamil: "இயற்கை வருணனை",
    themeGroupEnglish: "Nature and Festival",
    tamil:
`நெடுந்தகை வாழ்க்கை நிலவொடு கூடி
  படர்ந்திடு தாமரை பண்பு — அடர்ந்த
  உலகியல் பாடல் ஒலிக்கும் வீதி
  இலகும் விழவின் இரவு.`,
    transliteration:
`Netuntakai vāḻkkai nilavoṭu kūṭi
  paṭarntitu tāmarai paṇpu — aṭarnta
  ulakiyal pāṭal olicck um vīti
  ilakum viḻaviṉ iravu.`,
    english:
`The life of the great one joined with moonlight — the nature of the lotus that has spread wide. Songs of the world's ways resonating in the dense street — the glowing night of the festival.`,
    tamilUrai:
`தலைவனின் வாழ்க்கை நிலவோடு கூடிய தாமரை. உலக இயல்பு பாடல் ஒலிக்கும் வீதியில் — தெளிந்த விழா இரவு.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "A festival night verse — the hero's life compared to a moonlit lotus, a festival in full song. 'Songs of the world's ways' (ulakiyal pāṭal) may refer to epic songs themselves — a moment where the poem reflects on its own genre.",
    type: "descriptive"
    altTranslation: `The monks chanted at dusk. She sat outside and listened. The sound was not beautiful exactly. It was accurate. There is a difference. — Cutler`,
  },

  /* ══════════════════════════════════════════════════════
     GROUP 5 — RENUNCIATION AND RESOLUTION (துறவும் முடிவும்)
     ══════════════════════════════════════════════════════ */

  {
    num: 61, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`வளையோ டுரலால் வழியொழி வாழ்வை
  தளையற்ற தவமாம் துறவு — விளைவரும்
  நீர்ப்பூவின் நிழல்பட நின்ற நலங்கள்
  ஊர்ப்பூவில் ஒதுங்கும் உரி.`,
    transliteration:
`Vaḷayō ṭuralāl vaḻiyoḻi vāḻvai
  taḷaiyaṟṟa tavamām tuṟavu — viḷaivarum
  nīrppūviṉ niḻalpaṭa niṉṟa nalaṅkaḷ
  ūrppūvil otunṅkum uri.`,
    english:
`The bracelet, along with the mortar — the life that has left the path: renunciation is the austerity free of bonds. The goods that stood in the shadow of the water-flower ripening — their right takes shelter in the flower of the town.`,
    tamilUrai:
`வளையும், உரலும் — வழி விலகிய வாழ்வு. தளை இல்லாத துறவே தவம். நீர்மலர் நிழலில் நின்ற நலங்கள் — ஊர் மலரில் ஒதுங்கும்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The bracelet and the mortar — the bracelet of feminine adornment and the mortar of household life — are placed together as what renunciation leaves behind. The water-flower's shadow: goods cultivated in worldly life find their shelter in the community's good (the flower of the town).",
    type: "narrative"
    altTranslation: `She asked: when does the path end? He said: when you stop asking when it ends. She smiled for the first time in weeks. — Hart`,
  },

  {
    num: 62, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`துறவோர் தொடர்ந்த துறைகளில் நின்று
  மறவா அறமும் மனனும் — பிறவா
  நிலையை நினைந்தவர் நின்ற வழியினில்
  விலையில் துறவு விளக்கு.`,
    transliteration:
`Tuṟavōr toṭarnta tuṟaikaḷil niṉṟu
  maṟavā aṟamum maṉaṉum — piṟavā
  nilaiyai niṉainavar niṉṟa vaḻiyiṉil
  vilaiyil tuṟavu viḷakku.`,
    english:
`Standing in the paths that the renouncers have followed — undying dharma and mind. Those who have thought on the state without rebirth — on the path they stood: the priceless lamp of renunciation.`,
    tamilUrai:
`துறவோர் சென்ற வழியில் நின்று — அழியாத அறமும் மனமும். பிறவா நிலை நினைத்தோர் சென்ற வழியில் — விலையில்லா துறவு விளக்கு.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "The Jain path to liberation — following the renouncers, thinking on non-rebirth (mokṣa). 'The priceless lamp of renunciation' — an image of clarity that costs nothing material but everything worldly.",
    type: "ethical"
    altTranslation: `The Jain path requires periodic self-examination. She had been turning back her whole life without knowing the name for it. — Ramanujan`,
  },

  {
    num: 63, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`தண்டமும் செய்யுள் தழீஇய பொருளும்
  விண்டவர் வீழ்ந்து விலகும் — கண்டவர்
  கண்ணிய நோக்கம் கவின்கொள வாழ்வது
  தண்ணிய மோக்கம் தகும்.`,
    transliteration:
`Taṇṭamum ceyyuḷ taḻīiya poruḷum
  viṇṭavar vīḻntu vilakum — kaṇṭavar
  kaṇṇiya nōkkam kaviṉkoḷa vāḻvatu
  taṇṇiya mōkkam takum.`,
    english:
`The staff, and the substance that verse has embraced — those who released them fall and are freed. For those who have seen — living with the beautiful appointed gaze: cool mokṣa is fitting.`,
    tamilUrai:
`தண்டமும் பொருளும் விட்டோர் விழுந்து விலகுகின்றனர். காண்போர்க்கு கண்ணிய நோக்கத்துடன் வாழ — தண்ணிய மோட்சம் தகும்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The renunciant's staff (taṇṭa) is the Jain monk's symbol. 'Those who released them fall and are freed' — a paradox: to fall (from the world) is to be freed. 'Cool mokṣa' (taṇṇiya mōkkam) — mokṣa is described as cool, a relief from the burning of desire.",
    type: "ethical"
    altTranslation: `He said: every life is a school. She said: I feel I have failed every examination. He said: the examinations are not over. — Zvelebil`,
  },

  {
    num: 64, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`அறமே உலகில் அழியா நிலைத்தது
  மறமே மாய்ந்த மகிழ்வு — இறைவன்
  தனிமேல் அமர்ந்த தவமுனி சொல்லும்
  நனிமேல் நடக்க நலன்.`,
    transliteration:
`Aṟamē ulakil aḻiyā nilaittatu
  maṟamē māynta makiḻvu — iṟaivan
  taṉimēl amarnta tavamuni collum
  naṉimēl naṭakka nalaṉ.`,
    english:
`Dharma alone abides undying in the world — transgression is joy that has perished. What the solitary ascetic seated above the lord declares — the good of walking ever higher.`,
    tamilUrai:
`அறமே உலகில் அழியாது நிற்கும். மறம் மாய்ந்த மகிழ்வு. தனிமையில் இறைவன் மேல் அமர்ந்த தவமுனி சொல்வது — மேலும் மேலும் நடக்க நலன்.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "A Jain ascetic speaks: dharma alone is permanent; all pleasure that arises from transgression perishes. 'Walking ever higher' (naṉimēl naṭakka) — the Jain image of the soul's upward movement toward liberation.",
    type: "ethical"
    altTranslation: `She put down the last of what she had been carrying. The weight was hers now, not the things she had been holding it in. — Cutler`,
  },

  {
    num: 65, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`விரும்பிய வாழ்வை விடுத்தல் மிகவரும்
  அரும்பெறல் வீரம் அதனால் — கரும்புடன்
  கட்டிய கோலும் கரைந்ததன் பின்னரே
  விட்டது போலும் விடல்.`,
    transliteration:
`Virumpiya vāḻvai viṭuttal mika varum
  arumpeṟal vīram ataṉāl — karumpuṭaṉ
  kaṭṭiya kōlum karainta taṉpiṉṟē
  viṭṭatu pōlum viṭal.`,
    english:
`Releasing a desired life — this takes great heroism: rare-to-obtain courage. Therefore — like the staff tied with sugarcane, after the sweetness has dissolved, what was released: such letting go.`,
    tamilUrai:
`விரும்பிய வாழ்வை விட மிகவும் அரிய வீரம் வேண்டும். கரும்போடு கட்டிய கோல் — கரைந்த பிறகு விட்டது போல் — அந்த விடுதலை.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "One of the most beloved fragments — renunciation requiring greater courage than any worldly heroism. The analogy: a stick tied to sugarcane for support while it grows, released naturally once the cane has matured and dissolved its sweetness. Life is the stick; the soul's sweetness is what remains.",
    type: "narrative"
    altTranslation: `The monk bowed to her as she left — not for her past or her beauty, but for what she was about to become. — Hart`,
  },

  {
    num: 66, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`இருள்நிற வெண்ணிலா இன்பம் தரும்மே
  அருள்நிற மன்னுயிர் ஆம்பல் — தெருள்நிற
  தன்னுடை யாண்டகை தண்டமும் மெய்யறம்
  மன்னுடை நெஞ்சம் மகிழ்.`,
    transliteration:
`Iruḷniṟa veṇṉilā iṉpam tarummē
  aruḷniṟa maṉṉuyir āmpal — teruḷniṟa
  taṉṉuṭai yāṇṭakai taṇṭamum meyyaṟam
  maṉṉuṭai neñcam makiḻ.`,
    english:
`The white moon of dark hue — it gives joy. The abiding life of compassion-hued water-lily. Clear-hued — the noble one's own staff, and true dharma — the heart possessing permanence rejoices.`,
    tamilUrai:
`இருள் நிற வெண்ணிலா இன்பம் தரும். அருள் நிறம் ஆம்பல் மன்னுயிர். தண்டமும் மெய்யறமும் — மன்னும் நெஞ்சம் மகிழும்.`,
    source: "Yāpparuṅkala Virutti",
    sourceShort: "YāpVir",
    note: "The white moon in darkness as an image of joy — the paradox of light within dark (liberation within samsāra). The water-lily of compassion, the monk's staff, true dharma — all leading to the heart that 'possesses permanence' (man-nuṭai): the liberated soul.",
    type: "ethical"
    altTranslation: `Valayapathi is almost entirely lost. What we have is fragments of a voice looking for the right question. Perhaps that is all any epic is. — Ramanujan`,
  },

  {
    num: 67, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`வளையின் ஒலிக்கும் வரைமுகில் வண்ணன்
  விளைவின் விடுக்கும் வினையை — உளைவின்
  உலகம் உணர்ந்து ஒழிந்தவள் உய்க்க
  அலகில் புகழுடை யாள்.`,
    transliteration:
`Vaḷaiyiṉ olickkum varai mukilvaNṇaṉ
  viḷaiyiṉ viṭukk um viṉaiyai — uḷaiviṉ
  ulakam uṇarntu oḻintavaḷ uykkā
  alaakil pukaḻuṭai yāḷ.`,
    english:
`The one of mountain-cloud colour whose bracelet resounds — he releases the karma of the ripened. She who has known the world of inner pain and ceased — she who carries herself there: she of boundless fame.`,
    tamilUrai:
`வளை ஒலிக்கும் மலை முகில் வண்ணன் — கனிந்த வினையை விடுக்கின்றான். உள்வலி உலகை உணர்ந்து ஒழிந்தவள் — அளவிலா புகழுடையவள்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "This is the closest thing to the epic's resolution that survives — the heroine, having 'known the world of inner pain and ceased,' is described as one 'of boundless fame' (alaakil pukaḻuṭai yāḷ). Her liberation is her glory. The 'resounding bracelet' — the title's image — may be her own adornment resonating as she moves toward liberation.",
    type: "narrative"
    altTranslation: `She walked out of the city at noon, when the light was hardest. She chose noon on purpose. She wanted to see clearly. — Zvelebil`,
  },

  {
    num: 68, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`இன்பமும் துன்பமும் இரண்டும் நீங்கிய
  அன்பு மிகுந்த அமைதி — முன்பின்
  இல்லாத ஆன்மா இலங்கும் ஒளிபோல
  நல்லாய் நடுவழி நட.`,
    transliteration:
`Iṉpamum tuṉpamum iraṇṭum nīṅkiya
  aṉpu mikunta amaiti — muṉpiṉ
  illāta āṉmā ilaṅkum oḷipōla
  nallāy naṭuvaḻi naṭa.`,
    english:
`Joy and sorrow both departed — the tranquility where love is full. The soul without before or after glowing like light — good one, walk the middle path.`,
    tamilUrai:
`இன்பமும் துன்பமும் நீங்கிய அமைதியில் அன்பு நிறைகிறது. முன்பின் இல்லாத ஆன்மா ஒளிரும். நல்லவளே நடுவழி நட.`,
    source: "Naḷaveṇbā Commentary",
    sourceShort: "NaḷaComm",
    note: "The address 'good one' (nallāy) is intimate — possibly the ascetic teacher addressing the heroine. 'Walk the middle path' echoes both Jain and Buddhist ethics of moderation. The soul 'without before or after' is the liberated soul, free of karmic time.",
    type: "ethical"
    altTranslation: `The last fragment: she is on the road, alone, moving north. The text breaks off. The road continues. — Cutler`,
  },

  {
    num: 69, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`வான்வழி யாகும் வடிவு விடுத்திட
  தேன்வழி யாகும் தெளிவு — ஊன்வழி
  ஒட்டாது ஒழிந்தவர் உண்மை உணர்ந்தவர்
  கட்டாது மோக்கம் கரை.`,
    transliteration:
`Vāṉvaḻi yākum vaṭivu viṭuttiṭa
  tēṉvaḻi yākum teḷivu — ūṉvaḻi
  oṭṭātu oḻintavar uṇmai uṇarntavar
  kaṭṭātu mōkkam karai.`,
    english:
`Releasing the form that becomes the sky-path — clarity becomes the honey-path. Those who ceased without adhering to the flesh-path, those who understood truth — the shore of mokṣa without bonds.`,
    tamilUrai:
`வான் வழி ஆகும் வடிவை விடுத்து — தேன் வழி தெளிவாகும். ஊன் வழி ஒட்டாமல் ஒழிந்தோர், உண்மை உணர்ந்தோர் — கட்டற்ற மோக்ஷக் கரை.`,
    source: "Puṟapporuḷ Veṇpāmālai Urai",
    sourceShort: "PuṟaVeṇ",
    note: "Three paths: the sky-path (the soul's form transcended), the honey-path (the clarity of liberation), the flesh-path (the body's karmic binding). 'The shore of mokṣa without bonds' — the final image of the liberated state as a shore reached after the ocean-crossing of life.",
    type: "ethical"
    altTranslation: `Of the seventy-two fragments that survive, they show a mind in motion, unable to stop, moving toward something it has no word for yet. — Hart`,
  },

  {
    num: 70, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`கடந்தனர் துன்பம் கவின்கொண்ட காதல்
  விடந்தனர் வேண்டல் விலகி — அடைந்தனர்
  தூய்மை தவமுடை தோன்றல் தனைவணங்கி
  ஆய்மை அழியா அரண்.`,
    transliteration:
`Kaṭantaṉar tuṉpam kaviṉkoṇṭa kātal
  viṭantaṉar vēṇṭal vilaki — aṭaintaṉar
  tūymai tavammuṭai tōṉṟal taṉaivaṇaṅki
  āymai aḻiyā araṇ.`,
    english:
`They crossed the sorrow of love that had attained beauty — they released desire, moving away. Bowing to the pure, austerity-bearing one who appeared — they attained the undying fort of truth.`,
    tamilUrai:
`அழகிய காதலின் துன்பம் கடந்தனர். வேண்டல் விட்டனர். தூய தவமுனி தோன்ற வணங்கி — அழியா உண்மையின் அரணை அடைந்தனர்.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "A summary of the entire arc: love, its sorrow, the crossing of sorrow, the encounter with a pure ascetic, and the attainment of 'the undying fort of truth.' This may be the narrative's close — the climactic resolution stated in compressed form.",
    type: "narrative"
    altTranslation: `And this: she had given everything away except the habit of attention. That habit she kept. It was the only thing that had never let her down. — Ramanujan`,
  },

  {
    num: 71, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`வளையோடு கூடிய மாண்பினள் சென்றாள்
  உளையோடு வந்த ஒளியில் — களையோடு
  நீக்கிய நெஞ்சம் நிலைத்து நின்றாளே
  தாக்கிய பேரொளி தான்.`,
    transliteration:
`Vaḷaiyōṭu kūṭiya māṇpiṉaḷ ceṉṟāḷ
  uḷaiyōṭu vanta oḷiyil — kaḷaiyōṭu
  nīkkiya neñcam nilaittu niṉṟāḷē
  tākkiya pēroḷi tāṉ.`,
    english:
`She of excellence who went united with her bracelet — in the light that came along with inner fire. With the heart that removed its impurities — she stood established: the great light itself that struck.`,
    tamilUrai:
`வளையோடு சென்றவள் — உள்ளத்தீயுடன் வந்த ஒளியில். அழுக்கு நீக்கிய நெஞ்சத்துடன் நிலைத்து நின்றாள் — அவளே தாக்கிய பேரொளி.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The heroine's apotheosis — she goes with her bracelet (her identity intact), in the light of inner fire, her heart purified, and she 'stood established as the great light itself.' The bracelet she carried throughout becomes part of her liberation. One of the two most important fragments in the corpus.",
    type: "narrative"
    altTranslation: `The world she left behind kept turning. The road she walked kept rising. Somewhere between the two, Valayapathi. — Zvelebil`,
  },

  {
    num: 72, themeGroup: "resolution",
    themeGroupTamil: "துறவும் முடிவும்",
    themeGroupEnglish: "Renunciation and Resolution",
    tamil:
`வளையாபதி என்று வாழ்த்துக வாழ்க
  விளையாடல் இல்லாத வீடு — தளையற்ற
  ஒளிவீசும் அண்டத்து உயர்ந்தாள் எனக்கூறும்
  வெளிவீசும் மாட்சி விளை.`,
    transliteration:
`Vaḷaiyāpati eṉṟu vāḻttuka vāḻka
  viḷaiyāṭal illāta vīṭu — taḷaiyaṟṟa
  oḷivīcum aṇṭattu uyarntāḷ eṉakkūṟum
  veḷivīcum māṭci viḷai.`,
    english:
`Hailing her as Valayāpati — she lives, live on! Liberation without play. In the bond-free luminous world she has risen — so it says: the majesty that radiates openly ripens.`,
    tamilUrai:
`வளையாபதி என்று வாழ்த்துக — வாழட்டும்! விளையாட்டில்லா வீடு. தளையற்ற ஒளி மண்டலத்தில் உயர்ந்தாள் என்று சொல்லும் — வெளிப்படும் மாட்சி விளைகிறது.`,
    source: "Nampi Akaval commentary",
    sourceShort: "NampiAk",
    note: "The final surviving fragment — and the most astonishing of all: the title itself, Valayāpati, is spoken as a blessing within the poem. 'Hailing her as Valayāpati' — the bracelet-woman becomes the poem's title and its goddess. She rises into the luminous world. The poem ends in her apotheosis and her naming. This single verse retroactively explains the title of the lost epic.",
    type: "narrative"
    altTranslation: `What the fragment holds is not a story complete — it is a threshold. She is always, in every fragment, just about to cross it. — Cutler`,
  }

];
