var timer;
var correctAnswer = 'cat';
var selectedOptionId;

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = seconds;

    if (--timer < 0) {
      timer = 0;
      stopGame();
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
  var timerDisplay = document.getElementById('timer');
  startTimer(10, timerDisplay);
});

function selectOption(option) {
  if (!selectedOptionId) {
    selectedOptionId = 'option' + (['dog', 'cat', 'bird', 'fish'].indexOf(option) + 1);
    document.getElementById(selectedOptionId).classList.add('selected');
    document.getElementById(selectedOptionId).disabled = true;
    enableSubmit();
  }
}

function enableSubmit() {
  document.getElementById('submitBtn').disabled = false;
}

function checkGuess() {
  var resultMessage = document.getElementById('result');

  if (selectedOptionId) {
    var userGuess = document.getElementById(selectedOptionId).innerText;

    if (userGuess.toLowerCase() === correctAnswer) {
      resultMessage.style.color = '#2ecc71';
      resultMessage.textContent = 'Congratulations! Your guess is correct.';
      document.getElementById(selectedOptionId).classList.add('correct');
      document.getElementById(selectedOptionId).style.backgroundColor="green";
    } else {
      resultMessage.style.color = '#e74c3c';
      
      resultMessage.textContent = 'Oops! Your guess is incorrect. Try again.';
      document.getElementById(selectedOptionId).classList.add('incorrect');
      document.getElementById(selectedOptionId).style.backgroundColor="red";
    }

    stopGame();
  } else {
    resultMessage.style.color = '#e74c3c';
    resultMessage.textContent = 'Please select an option before submitting.';
  }
}

function stopGame() {
  clearTimeout(timer);
  document.querySelectorAll('.option-btn').forEach(function (option) {
    option.disabled = true;
  });
  document.getElementById('submitBtn').disabled = true;
}
