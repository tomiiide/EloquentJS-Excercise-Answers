for (var i = 1; i <= 10; i++)
{
  var board = "";
  for (var j = 1; j <= 10; j++)
  {
    if (i % 2 == 0)
    {
      if (j % 2 == 0)
        board += "  ";
      else
        board += "#";  
    }
    else {
      if (j % 2 == 0)
        board += "#";
      else
        board += "  ";        
    }
    
  } 
  console.log(board);
}