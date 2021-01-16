function birdCode(arr) {
  let name = "";
  const words = arr.split(" ");
  const nameLength = words.length;

  if (words.length === 1) {
    name += words[0].substr(0, 4);
  } else if (words.length === 2) {
    name += words[0].substr(0, 2);
    name +=  words[1].substr(0, 2);
  } else if (words.length === 3) {
    name += words[0].substr(0, 2);
    name += words[1].substr(0, 1);
    name += words[2].substr(0, 1);
  }
}

module.exports = birdCode;
