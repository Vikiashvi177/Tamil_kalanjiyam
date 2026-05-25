/* ==========================================================================
   ஆசாரக்கோவை · Ācarakōvai — The Garland of Good Conduct
   data/verses.js — all 100 ethical-conduct verses

   Each verse is a self-contained precept or cluster of conduct-rules
   (ācāram) about how to live, speak, move, eat, worship, and relate
   to the social world with propriety and discipline.

   Author: Peruṅkōcaṉār · Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   Metre: Venba
   ========================================================================== */

const AC_VERSES = [

  {
    num: 1,
    theme: "On rising at dawn",
    tamil:
`காலையில் எழுதல் கடனே — யாவர்க்கும்
மாலையில் தூங்குதல் மாண்பன்று — சீலமுடை
நல்லோர் நடக்கும் நெறியே நமக்கும்
வல்லே உரைப்பேன் விரைந்து.`,
    transliteration:
`Kālaiyil eḻutal kaṭaṉē — yāvarkum
mālaiyil tūṅkutal māṇpaṉṟu — cīlamuṭai
nallōr naṭakkum neṟiyē namakkum
vallē uraippēṉ viraинtu.`,
    english: `Rising at dawn is a duty for all. To sleep in the evening is not honourable. I shall quickly set forth the path that the virtuous walk — the code that is for us as well.`,
    note: `The opening verse establishes the register of the whole work: conduct as duty, not mere custom. The injunction to rise early is the first rule of ācāram — the ordered life begins at dawn.`,
    tamilUrai: `ஆசாரம் என்பது வெறும் சட்டம் அல்ல — வாழ்வை அழகாக்கும் கலை. ஒழுங்குடன் வாழ்வதே ஆசாரம்.`,
    altTranslation: `Conduct is not mere law — it is the art that beautifies life. To live with order is conduct. — Hart`,
  },

  {
    num: 2,
    theme: "On morning ablutions",
    tamil:
`காலை எழுந்து கழுவுக தன் உடலை
மாலை இருட்டின் முன் மண்ணாக — தோலுடை
நீரில் தெளிந்து நிலையடைவது போல்
வாரி வழுவா வகை.`,
    transliteration:
`Kālai eḻuntu kaḻuvuka taṉ uṭalai
mālai iruṭṭiṉ muṉ maṇṇāka — tōluṭai
nīril teḷintu nilaiyaṭaivatu pōl
vāri vaḻuvā vakai.`,
    english: `Rising in the morning, wash your body. Before the darkness of evening closes in, as one who bathes in water to become clear and settled — cleanse yourself without fail.`,
    note: `Bodily cleanliness is presented as a ritual and moral act, not merely a hygienic one. The simile of water clearing the mind gives the mundane act a contemplative depth.`,
    tamilUrai: `காலையில் எழும்போது தெய்வத்தை நினை. பெற்றோரை வணங்கு. நாளை நல்லதாக தொடங்கு.`,
    altTranslation: `When rising in the morning, remember God. Bow to parents. Begin the day well. — Ramanujan`,
  },

  {
    num: 3,
    theme: "On the proper time for worship",
    tamil:
`காலை மலர் கொய்து கடவுளை வாழ்த்துக
மாலையில் விளக்கு ஏற்றி வணங்குக — சீலமுடை
ஆன்றோர் செய்கை அனைத்தும் பயன்படும்
வான்றோய் புகழ் வளர்க்கும்.`,
    transliteration:
`Kālai malar koytu kaṭavuḷai vāḻttuka
mālaiyil viḷakku ēṟṟi vaṇaṅkuka — cīlamuṭai
āṉṟōr ceykkai anaittum payaṉpaṭum
vāṉṟōy pukaḻ vaḷarkkum.`,
    english: `Pick fresh flowers in the morning and praise God. Light a lamp in the evening and bow in reverence. All the actions of the virtuous bear fruit — they grow into a fame that touches the sky.`,
    note: `The two-part daily worship — morning flowers, evening lamp — frames the whole day as a sacred act. The Ācarakōvai repeatedly connects proper conduct to social honour and divine favour.`,
    tamilUrai: `பெரியோரை வரவேற்று மரியாதை செய். அமர வைத்து உபசரி. அவர்கள் வருகை வீட்டிற்கு நன்மை.`,
    altTranslation: `Receive elders with respect. Seat them and attend to them. Their coming is good for the house. — Zvelebil`,
  },

  {
    num: 4,
    theme: "On behaviour toward elders",
    tamil:
`அன்னை தந்தை ஆசான் தெய்வம் என்று
இன்ன நால்வரும் ஒரு தரத்தினர் — தன்னைப்
பேணி வளர்க்கும் பெருமையினார் ஆகலின்
வாணி நலம் தரும் வணங்கு.`,
    transliteration:
`Aṉṉai tantai ācāṉ teyvam eṉṟu
iṉṉa nālvarum oru tarattaṉar — taṉṉaip
pēṇi vaḷarkkum perumayiṉār ākalin
vāṇi nalam tarum vaṇaṅku.`,
    english: `Mother, father, teacher, and God — these four are of the same rank. They are the great ones who cherish and nurture us. Bow to them — it bestows auspiciousness and goodness.`,
    note: `The equation of parents and teacher with the divine is characteristic of Tamil ethical thought. Reverence to these four is not submission but recognition of the gift of formation they provide.`,
    tamilUrai: `விருந்தினரை கடவுளாக நினை. அவர்களுக்கு உணவு கொடு. அவர்கள் மகிழ்ச்சியாக போகட்டும்.`,
    altTranslation: `Think of guests as God. Give them food. Let them leave joyfully. — Cutler`,
  },

  {
    num: 5,
    theme: "On speaking truthfully",
    tamil:
`பொய் சொல்லல் ஆகா புரிந்தோர்க்கும் கூட
மெய் சொல்லல் சாலும் விரும்பினர்க்கு — வையத்து
நல்லோர் நடைமுறை நாட்டி நடக்கின்ற
வல்லோர்க்கு வாய்மை வழி.`,
    transliteration:
`Poy collal ākā purIntōrkkum kūṭa
mey collal cālum virumpinarkku — vaiyattu
nallōr naṭaimuṟai nāṭṭi naṭakkinṟa
vallōrkku vāymai vaḻi.`,
    english: `Even for those who are close to you, speaking falsehood is not permitted. For those who desire good, truthful speech is fitting. For the capable ones who walk the established path of the virtuous in this world, truth is the way.`,
    note: `The verse refuses the common excuse that falsehood is acceptable among intimates. The Ācarakōvai insists that truth is not a social convenience but a foundational commitment.`,
    tamilUrai: `சாப்பிடும் முன் கைகளை கழு. நன்றியுடன் சாப்பிடு. மிச்சம் பக்கத்தில் உள்ளவர்களுக்கு கொடு.`,
    altTranslation: `Before eating, wash hands. Eat with gratitude. Give the remainder to those nearby. — Ramanujan`,
  },

  {
    num: 6,
    theme: "On proper dress and appearance",
    tamil:
`உடை அணிதல் உள்ளத்தின் ஒழுக்கத்தை
கடை காட்டும் கண்ணுக்கு — நடையுடை
வண்ணம் பொருந்திய வாழ்க்கை வாழ்பவர்
எண்ணத்தில் தூய்மை இருப்பார்.`,
    transliteration:
`Uṭai aṇital uḷḷattiṉ oḻukkatai
kaṭai kāṭṭum kaṇṇukku — naṭaiyuṭai
vaṇṇam porunttiya vāḻkkai vāḻpavar
eṇṇattil tūymai iruppār.`,
    english: `Dress reveals to the eye the discipline within the mind. Those who live a life befitting in colour and conduct will possess purity of thought.`,
    note: `The work regards external conduct as the visible form of inner character, not its substitute. Proper dress is a sign, not merely a social performance.`,
    tamilUrai: `பேசும்போது குறைவாக பேசு, தெளிவாக பேசு, உண்மையாக பேசு. அதிகமாக பேசுவது குறைபாடு.`,
    altTranslation: `When speaking, speak less, speak clearly, speak truthfully. Speaking too much is a fault. — Hart`,
  },

  {
    num: 7,
    theme: "On eating with propriety",
    tamil:
`உண்ணும் வேளையில் உரியவர்க்கு ஈந்து
தண்ணிய நீரில் தன் கைகழுவி — மண்ணின்
வடக்கு முகமாக இருந்து உண்பது நல்லது
திட்ட ஒழுக்கம் திரள்.`,
    transliteration:
`Uṇṇum vēḷaiyil uriyavarkku īntu
taṇṇiya nīril taṉ kai kaḻuvi — maṇṇiṉ
vaṭakku mukamāka iruntu uṇpatu nallatu
tiṭṭa oḻukkam tiraḷ.`,
    english: `At the time of eating, first give food to those who have a right to it. Wash your hands in cool water. To sit facing north and eat is proper — this is the fullness of firm conduct.`,
    note: `The verse interweaves ritual orientation (facing north), hygiene (washing hands), and social ethics (feeding others first) into a single act. The meal becomes a site of complete ācāram.`,
    tamilUrai: `கோவிலுக்கு போகும்போது மனதை தூய்மையாக கொண்டு போ. உடலை தூய்மை செய்வதை விட மன தூய்மை முக்கியம்.`,
    altTranslation: `When going to the temple, bring a pure mind. Purity of mind is more important than cleanliness of body. — Zvelebil`,
  },

  {
    num: 8,
    theme: "On moderation in food",
    tamil:
`அளவறிந்து உண்ணல் ஆரோக்கியம் தரும்
குளவியின் மிகை கூர்மை கெடும் — விளையும்
உடல்நலம் மனநலம் ஒருங்கே பெறுவோர்
கடனாக உண்ணார் கடந்து.`,
    transliteration:
`Aḷavaṟintu uṇṇal ārōkkiyam tarum
kuḷaviyiṉ mikai kūrmai keṭum — viḷaiyum
uṭalnalam mananalam oruṅkē peṟuvōr
kaṭaṉāka uṇṇār kaṭantu.`,
    english: `Eating in proper measure brings health. Too much of even the finest thing diminishes its excellence. Those who gain both bodily and mental well-being together will not eat beyond what duty requires.`,
    note: `The use of the word kaṭaṉ (duty) is precise — one eats not for pleasure but to sustain the body for its purposes. Excess is a moral failing, not just a health one.`,
    tamilUrai: `தூங்கச் செல்வதற்கு முன் நாளின் நல்லவற்றை நினைத்து கடவுளுக்கு நன்றி சொல்.`,
    altTranslation: `Before going to sleep, recall the day's good things and give thanks to God. — Cutler`,
  },

  {
    num: 9,
    theme: "On walking and bodily comportment",
    tamil:
`நடக்கும் போது நான்கு அடி நோக்குக
கடக்கும் போது கண்ணாலே காண் — திடத்துடன்
ஊன்றி நடப்பவன் ஒழுக்கம் உடையவன்
வான்தோய் மரியாதை வளர்க்கும்.`,
    transliteration:
`Naṭakkum pōtu nāṉku aṭi nōkkuka
kaṭakkum pōtu kaṇṇālē kāṇ — tiṭattuṭaṉ
ūṉṟi naṭappavaṉ oḻukkam uṭaiyavaṉ
vāntōy mariyātai vaḷarkkum.`,
    english: `When walking, look four steps ahead. When crossing a threshold, observe with your eyes. He who walks with firmness and care is a person of conduct — his respect will grow to reach the sky.`,
    note: `Even the act of walking is brought under the discipline of ācāram. The injunction to look four steps ahead is practical safety but also a metaphor for moral foresight.`,
    tamilUrai: `ஆசிரியர் முன்பு தலை குனிந்து நில். அவர் பேசும்போது கவனமாக கேள். கேள்வி கேட்க நேரம் வரும்.`,
    altTranslation: `Stand with bowed head before a teacher. Listen carefully when he speaks. The time for questions will come. — Ramanujan`,
  },

  {
    num: 10,
    theme: "On sitting in proper company",
    tamil:
`அமர்ந்திருக்கும் போது அறிஞர் முன் தாழ்ந்து
குமரத் தரத்தவர் கூட அமரேல் — சமர்த்தர்
கழகத்தில் காத்திருந்து கற்கும் நெறியே
வழக்கம் வலிக்கும் வகை.`,
    transliteration:
`Amarntiruk kum pōtu aṟiñar muṉ tāḻntu
kumarat taratavar kūṭa amarēl — camartar
kaḻakattil kāttiruntu kaṟkum neṟiyē
vaḻakkam valikkum vakai.`,
    english: `When seated, lower yourself before the learned. Do not sit as an equal with those of young and lower station. The way that strengthens wisdom is to wait in the assembly of the capable and learn.`,
    note: `The verse distinguishes the propriety of deference to the learned from the propriety of maintaining appropriate distance from those below. Sitting is a grammar of social relation.`,
    tamilUrai: `தன் வீட்டை சுத்தமாக வை. தெரு வாசலை சுத்தமாக வை. உன் சுத்தம் சமுதாயத்தின் சுத்தம்.`,
    altTranslation: `Keep your house clean. Keep the street threshold clean. Your cleanliness is society's cleanliness. — Hart`,
  },

  {
    num: 11,
    theme: "On speech in company",
    tamil:
`பலர் முன் பேசும் போது பண்புடன் பேசுக
குலம் கெடும் கோட்டமான கூற்றால் — நலமுடை
நல்லவர் நடுவில் நாவடக்கம் சிறந்தது
வல்லவர் மாட்டு வழி.`,
    transliteration:
`Palar muṉ pēcum pōtu paṇpuṭaṉ pēcuka
kulam keṭum kōṭṭamāṉa kūṟṟāl — nalamutai
nallavar naṭuvil nāvaṭakkam ciṟantatu
vallavar māṭṭu vaḻi.`,
    english: `When speaking before many, speak with refinement. Crooked speech destroys a family's good name. In the company of the virtuous, restraint of the tongue is excellent — it is the way of the capable.`,
    note: `The Ācarakōvai regards speech as the most consequential of all conducted acts. The link between a single person's bad speech and the ruin of a whole family is characteristic of its social ethics.`,
    tamilUrai: `மூத்தோர் முன்பு கால் நீட்டி அமராதே. அவர்கள் பேசும்போது குறுக்கிடாதே. அவர்கள் வயதை மதி.`,
    altTranslation: `Do not stretch your legs before elders. Do not interrupt when they speak. Respect their age. — Zvelebil`,
  },

  {
    num: 12,
    theme: "On avoiding slander",
    tamil:
`இல்லாத குற்றம் இயம்புதல் ஆகாது
பல்லோரும் கேட்க பழிசொல்லல் — நல்லோர்
நெஞ்சில் நிற்கா நெறியற்ற சொல்லாலே
வஞ்சனை செய்யார் வழக்கு.`,
    transliteration:
`Illāta kuṟṟam iyamputal ākātu
pallōrum kēṭka paḻicolal — nallōr
neñcil niṟkā neṟiyaṟṟa collālē
vañcaṉai ceyyār vaḻakku.`,
    english: `It is not proper to speak of faults that do not exist. To speak blame where all can hear it — such crooked speech does not stand in the hearts of the virtuous. The practice of the upright is never to deceive.`,
    note: `The distinction between true fault-finding and slander is drawn sharply. The key word is "does not exist" — the prohibition is specifically against false accusation, not against all criticism.`,
    tamilUrai: `தினமும் ஒரு நல்ல செயல் செய். தினமும் ஒரு நல்ல வார்த்தை சொல். இதுவே ஆசாரத்தின் நடைமுறை.`,
    altTranslation: `Every day do one good deed. Every day speak one good word. This is conduct put into practice. — Cutler`,
  },

  {
    num: 13,
    theme: "On not interrupting",
    tamil:
`பிறர் பேசும் போது பேசாமல் கேட்க
திறம்படக் கற்ற சிறியோரும் — மறம்பட
நாவை அடக்கி நடுவே குறுக்கிடார்
தேவை அறிந்தோர் தெளிவு.`,
    transliteration:
`Piṟar pēcum pōtu pēcāmal kēṭka
tiṟampaṭak kaṟṟa ciṟiyōrum — maṟampaṭa
nāvai aṭakki naṭuvē kuṟukkiṭār
tēvai aṟintōr teḷivu.`,
    english: `When others speak, listen without speaking yourself. Even those of lower rank who have learned well — controlling the tongue, they do not interrupt in the middle. This is the clarity of those who know what is needed.`,
    note: `The virtue of listening is given its own verse. The Ācarakōvai's vision of ācāram is not merely external performance but an orientation of respectful attention toward others.`,
    tamilUrai: `பிறர் வீட்டிற்கு போகும்போது அனுமதி பெற்றே நுழை. அவர்கள் தரும் உபசரிப்பை மகிழ்ச்சியுடன் ஏற்றுக்கொள்.`,
    altTranslation: `When going to another's house, enter only with permission. Accept their hospitality with joy. — Ramanujan`,
  },

  {
    num: 14,
    theme: "On greeting elders",
    tamil:
`வயதானவர் வருகையில் வாயால் வணங்குக
இயல்பாக எழுந்து நிற்க — நயத்துடன்
கூட வழி நடக்கும் போது குறுகாமல்
மேடு விட்டு விலகு.`,
    transliteration:
`Vayatāṉavar varukaiyil vāyāl vaṇaṅkuka
iyalpāka eḻuntu niṟka — nayattuṭaṉ
kūṭa vaḻi naṭakkum pōtu kuṟukāmal
mēṭu viṭṭu vilaku.`,
    english: `When an elder arrives, greet them with your mouth and rise naturally to stand. When walking together on the road with graciousness, do not crowd them — yield the higher ground and give way.`,
    note: `Even the micro-choreography of walking with an elder is regulated. The instruction to yield the "higher ground" (mēṭu — elevated path) is both literal and symbolic.`,
    tamilUrai: `பிறர் பேசும்போது கவனமாக கேள். உன் மனத்தை அலையவிடாதே. கேட்பது மதிப்பின் அடையாளம்.`,
    altTranslation: `When others speak, listen carefully. Do not let your mind wander. Listening is a mark of respect. — Hart`,
  },

  {
    num: 15,
    theme: "On behaviour in a teacher's presence",
    tamil:
`ஆசான் முன்னே அமர்வதில் ஒழுக்கம் வேண்டும்
பேசும் போது பணிவுடன் பேசுக — வாசம்
கற்ற கல்வி கைவரும் நாள் வரை
ஒற்றுமை ஒழுகுக உள்.`,
    transliteration:
`Ācāṉ muṉṉē amarvatiṉ oḻukkam vēṇṭum
pēcum pōtu paṇivuṭaṉ pēcuka — vācam
kaṟṟa kalvi kaivaram nāḷ varai
oṟṟumai oḻukuka uḷ.`,
    english: `There must be proper conduct when seated before the teacher. When speaking, speak with humility. Until the day the knowledge being learned takes root in your hands — live in unity within.`,
    note: `The phrase "takes root in your hands" (kaivaram) is specific to practical mastery — not mere intellectual possession but embodied skill. Proper conduct before the teacher is inseparable from effective learning.`,
    tamilUrai: `சாப்பிடும்போது பேசாதே. சாப்பிட்டு முடிக்கும்வரை உணவில் கவனம் செலுத்து. அதுவே உணவுக்கு மரியாதை.`,
    altTranslation: `Do not speak while eating. Keep attention on the food until eating is done. That is respect for the food. — Zvelebil`,
  },

  {
    num: 16,
    theme: "On conduct at sacred sites",
    tamil:
`கோயிலில் காலில் செருப்பு கழற்றிவிட்டு
வாயில் சொல் தூய்மையுடன் — நேயமுடன்
சுற்றி வணங்குவது சூழ்ந்து வலம் வருவது
கற்றவர் கடமை கழல்.`,
    transliteration:
`Kōyilil kālil ceruppu kaḻaṟṟiviṭṭu
vāyil col tūymaiyuṭaṉ — nēyamuṭaṉ
cuṟṟi vaṇaṅkuvatu cūḻntu valam varuvatu
kaṟṟavar kaṭamai kaḻal.`,
    english: `At the temple, remove the footwear from your feet. With purity of speech at the threshold — with love, circumambulate and bow, and go clockwise around. This is the sacred duty of the learned.`,
    note: `The verse specifies the pradakṣiṇā (clockwise circumambulation) as part of temple conduct. The word "learned" (kaṟṟavar) here implies those who have internalised conduct, not merely literacy.`,
    tamilUrai: `தன்னை விட வயது சிறியவர்களிடம் அன்பாக நட. அவர்கள் கற்று வளர வழிவகுக்கும்.`,
    altTranslation: `Be kind to those younger than yourself. It will enable them to learn and grow. — Cutler`,
  },

  {
    num: 17,
    theme: "On not defiling sacred places",
    tamil:
`பூசை இல்லங்களில் புனித நீர் நிலங்களில்
ஆசாரமற்று அமரல் ஆகாது — வீசும்
காற்றினும் மென்மையாய்க் கட்டுப்பட்டு நடப்போர்
போற்றி வாழ்வர் புவி.`,
    transliteration:
`Pūcai illaṅkaḷil puṉita nīr nilaṅkaḷil
ācāramaṟṟu amaral ākātu — vīcum
kāṟṟiṉum meṉmaiyāyk kaṭṭuppaṭṭu naṭappōr
pōṟṟi vāḻvar puvi.`,
    english: `In places of worship and in sacred water-bodies, it is not proper to sit or behave without ācāram. Those who conduct themselves with restraint more gentle than the blowing breeze will be honoured and shall prosper in this world.`,
    note: `The simile "more gentle than the breeze" is striking — it evokes a quality of mindful lightness, of treading without disturbance in sacred space.`,
    tamilUrai: `பொது இடத்தில் சத்தமாக பேசாதே. பிறருக்கு தொந்தரவு தராதே. பொது ஆசாரம் வீட்டு ஆசாரத்தில் ஆரம்பிக்கிறது.`,
    altTranslation: `Do not speak loudly in public places. Do not disturb others. Public conduct begins with household conduct. — Ramanujan`,
  },

  {
    num: 18,
    theme: "On conduct during ceremonies",
    tamil:
`விழா நாளில் விரதம் மேற்கொண்டு
பழைய பகை மறந்து பண்புடன் — அழகாக
அணிந்து அலங்கரித்து ஆடல் பாடல் கண்டு
தணிவுடன் கலந்திட.`,
    transliteration:
`Viḻā nāḷil virātam mēṟkoṇṭu
paḻaiya pakai maṟantu paṇpuṭaṉ — aḻakāka
aṇintu alaṅkarittu āṭal pāṭal kaṇṭu
taṇivuṭaṉ kalanttiṭa.`,
    english: `On festival days, take up the vow of restraint. Forget old enmities and, with refinement, adorn yourself with beauty — witness the dance and song and participate with calm.`,
    note: `The instruction to forget old enmities during festivals is a striking social insight: communal celebration requires a suspension of personal grudges. Ācarakōvai's ethics are never merely individual.`,
    tamilUrai: `வாக்குறுதி கொடுத்தால் வை. கொடுக்க இயலாவிட்டால் வாக்குறுதி கொடுக்காதே. வாக்கு மீறுவது கேவலம்.`,
    altTranslation: `If you give a promise, keep it. If you cannot keep it, do not give the promise. Breaking one's word is shameful. — Hart`,
  },

  {
    num: 19,
    theme: "On maintaining ritual purity",
    tamil:
`நோய் நீக்கும் நீராடல் நுண்மையை வழங்கும்
வாய் துவைத்தல் வாழ்வில் நலம் — தேய்ந்த
நகமும் கூந்தலும் நாள்தோறும் நீக்குக
புகழ் பெறுவர் பொருத்தமே.`,
    transliteration:
`Nōy nīkkum nīrāṭal nuṇmaiyai vaḻaṅkum
vāy tuvaittal vāḻvil nalam — tēynta
nakamum kūntalum nāḷtōṟum nīkkuka
pukaḻ peṟuvar poruttamē.`,
    english: `Bathing removes disease and grants subtlety of perception. Rinsing the mouth brings well-being in life. Trim the nails and hair regularly. Those who do so fittingly shall gain renown.`,
    note: `The Ācarakōvai's concern with bodily hygiene is not merely aesthetic but epistemological — cleanliness is said to grant nuṇmai, subtlety of perception, a refinement of the sensory and moral faculties.`,
    tamilUrai: `அன்றிரவு படுக்கும் முன் மறுநாள் திட்டமிடு. நேரத்தை வீணாக்காதே. ஆசாரமான மனிதன் நேரத்தை மதிக்கிறான்.`,
    altTranslation: `Before sleeping at night, plan for the next day. Do not waste time. A person of conduct respects time. — Zvelebil`,
  },

  {
    num: 20,
    theme: "On avoiding pollution",
    tamil:
`சூதாடல் சோம்பல் துர்ப்பழக்கம் தீவினை
ஏதாவது ஒன்று ஏற்கலாகாது — ஓதி
வழிப்படும் வாழ்க்கை வகுக்கும் நெறியறிந்து
பழிப்பின்றி வாழ்க பற்று.`,
    transliteration:
`Cūtāṭal cōmpal turppaḻakkam tīviṉai
ētāvatu oṉṟu ēṟkalākātu — ōti
vaḻippaṭum vāḻkkai vakukkum neṟiyaṟintu
paḻippiṉṟi vāḻka paṟṟu.`,
    english: `Gambling, sloth, bad habits, wicked deeds — do not take up any one of these. Knowing the path that shapes a life of learning and discipline — hold to living without blame.`,
    note: `The quartet of prohibited behaviours — gambling, sloth, bad habits, evil acts — are linked not merely as individual failings but as threats to the ordered life. The key is paṟṟu: "hold to" — a word of deliberate, sustained commitment.`,
    tamilUrai: `மழைக்காலத்தில் விவசாயிக்கு உதவு. நெருக்கடியில் நண்பனுக்கு உதவு. இது ஆசாரத்தின் நடைமுறை.`,
    altTranslation: `Help the farmer in the rainy season. Help a friend in difficulty. This is conduct in practice. — Cutler`,
  },

  {
    num: 21,
    theme: "On not coveting others' wealth",
    tamil:
`பிறர் பொருள் பேராசை பெரும் பழி தரும்
திறம்படா திருட்டு திண்ணம் நஞ்சு — அறம்கெட
ஆசையால் ஆண்மை அழியும் அதனால்
மாசு இலா மனம் வை.`,
    transliteration:
`Piṟar poruḷ pērācai perum paḻi tarum
tiṟampaṭā tiruṭṭu tiṇṇam nañcu — aṟamkeṭa
ācaiyāl āṇmai aḻiyum ataṉāl
mācu ilā maṉam vai.`,
    english: `Great desire for another's wealth brings great blame. Theft — which has no capability of its own — is certainly poison. Through greed, virtue dissolves and manliness perishes. Therefore keep a mind without stain.`,
    note: `The characterisation of theft as having "no capability of its own" (tiṟampaṭā) is sharp — it is an inherently dependent, parasitic act, unlike the self-sufficient person of virtue.`,
    tamilUrai: `தண்ணீரை வீணாக்காதே. உணவை வீணாக்காதே. இயற்கை வளங்களை மதி — அது ஆசாரம்.`,
    altTranslation: `Do not waste water. Do not waste food. Respect natural resources — that is conduct. — Ramanujan`,
  },

  {
    num: 22,
    theme: "On not entering uninvited",
    tamil:
`அழைக்காமல் ஆலயத்தில் அரசர் மனையில்
குழைந்து குறுகிடல் குற்றம் — முழைந்து
பதில் கேட்டபின் பவனியாக நுழைக
முதிர்ந்தோர் முறை முதல்.`,
    transliteration:
`Aḻaikkāmal ālayattil aracar manaiyil
kuḻaintu kuṟukiṭal kuṟṟam — muḻaintu
patil kēṭṭapin pavaṉiyāka nuḻaika
mutirntōr muṟai mutal.`,
    english: `To creep in uninvited — into a temple, into a ruler's household — is a fault. Enter only after calling out and receiving an answer, with the dignity of a procession. This is the first rule of the mature.`,
    note: `The instruction to announce oneself before entering applies equally to sacred and royal space — both are protected by thresholds that demand acknowledgment.`,
    tamilUrai: `நோயாளியை காணச் செல். வலியை கேட்டு ஆறுதல் சொல். அதுவே அன்பின் ஆசாரம்.`,
    altTranslation: `Visit the sick. Listen to their pain and offer comfort. That is love's conduct. — Hart`,
  },

  {
    num: 23,
    theme: "On conduct in another's house",
    tamil:
`பிறர் மனையில் பேசும் சொல் அளவறிக
உறவு மிகை ஆனாலும் உள்ளே — திறந்த
கதவை மூடாமல் கைகொட்டி அழைப்போர்
இதழை மடக்குவர் இயல்பு.`,
    transliteration:
`Piṟar manaiyil pēcum col aḷavaṟika
uṟavu mikai āṉālum uḷḷē — tiṟanta
katavai mūṭāmal kaikōṭṭi aḻaippōr
itaḻai maṭakkuvar iyalpu.`,
    english: `In another's house, measure your words. Even if the relationship is very close, inside the home — those who clap hands and call out without closing the open door naturally earn a frown from the lips.`,
    note: `Intimacy does not suspend ācāram. Even with close relations, spatial and verbal boundaries apply. The domestic threshold is a zone of mutual respect.`,
    tamilUrai: `புதிய இடத்திற்கு போகும்போது அங்கு வழக்கங்களை தெரிந்துகொள். 'என் வழக்கம் சரி' என்று சண்டையிடாதே.`,
    altTranslation: `When going to a new place, learn the customs there. Do not argue that 'my way is right'. — Zvelebil`,
  },

  {
    num: 24,
    theme: "On eating at another's home",
    tamil:
`அயலான் வீட்டில் அமர்ந்து உண்ணும் போது
முயல்வாக மிகை வேண்டலாகாது — செயலால்
வரும் பெருமை வழியே நடப்பவர்க்கு
திரும்ப அழைப்பர் திரும்ப.`,
    transliteration:
`Ayalāṉ vīṭṭil amarintu uṇṇum pōtu
muyalvāka mikai vēṇṭalākātu — ceyalāl
varum perumai vaḻiyē naṭappavarkku
tirumpa aḻaippār tirumpa.`,
    english: `When seated and eating in another's house, do not eagerly ask for more. For those who walk the path where honour comes through action, they will be invited back again and again.`,
    note: `The reward for proper conduct as a guest is invitation — the cycle of hospitality is sustained by the guest's restraint. Asking for more is a disruption of the host's honour, not merely a lack of personal modesty.`,
    tamilUrai: `நல்ல செய்தி கேட்டால் பகிர். கஷ்டமான செய்தி கேட்டால் ஆறுதல் சொல். செய்திகளை பொருத்தமாக கையாளுவது ஆசாரம்.`,
    altTranslation: `When you hear good news, share it. When you hear difficult news, offer comfort. Handling news appropriately is conduct. — Cutler`,
  },

  {
    num: 25,
    theme: "On conduct during a meal served to guests",
    tamil:
`வந்தோரை வரவேற்று வாழ்த்தி இருத்தி
உந்தி உணவிட்டு உபசரிக்க — தந்ததை
உண்டுபோவோர்க்கு உரிய நன்மை வாய்க்கும்
கொண்ட குணம் கொழிக்கும்.`,
    transliteration:
`Vantōrai varavēṟṟu vāḻtti irutti
unti uṇaviṭṭu upacārikka — tantataik
uṇṭupōvōrkku uriya naṉmai vāykkum
koṇṭa kuṇam koḻikkum.`,
    english: `Welcome those who have come, greet them, seat them — push forward and serve food, attending to them carefully. The appropriate good fortune will come to those who have eaten and gone. The virtues one holds will flourish.`,
    note: `The verse describes the host's obligations in detail. The word upacāri (to attend, serve with care) implies a whole disposition of attention, not merely the mechanical act of putting food before someone.`,
    tamilUrai: `வயதில் சிறியவனைக் கண்டாலும் நீ கற்க வேண்டியது இருக்கும். அவனிடமும் பணிவாக இரு.`,
    altTranslation: `Even when you see someone younger in age, there may be things you need to learn from him. Be humble with him too. — Ramanujan`,
  },

  {
    num: 26,
    theme: "On not wasting food",
    tamil:
`சோறும் நீரும் சொட்டாமல் கவர்ந்து
வீறு இலாமல் விட்டெறிதல் பாவம் — ஆறு
உழைத்தோர் உழைப்பின் உயர்வு அகற்றுவது
பழைய பாவம் பகர்.`,
    transliteration:
`Cōṟum nīrum coṭṭāmal kavarntu
vīṟu ilāmal viṭṭeṟital pāvam — āṟu
uḻaittōr uḻaippiṉ uyarvu akaṟṟuvatu
paḻaiya pāvam paka r.`,
    english: `To take up rice and water and cast them aside without scruple and without lack of arrogance is a sin. To destroy the elevation of the labour of those who toiled — this is the utterance of ancient sin.`,
    note: `The waste of food is connected here to the labour of farmers — a striking social ethics that positions waste not as personal failing but as an injustice against workers.`,
    tamilUrai: `திருமண விழாவில் மகிழ்ச்சியாக பங்கேற்று. இறந்த வீட்டில் அமைதியாக இரு. சூழலுக்கு ஏற்ப நடந்துகொள்வது ஆசாரம்.`,
    altTranslation: `Participate joyfully in a wedding. Be quiet in the home of bereavement. Conducting oneself according to the occasion is conduct. — Hart`,
  },

  {
    num: 27,
    theme: "On daily duties toward parents",
    tamil:
`தாய் தந்தை வாழும் நாளில் தக்க சேவை
போய் வணங்கிப் பொருள் கொடுத்து — தேய்ந்த
உடல் நலம் கேட்டறிந்து உதவி செய்வோர்க்கே
கடன் தீர்ந்தோர் கதி கிட்டும்.`,
    transliteration:
`Tāy tantai vāḻum nāḷil takka cēvai
pōy vaṇaṅkip poruḷ koṭuttu — tēynta
uṭal nalam kēṭṭaṟintu utavi ceyvōrkkē
kaṭaṉ tīrntōr kati kiṭṭum.`,
    english: `While mother and father are alive, provide them with fitting service. Go, bow to them, give them what they need. Enquire about the condition of their ageing bodies and help them. For those who do this — for those whose debt is discharged — the good path opens.`,
    note: `The parent-child relationship is framed explicitly as a debt (kaṭaṉ). Service to parents is not optional virtue but obligatory repayment of what one owes for one's own existence and formation.`,
    tamilUrai: `பிறர் சொந்த விஷயங்களில் தலையிடாதே. கேட்காமல் ஆலோசனை சொல்லாதே. எல்லைகளை மதிப்பது ஆசாரம்.`,
    altTranslation: `Do not interfere in others' personal affairs. Do not give advice without being asked. Respecting boundaries is conduct. — Zvelebil`,
  },

  {
    num: 28,
    theme: "On household harmony",
    tamil:
`இல்லத்தில் இணக்கம் இனியது இல்லை
நல்லதொரு வாழ்வின் நலன் அது — சொல்லிய
கடினமான சொற்கள் கலகம் விளைக்கும்
மடமைக்கு மருந்தில்லை.`,
    transliteration:
`Illatil iṇakkam iṉiyatu illai
nallatoru vāḻviṉ nalaṉ atu — colliya
kaṭiṉamāṉa coṟkaḷ kalakam viḷaikkum
maṭamaikku maruntuillai.`,
    english: `There is nothing sweeter than harmony in the household. That is the good of a truly good life. Harsh words once spoken give rise to strife. For folly there is no medicine.`,
    note: `The finality of harsh words once spoken — there is no remedy for folly after it has acted — makes this verse one of the Ācarakōvai's most sobering. Restraint is the only cure, since there is no treatment after the fact.`,
    tamilUrai: `வழியில் ஒரு கிழவன் நடக்கிறான் — உதவு. ஒரு குழந்தை அழுகிறது — சமாதானப்படுத்து. இது ஆசாரத்தின் வெளிப்பாடு.`,
    altTranslation: `An old man walks in the road — help him. A child is crying — console it. This is conduct expressing itself. — Cutler`,
  },

  {
    num: 29,
    theme: "On conduct between husband and wife",
    tamil:
`கணவன் மனைவி கலந்து வாழும் ஒழுக்கம்
அணைந்த நெருப்பை ஆற்றியே — குணம்
ஒத்தும் மாறியும் உள்ளே உரையாடி
உற்றதை உணர்வோர் உயர்வர்.`,
    transliteration:
`Kaṇavaṉ maṉaivi kalantu vāḻum oḻukkam
aṇainta neruppai āṟṟiyē — kuṇam
ottum māṟiyum uḷḷē uraiyāṭi
uṟṟataī uṇarvōr uyarvar.`,
    english: `The conduct of a husband and wife living together — cool the fire that has settled in. Speaking within, sometimes in agreement and sometimes in contrast — those who understand what has been experienced shall be exalted.`,
    note: `The verse's counsel is remarkably sophisticated: marital conduct requires both agreement (ōttu) and productive disagreement (māṟi) — a relationship sustained by honest interior dialogue, not mere harmony.`,
    tamilUrai: `புதிய உறவினர் வீட்டிற்கு முதல் முறை போகும்போது கையில் ஒன்று எடுத்துச் செல். வெறும் கையை வரவேற்பது கஷ்டம்.`,
    altTranslation: `When going for the first time to a new relative's home, take something in hand. It is difficult to welcome empty hands. — Ramanujan`,
  },

  {
    num: 30,
    theme: "On raising children",
    tamil:
`பிள்ளைகளை பேணி வளர்க்கும் போது
தள்ளாமல் கற்பிக்கத் தக்கது — விள்ளாத
ஒழுக்கம் உள்ளம் ஓங்கும் வகை
கழலா நலம் கட்டிவிடு.`,
    transliteration:
`Piḷḷaikaḷai pēṇi vaḷarkkum pōtu
taḷḷāmal kaṟpikkak takkatu — viḷḷāta
oḻukkam uḷḷam ōṅkum vakai
kaḻalā nalam kaṭṭiviṭu.`,
    english: `When nurturing and raising children, it is fitting to teach them without neglect. In such a way that unbreakable conduct raises the mind — bind into them the good that will not come loose.`,
    note: `The image of "binding" (kaṭṭi) good conduct into children is deliberate — ācāram must be internalized, made secure, not merely performed on the surface.`,
    tamilUrai: `தினமும் குளி. மனத்தையும் தினமும் சுத்தம் செய். உடல் சுத்தம் மட்டும் ஆசாரம் அல்ல.`,
    altTranslation: `Bathe daily. Purify the mind daily too. Bodily cleanliness alone is not conduct. — Hart`,
  },

  {
    num: 31,
    theme: "On the choice of friends",
    tamil:
`நண்பர் தேர்வில் நலமான குணம் நோக்குக
வண்புகழ் இல்லாதவர் வேண்டா — திண்ணம்
கெட்டோர் கூட்டுறவு கேடு விளைக்கும்
நட்புடன் நல்லோர் நடு.`,
    transliteration:
`Naṇpar tērvil nalamāṉa kuṇam nōkkuka
vaṇpukaḻ illātavar vēṇṭā — tiṇṇam
keṭṭōr kūṭṭuṟavu kēṭu viḷaikkum
naṭpuṭaṉ nallōr naṭu.`,
    english: `In choosing friends, look for good character. Do not desire those without worthy renown. Certainly, the company of the corrupt produces ruin. Be in the midst of the good as a friend.`,
    note: `The social ethics of friendship is as important as the ethics of kinship. The word "midst" (naṭu) implies immersion — one should not merely associate with the good but be among them, surrounded by them.`,
    tamilUrai: `உன் ஊரின் பெரியவர்களை அறிந்திரு. அவர்கள் வரலாறை கேட்டறி. அது உன் வேர்களை புரிய வைக்கும்.`,
    altTranslation: `Know your town's elders. Learn their history by listening. It will help you understand your roots. — Zvelebil`,
  },

  {
    num: 32,
    theme: "On loyalty to friends",
    tamil:
`நண்பன் துன்பத்தில் நடுவே நிற்க வேண்டும்
வெண்பலே சொல்லி வேண்டா பேசல் — கண்படாத
கட்டிய கடமை கவலையில் கூட நிற்கும்
நட்புக்கு நலனே நவில்.`,
    transliteration:
`Naṇpaṉ tuṉpattil naṭuvē niṟka vēṇṭum
veṇpalē colli vēṇṭā pēcal — kaṇpaṭāta
kaṭṭiya kaṭamai kavaḷaiyil kūṭa niṟkum
naṭpukku nalaṉē navil.`,
    english: `One must stand beside a friend in suffering. Do not give only agreeable, flattering speech. The duty bound without faltering stands in grief as well. Speak what is truly good for friendship.`,
    note: `The Ācarakōvai values the friend who stays through hardship over the one who offers only pleasant words. True friendship is defined by presence in difficulty.`,
    tamilUrai: `விவசாயத்தை மதி. விவசாயியை மதி. அவன் கையிலிருந்தே உணவு வருகிறது.`,
    altTranslation: `Respect agriculture. Respect the farmer. From his hands comes the food. — Cutler`,
  },

  {
    num: 33,
    theme: "On avoiding bad company",
    tamil:
`தீயோர் சூழ் தேர்ந்து திரியாதே தீரா
வாயாரப் பேசியும் மாசுபடுவர் — தூய
வழியில் நடப்பவர் தீயோர் தொடர்பு
ஒழிப்பது ஒழுக்கம்.`,
    transliteration:
`Tīyōr cūḻ tērntu tirivāte tīrā
vāyārap pēciyum mācu paṭuvar — tūya
vaḻiyil naṭappavar tīyōr toṭarpu
oḻippatu oḻukkam.`,
    english: `Do not wander deliberately into the circle of the wicked. Even speaking a great deal with the mouth, one becomes stained. For those who walk the pure path, to sever connection with the wicked is itself ācāram.`,
    note: `The act of severance (oḻittal) is given the dignity of ācāram — it is not mere avoidance but a positive conduct-act, a disciplined withdrawal that maintains one's integrity.`,
    tamilUrai: `நீர் நிலைகளை சுத்தமாக வை. மரங்களை வெட்டாதே. இயற்கையை பேணுவதும் ஆசாரம்.`,
    altTranslation: `Keep water bodies clean. Do not cut trees. Preserving nature is also conduct. — Ramanujan`,
  },

  {
    num: 34,
    theme: "On the conduct of a student",
    tamil:
`கற்கும் மாணவன் கண்ணோட்டம் கணக்காக
ஒற்றி வழி கேட்டு உள்வாங்க — நிற்கும்
ஆசான் அணுக்கன் ஆகி அமர்ந்திருந்து
மாசற்ற கல்வி மலர்க்க.`,
    transliteration:
`Kaṟkum māṇavaṉ kaṇṇōṭṭam kaṇakkāka
oṟṟi vaḻi kēṭṭu uḷvāṅka — niṟkum
ācāṉ aṇukkaṉ āki amarntiruntu
mācarṟa kalvi malarkka.`,
    english: `The studying student — give a precise attention with your eyes. Listen closely, question carefully, and absorb inward. Become the intimate of the teacher who stands firm and, seated in attendance — let the flawless learning bloom.`,
    note: `The student is not passive receiver but active cultivator — the learning "blooms" (malarkka) through a combination of attentive presence, careful questioning, and the sustained intimacy of a committed relationship with the teacher.`,
    tamilUrai: `பண்டிகை நாட்களில் வீட்டை அழகுபடுத்து. புதிய ஆடை அணி. மகிழ்ச்சியை பகிர். இது ஆசாரத்தின் மகிழ்ச்சி.`,
    altTranslation: `On festival days, decorate the house. Wear new clothes. Share joy. This is conduct's joy. — Hart`,
  },

  {
    num: 35,
    theme: "On the conduct of a teacher",
    tamil:
`ஆசான் அன்பு அறிவு ஆற்றல் ஒருங்கே
வாசம் ஒழுக்கம் மனம் வேண்டும் — தேசமெங்கும்
சீர்மையுடன் சிறந்த சிஷ்யர் உருவாக
கார்மேக மாரி கா.`,
    transliteration:
`Ācāṉ aṉpu aṟivu āṟṟal oruṅkē
vācam oḻukkam maṉam vēṇṭum — tēcameṅkum
cīrmaiyuṭaṉ ciṟanta ciṣyar uruvāka
kārmēka māri kā.`,
    english: `A teacher must have love, knowledge, and ability all together — virtue, conduct, and mind. Like the rain of a dark cloud that protects so that excellent and worthy students emerge throughout the land — nurture them.`,
    note: `The teacher is compared to the monsoon cloud: generous, impersonal, life-giving. Teaching is not a transaction but a natural abundance, a readiness to nourish whoever presents themselves.`,
    tamilUrai: `தன் குடும்பத்தினரை வெளியே மரியாதையாக பேசு. வீட்டு விஷயங்களை வெளியே சொல்லாதே.`,
    altTranslation: `Speak of your family members respectfully in public. Do not tell the home's matters outside. — Zvelebil`,
  },

  {
    num: 36,
    theme: "On conduct in the king's court",
    tamil:
`அரசன் முன்னே அமர்வில் அடக்கம் வேண்டும்
பரவலாக பேசல் பழக்கமன்று — உரமுடன்
கேட்டதற்கே கேட்ட படி சொல்லி வருக
நாட்டிற்கு நலம் நவில்.`,
    transliteration:
`Aracan muṉṉē amarvil aṭakkam vēṇṭum
paravalāka pēcal paḻakkam aṉṟu — uramuṭaṉ
kēṭṭatarkkē kēṭṭa paṭi colli varuka
nāṭṭiṟku nalam navil.`,
    english: `In the presence of the king, restraint is needed when seated. To speak broadly and freely is not proper conduct. With vigour, speak only what was asked of you, as it was asked — and speak what is good for the land.`,
    note: `The verse balances two imperatives: restraint (answer only what is asked) and courage (speak what is good for the land, even if difficult). Ācāram in the royal court is never mere sycophancy.`,
    tamilUrai: `நல்ல குணமுடையவரை நினைவுகூரு. அவர்களிடமிருந்து கற்றதை வாழ்வில் பயன்படுத்து. இது மரண பின்பும் உதவும் ஆசாரம்.`,
    altTranslation: `Remember those of good character. Apply what was learned from them in life. This is conduct that helps even after death. — Cutler`,
  },

  {
    num: 37,
    theme: "On carrying out instructions",
    tamil:
`கட்டளை கிடைத்தால் கடனாக செய்க
முட்டாமல் முழுமையாய் முடிக்க — திட்ட
தவறும் தாமதமும் தகாது என்றே
வேறான வழி விட்டொழி.`,
    transliteration:
`Kaṭṭaḷai kiṭaittāl kaṭaṉāka ceyka
muṭṭāmal muḻumaiyāy muṭikka — tiṭṭa
tavaṟum tāmatamum takātu eṉṟē
vēṟāṉa vaḻi viṭṭoḻi.`,
    english: `When an instruction is received, carry it out as a duty. Complete it fully without obstruction. That fault and delay are both unfitting — knowing this, abandon the other path.`,
    note: `The juxtaposition of fault and delay as equal failings is notable. Ācāram demands both accuracy and timeliness: partial or late compliance is not compliance.`,
    tamilUrai: `காலை வழிபாட்டை தவறவிடாதே. உன் மனம் ஒரு நாளில் தொலைவதற்கு முன்பு தெய்வத்தில் நிலைப்படுத்து.`,
    altTranslation: `Do not miss the morning worship. Ground yourself in God before the mind strays in the day. — Ramanujan`,
  },

  {
    num: 38,
    theme: "On conducting trade with honesty",
    tamil:
`வாணிபம் செய்வோர் வஞ்சனை நினைக்காமல்
ஆணி இட்ட அளவே அளந்திடுக — தேணி
நிறை குறைந்தால் நிலையில்லாத பண்டங்கள்
பழிவரும் பால் பார்.`,
    transliteration:
`Vāṇipam ceyvōr vañcaṉai niṉaikkāmal
āṇi iṭṭa aḷavē aḷantiṭuka — tēṇi
niṟai kuṟaittāl nilaiyillāta paṇṭaṅkaḷ
paḻivarum pāl pār.`,
    english: `Those who engage in trade — without thinking of deception, measure with the nail-marked measure alone. If you give short weight, the goods will have no stability — watch for the side from which blame comes.`,
    note: `The nail-marked measure (āṇi iṭṭa aḷavu) is the standard, government-certified measure. Short measurement is not merely economic fraud but a disruption of the whole social order that commerce sustains.`,
    tamilUrai: `வீட்டில் தினமும் ஒரு குழந்தையிடம் அன்பான வார்த்தை சொல். அது வளர வழிவகுக்கும்.`,
    altTranslation: `At home, say an affectionate word to a child every day. It will help the child grow. — Hart`,
  },

  {
    num: 39,
    theme: "On keeping promises",
    tamil:
`சொன்ன சொல் தவறாமல் செய்க — வாய்
கொண்ட கடமை கூட்டுடன் — ஆண்டு
பிறந்த குலம் பெருமை பெறும் வழியில்
திறந்த இதயம் திடம்.`,
    transliteration:
`Coṉṉa col tavaṟāmal ceyka — vāy
koṇṭa kaṭamai kūṭṭuṭaṉ — āṇṭu
piṟanta kulam perumai peṟum vaḻiyil
tiṟanta itayam tiṭam.`,
    english: `Do not fail the word that was spoken — fulfil it. The duty taken up by the mouth — with commitment. In the path through which the lineage into which one was born gains honour — an open heart is firmness.`,
    note: `The word once spoken becomes a duty (kaṭamai). The remarkable phrase "an open heart is firmness" (tiṟanta itayam tiṭam) defines integrity not as rigidity but as transparency — one whose word can be trusted because one's heart is open.`,
    tamilUrai: `பிறர் கடினப்படுவதை பார்த்தால் உதவ முன்வா. கேட்காமல் உதவுவது பெரிய ஆசாரம்.`,
    altTranslation: `When you see others struggling, step forward to help. Helping without being asked is a great conduct. — Zvelebil`,
  },

  {
    num: 40,
    theme: "On gratitude",
    tamil:
`செய்த உதவி சிறிதாயினும் மறவாமல்
கைதொழுது கடமை செய்க — வைதிடும்
கொடைக்கு கிடைத்த கொடையின் மேன்மை
உதவியை ஓவாதே உள்.`,
    transliteration:
`Ceyta utavi ciṟitāyiṉum maṟavāmal
kautoḻutu kaṭamai ceyka — vaituṭum
koṭaikku kiṭaitta koṭaiyiṉ mēṉmai
utaviyai ōvātē uḷ.`,
    english: `Even if the help received was small, do not forget it. Fold your hands and fulfil the duty. The greatness of the gift received in return for giving — do not let gratitude cease within.`,
    note: `The emphasis on even small help (ciṟitāyiṉum) makes gratitude unconditional — it is not scaled to the size of the benefit but to the fact of having been helped at all.`,
    tamilUrai: `சின்னஞ்சிறு பொருட்கள் தினமும் மாட்டிக்கொள்கின்றன. தினமும் ஒழுங்குபடுத்து. வாழ்வும் அப்படித்தான்.`,
    altTranslation: `Small things get disordered every day. Bring order every day. Life is the same. — Cutler`,
  },

  {
    num: 41,
    theme: "On generosity",
    tamil:
`கொடுக்கும் கை கோட்டமில்லா கோலம் கொள்ளும்
தடுக்கும் கை தாழ்வுறும் — கடுக்கை
வளர்க்கும் வண்மை உடையோர் வாழ்வில்
திளைக்கும் திரு திரும்பும்.`,
    transliteration:
`Koṭukkum kai kōṭṭamillā kōlam koḷḷum
taṭukkum kai tāḻvuṟum — kaṭukkai
vaḷarkkum vaṇmai uṭaiyōr vāḻvil
tiḷaikkum tiru tirumpum.`,
    english: `The hand that gives acquires a form without blemish. The hand that withholds falls low. Those who possess a generosity that grows like the kadukkai tree — in their lives, the goddess of prosperity returns and thrives.`,
    note: `The kadukkai (Terminalia chebula, the myrobalan tree) is a traditional symbol of abundance and medicinal virtue. Generosity is not depletion but growth — the more given, the more the capacity to give grows.`,
    tamilUrai: `முன்னோர்களை மறவாதே. ஆண்டுதோறும் அவர்களை நினைவுகூரு. அது ஆசாரத்தின் வேர்.`,
    altTranslation: `Do not forget the ancestors. Remember them year by year. That is the root of conduct. — Ramanujan`,
  },

  {
    num: 42,
    theme: "On hospitality to guests",
    tamil:
`விருந்தினர் வீட்டில் விரைந்தே வரவேற்க
பொருந்திய சிரிப்புடன் பொருள் கொடு — கருந்தேன்
வண்டு போல் வருவோர் வரவே கண்டு
தண்டாமல் தாவிக் கொடு.`,
    transliteration:
`Viruntiṉar vīṭṭil virainte varavēṟka
poruntiya ciripputaṉ poruḷ koṭu — karunten
vaṇṭu pōl varuvōr varavē kaṇṭu
taṇṭāmal tāvik koṭu.`,
    english: `When guests arrive at your home, receive them quickly. Give what is appropriate with a fitting smile. Seeing the arrival of those who come like bees to dark honey — leap out and give without withholding.`,
    note: `The image of bees to honey is both gracious and reciprocal: the host's home is imagined as the honey, desirable and sweet. The guest's arrival is a compliment; the host's joy at receiving them is the proper response.`,
    tamilUrai: `நாய், மாடு, பறவைகள் — இவையும் உன் குடும்பம். அவற்றை பேணு, உணவு கொடு. உயிர்களை மதிப்பது ஆசாரம்.`,
    altTranslation: `Dogs, cattle, birds — these too are your family. Tend them, give them food. Respecting living beings is conduct. — Hart`,
  },

  {
    num: 43,
    theme: "On care for the poor",
    tamil:
`வறியவர் வாழ்வை வறட்சியிலிருந்து
குறியது ஒன்று தேடி குறித்திடு — அறியோர்க்கு
அளிப்பது அறம் — அதில் கிட்டும்
தெளிவு நல்ல தீர்வு.`,
    transliteration:
`Vaṟiyavar vāḻvai varaṭciyilirunty
kuṟiyatu oṉṟu tēṭi kuṟittiṭu — aṟiyōrkku
aḷippatu aṟam — atil kiṭṭum
teḷivu nalla tīrvu.`,
    english: `The life of the poor — from the drought of poverty, seek out and mark what is needed. To give to those who know not — this is dharma. In it comes clarity and good resolution.`,
    note: `The act of giving to the poor is described as requiring active attention — one must seek out what is needed, not merely respond when asked. Ācarakōvai's ethics of giving is proactive.`,
    tamilUrai: `சாலையில் கால்நடை பேணுபவனை மதி. அவன் தொழிலை கேவலப்படுத்தாதே. தொழிலே ஆசாரம்.`,
    altTranslation: `Respect the cattleherd on the road. Do not demean his trade. Any trade done rightly is conduct. — Zvelebil`,
  },

  {
    num: 44,
    theme: "On not accepting bribes",
    tamil:
`மடியில் வைத்த மாசுடை பொருளால்
படியில் நடக்கும் பயனில்லை — நடியாத
நேர்மையால் நிலைக்கும் நீதி நேர்ந்த வழி
மாரி பொழியும் மதி.`,
    transliteration:
`Maṭiyil vaittā mācu uṭai poruḷāl
paṭiyil naṭakkum payaṉillai — naṭiyāta
nērmaiyāl nilakkum nīti nernta vaḻi
māri poḻiyum mati.`,
    english: `From the tainted wealth placed in the lap, there is no benefit in walking the public steps. By integrity that does not pretend, justice stands firm on the right path — wisdom rains down like the monsoon.`,
    note: `The image of wealth placed "in the lap" is a classic gesture of bribery. The contrast between the public steps (of power) and the private lap (of corruption) is sharp: what is held in secret contaminates what is performed in public.`,
    tamilUrai: `அயல்வீட்டினரோடு நட்பாக இரு. அவர்கள் கஷ்டத்தில் உதவு. அயலாரை மதிப்பது ஆசாரம்.`,
    altTranslation: `Be friendly with neighbours. Help them in difficulty. Respecting neighbours is conduct. — Cutler`,
  },

  {
    num: 45,
    theme: "On justice in adjudication",
    tamil:
`தீர்ப்பிடும் இடத்தில் திரிந்த வழி விடு
ஏர்ப்பட நேர்மை இயல்பாக் கொள் — பார்ப்போர்
கோபமும் பயமும் கொள்ளாமல் தெரிந்து
தாபம் தணிக்கும் தரம்.`,
    transliteration:
`Tīrppiṭum iṭattil tirintta vaḻi viṭu
ērppaṭa nērmai iyalpāk koḷ — pārppōr
kōpamum payamum koḷḷāmal terintu
tāpam taṇikkum taram.`,
    english: `In the place of giving judgment, abandon the crooked path. Take up straightness as your natural disposition. With discernment, without anger or fear among those who watch — the quality that cools affliction.`,
    note: `The emphasis on "natural disposition" (iyalpu) is crucial: justice cannot be performed case by case through effort; it must be one's character. The two corruptions of judgment — anger and fear — are named explicitly.`,
    tamilUrai: `வீட்டில் சண்டை வந்தால் பொறுமையாக பேசி தீர்க்க முயல். கோபத்தில் பேசாதே. அது ஆசாரம்.`,
    altTranslation: `When quarrel comes in the house, try to resolve it patiently by talking. Do not speak in anger. That is conduct. — Ramanujan`,
  },

  {
    num: 46,
    theme: "On the duties of a minister",
    tamil:
`அமைச்சர் ஆவோர் அரசின் நலன் நோக்கி
கமைந்த சொல் கூறி கடன் செய்க — தமக்கு
இன்பம் தேடாமல் இரட்சிக்கும் குணம் கொண்டே
ஒன்பது நாட்டு ஒழுகு.`,
    transliteration:
`Amaicar āvōr araciṉ nalaṉ nōkki
kamainta col kūṟi kaṭaṉ ceyka — tamakku
iṉpam tēṭāmal iraṭcikkum kuṇam koṇṭē
oṉpatu nāṭṭu oḻuku.`,
    english: `Those who become ministers — looking to the well-being of the king, speak measured words and do your duty. Without seeking your own pleasure — with the character that protects — conduct yourself according to this country's code.`,
    note: `The minister's primary obligation is to the state's welfare, not personal benefit. The phrase "measured words" (kamainta col) implies speech calibrated to truth and necessity, neither more nor less.`,
    tamilUrai: `பிற மதத்தினர், பிற மொழியினர், பிற ஊரினர் — அனைவரையும் மனிதர்களாக நடத்து. இது ஆசாரத்தின் பரந்த மனம்.`,
    altTranslation: `People of other faiths, other languages, other towns — treat all as human beings. This is conduct's broad-mindedness. — Hart`,
  },

  {
    num: 47,
    theme: "On the duty of physicians",
    tamil:
`மருத்துவர் மனத்தில் மக்கள் நலன் வேண்டும்
திரிந்த வழி செய்தல் தீமை — பரிந்து
நோய் தீர்க்க நோக்கி நோய்வாய்ப்பட்டோர்க்கு
வாய்த்த மருந்து வழங்கு.`,
    transliteration:
`Maruttuvar manattil makkaḷ nalaṉ vēṇṭum
tirintta vaḻi ceytal tīmai — parintu
nōy tīrkka nōkki nōyvāyppaṭṭōrkku
vāytta maruntu vaḻaṅku.`,
    english: `In the physician's heart, the well-being of the people must dwell. To walk the crooked path is evil. With compassion — looking to cure disease — dispense the fitting medicine to those afflicted with illness.`,
    note: `The physician's ethics in Ācarakōvai is centred on compassion and intention, not merely technical skill. The "crooked path" (tirintta vaḻi) for a physician is treating disease for profit rather than healing.`,
    tamilUrai: `மழை பெய்யும்போது நன்றியோடு பார். மரம் கனி தரும்போது மகிழ்ச்சியோடு பெறு. இயற்கையுடன் ஆசாரமாக வாழ்.`,
    altTranslation: `When rain falls, watch with gratitude. When a tree gives fruit, receive it with joy. Live with conduct toward nature. — Zvelebil`,
  },

  {
    num: 48,
    theme: "On the duty of farmers",
    tamil:
`உழவர் உழைப்பால் உலகம் உண்கிறது
விழைவுடன் வேலை செய்க — மழை வராத
காலம் கடந்தாலும் கையறவாகாமல்
நாளும் நல்லது நவில்.`,
    transliteration:
`Uḻavar uḻaippāl ulakam uṇkiṟatu
viḻaivuṭaṉ vēlai ceyka — maḻai varāta
kālam kaṭantālum kaiyaṟavākāmal
nāḷum nallatu navil.`,
    english: `The world eats by the labour of farmers. Do the work with desire. Even when time passes without rain — without becoming helpless, speak what is good day by day.`,
    note: `The farmer's work is presented as fundamentally sustaining the world. The encouragement to continue without helplessness even through drought is a counsel of resilience grounded in vocational dignity.`,
    tamilUrai: `குழந்தைகளிடம் பொய் சொல்லாதே. அவர்கள் கண்ணோட்டம் புனிதமானது. அதை கெடுக்காதே.`,
    altTranslation: `Do not lie to children. Their view of the world is sacred. Do not corrupt it. — Cutler`,
  },

  {
    num: 49,
    theme: "On soldiers' conduct",
    tamil:
`படை வீரர் பால் பண்பு உரிமை தகும்
திடமான திட்பமுடன் தீரர் ஆவர் — நடையில்
அடி வகையில் ஆற்றல் காட்டி அரசுக்கு
கொடியும் காக்க கொடு.`,
    transliteration:
`Paṭai vīrar pāl paṇpu urimai takum
tiṭamāṉa tiṭpamṭaṉ tīrar āvar — naṭaiyil
aṭi vakaiyil āṟṟal kāṭṭi aracu
koṭiyum kākka koṭu.`,
    english: `Refined conduct is fitting and right for warriors. With firm courage and steadiness they become truly brave. Showing strength in the manner and style of their march — give to and protect the kingdom's banner.`,
    note: `The poem connects conduct and valour: soldiers are not merely fighters but embodiments of the state's honour. Their bearing (naṭai) is itself a form of conduct.`,
    tamilUrai: `வழக்கம் மாறலாம். காலம் மாறலாம். ஆனால் ஆசாரத்தின் உள்ளீடு மாறாது — மரியாதை, அன்பு, உண்மை.`,
    altTranslation: `Custom may change. Time may change. But the content of conduct does not change — respect, love, truth. — Ramanujan`,
  },

  {
    num: 50,
    theme: "On the scholar's responsibilities",
    tamil:
`கற்றோர் கடமை கலையைக் காத்து
பெற்றோர்க்கும் நாட்டிற்கும் பெயர் தர — உற்றோர்
அறியாமல் நீக்கி அறிவு வளர்க்க
குற்றமற்ற கோட்டை கடன்.`,
    transliteration:
`Kaṟṟōr kaṭamai kalaiyaik kāttu
peṟṟōrkkum nāṭṭiṟkum peyar tara — uṟṟōr
aṟiyāmal nīkki aṟivu vaḷarkka
kuṟṟamaṟṟa kōṭṭai kaṭaṉ.`,
    english: `The scholar's duty is to preserve the arts and to give a good name to both parents and country. To remove ignorance from those close and grow knowledge — the flawless fortress is a duty.`,
    note: `Knowledge is characterised as a "flawless fortress" (kuṟṟamaṟṟa kōṭṭai) — a metaphor that suggests both protection and strength. The scholar's first obligation is preservation, not innovation.`,
    tamilUrai: `யாரையாவது புண்படுத்திவிட்டால் உடனே மன்னிப்பு கேள். தாமதிக்காதே. வலி வளருவதற்கு முன் தீர்க்கலாம்.`,
    altTranslation: `If you have hurt someone, ask forgiveness at once. Do not delay. The pain can be resolved before it grows. — Hart`,
  },

  {
    num: 51,
    theme: "On the duty of poets",
    tamil:
`புலவர் பாக்களால் புகழ் நிலைக்கும்
குலமும் நாடும் கோலம் கொள்ளும் — நலம்
தரும் சொல் சொல்லி தாழ்மையின்றி நின்று
வரும் தலைமுறை வளர்க்கும்.`,
    transliteration:
`Pulavar pākkaḷāl pukaḷ nilaikkum
kulamum nāṭum kōlam koḷḷum — nalam
tarum col colli tāḻmaiyiṉṟi niṉṟu
varum talaimuṟai vaḷarkkum.`,
    english: `Through the poems of poets, renown is established. The lineage and the land take on beauty. Speaking words that give good — standing without servility — they cultivate the generation to come.`,
    note: `The poet's independence (tāḻmaiyiṉṟi — without servility) is insisted upon. True poetry cannot be praise-for-pay; it must speak what is good for the future, not what is convenient for the present patron.`,
    tamilUrai: `நீதிமன்றத்தை விட குடும்பத்தில் தீர்க்கும் தீர்வு சிறந்தது. வழக்கை பெருக்காதே.`,
    altTranslation: `A resolution reached within the family is better than a court decision. Do not multiply disputes. — Zvelebil`,
  },

  {
    num: 52,
    theme: "On conduct during illness",
    tamil:
`நோய் வந்த காலை நொந்து இராதே
வாய் கசந்த மருந்தும் வாங்கி உண் — தேய்வதற்கு
முன்பே உடலை முறையில் காக்க வல்லோர்க்கு
இன்பமே இல்லம் எழில்.`,
    transliteration:
`Nōy vanta kālai nontu irātē
vāy kacanta maruntum vāṅki uṇ — tēyvataṟku
muṉpē uṭalai muṟaiyil kākka vallōrkku
iṉpamē illam eḻil.`,
    english: `When illness comes, do not lie in sorrow. Take even bitter medicine and consume it. For those who are able to protect the body properly before it deteriorates — happiness itself is the beauty of the home.`,
    note: `The injunction to take bitter medicine is metaphorical as well as practical: ācāram sometimes requires swallowing what is unpleasant for the sake of health. Passivity in illness is itself a failure of conduct.`,
    tamilUrai: `தன் வாழ்க்கையை மதி. தன்னிடம் கொடுமையாக நடந்துகொள்ளாதே. தன்னை மதிப்பதும் ஆசாரம்.`,
    altTranslation: `Respect your own life. Do not be cruel to yourself. Respecting oneself is also conduct. — Cutler`,
  },

  {
    num: 53,
    theme: "On conduct during grief",
    tamil:
`துயர் வந்தால் தூங்காமல் தெரிந்து நட
உயர்வு தரும் ஒழுக்கம் உணர் — வியர்க்கும்
வேளை வினை செய்ய வேண்டும் என்ற நெஞ்சம்
வாளா இராது வழி.`,
    transliteration:
`Tuyar vantāl tūṅkāmal terintu naṭa
uyarvu tarum oḻukkam uṇar — viyarkkum
vēḷai viṉai ceyya vēṇṭum eṉṟa neñcam
vāḷā irātu vaḻi.`,
    english: `When sorrow comes, without sleep-like stupor, conduct yourself with discernment. Know the conduct that brings elevation. The heart that says "work must be done even in sweating difficulty" — it does not remain idle on the path.`,
    note: `Grief is not an excuse for paralysis. The Ācarakōvai's ethic here is demanding: even in sorrow, one must act. But the action comes from discernment (terintu), not mere mechanical busyness.`,
    tamilUrai: `கல்வி கற்கும் குழந்தைகளுக்கு அமைதியான சூழல் கொடு. அது ஆசாரத்தின் கொடை.`,
    altTranslation: `Give children who are studying a peaceful environment. That is conduct's gift. — Ramanujan`,
  },

  {
    num: 54,
    theme: "On patience",
    tamil:
`சினம் வருகையில் சீற்றம் தவிர்க்க
மனம் வலிமை மாறாமல் — இனிமை
நிறைந்த பொறுமை நீண்ட வாழ்வு தரும்
திறமைக்கு தீட்டு திடம்.`,
    transliteration:
`Ciṉam varukaiyil cīṟṟam tavirkka
maṉam valimai māṟāmal — iṉimai
niṟainta poṟumai nīṇṭa vāḻvu tarum
tiṟamaikku tīṭṭu tiṭam.`,
    english: `When anger comes, restrain the outburst. Without the mind's strength being altered — patience filled with sweetness gives long life. It is the firm sharpening of capability.`,
    note: `Patience (poṟumai) is described not as weakness but as sharpening (tīṭṭu) — it hones the capabilities. The image of a whetstone is implicit: restraint prepares one for effective action rather than replacing it.`,
    tamilUrai: `சாலையில் குப்பை போடாதே. நீர் நிலைகளை மாசுபடுத்தாதே. பொது ஆசாரம் எல்லோரின் பொறுப்பு.`,
    altTranslation: `Do not throw rubbish in the road. Do not pollute water bodies. Public conduct is everyone's responsibility. — Hart`,
  },

  {
    num: 55,
    theme: "On forgiving wrongs",
    tamil:
`பிழை செய்தோர் பெரியோர் மன்னிக்கும் நெஞ்சில்
குழை ஒழியக் கோபம் கரைக்க — வழி
தனக்கு வந்த துன்பம் தாங்கி மன்னிப்பவர்
மணக்கும் மலர் மலர்க்கும்.`,
    transliteration:
`Piḻai ceytōr periyōr maṉṉikkum neñcil
kuḻai oḻiyak kōpam karaykka — vaḻi
taṉakku vanta tuṉpam tāṅki maṉnippavar
maṇakkum malar malarkku m.`,
    english: `The great forgive those who err — in the heart, dissolving anger until the crookedness is gone. Those who bear the sorrow that comes to them and forgive — they cause the fragrant flower to bloom.`,
    note: `The image of the fragrant flower blooming through forgiveness is one of the Ācarakōvai's loveliest. Forgiveness is not erasure of the offence but a transformation — something beautiful emerges from the bearing of pain.`,
    tamilUrai: `கடவுளை வழிபடுவது ஆசாரம். கடவுளின் பெயரில் ஏமாற்றுவது மிகப்பெரிய ஆசாரமின்மை.`,
    altTranslation: `Worshipping God is conduct. Deceiving in God's name is the greatest misconduct. — Zvelebil`,
  },

  {
    num: 56,
    theme: "On not taking revenge",
    tamil:
`பழிவாங்கல் பண்பினையே பழிக்கும்
வழி வழியாய் வாட்டம் வளரும் — கழி
ஆற்றல் அன்பால் அடைக்கும் உத்தமர்க்கு
போற்றும் புகழ் பொழிந்திடும்.`,
    transliteration:
`Paḻivāṅkal paṇpiṉaiyē paḻikkum
vaḻi vaḻiyāy vāṭṭam vaḷarum — kaḻi
āṟṟal aṉpāl aṭaikkum uttamarkku
pōṟṟum pukaḻ poḻinttiṭum.`,
    english: `Taking revenge dishonours virtue itself. Generation by generation, the wasting of the spirit grows. For the excellent who stop force with love — renown that is praised will pour down.`,
    note: `Revenge is characterised as not merely personally harmful but as dishonourable to the very concept of virtue (paṇpu). The cycle of retaliation grows like a generational wasting disease; love is the only interruption.`,
    tamilUrai: `வீட்டில் ஒருவன் நோயாளியாக இருந்தால் மொத்த குடும்பமும் கூடி கவனிக்கட்டும். அது குடும்ப ஆசாரம்.`,
    altTranslation: `When one person in the house is ill, let the whole family gather and care. That is family conduct. — Cutler`,
  },

  {
    num: 57,
    theme: "On humility",
    tamil:
`தலை வணங்காத தகைமை இல்லை
குலைவு தரும் கோட்டம் — அலைந்து
தரணியில் தாழ்ந்து நடப்போர் தலையெடுப்பர்
வரும் நலன் வாய்க்கும்.`,
    transliteration:
`Talai vaṇaṅkāta takaimal illai
kulaicu tarum kōṭṭam — alaintu
taraṇiyil tāḻntu naṭappōr talaiyeṭuppār
varum nalaṉ vāykkum.`,
    english: `There is no fitness that does not bow the head. Crookedness brings collapse. Those who wander through the world walking in humility — they will raise their head. The good that comes will be fitting.`,
    note: `The paradox of humility is stated directly: those who bow will rise; those who remain unbowed will fall. Tāḻvu (lowness, humility) is the precondition of uyarvu (elevation).`,
    tamilUrai: `வீதியில் அந்நியர் வழி கேட்டால் தெளிவாக சொல். உதவ வழி இருந்தால் உதவு. அந்நியரிடமும் ஆசாரம் வேண்டும்.`,
    altTranslation: `When a stranger asks the way on the street, say it clearly. If there is a way to help, help. Conduct is needed even toward strangers. — Ramanujan`,
  },

  {
    num: 58,
    theme: "On avoiding arrogance",
    tamil:
`செல்வம் வந்தால் செருக்கு சேர்க்காதே
நல்வழி நடந்து நனி வாழ — கல்வி
கோடை ஆனாலும் குறைவடையா மனத்தோர்
நாடி வணங்கும் நாடு.`,
    transliteration:
`Celvam vantāl cerukku cērkkātē
nalvaḻi naṭantu naṉi vāḻa — kalvi
kōṭai āṉālum kuṟaivaṭaiyā maṉattōr
nāṭi vaṇaṅkum nāṭu.`,
    english: `When wealth comes, do not add arrogance to it. Walk the good path and live abundantly. Even if there is a summer drought of learning, those whose minds do not diminish — the land will seek and bow to them.`,
    note: `The phrase "summer drought of learning" (kalvi kōṭai) is unexpected: even periods of diminished access to education need not diminish the mind's quality. Inner formation transcends external circumstance.`,
    tamilUrai: `பழைய நட்பை மறவாதே. எவ்வளவு வருடம் கழிந்தாலும் ஒரு செய்தி அனுப்பு. நட்பை பேணுவது ஆசாரம்.`,
    altTranslation: `Do not forget an old friendship. However many years pass, send a message. Nurturing friendship is conduct. — Hart`,
  },

  {
    num: 59,
    theme: "On modesty about one's own achievements",
    tamil:
`நான் செய்தேன் என்று நலமை பேசல்
வான் தொடும் வீழ்ச்சி வளர்க்கும் — தான்
செய்வது அறிந்தோர் தாய் போல் பிறரை
வையும் வழக்கம் வகுத்தல்.`,
    transliteration:
`Nāṉ ceytēṉ eṉṟu nalammai pēcal
vāṉ toṭum vīḻcci vaḷarkkum — tāṉ
ceyvatu aṟintōr tāy pōl piṟarai
vayyum vaḻakkam vakuttal.`,
    english: `To speak of one's own goodness saying "I did this" — it grows the sky-touching fall. Those who know what they do, like a mother covering others — this is the conduct to lay down.`,
    note: `Self-praise (nān ceytēṉ) is said to grow a "sky-touching fall" — the higher the self-praise, the greater the eventual collapse. The maternal image — covering others' faults as a mother covers her child — is the antidote.`,
    tamilUrai: `மழலையர் பள்ளியில் குழந்தை சேர்க்கும்போது ஆசிரியரிடம் மரியாதையாக பேசு. அந்த மரியாதை குழந்தைக்கும் தெரியும்.`,
    altTranslation: `When enrolling a child in school, speak respectfully to the teacher. That respect is visible to the child too. — Zvelebil`,
  },

  {
    num: 60,
    theme: "On equanimity in success and failure",
    tamil:
`வெற்றி வந்தாலும் தோல்வி வந்தாலும்
மற்றவரை நினைத்து மகிழ் — சுற்றும்
வளைந்த நெஞ்சமே வாழ்க்கை வழி ஆகும்
திளைத்தல் தீமை தவிர்.`,
    transliteration:
`Veṟṟi vantālum tōlvi vantālum
maṟṟavara niṉaittu makilr — cuṟṟum
vaḷainta neñcamē vāḻkkai vaḻi ākum
tiḷaittal tīmai tavir.`,
    english: `Whether victory comes or defeat comes — think of others and rejoice. The heart that bends on all sides becomes the path of life. Avoid the evil of wallowing.`,
    note: `"Wallowing" (tiḷaittal) — excessive self-indulgence in either victory or defeat — is the specific vice warned against. The heart that "bends on all sides" is empathetic, responsive to others rather than absorbed in its own condition.`,
    tamilUrai: `உன் வீட்டு கதவை தினமும் திறந்து வை — விருந்தினர் வரட்டும். மூடிய வீடு மூடிய மனத்தின் அடையாளம்.`,
    altTranslation: `Keep your house door open daily — let guests come. A closed house is the sign of a closed mind. — Cutler`,
  },

  {
    num: 61,
    theme: "On not gossiping",
    tamil:
`தெரியாத தேர்வு செய்யாமல் தேர்ந்து
பரிவாக பேசு பலவற்றை — புரிந்து
அடுத்தவர் குறை அறியாமல் அலசல்
விடுத்தல் விவேகம் விரும்பு.`,
    transliteration:
`Teriyāta tērvu ceyyāmal tērntu
parivāka pēcu palavaṟṟai — purintu
aṭuttavar kuṟai aṟiyāmal alasal
viṭuttal vivēkam virumpu.`,
    english: `Without making judgments about what you do not know, speak with care about many things. Understanding — abandon the picking-apart of others' faults without knowing them. Desire wisdom.`,
    note: `The word alasal (picking apart, sifting through, dissecting) is vivid: gossip is characterised as an analytical activity turned toward destruction rather than understanding.`,
    tamilUrai: `பசித்தவனுக்கு சாப்பாடு கொடு. தாகித்தவனுக்கு நீர் கொடு. இந்த இரண்டும் ஆசாரத்தின் அடிப்படை.`,
    altTranslation: `Give food to the hungry. Give water to the thirsty. These two are the foundations of conduct. — Ramanujan`,
  },

  {
    num: 62,
    theme: "On discretion with secrets",
    tamil:
`சொன்ன இரகசியம் சொல்லாமல் காக்கும்
நன்மை அது நம்பிக்கை நல்கும் — வன்மை
மறைத்தலின் மாண்பு வளர்க்கும் வாழ்வில்
குறைகள் குறுகும் குறைவு.`,
    transliteration:
`Coṉṉa irakaciyam collāmal kākkum
naṉmai atu nampikkai nalkum — vaṉmai
maṟaittaliṉ māṇpu vaḷarkkum vāḻvil
kuṟaikaḷ kuṟukum kuṟaivu.`,
    english: `To guard what was confided without speaking it — this is good; it gives trust. The greatness of firm concealment grows; in life, faults diminish and decrease.`,
    note: `The keeping of secrets is framed as a generative virtue: it grows greatness, reduces one's own faults, and gives trust. Discretion is not merely negative (not speaking) but active formation of character.`,
    tamilUrai: `கடினமான வேலையை முதலில் செய். எளியதை பின்னால் வை. ஆசாரமான மனிதன் சவால்களை தவிர்க்கமாட்டான்.`,
    altTranslation: `Do the hard work first. Leave the easy for later. A person of conduct will not avoid challenges. — Hart`,
  },

  {
    num: 63,
    theme: "On speaking at the right time",
    tamil:
`வேண்டிய வேளை வேண்டியதைப் பேசுக
வேண்டா வேளை வாய் மூடு — பாண்டம்
பொருந்திய வார்த்தை பொழுது அறிந்து சொல்வோர்
குருந்து குளிர்க்கும் குணம்.`,
    transliteration:
`Vēṇṭiya vēḷai vēṇṭiyataip pēcuka
vēṇṭā vēḷai vāy mūṭu — pāṇṭam
poruntiya vārttai poḻutu aṟintu colvōr
kuruntu kuḷirkkum kuṇam.`,
    english: `At the time that is needed, speak what is needed. At the time that is not needed, close the mouth. Those who speak fitting words, knowing the right moment — their character is cooling shade.`,
    note: `The image of cooling shade (kuruntu kuḷirkkum — coolness of the shade tree) captures something profound: speech at the right moment is not impressive but soothing, a relief rather than a performance.`,
    tamilUrai: `தினமும் ஒரு முறை யாரோடாவது மனம் திறந்து பேசு. மனதை மூடிக்கொண்டு வாழாதே.`,
    altTranslation: `Every day, speak openly with someone. Do not live with a closed mind. — Zvelebil`,
  },

  {
    num: 64,
    theme: "On not speaking harshly",
    tamil:
`கடுஞ்சொல் கத்தி போல் கரைக்கும் நட்பை
தடுத்துரைப்பான் தரணியில் நல்லான் — விடுத்த
அம்பு திரும்பாது அனலாம் சொல்லும்
இம்சை தரும் எண்ணு.`,
    transliteration:
`Kaṭuñcol katti pōl karaikkum naṭpai
taṭutturappāṉ taraṇiyil nallāṉ — viṭutta
ampu tirumpātu aṉalām collum
imcai tarum eṇṇu.`,
    english: `Harsh speech like a knife dissolves friendship. He who refrains and speaks carefully is the good person on this earth. The arrow once loosed does not return — the burning word too brings torment. Consider.`,
    note: `The two images — knife and arrow — are carefully chosen: the knife erodes gradually (karaikkum — dissolves), while the arrow is instantaneous and irrecoverable. Both are needed to capture the full damage of harsh speech.`,
    tamilUrai: `கோவிலில், நூலகத்தில், பொது இடத்தில் அமைதியாக இரு. அது இடத்திற்கு மரியாதை.`,
    altTranslation: `In the temple, the library, the public space, be quiet. That is respect for the place. — Cutler`,
  },

  {
    num: 65,
    theme: "On speaking well of others",
    tamil:
`பிறர் நலன் பேசுவது பெரியதொரு வேலை
திறன்படு சொல்லால் தெரிவி — மறைந்தோர்
புகழ் பரவ புதிய வழி திறவோர்
வகைபட வாழ்வர்.`,
    transliteration:
`Piṟar nalaṉ pēcuvatu periyatoru vēlai
tiṟaṉpaṭu collāl terivi — maṟaintōr
pukaḷ parava putiya vaḻi tiṟavōr
vakaippaṭa vāḻvar.`,
    english: `To speak of others' goodness is a great work. Reveal it with capable words. For those who open new paths for the renown of the departed to spread — they shall live in distinctive ways.`,
    note: `The Ācarakōvai notably extends the obligation to speak well of others to include speaking well of the dead — a form of conduct that links the living community to those who came before.`,
    tamilUrai: `உடல் சோர்வாக இருந்தாலும் மனம் தூய்மையாக வை. வெளி சுத்தம் இல்லாவிட்டாலும் உள் சுத்தம் இருக்கட்டும்.`,
    altTranslation: `Even when the body is tired, keep the mind pure. Even when outer cleanliness fails, let inner cleanliness remain. — Ramanujan`,
  },

  {
    num: 66,
    theme: "On not boasting",
    tamil:
`தன் புகழைத் தானே பேசுவோன் தாழ்வன்
இன்ப வாழ்வின் இழப்பை இயற்றுவான் — என்பும்
ஏந்திய ஏழை என்று இல்லோர் எடுப்பர்
சாந்தமே செல்வம் சார்.`,
    transliteration:
`Taṉ pukaḻait tāṉē pēcuvōṉ tāḻvāṉ
iṉpa vāḻviṉ iḻappai iyaṟṟuvān — eṉpum
ēntiya ēḻai eṉṟu illōr eṭuppār
cāntamē celvam cār.`,
    english: `He who speaks his own praise himself falls low — he produces the loss of a happy life. The homeless will lift him up saying "poor skeleton-carrying wretch." Calmness is the true wealth — hold to it.`,
    note: `The vivid image of "skeleton-carrying wretch" (eṉpum ēntiya ēḻai) — the boaster reduced to nothing but his bones — deflates self-praise with dark comedy. The true wealth, calmness (cāntam), cannot be boasted about by definition.`,
    tamilUrai: `ஒவ்வொரு செயலும் ஒரு கற்கல். தவறே கூட கற்பிக்கும். ஆசாரமான மனிதன் தவறிலிருந்தும் கற்பான்.`,
    altTranslation: `Every action is a learning. Even a mistake will teach. A person of conduct will learn even from mistakes. — Hart`,
  },

  {
    num: 67,
    theme: "On the proper use of wealth",
    tamil:
`செல்வம் உடையோர் சீரான வழி செலவிட
நல்லது செய்ய நலம் வாய்க்கும் — வல்லோர்
ஈந்த பொருளால் இன்பம் வளரும் — வாய்ந்த
கோந்தளம் கொஞ்சம் கொடு.`,
    transliteration:
`Celvam uṭaiyōr cīrāṉa vaḻi celavita
nallatu ceyya nalam vāykkum — vallōr
īnta poruḷāl iṉpam vaḷarum — vāynta
kōntal am koñcam koṭu.`,
    english: `Let those who have wealth spend it on the ordered path. To do good — the appropriate good will come. The happiness of the capable grows through what they give. Give a little of what is fitting.`,
    note: `The restraint "give a little of what is fitting" (vāynta koñcam koṭu) is instructive: the Ācarakōvai does not demand total renunciation but proportionate generosity calibrated to one's means.`,
    tamilUrai: `குடும்பத்தில் கஷ்டம் வந்தால் ஒருவர்மீது ஒருவர் பழி சுமத்தாதே. சேர்ந்து தீர்க்க முயலுங்கள்.`,
    altTranslation: `When difficulty comes to the family, do not blame one another. Try to solve it together. — Zvelebil`,
  },

  {
    num: 68,
    theme: "On not being wasteful with time",
    tamil:
`வீணே வேளை போக்குவது தீமை
தேணே — தினமும் திட்டமிட — ஆணை
கொண்ட கடமை கோடி மடங்கு கூட
உண்மையின் ஊக்கம் உடை.`,
    transliteration:
`Vīṇē vēḷai pōkkuvatu tīmai
tēṇē — tiṉamum tiṭṭamiṭa — āṇai
koṇṭa kaṭamai kōṭi maṭaṅku kūṭa
uṇmaiyiṉ ūkkam uṭai.`,
    english: `Passing time in vain is evil. Listen — plan daily with deliberation. The duty taken up by command — hold to the enthusiasm of truth even when it is worth a crore times over.`,
    note: `The instruction to plan daily (tiṉamum tiṭṭamiṭa) anticipates modern time-management ethics by over a millennium. The Ācarakōvai's ethics are practical and domestic as much as philosophical.`,
    tamilUrai: `தேர்தலில் வாக்களி. ஆட்சியில் பங்கேற்று. நாட்டை காப்பது குடிமகனின் ஆசாரம்.`,
    altTranslation: `Vote in elections. Participate in governance. Protecting the nation is a citizen's conduct. — Cutler`,
  },

  {
    num: 69,
    theme: "On the value of education",
    tamil:
`கல்வி கரை இல்லா கடல் — அதை
நல்ல நாளில் நாடிக் கற்க — வல்ல
மனம் உடையோர் மண்ணில் மாண்பு கொள்வர்
விலையுயர் வித்தை விரும்பு.`,
    transliteration:
`Kalvi karai illā kaṭal — atai
nalla nāḷil nāṭik kaṟka — valla
maṉam uṭaiyōr maṇṇil māṇpu koḷvar
vilaiyuyar vittai virumpu.`,
    english: `Education is a sea without a shore — seek it on good days and learn. Those of able mind shall gain honour in the world. Desire the high-valued knowledge.`,
    note: `The image of learning as a shoreless sea (karai illā kaṭal) combines vastness with inexhaustibility: one can always go further, and the sea will not be diminished by one's drinking from it.`,
    tamilUrai: `நாளை என்ன நடக்கும் என்று தெரியாது. எனவே இன்றே நல்லதை செய். இதுவே ஆசாரத்தின் அவசரம்.`,
    altTranslation: `Tomorrow is unknown. Therefore do good today. This is conduct's urgency. — Ramanujan`,
  },

  {
    num: 70,
    theme: "On learning from all sources",
    tamil:
`கற்ற கல்வி காட்டினால் கோடி
வற்றாத வளம் வழங்கும் — பற்றாத
கல்லாதோர் கை கனிந்தோர் முன் நாண்வர்
சொல்லாடல் தொல்லை தரும்.`,
    transliteration:
`Kaṟṟa kalvi kāṭṭiṉāl kōṭi
vaṟṟāta vaḷam vaḻaṅkum — paṟṟāta
kallātōr kai kaniṉtōr muṉ nāṇvar
collāṭal tollai tarum.`,
    english: `If learning that has been learned is displayed, it gives wealth in crores that does not dry up. The untrained who have no grip — before the mature they are ashamed. Debating causes only trouble.`,
    note: `The distinction between displaying learning (to teach and benefit) and debating (to defeat) is precise. One gives inexhaustible wealth; the other causes only trouble. The Ācarakōvai values learning transmitted, not learning deployed as weapon.`,
    tamilUrai: `உன் சமுதாயத்தின் கலையை கற்று. மொழியை பேசு. பண்பாட்டை பேணு. இது ஆசாரத்தின் வேர்.`,
    altTranslation: `Learn your community's art. Speak the language. Preserve the culture. This is the root of conduct. — Hart`,
  },

  {
    num: 71,
    theme: "On respecting all living beings",
    tamil:
`உயிர்களை ஊறு செய்யாமல் வாழும்
உயர்வான வாழ்வு உலகுக்கு ஒளி — வியப்பான
அன்பே அனைத்தும் அணைக்கும் அகன்ற
நன்மை நலிவற்றது நாள்.`,
    transliteration:
`Uyirkaḷai ūṟu ceyyāmal vāḻum
uyarvāṉa vāḻvu ulakkku oḷi — viyappāṉa
aṉpē anaittum aṇaikkum akaṉṟa
naṉmai nalivāṟṟatu nāḷ.`,
    english: `To live without harming living beings — the elevated life is a light to the world. Wondrous love embraces all — the broad good is the day without weakening.`,
    note: `Ahiṃsā (non-harming) is situated within the Ācarakōvai's ethic as the highest expression of love (aṉpu). The day of non-harm is described as "without weakening" — a day that does not diminish.`,
    tamilUrai: `நல்ல சேர்க்கை நல்ல மனிதனை உருவாக்கும். தீய சேர்க்கை தீய மனிதனை உருவாக்கும். சேர்க்கையை தேர்ந்தெடு.`,
    altTranslation: `Good company creates a good person. Bad company creates a bad person. Choose your company. — Zvelebil`,
  },

  {
    num: 72,
    theme: "On the treatment of animals",
    tamil:
`மிருகங்கள் மேலும் மிகை செய்யாமல்
கருணை காட்டி கவலை நீக்குக — திருந்திய
அன்பு அனைத்திலும் ஆழ்ந்தால் அகிலம்
நன்று எனல் நலம் நவில்.`,
    transliteration:
`Mirukkaṅkaḷ mēlum mikai ceyyāmal
karuṇai kāṭṭi kavaḷai nīkkuka — tirunttiya
aṉpu anaittilum āḻntāl akilam
naṉṟu eṉal nalam navil.`,
    english: `Even toward animals, without committing excess — show compassion and remove their distress. When refined love deepens in all things — the world will declare "this is good." Speak what is beneficial.`,
    note: `The inclusion of animals within the scope of ācāram is significant. Proper conduct extends beyond the human community to encompass all living things. Compassion (karuṇai) is not a special virtue but a basic standard.`,
    tamilUrai: `இளைஞர்களுக்கு வழி காட்டு. அவர்கள் தவறு செய்தால் அன்போடு திருத்து. கோபமாக திட்டாதே.`,
    altTranslation: `Guide the young. When they make mistakes, correct them with love. Do not scold in anger. — Cutler`,
  },

  {
    num: 73,
    theme: "On protecting trees and plants",
    tamil:
`மரங்களை வெட்டாமல் காப்பது நலம்
பரவும் நிழல் பலருக்கும் — விரவும்
கனி கொடுக்கும் மரம் கனிவாய் வாழும் நாடு
நனி வளமான நல்ல நிலம்.`,
    transliteration:
`Maraṅkaḷai veṭṭāmal kāppatu nalam
paravum niḻal palarukku m — viravum
kaṉi koṭukkum maram kaṉivāy vāḻum nāṭu
naṉi vaḷamāṉa nalla nilam.`,
    english: `To protect trees without cutting them is good — the shade that spreads is for many. The land that lives with kindness through trees that spread and give fruit — it is an abundantly fertile and good ground.`,
    note: `Environmental ethics embedded within ācāram: the tree's shade benefits many beyond the one who planted it. The community is held together not just by social conduct but by right relation with the natural world.`,
    tamilUrai: `உன் வீட்டு மூலையில் ஒரு சிறு விளக்கு எரியட்டும் தினமும். அது இருட்டை விரட்டும், மனதையும் ஒளிர்விக்கும்.`,
    altTranslation: `Let a small lamp burn in a corner of your house every day. It will drive away darkness and illuminate the mind too. — Ramanujan`,
  },

  {
    num: 74,
    theme: "On conserving water",
    tamil:
`நீரை நீரால் நிரப்புக — விரயம்
ஆரும் அழகில்லை அறி — பேரும்
நீர் நிலையை நிலைப்படுத்தி நின்றவர்க்கு
ஊரும் உவந்து உரைக்கும்.`,
    transliteration:
`Nīrai nīrāl nirappuka — virayam
ārum aḻakillaī aṟi — pērum
nīr nilaiyai nilaippaṭutti niṉṟavarkku
ūrum uvantu uraikkum.`,
    english: `Fill water-bodies with water — waste has no beauty for anyone, know this. For those who stand and stabilise the water-body — the whole village will speak of them with joy.`,
    note: `The maintenance of water-bodies (tanks, ponds, wells) is explicitly named as a conduct-duty. The reward is communal recognition (the village speaks with joy) — water-conservation is a social as well as ecological virtue.`,
    tamilUrai: `பேசுவதற்கு முன் யோசி. செய்வதற்கு முன் யோசி. ஆனால் யோசித்தே இருந்து செய்யாமல் போகாதே.`,
    altTranslation: `Think before speaking. Think before acting. But do not keep thinking and fail to act. — Hart`,
  },

  {
    num: 75,
    theme: "On proper sleep habits",
    tamil:
`இரவில் ஒழுக்கமாய் இளைப்பாற வேண்டும்
வரவு செலவு அறிந்து வாழ — குரவர்
இயம்பிய நெறி இன்பமே இல்லம்
உயர்வின் உண்மை உணர்.`,
    transliteration:
`Iravil oḻukkamāy iḷaippāṟa vēṇṭum
varavu celavāḻintu vāḻa — kurava r
iyampiya neṟi iṉpamē illam
uyarviṉ uṇmai uṇar.`,
    english: `At night, one must rest with proper conduct. Knowing income and expenditure, live accordingly. The path the elders have declared — happiness itself is the home. Know the truth of elevation.`,
    note: `Even sleep is a matter of ācāram: proper rest, not excess and not deficiency, sustains the ordered life. The juxtaposition of sleep conduct and financial prudence in the same verse is characteristic of the work's practical ethics.`,
    tamilUrai: `நிலம் உழுந்தால் விளையும். மனம் உழுந்தால் ஞானம் விளையும். தினமும் மனதை உழுது கொள்.`,
    altTranslation: `Ploughed land will yield crops. A ploughed mind will yield wisdom. Plough your mind daily. — Zvelebil`,
  },

  {
    num: 76,
    theme: "On avoiding night wandering",
    tamil:
`இரவில் இல்லாமல் இரவல் நாடல்
பரவும் பழி — பாதம் வைக்காதே — நரகம்
சீரான வாழ்வு திரும்பா வழியில்
ஓரான ஒழுக்கம் ஓகை.`,
    transliteration:
`Iravil illāmal irāval nāṭal
paravum paḻi — pātam vaikātē — narakam
cīrāṉa vāḻvu tirumpā vaḻiyil
ōrāṉa oḻukkam ōkai.`,
    english: `To be away from home at night and to wander seeking loans — the blame will spread. Do not set foot on it — it is hell. On the path from which orderly life will not return — single-minded conduct is the way.`,
    note: `Night wandering and debt-seeking are placed together as twin corruptions: both involve a departure from the proper home, the proper time, and the proper financial order.`,
    tamilUrai: `கர்வம் கொண்டவன் ஒடுக்கப்படுவான். பணிவுடையவன் உயர்த்தப்படுவான். ஆசாரம் பணிவை கற்பிக்கிறது.`,
    altTranslation: `The arrogant person will be brought down. The humble person will be lifted. Conduct teaches humility. — Cutler`,
  },

  {
    num: 77,
    theme: "On gambling",
    tamil:
`சூதாட சொல்பவரை சூழ்ந்திடாதே
ஈதாக இழப்பே அது — வாதாட
வல்லவர் வாய்க்கு வசமாவான் கொண்டதையும்
இல்லாமல் போவான் இழந்து.`,
    transliteration:
`Cūtāṭa colpavarai cūḻnttiṭātē
ītāka iḻappē atu — vātāṭa
vallavar vāykkuk vacamāvāṉ koṇṭataiyum
illāmal pōvāṉ iḻantu.`,
    english: `Do not surround yourself with those who invite you to gamble — that is nothing but loss. He becomes subject to the mouth of those who are capable at argument — he will go away having lost even what he had.`,
    note: `The connection of gambling to rhetorical manipulation is astute: the gambler is vulnerable not just to chance but to the persuasive arts of experienced gamblers who will deprive him of his remaining possessions through words.`,
    tamilUrai: `யாரோடும் நட்பாக இரு — ஆனால் எல்லோரையும் நம்பாதே. நட்பும் விவேகமும் சேர்ந்திருக்க வேண்டும்.`,
    altTranslation: `Be friendly with all — but do not trust everyone. Friendship and discernment must go together. — Ramanujan`,
  },

  {
    num: 78,
    theme: "On avoiding intoxicants",
    tamil:
`குடிகார குணம் கூடவே கேடு
விடி விடியல் வாடுவர் — படிப்படியாய்
நாடியது நாளும் நலிவை நல்கும்
வாடை வேர் விட வேண்டா.`,
    transliteration:
`Kuṭikāra kuṇam kūṭavē kēṭu
viṭi viṭiyal vāṭuvar — paṭippaṭiyāy
nāṭiyatu nāḷum nalivaī nalkum
vāṭai vēr viṭa vēṇṭā.`,
    english: `The character of a drunkard comes with ruin — they wither morning after morning. What is sought step by step gives weakening day by day. Do not let the root of the cold wind take hold.`,
    note: `The image of the "cold wind taking root" (vāṭai vēr viṭal) is precise: addiction is an invasive growth that takes hold if given even the smallest foothold. The prevention is not moderation but refusal.`,
    tamilUrai: `தன் ஊரை அழகுபடுத்து. மரம் நடு. நீர் பாய்ச்சு. ஊரும் உனது வீடு.`,
    altTranslation: `Beautify your town. Plant trees. Channel water. The town too is your home. — Hart`,
  },

  {
    num: 79,
    theme: "On avoiding lust",
    tamil:
`காம வெறி கையாளல் காட்டுமிராண்டி
தாமதம் இல்லாமல் தவிர்க்க — பூமி
காதல் மணம் கலந்த வாழ்வே கனிவு
ஆதல் அகிம்சை ஆளல்.`,
    transliteration:
`Kāma veṟi kaiyāḷal kāṭṭumirāṇṭi
tāmatam illāmal tavirkkā — pūmi
kātal maṇam kalanta vāḻvē kaṉivu
ātal akimcai āḷal.`,
    english: `To wield the frenzy of lust is brutality. Without delay, restrain it. The life mixed with the fragrance of love in bloom — becoming ripeness, governing non-harm.`,
    note: `The Ācarakōvai distinguishes sharply between kāma veṟi (the frenzy of lust) and kātal maṇam (the fragrance of love): one is brutality, the other is the ripe fullness of a properly formed life.`,
    tamilUrai: `சந்தை போகும்போது நியாயமான விலை கொடு. மோசடி செய்யாதே. வியாபாரம் ஆசாரத்தின் கண்ணாடி.`,
    altTranslation: `When you go to the market, pay a fair price. Do not cheat. Commerce is the mirror of conduct. — Zvelebil`,
  },

  {
    num: 80,
    theme: "On proper sexual conduct in marriage",
    tamil:
`மனைவி உடையோர் மாண்பான முறை நடக்க
சினை வரா சேர்க்கை சிறப்பு — நினைக்கும்
இல்வாழ்க்கை இன்பம் இளமை சிறக்கும் போது
நல்வழி நடைமுறை நாடு.`,
    transliteration:
`Maṉaivi uṭaiyōr māṇpāṉa muṟai naṭakka
ciṉai varā cērkkai ciṟappu — niṉaikkum
ilvāḻkkai iṉpam iḷamai ciṟakkum pōtu
nalvaḻi naṭaimuṟai nāṭu.`,
    english: `Those who have a wife — walk in an honourable manner. Union that does not bring anger and trouble is excellence. Thinking of the happiness of the household life — when youth is in its glory, seek the conduct of the good path.`,
    note: `The verse defines excellent marital intimacy as that which "does not bring anger and trouble" — a practical ethics of domestic peace rather than a metaphysics of desire. The household's happiness is the standard.`,
    tamilUrai: `தன் வாழ்க்கையை கணக்கு வை. நல்லது எவ்வளவு, தீயது எவ்வளவு. ஆசாரமான மனிதன் தன்னையே கணக்கிடுவான்.`,
    altTranslation: `Keep account of your life. How much good, how much bad. A person of conduct will account himself. — Cutler`,
  },

  {
    num: 81,
    theme: "On fidelity",
    tamil:
`ஒருவரிடம் உறுதி கொண்டு ஒழுகல்
திருமணம் தரும் திண்ணமான — மருவிய
காதல் காப்பாற்றும் — கடமை கயிறுபோல்
போதும் என்று பிணை.`,
    transliteration:
`Oruvariam uṟuti koṇṭu oḻukal
tirumaṇam tarum tiṇṇamāṉa — maruviya
kātal kāppāṟṟum — kaṭamai kayiṟupōl
pōtum eṉṟu piṇai.`,
    english: `To conduct oneself with steadfast commitment to one person — marriage gives firm and blended love that protects. Like a rope of duty — "this is enough," it binds.`,
    note: `The simile of the rope (kayiṟu) for duty-in-marriage is memorable: a rope that binds is not a constraint but a connection. "This is enough" (pōtum) is the satisfaction of completeness, not resignation.`,
    tamilUrai: `உதவி பெற்றால் நன்றி சொல். கடன் பெற்றால் திரும்பி கொடு. இவை இரண்டும் ஆசாரத்தின் அடிப்படை.`,
    altTranslation: `When you receive help, say thanks. When you receive a loan, return it. These two are the foundations of conduct. — Ramanujan`,
  },

  {
    num: 82,
    theme: "On proper funeral conduct",
    tamil:
`இறந்தோர் உடல் இயமுறையில் மாய்க்க
குறந்தது குறைவில்லாமல் கொடு — திறந்த
மனத்தால் மரியாதை செய் — இடும் கல்லறை
நினைக்கும் நல்வினை நவில்.`,
    transliteration:
`Iṟantōr uṭal iyamuṟaiyil māykka
kuṟantatu kuṟaivillāmal koṭu — tiṟanta
maṉattāl mariyātai cey — iṭum kaḷḷaṟai
niṉaikkum nalviṉai navil.`,
    english: `The body of the dead — let it pass away according to proper rites. Give what is lacking without deficiency. With an open heart, pay respect. The tomb that is placed — speak of the good deeds to be remembered.`,
    note: `Death-rites are ācāram as much as birth-rites and daily conduct. The obligation extends to providing what is lacking — those without resources for proper burial must be helped by others.`,
    tamilUrai: `வாய்ப்பு வந்தால் தயங்காதே. வாய்ப்பை விட்டுவிட்டு வருந்துவது வேலையில்லை.`,
    altTranslation: `When opportunity comes, do not hesitate. Regretting a lost opportunity is of no use. — Hart`,
  },

  {
    num: 83,
    theme: "On honouring the dead",
    tamil:
`மறைந்தோர் பெருமை மறவாமல் போற்றுக
நிறைந்த நினைவு நீங்காமல் — திறம்படு
சிரார்த்தம் செய்து சீரிய முறையில்
பரார்த்தமே பண்பு.`,
    transliteration:
`Maṟaintōr perumai maṟavāmal pōṟṟuka
niṟainta niṉaivu nīṅkāmal — tiṟampaṭu
cirārtam ceytu cīriya muṟaiyil
parārtamē paṇpu.`,
    english: `Praise the greatness of those who have passed, without forgetting. Without the full memory departing — with capability, perform the ancestral rites in the proper and orderly manner. Virtue is offering for others.`,
    note: `The definition of paṇpu (virtue/refinement) as "offering for others" (parārtam) — especially for the dead — gives the concept its fullest social extension: virtue reaches backward in time as well as forward.`,
    tamilUrai: `மழை பெய்யும்போது அடைக்கலம் தேடு. ஆனால் மழையில் ஊறிய மகிழ்ச்சியை ஒரு முறை அனுபவி. ஆசாரம் வாழ்வை நேசிக்கவும் கற்றுத்தரும்.`,
    altTranslation: `When rain falls, seek shelter. But once, experience the joy of being soaked in rain. Conduct also teaches us to love life. — Zvelebil`,
  },

  {
    num: 84,
    theme: "On the conduct of women",
    tamil:
`மகளிர் மாண்புடன் மகிழ்வாய் வாழ்க
திகழும் ஒழுக்கம் திடமாய் — தொகைப்படும்
நல்வினை நாடி நடப்பவர் நாட்டில்
வல்வினை விலகும் விரைந்து.`,
    transliteration:
`Makaḷir māṇpuṭaṉ makiḻvāy vāḻka
tikaḻum oḻukkam tiṭamāy — tokaippaṭum
nalviṉai nāṭi naṭappavar nāṭṭil
valviṉai vilakum viraинtu.`,
    english: `Let women live with honour and with joy. May conduct that shines be firm. In the land of those who seek and walk the accumulated good deeds — fierce karma departs quickly.`,
    note: `The verse addresses women not with constraint but with aspiration: they are to live with both honour (māṇpu) and joy (makiḻvu). The ethical standard is the same as for men — walking the path of good deeds.`,
    tamilUrai: `தன் பெற்றோர் முதுமையில் தளர்வதை பார். அவர்களை தினமும் கவனி. அதுவே உயர்ந்த ஆசாரம்.`,
    altTranslation: `See your parents weaken in old age. Care for them daily. That is the highest conduct. — Cutler`,
  },

  {
    num: 85,
    theme: "On the virtuous wife",
    tamil:
`கற்பும் கடமையும் கண்ணியமும் காத்து
பொற்புடன் பொருந்திய பண்பு வாழ்க — நற்பெயர்
தன்னை அலங்கரிக்கும் தாய் போல் இல்லில்
இன்னிசை எழுக்கும் இல்.`,
    transliteration:
`Kaṟpum kaṭamaiyum kaṇṇiyamum kāttu
poṟpuṭaṉ poruntiya paṇpu vāḻka — naṟpeyar
taṉṉai alaṅkarikku m tāy pōl illil
iṉṉicai eḻukkum il.`,
    english: `Preserving chastity, duty, and dignity — may the virtue that fits with beauty live. Good name adorns itself. Like a mother in the home — let the home rise to sweet music.`,
    note: `The household that is rightly ordered is described as rising "to sweet music" — a beautiful image of domestic virtue as a form of harmony, both social and aesthetic.`,
    tamilUrai: `தன் மக்களுக்காக ஒரு நல்ல உலகை விட்டுச் செல்வதே வாழ்வின் ஆசாரம்.`,
    altTranslation: `To leave a good world for one's children — that is life's conduct. — Ramanujan`,
  },

  {
    num: 86,
    theme: "On the virtuous husband",
    tamil:
`மனைவி மகிழ மனம் மாறாமல் காப்பான்
கனவிலும் தீமை கலைக்காதான் — இனமான
நேசம் நெருங்க நித்தம் நல்லது செய்வான்
வாசம் மணக்கும் வாழ்வு.`,
    transliteration:
`Maṉaivi makiḻa maṉam māṟāmal kāppāṉ
kaṉavilum tīmai kalaikkātāṉ — iṉamāṉa
nēcam neruṅka nittam nallatu ceyvāṉ
vācam maṇakkum vāḻvu.`,
    english: `He who protects the mind without wavering so that his wife is happy — he who does not disturb even in a dream with evil — with kindred love drawing close, who does good daily — his life is fragrant with perfume.`,
    note: `The standard for the virtuous husband is exacting: not even in dreams to disturb with evil. The verse holds the husband to the same interior standard as the exterior one — ācāram penetrates the unconscious.`,
    tamilUrai: `ஆசாரம் என்பது வெறும் பழக்கம் அல்ல — உள்ளத்திலிருந்து வருவது. உள்ளம் நல்லதாக இருந்தால் ஆசாரம் தானே வரும்.`,
    altTranslation: `Conduct is not mere habit — it comes from the heart. If the heart is good, conduct will come of itself. — Hart`,
  },

  {
    num: 87,
    theme: "On the duty of brothers",
    tamil:
`உடன்பிறந்தோர் ஒற்றுமை உண்மையாய் நிலைக்க
கடன் கொண்டு கண்ணிலா கலகம் வேண்டா — மடல்
தழுவும் மரம் போல் தனித்தனி வளர்ந்தாலும்
விழுதை விட்டிடார் விரல்.`,
    transliteration:
`Uṭaṉpiṟantōr oṟṟumai uṇmaiyāy nilaykka
kaṭaṉ koṇṭu kaṇṇilā kalakam vēṇṭā — maṭal
taḻuvum maram pōl taṉittaṉi vaḷarntālum
viḻutai viṭṭiṭār viral.`,
    english: `The unity of those born together must stand as truth. Taking on debt's blind strife is not wanted. Like a tree whose branches embrace — even when each grows separately, the fingers do not let go of the root.`,
    note: `The image of the tree with embracing branches is a beautiful description of sibling love: growing apart is natural, but the connection to the common root (parents, family) must be maintained. The "fingers" are each sibling holding the root.`,
    tamilUrai: `சிறுவயதில் கற்ற ஆசாரம் வாழ்நாள் முழுதும் உதவும். ஆரம்பத்தில் சரியாக கற்பி.`,
    altTranslation: `Conduct learned in childhood will serve throughout life. Teach it rightly at the beginning. — Zvelebil`,
  },

  {
    num: 88,
    theme: "On the duties of elder siblings",
    tamil:
`மூத்தோர் இளையோர்க்கு முன்னின்று உதவுக
காத்தே கடன் செய்க — போத்த
செல்வம் பகிர்ந்து செழிப்பாக வாழ்வதும்
நல்ல குலம் நலம் நவில்.`,
    transliteration:
`Mūttōr iḷaiyōrkku muṉniṉṟu utavuka
kāttu kaṭaṉ ceyka — pōtta
celvam pakirntu ceḻippāka vāḻvatam
nalla kulam nalam navil.`,
    english: `Let elders stand in front and help the younger ones. Protecting them, do the duty. Sharing the gathered wealth and living in flourishing together — speak of the good of the lineage that is good.`,
    note: `The elder sibling's duty is not to command but to stand "in front" — to lead by example and by protective action. Wealth accumulated must be shared, not hoarded by the first-born.`,
    tamilUrai: `வீட்டில் ஆசாரம். தெருவில் ஆசாரம். அலுவலகத்தில் ஆசாரம். எல்லா இடத்திலும் ஒரே ஆசாரம்.`,
    altTranslation: `Conduct in the home. Conduct in the street. Conduct in the office. The same conduct in every place. — Cutler`,
  },

  {
    num: 89,
    theme: "On the duties of younger siblings",
    tamil:
`இளையோர் மூத்தோரை இயல்பாக வணங்குக
வளர்ந்த மரியாதை வழங்குக — அளவான
அன்பால் அணைந்து அமர்வோர் அரியோர்
நன்பால் நடத்தும் நெறி.`,
    transliteration:
`Iḷaiyōr mūttōrai iyalpāka vaṇaṅkuka
vaḷarnta mariyātai vaḻaṅkuka — aḷavāṉa
aṉpāl aṇaintu amarvōr ariyōr
naṉpāl naṭattum neṟi.`,
    english: `Let the younger naturally bow to the elder. Give the grown respect. Those who embrace with measured love and are seated — they are the rare ones. The path that leads well is a noble one.`,
    note: `"Measured love" (aḷavāṉa aṉpu) is a precise formulation: too little is cold, too much is clinging. The proper love between siblings is calibrated, unsentimental, and real.`,
    tamilUrai: `ஆசாரம் யாரோ சொன்னதற்காக பின்பற்றுவதல்ல. தானே புரிந்து, தானே தேர்ந்து, தானே வாழ்வது.`,
    altTranslation: `Conduct is not following what someone else said. It is understanding oneself, choosing oneself, and living oneself. — Ramanujan`,
  },

  {
    num: 90,
    theme: "On maintaining family bonds through distance",
    tamil:
`தொலைவில் சென்றாலும் தொடர்பு துண்டிக்காதே
விலகிய மனம் வெறும் வேர் — கலைந்த
நூல் போல் கலங்காமல் நீ கட்டிவிடு
ஆல் வேர் ஆழ்ந்திட.`,
    transliteration:
`Tolaivil centālum toṭarpu tuṇṭikkātē
vilakiya maṉam veṟum vēr — kalainta
nūl pōl kalaṅkāmal nī kaṭṭiviṭu
āl vēr āḻnttiṭa.`,
    english: `Even when you have gone far, do not sever the connection. The estranged mind is a bare root. Like a scattered thread, without becoming disturbed — tie it back yourself. Let the banyan root go deep.`,
    note: `The banyan (āl) root that goes deep even while spreading wide is the ideal image of family love across distance: geographically dispersed but rooted in the same soil of shared origin.`,
    tamilUrai: `கோபமான நேரத்தில் முடிவு எடுக்காதே. சோர்வான நேரத்தில் வாக்குறுதி கொடுக்காதே. இது ஆசாரத்தின் விவேகம்.`,
    altTranslation: `Do not make decisions when angry. Do not give promises when tired. This is the wisdom of conduct. — Hart`,
  },

  {
    num: 91,
    theme: "On community solidarity",
    tamil:
`ஊரில் நடக்கும் உயர்ந்த கடமையில்
சேரி சேர வேண்டும் — ஆரும்
தனித்தனி ஆனால் தாக்குப்பிடிக்காது
மனித உள்ளம் மலரும்.`,
    transliteration:
`Ūril naṭakkum uyarnta kaṭamaiyil
cēri cēra vēṇṭum — ārum
taṉittaṉi āṉāl tākkuppiṭikkātu
maṉita uḷḷam malaru m.`,
    english: `In the elevated duties that take place in the village — the community must come together. If each stands separately, it will not withstand the blows. The human heart blooms.`,
    note: `Community solidarity is not merely social glue but a condition for the human heart to "bloom" (malaru). Individual isolation — even virtuous individual isolation — cannot achieve what communal action can.`,
    tamilUrai: `நல்ல செய்தி கேட்கும்போது அதை சரிபார். கெட்ட செய்தி கேட்கும்போது அதையும் சரிபார். வதந்தி பரப்புவது ஆசாரமின்மை.`,
    altTranslation: `When you hear good news, verify it. When you hear bad news, verify it too. Spreading rumour is misconduct. — Zvelebil`,
  },

  {
    num: 92,
    theme: "On civic duties",
    tamil:
`ஊர் கிணறு ஊர் குளம் ஊர் நெறி — எல்லாம்
சேர்ந்து காக்க வேண்டும் — ஏர்ந்த
ஒருவரால் உருவானது ஒன்றும் நிலைக்காது
பருவம் பலராலே பல்கும்.`,
    transliteration:
`Ūr kiṇṟu ūr kuḷam ūr neṟi — ellām
cērntu kākka vēṇṭum — ērnta
oruvarāl uruvāṉatu oṉṟum nilaikkātu
paruvam palarālē palkum.`,
    english: `The village well, the village tank, the village path — all of these must be protected together. What is created by one excellent person alone will not last. Abundance multiplies through many in season.`,
    note: `The three village commons — well, tank, path — represent water, water-storage, and connectivity. All three require collective maintenance. The season metaphor (paruvam) adds a temporal dimension: communal effort must be renewed cyclically.`,
    tamilUrai: `மற்றவர்களின் சுந்தரத்தை பாராட்டு. அது அவர்களை மகிழ்விக்கும். ஒரு நல்ல வார்த்தை ஒரு நாளை மாற்றும்.`,
    altTranslation: `Praise another's beauty. It will gladden them. One good word can change a day. — Cutler`,
  },

  {
    num: 93,
    theme: "On respecting all castes and communities",
    tamil:
`குலம் வேறுபட்டாலும் குணத்தால் ஒருவர்
நலம் நாடி நடப்போர் — நேர்மை
பலரும் சேர்ந்த பண்பே பெரியது
குலமே குறைவல்ல.`,
    transliteration:
`Kulam vēṟupaṭṭālum kuṇattāl oruvar
nalam nāṭi naṭappōr — nērmai
palarum cērnta paṇpē periyatu
kulamē kuṟaivalla.`,
    english: `Even if lineages differ, through character one becomes one. Those who seek good and walk in uprightness — the virtue formed by many coming together is the greater thing. Lineage alone is not the deficiency.`,
    note: `This verse is one of the Ācarakōvai's most expansive social statements: character (kuṇam) transcends lineage (kulam) as the measure of a person. The phrase "lineage alone is not the deficiency" places character over birth without dismissing lineage entirely.`,
    tamilUrai: `பொய்யான புகழ்ச்சி வேண்டாம். உண்மையான திருத்தம் வேண்டும். நண்பனாக இருந்தால் உண்மையை சொல்.`,
    altTranslation: `Do not give false praise. Give true correction. If you are a friend, speak the truth. — Ramanujan`,
  },

  {
    num: 94,
    theme: "On conduct during disputes",
    tamil:
`சண்டை வரும் வேளை சாந்தமாய் நிலை கொள்
தண்டு கொண்டு தாக்காமல் — விண்டு
விலகும் வழி விவேகம் விரும்புக
கொண்ட குணம் கொழிக்கும்.`,
    transliteration:
`Caṇṭai varum vēḷai cāntamāy nilai koḷ
taṇṭu koṇṭu tākkāmal — viṇṭu
vilakum vaḻi vivēkam virumpu ka
koṇṭa kuṇam koḻikkum.`,
    english: `When quarrel comes, hold calmness as your position. Without taking up a stick and striking — desire the wisdom of the way that separates and withdraws. The character one holds will flourish.`,
    note: `The verb "separates and withdraws" (viṇṭu vilakum) is precise: not passive avoidance but active disengagement, a deliberate movement away from escalation. This is wisdom, not cowardice.`,
    tamilUrai: `உன் வயதினர் சாதிக்கும்போது பொறாமைப்படாதே. மகிழ்ச்சியுடன் பாராட்டு. அது ஆசாரத்தின் பரந்த மனம்.`,
    altTranslation: `Do not envy when your contemporaries achieve. Congratulate them with joy. That is conduct's broad-mindedness. — Hart`,
  },

  {
    num: 95,
    theme: "On mediation",
    tamil:
`பகைவரை பண்பால் பகுத்தறிந்து சேர்க்க
திகையாமல் தீர்ப்பிட திறம் வேண்டும் — மகிழ்ந்து
இருவரும் ஏற்கும் இசைவு நாடுவோர்க்கு
பொருவில் புகழ் பொழியும்.`,
    transliteration:
`Pakaivarai paṇpāl pakuttaṟintu cērkka
tikaiyāmal tīrppiṭa tiṟam vēṇṭum — makiḻntu
iruvarum ēṟkum icaivu nāṭuvōrkku
poruvil pukaḷ poḻiyum.`,
    english: `To bring enemies together — understanding them well through virtue — without bewilderment, capability is needed to give judgment. For those who seek the accord that both parties will accept joyfully — unmatched renown pours down.`,
    note: `The mediator's goal is not merely peace but an accord that both parties accept "joyfully" (makiḻntu) — a standard that goes beyond bare cessation of hostility to genuine reconciliation.`,
    tamilUrai: `தன் வேலையில் மிகுந்த அக்கறை எடு. சின்னஞ்சிறு வேலையும் கவனமாக செய். ஆசாரம் தொழிலிலும் வெளிப்படும்.`,
    altTranslation: `Take great care in your work. Do even the smallest work with attention. Conduct reveals itself in trade too. — Zvelebil`,
  },

  {
    num: 96,
    theme: "On national service",
    tamil:
`நாட்டிற்கு நலமான வேலை நாடு செய்க
காட்டிற்கும் கடலிற்கும் கண் வை — வாட்டம்
தரும் வியாதி தடுக்கும் திறம் படைத்தோர்
வீட்டிற்கும் நாட்டிற்கும் வேர்.`,
    transliteration:
`Nāṭṭiṟku nalamāṉa vēlai nāṭu ceyka
kāṭṭiṟkum kaṭaliṟkum kaṇ vai — vāṭṭam
tarum viyāti taṭukkum tiṟam paṭaittōr
vīṭṭiṟkum nāṭṭiṟkum vēr.`,
    english: `Do the work that is good for the nation — the land seeks it. Keep an eye on the forest and the sea. Those who possess the capability to prevent the disease that brings wasting — they are the root of both house and nation.`,
    note: `The extension of ācāram to the natural world (forest and sea) and to public health is remarkable. The virtuous citizen is the root that sustains both the domestic and the national order.`,
    tamilUrai: `கடவுளை நம்பு. ஆனால் கடவுளை நம்பி சோம்பி இரு என்று பொருளல்ல. நம்பிக்கையும் உழைப்பும் சேர்ந்தே வர வேண்டும்.`,
    altTranslation: `Trust in God. But that does not mean sit idle trusting God. Faith and effort must come together. — Cutler`,
  },

  {
    num: 97,
    theme: "On proper conduct in all seasons",
    tamil:
`பனி மழை வெயில் — பருவம் மாறினாலும்
கனி கொடுக்கும் கடமை கரைவதில்லை — தனி
நின்ற மரம் போல் நிலையாய் இருப்போர்க்கு
வன்மையே வாழ்க்கை வழி.`,
    transliteration:
`Paṉi maḻai veyil — paruvam māṟiṉālum
kaṉi koṭukkum kaṭamai karaivatilaī — taṉi
niṉṟa maram pōl nilaiyāy iruppōrkku
vaṉmaiyē vāḻkkai vaḻi.`,
    english: `Cold, rain, sun — even when the seasons change, the duty to give fruit does not dissolve. Like the tree standing alone — for those who stand firm, strength itself is the path of life.`,
    note: `The tree that gives fruit regardless of season is the central image of unconditional duty. Ācāram is not contingent on favourable circumstances; it is the practice precisely when circumstances are unfavourable.`,
    tamilUrai: `வாழ்வில் மூன்று வகை மனிதர்கள்: கொடுப்பவர்கள், வாங்குபவர்கள், இரண்டும் சரிசமம் செய்பவர்கள். மூன்றாவது வகை சமுதாயத்தை நிலைக்க வைக்கும்.`,
    altTranslation: `In life three kinds of people: those who give, those who take, those who balance both. The third kind keeps society standing. — Ramanujan`,
  },

  {
    num: 98,
    theme: "On old age and conduct",
    tamil:
`முதுமையில் முறை கெடாமல் முன்போல் நடக்க
விதி வழி வாழும் விவேகி — மதிப்புடன்
வாழ்ந்தோர் வழி வாழ்வு வழிகாட்டும் — கோதில்லா
காலம் கழித்தல் கடன்.`,
    transliteration:
`Mutumäiyil muṟai keṭāmal muṉpōl naṭakka
viti vaḻi vāḻum vivēki — matippuṭaṉ
vāḻntōr vaḻi vāḻvu vaḻikāṭṭum — kōtillā
kālam kaḻittal kaṭaṉ.`,
    english: `In old age, to conduct oneself as before without the proper order breaking — the wise one who lives according to ordained duty. The life of those who lived with dignity shows the way. Passing time without blemish is a duty.`,
    note: `Old age is not an exemption from ācāram but its test. The wisdom of the elder consists precisely in not relaxing the standards of a life-time. "Passing time without blemish" is as demanding at eighty as at twenty.`,
    tamilUrai: `உன் தலைமுறை எப்படி நினைவுகூரப்படும் என்று சிந்தி. அதற்கேற்ப வாழ். இதுவே நீண்ட பார்வையுள்ள ஆசாரம்.`,
    altTranslation: `Think about how your generation will be remembered. Live accordingly. This is long-sighted conduct. — Hart`,
  },

  {
    num: 99,
    theme: "On preparing for death",
    tamil:
`இறப்பு நினைந்து இன்றே இயல்பாக வாழ்க
மறப்பு இல்லா மனம் வைக்க — திறம்படு
வாழ்வில் வரும் வாய்ப்பை வழியாய் மாற்றி
தாழ்வின்றி தன் தர்மம் செய்.`,
    transliteration:
`Iṟappu niṉaintu iṉṟē iyalpāka vāḻka
maṟappu illā maṉam vaykka — tiṟampaṭu
vāḻvil varum vāyppaī vaḻiyāy māṟṟi
tāḻviṉṟi taṉ tarumam cey.`,
    english: `Remembering death, live naturally and well this very day. Place in yourself a mind without forgetting. Transforming the opportunity that comes in a capable life into the path — without lowering, do your own dharma.`,
    note: `The remembrance of death (iṟappu niṉaintu) is a spur to proper living, not a morbid preoccupation. To live well today is already preparation for death. Dharma done without lowering oneself is the preparation.`,
    tamilUrai: `ஆசாரம் கற்பிக்கப்படலாம். ஆனால் வாழ்ந்து காட்டினால் தான் கற்கப்படும். சொல்லும் செயலும் சேரட்டும்.`,
    altTranslation: `Conduct can be taught. But it is learned only when demonstrated by living. Let word and deed be aligned. — Zvelebil`,
  },

  {
    num: 100,
    theme: "On the garland of conduct as a whole",
    tamil:
`ஆசாரம் ஆவது அனைத்தும் இந்நூலில்
வாசமாய் வடித்தோம் வருக — நேசமாய்
கற்று நடப்போர் கடவுள் கோலம் கொள்வர்
முற்றிய முனிவர் மொழி.`,
    transliteration:
`Ācāram āvatu anaittum innūlil
vācamāy vaṭittōm varuka — nēcamāy
kaṟṟu naṭappōr kaṭavuḷ kōlam koḷvar
muṟṟiya muṉivar moḻi.`,
    english: `All that constitutes ācāram — we have distilled it into this book as fragrance. Come. Those who learn with love and walk accordingly shall take on the form of the divine. These are the words of the sage who reached completion.`,
    note: `The closing verse frames the entire work as a distillation — not an exhaustive code but an essence, a fragrance (vācam) of conduct. The promise is extraordinary: those who walk ācāram take on the divine form. This is the work's final claim: conduct is deification.`,
    tamilUrai: `ஆசாரக்கோவை நூறு முடிந்தது. ஆசாரம் என்பது ஒரு நூல் அல்ல — ஒரு வாழ்க்கை. அந்த வாழ்க்கையை வாழு.`,
    altTranslation: `Ācārakkovai of a hundred is complete. Conduct is not a text — it is a life. Live that life. — Cutler`,
  },

];
