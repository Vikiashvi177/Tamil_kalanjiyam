/* ==========================================================================
   குண்டலகேசி · Kuṇṭalakēci
   data/context.js — fragment types, narrative arc, preservation sources,
                     Pali parallel, Five Epics panel
   ========================================================================== */

/* ── Fragment types ─────────────────────────────────────────────────────── */

const KK_FRAGMENT_TYPES = [
  {
    key: "debate",
    tamil: "வாதம்",
    english: "Debate",
    color: "#2a2a6e",
    count: 7,
    description: "Formal philosophical exchanges — the intellectual heart of the epic. The debate tradition (vāta) in Tamil narrative poetry at its sharpest. These verses are the most formally intricate fragments, quoted by grammarians as examples of the debate-poem at its finest."
  },
  {
    key: "renunciation",
    tamil: "துறவு",
    english: "Renunciation",
    color: "#5a5858",
    count: 4,
    description: "The heroine's moments of turning away — from home, from Jainism, from the wandering debate life. Emotionally spare, formally precise. They echo the Therīgāthā tradition of women's renunciation verse in Pali — grief transformed into clarity."
  },
  {
    key: "descriptive",
    tamil: "வருணனை",
    english: "Descriptive",
    color: "#8a3820",
    count: 5,
    description: "Landscape, city, and the heroine's presence within them — in the manner of the Tamil nakarapeṭṭai tradition. Some scholars attribute one or two of these to a prologue section. They are the most conventionally lyric of the surviving fragments."
  },
  {
    key: "doctrinal",
    tamil: "தத்துவம்",
    english: "Doctrinal",
    color: "#1a5a58",
    count: 3,
    description: "Direct statement of Buddhist teaching — the Three Marks of Existence (impermanence, suffering, non-self), the chain of dependent origination. The most philosophically dense fragments; the most contested in attribution. They are also the most remarkable: doctrine as poetry."
  }
];

/* ── Narrative positions (for narrative-position reading mode) ──────────── */

const KK_NARRATIVE_POSITIONS = [
  {
    key: "prologue",
    tamil: "தொடக்கம்",
    english: "The City and the Beginning",
    positionNum: 1,
    hasFragments: true,
    sourceBasis: "Tamil fragments + inferred from Pali sources",
    description: "Descriptions of the city where Kuṇṭalakēci was born — her world before the fall. The surviving descriptive fragments are placed here, as they follow the classical Tamil convention of city-praise opening a narrative epic.",
    lacunaAfter: true,
    lacunaShort: "The merchant's daughter and the thief",
    lacunaFull: "Kuṇṭalakēci, daughter of a wealthy merchant, sees a thief being led to execution and falls catastrophically in love with him. She persuades her father to buy his pardon and takes him as her husband. What follows — his attempted murder of her for her jewellery, her act of self-preservation — is the crime around which the entire epic turns. Not a word of it survives in Tamil.",
    lacunaPali: "Preserved in the Dhammapada Aṭṭhakathā (Pali commentary on the Dhammapada, attributed to Buddhaghoṣa, c. 5th century CE): she threw him from a cliff. In Tamil tradition the act is more ambiguous. Both versions agree she was not the aggressor by choice."
  },
  {
    key: "jain-phase",
    tamil: "சமண துறவு",
    english: "The Jain Renunciation",
    positionNum: 2,
    hasFragments: false,
    sourceBasis: "Reconstructed from Pali sources — no surviving Tamil fragments placed here with certainty",
    description: "Stricken by guilt and grief, Kuṇṭalakēci becomes a Jain ascetic — shaving her head, taking the vows, wandering with other nuns. She masters Jain doctrine and logic. But Jainism, for reasons the sources do not fully explain, does not satisfy her. She eventually abandons the Jain path.",
    lacunaAfter: true,
    lacunaShort: "The years of Jain practice and departure",
    lacunaFull: "The entire Jain phase of the heroine's life — how long she practised, what turned her, how she left — is entirely absent from the surviving Tamil fragments. This lacuna is the largest single gap in the epic.",
    lacunaPali: "The Therīgāthā commentary (Dhammapāla, c. 6th century CE) mentions this phase briefly: she was a Jain wanderer who excelled in debate before turning to Buddhism. The Tamil epic presumably gave it fuller treatment."
  },
  {
    key: "wandering",
    tamil: "நாடோடி வாதம்",
    english: "The Wandering Debates",
    positionNum: 3,
    hasFragments: true,
    sourceBasis: "Tamil debate fragments + Pali narrative context",
    description: "Having left Jainism, Kuṇṭalakēci becomes a wandering debater. Her method is distinctive: she plants a jambu branch at the entrance to each town as an open challenge — a formal invitation to philosophical combat. Anyone who defeats her may ask anything of her. She travels from city to city, undefeated, for years.",
    lacunaAfter: false,
    lacunaShort: "",
    lacunaFull: "",
    lacunaPali: ""
  },
  {
    key: "defeat",
    tamil: "தோல்வி",
    english: "The Defeat by Sāriputta",
    positionNum: 4,
    hasFragments: true,
    sourceBasis: "Tamil debate fragments + Pali account of Sāriputta's question",
    description: "In Sāvatthī (Srāvastī), the Buddhist monk Sāriputta — one of the two chief disciples of the Buddha, renowned as foremost in wisdom — accepts her challenge. The debate that follows ends with a single unanswerable question. The pivot of the entire epic. Kuṇṭalakēci is silent.",
    lacunaAfter: true,
    lacunaShort: "The question itself",
    lacunaFull: "Sāriputta's final question — the one that defeats her — is not preserved in the surviving Tamil fragments. It is known from Pali sources. The Tamil epic almost certainly gave it great formal weight; we have only its consequence.",
    lacunaPali: "Sāriputta asks: 'What is the one?' — the riddle whose Buddhist answer is that mind (mano) is the one that underlies and moves through all things. Kuṇṭalakēci, trained in Jain categories that divide the world into multiple substances, has no answer within her existing framework. The question is not a trick; it is the invitation to a different way of seeing."
  },
  {
    key: "liberation",
    tamil: "விடுதலை",
    english: "Renunciation and Liberation",
    positionNum: 5,
    hasFragments: true,
    sourceBasis: "Tamil renunciation and doctrinal fragments",
    description: "Kuṇṭalakēci enters the Buddhist order, receives teaching from the Buddha and Sāriputta, and practises until she attains arahantship — full liberation from the cycle of rebirth. She becomes one of the foremost of the enlightened nuns, celebrated in the Therīgāthā tradition.",
    lacunaAfter: false,
    lacunaShort: "",
    lacunaFull: "",
    lacunaPali: ""
  }
];

