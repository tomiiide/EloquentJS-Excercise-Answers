function countBs(countMe)
  {
    var noOfBs = 0;
    for (var i = 0; i < countMe.length; i++) {
      if(countMe.charAt(i) == "B")
        {
          
          noOfBs++;
        }
    }
    return noOfBs;
  }

  function countChar(countMe,char)
  {
    var noOfChar = 0;
    for (var i = 0; i < countMe.length; i++) {
      if(countMe.charAt(i) == char)
        {
          
          noOfChar++;
        }
    }
    return noOfChar;
  }

  //Tests

  console.log(countBs("BuBBa"));
  console.log(countChar("Lego","g"));
  console.log(countChar("Chance the rapper","e"));
  