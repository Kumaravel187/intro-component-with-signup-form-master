const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(firstNameEl.value);
});
