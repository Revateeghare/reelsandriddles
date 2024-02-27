const correctAnswer = 'Option 3'; // Change this to the correct option

function checkAnswer(selectedOption) {
  const resultElement = document.getElementById('result');
  const optionDivs = document.querySelectorAll('.option');

  if (selectedOption === correctAnswer) {
    resultElement.textContent = 'Correct!';
    resultElement.style.color = 'green';
    optionDivs.forEach(div => {
      if (div.textContent === selectedOption) {
        div.classList.add('correct');
      } else {
        div.classList.remove('correct');
        div.classList.remove('incorrect');
      }
    });
  } else {
    resultElement.textContent = 'Incorrect. Try again!';
    resultElement.style.color = 'red';
    optionDivs.forEach(div => {
      if (div.textContent === selectedOption) {
        div.classList.add('incorrect');
      } else if (div.textContent === correctAnswer) {
        div.classList.add('correct');
      } else {
        div.classList.remove('correct');
        div.classList.remove('incorrect');
      }
    });
  }
}
