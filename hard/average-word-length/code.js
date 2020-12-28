function averageWordLength(str) {
  let total = 0;
  const words = str.split(" ");
  const numOfWords = words.length;
  for (let i = 0; i < words.length; i++) {
    total = words[i].length;
  }
}

module.exports = averageWordLength;
