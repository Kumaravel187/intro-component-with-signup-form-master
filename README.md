# Frontend Mentor - Intro component with sign up form solution

This is my solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

This is a intro component with sign-up form.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

<img src="image.png" alt="Desktop view" width="200"/>
<img src="image-1.png" alt="Desktop view with form validation failed" width="200"/>
<img src="image-2.png" alt="Desktop view with form validation passed" width="200"/>
<img src="image-3.png" alt="Mobile view" width="200"/>

### Links

- Solution URL: https://hilarious-cassata-c46802.netlify.app/

## My process

I decided to build using a mobile first workflow. I developed the html first, and proceeded to style the page using scss. Afterwhich I used Javascript to add in simple validation.

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Vanilla Javascript
- Mobile-first workflow

### What I learned

Proud of creating a streamlined function for input validation. Replaced repetitive if-else with forEach loop, adhering to the DRY principle. Now, checkRequiredField handles an array of inputs, showing error or success messages based on their content. Efficient and clean approach to form validation.:

```js
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
```

### Continued development

I was not sure on how to add an svg image, in the placeholder section while it is a small part of the project I would like to look into it in the future.

### Useful resources

- [Resource 1](https://www.udemy.com/course/web-projects-with-vanilla-javascript/) - This helped me for building the javascript form login. The instructor explain key steps in using functions to not repeat if else statements. Email validation is also taught in his course.
