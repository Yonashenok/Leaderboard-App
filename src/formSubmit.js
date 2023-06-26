import { API_URL } from './config.js';
import fetchPro from './fetchPro.js';

const userName = document.querySelector('.score-name');
const userScore = document.querySelector('.score-amount');

const formSubmitHandler = async (e) => {
  e.preventDefault();
  const data = {
    user: userName.value,
    score: +userScore.value,
  };
  userName.value = '';
  userScore.value = '';
  fetchPro(API_URL, data);
};
export default formSubmitHandler;
