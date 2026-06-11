import type { ImportBatch, ReviewAttempt, VocabularyItem } from "../lib/types";
import { createExpandedVocabulary } from "./expandedVocabulary";

const today = new Date();
const iso = (offsetDays: number) => {
  const date = new Date(today);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString();
};

export const seedVocabulary: VocabularyItem[] = [
  {
    "id": "approfondir",
    "french": "approfondir",
    "meaning": "to deepen",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il est nécessaire d'approfondir cette analyse avant de conclure.",
    "translation": "to deepen",
    "structures": [
      "approfondir + sujet / analyse"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "contester",
    "french": "contester",
    "meaning": "to challenge",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Certains citoyens contestent cette décision, car elle leur semble injuste.",
    "translation": "to challenge",
    "structures": [
      "contester + idée / décision"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inevitable",
    "french": "inévitable",
    "meaning": "inevitable",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Dans ce contexte, le changement paraît presque inévitable.",
    "translation": "inevitable",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parvenir-a",
    "french": "parvenir à",
    "meaning": "to manage to",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Avec de la pratique, on peut parvenir à parler plus naturellement.",
    "translation": "to manage to",
    "structures": [
      "parvenir à + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remettre-en-cause",
    "french": "remettre en cause",
    "meaning": "to call into question",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette étude remet en cause plusieurs idées reçues.",
    "translation": "to call into question",
    "structures": [
      "remettre en cause + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remettre-a-plus-tard",
    "french": "remettre à plus tard",
    "meaning": "to postpone",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Nous avons dû remettre la réunion à plus tard.",
    "translation": "to postpone",
    "structures": [
      "remettre + nom + à plus tard"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bouleverser",
    "french": "bouleverser",
    "meaning": "to transform/disrupt/deeply affect",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Les nouvelles technologies ont bouleversé notre manière de travailler.",
    "translation": "to transform/disrupt/deeply affect",
    "structures": [
      "bouleverser + habitudes / secteur"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "susciter",
    "french": "susciter",
    "meaning": "to generate/provoke",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette question suscite de nombreux débats dans la société actuelle.",
    "translation": "to generate/provoke",
    "structures": [
      "susciter + réaction / débat"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nuancer",
    "french": "nuancer",
    "meaning": "to qualify/add nuance",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il convient de nuancer cette opinion, car la réalité est plus complexe.",
    "translation": "to qualify/add nuance",
    "structures": [
      "nuancer + opinion / propos"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "contribuer-a",
    "french": "contribuer à",
    "meaning": "to contribute to",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "L'éducation peut contribuer à réduire les inégalités.",
    "translation": "to contribute to",
    "structures": [
      "contribuer à + nom / infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "imprimer",
    "french": "imprimer",
    "meaning": "to print",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Je dois imprimer ce document avant la réunion.",
    "translation": "to print",
    "structures": [
      "imprimer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ou-bien",
    "french": "ou bien",
    "meaning": "or else",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Ou bien, il faut analyser la situation avec prudence.",
    "translation": "or else",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "guerison",
    "french": "guérison",
    "meaning": "healing, recovery",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La guérison revient souvent pendant la réunion.",
    "translation": "The topic of healing often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fonce",
    "french": "foncé, foncée",
    "meaning": "dark",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois foncé selon le contexte.",
    "translation": "dark",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pointe-du-doigt",
    "french": "pointe du doigt",
    "meaning": "fingertip",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le pointe du doigt revient souvent pendant la réunion.",
    "translation": "The topic of fingertip often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tant-que",
    "french": "tant que",
    "meaning": "as long as, while",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Tant que, il faut analyser la situation avec prudence.",
    "translation": "as long as, while",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inferieur",
    "french": "inférieur",
    "meaning": "inferior, lower",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble inférieur à première vue.",
    "translation": "This choice seems inferior at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "menager",
    "french": "ménager",
    "meaning": "to spare, to handle carefully",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Il faut ménager ses efforts pendant la préparation.",
    "translation": "You have to pace your efforts during preparation.",
    "structures": [
      "ménager + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "puer",
    "french": "puer",
    "meaning": "to stink",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "La poubelle commence à puer après plusieurs jours.",
    "translation": "The bin starts to stink after several days.",
    "structures": [
      "puer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tabou",
    "french": "tabou",
    "meaning": "taboo",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble tabou à première vue.",
    "translation": "This choice seems taboo at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "alors-jusqu-au-bout",
    "french": "alors jusqu'au bout",
    "meaning": "then to the very end",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’alors jusqu'au bout revient souvent pendant la réunion.",
    "translation": "The topic of then to the very end often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "banaliser",
    "french": "banaliser",
    "meaning": "to trivialise",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à banaliser avec plus de confiance.",
    "translation": "She is learning to trivialise with more confidence.",
    "structures": [
      "banaliser + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mener",
    "french": "mener",
    "meaning": "to lead, to conduct",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mener avec plus de confiance.",
    "translation": "She is learning to lead with more confidence.",
    "structures": [
      "mener + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "precoce-precocement",
    "french": "précoce, précocement",
    "meaning": "premature; prematurely",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble précoce à première vue.",
    "translation": "This choice seems premature; prematurely at first glance.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "scolarisation",
    "french": "scolarisation",
    "meaning": "schooling",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La scolarisation revient souvent pendant la réunion.",
    "translation": "The topic of schooling often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "assidument",
    "french": "assidûment",
    "meaning": "diligently",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Assidûment, elle a préparé son dossier avant l’examen.",
    "translation": "Diligently, she prepared her file before the exam.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "flou",
    "french": "flou",
    "meaning": "blurred, unclear",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble flou à première vue.",
    "translation": "This choice seems blurred at first glance.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aussitot-que",
    "french": "aussitôt que",
    "meaning": "as soon as",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Aussitôt que, il faut analyser la situation avec prudence.",
    "translation": "as soon as",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "des-que",
    "french": "dès que",
    "meaning": "as soon as",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Dès que, il faut analyser la situation avec prudence.",
    "translation": "as soon as",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lorsque",
    "french": "lorsque",
    "meaning": "when",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Lorsque, il faut analyser la situation avec prudence.",
    "translation": "when",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quand",
    "french": "quand",
    "meaning": "when",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Quand, il faut analyser la situation avec prudence.",
    "translation": "when",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "alors-que",
    "french": "alors que",
    "meaning": "while, whereas",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Alors que, il faut analyser la situation avec prudence.",
    "translation": "while, whereas",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tandis-que",
    "french": "tandis que",
    "meaning": "while, whereas",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Tandis que, il faut analyser la situation avec prudence.",
    "translation": "while, whereas",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "apres-que",
    "french": "après que",
    "meaning": "after",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Après que, il faut analyser la situation avec prudence.",
    "translation": "after",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "comme",
    "french": "comme",
    "meaning": "as, since, like",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Comme, il faut analyser la situation avec prudence.",
    "translation": "as, since, like",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etant-donne-que",
    "french": "étant donné que",
    "meaning": "given that, in view of",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Étant donné que, il faut analyser la situation avec prudence.",
    "translation": "given that, in view of",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "maintenant-que",
    "french": "maintenant que",
    "meaning": "now that",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Maintenant que, il faut analyser la situation avec prudence.",
    "translation": "now that",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parce-que",
    "french": "parce que",
    "meaning": "because",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Parce que, il faut analyser la situation avec prudence.",
    "translation": "because",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "car",
    "french": "car",
    "meaning": "because, for",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Car, il faut analyser la situation avec prudence.",
    "translation": "because, for",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pendant-que",
    "french": "pendant que",
    "meaning": "while, during",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Pendant que, il faut analyser la situation avec prudence.",
    "translation": "while, during",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "puisque",
    "french": "puisque",
    "meaning": "since",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Puisque, il faut analyser la situation avec prudence.",
    "translation": "since",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "si",
    "french": "si",
    "meaning": "if",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Si, il faut analyser la situation avec prudence.",
    "translation": "if",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vu-que",
    "french": "vu que",
    "meaning": "given that, in view of",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Vu que, il faut analyser la situation avec prudence.",
    "translation": "given that, in view of",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bien-que",
    "french": "bien que",
    "meaning": "although",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Bien que, il faut analyser la situation avec prudence.",
    "translation": "although",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "malgre-que",
    "french": "malgré que",
    "meaning": "although, despite",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Malgré que, il faut analyser la situation avec prudence.",
    "translation": "although, despite",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quoique",
    "french": "quoique",
    "meaning": "although",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Quoique, il faut analyser la situation avec prudence.",
    "translation": "although",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tiers-de",
    "french": "un tiers de",
    "meaning": "a third of",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un tiers de peut jouer un rôle important dans cette situation.",
    "translation": "A third of can play an important role in this situation.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "par-contre",
    "french": "par contre",
    "meaning": "however, on the other hand",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Par contre, il faut analyser la situation avec prudence.",
    "translation": "however, on the other hand",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-revanche",
    "french": "en revanche",
    "meaning": "however, on the other hand",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En revanche, il faut analyser la situation avec prudence.",
    "translation": "however, on the other hand",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "encore",
    "french": "encore",
    "meaning": "again, still",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Encore, il faut analyser la situation avec prudence.",
    "translation": "again, still",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "au-bon-moment",
    "french": "au bon moment",
    "meaning": "at the right time",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Au bon moment, il faut analyser la situation avec prudence.",
    "translation": "at the right time",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "c-est-a-dire",
    "french": "c'est-à-dire",
    "meaning": "that is to say",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "C'est-à-dire, il faut analyser la situation avec prudence.",
    "translation": "that is to say",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-gros",
    "french": "en gros",
    "meaning": "basically",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En gros, il faut analyser la situation avec prudence.",
    "translation": "basically",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-fait",
    "french": "en fait",
    "meaning": "in fact, actually",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En fait, il faut analyser la situation avec prudence.",
    "translation": "in fact, actually",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-realite",
    "french": "en réalité",
    "meaning": "in fact, actually",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En réalité, il faut analyser la situation avec prudence.",
    "translation": "in fact, actually",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "du-coup",
    "french": "du coup",
    "meaning": "as a result, so",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Du coup, il faut analyser la situation avec prudence.",
    "translation": "as a result, so",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "contre",
    "french": "contre",
    "meaning": "against, versus",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Contre, il faut analyser la situation avec prudence.",
    "translation": "against, versus",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pourtant",
    "french": "pourtant",
    "meaning": "yet, however",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Pourtant, il faut analyser la situation avec prudence.",
    "translation": "yet, however",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-travers",
    "french": "à travers",
    "meaning": "through",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À travers, il faut analyser la situation avec prudence.",
    "translation": "through",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "autant-que",
    "french": "autant que",
    "meaning": "as much as",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Autant que, il faut analyser la situation avec prudence.",
    "translation": "as much as",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "afin-de",
    "french": "afin de",
    "meaning": "in order to",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Afin de, il faut analyser la situation avec prudence.",
    "translation": "in order to",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pour-que",
    "french": "pour que",
    "meaning": "so that, in order that",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Pour que, il faut analyser la situation avec prudence.",
    "translation": "so that, in order that",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "surtout",
    "french": "surtout",
    "meaning": "especially",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Surtout, il faut analyser la situation avec prudence.",
    "translation": "especially",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "plutot",
    "french": "plutôt",
    "meaning": "rather, instead",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Plutôt, il faut analyser la situation avec prudence.",
    "translation": "rather, instead",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "plutot-que",
    "french": "plutôt que",
    "meaning": "instead of, rather than",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Plutôt que, il faut analyser la situation avec prudence.",
    "translation": "instead of, rather than",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ainsi-que",
    "french": "ainsi que",
    "meaning": "as well as",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Ainsi que, il faut analyser la situation avec prudence.",
    "translation": "as well as",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aucun",
    "french": "aucun, aucune",
    "meaning": "none, no",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’aucun revient souvent pendant la réunion.",
    "translation": "The topic of none often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aucun-d-entre-eux",
    "french": "aucun d'entre eux",
    "meaning": "none of them",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’aucun d'entre eux revient souvent pendant la réunion.",
    "translation": "The topic of none of them often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aucune-idee",
    "french": "aucune idée",
    "meaning": "no idea",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’aucune idée revient souvent pendant la réunion.",
    "translation": "The topic of no idea often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "comme-d-habitude",
    "french": "comme d'habitude",
    "meaning": "as usual",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Comme d'habitude, il faut analyser la situation avec prudence.",
    "translation": "as usual",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "par-hasard",
    "french": "par hasard",
    "meaning": "by chance, by accident",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Par hasard, il faut analyser la situation avec prudence.",
    "translation": "by chance, by accident",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "enfin",
    "french": "enfin",
    "meaning": "finally",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Enfin, il faut analyser la situation avec prudence.",
    "translation": "finally",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "finalement",
    "french": "finalement",
    "meaning": "finally",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Finalement, il faut analyser la situation avec prudence.",
    "translation": "finally",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sans-doute",
    "french": "sans doute",
    "meaning": "without a doubt",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Sans doute, il faut analyser la situation avec prudence.",
    "translation": "without a doubt",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vite-que-possible",
    "french": "vite que possible",
    "meaning": "as soon as possible",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Vite que possible, il faut analyser la situation avec prudence.",
    "translation": "as soon as possible",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "il-va-sans-dire-que",
    "french": "il va sans dire que",
    "meaning": "it goes without saying that",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Il va sans dire que, il faut analyser la situation avec prudence.",
    "translation": "it goes without saying that",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-il-y-a-lieu",
    "french": "s'il y a lieu",
    "meaning": "if necessary",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "S'il y a lieu, il faut analyser la situation avec prudence.",
    "translation": "if necessary",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tel-que-telle-que",
    "french": "tel que, telle que",
    "meaning": "such as",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Tel que, telle que, il faut analyser la situation avec prudence.",
    "translation": "such as",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "deja",
    "french": "déjà",
    "meaning": "already",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Déjà, il faut analyser la situation avec prudence.",
    "translation": "already",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "toujours",
    "french": "toujours",
    "meaning": "always, still",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Toujours, il faut analyser la situation avec prudence.",
    "translation": "always, still",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "je-ne-sais-pas",
    "french": "je ne sais pas",
    "meaning": "I don't know",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le je ne sais pas revient souvent pendant la réunion.",
    "translation": "The topic of I don't know often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "plupart",
    "french": "la plupart",
    "meaning": "most, majority",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La plupart peut jouer un rôle important dans cette situation.",
    "translation": "Most can play an important role in this situation.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "moins",
    "french": "moins",
    "meaning": "less",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le moins revient souvent pendant la réunion.",
    "translation": "The topic of less often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lendemain",
    "french": "lendemain",
    "meaning": "the next day",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le lendemain revient souvent pendant la réunion.",
    "translation": "The topic of the next day often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sous",
    "french": "sous",
    "meaning": "under",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Sous, elle a mieux compris la situation.",
    "translation": "Under, she understood the situation better.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "boule-dans-la-gorge",
    "french": "boule dans la gorge",
    "meaning": "lump in the throat",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La boule dans la gorge revient souvent pendant la réunion.",
    "translation": "The topic of lump in the throat often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "partout",
    "french": "partout",
    "meaning": "everywhere",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le partout revient souvent pendant la réunion.",
    "translation": "The topic of everywhere often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-tout-prix",
    "french": "à tout prix",
    "meaning": "at all costs",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À tout prix, il faut analyser la situation avec prudence.",
    "translation": "at all costs",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-la-fois",
    "french": "à la fois",
    "meaning": "at the same time",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À la fois, il faut analyser la situation avec prudence.",
    "translation": "at the same time",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cependant",
    "french": "cependant",
    "meaning": "however",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Cependant, il faut analyser la situation avec prudence.",
    "translation": "however",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "toutefois",
    "french": "toutefois",
    "meaning": "however, nevertheless",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Toutefois, il faut analyser la situation avec prudence.",
    "translation": "however, nevertheless",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sans-critiques",
    "french": "sans critiques",
    "meaning": "without criticism",
    "category": "Expression",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Sans critiques, elle a mieux compris la situation.",
    "translation": "Without criticism, she understood the situation better.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "expression"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dont",
    "french": "dont",
    "meaning": "of which, of whom",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Dont, il faut analyser la situation avec prudence.",
    "translation": "of which, of whom",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "autour-de",
    "french": "autour de",
    "meaning": "around",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Autour de, il faut analyser la situation avec prudence.",
    "translation": "around",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "au-dela-de",
    "french": "au-delà de",
    "meaning": "beyond",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Au-delà de, il faut analyser la situation avec prudence.",
    "translation": "beyond",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "desormais",
    "french": "désormais",
    "meaning": "from now on, henceforth",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Désormais, il faut analyser la situation avec prudence.",
    "translation": "from now on, henceforth",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etape-par-etape",
    "french": "étape par étape",
    "meaning": "step by step",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Étape par étape, il faut analyser la situation avec prudence.",
    "translation": "step by step",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dans-ces-conditions",
    "french": "dans ces conditions",
    "meaning": "given these conditions",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Dans ces conditions, il faut analyser la situation avec prudence.",
    "translation": "given these conditions",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "du-tout",
    "french": "du tout",
    "meaning": "at all",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Du tout, il faut analyser la situation avec prudence.",
    "translation": "at all",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dans-la-mesure-du-possible",
    "french": "dans la mesure du possible",
    "meaning": "as much as possible",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Dans la mesure du possible, il faut analyser la situation avec prudence.",
    "translation": "as much as possible",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "par-avance",
    "french": "par avance",
    "meaning": "in advance",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Par avance, il faut analyser la situation avec prudence.",
    "translation": "in advance",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-tous-cas",
    "french": "en tous cas",
    "meaning": "in any case, anyway",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En tous cas, il faut analyser la situation avec prudence.",
    "translation": "in any case, anyway",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-long-terme",
    "french": "à long terme",
    "meaning": "long term",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À long terme, il faut analyser la situation avec prudence.",
    "translation": "long term",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-court-terme",
    "french": "à court terme",
    "meaning": "short term",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À court terme, il faut analyser la situation avec prudence.",
    "translation": "short term",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lie-a",
    "french": "lié à",
    "meaning": "linked to, related to",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Lié à, il faut analyser la situation avec prudence.",
    "translation": "linked to, related to",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "face-a-face",
    "french": "face à face",
    "meaning": "face to face",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Face à face, il faut analyser la situation avec prudence.",
    "translation": "face to face",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "travail-d-equipe",
    "french": "travail d'équipe",
    "meaning": "teamwork",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "La travail d'équipe revient souvent pendant la réunion.",
    "translation": "The topic of teamwork often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "equipe",
    "french": "équipe",
    "meaning": "team",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’équipe revient souvent pendant la réunion.",
    "translation": "The topic of team often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "compagnie-de-telephone",
    "french": "compagnie de téléphone",
    "meaning": "telephone company",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La compagnie de téléphone revient souvent pendant la réunion.",
    "translation": "The topic of telephone company often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reseau",
    "french": "réseau",
    "meaning": "network",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble réseau à première vue.",
    "translation": "This choice seems network at first glance.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "recherche",
    "french": "recherche",
    "meaning": "research",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La recherche revient souvent pendant la réunion.",
    "translation": "The topic of research often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chercheur-chercheuse",
    "french": "chercheur, chercheuse",
    "meaning": "researcher",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le chercheur revient souvent pendant la réunion.",
    "translation": "The topic of researcher often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-faveur-de",
    "french": "en faveur de",
    "meaning": "in favour of",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En faveur de, il faut analyser la situation avec prudence.",
    "translation": "in favour of",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "metier",
    "french": "métier",
    "meaning": "job, profession",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à métier avec plus de confiance.",
    "translation": "She is learning to job with more confidence.",
    "structures": [
      "métier + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ecolier",
    "french": "écolier, écolière",
    "meaning": "schoolboy, schoolgirl",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à écolier avec plus de confiance.",
    "translation": "She is learning to schoolboy with more confidence.",
    "structures": [
      "écolier, écolière + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "stage",
    "french": "stage",
    "meaning": "internship",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le stage revient souvent pendant la réunion.",
    "translation": "The topic of internship often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "animateur",
    "french": "animateur",
    "meaning": "animator, host, presenter",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’animateur revient souvent pendant la réunion.",
    "translation": "The topic of animator often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jeunesse",
    "french": "jeunesse",
    "meaning": "youth",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La jeunesse revient souvent pendant la réunion.",
    "translation": "The topic of youth often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vegetaux",
    "french": "végétaux",
    "meaning": "plants, vegetables",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le végétaux revient souvent pendant la réunion.",
    "translation": "The topic of plants often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "branche",
    "french": "branche",
    "meaning": "branch",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La branche revient souvent pendant la réunion.",
    "translation": "The topic of branch often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "scier",
    "french": "scier",
    "meaning": "to saw",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à scier avec plus de confiance.",
    "translation": "She is learning to saw with more confidence.",
    "structures": [
      "scier + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lieu",
    "french": "lieu",
    "meaning": "place",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble lieu à première vue.",
    "translation": "This choice seems place at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "amitie",
    "french": "amitié",
    "meaning": "friendship",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble amitié à première vue.",
    "translation": "This choice seems friendship at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etranger",
    "french": "étranger",
    "meaning": "foreigner, stranger",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à étranger avec plus de confiance.",
    "translation": "She is learning to foreigner with more confidence.",
    "structures": [
      "étranger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "voyons",
    "french": "voyons",
    "meaning": "let's see",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le voyons revient souvent pendant la réunion.",
    "translation": "The topic of let's see often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-lier",
    "french": "se lier",
    "meaning": "to bond",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à se lier.",
    "translation": "She is learning to bond with more confidence.",
    "structures": [
      "se lier + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "comporte",
    "french": "comporte",
    "meaning": "includes",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La comporte revient souvent pendant la réunion.",
    "translation": "The topic of includes often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reseautage",
    "french": "réseautage",
    "meaning": "networking",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La réseautage revient souvent pendant la réunion.",
    "translation": "The topic of networking often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "interdiction-de",
    "french": "interdiction de",
    "meaning": "the banning of",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’interdiction de revient souvent pendant la réunion.",
    "translation": "The topic of the banning of often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "paraitre",
    "french": "paraître",
    "meaning": "to appear",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à paraître avec plus de confiance.",
    "translation": "She is learning to appear with more confidence.",
    "structures": [
      "paraître + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "confiance",
    "french": "confiance",
    "meaning": "confidence, trust",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La confiance revient souvent pendant la réunion.",
    "translation": "The topic of confidence often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bien-etre",
    "french": "bien-être",
    "meaning": "well-being",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à bien-être avec plus de confiance.",
    "translation": "She is learning to well-being with more confidence.",
    "structures": [
      "bien-être + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jeu",
    "french": "jeu",
    "meaning": "game",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble jeu à première vue.",
    "translation": "This choice seems game at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "comportement",
    "french": "comportement",
    "meaning": "behaviour",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le comportement revient souvent pendant la réunion.",
    "translation": "The topic of behaviour often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sante-mentale",
    "french": "santé mentale",
    "meaning": "mental health",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La santé mentale revient souvent pendant la réunion.",
    "translation": "The topic of mental health often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "divertissement",
    "french": "divertissement",
    "meaning": "entertainment",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le divertissement revient souvent pendant la réunion.",
    "translation": "The topic of entertainment often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detente",
    "french": "détente",
    "meaning": "relaxation",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La détente revient souvent pendant la réunion.",
    "translation": "The topic of relaxation often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gaspillage",
    "french": "gaspillage",
    "meaning": "waste",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La gaspillage revient souvent pendant la réunion.",
    "translation": "The topic of waste often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "surcharge",
    "french": "surcharge",
    "meaning": "overload, overwork",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La surcharge revient souvent pendant la réunion.",
    "translation": "The topic of overload often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gratuit",
    "french": "gratuit",
    "meaning": "free",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble gratuit à première vue.",
    "translation": "This choice seems free at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "transport-en-commun",
    "french": "transport en commun",
    "meaning": "public transportation",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le transport en commun revient souvent pendant la réunion.",
    "translation": "The topic of public transportation often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "impot",
    "french": "impôt",
    "meaning": "tax",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’impôt revient souvent pendant la réunion.",
    "translation": "The topic of tax often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "usager",
    "french": "usager",
    "meaning": "user",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à usager avec plus de confiance.",
    "translation": "She is learning to user with more confidence.",
    "structures": [
      "usager + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "epreuve",
    "french": "épreuve",
    "meaning": "test",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’épreuve revient souvent pendant la réunion.",
    "translation": "The topic of test often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "franchement",
    "french": "franchement",
    "meaning": "frankly",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Franchement, elle a préparé son dossier avant l’examen.",
    "translation": "Frankly, she prepared her file before the exam.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "constat",
    "french": "constat",
    "meaning": "observation, finding",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le constat revient souvent pendant la réunion.",
    "translation": "The topic of observation often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "observation",
    "french": "observation",
    "meaning": "observation",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’observation revient souvent pendant la réunion.",
    "translation": "The topic of observation often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "attenuer",
    "french": "atténuer",
    "meaning": "to mitigate",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette mesure permet d'atténuer les effets du problème.",
    "translation": "to mitigate",
    "structures": [
      "atténuer + risque / problème"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "attenuation",
    "french": "atténuation",
    "meaning": "mitigation",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’atténuation revient souvent pendant la réunion.",
    "translation": "The topic of mitigation often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "uniformite",
    "french": "uniformité",
    "meaning": "uniformity",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble uniformité à première vue.",
    "translation": "This choice seems uniformity at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "personnage-principal",
    "french": "personnage principal",
    "meaning": "main character",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le personnage principal revient souvent pendant la réunion.",
    "translation": "The topic of main character often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "conception",
    "french": "conception",
    "meaning": "design",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La conception revient souvent pendant la réunion.",
    "translation": "The topic of design often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "facon",
    "french": "façon",
    "meaning": "way, manner, behaviour",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le façon revient souvent pendant la réunion.",
    "translation": "The topic of way often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "enseignement",
    "french": "enseignement",
    "meaning": "education, teaching",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’enseignement revient souvent pendant la réunion.",
    "translation": "The topic of education often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "monde",
    "french": "monde",
    "meaning": "world",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le monde revient souvent pendant la réunion.",
    "translation": "The topic of world often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "investissement",
    "french": "investissement",
    "meaning": "investment",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’investissement revient souvent pendant la réunion.",
    "translation": "The topic of investment often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "investisseur",
    "french": "investisseur",
    "meaning": "investor",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’investisseur revient souvent pendant la réunion.",
    "translation": "The topic of investor often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "punition",
    "french": "punition",
    "meaning": "punishment",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La punition revient souvent pendant la réunion.",
    "translation": "The topic of punishment often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "confondu",
    "french": "confondu",
    "meaning": "confused, mixed up",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble confondu à première vue.",
    "translation": "This choice seems confused at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "taille",
    "french": "taille",
    "meaning": "size",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La taille revient souvent pendant la réunion.",
    "translation": "The topic of size often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "matiere",
    "french": "matière",
    "meaning": "matter, subject, material",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à matière avec plus de confiance.",
    "translation": "She is learning to matter with more confidence.",
    "structures": [
      "matière + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soumettre",
    "french": "soumettre",
    "meaning": "to submit",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à soumettre avec plus de confiance.",
    "translation": "She is learning to submit with more confidence.",
    "structures": [
      "soumettre + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detenir",
    "french": "détenir",
    "meaning": "to possess, hold",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à détenir avec plus de confiance.",
    "translation": "She is learning to possess with more confidence.",
    "structures": [
      "détenir + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detenir-un-record",
    "french": "détenir un record",
    "meaning": "to hold a record",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à détenir un record avec plus de confiance.",
    "translation": "She is learning to hold a record with more confidence.",
    "structures": [
      "détenir un record + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detenir-le-pouvoir",
    "french": "détenir le pouvoir",
    "meaning": "to hold power",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à détenir le pouvoir avec plus de confiance.",
    "translation": "She is learning to hold power with more confidence.",
    "structures": [
      "détenir le pouvoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detenir-un-savoir",
    "french": "détenir un savoir",
    "meaning": "to hold certain knowledge",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à détenir un savoir avec plus de confiance.",
    "translation": "She is learning to hold certain knowledge with more confidence.",
    "structures": [
      "détenir un savoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tout-le-monde",
    "french": "tout le monde",
    "meaning": "everybody, everyone",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La tout le monde revient souvent pendant la réunion.",
    "translation": "The topic of everybody often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tranquillite",
    "french": "tranquillité",
    "meaning": "peace and quiet",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble tranquillité à première vue.",
    "translation": "This choice seems peace and quiet at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "calme",
    "french": "calme",
    "meaning": "calm, peaceful",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La calme revient souvent pendant la réunion.",
    "translation": "The topic of calm often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "colocation",
    "french": "colocation",
    "meaning": "shared apartment",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La colocation revient souvent pendant la réunion.",
    "translation": "The topic of shared apartment often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "colocataire",
    "french": "colocataire",
    "meaning": "roommate",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à colocataire avec plus de confiance.",
    "translation": "She is learning to roommate with more confidence.",
    "structures": [
      "colocataire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "recette",
    "french": "recette",
    "meaning": "recipe",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La recette revient souvent pendant la réunion.",
    "translation": "The topic of recipe often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "entre",
    "french": "entre",
    "meaning": "between",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à entre avec plus de confiance.",
    "translation": "She is learning to between with more confidence.",
    "structures": [
      "entre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bas",
    "french": "bas, basse",
    "meaning": "low",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le bas revient souvent pendant la réunion.",
    "translation": "The topic of low often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cimetiere",
    "french": "cimetière",
    "meaning": "cemetery, graveyard",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à cimetière avec plus de confiance.",
    "translation": "She is learning to cemetery with more confidence.",
    "structures": [
      "cimetière + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "exprimer",
    "french": "exprimer",
    "meaning": "to express",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à exprimer avec plus de confiance.",
    "translation": "She is learning to express with more confidence.",
    "structures": [
      "exprimer + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "capacite",
    "french": "capacité",
    "meaning": "ability",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble capacité à première vue.",
    "translation": "This choice seems ability at first glance.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "competence",
    "french": "compétence",
    "meaning": "skill, competence",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La compétence revient souvent pendant la réunion.",
    "translation": "The topic of skill often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "paroles",
    "french": "paroles",
    "meaning": "lyrics",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le paroles revient souvent pendant la réunion.",
    "translation": "The topic of lyrics often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sous-titre",
    "french": "sous-titre",
    "meaning": "subtitles",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sous-titre avec plus de confiance.",
    "translation": "She is learning to subtitles with more confidence.",
    "structures": [
      "sous-titre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quotidien",
    "french": "quotidien, quotidienne",
    "meaning": "daily",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble quotidien à première vue.",
    "translation": "This choice seems daily at first glance.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "defi",
    "french": "défi",
    "meaning": "challenge",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le défi revient souvent pendant la réunion.",
    "translation": "The topic of challenge often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "outil",
    "french": "outil",
    "meaning": "tool",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’outil revient souvent pendant la réunion.",
    "translation": "The topic of tool often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "orage",
    "french": "orage",
    "meaning": "thunderstorm",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’orage revient souvent pendant la réunion.",
    "translation": "The topic of thunderstorm often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mensonge",
    "french": "mensonge",
    "meaning": "lie",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La mensonge revient souvent pendant la réunion.",
    "translation": "The topic of lie often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "coup-de-main",
    "french": "un coup de main",
    "meaning": "a helping hand",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un coup de main peut jouer un rôle important dans cette situation.",
    "translation": "A helping hand can play an important role in this situation.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "montrer",
    "french": "montrer",
    "meaning": "to show",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à montrer avec plus de confiance.",
    "translation": "She is learning to show with more confidence.",
    "structures": [
      "montrer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "monter",
    "french": "monter",
    "meaning": "to go up",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à monter avec plus de confiance.",
    "translation": "She is learning to go up with more confidence.",
    "structures": [
      "monter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bruit",
    "french": "bruit",
    "meaning": "noise",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le bruit revient souvent pendant la réunion.",
    "translation": "The topic of noise often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fond",
    "french": "fond",
    "meaning": "bottom, background",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le fond revient souvent pendant la réunion.",
    "translation": "The topic of bottom often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poche",
    "french": "poche",
    "meaning": "pocket",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La poche revient souvent pendant la réunion.",
    "translation": "The topic of pocket often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "loin",
    "french": "loin",
    "meaning": "far away, far from",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le loin revient souvent pendant la réunion.",
    "translation": "The topic of far away often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quelque-chose",
    "french": "quelque chose",
    "meaning": "something",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La quelque chose revient souvent pendant la réunion.",
    "translation": "The topic of something often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quelque",
    "french": "quelque",
    "meaning": "some",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble quelque à première vue.",
    "translation": "This choice seems some at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quelqu-un",
    "french": "quelqu'un",
    "meaning": "someone",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le quelqu'un revient souvent pendant la réunion.",
    "translation": "The topic of someone often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "appartenir-a",
    "french": "appartenir à",
    "meaning": "to belong to",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à appartenir à avec plus de confiance.",
    "translation": "She is learning to belong to with more confidence.",
    "structures": [
      "appartenir à + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "paix",
    "french": "paix",
    "meaning": "peace",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le paix revient souvent pendant la réunion.",
    "translation": "The topic of peace often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "histoire",
    "french": "histoire",
    "meaning": "history, story",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à histoire avec plus de confiance.",
    "translation": "She is learning to history with more confidence.",
    "structures": [
      "histoire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gris",
    "french": "gris",
    "meaning": "grey",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le gris revient souvent pendant la réunion.",
    "translation": "The topic of grey often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ciel",
    "french": "ciel",
    "meaning": "sky",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble ciel à première vue.",
    "translation": "This choice seems sky at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "humeur",
    "french": "humeur",
    "meaning": "mood",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’humeur revient souvent pendant la réunion.",
    "translation": "The topic of mood often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "torchon",
    "french": "torchon",
    "meaning": "towel, dishcloth",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le torchon revient souvent pendant la réunion.",
    "translation": "The topic of towel often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parapluie",
    "french": "parapluie",
    "meaning": "umbrella",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La parapluie revient souvent pendant la réunion.",
    "translation": "The topic of umbrella often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mefiant",
    "french": "méfiant",
    "meaning": "suspicious, wary",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble méfiant à première vue.",
    "translation": "This choice seems suspicious at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "canape",
    "french": "canapé",
    "meaning": "sofa, couch",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble canapé à première vue.",
    "translation": "This choice seems sofa at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "circulation",
    "french": "circulation",
    "meaning": "traffic",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La circulation revient souvent pendant la réunion.",
    "translation": "The topic of traffic often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rayon-de-lumiere",
    "french": "rayon de lumière",
    "meaning": "ray of light",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rayon de lumière avec plus de confiance.",
    "translation": "She is learning to ray of light with more confidence.",
    "structures": [
      "rayon de lumière + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jusqu-a",
    "french": "jusqu'à",
    "meaning": "up to, until",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le jusqu'à revient souvent pendant la réunion.",
    "translation": "The topic of up to often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vent",
    "french": "vent",
    "meaning": "wind",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le vent revient souvent pendant la réunion.",
    "translation": "The topic of wind often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tomber-en-panne",
    "french": "tomber en panne",
    "meaning": "to break down",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à tomber en panne avec plus de confiance.",
    "translation": "She is learning to break down with more confidence.",
    "structures": [
      "tomber en panne + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bougie",
    "french": "bougie",
    "meaning": "candle",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La bougie revient souvent pendant la réunion.",
    "translation": "The topic of candle often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "allumette",
    "french": "allumette",
    "meaning": "matchstick",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’allumette revient souvent pendant la réunion.",
    "translation": "The topic of matchstick often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mur",
    "french": "mur",
    "meaning": "wall",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le mur revient souvent pendant la réunion.",
    "translation": "The topic of wall often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-echapper",
    "french": "s'échapper",
    "meaning": "to escape",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à s'échapper.",
    "translation": "She is learning to escape with more confidence.",
    "structures": [
      "s'échapper + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poisson",
    "french": "poisson",
    "meaning": "fish",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le poisson revient souvent pendant la réunion.",
    "translation": "The topic of fish often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "viande",
    "french": "viande",
    "meaning": "meat",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La viande revient souvent pendant la réunion.",
    "translation": "The topic of meat often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tout-va-bien-se-passer",
    "french": "tout va bien se passer",
    "meaning": "everything will be alright",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à tout va bien se passer avec plus de confiance.",
    "translation": "She is learning to everything will be alright with more confidence.",
    "structures": [
      "tout va bien se passer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "voleur",
    "french": "voleur",
    "meaning": "thief",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le voleur revient souvent pendant la réunion.",
    "translation": "The topic of thief often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sac-de-main",
    "french": "sac de main",
    "meaning": "handbag",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le sac de main revient souvent pendant la réunion.",
    "translation": "The topic of handbag often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "voisin",
    "french": "voisin, voisine",
    "meaning": "neighbour",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le voisin revient souvent pendant la réunion.",
    "translation": "The topic of neighbour often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "court",
    "french": "court, courte",
    "meaning": "short",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois court selon le contexte.",
    "translation": "short",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etude",
    "french": "étude",
    "meaning": "study",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’étude revient souvent pendant la réunion.",
    "translation": "The topic of study often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "habitude",
    "french": "habitude",
    "meaning": "habit",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’habitude revient souvent pendant la réunion.",
    "translation": "The topic of habit often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "veritable-authentique",
    "french": "véritable, authentique",
    "meaning": "true, real, authentic",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble véritable à première vue.",
    "translation": "This choice seems true at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "couper-du-monde",
    "french": "couper du monde",
    "meaning": "cut off from the world, disconnected",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La couper du monde revient souvent pendant la réunion.",
    "translation": "The topic of cut off from the world often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "silencieux-silencieuse",
    "french": "silencieux, silencieuse",
    "meaning": "silent",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble silencieux à première vue.",
    "translation": "This choice seems silent at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-panne",
    "french": "en panne",
    "meaning": "broken down",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "En panne, elle a mieux compris la situation.",
    "translation": "Broken down, she understood the situation better.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tempete",
    "french": "tempête",
    "meaning": "storm",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La tempête revient souvent pendant la réunion.",
    "translation": "The topic of storm often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chomage",
    "french": "chômage",
    "meaning": "unemployment",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La chômage revient souvent pendant la réunion.",
    "translation": "The topic of unemployment often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "temoin",
    "french": "témoin",
    "meaning": "witness",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le témoin revient souvent pendant la réunion.",
    "translation": "The topic of witness often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tournure-differente",
    "french": "tournure différente",
    "meaning": "different turn",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La tournure différente revient souvent pendant la réunion.",
    "translation": "The topic of different turn often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "uvres",
    "french": "œuvres",
    "meaning": "works",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le œuvres revient souvent pendant la réunion.",
    "translation": "The topic of works often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ouvriers",
    "french": "ouvriers",
    "meaning": "workers",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’ouvriers revient souvent pendant la réunion.",
    "translation": "The topic of workers often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "piece",
    "french": "pièce",
    "meaning": "room, play, coin, piece",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La pièce revient souvent pendant la réunion.",
    "translation": "The topic of room often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pauvrete",
    "french": "pauvreté",
    "meaning": "poverty",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble pauvreté à première vue.",
    "translation": "This choice seems poverty at first glance.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "seuil",
    "french": "seuil",
    "meaning": "threshold",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le seuil revient souvent pendant la réunion.",
    "translation": "The topic of threshold often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "garantie",
    "french": "garantie",
    "meaning": "guarantee",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La garantie revient souvent pendant la réunion.",
    "translation": "The topic of guarantee often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "abus",
    "french": "abus",
    "meaning": "abuse",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’abus revient souvent pendant la réunion.",
    "translation": "The topic of abuse often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "renforcer",
    "french": "renforcer",
    "meaning": "to reinforce, strengthen",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "La lecture régulière renforce le vocabulaire.",
    "translation": "to reinforce, strengthen",
    "structures": [
      "renforcer + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "disponible",
    "french": "disponible",
    "meaning": "available",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble disponible à première vue.",
    "translation": "This choice seems available at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "horaire",
    "french": "horaire",
    "meaning": "schedule",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à horaire avec plus de confiance.",
    "translation": "She is learning to schedule with more confidence.",
    "structures": [
      "horaire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "batiment",
    "french": "bâtiment",
    "meaning": "building",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le bâtiment revient souvent pendant la réunion.",
    "translation": "The topic of building often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "immeuble",
    "french": "immeuble",
    "meaning": "building",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’immeuble revient souvent pendant la réunion.",
    "translation": "The topic of building often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "truc",
    "french": "truc",
    "meaning": "stuff, thing",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le truc revient souvent pendant la réunion.",
    "translation": "The topic of stuff often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "emplacement",
    "french": "emplacement",
    "meaning": "location",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’emplacement revient souvent pendant la réunion.",
    "translation": "The topic of location often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "patrimoine",
    "french": "patrimoine",
    "meaning": "heritage",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La patrimoine revient souvent pendant la réunion.",
    "translation": "The topic of heritage often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "terre",
    "french": "terre",
    "meaning": "earth, ground",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à terre avec plus de confiance.",
    "translation": "She is learning to earth with more confidence.",
    "structures": [
      "terre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ennemi",
    "french": "ennemi",
    "meaning": "enemy",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’ennemi revient souvent pendant la réunion.",
    "translation": "The topic of enemy often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pilori",
    "french": "pilori",
    "meaning": "pillory",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le pilori revient souvent pendant la réunion.",
    "translation": "The topic of pillory often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soldat",
    "french": "soldat",
    "meaning": "soldier",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le soldat revient souvent pendant la réunion.",
    "translation": "The topic of soldier often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "au-loin",
    "french": "au loin",
    "meaning": "in the distance",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Au loin, elle a mieux compris la situation.",
    "translation": "In the distance, she understood the situation better.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "retour",
    "french": "retour",
    "meaning": "return",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le retour revient souvent pendant la réunion.",
    "translation": "The topic of return often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "metrage",
    "french": "métrage",
    "meaning": "footage",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La métrage revient souvent pendant la réunion.",
    "translation": "The topic of footage often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bruitage",
    "french": "bruitage",
    "meaning": "sound effects",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La bruitage revient souvent pendant la réunion.",
    "translation": "The topic of sound effects often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "guerre",
    "french": "guerre",
    "meaning": "war",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à guerre avec plus de confiance.",
    "translation": "She is learning to war with more confidence.",
    "structures": [
      "guerre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "moitie",
    "french": "moitié",
    "meaning": "half",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble moitié à première vue.",
    "translation": "This choice seems half at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "embouteillage",
    "french": "embouteillage",
    "meaning": "traffic jam",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’embouteillage revient souvent pendant la réunion.",
    "translation": "The topic of traffic jam often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "milliard",
    "french": "milliard",
    "meaning": "billion",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le milliard revient souvent pendant la réunion.",
    "translation": "The topic of billion often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "courses",
    "french": "courses",
    "meaning": "shopping, errands",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le courses revient souvent pendant la réunion.",
    "translation": "The topic of shopping often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jeu-de-societe",
    "french": "jeu de société",
    "meaning": "board game",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "La jeu de société revient souvent pendant la réunion.",
    "translation": "The topic of board game often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eclairer",
    "french": "éclairer",
    "meaning": "to light up",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à éclairer avec plus de confiance.",
    "translation": "She is learning to light up with more confidence.",
    "structures": [
      "éclairer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poliment",
    "french": "poliment",
    "meaning": "politely",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le poliment revient souvent pendant la réunion.",
    "translation": "The topic of politely often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "barrage",
    "french": "barrage",
    "meaning": "dam",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La barrage revient souvent pendant la réunion.",
    "translation": "The topic of dam often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "personnage",
    "french": "personnage",
    "meaning": "character",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La personnage revient souvent pendant la réunion.",
    "translation": "The topic of character often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "moyen",
    "french": "moyen, moyenne",
    "meaning": "average, medium",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois moyen selon le contexte.",
    "translation": "average, medium",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "affranchir",
    "french": "affranchir",
    "meaning": "to liberate, free",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à affranchir avec plus de confiance.",
    "translation": "She is learning to liberate with more confidence.",
    "structures": [
      "affranchir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "preche",
    "french": "prêche",
    "meaning": "sermon, preaching",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La prêche revient souvent pendant la réunion.",
    "translation": "The topic of sermon often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inedit",
    "french": "inédit, inédite",
    "meaning": "new, unpublished",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’inédit revient souvent pendant la réunion.",
    "translation": "The topic of new often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "seance",
    "french": "séance",
    "meaning": "session",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La séance revient souvent pendant la réunion.",
    "translation": "The topic of session often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "decu",
    "french": "déçu, déçue",
    "meaning": "disappointed",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble déçu à première vue.",
    "translation": "This choice seems disappointed at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nerveux-nerveuse",
    "french": "nerveux, nerveuse",
    "meaning": "nervous",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois nerveux selon le contexte.",
    "translation": "nervous",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tatouage",
    "french": "tatouage",
    "meaning": "tattoo",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La tatouage revient souvent pendant la réunion.",
    "translation": "The topic of tattoo often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nombreux-nombreuse",
    "french": "nombreux, nombreuse",
    "meaning": "many, numerous",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble nombreux à première vue.",
    "translation": "This choice seems many at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "disparate",
    "french": "disparate",
    "meaning": "diverse, varied",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La disparate revient souvent pendant la réunion.",
    "translation": "The topic of diverse often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "homogene",
    "french": "homogène",
    "meaning": "homogeneous",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’homogène revient souvent pendant la réunion.",
    "translation": "The topic of homogeneous often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sourdine",
    "french": "sourdine",
    "meaning": "mute, muffled",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La sourdine revient souvent pendant la réunion.",
    "translation": "The topic of mute often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "exergue",
    "french": "exergue",
    "meaning": "inscription, emphasis",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble exergue à première vue.",
    "translation": "This choice seems inscription at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "abime",
    "french": "abîme",
    "meaning": "abyss",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’abîme revient souvent pendant la réunion.",
    "translation": "The topic of abyss often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sejour",
    "french": "séjour",
    "meaning": "stay, visit",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le séjour revient souvent pendant la réunion.",
    "translation": "The topic of stay often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soleil",
    "french": "soleil",
    "meaning": "sun",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le soleil revient souvent pendant la réunion.",
    "translation": "The topic of sun often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "balade",
    "french": "balade",
    "meaning": "walk, ride",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La balade revient souvent pendant la réunion.",
    "translation": "The topic of walk often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "moteur",
    "french": "moteur",
    "meaning": "engine, motor",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le moteur revient souvent pendant la réunion.",
    "translation": "The topic of engine often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "metteur",
    "french": "metteur",
    "meaning": "director",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le metteur revient souvent pendant la réunion.",
    "translation": "The topic of director often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "loi",
    "french": "loi",
    "meaning": "law",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le loi revient souvent pendant la réunion.",
    "translation": "The topic of law often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dommage",
    "french": "dommage",
    "meaning": "a shame, too bad",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La dommage revient souvent pendant la réunion.",
    "translation": "The topic of a shame often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "maladroit",
    "french": "maladroit, maladroite",
    "meaning": "awkward, clumsy",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le maladroit revient souvent pendant la réunion.",
    "translation": "The topic of awkward often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "assiette",
    "french": "assiette",
    "meaning": "plate",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’assiette revient souvent pendant la réunion.",
    "translation": "The topic of plate often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-attendant",
    "french": "en attendant",
    "meaning": "meanwhile",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En attendant, il faut analyser la situation avec prudence.",
    "translation": "meanwhile",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gateau",
    "french": "gâteau",
    "meaning": "cake",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble gâteau à première vue.",
    "translation": "This choice seems cake at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mouchoir",
    "french": "mouchoir",
    "meaning": "handkerchief, tissue",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mouchoir avec plus de confiance.",
    "translation": "She is learning to handkerchief with more confidence.",
    "structures": [
      "mouchoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-preter",
    "french": "se prêter",
    "meaning": "to lend itself, to be suitable",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à se prêter.",
    "translation": "She is learning to lend itself with more confidence.",
    "structures": [
      "se prêter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "role",
    "french": "rôle",
    "meaning": "role, capacity, function",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La rôle revient souvent pendant la réunion.",
    "translation": "The topic of role often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dessin",
    "french": "dessin",
    "meaning": "drawing",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le dessin revient souvent pendant la réunion.",
    "translation": "The topic of drawing often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "camion",
    "french": "camion",
    "meaning": "lorry, truck",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La camion revient souvent pendant la réunion.",
    "translation": "The topic of lorry often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rigolo",
    "french": "rigolo, rigolote",
    "meaning": "funny",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le rigolo revient souvent pendant la réunion.",
    "translation": "The topic of funny often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sauf",
    "french": "sauf",
    "meaning": "except",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Sauf, il faut analyser la situation avec prudence.",
    "translation": "except",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "placard",
    "french": "placard",
    "meaning": "closet, cupboard",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le placard revient souvent pendant la réunion.",
    "translation": "The topic of closet often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "armoire",
    "french": "armoire",
    "meaning": "wardrobe, cupboard",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à armoire avec plus de confiance.",
    "translation": "She is learning to wardrobe with more confidence.",
    "structures": [
      "armoire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chaussettes",
    "french": "chaussettes",
    "meaning": "socks",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le chaussettes revient souvent pendant la réunion.",
    "translation": "The topic of socks often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dedans",
    "french": "dedans",
    "meaning": "inside",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le dedans revient souvent pendant la réunion.",
    "translation": "The topic of inside often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pecher",
    "french": "pêcher",
    "meaning": "to fish",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à pêcher avec plus de confiance.",
    "translation": "She is learning to fish with more confidence.",
    "structures": [
      "pêcher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rocher",
    "french": "rocher",
    "meaning": "rock, boulder",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rocher avec plus de confiance.",
    "translation": "She is learning to rock with more confidence.",
    "structures": [
      "rocher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tresors",
    "french": "trésors",
    "meaning": "treasures",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le trésors revient souvent pendant la réunion.",
    "translation": "The topic of treasures often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bonhomme-de-neige",
    "french": "bonhomme de neige",
    "meaning": "snowman",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La bonhomme de neige revient souvent pendant la réunion.",
    "translation": "The topic of snowman often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reclamer",
    "french": "réclamer",
    "meaning": "to demand, claim",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à réclamer avec plus de confiance.",
    "translation": "She is learning to demand with more confidence.",
    "structures": [
      "réclamer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mignon",
    "french": "mignon",
    "meaning": "cute",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le mignon revient souvent pendant la réunion.",
    "translation": "The topic of cute often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "salle",
    "french": "salle",
    "meaning": "room",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La salle revient souvent pendant la réunion.",
    "translation": "The topic of room often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sale",
    "french": "sale",
    "meaning": "dirty",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble sale à première vue.",
    "translation": "This choice seems dirty at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bien-evidemment",
    "french": "bien évidemment",
    "meaning": "of course",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Bien évidemment, il faut analyser la situation avec prudence.",
    "translation": "of course",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fou",
    "french": "fou",
    "meaning": "crazy",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble fou à première vue.",
    "translation": "This choice seems crazy at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-detendre",
    "french": "se détendre",
    "meaning": "to relax",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à se détendre.",
    "translation": "She is learning to relax with more confidence.",
    "structures": [
      "se détendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "c-est-pourquoi",
    "french": "c'est pourquoi",
    "meaning": "that's why",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "C'est pourquoi, il faut analyser la situation avec prudence.",
    "translation": "that's why",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rien",
    "french": "rien",
    "meaning": "nothing",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le rien revient souvent pendant la réunion.",
    "translation": "The topic of nothing often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "de-rien",
    "french": "de rien",
    "meaning": "you're welcome, it's nothing",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "De rien, elle a mieux compris la situation.",
    "translation": "You're welcome, she understood the situation better.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inutile",
    "french": "inutile",
    "meaning": "useless, unnecessary",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’inutile revient souvent pendant la réunion.",
    "translation": "The topic of useless often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "guillemets",
    "french": "guillemets",
    "meaning": "quotation marks",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le guillemets revient souvent pendant la réunion.",
    "translation": "The topic of quotation marks often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "partie",
    "french": "partie",
    "meaning": "part",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La partie revient souvent pendant la réunion.",
    "translation": "The topic of part often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "salon-de-coiffure",
    "french": "salon de coiffure",
    "meaning": "hair salon",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à salon de coiffure avec plus de confiance.",
    "translation": "She is learning to hair salon with more confidence.",
    "structures": [
      "salon de coiffure + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "grossesse",
    "french": "grossesse",
    "meaning": "pregnancy",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La grossesse revient souvent pendant la réunion.",
    "translation": "The topic of pregnancy often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "portefeuille",
    "french": "portefeuille",
    "meaning": "wallet",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La portefeuille revient souvent pendant la réunion.",
    "translation": "The topic of wallet often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fiche",
    "french": "fiche",
    "meaning": "file, sheet",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La fiche revient souvent pendant la réunion.",
    "translation": "The topic of file often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cuir",
    "french": "cuir",
    "meaning": "leather",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à cuir avec plus de confiance.",
    "translation": "She is learning to leather with more confidence.",
    "structures": [
      "cuir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "processus",
    "french": "processus",
    "meaning": "process",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le processus revient souvent pendant la réunion.",
    "translation": "The topic of process often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "souvenir",
    "french": "souvenir",
    "meaning": "memory, souvenir",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à souvenir avec plus de confiance.",
    "translation": "She is learning to memory with more confidence.",
    "structures": [
      "souvenir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "memoire",
    "french": "mémoire",
    "meaning": "memory",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mémoire avec plus de confiance.",
    "translation": "She is learning to memory with more confidence.",
    "structures": [
      "mémoire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "banque",
    "french": "banque",
    "meaning": "bank",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble banque à première vue.",
    "translation": "This choice seems bank at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "banc",
    "french": "banc",
    "meaning": "bench",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le banc revient souvent pendant la réunion.",
    "translation": "The topic of bench often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vitesse",
    "french": "vitesse",
    "meaning": "speed",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La vitesse revient souvent pendant la réunion.",
    "translation": "The topic of speed often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reflexion",
    "french": "réflexion",
    "meaning": "reflection, thought",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La réflexion revient souvent pendant la réunion.",
    "translation": "The topic of reflection often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "esprit",
    "french": "esprit",
    "meaning": "spirit, mind",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le esprit revient souvent pendant la réunion.",
    "translation": "The topic of spirit often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "moteur-de-recherche",
    "french": "moteur de recherche",
    "meaning": "search engine",
    "category": "TCF Theme",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "La moteur de recherche revient souvent pendant la réunion.",
    "translation": "The topic of search engine often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "question-ethique",
    "french": "question éthique",
    "meaning": "ethical question",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La question éthique revient souvent pendant la réunion.",
    "translation": "The topic of ethical question often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "questionner",
    "french": "questionner",
    "meaning": "to question, interrogate",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il faut questionner cette idée avant de l'accepter.",
    "translation": "to question, interrogate",
    "structures": [
      "questionner + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "terre-rare",
    "french": "terre rare",
    "meaning": "rare earth",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à terre rare avec plus de confiance.",
    "translation": "She is learning to rare earth with more confidence.",
    "structures": [
      "terre rare + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "terre-a-terre",
    "french": "terre à terre",
    "meaning": "down-to-earth",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à terre à terre avec plus de confiance.",
    "translation": "She is learning to down-to-earth with more confidence.",
    "structures": [
      "terre à terre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "enjeux",
    "french": "enjeux",
    "meaning": "issues, challenges, stakes",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Les enjeux de cette réforme sont considérables.",
    "translation": "issues, challenges, stakes",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "majeur",
    "french": "majeur, majeure",
    "meaning": "major",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à majeur avec plus de confiance.",
    "translation": "She is learning to major with more confidence.",
    "structures": [
      "majeur, majeure + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "telle-situation",
    "french": "une telle situation",
    "meaning": "such a situation",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Une telle situation peut jouer un rôle important dans cette situation.",
    "translation": "Such a situation can play an important role in this situation.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "prendre-une-decision",
    "french": "prendre une décision",
    "meaning": "to make a decision",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à prendre une décision avec plus de confiance.",
    "translation": "She is learning to make a decision with more confidence.",
    "structures": [
      "prendre une décision + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "investir",
    "french": "investir",
    "meaning": "to invest",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à investir avec plus de confiance.",
    "translation": "She is learning to invest with more confidence.",
    "structures": [
      "investir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parcourir",
    "french": "parcourir",
    "meaning": "to travel across",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à parcourir avec plus de confiance.",
    "translation": "She is learning to travel across with more confidence.",
    "structures": [
      "parcourir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "decouvrir",
    "french": "découvrir",
    "meaning": "to discover",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à découvrir avec plus de confiance.",
    "translation": "She is learning to discover with more confidence.",
    "structures": [
      "découvrir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soutenir",
    "french": "soutenir",
    "meaning": "to support",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Les parents peuvent soutenir leurs enfants pendant leurs études.",
    "translation": "to support",
    "structures": [
      "soutenir + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "prevenir",
    "french": "prévenir",
    "meaning": "to prevent, warn",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette campagne vise à prévenir les accidents.",
    "translation": "to prevent, warn",
    "structures": [
      "prévenir + risque / quelqu'un"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "obeir",
    "french": "obéir",
    "meaning": "to obey",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à obéir avec plus de confiance.",
    "translation": "She is learning to obey with more confidence.",
    "structures": [
      "obéir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "accueillir",
    "french": "accueillir",
    "meaning": "to welcome",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à accueillir avec plus de confiance.",
    "translation": "She is learning to welcome with more confidence.",
    "structures": [
      "accueillir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "applaudir",
    "french": "applaudir",
    "meaning": "to applaud",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à applaudir avec plus de confiance.",
    "translation": "She is learning to applaud with more confidence.",
    "structures": [
      "applaudir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "batir",
    "french": "bâtir",
    "meaning": "to build",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à bâtir avec plus de confiance.",
    "translation": "She is learning to build with more confidence.",
    "structures": [
      "bâtir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "choisir",
    "french": "choisir",
    "meaning": "to choose",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à choisir avec plus de confiance.",
    "translation": "She is learning to choose with more confidence.",
    "structures": [
      "choisir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "punir",
    "french": "punir",
    "meaning": "to punish, discipline",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à punir avec plus de confiance.",
    "translation": "She is learning to punish with more confidence.",
    "structures": [
      "punir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ravir",
    "french": "ravir",
    "meaning": "to delight",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à ravir avec plus de confiance.",
    "translation": "She is learning to delight with more confidence.",
    "structures": [
      "ravir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reflechir",
    "french": "réfléchir",
    "meaning": "to reflect",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à réfléchir avec plus de confiance.",
    "translation": "She is learning to reflect with more confidence.",
    "structures": [
      "réfléchir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remplir",
    "french": "remplir",
    "meaning": "to fill out",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à remplir avec plus de confiance.",
    "translation": "She is learning to fill out with more confidence.",
    "structures": [
      "remplir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reussir",
    "french": "réussir",
    "meaning": "to succeed",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à réussir avec plus de confiance.",
    "translation": "She is learning to succeed with more confidence.",
    "structures": [
      "réussir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rougir",
    "french": "rougir",
    "meaning": "to blush",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rougir avec plus de confiance.",
    "translation": "She is learning to blush with more confidence.",
    "structures": [
      "rougir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "saisir",
    "french": "saisir",
    "meaning": "to seize, grasp",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à saisir avec plus de confiance.",
    "translation": "She is learning to seize with more confidence.",
    "structures": [
      "saisir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bouillir",
    "french": "bouillir",
    "meaning": "to boil",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à bouillir avec plus de confiance.",
    "translation": "She is learning to boil with more confidence.",
    "structures": [
      "bouillir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sentir",
    "french": "sentir",
    "meaning": "to feel, smell",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sentir avec plus de confiance.",
    "translation": "She is learning to feel with more confidence.",
    "structures": [
      "sentir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "desobeir",
    "french": "désobéir",
    "meaning": "to disobey",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à désobéir avec plus de confiance.",
    "translation": "She is learning to disobey with more confidence.",
    "structures": [
      "désobéir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "finir",
    "french": "finir",
    "meaning": "to finish",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à finir avec plus de confiance.",
    "translation": "She is learning to finish with more confidence.",
    "structures": [
      "finir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "grandir",
    "french": "grandir",
    "meaning": "to grow",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à grandir avec plus de confiance.",
    "translation": "She is learning to grow with more confidence.",
    "structures": [
      "grandir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "guerir",
    "french": "guérir",
    "meaning": "to cure, heal",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à guérir avec plus de confiance.",
    "translation": "She is learning to cure with more confidence.",
    "structures": [
      "guérir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nourrir",
    "french": "nourrir",
    "meaning": "to nourish, feed",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à nourrir avec plus de confiance.",
    "translation": "She is learning to nourish with more confidence.",
    "structures": [
      "nourrir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "refroidir",
    "french": "refroidir",
    "meaning": "to cool down",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à refroidir avec plus de confiance.",
    "translation": "She is learning to cool down with more confidence.",
    "structures": [
      "refroidir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "souffrir",
    "french": "souffrir",
    "meaning": "to suffer",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à souffrir avec plus de confiance.",
    "translation": "She is learning to suffer with more confidence.",
    "structures": [
      "souffrir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "revenir",
    "french": "revenir",
    "meaning": "to come back, return",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à revenir avec plus de confiance.",
    "translation": "She is learning to come back with more confidence.",
    "structures": [
      "revenir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "entretenir",
    "french": "entretenir",
    "meaning": "to maintain",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à entretenir avec plus de confiance.",
    "translation": "She is learning to maintain with more confidence.",
    "structures": [
      "entretenir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mentir",
    "french": "mentir",
    "meaning": "to lie",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mentir avec plus de confiance.",
    "translation": "She is learning to lie with more confidence.",
    "structures": [
      "mentir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pouvoir",
    "french": "pouvoir",
    "meaning": "to be able to, can, may",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à pouvoir avec plus de confiance.",
    "translation": "She is learning to be able to with more confidence.",
    "structures": [
      "pouvoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vouloir",
    "french": "vouloir",
    "meaning": "to want",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à vouloir avec plus de confiance.",
    "translation": "She is learning to want with more confidence.",
    "structures": [
      "vouloir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "savoir",
    "french": "savoir",
    "meaning": "to know",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à savoir avec plus de confiance.",
    "translation": "She is learning to know with more confidence.",
    "structures": [
      "savoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pleuvoir",
    "french": "pleuvoir",
    "meaning": "to rain",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à pleuvoir avec plus de confiance.",
    "translation": "She is learning to rain with more confidence.",
    "structures": [
      "pleuvoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "falloir",
    "french": "falloir",
    "meaning": "to be necessary",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à falloir avec plus de confiance.",
    "translation": "She is learning to be necessary with more confidence.",
    "structures": [
      "falloir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "decevoir",
    "french": "décevoir",
    "meaning": "to disappoint",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à décevoir avec plus de confiance.",
    "translation": "She is learning to disappoint with more confidence.",
    "structures": [
      "décevoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "devoir",
    "french": "devoir",
    "meaning": "to have to, must",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à devoir avec plus de confiance.",
    "translation": "She is learning to have to with more confidence.",
    "structures": [
      "devoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "prevoir",
    "french": "prévoir",
    "meaning": "to predict, foresee",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à prévoir avec plus de confiance.",
    "translation": "She is learning to predict with more confidence.",
    "structures": [
      "prévoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "emouvoir",
    "french": "émouvoir",
    "meaning": "to stir, move emotionally",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à émouvoir avec plus de confiance.",
    "translation": "She is learning to stir with more confidence.",
    "structures": [
      "émouvoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vetir",
    "french": "vêtir",
    "meaning": "to wear, dress",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à vêtir avec plus de confiance.",
    "translation": "She is learning to wear with more confidence.",
    "structures": [
      "vêtir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "agir",
    "french": "agir",
    "meaning": "to act",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à agir avec plus de confiance.",
    "translation": "She is learning to act with more confidence.",
    "structures": [
      "agir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reagir",
    "french": "réagir",
    "meaning": "to react",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à réagir avec plus de confiance.",
    "translation": "She is learning to react with more confidence.",
    "structures": [
      "réagir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fournir",
    "french": "fournir",
    "meaning": "to provide",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à fournir avec plus de confiance.",
    "translation": "She is learning to provide with more confidence.",
    "structures": [
      "fournir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "resoudre",
    "french": "résoudre",
    "meaning": "to solve",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Le gouvernement doit résoudre ce problème rapidement.",
    "translation": "to solve",
    "structures": [
      "résoudre + problème"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "attendre",
    "french": "attendre",
    "meaning": "to wait",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à attendre avec plus de confiance.",
    "translation": "She is learning to wait with more confidence.",
    "structures": [
      "attendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "defendre",
    "french": "défendre",
    "meaning": "to defend",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à défendre avec plus de confiance.",
    "translation": "She is learning to defend with more confidence.",
    "structures": [
      "défendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "descendre",
    "french": "descendre",
    "meaning": "to go down",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à descendre avec plus de confiance.",
    "translation": "She is learning to go down with more confidence.",
    "structures": [
      "descendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "entendre",
    "french": "entendre",
    "meaning": "to hear",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à entendre avec plus de confiance.",
    "translation": "She is learning to hear with more confidence.",
    "structures": [
      "entendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "perdre",
    "french": "perdre",
    "meaning": "to lose",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à perdre avec plus de confiance.",
    "translation": "She is learning to lose with more confidence.",
    "structures": [
      "perdre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rendre",
    "french": "rendre",
    "meaning": "to give back, return",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rendre avec plus de confiance.",
    "translation": "She is learning to give back with more confidence.",
    "structures": [
      "rendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "repondre",
    "french": "répondre",
    "meaning": "to answer",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à répondre avec plus de confiance.",
    "translation": "She is learning to answer with more confidence.",
    "structures": [
      "répondre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vendre",
    "french": "vendre",
    "meaning": "to sell",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à vendre avec plus de confiance.",
    "translation": "She is learning to sell with more confidence.",
    "structures": [
      "vendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "interdire",
    "french": "interdire",
    "meaning": "to forbid, ban",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à interdire avec plus de confiance.",
    "translation": "She is learning to forbid with more confidence.",
    "structures": [
      "interdire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "construire",
    "french": "construire",
    "meaning": "to build",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à construire avec plus de confiance.",
    "translation": "She is learning to build with more confidence.",
    "structures": [
      "construire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fondre",
    "french": "fondre",
    "meaning": "to melt, dissolve",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à fondre avec plus de confiance.",
    "translation": "She is learning to melt with more confidence.",
    "structures": [
      "fondre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remettre",
    "french": "remettre",
    "meaning": "to put back",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à remettre avec plus de confiance.",
    "translation": "She is learning to put back with more confidence.",
    "structures": [
      "remettre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mettre",
    "french": "mettre",
    "meaning": "to put",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mettre avec plus de confiance.",
    "translation": "She is learning to put with more confidence.",
    "structures": [
      "mettre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poser",
    "french": "poser",
    "meaning": "to put, place",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à poser avec plus de confiance.",
    "translation": "She is learning to put with more confidence.",
    "structures": [
      "poser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "placer",
    "french": "placer",
    "meaning": "to place",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à placer avec plus de confiance.",
    "translation": "She is learning to place with more confidence.",
    "structures": [
      "placer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "accroitre",
    "french": "accroître",
    "meaning": "to grow, increase",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à accroître avec plus de confiance.",
    "translation": "She is learning to grow with more confidence.",
    "structures": [
      "accroître + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sourire",
    "french": "sourire",
    "meaning": "to smile",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sourire avec plus de confiance.",
    "translation": "She is learning to smile with more confidence.",
    "structures": [
      "sourire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dire",
    "french": "dire",
    "meaning": "to say",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à dire avec plus de confiance.",
    "translation": "She is learning to say with more confidence.",
    "structures": [
      "dire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "permettre",
    "french": "permettre",
    "meaning": "to allow",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette méthode permet d'améliorer la compréhension.",
    "translation": "to allow",
    "structures": [
      "permettre de + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "apprendre",
    "french": "apprendre",
    "meaning": "to learn",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à apprendre avec plus de confiance.",
    "translation": "She is learning to learn with more confidence.",
    "structures": [
      "apprendre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "suivre",
    "french": "suivre",
    "meaning": "to follow",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à suivre avec plus de confiance.",
    "translation": "She is learning to follow with more confidence.",
    "structures": [
      "suivre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "suivre-un-cours",
    "french": "suivre un cours",
    "meaning": "to take a class",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à suivre un cours avec plus de confiance.",
    "translation": "She is learning to take a class with more confidence.",
    "structures": [
      "suivre un cours + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "convaincre",
    "french": "convaincre",
    "meaning": "to convince",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il essaie de convaincre ses collègues d'accepter le projet.",
    "translation": "to convince",
    "structures": [
      "convaincre quelqu'un de + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-relaxer",
    "french": "se relaxer",
    "meaning": "to relax",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à se relaxer.",
    "translation": "She is learning to relax with more confidence.",
    "structures": [
      "se relaxer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detruire",
    "french": "détruire",
    "meaning": "to destroy",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à détruire avec plus de confiance.",
    "translation": "She is learning to destroy with more confidence.",
    "structures": [
      "détruire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "interrompre",
    "french": "interrompre",
    "meaning": "to interrupt",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à interrompre avec plus de confiance.",
    "translation": "She is learning to interrupt with more confidence.",
    "structures": [
      "interrompre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poursuivre",
    "french": "poursuivre",
    "meaning": "to pursue",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à poursuivre avec plus de confiance.",
    "translation": "She is learning to pursue with more confidence.",
    "structures": [
      "poursuivre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ressortissant",
    "french": "ressortissant, ressortissante",
    "meaning": "national",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble ressortissant à première vue.",
    "translation": "This choice seems national at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "citoyen",
    "french": "citoyen, citoyenne",
    "meaning": "citizen",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le citoyen revient souvent pendant la réunion.",
    "translation": "The topic of citizen often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "visa",
    "french": "visa",
    "meaning": "visa",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le visa revient souvent pendant la réunion.",
    "translation": "The topic of visa often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "frontiere",
    "french": "frontière",
    "meaning": "border",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à frontière avec plus de confiance.",
    "translation": "She is learning to border with more confidence.",
    "structures": [
      "frontière + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "otage",
    "french": "otage",
    "meaning": "hostage, prisoner",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’otage revient souvent pendant la réunion.",
    "translation": "The topic of hostage often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "echange",
    "french": "échange",
    "meaning": "exchange",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’échange revient souvent pendant la réunion.",
    "translation": "The topic of exchange often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inconfortable",
    "french": "inconfortable",
    "meaning": "uncomfortable",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble inconfortable à première vue.",
    "translation": "This choice seems uncomfortable at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mal-a-l-aise",
    "french": "mal à l'aise",
    "meaning": "uncomfortable",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La mal à l'aise revient souvent pendant la réunion.",
    "translation": "The topic of uncomfortable often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "timide",
    "french": "timide",
    "meaning": "shy",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La timide revient souvent pendant la réunion.",
    "translation": "The topic of shy often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fiscal",
    "french": "fiscal, fiscale",
    "meaning": "tax-related, fiscal",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble fiscal à première vue.",
    "translation": "This choice seems tax-related at first glance.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "profond",
    "french": "profond, profonde",
    "meaning": "deep",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois profond selon le contexte.",
    "translation": "deep",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-piece-jointe",
    "french": "en pièce jointe",
    "meaning": "attached, enclosed",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "En pièce jointe, elle a mieux compris la situation.",
    "translation": "Attached, she understood the situation better.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vide",
    "french": "vide",
    "meaning": "empty, meaningless",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La vide revient souvent pendant la réunion.",
    "translation": "The topic of empty often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "espoir",
    "french": "espoir",
    "meaning": "hope",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à espoir avec plus de confiance.",
    "translation": "She is learning to hope with more confidence.",
    "structures": [
      "espoir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "agreable",
    "french": "agréable",
    "meaning": "pleasant",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble agréable à première vue.",
    "translation": "This choice seems pleasant at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "amusant",
    "french": "amusant, amusante",
    "meaning": "funny, amusing",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble amusant à première vue.",
    "translation": "This choice seems funny at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "beau-bel-belle",
    "french": "beau, bel, belle",
    "meaning": "beautiful",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois beau selon le contexte.",
    "translation": "beautiful",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bon",
    "french": "bon, bonne",
    "meaning": "good",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois bon selon le contexte.",
    "translation": "good",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "charmant",
    "french": "charmant, charmante",
    "meaning": "charming",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois charmant selon le contexte.",
    "translation": "charming",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "creatif-creative",
    "french": "créatif, créative",
    "meaning": "creative",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois créatif selon le contexte.",
    "translation": "creative",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "efficace",
    "french": "efficace",
    "meaning": "efficient, effective",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’efficace revient souvent pendant la réunion.",
    "translation": "The topic of efficient often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "frais-fraiche",
    "french": "frais, fraîche",
    "meaning": "fresh, cool",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le frais revient souvent pendant la réunion.",
    "translation": "The topic of fresh often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "heureux-heureuse",
    "french": "heureux, heureuse",
    "meaning": "happy",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois heureux selon le contexte.",
    "translation": "happy",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jeune",
    "french": "jeune",
    "meaning": "young",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La jeune revient souvent pendant la réunion.",
    "translation": "The topic of young often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "libre",
    "french": "libre",
    "meaning": "free",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à libre avec plus de confiance.",
    "translation": "She is learning to free with more confidence.",
    "structures": [
      "libre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nouveau-nouvel-nouvelle",
    "french": "nouveau, nouvel, nouvelle",
    "meaning": "new",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble nouveau à première vue.",
    "translation": "This choice seems new at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sec",
    "french": "sec, sèche",
    "meaning": "dry",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois sec selon le contexte.",
    "translation": "dry",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vieux-vieil-vieille",
    "french": "vieux, vieil, vieille",
    "meaning": "old",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois vieux selon le contexte.",
    "translation": "old",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fantome",
    "french": "fantôme",
    "meaning": "ghost",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La fantôme revient souvent pendant la réunion.",
    "translation": "The topic of ghost often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tort-faux",
    "french": "tort, faux",
    "meaning": "wrong",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le tort revient souvent pendant la réunion.",
    "translation": "The topic of wrong often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "createur-creatrice",
    "french": "créateur, créatrice",
    "meaning": "creator",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le créateur revient souvent pendant la réunion.",
    "translation": "The topic of creator often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "createur-de-contenu",
    "french": "créateur de contenu",
    "meaning": "content creator",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le créateur de contenu revient souvent pendant la réunion.",
    "translation": "The topic of content creator often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parcours",
    "french": "parcours",
    "meaning": "journey, path",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le parcours revient souvent pendant la réunion.",
    "translation": "The topic of journey often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "debuter",
    "french": "débuter",
    "meaning": "to start, begin",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à débuter avec plus de confiance.",
    "translation": "She is learning to start with more confidence.",
    "structures": [
      "débuter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etonnamment",
    "french": "étonnamment",
    "meaning": "surprisingly",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Étonnamment, elle a préparé son dossier avant l’examen.",
    "translation": "Surprisingly, she prepared her file before the exam.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "envie",
    "french": "envie",
    "meaning": "desire",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’envie revient souvent pendant la réunion.",
    "translation": "The topic of desire often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "demarrer",
    "french": "démarrer",
    "meaning": "to start up",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à démarrer avec plus de confiance.",
    "translation": "She is learning to start up with more confidence.",
    "structures": [
      "démarrer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "avouer",
    "french": "avouer",
    "meaning": "to confess, admit",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à avouer avec plus de confiance.",
    "translation": "She is learning to confess with more confidence.",
    "structures": [
      "avouer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "valeurs",
    "french": "valeurs",
    "meaning": "values",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le valeurs revient souvent pendant la réunion.",
    "translation": "The topic of values often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-l-epoque",
    "french": "à l'époque",
    "meaning": "at the time",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À l'époque, il faut analyser la situation avec prudence.",
    "translation": "at the time",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "injuste",
    "french": "injuste",
    "meaning": "unjust, unfair",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble injuste à première vue.",
    "translation": "This choice seems unjust at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chacun",
    "french": "chacun",
    "meaning": "each, everyone",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le chacun revient souvent pendant la réunion.",
    "translation": "The topic of each often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "frustrant",
    "french": "frustrant",
    "meaning": "frustrating",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble frustrant à première vue.",
    "translation": "This choice seems frustrating at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "donnees",
    "french": "données",
    "meaning": "data",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le données revient souvent pendant la réunion.",
    "translation": "The topic of data often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nous-pousse",
    "french": "nous pousse",
    "meaning": "pushes us",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La nous pousse revient souvent pendant la réunion.",
    "translation": "The topic of pushes us often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "systeme-capitaliste",
    "french": "système capitaliste",
    "meaning": "capitalist system",
    "category": "TCF Theme",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La système capitaliste revient souvent pendant la réunion.",
    "translation": "The topic of capitalist system often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-theme"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "abonnes",
    "french": "abonnés",
    "meaning": "followers",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’abonnés revient souvent pendant la réunion.",
    "translation": "The topic of followers often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "utopique",
    "french": "utopique",
    "meaning": "utopian",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble utopique à première vue.",
    "translation": "This choice seems utopian at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "grave",
    "french": "grave",
    "meaning": "serious, severe",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La grave revient souvent pendant la réunion.",
    "translation": "The topic of serious often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "addition",
    "french": "addition",
    "meaning": "bill, addition",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’addition revient souvent pendant la réunion.",
    "translation": "The topic of bill often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "enorme",
    "french": "énorme",
    "meaning": "enormous",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’énorme revient souvent pendant la réunion.",
    "translation": "The topic of enormous often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "decalage",
    "french": "décalage",
    "meaning": "gap, disconnect",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La décalage revient souvent pendant la réunion.",
    "translation": "The topic of gap often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "volontaire",
    "french": "volontaire",
    "meaning": "voluntary",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à volontaire avec plus de confiance.",
    "translation": "She is learning to voluntary with more confidence.",
    "structures": [
      "volontaire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soutenable",
    "french": "soutenable",
    "meaning": "sustainable",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble soutenable à première vue.",
    "translation": "This choice seems sustainable at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "durable",
    "french": "durable",
    "meaning": "sustainable, long-lasting",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Il faut privilégier une solution durable.",
    "translation": "sustainable, long-lasting",
    "structures": [],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "impopulaire",
    "french": "impopulaire",
    "meaning": "unpopular",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à impopulaire avec plus de confiance.",
    "translation": "She is learning to unpopular with more confidence.",
    "structures": [
      "impopulaire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soigneusement",
    "french": "soigneusement",
    "meaning": "carefully, neatly",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le soigneusement revient souvent pendant la réunion.",
    "translation": "The topic of carefully often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "canal",
    "french": "canal",
    "meaning": "channel",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble canal à première vue.",
    "translation": "This choice seems channel at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "canaux",
    "french": "canaux",
    "meaning": "channels",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le canaux revient souvent pendant la réunion.",
    "translation": "The topic of channels often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "propre",
    "french": "propre",
    "meaning": "own, clean",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à propre avec plus de confiance.",
    "translation": "She is learning to own with more confidence.",
    "structures": [
      "propre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "desaccord",
    "french": "désaccord",
    "meaning": "disagreement",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le désaccord revient souvent pendant la réunion.",
    "translation": "The topic of disagreement often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "autour-de-moi",
    "french": "autour de moi",
    "meaning": "around me",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’autour de moi revient souvent pendant la réunion.",
    "translation": "The topic of around me often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "concours",
    "french": "concours",
    "meaning": "competition",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le concours revient souvent pendant la réunion.",
    "translation": "The topic of competition often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-bas-prix",
    "french": "à bas prix",
    "meaning": "at low cost",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "À bas prix, il faut analyser la situation avec prudence.",
    "translation": "at low cost",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "titulaire-de",
    "french": "titulaire de",
    "meaning": "holder of",
    "category": "Connector / Structure",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Titulaire de, il faut analyser la situation avec prudence.",
    "translation": "holder of",
    "structures": [
      "Connecteur logique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connector-structure",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cursus",
    "french": "cursus",
    "meaning": "course, curriculum",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le cursus revient souvent pendant la réunion.",
    "translation": "The topic of course often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cursus-scolaire",
    "french": "cursus scolaire",
    "meaning": "school curriculum",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à cursus scolaire avec plus de confiance.",
    "translation": "She is learning to school curriculum with more confidence.",
    "structures": [
      "cursus scolaire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cadre",
    "french": "cadre",
    "meaning": "framework, setting",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à cadre avec plus de confiance.",
    "translation": "She is learning to framework with more confidence.",
    "structures": [
      "cadre + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "valable",
    "french": "valable",
    "meaning": "valid",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble valable à première vue.",
    "translation": "This choice seems valid at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "valide",
    "french": "valide",
    "meaning": "valid",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La valide revient souvent pendant la réunion.",
    "translation": "The topic of valid often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mauvaises-habitudes-alimentaires",
    "french": "mauvaises habitudes alimentaires",
    "meaning": "bad eating habits",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le mauvaises habitudes alimentaires revient souvent pendant la réunion.",
    "translation": "The topic of bad eating habits often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ideal",
    "french": "idéal, idéale",
    "meaning": "ideal",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble idéal à première vue.",
    "translation": "This choice seems ideal at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "similaire",
    "french": "similaire",
    "meaning": "similar",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à similaire avec plus de confiance.",
    "translation": "She is learning to similar with more confidence.",
    "structures": [
      "similaire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "plainte",
    "french": "plainte",
    "meaning": "complaint",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La plainte revient souvent pendant la réunion.",
    "translation": "The topic of complaint often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "deranger",
    "french": "déranger",
    "meaning": "to bother, disturb",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à déranger avec plus de confiance.",
    "translation": "She is learning to bother with more confidence.",
    "structures": [
      "déranger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "declaration",
    "french": "déclaration",
    "meaning": "statement, declaration",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La déclaration revient souvent pendant la réunion.",
    "translation": "The topic of statement often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lunettes",
    "french": "lunettes",
    "meaning": "glasses",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le lunettes revient souvent pendant la réunion.",
    "translation": "The topic of glasses often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "feerique",
    "french": "féerique",
    "meaning": "magical, enchanting, fairy-like",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble féerique à première vue.",
    "translation": "This choice seems magical at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "frigidaire",
    "french": "frigidaire",
    "meaning": "refrigerator, fridge",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à frigidaire avec plus de confiance.",
    "translation": "She is learning to refrigerator with more confidence.",
    "structures": [
      "frigidaire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "frigo",
    "french": "frigo",
    "meaning": "fridge",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le frigo revient souvent pendant la réunion.",
    "translation": "The topic of fridge often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "feu",
    "french": "feu",
    "meaning": "fire",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble feu à première vue.",
    "translation": "This choice seems fire at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pompier",
    "french": "pompier, pompière",
    "meaning": "firefighter",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à pompier avec plus de confiance.",
    "translation": "She is learning to firefighter with more confidence.",
    "structures": [
      "pompier, pompière + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "but",
    "french": "but",
    "meaning": "aim, goal",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le but revient souvent pendant la réunion.",
    "translation": "The topic of aim often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-agit",
    "french": "s'agit",
    "meaning": "is about",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Avec un peu de pratique, elle apprend à s'agit.",
    "translation": "She is learning to is about with more confidence.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "timbres",
    "french": "timbres",
    "meaning": "stamps",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le timbres revient souvent pendant la réunion.",
    "translation": "The topic of stamps often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "attrayant",
    "french": "attrayant, attrayante",
    "meaning": "attractive",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois attrayant selon le contexte.",
    "translation": "attractive",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "revenu",
    "french": "revenu",
    "meaning": "income",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble revenu à première vue.",
    "translation": "This choice seems income at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bonde",
    "french": "bondé",
    "meaning": "crowded",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble bondé à première vue.",
    "translation": "This choice seems crowded at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lourd",
    "french": "lourd, lourde",
    "meaning": "heavy",
    "category": "Adjective / Adverb",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Cette situation est parfois lourd selon le contexte.",
    "translation": "heavy",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "adjective-adverb"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chaleur",
    "french": "chaleur",
    "meaning": "heat, warmth",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le chaleur revient souvent pendant la réunion.",
    "translation": "The topic of heat often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chaleureux-chaleureuse",
    "french": "chaleureux, chaleureuse",
    "meaning": "warm and friendly",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble chaleureux à première vue.",
    "translation": "This choice seems warm and friendly at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "accueillant",
    "french": "accueillant",
    "meaning": "welcoming",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble accueillant à première vue.",
    "translation": "This choice seems welcoming at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poulet",
    "french": "poulet",
    "meaning": "chicken",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le poulet revient souvent pendant la réunion.",
    "translation": "The topic of chicken often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dinde",
    "french": "dinde",
    "meaning": "turkey",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La dinde revient souvent pendant la réunion.",
    "translation": "The topic of turkey often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "queue",
    "french": "queue",
    "meaning": "tail, queue",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble queue à première vue.",
    "translation": "This choice seems tail at first glance.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "file-d-attente",
    "french": "file d'attente",
    "meaning": "waiting line, queue",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La file d'attente revient souvent pendant la réunion.",
    "translation": "The topic of waiting line often comes up during the meeting.",
    "structures": [],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "demander",
    "french": "demander",
    "meaning": "to ask",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à demander avec plus de confiance.",
    "translation": "She is learning to ask with more confidence.",
    "structures": [
      "demander + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ficher",
    "french": "ficher",
    "meaning": "to open a file, collect/save data",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à ficher avec plus de confiance.",
    "translation": "She is learning to open a file with more confidence.",
    "structures": [
      "ficher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "orner",
    "french": "orner",
    "meaning": "to decorate",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à orner avec plus de confiance.",
    "translation": "She is learning to decorate with more confidence.",
    "structures": [
      "orner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "raconter",
    "french": "raconter",
    "meaning": "to tell",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à raconter avec plus de confiance.",
    "translation": "She is learning to tell with more confidence.",
    "structures": [
      "raconter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ranger",
    "french": "ranger",
    "meaning": "to tidy up",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à ranger avec plus de confiance.",
    "translation": "She is learning to tidy up with more confidence.",
    "structures": [
      "ranger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "louer",
    "french": "louer",
    "meaning": "to rent",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à louer avec plus de confiance.",
    "translation": "She is learning to rent with more confidence.",
    "structures": [
      "louer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "accompagner",
    "french": "accompagner",
    "meaning": "to accompany, go with",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à accompagner avec plus de confiance.",
    "translation": "She is learning to accompany with more confidence.",
    "structures": [
      "accompagner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aider",
    "french": "aider",
    "meaning": "to help",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à aider avec plus de confiance.",
    "translation": "She is learning to help with more confidence.",
    "structures": [
      "aider + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aimer",
    "french": "aimer",
    "meaning": "to like, love",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à aimer avec plus de confiance.",
    "translation": "She is learning to like with more confidence.",
    "structures": [
      "aimer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ajouter",
    "french": "ajouter",
    "meaning": "to add",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à ajouter avec plus de confiance.",
    "translation": "She is learning to add with more confidence.",
    "structures": [
      "ajouter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "feliciter",
    "french": "féliciter",
    "meaning": "to congratulate",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à féliciter avec plus de confiance.",
    "translation": "She is learning to congratulate with more confidence.",
    "structures": [
      "féliciter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "apporter",
    "french": "apporter",
    "meaning": "to bring",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à apporter avec plus de confiance.",
    "translation": "She is learning to bring with more confidence.",
    "structures": [
      "apporter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jouer",
    "french": "jouer",
    "meaning": "to play",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à jouer avec plus de confiance.",
    "translation": "She is learning to play with more confidence.",
    "structures": [
      "jouer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fermer",
    "french": "fermer",
    "meaning": "to close",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à fermer avec plus de confiance.",
    "translation": "She is learning to close with more confidence.",
    "structures": [
      "fermer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "laver",
    "french": "laver",
    "meaning": "to wash",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à laver avec plus de confiance.",
    "translation": "She is learning to wash with more confidence.",
    "structures": [
      "laver + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "proteger",
    "french": "protéger",
    "meaning": "to protect",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à protéger avec plus de confiance.",
    "translation": "She is learning to protect with more confidence.",
    "structures": [
      "protéger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bavarder",
    "french": "bavarder",
    "meaning": "to chat",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à bavarder avec plus de confiance.",
    "translation": "She is learning to chat with more confidence.",
    "structures": [
      "bavarder + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "marcher",
    "french": "marcher",
    "meaning": "to walk",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à marcher avec plus de confiance.",
    "translation": "She is learning to walk with more confidence.",
    "structures": [
      "marcher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "briller",
    "french": "briller",
    "meaning": "to shine",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à briller avec plus de confiance.",
    "translation": "She is learning to shine with more confidence.",
    "structures": [
      "briller + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "meriter",
    "french": "mériter",
    "meaning": "to deserve",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mériter avec plus de confiance.",
    "translation": "She is learning to deserve with more confidence.",
    "structures": [
      "mériter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "brosser",
    "french": "brosser",
    "meaning": "to brush",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à brosser avec plus de confiance.",
    "translation": "She is learning to brush with more confidence.",
    "structures": [
      "brosser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cacher",
    "french": "cacher",
    "meaning": "to hide",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à cacher avec plus de confiance.",
    "translation": "She is learning to hide with more confidence.",
    "structures": [
      "cacher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "oublier",
    "french": "oublier",
    "meaning": "to forget",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à oublier avec plus de confiance.",
    "translation": "She is learning to forget with more confidence.",
    "structures": [
      "oublier + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cesser",
    "french": "cesser",
    "meaning": "to cease, stop",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à cesser avec plus de confiance.",
    "translation": "She is learning to cease with more confidence.",
    "structures": [
      "cesser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "arreter",
    "french": "arrêter",
    "meaning": "to stop, arrest",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à arrêter avec plus de confiance.",
    "translation": "She is learning to stop with more confidence.",
    "structures": [
      "arrêter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chanter",
    "french": "chanter",
    "meaning": "to sing",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à chanter avec plus de confiance.",
    "translation": "She is learning to sing with more confidence.",
    "structures": [
      "chanter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pardonner",
    "french": "pardonner",
    "meaning": "to forgive",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à pardonner avec plus de confiance.",
    "translation": "She is learning to forgive with more confidence.",
    "structures": [
      "pardonner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chercher",
    "french": "chercher",
    "meaning": "to look for",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à chercher avec plus de confiance.",
    "translation": "She is learning to look for with more confidence.",
    "structures": [
      "chercher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "commander",
    "french": "commander",
    "meaning": "to order",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à commander avec plus de confiance.",
    "translation": "She is learning to order with more confidence.",
    "structures": [
      "commander + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "compter",
    "french": "compter",
    "meaning": "to count",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à compter avec plus de confiance.",
    "translation": "She is learning to count with more confidence.",
    "structures": [
      "compter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parler",
    "french": "parler",
    "meaning": "to speak",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à parler avec plus de confiance.",
    "translation": "She is learning to speak with more confidence.",
    "structures": [
      "parler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "passer",
    "french": "passer",
    "meaning": "to pass, spend time",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à passer avec plus de confiance.",
    "translation": "She is learning to pass with more confidence.",
    "structures": [
      "passer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "peigner",
    "french": "peigner",
    "meaning": "to comb",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à peigner avec plus de confiance.",
    "translation": "She is learning to comb with more confidence.",
    "structures": [
      "peigner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "couter",
    "french": "coûter",
    "meaning": "to cost",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à coûter avec plus de confiance.",
    "translation": "She is learning to cost with more confidence.",
    "structures": [
      "coûter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "danser",
    "french": "danser",
    "meaning": "to dance",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à danser avec plus de confiance.",
    "translation": "She is learning to dance with more confidence.",
    "structures": [
      "danser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "penser",
    "french": "penser",
    "meaning": "to think",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à penser avec plus de confiance.",
    "translation": "She is learning to think with more confidence.",
    "structures": [
      "penser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dejeuner",
    "french": "déjeuner",
    "meaning": "to have lunch",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à déjeuner avec plus de confiance.",
    "translation": "She is learning to have lunch with more confidence.",
    "structures": [
      "déjeuner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "porter",
    "french": "porter",
    "meaning": "to wear, carry",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à porter avec plus de confiance.",
    "translation": "She is learning to wear with more confidence.",
    "structures": [
      "porter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "desirer",
    "french": "désirer",
    "meaning": "to want, desire",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à désirer avec plus de confiance.",
    "translation": "She is learning to want with more confidence.",
    "structures": [
      "désirer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "diner",
    "french": "dîner",
    "meaning": "to have dinner",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à dîner avec plus de confiance.",
    "translation": "She is learning to have dinner with more confidence.",
    "structures": [
      "dîner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "presenter",
    "french": "présenter",
    "meaning": "to present, introduce",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à présenter avec plus de confiance.",
    "translation": "She is learning to present with more confidence.",
    "structures": [
      "présenter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "donner",
    "french": "donner",
    "meaning": "to give",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à donner avec plus de confiance.",
    "translation": "She is learning to give with more confidence.",
    "structures": [
      "donner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "preter",
    "french": "prêter",
    "meaning": "to lend",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à prêter avec plus de confiance.",
    "translation": "She is learning to lend with more confidence.",
    "structures": [
      "prêter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ecouter",
    "french": "écouter",
    "meaning": "to listen",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à écouter avec plus de confiance.",
    "translation": "She is learning to listen with more confidence.",
    "structures": [
      "écouter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "quitter",
    "french": "quitter",
    "meaning": "to leave",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à quitter avec plus de confiance.",
    "translation": "She is learning to leave with more confidence.",
    "structures": [
      "quitter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "partir",
    "french": "partir",
    "meaning": "to leave",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à partir avec plus de confiance.",
    "translation": "She is learning to leave with more confidence.",
    "structures": [
      "partir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "embrasser",
    "french": "embrasser",
    "meaning": "to kiss, embrace",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à embrasser avec plus de confiance.",
    "translation": "She is learning to kiss with more confidence.",
    "structures": [
      "embrasser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "embarrasser",
    "french": "embarrasser",
    "meaning": "to embarrass",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à embarrasser avec plus de confiance.",
    "translation": "She is learning to embarrass with more confidence.",
    "structures": [
      "embarrasser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rappeler",
    "french": "rappeler",
    "meaning": "to remember, remind",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rappeler avec plus de confiance.",
    "translation": "She is learning to remember with more confidence.",
    "structures": [
      "rappeler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "entrer",
    "french": "entrer",
    "meaning": "to enter",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à entrer avec plus de confiance.",
    "translation": "She is learning to enter with more confidence.",
    "structures": [
      "entrer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "regretter",
    "french": "regretter",
    "meaning": "to regret",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à regretter avec plus de confiance.",
    "translation": "She is learning to regret with more confidence.",
    "structures": [
      "regretter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "epouser",
    "french": "épouser",
    "meaning": "to marry",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à épouser avec plus de confiance.",
    "translation": "She is learning to marry with more confidence.",
    "structures": [
      "épouser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remercier",
    "french": "remercier",
    "meaning": "to thank",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à remercier avec plus de confiance.",
    "translation": "She is learning to thank with more confidence.",
    "structures": [
      "remercier + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etudier",
    "french": "étudier",
    "meaning": "to study",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à étudier avec plus de confiance.",
    "translation": "She is learning to study with more confidence.",
    "structures": [
      "étudier + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "expliquer",
    "french": "expliquer",
    "meaning": "to explain",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à expliquer avec plus de confiance.",
    "translation": "She is learning to explain with more confidence.",
    "structures": [
      "expliquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rencontrer",
    "french": "rencontrer",
    "meaning": "to meet",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rencontrer avec plus de confiance.",
    "translation": "She is learning to meet with more confidence.",
    "structures": [
      "rencontrer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "terminer",
    "french": "terminer",
    "meaning": "to end, finish",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à terminer avec plus de confiance.",
    "translation": "She is learning to end with more confidence.",
    "structures": [
      "terminer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "trouver",
    "french": "trouver",
    "meaning": "to find",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à trouver avec plus de confiance.",
    "translation": "She is learning to find with more confidence.",
    "structures": [
      "trouver + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "essayer",
    "french": "essayer",
    "meaning": "to try",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à essayer avec plus de confiance.",
    "translation": "She is learning to try with more confidence.",
    "structures": [
      "essayer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rester",
    "french": "rester",
    "meaning": "to stay",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rester avec plus de confiance.",
    "translation": "She is learning to stay with more confidence.",
    "structures": [
      "rester + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tromper",
    "french": "tromper",
    "meaning": "to deceive, cheat on",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à tromper avec plus de confiance.",
    "translation": "She is learning to deceive with more confidence.",
    "structures": [
      "tromper + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "souhaiter",
    "french": "souhaiter",
    "meaning": "to wish",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à souhaiter avec plus de confiance.",
    "translation": "She is learning to wish with more confidence.",
    "structures": [
      "souhaiter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "esperer",
    "french": "espérer",
    "meaning": "to hope",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à espérer avec plus de confiance.",
    "translation": "She is learning to hope with more confidence.",
    "structures": [
      "espérer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "telephoner",
    "french": "téléphoner",
    "meaning": "to call",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à téléphoner avec plus de confiance.",
    "translation": "She is learning to call with more confidence.",
    "structures": [
      "téléphoner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "supprimer",
    "french": "supprimer",
    "meaning": "to delete",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à supprimer avec plus de confiance.",
    "translation": "She is learning to delete with more confidence.",
    "structures": [
      "supprimer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "telecharger",
    "french": "télécharger",
    "meaning": "to download",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à télécharger avec plus de confiance.",
    "translation": "She is learning to download with more confidence.",
    "structures": [
      "télécharger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tomber",
    "french": "tomber",
    "meaning": "to fall",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à tomber avec plus de confiance.",
    "translation": "She is learning to fall with more confidence.",
    "structures": [
      "tomber + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lancer",
    "french": "lancer",
    "meaning": "to throw, launch",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à lancer avec plus de confiance.",
    "translation": "She is learning to throw with more confidence.",
    "structures": [
      "lancer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "jeter",
    "french": "jeter",
    "meaning": "to throw",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à jeter avec plus de confiance.",
    "translation": "She is learning to throw with more confidence.",
    "structures": [
      "jeter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "coiffer",
    "french": "coiffer",
    "meaning": "to style hair",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à coiffer avec plus de confiance.",
    "translation": "She is learning to style hair with more confidence.",
    "structures": [
      "coiffer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "travailler",
    "french": "travailler",
    "meaning": "to work",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à travailler avec plus de confiance.",
    "translation": "She is learning to work with more confidence.",
    "structures": [
      "travailler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bouger",
    "french": "bouger",
    "meaning": "to move, budge, stir",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à bouger avec plus de confiance.",
    "translation": "She is learning to move with more confidence.",
    "structures": [
      "bouger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "chasser",
    "french": "chasser",
    "meaning": "to hunt, chase",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à chasser avec plus de confiance.",
    "translation": "She is learning to hunt with more confidence.",
    "structures": [
      "chasser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "optimiser",
    "french": "optimiser",
    "meaning": "to optimise",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette stratégie permet d'optimiser le temps de travail.",
    "translation": "to optimise",
    "structures": [
      "optimiser + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gerer",
    "french": "gérer",
    "meaning": "to manage, handle",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à gérer avec plus de confiance.",
    "translation": "She is learning to manage with more confidence.",
    "structures": [
      "gérer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "piquer",
    "french": "piquer",
    "meaning": "to sting",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à piquer avec plus de confiance.",
    "translation": "She is learning to sting with more confidence.",
    "structures": [
      "piquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "glisser",
    "french": "glisser",
    "meaning": "to slip",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à glisser avec plus de confiance.",
    "translation": "She is learning to slip with more confidence.",
    "structures": [
      "glisser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "juger",
    "french": "juger",
    "meaning": "to judge",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à juger avec plus de confiance.",
    "translation": "She is learning to judge with more confidence.",
    "structures": [
      "juger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gagner",
    "french": "gagner",
    "meaning": "to earn, win",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à gagner avec plus de confiance.",
    "translation": "She is learning to earn with more confidence.",
    "structures": [
      "gagner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sauver",
    "french": "sauver",
    "meaning": "to save, rescue",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sauver avec plus de confiance.",
    "translation": "She is learning to save with more confidence.",
    "structures": [
      "sauver + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "economiser",
    "french": "économiser",
    "meaning": "to save money",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à économiser avec plus de confiance.",
    "translation": "She is learning to save money with more confidence.",
    "structures": [
      "économiser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sensibiliser",
    "french": "sensibiliser",
    "meaning": "to raise awareness",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il faut sensibiliser les jeunes aux enjeux environnementaux.",
    "translation": "to raise awareness",
    "structures": [
      "sensibiliser quelqu'un à + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "emaner",
    "french": "émaner",
    "meaning": "to come from",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à émaner avec plus de confiance.",
    "translation": "She is learning to come from with more confidence.",
    "structures": [
      "émaner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dessiner",
    "french": "dessiner",
    "meaning": "to draw",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à dessiner avec plus de confiance.",
    "translation": "She is learning to draw with more confidence.",
    "structures": [
      "dessiner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sauter",
    "french": "sauter",
    "meaning": "to jump",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sauter avec plus de confiance.",
    "translation": "She is learning to jump with more confidence.",
    "structures": [
      "sauter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "basculer",
    "french": "basculer",
    "meaning": "to turn for the worse, tip over",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à basculer avec plus de confiance.",
    "translation": "She is learning to turn for the worse with more confidence.",
    "structures": [
      "basculer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "demarcher",
    "french": "démarcher",
    "meaning": "to canvass, solicit",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à démarcher avec plus de confiance.",
    "translation": "She is learning to canvass with more confidence.",
    "structures": [
      "démarcher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-derouler",
    "french": "se dérouler",
    "meaning": "to take place",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à se dérouler.",
    "translation": "She is learning to take place with more confidence.",
    "structures": [
      "se dérouler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "manquer",
    "french": "manquer",
    "meaning": "to lack, miss",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à manquer avec plus de confiance.",
    "translation": "She is learning to lack with more confidence.",
    "structures": [
      "manquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "partager",
    "french": "partager",
    "meaning": "to share",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à partager avec plus de confiance.",
    "translation": "She is learning to share with more confidence.",
    "structures": [
      "partager + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "recuperer",
    "french": "récupérer",
    "meaning": "to recover, get back",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à récupérer avec plus de confiance.",
    "translation": "She is learning to recover with more confidence.",
    "structures": [
      "récupérer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "entraver",
    "french": "entraver",
    "meaning": "to hinder",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à entraver avec plus de confiance.",
    "translation": "She is learning to hinder with more confidence.",
    "structures": [
      "entraver + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "enseigner",
    "french": "enseigner",
    "meaning": "to teach",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à enseigner avec plus de confiance.",
    "translation": "She is learning to teach with more confidence.",
    "structures": [
      "enseigner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "embrouiller",
    "french": "embrouiller",
    "meaning": "to confuse, mix up",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à embrouiller avec plus de confiance.",
    "translation": "She is learning to confuse with more confidence.",
    "structures": [
      "embrouiller + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "perturber",
    "french": "perturber",
    "meaning": "to disrupt, disturb",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Le bruit peut perturber la concentration.",
    "translation": "to disrupt, disturb",
    "structures": [
      "perturber + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "corriger",
    "french": "corriger",
    "meaning": "to correct, mark",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à corriger avec plus de confiance.",
    "translation": "She is learning to correct with more confidence.",
    "structures": [
      "corriger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "compliquer",
    "french": "compliquer",
    "meaning": "to complicate",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à compliquer avec plus de confiance.",
    "translation": "She is learning to complicate with more confidence.",
    "structures": [
      "compliquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remarquer",
    "french": "remarquer",
    "meaning": "to notice",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à remarquer avec plus de confiance.",
    "translation": "She is learning to notice with more confidence.",
    "structures": [
      "remarquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "changer",
    "french": "changer",
    "meaning": "to change",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à changer avec plus de confiance.",
    "translation": "She is learning to change with more confidence.",
    "structures": [
      "changer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gaspiller",
    "french": "gaspiller",
    "meaning": "to waste",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à gaspiller avec plus de confiance.",
    "translation": "She is learning to waste with more confidence.",
    "structures": [
      "gaspiller + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rever",
    "french": "rêver",
    "meaning": "to dream",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à rêver avec plus de confiance.",
    "translation": "She is learning to dream with more confidence.",
    "structures": [
      "rêver + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-depecher",
    "french": "se dépêcher",
    "meaning": "to hurry",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Avec un peu de pratique, elle apprend à se dépêcher.",
    "translation": "She is learning to hurry with more confidence.",
    "structures": [
      "se dépêcher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fonctionner",
    "french": "fonctionner",
    "meaning": "to work, function",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à fonctionner avec plus de confiance.",
    "translation": "She is learning to work with more confidence.",
    "structures": [
      "fonctionner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sortir",
    "french": "sortir",
    "meaning": "to go out",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sortir avec plus de confiance.",
    "translation": "She is learning to go out with more confidence.",
    "structures": [
      "sortir + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tremper",
    "french": "tremper",
    "meaning": "to soak",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à tremper avec plus de confiance.",
    "translation": "She is learning to soak with more confidence.",
    "structures": [
      "tremper + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "laisser",
    "french": "laisser",
    "meaning": "to leave, let",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à laisser avec plus de confiance.",
    "translation": "She is learning to leave with more confidence.",
    "structures": [
      "laisser + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "secher",
    "french": "sécher",
    "meaning": "to dry",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sécher avec plus de confiance.",
    "translation": "She is learning to dry with more confidence.",
    "structures": [
      "sécher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ronronner",
    "french": "ronronner",
    "meaning": "to purr",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à ronronner avec plus de confiance.",
    "translation": "She is learning to purr with more confidence.",
    "structures": [
      "ronronner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "melanger",
    "french": "mélanger",
    "meaning": "to mix, stir",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à mélanger avec plus de confiance.",
    "translation": "She is learning to mix with more confidence.",
    "structures": [
      "mélanger + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "remplacer",
    "french": "remplacer",
    "meaning": "to replace, substitute",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à remplacer avec plus de confiance.",
    "translation": "She is learning to replace with more confidence.",
    "structures": [
      "remplacer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "craquer",
    "french": "craquer",
    "meaning": "to strike, crack",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à craquer avec plus de confiance.",
    "translation": "She is learning to strike with more confidence.",
    "structures": [
      "craquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "allumer",
    "french": "allumer",
    "meaning": "to turn/switch on",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à allumer avec plus de confiance.",
    "translation": "She is learning to turn with more confidence.",
    "structures": [
      "allumer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eviter",
    "french": "éviter",
    "meaning": "to avoid",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à éviter avec plus de confiance.",
    "translation": "She is learning to avoid with more confidence.",
    "structures": [
      "éviter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "profiter",
    "french": "profiter",
    "meaning": "to enjoy, take advantage of",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à profiter avec plus de confiance.",
    "translation": "She is learning to enjoy with more confidence.",
    "structures": [
      "profiter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "voler",
    "french": "voler",
    "meaning": "to steal, fly",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à voler avec plus de confiance.",
    "translation": "She is learning to steal with more confidence.",
    "structures": [
      "voler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tuer",
    "french": "tuer",
    "meaning": "to kill",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à tuer avec plus de confiance.",
    "translation": "She is learning to kill with more confidence.",
    "structures": [
      "tuer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "demissionner",
    "french": "démissionner",
    "meaning": "to resign, quit",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à démissionner avec plus de confiance.",
    "translation": "She is learning to resign with more confidence.",
    "structures": [
      "démissionner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "elire",
    "french": "élire",
    "meaning": "to elect",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à élire avec plus de confiance.",
    "translation": "She is learning to elect with more confidence.",
    "structures": [
      "élire + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "paniquer",
    "french": "paniquer",
    "meaning": "to panic, freak out",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à paniquer avec plus de confiance.",
    "translation": "She is learning to panic with more confidence.",
    "structures": [
      "paniquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "souffler",
    "french": "souffler",
    "meaning": "to blow, breathe out",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à souffler avec plus de confiance.",
    "translation": "She is learning to blow with more confidence.",
    "structures": [
      "souffler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "peiner",
    "french": "peiner",
    "meaning": "to struggle, grieve",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à peiner avec plus de confiance.",
    "translation": "She is learning to struggle with more confidence.",
    "structures": [
      "peiner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "demenager",
    "french": "déménager",
    "meaning": "to move house",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à déménager avec plus de confiance.",
    "translation": "She is learning to move house with more confidence.",
    "structures": [
      "déménager + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "echouer",
    "french": "échouer",
    "meaning": "to fail",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à échouer avec plus de confiance.",
    "translation": "She is learning to fail with more confidence.",
    "structures": [
      "échouer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "transformer",
    "french": "transformer",
    "meaning": "to transform",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à transformer avec plus de confiance.",
    "translation": "She is learning to transform with more confidence.",
    "structures": [
      "transformer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "transcender",
    "french": "transcender",
    "meaning": "to transcend",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à transcender avec plus de confiance.",
    "translation": "She is learning to transcend with more confidence.",
    "structures": [
      "transcender + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "deleguer",
    "french": "déléguer",
    "meaning": "to delegate",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à déléguer avec plus de confiance.",
    "translation": "She is learning to delegate with more confidence.",
    "structures": [
      "déléguer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "consommer",
    "french": "consommer",
    "meaning": "to consume",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à consommer avec plus de confiance.",
    "translation": "She is learning to consume with more confidence.",
    "structures": [
      "consommer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "abonner",
    "french": "abonner",
    "meaning": "to subscribe",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à abonner avec plus de confiance.",
    "translation": "She is learning to subscribe with more confidence.",
    "structures": [
      "abonner + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "liberer",
    "french": "libérer",
    "meaning": "to release, free",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à libérer avec plus de confiance.",
    "translation": "She is learning to release with more confidence.",
    "structures": [
      "libérer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aborder",
    "french": "aborder",
    "meaning": "to tackle, address",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Je voudrais aborder un sujet important.",
    "translation": "to tackle, address",
    "structures": [
      "aborder + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "assister-a",
    "french": "assister à",
    "meaning": "to attend",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à assister à avec plus de confiance.",
    "translation": "She is learning to attend with more confidence.",
    "structures": [
      "assister à + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "souligner",
    "french": "souligner",
    "meaning": "to highlight",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il faut souligner l'importance de cette décision.",
    "translation": "to highlight",
    "structures": [
      "souligner + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "douter",
    "french": "douter",
    "meaning": "to doubt",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à douter avec plus de confiance.",
    "translation": "She is learning to doubt with more confidence.",
    "structures": [
      "douter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sembler",
    "french": "sembler",
    "meaning": "to seem, appear",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sembler avec plus de confiance.",
    "translation": "She is learning to seem with more confidence.",
    "structures": [
      "sembler + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "declencher",
    "french": "déclencher",
    "meaning": "to trigger",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette annonce a déclenché de nombreuses réactions.",
    "translation": "to trigger",
    "structures": [
      "déclencher + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sculpter",
    "french": "sculpter",
    "meaning": "to sculpt, carve",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à sculpter avec plus de confiance.",
    "translation": "She is learning to sculpt with more confidence.",
    "structures": [
      "sculpter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "influencer",
    "french": "influencer",
    "meaning": "to influence",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Les réseaux sociaux peuvent influencer les comportements.",
    "translation": "to influence",
    "structures": [
      "influencer + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bloquer",
    "french": "bloquer",
    "meaning": "to block, obstruct",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à bloquer avec plus de confiance.",
    "translation": "She is learning to block with more confidence.",
    "structures": [
      "bloquer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gouter",
    "french": "goûter",
    "meaning": "to taste",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à goûter avec plus de confiance.",
    "translation": "She is learning to taste with more confidence.",
    "structures": [
      "goûter + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "garder",
    "french": "garder",
    "meaning": "to keep",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à garder avec plus de confiance.",
    "translation": "She is learning to keep with more confidence.",
    "structures": [
      "garder + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "afficher",
    "french": "afficher",
    "meaning": "to display, show",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à afficher avec plus de confiance.",
    "translation": "She is learning to display with more confidence.",
    "structures": [
      "afficher + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "retirer",
    "french": "retirer",
    "meaning": "to remove, withdraw",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à retirer avec plus de confiance.",
    "translation": "She is learning to remove with more confidence.",
    "structures": [
      "retirer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "clarifier",
    "french": "clarifier",
    "meaning": "to clarify",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il est nécessaire de clarifier cette situation.",
    "translation": "to clarify",
    "structures": [
      "clarifier + complément"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etirer",
    "french": "étirer",
    "meaning": "to stretch",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à étirer avec plus de confiance.",
    "translation": "She is learning to stretch with more confidence.",
    "structures": [
      "étirer + complément"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Notion vocabulary database",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure"
    ],
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "soucieux-soucieuse",
    "french": "soucieux / soucieuse",
    "meaning": "concerned, anxious about",
    "category": "Adjective",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Je suis soucieux de l’avenir de l’environnement.",
    "translation": "I am concerned about the future of the environment.",
    "structures": [
      "être soucieux de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "adjective",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "préoccupé",
      "inquiet",
      "attentif à"
    ],
    "wordFamily": [
      "un souci",
      "se soucier de",
      "préoccupant"
    ],
    "repairPrompt": "Use « soucieux / soucieuse » in one TCF-style sentence, then say it again with préoccupé.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "effectuer",
    "french": "effectuer",
    "meaning": "to carry out",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "L’entreprise a effectué plusieurs changements.",
    "translation": "The company carried out several changes.",
    "structures": [
      "effectuer + tâche / changement"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "réaliser",
      "accomplir",
      "mener"
    ],
    "wordFamily": [
      "un effet",
      "effectif",
      "effectivement"
    ],
    "repairPrompt": "Use « effectuer » in one TCF-style sentence, then say it again with réaliser.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "savon",
    "french": "savon",
    "meaning": "soap",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "J’utilise un savon naturel.",
    "translation": "I use a natural soap.",
    "structures": [
      "un savon naturel"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "produit lavant",
      "nettoyant"
    ],
    "wordFamily": [
      "savonner",
      "savonneux"
    ],
    "repairPrompt": "Use « savon » in one TCF-style sentence, then say it again with produit lavant.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "alun",
    "french": "alun",
    "meaning": "alum",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’alun est utilisé dans certains déodorants.",
    "translation": "Alum is used in some deodorants.",
    "structures": [
      "pierre d’alun"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "pierre d’alun",
      "sel minéral"
    ],
    "wordFamily": [
      "minéral",
      "déodorant naturel"
    ],
    "repairPrompt": "Use « alun » in one TCF-style sentence, then say it again with pierre d’alun.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pierre",
    "french": "pierre",
    "meaning": "stone",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Cette maison est construite en pierre.",
    "translation": "This house is built from stone.",
    "structures": [
      "en pierre"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "roche",
      "caillou",
      "matériau"
    ],
    "wordFamily": [
      "pierreux",
      "une carrière",
      "un rocher"
    ],
    "repairPrompt": "Use « pierre » in one TCF-style sentence, then say it again with roche.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "hebdomadaire",
    "french": "hebdomadaire",
    "meaning": "weekly",
    "category": "Adjective",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Nous avons une réunion hebdomadaire.",
    "translation": "We have a weekly meeting.",
    "structures": [
      "réunion / rythme hebdomadaire"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "adjective",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "chaque semaine",
      "par semaine",
      "toutes les semaines"
    ],
    "wordFamily": [
      "une semaine",
      "hebdo",
      "mensuel"
    ],
    "repairPrompt": "Use « hebdomadaire » in one TCF-style sentence, then say it again with chaque semaine.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "couche-d-ozone",
    "french": "couche d’ozone",
    "meaning": "ozone layer",
    "category": "Environment",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La couche d’ozone protège la Terre.",
    "translation": "The ozone layer protects the Earth.",
    "structures": [
      "la couche d’ozone protège + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "environment",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "protection atmosphérique",
      "couche protectrice"
    ],
    "wordFamily": [
      "l’ozone",
      "atmosphérique",
      "protéger"
    ],
    "repairPrompt": "Use « couche d’ozone » in one TCF-style sentence, then say it again with protection atmosphérique.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reconstitution",
    "french": "reconstitution",
    "meaning": "reconstruction, restoration",
    "category": "Noun",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La reconstitution du bâtiment a pris plusieurs années.",
    "translation": "The reconstruction of the building took several years.",
    "structures": [
      "la reconstitution de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "noun",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "reconstruction",
      "restauration",
      "rétablissement"
    ],
    "wordFamily": [
      "reconstituer",
      "reconstruire",
      "restaurer"
    ],
    "repairPrompt": "Use « reconstitution » in one TCF-style sentence, then say it again with reconstruction.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tenir-a-preciser-que",
    "french": "tenir à préciser que",
    "meaning": "I would like to clarify that",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Je tiens à préciser que je suis d’accord.",
    "translation": "I would like to clarify that I agree.",
    "structures": [
      "je tiens à préciser que + phrase"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "je souhaite préciser que",
      "il convient de préciser que",
      "j’aimerais souligner que"
    ],
    "wordFamily": [
      "préciser",
      "une précision",
      "clair"
    ],
    "repairPrompt": "Use « tenir à préciser que » in one TCF-style sentence, then say it again with je souhaite préciser que.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tenir-a-insister-sur-le-fait-que",
    "french": "tenir à insister sur le fait que",
    "meaning": "to insist on the fact that",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Je tiens à insister sur le fait que cette mesure est importante.",
    "translation": "I would like to insist on the fact that this measure is important.",
    "structures": [
      "je tiens à insister sur le fait que + phrase"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "je tiens à souligner que",
      "il faut insister sur le fait que",
      "il est important de rappeler que"
    ],
    "wordFamily": [
      "insister",
      "une insistance",
      "le fait que"
    ],
    "repairPrompt": "Use « tenir à insister sur le fait que » in one TCF-style sentence, then say it again with je tiens à souligner que.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tenter",
    "french": "tenter",
    "meaning": "to attempt",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il tente de résoudre le problème.",
    "translation": "He is attempting to solve the problem.",
    "structures": [
      "tenter de + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "essayer",
      "chercher à",
      "s’efforcer de"
    ],
    "wordFamily": [
      "une tentative",
      "tentant",
      "tenter de"
    ],
    "repairPrompt": "Use « tenter » in one TCF-style sentence, then say it again with essayer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "favoriser",
    "french": "favoriser",
    "meaning": "to promote, encourage",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette réforme favorise l’innovation.",
    "translation": "This reform promotes innovation.",
    "structures": [
      "favoriser + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "encourager",
      "promouvoir",
      "soutenir"
    ],
    "wordFamily": [
      "favorable",
      "la faveur",
      "défavoriser"
    ],
    "repairPrompt": "Use « favoriser » in one TCF-style sentence, then say it again with encourager.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tenter-de-favoriser",
    "french": "tenter de favoriser",
    "meaning": "to try to encourage",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le gouvernement tente de favoriser l’emploi.",
    "translation": "The government is trying to encourage employment.",
    "structures": [
      "tenter de favoriser + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "essayer d’encourager",
      "chercher à promouvoir",
      "s’efforcer de soutenir"
    ],
    "wordFamily": [
      "tenter",
      "favoriser",
      "une tentative"
    ],
    "repairPrompt": "Use « tenter de favoriser » in one TCF-style sentence, then say it again with essayer d’encourager.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "embaucher",
    "french": "embaucher",
    "meaning": "to hire",
    "category": "Work",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’entreprise va embaucher dix personnes.",
    "translation": "The company will hire ten people.",
    "structures": [
      "embaucher + personne"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "work",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "recruter",
      "engager",
      "prendre en poste"
    ],
    "wordFamily": [
      "une embauche",
      "un recrutement",
      "un employé"
    ],
    "repairPrompt": "Use « embaucher » in one TCF-style sentence, then say it again with recruter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "demarche",
    "french": "démarche",
    "meaning": "process, approach, step",
    "category": "Noun",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Cette démarche est efficace.",
    "translation": "This approach is effective.",
    "structures": [
      "une démarche + adjectif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "noun",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "approche",
      "procédure",
      "initiative"
    ],
    "wordFamily": [
      "démarcher",
      "une approche",
      "un processus"
    ],
    "repairPrompt": "Use « démarche » in one TCF-style sentence, then say it again with approche.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "filiere",
    "french": "filière",
    "meaning": "sector, field",
    "category": "Work",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Il travaille dans la filière technologique.",
    "translation": "He works in the technology sector.",
    "structures": [
      "la filière + adjectif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "work",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "secteur",
      "domaine",
      "branche"
    ],
    "wordFamily": [
      "professionnel",
      "industriel",
      "une branche"
    ],
    "repairPrompt": "Use « filière » in one TCF-style sentence, then say it again with secteur.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "coherent",
    "french": "cohérent",
    "meaning": "coherent, consistent",
    "category": "Adjective",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Son argument est cohérent.",
    "translation": "His argument is coherent.",
    "structures": [
      "être cohérent avec + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "adjective",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "logique",
      "consistant",
      "harmonieux"
    ],
    "wordFamily": [
      "la cohérence",
      "cohérent avec",
      "incohérent"
    ],
    "repairPrompt": "Use « cohérent » in one TCF-style sentence, then say it again with logique.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "parvenir-a-nouveau-a",
    "french": "parvenir à nouveau à",
    "meaning": "to manage once again to",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Elle est parvenue à nouveau à réussir.",
    "translation": "She managed to succeed again.",
    "structures": [
      "parvenir à nouveau à + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "réussir encore à",
      "arriver de nouveau à",
      "être de nouveau capable de"
    ],
    "wordFamily": [
      "parvenir à",
      "la réussite",
      "réussir"
    ],
    "repairPrompt": "Use « parvenir à nouveau à » in one TCF-style sentence, then say it again with réussir encore à.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-rendre-compte-de",
    "french": "se rendre compte de",
    "meaning": "to realise",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Je me suis rendu compte de mon erreur.",
    "translation": "I realised my mistake.",
    "structures": [
      "se rendre compte de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "réaliser",
      "prendre conscience de",
      "constater"
    ],
    "wordFamily": [
      "un constat",
      "conscient",
      "la prise de conscience"
    ],
    "repairPrompt": "Use « se rendre compte de » in one TCF-style sentence, then say it again with réaliser.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "contraindre",
    "french": "contraindre",
    "meaning": "to constrain, compel",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette règle contraint les entreprises.",
    "translation": "This rule constrains companies.",
    "structures": [
      "contraindre + nom à + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "obliger",
      "forcer",
      "imposer"
    ],
    "wordFamily": [
      "une contrainte",
      "contraignant",
      "être contraint de"
    ],
    "repairPrompt": "Use « contraindre » in one TCF-style sentence, then say it again with obliger.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "restreindre",
    "french": "restreindre",
    "meaning": "to restrict",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Il faut restreindre les dépenses.",
    "translation": "Spending must be restricted.",
    "structures": [
      "restreindre + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "limiter",
      "réduire",
      "resserrer"
    ],
    "wordFamily": [
      "une restriction",
      "restreint",
      "restrictif"
    ],
    "repairPrompt": "Use « restreindre » in one TCF-style sentence, then say it again with limiter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "encadrer",
    "french": "encadrer",
    "meaning": "to regulate, supervise",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Le gouvernement encadre cette activité.",
    "translation": "The government regulates this activity.",
    "structures": [
      "encadrer + activité / pratique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "réglementer",
      "superviser",
      "contrôler"
    ],
    "wordFamily": [
      "un cadre",
      "un encadrement",
      "réglementaire"
    ],
    "repairPrompt": "Use « encadrer » in one TCF-style sentence, then say it again with réglementer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "realiser",
    "french": "réaliser",
    "meaning": "to achieve, carry out",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Nous avons réalisé notre objectif.",
    "translation": "We achieved our goal.",
    "structures": [
      "réaliser + objectif / projet"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "accomplir",
      "effectuer",
      "mener à bien"
    ],
    "wordFamily": [
      "une réalisation",
      "réalisable",
      "irréalisable"
    ],
    "repairPrompt": "Use « réaliser » in one TCF-style sentence, then say it again with accomplir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ong",
    "french": "ONG",
    "meaning": "NGO",
    "category": "Society",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Cette ONG aide les enfants.",
    "translation": "This NGO helps children.",
    "structures": [
      "une ONG + verbe"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "society",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "organisation non gouvernementale",
      "association humanitaire"
    ],
    "wordFamily": [
      "humanitaire",
      "bénévole",
      "associatif"
    ],
    "repairPrompt": "Use « ONG » in one TCF-style sentence, then say it again with organisation non gouvernementale.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "alimenter",
    "french": "alimenter",
    "meaning": "to feed, fuel, power",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Les médias alimentent le débat.",
    "translation": "The media fuel the debate.",
    "structures": [
      "alimenter + débat / système"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "nourrir",
      "fournir",
      "attiser"
    ],
    "wordFamily": [
      "une alimentation",
      "alimentaire",
      "alimenté par"
    ],
    "repairPrompt": "Use « alimenter » in one TCF-style sentence, then say it again with nourrir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cliche",
    "french": "cliché",
    "meaning": "stereotype, cliché",
    "category": "Society",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "C’est un cliché très répandu.",
    "translation": "It’s a very common stereotype.",
    "structures": [
      "un cliché répandu"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "society",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "stéréotype",
      "idée reçue",
      "lieu commun"
    ],
    "wordFamily": [
      "stéréotypé",
      "caricatural",
      "répandu"
    ],
    "repairPrompt": "Use « cliché » in one TCF-style sentence, then say it again with stéréotype.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fait",
    "french": "le fait",
    "meaning": "the fact",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le fait est que la situation est complexe.",
    "translation": "The fact is that the situation is complex.",
    "structures": [
      "le fait est que + phrase"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "la réalité",
      "ce qui est certain",
      "l’élément clé"
    ],
    "wordFamily": [
      "en fait",
      "du fait de",
      "le fait que"
    ],
    "repairPrompt": "Use « le fait » in one TCF-style sentence, then say it again with la réalité.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "devenir-une-evidence",
    "french": "devenir une évidence",
    "meaning": "to become obvious",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Avec le temps, cela est devenu une évidence.",
    "translation": "Over time, it became obvious.",
    "structures": [
      "devenir une évidence"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "s’imposer comme évident",
      "devenir clair",
      "apparaître évident"
    ],
    "wordFamily": [
      "évident",
      "une évidence",
      "évidemment"
    ],
    "repairPrompt": "Use « devenir une évidence » in one TCF-style sentence, then say it again with s’imposer comme évident.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ne-presque-plus",
    "french": "ne … presque plus",
    "meaning": "hardly … anymore",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Je ne regarde presque plus la télévision.",
    "translation": "I hardly watch television anymore.",
    "structures": [
      "ne + verbe + presque plus"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "à peine encore",
      "très rarement désormais",
      "presque jamais maintenant"
    ],
    "wordFamily": [
      "presque",
      "ne plus",
      "rarement"
    ],
    "repairPrompt": "Use « ne … presque plus » in one TCF-style sentence, then say it again with à peine encore.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "militer",
    "french": "militer",
    "meaning": "to campaign, advocate",
    "category": "Society",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Elle milite pour l’égalité.",
    "translation": "She campaigns for equality.",
    "structures": [
      "militer pour / contre + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "society",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "faire campagne",
      "défendre",
      "plaider pour"
    ],
    "wordFamily": [
      "un militant",
      "militantisme",
      "militant"
    ],
    "repairPrompt": "Use « militer » in one TCF-style sentence, then say it again with faire campagne.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "agir-dans-son-coin",
    "french": "agir dans son coin",
    "meaning": "to act alone",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Il préfère agir dans son coin.",
    "translation": "He prefers to act on his own.",
    "structures": [
      "agir dans son coin"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "agir seul",
      "faire les choses de son côté",
      "travailler isolément"
    ],
    "wordFamily": [
      "agir",
      "une action",
      "isolé"
    ],
    "repairPrompt": "Use « agir dans son coin » in one TCF-style sentence, then say it again with agir seul.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "estimer-que",
    "french": "estimer que",
    "meaning": "to believe that, consider that",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "J’estime que cette décision est juste.",
    "translation": "I believe this decision is fair.",
    "structures": [
      "estimer que + phrase"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "considérer que",
      "juger que",
      "penser que"
    ],
    "wordFamily": [
      "une estimation",
      "estimable",
      "surestimer"
    ],
    "repairPrompt": "Use « estimer que » in one TCF-style sentence, then say it again with considérer que.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "en-effet",
    "french": "en effet",
    "meaning": "indeed",
    "category": "Connectors",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "En effet, les résultats sont positifs.",
    "translation": "Indeed, the results are positive.",
    "structures": [
      "en effet, + phrase"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connectors",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "effectivement",
      "de fait",
      "il est vrai que"
    ],
    "wordFamily": [
      "un effet",
      "effectivement",
      "en fait"
    ],
    "repairPrompt": "Use « en effet » in one TCF-style sentence, then say it again with effectivement.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gonfler",
    "french": "gonfler",
    "meaning": "to inflate, swell",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Les prix ont gonflé rapidement.",
    "translation": "Prices increased rapidly.",
    "structures": [
      "gonfler + nom / les prix gonflent"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "augmenter",
      "enfler",
      "grossir"
    ],
    "wordFamily": [
      "gonflé",
      "un gonflement",
      "dégonfler"
    ],
    "repairPrompt": "Use « gonfler » in one TCF-style sentence, then say it again with augmenter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "malvoyant",
    "french": "malvoyant",
    "meaning": "visually impaired",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Des aides existent pour les personnes malvoyantes.",
    "translation": "Support exists for visually impaired people.",
    "structures": [
      "personne malvoyante"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "déficient visuel",
      "ayant une basse vision"
    ],
    "wordFamily": [
      "la vue",
      "voyant",
      "non-voyant"
    ],
    "repairPrompt": "Use « malvoyant » in one TCF-style sentence, then say it again with déficient visuel.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etonner",
    "french": "étonner",
    "meaning": "to surprise",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Cette nouvelle m’a étonné.",
    "translation": "This news surprised me.",
    "structures": [
      "étonner + personne"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "surprendre",
      "stupéfier",
      "déconcerter"
    ],
    "wordFamily": [
      "étonnant",
      "étonné",
      "un étonnement"
    ],
    "repairPrompt": "Use « étonner » in one TCF-style sentence, then say it again with surprendre.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "derailler",
    "french": "dérailler",
    "meaning": "to derail, go off track",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Le projet a complètement déraillé.",
    "translation": "The project completely derailed.",
    "structures": [
      "un projet déraille"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "échouer",
      "sortir de sa trajectoire",
      "tourner mal"
    ],
    "wordFamily": [
      "un rail",
      "un déraillement",
      "déraillé"
    ],
    "repairPrompt": "Use « dérailler » in one TCF-style sentence, then say it again with échouer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "exiger",
    "french": "exiger",
    "meaning": "to require, demand",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette tâche exige beaucoup d’efforts.",
    "translation": "This task requires a lot of effort.",
    "structures": [
      "exiger + nom / que + subjonctif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "demander",
      "nécessiter",
      "requérir"
    ],
    "wordFamily": [
      "une exigence",
      "exigeant",
      "exigible"
    ],
    "repairPrompt": "Use « exiger » in one TCF-style sentence, then say it again with demander.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pouetter",
    "french": "pouetter",
    "meaning": "to chirp, tweet",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Les oiseaux pouettent dans les arbres.",
    "translation": "Birds chirp in the trees.",
    "structures": [
      "les oiseaux pouettent"
    ],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "piailler",
      "gazouiller",
      "chanter"
    ],
    "wordFamily": [
      "un cri",
      "un oiseau",
      "un gazouillis"
    ],
    "repairPrompt": "Use « pouetter » in one TCF-style sentence, then say it again with piailler.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "morceau",
    "french": "morceau",
    "meaning": "piece, portion",
    "category": "General Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "J’ai mangé un morceau de gâteau.",
    "translation": "I ate a piece of cake.",
    "structures": [
      "un morceau de + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "general-vocabulary",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "pièce",
      "part",
      "portion"
    ],
    "wordFamily": [
      "morceler",
      "un fragment",
      "une part"
    ],
    "repairPrompt": "Use « morceau » in one TCF-style sentence, then say it again with pièce.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tousser",
    "french": "tousser",
    "meaning": "to cough",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il tousse depuis ce matin.",
    "translation": "He has been coughing since this morning.",
    "structures": [
      "tousser depuis + moment"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "avoir une toux",
      "toussoter"
    ],
    "wordFamily": [
      "une toux",
      "toussoter",
      "tousseur"
    ],
    "repairPrompt": "Use « tousser » in one TCF-style sentence, then say it again with avoir une toux.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "licencier",
    "french": "licencier",
    "meaning": "to dismiss, lay off",
    "category": "Work",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’entreprise a licencié plusieurs employés.",
    "translation": "The company laid off several employees.",
    "structures": [
      "licencier + employé"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "work",
      "structure",
      "manual-batch",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "renvoyer",
      "congédier",
      "mettre à pied"
    ],
    "wordFamily": [
      "un licenciement",
      "licencié",
      "un employé"
    ],
    "repairPrompt": "Use « licencier » in one TCF-style sentence, then say it again with renvoyer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "surgir",
    "french": "surgir",
    "meaning": "to arise, emerge",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Un problème peut surgir au dernier moment.",
    "translation": "A problem can arise at the last minute.",
    "structures": [
      "surgir + complément de temps / lieu"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "apparaître",
      "émerger",
      "se présenter"
    ],
    "wordFamily": [
      "un surgissement",
      "soudain",
      "l'émergence"
    ],
    "repairPrompt": "Use « surgir » in one TCF-style sentence, then say it again with apparaître.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "subir",
    "french": "subir",
    "meaning": "to undergo, suffer",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Les habitants subissent les effets de la pollution.",
    "translation": "Residents suffer the effects of pollution.",
    "structures": [
      "subir + conséquences / effets"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "endurer",
      "supporter",
      "être soumis à"
    ],
    "wordFamily": [
      "subi",
      "un préjudice",
      "la souffrance"
    ],
    "repairPrompt": "Use « subir » in one TCF-style sentence, then say it again with endurer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rapprocher",
    "french": "rapprocher",
    "meaning": "to bring together",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Cette initiative rapproche les générations.",
    "translation": "This initiative brings generations together.",
    "structures": [
      "rapprocher + deux groupes"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "réunir",
      "connecter",
      "créer des liens"
    ],
    "wordFamily": [
      "proche",
      "un rapprochement",
      "se rapprocher"
    ],
    "repairPrompt": "Use « rapprocher » in one TCF-style sentence, then say it again with réunir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "semer",
    "french": "semer",
    "meaning": "to sow",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il faut semer les graines au printemps.",
    "translation": "The seeds must be sown in spring.",
    "structures": [
      "semer + graines / doute"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "planter",
      "disperser",
      "répandre"
    ],
    "wordFamily": [
      "une semence",
      "un semis",
      "semer le doute"
    ],
    "repairPrompt": "Use « semer » in one TCF-style sentence, then say it again with planter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "creuser",
    "french": "creuser",
    "meaning": "to dig",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Les inégalités continuent de se creuser.",
    "translation": "Inequalities continue to deepen.",
    "structures": [
      "creuser + trou / écart"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "approfondir",
      "excaver",
      "aggraver"
    ],
    "wordFamily": [
      "un creux",
      "creusé",
      "se creuser"
    ],
    "repairPrompt": "Use « creuser » in one TCF-style sentence, then say it again with approfondir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ecart",
    "french": "écart",
    "meaning": "gap, difference",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L'écart entre les deux résultats est important.",
    "translation": "The gap between the two results is significant.",
    "structures": [
      "l'écart entre + deux éléments"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "différence",
      "distance",
      "décalage"
    ],
    "wordFamily": [
      "écarter",
      "s'écarter",
      "un écartement"
    ],
    "repairPrompt": "Use « écart » in one TCF-style sentence, then say it again with différence.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eclater",
    "french": "éclater",
    "meaning": "to burst",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Une crise peut éclater sans prévenir.",
    "translation": "A crisis can break out without warning.",
    "structures": [
      "une crise / un conflit éclate"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "exploser",
      "se déclencher",
      "jaillir"
    ],
    "wordFamily": [
      "un éclat",
      "éclaté",
      "l'éclatement"
    ],
    "repairPrompt": "Use « éclater » in one TCF-style sentence, then say it again with exploser.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ecarter",
    "french": "écarter",
    "meaning": "to spread apart, discard",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Il faut écarter cette hypothèse.",
    "translation": "This hypothesis must be ruled out.",
    "structures": [
      "écarter + hypothèse / risque"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "rejeter",
      "exclure",
      "mettre de côté"
    ],
    "wordFamily": [
      "écart",
      "s'écarter",
      "écarté"
    ],
    "repairPrompt": "Use « écarter » in one TCF-style sentence, then say it again with rejeter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tartiner",
    "french": "tartiner",
    "meaning": "to spread (butter, jam)",
    "category": "Food",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Elle tartine du beurre sur le pain.",
    "translation": "She spreads butter on the bread.",
    "structures": [
      "tartiner + aliment sur + support"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "food",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "étaler",
      "recouvrir",
      "mettre une couche"
    ],
    "wordFamily": [
      "une tartine",
      "le beurre",
      "la confiture"
    ],
    "repairPrompt": "Use « tartiner » in one TCF-style sentence, then say it again with étaler.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "repandre",
    "french": "répandre",
    "meaning": "to spread",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Les réseaux sociaux peuvent répandre une rumeur rapidement.",
    "translation": "Social media can spread a rumor quickly.",
    "structures": [
      "répandre + information / idée"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "diffuser",
      "propager",
      "disséminer"
    ],
    "wordFamily": [
      "répandu",
      "la propagation",
      "se répandre"
    ],
    "repairPrompt": "Use « répandre » in one TCF-style sentence, then say it again with diffuser.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bourrer",
    "french": "bourrer",
    "meaning": "to cram, stuff",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il a bourré son sac de vêtements.",
    "translation": "He stuffed his bag with clothes.",
    "structures": [
      "bourrer + objet de + contenu"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "remplir",
      "entasser",
      "charger"
    ],
    "wordFamily": [
      "bourré",
      "le bourrage",
      "rembourrer"
    ],
    "repairPrompt": "Use « bourrer » in one TCF-style sentence, then say it again with remplir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fourrer",
    "french": "fourrer",
    "meaning": "to stuff, shove",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Elle a fourré les papiers dans un tiroir.",
    "translation": "She shoved the papers into a drawer.",
    "structures": [
      "fourrer + objet dans + lieu"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "mettre",
      "glisser",
      "enfoncer"
    ],
    "wordFamily": [
      "fourré",
      "une fourrure",
      "se fourrer"
    ],
    "repairPrompt": "Use « fourrer » in one TCF-style sentence, then say it again with mettre.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "embouteiller",
    "french": "embouteiller",
    "meaning": "to bottle",
    "category": "Food",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Cette entreprise embouteille de l'eau minérale.",
    "translation": "This company bottles mineral water.",
    "structures": [
      "embouteiller + liquide"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "food",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "mettre en bouteille",
      "conditionner",
      "conserver"
    ],
    "wordFamily": [
      "une bouteille",
      "l'embouteillage",
      "bouteillé"
    ],
    "repairPrompt": "Use « embouteiller » in one TCF-style sentence, then say it again with mettre en bouteille.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vanter",
    "french": "vanter",
    "meaning": "to boast, praise",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La publicité vante les qualités du produit.",
    "translation": "The advertisement praises the product's qualities.",
    "structures": [
      "vanter + mérite / qualité"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "louer",
      "faire l'éloge de",
      "promouvoir"
    ],
    "wordFamily": [
      "se vanter",
      "vantard",
      "un éloge"
    ],
    "repairPrompt": "Use « vanter » in one TCF-style sentence, then say it again with louer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fouiller",
    "french": "fouiller",
    "meaning": "to search through",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "La police a fouillé le véhicule.",
    "translation": "The police searched the vehicle.",
    "structures": [
      "fouiller + lieu / objet"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "chercher",
      "examiner",
      "inspecter"
    ],
    "wordFamily": [
      "une fouille",
      "fouillé",
      "un fouillis"
    ],
    "repairPrompt": "Use « fouiller » in one TCF-style sentence, then say it again with chercher.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eclaircir",
    "french": "éclaircir",
    "meaning": "to clarify, clear up",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce rapport permet d'éclaircir la situation.",
    "translation": "This report helps clarify the situation.",
    "structures": [
      "éclaircir + situation / point"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "clarifier",
      "expliquer",
      "rendre plus clair"
    ],
    "wordFamily": [
      "clair",
      "un éclaircissement",
      "s'éclaircir"
    ],
    "repairPrompt": "Use « éclaircir » in one TCF-style sentence, then say it again with clarifier.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "suer",
    "french": "suer",
    "meaning": "to sweat",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il sue beaucoup pendant l'entraînement.",
    "translation": "He sweats a lot during training.",
    "structures": [
      "suer pendant + activité"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "transpirer",
      "avoir chaud"
    ],
    "wordFamily": [
      "la sueur",
      "suant",
      "sueur froide"
    ],
    "repairPrompt": "Use « suer » in one TCF-style sentence, then say it again with transpirer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "transpirer",
    "french": "transpirer",
    "meaning": "to sweat",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "On transpire davantage quand il fait chaud.",
    "translation": "We sweat more when it is hot.",
    "structures": [
      "transpirer quand + phrase"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "suer",
      "dégager de la sueur"
    ],
    "wordFamily": [
      "la transpiration",
      "transpirant",
      "anti-transpirant"
    ],
    "repairPrompt": "Use « transpirer » in one TCF-style sentence, then say it again with suer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "plier",
    "french": "plier",
    "meaning": "to fold",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Elle plie les vêtements avant de les ranger.",
    "translation": "She folds the clothes before putting them away.",
    "structures": [
      "plier + objet"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "replier",
      "courber",
      "plier en deux"
    ],
    "wordFamily": [
      "un pli",
      "pliable",
      "déplier"
    ],
    "repairPrompt": "Use « plier » in one TCF-style sentence, then say it again with replier.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "piler",
    "french": "piler",
    "meaning": "to pound, crush",
    "category": "Food",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il faut piler les épices dans un mortier.",
    "translation": "The spices must be crushed in a mortar.",
    "structures": [
      "piler + aliment / matière"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "food",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "écraser",
      "broyer",
      "concasser"
    ],
    "wordFamily": [
      "un pilon",
      "pilé",
      "un mortier"
    ],
    "repairPrompt": "Use « piler » in one TCF-style sentence, then say it again with écraser.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "piller",
    "french": "piller",
    "meaning": "to loot, plunder",
    "category": "Society",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Des magasins ont été pillés pendant les violences.",
    "translation": "Stores were looted during the violence.",
    "structures": [
      "piller + lieu"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "society",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "voler",
      "saccager",
      "dépouiller"
    ],
    "wordFamily": [
      "un pillage",
      "pilleur",
      "pillé"
    ],
    "repairPrompt": "Use « piller » in one TCF-style sentence, then say it again with voler.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "noyer",
    "french": "noyer",
    "meaning": "to drown",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Il ne faut pas noyer les plantes sous trop d'eau.",
    "translation": "Plants should not be drowned with too much water.",
    "structures": [
      "noyer + personne / chose"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "submerger",
      "immerger",
      "étouffer"
    ],
    "wordFamily": [
      "la noyade",
      "noyé",
      "se noyer"
    ],
    "repairPrompt": "Use « noyer » in one TCF-style sentence, then say it again with submerger.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "grossir",
    "french": "grossir",
    "meaning": "to gain weight, enlarge",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Les coûts risquent de grossir avec le temps.",
    "translation": "Costs may grow over time.",
    "structures": [
      "grossir avec + temps / facteur"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "augmenter",
      "s'élargir",
      "prendre du poids"
    ],
    "wordFamily": [
      "gros",
      "la grosseur",
      "grossissant"
    ],
    "repairPrompt": "Use « grossir » in one TCF-style sentence, then say it again with augmenter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "maigrir",
    "french": "maigrir",
    "meaning": "to lose weight",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il veut maigrir de façon progressive.",
    "translation": "He wants to lose weight gradually.",
    "structures": [
      "maigrir de façon + adjectif"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "perdre du poids",
      "s'affiner",
      "mincir"
    ],
    "wordFamily": [
      "maigre",
      "la maigreur",
      "amaigrir"
    ],
    "repairPrompt": "Use « maigrir » in one TCF-style sentence, then say it again with perdre du poids.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "raccourcir",
    "french": "raccourcir",
    "meaning": "to shorten",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Il faut raccourcir ce texte pour l'examen.",
    "translation": "This text must be shortened for the exam.",
    "structures": [
      "raccourcir + texte / délai"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "abréger",
      "réduire",
      "couper"
    ],
    "wordFamily": [
      "court",
      "un raccourci",
      "raccourci"
    ],
    "repairPrompt": "Use « raccourcir » in one TCF-style sentence, then say it again with abréger.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "retrecir",
    "french": "rétrécir",
    "meaning": "to narrow, shrink",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "L'espace disponible risque de rétrécir.",
    "translation": "The available space may shrink.",
    "structures": [
      "rétrécir avec + temps / usage"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "diminuer",
      "se réduire",
      "se resserrer"
    ],
    "wordFamily": [
      "étroit",
      "un rétrécissement",
      "rétréci"
    ],
    "repairPrompt": "Use « rétrécir » in one TCF-style sentence, then say it again with diminuer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "contourner",
    "french": "contourner",
    "meaning": "to bypass, circumvent",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Certaines entreprises cherchent à contourner la règle.",
    "translation": "Some companies try to circumvent the rule.",
    "structures": [
      "contourner + règle / obstacle"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "éviter",
      "esquiver",
      "passer outre"
    ],
    "wordFamily": [
      "un contour",
      "contournement",
      "contourné"
    ],
    "repairPrompt": "Use « contourner » in one TCF-style sentence, then say it again with éviter.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "peler",
    "french": "peler",
    "meaning": "to peel",
    "category": "Food",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Elle pèle une pomme avant de la manger.",
    "translation": "She peels an apple before eating it.",
    "structures": [
      "peler + fruit / légume"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "food",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "éplucher",
      "retirer la peau",
      "décortiquer"
    ],
    "wordFamily": [
      "la peau",
      "une pelure",
      "éplucher"
    ],
    "repairPrompt": "Use « peler » in one TCF-style sentence, then say it again with éplucher.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cirer",
    "french": "cirer",
    "meaning": "to polish, wax",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il cire ses chaussures avant l'entretien.",
    "translation": "He polishes his shoes before the interview.",
    "structures": [
      "cirer + chaussures / sol"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "polir",
      "lustrer",
      "faire briller"
    ],
    "wordFamily": [
      "la cire",
      "ciré",
      "un cirage"
    ],
    "repairPrompt": "Use « cirer » in one TCF-style sentence, then say it again with polir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "serrer",
    "french": "serrer",
    "meaning": "to tighten",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il faut serrer la ceinture de sécurité.",
    "translation": "The seat belt must be tightened.",
    "structures": [
      "serrer + objet / personne"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "resserrer",
      "presser",
      "tenir fermement"
    ],
    "wordFamily": [
      "serré",
      "un serrage",
      "desserrer"
    ],
    "repairPrompt": "Use « serrer » in one TCF-style sentence, then say it again with resserrer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "racine",
    "french": "racine",
    "meaning": "root",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Les racines de ce problème sont profondes.",
    "translation": "The roots of this problem are deep.",
    "structures": [
      "les racines de + problème / phénomène"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "origine",
      "base",
      "source"
    ],
    "wordFamily": [
      "raciner",
      "enraciner",
      "déraciner"
    ],
    "repairPrompt": "Use « racine » in one TCF-style sentence, then say it again with origine.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "arracher",
    "french": "arracher",
    "meaning": "to pull out, uproot",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Le vent a arraché plusieurs branches.",
    "translation": "The wind tore off several branches.",
    "structures": [
      "arracher + objet à + lieu"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "retirer",
      "extraire",
      "déraciner"
    ],
    "wordFamily": [
      "un arrachement",
      "arraché",
      "déraciner"
    ],
    "repairPrompt": "Use « arracher » in one TCF-style sentence, then say it again with retirer.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "recolter",
    "french": "récolter",
    "meaning": "to harvest",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Les agriculteurs récoltent les fruits en été.",
    "translation": "Farmers harvest the fruit in summer.",
    "structures": [
      "récolter + produit / résultat"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "cueillir",
      "recueillir",
      "obtenir"
    ],
    "wordFamily": [
      "une récolte",
      "récolté",
      "un récoltant"
    ],
    "repairPrompt": "Use « récolter » in one TCF-style sentence, then say it again with cueillir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ramasser",
    "french": "ramasser",
    "meaning": "to pick up, collect",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Les enfants ramassent les feuilles dans le jardin.",
    "translation": "The children pick up leaves in the garden.",
    "structures": [
      "ramasser + objet"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "recueillir",
      "collecter",
      "prendre par terre"
    ],
    "wordFamily": [
      "un ramassage",
      "ramassé",
      "collecte"
    ],
    "repairPrompt": "Use « ramasser » in one TCF-style sentence, then say it again with recueillir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "amende",
    "french": "amende",
    "meaning": "fine, penalty",
    "category": "Legal",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Il a reçu une amende pour excès de vitesse.",
    "translation": "He received a fine for speeding.",
    "structures": [
      "recevoir / payer une amende"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "legal",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "sanction",
      "pénalité",
      "contravention"
    ],
    "wordFamily": [
      "amender",
      "une contravention",
      "sanctionner"
    ],
    "repairPrompt": "Use « amende » in one TCF-style sentence, then say it again with sanction.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "montant",
    "french": "montant",
    "meaning": "amount",
    "category": "Finance",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le montant de l'amende est élevé.",
    "translation": "The amount of the fine is high.",
    "structures": [
      "le montant de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "finance",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "somme",
      "total",
      "valeur"
    ],
    "wordFamily": [
      "monter",
      "une somme",
      "un paiement"
    ],
    "repairPrompt": "Use « montant » in one TCF-style sentence, then say it again with somme.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aveugler",
    "french": "aveugler",
    "meaning": "to blind",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La lumière peut aveugler le conducteur.",
    "translation": "The light can blind the driver.",
    "structures": [
      "aveugler + personne"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "éblouir",
      "priver de vue",
      "obscurcir"
    ],
    "wordFamily": [
      "aveugle",
      "un aveuglement",
      "malvoyant"
    ],
    "repairPrompt": "Use « aveugler » in one TCF-style sentence, then say it again with éblouir.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "epargner",
    "french": "épargner",
    "meaning": "to save",
    "category": "Finance",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Il essaie d'épargner chaque mois.",
    "translation": "He tries to save every month.",
    "structures": [
      "épargner + argent / effort"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "finance",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "mettre de côté",
      "économiser",
      "préserver"
    ],
    "wordFamily": [
      "une épargne",
      "épargné",
      "un épargnant"
    ],
    "repairPrompt": "Use « épargner » in one TCF-style sentence, then say it again with mettre de côté.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "enjeu",
    "french": "enjeu",
    "meaning": "stake, challenge, issue",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L'enjeu principal est de réduire les inégalités.",
    "translation": "The main issue is to reduce inequalities.",
    "structures": [
      "l'enjeu est de + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "défi",
      "question centrale",
      "ce qui est en jeu"
    ],
    "wordFamily": [
      "mettre en jeu",
      "un défi",
      "stratégique"
    ],
    "repairPrompt": "Use « enjeu » in one TCF-style sentence, then say it again with défi.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gratter",
    "french": "gratter",
    "meaning": "to scratch",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il ne faut pas gratter une plaie.",
    "translation": "You should not scratch a wound.",
    "structures": [
      "gratter + surface / peau"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "racler",
      "frotter",
      "égratigner"
    ],
    "wordFamily": [
      "une gratte",
      "une égratignure",
      "gratté"
    ],
    "repairPrompt": "Use « gratter » in one TCF-style sentence, then say it again with racler.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gratte-ciel",
    "french": "gratte-ciel",
    "meaning": "skyscraper",
    "category": "Urban Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce gratte-ciel domine le quartier.",
    "translation": "This skyscraper dominates the district.",
    "structures": [
      "un gratte-ciel + verbe"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "urban-vocabulary",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "tour",
      "immeuble très haut",
      "building"
    ],
    "wordFamily": [
      "gratter",
      "le ciel",
      "urbain"
    ],
    "repairPrompt": "Use « gratte-ciel » in one TCF-style sentence, then say it again with tour.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pneu",
    "french": "pneu",
    "meaning": "tyre",
    "category": "Driving",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le pneu avant est crevé.",
    "translation": "The front tyre is flat.",
    "structures": [
      "un pneu crevé"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "driving",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "roue",
      "pneumatique"
    ],
    "wordFamily": [
      "pneumatique",
      "crevé",
      "gonfler"
    ],
    "repairPrompt": "Use « pneu » in one TCF-style sentence, then say it again with roue.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "volant",
    "french": "volant",
    "meaning": "steering wheel",
    "category": "Driving",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Il garde les mains sur le volant.",
    "translation": "He keeps his hands on the steering wheel.",
    "structures": [
      "tenir le volant"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "driving",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "direction",
      "commande de conduite"
    ],
    "wordFamily": [
      "voler",
      "conducteur",
      "conduire"
    ],
    "repairPrompt": "Use « volant » in one TCF-style sentence, then say it again with direction.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "miel",
    "french": "miel",
    "meaning": "honey",
    "category": "Food",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Elle met du miel dans son thé.",
    "translation": "She puts honey in her tea.",
    "structures": [
      "du miel dans + boisson / plat"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "food",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "sucre naturel",
      "nectar"
    ],
    "wordFamily": [
      "miellé",
      "une abeille",
      "une ruche"
    ],
    "repairPrompt": "Use « miel » in one TCF-style sentence, then say it again with sucre naturel.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "lune-de-miel",
    "french": "lune de miel",
    "meaning": "honeymoon",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ils partent en lune de miel après le mariage.",
    "translation": "They are going on honeymoon after the wedding.",
    "structures": [
      "partir en lune de miel"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "voyage de noces",
      "séjour après le mariage"
    ],
    "wordFamily": [
      "le miel",
      "le mariage",
      "les noces"
    ],
    "repairPrompt": "Use « lune de miel » in one TCF-style sentence, then say it again with voyage de noces.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ruche",
    "french": "ruche",
    "meaning": "hive",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La ruche abrite des milliers d'abeilles.",
    "translation": "The hive shelters thousands of bees.",
    "structures": [
      "une ruche abrite + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "nid d'abeilles",
      "colonie"
    ],
    "wordFamily": [
      "une abeille",
      "le miel",
      "un apiculteur"
    ],
    "repairPrompt": "Use « ruche » in one TCF-style sentence, then say it again with nid d'abeilles.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "songer",
    "french": "songer",
    "meaning": "to think, consider",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Il songe à changer de carrière.",
    "translation": "He is considering changing career.",
    "structures": [
      "songer à + infinitif / nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 2",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-2",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [
      "penser à",
      "envisager",
      "réfléchir à"
    ],
    "wordFamily": [
      "un songe",
      "songeur",
      "songer à"
    ],
    "repairPrompt": "Use « songer » in one TCF-style sentence, then say it again with penser à.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vacances",
    "french": "les vacances",
    "meaning": "holidays, vacations",
    "category": "Travel",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Les vacances peuvent jouer un rôle important dans cette situation.",
    "translation": "Holidays can play an important role in this situation.",
    "structures": [
      "prendre des vacances"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "travel",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "prendre des vacances",
      "les vacances"
    ],
    "repairPrompt": "Use « les vacances » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eleve",
    "french": "un élève",
    "meaning": "pupil, school student",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un élève peut jouer un rôle important dans cette situation.",
    "translation": "Pupil can play an important role in this situation.",
    "structures": [
      "un élève de + niveau"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un élève de + niveau",
      "un élève"
    ],
    "repairPrompt": "Use « un élève » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etudiant",
    "french": "un étudiant",
    "meaning": "university student",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un étudiant peut jouer un rôle important dans cette situation.",
    "translation": "University student can play an important role in this situation.",
    "structures": [
      "un étudiant en + domaine"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un étudiant en + domaine",
      "un étudiant"
    ],
    "repairPrompt": "Use « un étudiant » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "cours",
    "french": "un cours",
    "meaning": "course, class",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un cours peut jouer un rôle important dans cette situation.",
    "translation": "Course can play an important role in this situation.",
    "structures": [
      "suivre un cours"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "suivre un cours",
      "un cours"
    ],
    "repairPrompt": "Use « un cours » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "examen",
    "french": "un examen",
    "meaning": "exam",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un examen peut jouer un rôle important dans cette situation.",
    "translation": "Exam can play an important role in this situation.",
    "structures": [
      "passer un examen"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "passer un examen",
      "un examen"
    ],
    "repairPrompt": "Use « un examen » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eduquer",
    "french": "éduquer",
    "meaning": "to educate",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "L’éduquer revient souvent pendant la réunion.",
    "translation": "The topic of educate often comes up during the meeting.",
    "structures": [
      "éduquer + personne"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "éduquer + personne",
      "éduquer"
    ],
    "repairPrompt": "Use « éduquer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "passer-un-examen",
    "french": "passer un examen",
    "meaning": "to sit an exam",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le passer un examen revient souvent pendant la réunion.",
    "translation": "The topic of sit an exam often comes up during the meeting.",
    "structures": [
      "passer un examen"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "passer un examen",
      "passer un examen"
    ],
    "repairPrompt": "Use « passer un examen » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reussir-a-un-examen",
    "french": "réussir à un examen",
    "meaning": "to pass an exam",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le réussir à un examen revient souvent pendant la réunion.",
    "translation": "The topic of pass an exam often comes up during the meeting.",
    "structures": [
      "réussir à un examen"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "réussir à un examen",
      "réussir à un examen"
    ],
    "repairPrompt": "Use « réussir à un examen » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "echouer-a-un-examen",
    "french": "échouer à un examen",
    "meaning": "to fail an exam",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’échouer à un examen revient souvent pendant la réunion.",
    "translation": "The topic of fail an exam often comes up during the meeting.",
    "structures": [
      "échouer à un examen"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "échouer à un examen",
      "échouer à un examen"
    ],
    "repairPrompt": "Use « échouer à un examen » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "recevoir-son-diplome",
    "french": "recevoir son diplôme",
    "meaning": "to receive one's degree",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La recevoir son diplôme revient souvent pendant la réunion.",
    "translation": "The topic of receive one's degree often comes up during the meeting.",
    "structures": [
      "recevoir son diplôme"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "recevoir son diplôme",
      "recevoir son diplôme"
    ],
    "repairPrompt": "Use « recevoir son diplôme » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "devoirs",
    "french": "les devoirs",
    "meaning": "homework, assignments",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Les devoirs peuvent jouer un rôle important dans cette situation.",
    "translation": "Homework can play an important role in this situation.",
    "structures": [
      "faire ses devoirs"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "faire ses devoirs",
      "les devoirs"
    ],
    "repairPrompt": "Use « les devoirs » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "note",
    "french": "une note",
    "meaning": "grade, mark",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Une note peut jouer un rôle important dans cette situation.",
    "translation": "Grade can play an important role in this situation.",
    "structures": [
      "obtenir une note"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "obtenir une note",
      "une note"
    ],
    "repairPrompt": "Use « une note » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "score",
    "french": "score",
    "meaning": "score",
    "category": "Education",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le score revient souvent pendant la réunion.",
    "translation": "The topic of score often comes up during the meeting.",
    "structures": [
      "obtenir un score"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "obtenir un score",
      "score"
    ],
    "repairPrompt": "Use « score » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "analyser",
    "french": "analyser",
    "meaning": "to analyse",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’analyser revient souvent pendant la réunion.",
    "translation": "The topic of analyse often comes up during the meeting.",
    "structures": [
      "analyser + situation / données"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "analyser + situation / données",
      "analyser"
    ],
    "repairPrompt": "Use « analyser » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ordonnance",
    "french": "une ordonnance",
    "meaning": "prescription",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Une ordonnance peut jouer un rôle important dans cette situation.",
    "translation": "Prescription can play an important role in this situation.",
    "structures": [
      "une ordonnance médicale"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une ordonnance médicale",
      "une ordonnance"
    ],
    "repairPrompt": "Use « une ordonnance » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "medecin",
    "french": "un médecin",
    "meaning": "doctor",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un médecin peut jouer un rôle important dans cette situation.",
    "translation": "Doctor can play an important role in this situation.",
    "structures": [
      "consulter un médecin"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "consulter un médecin",
      "un médecin"
    ],
    "repairPrompt": "Use « un médecin » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "medicament",
    "french": "un médicament",
    "meaning": "medicine",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un médicament peut jouer un rôle important dans cette situation.",
    "translation": "Medicine can play an important role in this situation.",
    "structures": [
      "prendre un médicament"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "prendre un médicament",
      "un médicament"
    ],
    "repairPrompt": "Use « un médicament » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "traitement",
    "french": "le traitement",
    "meaning": "treatment",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le traitement peut jouer un rôle important dans cette situation.",
    "translation": "Treatment can play an important role in this situation.",
    "structures": [
      "suivre un traitement"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "suivre un traitement",
      "le traitement"
    ],
    "repairPrompt": "Use « le traitement » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "toux",
    "french": "une toux",
    "meaning": "cough",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Une toux peut jouer un rôle important dans cette situation.",
    "translation": "Cough can play an important role in this situation.",
    "structures": [
      "avoir une toux"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir une toux",
      "une toux"
    ],
    "repairPrompt": "Use « une toux » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "des-effets-secondaires",
    "french": "des effets secondaires",
    "meaning": "side effects",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Des effets secondaires peuvent jouer un rôle important dans cette situation.",
    "translation": "Side effects can play an important role in this situation.",
    "structures": [
      "avoir des effets secondaires"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir des effets secondaires",
      "des effets secondaires"
    ],
    "repairPrompt": "Use « des effets secondaires » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pharmacien",
    "french": "un pharmacien",
    "meaning": "pharmacist",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Un pharmacien peut jouer un rôle important dans cette situation.",
    "translation": "Pharmacist can play an important role in this situation.",
    "structures": [
      "demander conseil à un pharmacien"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "demander conseil à un pharmacien",
      "un pharmacien"
    ],
    "repairPrompt": "Use « un pharmacien » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pharmacienne",
    "french": "une pharmacienne",
    "meaning": "female pharmacist",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Une pharmacienne peut jouer un rôle important dans cette situation.",
    "translation": "Female pharmacist can play an important role in this situation.",
    "structures": [
      "demander conseil à une pharmacienne"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "demander conseil à une pharmacienne",
      "une pharmacienne"
    ],
    "repairPrompt": "Use « une pharmacienne » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gelule",
    "french": "une gélule",
    "meaning": "capsule",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Une gélule peut jouer un rôle important dans cette situation.",
    "translation": "Capsule can play an important role in this situation.",
    "structures": [
      "prendre une gélule"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "prendre une gélule",
      "une gélule"
    ],
    "repairPrompt": "Use « une gélule » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "analgesique",
    "french": "un analgésique",
    "meaning": "painkiller",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Un analgésique peut jouer un rôle important dans cette situation.",
    "translation": "Painkiller can play an important role in this situation.",
    "structures": [
      "prendre un analgésique"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "prendre un analgésique",
      "un analgésique"
    ],
    "repairPrompt": "Use « un analgésique » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "avoir-un-rhume",
    "french": "avoir un rhume",
    "meaning": "to have a cold",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Après une longue journée, il peut avoir un rhume.",
    "translation": "She is learning to have a cold with more confidence.",
    "structures": [
      "avoir un rhume"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir un rhume",
      "avoir un rhume"
    ],
    "repairPrompt": "Use « avoir un rhume » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "avoir-la-grippe",
    "french": "avoir la grippe",
    "meaning": "to have the flu",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Après une longue journée, il peut avoir la grippe.",
    "translation": "She is learning to have the flu with more confidence.",
    "structures": [
      "avoir la grippe"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir la grippe",
      "avoir la grippe"
    ],
    "repairPrompt": "Use « avoir la grippe » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "avoir-mal-a-la-tete",
    "french": "avoir mal à la tête",
    "meaning": "to have a headache",
    "category": "Health",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Après une longue journée, il peut avoir mal à la tête.",
    "translation": "She is learning to have a headache with more confidence.",
    "structures": [
      "avoir mal à la tête"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir mal à la tête",
      "avoir mal à la tête"
    ],
    "repairPrompt": "Use « avoir mal à la tête » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "boulot",
    "french": "boulot",
    "meaning": "job",
    "category": "Work",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le boulot revient souvent pendant la réunion.",
    "translation": "The topic of job often comes up during the meeting.",
    "structures": [
      "avoir du boulot"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "work",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir du boulot",
      "boulot"
    ],
    "repairPrompt": "Use « boulot » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-entendre-avec",
    "french": "s’entendre avec",
    "meaning": "to get along with",
    "category": "Everyday Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Avec un peu de pratique, elle apprend à s’entendre avec.",
    "translation": "She is learning to get along with with more confidence.",
    "structures": [
      "s’entendre avec + personne"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "s’entendre avec + personne",
      "s’entendre avec"
    ],
    "repairPrompt": "Use « s’entendre avec » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rapport",
    "french": "rapport",
    "meaning": "report",
    "category": "Work",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le rapport revient souvent pendant la réunion.",
    "translation": "The topic of report often comes up during the meeting.",
    "structures": [
      "rédiger un rapport"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "work",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "rédiger un rapport",
      "rapport"
    ],
    "repairPrompt": "Use « rapport » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vacances-estivales",
    "french": "vacances estivales",
    "meaning": "summer holidays",
    "category": "Travel",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le vacances estivales revient souvent pendant la réunion.",
    "translation": "The topic of summer holidays often comes up during the meeting.",
    "structures": [
      "les vacances estivales"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "travel",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "les vacances estivales",
      "vacances estivales"
    ],
    "repairPrompt": "Use « vacances estivales » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "actuel",
    "french": "actuel",
    "meaning": "current",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble actuel à première vue.",
    "translation": "This choice seems current at first glance.",
    "structures": [
      "la situation actuelle"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "la situation actuelle",
      "actuel"
    ],
    "repairPrompt": "Use « actuel » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rythme",
    "french": "rythme",
    "meaning": "pace, rhythm",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le rythme revient souvent pendant la réunion.",
    "translation": "The topic of pace often comes up during the meeting.",
    "structures": [
      "au rythme de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "au rythme de + nom",
      "rythme"
    ],
    "repairPrompt": "Use « rythme » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "delirant",
    "french": "délirant",
    "meaning": "delirious, absurd",
    "category": "Adjective",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble délirant à première vue.",
    "translation": "This choice seems delirious at first glance.",
    "structures": [
      "un rythme délirant"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "adjective",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un rythme délirant",
      "délirant"
    ],
    "repairPrompt": "Use « délirant » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "politique",
    "french": "politique",
    "meaning": "policy",
    "category": "Society",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble politique à première vue.",
    "translation": "This choice seems policy at first glance.",
    "structures": [
      "une politique publique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "society",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une politique publique",
      "politique"
    ],
    "repairPrompt": "Use « politique » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "peine-penalite",
    "french": "peine (pénalité)",
    "meaning": "penalty",
    "category": "Legal",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La peine revient souvent pendant la réunion.",
    "translation": "The topic of penalty often comes up during the meeting.",
    "structures": [
      "une peine de + durée"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "legal",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une peine de + durée",
      "peine (pénalité)"
    ],
    "repairPrompt": "Use « peine (pénalité) » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "peine",
    "french": "peine",
    "meaning": "pain, trouble",
    "category": "Everyday Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "La peine revient souvent pendant la réunion.",
    "translation": "The topic of pain often comes up during the meeting.",
    "structures": [
      "avoir de la peine"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir de la peine",
      "peine"
    ],
    "repairPrompt": "Use « peine » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-peine",
    "french": "à peine",
    "meaning": "barely, hardly",
    "category": "Connectors",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Il reste à peine dix minutes avant le début de l’examen.",
    "translation": "There are barely ten minutes left before the exam starts.",
    "structures": [
      "à peine + verbe"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connectors",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "à peine + verbe",
      "à peine"
    ],
    "repairPrompt": "Use « à peine » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "detestable",
    "french": "détestable",
    "meaning": "detestable, awful",
    "category": "Adjective",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble détestable à première vue.",
    "translation": "This choice seems detestable at first glance.",
    "structures": [
      "un comportement détestable"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "adjective",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un comportement détestable",
      "détestable"
    ],
    "repairPrompt": "Use « détestable » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "admirable",
    "french": "admirable",
    "meaning": "admirable",
    "category": "Adjective",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble admirable à première vue.",
    "translation": "This choice seems admirable at first glance.",
    "structures": [
      "une attitude admirable"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "adjective",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une attitude admirable",
      "admirable"
    ],
    "repairPrompt": "Use « admirable » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "heriter",
    "french": "hériter",
    "meaning": "to inherit",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à hériter avec plus de confiance.",
    "translation": "She is learning to inherit with more confidence.",
    "structures": [
      "hériter de + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "hériter de + nom",
      "hériter"
    ],
    "repairPrompt": "Use « hériter » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "devoir-infinitif",
    "french": "devoir + infinitif",
    "meaning": "to have to, must",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le devoir revient souvent pendant la réunion.",
    "translation": "The topic of have to often comes up during the meeting.",
    "structures": [
      "devoir + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "devoir + infinitif",
      "devoir + infinitif"
    ],
    "repairPrompt": "Use « devoir + infinitif » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "disparaitre",
    "french": "disparaître",
    "meaning": "to disappear",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à disparaître avec plus de confiance.",
    "translation": "She is learning to disappear with more confidence.",
    "structures": [
      "disparaître progressivement"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "disparaître progressivement",
      "disparaître"
    ],
    "repairPrompt": "Use « disparaître » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-balader",
    "french": "se balader",
    "meaning": "to walk around, stroll",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Avec un peu de pratique, elle apprend à se balader.",
    "translation": "She is learning to walk around with more confidence.",
    "structures": [
      "se balader dans + lieu"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "se balader dans + lieu",
      "se balader"
    ],
    "repairPrompt": "Use « se balader » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "genoux",
    "french": "les genoux",
    "meaning": "knees",
    "category": "Health",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Les genoux peuvent jouer un rôle important dans cette situation.",
    "translation": "Knees can play an important role in this situation.",
    "structures": [
      "avoir mal aux genoux"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "health",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "avoir mal aux genoux",
      "les genoux"
    ],
    "repairPrompt": "Use « les genoux » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tremblant",
    "french": "tremblant",
    "meaning": "trembling, shaking",
    "category": "Adjective",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble tremblant à première vue.",
    "translation": "This choice seems trembling at first glance.",
    "structures": [
      "être tremblant"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "adjective",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "être tremblant",
      "tremblant"
    ],
    "repairPrompt": "Use « tremblant » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "a-l-instant",
    "french": "à l’instant",
    "meaning": "just now",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Elle vient d’arriver à l’instant.",
    "translation": "She has just arrived.",
    "structures": [
      "à l’instant"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "à l’instant",
      "à l’instant"
    ],
    "repairPrompt": "Use « à l’instant » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dur",
    "french": "dur",
    "meaning": "hard, difficult",
    "category": "Adjective",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble dur à première vue.",
    "translation": "This choice seems hard at first glance.",
    "structures": [
      "c'est dur de + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "adjective",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "c'est dur de + infinitif",
      "dur"
    ],
    "repairPrompt": "Use « dur » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bien-au-chaud",
    "french": "bien au chaud",
    "meaning": "nice and warm",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le bien au chaud revient souvent pendant la réunion.",
    "translation": "The topic of nice and warm often comes up during the meeting.",
    "structures": [
      "rester bien au chaud"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "rester bien au chaud",
      "bien au chaud"
    ],
    "repairPrompt": "Use « bien au chaud » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "virgule",
    "french": "virgule",
    "meaning": "comma",
    "category": "Writing",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La virgule revient souvent pendant la réunion.",
    "translation": "The topic of comma often comes up during the meeting.",
    "structures": [
      "mettre une virgule"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "writing",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "mettre une virgule",
      "virgule"
    ],
    "repairPrompt": "Use « virgule » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "decortiquer",
    "french": "décortiquer",
    "meaning": "to break down, analyse in detail",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le décortiquer revient souvent pendant la réunion.",
    "translation": "The topic of break down often comes up during the meeting.",
    "structures": [
      "décortiquer + problème / texte"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "décortiquer + problème / texte",
      "décortiquer"
    ],
    "repairPrompt": "Use « décortiquer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "peser",
    "french": "peser",
    "meaning": "to weigh",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à peser avec plus de confiance.",
    "translation": "She is learning to weigh with more confidence.",
    "structures": [
      "peser + poids / décision"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "peser + poids / décision",
      "peser"
    ],
    "repairPrompt": "Use « peser » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "l-un-de-l-autre",
    "french": "l’un de l’autre",
    "meaning": "each other",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "La l’un de l’autre revient souvent pendant la réunion.",
    "translation": "The topic of each other often comes up during the meeting.",
    "structures": [
      "dépendre l’un de l’autre"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "dépendre l’un de l’autre",
      "l’un de l’autre"
    ],
    "repairPrompt": "Use « l’un de l’autre » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "decoller",
    "french": "décoller",
    "meaning": "to take off",
    "category": "Travel",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le décoller revient souvent pendant la réunion.",
    "translation": "The topic of take off often comes up during the meeting.",
    "structures": [
      "l'avion décolle"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "travel",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "l'avion décolle",
      "décoller"
    ],
    "repairPrompt": "Use « décoller » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "derober",
    "french": "dérober",
    "meaning": "to steal",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à dérober avec plus de confiance.",
    "translation": "She is learning to steal with more confidence.",
    "structures": [
      "dérober + objet"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "dérober + objet",
      "dérober"
    ],
    "repairPrompt": "Use « dérober » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "defiler",
    "french": "défiler",
    "meaning": "to parade, march past",
    "category": "Society",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le défiler revient souvent pendant la réunion.",
    "translation": "The topic of parade often comes up during the meeting.",
    "structures": [
      "défiler dans la rue"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "society",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "défiler dans la rue",
      "défiler"
    ],
    "repairPrompt": "Use « défiler » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "deborder",
    "french": "déborder",
    "meaning": "to overflow",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à déborder avec plus de confiance.",
    "translation": "She is learning to overflow with more confidence.",
    "structures": [
      "déborder de + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "déborder de + nom",
      "déborder"
    ],
    "repairPrompt": "Use « déborder » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "debrouiller",
    "french": "débrouiller",
    "meaning": "to sort out, untangle",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à débrouiller avec plus de confiance.",
    "translation": "She is learning to sort out with more confidence.",
    "structures": [
      "débrouiller + situation"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "débrouiller + situation",
      "débrouiller"
    ],
    "repairPrompt": "Use « débrouiller » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "se-debrouiller",
    "french": "se débrouiller",
    "meaning": "to manage, get by",
    "category": "Everyday Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Avec un peu de pratique, elle apprend à se débrouiller.",
    "translation": "She is learning to manage with more confidence.",
    "structures": [
      "se débrouiller seul"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "se débrouiller seul",
      "se débrouiller"
    ],
    "repairPrompt": "Use « se débrouiller » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "au-fur-et-a-mesure",
    "french": "au fur et à mesure",
    "meaning": "gradually, as things progress",
    "category": "Connectors",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Au fur et à mesure, elle comprend mieux les règles du cours.",
    "translation": "Gradually, she understands the course rules better.",
    "structures": [
      "au fur et à mesure que + phrase"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connectors",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "au fur et à mesure que + phrase",
      "au fur et à mesure"
    ],
    "repairPrompt": "Use « au fur et à mesure » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "piste-cyclable",
    "french": "piste cyclable",
    "meaning": "cycle lane, bike path",
    "category": "Urban Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "La piste cyclable revient souvent pendant la réunion.",
    "translation": "The topic of cycle lane often comes up during the meeting.",
    "structures": [
      "prendre la piste cyclable"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "urban-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "prendre la piste cyclable",
      "piste cyclable"
    ],
    "repairPrompt": "Use « piste cyclable » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "trottoir",
    "french": "trottoir",
    "meaning": "pavement, sidewalk",
    "category": "Urban Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le trottoir revient souvent pendant la réunion.",
    "translation": "The topic of pavement often comes up during the meeting.",
    "structures": [
      "marcher sur le trottoir"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "urban-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "marcher sur le trottoir",
      "trottoir"
    ],
    "repairPrompt": "Use « trottoir » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "feu-de-circulation",
    "french": "feu de circulation",
    "meaning": "traffic light",
    "category": "Driving",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le feu de circulation revient souvent pendant la réunion.",
    "translation": "The topic of traffic light often comes up during the meeting.",
    "structures": [
      "s'arrêter au feu de circulation"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "driving",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "s'arrêter au feu de circulation",
      "feu de circulation"
    ],
    "repairPrompt": "Use « feu de circulation » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "passage-pieton",
    "french": "passage piéton",
    "meaning": "pedestrian crossing",
    "category": "Urban Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le passage piéton revient souvent pendant la réunion.",
    "translation": "The topic of pedestrian crossing often comes up during the meeting.",
    "structures": [
      "traverser au passage piéton"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "urban-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "traverser au passage piéton",
      "passage piéton"
    ],
    "repairPrompt": "Use « passage piéton » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bouchon",
    "french": "bouchon",
    "meaning": "traffic jam",
    "category": "Driving",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le bouchon revient souvent pendant la réunion.",
    "translation": "The topic of traffic jam often comes up during the meeting.",
    "structures": [
      "être coincé dans un bouchon"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "driving",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "être coincé dans un bouchon",
      "bouchon"
    ],
    "repairPrompt": "Use « bouchon » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "honneur",
    "french": "un honneur",
    "meaning": "an honour",
    "category": "Everyday Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Un honneur peut jouer un rôle important dans cette situation.",
    "translation": "An honour can play an important role in this situation.",
    "structures": [
      "c'est un honneur de + infinitif"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "c'est un honneur de + infinitif",
      "un honneur"
    ],
    "repairPrompt": "Use « un honneur » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "l-apprenant",
    "french": "l’apprenant",
    "meaning": "learner",
    "category": "Education",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble l’apprenant à première vue.",
    "translation": "This choice seems learner at first glance.",
    "structures": [
      "l'apprenant progresse"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "education",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "l'apprenant progresse",
      "l’apprenant"
    ],
    "repairPrompt": "Use « l’apprenant » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "au-fil-du-temps",
    "french": "au fil du temps",
    "meaning": "over time",
    "category": "Connectors",
    "level": "B2",
    "partOfSpeech": "connector",
    "example": "Au fil du temps, cette solution demande encore du temps.",
    "translation": "Au fil du temps, this solution still needs more time.",
    "structures": [
      "au fil du temps"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "connectors",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "au fil du temps",
      "au fil du temps"
    ],
    "repairPrompt": "Use « au fil du temps » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "domaine",
    "french": "domaine",
    "meaning": "field, area",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le domaine revient souvent pendant la réunion.",
    "translation": "The topic of field often comes up during the meeting.",
    "structures": [
      "dans le domaine de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "dans le domaine de + nom",
      "domaine"
    ],
    "repairPrompt": "Use « domaine » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "trajet",
    "french": "trajet",
    "meaning": "journey, trip",
    "category": "Travel",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le trajet revient souvent pendant la réunion.",
    "translation": "The topic of journey often comes up during the meeting.",
    "structures": [
      "faire un trajet"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "travel",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "faire un trajet",
      "trajet"
    ],
    "repairPrompt": "Use « trajet » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "desir",
    "french": "désir",
    "meaning": "desire",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le désir revient souvent pendant la réunion.",
    "translation": "The topic of desire often comes up during the meeting.",
    "structures": [
      "exprimer un désir"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "exprimer un désir",
      "désir"
    ],
    "repairPrompt": "Use « désir » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "bagage",
    "french": "bagage",
    "meaning": "luggage",
    "category": "Travel",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le bagage revient souvent pendant la réunion.",
    "translation": "The topic of luggage often comes up during the meeting.",
    "structures": [
      "prendre un bagage"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "travel",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "prendre un bagage",
      "bagage"
    ],
    "repairPrompt": "Use « bagage » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "maintenir",
    "french": "maintenir",
    "meaning": "to maintain, keep",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le maintenir revient souvent pendant la réunion.",
    "translation": "The topic of maintain often comes up during the meeting.",
    "structures": [
      "maintenir + niveau / effort"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "maintenir + niveau / effort",
      "maintenir"
    ],
    "repairPrompt": "Use « maintenir » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gener",
    "french": "gêner",
    "meaning": "to bother, inconvenience",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le gêner revient souvent pendant la réunion.",
    "translation": "The topic of bother often comes up during the meeting.",
    "structures": [
      "gêner + personne"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "gêner + personne",
      "gêner"
    ],
    "repairPrompt": "Use « gêner » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "valoriser",
    "french": "valoriser",
    "meaning": "to value",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le valoriser revient souvent pendant la réunion.",
    "translation": "The topic of value often comes up during the meeting.",
    "structures": [
      "valoriser + compétence"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "valoriser + compétence",
      "valoriser"
    ],
    "repairPrompt": "Use « valoriser » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "declencheur",
    "french": "déclencheur",
    "meaning": "trigger",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le déclencheur revient souvent pendant la réunion.",
    "translation": "The topic of trigger often comes up during the meeting.",
    "structures": [
      "un élément déclencheur"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un élément déclencheur",
      "déclencheur"
    ],
    "repairPrompt": "Use « déclencheur » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "disperser",
    "french": "disperser",
    "meaning": "to scatter, spread out",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à disperser avec plus de confiance.",
    "translation": "She is learning to scatter with more confidence.",
    "structures": [
      "disperser + groupe / objet"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "disperser + groupe / objet",
      "disperser"
    ],
    "repairPrompt": "Use « disperser » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "l-addition",
    "french": "l’addition",
    "meaning": "the bill",
    "category": "Food",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La l’addition revient souvent pendant la réunion.",
    "translation": "The topic of the bill often comes up during the meeting.",
    "structures": [
      "demander l’addition"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "food",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "demander l’addition",
      "l’addition"
    ],
    "repairPrompt": "Use « l’addition » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eloigner",
    "french": "éloigner",
    "meaning": "to move away, keep away",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à éloigner avec plus de confiance.",
    "translation": "She is learning to move away with more confidence.",
    "structures": [
      "éloigner + personne / risque"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "éloigner + personne / risque",
      "éloigner"
    ],
    "repairPrompt": "Use « éloigner » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "abonne",
    "french": "abonné / abonnée",
    "meaning": "subscriber, follower",
    "category": "Technology",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble abonné à première vue.",
    "translation": "This choice seems subscriber at first glance.",
    "structures": [
      "un abonné à + service"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "technology",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un abonné à + service",
      "abonné / abonnée"
    ],
    "repairPrompt": "Use « abonné / abonnée » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "contenu",
    "french": "contenu",
    "meaning": "content",
    "category": "Technology",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble contenu à première vue.",
    "translation": "This choice seems content at first glance.",
    "structures": [
      "créer du contenu"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "technology",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "créer du contenu",
      "contenu"
    ],
    "repairPrompt": "Use « contenu » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "planete",
    "french": "la planète",
    "meaning": "the planet",
    "category": "Environment",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La planète peut jouer un rôle important dans cette situation.",
    "translation": "The planet can play an important role in this situation.",
    "structures": [
      "protéger la planète"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "environment",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "protéger la planète",
      "la planète"
    ],
    "repairPrompt": "Use « la planète » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "changement",
    "french": "changement",
    "meaning": "change",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le changement revient souvent pendant la réunion.",
    "translation": "The topic of change often comes up during the meeting.",
    "structures": [
      "un changement majeur"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un changement majeur",
      "changement"
    ],
    "repairPrompt": "Use « changement » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "ethique",
    "french": "éthique",
    "meaning": "ethical, ethics",
    "category": "Society",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble éthique à première vue.",
    "translation": "This choice seems ethical at first glance.",
    "structures": [
      "une question éthique"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "society",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une question éthique",
      "éthique"
    ],
    "repairPrompt": "Use « éthique » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sans-critique",
    "french": "sans critique",
    "meaning": "without criticism",
    "category": "TCF Expressions",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Sans critique, elle a mieux compris la situation.",
    "translation": "Without criticism, she understood the situation better.",
    "structures": [
      "accepter sans critique"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "accepter sans critique",
      "sans critique"
    ],
    "repairPrompt": "Use « sans critique » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-abonner",
    "french": "s’abonner",
    "meaning": "to subscribe",
    "category": "Technology",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Avec un peu de pratique, elle apprend à s’abonner.",
    "translation": "She is learning to subscribe with more confidence.",
    "structures": [
      "s’abonner à + service"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "technology",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "s’abonner à + service",
      "s’abonner"
    ],
    "repairPrompt": "Use « s’abonner » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "documentaire",
    "french": "documentaire",
    "meaning": "documentary",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble documentaire à première vue.",
    "translation": "This choice seems documentary at first glance.",
    "structures": [
      "regarder un documentaire"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "regarder un documentaire",
      "documentaire"
    ],
    "repairPrompt": "Use « documentaire » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tournage",
    "french": "tournage",
    "meaning": "filming, shooting",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La tournage revient souvent pendant la réunion.",
    "translation": "The topic of filming often comes up during the meeting.",
    "structures": [
      "un lieu de tournage"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un lieu de tournage",
      "tournage"
    ],
    "repairPrompt": "Use « tournage » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "tourner",
    "french": "tourner",
    "meaning": "to shoot a film",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le tourner revient souvent pendant la réunion.",
    "translation": "The topic of shoot a film often comes up during the meeting.",
    "structures": [
      "tourner un film"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "tourner un film",
      "tourner"
    ],
    "repairPrompt": "Use « tourner » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "theatre",
    "french": "théâtre",
    "meaning": "theatre",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le théâtre revient souvent pendant la réunion.",
    "translation": "The topic of theatre often comes up during the meeting.",
    "structures": [
      "aller au théâtre"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "aller au théâtre",
      "théâtre"
    ],
    "repairPrompt": "Use « théâtre » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "intrigue",
    "french": "intrigue",
    "meaning": "plot",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble intrigue à première vue.",
    "translation": "This choice seems plot at first glance.",
    "structures": [
      "l'intrigue d'un film"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "l'intrigue d'un film",
      "intrigue"
    ],
    "repairPrompt": "Use « intrigue » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "vedette",
    "french": "vedette",
    "meaning": "star, celebrity",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La vedette revient souvent pendant la réunion.",
    "translation": "The topic of star often comes up during the meeting.",
    "structures": [
      "une vedette de cinéma"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une vedette de cinéma",
      "vedette"
    ],
    "repairPrompt": "Use « vedette » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "eclairage",
    "french": "éclairage",
    "meaning": "lighting",
    "category": "Media",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le éclairage revient souvent pendant la réunion.",
    "translation": "The topic of lighting often comes up during the meeting.",
    "structures": [
      "un bon éclairage"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "media",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un bon éclairage",
      "éclairage"
    ],
    "repairPrompt": "Use « éclairage » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "colere",
    "french": "colère",
    "meaning": "anger",
    "category": "Emotion",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La colère revient souvent pendant la réunion.",
    "translation": "The topic of anger often comes up during the meeting.",
    "structures": [
      "être en colère"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "emotion",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "être en colère",
      "colère"
    ],
    "repairPrompt": "Use « colère » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "mamie",
    "french": "mamie",
    "meaning": "grandma",
    "category": "Family",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La mamie revient souvent pendant la réunion.",
    "translation": "The topic of grandma often comes up during the meeting.",
    "structures": [
      "ma mamie"
    ],
    "tcfPriority": "Low",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "family",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "ma mamie",
      "mamie"
    ],
    "repairPrompt": "Use « mamie » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "attraper",
    "french": "attraper",
    "meaning": "to catch",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à attraper avec plus de confiance.",
    "translation": "She is learning to catch with more confidence.",
    "structures": [
      "attraper + objet / maladie"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "attraper + objet / maladie",
      "attraper"
    ],
    "repairPrompt": "Use « attraper » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "meteo",
    "french": "météo",
    "meaning": "weather forecast",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le météo revient souvent pendant la réunion.",
    "translation": "The topic of weather forecast often comes up during the meeting.",
    "structures": [
      "regarder la météo"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "regarder la météo",
      "météo"
    ],
    "repairPrompt": "Use « météo » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "invite",
    "french": "invité / invitée",
    "meaning": "guest",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble invité à première vue.",
    "translation": "This choice seems guest at first glance.",
    "structures": [
      "un invité à + événement"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un invité à + événement",
      "invité / invitée"
    ],
    "repairPrompt": "Use « invité / invitée » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "fin",
    "french": "la fin",
    "meaning": "the end",
    "category": "Everyday Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "La fin peut jouer un rôle important dans cette situation.",
    "translation": "The end can play an important role in this situation.",
    "structures": [
      "à la fin de + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "everyday-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "à la fin de + nom",
      "la fin"
    ],
    "repairPrompt": "Use « la fin » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etouffant",
    "french": "étouffant / étouffante",
    "meaning": "suffocating, stifling",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble étouffant à première vue.",
    "translation": "This choice seems suffocating at first glance.",
    "structures": [
      "une atmosphère étouffante"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une atmosphère étouffante",
      "étouffant / étouffante"
    ],
    "repairPrompt": "Use « étouffant / étouffante » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inquietant",
    "french": "inquiétant / inquiétante",
    "meaning": "worrying, concerning",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble inquiétant à première vue.",
    "translation": "This choice seems worrying at first glance.",
    "structures": [
      "une situation inquiétante"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une situation inquiétante",
      "inquiétant / inquiétante"
    ],
    "repairPrompt": "Use « inquiétant / inquiétante » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "meprisant",
    "french": "méprisant / méprisante",
    "meaning": "contemptuous",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble méprisant à première vue.",
    "translation": "This choice seems contemptuous at first glance.",
    "structures": [
      "un ton méprisant"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un ton méprisant",
      "méprisant / méprisante"
    ],
    "repairPrompt": "Use « méprisant / méprisante » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "autoritaire",
    "french": "autoritaire",
    "meaning": "authoritarian",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble autoritaire à première vue.",
    "translation": "This choice seems authoritarian at first glance.",
    "structures": [
      "une attitude autoritaire"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une attitude autoritaire",
      "autoritaire"
    ],
    "repairPrompt": "Use « autoritaire » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "drame",
    "french": "drame",
    "meaning": "drama",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le drame revient souvent pendant la réunion.",
    "translation": "The topic of drama often comes up during the meeting.",
    "structures": [
      "un drame familial"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un drame familial",
      "drame"
    ],
    "repairPrompt": "Use « drame » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "nervosite",
    "french": "nervosité",
    "meaning": "nervousness",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble nervosité à première vue.",
    "translation": "This choice seems nervousness at first glance.",
    "structures": [
      "montrer de la nervosité"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "montrer de la nervosité",
      "nervosité"
    ],
    "repairPrompt": "Use « nervosité » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "interrogatoire",
    "french": "interrogatoire",
    "meaning": "interrogation",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le interrogatoire revient souvent pendant la réunion.",
    "translation": "The topic of interrogation often comes up during the meeting.",
    "structures": [
      "subir un interrogatoire"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "subir un interrogatoire",
      "interrogatoire"
    ],
    "repairPrompt": "Use « interrogatoire » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "grimper",
    "french": "grimper",
    "meaning": "to climb",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le grimper revient souvent pendant la réunion.",
    "translation": "The topic of climb often comes up during the meeting.",
    "structures": [
      "grimper sur + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "grimper sur + nom",
      "grimper"
    ],
    "repairPrompt": "Use « grimper » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "aussitot-apres",
    "french": "aussitôt après",
    "meaning": "immediately after",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "L’aussitôt après revient souvent pendant la réunion.",
    "translation": "The topic of immediately after often comes up during the meeting.",
    "structures": [
      "aussitôt après + nom"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "aussitôt après + nom",
      "aussitôt après"
    ],
    "repairPrompt": "Use « aussitôt après » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "logement",
    "french": "logement",
    "meaning": "accommodation, housing",
    "category": "Story Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le logement revient souvent pendant la réunion.",
    "translation": "The topic of accommodation often comes up during the meeting.",
    "structures": [
      "trouver un logement"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "trouver un logement",
      "logement"
    ],
    "repairPrompt": "Use « logement » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "personnel",
    "french": "personnel",
    "meaning": "staff",
    "category": "Work",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble personnel à première vue.",
    "translation": "This choice seems staff at first glance.",
    "structures": [
      "le personnel de + lieu"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "work",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "le personnel de + lieu",
      "personnel"
    ],
    "repairPrompt": "Use « personnel » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-inquieter",
    "french": "s’inquiéter",
    "meaning": "to worry",
    "category": "Story Vocabulary",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Avec un peu de pratique, elle apprend à s’inquiéter.",
    "translation": "She is learning to worry with more confidence.",
    "structures": [
      "s’inquiéter pour + personne"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "s’inquiéter pour + personne",
      "s’inquiéter"
    ],
    "repairPrompt": "Use « s’inquiéter » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inquiet",
    "french": "inquiet / inquiète",
    "meaning": "worried",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble inquiet à première vue.",
    "translation": "This choice seems worried at first glance.",
    "structures": [
      "être inquiet pour + personne"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "être inquiet pour + personne",
      "inquiet / inquiète"
    ],
    "repairPrompt": "Use « inquiet / inquiète » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "attaquer",
    "french": "attaquer",
    "meaning": "to attack",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’attaquer revient souvent pendant la réunion.",
    "translation": "The topic of attack often comes up during the meeting.",
    "structures": [
      "attaquer + personne / problème"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "attaquer + personne / problème",
      "attaquer"
    ],
    "repairPrompt": "Use « attaquer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "crier",
    "french": "crier",
    "meaning": "to shout, scream",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le crier revient souvent pendant la réunion.",
    "translation": "The topic of shout often comes up during the meeting.",
    "structures": [
      "crier de + émotion"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "crier de + émotion",
      "crier"
    ],
    "repairPrompt": "Use « crier » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pleurer",
    "french": "pleurer",
    "meaning": "to cry",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le pleurer revient souvent pendant la réunion.",
    "translation": "The topic of cry often comes up during the meeting.",
    "structures": [
      "pleurer de + émotion"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "pleurer de + émotion",
      "pleurer"
    ],
    "repairPrompt": "Use « pleurer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "sain-et-sauf",
    "french": "sain et sauf",
    "meaning": "safe and sound",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le sain et sauf revient souvent pendant la réunion.",
    "translation": "The topic of safe and sound often comes up during the meeting.",
    "structures": [
      "être sain et sauf"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "être sain et sauf",
      "sain et sauf"
    ],
    "repairPrompt": "Use « sain et sauf » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "etre-en-securite",
    "french": "être en sécurité",
    "meaning": "to be safe",
    "category": "Story Vocabulary",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Dans ce quartier, chacun veut être en sécurité.",
    "translation": "She is learning to be safe with more confidence.",
    "structures": [
      "être en sécurité"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "être en sécurité",
      "être en sécurité"
    ],
    "repairPrompt": "Use « être en sécurité » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "gardien-de-zoo",
    "french": "gardien de zoo",
    "meaning": "zookeeper",
    "category": "Story Vocabulary",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Le gardien de zoo revient souvent pendant la réunion.",
    "translation": "The topic of zookeeper often comes up during the meeting.",
    "structures": [
      "un gardien de zoo"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 3",
    "tags": [
      "notion-import",
      "tcf",
      "story-vocabulary",
      "structure",
      "manual-batch",
      "batch-3",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un gardien de zoo",
      "gardien de zoo"
    ],
    "repairPrompt": "Use « gardien de zoo » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "retenir",
    "french": "retenir",
    "meaning": "to retain, remember",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le retenir revient souvent pendant la réunion.",
    "translation": "The topic of retain often comes up during the meeting.",
    "structures": [
      "retenir + information"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "retenir + information",
      "retenir"
    ],
    "repairPrompt": "Use « retenir » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "dependre",
    "french": "dépendre",
    "meaning": "to depend",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La dépendre revient souvent pendant la réunion.",
    "translation": "The topic of depend often comes up during the meeting.",
    "structures": [
      "dépendre de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "dépendre de + nom",
      "dépendre"
    ],
    "repairPrompt": "Use « dépendre » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "emmener",
    "french": "emmener",
    "meaning": "to take a person",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à emmener avec plus de confiance.",
    "translation": "She is learning to take a person with more confidence.",
    "structures": [
      "emmener + personne à + lieu"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "emmener + personne à + lieu",
      "emmener"
    ],
    "repairPrompt": "Use « emmener » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "reculer",
    "french": "reculer",
    "meaning": "to step back",
    "category": "Verb",
    "level": "B1",
    "partOfSpeech": "verb",
    "example": "Elle apprend à reculer avec plus de confiance.",
    "translation": "She is learning to step back with more confidence.",
    "structures": [
      "reculer devant + obstacle"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "verb",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "reculer devant + obstacle",
      "reculer"
    ],
    "repairPrompt": "Use « reculer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "marquer",
    "french": "marquer",
    "meaning": "to mark, highlight",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le marquer revient souvent pendant la réunion.",
    "translation": "The topic of mark often comes up during the meeting.",
    "structures": [
      "marquer + différence / point"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "marquer + différence / point",
      "marquer"
    ],
    "repairPrompt": "Use « marquer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "derouler",
    "french": "dérouler",
    "meaning": "to unfold, take place",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le dérouler revient souvent pendant la réunion.",
    "translation": "The topic of unfold often comes up during the meeting.",
    "structures": [
      "se dérouler à + lieu"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "se dérouler à + lieu",
      "dérouler"
    ],
    "repairPrompt": "Use « dérouler » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "manchot",
    "french": "manchot",
    "meaning": "penguin",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Le manchot revient souvent pendant la réunion.",
    "translation": "The topic of penguin often comes up during the meeting.",
    "structures": [
      "un manchot"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un manchot",
      "manchot"
    ],
    "repairPrompt": "Use « manchot » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "oiseau",
    "french": "oiseau / oiseaux",
    "meaning": "bird, birds",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "expression",
    "example": "Ce choix semble oiseau à première vue.",
    "translation": "This choice seems bird at first glance.",
    "structures": [
      "un oiseau / des oiseaux"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un oiseau / des oiseaux",
      "oiseau / oiseaux"
    ],
    "repairPrompt": "Use « oiseau / oiseaux » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "emigrer",
    "french": "émigrer",
    "meaning": "to migrate",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’émigrer revient souvent pendant la réunion.",
    "translation": "The topic of migrate often comes up during the meeting.",
    "structures": [
      "émigrer vers + pays"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "émigrer vers + pays",
      "émigrer"
    ],
    "repairPrompt": "Use « émigrer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "diriger",
    "french": "diriger",
    "meaning": "to direct",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Le diriger revient souvent pendant la réunion.",
    "translation": "The topic of direct often comes up during the meeting.",
    "structures": [
      "diriger + équipe / projet"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "diriger + équipe / projet",
      "diriger"
    ],
    "repairPrompt": "Use « diriger » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "s-accoupler",
    "french": "s’accoupler",
    "meaning": "to mate",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Avec un peu de pratique, elle apprend à s’accoupler.",
    "translation": "She is learning to mate with more confidence.",
    "structures": [
      "s’accoupler avec + animal"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "s’accoupler avec + animal",
      "s’accoupler"
    ],
    "repairPrompt": "Use « s’accoupler » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "femelle",
    "french": "femelle",
    "meaning": "female",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "Ce choix semble femelle à première vue.",
    "translation": "This choice seems female at first glance.",
    "structures": [
      "une femelle"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une femelle",
      "femelle"
    ],
    "repairPrompt": "Use « femelle » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "incubatrice",
    "french": "incubatrice",
    "meaning": "incubator",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’incubatrice revient souvent pendant la réunion.",
    "translation": "The topic of incubator often comes up during the meeting.",
    "structures": [
      "une incubatrice"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une incubatrice",
      "incubatrice"
    ],
    "repairPrompt": "Use « incubatrice » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "poudrerie",
    "french": "poudrerie",
    "meaning": "blowing snow",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La poudrerie revient souvent pendant la réunion.",
    "translation": "The topic of blowing snow often comes up during the meeting.",
    "structures": [
      "une forte poudrerie"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "une forte poudrerie",
      "poudrerie"
    ],
    "repairPrompt": "Use « poudrerie » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "faible",
    "french": "faible",
    "meaning": "weak",
    "category": "Adjective",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Ce choix semble faible à première vue.",
    "translation": "This choice seems weak at first glance.",
    "structures": [
      "un niveau faible"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "adjective",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "un niveau faible",
      "faible"
    ],
    "repairPrompt": "Use « faible » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "rechauffer",
    "french": "réchauffer",
    "meaning": "to warm up",
    "category": "Environment",
    "level": "B2",
    "partOfSpeech": "word",
    "example": "Le réchauffer revient souvent pendant la réunion.",
    "translation": "The topic of warm up often comes up during the meeting.",
    "structures": [
      "réchauffer + atmosphère / plat"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "environment",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "réchauffer + atmosphère / plat",
      "réchauffer"
    ],
    "repairPrompt": "Use « réchauffer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "force",
    "french": "force",
    "meaning": "strength",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "La force revient souvent pendant la réunion.",
    "translation": "The topic of strength often comes up during the meeting.",
    "structures": [
      "la force de + nom"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "la force de + nom",
      "force"
    ],
    "repairPrompt": "Use « force » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "milieu",
    "french": "milieu",
    "meaning": "environment, setting, middle",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "Ce choix semble milieu à première vue.",
    "translation": "This choice seems environment at first glance.",
    "structures": [
      "dans un milieu + adjectif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "dans un milieu + adjectif",
      "milieu"
    ],
    "repairPrompt": "Use « milieu » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "pondre",
    "french": "pondre",
    "meaning": "to lay eggs",
    "category": "Nature",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "La pondre revient souvent pendant la réunion.",
    "translation": "The topic of lay eggs often comes up during the meeting.",
    "structures": [
      "pondre des œufs"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "nature",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "pondre des œufs",
      "pondre"
    ],
    "repairPrompt": "Use « pondre » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "inventer",
    "french": "inventer",
    "meaning": "to invent",
    "category": "Verb",
    "level": "B2",
    "partOfSpeech": "verb",
    "example": "Elle apprend à inventer avec plus de confiance.",
    "translation": "She is learning to invent with more confidence.",
    "structures": [
      "inventer + solution"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "verb",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "inventer + solution",
      "inventer"
    ],
    "repairPrompt": "Use « inventer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "exposer",
    "french": "exposer",
    "meaning": "to expose",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’exposer revient souvent pendant la réunion.",
    "translation": "The topic of expose often comes up during the meeting.",
    "structures": [
      "exposer + problème / personne à + risque"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "exposer + problème / personne à + risque",
      "exposer"
    ],
    "repairPrompt": "Use « exposer » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "empecher",
    "french": "empêcher",
    "meaning": "to prevent",
    "category": "TCF Expressions",
    "level": "B2",
    "partOfSpeech": "expression",
    "example": "L’empêcher revient souvent pendant la réunion.",
    "translation": "The topic of prevent often comes up during the meeting.",
    "structures": [
      "empêcher + personne de + infinitif"
    ],
    "tcfPriority": "High",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "high-priority",
      "tcf-expressions",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "empêcher + personne de + infinitif",
      "empêcher"
    ],
    "repairPrompt": "Use « empêcher » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "arranger",
    "french": "arranger",
    "meaning": "to arrange, tidy up",
    "category": "Household",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’arranger revient souvent pendant la réunion.",
    "translation": "The topic of arrange often comes up during the meeting.",
    "structures": [
      "arranger + pièce / situation"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "household",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "arranger + pièce / situation",
      "arranger"
    ],
    "repairPrompt": "Use « arranger » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  },
  {
    "id": "arroser",
    "french": "arroser",
    "meaning": "to water plants",
    "category": "Household",
    "level": "B1",
    "partOfSpeech": "word",
    "example": "L’arroser revient souvent pendant la réunion.",
    "translation": "The topic of water plants often comes up during the meeting.",
    "structures": [
      "arroser + plantes"
    ],
    "tcfPriority": "Medium",
    "status": "New",
    "dateAdded": iso(-24),
    "source": "Manual TCF vocabulary batch 4",
    "tags": [
      "notion-import",
      "tcf",
      "household",
      "structure",
      "manual-batch",
      "batch-4",
      "ladder",
      "word-family"
    ],
    "synonymLadder": [],
    "wordFamily": [
      "arroser + plantes",
      "arroser"
    ],
    "repairPrompt": "Use « arroser » in one TCF-style sentence, then say it again with a synonym.",
    "dueAt": iso(0),
    "successStreak": 0,
    "lapses": 0,
    "meaningConfirmed": true
  }
];

seedVocabulary.push(...createExpandedVocabulary(iso, seedVocabulary, 1500));

export const seedAttempts: ReviewAttempt[] = [
  { id: "a1", wordId: "susciter", mode: "Flashcards", direction: "French -> English", result: "correct", rating: "Easy", createdAt: iso(-1), responseTimeMs: 2600 },
  { id: "a2", wordId: "renforcer", mode: "Flashcards", direction: "French -> English", result: "correct", rating: "Good", createdAt: iso(-1), responseTimeMs: 3100 },
  { id: "a3", wordId: "nuancer", mode: "Flashcards", direction: "English -> French", result: "incorrect", rating: "Again", createdAt: iso(-2), responseTimeMs: 7200 },
  { id: "a4", wordId: "parvenir-a", mode: "Typing", direction: "French -> English", result: "incorrect", rating: "Again", createdAt: iso(-2), responseTimeMs: 9300 },
  { id: "a5", wordId: "contester", mode: "Multiple Choice", direction: "French -> English", result: "correct", rating: "Good", createdAt: iso(-3), responseTimeMs: 2400 },
  { id: "a6", wordId: "attenuer", mode: "Flashcards", direction: "French -> English", result: "incorrect", rating: "Hard", createdAt: iso(-4), responseTimeMs: 6100 },
  { id: "a7", wordId: "contribuer-a", mode: "Flashcards", direction: "French -> English", result: "correct", rating: "Good", createdAt: iso(-4), responseTimeMs: 3800 },
  { id: "a8", wordId: "bouleverser", mode: "Listening", direction: "French -> English", result: "incorrect", rating: "Hard", createdAt: iso(-5), responseTimeMs: 8200 }
];

export const seedImports: ImportBatch[] = [
  {
    id: "notion-vocabulary-001",
    source: "Notion vocabulary database",
    uploadDate: iso(-24),
    acceptedRows: 649,
    skippedDuplicates: 0,
    invalidRows: 0
  },
  {
    id: "manual-tcf-batch-001",
    source: "Manual TCF vocabulary batch",
    uploadDate: iso(0),
    acceptedRows: 42,
    skippedDuplicates: 0,
    invalidRows: 0
  },
  {
    id: "manual-tcf-batch-002",
    source: "Manual TCF vocabulary batch 2",
    uploadDate: iso(0),
    acceptedRows: 47,
    skippedDuplicates: 5,
    invalidRows: 0
  },
  {
    id: "manual-tcf-batch-003",
    source: "Manual TCF vocabulary batch 3",
    uploadDate: iso(0),
    acceptedRows: 118,
    skippedDuplicates: 59,
    invalidRows: 0
  },
  {
    id: "manual-tcf-batch-004",
    source: "Manual TCF vocabulary batch 4",
    uploadDate: iso(0),
    acceptedRows: 24,
    skippedDuplicates: 134,
    invalidRows: 0
  },
  {
    id: "tcf-expansion-curriculum-001",
    source: "TCF expansion curriculum",
    uploadDate: iso(0),
    acceptedRows: 620,
    skippedDuplicates: 0,
    invalidRows: 0
  }
];
