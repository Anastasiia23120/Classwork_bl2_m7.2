const btnEl = document.querySelector('.js-click');
// console.log(btnEl);
const boxEl = document.querySelector('.js-box');
// console.log(boxEl);
const resetBtnEl = document.querySelector('.js-reset');
// console.log(resetBtnEl);

let step = 0;

/* handleBtnClick / btnClickHandler / obBtnClick */

const obBtnClick = () => {
  step += 50;

  boxEl.style.transform = `translate(${step}px, ${step}px`;

  if (step === 200) {
    btnEl.removeEventListener('click', obBtnClick);
  }
};

const onResetBtnClick = () => {
  step = 0;

  boxEl.style.transform = `translate(${step}px, ${step}px`;
  btnEl.addEventListener('click', obBtnClick);
};

btnEl.addEventListener('click', obBtnClick);
resetBtnEl.addEventListener('click', onResetBtnClick);
