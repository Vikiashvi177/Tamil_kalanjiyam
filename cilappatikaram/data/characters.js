/* ==========================================================================
   சிலப்பதிகாரம் · Cilappatikāram
   data/characters.js — key characters in the epic
   ========================================================================== */

const CP_CHARACTERS = [
  {
    id: "kannaki",
    role: "Protagonist · Wife",
    tamil: "கண்ணகி",
    english: "Kaṇṇaki",
    accent: "#8b1a1a",   /* crimson — the central figure */
    description: "The heroine of the epic. A wealthy Cōḷa merchant's daughter, devoted wife to Kōvalaṉ. When Kōvalaṉ abandons her for Mātatavi, she waits without reproach. When he returns penniless, she gives her golden anklet without question. After his unjust execution, her grief transforms into divine fury — she burns Madurai and is received into heaven as a goddess, honoured as Paṭṭiṉi.",
    firstAppears: 1
  },
  {
    id: "kovalan",
    role: "Husband · Tragic Figure",
    tamil: "கோவலன்",
    english: "Kōvalaṉ",
    accent: "#1a3a5a",   /* ocean blue — the fallen man */
    description: "Kaṇṇaki's husband. A wealthy Cōḷa merchant prince — handsome, prosperous, beloved. He abandons Kaṇṇaki for the courtesan Mātatavi, spends all his wealth in her service, and finally returns in poverty. He and Kaṇṇaki travel to Madurai to sell her golden ankle bracelet. There, through the treachery of a goldsmith and the carelessness of a king, he is falsely accused of theft and executed.",
    firstAppears: 1
  },
  {
    id: "matavi",
    role: "Courtesan · Rival",
    tamil: "மாதவி",
    english: "Mātatavi",
    accent: "#4a2878",   /* purple — desire and art */
    description: "The great courtesan of Pukār. A woman of extraordinary beauty, grace, and skill — her inaugural dance at the Indra festival captivates Kōvalaṉ and sets the entire story in motion. She is not a villain: she genuinely loves Kōvalaṉ, and when he misinterprets a love-song and leaves her, she does not try to recall him. After his death, she becomes an ascetic. Her daughter Maṇimēkalai, born of her union with Kōvalaṉ, is the heroine of the sequel epic <a href='../manimekalai/index.html' style='color:inherit;border-bottom:1px solid currentColor'>Maṇimēkalai →</a>.",
    firstAppears: 3
  },
  {
    id: "pandiya-king",
    role: "King · The Unjust Ruler",
    tamil: "பாண்டியன்",
    english: "The Pāṇṭiya King",
    accent: "#7a4a18",   /* sandstone — power and its failure */
    description: "The king of Madurai, ruler of the Pāṇṭiya kingdom. He represents the failure of justice when power acts without investigation. When the treacherous goldsmith accuses Kōvalaṉ of stealing the queen's ankle bracelet, the king accepts the accusation without due process and orders the execution. When Kaṇṇaki confronts him with proof of innocence, he recognises his sin — and dies immediately of shame. His death is the epic's judgment on unjust kingship.",
    firstAppears: 15
  },
  {
    id: "pandiya-queen",
    role: "Queen · The Witness",
    tamil: "பாண்டிய மகளிர்",
    english: "The Pāṇṭiya Queen",
    accent: "#6a3a5a",   /* mauve — grief and witness */
    description: "The queen of Madurai. It is her ankle bracelet — taken by the treacherous goldsmith — that triggers the false accusation against Kōvalaṉ. When Kaṇṇaki demonstrates the truth (her anklet contains rubies; the queen's had pearls), the queen understands the horror of what has happened. She dies of grief alongside the king, but not before speaking her oath confirming Kōvalaṉ's innocence.",
    firstAppears: 17
  },
  {
    id: "kavanti",
    role: "Jain Monk · Guide",
    tamil: "கவுந்தி அடிகள்",
    english: "Kavaṇti Aṭikaḷ",
    accent: "#1a4a2a",   /* forest green — the ascetic witness */
    description: "A Jain ascetic who meets Kōvalaṉ and Kaṇṇaki at a hermitage on the road south and joins their journey to Madurai. He serves as their moral guardian, guide, and the principal witness to Kōvalaṉ's innocence. After Kōvalaṉ's execution, he is the one who must bring the devastating news to Kaṇṇaki. His presence gives the epic its Jain ethical framework — his silence and grief are as eloquent as Kaṇṇaki's fury.",
    firstAppears: 8
  },
  {
    id: "cenguттuvan",
    role: "King · The Just Ruler",
    tamil: "செங்குட்டுவன்",
    english: "Ceṅkuṭṭuvaṉ",
    accent: "#1a4a2a",   /* forest green — the Cēra king */
    description: "The great Cēra king of Vañci — the historical king who appears as a hero in Patiṟṟuppattu Decade VIII. When news of Kaṇṇaki's story reaches him, he is moved to a grand gesture: he leads his army to the Himālayas, fetches a stone washed by the Gaṅgā, and has Kaṇṇaki's image carved from it. He installs her as the goddess Paṭṭiṉi in a new temple. He is the epic's answer to the Pāṇṭiya king — what a just ruler looks like.",
    firstAppears: 24
  },
  {
    id: "ilango",
    role: "Poet · Author",
    tamil: "இளங்கோ அடிகள்",
    english: "Iḷaṅkō Aṭikaḷ",
    accent: "#b8860b",   /* gold — the author's voice */
    description: "The author of the Cilappatikāram — a Cēra prince, brother of King Ceṅkuṭṭuvaṉ, who renounced his royal birthright to become a Jain monk. His voice appears in the prologue and epilogue, framing the entire epic. He heard the story of Kaṇṇaki and Kōvalaṉ, understood its significance, and composed this 6,000-line poem as a monument to the principle that dharma — righteousness — must prevail. He is the first named author in the Tamil epic tradition.",
    firstAppears: 30
  }
];

/* Convenience */
function getCharacter(id) {
  return CP_CHARACTERS.find(c => c.id === id);
}
