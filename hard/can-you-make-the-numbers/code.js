function canBuild(digits, arr) {
  const numDigits = [];
  for (let i = 0; i < digits.length; i++) {
    for (let k = 0; k < digits[i]; k++) {
      numDigits.push(i)
    }
  }
}

module.exports = canBuild;
