function birdCode(arr) {
  let name = "";
  const words = arr.split(" ");
  const nameLength = words.length;

  if (words.length === 1) {
    name += words[0].substr(0, 4);
  } else if (words.length === 2) {
    name += words[0].substr(0, 2);
  }
}

module.exports = birdCode;
