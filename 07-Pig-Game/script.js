'use strict';

//  Selecting elements by ID && class
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');
const current0El = document.querySelector('#current--0');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let currentScore, playing, activePlayer, totalScores;
// Resetting initial state
const reset = function() {
  totalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

reset();

// switch player func
const switchPlayer = function() {
  // set initial current scores to 0
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Update UI to reflect the new active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//diceROll func
const roll = function() {
  if (playing) {
// gen random dice num
const dice = Math.trunc((Math.random() * 6) + 1);
// display dice
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
// check if to switch player
if (dice != 1) {
  // update current score
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
  // switch player
  switchPlayer();
  }
  }
};

// rolling the dice
btnRoll.addEventListener("click", roll);
btnHold.addEventListener("click", function() {
  if (playing) {
  // addcurrent score to total score of active player
  totalScores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
  // check if total is 100 if yes end game if no switch player
  if (totalScores[activePlayer] < 100) {
    switchPlayer();
  } else {
    // Finish game
    playing = false;
    diceEl.classList.remove('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
  }
}});

// resetting the game
btnNew.addEventListener("click", reset);