function canConcatenate(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (target.includes(arr[i][k])) {
        const removeIndex = target.indexOf(arr[i][k]);
        target.splice(removeIndex, 1)
      } else {
        return false;
      }
    }
  }
  if (target.length !== 0) {
    return false;
  }
  return  true;
}

module.exports = canConcatenate;
