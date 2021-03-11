function doubleSwap(str, c1, c2) {
  const allC1 = [];
  const allC2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1) {
      str = str.substr(0, i) + c2 + str.substr(i, str.length);
      allC1.push(i);
    } else if (str[i] === c2) {
      str = str.substr(0, i) + c1 + str.substr(i, str.length);
      allC2.push(i);
    }
  }

  console.log(allC1, allC2);

  return str;
}

module.exports = doubleSwap;
