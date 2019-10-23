$(document).ready(function () {

  //~~~~~~~~~~~Define Variables~~~~~~~~~~~~~~~

  //variable for random number for computer 
  var Random = Math.floor(Math.random() * 101 + 19)
  $('#computerNum').text(Random);
  console.log(Random)
  var greenNum = Math.floor(Math.random() * 11 + 1);
  var orangeNum = Math.floor(Math.random() * 11 + 1);
  var pinkNum = Math.floor(Math.random() * 11 + 1);
  var purpleNum = Math.floor(Math.random() * 11 + 1);

  //variables for wins & losses
  var wins = 0;
  var losses = 0;
  //variable for added guesses
  var userTotal = 0;

  //send wins and losses to placeholder div
  $("#numWins").text(wins);
  $("#numLosses").text(losses);


  //~~~~~~~~~~~Functions~~~~~~~~~~~~~~~



  function game() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random);
    $('#computerNum').text(Random);

    greenNum = Math.floor(Math.random() * 11 + 1);
    orangeNum = Math.floor(Math.random() * 11 + 1);
    pinkNum = Math.floor(Math.random() * 11 + 1);
    purpleNum = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);

    
  }
  $('#green').on('click', function () {
    userTotal = userTotal + greenNum;
    console.log(greenNum)
    $('#finalTotal').text(userTotal);
  if (userTotal == Random){;
  winner ();}
  else (userTotal > Random);{
  loser ();}
  });


    $('#orange').on('click', function () {
      userTotal = userTotal + orangeNum;
      console.log(orangeNum);
      $('#finalTotal').text(userTotal); });

      $('#pink').on('click', function () {
        userTotal = userTotal + pinkNum;
        console.log(pinkNum);
        $('#finalTotal').text(userTotal);
      });

      $('#purple').on('click', function () {
        userTotal = userTotal + purpleNum;
        console.log(purpleNum);
        $('#finalTotal').text(userTotal);
      
      
      
      
      });

      

      
  
});
