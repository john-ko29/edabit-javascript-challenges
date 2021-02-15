function checkerBoard(n, el1, el2) {
  if (el1 === el2) {
    return "invalid";
  }
  const board = [];
  const pattern = [];
  pattern.push(el1);
  pattern.push(el2);
  for (let i = 0; i < n; i++) {
    let currentPattern = 0;
    const row = [];
    if (i % 2 === 1)  {
      currentPattern = 1;
    }
    for (let k = 0; k < n; k++) {
      row.push(pattern[currentPattern]);
      currentPattern = (currentPattern + 1) % 2;
    }
    board.push(row);
  }
  return board;
}

module.exports = checkerBoard;
