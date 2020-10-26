function probability(arr, num) {
  let success = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      success++
    }
  }
  const probability = (success / arr.length) * 100;
  return (parseFloat(probability.toFixed(1)));
}

module.exports = probability;
