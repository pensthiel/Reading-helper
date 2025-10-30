export const PHONICS = {
  fr: {
    // Phoneme groups: sound symbol -> array of grapheme patterns.
    // These will be assigned colors dynamically (same sound => same color).
    soundGroups: {
      "u": ["ou", "où"],
      "ɔ̃": ["on", "om"],
      "ɑ̃": ["an", "en", "am", "em"],
      "ɛ̃": ["in", "im", "ain", "ein", "aim", "eim", "yn", "ym"],
      "e": ["ai", "é", "er"],
      "wa": ["oi"],
      "o": ["eau", "eaux", "au", "aux"],
      "œ̃": ["un", "um"],
      "f": ["ph"],
      "ɲ": ["gn"],
      "ij": ["ill"],
      "j": ["ge", "gi"],
      "ʃ": ["ch"],
      "s": ["ss"],
      "k": ["qu", "c"],
      "ɡ": ["gu"],
      "y": ["y"],
      "ø": ["eu", "oeu"],
      "ə": ["e"],
      "ɛ": ["ai", "ei"],
      "oɛ": ["oi"]
    },
    soundPalette: {
      "u": "sound-fr-ou",
      "o": "sound-fr-au",
      "ɑ̃": "sound-fr-en",
      "ɛ̃": "sound-fr-in",
      "œ̃": "sound-fr-in",
      "ɔ̃": "sound-fr-on"
    },
    silentWords: {
  // NOTE: indices are 0-based positions within the letters-only form (accents stripped).
  // Core very high-frequency function words / pronouns with a single silent final consonant
  "ils":[2],"elles":[4],"nous":[3],"vous":[3],"dans":[3],"sans":[3],
  "sont":[3],"ont":[2],"est":[2],"es":[1],"sommes":[5],"etes":[3], // êtes -> etes
  "suis":[3],"fait":[3],"fais":[3],"sait":[3],"mais":[3],"quand":[4],"dont":[3],
  // H muet (initial h not pronounced)
  "homme":[0],"histoire":[0],"hiver":[0],"heure":[0],"honte":[0],"habiter":[0],"heros":[0],"huit":[0],
  // Common final silent consonants
  "grand":[4],"petit":[4],"petits":[5],"grands":[5],
  "froid":[4],"vent":[3],"chant":[4],"long":[3],"longs":[3,4],"court":[4],"fort":[3],
  "beau":[3],"beaux":[4],"vieux":[4],"doux":[3],"faux":[3],
  // Nasal + final consonant dropped
  "pain":[3],"pains":[3],"main":[3],"mains":[3],"faim":[3],"faims":[3],"saint":[4],"sainte":[4],"juin":[3],
  // Final -t silent
  "faut":[3],"tout":[3],"haut":[3],"exact":[4],"aspect":[5],"respect":[6],
  // Verb endings -ent (all three letters silent)
  "mangent":[4,5,6],"parlent":[4,5,6],"aiment":[4,5,6],"vivent":[4,5,6],
  "prennent":[5,6,7],"finissent":[5,6,7],"donnent":[4,5,6],"trouvent":[5,6,7],
  "restent":[4,5,6],"marchent":[5,6,7],
  // Final -p silent or internal cluster letters
  "beaucoup":[4,7],"drap":[3],"loup":[3],"trop":[3],
  // Final -s silent (already many above); add some determiners / adverbs
  "tous":[3],"plus":[3],"tres":[3],"moins":[4],"gris":[3],"autres":[5],
  // Final -x silent
  "deux":[3],"heureux":[5],"cheveux":[6],"eux":[2],"aux":[2],"eaux":[3],
  // Final -d silent
  "chaud":[4],"froid":[4],"quand":[4],
  // Final -g (before n) silent already covered by "long"; add plurals above.
  // Misc frequent irregulars / silent clusters
  "femme":[4],"monsieur":[6,7],"madame":[5],"oeuf":[3],"oeufs":[3],
  "coeur":[3],"soeur":[3],"oeil":[3],"yeux":[3],
  "doigt":[3],"doigts":[3],"poids":[3],
  "tabac":[4],"estomac":[6],"beurre":[5],
  "plomb":[4],"plombs":[4],"lait":[3],"mets":[3],"met":[3],
  // Corrections for multi-silent endings
  "faites":[4,5],"taisez":[3],"temps":[2,3,4],"printemps":[6,7],
  // Words ending in -ps / -ts / -rs etc
  "corps":[4],"champs":[4,5],"camp":[3],"camps":[3,4],
  // Silent final consonant after nasal vowel
  "bal":[2],"bals":[2,3],"chef":[3],"chefs":[4],
  // Additional common numerals / days style
  "dix":[2],"six":[2],"sept":[3],"août":[2,3]
    }
  }
};
