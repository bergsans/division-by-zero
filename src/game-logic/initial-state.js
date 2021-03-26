import {
  MODE_PLAY_GAME,
  MODE_MENU,
  MODE_PLAY_GAME_INTRODUCTION,
  PLAYER_FACES_LEFT,
} from '../constants';
import sc1Introduction from '../levels/sc1-text';
import aboutGame from '../texts/about-game';
import gameOver from '../texts/game-over';
import sc2Introduction from '../levels/sc2-text';
import sc3Introduction from '../levels/sc3-text';
import sc1 from '../levels/sc1';
import sc2 from '../levels/sc2';
import sc3 from '../levels/sc3';

export default {
  isLoading: true,
  itemSelection: {
    currentSelection: 'items',
    items: {
      x: 0,
      y: 0,
    },
    mode: {
      y: 0,
    },
  },
  mode: MODE_MENU,
  menu: MODE_PLAY_GAME_INTRODUCTION,
  player: {
    currentScreen: 'sc1',
    death: false,
    type: 'plr',
    remoteActive: false,
    remoteActiveDone: false,
    remote: {
      hasHitItem: -1,
      isShooting: false,
      x: 0,
      y: 0,
      velY: 0,
      velX: 0,
      speed: 4,
      spriteCount: 0,
      state: 'PLAYER_WATCHER_IDLE_RIGHT',
      faces: PLAYER_FACES_LEFT,
    },
    hp: 10,
    hurt: 1,
    ammo: 10,
    cash: 100,
    armour: 5,
    spriteCount: 0,
    //    x: 5795,
    //    y: 269,
    x: 1260,
    y: 1460,
    isShooting: false,
    hasHitItem: -1,
    state: 'PLAYER_IDLE_LEFT',
    specialStates: ['SOLDIER_'],
    specialState: 'SOLDIER_',
    faces: PLAYER_FACES_LEFT,
    speed: 4,
    velX: 0,
    velY: 0,
    jumping: false,
    moving: false,
    grounded: false,
    items: [],
  },
  gravity: 0.4,
  level: {
    sc1,
    sc2,
    sc3,
  },
  fps: 60,
  msg: '',
  noiseCount: 0,
  layers: Array.from({ length: 3 }, (_, i) => ({
    x: 0,
    y: 0,
    speed: -(i + 1),
  })),
  audio: {
    shot: false,
    remote: false,
    explosion: false,
    background: true,
  },
  text: {
    MODE_PLAY_GAME_INTRODUCTION: {
      nextMode: MODE_PLAY_GAME,
      message: sc1Introduction,
      next: 'ENTER: Play',
      header: 'Note App:  entry A324',
    },
    MODE_ABOUT_GAME: {
      nextMode: MODE_MENU,
      message: aboutGame,
      next: 'ENTER: Menu',
      header: 'About game',
    },
    MODE_SC2: {
      nextMode: MODE_PLAY_GAME,
      message: sc2Introduction,
      next: 'ENTER: Play',
      header: 'Note App:  entry A325',
    },
    MODE_SC3: {
      nextMode: MODE_PLAY_GAME,
      message: sc3Introduction,
      next: 'ENTER: Play',
      header: 'Note App:  entry A326',
    },
    MODE_GAME_OVER: {
      nextMode: MODE_MENU,
      message: gameOver,
      next: 'ENTER: Menu',
      header: 'Souls INC.',
    },
  },
};
