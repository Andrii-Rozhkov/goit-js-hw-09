const btn = document.querySelector('.change-color');
const background = document.querySelector('span.color');

btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;

  background.style.backgroundColor = color;
}
