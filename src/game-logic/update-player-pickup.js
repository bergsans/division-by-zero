import { isAHit } from './common';

const updatePlayerPickup = ([,, w, h], items) => (player) => {
  const y = player.remoteActive
    ? player.remote.y
    : player.y;
  const x = player.remoteActive
    ? player.remote.x
    : player.x;
  const hasHitItem = items.findIndex((item) => isAHit(
    {
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
    },
    {
      x,
      y,
      w,
      h,
    },
  ));
  if (player.remoteActive) {
    if (hasHitItem >= 0) {
      return {
        ...player,
        items: !['SAVE_GAME', 'WATCHER', 'MESSAGE', 'LEVEL'].includes(items[hasHitItem].type)
          ? [...player.items, items[hasHitItem]]
          : player.items,
        remote: {
          ...player.remote,
          hasHitItem,
        },
      };
    }
    return {
      ...player,
      remote: {
        ...player.remote,
        hasHitItem: -1,
      },
    };
  }
  if (hasHitItem >= 0) {
    return {
      ...player,
      items: !['SAVE_GAME', 'WATCHER', 'MESSAGE', 'LEVEL'].includes(items[hasHitItem].type)
        ? [...player.items, items[hasHitItem]]
        : player.items,
      hasHitItem,
    };
  }
  return {
    ...player,
    hasHitItem: -1,
  };
};
export default updatePlayerPickup;
