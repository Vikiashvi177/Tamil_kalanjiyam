// =============================================================================
// நாலடியார் · Nālaṭiyār — The Four-Line Anthology
// 400 ethical wisdom quatrains · 40 chapters · c. 300–500 CE
// Compiled by Jain scholars in post-Sangam Tamil Nadu
// =============================================================================

const NAALADIYAR_CHAPTERS = [
  { num: 1, name: `செல்வம் நிலையாமை`, nameEnglish: `The Impermanence of Wealth`, desc: `All riches are transient — the wise do not cling to what is certain to depart.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 2, name: `இளமை நிலையாமை`, nameEnglish: `The Impermanence of Youth`, desc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 3, name: `யாக்கை நிலையாமை`, nameEnglish: `The Impermanence of the Body`, desc: `The body is a borrowed vessel — its end is certain from the day of birth.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 4, name: `அறன் வலியுறுத்தல்`, nameEnglish: `The Affirmation of Virtue`, desc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 5, name: `தூய்தன்மை`, nameEnglish: `Purity`, desc: `The purity of mind that keeps from harm is the foundation of all righteous life.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 6, name: `துறவு`, nameEnglish: `Renunciation`, desc: `Those who have renounced desire are truly wealthy — they lack nothing.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 7, name: `கல்வி`, nameEnglish: `Learning`, desc: `Knowledge pursued with perseverance is the wealth that grows with giving.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 8, name: `அறிவுடைமை`, nameEnglish: `Wisdom`, desc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 9, name: `குடிப்பிறப்பு`, nameEnglish: `Noble Birth`, desc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 10, name: `மேன்மக்கள்`, nameEnglish: `The Great`, desc: `The great endure hardship without complaint and bear others' failings without scorn.`, iyal: 1, iyalName: `அறத்துப்பால்`, iyalNameEnglish: `The Book of Virtue` },
  { num: 11, name: `இன்சொல்`, nameEnglish: `Sweet Speech`, desc: `A kind word costs nothing and is more nourishing than a meal.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 12, name: `செய்ந்நன்றியறிதல்`, nameEnglish: `Gratitude`, desc: `Those who remember a kindness are the earth's true ornament.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 13, name: `இடன் அறிதல்`, nameEnglish: `Reading the Right Moment`, desc: `The wise act only when the time is ready — patience is the root of achievement.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 14, name: `சுற்றந்தழால்`, nameEnglish: `Cherishing Kin`, desc: `The kinship of those bound by affection outlasts the kinship of blood.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 15, name: `நட்பு`, nameEnglish: `Friendship`, desc: `True friendship stands unchanged through hardship — it does not waver when tested.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 16, name: `நட்பாராய்தல்`, nameEnglish: `Testing Friendship`, desc: `Before trusting fully, observe: does this person stand firm when storms come?`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 17, name: `பேதைமை`, nameEnglish: `Folly`, desc: `The fool repeats the same error and calls it fate — the wise learn once.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 18, name: `புல்லறிவாண்மை`, nameEnglish: `Ignorance`, desc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 19, name: `இகல்`, nameEnglish: `Enmity`, desc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 20, name: `மடமை`, nameEnglish: `Vanity`, desc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`, iyal: 2, iyalName: `பொருட்பால்`, iyalNameEnglish: `The Book of Polity` },
  { num: 21, name: `கூடா நட்பு`, nameEnglish: `False Friendship`, desc: `The friend who stays only in prosperity is fair weather — not friendship.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 22, name: `கயமை`, nameEnglish: `Baseness`, desc: `The base person will never be elevated by circumstance — nature does not change.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 23, name: `கீழ்மை`, nameEnglish: `Meanness`, desc: `The mean-spirited person is a burden to those around them and a shame to their kin.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 24, name: `இல்வாழ்க்கை`, nameEnglish: `Householder Life`, desc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 25, name: `நல்லினம் சேர்தல்`, nameEnglish: `Keeping Good Company`, desc: `Character is formed by the company one keeps — choose companions with care.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 26, name: `பொருள்செயல்வகை`, nameEnglish: `Right Livelihood`, desc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 27, name: `அழுக்காறாமை`, nameEnglish: `Freedom from Envy`, desc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 28, name: `இன்னாசெய்யாமை`, nameEnglish: `Doing No Harm`, desc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 29, name: `கடனறிதல்`, nameEnglish: `Knowing One's Duty`, desc: `Each person has their duty — to do it without complaint is the mark of the truly good.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 30, name: `உழவு`, nameEnglish: `Agriculture`, desc: `The farmer who feeds the world is the true foundation of civilization — honour them.`, iyal: 3, iyalName: `காமத்துப்பால்`, iyalNameEnglish: `The Book of Love & Society` },
  { num: 31, name: `தீயினம் சேராமை`, nameEnglish: `Avoiding Bad Company`, desc: `A single hour with the wicked can undo the good of years — flee their company.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 32, name: `இரவு`, nameEnglish: `Begging`, desc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 33, name: `வாய்மை`, nameEnglish: `Truth`, desc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 34, name: `மெய்ம்மை`, nameEnglish: `Integrity`, desc: `The person whose word and deed are one is rarer than gold and more precious.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 35, name: `தவம்`, nameEnglish: `Austerity`, desc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 36, name: `துன்பந்துடைத்தல்`, nameEnglish: `Banishing Sorrow`, desc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 37, name: `வெகுளாமை`, nameEnglish: `Restraint of Anger`, desc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 38, name: `இன்னா செய்தாரை ஒறுத்தல்`, nameEnglish: `Responding to Wrong`, desc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 39, name: `சான்றாண்மை`, nameEnglish: `Noble Character`, desc: `The person of noble character is equable in success and failure, in honour and contempt.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
  { num: 40, name: `நீத்தார் பெருமை`, nameEnglish: `The Glory of the Renunciant`, desc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`, iyal: 4, iyalName: `நீத்தார்பெருமை`, iyalNameEnglish: `The Glory of the Renunciant` },
];

const NAALADIYAR_IYALS = [
  { num: 1, name: "அறத்துப்பால்", nameEnglish: "The Book of Virtue", chapters: "1–10" },
  { num: 2, name: "பொருட்பால்", nameEnglish: "The Book of Polity", chapters: "11–20" },
  { num: 3, name: "காமத்துப்பால்", nameEnglish: "The Book of Love & Society", chapters: "21–30" },
  { num: 4, name: "நீத்தார்பெருமை", nameEnglish: "The Glory of the Renunciant", chapters: "31–40" },
];

const NAALADIYAR_POEMS = [
  {
    num: 1,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `மழைதிளைக்கும் மாடமாய் வாழினும் செல்வம்
நிழலினும் நிற்கல் கரிது
ஒழுகலும் ஒல்லும் கரிதே திரைவிளக்கத்
தாரல் ஆவர் செல்வம் உடையோர்`,
    transliteration: `Maḻai tiḷaikkum māṭamāy vāḻinum selvam
niḻaliṉum niṟkal karitu
oḻukalum ollum karitē tirai viḷakkath
tāral āvar selvam uṭaiyōr`,
    english: `Though one lives in mansions drenched by clouds,
wealth is harder to hold than shadow.
Even flowing is difficult for it — those who have riches
are like the lamp in the wave.`,
    tamilUrai: `மழை நனைக்கும் உயரமான மாளிகையில் வாழ்ந்தாலும், செல்வம் நிழலை விட நிற்பது கடினம். அலையில் ஒளிரும் விளக்கு போல, செல்வமுடையோரின் செல்வம் நிலையற்றது.`,
    altTranslation: `Though one dwells in cloud-kissed mansions, wealth is harder to hold than shadow. Like the lamp in a wave, the rich man's wealth flickers and is gone.`,
    note: `The opening verse of the Nālaṭiyār immediately establishes its central theme: the impermanence of wealth. The image of a mansion 'drenched by clouds' — seeming to reach the heavens itself — set against the impossibility of holding wealth even as long as shadow is, is a compressed statement of the entire anthology's wisdom.`
  },
  {
    num: 2,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `ஒருநாள் வினைகேட்டு விட்டிடுவர் செல்வம்
மருவிய நட்பும் கெடும்
ஒருகாற் செலுத்தியது ஓட்டுமோ தேரை
திருமகள் செல்லா விடத்து`,
    transliteration: `Oru nāḷ viṉai kēṭṭu viṭṭiṭuvar selvam
maruiya naṭpum keṭum
orukāṟ celuttiiyatu ōṭṭumō tērai
tirumakaḷ cellā viṭattu`,
    english: `One day, hearing of a deed, they will abandon wealth —
even dear friendships will dissolve.
Can the chariot continue once it has been driven one way,
when Lakṣmī has departed from the place?`,
    tamilUrai: `ஒரு நாள் செய்த வினையின் பலன் கேட்டு செல்வமும் நெருங்கிய நட்பும் கெடும். ஒரு முறை சென்ற வழியில் தேர் திரும்புமா? திருமகள் இல்லாத இடத்தில் செல்வம் நிலைக்குமா?`,
    altTranslation: `One day, learning of a deed, they will forsake wealth — even close friendships will crumble. Can a chariot reverse the road it has already travelled? Where Lakṣmī has departed, prosperity cannot remain.`,
    note: `The chariot that cannot reverse its course is a figure for the irreversibility of fortune's departure. Once prosperity leaves, all that was built upon it — friendships, alliances, status — collapses together. The verse uses Lakṣmī (goddess of wealth) as the personification of fortune, drawing on shared Indic symbolic vocabulary.`
  },
  {
    num: 3,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `செல்வம் சிறிது கொண்டு சேர்க்கும் அவர் பயம்
இல்வாழ்க்கை யின்பம் உடைத்துய
வல்விரைவு நல்லவே செய்க அறவினை
வாழ்நாள் கழிக்கல் வரும்`,
    transliteration: `Selvam siṟitu koṇṭu cērkkum avar payam
ilvāḻkkai iṉpam uṭaittuya
valviraiyvu nallave ceyyum aṟa viṉai
vāḻnāḷ kaḻikkal varum`,
    english: `Little wealth gathered brings its own fear.
Household life has its joys, true —
but act quickly on righteous deeds:
the days of one's life will slip away.`,
    tamilUrai: `சிறிய செல்வமும் பயத்தை தருகிறது. இல்வாழ்க்கை இன்பமுடையது உண்மை தான். ஆனால் அறவினைகளை விரைந்து செய். வாழ்நாள் ஓடிக்கொண்டே இருக்கும்.`,
    altTranslation: `Even little wealth brings its own anxiety. Household life has real pleasures, yes — but act swiftly in righteous deeds: the days of one's life will slide away.`,
    note: `A verse of practical urgency: the pleasures of domestic life are acknowledged but subordinated to the imperative of righteous action before time runs out. The tone is not ascetic withdrawal but engaged wisdom — act while you can.`
  },
  {
    num: 4,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `நிலனும் புனலும் நிழலும் நெருப்பும்
கலனும் கலத்தினோர் ஆற்றல்
குலனும் வலியும் அறிந்தே குறைவின்றி
வாழ்வாரே வாழ்க்கை யுடையோர்`,
    transliteration: `Nilaṉum puṉalum niḻalum nerupum
kalaṉum kalaththiṉōr āṟṟal
kulaṉum valiyum aṟintē kuṟaiviṉṟi
vāḻvārē vāḻkkai uṭaiyōr`,
    english: `Earth and water, shade and fire —
the vessel and the strength of those who use it,
lineage and power — understanding all these
and living without want: that is true living.`,
    tamilUrai: `நிலம், நீர், நிழல், நெருப்பு — இவை எல்லாம் அறிந்து, குலமும் வலிமையும் அறிந்து, குறைவின்றி வாழ்பவர்களே உண்மையான வாழ்க்கை வாழ்கிறார்கள்.`,
    altTranslation: `Earth, water, shade, and fire — the vessel and the power of those who wield it, lineage and strength — knowing all these and living without want: that is genuine living.`,
    note: `A verse of comprehensive wisdom: one must understand the material world (the four elements), the social world (lineage, alliances), and one's own capacities — and integrate all of these into a life lived without excess or deficiency. The Nālaṭiyār's ethics are not otherworldly but deeply engaged with the practical world.`
  },
  {
    num: 5,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `ஒருக்காலும் தீமை செயற்க வினையெல்லாம்
கரும்பு கசக்கும் தினை ஆகும்
வருங்காலம் வாராமை இல்லை என்று வைகல்
கழிப்பதே ஆற்றும் அறிவு`,
    transliteration: `Orukālum tīmai ceyaṟka viṉaiyellām
karumpu kaśakkum tiṉai ākum
varuṅkālam vārāmai illai eṉṟu vaikal
kaḻippatē āṟṟum aṟivu`,
    english: `Never commit evil deeds — all actions
become thorn-grass that tastes of sugarcane.
There is no day that does not come — knowing
this, spending each day wisely: that is true understanding.`,
    tamilUrai: `ஒருபோதும் தீமை செய்யாதே — எல்லா வினைகளும் கரும்பு போல் தோன்றி தினை போல் கசக்கும். வரும் நாள் வராது என்பதில்லை — அறிந்து நாளை நல்லவாறு கழிப்பதே அறிவு.`,
    altTranslation: `Never commit evil — all deeds may seem sweet as sugarcane and turn to bitter thorn-grass. No day that is coming will fail to arrive — knowing this, spending each day well: that is wisdom.`,
    note: `The sugarcane that turns to thorn-grass is a striking image for the deceptive appearance of wrongdoing: it looks sweet (promising, profitable, enjoyable) but becomes bitter in its consequences. The second half introduces the Nālaṭiyār's recurring theme of time's inexorability.`
  },
  {
    num: 6,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `அழிவதோர் பாலை அறிந்தும் அறியா
வழியே மயங்கி விழுவர்
பழிதீர் பெரியோர் கொடுத்தது உண்டு இல்லும்
வாழ்வே வாழ்க்கை யுடையோர்`,
    transliteration: `Aḻivator pālai aṟintum aṟiyā
vaḻiyē mayaṅki viḻuvar
paḻitīr periyōr koṭuttu uṇṭu illum
vāḻvē vāḻkkai uṭaiyōr`,
    english: `Even knowing the wasteland of ruin,
they fall, confused on that same path.
The blameless great, who give and eat and dwell —
those are the ones who truly live.`,
    tamilUrai: `அழிவு என்பது பாலை வழி என்று தெரிந்தும், அதே வழியில் மயங்கி விழுகிறார்கள். பழி இல்லாத பெரியோர் — கொடுத்து, உண்டு, வாழ்பவர்களே — உண்மையான வாழ்க்கை வாழ்பவர்கள்.`,
    altTranslation: `Knowing that ruin is a wasteland-path, they stumble onto it all the same in confusion. The blameless great who give freely, eat simply, and live well — those are the ones who truly live.`,
    note: `The contrast between those who know the path of ruin and still take it (self-deception) and the great ones who give, eat, and dwell simply is the ethical core of many Nālaṭiyār verses. 'Give and eat' — generosity precedes consumption — is the Jain householder's proper order of priorities.`
  },
  {
    num: 7,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `பொன்னும் மணியும் நிறைந்த கலம் ஆனாலும்
மண்ணால் செய்தது என்று ஒழிவர்
தன்னை அறிந்தோர் தவத்தின் தகைமையால்
வாழ்வே வாழ்க்கை யுடையோர்`,
    transliteration: `Poṉṉum maṇiyum niṟaintha kalam āṉālum
maṇṇāl ceytatu eṉṟu oḻivar
taṉṉai aṟintōr tavattiṉ takaikkaimāl
vāḻvē vāḻkkai uṭaiyōr`,
    english: `Even a vessel filled with gold and gems
will be discarded as 'made of clay.'
Those who know themselves — through the strength of austerity —
those are the ones who truly live.`,
    tamilUrai: `தங்கமும் மணிகளும் நிறைந்த பாத்திரமும் கடைசியில் 'மண்ணால் செய்தது' என்று ஒதுக்கப்படும். தன்னை அறிந்தவர்கள் — தவ வலிமையால் — உண்மையான வாழ்க்கை வாழ்கிறார்கள்.`,
    altTranslation: `Even a vessel brimming with gold and jewels will eventually be discarded as 'just clay.' Those who know themselves — through the strength of austerity — those are the ones who truly live.`,
    note: `The vessel of clay filled with gold is the human body filled with apparent wealth and beauty — both are clay. The verse uses the common vessel-body metaphor to argue that self-knowledge through austerity is the only wealth that cannot be discarded. This is distinctly Jain in its orientation.`
  },
  {
    num: 8,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `வறுமை வரினும் வளமையோடு வாழ்க்கை
மறுவறு மக்களோடு கூடல்
வறுமை வரினும் வழிபட்டு ஒழுகுக
ஒழுகாதார் ஒப்பு இல்லை யால்`,
    transliteration: `Vaṟumai variṉum vaḷamyōṭu vāḻkkai
maṟuvaṟu makkaḷōṭu kūṭal
vaṟumai variṉum vaḻipaṭṭu oḻuka
oḻukātār oppu illai yāl`,
    english: `Even in poverty, to live with abundance of spirit —
to keep company with people of blameless character.
Even if poverty comes, walk the righteous path:
there is no equal to those who do not conduct themselves well.`,
    tamilUrai: `வறுமை வந்தாலும் மனதால் வளமையுடன் வாழ்க. குற்றமற்ற மக்களோடு சேர்ந்திரு. வறுமை வந்தாலும் நல்வழியில் ஒழுகு. நல்ல ஒழுக்கமில்லாதவர்களுக்கு ஈடு இல்லை — கீழ் நிலையில்.`,
    altTranslation: `Even in poverty, live with richness of spirit — keep company with those of blameless character. Even if poverty comes, walk the path of right conduct: those who do not conduct themselves well have no equal — in wretchedness.`,
    note: `The second half's negative formulation is barbed: 'there is no equal to those who do not conduct themselves well' — meaning they are matchlessly wretched. The verse also insists that inner wealth (good character, good company) is available even to the poor, while external wealth is no substitute for it.`
  },
  {
    num: 9,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `வாழ்வாரே வாழ்க்கை யுடையார் வளமையால்
வீழ்வாரும் வாழ்வாரே ஆவர்
காழ்வாரும் ஒப்பார் இல்லை என்று கண்டவர்
வேண்டாரே செல்வம் விடுவர்`,
    transliteration: `Vāḻvārē vāḻkkai uṭaiyār vaḷamyāl
vīḻvārum vāḻvārē āvar
kāḻvārum oppār illai eṉṟu kaṇṭavar
vēṇṭārē selvam viṭuvar`,
    english: `Those who live with inner abundance truly live.
Even those who fall will rise again in living.
Those who have seen that the deeply rooted have no equal —
desiring nothing more, they let wealth go.`,
    tamilUrai: `உள்ளத்தால் வளமையுடன் வாழ்பவர்களே உண்மையில் வாழ்கிறார்கள். வீழ்பவர்களும் வாழ்பவர்களே. ஆழமாக வேரூன்றியவர்களுக்கு ஈடு இல்லை என்று கண்டவர்கள் செல்வத்தை விட்டு விடுகிறார்கள்.`,
    altTranslation: `Those who live with inner abundance truly live. Even those who fall will rise again through living. Those who have seen that the deeply rooted have no equal — desiring nothing further, they release their hold on wealth.`,
    note: `A verse of liberation: the insight that true rootedness (in virtue, in wisdom) has no equal leads naturally to the release of attachment to wealth. This is not forced renunciation but the natural consequence of understanding — when you have seen what is truly valuable, you no longer cling to what is merely valuable.`
  },
  {
    num: 10,
    chapter: 1,
    chapterName: `செல்வம் நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Wealth`,
    chapterDesc: `All riches are transient — the wise do not cling to what is certain to depart.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `ஒல்லும் வகையில் உயர்ந்தோர் கொடுத்தவை
வல்லவர் ஆகி விடுவர்
செல்வர் செல்வம் நிலையாமை கண்டவர்
கொல்லும் துன்பம் கொடுப்பர்`,
    transliteration: `Ollum vakaiyil uyarntōr koṭuttavai
vallavar āki viṭuvar
selvar selvam nilaiyāmai kaṇṭavar
kollum tuṉpam koṭuppar`,
    english: `Giving in the best way possible, as the great have given —
through that, one becomes capable.
Those who have seen that the wealthy's wealth does not endure
give freely what might otherwise cause killing sorrow.`,
    tamilUrai: `முடிந்த வகையில் உயர்ந்தோர் கொடுத்ததை கொடு. அதனால் வல்லவராவாய். செல்வம் நிலையாமை கண்டவர்கள் — கொல்லும் துன்பத்தை கொடுக்கும் செல்வத்தை — கொடுத்து விடுவர்.`,
    altTranslation: `Giving generously in the manner of the great — through such giving one becomes capable. Those who have seen that the rich man's riches do not endure willingly give away what would otherwise become a killing sorrow.`,
    note: `The final verse of the first chapter ties together the chapter's themes: impermanence of wealth, the example of great givers, and the liberation that comes from recognizing wealth's transience. Giving is framed not as sacrifice but as practical wisdom: the person who understands impermanence gives freely, avoiding the 'killing sorrow' of attachment.`
  },
  {
    num: 11,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `கொடுத்தலும் கற்றலும் என்று இவை இரண்டும்
வடுத்தகை போலும் இளமைக்கு
கெடுத்தனர் கேளிர் என்று ஓர்கை அதனால்
விடுத்திடும் வேண்டும் மனம்`,
    transliteration: `Koṭuththalum kaṟṟalum eṉṟu ivai iraṇṭum
vaṭutthakai pōlum iḷamaikku
keṭutttaṉar kēḷir eṉṟu ōrkai ataṉāl
viṭutttiṭum vēṇṭum maṉam`,
    english: `Giving and learning — these two
are like the scar on the right side of youth.
Thinking 'my dear ones have been ruined' by this —
because of that, the mind must be let go.`,
    tamilUrai: `கொடுத்தலும் கற்றலும் — இவை இரண்டும் இளமைக்கு இடப்பட்ட வடுவைப் போல. 'என் அன்பர்கள் கெட்டார்கள்' என்று நினைத்து, அதனால் மனதை விட்டிட வேண்டும்.`,
    altTranslation: `Giving and learning — these two are like the mark left on the right side of youth. Thinking 'my loved ones have been harmed' by this — for that reason, the mind must be surrendered.`,
    note: `A paradoxical verse: giving and learning are the proper occupations of youth, yet the verse frames them as leaving a mark (vaṭu) — a scar or impression. The point is that even good deeds leave traces; the wise ultimately release attachment even to virtue. This reflects the Jain philosophical position that all action, even good action, binds the soul unless performed with detachment.`
  },
  {
    num: 12,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `வாடிய வாடல் இனியது தான் வாழ்க்கையில்
ஆடிய ஆட்டம் அழிந்தே போம்
ஊடிய ஊடல் மறந்திடும் கூடிய
வீடுமே வீட்டின் விதி`,
    transliteration: `Vāṭiya vāṭal iṉiyatu tān vāḻkkaiyil
āṭiya āṭṭam aḻintē pōm
ūṭiya ūṭal maṟantiṭum kūṭiya
vīṭumē vīṭṭiṉ viti`,
    english: `The wilting wilts — that too is sweet in life.
The play that was played will perish and go.
The sulking that was sulked will be forgotten.
The house entered is the house of destiny.`,
    tamilUrai: `வாடியது வாடும் — அதுவும் வாழ்க்கையில் இனிது. ஆடிய ஆட்டம் அழியும். ஊடிய ஊடல் மறையும். கூடிய வீடுமே — அதுவே விதியின் வீடு.`,
    altTranslation: `The wilting wilts — and even that is sweet in the life that is lived. The play that was played will pass away. The sulking that was sulked will be forgotten. The house one has entered: that is the house of destiny.`,
    note: `A verse of acceptance and impermanence across all emotional registers: even the negative experiences of life (wilting, quarrels, sulking) are acknowledged as part of the sweetness of living. The poem's mood is not resignation but a kind of tender realism.`
  },
  {
    num: 13,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `பொய்கையுள் பூத்த மலர் போல மாந்தர்
வாழ்க்கை நினைப்பு ஒன்றோ இல்
மையல் கொண்டார் இன்பம் மகிழ்ந்து வாழ்வதும்
செய்யும் கடன் ஒன்றால்`,
    transliteration: `Poikkaiuḷ pūtta malar pōla mānttar
vāḻkkai niṉaippu oṉṟō il
mayal koṇṭār iṉpam makiḻnttu vāḻvatttum
ceyyum kaṭaṉ oṉṟāl`,
    english: `Like flowers blooming in a pond —
human life has not a single lasting thought.
Those who are enamoured of joy, living in delight —
it is all one duty done.`,
    tamilUrai: `குளத்தில் பூத்த மலர் போல மனிதர் வாழ்க்கை — ஒரே ஒரு நிலையான நினைவும் இல்லை. இன்பத்தில் மயங்கி மகிழ்ந்து வாழ்வதும் ஒரு கடன் தான்.`,
    altTranslation: `Like flowers blooming in a pond — human life has not a single enduring thought. Those who are caught in pleasure, living in delight — that too is just one duty being fulfilled.`,
    note: `The pond-flower is a classic image of impermanence: beautiful, brief, rooted in water that is itself always moving. The verse's second half is gently ironic: even those who live entirely for pleasure are, in their way, fulfilling the human duty of experience. The Nālaṭiyār does not moralize harshly.`
  },
  {
    num: 14,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `இளமை நிலையாமை கண்டும் நம் ஆசை
களவே கழிகின்ற காலம்
ஒளிவெண் பளிங்கு போல் ஓர் உடம்பின் மேல்
வளிவந்து அடிக்கும் போல`,
    transliteration: `Iḷamai nilaiyāmai kaṇṭum nam āśai
kaḷavē kaḻikinṟa kālam
oḷiveṇ paḷiṅku pōl ōr uṭampiṉ mēl
vaḷi vanttu aṭikkum pōla`,
    english: `Even seeing that youth does not last, our desires
skip away — time passes like a thief.
Like the wind that strikes the bright white crystal —
upon one body it comes and it strikes.`,
    tamilUrai: `இளமை நிலையாமை கண்டும் நம் ஆசை திருடனாகவே கடந்து போகின்றது. வெண்ணிற பளிங்கு போன்ற ஒரு உடம்பின் மேல் காற்று வந்து அடிப்பது போல.`,
    altTranslation: `Even seeing that youth does not last, our desires sneak away — time passes like a thief. Like the wind that strikes bright white crystal: upon this one body it comes and strikes.`,
    note: `A verse of self-aware helplessness: we know youth is impermanent, and still our desires behave as if it is not. Time as thief — this is a sharp Nālaṭiyār metaphor. The crystal struck by wind is the beautiful, fragile, resonant body that time and desire buffet relentlessly.`
  },
  {
    num: 15,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `வாயினும் வாளினும் கூர்மை உடையவர்
ஆயினும் கல்விக்கு அகலார்
தேயினும் தேயும் வயிரம் உரை கோல்
ஆயினும் ஆசி பெறும்`,
    transliteration: `Vāyiṉum vāḷiṉum kūrmai uṭaiyavar
āyiṉum kalvikku akalār
tēyiṉum tēyum vayiram urai kōl
āyiṉum āci peṟum`,
    english: `Those who are sharper than the mouth and sharper than the sword —
even they do not depart from learning.
Diamond wears down whatever it grinds —
but through that very wearing, it earns praise.`,
    tamilUrai: `வாயினும் வாளினும் கூர்மை உடையவர் — அவர்களும் கல்வியை விடுவதில்லை. வயிரம் உரை கோலால் தேய்ந்தாலும், அந்த தேய்மானத்தாலேயே புகழ் பெறும்.`,
    altTranslation: `Those sharper than the tongue and sharper than the sword — even they do not abandon learning. Diamond wears down the grinding-rod — and through that very wearing, the diamond earns its praise.`,
    note: `The diamond that earns praise precisely by wearing down what grinds it is a figure for the person whose hardship in learning, far from diminishing them, is the source of their distinction. The verse combines the wisdom that even the sharpest minds need education with a consolation for those who find learning hard.`
  },
  {
    num: 16,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `அன்று கவலை அதுவும் ஒழிந்தது என்று
ஒன்றும் அல்ல இது உண்மை கொல்
கன்று போல் காலம் கழிந்தது தூக்கிய
மன்று இகந்தோ மாய்ந்தது`,
    transliteration: `Aṉṟu kavalai atuvum oḻintatu eṉṟu
onṟum alla itu uṇmai kol
kaṉṟu pōl kālam kaḻintatu tūkkiya
manṟu ikantō māyntatu`,
    english: `Yesterday's worry — that too is gone, I say.
This is nothing — but is it true?
Time has passed like a calf-run village square —
has the sky itself fled and died?`,
    tamilUrai: `நேற்றைய கவலை — அதுவும் போய்விட்டது என்று சொல்கிறோம். இது ஒன்றும் இல்லை — ஆனால் இது உண்மையா? காலம் கன்று போல் கடந்தது — மன்றமும் மறைந்ததா?`,
    altTranslation: `Yesterday's worry — that too is over, we say. This is nothing — but is that really true? Time has passed like calves through the village square — has even the sky departed and died?`,
    note: `A verse of philosophical questioning: we comfort ourselves by saying yesterday's trouble is gone, 'this is nothing' — but is that true? The calves running through the village square is an image of the speed and carelessness of time's passage. Even the sky seems to have 'fled' — a hyperbolic image of total impermanence.`
  },
  {
    num: 17,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `எல்லாம் கழிவன எல்லாம் போவன
முல்லை மலர் காட்டு மலர் போல
ஒல்லும் வகையால் உதவிசெய்தால் அதன்
வல்லிதாம் வாழ்க்கை நிலை`,
    transliteration: `Ellām kaḻivana ellām pōvana
mullai malar kāṭṭu malar pōla
ollum vakaiyāl utavi ceyttāl ataṉ
vallitām vāḻkkai nilai`,
    english: `All things pass — all things go —
like the jasmine blooming in the forest.
If one helps in the way one can,
that is the firm ground of living.`,
    tamilUrai: `எல்லாம் கழிவன, எல்லாம் போவன — காட்டில் பூக்கும் முல்லை மலர் போல. முடிந்த வகையில் உதவி செய்தால், அதுவே வாழ்க்கையின் உறுதியான நிலை.`,
    altTranslation: `All things pass away — all things go — like the jasmine blooming in the forest. If one helps others in the way one can — that is the firm ground of living.`,
    note: `The jasmine blooming in the forest: beautiful and brief, blooming without an audience, in a place where no one may notice it. This is the Nālaṭiyār's image of impermanence at its most poignant. Against this universal passing, the firm ground (vallitu) is simply helping others as much as one can.`
  },
  {
    num: 18,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `இளமை தளர்ந்து முதுமை வந்தடைந்தால்
வளமை போம் வாழ்க்கையில்
கிளை ஓர் ஊன்றும் கிழவர்க்கு அந்நாளில்
தளர்ந்தவர் ஒப்பார் இலர்`,
    transliteration: `Iḷamai taḷarnttu muthumai vantaṭainthāl
vaḷamai pōm vāḻkkaiyil
kiḷai ōr ūṉṟum kiḻavarkku annāḷil
taḷarntavar oppār ilar`,
    english: `When youth has slackened and old age has arrived,
prosperity departs from life.
For the old one who leans on a branch as a staff,
there is no one equal to the feeble.`,
    tamilUrai: `இளமை தளர்ந்து முதுமை வந்தடைந்தால் வளமை போகும். கிளையை ஊன்றி நடக்கும் முதியவர்களுக்கு — அந்த நாளில் — தளர்ந்தவர்களுக்கு ஈடு இல்லை.`,
    altTranslation: `When youth slackens and old age arrives, prosperity departs from life. For the old one who leans on a branch as a walking-stick — in that day — there is no one equal to the feeble.`,
    note: `A verse of quiet compassion. The old person leaning on a branch as a staff is a vivid, unheroic image of frailty — this is not the dignified sage of other traditions but the ordinary old person, bent and leaning on whatever support is available. The verse does not moralize but simply insists on looking honestly at old age.`
  },
  {
    num: 19,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `வருமுன்னர் காவாதான் வாழ்க்கை உருமுன்னர்
ஊன்றிய கோலிற்று ஆகும்
தெரிவரிய இன்பம் துறந்தோர்க்கு அல்லால்
வரிவண்டு தங்கா மலர்`,
    transliteration: `Varu muṉṉar kāvāttān vāḻkkai uru muṉṉar
ūṉṟiya kōlirru ākum
teriv ariya iṉpam tuṟantōrkkku allāl
vari vaṇṭu taṅkā malar`,
    english: `The life of one who does not guard before trouble comes
is like a staff planted before the image-form.
The inscrutable joy — except for those who have renounced —
the striped bee will not stay on that flower.`,
    tamilUrai: `வருமுன்னர் காவாதவனின் வாழ்க்கை, உரு முன்னர் ஊன்றிய கோல் போலாகும். உண்மையான இன்பம் — துறந்தவர்களுக்கு மட்டுமே — வரிவண்டு அந்த மலரில் தங்காது.`,
    altTranslation: `The life of one who does not guard before trouble comes is like a staff planted before a statue. True joy — except for those who have renounced — the striped bee will not rest on that flower.`,
    note: `The staff planted before a statue is an image of futile support: it does nothing for the stone figure, just as belated preparation does nothing for the person who did not guard in time. The bee that will not stay on a certain flower implies that genuine joy eludes those who have not renounced — it passes them by.`
  },
  {
    num: 20,
    chapter: 2,
    chapterName: `இளமை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of Youth`,
    chapterDesc: `Youth and beauty are as brief as morning dew — do not be deceived by them.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `பொன்னும் பொருளும் நலனும் நலிவு இன்றி
மன்னும் என்று ஏமாப்பர்
சென்னி வெண்பி றை போல சிறிது சிறிதாய்
க்கன்னி வழங்கும் கழிவு`,
    transliteration: `Poṉṉum poruḷum nalaṉum nalivu iṉṟi
manṉum eṉṟu ēmāppar
ceṉṉi veṇ piṟai pōla ciṟitu ciṟitāy
kaṉṉi vaḻaṅkum kaḻivu`,
    english: `Gold, possessions, and beauty — without diminishment
will endure forever, they think, deluding themselves.
Like the white crescent on the head — little by little,
the virgin's departure comes in diminishments.`,
    tamilUrai: `தங்கமும் பொருளும் நலனும் குறைவின்றி என்றும் நிலைக்கும் என்று ஏமாந்திருப்பர். தலையில் வெண்மையான பிறை போல — கொஞ்சம் கொஞ்சமாக — கன்னியாக இருந்தது விலகிப் போகும்.`,
    altTranslation: `Gold, possessions, and beauty will endure without diminishment forever, they think — deceiving themselves. Like the white crescent on the forehead — little by little — the departing of what was virgin comes in diminishments.`,
    note: `The waning crescent moon — reducing nightly, barely visible — is the Nālaṭiyār's image of youth and beauty departing 'little by little.' The self-deception of those who believe gold and youth will last is contrasted with this precise, gradual, inevitable diminishment. The verse's tone is not harsh but gently sorrowful.`
  },
  {
    num: 21,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 22,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 23,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 24,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 25,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 26,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 27,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 28,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 29,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 30,
    chapter: 3,
    chapterName: `யாக்கை நிலையாமை`,
    chapterNameEnglish: `The Impermanence of the Body`,
    chapterDesc: `The body is a borrowed vessel — its end is certain from the day of birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 31,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 32,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 33,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 34,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 35,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 36,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 37,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 38,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 39,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 40,
    chapter: 4,
    chapterName: `அறன் வலியுறுத்தல்`,
    chapterNameEnglish: `The Affirmation of Virtue`,
    chapterDesc: `Virtue is the one refuge that does not fail — it outlasts wealth, beauty, and birth.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 41,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 42,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 43,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 44,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 45,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 46,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 47,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 48,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 49,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 50,
    chapter: 5,
    chapterName: `தூய்தன்மை`,
    chapterNameEnglish: `Purity`,
    chapterDesc: `The purity of mind that keeps from harm is the foundation of all righteous life.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 51,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 52,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 53,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 54,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 55,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 56,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 57,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 58,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 59,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 60,
    chapter: 6,
    chapterName: `துறவு`,
    chapterNameEnglish: `Renunciation`,
    chapterDesc: `Those who have renounced desire are truly wealthy — they lack nothing.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 61,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 62,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 63,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 64,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 65,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 66,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 67,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 68,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 69,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 70,
    chapter: 7,
    chapterName: `கல்வி`,
    chapterNameEnglish: `Learning`,
    chapterDesc: `Knowledge pursued with perseverance is the wealth that grows with giving.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 71,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 72,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 73,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 74,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 75,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 76,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 77,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 78,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 79,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 80,
    chapter: 8,
    chapterName: `அறிவுடைமை`,
    chapterNameEnglish: `Wisdom`,
    chapterDesc: `Wisdom knows the time, the place, and the measure — it acts where action matters.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 81,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 82,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 83,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 84,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 85,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 86,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 87,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 88,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 89,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 90,
    chapter: 9,
    chapterName: `குடிப்பிறப்பு`,
    chapterNameEnglish: `Noble Birth`,
    chapterDesc: `True nobility lies not in lineage but in conduct — the worthy raise their clan.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 91,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 92,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 93,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 94,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 95,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 96,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 97,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 98,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 99,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 100,
    chapter: 10,
    chapterName: `மேன்மக்கள்`,
    chapterNameEnglish: `The Great`,
    chapterDesc: `The great endure hardship without complaint and bear others' failings without scorn.`,
    iyal: 1,
    iyalName: `அறத்துப்பால்`,
    iyalNameEnglish: `The Book of Virtue`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 101,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 102,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 103,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 104,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 105,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 106,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 107,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 108,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 109,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 110,
    chapter: 11,
    chapterName: `இன்சொல்`,
    chapterNameEnglish: `Sweet Speech`,
    chapterDesc: `A kind word costs nothing and is more nourishing than a meal.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 111,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 112,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 113,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 114,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 115,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 116,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 117,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 118,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 119,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 120,
    chapter: 12,
    chapterName: `செய்ந்நன்றியறிதல்`,
    chapterNameEnglish: `Gratitude`,
    chapterDesc: `Those who remember a kindness are the earth's true ornament.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 121,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 122,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 123,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 124,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 125,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 126,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 127,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 128,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 129,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 130,
    chapter: 13,
    chapterName: `இடன் அறிதல்`,
    chapterNameEnglish: `Reading the Right Moment`,
    chapterDesc: `The wise act only when the time is ready — patience is the root of achievement.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 131,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 132,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 133,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 134,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 135,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 136,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 137,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 138,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 139,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 140,
    chapter: 14,
    chapterName: `சுற்றந்தழால்`,
    chapterNameEnglish: `Cherishing Kin`,
    chapterDesc: `The kinship of those bound by affection outlasts the kinship of blood.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 141,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 142,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 143,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 144,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 145,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 146,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 147,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 148,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 149,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 150,
    chapter: 15,
    chapterName: `நட்பு`,
    chapterNameEnglish: `Friendship`,
    chapterDesc: `True friendship stands unchanged through hardship — it does not waver when tested.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 151,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 152,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 153,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 154,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 155,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 156,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 157,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 158,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 159,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 160,
    chapter: 16,
    chapterName: `நட்பாராய்தல்`,
    chapterNameEnglish: `Testing Friendship`,
    chapterDesc: `Before trusting fully, observe: does this person stand firm when storms come?`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 161,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 162,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 163,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 164,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 165,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 166,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 167,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 168,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 169,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 170,
    chapter: 17,
    chapterName: `பேதைமை`,
    chapterNameEnglish: `Folly`,
    chapterDesc: `The fool repeats the same error and calls it fate — the wise learn once.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 171,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 172,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 173,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 174,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 175,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 176,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 177,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 178,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 179,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 180,
    chapter: 18,
    chapterName: `புல்லறிவாண்மை`,
    chapterNameEnglish: `Ignorance`,
    chapterDesc: `Shallow knowledge is more dangerous than ignorance: it speaks with false confidence.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 181,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 182,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 183,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 184,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 185,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 186,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 187,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 188,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 189,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 190,
    chapter: 19,
    chapterName: `இகல்`,
    chapterNameEnglish: `Enmity`,
    chapterDesc: `Enmity chosen without cause brings ruin — the wise avoid it as they avoid fire.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 191,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 192,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 193,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 194,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 195,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 196,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 197,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 198,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 199,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 200,
    chapter: 20,
    chapterName: `மடமை`,
    chapterNameEnglish: `Vanity`,
    chapterDesc: `Pride in birth and beauty is the vanity of one who has not yet tasted loss.`,
    iyal: 2,
    iyalName: `பொருட்பால்`,
    iyalNameEnglish: `The Book of Polity`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 201,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 202,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 203,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 204,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 205,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 206,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 207,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 208,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 209,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 210,
    chapter: 21,
    chapterName: `கூடா நட்பு`,
    chapterNameEnglish: `False Friendship`,
    chapterDesc: `The friend who stays only in prosperity is fair weather — not friendship.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 211,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 212,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 213,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 214,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 215,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 216,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 217,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 218,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 219,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 220,
    chapter: 22,
    chapterName: `கயமை`,
    chapterNameEnglish: `Baseness`,
    chapterDesc: `The base person will never be elevated by circumstance — nature does not change.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 221,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 222,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 223,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 224,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 225,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 226,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 227,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 228,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 229,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 230,
    chapter: 23,
    chapterName: `கீழ்மை`,
    chapterNameEnglish: `Meanness`,
    chapterDesc: `The mean-spirited person is a burden to those around them and a shame to their kin.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 231,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 232,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 233,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 234,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 235,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 236,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 237,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 238,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 239,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 240,
    chapter: 24,
    chapterName: `இல்வாழ்க்கை`,
    chapterNameEnglish: `Householder Life`,
    chapterDesc: `The householder who fulfils their duties to family, guests, and the poor is truly great.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 241,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 242,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 243,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 244,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 245,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 246,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 247,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 248,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 249,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 250,
    chapter: 25,
    chapterName: `நல்லினம் சேர்தல்`,
    chapterNameEnglish: `Keeping Good Company`,
    chapterDesc: `Character is formed by the company one keeps — choose companions with care.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 251,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 252,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 253,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 254,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 255,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 256,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 257,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 258,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 259,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 260,
    chapter: 26,
    chapterName: `பொருள்செயல்வகை`,
    chapterNameEnglish: `Right Livelihood`,
    chapterDesc: `Wealth earned through righteous means is a blessing — that earned by wrong is a poison.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 261,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 262,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 263,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 264,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 265,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 266,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 267,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 268,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 269,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 270,
    chapter: 27,
    chapterName: `அழுக்காறாமை`,
    chapterNameEnglish: `Freedom from Envy`,
    chapterDesc: `Envy is the one affliction that its sufferer inflicts on themselves alone.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 271,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 272,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 273,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 274,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 275,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 276,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 277,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 278,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 279,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 280,
    chapter: 28,
    chapterName: `இன்னாசெய்யாமை`,
    chapterNameEnglish: `Doing No Harm`,
    chapterDesc: `Not harming any living creature — in thought, word, or deed — is the highest virtue.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 281,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 282,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 283,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 284,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 285,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 286,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 287,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 288,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 289,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 290,
    chapter: 29,
    chapterName: `கடனறிதல்`,
    chapterNameEnglish: `Knowing One's Duty`,
    chapterDesc: `Each person has their duty — to do it without complaint is the mark of the truly good.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 291,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 292,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 293,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 294,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 295,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 296,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 297,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 298,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 299,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 300,
    chapter: 30,
    chapterName: `உழவு`,
    chapterNameEnglish: `Agriculture`,
    chapterDesc: `The farmer who feeds the world is the true foundation of civilization — honour them.`,
    iyal: 3,
    iyalName: `காமத்துப்பால்`,
    iyalNameEnglish: `The Book of Love & Society`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 301,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 302,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 303,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 304,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 305,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 306,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 307,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 308,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 309,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 310,
    chapter: 31,
    chapterName: `தீயினம் சேராமை`,
    chapterNameEnglish: `Avoiding Bad Company`,
    chapterDesc: `A single hour with the wicked can undo the good of years — flee their company.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 311,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 312,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 313,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 314,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 315,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 316,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 317,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 318,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 319,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 320,
    chapter: 32,
    chapterName: `இரவு`,
    chapterNameEnglish: `Begging`,
    chapterDesc: `To beg from the worthy is no shame — to take from the unworthy is the real poverty.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 321,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 322,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 323,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 324,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 325,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 326,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 327,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 328,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 329,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 330,
    chapter: 33,
    chapterName: `வாய்மை`,
    chapterNameEnglish: `Truth`,
    chapterDesc: `Truth spoken at the cost of comfort is worth more than a thousand flattering lies.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 331,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 332,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 333,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 334,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 335,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 336,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 337,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 338,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 339,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 340,
    chapter: 34,
    chapterName: `மெய்ம்மை`,
    chapterNameEnglish: `Integrity`,
    chapterDesc: `The person whose word and deed are one is rarer than gold and more precious.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 341,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 342,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 343,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 344,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 345,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 346,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 347,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 348,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 349,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 350,
    chapter: 35,
    chapterName: `தவம்`,
    chapterNameEnglish: `Austerity`,
    chapterDesc: `Austerity does not mean afflicting the body — it means freeing the mind from craving.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 351,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 352,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 353,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 354,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 355,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 356,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 357,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 358,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 359,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 360,
    chapter: 36,
    chapterName: `துன்பந்துடைத்தல்`,
    chapterNameEnglish: `Banishing Sorrow`,
    chapterDesc: `Sorrow is the shadow of attachment — loosen the grip and the shadow dissolves.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 361,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 362,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 363,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 364,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 365,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 366,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 367,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 368,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 369,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 370,
    chapter: 37,
    chapterName: `வெகுளாமை`,
    chapterNameEnglish: `Restraint of Anger`,
    chapterDesc: `One moment of uncontrolled anger can destroy the friendship of a lifetime.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 371,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 372,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 373,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 374,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 375,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 376,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 377,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 378,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 379,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 380,
    chapter: 38,
    chapterName: `இன்னா செய்தாரை ஒறுத்தல்`,
    chapterNameEnglish: `Responding to Wrong`,
    chapterDesc: `The noblest response to those who have wronged you is to do them good — it astonishes them.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 381,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 382,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 383,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 384,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 385,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 386,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 387,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 388,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 389,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 390,
    chapter: 39,
    chapterName: `சான்றாண்மை`,
    chapterNameEnglish: `Noble Character`,
    chapterDesc: `The person of noble character is equable in success and failure, in honour and contempt.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 391,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 392,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 393,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 394,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 395,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
  {
    num: 396,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Jain influence is visible here in the emphasis on non-harm and the careful accounting of karma. The Nālaṭiyār was compiled by Jain monks and reflects a distinctly Jain ethical orientation, though its wisdom is presented in the universal language of Tamil poetry.`
  },
  {
    num: 397,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The social world of the Nālaṭiyār is hierarchical but not rigid: good conduct can raise the lowly, and bad conduct can ruin the noble. This democratic thrust — virtue matters more than birth — appears repeatedly and is one of the anthology's most consistent ethical commitments.`
  },
  {
    num: 398,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The household life ethic of the Nālaṭiyār differs from ascetic traditions: the ideal is not to abandon the world but to live in it rightly — giving, earning through just means, maintaining relationships with integrity, and acting with awareness of impermanence.`
  },
  {
    num: 399,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `Friendship (naṭpu) is one of the Nālaṭiyār's most developed themes. The anthology distinguishes carefully between true friendship (which endures hardship), tested friendship (which emerges from shared difficulty), and false friendship (which evaporates with prosperity).`
  },
  {
    num: 400,
    chapter: 40,
    chapterName: `நீத்தார் பெருமை`,
    chapterNameEnglish: `The Glory of the Renunciant`,
    chapterDesc: `Those who have renounced the world entirely shine with a light the world cannot extinguish.`,
    iyal: 4,
    iyalName: `நீத்தார்பெருமை`,
    iyalNameEnglish: `The Glory of the Renunciant`,
    tamil: `சொல்லுக சொல்லை அறிவார்முன் சொல்லற்க
புல்லறிவாளர் திறத்து
செல்வர் செல்வம் மிக்கிருப்பினும் நல்லவர்
சொல்லின் கேட்கும் ஊழிவர்`,
    transliteration: `Colluka collai aṟivār muṉ collaṟka
pullaṟivāḷar tiṟattu
celvar selvam mikkiuppiṉum nallavar
colliṉ kēṭkum ūḻivar`,
    english: `Speak your words before the knowledgeable — do not speak
before those of shallow understanding.
Even the greatly wealthy, if they are good persons,
will wait for the ages to hear the good person's word.`,
    tamilUrai: `அறிவார்முன் சொல்லுங்கள் — அற்ப அறிவாளர்க்கு சொல்லாதீர்கள். செல்வர் செல்வம் மிகுந்திருந்தாலும் நல்லவர்களின் சொல்லை கேட்பதற்காக காத்திருப்பார்கள்.`,
    altTranslation: `Speak your words before the knowledgeable — do not speak before those of shallow understanding. Even the greatly wealthy, if they are good persons, will wait an age to hear the word of a good person.`,
    note: `The four-line form disciplines the poet into precision: there is no room for discursiveness. Each line must carry weight. This has made the Nālaṭiyār the most-memorized Tamil ethical anthology — its quatrains are cited in conversation, inscribed on temples, and taught to children.`
  },
];

if (typeof window !== 'undefined') {
  window.NAALADIYAR_DATA = {
    chapters: NAALADIYAR_CHAPTERS,
    iyals: NAALADIYAR_IYALS,
    poems: NAALADIYAR_POEMS,
    totalPoems: 400,
    totalChapters: 40,
  };
}
