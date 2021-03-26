import {
  PLAYER_FACES_LEFT,
  MODE_GAME_OVER,
  SPRITE_CHANGE,
} from '../constants';
import { compose } from '../utilities';
import getImageData from '../renderers/image-data';
import {
  initHorisontalMovement,
  checkObstacles,
  finalMovement,
} from './common';
import handleShotingWatcher from './handle-shoting-watcher';
import shooting from './shooting';
import turnPlayerIfNeeded from './turn-player-if-needed';
import modifyHealth from './modify-health';
import updatePlayerPickup from './update-player-pickup';
import handleWatcher from './handle-watcher';
import terminateIfDeath from './terminate-if-death';

const { spriteSheet } = getImageData();

const updatePlayer = ({ state, assets }) => {
  const maxSpriteCount = spriteSheet[state.player.state].length;
  let spriteCount;
  if (state.player.state.includes('JUMP')) {
    if (state.player.spriteCount + SPRITE_CHANGE < maxSpriteCount
    && !(state.player.spriteCount >= maxSpriteCount)) {
      spriteCount = state.player.spriteCount + SPRITE_CHANGE;
    } else {
      spriteCount = 5;
    }
  } else if (state.player.spriteCount + SPRITE_CHANGE < maxSpriteCount
    && !(state.player.spriteCount >= maxSpriteCount)) {
    spriteCount = state.player.spriteCount + SPRITE_CHANGE;
  } else {
    spriteCount = 0;
  }
  if (state.player.death && state.player.spriteCount >= maxSpriteCount - 1) {
    return {
      assets,
      state: {
        ...state,
        mode: MODE_GAME_OVER,
      },
    };
  }
  if (state.player.death) {
    return {
      assets,
      state: {
        ...state,
        player: {
          ...state.player,
          spriteCount,
        },
      },
    };
  }
  if (state.player.state.includes('HURT') && state.player.spriteCount >= maxSpriteCount - 1) {
    return {
      assets,
      state: {
        ...state,
        player: {
          ...state.player,
          state: state.player.faces === PLAYER_FACES_LEFT
            ? `PLAYER_${state.player.specialState}IDLE_LEFT`
            : `PLAYER_${state.player.specialState}IDLE_RIGHT`,
          spriteCount: 0,
        },
      },
    };
  }
  if (state.player.state.includes('HURT') && state.player.spriteCount < maxSpriteCount) {
    return {
      assets,
      state: {
        ...state,
        player: {
          ...state.player,
          spriteCount,
          y: state.player.y - 0.5,
          x: state.player.faces === PLAYER_FACES_LEFT
            ? state.player.x + 8
            : state.player.x - 8,
        },
      },
    };
  }
  if (state.player.state.startsWith('PLAYER_SUMMON')) {
    if (state.player.spriteCount >= 12) {
      return {
        assets,
        state: {
          ...state,
          player: {
            ...state.player,
            spriteCount: 0,
            state: state.player.faces === PLAYER_FACES_LEFT
              ? 'PLAYER_IDLE_LEFT'
              : 'PLAYER_IDLE_RIGHT',
            remote: {
              ...state.player.remote,
              x: state.player.faces === PLAYER_FACES_LEFT
                ? state.player.x - 100
                : state.player.x + 100,
              y: state.player.y,
              spriteCount: 0,
              faces: state.player.faces === PLAYER_FACES_LEFT
                ? PLAYER_FACES_LEFT
                : 'PLAYER_FACES_RIGHT',
              state: state.player.faces === PLAYER_FACES_LEFT
                ? 'PLAYER_SUMMON_WATCHER_LEFT'
                : 'PLAYER_SUMMON_WATCHER_RIGHT',
            },
          },
        },
      };
    }
    return {
      assets,
      state: {
        ...state,
        player: {
          ...state.player,
          spriteCount,
        },
      },
    };
  }
  if (state.player.isShooting) {
    return {
      state: shooting(state, state.player),
      assets,
    };
  }
  if (
    state.player.remote.spriteCount >= 15
    && state.player.remote.state.startsWith('PLAYER_WATCHER_ATTACK')
  ) {
    return {
      state: handleShotingWatcher(state, state.player),
      assets,
    };
  }
  const player = {
    ...state.player,
    grounded: false,
    spriteCount,
  };
  return {
    state: {
      ...state,
      player: compose(
        terminateIfDeath,
        handleWatcher(state),
        updatePlayerPickup(
          spriteSheet[player.state][Math.floor(player.spriteCount)],
          state.level[player.currentScreen].items,
        ),
        modifyHealth(
          state,
          spriteSheet[player.state][Math.floor(player.spriteCount)],
          state.level[player.currentScreen].enemies.filter((e) => ['TYPE_1'].includes(e.type)),
        ),
        finalMovement,
        turnPlayerIfNeeded,
        (plr) => (plr.grounded ? { ...plr, velY: 0 } : plr),
        checkObstacles(
          spriteSheet[player.state][Math.floor(player.spriteCount)],
          [
            ...state.level[player.currentScreen].enemies
              .filter((e) => ['TYPE_1'].includes(e.type))
              .map(
                (enemy) => [enemy.x, enemy.y, enemy.w, enemy.h],
              ),
            ...state.level[player.currentScreen].objects,
            ...state.level[player.currentScreen].actionItems
              .filter((itm) => itm.type !== 'laser' && itm.img !== 'DOOR')
              .map((itm) => [itm.x, itm.y, itm.w, itm.h]),
          ],
        ),
        initHorisontalMovement,
      )(player),
    },
    assets,
  };
};
export default updatePlayer;
