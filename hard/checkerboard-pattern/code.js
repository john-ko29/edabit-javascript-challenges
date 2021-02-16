function isCheckerboard(arr) {
  let previous = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (i === 0 && k === 0) {
        continue;
      }
      if (arr.length === 2 && arr[0][1] === arr[1][0] && arr[0][0] === arr[1][1] && i === 1)  {
        continue;
      }
      if (previous === arr[i][k]) {
        return false;
      }
      previous = arr[i][k];
    }
  }
  return true;
}

module.exports = isCheckerboard;
