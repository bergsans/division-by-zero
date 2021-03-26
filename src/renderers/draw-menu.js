import {
  IMG_MENU_ARROW,
  IMG_MENU_ITEMS,
  IMG_MENU_HEADER,
} from '../constants';

const drawMenu = (ctx, assets, menuIndex) => {
  ctx.drawImage(assets[IMG_MENU_HEADER], 0, 0);
  ctx.drawImage(assets[IMG_MENU_ITEMS], 0, 0);
  ctx.drawImage(
    assets[IMG_MENU_ARROW],
    465,
    395 + menuIndex * assets[IMG_MENU_ARROW].height - menuIndex * 4,
  );
};
export default drawMenu;
