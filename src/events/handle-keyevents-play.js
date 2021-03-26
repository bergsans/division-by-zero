import {
  KEY_ARROW_LEFT,
  KEY_ARROW_UP,
  KEY_ARROW_RIGHT,
  KEY_ARROW_DOWN,
  KEY_SPACE,
  KEY_M,
  KEY_H,
  KEY_I,
  KEY_R,
  MODE_MENU,
  PLAYER_WATCHER_SPECIAL_STATE,
} from '../constants';
import {
  helpScreen,
  itemsScreen,
  activateRemoteState,
  inactivateRemoteState,
  moveHorisontalRemoteState,
  moveVerticalRemoteState,
  shotFromRemoteState,
  idleRemoteState,
  shot,
  jump,
  idle,
  moveLeft,
  moveRight,
} from './keyevents-actions-play';

const handleKeyEventsPlay = (events, state) => {
  const keys = events.getKeys();
  const stopKeys = events.getStopKeys();
  const specialKeys = events.getSpecialKeys();
  const { player } = state;
  if (player.death || player.state.includes('HURT')) {
    return state;
  } if (stopKeys[KEY_M]) {
    return {
      ...state,
      mode: MODE_MENU,
    };
  } if (stopKeys[KEY_H]) {
    return helpScreen(state);
  } if (stopKeys[KEY_I]) {
    return itemsScreen(state);
  } if (
    player.specialState === PLAYER_WATCHER_SPECIAL_STATE
    && player.remoteActive
    && player.remoteActiveDone && stopKeys[KEY_R]
  ) {
    return inactivateRemoteState(state);
  }
  if (
    player.specialState === PLAYER_WATCHER_SPECIAL_STATE
    && !player.jumping
    && player.grounded && stopKeys[KEY_R]
  ) {
    return activateRemoteState(state);
  }
  if (player.remoteActive
    && player.remoteActiveDone
    && !player.remote.isShooting
    && (
      keys[KEY_ARROW_LEFT]
      || keys[KEY_ARROW_RIGHT]
    )) {
    return moveHorisontalRemoteState(state, keys);
  }
  if (player.remoteActive
    && player.remoteActiveDone
    && !player.remote.isShooting
    && (
      keys[KEY_ARROW_UP]
      || keys[KEY_ARROW_DOWN]
    )) {
    return moveVerticalRemoteState(state, keys);
  }
  if (player.ammo > 0
    && player.remoteActive
    && player.remoteActiveDone
    && keys[KEY_SPACE]
    && !player.remote.state.startsWith('PLAYER_WATCHER_ATTACK')
  ) {
    return shotFromRemoteState(state, keys);
  }
  if (
    player.remoteActive
    && player.remoteActiveDone
    && !player.remote.state.startsWith('PLAYER_WATCHER_ATTACK')
  ) {
    return idleRemoteState(state);
  }
  if (player.remoteActive) {
    return state;
  }
  if (player.isShooting) return state;
  if (player.ammo > 0
    && !player.jumping
    && player.grounded
    && keys[KEY_SPACE]
    && !player.remoteActive
  ) {
    return shot(state);
  }
  if (!player.jumping
    && player.grounded
    && specialKeys[KEY_ARROW_UP]
    && !player.remoteActive
  ) {
    return jump(state);
  }
  if (keys[KEY_ARROW_LEFT] && player.velX > -player.speed) {
    return moveLeft(state);
  }
  if (keys[KEY_ARROW_RIGHT] && player.velX < player.speed) {
    return moveRight(state);
  }
  if (
    !keys[KEY_ARROW_LEFT]
    && !keys[KEY_ARROW_RIGHT]
    && !player.jumping
  ) {
    return idle(state);
  }
  return {
    ...state,
    player: {
      ...player,
      velY: player.velY + state.gravity,
    },
  };
};
export default handleKeyEventsPlay;
