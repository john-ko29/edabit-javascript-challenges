function longestRun(arr) {
  let longestRun = 0;
  let currentRun = 1;
  let currentValue = arr[0];

  for (let i =  1; i < arr.length; i++) {
    currentValue++;
    if (currentValue === arr[i]) {
      currentRun++;
    } else {
      if (longestRun < currentRun) {
        longestRun = currentRun;
      }
      currentRun = 1;
      currentValue = arr[i];
    }
  }

  if (longestRun < currentRun) {
    longestRun = currentRun;
  }

  return currentRun;
}

module.exports = longestRun;
