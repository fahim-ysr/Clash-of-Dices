'use strict';

let currentScore, scores, active_player, playing;

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initialization of datas
const init = function () {
  currentScore = 0;

  // Final scores
  scores = [0, 0];
  active_player = 0;
  playing = true;

  // Initializing player scores to 0.
  score0.textContent = 0;
  score1.textContent = 0;

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');

  // Initially hiding the dice
  dice.classList.add('hidden');
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${active_player}`).textContent =
    currentScore;
  active_player = active_player === 0 ? 1 : 0;
  active_player === 0
    ? player1.classList.remove('player--active')
    : player0.classList.remove('player--active');
  active_player === 0
    ? player0.classList.add('player--active')
    : player1.classList.add('player--active');
};

// Button Roll Function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating a random number between 1 and 6
    const diceNum = Math.floor(Math.random() * 6) + 1;

    // Shows the dice
    dice.classList.remove('hidden');
    dice.src = `assets/dice-${diceNum}.jpg`;

    // When dice number is not 1, adds dice to current score
    if (diceNum > 1) {
      // Updating the current score
      currentScore += diceNum;
      document.getElementById(`current--${active_player}`).textContent =
        currentScore;

      // When dice number is 1
    } else {
      // Switches player
      switchPlayer();
    }
  }
});

// Button Hold Function
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add the numbers to the current score and shift to the other player's turn
    scores[active_player] += currentScore;
    document.getElementById(`score--${active_player}`).textContent =
      scores[active_player];
    if (scores[active_player] >= 100) {
      //Endgame
      dice.classList.add('hidden');
      active_player === 0
        ? player1.classList.remove('player--active')
        : player0.classList.remove('player--active');
      active_player === 0
        ? player0.classList.add('player--winner')
        : player1.classList.add('player--winner');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  //Reset game
  init();
});
