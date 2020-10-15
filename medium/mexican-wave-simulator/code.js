function wave(str) {
  const test = str.trim();
  const arr = [];
  if (test.length === 0) {
    return arr;
  }
  for (let i = 0; i < str.length; i++) {
    let wave = str.toLowerCase();
    if (str[i] !== " ") {
      wave[i] = wave[i].toUpperCase();
      arr.push(wave)
    }
  }
  return arr;
}

module.exports = wave;
