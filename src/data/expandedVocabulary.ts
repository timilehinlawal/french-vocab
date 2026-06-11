import { createContextualExample, createContextualTranslation } from "../lib/examples";
import type { CefrLevel, Priority, VocabularyItem } from "../lib/types";

type IsoFactory = (offsetDays: number) => string;
type CurriculumRow = {
  french: string;
  meaning: string;
  level: CefrLevel;
  partOfSpeech: string;
  theme: string;
  priority?: Priority;
};

const rawRows = String.raw`
B1|un abonnement|subscription|word|daily life
B1|une adresse|address|word|daily life
B1|affiché|posted, displayed|word|daily life
B1|un agent|officer, agent|word|daily life
B1|un aller simple|one-way ticket|expression|travel
B1|un aller-retour|return ticket|expression|travel
B1|une annonce|announcement, advert|word|daily life
B1|un appareil|device, appliance|word|daily life
B1|l’argent liquide|cash|expression|daily life
B1|une assurance|insurance|word|administration
B1|une autorisation|authorisation|word|administration
B1|un avis|opinion, notice|word|daily life
B1|un bagagiste|porter|word|travel
B1|une boîte aux lettres|letterbox|expression|daily life
B1|un carnet|notebook, booklet|word|daily life
B1|une carte bancaire|bank card|expression|daily life
B1|une caisse|checkout, cash desk|word|daily life
B1|un changement d’adresse|change of address|expression|administration
B1|un chargeur|charger|word|technology
B1|un chauffage|heating|word|housing
B1|une clé USB|USB stick|expression|technology
B1|un commerce|shop, trade|word|daily life
B1|une commande|order|word|daily life
B1|un compte bancaire|bank account|expression|administration
B1|un conseiller|advisor|word|work
B1|une consigne|instruction, locker|word|travel
B1|un coût|cost|word|daily life
B1|un créneau|time slot|word|daily life
B1|une demande|request|word|administration
B1|un déplacement|journey, movement|word|travel
B1|un délai|deadline, delay|word|administration
B1|une dépense|expense|word|daily life
B1|un dépôt|deposit|word|administration
B1|une direction|direction, management|word|daily life
B1|un dossier|file, application|word|administration
B1|un échange|exchange|word|daily life
B1|un écran|screen|word|technology
B1|un emploi du temps|timetable|expression|education
B1|un entretien|interview, maintenance|word|work
B1|un envoi|shipment, sending|word|daily life
B1|une erreur|mistake|word|daily life
B1|une facture|invoice, bill|word|administration
B1|un frais|fee, cost|word|administration
B1|un guichet|counter, ticket office|word|daily life
B1|un horaire|schedule|word|daily life
B1|une imprimante|printer|word|technology
B1|une inscription|registration|word|education
B1|un justificatif|supporting document|word|administration
B1|un lieu de travail|workplace|expression|work
B1|une livraison|delivery|word|daily life
B1|une mairie|town hall|word|administration
B1|un moyen de paiement|payment method|expression|daily life
B1|une offre|offer|word|work
B1|un panneau|sign, panel|word|daily life
B1|un papier d’identité|identity document|expression|administration
B1|un permis|permit, licence|word|administration
B1|une pièce jointe|attachment|expression|technology
B1|un point de vue|point of view|expression|communication
B1|un pourboire|tip|word|daily life
B1|un reçu|receipt|word|daily life
B1|un remboursement|refund|word|administration
B1|un renseignement|information|word|administration
B1|une réservation|reservation, booking|word|travel
B1|une retraite|retirement|word|work
B1|un salaire|salary|word|work
B1|un séjour|stay|word|travel
B1|un service client|customer service|expression|work
B1|un signalement|report, notification|word|administration
B1|une solution|solution|word|daily life
B1|un tarif|rate, fare|word|daily life
B1|un téléchargement|download|word|technology
B1|un témoin|witness|word|daily life
B1|un trajet domicile-travail|commute|expression|work
B1|un virement|bank transfer|word|administration
B1|abîmer|to damage|verb|daily life
B1|annuler|to cancel|verb|daily life
B1|apercevoir|to notice, glimpse|verb|daily life
B1|apporter une preuve|to provide proof|expression|administration
B1|baisser|to lower, decrease|verb|daily life
B1|brancher|to plug in|verb|technology
B1|charger un appareil|to charge a device|expression|technology
B1|cocher une case|to tick a box|expression|administration
B1|confirmer|to confirm|verb|administration
B1|débrancher|to unplug|verb|technology
B1|déposer un dossier|to submit an application|expression|administration
B1|emprunter|to borrow|verb|daily life
B1|envoyer|to send|verb|technology
B1|éviter|to avoid|verb|daily life
B1|joindre un document|to attach a document|expression|administration
B1|noter|to note down|verb|education
B1|prévenir|to warn, inform|verb|daily life
B1|proposer|to suggest, offer|verb|communication
B1|ranger|to tidy, put away|verb|daily life
B1|refuser|to refuse|verb|communication
B1|rembourser|to refund|verb|administration
B1|remplacer|to replace|verb|daily life
B1|remplir un formulaire|to fill in a form|expression|administration
B1|renvoyer|to send back|verb|administration
B1|réparer|to repair|verb|daily life
B1|réserver|to book, reserve|verb|travel
B1|retirer de l’argent|to withdraw money|expression|administration
B1|signer|to sign|verb|administration
B1|télécharger|to download|verb|technology
B1|valider|to validate|verb|administration
B1|vérifier|to check|verb|daily life
B1|actif / active|active|word|work
B1|agréable|pleasant|word|daily life
B1|complet / complète|complete, full|word|daily life
B1|déçu / déçue|disappointed|word|feelings
B1|efficace|effective|word|work
B1|en retard|late|expression|daily life
B1|gratuit / gratuite|free|word|daily life
B1|indispensable|essential|word|daily life
B1|occupé / occupée|busy|word|daily life
B1|pratique|convenient, practical|word|daily life
B1|prévu / prévue|planned|word|daily life
B1|propre|clean, own|word|daily life
B1|régulier / régulière|regular|word|daily life
B1|sérieux / sérieuse|serious|word|work
B1|urgent / urgente|urgent|word|daily life
B2|un accès équitable|fair access|expression|society
B2|une amélioration durable|lasting improvement|expression|society
B2|un avantage concurrentiel|competitive advantage|expression|work
B2|une baisse significative|significant decrease|expression|economy
B2|un cadre juridique|legal framework|expression|society
B2|un changement profond|deep change|expression|society
B2|une charge mentale|mental load|expression|society
B2|une cohésion sociale|social cohesion|expression|society
B2|un compromis réaliste|realistic compromise|expression|argumentation
B2|une condition préalable|prerequisite|expression|argumentation
B2|une conséquence directe|direct consequence|expression|argumentation
B2|une contrainte budgétaire|budget constraint|expression|economy
B2|un coût caché|hidden cost|expression|economy
B2|une crise du logement|housing crisis|expression|society
B2|un débat public|public debate|expression|society
B2|un décalage|gap, mismatch|word|society
B2|une démarche volontaire|voluntary approach|expression|work
B2|une dépendance excessive|excessive dependence|expression|society
B2|une difficulté majeure|major difficulty|expression|argumentation
B2|un dispositif|scheme, system|word|society
B2|un équilibre fragile|fragile balance|expression|argumentation
B2|un facteur déterminant|decisive factor|expression|argumentation
B2|une hausse progressive|gradual increase|expression|economy
B2|une inégalité persistante|persistent inequality|expression|society
B2|une initiative locale|local initiative|expression|society
B2|une mesure efficace|effective measure|expression|society
B2|un obstacle majeur|major obstacle|expression|argumentation
B2|une opportunité|opportunity|word|work
B2|un partenariat|partnership|word|work
B2|une pénurie|shortage|word|economy
B2|une perspective|perspective, outlook|word|argumentation
B2|une pression sociale|social pressure|expression|society
B2|une prise de conscience|awareness|expression|society
B2|une réforme ambitieuse|ambitious reform|expression|society
B2|une responsabilité collective|collective responsibility|expression|society
B2|une restriction|restriction|word|society
B2|une stratégie à long terme|long-term strategy|expression|argumentation
B2|une transition écologique|ecological transition|expression|environment
B2|une valeur ajoutée|added value|expression|work
B2|accélérer la transition|to accelerate the transition|expression|environment
B2|adopter une mesure|to adopt a measure|expression|argumentation
B2|améliorer l’accès|to improve access|expression|society
B2|anticiper les risques|to anticipate risks|expression|work
B2|attirer l’attention sur|to draw attention to|expression|argumentation
B2|concilier deux objectifs|to reconcile two goals|expression|argumentation
B2|dégager une tendance|to identify a trend|expression|argumentation
B2|encourager la participation|to encourage participation|expression|society
B2|évaluer l’impact|to assess the impact|expression|argumentation
B2|faire face à|to face, deal with|expression|argumentation
B2|limiter les effets|to limit the effects|expression|argumentation
B2|mettre en œuvre|to implement|expression|work
B2|prendre en considération|to take into consideration|expression|argumentation
B2|renforcer la confiance|to strengthen trust|expression|society
B2|répondre aux besoins|to meet needs|expression|society
B2|soulever une question|to raise a question|expression|argumentation
B2|tenir compte de|to take into account|expression|argumentation
B2|vulnérable|vulnerable|word|society
B2|durable|sustainable, lasting|word|environment
B2|pertinent / pertinente|relevant|word|argumentation
B2|prévisible|predictable|word|argumentation
B2|rentable|profitable|word|economy
B2|souple|flexible|word|work
C1|à cet égard|in this respect|connector|argumentation
C1|à long terme|in the long term|connector|argumentation
C1|à supposer que|assuming that|connector|argumentation
C1|au-delà de cet aspect|beyond this aspect|connector|argumentation
C1|bien que cela paraisse évident|although this seems obvious|connector|argumentation
C1|cela étant dit|that being said|connector|argumentation
C1|d’autant plus que|all the more so because|connector|argumentation
C1|dans une certaine mesure|to some extent|connector|argumentation
C1|de façon nuancée|in a nuanced way|expression|argumentation
C1|en dépit de|despite|connector|argumentation
C1|en l’occurrence|in this case|connector|argumentation
C1|en revanche|on the other hand|connector|argumentation
C1|il convient de souligner que|it should be emphasized that|connector|argumentation
C1|il n’en demeure pas moins que|nevertheless|connector|argumentation
C1|loin d’être négligeable|far from negligible|expression|argumentation
C1|non seulement..., mais encore|not only..., but also|connector|argumentation
C1|pour autant|nevertheless, for all that|connector|argumentation
C1|quoi qu’il en soit|in any case|connector|argumentation
C1|sans pour autant|without necessarily|connector|argumentation
C1|sous réserve que|provided that|connector|argumentation
C1|tandis que|whereas|connector|argumentation
C1|un aboutissement|outcome, culmination|word|argumentation
C1|une acuité|sharpness, intensity|word|argumentation
C1|une ambivalence|ambivalence|word|argumentation
C1|une ambiguïté|ambiguity|word|argumentation
C1|une aspiration|aspiration|word|society
C1|une asymétrie|asymmetry|word|argumentation
C1|une atteinte à|infringement of|expression|society
C1|une causalité|causality|word|argumentation
C1|une complexité croissante|growing complexity|expression|argumentation
C1|une concession|concession|word|argumentation
C1|une conjoncture|economic climate, circumstances|word|economy
C1|une contradiction apparente|apparent contradiction|expression|argumentation
C1|un contre-argument|counterargument|word|argumentation
C1|une défaillance|failure, weakness|word|society
C1|un dilemme|dilemma|word|argumentation
C1|une dissociation|separation, dissociation|word|argumentation
C1|une divergence|divergence, disagreement|word|argumentation
C1|un écueil|pitfall|word|argumentation
C1|une émancipation|emancipation|word|society
C1|une entrave|obstacle, hindrance|word|society
C1|une exigence accrue|increased requirement|expression|society
C1|une fracture sociale|social divide|expression|society
C1|une hiérarchie implicite|implicit hierarchy|expression|society
C1|une hypothèse plausible|plausible hypothesis|expression|argumentation
C1|une incidence|impact, effect|word|argumentation
C1|une injonction|injunction, pressure|word|society
C1|une légitimité|legitimacy|word|society
C1|une marge de manœuvre|room for manoeuvre|expression|argumentation
C1|une mutation profonde|deep transformation|expression|society
C1|une norme implicite|implicit norm|expression|society
C1|une portée symbolique|symbolic significance|expression|argumentation
C1|un préalable|precondition|word|argumentation
C1|une répercussion|repercussion|word|argumentation
C1|une résilience|resilience|word|society
C1|une rupture|break, rupture|word|argumentation
C1|une subtilité|subtlety|word|argumentation
C1|une tension sous-jacente|underlying tension|expression|argumentation
C1|une trajectoire|trajectory|word|argumentation
C1|une viabilité|viability|word|argumentation
C1|arbitrer entre|to arbitrate between|expression|argumentation
C1|circonscrire|to circumscribe, delimit|verb|argumentation
C1|corroborer|to corroborate|verb|argumentation
C1|déconstruire|to deconstruct|verb|argumentation
C1|découler de|to stem from|expression|argumentation
C1|élucider|to elucidate|verb|argumentation
C1|mettre en exergue|to highlight|expression|argumentation
C1|nuancer son propos|to qualify one's point|expression|argumentation
C1|préconiser|to recommend, advocate|verb|argumentation
C1|relativiser|to put into perspective|verb|argumentation
C1|remédier à|to remedy|expression|argumentation
C1|s’avérer|to turn out to be|verb|argumentation
C1|se heurter à|to come up against|expression|argumentation
C1|sous-estimer|to underestimate|verb|argumentation
C1|transposer|to transpose, apply elsewhere|verb|argumentation
C1|voire|even, indeed|connector|argumentation
`;

