// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько
// указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(),
//   которая очищает содержимое div#boxes,
//     тем самым удаляя все созданные элементы.

const refs = {
  inputEl: document.querySelector("input"),
  btnGreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  divEl: document.querySelector("#boxes"),
};

let inputValue = 0;
let px = 30;

refs.inputEl.addEventListener("input", createBoxes);

function createBoxes(event) {
  inputValue = event.currentTarget.value;

  refs.btnGreate.addEventListener("click", (event) => {
    const ev = Number(inputValue);
    for (let i = 0; i < ev; i += 1) {
      refs.divEl.insertAdjacentHTML(
        "beforeend",
        `<div style="width: ${(px += 10)}px; height: ${px}px; background-color: ${getRandomHexColor()};"></div>`
      );
    }
  });
}

refs.btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.divEl.innerHTML = "";
  refs.inputEl.value = "";
  px = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
