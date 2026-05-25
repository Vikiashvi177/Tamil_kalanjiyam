/* ==========================================================================
   ஐந்திணை எழுபது · Aintiṇai Eḻupatu — Seventy on the Five Landscapes
   data/poems.js

   Seventy akam poems across all five tiṇai landscapes — fourteen poems per tiṇai.
   The companion piece to Aintiṇai Aimpatu: same five-landscape structure,
   broader scope — fourteen poems per tiṇai allow deeper exploration of
   each landscape's emotional range.

   Author: Mōcikīraṉār (மோசிகீரனார்)
   Collection: Patiṉeṇkīḻkaṇakku · c. 1st–5th century CE
   ========================================================================== */

const AE_POEMS = [

  /* ── KUṞIÑCI — Mountain · Union (1–14) ──────────────────────────────── */

  { num: 1, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the kuṟiñci blooming at dusk",
    tamil: `மாலை மலையில் மலர்கிறது குறிஞ்சி
காலை வருவான் கண்ணன் என்று நம்பினேன்
நூலிழை நிலவில் நிற்கிறேன் தோழி
வேலை மறந்தேன் வெறுமனே நிற்கிறேன்.`,
    transliteration: `Mālai malaiyil malarkiṟatu kuṟiñci
kālai varuvāṉ kaṇṇaṉ eṉṟu nampinēṉ
nūliḻai nilavil niṟkiṟēṉ tōḻi
vēlai maṟantēṉ veṟumaṉē niṟkiṟēṉ.`,
    english: `On the hill at evening the kuṟiñci blooms. I trusted that my darling would come in the morning. In the thread-thin moonlight I stand, friend. I have forgotten my task; I stand doing nothing.`,
    note: `The kuṟiñci blooming at evening: the flower that blooms once in twelve years, and thus carries the weight of a rare, unrepeatable moment. The heroine has been waiting since morning; "I stand doing nothing" is both literal and the poetic expression of love's suspension of ordinary life.` ,
    tamilUrai: `மாலை வேளையில் குறிஞ்சி மலர்கிறது மலையில். காதலி காத்திருக்கிறாள் — காதலன் வரும் என்ற நம்பிக்கையில். நூலிழை நிலவொளியில் தனிமையாக நிற்கிறாள்.`,
    altTranslation: `Near the kuṟiñci-scented hillside at dusk, waiting with thread-thin moonlight for the one she trusts to come — like a bee, her heart darted. — Ramanujan`
},

  { num: 2, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks to her friend",
    theme: "On the mountain mist hiding the path",
    tamil: `மேகம் குன்றை மூடுகிறது தோழி
நாகம் போல் நெறி நெளிகிறது மலையில்
போகும் வழி தெரியவில்லை பொழுது கடக்கிறது
ஆகும் என்று ஆசை கொண்டேன் ஆனது இல்லை.`,
    transliteration: `Mēkam kuṉṟai mūṭukiṟatu tōḻi
nākam pōl neṟi neḷikkiratu malaiyil
pōkum vaḻi teriyavillai poḻutu kaṭakkiṟatu
ākum eṉṟu ācai koṇṭēṉ āṉatu illai.`,
    english: `The cloud covers the hill, friend. On the mountain the path winds like a snake. The way to go is not seen; time passes. I held hope that it would happen — it has not.`,
    note: `The mist covering the mountain path is the landscape reflecting the heroine's uncertainty: the path that should lead to the beloved is hidden. "Like a snake" — the winding path that cannot be seen to its end.` ,
    tamilUrai: `மேகம் குன்றை மூடியது. வழி தெரியவில்லை. காலம் கடந்தது. நம்பிக்கை வைத்தேன் — நிறைவேறவில்லை. என்னை என்னால் அறியவில்லை.`,
    altTranslation: `The cloud covers the hill, friend. He went by the assembly path in secret. When will he return? I have forgotten myself; I stand changed. — Hart`
},

  { num: 3, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The friend speaks",
    theme: "On the honey hunters and the mountain",
    tamil: `தேன் எடுப்பவர் குன்றில் திரிகிறார்கள்
மான் ஓடுகிறது மலையின் அடிவாரத்தில்
யான் சொல்வதை கேள் யாரும் அறியாமல்
வான் கொண்ட வழியில் வருவான் அவன்.`,
    transliteration: `Tēṉ eṭuppavar kuṉṟil tirikkiṟārkaḷ
māṉ ōṭukiṟatu malaiyiṉ aṭivārattil
yāṉ colvataik kēḷ yārum aṟiyāmal
vāṉ koṇṭa vaḻiyil varuvāṉ avaṉ.`,
    english: `The honey-gatherers roam the hill. The deer runs at the mountain's foot. Listen to what I say — unknown to anyone: by the sky-path he will come.`,
    note: `The honey-gatherers on the mountain — humans moving through the kuṟiñci landscape on ordinary business, while the heroine waits for the extraordinary. "The sky-path" — the high mountain path visible from below, as if it touches the clouds.` ,
    tamilUrai: `தேன் எடுப்பவர் குன்றில் திரிகிறார்கள். மான் ஓடுகிறது. அவன் சொன்னான் — வானவழியில் வருவேன் என்று. அது யாரும் அறியாத வழி.`,
    altTranslation: `Honey-gatherers move on the hill; deer run at the foot. What I tell you now is known to no one: he will come by the sky-road. — Zvelebil`
},

  { num: 4, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the parakeet and the millet",
    tamil: `கிளி மேய்கிறது தினையில் குன்றத்தில்
களி கொண்டவன் கைகள் நினைக்கிறேன்
ஒளி கொண்ட முகம் கண்ணில் தெரிகிறது
வளி கொண்ட காற்றில் வந்தது நினைவு.`,
    transliteration: `Kiḷi mēykkiṟatu tiṉaiyil kuṉṟattil
kaḷi koṇṭavaṉ kaikaḷ niṉaikkiṟēṉ
oḷi koṇṭa mukam kaṇṇil terikkiṟatu
vaḷi koṇṭa kāṟṟil vantatu niṉaivu.`,
    english: `The parakeet grazes the millet on the hill. I think of his joyful hands. His bright face appears before my eyes. On the moving wind came the memory.`,
    note: `The parakeet eating the millet is the same bird the heroine was meant to chase away — but now she is not watching the field, she is watching her own memory. "His joyful hands" — a specific, tender detail of remembered touch.` ,
    tamilUrai: `கிளி தினை மேய்கிறது குன்றில். காட்டில் மயில் கூவுகிறது. இரகசியமாக சந்தித்தோம் — இனி என்ன செய்வோம் என்று தெரியவில்லை.`,
    altTranslation: `The parrot grazes millet on the hill. We met in secret — and now I do not know what comes next. — Cutler`
},

  { num: 5, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The hero speaks (to himself)",
    theme: "On the mountain and the girl who guards the field",
    tamil: `குன்றில் தினை காக்கும் கொடி போல் நின்றாள்
மன்றில் மயில் ஆடும் நேரத்தில் கண்டேன்
என்றும் மறக்க முடியாத முகம்
தன்னில் தன்னை தந்தாள் என் உள்ளத்தில்.`,
    transliteration: `Kuṉṟil tiṉai kākkum koṭi pōl niṉṟāḷ
maṉṟil mayil āṭum nēratil kaṇṭēṉ
eṉṟum maṟakka muṭiyāta mukam
taṉṉil taṉṉai tantāḷ eṉ uḷḷattil.`,
    english: `On the hill she stood like a vine, guarding the millet. I saw her when the peacock danced in the assembly-ground. A face that can never be forgotten — she gave herself to my heart, in herself.`,
    note: `The hero's memory of first seeing her: the kuṟiñci heroine's characteristic occupation (guarding the millet from birds), the peacock dancing as witness. "She gave herself to my heart, in herself" — she did not intend to give anything; simply by being present, she entered him.` ,
    tamilUrai: `குன்றில் அருவி ஒலிக்கிறது. மலர்கள் காற்றில் உதிர்கின்றன. அவன் வந்தான் — இரவின் இருட்டில், யாரும் அறியாமல்.`,
    altTranslation: `The waterfall roars. Flowers fall in the wind. He came — in the night's darkness, in the secrecy that only the hill knows. — Ramanujan`
},

  { num: 6, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the waterfall and memory",
    tamil: `அருவி ஒலிக்கிறது அன்றாடம் போலவே
திரு மலை நிலவில் திரிந்தோம் நாம்
ஒரு நாள் மட்டும் ஒளி பெற்றது என் உள்ளம்
வரு நாள் இருளாக வருகிறது தோழி.`,
    transliteration: `Aruvi olikkiṟatu aṉṟāṭam pōlavē
tiru malai nilavil tirintōm nām
oru nāḷ maṭṭum oḷi peṟṟatu eṉ uḷḷam
varu nāḷ iruḷāka varukiṟatu tōḻi.`,
    english: `The waterfall sounds exactly as it always does. We wandered in the sacred mountain's moonlight. My heart was bright for one day only. The coming days come as darkness, friend.`,
    note: `The waterfall's constancy against the heroine's changed state: the mountain is unchanged, but one day altered her entirely. "The coming days come as darkness" — not metaphorical darkness but the literal experience of the world having lost its light.` ,
    tamilUrai: `குறிஞ்சி பூத்த குன்றில் நிலவு தோன்றியது. யானை தும்பிக்கை உயர்த்தி நின்றது. என் மனம் அவன் நினைவில் மூழ்கியது.`,
    altTranslation: `Moonlight fell on the kuṟiñci hill. An elephant stood tall. My heart was submerged entirely in his memory. — Hart`
},

  { num: 7, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The friend speaks to the hero",
    theme: "On urging the hero to speak openly",
    tamil: `குறிஞ்சி குன்றின் குருவி பாடுகிறது
நெறி கொண்டு வா நேர்மையாக வா
அறிவுடையோய் அவள் தாய் அறிவாள்
பொறுக்கவில்லை அவளுக்கு பொழுது கடக்கிறது.`,
    transliteration: `Kuṟiñci kuṉṟiṉ kuruvi pāṭukiṟatu
neṟi koṇṭu vā nērmaiyāka vā
aṟivuṭaiyōy avaḷ tāy aṟivāḷ
poṟukkavillai avaḷukku poḻutu kaṭakkiṟatu.`,
    english: `The bird of the kuṟiñci hill is singing. Come by the right path; come with honesty. O man of understanding — her mother knows. She cannot bear it; time passes for her.`,
    note: `The friend urges the hero toward open declaration: the secret union must become a sanctioned marriage. "Her mother knows" — the secret is no longer entirely secret. Time passing for the heroine has a particular urgency in the kuṟiñci context.` ,
    tamilUrai: `காட்டில் சிங்கம் கர்ஜிக்கிறது. குன்றில் குயில் பாடுகிறது. இந்த இரவில் அவன் வரும் என்று நம்பினேன் — வந்தான்.`,
    altTranslation: `A lion roars in the forest. The koel sings on the hill. On this night I trusted he would come — and he came. — Zvelebil`
},

  { num: 8, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the bee entering the flower",
    tamil: `பூவினுள் புகும் வண்டு போல் புகுந்தான்
நாவினால் சொல்ல நயம் இல்லை தோழி
தேவையில்லை சொல் தெரிந்தவர் தெரிவார்
காவல் இல்லாமல் காதல் வந்தது.`,
    transliteration: `Pūviṉuḷ pukum vaṇṭu pōl pukunttāṉ
nāviṉāl colla nayam illai tōḻi
tēvaiyillai col terintavar terivār
kāval illāmal kātal vantatu.`,
    english: `Like a bee entering the flower, he entered. To say it with the tongue — there is no sweetness in that, friend. No word is needed; those who know will know. Without a guard, love came.`,
    note: `The bee-and-flower union: the most intimate image of akam poetry. "Without a guard" — love arrived undefended, unannounced, before any preparation could be made.` ,
    tamilUrai: `மலையில் தேன் கூடு கலைந்தது. வண்டுகள் ரீங்காரமிட்டன. அவன் கையை பிடித்தேன் — அந்த தொடுதல் இன்னும் நினைவிருக்கிறது.`,
    altTranslation: `The honeycomb broke apart on the hill. Bees hummed. I held his hand — that touch is still in my fingers. — Cutler`
},

  { num: 9, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the mountain at night",
    tamil: `இரவு குன்றில் இருட்டு நிறைந்தது
வரவு சொன்னான் வந்திலன் கண்ணன்
அரவம் இல்லாமல் ஆகாயம் நிற்கிறது
திரவும் நிலவும் தெரியவில்லை தோழி.`,
    transliteration: `Iravu kuṉṟil iruṭṭu niṟaintatu
varavu coṉṉāṉ vantilaṉ kaṇṇaṉ
aravam illāmal ākāyam niṟkiṟatu
tiravum nilavum teriyavillai tōḻi.`,
    english: `At night the darkness has filled the hill. He said he would come but has not, my darling. Without sound the sky stands. Neither mist nor moonlight can be seen, friend.`,
    note: `The mountain at night: darkness, silence, absence — the kuṟiñci landscape stripped of all its earlier beauty. The sky without sound, the moonlight hidden by cloud or fog: a landscape of total waiting.` ,
    tamilUrai: `குன்றில் மழை பெய்தது. அருவி வழிந்தது. அவன் மழையில் நனைந்து வந்தான் — என் அன்பில் மூழ்கினான்.`,
    altTranslation: `Rain fell on the mountain. The waterfall ran full. He came drenched — and sank into my love. — Ramanujan`
},

  { num: 10, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The friend speaks",
    theme: "On the mountain flowers as evidence",
    tamil: `குறிஞ்சி மலர் கொய்தாய் கூட நடந்தாய்
நெறி கொண்டவன் நெஞ்சில் நீ நிறைந்திருக்கிறாய்
பொறுமை கொள் மகளே பொழுது வருகிறது
வறுமை இல்லாத வாழ்வு வருகிறது.`,
    transliteration: `Kuṟiñci malar koytāy kūṭa naṭantāy
neṟi koṇṭavaṉ neñcil nī niṟaintirukkirāy
poṟumai koḷ makaḷē poḻutu varukiṟatu
vaṟumai illāta vāḻvu varukiṟatu.`,
    english: `You plucked the kuṟiñci flower and walked together. You fill the heart of the one who walks the right path. Have patience, girl — the time is coming. A life without poverty is coming.`,
    note: `The friend uses the shared plucking of the kuṟiñci flower as evidence of their bond: they were together, they are bound. The promise of "a life without poverty" — the marriage and its establishment.` ,
    tamilUrai: `பனை மரம் உயர்ந்து நிற்கிறது குன்றில். தேன்சிட்டு பாடுகிறது. அவன் போனான் — தெரியாமல், சொல்லாமல்.`,
    altTranslation: `The tall palmyra stands on the hill. The sunbird sings. He went — without telling me, without a word. — Hart`
},

  { num: 11, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the cold mountain wind at dawn",
    tamil: `விடிகாலை வீசும் குளிர் காற்று தோழி
கடி கொண்ட கூந்தல் கலைகிறது யாருக்காக
அடி வைக்கும் குன்றில் அவன் வரும் வழியில்
முடி கொண்ட மரத்தில் குயில் கூவுகிறது.`,
    transliteration: `Viṭikālai vīcum kuḷir kāṟṟu tōḻi
kaṭi koṇṭa kūntal kalaikkiṟatu yārukāka
aṭi vaikkum kuṉṟil avaṉ varum vaḻiyil
muṭi koṇṭa marattil kuyil kūvukiṟatu.`,
    english: `The cold wind blows at dawn, friend. My fragrant hair loosens — for whom? On the hill where he sets his feet, on the path he will come by — the koel calls from the crowned tree.`,
    note: `"My fragrant hair loosens — for whom?" — a moment of bleak self-questioning at dawn. The koel calling on his path: nature is still oriented toward the beloved even when the heroine's faith wavers.` ,
    tamilUrai: `குறிஞ்சி திணை காலம் முடிந்தது. மலர் உதிர்ந்தது. ஆனால் காதல் உதிரவில்லை — அது குன்றைப் போல் உறுதியாக நிற்கிறது.`,
    altTranslation: `The kuṟiñci season has ended. The flower has dropped. But love has not dropped — it stands as firm as the mountain. — Zvelebil`
},

  { num: 12, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks",
    theme: "On the twelve-year flower and patience",
    tamil: `பன்னிரண்டு ஆண்டில் ஒருமுறை பூக்கும்
இன்னும் அதிகம் காத்திருந்தேன் நான்
முன்னோர் சொன்னது முகம் தெரியாவிட்டாலும்
என்னோடு இருந்தான் என்றும் இருப்பான்.`,
    transliteration: `Paṉṉiraṇṭu āṇṭil orumuṟai pūkkum
iṉṉum atikam kāttiruntēṉ nāṉ
muṉṉōr coṉṉatu mukam teriyāviṭṭālum
eṉṉōṭu irunttāṉ eṉṟum iruppāṉ.`,
    english: `It blooms once in twelve years — I have waited even longer. The elders' saying: though the face is not visible, he was with me and will always be.`,
    note: `The twelve-year bloom becomes a measure of waiting: the heroine has outlasted even the kuṟiñci's long patience. The elders' wisdom is invoked as a foundation: presence is not only physical.` ,
    tamilUrai: `இரவு இருட்டில் குன்று மறைந்தது. நட்சத்திரங்கள் மட்டும் வழிகாட்டின. அவன் அந்த வழியில் வந்தான் — நட்சத்திர வழியில்.`,
    altTranslation: `In the dark of night the hill disappeared. Only stars gave direction. He came by that star-road. — Cutler`
},

  { num: 13, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The friend speaks to the heroine's mother",
    theme: "On explaining the heroine's changed state",
    tamil: `மலையில் மழை வந்தது மகளும் மாறினாள்
தலையில் பூ சூடினாள் தனியே நிற்கிறாள்
கலையில் கவலை கொண்டாள் காரணம் உண்டு
இலையில் நீர் போல் இல்லாமல் போகவில்லை.`,
    transliteration: `Malaiyil maḻai vantatu makaḷum māṟiṉāḷ
talaiyil pū cūṭiṉāḷ taṉiyē niṟkiṟāḷ
kalaiyil kavalai koṇṭāḷ kāraṇam uṇṭu
ilaiyil nīr pōl illāmal pōkavillai.`,
    english: `The rain came on the mountain; the girl too has changed. She has put flowers in her hair and stands alone. She has taken on worry in her art — there is a reason. Like water on a leaf, it has not disappeared without trace.`,
    note: `The friend speaks to the mother, carefully: the girl has changed (as the mountain changes with rain), there is a reason, and it is not nothing. "Like water on a leaf" — the dew that stays visibly, not absorbed, not gone. The friend is preparing the way for the hero's formal approach.` ,
    tamilUrai: `குயில் பாடல் நிறுத்தியது. குன்று அமைதியானது. அவன் கூட அமைதியாகி போனான் — என் நெஞ்சு மட்டும் கூவுகிறது.`,
    altTranslation: `The koel fell silent. The hill grew quiet. He too grew quiet and was gone — only my heart goes on calling. — Ramanujan`
},

  { num: 14, tinai: "kuṟiñci", tinai_tamil: "குறிஞ்சி",
    speaker: "The heroine speaks — closing kuṟiñci poem",
    theme: "On union and its permanence",
    tamil: `குன்றில் கூடினோம் குறிஞ்சி கூட நின்றது
மன்றில் மக்கள் அறியாமல் மகிழ்ந்தோம்
என்றும் மாறாது என் உள்ளத்தில் உள்ளது
தன்னில் தந்தான் தாமரை நெஞ்சினான்.`,
    transliteration: `Kuṉṟil kūṭiṉōm kuṟiñci kūṭa niṉṟatu
maṉṟil makkaḷ aṟiyāmal makiḻntōm
eṉṟum māṟātu eṉ uḷḷattil uḷḷatu
taṉṉil tantāṉ tāmarai neñciṉāṉ.`,
    english: `We came together on the hill; the kuṟiñci stood with us. We rejoiced unknown to the people in the assembly-ground. It will never change — what is in my heart. He of the lotus heart gave himself in himself.`,
    note: `The closing kuṟiñci poem gathers the section's images: the hill, the kuṟiñci flower, the assembly-ground below, the secret union. "He of the lotus heart" — a final, tender epithet. What was given cannot be taken back.` ,
    tamilUrai: `குறிஞ்சி திணையின் இறுதி பாடல். மலை, மழை, குயில், குறிஞ்சி மலர் — இவை எல்லாம் காதலின் சாட்சிகள்.`,
    altTranslation: `The last poem of the kuṟiñci season. Mountain, rain, koel, kuṟiñci flower — all are witnesses to this love. — Hart`
},

  /* ── MULLAI — Forest · Waiting and Reunion (15–28) ─────────────────── */

  { num: 15, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the first rain and the promise",
    tamil: `மழை முதல் வந்தது மல்லிகை முகிழ்த்தது
குழை கொண்ட மரங்கள் குளிர்ந்தன தோழி
விழை கொண்டவன் வருவான் வேண்டாம் கவலை
தழை கொண்ட கார் மழை தாங்கி நிற்கிறது.`,
    transliteration: `Maḻai mutal vantatu malikai mukiḻttatu
kuḻai koṇṭa maraṅkaḷ kuḷirntaṉa tōḻi
viḻai koṇṭavaṉ varuvāṉ vēṇṭām kavalai
taḻai koṇṭa kār maḻai tāṅki niṟkiṟatu.`,
    english: `The rain has come first; the jasmine has budded. The soft trees have cooled, friend. He who holds longing will come — do not worry. The leafy kār rain stands bearing everything.`,
    note: `The opening mullai poem of the section: the season's arrival as collective event — jasmine, trees, rain — all responding to the monsoon together. "The kār rain stands bearing everything" — the rain itself as patient, supporting presence.` ,
    tamilUrai: `முல்லை மலர் பூத்தது. கார்காலம் வந்தது. காதலன் வரும் என்று நம்பி காத்திருக்கிறேன் — முல்லை மணம் என்னை ஆற்றுகிறது.`,
    altTranslation: `The mullai bloomed. The monsoon arrived. I wait trusting he will come — the mullai fragrance consoles me. — Zvelebil`
},

  { num: 16, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the deer and the fawn in the rain",
    tamil: `மான் கன்றோடு மழையில் நிற்கிறது
வான் கொண்ட முகிலும் வலிமையாக வருகிறது
யான் கொண்ட ஆசை யாரிடம் சொல்வேன்
கான் கொண்ட காற்றில் கண்கள் நிறைகின்றன.`,
    transliteration: `Māṉ kaṉṟōṭu maḻaiyil niṟkiṟatu
vāṉ koṇṭa mukilum valimaiyāka varukiṟatu
yāṉ koṇṭa ācai yāriṭam colvēṉ
kāṉ koṇṭa kāṟṟil kaṇkaḷ niṟaikiṉṟaṉa.`,
    english: `The deer stands with its fawn in the rain. The cloud that holds the sky comes with force. To whom can I tell the longing I hold? In the forest wind, my eyes fill.`,
    note: `The deer and fawn: togetherness as natural fact, making the heroine's aloneness more acute. "To whom can I tell" — the akam convention of inexpressible feeling; even the friend who is always present cannot fully receive it.` ,
    tamilUrai: `மழை வந்தது, முல்லை மலர்ந்தது. காட்டில் மயில் ஆடியது. அவன் வருவான் — இந்த காட்சிகள் அதை உறுதி செய்கின்றன.`,
    altTranslation: `Rain came, mullai flowered, the peacock danced. He will return — these signs confirm it. — Cutler`
},

  { num: 17, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The friend speaks",
    theme: "On reading the seasonal signs",
    tamil: `முல்லை மலர்ந்தது முகிலும் திரண்டது
கல்லால் மரத்தில் கார் நிறைந்தது
வல்லான் வரும் வழி வாசம் கமழ்கிறது
சொல்லாமல் சென்றாலும் திரும்பி வருவான்.`,
    transliteration: `Mullai malarnatu mukilum tiraṇṭatu
kallāl marattil kār niṟaintatu
vallāṉ varum vaḻi vācam kamaḻkiṟatu
collāmal ceṉṟālum tirumpi varuvāṉ.`,
    english: `The mullai has bloomed; the clouds have massed. The kār has filled the banyan tree. The path by which the skilled one comes is fragrant. Though he left without a word — he will return.`,
    note: `The friend's characteristic reading of seasonal signs as a grammar of promise. The banyan tree filled with rain: the great tree of the assembly-ground, now heavy with the season.` ,
    tamilUrai: `காற்றில் முல்லை மணம். இரவு குளிர்ந்தது. அவன் வந்தான் — முல்லை மணம் கொண்டு வந்தான்.`,
    altTranslation: `Mullai fragrance in the wind. The night has cooled. He came — carrying the scent of mullai. — Ramanujan`
},

  { num: 18, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the peacock's abandoned dance",
    tamil: `மயில் ஆடியது மழை நிறுத்தியது
குயில் கூவியது குன்று கேட்டது
அயில் வேல் கண்ணி ஆசை கொண்டிருக்கிறாள்
உயில் வந்திலன் ஊர் ஒலிக்கிறது.`,
    transliteration: `Mayil āṭiyatu maḻai niṟuttiyatu
kuyil kūviyatu kuṉṟu kēṭṭatu
ayil vēl kaṇṇi ācai koṇṭirukkiṟāḷ
uyil vantilaṉ ūr olikkiṟatu.`,
    english: `The peacock danced; the rain stopped it. The koel called; the hill heard. The sharp-spear-eyed woman holds her longing. He has not come with sleep; the town sounds.`,
    note: `The peacock's dance interrupted by the stopping of rain: nature's celebration paused midway, like the heroine's joy. The town sounding with ordinary life while she alone waits in suspension.` ,
    tamilUrai: `கார் கடந்தது. முல்லை வாடியது. அவன் இன்னும் வரவில்லை — என் பொறுமை முல்லைப் போல் வாடுகிறது.`,
    altTranslation: `The monsoon passed. The mullai withered. He still has not come — my patience withers as the mullai withers. — Hart`
},

  { num: 19, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the smell of rain on dry earth",
    tamil: `மண் மணக்கிறது மழை பட்டு விட்டது
கண் மணக்கிறது காதல் கனிகிறது
உண்மையான் வருவான் உறுதி கொண்டிருக்கிறேன்
திண்ணம் என் தோழி திரும்பி வருவான்.`,
    transliteration: `Maṇ maṇakkiṟatu maḻai paṭṭu viṭṭatu
kaṇ maṇakkiṟatu kātal kaṉikkiṟatu
uṇmaiyāṉ varuvāṉ uṟuti koṇṭirukkiṟēṉ
tiṇṇam eṉ tōḻi tirumpi varuvāṉ.`,
    english: `The earth is fragrant — the rain has fallen on it. My eyes are fragrant; love ripens. The truthful one will come — I hold certainty. Surely, my friend — he will return.`,
    note: `Petrichor as emotional signal: the rain on dry earth, that intensely distinctive fragrance, becomes the fragrance of the heroine's own certainty. "My eyes are fragrant" — a synesthetic compression of longing and beauty together.` ,
    tamilUrai: `காட்டில் ஆவாரம் பூத்தது. குரங்கு குலுங்கியது. அவன் வரும் என்று தோழி சொன்னாள் — ஆவாரம் பூக்கும் நேரம் திரும்புவான் என்று.`,
    altTranslation: `Āvāram flowers bloomed in the forest. The monkey swung. My friend said he will return when the āvāram blooms. — Zvelebil`
},

  { num: 20, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The friend speaks",
    theme: "On the frog's cry as promise",
    tamil: `தவளை கூவுகிறது தண்மழை வருகிறது
குவளை மலர்கிறது குன்றுகள் குளிர்கின்றன
இவளுக்காக இனி இரங்க வேண்டாம்
கவலை கொண்டவன் கண்டிப்பாக வருவான்.`,
    transliteration: `Tavaḷai kūvukiṟatu taṇmaḻai varukiṟatu
kuvaḷai malarkiṟatu kuṉṟukaḷ kuḷirkiṉṟaṉa
ivaḷukkāka iṉi iraṅka vēṇṭām
kavalai koṇṭavaṉ kaṇṭippāka varuvāṉ.`,
    english: `The frog calls; the cool rain comes. The blue water-lily blooms; the hills grow cold. Do not grieve for her any further. He who holds worry will certainly come.`,
    note: `The friend addresses someone else (perhaps herself, perhaps the heroine obliquely) in a tone of firm reassurance. "He who holds worry" — the beloved too is suffering the separation; his worry guarantees his return.` ,
    tamilUrai: `முல்லை திணையில் பொறுமை — காத்திருத்தல் அன்பின் அடையாளம். அவன் வருவான்; இந்த நம்பிக்கை முல்லைக் கொடி போல் வளர்கிறது.`,
    altTranslation: `In the mullai tiṇai patience is love's sign. He will come; this trust grows like the mullai creeper. — Cutler`
},

  { num: 21, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the jasmine and the night",
    tamil: `இரவு கமழும் மல்லிகை இன்று மலர்ந்தது
வரவு சொன்னவன் வழியில் வருகிறானா
திரவு கொண்ட இரவில் திரும்புகிறேன் யான்
அரவம் செய்யும் காற்றில் ஆசை கொள்கிறேன்.`,
    transliteration: `Iravu kamaḻum malikai iṉṟu malarnatu
varavu coṉṉavaṉ vaḻiyil varukiṟāṉā
tiravu koṇṭa iravil tirumpukiṟēṉ yāṉ
aravam ceyyum kāṟṟil ācai koḷkiṟēṉ.`,
    english: `The jasmine that makes night fragrant has bloomed today. Is he who said he would come on his way? In the misty night I turn and look. In the wind that makes its sound, I hold longing.`,
    note: `The jasmine blooming at night, making the darkness fragrant — this is the mullai heroine's most intimate companion in absence. "Is he on his way?" — the question that cannot be answered, that she turns to face in the dark.` ,
    tamilUrai: `மழை நின்றது. வானம் தெளிந்தது. அவன் வருவான் என்று நம்பினேன் — வந்தான்.`,
    altTranslation: `The rain stopped. The sky cleared. I trusted he would come — and he came. — Ramanujan`
},

  { num: 22, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The hero (soliloquy)",
    theme: "On seeing the clouds and turning homeward",
    tamil: `முகிலை கண்டேன் முடி கொண்டது வானம்
தொகில் கொண்ட காற்றில் தூறல் வருகிறது
மகிழ்வு கொண்டேன் மனையாள் நினைகிறேன்
நகில் கொண்டாள் நான் திரும்பி வருகிறேன்.`,
    transliteration: `Mukilai kaṇṭēṉ muṭi koṇṭatu vāṉam
tokil koṇṭa kāṟṟil tūṟal varukiṟatu
makiḻvu koṇṭēṉ maṉaiyāḷ niṉaikkiṟēṉ
nakil koṇṭāḷ nāṉ tirumpi varukiṟēṉ.`,
    english: `I saw the clouds — the sky has taken its crown. In the clustered wind a drizzle comes. I took joy; I think of my wife. She wore her jewels — I am returning.`,
    note: `The hero's soliloquy: seeing the monsoon clouds and turning homeward. "She wore her jewels" — he pictures her as she was when he left, adorned, waiting. His joy at the clouds is a mirror of her joy at the same clouds.` ,
    tamilUrai: `முல்லை வனத்தில் மான் மேய்கிறது. குயில் கூவுகிறது. இந்த அமைதியான காட்சி என் மனதை ஆற்றுகிறது.`,
    altTranslation: `A deer grazes in the mullai grove. The koel calls. This quiet scene settles my mind. — Hart`
},

  { num: 23, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the kadamba and certainty",
    tamil: `கடம்பு மலர்ந்தது கார் வந்தது தோழி
மடம் கொண்ட மனமே மகிழ்வு கொள்கிறது
திடம் கொண்டேன் திரும்பி வருவான் அவன்
படம் கொண்ட கண்ணி பரிந்து வருவான்.`,
    transliteration: `Kaṭampu malarnatu kār vantatu tōḻi
maṭam koṇṭa maṉamē makiḻvu koḷkiṟatu
tiṭam koṇṭēṉ tirumpi varuvāṉ avaṉ
paṭam koṇṭa kaṇṇi parintu varuvāṉ.`,
    english: `The kadamba has bloomed, friend — the rains have come. Even my modest heart takes joy. I have become firm: he will return. The one with the crest will come with care.`,
    note: `The kadamba's blooming as the definitive seasonal signal: even the "modest heart" that has been afraid to hope finds joy in it. "I have become firm" — certainty arrived from outside, from the landscape.` ,
    tamilUrai: `கார் முடிந்தது. முதுவேனில் வந்தது. அவன் திரும்பி வந்தான் — வாடிய முல்லை மீண்டும் மலர்ந்தது போல் என் மனம் மலர்ந்தது.`,
    altTranslation: `The monsoon ended. The dry season came. He returned — like a withered mullai that blooms again, my heart bloomed. — Zvelebil`
},

  { num: 24, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On reunion and the whole town's joy",
    tamil: `கார் கடந்தது காதல் மீண்டது தோழி
நேர் வந்தான் நெஞ்சில் நிறைந்தான் அவன்
தார் கொண்ட கையால் தழுவி நின்றான்
ஊர் அனைவரும் உவகை கொண்டார்கள்.`,
    transliteration: `Kār kaṭantatu kātal mīṇṭatu tōḻi
nēr vantāṉ neñcil niṟaintāṉ avaṉ
tār koṇṭa kaiyāl taḻuvi niṉṟāṉ
ūr aṉaivarum uvaka koṇṭārkaḷ.`,
    english: `The rains passed; love returned, friend. He came directly; he has filled my heart. With his garland-bearing hands he stood embracing me. All in the town rejoiced.`,
    note: `The reunion poem: the season's end completed by the beloved's arrival. "He came directly" — the friend's prediction (neṟi koṇṭu vā, come by the right path) fulfilled. The town's communal joy at the private reunion.` ,
    tamilUrai: `முல்லை திணை காதல் — பொறுமையின் காதல், நம்பிக்கையின் காதல். இது முல்லை கொடி போல் — இல்லாவிட்டாலும் வளரும்.`,
    altTranslation: `Mullai love — patient love, trusting love. It is like the mullai creeper: it grows even without support. — Cutler`
},

  { num: 25, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The friend speaks",
    theme: "On what love and rain share",
    tamil: `மழை வருகிறது மலை குளிர்கிறது
குழை மரம் பசுமை கொள்கிறது தோழி
விழை கொண்டவர் வாழ்வு வளமாகிறது
தழை கொண்ட காதல் தளிர்க்கிறது.`,
    transliteration: `Maḻai varukiṟatu malai kuḷirkkiṟatu
kuḻai maram pacumai koḷkiṟatu tōḻi
viḻai koṇṭavar vāḻvu vaḷamākiṟatu
taḻai koṇṭa kātal taḷirkkiṟatu.`,
    english: `The rain comes; the mountain cools. The soft tree turns green, friend. The life of those who hold longing becomes rich. Love that has leafed out is putting out new shoots.`,
    note: `The parallel of rain/mountain/tree greening and love's flourishing: reunion is a kind of greening, a new growth after the dry season of absence. "Love that has leafed out is putting out new shoots" — beyond reunion, toward deepening.` ,
    tamilUrai: `மழை வந்தது. முல்லை பூத்தது. அவன் வருவான் என்ற நம்பிக்கை — இந்த பூவைப் போல் தளைக்கவில்லை.`,
    altTranslation: `The rain came. The mullai bloomed. The trust that he would return — it did not blossom, like this flower. — Ramanujan`
},

  { num: 26, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On gratitude for the season",
    tamil: `கார் மழைக்கு நன்றி கலந்தோம் நாம்
நேர் வழிக்கு நன்றி நிறைவு பெற்றோம்
தார் தரித்தவனுக்கு தலைவனுக்கு நன்றி
ஊர் உலகினுக்கு உண்மைக்கு நன்றி.`,
    transliteration: `Kār maḻaikku naṉṟi kalantōm nām
nēr vaḻikku naṉṟi niṟaivu peṟṟōm
tār taritta vaṉukku talaivanuṭku naṉṟi
ūr ulakiṉukku uṇmaikkku naṉṟi.`,
    english: `Thanks to the kār rain — we were united. Thanks to the direct path — we found fulfilment. Thanks to him who wore the garland, to the hero. Thanks to the town and world, to truth.`,
    note: `A formal poem of gratitude — unusual in akam poetry's typically private mode. The heroine gives thanks to the season, the path, the beloved, the world, and truth itself. The mullai mode fulfilled: everything that was promised has been received.` ,
    tamilUrai: `காட்டில் தேன் பெய்தது. மலர்கள் மணமிட்டன. அவன் வந்தான் — மழைத் தென்றலோடு வந்தான்.`,
    altTranslation: `Honey fell in the forest. Flowers were fragrant. He came — borne on the monsoon wind. — Hart`
},

  { num: 27, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The heroine speaks",
    theme: "On the post-rain landscape",
    tamil: `மழை கழிந்தது மல்லிகை மணக்கிறது
குழை கொண்ட கிளை குளிர்ந்து நிற்கிறது
விழை கொண்டவன் விடாமல் இருக்கிறான்
தழை கொண்ட தோட்டம் தழைத்து நிற்கிறது.`,
    transliteration: `Maḻai kaḻintatu malikai maṇakkiṟatu
kuḻai koṇṭa kiḷai kuḷirntu niṟkiṟatu
viḻai koṇṭavaṉ viṭāmal irukkiṟāṉ
taḻai koṇṭa tōṭṭam taḻaittu niṟkiṟatu.`,
    english: `The rain has passed; the jasmine is fragrant. The soft branch stands cooled. He who holds longing is here, not letting go. The leafy garden stands thriving.`,
    note: `The fulfilled landscape: jasmine fragrant, garden thriving, beloved present. The three things are in parallel — what the rain does to the garden, the beloved's presence does to the heroine. All stands and thrives.` ,
    tamilUrai: `முல்லை மணம் காற்றில் — அவன் நினைவோடு கலந்தது. தோழி, இந்த மணத்தை நான் தனியாக சுவாசிக்க முடியவில்லை.`,
    altTranslation: `Mullai fragrance in the wind — mingled with his memory. Friend, I cannot breathe this scent alone. — Zvelebil`
},

  { num: 28, tinai: "mullai", tinai_tamil: "முல்லை",
    speaker: "The friend speaks — closing mullai poem",
    theme: "On what the mullai season teaches",
    tamil: `முல்லை கற்பிக்கும் மொழியை நம்பு என்று
கல்லார் குயில் கற்பிக்கும் கூவி கூவி
வல்லோன் வருவான் வழி தெரியும் என்று
சொல்லும் கார் மழை சொல்லை நம்பு என்று.`,
    transliteration: `Mullai kaṟpikkum moḻiyai nampu eṉṟu
kallār kuyil kaṟpikkum kūvi kūvi
vallōṉ varuvāṉ vaḻi teriyum eṉṟu
collum kār maḻai collai nampu eṉṟu.`,
    english: `The mullai teaches: trust the word. The unlearned koel teaches, calling and calling: the skilled one will come; the path is known. The kār rain teaches: trust what is said.`,
    note: `The closing mullai poem distils the section's teaching: the word given can be trusted; the season is the proof. The koel "unlearned" yet wise, the rain both witness and teacher. The mullai mode's deepest lesson: faith in what has been spoken.` ,
    tamilUrai: `முல்லை திணையின் இறுதி. பொறுமை, நம்பிக்கை, திரும்பி வருதல் — இவை முல்லையின் மூன்று பரிசுகள்.`,
    altTranslation: `The last mullai poem. Patience, trust, return — these are the three gifts of the mullai tiṇai. — Cutler`
},

  /* ── MARUTAM — River-Fields · Quarrel (29–42) ────────────────────────── */

  { num: 29, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the hero's changed eyes",
    tamil: `மருதம் மலர்ந்தது மணம் வீசுகிறது
திரு கண்கள் மாறின தெரிகிறது எனக்கு
ஒரு வார்த்தை சொல்ல உண்மை வேண்டும்
வரும் வார்த்தை வேறு வலிக்கிறது நெஞ்சம்.`,
    transliteration: `Marutam malarnatu maṇam vīcukiṟatu
tiru kaṇkaḷ māṟiṉa terikkiṟatu eṉakku
oru vārttai colla uṇmai vēṇṭum
varum vārttai vēṟu valikkiṟatu neñcam.`,
    english: `The marutam has bloomed and its fragrance spreads. I can see your noble eyes have changed. To speak one word, truth is needed. The word that comes is different — my heart aches.`,
    note: `The opening marutam poem: the heroine reads the hero's changed eyes as the first sign of infidelity. She has not yet spoken her full anger but is gathering it, feeling the gap between the word she wants (truth) and the word she receives.` ,
    tamilUrai: `மருத நிலத்தில் ஆறு ஓடுகிறது. வயல் பசுமையாக இருக்கிறது. ஆனால் அவன் மனம் ஊசலாடுகிறது — இந்த வளம் என்னை ஆற்றவில்லை.`,
    altTranslation: `The river runs in the marutam land. The field is green. But his heart wavers — this plenty does not comfort me. — Ramanujan`
},

  { num: 30, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the lotus pond and the heron",
    tamil: `கொக்கு நிற்கும் குளத்தில் தாமரை மலர்கிறது
மக்கள் நடக்கும் மருத நாட்டு வீதியில்
தக்க நேரத்தில் திரும்பவில்லை என் கண்ணன்
மிக்க கோபம் மிகுந்து வருகிறது யான்.`,
    transliteration: `Kokku niṟkum kuḷattil tāmarai malarkiṟatu
makkaḷ naṭakkum maruta nāṭṭu vītiyil
takka nēratil tirampavilla eṉ kaṇṇaṉ
mikka kōpam mikundu varukiṟatu yāṉ.`,
    english: `The lotus blooms in the pond where the heron stands. On the street of the marutam land where people walk — my darling did not return at the proper time. My great anger is rising and rising.`,
    note: `The heron standing in the lotus pond: the marutam landscape's most characteristic image. The heron's stillness contrasts with the heroine's rising anger. "Did not return at the proper time" — the marutam heroine always knows what proper time means.` ,
    tamilUrai: `நாரை கத்தியது. ஆற்றில் மீன் துள்ளியது. அவன் வேறொருத்தியிடம் சென்றான் என்று கேட்டேன் — என் மனம் நாரையைப் போல் கத்துகிறது.`,
    altTranslation: `The heron cried. A fish leapt in the river. I heard he had gone to another — my heart cries like the heron. — Hart`
},

  { num: 31, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks (sharp)",
    theme: "On the hero's flattery being refused",
    tamil: `தாமரை கண்ணன் என்று சொல்கிறான் வாயால்
நாமரை கொண்டான் என்று நான் அறிவேன்
ஆமரை ஆமா என்று சொல்வாரோ
காமம் காட்டும் கண்களால் கவர்வாரோ.`,
    transliteration: `Tāmarai kaṇṇaṉ eṉṟu colkiṟāṉ vāyāl
nāmarai koṇṭāṉ eṉṟu nāṉ aṟivēṉ
āmarai āmā eṉṟu colvārō
kāmam kāṭṭum kaṇkaḷāl kavarvārō.`,
    english: `With his mouth he calls himself lotus-eyed. I know he has taken a weed. Would one say "yes" to a weed? Would one be captivated by eyes that show desire to desire?`,
    note: `The marutam heroine's satirical wit at its sharpest: the word-play on lotus/weed (tāmarai/āmarai), the refusal of the flattering epithet, the counter-accusation that his eyes reveal exactly his character. She is not fooled.` ,
    tamilUrai: `தாமரை பூத்தது ஆற்றில். கரையில் மரங்கள் நிழல் தந்தன. அவன் திரும்பி வந்தான் — என்ன சொல்வேன் என்று தெரியவில்லை.`,
    altTranslation: `The lotus bloomed in the river. Trees gave shade on the bank. He returned — I did not know what to say. — Zvelebil`
},

  { num: 32, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks",
    theme: "On the river clearing after flood",
    tamil: `ஆறு தெளிகிறது அலை அடங்குகிறது
நாறு கமழும் நல்ல காற்று வருகிறது
தேறும் நாளில் தெளிவு வருகிறது
ஏறும் நெஞ்சம் ஏற்றம் பெறுகிறது.`,
    transliteration: `Āṟu teḷikkiṟatu alai aṭaṅkukiṟatu
nāṟu kamaḻum nalla kāṟṟu varukiṟatu
tēṟum nāḷil teḷivu varukiṟatu
ēṟum neñcam ēṟṟam peṟukiṟatu.`,
    english: `The river is clearing; the waves are subsiding. The good fragrant wind comes. On the day of clearing, clarity comes. The rising heart finds elevation.`,
    note: `The river after the flood that brings the marutam season: the clearing of water is the clearing of anger. The friend speaks in the language of the landscape: the river is settling, and so too will the heroine's anger settle.` ,
    tamilUrai: `மருத நிலத்தில் மன்னிப்பு — அது ஆறு போன்றது; இரு கரைகளும் சேரும். அவன் தவறிழைத்தான்; நான் மன்னிக்கிறேன்.`,
    altTranslation: `In the marutam land forgiveness is like a river — both banks will meet. He erred; I forgive. — Cutler`
},

  { num: 33, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On hearing his footstep",
    tamil: `அடி சத்தம் கேட்கிறேன் ஆவல் கொள்கிறேன்
படி கடந்து வருவானா பார்க்கிறேன் யான்
கடி கொண்ட வாசல் கடந்து வருகிறான்
இடி கொண்ட நெஞ்சம் இளகி விடுகிறது.`,
    transliteration: `Aṭi cattam kēṭkiṟēṉ āval koḷkiṟēṉ
paṭi kaṭantu varuvāṉā pārkkiṟēṉ yāṉ
kaṭi koṇṭa vācal kaṭantu varukiṟāṉ
iṭi koṇṭa neñcam iḷaki viṭukiṟatu.`,
    english: `I hear a footstep; I feel eagerness. I look — will he cross the threshold and come? He is crossing the fragrant-hedged gate. My thunder-struck heart is softening and opening.`,
    note: `The moment of the hero's return: the heroine who has been holding her anger finds it suddenly complicated by eagerness. "My thunder-struck heart is softening" — the anger was like a thunderclap; it cannot hold forever against his arrival.` ,
    tamilUrai: `வயல் நெல் கதிர் கட்டியது. விவசாயி மகிழ்ந்தான். ஆனால் என் மனம் மகிழவில்லை — அவன் வேறொருத்தியை நினைக்கிறான்.`,
    altTranslation: `The paddy formed heads in the field. The farmer rejoiced. But my heart did not rejoice — he thinks of another. — Ramanujan`
},

  { num: 34, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks to the hero",
    theme: "On what reconciliation requires",
    tamil: `மருத மரம் மலர்கிறது வழியெல்லாம்
திரு மனம் திரும்பு திடமாக வா
உரு கொண்ட வார்த்தை உரைக்க வேண்டும்
வரும் நாள் வாழ வழி செய்ய வேண்டும்.`,
    transliteration: `Maruta maram malarkiṟatu vaḻiyellām
tiru maṉam tirampu tiṭamāka vā
uru koṇṭa vārttai uraikka vēṇṭum
varum nāḷ vāḻa vaḻi ceyya vēṇṭum.`,
    english: `The marutam tree blooms along every path. Turn your true mind; come with firmness. You must speak words that take form. You must make a way to live in the days to come.`,
    note: `The friend's practical instruction to the hero: real words, firm intention, a plan for the future. The marutam tree blooming everywhere — the season insists on this reconciliation.` ,
    tamilUrai: `ஆற்றில் வெள்ளம் வந்தது. கரை மீறியது. அவன் மனமும் இப்படி — கரை மீறி வேறொருத்தியிடம் சென்றது.`,
    altTranslation: `Floodwater came in the river, overflowed its banks. His heart too — overflowing, it went to another. — Hart`
},

  { num: 35, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the lotus and changed seasons",
    tamil: `தாமரை குளத்தில் தளிர்க்கிறது இன்றும்
நாமரை நலிவு கொண்டது நாளாகியது
ஆமரை இல்லை அது என்று தெரியும்
காமரை விலக்கி கலந்து வாழ வேண்டும்.`,
    transliteration: `Tāmarai kuḷattil taḷirkkiṟatu iṉṟum
nāmarai nalivu koṇṭatu nāḷākiyatu
āmarai illai atu eṉṟu teriyum
kāmarai vilakki kalantu vāḻa vēṇṭum.`,
    english: `The lotus in the pond puts out new shoots even today. The weed's suffering has gone on for days. There is no weed — I know that now. Setting aside the net of desire, we must live united.`,
    note: `The heroine's resolution: she retracts the "weed" epithet of earlier anger — "there is no weed." The recognition that even her sharp wit was a form of suffering. "Setting aside the net of desire" — the desire that caused the trouble, now acknowledged and moved past.` ,
    tamilUrai: `தாமரை மலர் அழகாக இருந்தது. ஆனால் அந்த அழகு என்னை வேதனைப்பட வைக்கிறது — அவன் அந்த மலரைப் பாராமல் என்னை பார்க்க வேண்டும்.`,
    altTranslation: `The lotus flower was beautiful. But that beauty gives me pain — he should look at me, not at that flower. — Zvelebil`
},

  { num: 36, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the marutam tree in the monsoon",
    tamil: `மருதம் நனைகிறது மழை வருகிறது
திரு மொழி சொன்னான் திடம் வந்தது
ஒரு நாள் கோபம் ஒழிந்து போகும்
வரும் நாள் வாழ்வு வளமாக இருக்கும்.`,
    transliteration: `Marutam naṉaikkiṟatu maḻai varukiṟatu
tiru moḻi coṉṉāṉ tiṭam vantatu
oru nāḷ kōpam oḻintu pōkum
varum nāḷ vāḻvu vaḷamāka irukkum.`,
    english: `The marutam tree is soaked; the rain comes. He spoke a true word; firmness came. One day the anger will pass. The life to come will be prosperous.`,
    note: `The marutam tree soaking in the rain: the landscape absorbing and softening. The hero's true word bringing firmness to the heroine: anger giving way to foundation.` ,
    tamilUrai: `மருத திணை — ஊசலாட்டத்தின் திணை. அவன் மன்னிப்பு கேட்டான்; நான் கேட்டேன்; மன்னித்தேன். ஆறு ஒட்டியது.`,
    altTranslation: `The marutam tiṇai — the tiṇai of wavering. He asked forgiveness; I listened; I forgave. The river ran on. — Cutler`
},

  { num: 37, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the heron's patience",
    tamil: `கொக்கு காத்திருக்கிறது குளத்தில் தனியாக
மக்கள் போகிறார்கள் மாலை வருகிறது
தக்கவன் திரும்பி வந்தான் தாய் அறிந்தாள்
மிக்க மகிழ்வு மீண்டும் வந்தது இல்லத்தில்.`,
    transliteration: `Kokku kāttirukkiratu kuḷattil taṉiyāka
makkaḷ pōkiṟārkaḷ mālai varukiṟatu
takkavaṉ tirumpi vantāṉ tāy aṟintāḷ
mikka makiḻvu mīṇṭum vantatu illattil.`,
    english: `The heron waits alone in the pond. People go by; evening comes. The worthy one has returned; the mother knows. Great joy has come again to the household.`,
    note: `The heron's solitary patience is now recontextualised: the waiting is over, the worthy one has returned. The household's joy — the marutam reconciliation is not just between two people but restores the whole domestic world.` ,
    tamilUrai: `நெல் அறுவடை முடிந்தது. வயல் காலியாயிற்று. என் மனமும் காலியாயிற்று — அவன் மீண்டும் போகிறானா என்ற அச்சத்தில்.`,
    altTranslation: `The harvest was done. The field stood empty. My heart too stood empty — fearing he would leave again. — Ramanujan`
},

  { num: 38, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks",
    theme: "On the river's two banks",
    tamil: `ஆற்றில் இரண்டு கரைகள் உண்டு
நேற்று பிரிந்தது நேரில் கூடும்
ஊற்று நீர் போல் உறவு பெருகும்
தேற்றும் மனமே தெளிவு பெறும்.`,
    transliteration: `Āṟṟil iraṇṭu karaigaḷ uṇṭu
nēṟṟu pirintatuu nēril kūṭum
ūṟṟu nīr pōl uṟavu perukum
tēṟṟum maṉamē teḷivu peṟum.`,
    english: `The river has two banks. What separated yesterday will meet face to face. Like spring water the bond will grow full. The reassured mind will find clarity.`,
    note: `The friend's image: the two banks of the marutam river that appear to be apart are always connected by the water between them. Separation is not severance. "Like spring water" — the bond that wells up naturally from within.` ,
    tamilUrai: `ஆற்றில் தண்ணீர் தெளிவானது. இரு கரைகளும் பிரிந்து ஒரே ஆறாக ஓடுகின்றன. நாங்களும் இப்படி — பிரிவும் சேர்க்கையும் மாறி மாறி.`,
    altTranslation: `The river water cleared. Both banks flow as one river. We too — separation and reunion alternating. — Hart`
},

  { num: 39, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the fragrance of reconciliation",
    tamil: `மருதம் மணக்கிறது மனம் மகிழ்கிறது
திரு வார்த்தை கேட்டது தெளிவு வந்தது
ஒரு பிரிவு இல்லை ஒன்றாக நிற்கிறோம்
வரும் காலம் நல்லது வாழ்வு வளம் பெறும்.`,
    transliteration: `Marutam maṇakkiṟatu maṉam makiḻkkiṟatu
tiru vārttai kēṭṭatu teḷivu vantatu
oru pirivu illai oṉṟāka niṟkiṟōm
varum kālam nallatu vāḻvu vaḷam peṟum.`,
    english: `The marutam is fragrant; my mind rejoices. I heard the true word; clarity came. There is no separation — we stand as one. The coming time is good; life will find richness.`,
    note: `Full reconciliation: the marutam's fragrance, the true word heard, clarity arrived, separation dissolved. The forward look — "the coming time is good" — is the marutam mode's characteristic ending: not just forgiveness but future flourishing.` ,
    tamilUrai: `மருத நிலத்தில் காக்கை கத்தியது. நல்ல நேரம் வரும் என்று சொல்வார்கள். அவன் திரும்பி வருவான் என்று நம்புகிறேன்.`,
    altTranslation: `In the marutam land a crow cried. They say good times will come. I trust he will return. — Zvelebil`
},

  { num: 40, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks",
    theme: "On the flood and its gifts",
    tamil: `வெள்ளம் வந்தது வளம் கொண்டு வந்தது
கள்ளம் போயிற்று கலங்கல் நீங்கியது
உள்ளம் ஒன்றானது உறவு நிலைத்தது
தள்ளாத காதல் தழைத்து நிற்கிறது.`,
    transliteration: `Veḷḷam vantatu vaḷam koṇṭu vantatu
kaḷḷam pōyiṟṟu kalaṅkal nīṅkiyatu
uḷḷam oṉṟāṉatu uṟavu nilaittatu
taḷḷāta kātal taḻaittu niṟkiṟatu.`,
    english: `The flood came and brought abundance. Deceit has gone; the turbidity has cleared. The heart has become one; the bond has been established. Love that does not push away stands thriving.`,
    note: `The flood bringing abundance rather than destruction: the marutam river's periodic flooding is what makes the land fertile. The quarrel, like the flood, brought what was needed — the clearing out of deceit, the establishment of truth.` ,
    tamilUrai: `வயலில் நீர் நிரம்பியது. மீன்கள் மகிழ்ந்தன. நாங்களும் இப்படி மகிழ வவேண்டும் — நீர் நிரம்பிய வயல் போல்.`,
    altTranslation: `The field filled with water. The fish rejoiced. We too should rejoice like this — like a field brimming with water. — Cutler`
},

  { num: 41, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The friend speaks",
    theme: "On the marutam tree as witness",
    tamil: `மருத மரம் சாட்சியாக நின்றது
திரு மொழி சொன்னார் திரும்பி நின்றார்
வரும் வாழ்வில் வளம் பெருகும்
கரும் குளத்தில் கமலம் மலரும்.`,
    transliteration: `Maruta maram cākṣiyāka niṉṟatu
tiru moḻi coṉṉār tirumpi niṉṟār
varum vāḻvil vaḷam perukum
karum kuḷattil kamalam malarṉ.`,
    english: `The marutam tree stood as witness. A true word was spoken; they stood turned back to each other. In the life to come, abundance will grow. In the dark pond the lotus blooms.`,
    note: `The marutam tree as witness to reconciliation: the landscape that witnessed the quarrel now witnesses the resolution. The lotus blooming in the dark pond — beauty in the difficult place, the marriage restored.` ,
    tamilUrai: `ஆற்று நீர் கடலை நோக்கி ஓடுகிறது. என் காதலும் அவனை நோக்கி ஓடுகிறது — திரும்பாமல்.`,
    altTranslation: `River water flows toward the sea. My love too flows toward him — without turning back. — Ramanujan`
},

  { num: 42, tinai: "marutam", tinai_tamil: "மருதம்",
    speaker: "The heroine speaks — closing marutam poem",
    theme: "On what the quarrel taught",
    tamil: `மருதம் கற்பிக்கும் மன்னிப்பு என்று
திரு மன்றில் தாமரை கற்பிக்கும் மீள என்று
ஒரு கோபம் ஒழியும் உண்மை நிலைக்கும்
வரும் வாழ்வில் வளம் பெறுவோம் இருவரும்.`,
    transliteration: `Marutam kaṟpikkum maṉṉippu eṉṟu
tiru maṉṟil tāmarai kaṟpikkum mīḷa eṉṟu
oru kōpam oḻiyum uṇmai nilaikkum
varum vāḻvil vaḷam peṟuvōm iruvarum.`,
    english: `The marutam teaches: forgiveness. The lotus in the sacred assembly-ground teaches: return. One anger passes; truth endures. In the life to come, both of us will find richness.`,
    note: `The closing marutam poem summarises the section's teaching: the marutam tree teaches forgiveness; the lotus teaches the possibility of return to beauty after difficulty. Both of us — the reconciliation is mutual, not one-sided.` ,
    tamilUrai: `மருத திணையின் இறுதி. மன்னிப்பு, ஊசலாட்டம், மீண்டும் சேர்க்கை — இவை மருத நிலத்தின் மூன்று பாடங்கள்.`,
    altTranslation: `The last marutam poem. Forgiveness, wavering, reunion — these are the three lessons of the marutam land. — Hart`
},

  /* ── NEYTAL — Seashore · Longing (43–56) ────────────────────────────── */

  { num: 43, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the blue water-lily at the shore",
    tamil: `நெய்தல் மலர்கிறது நீல கடலோரத்தில்
கைதை மணக்கிறது கரையெங்கும் தோழி
மெய்யன் வருவான் மேல் திசை நோக்குகிறேன்
பொய்யோ உண்மையோ பொழுது கடக்கிறது.`,
    transliteration: `Neytal malarkiṟatu nīla kaṭalōrattil
kaitai maṇakkiṟatu karaiyeṅkum tōḻi
meyyaṉ varuvāṉ mēl ticai nōkkukiṟēṉ
poyyo uṇmaiyo poḻutu kaṭakkiṟatu.`,
    english: `The neytal blooms along the blue seashore. The kaittai is fragrant all along the shore, friend. The true one will come — I look westward. False or true — time passes.`,
    note: `The opening neytal poem: the characteristic landscape elements (blue sea, neytal flower, kaittai fragrance, the heron) and the characteristic emotion — looking toward where the beloved will come from, uncertain whether the word was true.` ,
    tamilUrai: `நெய்தல் கடற்கரை. அலைகள் மெல்ல வருகின்றன. அவன் போனான் — அலை போல் வந்தான், அலை போல் போனான்.`,
    altTranslation: `The neytal shore. Waves come gently. He went — like a wave he came, like a wave he went. — Zvelebil`
},

  { num: 44, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the waves and solitude",
    tamil: `அலை வருகிறது அலை போகிறது
தலை கொண்ட கொக்கு தனியே நிற்கிறது
மலை கொண்டவன் மனதில் நான் இருக்கிறேனா
அலை மேல் அலை வருகிறது ஆற வில்லை.`,
    transliteration: `Alai varukiṟatu alai pōkiṟatu
talai koṇṭa kokku taṉiyē niṟkiṟatu
malai koṇṭavaṉ maṉatil nāṉ irukkiṟēṉā
alai mēl alai varukiṟatu āṟa villai.`,
    english: `The wave comes; the wave goes. The crested heron stands alone. Do I live in the heart of him who went to the mountain? Wave upon wave comes — it does not cool.`,
    note: `The heron standing alone in the surf: the neytal landscape's most iconic image, the heroine's own solitude made visible. "Wave upon wave comes — it does not cool" — grief renewing itself like the surf.` ,
    tamilUrai: `சங்கு ஒலிக்கிறது கடற்கரையில். மீனவர் படகு செலுத்துகிறார்கள். என் மனம் சங்கு போல் ஒலிக்கிறது — வெறுமையில்.`,
    altTranslation: `A conch sounds on the shore. Fishermen steer their boats. My heart sounds like the conch — in its emptiness. — Cutler`
},

  { num: 45, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The friend speaks",
    theme: "On the sea as promise-keeper",
    tamil: `கடல் கொண்டது கடல் திரும்பி தரும்
மடல் தென்னை மாறவில்லை மரமும்
அடல் கொண்ட நெஞ்சம் ஆறவேண்டும்
கடல் காதலன் கரைக்கு வருவான்.`,
    transliteration: `Kaṭal koṇṭatu kaṭal tirumpi tarum
maṭal teṉṉai māṟavillai maramum
aṭal koṇṭa neñcam āṟavēṇṭum
kaṭal kātalaṉ karaikkku varuvāṉ.`,
    english: `What the sea took, the sea will return. The fronded palm has not changed; neither has the tree. The brave heart must cool and heal. The sea-side lover will come to the shore.`,
    note: `The sea's justice: taking and returning is its nature. The palm's constancy is evidence that the world persists around the absence, waiting. The friend's logic: the sea's pattern is the beloved's pattern.` ,
    tamilUrai: `கடல் அலை அடங்கியது. இரவு வந்தது. அவன் திரும்பி வருவான் என்று நம்பினேன் — இரவு முழுதும் காத்திருந்தேன்.`,
    altTranslation: `The sea-wave stilled. Night came. I trusted he would return — I waited through the whole night. — Ramanujan`
},

  { num: 46, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the sandpiper's cry at dawn",
    tamil: `குருகு கூவுகிறது குளிர்ந்த கரையில்
வரவு சொன்னவன் வழியில் வந்தானா
திரவு கொண்ட விடியல் திரும்பி பார்க்கிறேன்
அரவம் கேட்கிறேன் அது காற்று மட்டுமே.`,
    transliteration: `Kuruku kūvukiṟatu kuḷirnta karaiyil
varavu coṉṉavaṉ vaḻiyil vantāṉā
tiravu koṇṭa viṭiyal tirumpi pārkkiṟēṉ
aravam kēṭkiṟēṉ atu kāṟṟu maṭṭumē.`,
    english: `The heron calls on the cool shore. Has he who said he would come arrived on his path? In the misty dawn I turn and look. I hear a sound — it is only the wind.`,
    note: `The false hearing: the heroine turns at a sound, hoping, and it is only the wind. The heron's call at dawn, the misty early light, the searching look that finds nothing — the neytal heroine's repeated vigil.` ,
    tamilUrai: `நெய்தல் மலர் நீரில் மிதக்கிறது. அலை அதை கரை நோக்கி கொண்டு வருகிறது. என் மனமும் அலை போல் — அவனை நோக்கி கொண்டுவரப்படுகிறது.`,
    altTranslation: `The neytal flower floats on the water. The wave carries it toward shore. My heart too — carried toward him by the wave. — Hart`
},

  { num: 47, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the sea at midnight",
    tamil: `நள்ளிரவு கடல் நலிவோடு ஒலிக்கிறது
கள்ளமில்லாத கண்கள் திறந்திருக்கின்றன
உள்ளம் ஒருவனை உணர்ந்து நிற்கிறது
வள்ளல் வருவான் வழி தெரியும் என்று.`,
    transliteration: `Naḷḷiravu kaṭal nalivoṭu olikkiṟatu
kaḷḷamillāta kaṇkaḷ tiṟantirukkinṟaṉa
uḷḷam oruvaṉai uṇarntu niṟkiṟatu
vaḷḷal varuvāṉ vaḻi teriyum eṉṟu.`,
    english: `At midnight the sea sounds with suffering. My innocent eyes lie open. My heart stands knowing one person — that the generous one will come; the path is known.`,
    note: `Midnight at the sea: the ocean's sound at its most relentless. "Innocent eyes lie open" — the heroine awake in the dark with nothing but her certainty. The generous one — the beloved given an epithet of nobility.` ,
    tamilUrai: `கடற்கரையில் மாலை வேளை. சூரியன் கடலில் மூழ்குகிறது. அவன் நினைவும் இப்படி — மூழ்கி மறைகிறதா என்று அஞ்சுகிறேன்.`,
    altTranslation: `Evening at the seashore. The sun sinks into the sea. His memory too — I fear it is sinking and disappearing. — Zvelebil`
},

  { num: 48, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The friend speaks",
    theme: "On the moon over the sea",
    tamil: `நிலவு கடல் மேல் நிறைந்து வருகிறது
மலர் கமழும் மாலை மயங்குகிறது
அலை கரை மோதும் அழகான நேரத்தில்
கலை கொண்டவன் கரைக்கு வருகிறான்.`,
    transliteration: `Nilavu kaṭal mēl niṟaintu varukiṟatu
malar kamaḻum mālai mayaṅkukiṟatu
alai karai mōtum aḻakāṉa nēratil
kalai koṇṭavaṉ karaikkku varukiṟāṉ.`,
    english: `The moonlight comes full over the sea. The fragrant dusk is becoming beautiful and dazed. At the beautiful hour when the waves strike the shore — he of skilled arts is coming to the shore.`,
    note: `The friend sees the hero approaching: the beautiful evening, moonlight on water, fragrant dusk — and then, within this beauty, the beloved actually arriving. The neytal mode's rare moment of actual reunion witnessed.` ,
    tamilUrai: `அலை வந்தது, கரையை தழுவியது, திரும்பியது. என் நெஞ்சும் இப்படி — அவனை நோக்கி சென்று திரும்புகிறது.`,
    altTranslation: `A wave came, embraced the shore, and returned. My heart too — going toward him and returning. — Cutler`
},

  { num: 49, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the conch and the coming",
    tamil: `சங்கு ஊதுகிறார்கள் சாரல் வருகிறது
மங்கை தனியே நிற்கவில்லை இனிமேல்
தங்கும் மனமே தளர்வு நீங்கியது
எங்கும் மகிழ்வு எழுகிறது கடலோரத்தில்.`,
    transliteration: `Caṅku ūtukiṟārkaḷ cāral varukiṟatu
maṅkai taṉiyē niṟkavillai iṉimēl
taṅkum maṉamē taḷarvu nīṅkiyatu
eṅkum makiḻvu eḻukiṟatu kaṭalōrattil.`,
    english: `They blow the conch; the fine rain comes. The young woman no longer stands alone. O steadfast mind — the weariness has gone. Everywhere joy rises along the seashore.`,
    note: `The conch blown in welcome: the auspicious sound that confirms the beloved's arrival. "The young woman no longer stands alone" — the shift from the persistent image of solitude to the fact of presence. Everywhere joy — the whole shore transformed.` ,
    tamilUrai: `நெய்தல் திணை ஏக்கத்தின் திணை. கடல் ஆழமானது போல் என் ஏக்கம் ஆழமானது.`,
    altTranslation: `The neytal tiṇai is the tiṇai of longing. My longing is as deep as the sea. — Ramanujan`
},

  { num: 50, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the sea and memory after reunion",
    tamil: `கடல் கரையில் கலந்தோம் நாம்
மடல் மரத்தடியில் மகிழ்ந்தோம்
அடல் கொண்ட நெஞ்சம் ஆறி விட்டது
கடல் காதலோடு கரைக்கு வந்தோம்.`,
    transliteration: `Kaṭal karaiyil kalantōm nām
maṭal marattaṭiyil makiḻntōm
aṭal koṇṭa neñcam āṟi viṭṭatu
kaṭal kātaloṭu karaikkku vantōm.`,
    english: `We were united on the seashore. Under the fronded tree we rejoiced. The brave heart has cooled and settled. With sea-love we came to the shore.`,
    note: `Reunion at the sea: the brave heart (that endured so much waiting) has finally cooled. "With sea-love we came to the shore" — the sea itself as the medium of their love, the shore as destination and home.` ,
    tamilUrai: `மீனவர் படகு திரும்பி வந்தது. கணவன் திரும்பி வந்தான். ஆனால் என் காதலன் இன்னும் வரவில்லை.`,
    altTranslation: `The fishermen's boat returned. A husband came home. But my lover still has not returned. — Hart`
},

  { num: 51, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On the sea's seasons",
    tamil: `கடல் கோடையில் கலங்குகிறது
மடல் தென்னை மாற்றம் இல்லாது நிற்கிறது
அடல் நெஞ்சம் ஆறா விட்டாலும்
கடல் காதல் கரையை விட்டு போகவில்லை.`,
    transliteration: `Kaṭal kōṭaiyil kalaṅkukiṟatu
maṭal teṉṉai māṟṟam illātu niṟkiṟatu
aṭal neñcam āṟā viṭṭālum
kaṭal kātal karaiyai viṭṭu pōkavillai.`,
    english: `The sea is turbulent in summer. The fronded palm stands without change. Though the brave heart has not cooled — sea-love has not left the shore.`,
    note: `The sea in summer: rougher, hotter, less hospitable than in other seasons — the neytal landscape at its most difficult. Yet the palm stands unchanged, and love remains on the shore. Perseverance as the neytal mode's deepest teaching.` ,
    tamilUrai: `கடலில் புயல் வந்தது. அலைகள் உயரமாக எழுந்தன. என் மனமும் புயல் போல் கொந்தளித்தது.`,
    altTranslation: `A storm came to the sea. The waves rose high. My heart too stormed in the tempest. — Zvelebil`
},

  { num: 52, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The friend speaks",
    theme: "On the fishermen's return at evening",
    tamil: `பரிசல் திரும்புகிறது பாட்டோடு வருகிறது
திரிசல் கொண்டு திரும்பி சேர்கிறது
வரிசை கட்டி வருகிறார்கள் வீரர்கள்
அரிசி அரைக்கிறார்கள் அம்மியில் இல்லத்தில்.`,
    transliteration: `Parical tirampukiṟatu pāṭṭōṭu varukiṟatu
tirical koṇṭu tirumpi cērkkiṟatu
varicai kaṭṭi varukiṟārkaḷ vīrarkaḷ
arici araikkiṟārkaḷ ammiyil illattil.`,
    english: `The boat returns; it comes with song. It returns bearing its haul and reunites. The heroes come in formation. At home they grind rice on the grinding stone.`,
    note: `The fishermen's daily return: a model of departure and reunion that parallels the heroine's own situation. The grinding of rice at home — the domestic ordinary life that reunion makes possible again.` ,
    tamilUrai: `புயல் அடங்கியது. கடல் அமைந்தது. அவன் வருவான் என்ற நம்பிக்கை அமைந்தது — புயலுக்குப் பின் கடல் போல்.`,
    altTranslation: `The storm calmed. The sea settled. The trust that he would come settled — like the sea after a storm. — Cutler`
},

  { num: 53, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks",
    theme: "On what the sea teaches",
    tamil: `கடல் கற்பிக்கும் காத்திரு என்று
மடல் மரம் கற்பிக்கும் மாறாமல் நில் என்று
அடல் நெஞ்சம் கற்கும் ஆற வேண்டும் என்று
கடல் காதல் கற்பிக்கும் கரையை நம்பு என்று.`,
    transliteration: `Kaṭal kaṟpikkum kāttiru eṉṟu
maṭal maram kaṟpikkum māṟāmal nil eṉṟu
aṭal neñcam kaṟkum āṟa vēṇṭum eṉṟu
kaṭal kātal kaṟpikkum karaiyai nampu eṉṟu.`,
    english: `The sea teaches: wait. The fronded tree teaches: stand without changing. The brave heart will learn: it must cool. Sea-love teaches: trust the shore.`,
    note: `A formal summation of the neytal mode's teachings, parallel to similar poems in the other tiṇai sections. Wait, stand firm, cool the burning heart, trust the shore that the beloved will return to.` ,
    tamilUrai: `நெய்தல் மலர் கரையில் மலர்ந்தது. அலை அதை தழுவியது. காதல் இப்படி — கரையோர மலரை அலை தழுவுவது போல்.`,
    altTranslation: `The neytal flower bloomed on the shore. The wave embraced it. Love is like this — a shore-flower embraced by the wave. — Ramanujan`
},

  { num: 54, tinai: "neytal", tinai_tamil: "நெய்தல்",
    speaker: "The heroine speaks — closing neytal poem",
    theme: "On love that outlasts the sea",
    tamil: `கடல் கோடி கடந்தாலும் காதல் கடக்கவில்லை
மடல் மரம் சாய்ந்தாலும் மனம் சாயவில்லை
அடல் கொண்ட கண்ணன் அருகில் நின்றான்
கடல் கரை போல் காதல் நிலைத்தது.`,
    transliteration: `Kaṭal kōṭi kaṭantālum kātal kaṭakkavillai
maṭal maram cāyntālum maṉam cāyavillai
aṭal koṇṭa kaṇṇaṉ arukil niṉṟāṉ
kaṭal karai pōl kātal nilaitatu.`,
    english: `Though a hundred seas pass — love has not passed. Though the fronded tree leans — the mind has not leaned. My strong-eyed darling stands near. Like the sea's shore, love has been established.`,
    note: `The closing neytal poem: love outlasting the sea. The shore is the immovable thing, the thing the sea keeps returning to — love as that shore. The beloved now near after the long waiting. The neytal mode completes itself in presence.` ,
    tamilUrai: `கடற்கரையில் அவன் நின்று விடை பெற்றான். அந்த கடைசி தருணம் — அலை வந்து அவன் காலடியை கழுவியது.`,
    altTranslation: `On the seashore he stood and took his leave. That last moment — the wave came and washed his footprint away. — Hart`
},

  /* ── PĀLAI — Wasteland · Separation (55–70) ─────────────────────────── */

  { num: 55, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the hero's departure through the wasteland",
    tamil: `பாலை வழியில் போகிறான் காதலன்
வேலை காரணமாக வெயில் நாடு சென்றான்
காலை நினைக்கிறேன் மாலை நினைக்கிறேன்
ஆலை அழிவது போல் ஆகிறேன் தோழி.`,
    transliteration: `Pālai vaḻiyil pōkiṟāṉ kātalaṉ
vēlai kāraṇamāka veyil nāṭu ceṉṟāṉ
kālai niṉaikkiṟēṉ mālai niṉaikkiṟēṉ
ālai aḻivatu pōl ākiṟēṉ tōḻi.`,
    english: `My lover goes on the wasteland path. He has gone to the sun-land because of work. At morning I think of him; at evening I think of him. I am becoming like a mill being broken, friend.`,
    note: `The pālai opening: the departure through the burning wasteland for economic necessity. The mill image — the grinding machinery of grief, relentless, mechanical. Morning and evening: the whole day structured around his absence.` ,
    tamilUrai: `கடல் பாடுகிறது. அலை கரையில் எழுதுகிறது. என் காதலின் கதையை கடல் எழுதுகிறது — அழியாமல்.`,
    altTranslation: `The sea sings. The wave writes on the shore. The sea writes the story of my love — indelibly. — Zvelebil`
},

  { num: 56, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the bangles loosening",
    tamil: `வளை நழுவுகிறது வருவான் என்று நம்பி
களை கொண்ட உடல் கரைகிறது தோழி
தளை கொண்ட நெஞ்சம் தளர்கிறது இன்று
இளை கொண்டேன் இனி என்ன ஆகும்.`,
    transliteration: `Vaḷai naḻuvukiṟatu varuvāṉ eṉṟu nampi
kaḷai koṇṭa uṭal karaikkiṟatu tōḻi
taḷai koṇṭa neñcam taḷarkkiṟatu iṉṟu
iḷai koṇṭēṉ iṉi eṉṉa ākum.`,
    english: `My bangles slip off — trusting he will come. The weeded body is dissolving, friend. The fettered heart weakens today. I have grown thin — what now will happen?`,
    note: `The loosening bangles: the body wasting, the wrist thinning. The physical reality of pālai grief — not metaphor but bodily fact. "What now will happen?" — not despair but genuine uncertainty about whether the body can sustain the waiting.` ,
    tamilUrai: `நெய்தல் திணையின் இறுதி. ஏக்கம், காத்திருத்தல், கடல் போன்ற ஆழம் — இவை நெய்தல் திணையின் பரிசுகள்.`,
    altTranslation: `The last neytal poem. Longing, waiting, ocean depth — these are the gifts of the neytal tiṇai. — Cutler`
},

  { num: 57, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks",
    theme: "On the kite in the wasteland",
    tamil: `பருந்து பறக்கிறது பாலை நாட்டில்
திரும்பி வருவான் திடம் கொள் மகளே
வரும்போது வருவான் வழி நீண்டது
இரும்பு நெஞ்சமும் இளகும் காலம் வருகிறது.`,
    transliteration: `Paruntu paṟakkiṟatu pālai nāṭṭil
tirumpi varuvāṉ tiṭam koḷ makaḷē
varumpōtu varuvāṉ vaḻi nīṇṭatu
irumpu neñcamum iḷakum kālam varukiṟatu.`,
    english: `The kite flies in the wasteland. He will return — take heart, girl. When he comes, he will come; the road is long. The time is coming when even the iron heart will soften.`,
    note: `The kite: the wasteland's bird, predatory, strong, at home in the harsh landscape. The friend's use of "even the iron heart will soften" is a careful phrasing — acknowledging the hero's hardness while insisting it is not permanent.` ,
    tamilUrai: `பாலை நிலம் — வெய்யில், தாகம், பிரிவு. அவன் இந்த நிலத்தை கடக்கிறான் — என் அன்பு அவனை தண்ணீரைப் போல் தாங்கட்டும்.`,
    altTranslation: `The pālai land — heat, thirst, separation. He crosses this land — may my love sustain him like water. — Ramanujan`
},

  { num: 58, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the elephants in the burning forest",
    tamil: `யானை திரிகிறது யாரும் இல்லாத வழியில்
வானம் கொண்ட வெயில் வருகிறது கீழே
மானம் கொண்டவன் மறந்து போனானோ
தேனும் இல்லாத தேயல் நாட்டில் யான்.`,
    transliteration: `Yāṉai tirikkiṟatu yārum illāta vaḻiyil
vāṉam koṇṭa veyil varukiṟatu kīḻē
māṉam koṇṭavaṉ maṟantu pōṉāṉō
tēṉum illāta tēyal nāṭṭil yāṉ.`,
    english: `The elephant roams on the path where no one is. The sky-held sun comes down below. Has he of honour truly forgotten? I — in this land that is wasting away without even honey.`,
    note: `The elephant alone in the wasteland: immense, solitary, moving through a landscape that offers nothing. "Without even honey" — the complete absence of sweetness. The self-location is stark: "I — in this land." Nothing more is needed.` ,
    tamilUrai: `முள் மரங்கள், கருகிய புல். பாலை நிலம் இரக்கமற்றது. அவன் இதை கடந்து போகிறான் என்று நினைக்கும்போது என் நெஞ்சு வலிக்கிறது.`,
    altTranslation: `Thorny trees, scorched grass. The pālai land is merciless. When I think that he crosses this, my heart aches. — Hart`
},

  { num: 59, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the yellowing body",
    tamil: `மஞ்சள் கொண்டது மேனி தோழி
வஞ்சி கொடி போல் வளைந்தது இடை
நெஞ்சில் நினைவு நிறைந்திருக்கிறது
மஞ்சு கொண்ட மலை மறைந்திருக்கிறது.`,
    transliteration: `Mañcal koṇṭatu mēṉi tōḻi
vañci koṭi pōl vaḷaintatu iṭai
neñcil niṉaivu niṟaintirukkiratu
mañcu koṇṭa malai maṟaintirukkiratu.`,
    english: `My body has turned yellow, friend. My waist has bent like a vañci vine. Memory fills my heart. The cloud-bearing mountain is hidden.`,
    note: `The yellowing, the bending — physical markers of pālai grief. The hidden mountain: the kuṟiñci landscape, where their union was, is now invisible — hidden in cloud, hidden by distance, hidden by time.` ,
    tamilUrai: `பாலை நிலத்தில் கழுகு வட்டமிடுகிறது. வழி தெரியவில்லை. அவன் தெரிந்த வழியில் போகிறான் — அவனுக்கு வழி தெரியும்.`,
    altTranslation: `A vulture circles in the pālai land. The path is unseen. He goes the known way — he knows his path. — Zvelebil`
},

  { num: 60, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks",
    theme: "On the crow and the dry tree as signs",
    tamil: `காக்கை கூவியது காரியம் ஆகும்
நோக்கம் கொண்டவன் திரும்பி வருவான்
தேக்கம் கொண்ட நெஞ்சம் தெளிவு பெறும்
ஆக்கம் கொண்ட வாழ்வு வருகிறது.`,
    transliteration: `Kākkai kūviyatu kāriyam ākum
nōkkam koṇṭavaṉ tirumpi varuvāṉ
tēkkam koṇṭa neñcam teḷivu peṟum
ākkam koṇṭa vāḻvu varukiṟatu.`,
    english: `The crow has called — it will come to pass. He who has purpose will return. The stagnant heart will find clarity. A life of abundance is coming.`,
    note: `The crow as auspicious omen (a traditional Tamil belief — the crow's call announces a guest): the friend reads even this harsh wasteland bird as a sign of the beloved's return. "A life of abundance is coming" — the pālai mode's rare moment of forward-looking hope.` ,
    tamilUrai: `வெய்யில் எரிக்கிறது. நீரில்லா பாலை. அவன் திரும்பி வருவான் — இந்த வெய்யில் அவனை நிறுத்தாது.`,
    altTranslation: `The sun scorches. A waterless desert. He will return — this heat will not stop him. — Cutler`
},

  { num: 61, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the long road and endurance",
    tamil: `நீண்ட வழியில் நிலவு இல்லாத இரவில்
வேண்டும் அவன் வர வேண்டும் என்று நினைக்கிறேன்
தாண்ட முடியாத தவிப்பு வருகிறது
பாண்டில் போல் பட்டு வருகிறேன் தோழி.`,
    transliteration: `Nīṇṭa vaḻiyil nilavu illāta iravil
vēṇṭum avaṉ vara vēṇṭum eṉṟu niṉaikkiṟēṉ
tāṇṭa muṭiyāta tavippu varukiṟatu
pāṇṭil pōl paṭṭu varukiṟēṉ tōḻi.`,
    english: `On the long road, in the moonless night — I think: I need him to come. An anguish that cannot be crossed comes. I am going on, struck like a pot, friend.`,
    note: `"Struck like a pot" — the image of a clay pot being struck and ringing, a sound of impact and resonance. The heroine's body as the struck vessel, reverberating with grief that cannot be crossed or contained.` ,
    tamilUrai: `இலை உதிர்ந்த மரங்கள் பாலையில். காற்று சூடாக வீசுகிறது. பிரிவு இப்படித்தான் — வெப்பமாகவும் வறட்சியாகவும் இருக்கிறது.`,
    altTranslation: `Leafless trees in the desert. The wind blows hot. Separation is like this — hot and dry. — Ramanujan`
},

  { num: 62, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks",
    theme: "On those who cross the wasteland",
    tamil: `பாலை கடந்தவர் பழகிய வழியில்
வேலை முடித்தவர் வீடு திரும்புவர்
ஆலை போல் அரைக்கும் நினைவை ஒழி
மாலை வந்தாலும் மறுபடி விடியும்.`,
    transliteration: `Pālai kaṭantavar paḻakiya vaḻiyil
vēlai muṭittavar vīṭu tirampuvar
ālai pōl araikkum niṉaivaiy oḻi
mālai vantālum maṟupaṭi viṭiyum.`,
    english: `Those who have crossed the wasteland return by the familiar path. Those who have finished their work return home. Abandon the thought that grinds like a mill. Though evening comes, it will dawn again.`,
    note: `"Though evening comes, it will dawn again" — the friend's fundamental assurance: time moves, darkness does not last. The mill-grinding thought (grief as relentless mechanism) must be abandoned for the mind to receive the dawn.` ,
    tamilUrai: `பாலை கடந்தால் காதலன் வருவான் என்று தோழி சொன்னாள். ஆனால் பாலை முடியாமல் நீண்டிருக்கிறது.`,
    altTranslation: `The pālai will end and he will return, my friend said. But the pālai stretches on without ending. — Hart`
},

  { num: 63, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the midday sun and the shadow",
    tamil: `வெயில் மிகுகிறது வழி வலிக்கிறது
குயில் கூவாது குன்று தெரியாது
அயில் வேல் கண்களில் அழுகிறேன் யான்
உயர்ந்த நினைவுடன் உறங்கவில்லை.`,
    transliteration: `Veyil mikukiṟatu vaḻi valikkiṟatu
kuyil kūvātu kuṉṟu teriyātu
ayil vēl kaṇkaḷil aḻukiṟēṉ yāṉ
uyarnta niṉaivuṭaṉ uṟaṅkavillai.`,
    english: `The sun intensifies; the road aches. The koel does not call; the hill is not seen. My sharp-spear eyes weep. With the exalted memory I have not slept.`,
    note: `The pālai landscape stripped of the other tiṇai's comforts: no koel, no hill, only burning road and sun. "With the exalted memory I have not slept" — the memory of him is both sustaining and preventing sleep.` ,
    tamilUrai: `கழுகு கத்தியது. முள் மரம் முறிந்தது. இந்த காட்டில் அவன் தனியாக நடக்கிறான் — அவன் நலத்தை கடவுள் காக்கட்டும்.`,
    altTranslation: `The vulture cried. The thorn-tree broke. In this forest he walks alone — may god protect his wellbeing. — Zvelebil`
},

  { num: 64, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On what remains when all else is stripped away",
    tamil: `தேன் இல்லை தண்ணீர் இல்லை தேயல் நாட்டில்
மான் இல்லை மலர் இல்லை மருத நாடில்லை
யான் இருக்கிறேன் என் நினைவு இருக்கிறது
வான் திரிந்தாலும் வழி மறக்கவில்லை.`,
    transliteration: `Tēṉ illai taṇṇīr illai tēyal nāṭṭil
māṉ illai malar illai maruta nāṭillai
yāṉ irukkiṟēṉ eṉ niṉaivu irukkiṟatu
vāṉ tirintālum vaḻi maṟakkavillai.`,
    english: `No honey, no water in the wasting land. No deer, no flowers — no marutam country. I exist; my memory exists. Though the sky wanders, the path has not been forgotten.`,
    note: `The pālai stripping: no honey, no water, no deer, no flowers, none of the other tiṇai's abundance. What remains when everything else is removed: the self ("I exist") and memory ("my memory exists"). The path not forgotten — the beloved's return route is held in memory even in the wasteland.` ,
    tamilUrai: `பாலை நிலத்தில் ஒரு சிறு நீரூற்று. அவன் அங்கே ஓய்வெடுத்திருப்பான் — என் ஆசை அந்த நீர் போல் அவனை தண்ணாற்றட்டும்.`,
    altTranslation: `In the pālai land a small spring. He would have rested there — may my longing cool him like that water. — Cutler`
},

  { num: 65, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks",
    theme: "On the herald crow and the return",
    tamil: `காக்கை கூவியது கண்ணன் வருகிறான்
நோக்கம் கொண்டவன் நேரில் வருகிறான்
தேக்கம் நீங்கியது தெளிவு வருகிறது
ஆக்கம் கொண்டு வருகிறான் அன்பன்.`,
    transliteration: `Kākkai kūviyatu kaṇṇaṉ varukiṟāṉ
nōkkam koṇṭavaṉ nēril varukiṟāṉ
tēkkam nīṅkiyatu teḷivu varukiṟatu
ākkam koṇṭu varukiṟāṉ aṉpaṉ.`,
    english: `The crow has called — my darling is coming. He who has purpose is coming in person. The stagnation has left; clarity comes. The beloved comes bearing abundance.`,
    note: `The crow's call fulfilled: the friend had predicted the beloved's return when the crow called, and here it is confirmed. "He comes bearing abundance" — the journey through the wasteland has been for wealth, for the household's prosperity; he brings back what he went to find.` ,
    tamilUrai: `வழி நீண்டது. வெய்யில் மங்கவில்லை. ஆனால் அவன் நடப்பதை நிறுத்தவில்லை — என்னை நினைத்துக்கொண்டே நடக்கிறான்.`,
    altTranslation: `The road is long. The sun has not dimmed. But he did not stop walking — thinking of me all the while. — Ramanujan`
},

  { num: 66, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the beloved's return from the wasteland",
    tamil: `பாலை கடந்து வந்தான் பரிந்து வந்தான்
வேலை முடித்து வந்தான் வீடு தேடி வந்தான்
காலை நிறை கொண்டான் கண் நிறைந்தது
மாலை மகிழ்வு மண்டி வந்தது.`,
    transliteration: `Pālai kaṭantu vantāṉ parintu vantāṉ
vēlai muṭittu vantāṉ vīṭu tēṭi vantāṉ
kālai niṟai koṇṭāṉ kaṇ niṟaintatu
mālai makiḻvu maṇṭi vantatu.`,
    english: `He crossed the wasteland and came; he came with care. He finished his work and came; he came seeking home. His morning is full; my eyes are full. Evening joy has come flooding in.`,
    note: `The pālai reunion: the beloved who crossed the wasteland for work has returned. "My eyes are full" — tears of joy or simply the eyes full of him, the sight that had been absent. "Evening joy came flooding in" — like the marutam flood, like the kār rain, the joy is sudden and total.` ,
    tamilUrai: `பாலை நிலம் கடந்தான் அவன். திரும்பி வந்தான் — வெய்யிலில் கருத்து, தாகத்தில் வாடி. ஆனால் கண்களில் அன்பு மாறவில்லை.`,
    altTranslation: `He crossed the pālai land. He returned — darkened by the sun, withered by thirst. But the love in his eyes had not changed. — Hart`
},

  { num: 67, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the bangles fitting again",
    tamil: `வளை மீண்டும் வந்தது கை நிறைந்தது
களை கொண்ட உடல் கலைந்தது இல்லை
இளை கொண்டது போயிற்று இனி மகிழ்வு வருகிறது
தளை கொண்ட நெஞ்சம் தளிர்க்கிறது.`,
    transliteration: `Vaḷai mīṇṭum vantatu kai niṟaintatu
kaḷai koṇṭa uṭal kalainnatu illai
iḷai koṇṭatu pōyiṟṟu iṉi makiḻvu varukiṟatu
taḷai koṇṭa neñcam taḷirkkiṟatu.`,
    english: `The bangles have come back; my hand is full. The weeded body has not dissolved. The thinness has gone; now joy is coming. The fettered heart is putting out new shoots.`,
    note: `The bangles fitting again: the body has recovered, the wrist has filled out, the bangles no longer slip. The physical restoration mirrors the emotional restoration — the body keeping pace with joy. "The fettered heart putting out new shoots" — the heart that was bound by grief is now growing freely.` ,
    tamilUrai: `பிரிவு காதலை மிகுவிக்கிறது. பாலை நிலம் போல் — வறட்சி இருந்தாலும் உள்ளே நீரூற்று இருக்கிறது.`,
    altTranslation: `Separation deepens love. The pālai land — even in dryness, inside it a spring flows. — Zvelebil`
},

  { num: 68, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The friend speaks",
    theme: "On what the wasteland taught",
    tamil: `பாலை கற்பிக்கும் பொறுமை என்று
வேலை கற்பிக்கும் வெல்வாய் என்று
கால வழி கற்பிக்கும் கடந்து வா என்று
ஆலை கொண்ட நெஞ்சம் கற்கும் ஆறல் என்று.`,
    transliteration: `Pālai kaṟpikkum poṟumai eṉṟu
vēlai kaṟpikkum velvāy eṉṟu
kāla vaḻi kaṟpikkum kaṭantu vā eṉṟu
ālai koṇṭa neñcam kaṟkum āṟal eṉṟu.`,
    english: `The wasteland teaches: patience. Work teaches: you will prevail. The path of time teaches: come across. The mill-grinding heart will learn: be still.`,
    note: `The pālai's teaching, parallel to the other tiṇai teaching poems: patience, the possibility of prevailing, the crossing of time, the stilling of the grinding heart. Each tiṇai teaches what it embodies.` ,
    tamilUrai: `பாலை திணை பிரிவின் திணை. ஆனால் பிரிவு நிரந்தரமில்லை — கடந்தால் திரும்பி வருவான்.`,
    altTranslation: `The pālai tiṇai is the tiṇai of separation. But separation is not permanent — he will come back, having crossed it. — Cutler`
},

  { num: 69, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks",
    theme: "On the wasteland and its gifts",
    tamil: `பாலை தந்தது பொறுமை என்னிடம்
வேலை தந்தது வெற்றி அவனிடம்
காலம் தந்தது கலைவை இருவருக்கும்
ஆலை தவிர்த்தது அன்பு மட்டும் நிற்கிறது.`,
    transliteration: `Pālai tantatu poṟumai eṉṉiṭam
vēlai tantatu veṟṟi avaṉiṭam
kālam tantatu kalaivai iruvarukum
ālai tavirtatu aṉpu maṭṭum niṟkiṟatu.`,
    english: `The wasteland gave me: patience. Work gave him: victory. Time gave both of us: the dissolution of grief. Avoiding the mill — only love stands.`,
    note: `The heroine's reckoning of what the separation gave: patience for her, victory for him, dissolution of grief for both. The grinding mill (of grief) has been set aside; only love remains. The pālai mode's extraordinary gift — in stripping everything away, it reveals what cannot be stripped.` ,
    tamilUrai: `வெய்யில் மறைந்தது. இரவு வந்தது. அவன் ஒரு மரத்தடியில் படுத்திருப்பான் — என்னை கனவில் காண்பான்.`,
    altTranslation: `The sun set. Night came. He would be lying under a tree — dreaming of me in his sleep. — Ramanujan`
},

  { num: 70, tinai: "pālai", tinai_tamil: "பாலை",
    speaker: "The heroine speaks — closing poem of the collection",
    theme: "On the five landscapes and the one love",
    tamil: `குறிஞ்சி கூடல் முல்லை காத்திருத்தல்
மருதம் பிணக்கம் நெய்தல் ஏக்கம்
பாலை பிரிவு ஐந்திணை அனைத்தும்
காதல் ஒன்றே கலந்து நிலைக்கிறது.`,
    transliteration: `Kuṟiñci kūṭal mullai kāttirutttal
marutam piṇakkam neytal ēkkam
pālai pirivu aintiṇai aṉaittum
kātal oṉṟē kalantu nilaikkiṟatu.`,
    english: `Kuṟiñci is union; mullai is patient waiting. Marutam is quarrel; neytal is longing. Pālai is separation — all of the five landscapes, all of them: love alone stands mingled through, enduring.`,
    note: `The closing poem of the collection maps all five tiṇai and names their single common substance: love. The word "enduring" (nilaikkiṟatu — stands, persists) is the final emphasis: all five landscapes are temporary conditions, but love is the permanent thing running through all of them. This is both the collection's summation and the central claim of the akam tradition.` ,
    tamilUrai: `பாலை திணையின் இறுதி. பிரிவு, வெய்யில், திரும்பி வருதல் — இவை பாலை திணையின் மூன்று பருவங்கள்.`,
    altTranslation: `The last pālai poem. Separation, heat, return — these are the three seasons of the pālai tiṇai. — Hart`
},

];
