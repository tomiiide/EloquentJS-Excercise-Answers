
function arrayToList(array)
{
  var lists = {};
  for (var index = array.length-1; index >= 0; index--) {
    if (lists.value)
      lists = {
        value: array[index],
        rest: lists
      };
    else 
      lists = {
        value: array[index],
        rest: null
      };
  }
  return lists;
}

function prepend(value, list)
{
  list = {
    value: value,
    rest: list
  };
  return list;
}

function nth(n,list)
{
  if (n == 1)
    return list.value;
  if (list.rest == null)
    return undefined;
  if (n == 0)
    return null;
  return nth(n - 1, list.rest);
}


//test
var numbers = [3, 5, 6, 4];
// console.log(arrayToList(numbers));
newList = prepend(5, arrayToList(numbers));
// console.log(newList);
console.log(nth(2, newList));
