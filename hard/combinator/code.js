function combinator(arr) {
  const newArr = [];
  if (!arr.length) {
    return newArr;
  }
  for (let i = 0; i < arr[0].length; i++) {
    const tempArr = [];
    for (let k = 0; k < arr[0].length; k++) {
      let word = "";
      if (arr[0][i].length === 1) {
        word = "" + arr[0][i] + arr[1][k];
      } else {
        word = arr[0][i] + " " + arr[1][k];
      }
      tempArr.push(word);
    }
    newArr.push(tempArr);
  }
  return newArr;
}

module.exports = combinator;
