import './style/index.css';
import renderScore from './renderScore.js';
import formSubmitHandler from './formSubmit.js';
import photo from './asset/img/Avatar_Frontiers.jpg';
import pandora from './asset/img/PandoraDAK.jpg';

const form = document.querySelector('.score-form');
const refreshBtn = document.querySelector('.refresh-btn');
const bgBody = document.querySelector('body');
const imgElement = document.createElement('img');

imgElement.src = photo;
imgElement.style = 'width: 255px';
form.prepend(imgElement);
bgBody.style = ` background-image :linear-gradient(
            to bottom,
            rgba(11, 162, 202, 0.9),
            rgba(0, 0, 255, 0.6)
        ), url(${pandora})`;

const init = () => {
  renderScore();
  form.addEventListener('submit', formSubmitHandler);
  refreshBtn.addEventListener('click', renderScore);
};
init();
