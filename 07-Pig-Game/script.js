'use strict';

//  Selecting elements by ID && class
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Resetting initial state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');