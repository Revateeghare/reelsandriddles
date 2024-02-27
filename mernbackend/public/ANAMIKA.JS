// Add a click event listener to each small image
const smallImages = document.querySelectorAll('.small-image');
const timerSpan = document.getElementById('time');
const objectCountSpan = document.getElementById('objectCount').querySelector('span');

let objectCount = 10; // Initial object count
let secondsRemaining = 600; // 10 minutes
let timerInterval; // Variable to store the timer interval

smallImages.forEach(image => {
  image.addEventListener('click', function() {
    // Hide the clicked small image
    this.style.display = 'none';

    // Decrease object count when an image is removed
    if (objectCount > 0) {
      objectCount--;
      objectCountSpan.textContent = objectCount;
    }

    // Stop the timer if object count reaches zero
    if (objectCount === 0) {
      clearInterval(timerInterval);
      alert('Congratulations! You found all items!');
    }
  });
});

function updateTimer() {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerSpan.textContent = formattedTime;
}

function decreaseTimer() {
  if (secondsRemaining > 0) {
    secondsRemaining--;
    updateTimer();
  } else {
    clearInterval(timerInterval);
    alert('Time is up!'); // You can customize this message or perform other actions when the time is up
  }
}

timerInterval = setInterval(decreaseTimer, 1000);

function removeListItem(itemId) {
  var itemList = document.getElementById("list");
  var itemToRemove = document.getElementById(itemId);

  // Check if the item exists in the list
  if (itemToRemove) {
    // Remove the specified item from the list
    itemList.removeChild(itemToRemove);
  } else {
    alert("Item not found!");
  }
}

var clueClickCount = 0;
var clueButton = document.getElementById('Clue');

clueButton.addEventListener('click', function() {
  if (clueClickCount < 2) {
    var allImages = document.querySelectorAll('.small-image');

    allImages.forEach(function(image) {
      image.classList.remove('glow');
    });

    var randomIndex = Math.floor(Math.random() * allImages.length);
    var randomImage = allImages[randomIndex];

    randomImage.classList.add('glow');

    setTimeout(function() {
      randomImage.classList.remove('glow');
    }, 3000);
    clueClickCount++;
    if (clueClickCount === 2) {
      clueButton.disabled = true;
      clueButton.style.backgroundColor = 'grey';
    }
  }
});
