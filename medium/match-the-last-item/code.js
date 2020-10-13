function matchLastItem(arr) {
  let word = "";
  for (let i = 0; i < arr.length - 1; i++) {
    word  += arr[i]
  }
  if (word === arr[arr.length - 1]) {
    return true;
  }  else {
    return false;
  }
}

module.exports = matchLastItem;
