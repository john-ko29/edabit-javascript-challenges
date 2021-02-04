function canPatch(bridge, planks) {
  let holeLength = 0;
  for (let i = 0; i <bridge.length; i++) {
    if (bridge[i]  ===  0) {
      holeLength++;
    } else {
      if (holeLength === 0 || holeLength === 1) {
        holeLength = 0;
      } else  {
        for (let k = 0; k < planks.length; k++)  {
          if ((planks[i] + 1) === holeLength) {
            holeLength = 0;
            planks.splice(k, 1)
            break;
          }
          return false;
        }
      }
    }
  }
}

module.exports = canPatch;
