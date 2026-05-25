/* ==========================================================================
   வளையாபதி · Valayāpati
   data/context.js — theme groups, preservation sources, lacuna descriptions
   ========================================================================== */

const VP_THEME_GROUPS = [
  {
    key: "pukar",
    tamil: "புகார் நகர்",
    english: "The City of Pukār",
    color: "#2a6b6e",
    fragmentCount: 14,
    description: "Descriptions of the great Cōḷa port city of Pukār — its streets, markets, harbour, and citizens. The same city that opens Cilappatikāram, seen here through a different poetic eye.",
    lacunaAfter: true,
    lacunaNote: "The opening of the narrative — establishing the protagonist's identity, family, and circumstances — is entirely lost. Later references suggest a merchant or noble family setting."
  },
  {
    key: "love",
    tamil: "அன்பும் பிரிவும்",
    english: "Love and Separation",
    color: "#9a3050",
    fragmentCount: 20,
    description: "The lyric heart of the work — the heroine's longing, the language of union and parting, the natural world as mirror of feeling. The most formally perfect verses in the corpus.",
    lacunaAfter: true,
    lacunaNote: "The dramatic complication — what separates the lovers, the false accusation or fate that drives the plot — is lost. Only its emotional aftermath survives."
  },
  {
    key: "ethics",
    tamil: "அற நெறி",
    english: "The Ethical Teaching",
    color: "#2a5a30",
    fragmentCount: 14,
    description: "Jain moral discourse woven into the narrative — on non-violence, truth, compassion, and the proper conduct of the householder. The religious backbone of the epic.",
    lacunaAfter: true,
    lacunaNote: "The middle portion of the narrative arc is almost entirely lost. From external references, this section likely involved trials, journeys, and the intervention of divine or ascetic figures."
  },
  {
    key: "nature",
    tamil: "இயற்கை வருணனை",
    english: "Nature and Festival",
    color: "#7a5818",
    fragmentCount: 12,
    description: "Descriptions of the sea coast, gardens, and festivals — the akam landscape of the Tamil poetic tradition, here woven into a narrative frame rather than a pure lyric poem.",
    lacunaAfter: false,
    lacunaNote: ""
  },
  {
    key: "resolution",
    tamil: "துறவும் முடிவும்",
    english: "Renunciation and Resolution",
    color: "#606070",
    fragmentCount: 12,
    description: "The Jain culmination — the movement toward liberation, the renunciation of worldly attachment, the final state. Consistent with the Jain epic tradition of Cīvaka Cintāmaṇi.",
    lacunaAfter: false,
    lacunaNote: ""
  }
];

const VP_LACUNAE = [
  {
    after: "pukar",
    shortDesc: "The opening narrative — protagonist's origin",
    fullNote: "An unknown number of verses established the protagonist's family, name, and social setting in Pukār. Later summaries suggest a young woman of noble or merchant lineage, a hero connected to her world, and the conditions that will lead to their separation. This is the most significant single lacuna — without it, the surviving fragments float free of their narrative anchor."
  },
  {
    after: "love",
    shortDesc: "The dramatic complication — cause of separation",
    fullNote: "The event or events that separate the lovers and drive the central plot are lost. Given the Jain ethical framing, this likely involved a test of virtue, a false accusation, or the intervention of fate — mirroring the ankle-bracelet crisis in Cilappatikāram. The emotional fragments that survive this gap make clear the separation was experienced as catastrophic."
  },
  {
    after: "ethics",
    shortDesc: "The middle journey — trials and resolution",
    fullNote: "A substantial portion of the narrative's middle section is lost. Based on the pattern of the surviving Jain epics, this section likely involved physical journeys across landscapes, encounters with religious teachers, tests of character, and the gradual movement toward either worldly resolution or renunciation. Individual verses quoted by grammarians suggest vivid scene-setting that cannot now be placed within a story."
  }
];

const VP_PRESERVATION_SOURCES = [
  {
    key: "nampiAkaval",
    name: "Nampi Akaval",
    tamil: "நம்பி அகவல்",
    date: "c. 11th century CE",
    description: "A grammatical commentary by Nampi Ākavar, the richest single source for Valayāpati fragments. The author quoted Valayāpati repeatedly as examples of fine Tamil diction and metre, preserving verses in contexts that tell us something about their grammatical function if not always their narrative position.",
    fragmentsPreserved: 28
  },
  {
    key: "yapparunkalavir",
    name: "Yāpparuṅkala Virutti",
    tamil: "யாப்பருங்கல விருத்தி",
    date: "c. 11th century CE",
    description: "A metrical treatise with commentary that quotes Valayāpati verses as examples of specific metres and prosodic features. These fragments are particularly valuable for establishing the work's formal range — the metres used and the precision of its craft.",
    fragmentsPreserved: 18
  },
  {
    key: "nalaveNbaComm",
    name: "Naḷaveṇbā Commentary",
    tamil: "நளவெண்பா உரை",
    date: "c. 12th–13th century CE",
    description: "Pukaḻēnti's commentary on the Naḷaveṇbā, which quotes Valayāpati verses as illustrations of emotional registers and poetic conventions. These fragments cluster in the lyric and separation groups.",
    fragmentsPreserved: 14
  },
  {
    key: "purapporul",
    name: "Puṟapporuḷ Veṇpāmālai Urai",
    tamil: "புறப்பொருள் வெண்பாமாலை உரை",
    date: "c. 12th century CE",
    description: "A commentary on a systematic work on the conventions of puṟam (public) poetry. Valayāpati is quoted here as an example of how narrative epic adapted the conventions of Sangam poetry — a rare window onto how medieval scholars read the work.",
    fragmentsPreserved: 12
  }
];

const VP_FIVE_EPICS = [
  {
    num: 1,
    tamilName: "சிலப்பதிகாரம்",
    name: "Cilappatikāram",
    author: "Iḷaṅkō Aṭikaḷ",
    religion: "Mixed (Jain/Hindu)",
    status: "intact",
    url: "../cilappatikaram/index.html"
  },
  {
    num: 2,
    tamilName: "மணிமேகலை",
    name: "Maṇimēkalai",
    author: "Cāttaṉār",
    religion: "Buddhist",
    status: "intact",
    url: "../manimekalai/index.html"
  },
  {
    num: 3,
    tamilName: "சீவக சிந்தாமணி",
    name: "Cīvaka Cintāmaṇi",
    author: "Tiruṭakkaṭēvar",
    religion: "Jain",
    status: "intact",
    url: "../civakacintamani/index.html"
  },
  {
    num: 4,
    tamilName: "வளையாபதி",
    name: "Valayāpati",
    author: "Unknown",
    religion: "Jain",
    status: "fragments",
    url: "index.html",
    current: true
  },
  {
    num: 5,
    tamilName: "குண்டலகேசி",
    name: "Kuṇṭalakēci",
    author: "Naṭṭarācaṉār",
    religion: "Buddhist",
    status: "fragments",
    url: "../kundalakesi/index.html"
  }
];
