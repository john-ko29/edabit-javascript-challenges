function expand(num) {
  num = num + '';
  const digitPlace = [];
  const digitLength = num.length - 1;
  for (let i = 0; i < num.length; i++) {
    let currentDigit = num[i];
    for (let k = 0; k < digitLength  - i; k++)  {
      currentDigit += "0"
    }
    if (parseInt(currentDigit)  > 0) digitPlace.push(currentDigit);
  }
  return digitPlace.join(" + ");
}

module.exports = expand;
