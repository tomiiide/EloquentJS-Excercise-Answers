function flatten(array)
{
  return array.reduce(function (result, cur) {
    return result.concat(cur);
  });
}

//test
numbers = [[4, 5, 2, 4, 3], [6, 7, 5, 7, 5], [7, 4, 3, 2, 4]];
console.log(flatten(numbers));