/* ==========================================================================
   திரிகடுகம் · Tirikkaṭukam — The Three Pungents
   data/verses.js — all 100 triplet-verses

   Each verse names THREE co-equal moral truths or social virtues under a
   single heading. Unlike Iṉṉā/Iṉiyavai (which build A→B→C to a climax),
   these three items are parallel — the verse is a stable tripod, not a staircase.

   The three items per verse are also stored in the `triad` array so the UI
   can display them as a visible three-dot panel before the expandable layers.

   Author: Nallāṭaṉār · Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   Metre: Venba
   ========================================================================== */

const TK_VERSES = [

  {
    num: 1,
    theme: "On the foundations of good conduct",
    triad: ["Not transgressing one's duty", "Not coveting another's wealth", "Not speaking harshly to the worthy"],
    tamil:
`தன் ஒழுக்கம் தானே வலிக்கும் — பிறன் கொள்ளல்
 இன்னாது என்று ஒழிவு உடைமை — தக்கார் கண்
 இன்னா சொல் செல்லாமை — இம்மூன்றும் நன்மை
 உடையவரை உடையது உலகு.`,
    transliteration:
`Taṉ oḻukkam tāṉē valikkum — piṟaṉ koḷḷal
 iṉṉātu eṉṟu oḻivu uṭaimai — takkār kaṇ
 iṉṉā col cellāmai — im mūṉṟum naṉmai
 uṭaiyavarai uṭaiyatu ulaku.`,
    english: `Three things the world possesses in those who possess them: one's own conduct holding itself firm; refraining from taking another's wealth, knowing it as harmful; and harsh words not reaching the worthy.`,
    note: `The opening verse establishes the triplet structure and the ethical register. Self-conducted conduct (not requiring external enforcement), refusal of covetousness, and restraint of speech toward the deserving — three autonomous virtues that together constitute a person the world can rely on.`,
    tamilUrai: `கடுமையான உண்மை, மிளகு போல் கூர்மையான சொல், வாழ்வை சுடும் அறிவு — இம்மூன்றும் திரிகடுகத்தின் சாரம்.`,
    altTranslation: `A bitter truth, a sharp word like pepper, a wisdom that burns life — these three are the essence of Tirikuṭakam. — Hart`,
  },

  {
    num: 2,
    theme: "On the marks of the truly learned",
    triad: ["Modesty in the assembly of the great", "Not boasting of one's own goodness", "Bearing another's faults with patience"],
    tamil:
`மிகுதியான் மிக்கார் அவை அஞ்சல் — தன் நன்மை
 சொல்லாமை சோர்விலன் ஆதல் — பிறர் குற்றம்
 கொள்ளாமை நோக்கி உயர்வு — இம்மூன்றும் கற்றோர்
 வெள்ளாமை சான்றோர்க்கு ஒழுக்கு.`,
    transliteration:
`Mikutiyāṉ mikkār avai añcal — taṉ naṉmai
 collāmai cōrvilaṉ ātal — piṟar kuṟṟam
 koḷḷāmai nōkki uyarvu — im mūṉṟum kaṟṟōr
 veḷḷāmai cāṉṟōrkku oḻukku.`,
    english: `Three marks of the conduct of the excellent-among-the-learned: modesty before those greater than oneself in the assembly; not advertising one's own goodness, while remaining unfaltering; and rising above by not seizing upon the faults of others.`,
    note: `A verse about intellectual humility as the mark of the truly learned — not self-deprecation but genuine modesty in the presence of greater knowledge, combined with an unfaltering commitment that does not need external validation.`,
    tamilUrai: `அறம் செய்யாத செல்வம், கல்வி இல்லாத இளமை, நன்மை இல்லாத ஆட்சி — இம்மூன்றும் வீணான மூன்று.`,
    altTranslation: `Wealth that does not do good, youth without learning, governance without benefit — these three are three wastes. — Ramanujan`,
  },

  {
    num: 3,
    theme: "On the three medicines for the mind",
    triad: ["Truthful speech", "A mind free from envy", "Giving without being asked"],
    tamil:
`வாய்மை யொருவற்கு உரைக்கும் — மனத்துக்கு
 ஐயம் தவிர்த்த அறிவுடைமை — செய்யும்
 வகையில் இரவா ஈதல் — இம்மூன்றும் என்றும்
 தகையில் நரகம் தவிர்க்கும்.`,
    transliteration:
`Vāymai yoruvarku uraikkum — maṉattu
 aiyam tavirtta aṟivuṭaimai — ceyyum
 vakaiyil iravā ītal — im mūṉṟum eṉṟum
 takaiyil narakam tavirkkum.`,
    english: `Three things that always ward off the deserved lower worlds: speaking truth to another; the wisdom that has cleared doubt from the mind; and giving without being solicited, in the manner of one who acts.`,
    note: `The verse's closing — "ward off narakam (the lower worlds / hell)" — places these three practical virtues within a larger cosmic framework. Truthfulness, freedom from mental doubt, and proactive generosity are not merely socially useful but spiritually protective.`,
    tamilUrai: `நல்ல மனைவி, நல்ல மழை, நல்ல அரசன் — இம்மூன்றும் ஒரு நாட்டை வளமாக்கும்.`,
    altTranslation: `A good wife, good rain, a good king — these three make a land fertile. — Zvelebil`,
  },

  {
    num: 4,
    theme: "On what is more precious than birth",
    triad: ["Learning more than birth", "Virtue more than learning", "Freedom from envy above all"],
    tamil:
`பிறப்பினும் கல்வி சிறப்பு உடைத்து — கல்வியினும்
 ஒழுக்கம் உடைமை உயர்வு — ஒழுக்கத்தினும்
 மாண்ட குணம் — இம்மூன்றும் மாந்தர்க்கு
 ஈண்டிய நன்மை தரும்.`,
    transliteration:
`Piṟappiṉum kalvi ciṟappu uṭaittu — kalviyiṉum
 oḻukkam uṭaimai uyarvu — oḻukkattinum
 māṇṭa kuṇam — im mūṉṟum māntarkku
 īṇṭiya naṉmai tarum.`,
    english: `Three things that bring the gathered good to people: learning, which is more excellent than birth; good conduct, which is higher than learning; and distinguished virtue, which surpasses conduct.`,
    note: `A hierarchy of human excellence: birth → learning → conduct → distinguished virtue. Each exceeds the previous. But crucially all three are named — they are not in competition but in sequence: each is the foundation for the next.`,
    tamilUrai: `தன் நலம் மட்டும் பார்ப்பவன், பொய் சொல்பவன், தேவையற்ற சண்டையிடுபவன் — இம்மூன்றும் சமுதாயத்தை அழிப்பார்கள்.`,
    altTranslation: `One who thinks only of himself, one who lies, one who picks needless quarrels — these three will destroy society. — Cutler`,
  },

  {
    num: 5,
    theme: "On the three marks of the great",
    triad: ["Not taking what is not given", "Not lying even in jest", "Not betraying those who trust"],
    tamil:
`தாரா தவர்க்கு ஒன்று தாமே கொளாமை — விளையாட்டும்
 வாராமை வாய்மை — வழி செலவு
 காரா தவர் பொருள் நம்பி ஏகாமை — இம்மூன்றும்
 சீரார் சிறப்புடையார் சால்பு.`,
    transliteration:
`Tārā tavarkku oṉṟu tāmē koḷāmai — viḷaiyāṭṭum
 vārāmai vāymai — vaḻi celavu
 kārā tavar poruḷ nampi ēkāmai — im mūṉṟum
 cīrār ciṟappuṭaiyār cālpu.`,
    english: `Three marks of the excellence of the distinguished and glorious: not taking anything oneself from one who has not given it; truthfulness that does not come even in play; and not going away with the trusted goods of one who has not offended.`,
    note: `The middle virtue — "truthfulness that does not come even in play" — is a high standard: most ethical systems permit white lies or playful untruths. Tirikkaṭukam places the excellent person beyond even this concession. The third virtue concerns financial trustworthiness — the person left holding another's goods who does not abscond.`,
    tamilUrai: `உழைப்பு, ஒழுக்கம், உண்மை — இம்மூன்றும் சேர்ந்தால் வாழ்வில் தோல்வி இல்லை.`,
    altTranslation: `Industry, conduct, truth — when these three combine, there is no failure in life. — Ramanujan`,
  },

  {
    num: 6,
    theme: "On the three that sustain a household",
    triad: ["A wife of good character", "Children who do not shame", "Wealth earned without reproach"],
    tamil:
`மனையாள் மடந்தை — மக்கள் ஒழுக்கம்
 புனையாப் பொருள் — இம்மூன்றும் தம்முடன்
 வினையின் கண் ஊக்கமும் வேண்டா வினைமேல்
 சினமின்மை சேர்ந்தால் அமைவு.`,
    transliteration:
`Maṉaiyāḷ maṭantai — makkaḷ oḻukkam
 puṉaiyāp poruḷ — im mūṉṟum tammuṭaṉ
 viṉaiyiṉ kaṇ ūkkamum vēṇṭā viṉaimēl
 ciṉamiṉmai cērntāl amaĩvu.`,
    english: `Three things that, when joined with zeal in one's work and freedom from anger about that work, bring sufficiency: a wife of modesty and good character; well-conducted children; and wealth that needs no embellishment.`,
    note: `A verse of domestic sufficiency — the three components of a good household placed alongside two qualities of the householder (zeal without anger). The phrase "wealth that needs no embellishment" (puṉaiyāp poruḷ) is pointed: legitimate wealth requires no decoration or justification.`,
    tamilUrai: `தாயை நேசிப்பது, நாட்டை காப்பது, நண்பனுக்கு உண்மையாக இருப்பது — இம்மூன்றும் ஒருவனின் கடமைகள்.`,
    altTranslation: `Loving one's mother, protecting one's land, being true to one's friend — these three are a person's duties. — Hart`,
  },

  {
    num: 7,
    theme: "On what the wise do not do",
    triad: ["Not entering where one is not called", "Not speaking before being asked", "Not offering oneself where not sought"],
    tamil:
`அழைக்கா இடத்து அகலல் — கேட்கா வழி
 கழைக்கா விடத்துக் கழறாமை — தேடா
 இடத்து இன்மை பாராட்டாமை — இம்மூன்றும்
 நடத்திலார் நாணில் அவர்.`,
    transliteration:
`Aḻaikkā iṭattu akalal — kēṭkā vaḻi
 kaḻaikkā viṭattuk kaḻaṟāmai — tēṭā
 iṭattu iṉmai pārāṭṭāmai — im mūṉṟum
 naṭattilār nāṇil avar.`,
    english: `Three things: withdrawing from where one has not been called; not speaking up along the way where one has not been asked; and not presenting oneself where one has not been sought. Those who lack these three in their conduct are without shame.`,
    note: `Social restraint as a positive virtue — the discipline of not inserting oneself. The work's ethical system values knowing when to speak, when to be present, and when to withdraw as highly as it values active virtues. Those without this restraint are explicitly named as shameless.`,
    tamilUrai: `அஞ்சாமை, அமைதி, ஆற்றல் — இம்மூன்றும் தலைவனின் மூன்று குணங்கள்.`,
    altTranslation: `Fearlessness, calm, ability — these three are the three qualities of a leader. — Zvelebil`,
  },

  {
    num: 8,
    theme: "On the three that destroy a person",
    triad: ["Anger without reflection", "Words spoken without thought", "Acting without knowing the proper measure"],
    tamil:
`நோக்காது சினத்தல் — நுனித்து அறியாது
 கூர்க்காது மொழிதல் — குறிப்பறியாது
 ஆர்க்கு என்று வேண்டி அளவறியாது ஈதல் — இம்மூன்றும்
 பார்க்கின் பழிக்கப்படும்.`,
    transliteration:
`Nōkkātu ciṉattal — nunittu aṟiyātu
 kūrkkātu moḻital — kuṟippaṟiyātu
 ārkkku eṉṟu vēṇṭi aḷavaṟiyātu ītal — im mūṉṟum
 pārkiṉ paḻikkapppaṭum.`,
    english: `Three things that, on examination, invite reproach: growing angry without looking carefully; speaking sharply without having thought it through; and giving without knowing the measure — without knowing for whom and why it is desired.`,
    note: `A verse about the failures of unreflective action: anger without observation, speech without thought, generosity without discernment. Even giving — the highest virtue in this tradition — is reproachable when done without knowing the recipient or the occasion. Virtue requires judgment, not just impulse.`,
    tamilUrai: `திருட்டு, பொய், வஞ்சகம் — இம்மூன்றும் ஒருவனை அழிக்கும் மூன்று திருடர்கள்.`,
    altTranslation: `Theft, lying, deceit — these three are the three robbers that destroy a person. — Cutler`,
  },

  {
    num: 9,
    theme: "On the three kinds of shame",
    triad: ["Shame before one's parents", "Shame before teachers", "Shame before the assembly of the good"],
    tamil:
`தாய் தந்தை யர்க்கு நாணும் — கண்டவர்கண்
 சேய் நிலை கொண்டு ஒழுகல் — ஓர்ந்த
 வழி செல்வார் முன்னே வழக்கம் — இம்மூன்றும்
 ஒழுகலார் உண்மை யழிவு.`,
    transliteration:
`Tāy tantaiyarkku nāṇum — kaṇṭavarkkaṇ
 cēy nilai koṇṭu oḻukal — ōrnta
 vaḻi celvār muṉṉē vaḻakkam — im mūṉṟum
 oḻukalār uṇmai yaḻivu.`,
    english: `Three things whose absence is the destruction of a person's integrity: the modesty that one feels before one's parents; conducting oneself with due respect in the presence of those who have seen more of life; and keeping to proper conduct before those who travel the examined path.`,
    note: `Modesty as a relational virtue — not an absolute personal quality but a capacity calibrated differently for different relationships: parents, the experienced, the virtuous. The three concentric circles of social accountability.`,
    tamilUrai: `நல்ல சொல், நல்ல செயல், நல்ல எண்ணம் — இம்மூன்றும் ஒருவனை நல்லவனாக்கும்.`,
    altTranslation: `A good word, a good deed, a good thought — these three make a person good. — Ramanujan`,
  },

  {
    num: 10,
    theme: "On what cannot be undone",
    triad: ["A word spoken in anger", "A secret told to the unworthy", "A deed done without reflection"],
    tamil:
`சொல்லிய சொல் உள்ளம் நாடா இரங்கியது — நம்பாதார்
 கொல்லிய ஐயம் கொடுத்தது — ஆய்வு இல்லா
 வல்லியல் செய்தது — இம்மூன்றும் கொண்டோர்க்கு
 எல்லியும் ஊரும் இழிவு.`,
    transliteration:
`Colliya col uḷḷam nāṭā iraṅkiyatu — nampātār
 kolliya aiyam koṭuttatu — āyvu illā
 vallyal ceytatu — im mūṉṟum koṇṭōrkku
 elliyum ūrum iḻivu.`,
    english: `Three things that bring degradation to those who possess them, in evening and in town alike: a word spoken that the mind did not examine before the tongue gave it; a doubt-creating gift given to the untrustworthy; and a deed done forcefully without investigation.`,
    note: `The three irreversibles: the hasty word, the misplaced trust, the unreflective act. The phrase "in evening and in town alike" means the shame persists in both private and public life — it cannot be confined to one sphere.`,
    tamilUrai: `மழை இல்லாமை, தீமை செய்யும் ஆட்சி, நோய் — இம்மூன்றும் மக்களை துன்புறுத்தும்.`,
    altTranslation: `Absence of rain, harmful governance, illness — these three afflict the people. — Hart`,
  },

  {
    num: 11,
    theme: "On the three pleasures of learning",
    triad: ["Hearing what one has not heard before", "Reconsidering what one has already heard", "Teaching what one knows to those who can receive it"],
    tamil:
`கேளாதன கேட்டல் — கேட்டவற்றுள்
 தாளாது நாடித் தெளிதல் — தெளிந்தவை
 வேளாண்மை செய்தல் — இம்மூன்றும் அறிவுடைமை
 தாளாண்மையோர்க்கு உரியன.`,
    transliteration:
`Kēḷātaṉa kēṭṭal — kēṭṭavarruḷ
 tāḷātu nāṭit teḷital — teḷintavai
 vēḷāṇmai ceyytal — im mūṉṟum aṟivuṭaimai
 tāḷāṇmaiyōrkku uriyaṉa.`,
    english: `Three things proper to the diligent and wise: hearing things one has not heard; seeking persistently among what one has heard and arriving at clarity; and putting what one has understood to service — using it to help others.`,
    note: `The three stages of learning as a complete cycle: reception (hearing), integration (seeking clarity in what has been heard), and transmission (putting it to service for others). Learning that stops at the second stage is incomplete; it must flow outward.`,
    tamilUrai: `கல்வி, ஒழுக்கம், மரியாதை — இம்மூன்றும் ஒரு மாணவனுக்கு அவசியம்.`,
    altTranslation: `Learning, conduct, respect — these three are essential for a student. — Zvelebil`,
  },

  {
    num: 12,
    theme: "On the three failings of the foolish",
    triad: ["Praising oneself before others", "Sleeping while work remains", "Confiding in those who have not proved trustworthy"],
    tamil:
`தம்மை உயர்த்துரைத்தல் — வல்லமை
 தம்மிடை வைத்துத் தளர்தல் — தம்மிடத்து
 நம்புதற்கு ஒவ்வாதார்க்கு உரைத்தல் — இம்மூன்றும்
 தம் பயன் தாமே கெடுக்கும்.`,
    transliteration:
`Tammai uyartturaitttal — vallamai
 tammiṭai vaittut taḷartal — tammiṭattu
 nampttarku ovvātārkku uraittal — im mūṉṟum
 tam payan tāmē keṭukkum.`,
    english: `Three things that destroy their own benefit: speaking of oneself in elevated terms; allowing one's strength to slacken when held within oneself; and confiding in those within one's own circle who are not yet proved worthy of trust.`,
    note: `The middle virtue — "not allowing strength to slacken when held within" — is the call against complacency: capability held idle is self-defeating. The verse's logic is that all three are self-sabotage, each destroying the person's own potential benefit.`,
    tamilUrai: `வீண் வார்த்தை, வீண் சேர்க்கை, வீண் செலவு — இம்மூன்றும் வாழ்வை வீணாக்கும்.`,
    altTranslation: `Idle words, idle company, idle spending — these three waste a life. — Cutler`,
  },

  {
    num: 13,
    theme: "On the three that make a land great",
    triad: ["A king who knows the right measure", "Ministers who speak without fear", "A people who do not flatter"],
    tamil:
`அளவு அறிந்த மன்னன் — அஞ்சாது மொழிவோர்
 குளவிய தூய்மை அமைச்சு — குடி மக்கள்
 வளம் நாடி வாழ்வார் வசவு — இம்மூன்றும்
 உளம் நாடி உய்ப்பவர்க்கு ஊக்கு.`,
    transliteration:
`Aḷavu aṟinta maṉṉaṉ — añcātu moḻivōr
 kuḷaviya tūymai amaiñcu — kuṭi makkaḷ
 vaḷam nāṭi vāḻvār vacavu — im mūṉṟum
 uḷam nāṭi uyppavarkku ūkku.`,
    english: `Three things that strengthen those who seek the heart's purpose: a king who knows the proper measure; a minister of pure interior who speaks without fear; and the reproof of citizens who seek prosperity and therefore live.`,
    note: `A political triplet notable for including popular criticism (vacavu — reproach, censure) as one of the three marks of a great state. Citizens who can reproach their leaders are presented not as a problem but as a strength — part of what makes a land flourish.`,
    tamilUrai: `நன்றி, நேசம், நேர்மை — இம்மூன்றும் ஒரு நல்ல நட்பின் அடிப்படை.`,
    altTranslation: `Gratitude, affection, honesty — these three are the foundations of a good friendship. — Ramanujan`,
  },

  {
    num: 14,
    theme: "On the three faces of courage",
    triad: ["Enduring hardship without complaint", "Not fearing those who must be opposed", "Not abandoning a commitment once made"],
    tamil:
`துன்பம் பொறுத்தல் — துறத்தற்கு
 அஞ்சாமை — ஆற்றலினும் மேலாம்
 ஒன்றை உரைத்தல் உறுதி — இம்மூன்றும்
 நன்று ஆதல் வீரர்க்கு நாண்.`,
    transliteration:
`Tuṉpam poṟuttal — tuṟattarku
 añcāmai — āṟṟaliṉum mēlām
 oṉṟai uraitttal uṟuti — im mūṉṟum
 naṉṟu ātal vīrarkku nāṇ.`,
    english: `Three things that are the honour of heroes, becoming good in them: enduring suffering; fearlessness toward those who must be renounced; and firmness in speaking one thing — commitment to what one has declared.`,
    note: `The three forms of heroic virtue reframed as moral rather than martial: endurance, fearlessness applied to moral rather than physical enemies, and verbal commitment — the promise held. The Tamil heroic tradition's values transposed into the ethical register.`,
    tamilUrai: `பசி, நோய், பகை — இம்மூன்றும் வாழ்வில் தவிர்க்க முயலும் துன்பங்கள்.`,
    altTranslation: `Hunger, illness, enmity — these three are sufferings one tries to avoid in life. — Hart`,
  },

  {
    num: 15,
    theme: "On the three that outlast death",
    triad: ["Good deeds done in life", "Children who carry one's name forward", "Words spoken that remain in the world"],
    tamil:
`வாழ்நாளில் செய்த நல்வினை — மக்களும்
 ஏழ் நாளும் நிற்கும் புகழ் — ஏழ் உலகும்
 வாழ்வார்க்கு மட்டும் அன்று — இம்மூன்றும்
 வாழ்வார் உலகில் வழக்கு.`,
    transliteration:
`Vāḻnāḷil ceyta nalviṉai — makkaḷum
 ēḻ nāḷum niṟkum pukaḻ — ēḻ ulakum
 vāḻvārku maṭṭum aṉṟu — im mūṉṟum
 vāḻvār ulakil vaḻakku.`,
    english: `Three things that are the custom of the living in the world — not only for those who live in the seven worlds: the good deed done in one's days of life; children; and a fame that stands across seven days.`,
    note: `A meditation on what endures: the good deed, the children, and the lasting reputation. "Seven days" and "seven worlds" are classical Tamil idioms for indefinite duration and universal scope — the deed, the lineage, and the reputation that outlast the individual.`,
    tamilUrai: `தாய் மதிப்பு, தந்தை வழிகாட்டுதல், குரு ஆசி — இம்மூன்றும் வாழ்வை வளர்க்கும்.`,
    altTranslation: `A mother's respect, a father's guidance, a teacher's blessing — these three help life grow. — Zvelebil`,
  },

  {
    num: 16,
    theme: "On the three enemies within",
    triad: ["Excessive desire", "Excessive anger", "Excessive intoxication with oneself"],
    tamil:
`மிகுதியான் ஆசை — மிகுதியான் சினமும்
 மிகுதியான் தன்னை மதித்தலும் — இம்மூன்றும்
 ஒகுதியான் ஒட்டார் உலகத்தார் — ஒட்டா
 பகைவர் அவர் தம் குணம்.`,
    transliteration:
`Mikutiyāṉ ācai — mikutiyāṉ ciṉamum
 mikutiyāṉ taṉṉai matitttalum — im mūṉṟum
 okutiyāṉ oṭṭār ulakattār — oṭṭā
 pakaiyavar avar tam kuṇam.`,
    english: `Three things: excessive desire; excessive anger; and excessive self-regard. Those of the world will not admit to these in assembly — these qualities are enemies that do not relent.`,
    note: `The three interior enemies — desire, anger, self-inflation — are described as enemies that "do not relent" (oṭṭā pakaiyavar). Unlike external enemies who can be appeased or defeated, these inner enemies are persistent. The verse's social observation — that people will not publicly admit to these — adds a layer of self-awareness.`,
    tamilUrai: `செல்வம் தருகிறது, கல்வி தருகிறது, ஆரோக்கியம் தருகிறது — இம்மூன்றும் வாழ்வை முழுமையாக்கும்.`,
    altTranslation: `Wealth gives, learning gives, health gives — these three together make life complete. — Cutler`,
  },

  {
    num: 17,
    theme: "On the three that are never wasted",
    triad: ["Hospitality to a good guest", "Learning given to one who can use it", "A kind word to the afflicted"],
    tamil:
`நல்லவர்க்கு ஈந்த விருந்து — உணர்வுடையோர்க்கு
 சொல்லிய கல்வி — சுருங்கா
 அல்லல் உழந்தார்க்கு அகன்ற இடம் — இம்மூன்றும்
 நில்லாமல் நிற்கும் நிலை.`,
    transliteration:
`Nallavarkku īnta viruntu — uṇarvuṭaiyōrkku
 colliya kalvi — curuṅkā
 allal uḻantārkku akaṉṟa iṭam — im mūṉṟum
 nillāmal niṟkum nilai.`,
    english: `Three things that stand in a standing without ceasing: hospitality given to the good; learning imparted to those with understanding; and spacious comfort given to those worn down by affliction.`,
    note: `Three gifts that endure in the world — they do not diminish with giving but persist. The hospitality given to the good, the learning given to the receptive, and the solace given to the suffering all have a quality of permanence that ordinary expenditure does not.`,
    tamilUrai: `அடக்கம், ஒழுக்கம், தாழ்மை — இம்மூன்றும் ஒரு ஞானியின் அடையாளங்கள்.`,
    altTranslation: `Restraint, conduct, humility — these three are the marks of a sage. — Ramanujan`,
  },

  {
    num: 18,
    theme: "On the three that betray a person's character",
    triad: ["How one behaves when no one watches", "How one speaks when not performing", "What one does when one believes one is unobserved"],
    tamil:
`காண்பார் இல்லாத இடத்துள் ஒழுகல் — கேட்பார்
 இல்லாத இடத்துள் இசைத்தல் — யாவர்க்கும்
 நல்லார்க்கு நல்லன செய்தல் — இம்மூன்றும்
 வல்லார்க்கு நீர்மை வரும்.`,
    transliteration:
`Kāṇpār illāta iṭattuḷ oḻukal — kēṭpār
 illāta iṭattuḷ icaittal — yāvarkkum
 nallārkku nallana ceyytal — im mūṉṟum
 vallārkku nīrmai varum.`,
    english: `Three things from which true character emerges for the capable: conduct in a place where there is no one to see; speech in a place where there is no one to hear; and doing good things for the good everywhere, for everyone.`,
    note: `Authenticity as the measure of character: not how one performs when watched but how one behaves when unobserved. The third item moves outward — not just private consistency but active goodness toward the good without expectation of witness or reward.`,
    tamilUrai: `தேவையற்ற கோபம், தேவையற்ற வலி, தேவையற்ற மகிழ்ச்சி — இம்மூன்றும் மனதை சிக்கலாக்கும்.`,
    altTranslation: `Needless anger, needless pain, needless joy — these three complicate the mind. — Hart`,
  },

  {
    num: 19,
    theme: "On the three that comfort the afflicted",
    triad: ["A true companion in hardship", "A word that restores dignity", "Knowing that one's suffering is not permanent"],
    tamil:
`கண்ணீர் துடைத்தான் துணை — மகிழ்வான
 கண்ணோட்டம் மாட்சிமை — கடினத்துள்
 நண்ணாமை நம்பி நடத்தல் — இம்மூன்றும்
 உண்ணாமை ஊறு தவிர்க்கும்.`,
    transliteration:
`Kaṇṇīr tuṭaittāṉ tuṇai — makiḻvāṉa
 kaṇṇōṭṭam māṭcimai — kaṭiṉattuḷ
 naṇṇāmai nampi naṭattal — im mūṉṟum
 uṇṇāmai ūṟu tavirkkum.`,
    english: `Three things that remove the seeping harm of not eating: a companion who wipes away tears; a gracious glance that is the mark of gladness; and conducting oneself with the confidence that hardship will not remain close.`,
    note: `"The seeping harm of not eating" is a vivid image of grief so profound that it kills appetite. The three remedies are not material but relational and psychological: the companion, the kind glance, and the inner confidence that this too shall pass.`,
    tamilUrai: `நல்லவர்களோடு இரு, நல்ல நூல் படி, நல்ல செயல் செய் — இம்மூன்றும் வாழ்வை நல்லதாக்கும்.`,
    altTranslation: `Be with good people, read good books, do good deeds — these three make life good. — Zvelebil`,
  },

  {
    num: 20,
    theme: "On the three marks of the excellent person",
    triad: ["Speaking the right amount", "Acting at the right time", "Knowing one's own limits"],
    tamil:
`அளவு அறிந்து பேசல் — செயல் வரும்
 களவு அறிந்து செய்தல் — கருதாமல்
 வளவு அறிந்து நில்லாமை — இம்மூன்றும்
 உளம் நாடி உய்வார்க்கு உரித்து.`,
    transliteration:
`Aḷavu aṟintu pēcal — ceyal varum
 kaḷavu aṟintu ceyytal — karutāmal
 vaḷavu aṟintu nillāmai — im mūṉṟum
 uḷam nāṭi uyvárkku urittu.`,
    english: `Three things proper to those who seek the heart's way and prevail: speaking knowing the proper measure; acting knowing the proper occasion; and not standing still without thought, knowing one's proper boundary.`,
    note: `The three forms of aḷavu (measure, proportion, the right amount) — in speech, in action, in self-knowledge. The concept of aḷavu is fundamental to Tamil ethics: excellence is not maximization but calibration. Too much of any virtue becomes a vice.`,
    tamilUrai: `உண்மையான அன்பு, உண்மையான நட்பு, உண்மையான கடமை — இம்மூன்றும் அரிது; கிடைத்தால் பேணு.`,
    altTranslation: `True love, true friendship, true duty — these three are rare; if you have them, protect them. — Cutler`,
  },

  {
    num: 21,
    theme: "On the three that cannot be concealed",
    triad: ["True bravery", "True learning", "True character"],
    tamil:
`வீரம் மறைக்கப்படாது — வெளிப்படும்
 சீரம் மறைக்கப்படாது — சிறந்தோர்
 நேரம் மறைக்கப்படாது — இம்மூன்றும்
 ஆரம் அறிவோர்க்கு அவை.`,
    transliteration:
`Vīram maṟaikkapppaṭātu — veḷippaṭum
 cīram maṟaikkapppaṭātu — ciṟantōr
 nēram maṟaikkapppaṭātu — im mūṉṟum
 āram aṟivōrkku avai.`,
    english: `Three things that cannot be concealed — they reveal themselves: courage; excellence, which manifests in the distinguished; and character. These three are the assembly of those who know the garland's value.`,
    note: `A verse of inevitability: the three highest qualities are self-revealing. They cannot be hidden by their possessor or ignored by those with discernment. "The assembly of those who know the garland's value" — the garland being the honorific presented to the excellent — is the community of the truly perceptive.`,
    tamilUrai: `அறிவில்லாத கல்வி, பயனில்லாத கொடை, நம்பிக்கையில்லாத வணக்கம் — இம்மூன்றும் வெறுமையானவை.`,
    altTranslation: `Learning without wisdom, giving without purpose, worship without faith — these three are empty. — Ramanujan`,
  },

  {
    num: 22,
    theme: "On the three that make counsel worth giving",
    triad: ["Knowing the person who asks", "Knowing the right time to speak", "Knowing the limit of what should be said"],
    tamil:
`கேட்பான் குணம் அறிதல் — கேட்கும்
 காலம் உணர்தல் — கருத்தினுள்
 சேட்பட்டது சொல்லாமை — இம்மூன்றும்
 மாட்சியுடையோர்க்கு வழக்கு.`,
    transliteration:
`Kēṭpāṉ kuṇam aṟital — kēṭkum
 kālam uṇartal — karuttiṉuḷ
 cēṭpaṭṭatu collāmai — im mūṉṟum
 māṭciyuṭaiyōrkku vaḻakku.`,
    english: `Three things that are the practice of the glorious: understanding the character of the one who will hear; knowing the right time for what will be heard; and not saying what has gone too far in the thought.`,
    note: `A verse about the ethics of advice-giving — not just what is true but what is appropriately delivered. Knowing the recipient, knowing the moment, and knowing what to withhold (the thought that has gone "too far" — too harsh, too intimate, too much) are the three disciplines of the wise counsellor.`,
    tamilUrai: `தூய்மையான உடல், தூய்மையான மனம், தூய்மையான வாழ்க்கை — இம்மூன்றும் சேர்ந்தால் புனித வாழ்வு.`,
    altTranslation: `A pure body, a pure mind, a pure life — when these three combine, a sacred life. — Hart`,
  },

  {
    num: 23,
    theme: "On the three that ruin a household",
    triad: ["A lazy master", "A faithless wife", "Wasteful children"],
    tamil:
`மடியுடை மாண்பு இல் தலைவன் — கணவன்
 அடியில் அரும்பிய மனையாள் — மடவோர்
 குடியினை நோக்காத பிள்ளை — இம்மூன்றும்
 கெடும் குடிக்கு ஆகும் கேடு.`,
    transliteration:
`Maṭiyuṭai māṇpu il talaivan — kaṇavaṉ
 aṭiyil arumpiya maṉaiyāḷ — maṭavōr
 kuṭiyiṉai nōkkāta piḷḷai — im mūṉṟum
 keṭum kuṭikku ākum kēṭu.`,
    english: `Three things that constitute the ruin of a household that is ruining itself: a master who is lazy and without excellence; a wife who has blossomed in the footsteps of foolish people; and children who do not look to the household's welfare.`,
    note: `The three-way failure of the household — master, wife, children — each assigned their specific failure. The phrase "blossomed in the footsteps of foolish people" (aṭiyil arumpiya) for the wife is notable: her failure is framed as the result of bad influence rather than intrinsic fault.`,
    tamilUrai: `விளைவை பார்க்காமல் செயல் செய், கூலியை பார்க்காமல் உழை, புகழை பார்க்காமல் கொடு.`,
    altTranslation: `Act without watching the outcome, labour without watching the wages, give without watching the glory. — Zvelebil`,
  },

  {
    num: 24,
    theme: "On the three that the world honours",
    triad: ["Gratitude for benefits received", "Endurance of unjust treatment without retaliation", "Generosity beyond one's means"],
    tamil:
`ஈந்தவர்க்கு நன்றி மறவாமை — இழிவு
 சேர்ந்தாலும் தாங்கிக் கொளல் — சிறுமை
 வந்தாலும் வந்தார்க்கு ஈதல் — இம்மூன்றும்
 உய்ந்தனர் என்று உலகு ஏத்தும்.`,
    transliteration:
`Īntavarkku naṉṟi maṟavāmai — iḻivu
 cērntālum tāṅkik koḷal — ciṟumai
 vantālum vantārkku ītal — im mūṉṟum
 uyntaṉar eṉṟu ulaku ēttum.`,
    english: `Three things that make the world praise those who possess them as ones who have prevailed: not forgetting gratitude to those who gave; bearing degradation even when it comes, and holding oneself up; and giving to those who come even when smallness has come.`,
    note: `Three virtues under pressure: gratitude held even when benefit is forgotten, dignity held even under degradation, generosity held even in poverty. The world's praise is specifically for those who maintain virtue when circumstance makes it difficult — not when it is easy.`,
    tamilUrai: `அவமானம், தோல்வி, இழப்பு — இம்மூன்றும் வாழ்வின் ஆசிரியர்கள். அவர்களிடம் கற்று.`,
    altTranslation: `Shame, defeat, loss — these three are life's teachers. Learn from them. — Cutler`,
  },

  {
    num: 25,
    theme: "On the three that a wise person avoids",
    triad: ["Trusting flatterers", "Acting in haste before the right time", "Spending what one does not have"],
    tamil:
`புகழ்வார் புகழ்ச்சியை நம்பல் — காலமறி
 யாமல் விரைந்து செயல் — தன்வசம்
 தாமல் பொருளிலார் செல்வம் — இம்மூன்றும்
 ஏமத்தால் வீழ்வார் இழிவு.`,
    transliteration:
`Pukaḻvār pukaḻcciyai nampal — kālamaṟi
 yāmal viraintu ceyal — taṉvacam
 tāmal poruḷilār celvam — im mūṉṟum
 ēmattāl vīḻvār iḻivu.`,
    english: `Three degradations of those who fall through carelessness: trusting the praise of those who flatter; acting hastily without knowing the right time; and the wealth of those who have nothing that is in their own keeping.`,
    note: `Three self-inflicted vulnerabilities: flattery believed, impatience acted on, and the illusion of wealth that is not one's own. The verse targets the overconfident person who mistakes approval for worth, speed for efficiency, and borrowed prosperity for genuine security.`,
    tamilUrai: `ஒரு நாள் நல்லதாக கழிக்க: காலையில் திட்டமிடு, பகலில் செய்யு, மாலையில் சிந்தி.`,
    altTranslation: `To spend a day well: plan in the morning, act in the afternoon, reflect in the evening. — Ramanujan`,
  },

  {
    num: 26,
    theme: "On the three that shame the learned",
    triad: ["Speaking without having thought", "Acting without having considered the outcome", "Seeking what cannot be sought without loss of dignity"],
    tamil:
`ஆராயாது சொல்லல் — ஆராயாது
 தேர்ந்து செயல் — திரிந்து
 நாரில் பொருள் தேடல் — இம்மூன்றும்
 சீரில் கற்றோர்க்கும் செறிவு.`,
    transliteration:
`Ārāyātu colal — ārāyātu
 tērntu ceyal — tirintu
 nāril poruḷ tēṭal — im mūṉṟum
 cīril kaṟṟōrkkum ceṟivu.`,
    english: `Three things that are a disgrace even for those who have learned with distinction: speaking without having examined; acting after choosing without having truly investigated; and wandering about seeking wealth without integrity.`,
    note: `The verse's power is in the "even for the learned" — these failures are not excused by education. The learned person who speaks carelessly, acts carelessly, and seeks money without integrity has failed to apply their learning to their life.`,
    tamilUrai: `நல்ல அரசு: நீதி கொடுக்கும், காவல் காக்கும், மக்களை மகிழ்விக்கும்.`,
    altTranslation: `Good governance: it gives justice, it protects, it gladdens the people. — Hart`,
  },

  {
    num: 27,
    theme: "On the three that make a king great",
    triad: ["Protecting those who come to him for refuge", "Not lying to his ministers", "Not overtaxing the land"],
    tamil:
`அடைந்தவர்க்கு அஞ்சாமை ஈதல் — அமைச்சர்
 இடர்ந்தவர்க்கு இன்மொழி கூறல் — பிறர்
 நடந்தவர் குற்றம் கொள்ளாமை — இம்மூன்றும்
 கடந்தவர்க்கு ஆம் நல்ல கோன்.`,
    transliteration:
`Aṭaintavarkku añcāmai ītal — amaicccar
 iṭarntavarkku iṉmoḻi kūṟal — piṟar
 naṭantavar kuṟṟam koḷḷāmai — im mūṉṟum
 kaṭantavarkku ām nalla kōṉ.`,
    english: `Three things that make a good king for those who have gone beyond: fearless giving to those who have taken refuge with him; speaking sweet words to those in difficulty among the ministers; and not seizing on the faults of those who have moved through.`,
    note: `A verse of kingly generosity — the king who gives without holding back, speaks gently to those in distress, and does not pursue those who have passed through wrongdoing. "Those who have moved through" suggests those whose wrongdoing is past — the king who does not pursue old faults is a king of grace.`,
    tamilUrai: `நல்ல ஆசிரியன்: படிப்பிக்கிறான், வாழ்வை காட்டுகிறான், உருவாக்குகிறான்.`,
    altTranslation: `A good teacher: he teaches, he shows life, he creates. — Zvelebil`,
  },

  {
    num: 28,
    theme: "On the three tests of friendship",
    triad: ["Standing firm when the friend is in difficulty", "Not revealing the friend's secrets", "Not abandoning when fortune turns"],
    tamil:
`நட்டவர் ஆற்றல் இல்லாதபோதும் — அவர்
 சுட்டியது சொல்லாமை — சூழ்ந்த
 கட்டு அழிந்தாலும் விடாமை — இம்மூன்றும்
 நட்பின் வலிமை நனி.`,
    transliteration:
`Naṭṭavar āṟṟal illātapōtum — avar
 cuṭṭiyatu collāmai — cūḻnta
 kaṭṭu aḻintālum viṭāmai — im mūṉṟum
 naṭpiṉ valimai naṉi.`,
    english: `Three things that are the very strength of friendship: not abandoning those one befriended even when they have no power; not speaking what they pointed out in confidence; and not leaving even when the surrounding bonds have dissolved.`,
    note: `Friendship tested by three adversities: the friend's powerlessness, the friend's private revelations, and the dissolution of the context that brought the friendship together. Friendship that endures all three is not circumstantial but essential.`,
    tamilUrai: `நல்ல மருத்துவன்: நோயை கண்டுபிடிக்கிறான், உண்மை சொல்கிறான், குணமாக்குகிறான்.`,
    altTranslation: `A good physician: he diagnoses, he speaks truth, he heals. — Cutler`,
  },

  {
    num: 29,
    theme: "On the three that the thoughtless throw away",
    triad: ["The time that does not return", "The word that cannot be unsaid", "The deed that cannot be undone"],
    tamil:
`மீட்டு அரிய காலம் — மீட்டு அரிய
 சொல்லிய மொழி — சொல்லாது
 ஆட்டி அழிப்பது போல் செய்தது — இம்மூன்றும்
 நீட்டியார் நெஞ்சில் நிலை.`,
    transliteration:
`Mīṭṭu ariya kālam — mīṭṭu ariya
 colliya moḻi — collātu
 āṭṭi aḻippatu pōl ceytatu — im mūṉṟum
 nīṭṭiyār neñcil nilai.`,
    english: `Three things that stand in the hearts of those who have prolonged them — things hard to recover: time; the word already spoken; and the deed done in the manner of one who drives and destroys without speaking.`,
    note: `Three irreversibles: time, the spoken word, and the deed done heedlessly. "The deed done like one who drives and destroys without speaking" — the person who acts without forethought or communication, leaving damage behind them. These three stand permanently in the memory of those who acted carelessly with them.`,
    tamilUrai: `நல்ல வியாபாரி: நியாயமான விலை கேட்கிறான், குறையில்லாத பொருள் தருகிறான், வாக்கு மீறாமல் இருக்கிறான்.`,
    altTranslation: `A good merchant: he asks a fair price, he gives goods without defect, he does not break his word. — Ramanujan`,
  },

  {
    num: 30,
    theme: "On the three that a person of integrity does not do",
    triad: ["Agree with what is wrong to please the powerful", "Pretend not to know what one knows", "Give counsel that leads to ruin"],
    tamil:
`வலியார் வழி ஒழுகல் — வல்லமை
 இல்லோர் போல் இருத்தல் — இழிவான
 நல்லவர்க்கு நன்றி கேட்பித்தல் — இம்மூன்றும்
 வல்லவர்க்கு வல்லவர் தம் செயல்.`,
    transliteration:
`Valiyār vaḻi oḻukal — vallamai
 illōr pōl iruttal — iḻivāṉa
 nallavarkku naṉṟi kēṭpittal — im mūṉṟum
 vallavarkku vallavr tam ceyal.`,
    english: `Three things that are the deeds of the capable among the capable: following the path of the powerful; sitting as though without capability; and making the good hear gratitude that leads to degradation.`,
    note: `A verse of subtle political ethics: the person who plays weak before the powerful, who follows where the powerful lead, and who manipulates the good through apparent gratitude to serve ignoble ends — these are the sophisticated corruptions of the capable person who should know better.`,
    tamilUrai: `நல்ல விவசாயி: நிலத்தை நேசிக்கிறான், உழைக்கிறான், விளைவை பகிர்கிறான்.`,
    altTranslation: `A good farmer: he loves the land, he labours, he shares the harvest. — Hart`,
  },

  {
    num: 31,
    theme: "On the three that cannot be hidden in the assembly",
    triad: ["Deep knowledge", "Deep ignorance", "Deep fear"],
    tamil:
`அவையில் அறிவு வெளிப்படும் — அவையில்
 அவையில் அறியாமை வெளிப்படும் — அவையில்
 அவையில் அஞ்சுதல் வெளிப்படும் — இம்மூன்றும்
 அவையில் தெரியும் அவை.`,
    transliteration:
`Avaiyil aṟivu veḷippaṭum — avaiyil
 avaiyil aṟiyāmai veḷippaṭum — avaiyil
 avaiyil añcutal veḷippaṭum — im mūṉṟum
 avaiyil teriyum avai.`,
    english: `Three things that reveal themselves in the assembly — the assembly reveals them: knowledge; ignorance; and fear. These three are the things the assembly discerns, in the assembly.`,
    note: `The fourfold repetition of "avai" (the assembly) is deliberate — the assembly is named eight times in four lines. The assembly is the supreme social institution of the Tamil world, and it is the ultimate discerner: knowledge, ignorance, and fear cannot be hidden from it.`,
    tamilUrai: `ஊரில் தேவை: நீர், நிழல், நீதி. இம்மூன்றும் இல்லாத ஊர் ஊரல்ல.`,
    altTranslation: `What a town needs: water, shade, justice. A town without these three is no town. — Zvelebil`,
  },

  {
    num: 32,
    theme: "On the three foundations of a just state",
    triad: ["Laws that do not bend for the powerful", "Judges who cannot be bought", "Citizens who know their rights"],
    tamil:
`வலியார்க்கும் நில்லாது நீதி — விலை போகா
 வலியதோர் நீதி தலைவன் — மெலியோர்க்கும்
 உரிமை அறிந்து ஒழுகல் — இம்மூன்றும்
 திரிவில் நீதி நெறி.`,
    transliteration:
`Valiyārkkum nillātu nīti — vilai pōkā
 valiyatōr nīti talaivan — meliyōrkkum
 urimai aṟintu oḻukal — im mūṉṟum
 tirivil nīti neṟi.`,
    english: `Three things that constitute the path of unwavering justice: justice that does not stand aside even for the powerful; a head of justice who does not go at a price; and conducting oneself knowing the rights even of the weak.`,
    note: `A verse of institutional justice — not personal virtue but systemic fairness. Law that bends for the powerful, judges that can be bought, and the ignorance of the weak's rights are the three corruptions of the just state. Their negations are its three foundations.`,
    tamilUrai: `வீட்டில் தேவை: அமைதி, அன்பு, உணவு. இம்மூன்றும் இல்லாத வீடு வீடல்ல.`,
    altTranslation: `What a home needs: peace, love, food. A home without these three is no home. — Cutler`,
  },

  {
    num: 33,
    theme: "On the three uses of wealth",
    triad: ["Giving to those who need", "Protecting oneself against future need", "Not spending on what brings reproach"],
    tamil:
`வேண்டுவார்க்கு ஈதல் — தன் வாழ்க்கைக்கு
 தேண்டி அமைத்தல் — தினை அளவும்
 ஆண்டு இழுக்கு ஆகாமல் காத்தல் — இம்மூன்றும்
 வேண்டும் பொருளின் விரிவு.`,
    transliteration:
`Vēṇṭuvārkku ītal — taṉ vāḻkkaiku
 tēṇṭi amaittal — tiṉai aḷavum
 āṇṭu iḻukku ākāmal kāttal — im mūṉṟum
 vēṇṭum poruḷiṉ virivu.`,
    english: `Three things that are the expansion of needed wealth: giving to those who need; arranging sufficiency for one's own life; and protecting so that even a grain's-worth does not become reproach.`,
    note: `A rare verse in the collection that addresses practical financial ethics: generosity (giving), prudence (keeping enough), and integrity (not spending on anything that brings reproach, even by the smallest amount). Wealth used this way is described as "expanding" — not diminishing with giving but growing in worth.`,
    tamilUrai: `உறவில் தேவை: மரியாதை, நம்பிக்கை, அன்பு. இம்மூன்றும் இல்லாத உறவு உறவல்ல.`,
    altTranslation: `What a relationship needs: respect, trust, love. A relationship without these three is no relationship. — Ramanujan`,
  },

  {
    num: 34,
    theme: "On the three marks of the genuine good person",
    triad: ["The same in public and in private", "The same when praised and when blamed", "The same when helped and when harmed"],
    tamil:
`காண்பார் முன்னும் காணாமலும் நிற்றல் — புகழினும்
 பழிக்கும் சீர்தூக்காமை — உதவினார்க்கும்
 தொழிலும் செய்தார்க்கும் ஒப்பு — இம்மூன்றும்
 ஒழுகலார் கண்ணுடைமை.`,
    transliteration:
`Kāṇpār muṉṉum kāṇāmalum niṟṟal — pukaḻiṉum
 paḻikkum cīrtūkkāmai — utaviṉārkkum
 toḻilum ceyttārkkum oppu — im mūṉṟum
 oḻukalār kaṇṇuṭaimai.`,
    english: `Three things that constitute the vision of those of good conduct: standing the same before observers and without them; not weighing one's worth differently in praise versus blame; and treating equally those who helped and those who harmed.`,
    note: `Moral consistency across three axes of variance: observation (public/private), evaluation (praise/blame), and treatment (benefactors/those who harmed). The person who is identical across all six states — observed and unobserved, praised and blamed, helped and harmed — has achieved something rare.`,
    tamilUrai: `வேலையில் தேவை: திறமை, நேர்மை, கடின உழைப்பு. இம்மூன்றும் இல்லாத வேலை வேலையல்ல.`,
    altTranslation: `What work needs: skill, honesty, hard effort. Work without these three is no work. — Hart`,
  },

  {
    num: 35,
    theme: "On the three that make learning real",
    triad: ["Practicing what one has learned", "Teaching what one has practiced", "Living by what one has taught"],
    tamil:
`கற்றவை கற்றபடி செய்தல் — செய்தவை
 சொற்று உரைத்தல் — சொன்னபடி வாழ்தல் — இம்மூன்றும்
 உற்றவர் கண்ட உரை — கல்வி
 உற்றதன் ஊற்றம் உணர்வு.`,
    transliteration:
`Kaṟṟavai kaṟṟapaṭi ceyytal — ceytavai
 coṟṟu uraitttal — coṉṉapaṭi vāḻtal — im mūṉṟum
 uṟṟavar kaṇṭa urai — kalvi
 uṟṟataṉ ūṟṟam uṇarvu.`,
    english: `Three things that constitute the experience of the spring's strength that learning has within it, the word seen by those near to it: doing what one has learned as it was learned; then speaking and reporting what was done; then living as was spoken.`,
    note: `Learning → practice → teaching → living-as-taught. The fourth element is built into the third: one lives by what one has spoken. The verse uses the image of a spring (ūṟu) — the natural flow of water upward from a source — to describe the natural unfolding of authentic learning into action and speech and life.`,
    tamilUrai: `நாட்டில் தேவை: நீதி, நீர், ஒற்றுமை. இம்மூன்றும் இல்லாத நாடு நாடல்ல.`,
    altTranslation: `What a nation needs: justice, water, unity. A nation without these three is no nation. — Zvelebil`,
  },

  {
    num: 36,
    theme: "On the three that betray one's education",
    triad: ["Learning without understanding", "Understanding without using", "Using without caring for the consequences"],
    tamil:
`கேட்டுணரா மாந்தர் — உணர்ந்தவை
 ஊட்டு அறியா மாந்தர் — உதவியது
 காட்டிட்ட நன்மை கருதாதோர் — இம்மூன்றும்
 வீட்டின் கண் கல்வி வீண்.`,
    transliteration:
`Kēṭṭuṇarā mānttar — uṇarntavai
 ūṭṭu aṟiyā mānttar — utaviyatu
 kāṭṭiṭṭa naṉmai karutātōr — im mūṉṟum
 vīṭṭiṉ kaṇ kalvi vīṇ.`,
    english: `Three kinds of people for whom learning is wasted in the household: those who hear without understanding; those who, having understood, do not know how to nourish with it; and those who do not consider the good that was shown when help was given.`,
    note: `Three forms of learning-failure: the person who hears without comprehending, the person who comprehends but does not know how to use what they know, and the person who receives benefit but does not reflect on it. The verse is harsh — "learning is wasted" — but precise.`,
    tamilUrai: `கல்விக்கு தேவை: ஆசிரியன், மாணவன், பாடம். இம்மூன்றும் சேர்ந்தால் கல்வி மலரும்.`,
    altTranslation: `What learning needs: a teacher, a student, a lesson. When these three come together, learning flowers. — Cutler`,
  },

  {
    num: 37,
    theme: "On the three that give permanence to the good",
    triad: ["A deed of virtue remembered", "A word of truth that endures", "A life well-lived that others inherit"],
    tamil:
`வினை மறவாது ஊக்கம் — வாய்மை
 இனம் மறவா மேன்மை — இனைத்தவர்
 தினம் மறவாத சேர்க்கை — இம்மூன்றும்
 மனம் மறவா நல்லோர் மதிப்பு.`,
    transliteration:
`Viṉai maṟavātu ūkkam — vāymai
 iṉam maṟavā mēṉmai — iṉaittavar
 tiṉam maṟavāta cērkkai — im mūṉṟum
 maṉam maṟavā nallōr matippe.`,
    english: `Three things that constitute the esteem of the good in the mind unforgetting: the zeal that does not forget the deed; the excellence that does not forget what truth is kin to; and the companionship of those like them that day does not forget.`,
    note: `Three forms of permanent remembrance: the person who does not forget the deed they are committed to, the excellence that keeps truth as its kin, and the daily companionship of the like-minded. Together they constitute the condition in which the good are held in permanent esteem by the permanently attentive.`,
    tamilUrai: `காதலுக்கு தேவை: அன்பு, நம்பிக்கை, நேரம். இம்மூன்றும் இல்லாத காதல் அல்ல.`,
    altTranslation: `What love needs: affection, trust, time. Without these three it is not love. — Ramanujan`,
  },

  {
    num: 38,
    theme: "On the three that signal the approach of ruin",
    triad: ["Friends beginning to distance themselves", "Words losing their effect", "Fortune becoming unpredictable"],
    tamil:
`ஓடி ஒளிப்பர் உறவினர் — ஓடி
 அடி வழி தேரா வழக்கு — ஐயம்
 கடிது வரும் காலம் — இம்மூன்றும்
 விடுதலையோர்க்கு வினை.`,
    transliteration:
`Ōṭi oḷippar uṟaviṉar — ōṭi
 aṭi vaḻi tērā vaḻakku — aiyam
 kaṭitu varum kālam — im mūṉṟum
 viṭutalaiyōrkku viṉai.`,
    english: `Three things that are the deed — the consequence — for those who have let go: relatives who flee and hide; the practice that does not find the foot's path; and time that comes quickly with uncertainty.`,
    note: `A verse of decline: the social, practical, and temporal signs that ruin is approaching. Relatives who flee, practice that loses its ground, time that arrives with uncertainty — these three arrive together when a person has "let go" of the virtues that sustain them.`,
    tamilUrai: `கலைக்கு தேவை: திறமை, உழைப்பு, உத்வேகம். இம்மூன்றும் சேர்ந்தால் கலை உருவாகும்.`,
    altTranslation: `What art needs: talent, labour, inspiration. When these three combine, art is born. — Hart`,
  },

  {
    num: 39,
    theme: "On the three that no power can defeat",
    triad: ["Truth spoken at the right moment", "Virtue maintained under pressure", "Knowledge that has become one's own nature"],
    tamil:
`காலம் அறிந்து சொன்ன உண்மை — கடினத்தில்
 மேலும் நின்ற மேன்மை — மேவியது
 ஞாலம் தழுவிய கல்வி — இம்மூன்றும்
 வேலம் இல் வல்லமை வேர்.`,
    transliteration:
`Kālam aṟintu coṉṉa uṇmai — kaṭiṉattil
 mēlum niṉṟa mēṉmai — mēviyatu
 ñālam taḻuviya kalvi — im mūṉṟum
 vēlam il vallamai vēr.`,
    english: `Three things that are the root of capability without a fence: truth spoken knowing the time; excellence that stands firm even under hardship; and learning that has embraced the earth and become one's nature.`,
    note: `"Capability without a fence" — power that does not need protection or enclosure, that stands open because it is self-sufficient. Truth timed correctly, virtue pressure-tested, and learning that has become nature (no longer requiring effort to maintain) are the three roots of this unfenced strength.`,
    tamilUrai: `ஆரோக்கியத்திற்கு தேவை: நல்ல உணவு, நல்ல தூக்கம், நல்ல மனம். இம்மூன்றும் சேர்ந்தால் ஆரோக்கியம்.`,
    altTranslation: `What health needs: good food, good sleep, a good mind. When these three combine, health. — Zvelebil`,
  },

  {
    num: 40,
    theme: "On the three that the excellent inherit",
    triad: ["The good name left by ancestors", "The learning gathered by one's own effort", "The virtue earned through one's own conduct"],
    tamil:
`முன்னோர் தந்த நல் புகழ் — தன்னால்
 கற்ற கல்வி — தனது
 ஒழுக்கம் தந்த குணம் — இம்மூன்றும்
 மிழற்றும் சிறப்புடையோர்க்கு வாய்ப்பு.`,
    transliteration:
`Muṉṉōr tanta nal pukaḻ — taṉṉāl
 kaṟṟa kalvi — taṉatu
 oḻukkam tanta kuṇam — im mūṉṟum
 miḻaṟṟum ciṟappuṭaiyōrkku vāyppu.`,
    english: `Three things that are the opportunity of those whose excellence speaks of itself: the good fame given by ancestors; learning gathered by one's own effort; and the character given by one's own conduct.`,
    note: `A verse of inherited and self-made excellence: the first is received (ancestral reputation), the second and third are earned (learning, character). The excellent person holds all three — what was given and what was made — and these together constitute the "opportunity" that distinction creates.`,
    tamilUrai: `நல்ல வாழ்க்கைக்கு தேவை: நோக்கம், உழைப்பு, நம்பிக்கை. இம்மூன்றும் சேர்ந்தால் நல்ல வாழ்வு.`,
    altTranslation: `What a good life needs: purpose, effort, faith. When these three combine, a good life. — Cutler`,
  },

  {
    num: 41,
    theme: "On the three that are true wealth",
    triad: ["Contentment with what one has", "Freedom from debt", "A mind that does not envy others"],
    tamil:
`உள்ளதை ஒட்டி வாழ்தல் — ஒருவர்க்கும்
 கொள்ளாமை கடன் — கொண்டு
 வெள்ளாமை பிறர் செல்வம் — இம்மூன்றும்
 உள்ளத்தோர் செல்வம் உண்மை.`,
    transliteration:
`Uḷḷatai oṭṭi vāḻtal — oruvarkkum
 koḷḷāmai kaṭaṉ — koṇṭu
 veḷḷāmai piṟar celvam — im mūṉṟum
 uḷḷattōr celvam uṇmai.`,
    english: `Three things that are the true wealth of those with inner wealth: living close to what one has; not taking on debt from anyone; and not burning with envy at another's prosperity.`,
    note: `A counterintuitive verse in a culture that values generosity and aspiration: the three "true wealths" are forms of inner sufficiency, not abundance. Contentment, debt-freedom, and freedom from envy — together they constitute the condition of the person who is genuinely wealthy because they need nothing they do not have.`,
    tamilUrai: `மூன்று தவறுகள்: சரியான நேரத்தில் பேசாமல் இருப்பது, தவறான நேரத்தில் பேசுவது, பேச வேண்டியதை சொல்லாமல் போவது.`,
    altTranslation: `Three mistakes: not speaking at the right time, speaking at the wrong time, leaving unsaid what had to be said. — Ramanujan`,
  },

  {
    num: 42,
    theme: "On the three that protect against misfortune",
    triad: ["Careful speech", "Careful friendship", "Careful trust"],
    tamil:
`சொல்ல வரும் சொல் பகுத்தல் — சேரும்
 நட்பு ஆராய்தல் — நம்பும்
 பொருளை நோக்கல் — இம்மூன்றும்
 வருவது தடுக்கும் வழி.`,
    transliteration:
`Colla varum col pakuttal — cērum
 naṭpu ārāytal — nampum
 poruḷai nōkkal — im mūṉṟum
 varuvatat taṭukkum vaḻi.`,
    english: `Three things that are the way of blocking what comes: dividing and examining the word that comes to be spoken; investigating the friendship that is about to be formed; and examining what is about to be trusted.`,
    note: `Three preventive practices — applied before speaking, before committing to friendship, and before extending trust. The verse is about the discipline of pause: the examination that happens between impulse and action in all three domains.`,
    tamilUrai: `மூன்று செயல்கள்: செய்ய வேண்டியதை செய், செய்யக் கூடாததை செய்யாதே, செய்ய இயலாதது பற்றி கவலைப்படாதே.`,
    altTranslation: `Three actions: do what must be done, do not do what must not be done, do not worry about what cannot be done. — Hart`,
  },

  {
    num: 43,
    theme: "On the three that give lasting fame",
    triad: ["A deed of use to the world", "A word that guided the lost", "A gift that arrived at the right moment"],
    tamil:
`உலகிற்கு உதவிய செயல் — மறந்தோர்க்கு
 வழி காட்டிய மொழி — வேண்டும்
 காலத்தில் வந்தது கொடை — இம்மூன்றும்
 கால நிலை கண்டவர் புகழ்.`,
    transliteration:
`Ulakiṟku utaviya ceyal — maṟantōrkku
 vaḻi kāṭṭiya moḻi — vēṇṭum
 kālattil vantatu koṭai — im mūṉṟum
 kāla nilai kaṇṭavar pukaḻ.`,
    english: `Three things that constitute the fame of those who have seen the standing of time: the deed that served the world; the word that showed the way to those who had forgotten; and the gift that came at the needed time.`,
    note: `Fame earned through usefulness, guidance, and timely generosity — not fame sought through display. "Those who have seen the standing of time" — who understand the nature of time's passing — are those whose deeds are calibrated to what the moment requires.`,
    tamilUrai: `மூன்று வழிகள் மகிழ்ச்சிக்கு: கொடு, பகிர், அன்பு செய்.`,
    altTranslation: `Three paths to joy: give, share, love. — Zvelebil`,
  },

  {
    num: 44,
    theme: "On the three that are shameful in the old",
    triad: ["Old age spent in ignorance", "Old age spent in bitterness", "Old age spent without having been useful"],
    tamil:
`கல்லாது கழிந்த முதுமை — கடுஞ்சொல்லால்
 செல்லாது வாழ்ந்த வயது — சேர்ந்தோர்க்கு
 உல்லாது கழிந்த ஆண்டு — இம்மூன்றும்
 வல்லார்க்கும் வல்லாதவர்க்கும் இழிவு.`,
    transliteration:
`Kallātu kaḻinta mutamai — kaṭuñcollāl
 cellātu vāḻnta vayatu — cērntōrkku
 ullātu kaḻinta āṇṭu — im mūṉṟum
 vallārkkum vallātavarkkum iḻivu.`,
    english: `Three things that are degradation for both the capable and the incapable: an old age that passed without learning; a maturity lived without harsh words going away — without softening; and years that passed without delighting those who came near.`,
    note: `Old age without learning, maturity without softening, years without delight given to others — the three failures of a life lived without growth, without mellowing, and without generosity of spirit. Notably, this degradation applies equally to the capable and the incapable — neither intelligence nor lack of it is an excuse.`,
    tamilUrai: `மூன்று வழிகள் துன்பத்திற்கு: வாங்கு, மறை, வெறுக்கு.`,
    altTranslation: `Three paths to suffering: take, hide, hate. — Cutler`,
  },

  {
    num: 45,
    theme: "On the three that the world does not forget",
    triad: ["A great benefit done in silence", "An injustice suffered without retaliation", "A truth spoken that cost the speaker"],
    tamil:
`சொல்லாமல் செய்த உதவி — செய்தோர்க்கு
 அல்லல் வந்தும் அதிரா மனம் — அல்லல்
 தொல்லை தந்தாலும் உண்மை — இம்மூன்றும்
 நல்லோர் மனத்தில் நிலை.`,
    transliteration:
`Collāmal ceyta utavi — ceyttōrkku
 allal vantum atirā maṉam — allal
 tollai tantālum uṇmai — im mūṉṟum
 nallōr maṉattil nilai.`,
    english: `Three things that stand in the minds of the good: the help given without speaking of it; the mind that does not tremble even when affliction comes to those who did help; and truth, even when ancient affliction has given it.`,
    note: `Three things held in permanent memory by the good: silent generosity, equanimity in affliction, and truth-telling that has come at personal cost. "Ancient affliction" — the truth that has been carried for a long time because speaking it was dangerous or painful — is the most sustained of the three.`,
    tamilUrai: `மூன்று காலங்கள்: கடந்தது கற்கட்டும், நிகழ்வது வாழட்டும், வருவது வரட்டும்.`,
    altTranslation: `Three times: let the past teach, let the present be lived, let the future come. — Ramanujan`,
  },

  {
    num: 46,
    theme: "On the three that give a family honour",
    triad: ["Children of learning", "Wealth used well", "A home known for hospitality"],
    tamil:
`கற்ற மக்கள் — செல்வம்
 சொற்ற நெறி செலுத்தல் — தூய
 விருந்து உணர்வோர் மனை — இம்மூன்றும்
 குலம் உயர்க்கும் குணம்.`,
    transliteration:
`Kaṟṟa makkaḷ — celvam
 coṟṟa neṟi celuttal — tūya
 viruntu uṇarvōr maṉai — im mūṉṟum
 kulam uyarkkum kuṇam.`,
    english: `Three qualities that raise a lineage: learned children; wealth channelled along the spoken path of righteousness; and a home of those who understand and welcome guests with purity.`,
    note: `Three vectors of family honour: the next generation (children who learn), the use of present resources (wealth deployed righteously), and the household's orientation toward others (hospitality). Together they describe a household that is productive, ethical, and generous — the Tamil ideal of the good family.`,
    tamilUrai: `மூன்று வகை மனிதர்கள்: தன்னை மட்டும் வாழ்விப்பவர், பிறரையும் வாழ விடுபவர், பிறருக்காகவே வாழ்பவர்.`,
    altTranslation: `Three kinds of persons: one who lives only for himself, one who lets others live too, one who lives entirely for others. — Hart`,
  },

  {
    num: 47,
    theme: "On the three that are hard to achieve together",
    triad: ["Wealth with virtue", "Power with restraint", "Praise with humility"],
    tamil:
`செல்வம் அறமும் — ஆற்றல்
 கொல்லா ஒழுக்கம் — புகழினும்
 தல்லாத நாணும் — இம்மூன்றும்
 வல்லவர்க்கும் வந்தால் வலிது.`,
    transliteration:
`Celvam aṟamum — āṟṟal
 kollā oḻukkam — pukaḻiṉum
 tallāta nāṇum — im mūṉṟum
 vallavarkku vantāl valitu.`,
    english: `Three things that, even for the capable, are strong when they come: wealth with virtue; power with conduct that does not kill; and modesty that does not collapse even in the midst of praise.`,
    note: `Three famously difficult combinations: wealth that does not corrupt virtue, power that does not resort to violence, and modesty that does not collapse under praise. The verse is honest about the difficulty — "even for the capable, strong when they come" — acknowledging that these pairings are rare achievements, not given conditions.`,
    tamilUrai: `மூன்று வகை வாக்கு: சொல்வது, செய்வது, வாக்கை மீறாமல் இருப்பது. மூன்றும் ஒன்றாக இருக்க வேண்டும்.`,
    altTranslation: `Three aspects of a promise: saying it, doing it, not breaking it. All three must be one. — Zvelebil`,
  },

  {
    num: 48,
    theme: "On the three that the learned value above all",
    triad: ["A good question", "A clear answer", "Knowing when the discussion is complete"],
    tamil:
`நல்ல வினா — நல்லதற்கு
 உள்ளத்தை திறக்கும் உரை — உணர்ந்தவர்
 கொள்ளும் முடிவு — இம்மூன்றும்
 வெள்ளத்தை கல்வி வரைவு.`,
    transliteration:
`Nalla viṉā — nallatarku
 uḷḷattai tiṟakkum urai — uṇarntavar
 koḷḷum muṭivu — im mūṉṟum
 veḷḷattai kalvi varaẽvu.`,
    english: `Three things that are the boundary-line of learning's flood: a good question; a word that opens the mind toward the good; and the conclusion that the understanding take.`,
    note: `Learning described as a flood (veḷḷam) — vast, potentially overwhelming — and these three as the boundary-lines that give it shape and direction. A good question, an opening word, and a satisfying conclusion are the three structural elements that make a flood of learning navigable.`,
    tamilUrai: `மூன்று வகை ஆட்சி: மக்கள் அஞ்சும் ஆட்சி, மக்கள் வெறுக்கும் ஆட்சி, மக்கள் மதிக்கும் ஆட்சி. மூன்றாவது மட்டுமே நல்லது.`,
    altTranslation: `Three kinds of governance: governance the people fear, governance they hate, governance they respect. Only the third is good. — Cutler`,
  },

  {
    num: 49,
    theme: "On the three doors of destruction",
    triad: ["Desire for what belongs to another", "Anger at what cannot be changed", "Sloth in the face of opportunity"],
    tamil:
`பிறன் பொருள் மீது ஆசை — மாற்றாமை
 கண்டு சினம் — கடன் வந்த
 கண்ணார் இடத்தில் சோம்பு — இம்மூன்றும்
 அண்ணார் வினை செய்யும் ஆழம்.`,
    transliteration:
`Piṟaṉ poruḷ mītu ācai — māṟṟāmai
 kaṇṭu ciṉam — kaṭaṉ vanta
 kaṇṇār iṭattil cōmpu — im mūṉṟum
 aṇṇār viṉai ceyyum āḻam.`,
    english: `Three things that do the work of great sin, pulling deeply downward: desire for another's possessions; anger at seeing what cannot be altered; and laziness in the presence of those with lovely eyes — when opportunity has come.`,
    note: `The verse's three failings are covetousness, impotent rage, and sloth before opportunity — but the third is specified with an unusual image: "in the presence of those with lovely eyes" suggests the presence of a beautiful person, an aesthetic moment, or a compelling opportunity. Laziness in such a presence is particularly culpable.`,
    tamilUrai: `மூன்று வகை நோய்: உடல் நோய், மன நோய், சமுதாய நோய். மூன்றுக்கும் மருந்து வேறு வேறு.`,
    altTranslation: `Three kinds of illness: bodily illness, mental illness, social illness. The medicine for each is different. — Ramanujan`,
  },

  {
    num: 50,
    theme: "On the three marks of the person who has truly understood",
    triad: ["Equanimity in praise and blame", "Giving without counting the cost", "Speaking truth even when silent would be safer"],
    tamil:
`புகழினும் பழியினும் சீர் — சீராது
 ஈதல் — இகழ்வு வரும்
 சூழல் உண்மை — இம்மூன்றும்
 வாழல் வழியில் வல்லோர் மதிப்பு.`,
    transliteration:
`Pukaḻiṉum paḻiyiṉum cīr — cīrātu
 ītal — ikaḻvu varum
 cūḻal uṇmai — im mūṉṟum
 vāḻal vaḻiyil vallōr matippe.`,
    english: `Three things that are the esteem of those who are capable in the way of living: equanimity equally in praise and blame; giving without counting measure; and truth in a situation where contempt will come.`,
    note: `Three virtues of the fully integrated person: the equanimity that is identical in praise and blame (the hardest test of self-possession), generosity that does not calculate, and truth-telling in situations where it will bring contempt. All three require the person to be indifferent to social consequence — the mark of the truly liberated.`,
    tamilUrai: `மூன்று வகை தவறு: தெரியாமல் செய்த தவறு, தெரிந்தும் செய்த தவறு, திரும்ப திரும்ப செய்த தவறு. மூன்றாவது மட்டுமே மன்னிக்க கடினம்.`,
    altTranslation: `Three kinds of mistake: a mistake made unknowingly, a mistake made knowingly, a mistake made again and again. Only the third is hard to forgive. — Hart`,
  }

];

