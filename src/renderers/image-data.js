import {
  IMG_BULLET,
  IMG_PLAYER_IDLE_LEFT,
  IMG_PLAYER_IDLE_RIGHT,
  IMG_PLAYER_WALK_LEFT,
  IMG_PLAYER_WALK_RIGHT,
  IMG_PLAYER_JUMP_LEFT,
  IMG_PLAYER_JUMP_RIGHT,
  IMG_PLAYER_ATTACK_LEFT,
  IMG_PLAYER_ATTACK_RIGHT,
  IMG_PLAYER_ATTACK_SOLDIER_LEFT,
  IMG_PLAYER_ATTACK_SOLDIER_RIGHT,
  IMG_PLAYER_JUMP_SOLDIER_LEFT,
  IMG_PLAYER_JUMP_SOLDIER_RIGHT,
  IMG_PLAYER_IDLE_SOLDIER_LEFT,
  IMG_PLAYER_IDLE_SOLDIER_RIGHT,
  IMG_PLAYER_WALK_SOLDIER_LEFT,
  IMG_PLAYER_WALK_SOLDIER_RIGHT,
  IMG_PLAYER_DEATH_SOLDIER_RIGHT,
  IMG_PLAYER_DEATH_SOLDIER_LEFT,
  IMG_PLAYER_WATCHER_ATTACK_LEFT,
  IMG_PLAYER_WATCHER_ATTACK_RIGHT,
  IMG_PLAYER_WATCHER_IDLE_LEFT,
  IMG_PLAYER_WATCHER_IDLE_RIGHT,
  IMG_PLAYER_WATCHER_WALK_LEFT,
  IMG_PLAYER_WATCHER_WALK_RIGHT,
  IMG_PLAYER_HURT_RIGHT,
  IMG_PLAYER_HURT_LEFT,
  IMG_PLAYER_HURT_SOLDIER_RIGHT,
  IMG_PLAYER_HURT_SOLDIER_LEFT,
  IMG_PLAYER_SUMMON_LEFT,
  IMG_PLAYER_SUMMON_RIGHT,
  IMG_PLAYER_DEATH_RIGHT,
  IMG_PLAYER_DEATH_LEFT,
  IMG_PLAYER_SUMMON_WATCHER_LEFT,
  IMG_PLAYER_SUMMON_WATCHER_RIGHT,
  IMG_ENEMY_1_RIGHT,
  IMG_ENEMY_1_LEFT,
  IMG_EXPLOSION,
  IMG_ELEVATOR,
  IMG_LASER,
  IMG_ITEMS_2,
  IMG_DOOR,
  IMG_ENEMY_2,
  IMG_WATCHER,
} from '../constants';

