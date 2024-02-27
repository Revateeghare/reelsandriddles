var timer;
var correctAnswer = 'Agetha Harkness';
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
      // Get the index of the selected option
      var optionIndex = ['Agetha Harkness', 'Kate Bishop', 'Scarlett Witch', 'Black Widow'].indexOf(option);
  
      // Check if the option is found in the array
      if (optionIndex !== -1) {
        // Add 1 to the index to get the correct button number
        selectedOptionId = 'option' + (optionIndex + 1);
        
        // Add 'selected' class to highlight the selected option
        document.getElementById(selectedOptionId).classList.add('selected');
        
        // Disable the selected option to prevent further clicks
        document.getElementById(selectedOptionId).disabled = true;
  
        // Enable the submit button
        enableSubmit();
      }
    }
  }
function enableSubmit() {
  document.getElementById('submitBtn').disabled = false;
}

function checkGuess() {
    var resultMessage = document.getElementById('result');
  
    if (selectedOptionId) {
      var userGuess = document.getElementById(selectedOptionId).innerText;
  
      if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
        resultMessage.style.color = '#2ecc71';
        resultMessage.textContent = 'Congratulations! Your guess is correct.';
        document.getElementById(selectedOptionId).classList.add('correct');
        document.getElementById(selectedOptionId).style.backgroundColor = 'green';
      } else {
        resultMessage.style.color = '#e74c3c';
  
        resultMessage.textContent = 'Oops! Your guess is incorrect. Try again.';
        document.getElementById(selectedOptionId).classList.add('incorrect');
        document.getElementById(selectedOptionId).style.backgroundColor = 'red';
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
