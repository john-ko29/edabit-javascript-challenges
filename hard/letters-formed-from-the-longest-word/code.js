function canForm(arr) {
  let bigIndex = 0;
  let longestWordLength = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (longestWordLength < arr[i].length)  {
      longestWordLength = arr[i].length;
      bigIndex = i;
    }
  }

  const longestWord = arr[bigIndex];

  arr.splice(bigIndex, 1);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (!longestWord.includes(arr[i][k])) {
        return false;
      }
    }
  }

  return true;
}

module.exports = canForm;
