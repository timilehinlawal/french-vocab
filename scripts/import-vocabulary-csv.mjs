import fs from "node:fs";

const inputPath = "/Users/timlawal/Downloads/french_vocab_notion_database.csv";
const outputPath = "src/data/seedVocabulary.ts";

const compactVocabulary = (items) =>
  items.map(([french, meaning, category = "General Vocabulary", priority = "Medium", structure = french]) => ({
    french,
    meaning,
    example: `Il est utile de savoir employer « ${french} » dans un contexte naturel.`,
    translation: `It is useful to know how to use "${french}" in a natural context.`,
    category,
    priority,
    structure,
    synonymLadder: [],
    wordFamily: [structure, french].filter(Boolean)
  }));

const extraVocabulary = [
  {
    french: "soucieux / soucieuse",
    meaning: "concerned, anxious about",
    example: "Je suis soucieux de l’avenir de l’environnement.",
    translation: "I am concerned about the future of the environment.",
    category: "Adjective",
    priority: "High",
    structure: "être soucieux de + nom",
    synonymLadder: ["préoccupé", "inquiet", "attentif à"],
    wordFamily: ["un souci", "se soucier de", "préoccupant"]
  },
  {
    french: "effectuer",
    meaning: "to carry out",
    example: "L’entreprise a effectué plusieurs changements.",
    translation: "The company carried out several changes.",
    category: "Verb",
    priority: "High",
    structure: "effectuer + tâche / changement",
    synonymLadder: ["réaliser", "accomplir", "mener"],
    wordFamily: ["un effet", "effectif", "effectivement"]
  },
  {
    french: "savon",
    meaning: "soap",
    example: "J’utilise un savon naturel.",
    translation: "I use a natural soap.",
    category: "General Vocabulary",
    priority: "Medium",
    structure: "un savon naturel",
    synonymLadder: ["produit lavant", "nettoyant"],
    wordFamily: ["savonner", "savonneux"]
  },
  {
    french: "alun",
    meaning: "alum",
    example: "L’alun est utilisé dans certains déodorants.",
    translation: "Alum is used in some deodorants.",
    category: "General Vocabulary",
    priority: "Medium",
    structure: "pierre d’alun",
    synonymLadder: ["pierre d’alun", "sel minéral"],
    wordFamily: ["minéral", "déodorant naturel"]
  },
  {
    french: "pierre",
    meaning: "stone",
    example: "Cette maison est construite en pierre.",
    translation: "This house is built from stone.",
    category: "General Vocabulary",
    priority: "Medium",
    structure: "en pierre",
    synonymLadder: ["roche", "caillou", "matériau"],
    wordFamily: ["pierreux", "une carrière", "un rocher"]
  },
  {
    french: "hebdomadaire",
    meaning: "weekly",
    example: "Nous avons une réunion hebdomadaire.",
    translation: "We have a weekly meeting.",
    category: "Adjective",
    priority: "High",
    structure: "réunion / rythme hebdomadaire",
    synonymLadder: ["chaque semaine", "par semaine", "toutes les semaines"],
    wordFamily: ["une semaine", "hebdo", "mensuel"]
  },
  {
    french: "couche d’ozone",
    meaning: "ozone layer",
    example: "La couche d’ozone protège la Terre.",
    translation: "The ozone layer protects the Earth.",
    category: "Environment",
    priority: "High",
    structure: "la couche d’ozone protège + nom",
    synonymLadder: ["protection atmosphérique", "couche protectrice"],
    wordFamily: ["l’ozone", "atmosphérique", "protéger"]
  },
  {
    french: "reconstitution",
    meaning: "reconstruction, restoration",
    example: "La reconstitution du bâtiment a pris plusieurs années.",
    translation: "The reconstruction of the building took several years.",
    category: "Noun",
    priority: "High",
    structure: "la reconstitution de + nom",
    synonymLadder: ["reconstruction", "restauration", "rétablissement"],
    wordFamily: ["reconstituer", "reconstruire", "restaurer"]
  },
  {
    french: "tenir à préciser que",
    meaning: "I would like to clarify that",
    example: "Je tiens à préciser que je suis d’accord.",
    translation: "I would like to clarify that I agree.",
    category: "TCF Expressions",
    priority: "High",
    structure: "je tiens à préciser que + phrase",
    synonymLadder: ["je souhaite préciser que", "il convient de préciser que", "j’aimerais souligner que"],
    wordFamily: ["préciser", "une précision", "clair"]
  },
  {
    french: "tenir à insister sur le fait que",
    meaning: "to insist on the fact that",
    example: "Je tiens à insister sur le fait que cette mesure est importante.",
    translation: "I would like to insist on the fact that this measure is important.",
    category: "TCF Expressions",
    priority: "High",
    structure: "je tiens à insister sur le fait que + phrase",
    synonymLadder: ["je tiens à souligner que", "il faut insister sur le fait que", "il est important de rappeler que"],
    wordFamily: ["insister", "une insistance", "le fait que"]
  },
  {
    french: "tenter",
    meaning: "to attempt",
    example: "Il tente de résoudre le problème.",
    translation: "He is attempting to solve the problem.",
    category: "Verb",
    priority: "High",
    structure: "tenter de + infinitif",
    synonymLadder: ["essayer", "chercher à", "s’efforcer de"],
    wordFamily: ["une tentative", "tentant", "tenter de"]
  },
  {
    french: "favoriser",
    meaning: "to promote, encourage",
    example: "Cette réforme favorise l’innovation.",
    translation: "This reform promotes innovation.",
    category: "Verb",
    priority: "High",
    structure: "favoriser + nom",
    synonymLadder: ["encourager", "promouvoir", "soutenir"],
    wordFamily: ["favorable", "la faveur", "défavoriser"]
  },
  {
    french: "tenter de favoriser",
    meaning: "to try to encourage",
    example: "Le gouvernement tente de favoriser l’emploi.",
    translation: "The government is trying to encourage employment.",
    category: "TCF Expressions",
    priority: "High",
    structure: "tenter de favoriser + nom",
    synonymLadder: ["essayer d’encourager", "chercher à promouvoir", "s’efforcer de soutenir"],
    wordFamily: ["tenter", "favoriser", "une tentative"]
  },
  {
    french: "embaucher",
    meaning: "to hire",
    example: "L’entreprise va embaucher dix personnes.",
    translation: "The company will hire ten people.",
    category: "Work",
    priority: "High",
    structure: "embaucher + personne",
    synonymLadder: ["recruter", "engager", "prendre en poste"],
    wordFamily: ["une embauche", "un recrutement", "un employé"]
  },
  {
    french: "démarche",
    meaning: "process, approach, step",
    example: "Cette démarche est efficace.",
    translation: "This approach is effective.",
    category: "Noun",
    priority: "High",
    structure: "une démarche + adjectif",
    synonymLadder: ["approche", "procédure", "initiative"],
    wordFamily: ["démarcher", "une approche", "un processus"]
  },
  {
    french: "filière",
    meaning: "sector, field",
    example: "Il travaille dans la filière technologique.",
    translation: "He works in the technology sector.",
    category: "Work",
    priority: "High",
    structure: "la filière + adjectif",
    synonymLadder: ["secteur", "domaine", "branche"],
    wordFamily: ["professionnel", "industriel", "une branche"]
  },
  {
    french: "cohérent",
    meaning: "coherent, consistent",
    example: "Son argument est cohérent.",
    translation: "His argument is coherent.",
    category: "Adjective",
    priority: "High",
    structure: "être cohérent avec + nom",
    synonymLadder: ["logique", "consistant", "harmonieux"],
    wordFamily: ["la cohérence", "cohérent avec", "incohérent"]
  },
  {
    french: "parvenir à nouveau à",
    meaning: "to manage once again to",
    example: "Elle est parvenue à nouveau à réussir.",
    translation: "She managed to succeed again.",
    category: "TCF Expressions",
    priority: "High",
    structure: "parvenir à nouveau à + infinitif",
    synonymLadder: ["réussir encore à", "arriver de nouveau à", "être de nouveau capable de"],
    wordFamily: ["parvenir à", "la réussite", "réussir"]
  },
  {
    french: "se rendre compte de",
    meaning: "to realise",
    example: "Je me suis rendu compte de mon erreur.",
    translation: "I realised my mistake.",
    category: "Verb",
    priority: "High",
    structure: "se rendre compte de + nom",
    synonymLadder: ["réaliser", "prendre conscience de", "constater"],
    wordFamily: ["un constat", "conscient", "la prise de conscience"]
  },
  {
    french: "contraindre",
    meaning: "to constrain, compel",
    example: "Cette règle contraint les entreprises.",
    translation: "This rule constrains companies.",
    category: "Verb",
    priority: "High",
    structure: "contraindre + nom à + infinitif",
    synonymLadder: ["obliger", "forcer", "imposer"],
    wordFamily: ["une contrainte", "contraignant", "être contraint de"]
  },
  {
    french: "restreindre",
    meaning: "to restrict",
    example: "Il faut restreindre les dépenses.",
    translation: "Spending must be restricted.",
    category: "Verb",
    priority: "High",
    structure: "restreindre + nom",
    synonymLadder: ["limiter", "réduire", "resserrer"],
    wordFamily: ["une restriction", "restreint", "restrictif"]
  },
  {
    french: "encadrer",
    meaning: "to regulate, supervise",
    example: "Le gouvernement encadre cette activité.",
    translation: "The government regulates this activity.",
    category: "Verb",
    priority: "High",
    structure: "encadrer + activité / pratique",
    synonymLadder: ["réglementer", "superviser", "contrôler"],
    wordFamily: ["un cadre", "un encadrement", "réglementaire"]
  },
  {
    french: "réaliser",
    meaning: "to achieve, carry out",
    example: "Nous avons réalisé notre objectif.",
    translation: "We achieved our goal.",
    category: "Verb",
    priority: "High",
    structure: "réaliser + objectif / projet",
    synonymLadder: ["accomplir", "effectuer", "mener à bien"],
    wordFamily: ["une réalisation", "réalisable", "irréalisable"]
  },
  {
    french: "ONG",
    meaning: "NGO",
    example: "Cette ONG aide les enfants.",
    translation: "This NGO helps children.",
    category: "Society",
    priority: "High",
    structure: "une ONG + verbe",
    synonymLadder: ["organisation non gouvernementale", "association humanitaire"],
    wordFamily: ["humanitaire", "bénévole", "associatif"]
  },
  {
    french: "alimenter",
    meaning: "to feed, fuel, power",
    example: "Les médias alimentent le débat.",
    translation: "The media fuel the debate.",
    category: "Verb",
    priority: "High",
    structure: "alimenter + débat / système",
    synonymLadder: ["nourrir", "fournir", "attiser"],
    wordFamily: ["une alimentation", "alimentaire", "alimenté par"]
  },
  {
    french: "cliché",
    meaning: "stereotype, cliché",
    example: "C’est un cliché très répandu.",
    translation: "It’s a very common stereotype.",
    category: "Society",
    priority: "High",
    structure: "un cliché répandu",
    synonymLadder: ["stéréotype", "idée reçue", "lieu commun"],
    wordFamily: ["stéréotypé", "caricatural", "répandu"]
  },
  {
    french: "le fait",
    meaning: "the fact",
    example: "Le fait est que la situation est complexe.",
    translation: "The fact is that the situation is complex.",
    category: "TCF Expressions",
    priority: "High",
    structure: "le fait est que + phrase",
    synonymLadder: ["la réalité", "ce qui est certain", "l’élément clé"],
    wordFamily: ["en fait", "du fait de", "le fait que"]
  },
  {
    french: "devenir une évidence",
    meaning: "to become obvious",
    example: "Avec le temps, cela est devenu une évidence.",
    translation: "Over time, it became obvious.",
    category: "TCF Expressions",
    priority: "High",
    structure: "devenir une évidence",
    synonymLadder: ["s’imposer comme évident", "devenir clair", "apparaître évident"],
    wordFamily: ["évident", "une évidence", "évidemment"]
  },
  {
    french: "ne … presque plus",
    meaning: "hardly … anymore",
    example: "Je ne regarde presque plus la télévision.",
    translation: "I hardly watch television anymore.",
    category: "TCF Expressions",
    priority: "High",
    structure: "ne + verbe + presque plus",
    synonymLadder: ["à peine encore", "très rarement désormais", "presque jamais maintenant"],
    wordFamily: ["presque", "ne plus", "rarement"]
  },
  {
    french: "militer",
    meaning: "to campaign, advocate",
    example: "Elle milite pour l’égalité.",
    translation: "She campaigns for equality.",
    category: "Society",
    priority: "High",
    structure: "militer pour / contre + nom",
    synonymLadder: ["faire campagne", "défendre", "plaider pour"],
    wordFamily: ["un militant", "militantisme", "militant"]
  },
  {
    french: "agir dans son coin",
    meaning: "to act alone",
    example: "Il préfère agir dans son coin.",
    translation: "He prefers to act on his own.",
    category: "Everyday Expressions",
    priority: "Medium",
    structure: "agir dans son coin",
    synonymLadder: ["agir seul", "faire les choses de son côté", "travailler isolément"],
    wordFamily: ["agir", "une action", "isolé"]
  },
  {
    french: "estimer que",
    meaning: "to believe that, consider that",
    example: "J’estime que cette décision est juste.",
    translation: "I believe this decision is fair.",
    category: "TCF Expressions",
    priority: "High",
    structure: "estimer que + phrase",
    synonymLadder: ["considérer que", "juger que", "penser que"],
    wordFamily: ["une estimation", "estimable", "surestimer"]
  },
  {
    french: "en effet",
    meaning: "indeed",
    example: "En effet, les résultats sont positifs.",
    translation: "Indeed, the results are positive.",
    category: "Connectors",
    priority: "High",
    structure: "en effet, + phrase",
    synonymLadder: ["effectivement", "de fait", "il est vrai que"],
    wordFamily: ["un effet", "effectivement", "en fait"]
  },
  {
    french: "gonfler",
    meaning: "to inflate, swell",
    example: "Les prix ont gonflé rapidement.",
    translation: "Prices increased rapidly.",
    category: "Verb",
    priority: "Medium",
    structure: "gonfler + nom / les prix gonflent",
    synonymLadder: ["augmenter", "enfler", "grossir"],
    wordFamily: ["gonflé", "un gonflement", "dégonfler"]
  },
  {
    french: "malvoyant",
    meaning: "visually impaired",
    example: "Des aides existent pour les personnes malvoyantes.",
    translation: "Support exists for visually impaired people.",
    category: "Health",
    priority: "Medium",
    structure: "personne malvoyante",
    synonymLadder: ["déficient visuel", "ayant une basse vision"],
    wordFamily: ["la vue", "voyant", "non-voyant"]
  },
  {
    french: "étonner",
    meaning: "to surprise",
    example: "Cette nouvelle m’a étonné.",
    translation: "This news surprised me.",
    category: "Verb",
    priority: "Medium",
    structure: "étonner + personne",
    synonymLadder: ["surprendre", "stupéfier", "déconcerter"],
    wordFamily: ["étonnant", "étonné", "un étonnement"]
  },
  {
    french: "dérailler",
    meaning: "to derail, go off track",
    example: "Le projet a complètement déraillé.",
    translation: "The project completely derailed.",
    category: "Verb",
    priority: "Medium",
    structure: "un projet déraille",
    synonymLadder: ["échouer", "sortir de sa trajectoire", "tourner mal"],
    wordFamily: ["un rail", "un déraillement", "déraillé"]
  },
  {
    french: "exiger",
    meaning: "to require, demand",
    example: "Cette tâche exige beaucoup d’efforts.",
    translation: "This task requires a lot of effort.",
    category: "Verb",
    priority: "High",
    structure: "exiger + nom / que + subjonctif",
    synonymLadder: ["demander", "nécessiter", "requérir"],
    wordFamily: ["une exigence", "exigeant", "exigible"]
  },
  {
    french: "pouetter",
    meaning: "to chirp, tweet",
    example: "Les oiseaux pouettent dans les arbres.",
    translation: "Birds chirp in the trees.",
    category: "Verb",
    priority: "Low",
    structure: "les oiseaux pouettent",
    synonymLadder: ["piailler", "gazouiller", "chanter"],
    wordFamily: ["un cri", "un oiseau", "un gazouillis"]
  },
  {
    french: "morceau",
    meaning: "piece, portion",
    example: "J’ai mangé un morceau de gâteau.",
    translation: "I ate a piece of cake.",
    category: "General Vocabulary",
    priority: "Medium",
    structure: "un morceau de + nom",
    synonymLadder: ["pièce", "part", "portion"],
    wordFamily: ["morceler", "un fragment", "une part"]
  },
  {
    french: "tousser",
    meaning: "to cough",
    example: "Il tousse depuis ce matin.",
    translation: "He has been coughing since this morning.",
    category: "Health",
    priority: "Medium",
    structure: "tousser depuis + moment",
    synonymLadder: ["avoir une toux", "toussoter"],
    wordFamily: ["une toux", "toussoter", "tousseur"]
  },
  {
    french: "licencier",
    meaning: "to dismiss, lay off",
    example: "L’entreprise a licencié plusieurs employés.",
    translation: "The company laid off several employees.",
    category: "Work",
    priority: "High",
    structure: "licencier + employé",
    synonymLadder: ["renvoyer", "congédier", "mettre à pied"],
    wordFamily: ["un licenciement", "licencié", "un employé"]
  }
];

