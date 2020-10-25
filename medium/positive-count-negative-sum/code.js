function countPosSumNeg(arr) {
  const newArr = [];
  let positiveCount = 0;
  let sumNegative = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else {
      sumNegative += arr[i];
    }
  }
  if (arr.length !== 0) {
  newArr.push(positiveCount);
  newArr.push(sumNegative);
  }
  return newArr;
}

module.exports = countPosSumNeg;
