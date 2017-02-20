//props = properties
//cheated on this excercise when i got tired of pulling my hair out

function deepEqual(firstObject, secondObject)
{
  //check if a === b
  if(firstObject === secondObject)
    return true;
  
  //check if either a or b is null is not an object
  if (firstObject == null || typeof(firstObject) != "object"
    || secondObject == null || typeof(secondObject) !== "object")
    return false;
  
  // get all props of firstObject
  propsOfFirstObject = 0, propsOfSecondObject = 0;

  for (var prop in firstObject)
  {
    ++propsOfFirstObject;
  }  

  // get all props of secondObject
  for (var prop in secondObject)
  {
    ++propsOfSecondObject;
    // compare the props recursively
    if (!(prop in firstObject) || !deepEqual(firstObject[prop], secondObject[prop])
    ) return false;
  }  

  
  

  // compare number of props
  return propsOfSecondObject == propsOfFirstObject;
}

//test

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));