const nextVocabulary = [
  {
    french: "surgir",
    meaning: "to arise, emerge",
    example: "Un problème peut surgir au dernier moment.",
    translation: "A problem can arise at the last minute.",
    category: "Verb",
    priority: "High",
    structure: "surgir + complément de temps / lieu",
    synonymLadder: ["apparaître", "émerger", "se présenter"],
    wordFamily: ["un surgissement", "soudain", "l'émergence"]
  },
  {
    french: "subir",
    meaning: "to undergo, suffer",
    example: "Les habitants subissent les effets de la pollution.",
    translation: "Residents suffer the effects of pollution.",
    category: "Verb",
    priority: "High",
    structure: "subir + conséquences / effets",
    synonymLadder: ["endurer", "supporter", "être soumis à"],
    wordFamily: ["subi", "un préjudice", "la souffrance"]
  },
  {
    french: "rapprocher",
    meaning: "to bring together",
    example: "Cette initiative rapproche les générations.",
    translation: "This initiative brings generations together.",
    category: "Verb",
    priority: "High",
    structure: "rapprocher + deux groupes",
    synonymLadder: ["réunir", "connecter", "créer des liens"],
    wordFamily: ["proche", "un rapprochement", "se rapprocher"]
  },
  {
    french: "semer",
    meaning: "to sow",
    example: "Il faut semer les graines au printemps.",
    translation: "The seeds must be sown in spring.",
    category: "Nature",
    priority: "Medium",
    structure: "semer + graines / doute",
    synonymLadder: ["planter", "disperser", "répandre"],
    wordFamily: ["une semence", "un semis", "semer le doute"]
  },
  {
    french: "fermer",
    meaning: "to close",
    example: "N'oublie pas de fermer la porte.",
    translation: "Do not forget to close the door.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "fermer + objet / lieu",
    synonymLadder: ["clore", "verrouiller", "mettre fin à"],
    wordFamily: ["la fermeture", "fermé", "refermer"]
  },
  {
    french: "accroître",
    meaning: "to increase",
    example: "Cette mesure peut accroître la confiance du public.",
    translation: "This measure can increase public trust.",
    category: "TCF Expressions",
    priority: "High",
    structure: "accroître + nom abstrait",
    synonymLadder: ["augmenter", "renforcer", "amplifier"],
    wordFamily: ["un accroissement", "croître", "la croissance"]
  },
  {
    french: "creuser",
    meaning: "to dig",
    example: "Les inégalités continuent de se creuser.",
    translation: "Inequalities continue to deepen.",
    category: "Verb",
    priority: "High",
    structure: "creuser + trou / écart",
    synonymLadder: ["approfondir", "excaver", "aggraver"],
    wordFamily: ["un creux", "creusé", "se creuser"]
  },
  {
    french: "écart",
    meaning: "gap, difference",
    example: "L'écart entre les deux résultats est important.",
    translation: "The gap between the two results is significant.",
    category: "TCF Expressions",
    priority: "High",
    structure: "l'écart entre + deux éléments",
    synonymLadder: ["différence", "distance", "décalage"],
    wordFamily: ["écarter", "s'écarter", "un écartement"]
  },
  {
    french: "éclater",
    meaning: "to burst",
    example: "Une crise peut éclater sans prévenir.",
    translation: "A crisis can break out without warning.",
    category: "Verb",
    priority: "High",
    structure: "une crise / un conflit éclate",
    synonymLadder: ["exploser", "se déclencher", "jaillir"],
    wordFamily: ["un éclat", "éclaté", "l'éclatement"]
  },
  {
    french: "écarter",
    meaning: "to spread apart, discard",
    example: "Il faut écarter cette hypothèse.",
    translation: "This hypothesis must be ruled out.",
    category: "TCF Expressions",
    priority: "High",
    structure: "écarter + hypothèse / risque",
    synonymLadder: ["rejeter", "exclure", "mettre de côté"],
    wordFamily: ["écart", "s'écarter", "écarté"]
  },
  {
    french: "tartiner",
    meaning: "to spread (butter, jam)",
    example: "Elle tartine du beurre sur le pain.",
    translation: "She spreads butter on the bread.",
    category: "Food",
    priority: "Medium",
    structure: "tartiner + aliment sur + support",
    synonymLadder: ["étaler", "recouvrir", "mettre une couche"],
    wordFamily: ["une tartine", "le beurre", "la confiture"]
  },
  {
    french: "répandre",
    meaning: "to spread",
    example: "Les réseaux sociaux peuvent répandre une rumeur rapidement.",
    translation: "Social media can spread a rumor quickly.",
    category: "TCF Expressions",
    priority: "High",
    structure: "répandre + information / idée",
    synonymLadder: ["diffuser", "propager", "disséminer"],
    wordFamily: ["répandu", "la propagation", "se répandre"]
  },
  {
    french: "bourrer",
    meaning: "to cram, stuff",
    example: "Il a bourré son sac de vêtements.",
    translation: "He stuffed his bag with clothes.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "bourrer + objet de + contenu",
    synonymLadder: ["remplir", "entasser", "charger"],
    wordFamily: ["bourré", "le bourrage", "rembourrer"]
  },
  {
    french: "fourrer",
    meaning: "to stuff, shove",
    example: "Elle a fourré les papiers dans un tiroir.",
    translation: "She shoved the papers into a drawer.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "fourrer + objet dans + lieu",
    synonymLadder: ["mettre", "glisser", "enfoncer"],
    wordFamily: ["fourré", "une fourrure", "se fourrer"]
  },
  {
    french: "embouteiller",
    meaning: "to bottle",
    example: "Cette entreprise embouteille de l'eau minérale.",
    translation: "This company bottles mineral water.",
    category: "Food",
    priority: "Medium",
    structure: "embouteiller + liquide",
    synonymLadder: ["mettre en bouteille", "conditionner", "conserver"],
    wordFamily: ["une bouteille", "l'embouteillage", "bouteillé"]
  },
  {
    french: "vanter",
    meaning: "to boast, praise",
    example: "La publicité vante les qualités du produit.",
    translation: "The advertisement praises the product's qualities.",
    category: "TCF Expressions",
    priority: "High",
    structure: "vanter + mérite / qualité",
    synonymLadder: ["louer", "faire l'éloge de", "promouvoir"],
    wordFamily: ["se vanter", "vantard", "un éloge"]
  },
  {
    french: "fouiller",
    meaning: "to search through",
    example: "La police a fouillé le véhicule.",
    translation: "The police searched the vehicle.",
    category: "Verb",
    priority: "Medium",
    structure: "fouiller + lieu / objet",
    synonymLadder: ["chercher", "examiner", "inspecter"],
    wordFamily: ["une fouille", "fouillé", "un fouillis"]
  },
  {
    french: "avouer",
    meaning: "to confess",
    example: "Il a avoué son erreur.",
    translation: "He confessed his mistake.",
    category: "Verb",
    priority: "High",
    structure: "avouer + nom / que + phrase",
    synonymLadder: ["admettre", "reconnaître", "confesser"],
    wordFamily: ["un aveu", "avoué", "inavouable"]
  },
  {
    french: "éclaircir",
    meaning: "to clarify, clear up",
    example: "Ce rapport permet d'éclaircir la situation.",
    translation: "This report helps clarify the situation.",
    category: "TCF Expressions",
    priority: "High",
    structure: "éclaircir + situation / point",
    synonymLadder: ["clarifier", "expliquer", "rendre plus clair"],
    wordFamily: ["clair", "un éclaircissement", "s'éclaircir"]
  },
  {
    french: "suer",
    meaning: "to sweat",
    example: "Il sue beaucoup pendant l'entraînement.",
    translation: "He sweats a lot during training.",
    category: "Health",
    priority: "Medium",
    structure: "suer pendant + activité",
    synonymLadder: ["transpirer", "avoir chaud"],
    wordFamily: ["la sueur", "suant", "sueur froide"]
  },
  {
    french: "transpirer",
    meaning: "to sweat",
    example: "On transpire davantage quand il fait chaud.",
    translation: "We sweat more when it is hot.",
    category: "Health",
    priority: "Medium",
    structure: "transpirer quand + phrase",
    synonymLadder: ["suer", "dégager de la sueur"],
    wordFamily: ["la transpiration", "transpirant", "anti-transpirant"]
  },
  {
    french: "plier",
    meaning: "to fold",
    example: "Elle plie les vêtements avant de les ranger.",
    translation: "She folds the clothes before putting them away.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "plier + objet",
    synonymLadder: ["replier", "courber", "plier en deux"],
    wordFamily: ["un pli", "pliable", "déplier"]
  },
  {
    french: "piler",
    meaning: "to pound, crush",
    example: "Il faut piler les épices dans un mortier.",
    translation: "The spices must be crushed in a mortar.",
    category: "Food",
    priority: "Medium",
    structure: "piler + aliment / matière",
    synonymLadder: ["écraser", "broyer", "concasser"],
    wordFamily: ["un pilon", "pilé", "un mortier"]
  },
  {
    french: "piller",
    meaning: "to loot, plunder",
    example: "Des magasins ont été pillés pendant les violences.",
    translation: "Stores were looted during the violence.",
    category: "Society",
    priority: "High",
    structure: "piller + lieu",
    synonymLadder: ["voler", "saccager", "dépouiller"],
    wordFamily: ["un pillage", "pilleur", "pillé"]
  },
  {
    french: "noyer",
    meaning: "to drown",
    example: "Il ne faut pas noyer les plantes sous trop d'eau.",
    translation: "Plants should not be drowned with too much water.",
    category: "Verb",
    priority: "Medium",
    structure: "noyer + personne / chose",
    synonymLadder: ["submerger", "immerger", "étouffer"],
    wordFamily: ["la noyade", "noyé", "se noyer"]
  },
  {
    french: "grossir",
    meaning: "to gain weight, enlarge",
    example: "Les coûts risquent de grossir avec le temps.",
    translation: "Costs may grow over time.",
    category: "Verb",
    priority: "Medium",
    structure: "grossir avec + temps / facteur",
    synonymLadder: ["augmenter", "s'élargir", "prendre du poids"],
    wordFamily: ["gros", "la grosseur", "grossissant"]
  },
  {
    french: "maigrir",
    meaning: "to lose weight",
    example: "Il veut maigrir de façon progressive.",
    translation: "He wants to lose weight gradually.",
    category: "Health",
    priority: "Medium",
    structure: "maigrir de façon + adjectif",
    synonymLadder: ["perdre du poids", "s'affiner", "mincir"],
    wordFamily: ["maigre", "la maigreur", "amaigrir"]
  },
  {
    french: "pêcher",
    meaning: "to fish",
    example: "Ils vont pêcher au bord du lac.",
    translation: "They are going fishing by the lake.",
    category: "Nature",
    priority: "Medium",
    structure: "pêcher + poisson / lieu",
    synonymLadder: ["attraper du poisson", "pratiquer la pêche"],
    wordFamily: ["la pêche", "un pêcheur", "pêché"]
  },
  {
    french: "raccourcir",
    meaning: "to shorten",
    example: "Il faut raccourcir ce texte pour l'examen.",
    translation: "This text must be shortened for the exam.",
    category: "TCF Expressions",
    priority: "High",
    structure: "raccourcir + texte / délai",
    synonymLadder: ["abréger", "réduire", "couper"],
    wordFamily: ["court", "un raccourci", "raccourci"]
  },
  {
    french: "rétrécir",
    meaning: "to narrow, shrink",
    example: "L'espace disponible risque de rétrécir.",
    translation: "The available space may shrink.",
    category: "Verb",
    priority: "Medium",
    structure: "rétrécir avec + temps / usage",
    synonymLadder: ["diminuer", "se réduire", "se resserrer"],
    wordFamily: ["étroit", "un rétrécissement", "rétréci"]
  },
  {
    french: "ravir",
    meaning: "to delight",
    example: "Cette nouvelle a ravi toute l'équipe.",
    translation: "This news delighted the whole team.",
    category: "Verb",
    priority: "Medium",
    structure: "ravir + personne",
    synonymLadder: ["enchanter", "réjouir", "faire plaisir à"],
    wordFamily: ["ravi", "ravissant", "le ravissement"]
  },
  {
    french: "contourner",
    meaning: "to bypass, circumvent",
    example: "Certaines entreprises cherchent à contourner la règle.",
    translation: "Some companies try to circumvent the rule.",
    category: "TCF Expressions",
    priority: "High",
    structure: "contourner + règle / obstacle",
    synonymLadder: ["éviter", "esquiver", "passer outre"],
    wordFamily: ["un contour", "contournement", "contourné"]
  },
  {
    french: "peler",
    meaning: "to peel",
    example: "Elle pèle une pomme avant de la manger.",
    translation: "She peels an apple before eating it.",
    category: "Food",
    priority: "Medium",
    structure: "peler + fruit / légume",
    synonymLadder: ["éplucher", "retirer la peau", "décortiquer"],
    wordFamily: ["la peau", "une pelure", "éplucher"]
  },
  {
    french: "cirer",
    meaning: "to polish, wax",
    example: "Il cire ses chaussures avant l'entretien.",
    translation: "He polishes his shoes before the interview.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "cirer + chaussures / sol",
    synonymLadder: ["polir", "lustrer", "faire briller"],
    wordFamily: ["la cire", "ciré", "un cirage"]
  },
  {
    french: "serrer",
    meaning: "to tighten",
    example: "Il faut serrer la ceinture de sécurité.",
    translation: "The seat belt must be tightened.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "serrer + objet / personne",
    synonymLadder: ["resserrer", "presser", "tenir fermement"],
    wordFamily: ["serré", "un serrage", "desserrer"]
  },
  {
    french: "racine",
    meaning: "root",
    example: "Les racines de ce problème sont profondes.",
    translation: "The roots of this problem are deep.",
    category: "TCF Expressions",
    priority: "High",
    structure: "les racines de + problème / phénomène",
    synonymLadder: ["origine", "base", "source"],
    wordFamily: ["raciner", "enraciner", "déraciner"]
  },
  {
    french: "arracher",
    meaning: "to pull out, uproot",
    example: "Le vent a arraché plusieurs branches.",
    translation: "The wind tore off several branches.",
    category: "Verb",
    priority: "Medium",
    structure: "arracher + objet à + lieu",
    synonymLadder: ["retirer", "extraire", "déraciner"],
    wordFamily: ["un arrachement", "arraché", "déraciner"]
  },
  {
    french: "récolter",
    meaning: "to harvest",
    example: "Les agriculteurs récoltent les fruits en été.",
    translation: "Farmers harvest the fruit in summer.",
    category: "Nature",
    priority: "Medium",
    structure: "récolter + produit / résultat",
    synonymLadder: ["cueillir", "recueillir", "obtenir"],
    wordFamily: ["une récolte", "récolté", "un récoltant"]
  },
  {
    french: "ramasser",
    meaning: "to pick up, collect",
    example: "Les enfants ramassent les feuilles dans le jardin.",
    translation: "The children pick up leaves in the garden.",
    category: "Everyday Vocabulary",
    priority: "Medium",
    structure: "ramasser + objet",
    synonymLadder: ["recueillir", "collecter", "prendre par terre"],
    wordFamily: ["un ramassage", "ramassé", "collecte"]
  },
  {
    french: "amende",
    meaning: "fine, penalty",
    example: "Il a reçu une amende pour excès de vitesse.",
    translation: "He received a fine for speeding.",
    category: "Legal",
    priority: "High",
    structure: "recevoir / payer une amende",
    synonymLadder: ["sanction", "pénalité", "contravention"],
    wordFamily: ["amender", "une contravention", "sanctionner"]
  },
  {
    french: "montant",
    meaning: "amount",
    example: "Le montant de l'amende est élevé.",
    translation: "The amount of the fine is high.",
    category: "Finance",
    priority: "High",
    structure: "le montant de + nom",
    synonymLadder: ["somme", "total", "valeur"],
    wordFamily: ["monter", "une somme", "un paiement"]
  },
  {
    french: "aveugler",
    meaning: "to blind",
    example: "La lumière peut aveugler le conducteur.",
    translation: "The light can blind the driver.",
    category: "Health",
    priority: "Medium",
    structure: "aveugler + personne",
    synonymLadder: ["éblouir", "priver de vue", "obscurcir"],
    wordFamily: ["aveugle", "un aveuglement", "malvoyant"]
  },
  {
    french: "épargner",
    meaning: "to save",
    example: "Il essaie d'épargner chaque mois.",
    translation: "He tries to save every month.",
    category: "Finance",
    priority: "High",
    structure: "épargner + argent / effort",
    synonymLadder: ["mettre de côté", "économiser", "préserver"],
    wordFamily: ["une épargne", "épargné", "un épargnant"]
  },
  {
    french: "enjeu",
    meaning: "stake, challenge, issue",
    example: "L'enjeu principal est de réduire les inégalités.",
    translation: "The main issue is to reduce inequalities.",
    category: "TCF Expressions",
    priority: "High",
    structure: "l'enjeu est de + infinitif",
    synonymLadder: ["défi", "question centrale", "ce qui est en jeu"],
    wordFamily: ["mettre en jeu", "un défi", "stratégique"]
  },
  {
    french: "gratter",
    meaning: "to scratch",
    example: "Il ne faut pas gratter une plaie.",
    translation: "You should not scratch a wound.",
    category: "Health",
    priority: "Medium",
    structure: "gratter + surface / peau",
    synonymLadder: ["racler", "frotter", "égratigner"],
    wordFamily: ["une gratte", "une égratignure", "gratté"]
  },
  {
    french: "gratte-ciel",
    meaning: "skyscraper",
    example: "Ce gratte-ciel domine le quartier.",
    translation: "This skyscraper dominates the district.",
    category: "Urban Vocabulary",
    priority: "Medium",
    structure: "un gratte-ciel + verbe",
    synonymLadder: ["tour", "immeuble très haut", "building"],
    wordFamily: ["gratter", "le ciel", "urbain"]
  },
  {
    french: "pneu",
    meaning: "tyre",
    example: "Le pneu avant est crevé.",
    translation: "The front tyre is flat.",
    category: "Driving",
    priority: "Medium",
    structure: "un pneu crevé",
    synonymLadder: ["roue", "pneumatique"],
    wordFamily: ["pneumatique", "crevé", "gonfler"]
  },
  {
    french: "volant",
    meaning: "steering wheel",
    example: "Il garde les mains sur le volant.",
    translation: "He keeps his hands on the steering wheel.",
    category: "Driving",
    priority: "Medium",
    structure: "tenir le volant",
    synonymLadder: ["direction", "commande de conduite"],
    wordFamily: ["voler", "conducteur", "conduire"]
  },
  {
    french: "miel",
    meaning: "honey",
    example: "Elle met du miel dans son thé.",
    translation: "She puts honey in her tea.",
    category: "Food",
    priority: "Medium",
    structure: "du miel dans + boisson / plat",
    synonymLadder: ["sucre naturel", "nectar"],
    wordFamily: ["miellé", "une abeille", "une ruche"]
  },
  {
    french: "lune de miel",
    meaning: "honeymoon",
    example: "Ils partent en lune de miel après le mariage.",
    translation: "They are going on honeymoon after the wedding.",
    category: "Everyday Expressions",
    priority: "Medium",
    structure: "partir en lune de miel",
    synonymLadder: ["voyage de noces", "séjour après le mariage"],
    wordFamily: ["le miel", "le mariage", "les noces"]
  },
  {
    french: "ruche",
    meaning: "hive",
    example: "La ruche abrite des milliers d'abeilles.",
    translation: "The hive shelters thousands of bees.",
    category: "Nature",
    priority: "Medium",
    structure: "une ruche abrite + nom",
    synonymLadder: ["nid d'abeilles", "colonie"],
    wordFamily: ["une abeille", "le miel", "un apiculteur"]
  },
  {
    french: "songer",
    meaning: "to think, consider",
    example: "Il songe à changer de carrière.",
    translation: "He is considering changing career.",
    category: "TCF Expressions",
    priority: "High",
    structure: "songer à + infinitif / nom",
    synonymLadder: ["penser à", "envisager", "réfléchir à"],
    wordFamily: ["un songe", "songeur", "songer à"]
  }
];

