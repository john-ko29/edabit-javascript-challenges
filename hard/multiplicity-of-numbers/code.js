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

  for (const property in obj) {
    const tempArr = [];
    tempArr.push(property);
    tempArr.push(obj[property]);
    newArr.push(tempArr);
  }

  return newArr;
}

module.exports = multiplicity;
