for (var num = 1; num <= 100; num++)
{
  if (num % 3 == 0 && num % 5 == 0)
  {
    console.log("fizzbuzz");
    continue;
  }  
  else if (num % 3 == 0)
  {
    console.log("fizz");
    continue;
  }
  else if ( num % 5 == 0)
  {
    console.log("buzz");
    continue;
  }   
  else {
    console.log(num);
  }
}