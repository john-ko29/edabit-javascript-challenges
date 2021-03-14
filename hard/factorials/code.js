function filterFactorials(numbers) {
  const factorial =[];
  for (let i = 0; i < numbers.length;  i++) {
    let isFactorial = false;
    let check = 1;
    let counter = 1;
    while (check <= numbers[i]) {
      check *= counter;
      if (numbers[i] === check)  {
        isFactorial = true;
        break;
      }
      counter++;
    }
    console.log(check,counter);
    if  (isFactorial)  factorial.push(numbers[i])
  }
  return factorial;
}

module.exports = filterFactorials;
