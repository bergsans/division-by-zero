import {
  KEY_H,
  MODE_PLAY_GAME,
} from '../constants';

const handleKeyEventsPlayUIHelp = (events, state) => {
  const keys = events.getStopKeys();
  if (keys[KEY_H]) {
    events.clear();
    return {
      ...state,
      mode: MODE_PLAY_GAME,
    };
  }
  return state;
};
export default handleKeyEventsPlayUIHelp;
