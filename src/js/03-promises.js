import Notiflix from 'notiflix';
import 'notiflix/build/notiflix-notify-aio';

// КРОКИ

// 1.ВИТЯГНУТИ ЗНАЧЕННЯ ІНПУТІВ ДОСТУКУЄМОСЬ ДО ФОРМИ
// 2. НА ФОРМУ СТВОРИТИ ОПЕРАТОРА З ПОДІЄЮ САБМІТ ЯКИЙ МАЄ ФУНКЦІЮ СТВОРИТИ ПРОМІСИ(СМС)
// 3.В  ПРОМІСІ ПРОПИСАТИ AMOUNT - К-СТЬ ПРОМІСІВ ЯКІ МАЮТЬ СТВОРИТИСЬ
// 4. В ДЕЛАЙ - ЗАПИСУЄМО ЧАС ІЗ ЗАТРИМКОЮ СТВОРЕННЯ ПРОМІСІВ

const form = document.querySelector('form');

form.addEventListener('submit', hendleClickSubmit);
// form.addEventListener('input', hendleInputDate);
function hendleClickSubmit(event) {
  event.preventDefault();
  //  достукалась до значення інпутів форми
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  console.log(delay.value);
  //   проходимо цикл додаємо на кожному проміс час кроку
  let timer = +delay.value;
  for (let i = 1; i <= amount.value; i++) {
    if (i === 1) {
      timer = +delay.value;
      createPromise(i, timer)
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
      continue;
    } else {
      timer += +step.value;
    }
    createPromise(i, timer)
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
  }
  console.log(timer);
}
// функція створення промісів рандомно
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
        // Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject({ position, delay });
        // Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
