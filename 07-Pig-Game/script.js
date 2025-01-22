'use strict';

//  Selecting elements by ID && class
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Resetting initial state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//diceROll func
const roll = function() {
  // gen random dice num
  const dice = Math.trunc((Math.random() * 6) + 1);
  console.log(dice);
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check if to shift player
};

// rolling the dice
btnRoll.addEventListener("click", roll);