const iserRows = [
  ["actual", "update", "B2", "work"],
  ["banal", "trivialize", "B2", "society"],
  ["central", "centralize", "B2", "society"],
  ["commercial", "market", "B2", "work"],
  ["concrét", "make concrete", "B2", "argumentation"],
  ["crédibil", "make credible", "C1", "argumentation"],
  ["décentral", "decentralize", "B2", "society"],
  ["dédramatis", "defuse the drama", "B2", "communication"],
  ["démocratis", "democratize", "B2", "society"],
  ["démoralis", "demoralize", "B2", "feelings"],
  ["déresponsabil", "remove responsibility", "C1", "society"],
  ["digital", "digitalize", "B2", "technology"],
  ["divers", "diversify", "B2", "work"],
  ["fragil", "weaken", "B2", "society"],
  ["général", "generalize", "B2", "argumentation"],
  ["harmon", "harmonize", "C1", "society"],
  ["hiérarch", "prioritize, rank", "C1", "argumentation"],
  ["individual", "individualize", "C1", "society"],
  ["instrumental", "instrumentalize", "C1", "argumentation"],
  ["légitim", "legitimize", "C1", "society"],
  ["marginal", "marginalize", "B2", "society"],
  ["maxim", "maximize", "B2", "work"],
  ["minim", "minimize", "B2", "argumentation"],
  ["modern", "modernize", "B2", "society"],
  ["mondial", "globalize", "C1", "society"],
  ["mobil", "mobilize", "B2", "society"],
  ["moral", "moralize", "C1", "argumentation"],
  ["mutual", "pool, mutualize", "C1", "work"],
  ["normal", "normalize", "B2", "society"],
  ["numér", "digitize", "B2", "technology"],
  ["optim", "optimize", "B2", "work"],
  ["organ", "organize", "B1", "work"],
  ["personnal", "personalize", "B2", "technology"],
  ["polar", "polarize", "C1", "society"],
  ["professionnal", "professionalize", "B2", "work"],
  ["radical", "radicalize", "C1", "society"],
  ["rational", "rationalize", "C1", "work"],
  ["responsabil", "make responsible", "B2", "society"],
  ["rentabil", "make profitable", "B2", "economy"],
  ["sécur", "secure", "B2", "society"],
  ["social", "socialize", "B2", "society"],
  ["spécial", "specialize", "B2", "work"],
  ["stabil", "stabilize", "B2", "society"],
  ["standard", "standardize", "B2", "work"],
  ["théâtralis", "dramatize", "C1", "communication"],
  ["uniform", "standardize, make uniform", "C1", "society"],
  ["valor", "value, enhance", "B2", "work"],
  ["visual", "visualize", "B2", "technology"]
] as const;

