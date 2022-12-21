'use strict';

// Functions
const switchPlayer = function () {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  player = player === 0 ? 1 : 0;
};

// Get Elements
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

const scores = [0, 0];
let scoreCurrent = 0;
let player = 0;
let playing = true;

// Initial stage
const initialStage = function () {
  scoreCurrent = 0;
  player = 0;
  playing = true;
  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
    document.getElementById(`score--${i}`).textContent = 0;
  }
  diceEl.classList.add('hidden');
  const isP1Active = document
    .querySelector('.player--0')
    .classList.contains('player--active');
  if (!isP1Active) {
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }
};

initialStage();

// Roll the dice
rollBtn.addEventListener('click', function () {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${diceNum}.png`;
    diceEl.classList.remove('hidden');
    if (diceNum !== 1) {
      scoreCurrent += diceNum;
      document.getElementById(`current--${player}`).textContent = scoreCurrent;
    } else {
      scoreCurrent = 0;
      document.getElementById(`current--${player}`).textContent = scoreCurrent;

      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  scores[player] += scoreCurrent;
  document.getElementById(`score--${player}`).textContent = scores[player];
  scoreCurrent = 0;
  document.getElementById(`current--${player}`).textContent = scoreCurrent;

  if (playing) {
    if (scores[player] < 20) {
      switchPlayer();
    } else {
      diceEl.classList.add('hidden');
      document.getElementById(`score--${player}`).textContent = scores[player];

      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
      playing = false;
    }
  }
});

newBtn.addEventListener('click', function () {
  if (!playing) {
    document
      .querySelector(`.player--${player}`)
      .classList.remove('player--winner');
  }
  initialStage();
});
