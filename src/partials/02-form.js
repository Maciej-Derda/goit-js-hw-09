const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-input');
const message = document.querySelector('.feedback-textarea');
const localStorageKey = 'feedback-form-state';
let localStorageValue = {};
//input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name === 'email') {
    localStorageValue.email = value.trim();
  }
  if (name === 'message') {
    localStorageValue.message = value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageValue));
});
//submit
form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill out all required fields!');
  } else {
    console.log(localStorageValue);
    localStorage.removeItem(localStorageKey);
    form.reset();
    alert('Form has been submitted successfully. Thank you!');
  }
});
//restore
const storedValues = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
email.value = storedValues.email ?? '';
message.value = storedValues.message ?? '';
