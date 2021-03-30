import {
  isPlayerFacingLeft,
  isPlayerWatcherFacingLeft,
} from './helpers';

const turnPlayerIfNeeded = (player) => {
  const state = isPlayerWatcherFacingLeft(player)
    ? 'PLAYER_IDLE_LEFT'
    : 'PLAYER_IDLE_RIGHT';
  if (player.velX === 0 && !player.jumping) {
    return {
      ...player,
      state,
    };
  }
  if ((player.velX > 0 || player.velX < 0) && !player.jumping) {
    return {
      ...player,
      state:
        isPlayerFacingLeft(player)
          ? `PLAYER_${player.specialState}WALK_LEFT`
          : `PLAYER_${player.specialState}WALK_RIGHT`,
    };
  }
  return player;
};
export default turnPlayerIfNeeded;
