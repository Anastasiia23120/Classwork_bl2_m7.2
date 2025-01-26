const formEl = document.querySelector('.js-feedback-form');
// console.log(formEl);

formEl.addEventListener('submit', event => {
  event.preventDefault();

  console.dir(formEl);

  const formDate = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
    [formEl.elements.comment.name]: formEl.elements.comment.value,
  };

  console.log(formDate);

  formEl.reset();
});

// const key = 'firstName';
// const user = {
//   [key]: 'Anastasiia',
// };
// console.log(user);
