const input = document.querySelector('input[type="number"]');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('div[id="boxes"]');

createBtn.addEventListener('click', createMarkup);

destroyBtn.addEventListener('click', cleanUp);

let sizes = 30;

function cleanUp() {
  boxes.innerHTML = '';
  sizes = 30;
}

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log('Error');
    return;
  }
  boxes.innerHTML = '';
  createBoxes(input.value);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = RandomHexColor();
    boxes.append(myBox);

    sizes += 10;
  }

  input.value = '';
  sizes = 30;
}

function RandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
