import { PLAYER_FACES_LEFT } from '../constants';

const turnPlayerIfNeeded = (player) => {
  const state = player.remote.faces === PLAYER_FACES_LEFT
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
        player.faces === PLAYER_FACES_LEFT
          ? `PLAYER_${player.specialState}WALK_LEFT`
          : `PLAYER_${player.specialState}WALK_RIGHT`,
    };
  }
  return player;
};
export default turnPlayerIfNeeded;
