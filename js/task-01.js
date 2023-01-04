// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега < h2 >) и количество элементов
// в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// const categeries = document.querySelector("#categories");
// console.log(categeries.lastElementChild);

const categeries = document.querySelectorAll("h2");
console.log(`Number of categories: ${categeries.length}`);

function numberOf(categeries) {
  for (const el of categeries) {
    console.log(`Category: ${el.textContent}`);
    console.log(`Category: ${el.nextElementSibling.children.length}`);
  }
}

numberOf(categeries);
