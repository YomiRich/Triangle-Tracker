function calculate() {
  var a parseInt(document.getElementById("a").value);
  var b parseInt(document.getElementById("b").value);
  var c parseInt(document.getElementById("c").value);
  var submit;

//Basics of a triangle--->
//--a+b>=c--//
//--b+c>=a--//
//--a+c>=b--//

  //*----If statements----//*
  if(((a + b > c) && (b + c > a) && (a + c > b)) && (a !== 0 || b !== 0 || c !== 0)) {
    if (a === b && b === c && c===a) {
output.textContent = "Equilateral triangle";}
 else if(a!== b && a!== c && b!== a && b!== c) {
output.textcontent = "Scalene Triangle";}
else if (a === b && a!== c || a === c && a!== b || b === c && b!== c) {
output.textContent = "I'm an isosceles triangle";
}
else {
  output.textcontent = "Not a triangle"
}

}