const ifierRows = [
  ["ampl", "amplify", "B2", "argumentation"],
  ["authent", "authenticate", "C1", "administration"],
  ["cert", "certify", "B2", "administration"],
  ["clar", "clarify", "B2", "argumentation"],
  ["class", "classify", "B2", "work"],
  ["cod", "codify", "C1", "society"],
  ["complex", "make more complex", "C1", "argumentation"],
  ["divers", "diversify", "B2", "work"],
  ["fort", "strengthen", "B2", "society"],
  ["ident", "identify", "B1", "work"],
  ["intens", "intensify", "B2", "argumentation"],
  ["just", "justify", "B2", "argumentation"],
  ["mod", "modify", "B1", "work"],
  ["notif", "notify", "B2", "technology"],
  ["pac", "pacify", "C1", "society"],
  ["plan", "plan", "B1", "work"],
  ["qual", "qualify", "B2", "argumentation"],
  ["quant", "quantify", "C1", "argumentation"],
  ["rect", "rectify", "B2", "work"],
  ["sign", "mean, signify", "B2", "argumentation"],
  ["simpl", "simplify", "B2", "communication"],
  ["solid", "solidify", "C1", "argumentation"],
  ["spéc", "specify", "B2", "argumentation"],
  ["un", "unify", "C1", "society"],
  ["vér", "verify", "B1", "administration"]
] as const;

