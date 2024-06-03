const btn = document.querySelector('.change-color');
const span = document.querySelector('span.color');
const background = document.querySelector('body');

btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;

  background.style.backgroundColor = color;
  span.style.backgroundColor = color;
}
