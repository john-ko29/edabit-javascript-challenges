function fibSeq(end) {
  const sequence = [];
  if (end  === 0) {
    return sequence;
  }
  if (end === undefined) {
    return undefined;
  }
  for (let i = 0; i < end; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i-1] + sequence[i-2]);
    }
  }
  return sequence;
}

module.exports = fibSeq;