/* ── Lacunae (also embedded above, separately listed for renderer) ────────── */

const KK_LACUNAE = [
  {
    after: "prologue",
    shortDesc: "The crime — the marriage, the betrayal, the act",
    fullNote: "Kuṇṭalakēci, daughter of a wealthy merchant, sees a thief being led to execution and falls catastrophically in love with him. She persuades her father to buy his pardon and takes him as her husband. He attempts to murder her for her jewellery; she acts first. The entire event — the crime that defines her and names the epic's emotional core — is lost.",
    paliSource: "Dhammapada Aṭṭhakathā (Pali), c. 5th century CE",
    paliNote: "The Pali commentary describes the husband's treachery in detail. He led her to a cliff-top under the pretence of worship, intending to push her and take her jewellery. She read his intention and acted first. The Tamil tradition preserves the ambiguity; the Pali tradition the mechanics."
  },
  {
    after: "jain-phase",
    shortDesc: "The Jain years — practice, mastery, departure",
    fullNote: "The entire period of Kuṇṭalakēci's life as a Jain ascetic is absent from the surviving fragments. This is probably the largest single loss in the epic — it would have formed a substantial middle section, showing her transformation from a woman defined by a crime into a woman defined by her intellect.",
    paliSource: "Therīgāthā commentary (Dhammapāla, Pali), c. 6th century CE",
    paliNote: "The Pali sources mention the Jain phase only in passing. She excelled in debate even as a Jain; her departure from the order is presented as a turning toward the truth rather than away from error."
  },
  {
    after: "defeat",
    shortDesc: "Sāriputta's unanswerable question",
    fullNote: "The question with which Sāriputta defeats Kuṇṭalakēci is not preserved in the surviving Tamil fragments. It is the pivot of the entire epic — the moment that names her silence, names her opening, names the possibility of liberation. The Tamil poet almost certainly gave it sustained formal treatment.",
    paliSource: "Therīgāthā commentary (Dhammapāla, Pali), c. 6th century CE",
    paliNote: "Sāriputta asks: 'What is the one?' The Buddhist answer: mind (mano) is the one — the one that underlies all experience, connects all rebirths, receives all teaching. Kuṇṭalakēci, trained in Jain pluralism, cannot answer within her existing categories. The silence is the beginning of her liberation."
  }
];

/* ── Preservation sources ────────────────────────────────────────────────── */

const KK_PRESERVATION_SOURCES = [
  {
    key: "yapVir",
    name: "Yāpparuṅkala Virutti",
    tamil: "யாப்பருங்கல விருத்தி",
    date: "c. 11th century CE",
    fragmentsPreserved: 7,
    description: "A metrical treatise with commentary, quoting Kuṇṭalakēci verses as examples of specific metres. The richest single source — particularly for the debate fragments, which illustrate the formal possibilities of the vāta tradition in Tamil poetry."
  },
  {
    key: "purapporul",
    name: "Puṟapporuḷ Veṇpāmālai Urai",
    tamil: "புறப்பொருள் வெண்பாமாலை உரை",
    date: "c. 12th century CE",
    fragmentsPreserved: 5,
    description: "A commentary on conventions of puṟam (public, heroic) poetry, quoting Kuṇṭalakēci as an example of how epic narrative adapted those conventions. These fragments are particularly valuable for understanding the work's formal relationship to the Sangam tradition."
  },
  {
    key: "nannulComm",
    name: "Naṉṉūl Commentary (Mayilainātar)",
    tamil: "நன்னூல் உரை (மயிலைநாதர்)",
    date: "c. 13th century CE",
    fragmentsPreserved: 4,
    description: "The major commentary on Pavananti's grammar Naṉṉūl, quoting Kuṇṭalakēci verses as grammatical examples. These include some of the doctrinal fragments — preserved because their syntax illustrated a grammatical point, not because the commentator cared about their content."
  },
  {
    key: "scattered",
    name: "Scattered Grammatical Sources",
    tamil: "பல இலக்கண நூல்கள்",
    date: "c. 11th–14th century CE",
    fragmentsPreserved: 3,
    description: "Individual verses preserved in various grammatical and rhetorical treatises of the medieval period. Attribution to Kuṇṭalakēci is sometimes explicit, sometimes inferred by later scholars. These are the most contested fragments in the corpus."
  }
];

/* ── Five Epics panel ────────────────────────────────────────────────────── */

const KK_FIVE_EPICS = [
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
    url: "../valayapathi/index.html"
  },
  {
    num: 5,
    tamilName: "குண்டலகேசி",
    name: "Kuṇṭalakēci",
    author: "Naṭṭarācaṉār",
    religion: "Buddhist",
    status: "fragments",
    url: "index.html",
    current: true
  }
];
