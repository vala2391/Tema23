const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');


const updateCounter = (value) => {
  counterElement.innerText = value;
  localStorage.setItem('counterValue', value.toString());
};

let currentCount = localStorage.getItem('counterValue')
  ? parseInt(localStorage.getItem('counterValue'))
  : 0;


updateCounter(currentCount);


incrementButton.addEventListener('click', () => {
  currentCount += 1;
  updateCounter(currentCount);
});


decrementButton.addEventListener('click', () => {
  currentCount -= 1;
  updateCounter(currentCount);
});