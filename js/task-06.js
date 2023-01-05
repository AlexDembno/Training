const inputEL = document.querySelector("#validation-input");
const data = Number(inputEL.dataset.length);
console.log(data);

inputEL.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === data) {
    inputEL.classList.remove("invalid");
    inputEL.classList.add("valid");
  } else {
    inputEL.classList.remove("valid");
    inputEL.classList.add("invalid");
  }
});
