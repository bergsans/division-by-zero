import { IMG_UI_PLAYER } from '../constants';
import { renderPlay } from './renderer-play';
import getImageData from './image-data';
import getTypeInformation from './get-type-information';
import getItemInfo from './get-item-info';
import drawDataText from './draw-data-text';
import printPersonData from './print-person-data';

const { matchAsset, spriteSheet } = getImageData();

const renderPlayItems = (ctx, assets, state) => {
  renderPlay(ctx, assets, state);
  ctx.drawImage(assets[IMG_UI_PLAYER], 0, 0);
  if (state.player.items.length) {
    const formattedItems = Array.from(
      { length: (state.player.items.length % 4) + 1 },
      (_, i) => Array.from(
        { length: 4 },
        (__, j) => ((i * 4) + j < state.player.items.length
          ? state.player.items[(i * 4) + j]
          : null),
      ),
    );
    formattedItems.forEach(
      (row, i) => row.forEach((item, j) => {
        if (!item || item.type === 'MESSAGE') return;
        const xItem = 40 + (j * (75 + 30 + (j * 2)));
        const yItem = 100 + (i * (75 + 30));
        const sheet = spriteSheet[item.type];
        ctx.drawImage(
          assets[matchAsset.ITEMS],
          ...sheet,
          xItem,
          yItem,
          item.w,
          item.h,
        );
      }),
    );
  }
  if (state.itemSelection.currentSelection === 'items') {
    const itemIndex = (state.itemSelection.items.y * 4) + state.itemSelection.items.x;
    const itemInfo = itemIndex < state.player.items.length
      ? getItemInfo(state.player.items[itemIndex].type)
      : '';
    drawDataText(ctx, itemInfo);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    const x = 36 + (state.itemSelection.items.x * (81 + 30));
    const itemY = 98 + (state.itemSelection.items.y * (81 + 30));
    ctx.rect(x, itemY, 81, 81);
    ctx.stroke();
  }
  if (state.itemSelection.currentSelection === 'mode') {
    const itemIndex = state.itemSelection.mode.y;
    const itemInfo = getTypeInformation(itemIndex, state.player.specialStates);
    drawDataText(ctx, itemInfo);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    const modeY = 98 + (state.itemSelection.mode.y * (192 + 35));
    ctx.rect(539, modeY, 192, 192);
    ctx.stroke();
  }
  printPersonData(ctx, state.player);
  return {
    fps: 0,
  };
};

const renderPlayerItemsInit = (ctx, assets) => (state, data) => renderPlayItems(
  ctx,
  assets,
  state,
  data,
);
export default renderPlayerItemsInit;
