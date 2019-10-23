$(document).ready(function () {

  //~~~~~~~~~~~Define Variables~~~~~~~~~~~~~~~

  //variable for random number for computer 
  var r
  
  
  random = Math.floor(Math.random() * 101 + 19)
  $('#computerNum').text(random);
  console.log(random)
  var greenNum = Math.floor(Math.random() * 11 + 1);
  var orangeNum = Math.floor(Math.random() * 11 + 1);
  var pinkNum = Math.floor(Math.random() * 11 + 1);
  var purpleNum = Math.floor(Math.random() * 11 + 1);

  //variables for wins & losses
  var wins = 0;
  console.log (wins)
  var losses = 0;
  console.log (losses)
  //variable for added guesses
  var userTotal = 0;

  //send wins and losses to placeholder div
  $("#numWins").text(wins);
  $("#numLosses").text(losses);


  //~~~~~~~~~~~Functions~~~~~~~~~~~~~~~



  function game() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $('#computerNum').text(random);

  
    greenNum = Math.floor(Math.random() * 11 + 1);
    orangeNum = Math.floor(Math.random() * 11 + 1);
    pinkNum = Math.floor(Math.random() * 11 + 1);
    purpleNum = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
  }


  

  //clicking the crystals will tally points
  //if the points go over the computer random number, the user losses and game resets (losses total is updated +1) 
  // if the points == the computer random number, the user wins and game resets (wins total is updated +1 )

  $('#green').on('click', function () {
    userTotal = userTotal + greenNum;
    console.log (userTotal)
    console.log(greenNum)
    $('#finalTotal').text(userTotal);
    if (userTotal == random) {
        wins++;
        $("#numWins").text(wins);
        $('#outcome').text("Winner!");
        game();
    }

    else if (userTotal > random) {
      losses++;
      $("#numLosses").text(losses);
      $('#outcome').text("Loser!");
      game();
    }

  });


  $('#orange').on('click', function () {
    userTotal = userTotal + orangeNum;
    console.log (userTotal)
    console.log(orangeNum);
    $('#finalTotal').text(userTotal);
    if (userTotal == random) {
        wins++;
        $("#numWins").text(wins);
        $('#outcome').text("Winner!");
        game();
    }

    else if (userTotal > random) {
      losses++;
      $("#numLosses").text(losses);
      $('#outcome').text("Loser!");
      game();
    }
  });

  $('#pink').on('click', function () {
    userTotal = userTotal + pinkNum;
    console.log (userTotal)
    console.log(pinkNum);
    $('#finalTotal').text(userTotal);
    if (userTotal == random) {
        wins++;
        $("#numWins").text(wins);
        $('#outcome').text("Winner!");
        game();
    }

    else if (userTotal > random) {
      losses++;
      $("#numLosses").text(losses);
      $('#outcome').text("Loser!");
      game();
    }
  });

  $('#purple').on('click', function () {
    userTotal = userTotal + purpleNum;
    console.log (userTotal)
    console.log(purpleNum);
    $('#finalTotal').text(userTotal);
    if (userTotal == random) {
        wins++;
        $("#numWins").text(wins);
        $('#outcome').text("Winner!");
        game();
    }

    else if (userTotal > random) {
      losses++;
      $("#numLosses").text(losses);
      $('#outcome').text("Loser!");
      game();
    }




  });





});
