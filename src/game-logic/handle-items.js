import { PLAYER_WATCHER_SPECIAL_STATE } from '../constants';

const retrieveMessage = (player, items) => {
  const hasHitItem = player.hasHitItem > -1
    ? player.hasHitItem
    : player.remote.hasHitItem;
  if (items[hasHitItem].type === 'WATCHER') {
    return {
      active: true,
      count: 20,
      message: 'NEW SKILL: ENGINEER (BASIC)',
    };
  }
  if (items[hasHitItem].type === 'COMPUTER') {
    return {
      active: true,
      count: 20,
      message: 'COMPUTER',
    };
  }
  if (items[hasHitItem].type === 'GUN') {
    return {
      active: true,
      count: 20,
      message: 'BETTER SHOTS',
    };
  }
  if (items[hasHitItem].type === 'ARMOUR') {
    return {
      active: true,
      count: 20,
      message: 'ARMOUR 1+',
    };
  }
  if (items[hasHitItem].type === 'HELMET') {
    return {
      active: true,
      count: 20,
      message: 'ARMOUR 1+',
    };
  }
  if (items[hasHitItem].type === 'AMMO') {
    return {
      active: true,
      count: 20,
      message: 'AMM0 1+',
    };
  }
  if (items[hasHitItem].type === 'MEDICIN') {
    return {
      active: true,
      count: 20,
      message: 'MEDICIN 1+',
    };
  }
  return {
    active: true,
    count: 120,
    message: items[hasHitItem].message,
  };
};

const handleItems = (state) => {
  if (
    state.player.hasHitItem > -1
    && state.level[state.player.currentScreen].items[state.player.hasHitItem].type === 'WATCHER'
  ) {
    const player = {
      ...state.player,
      specialStates: [...state.player.specialStates, PLAYER_WATCHER_SPECIAL_STATE],
    };
    return {
      ...state,
      player,
      level: {
        ...state.level,
        [state.player.currentScreen]: {
          ...state.level[state.player.currentScreen],
          messages: state.player.hasHitItem > -1 || state.player.remote.hasHitItem > -1
            ? [
              ...state.level[state.player.currentScreen].messages,
              retrieveMessage(state.player, state.level[state.player.currentScreen].items),
            ]
            : state.level[state.player.currentScreen].messages,
          items: state.level[state.player.currentScreen].items.filter(
            (item, i) => i !== state.player.hasHitItem && i !== state.player.remote.hasHitItem,
          ),
        },
      },
    };
  }
  if (
    state.player.hasHitItem > -1
    && state.level[state.player.currentScreen].items[state.player.hasHitItem].type === 'LEVEL'
  ) {
    localStorage.setItem('load', 'false');
    localStorage.setItem('state', JSON.stringify(state));
    const currentScreen = state.level[state.player.currentScreen].items[state.player.hasHitItem].next;
    const level = {
      ...state.level,
      [currentScreen]: {
        ...state.level[currentScreen],
        messages: [
          ...state.level[currentScreen].messages,
          {
            active: true,
            count: 100,
            message: 'GAME SAVED',
          },
        ],
      },
    };
    return {
      ...state,
      mode: state.level[state.player.currentScreen].items[state.player.hasHitItem].mode,
      level,
      player: {
        ...state.player,
        currentScreen,
        spriteCount: 0,
        x: state.level[state.player.currentScreen].items[state.player.hasHitItem].startX,
        y: state.level[state.player.currentScreen].items[state.player.hasHitItem].startY,
      },
    };
  }
  return {
    ...state,
    level: {
      ...state.level,
      [state.player.currentScreen]: {
        ...state.level[state.player.currentScreen],
        messages: state.player.hasHitItem > -1 || state.player.remote.hasHitItem > -1
          ? [
            ...state.level[state.player.currentScreen].messages,
            retrieveMessage(state.player, state.level[state.player.currentScreen].items),
          ]
          : state.level[state.player.currentScreen].messages,
        items: state.level[state.player.currentScreen].items.filter(
          (item, i) => i !== state.player.hasHitItem && i !== state.player.remote.hasHitItem,
        ),
      },
    },
  };
};
export default handleItems;
