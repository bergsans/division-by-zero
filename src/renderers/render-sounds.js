import {
  AUDIO_MENU,
  AUDIO_UI_MOVE,
  AUDIO_REMOTE,
  AUDIO_SHOT,
  AUDIO_EXPLOSION,
} from '../constants';

const isPlaying = (audio) => audio
  && audio.currentTime > 0
  && !audio.paused
  && !audio.ended
  && audio.readyState > 2;

const matchAudio = {
  shot: AUDIO_SHOT,
  explosion: AUDIO_EXPLOSION,
  remote: AUDIO_REMOTE,
  uiMove: AUDIO_UI_MOVE,
  background: AUDIO_MENU,
};

const playSounds = ({ state, assets }) => {
  const audio = Object.entries(state.audio).reduce((acc, [k, v]) => {
    if (v && !isPlaying(assets[matchAudio[k]])) {
      assets[matchAudio[k]].play();
      if (['shot', 'explosion', 'remote'].includes(k)) {
        return {
          ...acc,
          [k]: false,
        };
      }
    }
    return {
      ...acc,
      [k]: v,
    };
  },
  {});
  return {
    assets,
    state: {
      ...state,
      audio,
    },
  };
};
export default playSounds;
