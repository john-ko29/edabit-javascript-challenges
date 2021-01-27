function boundSort(arr, bounds) {
  const tempArr = arr.slice(bounds)
  tempArr.sort(function(a,b) {return a-b})

  return arr;
}

module.exports = boundSort;
