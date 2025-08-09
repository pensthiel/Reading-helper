export const PHONICS = {
  fr: {
    colored: [
      { match: "ou", cls: "ph1" },
      { match: "on", cls: "ph2" },
      { match: "an", cls: "ph3" },
      { match: "in", cls: "ph4" },
      { match: "ai", cls: "ph5" },
      { match: "oi", cls: "ph6" }
    ],
    silentWords: {
      // H muet
      "homme":[0],"histoire":[0],"hiver":[0],"heure":[0],"haut":[0],
      "honte":[0],"habiter":[0],"hôpital":[0],"héros":[0],"huit":[0],
      // Consonne finale muette
      "grand":[4],"petit":[4],"froid":[4],"vent":[3],"chant":[4],
      "long":[3],"court":[4],"haut":[3],"fort":[3],"grand":[4],
      // ent muet (verbes fréquents)
      "mangent":[5,6,7],"parlent":[5,6,7],"aiment":[5,6,7],"vivent":[5,6,7],
      "prennent":[6,7,8],"finissent":[6,7,8],"donnent":[5,6,7],"trouvent":[6,7,8],
      "restent":[5,6,7],"marchent":[6,7,8],
      // p muet
      "beaucoup":[6,7],"temps":[4],"compter":[4],"rompt":[3],"prompt":[4],
      // s muet
      "fils":[3],"tous":[3],"plus":[3],"moins":[4],"gris":[3],
      // x muet
      "deux":[4],"heureux":[5],"vieux":[4],"cheveux":[6],"doux":[3],
      // t muet
      "faut":[4],"exact":[5],"respect":[6],"aspect":[5],"est":[3],
      // e muet final
      "jeune":[5],"bleue":[4],"verte":[4],"belle":[4],"noire":[4],
      "petite":[6],"grande":[6],"chaude":[5],"froide":[5],"claire":[5],
      // Autres fréquents avec lettres muettes
      "femme":[4],"monsieur":[6,7],"madame":[6],"beaux":[4],
      "oeuf":[3],"oeufs":[3],"soeur":[3],"coeur":[3],
      "doigt":[3],"doigts":[3],"poids":[3],"faon":[3],"paon":[3],
      "tabac":[4],"estomac":[6],"secours":[6],"beurre":[6],"neuf":[3],
      "oeuvre":[3],"plomb":[4],"plombe":[4],"plombé":[4],"plombs":[4],
      "lait":[3],"laits":[3],"mets":[3],"met":[3],"fait":[3],
      "fais":[3],"faites":[3],"sait":[3],"tais":[3],"taisez":[3],
      "nez":[2],"nezs":[2],"riz":[2],"rizs":[2],"gaz":[2],
      "nez":[2],"nezs":[2],"nez":[2],"nezs":[2],
      "parfum":[6],"parfums":[6],"bal":[3],"bals":[3],"chef":[3],
      "chefs":[3],"œil":[3],"yeux":[3],"oeil":[3],"yeux":[3],
      "noix":[3],"noixs":[3],"poix":[3],"choix":[4],"choixs":[4],
      "croix":[4],"croixs":[4],"voix":[3],"voixs":[3],
      "paix":[3],"paixs":[3],"prix":[3],"prixs":[3],
      "corps":[4],"corpss":[4],"camp":[3],"camps":[3],"champ":[4],
      "champs":[4],"temps":[4],"printemps":[7],"dix":[2],"dixs":[2],
      "six":[2],"sixs":[2],"sept":[3],"septembre":[3],
      "juin":[3],"août":[2,3],"saint":[4],"sainte":[4],
      "faim":[3],"faims":[3],"pain":[3],"pains":[3],"main":[3],
      "mains":[3],"gros":[3],"grosses":[3],"petits":[4],
      "grands":[4],"petites":[4],"grandes":[4]
    }
  }
};