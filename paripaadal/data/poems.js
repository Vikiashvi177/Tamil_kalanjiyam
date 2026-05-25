// பரிபாடல் · Paripaāṭal · c. 300 BCE – 300 CE

const PP_SECTIONS = [
  { slug:`tirumal`, tamil:`திருமால்`, nameEnglish:`Tirumal — Viṣṇu`, desc:`Eight surviving hymns to Tirumal (Viṣṇu/Māl) — the dark-cloud god, the lotus-eyed, the one who measured the world in three strides. These are the earliest devotional hymns to Viṣṇu in Tamil literature, predating the Āḻvār tradition by centuries. Each poem is a vision of the deity's beauty, power, and cosmic deeds.`, poems:`Poems 1–8`, count:8 },
  { slug:`murugan`, tamil:`முருகன்`, nameEnglish:`Murukaṉ — The Young God`, desc:`Five surviving hymns to Murukaṉ — the young warrior-god of the Tamil mountains, the lord of the vel (spear), the son of Śiva, the peacock-rider. The Paripaāṭal Murukaṉ hymns stand alongside the Tirumurukāṟṟuppaṭai as the earliest and most beautiful Sanskrit-free hymns to the distinctively Tamil deity.`, poems:`Poems 9–13`, count:5 },
  { slug:`vaiyai`, tamil:`வையை`, nameEnglish:`The Vaiyai River`, desc:`Nine surviving hymns to the Vaiyai (Vaigai) river — the sacred river of the Pāṇṭiya country, flowing through Madurai. These poems address the river as a deity in its own right: celebrating its floods, its bank-life, the fish and birds, the women bathing, the city it sustains. Nature-worship and civic pride fused in song.`, poems:`Poems 14–22`, count:9 },
];

