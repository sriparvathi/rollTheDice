//create variable for the game state
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
const round2btn = document.getElementById("round2");
const round3btn = document.getElementById("round3");
const player1 = document.getElementById("name1");
const player2 = document.getElementById("name2");
player1.addEventListener("change", function () {
    player1Value = player1.value;

})
player2.addEventListener("change", function () {
    player2Value = player2.value;

})

rollbtn.addEventListener("click", rollDice);


function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
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


//when the game end, it should start again.
resetbtn.addEventListener("click", reset);

function reset() {
    message.textContent = " ROLL THE DICE! ";
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

round2btn.addEventListener("click", rollDice2);
function rollDice2() {
    const randomNumber2 = Math.floor(Math.random() * 12) + 1;
    if (player1Turn) {

        player1Score += randomNumber2;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randomNumber2;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = (`Now ${player1Value} Turn`);

    } else {
        player2Score += randomNumber2;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randomNumber2;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = (`Now ${player2Value} Turn`);

    }

    function showDisplay() {
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";

    }
    if (player1Score >= 50) {
        message.textContent = (`Player ${player1Value} has won!`);
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";
        showDisplay();
    } else if (player2Score >= 50) {
        message.textContent = (`Player ${player1Value} has won!`);
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";
        showDisplay();
    }

    player1Turn = !player1Turn;

}
reset();


round3btn.addEventListener("click", rollDice3);
function rollDice3() {
    const randomNumber3 = Math.floor(Math.random() * 18) + 1;
    if (player1Turn) {

        player1Score += randomNumber3;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randomNumber3;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = (`Now ${player1Value} Turn`);

    } else {
        player2Score += randomNumber3;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randomNumber3;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = (`Now ${player2Value} Turn`);

    }

    function showDisplay() {
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";

    }
    if (player1Score >= 100) {
        message.textContent = (`Player ${player1Value} has won!`);
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";
        showDisplay();
    } else if (player2Score >= 100) {
        message.textContent = (`Player ${player1Value} has won!`);
        rollbtn.style.display = "none";
        resetbtn.style.display = "block";
        showDisplay();
    }

    player1Turn = !player1Turn;

}
reset();





