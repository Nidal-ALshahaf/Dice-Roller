var scores, roundScore, activePlayer, gamePlaying


init();


document.querySelector(".btn-roll").addEventListener("click", function () {


  if (gamePlaying) {


    // 1- Random Number
    var dice = Math.floor(Math.random() * 6 + 1);

    // 2- Display The Result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png"

    // 3- Update The Round Score IF The Rolled Number Was Not a 1

    if (dice !== 1) {

      // Add Score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
      // console.log(roundScore)

    } else {
      // Next Player 
      nextPlayer();
    }


  }

})


document.querySelector(".btn-hold").addEventListener("click", function () {


  if (gamePlaying) {

    // Add CuRRENT Score  To Gloubel Score
    scores[activePlayer] += roundScore;
    // console.log(scores[activePlayer])

    // Update The UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    // console.log(scores[activePlayer])


    var input = document.querySelector(".final-score").value;

    var winningScore;

    if(input){
      winningScore = input;
    }else{
      winningScore = 50;
    }

    //Ckeck If Player Won The Game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      gamePlaying = false

    } else {
      // Next Player 
      nextPlayer();
    }



  }


})



function nextPlayer() {
  // Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;


  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none"



}


document.querySelector(".btn-new").addEventListener("click", function () {
  init();


})



function init() {


  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true



  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";


  document.getElementById("name-0").textContent = "player!";
  document.getElementById("name-1").textContent = "player!";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");







}





























