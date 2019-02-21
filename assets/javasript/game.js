// PIECES:
// Title banner
// instructions div
// random number div
// wins/losses div
// 4 crystals, each with random amounts (change every time);
// user total

// FUNCTIONS:
// each crystal, when clicked adds to user's score
// if match achieved: wins goes up by 1, game resets
// if user goes over: losses goes up by 1, game resets


function addValue1() {
  console.log("you clicked crystal 1")
}
function addValue2() {
  console.log("you clicked crystal 2")
}
function addValue3() {
  console.log("you clicked crystal 3")
}
function addValue4() {
  console.log("you clicked crystal 4")
}

var cr1 = 1;
var cr2 = 2;
var cr3 = 3;
var cr4 = 4;
var sum = cr1 + cr2 + cr3 + cr4;
$("#crSum").text(sum);
function crSum() {
  
} 

var x = document.getElementById("crSum");
  x.innerText = sum;
console.log(sum);


