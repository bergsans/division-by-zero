import { PLAYER_FACES_LEFT } from '../constants';

const handleShotingWatcher = (state, player) => ({
  ...state,
  player: {
    ...player,
    spriteCount: 0,
    ammo: player.ammo - 1,
    isShooting: false,
    remote: {
      ...player.remote,
      spriteCount: 0,
      state: player.remote.faces === PLAYER_FACES_LEFT
        ? 'PLAYER_WATCHER_IDLE_LEFT'
        : 'PLAYER_WATCHER_IDLE_RIGHT',
    },
  },
  level: {
    ...state.level,
    [player.currentScreen]: {
      ...state.level[player.currentScreen],
      shots: [
        ...state.level[player.currentScreen].shots,
        {
          x:
              player.remote.faces === PLAYER_FACES_LEFT
                ? player.remote.x - 50
                : player.remote.x + 120,
          y: player.remote.y + 40,
          w: 18,
          h: 18,
          hasHit: -1,
          hasHitObstacle: false,
          type: 'shot',
          speed: player.remote.faces === PLAYER_FACES_LEFT ? -18 : 18,
          status: true,
        },
      ],
    },
  },
});
export default handleShotingWatcher;
