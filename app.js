// Get references to form elements
const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

// Function to show error message for input validation
function showErrorMessage(input, message) {
  const parentEl = input.parentElement;

  // Find the error message element and input element
  const error = parentEl.querySelector(".input-message");
  const inputEl = parentEl.querySelector("input");

  // Add 'error' class to input for styling
  inputEl.classList.add("error");

  // Make error message visible and set its text content
  error.style.visibility = "visible";
  error.textContent = message;
}

// Function to show success message for input validation
function showSuccessMessage(input) {
  const parentEl = input.parentElement;

  // Find the success message element and input element
  const success = parentEl.querySelector(".input-message");
  const inputEl = parentEl.querySelector("input");

  // Hide success message
  success.style.visibility = "hidden";

  // Add 'success' class to input for styling
  inputEl.classList.add("success");
}

// Function to check if required fields are filled
function checkRequiredField(inputElArray) {
  inputElArray.forEach(function (inputEl) {
    if (inputEl.value.trim() === "") {
      // Show error message if input is empty
      showErrorMessage(inputEl, `${getInputElName(inputEl)} cannot be empty!`);
    } else {
      // Show success message if input is filled
      showSuccessMessage(inputEl);
    }
  });
}

// Function to get capitalized input element name
function getInputElName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function to validate email using regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(email.value)) {
    // Show success message if email is valid
    showSuccessMessage(email);
  } else {
    // Show error message if email is invalid
    showErrorMessage(email, `Please use a valid email`);
  }
}

// Add submit event listener to form
formEl.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Check required fields and validate email
  checkRequiredField([firstNameEl, lastNameEl, passwordEl]);
  validateEmail(emailEl);
});
