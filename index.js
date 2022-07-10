'use strict';

//Buttons variables
const btnRollDice = document.querySelector('.btn-roll-dice');
const btnHold = document.querySelector('.btn-hold');
const btnNewGame = document.querySelector('.btn-new-game');

//Player 1 variables 
const player1 = document.querySelector('.player-1');
const currentScore1 = document.querySelector('.current-score1');
const score1 = document.querySelector('.score1');
const labelPlayer1 = document.querySelector('.label-player-1');

//Player 2 variables
const player2 = document.querySelector('.player-2');
const currentScore2 = document.querySelector('.current-score2');
const score2 = document.querySelector('.score2');
const labelPlayer2 = document.querySelector('.label-player-2');

const dice = document.querySelector('.dice');


//Score variables
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currScore = 0;

let playing = true;


//Buttons 
btnRollDice.addEventListener('click', rollDice);

btnHold.addEventListener('click', holdScore);

btnNewGame.addEventListener('click', newGame);



function newGame() {
    playing = true;

    scorePlayer1 = 0;
    scorePlayer2 = 0;
    currScore = 0;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    dice.style.display = 'none';

    player2.classList.remove('player-active')

    if (player1.classList.contains('winner')) {
        player1.classList.remove('winner');
        labelPlayer1.textContent = 'PLAYER 1';
        labelPlayer1.style.color = '#333';
    } else if (player2.classList.contains('winner')) {
        player2.classList.remove('winner');
        labelPlayer2.textContent = 'PLAYER 2';
        labelPlayer2.style.color = '#333';
    }
}




function skipTurn() {
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
    currScore = 0;
}



function holdScore() {

    if (playing) {
        if (player1.classList.contains('player-active')) {
            scorePlayer1 += currScore;
            score1.textContent = scorePlayer1;
            if (scorePlayer1 >= 100) {
                gameOver();
            } else {
                currentScore1.textContent = 0;
                skipTurn();
            }

        } else if (player2.classList.contains('player-active')) {
            scorePlayer2 += currScore;
            score2.textContent = scorePlayer2;
            if (scorePlayer2 >= 100) {
                gameOver();
            } else {
                currentScore2.textContent = 0;
                skipTurn();
            }
        }
    }

}


function gameOver() {
    playing = false;
    if (scorePlayer1 >= 100) {
        player1.classList.add('winner');
        labelPlayer1.textContent = '🎉 Winner!';
        labelPlayer1.style.color = '#C3446B';
    } else if (scorePlayer2 >= 100) {
        player2.classList.add('winner');
        labelPlayer2.textContent = '🎉 Winner!';
        labelPlayer2.style.color = '#C3446B';
    }
}


function rollDice() {

    if (playing) {
        const random = Math.trunc((Math.random() * 6) + 1);
        dice.style.display = 'block';
        if (player1.classList.contains('player-active')) {
            if (random !== 1) {
                dice.src = `img/dice-${random}.png`;
                currScore += random;
                currentScore1.textContent = currScore;
            } else {
                dice.src = `img/dice-${random}.png`;
                currentScore1.textContent = 0;
                skipTurn();
            }
        } else if (player2.classList.contains('player-active')) {
            if (random !== 1) {
                dice.src = `img/dice-${random}.png`;
                currScore += random;
                currentScore2.textContent = currScore;
            } else {
                dice.src = `img/dice-${random}.png`;
                currentScore2.textContent = 0;
                skipTurn();
            }
        }
    }

}


