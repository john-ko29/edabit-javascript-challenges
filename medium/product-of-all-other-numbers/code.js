function getProducts(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let k = 0; k < arr.length; k++) {
      if (i !== k)  {
        product *= arr[k];
      }
    }
    newArr.push(product);
  }
  return newArr;
}

module.exports = getProducts;
