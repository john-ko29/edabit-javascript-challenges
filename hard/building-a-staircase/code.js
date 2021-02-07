function buildStaircase(height, block) {
  const staircase = [];
  for (let i = 1; i < (height  + 1); i++) {
    const level = [];
    for (let k = 0; k < i; k++)  {
      level.push(block)
    }
    for (let k = 0; k < (height - i); k++) {
      level.push("_")
    }
    staircase.push(level);
  }

  return staircase;
}

module.exports = buildStaircase;
