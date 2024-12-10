'use strict';

let number = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const reset = function () {
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').style.background = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // no number case
  if (!guess) {
    document.querySelector('.message').textContent = '⛔NO NUMBER!';
  }
  // when number is equal
  else if (guess === number) {
    document.querySelector('.message').textContent =
      '🎉YOU GOT THAT! CORRECT ANSWER!🥳';
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when number is less than the guess
  else if (guess > number) {
    if (score >= 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '💹TOO HIGH!';
    } else if (score < 1) {
      document.querySelector('.message').textContent = '😥GAME OVER! TRY AGAIN';
    }
  }
  // when number is greater than the guess
  else if (guess < number) {
    if (score >= 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉TOO LOW!';
    } else if (score < 1) {
      document.querySelector('.message').textContent = '😥GAME OVER! TRY AGAIN';
    }
  }
});

document.querySelector('.again').addEventListener('click', reset);
