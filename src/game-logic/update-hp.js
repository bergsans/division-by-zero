import { PLAYER_FACES_LEFT } from '../constants';

const updateHp = (player, hits, i, enemy) => {
  const hitE = hits.some(
    (hit) => hit.hasHit === i,
  );
  if (hitE) {
    return {
      ...enemy,
      x: player.faces === PLAYER_FACES_LEFT
        ? enemy.x - 100
        : enemy.x + 100,
      y: enemy.y - 80,
      hp: enemy.hp - player.hurt,
    };
  }
  return enemy;
};
export default updateHp;
