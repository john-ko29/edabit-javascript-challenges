function wave(str) {
  const wave = [];
  const strWave = str.split("")
  for (let i = 0; i < str.length; i++)  {
    if (strWave[i] === " ") {
      continue;
    } else {
      strWave[i] =  strWave[i].toUpperCase();
    }
    wave.push(strWave)
  }

  return wave.join("");
}

module.exports = wave;
