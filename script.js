'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  var temp = 0;
  for (var i = 1; i <= guess / 2; i++) {
    if (guess % i === 0) {
      temp += i;
    }
  }

  if (temp === guess && temp !== 0) {
    document.querySelector('.message').textContent = 'Perfect!';
    console.log('It is a perfect number.');

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    document.querySelector('.message').textContent = '⛔️ Not Perfect!';
    console.log('It is not a perfect number.');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
