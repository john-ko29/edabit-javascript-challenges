function mean(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return parseFloat((total/arr.length).toFixed(2));
}

module.exports = mean;
