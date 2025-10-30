export const PHONICS = {
  en: {
    soundGroups: {
      // consonant digraphs
      "θ": ["th"],
      "ð": ["th"],
      "ʃ": ["sh"],
      "tʃ": ["ch"],
      // long vowels
      "uː": ["oo"],
      "iː": ["ee", "ea"]
    },
    soundPalette: {
      "θ": "sound-en-th",
      "ð": "sound-en-th",
      "ʃ": "sound-en-sh",
      "tʃ": "sound-en-ch",
      "uː": "sound-en-oo",
      "iː": "sound-en-ee"
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
      "walk":[3],"chalk":[3],"answer":[2],"subtle":[2],"plumber":[3],
      // Added coverage - silent leading letters
      "gnome":[0],"gnat":[0],"gnaw":[0],"gnarl":[0],"gnash":[0],
      "knot":[0],"knob":[0],"knit":[0],"knack":[0],"knead":[0],
      "wrack":[0],"wrapt":[0],"wren":[0],"wrist":[0],"wreck":[0],
      "psyche":[0],"pterodactyl":[0],
      // Silent middle letters
      "align":[3],"sign":[2],"design":[4],"resign":[4],"foreign":[5],
      "campaign":[6],"champagne":[6],
      "muscle":[3],"scent":[1],"science":[1],"scissors":[1],
      "whack":[1],"whisk":[1],"ghostly":[1],"glisten":[4],
      // Silent final letters
      "balm":[2],"calm":[2],"palm":[2],"psalm":[0,3],
      "doubt":[3],"climb":[4],"crumb":[4],"thumbs":[4],
      "autumn":[5],"column":[5],"solemn":[5],"hymn":[3],
      "damn":[3],"foreigners":[5],"plough":[4,5],"thorough":[6,7]
    }
  }
};
