function isIsogram(str) {
  const word = str.toLowerCase();
  const obj = {}
  for (let i = 0; i < word.length; i++) {
    if  (obj[word[i]] === 1) {
      return false;
    } else {
      obj[word[i]] = 1;
    }
  }
  return true;
}

module.exports = isIsogram;
