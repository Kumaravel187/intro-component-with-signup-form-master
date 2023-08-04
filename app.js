const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");

function showErrorMessage(input, message) {
  const parentEl = input.parentElement;
  const error = parentEl.querySelector(".input-message");
  const inputEl = parentEl.querySelector("input");
  inputEl.classList.add("error");
  error.style.visibility = "visible";
  error.textContent = message;
}

function showSuccessMessage(input) {
  const parentEl = input.parentElement;
  const success = parentEl.querySelector(".input-message");
  const inputEl = parentEl.querySelector("input");
  success.style.visibility = "hidden";
  inputEl.classList.add("success");
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (firstNameEl.value === "") {
    showErrorMessage(firstNameEl, "This first name is not allowed");
  } else {
    showSuccessMessage(firstNameEl);
  }
});
