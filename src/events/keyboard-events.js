import {
  MODE_PLAY_GAME,
  MODE_MENU,
  MODE_PLAY_GAME_HELP,
  MODE_PLAY_GAME_ITEMS,
} from '../constants';
import initialState from '../game-logic/initial-state';
import handleKeyEventsMenu from './handle-keyevents-menu';
import handleKeyEventsNext from './handle-keyevents-next';
import handleKeyEventsPlay from './handle-keyevents-play';
import handleKeyEventsPlayUIHelp from './handle-keyevents-ui-help';
import handleKeyEventsPlayUIItems from './handle-keyevents-play-ui-items';

export const keyboardEvents = () => {
  const keys = {};
  let stopKeys = {};
  const specialKeysUp = {};
  const specialKeysDown = {};
  const shandleKeyUp = (e) => Object.assign(stopKeys, { ...stopKeys, [e.key]: true });
  document.addEventListener('keyup', shandleKeyUp);
  const handleSpecialKeyDown = (e) => {
    if (specialKeysDown[e.key] || specialKeysUp[e.key]) {
      Object.assign(specialKeysDown, { ...specialKeysDown, [e.key]: false });
    } else if (!specialKeysDown[e.key] && !specialKeysUp[e.key]) {
      Object.assign(specialKeysUp, { ...specialKeysUp, [e.key]: true });
      Object.assign(specialKeysDown, { ...specialKeysDown, [e.key]: true });
    }
  };
  const handleSpecialKeyUp = (e) => {
    Object.assign(specialKeysUp, { ...specialKeysUp, [e.key]: false });
    Object.assign(specialKeysDown, { ...specialKeysDown, [e.key]: false });
  };
  const handleKeyDown = (e) => Object.assign(keys, { ...keys, [e.key]: true });
  const handleKeyUp = (e) => Object.assign(keys, { ...keys, [e.key]: false });
  document.addEventListener('keyup', handleSpecialKeyUp);
  document.addEventListener('keydown', handleSpecialKeyDown);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
  return {
    getKeys: () => keys,
    getSpecialKeys: () => specialKeysDown,
    getStopKeys: () => {
      const currStopKeys = { ...stopKeys };
      stopKeys = {};
      return currStopKeys;
    },
    clear() {
      stopKeys = {};
    },
  };
};

const textEvents = Object.keys(initialState.text).reduce(
  (acc, v) => ({
    ...acc,
    [v]: (
      events,
      state,
      next = initialState.text[v].nextMode,
    ) => handleKeyEventsNext(events, state, next),
  }),
  [],
);

export const eventHandler = new Map(Object.entries(textEvents))
  .set(MODE_MENU, (events, state) => handleKeyEventsMenu(events, state))
  .set(MODE_PLAY_GAME, (events, state) => handleKeyEventsPlay(events, state))
  .set(MODE_PLAY_GAME_HELP, (events, state) => handleKeyEventsPlayUIHelp(events, state))
  .set(MODE_PLAY_GAME_ITEMS, (events, state) => handleKeyEventsPlayUIItems(events, state));
