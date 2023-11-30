const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timer = null;
let isRunning = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startBtn.disabled = true;
    timer = setInterval(() => {
      const body = document.querySelector('body');
      body.style.background = getRandomHexColor();
    }, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    startBtn.disabled = false;
    clearInterval(timer);
  }
});
