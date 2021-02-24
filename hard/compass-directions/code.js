function finalDirection(initial, turns) {
  const directions = ["N", "E", "S", "W"];
  let currentDirection = directions.indexOf(initial);

  for (let i = 0; i < turns.length; i++) {
    if (turns[i] === "L") {
      currentDirection -= 1;
    } else   {
      currentDirection += 1;
    }
  }

  if (currentDirection < 0) {
    currentDirection += 4;
  }

  return directions[currentDirection % 4];
}

module.exports = finalDirection;
