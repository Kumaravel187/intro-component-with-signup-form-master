const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

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

function checkRequiredField(inputElArry) {
  inputElArry.forEach(function (inputEl) {
    if (inputEl.value.trim() === "") {
      showErrorMessage(
        inputEl,
        `Please type in your ${getInputElName(inputEl)}`
      );
    } else {
      showSuccessMessage(inputEl);
    }
  });
}

function getInputElName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(email.value)) {
    showSuccessMessage(email);
  } else {
    showErrorMessage(email, `Please use a valid email`);
  }
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequiredField([firstNameEl, lastNameEl, passwordEl]);
  validateEmail(emailEl);
});
