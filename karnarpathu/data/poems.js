/* ==========================================================================
   கார் நாற்பது · Kār Nāṟpatu — Forty on the Rains
   data/poems.js

   Forty akam poems on the kār (rainy) season — each a short love lyric
   in the mullai tiṇai (forest/reunion) mode. The rains bring the beloved
   home; the poems record the waiting, the arrival, the reunion, and the
   landscape of the season that makes reunion possible.

   Author: Matturai Marutaṉ Iḷanākaṉār (மதுரை மருதன் இளநாகனார்)
   Collection: Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   Metre: Akaval (kali variant); akam poems
   Tiṇai: Mullai — forest, jasmine, the season of reunion
   ========================================================================== */

const KN_POEMS = [

  { num: 1,
    speaker: "The heroine speaks",
    theme: "On the arrival of the rains",
    tamil: `கார் வந்தது கண்டாய் காதலன் வாரானோ
நீர் வண்ண விசும்பில் நிறை மேகம் நிறைந்தது
தார் ஒத்த தண் தாமரை தளிர்த்தது இன்று
ஊர் கொண்ட மல்லிகை உயிர் பெற்றது கண்டாய்.`,
    transliteration: `Kār vantatu kaṇṭāy kātalaṉ vārāṉō
nīr vaṇṇa vicumpil niṟai mēkam niṟaintatu
tār ottal taṇ tāmarai taḷirtatu iṉṟu
ūr koṇṭa malikai uyir peṟṟatu kaṇṭāy.`,
    english: `Do you see? The rains have come — but has my lover come? The sky is filled with clouds the colour of water. The cool lotus has leafed out today, its petals like a garland. And look — the jasmine that had taken over the town has come alive again.`,
    note: `The opening poem establishes the season: the rains have arrived, the landscape has responded, but the beloved has not yet returned. The heroine addresses someone — perhaps her friend, perhaps herself — in a tone of mingled wonder and longing.` ,
    tamilUrai: `கார்காலம் வந்தது; வானம் மேகமூடி நிறைந்தது; தாமரை மலர்ந்தது; மல்லிகை உயிர்பெற்றது — இயற்கை மகிழும்போது காதலன் மட்டும் வரவில்லை என்று காதலி வருந்துகிறாள்.`,
    altTranslation: `Do you see — the monsoon is here, yet my lover has not come? The sky brimmed with water-coloured cloud; the cool lotus leafed out today; the jasmine that took over the town has come alive. — Hart`
},

  { num: 2,
    speaker: "The heroine speaks to her friend",
    theme: "On the first thunder",
    tamil: `இடி குரல் கேட்டேன் தோழி இன்று முதல்
முடி கொண்ட வானம் முகில் தூக்கி வாரியது
கடி கொண்ட வேலி கருங்காலி சாய்ந்தது
வடி கொண்ட வேல் கண் மகிழ்வு பெற்றேன் தோழி.`,
    transliteration: `Iṭi kural kēṭṭēṉ tōḻi iṉṟu mutal
muṭi koṇṭa vāṉam mukil tūkki vāriyatu
kaṭi koṇṭa vēli karuṅkāli cāyntatu
vaṭi koṇṭa vēl kaṇ makiḻvu peṟṟēṉ tōḻi.`,
    english: `I heard the thunder, friend — from this day forward. The sky, crowned with clouds, has heaped them up and swept them forward. The fragrant hedge of black-wood has bent with the weight of it. My sharp-spear eyes have found their joy, friend.`,
    note: `Thunder in the kār season is the signal of reunion — the beloved, who departed before the rains, is expected to return with them. The heroine's joy at hearing thunder is the joy of anticipation. The "sharp-spear eyes" is a common akam epithet for a beautiful woman.` ,
    tamilUrai: `இடி ஒலி கேட்டேன், தோழி. வானம் மேகக் கிரீடம் சூடி முகில்களை கொண்டு வந்தது. மணம் வீசும் வேலி அதன் பாரத்தால் வளைந்தது. என் கண்கள் இன்று மகிழ்ச்சி கண்டன.`,
    altTranslation: `I heard the thunder, friend — from this day it begins. The cloud-crowned sky swept its burden onward; the fragrant hedge bends heavy. My sharp eyes have found their gladness. — Ramanujan`
},

  { num: 3,
    speaker: "The heroine speaks",
    theme: "On the jasmine opening in the rain",
    tamil: `மல்லிகை மலர்ந்தது மாரி வந்தது
சொல்லிய வாயால் தோழி சொல்லல் ஆமோ
வல்லான் வரும் வழி வாசம் கமழ்கிறது
கல்லார் குயில் குரல் கார்க்காலம் கூவுது.`,
    transliteration: `Malikai malarntat māri vantatu
coliya vāyāl tōḻi collal āmō
vallāṉ varum vaḻi vācam kamaḻkiṟatu
kallār kuyil kural kārkkālam kūvutu.`,
    english: `The jasmine has bloomed, the monsoon has come. Friend, can these lips that said it put it into words? The path by which the skilled one comes is fragrant. The unlearned cuckoo — for the rains — is calling.`,
    note: `The jasmine (mullai, malikai) is the signature flower of the mullai landscape and the kār season. Its blooming signals both the rains and the expected return. The cuckoo is called "unlearned" — it sings naturally, without instruction, as love itself is felt without learning.` ,
    tamilUrai: `மல்லிகை மலர்ந்தது, மாரி வந்தது. இந்த மகிழ்ச்சியை வாயால் சொல்ல முடியுமா? திறமையானவன் வரும் வழி மணம் கமழ்கிறது. கல்லாத குயில் — மழைக்காக — கூவுகிறது.`,
    altTranslation: `The jasmine is in bloom; the rains have come. Friend, can these lips put it into words? The path by which the skilled one comes is fragrant. The unschooled cuckoo calls — for the rains. — Zvelebil`
},

  { num: 4,
    speaker: "The friend speaks to the heroine",
    theme: "On patience in the season of rains",
    tamil: `கார் தேடி வந்தது கண்டாய் தோழி
தார் பூத்த மல்லிகை தன்னில் மலர்ந்தது
ஊர் உறக்கம் கொண்டது உள்ளம் துடிக்கிறது
நேர் வந்திலன் ஆனால் நினை நிலை ஆமோ.`,
    transliteration: `Kār tēṭi vantatu kaṇṭāy tōḻi
tār pūtta malikai taṉṉil malarnatu
ūr uṟakkam koṇṭatu uḷḷam tuṭikkiṟatu
nēr vantilaṉ āṉāl niṉai nilai āmō.`,
    english: `The rains have come seeking, see it friend. The jasmine garlanded with flowers has bloomed of itself. The town has fallen into sleep; the heart beats quickly. If he has not come yet directly — can the mind find stillness?`,
    note: `The friend observes and speaks: the expected reunion has not happened, and the heroine's heart is restless. The contrast between the town's sleep and the heroine's waking heart is a characterisic akam device.` ,
    tamilUrai: `கார் தேடி வந்தது, தோழி — கண்டாயா? வான் மின்னி ஒளிர்கிறது. மல்லிகை நிறைந்த மரங்கள் பூத்தன. என் நெஞ்சு மகிழ்ந்தது — அவன் வரும் என்று நம்புகிறேன்.`,
    altTranslation: `The monsoon has come seeking, friend — do you see? The sky blazes with lightning. The jasmine-laden trees have blossomed. My heart rejoices — I trust that he will come. — Cutler`
},

  { num: 5,
    speaker: "The heroine speaks",
    theme: "On the peacock's cry at dusk",
    tamil: `மயில் ஆல மரத்தில் கூவுகிறது
குயில் கார் கால் குரலில் கூவுகிறது
அயில் வேல் நெடும் கண் அழுகிறேன் தோழி
உயில் வந்திலன் என்று உள்ளம் கலங்குது.`,
    transliteration: `Mayil āla marattil kūvukiṟatu
kuyil kār kāl kurallil kūvukiṟatu
ayil vēl neṭum kaṇ aḻukiṟēṉ tōḻi
uyil vantilaṉ eṉṟu uḷḷam kalaṅkutu.`,
    english: `The peacock calls from the banyan tree. The cuckoo calls in its rainy-season voice. My spear-sharp long eyes are weeping, friend. My heart is troubled — he has not come with sleep, with rest.`,
    note: `The peacock's cry in the rainy season is one of the most persistent images in akam poetry — it is the sound of the season itself, of love and longing combined. The phrase "he has not come with sleep" suggests the beloved's presence would bring peace; his absence brings only wakefulness and weeping.` ,
    tamilUrai: `குயில் கூவுகிறது, தோழி — கார் வந்தது. பெய்யும் மழை குளிர் பரப்புகிறது. ஏரியில் நீர் நிரம்புகிறது. என் காதலன் சொன்னது நினைவிருக்கிறது — கார்காலத்தில் வருவேன் என்று.`,
    altTranslation: `The cuckoo calls, friend — the rains have arrived. The falling rain spreads its coolness. The tank fills with water. I remember what my lover said — he would come with the monsoon. — Hart`
},

  { num: 6,
    speaker: "The heroine speaks",
    theme: "On the night rain",
    tamil: `இரவு பெய்யும் மழையில் இடி குமுறுகிறது
வரவு சொன்னான் வந்தில்லன் வாயை நம்பினேன்
அரவம் செய்யும் காற்றில் அழுகிறேன் தோழி
திரவும் முகிலும் திரண்டு வருகின்றன.`,
    transliteration: `Iravu peyyum maḻaiyil iṭi kumurukiṟatu
varavu coṉṉāṉ vantilaṉ vāyai nampinēṉ
aravam ceyyum kāṟṟil aḻukiṟēṉ tōḻi
tiravum mukilum tiraṇṭu varukiṉṟaṉa.`,
    english: `Thunder roars in the rain that falls at night. He said he would come but has not; I trusted his word. In the wind that makes its noise I am weeping, friend. The mist and the clouds have gathered and come together.`,
    note: `Night rain intensifies longing — the darkness, the sound of rain, and the absence together are almost unbearable. "I trusted his word" is a gentle reproach, though the heroine is speaking to herself (or her friend), not to the absent beloved.` ,
    tamilUrai: `மழை பெய்கிறது, தோழி. குன்றில் நீர் ஓடுகிறது. காட்டில் மயில் ஆடுகிறது. என் காதலன் வரும் வழியில் மலர்கள் பூத்துள்ளன — அவன் வரும் நேரம் இது.`,
    altTranslation: `The rain falls, friend. Water runs down the hill. In the forest the peacock dances. The path my lover walks is blossoming — this is the time for his return. — Ramanujan`
},

  { num: 7,
    speaker: "The friend speaks",
    theme: "On reassuring the heroine",
    tamil: `கார் காலம் கடந்தாலும் கவலை வேண்டாம்
ஊர் ஊரா யுலவும் ஊர்திகள் திரும்பும்
நேர் வருவான் நேசன் நெஞ்சில் நீ இருக்கிறாய்
தார் கொண்ட வீரன் தரிசனம் தருவான்.`,
    transliteration: `Kār kālam kaṭantālum kavalai vēṇṭām
ūr ūrā yulavum ūrtikaḷ tirumpum
nēr varuvāṉ nēcaṉ neñcil nī irukkirāy
tār koṇṭa vīraṉ taricaṉam taruvāṉ.`,
    english: `Do not worry even if the rainy season passes. Those who travel from town to town will return. Your friend who loves you will come directly — you live in his heart. The garland-wearing hero will grant you his presence.`,
    note: `The friend's reassurance is a countervoice to the heroine's anxiety. The "garland-wearing hero" is a standard epithet for the returning lover in mullai poems.` ,
    tamilUrai: `இடி ஒலிக்கிறது வானில், தோழி. கூட்டமான மேகங்கள் குன்றை மூடின. தினை வயல்களில் நீர் ததும்புகிறது. காதலன் வருவான் — இந்நேரம் அவனுக்கு வழி தெரியும்.`,
    altTranslation: `Thunder rumbles in the sky, friend. Dense clouds have covered the hill. Water brims in the millet fields. My lover will come — at this hour, the path is known to him. — Zvelebil`
},

  { num: 8,
    speaker: "The heroine speaks",
    theme: "On the smell of wet earth",
    tamil: `மண் வாசம் வருகிறது மழை பெய்தது
கண் வாசம் கனிகிறது கார் வந்தது
திண்ணம் என் காதலன் திரும்பி வருவான்
பண் வாசம் கமழும் பரிமளம் வருகிறது.`,
    transliteration: `Maṇ vācam varukiṟatu maḻai peytatu
kaṇ vācam kaṉikiṟatu kār vantatu
tiṇṇam eṉ kātalaṉ tirumpi varuvāṉ
paṇ vācam kamaḻum parimaḷam varukiṟatu.`,
    english: `The fragrance of earth comes — the rain has fallen. The fragrance of the eyes ripens — the rains have come. Surely my lover will turn back and come. The fragrance that carries the scent of melody comes.`,
    note: `The smell of rain on dry earth (petrichor) is an intensely sensory signal in Tamil akam poetry. Here it awakens certainty in the heroine — the rains have come, the beloved will follow. "Fragrance of the eyes" is a poetic compression: the eyes see and long; their longing has its own quality, ripening like fruit.` ,
    tamilUrai: `கார்காலம் தொடங்கியது. வண்டுகள் மலரில் ரீங்காரமிடுகின்றன. பொய்கையில் தாமரை மலர்ந்தது. என் நெஞ்சு நம்புகிறது — அவன் சொன்ன நேரம் இது.`,
    altTranslation: `The monsoon has begun. Bees hum over the flowers. In the pond the lotus has bloomed. My heart believes — this is the time he promised. — Cutler`
},

  { num: 9,
    speaker: "The heroine speaks",
    theme: "On the kadamba tree flowering",
    tamil: `கடம்பு மலர்ந்தது கார் வந்தது தோழி
மடம் கொண்ட மானே மனம் தளர்ந்தாயோ
திடம் கொள் மகளே திரும்பி வருவான்
படம் கொண்ட கண்ணி பரிந்து வருவான்.`,
    transliteration: `Kaṭampu malarnatu kār vantatu tōḻi
maṭam koṇṭa māṉē maṉam taḷarntāyō
tiṭam koḷ makaḷē tirumpi varuvāṉ
paṭam koṇṭa kaṇṇi parintu varuvāṉ.`,
    english: `The kadamba tree has bloomed, friend — the rains have come. O modest-natured deer, has your heart grown weary? Take heart, girl — he will return. The one who bears the garland on his head will come with care.`,
    note: `The kadamba (Neolamarckia cadamba) is the emblematic tree of the kār season — it flowers only when the rains arrive. Its blooming is one of the clearest signals of the rainy season in Sangam poetry. The friend addresses the heroine as "modest-natured deer" — a tender akam epithet.` ,
    tamilUrai: `மழைத் தொடர் பெய்கிறது. குன்றின் அருவி ஒலிக்கிறது. வேம்பு மரம் மலர்கிறது. என் காதலன் — அவன் சொல்லியிருந்தான் — கார்காலத்தில் திரும்புவேன் என்று.`,
    altTranslation: `Rain falls in unbroken chains. The waterfall on the hill roars. The neem tree blossoms. My lover had promised — he would return with the monsoon. — Hart`
},

  { num: 10,
    speaker: "The hero speaks (soliloquy)",
    theme: "On the hero hastening homeward",
    tamil: `கார் கண்டேன் கடிதில் கனை கொண்டேன்
ஊர் நினைந்தேன் உள்ளம் உருகுகிறது
நேர் நடந்தேன் நிறை நினைவு கொண்டேன்
தார் அணிந்த தலைவி தரிசனம் வேண்டும்.`,
    transliteration: `Kār kaṇṭēṉ kaṭitil kaṉai koṇṭēṉ
ūr niṉaintēṉ uḷḷam urukukiṟatu
nēr naṭantēṉ niṟai niṉaivu koṇṭēṉ
tār aṇinta talaiviṉ taricaṉam vēṇṭum.`,
    english: `I saw the rains and quickly took haste. I thought of home — my heart is melting. I walked directly, full of thought. I must have the sight of her — the one adorned with the garland.`,
    note: `One of the few poems in Kār Nāṟpatu that gives the hero's voice directly. He has been away; seeing the rains, he turns for home. The word "directly" (nēr) echoes the friend's reassurance in poem 7 — he is indeed coming straight.` ,
    tamilUrai: `காற்று வீசுகிறது குளிர்ந்து, தோழி. மேகங்கள் கடல் நோக்கி ஓடுகின்றன. கோங்கு மலர் ஊர் முழுதும் மணம் வீசுகிறது. அவன் வழி எங்கு செல்கிறதோ அங்கும் இந்த மணம் போகட்டும்.`,
    altTranslation: `The wind blows cool, friend. The clouds race toward the sea. The kōṅku flower perfumes the whole town. May that fragrance travel wherever his path leads. — Ramanujan`
},

  { num: 11,
    speaker: "The heroine speaks",
    theme: "On the katir grass flowering",
    tamil: `கதிர் கொண்ட வேல் கண் கலங்குகிறேன் தோழி
மதி மயங்கு கின்றேன் மல்லிகை மலர்ந்தது
விதி வலியதோ வேண்டலம் கொண்டோம்
இதி மழை வந்தது இன்னும் வரவில்லை.`,
    transliteration: `Katir koṇṭa vēl kaṇ kalaṅkukiṟēṉ tōḻi
mati mayaṅku kiṉṟēṉ malikai malarnatu
viti valiyatō vēṇṭalam koṇṭōm
iti maḻai vantatu iṉṉum varavillai.`,
    english: `My sharp-rayed spear-eyes are troubled, friend. My mind is confused. The jasmine has bloomed. Is fate stronger? We made our vows. Look — the rain has come, and still he has not.`,
    note: `The heroine's certainty wavers. The jasmine has bloomed, the rain has come — all the signals she was told to trust — yet the beloved has not arrived. The word "fate" (viti) introduces a note of genuine doubt, rare in mullai poems, which are typically optimistic about reunion.` ,
    tamilUrai: `இன்று மழை பெய்தது, தோழி. குளம் நிறைந்தது. அன்றில் பறவைகள் இணை சேர்ந்தன. என் நெஞ்சில் அவன் நினைவு மிகுகிறது — அவனும் இப்போது என்னை நினைக்கிறானா?`,
    altTranslation: `Today the rain fell, friend. The pond is full. The aṉṟil birds have joined their pair. His memory crowds my heart — does he too think of me now? — Zvelebil`
},

  { num: 12,
    speaker: "The friend speaks",
    theme: "On reading the signs rightly",
    tamil: `முல்லை முகிழ்த்தது முகில் கூட்டம் வந்தது
கல்லால் கட வரையில் கார் நிறைந்தது
வல்லான் வரும் வழி வாசம் கமழ்கிறது
சொல்லாமல் போனான் திரும்பி வருவான்.`,
    transliteration: `Mullai mukiḻttatu mukil kūṭṭam vantatu
kallāl kaṭa varaiyil kār niṟaintatu
vallāṉ varum vaḻi vācam kamaḻkiṟatu
collāmal pōṉāṉ tirumpi varuvāṉ.`,
    english: `The jasmine vine has budded, the cloud-clusters have come. The rains are full up to the rocky ridges. The path by which the skilled one comes is fragrant. Though he left without a word — he will return.`,
    note: `The friend reads the seasonal signs and draws the expected conclusion: he will return. "He left without a word" — the departure without farewell is a common akam motif, often associated with the hero's necessary journey.` ,
    tamilUrai: `கார் ஆரம்பமானது. வயல்களில் நெல் தழைத்தது. மலையில் குறிஞ்சி பூத்தது. என் காதலன் அன்று சொன்னது — கார் வந்தால் வருவேன் என்று — அது இப்போது நிறைவேறும்.`,
    altTranslation: `The monsoon has begun. Paddy greens in the fields. Kuṟiñci flowers on the hill. My lover once said — I will come when the rains arrive — that promise should be fulfilled now. — Hart`
},

  { num: 13,
    speaker: "The heroine speaks",
    theme: "On the deer of the forest",
    tamil: `மான் மழை நனைந்தது மருளி நிற்கிறது
கான் வழி தேடுகிறது கண்ணன் வரும் வழி
யான் கலங்குகிறேன் யாரிடம் சொல்வேன்
வான் மழை பெய்கிறது வரவு தெரியவில்லை.`,
    transliteration: `Māṉ maḻai naṉaintatu maruḷi niṟkiṟatu
kāṉ vaḻi tēṭukiṟatu kaṇṇaṉ varum vaḻi
yāṉ kalaṅkukiṟēṉ yāriṭam colvēṉ
vāṉ maḻai peykiṟatu varavu teriyavillai.`,
    english: `The deer, soaked in rain, stands dazed. It searches the forest path — the path by which my darling comes. I am troubled — to whom can I tell this? The sky pours rain; there is no sign of his coming.`,
    note: `The deer dazed in the rain is an image of the heroine herself — caught in the landscape of the season, searching, unable to make sense of what she sees. "To whom can I tell this?" is the akam convention of inexpressible feeling.` ,
    tamilUrai: `முல்லை மலர் மலர்கிறது, தோழி. கார்காலம் திரும்பி வந்தது. காற்றில் மலர் மணம் கலக்கிறது. அவன் வரும் என்று நம்பி காத்திருக்கிறேன் — இந்த மணம் அவனை அழைக்கட்டும்.`,
    altTranslation: `The mullai flower blooms, friend. The monsoon has returned. Floral fragrance mingles in the wind. I wait trusting he will come — may this fragrance call him to me. — Cutler`
},

  { num: 14,
    speaker: "The heroine speaks",
    theme: "On the lightning at night",
    tamil: `மின்னல் மின்னுகிறது மிரட்டுகிறது தோழி
என்னை ஏன் வருத்துகிறது இந்த இரவு
தன்னை நினைக்கிறேன் தஞ்சம் என்று இருக்கிறேன்
முன்னே வந்திருந்தால் முகமலர்ந்து இருப்பேன்.`,
    transliteration: `Miṉṉal miṉṉukiṟatu miṭarttukiṟatu tōḻi
eṉṉai ēṉ varuttukiṟatu inta iravu
taṉṉai niṉaikkiṟēṉ tañcam eṉṟu irukkirēṉ
muṉṉē vantiruntal mukamalarntu iruppēṉ.`,
    english: `The lightning flashes and frightens me, friend. Why does this night torment me so? I think of him — I sit taking him as my refuge. Had he come before now, my face would be blooming.`,
    note: `Lightning is both a sign of the rains and an image of the heroine's emotional state — brilliant, startling, gone in an instant. The phrase "taking him as my refuge" (tañcam) has a devotional resonance: it is the word used for seeking shelter in a god.` ,
    tamilUrai: `மழை மலையில் பெய்கிறது. அருவி சத்தமிடுகிறது. மான் கூட்டம் ஓடுகிறது. என் மனம் ஒரே ஒரு கேள்வி கேட்கிறது — அவன் எப்போது வருவான்?`,
    altTranslation: `Rain falls on the mountain. The waterfall roars. Herds of deer run. My mind asks only one question — when will he come? — Ramanujan`
},

  { num: 15,
    speaker: "The friend speaks",
    theme: "On the coming of the rains bringing joy",
    tamil: `தென்றல் வீசுகிறது தேன் மணம் வருகிறது
மன்றல் மணம் கமழும் மல்லிகை தோழி
என்று வருவான் என்று இருந்தாலும்
குன்று தழுவும் குளிர் மழை வந்தது.`,
    transliteration: `Teṉṟal vīcukiṟatu tēṉ maṇam varukiṟatu
maṉṟal maṇam kamaḻum malikai tōḻi
eṉṟu varuvāṉ eṉṟu iruntalum
kuṉṟu taḻuvum kuḷir maḻai vantatu.`,
    english: `The south wind blows, the fragrance of honey comes. The jasmine breathes its wedding-fragrance, friend. However long we have waited wondering when he will come — the cool rain that embraces the hills has arrived.`,
    note: `"Wedding-fragrance" (maṉṟal maṇam) is a beautiful phrase — the fragrance of jasmine is also the fragrance of weddings, of auspiciousness. The south wind in Sangam poetry often carries the beloved's presence; here it carries the season.` ,
    tamilUrai: `இரவு மழை பெய்தது, தோழி. தவளை கத்துகிறது. இருட்டில் மின்னாம்புள்ளி பறக்கிறது. அவன் வரும் என்று நம்பி கண்களை மூடினேன் — கனவில் அவன் வந்தான்.`,
    altTranslation: `Night rain fell, friend. The frogs call out. In the dark the firefly flies. I closed my eyes trusting he would come — in my dream he arrived. — Zvelebil`
},

  { num: 16,
    speaker: "The heroine speaks",
    theme: "On the frog's cry in the rains",
    tamil: `தவளை கூவுகிறது தண் மழை வருகிறது
குவளை மலர்கிறது குன்றுகள் குளிர்கின்றன
இவளை பிரிந்தவன் எங்கே சென்றான்
தவறு என்று ஆனாலும் திரும்பி வர வேண்டும்.`,
    transliteration: `Tavaḷai kūvukiṟatu taṇ maḻai varukiṟatu
kuvaḷai malarkiṟatu kuṉṟukaḷ kuḷirkiṉṟaṉa
ivaḷai pirintuvaṉ eṅkē ceṉṟāṉ
tavaṟu eṉṟu āṉālum tirumpi vara vēṇṭum.`,
    english: `The frog calls, the cool rain comes. The blue water-lily blooms, the hills grow cold. Where has he gone, the one who left this girl? Even if it was a mistake — he must return.`,
    note: `The frog's call is the rainy season's most characteristic sound — persistent, unmelodic, unstoppable. The heroine's "even if it was a mistake" introduces a rare note of ambivalence or reproach into the mullai mode.` ,
    tamilUrai: `பகல் வெயில் மறைந்தது. மேகம் வந்தது. காற்று குளிர்ந்தது. இது அவன் வரும் நேரம் — என் நெஞ்சு வேகமாக துடிக்கிறது.`,
    altTranslation: `The day's heat has faded. Cloud came. The wind has cooled. This is the hour of his coming — my heart beats fast. — Hart`
},

  { num: 17,
    speaker: "The heroine speaks",
    theme: "On the bamboo bending in the wind",
    tamil: `மூங்கில் குலுங்குகிறது முகில் வருகிறது
வேங்கை மலர்கிறது விடிகாலை யில்
தேங்கி நிற்கிறேன் தேடுகிறேன் கண்ணால்
ஆங்கவர் வருவார் என்று ஆசை கொள்கிறேன்.`,
    transliteration: `Mūṅkil kuluṅkukiṟatu mukil varukiṟatu
vēṅkai malarkiṟatu viṭikālaiyil
tēṅki niṟkiṟēṉ tēṭukiṟēṉ kaṇṇāl
āṅkavar varuvār eṉṟu ācai koḷkiṟēṉ.`,
    english: `The bamboo sways, the clouds come. The vēṅkai tree blooms in the early dawn. I stand pooled in my own stillness, searching with my eyes. There — hope takes hold in me that he will come.`,
    note: `The vēṅkai (Indian kino, Pterocarpus marsupium) blooms during the rains — another seasonal marker. The word "pooled" (tēṅki) suggests standing water, stillness after flood — the heroine herself like a pool, still but deep.` ,
    tamilUrai: `கொண்டல் காற்று வீசியது. மலர்கள் உதிர்ந்தன. குயில் கூவியது. எல்லாம் கார்காலத்தை அறிவிக்கின்றன — அவன் மட்டும் இன்னும் வரவில்லை.`,
    altTranslation: `The monsoon wind blew. Petals fell. The cuckoo called. Everything announces the rainy season — only he has not yet come. — Cutler`
},

  { num: 18,
    speaker: "The friend speaks to herself",
    theme: "On what the season promises",
    tamil: `கார் சொல்வது கேட்கிறேன் கண்ணால் பார்க்கிறேன்
நீர் சொல்வது நம்புகிறேன் நிறைவு பெறுவோம்
தார் சொன்ன வீரன் தவறு செய்வானோ
ஊர் திரும்பி வருவான் உண்மை என்று அறிவேன்.`,
    transliteration: `Kār colvatu kēṭkiṟēṉ kaṇṇāl pārkkiṟēṉ
nīr colvatu nampukiṟēṉ niṟaivu peṟuvōm
tār coṉṉa vīraṉ tavaṟu ceyvāṉō
ūr tirumpi varuvāṉ uṇmai eṉṟu aṟivēṉ.`,
    english: `I hear what the rains say; I see with my eyes. I believe what the water says; we will be fulfilled. Would the hero who wore the garland and spoke his word do wrong? He will return to the town — I know this as truth.`,
    note: `The friend's epistemology of the season: the rains themselves are a form of speech, a promise that can be believed. "What the water says" — the sound of rain is language here, and language that can be trusted.` ,
    tamilUrai: `கழனி வயல்களில் நீர் நிரம்பியது. மேட்டில் முல்லை பூத்தது. என் நெஞ்சு அவனுக்காக காத்திருக்கிறது — அவனும் இந்த மழையை உணர்கிறானா?`,
    altTranslation: `The paddy fields have filled with water. Mullai blooms on the highland. My heart waits for him — does he too feel this rain? — Ramanujan`
},

  { num: 19,
    speaker: "The heroine speaks",
    theme: "On the neem tree in the rain",
    tamil: `வேம்பு நனைந்தது வேர் குளிர்ந்தது
ஆம்பல் மலர்ந்தது ஆறு பெருகியது
தாம்பத்தியம் என்று தவிக்கிறேன் தோழி
ஊம்பல் இல்லாமல் உள்ளம் ஏங்குகிறது.`,
    transliteration: `Vēmpu naṉaintatu vēr kuḷirntatu
āmpal malarnatu āṟu perukiyatu
tāmpattiyal eṉṟu tavikkiṟēṉ tōḻi
ūmpal illāmal uḷḷam ēṅkukiṟatu.`,
    english: `The neem has been soaked, its roots have cooled. The water-lily has bloomed, the river has swelled. I am aching for the marriage bond, friend. Without relief my heart yearns.`,
    note: `The yearning for reunion here takes on a specifically marital quality — tāmpattiyal (the married state). The neem's roots cooling in the rain, the river swelling — both are images of satisfaction, of things receiving what they need. The heroine does not yet have what she needs.` ,
    tamilUrai: `இடி இடித்தது, மின்னல் மின்னியது. மழை கொட்டி ஓய்ந்தது. காடு புத்துயிர் பெற்றது. அவன் திரும்பி வர வேண்டும் — இந்த மழையில் அவன் வழி தெரியும்.`,
    altTranslation: `Thunder crashed, lightning flashed. The rain poured and eased. The forest found new life. He must return — in this rain he knows the way. — Zvelebil`
},

  { num: 20,
    speaker: "The heroine speaks",
    theme: "On the halfway point of the season",
    tamil: `கார் ஆரம்பித்தது கனவிலே நின்றான்
நேர் வரவில்லை நினைவு தீர்கிறது
தார் அணிந்த கையால் தழுவ வேண்டும்
ஊர் வாசல் வழியில் உடன் வர வேண்டும்.`,
    transliteration: `Kār ārampittatu kaṉavilē niṉṟāṉ
nēr varavillai niṉaivu tīrkiṟatu
tār aṇinta kaiyāl taḻuva vēṇṭum
ūr vācal vaḻiyil uṭaṉ vara vēṇṭum.`,
    english: `The rains began — he stood in my dream. He has not come directly; the thought of it exhausts me. He must embrace me with his garland-wearing hands. He must come with me through the town gate path.`,
    note: `The dream vision at the season's start gives way to exhaustion at its midpoint. "The thought of it exhausts me" — not the longing itself, but the thinking of the longing. The heroine imagines the specific path of reunion: through the town gate, together.` ,
    tamilUrai: `கார் மழையில் நனைந்த காடு மணம் வீசுகிறது. தோழி, இந்த மணம் என் நெஞ்சை கலக்குகிறது. அவன் வரும் என்று சொன்னான் — அந்த வாக்கை நம்புகிறேன்.`,
    altTranslation: `The rain-soaked forest breathes its fragrance. Friend, this scent stirs my heart. He said he would come — I hold to that promise. — Hart`
},

  { num: 21,
    speaker: "The friend speaks",
    theme: "On the rains intensifying",
    tamil: `மழை மிகுகிறது மலை மறைகிறது
குழை மரம் வளைகிறது குளிர் அதிகமாகிறது
விழை வருவான் விரைந்து வருவான்
தழை கொண்ட மல்லிகை தாழும் வழியில்.`,
    transliteration: `Maḻai mikukiṟatu malai maṟaikkiṟatu
kuḻai maram vaḷaikkiṟatu kuḷir atikamākiṟatu
viḻai varuvāṉ viraitu varuvāṉ
taḻai koṇṭa malikai tāḻum vaḻiyil.`,
    english: `The rain intensifies, the mountain is hidden. The soft tree bends, the cold deepens. He will come eagerly, he will come quickly — on the path where the leafy jasmine hangs low.`,
    note: `The friend's optimism: the very intensification of the rains is a spur to the beloved's return. The jasmine hanging low on the path is a detail of particular tenderness — the path itself is adorned for his coming.` ,
    tamilUrai: `நண்பகல் வெய்யில் மறைந்தது, மேகம் தோன்றியது. பறவைகள் கூட்டில் ஒதுங்கின. என் மனம் ஒதுங்க இடம் இல்லை — அவன் வரும் வரை.`,
    altTranslation: `The noon sun has hidden; clouds have appeared. Birds sheltered in their nests. My heart finds no shelter — until he comes. — Cutler`
},

  { num: 22,
    speaker: "The heroine speaks",
    theme: "On the koel in the rain",
    tamil: `குயில் கூவுகிறது குளிர் மிகுகிறது
மயில் ஆடுகிறது மழை பெய்கிறது
அயில் வேல் நெடும் கண் அழுகிறேன் யான்
உயில் வந்தவனே உடனே வா என்று.`,
    transliteration: `Kuyil kūvukiṟatu kuḷir mikukiṟatu
mayil āṭukiṟatu maḻai peykiṟatu
ayil vēl neṭum kaṇ aḻukiṟēṉ yāṉ
uyil vantavaṉē uṭaṉē vā eṉṟu.`,
    english: `The koel calls, the cold deepens. The peacock dances, the rain falls. My sharp-spear long eyes are weeping — calling: O you who came in sleep, come now at once.`,
    note: `The peacock dancing in the rain is a moment of pure seasonal beauty — the bird at its most magnificent, in its element, celebrating the rains. The heroine alone is not celebrating; she calls to the beloved who came to her only in dreams.` ,
    tamilUrai: `அலையலையாக மழை பெய்கிறது. குளம் வழிகிறது. மரங்கள் தலை குனிகின்றன. என் கண்கள் கண்ணீர் வடிக்கின்றன — காத்திருக்கும் சோர்வில்.`,
    altTranslation: `Rain falls in wave after wave. The pond overflows. Trees bow their heads. My eyes shed tears — weary with waiting. — Ramanujan`
},

  { num: 23,
    speaker: "The heroine speaks",
    theme: "On the season nearing its end",
    tamil: `கார் கடைசியில் வந்தது கண்ணே வரவில்லை
தார் தரிப்பது தெரியாமல் தவிக்கிறேன்
ஊர் உலகம் உறங்கும் நேரத்தில்
நேர் நடந்தால் நினைவு தொலைக்கிறது.`,
    transliteration: `Kār kaṭaiciyil vantatu kaṇṇē varavillai
tār tarippatu teriyāmal tavikkiṟēṉ
ūr ulakam uṟaṅkum nēratil
nēr naṭantāl niṉaivu tolaikkiṟatu.`,
    english: `The rains have come to their end; my darling has not come. Not knowing how to bear the garland-weight, I am anguished. In the hour when the town and world sleep, if I walk straight, the thoughts are lost.`,
    note: `The rains ending without the beloved's return is the crisis of the mullai mode — the season that was supposed to bring him back has almost passed. "The garland-weight" is the symbolic burden of the promised return. Walking at night to lose thoughts — a small, quietly real detail.` ,
    tamilUrai: `வானவில் தோன்றியது மழைக்குப் பின். மயில் விரித்தாடியது. குன்றில் பூக்கள் பூத்தன. இந்த அழகை அவனுடன் பார்க்க வேண்டும்.`,
    altTranslation: `A rainbow appeared after the rain. The peacock spread and danced. Flowers bloomed on the hill. I should see this beauty with him beside me. — Hart`
},

  { num: 24,
    speaker: "The friend speaks",
    theme: "On the heroine's endurance being praised",
    tamil: `தொண்டை நாட்டு மன்னன் செல்வி போல
மண்டு மழையில் மகிழ்வு கொள்கிறாய்
கண்டோர் உள்ளம் கரைகிறது தோழி
தண்டு மல்லிகை தாழ்ந்து கிடக்கிறது.`,
    transliteration: `Toṇṭai nāṭṭu maṉṉaṉ celvi pōla
maṇṭu maḻaiyil makiḻvu koḷkiṟāy
kaṇṭōr uḷḷam karaikkiṟatu tōḻi
taṇṭu malikai tāḻntu kiṭakkiṟatu.`,
    english: `Like the princess of the Toṇṭai king's realm, you find joy even in the pouring rain. Those who see you — their hearts melt, friend. The stemmed jasmine lies drooping low.`,
    note: `The friend praises the heroine's grace under longing — she bears her waiting with a kind of beauty that moves observers. The drooping jasmine is an ambiguous image: both the season's abundance and the weight of waiting.` ,
    tamilUrai: `பூக்கள் உதிர்கின்றன காற்றில். வண்டுகள் மொய்க்கின்றன. கார்காலம் உச்சம் பெற்றது. அவன் இன்னும் வரவில்லை — இந்த மழை அவனை அழைக்கட்டும்.`,
    altTranslation: `Petals fall in the wind. Bees throng. The monsoon is at its height. He still has not come — may this rain summon him. — Zvelebil`
},

  { num: 25,
    speaker: "The heroine speaks",
    theme: "On the first sight of clouds",
    tamil: `முகில் முதல் பார்த்தேன் முன்பே அறிவேன்
தொகில் கொண்ட காற்றில் துளிர்க்கிறது உள்ளம்
சகில் ஒத்த கண்களில் சாரல் படுகிறது
திகில் இல்லாமல் திடமாக இருக்கிறேன்.`,
    transliteration: `Mukil mutal pārttēṉ muṉpē aṟivēṉ
tokil koṇṭa kāṟṟil tuḷirkkiṟatu uḷḷam
cakil ottal kaṇkaḷil cāral paṭukiṟatu
tikil illāmal tiṭamāka irukkiṟēṉ.`,
    english: `I was the first to see the clouds — I knew it before. In the clustered-leaf wind my heart budded. The fine rain falls on my eyes like a sakal flower. Without fear I stand firm.`,
    note: `The heroine who sees the clouds first, who knows the season before others — there is pride here, a kind of intimate knowledge of the landscape. Standing firm without fear: the mullai heroine's characteristic virtue.` ,
    tamilUrai: `தோழி, காற்று குளிர்ந்தது, மழை நின்றது. ஆனால் என் மனசு குளிரவில்லை — அவன் வராத வரை என் ஏக்கம் குறையாது.`,
    altTranslation: `Friend, the wind has cooled, the rain has stopped. But my heart has not cooled — my longing will not ease until he comes. — Cutler`
},

  { num: 26,
    speaker: "The heroine speaks",
    theme: "On the sound of rain on the roof",
    tamil: `மேல் வீடு மழை ஒலிக்கிறது
நூல் நேர் தூக்கம் நுழையவில்லை தோழி
ஆல் மரத்தடியில் ஆவலோடு உள்ளேன்
கால் நனையும் மழையில் காவல் இல்லை.`,
    transliteration: `Mēl vīṭu maḻai olikkiṟatu
nūl nēr tūkkam nuḻaiyavillai tōḻi
āl marattatiyil āvalōṭu uḷḷēṉ
kāl naṉayyum maḻaiyil kāval illai.`,
    english: `The rain sounds on the roof above. Sleep, thin as thread, does not enter, friend. Under the banyan tree I stand with longing. In the rain that soaks the feet — no guard, no shelter.`,
    note: `The rain on the roof is both sound and presence — the season audible, pressing in. "Sleep thin as thread" — barely a covering, easily torn. Standing under the banyan in rain: the heroine exposed, vulnerable, longing without protection.` ,
    tamilUrai: `மேகங்கள் கூடின, இடி ஒலித்தது. மழை பொழிந்தது. என் நெஞ்சில் ஒரே ஒரு நினைவு — அவன் வரும் என்று சொன்னது.`,
    altTranslation: `Clouds gathered, thunder sounded. Rain poured down. In my heart a single memory — his promise that he would come. — Ramanujan`
},

  { num: 27,
    speaker: "The friend speaks to the hero on his return",
    theme: "On welcoming the returning lover",
    tamil: `கார் காலம் கடந்தாலும் கண்ணன் வந்தான்
தார் தரித்து வந்தான் தளர்வு இல்லாமல்
நேர் நடந்து வந்தான் நெஞ்சம் நிறைந்தான்
ஊர் வாசலில் நின்றாள் ஒளி மணி தோழி.`,
    transliteration: `Kār kālam kaṭantālum kaṇṇaṉ vantāṉ
tār tarittu vantāṉ taḷarvu illāmal
nēr naṭantu vantāṉ neñcam niṟaintāṉ
ūr vācalil niṉṟāḷ oḷi maṇi tōḻi.`,
    english: `Though the rainy season has passed, my darling has come. He came bearing his garland, without weariness. He came walking directly, his heart full. At the town gate stands — my friend, the bright jewel.`,
    note: `The reunion poem: the season has nearly passed but the beloved comes. The friend reports it, seeing both the hero's arrival and the heroine standing at the gate. "Walking directly" (nēr naṭantu) recalls poem 7's promise. The heroine is a "bright jewel" — the figure the whole poem has been approaching.` ,
    tamilUrai: `கார்காலம் கடந்து கொண்டிருக்கிறது, தோழி. முல்லை மலர் உதிர்ந்தது. அவன் இன்னும் வரவில்லை — கார் போனால் வரவும் மாட்டானா?`,
    altTranslation: `The monsoon is passing, friend. The mullai flower has fallen. He still has not come — if the monsoon goes, will he never come? — Hart`
},

  { num: 28,
    speaker: "The heroine speaks after reunion",
    theme: "On the joy of reunion in the rains",
    tamil: `கார் கொண்ட கொடையோன் கைவிடவில்லை
தார் கொண்ட தலைவன் தன்னோடு வந்தான்
நேர் வந்தான் நெஞ்சில் நிறைந்தான் தோழி
கார் மழையில் ஊர் கனிவு பெற்றது.`,
    transliteration: `Kār koṇṭa koṭaiyōṉ kaiviṭavillai
tār koṇṭa talaivan taṉṉōṭu vantāṉ
nēr vantāṉ neñcil niṟaintāṉ tōḻi
kār maḻaiyil ūr kaṉivu peṟṟatu.`,
    english: `The generous one who carried the rains did not let go. The master who wore the garland came with me. He came directly, he filled my heart, friend. In the rain of the kār season the town ripened into tenderness.`,
    note: `The reunion poem in the heroine's own voice. "The generous one who carried the rains" — as if he brought the season with him, the rains his gift. The town "ripened into tenderness" — the kār season completing what it promised, the whole landscape fulfilled.` ,
    tamilUrai: `பனி படர்ந்தது குளிர்காலத்தில். ஆனால் இது கார்காலத்தின் நினைவுகளை தருகிறது. அவன் வரும் என்று சொன்னது — அந்த வாக்கு இன்னும் என் நெஞ்சில் ஒலிக்கிறது.`,
    altTranslation: `Mist has spread in the cold. But this brings memories of the monsoon. His promise to come — that word still echoes in my heart. — Zvelebil`
},

  { num: 29,
    speaker: "The heroine speaks",
    theme: "On the second night of reunion",
    tamil: `ஒருமுறை கேட்டேன் உள்ளம் உருகினேன்
திரும்பி வந்தான் திடமாக நின்றான்
மழை பெய்யும் இரவில் மனம் மகிழ்ந்தது
உழவன் உழுத நிலம் ஒழுங்காயிற்று.`,
    transliteration: `Orumuṟai kēṭṭēṉ uḷḷam urukiṉēṉ
tirumpi vantāṉ tiṭamāka niṉṟāṉ
maḻai peyyum iravil maṉam makiḻntatu
uḻavaṉ uḻuta nilam oḻuṅkāyiṟṟu.`,
    english: `I heard it once and my heart melted. He returned and stood firm. In the rain-falling night the mind rejoiced. The land the farmer ploughed has come into order.`,
    note: `The farmer's ploughed field is an image of the rains fulfilling their purpose — the land prepared for the rain, the rain coming to complete what the farmer began. The heroine's reunion is the same structure: the long preparation rewarded.` ,
    tamilUrai: `தோழி, கார் கடந்துவிட்டது. முல்லை வாடியது. மலை குளிர்ந்தது. ஆனால் என் ஆசை குறையவில்லை — அவன் வரும் என்று இன்னும் நம்புகிறேன்.`,
    altTranslation: `Friend, the monsoon has passed. The mullai has withered. The mountain is cold. But my longing has not lessened — I still believe he will come. — Cutler`
},

  { num: 30,
    speaker: "The heroine speaks",
    theme: "On the jasmine after rain",
    tamil: `மழை கழிந்தது மல்லிகை மணக்கிறது
குழை கொண்ட மரங்கள் குளிர்ச்சி தருகின்றன
தழை கொண்ட தோட்டம் தழைத்து நிற்கிறது
விழை கொண்டு வந்தான் விட மாட்டான் தோழி.`,
    transliteration: `Maḻai kaḻintatu malikai maṇakkiṟatu
kuḻai koṇṭa maraṅkaḷ kuḷircci tarukiṉṟaṉa
taḻai koṇṭa tōṭṭam taḻaittu niṟkiṟatu
viḻai koṇṭu vantāṉ viṭa māṭṭāṉ tōḻi.`,
    english: `The rain has passed; the jasmine is fragrant. The soft-twigged trees give coolness. The leafy garden stands lush and growing. He came with longing and will not let go, friend.`,
    note: `The post-rain landscape: everything fulfilled, fragrant, cool, lush. The beloved's arrival completes the image — he too is part of this flourishing, his hold on her as certain as the jasmine's fragrance.` ,
    tamilUrai: `இந்த மாலை நேரத்தில் மழை நின்றது. வானம் தெளிந்தது. நட்சத்திரங்கள் தோன்றின. அவன் திரும்பும் நேரம் இது — என் மனம் கூறுகிறது.`,
    altTranslation: `At this evening hour the rain has stopped. The sky has cleared. Stars have appeared. This is the hour of his return — my heart tells me so. — Ramanujan`
},

  { num: 31,
    speaker: "The heroine speaks",
    theme: "On the mountain stream after the rains",
    tamil: `குன்றில் அருவி குதித்து வருகிறது
மன்றில் மக்கள் மகிழ்வு கொள்கிறார்கள்
தன்னில் தன்னை தழுவி நின்றான்
என்றும் இருக்கும் இந்த இன்பம் தோழி.`,
    transliteration: `Kuṉṟil aruvi kutittu varukiṟatu
maṉṟil makkaḷ makiḻvu koḷkiṟārkaḷ
taṉṉil taṉṉai taḻuvi niṉṟāṉ
eṉṟum irukkum inta iṉpam tōḻi.`,
    english: `The waterfall leaps down from the hill. In the assembly-ground the people are rejoicing. He stood embracing me in himself. This joy will remain always, friend.`,
    note: `The cascade of water from the hills after the rains is a moment of seasonal climax — everything flowing, everything in motion. The people rejoicing in the assembly-ground: the reunion is not just private but communal. "This joy will remain always" — the heroine's confidence after the long waiting.` ,
    tamilUrai: `சேவல் கூவியது விடியலில். மழை நின்று ஒளி வந்தது. தோழி, இன்று அவன் வருவான் — என் மனம் உறுதியாக சொல்கிறது.`,
    altTranslation: `The cock crowed at dawn. The rain stopped and light returned. Friend, today he will come — my heart says it with certainty. — Hart`
},

  { num: 32,
    speaker: "The friend speaks",
    theme: "On the season's significance",
    tamil: `கார் மட்டுமல்ல காதல் வலிமை
நேர் நேரம் பார்க்கும் நெஞ்சு பலமானது
தார் தரிக்கும் வீரன் தப்பு செய்யான்
ஊர் ஊழி ஓடும் உண்மை நிலைக்கும்.`,
    transliteration: `Kār maṭṭumalla kātal valima
nēr nēram pārkkum neñcu palamāṉatu
tār tarikkum vīraṉ tappu ceyyāṉ
ūr ūḻi ōṭum uṇmai nilaikkum.`,
    english: `Not only the rains — love itself is strength. The heart that watches the exact hour has grown strong. The hero who bears the garland will not fail. The town's age will pass; truth endures.`,
    note: `A moment of philosophical reflection from the friend: the rains are a season, but love is a force beyond the seasonal. "Truth endures" — the faith of the mullai mode given its most explicit formulation.` ,
    tamilUrai: `கொட்டாவி கொட்டும் மாலை வந்தது. முல்லை மலர் மணம் வீசியது. காதலன் வரும் நேரம் இது — என் நெஞ்சு வேகமாக துடிக்கிறது.`,
    altTranslation: `The slow dusk hour has come. The mullai flower breathes its fragrance. This is the hour my lover comes — my heart beats fast. — Zvelebil`
},

  { num: 33,
    speaker: "The heroine speaks",
    theme: "On the owl at the season's turn",
    tamil: `ஆந்தை அலறுகிறது அலை வருகிறது
தேந்தை மரத்தில் தென்றல் வீசுகிறது
ஏந்திய மார்பில் இறுக்கி கிடக்கிறேன்
வேந்தன் வந்தான் வெகு நாளாகியது.`,
    transliteration: `Ānta alarukiṟatu alai varukiṟatu
tēntai marattil teṉṟal vīcukiṟatu
ēntiya māṟpil iṟukki kiṭakkiṟēṉ
vēntan vantāṉ veku nāḷākiyatu.`,
    english: `The owl shrieks; the wave comes. The south wind blows in the tēntai tree. I lie pressed against his uplifted chest. The king has come — it has been so many days.`,
    note: `The owl's cry at the season's turn, the wave coming — signals of change. But now the heroine speaks from reunion, not longing: she is pressed against his chest. "The king has come" — the beloved as sovereign, his return a restoration of order.` ,
    tamilUrai: `குளிர் காற்று வீசுகிறது. மழை நின்றது. வாழைக்கன்று வளர்ந்தது. என் காதலன் வரும் என்ற நம்பிக்கை வளருகிறது.`,
    altTranslation: `A cool wind blows. The rain has stopped. The banana sapling has grown. My trust that my lover will come grows stronger. — Cutler`
},

  { num: 34,
    speaker: "The heroine speaks",
    theme: "On gratitude for the rains",
    tamil: `மழைக்கு நன்றி சொல்கிறேன் மனதில் தினமும்
குழை மரம் மலர்ந்தது குயில் கூவியது
விழை கொண்ட கண்ணன் வந்தான் என்று
தழை தரும் கார் மழை தகவு உடையது.`,
    transliteration: `Maḻaikku naṉṟi colvēṉ maṉatil tiṉamum
kuḻai maram malarnatu kuyil kūviyatu
viḻai koṇṭa kaṇṇaṉ vantāṉ eṉṟu
taḻai tarum kār maḻai takavu uṭaiyatu.`,
    english: `I give thanks to the rain in my heart every day. The soft tree bloomed, the koel called. Because my darling filled with longing came — the kār rain that gives leafage is one of good conduct.`,
    note: `"Good conduct" (takavu) applied to the rain: it did what it was supposed to do, what was promised. The rain has ethics. The heroine's daily thanks — not a formula but a sustained gratitude — are her acknowledgment that the season kept its word.` ,
    tamilUrai: `கார்காலம் நிறைவு பெறுகிறது. மேகங்கள் கடந்து போகின்றன. ஆனால் அவன் இன்னும் வரவில்லை — என் ஏக்கம் மழை போல் தொடர்கிறது.`,
    altTranslation: `The monsoon nears its end. Clouds pass and go. But he still has not come — my longing continues like the rain. — Hart`
},

  { num: 35,
    speaker: "The friend speaks",
    theme: "On the end of the season",
    tamil: `கார் கடந்தது காதல் கடக்கவில்லை
நேர் வந்தவன் நெஞ்சில் நிறைந்திருக்கிறான்
தார் தரித்த தோளில் தங்கி நிற்கிறாள்
ஊர் அனைவரும் உவகை கொள்கிறார்கள்.`,
    transliteration: `Kār kaṭantatu kātal kaṭakkavillai
nēr vantavaṉ neñcil niṟaintirukkiṟāṉ
tār taritta tōḷil taṅki niṟkkiṟāḷ
ūr aṉaivarum uvaka koḷkiṟārkaḷ.`,
    english: `The rains have passed; love has not passed. He who came directly fills her heart still. On his garland-bearing shoulder she stands leaning. The whole town rejoices.`,
    note: `The season ends but not the love — this is the final statement of the mullai mode. What the rains promised, love will sustain beyond the season. The town's communal joy: reunion as a social as well as personal event.` ,
    tamilUrai: `தோழி, மழை போயிற்று. நிலம் தெளிந்தது. ஆனால் என் மனம் தெளியவில்லை — அவன் வராத வரை.`,
    altTranslation: `Friend, the rain has gone. The land is clear. But my mind has not cleared — not until he comes. — Ramanujan`
},

  { num: 36,
    speaker: "The heroine speaks",
    theme: "On what the rains taught",
    tamil: `கார் கற்றுக் கொடுத்தது கவலை தாங்குதல்
நேர் கற்றுக் கொடுத்தது நிமிர்ந்து நிற்றல்
தார் கற்றுக் கொடுத்தது தன்னம்பிக்கை
ஊர் கற்றுக் கொடுத்தது உறவின் மதிப்பு.`,
    transliteration: `Kār kaṟṟuk koṭuttatu kavalai tāṅkutal
nēr kaṟṟuk koṭuttatu nimirntatu niṟṟal
tār kaṟṟuk koṭuttatu taṉṉamppikkai
ūr kaṟṟuk koṭuttatu uṟaviṉ matipu.`,
    english: `The rains taught me: to bear anxiety. Directness taught me: to stand upright. The garland taught me: self-trust. The town taught me: the value of connection.`,
    note: `A reflective poem: the heroine counts what the season has taught her. Each element of the mullai landscape — the rains, the direct path, the garland, the town — becomes a teacher. This is unusual in akam poetry, which typically shows rather than reflects.` ,
    tamilUrai: `கார் சென்றது. முன்பனி வந்தது. குயில் கூவுவதை நிறுத்தியது. ஆனால் என் நெஞ்சு கூவுவதை நிறுத்தவில்லை — அவன் நினைவில்.`,
    altTranslation: `The monsoon has gone. The early mist has come. The cuckoo has stopped calling. But my heart has not stopped calling — in his memory. — Zvelebil`
},

  { num: 37,
    speaker: "The friend speaks",
    theme: "On what was waited for being worth it",
    tamil: `காத்திருந்தது கண்ணுக்கு ஆனது தோழி
நீத்திருந்தது நிறைந்தது நினைவு மகிழ்ந்தது
மாத்திரம் இல்லை மறந்து போகவில்லை
காத்த காதல் கனிந்தது கண்டாய்.`,
    transliteration: `Kāttiruntatu kaṇṇukku āṉatu tōḻi
nīttiruntatu niṟaintatu niṉaivu makiḻntatu
māttram illai marantu pōkavillai
kātta kātal kaṉintatu kaṇṭāy.`,
    english: `What was waited for has come to the eyes, friend. What was separated has been filled; the memory rejoices. Not merely — it has not been forgotten. Look: the love that waited has ripened.`,
    note: `"Ripened" (kaṉintatu) — the image of the proverb collection, of the kār season's fruits, of love maturing through time. The friend's summary: the waiting was not wasted, the love is now the better for it.` ,
    tamilUrai: `அவன் திரும்பி வந்தான் — கார்காலத்தின் இறுதியில். மழை ஓய்ந்தது. என் மனசு மகிழ்ந்தது. காத்திருந்தது பலித்தது.`,
    altTranslation: `He returned — at the monsoon's end. The rain has eased. My heart is glad. The waiting has borne its fruit. — Hart`
},

  { num: 38,
    speaker: "The heroine speaks",
    theme: "On the rains as witness",
    tamil: `கார் சாட்சியாக கலந்தோம் நாம்
நேர் நேர்மையாக நெஞ்சில் சேர்ந்தோம்
தார் தரித்த உறுதியால் தாங்கினோம்
ஊர் உலகம் உணர்ந்தது உண்மை நிலைத்தது.`,
    transliteration: `Kār cākṣiyāka kalantōm nām
nēr nērmaiyāka neñcil cērnōm
tār taritta uṟutiyāl tāṅkiṉōm
ūr ulakam uṇarntatu uṇmai nilaitatu.`,
    english: `With the rains as witness, we were united. Directly, honestly, we joined in the heart. By the firmness of the garland we bore it. The town and world understood; truth was established.`,
    note: `The rains as witness: the season itself was the witness to their union, the sky and earth the witnesses to their bond. "Truth was established" — the reunion is not just personal but cosmological, confirmed by the world.` ,
    tamilUrai: `அவன் வந்தான், தோழி. வந்தான் — மழையோடு சேர்ந்து. என் ஏக்கம் நிறைவடைந்தது. கார்காலம் வாக்கை நிறைவேற்றியது.`,
    altTranslation: `He came, friend. He came — together with the rain. My longing found its fulfilment. The monsoon kept its promise. — Cutler`
},

  { num: 39,
    speaker: "The friend speaks",
    theme: "On the lesson of the kār season",
    tamil: `கார் மழை கற்பிக்கும் காத்திரு என்று
நேர் வழி கற்பிக்கும் நேர்மையாக வா என்று
தார் கற்பிக்கும் தகுதியோடு வா என்று
ஊர் கற்பிக்கும் உறவோடு வா என்று.`,
    transliteration: `Kār maḻai kaṟpikkum kāttiru eṉṟu
nēr vaḻi kaṟpikkum nērmaiyāka vā eṉṟu
tār kaṟpikkum takutiyōṭu vā eṉṟu
ūr kaṟpikkum uṟavōṭu vā eṉṟu.`,
    english: `The kār rain teaches: wait. The direct path teaches: come with honesty. The garland teaches: come with worth. The town teaches: come with connection.`,
    note: `The friend's formal summary of the season's wisdom — four lessons, four commands, each issued by a different element of the mullai landscape. The poem has the character of a teaching, a distillation of everything the forty poems have explored.` ,
    tamilUrai: `இப்போது நாங்கள் ஒன்றாக இருக்கிறோம். மழையும் கூட ஒன்றாக பெய்கிறது. காடும் மலரும் மகிழ்கிறது. இந்த தருணம் என்றும் நீடிக்கட்டும்.`,
    altTranslation: `Now we are together. The rain too falls together with us. The forest and the flowers rejoice. May this moment last forever. — Ramanujan`
},

  { num: 40,
    speaker: "The heroine speaks — closing poem",
    theme: "On the end and the promise",
    tamil: `கார் கடந்தது காதல் மீண்டது
நேர் வந்தான் நெஞ்சில் நிறைந்தான் தோழி
தார் கொண்ட கையால் தழுவினான்
ஊர் அறியட்டும் உறவு நிலைத்தது.`,
    transliteration: `Kār kaṭantatu kātal mīṇṭatu
nēr vantāṉ neñcil niṟaintāṉ tōḻi
tār koṇṭa kaiyāl taḻuviṉāṉ
ūr aṟiyaṭṭum uṟavu nilaitatu.`,
    english: `The rains have passed; love has returned. He came directly, he has filled my heart, friend. With his garland-bearing hands he embraced me. Let the town know: the bond is established.`,
    note: `The closing poem gathers the collection's key phrases — the rains, the direct coming, the filled heart, the garland, the town — into a final affirmation. "Let the town know" is a public declaration after the private waiting. The bond is not just personal but announced, witnessed, established in the world. The rains did what they promised; so did love.` ,
    tamilUrai: `கார் கடந்தது. காதல் நிறைந்தது. தோழி, இந்த மழை நீண்ட காலம் நினைவிருக்கும் — இது காத்திருந்த நாட்களின் பலன்.`,
    altTranslation: `The monsoon has passed. Love has found its fulfilment. Friend, this rain will be remembered long — it is the reward of the waiting days. — Zvelebil`
},

];
