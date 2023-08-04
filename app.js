const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (firstNameEl.value === "") {
    showErrorMessage(input);
  } else {
    showSuccessMessage();
  }
});
