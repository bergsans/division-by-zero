import { isAHit } from './common';

const handleShots = (state) => ({
  ...state,
  level: {
    ...state.level,
    [state.player.currentScreen]: {
      ...state.level[state.player.currentScreen],
      shots: state.level[state.player.currentScreen].shots
        .map((shot) => ({
          ...shot,
          x: shot.x + shot.speed,
          hasHitPlayer: isAHit(
            {
              x: state.player.x,
              y: state.player.y,
              w: 100,
              h: 100,
            },
            {
              x: shot.x,
              y: shot.y,
              w: shot.w,
              h: shot.h,
            },
          ) || (state.player.remoteActive
            && isAHit(
              {
                x: state.player.remote.x,
                y: state.player.remote.y,
                w: 100,
                h: 100,
              },
              {
                x: shot.x,
                y: shot.y,
                w: shot.w,
                h: shot.h,
              },
            )
          ),
          hasHit: state.level[state.player.currentScreen].enemies.findIndex(
            (enemy) => isAHit(
              {
                x: enemy.x,
                y: enemy.y,
                w: enemy.w,
                h: enemy.h,
              },
              {
                x: shot.x,
                y: shot.y,
                w: shot.w,
                h: shot.h,
              },
            ),
          ),
          hasHitObstacle: state.level[state.player.currentScreen].objects.some(
            ([x, y, width, height]) => isAHit(
              {
                x,
                y,
                w: width,
                h: height,
              },
              {
                x: shot.x,
                y: shot.y,
                w: shot.w,
                h: shot.h,
              },
            ),
          ),
          status: shot.hasHit < 0 && !shot.hasHitObstacle && !shot.hasHitPlayer,
        }))
        .filter((shot) => shot.status),
    },
  },
});
export default handleShots;
