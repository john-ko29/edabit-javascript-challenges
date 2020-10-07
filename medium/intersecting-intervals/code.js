function countOverlapping(intervals, point) {
  let count = 0;
  for (let i = 0; i < intervals.length; i++) {
    for (let k = intervals[i][0]; k <= intervals[i][1] ; k++) {
      if (k === point) {
        count++
      }
    }
  }
  return count;
}

module.exports = countOverlapping;
