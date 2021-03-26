import './assets/styles/main.css';
import assetsListPromises from './utilities/init-assets';
import initGame from './game-logic/init-game';

Promise.all(assetsListPromises).then(initGame);
