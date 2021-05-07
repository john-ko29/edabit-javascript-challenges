function minRemovals(str1, str2) {
  let removals = 0;
  let smaller = null;
  if (str1.length  < str2.length) smaller = str1;
  else smaller = str2;
  for (let i = 0; i < smaller.length; i++) {
    if (!str2.includes(str1[i])) {
      removals++;
    }
  }

  return removals;
}

module.exports = minRemovals;
