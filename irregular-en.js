// Expanded irregular / exception list (subset of target ~500) for children's books.
// Keys are lowercase letter-only forms; values are arrays of 0-based indices of silent letters.
// (Rule-based finals like generic silent 'e' omitted unless part of multi-letter irregular cluster.)
export const IRREGULAR_EN = {
  // Core function + high frequency irregulars
  "the": [], "was": [2], "were": [3], "does": [3], "done": [3], "said": [2], "people": [4],
  "their": [], "there": [5], "where": [5], "answer": [2], "often": [2],
  // Silent k
  "knight": [0], "knee": [0], "knew": [0], "knife": [0], "knock": [0], "known": [0],
  // Silent w
  "write": [0], "wrist": [0], "wrong": [0], "wrap": [0], "sword": [1], "two": [0],
  // Silent b
  "thumb": [4], "lamb": [3], "comb": [3], "bomb": [3], "dumb": [3], "debt": [2], "doubt": [3],
  // Silent t
  "castle": [4], "listen": [3], "ballet": [5], "fasten": [4], "whistle": [1], "christmas": [5],
  // Silent h
  "hour": [0], "honest": [0], "ghost": [0], "rhyme": [1], "what": [1], "white": [1], "when": [1],
  // Silent gh cluster
  "through": [5,6], "though": [5,6], "thorough": [6,7], "high": [2,3], "light": [3,4], "night": [3,4], "might": [3,4],
  "right": [3,4], "sight": [3,4], "tight": [3,4], "laugh": [3,4], "daughter": [4,5], "bought": [4,5], "caught": [4,5], "taught": [4,5],
  // Silent l
  "would": [1], "could": [1], "should": [1], "talk": [3], "walk": [3], "chalk": [3], "yolk": [3], "calm": [3], "half": [2], "calf": [3], "folk": [3],
  // Silent w after r
  "answer": [2], "sword": [1], "two": [0]
  ,
  // Silent g
  "gnome": [0], "gnaw": [0], "gnat": [0], "sign": [2], "design": [4], "foreign": [5],
  // Silent p
  "pneumonia": [0], "receipt": [5], "psychology": [0], "pseudonym": [0],
  // Silent u after g/guess/guide
  "guess": [2], "guide": [2], "guitar": [2],
  // Misc frequent child-lit irregulars
  "yacht": [4], "island": [1], "subtle": [2], "plumber": [3], "autumn": [5],
  // Silent e internal (kept explicit for pedagogy) – treat the final e in these as already rule-handled
  "come": [], "some": [], "love": [], "give": [], "have": [],
  // Additional GH words
  "weigh": [3,4], "eight": [3,4], "freight": [4,5],
  // Words with multiple silent letters
  "knapsack": [0], "knowledge": [0,5],
  // Potential homograph guidance (no silent letters, empty array for completeness)
  "one": [], "once": [], "two": [0], "gone": []
};
