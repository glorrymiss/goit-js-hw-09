import Notiflix from 'notiflix';
import 'notiflix/build/notiflix-notify-aio';

// КРОКИ

// 1.ВИТЯГНУТИ ЗНАЧЕННЯ ІНПУТІВ ДОСТУКУЄМОСЬ ДО ФОРМИ
// 2. НА ФОРМУ СТВОРИТИ ОПЕРАТОРА З ПОДІЄЮ САБМІТ ЯКИЙ МАЄ ФУНКЦІЮ СТВОРИТИ ПРОМІСИ(СМС)
// 3. У ФУНКЦІЇ SUBMIT ПРОПИСАТИ ЦИКЛ (НА КОЖНІЙ ІТЕРАЦІЇ -> СТВОРЮЄТЬСЯ НОВИЙ PROMISE)
// 4. В TIMER - ЗАПИСУЄМО ЧАС ІЗ ЗАТРИМКОЮ СТВОРЕННЯ ПРОМІСІВ

const form = document.querySelector('form');

form.addEventListener('submit', hendleClickSubmit);
// form.addEventListener('input', hendleInputDate);
function hendleClickSubmit(event) {
  event.preventDefault();

  //  достукалась до значення інпутів форми
  // const delay = event.currentTarget.elements.delay.value;
  // console.log(delay);
  const {
    elements: { delay, amount, step },
  } = event.currentTarget;

  //   проходимо цикл додаємо на кожному проміс час кроку
  let timer = +delay.value;
  for (let position = 1; position <= +amount.value; position++) {
    createPromise(position, timer)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    timer += +step.value;
  }
  form.reset();
}

// функція створення промісів рандомно
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject({ position, delay });
        // Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
