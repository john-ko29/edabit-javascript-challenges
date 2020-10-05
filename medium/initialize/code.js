function initialize(names) {
  const initials = [];
  for (let i = 0; i < names.length; i++) {
    const words = names[i].split(" ");
    for (let k = 0; k < words.length; k++) {
      words[k] = words[k][0]  + ".";
    }
    initials[i] = words.join(" ");
  }
  return initials
}

module.exports = initialize;
