import './style/index.css';
import renderScore from './renderScore.js';
import formSubmitHandler from './formSubmit.js';

const form = document.querySelector('.score-form');
const refreshBtn = document.querySelector('.refresh-btn');

const init = () => {
  renderScore();
  form.addEventListener('submit', formSubmitHandler);
  refreshBtn.addEventListener('click', renderScore);
};
init();
