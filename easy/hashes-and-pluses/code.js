function hashPlusCount(str) {
  const arr = [];
  let hash = 0;
  let plus = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      hash++;
    }
    if (str[i] === "+") {
      plus++;
    }
  }
  arr.push(hash);
  arr.push(plus);

  return  arr;
}

module.exports = hashPlusCount;
