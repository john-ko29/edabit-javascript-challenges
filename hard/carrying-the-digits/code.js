function carryDigits(n1, n2) {
  let carryOver = 0;
  let isCarry = false;
  const number1 = n1.toString().split("")
  const number2 = n2.toString().split("")

  for (let i = 0; i < number1.length; i++) {
    number1[i] = parseInt(number1[i])
  }

  for (let i = 0; i < number2.length; i++) {
    number2[i] = parseInt(number2[i])
  }


  while (number1.length !== number2.length) {
    if (number1.length > number2.length) {
      number2.unshift(0);
    }
    if (number1.length < number2.length) {
      number1.unshift(0);
    }
  }

  for (let i = number1.length - 1; i >= 0; i--) {
    let digitSum = number1[i] + number2[i];
    if (isCarry) {
      digitSum++;
      isCarry = false;
    }
    if (digitSum >= 10) {
      isCarry = true;
      carryOver++;
    }
  }

  return carryOver;
}

module.exports = carryDigits;
