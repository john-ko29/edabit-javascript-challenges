function battleOutcome(num) {
  let firstDigit = null;
  let secondDigit = null;
  let finalNumber = "";

  const numString = "" + num;

  for (let i = 0; i < numString.length; i++) {
    if (i % 2  === 0) {
      firstDigit = parseInt(numString[i]);
    } else {
      secondDigit = parseInt(numString[i])
      if (firstDigit > secondDigit) {
        finalNumber += firstDigit;
      } else if (secondDigit > firstDigit)  {
        finalNumber += secondDigit;
      }
      firstDigit = null;
      secondDigit = null;
    }
  }

  if (firstDigit !== null && secondDigit === null) {
    finalNumber += firstDigit;
  }

  return parseInt(finalNumber);
}

module.exports = battleOutcome;
