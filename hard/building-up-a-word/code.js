function canBuild(arr) {
  for (let i = 1; i < arr.length; i++) {
    const previousIndex = i - 1;
    const previous = arr[previousIndex];
    const previousLength = arr[previousIndex].length;
    if (!arr[i].includes(previous) || (previousLength + 1) !== arr[i].length) {
      return false;
    }
  }
  return true;
}

module.exports = canBuild;
