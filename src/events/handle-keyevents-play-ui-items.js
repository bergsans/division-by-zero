import {
  KEY_ARROW_DOWN,
  KEY_ARROW_UP,
  KEY_ARROW_LEFT,
  KEY_ARROW_RIGHT,
  KEY_ENTER,
  KEY_I,
  MODE_PLAY_GAME,
} from '../constants';
import { isNotSameIndex } from '../utilities';

const ACTIVATED_LASER_MAX_SPRITE_COUNT = 8;
const DEACTIVED_LASER_MAX_SPRITE_COUNT = 2;

const toggleComputer = (item, actionItems) => {
  const computer = actionItems.find((actionItem) => actionItem.key === item.key);
  if (!computer) {
    return actionItems;
  }
  const toggledComputer = {
    ...computer,
    spriteCount: 0,
    maxSpriteCount: !computer.status
      ? ACTIVATED_LASER_MAX_SPRITE_COUNT
      : DEACTIVED_LASER_MAX_SPRITE_COUNT,
    status: !computer.status,
  };
  return [
    ...actionItems.filter((actionItem) => actionItem.key !== item.key),
    toggledComputer,
  ];
};

const handleKeyEventsPlayUIItems = (events, state) => {
  const keys = events.getStopKeys();
  const { itemSelection } = state;
  if (keys[KEY_I]) {
    events.clear();
    return {
      ...state,
      mode: MODE_PLAY_GAME,
    };
  }
  if (keys[KEY_ENTER]) {
    events.clear();
    if (itemSelection.currentSelection === 'items') {
      const index = (itemSelection.items.y * 4) + itemSelection.items.x;
      if (state.player.items[index]) {
        if (state.player.items[index].type === 'MEDICIN') {
          return {
            ...state,
            player: {
              ...state.player,
              hp: state.player.hp + 1,
              items: state.player.items.filter(isNotSameIndex(index)),
            },
          };
        }
        if (state.player.items[index].type === 'COMPUTER') {
          const player = {
            ...state.player,
            items: state.player.items.filter(isNotSameIndex(index)),
          };
          return {
            ...state,
            player,
            level: {
              ...state.level,
              [state.player.currentScreen]: {
                ...state.level[state.player.currentScreen],
                actionItems: toggleComputer(
                  state.player.items[index],
                  state.level[state.player.currentScreen].actionItems,
                ),
              },
            },
          };
        }
        if (state.player.items[index].type === 'HELMET') {
          return {
            ...state,
            player: {
              ...state.player,
              ammo: state.player.armour + 1,
              items: state.player.items.filter(isNotSameIndex(index)),
            },
          };
        }
        if (state.player.items[index].type === 'GUN') {
          return {
            ...state,
            player: {
              ...state.player,
              hurt: state.player.hurt + 1,
              items: state.player.items.filter(isNotSameIndex(index)),
            },
          };
        }
        if (state.player.items[index].type === 'ARMOUR') {
          return {
            ...state,
            player: {
              ...state.player,
              ammo: state.player.armour + 1,
              items: state.player.items.filter(isNotSameIndex(index)),
            },
          };
        }
        if (state.player.items[index].type === 'AMMO') {
          return {
            ...state,
            player: {
              ...state.player,
              ammo: state.player.ammo + 1,
              items: state.player.items.filter(isNotSameIndex(index)),
            },
          };
        }
      }
    } else if (
      itemSelection.mode.y === 0
      && state.player.specialStates.includes('SOLDIER_')
    ) {
      return {
        ...state,
        mode: MODE_PLAY_GAME,
        player: {
          ...state.player,
          specialState: 'SOLDIER_',
        },
      };
    } else if (
      itemSelection.mode.y === 1
      && state.player.specialStates.includes('')
    ) {
      return {
        ...state,
        mode: MODE_PLAY_GAME,
        player: {
          ...state.player,
          specialState: '',
        },
      };
    }
    return state;
  }
  if (keys[KEY_ARROW_LEFT]) {
    events.clear();
    if (itemSelection.currentSelection === 'items') {
      if (itemSelection.items.x > 0) {
        return {
          ...state,
          itemSelection: {
            ...state.itemSelection,
            items: {
              ...state.itemSelection.items,
              x: state.itemSelection.items.x - 1,
            },
          },
        };
      }
      return state;
    }
    if (itemSelection.currentSelection === 'mode') {
      return {
        ...state,
        itemSelection: {
          ...state.itemSelection,
          currentSelection: 'items',
          items: {
            y: itemSelection.mode.y * 2,
            x: 3,
          },
        },
      };
    }
    return state;
  }
  if (keys[KEY_ARROW_RIGHT]) {
    events.clear();
    if (itemSelection.currentSelection === 'items') {
      if (itemSelection.items.x < 3) {
        return {
          ...state,
          itemSelection: {
            ...state.itemSelection,
            items: {
              ...state.itemSelection.items,
              x: state.itemSelection.items.x + 1,
            },
          },
        };
      }
      return {
        ...state,
        itemSelection: {
          ...state.itemSelection,
          currentSelection: 'mode',
          mode: {
            y: Math.floor(itemSelection.mode.y / 2),
          },
        },
      };
    }
  }
  if (keys[KEY_ARROW_DOWN]) {
    events.clear();
    if (itemSelection.currentSelection === 'items') {
      if (itemSelection.items.y < 4) {
        return {
          ...state,
          itemSelection: {
            ...state.itemSelection,
            items: {
              ...state.itemSelection.items,
              y: state.itemSelection.items.y + 1,
            },
          },
        };
      }
    }
    if (itemSelection.currentSelection === 'mode') {
      if (itemSelection.mode.y < 2) {
        return {
          ...state,
          itemSelection: {
            ...state.itemSelection,
            mode: {
              y: state.itemSelection.mode.y + 1,
            },
          },
        };
      }
    }
    return state;
  }
  if (keys[KEY_ARROW_UP]) {
    events.clear();
    if (itemSelection.currentSelection === 'items') {
      if (itemSelection.items.y > 0) {
        return {
          ...state,
          itemSelection: {
            ...state.itemSelection,
            items: {
              ...state.itemSelection.items,
              y: state.itemSelection.items.y - 1,
            },
          },
        };
      }
    }
    if (itemSelection.currentSelection === 'mode') {
      if (itemSelection.mode.y > 0) {
        return {
          ...state,
          itemSelection: {
            ...state.itemSelection,
            mode: {
              y: state.itemSelection.mode.y - 1,
            },
          },
        };
      }
    }
    return state;
  }
  return state;
};
export default handleKeyEventsPlayUIItems;
