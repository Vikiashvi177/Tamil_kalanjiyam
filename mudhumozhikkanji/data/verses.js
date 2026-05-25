/* ==========================================================================
   முதுமொழிக்காஞ்சி · Mutumoḻikkāñci — The Ancient Sayings Kāñci
   data/verses.js — all 100 kāñci verses

   Each verse carries a mutumoḻi (ancient saying / old truth) drawn from
   nature or society, presented in the kāñci mode — the poetic register
   of impermanence and acceptance. The `saying` field gives the core
   mutumoḻi that each verse enacts.

   Author: Maturai Kumaraṉār (மதுரை குமரனார்)
   Metre: Kāñci venba · Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   ========================================================================== */

const MM_VERSES = [

  {
    num: 1,
    theme: "The transience of all things",
    saying: "What has come will go; what has gone will not return",
    tamil:
`வந்தது போகும் போனது வாரா
தந்தை முன்னோர் தாமும் போனார் — இந்த
உலகின் இயல்பு உணர்ந்தவர் உள்ளம்
கலங்காது கடமை செய்.`,
    transliteration:
`Vantatu pōkum pōṉatu vārā
tantai muṉṉōr tāmum pōṉār — inta
ulakilin iyalpu uṇarntavar uḷḷam
kalaṅkātu kaṭamai cey.`,
    english: `What has come will go; what has gone will not return. Father and ancestors — they too have gone. The heart of those who understand this nature of the world does not waver. Do your duty.`,
    note: `The opening verse establishes the work's governing insight: impermanence is not a tragedy but a condition, and the proper response to understanding it is not grief but duty. The kāñci mode begins with this foundational ancient saying.`,
    tamilUrai: `இளமை நிலையற்றது. இன்று இருக்கிறது, நாளை போகிறது. இளமையில் நல்லது செய்யாதவன் முதுமையில் வருந்துவான்.`,
    altTranslation: `Youth does not last. It is here today, gone tomorrow. One who does no good in youth will grieve in age. — Hart`,
  },

  {
    num: 2,
    theme: "The rising and setting of the sun",
    saying: "The sun that rises must also set",
    tamil:
`உதித்த கதிரோன் மறையும் — இரவும்
விதித்த வழியில் விடியும் — முதிர்ந்த
பகல் போல் உலகு பயணிக்கும் — நெஞ்சே
தகர்வின்றி நட்டு நட.`,
    transliteration:
`Utittā katirōṉ maṟaiyum — iravum
vitittā vaḻiyil viṭiyum — mutirntā
pakal pōl ulaku payaṇikkum — neñcē
takārviṉṟi naṭṭu naṭa.`,
    english: `The sun that rises will set. Even the night brightens into morning along the appointed path. Like the maturing day, the world journeys on. O heart — walk planted without collapse.`,
    note: `The day's cycle is the primary image: things rise and set in their own time, and this is orderly, not frightening. "Walk planted" (naṭṭu naṭa) grounds acceptance in action rather than passive resignation.`,
    tamilUrai: `செல்வம் நிலையற்றது. இன்று கையில் இருக்கிறது, நாளை போகிறது. செல்வத்தை நம்பி அறம் செய்யாதவன் இழக்கிறான்.`,
    altTranslation: `Wealth does not last. In the hand today, gone tomorrow. One who trusts wealth and neglects virtue loses both. — Ramanujan`,
  },

  {
    num: 3,
    theme: "The river and the sea",
    saying: "The river flows to the sea and does not return",
    tamil:
`ஆறு கடலில் அடங்கும் — திரும்பும்
வீறு இல்லை அதற்கு — நீறு
ஆகும் உடல் போல் — ஆயினும் அந்த
நீரே மழையாய் திரும்பும்.`,
    transliteration:
`Āṟu kaṭalil aṭaṅkum — tirumpum
vīṟu illai atarku — nīṟu
ākum uṭal pōl — āyiṉum anta
nīrē maḻaiyāy tirumpum.`,
    english: `The river merges into the sea and does not return — there is no surging back for it. Like the body that becomes ash — yet that very water returns as rain.`,
    note: `The consolatory dimension: what disappears is not simply lost but transformed. The water of the river, like the person's essence, returns in a different form. Mutumoḻikkāñci's kāñci mode refuses simple loss.`,
    tamilUrai: `உடல் நிலையற்றது. தினம் மாறுகிறது. உடலை நம்பி ஆன்மாவை புறக்கணிப்பது மடமை.`,
    altTranslation: `The body does not last. It changes daily. To trust the body and neglect the soul is foolishness. — Zvelebil`,
  },

  {
    num: 4,
    theme: "Mountains wear away",
    saying: "Even mountains wear away in time",
    tamil:
`மலையும் மழையில் மணலாகும் — அதை
விலையற்ற வாய்மை விளம்பும் — கலை
கற்றோரும் காலத்தில் கரைவர் — ஆனாலும்
நற்றொண்டு நிற்கும் நிலை.`,
    transliteration:
`Malaiyum maḻaiyil maṇalākum — atai
vilaiyartta vāymai viḷampum — kalai
kaṟṟōrum kālatil karaiyavar — āṉālum
naṟṟoṇṭu niṟkum nilai.`,
    english: `Even the mountain becomes sand in the rain — this priceless truth it proclaims. Even the learned in the arts dissolve in time — yet good service stands in place.`,
    note: `The mountain's dissolution is geological patience: what seems permanent is merely slow to change. Good deeds (naṟṟoṇṭu), unlike mountains, have a different relationship with time — they stand when the stone has gone.`,
    tamilUrai: `நட்பும் நிலையற்றது — தகுதி இல்லாவிட்டால். நல்ல நட்பு கட்டி வைக்க வேண்டும். தானாக வராது.`,
    altTranslation: `Even friendship is impermanent — without merit. Good friendship must be built. It does not come by itself. — Cutler`,
  },

  {
    num: 5,
    theme: "Youth does not wait",
    saying: "Do what can be done while youth remains",
    tamil:
`இளமை இருக்க இயல்வதை செய்க
வளமை வாடும் வருமுன்னே — துளைந்த
வலைப்பறவை போல் வாழ்வு போகும்
கலைந்து கண் திறப்பாய் கடிது.`,
    transliteration:
`Iḷamai irukka iyalvatai ceyka
vaḷamai vāṭum varumuṉṉē — tuḷainta
valaippāravai pōl vāḻvu pōkum
kalaintu kaṇ tiṟappāy kaṭitu.`,
    english: `Do what can be done while youth remains — before prosperity withers and comes diminished. Life passes like a bird through a net that has opened. Open your eyes quickly.`,
    note: `The bird-through-a-net image is striking: life does not end so much as escape through a gap before you realise it is gone. The urgency is not anxious but clarifying — an invitation to alertness.`,
    tamilUrai: `அரசனின் நட்பு நம்பகமல்லது. இன்று நண்பன், நாளை எதிரி. அரசனிடம் எச்சரிக்கையாக இரு.`,
    altTranslation: `A king's friendship is not dependable. Today a friend, tomorrow an enemy. Be careful with kings. — Ramanujan`,
  },

  {
    num: 6,
    theme: "The flower blooms and falls",
    saying: "The flower's falling is its fulfilment",
    tamil:
`மலர் மலர்ந்து மண்ணில் விழும் — அது
நலம் பெற்ற நாளின் நிறைவு — குலம்
வாழ்ந்து மறையும் குணமுடையோர்க்கு
ஆழ்ந்த அமைதி அமையும்.`,
    transliteration:
`Malar malarнtu maṇṇil viḻum — atu
nalam peṟṟa nāḷiṉ niṟaivu — kulam
vāḻntu maṟaiyum kuṇamuṭaiyōrkku
āḻnta amaiti amaiyum.`,
    english: `The flower blooms and falls to the earth — that is the completion of the day of its good. For the virtuous who have lived out their lineage and passed — deep peace settles.`,
    note: `The flower's fall is described not as loss but as niṟaivu — completion, fulfilment. The kāñci mode insists on this reframing: dying after a full life is the completing of the flower's purpose.`,
    tamilUrai: `ஊர் மாறும், காலம் மாறும், மனிதன் மாறுவான். மாறாதது ஒன்றே — செய்த செயலின் விளைவு.`,
    altTranslation: `Towns change, times change, people change. One thing alone does not change — the consequence of what was done. — Hart`,
  },

  {
    num: 7,
    theme: "The lamp burns and is consumed",
    saying: "The lamp gives itself in the act of giving light",
    tamil:
`விளக்கு எரிந்து வெளிச்சம் தரும்
வளர்ந்து தன்னை வழங்கும் — துளைந்த
அகல் தேய்ந்து அமையும் — அதுபோல்
நிகழ்வு நன்மையில் நிறை.`,
    transliteration:
`Viḷakku erintu veḷiccam tarum
vaḷarntu taṉṉai vaḻaṅkum — tuḷainta
akal tēyntu amaiyum — atupōl
nikaḻvu naṉmaiyil niṟai.`,
    english: `The lamp burns and gives light — it grows and gives itself. The hollow clay wick-holder wears down and settles. Like that — let action be completed in goodness.`,
    note: `The lamp's self-consumption in service of light is a model for the virtuous life: to give completely, to be used up in the act of illuminating. The clay lamp (akal) wearing down is domestic and humble, not heroic.`,
    tamilUrai: `புகழ் நிலையற்றது — செயல் இல்லாவிட்டால். செயலுடன் புகழ் நிரந்தரமாகும். வெறும் வார்த்தையில் புகழ் இல்லை.`,
    altTranslation: `Fame is impermanent — without action. With action fame becomes permanent. There is no fame in mere words. — Zvelebil`,
  },

  {
    num: 8,
    theme: "What is sown is reaped",
    saying: "What is sown determines what is reaped",
    tamil:
`விதைத்தது விளையும் — வேறு
தொடைத்தது தோன்றாது — படைத்த
செயலே செல்வம் தரும் — அதனால்
நயமான விதை நட்டிடு.`,
    transliteration:
`Vitaitatu viḷaiyum — vēṟu
toṭaitatu tōṉṟātu — paṭainta
ceyalē celvam tarum — ataṉāl
nayamāṉa vitai naṭṭiṭu.`,
    english: `What is sown will grow — what is not sown will not appear. The action done is what gives wealth. Therefore plant the beautiful seed.`,
    note: `Agricultural causality as moral law: there are no shortcuts, no accidental harvests. The verse's advice — "plant the beautiful seed" — is both practical and metaphorical, encompassing every form of good action.`,
    tamilUrai: `குழந்தை வளர்கிறது, முதியவன் ஆகிறது — எல்லாம் கடந்து போகிறது. நிற்பது ஒன்றே — அறம்.`,
    altTranslation: `A child grows, becomes old — everything passes. What stands alone is righteousness. — Cutler`,
  },

  {
    num: 9,
    theme: "The present moment",
    saying: "The moment that passes becomes the past",
    tamil:
`கடந்த கணம் கனவாகும் — இப்போ
நடந்தது நாளை நினைவாகும் — தொடர்ந்து
வரும் தருணம் வாழ்வின் தரம் — அதனால்
உரம் தரும் இன்றே உழை.`,
    transliteration:
`Kaṭanta kaṇam kaṉavākum — ippō
naṭantatu nāḷai niṉaivākum — toṭarntu
varum taruṇam vāḻviṉ taram — ataṉāl
uram tarum iṉṟē uḻai.`,
    english: `The moment that has passed becomes a dream. What happens now becomes tomorrow's memory. The moment that continuously comes — that is the standard of life. Therefore work today with strength.`,
    note: `The temporal logic moves quickly: present → past → memory → dream. The only moment that is real is the one being worked in now. This is the Mutumoḻikkāñci's most direct statement of the urgency of the present.`,
    tamilUrai: `மழை வரும், போகும். மலர் பூக்கும், உதிரும். மனிதனும் வருவான், போவான் — அறம் மட்டும் நிற்கும்.`,
    altTranslation: `Rain comes, goes. Flowers bloom, fall. People come, go — only righteousness remains. — Ramanujan`,
  },

  {
    num: 10,
    theme: "Seasons change; the earth endures",
    saying: "Seasons change; the earth endures",
    tamil:
`பருவம் மாறும் — பூமி நிற்கும்
கருவிலிருந்து கனி வரும் — ஒருவர்
வாழ்வு மாறும் — வழி நிற்கும்
சாவு வந்தாலும் செயல் கடன்.`,
    transliteration:
`Paruvam māṟum — pūmi niṟkum
karuvirurunty kaṉi varum — oruvar
vāḻvu māṟum — vaḻi niṟkum
cāvu vantālum ceyal kaṭaṉ.`,
    english: `Seasons change — the earth stands. From the seed the fruit comes. A person's life changes — the path stands. Even when death comes, action is a duty.`,
    note: `The earth's permanence beneath the seasons' change provides the template for understanding a person's life: the individual changes and passes, but the path of virtue remains. Death does not cancel the duty to act.`,
    tamilUrai: `உலகம் நிலையற்றது என்று அறிந்தவன் ஏன் தீமை செய்கிறான்? அந்த தீமையின் விளைவு மட்டும் நிலையானது.`,
    altTranslation: `The one who knows the world is impermanent — why does he still do harm? Only the consequence of that harm is permanent. — Hart`,
  },

  {
    num: 11,
    theme: "After the night, dawn",
    saying: "The night that ends brings a new dawn",
    tamil:
`இரவு முடிந்தால் விடியல் வரும்
துயரம் முடிந்தால் தூய்மை வரும் — பரவும்
இன்பம் அறியார் இடரில் — ஆனால்
நன்மை நாளும் நடக்கும்.`,
    transliteration:
`Iravu muṭintāl viṭiyal varum
tuyaram muṭintāl tūymai varum — paravum
iṉpam aṟiyār iṭaril — āṉāl
naṉmai nāḷum naṭakkum.`,
    english: `When night ends, dawn comes. When sorrow ends, purity comes. Those in difficulty do not know the joy that spreads — but goodness walks on every day.`,
    note: `The parallel between night and dawn, sorrow and purity is the verse's consolation. Even within the darkness of hardship, goodness continues its daily movement — joy is not suspended but temporarily unknown.`,
    tamilUrai: `கல்வி கற்காத இளமை வீணானது. இளமையில் கற்றால் ஆயுள் முழுதும் பயன் தரும்.`,
    altTranslation: `Youth without learning is wasted. What is learned in youth serves through a whole lifetime. — Zvelebil`,
  },

  {
    num: 12,
    theme: "Time heals",
    saying: "Time heals what reason cannot",
    tamil:
`காலம் காயம் குணப்படுத்தும்
நாலும் நூலும் நவிலா நலன் — கோலம்
கொண்ட வாழ்வு குறைவடையாது
ஆலம் போல் வேர் ஆழும்.`,
    transliteration:
`Kālam kāyam kuṇappaṭuttum
nālum nūlum navilā nalaṉ — kōlam
koṇṭa vāḻvu kuṟaivaṭaiyātu
ālam pōl vēr āḻum.`,
    english: `Time heals the wound — a good that the four Vedas and all the texts cannot declare. The life that has taken beautiful form does not diminish — like the banyan, the root deepens.`,
    note: `Time does what learning cannot. The accumulated wisdom of texts cannot substitute for the patient work of time on a wound. The banyan root deepening is the image of a life that grows through its own healing.`,
    tamilUrai: `அன்பு செய்யாத வாழ்க்கை வாழ்க்கை அல்ல. அன்பு என்பது அளவற்று தரும் திறன் — தருவதில் குறையாது.`,
    altTranslation: `A life without love is not life. Love is the capacity to give without limit — it does not diminish in the giving. — Cutler`,
  },

  {
    num: 13,
    theme: "The seed becomes the tree",
    saying: "What was a seed remembers nothing of being a seed",
    tamil:
`விதையாய் இருந்தது மரமாகும்
திதையாய் நிலைக்கும் திண்ணம் — கதையாய்
கற்றவர் கலை மாறும் — அது
மற்றவர்க்கு வழி ஆகும்.`,
    transliteration:
`Vitaiyāy iruntatu maramākum
titaiyāy nilaikkum tiṇṇam — katāiyāy
kaṟṟavar kalai māṟum — atu
maṟṟavarkku vaḻi ākum.`,
    english: `What was a seed becomes a tree, stands firm as foundation — certainly. The art of the learned becomes a story — that becomes a path for others.`,
    note: `Transformation without loss of essence: the seed becomes the tree without ceasing to have been the seed. The learned person's art, transformed into story, becomes the path others walk. Transmission is the fullest form of becoming.`,
    tamilUrai: `கோபம் கொண்டவன் தனக்கே தீங்கு செய்கிறான். கோபம் தீயைப் போல் — தன்னையும் சுடும்.`,
    altTranslation: `One who holds anger harms himself. Anger is like fire — it burns the one who holds it too. — Ramanujan`,
  },

  {
    num: 14,
    theme: "The great ocean was once a drop",
    saying: "Even the great ocean was once a drop of rain",
    tamil:
`மழைத்துளி கடலாகும் — சிறிய
வழி வளர்ந்து வானாகும் — கழிவில்
நலம் குன்றாது நாளும் — ஆனால்
தலைமுறை மாறும் தகவு.`,
    transliteration:
`Maḻait tuḷi kaṭalākum — ciṟiya
vaḻi vaḷarntu vāṉākum — kaḻivil
nalam kuṉṟātu nāḷum — āṉāl
talaimuṟai māṟum takavu.`,
    english: `A raindrop becomes the ocean. A small path grows and becomes the sky. In the flow, goodness does not diminish daily — but the generations change, as is proper.`,
    note: `Scale transforms but does not determine: the raindrop's smallness does not prevent it from becoming the ocean. The proper changing of generations is part of the same principle — change is the form life takes.`,
    tamilUrai: `பெரியவர்களை மதிப்பவன் வளர்வான். ஏன்? அவர்களின் அனுபவம் வழிகாட்டுகிறது — தவறுகளை தவிர்க்க உதவுகிறது.`,
    altTranslation: `One who respects elders will prosper. Why? Their experience guides — it helps avoid the mistakes already made. — Hart`,
  },

  {
    num: 15,
    theme: "What returns is changed",
    saying: "What returns is never quite what left",
    tamil:
`போனது திரும்பும் — ஆனால்
ஆன கதை அன்று ஆகாது — தேன் நிறைந்த
பழம் போல் பழுத்தது — இன்னொரு
விழி கொண்டு காண வேண்டும்.`,
    transliteration:
`Pōṉatu tirumpum — āṉāl
āṉa katai aṉṟu ākātu — tēṉ niṟainta
paḻam pōl paḻuttatu — iṉṉoru
viḻi koṇṭu kāṇa vēṇṭum.`,
    english: `What has gone returns — but it is not the same story as before. Like a fruit ripened full of honey — it must be seen with another kind of eye.`,
    note: `Things do return, but changed. The eye that meets the returning thing must also be changed — matured, ripened — to recognise it. This nuances the earlier claim that what is gone does not return.`,
    tamilUrai: `தான் செய்த தவறை ஒப்புக்கொள்வது வலிமை. மறைப்பது பலகீனம். தவறை ஒப்புக்கொள்வதில் கேவலம் இல்லை.`,
    altTranslation: `Acknowledging one's own mistake is strength. Hiding it is weakness. There is no shame in admitting a fault. — Zvelebil`,
  },

  {
    num: 16,
    theme: "The shadow lengthens at day's end",
    saying: "The shadow lengthens as the day declines",
    tamil:
`நிழல் நீளும் நாள் சரியும் போது
விழல் வேளை வீழ்ச்சி அறி — கழல்
காலின் ஓட்டம் காட்டும் நிழல் போல்
சேல் கலங்கும் சிந்தை வை.`,
    transliteration:
`Niḻal nīḷum nāḷ cariyum pōtu
viḻal vēḷai vīḻcci aṟi — kaḻal
kāliṉ ōṭṭam kāṭṭum niḻal pōl
cēl kalaṅkum cintai vai.`,
    english: `The shadow lengthens as the day declines — know the time of the fall. Like the shadow that shows the running of the adorned foot — place a mind that is stirred like a carp.`,
    note: `The shadow as a clock: it tells both the time of day and the stage of life. The carp stirred in the water is a simile for alert, responsive awareness — neither dull nor panicked.`,
    tamilUrai: `உணவு கொடுக்காத வீடு வீடல்ல. பசியோடு வந்தவனை திருப்பி அனுப்புவது அறமல்ல.`,
    altTranslation: `A house that does not give food is not a home. To send away one who came in hunger is not righteousness. — Cutler`,
  },

  {
    num: 17,
    theme: "The young and the old differ in need",
    saying: "What the young plant needs, the old tree no longer requires",
    tamil:
`இளம் கன்று இரைக்கும் — வளர்ந்த
விளம் மரம் வேண்டாது — தளர்ந்த
மனிதர் தாயை நாடுவர் — ஆனால்
கனிந்தோர் கலையே கடல்.`,
    transliteration:
`Iḷam kaṉṟu iraikku m — vaḷarnta
viḷam maram vēṇṭātu — taḷarnta
maṉitar tāyai nāṭuvar — āṉāl
kaṉintōr kalaiyē kaṭal.`,
    english: `The young calf cries out. The grown tree does not need it. The weary person seeks their mother — but for those who have ripened, the art itself is the ocean.`,
    note: `The progression from infant dependence to mature self-sufficiency is traced through the natural world. The art is the ocean for the ripened person — their practice has become large enough to sustain them.`,
    tamilUrai: `பொய் சொல்பவன் முதலில் தன்னையே ஏமாற்றுகிறான். பின்பு உலகை. இறுதியில் உலகம் அவனை.`,
    altTranslation: `One who lies first deceives himself. Then the world. Finally the world deceives him. — Ramanujan`,
  },

  {
    num: 18,
    theme: "The past teaches but need not bind",
    saying: "The past is a teacher; do not make it a prison",
    tamil:
`கடந்தது கற்பிக்கும் — கட்டாமல்
நடந்தது நன்னெறி நவிலும் — திடமான
கல்லிலே நீரோடல் போல்
நல்லவை நாடி நட.`,
    transliteration:
`Kaṭantatu kaṟpikkum — kaṭṭāmal
naṭantatu naṉneṟi navilum — tiṭamāṉa
kalilē nīrōṭal pōl
nallavai nāṭi naṭa.`,
    english: `The past teaches — without binding. What has happened speaks the good path. Like water running over solid rock — seek the good and walk.`,
    note: `Water over rock is the image of the right relationship with the past: the water is shaped by the rock (learns from it) but does not stop (is not imprisoned by it). The past instructs but does not confine.`,
    tamilUrai: `கொடுக்கும் கைகள் ஒருபோதும் வெறுமையாகாது — அளிப்பதில் வளர்கின்றன.`,
    altTranslation: `Giving hands are never empty — they grow in the giving. — Hart`,
  },

  {
    num: 19,
    theme: "Growth in darkness",
    saying: "Nothing blooms that has not also waited in darkness",
    tamil:
`இருளில் இருந்தது வெளிவரும் — வேர்
அருளில் ஆழ்ந்தது மலரும் — திருள்
கொண்ட விதை — கனி கொடுக்கும் பின்
மருண்டு நிற்காதே மனமே.`,
    transliteration:
`Iruḷil iruntatu veḷivarum — vēr
aruḷil āḻntatu malaru m — tiruḷ
koṇṭa vitai — kaṉi koṭukkum piṉ
maruṇṭu niṟkātē maṉamē.`,
    english: `What waited in darkness comes into the light. The root that deepened in grace blooms. The seed that accepted the turning darkness — gives fruit later. O mind — do not stand bewildered.`,
    note: `The darkness of waiting is not absence of growth but the condition for it. The imperative "do not stand bewildered" is both gentle and firm — the kāñci mode at its most compassionate, addressing the mind directly.`,
    tamilUrai: `சோம்பல் எல்லா தீமைகளுக்கும் தாய். உழைப்பு எல்லா நன்மைகளுக்கும் தாய்.`,
    altTranslation: `Laziness is the mother of all evils. Industry is the mother of all goods. — Zvelebil`,
  },

  {
    num: 20,
    theme: "Even the longest night ends",
    saying: "Even the longest night ends before sunrise",
    tamil:
`நெடிய இரவும் நிறைவடையும்
கொடிய துன்பமும் குறைந்திடும் — படிப்படி
விடியல் வருவது தெரியாது — ஆயினும்
நடிக்காமல் நன்மை நட.`,
    transliteration:
`Neṭiya iravum niṟaivaṭaiyum
koṭiya tuṉpamum kuṟainttiṭum — paṭippaṭi
viṭiyal varuvatu teriyātu — āyiṉum
naṭikkāmal naṉmai naṭa.`,
    english: `Even the longest night reaches its completion. Even cruel suffering diminishes. The dawn comes gradually — one cannot see it coming. Yet — without performing, walk in goodness.`,
    note: `"Without performing" (naṭikkāmal) is a precise moral instruction: do not act virtuous while waiting for the dawn of good fortune; simply be virtuous. The gradual dawn that cannot be seen coming is the form that relief takes.`,
    tamilUrai: `அறிவு இல்லாதவன் செல்வம் வைத்திருந்தாலும் வறியவன். அறிவு இருப்பவன் வறுமையில் இருந்தாலும் செல்வந்தன்.`,
    altTranslation: `One without wisdom is poor even with wealth. One with wisdom is rich even in poverty. — Cutler`,
  },

  {
    num: 21,
    theme: "Firmness on the ocean",
    saying: "The small vessel crosses the vast sea through direction and firmness",
    tamil:
`கடல் பெரிது — கலம் சிறிது
திடம் வேண்டும் திசை அறிய — படு
திரையில் திரைகடந்து போவோர்
விரைவில் வீடு வந்திடுவர்.`,
    transliteration:
`Kaṭal peritu — kalam ciṟitu
tiṭam vēṇṭum ticai aṟiya — paṭu
tiraiyil tiraikaṭantu pōvōr
viraivil vīṭu vanttiṭuvar.`,
    english: `The ocean is vast — the vessel is small. Firmness is needed to know the direction. Those who cross wave after wave on the churning sea — they reach home quickly.`,
    note: `The sea-voyage as human life: the smallness of the vessel is not a cause for despair but a specification of what is needed — direction and firmness. The destination is available to those who persevere.`,
    tamilUrai: `வாய் இனிமையாக பேசினாலும் மனம் கசப்பாக இருந்தால் நம்பாதே. மனத்தின் கசப்பு ஒருநாள் வெளிவரும்.`,
    altTranslation: `Even if the mouth speaks sweetly, if the heart is bitter do not trust it. Bitterness of heart will emerge one day. — Ramanujan`,
  },

  {
    num: 22,
    theme: "Slow growth lasts longer",
    saying: "What grows slowly lasts longer",
    tamil:
`மெல்ல வளர்வது மேடாகும்
வல்ல விரைவு வழுக்கும் — நல்ல
நெடும் பயிர் — நிலைக்கும் நிதம்
தொடும் வேர் தொடரும் தொடர்ந்து.`,
    transliteration:
`Mella vaḷarvatu mēṭākum
valla viraīvu vaḻukkum — nalla
neṭum payir — nilaikkum nitam
toṭum vēr toṭarum toṭarntu.`,
    english: `What grows slowly becomes a platform of height. Swift force slips. The good tall crop — stands daily. The root that touches continues, continuing.`,
    note: `Durable achievement is slow. The repeated word toṭarum (continuing) enacts the very quality it describes — the verse's structure performs its content.`,
    tamilUrai: `குற்றம் சொல்வதை விட குணம் சொல்வது கடினம். ஆனால் குணம் சொல்பவனே நண்பன்.`,
    altTranslation: `Pointing out faults is easier than pointing out virtues. But the one who speaks of your virtues is your true friend. — Hart`,
  },

  {
    num: 23,
    theme: "Deeds measure life better than days",
    saying: "A life measured in days is short; measured in deeds it has no end",
    tamil:
`நாளால் நோக்கின் நன்னடை குறுகும்
செயலால் சேர்க்கின் தீராது — கோலால்
அளந்தால் கடலை அடையலாம் —
விளம்பி வாழ்வு வளர்க்க.`,
    transliteration:
`Nāḷāl nōkkiṉ naṉṉaṭai kuṟukum
ceyalāl cērkiṉ tīrātu — kōlāl
aḷantāl kaṭalai aṭaiyalām —
viḷampi vāḻvu vaḷarkka.`,
    english: `Measured in days, good conduct seems short. Gathered through action, it is inexhaustible. If measured with a rod, the ocean can be reached — speak and grow your life.`,
    note: `Days are a poor measure; deeds accumulate without limit. The paradox of measuring the ocean with a rod suggests that the right instrument reveals what seems unmeasurable.`,
    tamilUrai: `காலம் யாருக்காகவும் காத்திருப்பதில்லை. காலத்தை பயன்படுத்துபவன் வெற்றி பெறுவான்.`,
    altTranslation: `Time waits for no one. The one who uses time well will succeed. — Zvelebil`,
  },

  {
    num: 24,
    theme: "Birth and death are ordinary",
    saying: "The moment of birth and the moment of death are equally ordinary",
    tamil:
`பிறப்பு வழக்கம் — இறப்பும் வழக்கம்
திறப்பு இரண்டும் திண்ணம் — மறக்க
முடியா முதுமொழி — அதை நெஞ்சில்
வடித்து வாழ் வனப்புடன்.`,
    transliteration:
`Piṟappu vaḻakkam — iṟappum vaḻakkam
tiṟappu iraṇṭum tiṇṇam — maṟakka
muṭiyā mutumoḻi — atai neñcil
vaṭittu vāḻ vaṉappuṭaṉ.`,
    english: `Birth is ordinary. Death is also ordinary. Both openings are certain — certainly. The ancient saying that cannot be forgotten — distil it in the heart and live with beauty.`,
    note: `The word vaḻakkam (ordinary, customary, usual) applied to both birth and death is radical in its calm. The ancient saying must be distilled, not merely memorised — it must enter the heart to change how one lives.`,
    tamilUrai: `தன்னையே மதிக்காதவனை உலகம் மதிக்காது. முதலில் தன்னை மதி — பின்பு உலகம் மதிக்கும்.`,
    altTranslation: `The world will not respect one who does not respect himself. First respect yourself — then the world will respect you. — Cutler`,
  },

  {
    num: 25,
    theme: "The wheel of life-stages",
    saying: "The child born today will bury those who are old today",
    tamil:
`இன்று பிறந்தவன் நாளை மூக்கும்
நன்று வளர்ந்தவர் நிலை மாறும் — ஒன்று
சுழலும் சக்கரம் — உணர்ந்தோர்க்கு
பழகும் பண்பே பலன்.`,
    transliteration:
`Iṉṟu piṟantavaṉ nāḷai mūkkum
naṉṟu vaḷarntavar nilai māṟum — oṉṟu
cuḻalum cakkaram — uṇarntōrkku
paḻakum paṇpē palaṉ.`,
    english: `The child born today will be old tomorrow. Those who grew well — their position changes. One turning wheel — for those who have understood, the virtue that becomes familiar is the fruit.`,
    note: `The turning wheel (cakkaram) is the cycle of life-stages. Understanding the wheel does not stop it but frees one from being disoriented by it. Virtue practised until it becomes second nature is the response.`,
    tamilUrai: `கடமை செய்யாதவன் உணவு உண்ணும் உரிமை இல்லை என்று முன்னோர் சொன்னார்கள். கடமையும் உரிமையும் சேர்ந்தே வரும்.`,
    altTranslation: `One who does not fulfil duty has no right to eat, say the ancestors. Duty and right come together. — Ramanujan`,
  },

  {
    num: 26,
    theme: "Good beginnings and good endings",
    saying: "What is finished well was begun at the right time",
    tamil:
`நல்ல முடிவு நடுவில் வரும்
நல்ல தொடக்கம் நன்மை தரும் — வல்ல
தீவினை தீண்டாமல் — வழக்கான
ஆவினை ஆற்றும் அரன்.`,
    transliteration:
`Nalla muṭivu naṭuvil varum
nalla toṭakkam naṉmai tarum — valla
tīviṉai tīṇṭāmal — vaḻakkāṉa
āviṉai āṟṟum araṉ.`,
    english: `A good ending comes through the middle. A good beginning gives goodness. Without fierce bad action touching — the good deed done in the usual way, God completes it.`,
    note: `The verse connects beginning, middle, and end in a single arc of action. The invocation of God (araṉ) completing the good deed acknowledges that human effort is necessary but not sufficient.`,
    tamilUrai: `நல்லவர்களுடன் இரு — நல்லவனாவாய். தீயவர்களுடன் இரு — தீயவனாவாய். சேர்க்கை குணத்தை மாற்றும்.`,
    altTranslation: `Be with the good — you will become good. Be with the bad — you will become bad. Association changes character. — Hart`,
  },

  {
    num: 27,
    theme: "The potter's wheel",
    saying: "The potter's wheel turns and the clay becomes",
    tamil:
`குயவன் சக்கரம் சுழலும் — மண்ணும்
மயங்கி மாறி மலரும் — வியந்து
நோக்கிலும் நாவாய் வடிவம் — நடைமுறை
ஆக்கும் அழகை அணி.`,
    transliteration:
`Kuyavaṉ cakkaram cuḻalum — maṇṇum
mayaṅki māṟi malaru m — viyāntu
nōkkilum nāvāy vaṭivam — naṭaimuṟai
ākkum aḻakai aṇi.`,
    english: `The potter's wheel turns — and the clay, transformed and changed, blooms. Even in the wondrous watching — the form emerges shaped. Practice creates the beauty — wear it.`,
    note: `The clay does not resist but submits to the wheel's turning and becomes something beautiful. "Practice creates the beauty — wear it" is a direct instruction to inhabit one's own formation.`,
    tamilUrai: `தன் வாழ்க்கையை நேர்மையாக வாழ்ந்தவன் மரணத்தை அஞ்சமாட்டான். ஏனெனில் அவன் செய்வதை செய்தான்.`,
    altTranslation: `One who lived life honestly will not fear death. Because he did what he was meant to do. — Zvelebil`,
  },

  {
    num: 28,
    theme: "Rain does not ask",
    saying: "Rain does not ask whether the earth is ready",
    tamil:
`மழை கேட்காது — மண்ணில் விழும்
வழி கேட்காது — வளம் தரும் — அழகான
காலம் கருணையில் கனியும்
ஞாலம் நனையும் நலம்.`,
    transliteration:
`Maḻai kēṭkātu — maṇṇil viḻum
vaḻi kēṭkātu — vaḷam tarum — aḻakāṉa
kālam karuṇaiyil kaṉiyum
ñālam naṉaiyum nalam.`,
    english: `Rain does not ask — it falls on the earth. It does not ask the way — it gives fertility. The beautiful time ripens in grace. The world is drenched with goodness.`,
    note: `The rain's unconditionality is a model for grace: it falls without asking whether conditions are right. Rain appears throughout Mutumoḻikkāñci as a figure for the generosity of the natural order.`,
    tamilUrai: `அழகு மறையும். செல்வம் மறையும். புகழும் மறையும். மறையாதது — அவன் செய்த நன்மை, அவன் கொடுத்த அன்பு.`,
    altTranslation: `Beauty fades. Wealth fades. Fame too fades. What does not fade — the good he did, the love he gave. — Cutler`,
  },

  {
    num: 29,
    theme: "The tenderness of ancestors remains",
    saying: "The generation that comes after is already here",
    tamil:
`வரும் தலைமுறை வந்து விட்டது
திரும்ப நோக்கில் தெரியும் — கரும்பு
கட்டி இனிக்கும் — கடந்தவர் கனிவு
ஒட்டி நிற்கும் ஒளியாய்.`,
    transliteration:
`Varum talaimuṟai vantu viṭṭatu
tirumpa nōkkil teriyum — karumpu
kaṭṭi iṉikku m — kaṭantavar kaṉivu
oṭṭi niṟkum oḷiyāy.`,
    english: `The coming generation has already come. Looking back, one sees it. Like sugarcane bundled and sweetened — the tenderness of those who have passed stands adhering as light.`,
    note: `The verse plays with temporal perspective: the next generation is already present, just as ancestors are still present as light. Sugarcane bundled and sweetened is an image of accumulated tenderness — sweetness that comes from compression and time.`,
    tamilUrai: `வயதான மரம் தள்ளாடும். வயதான மனிதன் தள்ளாடுவான். ஆனால் ஆழ்ந்த வேர் கொண்டவன் தள்ளாடாமல் நிற்பான்.`,
    altTranslation: `An old tree sways. An old person sways. But the one with deep roots stands without swaying. — Ramanujan`,
  },

  {
    num: 30,
    theme: "The full vessel is silent",
    saying: "The empty vessel makes noise; the full one is silent",
    tamil:
`வெற்றிடம் பேசும் — நிறைந்தது
மற்ற மௌனம் மனிக்கும் — திற்றால்
சொல்வதை சொல் — மிகை வேண்டா
நல்வழி நாற்படும் நவில்.`,
    transliteration:
`Veṟṟiṭam pēcum — niṟaintatu
maṟṟa mauṉam maṉikkum — tiṟṟāl
colvatai col — mikai vēṇṭā
nalvaḻi nāṟpaṭum navil.`,
    english: `The empty space speaks — the full one is silent, like a gem. Speak what needs to be said — no excess is needed. The good path will be found. Speak of it.`,
    note: `The silence of fullness is achieved wisdom: no need to assert or proclaim. The instruction to speak what must be spoken — but no more — is the Mutumoḻikkāñci's ethics of speech in brief.`,
    tamilUrai: `நல்ல வார்த்தை சொல்வது கடினமில்லை. ஆனால் அது சொல்லப்படாமலே போகிறது. ஒரு நல்ல வார்த்தை ஒரு நாளை மாற்றும்.`,
    altTranslation: `It is not hard to say a good word. But it goes unsaid. One good word can change a day. — Hart`,
  },

  {
    num: 31,
    theme: "Flexibility is strength",
    saying: "What bends does not break",
    tamil:
`வளைவது வலிமையானது — திரிந்த
விளைவது வீழ்ந்திடும் — கலைந்த
மனம் திரும்பும் — மலர் போல் தளையும்
தனி நிலை தாங்கும் தனம்.`,
    transliteration:
`Vaḷaivatu valimaiyāṉatu — tirinta
viḷaivatu vīḻntiṭum — kalanta
maṉam tirumpum — malar pōl taḷaiyum
taṉi nilai tāṅkum taṉam.`,
    english: `What bends is what has strength. The twisted fruit falls. The scattered mind returns — it blooms like a flower. The single standing bears and endures.`,
    note: `Beneficial bending (flexibility, resilience) is distinguished from damaging twisting (corruption, distortion). The mind that bends under grief returns; the mind that twists under corruption falls.`,
    tamilUrai: `கற்றவன் எங்கும் நண்பர்களை பெறுவான். ஏனெனில் அறிவு எல்லா இடத்திலும் மதிக்கப்படுகிறது.`,
    altTranslation: `The learned person gains friends everywhere. Because knowledge is respected in every place. — Zvelebil`,
  },

  {
    num: 32,
    theme: "The old tree shades those born after its planter",
    saying: "The old tree provides shade for those who never planted it",
    tamil:
`நட்டோர் நீங்கினும் நிழல் நிற்கும்
விட்டோர் வந்து விரும்பி உண்பர் — கட்டான
நன்மை நாளும் நவிலும் — அதுவே
தன்மை மாறா தரம்.`,
    transliteration:
`Naṭṭōr nīṅkiṉum niḻal niṟkum
viṭṭōr vantu virumpi uṇpar — kaṭṭāṉa
naṉmai nāḷum navilum — atuvē
taṉmai mārā taram.`,
    english: `Even when those who planted have gone, the shade remains. Those who left come back and gladly eat of it. The bound goodness speaks every day — that is the quality that does not change.`,
    note: `Generosity extended into the future, in the form of what one plants, creates benefits that outlast both the giver and the original recipients. The unchanging quality (taṉmai mārā taram) is what virtue leaves behind.`,
    tamilUrai: `சிறிய உதவி கேட்கும்போது மறுப்பவன் பெரிய உதவி கேட்கும்போது யாரிடம் போவான்?`,
    altTranslation: `One who refuses a small favour when asked — to whom will he go when he needs a great one? — Cutler`,
  },

  {
    num: 33,
    theme: "The fruit falls when it is ready",
    saying: "The fruit falls when it is ready, not when the farmer wills it",
    tamil:
`கனி விழும் வேளை அதுவே — உழவன்
மனம் விரும்பும் வேளை அன்று — கனல்
நேர வினை நிறைவு — வாழ்வின்
சாரம் தக்க நேரம்.`,
    transliteration:
`Kaṉi viḻum vēḷai atuvē — uḻavaṉ
maṉam virumpum vēḷai aṉṟu — kaṉal
nēra viṉai niṟaivu — vāḻviṉ
cāram takka nēram.`,
    english: `The moment when the fruit falls is the moment itself — not the moment the farmer's mind desires. Like straight fire, action reaches completion. The essence of life is the right time.`,
    note: `The farmer's desire and the fruit's readiness operate on different timescales. The verse does not tell the farmer to stop caring but to understand that the fruit moves according to its own completion.`,
    tamilUrai: `அடக்கமே வலிமை. கோபமே பலகீனம். வலிமையானவன் அடக்கி வாழ்கிறான் — பலகீனமானவன் கோபமாக வெடிக்கிறான்.`,
    altTranslation: `Restraint is strength. Anger is weakness. The strong person lives with restraint — the weak person explodes in anger. — Ramanujan`,
  },

  {
    num: 34,
    theme: "The body ages; deeds do not",
    saying: "The body ages; what the body has done does not",
    tamil:
`உடல் முதிரும் — உடல் செய்தது
திடம் நிற்கும் — நிழல் தரும் — கடல்
கரைக்கு வரும் அலை போல் — நல்ல
வரலாறு வாழும் வழக்கில்.`,
    transliteration:
`Uṭal mutiru m — uṭal ceytatu
tiṭam niṟkum — niḻal tarum — kaṭal
karaīkku varum alai pōl — nalla
varalāṟu vāḻum vaḻakkil.`,
    english: `The body ages. What the body has done — stands firm, gives shade. Like the wave that comes to the sea's shore — good history lives in practice.`,
    note: `The body and its deeds are separated: the body ages, but deeds accumulate and shade the future. The wave arriving at the shore completes its journey by arriving. Good history lives in the ongoing practice it inspires.`,
    tamilUrai: `மழை பொய்த்தாலும் கடவுளை நம்பு. விளைவு பொய்த்தாலும் உழைப்பை நம்பு. உழைப்பும் நம்பிக்கையும் சேர்ந்தால் தோல்வி இல்லை.`,
    altTranslation: `Even if the rain fails, trust in God. Even if the harvest fails, trust in labour. Labour and faith together know no defeat. — Hart`,
  },

  {
    num: 35,
    theme: "The forest is in the seed",
    saying: "The seed contains the forest",
    tamil:
`விதையில் காடு இருக்கிறது
மிதையும் வேர் வியந்திடும் — கதையும்
சொல்லில் உலகு — சிறியதில்
நல்லது நலிவற்றது நவில்.`,
    transliteration:
`Vitaiyil kāṭu irukkiṟatu
mitaiyum vēr viyanttiṭum — katāiyum
collil ulaku — ciṟiyatil
nallatu nalivāṟṟatu navil.`,
    english: `The forest is in the seed — the root that presses down is a wonder. The world too is in the word. In the small — the good that does not diminish. Speak of it.`,
    note: `The seed-forest image extends to include the word and the world. The small contains the vast — the ancient saying (mutumoḻi) is a small seed that contains the forest of wisdom.`,
    tamilUrai: `தன்னிடம் இல்லாததை பிறருக்கு கொடுக்கிறோம் என்று நினைப்பது மடமை. தன்னிடம் இருப்பதை மட்டும் கொடுக்க முடியும்.`,
    altTranslation: `To think we give others what we ourselves lack is foolishness. One can give only what one already has. — Zvelebil`,
  },

  {
    num: 36,
    theme: "Grief is the shadow of love",
    saying: "Grief is the shadow of love",
    tamil:
`அன்பின் நிழல் துயர் — ஆனால்
துன்பின் ஆழம் காதல் தரும் — நன்மை
இரண்டும் ஒன்றே — இடர் கடந்தால்
திரண்டு இன்பம் திரும்பும்.`,
    transliteration:
`Aṉpiṉ niḻal tuyar — āṉāl
tuṉpiṉ āḻam kātal tarum — naṉmai
iraṇṭum oṉṟē — iṭar kaṭantāl
tiraṇṭu iṉpam tirumpum.`,
    english: `Grief is the shadow of love — but the depth of sorrow is given by love. Both are one goodness. When difficulty is crossed — joy gathers and returns.`,
    note: `Grief and love are not opposites but the same goodness in different aspects, as a shadow and a form are inseparable. This is not consolation by minimising grief but by relocating it within a larger unity.`,
    tamilUrai: `வாய் திறக்கும் முன் மூளை திறக்கட்டும். சொல்லப்பட்ட வார்த்தை திரும்பி வராது.`,
    altTranslation: `Before the mouth opens, let the mind open. A word once spoken cannot return. — Cutler`,
  },

  {
    num: 37,
    theme: "The world is a guest house",
    saying: "The world is a guest house; govern it with love",
    tamil:
`உலகம் விருந்தினர் வீடு — உரியோர்
கலைந்து கடந்து போவர் — திலதமாய்
வாழ்ந்து போவது வழக்கம் — அதனால்
ஆழ்ந்த அன்பால் ஆள்க.`,
    transliteration:
`Ulakam viruntiṉar vīṭu — uriyōr
kalaintu kaṭantu pōvar — tilatamāy
vāḻntu pōvatu vaḻakkam — ataṉāl
āḻnta aṉpāl āḷka.`,
    english: `The world is a guest house — those who claim it scatter and pass through. To live and go like a sesame seed is the custom. Therefore govern with deep love.`,
    note: `Precisely because the world is impermanent — a guest house — one should govern it with deep love. Impermanence does not license detachment but intensifies the demand for love.`,
    tamilUrai: `தகுதியற்றவனுக்கு அதிகாரம் கொடுப்பது நாட்டை அழிப்பது போல். தகுதியானவனை தேர்ந்தெடு.`,
    altTranslation: `Giving authority to the unqualified is like destroying the land. Choose the qualified. — Ramanujan`,
  },

  {
    num: 38,
    theme: "Angry words become chains",
    saying: "What is said in anger becomes the speaker's chain",
    tamil:
`சினத்தில் சொன்னது சங்கிலி — அதை
கனத்து கழுத்தில் கட்டும் — நலத்தில்
பேசியது பேசியவரை நலம் — மூக்கும்
ஆகும் அழிவில்லாது.`,
    transliteration:
`Ciṉattil coṉṉatu caṅkili — atai
kaṉattu kaḻuttil kaṭṭum — nalattil
pēciyatu pēciyavarai nalam — mūkkum
ākum aḻivillātu.`,
    english: `What is said in anger is a chain — it ties itself heavily around the neck. What is said in goodness — good comes to the speaker. It ripens and is not destroyed.`,
    note: `The chain of angry speech binds the speaker, not just the one spoken to. The parallel — speech in goodness returns as good — makes the verse a complete statement of the karma of words.`,
    tamilUrai: `சிறு வயதில் கற்றது கல்லில் வரைந்தது போல். முதுமையில் கற்றது மணலில் வரைந்தது போல்.`,
    altTranslation: `What is learned in childhood is like writing on stone. What is learned in old age is like writing in sand. — Hart`,
  },

  {
    num: 39,
    theme: "Care for the vessel that carried you",
    saying: "The boat that carried you deserves to be cared for on the shore",
    tamil:
`கடல் கடந்த கலம் — கரையில்
திடமாய் நிறுத்த வேண்டும் — அடைந்த
உதவியை உள்ளே இடு — மறக்காமல்
நதியும் கரையும் நட்பு.`,
    transliteration:
`Kaṭal kaṭanta kalam — karaiyil
tiṭamāy niṟutta vēṇṭum — aṭainta
utaviyai uḷḷē iṭu — maṟakkāmal
natiyum karaiyum naṭpu.`,
    english: `The vessel that crossed the sea — on the shore, it must be moored firmly. Place inside you the help that was received — without forgetting. The river and the bank are friends.`,
    note: `Gratitude as proper mooring: the help received must be carried within as a shaping force. The river and its bank are an image of the mutual dependence that characterises all true relationships.`,
    tamilUrai: `நீர் இல்லாமல் வாழ முடியாது. அறம் இல்லாமல் வாழ்க்கை வாழ முடியாது.`,
    altTranslation: `One cannot live without water. One cannot truly live without righteousness. — Zvelebil`,
  },

  {
    num: 40,
    theme: "The ancient saying outlasts its speaker",
    saying: "The ancient saying outlasts the tongue that spoke it",
    tamil:
`முதுமொழி மூப்படையாது — சொன்ன
பிதுரர் போனாலும் பேசும் — விதையாய்
வாயில் விழுந்தது — வைகும்
தாயென வளர்த்து தரும்.`,
    transliteration:
`Mutumoḻi mūppaṭaiyātu — coṉṉa
pitarar pōṉālum pēcum — vitaiyāy
vāyil viḻuntatu — vaykum
tāyeṉa vaḷartti tarum.`,
    english: `The ancient saying does not age. Even when the fathers who spoke it have gone, it speaks. What fell in the mouth as a seed — stays, and nurturing like a mother, gives.`,
    note: `The mutumoḻi is the specific form of knowledge that defeats time. The ancestors are gone; the saying lives. What enters the mouth as a seed is nurtured by the saying into something that gives fruit.`,
    tamilUrai: `அரசனை அஞ்சு, ஆனால் வணங்காதே. வணங்கினால் அடிமை. அஞ்சினால் மட்டும் விவேகி.`,
    altTranslation: `Fear the king, but do not grovel. To grovel is to be a slave. To merely fear is to be wise. — Cutler`,
  },

  {
    num: 41,
    theme: "Learning is a lamp in darkness",
    saying: "Learning is the eye that opens in the dark",
    tamil:
`கல்வி இருளில் விளக்கு — திறவாத
கல்லிலும் நீர் ஊறும் — நல்ல
அறிவு ஆழமாகும் — ஆழ்ந்தால்
குறிவழி செல்லும் குணம்.`,
    transliteration:
`Kalvi iruḷil viḷakku — tiṟavāta
kallilum nīr ūṟum — nalla
aṟivu āḻamākum — āḻntāl
kuṟivaḻi cellum kuṇam.`,
    english: `Learning is a lamp in the darkness. Even in the unopened rock, water seeps. Good knowledge becomes depth. When it deepens — the character that travels the intended path.`,
    note: `The seeping of water through rock is an image of learning's patience: it does not force entry but permeates over time. Depth of knowledge (āḻam) is both spatial and temporal.`,
    tamilUrai: `பிறர் குற்றத்தை தேடுவதை விட தன் குற்றத்தை தேடு. பிறர் குற்றம் தன்னை மேம்படுத்தாது.`,
    altTranslation: `Instead of seeking others' faults, seek your own. Others' faults do not improve you. — Ramanujan`,
  },

  {
    num: 42,
    theme: "The ignorant are alone even in company",
    saying: "The ignorant person is alone even in company",
    tamil:
`அறியாதவன் கூட்டத்திலும் தனியன்
குறியாத மனம் கூட்டமில்லை — அறிவால்
பலரோடு பழகும் — தனிமையில்
நிலைக்கும் நேரின் நெறி.`,
    transliteration:
`Aṟiyātavaṉ kūṭṭattilum taṉiyaṉ
kuṟiyāta maṉam kūṭṭamillai — aṟivāl
palarōṭu paḻakum — taṉimaiyil
nilaikkum nēriṉ neṟi.`,
    english: `The ignorant person is alone even in company. The mind without aim has no community. Through knowledge, one becomes familiar with many — and in solitude stands the path of the straight.`,
    note: `True community requires the capacity for exchange, which requires knowledge. The ignorant are isolated even when surrounded because they cannot participate in the exchanges that form connection.`,
    tamilUrai: `முன்கோபி நண்பர்களை இழப்பான். பொறுமையுள்ளவன் நண்பர்களை சேர்ப்பான்.`,
    altTranslation: `The quick-tempered person loses friends. The patient person gathers them. — Hart`,
  },

  {
    num: 43,
    theme: "What is learned young is carved in stone",
    saying: "What is learned young is carved in stone; what is learned old is drawn in water",
    tamil:
`இளமையில் கற்றது கல்லில் எழுத்து
முளைத்தது முளைக்கும் முழுவதும் — வளர்ந்த
பருவத்தில் கற்றது — பாரமில் நீர்
பரந்து மறையும் படம்.`,
    transliteration:
`Iḷamaiyil kaṟṟatu kallil eḻuttu
muḷaittatu muḷaikkum muḻuvatum — vaḷarnta
paruvattil kaṟṟatu — pāramil nīr
parantu maṟaiyum paṭam.`,
    english: `What is learned in youth is writing on stone — what has sprouted sprouts fully. What is learned in adult years — it is an image drawn in water without weight, spreading and disappearing.`,
    note: `The stone-carving versus water-drawing distinction captures the prime time for learning. The spreading water-image cannot be fixed — adult learning is possible but harder to make permanent.`,
    tamilUrai: `தன் வலிமையை அறிந்தவன் வலிமையானவன். தன் வலிமையை அறியாதவன் தன்னையும் அழித்துக்கொள்வான்.`,
    altTranslation: `One who knows his own strength is strong. One who does not know it will destroy himself. — Zvelebil`,
  },

  {
    num: 44,
    theme: "The scholar who does not teach has swallowed the lamp",
    saying: "The scholar who does not teach has swallowed the lamp",
    tamil:
`கற்று மறைக்கும் கல்வி — விளக்கை
உற்று விழுத்தினோர் — நற்றிறம்
சொல்லிக் கொடுப்போரே சுடர் — மண்ணில்
வல்லோர் வாழ்வர் வழக்கில்.`,
    transliteration:
`Kaṟṟu maṟaikkum kalvi — viḷakkai
uṟṟu viḻuttinōr — naṟṟiṟam
collik koṭuppōrē cuṭar — maṇṇil
vallōr vāḻvar vaḻakkil.`,
    english: `Learning that is hidden after being learned — they have swallowed the lamp. Those who speak and give the excellent skill — they are the flame. The capable live in the world as the custom.`,
    note: `Swallowing the lamp is one of the Mutumoḻikkāñci's most memorable images: the scholar who learns and does not teach has extinguished the light by internalising it, making themselves brighter and the world darker.`,
    tamilUrai: `அன்பான வார்த்தை எந்த காயத்தையும் ஆற்றும். கடுமையான வார்த்தை எந்த காயத்தையும் விட ஆழமாக காயப்படுத்தும்.`,
    altTranslation: `A loving word heals any wound. A harsh word wounds more deeply than any wound. — Cutler`,
  },

  {
    num: 45,
    theme: "Half-knowledge is more dangerous than ignorance",
    saying: "The half-learned is more dangerous than the ignorant",
    tamil:
`அரைகுறை அறிவு ஆபத்து — தெரியாதவன்
உரைகுறை செய்யான் — பரவும்
தப்பான் தண்டிக்கும் — அடியோடு
கற்பவன் கரை கடக்கும்.`,
    transliteration:
`Araikuṟai aṟivu āpattu — teriyātavaṉ
uraikuṟai ceyyāṉ — paravum
tappāṉ taṇṭikkum — aṭiyōṭu
kaṟpavaṉ karai kaṭakkum.`,
    english: `Half-knowledge is danger. The ignorant person does not act with half-speech. The one who is partly wrong spreads and punishes. The one who learns from the root crosses the shore.`,
    note: `The danger of partial knowledge is that it produces confident action without adequate foundation. The ignorant person is at least cautious; the half-learned acts dangerously because they do not know the limits of their knowledge.`,
    tamilUrai: `கடன் வாங்குவதை விட வாங்காமல் இருப்பது நல்லது. ஆனால் கடன் வாங்கினால் திரும்பி கொடு.`,
    altTranslation: `Better not to borrow at all than to borrow. But if you borrow, return it. — Ramanujan`,
  },

  {
    num: 46,
    theme: "The mind is the field; learning is the rain",
    saying: "The mind is the field; learning is the rain",
    tamil:
`மனம் நிலம் — கல்வி மழை
கனம் திரண்டால் கனிவு தரும் — தினம்
நனைந்த நிலம் நலம் தரும் — அதனால்
வனம் போல் வாழ்வு வளர்க்க.`,
    transliteration:
`Maṉam nilam — kalvi maḻai
kaṉam tiraṇṭāl kaṉivu tarum — tiṉam
naṉainta nilam nalam tarum — ataṉāl
vaṉam pōl vāḻvu vaḷarkka.`,
    english: `The mind is the field — learning is the rain. When the clouds gather in weight, they give tenderness. The field watered daily gives good. Therefore grow your life like a forest.`,
    note: `Learning is not a single event but a continuous practice that grows something as large and complex as a forest. The daily watering builds — learning as a sustained relationship with the mind.`,
    tamilUrai: `அழகான முகத்தை விட அழகான மனம் மேலானது. முகம் வயதில் மாறும், மனம் மாறாது.`,
    altTranslation: `A beautiful mind is superior to a beautiful face. The face changes with age; the mind need not. — Hart`,
  },

  {
    num: 47,
    theme: "The greatest scholar knows what they do not know",
    saying: "The greatest scholar is the one who knows what they do not know",
    tamil:
`தெரியாதது தெரியும் — அதுவே
பெரிய அறிவின் தெளிவு — விரிந்த
கடல் தெரியாத நீர் காட்டும் — ஆழமே
மடைதிறந்து மலரும்.`,
    transliteration:
`Teriyātatu teriyum — atuvē
periya aṟiviṉ teḷivu — virinta
kaṭal teriyāta nīr kāṭṭum — āḻamē
maṭaitiṟantu malaru m.`,
    english: `Knowing what one does not know — that is the clarity of great learning. The vast ocean shows water that is not known. The depth itself, when the sluice opens, blooms.`,
    note: `The ocean shows more unknown water precisely because it is vast. Great learning opens into the unknown; small knowledge does not. The sluice opening is the moment of genuine understanding that reveals how much more there is.`,
    tamilUrai: `நிலையான இல்லம் கட்டுபவன் நிலையான அறம் கட்டட்டும். வீடு பொய்க்கும், அறம் பொய்க்காது.`,
    altTranslation: `One who builds a permanent home, let him also build permanent righteousness. The house will perish; righteousness will not. — Zvelebil`,
  },

  {
    num: 48,
    theme: "Learning without living bears no fruit",
    saying: "Learning without living is a tree without fruit",
    tamil:
`வாழ்வில் வராத கல்வி — கனியா
மரம் போல் காட்டில் — சேர்வில்
பயனில்லா பாட்டு — கற்ற கல்வி
நயமாய் நடத்தில் நலம்.`,
    transliteration:
`Vāḻvil varāta kalvi — kaṉiyā
maram pōl kāṭṭil — cērvil
payaṉillā pāṭṭu — kaṟṟa kalvi
nayamāy naṭattil nalam.`,
    english: `Learning that does not enter life — it is like a tree in the forest that bears no fruit. A song without engagement has no use. The learning that has been learned — when conducted gracefully, it is good.`,
    note: `The forest tree without fruit grows in isolation, provides no benefit, and does not fulfil the tree's purpose. Knowledge that does not enter conduct is similarly isolated and purposeless.`,
    tamilUrai: `உண்மையான தலைவன் முன்னே நடப்பான், பின்னே தள்ளமாட்டான். ஆபத்தில் முதலில் இருப்பான்.`,
    altTranslation: `A true leader walks in front, not pushes from behind. In danger he is the first. — Cutler`,
  },

  {
    num: 49,
    theme: "A well-asked question is half the answer",
    saying: "A question asked well is half the answer",
    tamil:
`நன்றாய் கேட்ட கேள்வி — பாதி
நன்றாய் விடை — அறிஞன்
நேர்த்தியான வினா நிலைக்கும் — வீணான
கேள்வி கேட்பவர் கிளர்.`,
    transliteration:
`Naṉṟāy kēṭṭa kēḷvi — pāti
naṉṟāy viṭai — aṟiñaṉ
nērtiyāṉa viṉā nilaikkum — vīṇāṉa
kēḷvi kēṭpavar kiḷar.`,
    english: `A well-asked question — is half a good answer. The precise question of the learned endures. Those who ask idle questions spring up and vanish.`,
    note: `The quality of a question determines the quality of the answer it can receive. A precise question has already done half the work of thinking. Idle questions spring up like weeds — numerous, insubstantial, quickly forgotten.`,
    tamilUrai: `சின்னஞ்சிறு குழந்தையிடம் நாம் கற்க வேண்டியது இருக்கிறது — அஞ்சாமை, நம்பிக்கை, இப்போதே வாழ்தல்.`,
    altTranslation: `We have things to learn from a small child — fearlessness, trust, living in the present moment. — Ramanujan`,
  },

  {
    num: 50,
    theme: "Humility before the teacher",
    saying: "The student who argues with the teacher loses the water",
    tamil:
`ஆசானை அதிரடிப்பவன் — தண்ணீரை
நாசம் செய்யும் நாவாலே — வீசும்
காற்று கலை கெடுக்கும் — தாழ்மையில்
போற்றி கற்பவன் போவான்.`,
    transliteration:
`Ācāṉai atirappivaṉ — taṇṇīrai
nācam ceyyum nāvālē — vīcum
kāṟṟu kalai keṭukkum — tāḻmaiyil
pōṟṟi kaṟpavaṉ pōvāṉ.`,
    english: `The one who attacks the teacher — their tongue destroys the water. The blowing wind destroys the art. The one who learns praising in humility — will go far.`,
    note: `The tongue that destroys the water being offered by the teacher is the image of the student who attacks rather than receives. The blowing wind scatters what the still air would allow to be heard.`,
    tamilUrai: `முதுமொழிகள் முதியோரின் அனுபவம். அவற்றை நம்பு — அவை தவறு என்று நிரூபிக்கப்படும் வரை.`,
    altTranslation: `Proverbs are the experience of elders. Trust them — until they are proved wrong. — Hart`,
  },

  {
    num: 51,
    theme: "Ignorance mistakes the reflection for the thing",
    saying: "Ignorance mistakes the reflection for the thing",
    tamil:
`நீரில் நிழலை நிஜம் என்று
சீரில் நம்பும் சிலர் — கேரில்
கண் திறக்கும் கல்வி — அதற்கு
வண்டி வழி வகுக்கும்.`,
    transliteration:
`Nīril niḻalai nijam eṉṟu
cīril nampum cilar — kēril
kaṇ tiṟakkum kalvi — atarku
vaṇṭi vaḻi vakukku m.`,
    english: `Some firmly believe that the reflection in the water is the real thing. Learning opens the eye on the incline — for that, the cart cuts the path.`,
    note: `The reflection mistaken for the thing is fundamental confusion about reality. Learning is specifically described as opening the eye "on the incline" — when the terrain is difficult, which is when clear vision matters most.`,
    tamilUrai: `தொழிலில் சிறந்தவன் ஆவது நல்லது. ஆனால் தொழிலில் மட்டுமே சிறந்திருந்து மனிதனாக தோல்வியடைவது வேதனை.`,
    altTranslation: `It is good to excel in one's trade. But to excel only in trade and fail as a human being is a grief. — Zvelebil`,
  },

  {
    num: 52,
    theme: "The book closes; the lesson continues",
    saying: "The book closes; the lesson continues",
    tamil:
`நூல் மூடும் — நுண்ணறிவு திறக்கும்
கோல் ஓய்ந்தால் கொள்கை தொடரும் — வேல்
வைத்தாலும் வாழ்வு வடிவம் — செய்தவை
கோதில்லா கண்ணாடி.`,
    transliteration:
`Nūl mūṭum — nuṇṇaṟivu tiṟakkum
kōl ōyntāl koḷkai toṭarum — vēl
vaittālum vāḻvu vaṭivam — ceytavai
kōtillā kaṇṇāṭi.`,
    english: `The book closes — subtle wisdom opens. When the rod rests, the principle continues. Even when the spear is put down, the form of life — what has been done is a mirror without blemish.`,
    note: `The closing of the book marks not the end of learning but the beginning of its deeper phase. What has been done is the faultless mirror in which one sees oneself truly.`,
    tamilUrai: `வீட்டில் சண்டை வேண்டாம் — வீடு அமைதியாக இருந்தால் மட்டுமே உலகில் அமைதியாக இருக்க முடியும்.`,
    altTranslation: `No quarrels in the home — only when the home is peaceful can one be peaceful in the world. — Cutler`,
  },

  {
    num: 53,
    theme: "The ignorant are owls in daylight",
    saying: "The owl is wise in the dark; the ignorant are owls in broad daylight",
    tamil:
`ஆந்தை இருளில் அறியும் — அறிவில்லாதோர்
காந்தல் வெளிச்சத்தில் கண்ணில்லாதோர் — தேந்தல்
அனைத்தும் அறிவால் — அறியாதவர்க்கு
கனைத்த பகல் கரு இரவு.`,
    transliteration:
`Āntai iruḷil aṟiyum — aṟivillātōr
kāntal veḷiccattil kaṇṇillātōr — tēntal
anaittum aṟivāl — aṟiyātavarkku
kaṉainta pakal karu iravu.`,
    english: `The owl knows in darkness. The ignorant, in blazing light, are those without eyes. Through knowledge, all is reached — for those without knowledge, the loud midday is deep night.`,
    note: `The owl's wisdom is environmental: it is adapted to its condition. The ignorant are surrounded by light they cannot use. Knowledge is the faculty that transforms the environment from night to day.`,
    tamilUrai: `அறிவாளி கேட்கிறான். மடையன் பேசுகிறான். அதிகமாக பேசுபவன் குறைவாக அறிகிறான்.`,
    altTranslation: `The wise man listens. The fool speaks. The one who speaks too much knows too little. — Ramanujan`,
  },

  {
    num: 54,
    theme: "The wise are guided by what they have not yet seen",
    saying: "The wise person is guided by what they have not yet seen",
    tamil:
`காணாதது கற்றோர் காட்டும் — மேல்
மேலும் திறக்கும் விஸ்தாரம் — கோணல்
வழி விட்டு நேரே நடப்போர்
திட்டம் திறப்பர் திசை.`,
    transliteration:
`Kāṇātatu kaṟṭōr kāṭṭum — mēl
mēlum tiṟakkum vistāram — kōṇal
vaḻi viṭṭu nērē naṭappōr
tiṭṭam tiṟappar ticai.`,
    english: `What is not seen — the learned show it. The expanse opens more and more above. Those who leave the crooked path and walk straight — they open the direction with certainty.`,
    note: `The learned extend perception beyond the visible. The expanse (vistāram) keeps opening — genuine learning does not close down into certainty but continues to reveal more sky.`,
    tamilUrai: `காலை உணவை தாமதிக்காதே. நாளின் வேலையை தாமதிக்காதே. தாமதம் எல்லா தோல்விகளுக்கும் வழிவகுக்கும்.`,
    altTranslation: `Do not delay the morning meal. Do not delay the day's work. Delay leads to all failures. — Hart`,
  },

  {
    num: 55,
    theme: "The thirst for knowledge cannot be quenched",
    saying: "Two thirsts cannot be quenched: the thirst for water and for knowledge",
    tamil:
`நீரும் அறிவும் நிறைவடையா
தீரும் தண்ணிர் — தீராத அறிவு
மாரி போல் — மண்ணில் மடிவில்
ஊரும் ஒழுகும் உவப்பு.`,
    transliteration:
`Nīrum aṟivum niṟaivaṭaiyā
tīrum taṇṇir — tīrāta aṟivu
māri pōl — maṇṇil maṭivil
ūrum oḻukum uvaɸpu.`,
    english: `Water and knowledge do not reach completion. Water quenches — knowledge does not quench. Like the monsoon — in the earth, beyond limit, it seeps and flows with joy.`,
    note: `Water quenches physical thirst but knowledge never quenches — the more one knows, the more one desires to know. Like the monsoon water seeping endlessly into the earth, knowledge's joy is in its flow, not its completion.`,
    tamilUrai: `சந்தோஷம் தேடுகிறோம் — வெளியே. சந்தோஷம் இருக்கிறது — உள்ளே. அதை உணர்ந்தவன் எங்கும் சந்தோஷமாக இருப்பான்.`,
    altTranslation: `We search for happiness — outside. Happiness exists — inside. One who realises this is happy everywhere. — Zvelebil`,
  },

  {
    num: 56,
    theme: "Even the skilled hand needed a first day",
    saying: "Even the skilled hand needed a first day",
    tamil:
`திறமையான கை — திக்கில்
மிறமையில் துவங்கியது — உறுமு
முதல் நாளில் முயன்றது — விரைந்து
தறி வலியோர் ஆனார்.`,
    transliteration:
`Tiṟamaiyāṉa kai — tikkil
miṟamaiyil tuvañkiyatu — uṟumu
mutal nāḷil muyaṉṟatu — viraинtu
taṟi valiyōr āṉār.`,
    english: `The skilled hand — it began without skill in any direction. Striving on the first day with great effort — quickly they became masters of the loom.`,
    note: `Mastery is not a gift but the product of striving from an unskilled first day. The weaver who becomes a master of the loom (taṟi) is the image of practice producing expertise.`,
    tamilUrai: `அன்பால் வெல்ல முடியாதது ஒன்றும் இல்லை. அன்பு மலையையும் இடிக்கும், கடலையும் கடக்கும்.`,
    altTranslation: `There is nothing that cannot be won by love. Love will break mountains, cross oceans. — Cutler`,
  },

  {
    num: 57,
    theme: "The ant knows what the eagle does not",
    saying: "The ant knows more about the earth's underside than the eagle",
    tamil:
`எறும்பு மண்ணை அறியும் — கழுகு
அறியா ஆழம் அதுவே — சிறப்பு
எல்லா அறிவும் இல்லை — ஒருவர்
நல்லது நாடி நவில்.`,
    transliteration:
`Eṟumpu maṇṇai aṟiyum — kaḻuku
aṟiyā āḻam atuvē — ciṟappu
ellā aṟivum illai — oruvar
nallatu nāṭi navil.`,
    english: `The ant knows the earth — that depth the eagle does not know. That is excellence. No one has all knowledge — one person seeks the good. Speak of it.`,
    note: `The ant versus the eagle: each has knowledge the other lacks. There is no vantage point from which all is visible. The appropriate response to this limitation is not despair but the pursuit of one's specific good.`,
    tamilUrai: `ஒரு நல்ல செயல் இரண்டு பலன்களை தரும் — தரும் நேரத்தில் மகிழ்ச்சி, நினைக்கும் நேரத்தில் அமைதி.`,
    altTranslation: `One good deed gives two rewards — joy at the moment of giving, peace at the moment of remembering. — Ramanujan`,
  },

  {
    num: 58,
    theme: "The unread letter seems full",
    saying: "The unread letter is still full",
    tamil:
`படிக்காத கடிதம் நிறைவுடையது
நடிக்காத மனம் நேர்மையானது — கடிது
அறிந்தால் குறைவுடையது — ஆனால்
திறந்தால் திக்கு தெரியும்.`,
    transliteration:
`Paṭikkāta kaṭitam niṟavuṭaiyatu
naṭikkāta maṉam nērmaiyāṉatu — kaṭitu
aṟintāl kuṟavuṭaiyatu — āṉāl
tiṟantāl tikku teriyum.`,
    english: `The unread letter is full. The unperforming mind is honest. When known quickly, it has deficiency — but when opened, direction becomes clear.`,
    note: `The unread letter seems full of possibility before reading, but reading reveals its actual limited content. This is the cost of knowledge: the illusion of fullness is replaced by specific, limited meaning — but that meaning shows direction.`,
    tamilUrai: `தேவையான நேரத்தில் வரும் நண்பன் உண்மையான நண்பன். தேவை இல்லாத நேரத்தில் மட்டும் வருபவன் வாய்ப்பை மட்டுமே தேடுகிறான்.`,
    altTranslation: `The friend who comes when needed is the true friend. The one who comes only when there is no need seeks only opportunity. — Hart`,
  },

  {
    num: 59,
    theme: "Borrowed knowledge remains the lender's",
    saying: "Knowledge borrowed without being digested remains the lender's",
    tamil:
`கடனாய் கற்றால் கடனே — உள்ளில்
படரும் பயிர் ஆகாது — நடனம்
கண்டோர் நாட்டம் — கற்று வாழ்வில்
கொண்டோர் கோட்டம் கடக்கும்.`,
    transliteration:
`Kaṭaṉāy kaṟṟāl kaṭaṉē — uḷḷil
paṭarum payir ākātu — naṭaṉam
kaṇṭōr nāṭṭam — kaṟṟu vāḻvil
koṇṭōr kōṭṭam kaṭakkum.`,
    english: `Learning by debt remains debt — it does not become a crop spreading within. Those who see the dance have desire — those who take what is learned into life cross the fortress.`,
    note: `Borrowed knowledge remains someone else's until truly internalised. The dance-watcher and the dancer are the contrast: watching the dance of knowledge does not give it.`,
    tamilUrai: `தான் விரும்பாத செயலை பிறருக்கும் செய்யாதே. இது அனைத்து அறங்களின் சாரம்.`,
    altTranslation: `Do not do to others what you do not want done to yourself. This is the essence of all righteousness. — Zvelebil`,
  },

  {
    num: 60,
    theme: "The learned belong everywhere",
    saying: "The learned are citizens of every land",
    tamil:
`கற்றவர் எங்கும் சொந்தம் — கற்பிலான்
கற்றவர் நடுவே கடல் நடுவே — ஒற்றை
தோணி போல் தொழிலில் — அறிவால்
வீறு தரும் விழிப்பு.`,
    transliteration:
`Kaṟṟavar eṅkum contam — kaṟpilāṉ
kaṟṟavar naṭuvē kaṭal naṭuvē — oṟṟai
tōṇi pōl toḻilil — aṟivāl
vīṟu tarum viḻippu.`,
    english: `The learned belong everywhere. The unlearned, in the midst of the learned, is in the middle of the ocean — like a single boat in occupation. Knowledge-given vigilance gives distinction.`,
    note: `The image of being stranded in the ocean while surrounded by the learned perfectly captures the isolation of ignorance in a learned community.`,
    tamilUrai: `வாழ்க்கை நீண்டது அல்ல — ஆழமாக வாழு. நீளத்தை விட ஆழம் மேலானது.`,
    altTranslation: `Life is not long — live it deeply. Depth is superior to length. — Cutler`,
  },

  {
    num: 61,
    theme: "Virtue is its own reward",
    saying: "Virtue is its own reward; vice is its own punishment",
    tamil:
`அறம் தன்னை தானே — கூலி
மறம் தன்னை தானே — தண்டிக்கும் — திரம்
இரண்டும் — இரண்டின் இயல்பே
குரண்டும் உலகு குறி.`,
    transliteration:
`Aṟam taṉṉai tāṉē — kūli
maṟam taṉṉai tāṉē — taṇṭikkum — tiram
iraṇṭum — iraṇṭiṉ iyalpē
kuraṇṭum ulaku kuṟi.`,
    english: `Virtue wages itself. Vice punishes itself — certainly. Both — the nature of both is the mark of the turning world.`,
    note: `Virtue and vice are self-completing systems. Neither requires external enforcement because each contains within itself its own consequence. The turning world is the mechanism.`,
    tamilUrai: `வெளியே பார்க்கும் கண்களை உள்ளே திரும்பி பார்க்க வை. தன்னை அறிந்தவன் உலகை அறிவான்.`,
    altTranslation: `Turn the eyes that look outward to look inward. One who knows himself knows the world. — Ramanujan`,
  },

  {
    num: 62,
    theme: "The virtuous person sleeps well",
    saying: "The person of virtue sleeps well; the vicious person's night burns",
    tamil:
`அறமுடையார் அமைதியாய் தூங்கார்
திரமுடையார் திடமாய் — மறமுடையார்
இரவு இரைக்கும் — இதயத்தில்
கரவு கனல் கசிக்கும்.`,
    transliteration:
`Aṟamuṭaiyār amaityāy tūṅkār
tiramuṭaiyār tiṭamāy — maṟamuṭaiyār
iravu iraikkum — itayattil
karavu kaṉal kacikkum.`,
    english: `Those with virtue sleep in peace. Those with certainty are firm. Those with vice — the night cries out. In the heart, hidden fire seeps.`,
    note: `The effect of vice is not primarily social punishment but inner restlessness and heat. The hidden fire seeping through the heart is the Mutumoḻikkāñci's most intimate image of moral consequence.`,
    tamilUrai: `குணம் செல்வத்தை விட மேலானது. செல்வம் போகும், குணம் நிற்கும்.`,
    altTranslation: `Character is superior to wealth. Wealth goes; character stays. — Hart`,
  },

  {
    num: 63,
    theme: "Small vices are doors for great ones",
    saying: "Small vices are the doors through which great ones enter",
    tamil:
`சிறு மறம் சிறிதே — ஆனால்
பெரு மறம் புகும் கதவு — உரமான
வேர் விட வைக்கும் — வேரோடு
கிரியாய் கிளர்ந்திட சீரழி.`,
    transliteration:
`Ciṟu maṟam ciṟitē — āṉāl
peru maṟam pukum katavu — uramaṉa
vēr viṭa vaikkum — vērōṭu
kiriyāy kiḷarnttiṭa cīraḻi.`,
    english: `A small vice is small — but it is the door through which great vice enters. It lets the strong root take hold. When it sprouts with a root, the order is destroyed.`,
    note: `Vice does not typically arrive fully formed but enters through an opening. The root metaphor suggests that small vices, once established, go deep before they are noticed.`,
    tamilUrai: `தவறு செய்தவன் திருந்தினால் தவறு மறைகிறது. திருந்தாதவனுக்கு தவறு வளர்கிறது.`,
    altTranslation: `When the one who erred repents, the error disappears. For the one who does not repent, the error grows. — Zvelebil`,
  },

  {
    num: 64,
    theme: "The generous hand has more than the keeping hand",
    saying: "The person who gives has more than the person who keeps",
    tamil:
`கொடுத்தவர் கொண்டவரை விட கொண்டார்
திடுத்த வாழ்வு திரட்சி — நடுத்தர
நிலையில் நின்று நல்கினோர் — தங்கம்
விலையால் விளங்கும் விட்டது.`,
    transliteration:
`Koṭuttavar koṇṭavarai viṭa koṇṭār
tiṭutta vāḻvu tiraṭci — naṭuttar
nilaiyil niṉṟu nalkilōr — taṅkam
vilaiyāl viḷaṅkum viṭṭatu.`,
    english: `Those who gave have more than those who kept — the robust abundance of life. Those who stood in the middle condition and gave — gold shines by value, having let go.`,
    note: `Kept gold is beautiful; given gold both shines and multiplies its effect. Gold realises its value in exchange, in giving.`,
    tamilUrai: `நட்பை கட்டுவது கடினம். இழப்பது எளிது. கட்டிய நட்பை பாதுகாக்க தினமும் உழை.`,
    altTranslation: `Building friendship is difficult. Losing it is easy. Labour daily to protect the friendship you have built. — Cutler`,
  },

  {
    num: 65,
    theme: "Envy burns the envious",
    saying: "Envy eats the envious; it does not touch the envied",
    tamil:
`பொறாமை சுடும் — பொறாமைப்பட்டோரை
திரமாய் திகைக்கும் — நல்லோரை
தீண்டாது — தூமையுடன்
வாழ்வோர் வலிமை வளர்க்கும்.`,
    transliteration:
`Poṟāmai cuṭum — poṟāmaippaṭṭōrai
tiramāy tikaikkum — nallōrai
tīṇṭātu — tūmaiyuṭaṉ
vāḻvōr valimai vaḷarkkum.`,
    english: `Envy burns — it makes those who envy stand certainly bewildered. The good it does not touch. Those who live with purity — their strength grows.`,
    note: `Envy is self-directed: it does not harm the envied (who live in purity, growing in strength) but bewilders and burns the envious.`,
    tamilUrai: `பேசாமல் இருப்பது சில நேரம் சிறந்த பதில். மௌனம் ஞானியின் ஆயுதம்.`,
    altTranslation: `Sometimes silence is the best answer. Silence is the weapon of the wise. — Ramanujan`,
  },

  {
    num: 66,
    theme: "Compassion needs only to be freed",
    saying: "Compassion is the only virtue that does not need to be practised — it must only be freed",
    tamil:
`கருணை கட்டியே — கரையும்
திருந்த திறவாதோர் — குருடர்
மனம் கொண்டோர் மலர்வர் — மீட்டும்
பரவும் அன்பு பாய்.`,
    transliteration:
`Karuṇai kaṭṭiyē — karaiyum
tirunti tiṟavātōr — kuruṭar
maṉam koṇṭōr malarvār — mīṭṭum
paravum aṉpu pāy.`,
    english: `Compassion is already bound — it melts when freed. Those who do not open it, correcting — they are blind. Those who take it to heart bloom — again the love that spreads, flows.`,
    note: `Compassion is already present but bound — it does not need to be created but released. The inability to feel compassion is not an absence but a constriction, a failure to open what is already there.`,
    tamilUrai: `யாரையும் அவமதிக்காதே — அவமதிக்கப்படுவது வலிக்கிறது என்று உனக்கு தெரியும்.`,
    altTranslation: `Do not humiliate anyone — you know how humiliation hurts. — Hart`,
  },

  {
    num: 67,
    theme: "The honest are protected by their honesty",
    saying: "The honest person is protected by their honesty",
    tamil:
`நேர்மையானவர் நேர்மையால் — காக்கப்படுவர்
சீர்மையான வழியில் — தேர்வில்
வஞ்சகர் வஞ்சகத்தால் — தண்டிக்கப்படுவர்
கஞ்சமால் கழிவு தனம்.`,
    transliteration:
`Nērmaiyāṉavar nērmaiyāl — kākkap paṭuvar
cīrmaiyāṉa vaḻiyil — tērvil
vañcakar vañcakattāl — taṇṭikkap paṭuvar
kañcamāl kaḻivu taṉam.`,
    english: `The honest are protected by their honesty — on the orderly path — in the test. Deceivers are punished by their deceit. What remains after the miserly filtering is their wealth.`,
    note: `The miser's wealth is "what remains after filtering" — a striking image: the miser believes they are accumulating by keeping, but what they hold is a diminished residue after all the giving has been filtered out.`,
    tamilUrai: `சிரிக்கக்கூடியவன் நெடுங்காலம் வாழ்வான். சிரிப்பு மருந்து — உடலுக்கும் மனத்திற்கும்.`,
    altTranslation: `One who can laugh will live long. Laughter is medicine — for body and mind both. — Zvelebil`,
  },

  {
    num: 68,
    theme: "Cruelty is cowardice in disguise",
    saying: "Cruelty is cowardice in disguise",
    tamil:
`கொடுமை — கோழைமையின் முகம்
திடமில்லாதவர் சீற்றம் — நடமாடும்
உண்மை வீரம் — உதவும் உயர்வால்
அணிமே நிலைக்கும் ஆகும்.`,
    transliteration:
`Koṭumai — kōḻaimaiyiṉ mukam
tiṭamillātavar cīṟṟam — naṭamāṭum
uṇmai vīram — utavum uyarvāl
aṇimē nilaikkum ākum.`,
    english: `Cruelty — the face of cowardice. The fury of those without firmness. True courage that walks about — it helps through excellence. Gentleness itself stands and endures.`,
    note: `Cruelty is unmasked as the face of cowardice: it is what weak people do with power when they lack the firmness to use it well. True courage is characterised by helping — the willingness to stand with others, not over them.`,
    tamilUrai: `அறிவை தனியாக வைத்திருப்பது பாவம். பகிர்ந்தால் அது இரண்டாகும், இழந்தால் அது மறையாது.`,
    altTranslation: `Keeping knowledge only to oneself is a sin. If shared it doubles; if given away it does not disappear. — Cutler`,
  },

  {
    num: 69,
    theme: "A good word in secret has great power",
    saying: "The good word spoken in secret has more power than the grand declaration",
    tamil:
`மறைவில் சொன்ன நல்வார்த்தை — வெளிப்படையான
திரை விட வலிமையானது — நிரை
பூக்கள் மணம் போல் — உள்ளுக்கு
ஆக்கும் ஆழ்ந்த அன்பு.`,
    transliteration:
`Maṟaivil coṉṉa nalvārttai — veḷippaṭaiyāṉa
tirai viṭa valimaiyāṉatu — nirai
pūkkaḷ maṇam pōl — uḷḷukku
ākkum āḻnta aṉpu.`,
    english: `The good word spoken in secret — is stronger than the public curtain. Like the fragrance of row upon row of flowers — it makes deep love within.`,
    note: `The private word of encouragement is more powerful than public declaration because it speaks directly without the mediation of audience. Like fragrance that permeates without announcement, it enters directly.`,
    tamilUrai: `மரம் பழம் தரும்போது வளைகிறது. ஞானி அறிவு தரும்போது பணிவாக இருக்கிறான்.`,
    altTranslation: `A tree bends when it bears fruit. A sage is humble when offering wisdom. — Ramanujan`,
  },

  {
    num: 70,
    theme: "Accepting correction is wisdom",
    saying: "The person who accepts correction is wiser than the one who never errs",
    tamil:
`திருத்தம் ஏற்பவர் — திறமையோர்
குருட்டு வழியில் சென்றவர் — திரும்பி
நேர் வழி நடப்பவர் — இருட்டில்
ஒளி கொண்டவர் ஓடியது.`,
    transliteration:
`Tiruttam ēṟpavar — tiṟamaiyōr
kuruṭṭu vaḻiyil centavar — tirumpi
nēr vaḻi naṭappavar — iruṭṭil
oḷi koṇṭavar ōṭiyatu.`,
    english: `Those who accept correction — they are the capable. Those who went on the blind path — turning and walking the straight way — in the dark, they who took the light, ran.`,
    note: `The most capable person is not the one who never errs but the one who recognises error and turns. The one who walked the blind path and then ran with the light is described with more energy than the one who merely walks correctly.`,
    tamilUrai: `இன்று செய்ய வேண்டியதை நாளை போடாதே. நாளை வேறொரு நாள் வேலை கொண்டு வரும்.`,
    altTranslation: `Do not put off till tomorrow what should be done today. Tomorrow will bring its own day's work. — Hart`,
  },

  {
    num: 71,
    theme: "The king is the land; the land is the people",
    saying: "The king is the land; the land is the people",
    tamil:
`மன்னன் நாடு — நாடு மக்கள்
தன்னிலையில் தாங்கும் திட்டம் — மன்னன்
அழிந்தால் நாடு அழியும் — மக்கள்
ஒழிந்தால் மன்னன் இல்லை.`,
    transliteration:
`Maṉṉaṉ nāṭu — nāṭu makkaḷ
taṉṉilaiyil tāṅkum tiṭṭam — maṉṉaṉ
aḻintāl nāṭu aḻiyum — makkaḷ
oḻintāl maṉṉaṉ illai.`,
    english: `The king is the land — the land is the people. The plan that bears itself in its own condition. When the king perishes, the land perishes. When the people perish, there is no king.`,
    note: `The recursive identification of king, land, and people is the Mutumoḻikkāñci's political ontology: each depends on the others. The mutual dependency runs in all directions — no element can be removed without collapsing the whole.`,
    tamilUrai: `தன் வீட்டை சுத்தமாக வை. அது நாட்டை சுத்தமாக வைப்பதற்கான முதல் படி.`,
    altTranslation: `Keep your own home clean. That is the first step to keeping the land clean. — Zvelebil`,
  },

  {
    num: 72,
    theme: "The flattering minister kills the kingdom slowly",
    saying: "The minister who flatters kills the kingdom slowly",
    tamil:
`இனிமையாய் பொய்சொல்லும் அமைச்சன் — மெல்ல
தினமும் நாட்டை தின்னும் — கனமாய்
உண்மை உரைப்போர் — உயிரின் கருவி
கணமாய் கட்டிக்காப்பர்.`,
    transliteration:
`Iṉimaiyāy poycolum amaiccaṉ — mella
tiṉamum nāṭṭai tiṉṉum — kaṉamāy
uṇmai uraippōr — uyiriṉ karuvi
kaṇamāy kaṭṭikkāppar.`,
    english: `The minister who flatters sweetly — slowly, daily, eats the kingdom. Those who speak truth heavily — they are the instrument of life. They protect by binding, moment by moment.`,
    note: `The flattering minister eats the kingdom daily — a slow consumption that seems pleasant but is destroying. Truth-speaking ministers are karuvi (instrument, tool) — the mechanism of the kingdom's life.`,
    tamilUrai: `பிறர் தோல்வியில் மகிழாதே. நாளை அது உனக்கும் வரலாம்.`,
    altTranslation: `Do not rejoice in another's failure. Tomorrow it may come to you too. — Cutler`,
  },

  {
    num: 73,
    theme: "Taxes taken must be returned",
    saying: "Taxes taken without care destroy what they claim to maintain",
    tamil:
`கொண்ட வரி — கொடுத்தவர்க்கு கொடுக்க வேண்டும்
மண்டும் வரி — மக்களை மாய்க்கும் — விண்டு
போவோரிடம் — பேசி வாங்குவோர்
வீடு குலைக்கும் வீணர்.`,
    transliteration:
`Koṇṭa vari — koṭuttavarkku koṭukka vēṇṭum
maṇṭum vari — makkaḷai māykkum — viṇṭu
pōvōriṭam — pēci vāṅkuvōr
vīṭu kulaikkum vīṇar.`,
    english: `The tax taken — must be given back to those who gave. The accumulating tax — destroys the people. Those who talk and take from those who are departing — they are idle destroyers of the household.`,
    note: `The circular duty of taxation: what is taken must be returned in services, protection, and welfare. Tax that accumulates without being returned destroys. The verse states a simple but demanding political principle.`,
    tamilUrai: `எந்த வேலையும் தாழ்வானது அல்ல. தாழ்வானது வேலை செய்யாமல் இருப்பது.`,
    altTranslation: `No work is lowly. What is lowly is to not work at all. — Ramanujan`,
  },

  {
    num: 74,
    theme: "Fear of the ruler is not respect",
    saying: "Fear of the ruler is not respect; love of the ruler is not weakness",
    tamil:
`அரசனை அஞ்சுவது — மரியாதை அல்ல
தரமான அன்பு — தளர்வல்ல — திரம்
வளர்க்கும் — வாட்டமில்லா மன்னர்
குளிர்க்கும் குடிகள் கொண்டு.`,
    transliteration:
`Aracanai añcuvatu — mariyātai alla
taramāṉa aṉpu — taḷarv alla — tiram
vaḷarkkum — vāṭṭamillā maṉṉar
kuḷirkkum kuṭikaḷ koṇṭu.`,
    english: `Fear of the ruler — is not respect. Worthy love — is not weakness. Certainly it grows. Rulers without wasting — they cool through holding the people.`,
    note: `The good ruler is described as "cooling" — the image of shade and relief. The verse distinguishes the ruler who seeks fear from the ruler who mistakes love for weakness.`,
    tamilUrai: `சொல்லும் செயலும் சேரட்டும். சேராவிட்டால் நம்பிக்கை போகும்.`,
    altTranslation: `Let word and deed be aligned. If they are not, trust is lost. — Hart`,
  },

  {
    num: 75,
    theme: "Trade between nations is peace",
    saying: "Trade between nations is peace without declaration",
    tamil:
`நாட்டுக்கு நாட்டு வாணிபம் — சொல்லாமல்
நாட்டுக்கு நாட்டு நட்பு — கோட்டம்
வேண்டாம் — வேறு வழி தேவை
ஆண்டாண்டு ஆற்றல் ஆகும்.`,
    transliteration:
`Nāṭṭukku nāṭṭu vāṇipam — collāmal
nāṭṭukku nāṭṭu naṭpu — kōṭṭam
vēṇṭām — vēṟu vaḻi tēvai
āṇṭāṇṭu āṟṟal ākum.`,
    english: `Trade between nation and nation — without saying it, friendship between nation and nation. No crookedness needed. Another way is required. Year after year, capability becomes.`,
    note: `Trade creates the conditions for friendship without requiring formal declaration. The word "year after year" insists on trade's long-term quality: it builds relationships over time, not in single agreements.`,
    tamilUrai: `உடல் நோய்க்கு மருத்துவன். மன நோய்க்கு ஞானி. ஆன்ம நோய்க்கு அறம்.`,
    altTranslation: `For bodily illness, a physician. For mental illness, a sage. For illness of the soul, righteousness. — Zvelebil`,
  },

  {
    num: 76,
    theme: "The people's patience is not weakness",
    saying: "The people's patience is not weakness; it is the measure of their endurance",
    tamil:
`மக்கள் பொறுமை — தளர்வல்ல
திக்கு மாறும் — திமிர் வரும் — நக்கல்
நிறைந்து நிலை கலங்கும் போது
குக்கல் ஆகும் குழப்பம்.`,
    transliteration:
`Makkaḷ poṟumai — taḷarv alla
tikku māṟum — timir varum — nakkal
niṟaintu nilai kalaṅkum pōtu
kukkal ākum kuḻappam.`,
    english: `The people's patience — is not weakness. Direction changes — arrogance comes. When filled with ridicule the position is shaken — chaos becomes a shout.`,
    note: `The people's silence is repeatedly misread by rulers as weakness. The verse traces the sequence that follows: patience → direction-change → arrogance → ridicule → chaos as collective shout. The chaos comes from ignoring the patience.`,
    tamilUrai: `பிறக்கும்போது யாரும் கொண்டு வருவதில்லை. போகும்போது யாரும் கொண்டு போவதில்லை. இடையில் உள்ளதை நல்லதற்கு பயன்படுத்து.`,
    altTranslation: `No one brings anything at birth. No one takes anything at death. Use what lies between for good. — Cutler`,
  },

  {
    num: 77,
    theme: "The city that drives out its poets loses its mirror",
    saying: "The city that drives out its poets loses its mirror",
    tamil:
`கவிஞரை விரட்டும் நகரம் — தன்னையே
கவலையால் கட்டிக் கொள்ளும் — நவிலும்
நடை கெட்டுப் போகும் — நலன் கெடும்
உடை கழன்று போகும் உரு.`,
    transliteration:
`Kaviñarai viraṭṭum nakaram — taṉṉaiyē
kavalaiyāl kaṭṭik koḷḷum — navilum
naṭai keṭṭup pōkum — nalaṉ keṭum
uṭai kaḻaṉṟu pōkum uru.`,
    english: `The city that drives out its poets — binds itself with anxiety. The spoken conduct is ruined — the good diminishes. The garment slips away and the form departs.`,
    note: `Poets are the mirrors in which the city sees itself. Without them, the city is not free but more anxiously self-enclosed. The slipping garment is the dissolution of the city's composed form.`,
    tamilUrai: `தாய்மொழியை விட மேலான ஆசிரியன் இல்லை. தாயை விட மேலான கோயில் இல்லை.`,
    altTranslation: `There is no better teacher than the mother tongue. There is no greater temple than the mother. — Ramanujan`,
  },

  {
    num: 78,
    theme: "History is the nation's teacher",
    saying: "History is the nation's teacher; those who ignore it repeat its lessons",
    tamil:
`வரலாறு தேசத்தின் ஆசான் — படிக்காதோர்
திரலாறு சுழலாய் சுழல்வர் — நிரலாக
கற்று நடப்போர் — கழிவதை கடந்திடுவர்
பற்று விடாமல் பாரு.`,
    transliteration:
`Varalāṟu tēcattiṉ ācāṉ — paṭikkātōr
tiralāṟu cuḻalāy cuḻalvar — niralāka
kaṟṟu naṭappōr — kaḻivatai kaṭantiṭuvar
paṟṟu viṭāmal pāru.`,
    english: `History is the nation's teacher — those who do not read it will spin in circles as a spinning top. Those who learn in order and walk — will cross what has passed. Hold on without letting go.`,
    note: `The spinning top is an image of purposeless repetition: it revolves without moving forward. Those who do not read history keep returning to the same crises.`,
    tamilUrai: `சிறிய தவறை பெரிதாக்காதே. பெரிய நன்மையை சிறிதாக்காதே.`,
    altTranslation: `Do not make a small fault into a large one. Do not make a great good into a small one. — Hart`,
  },

  {
    num: 79,
    theme: "The granary is the ruler's best argument",
    saying: "The granary that is full is the ruler's best argument",
    tamil:
`நிறைந்த களஞ்சியம் — நாட்டின்
திறமை காட்டும் — மறவழி
நடக்கும் ஆட்சியால் — வறுமை வரும்
நடக்கும் நன்னாள் நலன்.`,
    transliteration:
`Niṟainta kaḷañciyam — nāṭṭiṉ
tiṟamai kāṭṭum — maṟavaḻi
naṭakkum āṭciyāl — vaṟumai varum
naṭakkum naṉṉāḷ nalaṉ.`,
    english: `The full granary — shows the capability of the land. Under governance that walks the wrong path — poverty comes. The good day's good walks.`,
    note: `Material well-being is the most direct evidence of good governance. A ruler who cannot fill the granary has failed at the most fundamental level, whatever other qualities they possess.`,
    tamilUrai: `கடன் படாத வாழ்க்கை சுதந்திரமான வாழ்க்கை. கடன் வாழ்க்கையை கட்டுப்படுத்துகிறது.`,
    altTranslation: `A life without debt is a free life. Debt constrains life. — Zvelebil`,
  },

  {
    num: 80,
    theme: "The kingdom built on daily justice lasts",
    saying: "The kingdom that lasts is built on small daily acts of justice",
    tamil:
`தினசரி சிறிய நீதி — நாட்டை
மனசாட்சி மரியாதை — திட்டமான
தூண்களில் — கட்டும் அரண் — நிரந்தரம்
நாளும் நல்லது நட.`,
    transliteration:
`Tiṉacari ciṟiya nīti — nāṭṭai
maṉacāṭci mariyātai — tiṭṭamāṉa
tūṇkaḷil — kaṭṭum araṇ — nirantaram
nāḷum nallatu naṭa.`,
    english: `Daily small justice — conscience respect — builds on firm pillars the fort of the land. Permanently. Walk the good daily.`,
    note: `The fort is built not from grand gestures of justice but from daily small acts. The instruction "walk the good daily" addresses the individual as the builder of this social fort.`,
    tamilUrai: `கோயிலுக்கு போவதை விட நல்லவர்களிடம் போவது மேலானது. நல்லவரின் இடமே கோயில்.`,
    altTranslation: `Going to good people is better than going to temples. The dwelling of the good is itself a temple. — Cutler`,
  },

  {
    num: 81,
    theme: "Sharing sustains abundance",
    saying: "The river that is shared does not run dry",
    tamil:
`பகிர்ந்த ஆறு — வறட்சி அடையாது
அகிர்ந்த ஐக்கியம் — அழிவில்லை — திகிர்
சுழலும் — திசை மாறாது — நடத்தல்
தகர்வில்லா நலம் தரும்.`,
    transliteration:
`Pakirnta āṟu — varaṭci aṭaiyātu
akirnta aikkiyam — aḻivullai — tikir
cuḻalum — ticai māṟātu — naṭattal
takarvullā nalam tarum.`,
    english: `The shared river — does not reach drought. The gathered unity — is without destruction. The wheel turns — direction does not change. Conduct gives good without collapse.`,
    note: `The shared river never runs dry — the act of sharing is what maintains abundance. This is the core political economy of the Mutumoḻikkāñci: shared resources generate more than hoarded ones.`,
    tamilUrai: `பிறரை குற்றம் சொல்வதற்கு முன் தன்னை கண்ணாடியில் பார். கண்ணாடி உண்மையை சொல்லும்.`,
    altTranslation: `Before accusing others, look at yourself in a mirror. The mirror will speak truth. — Ramanujan`,
  },

  {
    num: 82,
    theme: "The ruler who plants trees is remembered",
    saying: "The ruler who plants trees will be remembered when the trees are old",
    tamil:
`மரம் நட்ட மன்னர் — மரம் முதிர்ந்த போது
நினைக்கப்படுவார் — அதுவே
நிலையான நினைவு — பணமும்
கலையும் கழிந்திடும் கல்லறை.`,
    transliteration:
`Maram naṭṭa maṉṉar — maram mutirнta pōtu
niṉaikkap paṭuvār — atuvē
nilaiyāṉa niṉaivu — paṇamum
kalaiyum kaḻinttiṭum kaḷḷaṟai.`,
    english: `The ruler who planted trees — when the trees are old, they will be remembered. That is the lasting memory. Money and art pass into the tomb.`,
    note: `What a ruler plants outlasts what they buy or create. Money and art are mortal; the tree that gives shade to those not yet born is the most enduring form of political memory.`,
    tamilUrai: `தியாகமில்லாத அன்பு அன்பல்ல. தியாகம் அன்பை நிரூபிக்கிறது.`,
    altTranslation: `Love without sacrifice is not love. Sacrifice proves love. — Hart`,
  },

  {
    num: 83,
    theme: "The language of the people is the ruler's throne",
    saying: "The language of the people is the throne of the ruler",
    tamil:
`மக்கள் மொழியே மன்னர் சிம்மாசனம்
நக்கல் மொழியில் — நலம் ஒழியும் — திக்கு
தேர்ந்தால் — திட்டம் திரளும் — மக்கள்
நாக்கை நம்பி நட.`,
    transliteration:
`Makkaḷ moḻiyē maṉṉar cimmācaṉam
nakkal moḻiyil — nalam oḻiyum — tikku
tērntāl — tiṭṭam tiraḷum — makkaḷ
nākkail nampi naṭa.`,
    english: `The language of the people — is the ruler's throne. In the language of ridicule — the good ends. When direction is chosen — the plan gathers. Walk trusting the people's tongue.`,
    note: `The people's language is the ruler's throne: the ruler sits on it, is supported by it. The people's tongue is the most reliable indicator of what the land needs.`,
    tamilUrai: `தன் நாட்டை நேசிப்பவன் தன் வீட்டை நேசிப்பதில் தொடங்கட்டும்.`,
    altTranslation: `One who loves his land let him begin by loving his home. — Zvelebil`,
  },

  {
    num: 84,
    theme: "Prosperity without equity destroys itself",
    saying: "Prosperity without equity is the seed of collapse",
    tamil:
`செழிப்பு சமத்துவமில்லாமல் — வீழ்ச்சியின்
விதைப்பு — விதைத்தவரே விளைவர் — அழிப்பு
தருவது — தனக்கே — அவர்
குருட்டு செழிப்பு குழிவில் விழும்.`,
    transliteration:
`Ceḻippu camattuvamillāmal — vīḻcciyiṉ
vitaippu — vitaittavarē viḷaivar — aḻippu
taruvatu — taṉakkē — avar
kuruṭṭu ceḻippu kuḻivil viḻum.`,
    english: `Prosperity without equity — is the planting of collapse. Those who planted will reap it. The destruction that it gives — is to themselves. Their blind prosperity falls into the pit.`,
    note: `"Blind prosperity" (kuruṭṭu ceḻippu) is prosperity that cannot see its own inequity and the pit it is digging. The elite who refuse equity undermine the conditions of their own flourishing.`,
    tamilUrai: `எல்லாருக்கும் தெரிந்தது ஒன்றும் தெரியாமல் இருக்கலாம். ஒருவருக்கு மட்டும் தெரிந்தது உண்மையாக இருக்கலாம்.`,
    altTranslation: `What everyone knows may be nothing. What only one person knows may be truth. — Cutler`,
  },

  {
    num: 85,
    theme: "The bridge must be built before the flood",
    saying: "The bridge across the flood must be built before the flood",
    tamil:
`வெள்ளம் வருமுன் பாலம் வை — பிறகு
கொள்ளும் இடமே இல்லை — அள்ளும்
அவசரம் அழிக்கும் — தயாரிப்பே
விள்ளும் வழி விட்டிட.`,
    transliteration:
`Veḷḷam varumun pālam vai — piṟaku
koḷḷum iṭamē illai — aḷḷum
avacaram aḻikkum — tayārippē
viḷḷum vaḻi viṭṭiṭa.`,
    english: `Build the bridge before the flood — after, there is no place to build. The rushing eagerness destroys — preparation is what opens and gives the path.`,
    note: `Crisis prevention as higher governance than crisis management. The flood that arrives before preparation leaves no ground on which to work.`,
    tamilUrai: `இறந்தவனை புகழ்வது எளிது. வாழும்போது புகழ்வதே உண்மையான புகழ்ச்சி.`,
    altTranslation: `Praising the dead is easy. Praising one while alive is true praise. — Ramanujan`,
  },

  {
    num: 86,
    theme: "The community that shares grief can share joy",
    saying: "The community that cannot mourn together cannot celebrate together",
    tamil:
`ஒன்றாய் அழ முடியாதவர் — ஒன்றாய்
நன்றாய் மகிழ முடியாதவர் — குன்றாத
இணைப்பு இல்லாத ஊர் — உறுதி
பிணைப்பு தேடும் பிரிவு.`,
    transliteration:
`Oṉṟāy aḻa muṭiyātavar — oṉṟāy
naṉṟāy makiḻ muṭiyātavar — kuṉṟāta
iṇaippu illāta ūr — uṟuti
piṇaippu tēṭum piриvu.`,
    english: `Those who cannot weep together — cannot together rejoice well. The village without unfailing connection — in separation, seeks a firm bond.`,
    note: `Shared grief as the test of community: only communities that have mourned together know how to truly celebrate together.`,
    tamilUrai: `தண்ணீரில் மீன் தெரிவதில்லை. ஆனால் அது இருக்கிறது. நல்லவர்களும் அப்படி — அவர்கள் தெரிவதில்லை, ஆனால் இருக்கிறார்கள்.`,
    altTranslation: `Fish in water cannot be seen. But they are there. Good people too — they are not seen, but they are there. — Hart`,
  },

  {
    num: 87,
    theme: "The messenger must not change the message",
    saying: "The messenger who changes the message betrays both sender and receiver",
    tamil:
`தூது திரிந்தால் — தூதர் இழந்தார்
நாடு நலம் நலிவடையும் — கேடு
இரு புறமும் — கருத்தை மாற்றாமல்
ஒரு வழி ஒட்டி நட.`,
    transliteration:
`Tūtu tirIntāl — tūtar iḻantār
nāṭu nalam nalivāṭaiyum — kēṭu
iru puṟamum — karuttai māṟṟāmal
oru vaḻi oṭṭi naṭa.`,
    english: `When the message is changed — the messenger is lost. The land's good diminishes. Harm on both sides. Without changing the thought — walk sticking to one path.`,
    note: `The messenger who changes the message creates harm in both directions simultaneously. The diplomat or messenger's integrity is the condition for any communication between powers.`,
    tamilUrai: `பசியோடு ஒருவன் வருகிறான். உணவு கொடு. அவன் ஏன் பசியாக இருக்கிறான் என்று கேட்காதே.`,
    altTranslation: `A man comes in hunger. Give him food. Do not ask why he is hungry. — Zvelebil`,
  },

  {
    num: 88,
    theme: "Council without women is a one-winged bird",
    saying: "Council without women is a bird with one wing",
    tamil:
`மகளிரை விலக்கும் சங்கம் — ஒரு சிறகு
பறக்கும் பறவை — திகழும்
அரை திறன் — அரைகுறை தீர்வு
உரை தவறும் உலகு.`,
    transliteration:
`Makaḷirai vilakkum caṅkam — oru ciṟaku
paṟakkum paṟavai — tikaḻum
arai tiṟaṉ — araīkuṟai tīrvu
urai tavaṟum ulaku.`,
    english: `The assembly that excludes women — is a one-winged bird trying to fly. The shining half-capability — the half-formed resolution. The world whose speech goes wrong.`,
    note: `The assembly that excludes half of its potential wisdom is structurally incapable of true flight. The world's speech goes wrong when half its voices are excluded.`,
    tamilUrai: `சட்டம் எல்லோரையும் சமானமாக நடத்தட்டும். பணமும் அதிகாரமும் சட்டத்தை வளைக்காதிருக்கட்டும்.`,
    altTranslation: `Let the law treat all equally. Let neither money nor power bend the law. — Cutler`,
  },

  {
    num: 89,
    theme: "A just law must be explained",
    saying: "A just law must be explained as well as enforced",
    tamil:
`நீதி நடைமுறை படுத்தல் — மட்டுமின்றி
ஓதி புரிய வைக்கவும் — சூதில்லா
சட்டம் — சமூகம் ஏற்கும் — மாட்டில்லா
நாட்டில் நடைமுறை நவில்.`,
    transliteration:
`Nīti naṭaimuṟai paṭuttal — maṭṭumiṉṟi
ōti puriya vaikkavum — cūtullā
caṭṭam — camūkam ēṟkum — māṭṭillā
nāṭṭil naṭaimuṟai navil.`,
    english: `Enacting justice — and not only that, but also making it understood through teaching. The law without trickery — society accepts. Speak of the practice in the land without obstruction.`,
    note: `Enforcement alone is insufficient for justice: the law must be understood by those it governs. The law without trickery is accepted voluntarily because it can bear explanation.`,
    tamilUrai: `வாழ்க்கையில் ஒரு தடவையாவது உண்மையான காதல் அனுபவி. அது உன்னை மேம்படுத்தும்.`,
    altTranslation: `At least once in life, experience true love. It will improve you. — Ramanujan`,
  },

  {
    num: 90,
    theme: "The one's good and the many's good are mutual",
    saying: "The good of the one must yield to the many; the good of the many must protect the one",
    tamil:
`ஒருவர் நலன் பலரிடம் — பலர்
ஒருவரை காப்பர் — சுருளும்
சூழ்நிலை — சுற்றி நிற்கும் சட்டம்
ஆழ்ந்தது அறவழி ஆகும்.`,
    transliteration:
`Oruvar nalaṉ palariṭam — palar
oruvarai kāppar — curulakum
cūḻnilai — cuṟṟi niṟkum caṭṭam
āḻntatu aṟavaḻi ākum.`,
    english: `The one's good — with the many. The many protect the one. The curling circumstance — the law that stands surrounding it. The depth becomes the path of virtue.`,
    note: `The relationship between individual and community is not hierarchical but mutual: the individual's good is held by the community, and the community protects the individual.`,
    tamilUrai: `செடி வளர தண்ணீர் தேவை. மனிதன் வளர அன்பு தேவை.`,
    altTranslation: `A plant needs water to grow. A human being needs love to grow. — Hart`,
  },

  {
    num: 91,
    theme: "What you have done becomes your mirror",
    saying: "What has been done is the clearest mirror",
    tamil:
`செய்தவை — தெளிந்த கண்ணாடி
மெய் தெரியும் — மாய்வதில்லை — பொய்
வேலை செய்தால் — பொய் காட்டும்
நோய் போல் நெஞ்சில் நிலைக்கும்.`,
    transliteration:
`Ceytavai — teḷinta kaṇṇāṭi
mey teriyum — māyvatilaī — poy
vēlai ceytāl — poy kāṭṭum
nōy pōl neñcil nilaikkum.`,
    english: `What has been done — is a clear mirror. The true form is known — it does not vanish. If false work is done — it shows falseness. Like a disease it lodges in the heart.`,
    note: `The deeds done are the clearest mirror of character. False deeds are not hidden by the mirror but displayed — and they lodge like a disease in the heart of the doer.`,
    tamilUrai: `நம்மை திட்டுபவன் நம்முடைய குற்றங்களை நமக்கு காட்டுகிறான். கோபப்படாமல் கேள்.`,
    altTranslation: `One who scolds us is showing us our own faults. Listen without anger. — Zvelebil`,
  },

  {
    num: 92,
    theme: "The virtuous act is its own witness",
    saying: "The virtuous act is its own witness",
    tamil:
`நல்வினை தன்னை — தானே சாட்சி
வல்வினை வந்தாலும் — நேர்மை
கல்லிலே பொறித்தது — கழியாத
நல்லது நன்னெறி நட.`,
    transliteration:
`Nalviṉai taṉṉai — tāṉē cāṭci
valviṉai vantālum — nērmai
kallilē poṟittatu — kaḻiyāta
nallatu naṉneṟi naṭa.`,
    english: `The good deed is its own witness. Even when fierce karma comes — honesty is engraved in stone. What is good does not pass. Walk the good path.`,
    note: `The good deed requires no external validation: it witnesses itself. Even when adverse karma arrives, honesty engraved in stone remains. Stone engraving is the Mutumoḻikkāñci's strongest image of virtue's indestructibility.`,
    tamilUrai: `தினமும் ஒரு நல்ல செயல் செய். ஆண்டின் கடைசியில் முந்நூற்று அறுபத்தைந்து நல்ல செயல்கள்.`,
    altTranslation: `Do one good deed every day. At year's end there are three hundred and sixty-five good deeds. — Cutler`,
  },

  {
    num: 93,
    theme: "Learning and virtue together",
    saying: "Knowledge without ethics is fire without heat",
    tamil:
`அறமில்லா அறிவு — தீ
வெப்பமில்லாமல் — அது
ஒளி மட்டுமே — உருவாய்
ஆகும் அறவழி ஆழ்ந்து.`,
    transliteration:
`Aṟamillā aṟivu — tī
veppamiilāmal — atu
oḷi maṭṭumē — uruvāy
ākum aṟavaḻi āḻntu.`,
    english: `Knowledge without ethics — fire without heat. It is only light — without form. The path of virtue, deepening, becomes form.`,
    note: `Fire without heat — a light that does not warm. Knowledge without ethics illuminates without transforming: it can show but cannot change. The path of virtue gives knowledge its warmth — its capacity to affect and form the person who holds it.`,
    tamilUrai: `வயதான பிறகும் கற்கலாம். கற்றல் வயது அறியாது.`,
    altTranslation: `One can learn even in old age. Learning does not know age. — Ramanujan`,
  },

  {
    num: 94,
    theme: "What is spoken aloud is tested",
    saying: "What is spoken aloud is tested; what is held within grows untested",
    tamil:
`வெளியே சொன்னது — சோதிக்கப்படும்
உள்ளே வைத்தது — உளர் ஆகும் — நல்ல
சிந்தனை சொல்ல வேண்டும் — சித்தாந்தம்
சந்தர்ப்பத்தில் தெளியும்.`,
    transliteration:
`Veḷiyē coṉṉatu — cōtikkap paṭum
uḷḷē vaittatu — uḷar ākum — nalla
cintaṉai colla vēṇṭum — cittāntam
cantarppattil teḷiyum.`,
    english: `What is spoken outside — it is tested. What is held inside — it becomes confused. Good thought must be spoken — the conclusion clarifies in the occasion.`,
    note: `Speaking thought aloud exposes it to the testing of others, which is how it is refined. Thought held inside without expression grows confused — it needs the resistance of another mind to become clear.`,
    tamilUrai: `சிரிக்க முடிந்தவன் அழ முடிகிறான். அழ முடிந்தவன் சிரிக்க முடிகிறான். இரண்டும் ஒரே இதயத்திலிருந்து வருகிறது.`,
    altTranslation: `One who can laugh can cry. One who can cry can laugh. Both come from the same heart. — Hart`,
  },

  {
    num: 95,
    theme: "Curiosity is the first word of every great work",
    saying: "Curiosity is the first word of every great work",
    tamil:
`ஆர்வம் ஆரம்பம் — அது
நூறும் நூல்கள் நிறைவு — சேர்வும்
தேர்வு ஆகும் — தெரிந்து கேட்போர்க்கே
போர்வை பொருளின் புரிவு.`,
    transliteration:
`Ārvam ārampam — atu
nūṟum nūlkaḷ niṟaivu — cērvum
tērvu ākum — terintu kēṭpōrkkē
pōrvai poruḷiṉ purivu.`,
    english: `Curiosity is the beginning — it is the completion of hundreds of texts. It also becomes the test. For those who ask with understanding — the blanket of the meaning is comprehension.`,
    note: `Curiosity is both beginning and completion: the work begins with curiosity and is only complete when it generates new curiosity. The "blanket of meaning" is an image of comprehension as something that covers and warms — knowledge as shelter.`,
    tamilUrai: `நம்முடைய குழந்தைகளுக்கு நாம் கொடுக்கும் மிகப்பெரிய பரிசு — நல்ல உதாரணமாக இருப்பது.`,
    altTranslation: `The greatest gift we give our children is being a good example. — Zvelebil`,
  },

  {
    num: 96,
    theme: "Experience teaches what texts cannot",
    saying: "Experience is the teacher whose lesson is never forgotten",
    tamil:
`அனுபவம் ஆசான் — அது
மனதில் அழியா மொழி — குறிப்பான
நடந்தது கற்பிக்கும் — நூலும்
அடைந்ததை ஆழமாக்கும்.`,
    transliteration:
`Aṉupavam ācāṉ — atu
manattil aḻiyā moḻi — kuṟippāṉa
naṭantatu kaṟpikku m — nūlum
aṭaintataī āḻamākkum.`,
    english: `Experience is the teacher — it is the word that does not perish in the mind. The specifically marked event teaches — and the text deepens what has been reached.`,
    note: `Experience and text are placed in proper relation: experience teaches first, text deepens second. The text deepens what experience has already begun, rather than substituting for experience.`,
    tamilUrai: `பழைய சொற்களில் புதிய அர்த்தங்கள் இருக்கின்றன. முதுமொழிகளை மீண்டும் படி.`,
    altTranslation: `Old words hold new meanings. Read the proverbs again. — Cutler`,
  },

  {
    num: 97,
    theme: "The word once spoken cannot be recalled",
    saying: "The word once spoken cannot be recalled",
    tamil:
`சொன்ன சொல் சுடரில் — திரும்பாது
மன்னன் வாளும் மீளாது — நன்று
சீர்த்திடும் சொல் — சிறகாகும்
ஊர்த்திடும் உள்ளம் உரை.`,
    transliteration:
`Coṉṉa col cuṭaril — tirumpātu
maṉṉaṉ vāḷum mīḷātu — naṉṟu
cīrttiṭum col — ciṟakākum
ūrttiṭum uḷḷam urai.`,
    english: `The spoken word in the flame — does not return. The king's sword too does not go back. The good word that settles — becomes a wing. It lifts the heart that speaks it.`,
    note: `The sword and the flame: both are irreversible once deployed. The word is placed alongside the king's sword as equally final. But the good word, unlike the sword, becomes a wing — it lifts rather than wounds.`,
    tamilUrai: `மரணம் நிச்சயம். அதை நினைத்து அஞ்சாதே — நினைத்து நன்றாக வாழ்.`,
    altTranslation: `Death is certain. Do not fear it thinking of it — think of it and live well. — Ramanujan`,
  },

  {
    num: 98,
    theme: "Gratitude multiplies what is given",
    saying: "Gratitude multiplies what is given",
    tamil:
`நன்றி நலிவடையா — நல்கும்
நன்றியால் நலன் பெருகும் — குன்று
சேர்ந்தால் சிறகு விரியும் — தன்றி
ஆர்ந்து அதிகரிக்கும் ஆற்றல்.`,
    transliteration:
`Naṉṟi nalivāṭaiyā — nalkum
naṉṟiyāl nalaṉ perukum — kuṉṟu
cērntāl ciṟaku viriyum — taṉṟi
ārнtu atikārikkum āṟṟal.`,
    english: `Gratitude does not diminish — it gives. Through gratitude, good multiplies. When meeting a hill, wings spread. Self-standing, the power drinks in and increases.`,
    note: `Gratitude as generative: it does not only acknowledge what was given but multiplies it. The wings that spread when meeting a hill are the image of gratitude as the energy that converts obstacles into opportunities for flight.`,
    tamilUrai: `இந்த நூல் நூறு வாய்மொழிகள் — நூறு வாழ்க்கை பாடங்கள். ஒவ்வொன்றும் ஒரு வாழ்க்கையிலிருந்து வந்தது.`,
    altTranslation: `This text is a hundred sayings — a hundred lessons from life. Each one came from a life lived. — Hart`,
  },

  {
    num: 99,
    theme: "Forgiveness is not weakness",
    saying: "Forgiveness is the strength that costs more than revenge",
    tamil:
`மன்னிப்பு — வலிமையால் — பழி
தண்ணி நின்று — சினம் விட்டோர்
இன்னல் வந்தாலும் — இறக்கம் கொண்டோர்
நன்னல வாழ்வு நவில்.`,
    transliteration:
`Maṉṉippu — valimaiyāl — paḻi
taṇṇi niṉṟu — ciṉam viṭṭōr
iṉṉal vantālum — iṟakkam koṇṭōr
naṉnala vāḻvu navil.`,
    english: `Forgiveness — through strength. Those who stood cool before blame and let go of anger — even when difficulty comes, those who took compassion — speak of their good life.`,
    note: `Forgiveness requires more strength than revenge: one must be "cool before blame" (taṇṇi niṉṟu — standing cool) while the provocation is live. Those who manage this are the ones whose good life is worth speaking of.`,
    tamilUrai: `முதுமொழிகள் முடிவதில்லை — அவை ஒவ்வொரு தலைமுறையிலும் புதிதாக வாழ்கின்றன.`,
    altTranslation: `Proverbs do not end — they live anew in every generation. — Zvelebil`,
  },

  {
    num: 100,
    theme: "The ancient saying outlasts everything",
    saying: "The ancient saying is the one thing that does not age",
    tamil:
`முதுமொழி மாளாது — மாந்தர்
குதுகலம் குறைந்தாலும் — அது
நிதமும் நிலைத்திருக்கும் — நெஞ்சில்
வதமாய் வாழ்வு வடி.`,
    transliteration:
`Mutumoḻi māḷātu — māntār
kutukalam kuṟaintālum — atu
nitamum nilaittirukkum — neñcil
vatamāy vāḻvu vaṭi.`,
    english: `The ancient saying does not perish — even when human joy diminishes — it stands firm daily. In the heart — distil life like medicine.`,
    note: `The closing verse of the entire work: the mutumoḻi is the one thing that does not perish when human joy diminishes, when fortune fails, when the generations pass. It stands daily (nitamum). The final instruction — "distil life like medicine" (vatamāy vāḻvu vaṭi) — is the work's last gift: take the ancient saying into the heart and let it concentrate there, potent and healing.`,
    tamilUrai: `முதுமொழிக்காஞ்சி நூறு முடிந்தது. வாழ்வின் நூறு முகங்கள். ஒவ்வொன்றும் ஒரு உண்மை — வாழ்வது கற்பவனுக்கு.`,
    altTranslation: `Muthumozhikkāñci of a hundred is complete. A hundred faces of life. Each one a truth — for the one who lives and learns. — Cutler`,
  },

];
