//create variable for the game state
// create object game state
// add player2Turn as well
// new button play next round
//update to round score.
// take input from players and update.
// multiple rounds of game.
// game rounds 5-rounds, highest scorer is the winner.
// insert a scoreboard table that displays score of each round.
// after every round check for the interest of the player by clicking on next round.
// each round game rules may vary
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let player1Value = "player1";
let player2Value = "player2";


// create variables to store refernces to the necessary DOM nodes

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollbtn = document.getElementById("rollbtn");
const resetbtn = document.getElementById("resetbtn");
const round1btn = document.getElementById("round1");
const round2btn = document.getElementById("round2");
const round3btn = document.getElementById("round3");
const player1 = document.getElementById("name1");
const player2 = document.getElementById("name2");
player1.addEventListener("change", function(){
    player1Value = player1.value;

})
player2.addEventListener("change", function(){
    player2Value = player2.value;

})



// use the EventListeners to roll dice button and log out a random number between 1-6.
// use Math.floor and Math.random fuction.
// function gameRound(){

// }




rollbtn.addEventListener("click", rollDice);   


function rollDice(){
    const randomNumber = Math.floor(Math.random() * 6);
        if (player1Turn) {
            
            player1Score += randomNumber;
            player1Scoreboard.textContent = player1Score;
            player1Dice.textContent = randomNumber;
            player1Dice.classList.remove("active");
            player2Dice.classList.add("active");
            message.textContent = (`Now ${player1Value} Turn`);

        } else {
            player2Score += randomNumber;
            player2Scoreboard.textContent = player2Score;
            player2Dice.textContent = randomNumber;
            player2Dice.classList.remove("active");
            player1Dice.classList.add("active");
            message.textContent = (`Now ${player2Value} Turn`);
           
        }
    
        function showDisplay() {
            rollbtn.style.display = "none";
            resetbtn.style.display = "block";

        }
        if (player1Score >= 20) {
            message.textContent = (`Player ${player1Value} has won!`);
            rollbtn.style.display = "none";
            resetbtn.style.display = "block";
            showDisplay();
        } else if (player2Score >= 20) {
            message.textContent = (`Player ${player1Value} has won!`);
            rollbtn.style.display = "none";
            resetbtn.style.display = "block";
            showDisplay();
        }

        player1Turn = !player1Turn; 

}
   

// now when the game end, it should start again.
resetbtn.addEventListener("click", reset);
    
function reset() {
    //window.location.reload(false);
    message.textContent = "player 1 turn";
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-';
    player2Dice.textContent = '-';
    player1Score = 0;
    player2Score = 0;
    resetbtn.style.display = " none";
    rollbtn.style.display = " block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}
round1btn.addEventListener("click", function () {
    reset();
})
round2btn.addEventListener("click", function () {
    reset();
});
round3btn.addEventListener("click", function () {
    reset();
});
    



