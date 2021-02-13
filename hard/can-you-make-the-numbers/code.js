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

  for (let i = 0; i < numReq.length; i++) {
    if (!numDigits.includes(numReq[i])) {
      return false;
    } else  {
      const isReq = (element) => element === numReq[i]
      const removeIndex = numDigits.findIndex(isReq)
      numDigits.splice(removeIndex, 1)
    }
  }

  return true;
}

module.exports = canBuild;
