// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
  divEl: document.querySelector("#counter"),
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  spanEl: document.querySelector("#value"),
  incrementEl: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.divEl.addEventListener("click", counter);

function counter(event) {
  if (event.target === refs.decrementEl) {
    refs.spanEl.textContent = counterValue -= 1;
  }
  if (event.target === refs.incrementEl) {
    refs.spanEl.textContent = counterValue += 1;
  }
}
