function reverseArray(array)
{
  var newArray = [];

  for (var index = array.length; index > 0; index--) {
     newArray[array.length - index] = array[index-1];
  }
  return newArray;
}


function reverseArrayInPlace(array)
{
  var newArray = [];

  for (var index = array.length; index > 0; index--) {
     newArray[array.length - index] = array[index-1];
  }
  array = newArray;
}

function reverseArrayForReal(array)
{
  for (var index = 0; index <= array.length; index++) {
    console.log(array, '  ', index);
    array[array.length] = array[0];
    array.shift()
 
  }
}
//test
var test = [4, 6, 3, 6, 3, 4, 2];
console.log(reverseArray(test));
reverseArrayForReal(test);