const nounRows = String.raw`
B1|une amélioration|improvement|word|work
B1|une candidature|application, candidacy|word|work
B1|une comparaison|comparison|word|education
B1|une découverte|discovery|word|education
B1|une explication|explanation|word|education
B1|une invitation|invitation|word|daily life
B1|une obligation|obligation|word|administration
B1|une préparation|preparation|word|education
B1|une progression|progress|word|education
B1|une proposition|proposal, suggestion|word|communication
B2|une adaptation|adaptation|word|society
B2|une allocation|benefit, allowance|word|society
B2|une autonomie|autonomy|word|society
B2|une biodiversité|biodiversity|word|environment
B2|une concertation|consultation|word|society
B2|une crédibilité|credibility|word|argumentation
B2|une décroissance|degrowth|word|economy
B2|une exclusion|exclusion|word|society
B2|une inclusion|inclusion|word|society
B2|une mobilité|mobility|word|society
B2|une neutralité|neutrality|word|argumentation
B2|une précarité|precariousness|word|society
B2|une prévention|prevention|word|health
B2|une proximité|proximity|word|society
B2|une réglementation|regulation|word|society
B2|une sensibilisation|awareness-raising|word|environment
B2|une transparence|transparency|word|society
B2|un accompagnement|support, guidance|word|society
B2|un assouplissement|relaxation, easing|word|society
B2|un basculement|shift, tipping point|word|society
B2|un dérèglement|disruption, imbalance|word|environment
B2|un engagement|commitment|word|society
B2|un financement|funding|word|economy
B2|un ralentissement|slowdown|word|economy
C1|une aliénation|alienation|word|society
C1|une ambivalence|ambivalence|word|argumentation
C1|une corrélation|correlation|word|argumentation
C1|une dichotomie|dichotomy|word|argumentation
C1|une dissonance|dissonance|word|argumentation
C1|une hégémonie|hegemony|word|society
C1|une inertie|inertia|word|argumentation
C1|une irréversibilité|irreversibility|word|argumentation
C1|une obsolescence|obsolescence|word|technology
C1|une pérennité|sustainability, durability|word|argumentation
C1|une prépondérance|predominance|word|argumentation
C1|une réciprocité|reciprocity|word|society
C1|une transversalité|cross-cutting nature|word|work
C1|un ancrage|rooting, anchoring|word|society
C1|un clivage|divide, split|word|society
C1|un corollaire|corollary|word|argumentation
C1|un désaveu|disavowal, rejection|word|argumentation
C1|un impératif|imperative|word|argumentation
C1|un levier|lever, driver|word|argumentation
C1|un paradoxe|paradox|word|argumentation
C1|un postulat|premise, assumption|word|argumentation
C1|un renoncement|renunciation|word|argumentation
C1|un revirement|reversal, change of stance|word|argumentation
C1|un socle|foundation|word|argumentation
`;

