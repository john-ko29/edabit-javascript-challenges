function rolls(arr) {
  let badLuck = false;
  let goodLuck = false;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentRoll = arr[i];
    let updatedRoll = currentRoll;
    if (badLuck) {
      updatedRoll = currentRoll * 0;
      badLuck = false;
    }
    if (goodLuck) {
      updatedRoll = currentRoll * 2;
      goodLuck = false;
    }
    if (currentRoll === 1) {
      badLuck = true;
    }
    if (currentRoll === 6) {
      goodLuck = true;
    }
    total += updatedRoll;
  }

  return total;
}

module.exports = rolls;
