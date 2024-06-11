const createSquare = document.querySelector('button[data-create]');
const destroySquare = document.querySelector('button[data-destroy]');
const inputQuantity = document.querySelector('input[type="number"]');
const boxes = document.querySelector("#boxes");

createSquare.addEventListener("click", function() {
  const amount = inputQuantity.value;
  const maxValue = Number(inputQuantity.max);
  const minValue = Number(inputQuantity.min);

  if (amount >= minValue && amount <= maxValue) {
    clearSquares(); // Видаляємо попередні квадрати перед створенням нових
    createBoxes(amount);
  }
});


destroySquare.addEventListener("click", function() {
  inputQuantity.value = '';
  clearSquares();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    const square = document.createElement('div');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = color;
    boxes.appendChild(square);
  }
}


function clearSquares() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
