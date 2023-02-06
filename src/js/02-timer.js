import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector(`input[type="text"]`);
const btnStart = document.querySelector('button[data-start]');

//
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');
btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      console.log(selectedDates[0]);
      btnStart.disabled = false;
    }
  },
};
// функція з бібліотеки (вкладає в інпут календар)
const calendar = flatpickr(input, options);

btnStart.addEventListener('click', hendleClickByBtnCheckDate);
// заводить кнопка таймер
function hendleClickByBtnCheckDate() {
  const timerId = setInterval(
    () => convertMs(calendar.selectedDates[0] - Date.now()),
    1000
  );
}

// функція запису зворотнього відліку в span
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  daysValue.textContent = `${addLoadingZero(days)}`;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  hoursValue.textContent = `${addLoadingZero(hours)}`;
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  minutesValue.textContent = `${addLoadingZero(minutes)}`;
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  secondsValue.textContent = `${addLoadingZero(seconds)}`;
  return { days, hours, minutes, seconds };
}

function addLoadingZero(value) {
  return String(value).padStart(2, 0);
}
