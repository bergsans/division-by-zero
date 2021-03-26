import {
  KEY_ARROW_DOWN,
  KEY_ARROW_UP,
  KEY_ENTER,
  MENU_OPTIONS,
  MODE_LOAD_GAME,
} from '../constants';
import { isSame } from '../utilities';

const changeMenuItem = (newItem, previousStateMenu) => {
  const i = MENU_OPTIONS.findIndex(isSame(previousStateMenu)) || 0;
  const last = MENU_OPTIONS.length - 1;
  if (newItem === KEY_ARROW_DOWN) {
    return i + 1 > last
      ? MENU_OPTIONS[0]
      : MENU_OPTIONS[i + 1];
  }
  return i - 1 < 0
    ? MENU_OPTIONS[last]
    : MENU_OPTIONS[i - 1];
};

const handleKeyEventsMenu = (events, state) => {
  const keys = events.getStopKeys();
  if (keys[KEY_ENTER]) {
    if (state.menu === MODE_LOAD_GAME && localStorage.getItem('state')) {
      localStorage.setItem('load', 'true');
      return {
        ...state,
        mode: 'MODE_PLAY_GAME',
      };
    }
    return {
      ...state,
      mode: state.menu,
    };
  }
  if (keys[KEY_ARROW_DOWN]) {
    return {
      ...state,
      menu: changeMenuItem(KEY_ARROW_DOWN, state.menu),
    };
  }
  if (keys[KEY_ARROW_UP]) {
    return {
      ...state,
      menu: changeMenuItem(KEY_ARROW_UP, state.menu),
    };
  }
  return state;
};
export default handleKeyEventsMenu;
