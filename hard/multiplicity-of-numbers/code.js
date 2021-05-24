function multiplicity(arr) {
  const obj = {};
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  return newArr;
}

module.exports = multiplicity;
