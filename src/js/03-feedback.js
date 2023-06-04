import lodash from 'lodash';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;

let currentValues;
const savedValues = localStorage.getItem('feedback-form-state');

if (savedValues) {
  try {
    currentValues = JSON.parse(savedValues);
    emailEl.value = currentValues.email;
    messageEl.value = currentValues.message;
  } catch (e) {
    console.error(e);
  }
} else {
  formClear();
}

formEl.addEventListener('input', lodash.throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput() {
  currentValues = {
    email: emailEl.value,
    message: messageEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentValues));
}

function onSubmit(event) {
  event.preventDefault();
  console.log(currentValues);
  formClear();
  localStorage.removeItem('feedback-form-state');
}

function formClear() {
  emailEl.value = '';
  messageEl.value = '';
}
