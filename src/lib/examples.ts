type ExampleWord = {
  french: string;
  meaning?: string;
  partOfSpeech?: string;
};

const genericExamplePatterns = [
  /^Le mot « .+ » peut être utile dans une conversation quotidienne\.$/,
  /^Il est important de savoir utiliser « .+ » dans un contexte naturel\.$/,
  /^Il est utile de savoir employer « .+ » dans un contexte (naturel|formel)\.$/
];

const cleanTerm = (term: string) =>
  term
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s*\+\s*infinitif/gi, "")
    .split(/\s*[,/]\s*/)[0]
    .trim()
    .replace(/\s+/g, " ");

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const startsWithArticle = (term: string) => /^(un|une|le|la|les|l['’]|des)\s/i.test(term);
const startsWithPluralArticle = (term: string) => /^(les|des)\s/i.test(term);
const startsWithVowel = (term: string) => /^[aeiouyhâàäéèêëîïôöùûü]/i.test(term);

const masculineExceptions = new Set([
  "bagage",
  "boulot",
  "changement",
  "comportement",
  "contenu",
  "domaine",
  "drame",
  "éclairage",
  "enjeu",
  "esprit",
  "feu de circulation",
  "gardien de zoo",
  "honneur",
  "interrogatoire",
  "logement",
  "médicament",
  "métier",
  "milieu",
  "monde",
  "oiseau",
  "parcours",
  "personnel",
  "rapport",
  "rythme",
  "score",
  "stage",
  "théâtre",
  "traitement",
  "trajet",
  "trottoir"
]);

const topicPhrase = (term: string) => {
  if (startsWithArticle(term)) return term;
  if (masculineExceptions.has(term.toLowerCase())) return `le ${term}`;
  if (startsWithVowel(term)) return `l’${term}`;
  if (/(ison|ion|té|ance|ence|ure|ade|esse|ette|ie|ée|euse|trice|e)$/i.test(term)) return `la ${term}`;
  return `le ${term}`;
};
const cleanEnglish = (meaning = "", fallback: string) =>
  (meaning.split(",")[0] || fallback)
    .trim()
    .replace(/^to\s+/i, "")
    .replace(/\s*\/.*$/, "")
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .trim() || fallback;

const adjectiveSignals =
  /(able|ible|aire|al|ale|ant|ante|el|elle|eux|euse|if|ive|ique|ois|oise|é|ée|u|ue)$/i;

const meaningLooksAdjectival = (meaning = "") =>
  /\b(current|daily|heavy|hard|difficult|unfair|frustrating|ethical|major|weak|safe|worried|admirable|awful|absurd|lower|inferior|unclear|taboo|premature|available|free|authentic|silent|broken|different)\b/i.test(
    meaning
  );

const meaningLooksAdverbial = (meaning = "") =>
  /\b(diligently|surprisingly|frankly|barely|hardly|gradually|indeed|prematurely|weekly|immediately)\b/i.test(meaning);

export const isGenericExample = (example = "") => genericExamplePatterns.some((pattern) => pattern.test(example.trim()));

export const createContextualExample = (word: ExampleWord) => {
  const rawTerm = word.french.trim() || "ce point";
  const term = cleanTerm(rawTerm) || rawTerm;
  const lower = term.toLowerCase();
  const partOfSpeech = word.partOfSpeech?.toLowerCase() ?? "";

  if (lower === "ne … presque plus" || lower === "ne ... presque plus") {
    return "Je ne regarde presque plus la télévision depuis mon déménagement.";
  }

  if (lower === "au fur et à mesure") {
    return "Au fur et à mesure, elle comprend mieux les règles du cours.";
  }

  if (lower === "en effet") {
    return "En effet, les résultats confirment cette hypothèse.";
  }

  if (lower === "à peine") {
    return "Il reste à peine dix minutes avant le début de l’examen.";
  }

  if (lower === "par hasard") {
    return "Je l’ai rencontré par hasard devant la bibliothèque.";
  }

  if (lower === "à l’instant" || lower === "à l'instant") {
    return "Elle vient d’arriver à l’instant.";
  }

  if (partOfSpeech === "verb" || /^(se |s['’]|avoir |être |devoir )/.test(lower)) {
    if (lower === "ménager") return "Il faut ménager ses efforts pendant la préparation.";
    if (lower === "puer") return "La poubelle commence à puer après plusieurs jours.";
    if (/^(se |s['’])/.test(lower)) return `Avec un peu de pratique, elle apprend à ${term}.`;
    if (/^avoir /.test(lower)) return `Après une longue journée, il peut ${term}.`;
    if (/^être /.test(lower)) return `Dans ce quartier, chacun veut ${term}.`;
    return `Elle apprend à ${term} avec plus de confiance.`;
  }

  if (partOfSpeech === "connector") {
    return `${capitalize(term)}, cette solution demande encore du temps.`;
  }

  if (startsWithArticle(term)) {
    const verb = startsWithPluralArticle(term) ? "peuvent jouer" : "peut jouer";
    return `${capitalize(term)} ${verb} un rôle important dans cette situation.`;
  }

  if (!term.includes(" ") && (meaningLooksAdjectival(word.meaning) || adjectiveSignals.test(term))) {
    return `Ce choix semble ${term} à première vue.`;
  }

  if (!term.includes(" ") && /ment$/i.test(term) && meaningLooksAdverbial(word.meaning)) {
    return `${capitalize(term)}, elle a préparé son dossier avant l’examen.`;
  }

  if (/^(à|au|aux|avec|chez|dans|de|du|en|par|pour|sans|sous|sur)\b/i.test(term)) {
    return `${capitalize(term)}, elle a mieux compris la situation.`;
  }

  return `${capitalize(topicPhrase(term))} revient souvent pendant la réunion.`;
};

export const createContextualTranslation = (word: ExampleWord) => {
  const term = cleanTerm(word.french.trim() || "this idea") || word.french.trim() || "this idea";
  const lower = term.toLowerCase();
  const partOfSpeech = word.partOfSpeech?.toLowerCase() ?? "";
  const english = cleanEnglish(word.meaning, term);

  if (lower === "ne … presque plus" || lower === "ne ... presque plus") return "I hardly watch television anymore since I moved.";
  if (lower === "au fur et à mesure") return "Gradually, she understands the course rules better.";
  if (lower === "en effet") return "Indeed, the results confirm this hypothesis.";
  if (lower === "à peine") return "There are barely ten minutes left before the exam starts.";
  if (lower === "par hasard") return "I met him by chance in front of the library.";
  if (lower === "à l’instant" || lower === "à l'instant") return "She has just arrived.";
  if (lower === "ménager") return "You have to pace your efforts during preparation.";
  if (lower === "puer") return "The bin starts to stink after several days.";

  if (partOfSpeech === "verb" || /^(se |s['’]|avoir |être |devoir )/.test(lower)) return `She is learning to ${english} with more confidence.`;
  if (partOfSpeech === "connector") return `${capitalize(english)}, this solution still needs more time.`;
  if (startsWithArticle(term)) return `${capitalize(english)} can play an important role in this situation.`;
  if (!term.includes(" ") && (meaningLooksAdjectival(word.meaning) || adjectiveSignals.test(term))) return `This choice seems ${english} at first glance.`;
  if (!term.includes(" ") && /ment$/i.test(term) && meaningLooksAdverbial(word.meaning)) return `${capitalize(english)}, she prepared her file before the exam.`;
  if (/^(à|au|aux|avec|chez|dans|de|du|en|par|pour|sans|sous|sur)\b/i.test(term)) return `${capitalize(english)}, she understood the situation better.`;
  return `The topic of ${english} often comes up during the meeting.`;
};
