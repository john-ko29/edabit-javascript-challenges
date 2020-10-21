function freeShipping(order) {
  let total = 0;
  for (const product in order) {
    total += order[product];
  }
  if (total > 50) {
    return true;
  } else {
    return false;
  }
}

module.exports = freeShipping;
