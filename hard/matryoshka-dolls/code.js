function matryoshka(arr) {
  const allMinMax =  [];
  for (let i = 0; i < arr.length; i++) {
    const minMax =[];
    let min = arr[i][0];
    let max = arr[i][0]
    for (let k = 1; k < arr[i].length; k++) {
      if (min > arr[i][k]) {
        min = arr[i][k]
      }
      if ( max < arr[i][k])  {
        max = arr[i][k]
      }
    }
    minMax.push(min);
    minMax.push(max);
    allMinMax.push(minMax)
  }
  console.log(allMinMax)
}

module.exports = matryoshka;
