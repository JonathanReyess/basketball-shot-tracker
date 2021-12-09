
//defining our variables
var buttons = document.getElementById("bucket");
buttons.innerHTML =
  '<img src="https://cdn.glitch.me/d1fddca7-50ba-4596-aae1-4598c4cb77da%2Fbucket.png?v=1638238154930" height="100px" width="100px"" />';

var buttons = document.getElementById("brick");
buttons.innerHTML =
  '<img src="https://cdn.glitch.me/d1fddca7-50ba-4596-aae1-4598c4cb77da%2Fbrick2.png?v=1638239011894" height="100px" width="100px"" />';


//function that determines what the brick button does
function incrementValue() {
  var value = parseInt(document.getElementById("brick").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("brick").value = value;
}

//function that determines what the bucket button does
function incrementbothValue() {
  var value = parseInt(document.getElementById("bucket").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("bucket").value = value;

  var value = parseInt(document.getElementById("brick").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("brick").value = value;
}

//function that evaluates the digits and returns the field goal percentage
function solve() {
  let x = document.getElementById("bucket").value;
  let y = document.getElementById("brick").value;
  document.getElementById("result").value = (x / y) * 100;
}

//function that clear the display
function clr() {
  document.getElementById("brick").value = "";

  document.getElementById("bucket").value = "";

  document.getElementById("result").value = "";
}
