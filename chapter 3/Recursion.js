function isEven(num)
{
  if(num - 2 == 0)
  {
    return true;
  }
  else if(num - 2 == 1)
  {
    return false;
  }
  else{
    return isEven(num - 2);
  }
}

//TEST
console.log("is 78 even? ", isEven(78));
console.log("is 75 even? ", isEven(75));
