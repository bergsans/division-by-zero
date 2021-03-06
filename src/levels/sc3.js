import {
  IMG_LEVEL_3_FORGROUND,
  IMG_LEVEL_3_BACKGROUND,
  IMG_LEVEL_3_BACKGROUND_2,
  ENEMY_FACES_LEFT,
} from '../constants';

export default {
  forground: IMG_LEVEL_3_FORGROUND,
  background1: IMG_LEVEL_3_BACKGROUND,
  background2: IMG_LEVEL_3_BACKGROUND_2,
  objects: [
    [0, 0, 10, 2990],
    [0, 2980, 9960, 25],
    [4857, 2439, 640, 34],
    [9869, 0, 105, 2980],
    [0, 2928, 600, 70],
    [0, 2486, 253, 234],
    [594, 2492, 501, 501],
    [0, 2120, 200, 290],
    [0, 1637, 838, 481],
    [0, 1205, 744, 103],
    [0, 970, 660, 255],
    [1093, 2922, 1280, 80],
    [2284, 2680, 282, 297],
    [1328, 1969, 547, 652],
    [896, 1318, 642, 34],
    [979, 754, 555, 353],
    [1538, 749, 754, 120],
    [1243, 1567, 607, 199],
    [2005, 1248, 506, 197],
    [2507, 1306, 87, 114],
    [2452, 958, 642, 32],
    [2452, 588, 642, 32],
    [2870, 1538, 282, 252],
    [2130, 2112, 425, 45],
    [2354, 2230, 115, 115],
    [2436, 2140, 70, 70],
    [2130, 1710, 1024, 96],
    [2552, 1794, 486, 640],
    [2646, 2830, 700, 150],
    [3280, 2544, 398, 444],
    [3280, 2540, 1278, 102],
    [4160, 2266, 394, 352],
    [3602, 2212, 402, 100],
    [3340, 1364, 408, 128],
    [3556, 1494, 190, 232],
    [3748, 1448, 254, 38],
    [3494, 732, 424, 390],
    [3876, 732, 260, 122],
    [5486, 2698, 402, 282],
    [4784, 156, 564, 388],
    [4784, 964, 564, 388],
    [4784, 1352, 282, 246],
    [4824, 1536, 570, 728],
    [5404, 1522, 378, 96],
    [5404, 1922, 468, 300],
    [6138, 2300, 1382, 474],
    [6802, 2770, 266, 300],
    [6226, 1858, 100, 150],
    [6316, 1636, 1294, 452],
    [7792, 1770, 932, 688],
    [8688, 2450, 52, 310],
    [7962, 2736, 805, 360],
    [5712, 1354, 630, 35],
    [6210, 1224, 630, 35],
    [6716, 1088, 630, 35],
    [7398, 974, 104, 140],
    [7503, 827, 842, 474],
    [8686, 1520, 630, 35],
    [8686, 1146, 630, 35],
    [8686, 792, 630, 35],
    [8686, 422, 630, 35],
    [3786, 1964, 630, 35],
  ],
  actionItems: [
    {
      type: 'DOOR',
      x: 15,
      y: 2735,
      w: 192,
      h: 192,
      spriteCount: 0,
      maxSpriteCount: 7,
      img: 'DOOR',
    },
    {
      type: 'horisontal elevator',
      x: 4225,
      y: 735,
      w: 196,
      h: 36,
      speed: 5,
      startX: 4225,
      maxX: 4825,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 8800,
      y: 2910,
      w: 196,
      h: 36,
      speed: 8,
      startY: 1750,
      maxY: 2950,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 9400,
      y: 410,
      w: 196,
      h: 36,
      speed: 7,
      startY: 410,
      maxY: 2950,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 8500,
      y: 1630,
      w: 196,
      h: 36,
      speed: 7,
      startY: 370,
      maxY: 1680,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 7600,
      y: 2900,
      w: 196,
      h: 36,
      speed: 7,
      startY: 1600,
      maxY: 2960,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 5895,
      y: 2930,
      w: 196,
      h: 36,
      speed: 5,
      startY: 1850,
      maxY: 2960,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 3215,
      y: 1260,
      w: 196,
      h: 36,
      speed: 5,
      startY: 590,
      maxY: 1290,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 4010,
      y: 1850,
      w: 196,
      h: 36,
      speed: 5,
      startY: 1450,
      maxY: 1900,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 3160,
      y: 2220,
      w: 196,
      h: 36,
      speed: 5,
      startY: 1540,
      maxY: 2440,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 1890,
      y: 2700,
      w: 196,
      h: 36,
      speed: 5,
      startY: 1720,
      maxY: 2730,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
    {
      type: 'vertical elevator',
      x: 380,
      y: 2800,
      w: 196,
      h: 36,
      speed: 6,
      startY: 2515,
      maxY: 2820,
      spriteCount: 0,
      maxSpriteCount: 3,
      img: 'ELEVATOR',
    },
  ],
  messages: [],
  explosions: [],
  shots: [], // projectiles
  hits: [],
  items: [
    {
      type: 'LEVEL',
      mode: 'MODE_PLAY_GAME',
      next: 'sc2',
      startX: 5790,
      startY: 269,
      x: 15,
      y: 2735,
      w: 192,
      h: 192,
      status: true,
    },
    {
      type: 'AMMO',
      x: 7000,
      y: 1015,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'AMMO',
      x: 7000,
      y: 1015,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'AMMO',
      x: 5130,
      y: 880,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'AMMO',
      x: 2650,
      y: 540,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'AMMO',
      x: 1150,
      y: 1250,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'AMMO',
      x: 3850,
      y: 2850,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'AMMO',
      x: 8225,
      y: 2700,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'MEDICIN',
      x: 8225,
      y: 740,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'MEDICIN',
      x: 6260,
      y: 1815,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'MEDICIN',
      x: 2855,
      y: 2724,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'MEDICIN',
      x: 1725,
      y: 1888,
      w: 75,
      h: 75,
      status: true,
    },
    {
      type: 'MEDICIN',
      x: 50,
      y: 2400,
      w: 75,
      h: 75,
      status: true,
    },
  ],
  enemies: [
    {
      type: 'TYPE_1',
      x: 970,
      y: 2350,
      status: true,
      hp: 2,
      shotInterval: 0,
      w: 99,
      h: 111,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_1',
      x: 1700,
      y: 590,
      status: true,
      hp: 2,
      shotInterval: 0,
      w: 99,
      h: 111,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_1',
      x: 2400,
      y: 1100,
      status: true,
      hp: 2,
      shotInterval: 0,
      w: 99,
      h: 111,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_1',
      x: 8880,
      y: 250,
      status: true,
      hp: 2,
      shotInterval: 0,
      w: 99,
      h: 111,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_1',
      x: 5430,
      y: 1360,
      status: true,
      hp: 2,
      shotInterval: 0,
      w: 99,
      h: 111,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_1',
      x: 8200,
      y: 1640,
      status: true,
      hp: 2,
      shotInterval: 0,
      w: 99,
      h: 111,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 9000,
      y: 2800,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 9300,
      y: 2800,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 8300,
      y: 2600,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 6500,
      y: 2150,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 3800,
      y: 2820,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 4900,
      y: 2820,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 3600,
      y: 595,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 2400,
      y: 1550,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 335,
      y: 1500,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 1675,
      y: 2800,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
    {
      type: 'TYPE_2',
      x: 1175,
      y: 2800,
      status: true,
      hp: 3,
      shotInterval: 0,
      w: 142,
      h: 127,
      jumping: false,
      spriteCount: 0,
      speed: -4,
      grounded: false,
      velX: 0,
      velY: 10,
      state: 'LEFT',
      faces: ENEMY_FACES_LEFT,
    },
  ],
  areas: [],
};