const supplementalRows = String.raw`
B2|une empreinte carbone|carbon footprint|expression|environment
B2|un bilan mitigé|mixed results|expression|argumentation
B2|un bénévolat|volunteering|word|society
B2|une concertation citoyenne|citizen consultation|expression|society
B2|une consommation responsable|responsible consumption|expression|environment
B2|un covoiturage|carpooling|word|environment
B2|un critère essentiel|essential criterion|expression|argumentation
B2|un décrochage scolaire|school dropout|expression|education
B2|une démarche inclusive|inclusive approach|expression|society
B2|un diagnostic précis|precise diagnosis|expression|argumentation
B2|un effet pervers|perverse effect, unintended consequence|expression|argumentation
B2|une énergie renouvelable|renewable energy|expression|environment
B2|une évolution rapide|rapid development|expression|society
B2|une fiscalité|tax system|word|economy
B2|une formation continue|continuing education|expression|work
B2|une gestion durable|sustainable management|expression|environment
B2|une fracture numérique|digital divide|expression|technology
B2|une main-d’œuvre|workforce|word|work
B2|une mise à jour|update|expression|technology
B2|un niveau de vie|standard of living|expression|society
B2|une nuisance sonore|noise pollution|expression|environment
B2|un pouvoir d’achat|purchasing power|expression|economy
B2|une protection sociale|social protection|expression|society
B2|un réseau professionnel|professional network|expression|work
B2|une surcharge de travail|work overload|expression|work
B2|une zone rurale|rural area|expression|society
B2|accorder la priorité à|to give priority to|expression|argumentation
B2|adapter son discours|to adapt one's speech|expression|communication
B2|atténuer les tensions|to ease tensions|expression|communication
B2|combler un écart|to bridge a gap|expression|society
B2|démontrer l’efficacité|to demonstrate effectiveness|expression|argumentation
B2|dépasser les limites|to exceed the limits|expression|argumentation
B2|favoriser l’inclusion|to promote inclusion|expression|society
B2|mesurer les progrès|to measure progress|expression|work
B2|réduire les dépenses|to reduce spending|expression|economy
B2|soutenir l’innovation|to support innovation|expression|work
B2|tenir un engagement|to keep a commitment|expression|society
C1|une aporie|deadlock, unresolved contradiction|word|argumentation
C1|une bienséance|propriety, decorum|word|society
C1|une coercition|coercion|word|society
C1|une connivence|collusion, tacit understanding|word|society
C1|une déconvenue|setback, disappointment|word|argumentation
C1|une délibération|deliberation|word|argumentation
C1|un désenchantement|disillusionment|word|society
C1|une discontinuité|discontinuity|word|argumentation
C1|une emprise|hold, grip, influence|word|society
C1|un engouement|enthusiasm, craze|word|society
C1|une équivoque|ambiguity, equivocation|word|argumentation
C1|un hermétisme|opacity, impenetrability|word|argumentation
C1|une hétéronomie|external control, heteronomy|word|argumentation
C1|une imbrication|overlap, interweaving|word|argumentation
C1|une impartialité|impartiality|word|society
C1|une inconsistance|inconsistency, lack of substance|word|argumentation
C1|une inflexion|shift, inflection|word|argumentation
C1|une ingérence|interference|word|society
C1|une lisibilité|readability, clarity|word|argumentation
C1|une lucidité|clear-sightedness|word|argumentation
C1|une méritocratie|meritocracy|word|society
C1|une opacité|opacity, lack of transparency|word|society
C1|une partialité|bias, partiality|word|argumentation
C1|une péremption|expiry, obsolescence|word|administration
C1|une perspicacité|insight, perceptiveness|word|argumentation
C1|une primauté|primacy|word|argumentation
C1|une réticence|reluctance|word|argumentation
C1|une révocation|dismissal, revocation|word|administration
C1|une sédentarité|sedentary lifestyle|word|health
C1|une ségrégation|segregation|word|society
C1|une souveraineté|sovereignty|word|society
C1|une stigmatisation|stigmatization|word|society
C1|une surenchère|one-upmanship, escalation|word|argumentation
C1|une tacite acceptation|tacit acceptance|expression|argumentation
C1|une temporalité|temporality, time frame|word|argumentation
C1|une versatilité|changeability|word|argumentation
C1|un amalgame|conflation|word|argumentation
C1|un arbitrage délicat|delicate trade-off|expression|argumentation
C1|un biais cognitif|cognitive bias|expression|argumentation
C1|un consentement éclairé|informed consent|expression|society
C1|un discernement|discernment|word|argumentation
C1|un dogmatisme|dogmatism|word|argumentation
C1|un écart manifeste|clear discrepancy|expression|argumentation
C1|un enchevêtrement|entanglement|word|argumentation
C1|un épiphénomène|side effect, epiphenomenon|word|argumentation
C1|un faisceau d’indices|body of evidence|expression|argumentation
C1|un garde-fou|safeguard|word|society
C1|un immobilisme|stagnation|word|society
C1|un infléchissement|shift, adjustment|word|argumentation
C1|un legs|legacy|word|society
C1|un parti pris|bias|expression|argumentation
C1|un présupposé|assumption, presupposition|word|argumentation
C1|un prisme|lens, prism|word|argumentation
C1|un rapprochement conceptuel|conceptual connection|expression|argumentation
C1|un recul critique|critical distance|expression|argumentation
C1|un référentiel|frame of reference|word|argumentation
C1|un seuil critique|critical threshold|expression|argumentation
C1|un soubassement|underlying basis|word|argumentation
C1|un telos|purpose, final aim|word|argumentation
C1|accréditer|to lend credibility to|verb|argumentation
C1|assujettir|to subject, subjugate|verb|society
C1|cautionner|to endorse|verb|argumentation
C1|circonscrire le débat|to delimit the debate|expression|argumentation
C1|contrecarrer|to thwart|verb|argumentation
C1|déceler|to detect|verb|argumentation
C1|décrypter|to decipher, decode|verb|argumentation
C1|déroger à|to depart from, derogate from|expression|argumentation
C1|discréditer|to discredit|verb|argumentation
C1|éluder|to evade, avoid|verb|argumentation
C1|exacerber|to exacerbate|verb|argumentation
C1|extrapoler|to extrapolate|verb|argumentation
C1|faire abstraction de|to disregard, abstract away from|expression|argumentation
C1|infléchir|to bend, alter|verb|argumentation
C1|objecter que|to object that|connector|argumentation
C1|occulter|to obscure, conceal|verb|argumentation
C1|pallier|to remedy, compensate for|verb|argumentation
C1|pérenniser|to make lasting|verb|society
C1|récuser|to challenge, reject|verb|argumentation
C1|réhabiliter|to rehabilitate, restore|verb|society
C1|restituer|to restore, give back|verb|argumentation
C1|se prévaloir de|to claim, invoke|expression|argumentation
C1|subordonner à|to subordinate to|expression|argumentation
C1|supplanter|to supplant|verb|society
C1|tergiverser|to procrastinate, equivocate|verb|argumentation
C1|abouti / aboutie|fully developed, accomplished|word|argumentation
C1|ambivalent / ambivalente|ambivalent|word|argumentation
C1|concomitant / concomitante|concomitant|word|argumentation
C1|disparate|disparate|word|argumentation
C1|insidieux / insidieuse|insidious|word|argumentation
C1|irréfutable|irrefutable|word|argumentation
C1|lacunaire|incomplete, full of gaps|word|argumentation
C1|manifeste|obvious, clear|word|argumentation
C1|plausible|plausible|word|argumentation
C1|prépondérant / prépondérante|predominant|word|argumentation
C1|récurrent / récurrente|recurring|word|argumentation
C1|subsidiaire|subsidiary, secondary|word|argumentation
C1|tangible|tangible|word|argumentation
C1|transversal / transversale|cross-cutting|word|work
C1|vraisemblable|likely, plausible|word|argumentation
`;

