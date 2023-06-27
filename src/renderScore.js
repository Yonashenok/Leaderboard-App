import fetchPro from './fetchPro.js';
import { API_URL } from './config.js';

const scoreContainer = document.querySelector('.score-container');

const renderScore = async () => {
  const { result } = await fetchPro(API_URL);
  scoreContainer.innerHTML = '';
  const markUp = result
    .map(
      (user) => ` <div class="score-element">${user.user}: ${user.score}</div>`
    )
    .join('');
  scoreContainer.insertAdjacentHTML('afterbegin', markUp);
};

export default renderScore;
