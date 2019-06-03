function calculate() {
  var a parseInt(document.getElementById("a").value);
  var b parseInt(document.getElementById("b").value);
  var c parseInt(document.getElementById("c").value);

//Basics of a triangle--->
//--a+b>=c--//
//--b+c>=a--//
//--a+c>=b--//

  //*----If statements----//*
  if((a + b > c) && (b + c > a) && (a + c > b)) && (a !== 0 || b !== 0 || c !== 0))
  {
    if (a === b && b === c && c===a)
  {
   alert("Equilateral triangle");
   }
   else if(a!== b && a!== c && b!== a && b!== c)
   {
   alert( "Scalene Triangle");
   }
    else if (a === b && a!== c || a === c && a!== b || b === c && b!== c)
    {
    alert("I'm an isosceles triangle");
    }
   else
   {
  alert("Not a triangle")
    }

}


}
