function numberOfDays(coordinate) {
  let days = 0;
  let daysTaken = 0;
  for (let i = 0; i < coordinate.length; i++) {
    while (coordinate[i] !== 0) {
      if(coordinate[i] < 0) {
        if (days === 5) {
          days = 0;
          daysTaken++;
        } else {
          coordinate[i] += 1;
          daysTaken++
          days++
        }
      } else if (coordinate[i] > 0) {
        if (days === 5) {
          days = 0;
          daysTaken++;
        } else {
          coordinate[i] -= 1;
          daysTaken++
          days++
        }
      }
    }
  }
  return daysTaken;
}

module.exports = numberOfDays;
