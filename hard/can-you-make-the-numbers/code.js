function canBuild(digits, arr) {
  const numDigits = [];
  const numReq = [];
  if (!Array.isArray(arr) || arr.length === 0) {
    return true;
  }
  for (let i = 0; i < digits.length; i++) {
    for (let k = 0; k < digits[i]; k++) {
      numDigits.push(i)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const sNumber = arr[i].toString();
    for (let k = 0; k < sNumber.length; k++) {
      numReq.push(parseInt(sNumber[k]))
    }
  }
  console.log(numDigits, numReq)
}

module.exports = canBuild;
