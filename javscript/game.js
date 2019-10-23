$(document).ready(function () {

//~~~~~~~~~~~Define Variables~~~~~~~~~~~~~~~

//variable for random number for computer 
var Random=Math.floor(Math.random()*101+19)
$('#computerNum').text(Random);
console.log (Random)

//variables for wins & losses
var wins = 0;
var losses = 0;
//variable for guesses
var userTotal = 0;

//send wins and losses to placeholder div
$("#numWins").text(wins);
$("#numLosses").text(losses);


//~~~~~~~~~~~Functions~~~~~~~~~~~~~~~

function game () {
    Random=Math.floor(Math.random()*101+19);
      console.log(Random);
    $('#computerNum').text(Random);
    userTotal = 0;
var greenNum=Math.floor(Math.random()*11+1);
var orangeNum=Math.floor(Math.random()*11+1);
var pinkNum=Math.floor(Math.random()*11+1);
var purpleNum=Math.floor(Math.random()*11+1);
$('#finalTotal').text(userTotal);
}

})