///For testing of examples and other stuff

function reduce(array, combine, start)
{
  var current = start;
  for (var index = 0; index < array.length; index++) {
    current = combine(current, array[index]);
  }
    return current;
}

console.log(reduce([4, 2, 3, 5], function(a , b){
  return a * b;
},0));