function birdCode(arr) {
  let name = "";
  const words = arr.split(" ");
  const nameLength = words.length;

  if (words.length === 1) {
    name += words[0].substr(0, 4);
  }
}

module.exports = birdCode;