const normalizeTerm = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s*[,/]\s*/g, " ")
    .replace(/\s+/g, " ")
    .replace(/^(un|une|le|la|les|l')\s+/, "");

const slugifyTerm = (value: string) =>
  normalizeTerm(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const parseRows = (rows: string): CurriculumRow[] =>
  rows
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [level, french, meaning, partOfSpeech, theme] = line.split("|");
      return {
        french,
        meaning,
        level: level as CefrLevel,
        partOfSpeech,
        theme,
        priority: level === "C1" ? "High" : level === "B2" ? "Medium" : "Low"
      };
    });

const baseVerb = (value: string) => value.split(",")[0].trim();
const toGerund = (value: string) => {
  const verb = baseVerb(value);
  if (verb.startsWith("make ")) return `making ${verb.replace(/^make\s+/, "")}`;
  if (verb.endsWith("ie")) return `${verb.slice(0, -2)}ying`;
  if (verb.endsWith("e") && !verb.endsWith("ee")) return `${verb.slice(0, -1)}ing`;
  if (verb === "plan") return "planning";
  return `${verb}ing`;
};

const toPastParticiple = (value: string) => {
  const verb = baseVerb(value);
  if (verb.startsWith("make ")) return `made ${verb.replace(/^make\s+/, "")}`;
  if (verb === "mean") return "meant";
  if (verb === "plan") return "planned";
  if (verb.endsWith("ify")) return `${verb.slice(0, -3)}ified`;
  if (verb.endsWith("ize")) return `${verb.slice(0, -3)}ized`;
  if (verb.endsWith("e")) return `${verb}d`;
  return `${verb}ed`;
};

const generatedRows = (): CurriculumRow[] => [
  ...iserRows.flatMap(([stem, english, level, theme]) => [
    { french: `${stem}iser`, meaning: `to ${english}`, level: level as CefrLevel, partOfSpeech: "verb", theme, priority: (level === "C1" ? "High" : "Medium") as Priority },
    { french: `${stem}isation`, meaning: `process of ${toGerund(english)}`, level: level as CefrLevel, partOfSpeech: "word", theme, priority: (level === "C1" ? "High" : "Medium") as Priority },
    { french: `${stem}isé / ${stem}isée`, meaning: toPastParticiple(english), level: level as CefrLevel, partOfSpeech: "word", theme, priority: (level === "C1" ? "High" : "Medium") as Priority }
  ]),
  ...ifierRows.flatMap(([stem, english, level, theme]) => [
    { french: `${stem}ifier`, meaning: `to ${english}`, level: level as CefrLevel, partOfSpeech: "verb", theme, priority: (level === "C1" ? "High" : "Medium") as Priority },
    { french: `${stem}ification`, meaning: `process of ${toGerund(english)}`, level: level as CefrLevel, partOfSpeech: "word", theme, priority: (level === "C1" ? "High" : "Medium") as Priority },
    { french: `${stem}ifié / ${stem}ifiée`, meaning: toPastParticiple(english), level: level as CefrLevel, partOfSpeech: "word", theme, priority: (level === "C1" ? "High" : "Medium") as Priority }
  ])
];

const allRows = [...parseRows(rawRows), ...parseRows(nounRows), ...parseRows(supplementalRows), ...generatedRows()];

export const createExpandedVocabulary = (iso: IsoFactory, existing: VocabularyItem[], targetTotal = 1500): VocabularyItem[] => {
  const seen = new Set(existing.map((word) => normalizeTerm(word.french)));
  const output: VocabularyItem[] = [];

  allRows.forEach((row) => {
    if (existing.length + output.length >= targetTotal) return;
    const key = normalizeTerm(row.french);
    if (!key || seen.has(key)) return;
    seen.add(key);

    const example = createContextualExample(row);
    const translation = createContextualTranslation(row);
    const id = `tcf-expansion-${slugifyTerm(row.french)}`;

    output.push({
      id,
      french: row.french,
      meaning: row.meaning,
      category: "TCF Expansion",
      level: row.level,
      partOfSpeech: row.partOfSpeech,
      example,
      translation,
      structures: [`${row.french} en contexte`],
      tcfPriority: row.priority ?? "Medium",
      status: "New",
      dateAdded: iso(-1),
      source: "TCF expansion curriculum",
      tags: ["tcf-expansion", row.level.toLowerCase(), row.theme],
      synonymLadder: [],
      wordFamily: [],
      repairPrompt: `Use « ${row.french} » in one TCF-style sentence, then say it again with a synonym.`,
      dueAt: iso(0),
      successStreak: 0,
      lapses: 0,
      meaningConfirmed: true
    });
  });

  return output;
};