const thirdVocabulary = compactVocabulary([
  ["les vacances", "holidays, vacations", "Travel", "Medium", "prendre des vacances"],
  ["un élève", "pupil, school student", "Education", "High", "un élève de + niveau"],
  ["un étudiant", "university student", "Education", "High", "un étudiant en + domaine"],
  ["un cours", "course, class", "Education", "High", "suivre un cours"],
  ["un examen", "exam", "Education", "High", "passer un examen"],
  ["un stage", "internship", "Work", "High", "faire un stage"],
  ["enseigner", "to teach", "Education", "High", "enseigner + matière"],
  ["éduquer", "to educate", "Education", "High", "éduquer + personne"],
  ["suivre un cours", "to take, follow a course", "Education", "High", "suivre un cours de + matière"],
  ["passer un examen", "to sit an exam", "Education", "High", "passer un examen"],
  ["réussir à un examen", "to pass an exam", "Education", "High", "réussir à un examen"],
  ["échouer à un examen", "to fail an exam", "Education", "High", "échouer à un examen"],
  ["recevoir son diplôme", "to receive one's degree", "Education", "High", "recevoir son diplôme"],
  ["les devoirs", "homework, assignments", "Education", "High", "faire ses devoirs"],
  ["une note", "grade, mark", "Education", "High", "obtenir une note"],
  ["score", "score", "Education", "Medium", "obtenir un score"],
  ["analyser", "to analyse", "TCF Expressions", "High", "analyser + situation / données"],
  ["une ordonnance", "prescription", "Health", "High", "une ordonnance médicale"],
  ["un médecin", "doctor", "Health", "High", "consulter un médecin"],
  ["un médicament", "medicine", "Health", "High", "prendre un médicament"],
  ["le traitement", "treatment", "Health", "High", "suivre un traitement"],
  ["une toux", "cough", "Health", "High", "avoir une toux"],
  ["tousser", "to cough", "Health", "Medium", "tousser depuis + moment"],
  ["des effets secondaires", "side effects", "Health", "High", "avoir des effets secondaires"],
  ["un pharmacien", "pharmacist", "Health", "High", "demander conseil à un pharmacien"],
  ["une pharmacienne", "female pharmacist", "Health", "High", "demander conseil à une pharmacienne"],
  ["une gélule", "capsule", "Health", "Medium", "prendre une gélule"],
  ["un analgésique", "painkiller", "Health", "Medium", "prendre un analgésique"],
  ["avoir un rhume", "to have a cold", "Health", "High", "avoir un rhume"],
  ["avoir la grippe", "to have the flu", "Health", "High", "avoir la grippe"],
  ["avoir mal à la tête", "to have a headache", "Health", "High", "avoir mal à la tête"],
  ["boulot", "job", "Work", "Medium", "avoir du boulot"],
  ["entendre", "to hear", "Everyday Vocabulary", "High", "entendre + son / personne"],
  ["s’entendre avec", "to get along with", "Everyday Expressions", "High", "s’entendre avec + personne"],
  ["rapport", "report", "Work", "High", "rédiger un rapport"],
  ["vacances estivales", "summer holidays", "Travel", "Medium", "les vacances estivales"],
  ["actuel", "current", "TCF Expressions", "High", "la situation actuelle"],
  ["rythme", "pace, rhythm", "TCF Expressions", "High", "au rythme de + nom"],
  ["délirant", "delirious, absurd", "Adjective", "Medium", "un rythme délirant"],
  ["démarche", "approach, process", "TCF Expressions", "High", "une démarche cohérente"],
  ["politique", "policy", "Society", "High", "une politique publique"],
  ["militer", "to campaign, advocate", "Society", "High", "militer pour + cause"],
  ["contourner", "to bypass", "TCF Expressions", "High", "contourner + obstacle / règle"],
  ["peine (pénalité)", "penalty", "Legal", "High", "une peine de + durée"],
  ["peine", "pain, trouble", "Everyday Vocabulary", "High", "avoir de la peine"],
  ["en panne", "broken down, out of order", "Everyday Expressions", "High", "être en panne"],
  ["à peine", "barely, hardly", "Connectors", "High", "à peine + verbe"],
  ["lourd", "heavy", "Adjective", "Medium", "un objet lourd"],
  ["détestable", "detestable, awful", "Adjective", "Medium", "un comportement détestable"],
  ["admirable", "admirable", "Adjective", "Medium", "une attitude admirable"],
  ["hériter", "to inherit", "Verb", "Medium", "hériter de + nom"],
  ["devoir + infinitif", "to have to, must", "TCF Expressions", "High", "devoir + infinitif"],
  ["compter", "to count", "Verb", "High", "compter sur + personne"],
  ["disparaître", "to disappear", "Verb", "High", "disparaître progressivement"],
  ["se balader", "to walk around, stroll", "Everyday Expressions", "Medium", "se balader dans + lieu"],
  ["les genoux", "knees", "Health", "Medium", "avoir mal aux genoux"],
  ["tremblant", "trembling, shaking", "Adjective", "Medium", "être tremblant"],
  ["à l’instant", "just now", "Everyday Expressions", "Medium", "à l’instant"],
  ["par hasard", "by chance", "Connectors", "Medium", "par hasard"],
  ["dur", "hard, difficult", "Adjective", "High", "c'est dur de + infinitif"],
  ["bien au chaud", "nice and warm", "Everyday Expressions", "Medium", "rester bien au chaud"],
  ["virgule", "comma", "Writing", "Medium", "mettre une virgule"],
  ["un truc", "thing, trick", "Everyday Vocabulary", "Medium", "un truc utile"],
  ["décortiquer", "to break down, analyse in detail", "TCF Expressions", "High", "décortiquer + problème / texte"],
  ["peser", "to weigh", "Verb", "Medium", "peser + poids / décision"],
  ["l’un de l’autre", "each other", "Everyday Expressions", "Medium", "dépendre l’un de l’autre"],
  ["décoller", "to take off", "Travel", "Medium", "l'avion décolle"],
  ["dérober", "to steal", "Verb", "Medium", "dérober + objet"],
  ["défiler", "to parade, march past", "Society", "Medium", "défiler dans la rue"],
  ["déborder", "to overflow", "Verb", "Medium", "déborder de + nom"],
  ["débrouiller", "to sort out, untangle", "Verb", "Medium", "débrouiller + situation"],
  ["se débrouiller", "to manage, get by", "Everyday Expressions", "High", "se débrouiller seul"],
  ["au fur et à mesure", "gradually, as things progress", "Connectors", "High", "au fur et à mesure que + phrase"],
  ["piste cyclable", "cycle lane, bike path", "Urban Vocabulary", "Medium", "prendre la piste cyclable"],
  ["trottoir", "pavement, sidewalk", "Urban Vocabulary", "Medium", "marcher sur le trottoir"],
  ["feu de circulation", "traffic light", "Driving", "Medium", "s'arrêter au feu de circulation"],
  ["passage piéton", "pedestrian crossing", "Urban Vocabulary", "Medium", "traverser au passage piéton"],
  ["bouchon", "traffic jam", "Driving", "Medium", "être coincé dans un bouchon"],
  ["approfondir", "to deepen, explore further", "TCF Expressions", "High", "approfondir + sujet"],
  ["contester", "to challenge, dispute", "TCF Expressions", "High", "contester + décision"],
  ["inévitable", "inevitable", "Adjective", "High", "une conséquence inévitable"],
  ["effectuer", "to carry out, perform", "TCF Expressions", "High", "effectuer + tâche"],
  ["savon", "soap", "Everyday Vocabulary", "Medium", "utiliser du savon"],
  ["métier", "profession, trade, career", "Work", "High", "exercer un métier"],
  ["quotidien / quotidienne", "daily, everyday", "Adjective", "High", "la vie quotidienne"],
  ["démarrer", "to start, begin", "Verb", "High", "démarrer + projet"],
  ["un honneur", "an honour", "Everyday Expressions", "Medium", "c'est un honneur de + infinitif"],
  ["l’apprenant", "learner", "Education", "High", "l'apprenant progresse"],
  ["perturber", "to disturb, disrupt", "Verb", "High", "perturber + processus"],
  ["au fil du temps", "over time", "Connectors", "High", "au fil du temps"],
  ["déranger", "to bother, disturb", "Everyday Vocabulary", "Medium", "déranger + personne"],
  ["à l’époque", "at the time, back then", "Connectors", "High", "à l’époque"],
  ["domaine", "field, area", "TCF Expressions", "High", "dans le domaine de + nom"],
  ["trajet", "journey, trip", "Travel", "Medium", "faire un trajet"],
  ["parcours", "route, journey, path", "TCF Expressions", "High", "un parcours professionnel"],
  ["enjeu", "challenge, stake, issue", "TCF Expressions", "High", "un enjeu majeur"],
  ["étonnamment", "surprisingly", "Connectors", "Medium", "étonnamment, + phrase"],
  ["une envie", "desire, urge, wish", "Everyday Vocabulary", "Medium", "avoir envie de + infinitif"],
  ["désir", "desire", "Everyday Vocabulary", "Medium", "exprimer un désir"],
  ["bagage", "luggage", "Travel", "Medium", "prendre un bagage"],
  ["avouer", "to admit, confess", "Verb", "High", "avouer + erreur"],
  ["maintenir", "to maintain, keep", "TCF Expressions", "High", "maintenir + niveau / effort"],
  ["garder", "to keep", "Verb", "High", "garder + objet / idée"],
  ["gêner", "to bother, inconvenience", "Everyday Vocabulary", "Medium", "gêner + personne"],
  ["remplir", "to fill in, fill out", "Everyday Vocabulary", "High", "remplir + formulaire"],
  ["valoriser", "to value", "TCF Expressions", "High", "valoriser + compétence"],
  ["injuste", "unfair", "Adjective", "High", "une décision injuste"],
  ["chacun", "each, everyone", "Pronoun", "High", "chacun peut + infinitif"],
  ["déclencheur", "trigger", "TCF Expressions", "High", "un élément déclencheur"],
  ["du coup", "as a result, therefore", "Connectors", "High", "du coup, + phrase"],
  ["frustrant", "frustrating", "Adjective", "Medium", "une situation frustrante"],
  ["comportement", "behaviour", "Society", "High", "un comportement responsable"],
  ["données", "data", "Technology", "High", "analyser des données"],
  ["sauter", "to jump", "Verb", "Medium", "sauter par-dessus + nom"],
  ["tartiner", "to spread", "Food", "Medium", "tartiner + aliment"],
  ["répandre", "to spread, disseminate", "TCF Expressions", "High", "répandre + idée"],
  ["disperser", "to scatter, spread out", "Verb", "Medium", "disperser + groupe / objet"],
  ["l’addition", "the bill", "Food", "Medium", "demander l’addition"],
  ["éloigner", "to move away, keep away", "Verb", "Medium", "éloigner + personne / risque"],
  ["bloquer", "to block", "Verb", "High", "bloquer + accès / processus"],
  ["abonné / abonnée", "subscriber, follower", "Technology", "Medium", "un abonné à + service"],
  ["contenu", "content", "Technology", "High", "créer du contenu"],
  ["la planète", "the planet", "Environment", "High", "protéger la planète"],
  ["détruire", "to destroy", "Environment", "High", "détruire + environnement / objet"],
  ["changement", "change", "TCF Expressions", "High", "un changement majeur"],
  ["changer", "to change", "Verb", "High", "changer de + nom"],
  ["transcender", "to transcend", "TCF Expressions", "Medium", "transcender + limite"],
  ["déléguer", "to delegate", "Work", "High", "déléguer + tâche"],
  ["réflexion", "reflection, thought", "TCF Expressions", "High", "mener une réflexion"],
  ["esprit", "mind, spirit", "TCF Expressions", "High", "avoir l'esprit ouvert"],
  ["moteur de recherche", "search engine", "Technology", "High", "utiliser un moteur de recherche"],
  ["éthique", "ethical, ethics", "Society", "High", "une question éthique"],
  ["refroidir", "to cool down", "Verb", "Medium", "laisser refroidir + objet"],
  ["majeur", "major, significant", "Adjective", "High", "un enjeu majeur"],
  ["sans critique", "without criticism", "TCF Expressions", "Medium", "accepter sans critique"],
  ["s’abonner", "to subscribe", "Technology", "Medium", "s’abonner à + service"],
  ["documentaire", "documentary", "Media", "Medium", "regarder un documentaire"],
  ["tournage", "filming, shooting", "Media", "Medium", "un lieu de tournage"],
  ["tourner", "to shoot a film", "Media", "Medium", "tourner un film"],
  ["théâtre", "theatre", "Media", "Medium", "aller au théâtre"],
  ["intrigue", "plot", "Media", "Medium", "l'intrigue d'un film"],
  ["vedette", "star, celebrity", "Media", "Medium", "une vedette de cinéma"],
  ["éclairage", "lighting", "Media", "Medium", "un bon éclairage"],
  ["sous-titre", "subtitle", "Media", "Medium", "activer les sous-titres"],
  ["colère", "anger", "Emotion", "Medium", "être en colère"],
  ["mamie", "grandma", "Family", "Low", "ma mamie"],
  ["voler", "to steal", "Verb", "Medium", "voler + objet"],
  ["voleur", "thief", "Legal", "Medium", "un voleur"],
  ["jeter", "to throw", "Verb", "Medium", "jeter + objet"],
  ["lancer", "to throw, launch", "Verb", "High", "lancer + projet / objet"],
  ["attraper", "to catch", "Verb", "Medium", "attraper + objet / maladie"],
  ["météo", "weather forecast", "Everyday Vocabulary", "Medium", "regarder la météo"],
  ["invité / invitée", "guest", "Everyday Vocabulary", "Medium", "un invité à + événement"],
  ["la fin", "the end", "Everyday Vocabulary", "Medium", "à la fin de + nom"],
  ["bruit", "noise", "Everyday Vocabulary", "Medium", "faire du bruit"],
  ["étouffant / étouffante", "suffocating, stifling", "Story Vocabulary", "Medium", "une atmosphère étouffante"],
  ["inquiétant / inquiétante", "worrying, concerning", "Story Vocabulary", "Medium", "une situation inquiétante"],
  ["méprisant / méprisante", "contemptuous", "Story Vocabulary", "Medium", "un ton méprisant"],
  ["autoritaire", "authoritarian", "Story Vocabulary", "Medium", "une attitude autoritaire"],
  ["drame", "drama", "Story Vocabulary", "Medium", "un drame familial"],
  ["nervosité", "nervousness", "Story Vocabulary", "Medium", "montrer de la nervosité"],
  ["interrogatoire", "interrogation", "Story Vocabulary", "Medium", "subir un interrogatoire"],
  ["grimper", "to climb", "Story Vocabulary", "Medium", "grimper sur + nom"],
  ["tomber", "to fall", "Story Vocabulary", "Medium", "tomber par terre"],
  ["remarquer", "to notice", "Story Vocabulary", "High", "remarquer que + phrase"],
  ["aussitôt après", "immediately after", "Story Vocabulary", "Medium", "aussitôt après + nom"],
  ["logement", "accommodation, housing", "Story Vocabulary", "High", "trouver un logement"],
  ["personnel", "staff", "Work", "High", "le personnel de + lieu"],
  ["s’inquiéter", "to worry", "Story Vocabulary", "High", "s’inquiéter pour + personne"],
  ["inquiet / inquiète", "worried", "Story Vocabulary", "Medium", "être inquiet pour + personne"],
  ["attaquer", "to attack", "Story Vocabulary", "Medium", "attaquer + personne / problème"],
  ["paniquer", "to panic", "Story Vocabulary", "Medium", "paniquer face à + situation"],
  ["crier", "to shout, scream", "Story Vocabulary", "Medium", "crier de + émotion"],
  ["pleurer", "to cry", "Story Vocabulary", "Medium", "pleurer de + émotion"],
  ["sain et sauf", "safe and sound", "Story Vocabulary", "Medium", "être sain et sauf"],
  ["être en sécurité", "to be safe", "Story Vocabulary", "High", "être en sécurité"],
  ["gardien de zoo", "zookeeper", "Story Vocabulary", "Medium", "un gardien de zoo"]
]);

