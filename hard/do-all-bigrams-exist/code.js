function canFind(bigrams, words) {
  for (let i = 0; i < bigrams.length; i++) {
    for (let k = 0; k < words.length; k++)  {
      if(!words[k].includes(bigrams[i]))  {
        return false;
      }
    }
  }
  return true;
}

module.exports = canFind;
