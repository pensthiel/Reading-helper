// Expanded irregular / exception list (subset of target ~1000) for French children's books.
// Keys are lowercase letter-only forms (accents stripped); values arrays of silent letter indices.
export const IRREGULAR_FR = {
  // Pronoms / déterminants fréquents
  "ce": [], "cet": [2], "cette": [4], "cela": [], "ca": [], "ceci": [],
  "dans": [3], "sans": [3], "sous": [3], "tous": [3], "toutes": [5], "toute": [4],
  // Verbes (avoir / être)
  "ai": [], "as": [1], "a": [], "avons": [4], "avez": [3], "ont": [2],
  "suis": [3], "es": [1], "est": [2], "sommes": [5], "etes": [3], "sont": [3],
  // Verbes fréquents (inflections with -ent final silent handled also by rules but explicit for pedagogy)
  "parlent": [4,5,6], "mangent": [4,5,6], "aiment": [4,5,6], "vivent": [4,5,6],
  "donnent": [4,5,6], "prennent": [5,6,7], "finissent": [5,6,7],
  // Nom + adjectifs à consonne finale muette
  "grand": [4], "grands": [5], "petit": [4], "petits": [5],
  "beau": [3], "beaux": [4], "nouveau": [6], "nouveaux": [7],
  "vieux": [4], "faux": [3], "doux": [3], "long": [3], "longs": [3,4],
  // Nasales + consonne finale muette
  "pain": [3], "pains": [3], "main": [3], "mains": [3], "faim": [3], "faims": [3],
  "saint": [4], "sainte": [4], "tain": [3], "train": [4], "lapin": [4],
  // H muet
  "homme": [0], "histoire": [0], "hiver": [0], "heure": [0], "honte": [0], "habiter": [0], "heros": [0], "huit": [0],
  // X / S / T finaux muets
  "deux": [3], "trois": [4], "heureux": [5], "cheveux": [6], "yeux": [3], "eux": [2],
  "choix": [4], "fils": [3], "gris": [3], "tous": [3], "plus": [3], "moins": [4],
  // Clusters irréguliers
  "femme": [4], "monsieur": [6,7], "madame": [5],
  "beaucoup": [4,7], "doigt": [3], "doigts": [3], "poids": [3],
  "corps": [4], "temps": [2,3,4], "printemps": [6,7],
  // Mots avec lettres internes muettes
  "plomb": [4], "plombs": [4], "tabac": [4], "estomac": [6],
  // Digrammes avec e final muet (explicit to reinforce concept)
  "rouge": [4], "beige": [4], "neige": [4], "joue": [3], "pluie": [4],
  // Diphthong / morphèmes
  "oeuf": [3], "oeufs": [3], "coeur": [3], "soeur": [3], "oeil": [3],
  // Complexe multi-silencieux
  "aujourdhui": [6,7], // aujourd'hui -> d,h muets
  // Divers
  "parfum": [6], "parfums": [6], "fauteuil": [7], "beurre": [5],
  // Terminaisons -ent (déjà gérées par règle mais listées)
  "restent": [4,5,6], "marchent": [5,6,7],
  // Autres fréquents
  "bal": [2], "bals": [2,3], "chef": [3], "chefs": [4], "neuf": [3],
  // Mots outils supplémentaires
  "quelques": [7], "quelque": [7], "leurs": [4], "leurs": [4], "leurs": [4]
};
