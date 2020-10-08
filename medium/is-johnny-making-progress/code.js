function progressDays(runs) {
  let progress = 0;
  let current = null;
  for (let i = 0; i < runs.length; i++) {
    if (current === null) {
      current = runs[i]
    }
    if (current < runs[i]) {
      progress++;
    }
    current = runs[i];
  }
  return progress;
}

module.exports = progressDays;
