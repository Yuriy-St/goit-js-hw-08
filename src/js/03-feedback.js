import lodash from 'lodash';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;

let currentValues;
const formKey = 'feedback-form-state';
const savedValues = localStorage.getItem(formKey);

if (savedValues) {
  try {
    currentValues = JSON.parse(savedValues);
    emailEl.value = currentValues.email;
    messageEl.value = currentValues.message;
  } catch (e) {
    console.error(e);
  }
} else {
  formEl.reset();
}

formEl.addEventListener('input', lodash.throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput() {
  currentValues = {
    email: emailEl.value,
    message: messageEl.value,
  };

  localStorage.setItem(formKey, JSON.stringify(currentValues));
}

function onSubmit(event) {
  event.preventDefault();
  console.log(currentValues);
  formEl.reset();
  localStorage.removeItem(formKey);
}
