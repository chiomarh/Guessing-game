let secretNumber;
let guessesLeft = 5;

function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  guessesLeft--;

  if (guess === secretNumber) {
    displayMessage(`Congratulations! You guessed the number ${secretNumber}.`);
    disableInputAndButton();
  } else if (guessesLeft === 0) {
    displayMessage(`oops, sorry you've run out of guesses try again. The correct number was ${secretNumber}.`);
    disableInputAndButton();
  } else {
    displayMessage(`Incorrect guess. ${guessesLeft} guesses left.`);
    if (guess < secretNumber) {
      displayMessage('Try a higher number.');
    } else {
      displayMessage('Try a lower number.');
    }
  }

  guessInput.value = '';
  guessInput.focus();
}

function displayMessage(message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

function disableInputAndButton() {
  const guessInput = document.getElementById('guessInput');
  const submitButton = document.querySelector('button');
  guessInput.disabled = true;
  submitButton.disabled = true;
}

window.onload = function () {
  generateSecretNumber();
  const submitButton = document.querySelector('button');
  submitButton.addEventListener('click', checkGuess);
};

