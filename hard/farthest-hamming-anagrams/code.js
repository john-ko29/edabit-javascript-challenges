function maxHam(s1, s2) {
  const str1 = s1.split("");
  const str2 = s2.split("");
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    console.log(s1[i], s2[i], str2);
    if (s1[i] === s2[i] && str2.includes(s1[i])) {
      const removeIndex = str2.indexOf(s1[i]);
      str2.splice(removeIndex, 1);
    } else if (str2.includes(s1[i]))  {
      counter++;
      const removeIndex = str2.indexOf(s1[i]);
      str2.splice(removeIndex, 1);
    } else {
      return false;
    }
  }

  if (str2.length > 0) {
    return false;
  }

  if (counter === s1.length) {
    return true;
  } else {
    return counter;
  }
}

module.exports = maxHam;
