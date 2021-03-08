function routeDiff(directions) {
  const location = [0, 0];
  let optimal = 0;
  let original = 0;
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "N")  {
      location[1] += 1;
    } else if (directions[i] === "S")  {
      location[1] -= 1;
    } else if (directions[i] === "E") {
      location[0] += 1;
    }  else  if (directions[i]  === "W") {
      location[0] -= 1;
    }
    original++;
  }

  if (location[0] < 0) {
    location[0]  *=  -1;
  }
  if (location[1] < 0)  {
    location[1] *=  -1;
  }

  for (let i = 0; i < location.length; i++) {
    optimal += location[i];
    }

  return original - optimal;
}

module.exports = routeDiff;
