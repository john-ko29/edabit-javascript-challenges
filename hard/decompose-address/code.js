function decomposeAddress(str) {
  const address = str.split(" ");
  if (address[2].length === 2)  {
    address[1] += " "  + address[2];
    address.splice(2, 1);
  }

  if (address[3].length !== 2) {
    const secondWord = address[3].substr(0, address[3].length - 1);
    address[2] +=  " " + secondWord;
    address.splice(3, 1);
  } else {
    address[2] = address[2].substr(0, address[2].length - 1);
  }
  return address;
}

module.exports = decomposeAddress;
