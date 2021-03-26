import { MENU_OPTIONS } from '../constants';
import { isSame } from '../utilities';
import drawMenu from './draw-menu';
import renderParallax from './render-parallax';

const renderMenu = (ctx, assets, state) => {
  const { menu, layers } = state;
  const menuIndex = MENU_OPTIONS.findIndex(isSame(menu));
  layers.forEach(renderParallax(ctx, assets));
  drawMenu(ctx, assets, menuIndex);
};

const renderMenuInit = (ctx, assets) => (state) => {
  renderMenu(
    ctx,
    assets,
    state,
  );
};
export default renderMenuInit;
