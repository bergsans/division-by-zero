import { isAHit } from './common';
import { PLAYER_FACES_LEFT } from '../constants';

const setSpeed = (actionItem) => {
  if (actionItem.type === 'vertical elevator') {
    if (actionItem.y + actionItem.speed >= actionItem.maxY) {
      return actionItem.speed * -1;
    } if (actionItem.y + actionItem.speed <= actionItem.startY) {
      return actionItem.speed * -1;
    }
    return actionItem.speed;
  }
  if (actionItem.type === 'horisontal elevator') {
    if (actionItem.x + actionItem.speed >= actionItem.maxX) {
      return actionItem.speed * -1;
    } if (actionItem.x + actionItem.speed <= actionItem.startX) {
      return actionItem.speed * -1;
    }
    return actionItem.speed;
  }
  return actionItem.speed;
};

const moveActionItem = (isPlayerOnItem, actionItem) => {
  if (actionItem.type === 'vertical elevator') {
    return {
      y: isPlayerOnItem ? actionItem.y + actionItem.speed : actionItem.y,
    };
  }
  if (actionItem.type === 'horisontal elevator') {
    return {
      x: isPlayerOnItem ? actionItem.x + actionItem.speed : actionItem.x,
    };
  }
  return actionItem;
};

const handleActionItems = (player) => (state) => {
  let newPlayer;
  const nextState = {
    ...state,
    level: {
      ...state.level,
      [state.player.currentScreen]: {
        ...state.level[state.player.currentScreen],
        actionItems: state.level[state.player.currentScreen].actionItems.map((actionItem) => {
          const isPlayerOnItem = isAHit(
            {
              ...actionItem,
              y: actionItem.y - 10,
            },
            {
              x: player.x,
              y: player.y,
              w: player.w,
              h: player.h,
            },
          );
          if (
            isPlayerOnItem
            && actionItem.type === 'laser'
            && actionItem.status
            && actionItem.spriteCount > 2
          ) {
            newPlayer = {
              ...state.player,
              hp: state.player.hp - 0.5,
              x: state.player.faces === PLAYER_FACES_LEFT
                ? state.player.x + 20
                : state.player.x - 20,
            };
          }
          if (isPlayerOnItem && actionItem.type === 'vertical elevator') {
            newPlayer = {
              ...state.player,
              y: state.player.y + actionItem.speed,
            };
          }
          if (isPlayerOnItem && actionItem.type === 'horisontal elevator') {
            newPlayer = {
              ...state.player,
              x: state.player.x + actionItem.speed,
            };
          }
          return {
            ...actionItem,
            ...moveActionItem(isPlayerOnItem, actionItem),
            spriteCount: actionItem.spriteCount + 1 > actionItem.maxSpriteCount
              ? 0
              : actionItem.spriteCount + 1,
            speed: setSpeed(actionItem),
          };
        }),
      },
    },
  };
  if (newPlayer) {
    return {
      ...nextState,
      player: newPlayer,
    };
  }
  return nextState;
};
export default handleActionItems;
