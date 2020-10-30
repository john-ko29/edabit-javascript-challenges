function amplify(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      arr.push(i*10);
    } else {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = amplify;
