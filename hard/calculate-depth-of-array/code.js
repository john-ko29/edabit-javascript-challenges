function depth(arr) {
  let depthTotal = 1;
  for (let i =  0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      depthTotal += depth(arr[i])
    }
  }

  return depthTotal;
}

module.exports = depth;
