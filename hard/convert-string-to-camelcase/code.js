function toCamelCase(str) {
  let connect = null;
  if (str.includes("-")) {
    connect = "-";
  } else if (str.includes("_")) {
    connect = "_";
  } else {
    return str;
  }

  const newStr = str.split(connect);

  for (let i  = 1; i < newStr.length; i++) {
    newStr[i].replace(newStr[i].charAt(0), newStr[i].charAt(0).toUpperCase())
  }

  console.log(newStr)
  return newStr.join("")
}

module.exports = toCamelCase;
