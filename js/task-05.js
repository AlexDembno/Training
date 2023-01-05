// Напиши скрипт который,
//     при наборе текста в инпуте input#name - i
// nput(событие input), подставляет его текущее значение в
// span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous".

const refs = {
  inputEl: document.querySelector("#name-input"),
  spanEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", writeText);

function writeText(event) {
  refs.spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.spanEl.textContent = "Anonymous";
  }
}
