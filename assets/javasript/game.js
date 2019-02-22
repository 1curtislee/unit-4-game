
$(document).ready(function(){
  var random = Math.floor(Math.random()*101+19)
  $("#wizNumber").text(random);

  var cr1 = Math.floor(Math.random()*11+1);
  var cr2 = Math.floor(Math.random()*11+1);
  var cr3 = Math.floor(Math.random()*11+1);
  var cr4 = Math.floor(Math.random()*11+1);

  var playerTotal = 0;
  var wins = 0;
  var losses = 0;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

function reset() {
  var random = Math.floor(Math.random()*101+19)
  $("#wizNumber").text(random);

  var cr1 = Math.floor(Math.random()*11+1);
  var cr2 = Math.floor(Math.random()*11+1);
  var cr3 = Math.floor(Math.random()*11+1);
  var cr4 = Math.floor(Math.random()*11+1);
  var playerTotal = 0;
  $("#crSum").text(playerTotal);
}

//game win or game loss functions
function winner() {
  alert ("You Won!");
  wins++
  $("#wins").text(wins);
  reset();
}
function loser() {
  alert ("BUST!");
  losses++
  $("#losses").text(losses);
}

//crystals
$("#cr1").on('click', function(){
  playerTotal = playerTotal + cr1;
  $('#crSum').text(playerTotal);
})
$("#cr2").on('click', function(){
  playerTotal = playerTotal + cr2;
  $('#crSum').text(playerTotal);
})
$("#cr3").on('click', function(){
  playerTotal = playerTotal + cr3;
  $('#crSum').text(playerTotal);
})
$("#cr4").on('click', function(){
  playerTotal = playerTotal + cr4;
  $('#crSum').text(playerTotal);
})


});


