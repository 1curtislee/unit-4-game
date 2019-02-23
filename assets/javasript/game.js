
/*$(document).ready(function() {
  console.log("onLoad function run")
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
$(".crSum").text(playerTotal);
*/

// testing
var cr1 = Math.floor(Math.random()*11+1);
var cr2 = Math.floor(Math.random()*11+1);
var cr3 = Math.floor(Math.random()*11+1);
var cr4 = Math.floor(Math.random()*11+1);

var playerTotal = 0;
var wins = 0;
var losses = 0;
var random = Math.floor(Math.random()*101+19)

function setup() {
  console.log("onLoad function run")
  
  $("#wizNumber").text(random);

  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);
  $(".crSum").text(playerTotal);
}
// end testing

function reset() {
  console.log("reset(); run")
  random = Math.floor(Math.random()*101+19)
  $("#wizNumber").text(random);

  cr1 = Math.floor(Math.random()*11+1);
  cr2 = Math.floor(Math.random()*11+1);
  cr3 = Math.floor(Math.random()*11+1);
  cr4 = Math.floor(Math.random()*11+1);
  playerTotal = 0;
  $("#crSum").text(playerTotal);
}

$(".crystal").hover(function() {
  $(this).css({opacity: 0.7});
},
function() {
  $(this).css({opacity: 1});
});

//game win or game loss functions
function winner() {
  alert ("You Won!");
  wins++
  $("#wins").text("Wins: " + wins);
  reset();
}
function loser() {
  alert ("BUST!");
  losses++
  $("#losses").text("Losses: " + losses);
  reset();
}

//crystals
$("#cr1").on('click', function(){
  playerTotal = playerTotal + cr1;
  $('#crSum').text(playerTotal);
  end();
})
$("#cr2").on('click', function(){
  playerTotal = playerTotal + cr2;
  $('#crSum').text(playerTotal);
  end();
})
$("#cr3").on('click', function(){
  playerTotal = playerTotal + cr3;
  $('#crSum').text(playerTotal);
  end();
})
$("#cr4").on('click', function(){
  playerTotal = playerTotal + cr4;
  $('#crSum').text(playerTotal);
  end();
})

//win/loss:
function end() {
  if (playerTotal == random) {
    winner();
  }
  if (playerTotal > random) {
    loser();
  }
}

//});


