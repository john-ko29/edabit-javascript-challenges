function ana_str_str(needle, haystack) {
  let str = "";
  for (let i = needle.length - 1; i >= 0; i--) {
    str += needle[i];
  }

  if (haystack.includes(str)) {
    return true;
  } else {
    return false;
  }
}

module.exports = ana_str_str;
