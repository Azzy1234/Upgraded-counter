const counterDisplay = document.getElementById('counter');
let count = 0;

// Get reference to the input field for custom increment value
const incrementInput = document.getElementById('incrementValue');

// Buttons
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Increase count
increaseBtn.addEventListener('click', () => {
  const incrementValue = parseInt(incrementInput.value) || 1; 
  count += incrementValue;
  updateCounter('increase');
});

// Decrease count
decreaseBtn.addEventListener('click', () => {
  const incrementValue = parseInt(incrementInput.value) || 1;  
  count -= incrementValue;
  updateCounter('decrease');
});

// Reset count
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter('reset');
});

// Update the counter display with visual feedback
function updateCounter(action) {
  counterDisplay.textContent = count;

  // Visual feedback for color change
  if (action === 'increase') {
    counterDisplay.classList.add('increase');
    counterDisplay.classList.remove('decrease', 'reset');
  } else if (action === 'decrease') {
    counterDisplay.classList.add('decrease');
    counterDisplay.classList.remove('increase', 'reset');
  } else {
    counterDisplay.classList.add('reset');
    counterDisplay.classList.remove('increase', 'decrease');
  }
}
