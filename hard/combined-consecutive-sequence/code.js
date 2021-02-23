function consecutiveCombo(a1, a2) {
  let min = a1[0];
  let max = a1[0];
  let notConsective = false;

  for (let i = 0; i < a1.length; i++) {
    if (min > a1[i]) {
      min = a1[i];
    }
    if (max < a1[i]) {
      max = a1[i]
    }
  }
  for (let i = 0; i < a2.length; i++) {
    if (min > a2[i]) {
      min = a2[i];
    }
    if (max < a2[i])  {
      max = a2[i];
    }
  }
  console.log(min, max);

  while (!notConsective) {
    if (a1.includes((min + 1)) ||  a2.includes((min + 1))) {
      min += 1;
    } else {
      notConsective = true;
    }

    if (min === max) {
      return true;
    }
  }

  return false;
}

module.exports = consecutiveCombo;
