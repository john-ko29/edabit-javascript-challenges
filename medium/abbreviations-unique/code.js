function uniqueAbbrev(abbs, words) {
  for (let i = 0; i < abbs.length; i++) {
    let unique = 0;
    const abbLength = abbs[i].length;
    for (let k = 0; k < words.length; k++) {
      const initals = words[k].substring(0, abbLength);
      if (initals.includes(abbs[i])) {
        unique++;
      }
      if (unique > 1) {
        return false;
      }
    }
  }
  return true;
}

module.exports = uniqueAbbrev;
