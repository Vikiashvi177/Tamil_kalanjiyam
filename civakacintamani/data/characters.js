/* ==========================================================================
   சீவக சிந்தாமணி · Cīvaka Cintāmaṇi
   data/characters.js — principal characters
   ========================================================================== */

const CC_CHARACTERS = [
  {
    id: "civakan",
    role: "Protagonist · Prince · Hero",
    tamil: "சீவகன்",
    english: "Cīvakaṉ",
    accent: "#1e1a5e",
    description: "The hero of the epic — the 'fabulous gem' of the title. Born a prince in secret, raised by a merchant, gifted to a superhuman degree in every art: warrior, musician, physician, scholar, lover. The Tamil literary tradition's fullest portrait of the ideal man — not the righteous sufferer (like Kōvalaṉ) or the renunciant (like Maṇimēkalai), but the perfected worldly hero who, having possessed everything, chooses to surrender it. His name means 'the living one' — he is fully alive before he is fully free."
  },
  {
    id: "vicayai",
    role: "Mother · Queen · Jain Nun",
    tamil: "விசயை",
    english: "Vicayai",
    accent: "#3a35a0",
    description: "Cīvakaṉ's mother — a princess of the Vidhēya kingdom who married the just king Caccantan. When her husband is killed by the treacherous Kaṭṭiyaṅkaraṉ, she escapes in a flying peacock-vehicle, gives birth to Cīvakaṉ at a cremation ground, entrusts him to a merchant, and immediately enters the Jain path as a nun. She renounces the world before he has even begun to enter it. The parallel with the final canto is exact: mother and son both surrender everything."
  },
  {
    id: "caccandan",
    role: "Father · Martyred King",
    tamil: "சச்சந்தன்",
    english: "Caccantan",
    accent: "#c8a020",
    description: "Cīvakaṉ's father — the just Jain king of Ēmāntaka. He loses his kingdom and his life to the treacherous minister Kaṭṭiyaṅkaraṉ because he trusted too completely and guarded too little. He is the absence at the centre of the story — the lost kingdom, the lost father, the justice that must be restored."
  },
  {
    id: "kattiyankaran",
    role: "Villain · Treacherous Minister",
    tamil: "கட்டியங்காரன்",
    english: "Kaṭṭiyaṅkaraṉ",
    accent: "#8b1818",
    description: "The treacherous minister who overthrows Caccantan and usurps the throne of Ēmāntaka. He is the obstacle that gives the epic its shape — without him, there is no exile, no quest, no year of wandering. He is not portrayed with great psychological depth; he is the embodiment of adharma (injustice) that must be corrected. Cīvakaṉ defeats him at the end of the year-long journey."
  },
  {
    id: "kantukkaṭan",
    role: "Foster Father · Merchant",
    tamil: "கந்துக்கடன்",
    english: "Kantukkaṭan",
    accent: "#6a4a1a",
    description: "The merchant whose own child has just died when he discovers the infant Cīvakaṉ at the cremation ground. He raises Cīvakaṉ as his own son alongside his other children, recognises the boy's royal origin as he grows, and eventually reveals the truth. He represents the world of the merchant — loyal, decent, prosperous — that shelters the hero until he is ready."
  },
  {
    id: "kantaruvattaiyar",
    role: "Second Wife · Veena Virtuoso",
    tamil: "கந்தருவத்தையார்",
    english: "Kantaruvattaiyār",
    accent: "#b07010",
    description: "The veena virtuoso of Canto 3 — the most celebrated character after Cīvakaṉ himself. She has challenged the world: marry me only if you can surpass my playing. Champions from across the known world have failed. Cīvakaṉ surpasses her — and she rejoices at the surpassing. Her canto contains the most famous musical poetry in the epic, with celestials weeping and flowers raining from heaven at Cīvakaṉ's playing."
  },
  {
    id: "jain-sage",
    role: "Jain Sage · Spiritual Guide",
    tamil: "தவசி",
    english: "The Jain Sage",
    accent: "#606070",
    description: "The unnamed Jain ascetic who counsels Cīvakaṉ at the pivotal moment before his revenge quest — advising him to wait a full year before attacking Kaṭṭiyaṅkaraṉ. His counsel creates the entire episodic structure of the epic: the year of wandering, the seven marriages, the spiritual deepening that turns a prince into a man ready to rule — and eventually to renounce. He reappears at the final canto to guide Cīvakaṉ into the ascetic path."
  },
  {
    id: "tirutakkatevar",
    role: "Poet · Author",
    tamil: "திருட்டக்கடேவர்",
    english: "Tiruṭakkaṭēvar",
    accent: "#c8a020",
    description: "The author of the Cīvaka Cintāmaṇi — a Jain ascetic of the Cōḷa country, based in Madurai, composing in the early 10th century CE. He is credited with approximately 2,700 of the epic's 3,145 quatrains; the rest are by the poetess Kantiyār and anonymous contributors. He introduced the viruttam metre to Tamil literature, and Kambar — composing the great Tamil Rāmāyaṇam a century or two later — used his metre and his style as the direct model."
  }
];

/* Convenience */
function getCharacter(id) {
  return CC_CHARACTERS.find(c => c.id === id);
}
