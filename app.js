const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");

function showErrorMessage(input, message) {
  const parentEl = input.parentElement;
  const error = parentEl.querySelector(".input-message");
  error.style.visibility = "visible";
  error.textContent = message;
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (firstNameEl.value === "") {
    showErrorMessage(firstNameEl, "This first name is not allowed");
  } else {
    showSuccessMessage();
  }
});
