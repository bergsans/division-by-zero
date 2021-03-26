import loadAsset from './load-asset';

import backBuilding from '../assets/images/back-buildings.png';
import farBuilding from '../assets/images/far-buildings.png';
import foreground from '../assets/images/foreground.png';
import menu from '../assets/images/menu.png';
import header from '../assets/images/header.png';
import arrow from '../assets/images/arrow.png';
import noise1 from '../assets/images/noise-1.png';
import noise2 from '../assets/images/noise-2.png';
import noise3 from '../assets/images/noise-3.png';
import noise4 from '../assets/images/noise-4.png';
import menuAudio from '../assets/audio/synthwave-skiss.mp3';
import screen from '../assets/images/screen.png';
import demo from '../assets/images/demo.png';
import idleLeft from '../assets/images/player/idle-left.png';
import idleRight from '../assets/images/player/idle-right.png';
import walkLeft from '../assets/images/player/walk-left.png';
import walkRight from '../assets/images/player/walk-right.png';
import jumpLeft from '../assets/images/player/jump-left.png';
import jumpRight from '../assets/images/player/jump-right.png';
import attackLeft from '../assets/images/player/attack-left.png';
import attackRight from '../assets/images/player/attack-right.png';
import level11 from '../assets/images/levels/level1-forground.png';
import level12 from '../assets/images/levels/level1-background.png';
import level13 from '../assets/images/levels/level1-background-2.png';
import layer from '../assets/images/layer.png';
import explosion from '../assets/images/Explosion.png';
import bullets from '../assets/images/M484BulletCollection1.png';
import enemy1left from '../assets/images/enemies/bipedal-unit-left.png';
import enemy1right from '../assets/images/enemies/bipedal-unit-right.png';
import uiHealthAmmo from '../assets/images/ui/ui-health-ammo-bar.png';
import uiHealthBar from '../assets/images/ui/ui-health-red.png';
import uiAmmoBar from '../assets/images/ui/ui-ammo-blue.png';
import uiEmptyBar from '../assets/images/ui/ui-empty-bar.png';
import uiHelpScreen from '../assets/images/ui/ui-help-screen-formatted.png';
import soldierAttackLeft from '../assets/images/player/soldier-attack-left.png';
import soldierAttackRight from '../assets/images/player/soldier-attack-right.png';
import soldierIdleLeft from '../assets/images/player/soldier-idle-left.png';
import soldierIdleRight from '../assets/images/player/soldier-idle-right.png';
import soldierWalkLeft from '../assets/images/player/soldier-walk-left.png';
import soldierWalkRight from '../assets/images/player/soldier-walk-right.png';
import soldierJumpLeft from '../assets/images/player/soldier-jump-left.png';
import soldierJumpRight from '../assets/images/player/soldier-jump-right.png';
import items from '../assets/images/icons.png';
import uiPlayer from '../assets/images/ui/ui-player2.png';
import elevator from '../assets/images/elevator.png';
import watcherAttackLeft from '../assets/images/player/player-watcher-attack-left.png';
import watcherAttackRight from '../assets/images/player/player-watcher-attack-right.png';
import watcherIdleLeft from '../assets/images/player/player-watcher-idle-left.png';
import watcherIdleRight from '../assets/images/player/player-watcher-idle-right.png';
import watcherWalkLeft from '../assets/images/player/player-watcher-walk-left.png';
import watcherWalkRight from '../assets/images/player/player-watcher-walk-right.png';
import summonLeft from '../assets/images/player/summon-left.png';
import summonRight from '../assets/images/player/summon-right.png';
import summonLeftWatcher from '../assets/images/player/summon-watcher-left.png';
import summonRightWatcher from '../assets/images/player/summon-watcher-right.png';
import laser from '../assets/images/laser.png';
import deathRight from '../assets/images/player/death-right.png';
import deathLeft from '../assets/images/player/death-left.png';
import deathSoldierRight from '../assets/images/player/death-soldier-right.png';
import deathSoldierLeft from '../assets/images/player/death-soldier-left.png';
import hurtRight from '../assets/images/player/hurt-right.png';
import hurtLeft from '../assets/images/player/hurt-left.png';
import hurtSoldierRight from '../assets/images/player/soldier-hurt-right.png';
import hurtSoldierLeft from '../assets/images/player/soldier-hurt-left.png';
import walk from '../assets/audio/walk.wav';
import remote from '../assets/audio/remote.wav';
import shot from '../assets/audio/shot.wav';
import jump from '../assets/audio/jump.wav';
import explosion1 from '../assets/audio/explosion.wav';
import uiMove from '../assets/audio/ui-move.wav';
import forground2 from '../assets/images/levels/level1-forground2.png';
import items2 from '../assets/images/items-2.png';
import door from '../assets/images/door.png';
import enemy2 from '../assets/images/enemies/guard_anim_big.png';
import level2Background2 from '../assets/images/levels/level2-background-2.png';
import level2Background from '../assets/images/levels/level2-background.png';
import level2forground from '../assets/images/levels/level2-forground.png';
import enemy3 from '../assets/images/enemies/tanguard_anim_big.png';
import level3Background2 from '../assets/images/levels/level3-background2.png';
import level3Background from '../assets/images/levels/level3-background.png';
import level3forground from '../assets/images/levels/level3-forground.png';
import watcher from '../assets/images/player/watcher-item.png';

const assetsList = [
  farBuilding,
  backBuilding,
  foreground,
  menu,
  header,
  arrow,
  noise1,
  noise2,
  noise3,
  noise4,
  menuAudio,
  screen,
  demo,
  idleLeft,
  idleRight,
  walkLeft,
  walkRight,
  jumpLeft,
  jumpRight,
  attackLeft,
  attackRight,
  level11,
  level12,
  level13,
  layer,
  explosion,
  bullets,
  enemy1right,
  enemy1left,
  uiHealthAmmo,
  uiHealthBar,
  uiAmmoBar,
  uiEmptyBar,
  uiHelpScreen,
  soldierAttackLeft,
  soldierAttackRight,
  soldierIdleLeft,
  soldierIdleRight,
  soldierWalkLeft,
  soldierWalkRight,
  soldierJumpLeft,
  soldierJumpRight,
  items,
  uiPlayer,
  elevator,
  watcherAttackRight,
  watcherAttackLeft,
  watcherWalkRight,
  watcherWalkLeft,
  watcherIdleRight,
  watcherIdleLeft,
  summonLeft,
  summonRight,
  summonLeftWatcher,
  summonRightWatcher,
  laser,
  deathRight,
  deathLeft,
  deathSoldierRight,
  deathSoldierLeft,
  hurtRight,
  hurtLeft,
  hurtSoldierRight,
  hurtSoldierLeft,
  walk,
  remote,
  shot,
  jump,
  explosion1,
  uiMove,
  forground2,
  items2,
  door,
  enemy2,
  level2Background2,
  level2Background,
  level2forground,
  enemy3,
  level3Background2,
  level3Background,
  level3forground,
  watcher,
];
const assetsListPromises = assetsList.map(loadAsset);

export default assetsListPromises;
