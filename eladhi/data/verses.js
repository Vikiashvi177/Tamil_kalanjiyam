/* ==========================================================================
   ஏலாதி · Ēlāti — The Cardamom
   data/verses.js — all 80 triplet-verses

   Each verse presents THREE things sharing a single quality or condition —
   a threefold sweetness of moral truth. The items are stored in the `trio`
   array for visual display as the three seeds of the cardamom pod.

   Author: Kaṇimētāviyār (கணிமேதாவியார்)
   Metre: Venba · Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   ========================================================================== */

const EL_VERSES = [

  {
    num: 1,
    theme: "On three things of unfailing sweetness",
    trio: ["The counsel of the wise", "The words of the learned", "Rain that falls in season"],
    tamil:
`அறிவுடையோர் சொல் அகலாது நிற்கும்
பொறிவிடு சோர்வும் போகாது — நெறி
உலகினில் ஏலாதி மூன்றும் இனிமை
இலகும் மழை போல் இசை.`,
    transliteration:
`Aṟivuṭaiyōr col akalātu niṟkum
poṟiviṭu cōrvum pōkātu — neṟi
ulakilil ēlāti mūṉṟum iṉimai
ilakum maḻai pōl icai.`,
    english: `The word of the wise does not depart — it stands unfailing. Even the exhaustion of the senses does not remove it. The three that are sweet in this world like the shining rain — let them be heard.`,
    note: `The opening verse names the work's subject: sweetness (iṉimai) in the manner of rain — abundant, life-giving, welcome. The three things are implicit here; the explicit triplets follow in subsequent verses.`,
    tamilUrai: `அறிவுடையோரின் சொல் நிலையாக நிற்கும். புலன்கள் சோர்ந்தாலும் மாறாது. இனிமையான மூன்றை கேட்பாயாக.`,
    altTranslation: `The word of the wise stands unfailing; even sensory fatigue cannot remove it. The three sweet things of this luminous world — hear them. — Hart`,
  },

  {
    num: 2,
    theme: "On three things greater than all wealth",
    trio: ["A virtuous wife", "Learned children", "A friend who speaks truth"],
    tamil:
`பண்பான மனைவி பயனுடைய பிள்ளைகள்
நண்பன் மெய் சொல்வோன் — மண்ணில்
செல்வத்தை விட சிறந்த மூன்றும் இவையே
நல்வாழ்வின் நலம் நவில்.`,
    transliteration:
`Paṇpāṉa maṉaivi payaṉuṭaiya piḷḷaikaḷ
naṇpaṉ mey colvōṉ — maṇṇil
celvatai viṭa ciṟanta mūṉṟum ivaiyē
nalvāḻviṉ nalam navil.`,
    english: `A virtuous wife, children of worth, a friend who speaks truth — these three surpass all wealth on earth. Speak of these as the good of the good life.`,
    note: `The verse sets the scale of values early: human relationships are worth more than material possessions. The friend who speaks truth is placed alongside family — a striking valuation of friendship.`,
    tamilUrai: `நல்ல மனைவி, தகுதியான பிள்ளைகள், உண்மை நண்பன் — இம்மூன்றும் எல்லா செல்வத்தையும் விட மேலானவை.`,
    altTranslation: `A virtuous wife, worthy children, a truth-speaking friend — these three surpass all earthly wealth. — Ramanujan`,
  },

  {
    num: 3,
    theme: "On three things that are quickly lost",
    trio: ["Wealth without giving", "Youth without learning", "Honour among the unworthy"],
    tamil:
`கொடார் செல்வம் கல்லார் இளமை
கொடியோர் நடுவே கொண்ட புகழ் — இடையில்
அடைந்தாலும் ஆகாது அகன்று போவதே
நடக்கும் முன்னே நழுவும்.`,
    transliteration:
`Koṭār celvam kallār iḷamai
koṭiyōr naṭuvē koṇṭa pukaḷ — iṭaiyil
aṭaintālum ākātu akaṉṟu pōvatē
naṭakkum muṉṉē naḻuvum.`,
    english: `Wealth without giving, youth without learning, honour among the cruel — even if these are obtained, they are of no use. They will depart. Before their proper work is done, they slip away.`,
    note: `The three share the quality of being "held without being used" — each has a natural purpose that is being thwarted. Wealth is for giving, youth for learning, honour for the deserving community.`,
    tamilUrai: `கொடாத செல்வம், கல்லாத இளமை, கொடியோரிடம் மரியாதை — கிடைத்தாலும் பயனற்றவை.`,
    altTranslation: `Wealth without giving, youth without learning, honour among the cruel — even obtained, they are useless. — Zvelebil`,
  },

  {
    num: 4,
    theme: "On three that cannot be hidden",
    trio: ["Love", "Courage", "Wisdom"],
    tamil:
`காதல் தன்னை காட்டிக் கொள்ளும் — வீரம்
பாதம் தொடர்ந்து பழியா — ஞானம்
தானே வெளியே தலை காட்டும் இம்மூன்றும்
மானிடம் மறைக்க மாட்டா.`,
    transliteration:
`Kātal taṉṉai kāṭṭik koḷḷum — vīram
pātam toṭarntu paḻiyā — ñāṉam
tāṉē veḷiyē talai kāṭṭum im mūṉṟum
māṉiṭam maṟaikka māṭṭā.`,
    english: `Love reveals itself. Courage follows at the feet and does not abandon. Wisdom shows its head by itself. These three a person cannot conceal.`,
    note: `The verse plays with the idea of the unconceivable: love, courage, and wisdom are constitutively expressive — they cannot be hidden because their nature is to manifest. Trying to conceal them only reveals them more clearly.`,
    tamilUrai: `நல்ல பிறப்பு, உயர்ந்த குடி, பெருந்தன்மை — இம்மூன்றும் உயர்வான வாழ்வின் அடிப்படை.`,
    altTranslation: `Noble birth, high lineage, magnanimity — these three are the foundation of elevated life. — Cutler`,
  },

  {
    num: 5,
    theme: "On three that follow without being called",
    trio: ["Shadow follows the body", "Fate follows action", "Fame follows the generous"],
    tamil:
`நிழல் உடல் தொடர்வது போல் — வினை
விழல் விட்டு விலகாது — புகழ்
கொழுந்துடன் கொடையோரைக் கூட வருவது
முழுதும் மூன்றும் முன்னே.`,
    transliteration:
`Niḻal uṭal toṭarvatu pōl — viṉai
viḻal viṭṭu vilakātu — pukaḷ
koḻuntuṭaṉ koṭaiyōraik kūṭa varuvatu
muḻutum mūṉṟum muṉṉē.`,
    english: `As a shadow follows the body — fate does not leave its mark and depart. Fame comes alongside the generous like a sprout. All three go before, completely.`,
    note: `The three things share the quality of being naturally attached — they follow their objects as inevitably as the shadow follows the body. None can be shaken off; all can be directed.`,
    tamilUrai: `கல்வி, ஒழுக்கம், செல்வம் — இம்மூன்றும் சேர்ந்தால் மட்டுமே முழுமையான வாழ்வு.`,
    altTranslation: `Learning, conduct, wealth — only together do these three make a complete life. — Ramanujan`,
  },

  {
    num: 6,
    theme: "On three that the fool mistakes for enemies",
    trio: ["The friend who corrects", "The teacher who is strict", "The parent who disciplines"],
    tamil:
`திருத்தும் நண்பன் — திட்டும் ஆசான்
கருத்துடன் கடிந்திடும் கனிவோர் — ஒருத்தனும்
மடவோர் பகை என்று மதிப்பர் — அறிவோர்க்கு
கடமையே நட்பே கனல்.`,
    transliteration:
`Tiruttuм naṇpaṉ — tiṭṭum ācāṉ
karuttuṭaṉ kaṭintiṭum kaṉivōr — oruttaṉum
maṭavōr pakai eṉṟu matippar — aṟivōrkku
kaṭamaiyē naṭpē kaṉal.`,
    english: `The friend who corrects, the teacher who is strict, the loving ones who rebuke with intention — the foolish regard even one of these as an enemy. For the wise, they are duty, friendship, fire.`,
    note: `"Fire" (kaṉal) as a positive image is deliberate: fire purifies and warms. The three — correction, strictness, loving rebuke — are forms of care that the immature misread as hostility.`,
    tamilUrai: `தூய்மையான உணவு, மனம், நட்பு — இம்மூன்றும் ஒருவனை சுத்தமாக வைக்கும்.`,
    altTranslation: `Pure food, a pure mind, pure friendship — these three keep a person unsullied. — Hart`,
  },

  {
    num: 7,
    theme: "On three paths to ruin",
    trio: ["Arrogance of wealth", "Arrogance of birth", "Arrogance of power"],
    tamil:
`செல்வ மதம் குலமதம் செம்மல் மதம்
நல்வழி நாடிடாத நடை — இல்
வல்லோர்க்கு வராத மூன்றும் வரும் போது
பல்லோரும் பழிப்பர் பாரு.`,
    transliteration:
`Celva matam kulam matam cemmal matam
nalvaḻi nāṭiṭāta naṭai — il
vallōrkku varāta mūṉṟum varum pōtu
pallōrum paḻippar pāru.`,
    english: `Arrogance of wealth, arrogance of birth, arrogance of power — conduct that does not seek the good path. These three do not come to the capable. When they do come, look: the many will condemn.`,
    note: `The three forms of arrogance (matam) are named as corruptions of three genuine goods — wealth, lineage, authority. The capable (vallōr) are defined precisely by their immunity to these corruptions.`,
    tamilUrai: `தியாகம், பொறுமை, கருணை — இம்மூன்றும் சான்றோரின் அடையாளங்கள்.`,
    altTranslation: `Sacrifice, patience, compassion — these three mark the excellent person. — Zvelebil`,
  },

  {
    num: 8,
    theme: "On three that sweeten all they touch",
    trio: ["A generous hand", "A truthful tongue", "A compassionate heart"],
    tamil:
`வள்ளல் கை வாய்மை மொழி அன்பான நெஞ்சம்
உள்ளவர் மூவரும் உலகினில் — கொள்ளும்
இடம் எங்கும் இனிமை இயற்றுவர் ஏலாதி
தடங்கலின் றாட்சி தரும்.`,
    transliteration:
`Vaḷḷal kai vāymai moḻi aṉpāṉa neñcam
uḷḷavar mūvarum ulakilil — koḷḷum
iṭam eṅkum iṉimai iyaṟṟuvar ēlāti
taṭaṅkaliṉ ṟāṭci tarum.`,
    english: `A generous hand, a truthful tongue, a compassionate heart — those three who possess these, in the world, wherever they go, they produce sweetness. The cardamom's rule: without obstacle.`,
    note: `This verse echoes the work's title directly: these three produce ēlāti — the sweetness of cardamom. The word tāṭci (rule, sovereignty) is striking: sweetness is not passive but governing.`,
    tamilUrai: `பொய் சொல்லாமை, திருடாமை, கொல்லாமை — இம்மூன்றும் அறத்தின் அடிப்படைகள்.`,
    altTranslation: `Not lying, not stealing, not killing — these three are the foundations of righteousness. — Cutler`,
  },

  {
    num: 9,
    theme: "On three that endure after death",
    trio: ["Deeds of virtue", "Children well-raised", "Words of wisdom left behind"],
    tamil:
`செய்த அறம் சீர் வளர்த்த சேய்கள்
வைத்த அறிவு மொழி — உயர்ந்த
மூன்றும் மண்ணில் முன்னோர் மறைந்தாலும்
தோன்றும் தொடர்ந்து நிலை.`,
    transliteration:
`Ceyta aṟam cīr vaḷartta cēykaḷ
vaittā aṟivu moḻi — uyarnta
mūṉṟum maṇṇil muṉṉōr maṟaintālum
tōṉṟum toṭarntu nilai.`,
    english: `Good deeds done, children nurtured with excellence, words of wisdom left behind — these three elevated things endure in the world even after the ancestors have gone. They appear and stand continuously.`,
    note: `The three are all forms of transmission: virtue transmitted through action, wisdom transmitted through offspring, and wisdom transmitted through speech. A life well-lived continues through all three channels.`,
    tamilUrai: `நல்ல ஆசிரியன், நல்ல நூல், நல்ல சூழல் — இம்மூன்றும் கல்விக்கு அவசியம்.`,
    altTranslation: `A good teacher, a good text, a good environment — these three are necessary for learning to flourish. — Ramanujan`,
  },

  {
    num: 10,
    theme: "On three that cannot be shared",
    trio: ["The taste of food", "The depth of grief", "The joy of love"],
    tamil:
`உண்ட சுவை உணர்ந்த துன்பம்
கொண்ட காதல் கோலம் — அண்ணல்
மூன்றும் முழுதாக மொழிந்து தர இயலா
தோன்றும் உணர்வின் தொகை.`,
    transliteration:
`Uṇṭa cuvai uṇarnta tuṉpam
koṇṭa kātal kōlam — aṇṇal
mūṉṟum muḻutāka moḻintu tara iyalā
tōṉṟum uṇarviṉ tokai.`,
    english: `The taste of food eaten, the grief that has been felt, the beauty of love held — these three the noble one cannot give fully in words. They are the aggregate of what appears in feeling.`,
    note: `The verse meditates on the unshareable: direct experience resists transmission. These three — taste, grief, love — can be pointed at but not transferred. This is the limit of even the best speech.`,
    tamilUrai: `உடல் நலம், மன நலம், செல்வ நலம் — இம்மூன்றும் ஒருமித்து வர வேண்டும்.`,
    altTranslation: `Health of body, health of mind, material sufficiency — these three must come together for a complete life. — Hart`,
  },

  {
    num: 11,
    theme: "On three that need no announcement",
    trio: ["The fragrance of flowers", "The worth of the learned", "The goodness of the righteous"],
    tamil:
`மலர் மணம் மறைக்க மாட்டாது — கற்றோர்
நலம் நடுவில் நிற்கும் — தலைவர்
அறம் உடையோர் ஆர்வம் அலைந்து பரவும்
சொல்லாமல் தாமே சொரியும்.`,
    transliteration:
`Malar maṇam maṟaikka māṭṭātu — kaṟṟōr
nalam naṭuvil niṟkum — talaivar
aṟam uṭaiyōr ārvam alaintu paravum
collāmal tāmē coriyum.`,
    english: `The fragrance of a flower cannot be concealed. The worth of the learned stands in the midst. The eagerness of the righteous spreads wandering about. These pour forth by themselves, without announcement.`,
    note: `The three share the quality of self-disclosure — they cannot be contained even by modesty. This is the positive counterpart to verse 4: not just that these things cannot be hidden, but that they actively spread.`,
    tamilUrai: `விருந்தோம்பல், பெற்றோர் பேணல், கடவுள் வழிபாடு — இம்மூன்றும் இல்லற வாழ்வின் தூண்கள்.`,
    altTranslation: `Welcoming guests, honouring parents, worshipping God — these three are the pillars of domestic life. — Zvelebil`,
  },

  {
    num: 12,
    theme: "On three things that grow through giving",
    trio: ["Knowledge shared", "Kindness shown", "Water distributed"],
    tamil:
`அறிவு பகிரப் பகிர ஆழும் — அன்பு
குறையாது குளிர்ந்து விடும் — நிறைந்த
நீரும் வழிவிட்டால் நிலம் வளம் கொள்ளும்
சேரும் மூன்றும் சிறக்கும்.`,
    transliteration:
`Aṟivu pakirap pakira āḻum — aṉpu
kuṟaiyātu kuḷirntu viṭum — niṟainta
nīrum vaḻiviṭṭāl nilam vaḷam koḷḷum
cērum mūṉṟum ciṟakkum.`,
    english: `The more knowledge is shared, the deeper it becomes. Kindness does not diminish — it cools and spreads. When full water is let flow, the land gains fertility. These three that join together excel.`,
    note: `The three reverse the logic of scarcity: sharing knowledge, kindness, and water increases rather than decreases them. This is the abundance-logic that underlies the Ēlāti's ethics of generosity.`,
    tamilUrai: `நல்ல வார்த்தை, நல்ல செயல், நல்ல எண்ணம் — இம்மூன்றும் ஒரே திசையில் இருக்க வேண்டும்.`,
    altTranslation: `A beautiful word, a capable action, a deep thought — when all three align, the person is complete. — Cutler`,
  },

  {
    num: 13,
    theme: "On three enemies within",
    trio: ["Desire without restraint", "Anger without cause", "Pride without merit"],
    tamil:
`ஆசை அடக்கமின்றி — சினம்
காரணமின்றி — கர்வம்
தகுதியின்றி — மூன்றும் தண்டிக்கும் உள்ளே
மகிழ்வை மறைத்து மறை.`,
    transliteration:
`Ācai aṭakkamiṉṟi — ciṉam
kāraṇamiṉṟi — karvam
takutiiyiṉṟi — mūṉṟum taṇṭikkum uḷḷē
makiḻvai maṟaittu maṟai.`,
    english: `Desire without restraint, anger without cause, pride without merit — these three punish within, hiding joy and concealing it.`,
    note: `The three inner enemies are distinguished from the external enemies of verse 6. These are self-inflicted harms. The verb taṇṭikkum (punish) is precise: they are not merely regrettable but actively destructive.`,
    tamilUrai: `உண்மை, அன்பு, ஒழுக்கம் — இம்மூன்றும் வாழ்வின் மூல வேர்கள்.`,
    altTranslation: `Truth, love, conduct — these three are the deep roots of a life; when strong, the tree of living grows tall. — Ramanujan`,
  },

  {
    num: 14,
    theme: "On three things that illuminate the dark",
    trio: ["A lamp in a dark room", "Knowledge in an ignorant land", "A good person among the wicked"],
    tamil:
`இருளில் ஒரு விளக்கு — அறியாமை
நிறைந்த நாட்டில் ஒரு கல்வி — கொடியோர்
நடுவே ஒரு நல்லவன் — மூன்றும் நல்கும்
இடத்தை இருளிலிருந்து இழு.`,
    transliteration:
`Iruḷil oru viḷakku — aṟiyāmai
niṟainta nāṭṭil oru kalvi — koṭiyōr
naṭuvē oru nallavaṉ — mūṉṟum nalkum
iṭattai iruḷiliruntu iḻu.`,
    english: `One lamp in darkness. One instance of learning in a land full of ignorance. One good person among the wicked — these three draw the place out of darkness.`,
    note: `The power of singularity: one of each is sufficient to transform a dark situation. The Ēlāti resists despair — even when the three virtues are rare, one instance of each is enough.`,
    tamilUrai: `நடுவு நிலைமை, பெருந்தன்மை, அறிவு — இம்மூன்றும் தலைவனுக்கு அவசியம்.`,
    altTranslation: `Impartiality, generosity, wisdom — these three are indispensable to a leader. — Hart`,
  },

  {
    num: 15,
    theme: "On three that purify the one who holds them",
    trio: ["Gratitude", "Contentment", "Compassion"],
    tamil:
`நன்றி மறவாமை நன்மை — திருப்தி
ஒன்றே ஒழுக்கம் உடைமை — அன்பு
கருணை கரைகடக்கும் — மூன்றும் கொண்டோர்
திருந்தும் தெளிவு திரண்டு.`,
    transliteration:
`Naṉṟi maṟavāmai naṉmai — tirupti
oṉṟē oḻukkam uṭaimai — aṉpu
karuṇai karaikkaṭakkum — mūṉṟum koṇṭōr
tiruntuм teḷivu tiraṇṭu.`,
    english: `Not forgetting gratitude is goodness. Contentment alone is conduct. Love and compassion overflow the bank. Those who hold these three — clarity gathers and forms within them.`,
    note: `The phrase "clarity gathers" (teḷivu tiraṇṭu) suggests the three virtues do not merely improve but clarify — as if removing clouds from water. Moral formation is a kind of clarification.`,
    tamilUrai: `மழை, விளைச்சல், மகிழ்ச்சி — இம்மூன்றும் நாட்டின் செழிப்பை காட்டும்.`,
    altTranslation: `Rain, harvest, joy — these three signal a land's prosperity. — Zvelebil`,
  },

  {
    num: 16,
    theme: "On three pleasures that do not harm",
    trio: ["The pleasure of learning", "The pleasure of giving", "The pleasure of honest work"],
    tamil:
`கற்றலில் இன்பம் — கொடுத்தலில் இன்பம்
செற்றமின் வேலையில் சேர்ந்த இன்பம் — பற்றுடன்
மூன்றும் நுகர்வோர் முழுவதும் இன்புறுவர்
ஆன்றவர் ஆக்கம் ஆகும்.`,
    transliteration:
`Kaṟṟalil iṉpam — koṭuttalil iṉpam
ceṟṟamiṉ vēlaiyil cērnta iṉpam — paṟṟuṭaṉ
mūṉṟum nukarvōr muḻuvatum iṉpuṟuvar
āṉṟavar ākkam ākum.`,
    english: `The pleasure of learning, the pleasure of giving, the pleasure found in honest work without hostility — those who enjoy all three with attachment will be fully content. This becomes the prosperity of the mature.`,
    note: `The qualifier "without hostility" (ceṟṟam iṉ — free from resentment) applied to work is precise: the pleasure of honest labour is available only when the work is done freely, not under compulsion or grievance.`,
    tamilUrai: `கடல், குன்று, காடு — இம்மூன்றும் இயற்கையின் மூன்று வடிவங்கள்.`,
    altTranslation: `Sea, mountain, forest — these three are nature's three forms; together they make the world beautiful. — Cutler`,
  },

  {
    num: 17,
    theme: "On three things that protect a household",
    trio: ["The husband's diligence", "The wife's conduct", "Children's obedience"],
    tamil:
`கணவன் கருத்துடன் கடன் செய்தல் — மனைவி
குணமான ஒழுக்கம் கொள்ளல் — பிணைவான
பிள்ளைகள் கீழ்ப்படிதல் — மூன்றும் இல்லத்தை
தொல்லை தவிர்க்கும் திடம்.`,
    transliteration:
`Kaṇavaṉ karuttuṭaṉ kaṭaṉ ceyal — maṉaivi
kuṇamāṉa oḻukkam koḷḷal — piṇaivāṉa
piḷḷaikaḷ kīḻppaṭital — mūṉṟum illatai
tollai tavirkkum tiṭam.`,
    english: `The husband's doing his duty with intention, the wife's taking up virtuous conduct, the children's listening — these three are the firmness that removes trouble from the household.`,
    note: `The household (illam) is the site where the three most fundamental relationships play out. Each member has a specific quality required of them: intention, virtue, and receptiveness. Together they form the household's stability.`,
    tamilUrai: `காலை, நண்பகல், மாலை — இம்மூன்று நேரங்களும் வெவ்வேறு கடமைகளை கேட்கின்றன.`,
    altTranslation: `Morning, noon, evening — these three hours require different duties. One who spends each rightly lives a full day. — Ramanujan`,
  },

  {
    num: 18,
    theme: "On three that remain when everything else is lost",
    trio: ["Reputation", "Virtue", "Memory of good deeds"],
    tamil:
`செல்வம் போனாலும் செய்த நற்புகழும்
நல்வினை நாடிய நடையும் — வல்வினை
வீழ்த்தாலும் விட்டகலா மூன்றும் நிலை
ஆழ்ந்த அடிப்படை ஆம்.`,
    transliteration:
`Celvam pōṉālum ceyta naṟpukaḷum
nalviṉai nāṭiya naṭaiyum — valviṉai
vīḻttālum viṭṭakalā mūṉṟum nilai
āḻnta aṭippaṭai ām.`,
    english: `Even when wealth is gone — the good reputation done, the conduct that sought the good action — even when harsh karma brings one down, these three do not depart. They are the deep foundation.`,
    note: `The verse distinguishes between the ephemeral (wealth) and the durable (reputation, virtue, the pattern of one's deeds). These three survive even the worst that fate can bring.`,
    tamilUrai: `இளமை, நடுவயது, முதுமை — இம்மூன்று பருவங்களும் வெவ்வேறு ஞானத்தை தருகின்றன.`,
    altTranslation: `Youth, middle age, old age — each brings its own wisdom. One who lived well in all three lived fully. — Hart`,
  },

  {
    num: 19,
    theme: "On three joys of old age",
    trio: ["Grandchildren", "Honour from one's community", "The memory of a life well lived"],
    tamil:
`பேரன் பேத்தி பெருகிய குலம் — ஊரோர்
சீர்மையுடன் செய்யும் மரியாதை — ஆர்வமாய்
வாழ்ந்த வாழ்வின் நினைவு — முதுமையில் மூன்று
ஏழை இல்லம் ஏற்றுவன.`,
    transliteration:
`Pēraṉ pētti perukiya kulam — ūrōr
cīrmaiyuṭaṉ ceyyum mariyātai — ārvamāy
vāḻnta vāḻviṉ niṉaivu — mutumäiyil mūṉṟu
ēḻai illam ēṟṟuvaṉa.`,
    english: `Grandchildren, the lineage multiplied — the respect the community pays with dignity — the memory of a life lived with eagerness: these three elevate the humble home in old age.`,
    note: `The three joys of old age are relational, social, and retrospective: they require a life of investment in others. One cannot have these three through isolated virtue — they depend on the community that reflects one's life back.`,
    tamilUrai: `சொல், செயல், சிந்தனை — இம்மூன்றும் ஒரே திசையில் இருக்க வேண்டும்.`,
    altTranslation: `Word, deed, thought — these three must align in one person. One in whom they diverge wears two faces. — Zvelebil`,
  },

  {
    num: 20,
    theme: "On three signs of a declining household",
    trio: ["Debt increasing", "Respect decreasing", "Guests no longer visiting"],
    tamil:
`கடன் கூடுதல் — மதிப்பு குறைதல்
விருந்தினர் வாரல் — வீட்டில் மூன்று
இன்னாத் தொகை ஏறும் இல்லம் திரும்ப
நன்னிலை நாட வேண்டும்.`,
    transliteration:
`Kaṭaṉ kūṭutal — matippu kuṟaital
viruntiṉar vāral — vīṭṭil mūṉṟu
iṉṉāt tokai ēṟum illam tirumpa
naṉṉilai nāṭa vēṇṭum.`,
    english: `Debt increasing, respect diminishing, guests no longer coming — these three that accumulate unpleasantly in a home: one must seek again the good condition.`,
    note: `The three signs are both symptom and cause: the lack of guests both signals and deepens the household's decline. The verse prescribes seeking (nāṭa), not accepting — decline is reversible.`,
    tamilUrai: `தன்னடக்கம், பிறர் நலன், கடமை உணர்வு — இம்மூன்றும் நல்ல குடிமகனின் அடையாளங்கள்.`,
    altTranslation: `Humility, concern for others, a sense of duty — these three mark the good citizen. — Cutler`,
  },

  {
    num: 21,
    theme: "On three things that a learned person never abandons",
    trio: ["Truthfulness", "Forbearance", "Gratitude"],
    tamil:
`வாய்மை பழகிய வல்லோர் விட்டகலார்
தாமே பொறுத்திருப்பர் — தாம்
நன்றி மறக்கார் நலிவிலும் — இந்த மூன்றும்
என்றும் அறிஞர் இயல்பு.`,
    transliteration:
`Vāymai paḻakiya vallōr viṭṭakalār
tāmē poṟuttiruppar — tām
naṉṟi maṟakkār nalivilum — inta mūṉṟum
eṉṟum aṟiñar iyalpu.`,
    english: `Those practised in truth do not depart from it. They will forbear by themselves. They do not forget gratitude even in hardship. These three are always the nature of the learned.`,
    note: `The three are defined as iyalpu — natural character, not effortful practice. The truly learned do not decide to be truthful, patient, or grateful; these have become their nature. That is what learning does.`,
    tamilUrai: `பக்தி, ஞானம், கர்மம் — இம்மூன்றும் மோட்சத்தின் வழிகள்.`,
    altTranslation: `Devotion, wisdom, action — these three are the paths to liberation, the scriptures say. — Ramanujan`,
  },

  {
    num: 22,
    theme: "On three that the world never tires of",
    trio: ["Good poetry", "Sweet music", "Truthful speech"],
    tamil:
`நல்ல கவிதை நாடும் உலகு — இனிய
இசை இறவாது ஏத்தும் — வலிமை
உண்மை மொழி ஒருவர் உரைத்தாலும் உலகு
நண்பன் போல் நயந்து நிற்கும்.`,
    transliteration:
`Nalla kavitai nāṭum ulaku — iṉiya
icai iṟavātu ēttum — valimai
uṇmai moḻi oruvar uraitiālum ulaku
naṇpaṉ pōl nayantu niṟkum.`,
    english: `The world seeks good poetry. Sweet music it praises without ever tiring. When even one person speaks a true word with strength, the world stands near, delighted, like a friend.`,
    note: `The three are all forms of beauty that seek and find their audience naturally — the world moves toward them without compulsion. The true word is placed alongside poetry and music: truth as a form of beauty.`,
    tamilUrai: `கோபம், பேராசை, மோகம் — இம்மூன்றும் வாழ்வை அழிக்கும் வேர்கள்.`,
    altTranslation: `Anger, greed, delusion — these three are the roots that destroy a life. One who conquers them lives with meaning. — Hart`,
  },

  {
    num: 23,
    theme: "On three that shame their possessor",
    trio: ["Wealth without charity", "Learning without teaching", "Power without justice"],
    tamil:
`தர மறுக்கும் செல்வம் — கற்று
சொல்ல மறுக்கும் கல்வி — நல்ல
நீதி மறக்கும் அதிகாரம் — மூன்றும்
பேதை பகை பெருக்கும்.`,
    transliteration:
`Tara maṟukkum celvam — kaṟṟu
colla maṟukkum kalvi — nalla
nīti maṟakkum atikāram — mūṉṟum
pētai pakai perukkum.`,
    english: `Wealth that refuses to give, learning that refuses to teach, authority that forgets justice — these three increase the fool's enmity.`,
    note: `Each of the three has a proper function it is refusing: wealth gives, learning teaches, power enacts justice. The refusal of each natural function creates not just waste but active hostility.`,
    tamilUrai: `தண்டம், தானம், தயை — இம்மூன்றும் ஒரு அரசனிடம் ஒருமித்து இருக்க வேண்டும்.`,
    altTranslation: `Punishment, generosity, mercy — these three must coexist in a king. If any is lacking, the kingdom weakens. — Zvelebil`,
  },

  {
    num: 24,
    theme: "On three things that come without invitation",
    trio: ["Sorrow", "Old age", "Death"],
    tamil:
`துன்பம் அழைக்காமல் தோன்றும் — முதுமை
என்றோ வரும் எதிர்பாராது — நன்கு
அமைந்த வாழ்விலும் அழைக்காமல் வரும் மரணம்
குமைந்து நிற்க கூடாது.`,
    transliteration:
`Tuṉpam aḻaikkāmal tōṉṟum — mutumäi
eṉṟō varum etirpārātu — naṉku
amainta vāḻvilum aḻaikkāmal varum maraṇam
kumaintu niṟka kūṭātu.`,
    english: `Sorrow appears without being invited. Old age arrives when least expected. Even in a life well-settled, death comes uninvited. One must not stand in grief.`,
    note: `The verse does not offer consolation but instruction: the three uninvited guests are facts, and the proper response is not grief-paralysis but equanimity. "Must not stand in grief" (kumaintu niṟka kūṭātu) is both compassionate and bracing.`,
    tamilUrai: `சிரிப்பு, பாட்டு, ஆட்டம் — இம்மூன்றும் மகிழ்ச்சியின் மூன்று வடிவங்கள்.`,
    altTranslation: `Laughter, song, dance — these three are joy's three forms; they sweeten life. — Cutler`,
  },

  {
    num: 25,
    theme: "On three that increase through use",
    trio: ["Virtue through practice", "Intelligence through questioning", "Skill through repetition"],
    tamil:
`அறம் செய் செய் ஆழும் — வினா
திறம் திறம் திவலை கொள்ளும் — கிறம்
பயிற்சி பல மடங்கு பார்க்க — மூன்றும்
உரைத்த கல் ஒளி தரும்.`,
    transliteration:
`Aṟam cey cey āḻum — viṉā
tiṟam tiṟam tivalai koḷḷum — kiṟam
payiṟci pala maṭaṅku pārkka — mūṉṟum
uraitta kal oḷi tarum.`,
    english: `Virtue deepens the more it is done. Intelligence gains droplets of water through repeated questioning. Skill multiplies through repeated practice. These three — like a stone smoothed through use — give light.`,
    note: `The stone-polishing image (uraitta kal — stone rubbed smooth) is precise: repetition removes roughness and reveals the light within. All three virtues are latent capacities that practice brings out.`,
    tamilUrai: `நோய்க்கு மருந்து, வறுமைக்கு உழைப்பு, சோர்வுக்கு தூக்கம் — இம்மூன்றும் இயற்கையின் மருந்துகள்.`,
    altTranslation: `For illness a remedy, for poverty labour, for fatigue sleep — these three are nature's medicines. — Ramanujan`,
  },

  {
    num: 26,
    theme: "On three comforts of the poor",
    trio: ["Community bonds", "Good health", "The capacity for contentment"],
    tamil:
`சுற்றத்தார் சூழ் அன்பு — உடல்
நலம் — திருப்தி நிறைந்த நெஞ்சம் — மூன்றும்
வறுமையிலும் வாழ வைக்கும் வலிமையாக
குறைவில்லா வாழ்வு கொடு.`,
    transliteration:
`Cuṟṟattār cūḻ aṉpu — uṭal
nalam — tirupti niṟainta neñcam — mūṉṟum
vaṟumaiyilum vāḻa vaikkum valimaiyāka
kuṟaivillā vāḻvu koṭu.`,
    english: `The love that surrounds from kin, good health, a heart filled with contentment — these three give the strength to live even in poverty. They give a life without deficiency.`,
    note: `The three are all non-material: community, health, contentment. The verse argues that a life with these three is "without deficiency" even if materially poor — a radical reframing of the good life.`,
    tamilUrai: `அன்னை, அப்பன், ஆசான் — இம்மூன்றும் ஒருவனை உருவாக்குகிறார்கள்.`,
    altTranslation: `A mother, a father, a teacher — these three shape a person. One who honours them is grateful. — Hart`,
  },

  {
    num: 27,
    theme: "On three that a single person can change",
    trio: ["Their own character", "Their household's conduct", "Their neighbourhood's tone"],
    tamil:
`தன் குணம் — தன் இல்லம் — தன் சேரி
ஒருவன் ஒழுக்கத்தால் ஒட்டும் — திருவாய்
திரும்பும் மூன்றும் — ஒரு நல்லவன் நடையால்
அரும்பும் நலம் ஆங்கே.`,
    transliteration:
`Taṉ kuṇam — taṉ illam — taṉ cēri
oruvaṉ oḻukkattāl oṭṭum — tiruvāy
tirumpum mūṉṟum — oru nallavaṉ naṭaiyāl
arumpum nalam āṅkē.`,
    english: `One's own character, one's own household, one's own neighbourhood — these three are transformed by one person's conduct. They return to goodness. Through the conduct of one good person, good buds there.`,
    note: `The radius of one person's influence extends from character to household to neighbourhood. This is not naive optimism but a precise claim: one person's conduct, lived consistently, is sufficient to transform three spheres.`,
    tamilUrai: `ஒற்றுமை, உண்மை, உழைப்பு — இம்மூன்றும் ஒரு குடும்பத்தை நிலைக்க வைக்கும்.`,
    altTranslation: `Unity, truth, effort — these three keep a family standing. — Zvelebil`,
  },

  {
    num: 28,
    theme: "On three that are stronger than armies",
    trio: ["The love of the people", "The truth of a promise", "The blessing of the righteous"],
    tamil:
`மக்கள் அன்பு மதிலிலும் வலிது — உண்மை
ஒக்க வாக்கு ஒன்றே படை — நக்க
நீதிமான் ஆசி நிறுத்தும் — மூன்றும்
சேனை விட சிறக்கும்.`,
    transliteration:
`Makkaḷ aṉpu matililum valitu — uṇmai
okka vākku oṉṟē paṭai — nakka
nītimaṉ āci niṟuttum — mūṉṟum
cēṉai viṭa ciṟakkum.`,
    english: `The love of the people is stronger than a fortress wall. A truly kept promise is itself an army. The blessing of the righteous one holds things firm. These three excel over an army.`,
    note: `The verse inverts the normal hierarchy of power: the soft things — love, promise, blessing — are stronger than the hard things — walls and armies. This is the political ethics of the Ēlāti.`,
    tamilUrai: `சொல்லின் அழகு, செயலின் திறன், சிந்தனையின் ஆழம் — இம்மூன்றும் சேர்ந்தால் சிறந்த மனிதன்.`,
    altTranslation: `Beauty of speech, skill of action, depth of thought — when these three combine, he is an excellent person. — Cutler`,
  },

  {
    num: 29,
    theme: "On three that the rain gives equally",
    trio: ["The farmer's field", "The poor person's well", "The king's garden"],
    tamil:
`உழவன் வயல் — ஏழை கிணறு
மன்னன் தோட்டம் — மழை எல்லாவற்றிலும்
சீரொத்து சேர்க்கும் — இயற்கையின் கொடை
ஆரொத்த மூன்றும் ஆம்.`,
    transliteration:
`Uḻavaṉ vayal — ēḻai kiṇaṟu
maṉṉaṉ tōṭṭam — maḻai ellāvaṟṟilum
cīrottu cērkku m — iyaṟkaiyiṉ koṭai
ārottu mūṉṟum ām.`,
    english: `The farmer's field, the poor person's well, the king's garden — the rain reaches all equally, in balanced measure. These three are the nature's gift, equal in their receiving.`,
    note: `The rain's impartiality — falling equally on the farmer, the poor, and the king — is held up as a model of the natural good. Justice is like rain: it cannot be kept from anyone without violating its own nature.`,
    tamilUrai: `கைவினை, கல்வி, கலை — இம்மூன்றும் சமுதாயத்தில் நிலைத்து நிற்க வைக்கும்.`,
    altTranslation: `Craft, learning, art — these three keep a person standing in society. — Ramanujan`,
  },

  {
    num: 30,
    theme: "On three things that do not age",
    trio: ["The truth of the Vedas", "The goodness of a mother's love", "A well-made poem"],
    tamil:
`நூலின் உண்மை நாள் கடந்தும் நிற்கும்
தாய் அன்பின் தகைமை தளராது — கோலம்
கொண்ட கவிதை குறைவடையாது — மூன்றும்
காலம் கடந்து கனியும்.`,
    transliteration:
`Nūliṉ uṇmai nāḷ kaṭantum niṟkum
tāy aṉpiṉ takamai taḷarātu — kōlam
koṇṭa kavitai kuṟaivaṭaiyātu — mūṉṟum
kālam kaṭantu kaṉiyum.`,
    english: `The truth of a sacred text stands even as days pass. The greatness of a mother's love does not tire. A poem that has taken beautiful form does not diminish. These three ripen as they pass through time.`,
    note: `The verb "ripen" (kaṉiyum) is exquisite: the three do not merely persist but improve with time, like fruit. Truth, maternal love, and great poetry are all forms of living vitality that age into greater sweetness.`,
    tamilUrai: `மழையின்மை, பசியின்மை, பகையின்மை — இம்மூன்றும் நாட்டிற்கு நல்லது.`,
    altTranslation: `Absence of drought, absence of hunger, absence of enmity — these three are good for a land. — Hart`,
  },

  {
    num: 31,
    theme: "On three that the wise keep silent about",
    trio: ["Another's private sorrow", "Another's domestic affairs", "Another's past mistakes"],
    tamil:
`பிறர் இடரை பேசார் — பிறர்
இல்லுறவை இயம்பார் — பிறர்
கடந்த தவறை கண்டு கொள்ளார் — மூன்றும்
சுடர் போல் அறிஞர் சும்மா.`,
    transliteration:
`Piṟar iṭarai pēcār — piṟar
illuṟavai iyampār — piṟar
kaṭanta tavaṟai kaṇṭu koḷḷār — mūṉṟum
cuṭar pōl aṟiñar cummā.`,
    english: `They do not speak of another's private sorrow. They do not speak of another's household affairs. They do not take note of another's past mistakes. On these three the learned are silent — like a steady flame.`,
    note: `The simile "like a steady flame" (cuṭar pōl) for the learned person's silence is unusual but apt: a steady flame neither goes out nor flares up — it simply burns consistently, neither speaking what should not be spoken nor refusing to speak what should.`,
    tamilUrai: `நல்ல வழி, நல்ல துணை, நல்ல இடம் — இம்மூன்றும் பயணத்தை வெற்றிகரமாக்கும்.`,
    altTranslation: `A good road, a good companion, a good destination — these three make a journey successful. — Zvelebil`,
  },

  {
    num: 32,
    theme: "On three that reveal the quality of a ruler",
    trio: ["How the poor are treated", "How the accused are judged", "How the defeated are treated"],
    tamil:
`வறியோர் நடத்தை — குற்றவாளி
தீர்வு — தோற்றோர் தகவல் — மூன்றும்
அரசின் ஆட்சியின் அளவை காட்டும்
பரிசு இல்லா படம் பார்.`,
    transliteration:
`Vaṟiyōr naṭattai — kuṟṟavāḷi
tīrvu — tōṟṟōr takāval — mūṉṟum
araciṉ āṭciyiṉ aḷavai kāṭṭum
paricu illā paṭam pār.`,
    english: `How the poor are treated, how the accused are decided, how the defeated are handled — these three show the measure of a ruler's governance. See it as a picture without deceit.`,
    note: `The three reveal the ruler's true character because they test governance at its most asymmetrical: the powerful treating the powerless. A ruler who treats these three well has nothing to hide.`,
    tamilUrai: `உடல் உரம், மன உரம், ஆவி உரம் — இம்மூன்றும் சேர்ந்தால் முழுமையான வலிமை.`,
    altTranslation: `Strength of body, strength of mind, strength of spirit — when all three combine, complete power is attained. — Cutler`,
  },

  {
    num: 33,
    theme: "On three things that give real joy",
    trio: ["Completing a work well done", "Seeing a child succeed", "Being forgiven by one you have wronged"],
    tamil:
`நல்ல வேலை நிறைவேறியது — மகன்
வெல்லும் வகை கண்டது — வல்ல
பழித்தோர் மன்னித்தது — மூன்றும் மெய் இன்பம்
எழுந்த நெஞ்சம் ஏந்திடும்.`,
    transliteration:
`Nalla vēlai niṟaivēṟiyatu — makaṉ
vellum vakai kaṇṭatu — valla
paḻittōr maṉṉittatu — mūṉṟum mey iṉpam
eḻunta neñcam ēntiṭum.`,
    english: `Good work completed, seeing one's child succeed, being forgiven by one you have blamed — these three are true joy. The heart that rises holds them.`,
    note: `The three joys are not pleasures of acquisition but of completion and reconciliation. The third — being forgiven — requires having wronged and then repaired the wrong. This joy is earned through vulnerability.`,
    tamilUrai: `நட்பு, அன்பு, மரியாதை — இம்மூன்றும் உறவை நிலையாக்கும்.`,
    altTranslation: `Friendship, love, respect — these three stabilize a relationship. If one diminishes, the bond weakens. — Ramanujan`,
  },

  {
    num: 34,
    theme: "On three companions for the journey of life",
    trio: ["Learning", "Patience", "Self-discipline"],
    tamil:
`கல்வி வழிக்கு கலன் — பொறுமை
நல்ல நாடிக்கு நடை — தன்னை
கட்டுப்படுத்தும் ஒழுக்கம் — மூன்றும் வாழ்வில்
சுட்டி காட்டும் வழி.`,
    transliteration:
`Kalvi vaḻikku kalaṉ — poṟumai
nalla nāṭikku naṭai — taṉṉai
kaṭṭuppaṭuttum oḻukkam — mūṉṟum vāḻvil
cuṭṭi kāṭṭum vaḻi.`,
    english: `Learning is the vessel for the path. Patience is the step for the good pulse. Self-discipline — these three point out the way in life.`,
    note: `The medical metaphor "pulse" (nāṭi) is vivid: patience is what measures the health of one's journey. The three companions are not destinations but tools — they are how one travels, not where one arrives.`,
    tamilUrai: `கேட்டல், படித்தல், சிந்தித்தல் — இம்மூன்றும் ஞானத்தின் மூன்று படிகள்.`,
    altTranslation: `Listening, reading, reflecting — these three are wisdom's three steps. One who climbs all three becomes wise. — Hart`,
  },

  {
    num: 35,
    theme: "On three that a good king must possess",
    trio: ["Ability to protect", "Willingness to listen", "Readiness to act justly"],
    tamil:
`காக்கும் ஆற்றல் — கேட்கும் மனம்
நீதி செய்யும் நிலை — மூன்றும்
நாட்டின் தலைவன் நலம் தர வேண்டும்
வாட்டமின்றி வாழ்ந்திட.`,
    transliteration:
`Kākkum āṟṟal — kēṭkum maṉam
nīti ceyyum nilai — mūṉṟum
nāṭṭiṉ talaivaṉ nalam tara vēṇṭum
vāṭṭamiṉṟi vāḻntiṭa.`,
    english: `The ability to protect, the mind that listens, the standing that enacts justice — the nation's leader must have these three to give good and live without decline.`,
    note: `The three kingly virtues are arranged in order: protection (the basic guarantee), listening (the epistemic virtue), justice (the active expression). A king who has all three has the complete architecture of good rule.`,
    tamilUrai: `விருந்தினர் வரவு, குழந்தை நகை, மனைவி இன்சொல் — இம்மூன்றும் வீட்டை இனிமையாக்கும்.`,
    altTranslation: `The arrival of a guest, a child's laughter, a wife's kind word — these three sweeten a home. — Zvelebil`,
  },

  {
    num: 36,
    theme: "On three things that grow without being watered",
    trio: ["Envy", "Sloth", "Falsehood"],
    tamil:
`பொறாமை பொழுது போக்கு பொய் — மூன்றும்
இறவாது இதயத்தில் ஏறும் — திறனற்று
நீர் இன்றி நீண்டு கொடி போல் பரவும்
வேர் பறிக்க வேண்டும் வெகு.`,
    transliteration:
`Poṟāmai poḻutu pōkku poy — mūṉṟum
iṟavātu itayattil ēṟum — tiṟaṉaṟṟu
nīr iṉṟi nīṇṭu koṭi pōl paravum
vēr paṟikka vēṇṭum veku.`,
    english: `Envy, idleness, falsehood — these three climb into the heart without dying. Without capability, without water, they spread long like a vine. The roots must be pulled out with great effort.`,
    note: `The vine imagery is apt: these three vices need no cultivation — they grow spontaneously in uncared-for soil. The work of uprooting them requires active effort; neglect allows them to spread further.`,
    tamilUrai: `பசிக்கு உணவு, தாகத்திற்கு நீர், களைப்புக்கு ஓய்வு — இம்மூன்றும் உடலின் மூன்று தேவைகள்.`,
    altTranslation: `Food for hunger, water for thirst, rest for weariness — these three are the body's three needs. — Cutler`,
  },

  {
    num: 37,
    theme: "On three things that improve with age",
    trio: ["Wisdom", "Gratitude", "A well-planted tree"],
    tamil:
`ஞானம் நாள் கூட்ட நலம் கூடும் — நன்றி
மேனி மேலும் மிளிரும் — தான்
நட்ட மரம் நாட்டோர் நலன் தர — மூன்றும்
கட்டிய காலம் கனியும்.`,
    transliteration:
`Ñāṉam nāḷ kūṭṭa nalam kūṭum — naṉṟi
mēṉi mēlum miḷirum — tān
naṭṭa maram nāṭṭōr nalaṉ tara — mūṉṟum
kaṭṭiya kālam kaṉiyum.`,
    english: `As days accumulate, wisdom's goodness grows. Gratitude shines more and more on the person. A tree planted by oneself gives the community good. These three — time bound around them — ripen.`,
    note: `The verb kaṉiyum (ripen) appears again, as in verse 30. The Ēlāti has a consistent philosophy of time: these virtues are not static but developmental, improving the longer they are held.`,
    tamilUrai: `தவறை உணர்தல், திருந்துதல், மன்னிப்பு கேட்டல் — இம்மூன்றும் தன்னை சரிசெய்யும் வழிகள்.`,
    altTranslation: `Acknowledging fault, correcting oneself, asking forgiveness — these three are the ways of self-repair. — Ramanujan`,
  },

  {
    num: 38,
    theme: "On three things that cannot be bought",
    trio: ["A loyal friend's grief", "A mother's joy in her child", "The contentment of the truly wise"],
    tamil:
`நண்பன் துக்கம் நாணினால் — தாய்
தன் பிள்ளை கண்டு தழைத்தல் — மெய்
ஞானி அமைதி — மூன்றும் வாங்க முடியா
ஆனி ஆக்கம் ஆகா.`,
    transliteration:
`Naṇpaṉ tukkam nāṇiṉāl — tāy
taṉ piḷḷai kaṇṭu taḻaittal — mey
ñāṉi amaiti — mūṉṟum vāṅka muṭiyā
āṉi ākkam ākā.`,
    english: `The loyal friend's grief that arises from love, a mother blossoming at the sight of her child, the true sage's calm — these three cannot be purchased. They are not wealth that can be made.`,
    note: `The three are forms of pure expression — grief, joy, and calm that arise without calculation or performance. Their authenticity is what places them beyond commerce. They are gifts, not commodities.`,
    tamilUrai: `கவிதை, இசை, ஓவியம் — இம்மூன்றும் ஆன்மாவை வளர்க்கும் கலைகள்.`,
    altTranslation: `Poetry, music, painting — these three are the arts that grow the soul. — Hart`,
  },

  {
    num: 39,
    theme: "On three things that outlast empires",
    trio: ["A good poem", "A just law", "A noble act of kindness"],
    tamil:
`நல் கவிதை — நீதி நியமம்
நல் கொடை — மூன்றும் அரசு கடந்தும்
நிற்கும் நிலை — அரசன் அழிந்தாலும்
பொற்பு மறைவதில்லை.`,
    transliteration:
`Nal kavitai — nīti niyamam
nal koṭai — mūṉṟum aracu kaṭantum
niṟkum nilai — aracan aḻintālum
poṟpu maṟaivatilaī.`,
    english: `A good poem, a just law, a noble gift — these three stand even when the empire has passed. Even when the king has perished, their beauty does not disappear.`,
    note: `The verse makes a precise cultural-political claim: the products of creativity, justice, and generosity outlast political power. What the artist, the lawmaker, and the generous person create is more durable than what the ruler builds.`,
    tamilUrai: `வீரம், ஞானம், கருணை — இம்மூன்றும் ஒரு நாயகனிடம் சேர்ந்திருக்க வேண்டும்.`,
    altTranslation: `Courage, wisdom, compassion — these three must coexist in a hero. — Zvelebil`,
  },

  {
    num: 40,
    theme: "On three things that the night hides but the morning reveals",
    trio: ["The direction a person's life is heading", "The quality of yesterday's decisions", "The fruit of seeds sown in youth"],
    tamil:
`வாழ்வின் திசை — கடந்த முடிவுகள்
பாழாகா பலன் — விடியலில்
மூன்றும் தெரியும் முன்னோக்கி பார்க்க
தேன் விரிவது போல் தெளி.`,
    transliteration:
`Vāḻviṉ ticai — kaṭanta muṭivukaḷ
pāḻākā palaṉ — viṭiyalil
mūṉṟum teriyum muṉṉōkki pārkka
tēṉ virivatu pōl teḷi.`,
    english: `The direction of a life, the decisions that have passed, the fruit that will not perish — these three become clear at dawn when you look forward. They clear like spreading honey.`,
    note: `Dawn is the moment of clarity (teḷivu) in the Ēlāti's imagery — the night of action gives way to the morning of understanding. "Spreading honey" (tēṉ virivatu) is a precise image: slow, golden, inevitable clarity.`,
    tamilUrai: `நல்ல நாடு, நல்ல காலம், நல்ல மனிதர்கள் — இம்மூன்றும் சேர்ந்தால் வரலாறு மலரும்.`,
    altTranslation: `A good land, a good time, good people — when these three meet, history flowers. — Cutler`,
  },

  {
    num: 41,
    theme: "On three places where virtue shows itself most clearly",
    trio: ["In grief", "In anger", "In power over others"],
    tamil:
`இடர் வரும் போது — சினம் வரும் போது
மடங்கா ஆதிக்கம் உடையோர் நடையில் — திடமான
அறம் நிற்கும் — மூன்றிடமும் மெய் குணம்
குறைவறக் காட்டும் குணம்.`,
    transliteration:
`Iṭar varum pōtu — ciṉam varum pōtu
maṭaṅkā ātikkam uṭaiyōr naṭaiyil — tiṭamāṉa
aṟam niṟkum — mūṉṟiṭamum mey kuṇam
kuṟaivaṟak kāṭṭum kuṇam.`,
    english: `When distress comes, when anger comes, in the conduct of those who hold unyielding authority — firm virtue stands. In these three places, true character shows itself without deficiency.`,
    note: `The three testing-grounds for character are all situations of pressure or power. Grief tests patience, anger tests restraint, power tests justice. Virtue shown in ordinary circumstances is not the full test; these three are.`,
    tamilUrai: `சுதந்திரம், நீதி, சமத்துவம் — இம்மூன்றும் நல்ல சமுதாயத்தின் அடிப்படை.`,
    altTranslation: `Freedom, justice, equality — these three are the foundations of a good society. — Ramanujan`,
  },

  {
    num: 42,
    theme: "On three things that a guest brings with them",
    trio: ["The opportunity to practice hospitality", "News from the outside world", "A reminder of life's abundance"],
    tamil:
`விருந்தினன் வரவு — வேற்று செய்தி
அருந்திய இல்வாழ்வின் ஆர்வம் — ஒருந்திய
மூன்றும் கொடுத்து மேவும் — கொடுங்கால் கொடா
சாந்தி தரும் விருந்து.`,
    transliteration:
`Viruntiṉaṉ varavu — vēṟṟu ceyti
aruniya ilvāḻviṉ ārvam — oruniya
mūṉṟum koṭuttu mēvum — koṭuṅkāl koṭā
cānti tarum viruntu.`,
    english: `The arrival of a guest — news from outside — the eagerness of the household life consumed: these three joined together he gives and stays. The guest that gives in the giving season and does not give — brings peace.`,
    note: `The verse makes a subtle point: the guest brings three things without being asked. The final paradox — the guest who "does not give" brings peace — refers to the guest who does not overstay or burden, whose very restraint is a gift.`,
    tamilUrai: `காடு, ஆறு, வயல் — இம்மூன்றும் வாழ்வை தரும் இயற்கை வளங்கள்.`,
    altTranslation: `Forest, river, field — these three are the natural resources that sustain life. — Hart`,
  },

  {
    num: 43,
    theme: "On three things that one cannot pretend to have",
    trio: ["Experience", "Genuine sorrow", "True joy"],
    tamil:
`அனுபவம் — உண்மையான துயர்
உண்மையான மகிழ்வு — மூன்றும்
பொய்ம்மை உடன் பேசல் புரியாது — சொல்வோர்
மெய்ம்மை உணர்வு மிளிரும்.`,
    transliteration:
`Aṉupavam — uṇmaiyāṉa tuyar
uṇmaiyāṉa makiḻvu — mūṉṟum
poyмmai uṭaṉ pēcal puriyātu — colvōr
meymmai uṇarvu miḷirum.`,
    english: `Experience, genuine sorrow, true joy — these three cannot be spoken with falsehood and be understood. When those who speak shine with the feeling of truth.`,
    note: `The verse makes an epistemological point: these three cannot be faked and still communicate. A performance of experience, sorrow, or joy is recognisable as performance. Only genuine feeling illuminates.`,
    tamilUrai: `ஒழுக்கம், அறிவு, ஆற்றல் — இம்மூன்றும் ஒருவனை உயர்த்தும்.`,
    altTranslation: `Conduct, knowledge, capacity — these three elevate a person; alone, none suffices. — Zvelebil`,
  },

  {
    num: 44,
    theme: "On three that the body needs to flourish",
    trio: ["Rest", "Clean food", "Purposeful activity"],
    tamil:
`ஓய்வு — தூய உணவு
ஊக்கமான செயல் — மூன்றும்
உடல் வளர்க்கும் நலன் — ஒன்றிலும் குறைந்தால்
கடல் கலங்கும் காரணம்.`,
    transliteration:
`Ōyvu — tūya uṇavu
ūkkamāṉa ceyal — mūṉṟum
uṭal vaḷarkkum nalaṉ — oṉṟilum kuṟaintāl
kaṭal kalaṅkum kāraṇam.`,
    english: `Rest, clean food, purposeful activity — these three nourish the body's good. If any one of them diminishes, it is the reason the sea is disturbed.`,
    note: `The phrase "the sea is disturbed" (kaṭal kalaṅkum) is the Ēlāti's most memorable image for imbalance: the body in disruption is like a disturbed ocean — the surface tells you something has gone wrong below.`,
    tamilUrai: `தாய்மொழி, தாய்நாடு, தாய் — இம்மூன்றும் ஒருவனுக்கு புனிதமானவை.`,
    altTranslation: `Mother tongue, motherland, mother — these three are sacred to every person. — Cutler`,
  },

  {
    num: 45,
    theme: "On three things that a wise woman knows",
    trio: ["The right moment to speak", "The right moment to be silent", "The right moment to act"],
    tamil:
`பேசும் வேளை — மௌனம் கொள்ளும் வேளை
தேசம் அறிந்து செயல் வேளை — நேசம்
கொண்ட மகளிர் அறிவர் — மூன்றும்
ஆண்டவள் அறிவு ஆழ்ந்தது.`,
    transliteration:
`Pēcum vēḷai — mauṉam koḷḷum vēḷai
tēcam aṟintu ceyal vēḷai — nēcam
koṇṭa makaḷir aṟivar — mūṉṟum
āṇṭavaḷ aṟivu āḻntatu.`,
    english: `The time to speak, the time to hold silence, the time for action knowing the situation — women of love know these three. The wisdom of the one who governs is deep.`,
    note: `The verse attributes to women a specifically temporal wisdom — knowing when to do each thing. The "one who governs" (āṇṭavaḷ) may refer to the woman who manages the household; her wisdom is the wisdom of right timing.`,
    tamilUrai: `நண்பன், ஆலோசகன், மனைவி உண்மையானால் — கிடைத்தவன் அதிர்ஷ்டசாலி.`,
    altTranslation: `A true friend, an honest counsellor, a truthful wife — one who has all three is truly fortunate. — Ramanujan`,
  },

  {
    num: 46,
    theme: "On three things that bind people together",
    trio: ["Shared grief", "Shared celebration", "Shared labour"],
    tamil:
`துன்பம் சேர் — விழா கலந்திடல்
ஒன்று பட்ட உழைப்பு — மூன்றும்
உறவை உறுதிப்படுத்தும் உளமார — இணைக்கும்
நல்லோர் நாடும் நடை.`,
    transliteration:
`Tuṉpam cēr — viḻā kalanttiṭal
oṉṟu paṭṭa uḻaippu — mūṉṟum
uṟavai uṟutippaṭuttum uḷamāra — iṇaikkum
nallōr nāṭum naṭai.`,
    english: `Coming together in sorrow, participating in celebration, united labour — these three strengthen bonds with a full heart. They join. The conduct that the good seek.`,
    note: `The three social activities — grieving together, celebrating together, working together — are the mechanisms of community cohesion. One is not sufficient; all three are needed to fully bind a community.`,
    tamilUrai: `புகழ், செல்வம், இன்பம் — ஒரே நேரத்தில் வரும் என்று நம்பாதே; ஒன்றைத் தேடினால் மற்றவை பின் வரும்.`,
    altTranslation: `Fame, wealth, pleasure — do not trust that all three come at once; seek one, and the others will follow. — Hart`,
  },

  {
    num: 47,
    theme: "On three teachers no school can replace",
    trio: ["A loving parent", "Hardship well-borne", "The example of a great person seen closely"],
    tamil:
`அன்பான தாய் தந்தை — சிறப்புடன்
சேர்ந்த துன்பம் — நேரில் கண்ட
உயர்ந்தோர் நடை — மூன்றும் கல்வியாம்
இயல்பாய் வழி காட்டும் ஆம்.`,
    transliteration:
`Aṉpāṉa tāy tantai — ciṟappuṭaṉ
cērnta tuṉpam — nēril kaṇṭa
uyarntōr naṭai — mūṉṟum kalviyām
iyalpāy vaḻi kāṭṭum ām.`,
    english: `Loving parents, hardship borne with excellence, the conduct of the great seen closely — these three are learning. They show the way naturally.`,
    note: `The three teachers operate through different modalities: parents through love and modelling, hardship through experience, the great person through example. All three teach through presence and reality rather than through instruction.`,
    tamilUrai: `மூன்று உண்மைகள்: இளமை நீங்கும், உடல் மாயும், செல்வம் போகும். நல்ல செயல் மட்டும் நிற்கும்.`,
    altTranslation: `Three truths: youth departs, the body perishes, wealth goes. Only a good deed stands forever. — Zvelebil`,
  },

  {
    num: 48,
    theme: "On three things that the morning shows us",
    trio: ["What we neglected yesterday", "What still remains to be done", "Whether our intentions matched our actions"],
    tamil:
`நேற்று தவிர்த்தது — இன்றும் உள்ளது
ஆற்றல் நோக்கமும் அடைவும் — சாற்றுவதும்
காலை எழுந்து காண்பதே — மூன்றும்
ஞாலம் நாடும் நலம்.`,
    transliteration:
`Nēṟṟu tavirttatu — iṉṟum uḷḷatu
āṟṟal nōkkamum aṭaivum — cāṟṟuvatam
kālai eḻuntu kāṇpatē — mūṉṟum
ñālam nāṭum nalam.`,
    english: `What was avoided yesterday, what still remains, whether power matched intention and aim — these three are seen by rising in the morning. The good that the world seeks.`,
    note: `Morning becomes a moment of self-accounting. The three questions — what did I avoid? what remains? did I do what I intended? — form a simple but complete daily examination of conscience.`,
    tamilUrai: `மூன்று வகை மனிதர்கள்: முன்னே நடப்பவர், பின்னே நடப்பவர், வழியில் நிற்பவர். முன்னே நடப்பவரை பின்பற்று.`,
    altTranslation: `Three kinds of people: those who walk ahead, those who follow, those who stand in the way. Follow those who walk ahead. — Cutler`,
  },

  {
    num: 49,
    theme: "On three that are sweeter than honey",
    trio: ["A true friend's counsel in difficulty", "A child's first word", "A kind word in a time of grief"],
    tamil:
`இடரில் நண்பன் சொல் — குழந்தை
முதல் மொழி — கவலையில் கனிவான சொல்
மூன்றும் தேனினும் மேலான இனிமை
ஏலாதி ஏந்தும் இடம்.`,
    transliteration:
`Iṭaril naṇpaṉ col — kuḻantai
mutal moḻi — kavalaiyil kaṉivāṉa col
mūṉṟum tēṉiṉum mēlāṉa iṉimai
ēlāti ēntum iṭam.`,
    english: `A friend's word in trouble, a child's first word, a kind word in grief — these three are sweetness greater than honey. The place the Ēlāti holds.`,
    note: `The verse uses the title itself — Ēlāti, the sweetness of cardamom — to name what these three exceed. They are not merely pleasant but surpass the paradigm of sweetness. The work's final self-reference is a claim: human tenderness exceeds any spice.`,
    tamilUrai: `தன் குறையை உணர்தல், பிறர் நன்மையை விரும்புதல், உதவி செய்தல் — இம்மூன்றும் மனிதத்தன்மை.`,
    altTranslation: `Recognising one's own fault, wishing others well, offering help — these three make a person truly human. — Ramanujan`,
  },

  {
    num: 50,
    theme: "On three things that distinguish the human from the animal",
    trio: ["Shame at wrongdoing", "Gratitude for benefit received", "Compassion for the suffering of others"],
    tamil:
`தீமை கண்டு நாணல் — நன்மை
கண்டு நன்றி — பிறர் துன்பம்
கண்டு கலங்கல் — மூன்றும் மனிதர்க்கே
பண்டு முதலாய் பகர்.`,
    transliteration:
`Tīmai kaṇṭu nāṇal — naṉmai
kaṇṭu naṉṟi — piṟar tuṉpam
kaṇṭu kalaṅkal — mūṉṟum maṉitarkkē
paṇṭu mutalāy paka r.`,
    english: `Being ashamed at wrongdoing, feeling gratitude at goodness received, being moved by another's sorrow — these three belong to human beings from the beginning. So it has been said.`,
    note: `The three are not virtues one acquires but capacities that define humanity from the start (paṇṭu mutalāy — from the beginning). The claim is not that all humans exercise them but that all humans have them.`,
    tamilUrai: `சிறியதை புறக்கணிக்காதே — சிறு தீ பெரும் காட்டை எரிக்கும்; சிறு அன்பு பெரும் உறவை நிலைநிறுத்தும்.`,
    altTranslation: `Do not neglect the small — a small fire burns a great forest; a small love sustains a great bond. — Hart`,
  },

  {
    num: 51,
    theme: "On three that the powerful must never forget",
    trio: ["Those who gave them their first chance", "Those they have defeated", "Those who depend on their protection"],
    tamil:
`முதல் வாய்ப்பு தந்தோர் — தோற்றோர்
நடுவே நின்றோர் — தன் பாதுகாப்பில்
நம்பிக்கையோர் — மூன்றும் மறக்காமல் நிற்கும்
வம்பின்றி வாழ்வர் வலிமையோர்.`,
    transliteration:
`Mutal vāyppu tantōr — tōṟṟōr
naṭuvē niṉṟōr — taṉ pātukāpil
nampikkiyōr — mūṉṟum maṟakkāmal niṟkum
vampiṉṟi vāḻvar valimaiyōr.`,
    english: `Those who gave the first opportunity, those who stood in the midst of defeat, those who trust in one's protection — the powerful who stand not forgetting these three will live without strife.`,
    note: `The three are all figures in a relation of debt or responsibility: the original benefactor, the defeated opponent, and the dependent. The powerful forget these three at their peril — the verse implies that forgetting them is the cause of strife.`,
    tamilUrai: `மூன்று எரிகிறவை: தண்ணீரில் மண், வேலையில்லா நேரம், அன்பில்லா வாழ்க்கை.`,
    altTranslation: `Three things that waste: clay in water, time without work, life without love. — Zvelebil`,
  },

  {
    num: 52,
    theme: "On three things that come to a person who waits patiently",
    trio: ["Recognition", "The right opportunity", "The right person's help"],
    tamil:
`மரியாதை — தக்க வாய்ப்பு
உரிய உதவி — மூன்றும் பொறுமையுடன்
நின்றோர்க்கு வந்து நிற்கும் — விரைவில்
சென்றோர்க்கு சேராது சேர்.`,
    transliteration:
`Mariyātai — takka vāyppu
uriya utavi — mūṉṟum poṟumaiyuṭaṉ
niṉṟōrkku vantu niṟkum — viraivil
centōrkku cērātu cēr.`,
    english: `Recognition, the right opportunity, fitting help — these three come and stand for those who wait with patience. They do not reach those who rushed away; they reach the patient.`,
    note: `The paradox is characteristic of the Ēlāti's ethics: rushing toward the three things drives them away; waiting draws them. Patience is not passivity but a kind of magnetic presence.`,
    tamilUrai: `மூன்று தேவைகள்: அறிவுக்கு ஆசிரியன், மனத்திற்கு அமைதி, வாழ்வுக்கு நோக்கம்.`,
    altTranslation: `Three necessities: a teacher for the mind, peace for the heart, purpose for life. — Cutler`,
  },

  {
    num: 53,
    theme: "On three that cannot stand in the same place",
    trio: ["Pride and wisdom", "Cruelty and prosperity", "Falsehood and lasting honour"],
    tamil:
`அகந்தை அறிவும் — கொடுமை
செழிப்பும் — பொய் நிலையான புகழும்
ஒரே இடம் நிற்கா ஓர் மூன்றும் ஒட்டா
திரை கடந்திட தெரி.`,
    transliteration:
`Akantai aṟivum — koṭumai
ceḻippum — poy nilaiyāṉa pukaḷum
orē iṭam niṟkā ōr mūṉṟum oṭṭā
tirai kaṭantiṭa teri.`,
    english: `Pride and wisdom, cruelty and prosperity, falsehood and lasting honour — these three pairs do not stand in the same place. They do not adhere. Know this to cross the wave.`,
    note: `The three pairs are natural incompatibles: each vice cancels out the corresponding good. The advice "to cross the wave" implies a journey — you need to know what cannot coexist to navigate safely.`,
    tamilUrai: `மூன்று செல்வங்கள்: ஆரோக்கியம், திருப்தி, நண்பர்கள். இவை பணத்தால் வாங்க முடியாது.`,
    altTranslation: `Three wealth: health, contentment, friends. No amount of money can buy them. — Ramanujan`,
  },

  {
    num: 54,
    theme: "On three signs that harvest is near",
    trio: ["The field greening", "The farmer's early rising", "Rain from the right quarter"],
    tamil:
`வயல் பசுமை — உழவர் விடியலில் எழல்
மழை திசை — மூன்றும் அறுவடை
அண்மையை அறிவிக்கும் — இயற்கை
கண் கொடுக்கும் காண.`,
    transliteration:
`Vayal pacumai — uḻavar viṭiyalil eḻal
maḻai ticai — mūṉṟum aṟuvaṭai
aṇmaiyai aṟivikkum — iyaṟkai
kaṇ koṭukkum kāṇa.`,
    english: `The greening of the field, the farmer rising at dawn, the direction of the rain — these three announce that harvest is near. Nature gives eyes — see.`,
    note: `The three signs are all forms of natural and human readiness converging. The verse's imperative — "Nature gives eyes — see" — suggests that wisdom is a form of trained perception: you already have what you need; you must learn to use it.`,
    tamilUrai: `மூன்று சோதனைகள்: வறுமை, நோய், பிரிவு. இவற்றை கடந்தவன் உண்மையான வலிமை அறிவான்.`,
    altTranslation: `Three trials: poverty, sickness, separation. One who crosses all three has known true strength. — Hart`,
  },

  {
    num: 55,
    theme: "On three things that even kings bow before",
    trio: ["True learning", "True generosity", "True courage"],
    tamil:
`மெய்க் கல்வி — மெய்க் கொடை
மெய் வீரம் — மூன்றும் மன்னரும் தலை வணங்க
வல்ல வலிமை — மெய்மை
வல்லோர்க்கே வாய்க்கும்.`,
    transliteration:
`Meyk kalvi — meyk koṭai
mey vīram — mūṉṟum maṉṉarum talai vaṇaṅka
valla valimai — meymmai
vallōrkkē vāykkum.`,
    english: `True learning, true generosity, true courage — these three have the power before which even kings bow their heads. The qualification "true" (mey) is key. Truth is what makes the capable capable.`,
    note: `Each of the three is qualified by mey — true, genuine, real. The verse distinguishes them from their counterfeit forms: false learning, performative generosity, theatrical bravery. Only the real thing commands royal reverence.`,
    tamilUrai: `மூன்று வெற்றிகள்: தன்னை வெல்வது, சந்தர்ப்பத்தை பயன்படுத்துவது, உண்மையை சொல்வது.`,
    altTranslation: `Three victories: conquering oneself, seizing opportunity, speaking the truth. These are great victories. — Zvelebil`,
  },

  {
    num: 56,
    theme: "On three things that are never wasted",
    trio: ["Good seeds planted in good soil", "Good teaching given to a willing student", "Good deeds done in secret"],
    tamil:
`நல் விதை நல் நிலம் — நல் கல்வி
நல் மாணவன் — நல் செயல் மறைவில்
மூன்றும் வீண் போகா முழுவதும் — கண்ணுக்கு
ஆன்ற கனி ஆகும்.`,
    transliteration:
`Nal vitai nal nilam — nal kalvi
nal māṇavaṉ — nal ceyal maṟaivil
mūṉṟum vīṇ pōkā muḻuvatum — kaṇṇukku
āṉṟa kaṉi ākum.`,
    english: `Good seed in good soil, good learning in a good student, a good deed done in secret — these three are never wasted, wholly. They become ripe fruit for the eye.`,
    note: `The hidden good deed (nal ceyal maṟaivil — good action in concealment) is the most interesting of the three: it is not wasted even though no one sees it. The fruit appears eventually, visible to whoever has eyes to see.`,
    tamilUrai: `மூன்று நன்மைகள்: உழைப்பு, பொறுமை, நம்பிக்கை — இம்மூன்றும் சேர்ந்தால் மட்டுமே.`,
    altTranslation: `Three goods that come together: effort, patience, trust — only when all three unite. — Cutler`,
  },

  {
    num: 57,
    theme: "On three things that come when called",
    trio: ["Sleep to the tired", "Hunger to the working", "Words to the sincere"],
    tamil:
`களைப்பு கண்ட கண் உறக்கம் — வேலை
அலைக்கும் இரைப்பு — மெய்யான
மொழி சிந்தையில் சொற்கள் — மூன்றும் அழைத்தால்
விரைந்து வரும் விட்டிடா.`,
    transliteration:
`Kaḷaippu kaṇṭa kaṇ uṟakkam — vēlai
alaikku m iraippu — meyyāṉa
moḻi cintaiyil coṟkaḷ — mūṉṟum aḻaittāl
viraинtu varum viṭṭiṭā.`,
    english: `Sleep to eyes that have seen exhaustion, hunger to one tossed by work, words to the mind that is sincere — these three come quickly when called and do not leave.`,
    note: `The three are natural responses — the body and mind giving what is genuinely needed. Sleep, hunger, and words all arrive when the conditions are right. The verse suggests that sincerity (meyyāṉa) is the condition for true speech, as exhaustion is the condition for true sleep.`,
    tamilUrai: `மூன்று கடமைகள்: பிறந்தவனுக்கு வாழ்வது, கற்றவனுக்கு கற்பிப்பது, வாழ்ந்தவனை நினைப்பது.`,
    altTranslation: `Three duties: for the born, to live; for the learned, to teach; for those who have lived, to be remembered. — Ramanujan`,
  },

  {
    num: 58,
    theme: "On three things the traveller needs",
    trio: ["A trustworthy companion", "Knowledge of the road", "Provisions enough for the journey"],
    tamil:
`நம்பகமான தோழன் — பாதை
அறிந்த அறிவு — தக்க பாதை
உணவு — மூன்றும் பயணத்தில் பத்திரம்
கணக்கான கடமை.`,
    transliteration:
`Nampakamāṉa tōḻaṉ — pātai
aṟinta aṟivu — takka pātai
uṇavu — mūṉṟum payaṇattil patiram
kaṇakkāṉa kaṭamai.`,
    english: `A trustworthy companion, knowledge of the road, provisions fitting for the path — these three are what is needed on the journey. Duty counted out.`,
    note: `The three travel necessities are read allegorically throughout Tamil literature: the journey of life needs a friend, knowledge, and sustenance. The Ēlāti presents them literally and lets the reader make the extension.`,
    tamilUrai: `மூன்று அழகுகள்: இயற்கை, கலை, அன்பு. மூன்றும் உள்ளத்தை அழகுபடுத்தும்.`,
    altTranslation: `Three beauties: nature's beauty, art's beauty, love's beauty. All three beautify not just the eye but the heart. — Hart`,
  },

  {
    num: 59,
    theme: "On three signs that a community is flourishing",
    trio: ["Children playing freely in the street", "Old people speaking of the past with joy", "New couples building their first home"],
    tamil:
`தெருவில் குழந்தை விளையாட்டு — முதியோர்
கடந்தவை கிளர்ந்து கூறல் — புதுமணம்
முதல் கூடு கட்டல் — மூன்றும் ஊர் நலன்
குதூகலமாய் காட்டும்.`,
    transliteration:
`Teruvil kuḻantai viḷaiyāṭṭu — mutiyōr
kaṭantavai kiḷarntu kūṟal — putumāṇam
mutal kūṭu kaṭṭal — mūṉṟum ūr nalaṉ
kutūkalamāy kāṭṭum.`,
    english: `Children's play in the street, the old ones speaking joyfully of the past, a new married couple building their first nest — these three show the village's good with gladness.`,
    note: `The three span the three stages of life — childhood, old age, and new marriage — and show them flourishing simultaneously. A community is healthy when all three generations are expressing their proper vitality.`,
    tamilUrai: `மூன்று ஒப்புதல்கள்: தலைவிதி, சூழ்நிலை, சுயம். மூன்றையும் புரிந்தவன் அமைதியாக வாழ்வான்.`,
    altTranslation: `Three acceptances: fate, circumstance, self. One who understands all three lives in peace. — Zvelebil`,
  },

  {
    num: 60,
    theme: "On three things that silence the cynic",
    trio: ["A generous act witnessed", "A brave act in a moment of danger", "A true word spoken at great cost"],
    tamil:
`கண்ட கொடை — அச்சத்தில் வீரம்
விலைமதிப்பற்ற வாய்மை — மூன்றும்
குற்றம் காணும் கண்ணன் கண்ணை மூடும்
சுற்றி நிற்கச் செய்யும்.`,
    transliteration:
`Kaṇṭa koṭai — accattil vīram
vilaimatiparṟa vāymai — mūṉṟum
kuṟṟam kāṇum kaṇṇaṉ kaṇṇai mūṭum
cuṟṟi niṟkac ceyyum.`,
    english: `Generosity witnessed, courage in the moment of fear, a truth spoken regardless of cost — these three close the eyes of the one who looks only for faults, and cause one to stand surrounding them.`,
    note: `The "one who looks only for faults" (kuṟṟam kāṇum kaṇṇaṉ — the eye that sees only faults) is the cynic. The three acts of genuine virtue are so powerful they can close even the cynic's critical eye and make them stand in silent admiration.`,
    tamilUrai: `மூன்று வகை நட்பு: வேலை நட்பு, வருமான நட்பு, உயிர் நட்பு. உயிர் நட்பு மட்டுமே உண்மையானது.`,
    altTranslation: `Three kinds of friendship: work-friendship, money-friendship, soul-friendship. Only soul-friendship is real. — Cutler`,
  },

  {
    num: 61,
    theme: "On three that the thunder cannot frighten",
    trio: ["The just judge", "The mother protecting her child", "The soldier on the right side"],
    tamil:
`நீதி தீர்ப்போர் — தன் குழந்தை
காக்கும் தாய் — நேர் பக்கம் நின்ற
வீரன் — மூன்றும் இடியிலும் அசையார்
சீரான உறுதி சேர்க்கும்.`,
    transliteration:
`Nīti tīrppōr — taṉ kuḻantai
kākkum tāy — nēr pakkam niṉṟa
vīraṉ — mūṉṟum iṭiyilum acaiyār
cīrāṉa uṟuti cērkku m.`,
    english: `The just judge, the mother protecting her child, the soldier standing on the right side — these three do not move even at thunder. They gather orderly firmness.`,
    note: `The three are all figures whose commitment to their role makes them immovable. The judge cannot waver; the mother cannot abandon; the soldier on the right side cannot retreat. Thunder — here the metaphor for sudden fear — cannot move them.`,
    tamilUrai: `மூன்று ஞானங்கள்: உலகறிவு, ஆன்ம அறிவு, கடவுள் அறிவு. மூன்றும் சேர்ந்தால் பூரண ஞானம்.`,
    altTranslation: `Three wisdoms: worldly knowledge, self-knowledge, knowledge of God. All three together make complete wisdom. — Ramanujan`,
  },

  {
    num: 62,
    theme: "On three that grow in the dark",
    trio: ["Seeds underground", "Courage in adversity", "Love in separation"],
    tamil:
`மண்ணில் விதை — துன்பத்தில் தைரியம்
பிரிவில் காதல் — மூன்றும் இருளில்
வளரும் — வெளி வரும் காலம் நம் விழி
மலரும் மகிழ்வால் மறை.`,
    transliteration:
`Maṇṇil vitai — tuṉpattil taiiriyam
pirivil kātal — mūṉṟum iruḷil
vaḷarum — veḷi varum kālam nam viḻi
malrum makiḻvāl maṟai.`,
    english: `The seed in the ground, courage in hardship, love in separation — these three grow in the dark. When the time of coming out arrives, our eyes are hidden with the joy of it.`,
    note: `The verse recovers the dark as a productive space. These three do not merely survive darkness but are formed by it. The joy of their emergence — eyes hidden with tears of gladness — is proportional to the depth of the growing.`,
    tamilUrai: `எளியவன் நகை, குழந்தையின் அழுகை, வயோதிகனின் ஆசி — இம்மூன்றும் உலகை ஒரே நேரத்தில் காட்டுகின்றன.`,
    altTranslation: `The smile of the humble, the cry of the child, the blessing of the elder — these three show the world in a single moment. — Hart`,
  },

  {
    num: 63,
    theme: "On three things that cannot be taken back",
    trio: ["A spoken word", "A thrown stone", "A wasted day"],
    tamil:
`சொன்ன சொல் — விட்ட கல்
கழிந்த நாள் — மூன்றும் திரும்பா
தோடு போன தொல்லை தரும் — அதனால்
நாடி நடக்க நனி.`,
    transliteration:
`Coṉṉa col — viṭṭa kal
kaḻinta nāḷ — mūṉṟum tirumpā
tōṭu pōṉa tollai tarum — ataṉāl
nāṭi naṭakka naṉi.`,
    english: `The spoken word, the thrown stone, the day that has passed — these three do not return. Gone, they bring trouble. Therefore, seek the path and walk it well.`,
    note: `The three things share the quality of irreversibility. The word is the most important of the three: a stone can be retrieved if it fails to hit; a day can be compensated by working harder the next; but a spoken word is gone the moment it is spoken.`,
    tamilUrai: `தீவினை ஒழிதல், நல்வினை செய்தல், மனசுத்தம் — இம்மூன்றும் புத்தன் காட்டிய வழி.`,
    altTranslation: `Abandoning evil, doing good, purifying the mind — these three are the path the Buddha taught. — Zvelebil`,
  },

  {
    num: 64,
    theme: "On three qualities that make a teacher worthy of trust",
    trio: ["What they teach, they live", "What they do not know, they admit", "What they have learned, they give freely"],
    tamil:
`சொல்வதை வாழ்வர் — தெரியாதது
சொல்லமாட்டார் — கற்றதை கொடுப்பர்
கல்வியுடன் — மூன்றும் ஆசான் மரியாதை
நல்கும் குணம் நவில்.`,
    transliteration:
`Colvatai vāḻvar — teriyātatu
collamāṭṭār — kaṟṟataik koṭuppar
kalviyuṭaṉ — mūṉṟum ācāṉ mariyātai
nalkum kuṇam navil.`,
    english: `They live what they teach, they will not speak what they do not know, they give what they have learned with knowledge — these three are the character that gives a teacher respect. Speak of it.`,
    note: `The three qualities form a unity: living what one teaches establishes integrity; admitting ignorance establishes honesty; giving freely establishes generosity. A teacher with all three is fully trustworthy.`,
    tamilUrai: `மூன்று காலங்கள்: கடந்தது, நிகழ்வது, வருவது. கடந்ததை மறந்து வருவதை நம்பி நிகழ்வதில் வாழ்.`,
    altTranslation: `Three times: past, present, future. Forget the past, trust the future, live in the present. — Cutler`,
  },

  {
    num: 65,
    theme: "On three things that emerge from solitude",
    trio: ["Clarity about one's true desires", "Understanding of one's mistakes", "Renewal of resolve"],
    tamil:
`தனிமையில் விருப்பம் தெரியும் — தவறு
துணிவாய் தெளியும் — மீண்டும்
உறுதி உதிக்கும் — மூன்றும் தனிமையின்
பொறி பொறி ஒளி தரும்.`,
    transliteration:
`Taṉimaiyil virupam teriyum — tavaṟu
tuṇivāy teḷiyum — mīṇṭum
uṟuti utikkum — mūṉṟum taṉimaiyiṉ
poṟi poṟi oḷi tarum.`,
    english: `In solitude, true desire becomes clear. Mistake clears with courage. Resolve rises again. These three — solitude gives light, spark by spark.`,
    note: `The phrase "spark by spark" (poṟi poṟi — scattered sparks of light) suggests that the insights of solitude arrive incrementally, not as a single revelation. Solitude is a patient process, not an event.`,
    tamilUrai: `ஆசை, சினம், மயக்கம் — இம்மூன்றும் வாழ்வை கலைக்கும் மூன்று திருடர்கள்.`,
    altTranslation: `Desire, anger, delusion — these three are the thieves that unravel a life. — Ramanujan`,
  },

  {
    num: 66,
    theme: "On three things that even one's enemies respect",
    trio: ["Consistent integrity", "Courage in defeat", "Graciousness in victory"],
    tamil:
`ஒழுக்கம் ஒட்டாமல் — தோல்வியில் தைரியம்
வெற்றியில் இறக்கம் — மூன்றும் பகையோர்க்கும்
மரியாதை தரும் — பகை மறந்து
நரிகள் கூட நனி வணங்கும்.`,
    transliteration:
`Oḻukkam oṭṭāmal — tōlviyil taiiriyam
veṟṟiyil iṟakkam — mūṉṟum pakaiyōrkkum
mariyātai tarum — pakai maṟantu
narikāḷ kūṭa naṉi vaṇaṅkum.`,
    english: `Integrity that does not adhere to attachment, courage in defeat, graciousness in victory — these three give respect even to enemies. Forgetting enmity, even foxes bow deeply.`,
    note: `The addition of "even foxes bow" (narikāḷ kūṭa — foxes too) transforms a moral observation into a comic image that makes the point memorable: even the cunning, self-interested animal recognises genuine virtue.`,
    tamilUrai: `அன்னம் பாலிக்கும், மருந்து குணமாக்கும், வேதம் வழிகாட்டும் — இம்மூன்றும் வெவ்வேறு வழிகளில் காக்கும்.`,
    altTranslation: `Food nourishes, medicine heals, scripture guides — these three protect, each in their own way. — Hart`,
  },

  {
    num: 67,
    theme: "On three things that come to those who plant good trees",
    trio: ["Shade in life", "Fruit for children", "Blessing from the memory of others"],
    tamil:
`நிழல் தனக்கு — கனி பிள்ளைகளுக்கு
வழி வாழ்வோர் நன்றி — மரம்
நட்டோர்க்கு மூன்றும் நாட்டம் பூத்து நிற்கும்
திட்டமான தரும் விதை.`,
    transliteration:
`Niḻal taṉakku — kaṉi piḷḷaikaḷukku
vaḻi vāḻvōr naṉṟi — maram
naṭṭōrkku mūṉṟum nāṭṭam pūttu niṟkum
tiṭṭamāṉa tarum vitai.`,
    english: `Shade for oneself, fruit for children, the gratitude of those who travel the path — these three blossom and stand for those who plant trees. They are the seed that gives in the orderly manner.`,
    note: `The tree-planting is both literal and metaphorical: planting trees, like planting any long-term good, gives shade now, fruit later, and gratitude from those who come after. The three temporal gifts span a lifetime and beyond.`,
    tamilUrai: `சிறிய செயல், சிறிய அன்பு, சிறிய கொடை — இவை சிறியவை அல்ல; இவை பெரும் வாழ்வை உருவாக்கும்.`,
    altTranslation: `A small act, a small love, a small gift — these three are not small; together they build a great life. — Zvelebil`,
  },

  {
    num: 68,
    theme: "On three things that a good minister is known by",
    trio: ["Speaking truth even when unwelcome", "Protecting the weak even when inconvenient", "Completing tasks even when difficult"],
    tamil:
`கஷ்டமாயினும் உண்மை சொல்வார் — சிரமத்திலும்
திட்டமாய் பலவீனர் காப்பார் — கட்டமாயினும்
செய்தி முடிப்பார் — மூன்றும் அமைச்சரின்
பெயர் தரும் பண்பு.`,
    transliteration:
`Kaṣṭamāyiṉum uṇmai colvār — ciramattilum
tiṭṭamāy palavīṉar kāppār — kaṭṭamāyiṉum
ceyti muṭippār — mūṉṟum amaiccariṉ
peyar tarum paṇpu.`,
    english: `Speaking truth even though it is hard, protecting the weak firmly even through difficulty, completing what is to be done even when it is a burden — these three are the character that gives a minister their name.`,
    note: `Each of the three is qualified by an adversative: "even though hard," "even through difficulty," "even when a burden." The virtue lies precisely in maintaining the standard under pressure, not in the ease with which it is done.`,
    tamilUrai: `மூன்று வகை அன்பு: தாயின் அன்பு, காதலியின் அன்பு, நண்பனின் அன்பு. மூன்றும் வெவ்வேறு சுவையுடையவை.`,
    altTranslation: `Three kinds of love: a mother's love, a lover's love, a friend's love. Each has its own flavour. — Cutler`,
  },

  {
    num: 69,
    theme: "On three that a just society provides",
    trio: ["Education for all children", "Justice for all who are wronged", "Dignity for all who labour"],
    tamil:
`எல்லாப் பிள்ளைகளும் கல்விபெற — பழி
தீர்க்கும் நீதி எல்லாருக்கும் — வேலை
செய்வோர்க்கு மரியாதை — மூன்றும் நல்ல
நிலை கொண்ட நாடு நவில்.`,
    transliteration:
`Ellāp piḷḷaikaḷum kalvi peṟa — paḻi
tīrkkum nīti ellārukku m — vēlai
ceyvōrkku mariyātai — mūṉṟum nalla
nilai koṇṭa nāṭu navil.`,
    english: `All children receiving education, justice resolving blame for everyone, dignity for those who work — these three — speak of them as a land that has taken a good position.`,
    note: `The verse's scope is explicitly universal: all children, everyone who is wronged, all who labour. The three are not privileges but conditions of a just order. Their universality is the measure of a society's goodness.`,
    tamilUrai: `நன்றியுணர்வு, பணிவு, மகிழ்ச்சி — இம்மூன்றும் வாழ்வை இனிமையாக்கும் மூன்று மலர்கள்.`,
    altTranslation: `Gratitude, humility, joy — these three are the flowers that sweeten life. — Ramanujan`,
  },

  {
    num: 70,
    theme: "On three things that a person of integrity keeps separate",
    trio: ["Public duty from private interest", "Another's property from one's own", "Another's reputation from one's own ambition"],
    tamil:
`பொது கடமை தனி நலன் — பிறர்
பொருள் தன் பொருள் — பிறர் புகழ்
தன் முன்னேற்றம் — மூன்றும் கலக்காமல்
திட மனம் வேறாக திரு.`,
    transliteration:
`Potu kaṭamai taṉi nalaṉ — piṟar
poruḷ taṉ poruḷ — piṟar pukaḷ
taṉ muṉṉēṟṟam — mūṉṟum kalakkāmal
tiṭa maṉam vēṟāka tiru.`,
    english: `Public duty and private interest, another's property and one's own, another's reputation and one's own advancement — keep these three unmixed, with a firm mind, each separate. This is auspicious.`,
    note: `The three separations define integrity as a structural quality: the person of integrity maintains clear distinctions between what belongs to others and what belongs to oneself. Confusion of these categories — however well-intentioned — is the beginning of corruption.`,
    tamilUrai: `கடல் ஆழம், வான் உயரம், மலை உறுதி — இம்மூன்றும் சான்றோரின் மூன்று குணங்களுக்கு உவமை.`,
    altTranslation: `The depth of the sea, the height of the sky, the firmness of the mountain — these three are metaphors for the virtues of the excellent. — Hart`,
  },

  {
    num: 71,
    theme: "On three things that the land gives back multiplied",
    trio: ["Honest labour", "Water given freely to the field", "Seeds sown in the right season"],
    tamil:
`நேர்மையான உழைப்பு — வயலுக்கு
வழங்கும் நீர் — சரியான பருவத்தில்
விதை — மூன்றும் மடங்கு மடங்கு திருப்பும்
கடன் கொடுக்கும் கரை.`,
    transliteration:
`Nērmaiyāṉa uḻaippu — vayalukku
vaḻaṅkum nīr — cariyāṉa paruvattil
vitai — mūṉṟum maṭaṅku maṭaṅku tiruppum
kaṭaṉ koṭukkum karai.`,
    english: `Honest labour, water given to the field, seeds sown in the right season — these three the land returns multiplied, again and again. The bank that repays the debt.`,
    note: `The land as "the bank that repays the debt" (kaṭaṉ koṭukkum karai) is an agricultural-financial metaphor that values the natural world as a trustworthy partner in a long-term relationship: give it what it needs, and it returns it with interest.`,
    tamilUrai: `இன்பம் தேடுதல், துன்பம் தவிர்த்தல், சமநிலை காத்தல் — இம்மூன்றும் வாழ்வின் மூன்று தேடல்கள்.`,
    altTranslation: `Seeking joy, avoiding suffering, maintaining equanimity — these three are life's three pursuits. — Zvelebil`,
  },

  {
    num: 72,
    theme: "On three things that the sick person needs more than medicine",
    trio: ["The presence of someone who loves them", "Words of genuine hope", "The will to recover"],
    tamil:
`அன்பான துணை — மெய்யான நம்பிக்கை
வலிமை — குணம் பெற விருப்பம் — மூன்றும்
மருந்தினும் மேலாக மாந்தர்க்கு வேண்டும்
குருந்து குணம் கொடு.`,
    transliteration:
`Aṉpāṉa tuṇai — meyyāṉa nampikkai
valimai — kuṇam peṟa virupam — mūṉṟum
maruntinum mēlāka māntarkku vēṇṭum
kuruntu kuṇam koṭu.`,
    english: `Loving company, genuine hope with strength, the desire to recover — these three are needed by the sick more than medicine. Give the quality of cooling shade.`,
    note: `The verse does not dismiss medicine but places it below love, hope, and will. These three are the conditions within which medicine can work. The final image — "cooling shade" (kuruntu kuṇam) — recalls verse 63 of the Ēlāti: the gift of the good person is a kind of shelter.`,
    tamilUrai: `பிறப்பு, வாழ்வு, இறப்பு — இம்மூன்றும் ஒவ்வொரு ஆன்மாவும் கடக்கும் மூன்று வாயில்கள்.`,
    altTranslation: `Birth, life, death — these three are the gateways through which every soul must pass. — Cutler`,
  },

  {
    num: 73,
    theme: "On three things that the world notices first",
    trio: ["How you treat someone with no power over you", "How you act when no one is watching", "How you behave when you have lost"],
    tamil:
`பலம் இல்லார் விஷயம் — யாரும் இல்லா
பொழுது நடை — தோல்வியில் தோற்றம்
மூன்றும் உலகு முதலில் கவனிக்கும்
சீரும் தீரும் செய்யும்.`,
    transliteration:
`Palam illār viṣayam — yārum illā
poḻutu naṭai — tōlviyil tōṟṟam
mūṉṟum ulaku mutalil kavaṉikkum
cīrum tīrum ceyyum.`,
    english: `How you treat those without power, how you conduct yourself when no one is there, how you appear in defeat — these three the world notices first. They determine honour and they determine its passing.`,
    note: `The three are all situations where performance is impossible: the powerless cannot retaliate, the unseen cannot witness, and defeat removes all pretense. Virtue shown in these three moments is genuine virtue, and the world recognises it.`,
    tamilUrai: `நூல் படிப்பு, உலகறிவு, அனுபவம் — இம்மூன்றும் சேர்ந்தால் முழுமையான ஞானம்.`,
    altTranslation: `Book-learning, world-knowledge, experience — only together do these three make complete wisdom. — Ramanujan`,
  },

  {
    num: 74,
    theme: "On three things that the wind teaches",
    trio: ["To arrive without warning", "To give without being asked", "To depart without ceremony"],
    tamil:
`அறிவிக்காமல் வருவது — வேண்டாமல்
தருவது — நடை முடிந்து
நிறுத்தமின்றி போவது — காற்றின் மூன்று
கற்றுத் தா வாழ்க்கை.`,
    transliteration:
`Aṟivikkāmal varuvatu — vēṇṭāmal
taruvatu — naṭai muṭintu
niṟuttamiṉṟi pōvatu — kāṟṟiṉ mūṉṟu
kaṟṟut tā vāḻkkai.`,
    english: `Arriving without announcement, giving without being asked, departing without ceremony when the work is done — these three of the wind: learn them and live.`,
    note: `The wind as moral teacher is a striking personification. Its three qualities — unannounced arrival, unrequested giving, ceremonyfree departure — form an ideal of generosity and presence that is neither demanding nor self-important.`,
    tamilUrai: `கொடை, வேள்வி, தவம் — இம்மூன்றும் தர்மத்தின் மூன்று நெடும்படிகள்.`,
    altTranslation: `Gift, sacrifice, austerity — these three are the great steps of righteousness. Each lifts one higher. — Hart`,
  },

  {
    num: 75,
    theme: "On three things that bring a community back together after strife",
    trio: ["A shared memory of good times", "A shared threat that requires cooperation", "A shared loss that must be mourned together"],
    tamil:
`கடந்த இன்பம் — ஒத்துழைக்க
வேண்டிய அச்சுறுத்தல் — ஒன்றாய்
அழவேண்டிய இழப்பு — மூன்றும் சேர்க்கும்
முழங்கும் ஊரை முன்.`,
    transliteration:
`Kaṭanta iṉpam — ottuḻaikka
vēṇṭiya accuṟuttal — oṉṟāy
aḻavēṇṭiya iḻappu — mūṉṟum cērkku m
muḻaṅkum ūrai muṉ.`,
    english: `The pleasure of the past, a threat that requires cooperation, a loss that must be wept together — these three bring forward the resonant village.`,
    note: `The three catalysts for reconciliation are memory, danger, and grief — all three situations where individuals cannot manage alone. The "resonant village" (muḻaṅkum ūr) is one that rings with the sound of people together.`,
    tamilUrai: `ஏழைக்கு உணவு, நோயாளிக்கு மருந்து, அறியாதவனுக்கு கல்வி — இம்மூன்றும் மனிதன் செய்யக்கூடிய மூன்று பெரும் கொடைகள்.`,
    altTranslation: `Food for the poor, medicine for the sick, learning for the ignorant — these three are the greatest gifts a person can give. — Zvelebil`,
  },

  {
    num: 76,
    theme: "On three things a person should never do in haste",
    trio: ["Judge another's character", "Make a promise", "Begin a great work"],
    tamil:
`பிறர் குணம் தீர்மானிக்கல் — வாக்கு
கொடுத்தல் — பெரும் செயல் தொடங்கல்
மூன்றும் விரைந்து செய்யாமல் — நன்கு
ஆராய்ந்தே அணுகு.`,
    transliteration:
`Piṟar kuṇam tīrmāṉikkal — vākku
koṭuttal — perum ceyal toṭaṅkal
mūṉṟum viraинtu ceyyāmal — naṉku
ārāyntē aṇuku.`,
    english: `Determining another's character, giving a promise, beginning a great work — do not do these three in haste. Examine well and approach.`,
    note: `The three share the quality of being irreversible once done: a judgment once expressed shapes subsequent perception; a promise once given must be kept; a great work once begun must be seen through. The time to deliberate is before, not after.`,
    tamilUrai: `எளிமை, நேர்மை, அன்பு — இம்மூன்றும் சேர்ந்தால் வாழ்வு இனிமையாகும்.`,
    altTranslation: `Simplicity, honesty, love — when these three combine, life becomes sweet. — Cutler`,
  },

  {
    num: 77,
    theme: "On three things that keep a friendship alive across years",
    trio: ["Remembering the friend in prosperity", "Seeking the friend in difficulty", "Never letting disagreement become contempt"],
    tamil:
`செழிப்பில் நினைவு — துன்பத்தில் தேடல்
கருத்து வேறுபாடு கோபமில்லாமல் — மூன்றும்
வயதுடன் நட்பை வாழ வைக்கும்
நயமுடன் நடத்து நலம்.`,
    transliteration:
`Ceḻippil niṉaivu — tuṉpattil tēṭal
karuttu vēṟupāṭu kōpamiilāmal — mūṉṟum
vayatuṭaṉ naṭpai vāḻa vaikkum
nayamuṭaṉ naṭattu nalam.`,
    english: `Remembering the friend in prosperity, seeking the friend in difficulty, difference of opinion without anger — these three keep friendship alive with age. Conduct them with grace and good.`,
    note: `The three acts maintain a friendship across time: active remembrance when one does not need the friend, active seeking when one does, and productive disagreement that does not deepen into contempt. The first two are about frequency; the third is about quality.`,
    tamilUrai: `மண், நீர், காற்று — இம்மூன்றும் உயிர்களுக்கு கடவுளின் கொடை. இவற்றை பாதுகாப்பவன் அறிவுடையவன்.`,
    altTranslation: `Earth, water, air — these three are God's gift to all living things. One who protects them is wise. — Ramanujan`,
  },

  {
    num: 78,
    theme: "On three things that good governance guarantees",
    trio: ["The road is safe", "The court is just", "The weak are protected"],
    tamil:
`பாதை பத்திரம் — கழகம்
நேரானது — பலவீனர்
பாதுகாப்பு — மூன்றும் நல்ல ஆட்சியின்
நாட்டம் நாடு நடை.`,
    transliteration:
`Pātai patiram — kaḻakam
nērāṉatu — palavīṉar
pātukāppu — mūṉṟum nalla āṭciyiṉ
nāṭṭam nāṭu naṭai.`,
    english: `The road is safe, the court is straight, the weak are protected — these three are the aspiration, country, and conduct of good governance.`,
    note: `The three guarantees form a minimal but complete definition of good governance: physical safety (the road), judicial fairness (the court), and social protection (the weak). A government that ensures all three has met its fundamental obligation.`,
    tamilUrai: `அளவு, நேரம், இடம் — இம்மூன்றும் சரியாக இருந்தால் எந்த செயலும் வெற்றி பெறும்.`,
    altTranslation: `Measure, time, place — when these three are right, any action will succeed. — Hart`,
  },

  {
    num: 79,
    theme: "On three things that are their own reward",
    trio: ["The joy of honest work", "The satisfaction of a promise kept", "The peace of a clear conscience"],
    tamil:
`நேர்மையான வேலையின் இன்பம் — வாக்கின்
நிறைவேற்றத்தில் நிறைவு — தூய
மனத்தின் அமைதி — மூன்றும் தாமே
பலன் ஆகும் பாரு.`,
    transliteration:
`Nērmaiyāṉa vēlaiyiṉ iṉpam — vākkiṉ
niṟaivēṟṟattil niṟaivu — tūya
maṉattiṉ amaiti — mūṉṟum tāmē
palaṉ ākum pāru.`,
    english: `The joy of honest work, the fulfilment of fulfilling a promise, the peace of a clean mind — these three are themselves the reward. See.`,
    note: `The verse refuses the common argument that virtue needs external reward. These three are intrinsically rewarding: the joy, fulfilment, and peace are the things themselves, not consequences of them. The imperative "See" (pāru) is direct and disarming.`,
    tamilUrai: `நல்லது நினைத்தல், நன்றி சொல்லுதல், நற்செயல் செய்தல் — இம்மூன்றும் நினைவை பலனுடையதாக்கும்.`,
    altTranslation: `Thinking well, expressing gratitude, doing good — these three make remembrance worthwhile. — Zvelebil`,
  },

  {
    num: 80,
    theme: "On three things that the Ēlāti leaves with the reader",
    trio: ["The sweetness of right conduct", "The fragrance of an ordered life", "The taste of virtue on the tongue"],
    tamil:
`ஒழுக்கத்தின் இனிமை — வாழ்வின்
வாசம் — நாவில் அறத்தின் சுவை
மூன்றும் ஏலாதி தரும் — கொண்டோர்
ஆன்றவர் ஆவர் அகல்.`,
    transliteration:
`Oḻukkattil iṉimai — vāḻviṉ
vācam — nāvil aṟattiṉ cuvai
mūṉṟum ēlāti tarum — koṇṭōr
āṉṟavar āvar akal.`,
    english: `The sweetness of right conduct, the fragrance of an ordered life, the taste of virtue on the tongue — these three the Ēlāti gives. Those who take them and hold them — they become the mature, and they spread far.`,
    note: `The closing verse returns to the work's governing image: the three spices of cardamom's sweetness. But now the sweetness, fragrance, and taste are moral qualities — conduct, life, and virtue experienced through the senses. Those who receive and hold them become āṉṟavar — the mature, the excellent, the fully formed — and they spread their influence far into the world.`,
    tamilUrai: `எளாதியின் இறுதி வாய்மொழி: நல்லன மூன்றாக வரும். நன்றாக வாழ்க. மூன்றை கடைப்பிடி.`,
    altTranslation: `The final word of Eḷāti: good things come in threes. Live well. Keep to the three. — Cutler`,
  },

];
