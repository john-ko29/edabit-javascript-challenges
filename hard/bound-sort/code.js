function boundSort(arr, bounds) {
  const tempArr = arr.slice(bounds[0], bounds[1] + 1);
  console.log(tempArr)
  tempArr.sort(function(a,b) {return a-b})

  const sortedArr = arr.sort(function (a, b) { return a - b })

  for (let i = tempArr.length; i < arr.length; i++) {
    tempArr.push(arr[i])
  }

  for (let i = 0; i < sortedArr.length; i++) {
    if (tempArr[i] !== sortedArr[i]) {
      return false;
    }
  }

  console.log(tempArr, arr)

  return true;
}

module.exports = boundSort;
