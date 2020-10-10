function isSymmetrical(num) {
  const numWord = num + "";
  const topIndex = numWord.length - 1;
  for (let i = 0; i < numWord.length; i++) {
    if (parseInt(numWord[i]) !== parseInt(numWord[topIndex - i])) {
      return false;
    }
  }
  return true;
}

module.exports = isSymmetrical;
