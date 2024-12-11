'use strict';

// Generating a random number between 1 and 20
let number = Math.trunc(Math.random() * 20 + 1);

// Initial score set to 20
let score = 20;
// Initial high score set to 0
let highScore = 0;

// A function to handle updating the displayed message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// A function to reset the whole game except for the high score, to its initial state
const reset = function () {
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').style.background = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  displayMessage('Start guessing...');
};

// Handling the CHECK button to check if the guess is equal to or
// different from the randomly generated nuber
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when no number or zero is inputted
  if (!guess) {
    displayMessage('⛔NO NUMBER!');
  }
  // when number is equal to the guess
  else if (guess === number) {
    displayMessage('🎉YOU GOT THAT! CORRECT ANSWER!🥳');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    // Starting game again 3 seconds after correct guess
    setTimeout(reset, 3000);
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when number is different from the guess -- higher or lower
  else if (guess !== number) {
    // When score is still higher than 0
    if (score > 0) {
      displayMessage(guess > number ? '💹TOO HIGH!' : '📉TOO LOW');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // if score reaches 0
    else if (score === 0) {
      displayMessage('😥GAME OVER! TRY AGAIN');
    }
  }
});

// Handling the AGAIN button - resseting the game except for the high score
document.querySelector('.again').addEventListener('click', reset);
