import {
  KEY_ARROW_LEFT,
  KEY_ARROW_UP,
  PLAYER_FACES_LEFT,
  PLAYER_FACES_RIGHT,
  MODE_PLAY_GAME_HELP,
  MODE_PLAY_GAME_ITEMS,
} from '../constants';

export const helpScreen = (state) => ({
  ...state,
  mode: MODE_PLAY_GAME_HELP,
});

export const itemsScreen = (state) => ({
  ...state,
  mode: MODE_PLAY_GAME_ITEMS,
});

export const activateRemoteState = (state) => {
  const plrState = state.player.faces === PLAYER_FACES_LEFT
    ? 'PLAYER_SUMMON_LEFT'
    : 'PLAYER_SUMMON_RIGHT';
  return {
    ...state,
    player: {
      ...state.player,
      remoteActiveDone: false,
      remoteActive: true,
      state: plrState,
      faces: state.player.faces === PLAYER_FACES_LEFT
        ? PLAYER_FACES_LEFT : PLAYER_FACES_RIGHT,
      spriteCount: 0,
      remote: {
        ...state.player.remote,
        x: -10000,
      },
    },
    audio: {
      ...state.audio,
      remote: true,
    },
  };
};

export const inactivateRemoteState = (state) => ({
  ...state,
  player: {
    ...state.player,
    remoteActiveDone: false,
    remoteActive: false,
  },
});

export const moveHorisontalRemoteState = (state, keys) => {
  const velX = keys[KEY_ARROW_LEFT]
    ? -state.player.remote.speed
    : state.player.remote.speed;
  const faces = keys[KEY_ARROW_LEFT]
    ? PLAYER_FACES_LEFT
    : PLAYER_FACES_RIGHT;
  return {
    ...state,
    player: {
      ...state.player,
      remote: {
        ...state.player.remote,
        state: faces === PLAYER_FACES_LEFT
          ? 'PLAYER_WATCHER_IDLE_LEFT'
          : 'PLAYER_WATCHER_IDLE_RIGHT',
        velX,
        faces,
      },
    },
  };
};

export const moveVerticalRemoteState = (state, keys) => {
  const velY = keys[KEY_ARROW_UP]
    ? -state.player.remote.speed
    : state.player.remote.speed;
  const newState = state.player.remote.faces === PLAYER_FACES_LEFT
    ? 'PLAYER_WATCHER_IDLE_LEFT'
    : 'PLAYER_WATCHER_IDLE_RIGHT';
  return {
    ...state,
    player: {
      ...state.player,
      remote: {
        ...state.player.remote,
        state: newState,
        velY,
      },
    },
  };
};

export const shotFromRemoteState = (state) => {
  const newState = state.player.remote.faces === PLAYER_FACES_LEFT
    ? 'PLAYER_WATCHER_ATTACK_LEFT'
    : 'PLAYER_WATCHER_ATTACK_RIGHT';
  return {
    ...state,
    player: {
      ...state.player,
      remote: {
        ...state.player.remote,
        isShooting: true,
        state: newState,
        spriteCount: 0,
      },
    },
  };
};

export const idleRemoteState = (state) => {
  let newState;
  if (state.player.state.includes('DEATH')) {
    newState = state.player.state;
  } else if (state.player.remote.faces === PLAYER_FACES_LEFT) {
    newState = 'PLAYER_WATCHER_IDLE_LEFT';
  } else {
    newState = 'PLAYER_WATCHER_IDLE_RIGHT';
  }
  return {
    ...state,
    player: {
      ...state.player,
      remote: {
        ...state.player.remote,
        state: newState,
        isShooting: false,
        velX: 0,
        velY: 0,
      },
    },
  };
};

export const shot = (state) => {
  const playerState = state.player.faces === PLAYER_FACES_LEFT
    ? `PLAYER_${state.player.specialState}ATTACK_LEFT`
    : `PLAYER_${state.player.specialState}ATTACK_RIGHT`;
  return {
    ...state,
    player: {
      ...state.player,
      velY: state.player.velY + state.gravity,
      isShooting: true,
      spriteCount: 0,
      state: playerState,
    },
    audio: {
      ...state.audio,
      shot: true,
    },
  };
};

export const jump = (state) => {
  const playerState = state.player.faces === PLAYER_FACES_LEFT
    ? `PLAYER_${state.player.specialState}JUMP_LEFT`
    : `PLAYER_${state.player.specialState}JUMP_RIGHT`;
  return {
    ...state,
    player: {
      ...state.player,
      state: playerState,
      jumping: true,
      grounded: false,
      spriteCount: 0,
      velY: -state.player.speed * 2.5,
    },
  };
};

export const moveLeft = (state) => ({
  ...state,
  player: {
    ...state.player,
    spriteCount: !state.player.moving ? 0 : state.player.spriteCount,
    moving: true,
    faces: PLAYER_FACES_LEFT,
    state: !state.player.state.includes('JUMP')
      ? `PLAYER_${state.player.specialState}WALK_LEFT`
      : `PLAYER_${state.player.specialState}JUMP_LEFT`,
    velX: state.player.velX + -state.player.speed,
    velY: state.player.velY + state.gravity,
  },
});

export const moveRight = (state) => ({
  ...state,
  player: {
    ...state.player,
    spriteCount: !state.player.moving ? 0 : state.player.spriteCount,
    moving: true,
    faces: PLAYER_FACES_RIGHT,
    state: !state.player.state.includes('JUMP')
      ? `PLAYER_${state.player.specialState}WALK_RIGHT`
      : `PLAYER_${state.player.specialState}JUMP_RIGHT`,
    velX: state.player.velX + state.player.speed,
    velY: state.player.velY + state.gravity,
  },
});

export const idle = (state) => ({
  ...state,
  player: {
    ...state.player,
    state: state.player.faces === PLAYER_FACES_LEFT
      ? `PLAYER_${state.player.specialState}IDLE_LEFT`
      : `PLAYER_${state.player.specialState}IDLE_RIGHT`,
    moving: false,
    velX: 0,
    velY: state.player.velY + state.gravity,
  },
  audio: {
    ...state.audio,
    shot: false,
  },
});
