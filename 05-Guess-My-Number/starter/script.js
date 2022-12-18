'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (guess === 0) {
      document.querySelector('.message').textContent = '🥱 No number!!!';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '🙃 Too High!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '😏 Too Low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🤩 Bingo!!!';
      document.querySelector('body').style.backgroundColor = '#00bcd4';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
    }
  } else if (score === 0) {
    document.querySelector('.message').textContent = '👻 Game Over!!!';
  }

  console.log(guess, typeof guess);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
