import { IMG_UI_HELP_SCREEN } from '../constants';
import { renderPlay } from './renderer-play';

const renderPlayHelp = (ctx, assets, state) => {
  renderPlay(ctx, assets, state);
  const uiWidth = assets[IMG_UI_HELP_SCREEN].width;
  const uiHeight = assets[IMG_UI_HELP_SCREEN].height;
  const uiX = (1152 - uiWidth) / 2;
  const uiY = (768 - uiHeight) / 2;
  ctx.drawImage(assets[IMG_UI_HELP_SCREEN], uiX, uiY);
  return {
    fps: 0,
  };
};

const renderPlayerHelpInit = (ctx, assets) => (state) => renderPlayHelp(ctx, assets, state);
export default renderPlayerHelpInit;
