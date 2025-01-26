const fieldEl = document.querySelector('.js-user-name');
// console.log(fieldEl);
const checkboxPolicy = document.querySelector('.js-policy-checkbox');
// console.log(checkboxPolicy);

// fieldEl.addEventListener('input', () => {
//   console.dir(fieldEl.value);
// });

// fieldEl.addEventListener('blur', () => {
//   const fieldValue = fieldEl.value;

//   if (fieldValue === '') {
//     alert('Поле з імʼям має бути заповнено!');

//     return;
//   }
//   alert(`Вітаємо ${fieldValue}`);
// });

// fieldEl.addEventListener('change', () => {
//   const fieldValue = fieldEl.value;

//   if (fieldValue === '') {
//     alert('Поле з імʼям має бути заповнено!');

//     return;
//   }
//   alert(`Вітаємо ${fieldValue}`);
// });

checkboxPolicy.addEventListener('change', () => {
  if (checkboxPolicy.checked) {
    alert('Done!');
  }
});