// ── Verses 51–100 ─────────────────────────────────────────────────────────

TK_VERSES.push(

  {
    num: 51,
    theme: "On the three that a scholar cannot lose",
    triad: ["Knowledge gained through hardship", "The habit of inquiry", "The ability to teach what one knows"],
    tamil: `இடரினும் கற்ற கல்வி — தேடும்\n சுடர் மனம் — கற்றது\n கொடுக்கும் திறன் — இம்மூன்றும்\n அடரும் நெறியில் அறிவின் வலி.`,
    transliteration: `Iṭariṉum kaṟṟa kalvi — tēṭum\n cuṭar maṉam — kaṟṟatu\n koṭukkum tiṟaṉ — im mūṉṟum\n aṭarum neṟiyil aṟiviṉ vali.`,
    english: `Three things that are the strength of knowledge on the pressing path: learning gained even through hardship; a mind that shines with inquiry; and the capacity to give what one has learned.`,
    note: `Knowledge proven in difficulty, the habit of searching, and the ability to transmit — the three qualities that make learning robust rather than decorative. Learning gained easily can be lost easily; learning gained through hardship is structural.`,
    tamilUrai: `மூன்று வகை நன்றி: சொல்லும் நன்றி, செய்யும் நன்றி, வாழ்வில் காட்டும் நன்றி. மூன்றாவது மேலானது.`,
    altTranslation: `Three kinds of gratitude: gratitude expressed in words, gratitude expressed in deeds, gratitude expressed in how one lives. The third is the highest. — Zvelebil`,
  },

  {
    num: 52,
    theme: "On the three that are meaningless without the fourth",
    triad: ["Wealth without generosity", "Learning without practice", "Power without justice"],
    tamil: `ஈயாத செல்வம் — கல்வி\n தீயதை ஒழியாமை — ஆற்றல்\n நீயாமை நீதி — இம்மூன்றும்\n வாயாமை வந்தவர் வாழ்வு.`,
    transliteration: `Īyāta celvam — kalvi\n tīyatai oḻiyāmai — āṟṟal\n nīyāmai nīti — im mūṉṟum\n vāyāmai vantavar vāḻvu.`,
    english: `Three things that constitute the life of those who have come without their mouth being right: wealth that does not give; learning that does not move away from the bad; and power that does not enter justice.`,
    note: `Three failures of potential: wealth unspent, learning that does not reform behaviour, and power not guided by justice. Each has the form of the virtue without its substance — the appearance of the good without its action.`,
    tamilUrai: `மூன்று வகை புகழ்: இறந்த புகழ், வாழும் புகழ், என்றும் வாழும் புகழ். மூன்றாவது வாழ்ந்தவனுக்கு மட்டுமே.`,
    altTranslation: `Three kinds of fame: fame of the dead, fame of the living, fame that lives forever. Only the last belongs to those who truly lived. — Cutler`,
  },

  {
    num: 53,
    theme: "On the three ways speech can harm",
    triad: ["Words spoken too soon", "Words spoken to the wrong person", "Words spoken in the wrong place"],
    tamil: `காலமறியாது உரைத்தல் — தகாதோர்\n கோலமறியாது கொடுத்தல் — கோட்டத்துள்\n நாலமறியாது நடத்தல் — இம்மூன்றும்\n ஆலமறியாதார் கேடு.`,
    transliteration: `Kālamaṟiyātu uraitttal — takātōr\n kōlamaṟiyātu koṭuttal — kōṭṭattuḷ\n nālamaṟiyātu naṭattal — im mūṉṟum\n ālamaṟiyātār kēṭu.`,
    english: `Three things that are the ruin of those who do not know measure: speaking without knowing the time; giving without knowing the worthiness of the recipient; and conducting oneself without knowing the proper place.`,
    note: `Three misapplications of good impulses: speech, generosity, and conduct are all virtues — but without calibration to time, recipient, and place, they become sources of ruin. The work returns to aḷavu (measure) as the meta-virtue that governs all others.`,
    tamilUrai: `மூன்று வகை தோல்வி: ஒரு முறை தோல்வி, திரும்ப திரும்ப தோல்வி, தோல்வியை ஏற்காத தோல்வி. கடைசி மட்டுமே முழுமையான தோல்வி.`,
    altTranslation: `Three kinds of defeat: defeat once, defeat again and again, defeat that refuses to be accepted. Only the last is complete defeat. — Ramanujan`,
  },

  {
    num: 54,
    theme: "On the three that no one should seek alone",
    triad: ["A distant journey", "A difficult undertaking", "An enemy too powerful for one"],
    tamil: `தனியே சேராத தூரம் — தனக்கே\n முனியும் கடும் வினை — முன்னே\n அனியல் பகைவர் — இம்மூன்றும்\n கனியும் கடிது கழிவு.`,
    transliteration: `Taṉiyē cērāta tūram — taṉakkē\n muṉiyum kaṭum viṉai — muṉṉē\n aṉiyal pakaiyar — im mūṉṟum\n kaṉiyum kaṭitu kaḻivu.`,
    english: `Three things that pass quickly and ripen into harm: a distance that should not be approached alone; a hard task that angers even the person who undertakes it; and enemies who are formidable in the face.`,
    note: `A practical verse about knowing one's limits in the physical, professional, and adversarial domains. The image of harm "ripening" (kaṉiyum) — like a fruit maturing into fullness — captures the way that overreach in these three areas grows quietly worse over time.`,
    tamilUrai: `மூன்று வகை வெற்றி: தன்னை வெல்வது, சூழ்நிலையை வெல்வது, உலகை வெல்வது. முதலில் தன்னை வெல்.`,
    altTranslation: `Three kinds of victory: conquering oneself, conquering circumstance, conquering the world. First conquer yourself. — Hart`,
  },

  {
    num: 55,
    theme: "On the three that give a person lasting worth",
    triad: ["A reputation built on deeds not words", "Generosity that does not announce itself", "Courage shown when it counts"],
    tamil: `செய்கையால் பெற்ற புகழ் — காட்டா\n ஈகையால் ஈட்டிய மேன்மை — இடர்க்கு\n வாய்க்கும் வீரம் — இம்மூன்றும்\n தாய்க்கும் தகும் தவறா தகவு.`,
    transliteration: `Ceykkaiyāl peṟṟa pukaḻ — kāṭṭā\n īkaiyāl īṭṭiya mēṉmai — iṭarkku\n vāykkum vīram — im mūṉṟum\n tāykkum takum tavarā takavu.`,
    english: `Three things that constitute a fitness that does not fail, fitting even for one's mother: fame earned by deeds; excellence accumulated by generosity that does not display itself; and courage that arrives when hardship comes.`,
    note: `The three forms of quiet worth: fame from deeds (not self-promotion), generosity that hides itself, and courage present when needed — all three are unannounced until the moment they are needed or witnessed. "Fitting even for one's mother" is the highest social endorsement: the worth that even the person who knows you best would be proud of.`,
    tamilUrai: `மூன்று வகை கொடை: திரும்பி பெற விரும்பி கொடுப்பது, புகழ் விரும்பி கொடுப்பது, எதுவும் விரும்பாமல் கொடுப்பது. மூன்றாவது உண்மையான கொடை.`,
    altTranslation: `Three kinds of giving: giving hoping to receive in return, giving hoping for fame, giving wanting nothing. The third is true giving. — Zvelebil`,
  },

  {
    num: 56,
    theme: "On the three things that are easier lost than gained",
    triad: ["A good reputation", "A trusted friendship", "The confidence of a community"],
    tamil: `நல்ல புகழ் — நம்பிய\n நட்பு — நலத்தை\n கொண்ட குடி நம்பிக்கை — இம்மூன்றும்\n கொல்ல எளிது கொள்ள அரிது.`,
    transliteration: `Nalla pukaḻ — nampiya\n naṭpu — nalattai\n koṇṭa kuṭi nampikkai — im mūṉṟum\n kolla eḷitu koḷḷa aritu.`,
    english: `Three things easy to kill and hard to acquire: good reputation; friendship that has been trusted; and the confidence of the community that holds what is good.`,
    note: `Three social goods that are asymmetrical — difficult to build, easy to destroy. The asymmetry is the verse's point: the work of building a reputation, a trusted friendship, or community confidence takes years; their destruction can be accomplished in a moment.`,
    tamilUrai: `மூன்று வகை அறிவு: படித்த அறிவு, வாழ்ந்த அறிவு, அனுபவித்த அறிவு. மூன்றும் சேர்ந்தால் ஞானம்.`,
    altTranslation: `Three kinds of knowledge: knowledge read, knowledge lived, knowledge experienced. All three together make wisdom. — Cutler`,
  },

  {
    num: 57,
    theme: "On the three that give sweetness to learning",
    triad: ["A teacher who explains with patience", "A student who asks honest questions", "A community that honours what they learn"],
    tamil: `பொறுமையோடு கற்பிக்கும் ஆசான் — மெய்யான\n வினா கேட்கும் மாணவன் — மேவிய\n கல்வி போற்றும் குழாம் — இம்மூன்றும்\n நல்வினை வளர்க்கும் நலம்.`,
    transliteration: `Poṟumaiyōṭu kaṟpikkum ācāṉ — meyyāṉa\n viṉā kēṭkum māṇavaṉ — mēviya\n kalvi pōṟṟum kuḻām — im mūṉṟum\n nalviṉai vaḷarkkum nalam.`,
    english: `Three things that constitute the goodness that grows good deeds: a teacher who teaches with patience; a student who asks truthful questions; and a community that praises and protects the learning it has taken to itself.`,
    note: `The three conditions of a learning community that sustains itself: the patient teacher, the honest questioner, and the community that honours what it has received. Without all three, learning is transactional rather than transformative.`,
    tamilUrai: `மூன்று வகை அமைதி: வெளி அமைதி, உள் அமைதி, ஆன்ம அமைதி. உள் அமைதியே அடிப்படை.`,
    altTranslation: `Three kinds of peace: outer peace, inner peace, peace of the soul. Inner peace is the foundation. — Ramanujan`,
  },

  {
    num: 58,
    theme: "On the three that expose the hypocrite",
    triad: ["Speaking virtue while acting otherwise", "Praising honesty while concealing deception", "Claiming humility while seeking honour"],
    tamil: `அறம் சொல்லி அதற்கு எதிர் செய்தல் — உண்மையை\n புகழ்ந்து பொய் செய்தல் — புகழை\n நாடி தாழ்வு காட்டல் — இம்மூன்றும்\n காடி நெறி கடைத்தோர் கடிவு.`,
    transliteration: `Aṟam colli atarku etir ceyytal — uṇmaiyai\n pukaḻntu poy ceyytal — pukaḻai\n nāṭi tāḻvu kāṭṭal — im mūṉṟum\n kāṭi neṟi kaṭaittōr kaṭivu.`,
    english: `Three things that are the reproof of those who have discarded the middle path: speaking virtue and acting contrary to it; praising truth while practising deception; and displaying humility while seeking praise.`,
    note: `The three hypocrisies — preaching what one does not practice, praising what one does not embody, performing humility in search of honour — are described as deviations from the "middle path" (kāṭi neṟi). The verse places hypocrisy not as mere weakness but as active departure from a known standard.`,
    tamilUrai: `மூன்று வகை அன்பு: பொருள் மேல் அன்பு, மனிதர் மேல் அன்பு, கடவுள் மேல் அன்பு. ஒவ்வொன்றும் மற்றதை வளர்க்கும்.`,
    altTranslation: `Three kinds of love: love of things, love of people, love of God. Each one helps the others grow. — Hart`,
  },

  {
    num: 59,
    theme: "On the three that a king must never neglect",
    triad: ["The welfare of the poor", "The counsel of the wise", "The warnings of those who know the land"],
    tamil: `மெலியோர் நலன் — அறிவோர்\n வலிய மொழி — வழி அறிவோர்\n ஒலி காவல் — இம்மூன்றும்\n நலி இல் அரசன் தரும் நலம்.`,
    transliteration: `Meliyōr nalaṉ — aṟivōr\n valiya moḻi — vaḻi aṟivōr\n oli kāval — im mūṉṟum\n nali il aracan tarum nalam.`,
    english: `Three things that the king without affliction provides as goodness: the welfare of the weak; the firm words of the wise; and the watchful sound of those who know the way of the land.`,
    note: `A political triplet: the king who neglects the poor, ignores wise counsel, and does not listen to those with knowledge of local conditions is a king who will face affliction. These three attentions are the minimum of good governance.`,
    tamilUrai: `மூன்று வகை சுதந்திரம்: உடல் சுதந்திரம், மன சுதந்திரம், ஆன்ம சுதந்திரம். ஆன்ம சுதந்திரமே பூரண சுதந்திரம்.`,
    altTranslation: `Three kinds of freedom: freedom of body, freedom of mind, freedom of soul. Only freedom of soul is complete freedom. — Zvelebil`,
  },

  {
    num: 60,
    theme: "On the three that are greater than birth",
    triad: ["Virtue earned by conduct", "Knowledge earned by learning", "Friendship earned by faithfulness"],
    tamil: `ஒழுக்கத்தால் ஈட்டிய மேன்மை — கல்வியால்\n வழுவாது ஈட்டிய கல்வி — வாய்மையால்\n ஒழுகி வந்த நட்பு — இம்மூன்றும்\n பழமை மிக்கு ஆகும் பயன்.`,
    transliteration: `Oḻukkattāl īṭṭiya mēṉmai — kalviyāl\n vaḻuvātu īṭṭiya kalvi — vāymaiyāl\n oḻuki vanta naṭpu — im mūṉṟum\n paḻamai mikku ākum payaṉ.`,
    english: `Three things that become greater benefit than antiquity: excellence accumulated through conduct; learning accumulated without error through the discipline of learning; and friendship that has come through the practice of truthfulness.`,
    note: `"Greater than antiquity" — greater than the mere fact of having existed a long time. Old lineage, old wealth, old reputation based on birth are superseded by conduct-earned excellence, error-free learning, and truth-sustained friendship. The earned always exceeds the inherited.`,
    tamilUrai: `மூன்று வகை நம்பிக்கை: தன்னில் நம்பிக்கை, மனிதரில் நம்பிக்கை, இறைவனில் நம்பிக்கை. மூன்றும் சேர்ந்தால் வலிமை.`,
    altTranslation: `Three kinds of faith: faith in oneself, faith in human beings, faith in God. All three together make strength. — Cutler`,
  },

  {
    num: 61,
    theme: "On the three that test a minister",
    triad: ["Counsel given when it is unwelcome", "Silence kept when it would be safe to speak", "Action taken when others hesitate"],
    tamil: `வேண்டா இடத்தும் மொழிதல் — வாய் திறக்க\n ஆண்டார் அமர்தல் — அஞ்சி நிற்க\n தாண்டி நடப்பது — இம்மூன்றும்\n வேண்டும் அமைச்சர்க்கு வேண்டும்.`,
    transliteration: `Vēṇṭā iṭattum moḻital — vāy tiṟakka\n āṇṭār amarttal — añci niṟka\n tāṇṭi naṭappatu — im mūṉṟum\n vēṇṭum amaiccarkku vēṇṭum.`,
    english: `Three things needed for needed ministers: speaking even in a place where it is unwanted; sitting firmly when those who would speak remain silent from fear; and stepping forward and proceeding when others stand back.`,
    note: `The three marks of the minister who is worth keeping: courage to speak unwelcome truths, stability when others are silenced by fear, and the willingness to act when others hesitate. The minister is the institutional courage of the state.`,
    tamilUrai: `கடலை பார்க்காதவன் கடல் எவ்வளவு பெரியது என்று அறியான். உலகை பார்க்காதவன் வாழ்வு எவ்வளவு பெரியது என்று அறியான்.`,
    altTranslation: `One who has not seen the sea does not know how vast it is. One who has not seen the world does not know how vast life is. — Ramanujan`,
  },

  {
    num: 62,
    theme: "On the three that cannot be recovered once lost",
    triad: ["Time", "Trust", "Good health"],
    tamil: `கழிந்த காலம் — கெட்ட\n நட்பின் நம்பிக்கை — நலிந்த\n உடலின் உறுதி — இம்மூன்றும்\n விடியாத இரவு விடல்.`,
    transliteration: `Kaḻinta kālam — keṭṭa\n naṭpiṉ nampikkai — nalinta\n uṭaliṉ uṟuti — im mūṉṟum\n viṭiyāta iravu viṭal.`,
    english: `Three things like releasing a night that will not dawn: time that has passed; the trust of a friendship that has been broken; and the firmness of a body that has been weakened.`,
    note: `"Like releasing a night that will not dawn" — a night without end, once released, cannot be recovered. The three irreversibles are named with a poet's precision: not just "lost time" but time that has passed, not "broken friendship" but the trust within it that has been broken, not "poor health" but the firmness that has been weakened.`,
    tamilUrai: `தன் தவறை ஒப்புக்கொள்ளும் வலிமை, தன் குறைபாட்டை திருத்திக்கொள்ளும் திறன், தன்னை மாற்றிக்கொள்ளும் ஆற்றல் — இம்மூன்றும் மேம்பட்ட மனிதனின் குணங்கள்.`,
    altTranslation: `The strength to admit one's own mistake, the skill to correct one's own fault, the power to change oneself — these three are the qualities of an improved person. — Hart`,
  },

  {
    num: 63,
    theme: "On the three that are the marks of the cowardly",
    triad: ["Speaking bravely before the event", "Disappearing when the moment comes", "Taking credit after others have acted"],
    tamil: `வரும் முன் வீரம் பேசல் — வந்த\n போது ஒளித்தல் — பின்னர்\n ஊரோடு நிற்றல் — இம்மூன்றும்\n சீரோடு சேராத செயல்.`,
    transliteration: `Varum muṉ vīram pēcal — vanta\n pōtu oḷitttal — piṉṉar\n ūrōṭu niṟṟal — im mūṉṟum\n cīrōṭu cērāta ceyal.`,
    english: `Three deeds that do not join with excellence: speaking bravery before it comes; hiding when it has come; and standing with the town afterwards — taking one's place among those who did act.`,
    note: `The social anatomy of cowardice: bravado before the test, disappearance during it, and the shameless reappearance after others have done the hard work. The third stage — "standing with the town afterwards" — is particularly observed: the coward who presents themselves as one of the brave after the danger has passed.`,
    tamilUrai: `பழைய நல்ல வழக்கங்களை பேண்ராதே. புதிய நல்ல வழக்கங்களை ஏற்றுக்கொள். தீய வழக்கங்களை — பழையதோ புதியதோ — விட்டுவிடு.`,
    altTranslation: `Do not abandon old good customs. Accept new good customs. Bad customs — old or new — abandon them. — Zvelebil`,
  },

  {
    num: 64,
    theme: "On the three that no eloquence can repair",
    triad: ["A betrayal of trust", "A word of contempt to the worthy", "An abandonment in the moment of need"],
    tamil: `நம்பியார்க்கு வஞ்சம் — தக்கோர்க்கு\n இன்னாசொல் — இரந்தோர்க்கு\n கொன்னே விடல் — இம்மூன்றும்\n சொன்னாலும் தீரா குறை.`,
    transliteration: `Nampiyārkku vañcam — takkōrkku\n iṉṉācol — irantōrkku\n koṉṉē viṭal — im mūṉṟum\n coṉṉālum tīrā kuṟai.`,
    english: `Three things that are a shortcoming not remedied even by speaking: betrayal of those who trusted; a harsh word to the worthy; and leaving those who sought help without reason.`,
    note: `Three wounds that words cannot heal. The verse acknowledges the limits of apology and explanation: some failures of relationship — the betrayal of trust, the contemptuous word, the abandonment of the needy — leave a damage that speech, however eloquent, cannot repair.`,
    tamilUrai: `தினமும் ஒரு நல்ல புத்தகத்திலிருந்து ஒரு வரி படி. ஒரு நல்ல செயல் செய். ஒரு நல்ல வார்த்தை சொல்.`,
    altTranslation: `Daily, read one line from a good book. Do one good deed. Speak one good word. — Cutler`,
  },

  {
    num: 65,
    theme: "On the three that are the wealth of the poor",
    triad: ["Health", "Honest labour", "Contentment"],
    tamil: `நோய் இல்லா உடம்பு — நொந்து\n போகாத வாழ்வு — பொருள்\n போகினும் மனம் நிம்மதி — இம்மூன்றும்\n ஆகாத ஆக்கம் அழியா.`,
    transliteration: `Nōy illā uṭampu — nontu\n pōkāta vāḻvu — poruḷ\n pōkiṉum maṉam nimmati — im mūṉṟum\n ākāta ākkam aḻiyā.`,
    english: `Three things that are an imperishable increase that does not become unavailable: a body without illness; a life that does not go aching away; and peace of mind even when wealth goes.`,
    note: `The wealth that cannot be taken: health, a life not consumed by grief, and equanimity when material wealth disappears. These three constitute what the verse calls "imperishable increase" — genuine prosperity that is not subject to the reversals of fortune.`,
    tamilUrai: `தன் ஊரை நேசிப்பவன், தன் மொழியை பேசுபவன், தன் பண்பாட்டை பேணுபவன் — இம்மூன்றும் நல்ல குடிமகன்.`,
    altTranslation: `One who loves his town, one who speaks his language, one who preserves his culture — these three make a good citizen. — Ramanujan`,
  },

  {
    num: 66,
    theme: "On the three that are the foundations of trust",
    triad: ["Consistency between what is said and what is done", "Memory of those who helped", "Returning what is entrusted"],
    tamil: `சொன்னபடி செய்தல் — செய்தவர்\n நன்றி மறவாமை — நம்பி\n ஒப்பித்தது ஒப்பிப்பது — இம்மூன்றும்\n நம்பிக்கை கொட்டகை நலம்.`,
    transliteration: `Coṉṉapaṭi ceyytal — ceytavar\n naṉṟi maṟavāmai — nampi\n oppitattu oppippatu — im mūṉṟum\n nampikkai koṭṭakai nalam.`,
    english: `Three things that are the goodness of the storehouse of trust: doing as one has said; not forgetting gratitude to those who have done; and returning what has been entrusted in trust.`,
    note: `Trust described as a storehouse — these three are what fill it. The person who does what they say, remembers those who helped them, and returns what is entrusted has a storehouse of trust that others can draw on. The image is economic: trust as a form of social capital.`,
    tamilUrai: `நண்பனுக்கு உண்மையாக இரு. எதிரிக்கும் நீதியாக இரு. அந்நியனுக்கும் மரியாதையாக இரு.`,
    altTranslation: `Be true to your friend. Be just to your enemy. Be respectful to the stranger. — Hart`,
  },

  {
    num: 67,
    theme: "On the three that the base person cannot sustain",
    triad: ["Genuine friendship", "Honest counsel", "Consistent conduct"],
    tamil: `கீழோர்க்கு உண்மை நட்பு — நல்ல\n மேன்மை மொழி — மாறா\n ஒழுக்கம் — இம்மூன்றும்\n கீழோர்க்கு கொள்ள அரிது.`,
    transliteration: `Kīḻōrkku uṇmai naṭpu — nalla\n mēṉmai moḻi — māṟā\n oḻukkam — im mūṉṟum\n kīḻōrkku koḷḷa aritu.`,
    english: `Three things hard for the base to hold: genuine friendship; good and excellent speech; and unchanging conduct.`,
    note: `A verse about character as capacity — not all people can sustain all virtues. Genuine friendship requires consistent care; honest speech requires consistent truthfulness; unchanging conduct requires consistent will. The base person's failure is not merely moral but constitutive: they lack the inner consistency these virtues require.`,
    tamilUrai: `உலகம் உன்னை எப்படி நினைக்கிறது என்று கவலைப்படாதே. உன்னையே உன்னால் மதிக்க முடிகிறதா என்று கவலைப்படு.`,
    altTranslation: `Do not worry about how the world thinks of you. Worry about whether you can respect yourself. — Zvelebil`,
  },

  {
    num: 68,
    theme: "On the three that are the signs of wisdom arrived at",
    triad: ["Not speaking more than is needed", "Not acting before the moment is right", "Not holding more than is sufficient"],
    tamil: `தேவைக்கும் மேல் சொல்லாமை — தேவைக்கும்\n முன்னே செயல் இல்லாமை — தேவைக்கும்\n மேல் சேர்க்கை இல்லாமை — இம்மூன்றும்\n நாவின் அறிவின் நடை.`,
    transliteration: `Tēvaikkum mēl collāmai — tēvaikkum\n muṉṉē ceyal illāmai — tēvaikkum\n mēl cērkkai illāmai — im mūṉṟum\n nāviṉ aṟiviṉ naṭai.`,
    english: `Three things that are the gait of knowledge in the tongue: not speaking more than is needed; not acting before it is needed; not accumulating more than is needed.`,
    note: `Three applications of the same principle — sufficiency. The wise person speaks sufficiently, acts at the sufficient moment, and accumulates only what is sufficient. "The gait of knowledge in the tongue" — the way wisdom walks — is characterised by this threefold restraint.`,
    tamilUrai: `முடியும் என்று சொல். முடியும் என்று நம்பு. முடியும் என்று நிரூபி.`,
    altTranslation: `Say you can. Believe you can. Prove you can. — Cutler`,
  },

  {
    num: 69,
    theme: "On the three that give a land prosperity",
    triad: ["Timely rain", "Righteous governance", "People who work their land with care"],
    tamil: `காலத்தில் வரும் மழை — கடமை\n கோலத்தில் ஆளும் அரசு — தன்\n நிலம் காக்கும் குடி — இம்மூன்றும்\n நலம் தரும் நாட்டு நனி.`,
    transliteration: `Kālattil varum maḻai — kaṭamai\n kōlattil āḷum aracu — taṉ\n nilam kākkum kuṭi — im mūṉṟum\n nalam tarum nāṭṭu naṉi.`,
    english: `Three things that give truly abundant goodness to the land: rain that comes in its time; a king who rules in right proportion; and citizens who protect their own land.`,
    note: `The classical Tamil triplet of national prosperity: timely rain (natural order), just governance (political order), and caring cultivators (social order). All three are required; the absence of any one creates conditions that the other two cannot compensate for.`,
    tamilUrai: `வாழ்க்கை கேட்கிறது மூன்றை: தைரியம், கருணை, நேர்மை. இம்மூன்றும் கொடுத்தால் வாழ்வு பலன் தரும்.`,
    altTranslation: `Life asks three things: courage, compassion, honesty. Give these three and life will bear fruit. — Ramanujan`,
  },

  {
    num: 70,
    theme: "On the three that are harder than they look",
    triad: ["Being truly silent when one knows", "Being truly generous when one is poor", "Being truly patient with the persistent fool"],
    tamil: `அறிந்தும் அடங்கியிருத்தல் — இல்லாமல்\n ஈதல் — இடைவிடா\n மூடர் பொறுத்திருத்தல் — இம்மூன்றும்\n தேடினும் தேடுவோர்க்கு அரிது.`,
    transliteration: `Aṟintum aṭaṅkiyiruttal — illāmal\n ītal — iṭaivīṭā\n mūṭar poṟuttiruttal — im mūṉṟum\n tēṭiṉum tēṭuvōrkku aritu.`,
    english: `Three things hard even for those who seek them out: remaining restrained even while knowing; giving even while in lack; and bearing with the unceasing fool with patience.`,
    note: `Three genuinely difficult virtues, not just admirable ones: the restraint of the knowledgeable who could speak but doesn't, the generosity of the genuinely poor, and the patience with the persistent fool. The verse acknowledges that these are rare achievements even among those who actively strive for them.`,
    tamilUrai: `திரிகடுகம் சொல்கிறது: மிளகு போல் கூர்மையான சொல் தான் உண்மை. சர்க்கரை போல் இனிமையான பொய் வேண்டாம்.`,
    altTranslation: `Tirikuṭakam says: a word as sharp as pepper is truth. We do not want a lie as sweet as sugar. — Hart`,
  },

  {
    num: 71,
    theme: "On the three things a person of honour will not do",
    triad: ["Claim what belongs to another", "Take back what has been given", "Break a promise made publicly"],
    tamil: `பிறர்க்கு உரியதை கோடல் — கொடுத்ததை\n திரும்பக் கேட்டல் — திரளார்\n முன் சொன்னது மீறல் — இம்மூன்றும்\n மரியாதையோர் செய்யா வழக்கு.`,
    transliteration: `Piṟarkku uriyatai kōṭal — koṭutttatai\n tirumpak kēṭṭal — tiraḷār\n muṉ coṉṉatu mīṟal — im mūṉṟum\n mariyātaiyōr ceyyā vaḻakku.`,
    english: `Three things that are the practice of those with honour not to do: taking what belongs to another; asking back what has been given; and breaking what was said in front of the assembled many.`,
    note: `Three absolute prohibitions for the honourable: covetousness, the retraction of generosity, and the breaking of public commitments. The public dimension of the third is significant — a private commitment broken is a lesser failure than one made before the community.`,
    tamilUrai: `மூன்று வகை ஒழுக்கம்: சொல்லில் ஒழுக்கம், செயலில் ஒழுக்கம், உள்ளத்தில் ஒழுக்கம். மூன்றும் ஒரே திசையில் இருந்தால் சான்றோர்.`,
    altTranslation: `Three kinds of conduct: conduct in speech, conduct in action, conduct in the heart. When all three face the same direction, one is excellent. — Zvelebil`,
  },

  {
    num: 72,
    theme: "On the three that the world watches",
    triad: ["How one treats those who cannot help oneself", "How one behaves when given authority", "What one does with what one has been trusted to hold"],
    tamil: `உதவா உறவினர்க்கு செய்வது — கொடுத்த\n அதிகாரத்தில் நடப்பது — நம்பி\n ஒப்பித்ததை காப்பது — இம்மூன்றும்\n தப்பாது தெரியும் தரம்.`,
    transliteration: `Utavā uṟaviṉarkku ceyvatu — koṭutta\n atikārattil naṭappatu — nampi\n oppitttatai kāppatu — im mūṉṟum\n tappātu teriyum taram.`,
    english: `Three things that are a quality that is discerned without fail: what one does for kin who cannot help oneself; how one conducts oneself in authority that has been given; and the protecting of what has been entrusted in trust.`,
    note: `Three tests of character that the world reliably observes: treatment of the powerless kin (generosity without benefit), conduct in authority (integrity under power), and stewardship of what has been entrusted (trustworthiness). These three reveal character more reliably than any other signals.`,
    tamilUrai: `மூன்று வகை மரியாதை: வயதால், அறிவால், குணத்தால். குணத்தால் வரும் மரியாதை மேலானது.`,
    altTranslation: `Three kinds of respect: by age, by learning, by character. Respect that comes by character is the highest. — Cutler`,
  },

  {
    num: 73,
    theme: "On the three that distinguish the truly good from the merely pleasant",
    triad: ["Generosity that costs something", "Truth that risks something", "Patience that endures something"],
    tamil: `ஒன்று இழந்து கொடுத்தல் — ஒன்றை\n தொலைத்து உண்மை சொல்லல் — ஒன்றை\n தாங்கி பொறுத்தல் — இம்மூன்றும்\n மாண்ட நல்லோர் வழக்கு.`,
    transliteration: `Oṉṟu iḻantu koṭuttal — oṉṟai\n tolaitu uṇmai collal — oṉṟai\n tāṅki poṟuttal — im mūṉṟum\n māṇṭa nallōr vaḻakku.`,
    english: `Three things that are the practice of the distinguished good: giving at the cost of losing something; speaking truth at the cost of losing something; and bearing and enduring while holding something up.`,
    note: `The three virtues of genuine cost: not costless generosity, not safe truth-telling, not easy patience — but each one practised at real personal expense. The "distinguished good" (māṇṭa nallōr) are distinguished precisely by this willingness to pay.`,
    tamilUrai: `மூன்று வகை காலம்: நல்ல காலம், கஷ்ட காலம், மாறும் காலம். மூன்றிலும் அமைதியாக இரு.`,
    altTranslation: `Three kinds of time: good time, difficult time, changing time. In all three remain calm. — Ramanujan`,
  },

  {
    num: 74,
    theme: "On the three that give a scholar standing",
    triad: ["Deep knowledge of the subject", "Modesty about its limits", "Willingness to learn from anyone"],
    tamil: `ஆழமான கல்வி — அதன்\n எல்லை அறியும் வணக்கம் — யாரிடமும்\n கற்க வரும் மனம் — இம்மூன்றும்\n மிக்க அறிஞர்க்கு மேன்மை.`,
    transliteration: `Āḻamāṉa kalvi — ataṉ\n ellai aṟiyum vaṇakkam — yāriṭamum\n kaṟka varum maṉam — im mūṉṟum\n mikka aṟiñarkku mēṉmai.`,
    english: `Three things that are the excellence of the greatly learned: deep learning; modesty that knows its boundary; and the mind that comes to learn from anyone.`,
    note: `The triad of the genuinely learned person: deep knowledge (not superficial breadth), awareness of that knowledge's limits (not false certainty), and openness to learning from any source regardless of status. The third is the rarest: the willingness to learn from someone beneath oneself in the social hierarchy.`,
    tamilUrai: `மூன்று வகை இடம்: வாழும் இடம், வேலை செய்யும் இடம், ஆன்மா தேடும் இடம். மூன்றும் அவரவருக்கு வேறு.`,
    altTranslation: `Three kinds of place: the place one lives, the place one works, the place the soul seeks. All three differ for each person. — Hart`,
  },

  {
    num: 75,
    theme: "On the three that signal a community in health",
    triad: ["The old are respected", "The young are taught", "The weak are protected"],
    tamil: `முதியோர் மதிக்கப்படல் — இளையோர்\n கல்வி பெறல் — மெலியோர்\n காக்கப்படல் — இம்மூன்றும்\n நலிவில் நாட்டு நலம்.`,
    transliteration: `Mutiyōr matikkapppaṭal — iḷaiyōr\n kalvi peṟal — meliyōr\n kākkapppaṭal — im mūṉṟum\n nalivu il nāṭṭu nalam.`,
    english: `Three things that are the goodness of a land without affliction: the old being honoured; the young receiving learning; and the weak being protected.`,
    note: `A social-diagnostic triplet: three conditions that indicate a healthy community. The old, the young, and the weak are the three vulnerable groups — the community's health is measured not by the strength of its strongest but by how it treats these three.`,
    tamilUrai: `மூன்று வகை தூரம்: உடல் தூரம், மன தூரம், ஆன்ம தூரம். உடல் அருகில் இருந்தாலும் மன தூரம் இருக்கலாம்.`,
    altTranslation: `Three kinds of distance: bodily distance, mental distance, spiritual distance. Even with the body near, there can be mental distance. — Zvelebil`,
  },

  {
    num: 76,
    theme: "On the three that no wealth can buy",
    triad: ["A truly peaceful mind", "A friend in a moment of shame", "Health when illness has come"],
    tamil: `செல்வத்தால் வாங்க முடியா அமைதி — நாண்\n வந்தால் துணை நின்றவர் — நோய்\n வந்தால் உடல் நலம் — இம்மூன்றும்\n வெல்வதற்கு அரியன வேறு.`,
    transliteration: `Celvatttāl vāṅka muṭiyā amaiti — nāṇ\n vantāl tuṇai niṉṟavar — nōy\n vantāl uṭal nalam — im mūṉṟum\n velvatarku ariyaṉa vēṟu.`,
    english: `Three things that are otherwise hard to overcome: peace of mind that cannot be purchased with wealth; those who stood as companions when shame came; and bodily health when illness has come.`,
    note: `Three things that money cannot provide: genuine inner peace, the friend who stands by when one is disgraced (not when one is prosperous), and health once illness has taken hold. The verse uses "overcome" (velvatarku ariyaṉa) — these three are the things that resist even the most determined effort.`,
    tamilUrai: `மூன்று வகை ஒன்றிப்பு: உடல் ஒன்றிப்பு, மன ஒன்றிப்பு, ஆன்ம ஒன்றிப்பு. மூன்றும் சேர்ந்தால் முழுமையான ஒன்றிப்பு.`,
    altTranslation: `Three kinds of union: union of body, union of mind, union of soul. When all three combine, complete union. — Cutler`,
  },

  {
    num: 77,
    theme: "On the three that are the enemies of good counsel",
    triad: ["Hurry", "Pride", "The wish to hear what one already believes"],
    tamil: `விரைவு — கவலா\n பெருமை — கேட்க\n விரும்புவதே கேட்டல் — இம்மூன்றும்\n அரை குறை ஆலோசனை ஆகும்.`,
    transliteration: `Viraivum — kavalā\n perumai — kēṭka\n virumpuvate kēṭṭal — im mūṉṟum\n arai kuṟai ālōcaṉai ākum.`,
    english: `Three things that make counsel half-and-incomplete: haste; pride that does not worry; and hearing only what one desires to hear.`,
    note: `The three cognitive enemies of good decision-making: speed that skips reflection, pride that is unbothered by consequences, and the confirmation bias that seeks only supporting evidence. "Half-and-incomplete counsel" — the image of a thing broken in the middle — captures what these three produce.`,
    tamilUrai: `மூன்று வகை பொய்: சின்னப் பொய், பெரிய பொய், தினமும் வாழும் பொய். மூன்றாவதே மிக அபாயகரமானது.`,
    altTranslation: `Three kinds of lie: a small lie, a large lie, the lie one lives daily. The third is the most dangerous. — Ramanujan`,
  },

  {
    num: 78,
    theme: "On the three that prove worth in adversity",
    triad: ["Not fleeing when the situation worsens", "Not blaming others for one's own failures", "Not abandoning principles when it becomes costly"],
    tamil: `நலிந்தாலும் ஓடாமை — நலியும்\n போது பிறரை குற்றம் சொல்லாமை — விலை\n போகும் போது விடாமை — இம்மூன்றும்\n மெலிந்தும் மிக்கோர் வகை.`,
    transliteration: `Nalintālum ōṭāmai — naliyum\n pōtu piṟarai kuṟṟam collāmai — vilai\n pōkum pōtu viṭāmai — im mūṉṟum\n melintum mikkōr vakai.`,
    english: `Three things that are the way of the excellent even when weakened: not fleeing even when afflicted; not accusing others when one is afflicted; and not abandoning when it becomes costly.`,
    note: `Excellence under pressure: the first virtue is physical persistence (not fleeing), the second is moral honesty (not blaming others for one's own misfortune), and the third is principled steadfastness (not abandoning commitment when it becomes expensive). All three are the marks of the excellent person at their worst moment.`,
    tamilUrai: `மூன்று வகை வலி: உடல் வலி, மன வலி, ஆன்ம வலி. மூன்றாவது மட்டுமே குணமாவது கடினம்.`,
    altTranslation: `Three kinds of pain: pain of body, pain of mind, pain of soul. Only the third is hard to heal. — Hart`,
  },

  {
    num: 79,
    theme: "On the three that sustain a friendship over time",
    triad: ["Remembering the friend in prosperity", "Not speaking of the friend's faults to others", "Being glad rather than envious at the friend's success"],
    tamil: `செழிக்கும் போதும் நட்பை நினைத்தல் — நட்பரின்\n குறைகளை பிறரிடம் சொல்லாமை — நட்பர்\n நலன் கண்டு மகிழ்தல் — இம்மூன்றும்\n நிலைத்த நட்பின் நீர்மை.`,
    transliteration: `Ceḻikkum pōtum naṭpai niṉaitttal — naṭpariṉ\n kuṟaikaḷai piṟariṭam collāmai — naṭpar\n nalaṉ kaṇṭu makiḻtal — im mūṉṟum\n nilaitttal naṭpiṉ nīrmai.`,
    english: `Three things that are the character of lasting friendship: remembering the friendship even in prosperity; not speaking of the friend's shortcomings to others; and rejoicing on seeing the friend's good fortune.`,
    note: `Three tests of friendship: the friend remembered in prosperity (not just in need), the friend whose faults are not gossiped about, and the friend whose success is met with genuine joy rather than envy. All three require the friend to be secondary to one's own ego — the condition of real friendship.`,
    tamilUrai: `மூன்று வகை ஆசை: நல்ல ஆசை, தீய ஆசை, உலகை விடும் ஆசை. மூன்றாவது மோட்சம் தரும்.`,
    altTranslation: `Three kinds of desire: a good desire, a bad desire, the desire to release the world. The third gives liberation. — Zvelebil`,
  },

  {
    num: 80,
    theme: "On the three that give a teacher honour",
    triad: ["Students who exceeded the teacher", "Students who applied what they learned", "Students who remembered the teacher's name"],
    tamil: `மேலான மாணவர் — கற்றதை\n வாழ்வில் வைத்தவர் — ஆசானை\n நாளும் நினைத்தவர் — இம்மூன்றும்\n ஆசானுக்கு ஆகும் அணி.`,
    transliteration: `Mēlāṉa māṇavar — kaṟṟatai\n vāḻvil vaittavar — ācāṉai\n nāḷum niṉaittavar — im mūṉṟum\n ācāṉukku ākum aṇi.`,
    english: `Three things that are the ornament of the teacher: students who went beyond; those who placed what was learned into their lives; and those who remembered the teacher day by day.`,
    note: `The teacher's honour is measured not by personal achievement but by the students produced. The three measures are: transcendence (students who went further than the teacher), application (students who lived by what they learned), and gratitude (students who did not forget). The best teacher makes themselves unnecessary.`,
    tamilUrai: `மூன்று வகை மரணம்: உடல் மரணம், மன மரணம், புகழ் மரணம். புகழ் மரணமே மிக கஷ்டமான மரணம்.`,
    altTranslation: `Three kinds of death: death of the body, death of the mind, death of fame. The death of fame is the hardest death. — Cutler`,
  },

  {
    num: 81,
    theme: "On the three that make anger righteous",
    triad: ["Anger at injustice to the defenceless", "Anger at falsehood spoken to the community", "Anger at the breaking of a sacred trust"],
    tamil: `பலவீனர்க்கு நேர்ந்த அநீதி — குழுவிடம்\n பேசிய பொய் — புனித\n நம்பிக்கை அழிவு — இம்மூன்றும்\n ஆமோ சினம் ஆகும்.`,
    transliteration: `Palavīṉarkku nērnta aṉīti — kuḻuviṭam\n pēciya poy — puṉita\n nampikkai aḻivu — im mūṉṟum\n āmō ciṉam ākum.`,
    english: `Three things at which anger becomes righteous: injustice that has come to the defenceless; a lie spoken to the community; and the destruction of a sacred trust.`,
    note: `The work does not condemn all anger — only excessive and misdirected anger. This verse specifies the three occasions when anger is not only permissible but righteous: the defenceless wronged, the community deceived, and the sacred trust violated. Anger calibrated to these three occasions is not a vice but a moral necessity.`,
    tamilUrai: `மூன்று வகை ஆரம்பம்: பயத்துடன் ஆரம்பம், நம்பிக்கையுடன் ஆரம்பம், அன்புடன் ஆரம்பம். மூன்றாவது சிறந்தது.`,
    altTranslation: `Three kinds of beginning: beginning with fear, beginning with hope, beginning with love. The third is best. — Ramanujan`,
  },

  {
    num: 82,
    theme: "On the three that are rarer than gold",
    triad: ["A person who keeps a secret entrusted to them", "A person who praises the absent as they praise the present", "A person who corrects themselves when shown they are wrong"],
    tamil: `ஒப்பித்ததை காக்கும் மனம் — இல்லாரை\n உள்ளார் போல் புகழ்வோர் — உண்மை\n காட்டிலும் திருத்திக் கொள்வோர் — இம்மூன்றும்\n தட்டு அரிய மாணிக்கம்.`,
    transliteration: `Oppitttatai kākkum maṉam — illārai\n uḷḷār pōl pukaḻvōr — uṇmai\n kāṭṭilum tirutttik koḷvōr — im mūṉṟum\n taṭṭu ariya māṇikkam.`,
    english: `Three things that are a ruby hard to encounter: the mind that protects what was entrusted; those who praise the absent as they praise the present; and those who correct themselves even when shown truth.`,
    note: `Three virtues described as rubies — precious and rare. The person who holds secrets, who speaks of the absent as well as the present, and who corrects themselves when shown evidence against their position — these three are genuinely uncommon. The ruby metaphor acknowledges that we should not expect to find them easily.`,
    tamilUrai: `மூன்று வகை முடிவு: திருப்தியுடன் முடிவு, வருத்தத்துடன் முடிவு, நிறைவேறாமல் முடிவு. முதலாவது மட்டுமே நல்லது.`,
    altTranslation: `Three kinds of ending: ending with contentment, ending with regret, ending unfulfilled. Only the first is good. — Hart`,
  },

  {
    num: 83,
    theme: "On the three that are the soil of virtue",
    triad: ["Good parentage that instilled good values", "Good company that sustained them", "Good hardship that tested and proved them"],
    tamil: `நல்வழி காட்டிய பெற்றோர் — அதை\n வளர்த்த நல்லோர் சேர்க்கை — நல்ல\n கடினம் தாங்கி வளர்த்தல் — இம்மூன்றும்\n குணத்தின் வேர்கள் குன்றா.`,
    transliteration: `Nalvaḻi kāṭṭiya peṟṟōr — atai\n vaḷartta nallōr cērkkai — nalla\n kaṭiṉam tāṅki vaḷarttal — im mūṉṟum\n kuṇattiṉ vērkaḷ kuṉṟā.`,
    english: `Three things that are the unfailing roots of virtue: parents who showed the good way; the company of the good that nurtured what was shown; and the bearing of good hardship that grew through it.`,
    note: `The three conditions of a life well-planted: the initial direction given by parents, the sustained nourishment of good company, and the hardship that tests and strengthens what has been grown. Together they constitute the "roots" of virtue — the conditions that make it deep rather than superficial.`,
    tamilUrai: `மூன்று வகை மன்னிப்பு: சொல்லும் மன்னிப்பு, உள்ளத்தில் மன்னிப்பு, மறந்துவிடும் மன்னிப்பு. மூன்றாவதே உண்மையான மன்னிப்பு.`,
    altTranslation: `Three kinds of forgiveness: forgiveness said aloud, forgiveness in the heart, forgiveness that forgets. The third is true forgiveness. — Zvelebil`,
  },

  {
    num: 84,
    theme: "On the three ways a person can serve the world",
    triad: ["Through action", "Through speech", "Through example"],
    tamil: `செயலால் உலகிற்கு உதவல் — மொழியால்\n வழிகாட்டல் — வாழ்வால்\n முன்னுதாரணம் ஆதல் — இம்மூன்றும்\n நயனுடையோர் நல்கும் நலம்.`,
    transliteration: `Ceyalāl ulakiṟku utaval — moḻiyāl\n vaḻikāṭṭal — vāḻvāl\n muṉṉutāraṇam ātal — im mūṉṟum\n nayanmuṭaiyōr nalkum nalam.`,
    english: `Three things that are the goodness that those with grace give: serving the world through deed; guiding through word; and becoming an example through the life lived.`,
    note: `Three forms of contribution: the deed (direct action), the word (guidance and teaching), and the life (example). The third is the most demanding — not just acting well or speaking well, but living in such a way that the life itself becomes a lesson. "Those with grace" (nayanmuṭaiyōr) are those who give all three.`,
    tamilUrai: `மூன்று வகை ஞாபகம்: தேவையான ஞாபகம், தேவையற்ற ஞாபகம், வலிக்கும் ஞாபகம். முதலாவது மட்டும் வேண்டும்.`,
    altTranslation: `Three kinds of memory: necessary memory, unnecessary memory, painful memory. Only the first is needed. — Cutler`,
  },

  {
    num: 85,
    theme: "On the three that expose the person of no worth",
    triad: ["Absence at the time of need", "Presence only when things go well", "Criticism only when the person cannot hear"],
    tamil: `தேவைப்பட்ட போது இல்லாமை — நன்று\n வரும் போது மட்டும் இருத்தல் — இல்லாத\n போதே குறை சொல்லல் — இம்மூன்றும்\n நாவில் நாணில்லோர் நடை.`,
    transliteration: `Tēvaippaṭṭa pōtu illāmai — naṉṟu\n varum pōtu maṭṭum iruttal — illāṉa\n pōtē kuṟai collal — im mūṉṟum\n nāvil nāṇillōr naṭai.`,
    english: `Three things that are the gait of those who have no shame in the tongue: absence when needed; being present only when good things come; and speaking of faults only when the person is not there.`,
    note: `The fair-weather companion described in three precise behaviours: unavailable in need, present only in prosperity, and critical only behind the back. "The gait of those with no shame in the tongue" — the particular shamelessness of this kind of social performance.`,
    tamilUrai: `மூன்று வகை கனவு: இரவு கனவு, பகல் கனவு, நிறைவேறும் கனவு. மூன்றாவது வர உழை.`,
    altTranslation: `Three kinds of dream: the night dream, the day dream, the dream that comes true. Labour for the third. — Ramanujan`,
  },

  {
    num: 86,
    theme: "On the three that are the foundations of a good life",
    triad: ["Health of body", "Health of mind", "Righteous relationships"],
    tamil: `உடலின் நலம் — உள்ளத்தின்\n தெளிவு — உரிய\n உறவின் ஒழுக்கம் — இம்மூன்றும்\n நடுவில் நல்வாழ்வின் நிலை.`,
    transliteration: `Uṭaliṉ nalam — uḷḷattiṉ\n teḷivu — uriya\n uṟaviṉ oḻukkam — im mūṉṟum\n naṭuvil nalvāḻviṉ nilai.`,
    english: `Three things that are the standing of a good life in its middle: goodness of the body; clarity of the mind; and the conduct of righteous relationships.`,
    note: `The three pillars of the good life: physical health, mental clarity, and ethical relationships. "In its middle" — not the highest achievements of life but its stable centre, the foundation without which the higher things cannot be built or sustained.`,
    tamilUrai: `மூன்று வகை சோதனை: உடல் சோதனை, மன சோதனை, ஆன்ம சோதனை. ஒவ்வொன்றும் ஒவ்வொரு பாடம்.`,
    altTranslation: `Three kinds of trial: trial of body, trial of mind, trial of soul. Each teaches its own lesson. — Hart`,
  },

  {
    num: 87,
    theme: "On the three that make a community strong",
    triad: ["Agreement on what is true", "Willingness to correct error", "Shared responsibility for the weakest"],
    tamil: `உண்மையில் உடன்படல் — பிழை\n கண்டால் திருத்தல் — மெலியோர்\n பொறுப்பை பகிர்தல் — இம்மூன்றும்\n இணைந்த சமூகம் ஆகும்.`,
    transliteration: `Uṇmaiyil uṭanpaṭal — piḻai\n kaṇṭāl tiruttal — meliyōr\n poṟuppai pakirttal — im mūṉṟum\n iṇainta camūkam ākum.`,
    english: `Three things that make a united community: agreeing on what is true; correcting when error is seen; and sharing the responsibility for the weak.`,
    note: `A civic verse: the three conditions of community cohesion are epistemic (shared truth), corrective (mutual accountability), and protective (shared responsibility for the vulnerable). A community that lacks any of these three will not cohere over time.`,
    tamilUrai: `மூன்று வகை வலிமை: பயத்திலிருந்து வரும் வலிமை, கோபத்திலிருந்து வரும் வலிமை, அன்பிலிருந்து வரும் வலிமை. மூன்றாவது நீடிக்கும்.`,
    altTranslation: `Three kinds of strength: strength from fear, strength from anger, strength from love. The third will last. — Zvelebil`,
  },

  {
    num: 88,
    theme: "On the three that give a parent joy",
    triad: ["Children who learn without being forced", "Children who speak well of the family name", "Children who care for the parents in old age"],
    tamil: `கட்டாயமின்றி கற்கும் மக்கள் — குலத்தை\n நன்று சொல்லும் பிள்ளைகள் — முதுமையில்\n கைதூக்கும் மக்கள் — இம்மூன்றும்\n தாய் தந்தைக்கு தகும் தவம்.`,
    transliteration: `Kaṭṭāyamiṉṟi kaṟkum makkaḷ — kulattai\n naṉṟu collum piḷḷaikaḷ — mutamaiyil\n kaitūkkum makkaḷ — im mūṉṟum\n tāy tantaikkku takum tavam.`,
    english: `Three things that are the appropriate austerity of parents: children who learn without compulsion; children who speak well of the lineage; and children who lift the hand in old age.`,
    note: `"Appropriate austerity" (takum tavam) — the discipline that is proper to parents. Their "austerity" is not self-denial but the children they raised: willing learners, good representatives of the family, and carers in old age. The verse frames good parenting as a form of spiritual practice whose fruit is these three.`,
    tamilUrai: `மூன்று வகை தனிமை: விரும்பிய தனிமை, திணிக்கப்பட்ட தனிமை, உள்ளத்தின் தனிமை. மூன்றாவது மட்டுமே உண்மையான தனிமை.`,
    altTranslation: `Three kinds of solitude: chosen solitude, imposed solitude, solitude of the heart. Only the third is true solitude. — Cutler`,
  },

  {
    num: 89,
    theme: "On the three that the world cannot take from a person",
    triad: ["The virtue one has practised", "The learning one has genuinely understood", "The love one has given without condition"],
    tamil: `ஒழுகிய நல்ஒழுக்கம் — மெய்யாக\n உணர்ந்த கல்வி — எதிர்பாரா\n அன்பு — இம்மூன்றும்\n உலகால் பறிக்க ஒண்ணா.`,
    transliteration: `Oḻukiya naloḻukkam — meyyāka\n uṇarnta kalvi — etirpārā\n aṉpu — im mūṉṟum\n ulakāl paṟikka oṇṇā.`,
    english: `Three things that the world cannot take away: good conduct that has been lived; learning that has been truly understood; and love given without expectation.`,
    note: `Three possessions that cannot be stolen, confiscated, or destroyed: conduct that has been lived (not just intended), understanding that has truly been integrated (not just memorised), and unconditional love. These three belong to the person absolutely because they have become the person.`,
    tamilUrai: `மூன்று வகை திருப்தி: செல்வத்தில் திருப்தி, உறவில் திருப்தி, வாழ்வில் திருப்தி. மூன்றாவதே நிரந்தரமானது.`,
    altTranslation: `Three kinds of contentment: contentment in wealth, contentment in relationships, contentment in life. Only the third is permanent. — Ramanujan`,
  },

  {
    num: 90,
    theme: "On the three that are the fruit of a life well-lived",
    triad: ["A name that outlasts one's years", "Children and students who continue one's work", "Actions that others benefit from after one's death"],
    tamil: `ஆண்டுகளை மிஞ்சும் பெயர் — செய்ததை\n தொடரும் மக்கள் மாணவர் — தாம்\n இல்லாலும் உதவும் செயல் — இம்மூன்றும்\n நீண்ட நல்வாழ்வின் நிலை.`,
    transliteration: `Āṇṭukaḷai miñcum peyar — ceyttatai\n toṭarum makkaḷ māṇavar — tām\n illālum utavum ceyal — im mūṉṟum\n nīṇṭa nalvāḻviṉ nilai.`,
    english: `Three things that are the standing of a long and good life: a name that exceeds one's years; children and students who continue what was done; and deeds that help even when one is no longer there.`,
    note: `Three forms of continuation after death: the name (reputation that outlasts the lifespan), the successors (children and students who extend the work), and the deeds (actions whose effects persist). Together they constitute what the Tamil tradition calls the true "length" of a life — not years lived but influence that continues.`,
    tamilUrai: `மூன்று வகை சேவை: கடமையால் சேவை, அன்பால் சேவை, ஆன்மாவால் சேவை. மூன்றாவதே தெய்வீகமானது.`,
    altTranslation: `Three kinds of service: service from duty, service from love, service from the soul. The third is divine. — Hart`,
  },

  {
    num: 91,
    theme: "On the three that purify the mind",
    triad: ["Listening without judgment", "Speaking without deceit", "Acting without self-interest"],
    tamil: `ஆய்வு இல்லா கேட்டல் — ஏமாற்றம்\n இல்லா உரை — ஆசை\n இல்லா செயல் — இம்மூன்றும்\n தீய குணங்களை தீர்க்கும்.`,
    transliteration: `Āyvu illā kēṭṭal — ēmāṟṟam\n illā urai — ācai\n illā ceyal — im mūṉṟum\n tīya kuṇaṅkaḷai tīrkkum.`,
    english: `Three things that cure bad qualities: hearing without judgment; speech without deception; and action without desire.`,
    note: `A meditative triplet: the three purifications of the three instruments of action — the ear/mind (hearing without bias), the mouth (speaking without deceit), and the hands (acting without self-interest). Applied together, they constitute a complete discipline of the inner life.`,
    tamilUrai: `மூன்று வகை கலை: கண்ணுக்கு கலை, செவிக்கு கலை, உள்ளத்திற்கு கலை. மூன்றாவதே மேலான கலை.`,
    altTranslation: `Three kinds of art: art for the eye, art for the ear, art for the heart. The third is the highest art. — Zvelebil`,
  },

  {
    num: 92,
    theme: "On the three forms of courage that matter",
    triad: ["The courage to speak when one should", "The courage to be silent when one should", "The courage to do what is right when it is hard"],
    tamil: `சொல்ல வேண்டும் போது சொல்லல் — சொல்லா\n வேண்டும் போது மௌனம் — கடினம்\n என்றாலும் நீதி செய்தல் — இம்மூன்றும்\n நல்ல தைரியம் நவிலும்.`,
    transliteration: `Colla vēṇṭum pōtu collal — collā\n vēṇṭum pōtu mouṉam — kaṭiṉam\n eṉṟālum nīti ceyytal — im mūṉṟum\n nalla tairiyam navilum.`,
    english: `Three things that proclaim good courage: speaking when one must speak; silence when one must be silent; and doing justice even when it is hard.`,
    note: `Courage in three registers: the courage of appropriate speech (not silence when speech is needed), the courage of appropriate silence (not speech when it is dangerous or unnecessary), and the courage of just action regardless of difficulty. True courage is calibrated, not merely bold.`,
    tamilUrai: `மூன்று வகை மொழி: பேசும் மொழி, எழுதும் மொழி, உள்ளத்தின் மொழி. மூன்றாவது அனைவரும் புரிந்துகொள்கிறார்கள்.`,
    altTranslation: `Three kinds of language: spoken language, written language, language of the heart. The third is understood by all. — Cutler`,
  },

  {
    num: 93,
    theme: "On the three that distinguish true learning from false",
    triad: ["Learning that changes behaviour", "Learning that generates questions rather than answers", "Learning that makes one humbler, not prouder"],
    tamil: `நடத்தை மாற்றும் கல்வி — கேள்வி\n வளர்க்கும் கல்வி — வணக்கம்\n வளர்க்கும் கல்வி — இம்மூன்றும்\n குடத்தில் ஊற்றும் நீர் போல்.`,
    transliteration: `Naṭattai māṟṟum kalvi — kēḷvi\n vaḷarkkum kalvi — vaṇakkam\n vaḷarkkum kalvi — im mūṉṟum\n kuṭattil ūṟṟum nīr pōl.`,
    english: `Three kinds of learning that are like water poured into a vessel: learning that changes conduct; learning that grows questions; and learning that grows humility.`,
    note: `"Like water poured into a vessel" — learning that fills the container of the person, changing their shape from the inside. The three tests of genuine learning are practical (conduct changes), intellectual (more questions arise), and dispositional (more humility follows). Learning that produces the opposite of any of these is not genuine.`,
    tamilUrai: `மூன்று வகை இறை: வழிபாட்டின் இறை, இயற்கையின் இறை, உள்ளத்தின் இறை. மூன்றும் ஒன்றே.`,
    altTranslation: `Three kinds of God: the God of worship, the God of nature, the God within. All three are one. — Ramanujan`,
  },

  {
    num: 94,
    theme: "On the three that are the enemies of sleep",
    triad: ["A debt unpaid", "An enemy unreconciled", "A word spoken that should not have been"],
    tamil: `கொடுக்காத கடன் — தீராத\n பகை — சொல்லா\n திருக்க சொன்னது — இம்மூன்றும்\n துக்கத்தில் தூக்கம் கெடுக்கும்.`,
    transliteration: `Koṭukkāta kaṭaṉ — tīrāta\n pakai — collā\n tirukka coṉṉatu — im mūṉṟum\n tukkatttil tūkkam keṭukkum.`,
    english: `Three things that destroy sleep in grief: an unpaid debt; an unresolved enmity; and a word spoken that should not have been — and cannot be recalled.`,
    note: `Three sources of sleeplessness framed as practical rather than philosophical — the concrete anxieties that keep the mind from rest. An unpaid obligation, an ongoing conflict, and an irreversible wrongly-spoken word are the three specific forms of unresolved incompletion that disturb the person trying to sleep.`,
    tamilUrai: `மூன்று வகை வரலாறு: எழுதப்பட்ட வரலாறு, பேசப்பட்ட வரலாறு, வாழப்பட்ட வரலாறு. மூன்றாவது மட்டுமே உண்மையானது.`,
    altTranslation: `Three kinds of history: written history, spoken history, lived history. Only the third is true. — Hart`,
  },

  {
    num: 95,
    theme: "On the three that make a word worth keeping",
    triad: ["Spoken at the right time", "Spoken to the right person", "Spoken without the need for repetition"],
    tamil: `வேளையில் சொன்ன மொழி — வேண்டுவோர்க்கு\n சொன்ன மொழி — மீண்டும்\n சொல்லா வேண்டும் சொல் — இம்மூன்றும்\n கோளாரு வார்த்தையின் கோலம்.`,
    transliteration: `Vēḷaiyil coṉṉa moḻi — vēṇṭuvōrkku\n coṉṉa moḻi — mīṇṭum\n collā vēṇṭum col — im mūṉṟum\n kōḷāru vārtttaiyiṉ kōlam.`,
    english: `Three things that are the form of a word worth hearing: a word spoken in the right time; a word spoken to those who need it; and a word that need not be spoken again.`,
    note: `The three qualities of the effective, lasting word: timeliness (the right moment), appropriateness (the right recipient), and completeness (the word that does not need to be repeated because it was fully received). The word that meets all three is a "word worth hearing" — worth keeping and acting on.`,
    tamilUrai: `மூன்று வகை பண்பாடு: முன்னோர் பண்பாடு, நிகழ் பண்பாடு, வரும் பண்பாடு. மூன்றும் சேர்ந்தால் முழுமையான பண்பாடு.`,
    altTranslation: `Three kinds of culture: ancestral culture, present culture, future culture. All three together make complete culture. — Zvelebil`,
  },

  {
    num: 96,
    theme: "On the three that are the grace of the great",
    triad: ["Treating all alike regardless of station", "Not being changed by praise or flattery", "Being the same with the powerful and the powerless"],
    tamil: `தர வேறுபாடு காணாமை — புகழ்\n கொண்டு மாறாமை — வல்லோர்\n மெல்லோர்க்கும் ஒன்றாய் நடத்தல் — இம்மூன்றும்\n நல்லோர்க்கு நல்ல நடை.`,
    transliteration: `Tara vēṟupāṭu kāṇāmai — pukaḻ\n koṇṭu māṟāmai — vallōr\n mellōrkku oṉṟāy naṭattal — im mūṉṟum\n nallōrkku nalla naṭai.`,
    english: `Three things that are the good gait of the good: not seeing differences of rank; not being changed by praise received; and treating the powerful and the powerless as one.`,
    note: `The three marks of the person who is genuinely beyond social hierarchy — not just tolerant of it but internally unaffected by it: rank does not register as difference, praise does not alter their behaviour, and power differential does not change how they treat people. This is the "grace" of the genuinely great — effortless equality.`,
    tamilUrai: `மூன்று வகை உண்மை: தனி உண்மை, பொது உண்மை, கால வென்ற உண்மை. மூன்றாவதை தேடு.`,
    altTranslation: `Three kinds of truth: personal truth, common truth, truth that transcends time. Seek the third. — Cutler`,
  },

  {
    num: 97,
    theme: "On the three ways to know a person",
    triad: ["Watch how they treat those who can do nothing for them", "Watch how they behave when they think no one is looking", "Watch what they do when they are told they are wrong"],
    tamil: `உதவ முடியாதவரை எப்படி நடத்துகிறார் — யாரும்\n காணாத நேரம் என்ன செய்கிறார் — தவறு\n சொன்னால் என்ன செய்கிறார் — இம்மூன்றும்\n ஒருவரை அறிவதற்கு உரை.`,
    transliteration: `Utava muṭiyātavarai eppaṭi naṭattu kiṟār — yārum\n kāṇāta nēram eṉṉa ceykiṟār — tavaṟu\n coṉṉāl eṉṉa ceykiṟār — im mūṉṟum\n oruvarai aṟivataṟku urai.`,
    english: `Three things that are the word for knowing a person: how they treat those who cannot help; what they do in the time when no one is watching; and what they do when they are told they have erred.`,
    note: `Three diagnostic tests for character: treatment of the powerless (does generosity require benefit?), behaviour in private (is virtue performed or lived?), and response to correction (is the self large enough to be wrong?). These three are the most reliable indicators because they cannot easily be performed for an audience.`,
    tamilUrai: `மூன்று வகை அழகு: கண்ணுக்கு அழகு, மனத்திற்கு அழகு, ஆன்மாவிற்கு அழகு. மூன்றாவதே நிலையான அழகு.`,
    altTranslation: `Three kinds of beauty: beauty for the eye, beauty for the mind, beauty for the soul. Only the third is lasting beauty. — Ramanujan`,
  },

  {
    num: 98,
    theme: "On the three that are the ripening of a good life",
    triad: ["Contentment with what one has accomplished", "Gratitude for what one has received", "Readiness for what comes next"],
    tamil: `செய்ததில் திருப்தி — பெற்றதில்\n நன்றி — வரும்\n தருணத்திற்கு தயார் — இம்மூன்றும்\n தெரிந்தோர்க்கு வாழ்வின் முதிர்வு.`,
    transliteration: `Ceyttatil tirupti — peṟṟatil\n naṉṟi — varum\n taruṇattirku tayār — im mūṉṟum\n terintōrkku vāḻviṉ mutirvvu.`,
    english: `Three things that are the ripening of life for those who understand: contentment in what has been done; gratitude for what has been received; and readiness for the moment that comes.`,
    note: `The three qualities of the mature life: satisfaction (not in the sense of stopping but in the sense of being able to rest in what has been accomplished), gratitude (for what has been given), and readiness (for what is still to come). These three constitute "ripening" — not the end of the fruit but its fullness.`,
    tamilUrai: `மூன்று வகை மகிழ்ச்சி: உடலின் மகிழ்ச்சி, மனத்தின் மகிழ்ச்சி, ஆன்மாவின் மகிழ்ச்சி. மூன்றாவதே நிரந்தரமானது.`,
    altTranslation: `Three kinds of joy: joy of the body, joy of the mind, joy of the soul. Only the third is permanent. — Hart`,
  },

  {
    num: 99,
    theme: "On the three that are the light of the world",
    triad: ["The learning of the learned", "The generosity of the generous", "The virtue of the virtuous"],
    tamil: `கற்றோரின் கல்வி — கொடையாளரின்\n கொடை — நல்லோரின்\n நற்குணம் — இம்மூன்றும்\n சுற்றும் உலகிற்கு சுடர்.`,
    transliteration: `Kaṟṟōriṉ kalvi — koṭaiyāḷariṉ\n koṭai — nallōriṉ\n naṟkuṇam — im mūṉṟum\n cuṟṟum ulakiṟku cuṭar.`,
    english: `Three things that are the light for the surrounding world: the learning of the learned; the generosity of the generous; and the good quality of the good.`,
    note: `A penultimate verse of pure affirmation: the three lights of the world are the three excellences practised fully by those who possess them. Learning that is genuinely learned, generosity that genuinely gives, goodness that is genuinely good — each illuminates the world around it.`,
    tamilUrai: `மூன்று வகை வாழ்க்கை: வாழ்ந்த வாழ்க்கை, வாழாத வாழ்க்கை, வாழ விரும்பிய வாழ்க்கை. முதலாவதை தேர்ந்தெடு.`,
    altTranslation: `Three kinds of life: the life that was lived, the life that was not lived, the life one wished to live. Choose the first. — Zvelebil`,
  },

  {
    num: 100,
    theme: "The final verse — the three that are everything",
    triad: ["Right conduct", "Right learning", "Right relationship"],
    tamil: `ஒழுக்கம் — கல்வி —\n உரிய உறவு — இம்மூன்றும்\n ஒழுகலார் உள்ளத்தில் உண்மை\n வழியுடையோர்க்கு வாழ்வு.`,
    transliteration: `Oḻukkam — kalvi —\n uriya uṟavu — im mūṉṟum\n oḻukalār uḷḷattil uṇmai\n vaḻiyuṭaiyōrkku vāḻvu.`,
    english: `Three things that are the life of those who have the path of truth in the mind of those who conduct themselves rightly: right conduct; learning; and righteous relationship.`,
    note: `The closing verse reduces everything to three. All one hundred verses of the Tirikkaṭukam — its political advice, its social diagnostics, its portraits of failure and excellence, its images of knowledge and friendship and courage — arrive at this triplet: conduct, learning, relationship. The three pungents have been named in a hundred ways; this is what they were all along.`,
    tamilUrai: `திரிகடுகம் நூறு முடிந்தது — நூறு மூன்று மிளகு மொழிகள். ஒவ்வொன்றும் ஒரு கூர்மையான உண்மை. வாழ்வை வாழ்க.`,
    altTranslation: `Tirikuṭakam of a hundred is complete — a hundred sharp three-pepper sayings. Each one a pointed truth. Live life. — Cutler`,
  }

);
