// =============================================================================
// முப்பந்தல் · Muppandal by Avvaiyar
// 3 verses — one for each of the three halls (pandals) of a noble household
// 5-layer presentation: Tamil, transliteration, English meaning, Tamil urai, alt translation
// =============================================================================

const MUPPANDAL_VERSES = [
  {
    num: 1,
    title: "முதல் பந்தல்",
    titleEnglish: "The First Hall",
    subtitle: "அறிஞர் பந்தல்",
    subtitleEnglish: "Hall of the Learned",
    tamil: "கற்றோர்க்கு எல்லாம் களிப்பும் கவலையும்\nபெற்றோர்க்கு உரியவொன்று என்று — பெரியோர்\nசொற்றிறம் பேணிய சான்றோர் துணையாக\nமுற்றிய பந்தல் முதல்.",
    transliteration: "Kaṟṟōrkku ellām kaḷippum kavalaiyum\npeṟṟōrkku uriyavonṟu eṉṟu — periyōr\ncoṟṟiṟam pēṇiya cāṉṟōr tuṇaiyāka\nmuṟṟiya panthal muthal.",
    english: "Joy and sorrow alike belong to the learned; the wise say this is what is proper to those who have attained. The first and foremost hall is one that stands complete with the company of the noble who cherish the power of the word.",
    tamilUrai: "கற்றவர்களுக்கு மகிழ்ச்சியும் கவலையும் சரிசமம் — இரண்டும் அவர்களுக்கு உரியவை என்று பெரியோர் சொல்வார்கள். சொல்லின் வலிமையை போற்றும் சான்றோர்களின் துணை கொண்டு நிறைவான முதல் பந்தல் எழும்பும். அறிஞர்களின் கூட்டமே ஒரு வீட்டின் முதல் சிறப்பு.",
    altTranslation: "Both gladness and grief belong equally to the learned. The first great hall is the one that stands complete in the company of those who honour the power of righteous speech."
  },
  {
    num: 2,
    title: "இரண்டாம் பந்தல்",
    titleEnglish: "The Second Hall",
    subtitle: "வீரர் பந்தல்",
    subtitleEnglish: "Hall of the Brave",
    tamil: "ஆற்றல் உடையார் அடிக்கடி வாரார்;\nஆற்றல் இலார்க்கு அடியன் இலன்;\nகூற்றம் குடிகொண்ட கோலத்தார் — அந்தோ!\nஏற்றம் இலரோ இவர்.",
    transliteration: "Āṟṟal uṭaiyār aṭikkaṭi vārār;\nāṟṟal ilārkku aṭiyaṉ ilaṉ;\nkūṟṟam kuṭikoṇṭa kōlattār — antō!\nēṟṟam ilarō ivar.",
    english: "The powerful do not come frequently; for the powerless there is no servant. Alas — do those who carry death's own form within them have no rise in fortune?",
    tamilUrai: "வலிமையுடையவர்கள் அடிக்கடி வர மாட்டார்கள். பலவீனர்களுக்கு தொண்டர் இல்லை. மரணம் குடி கொண்ட வீரர்களுக்கு — அந்தோ! — உயர்வு இல்லையா என்று கேட்கிறார் கவி. வீரத்தின் விலை என்ன என்று சிந்திக்க வைக்கிறார்.",
    altTranslation: "The strong do not come often; the weak have no one to serve them. Alas — those who carry death's form within themselves, do they truly have no rise?"
  },
  {
    num: 3,
    title: "மூன்றாம் பந்தல்",
    titleEnglish: "The Third Hall",
    subtitle: "செல்வர் பந்தல்",
    subtitleEnglish: "Hall of the Prosperous",
    tamil: "கொடுப்போர் குறைவிலர்; கொள்வோர் இலர்;\nகொடுப்பதும் ஒரு வகை; கொள்வதும் ஒரு வகை;\nகடுப்போர் கடுப்பினும் கண்ணோட்டம் வேண்டும்;\nவிடுப்போர் விடினும் விரும்பிவிடல் நன்று.",
    transliteration: "Koṭuppōr kuṟaivilar; koḷvōr ilar;\nkoṭuppatumoru vakai; koḷvatumoru vakai;\nkaṭuppōr kaṭuppiṉum kaṇṇōṭṭam vēṇṭum;\nviṭuppōr viṭiṉum virumpi viṭal naṉṟu.",
    english: "Givers are without lack; receivers are without lack. Giving is one kind of act; receiving is one kind. Even when the harsh are harsh, compassion is needed. Even when those who release let go, it is good to let go with grace.",
    tamilUrai: "கொடுப்பவர்களுக்கு குறைவில்லை. பெறுவோருக்கும் குறைவில்லை. கொடுப்பதும் ஒரு வகை அனுபவம்; பெறுவதும் ஒரு வகை அனுபவம். கடினமானவர்கள் கடுமையாக நடந்தாலும் இரக்கம் வேண்டும். விட்டுக்கொடுப்பவர்கள் விட்டாலும் அன்பாக விட்டுக்கொடுப்பதே நல்லது.",
    altTranslation: "Givers are not lacking; receivers are not lacking. Giving is one kind; receiving another. Even when the harsh act harshly, compassion is required. Even when the releasing release, it is good to do so with grace."
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.MUPPANDAL_DATA = {
    verses: MUPPANDAL_VERSES
  };
}
