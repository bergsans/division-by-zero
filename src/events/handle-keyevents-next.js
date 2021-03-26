import { KEY_ENTER } from '../constants';
import initialState from '../game-logic/initial-state';

const handleKeyEventsNext = (events, state, next) => {
  const keys = events.getStopKeys();
  if (keys[KEY_ENTER]) {
    events.clear();
    if (state.mode === 'MODE_GAME_OVER') {
      return { ...initialState };
    }
    return {
      ...state,
      msg: '',
      fps: 60,
      mode: next,
    };
  }
  return state;
};
export default handleKeyEventsNext;
