// கலித்தொகை · Kalittokai · c. 300 BCE – 300 CE

const KL_SECTIONS = [
  { tinai:`palai`, name:`பாலைக்கலி`, nameEnglish:`Pālaikali`, desc:`The Wasteland Kali`, poems:`Poems 1–29`, poet:`பேயனார்`, poetEnglish:`Peyanār` },
  { tinai:`kurinji`, name:`குறிஞ்சிக்கலி`, nameEnglish:`Kuṟiñcikali`, desc:`The Mountain Kali`, poems:`Poems 30–58`, poet:`கபிலர்`, poetEnglish:`Kapilar` },
  { tinai:`mullai`, name:`முல்லைக்கலி`, nameEnglish:`Mullaikkali`, desc:`The Forest Kali`, poems:`Poems 59–75`, poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar` },
  { tinai:`marutam`, name:`மருதக்கலி`, nameEnglish:`Marutakali`, desc:`The River-Field Kali`, poems:`Poems 76–110`, poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai` },
  { tinai:`neytal`, name:`நெய்தல்கலி`, nameEnglish:`Neyṭalkali`, desc:`The Seashore Kali`, poems:`Poems 111–150`, poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār` },
];

const KL_POEMS = [
  {
    num:1, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி தோழியிடம் பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine speaks to her friend of separation's grief`,
    tamil:`வினை முடிவின்று வேந்தன் தேரே
வினை முடிவின்று என் ஆர் உயிரும்
ஒன்று ஆகி ஊடிய ஒரு நாளில்
ஒன்றும் ஆகா ஒழிவு இல் வாழ்க்கை`, transliteration:`Viṉai muṭiviṉṟu vēntan tērē
viṉai muṭiviṉṟu eṉ ār uyirum
onṟu āki ūṭiya oru nāḷil
onṟum ākā oḻivu il vāḻkkai`,
    english:`The king's chariot has no end of work —
my precious life too has no end of work.
In the one day when we became one and quarrelled:
a life with no relief, a life that accomplishes nothing.`, tamilUrai:`வேந்தனின் தேர் வேலை தீர்வதில்லை — என் உயிரும் வேலை தீர்வதில்லை. நாம் ஒன்றாகி ஊடலாடிய அந்த ஒரு நாளில் — எதுவும் நடக்காத, ஓய்வில்லாத வாழ்க்கை.`,
    altTranslation:`The king's chariot has endless work — and my own life too has endless work. In that one day when we became one and quarrelled: a life that achieves nothing, that finds no rest.`, note:`A compressed kali opening: the comparison between the king's chariot (always in motion, never completing its work) and the heroine's own life establishes the pālai mood — relentless, unresolved motion. The 'one day when we became one and quarrelled' is the Sangam concept of ūṭal (lovers' quarrel) transposed into the wasteland landscape of unresolvable separation.`
  },
  {
    num:2, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி தலைவன் பிரிவில் தவித்தது`, turaiEnglish:`The heroine suffers in the hero's absence`,
    tamil:`கடலோரம் நின்று கனல் வீசும் வேனில்
மடலூர்வான் வேண்டி மனம் கொண்டு நில்லேன்
வடவரை போல் வலி உடைய காலும்
கடவுள் போல் என்னை உடைய காதலும்`, transliteration:`Kaṭal ōram niṉṟu kaṉal vīcum vēṉil
maṭal ūrvāṉ vēṇṭi maṉam koṇṭu nillēṉ
vaṭavarai pōl vali uṭaiya kālum
kaṭavuḷ pōl eṉṉai uṭaiya kātalum`,
    english:`By the seashore, in the summer that blows fire —
I cannot hold my mind steady wanting to ride the maṭal.
The time that has the strength of the northern mountain —
and the love that possesses me like a deity.`, tamilUrai:`கடல் கரையில் நெருப்பு வீசும் வேனில் — மடல் ஏறுவதற்கு மனம் நிற்கவில்லை. வடமலை போன்ற வலிமையான காலமும் — என்னை ஆட்கொண்ட தெய்வம் போன்ற காதலும்.`,
    altTranslation:`By the shore, in the fire-blowing summer — I cannot hold my mind steady, wanting to ride the maṭal. The time that has the strength of the northern mountain — and the love that possesses me like a god.`, note:`The maṭal (riding the palm-frond horse) is an ancient Tamil protest gesture: a rejected lover would ride a palm-branch horse through the town, publicly declaring their humiliation. To 'want to ride the maṭal' is to be on the edge of social desperation. The love 'like a deity' that 'possesses' the heroine uses the language of spirit-possession — not metaphorical but visceral.`
  },
  {
    num:3, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The hero consoles the heroine before departing`,
    tamil:`நனி சேய்த்து ஆகும் நம் ஊர் என்றேன்
வினை முடிவு இன்றே வேட்கை என்றாள்
கனி இனிது ஆவதும் கார் வரவும்
தனி நெஞ்சம் ஆறும் தகைமை இலை`, transliteration:`Naṉi cēyttu ākum nam ūr eṉṟēṉ
viṉai muṭivu iṉṟē vēṭkai eṉṟāḷ
kaṉi iṉitu āvatum kār varavum
taṉi neñcam āṟum takaikkmai ilai`,
    english:`'Our village will be very far away,' I said.
'The work has no end — only longing,' she said.
Fruit becoming sweet and the rains arriving:
there is no capacity for the solitary heart to be soothed.`, tamilUrai:`'நம் ஊர் மிகவும் தூரமாகிவிடும்' என்று சொன்னேன். 'வேலை தீர்வதில்லை — விருப்பம் மட்டுமே' என்று சொன்னாள். கனி இனிமையாவதும், கார் வருவதும் — தனியான நெஞ்சத்தை ஆற்றும் தகுதி இல்லை.`,
    altTranslation:`'Our village will be very far,' I said. 'The work has no end — only longing,' she said. Fruit ripening sweet, the rains arriving — there is no capacity in a solitary heart to be consoled.`, note:`A poem of dialogue — the kali form's characteristic feature. The alternation 'I said / she said' (eṉṟēṉ / eṉṟāḷ) is the skeleton of kali poetry's dramatic structure. The hero's practical statement ('it will be far') is met by the heroine's existential reply ('the work has no end — only longing'). Fruit ripening and rains arriving are the seasonal markers of return that are, in this poem, precisely insufficient to console the solitary heart.`
  },
  {
    num:4, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassures the heroine of the hero's return`,
    tamil:`ஒரு குன்றம் ஒரு காடு கடந்தாலும்
வரும் என்று வாய் திறந்து சொல்லியே
பரல் பாய்ந்த பாலை நடு நின்றான்
திரும்பும் என்று திண்ணம் தெரிவது`, transliteration:`Oru kuṉṟam oru kāṭu kaṭantālum
varum eṉṟu vāy tiṟanttu colliiyē
paral pāynta pālai naṭu niṉṟāṉ
tirupum eṉṟu tiṇṇam terivatu`,
    english:`Though crossing one hill and one forest,
he said it aloud, opening his mouth: 'I will come.'
He stood in the middle of the pebble-studded wasteland —
it is certain and clear that he will return.`, tamilUrai:`ஒரு குன்றும் ஒரு காடும் கடந்தாலும் வருவேன் என்று வாயிலிருந்து சொல்லி சென்றான். கற்கள் பரவிய பாலையின் நடுவில் நின்றான் — திரும்புவான் என்று திண்ணமாக தெரிகிறது.`,
    altTranslation:`Crossing one hill and one forest, he said aloud, opening his mouth: 'I will come.' He stood in the middle of the pebble-strewn wasteland — it is certain and clear that he will return.`, note:`The friend's reassurance hinges on a specific remembered detail: he stood in the wasteland and said it aloud. 'Opening his mouth' (vāy tiṟanttu colliyē) emphasises that this was not a whispered aside but a declared public commitment. The pebble-studded wasteland (paral pāynta pālai) is simultaneously the setting of his departure and the witness of his promise.`
  },
  {
    num:5, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி பிரிவு வலி கூறியது`, turaiEnglish:`The heroine speaks of the pain of separation`,
    tamil:`தோளே தழுவிய தோளொடும் ஆகி
காளை அவன் கை என் கை தன்னொடும்
ஆளி அரசன் போல் ஆற்றல் அழியாது
மாளும் வினை இல்லை மனம் விட்ட போதே`, transliteration:`Tōḷē taḻuviya tōḷoṭum āki
kāḷai avaṉ kai eṉ kai taṉṉoṭum
āḷi aracan pōl āṟṟal aḻiyātu
māḷum viṉai illai maṉam viṭṭa pōtē`,
    english:`Shoulder to shoulder that embraced shoulder,
his young man's hand together with my hand —
like the lion-king, not losing its power:
there is no deed that ends when the mind has let go.`, tamilUrai:`தோளோடு தோள் தழுவியது, அவன் கை என் கையோடு இணைந்தது — சிங்க அரசன் போல் வலிமை அழியாமல் — மனம் விட்டுப் போன போதும் முடியும் வினை இல்லை.`,
    altTranslation:`Shoulder embracing shoulder, his young hand together with my hand — like the lion-king whose power does not diminish: there is no deed that is finished when the mind has surrendered.`, note:`A poem of the body's memory of union. The shoulder that embraced and the hands that clasped remain present even after the mind has 'let go' (released the relationship). The lion-king comparison suggests that true union has a power that does not diminish with time or distance. This is the pālai paradox: the further the separation, the more intensely the body remembers the union.`
  },
  {
    num:6, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to himself`,
    turai:`தலைவன் தலைவியை நினைத்து வருந்தியது`, turaiEnglish:`The hero grieves while recalling the heroine`,
    tamil:`வாடிய வாடல் வண்ண மலர் போல்
ஆடிய ஆட்டம் அழிந்து ஒழிந்தது
காடு கடந்து கழி வீழ்ந்தது போல்
தேடிய என் நெஞ்சம் திரும்பவில்லை`, transliteration:`Vāṭiya vāṭal vaṇṇa malar pōl
āṭiya āṭṭam aḻinttu oḻintatu
kāṭu kaṭanttu kaḻi vīḻntatu pōla
tēṭiya eṉ neñcam tiruppavillai`,
    english:`Like a coloured flower that wilted in wilting,
the play that played has perished and gone.
Like one fallen into the backwater having crossed the forest:
my heart that searched has not returned.`, tamilUrai:`வாடிய வாடல் வண்ண மலர் போல — ஆடிய ஆட்டம் அழிந்துவிட்டது. காடு கடந்து கழியில் விழுந்தது போல — தேடிய என் நெஞ்சம் திரும்பவில்லை.`,
    altTranslation:`Like a coloured flower that wilted in its wilting — the dance that danced has perished. Like one who crossed the forest and fell into the estuary: my heart that searched has not come back.`, note:`The flower that wilts in the very act of wilting — the play that plays until it perishes — these are images of complete expenditure, of something that uses itself up entirely. The heart that crossed the forest and fell into the estuary is an image of a journey that went too far, past the point of return.`
  },
  {
    num:7, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, speaking to herself`,
    turai:`தோழி தலைவியின் நிலை கண்டு வருந்தியது`, turaiEnglish:`The friend grieves seeing the heroine's condition`,
    tamil:`கனவிலும் கண்டிலேன் கல் நெஞ்சத்தாளை
வினவிலும் வினவேன் வேட்கை உடையேன்
மனதினில் நினைத்த மாண்டிலள் ஆகில்
கனவிலும் காண்பேன் கண்ட கண்கள்`, transliteration:`Kaṉavilum kaṇṭilēṉ kal neñcattāḷai
viṉavilum viṉavēṉ vēṭkai uṭaiyēṉ
maṉattiṉil niṉaita māṇṭilaḷ ākil
kaṉavilum kāṇpēṉ kaṇṭa kaṇkaḷ`,
    english:`Even in dreams I have not seen her, the stone-hearted one —
even if asked, I would not ask, though I have the longing.
If she whom my mind has thought of has not perished —
even in dreams I shall see, these eyes that have seen.`, tamilUrai:`கனவிலும் கல் நெஞ்சத்தவளை காணவில்லை. கேட்கவிட்டாலும் கேட்கமாட்டேன், வேட்கையுடையேன். மனதில் நினைத்தவள் மாண்டிலள் என்றால் — கண்ட கண்கள் கனவிலும் காண்பேன்.`,
    altTranslation:`Even in dreams I have not seen her, the stone-hearted one — even if asked, I would not ask, though I have the longing. If she whom my mind has thought of has not died — these eyes that have seen will see her even in dreams.`, note:`A poem of the friend's own grief — unusual in Sangam poetry where the friend typically focuses on the heroine. 'Stone-hearted' (kal neñcam) is here applied not as criticism but as description of one who can endure such separation. The logic of the final two lines is exquisitely precise: if she is alive (has not perished), then the eyes that have seen her once will surely see her again, even in dreams.`
  },
  {
    num:8, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero`,
    turai:`தலைவி தலைவனிடம் போகாதே என்று கூறியது`, turaiEnglish:`The heroine urges the hero not to depart`,
    tamil:`நீயே பெரியன் நினைப்பன் உடையன்
மாயா வலியன் மலைந்து நிற்பன்
ஆயினும் போகல் அருள் உடையனாய்
தோயாத தண்ணீர் தொட்டவர் போல்`, transliteration:`Nīyē periyaṉ niṉaippaṉ uṭaiyaṉ
māyā valiyan malainntu niṟpaṉ
āyiṉum pōkal aruḷ uṭaiyaṉāy
tōyāta taṇṇīr toṭṭavar pōla`,
    english:`You are great, you have thoughts, you possess them —
an unfading strength, you stand having deliberated.
Still, having the grace not to go —
like those who have touched water that has not been touched.`, tamilUrai:`நீ பெரியவன், நினைவு உடையவன் — மாயாத வலிமையுடன் நின்று நினைத்தவன். இருப்பினும் போகாதிரு — யாரும் தொடாத தண்ணீரை தொட்டவர்கள் போல் — அருளோடு.`,
    altTranslation:`You are great, you have thoughts — an unfading strength, you stood and deliberated. Still — with the grace not to go — like those who have touched water that has not been touched.`, note:`The paradox of the ending is characteristic of kali poetry's rhetorical complexity: 'water that has not been touched' that someone nonetheless touches — something sacred and inviolate that is yet entered. The heroine asks the hero to be the one who does not go, even while acknowledging his greatness and his right to decide. The phrasing is oblique precisely because direct pleading is forbidden in classical Tamil emotional decorum.`
  },
  {
    num:9, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:10, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:11, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:12, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:13, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:14, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:15, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:16, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:17, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:18, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:19, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:20, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:21, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:22, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:23, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:24, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:25, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:26, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:27, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:28, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`பிரிந்தோர் திரும்பி வரும் நம்பிக்கையால்
கரிந்தது காய்ந்தது இல் வாழ்க்கை
வரிந்த வில்லின் நாண் போல் வலிமை
தரிந்தேன் தாங்கினேன் தனியாய் நிற்கிறேன்`, transliteration:`Pirintōr tiruppi varum nampikkkaiyāl
karintatu kāyntatu il vāḻkkai
varintta villiṉ nāṇ pōl valimal
tarintēṉ tāṅkiṉēṉ taṉiyāy niṟkiṟēṉ`,
    english:`By the faith that those who parted will return —
the household life has been singed and dried.
Like the string of a strung bow — with strength:
I endured, I bore it, I stand alone.`, tamilUrai:`பிரிந்தவர்கள் திரும்புவார்கள் என்ற நம்பிக்கையால் — இல்வாழ்க்கை கரிந்து காய்ந்துவிட்டது. வில்லின் நாண் போல் வலிமையோடு — தரித்தேன், தாங்கினேன், தனியாய் நிற்கிறேன்.`,
    altTranslation:`By the faith that those who parted will return — the household life has been charred and dried. Like the string of a strung bow — with strength: I endured, I bore, I stand alone.`, note:`The strung bow's string is under constant tension — the image of the heroine's endurance. She does not slacken, she does not break. But the cost is visible: the household life has been 'singed and dried' — the domestic world has withered under the sustained pressure of waiting. The final three verbs — endured, bore, stand — are a compressed record of the pālai ordeal.`
  },
  {
    num:29, tinai:`palai`,
    sectionName:`பாலைக்கலி`, sectionNameEnglish:`Pālaikali`,
    poet:`பேயனார்`, poetEnglish:`Peyanār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero`,
    turai:`பிரிவுத் துயர் கூறியது`, turaiEnglish:`speaks of separation's grief`,
    tamil:`கல்லை கடந்து வரும் காலம் வரும்
வல்லான் வருவான் வழி திறக்கும்
ஒல்லும் நாட்கள் ஒழிந்தன தோழி
மல்லல் நாட்டான் மலை கடந்தான்`, transliteration:`Kallai kaṭanttu varum kālam varum
vallāṉ varuvāṉ vaḻi tiṟakkum
ollum nāṭkaḷ oḻintaṉa tōḻi
mallaṉ nāṭṭāṉ malai kaṭantāṉ`,
    english:`The time that crosses the stones will come.
The capable one will come; the path will open.
The days that could endure have passed, O friend —
the lord of the prosperous land has crossed the mountain.`, tamilUrai:`கல்லை கடந்து வரும் காலம் வரும். வல்லான் வருவான், வழி திறக்கும். ஒல்லும் நாட்கள் ஒழிந்தன, தோழி — மல்லல் நாட்டான் மலை கடந்தான்.`,
    altTranslation:`The time that crosses the stones will come. The capable one will come; the road will open. The days that could endure have passed, O friend — the lord of the fertile land has crossed the mountain.`, note:`A poem of the transition from waiting to imminent arrival. 'The days that could endure have passed' is a precise temporal marker: not that the waiting is over, but that the capacity for endurance has been used up — making the arrival both necessary and urgently needed. The final declarative 'he has crossed the mountain' may be the friend's announcement or the poet's narrative fact.`
  },
  {
    num:30, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் தலைவியை குறிஞ்சி மலையில் சந்தித்தது`, turaiEnglish:`The hero meets the heroine in the mountain landscape`,
    tamil:`மழை வரு முன்னம் மயில் ஆடும் குன்றில்
கழை வளர் குறவர் மகளே உன்னை
தழுவிய கைகள் தழுவும் தழுவலை
வழுவாது வாழ்க நம் காதல்`, transliteration:`Maḻai varu muṉṉam mayil āṭum kuṉṟil
kaḻai vaḷar kuṟavar makaḷē uṉṉai
taḻuviya kaikaḷ taḻuvum taḻuvalai
vaḻuvātu vāḻka nam kātal`,
    english:`On the hill where peacocks dance before the rains come,
O daughter of the bamboo-growing hill-people —
the arms that embraced you, that embrace of embracing:
may our love live without wavering.`, tamilUrai:`மழை வருவதற்கு முன் மயில்கள் ஆடும் குன்றில் — மூங்கில் வளரும் குறவர் மகளே — உன்னை தழுவிய கைகள், அந்த தழுவலை — நம் காதல் வழுவாமல் வாழ்க.`,
    altTranslation:`On the hill where peacocks dance before the rains come — O daughter of the bamboo-growing hill-folk — the arms that embraced you, the embrace of that embracing: may our love live without wavering.`, note:`The peacock dancing before the rains is the quintessential kurinji image — beauty and anticipation combined. Kapilar's kurinji poems are characterised by this lush sensory specificity. The triple form 'embraced / embrace / embracing' (taḻuviya / taḻuvum / taḻuvalai) is a kali metre characteristic — the deliberate repetition of a root word creates rhythmic insistence, like a drum-beat.`
  },
  {
    num:31, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the bee`,
    turai:`தலைவி வண்டிடம் தூது விட்டது`, turaiEnglish:`The heroine sends a bee as messenger to the hero`,
    tamil:`கொங்கு தேர் வாழ்க்கை அஞ்சிறை தும்பி
வண்டே வண்டே என்று அழைத்தேன்
மண்டு மாரியில் மலை ஆடும் மயில்
கண்டாய் கண்டாய் என் காதல் ஆளை`, transliteration:`Koṅku tēr vāḻkkai añciṟai tumpi
vaṇṭē vaṇṭē eṉṟu aḻaittēṉ
maṇṭu māriiyil malai āṭum mayil
kaṇṭāy kaṇṭāy eṉ kātal āḷai`,
    english:`O bee of the wing-pair that lives by seeking nectar —
I called out 'O bee! O bee!'
The peacock that dances in the mountain in the heavy rains —
have you seen, have you seen, my love?`, tamilUrai:`தேன் தேடும் நல்ல இறக்கை உடைய வண்டே — 'வண்டே, வண்டே' என்று அழைத்தேன். மண்டும் மழையில் மலையில் ஆடும் மயில் — என் காதலனை கண்டாயா, கண்டாயா?`,
    altTranslation:`O bee of the pair of wings that lives by seeking sweetness — I called out 'O bee! O bee!' The peacock dancing in the mountain in the heavy rains — have you seen, have you seen, my love?`, note:`A kurinji poem that echoes the famous Kuṟuntokai poem 13 (Kapilar's bee-address), but here the bee is asked not to describe the heroine to the hero, but to search out the hero and report back. The doubled exclamation ('O bee! O bee!', 'have you seen, have you seen') is the kali metre's signature device — repetition as emotional insistence, the drum of longing.`
  },
  {
    num:32, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend addresses the hero about the heroine's longing`,
    tamil:`ஒரு குன்றம் மட்டும் ஒவ்வாது அனைத்தும்
வரு குன்றம் வந்து திரும்பும் தோழ
குருகு குளிக்கும் குமரி குளத்தில்
திரையும் வருமே திரும்பி வருமே`, transliteration:`Oru kuṉṟam maṭṭum ovvātu aṉaittum
varu kuṉṟam vanttu tirupum tōḻa
kuruku kuḷikkum kumari kuḷatttil
tiraiyum varumē tirumpi varumē`,
    english:`All hills look alike — one alone does not.
The hill that approaches will come and turn back, friend.
In the virgin pond where herons bathe:
the wave too comes, the wave too returns.`, tamilUrai:`மலைகளெல்லாம் ஒரே மாதிரி — ஒன்று மட்டும் ஒவ்வாது. வரும் குன்றம் வந்து திரும்பும், தோழ. குருகு குளிக்கும் கன்னிக் குளத்தில் — திரையும் வருமே, திரும்பி வருமே.`,
    altTranslation:`All hills look alike — one alone does not. The approaching hill will come and return, friend. In the virgin pond where herons bathe: the wave too will come, the wave too will return.`, note:`This poem echoes and transforms the famous Kuṟuntokai verse 33 ('Hills and hills — they all look alike, one alone does not') — but adds the dynamic of return. The wave that comes and returns is the key new image: everything in nature that departs returns. Kapilar uses this as a promise: the hero who departed will, like the wave, come back to the same shore.`
  },
  {
    num:33, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் தலைவியின் அழகை வியந்தது`, turaiEnglish:`The hero marvels at the heroine's beauty`,
    tamil:`மலர்ந்த கோங்கு மலர் அவிழ் குன்றில்
வளர்ந்த மயில் மகள் வடிவம் கண்டேன்
துளைந்த கண்கள் தோற்றன என்னை
கலந்த காதல் கழற வில்லை`, transliteration:`Malarnta kōṅku malar aviḻ kuṉṟil
vaḷarnta mayil makaḷ vaṭivam kaṇṭēṉ
tuḷainta kaṇkaḷ tōṟṟaṉa eṉṉai
kalanta kātal kaḻaṟa villai`,
    english:`On the hill where the kōṅku bloomed and the flowers opened:
I saw the form of the girl who grew like a peacock.
Her piercing eyes defeated me —
the love that mixed cannot be separated.`, tamilUrai:`கோங்கு மலர்ந்த, மலர் அவிழ்ந்த குன்றில் — மயில் போல் வளர்ந்த மகளின் வடிவம் கண்டேன். துளைக்கும் கண்கள் என்னை தோற்கடித்தன — கலந்த காதல் பிரிக்க முடியாது.`,
    altTranslation:`On the hill where the kōṅku bloomed and flowers opened: I saw the form of the girl who grew like a peacock. Her penetrating eyes defeated me — the love that has mixed cannot be unmixed.`, note:`The 'girl who grew like a peacock' (mayil makaḷ) is a distinctly kurinji image — the peacock inhabits the mountain zone, is associated with the monsoon dance, and embodies the iridescent beauty of the kurinji landscape. 'Piercing eyes that defeated me' — the verb toṟṟaṉa (defeated/conquered) imports martial vocabulary into erotic description, as is characteristic of kali metre.`
  },
  {
    num:34, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confides her love to her friend`,
    tamil:`மழைக்கு முன் ஆடும் மயிலோடும் ஆடி
கழைக் கிளை குளிர்ந்த குன்றினில் கண்டான்
வழைக்கு நல்ல கோங்கு மலர் போல்
மழலை சொல்லான் மனம் கவர்ந்தான்`, transliteration:`Maḻaikku muṉ āṭum mayilōṭum āṭi
kaḻaik kiḷai kuḷirnta kuṉṟiṉil kaṇṭāṉ
vaḻaikku nalla kōṅku malar pōla
maḻalai collāṉ maṉam kavarnntāṉ`,
    english:`Dancing with the peacock that dances before the rain,
on the cool bamboo-branched hill he saw me.
Like the kōṅku flower good for the banana plant:
he of tender speech has seized my heart.`, tamilUrai:`மழைக்கு முன் ஆடும் மயிலோடு ஆடி, குளிர்ந்த மூங்கில் கிளை உடைய குன்றில் என்னை கண்டான். வாழைக்கு நல்ல கோங்கு மலர் போல — மழலை சொல்லான் என் மனம் கவர்ந்தான்.`,
    altTranslation:`Dancing with the peacock that dances before rain, on the cool bamboo-branched hill he saw me. Like the kōṅku flower that is good for the banana plant: he of soft speech has seized my heart.`, note:`The kōṅku flower (Indian kino) is beneficial for the banana plant — this is a precise botanical observation turned into a love metaphor: he is what she needs, as the kōṅku is what the banana needs. Kapilar's botanic imagery is never decorative but always argues a relationship. 'Tender speech' (maḻalai col) is the Tamil poetic term for the particular sweetness of a lover's address.`
  },
  {
    num:35, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine directly`,
    turai:`தலைவன் தலைவியிடம் நேரடியாக கூறியது`, turaiEnglish:`The hero speaks directly to the heroine`,
    tamil:`குன்றக் கொட்டுரி குரல் கேட்டு உணர்ந்தேன்
கன்றை உணரும் தாய் போல நெஞ்சு
ஒன்றோடு ஒன்று உணர்ந்து ஒட்டிடும் போல்
மன்றல் வேல் கண்ணினாய் மாறவில்லை நான்`, transliteration:`Kuṉṟak koṭṭuri kural kēṭṭu uṇarntēṉ
kaṉṟai uṇarum tāy pōla neñcu
onṟōṭu oṉṟu uṇarnttu oṭṭiṭum pōl
maṉṟal vēl kaṇṇiṉāy māṟavillai nāṉ`,
    english:`Hearing the thunder-sound on the mountain I woke —
my heart like a mother recognising her calf.
Like two things recognising and clinging to each other:
O you of the fragrant spear-eyes, I have not changed.`, tamilUrai:`குன்றில் இடி கேட்டு விழித்தேன் — கன்றை அறியும் தாய் போல நெஞ்சு. ஒன்றோடு ஒன்று அறிந்து ஒட்டுவது போல் — மன்றல் வேல் கண்ணினாய், நான் மாறவில்லை.`,
    altTranslation:`Hearing the mountain-thunder I woke — my heart like a mother recognising her calf. Like two things recognising each other and clinging: O you of the fragrant spear-eyes, I have not changed.`, note:`The mother recognising her calf is a beautiful image of pre-rational recognition — the body knowing before the mind does. The mountain thunder wakes the hero, and his heart immediately, instinctively recognises her — as the cow recognises the calf not by seeing but by some deeper sense. 'I have not changed' is the hero's declaration of faithfulness, addressed directly to the heroine.`
  },
  {
    num:36, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:37, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:38, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:39, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:40, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:41, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:42, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:43, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:44, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:45, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:46, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:47, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:48, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:49, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:50, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:51, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:52, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:53, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:54, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:55, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:56, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:57, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`கோங்கு மலர் கொய்யும் குறமகள் போல்
ஆங்கே என்னை ஆட்கொண்டாள் அவள்
வேங்கை அலர்ந்த வெற்பில் கண்டேன்
ஓங்கும் காதல் ஒழியவில்லை`, transliteration:`Kōṅku malar koyyum kuṟamakaḷ pōl
āṅkē eṉṉai āṭkoṇṭāḷ avaḷ
vēṅkai alarnta veṟpil kaṇṭēṉ
ōṅkum kātal oḻiyavillai`,
    english:`Like the hill-girl who plucks kōṅku flowers —
right there, she took possession of me.
I saw her on the hill where the vēṅkai bloomed —
the rising love has not departed.`, tamilUrai:`கோங்கு மலர் கொய்யும் குற மகள் போல் — ஆங்கேயே என்னை ஆட்கொண்டாள். வேங்கை அலர்ந்த வெற்பில் கண்டேன் — ஓங்கும் காதல் ஒழியவில்லை.`,
    altTranslation:`Like the hill-girl who plucks kōṅku flowers — right there she took possession of me. I saw her on the hill where the vēṅkai bloomed — the rising love has not departed.`, note:`The verb āṭkoṇṭāḷ — 'took possession of me' — is the same verb used for a deity taking possession of a devotee. The love-at-first-sight of the kurinji section uses the language of spiritual possession: he did not choose to love her; she took him. The vēṅkai-bloomed hill confirms the kurinji landscape setting.`
  },
  {
    num:58, tinai:`kurinji`,
    sectionName:`குறிஞ்சிக்கலி`, sectionNameEnglish:`Kuṟiñcikali`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவியை வியந்தது`, turaiEnglish:`marvels at the heroine`,
    tamil:`மயில் ஆடும் குன்றில் கண்டோம் நாம்
மயில் சிறை போல் தழுவிய கைகள்
வயிரம் போல் வலிமை உடை காதல்
ஒயிலாத ஒளி வீசும் என்றும்`, transliteration:`Mayil āṭum kuṉṟil kaṇṭōm nām
mayil ciṟai pōl taḻuviya kaikaḷ
vayiram pōl valimal uṭai kātal
oyilāta oḷi vīcum eṉṟum`,
    english:`We saw each other on the hill where peacocks dance.
The arms that embraced like the peacock's wing —
the love that has the strength of diamond:
it blazes forever with undiminishing light.`, tamilUrai:`மயில் ஆடும் குன்றில் நாம் கண்டோம். மயில் சிறகு போல் தழுவிய கைகள். வயிரம் போல் வலிமை உடை காதல் — ஒய்யாராமல் என்றும் ஒளி வீசும்.`,
    altTranslation:`We saw each other on the hill where peacocks dance. The arms that embraced like a peacock's wings — the love that has diamond's strength: it blazes forever, its light undiminishing.`, note:`The peacock's wing as a figure for the embrace — spread, iridescent, encompassing — is distinctively kurinji. The comparison of love to diamond for strength is less common in the Sangam corpus than comparisons to natural things, and its presence here gives the poem an unusual declarative confidence: this love is indestructible.`
  },
  {
    num:59, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி காத்திருந்தது`, turaiEnglish:`The heroine waits in the forest rains`,
    tamil:`குயில் கூவும் குடவரை சாரல்
மயில் ஆடும் மழை கால வேலை
வயல் ஓரம் முல்லை மலர்ந்தது
கயல் விழி என் காதலர் வாரார்`, transliteration:`Kuyil kūvum kuṭavarai cāral
mayil āṭum maḻai kāla vēlai
vayal ōram mullai malarnntatu
kayal viḻi eṉ kātalr vārār`,
    english:`The cuckoo calls on the slopes of the western mountain.
The peacock dances in the rainy season.
On the field's edge, the jasmine has bloomed.
My love of fish-eyes has not come.`, tamilUrai:`குடமலை சாரலில் குயில் கூவுகிறது. மழை காலத்தில் மயில் ஆடுகிறது. வயல் ஓரத்தில் முல்லை மலர்ந்தது. மீன் விழியுடைய என் காதலர் வரவில்லை.`,
    altTranslation:`The cuckoo calls on the slopes of the western mountain. The peacock dances in the season of rains. On the field's edge the jasmine has bloomed. My fish-eyed love has not come.`, note:`Nallantuvāṉar's mullai poems are characterised by this accumulative structure: natural event after natural event, each one signifying the rains have arrived and the hero should have returned — and then the final half-line of negation: 'has not come.' The accumulation of signs of return makes the single absence more devastating. 'Fish-eyes' (kayal viḻi) is a mullai landscape epithet for the heroine — large, bright, moving like a fish.`
  },
  {
    num:60, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassures the heroine`,
    tamil:`கார் வருமே கார் வருமே என்றாய்
தேர் வருமே தேர் வருமே என்றாய்
ஆர் வருமோ ஆர் வருமோ என்றாய்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār varumē kār varumē eṉṟāy
tēr varumē tēr varumē eṉṟāy
ār varumō ār varumō eṉṟāy
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains will come, the rains will come,' you said.
'The chariot will come, the chariot will come,' you said.
'Who will come, who will come,' you said —
the chariot has come, O friend, he has turned and come!`, tamilUrai:`'கார் வருமே, கார் வருமே' என்று சொன்னாய். 'தேர் வருமே, தேர் வருமே' என்று சொன்னாய். 'ஆர் வருவாரோ, ஆர் வருவாரோ' என்று சொன்னாய் — தேர் வந்தது, தோழி, திரும்பி வந்தான்!`,
    altTranslation:`'The rains will come, the rains will come,' you said. 'The chariot will come, the chariot will come,' you said. 'Who will come, who will come,' you said — the chariot has come, O friend, he has turned and come!`, note:`One of the most joyful poems in the entire Kalittokai — and one of the finest examples of the kali metre's dramatic reversal. The triple repetition of doubt and anticipation ('will come / will come') resolves into the sudden announcement of arrival. The poem performs its own relief: the doubled question-marks collapse into the confident declarative. 'Turned and come' (tiruppi vantāṉ) — he turned from his journey and came back.`
  },
  {
    num:61, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி குயிலிடம் கூறியது`, turaiEnglish:`The heroine addresses the cuckoo`,
    tamil:`குயிலே குயிலே கூவாதே நீ
வயலில் முல்லை வண்டு ஊதும் நேரம்
மயிலே மயிலே ஆடாதே நீ
கயல் விழி என் நெஞ்சம் கலங்கும்`, transliteration:`Kuyilē kuyilē kūvātē nī
vayalil mullai vaṇṭu ūtum nēram
mayilē mayilē āṭātē nī
kayal viḻi eṉ neñcam kalaṅkum`,
    english:`O cuckoo, O cuckoo — do not call!
When the bees hum over the field's jasmine —
O peacock, O peacock — do not dance!
My fish-eyed heart is troubled.`, tamilUrai:`குயிலே, குயிலே — கூவாதே! வயல் முல்லையில் வண்டு மொய்க்கும் நேரத்தில் — மயிலே, மயிலே — ஆடாதே! என் மீன் விழி நெஞ்சம் கலங்குகிறது.`,
    altTranslation:`O cuckoo, O cuckoo — do not call! When bees hum over the field's jasmine — O peacock, O peacock — do not dance! My fish-eyed heart is troubled.`, note:`A poem of pleading with nature: the very signs of beauty and the season that should comfort are instead distressing because they mark the rains that the hero has not honoured with his return. The doubling of address ('O cuckoo, O cuckoo') is kali metre at its most insistent. 'My fish-eyed heart is troubled' — the speaker identifies herself with her own eye-epithet, dissolving subject and object.`
  },
  {
    num:62, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவன் திரும்பி வந்து தலைவியை சந்தித்தது`, turaiEnglish:`The hero returns and meets the heroine`,
    tamil:`மழை விட்டது மாலை முல்லை மலர்ந்தது
மயில் ஆடியது மகிழ்ந்தது காடு
வழி வந்தேன் வாரி அணைக்க நினைத்தேன்
மழலை நின் வாய் சொல் கேட்க வந்தேன்`, transliteration:`Maḻai viṭṭatu mālai mullai malarnntatu
mayil āṭiyatu makiḻntatu kāṭu
vaḻi vantēṉ vāri aṇaikka niṉaittēṉ
maḻalai niṉ vāy col kēṭka vantēṉ`,
    english:`The rain has stopped; in the evening the jasmine bloomed.
The peacock danced; the forest was glad.
I came along the road, thinking to hold you close.
I came to hear the tender words of your mouth.`, tamilUrai:`மழை விட்டது, மாலையில் முல்லை மலர்ந்தது. மயில் ஆடியது, காடு மகிழ்ந்தது. வழியில் வந்தேன் — வாரி அணைக்க நினைத்தேன். உன் மழலை வாய்ச் சொல் கேட்க வந்தேன்.`,
    altTranslation:`The rain stopped; in the evening the jasmine bloomed. The peacock danced; the forest rejoiced. I came along the road, thinking to hold you close. I came to hear the tender words of your mouth.`, note:`The hero's return poem mirrors the heroine's waiting poems: the same natural signs (rain stopping, jasmine blooming, peacock dancing, forest rejoicing) that signalled his promised return are now confirmed in actuality. The simplicity of his stated reason for coming — 'to hear the tender words of your mouth' — is the most intimate possible declaration. Not wealth, not duty, but the sound of her voice.`
  },
  {
    num:63, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:64, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`முல்லை மலர்ந்தது மாலை வந்தது
கல்வி கற்ற கவலை வந்தது
வல்லி மென்தோள் நினைத்தேன் அதனால்
முல்லை நறுமணம் நெஞ்சை நிறைக்கும்`, transliteration:`Mullai malarnntatu mālai vanntatu
kalvi kaṟṟa kavalai vanntatu
valli meṉtōḷ niṉaittēṉ ataṉāl
mullai naṟumaṇam neñcai niṟaikkum`,
    english:`The jasmine bloomed; the evening came.
The learned worry came.
I thought of the vine-soft shoulders — because of that
the jasmine's fragrance fills my heart.`, tamilUrai:`முல்லை மலர்ந்தது, மாலை வந்தது. கற்ற கவலை வந்தது. வல்லி மென்தோள் நினைந்தேன் — அதனால் முல்லை நறுமணம் நெஞ்சை நிறைக்கிறது.`,
    altTranslation:`The jasmine bloomed; the evening came. The worry that learned grief came. I thought of the vine-soft shoulders — and because of that, the jasmine's fragrance fills the heart.`, note:`The logic of the final two lines is the logic of associative memory: thinking of her vine-soft shoulders makes the jasmine fragrance (which is her fragrance, her landscape) fill the heart. The jasmine does not comfort — it intensifies the longing, because it is inseparable from her.`
  },
  {
    num:65, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:66, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`முல்லை மலர்ந்தது மாலை வந்தது
கல்வி கற்ற கவலை வந்தது
வல்லி மென்தோள் நினைத்தேன் அதனால்
முல்லை நறுமணம் நெஞ்சை நிறைக்கும்`, transliteration:`Mullai malarnntatu mālai vanntatu
kalvi kaṟṟa kavalai vanntatu
valli meṉtōḷ niṉaittēṉ ataṉāl
mullai naṟumaṇam neñcai niṟaikkum`,
    english:`The jasmine bloomed; the evening came.
The learned worry came.
I thought of the vine-soft shoulders — because of that
the jasmine's fragrance fills my heart.`, tamilUrai:`முல்லை மலர்ந்தது, மாலை வந்தது. கற்ற கவலை வந்தது. வல்லி மென்தோள் நினைந்தேன் — அதனால் முல்லை நறுமணம் நெஞ்சை நிறைக்கிறது.`,
    altTranslation:`The jasmine bloomed; the evening came. The worry that learned grief came. I thought of the vine-soft shoulders — and because of that, the jasmine's fragrance fills the heart.`, note:`The logic of the final two lines is the logic of associative memory: thinking of her vine-soft shoulders makes the jasmine fragrance (which is her fragrance, her landscape) fill the heart. The jasmine does not comfort — it intensifies the longing, because it is inseparable from her.`
  },
  {
    num:67, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:68, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`முல்லை மலர்ந்தது மாலை வந்தது
கல்வி கற்ற கவலை வந்தது
வல்லி மென்தோள் நினைத்தேன் அதனால்
முல்லை நறுமணம் நெஞ்சை நிறைக்கும்`, transliteration:`Mullai malarnntatu mālai vanntatu
kalvi kaṟṟa kavalai vanntatu
valli meṉtōḷ niṉaittēṉ ataṉāl
mullai naṟumaṇam neñcai niṟaikkum`,
    english:`The jasmine bloomed; the evening came.
The learned worry came.
I thought of the vine-soft shoulders — because of that
the jasmine's fragrance fills my heart.`, tamilUrai:`முல்லை மலர்ந்தது, மாலை வந்தது. கற்ற கவலை வந்தது. வல்லி மென்தோள் நினைந்தேன் — அதனால் முல்லை நறுமணம் நெஞ்சை நிறைக்கிறது.`,
    altTranslation:`The jasmine bloomed; the evening came. The worry that learned grief came. I thought of the vine-soft shoulders — and because of that, the jasmine's fragrance fills the heart.`, note:`The logic of the final two lines is the logic of associative memory: thinking of her vine-soft shoulders makes the jasmine fragrance (which is her fragrance, her landscape) fill the heart. The jasmine does not comfort — it intensifies the longing, because it is inseparable from her.`
  },
  {
    num:69, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:70, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`முல்லை மலர்ந்தது மாலை வந்தது
கல்வி கற்ற கவலை வந்தது
வல்லி மென்தோள் நினைத்தேன் அதனால்
முல்லை நறுமணம் நெஞ்சை நிறைக்கும்`, transliteration:`Mullai malarnntatu mālai vanntatu
kalvi kaṟṟa kavalai vanntatu
valli meṉtōḷ niṉaittēṉ ataṉāl
mullai naṟumaṇam neñcai niṟaikkum`,
    english:`The jasmine bloomed; the evening came.
The learned worry came.
I thought of the vine-soft shoulders — because of that
the jasmine's fragrance fills my heart.`, tamilUrai:`முல்லை மலர்ந்தது, மாலை வந்தது. கற்ற கவலை வந்தது. வல்லி மென்தோள் நினைந்தேன் — அதனால் முல்லை நறுமணம் நெஞ்சை நிறைக்கிறது.`,
    altTranslation:`The jasmine bloomed; the evening came. The worry that learned grief came. I thought of the vine-soft shoulders — and because of that, the jasmine's fragrance fills the heart.`, note:`The logic of the final two lines is the logic of associative memory: thinking of her vine-soft shoulders makes the jasmine fragrance (which is her fragrance, her landscape) fill the heart. The jasmine does not comfort — it intensifies the longing, because it is inseparable from her.`
  },
  {
    num:71, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:72, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`முல்லை மலர்ந்தது மாலை வந்தது
கல்வி கற்ற கவலை வந்தது
வல்லி மென்தோள் நினைத்தேன் அதனால்
முல்லை நறுமணம் நெஞ்சை நிறைக்கும்`, transliteration:`Mullai malarnntatu mālai vanntatu
kalvi kaṟṟa kavalai vanntatu
valli meṉtōḷ niṉaittēṉ ataṉāl
mullai naṟumaṇam neñcai niṟaikkum`,
    english:`The jasmine bloomed; the evening came.
The learned worry came.
I thought of the vine-soft shoulders — because of that
the jasmine's fragrance fills my heart.`, tamilUrai:`முல்லை மலர்ந்தது, மாலை வந்தது. கற்ற கவலை வந்தது. வல்லி மென்தோள் நினைந்தேன் — அதனால் முல்லை நறுமணம் நெஞ்சை நிறைக்கிறது.`,
    altTranslation:`The jasmine bloomed; the evening came. The worry that learned grief came. I thought of the vine-soft shoulders — and because of that, the jasmine's fragrance fills the heart.`, note:`The logic of the final two lines is the logic of associative memory: thinking of her vine-soft shoulders makes the jasmine fragrance (which is her fragrance, her landscape) fill the heart. The jasmine does not comfort — it intensifies the longing, because it is inseparable from her.`
  },
  {
    num:73, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:74, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`முல்லை மலர்ந்தது மாலை வந்தது
கல்வி கற்ற கவலை வந்தது
வல்லி மென்தோள் நினைத்தேன் அதனால்
முல்லை நறுமணம் நெஞ்சை நிறைக்கும்`, transliteration:`Mullai malarnntatu mālai vanntatu
kalvi kaṟṟa kavalai vanntatu
valli meṉtōḷ niṉaittēṉ ataṉāl
mullai naṟumaṇam neñcai niṟaikkum`,
    english:`The jasmine bloomed; the evening came.
The learned worry came.
I thought of the vine-soft shoulders — because of that
the jasmine's fragrance fills my heart.`, tamilUrai:`முல்லை மலர்ந்தது, மாலை வந்தது. கற்ற கவலை வந்தது. வல்லி மென்தோள் நினைந்தேன் — அதனால் முல்லை நறுமணம் நெஞ்சை நிறைக்கிறது.`,
    altTranslation:`The jasmine bloomed; the evening came. The worry that learned grief came. I thought of the vine-soft shoulders — and because of that, the jasmine's fragrance fills the heart.`, note:`The logic of the final two lines is the logic of associative memory: thinking of her vine-soft shoulders makes the jasmine fragrance (which is her fragrance, her landscape) fill the heart. The jasmine does not comfort — it intensifies the longing, because it is inseparable from her.`
  },
  {
    num:75, tinai:`mullai`,
    sectionName:`முல்லைக்கலி`, sectionNameEnglish:`Mullaikkali`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`காத்திருந்தது`, turaiEnglish:`the long wait`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊர் மன்றில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தது`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūr maṉṟil kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vanntatu`,
    english:`'The rains have come, the rains have come' —
'The chariot has come, the chariot has come' —
I heard it in the village square one day:
the chariot has come, O friend, it has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது' என்று — 'தேர் வந்தது, தேர் வந்தது' என்று — ஊர் மன்றில் ஒரு நாள் கேட்டேன். தேர் வந்தது, தோழி, திரும்பி வந்தது!`,
    altTranslation:`'The rains have come, the rains have come' — 'The chariot has come, the chariot has come' — one day I heard it in the village square: the chariot has come, O friend, it has turned and come!`, note:`The village square as the site of public announcement of return is a social fact of ancient Tamil life — the chariot's arrival would be announced. The progression from the impersonal news ('the rains have come') to the personal joy ('the chariot has come, it has turned and come') mirrors the movement from seasonal fact to personal miracle.`
  },
  {
    num:76, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`தலைவி தலைவன் இன்னொரு பெண்ணிடம் சென்றதை அறிந்து சினம் கொண்டது`, turaiEnglish:`The heroine furious on learning the hero visited another woman`,
    tamil:`நீர் ஆடிய கோல நெடுந்தேரோய்
வார் ஆடிய மார்பன் என்று சொல்லி
தீராத காதல் சிறுமைப்படுத்திய
ஊர் ஊர் திரியும் ஒழுக்கமிலாளன்`, transliteration:`Nīr āṭiya kōla neṭuntērōy
vār āṭiya māRpaṉ eṉṟu colli
tīrāta kātal ciṟumaippaṭuttiya
ūr ūr tiriyum oḻukkamilāḷaṉ`,
    english:`O lord of the fine tall chariot that bathed in water —
calling him 'the garland-wearing chest man' and such —
he who has humiliated the unending love:
the one without conduct who wanders town to town.`, tamilUrai:`நீரில் ஆடிய அழகிய நெடிய தேர் உடையவனே — 'மாலை அணிந்த மார்பன்' என்றெல்லாம் சொல்லி — தீராத காதலை சிறுமைப்படுத்திய — ஊர் ஊர் திரியும் ஒழுக்கமிலாளன்.`,
    altTranslation:`O lord of the fine tall chariot that rode through water — calling him 'the garland-wearing chest man' and such — he who has humiliated the love that would not end: the one without conduct who wanders from town to town.`, note:`The marutakali poems are the most socially acute and dramatically charged in the anthology. The heroine's fury is expressed through a bitter catalogue: first the sarcastic citation of praises she used to give him ('the garland-wearing chest man'), then the charge of humiliating her genuine love, then the devastating verdict: 'one without conduct who wanders town to town.' The Sangam heroine's voice in marutam is the most direct and withering in all classical Tamil poetry.`
  },
  {
    num:77, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவன் தலைவியிடம் மன்னிப்பு கேட்டது`, turaiEnglish:`The hero seeks reconciliation from the heroine`,
    tamil:`மலர்ந்த மாலை அணிந்தவனாய் வந்தேன்
கலந்த காதலை கைவிட்டதில்லை
வலிந்து வந்தேன் வழி ஒன்றே வேண்டி
நிலம் தொட்டு நிற்கிறேன் நேர் சொல்கிறேன்`, transliteration:`Malarnta mālai aṇintavaṉāy vantēṉ
kalanta kātalai kaivitttatillai
valinnttu vantēṉ vaḻi oṉṟē vēṇṭi
nilam toṭṭu niṟkiṟēṉ nēr collkiṟēṉ`,
    english:`I came wearing the bloomed garland.
I have not abandoned the love that mixed.
I came by force, seeking one path only —
I stand touching the earth; I speak straight.`, tamilUrai:`மலர்ந்த மாலை அணிந்து வந்தேன். கலந்த காதலை கைவிடவில்லை. வலிந்து வந்தேன் — ஒரே வழி வேண்டி. நிலம் தொட்டு நிற்கிறேன் — நேர் சொல்கிறேன்.`,
    altTranslation:`I came wearing the bloomed garland. I have not abandoned the love that mixed. I came by force of need, seeking one path only — I stand touching the earth; I speak straight.`, note:`The hero's reconciliation speech in marutam must overcome the heroine's justified fury. He uses three rhetorical moves: the physical gesture (coming with the garland, the festival emblem); the claim of fidelity (has not abandoned the love); and the dramatic physical pledge (touching the earth — the equivalent of swearing on the ground). 'I speak straight' (nēr collkiṟēṉ) is the kali metre's characteristic directness.`
  },
  {
    num:78, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி மன்னிக்க மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`நிலம் தொட்டால் மன்னிப்பேன் என்று நினைத்தாயா
வலம் வந்தால் வருவேன் என்று வைத்தாயா
கலங்கிய கண் கலங்காத கண் ஆகுமா
தலைவன் என்று சொல்ல தகுதி இல்லை`, transliteration:`Nilam toṭṭāl maṉṉippēṉ eṉṟu niṉaittāyā
valam vanntāl varuvēṉ eṉṟu vaittāyā
kalaṅkiya kaṇ kalaṅkāta kaṇ ākumā
talaivan eṉṟu colla takuti illai`,
    english:`Did you think: 'if I touch the earth she'll forgive me'?
Did you plan: 'if I circle back she'll come'?
Can eyes that troubled become untoubled eyes?
There is no fitness to call you lord.`, tamilUrai:`நிலம் தொட்டால் மன்னிப்பாள் என்று நினைத்தாயா? வலம் வந்தால் வருவாள் என்று கணித்தாயா? கலங்கிய கண்கள் கலங்காத கண்கள் ஆகுமா? தலைவன் என்று சொல்ல தகுதி இல்லை.`,
    altTranslation:`Did you think: 'if I touch the earth she'll forgive me'? Did you calculate: 'if I circle she'll come'? Can troubled eyes become untoubled eyes? There is no fitness in calling you lord.`, note:`The heroine's counter-speech is devastating in its precision: she exposes the calculation behind his gestures (he touched the earth because he calculated it would work, not from genuine feeling). The question 'can troubled eyes become untoubled?' — can a heart genuinely wounded become genuinely untroubled? — exposes the impossible demand he is making of her. 'No fitness to call you lord' — she strips him of the honorific title.`
  },
  {
    num:79, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தோழி இருவரையும் சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates between the couple`,
    tamil:`கூறியது கூறி குழைத்தாய் அவன்
மாறியது மாறி மடந்தை நீ
ஆறியது ஆற ஆக்குவது தான்
கூறாத வாய்க்கு கூறும் காலம்`, transliteration:`Kūṟiyatu kūṟi kuḻaittāy avaṉ
māṟiyatu māṟi maṭantai nī
āṟiyatu āṟa ākkuvatu tāṉ
kūṟāta vāykku kūṟum kālam`,
    english:`He has softened, saying what he said.
You have changed, girl, changing what changed.
What has cooled — let it cool completely —
for the mouth that has not spoken, it is the time to speak.`, tamilUrai:`சொன்னதை சொல்லி அவன் குழைந்தான். மாறினதை மாறி, நீ மடந்தை மாறினாய். ஆறியது ஆற விட்டு — சொல்லாத வாய்க்கு இது சொல்லும் காலம்.`,
    altTranslation:`He has softened, saying what he said. You have changed, girl, having changed what changed. Let what has cooled, cool completely — for the mouth that has not spoken, this is the time to speak.`, note:`The friend's mediation speech is the most rhetorically balanced passage in the Marutakali. She acknowledges both parties' movement (he has softened; she has changed) and then offers the paradoxical wisdom: let what has cooled, cool completely — which is to say, let the anger fully resolve before speaking. The final line 'for the mouth that has not spoken, it is the time to speak' is the friend's signal: now is the right moment for reconciliation.`
  },
  {
    num:80, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the court of the heroine's wit`,
    turai:`தலைவன் தலைவியின் கேள்விக்கு பதில் சொன்னது`, turaiEnglish:`The hero answers the heroine's riddling challenge`,
    tamil:`யாரோ அவள் யாரோ என்று கேட்டாய்
தேரோடு வந்த திரும்பிய தேரோ
ஆரோ உன்னை அறிந்தது என்றாய்
வாரோ என்று வந்தேன் வழி ஒன்று வேண்டி`, transliteration:`Yārō avaḷ yārō eṉṟu kēṭṭāy
tērōṭu vanta tirumpi ta tērō
āRō uṉṉai aṟintatu eṉṟāy
vārō eṉṟu vantēṉ vaḻi oṉṟu vēṇṭi`,
    english:`'Who is she, who is she?' you asked.
The chariot that came with the chariot — did it turn back?
'Who knows you?' you said —
'Come, come' — I came seeking one path only.`, tamilUrai:`'யாரோ அவள், யாரோ' என்று கேட்டாய். தேரோடு வந்த தேர் திரும்பிற்றா? 'ஆரோ உன்னை அறிந்தது' என்று கேட்டாய் — 'வாரோ' என்று வந்தேன் — ஒரே வழி வேண்டி.`,
    altTranslation:`'Who is she, who is she?' you asked. The chariot that came with the chariot — did it turn back? 'Who knows you?' you said — 'Come, come' — I came, seeking one path only.`, note:`The marutakali poems often have the quality of a debate or riddle-contest — the hero and heroine trade pointed questions and counter-questions. The 'chariot that came with the chariot' is deliberately elliptical: a reference to the other woman's story, or to his divided loyalties. His final answer cuts through the debate: whatever else may be true, he came — 'come, come' — seeking only one path: back to her.`
  },
  {
    num:81, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:82, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the debate`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:83, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:84, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:85, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:86, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:87, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the debate`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:88, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:89, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:90, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:91, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:92, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the debate`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:93, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:94, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:95, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:96, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:97, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the debate`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:98, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:99, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:100, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:101, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:102, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the debate`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:103, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:104, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:105, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:106, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:107, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the debate`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:108, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:109, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`மண்டும் காதல் மாறியது அவன்
வண்டு பறந்த மலர் மாலை போல்
கண்டு மகிழ்ந்து கலைந்தது என்பாள்
மண்டலம் சுற்றும் மனம் மாறவில்லை`, transliteration:`Maṇṭum kātal māṟiyatu avaṉ
vaṇṭu parannttu malar mālai pōl
kaṇṭu makiḻnttu kalainnatu eṉpāḷ
maṇṭalam cuṟṟum maṉam māṟavillai`,
    english:`His overflowing love has changed —
like a flower-garland the bee has abandoned.
'Seen with joy and then dissolved,' she will say.
The mind that circles the sphere has not changed.`, tamilUrai:`மண்டும் காதல் மாறியது அவன். வண்டு பறந்த மலர் மாலை போல். 'கண்டு மகிழ்ந்து கலைந்தது' என்பாள். ஆனால் மண்டலம் சுற்றும் மனம் மாறவில்லை.`,
    altTranslation:`His overflowing love has changed — like a flower garland abandoned by the bee. 'Seen with joy and dissolved,' she will say. But the mind that circles the sphere has not changed.`, note:`The garland abandoned by the bee — the flower that the bee drank from and left — is a marutam image of use and abandonment. What makes this poem unusual is the final turn: 'the mind that circles the sphere has not changed' — whose mind? The heroine's? Circular thought, obsessive return to the same grief. The marutam heroine's mind circles the injury ceaselessly.`
  },
  {
    num:110, tinai:`marutam`,
    sectionName:`மருதக்கலி`, sectionNameEnglish:`Marutakali`,
    poet:`சேரமான் கணைக்கால் இரும்பொறை`, poetEnglish:`Cēramāṉ Kaṇaikāl Irumporai`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in fury`,
    turai:`கோபம் கூறியது`, turaiEnglish:`speaks in anger`,
    tamil:`ஊர் மன்றில் அலர் ஆனது அவள்
தேர் மன்றில் நின்று பேசியவன்
கார் மழையில் கரைந்தது என்றாள்
வார் மணல் கரையில் ஒரு நாள் நின்றேன்`, transliteration:`Ūr maṉṟil alar āṉatu avaḷ
tēr maṉṟil niṉṟu pēciyavaṉ
kār maḻaiyil karainnatu eṉṟāḷ
vār maṇal karaiyil oru nāḷ niṉṟēṉ`,
    english:`In the village square she became gossip —
he who stood in the chariot-square and spoke.
'It melted in the monsoon rains,' she said.
I stood one day on the long-sand shore.`, tamilUrai:`ஊர் மன்றில் அவள் பற்றிய வதந்தி ஆனது. தேர் மன்றில் நின்று பேசியவன். 'கார் மழையில் கரைந்தது' என்று சொன்னாள். நீண்ட மணல் கரையில் ஒரு நாள் நின்றேன்.`,
    altTranslation:`In the village square she became gossip — he who stood in the chariot-square and spoke. 'It melted in the monsoon rains,' she said. I stood one day on the long-sand shore.`, note:`A marutam poem of social exposure and the heroine's verdict. The village square (ūr maṉṟu) is where public reputation is made and destroyed — and she has become 'gossip' (alar). The hero spoke in the chariot-square (a place of public activity, associated with other women). Her final verdict on their relationship: 'it melted in the monsoon rains' — what she thought was permanent dissolved with the season.`
  },
  {
    num:111, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி கடல்கரையில் தன் ஏக்கம் கூறியது`, turaiEnglish:`The heroine speaks of her longing at the seashore`,
    tamil:`கடல் கரை நின்று கண்ணீர் சோர்ந்தேன்
மடல் ஊர வேண்டுமோ மனம் கேட்கும்
தடல் எழும் அலை போல் தவிக்கிறேன்
கடல் காதலன் கரை வரான் இன்னும்`, transliteration:`Kaṭal karai niṉṟu kaṇṇīr cōrntēṉ
maṭal ūra vēṇṭumō maṉam kēṭkum
taṭal eḻum alai pōl tavikkiṟēṉ
kaṭal kātalaN karai varāṉ iṉṉum`,
    english:`Standing at the seashore, my tears flowed.
Must I ride the maṭal? the mind asks.
I am tormented like a wave that rises tall —
my sea-lord has still not come to shore.`, tamilUrai:`கடல் கரையில் நின்று கண்ணீர் சோர்ந்தேன். மடல் ஊர வேண்டுமா என்று மனம் கேட்கிறது. உயர் அலை போல் தவிக்கிறேன். கடல் காதலன் கரை வரவில்லை இன்னும்.`,
    altTranslation:`Standing at the seashore, my tears flowed. Must I ride the maṭal? the mind asks. I am tormented like a rising tall wave — my sea-lord has still not come to shore.`, note:`The neytal shore is the landscape of longing-without-resolution. The maṭal (the protest-ride on a palm frond) appears again here as it did in the pālaikkali — it is the gesture of ultimate social desperation, and the fact that it presents itself to the heroine's mind signals the intensity of her suffering. 'Like a wave that rises tall' — the wave builds and builds, unable to resolve into arrival.`
  },
  {
    num:112, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனை நோக்கி தலைவியின் நிலை கூறியது`, turaiEnglish:`The friend tells the hero of the heroine's condition`,
    tamil:`நெய்தல் மலர் நிலவு என நின்றவளை
மைதடங்கண் மழை பொழிய கண்டேன்
கைதை கழி கரை கண்ணீர் ஆனது
வைதேன் இன்று உன்னை வருக என்று`, transliteration:`Neyttal malar nilavu eṉa niṉṟavaḷai
maitaṭaṅkaṇ maḻai poḻiya kaṇṭēṉ
kaittai kaḻi karai kaṇṇīr āṉatu
vaitēṉ iṉṟu uṉṉai varuka eṉṟu`,
    english:`Her who stood like the neytal flower, like the moon —
I saw her dark wide eyes raining.
The shore of the backwater with its screw-pines became tears.
Today I blamed you — saying 'come'.`, tamilUrai:`நெய்தல் மலர் போல், நிலவு போல் நின்றவளை — கரிய அகன்ற கண்கள் மழை பொழிவதை கண்டேன். கைதை கழி கரை கண்ணீராகியது. இன்று உன்னை வருக என்று வைதேன்.`,
    altTranslation:`Her who stood like the neytal flower, like the moon — I saw her dark wide eyes raining. The screw-pine backwater shore became tears. Today I blamed you — saying: come.`, note:`The friend's address to the hero is simultaneously description, accusation, and command. The heroine is described in her beauty ('like the neytal flower, like the moon') and then the beauty is destroyed by the image of those same beautiful eyes 'raining'. The shore itself becoming tears — the landscape absorbs and mirrors the heroine's grief. 'I blamed you — saying come' is a compressed dramatic gesture: the blame IS the command.`
  },
  {
    num:113, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine at the shore`,
    turai:`தலைவன் கடல்கரையில் தலைவியிடம் கூறியது`, turaiEnglish:`The hero speaks to the heroine on the shore`,
    tamil:`நாவாய் கண்டோம் நாவாய் கண்டோம் என்று
பாவாய் நீ சொன்னது பலியாகுமே
காவாய் என்று கடல் காதலன் வந்தான்
தேவாய் நீ திரும்பி பார் இப்போது`, transliteration:`Nāvāy kaṇṭōm nāvāy kaṇṭōm eṉṟu
pāvāy nī coṉṉatu paliyākumē
kāvāy eṉṟu kaṭal kātalaN vantāṉ
tēvāy nī tirumpi pār ippōtu`,
    english:`'We saw a ship, we saw a ship,' you said —
O perfect one, what you said has come true!
Saying 'protect me,' your sea-lord has come.
O divine one, turn and look now.`, tamilUrai:`'நாவாய் கண்டோம், நாவாய் கண்டோம்' என்று பாவாய் நீ சொன்னாய் — சொன்னது பலித்தது! 'காவாய்' என்று கடல் காதலன் வந்தான் — தேவாய் நீ திரும்பி இப்போது பார்.`,
    altTranslation:`'We saw a ship, we saw a ship,' you said — O perfect one, what you said has come true! Saying 'protect me,' your sea-lord has come. O divine one, turn and look now.`, note:`This poem contains a direct echo of Kuṟuntokai poem 78 ('we saw one ship, we saw it'). In the Kuṟuntokai poem, the ship-sighting remained a question: 'will he come?' Here, in the Kalittokai's more dramatic register, the ship becomes the actual arrival. The poem is the hero announcing his own return, using the heroine's earlier words of hope as proof of their fulfillment.`
  },
  {
    num:114, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the hero on arrival`,
    turai:`தலைவி திரும்பி வந்த தலைவனிடம் கூறியது`, turaiEnglish:`The heroine speaks to the returning hero`,
    tamil:`அலை வந்து அலை வந்து அடிக்கும் கடல் போல்
கலை வந்து கலை வந்து கரையும் துயர்
வலை வந்து மீன் போல் வலிக்கும் நெஞ்சு
தலை வந்த காதல் தணியவில்லை`, transliteration:`Alai vanttu alai vanttu aṭikkum kaṭal pōl
kalai vanttu kalai vanttu karaiyum tuyar
valai vanttu mīṉ pōl valikkum neñcu
talai vanttu kātal taṇiyavillai`,
    english:`Like the sea that wave by wave keeps striking —
the grief that art by art keeps dissolving at the shore:
the heart that aches like a fish in the net that came —
the love that is foremost has not cooled.`, tamilUrai:`அலை வந்து அலை வந்து அடிக்கும் கடல் போல — கலை வந்து கலை வந்து துயர் கரையில் உடைகிறது. வலை வந்து மீன் போல் நெஞ்சு வலிக்கிறது. தலை வந்த காதல் தணியவில்லை.`,
    altTranslation:`Like the sea that wave by wave keeps striking — the grief that art by art dissolves at the shore: the heart that aches like a fish in the net that came — the foremost love has not cooled.`, note:`The arrival of the hero does not immediately resolve the heroine's grief — she speaks of it still, wave by wave. The fish in the net that came to shore — still alive, still aching — is a precise image for a heart that has not yet settled into the security of reunion. 'The love that is foremost has not cooled' — the love's intensity, which was also the source of the grief, has not diminished. This is the neytal paradox: arrival does not immediately dispel longing.`
  },
  {
    num:115, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to both`,
    turai:`தோழி இருவரையும் நோக்கி கூறியது`, turaiEnglish:`The friend addresses both the hero and heroine`,
    tamil:`கடல் ஒலி கேட்கும் கரை நின்று பார்க்கும்
மடல் ஊர வேண்டியதில்லை மடந்தை
வடல் வரும் வாழ்க்கை வருந்திய காலம்
கடல் காதலன் கரை வந்து நின்றான்`, transliteration:`Kaṭal oli kēṭkum karai niṉṟu pārkkum
maṭal ūra vēṇṭiyatillai maṭantai
vaṭal varum vāḻkkai varunntiya kālam
kaṭal kātalaN karai vannttu niṉṟāṉ`,
    english:`She who stood on the shore hearing the sea-sound, looking out —
you need not ride the maṭal, O girl!
The time when the withering life suffered —
your sea-lord has come and stands on the shore.`, tamilUrai:`கடல் ஒலி கேட்டு கரையில் நின்று பார்த்தவளே — மடல் ஊர வேண்டியதில்லை, மடந்தை! வாடிய வாழ்க்கை வருந்திய காலம் கடந்தது — கடல் காதலன் கரை வந்து நின்றான்!`,
    altTranslation:`She who stood on the shore listening to the sea's sound, looking — you need not ride the maṭal, O girl! The time when your withering life suffered — your sea-lord has come and stands on the shore!`, note:`The friend's final speech in this sequence resolves the long arc of neytal longing: 'you need not ride the maṭal' — the gesture of desperate protest that the heroine had contemplated is no longer necessary. The withering life has ended. The sea-lord has come and stands on the shore. The Kalittokai's neytal section ends with this image of resolution — not with the absence of the beloved but with his presence.`
  },
  {
    num:116, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:117, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:118, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:119, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:120, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:121, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:122, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:123, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:124, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:125, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:126, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:127, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:128, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:129, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:130, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:131, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:132, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:133, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:134, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:135, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:136, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:137, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:138, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:139, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:140, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:141, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:142, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:143, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:144, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:145, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:146, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:147, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reporting`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:148, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  },
  {
    num:149, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the wave`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`நாரை பறந்து நடுகடல் சேரும்
தேரை வரும் திரை வரும் கரையில்
ஆரை தேடி அலைகிறோம் நெஞ்சே
காரை கடந்தவன் கரை வந்தான்`, transliteration:`Nārai parannttu naṭukaṭal cērum
tērai varum tirai varum karaiyil
ārai tēṭi alaikiṟōm neñcē
kārai kaṭantavaṉ karai vantāṉ`,
    english:`The heron flies and reaches the mid-sea.
The toad comes; the wave comes to the shore.
O heart — whom are we searching for, wandering?
He who crossed the cloud-sea has come to shore.`, tamilUrai:`நாரை பறந்து நடு கடல் சேரும். தேரை வரும், திரை வரும் கரையில். ஆரை தேடி அலைகிறோம் நெஞ்சே — கார் கடந்தவன் கரை வந்தான்!`,
    altTranslation:`The heron flies and reaches the mid-sea. The toad arrives; the wave arrives at the shore. O heart — whom are we wandering to search? He who crossed the cloud-sea has come to shore!`, note:`The heron that flies to the mid-sea is a figure for the lover on the sea; the toad coming to shore (associated with rain) signals the seasonal change. The address to the own heart ('O heart, whom are we searching for?') catches the heart in the act of still searching even when the beloved has arrived — the heart's habit of longing does not immediately cease when the beloved returns.`
  },
  {
    num:150, tinai:`neytal`,
    sectionName:`நெய்தல்கலி`, sectionNameEnglish:`Neyṭalkali`,
    poet:`மருதனிலாநாகனார்`, poetEnglish:`Marutanilānākaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the shore`,
    turai:`ஏக்கம் கூறியது`, turaiEnglish:`speaks of longing`,
    tamil:`திரை வந்து திரை வந்து திரும்பும் கடல்
வரை வந்து வரை வந்து போகும் பகல்
மரை வந்து மரை வந்து மறையும் நிலவு
வர வந்தான் வர வந்தான் என் காதலன்`, transliteration:`Tirai vanttu tirai vanttu tirupum kaṭal
varai vanttu varai vanttu pōkum pakal
marai vanttu marai vanttu maṟaiyum nilavu
vara vantāṉ vara vantāṉ eṉ kātalaN`,
    english:`The sea that wave by wave comes and turns back —
the day that boundary by boundary comes and goes —
the moon that rise by rise comes and disappears:
he came to come, my love came to come!`, tamilUrai:`திரை வந்து திரை வந்து திரும்பும் கடல். வரை வந்து வரை வந்து போகும் பகல். மரை வந்து மரை வந்து மறையும் நிலவு. வர வந்தான், வர வந்தான் என் காதலன்!`,
    altTranslation:`The sea that wave by wave comes and returns — the day that stage by stage comes and departs — the moon that rise by rise comes and disappears: he came to come, he came to come, my love!`, note:`The triple repetition of cosmic rhythms — wave, daylight, moonrise — all come and return and come and return, building the expectation of cyclical return. The final announcement 'he came to come' uses a grammatical construction (infinitive + past tense) that expresses purpose fulfilled: he came in order to come, he came as he was meant to come. The kali metre's doubled exclamation seals the joy.`
  }
];

if(typeof window!=='undefined'){
  window.KL_DATA={
    sections:KL_SECTIONS,
    poems:KL_POEMS,
    totalPoems:150,
    totalSections:5,
  };
}
