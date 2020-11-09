function charIndex(word, char) {
  const arr = [];
  let last = word.indexOf(char);
  if (last === -1) {
    return undefined;
  }
  arr.push(last);
  for (let i = last; i < word.length; i++) {
    if (word[i] === char) {
      last = i;
    }
  }
  arr.push(last);
  return arr;
}

module.exports = charIndex;
