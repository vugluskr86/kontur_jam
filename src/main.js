import './ui/styles.css';
import { Game } from './app/Game.js';

const app = document.querySelector('#app');
const game = new Game(app);
game.start();

window.__KONTUR041__ = game;
