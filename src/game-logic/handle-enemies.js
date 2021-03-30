import { updateEntity } from './common';
import {
  ENEMY_FACES_LEFT,
  ENEMY_FACES_RIGHT,
} from '../constants';
import updateHp from './update-hp';
import shotOnSight from './shot-on-sight';
import {
  isEnemyAttacking,
  isEnemyFacingLeft,
} from './helpers';

const handleEnemies = (state) => {
  const enemies = state.level[state.player.currentScreen].enemies
    .map(
      (enemy) => (
        isEnemyAttacking(enemy)
          ? {
            ...enemy,
            ...updateEntity(enemy, state.level[state.player.currentScreen].objects),
            x: enemy.x,
            shotInterval: enemy.shotInterval + 1,
          }
          : {
            ...enemy,
            ...updateEntity(enemy, state.level[state.player.currentScreen].objects),
            faces: enemy.speed > 0
              ? ENEMY_FACES_RIGHT
              : ENEMY_FACES_LEFT,
            state: isEnemyFacingLeft(enemy),
          }),
    )
    .map(
      (enemy, i) => updateHp(state.player, state.level[state.player.currentScreen].hits, i, enemy),
    )
    .map((enemy) => shotOnSight(enemy, state))
    .filter((e) => e.hp > 0);
  const shooters = enemies.filter((e) => e.shotInterval % 50 === 1);
  return {
    ...state,
    level: {
      ...state.level,
      [state.player.currentScreen]: {
        ...state.level[state.player.currentScreen],
        enemies,
        shots: shooters.length > 0
          ? [
            ...state.level[state.player.currentScreen].shots,
            ...shooters.map((s) => ({
              x: s.shotSpeed < 0
                ? s.x - 100
                : s.x + 180,
              y: s.y + 40,
              w: 18,
              h: 18,
              hasHitPlayer: false,
              hasHit: -1,
              hasHitObstacle: false,
              type: 'shot',
              speed: s.shotSpeed,
              status: true,
            })),
          ]
          : state.level[state.player.currentScreen].shots,
      },
    },
  };
};
export default handleEnemies;