const fourthVocabulary = compactVocabulary([
  ["accompagner", "to accompany", "Verb", "High", "accompagner + personne"],
  ["aider", "to help", "Verb", "High", "aider + personne à + infinitif"],
  ["aimer", "to like, love", "Verb", "High", "aimer + nom / infinitif"],
  ["ajouter", "to add", "Verb", "High", "ajouter + élément"],
  ["apporter", "to bring", "Verb", "High", "apporter + objet / solution"],
  ["bavarder", "to chat", "Everyday Vocabulary", "Medium", "bavarder avec + personne"],
  ["briller", "to shine", "Verb", "Medium", "briller dans + domaine"],
  ["brosser", "to brush", "Everyday Vocabulary", "Medium", "brosser + cheveux / dents"],
  ["cacher", "to hide", "Verb", "Medium", "cacher + objet / vérité"],
  ["cesser", "to stop, cease", "TCF Expressions", "High", "cesser de + infinitif"],
  ["chanter", "to sing", "Verb", "Medium", "chanter une chanson"],
  ["chercher", "to look for", "Verb", "High", "chercher à + infinitif"],
  ["commander", "to order", "Everyday Vocabulary", "Medium", "commander + repas / produit"],
  ["compter", "to count", "Verb", "High", "compter sur + personne"],
  ["coûter", "to cost", "Verb", "High", "coûter + prix"],
  ["danser", "to dance", "Verb", "Medium", "danser avec + personne"],
  ["déjeuner", "to have lunch", "Food", "Medium", "déjeuner à + heure"],
  ["demander", "to ask", "Verb", "High", "demander à + personne de + infinitif"],
  ["désirer", "to desire", "Verb", "Medium", "désirer + nom / infinitif"],
  ["dîner", "to have dinner", "Food", "Medium", "dîner avec + personne"],
  ["donner", "to give", "Verb", "High", "donner + objet à + personne"],
  ["écouter", "to listen", "Verb", "High", "écouter + personne / contenu"],
  ["embrasser", "to kiss", "Everyday Vocabulary", "Medium", "embrasser + personne"],
  ["entrer", "to enter", "Verb", "High", "entrer dans + lieu"],
  ["épouser", "to marry", "Everyday Vocabulary", "Medium", "épouser + personne"],
  ["étudier", "to study", "Education", "High", "étudier + matière"],
  ["expliquer", "to explain", "TCF Expressions", "High", "expliquer + idée à + personne"],
  ["bouger", "to move", "Verb", "Medium", "bouger de + lieu"],
  ["piquer", "to sting", "Verb", "Medium", "piquer + personne"],
  ["glisser", "to slip", "Verb", "Medium", "glisser sur + surface"],
  ["juger", "to judge", "TCF Expressions", "High", "juger que + phrase"],
  ["gagner", "to win, earn", "Verb", "High", "gagner + argent / compétition"],
  ["sensibiliser", "to raise awareness", "TCF Expressions", "High", "sensibiliser + public à + sujet"],
  ["féliciter", "to congratulate", "Everyday Vocabulary", "Medium", "féliciter + personne"],
  ["fermer", "to close", "Everyday Vocabulary", "Medium", "fermer + objet / lieu"],
  ["jouer", "to play", "Everyday Vocabulary", "High", "jouer à / de + nom"],
  ["laver", "to wash", "Everyday Vocabulary", "Medium", "laver + objet / partie du corps"],
  ["manquer", "to miss, lack", "TCF Expressions", "High", "manquer de + nom"],
  ["marcher", "to walk", "Everyday Vocabulary", "High", "marcher dans + lieu"],
  ["mériter", "to deserve", "TCF Expressions", "High", "mériter + nom / de + infinitif"],
  ["monter", "to go up", "Verb", "High", "monter dans / sur + lieu"],
  ["montrer", "to show", "Verb", "High", "montrer + chose à + personne"],
  ["oublier", "to forget", "Verb", "High", "oublier de + infinitif"],
  ["pardonner", "to forgive", "Everyday Vocabulary", "Medium", "pardonner à + personne"],
  ["parler", "to speak", "Verb", "High", "parler de + sujet"],
  ["passer", "to pass by, spend time", "Verb", "High", "passer du temps à + infinitif"],
  ["peigner", "to comb", "Everyday Vocabulary", "Medium", "peigner + cheveux"],
  ["penser", "to think", "TCF Expressions", "High", "penser à / que + phrase"],
  ["porter", "to carry, wear", "Verb", "High", "porter + objet / vêtement"],
  ["présenter", "to present", "TCF Expressions", "High", "présenter + idée / personne"],
  ["prêter", "to lend", "Everyday Vocabulary", "Medium", "prêter + objet à + personne"],
  ["quitter", "to leave", "Verb", "High", "quitter + lieu / personne"],
  ["raconter", "to tell a story", "Everyday Vocabulary", "Medium", "raconter + histoire"],
  ["regretter", "to regret", "TCF Expressions", "High", "regretter de + infinitif"],
  ["remercier", "to thank", "Everyday Vocabulary", "Medium", "remercier + personne"],
  ["rencontrer", "to meet", "Everyday Vocabulary", "High", "rencontrer + personne"],
  ["rester", "to stay", "Verb", "High", "rester + adjectif / lieu"],
  ["souhaiter", "to wish", "TCF Expressions", "High", "souhaiter + infinitif / que + subjonctif"],
  ["téléphoner", "to call", "Everyday Vocabulary", "Medium", "téléphoner à + personne"],
  ["terminer", "to finish", "Verb", "High", "terminer + tâche"],
  ["chasser", "to hunt", "Nature", "Medium", "chasser + animal"],
  ["accueillir", "to welcome", "Verb", "High", "accueillir + personne"],
  ["applaudir", "to applaud", "Everyday Vocabulary", "Medium", "applaudir + personne"],
  ["bâtir", "to build", "TCF Expressions", "High", "bâtir + projet / maison"],
  ["choisir", "to choose", "Verb", "High", "choisir + option"],
  ["désobéir", "to disobey", "Verb", "Medium", "désobéir à + règle"],
  ["finir", "to finish", "Verb", "High", "finir de + infinitif"],
  ["grandir", "to grow", "Verb", "High", "grandir dans + lieu"],
  ["guérir", "to heal", "Health", "Medium", "guérir de + maladie"],
  ["nourrir", "to feed", "Verb", "High", "nourrir + personne / débat"],
  ["refroidir", "to cool down", "Verb", "Medium", "refroidir + objet"],
  ["souffrir", "to suffer", "Health", "High", "souffrir de + maladie / problème"],
  ["retenir", "to retain, remember", "TCF Expressions", "High", "retenir + information"],
  ["entretenir", "to maintain", "TCF Expressions", "High", "entretenir + relation / lieu"],
  ["obéir", "to obey", "Verb", "Medium", "obéir à + règle"],
  ["punir", "to punish", "Legal", "Medium", "punir + personne"],
  ["ravir", "to delight", "Verb", "Medium", "ravir + personne"],
  ["réfléchir", "to reflect, think about", "TCF Expressions", "High", "réfléchir à + sujet"],
  ["remplir", "to fill", "Everyday Vocabulary", "High", "remplir + formulaire"],
  ["réussir", "to succeed", "TCF Expressions", "High", "réussir à + infinitif"],
  ["rougir", "to blush", "Emotion", "Medium", "rougir de + émotion"],
  ["saisir", "to seize, grasp", "TCF Expressions", "High", "saisir + occasion / idée"],
  ["bouillir", "to boil", "Food", "Medium", "faire bouillir + eau"],
  ["sentir", "to feel, smell", "Verb", "High", "sentir + odeur / émotion"],
  ["attendre", "to wait", "Verb", "High", "attendre + personne / moment"],
  ["dépendre", "to depend", "TCF Expressions", "High", "dépendre de + nom"],
  ["descendre", "to go down", "Verb", "Medium", "descendre de + lieu"],
  ["entendre", "to hear", "Verb", "High", "entendre + son"],
  ["perdre", "to lose", "Verb", "High", "perdre + objet / temps"],
  ["rendre", "to give back", "Verb", "High", "rendre + objet à + personne"],
  ["répondre", "to answer", "Verb", "High", "répondre à + question"],
  ["vendre", "to sell", "Work", "Medium", "vendre + produit"],
  ["interdire", "to forbid", "Legal", "High", "interdire + action"],
  ["construire", "to build", "TCF Expressions", "High", "construire + projet / bâtiment"],
  ["fondre", "to melt", "Verb", "Medium", "fondre avec + chaleur"],
  ["remettre", "to put back", "TCF Expressions", "High", "remettre + objet / décision"],
  ["accroître", "to increase", "TCF Expressions", "High", "accroître + nom abstrait"],
  ["mettre", "to put", "Verb", "High", "mettre + objet dans + lieu"],
  ["sourire", "to smile", "Everyday Vocabulary", "Medium", "sourire à + personne"],
  ["dire", "to say", "Verb", "High", "dire que + phrase"],
  ["permettre", "to allow", "TCF Expressions", "High", "permettre à + personne de + infinitif"],
  ["apprendre", "to learn", "Education", "High", "apprendre à + infinitif"],
  ["suivre", "to follow", "TCF Expressions", "High", "suivre + cours / règle"],
  ["tenter", "to attempt", "TCF Expressions", "High", "tenter de + infinitif"],
  ["emmener", "to take a person", "Verb", "Medium", "emmener + personne à + lieu"],
  ["reculer", "to step back", "Verb", "Medium", "reculer devant + obstacle"],
  ["garder", "to keep", "Verb", "High", "garder + objet / idée"],
  ["marquer", "to mark, highlight", "TCF Expressions", "High", "marquer + différence / point"],
  ["basculer", "to switch, shift", "TCF Expressions", "High", "basculer vers + état"],
  ["dérouler", "to unfold, take place", "TCF Expressions", "High", "se dérouler à + lieu"],
  ["supprimer", "to delete", "Technology", "High", "supprimer + élément"],
  ["tromper", "to deceive", "Verb", "Medium", "tromper + personne"],
  ["tourner", "to turn", "Verb", "Medium", "tourner autour de + sujet"],
  ["manchot", "penguin", "Nature", "Medium", "un manchot"],
  ["oiseau / oiseaux", "bird, birds", "Nature", "Medium", "un oiseau / des oiseaux"],
  ["émigrer", "to migrate", "Nature", "Medium", "émigrer vers + pays"],
  ["diriger", "to direct", "TCF Expressions", "High", "diriger + équipe / projet"],
  ["s’accoupler", "to mate", "Nature", "Medium", "s’accoupler avec + animal"],
  ["femelle", "female", "Nature", "Medium", "une femelle"],
  ["incubatrice", "incubator", "Nature", "Medium", "une incubatrice"],
  ["pêcher", "to fish", "Nature", "Medium", "pêcher + poisson"],
  ["vent", "wind", "Nature", "Medium", "le vent souffle"],
  ["poudrerie", "blowing snow", "Nature", "Medium", "une forte poudrerie"],
  ["faible", "weak", "Adjective", "High", "un niveau faible"],
  ["réchauffer", "to warm up", "Environment", "High", "réchauffer + atmosphère / plat"],
  ["force", "strength", "TCF Expressions", "High", "la force de + nom"],
  ["milieu", "environment, setting, middle", "TCF Expressions", "High", "dans un milieu + adjectif"],
  ["pondre", "to lay eggs", "Nature", "Medium", "pondre des œufs"],
  ["contre", "against", "Connectors", "High", "être contre + nom"],
  ["inventer", "to invent", "Verb", "High", "inventer + solution"],
  ["chacun", "each", "Pronoun", "High", "chacun peut + infinitif"],
  ["exposer", "to expose", "TCF Expressions", "High", "exposer + problème / personne à + risque"],
  ["compliquer", "to complicate", "Verb", "High", "compliquer + situation"],
  ["corriger", "to correct", "Education", "High", "corriger + erreur / devoir"],
  ["perturber", "to disturb", "Verb", "High", "perturber + processus"],
  ["embrouiller", "to confuse", "Everyday Vocabulary", "Medium", "embrouiller + personne / situation"],
  ["enseigner", "to teach", "Education", "High", "enseigner + matière"],
  ["récupérer", "to recover, get back", "Verb", "High", "récupérer + objet / énergie"],
  ["empêcher", "to prevent", "TCF Expressions", "High", "empêcher + personne de + infinitif"],
  ["partager", "to share", "TCF Expressions", "High", "partager + idée / ressource"],
  ["protéger", "to protect", "Environment", "High", "protéger + personne / planète"],
  ["mentir", "to lie", "Everyday Vocabulary", "Medium", "mentir à + personne"],
  ["parcourir", "to travel through, cover", "TCF Expressions", "High", "parcourir + lieu / texte"],
  ["allumer", "to switch on", "Household", "Medium", "allumer + appareil / lumière"],
  ["arranger", "to arrange, tidy up", "Household", "Medium", "arranger + pièce / situation"],
  ["remplacer", "to replace", "TCF Expressions", "High", "remplacer + élément par + autre"],
  ["mélanger", "to mix", "Household", "Medium", "mélanger + ingrédients"],
  ["arroser", "to water plants", "Household", "Medium", "arroser + plantes"],
  ["sécher", "to dry", "Household", "Medium", "sécher + objet / cheveux"],
  ["laisser", "to leave, let", "Verb", "High", "laisser + personne + infinitif"],
  ["tremper", "to soak", "Household", "Medium", "tremper + objet dans + liquide"],
  ["partir", "to leave", "Verb", "High", "partir de + lieu"],
  ["sortir", "to go out", "Verb", "High", "sortir de + lieu"],
  ["fonctionner", "to function, work", "Household", "High", "fonctionner correctement"],
  ["se dépêcher", "to hurry", "Everyday Expressions", "Medium", "se dépêcher de + infinitif"],
  ["rêver", "to dream", "Everyday Vocabulary", "Medium", "rêver de + nom / infinitif"],
  ["gaspiller", "to waste", "Environment", "High", "gaspiller + ressource"],
  ["changer", "to change", "Verb", "High", "changer de + nom"]
]);

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);
  return rows;
};

