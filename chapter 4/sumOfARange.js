function range(start, end,range)
{
  var numbersInRange = [],counter = 0;
  
  if (arguments[2]) {
    if (arguments[2] < 0) {
      for (var index = start; index >= end; index = index + range) {
        numbersInRange[counter] = index;
        counter++;
      }
    }
    else {
      for (var index = start; index <= end ; index = index + range) {
        numbersInRange[counter] = index;
        counter++;
        }
      }
  }
  //if there is no third agurment
  else {
     for (var index = start; index <= end ; index++) {
        numbersInRange[counter] = index;
        counter++;
        }
  }

  
  return numbersInRange;
}

function sum(numbers)
{
  var sumOfNumbers = 0;
  for (var index = 0; index < numbers.length; index++) {
    sumOfNumbers += numbers[index];
  }
  return sumOfNumbers;
}

//tests
console.log(range(24, 8, -4));
console.log(sum(range(24, 8, -4)));