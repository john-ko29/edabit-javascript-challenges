function lcm(n1, n2) {
  let lcm  = null;
  let lesser = null;
  let greater = null;
  let counter = 2;

  if (n1 > n2) {
    lcm = n2;
    lesser = n2;
    greater = n1;
  } else {
    lcm = n1;
    lesser = n1;
    greater = n2;
  }

  while (lcm % greater !== 0) {
    lcm += lesser;
  }

  return lcm;
}

module.exports = lcm;
