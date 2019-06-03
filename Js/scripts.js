function calculate() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  //var text-f = document.querySelector('.tec')

  if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
    alert("Not a Triangle");
  } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Kindly key in a number");
  } else if (a <= 0 || b <= 0 || c <= 0) {
    alert("Zero is not a triangle dimention");
  } else if (a === b && b === c && c === a) {
    alert("Equilateral triangle");
  } else if (a === b || a === c || b === c) {
    alert("Isosceles triangle");
  } else {
    alert("This is a scalene Triangle");
  }
}
