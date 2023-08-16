'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

let number = Math.trunc(Math.random() * 20) + 1;

let check = document.querySelector('.check');
let score = 20;
let highscore = 0;

const displayMessage = message => (document.querySelector('.message').textContent = message);
check.addEventListener('click', () => {
  let guess = +document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('Type a number!');
  } else if (guess !== number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess < number ? 'Too low' : 'Too high');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage("It's over :(");
    }
  } else if (guess === number) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
