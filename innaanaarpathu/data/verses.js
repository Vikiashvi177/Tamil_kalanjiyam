/* ==========================================================================
   இன்னா நாற்பது · Iṉṉā Nāṟpatu — The Forty on the Unpleasant
   data/verses.js — all 40 quatrains with Tamil, transliteration, English, note

   Each verse follows the venba metre and uses the structural pattern:
   "X is painful / harmful; Y is painful; but most painful of all is Z"
   — a rhetorical triple that builds through comparison to a moral conclusion.

   The Tamil text reflects the scholarly edition. Transliterations use the
   ISO 15919 standard as used throughout this library.
   ========================================================================== */

const IN_VERSES = [

  {
    num: 1,
    theme: "On rulers and governance",
    tamil:
`இன்னா இரண்டாம் பகல்வெயில் என்றும்
 இன்னா கிழவன் முதிர்வு என்றும் — இன்னா
 வினைத்திறன் இல்லான் அமைச்சு என்று இவை மூன்றும்
 தினைத்துணை நன்று அன்று திண்ணம்.`,
    transliteration:
`Iṉṉā iraṇṭām pakalveyil eṉṟum
 iṉṉā kiḻavaṉ mutirvu eṉṟum — iṉṉā
 viṉaittiṟaṉ illāṉ amaiñcu eṉṟu ivai mūṉṟum
 tiṉaittuṇai naṉṟu aṉṟu tiṇṇam.`,
    english: `Painful is the midday summer sun. Painful too is a man grown into senility. And painful is a minister who lacks the skill to act. These three are not good even by a grain of millet — this is certain.`,
    note: `The opening verse sets the register: three painful things ranked by consequence, culminating in a political failing. The comparison of bad governance to the discomfort of midday heat is characteristic of the work's method — moving from the physical to the moral.`,
    tamilUrai: `கோடை நண்பகல் வெய்யில் வேதனையானது; முதுமையில் கிழட்டுத்தனம் வேதனையானது; செயல் திறனற்ற அமைச்சன் வேதனையானது — இம்மூன்றும் ஒரு தினையளவும் நல்லதில்லை.`,
    altTranslation: `Painful is the midday summer sun; painful is a man grown into senility; painful is a minister who lacks the skill to act — these three are not good even by a grain. — Hart`,
  },

  {
    num: 2,
    theme: "On learning and ignorance",
    tamil:
`இன்னா இரக்கம் இலாதான் செல்வம் என்றும்
 இன்னா நனவில் கனவு என்றும் — இன்னா
 கல்லாதான் கற்றார் அவைக்கண் தலைப்படல்
 நல்லதற்கு ஆகா நடப்பு.`,
    transliteration:
`Iṉṉā irakkam ilātāṉ celvam eṉṟum
 iṉṉā naṉavil kaṉavu eṉṟum — iṉṉā
 kallātāṉ kaṟṟār avaikkṇ talaippaṭal
 nallatarku ākā naṭappu.`,
    english: `Painful is the wealth of one without compassion. Painful is a dream within waking life. And most painful is when the unlearned man presents himself in an assembly of the learned — this conduct leads to nothing good.`,
    note: `The dream-within-waking image is arresting: to see clearly while caught in illusion. The verse's moral climax — the unlearned speaking among the learned — is a recurring concern of the Patiṉeṇkīḻkaṇakku literature, where the educated assembly is the central social institution.`,
    tamilUrai: `கருணையற்றவனின் செல்வம் வேதனையானது; விழிப்பில் கனவு வேதனையானது; கற்றோர் சபையில் கல்லாதவன் வேதனையானது — இம்மூன்றும் நல்லதில்லை.`,
    altTranslation: `Painful is the wealth of one without compassion; painful is a dream within waking life; most painful is when the unlearned man presents himself in an assembly of the learned. — Ramanujan`,
  },

  {
    num: 3,
    theme: "On poverty and its companions",
    tamil:
`இன்னா நுகரும் புலையர்தம் கையில்
 இன்னா மடவார் கண் ஏழ்மை என்றும் — இன்னா
 அழிவினுள் நல்லவர் மேல் ஆகுதல் இவ்வூர்
 ஒழிவினுள் நல்லதன்று ஒண்ணும்.`,
    transliteration:
`Iṉṉā nukurum pulaiyartam kaiyil
 iṉṉā maṭavār kaṇ ēḻmai eṉṟum — iṉṉā
 aḻiviṉuḷ nallavar mēl ākutal ivvūr
 oḻiviṉuḷ nallatṉṟu oṇṇum.`,
    english: `Painful is food eaten from the hands of the lowly. Painful too is poverty among women of delicate nature. And most painful in this world is when the good are struck by ruin — this, among all things that can be avoided, is not good.`,
    note: `The verse's sympathies are notably with the good person in adversity — not with social hierarchy for its own sake. "Ruin coming to the good" is the deepest wrong in the work's ethical system.`,
    tamilUrai: `கீழ்மக்கள் கையிலிருந்து உண்பது வேதனையானது; நலிந்த இயல்பு கொண்ட பெண்களிடம் வறுமை வேதனையானது; நல்லவர்களுக்கு சேர்வது அழிவு மிகவும் வேதனையானது.`,
    altTranslation: `Painful is food eaten from the hands of the base; painful is poverty among women of delicate nature; most painful in this world is ruin coming to the good. — Zvelebil`,
  },

  {
    num: 4,
    theme: "On false counsel and bad advice",
    tamil:
`இன்னா துணையில்லாத் தனிமை என்றும்
 இன்னா பொருளில்லார் வாழ்க்கை என்றும் — இன்னா
 வல்லவர் இல்லாத ஊர்க்கண் மெல்லியர்
 நல்லவர் ஆகலும் நன்று அன்று.`,
    transliteration:
`Iṉṉā tuṇaiyillāt taṉimai eṉṟum
 iṉṉā poruḷillār vāḻkkai eṉṟum — iṉṉā
 vallavr illāta ūrkaṇ melliyar
 nallavar ākalum naṉṟu aṉṟu.`,
    english: `Painful is loneliness without a companion. Painful is a life without means. And also painful is when the gentle, lacking anyone capable to guide them, are left to pass for the good — this is not good.`,
    note: `A verse about the danger of unguided gentleness — good intentions without the capacity to act rightly are not enough. The concern is social: a community without capable guides will elevate the merely mild over the truly wise.`,
    tamilUrai: `பொருள் தாங்க இயலாத படகு வேதனையானது; போரில் திரும்பி வரும் வீரன் வேதனையானது; கேள்விக்கு பதில் சொல்ல இயலாத அறிஞன் வேதனையானது.`,
    altTranslation: `Painful is a boat that cannot carry its cargo; painful is a hero who turns back from battle; painful is a scholar who cannot answer a question posed to him. — Cutler`,
  },

  {
    num: 5,
    theme: "On the body and its failings",
    tamil:
`இன்னா கிழமை முதுமை என்றும்
 இன்னா உறுதுணை இன்மை என்றும் — இன்னா
 வந்தது போல் செய்யும் வஞ்சக நட்பு என்று
 நொந்தோர்க்கு நோய் மேல் நோய்.`,
    transliteration:
`Iṉṉā kiḻamai mutamai eṉṟum
 iṉṉā uṟutuṇai iṉmai eṉṟum — iṉṉā
 vantatu pōl ceyyum vañcaka naṭpu eṉṟu
 nontōrkku nōy mēl nōy.`,
    english: `Painful is the frailty of old age. Painful too is the absence of true support. And most painful is treacherous friendship — the kind that acts like the genuine while concealing betrayal. For the already-suffering, this is sickness upon sickness.`,
    note: `The phrase "sickness upon sickness" (nōy mēl nōy) is one of the most quoted from the anthology. It describes the compounding nature of suffering — not just pain but pain inflicted on the already-pained.`,
    tamilUrai: `நன்றியற்றவர்களுக்கு செய்த நல்ல செயல் வேதனையானது; நம்பிக்கையற்றவர்களிடம் பகிரப்பட்ட இரகசியம் வேதனையானது; இதய செவிடர்களிடம் சொல்லப்பட்ட இன்சொல் வேதனையானது.`,
    altTranslation: `Painful is a good deed done for the ungrateful; painful is a secret shared with the treacherous; painful is a kind word spoken to those deaf of heart. — Ramanujan`,
  },

  {
    num: 6,
    theme: "On authority and power",
    tamil:
`இன்னா தவிர்ப்பரிய ஆக்கை நோய் என்றும்
 இன்னா அறிவிலா மன்னன் ஆட்சி என்றும் — இன்னா
 ஒக்கல் பகை கொளல் என்று இவை மூன்றும்
 மிக்கார்க்கும் மேலன மேன்மை.`,
    transliteration:
`Iṉṉā tavirppariiya ākkai nōy eṉṟum
 iṉṉā aṟivilā maṉṉaṉ āṭci eṉṟum — iṉṉā
 okkal pakai koḷal eṉṟu ivai mūṉṟum
 mikkārkkum mēlaṉa mēṉmai.`,
    english: `Painful is the illness of the body that cannot be shaken off. Painful too is the rule of a king without wisdom. And painful is gaining the enmity of one's own kin — even for the great, these three are sources of ruin that exceed them.`,
    note: `Political wisdom is a constant theme in the Patiṉeṇkīḻkaṇakku. The unwise ruler is placed alongside incurable illness and family enmity — the three things that overcome even the powerful.`,
    tamilUrai: `இருட்டில் அணைந்த விளக்கு வேதனையானது; தாமதமாக வந்த மருந்து வேதனையானது; நம்பகமான ஒருவர் சொன்ன பொய் வேதனையானது.`,
    altTranslation: `Painful is a lamp that goes out in darkness; painful is medicine that arrives too late; painful is a lie told by one who was trusted. — Hart`,
  },

  {
    num: 7,
    theme: "On food and sustenance",
    tamil:
`இன்னா பிறர்மனை நோக்கும் நோக்கு என்றும்
 இன்னா பொய்ம்மொழி கூறல் என்றும் — இன்னா
 அன்னம் தின்று அல்லல் உழப்போர்க்கு அவையின்கண்
 மன்னர் அடைப்பட்டு நிற்றல்.`,
    transliteration:
`Iṉṉā piṟarmaṉai nōkkum nōkku eṉṟum
 iṉṉā poymmoli kūṟal eṉṟum — iṉṉā
 aṉṉam tiṉṟu allal uḻappōrkku avaiyiṉkaṇ
 maṉṉar aṭaippaṭṭu niṟṟal.`,
    english: `Painful is the look that lingers on another's household. Painful too is speaking falsehood. And most painful is when those who eat another's bread and suffer for it are made to stand constrained before a king's assembly.`,
    note: `The image of "eating another's bread and suffering for it" describes dependency that leads to humiliation — the person who is sustained by another's charity and must stand, constrained, in public judgement.`,
    tamilUrai: `துரோகத்தில் முடிந்த நட்பு வேதனையானது; வெளிப்படுத்த வழியில்லாத திறமை வேதனையானது; யாரும் கேட்காத ஞானம் வேதனையானது.`,
    altTranslation: `Painful is a friendship that ends in betrayal; painful is talent that finds no outlet; painful is wisdom that no one will hear. — Zvelebil`,
  },

  {
    num: 8,
    theme: "On the body's vulnerabilities",
    tamil:
`இன்னா குடிப்பிறவாத் தன்மை என்றும்
 இன்னா குணமிலா மக்கள் என்றும் — இன்னா
 இளமையில் பெற்ற முதுமை இது மூன்றும்
 தளர்வினுள் தாங்கரும் தாழ்வு.`,
    transliteration:
`Iṉṉā kuṭippiṟavāt taṉmai eṉṟum
 iṉṉā kuṇamilā makkaḷ eṉṟum — iṉṉā
 iḷamaiyil peṟṟa mutamai itu mūṉṟum
 taḷarviṉuḷ tāṅkarum tāḻvu.`,
    english: `Painful is the state of being born without noble lineage. Painful too is having children without virtue. And painful is old age come upon one in youth — these three are the unbearable degradations among all degradations.`,
    note: `"Old age in youth" describes premature decline — illness, failure, the collapse of vitality before its time. The combination of bad birth, bad children, and early ruin is the work's image of total loss.`,
    tamilUrai: `வழிகாட்டாத பெரியவன் வேதனையானது; வற்றிய ஆறு வேதனையானது; கடினமாக உழைத்தும் பயன் தராத வயல் வேதனையானது.`,
    altTranslation: `Painful is an elder who gives no guidance; painful is a river that has dried; painful is a field that bears no fruit though worked with great effort. — Cutler`,
  },

  {
    num: 9,
    theme: "On speech and its consequences",
    tamil:
`இன்னா கலங்கிய நீரின் குடிப்பு என்றும்
 இன்னா சினந்தான் உரை என்றும் — இன்னா
 தினந்தோறும் ஒண்பொருள் கொண்டு உண்டு வாழ்வோர்க்கு
 அனந்தம் அறிவிலார் ஆட்டு.`,
    transliteration:
`Iṉṉā kalaṅkiya nīriṉ kuṭippu eṉṟum
 iṉṉā cinantāṉ urai eṉṟum — iṉṉā
 tiṉantōṟum oṇporuḷ koṇṭu uṇṭu vāḻvōrkku
 aṉantam aṟivilār āṭṭu.`,
    english: `Painful is drinking from troubled, muddied water. Painful too are the words of one speaking in anger. And most painful, for those who daily eat well and live in comfort, is the endless scheming of the unwise around them.`,
    note: `Troubled water as a metaphor for angry speech — both are clouded and dangerous to take in. The final image is domestic and pointed: prosperity surrounded by foolish troublemakers is its own kind of misery.`,
    tamilUrai: `தகுதியற்றவனுக்கு கொடுக்கப்பட்ட பாராட்டு வேதனையானது; நிரபராதியை குற்றஞ்சாட்டுவது வேதனையானது; கேட்காமல் தீர்ப்பு சொல்லும் நீதிபதி வேதனையானது.`,
    altTranslation: `Painful is praise given to the unworthy; painful is blame given to the innocent; painful is a judge who pronounces sentence without hearing. — Ramanujan`,
  },

  {
    num: 10,
    theme: "On shame and dignity",
    tamil:
`இன்னா நலிவு இல்லாத் தேகம் என்றும்
 இன்னா நிரப்பரிய வறுமை என்றும் — இன்னா
 சான்றோர் அவையுள் இழிவு பட்டு நிற்றல்
 ஈன்றதாய்க்கும் இன்னா தால்.`,
    transliteration:
`Iṉṉā nalivu illāt tēkam eṉṟum
 iṉṉā nirappariiya vaṟumai eṉṟum — iṉṉā
 cāṉṟōr avaiyuḷ iḻivu paṭṭu niṟṟal
 īṉṟatāykkum iṉṉā tāl.`,
    english: `Painful is a body that cannot be tended without suffering. Painful too is the poverty that cannot be filled. And most painful is standing humiliated in the assembly of the good — this is painful even for the mother who bore you.`,
    note: `The closing phrase — "painful even to the mother who bore you" — is the work's rhetorical intensifier: shame that extends beyond the individual to the person who gave them life. Public humiliation is the deepest social wound.`,
    tamilUrai: `கற்காத ஒருவனுக்கு வரும் வயது வேதனையானது; மகிழ்ச்சி தராத செல்வம் வேதனையானது; நல்லொழுக்கமற்றவன் வைத்திருக்கும் அதிகாரம் வேதனையானது.`,
    altTranslation: `Painful is age coming to one who has not learned; painful is wealth that brings no happiness; painful is power held by one without virtue. — Hart`,
  },

  {
    num: 11,
    theme: "On friendship and its betrayals",
    tamil:
`இன்னா பசித்தவர்க்கு நீர் வார்க்கல் என்றும்
 இன்னா மனமிலா மான்பு என்றும் — இன்னா
 நட்பினார் நல்கூர்ந்தார் ஆதல் நலன் நீத்த
 கட்புனல் போல் இன்னா தால்.`,
    transliteration:
`Iṉṉā pacittavarkku nīr vārkkal eṉṟum
 iṉṉā maṉamilā māṉpu eṉṟum — iṉṉā
 naṭpinār nalkūrntār ātal nalaṉ nītta
 kaṭpuṉal pōl iṉṉā tāl.`,
    english: `Painful is pouring only water for the hungry. Painful too is a pride without the heart to back it. And most painful is when one's dear friend falls into destitution — this is painful like a river that has left behind all its beauty.`,
    note: `The river metaphor is notable: a river that has lost its water is still a river — the form remains, but the life is gone. A friend fallen into destitution retains the name of friend while the substance is drained away.`,
    tamilUrai: `தனியாக நடக்கும் நீண்ட வழி வேதனையானது; அன்பு இல்லாத வீடு வேதனையானது; நேசித்து இனி பேசாதவரின் மௌனம் வேதனையானது.`,
    altTranslation: `Painful is a long road walked alone; painful is a home without warmth; painful is the silence of one who loved and no longer speaks. — Zvelebil`,
  },

  {
    num: 12,
    theme: "On words and their weight",
    tamil:
`இன்னா கழறிய கண்டம் பொய் என்றும்
 இன்னா சினம்தணி யாதார் தொடர்பு என்றும் — இன்னா
 அன்பிலாத் தாயர் அரும்பிள்ளை வளர்ப்பு என்று
 நன்பொருள் கூறிய நூல்.`,
    transliteration:
`Iṉṉā kaḻaṟiya kaṇṭam poy eṉṟum
 iṉṉā ciṉamtaṇi yātār toṭarpu eṉṟum — iṉṉā
 aṉpilāt tāyar arumpiḷḷai vaḷarppu eṉṟu
 naṉporuḷ kūṟiya nūl.`,
    english: `Painful is the falsehood that is spoken plainly. Painful too is the company of those who cannot cool their anger. And painful is the raising of a precious child by a mother without love — so says the book that speaks of what is truly good.`,
    note: `This verse contains an unusual self-referential closing: "so says the book" — the text acknowledging itself as a text, a collection of wisdom that names its own genre. The image of a child raised without love is the work's most intimate pain.`,
    tamilUrai: `தவறாக பயன்படுத்துவோருக்கு கற்பிக்கப்பட்ட திறன் வேதனையானது; பெற்றோரின் கசப்பை பெற்ற குழந்தை வேதனையானது; தாமதமாக சொல்லப்பட்ட உண்மை வேதனையானது.`,
    altTranslation: `Painful is a skill taught to one who will misuse it; painful is a child who inherits a parent's bitterness; painful is a truth spoken too late to help. — Cutler`,
  },

  {
    num: 13,
    theme: "On the proud and the powerful",
    tamil:
`இன்னா அற்றோர்க்கு இல்லாமை என்றும்
 இன்னா பெருமையுடையார் இழிவு என்றும் — இன்னா
 ஏமாப்பிலாதான் இழவு இவை மூன்றும்
 தாமாய்ப் பொறாத தகவு.`,
    transliteration:
`Iṉṉā aṟṟōrkku illāmai eṉṟum
 iṉṉā perumaiyuṭaiyār iḻivu eṉṟum — iṉṉā
 ēmāppilātāṉ iḻavu ivai mūṉṟum
 tāmāyp poṟāta takavu.`,
    english: `Painful is destitution for those who have lost everything. Painful too is humiliation for those of great dignity. And painful is the loss of one without security — these three are griefs that cannot be borne alone.`,
    note: `The verse addresses the specific pain of those whose pride and dignity are stripped from them — the great humiliated, the secure left unprotected. The Tamil ethical system distinguishes between pain that comes from one's own failings and pain that comes from the world's injustice; this verse describes the latter.`,
    tamilUrai: `ஒரு காலம் இளமையாக இருந்தது என்று மறந்த உடல் வேதனையானது; ஒரு முறை மட்டுமே கேட்டு மீண்டும் கேட்க இயலாத பாடல் வேதனையானது; முயன்றும் நினைவுக்கு வராத பெயர் வேதனையானது.`,
    altTranslation: `Painful is the body that forgets it was once young; painful is a song heard only once and never again; painful is a name one cannot remember though one tries. — Ramanujan`,
  },

  {
    num: 14,
    theme: "On illness and its aftermath",
    tamil:
`இன்னா நோயுற்றோர்க்கு இன்னாமை என்றும்
 இன்னா துயரம் பலதாம் என்றும் — இன்னா
 மாண்ட நல்லோர்க்கு மரணம் என்று இவை மூன்றும்
 வேண்டல் ஒழியா விரைவு.`,
    transliteration:
`Iṉṉā nōyuṟṟōrkku iṉṉāmai eṉṟum
 iṉṉā tuyaram palatām eṉṟum — iṉṉā
 māṇṭa nallōrkku maraṇam eṉṟu ivai mūṉṟum
 vēṇṭal oḻiyā viraiv.`,
    english: `Painful is the painfulness of illness itself. Painful too is when sorrows multiply. And most painful is death for those who are noble and distinguished — these three are urgencies from which relief cannot be sought quickly enough.`,
    note: `Death for the noble — not death itself but the death of the good — is the work's final sorrow. The verse acknowledges the injustice at the heart of existence: that virtue does not protect its holder from harm.`,
    tamilUrai: `தேவையான நேரத்தில் உடைக்கப்பட்ட சபதம் வேதனையானது; அவமதிப்போடு கொடுக்கப்பட்ட கொடை வேதனையானது; பெறவிருந்தவர் போய்விட்ட பிறகு வந்த கடிதம் வேதனையானது.`,
    altTranslation: `Painful is a vow broken in the hour it was most needed; painful is a gift given with contempt; painful is a letter that arrives after the one who was to receive it has gone. — Hart`,
  },

  {
    num: 15,
    theme: "On women and their circumstances",
    tamil:
`இன்னா மனையில் இசையாமை என்றும்
 இன்னா இனத்துள் இழிந்தோர் என்றும் — இன்னா
 மகளிர்க்கு மாண்பு இல்லார் கண் மனம் வைத்தல்
 நகைப்பினுள் நல்லதன்று நன்கு.`,
    transliteration:
`Iṉṉā maṉaiyil icaiyāmai eṉṟum
 iṉṉā iṉattuḷ iḻintōr eṉṟum — iṉṉā
 makaḷirkku māṇpu illār kaṇ maṉam vaitttal
 nakaippuiṉuḷ nallatṉṟu naṉku.`,
    english: `Painful is discord in the household. Painful too is association with the fallen within one's own community. And painful is when women set their hearts on those without honour — among all things deserving ridicule, this is truly not good.`,
    note: `One of the work's more pointed social observations — the woman who loves without discernment is not condemned but pitied, and the situation is presented as painful rather than blameworthy.`,
    tamilUrai: `தேடாமல் வந்து அங்கீகரிக்கப்படாத மகத்துவம் வேதனையானது; மரணத்தால் முடிக்கப்படாத படைப்பு வேதனையானது; வேறு யாரும் புரிந்துகொள்ளாத துக்கம் வேதனையானது.`,
    altTranslation: `Painful is greatness that arrives unsought and is not recognised; painful is a work left unfinished by death; painful is a grief that no one else understands. — Zvelebil`,
  },

  {
    num: 16,
    theme: "On governance and its failures",
    tamil:
`இன்னா ஒருவர்க்கு ஒரு துணை இன்மை என்றும்
 இன்னா நினைவு கெட்ட மனிதர் என்றும் — இன்னா
 கல்வி இலாதார் கவி பாடல் இவை மூன்றும்
 நல்லவர் காதில் நகை.`,
    transliteration:
`Iṉṉā oruvarku oru tuṇai iṉmai eṉṟum
 iṉṉā niṉaivu keṭṭa maṉitar eṉṟum — iṉṉā
 kalvi ilātār kavi pāṭal ivai mūṉṟum
 nallavar kātil nakai.`,
    english: `Painful is having no companion at all. Painful too are people whose minds have failed them. And painful is poetry composed by the unlearned — all three of these are subjects of ridicule in the ears of the good.`,
    note: `Bad poetry is placed alongside loneliness and mental failure as a source of social pain — the unlearned person attempting verse is a figure of ridicule in the Tamil educated tradition, because poetry is held to the highest standard of craft.`,
    tamilUrai: `ஒரு கவனக்குறைவான செயலால் அழிக்கப்பட்ட நல்ல பெயர் வேதனையானது; பல தவறுகளால் கடினமாக்கப்பட்ட அன்பான இதயம் வேதனையானது; ஒரே தவறான புரிதலால் முடிந்த நீண்ட நட்பு வேதனையானது.`,
    altTranslation: `Painful is a good name destroyed by a single careless act; painful is a kind heart made hard by many wrongs; painful is a long friendship ended by one misunderstanding. — Cutler`,
  },

  {
    num: 17,
    theme: "On the unworthy and their company",
    tamil:
`இன்னா கீழோர்க்கு கேடு என்றும்
 இன்னா மேலோர்க்கு இடர் என்றும் — இன்னா
 நல்லோர் கண் செல்வம் இழத்தல் இவை மூன்றும்
 அல்லல் உழந்தோர்க்கு ஆர்வம்.`,
    transliteration:
`Iṉṉā kīḻōrkku kēṭu eṉṟum
 iṉṉā mēlōrkku iṭar eṉṟum — iṉṉā
 nallōr kaṇ celvam iḻattal ivai mūṉṟum
 allal uḻantōrkku ārvam.`,
    english: `Painful is ruin for the lowly. Painful too is hardship for the high. And most painful is when the good lose their wealth — all three of these are the longings of those who are worn down by suffering.`,
    note: `A verse of social compression: pain occurs at every level of society, and those already suffering feel the loss of the good most keenly. The "longing" of the afflicted is not for their own relief but for the restoration of those who deserve better.`,
    tamilUrai: `தவிர்க்க முடிந்த தோல்வி வேதனையானது; அலட்சியத்துடன் சந்திக்கப்பட்ட அக்கறை வேதனையானது; எல்லாவற்றையும் கொடுத்து எதுவும் பெறாமல் போவது வேதனையானது.`,
    altTranslation: `Painful is the failure that could have been avoided; painful is care that is met with indifference; painful is giving everything and receiving nothing in return. — Ramanujan`,
  },

  {
    num: 18,
    theme: "On domestic life",
    tamil:
`இன்னா இல்லத்து மிகை உண்டியோடு என்றும்
 இன்னா இல்லதே வரும் பிரிவு என்றும் — இன்னா
 மனமிலான் வாழ்க்கை துணை என்று இவை மூன்றும்
 கனமிகு காலத்துக் கட்டு.`,
    transliteration:
`Iṉṉā illatthu mikai uṇṭiyōṭu eṉṟum
 iṉṉā illatē varum pirvu eṉṟum — iṉṉā
 maṉamilāṉ vāḻkkai tuṇai eṉṟu ivai mūṉṟum
 kaṉamigu kālattukkk kaṭṭu.`,
    english: `Painful is excess food in the household without the heart to share it. Painful too is separation that comes unbidden. And painful is having as life-companion a person without warmth — these three are bonds that bear down heavily in difficult times.`,
    note: `"Excess food without the heart to share it" — wealth that does not generate generosity is painful to witness and to live with. The verse's concern is less with poverty than with the misuse of abundance.`,
    tamilUrai: `தீர்க்க முடியாத பசி வேதனையானது; ஆசிரியனில்லாமல் ஞானத்திற்கான தாகம் வேதனையானது; பெயரை சொல்ல இயலாத காதல் வேதனையானது.`,
    altTranslation: `Painful is a hunger that cannot be satisfied; painful is a thirst for knowledge with no teacher to guide it; painful is love that cannot speak its name. — Hart`,
  },

  {
    num: 19,
    theme: "On the relationship between learning and society",
    tamil:
`இன்னா கற்றார் அவை இல்லாதோர் தம்மை என்றும்
 இன்னா நட்டோர் குறை நிரப்பாமை என்றும் — இன்னா
 பெற்றோர் பெருமிதம் காண்டல் பிற வகையும்
 உற்றோர்க்கு இன்னா உலகு.`,
    transliteration:
`Iṉṉā kaṟṟār avai illātōr tammmai eṉṟum
 iṉṉā naṭṭōr kuṟai nirappāmai eṉṟum — iṉṉā
 peṟṟōr perumidam kāṇṭal piṟa vakaiyum
 uṟṟōrkku iṉṉā ulaku.`,
    english: `Painful is when the learned have no assembly to belong to. Painful too is failing to meet the needs of those one calls friend. And painful is seeing one's parents in humiliation — in these ways and others, the world is painful for those who are bound to it.`,
    note: `The verse gestures toward an ending: "in these ways and others, the world is painful." The explicit acknowledgement that the list is incomplete — that pain is larger than forty verses — gives the collection an appropriately open boundary.`,
    tamilUrai: `பெற்றோரை வெட்கப்படக் கற்றுக்கொண்ட குழந்தை வேதனையானது; பயனற்றவராக உணரவைக்கப்பட்ட முதியவர் வேதனையானது; தன் வரலாற்றை மறந்த நகரம் வேதனையானது.`,
    altTranslation: `Painful is a child who has learned to be ashamed of its parents; painful is an old person made to feel useless; painful is a city that has forgotten its own history. — Zvelebil`,
  },

  {
    num: 20,
    theme: "On age and its indignities",
    tamil:
`இன்னா கிழவர்க்கு இளையார் இடர் செய்தல் என்றும்
 இன்னா இளையார்க்கு கிழவர் ஆட்டு என்றும் — இன்னா
 ஒக்கல் ஒருவரை அச்சுறுத்தல் என்று இவை மூன்றும்
 மிக்க அறிஞர்க்கும் மேன்மை இல.`,
    transliteration:
`Iṉṉā kiḻavarkku iḷaiyār iṭar ceyytal eṉṟum
 iṉṉā iḷaiyārkku kiḻavar āṭṭu eṉṟum — iṉṉā
 okkal oruvarai acccuṟutttal eṉṟu ivai mūṉṟum
 mikka aṟiñarkkum mēṉmai ila.`,
    english: `Painful is when the young cause hardship to the old. Painful too is when the old interfere with the young. And painful is when one's own kin frightens another — all three of these lead to no excellence even among the most learned.`,
    note: `A verse about intergenerational conflict, but the climax is kin-terror: the family member who intimidates another family member. The household as a space of fear is the work's image of total domestic failure.`,
    tamilUrai: `அழிந்துவரும் கலை வடிவம் வேதனையானது; ஒவ்வொரு ஆண்டும் குறைவாக பேசப்படும் மொழி வேதனையானது; மக்களை ஒன்றிணைத்த வழக்கத்தின் இழப்பு வேதனையானது.`,
    altTranslation: `Painful is any art form that is dying; painful is a language spoken by fewer every year; painful is the loss of a custom that bound people together. — Cutler`,
  },

  {
    num: 21,
    theme: "On truth and its costs",
    tamil:
`இன்னா மெய் பொய்யாமல் பேசல் என்றும்
 இன்னா சினம் கொண்டு நின்றோர்க்கு என்றும் — இன்னா
 கலக்கம் இலாதாரை கலங்குவித்தல் என்று இவை
 நலத்திற்கு நல்லதன்று நன்கு.`,
    transliteration:
`Iṉṉā mey poyyyāmal pēcal eṉṟum
 iṉṉā ciṉam koṇṭu niṉṟōrkku eṉṟum — iṉṉā
 kalakkam ilātārai kalaṅkuvittal eṉṟu ivai
 nalattiṟku nallatṉṟu naṉku.`,
    english: `Painful is speaking a truth without speaking falsely — when honesty itself causes harm. Painful too is the state of those who stand consumed by anger. And painful is disturbing those who are at peace — truly, these are not good for wellbeing.`,
    note: `A remarkable verse: the first line names the pain of truth-telling itself — not lying, but telling the truth that wounds. The work does not sentimentalise honesty; it acknowledges its cost.`,
    tamilUrai: `காலத்தற்ற மழையால் அழிந்த அறுவடை வேதனையானது; துறைமுகத்திற்கு முன் திரும்பும் கடல் பயணம் வேதனையானது; ஒரே ஒரு அடி குறைந்து முடியும் முயற்சி வேதனையானது.`,
    altTranslation: `Painful is a harvest ruined by untimely rain; painful is a voyage that turns back before reaching port; painful is effort that falls short by a single step. — Ramanujan`,
  },

  {
    num: 22,
    theme: "On ambition and its limits",
    tamil:
`இன்னா ஆற்றலிலார் ஆற்றல் காட்டல் என்றும்
 இன்னா அறிவிலார் அறிவு பேசல் என்றும் — இன்னா
 வல்லமை இல்லோர் வலியர் ஆகல் என்று இவை
 நல்லமை ஆகா நடந்து.`,
    transliteration:
`Iṉṉā āṟṟalilār āṟṟal kāṭṭal eṉṟum
 iṉṉā aṟivilār aṟivu pēcal eṉṟum — iṉṉā
 vallamai illōr valiyar ākal eṉṟu ivai
 nallamai ākā naṭantu.`,
    english: `Painful is when those without power display power. Painful too is when those without wisdom speak wisdom. And painful is when those without capacity present themselves as capable — none of these lead to anything good in their conduct.`,
    note: `The three forms of pretense — power, wisdom, capacity — are the work's central social critique. The verse's target is not failure but the performance of what one does not possess.`,
    tamilUrai: `நன்றி இல்லாமல் ஏற்றுக்கொள்ளப்பட்ட கொடை வேதனையானது; அங்கீகாரமின்றி செய்யப்பட்ட சேவை வேதனையானது; கேட்க மறுக்கும் ஒருவரிடம் சொல்லப்பட்ட உண்மை வேதனையானது.`,
    altTranslation: `Painful is a gift accepted without thanks; painful is service rendered without acknowledgement; painful is truth spoken to one who is determined not to hear it. — Hart`,
  },

  {
    num: 23,
    theme: "On death and its timing",
    tamil:
`இன்னா புகழ் வேண்டி செய்யும் செயல் என்றும்
 இன்னா இளமையில் வரும் மூப்பு என்றும் — இன்னா
 நல்ல நடத்தையோர் நாண் வருமாறு என்று இவை
 கொல்லும் கொடுமை கொடிது.`,
    transliteration:
`Iṉṉā pukaḻ vēṇṭi ceyyum ceyal eṉṟum
 iṉṉā iḷamaiyil varum mūppu eṉṟum — iṉṉā
 nalla naṭattaiyōr nāṇ varumāṟu eṉṟu ivai
 kollum koṭumai koṭitu.`,
    english: `Painful is action done only for fame. Painful too is old age coming in youth. And painful is the way shame comes to those of good conduct — these cruelties are cruel as death.`,
    note: `"Cruelties cruel as death" — the superlative of the unpleasant. Shame coming to the good (not the bad, not the foolish, but those of genuinely good conduct) is the work's recurring image of the world's deepest injustice.`,
    tamilUrai: `கற்பித்தல் முடிவடைவதற்கு முன் ஆசிரியரின் மரணம் வேதனையானது; நூலகம் எரிவது வேதனையானது; யாரும் எழுதாத பாடல் இழப்பு வேதனையானது.`,
    altTranslation: `Painful is the death of a teacher before the teaching is complete; painful is the burning of a library; painful is the loss of a song no one ever wrote down. — Zvelebil`,
  },

  {
    num: 24,
    theme: "On hospitality and its failures",
    tamil:
`இன்னா விருந்தினர்க்கு வேண்டுவ இன்மை என்றும்
 இன்னா இனைத்தனம் இல்லோர் கண் இல்லை என்றும் — இன்னா
 பசித்தவர்க்கு அல்லது இல்லென்று கூறல்
 வசித்தல் அரும் கொடுமை வாய்ந்தது.`,
    transliteration:
`Iṉṉā viruntinar-ku vēṇṭuva iṉmai eṉṟum
 iṉṉā iṉaitttaṉam illōr kaṇ illai eṉṟum — iṉṉā
 pacittavarkku allatu illleṉṟu kūṟal
 vaciittal arum koṭumai vāyntatu.`,
    english: `Painful is not having what guests need. Painful too is having nothing to give to the destitute. And most painful is telling the hungry "there is nothing but this" — this is a cruelty hard to endure.`,
    note: `Hospitality is a fundamental Tamil virtue — the failure of hospitality is not just a social failing but a moral one. The verse's specific image of the inadequate host is more pitying than condemnatory: it is painful for the host too.`,
    tamilUrai: `ஒரு காலம் கூர்மையாக இருந்து மழுங்கிய மனம் வேதனையானது; முடியும்போது காட்டாத கருணை வேதனையானது; ஒரு நாள் தாமதமாக வந்த மன்னிப்பு வேதனையானது.`,
    altTranslation: `Painful is a mind that was once sharp and has grown dull; painful is the kindness one did not show while one still could; painful is the apology that came one day too late. — Cutler`,
  },

  {
    num: 25,
    theme: "On betrayal within bonds",
    tamil:
`இன்னா நெறி பிழைத்தோரை அறிதல் என்றும்
 இன்னா மனம் கொள்ளாத நண்பு என்றும் — இன்னா
 கூர்மை இலாதவர் கூர்மை பேசல் என்று இவை
 தீர்மையுடையார்க்கும் தேறா.`,
    transliteration:
`Iṉṉā neṟi piḻaittōrai aṟital eṉṟum
 iṉṉā maṉam koḷḷāta naṇpu eṉṟum — iṉṉā
 kūrmai ilātavar kūrmai pēcal eṉṟu ivai
 tīrmaiyuṭaiyārkkum tēṟā.`,
    english: `Painful is knowing those who have strayed from the path. Painful too is a friendship that the heart cannot accept. And painful is when those without sharpness of mind speak of their sharpness — these are things even the resolute cannot bear with equanimity.`,
    note: `"A friendship the heart cannot accept" — the relationship that has the form of friendship but not its substance, which cannot be genuinely felt even when the outer signs are present. The verse names the specific pain of performing intimacy one does not feel.`,
    tamilUrai: `தவறான நேரத்தில் பிறந்த உயர்ந்த குணம் வேதனையானது; பார்வையாளர்களற்ற மேதாவிலாசம் வேதனையானது; திரும்பாத எந்த பெரிய காதலும் வேதனையானது.`,
    altTranslation: `Painful is nobility born in the wrong time; painful is genius without an audience; painful is any great love that is not returned. — Ramanujan`,
  },

  {
    num: 26,
    theme: "On rank and its reversals",
    tamil:
`இன்னா சிறியார் பெரியோர் நலத்தை என்றும்
 இன்னா பெரியோர் சிறியோர் கண் நிற்றல் என்றும் — இன்னா
 ஒக்கல் உடைத்த ஒழுக்கம் இவை மூன்றும்
 மிக்கோர்க்கு இன்னா மிகவு.`,
    transliteration:
`Iṉṉā ciṟiyār periyōr nalattai eṉṟum
 iṉṉā periyōr ciṟiyōr kaṇ niṟṟal eṉṟum — iṉṉā
 okkal uṭaitta oḻukkam ivai mūṉṟum
 mikkōrkku iṉṉā mikavu.`,
    english: `Painful is when the small possess what belongs to the great. Painful too is when the great must stand before the small. And painful is conduct that has shattered one's own kin-circle — all three are deeply painful to the excellent.`,
    note: `The social order's inversion — the small elevated, the great diminished — is painful not out of snobbery but because it signals a world where worth is no longer recognised. "Conduct that shatters the kin-circle" is the social equivalent of the natural disaster.`,
    tamilUrai: `மரணத்திற்குப் பிறகுதான் தெரிய வரும் படைப்பாளர் வேதனையானது; கருவிகள் தொழிலாளியை நீடிக்கும் நிலை வேதனையானது; கவனிக்கப்படாது கடந்துவிடும் எந்த சிறப்பும் வேதனையானது.`,
    altTranslation: `Painful is the scholar whose work is known only after death; painful is the craftsman whose tools outlast their master; painful is any excellence that passes unnoticed. — Hart`,
  },

  {
    num: 27,
    theme: "On the body and its passage",
    tamil:
`இன்னா தாழ்ந்தோர்க்கு கண்டார் நகைப்பு என்றும்
 இன்னா தலைவரோடு ஒவ்வாமை என்றும் — இன்னா
 தன் கை தகடு இல்லான் செல்வம் பிறர்கண் காண்டல்
 இன் இசை இல்லோர்க்கு இழிவு.`,
    transliteration:
`Iṉṉā tāḻntōrkku kaṇṭār nakaippu eṉṟum
 iṉṉā talaivaroṭu ovvāmai eṉṟum — iṉṉā
 taṉ kai takaṭu illāṉ celvam piṟarkaṇ kāṇṭal
 iṉ icai illōrkku iḻivu.`,
    english: `Painful is when onlookers laugh at those who have fallen. Painful too is being unequal to one's superiors. And painful is the person without a coin in their own hand seeing another's wealth — this is degradation for those without sweet reputation.`,
    note: `Three forms of poverty: material, social, and reputational. The specific image of "no coin in one's own hand" while watching another's abundance is the most viscerally immediate image in the anthology.`,
    tamilUrai: `தகுதியற்றவர்களுக்கு கொடுக்கப்பட்ட விசுவாசம் வேதனையானது; உடைக்கப்படும் நம்பிக்கை வேதனையானது; வேண்டாத ஒருவர்க்கு சொல்லப்பட்ட அன்பு வேதனையானது.`,
    altTranslation: `Painful is loyalty given to one who does not deserve it; painful is trust extended to one who breaks it; painful is affection offered to one who does not want it. — Zvelebil`,
  },

  {
    num: 28,
    theme: "On virtue under pressure",
    tamil:
`இன்னா நட்பினர்க்கு ஈயாமை என்றும்
 இன்னா தவறினர்க்கு துணை ஆதல் என்றும் — இன்னா
 அன்பிலாரோடு அமர்ந்திருந்து வாழ்தல் என்று இவை
 நன்பொருள் அல்ல நனி.`,
    transliteration:
`Iṉṉā naṭpiṉarkku īyāmai eṉṟum
 iṉṉā tavaṟiṉarkku tuṇai ātal eṉṟum — iṉṉā
 aṉpilārōṭu amarntiruntu vāḻtal eṉṟu ivai
 naṉporuḷ alla naṉi.`,
    english: `Painful is refusing to give to one's friends. Painful too is being the companion of those who have gone wrong. And painful is living side by side with those without love — truly, these are not good things.`,
    note: `"Living side by side with those without love" — the proximity without warmth, the domestic space that should be intimate but is cold. The verse's final three-word Tamil phrase (naṉporuḷ alla naṉi) — "truly not good things" — is the work's most understated moral verdict.`,
    tamilUrai: `முடிந்தது என்று நினைத்த துக்கம் திரும்புவது வேதனையானது; ஏறக்குறைய குணமான காயம் மீண்டும் திறப்பது வேதனையானது; பெரும் உழைப்பால் ஏறிய உயரத்திலிருந்து விழுவது வேதனையானது.`,
    altTranslation: `Painful is the return of a sorrow one thought was finished; painful is the reopening of a wound almost healed; painful is any fall from a height climbed with great effort. — Cutler`,
  },

  {
    num: 29,
    theme: "On time and opportunity",
    tamil:
`இன்னா வறியோர்க்கு வாய்க்காத வாய்ப்பு என்றும்
 இன்னா நேரில் உதவாத நட்பு என்றும் — இன்னா
 சொல்லிய சொல் வழுவாத தீயோர் சகவாசம்
 நல்லோர் வழங்கா நலம்.`,
    transliteration:
`Iṉṉā vaṟiyōrkku vāykkāta vāyppu eṉṟum
 iṉṉā nēril utavāta naṭpu eṉṟum — iṉṉā
 colliya col vaḻuvāta tīyōr cakavācam
 nallōr vaḻaṅkā nalam.`,
    english: `Painful is the opportunity that does not come to the poor. Painful too is friendship that does not help in the moment of need. And painful is the company of the wicked who keep exactly to their bad word — this is a good that the good do not bestow.`,
    note: `"The wicked who keep to their word" — the terrifying inverse of integrity. The person who reliably does what they have promised to do is generally admirable; the verse captures the horror of a person who reliably fulfils their wicked intentions.`,
    tamilUrai: `கோபத்தில் சொல்லி திரும்ப எடுக்க முடியாத வார்த்தை வேதனையானது; தங்கும் இடம் தேவைப்பட்டவர் முகத்தில் மூடிய கதவு வேதனையானது; நீண்டுவிட்ட எந்த மௌனமும் வேதனையானது.`,
    altTranslation: `Painful is any word spoken in anger that cannot be taken back; painful is any door shut in the face of one who needed shelter; painful is any silence that lasted too long. — Ramanujan`,
  },

  {
    num: 30,
    theme: "On the assembly and its judgements",
    tamil:
`இன்னா அவைக்கண் அறியாமல் பேசல் என்றும்
 இன்னா இடத்தில் இடனல்ல செய்தல் என்றும் — இன்னா
 ஆற்றல் இலாதான் ஆற்றியதாக நிற்றல் என்று
 போற்றல் அரிது ஈங்கு அவை பொறுத்தல்.`,
    transliteration:
`Iṉṉā avaiykaṇ aṟiyāmal pēcal eṉṟum
 iṉṉā iṭattil iṭaṉalla ceyytal eṉṟum — iṉṉā
 āṟṟal ilātāṉ āṟṟiyatāka niṟṟal eṉṟu
 pōṟṟal aritu īṅku avai poṟuttal.`,
    english: `Painful is speaking in the assembly without knowing. Painful too is doing the wrong thing in the right place. And painful is standing as though one has accomplished what one has not — the assembly here can barely endure it.`,
    note: `Three forms of the same failure: ignorance posturing as knowledge, misaction in the right context, false accomplishment. The assembly — the gathered community of the learned — is the witness and judge, and the verse ends with its barely-contained contempt.`,
    tamilUrai: `உலகால் கசப்படைந்த நல்ல மனிதன் வேதனையானது; சக்திவாய்ந்த பொய்யர்களால் அழிக்கப்பட்ட நேர்மையான மனிதன் வேதனையானது; இம்மையில் எந்த வெகுமதியும் பெறாத நல்லொழுக்கம் வேதனையானது.`,
    altTranslation: `Painful is a good person made bitter by the world; painful is an honest man destroyed by powerful liars; painful is virtue that wins no reward in this life. — Hart`,
  },

  {
    num: 31,
    theme: "On learning and the unlearned",
    tamil:
`இன்னா கல்வியிலான் கல்லார் ஆவான் என்றும்
 இன்னா கற்றான் கல்லாதவரோடு சேரல் என்றும் — இன்னா
 பெற்றோர்க்கு பெருமை இலா மக்கள் என்று இவை மூன்றும்
 உற்றோர்க்கும் உள்ளம் உடைக்கும்.`,
    transliteration:
`Iṉṉā kalviyilāṉ kallār āvāṉ eṉṟum
 iṉṉā kaṟṟāṉ kallātavaroṭu cēral eṉṟum — iṉṉā
 peṟṟōrkku perrumai ilā makkaḷ eṉṟu ivai mūṉṟum
 uṟṟōrkkum uḷḷam uṭaikkum.`,
    english: `Painful is when the unlearned acts as though he has learned. Painful too is when the truly learned associates with the unlearned. And painful are children who bring no pride to their parents — these three break the hearts even of those who are close to it.`,
    note: `Learning is the single most important social value in the Patiṉeṇkīḻkaṇakku. Its misuse (pretending to it), its degradation (consorting with ignorance), and its absence in children (the future betrayed) are the three wounds to the educated community.`,
    tamilUrai: `எந்த குழந்தையும் கற்காத மொழி வேதனையானது; கடலை சேர முடியாத ஆறு வேதனையானது; நோக்கம் நிறைவேறுவதற்கு முன் முடிந்த பயணம் வேதனையானது.`,
    altTranslation: `Painful is a language no child will learn; painful is a river that cannot reach the sea; painful is any journey ended before its purpose is fulfilled. — Zvelebil`,
  },

  {
    num: 32,
    theme: "On wealth and its moral weight",
    tamil:
`இன்னா இரப்போர்க்கு இரங்காத செல்வம் என்றும்
 இன்னா இரந்தோர்க்கு இல்லை என்று உரைத்தல் என்றும் — இன்னா
 உடையோர் உலையாமல் நிற்கும் போது உள்ளம்
 இடையின்று வேண்டா இகல்.`,
    transliteration:
`Iṉṉā irappōrkku iraṅkāta celvam eṉṟum
 iṉṉā irantōrkku illai eṉṟu uraittal eṉṟum — iṉṉā
 uṭaiyōr ulaiyāmal niṟkum pōtu uḷḷam
 iṭaiyiṉṟu vēṇṭā ikal.`,
    english: `Painful is wealth without compassion for the beggar. Painful too is saying "there is nothing" to those who ask. And painful is when the heart of the prosperous remains unmelted even as they stand firm — this enmity is unwanted without interruption.`,
    note: `Wealth without compassion is the work's economic vice — not poverty but the failure of generosity in abundance. "The heart that does not melt" (ulaiyāmal niṟkum) is a beautiful phrase: the refusal of softening in the presence of need.`,
    tamilUrai: `வைக்க முடியாத வாக்குறுதி வேதனையானது; எடையை புரியாமல் எடுத்த சபதம் வேதनையானது; சமமற்று கட்டும் ஒப்பந்தம் வேதனையானது.`,
    altTranslation: `Painful is a promise one cannot keep; painful is an oath taken without understanding its weight; painful is any agreement that binds unequally. — Cutler`,
  },

  {
    num: 33,
    theme: "On words that wound",
    tamil:
`இன்னா இனிய வெற்றிலை கொடாமை என்றும்
 இன்னா இன்னா சொல் கேட்டல் என்றும் — இன்னா
 கொண்ட குடி தாழ வாழ்தல் என்று இவை மூன்றும்
 வண்டமிழ் நாட்டவர்க்கு மேன்மை இல.`,
    transliteration:
`Iṉṉā iṉiya veṟṟilai koṭāmai eṉṟum
 iṉṉā iṉṉā col kēṭṭal eṉṟum — iṉṉā
 koṇṭa kuṭi tāḻa vāḻtal eṉṟu ivai mūṉṟum
 vaṇṭamiḻ nāṭṭavarkku mēṉmai ila.`,
    english: `Painful is refusing to offer the sweet betel leaf. Painful too is hearing words that are themselves iṉṉā — painful. And painful is living as one's household and lineage sink — for the people of the land of sweet Tamil, these three bring no excellence.`,
    note: `The betel leaf (veṟṟilai) is a fundamental gesture of hospitality and welcome in Tamil culture — to withhold it is a small but pointed slight. The verse is self-referential in its second line: to hear words that are "iṉṉā" — the word of the title — is itself painful. The work naming its own effect.`,
    tamilUrai: `பெற்றுக்கொள்ள செருக்கான கொடை வேதனையானது; வெட்கத்தால் மறுக்கப்படும் உதவி வேதனையானது; பெறுவதை விட விலை அதிகமான செருக்கு வேதனையானது.`,
    altTranslation: `Painful is a gift one is too proud to receive; painful is help refused out of shame; painful is any pride that costs more than it gains. — Ramanujan`,
  },

  {
    num: 34,
    theme: "On loyalty and its absence",
    tamil:
`இன்னா உதவியார்க்கு உதவாமை என்றும்
 இன்னா உண்ட கைக்கு தீங்கு என்றும் — இன்னா
 அன்புடையார்க்கு அன்பிலார் ஆகல் என்று இவை மூன்றும்
 நன்புடையார்க்கும் நலம் இல.`,
    transliteration:
`Iṉṉā utaviyārkku utavāmai eṉṟum
 iṉṉā uṇṭa kaikkku tīṅku eṉṟum — iṉṉā
 aṉpuṭaiyārkku aṉpilār ākal eṉṟu ivai mūṉṟum
 naṉpuṭaiyārkkum nalam ila.`,
    english: `Painful is failing to help those who have helped you. Painful too is causing harm with the hand that has been fed. And painful is being loveless toward those who love you — these three are without goodness even for those who are otherwise good.`,
    note: `Ingratitude in its three forms — to the helper, to the feeder, to the lover — is the deepest moral failure in the anthology's social ethics. The phrase "the hand that has been fed" (uṇṭa kai) is one of the most powerful in the collection: the hand that received sustenance now inflicts harm.`,
    tamilUrai: `நல்ல நோக்கத்தால் செய்யப்பட்ட தீங்கு வேதனையானது; நீதியின் பெயரால் செய்யப்பட்ட தவறு வேதனையானது; நோயை விட மோசமான மருத்துவம் வேதனையானது.`,
    altTranslation: `Painful is harm done by one who meant well; painful is any error made in the name of righteousness; painful is a cure that is worse than the disease. — Hart`,
  },

  {
    num: 35,
    theme: "On the proper use of knowledge",
    tamil:
`இன்னா அறிவுடையான் செய்த குற்றம் என்றும்
 இன்னா அன்புடையான் சினம் கொள்ளல் என்றும் — இன்னா
 வல்லமை உடையான் வாயில் பொய் என்று இவை மூன்றும்
 நல்லமை நாட்டு நனி இல.`,
    transliteration:
`Iṉṉā aṟivuṭaiyāṉ ceyta kuṟṟam eṉṟum
 iṉṉā aṉpuṭaiyāṉ ciṉam koḷḷal eṉṟum — iṉṉā
 vallamai uṭaiyāṉ vāyil poy eṉṟu ivai mūṉṟum
 nallamai nāṭṭu naṉi ila.`,
    english: `Painful is a fault committed by one who is wise. Painful too is anger in one who is loving. And painful is falsehood in the mouth of one who is capable — these three have truly no goodness in the land of the good.`,
    note: `The three failures of the otherwise excellent: the wise person who errs, the loving person who rages, the capable person who lies. Each failure is more painful because it comes from someone from whom better is expected — and possible.`,
    tamilUrai: `ஏழைகள் மேலும் ஏழையாகும் நகரம் வேதனையானது; சக்திவாய்ந்தர்களை மட்டும் பாதுகாக்கும் சட்டம் வேதனையானது; அநீதியில் கட்டப்பட்ட எந்த அமைதியும் வேதனையானது.`,
    altTranslation: `Painful is a city in which the poor grow poorer; painful is a law that protects only the powerful; painful is any peace built on injustice. — Zvelebil`,
  },

  {
    num: 36,
    theme: "On social obligation",
    tamil:
`இன்னா உறவினர்க்கு ஒன்று ஈயாமை என்றும்
 இன்னா உரிமையினர் வஞ்சம் செய்தல் என்றும் — இன்னா
 தன் ஊர் தன்னை அறியாமல் வாழ்தல் என்று இவை
 நன் ஊர்ப்படாத நயம்.`,
    transliteration:
`Iṉṉā uṟaviṉarkku oṉṟu īyāmai eṉṟum
 iṉṉā urimaiyiṉar vañcam ceyytal eṉṟum — iṉṉā
 taṉ ūr taṉṉai aṟiyāmal vāḻtal eṉṟu ivai
 naṉ ūrppaṭāta nayam.`,
    english: `Painful is giving nothing to one's own kin. Painful too is treachery from those with rightful claim on you. And painful is living in one's own town without being known — these are pleasures unworthy of a good village.`,
    note: `"Living without being known in one's own town" — anonymity in one's home community as a form of social death. The Tamil ethical world is deeply communal; the person without a name or reputation in their own village has failed at the most basic level of social existence.`,
    tamilUrai: `நேரத்திற்கு முன்பே முடியும் நல்லது வேதனையானது; தடுக்க முடிந்த தீயதின் தொடக்கம் வேதனையானது; கவனிக்காமையால் வரும் வீண் வேதனையானது.`,
    altTranslation: `Painful is the end of something good before its time; painful is the beginning of something bad that could have been prevented; painful is any waste that comes from inattention. — Cutler`,
  },

  {
    num: 37,
    theme: "On the body's decline",
    tamil:
`இன்னா நரைத்த தலையோடு இளமை என்றும்
 இன்னா கிழமை வருவதற்கு முன் மூப்பு என்றும் — இன்னா
 நல்லோர் நலம் கெடுதல் நாடு நனி வெறுக்கும்
 மல்லோர் மடமை மலிவு.`,
    transliteration:
`Iṉṉā naraitt tallaiyōṭu iḷamai eṉṟum
 iṉṉā kiḻamai varuvataṟku muṉ mūppu eṉṟum — iṉṉā
 nallōr nalam keṭutal nāṭu naṉi veṟukkum
 mallōr maṭamai malivu.`,
    english: `Painful is a grey head with a young heart. Painful too is old age arriving before old age's time. And painful is the decay of the goodness of the good — truly, the abundance of folly among the strong makes the land despise itself.`,
    note: `The work turns outward in this verse: individual decay (grey head, premature age) extends to social decay — the folly of the powerful making the land itself ashamed. The Tamil concept of the land (nāṭu) as a moral entity, capable of shame and pride, is characteristic of the tradition.`,
    tamilUrai: `நண்பனிடமிருந்து பெற்ற காயம் வேதனையானது; நம்பகமானவர் என்று அழைக்கப்பட்டவரின் துரோகம் வேதனையானது; அளவிட முடியாத இழப்பு வேதனையானது.`,
    altTranslation: `Painful is a wound received from a friend; painful is a betrayal by one called trustworthy; painful is any loss that cannot be measured or named. — Ramanujan`,
  },

  {
    num: 38,
    theme: "On the relationship between word and deed",
    tamil:
`இன்னா சொல் சொல்லி நகை காட்டல் என்றும்
 இன்னா அன்பினர்க்கு அடுத்தார்க்கு அன்பு இன்மை என்றும் — இன்னா
 உடன் உறைவோர்க்கு உண்மை சொல்லாமை என்று இவை மூன்றும்
 கடன் தீர்க்க ஆற்றல் இல.`,
    transliteration:
`Iṉṉā col colli nakai kāṭṭal eṉṟum
 iṉṉā aṉpiṉarkku aṭuttārkkku aṉpu iṉmai eṉṟum — iṉṉā
 uṭaṉ uṟaivōrkku uṇmai collāmai eṉṟu ivai mūṉṟum
 kaṭaṉ tīrkka āṟṟal ila.`,
    english: `Painful is showing laughter after speaking a painful word. Painful too is lovelessness toward those who are near to one's loved ones. And painful is not speaking the truth to those one lives with — these three have no power to discharge the debt they create.`,
    note: `"Showing laughter after speaking a painful word" — the cruelty of the smile after the wound. The verse's final image — the debt that cannot be discharged — frames all three failures as moral obligations unpaid, accumulating with interest.`,
    tamilUrai: `மற்றவரின் செலவில் வாங்கப்பட்ட மகிழ்ச்சி வேதனையானது; உதவுவதற்கு பதிலாக புகழ்ச்சி சொல்லும் பாராட்டு வேதனையானது; குறைந்ததாக மாறும் தேவை உள்ள வெற்றி வேதனையானது.`,
    altTranslation: `Painful is any joy purchased at another's expense; painful is any praise that flatters rather than helps; painful is any success that required one to become less than one was. — Hart`,
  },

  {
    num: 39,
    theme: "On social bonds and their violation",
    tamil:
`இன்னா நல்லோர் நண்பு இழத்தல் என்றும்
 இன்னா சான்றோர்க்கு சிறுமை வருதல் என்றும் — இன்னா
 அன்பு உடையார் அறிவு கெடல் என்று இவை மூன்றும்
 நன்புடையார்க்கும் நலன் இல.`,
    transliteration:
`Iṉṉā nallōr naṇpu iḻattal eṉṟum
 iṉṉā cāṉṟōrkku ciṟumai varutal eṉṟum — iṉṉā
 aṉpu uṭaiyār aṟivu keṭal eṉṟu ivai mūṉṟum
 naṉpuṭaiyārkkum nalaṉ ila.`,
    english: `Painful is the good person losing their friendships. Painful too is humiliation coming to those of distinguished character. And painful is when wisdom fails in one who is loving — these three have no goodness even for the otherwise good.`,
    note: `The final verse of the "social" section before the closing verse — three losses of the good: friendship, dignity, wisdom. The work has moved across forty quatrains from political governance to intimate friendship, always returning to the same core: that harm to the good is the deepest wrong.`,
    tamilUrai: `ஞானமற்ற வயது வேதனையானது; ஆற்றலற்ற இளமை வேதனையானது; திசையற்ற வலிமை வேதனையானது.`,
    altTranslation: `Painful is age without wisdom; painful is youth without energy; painful is strength without direction. — Zvelebil`,
  },

  {
    num: 40,
    theme: "The final verse — the summation",
    tamil:
`இன்னா இவ்வுலகு என்று ஏங்குவோர்க்கும் என்றும்
 இன்னா இறப்பு என்று அழுவோர்க்கும் என்றும் — இன்னா
 எல்லாம் பொறுத்தவர்க்கும் இன்னா ஒன்று உண்டு என்று
 கல்லாதார் கேட்கும் கதை.`,
    transliteration:
`Iṉṉā ivvulaku eṉṟu ēṅkuvōrkkum eṉṟum
 iṉṉā iṟappu eṉṟu aḻuvōrkkum eṉṟum — iṉṉā
 ellām poṟuttavarkum iṉṉā oṉṟu uṇṭu eṉṟu
 kallātār kēṭkum katai.`,
    english: `Painful — even for those who cry out that this world is painful. Painful — even for those who weep that death is painful. Painful — even for those who have endured everything. There is still one more iṉṉā, says the tale that even the unlearned will hear.`,
    note: `The closing verse opens the anthology outward: after forty quatrains cataloguing pain, the final word is that the catalogue is never complete. Even those who have wept for the world, even those who have borne everything — there is still one more painful thing. The "tale that even the unlearned will hear" is life itself. The work ends by refusing to end.`,
    tamilUrai: `வலிகள் பற்றிய நூலின் கடைசி கவிதை வேதனையானது; என்றும் தொடரக்கூடிய பட்டியல் வேதனையானது; கடினமாக இருக்கும்போது வாழ்வு வேதனையானது. ஆனால் வலியை பெயரிட்டு அழைப்பது இனிமையானது.`,
    altTranslation: `Painful is the final poem of a book about painful things; painful is any list that could go on forever; painful is life when it is hard — and yet it is sweet to have named the pain. — Cutler`,
  }

];
