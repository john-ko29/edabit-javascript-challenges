function transposeMatrix(arr) {
  const matrix = [];

  for (let i = 0; i < arr[0].length; i++) {
    const tempArr = [];
    for (let k = 0; k < arr.length; k++) {
      tempArr.push(arr[k][i])
    }
    matrix.push(tempArr)
  }

  return matrix;
}

module.exports = transposeMatrix;
