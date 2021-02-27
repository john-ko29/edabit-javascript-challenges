function canSeeStage(seats) {
  const rowLength = seats[0].length;
  for (let i = 0; i < rowLength; i++)  {
    let min = seats[0][i];
    for (let k = 1; k < seats.length; k++) {
      if (min >= seats[k][i]) {
        return false;
      } else {
        min = seats[k][i]
      }
    }
  }
  return true;
}

module.exports = canSeeStage;
