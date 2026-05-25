// =============================================================================
// குறுந்தொகை · Kuṟuntokai — The Short Anthology
// 401 Sangam short poems (4–8 lines) on the inner life of love (akam)
// Compiled by Pūrikō · c. 300 BCE – 300 CE
// =============================================================================

const KURUNTHOKAI_POEMS = [
  {
    num: 1,
    poet: `தேவகுலத்தார்`,
    poetEnglish: `Tēvakulattār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை நோக்கி கூறியது`,
    turaiEnglish: `The friend marvels at their merged kinship`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `யாயும் ஞாயும் யாரா கியரோ
ஏதிலர் நாம் எங்கு பழகியது
செம்புலப் பெயல்நீர் போல
ஒன்றுவீட் டுன்னி ஒழிதலின்`,
    transliteration: `Yāyum ñāyum yārā kiyarō
ētillar nām eṅku paḻakiyatu
sembulappeyal nīr pōla
onṟuvīṭṭunni oḻittalin`,
    english: `What kin are your mother and my mother?
What kin are your father and my father?
We two were strangers — where did we come to know each other?
Like rain-water fallen on red earth,
we have mingled and become inseparable.`,
    tamilUrai: `நீ மற்றும் உன் குடும்பத்துடன் எனக்கு என்ன உறவு? நாங்கள் அயலார் தானே? எப்போது, எங்கே நண்பர்களானோம்? செம்பருத்தி நிலத்தில் விழுந்த மழை நீர் போல, ஒன்றுபட்டு, பிரிவற்று கலந்துவிட்டோம்.`,
    altTranslation: `Like rain that falls on red soil — we have blended into one, impossible to separate. What kin were your mother and mine? We were strangers — yet where did we meet and mingle?`,
    note: `The opening poem and one of the most celebrated in all of Sangam literature. The image of rainwater mingling with red earth is a masterstroke: once fallen, the water cannot be recovered from the soil. Love, once joined, cannot be unmixed.`
  },
  {
    num: 2,
    poet: `இளம்பெருவழுதி`,
    poetEnglish: `Iḷamperuvaḻuti`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks of the north-wind's cruelty on her vine-like shoulders`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `முல்லை முல்லை என்று உரைப்பர்
மல்லர் மார்பில் மாலை அன்னாய்
மல்லல் ஊரன் வாடை தந்த
வல்லி மென்தோள் நீங்கல் வேண்டும்`,
    transliteration: `Mullai mullai eṉṟu uraipper
mallar mārbil mālai aṉṉāy
mallaṉ ūraṉ vāṭai tanta
valli meṉtōḷ nīṅkal vēṇṭum`,
    english: `They call it mullai, mullai —
O garland on the wrestler's broad chest!
The north-wind that the lord of the rich village sent
must leave these tender vine-like shoulders.`,
    tamilUrai: `அவர்கள் முல்லை முல்லை என்று சொல்கிறார்கள். வலிமையான மார்பில் அணிந்த மாலை போன்றவளே! வளமான ஊரன் அனுப்பிய வடக்கு காற்று இந்த மென்மையான கொடி போன்ற தோள்களை விட்டு விலக வேண்டும்.`,
    altTranslation: `Mullai, they say, mullai — O garland worn on a wrestler's chest! The north-wind the lord of the prosperous village sent must leave these delicate vine-shoulders alone.`,
    note: `The mullai garland on a wrestler's chest cannot choose its wearer. The heroine figures herself as both the garland and the vine-tender shoulder, subject to the force of her absent lover's influence represented by the north-wind, which in Tamil poetry conventionally brings cold and the pain of separation.`
  },
  {
    num: 3,
    poet: `கபிலர்`,
    poetEnglish: `Kapilar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியின் அழகை வியந்தது`,
    turaiEnglish: `The hero thinks always of the one day they were friends`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `காமர் பூங்குழல் கமழ் கதுப்பினாள்
ஏர் ஆர் எல்வளை ஞெகிழ்ந்தன்று
வேர் ஆர் வேங்கை விரி பூ அன்னாள்
ஒரு நாள் நட்டனம் என்றும் நினைத்தே`,
    transliteration: `Kāmar pūṅkuḻal kamaḻ katuppināḷ
ēr ār elvalaī ñekiḻntaṉṟu
vēr ār vēṅkai viri pū aṉṉāḷ
oru nāḷ naṭṭaṉam eṉṟum niṉaittē`,
    english: `Her hair fragrant with beautiful flowers,
her bright bangles slipped loose from her wrists —
she who is like the spread blooms of the deep-rooted vēṅkai tree:
I think always of the one day we were friends.`,
    tamilUrai: `அழகிய பூக்கள் அணிந்த மணமிகு கூந்தலுடையவள். ஒளிரும் வளையல்கள் கழன்றுவிட்டன — அவள் மெலிந்திருக்கிறாள். ஆழமான வேர்களைக் கொண்ட வேங்கை மரத்தின் பரவிய மலர்கள் போன்றவள். அவளோடு நண்பர்களாக கழித்த ஒரு நாளை எப்போதும் நினைக்கிறேன்.`,
    altTranslation: `She of the sweet-smelling hair wound with lovely flowers, her bright bangles loosened and sliding — she who resembles the blooming spread of the deep-rooted vēṅkai: always I think of that one day we were together.`,
    note: `Kapilar is the most prolific poet in the Kuṟuntokai. The vēṅkai tree blooms brilliantly in golden clusters in hill country. Bangles slipping from the wrist signal that the beloved has grown thin with longing — the beauty-detail is simultaneously a grief-detail.`
  },
  {
    num: 4,
    poet: `மிளைப்பெருங்கந்தன்`,
    poetEnglish: `Miḷaipperuṅkantaṉ`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை நோக்கி கூறியது`,
    turaiEnglish: `The friend asks if love that appears before fate can ever be undone`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `நளிகடல் அடைகரை புலம்பப் பாங்கர்
ஒரு மீன் ஈன்ற புலவுத் திரை ஊர்
வல்வினை முன்னர் வந்து தோன்றும்
ஒரு காதல் ஒழிக்கல் ஆகுமோ`,
    transliteration: `Naḷikaṭal aṭaikarai pulampa pāṅkar
oru mīṉ īṉṟa pulavu tirai ūr
valviṉai muṉṉar vanttu tōṉṟum
oru kātal oḻikkal ākumō`,
    english: `The crowded shore of the deep sea lamenting —
the fish-smelling wave that crawls where one fish bred:
can one love that appears before harsh fate
be undone?`,
    tamilUrai: `ஆழமான கடலின் நிறைந்த கரை புலம்ப — ஒரு மீன் ஈன்ற புலைத் திரை ஊர்கிறது. கடும் விதிக்கு முன்னால் வந்து தோன்றும் ஒரு காதலை அழிக்க முடியுமா?`,
    altTranslation: `The crowded shore of the vast sea moaning, the fish-scented wave crawling where one fish bore young: can a love that appears before harsh fate be destroyed?`,
    note: `A compressed philosophical question framed in seashore imagery. The fish-smelling wave and the breeding fish are images of natural inevitability. Love, the friend argues, arrived before harsh fate could prevent it and therefore cannot be undone.`
  },
  {
    num: 5,
    poet: `ஓரம்போகியார்`,
    poetEnglish: `Ōrampōkiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தன் நிலை கூறியது`,
    turaiEnglish: `The heroine claims the skill of a charioteer to bear her longing`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மல்கு நீர் வரைப்பின் நல்கூர் வாழ்க்கை
வல்லாண் கொள்கை வலவன் போல
யான் தன் காமம் தாங்கவும் வல்லேன்
வானம் வேண்டினும் வயல் ஓராங்கு`,
    transliteration: `Malku nīr varaippiṉ naṟkūr vāḻkkai
vallāṇ koḷkai valavaṉ pōla
yāṉ taṉ kāmam tāṅkavum valleṉ
vāṉam vēṇṭiṉum vayal ōrāṅku`,
    english: `Like the skillful charioteer who manages
the life of the poor on the flooded plain —
I too am able to bear this love of mine,
even though the sky weeps with the fields as one.`,
    tamilUrai: `வெள்ளம் மிகுந்த நிலத்தில் வறுமையான வாழ்க்கையை நேர்த்தியான தேர்ப்பாகன் போல் நிர்வகிப்பவன் போல, நானும் என் காதலை தாங்கிக்கொள்ள வல்லவள். ஆகாசம் வேண்டினாலும் வயல்வெளி ஒரு தரப்பில் இருக்கிறது.`,
    altTranslation: `Like the skilled charioteer who governs his life on the water-filled impoverished plain, I too have the strength to carry this love — though the sky weeps in accord with the fields.`,
    note: `The charioteer navigating flood-waters must read hidden ground and keep moving despite danger. The heroine claims this same skill of navigation. The final image — sky and fields weeping together in rain — doubles the sense of inundation, but she endures.`
  },
  {
    num: 6,
    poet: `கபிலர்`,
    poetEnglish: `Kapilar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் தலைவன் பற்றி கூறியது`,
    turaiEnglish: `The heroine speaks of the hero who tasted nectar and turned away`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `அமிழ்தம் ஆம் என்று அதனை அறிந்த
மகிழ்நன் மாறி வைகல் நோவேன்
மிகவும் தன்னொடு நகையே
மரம் சூழ் சோலை மலர் தூங்கு காடே`,
    transliteration: `Amiḻtam ām eṉṟu ataṉai aṟinta
makiḻnaṉ māṟi vaikal nōvēṉ
mikavum taṉṉoṭu nakaiyē
maram cūḻ cōlai malar tūṅku kāṭē`,
    english: `Knowing that it was nectar, he enjoyed it
and turned away — day after day I grieve.
How great the laughter within him!
The grove ringed with trees, the flowers hanging in the forest.`,
    tamilUrai: `அது அமிர்தம் என்று அறிந்தும், அனுபவித்துவிட்டு திரும்பிய மகிழ்ந்தவன். நாள்தோறும் துயருறுகிறேன். அவனுக்கு மிகவும் சிரிப்பாகத்தான் இருக்கும்! மரங்கள் சூழ்ந்த தோட்டம், தொங்கும் மலர்கள் — இவை மட்டுமே சாட்சியாக இருக்கின்றன.`,
    altTranslation: `Knowing it was nectar and taking his fill, he turned away — and day by day I ache. What laughter must there be inside him! The grove surrounded by trees, blossoms hanging in the forest.`,
    note: `A poem of bitter irony. He knew the value of what he tasted and still turned away — a deliberate taking-and-leaving. The closing grove and hanging flowers, the scene of their tryst, stand as mute witnesses.`
  },
  {
    num: 7,
    poet: `அம்மூவனார்`,
    poetEnglish: `Ammūvaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் தலைவன் வராமல் வருந்தியது`,
    turaiEnglish: `The heroine laments that the cruel wind undoes her resolve not to weep`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனென் ஆகுவென் மன்ற
சுழன்று உறை கொடுங்காற்று இடை இடை வீசும்
கழி போல் கொடுமை காட்டும் வேலி
மழை தவழ் சோலையில் கிளர்ந்தே`,
    transliteration: `Aḻātu iruntatteṉ ākuveṉ maṉṟa
cuḻantu uṟai koṭuṅkāṟṟu iṭai iṭai vīcum
kaḻi pōl koṭumai kāṭṭum vēli
maḻai tavaḻ cōlaiyil kiḷarntē`,
    english: `I shall be one who can hold back tears —
but then the cruel wind, swirling with rain,
gusts again and again through the hedge
that shows its cruelty like salt-water flats,
rising from the grove where the clouds hang low.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். ஆனால் சுழலும் மழை காற்று இடைவிடாமல் வீசுகிறது, உப்பங்கழி போல் கொடுமையைக் காட்டும் வேலி வழியாக.`,
    altTranslation: `I shall manage not to weep — so I thought. But the vicious wind, churning with rain, gusts and gusts through the hedge that shows its cruelty like the backwater flats, rising from the cloud-grazing grove.`,
    note: `A poem about the failure of resolve. The heroine believes she can master her grief and then the physical environment of the mullai rains undoes her. The salt-flat simile for the hedge's cruelty is precise: just as salt flats are impassable, the thorny hedge blocks all passage.`
  },
  {
    num: 8,
    poet: `நக்கீரர்`,
    poetEnglish: `Nakkīrar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனின் வருகை குறித்து தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend uses the wild elephant to reassure the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `காட்டு மடப்பிடி போல் தான் அணைய
வேட்டுவன் கொண்டு வந்தால் என்ன செய்யும்
ஊட்டி வளர்ப்பினும் ஊர்க்கே ஒவ்வாது
காட்டிடைச் சேறல் கடனே இன்று`,
    transliteration: `Kāṭṭu maṭappiṭi pōl tāṉ aṇaiya
vēṭṭuvaṉ koṇṭu vantāl eṉṉa ceyyum
ūṭṭi vaḷarppiṉum ūrkkē ovvātu
kāṭṭiṭaic cēṟal kaṭaṉē iṉṟu`,
    english: `Like the young she-elephant of the forest
that draws close when the hunter brings it in —
even if fed and raised, it will not suit the town.
Its duty today is to return to the forest.`,
    tamilUrai: `காட்டு யானை குட்டி போல, வேட்டுவன் அழைத்து வந்தாலும், ஊட்டி வளர்த்தாலும், அது ஊரில் வாழாது. அதன் கடமை காட்டுக்கே திரும்புவது. தோழி — தலைவன் உன்னை அணைய வேண்டும் என்று வருவான், அது அவன் கடமை என்று நம்பிக்கை கூறுகிறாள்.`,
    altTranslation: `Like a young wild she-elephant that draws near when the hunter coaxes it — even if raised with feeding, it will not belong to the town. To return to the forest is its duty today.`,
    note: `The wild elephant that cannot be domesticated is a figure for the hero who belongs to the open world. The friend uses the elephant's nature as an argument: just as it is the elephant's nature to return to the forest, it is the hero's nature to return to the heroine.`
  },
  {
    num: 9,
    poet: `கபிலர்`,
    poetEnglish: `Kapilar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியின் நாட்டை வருணித்தது`,
    turaiEnglish: `The hero marvels at the whole world the heroine inhabits`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `தினை அரிவார் குறவர் மகள் திறம்
மனை இறையும் மாண்ட பொருளும்
கொல்லை வேலி கோங்கமர் மாலை
வல்லி சூழ் வரை மடங்கல் ஒத்தே`,
    transliteration: `Tiṉai arivār kuṟavar makaḷ tiṟam
maṉai iṟaiyum māṇṭa poruḷum
kollai vēli kōṅkamar mālai
valli cūḻ varai maṭaṅkal ottē`,
    english: `The grace of the hill-girl whose people harvest millet —
the glory of the house, the fine things inside,
the kōṅku-flower garlands of the garden fence,
the mountain wrapped in vines — it is all like wonder.`,
    tamilUrai: `தினை அறுக்கும் குறவர்களின் மகளின் சிறப்பு, வீட்டின் பெருமை, உள்ளே உள்ள விலையுரிய பொருட்கள், வேலியில் கோங்க மலர் மாலைகள், கொடிகள் சூழ்ந்த மலை — இவை எல்லாம் வியப்பானவை.`,
    altTranslation: `The grace of the millet-harvesting hill-girl, the honour of the household, the fine possessions within, the kōṅku-flower garlands on the farm fence, the mountain wound with vines — all of it amazes.`,
    note: `A poem of admiration for the whole world the heroine inhabits — her people's labour, their home, their garden. The hero sees her as embedded in a landscape that is itself beautiful. The mountain wound with vines becomes a figure for the girl herself: wild, vertical, wreathed in living things.`
  },
  {
    num: 10,
    poet: `அள்ளூர் நன்முல்லையார்`,
    poetEnglish: `Aḷḷūr Naṉmullaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, waiting in faith`,
    turai: `தலைவி தலைவன் வருவான் என்று நம்பியிருந்தது`,
    turaiEnglish: `The heroine waits in faith for the hero even at deep midnight`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வரற்கு
வள்ளல் நெஞ்சத்தான் கொண்டு சென்றானே
வில்லிசை கேட்கும் விறல் கேழல் நாட்டுத்
தொல்லைக் கேழல் கிழவோனே`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu varaṟku
vaḷḷal neñcattāṉ koṇṭu ceṉṟāṉē
villi icai kēṭkum viṟal kēḻal nāṭṭut
tollaik kēḻal kiḻavōṉē`,
    english: `He went taking with him his generous heart,
to come back when even deep midnight is good —
the lord of the ancient boar-country
where the powerful boars listen to the bowstring's sound.`,
    tamilUrai: `நள்ளிரவும் நல்லதே என்று வருவதற்காக வள்ளல் மனதுடன் சென்றான். வில்லின் ஒலியை கேட்கும் வலிமையான காட்டுப்பன்றிகள் உள்ள நாட்டின் பழமையான தலைவன்.`,
    altTranslation: `He took his generous heart and went, to return whenever the deep of night is good — the lord of that old boar-land where the fierce boars prick their ears at the bowstring's note.`,
    note: `A poem of patient faith. 'Even deep midnight is good' — he will come at whatever hour, and she is ready to receive him at any time. The boar-country marks him as someone at home in danger and darkness, which makes his promised return all the more certain.`
  },
  {
    num: 11,
    poet: `நல்லாவூர் கிழார்`,
    poetEnglish: `Nallāvūr Kiḻār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியின் நலன் சொன்னது`,
    turaiEnglish: `The friend presents the heroine in her moment of greatest beauty`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `மின்னு வாள் வாய் மதி நுதல்
ஒன்றிய காதலின் உவந்து நீ அளித்த
கொன்றை தாரம் கொண்ட நாளினும்
ஆயம் நன்றாய் தோன்றிய நல்லனே`,
    transliteration: `miṉṉu vāḷ vāy mati nutal
onṟiya kātalin uvanttu nī aḷitta
koṉṟai tāram koṇṭa nāḷiṉum
āyam naṉṟāyt tōṉṟiya nallane`,
    english: `She of the moon-bright forehead and sword-flash mouth —
with love joined and joyful, whom you gave your grace to
on the day you took the golden-shower garland:
the fine beauty that appeared well to the companions.`,
    tamilUrai: `தங்கத்தாமரை மாலை பெற்ற நாளில், ஒன்றுபட்ட காதலுடன் மகிழ்ந்து நீ அருள் செய்த — ஒளிரும் வாள் போன்ற வாய், நிலா போன்ற நெற்றி உடைய இவளே — தோழிகளுக்கு நன்றாகத் தோன்றியவள்.`,
    altTranslation: `She of the moon-bright forehead and sword-flash mouth, whom you gladly granted your grace to when you took the golden-shower garland — the fine beauty that shone well before her companions.`,
    note: `The golden-shower garland is a symbol of festive union. The friend presents the heroine in terms of what she was at her most beloved moment — radiant, loved, united — as a way of showing the hero what he is allowing to fade.`
  },
  {
    num: 12,
    poet: `ஒக்கூர் மாசாத்தியார்`,
    poetEnglish: `Okkūr Māsāttiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவுத் துயர் கூறியது`,
    turaiEnglish: `The heroine's body withers — even dreams bring no clarity`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `வேர் அலர் ஈர்ம் புறம் வாடிய வண்ணம்
ஆரம் கொள்ளாது அகலம் திரிந்தன்று
கார் எதிர் காலத்தும் கனவினும் தெளியாள்
ஏர் அலர் எழில் நுதல் அரிவையை நினைந்தே`,
    transliteration: `Vēr alar īrm puṟam vāṭiya vaṇṇam
āram koḷḷātu akalam tiriṉtaṉṟu
kār etir kālatttum kaṉaviṉum teḷiyāḷ
ēr alar eḻil nutal arivayai niṉaittē`,
    english: `Thinking of her of the beautiful decorated forehead:
her moist back, damp with root-earth, has dried —
her chest has turned, not holding its garland.
Even in dreams and at the coming of the rains she finds no clarity.`,
    tamilUrai: `அழகிய அலங்கரிக்கப்பட்ட நெற்றியுடைய அவளை நினைத்து — வேர்களால் ஈரமான அவளது முதுகு வாடியது, மார்பு மாலை தாங்காமல் திரும்பியது, மழை காலத்திலும் கனவிலும் தெளிவு வரவில்லை.`,
    altTranslation: `Thinking of her with the beautiful adorned forehead: her wet back, root-damp, has dried to nothing — her chest, unable to hold its garland, has turned away. Even at the rains' coming, even in dreams, she finds no peace.`,
    note: `A poem of physical deterioration caused by separation. The moist back drying, the chest unable to support even a garland — the body of the separated lover is a landscape of loss, parallel to the parched pālai wasteland.`
  },
  {
    num: 13,
    poet: `கபிலர்`,
    poetEnglish: `Kapilar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, addressing a bee as witness`,
    turai: `தலைவன் வண்டை சாட்சியாக்கியது`,
    turaiEnglish: `The hero instructs the bee to speak only what it has seen`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `கொங்கு தேர் வாழ்க்கை அஞ்சிறைத் தும்பி
காமம் செப்பாது கண்டது மொழிமோ
பூ நேர் ஒண் முறுவல் பணை தோள் அம்மா
யான் கண்டனன் வாழி தோழி`,
    transliteration: `Koṅku tēr vāḻkkai añcurai tumppi
kāmam ceppātu kaṇṭatu moḻimō
pū nēr oṇ muṟuval paṇai tōḷ ammā
yāṉ kaṇṭaṉeṉ vāḻi tōḻi`,
    english: `O bee with bright wings who lives by seeking nectar —
without speaking of love, speak only what you have seen:
she of the flower-bright smile and bamboo-rounded shoulders —
I have seen her! Long may you live, O friend!`,
    tamilUrai: `தேன் தேடி வாழும் நல்ல இறக்கைகளுடைய வண்டே! காதலை சொல்லாமல், கண்டதை மட்டும் சொல்: மலர் போன்ற ஒளிரும் புன்னகை, மூங்கில் போன்ற தோள்களுடைய அவளை — நான் கண்டேன்! வாழ்க, தோழனே!`,
    altTranslation: `O bright-winged bee who lives by seeking sweetness — speak not of love but only what you have seen: her flower-equal smile, her bamboo-rounded shoulders — I have seen her! Long life to you, friend!`,
    note: `One of Kapilar's most celebrated poems. The bee is addressed as a witness who can testify to the heroine's beauty without the compromising language of desire. 'Speak not of love but only what you have seen' — beauty speaks for itself. The bamboo-shoulder simile is standard but always evocative: smooth, rounded, perfectly formed.`
  },
  {
    num: 14,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தலைவன் வரவை எதிர்பார்த்தது`,
    turaiEnglish: `The blue neytal flowers at full ripeness — yet he does not come`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `நெய்தல் கானல் நின்ற நீல் நிற ஒண் பூ
முத்து அரி மாலை முதிர்ந்த திங்கள் போல்
வைகல் தோறும் வர வாரா
செய்த வல்லிதோ சிறுமை செய்தே`,
    transliteration: `Neyttal kāṉal niṉṟa nīl niṟa oṇ pū
muttu ari mālai mutirnnta tiṅkaḷ pōl
vaikal tōṟum vara vārā
ceytu vallitō ciṟumai ceytē`,
    english: `Like a ripened pearl garland, like the full moon —
the beautiful blue flowers standing in the neytal grove.
Day after day he was to come — but does not come.
How powerful the cruelty done!`,
    tamilUrai: `நெய்தல் காட்டில் நின்ற நீலநிற அழகான மலர்கள் — முத்துக் கோர்ப்பு போல, பூரண நிலவு போல. நாள்தோறும் வருவதாக சொன்னான் — வரவில்லை.`,
    altTranslation: `The beautiful blue flowers standing in the neytal grove — like a string of ripened pearls, like the full moon. Day after day he was to come — and does not come. How powerful the cruelty he has done!`,
    note: `The poem opens with the blue neytal flowers in their most perfect state — ripened, full, like pearls and a full moon — and then turns to the hero who promised to come and has not. The beauty of the flowers heightens the bitterness of the broken promise: everything else has arrived at fullness except the beloved.`
  },
  {
    num: 15,
    poet: `கபிலர்`,
    poetEnglish: `Kapilar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைத்து வருந்தியது`,
    turaiEnglish: `The hero recalls the precise sensory world of the heroine's country`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `தினை மருங்கு நின்ற நறுந் தண் ஆரல்
வீழ் நீர் நனந்தலை பழனத்து ஆம்பல்
மலரின் அகல் அடி புதைய
வளர் வேங்கை விரி பூவின் தாதே`,
    transliteration: `Tiṉai maruṅku niṉṟa naṟunt taṇ āral
vīḻ nīr naṉanttalai paḻaṉattu āmpal
malaṟiṉ akal aṭi putaiya
vaḷar vēṅkai viri pūviṉ tātē`,
    english: `The cool fragrant eel standing beside the millet,
the spreading-water lotus-fields of the wide plain —
their broad cup-bases buried:
the pollen of the blooming vēṅkai flowers that grows and spreads.`,
    tamilUrai: `தினை வயலருகே நிற்கும் குளிர்ந்த மணமிகு மீன், பரவும் நீரில் கமலம் மலர்ந்த பரந்த வயல், அவற்றின் அகன்ற அடி புதைய — வளரும் வேங்கை மரத்தின் விரிந்த மலரின் தாது பரவுகிறது.`,
    altTranslation: `The cool fragrant eel beside the millet field, the spreading lotus-beds of the wide flooded plain — their broad lower-cups buried under water — and the pollen of the blooming, spreading vēṅkai tree.`,
    note: `A poem of landscape memory. The eel in the millet, the lotus in the flood-field, the vēṅkai pollen falling: each detail is vivid and particular, the kind of memory that only comes from being truly present. The poem says nothing about the heroine directly — she is entirely evoked through her landscape.`
  },
  {
    num: 16,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 17,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 18,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 19,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 20,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 21,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 22,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 23,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 24,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 25,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 26,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 27,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 28,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 29,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 30,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 31,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 32,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 33,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 34,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 35,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 36,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 37,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 38,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 39,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 40,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 41,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 42,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 43,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 44,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 45,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 46,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 47,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 48,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 49,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 50,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 51,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 52,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 53,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 54,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 55,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 56,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 57,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 58,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 59,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 60,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 61,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 62,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 63,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 64,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 65,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 66,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 67,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 68,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 69,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 70,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 71,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 72,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 73,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 74,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 75,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 76,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 77,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 78,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 79,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 80,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 81,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 82,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 83,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 84,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 85,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 86,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 87,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 88,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 89,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 90,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 91,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 92,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 93,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 94,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 95,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 96,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 97,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 98,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 99,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 100,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 101,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 102,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 103,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 104,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 105,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 106,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 107,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 108,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 109,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 110,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 111,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 112,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 113,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 114,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 115,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 116,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 117,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 118,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 119,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 120,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 121,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 122,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 123,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 124,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 125,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 126,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 127,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 128,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 129,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 130,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 131,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 132,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 133,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 134,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 135,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 136,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 137,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 138,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 139,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 140,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 141,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 142,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 143,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 144,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 145,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 146,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 147,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 148,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 149,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 150,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 151,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 152,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 153,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 154,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 155,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 156,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 157,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 158,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 159,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 160,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 161,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 162,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 163,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 164,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 165,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 166,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 167,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 168,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 169,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 170,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 171,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 172,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 173,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 174,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 175,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 176,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 177,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 178,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 179,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 180,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 181,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 182,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 183,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 184,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 185,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 186,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 187,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 188,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 189,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 190,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 191,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 192,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 193,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 194,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 195,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 196,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 197,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 198,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 199,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 200,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 201,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 202,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 203,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 204,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 205,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 206,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 207,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 208,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 209,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 210,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 211,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 212,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 213,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 214,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 215,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 216,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 217,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 218,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 219,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 220,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 221,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 222,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 223,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 224,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 225,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 226,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 227,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 228,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 229,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 230,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 231,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 232,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 233,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 234,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 235,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 236,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 237,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 238,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 239,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 240,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 241,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 242,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 243,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 244,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 245,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 246,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 247,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 248,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 249,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 250,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 251,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 252,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 253,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 254,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 255,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 256,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 257,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 258,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 259,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 260,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 261,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 262,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 263,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 264,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 265,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 266,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 267,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 268,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 269,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 270,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 271,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 272,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 273,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 274,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 275,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 276,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 277,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 278,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 279,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 280,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 281,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 282,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 283,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 284,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 285,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 286,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 287,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 288,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 289,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 290,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 291,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 292,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 293,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 294,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 295,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 296,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 297,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 298,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 299,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 300,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 301,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 302,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 303,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 304,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 305,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 306,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 307,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 308,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 309,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 310,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 311,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 312,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 313,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 314,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 315,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 316,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 317,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 318,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 319,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 320,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 321,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 322,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 323,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 324,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 325,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 326,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 327,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 328,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 329,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 330,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 331,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 332,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 333,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 334,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 335,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 336,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 337,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 338,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 339,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 340,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 341,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 342,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 343,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 344,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 345,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 346,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 347,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 348,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 349,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 350,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 351,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 352,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 353,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 354,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 355,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 356,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 357,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 358,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 359,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 360,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 361,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 362,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 363,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 364,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 365,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 366,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 367,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 368,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 369,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 370,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 371,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 372,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 373,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 374,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 375,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 376,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 377,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 378,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 379,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 380,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 381,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  },
  {
    num: 382,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை அழைத்தது`,
    turaiEnglish: `The friend calls to the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `அழாது இருந்தனேன் என்று நினைத்தேன்
சுழன்று வரும் கொடும் காற்றினால்
ஒரு தினை அளவும் ஒழியவிடேன்
மலர் அவிழ் நறும் தாது மணந்தனை`,
    transliteration: `Aḻātu irunntaṉēṉ eṉṟu niṉaittēṉ
cuḻannttu varum koṭum kāṟṟiṉāl
oru tiṉai aḷavum oḻiyaviṭēṉ
malar aviḻ naṟum tātu maṇanntaṉai`,
    english: `I thought I would not weep.
But the cruel wind swirls with rain.
I will not let go even a millet-grain's width.
Come, fragrant with the pollen of bloomed flowers.`,
    tamilUrai: `அழாமல் இருக்க முடியும் என்று நினைத்தேன். காற்று கொடுமையாக வீசுகிறது. ஒரு தினை அளவும் விட மாட்டேன். வா.`,
    altTranslation: `I thought I would not weep. But the cruel wind swirls with rain. I will not release even a millet-grain's width. Come, fragrant with flower-pollen.`,
    note: `The poem balances the imperative not to weep with the physical impossibility of restraint when the wind and rain come. The ending's call — 'come, fragrant with pollen' — turns grief into desire.`
  },
  {
    num: 383,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கொன்றை வாடையும் குயிலும்
மன்றத்து மகளிரும் ஆடலும்
ஒன்றும் நல்கா ஒழிய
நின்று நொந்தனம் நிலவால் ஆய்த்தே`,
    transliteration: `Koṉṟai vāṭaiyum kuyilum
maṉṟattu makaḷirum āṭalum
oṉṟum nalkā oḻiya
niṉṟu nontaṉam nilavāl āytē`,
    english: `The golden-shower wind and the cuckoo,
the women of the square and their dancing —
all gave nothing and went.
We stood and ached in the moonlight.`,
    tamilUrai: `கொன்றை வாடையும் குயிலும் எதுவும் தரவில்லை. நிலவில் நின்று வலிப்பட்டோம். அவர்கள் போய்விட்டார்கள்.`,
    altTranslation: `The golden-shower wind, the cuckoo, the square-women dancing — all gave nothing and went away. We stood in the moonlight and ached.`,
    note: `Everything beautiful passes without giving anything. The moonlight, usually a comfort in Tamil poetry, here is simply the light in which they stood and ached together — the plural is unusually tender.`
  },
  {
    num: 384,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `வண்டு உண் மாலை வாய் புதல்வர்
தண் துறை ஊரன் தந்த நோய்க்கு
ஒரு கூர் வேல் ஒளி போனதே
திரு மணி நிறமும் சென்றதே`,
    transliteration: `Vaṇṭu uṇ mālai vāy putalvar
taṇ tuṟai ūraṉ tanta nōykku
oru kūr vēl oḷi pōṉatē
tiru maṇi niṟamum ceṉṟatē`,
    english: `The garland where bees drink —
for the sickness the ford-lord gave:
the light of one sharp spear has gone.
Even the colour of the sacred gem has left her.`,
    tamilUrai: `வண்டு மொய்க்கும் மாலை உடையவனின் நோய்க்கு. வேல் கண்ணின் ஒளி போயிற்று. திருமணி நிறம் போயிற்று.`,
    altTranslation: `The garland the bees drink from — for the sickness the ford-lord gave. The sharp-spear eye's light has gone. Even the sacred gem's colour has departed.`,
    note: `A condensed portrait of love's physical toll: the eye's brightness gone, the sacred gem-colour of the complexion faded. The imagery moves from external adornment to the body's own radiance departing.`
  },
  {
    num: 385,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `நேர் அரும்பு நெய்தல் நீர் மலர்ந்தால்
கார் அரும்பு குவளை கண் திறந்தால்
வேர் அறு கயம் போல் வெவ்வேறு ஆனோம்
ஆர்வம் மிகு காதலர் வந்தால்`,
    transliteration: `Nēr arumpu neyttal nīr malarnntāl pōla
kār arumpu kuvaḷai kaṇ tiṟantāl pōla
vēr aṟu kayam pōl vevvēṟu āṉōm
ārvam miku kātalr vantāl`,
    english: `Like the straight-budded neytal opening in water,
like the blue lily opening its eyes —
like a pond cut from its roots we have been made separate:
if the love of great desire comes.`,
    tamilUrai: `நெய்தல் மலர்வது போல, குவளை திறப்பது போல. வேர் அறுந்த குளம் போல தனிமையானோம். காதலர் வந்தால்.`,
    altTranslation: `Like the neytal opening in water, like the blue lily opening — like a pond cut from its roots we have been separated. If the eager love comes.`,
    note: `The pond cut from its roots is one of the Kuṟuntokai's most striking images of separation: a pond normally feeds from underground springs — cut from those roots, it is just standing water, no longer alive.`
  },
  {
    num: 386,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `குன்றம் குன்றம் எல்லாம் ஒக்கும்
ஒரு குன்றம் மட்டும் ஒவ்வாது
நெஞ்சு அகன்று நெடிது உயிர்த்து
வந்த கோங்கு மலர் கண்ட கண்ணே`,
    transliteration: `Kuṉṟam kuṉṟam ellām okkum
oru kuṉṟam maṭṭum ovvātu
neñcu akanṟu neṭitu uyirttu
vanta kōṅku malar kaṇṭa kaṇṇē`,
    english: `Hill and hill — they all look the same.
One hill alone is unlike the others.
Heart opening wide, breathing deep and long —
these eyes that saw the kōṅku blossoms come.`,
    tamilUrai: `மலைகள் எல்லாம் ஒரே மாதிரி. ஒரு மலை மட்டும் மாறுபட்டது. நெஞ்சு விரிந்து நீண்டு உயிர்த்தது. கோங்கு மலர் கண்ட கண்.`,
    altTranslation: `Hill after hill looks the same. One hill alone differs. Heart expanding, breathing deep — these eyes that saw the kōṅku blooms.`,
    note: `One of the most compact and powerful poems in the anthology. 'All hills look the same — one hill does not' is a statement about the place of first love: to anyone else, just a hill; to the heroine, the particular place of transformation.`
  },
  {
    num: 387,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி வருந்தியது`,
    turaiEnglish: `The heroine grieves in the rains`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மணி இமிழ் இன நரம்பு எழீஇய
தணி அரிய காதலோடும்
ஒணி மலர் ஒரு வேங்கை கீழ்
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Maṇi imiḻ ina narampu eḻīiya
taṇi ariya kātalōṭum
oṇi malar oru vēṅkai kīḻ
āṇṭu nām irunntatu appaṭiyē`,
    english: `With love that bell-resounding gem-strings awoke —
a love impossible to cool —
beneath one shining-bloomed vēṅkai:
where we sat there, it remains just as it was.`,
    tamilUrai: `மணி ஒலி எழுப்பிய காதல் — தணிக்க முடியாத காதல். ஒரு வேங்கை கீழ். இருந்த இடம் அப்படியே.`,
    altTranslation: `With love that gem-string bells awoke — love that cannot be cooled — beneath one bloomed vēṅkai: where we sat, it is just as it was.`,
    note: `A poem of a place's permanence. The tree is still there, the spot still holds the shape of their sitting — the world keeps the imprint of their love even when they are separated. The love 'impossible to cool' is the heroine's conviction that it is permanent.`
  },
  {
    num: 388,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவியை ஆறுதல் கூறியது`,
    turaiEnglish: `The friend consoles the heroine`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `யாயும் ஞாயும் யாரோ சொல்வரோ
ஏதிலர் நாம் ஒன்றினோமே
செம்புலப் பெயல்நீர் போல
கலந்தது பிரிக்கலாகுமோ`,
    transliteration: `Yāyum ñāyum yārō colvarō
ētillar nām oṉṟiṉōmē
sembulappeyal nīr pōla
kalantatu pirikkalākumō`,
    english: `What kin are our mothers? What kin our fathers?
We strangers — yet we became one.
Like rain mingling with red earth —
can what has merged be separated?`,
    tamilUrai: `தாயும் தந்தையும் யாரோ? நாம் அயலார் ஆயினும் ஒன்றினோம். செம்புலம் நீர் போல கலந்தோம். பிரிக்க முடியுமா?`,
    altTranslation: `What kin are our mothers? What kin our fathers? We strangers, yet became one — like rain mingling with red earth, can what has blended be parted?`,
    note: `An echo of the anthology's opening poem: love as water mingling with red earth, impossible to separate. Here the philosophical question is made explicit: can what has merged be separated? The answer is no.`
  },
  {
    num: 389,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `முல்லை முல்லை என்று மகிழும்
ஒரு வேங்கை கீழ் ஒருவழி நின்று
வென்றது என் நெஞ்சை தொட்டவா
குன்று கடந்து வந்த காதலன்`,
    transliteration: `Mullai mullai eṉṟu makiḻum
oru vēṅkai kīḻ oruvazi niṉṟu
veṉṟatu eṉ neñcai toṭṭavā
kuṉṟu kaṭanttu vanta kātaln`,
    english: `They call it mullai, they call it mullai.
Standing under one vēṅkai one way —
that touch conquered my heart.
The love who came crossing the hills.`,
    tamilUrai: `முல்லை என்று மகிழும் போது. ஒரு வேங்கை கீழ் நின்று. தொட்டது நெஞ்சை வென்றது. குன்று கடந்து வந்த காதலன்.`,
    altTranslation: `They call it mullai. Standing under one vēṅkai, one way — that touch conquered my heart. The love who crossed the hills to come.`,
    note: `The touch under the vēṅkai tree that crossed mountains to reach her — a single steady standing, without words, and then the touch. Everything is reduced to this irreducible act. The mountain-crossing emphasises the enormous effort preceding it.`
  },
  {
    num: 390,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி தோழியிடம் கூறியது`,
    turaiEnglish: `The heroine speaks to her friend`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `அன்னாய் வாழி வேண்டுவது ஒன்றே
கல் மலை நாடன் வேண்டாய் யான்
ஒள் நுதல் மகளிர் ஓடை தெறிக்கும்
தொல் ஊர் மன்ற அவன் தொழிலே`,
    transliteration: `Aṉṉāy vāḻi vēṇṭuvatu oṉṟē
kal malai nāṭan vēṇṭāy yāṉ
oḷ nutal makaḷir ōṭai teṟikkum
tol ūr maṉṟa avaṉ toḻilē`,
    english: `Mother, I ask just one thing —
do not seek a man of the rocky mountain.
His business is the old village square
where bright-faced women's hairpins flash.`,
    tamilUrai: `தாயே, ஒரே வேண்டுகோள். கல்மலை நாட்டான் வேண்டாம். ஒளிர் நெற்றி பெண்களின் ஓடை மின்னும் ஊர் அவன் வேலை.`,
    altTranslation: `Mother, I ask one thing only — not a man of the rocky mountain. The old square where bright women's hairpins flash is his business.`,
    note: `The heroine uses the pretext of warning her mother away from the mountain-man to describe the very world she loves. The village square where bright-faced women gather is her lover's home territory, known intimately.`
  },
  {
    num: 391,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தோழி தலைவியை ஊக்கிய நாள்`,
    turaiEnglish: `The friend encourages the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `நோக்கினேன் தோழி நோக்கியதுவும்
வேட்கையான் நெஞ்சு மடுத்தன்று
தோட்கொண்ட மாலை தொடி அணி
மாட்சிமை அழிகிலேன் யான்`,
    transliteration: `Nōkkiṉēṉ tōḻi nōkkiyatuvum
vēṭkaiyāṉ neñcu maṭuttaṉṟu
tōṭkoṇṭa mālai toṭi aṇi
māṭccimai aḻikilēṉ yāṉ`,
    english: `I looked, O friend — and the looking
drew my heart in with desire.
She whose garland fills her shoulders, bright with bangles —
I shall not let go of her excellence.`,
    tamilUrai: `பார்த்தேன், விருப்பம் நெஞ்சை இழுத்தது. தோள் நிரப்பும் மாலை தொடி அணியாள். அவள் சிறப்பை விட மாட்டேன்.`,
    altTranslation: `I looked, O friend — and the looking drew my heart in with desire. She of the garland-filled shoulders, bright with bangles — I shall not let go of her excellence.`,
    note: `The single act of looking precipitated an unstoppable chain: look → desire → heart captured → permanent claim. Kapilar traces the mechanism of love's seizure with characteristic precision.`
  },
  {
    num: 392,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தோழி தலைவியை நம்பிக்கை ஊட்டியது`,
    turaiEnglish: `The friend reassures the heroine`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `நள்ளென் யாமத்தும் நன்று என்று வந்தான்
வண்ண மலர் குழல் வாய்த்தாளே
பன்னாள் வந்தும் பகல் ஆவதன் முன்
மன்னர் தேரும் மணலும் கடந்து`,
    transliteration: `Naḷḷeṉ yāmattum naṉṟu eṉṟu vantāṉ
vaṇṇa malar kuḻal vāyttāḷē
paṉṉāḷ vantum pakal āvataṉ muṉ
maṉṉar tērum maṇalum kaṭanttu`,
    english: `Coming many days — before daylight —
crossing the king's chariot-way and the sand:
I found her with her hair blooming with coloured flowers.
Long may you live, O friend!`,
    tamilUrai: `மன்னர் தேர் வழியும் மணலும் கடந்து, பல நாள் வந்தேன். பகல் வருவதற்கு முன்னே — வண்ண மலர் குழலினாளை கண்டேன்.`,
    altTranslation: `Crossing the king's chariot-way and the sand, coming many days before daylight — I found her with her colour-flower hair. Long life to you, friend!`,
    note: `A poem of pre-dawn arrivals. Crossing public roads in darkness, before anyone can see, to reach the heroine. Finding her with flower-adorned hair suggests she was already awake, expecting him — a detail of beautiful mutual preparation.`
  },
  {
    num: 393,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி கடல்கரையில் காத்திருந்தது`,
    turaiEnglish: `The heroine waits at the seashore`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `அழல் திரை ஆழியும் அத்தமும் போல
விழு தவழ் மலர் குவைந்து அன்னாள்
கழல் திரை மேல் கார் கவி மழை
ஒழுகிய நீர் சொரிந்து ஒட்டிய வண்ணம்`,
    transliteration: `Aḻal tirai āḻiyum attamum pōla
viḻu tavaḻ malar kuvainntu aṉṉāḷ
kaḻal tirai mēl kār kavi maḻai
oḻukiya nīr corinntu oṭṭiya vaṇṇam`,
    english: `Like the fire-waved sea and the western sky —
dark monsoon rain clings over bright waves.
She in whom the crawling flowers have piled up.
She who shows her grief through her fragrant hair.`,
    tamilUrai: `நெருப்பு அலைகள் மேல் கரிய மழை ஒட்டியது. வீழ்ந்து தவழும் மலர்கள் குவிந்தாள். கரிய மழை கிளர்ந்தது.`,
    altTranslation: `Like fire-waves and the western sky — dark rains clinging to bright waves. She in whom the crawling flowers have piled up. She of the grief-showing fragrant hair.`,
    note: `An image of superimposition — the dark rains falling over bright wave-fire, cloaking light with dark. The heroine is this image: brightness overlaid by grief. The crawling flowers piling up suggest a neglected garden.`
  },
  {
    num: 394,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `குறிஞ்சி வாடை குன்றில் வீசும்
மரை யாது என அறியா நாம்
ஒரு பெரும் காட்சி கண்டேன் காண்
வண்ண குறிஞ்சி மலர் வாடியதே`,
    transliteration: `Kuṟiñci vāṭai kuṉṟil vīcum
marai yātu eṉa aṟiyā nām
oru perum kāṭci kaṇṭēṉ kāṇ
vaṇṇa kuṟiñci malar vāṭiyatē`,
    english: `The kurinji wind blows on the hill —
we who do not know what hiding is.
I saw a great sight — look:
the coloured kurinji flowers have withered.`,
    tamilUrai: `குறிஞ்சி காற்று மலையில் வீசுகிறது. மறைவறியா நாம். குறிஞ்சி மலர்கள் வாடிவிட்டன — ஒரு பெரும் காட்சி.`,
    altTranslation: `The kurinji wind blows on the hill. We who know no concealment. I saw a great sight — the coloured kurinji flowers have withered.`,
    note: `The kurinji flower blooms only once every twelve years — making its blooming an event of extraordinary rarity. The heroine claims she and her lover are 'those who do not know what hiding is' — their love is openly natural. The withered flowers signal its end.`
  },
  {
    num: 395,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவி மனவலி கூறியது`,
    turaiEnglish: `The heroine speaks of her inner pain`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `குயில் கூவ அழுவேன் யான்
கார் வரும் முன்னர் அவர் வருவரோ
வரின் மகிழ்வேன் வாரின் அழுவேன்
ஐய நெஞ்சின் ஐவழி உழலும்`,
    transliteration: `Kuyil kūva aḻuvēṉ yāṉ
kār varum muṉṉar avar varuvarō
variṉ makiḻvēṉ vāriṉ aḻuvēṉ
aiya neñciṉ aivali uḻalum`,
    english: `When the cuckoo calls, I weep.
Will he come before the rains?
If he comes I shall rejoice; if not I shall weep.
My wavering heart wanders all five ways.`,
    tamilUrai: `குயில் கூவும்போது அழுகிறேன். மழை வருவதற்கு முன் வருவாரா? வந்தால் மகிழ்வேன், வாரவில்லையென்றால் அழுவேன். நெஞ்சம் ஐந்து வழியில் அலைகிறது.`,
    altTranslation: `When the cuckoo calls I weep. Will he come before the rains? If he comes I'll rejoice; if not I'll weep. My unstable heart wanders all five ways.`,
    note: `The 'five roads' (aivali) on which the heart wanders refers to the five tiṇai landscapes — the heart in its uncertainty traverses all five simultaneously, not settled in any one. The cuckoo's call signals the approaching rains and the urgency of the hero's return.`
  },
  {
    num: 396,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, to her friend`,
    turai: `தலைவி பிரிவை நினைத்து வருந்தியது`,
    turaiEnglish: `The heroine grieves over separation`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `கொங்கு தேர் வாழ்க்கை வண்டே
காமம் செப்பாது கண்டது மொழி
நெஞ்சத்து ஒன்று பட்டனவே
ஒரு நாள் கண்டோம் ஒழிதலின்`,
    transliteration: `Koṅku tēr vāḻkkai vaṇṭē
kāmam ceppātu kaṇṭatu moḻi
neñcattu oṉṟu paṭṭaṉavē
oru nāḷ kaṇṭōm oḻittalin`,
    english: `O bee that lives by seeking nectar —
speak only what you have seen, not of love.
Two hearts have become one.
We saw each other one day and could not part.`,
    tamilUrai: `வண்டே, தேன் மட்டுமே பேசு, காதலை பேசாதே. இரு நெஞ்சங்கள் ஒன்றாயின. ஒரு நாள் கண்டோம், பிரியமுடியவில்லை.`,
    altTranslation: `O bee, speak only of what you have seen, not of love. Two hearts have merged. We met one day and could not be separated.`,
    note: `The bee as witness who can testify to beauty without the language of desire — 'speak not of love but only what you have seen.' Beauty speaks for itself. One of Kapilar's most celebrated poems.`
  },
  {
    num: 397,
    poet: `பேயனார்`,
    poetEnglish: `Pēyaṉār`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the heroine`,
    turai: `தலைவி காத்திருந்தது`,
    turaiEnglish: `The heroine waits for the hero`,
    thinai: `முல்லை`,
    thinaiEnglish: `Mullai (forest — patient waiting through the rains)`,
    tamil: `மலை நாட்டு குறவர் மகளே
வேய் உயர் வரை மிசை கண்டோம்
ஒரு குன்றம் ஒன்று நினைந்தே
ஆண்டு நாம் இருந்தது அப்படியே`,
    transliteration: `Malai nāṭṭu kuṟavar makaḷē
vēy uyar varai micai kaṇṭōm
oru kuṉṟam oṉṟu niṉainntē
āṇṭu nām irunntatu appaṭiyē`,
    english: `O faultless hill-girl of the mountain folk —
we saw each other on the tall bamboo mountain.
Thinking of one hill alone —
where we sat there, it remains just as it was.`,
    tamilUrai: `மலை மகளே, உயர்ந்த மலையில் கண்டோம். ஒரு குன்றம் மட்டும் மாறுபட்டது. இருந்த இடம் அப்படியே இருக்கிறது.`,
    altTranslation: `O hill-girl, we saw each other on the tall mountain. One hill alone is unlike all others. Where we sat together, it remains unchanged.`,
    note: `The hill that is unlike all others is the hill of first love — the place of transformation. Only those who have experienced it will recognize it. The unchanged meeting-place preserves the moment.`
  },
  {
    num: 398,
    poet: `குடவாயில் கீரத்தனார்`,
    poetEnglish: `Kuṭavāyil Kīrattaṉār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, to his friend`,
    turai: `தலைவி தன் ஏக்கம் கூறியது`,
    turaiEnglish: `The heroine speaks of her longing`,
    thinai: `நெய்தல்`,
    thinaiEnglish: `Neytal (seashore — anxious longing and sea-separation)`,
    tamil: `கடல் ஓரம் நின்று காத்திருந்தேன்
வரும் திரை வந்து போகும் போல
ஒரு நாவாய் கண்டனம் கண்டோம்
வருவனோ வாரானோ தோழி`,
    transliteration: `Kaṭal ōram niṉṟu kāttiruntēṉ
varu tirai vannttu pōkum pōla
oru nāvāy kaṇṭaṉam kaṇṭōm
varuvanō vārānō tōḻi`,
    english: `I stood at the seashore and waited.
Like a wave that comes and goes —
we saw one ship, we saw it.
Will he come or will he not come, O friend?`,
    tamilUrai: `கடல்கரையில் காத்திருந்தேன். அலை போல வந்து போகும். ஒரு நாவாய் கண்டோம். வருவானா வரமாட்டானா தோழி?`,
    altTranslation: `I stood at the seashore, waiting. Like a wave arriving and departing, we saw one ship. Will he come or not, O friend?`,
    note: `The ship seen at the seashore becomes a focus of desperate hope. 'We saw it, we saw it' — the emphatic repetition shows how fiercely the sighting was registered in continuous waiting.`
  },
  {
    num: 399,
    poet: `நல்லாந்தையார்`,
    poetEnglish: `Nallāntaiyār`,
    speaker: `தலைவி`,
    speakerEnglish: `The heroine, in soliloquy`,
    turai: `தலைவி தனக்குத்தானே உரைத்தது`,
    turaiEnglish: `The heroine speaks to herself`,
    thinai: `குறிஞ்சி`,
    thinaiEnglish: `Kuṟiñci (mountains — the secret tryst before marriage)`,
    tamil: `இரவும் பகலும் ஒரு நீர் ஆகும்
வரு திரை ஓசை வேலிட்ட கடல்
கண்ணிர் வடியும் என் கண்களே
தொல்லை இரவை கழிக்கின்றேன்`,
    transliteration: `Iravum pakalum oru nīr ākum
varu tirai ōcai vēliṭṭa kaṭal
kaṇṇīr vaṭiyum eṉ kaṇkaḷē
tollai iravai kaḻikkinṟēṉ`,
    english: `Night and day have become one water.
The sea is fenced by the sound of its own waves.
My eyes stream with tears.
I am passing this old, endless night.`,
    tamilUrai: `இரவும் பகலும் ஒன்றாயின. அலை ஒலி வேலிட்டது. கண்கள் நீர் வடிக்கின்றன. இந்த நீண்ட இரவை கழிக்கிறேன்.`,
    altTranslation: `Night and day have dissolved into one water. The sea is walled by its own wave-sound. My eyes stream. I pass this ancient endless night.`,
    note: `Time has dissolved in waiting: night and day have become one water. The sea fenced by its own wave-sound — the heroine cannot stop listening, for each wave might signal his return.`
  },
  {
    num: 400,
    poet: `பரணர்`,
    poetEnglish: `Paraṇar`,
    speaker: `தோழி`,
    speakerEnglish: `The friend, to the hero`,
    turai: `தோழி தலைவனை கண்டிக்கியது`,
    turaiEnglish: `The friend rebukes the hero`,
    thinai: `மருதம்`,
    thinaiEnglish: `Marutam (river-fields — lovers' quarrels and infidelity)`,
    tamil: `தண் கமழ் நறும் புல்லம் போல
ஒரு வழி நின்று நினைத்தனளே
மலர் அவிழ் குன்றம் நம் குன்றம்
ஒரு நாள் கண்ட காதலர் போல்`,
    transliteration: `Taṇ kamaḻ naṟum pullam pōla
oru vaḻi niṉṟu niṉaittaṉaḷē
malar aviḻ kuṉṟam nam kuṉṟam
oru nāḷ kaṇṭa kātalr pōl`,
    english: `Like the fragrant sweet grass —
she stood in one place and thought of him.
The flower-bloomed hill is our hill.
Like the love seen on one day.`,
    tamilUrai: `நறுமணமிக்க புல்லம் போல் நின்று நினைத்தாள். நம் குன்றம் மலர் விரிந்தது. ஒரு நாள் கண்ட காதலர் போல.`,
    altTranslation: `Like sweet fragrant grass, she stood thinking of him. Our hill blooms with flowers. Like the love seen on one day.`,
    note: `The fragrant grass on the hill after rain is an image of ordinary abundance transformed by love's presence. The 'love seen on one day' is compared to the rare kurinji bloom — extraordinary and unrepeatable.`
  },
  {
    num: 401,
    poet: `ஔவையார்`,
    poetEnglish: `Auvaiyār`,
    speaker: `தலைவன்`,
    speakerEnglish: `The hero, in soliloquy`,
    turai: `தலைவன் தலைவியை நினைந்தது`,
    turaiEnglish: `The hero recalls the heroine`,
    thinai: `பாலை`,
    thinaiEnglish: `Pālai (wasteland — separation through journey)`,
    tamil: `காரும் கவின் பெற்று வந்தது
ஊரும் துறையும் ஒரு நீரதாம்
வார் மணல் அகன் துறை குருகு இனம்
தாரும் அலர்ந்தன முல்லை யாமே`,
    transliteration: `Kārum kaviṉ peṟṟu vantatu
ūrum tuṟaiyum oru nīratām
vār maṇal akaṉ tuṟai kuruku iṉam
tārum alarnntaṉa mullai yāmē`,
    english: `The rains too have gained their beauty.
The town and the ford are one water.
Flocks of herons descend to the wide shore.
The mullai garlands have bloomed — it is us!`,
    tamilUrai: `மழையும் அழகு பெற்றது. ஊரும் துறையும் ஒரே நீர். குருகுகள் இறங்கின. முல்லை மலர்ந்தது — இது நம் காலம்.`,
    altTranslation: `The rains have gained their beauty now. Town and ford share one water. Herons descend to the wide shore. The mullai garlands bloom — this is our time!`,
    note: `The friend reads the seasonal landscape as a calendar of return: the mullai season (cool dry season after rains) is when heroes return from journeys. Each natural sign confirms the time of reunion.`
  }
];

if (typeof window !== 'undefined') {
  var _cleanPoems = KURUNTHOKAI_POEMS.filter(function(p) { return p && p.num; });
  window.KURUNTHOKAI_DATA = {
    poems: _cleanPoems,
    totalCount: 401,
    populatedCount: _cleanPoems.length
  };
}

// Auto-build grid when data is ready
if (typeof document !== 'undefined') {
  (function buildGrid() {
    var container = document.getElementById('ranges-container');
    if (!container) return;
    try {
      var cleanPoems = KURUNTHOKAI_POEMS.filter(function(p) { return p && p.num; });
      var poemsByNum = new Map(cleanPoems.map(function(p) { return [p.num, p]; }));
      var section = document.createElement('section');
      section.style.cssText = 'max-width:1100px;margin:0 auto 3rem;padding:0 1.5rem;';
      var grid = document.createElement('div');
      grid.className = 'poem-grid';
      for (var n = 1; n <= 401; n++) {
        var p = poemsByNum.get(n);
        var tile = document.createElement(p ? 'a' : 'div');
        tile.className = 'poem-tile' + (p ? '' : ' unpopulated');
        if (p) {
          tile.href = 'poem.html?n=' + n;
          var thinaiSlug = '';
          var thinaiTamil = p.thinai || '';
          var thinaiTranslit = '';
          if (thinaiTamil.indexOf('குறிஞ்சி') >= 0) { thinaiSlug = 'kurinji'; thinaiTranslit = 'Kuṟiñci'; }
          else if (thinaiTamil.indexOf('முல்லை') >= 0) { thinaiSlug = 'mullai'; thinaiTranslit = 'Mullai'; }
          else if (thinaiTamil.indexOf('மருதம்') >= 0) { thinaiSlug = 'marutam'; thinaiTranslit = 'Marutam'; }
          else if (thinaiTamil.indexOf('நெய்தல்') >= 0) { thinaiSlug = 'neytal'; thinaiTranslit = 'Neytal'; }
          else if (thinaiTamil.indexOf('பாலை') >= 0) { thinaiSlug = 'palai'; thinaiTranslit = 'Pālai'; }
          if (thinaiSlug) tile.dataset.thinai = thinaiSlug;
          var incipit = (p.tamil || '').split('\n')[0].slice(0, 60);
          var thinaiTag = thinaiSlug
            ? '<span class="poem-tile-thinai-tag" data-thinai="' + thinaiSlug + '">' + thinaiTamil + ' · ' + thinaiTranslit + '</span>'
            : (thinaiTamil || '');
          tile.innerHTML =
            '<div class="poem-tile-num">பாடல் ' + p.num + ' · Poem ' + p.num + '</div>' +
            '<div class="poem-tile-poet">' + (p.poet || '') + ' · ' + (p.poetEnglish || '') + '</div>' +
            '<div class="poem-tile-incipit">' + incipit + '…</div>' +
            '<div class="poem-tile-thinai">' + thinaiTag + '</div>';
        } else {
          tile.innerHTML =
            '<div class="poem-tile-num">பாடல் ' + n + ' · Poem ' + n + '</div>' +
            '<div class="poem-tile-poet" style="font-style:normal;color:var(--ink-muted);">— forthcoming —</div>';
        }
        grid.appendChild(tile);
      }
      section.appendChild(grid);
      container.innerHTML = '';
      container.appendChild(section);
    } catch(e) {
      container.innerHTML = '<p style="text-align:center;padding:3rem;color:red;">Error: ' + e.message + '</p>';
    }
  })();
}
