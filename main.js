//Get elements from the DOM
const inputs = document.querySelectorAll(".input-wrap input");
const formBtn = document.querySelector("#form-open-btn");
const form = document.querySelector(".sign-up");
const closeBtn = document.querySelector(".close");
const video = document.querySelector('.sign-up video');

//Select all input fields
inputs.forEach(input => {
  //Add a focus event
  input.addEventListener('focus', e => {
    //Add focus styles to the label
    input.previousElementSibling.classList.add('input-focused');
  });
  //Add a blur event
  input.addEventListener('blur', () => {
    //Check if the input field is empty
    if(input.value === "" || input.value === null) {
      //Remove focus styles from the label
      input.previousElementSibling.classList.remove('input-focused');
    }
  });
});

//Add a click event to the form open button
formBtn.addEventListener('click', () => {
  //Add show styles from the form
  form.classList.add('form-show');
  //Hide the form show button
  formBtn.style.display = "none";
});

//Add a click event to the form close button
closeBtn.addEventListener('click', () => {
  //Remove show styles from the form
  form.classList.remove('form-show');
  //Show the form show button
  formBtn.style.display = "block";
});