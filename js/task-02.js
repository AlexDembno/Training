// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.
// Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

function markup(ingredients) {
  ingredients.map((el) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = `${el}`;
    listEl.append(itemEl);
  });
}

markup(ingredients);
