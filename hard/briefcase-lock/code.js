function minTurns(current, target) {
  let total = 0;
  for (let i  = 0; i  < current.length; i++) {
    let currentNumber = parseInt(current[i])
    let targetNumber = parseInt(target[i])
    let forwardTurn = 0;
    let backwardTurn = 0;
    for (let k = currentNumber; k !== targetNumber; k++) {
      if (k === 10) {
        k -= 10;
      }
      forwardTurn++;
    }
    for (let k = currentNumber; k !== targetNumber; k--)  {
      if (k === 0) {
        k += 10;
      }
      backwardTurn++;
    }
    if (forwardTurn > backwardTurn) {
      total += backwardTurn;
    } else {
      total += forwardTurn;
    }
  }

  return total;
}

module.exports = minTurns;
