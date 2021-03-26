import { ENEMY_FACES_LEFT } from '../constants';
import { isAHit } from './common';

const shotOnSight = (enemy, state) => {
  if (enemy.type.includes('TYPE_1')) return enemy;
  const isPlayerInSightLeft = isAHit(
    {
      y: enemy.y - 300,
      x: enemy.x - 300,
      w: enemy.w + 300,
      h: enemy.h + 600,
    },
    {
      x: state.player.x,
      y: state.player.y,
      w: 100,
      h: 100,
    },
  );
  if (isPlayerInSightLeft) {
    return {
      ...enemy,
      spriteCount: 0,
      shotSpeed: -25,
      state: 'ATTACK_LEFT',
    };
  }
  const isPlayerInSightRight = isAHit(
    {
      y: enemy.y - 300,
      x: enemy.x,
      w: enemy.w + 300,
      h: enemy.h + 600,
    },
    {
      x: state.player.x,
      y: state.player.y,
      w: 100,
      h: 100,
    },
  );
  if (isPlayerInSightRight) {
    return {
      ...enemy,
      spriteCount: 0,
      shotSpeed: 25,
      state: 'ATTACK_RIGHT',
    };
  }
  return {
    ...enemy,
    state: enemy.faces === ENEMY_FACES_LEFT ? 'LEFT' : 'RIGHT',
  };
};
export default shotOnSight;
