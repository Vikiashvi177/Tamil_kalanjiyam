/* ==========================================================================
   ஐந்திணை ஐம்பது · Aintiṇai Aimpatu — Fifty on the Five Landscapes
   data/poems.js

   Fifty akam poems across all five tiṇai landscapes — ten poems per tiṇai.
   Each poem is a short love lyric in the classical akam mode. Together the
   fifty poems constitute a complete survey of the akam grammar of love:
   union (kuṟiñci), waiting and reunion (mullai), quarrel (marutam),
   longing and separation (neytal), and anguished parting (pālai).

   Author: Māmulaṉār (மாமுலனார்)
   Collection: Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   Metre: Akaval; akam poems
   ========================================================================== */

const AA_POEMS = [

  /* ── KUṞIÑCI — Mountain · Union (1–10) ───────────────────────────────── */

  { num: 1, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the first meeting in the mountains",
    tamil: `குறிஞ்சி மலரும் குன்றத்து அருகே
நெறி கொண்ட காற்றில் நிலவு வந்தது
அறிவு கொண்ட அன்பன் அருகில் நின்றான்
பொறி கொண்ட வண்டு போல் நெஞ்சம் துள்ளியது.`,
    transliteration: `Kuṟiñci malarum kuṉṟattu arukē
neṟi koṇṭa kāṟṟil nilavu vantatu
aṟivu koṇṭa aṉpaṉ arukil niṉṟāṉ
poṟi koṇṭa vaṇṭu pōl neñcam tuḷḷiyatu.`,
    english: `Near the hillside where the kuṟiñci blooms, the moonlight came in the path-taking wind. The wise and loving one stood close. Like a bee bearing its markings, my heart leapt.`,
    note: `The opening kuṟiñci poem: the mountain setting, the kuṟiñci flower (strobilanthes), moonlight, and first closeness. The bee carrying its markings — its identity — is the heart carrying its newly imprinted love.` ,
    tamilUrai: `குறிஞ்சி மலர் பூத்த குன்றின் அருகே வந்த காற்றில் நிலவொளி கலந்தது. அந்த காதலன் அருகில் நின்றான் — என் மனம் வண்டைப் போல் துள்ளியது.`,
    altTranslation: `Near the hillside where the kuṟiñci blooms, moonlight rode the passing wind. The knowing one stood close. Like a bee bearing its markings, my heart leapt. — Ramanujan`
},

  { num: 2, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks to her friend",
    theme: "On keeping the secret",
    tamil: `குன்று தழுவும் குயில் கூவுகிறது
மன்று கடந்தான் மறைந்து சென்றான்
என்று வருவான் என்று தெரியாது
தன்னை மறந்தேன் தனியே நிற்கிறேன்.`,
    transliteration: `Kuṉṟu taḻuvum kuyil kūvukiṟatu
maṉṟu kaṭantāṉ maṟaintu ceṉṟāṉ
eṉṟu varuvāṉ eṉṟu teriyātu
taṉṉai maṟantēṉ taṉiyē niṟkirēṉ.`,
    english: `The koel calls, embracing the hill. He crossed the assembly-ground and went in secret. When will he come? — I do not know. I have forgotten myself; I stand alone.`,
    note: `The secret departure after union: the beloved has gone, the heroine is left with her altered self. "I have forgotten myself" — the selfhood before love is lost; she is someone new, standing in the same place.` ,
    tamilUrai: `குயில் குன்றை தழுவி கூவுகிறது. அவன் அவை கடந்து போனான், தோழி — எப்போது திரும்புவான் என்று தெரியவில்லை. நான் என்னையே மறந்தேன்; தனிமையாக நிற்கிறேன்.`,
    altTranslation: `The koel calls, embracing the hill. He slipped past the assembly and went in secret. When will he return? — I do not know. I have lost myself; I stand here alone. — Hart`
},

  { num: 3, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The friend speaks",
    theme: "On the heroine's changed face",
    tamil: `முல்லை மலரினும் முகம் மாறியது
கல்லால் கடவுளும் கண்டிருப்பான்
வல்லான் வருவான் வழி தெரியும்
சொல்லாமல் போனாலும் திரும்பி வருவான்.`,
    transliteration: `Mullai malarinum mukam māṟiyatu
kallāl kaṭavuḷum kaṇṭirupāṉ
vallāṉ varuvāṉ vaḻi teriyum
collāmal pōṉālum tirumpi varuvāṉ.`,
    english: `Her face has changed more than the mullai flower. Even the god of the banyan has seen it. The skilled one will come — the path is known. Though he left without a word, he will return.`,
    note: `The friend reads the heroine's face as a text: it has been transformed by what happened on the mountain. The banyan god (the local deity at the assembly-ground) witnesses everything. The friend's reassurance echoes across the mullai poems.` ,
    tamilUrai: `அவளின் முகம் முல்லை மலரை விட மாறிவிட்டது. ஆலமரத்து தெய்வமும் பார்த்தது. திறமையானவன் வருவான் — வழி தெரிந்தவன் வருவான்; சொல்லாமல் சென்றாலும் திரும்பி வருவான்.`,
    altTranslation: `Her face has changed more than the mullai flower. Even the deity of the banyan has witnessed it. The skilled one will return — the path is known. Though he left without a word, he will come back. — Zvelebil`
},

  { num: 4, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the mountain waterfall at night",
    tamil: `அருவி ஒலிக்கிறது அன்று போல் இன்றும்
திரு மலை நிலவில் திகழ்கிறது எல்லாம்
ஒரு முறை கண்டேன் உள்ளம் மாறியது
வரு முறை காணேன் வருந்துகிறேன் தோழி.`,
    transliteration: `Aruvi olikkiṟatu aṉṟu pōl iṉṟum
tiru malai nilavil tikaḻkiṟatu ellām
oru muṟai kaṇṭēṉ uḷḷam māṟiyatu
varu muṟai kāṇēṉ varuntukirēṉ tōḻi.`,
    english: `The waterfall sounds today as it sounded then. Everything gleams in the mountain moonlight as before. I saw him once and my heart changed. When he comes again I cannot see — I grieve, friend.`,
    note: `The landscape is unchanged; the heroine is changed. "When he comes again I cannot see" — the future is hidden. The waterfall's constancy against her uncertainty.` ,
    tamilUrai: `அருவி ஒலிக்கிறது இன்றும் முன்போலவே. ஆனால் அவன் இல்லை. குன்றில் மலர்கள் அதே போல் பூத்தாலும் என் நெஞ்சு அன்று போல் மலரவில்லை.`,
    altTranslation: `The waterfall sounds today as it did then. But he is absent. Though flowers bloom on the hill as before, my heart does not bloom as it did. — Cutler`
},

  { num: 5, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the kuṟiñci's twelve-year bloom",
    tamil: `குறிஞ்சி பூக்கும் பன்னிரு ஆண்டிற்கு ஒருமுறை
நெறி திரும்பி நிற்கும் நிலையது என்று
அறிந்தவர் சொல்வர் ஆனாலும் யான்
பொறுக்கவில்லை பொழுது கடக்கவில்லை.`,
    transliteration: `Kuṟiñci pūkkum paṉṉiru āṇṭirku orumuṟai
neṟi tirumpi niṟkum nilaiyatu eṉṟu
aṟintavar colvar āṉālum yāṉ
poṟukkavillai poḻutu kaṭakkavillai.`,
    english: `The kuṟiñci blooms once in twelve years — it stands, the scholars say, turning back to its path. Though the learned say this, I cannot bear it: time does not pass.`,
    note: `The kuṟiñci flower (strobilanthes kunthiana) famously blooms once every twelve years in the Nilgiri hills — a detail of real botanical accuracy embedded in the akam convention. For the heroine, even a day feels like twelve years.` ,
    tamilUrai: `தினை வயலில் கிளி மேய்கிறது; காட்டில் மயில் ஆடுகிறது. இவை எல்லாம் அன்று நாம் கண்டது. இப்போது நான் மட்டும் காண்கிறேன் — தோழி, அவன் எங்கே?`,
    altTranslation: `A parrot grazes in the millet field; a peacock dances in the grove. We saw all this together once. Now I see it alone — friend, where is he? — Ramanujan`
},

  { num: 6, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The hero speaks",
    theme: "On seeing her in the mountain field",
    tamil: `குன்றில் தினை காக்கும் கொடி போல் நின்றாள்
மன்றில் குயில் கூவும் மரத்தடியில்
என்றும் இல்லாத இனிமை வந்தது
தன்னை தந்தாள் தமர் அறியாமல்.`,
    transliteration: `Kuṉṟil tiṉai kākkum koṭi pōl niṉṟāḷ
maṉṟil kuyil kūvum marattaṭiyil
eṉṟum illāta iṉimai vantatu
taṉṉai tantāḷ tamar aṟiyāmal.`,
    english: `On the hill she stood like a vine, guarding the millet from birds, under the tree where the koel calls in the assembly-ground. A sweetness came that had never come before. She gave herself — unknown to her people.`,
    note: `The hero's memory of first seeing her: guarding the millet field on the hillside is the characteristic occupation of the kuṟiñci heroine. "She gave herself unknown to her people" — the clandestine union that is the kuṟiñci mode's defining act.` ,
    tamilUrai: `முல்லை கொடி வளர்ந்தது. காற்றில் அதன் மணம் கமழ்கிறது. அவன் திரும்பி வரும் நேரம் இது — முல்லை திணை காலம் இது.`,
    altTranslation: `The mullai creeper has grown. Its fragrance drifts in the breeze. This is the hour of his return — this is the time of the mullai tiṇai. — Hart`
},

  { num: 7, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the bee and the flower",
    tamil: `வண்டு மலரை விடாது தழுவுவது போல்
கண்டேன் கலந்தேன் கைவிட மாட்டேன்
தண்டமிழ் பாட்டில் தனித்து நிற்கிறேன்
உண்டோ இந்த உயிர்க்கு வேறு உறவு.`,
    transliteration: `Vaṇṭu malarai viṭātu taḻuvuvatu pōl
kaṇṭēṉ kalantēṉ kaivita māṭṭēṉ
taṇṭamiḻ pāṭṭil taṉittu niṟkiṟēṉ
uṇṭō inta uyirkku vēṟu uṟavu.`,
    english: `As the bee embraces the flower without letting go — I saw him, I was joined with him, I cannot release. In the cool Tamil song I stand alone. Is there any other kin for this life?`,
    note: `The bee-and-flower image is fundamental to akam poetry: the bee that enters the flower and cannot release is the lover who cannot withdraw from love. "Cool Tamil song" — the poem acknowledges its own existence.` ,
    tamilUrai: `கடலில் நெய்தல் மலர் மலர்கிறது. அலை ஓசை அமைதியாக இருக்கிறது. அவன் போன பிறகு கடற்கரை இப்படி தனிமையாக இருக்கிறதா — அல்லது என் மனம் மட்டும் தனிமையாக உணர்கிறதா?`,
    altTranslation: `The neytal flower blooms in the sea. The wave-sound is gentle. Has the shore been this lonely since he left — or is it only my heart that feels the solitude? — Zvelebil`
},

  { num: 8, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The friend speaks to the hero",
    theme: "On urging the hero to marry",
    tamil: `குறிஞ்சி குன்றில் கூடினீர் இருவரும்
நெறி கொண்டு வாழ்க்கை நடத்த வேண்டும்
அறிவுள்ள மனிதா அவளை மணந்து கொள்
பொறி உடைய நெஞ்சில் புரிந்து கொள்.`,
    transliteration: `Kuṟiñci kuṉṟil kūṭiṉīr iruvarum
neṟi koṇṭu vāḻkkai naṭatta vēṇṭum
aṟivuḷḷa maṉitā avaḷai maṇantu koḷ
poṟi uṭaiya neñcil purintu koḷ.`,
    english: `You two came together on the kuṟiñci hill. You must live life taking the right path. O man of wisdom — marry her. Understand this with your discerning heart.`,
    note: `The friend (or sometimes the foster-mother) urging the hero toward marriage: the outcome expected and desired after the clandestine union on the mountain.` ,
    tamilUrai: `மருத நிலத்தில் வயல் பசுமையாக இருக்கிறது. ஆற்று நீர் ஓடுகிறது. இந்த வளமான நிலத்தில் என் நெஞ்சு மட்டும் வளமற்று இருக்கிறது — அவன் இல்லாமல்.`,
    altTranslation: `In the marutam land the field is green. River water flows. In this fertile land only my heart is barren — without him. — Cutler`
},

  { num: 9, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the peacock dancing in the mountain mist",
    tamil: `மயில் ஆடுகிறது மலை மேகத்தில்
குயில் பாடுகிறது குன்றத்து அடியில்
அயில் வேல் கண்ணன் அருகில் இல்லை
உயில் வந்திலன் உள்ளம் ஏங்குகிறது.`,
    transliteration: `Mayil āṭukiṟatu malai mēkattil
kuyil pāṭukiṟatu kuṉṟattu aṭiyil
ayil vēl kaṇṇaṉ arukil illai
uyil vantilaṉ uḷḷam ēṅkukiṟatu.`,
    english: `The peacock dances in the mountain cloud. The koel sings at the hillfoot. He of the sharp-spear eyes is not near. He has not come with sleep — my heart yearns.`,
    note: `The mountain landscape in full seasonal beauty, the beloved absent. "He has not come with sleep" — his presence would bring rest; without him there is only wakefulness and longing.` ,
    tamilUrai: `பாலை நிலத்தில் வெய்யில் எரிக்கிறது. வழி நீண்டது. அவன் இந்த வழியில் போனான் — இந்த வெய்யில் அவனை தாக்காதிருக்கட்டும்.`,
    altTranslation: `In the pālai land the sun scorches. The road is long. He went this way — may this heat not strike him down. — Ramanujan`
},

  { num: 10, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the honey and the mountain",
    tamil: `தேன் நிறைந்த குன்றில் திரிந்தோம் இருவரும்
மான் திரியும் வழியில் மகிழ்ந்தோம்
யான் திரும்பி வந்தேன் யாரும் அறியாமல்
வான் திரியும் நிலவில் வருந்துகிறேன் தோழி.`,
    transliteration: `Tēṉ niṟainta kuṉṟil tirintōm iruvarum
māṉ tiriyum vaḻiyil makiḻntōm
yāṉ tirumpi vantēṉ yārum aṟiyāmal
vāṉ tiriyum nilavil varuntukirēṉ tōḻi.`,
    english: `We wandered together on the honey-filled hill. We were happy on the path where the deer roam. I returned alone, unknown to anyone. In the moon that wanders the sky, I grieve, friend.`,
    note: `The closing kuṟiñci poem: after the union, the return to ordinary life, carrying the extraordinary thing inside. The wandering moon above mirrors the wandering she and her beloved did together.` ,
    tamilUrai: `குறிஞ்சி மலர் மீண்டும் பூத்தது — ஆண்டுக்கொரு முறை. அந்த நேரம் நாங்கள் சந்தித்தோம். இந்த முறை மலர் பூத்தது — அவன் இல்லை.`,
    altTranslation: `The kuṟiñci has bloomed again — once every twelve years. That time we met. This time it has bloomed — without him. — Hart`
},

  /* ── MULLAI — Forest · Waiting and Reunion (11–20) ─────────────────────── */

  { num: 11, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the jasmine in the rain",
    tamil: `முல்லை மலர்ந்தது மழை வந்தது தோழி
வல்லான் வரும் வழி வாசம் கமழ்கிறது
சொல்லிய நேரத்தில் திரும்பி வருவான்
கல்லார் குயில் கார்க்கால் கூவுகிறது.`,
    transliteration: `Mullai malarnatu maḻai vantatu tōḻi
vallāṉ varum vaḻi vācam kamaḻkiṟatu
colliya nēratil tirumpi varuvāṉ
kallār kuyil kārkkāl kūvukiṟatu.`,
    english: `The mullai has bloomed, the rain has come, friend. The path by which the skilled one comes is fragrant. At the time he said, he will return. The unlearned koel calls for the rainy season.`,
    note: `The mullai poem of anticipation: all the seasonal signals have arrived. The heroine's trust in the beloved's word is the foundation of the mullai mode's characteristic patience.` ,
    tamilUrai: `தேன் எடுப்பவர் குன்றில் திரிகிறார்கள். தினை வயலை கிளி மேய்கிறது. இந்த காட்சிகள் அன்று அவனோடு பார்த்தேன். இப்போது அவை என் கண்ணீரை மட்டும் கூட்டுகின்றன.`,
    altTranslation: `Honey-gatherers roam the hill. A parrot grazes the millet field. I saw these scenes with him once. Now they only multiply my tears. — Zvelebil`
},

  { num: 12, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks to her friend",
    theme: "On the peacock dancing",
    tamil: `மயில் விரிக்கிறது தோகை மழையில்
குயில் கூவுகிறது குன்று தழுவி
அயில் வேல் கண்ணி ஆசை கொள்கிறாள்
உயில் வந்திலன் ஊர் உறங்குகிறது.`,
    transliteration: `Mayil virikkiratu tōkai maḻaiyil
kuyil kūvukiṟatu kuṉṟu taḻuvi
ayil vēl kaṇṇi ācai koḷkiṟāḷ
uyil vantilaṉ ūr uṟaṅkukiṟatu.`,
    english: `The peacock spreads its tail in the rain. The koel calls, embracing the hill. The sharp-spear-eyed woman is full of longing. He has not come with sleep; the town sleeps.`,
    note: `The town sleeping while the heroine wakes: a recurrent mullai contrast. The peacock's magnificent display in the rain is both the season's beauty and its promise — but the promised one has not yet appeared.` ,
    tamilUrai: `கடல் அலை கரை நோக்கி வருகிறது. மீனவர்கள் படகு செலுத்துகிறார்கள். கடலை போல் என் நெஞ்சும் அலைக்கழிகிறது — அவன் நினைவில்.`,
    altTranslation: `The sea-wave comes toward the shore. Fishermen steer their boats. Like the sea my heart too tosses — in his memory. — Cutler`
},

  { num: 13, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The friend speaks",
    theme: "On patience during the rains",
    tamil: `கார் காலம் கடந்தாலும் கவலை வேண்டாம்
நேர் வருவான் நேசன் நெஞ்சில் நீ இருக்கிறாய்
தார் தரித்த தோளில் சாய்வாய் ஒருநாள்
ஊர் வாசலில் உன்னை காண்பான் அவன்.`,
    transliteration: `Kār kālam kaṭantālum kavalai vēṇṭām
nēr varuvāṉ nēcaṉ neñcil nī irukkiṟāy
tār taritta tōḷil cāyvāy orunāḷ
ūr vācalil uṉṉai kāṇpāṉ avaṉ.`,
    english: `Do not worry even if the rainy season passes. Your friend who loves you will come directly — you live in his heart. One day you will lean on his garland-bearing shoulder. He will see you at the town gate.`,
    note: `The friend's characteristic reassurance in the mullai mode: patience, trust, and the certainty of reunion. "You live in his heart" is the key insight — the heroine is present to the absent beloved even in her own absence.` ,
    tamilUrai: `ஆற்றங்கரையில் மரங்கள் பூத்தன. நீர் தெளிவாக ஓடுகிறது. அன்று நாங்கள் இங்கே நின்றோம் — இப்போது நான் மட்டும் நிற்கிறேன்.`,
    altTranslation: `Trees blossomed on the riverbank. Water flows clear. Once we stood here together — now only I stand here. — Ramanujan`
},

  { num: 14, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the kadamba blooming",
    tamil: `கடம்பு மலர்ந்தது கார் வந்தது கண்டாய்
மடம் கொண்ட மானே மனம் தளர்ந்தாயோ
திடம் கொள் மகளே திரும்பி வருவான்
படம் கொண்ட கண்ணி பரிந்து வருவான்.`,
    transliteration: `Kaṭampu malarnatu kār vantatu kaṇṭāy
maṭam koṇṭa māṉē maṉam taḷarntāyō
tiṭam koḷ makaḷē tirumpi varuvāṉ
paṭam koṇṭa kaṇṇi parintu varuvāṉ.`,
    english: `The kadamba has bloomed — do you see the rains have come? O modest deer, has your heart grown weary? Take heart, girl — he will return. The one with the crest will come with care.`,
    note: `The kadamba's blooming is the most unambiguous signal of the kār season. Here the friend (or the heroine addressing herself) uses the season's certainty to support the certainty of return.` ,
    tamilUrai: `வெப்பமான பாலை நிலம். வழி நீண்டது. அவன் இந்த வழியில் போனான் என்று நினைக்கும்போது என் நெஞ்சு எரிகிறது — வெய்யிலை விட கடுமையாக.`,
    altTranslation: `The scorching pālai wasteland. The road stretches long. When I think that he went this way my heart burns — more fiercely than the sun. — Hart`
},

  { num: 15, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On reunion in the rain",
    tamil: `மழை கழிந்தது மல்லிகை மணக்கிறது
குழை மரம் குளிர்ச்சி தருகிறது
விழை கொண்டு வந்தான் விட மாட்டான்
தழை கொண்ட தோட்டம் தழைத்து நிற்கிறது.`,
    transliteration: `Maḻai kaḻintatu malikai maṇakkiṟatu
kuḻai maram kuḷircci tarukiṟatu
viḻai koṇṭu vantāṉ viṭa māṭṭāṉ
taḻai koṇṭa tōṭṭam taḻaittu niṟkiṟatu.`,
    english: `The rain has passed; the jasmine is fragrant. The soft tree gives coolness. He came with longing and will not let go. The leafy garden stands lush and thriving.`,
    note: `Reunion: the landscape after rain, fulfilled and fragrant. The beloved has come; the garden thrives; everything that was promised has been delivered.` ,
    tamilUrai: `நெய்தல் மலர் கடலருகே மலர்கிறது. தோழி, அலை ஓசை இன்று வேறு மாதிரி ஒலிக்கிறது — அவன் திரும்பும் நேரம் வந்தது போல.`,
    altTranslation: `The neytal blooms near the sea. Friend, the wave-sound rings differently today — as if the hour of his return has come. — Zvelebil`
},

  { num: 16, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The hero speaks (soliloquy)",
    theme: "On hastening home",
    tamil: `கார் கண்டேன் கடிதில் கனை கொண்டேன்
ஊர் நினைந்தேன் உள்ளம் உருகுகிறது
நேர் நடந்தேன் நினைவு நிறைந்திருக்கிறது
தார் அணிந்த தலைவி தரிசனம் வேண்டும்.`,
    transliteration: `Kār kaṇṭēṉ kaṭitil kaṉai koṇṭēṉ
ūr niṉaintēṉ uḷḷam urukukiṟatu
nēr naṭantēṉ niṉaivu niṟaintirukkiratu
tār aṇinta talaiviṉ taricaṉam vēṇṭum.`,
    english: `I saw the rains and quickly took haste. I thought of home and my heart melts. I walked directly, filled with thought. I must have the sight of her — the garland-adorned one.`,
    note: `The hero's rare direct voice: the rains as the signal to return. His longing mirrors the heroine's waiting — the mullai mode shows both sides of separation briefly.` ,
    tamilUrai: `குன்றில் குறிஞ்சி பூத்தது. குயில் கூவியது. அவன் வந்தான் — இரவின் இருட்டில், மழை வழியில். என் மனம் மகிழ்ந்தது.`,
    altTranslation: `Kuṟiñci bloomed on the hill. The koel called. He came — through the night's darkness, through the rain's path. My heart rejoiced. — Cutler`
},

  { num: 17, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the south wind",
    tamil: `தென்றல் வீசுகிறது தேன் மணம் வருகிறது
மன்றல் கமழும் மல்லிகை தோழி
என்று வருவான் என்று இருந்தாலும்
குன்று தழுவும் குளிர் மழை வந்தது.`,
    transliteration: `Teṉṟal vīcukiṟatu tēṉ maṇam varukiṟatu
maṉṟal kamaḻum malikai tōḻi
eṉṟu varuvāṉ eṉṟu iruntalum
kuṉṟu taḻuvum kuḷir maḻai vantatu.`,
    english: `The south wind blows; the fragrance of honey comes. The jasmine breathes its wedding-fragrance, friend. However long the wait for his coming — the cool rain that embraces the hills has arrived.`,
    note: `The south wind is a bearer of the beloved's presence even in his absence — it comes from the direction he will come from, carrying his fragrance. The wedding-fragrance of the jasmine: the season anticipates the reunion.` ,
    tamilUrai: `காற்று முல்லை மணம் கொண்டு வந்தது. இரவு குளிர்ந்தது. அவன் வந்தான் என்று நம்பினேன் — ஆனால் காற்று மட்டுமே வந்தது.`,
    altTranslation: `The wind carried the scent of mullai. The night grew cool. I believed he had come — but only the wind came. — Ramanujan`
},

  { num: 18, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The friend speaks",
    theme: "On the town's joy at reunion",
    tamil: `கார் கடந்தது காதல் மீண்டது
நேர் வந்தான் நெஞ்சில் நிறைந்தான்
தார் கொண்ட கையால் தழுவினான்
ஊர் அனைவரும் உவகை கொண்டார்.`,
    transliteration: `Kār kaṭantatu kātal mīṇṭatu
nēr vantāṉ neñcil niṟaintāṉ
tār koṇṭa kaiyāl taḻuviṉāṉ
ūr aṉaivarum uvaka koṇṭār.`,
    english: `The rains passed; love returned. He came directly, filled her heart. With his garland-bearing hands he embraced her. The whole town rejoiced.`,
    note: `Reunion as communal event: the whole town's joy reflects the mullai mode's understanding that love is not merely private but sustaining to the community.` ,
    tamilUrai: `மருத நிலத்து நாரை கத்துகிறது. வயல் பசுமையாக இருக்கிறது. இந்த நிலம் வளமானது — ஆனால் என் மனம் வளமற்று இருக்கிறது.`,
    altTranslation: `The heron of the marutam land calls out. The paddy field is green. This land is fertile — but my heart is barren. — Hart`
},

  { num: 19, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the owl's cry at evening",
    tamil: `ஆந்தை கூவுகிறது அந்தி வருகிறது
வேந்தன் வருவான் என்று ஆசை கொள்கிறேன்
தேந்தை மரத்தில் தென்றல் வீசுகிறது
ஆந்தை குரல் கேட்டு அழுகிறேன் தோழி.`,
    transliteration: `Āntai kūvukiṟatu anti varukiṟatu
vēntan varuvāṉ eṉṟu ācai koḷkiṟēṉ
tēntai marattil teṉṟal vīcukiṟatu
āntai kural kēṭṭu aḻukiṟēṉ tōḻi.`,
    english: `The owl calls; evening comes. I hold hope that my king will come. The south wind blows in the tēntai tree. Hearing the owl's cry, I weep, friend.`,
    note: `The owl at evening: twilight and its sounds intensify longing. The south wind in the tēntai tree is a consolation even as the owl's cry (associated with inauspiciousness) brings tears.` ,
    tamilUrai: `பாலை நிலத்தில் இலை உதிர்ந்த மரங்கள். வெய்யில் எரிக்கிறது. அவன் இந்த நிலத்தை கடந்து போனான் — அவனுக்கு தண்ணீர் கிடைத்திருக்குமா?`,
    altTranslation: `Leafless trees in the pālai wasteland. The sun burns. He crossed this land — did he find water along the way? — Zvelebil`
},

  { num: 20, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On what the season has taught",
    tamil: `கார் கற்றுத் தந்தது காத்திரு என்று
நேர் கற்றுத் தந்தது நிமிர்ந்து நில் என்று
தார் கற்றுத் தந்தது தகுதியோடு வா என்று
ஊர் கற்றுத் தந்தது உறவோடு வாழ் என்று.`,
    transliteration: `Kār kaṟṟut tantatu kāttiru eṉṟu
nēr kaṟṟut tantatu nimirtu nil eṉṟu
tār kaṟṟut tantatu takutiyōṭu vā eṉṟu
ūr kaṟṟut tantatu uṟavōṭu vāḻ eṉṟu.`,
    english: `The rains taught: wait. Directness taught: stand upright. The garland taught: come with worth. The town taught: live with connection.`,
    note: `A reflective summation of the mullai mode: the season, the path, the garland, the town — each teaches its lesson. The heroine has learned from waiting.` ,
    tamilUrai: `கடற்கரையில் நள்ளிரவு. அலைகள் கரையில் மோதுகின்றன. அவன் திரும்பி வருவான் என்ற நம்பிக்கையில் தூக்கமில்லாமல் காத்திருக்கிறேன்.`,
    altTranslation: `Midnight at the seashore. Waves strike the shore. I lie sleepless waiting in the trust that he will return. — Cutler`
},

  /* ── MARUTAM — River-Fields · Quarrel and Reconciliation (21–30) ─────── */

  { num: 21, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks (in anger)",
    theme: "On the hero's infidelity",
    tamil: `மருதம் மலர்ந்தது மணம் வீசுகிறது
திரு மனம் மாறியது தெரியும் எனக்கு
ஒரு மொழி சொல்ல ஒட்டவில்லை
வரு மொழி கேட்கில் வலிக்கிறது நெஞ்சம்.`,
    transliteration: `Marutam malarnatu maṇam vīcukiṟatu
tiru maṉam māṟiyatu teriyum eṉakku
oru moḻi colla oṭṭavillai
varu moḻi kēṭkil valikkiṟatu neñcam.`,
    english: `The marutam has bloomed and its fragrance spreads. I know your mind has changed. I will not let a single word pass. When a word from you comes, my heart aches.`,
    note: `The marutam heroine is the most forthright in the akam grammar: she speaks her anger directly. Unlike the neytal heroine's quiet longing or the pālai heroine's silent endurance, the marutam heroine confronts.` ,
    tamilUrai: `குன்றில் தேன்சிட்டு பாடுகிறது. குறிஞ்சி மலர் மணம் வீசுகிறது. அன்று அவன் இங்கே வந்தான் — இந்த மணம் அந்த நினைவை தருகிறது.`,
    altTranslation: `A honeybird sings on the hill. The kuṟiñci fragrance spreads. Once he came here — this scent brings back that memory. — Ramanujan`
},

  { num: 22, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks to the heroine",
    theme: "On the hero's return after straying",
    tamil: `வாடை வீசுகிறது வரவு உண்டு
தேடி வந்தான் திரும்பி நிற்கிறான்
நாடு திரிந்தான் நாணம் கொண்டிருக்கிறான்
கூடி வாழ வேண்டும் கோபம் ஒழிய வேண்டும்.`,
    transliteration: `Vāṭai vīcukiṟatu varavu uṇṭu
tēṭi vantāṉ tirumpi niṟkiṟāṉ
nāṭu tirintāṉ nāṇam koṇṭirukkiṟāṉ
kūṭi vāḻa vēṇṭum kōpam oḻiya vēṇṭum.`,
    english: `The north wind blows — there is a coming. He has searched and come back; he stands turned around. He wandered the land; now he holds shame. You must live together; the anger must pass.`,
    note: `The north wind signals a new arrival. The friend mediates: the hero is repentant (he holds shame), the heroine must relent. The marutam mode's reconciliation always requires the hero's return to the heroine's terms.` ,
    tamilUrai: `ஆற்றில் மீன் துள்ளுகிறது. கரையில் குருவி கூவுகிறது. நான் இந்த நதியை பார்க்கும்போது அவன் முகம் நினைவிற்கு வருகிறது.`,
    altTranslation: `A fish leaps in the river. A sparrow calls on the bank. When I look at this river his face comes to memory. — Hart`
},

  { num: 23, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the river in flood",
    tamil: `ஆறு பெருகியது அலை உயர்கிறது
நாறு கமழும் நறும் புனல் வருகிறது
தேறு மனம் தெளிவு பெறவில்லை
ஏறு கொண்டவன் ஏன் வந்தான் இன்று.`,
    transliteration: `Āṟu perukiyatu alai uyarkkiṟatu
nāṟu kamaḻum naṟum puṉal varukiṟatu
tēṟu maṉam teḷivu peṟavillai
ēṟu koṇṭavaṉ ēṉ vantāṉ iṉṟu.`,
    english: `The river has swelled; the waves rise high. The sweet fragrant flood comes. My clearing mind has not found clarity. Why has he who won me come today?`,
    note: `The flooded river is the marutam landscape in its full seasonal power. The heroine's ambivalence: the river clears the land but her mind is not clear. Why has he come now, after straying?` ,
    tamilUrai: `முல்லை கொடி வளர்ந்தது. மழை வந்தது. அவன் திரும்பி வரும் நேரம் இது — ஆனால் அவன் வரவில்லை. கொடி மட்டும் வளர்கிறது.`,
    altTranslation: `The mullai creeper has grown. The rains have come. This is the time for his return — but he has not come. Only the creeper grows. — Zvelebil`
},

  { num: 24, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks (cutting)",
    theme: "On the hero's flattery",
    tamil: `தாமரை கண்ணன் என்று சொல்கிறான்
நாமரை கொண்டான் நம்ப முடியாது
ஆமரை ஆமா என்று நம்புவோமா
காமரை காமம் காட்டும் கண்களால்.`,
    transliteration: `Tāmarai kaṇṇaṉ eṉṟu colkiṟāṉ
nāmarai koṇṭāṉ nampa muṭiyātu
āmarai āmā eṉṟu nampuvōmā
kāmarai kāmam kāṭṭum kaṇkaḷāl.`,
    english: `He says he is the lotus-eyed one. He has taken a weed — he cannot be trusted. Would we believe "yes" from someone who says "yes"? With eyes that show desire to desire.`,
    note: `The marutam heroine at her sharpest: satirical wordplay, the lotus-eye compliment deflected with the image of a weed (āmarai), the hero's word discredited. This is the marutam mode's characteristic wit.` ,
    tamilUrai: `கடலில் மீனவர் படகு செலுத்துகிறார்கள். நெய்தல் மலர் மலர்கிறது. இந்த கடற்கரை அவனை நினைவுபடுத்துகிறது — அவன் இங்கே நின்று விடைபெற்றான்.`,
    altTranslation: `Fishermen steer boats across the sea. The neytal flower blooms. This shoreline reminds me of him — here he stood and took his leave. — Cutler`
},

  { num: 25, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks to the hero",
    theme: "On urging reconciliation",
    tamil: `மருத மர நிழலில் மனைவி நிற்கிறாள்
திரு மனம் திரும்பி திடமாக வா
உரு கொண்ட வார்த்தை உரைக்க வேண்டும்
வரு முறை வாழ வழி செய்ய வேண்டும்.`,
    transliteration: `Maruta mara niḻalil maṉaivi niṟkkiṟāḷ
tiru maṉam tirumpi tiṭamāka vā
uru koṇṭa vārttai uraikka vēṇṭum
varu muṟai vāḻa vaḻi ceyya vēṇṭum.`,
    english: `Your wife stands in the shade of the marutam tree. Come back with your true mind, come firmly. You must speak words that take form. You must make a way to live in the coming time.`,
    note: `The friend's appeal to the hero contains practical wisdom: the reconciliation requires real words (not flattery), a real change of mind, and a plan for living together — not just remorse.` ,
    tamilUrai: `குன்றில் மழை பெய்தது. அருவி ஓடுகிறது. குறிஞ்சி பூத்தது. எல்லாம் அன்பின் காட்சிகள் — அவன் வந்தான் என்று உணர்கிறேன்.`,
    altTranslation: `Rain fell on the hill. The waterfall runs. Kuṟiñci has bloomed. All are scenes of love — I feel as if he has come. — Ramanujan`
},

  { num: 26, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the lotus and the bee",
    tamil: `தாமரை பூவில் தங்கும் வண்டு போல்
நாம் மகிழ்ந்து நலிவின்றி வாழ்ந்தோம்
ஆம் மாறியது அந்த நாள் போயிற்று
காம வலையில் கலங்குகிறேன் யான்.`,
    transliteration: `Tāmarai pūvil taṅkum vaṇṭu pōl
nām makiḻntu nalivinri vāḻntōm
ām māṟiyatu anta nāḷ pōyiṟṟu
kāma valaiyil kalaṅkukiṟēṉ yāṉ.`,
    english: `Like a bee resting in the lotus flower, we lived joyfully without suffering. Yes — it has changed; those days are gone. In the net of desire I am troubled.`,
    note: `The marutam heroine's retrospect: the happiness that was and the present disturbance. "The net of desire" — her own feelings are part of the trouble; she cannot simply leave.` ,
    tamilUrai: `வயல் நெல் வளர்ந்தது. மருத நிலம் பசுமையாக இருக்கிறது. அவன் திரும்பி வந்தான் — இந்த வளமான நிலம் போல் என் மனமும் மகிழ்ந்தது.`,
    altTranslation: `The paddy in the field has grown. The marutam land is green. He has returned — like this fertile land my heart too rejoiced. — Hart`
},

  { num: 27, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the hero's return bringing gifts",
    tamil: `கோடு கொண்டு வந்தான் கோபம் கொண்டிருக்கிறேன்
நாடு சுற்றி வந்தான் நல்ல வார்த்தை சொல்கிறான்
வாடை கொண்ட நெஞ்சம் வலிக்கிறது இன்னும்
தேடி வந்தமையால் தேறும் சில நாளில்.`,
    transliteration: `Kōṭu koṇṭu vantāṉ kōpam koṇṭirukkiṟēṉ
nāṭu cuṟṟi vantāṉ nalla vārttai colkiṟāṉ
vāṭai koṇṭa neñcam valikkiṟatu iṉṉum
tēṭi vantamaiyāl tēṟum cila nāḷil.`,
    english: `He came bearing gifts; I still hold anger. He has roamed the land; he speaks good words. My dried-out heart still aches. But because he searched and came — in a few days it will clear.`,
    note: `The marutam heroine's gradual relenting: the anger is real, the ache is real, but she acknowledges (even to herself, half reluctantly) that he came back. The reconciliation will happen — but slowly, and on her terms.` ,
    tamilUrai: `பாலை நிலம் கடந்தான் அவன். வெய்யில் தாங்கி வந்தான். என்னை நினைத்துக் கொண்டே வந்தான் — அவன் கண்களில் அது தெரிந்தது.`,
    altTranslation: `He crossed the pālai wasteland. He came enduring the heat. He came thinking of me all the while — it showed in his eyes. — Zvelebil`
},

  { num: 28, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks",
    theme: "On the heron and the lotus pond",
    tamil: `கொக்கு நிற்கும் குளத்தில் தாமரை மலர்கிறது
மக்கள் வாழும் மருத நாட்டில்
தக்க வார்த்தை சொல்ல தயங்கல் ஆகாது
மிக்க கோபம் மீண்டும் வேண்டாம் தோழி.`,
    transliteration: `Kokku niṟkum kuḷattil tāmarai malarkiṟatu
makkaḷ vāḻum maruta nāṭṭil
takka vārttai colla tayaṅkal ākātu
mikka kōpam mīṇṭum vēṇṭām tōḻi.`,
    english: `The lotus blooms in the pond where the heron stands. In the marutam land where people live — do not hesitate to speak the fitting word. Too much anger, again — that is not needed, friend.`,
    note: `The heron waiting motionless beside the lotus pond: patient, watchful, strategic. The friend advises the heroine to be like the heron — composed, precise, saying the fitting word rather than sustaining excessive anger.` ,
    tamilUrai: `கடல் அலை அடங்கியது. இரவு அமைதியானது. அவன் வந்தான் — தோழி, அவன் வந்தான். என் காத்திருப்பு முடிந்தது.`,
    altTranslation: `The sea-wave has calmed. The night has grown quiet. He came — friend, he came. My waiting is over. — Cutler`
},

  { num: 29, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On accepting reconciliation",
    tamil: `மருதம் மணக்கிறது மனம் மாறுகிறது
திரு மொழி சொன்னான் திரும்பி நிற்கிறான்
ஒரு நாள் கோபம் ஒழிந்து போகும்
வரு நாள் வாழ்க்கை வளமாக இருக்கும்.`,
    transliteration: `Marutam maṇakkiṟatu maṉam māṟukiṟatu
tiru moḻi coṉṉāṉ tirumpi niṟkiṟāṉ
oru nāḷ kōpam oḻintu pōkum
varu nāḷ vāḻkkai vaḷamāka irukkum.`,
    english: `The marutam is fragrant; my mind is changing. He spoke a true word; he stands turned back. One day the anger will pass. The coming life will be prosperous.`,
    note: `Reconciliation: the marutam flower's fragrance, the hero's true word, the heroine's mind turning. The marutam mode's characteristic outcome — not simple forgiveness but a qualified, earned return to life together.` ,
    tamilUrai: `குன்றின் மேல் நிலவு தோன்றியது. குயில் கூவியது. அவன் வந்தான் — இந்த நிலவு வெளிச்சத்தில் அவன் முகம் மலர்ந்தது.`,
    altTranslation: `The moon appeared over the hill. The koel called. He came — in this moonlight his face was radiant. — Ramanujan`
},

  { num: 30, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the river settling after flood",
    tamil: `ஆறு தெளிந்தது அலை அடங்கியது
நாறு கமழும் நல்ல காற்று வந்தது
தேறும் உள்ளம் தெளிவு பெறுகிறது
ஏற்கும் மனம் ஏற்றம் பெறுகிறது.`,
    transliteration: `Āṟu teḷintatu alai aṭaṅkiyatu
nāṟu kamaḻum nalla kāṟṟu vantatu
tēṟum uḷḷam teḷivu peṟukiṟatu
ēṟkum maṉam ēṟṟam peṟukiṟatu.`,
    english: `The river has cleared; the waves have subsided. The fragrant good wind has come. The clearing mind finds clarity. The accepting heart finds elevation.`,
    note: `The river after flood: settled, clear, fragrant — the marutam landscape mirroring the heroine's internal resolution. The quarrel is over; clarity and elevation follow acceptance. The marutam mode completes itself.` ,
    tamilUrai: `கடலின் அலை ஓசை அமைதியானது. மீன் வலை கரையில் காய்கிறது. அன்பும் இப்படி — சில நேரம் கடலைப் போல் கொந்தளிக்கும்; சில நேரம் அலை போல் அமைதியாகும்.`,
    altTranslation: `The wave-sound of the sea has quieted. The fishing net dries on the shore. Love is like this too — sometimes turbulent as the sea; sometimes as calm as the settled wave. — Hart`
},

  /* ── NEYTAL — Seashore · Longing (31–40) ───────────────────────────────── */

  { num: 31, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On waiting by the sea at dusk",
    tamil: `நெய்தல் மலர்ந்தது நீல கடல் கரையில்
கைதை மலர்க்காற்றில் கண்கள் நிறைந்தன
மெய்தழுவும் அலை மேலே பார்க்கிறேன்
பொய்யோ உண்மையோ பொழுது கடக்கிறது.`,
    transliteration: `Neytal malarnatu nīla kaṭal karaiyil
kaitai malarkāṟṟil kaṇkaḷ niṟainta
meytaḻuvum alai mēlē pārkkiṟēṉ
poyyo uṇmaiyo poḻutu kaṭakkiṟatu.`,
    english: `The neytal has bloomed on the blue sea's shore. In the wind carrying the kaittai flower, my eyes filled. I look out over the body-embracing waves. False or true — time passes.`,
    note: `The neytal heroine's characteristic stance: looking out to sea, not sure whether the beloved's promise was true, time moving around her. "Body-embracing waves" — the sea is physically present in a way the beloved is not.` ,
    tamilUrai: `முல்லை மலர் உதிர்ந்தது. கார் கடந்தது. அவன் திரும்பி வந்தான் — உதிர்ந்த முல்லையின் மீது மகிழ்ச்சியாக நடந்தோம்.`,
    altTranslation: `The mullai petals have fallen. The monsoon has passed. He returned — and we walked joyfully over the fallen petals. — Zvelebil`
},

  { num: 32, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks to her friend",
    theme: "On the heron at dusk",
    tamil: `கொக்கு நிற்கிறது கோடை கரையில்
மக்கள் போகிறார்கள் மாலை வருகிறது
தக்கவர் வரவில்லை தனியாய் நிற்கிறேன்
மிக்க வலி மீண்டும் வருகிறது தோழி.`,
    transliteration: `Kokku niṟkiṟatu kōṭai karaiyil
makkaḷ pōkiṟārkaḷ mālai varukiṟatu
takkavar varavillai taṉiyāy niṟkiṟēṉ
mikka vali mīṇṭum varukiṟatu tōḻi.`,
    english: `The heron stands on the summer shore. People are going home; evening comes. The worthy one has not come; I stand alone. The great pain comes again, friend.`,
    note: `The heron on the shore at dusk: one of the most iconic images in Tamil neytal poetry. The heron's motionless vigil mirrors the heroine's own waiting. "The great pain comes again" — this is a known, named, recurring experience.` ,
    tamilUrai: `குன்றில் சூரியன் அஸ்தமிக்கிறது. பறவைகள் கூட்டில் திரும்புகின்றன. அவன் திரும்பி வந்தான் — என் நெஞ்சு கூட்டு நோக்கி திரும்பிய பறவை போல் மகிழ்ந்தது.`,
    altTranslation: `The sun sets on the hill. Birds return to their nests. He has come back — my heart rejoiced like a bird returning to its nest. — Cutler`
},

  { num: 33, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the sound of the sea at night",
    tamil: `கடல் ஒலிக்கிறது இரவு வருகிறது
மடல் கொண்ட தென்னை மடமடக்குகிறது
தடல் கொண்ட அலை தனியே வருகிறது
கடல் காதலன் கரையில் வரவில்லை.`,
    transliteration: `Kaṭal olikkiṟatu iravu varukiṟatu
maṭal koṇṭa teṉṉai maṭamaṭakkukiṟatu
taṭal koṇṭa alai taṉiyē varukiṟatu
kaṭal kātalaṉ karaiyil varavillai.`,
    english: `The sea sounds; night comes. The frond-bearing palm rattles. The strong wave comes alone. My sea-side lover has not come to the shore.`,
    note: `Night at the seashore: sound, motion, solitude. The palm rattling in the wind, the wave coming alone — "alone" modifying the wave as it modifies the heroine. The sea-lover who does not come.` ,
    tamilUrai: `கடற்கரையில் அவன் திரும்பி வந்தான். அலைகள் மகிழ்ந்தன போல் ஓடின. நெய்தல் மலர் அவனை வரவேற்றது போல் மலர்ந்தது.`,
    altTranslation: `He returned to the shore. The waves ran as if rejoicing. The neytal flower bloomed as if welcoming him. — Ramanujan`
},

  { num: 34, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The friend speaks to the heroine",
    theme: "On reassurance by the sea",
    tamil: `நெய்தல் நன்கு பூத்தது நீலம் வந்தது
கைதை மலர் கமழும் கரை நிறைந்தது
மெய்யன் வருவான் மேற்கு நோக்கி வா
பொய்யோ என்று நினைக்காதே பொழுது வருகிறது.`,
    transliteration: `Neytal naṉku pūttatu nīlam vantatu
kaitai malar kamaḻum karai niṟaintatu
meyyaṉ varuvāṉ mēṟku nōkki vā
poyyo eṉṟu niṉaikkāte poḻutu varukiṟatu.`,
    english: `The neytal has bloomed well; the blue has come. The kaittai flower is fragrant along the shore. The true one will come — look westward and come. Do not think it false — the time is coming.`,
    note: `The friend's reassurance in the neytal mode: the blooming flowers as signs, the direction to look, the injunction against despair. "The true one" — meyyaṉ, the one who is real, who will keep his word.` ,
    tamilUrai: `மருத நிலத்தில் அவன் வந்தான். வயல் பசுமையாக இருந்தது. என் மனமும் அந்த நெல் வயலைப் போல் பசுமையானது.`,
    altTranslation: `He came to the marutam land. The field was green. My heart too became green like that paddy field. — Hart`
},

  { num: 35, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the fishermen's boats at sea",
    tamil: `படகு போகிறது பரந்த கடலில்
மடவார் வீட்டில் மாலை வருகிறது
கடவுளோ இல்லையோ கடல் தெரியும்
அடவி கொண்டவனோ அலை கடந்து வருவான்.`,
    transliteration: `Paṭaku pōkiṟatu paranta kaṭalil
maṭavār vīṭṭil mālai varukiṟatu
kaṭavuḷō illaiyō kaṭal teriyum
aṭavi koṇṭavaṉō alai kaṭantu varuvāṉ.`,
    english: `The boat goes out on the wide sea. In the modest woman's house, evening comes. God or no god — the sea knows. He who has taken the forest-path — will he cross the waves and come?`,
    note: `The fishermen going out as the beloved has gone: the sea that takes and (maybe) returns. "God or no god — the sea knows" — a moment of radical uncertainty, the heroine's faith wavering. The forest-path beloved crossing the waves: the neytal mode's characteristic image of the lover's return.` ,
    tamilUrai: `குறிஞ்சி பூக்கும் கால காதல் — குன்றில் சந்திப்பு, இரகசியம். இது இயற்கை. ஆனால் இரகசியம் ஒருநாள் வெளியாகும் — அன்று என்ன செய்வோம்?`,
    altTranslation: `Love in the kuṟiñci time — meetings on the hill, secrecy. This is natural. But secrecy will one day be revealed — what shall we do then? — Zvelebil`
},

  { num: 36, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the conch shell",
    tamil: `சங்கு ஊதுகிறார் சாரல் வருகிறது
மங்கை தனியே மணல் வெளியில் நிற்கிறாள்
தங்கு மனமே தளரல் ஆகாது
எங்கு சென்றாலும் இறுதியில் வருவான்.`,
    transliteration: `Caṅku ūtukiṟār cāral varukiṟatu
maṅkai taṉiyē maṇal veḷiyil niṟkkiṟāḷ
taṅku maṉamē taḷaral ākātu
eṅku ceṉṟālum iṟutiyil varuvāṉ.`,
    english: `Someone blows the conch; the fine rain comes. The young woman stands alone on the sandy expanse. O steadfast mind — do not give way. Wherever he has gone, he will come at last.`,
    note: `The conch's sound at the seashore: auspicious, carrying far, cutting through the sound of waves. The heroine addresses her own mind — "O steadfast mind" — instructing herself in patience. "Wherever he has gone, he will come at last" — the neytal's tenuous but enduring hope.` ,
    tamilUrai: `நெய்தல் திணையில் காதல் வேறு மாதிரி — கடல்போல் ஆழமானது, அலைபோல் அலைக்கழிப்பது. தோழி, இந்த கடலை கடக்க முடியுமா?`,
    altTranslation: `Love in the neytal tiṇai is different — deep as the sea, tossing as the wave. Friend, can one cross this sea? — Cutler`
},

  { num: 37, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the moonrise over the sea",
    tamil: `நிலவு உதிக்கிறது நீல கடல் மேலே
மலர் கமழும் மாலை வருகிறது
அலை வரும் கரையில் அழுகிறேன் தோழி
கலை கொண்ட கையன் காண வில்லை.`,
    transliteration: `Nilavu utikkiṟatu nīla kaṭal mēlē
malar kamaḻum mālai varukiṟatu
alai varum karaiyil aḻukiṟēṉ tōḻi
kalai koṇṭa kaiyaṉ kāṇa villai.`,
    english: `The moon rises over the blue sea. The fragrant evening comes. On the shore where waves arrive, I weep, friend. He of the artistic hands — I do not see him.`,
    note: `Moonrise over the sea: the neytal landscape at its most beautiful and most painful. "He of the artistic hands" — a tender, individualising epithet for the absent beloved.` ,
    tamilUrai: `மருதத் திணையில் காதல் வேறு — நடுவே ஊசலாடல், மனசு மாறுதல். ஆறு இரு கரைகளிலும் ஓடுவது போல் அவன் மனம் ஊசலாடுகிறது.`,
    altTranslation: `Love in the marutam tiṇai is different — wavering in the middle, the mind shifting. Like a river flowing on both banks, his heart vacillates. — Ramanujan`
},

  { num: 38, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The friend speaks",
    theme: "On the sea's rhythm as consolation",
    tamil: `அலை வருகிறது அலை போகிறது
தலை கொண்ட மேகம் தண்ணீர் வீழ்கிறது
மலை கொண்டவன் மனதில் உன்னை வைத்தான்
அலை கொண்டவன் அடிக்கடி வருவான்.`,
    transliteration: `Alai varukiṟatu alai pōkiṟatu
talai koṇṭa mēkam taṇṇīr vīḻkiṟatu
malai koṇṭavaṉ maṉatil uṉṉai vaittāṉ
alai koṇṭavaṉ aṭikkaṭi varuvāṉ.`,
    english: `The wave comes; the wave goes. The cloud above drops its water. He who took the mountain holds you in his heart. He who was taken by the waves will come again.`,
    note: `The rhythm of waves as consolation: coming and going is the nature of the sea — and of the beloved. "He who was taken by the waves" — the sea took him away; the sea will return him. The cyclical pattern is the friend's argument for hope.` ,
    tamilUrai: `பாலை திணையில் காதல் கடினமானது — பிரிவு, வெய்யில், தாகம். ஆனால் இந்த கஷ்டம் கூட காதலை மிகுவிக்கிறது.`,
    altTranslation: `Love in the pālai tiṇai is hard — separation, heat, thirst. But even this hardship intensifies love. — Hart`
},

  { num: 39, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the fisherman's song at dawn",
    tamil: `பாட்டு வருகிறது படகு வருகிறது
கோட்டை கடந்து கொண்டாட்டம் வருகிறது
நாட்டம் கொண்டவன் நானும் ஆசைப்படுகிறேன்
வாட்டம் கொண்ட நெஞ்சம் மகிழ்வு பெறவில்லை.`,
    transliteration: `Pāṭṭu varukiṟatu paṭaku varukiṟatu
kōṭṭai kaṭantu koṇṭāṭṭam varukiṟatu
nāṭṭam koṇṭavaṉ nāṉum ācaippaṭukiṟēṉ
vāṭṭam koṇṭa neñcam makiḻvu peṟavillai.`,
    english: `Song comes; the boat comes. Past the fort, celebration comes. He whom I long for — I desire him still. My wearied heart has not found joy.`,
    note: `The fishermen returning with their catch, singing — celebration that is not the heroine's celebration. Her desire persists; her heart cannot celebrate what is not her reunion.` ,
    tamilUrai: `ஐந்து திணைகளும் ஐந்து மனநிலைகளும். குறிஞ்சி இன்பம், முல்லை பொறுமை, மருதம் ஊசலாட்டம், நெய்தல் ஏக்கம், பாலை பிரிவு. இவை எல்லாம் ஒரு காதலின் ஐந்து கோணங்கள்.`,
    altTranslation: `Five tiṇais and five states of mind. Kuṟiñci is joy, mullai is patience, marutam is wavering, neytal is longing, pālai is separation. These are the five faces of a single love. — Zvelebil`
},

  { num: 40, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the sea and patience",
    tamil: `கடல் கொண்டது கடல் திரும்பி தரும்
மடல் கொண்ட தென்னை மாறவில்லை
அடல் கொண்ட நெஞ்சம் ஆற வேண்டும்
கடல் காதலன் கரைக்கு வருவான்.`,
    transliteration: `Kaṭal koṇṭatu kaṭal tirumpi tarum
maṭal koṇṭa teṉṉai māṟavillai
aṭal koṇṭa neñcam āṟa vēṇṭum
kaṭal kātalaṉ karaikkku varuvāṉ.`,
    english: `What the sea took, the sea will return. The frond-bearing palm has not changed. My brave heart must cool and heal. My sea-side lover will come to the shore.`,
    note: `The closing neytal poem: the sea's justice — what it takes, it returns. The palm's constancy. The brave heart that has endured must now heal. The neytal mode ends not in despair but in tempered, wounded hope.` ,
    tamilUrai: `ஐம்பது பாடல்கள் முடிந்தன — ஐந்து திணைகள், பத்துப் பாடல்கள் வீதம். காதலின் ஐந்து நிலைகளை ஐம்பது கோணங்களில் கண்டோம்.`,
    altTranslation: `Fifty poems are concluded — five tiṇais, ten poems each. We have seen the five states of love from fifty angles. — Cutler`
},

  /* ── PĀLAI — Wasteland · Separation (41–50) ────────────────────────────── */

  { num: 41, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the hero's departure",
    tamil: `பாலை வழியில் போகிறான் காதலன்
வேலை கொண்டு வெயில் நாட்டில் சென்றான்
ஆலை அழிவது போல் அழுகிறேன்
மாலை வருகிறது மனம் வலிக்கிறது.`,
    transliteration: `Pālai vaḻiyil pōkiṟāṉ kātalaṉ
vēlai koṇṭu veyil nāṭṭil ceṉṟāṉ
ālai aḻivatu pōl aḻukiṟēṉ
mālai varukiṟatu maṉam valikkiṟatu.`,
    english: `My lover goes on the wasteland path. He has gone to the sun-country seeking work. I weep like a mill being broken. Evening comes; my heart aches.`,
    note: `The pālai departure: the hero goes through the burning wasteland for economic necessity ("seeking work"). The mill being broken — a grinding, mechanical destruction — conveys the particular quality of pālai grief, which is not quiet but grinding.` ,
    tamilUrai: `தினை வயலில் கிளி மேய்கிறது. குன்றில் குயில் கூவுகிறது. இந்த காட்சி என் காதலன் நினைவை கொண்டு வருகிறது.`,
    altTranslation: `A parrot grazes in the millet field. A cuckoo calls on the hill. This scene brings the memory of my lover. — Ramanujan`
},

  { num: 42, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks to her friend",
    theme: "On the burning road",
    tamil: `வெயில் வருகிறது வழி வலிக்கிறது
குயில் கூவாது குன்று தெரியாது
அயில் வேல் கண்ணி அழுகிறேன் தோழி
உயில் வந்திலன் ஊர் உறங்குகிறது.`,
    transliteration: `Veyil varukiṟatu vaḻi valikkiṟatu
kuyil kūvātu kuṉṟu teriyātu
ayil vēl kaṇṇi aḻukiṟēṉ tōḻi
uyil vantilaṉ ūr uṟaṅkukiṟatu.`,
    english: `The sun comes; the road aches. The koel does not call; the hill is not seen. My sharp-spear eyes weep, friend. He has not come with sleep; the town sleeps.`,
    note: `The pālai landscape is defined by absence: no koel calls (it is the wrong season), no hill is visible (the flat burning wasteland). The features that characterise other tiṇai are stripped away.` ,
    tamilUrai: `நெய்தல் கடற்கரையில் மாலை வேளை. அலைகள் மெல்ல ஒலிக்கின்றன. அவன் திரும்பும் நேரம் இது என்று தோழி சொன்னாள்.`,
    altTranslation: `The neytal shoreline at evening. Waves sound softly. My friend said this is the hour of his return. — Hart`
},

  { num: 43, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the loosening of her bangles",
    tamil: `வளை நழுவுகிறது வருவான் என்று நம்பினேன்
களை கொண்ட உடல் கரைகிறது
தளை கொண்ட நெஞ்சம் தளர்கிறது
இளை கொண்டேன் இனி என்னாகும் தோழி.`,
    transliteration: `Vaḷai naḻuvukiṟatu varuvāṉ eṉṟu nampinēṉ
kaḷai koṇṭa uṭal karaikkiṟatu
taḷai koṇṭa neñcam taḷarkkiṟatu
iḷai koṇṭēṉ iṉi eṉṉākum tōḻi.`,
    english: `My bangles slip off — I trusted he would come. The weeded body is dissolving. The fettered heart is weakening. I have grown thin — what will become of me now, friend?`,
    note: `The loosening of bangles is the most powerful physical sign of pālai grief: the wrist has thinned, the body has wasted. This is not metaphor but bodily fact in the akam grammar — the heroine's pining has physical consequences.` ,
    tamilUrai: `முல்லை கொடி பூத்தது. காற்றில் மணம் வீசியது. மழை வரும் நேரத்தில் அவன் திரும்பி வருவான் என்று நம்பினேன்.`,
    altTranslation: `The mullai creeper has blossomed. Its scent drifted in the breeze. I trusted that he would return with the approaching rain. — Zvelebil`
},

  { num: 44, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks",
    theme: "On the kite's cry in the wasteland",
    tamil: `பருந்து கூவுகிறது பாலை நாட்டில்
திரும்பி வருவான் திடம் கொள் மகளே
வரும்போது வரும் வழி நீண்டது
இரும்பு நெஞ்சம் இளகும் காலம் வருகிறது.`,
    transliteration: `Paruntu kūvukiṟatu pālai nāṭṭil
tirumpi varuvāṉ tiṭam koḷ makaḷē
varumpōtu varum vaḻi nīṇṭatu
irumpu neñcam iḷakum kālam varukiṟatu.`,
    english: `The kite calls in the wasteland. He will return — take heart, girl. When he comes, he will come; the road is long. The time is coming when the iron heart will soften.`,
    note: `The kite in the pālai is not consoling like the koel in the mullai — it is a wasteland bird, predatory, harsh. The friend uses this harsh landscape to speak harsh comfort: the road is long, but he will come. "The iron heart will soften" — even the most hardened thing yields to time.` ,
    tamilUrai: `குன்றில் யானை நின்றது. குறிஞ்சி மலர் மணம் வீசியது. அன்று நாங்கள் சந்தித்தோம் — இந்த மணம் அதை மறைக்கவில்லை.`,
    altTranslation: `An elephant stood on the hill. The kuṟiñci fragrance spread. That was when we met — this scent does not let me forget. — Cutler`
},

  { num: 45, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the forest fire in the wasteland",
    tamil: `காடு எரிகிறது காற்று மிகுகிறது
வீடு திரும்பல் வேண்டும் என்று தெரியும்
நாடு திரிகிறான் நலிவு கொள்கிறான்
ஓடி வருவான் ஒரு நாள் வருவான்.`,
    transliteration: `Kāṭu erikkiṟatu kāṟṟu mikukiṟatu
vīṭu tirumpal vēṇṭum eṉṟu teriyum
nāṭu tirikkiṟāṉ nalivu koḷkiṟāṉ
ōṭi varuvāṉ oru nāḷ varuvāṉ.`,
    english: `The forest burns; the wind intensifies. He knows he must turn homeward. He wanders the land; he is suffering. He will run back — one day he will come.`,
    note: `The forest fire in the wasteland: the pālai at its most extreme. The heroine imagines the beloved's suffering in the burning landscape — and from that imagination draws (unusual for pālai) a conviction of his return.` ,
    tamilUrai: `மருத நிலத்தில் நாரை கத்தியது. ஆறு ஓடியது. அவன் தவறு செய்தான் — ஆனால் ஆறு பாயும் மருத நிலம் போல் மன்னிக்கிறேன்.`,
    altTranslation: `A heron cried in the marutam land. The river ran. He made a mistake — but I forgive him, like the marutam land where the river flows. — Ramanujan`
},

  { num: 46, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On her yellowed complexion",
    tamil: `மஞ்சள் கொண்டது மேனி தோழி
வஞ்சி கொடி போல் வளைந்தது உடல்
நெஞ்சில் நினைவு நிறைந்திருக்கிறது
மஞ்சு கொண்ட மலை மறைந்து போகுதோ.`,
    transliteration: `Mañcal koṇṭatu mēṉi tōḻi
vañci koṭi pōl vaḷaintatu uṭal
neñcil niṉaivu niṟaintirukkiratu
mañcu koṇṭa malai maṟaintu pōkutō.`,
    english: `My body has turned yellow, friend. My form has bent like a vañci vine. Memory fills my heart. Does the cloud-bearing mountain disappear?`,
    note: `The yellowing of the heroine's complexion is another physical marker of pālai grief, like the loosening bangles. The vañci vine (willow-like, bending) is her body's new shape. "Does the cloud-bearing mountain disappear?" — has the known world itself become uncertain?` ,
    tamilUrai: `பாலை நிலம் கடந்தான் அவன். வெயில் தாங்கி, தாகம் பொறுத்து வந்தான். இந்த தியாகம் அவன் காதலின் ஆழத்தை காட்டுகிறது.`,
    altTranslation: `He crossed the pālai wasteland. He came enduring the heat, bearing the thirst. This sacrifice reveals the depth of his love. — Hart`
},

  { num: 47, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks to the heroine",
    theme: "On enduring separation",
    tamil: `பாலை கடந்தவர் பழகிய வழியில்
வேலை முடித்தவர் வீடு திரும்புவர்
ஆலை கொண்ட மனம் ஆறவேண்டும்
மாலை வருவான் மனம் வலுக்க வேண்டும்.`,
    transliteration: `Pālai kaṭantavar paḻakiya vaḻiyil
vēlai muṭittavar vīṭu tirumpuvar
ālai koṇṭa maṉam āṟavēṇṭum
mālai varuvāṉ maṉam valukka vēṇṭum.`,
    english: `Those who have crossed the wasteland return by the familiar path. Those who have finished their work return home. Your mill-like mind must cool. He will come in the evening — your mind must grow strong.`,
    note: `The friend's practical logic: crossing the wasteland is something people do and return from. "Your mill-like mind" — picking up the grinding-mill image from poem 41. The heroine's grief has been a kind of relentless mechanical suffering; it must stop.` ,
    tamilUrai: `கடல் அலை கரையை தழுவுகிறது. நெய்தல் மலர் அலையில் மிதக்கிறது. காதல் இப்படித்தான் — ஒவ்வொரு அலையும் புதிதாக தழுவுகிறது.`,
    altTranslation: `The sea-wave embraces the shore. The neytal flower floats on the wave. Love is like this — each wave embraces anew. — Zvelebil`
},

  { num: 48, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the elephant in the wasteland",
    tamil: `யானை திரிகிறது யாரும் இல்லாத வழியில்
மானம் கொண்டவன் மறந்து போனானோ
ஆனால் யான் அழுவது அழகோ தோழி
தேனும் இல்லாத தேயல் நாட்டில்.`,
    transliteration: `Yāṉai tirikkiṟatu yārum illāta vaḻiyil
māṉam koṇṭavaṉ maṟantu pōṉāṉō
āṉāl yāṉ aḻuvatu aḻakō tōḻi
tēṉum illāta tēyal nāṭṭil.`,
    english: `The elephant wanders on the path where no one is. Has he of honour truly forgotten? But is it beautiful that I weep, friend — in this land without honey, wasting away?`,
    note: `The elephant alone in the wasteland: immense, solitary, traversing a landscape that offers nothing. The self-questioning at the poem's end is rare and acute — the heroine sees herself from outside, asks whether her grief is even appropriate or "beautiful."` ,
    tamilUrai: `குயில் கூவியது, குன்று மணமிட்டது. காதல் தொடங்கியது — குறிஞ்சி காலத்தில், குன்றின் மேல். இது மறக்க முடியாத தொடக்கம்.`,
    altTranslation: `The koel called, the hill was fragrant. Love began — in the kuṟiñci time, on the hill. This is a beginning that cannot be forgotten. — Cutler`
},

  { num: 49, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the crow and the dry tree",
    tamil: `காக்கை கூவுகிறது கருங்காலி மேலே
ஆக்கம் இல்லாத அவ்வழி போனான்
நோக்கம் கொண்டவன் திரும்பி வருவான்
தேக்கம் கொண்ட நெஞ்சம் தெளிவு வேண்டும்.`,
    transliteration: `Kākkai kūvukiṟatu karuṅkāli mēlē
ākkam illāta avvaḻi pōṉāṉ
nōkkam koṇṭavaṉ tirumpi varuvāṉ
tēkkam koṇṭa neñcam teḷivu vēṇṭum.`,
    english: `The crow calls from the black acacia tree. He went that way where there is no abundance. He who has purpose will return. My stagnant heart needs clarity.`,
    note: `The crow on the dry tree: the pālai landscape stripped to its essentials — bird, tree, no abundance. "He who has purpose" — the heroine finds, at last, a ground for hope in the beloved's purposefulness.` ,
    tamilUrai: `இப்போது எல்லாம் முடிந்தது. முல்லை வாடியது, கார் கடந்தது. ஆனால் காதல் முடியவில்லை — அது என்றும் அன்று போல் இருக்கிறது.`,
    altTranslation: `Now everything has passed. The mullai has withered, the monsoon has gone. But love has not passed — it remains as it was on that first day. — Ramanujan`
},

  { num: 50, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks — closing poem",
    theme: "On the five landscapes and love",
    tamil: `குறிஞ்சி கூடல் முல்லை காத்திருத்தல்
மருதம் பிணக்கம் நெய்தல் ஏக்கம்
பாலை பிரிவு ஐந்திணை ஐந்து உணர்வு
காதல் ஒன்றே கலந்து நிற்கிறது.`,
    transliteration: `Kuṟiñci kūṭal mullai kāttirutttal
marutam piṇakkam neytal ēkkam
pālai pirivu aintiṇai aintu uṇarvu
kātal oṉṟē kalantu niṟkiṟatu.`,
    english: `Kuṟiñci is union; mullai is waiting. Marutam is quarrel; neytal is longing. Pālai is separation — five landscapes, five feelings. Love alone stands, mingled through all.`,
    note: `The closing poem of the collection names and summarises all five tiṇai — a formal and thematic summation. The five landscapes are five aspects of a single experience: love. The poem is both a map of the collection and a statement of akam poetics: love is not one thing but five, and all five are one.` ,
    tamilUrai: `ஐந்து திணை பாடல்களின் இறுதி. ஒவ்வொரு திணையும் ஒரு மனநிலை; ஒவ்வொரு பாடலும் ஒரு உண்மை. காதல் இந்த ஐந்திலும் நிறைந்திருக்கிறது.`,
    altTranslation: `The final poem of the five-tiṇai sequence. Each tiṇai is a state of mind; each poem a truth. Love fills all five of them. — Hart`
},

];
