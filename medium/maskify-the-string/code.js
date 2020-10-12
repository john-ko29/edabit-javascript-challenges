function maskify(str) {
  const newStr = str.split("");
  if (str.length < 5) {
    return str;
  }
  for (let i = 0; i < str.length - 4; i++) {
    newStr[i] = "#";
  }
  const returnStr = newStr.join("")
  return  returnStr;
}

module.exports = maskify;
