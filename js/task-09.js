// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color
// и выводит значение цвета в span.color.

const refs = {
  spanEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
};

refs.buttonEl.addEventListener("click", changeColor);

function changeColor(event) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
