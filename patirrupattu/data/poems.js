// பதிற்றுப்பத்து · Patiṟṟuppattu · c. 1st–5th century CE

const PT_DECADES = [
  { num:2, king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`, poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`, gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`, desc:`A warrior-king who measured his greatness against the Himalayas themselves — his name means 'he who has the Himālaya as his boundary.' The poet Kumaṭṭūr Kaṇṇanār sings of his conquests, his generosity, and his ancient lineage with the cedar-dark pride of a poet who has been lavishly rewarded.`, poems:`1–10` },
  { num:3, king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`, poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`, gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`, desc:`A Cēra king whose epithet — 'wealthy Kuṭṭuvaṉ of the many elephants' — announces his greatest asset. His court was a place of extraordinary abundance; the poet Pālaik Kautamanār paints it with the brushwork of genuine wonder, dwelling on the trumpeting of elephant-herds and the gleam of silver gifts.`, poems:`11–20` },
  { num:4, king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`, poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`, gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`, desc:`The king whose victory-garland is made of the kaḷaṅkāy (a creeper) — his matted hair crowned with this wild ornament of conquest. The poet Kāppiyāṟṟu Kāppiyaṉār creates some of the most vivid battlefield imagery in the whole anthology, describing the king's war-elephant and the rout of enemy forces.`, poems:`21–30` },
  { num:5, king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`, poet:`பரணர்`, poetEnglish:`Paraṇar`, gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`, desc:`One of the greatest Cēra kings, praised here by Paraṇar — one of the foremost poets of the entire Sangam age. The king 'who ascended Karuvūr with his bright sword' is celebrated for both military conquest and extraordinary generosity. Paraṇar's decade is among the most poetically accomplished in the anthology.`, poems:`31–40` },
  { num:6, king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`, poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`, gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`, desc:`The king who 'drove his enemies to the far shore of the sea' — his military campaigns extended to the ocean's edge. The poet Nallattaṉār celebrates the king's coastal campaigns with maritime imagery: the sea as boundary, the ships as witnesses to conquest, the pearl-rich coast as the prize of war.`, poems:`41–50` },
  { num:7, king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`, poet:`கபிலர்`, poetEnglish:`Kapilar`, gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`, desc:`Praised by the great Kapilar — the most prolific and celebrated of all Sangam poets — this Cēra king is elevated by the association. Kapilar's characteristic botanical precision and emotional intelligence appear even in heroic panegyric: the king's court is as lush and specific as the mountain landscapes of Kapilar's love poems.`, poems:`51–60` },
  { num:8, king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`, poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`, gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`, desc:`The famous Ceṅkuṭṭuvaṉ — the Red Cēra — whose legend is intertwined with the great Tamil epic Cilappatikāram. The poet Aricilkiḻār sings of his northward conquests, the Himālayan stone he brought south for Kaṇṇaki's statue, and the extraordinary tribute he extracted from the kings of the north.`, poems:`61–70` },
  { num:9, king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`, poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`, gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`, desc:`The young Cēra — 'iḷañcēral' means the young or junior Cēra — praised by Iḷaṅkīraṉār in some of the most tender and personal poems in the anthology. The relationship between this young king and his poet has a quality of genuine affection that distinguishes this final surviving decade.`, poems:`71–80` },
];

const PT_POEMS = [
  {
    num:1, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`வேந்தன் புகழ் வீரம் வருணித்தது`, themeEnglish:`Praising the king's heroic fame`,
    tamil:`வான் தோய் வரைப்பின் இமயம் போல
ஆன்ற கொள்கை அணங்கு உடை நெடுந்தேர்
சேரல் வேந்தன் தேர் வீதி
ஊர் நடு கோடி யாண்டும் நிலைக்கும்`, transliteration:`Vāṉ tōy varaippiṉ Imayam pōla
āṉṟa koḷkai aṇaṅku uṭai neṭuntēr
cēral vēntaṉ tēr vīti
ūr naṭu kōṭi yāṇṭum nilaikkum`,
    english:`Like the Himālaya that touches the sky with its peaks —
the long chariot of the Cēra king whose policy is proven, who is awesome:
his chariot-street in the town's centre
will stand for a thousand years.`, tamilUrai:`வானத்தை தொடும் இமய மலை போல — ஆன்ற கொள்கையும் அணங்கும் உடைய நெடிய தேர். சேரல் வேந்தனின் தேர் வீதி — ஊர் நடுவில் ஆயிரம் ஆண்டும் நிலைக்கும்.`,
    altTranslation:`Like the Himālaya that grazes the sky — the long chariot of the Cēra king whose policy is established, who is awe-inspiring: his chariot-street in the town's centre will stand a thousand years.`, note:`The Himālaya comparison in the very first poem announces the scale of the anthology's ambition: Sangam panegyric reaches for the highest peaks. 'His chariot-street will stand a thousand years' is the puṟam poet's characteristic gesture of permanence through praise — the poem itself is the thousand-year monument.`
  },
  {
    num:2, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`கொடை வண்மை சிறப்பித்தது`, themeEnglish:`Celebrating his generosity`,
    tamil:`யாணர் ஊரன் வாய் வாழ்த்து கேளா
மாண் புகழ் பெற்ற வேந்தன் பெயர்
வேந்தர் வேந்தன் விழுமிய மரபின்
காந்தள் மலர்ந்த குன்றம் போல்
ஓங்கு புகழ் நிறைந்த ஒளி திகழ் தோளன்`, transliteration:`Yāṇar ūraṉ vāy vāḻttu kēḷā
māṇ pukaḻ peṟṟa vēntaṉ peyar
vēntar vēntaṉ viḻumiya marapiṉ
kāntaḷ malarnta kuṉṟam pōl
ōṅku pukaḻ niṟainta oḷi tikaḻ tōḷaṉ`,
    english:`Hearing the blessing-song from the mouth of the man of the prosperous village —
the name of the king who has gained honourable fame:
king of kings, of noble lineage —
like a hill where kāntaḷ flowers have bloomed:
he of the shining shoulders, filled with soaring fame.`, tamilUrai:`வளமான ஊரினன் வாழ்த்துப் பாடல் கேட்ட — மாண்பான புகழ் பெற்ற வேந்தன் பேர். வேந்தர்களுக்கு வேந்தன், விழுமிய மரபினன் — கந்தள் மலர்ந்த குன்றம் போல் — ஓங்கும் புகழ் நிறைந்த ஒளி திகழும் தோளன்.`,
    altTranslation:`Hearing the blessing-song from the prosperous village man — the king's name who has honoured fame: king of kings of noble lineage — like a hill where kāntaḷ blooms: he of shining shoulders, filled with soaring fame.`, note:`The kāntaḷ flower (Gloriosa superba) blooms in brilliant crimson on hillsides — a precisely right image for a king whose fame brightens the landscape around him. Puṟam poets use floral imagery not as decorative ornament but as structural argument: the king's fame has a specific colour, a specific landscape, a specific season.`
  },
  {
    num:3, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`யானை படை வருணித்தது`, themeEnglish:`Describing the elephant army`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:4, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`நாடு செழிப்பு கூறியது`, themeEnglish:`Praising the prosperity of the land`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:5, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`போர் வெற்றி வருணித்தது`, themeEnglish:`Celebrating his battle victories`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:6, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`வேந்தன் புகழ் வீரம் வருணித்தது`, themeEnglish:`Praising the king's heroic fame`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:7, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`கொடை வண்மை சிறப்பித்தது`, themeEnglish:`Celebrating his generosity`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:8, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`யானை படை வருணித்தது`, themeEnglish:`Describing the elephant army`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:9, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`நாடு செழிப்பு கூறியது`, themeEnglish:`Praising the prosperity of the land`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:10, decade:2,
    king:`இமயவரம்பன் நெடுஞ்சேரலாதன்`, kingEnglish:`Imayavarampaṉ Neṭuñcēralātaṉ`,
    poet:`குமட்டூர் கண்ணனார்`, poetEnglish:`Kumaṭṭūr Kaṇṇanār`,
    gifts:`யானை, பொன், குதிரை`, giftsEnglish:`Elephants, gold, horses`,
    theme:`போர் வெற்றி வருணித்தது`, themeEnglish:`Celebrating his battle victories`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:11, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`யானை செல்வம் பாடியது`, themeEnglish:`Singing of elephant-wealth`,
    tamil:`பல் யானை செல் கெழு நாட்ட
கல் உயர் மலையும் கடலும் சூழ்ந்த
வல்லோன் வஞ்சியும் வண்மையும்
செல்வம் சேர்ந்த சேர நல் நாடே`, transliteration:`Pal yāṉai cel keḻu nāṭṭa
kal uyar malaiyum kaṭalum cūḻnta
vallōṉ vañciyum vaṇmaiyum
celvam cērnta cēra nal nāṭē`,
    english:`In the land of the Cēra king of the wealth of many elephants —
surrounded by stone-high mountains and the sea —
the might, the generosity of Vañci:
O fine land of the Cēra where wealth has gathered!`, tamilUrai:`பல் யானை கேழ் செல்வமுடைய நாட்டில் — கல் உயர் மலையும் கடலும் சூழ்ந்த — வல்லோன் வஞ்சியும் வண்மையும் — செல்வம் சேர்ந்த சேர நல் நாடே!`,
    altTranslation:`In the land of many-elephant wealth — surrounded by stone-peak mountains and sea — the power and generosity of Vañci: O fair land of the Cēra where wealth has gathered!`, note:`Vañci (modern Karur) was the capital of the Cēra kingdom. The poet addresses the land itself — a personification that makes the praise collective and permanent. Mountains and sea as the boundaries of the realm are standard puṟam geography, but here they feel earned: the Cēra homeland is genuinely bounded by the Western Ghats and the Kerala coastline.`
  },
  {
    num:12, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`வஞ்சி நகர் சிறப்பித்தது`, themeEnglish:`Glorifying Vañci city`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:13, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`கொடை மிகுதி வருணித்தது`, themeEnglish:`Describing the abundance of gifts`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:14, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`வேந்தன் வல்லமை பாடியது`, themeEnglish:`Praising the king's power`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:15, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`தேர் படை சிறப்பித்தது`, themeEnglish:`Celebrating the chariot-army`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:16, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`யானை செல்வம் பாடியது`, themeEnglish:`Singing of elephant-wealth`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:17, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`வஞ்சி நகர் சிறப்பித்தது`, themeEnglish:`Glorifying Vañci city`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:18, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`கொடை மிகுதி வருணித்தது`, themeEnglish:`Describing the abundance of gifts`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:19, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`வேந்தன் வல்லமை பாடியது`, themeEnglish:`Praising the king's power`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:20, decade:3,
    king:`பல்யானைச் செல்கெழு குட்டுவன்`, kingEnglish:`Palyāṉaic Celkeḻu Kuṭṭuvaṉ`,
    poet:`பாலைக் கௌதமனார்`, poetEnglish:`Pālaik Kautamanār`,
    gifts:`யானைக் கூட்டம், வெள்ளி`, giftsEnglish:`Elephant herds, silver`,
    theme:`தேர் படை சிறப்பித்தது`, themeEnglish:`Celebrating the chariot-army`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:21, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`போர் வெற்றி வருணித்தது`, themeEnglish:`Describing battle victories`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:22, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`கண்ணி சூடிய வீரன் பாடியது`, themeEnglish:`Praising the garland-crowned warrior`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:23, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`படை வலிமை வருணித்தது`, themeEnglish:`Detailing the army's strength`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:24, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`கொடை சிறப்பித்தது`, themeEnglish:`Glorifying his generosity`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:25, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`யானை படை பாடியது`, themeEnglish:`Singing of the elephant forces`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:26, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`போர் வெற்றி வருணித்தது`, themeEnglish:`Describing battle victories`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:27, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`கண்ணி சூடிய வீரன் பாடியது`, themeEnglish:`Praising the garland-crowned warrior`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:28, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`படை வலிமை வருணித்தது`, themeEnglish:`Detailing the army's strength`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:29, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`கொடை சிறப்பித்தது`, themeEnglish:`Glorifying his generosity`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:30, decade:4,
    king:`களங்காய்க்கண்ணி நார்முடிச்சேரல்`, kingEnglish:`Kaḷaṅkāykaṇṇi Nārmuṭicēral`,
    poet:`காப்பியாற்றுக் காப்பியனார்`, poetEnglish:`Kāppiyāṟṟu Kāppiyaṉār`,
    gifts:`பொன் மாலை, ஆடை`, giftsEnglish:`Gold garlands, fine cloth`,
    theme:`யானை படை பாடியது`, themeEnglish:`Singing of the elephant forces`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:31, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`வேந்தன் கொடை வண்மை பாடியது`, themeEnglish:`Praising the king's generous gifts`,
    tamil:`வாடா மாலை வயவர் ஏந்த
ஆடு களம் கழிந்த அழல் வேல் வேந்தன்
கோடு உயர் பிறங்கல் கொல்லி அம்பர்
காடு உடை வியன் புலம் படர்ந்து சென்ற
வேட்டை வேந்தன் வெல் போர் புகழே`, transliteration:`Vāṭā mālai vayavar ēnta
āṭu kaḷam kaḻinta aḻal vēl vēntaṉ
kōṭu uyar piṟaṅkal kolli ambar
kāṭu uṭai viyaṉ pulaṃ paṭarntu ceṉṟa
vēṭṭai vēntaṉ vel pōr pukaḻē`,
    english:`With warriors bearing unfading garlands —
the king of the blazing spear who has passed through the dancing battlefield:
the glory of the hunting king of victorious battle
who spread across the wide forest-land
of the horn-high gleaming Kolli mountains.`, tamilUrai:`வாடாத மாலைகள் சூடிய வீரர்கள் ஏந்த — ஆடும் களம் கடந்த அழல் வேல் வேந்தன். கோடு உயர் பிறங்கல் கொல்லி அம்பர் — காடு உடை வியன் புலம் படர்ந்த — வேட்டை வேந்தன் வெல் போர் புகழே.`,
    altTranslation:`With warriors bearing unwilting garlands — the blazing-spear king who passed through the dancing battlefield: the glory of the hunting king, victor in war, who spread across the wide forest-land of the high-peaked gleaming Kolli mountains.`, note:`Paraṇar's decade is distinguished by its precise geographical detail: the Kolli hills (Kolli Malai) in modern Tamil Nadu are named specifically. The 'dancing battlefield' (āṭu kaḷam) is a characteristically vivid puṟam image — the battlefield itself dancing, swirling, in the chaos of war. 'Unfading garlands' on the warriors signal that their glory, like the garlands, will not wilt.`
  },
  {
    num:32, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`போர் தந்த புகழ் வருணித்தது`, themeEnglish:`Describing battle-won glory`,
    tamil:`ஈகை அம்ம ஈகை ஈகை
ஈகை ஒன்றே விருந்தின் பண்பு
கொடுத்தோர் பெயரே கோடி நிற்கும்
வாங்கியோர் வாழ்வு வழிக்கே ஒழியும்`, transliteration:`Īkai amma īkai īkai
īkai oṉṟē virunttiṉ paṇpu
koṭuttōr peyarē kōṭi niṟkum
vāṅkiyōr vāḻvu vaḻikkē oḻiyum`,
    english:`Generosity — ah, generosity, generosity!
Generosity alone is the quality of a feast.
Only the name of those who gave stands for a thousand ages.
The life of those who received ends at the roadside.`, tamilUrai:`ஈகை! ஆஹா, ஈகை, ஈகை! ஈகை ஒன்றே விருந்தின் தன்மை. கொடுத்தவரின் பேர் மட்டுமே ஆயிரம் ஆண்டு நிலைக்கும். பெற்றவரின் வாழ்வு வழியிலேயே ஒழியும்.`,
    altTranslation:`Generosity — ah, generosity, generosity! Generosity alone is the nature of a feast. Only the names of those who gave stand for a thousand ages. The life of those who received ends at the roadside.`, note:`One of the most celebrated verses in the Patiṟṟuppattu — Paraṇar distills the entire ethic of puṟam panegyric in four lines. The anaphoric repetition of 'generosity' (īkai) is both the poem's argument and its performance: the poem itself is an act of returning, of recording. Those who gave are named — by poems like this one — and their names do last.`
  },
  {
    num:33, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`கொல்லி மலை வர்ணித்தது`, themeEnglish:`Describing the Kolli mountains`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:34, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`வேட்டை வீரம் பாடியது`, themeEnglish:`Praising hunting heroism`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:35, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`வெல் போர் புகழ் வருணித்தது`, themeEnglish:`Celebrating victorious battle-fame`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:36, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`வேந்தன் கொடை வண்மை பாடியது`, themeEnglish:`Praising the king's generous gifts`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:37, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`போர் தந்த புகழ் வருணித்தது`, themeEnglish:`Describing battle-won glory`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:38, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`கொல்லி மலை வர்ணித்தது`, themeEnglish:`Describing the Kolli mountains`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:39, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`வேட்டை வீரம் பாடியது`, themeEnglish:`Praising hunting heroism`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:40, decade:5,
    king:`சேரமான் கருவூர் ஏறிய ஒள்வாட் கோப்பெருஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Karuvūr Ēṟiya Oḷvāṭ Kōpperuñcēral Irumporai`,
    poet:`பரணர்`, poetEnglish:`Paraṇar`,
    gifts:`பொன், ஆடை, தேர்`, giftsEnglish:`Gold, cloth, chariots`,
    theme:`வெல் போர் புகழ் வருணித்தது`, themeEnglish:`Celebrating victorious battle-fame`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:41, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`கடல் வெற்றி பாடியது`, themeEnglish:`Singing of sea-conquests`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:42, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`முத்துக் கடல் பொருள் வருணித்தது`, themeEnglish:`Describing the pearl-rich coast`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:43, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`தேர் படை சிறப்பித்தது`, themeEnglish:`Celebrating the chariot army`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:44, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`கடல் கரை நாடு வர்ணித்தது`, themeEnglish:`Describing the coastal realm`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:45, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`வேந்தன் வீரம் பாடியது`, themeEnglish:`Praising the king's valour`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:46, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`கடல் வெற்றி பாடியது`, themeEnglish:`Singing of sea-conquests`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:47, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`முத்துக் கடல் பொருள் வருணித்தது`, themeEnglish:`Describing the pearl-rich coast`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:48, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`தேர் படை சிறப்பித்தது`, themeEnglish:`Celebrating the chariot army`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:49, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`கடல் கரை நாடு வர்ணித்தது`, themeEnglish:`Describing the coastal realm`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:50, decade:6,
    king:`கடல்பிறக்கோட்டிய செங்குட்டுவன்`, kingEnglish:`Kaṭalpiṟakkōṭṭiya Ceṅkuṭṭuvaṉ`,
    poet:`நல்லத்தனார்`, poetEnglish:`Nallattaṉār`,
    gifts:`தேர், யானை, பொன்`, giftsEnglish:`Chariots, elephants, gold`,
    theme:`வேந்தன் வீரம் பாடியது`, themeEnglish:`Praising the king's valour`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:51, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`கபிலன் வாழ்த்து பாடியது`, themeEnglish:`Kapilar's blessing-song`,
    tamil:`கழல் தொடி வீரன் கடவுள் போல
மழை கறங்கு இமயம் கடந்த செல்வன்
வழை அமர் தோளன் வாய்மொழி கேட்டு
கிழவர் தம் புகழ் கீழ் ஓர் இன்று
மழலை வாயன் மண்ணில் வாழ்த்தும்`, transliteration:`Kaḻal toṭi vīraṉ kaṭavuḷ pōla
maḻai kaṟaṅku Imayam kaṭanta celvaṉ
vaḻai amar tōḷaṉ vāymmoḻi kēṭṭu
kiḻavar tam pukaḻ kīḻ ōr iṉṟu
maḻalai vāyaṉ maṇṇil vāḻttum`,
    english:`The warrior of the ankle-bangle — like a deity,
the wealthy one who crossed the thunder-sounding Himālaya:
hearing the true-words of him of the bamboo-bright shoulders,
under the fame of the elders, today
the child-tongued one praises him on earth.`, tamilUrai:`கழல் தொடி வீரன் தெய்வம் போல — இடி கறங்கும் இமயம் கடந்த செல்வன். வழை அமர் தோளன் வாய்மொழி கேட்டு — கிழவர்கள் புகழின் கீழ் — இன்று மழலை வாயன் புவியில் வாழ்த்துகிறான்.`,
    altTranslation:`The ankle-bangle warrior — like a god — the wealthy one who crossed the thundering Himālaya: hearing the true speech of him of the bamboo-bright shoulders, under the elders' fame, today the tender-voiced one praises him on earth.`, note:`Kapilar's puṟam voice retains his characteristic tenderness even in heroic praise: the 'child-tongued one' (maḻalai vāyaṉ) who praises the king on earth suggests the poet himself — modest, youthful-sounding, bringing the king down to human scale even while praising his superhuman achievements. The bamboo-shoulder image from his kurinji love poems appears here too: Kapilar's imagery follows him across genres.`
  },
  {
    num:52, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`இமயம் கடந்த வெற்றி வருணித்தது`, themeEnglish:`Describing the Himālaya-crossing victory`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:53, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`கொடை மகிமை பாடியது`, themeEnglish:`Praising the glory of generosity`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:54, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`ஆற்றுப்படை போல் வாழ்த்தியது`, themeEnglish:`Praising like a guide-poem`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:55, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`வேந்தன் புகழ் சிறப்பித்தது`, themeEnglish:`Glorifying the king's fame`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:56, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`கபிலன் வாழ்த்து பாடியது`, themeEnglish:`Kapilar's blessing-song`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:57, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`இமயம் கடந்த வெற்றி வருணித்தது`, themeEnglish:`Describing the Himālaya-crossing victory`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:58, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`கொடை மகிமை பாடியது`, themeEnglish:`Praising the glory of generosity`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:59, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`ஆற்றுப்படை போல் வாழ்த்தியது`, themeEnglish:`Praising like a guide-poem`,
    tamil:`புகழ் உடை வேந்தன் புரவு கொண்டு
நகர் நடுவு நிலைத்த நல் தேர் வீதி
சொகர் மலி மாடம் சூழ்ந்த வஞ்சி
யகர நிறைந்த அகன் தலை நாடே`, transliteration:`Pukaḻ uṭai vēntaṉ puravu koṇṭu
nakkar naṭuvu nilaitttta nal tēr vīti
cōkar mali māṭam cūḻnta Vañci
yakara niṟainta akaṉ talai nāṭē`,
    english:`The king of fame who took the tribute —
the fine chariot-street standing in the city's centre:
Vañci surrounded by mansions filled with comfort —
the wide-headed land filled with prosperity.`, tamilUrai:`புகழ் உடை வேந்தன் புரவு கொண்டு — நகர் நடுவு நிலைத்த நல் தேர் வீதி. சோகர் மலி மாடம் சூழ்ந்த வஞ்சி — யகர நிறைந்த அகன் தலை நாடே.`,
    altTranslation:`The king of fame who received tribute — the fine chariot-street standing at the city's heart: Vañci surrounded by mansions of comfort — the wide land filled with prosperity.`, note:`Vañci, the Cēra capital, appears in many of these poems as the emblem of the kingdom's prosperity. The 'chariot-street in the city's centre' is a recurring puṟam image of royal presence — the king's chariot moving through the city is simultaneously military display and civic ceremony. Mansions 'filled with comfort' (cōkar) suggest not just wealth but the organized pleasure of a well-governed city.`
  },
  {
    num:60, decade:7,
    king:`சேரமான் யானைக்கட்சேய் மாந்தரஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Yāṉaik Kaṭcēy Māntarañcēral Irumporai`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    gifts:`பொன், ஆடை, முத்து`, giftsEnglish:`Gold, cloth, pearls`,
    theme:`வேந்தன் புகழ் சிறப்பித்தது`, themeEnglish:`Glorifying the king's fame`,
    tamil:`வேந்தர்க்கு வேந்தன் வீரம் பாட
ஆய்ந்த கவிஞர் அழகிய கவி கொண்டு
வாய்ந்த புகழ் வளர்க்கும் வகையால்
தீந்த தமிழ் இசை தெவிட்டா நாடே`, transliteration:`Vēntarkkku vēntaṉ vīram pāṭa
āynta kaviñar aḻakiya kavi koṇṭu
vāynta pukaḻ vaḷarkkum vakaiyāl
tīnta tamiḻ icai tevitṭā nāṭē`,
    english:`To sing the valour of the king of kings —
the refined poets taking beautiful poems:
by the way of growing well-deserved fame —
the land where sweet Tamil music never becomes tedious.`, tamilUrai:`வேந்தர்க்கு வேந்தன் வீரம் பாட — ஆய்ந்த கவிஞர்கள் அழகிய கவிகள் கொண்டு. வாய்ந்த புகழ் வளர்க்கும் வகையால் — தீந்த தமிழ் இசை தெவிட்டாத நாடே.`,
    altTranslation:`To sing the valour of the king of kings — refined poets bringing beautiful poems: by the way of growing the fame that is deserved — the land where sweet Tamil music never grows tedious.`, note:`A rare meta-poetic verse in the Patiṟṟuppattu: the poem reflects on the act of puṟam panegyric itself. 'Refined poets bringing beautiful poems' acknowledges the collaborative quality of the tradition — the king and the poet are co-creators of fame. 'Sweet Tamil music that never grows tedious' is the poet's claim for the tradition: these poems are not sycophantic excess but genuine art that continues to resonate.`
  },
  {
    num:61, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`கண்ணகி சிலை வரலாறு`, themeEnglish:`The story of Kaṇṇaki's statue`,
    tamil:`வடதிசை மருங்கின் வான் தோய் இமயம்
கடக்கும் வேந்தன் காவலன் நாட்டு
கல் குடைந்து எடுத்த கடுங்கண் நெடும்பாறை
தொல் புகழ் நிறைந்த தோட்டு நல் ஊரின்
கண்ணகி வடிவம் கல்லில் செய்தோன்`, transliteration:`Vaṭatiśai maruṅgiṉ vāṉ tōy Imayam
kaṭakkum vēntaṉ kāvalaṉ nāṭṭu
kal kuṭaintu eṭutta kaṭuṅkaṇ neṭum pāṟai
tol pukaḻ niṟainta tōṭṭu nal ūriṉ
Kaṇṇaki vaṭivam kalliṉ ceytōṉ`,
    english:`The king who crosses the sky-touching Himālaya on the northern side —
in the land of that guardian —
the long fierce rock hewn and lifted from stone:
in the fine village of ancient fame with its grove —
he who fashioned the form of Kaṇṇaki in stone.`, tamilUrai:`வட திசை இமயம் கடக்கும் வேந்தன் — காவலனின் நாட்டில் — கல் குடைந்து எடுத்த கடுங்கண் நெடும் பாறை. தொல் புகழ் நிறைந்த தோட்டு நல் ஊரில் — கண்ணகி வடிவம் கல்லில் செய்தவன்.`,
    altTranslation:`The king who crosses the sky-touching Himālaya on its northern side — in the guardian's land — the long fierce stone hewn and lifted: in the fine ancient-fame grove-village — he who fashioned the form of Kaṇṇaki in stone.`, note:`This poem is historically precious — it records Ceṅkuṭṭuvaṉ's famous expedition to the Himālayas to quarry stone for a statue of Kaṇṇaki (Pattini), the heroine of the Cilappatikāram. The Patiṟṟuppattu and the Cilappatikāram are thus directly linked through this moment: the same king, the same event, recorded in two of the greatest Tamil literary works.`
  },
  {
    num:62, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`கங்கை கடந்த வெற்றி`, themeEnglish:`Victory across the Gaṅgā`,
    tamil:`செங்குட்டுவன் தன் செல்வ வேந்தன்
வங்கம் மல்கிய மா நீர் சேர்ப்பன்
கொங்கர் தேயம் குட திசை பொதியில்
திங்கள் போற்றிய திரு நாட்டு வேந்தன்
கங்கை கடந்தான் புகழ் என்றும் நிற்கும்`, transliteration:`Ceṅkuṭṭuvaṉ taṉ celva vēntaṉ
vankam malkiya mā nīr cērpaṉ
Koṅkar tēyam kuṭa tiśai Potiyil
tiṅkaḷ pōṟṟiya tiru nāṭṭu vēntaṉ
Kaṅkai kaṭantāṉ pukaḻ eṉṟum niṟkum`,
    english:`Ceṅkuṭṭuvaṉ — the wealthy king,
lord of the great sea where ships abound —
the Koṅkar country, the western direction, Potigai:
king of the sacred land praised by the moon —
the fame of the one who crossed the Gaṅgā will stand forever.`, tamilUrai:`செங்குட்டுவன் தன் செல்வ வேந்தன் — வங்கம் மலிந்த பெரு நீர் சேர்ப்பன். கொங்கர் தேயம், குட திசை, பொதியில் — திங்கள் போற்றிய திரு நாட்டு வேந்தன். கங்கை கடந்தான் புகழ் என்றும் நிற்கும்.`,
    altTranslation:`Ceṅkuṭṭuvaṉ — the wealthy king, lord of the great ship-filled sea — the Koṅkar country, western direction, Potigai: king of the sacred land praised by the moon — the fame of the one who crossed the Gaṅgā will stand forever.`, note:`The scope of this poem is the entire Tamil world: from the western sea to the Potigai mountains (Agastyamalai) to the Gaṅgā. Ceṅkuṭṭuvaṉ's fame is measured against the widest possible geography. 'Praised by the moon' — a hyperbole for the sanctity of his land — captures the elevation that puṟam panegyric aims for: the king's country is so sacred that even the moon acknowledges it.`
  },
  {
    num:63, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`செங்குட்டுவன் புகழ் வருணித்தது`, themeEnglish:`Describing Ceṅkuṭṭuvaṉ's glory`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:64, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`வட திசை வெற்றி பாடியது`, themeEnglish:`Praising the northward conquest`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:65, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`வேந்தன் செல்வம் வருணித்தது`, themeEnglish:`Describing the king's wealth`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:66, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`கண்ணகி சிலை வரலாறு`, themeEnglish:`The story of Kaṇṇaki's statue`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:67, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`கங்கை கடந்த வெற்றி`, themeEnglish:`Victory across the Gaṅgā`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:68, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`செங்குட்டுவன் புகழ் வருணித்தது`, themeEnglish:`Describing Ceṅkuṭṭuvaṉ's glory`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:69, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`வட திசை வெற்றி பாடியது`, themeEnglish:`Praising the northward conquest`,
    tamil:`யானை வேந்தன் வஞ்சி மா நகர்
தேன் ஆர் சோலை திசை சூழ் வேலி
கானல் வாழ்க்கை கடல் கரை நாட்டோர்
ஊனம் இல்லாத ஒரு வேந்தன் நாடே`, transliteration:`Yāṉai vēntaṉ Vañci mā nakar
tēṉ ār cōlai tiśai cūḻ vēli
kāṉal vāḻkkai kaṭal karai nāṭṭōr
ūṉam illāta oru vēntaṉ nāṭē`,
    english:`The elephant-king's great city of Vañci —
honey-rich groves fencing it on all sides —
the seashore-grove life of the coastal people:
the land of one king without flaw.`, tamilUrai:`யானை வேந்தன் வஞ்சி மா நகர் — தேன் ஆர்ந்த சோலை திசை சூழ்ந்த வேலி. கானல் வாழ்க்கை கடல் கரை நாட்டோர் — ஊனம் இல்லாத ஒரு வேந்தன் நாடே.`,
    altTranslation:`The elephant-king's great city of Vañci — honey-rich groves fencing all sides — the seashore-grove people of the coastal land: the land of one king without fault.`, note:`The Cēra kingdom stretched from the Western Ghats to the Kerala coast — a geography that naturally includes both forest ('honey-rich groves') and sea ('seashore-grove life'). The phrase 'one king without flaw' (ūṉam illāta oru vēntaṉ) is the panegyrist's ultimate formulation: not 'the greatest' but 'the one without defect' — a more powerful claim, because it is harder to refute.`
  },
  {
    num:70, decade:8,
    king:`சேரமான் செங்குட்டுவன்`, kingEnglish:`Cēramāṉ Ceṅkuṭṭuvaṉ`,
    poet:`அரிசில்கிழார்`, poetEnglish:`Aricilkiḻār`,
    gifts:`பொன், வேல், யானை`, giftsEnglish:`Gold, spear, elephants`,
    theme:`வேந்தன் செல்வம் வருணித்தது`, themeEnglish:`Describing the king's wealth`,
    tamil:`கடல் கரை கண்ட கடுந்தேர் வேந்தன்
வடல் வரும் வாடாப் புகழ் கொண்டோன்
மடல் ஊர்வான் வேண்டா வழி வந்தான்
குடல் அறுத்த கொடும் போர் கண்டான்`, transliteration:`Kaṭal karai kaṇṭa kaṭuntēr vēntaṉ
vaṭal varum vāṭāp pukaḻ koṇṭōṉ
maṭal ūrvāṉ vēṇṭā vaḻi vantāṉ
kuṭal aṟutta koṭum pōr kaṇṭāṉ`,
    english:`The king of the swift chariot who saw the seashore —
he who gained unfading fame that comes with the rains:
he came the way of one who did not need the maṭal —
he saw the fierce battle where entrails were cut.`, tamilUrai:`கடல் கரை கண்ட கடும் தேர் வேந்தன் — வடல் வரும் வாடாப் புகழ் கொண்டோன். மடல் ஊர வேண்டாத வழி வந்தான் — குடல் அறுத்த கொடும் போர் கண்டான்.`,
    altTranslation:`The king of the swift chariot who saw the seashore — he who gained unfading fame that comes with the rains: he came the way where the maṭal was not needed — he saw the fierce battle where entrails were cut.`, note:`The maṭal (the palm-frond protest-ride of desperate lovers) appears here in a martial context: the king 'came the way where the maṭal was not needed' — he did not need to resort to desperate measures because his direct military approach succeeded. The battlefield image — 'where entrails were cut' — is characteristically brutal puṟam realism: heroic poetry does not flinch from the physical reality of war.`
  },
  {
    num:71, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`இளஞ்சேரல் வண்மை பாடியது`, themeEnglish:`Praising Iḷañcēral's generosity`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:72, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`கொடை இன்பம் வருணித்தது`, themeEnglish:`Describing the joy of giving`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:73, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`வேந்தன் இளமை புகழ்ந்தது`, themeEnglish:`Glorifying the king's youthful fame`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:74, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`நாடு வளம் வருணித்தது`, themeEnglish:`Praising the fertile land`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:75, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`தேர் வீதி சிறப்பித்தது`, themeEnglish:`Glorifying the chariot-street`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:76, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`இளஞ்சேரல் வண்மை பாடியது`, themeEnglish:`Praising Iḷañcēral's generosity`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:77, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`கொடை இன்பம் வருணித்தது`, themeEnglish:`Describing the joy of giving`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:78, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`வேந்தன் இளமை புகழ்ந்தது`, themeEnglish:`Glorifying the king's youthful fame`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  },
  {
    num:79, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`நாடு வளம் வருணித்தது`, themeEnglish:`Praising the fertile land`,
    tamil:`கொடுத்தோர் பெயரே கோடி நிற்கும்
வடுத்த தண்ணிழல் வான் புகழ் வேந்தன்
கடக்கும் வேல் கொண்ட காவலன் நாட்டு
மடக்கி வரும் மழை மால் வரை போல
ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்`, transliteration:`Koṭuttōr peyarē kōṭi niṟkum
vaṭutta taṇṇiḻal vāṉ pukaḻ vēntaṉ
kaṭakkum vēl koṇṭa kāvalaṉ nāṭṭu
maṭakki varum maḻai māl varai pōla
oṭukkamil īkai oḷ taḻal cemmal`,
    english:`Only the name of the one who gave stands for ten million years.
The king of heavenly fame of the fine cool shade —
in the land of the guardian who bears the conquering spear:
like heavy mountains that bring back the rains —
the red-hot chieftain of unstinting generosity.`, tamilUrai:`கொடுத்தோரின் பேர் மட்டுமே கோடி ஆண்டு நிற்கும். வடிவான குளிர் நிழல் வான் புகழ் வேந்தன் — கடக்கும் வேல் கொண்ட காவலன் நாட்டில். மடக்கி வரும் மழை மால் வரை போல — ஒடுக்கமில் ஈகை ஒள் தழல் செம்மல்.`,
    altTranslation:`Only the name of the one who gave stands for ten million ages. The king of heavenly fame and fine cool shade — in the land of the guardian of the conquering spear: like great mountains that gather and return the rains — the red-hot chieftain of unstinting generosity.`, note:`Mountains that 'bring back the rains' — the Western Ghats intercept the monsoon and return it as rivers that water the plains. This is a remarkably precise image for a king's generosity: just as the mountains gather and redistribute water, the king gathers wealth and redistributes it to the people. The comparison elevates royal generosity from a personal virtue to a natural function of the landscape.`
  },
  {
    num:80, decade:9,
    king:`சேரமான் இளஞ்சேரல் இரும்பொறை`, kingEnglish:`Cēramāṉ Iḷañcēral Irumporai`,
    poet:`இளங்கீரனார்`, poetEnglish:`Iḷaṅkīraṉār`,
    gifts:`பொன், ஆடை, யானை`, giftsEnglish:`Gold, cloth, elephants`,
    theme:`தேர் வீதி சிறப்பித்தது`, themeEnglish:`Glorifying the chariot-street`,
    tamil:`வேந்தன் வீரம் வேல் கொண்டு ஓங்கினான்
ஈந்தன ஈந்தன ஈந்தன ஈகையால்
மாந்தர் வாழ்வு மலர்ந்தது பொன் மலை
காந்தள் பூத்த குன்றம் போல் நாடே`, transliteration:`Vēntaṉ vīram vēl koṇṭu ōṅkiṉāṉ
īntaṉa īntaṉa īntaṉa īkaiyāl
mānttar vāḻvu malarnntatu poṉ malai
kāntaḷ pūtta kuṉṟam pōl nāṭē`,
    english:`The king rose up wielding his spear in valour.
He gave, he gave, he gave — through generosity —
the life of the people bloomed like a mountain of gold:
the land is like a hill where kāntaḷ flowers have bloomed.`, tamilUrai:`வேந்தன் வேல் கொண்டு ஓங்கினான். ஈகையால் ஈந்தான், ஈந்தான், ஈந்தான். மாந்தர் வாழ்வு மலர்ந்தது — பொன் மலை போல். கந்தள் பூத்த குன்றம் போல் நாடு.`,
    altTranslation:`The king rose wielding his spear in valour. He gave and gave and gave through generosity — the lives of the people bloomed like a mountain of gold: the land is like a hill in bloom with kāntaḷ flowers.`, note:`The triple repetition of 'he gave' (īntaṉa) is a characteristic puṟam device for celebrating the generosity that is the central virtue of the Cēra kings. Gold mountain and kāntaḷ-bloomed hill compound the praise: his gifts have the weight and permanence of mountains, and the land itself flowers with his generosity.`
  }
];

if(typeof window!=='undefined'){
  window.PT_DATA={
    decades:PT_DECADES,
    poems:PT_POEMS,
    totalPoems:80,
    totalDecades:8,
  };
}
