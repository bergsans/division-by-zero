import renderersInit from '../renderers/renderers-init';
import { eventHandler, keyboardEvents } from '../events/keyboard-events';
import { compose } from '../utilities';
import initialState from './initial-state';
import play from './play';

const changeLoading = (isLoading) => {
  document.querySelector('#loading').style.zIndex = '-1000';
  return !isLoading;
};

const getEvents = (e) => ({ state, assets }) => ({
  state: eventHandler.get(state.mode)(e, state),
  assets,
});

const initGame = (assets) => {
  const events = keyboardEvents();
  const renderers = renderersInit(assets);
  const loop = (prevState) => {
    setTimeout(() => {
      const { state } = compose(
        getEvents(events),
        play,
      )({ state: prevState, assets });
      renderers.get(state.mode)(state);
      requestAnimationFrame(() => loop(state));
    }, 1000 / prevState.fps);
  };
  loop({
    ...initialState,
    isLoading: changeLoading(initialState.isLoading),
  });
};
export default initGame;
