import {
  IMG_UI_HEALTH_AMMO,
  IMG_UI_EMPTY_BAR,
  IMG_UI_HEALTH_BAR,
  IMG_UI_AMMO_BAR,
  PLAYER_FACES_LEFT,
} from '../constants';
import getRelativePos from './get-relative-pos';
import getImageData from './image-data';
import drawMessageText from './draw-message-text';

const { matchAsset, spriteSheet } = getImageData();

export const renderPlay = (ctx, assets, state) => {
  const { player } = state;
  const count = Math.floor(player.spriteCount);
  const spriteCount = count < spriteSheet[player.state].length ? count : 0;
  const [x, y, w, h] = spriteSheet[player.state][spriteCount];
  let camRelX;
  const camX = player.x - (626 - w / 2);
  const camY = player.y - 768 / 2;
  if (camX < 0) {
    camRelX = 0;
  } else {
    camRelX = camX;
  }
  camRelX = camRelX + 1152 > assets[state.level[state.player.currentScreen].background2].width
    ? assets[state.level[state.player.currentScreen].background2].width - 1152
    : camRelX;
  let camRelY = camY < 0 ? 0 : camY;
  camRelY = camRelY + 768 > assets[state.level[state.player.currentScreen].background2].height
    ? assets[state.level[state.player.currentScreen].background2].height - 768
    : camRelY;
  let playerY;
  let playerX;
  if (camX < 0) {
    playerX = player.x;
  } else if (camX + 1152 > assets[state.level[state.player.currentScreen].background2].width) {
    playerX = player.x - camRelX;
  } else {
    playerX = 626 - w / 2;
  }
  if (camY < 0) {
    playerY = player.y;
  } else if (camY + 768 > assets[state.level[state.player.currentScreen].background2].height) {
    playerY = player.y - camRelY;
  } else {
    playerY = 768 / 2;
  }
  ctx.drawImage(
    assets[state.level[state.player.currentScreen].background2],
    camRelX * 0.7,
    camRelY,
    1152,
    768,
    0,
    0,
    1152,
    768,
  );
  ctx.drawImage(
    assets[state.level[state.player.currentScreen].background1],
    camRelX * 0.8,
    camRelY,
    1152,
    768,
    0,
    0,
    1152,
    768,
  );
  if (state.level[state.player.currentScreen].actionItems.length) {
    state.level[state.player.currentScreen].actionItems.forEach((item) => {
      const sheet = item.img === 'DOOR'
        ? spriteSheet.DOOR[Math.floor(item.spriteCount)]
        : spriteSheet[item.img][Math.floor(item.spriteCount)];
      ctx.drawImage(
        item.img === 'DOOR'
          ? assets[matchAsset.DOOR]
          : assets[matchAsset[item.img]],
        ...sheet,
        ...getRelativePos({ x: player.x, y: player.y }, item, playerX, playerY),
        item.w,
        item.h,
      );
    });
  }
  if (
    state.level[state.player.currentScreen].enemies.length
  ) {
    const enemies = [
      ...state.level[state.player.currentScreen].enemies,
    ];
    enemies.forEach((enemy) => {
      const sheet = spriteSheet.ENEMIES[enemy.type][enemy.state][Math.floor(enemy.spriteCount)];
      ctx.drawImage(
        assets[matchAsset.ENEMIES[enemy.type][enemy.state]],
        ...sheet,
        ...getRelativePos({ x: player.x, y: player.y }, enemy, playerX, playerY),
        enemy.w,
        enemy.h,
      );
    });
  }
  if (state.level[state.player.currentScreen].items.length) {
    state.level[state.player.currentScreen].items.forEach((item) => {
      if (!['MESSAGE', 'LEVEL', 'SAVE_GAME'].includes(item.type)) {
        const sheet = spriteSheet[item.type];
        ctx.drawImage(
          assets[item.type === 'WATCHER' ? matchAsset.WATCHER : matchAsset.ITEMS],
          ...sheet,
          ...getRelativePos({ x: player.x, y: player.y }, item, playerX, playerY),
          item.w,
          item.h,
        );
      }
    });
  }
  ctx.drawImage(
    assets[matchAsset[player.state]],
    x,
    y,
    w,
    h,
    playerX,
    playerY,
    w,
    h,
  );
  if (player.remoteActive) {
    const spriteCountPlr = Math.floor(player.remote.spriteCount); // can use old spriteCount?
    const [xR, yR, wR, hR] = spriteSheet[player.remote.state][spriteCountPlr];
    if (player.remote.state.startsWith('PLAYER_WATCHER_ATTACK') && player.remote.faces === PLAYER_FACES_LEFT) {
      ctx.drawImage(
        assets[matchAsset[player.remote.state]],
        xR, yR, wR, hR,
        ...getRelativePos(
          { x: player.x, y: player.y },
          { x: player.remote.x - 128, y: player.remote.y }, playerX, playerY,
        ),
        wR,
        hR,
      );
    } else {
      ctx.drawImage(
        assets[matchAsset[player.remote.state]],
        xR, yR, wR, hR,
        ...getRelativePos(
          { x: player.x, y: player.y },
          { x: player.remote.x, y: player.remote.y },
          playerX,
          playerY,
        ),
        wR,
        hR,
      );
    }
  }
  if (state.level[state.player.currentScreen].explosions.length) {
    state.level[state.player.currentScreen].explosions.forEach(
      (explosion) => explosion.status
        && ctx.drawImage(
          assets[matchAsset.EXPLOSION],
          ...spriteSheet.EXPLOSION[Math.floor(explosion.spriteCount)],
          ...getRelativePos({ x: player.x, y: player.y }, explosion, playerX, playerY),
          explosion.w,
          explosion.h,
        ),
    );
  }
  if (state.level[state.player.currentScreen].shots.length) {
    state.level[state.player.currentScreen].shots.forEach((shot) => ctx.drawImage(
      assets[matchAsset.BULLET],
      ...spriteSheet.BULLET,
      ...getRelativePos({ x: player.x, y: player.y }, shot, playerX, playerY),
      18,
      18,
    ));
  }
  ctx.drawImage(
    assets[state.level[state.player.currentScreen].forground],
    camRelX,
    camRelY,
    1152,
    768,
    0,
    0,
    1152,
    768,
  );
  if (state.level[state.player.currentScreen].messages.some((msg) => msg.active)) {
    const messagesToDisplay = state.level[state.player.currentScreen].messages.filter(
      (msg) => msg.active,
    );
    messagesToDisplay.forEach((msg) => drawMessageText(ctx, player, playerX, playerY, msg));
  }
  ctx.drawImage(assets[IMG_UI_HEALTH_AMMO], 0, 10);
  for (let i = 0; i < 10; i += 1) {
    if (Math.ceil(state.player.hp) > i) {
      ctx.drawImage(
        assets[IMG_UI_HEALTH_BAR],
        145 + (i * assets[IMG_UI_HEALTH_BAR].width),
        10,
      );
    } else {
      ctx.drawImage(
        assets[IMG_UI_EMPTY_BAR],
        145 + (i * assets[IMG_UI_HEALTH_BAR].width),
        10,
      );
    }
    if (Math.ceil(state.player.ammo) > i) {
      ctx.drawImage(
        assets[IMG_UI_AMMO_BAR],
        434 + (i * assets[IMG_UI_AMMO_BAR].width),
        10,
      );
    } else {
      ctx.drawImage(
        assets[IMG_UI_EMPTY_BAR],
        434 + (i * assets[IMG_UI_AMMO_BAR].width),
        10,
      );
    }
  }
};
export const renderPlayInit = (ctx, assets) => (state) => renderPlay(ctx, assets, state);
