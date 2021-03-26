import { isAHit } from './common';

export const moveWatcherX = (remote, state, [,, watcherWidth, watcherHeight]) => (
  !state.level[state.player.currentScreen].objects.some(([x, y, w, h]) => isAHit({
    x: Math.floor(remote.x + remote.velX), y: remote.y, w: watcherWidth, h: watcherHeight,
  }, {
    x, y, w, h,
  }))
    ? remote.x + remote.velX
    : remote.x
);

export const moveWatcherY = (remote, state, [,, watcherWidth, watcherHeight]) => (
  !state.level[state.player.currentScreen].objects.some(
    ([x, y, w, h]) => isAHit({
      y: Math.floor(remote.y + remote.velY),
      x: remote.x,
      w: watcherWidth,
      h: watcherHeight,
    }, {
      x, y, w, h,
    }),
  )
    ? remote.y + remote.velY
    : remote.y
);
