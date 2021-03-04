function correctSigns(str) {
  const arr  = str.split(" ")
  for (let i = 0; i < arr.length; i+= 2) {
    arr[i] = parseInt(arr[i]);
  }
  let firstEq = arr[0];
  let equator = arr[1];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === ">" || arr[i] === "<")  {
      equator = arr[i];
    } else {
      if (equator === ">") {
        if (firstEq > arr[i]) {
          firstEq = arr[i];
        } else {
          return false;
        }
      } else {
        if (firstEq < arr[i]) {
          firstEq = arr[i];
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

module.exports = correctSigns;
