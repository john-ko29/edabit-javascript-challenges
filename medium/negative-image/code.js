function reverseImage(image) {
  const arr = [];
  for (let i = 0; i < image.length; i++) {
    const tempArr = [];
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === 1) {
        tempArr.push(0);
      } else {
        tempArr.push(1);
      }
    }
    arr.push(tempArr);
  }
  return arr;
}

module.exports = reverseImage;
