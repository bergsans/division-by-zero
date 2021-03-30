import { isAHit } from './common';
import { isPlayerFacingLeft } from './helpers';

const modifyHealth = (state, [,, w, h], enemies) => (player) => {
  const playerIsHurt = enemies.some(
    (enemy) => isAHit(
      {
        x: enemy.x - 5,
        y: enemy.y - 5,
        w: enemy.w + 10,
        h: enemy.h + 10,
      },
      {
        x: player.x,
        y: player.y,
        w,
        h,
      },
    ),
  );
  if (
    state.level[player.currentScreen].shots.some((s) => s.hasHitPlayer)
    || playerIsHurt
  ) {
    return {
      ...player,
      state: isPlayerFacingLeft(state)
        ? `PLAYER_${player.specialState}HURT_LEFT`
        : `PLAYER_${player.specialState}HURT_RIGHT`,
      hp: player.hp - 1,
      spriteCount: 0,
    };
  }
  return player;
};
export default modifyHealth;
