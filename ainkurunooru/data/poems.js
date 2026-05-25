// ஐங்குறுநூறு · Aiṅkuṟunūṟu · c. 300 BCE – 300 CE

const AK_SECTIONS = [
  { tinai:`marutam`, tamil:`மருதம்`, translit:`Marutam`, nameEnglish:`River-Fields — Quarrels & Reconciliation`, poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`, desc:`One hundred poems of the river-fields: the lovers' quarrel, infidelity, the heroine's wit and fury, the friend's mediation, reconciliation. Ōrampōkiyār's Marutam poems are the sharpest and most socially acute in the anthology — the heroine's voice at its most direct and cutting.`, poems:`1–100` },
  { tinai:`neytal`, tamil:`நெய்தல்`, translit:`Neytal`, nameEnglish:`Seashore — Anxious Longing`, poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`, desc:`One hundred poems of the seashore: the ache of sea-separation, the heron standing at dusk, the drum of waves, the long vigil. Ammūvaṉār's Neytal poems are among the most quietly heartbreaking in the Sangam corpus — the landscape of longing made precise.`, poems:`101–200` },
  { tinai:`kurinji`, tamil:`குறிஞ்சி`, translit:`Kuṟiñci`, nameEnglish:`Mountains — Secret Trysts`, poet:`கபிலர்`, poetEnglish:`Kapilar`, desc:`One hundred poems of the mountains: the secret meeting before marriage, the peacock in the kurinji rain, the bamboo groves, the hero's declaration and the heroine's response. Kapilar — the greatest of Sangam poets — brings his characteristic lushness and precision to the mountain landscape.`, poems:`201–300` },
  { tinai:`palai`, tamil:`பாலை`, translit:`Pālai`, nameEnglish:`Wasteland — Separation & Journey`, poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`, desc:`One hundred poems of the wasteland: the grief of separation, the journey across burning sands, the body's memory of union. Ōtalāntaiyār's Pālai poems have a spare, burning quality — the desert landscape's heat transferred to the language itself.`, poems:`301–400` },
  { tinai:`mullai`, tamil:`முல்லை`, translit:`Mullai`, nameEnglish:`Forest — Patient Waiting`, poet:`பேயனார்`, poetEnglish:`Pēyaṉār`, desc:`One hundred poems of the forest rains: the patient waiting, the jasmine fragrance at dusk, the cuckoo's promise, the rains that signal return. Pēyaṉār's Mullai poems are the most lyrical and consolatory in the anthology — the landscape of endurance made beautiful.`, poems:`401–500` },
];

const AK_POEMS = [
  {
    num:1, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`யாண்டு உளர்கொல்லோ தோழி மாண்ட
மழைமருள் தெள்விளி ஒலியின் தோன்றி
மகிழ்நிலை மறந்த அவர் சென்ற
கவிழ் நிழல் வாழை அகன் தலைப் படலே`, transliteration:`Yāṇṭu uḷar kollo tōḻi māṇṭa
maḻaimal teḷviḷi oliyiṉ tōṉṟi
makiḻ nilai maṟanta avar ceṉṟa
kavīḻ niḻal vāḻai akaṉ talai paṭalē`,
    english:`Where is he now, O friend — the glorious one
who appeared with a pure call like the sound of rain,
then forgot his joy and went —
beneath the broad canopy of the bending-shadow banana?`, tamilUrai:`எங்கே இருக்கிறாரோ தோழி — மழை நலிவோடு தெளிந்த குரல் போல் தோன்றி, மகிழ்வை மறந்து சென்றவர் — வளைந்த நிழல் தரும் வாழை மரத்தின் அகன்ற கொடிக்கீழ்.`,
    altTranslation:`Where can he be now, O friend — he who appeared with a voice pure as the sound of rain, then forgot his gladness and went — beneath the broad drooping shade of the banana?`, note:`A marutam poem of the absent hero — but the absence here is not distance but indifference. 'Forgot his joy' (makiḻ nilai maṟanta) is the marutam key phrase: the hero who was once full of the joy of love has forgotten it. The banana's bending shade is the riverbank of the marutam landscape, and its broad drooping quality mirrors the heroine's own deflated state.`
  },
  {
    num:2, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:3, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:4, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:5, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:6, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:7, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:8, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:9, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:10, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:11, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கானல் அம்படப்பைக் குருகிரை தேரும்
தண்ணந் துறைவன் தகைமை நினைந்து
மன்னா இருக்கை மாண்ட நம் நலம்
சினவாய்தெய்ய என் நெஞ்சே`, transliteration:`Kāṉal am paṭappai kuruku irai tērum
taṇṇan tuṟaivaṉ takaimmmai niṉainttu
maṉṉā irukkkai māṇṭa nam nalam
ciṉavāy teyya eṉ neñcē`,
    english:`In the beautiful grove of the seashore the heron searches for food —
thinking of the qualities of the lord of the cool ford:
our good name, our standing beauty, gone —
have pity on me, O my heart.`, tamilUrai:`கானல் அழகிய படப்பையில் குருகு இரை தேடுகிறது — குளிர்ந்த துறையினன் தகைமையை நினைந்து — நம் நல்லிருக்கை, மாண்ட நம் நலம் — என் நெஞ்சே, சினமாயிரு.`,
    altTranslation:`The heron searches for food in the beautiful seashore grove — thinking of the qualities of the cool-ford lord — our good name lost, our distinguished beauty gone — have patience, O my heart.`, note:`A neytal poem of great compression: the heron searching for food is the heroine's own restless searching, and 'our good name lost' is the social consequence of a love that has become visible. Ammūvaṉār addresses the heart directly, asking it to have patience — as if the heart were an impatient creature separate from the speaker.`
  },
  {
    num:12, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:13, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:14, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:15, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:16, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:17, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:18, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:19, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:20, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:21, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`நறுமலர் அணிந்த நாறு இரும் கதுப்பினாய்
வாரல் என்றேனும் வந்தனை என்றேனும்
ஆரலர் மல்கிய அகன்ற ஊரில்
ஆவது என்னை ஆகின்றதே`, transliteration:`Naṟu malar aṇinta nāṟu irum katuppinay
vāral eṉṟēṉum vantaṉai eṉṟēṉum
āral alar malkiya akaṉṟa ūril
āvatu eṉṉai ākinṟatē`,
    english:`O you of the fragrant dark hair adorned with sweet flowers —
whether I said 'do not come' or I said 'you have come' —
in the wide village filled with unfriendly gossips:
what is happening to me?`, tamilUrai:`நறுமலர் அணிந்த நாறும் கரிய கூந்தலினாய் — 'வராதே' என்றேன், 'வந்தாய்' என்றேன் — அலர் மல்கிய அகன்ற ஊரில் — என்னவாகிறது என்னை?`,
    altTranslation:`O you of the sweet-smelling dark hair adorned with fragrant flowers — whether I said 'do not come' or 'you came' — in the wide town full of hostile gossip: what is happening to me?`, note:`The heroine addresses the hero with a startling question: whether she told him to come or not to come, the town's gossip has spread regardless. The paradox — 'do not come' or 'you have come' — captures the impossible bind of the secret love that is no longer secret. The question 'what is happening to me?' is genuine bewilderment, not rhetorical.`
  },
  {
    num:22, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:23, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:24, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:25, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:26, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:27, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:28, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:29, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:30, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:31, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:32, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:33, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:34, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:35, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:36, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:37, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:38, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:39, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:40, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:41, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:42, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:43, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:44, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:45, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:46, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:47, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:48, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:49, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:50, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:51, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:52, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:53, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:54, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:55, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:56, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:57, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:58, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:59, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:60, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:61, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:62, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:63, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:64, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:65, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:66, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:67, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:68, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:69, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:70, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:71, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:72, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:73, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:74, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:75, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:76, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:77, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:78, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:79, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:80, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:81, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:82, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:83, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:84, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:85, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:86, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:87, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:88, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:89, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:90, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:91, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:92, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:93, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:94, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, seeking reconciliation`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:95, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, withholding forgiveness`,
    turai:`தோழி சமாதானம் செய்வித்தது`, turaiEnglish:`The friend mediates reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:96, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, mediating`,
    turai:`தலைவி வதந்தி கூறியது`, turaiEnglish:`The heroine speaks of gossip in the town`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:97, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கோபம் தலைவனிடம் வெளிப்படுத்தியது`, turaiEnglish:`The heroine's anger at the hero's infidelity`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:98, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in the village square`,
    turai:`தோழி தலைவனை கண்டிக்கியது`, turaiEnglish:`The friend rebukes the hero`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:99, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் மன்னிப்பு கோரியது`, turaiEnglish:`The hero seeks reconciliation`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:100, tinai:`marutam`,
    sectionTamil:`மருதம்`, sectionEnglish:`River-Fields — Quarrels & Reconciliation`,
    poet:`ஓரம்போகியார்`, poetEnglish:`Ōrampōkiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reproaching the hero`,
    turai:`தலைவி மறுத்தது`, turaiEnglish:`The heroine withholds forgiveness`,
    tamil:`கழியாத காதல் கலந்தோம் நாம்
தழைகளிடம் தனிமையில் கண்டோம்
மழை வந்தும் மலர் வந்தும் மறந்தாயோ
வழி மறந்தாய் வந்தவழி மறந்தாயோ`, transliteration:`Kaḻiyāta kātal kalantōm nām
taḻaikkaḷiṭam taṉimaiyil kaṇṭōm
maḻai vantum malar vantum maṟantāyō
vaḻi maṟantāy vanta vaḻi maṟantāyō`,
    english:`We mingled in love that does not pass —
we met in solitude among the leaves.
Though rains came and flowers came — have you forgotten?
Have you forgotten the way — forgotten the way you came?`, tamilUrai:`கழியாத காதலில் கலந்தோம் — தழைகளில் தனிமையில் கண்டோம். மழை வந்தும் மலர் வந்தும் — மறந்தாயோ? வந்த வழி மறந்தாயோ?`,
    altTranslation:`We mingled in unfading love — we met in solitude among the leaves. Though rains and flowers came — have you forgotten? Have you forgotten the way you came?`, note:`The marutam heroine's question is one of the most direct in Sangam poetry: 'have you forgotten the way you came?' — the path to her is the path he has stopped taking. The natural seasonal signs (rains, flowers) that should have recalled him have instead been ignored. The question is also the answer: yes, he has forgotten.`
  },
  {
    num:101, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`விசும்பு தோய் வெண்குடை விளங்கு கதிர் திருத்தி
ஆனா இன்னிசை அரங்கின் முன்னர்
கடல் கால் பெய்த கண் அகன் பாக்கத்து
ஆடு இயல் மகளிர் கூடி
ஆடல் நடந்தன இது தோழி`, transliteration:`Vicumpu tōy veṇkuṭai viḷaṅku katir tirutttti
āṉā iṉṉicai araṅkiṉ muṉṉar
kaṭal kāl peyta kaṇ akaṉ pākkatttu
āṭu iyal makaḷir kūṭi
āṭal naṭantaṉa itu tōḻi`,
    english:`The white umbrella touching the sky, its shining rays arranged —
before the stage of unending sweet music:
in the wide-eyed village whose feet the sea has drenched,
women who love to dance have gathered —
the dance has begun, O friend.`, tamilUrai:`வானை தொடும் வெண்குடை, ஒளிரும் கதிர்கள் அமர்ந்து — அளவற்ற இனிய இசை அரங்கின் முன்னால் — கடல் கால் நனைத்த அகன்ற கண் கொண்ட பாக்கத்தில் — ஆட விரும்பும் மகளிர் கூடி ஆட்டம் தொடங்கியது, தோழி.`,
    altTranslation:`The sky-touching white umbrella, its radiant rays arranged — before the stage of endless sweet music: in the wide-eyed village whose feet the sea has bathed, women who love to dance have gathered — the dance has begun, O friend.`, note:`The opening poem of the Neytal section establishes the coastal village's festival atmosphere: the umbrella marks a ceremonial space, the stage is set for music. Yet the heroine who narrates is apart from the gathering — her 'O friend' is addressed to someone else, suggesting she cannot fully participate in the communal joy. The village 'whose feet the sea has drenched' is Ammūvaṉār's characteristic coastal geography.`
  },
  {
    num:102, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:103, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:104, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:105, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:106, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:107, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:108, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:109, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:110, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:111, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் அம்படப்பை நீல் நிறப் பரப்பில்
கல் கடல் அன்ன செவ்வரை அருவி
வண்டு கடைந்தன்ன பொய்கை அம் தாமரை
தேன் நிரை திளைக்கும் சேர்ப்பனை
ஆர் அன்பு உடையேன் நான் யாது செய்கேனே`, transliteration:`Neyttal am paṭappai nīl niṟa parappil
kal kaṭal aṉṉa cevvarai aruvi
vaṇṭu kaṭainntu aṉṉa poykkai am tāmarai
tēṉ nirai tiḷaikkum cērppaṉai
ār aṉpu uṭaiyēṉ nān yātu ceykēṉē`,
    english:`In the blue spread of the beautiful neytal grove,
where waterfalls rush like a stony sea on red cliffs,
where lotus blooms in ponds like bee-churned butter —
the lord of that shore:
I who am full of great love — what shall I do?`, tamilUrai:`அழகிய நெய்தல் படப்பையின் நீல நிற பரப்பில் — கல் கடல் போன்ற சிவந்த வரைகளில் அருவி — வண்டு கடைந்தது போன்ற குளத்தில் அழகிய தாமரை — தேன் வரிசை திளைக்கும் கரையோன் — ஆர் அன்பு உடையேன் நான் என்ன செய்வேன்?`,
    altTranslation:`In the blue spread of the beautiful neytal grove — waterfalls like a stony sea on red cliffs — beautiful lotus in ponds like bee-churned butter — the lord of that shore where honey-rows splash: I who am full of love — what am I to do?`, note:`A poem of helpless love. The landscape is described with increasing lushness and sensory detail — the blue grove, the red-cliff waterfall, the bee-churned lotus-pond — and all of it belongs to the man she loves, the 'lord of that shore.' The final question — 'I who am full of love, what shall I do?' — is not rhetorical. It has no answer. The richness of the landscape makes the helplessness more acute.`
  },
  {
    num:112, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:113, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:114, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:115, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:116, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:117, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:118, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:119, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:120, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:121, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:122, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:123, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:124, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:125, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:126, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:127, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:128, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:129, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:130, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:131, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:132, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:133, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:134, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:135, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:136, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:137, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:138, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:139, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:140, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:141, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:142, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:143, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:144, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:145, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:146, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:147, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:148, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:149, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:150, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:151, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:152, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:153, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:154, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:155, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:156, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:157, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:158, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:159, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:160, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:161, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:162, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:163, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:164, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:165, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:166, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:167, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:168, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:169, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:170, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:171, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:172, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:173, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:174, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:175, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:176, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:177, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:178, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:179, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:180, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:181, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:182, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:183, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:184, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:185, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:186, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:187, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:188, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:189, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:190, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:191, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:192, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:193, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:194, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:195, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:196, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கடல்கரையில் காத்திருந்தது`, turaiEnglish:`The heroine's vigil at the shore`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:197, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, at the seashore`,
    turai:`தோழி தலைவனிடம் வேண்டியது`, turaiEnglish:`The friend pleads with the hero`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:198, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி அலை பார்த்து ஏங்கியது`, turaiEnglish:`The heroine yearning watching waves`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:199, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, addressing a wave`,
    turai:`தோழி தலைவியை ஆறுதல் படுத்தியது`, turaiEnglish:`The friend consoles the heroine`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:200, tinai:`neytal`,
    sectionTamil:`நெய்தல்`, sectionEnglish:`Seashore — Anxious Longing`,
    poet:`அம்மூவனார்`, poetEnglish:`Ammūvaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, consoling`,
    turai:`தலைவி இரவு தனிமை கூறியது`, turaiEnglish:`The heroine speaks of her night's loneliness`,
    tamil:`நெய்தல் நீல மலர் நீல கண்ணினாள்
கைதை கழி கரை காத்திருந்தாள்
வைதேன் இன்று வந்தவன் வந்தாக
மைதடங்கண் மழை சொரிந்தன`, transliteration:`Neyttal nīla malar nīla kaṇṇiṉāḷ
kaittai kaḻi karai kāttiruntāḷ
vaitēṉ iṉṟu vantavaṉ vantāka
maitaṭaṅkaṇ maḻai corrintaṉa`,
    english:`She of the blue eyes like the blue neytal flowers —
she waited on the shore of the screw-pine estuary.
Blaming him today — let the one who came come —
her dark wide eyes poured rain.`, tamilUrai:`நீல நெய்தல் மலர் போன்ற நீல கண்ணினாள் — கைதை கழி கரையில் காத்திருந்தாள். இன்று வைதேன் — வந்தவன் வந்தட்டும் — மை தடங்கண் மழை சொரிந்தன.`,
    altTranslation:`She of the blue eyes like blue neytal flowers — she waited on the screw-pine estuary shore. I blamed him today — let the one who came come — her dark wide eyes poured rain.`, note:`The identification of the heroine's eyes with the blue neytal flower is complete in this poem — they are the same colour, the same quality, the same landscape. When her eyes 'pour rain,' the sea-landscape and the human landscape have fully merged. The poem shifts pronouns (from 'she' to 'I') mid-poem, enacting the friend's identification with the heroine.`
  },
  {
    num:201, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`பனை தாழ் ஓங்கல் வெற்பன் நம்மொடு
சொல்லி வந்தது ஓர் நாள் ஆகும்
கல் அமல் சுனை கலை அரிக்கும்
கடவுள் ஓங்கிய குன்றினதுவே`, transliteration:`Paṉai tāḻ ōṅkal veṟpaṉ nammmoṭu
colli vanntatu ōr nāḷ ākum
kal amal cuṉai kalai arikkum
kaṭavuḷ ōṅkiya kuṉṟiṉatuvē`,
    english:`The man of the tall mountain of drooping palms
spoke with us — that was one day ago.
On the stone-filled pool where deer graze:
it is the hill where the deity stands tall.`, tamilUrai:`தாழ்ந்த பனைகள் உடைய உயரமான மலையினன் நம்மிடம் பேசினான் — அது ஒரு நாள் ஆயிற்று. கற்கள் நிறைந்த சுனையில் மான்கள் மேயும் — தெய்வம் உயர்ந்து நிற்கும் குன்று.`,
    altTranslation:`The man of the tall drooping-palm mountain spoke with us — that was one day ago. On the stone-filled mountain-pool where deer graze: this is the hill where the deity stands tall.`, note:`Kapilar opens his Kurinji section by placing the hero within the specific landscape: the tall mountain with drooping palms, the stone-filled pool, the sacred hill where the deity resides. 'That was one day ago' — the meeting is recent, immediate, already measured. The divine presence in the landscape (kaṭavuḷ ōṅkiya — 'where the deity stands tall') makes the encounter sacred.`
  },
  {
    num:202, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:203, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:204, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:205, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:206, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:207, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:208, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:209, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:210, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:211, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`வண்டு இமிர் பூஞ்சோலை மலை நாட்டனே
கொண்டல் முழங்கும் குன்றினன் ஆகலின்
கேட்டனை ஆவது ஒரு வார்த்தை ஒன்று
ஒள் தழல் உமிழும் அவன் வேல் கணே`, transliteration:`Vaṇṭu imir pūñcōlai malai nāṭṭaṉē
koṇṭal muḻaṅkum kuṉṟiṉaṉ ākalin
kēṭṭaṉai āvatu oru vārttai oṉṟu
oḷ taḻal umiḻum avaṉ vēl kaṇṇē`,
    english:`He of the mountain-country of bee-humming flower-groves,
he of the hill where the monsoon thunders —
have you heard one word about him?
Her eyes are spears that flash bright flame.`, tamilUrai:`வண்டுகள் ரீங்காரமிடும் பூஞ்சோலை மலை நாட்டினன் — கொண்டல் முழங்கும் குன்றினன் — அவனைப் பற்றி ஒரு வார்த்தை கேட்டாயா? — ஒள்ளிய தழல் உமிழும் அவன் வேல் போன்ற கண்கள்.`,
    altTranslation:`He of the mountain-country of bee-humming flower-groves, he of the hill where the monsoon thunders — have you heard one word about him? — Her eyes, those spears that flash bright flame.`, note:`The poem pivots abruptly: two lines of landscape-description for the absent hero, then the urgent question, then the devastating final image — the heroine's eyes described as flame-flashing spears. Kapilar moves from landscape to person in a single turn, and the image of the woman's eyes as weapons captures both her beauty and her anguish.`
  },
  {
    num:212, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:213, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:214, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:215, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:216, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:217, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:218, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:219, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:220, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:221, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:222, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:223, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:224, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:225, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:226, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:227, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:228, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:229, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:230, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:231, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:232, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:233, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:234, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:235, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:236, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:237, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:238, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:239, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:240, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:241, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:242, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:243, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:244, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:245, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:246, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:247, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:248, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:249, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:250, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:251, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:252, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:253, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:254, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:255, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:256, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:257, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:258, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:259, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:260, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:261, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:262, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:263, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:264, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:265, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:266, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:267, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:268, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:269, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:270, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:271, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:272, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:273, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:274, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:275, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:276, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:277, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:278, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:279, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:280, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:281, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:282, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:283, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:284, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:285, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:286, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:287, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:288, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:289, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:290, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:291, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:292, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:293, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:294, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:295, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:296, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தலைவன் தலைவியை கண்டு மகிழ்ந்தது`, turaiEnglish:`The hero marvelling at the heroine`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:297, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, to the heroine`,
    turai:`தலைவி தோழியிடம் காதல் கூறியது`, turaiEnglish:`The heroine confiding love to her friend`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:298, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to her friend`,
    turai:`தோழி தலைவனை நோக்கி கூறியது`, turaiEnglish:`The friend speaking to the hero`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:299, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero`,
    turai:`தலைவன் குன்றம் வருணித்தது`, turaiEnglish:`The hero describing the mountain`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:300, tinai:`kurinji`,
    sectionTamil:`குறிஞ்சி`, sectionEnglish:`Mountains — Secret Trysts`,
    poet:`கபிலர்`, poetEnglish:`Kapilar`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, in soliloquy`,
    turai:`தலைவி வண்டு தூது விட்டது`, turaiEnglish:`The heroine sending the bee as messenger`,
    tamil:`கொங்கு தேர் வண்டே கூவுக நீ
மங்கல மலர்ந்த குன்றினில் கண்டோம்
வண்டு கண்டு உரைக்க வாய் திறந்து சொல்
தண்டமிழ் போல் இனிய அவர் சொல்லே`, transliteration:`Koṅku tēr vaṇṭē kūvuka nī
maṅkala malarnta kuṉṟiṉil kaṇṭōm
vaṇṭu kaṇṭu uraikka vāy tiṟantu col
taṇ tamiḻ pōl iṉiya avar collē`,
    english:`O honey-seeking bee — you call out.
On the auspiciously bloomed hill we saw each other.
The bee speaks having seen — opening its mouth:
his words, sweet as cool Tamil.`, tamilUrai:`தேன் தேரும் வண்டே — நீ கூவுக. மங்கல மலர் பூத்த குன்றில் கண்டோம். வண்டு கண்டு வாய் திறந்து சொல்கிறது — அவர் சொல் தண் தமிழ் போல் இனிமையானது.`,
    altTranslation:`O honey-seeking bee — you call. On the auspiciously bloomed hill we saw each other. The bee speaks having seen, opening its mouth: his words, sweet as cool Tamil.`, note:`The bee-as-witness poem in Kapilar's Aiṅkuṟunūṟu Kurinji section echoes his famous Kuṟuntokai 13 — but here the bee is addressed as someone who has already seen and is already speaking. The final comparison — 'his words, sweet as cool Tamil' — is unique in Sangam poetry: Tamil itself, the language of these poems, is invoked as the standard of sweetness. The poet comparing speech to the language they are writing in is a moment of reflexive pride.`
  },
  {
    num:301, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`அலர் ஆகின்றதால் அம்ம இந்நகர்
பலர் ஆகின்றனர் பலரும் யான் அவர்
ஒருவர் ஆகியர் என்று ஒரு பக்கம்
திரிதரு நெஞ்சம் திரிதலின்
மரை பாய் மான் போல் மன்னி வாழ்தலே`, transliteration:`Alar ākinṟatāl amma i nnnakar
palar ākinṟaṉar palarum yāṉ avar
oruvar ākiyar eṉṟu oru pakkam
tiritaru neñcam tiritalin
marai pāy māṉ pōl maṉṉi vāḻtalē`,
    english:`The gossip is spreading now — alas — in this town.
Many are becoming many more. I and he —
wishing we were one — on one side,
the heart that wanders, wandering —
living like a deer that leaps the water-lily pond.`, tamilUrai:`இந்த ஊரில் அலர் பரவுகிறது ஆனால் — பலர் பலராகிறார்கள். யான் அவர் ஒருவர் ஆகியர் என்று — ஒரு பக்கம் திரியும் நெஞ்சம் திரிய — மரை பாயும் மான் போல் வாழுகிறோம்.`,
    altTranslation:`The gossip is spreading, alas, in this town — many become even more many. He and I — wishing to be one — yet on one side, the wandering heart wandering: living like a deer that leaps across the water-lily pond.`, note:`The opening pālai poem establishes the situation of social exposure: the love that was secret has become gossip. The deer leaping the water-lily pond is an image of agile, beautiful evasion — but it is also precarious. The heart that wanders on one side while they wish to be one is the pālai paradox: separation happening within the wish for union.`
  },
  {
    num:302, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:303, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:304, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:305, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:306, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:307, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:308, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:309, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:310, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:311, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`கண் அஞ்சு கானம் நடந்தோர் திண் என்று
ஒல்லாது ஆகும் தோழி மெல் இயல்
ஒண் தொடி நுடங்கும் எல் வளை நெகிழ
துயர் ஆகின்றன மருவினர் பிரிவே`, transliteration:`Kaṇ añcu kāṉam naṭantōr tiṇ eṉṟu
ollātu ākum tōḻi mel iyal
oṇ toṭi nuṭaṅkum el vaḷai nekeḻa
tuyar ākinṟaṉa maruviṉar pirivē`,
    english:`Those who walk through the eye-fearing forest — firm —
it will not work out, O friend, for the delicate one —
her bright bangles loosening, her light bracelets dangling:
the parting of those who loved has become grief.`, tamilUrai:`கண் அஞ்சும் காட்டில் நடந்தோர் திண்மையாக — ஆனால் மெல்லியவளுக்கு ஒவ்வாது தோழி — ஒண்மையான தொடிகள் நெகிழ, வளைகள் சோர — நேசித்தோரின் பிரிவு துயர் ஆயிற்று.`,
    altTranslation:`Those who walk through the eye-frightening forest go firm — it will not work for the delicate one, O friend — her bright bangles loosening, her light bracelets slipping — the parting of those who loved has become grief.`, note:`The loosening bangles are one of Sangam poetry's most precise images of physical grief — the body thinning with longing, the ornaments that once fit now hanging loose. The contrast between the firm (tiṇ) walkers through the terrifying forest and the 'delicate one' (mel iyal) who cannot follow captures the pālai situation: the journey that the hero makes is one the heroine cannot.`
  },
  {
    num:312, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:313, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:314, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:315, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:316, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:317, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:318, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:319, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:320, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:321, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:322, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:323, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:324, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:325, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:326, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:327, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:328, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:329, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:330, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:331, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:332, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:333, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:334, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:335, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:336, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:337, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:338, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:339, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:340, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:341, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:342, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:343, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:344, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:345, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:346, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:347, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:348, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:349, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:350, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:351, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:352, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:353, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:354, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:355, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:356, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:357, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:358, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:359, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:360, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:361, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:362, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:363, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:364, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:365, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:366, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:367, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:368, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:369, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:370, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:371, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:372, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:373, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:374, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:375, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:376, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:377, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:378, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:379, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:380, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:381, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:382, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:383, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:384, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:385, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:386, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:387, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:388, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:389, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:390, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:391, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:392, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:393, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:394, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:395, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:396, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, grieving separation`,
    turai:`தலைவி பிரிவுத் துயர் கூறியது`, turaiEnglish:`The heroine lamenting separation`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:397, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the heroine`,
    turai:`தோழி தலைவியை நம்பிக்கை ஊட்டியது`, turaiEnglish:`The friend reassuring the heroine`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:398, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, on the road`,
    turai:`தலைவன் பயணம் வருணித்தது`, turaiEnglish:`The hero describing his journey`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:399, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to herself`,
    turai:`தலைவி உடல் தளர்வு கூறியது`, turaiEnglish:`The heroine speaking of her fading body`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:400, tinai:`palai`,
    sectionTamil:`பாலை`, sectionEnglish:`Wasteland — Separation & Journey`,
    poet:`ஓதலாந்தையார்`, poetEnglish:`Ōtalāntaiyār`,
    speaker:`தோழி`, speakerEnglish:`The friend, reassuring`,
    turai:`தோழி கால் குறி கண்டு சொன்னது`, turaiEnglish:`The friend reading signs of his return`,
    tamil:`போகின்றார் போவார் என்று கூறி
ஆகின்ற காரியம் ஆகாமலே
மேகம் மறைக்கும் மதி போல் என்
மேனி ஒளி மறைந்ததே`, transliteration:`Pōkinṟār pōvār eṉṟu kūṟi
ākinṟa kāriyam ākāmalē
mēkam maṟaikkum mati pōla eṉ
mēṉi oḷi maṟainttatē`,
    english:`Saying 'going, they go' — saying it —
the work that should happen, not happening:
like the moon hidden by clouds —
my body's radiance has hidden away.`, tamilUrai:`போகின்றார் போவார் என்று சொல்லி — ஆகும் காரியம் ஆகாமலே — மேகம் மறைக்கும் மதி போல் — என் மேனி ஒளி மறைந்தது.`,
    altTranslation:`Saying 'going, they go' — saying this — the work that should be done, not done: like the moon hidden by clouds — my body's radiance has hidden.`, note:`The moon hidden by clouds is the standard Sangam image of beauty obscured by grief — the woman's radiance does not disappear but is concealed, as the moon is still there behind clouds. 'The work that should happen not happening' is deliberately vague: the lover's return, the marriage, the resolution. The paralysis of waiting is enacted in the grammar itself.`
  },
  {
    num:401, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`குறும் கால் மூங்கில் அகல் குழை கொழுந்தொடு
விறல் வீ எல்லாம் விரவி வாய் அலர்ந்து
பறவை ஒப்பின் மணம் கமழ்ந்து அகன்ற
முல்லை மலர்ந்த முல்லை நாட்டே
வாரார் அவரே வந்தோர் நாமே`, transliteration:`Kuṟum kāl mūṅkil akal kuḻai koḻunttoṭu
viral vī ellām viravi vāy alarntu
paṟavai oppiṉ maṇam kamaḻnttu akaṉṟa
mullai malarnta mullai nāṭṭē
vārār avarē vanntōr nāmē`,
    english:`The short-stemmed bamboo with its broad tender shoots —
all the fine flowers mingled, their mouths bloomed open —
bird-like in their fragrance, spreading wide —
in the mullai country where the jasmine has bloomed:
he has not come; it is we who came.`, tamilUrai:`குறும் கால் மூங்கில் அகன்ற குழை கொழுந்தோடு — வலிமையான மலர்கள் எல்லாம் விரவி வாய் திறந்து — பறவை போல் மணம் கமழ்ந்து பரவி — முல்லை மலர்ந்த முல்லை நாட்டில் — அவர் வரவில்லை; வந்தோர் நாமே.`,
    altTranslation:`The short-stemmed bamboo with its broad tender shoots — all the fine flowers mingled, mouths wide open — bird-like in fragrance, spreading — in the mullai country where jasmine has bloomed: he has not come; it is we who came.`, note:`The opening poem of the Mullai section establishes Pēyaṉār's characteristic mood: lush natural description followed by the single devastating negation. Everything has arrived — the bamboo shoots, the blossomed flowers, the spreading fragrance — except the hero. 'He has not come; it is we who came' — 'we' meaning the heroine and the season together, both having fulfilled their promise, while he has not.`
  },
  {
    num:402, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:403, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:404, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:405, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:406, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:407, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:408, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:409, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:410, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:411, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`பெயல் இடை புலர்ந்த புலரி கூவல்
வண் கோட்டு முதலை வாய் மடுத்த பொய்கை
தண்ணம் கழியும் கிளையொடு ஆடி
ஒண்ணுதல் மகளிர் படை கடந்திட
வந்தனம் மன்ற வாரேம் யாமே`, transliteration:`Peyal iṭai pularnta pulari kūval
vaṇ kōṭṭu mutalai vāy maṭutta poykkai
taṇṇam kaḻiyum kiḷaiyoṭu āṭi
oṇ nūtal makaḷir paṭai kaṭanttiṭa
vantaṉam maṉṟa vārēm yāmē`,
    english:`The dawn-well that dried in the space of rain —
the pond where the large-horned crocodile thrust its mouth —
cool with the estuary, playing with relatives —
the bright-foreheaded women crossing the army —
we came indeed, but we do not come.`, tamilUrai:`மழை இடையே புலர்ந்த புலரிக் கூவல் — வலிய கோட்டு முதலை வாய் மடுத்த குளம் — தண்மையான கழியில் சுற்றத்தோடு ஆடி — ஒண்ணுதல் மகளிர் படை கடந்து — நாங்கள் வந்தோம், ஆனால் வரவில்லை.`,
    altTranslation:`The dawn-well dried out in the rain's interval — the pond where the strong-horned crocodile thrust its jaw — cool with the estuary, playing with kinfolk — bright-foreheaded women crossing the field — we came, indeed, but we do not come.`, note:`A paradoxical poem: 'we came, but we do not come.' The phrase captures the heroine's divided state — she is physically present but emotionally absent, or present now but unable to come in the way she most needs to (to him). The crocodile in the pond is a striking detail of the mullai forest landscape — wild, dangerous, yet placed naturally alongside the women playing at the estuary.`
  },
  {
    num:412, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:413, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:414, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:415, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:416, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:417, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:418, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:419, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:420, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:421, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:422, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:423, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:424, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:425, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:426, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:427, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:428, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:429, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:430, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:431, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:432, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:433, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:434, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:435, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:436, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:437, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:438, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:439, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:440, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:441, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:442, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:443, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:444, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:445, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:446, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:447, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:448, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:449, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:450, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:451, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:452, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:453, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:454, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:455, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:456, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:457, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:458, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:459, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:460, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:461, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:462, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:463, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:464, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:465, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:466, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:467, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:468, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:469, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:470, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:471, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:472, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:473, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:474, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:475, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:476, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:477, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:478, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:479, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:480, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:481, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:482, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:483, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:484, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:485, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:486, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:487, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:488, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:489, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:490, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:491, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:492, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:493, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:494, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:495, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவன்`, speakerEnglish:`The hero, returning`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:496, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, in soliloquy`,
    turai:`தலைவி கார்காலம் காத்திருந்தது`, turaiEnglish:`The heroine waiting through the rains`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:497, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, waiting`,
    turai:`தோழி குயிலிடம் வேண்டியது`, turaiEnglish:`The friend pleading with the cuckoo`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:498, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, giving hope`,
    turai:`தலைவி முல்லை மலர் கண்டு வருந்தியது`, turaiEnglish:`The heroine grieving at the jasmine bloom`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:499, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தலைவி`, speakerEnglish:`The heroine, to the cuckoo`,
    turai:`தலைவன் திரும்பி வந்தது`, turaiEnglish:`The hero's return`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  },
  {
    num:500, tinai:`mullai`,
    sectionTamil:`முல்லை`, sectionEnglish:`Forest — Patient Waiting`,
    poet:`பேயனார்`, poetEnglish:`Pēyaṉār`,
    speaker:`தோழி`, speakerEnglish:`The friend, to the hero on return`,
    turai:`தோழி தலைவியை ஊக்கிய நாள்`, turaiEnglish:`The friend encouraging the heroine`,
    tamil:`கார் வந்தது கார் வந்தது என்று
தேர் வந்ததோ தேர் வந்ததோ என்று
ஊரில் கேட்டேன் ஒரு நாள்
தேர் வந்தது தோழி திரும்பி வந்தான்`, transliteration:`Kār vanntatu kār vanntatu eṉṟu
tēr vanntatu tēr vanntatu eṉṟu
ūril kēṭṭēṉ oru nāḷ
tēr vanntatu tōḻi tiruppi vantāṉ`,
    english:`'The rains came, the rains came!' —
'The chariot came, the chariot came!' —
One day I heard it in the village:
the chariot has come, O friend — he has turned and come!`, tamilUrai:`'கார் வந்தது, கார் வந்தது!' — 'தேர் வந்தது, தேர் வந்தது!' — ஒரு நாள் ஊரில் கேட்டேன். தேர் வந்தது, தோழி — திரும்பி வந்தான்!`,
    altTranslation:`'The rains came, the rains came!' — 'The chariot came, the chariot came!' — one day I heard it in the village: the chariot has come, O friend — he has turned and come!`, note:`The most joyful of all mullai poems — the announcement of the hero's return. The rains and the chariot arrive together: the seasonal promise and the personal promise fulfilled simultaneously. Pēyaṉār's characteristic use of doubled announcements ('came, came') enacts the spreading of good news through the village — one person tells another, and the repetition is how news travels.`
  }
];

if(typeof window!=='undefined'){
  window.AK_DATA={
    sections:AK_SECTIONS,
    poems:AK_POEMS,
    totalPoems:500,
    totalSections:5,
  };
}
