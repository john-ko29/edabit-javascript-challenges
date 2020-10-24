function squarePatch(n) {
  const arr = [];
  if (n === 0) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    const tempArr = [];
    for (let k = 0; k < n; k++) {
      tempArr.push(n);
    }
    arr.push(tempArr);
  }

  return arr;
}

module.exports = squarePatch;
