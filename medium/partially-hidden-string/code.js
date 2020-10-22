function partiallyHide(phrase) {
  const arr = phrase.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      let hyphens = "";
      const replaceStr = arr[i].substring(1, arr[i].length - 2);
      for (let k = 0; k < replaceStr.length; k++) {
        hyphens += "-"
      }
      arr[i].replace(replaceStr, hyphens)
    }
  }
  return arr.join(" ")
}

module.exports = partiallyHide;
