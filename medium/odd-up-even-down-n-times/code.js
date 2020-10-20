function evenOddTransform(arr, n) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value % 2 === 0) {
      value = value - (2 * n);
    } else {
      value = value + (2 * n);
    }
    newArr.push(value);
  }
  return newArr;
}

module.exports = evenOddTransform;
