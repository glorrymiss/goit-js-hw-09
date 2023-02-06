const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', hendleClickOnBtnStart);
btnStop.addEventListener('click', hendleClickOnBtnStop);
btnStop.disabled = true;

function hendleClickOnBtnStart(event) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function hendleClickOnBtnStop(event) {
  btnStop.disabled = true;
  btnStart.disabled = false;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
