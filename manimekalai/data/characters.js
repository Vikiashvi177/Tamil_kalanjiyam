/* ==========================================================================
   மணிமேகலை · Maṇimēkalai
   data/characters.js — key characters and philosophical schools
   ========================================================================== */

const MM_CHARACTERS = [

  /* ── Principal Characters ─────────────────────────────────────── */
  {
    id: "manimekalai",
    type: "character",
    role: "Protagonist · Buddhist Nun",
    tamil: "மணிமேகலை",
    english: "Maṇimēkalai",
    accent: "#0d5c63",   /* ocean teal — the heroine */
    description: "The heroine of the epic. Daughter of the courtesan Mātatavi and the merchant Kōvalaṉ (of Cilappatikāram). Beautiful, gifted, and born into a world of pleasure and performance, she turns irrevocably toward the Buddhist path. Given the miracle bowl Amutacurapi, she feeds the hungry across three cities, debates the philosophers of every school, and attains liberation in Kāñci. She is the Tamil literary tradition's most complete portrait of a woman who chooses — against everything her world intends for her — the life of compassion and wisdom.",
    firstAppears: 1
  },
  {
    id: "matavi",
    type: "character",
    role: "Mother · Former Courtesan · Renunciant",
    tamil: "மாதவி",
    english: "Mātatavi",
    accent: "#4a2878",   /* purple — the mother's arc */
    description: "Maṇimēkalai's mother — the great courtesan of Pukār whose dance captured Kōvalaṉ in Cilappatikāram. In this sequel, she appears transformed by grief into a woman already turning toward the ascetic life. When she witnesses her daughter's miracles and renunciation, she follows her — also donning the robe, also leaving the world behind. Her transformation is one of the epic's most moving moments: the art of seduction exchanged for the art of liberation.",
    firstAppears: 11
  },
  {
    id: "udayakumaran",
    type: "character",
    role: "Prince · Pursuer · Karmic Obstacle",
    tamil: "உதயகுமாரன்",
    english: "Uṭāyakumāraṉ",
    accent: "#8b3a1a",   /* terracotta — desire and its obstacle */
    description: "The Cōḷa prince of Pukār. He sees Maṇimēkalai at the festival of Indra and is overcome with desire — a desire he cannot surrender even as he witnesses her transformation into a figure of holiness. His pursuit is not villainy but karma: past-life bonds connect them, and the epic makes clear that he too must eventually find his path. He is not a villain but a soul in process, bound by attachments he has not yet understood.",
    firstAppears: 2
  },
  {
    id: "manimekhala-goddess",
    type: "character",
    role: "Sea-Goddess · Divine Guardian",
    tamil: "மணிமேகலா தேவி",
    english: "Maṇimēkalā (the Goddess)",
    accent: "#1a6a8a",   /* sea-blue — the divine protector */
    description: "The sea-goddess who shares her name with the heroine — the supernatural guardian who watches over Maṇimēkalai's spiritual development. She transports the heroine to the sacred island, presents the Amutacurapi, and sings the first great hymn to the Buddha. She is both divine protector and teacher — the bridge between the world and the dharma. Her role is to make possible what Maṇimēkalai must then do herself.",
    firstAppears: 3
  },
  {
    id: "aputtiran",
    type: "character",
    role: "Past-Life Figure · Embodiment of Karma",
    tamil: "ஆபுத்திரன்",
    english: "Āputtiraṉ",
    accent: "#6a4a1a",   /* amber-brown — karmic inheritance */
    description: "Not a character in the present story but in the story within the story — the man whose act of giving food to a monk across countless past lives created the karmic foundation for the Amutacurapi. His story, told at length in Canto 17, is the deepest explanation of why the bowl exists and why Maṇimēkalai holds it. He embodies the Buddhist teaching that even one act of genuine generosity ripples across time.",
    firstAppears: 17
  },
  {
    id: "cattanar",
    type: "character",
    role: "Poet · Author",
    tamil: "சாத்தனார்",
    english: "Cāttaṉār",
    accent: "#c07830",   /* saffron — the author's voice */
    description: "The author of the Maṇimēkalai — a merchant-poet of Madurai, a contemporary of Iḷaṅkō Aṭikaḷ (the author of Cilappatikāram), and a Buddhist. His voice shapes the entire epic. Unlike Iḷaṅkō, who was a prince-monk of the Jain tradition, Cāttaṉār writes as a Buddhist layman with deep philosophical knowledge. The doxographical cantos (the debate sections) reveal a man who has studied every school of thought in order to argue against them all.",
    firstAppears: 30
  },

  /* ── Philosophical Schools (appear as opponents in Part III) ──── */
  {
    id: "school-ajivika",
    type: "school",
    role: "Philosophical School · Cantos 23",
    tamil: "ஆசீவகம்",
    english: "Ājīvika",
    accent: "#4a4a5a",
    description: "The school of absolute predetermination — the doctrine that every soul will undergo a fixed number of rebirths before reaching liberation, regardless of action. Founded by Makkhali Gosāla (a contemporary of the Buddha). Maṇimēkalai refutes: if action has no effect, why does karma produce measurable results? The debate in Canto 23.",
    firstAppears: 23
  },
  {
    id: "school-lokayata",
    type: "school",
    role: "Philosophical School · Canto 24",
    tamil: "லோகாயதம்",
    english: "Lokāyata (Materialist / Cārvāka)",
    accent: "#4a4a5a",
    description: "The school of materialism — consciousness arises from matter and dissolves at death, there is no karma or rebirth, only the pleasure and pain of this one life. The most direct challenge to Buddhism's core claims. Maṇimēkalai refutes with dependent origination: the chain of causation cannot begin with matter alone. The debate in Canto 24.",
    firstAppears: 24
  },
  {
    id: "school-samkhya",
    type: "school",
    role: "Philosophical School · Canto 27",
    tamil: "சாங்கியம்",
    english: "Sāṃkhya",
    accent: "#4a4a5a",
    description: "The dualist school — eternal pure consciousness (puruṣa) entangled with eternal matter (prakṛti), liberation as their disentanglement. The most philosophically sophisticated opponent. Maṇimēkalai argues that both eternal substances are unjustifiable — dependent origination explains all phenomena without positing eternal entities. The debate in Canto 27.",
    firstAppears: 27
  },
  {
    id: "school-mimamsa",
    type: "school",
    role: "Philosophical School · Canto 29",
    tamil: "மீமாம்சை",
    english: "Mīmāṃsā",
    accent: "#4a4a5a",
    description: "The school of Vedic ritual authority — the Vedas are eternal, self-validating, and authorless; correct ritual produces dharma and ultimately liberation. Maṇimēkalai argues for direct experiential verification over revealed authority: the Buddha's teaching is validated by its results in lived experience, not by appeal to an eternal text. The debate in Canto 29.",
    firstAppears: 29
  }
];

/* Convenience */
function getCharacter(id) {
  return MM_CHARACTERS.find(c => c.id === id);
}
function getMainCharacters() {
  return MM_CHARACTERS.filter(c => c.type === 'character');
}
function getSchools() {
  return MM_CHARACTERS.filter(c => c.type === 'school');
}
