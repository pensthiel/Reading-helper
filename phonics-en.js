export const PHONICS = {
  en: {
    soundGroups: {
      // vowel sounds
      "uː": ["oo"],
      "ʌ": ["ou"],
      "ð": ["th"],
      "θ": ["th"],
      "ʃ": ["sh"],
      "tʃ": ["ch"],
      "iː": ["ee"],
      "aɪ": ["igh", "ay"],
      "f": ["ph"],
      "ʃən": ["tion"],
      "oʊ": ["ow", "eau"],
      "aʊ": ["ow"],
      "eɪ": ["ay"],
      "ɔɪ": ["oy", "oi"],
      "ər": ["er", "ir", "ur"],
      "ɑː": ["ar"],
      "ɔː": ["or"],
      "juː": ["you", "yew"],
      "ɜː": ["ear", "ir"],
      // extra digraphs
      "ŋ": ["ng"],
      "dʒ": ["ge", "gi"],
      "k": ["ck", "qu"],
      "s": ["ss", "ce", "ci"],
      "z": ["zz"],
      "g": ["gh"],
      "h": ["wh"],
      "ə": ["a", "e"],
      "æ": ["a"],
      "ɛ": ["e"],
      "ɪ": ["i"],
      "ɒ": ["o"],
      "ʊ": ["u"]
    },
    silentWords: {
      // Silent K
      "knight":[0],"knee":[0],"know":[0],"knife":[0],"knock":[0],
      // Silent W
      "write":[0],"wrist":[0],"wrong":[0],"wrap":[0],"sword":[1],
      // Silent B
      "thumb":[4],"lamb":[3],"comb":[3],"bomb":[3],"debt":[2],
      // Silent T
      "castle":[4],"listen":[3],"ballet":[5],"fasten":[4],"whistle":[1],
      // Silent H
      "hour":[0],"honest":[0],"ghost":[0],"rhyme":[1],"what":[1],
      // Silent GH
      "through":[5,6],"though":[5,6],"high":[2,3],"night":[3,4],"daughter":[4,5],
      // Silent E (common ones)
      "bake":[3],"like":[3],"name":[3],"home":[3],"time":[3],
      // Silent O
      "would":[1],"could":[1],"should":[1],
      // Misc frequent
      "island":[1],"salmon":[3],"pneumonia":[0],"receipt":[5],
      "yacht":[4],"half":[2],"calf":[3],"folk":[3],"talk":[3],
      "walk":[3],"chalk":[3],"answer":[2],"subtle":[2],"plumber":[3]
    }
  }
};