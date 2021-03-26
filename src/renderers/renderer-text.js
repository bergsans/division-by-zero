import { IMG_SCREEN_DISPLAY } from '../constants';
import clearScreen from './clear-screen';
import drawNoise from './draw-noise';
import drawScreenParagraphText from './draw-screen-paragraph-text';
import drawScreenInstructionText from './draw-screen-intstruction-text';
import drawScreenHeaderText from './draw-screen-header-text';

const renderText = (ctx, assets, state) => {
  drawNoise(ctx, assets, state.noiseCount);
  clearScreen(ctx);
  drawScreenParagraphText(ctx, `${state.msg}▉`);
  drawScreenInstructionText(ctx, state.text[state.mode].next);
  drawScreenHeaderText(ctx, state.text[state.mode].header);
  ctx.drawImage(assets[IMG_SCREEN_DISPLAY], 0, 0);
};

const renderTextInit = (ctx, assets) => (state) => {
  renderText(ctx, assets, state);
};
export default renderTextInit;
