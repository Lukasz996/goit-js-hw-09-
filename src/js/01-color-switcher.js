const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    const body = document.querySelector('body');
    body.style.background = getRandomHexColor();
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(timer);
});
