// Here we are checking for form validity
const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  // get form controls to check for validity
  const email = $('#email_address');
  const name = $('#fname');
  const message = $('#message');

  // check user entries for validity
  let isValid = true;
//   patterns for checking name and no. for characters in it and pattern for vlid email
  let namepattern = /^[a-zA-Z]{2,50}$/;
  let emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   If the value isnt filled or pattern doesn't matched we get a message asking to fille the correct details
  if (name.value == '') {
    name.nextElementSibling.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else if (!namepattern.test(name.value)) {
        name.value = ''
        name.nextElementSibling.nextElementSibling.textContent='Please enter name with letters only';
  }
  else {
    name.nextElementSibling.nextElementSibling.textContent = '';
  }
  if (email.value == '') {
    email.nextElementSibling.nextElementSibling.textContent = 'This field is required.';
    isValid = false;
  } else if (!emailpattern.test(email.value)) {
    email.value = ''
    email.nextElementSibling.nextElementSibling.innerHTML ='Please enter a valid email address.';
} 
  else {
    email.nextElementSibling.nextElementSibling.innerHTML = '';
  }

  if (message.value == '') {
    message.nextElementSibling.nextElementSibling.textContent= 'Please type a message.';
    isValid = false;
  } else {
    $('#message').nextElementSibling.nextElementSibling.textContent = '';
  }


  // submit the form if all fields are valid
  if (isValid == true) {
    resetForm();
  }
};

//Since we arent using a database, we will just reset all the fields and alert that the form has been submitted
const resetForm = () => {
  $('form').reset();
  $('#email_address').value = '';
  $('#fname').value = '';
  $('#message').value = '';
  alert('Your form has been submitted, a representative will get in touch with you soon!')
};

// we add an event listen on submit and call processEntries on click
document.addEventListener('DOMContentLoaded', () => {
  $('#submit').addEventListener('click', processEntries);
});