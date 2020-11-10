function gcd(n1, n2) {
  let smallerNum = null;
  if (n1 > n2) {
    smallerNum = n2;
  } else {
    smallerNum = n1;
  }
  let gcd = 1;

  for (let i = 2; i <= smallerNum; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

module.exports = gcd;
