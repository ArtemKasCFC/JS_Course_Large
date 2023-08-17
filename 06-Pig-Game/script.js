'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const changePlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    score[`${activePlayer}`] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[`${activePlayer}`];

    if (score[`${activePlayer}`] >= 10) {
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

      playing = false;
      diceEl.classList.add('hidden');
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  score[0] = 0;
  score[1] = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  if (document.querySelector(`.player--${activePlayer}`).classList.contains('player--winner')) {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  }
  if (document.querySelector(`.player--1`).classList.contains('player--active')) {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  activePlayer = 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  diceEl.classList.add('hidden');
  playing = true;
  currentScore = 0;
});