const normalizeTerm = (value) => {
  const base = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s*[,/]\s*/g, " ")
    .replace(/\s+/g, " ");
  const withoutArticle = base.replace(/^(un|une|le|la|les|l')\s+/, "");
  const parts = withoutArticle.split(" ");

  if (parts.length === 2 && parts[1].startsWith(parts[0]) && parts[1].length <= parts[0].length + 3) {
    return parts[0];
  }

  return withoutArticle;
};

const slugifyTerm = (value) =>
  normalizeTerm(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const toPriority = (value) => (["Low", "Medium", "High"].includes(value.trim()) ? value.trim() : "Medium");
const toStatus = (value) => (["New", "Learning", "Familiar", "Active", "Mastered"].includes(value.trim()) ? value.trim() : "New");

const inferPartOfSpeech = (category, french) => {
  const normalized = category.trim().toLowerCase();
  if (normalized === "verb") return "verb";
  if (normalized.includes("expression")) return "expression";
  if (normalized.includes("connector")) return "connector";
  if (french.trim().includes(" ")) return "expression";
  return "word";
};

const inferLevel = (priority, category) => {
  if (category.toLowerCase().includes("general")) return "B2";
  if (priority === "High") return "B2";
  return "B1";
};

const inferTags = (category, priority, structure) => {
  const tags = ["notion-import", "tcf"];
  if (priority === "High") tags.push("high-priority");
  if (category) tags.push(category.toLowerCase().replace(/[^a-z0-9]+/g, "-"));
  if (structure) tags.push("structure");
  return [...new Set(tags)].filter(Boolean);
};

const source = fs.readFileSync(inputPath, "utf8");
const [headers, ...rows] = parseCsv(source);
const columnIndex = Object.fromEntries(headers.map((header, index) => [header.trim(), index]));

const seen = new Set();
const duplicates = [];
const invalidRows = [];
const vocabulary = [];

const addVocabularyItem = ({
  french,
  meaning,
  category,
  priority,
  structure,
  example,
  translation,
  status,
  source,
  extraTags = [],
  synonymLadder,
  wordFamily,
  repairPrompt
}) => {
  const normalized = normalizeTerm(french);

  if (!french || !meaning) {
    invalidRows.push({ source, row: french || "(blank)" });
    return;
  }

  if (seen.has(normalized)) {
    duplicates.push({ source, french });
    return;
  }

  seen.add(normalized);
  vocabulary.push({
    id: slugifyTerm(french) || `word-${vocabulary.length + 1}`,
    french,
    meaning,
    category,
    level: inferLevel(priority, category),
    partOfSpeech: inferPartOfSpeech(category, french),
    example: example || `Il est important de savoir utiliser « ${french} » dans un contexte naturel.`,
    translation: translation || meaning,
    structures: structure ? [structure] : [],
    tcfPriority: priority,
    status,
    dateAdded: "iso(-24)",
    source,
    tags: [...new Set([...inferTags(category, priority, structure), ...extraTags])],
    synonymLadder,
    wordFamily,
    repairPrompt,
    dueAt: "iso(0)",
    successStreak: 0,
    lapses: 0,
    meaningConfirmed: true
  });
};

rows.forEach((row, rowIndex) => {
  const french = (row[columnIndex.French] ?? "").trim();
  const meaning = (row[columnIndex.English] ?? "").trim();
  const category = (row[columnIndex.Category] ?? "General Vocabulary").trim() || "General Vocabulary";
  const priority = toPriority(row[columnIndex["TCF Priority"]] ?? "");
  const structure = (row[columnIndex["Structure / Pattern"]] ?? "").trim();
  const example = (row[columnIndex["Example Sentence (FR)"]] ?? "").trim();
  const status = toStatus(row[columnIndex.Status] ?? "");

  if (!french || !meaning) {
    invalidRows.push({ source: "Notion vocabulary database", row: rowIndex + 2 });
    return;
  }

  addVocabularyItem({
    french,
    meaning,
    category,
    priority,
    structure,
    example: example || `Il est important de savoir utiliser « ${french} » dans un contexte naturel.`,
    translation: meaning,
    status,
    source: "Notion vocabulary database"
  });
});

extraVocabulary.forEach((word) => {
  addVocabularyItem({
    ...word,
    status: "New",
    source: "Manual TCF vocabulary batch",
    extraTags: ["manual-batch", "ladder", "word-family"],
    repairPrompt: `Use « ${word.french} » in one TCF-style sentence, then say it again with ${word.synonymLadder?.[0] ?? "a synonym"}.`
  });
});

nextVocabulary.forEach((word) => {
  addVocabularyItem({
    ...word,
    status: "New",
    source: "Manual TCF vocabulary batch 2",
    extraTags: ["manual-batch", "batch-2", "ladder", "word-family"],
    repairPrompt: `Use « ${word.french} » in one TCF-style sentence, then say it again with ${word.synonymLadder?.[0] ?? "a synonym"}.`
  });
});

thirdVocabulary.forEach((word) => {
  addVocabularyItem({
    ...word,
    status: "New",
    source: "Manual TCF vocabulary batch 3",
    extraTags: ["manual-batch", "batch-3", "ladder", "word-family"],
    repairPrompt: `Use « ${word.french} » in one TCF-style sentence, then say it again with ${word.synonymLadder?.[0] ?? "a synonym"}.`
  });
});

fourthVocabulary.forEach((word) => {
  addVocabularyItem({
    ...word,
    status: "New",
    source: "Manual TCF vocabulary batch 4",
    extraTags: ["manual-batch", "batch-4", "ladder", "word-family"],
    repairPrompt: `Use « ${word.french} » in one TCF-style sentence, then say it again with ${word.synonymLadder?.[0] ?? "a synonym"}.`
  });
});

const notionSource = "Notion vocabulary database";
const manualSourceOne = "Manual TCF vocabulary batch";
const manualSourceTwo = "Manual TCF vocabulary batch 2";
const manualSourceThree = "Manual TCF vocabulary batch 3";
const manualSourceFour = "Manual TCF vocabulary batch 4";
const countDuplicates = (sourceName) => duplicates.filter((duplicate) => duplicate.source === sourceName).length;
const countInvalid = (sourceName) => invalidRows.filter((row) => row.source === sourceName).length;
const notionAccepted = vocabulary.filter((word) => word.source === notionSource).length;
const manualAcceptedOne = vocabulary.filter((word) => word.source === manualSourceOne).length;
const manualAcceptedTwo = vocabulary.filter((word) => word.source === manualSourceTwo).length;
const manualAcceptedThree = vocabulary.filter((word) => word.source === manualSourceThree).length;
const manualAcceptedFour = vocabulary.filter((word) => word.source === manualSourceFour).length;

const literal = (value, indent = 2) => {
  const json = JSON.stringify(value, null, indent);
  return json
    .replace(/"dateAdded": "iso\((-?\d+)\)"/g, '"dateAdded": iso($1)')
    .replace(/"dueAt": "iso\((-?\d+)\)"/g, '"dueAt": iso($1)');
};

const output = `import type { ImportBatch, ReviewAttempt, VocabularyItem } from "../lib/types";

const today = new Date();
const iso = (offsetDays: number) => {
  const date = new Date(today);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString();
};

export const seedVocabulary: VocabularyItem[] = ${literal(vocabulary)};

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
    acceptedRows: ${notionAccepted},
    skippedDuplicates: ${countDuplicates(notionSource)},
    invalidRows: ${countInvalid(notionSource)}
  },
  {
    id: "manual-tcf-batch-001",
    source: "Manual TCF vocabulary batch",
    uploadDate: iso(0),
    acceptedRows: ${manualAcceptedOne},
    skippedDuplicates: ${countDuplicates(manualSourceOne)},
    invalidRows: ${countInvalid(manualSourceOne)}
  },
  {
    id: "manual-tcf-batch-002",
    source: "Manual TCF vocabulary batch 2",
    uploadDate: iso(0),
    acceptedRows: ${manualAcceptedTwo},
    skippedDuplicates: ${countDuplicates(manualSourceTwo)},
    invalidRows: ${countInvalid(manualSourceTwo)}
  },
  {
    id: "manual-tcf-batch-003",
    source: "Manual TCF vocabulary batch 3",
    uploadDate: iso(0),
    acceptedRows: ${manualAcceptedThree},
    skippedDuplicates: ${countDuplicates(manualSourceThree)},
    invalidRows: ${countInvalid(manualSourceThree)}
  },
  {
    id: "manual-tcf-batch-004",
    source: "Manual TCF vocabulary batch 4",
    uploadDate: iso(0),
    acceptedRows: ${manualAcceptedFour},
    skippedDuplicates: ${countDuplicates(manualSourceFour)},
    invalidRows: ${countInvalid(manualSourceFour)}
  }
];
`;

fs.writeFileSync(outputPath, output);

console.log(
  JSON.stringify(
    {
      inputPath,
      outputPath,
      acceptedRows: vocabulary.length,
      skippedDuplicates: duplicates.length,
      invalidRowCount: invalidRows.length,
      duplicatePreview: duplicates.slice(0, 10),
      invalidRowPreview: invalidRows.slice(0, 10)
    },
    null,
    2
  )
);
