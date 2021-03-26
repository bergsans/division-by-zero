import { PLAYER_FACES_LEFT } from '../constants';

const shooting = (state, player) => {
  if (state.player.spriteCount >= 11) {
    return {
      ...state,
      player: {
        ...player,
        spriteCount: 0,
        ammo: player.ammo - 0.5,
        isShooting: false,
        state:
          player.faces === PLAYER_FACES_LEFT
            ? `PLAYER_${player.specialState}IDLE_LEFT`
            : `PLAYER_${player.specialState}IDLE_RIGHT`,
      },
      level: {
        ...state.level,
        [player.currentScreen]: {
          ...state.level[player.currentScreen],
          shots: [
            ...state.level[player.currentScreen].shots,
            {
              x:
              player.faces === PLAYER_FACES_LEFT
                ? player.x - 50
                : player.x + 120,
              y: player.y + 40,
              w: 18,
              h: 18,
              hasHit: -1,
              hasHitObstacle: false,
              type: 'shot',
              speed: player.faces === PLAYER_FACES_LEFT ? -18 : 18,
              status: true,
            },
          ],
        },
      },
    };
  }
  return {
    ...state,
    player: {
      ...player,
      spriteCount: player.spriteCount + 1,
    },
  };
};
export default shooting;
