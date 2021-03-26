import renderMenuInit from './renderer-menu';
import renderTextInit from './renderer-text';
import renderPlayHelpInit from './renderer-help';
import renderPlayItemsInit from './renderer-items';
import { renderPlayInit } from './renderer-play';
import {
  MODE_PLAY_GAME,
  MODE_PLAY_GAME_HELP,
  MODE_PLAY_GAME_ITEMS,
  MODE_MENU,
} from '../constants';
import initialState from '../game-logic/initial-state';

const renderersInit = (assets) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const renderText = renderTextInit(ctx, assets);
  const textRenderers = Object.keys(initialState.text).reduce(
    (acc, v) => ({
      ...acc,
      [v]: renderText,
    }),
    {},
  );
  const renderMenu = renderMenuInit(ctx, assets);
  const renderPlay = renderPlayInit(ctx, assets);
  const renderPlayHelp = renderPlayHelpInit(ctx, assets);
  const renderPlayItems = renderPlayItemsInit(ctx, assets);
  return new Map(Object.entries(textRenderers))
    .set(MODE_MENU, renderMenu)
    .set(MODE_PLAY_GAME, renderPlay)
    .set(MODE_PLAY_GAME_HELP, renderPlayHelp)
    .set(MODE_PLAY_GAME_ITEMS, renderPlayItems);
};
export default renderersInit;
