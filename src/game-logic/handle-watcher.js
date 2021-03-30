import { SPRITE_CHANGE } from '../constants';
import { moveWatcherX, moveWatcherY } from './move-watcher';
import { isAHit } from './common';
import {
  isPlayerSummoning,
  isPlayerFacingLeft,
} from './helpers';
import getImageData from '../renderers/image-data';

const { spriteSheet } = getImageData();

const handleWatcher = (state) => (player) => {
  if (player.remote) {
    const sheet = spriteSheet[player.remote.state][Math.floor(player.remote.spriteCount)];
    const maxSpriteCount = spriteSheet[player.remote.state].length;
    const spriteCount = player.remote.spriteCount + SPRITE_CHANGE < maxSpriteCount
      && !(player.remote.spriteCount >= maxSpriteCount)
      ? player.remote.spriteCount + SPRITE_CHANGE
      : 0;
    if (spriteCount >= 12 && isPlayerSummoning(state)) {
      return {
        ...player,
        remoteActiveDone: true,
        remote: {
          ...player.remote,
          x: isPlayerFacingLeft(state)
            ? player.remote.x
            : player.remote.x + 50,
          spriteCount: 0,
          state: isPlayerFacingLeft(state)
            ? 'PLAYER_WATCHER_IDLE_LEFT'
            : 'PLAYER_WATCHER_IDLE_RIGHT',
        },
      };
    }
    return {
      ...player,
      hp: !state.level[player.currentScreen].enemies.some(
        (enemy) => isAHit(
          {
            x: enemy.x - 5,
            y: enemy.y + 5,
            w: enemy.w + 10,
            h: enemy.h + 10,
          },
          {
            x: player.remote.x,
            y: player.remote.y,
            w: sheet[2],
            h: sheet[3],
          },
        ),
      )
        ? player.hp
        : player.hp - 1,
      remote: {
        ...player.remote,
        x: moveWatcherX(player.remote, state, sheet),
        y: moveWatcherY(player.remote, state, sheet),
        spriteCount,
      },
    };
  }
  return player;
};
export default handleWatcher;
