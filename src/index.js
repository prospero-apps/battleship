import './style.css';
import { content, container, nameInput, startButton } from './dom';
import Game from './game';
import WarImage from './images/war.png';
import ForbiddenIcon from './icons/forbidden.png';
import HitIcon from './icons/hit.png';
import MissIcon from './icons/miss.png';

// Initialize
content.appendChild(container);
startButton.addEventListener('click', () => {
  const game = Game(nameInput.value);
});