export default function getImageData() {
  const idleW = 92;
  const idleH = 136;
  const walkW = 92;
  const walkH = 132;
  const jumpImageWidth = 1536;
  const attackImageWidth = 3072;
  const attackSoldierImageWidth = 2048;
  const jumpSoldierImageWidth = 1536;
  const soldierDeathRight = Array
    .from(
      { length: 15 },
      (_, i) => [i * 256, 76, 256, 180],
    )
    .reverse();
  const soldierDeathLeft = [...soldierDeathRight].reverse();
  const attackSoldierRight = [
    [88, 132, 88, 124],
    [344, 132, 88, 124],
    [600, 136, 88, 120],
    [844, 136, 80, 120],
    [1092, 120, 140, 136],
    [1356, 112, 136, 144],
    [1616, 108, 144, 148],
    [1876, 132, 88, 124],
  ];
  const attackSoldierLeft = attackSoldierRight
    .reverse()
    .reduce(
      (acc, [x, y, w, h]) => [
        ...acc,
        [attackSoldierImageWidth - x - w, y, w, h],
      ],
      [],
    );
  const attackRight = [
    [72, 128, 88, 128],
    [340, 120, 88, 136],
    [600, 108, 88, 148],
    [856, 100, 104, 156],
    [1112, 96, 104, 156],
    [1364, 92, 116, 164],
    [1620, 96, 112, 160],
    [1876, 100, 104, 156],
    [2128, 100, 104, 156],
    [2388, 108, 112, 148],
    [2644, 112, 104, 144],
    [2900, 120, 80, 137],
  ];
  const attackLeft = attackRight
    .reverse()
    .reduce(
      (acc, [x, y, w, h]) => [
        ...acc, [attackImageWidth - x - w, y, w, h],
      ],
      [],
    );
  const jumpSoldierRight = [
    [87, 132, 88, 123],
    [339, 144, 92, 112],
    [596, 152, 92, 104],
    [864, 119, 84, 129],
    [1120, 100, 84, 129],
    [1376, 88, 83, 129],
  ];
  const jumpSoldierLeft = jumpSoldierRight.reduce(
    (acc, [x, y, w, h]) => [
      ...acc, [jumpSoldierImageWidth - x - w, y, w, h],
    ],
    [],
  );
  const jumpRight = [
    [76, 116, 84, 140],
    [328, 128, 84, 124],
    [584, 132, 84, 124],
    [842, 96, 80, 132],
    [1104, 68, 77, 144],
    [1352, 68, 84, 136],
  ];
  const jumpLeft = jumpRight.reduce(
    (acc, [x, y, w, h]) => [
      ...acc, [jumpImageWidth - x - w, y, w, h],
    ],
    [],
  );
  const spriteSheet = {
    PLAYER_IDLE_RIGHT: Array.from({ length: 6 }, (_, i) => [
      72 + i * (idleW + 164),
      120,
      idleW,
      idleH,
    ]),
    PLAYER_IDLE_LEFT: Array.from({ length: 6 }, (_, i) => [
      96 + i * (idleW + 164),
      120,
      idleW,
      idleH,
    ]),
    PLAYER_WALK_LEFT: Array.from({ length: 10 }, (_, i) => [
      92 + i * (idleW + 164),
      124,
      walkW,
      walkH,
    ]).reverse(),
    PLAYER_WALK_RIGHT: Array.from({ length: 10 }, (_, i) => [
      72 + i * (idleW + 164),
      124,
      walkW,
      walkH,
    ]),
    PLAYER_ATTACK_RIGHT: [...attackRight],
    PLAYER_ATTACK_LEFT: [...attackLeft],
    PLAYER_JUMP_RIGHT: [...jumpRight],
    PLAYER_JUMP_LEFT: [...jumpLeft],
    PLAYER_SOLDIER_IDLE_RIGHT: Array.from({ length: 6 }, (_, i) => [
      89 + i * (92 + 164),
      128,
      92,
      128,
    ]),
    PLAYER_SOLDIER_IDLE_LEFT: Array.from({ length: 6 }, (_, i) => [
      80 + i * (92 + 164),
      128,
      92,
      128,
    ]).reverse(),
    PLAYER_SOLDIER_WALK_RIGHT: Array.from({ length: 9 }, (_, i) => [
      88 + i * (93 + 164),
      128,
      93,
      124,
    ]),
    PLAYER_SOLDIER_WALK_LEFT: Array.from({ length: 9 }, (_, i) => [
      81 + i * (93 + 164),
      128,
      93,
      124,
    ]).reverse(),
    PLAYER_SOLDIER_ATTACK_RIGHT: [...attackSoldierRight],
    PLAYER_SOLDIER_ATTACK_LEFT: [...attackSoldierLeft],
    PLAYER_SOLDIER_JUMP_RIGHT: [...jumpSoldierRight],
    PLAYER_SOLDIER_JUMP_LEFT: [...jumpSoldierLeft],
    PLAYER_HURT_RIGHT: Array.from(
      { length: 4 },
      (_, i) => [53 + i * (109 + 155), 128, 109, 128],
    ),
    PLAYER_HURT_LEFT: Array
      .from(
        { length: 4 },
        (_, i) => [84 + i * (109 + 155), 128, 109, 128],
      )
      .reverse(),
    PLAYER_SOLDIER_HURT_RIGHT: Array.from(
      { length: 6 },
      (_, i) => [88 + i * (100 + 156), 132, 100, 124],
    ),
    PLAYER_SOLDIER_HURT_LEFT: Array
      .from(
        { length: 6 },
        (_, i) => [75 + i * (100 + 156), 132, 100, 124],
      )
      .reverse(),
    PLAYER_WATCHER_IDLE_RIGHT: Array.from({ length: 6 }, (_, i) => [
      44 + i * (88 + 168),
      88,
      82,
      88,
    ]),
    PLAYER_WATCHER_IDLE_LEFT: Array.from({ length: 6 }, (_, i) => [
      132 + i * (88 + 168),
      88,
      82,
      88,
    ]).reverse(),
    PLAYER_WATCHER_WALK_RIGHT: Array.from({ length: 6 }, (_, i) => [
      44 + i * (96 + 160),
      75,
      96,
      110,
    ]),
    PLAYER_WATCHER_WALK_LEFT: Array.from({ length: 6 }, (_, i) => [
      88 + i * (96 + 160),
      75,
      96,
      110,
    ]).reverse(),
    PLAYER_SUMMON_LEFT: Array
      .from(
        { length: 13 },
        (_, i) => [95 + i * (84 + 172), 121, 84, 134],
      )
      .reverse(),
    PLAYER_SUMMON_RIGHT: Array.from({ length: 13 }, (_, i) => [72 + i * (84 + 172), 121, 84, 134]),
    PLAYER_DEATH_RIGHT: Array.from({ length: 10 }, (_, i) => [72 + i * (208 + 48), 111, 208, 145]),
    PLAYER_DEATH_LEFT: Array
      .from(
        { length: 10 },
        (_, i) => [40 + i * (208 + 48), 111, 208, 145],
      )
      .reverse(),
    PLAYER_SOLDIER_DEATH_RIGHT: [...soldierDeathRight],
    PLAYER_SOLDIER_DEATH_LEFT: [...soldierDeathLeft],
    PLAYER_SUMMON_WATCHER_RIGHT: Array.from(
      { length: 14 },
      (_, i) => [3 + i * (81 + 175), 86, 256, 83],
    ),
    PLAYER_SUMMON_WATCHER_LEFT: Array
      .from(
        { length: 14 },
        (_, i) => [132 + i * (81 + 175), 86, 256, 83],
      )
      .reverse(),
    PLAYER_WATCHER_ATTACK_RIGHT: Array.from({ length: 17 }, (_, i) => [44 + i * 256, 79, 241, 108]),
    PLAYER_WATCHER_ATTACK_LEFT: Array
      .from(
        { length: 17 },
        (_, i) => [4 + i * 256, 79, 241, 108],
      )
      .reverse(),
    BULLET: [396, 193, 18, 18],
    AMMO: [184, 701, 74, 75],
    COMPUTER: [249, 200, 75, 75],
    MEDICIN: [393, 0, 75, 75],
    WATCHER: [0, 0, 75, 75],
    ELEVATOR: Array.from({ length: 4 }, (_, i) => [
      0, //* ((i % 2) * 205),
      i < 2
        ? 14
        : 78,
      192,
      36,
    ]),
    LASER: Array.from({ length: 9 }, (_, i) => [
      i * 96,
      0,
      96,
      288,
    ]),
    // should be 10
    DOOR: Array.from({ length: 8 }, (_, i) => [
      0 + ((i % 2) * 192),
      i < 4
        ? 0
        : 192,
      192,
      192,
    ]),
    EXPLOSION: Array.from({ length: 12 }, (_, i) => [
      i * 96,
      0,
      96,
      96,
    ]),
    HELMETS: Array.from({ length: 6 }, (_, i) => [
      i * 64,
      323,
      64,
      60,
    ]),
    ARMOURS: Array.from({ length: 6 }, (_, i) => [
      i * 64,
      451,
      64,
      60,
    ]),
    GUNS: Array.from({ length: 6 }, (_, i) => [
      i * 64,
      97,
      64,
      45,
    ]),
    ENEMIES: {
      TYPE_1: {
        RIGHT: Array.from({ length: 7 }, (_, i) => [
          26 + i * (99 + 64),
          15,
          96,
          111,
        ]),
        LEFT: Array.from({ length: 7 }, (_, i) => [
          26 + i * (99 + 62),
          15,
          96,
          111,
        ]).reverse(),
      },
      TYPE_2: {
        RIGHT: Array.from({ length: 8 }, (_, i) => [
          5 + i * 142,
          13,
          142,
          127,
        ]),
        LEFT: Array.from({ length: 8 }, (_, i) => [
          10 + i * 142,
          160,
          142,
          127,
        ]).reverse(),
        ATTACK_RIGHT: [[5, 299, 142, 127]],
        ATTACK_LEFT: [[439, 299, 142, 127]],
      },
    },
  };
  const matchAsset = {
    PLAYER_IDLE_LEFT: IMG_PLAYER_IDLE_LEFT,
    PLAYER_IDLE_RIGHT: IMG_PLAYER_IDLE_RIGHT,
    PLAYER_WALK_LEFT: IMG_PLAYER_WALK_LEFT,
    PLAYER_WALK_RIGHT: IMG_PLAYER_WALK_RIGHT,
    PLAYER_JUMP_RIGHT: IMG_PLAYER_JUMP_RIGHT,
    PLAYER_JUMP_LEFT: IMG_PLAYER_JUMP_LEFT,
    PLAYER_ATTACK_LEFT: IMG_PLAYER_ATTACK_LEFT,
    PLAYER_ATTACK_RIGHT: IMG_PLAYER_ATTACK_RIGHT,
    PLAYER_DEATH_RIGHT: IMG_PLAYER_DEATH_RIGHT,
    PLAYER_DEATH_LEFT: IMG_PLAYER_DEATH_LEFT,
    PLAYER_SOLDIER_IDLE_LEFT: IMG_PLAYER_IDLE_SOLDIER_LEFT,
    PLAYER_SOLDIER_IDLE_RIGHT: IMG_PLAYER_IDLE_SOLDIER_RIGHT,
    PLAYER_SOLDIER_ATTACK_RIGHT: IMG_PLAYER_ATTACK_SOLDIER_RIGHT,
    PLAYER_SOLDIER_ATTACK_LEFT: IMG_PLAYER_ATTACK_SOLDIER_LEFT,
    PLAYER_SOLDIER_JUMP_LEFT: IMG_PLAYER_JUMP_SOLDIER_LEFT,
    PLAYER_SOLDIER_JUMP_RIGHT: IMG_PLAYER_JUMP_SOLDIER_RIGHT,
    PLAYER_SOLDIER_DEATH_LEFT: IMG_PLAYER_DEATH_SOLDIER_RIGHT,
    PLAYER_SOLDIER_DEATH_RIGHT: IMG_PLAYER_DEATH_SOLDIER_LEFT,
    PLAYER_SOLDIER_WALK_LEFT: IMG_PLAYER_WALK_SOLDIER_LEFT,
    PLAYER_SOLDIER_WALK_RIGHT: IMG_PLAYER_WALK_SOLDIER_RIGHT,
    PLAYER_WATCHER_IDLE_RIGHT: IMG_PLAYER_WATCHER_IDLE_RIGHT,
    PLAYER_WATCHER_IDLE_LEFT: IMG_PLAYER_WATCHER_IDLE_LEFT,
    PLAYER_WATCHER_WALK_RIGHT: IMG_PLAYER_WATCHER_WALK_RIGHT,
    PLAYER_WATCHER_WALK_LEFT: IMG_PLAYER_WATCHER_WALK_LEFT,
    PLAYER_WATCHER_ATTACK_LEFT: IMG_PLAYER_WATCHER_ATTACK_LEFT,
    PLAYER_WATCHER_ATTACK_RIGHT: IMG_PLAYER_WATCHER_ATTACK_RIGHT,
    PLAYER_SUMMON_LEFT: IMG_PLAYER_SUMMON_LEFT,
    PLAYER_SUMMON_RIGHT: IMG_PLAYER_SUMMON_RIGHT,
    PLAYER_SUMMON_WATCHER_LEFT: IMG_PLAYER_SUMMON_WATCHER_LEFT,
    PLAYER_SUMMON_WATCHER_RIGHT: IMG_PLAYER_SUMMON_WATCHER_RIGHT,
    PLAYER_HURT_RIGHT: IMG_PLAYER_HURT_RIGHT,
    PLAYER_HURT_LEFT: IMG_PLAYER_HURT_LEFT,
    PLAYER_SOLDIER_HURT_RIGHT: IMG_PLAYER_HURT_SOLDIER_RIGHT,
    PLAYER_SOLDIER_HURT_LEFT: IMG_PLAYER_HURT_SOLDIER_LEFT,
    BULLET: IMG_BULLET,
    ITEMS: IMG_ITEMS_2,
    EXPLOSION: IMG_EXPLOSION,
    ENEMIES: {
      TYPE_1: {
        LEFT: IMG_ENEMY_1_LEFT,
        RIGHT: IMG_ENEMY_1_RIGHT,
      },
      TYPE_2: {
        RIGHT: IMG_ENEMY_2,
        LEFT: IMG_ENEMY_2,
        ATTACK_LEFT: IMG_ENEMY_2,
        ATTACK_RIGHT: IMG_ENEMY_2,
      },
    },
    ELEVATOR: IMG_ELEVATOR,
    LASER: IMG_LASER,
    DOOR: IMG_DOOR,
    WATCHER: IMG_WATCHER,
  };
  return { matchAsset, spriteSheet };
}
