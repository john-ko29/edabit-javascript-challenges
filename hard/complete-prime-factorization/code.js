function completeFactorization(num) {
  const factors = [];

  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
      num = num / i;
      i--;
    }
  }

  return factors;
}

module.exports = completeFactorization;
