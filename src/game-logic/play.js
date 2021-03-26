import {
  MODE_PLAY_GAME,
  MODE_MENU,
} from '../constants';
import { compose } from '../utilities';
import updateMessages from './update-messages';
import updateWorld from './update-world';
import updatePlayer from './update-player';
import updateMenu from './update-menu';
import updateScreen from './update-screen';
import playSounds from '../renderers/render-sounds';

const play = ({ state, assets }) => {
  if (state.mode === MODE_PLAY_GAME) {
    if (localStorage.getItem('load') === 'true') {
      const newState = JSON.parse(localStorage.getItem('state'));
      localStorage.setItem('load', 'false');
      return {
        state: newState,
        assets,
      };
    }
    return compose(
      updatePlayer,
      updateWorld,
      updateMessages,
      playSounds,
    )({ state, assets });
  } if (state.mode === MODE_MENU) {
    return updateMenu({ state, assets });
  } if ([...Object.keys(state.text)].includes(state.mode)) {
    return updateScreen({ state, assets });
  }
  return {
    state,
    assets,
  };
};
export default play;
