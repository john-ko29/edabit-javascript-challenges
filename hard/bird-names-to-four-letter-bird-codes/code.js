function birdCode(arr) {
  let name = "";
  const words = arr.split(" ");

  if (words.length === 1) {
    name += words[0].substr(0, 4);
  } else if (words.length === 2) {
    name += words[0].substr(0, 2);
    name +=  words[1].substr(0, 2);
  } else if (words.length === 3) {
    name += words[0].substr(0, 2);
    name += words[1].substr(0, 1);
    name += words[2].substr(0, 1);
  } else {
    name += words[0].substr(0, 1);
    name += words[1].substr(0, 1);
    name += words[2].substr(0, 1);
    name += words[3].substr(0, 1);
  }

  return name;
}

module.exports = birdCode;
