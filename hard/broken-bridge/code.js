function canPatch(bridge, planks) {
  let holeLength = 0;
  for (let i = 0; i < bridge.length; i++) {
    if (bridge[i]  ===  0) {
      holeLength++;
    } else {
      if (holeLength === 0 || holeLength === 1) {
        holeLength = 0;
      } else  {
        if (planks.length === 0) {
          return false;
        }
        let canFix = false;
        for (let k = 0; k < planks.length; k++)  {
          console.log((planks[k] + 1), planks[k], holeLength)
          if ((planks[k] + 1) === holeLength) {
            holeLength = 0;
            planks.splice(k, 1)
            canFix = true;
            break;
          }
        }
        if (!canFix) {
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = canPatch;
