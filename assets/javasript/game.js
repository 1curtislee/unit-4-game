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
function setup() {
  $("#cr1").click(addValue)
  $("#cr2").click(addValue)
  $("#cr3").click(addValue)
  $("#cr4").click(addValue)
}

function addValue() {
  console.log("crystal clicked")
}


// IMAGES:
// Title banner
// Wizard/bazaar owner
// crystals




