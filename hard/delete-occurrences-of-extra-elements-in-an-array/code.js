function deleteOccurrences(arr, num) {
  const counted =  {};
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (counted.hasOwnProperty(arr[i])) {
      counted[arr[i]] += 1;
    } else {
      counted[arr[i]] = 1;
    }
    if (counted[arr[i]] <= num) {
      newArr.push(arr[i])
    }
  }

  return newArr;
}

module.exports = deleteOccurrences;