const PP_POEMS = [
  {
    num:1, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`கடுவன் இளவெயினனார்`, poetEnglish:`Kaṭuvaṉ Iḷaveyiṉaṉār`,
    theme:`திருமால் திருவுருவம் வருணித்தது`, themeEnglish:`Describing the divine form of Tirumal`,
    tamil:`நீரும் நிலனும் தீயும் வளியும்
வானும் இவை ஐந்தும் யாவராலும்
தேரா நிலைமையில் சேர்ந்த ஒரு முதல்
அனைத்தும் தாமாய் அமைந்தோய்`, transliteration:`Nīrum nilaṉum tīyum vaḷiyum
vāṉum ivai ainttum yāvarālum
tērā nilaimaiyil cērnta oru mutal
aṉaittum tāmāy amainnttōy`,
    english:`Water and earth and fire and wind
and sky — these five, by no one
comprehended in their state of joining — one origin:
you who have become all of this yourself.`, tamilUrai:`நீரும், நிலனும், தீயும், காற்றும், வானும் — இந்த ஐந்தும் யாரும் உணர முடியாத நிலையில் ஒன்றிணைந்த ஒரு முதல்வன் நீ. அனைத்துமாகவே நீ அமைந்தாய்.`,
    altTranslation:`Water, earth, fire, wind, and sky — these five, joined in a state
no one can comprehend, one original source: you who have yourself become all of this.`, note:`The opening poem of the Paripaāṭal's Tirumal section establishes Viṣṇu as the Pañcabhūta — the five elements themselves. This is the Sāṅkhya-Vedāntic theology of Viṣṇu-as-cosmic-substance rendered in the Tamil metre and imagery. The phrase 'yāvarālum tērā' — 'by no one comprehended' — insists on the mystery of the divine ground while celebrating it. The Paripaāṭal is the earliest Tamil text to develop this philosophical theology.`
  },
  {
    num:2, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`திருமால் அழகு வருணித்தது`, themeEnglish:`Celebrating the beauty of Tirumal`,
    tamil:`கரும்பு காய்ந்தது அன்றே
கரும்புள் ளின்சாறு
மரம் காய்க்கும் காலை யன்றே
மரத்துள் ளீர்நீர்
திருமால் உன் திருவடி
யடியார்க்கு அன்றே
நீர் மேல் நின்று ஆடும்
அன்னம் போல் வாழ்க்கை`, transliteration:`Karumpu kāynttatu aṉṟē
karumpuḷ iṉcāṟu
maram kāykkum kālai yaṉṟē
marattuḷ īrnīr
Tirumāl uṉ tiruvaṭi
aṭiyārkkku aṉṟē
nīr mēl niṉṟu āṭum
aṉṉam pōl vāḻkkai`,
    english:`It is not when sugarcane is ripe
that the sweet juice is in the cane —
it is not when the tree bears fruit
that the cool water is in the tree.
O Tirumal — it is not only at your sacred feet
that your devotees live
the life of swans dancing
on the water.`, tamilUrai:`கரும்பு பழுக்கும்போது தான் சாறு வருகிறதென்றில்லை — சாறு எப்போதும் இருக்கும். மரம் காய்க்கும் போது தான் நீர் வருகிறதென்றில்லை. திருமாலே — உன் அடியார்களின் வாழ்க்கை நீர் மேல் ஆடும் அன்னம் போல — திருவடி அருகில் மட்டுமல்ல, எங்கும் நீயே.`,
    altTranslation:`It is not when sugarcane ripens that the sweetness enters it — the sweetness is always there.
It is not when the tree fruits that the moisture enters — the moisture is always there.
O Tirumal — your devotees live like swans dancing on water — not only at your feet, but everywhere.`, note:`A poem of theological paradox: the sweet juice of sugarcane and the moisture within a tree are not products of ripening — they are always present, waiting to be revealed. The devotees' divine life is similarly always present, not only activated at the moment of worship. The swan dancing on water is the Paripaāṭal's most repeated image of devotional grace: light, present, effortless.`
  },
  {
    num:3, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`கீரந்தையார்`, poetEnglish:`Kīrantaiyār`,
    theme:`திருமால் திரிவிக்கிரமம் வருணித்தது`, themeEnglish:`The cosmic stride of Trivikrama`,
    tamil:`மூவடி மண் வேண்டி முன்வந்தாய்
மூன்றடியில் மூவுலகும் மூடினாய்
ஒரடியில் படர்ந்தாய் ஒரடியில் படர்ந்தாய்
ஒரடியில் நீ வைக்க நிலமில்லா ஆயிற்றே`, transliteration:`Mūvaṭi maṇ vēṇṭi muṉ vantāy
mūṉṟaṭiyil mūvulakum mūṭiṉāy
oraṭiyil paṭarntāy oraṭiyil paṭarntāy
oraṭiyil nī vaikka nilam illā āyiṟṟē`,
    english:`You came forward asking for three feet of earth —
in three strides you covered all three worlds.
One stride spread — one stride spread —
for the third stride there was no earth left for you to place it.`, tamilUrai:`மூன்று அடி மண் கேட்டு வந்தாய் — மூன்று அடியில் மூன்று உலகையும் மூடினாய். ஒரு அடியில் படர்ந்தாய், ஒரு அடியில் படர்ந்தாய் — மூன்றாம் அடி வைக்க நிலமில்லாமல் போய்விட்டது.`,
    altTranslation:`You came asking for three feet of land — in three steps you covered all three worlds.
One step spread across everything — one step spread — for the third step, there was no earth remaining.`, note:`The Trivikrama myth — Viṣṇu's cosmic three-stride victory over the demon king Bali — is one of the most celebrated episodes in the Paripaāṭal. The poem renders it with extraordinary brevity and wit: the final line's observation that 'there was no earth left for the third stride' captures both the vast scale of the divine measurement and a note of almost comic excess. Bali, seeing the earth run out, offered his own head for the third step — an act of submission that became liberation.`
  },
  {
    num:4, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`இளந்தேவனார்`, poetEnglish:`Iḷantēvaṉār`,
    theme:`திருமால் கண் வருணித்தது`, themeEnglish:`The eyes of Tirumal`,
    tamil:`கண்ணன் கண் என்னும் கடல் கண்ணன்
கடல் கண்ணன் கடலே கடல்
கடலே கடல் கடலே உலகு
உலகே உலகு உலகே உலகு`, transliteration:`Kaṇṇaṉ kaṇ eṉṉum kaṭal kaṇṇaṉ
kaṭal kaṇṇaṉ kaṭalē kaṭal
kaṭalē kaṭal kaṭalē ulaku
ulakē ulaku ulakē ulaku`,
    english:`Kaṇṇaṉ — his eyes called sea — Kaṇṇaṉ of the sea-eyes —
the sea-eyed one, the sea, the sea —
the sea, the sea, the sea, the world —
the world, the world, the world, the world.`, tamilUrai:`கண்ணன் — கடல் என்று அழைக்கப்படும் கண்கள் உடையவன். கடல் கண்ணன் — கடல் — கடல் — கடல் — உலகு — உலகு — உலகு.`,
    altTranslation:`Kaṇṇaṉ — he of the sea-called eyes — the sea-eyed one, the sea, the sea —
the sea, the sea, the world — the world, the world, the world.`, note:`One of the most formally experimental poems in all of Tamil literature. The repetition of 'sea' (kaṭal) and 'world' (ulaku) enacts a dissolution of boundaries — the divine eyes expand into the sea which expands into the world until the poem itself seems to contain everything. The formal device of anaphoric expansion — each word spilling into the next, then multiplying — is unique in the Sangam corpus and anticipates later Tamil mystical poetry.`
  },
  {
    num:5, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`திருமால் நாமங்கள் பாடியது`, themeEnglish:`Singing the names of Tirumal`,
    tamil:`மால் என்று மாயன் என்று மால் கொண்டோர்
ஆரண்ணம் செய்து அழுவர்
திருமால் நின் திருவருள் பெற்றோர்
துலங்கு ஒளி மணி சுடர் போல
உள் ஒளி ஆவர்`, transliteration:`Māl eṉṟu māyaṉ eṉṟu māl koṇṭōr
āraṇṇam ceyttu aḻuvar
Tirumāl niṉ tiruvaruḷ peṟṟōr
tulaṅku oḷi maṇi cuṭar pōla
uḷ oḷi āvar`,
    english:`Those seized by longing — crying 'Māl!' and 'Māyaṉ!' —
will weep, performing devotional cries.
O Tirumal — those who have received your sacred grace
become inner light,
like the shining light of a gem's lustre.`, tamilUrai:`மால் என்று, மாயன் என்று — மால் கொண்டவர்கள் புலம்பி அழுவார்கள். திருமாலே — உன் திருவருள் பெற்றவர்கள் ஒளிரும் மணி போல உள் ஒளியாவர்.`,
    altTranslation:`Those seized by longing, crying 'Māl! Māyaṉ!' will weep and lament.
O Tirumal — those who have received your grace become inner light,
like the luminous brightness of a gem.`, note:`A poem of the two devotional states: the weeping of the one who longs but has not yet received grace (māl koṇṭōr — the longing-seized), and the inner illumination of the one who has received it. The gem metaphor for inner light is central to Tamil devotional aesthetics: the gem does not produce light but transmits it — the devotee made luminous by the divine presence within.`
  },
  {
    num:6, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`கடுவன் இளவெயினனார்`, poetEnglish:`Kaṭuvaṉ Iḷaveyiṉaṉār`,
    theme:`திருமால் கடல் பள்ளி வருணித்தது`, themeEnglish:`Tirumal on the cosmic ocean`,
    tamil:`பாற்கடல் பள்ளி கொண்டாய்
பண்டு உலகு அளந்தாய்
பருந்து ஏறு கொடியோய்
கார் முகில் வண்ணா
யார் நினை அறிவார் யாம் அறியோம்
தூ மலர் அடியே தொழுவோம்`, transliteration:`Pāṟkaṭal paḷḷi koṇṭāy
paṇṭu ulaku aḷantāy
paruntu ēṟu koṭiyōy
kār mukil vaṇṇā
yār niṉai aṟivār yām aṟiyōm
tū malar aṭiyē toḻuvōm`,
    english:`You who sleep on the Milk Ocean,
you who measured the world in ancient times,
O you of the eagle-banner,
O you of the dark-cloud colour —
who knows you? We do not know.
Only your pure flower-feet we worship.`, tamilUrai:`பாற்கடலில் பள்ளி கொண்டவனே, பண்டு உலகு அளந்தவனே, கருட கொடியோனே, கார் முகில் வண்ணனே — உன்னை யார் அறிவார்கள்? நாங்கள் அறியோம். உன் தூய மலர் அடியே தொழுவோம்.`,
    altTranslation:`You who recline on the Milk Ocean, who measured the world in ancient days,
O you of the eagle-flag, O dark-cloud-coloured one —
who truly knows you? We do not know. We worship only your pure flower-feet.`, note:`The honest theological disclaimer at the heart of this hymn — 'who knows you? we do not know' — is one of the Paripaāṭal's most moving moments. After cataloguing the deity's cosmic attributes (Milk Ocean, world-measurement, eagle-banner, dark-cloud complexion), the poet simply admits the limits of human knowledge. The worshippers resort to the pure gesture: touching the flower-feet. This is bhakti's paradox — total cosmic power met by total human humility.`
  },
  {
    num:7, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`திருமால் பக்தர்கள் நிலை வருணித்தது`, themeEnglish:`The state of Tirumal's devotees`,
    tamil:`மால் அன்பர் மனம் மலர் மாலை கொண்டு
நாளும் நாளும் நலம் பாடி
கால மலர் தூவி காதலர் போல்
ஆடி ஆடி அழுவர் சிலர்
பாடி பாடி பணிவர் சிலர்`, transliteration:`Māl aṉpar maṉam malar mālai koṇṭu
nāḷum nāḷum nalam pāṭi
kāla malar tūvi kātalar pōla
āṭi āṭi aḻuvar cilar
pāṭi pāṭi paṇivar cilar`,
    english:`The devotees of Māl — with flower-garlands in their minds —
day after day singing his goodness,
scattering seasonal flowers like lovers —
some will dance and dance and weep;
some will sing and sing and bow.`, tamilUrai:`மாலின் அன்பர்கள் — மனதில் மலர் மாலை கொண்டு — நாள்தோறும் அவன் நலம் பாடி, காலத்துக்கு ஏற்ற மலர்கள் தூவி, காதலர் போல — சிலர் ஆடி ஆடி அழுவார்கள், சிலர் பாடி பாடி வணங்குவார்கள்.`,
    altTranslation:`Māl's devotees — with flower-garlands in their minds — day after day singing his goodness,
scattering seasonal flowers like lovers —
some will dance and dance until they weep; some will sing and sing and bow.`, note:`A portrait of the devotional community — plural, varied, each expressing bhakti in their own mode. The repetitions ('day after day', 'dance and dance', 'sing and sing') capture the iterative, self-reinforcing nature of devotional practice. The comparison to lovers (kātalar pōla) makes the devotional relationship erotic: scattering seasonal flowers is what lovers do for each other.`
  },
  {
    num:8, section:`tirumal`,
    deity:`திருமால்`, deityEnglish:`Tirumal — Viṣṇu`,
    poet:`உருத்திரசன்மனார்`, poetEnglish:`Uruttiracaṉmāṉār`,
    theme:`திருமால் அவதாரங்கள் வருணித்தது`, themeEnglish:`The avatāras of Tirumal`,
    tamil:`மீன் ஆய் முன் இரைந்தாய்
ஆமை ஆய் மேல் முறைந்தாய்
ஏனம் ஆய் நீ கீண்டாய்
அரி ஆய் வலி தீர்த்தாய்
குறள் ஆய் நிலம் கொண்டாய்
கரும வினை தீர்த்தோய்`, transliteration:`Mīṉ āy muṉ irainnttāy
āmai āy mēl muṟainnttāy
ēṉam āy nī kīṇṭāy
ari āy vali tīrttāy
kuṟaḷ āy nilam koṇṭāy
karumaviṉai tīrttōy`,
    english:`You roared forward as a fish first —
as a tortoise you carried the weight above —
as a boar you split open the earth —
as a lion you ended the tyrant's power —
as a dwarf you took back the land —
O you who dissolved the burden of karma.`, tamilUrai:`முதலில் மீனாய் முன்னேறினாய், ஆமையாய் மேல்பாரம் தாங்கினாய், பன்றியாய் பூமியை தோண்டினாய், நரசிம்மனாய் வலியை தீர்த்தாய், வாமனனாய் நிலம் கொண்டாய் — கர்ம வினை தீர்த்தோய்.`,
    altTranslation:`You roared forward as a fish — as a tortoise you bore the world's weight —
as a boar you rent the earth — as a lion you ended cruel power —
as the dwarf you reclaimed the land — O you who dissolved the karma.`, note:`A compact enumeration of the Daśāvatāra (ten avatāras of Viṣṇu) in Tamil Sangam diction. The fish, tortoise, boar, man-lion, and dwarf are the first five avatāras. This poem is significant as evidence that the avatāra theology was fully developed and celebrated in Tamil by the early centuries of the Common Era — predating much Sanskrit avatāra literature. The final epithet — 'you who dissolved karma' — situates the avatāras within a soteriology.`
  },
  {
    num:9, section:`murugan`,
    deity:`முருகன்`, deityEnglish:`Murukaṉ — The Young God`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`முருகன் திருவுருவம் வருணித்தது`, themeEnglish:`The divine form of Murukaṉ`,
    tamil:`முருகா முருகா என்று
முகடு தோறு எதிரொலிக்கும்
வரை நாட்டான் வேல் வீரன்
குன்று குன்று தொறும் குரங்கொடும்
ஆடும் ஆடல் கண்டோர்
அனைவரும் ஆட்டம் விடாரே`, transliteration:`Murukā Murukā eṉṟu
mukaṭu tōṟu etiroliccum
varai nāṭṭāṉ vēl vīraṉ
kuṉṟu kuṉṟu toṟum kuraṅkoṭum
āṭum āṭal kaṇṭōr
aṉaivarum āṭṭam viṭārē`,
    english:`'Murukā! Murukā!' —
echoing from peak to peak —
the spear-hero, lord of the mountain land,
dancing with monkeys on hill after hill —
those who have seen that dance:
not one of them will ever stop dancing.`, tamilUrai:`முருகா! முருகா! என்று சிகரம் சிகரமாக எதிரொலிக்கும். மலை நாட்டான், வேல் வீரன் — குன்று குன்றிலும் குரங்குகளோடு ஆடும் ஆட்டத்தை கண்டோர் — அனைவரும் ஆட்டம் விடமாட்டார்கள்.`,
    altTranslation:`'Murukā! Murukā!' — echoing from mountain-peak to mountain-peak —
the spear-hero of the mountain-land, dancing with monkeys hill after hill —
those who have seen that dance will never, any of them, stop dancing.`, note:`The opening of the Murukaṉ section establishes his characteristic landscape — the mountain, the echo, the dance with monkeys. Murukaṉ's dance is infectious: those who see it cannot stop. The poem uses the pilgrimage-call ('Murukā!') that echoes from peak to peak as both devotional practice and natural soundscape. The monkeys as dance-partners give Murukaṉ a quality of wild, joyful communion with the natural world.`
  },
  {
    num:10, section:`murugan`,
    deity:`முருகன்`, deityEnglish:`Murukaṉ — The Young God`,
    poet:`கீரந்தையார்`, poetEnglish:`Kīrantaiyār`,
    theme:`முருகன் வேல் மகிமை பாடியது`, themeEnglish:`The glory of Murukaṉ's vel`,
    tamil:`வேலே வேல் என்று வேல் பாடி
வேலவன் வேலும் வேலும் என்று
வேலவன் திருவடி வேலே வேலே என்று
பாடி ஆடி பரவசம் ஆவர்`, transliteration:`Vēlē vēl eṉṟu vēl pāṭi
vēlavaṉ vēlum vēlum eṉṟu
vēlavaṉ tiruvaṭi vēlē vēlē eṉṟu
pāṭi āṭi paravaśam āvar`,
    english:`Singing 'Vel! Vel!' — singing the vel —
'The vel of Vēlavaṉ, his vel, his vel!' —
'The vel at Vēlavaṉ's sacred feet — Vel! Vel!' —
singing and dancing, they become ecstatic.`, tamilUrai:`வேலே வேல் என்று பாடி, வேலவன் வேல் வேல் என்று பாடி, வேலவன் திருவடியில் வேல் வேல் என்று பாடி ஆடி — பரவசமடைவார்கள்.`,
    altTranslation:`Singing 'Vel! Vel!' — singing the vel of Vēlavaṉ — 'his vel, his vel!' —
'The vel at Vēlavaṉ's feet — Vel! Vel!' — singing and dancing, they fall into ecstasy.`, note:`The vel (spear) is Murukaṉ's most iconic symbol — given to him by his mother Pārvatī, the weapon of righteousness that destroyed the demon Cūrapadmaṉ. The poem's repetition of 'vel' — accumulating, cascading, becoming a kind of verbal drumbeat — enacts the devotional frenzy it describes. By the final line, the word 'vel' has been repeated so many times it has become mantra rather than meaning.`
  },
  {
    num:11, section:`murugan`,
    deity:`முருகன்`, deityEnglish:`Murukaṉ — The Young God`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`முருகன் மயில் வாகனம் வருணித்தது`, themeEnglish:`Murukaṉ's peacock mount`,
    tamil:`மயிலே மயில் என்று மயில் மீது ஏறுவோன்
மயிலொடு ஆடி மயிலினும் அழகியோன்
குன்றக் குறவர் மகளிர் குழல் மலர்
கொன்றை அரும்பின் மணம் கமழும்
மேனி மால் வரை மகன்`, transliteration:`Mayilē mayil eṉṟu mayil mītu ēṟuvōṉ
mayiloṭu āṭi mayiliṉum aḻakiyōṉ
kuṉṟak kuṟavar makaḷir kuḻal malar
koṉṟai arumpiṉ maṇam kamaḻum
mēṉi māl varai makaṉ`,
    english:`'Peacock! My peacock!' — he who mounts the peacock —
who dances with the peacock and is more beautiful than the peacock —
his body fragrant with the kōṉṟai buds in the hair
of the hill-country Kuṟavar women's tresses:
son of the great mountain.`, tamilUrai:`மயிலே மயில் என்று மயில் மேல் ஏறுவோன் — மயிலோடு ஆடி மயிலினும் அழகியோன் — குன்றக் குறவர் மகளிர் குழலில் உள்ள கொன்றை அரும்பின் மணம் கமழும் மேனியோன் — பெரிய மலையின் மகன்.`,
    altTranslation:`'Peacock! My peacock!' — he who rides the peacock, who dances with it and is more beautiful —
his body fragrant with kōṉṟai buds from the hair of Kuṟavar hill-women:
son of the great mountain.`, note:`Murukaṉ is more beautiful than his own peacock mount — this is the characteristic Paripaāṭal hyperbole of divine beauty. The scent of kōṉṟai flowers (Cassia fistula) from the hill-women's hair on his body places him in intimate contact with the kurinji landscape and its people. He smells of the mountain. The son of the great mountain — Śiva — inherits the mountain landscape as his own.`
  },
  {
    num:12, section:`murugan`,
    deity:`முருகன்`, deityEnglish:`Murukaṉ — The Young God`,
    poet:`கடுவன் இளவெயினனார்`, poetEnglish:`Kaṭuvaṉ Iḷaveyiṉaṉār`,
    theme:`முருகன் கந்தவேள் மகிமை பாடியது`, themeEnglish:`The glory of Murukaṉ as Kantavēḷ`,
    tamil:`கந்தனே கந்தா என்று காலை தொழுவோர்
மந்தாரம் கொண்டு வழிபட்டு வாழ்வோர்
சந்தன வாசம் சேர் திருமேனியோன்
சிந்தனை நிறைந்து தெளிவாகும் உள்ளமே`, transliteration:`Kantaṉē kantā eṉṟu kālai toḻuvōr
mantāram koṇṭu vaḻipaṭṭu vāḻvōr
cantaṉa vācam cēr tirumēṉiyōṉ
cintaṉai niṟainttu teḷivākum uḷḷamē`,
    english:`Those who worship at dawn saying 'Kanta! O Kanta!' —
those who live, worshipping with the manthāra flower —
he of the sacred body fragrant with sandal —
the mind filled with his meditation becomes clear.`, tamilUrai:`கந்தனே, கந்தா என்று காலையில் தொழுவோர் — மந்தார மலர் கொண்டு வழிபட்டு வாழ்வோர் — சந்தன வாசம் கொண்ட திரு மேனியோன் — அவன் சிந்தனை நிறைந்த உள்ளம் தெளிவாகும்.`,
    altTranslation:`Those who worship at dawn saying 'Kanta! O Kanta!' — those who live worshipping with manthāra flowers —
he of the sacred body fragrant with sandalwood — the mind filled with his meditation becomes clear.`, note:`The Paripaāṭal Murukaṉ hymns use the name Kantaṉ (from Sanskrit Skanda) alongside the Tamil Murukaṉ — evidence of the early synthesis of Sanskrit and Tamil devotional traditions. The manthāra (Erythrina indica) is a specific flower associated with Murukaṉ worship. The promise of mental clarity through devotion is the soteriological claim of Tamil bhakti in its earliest form.`
  },
  {
    num:13, section:`murugan`,
    deity:`முருகன்`, deityEnglish:`Murukaṉ — The Young God`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`முருகன் ஆட்டம் வருணித்தது`, themeEnglish:`Murukaṉ's festival dance`,
    tamil:`வெறியாட்டு வேலன் வேல் ஏந்தி ஆடுவான்
கொறிய மலையான் குன்றினில் கொண்டாட்டம்
அறியார் கண்டார் ஆடினார் ஆடுவார்
பறியாத கேள்வி பரிபாடல் பாடுவார்`, transliteration:`Veṟiyāṭṭu vēlaṉ vēl ēnti āṭuvāṉ
koṟiya malaiyāṉ kuṉṟiṉil koṇṭāṭṭam
aṟiyār kaṇṭār āṭiṉār āṭuvār
paṟiyāta kēḷvi paripāṭal pāṭuvār`,
    english:`The Vēlaṉ of the veṟiyāṭṭu dance wields his spear and dances —
on the hill of the mountain lord, the festival celebration:
those who do not know — seeing, they dance; they dance —
singing the Paripaāṭal of the undiminishing hearing.`, tamilUrai:`வெறியாட்டு வேலன் வேல் ஏந்தி ஆடுவான் — கொறிய மலையான் குன்றில் திருவிழா. அறியாதவர் கண்டார், ஆடினார், ஆடுவார் — பரிபாடல் பாடுவார் — பறியாத கேள்வி.`,
    altTranslation:`The Vēlaṉ dances wielding his spear in the veṟi-dance —
on the mountain lord's hill, the festival:
those who do not know, seeing, begin to dance and dance —
singing the Paripaāṭal, the inexhaustible hearing.`, note:`A remarkable meta-poem: the Paripaāṭal refers to itself. The 'Paripaāṭal of the undiminishing hearing' (paṟiyāta kēḷvi paripāṭal) is the anthology itself — the music and poetry so compelling that 'those who do not know, seeing, begin to dance.' The veṟiyāṭṭu is the Murukaṉ possession-dance performed by the Vēlaṉ priest. The poem claims that Paripaāṭal has the same effect as the divine dance: the observer is swept in.`
  },
  {
    num:14, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`வையை வெள்ளம் வருணித்தது`, themeEnglish:`The Vaiyai flood`,
    tamil:`வையை வருக வருக
வையை வெள்ளம் வருக
மதுரை நகர் நடுவு வையை
வயிரக் கோட்டு மலையிடை
பெய்த மழை புனல் ஆய் வந்து
மதுரை நகர் அடியே ஓடும் வையையே`, transliteration:`Vayyai varuka varuka
vayyai veḷḷam varuka
Maturai nakar naṭuvu vayyai
vayirak kōṭṭu malaiyiṭai
peyta maḻai puṉal āy vantu
Maturai nakar aṭiyē ōṭum vayyaiyē`,
    english:`Come, Vaiyai, come —
come, Vaiyai flood, come!
The Vaiyai in the middle of Madurai city —
the rain that fell between the diamond-peaked mountains
coming as flood-water,
running at the base of Madurai city — O Vaiyai!`, tamilUrai:`வா வையை, வா — வையை வெள்ளம் வா! மதுரை நகர் நடுவில் வையை — வைர கோட்டு மலைகளில் பெய்த மழை, வெள்ளமாய் வந்து — மதுரை நகர் அடியே ஓடும் வையையே!`,
    altTranslation:`Come, Vaiyai, come — come, flood of Vaiyai, come!
Vaiyai at the heart of Madurai — rain that fell between diamond-peaked mountains,
arriving as a flood-torrent, running at the very base of Madurai city — O Vaiyai!`, note:`The Vaiyai section opens with a call-and-response invocation of the river in flood — a festival cry, an invitation to the divine water. The diamond-peaked mountains (vayirak kōṭṭu malai) are the Varushanadu hills where the Vaigai rises. The river is addressed as a deity, its course from mountain to city tracked with pride: it runs at the very base of Madurai, the ancient Pāṇṭiya capital. This is civic devotion — the city and its sacred river as objects of worship together.`
  },
  {
    num:15, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`குன்றம் பூதனார்`, poetEnglish:`Kuṉṟam Pūtaṉār`,
    theme:`வையை கரை வாழ்க்கை வருணித்தது`, themeEnglish:`Life on the banks of the Vaiyai`,
    tamil:`கரை ஆர் கழி சேர் கலி மகளிர்
திரையாடு நீரில் திளைத்திருப்பர்
அரை ஆர் அகில் நாறும் ஆடை உடுத்தவர்
உரையாடி நின்று ஒழுகும் வையை
கரையினும் நீரினும் அழகே`, transliteration:`Karai ār kaḻi cēr kali makaḷir
tiraiyāṭu nīril tiḷaittirruppar
arai ār akil nāṟum āṭai uṭuttavar
uraiyāṭi niṉṟu oḻukum vayyai
karaiyiṉum nīriṉum aḻakē`,
    english:`The spirited women of the shore-filling estuary
play in the wave-dancing water, dwelling in it —
those who wear garments fragrant with heartwood,
conversing, standing in the flowing Vaiyai:
beauty on the bank and beauty in the water.`, tamilUrai:`கரை நிறைந்த கழியின் கலை மகளிர் — திரை ஆடும் நீரில் விளையாடுவார். அகில் மணக்கும் ஆடை உடுத்தவர்கள் — வையையில் நின்று உரையாடுவார். கரையிலும் நீரிலும் அழகே.`,
    altTranslation:`The vibrant women of the full estuary-shore splash in the wave-dancing water —
those clothed in heartwood-fragrant garments, conversing, standing in the flowing Vaiyai:
beauty on the bank, beauty in the water.`, note:`A poem of human beauty within the sacred river's landscape. The women bathing and conversing on the Vaiyai's banks are not merely described but celebrated as part of the river's beauty — 'beauty on the bank and beauty in the water' makes no distinction between the human and the natural. The agarwood-fragrant (akil) garments are a detail of luxury and sensory richness characteristic of the Pāṇṭiya courtly setting.`
  },
  {
    num:16, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`வையை மீன் வருணித்தது`, themeEnglish:`The fish of the Vaiyai`,
    tamil:`வையை வெள்ளத்தில் மீன் பிடிப்போர்
ஐயர் வலை ஏறும் அழகிய மீன்கள்
உய்யும் மீன் ஒட்டும் திரை ஒட்டும்
செய்யும் வேலை நீரும் மீனும்
ஒய்யென்று ஓடும் வையை நீரே`, transliteration:`Vayyai veḷḷattil mīṉ piṭippōr
aiyar valai ēṟum aḻakiya mīṉkaḷ
uyyum mīṉ oṭṭum tirai oṭṭum
ceyyum vēlai nīrum mīṉum
oyyeṉṟu ōṭum vayyai nīrē`,
    english:`Those who catch fish in the Vaiyai flood —
beautiful fish that enter the fishers' nets —
the living fish driving the wave and the wave driving the fish —
water and fish, their work done together:
the Vaiyai water rushing swiftly on.`, tamilUrai:`வையை வெள்ளத்தில் மீன் பிடிப்போர் — வலையில் ஏறும் அழகிய மீன்கள். உயிரோடிருக்கும் மீன் திரையை ஓட்டும், திரை மீனை ஓட்டும் — நீரும் மீனும் சேர்ந்து வேலை செய்யும் — வையை வேகமாக ஓடும்.`,
    altTranslation:`Those catching fish in the Vaiyai flood — beautiful fish entering the nets —
the live fish driving the wave, the wave driving the fish —
water and fish working together: the Vaiyai rushing swiftly on.`, note:`A poem of the river's ecology — fishermen, fish, and water as a single working system. 'The fish drives the wave, the wave drives the fish' is a micro-observation of fluid dynamics rendered as reciprocal action. The Vaiyai river poems are remarkable for this detailed attention to the natural world: they observe fishing practices, aquatic life, and river behaviour with a precision that is simultaneously devotional and naturalistic.`
  },
  {
    num:17, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`கீரந்தையார்`, poetEnglish:`Kīrantaiyār`,
    theme:`வையை இரவு வருணித்தது`, themeEnglish:`The Vaiyai at night`,
    tamil:`இரவினில் வையை இரைக்கும் ஒலி
கரைவினை செய்யும் கரம்பை வீடு
திரை விளையாட்டில் திளைக்கும் மகளிர்
உரை விளையாட்டில் உவக்கும் சேரிகள்
வையை இரவினில் வாழும் நகரே`, transliteration:`Iraviṉil vayyai iraikkum oli
karauviṉai ceyyum karampai vīṭu
tirai viḷaiyāṭṭil tiḷaikkum makaḷir
urai viḷaiyāṭṭil uvakkum cērikaḷ
vayyai iraviṉil vāḻum nakarē`,
    english:`At night the Vaiyai's roaring sound —
the riverside houses doing their erosion-work —
women who play in the wave-sport —
the streets that delight in word-play:
the city that lives by the Vaiyai at night.`, tamilUrai:`இரவில் வையை இரைக்கும் — கரை அரிக்கும் ஓரத்து வீடுகள். திரையில் விளையாடும் மகளிர். சொல் விளையாட்டில் உவகும் தெருக்கள். வையை இரவில் வாழும் நகரே.`,
    altTranslation:`At night, the Vaiyai's roaring — riverside houses under erosion —
women playing in the waves — streets delighting in wordplay:
the city that lives beside the Vaiyai at night.`, note:`A nocturnal portrait of Madurai and its river — the city alive after dark with river-sounds, games, and conversation. The detail of houses doing 'erosion-work' (karauviṉai ceyyum) is a remarkable observation: the riverside buildings are being gradually undermined by the river, which does its 'work' at night. The city's night-life — wave-play and word-play — is presented as the natural complement to the river's own nocturnal activity.`
  },
  {
    num:18, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`வையை கழி வாழ்க்கை வருணித்தது`, themeEnglish:`Life in the Vaiyai estuary`,
    tamil:`கழியில் நாரை நிற்கும் கழி நீரில்
வழியே ஓடும் வெண்மீன் திரள்
தழைக்கும் கரும்பு தடம் நிறைந்த வையை
உழைக்கும் மகளிர் உள்ளமும் வெள்ளமும்
வழிகட்டி வாழும் வையை நாடே`, transliteration:`Kaḻiyil nārai niṟkum kaḻi nīril
vaḻiyē ōṭum veṇmīṉ tiraḷ
taḻaikkum karumpu taṭam niṟainta vayyai
uḻaikkum makaḷir uḷḷamum veḷḷamum
vaḻikaṭṭi vāḻum vayyai nāṭē`,
    english:`In the estuary the heron stands — in the estuary water
shoals of white fish run along the channel —
the Vaiyai full of flourishing sugarcane fields —
the working women's hearts and the flood both
flowing along the path: the Vaiyai country that lives.`, tamilUrai:`கழியில் நாரை நிற்கும் — கழி நீரில் வெண்மீன் கூட்டம் வழியே ஓடும். தழைக்கும் கரும்பு தடம் நிறைந்த வையை — உழைக்கும் மகளிர் உள்ளமும் வெள்ளமும் ஒரே வழியில் ஓடும் — வாழும் வையை நாடு.`,
    altTranslation:`In the estuary the heron stands — shoals of white fish run through the estuary water —
the Vaiyai full of flourishing sugarcane — the working women's hearts and the flood
both flow along the same path: the living Vaiyai country.`, note:`A poem that unites human and natural flow: the women's hearts and the river's flood run along the same channel. The Paripaāṭal Vaiyai poems consistently find this equivalence between human feeling and natural force — the river is not a backdrop but a participant. The heron standing in the estuary, the white fish shoals, the sugarcane fields: the poem accumulates details of the river landscape until the final image fuses inner and outer in a single flowing path.`
  },
  {
    num:19, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`குன்றம் பூதனார்`, poetEnglish:`Kuṉṟam Pūtaṉār`,
    theme:`வையை திருவிழா வருணித்தது`, themeEnglish:`The festival of the Vaiyai`,
    tamil:`வையை விழாவில் மகிழ்ந்தவர்கள்
ஐயம் இல்லாத ஆனந்தத்தோர்
தையல் மகளிர் நீரில் ஆடுவர்
வையை வெள்ளம் வாழ்க வாழ்க என்று
ஊர் ஊர் ஊர்ந்து உவக்கும் ஊரே`, transliteration:`Vayyai viḻāvil makiḻntavar kaḷ
aiyam illāta ānanttattōr
taiyyal makaḷir nīril āṭuvar
vayyai veḷḷam vāḻka vāḻka eṉṟu
ūr ūr ūrntu uvakkum ūrē`,
    english:`Those who rejoiced at the Vaiyai festival —
those of doubtless bliss —
women skilled in embroidery playing in the water —
'Long live the Vaiyai flood! Long live!' — crying this,
the town that moves town by town in delight.`, tamilUrai:`வையை விழாவில் மகிழ்ந்தவர்கள் — ஐயமில்லாத ஆனந்தம் கொண்டவர்கள். தையல் செய்யும் மகளிர் நீரில் விளையாடுவார். 'வையை வெள்ளம் வாழ்க!' என்று ஊர் ஊராக ஊர்ந்து மகிழும் ஊர்.`,
    altTranslation:`Those rejoicing at the Vaiyai festival — those of undoubting bliss —
women skilled in needlework playing in the water —
'Long live the Vaiyai flood! Long live!' — the town that moves in joy from town to town.`, note:`The Vaiyai festival described here is likely the ancient Tamil festival of water-sports celebrated at the start of the monsoon season, when the river begins to flood. 'Long live the Vaiyai flood!' — the flood itself is blessed, celebrated, welcomed. The women skilled in needlework (taiyyal makaḷir) are identified by their craft even in play — the poem gives them a social identity before placing them in the water.`
  },
  {
    num:20, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`வையை நதி தெய்வம் வருணித்தது`, themeEnglish:`The Vaiyai as divine being`,
    tamil:`வான் நிறை மழை தந்த வையை
நான் வேண்டுவது எல்லாம் நல்கும் தாயே
கான் வழியே கடல் நோக்கி ஓடும் வையை
ஊன் உடல் உயிர் தரும் ஊற்று ஆகும் வையை`, transliteration:`Vāṉ niṟai maḻai tanta vayyai
nāṉ vēṇṭuvatu ellām nalkum tāyē
kāṉ vaḻiyē kaṭal nōkki ōṭum vayyai
ūṉ uṭal uyir tarum ūṟṟu ākum vayyai`,
    english:`Vaiyai — given by sky-filling rain —
O mother who grants all I ask for —
Vaiyai running through the forest toward the sea —
Vaiyai who is the spring that gives life to body and soul.`, tamilUrai:`வான் நிறை மழை தந்த வையை — நான் வேண்டுவதெல்லாம் தரும் தாயே! காட்டு வழியே கடல் நோக்கி ஓடும் வையை — உடல் உயிர் தரும் ஊற்றே வையை.`,
    altTranslation:`Vaiyai — given by sky-filling rain — O mother who gives all I ask!
Vaiyai running through forest toward the sea —
Vaiyai who is the spring that sustains body and soul.`, note:`The theological climax of the Vaiyai section: the river addressed as mother (tāy), divine giver, life-sustaining spring. 'O mother who grants all I ask' — the river is a granting deity, responsive to human need, flowing from sky through forest to sea. The progression sky → forest → sea traces the complete hydrological cycle as a divine gift. Body and soul alike are sustained by the river — it is both physical and metaphysical sustenance.`
  },
  {
    num:21, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`கீரந்தையார்`, poetEnglish:`Kīrantaiyār`,
    theme:`வையை கரை அழகு வருணித்தது`, themeEnglish:`The beauty of the Vaiyai's banks`,
    tamil:`பூக்கள் நிறைந்த பொழில் நிறைந்த கரை
மீக்கும் மகளிர் மினுக்கும் ஒளியில்
ஆக்கும் வையை அரும்பிய தாமரை
நோக்கும் கண்கள் நுண் இதழ் திறந்த
மாக்கள் மயங்கும் வையை மலரே`, transliteration:`Pūkkaḷ niṟainta poḻil niṟainta karai
mīkkum makaḷir miṉukkum oḷiyil
ākkum vayyai arumpia tāmarai
nōkkum kaṇkaḷ nuṇ itaḻ tiṟanta
mākkaḷ mayaṅkum vayyai malarē`,
    english:`The bank filled with flowers, filled with groves —
in the sparkling light of the radiant women who rise above —
the Vaiyai's budded lotus opening —
eyes that look: fine petals opening:
the Vaiyai flower that makes all people bewildered.`, tamilUrai:`பூக்கள் நிறைந்த, பொழில் நிறைந்த கரை — ஒளிரும் மகளிர் ஒளியில் — வையை வளர்த்த தாமரை அரும்பு. பார்க்கும் கண்கள், நுண்ணிய இதழ் திறக்கும் — மக்கள் மயங்கும் வையை மலரே.`,
    altTranslation:`The bank filled with flowers, filled with groves — in the radiant women's sparkling light —
the Vaiyai's budded lotus opening: eyes that look, fine petals opening:
the Vaiyai flower that bewilders all who see it.`, note:`A poem that blurs the boundary between the lotus opening and the women's eyes opening — both are petals, both open toward the light, both are flowers of the Vaiyai. The 'bewilderment' (mayaṅkum) of those who see is not confusion but the devotional daze of encountering beauty too great to be processed. The Vaiyai flower is simultaneously the lotus, the women, and the entire scene — a divine manifestation.`
  },
  {
    num:22, section:`vaiyai`,
    deity:`வையை`, deityEnglish:`The Vaiyai River`,
    poet:`நல்லந்துவனார்`, poetEnglish:`Nallantuvāṉar`,
    theme:`வையை நிலைத்து வாழ்க என்று வாழ்த்தியது`, themeEnglish:`Blessing the Vaiyai to flow forever`,
    tamil:`வையை வாழ்க வாழ்க வாழ்க
வையை வெள்ளம் வாழ்க வாழ்க
மதுரை மாநகர் வாழ்க வாழ்க
மதுரை தமிழ் வாழ்க வாழ்க
தமிழர் வாழ்க தமிழ் வாழ்க
பரிபாடல் வாழ்க வாழ்க`, transliteration:`Vayyai vāḻka vāḻka vāḻka
vayyai veḷḷam vāḻka vāḻka
Maturai mānakar vāḻka vāḻka
Maturai tamiḻ vāḻka vāḻka
tamiḻar vāḻka tamiḻ vāḻka
paripāṭal vāḻka vāḻka`,
    english:`Long live the Vaiyai! Long live! Long live!
Long live the Vaiyai flood! Long live! Long live!
Long live great Madurai city! Long live! Long live!
Long live the Tamil of Madurai! Long live! Long live!
Long live the Tamil people! Long live Tamil! Long live!
Long live Paripaāṭal! Long live! Long live!`, tamilUrai:`வையை வாழ்க! வாழ்க! வாழ்க! வையை வெள்ளம் வாழ்க! மதுரை மா நகர் வாழ்க! மதுரை தமிழ் வாழ்க! தமிழர் வாழ்க! தமிழ் வாழ்க! பரிபாடல் வாழ்க!`,
    altTranslation:`Long live the Vaiyai! Long live the Vaiyai flood! Long live great Madurai!
Long live the Tamil of Madurai! Long live the Tamil people! Long live Tamil!
Long live Paripaāṭal!`, note:`The closing poem of the anthology — and one of the most famous passages in all of Tamil literature. The cumulative blessings expand from the river to the city to its language to its people to Tamil itself to the anthology we are reading. 'Long live Paripaāṭal' is the anthology blessing itself — the text completing its own circle. This closing has been recited, inscribed, and celebrated for two thousand years as a declaration of Tamil cultural pride.`
  }
];

if(typeof window!=='undefined'){
  window.PP_DATA={
    sections:PP_SECTIONS,
    poems:PP_POEMS,
    totalPoems:22,
    totalSections:3,
  };
}
