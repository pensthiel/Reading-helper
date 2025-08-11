// Simple coverage checker: run in browser console after loading app OR adapt for Node.
// It scans the current story text for words that have potential silent letters (heuristics)
// but are NOT present in irregular dictionaries or explicit silentWords.

(async function coverageCheck() {
  const storyEl = document.getElementById('story');
  if (!storyEl) { console.warn('No story textarea found.'); return; }
  const text = storyEl.value;
  const tokens = text.split(/\s+/).filter(Boolean);
  await ensureIrregular(state.lang);
  const irr = state.lang === 'fr' ? (IRREG_FR||{}) : (IRREG_EN||{});
  const explicit = state.PHONICS?.silentWords || {};
  function normalize(w){return w.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');}
  const suspect = new Map();
  const silentPattern = state.lang === 'fr'
    ? /(ent$|e$|[dtpgxsb]$|gn|ph|ill|eau|aux|eaux)/
    : /(e$|igh|gn|kn|wh|wr|ps|mb$|lk$|gh|ph|tion$)/;
  tokens.forEach(raw => {
    const key = normalize(raw); if (!key) return;
    if (!silentPattern.test(key)) return; // skip if pattern not present
    if (irr[key] || explicit[key]) return; // already covered
    // apply rule simulation: if rules would mark everything already, still track
    suspect.set(key,(suspect.get(key)||0)+1);
  });
  const sorted = [...suspect.entries()].sort((a,b)=> b[1]-a[1]);
  console.group('Coverage gaps (candidate words needing dictionary entry)');
  sorted.slice(0,200).forEach(([w,c])=> console.log(w,'(',c,')'));
  console.log('Total candidates:', sorted.length);
  console.groupEnd();
})();
