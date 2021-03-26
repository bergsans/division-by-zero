import { compose } from '../utilities';
import getImageData from '../renderers/image-data';
import { PLAYER_FACES_LEFT } from '../constants';

const { spriteSheet } = getImageData();

export const isAHit = (firstBody, secondBody) => (
  firstBody.x < secondBody.x + secondBody.w
  && firstBody.x + firstBody.w > secondBody.x
  && firstBody.y < secondBody.y + secondBody.h
  && firstBody.y + firstBody.h > secondBody.y
);

export const hitAreas = (shapeA, shapeB) => {
  const vX = shapeA.x + shapeA.width / 2 - (shapeB.x + shapeB.width / 2);
  const vY = shapeA.y + shapeA.height / 2 - (shapeB.y + shapeB.height / 2);
  const hWidths = shapeA.width / 2 + shapeB.width / 2;
  const hHeights = shapeA.height / 2 + shapeB.height / 2;
  const oX = hWidths - Math.abs(vX);
  const oY = hHeights - Math.abs(vY);
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    if (oX >= oY) {
      if (vY > 0) {
        return [
          {
            ...shapeA,
            y: shapeA.y + oY,
          },
          't',
        ];
      }
      return [
        {
          ...shapeA,
          y: shapeA.y - oY,
        },
        'b',
      ];
    }
    if (vX > 0) {
      return [
        {
          ...shapeA,
          x: shapeA.x + oX,
        },
        'l',
      ];
    }
    return [
      {
        ...shapeA,
        x: shapeA.x - oX,
      },
      'r',
    ];
  }
  return [shapeA, null];
};

const turnIfNeeded = (sheet, obstacles) => (entity) => {
  const [, , w, h] = sheet;
  const bool = obstacles.some(([x, y, width, height]) => isAHit(
    {
      x,
      y,
      w: width,
      h: height,
    },
    {
      x: entity.x + entity.speed * 30,
      y: entity.y + 20,
      w,
      h,
    },
  ));
  const speed = !bool ? entity.speed * -1 : entity.speed;
  const velX = speed;
  return {
    ...entity,
    speed,
    velX,
  };
};

export const incSpriteCount = (maxSpriteCount) => (entity) => ({
  ...entity,
  spriteCount:
    entity.spriteCount + 0.35 < maxSpriteCount
    && !(entity.spriteCount >= maxSpriteCount)
      ? entity.spriteCount + 0.35
      : 0,
});

export const initHorisontalMovement = (entity) => ({
  ...entity,
  grounded: false,
  x: entity.x + Math.floor(entity.velX),
  y: entity.y + Math.floor(entity.velY),
});

export const checkObstacles = ([, , w, h], obstacles, enemies = []) => (entity) => [
  ...obstacles,
  ...enemies,
].reduce((nextEntity, [x, y, width, height]) => {
  const [shape, dir] = hitAreas(
    {
      x: entity.x,
      y: entity.y,
      width: w,
      height: h,
    },
    {
      x,
      y,
      width,
      height,
    },
  );
  if (dir === 'l' || dir === 'r') {
    return {
      ...nextEntity,
      x: shape.x,
      velX: 0,
      jumping: false,
      speed:
          nextEntity.type !== 'plr'
            ? nextEntity.speed * -1
            : nextEntity.speed,
    };
  }
  if (dir === 'b') {
    if (nextEntity.velY > 20) {
      return {
        ...nextEntity,
        hp: 0,
        spriteCount: 0,
        state: `PLAYER_${nextEntity.specialState}DEATH_${nextEntity.faces === PLAYER_FACES_LEFT ? 'LEFT' : 'RIGHT'}`,
      };
    }
    return {
      ...nextEntity,
      y: shape.y,
      grounded: true,
      jumping: false,
    };
  }
  if (dir === 't') {
    return {
      ...nextEntity,
      y: y + height,
      velY: nextEntity.velY * -1,
    };
  }
  return nextEntity;
}, entity);

const verticalVelocity = (entity) => ({
  ...entity,
  velY: entity.grounded
    ? 0
    : entity.velY + 0.4,
});

export const finalMovement = (entity) => ({
  ...entity,
  x: entity.x + Math.floor(entity.velX),
  y: entity.y + Math.floor(entity.velY),
});

export const updateEntity = (entity, obstacles) => {
  const sheet = spriteSheet.ENEMIES[entity.type][entity.state][Math.floor(entity.spriteCount)];
  const maxSpriteCount = sheet.length;
  return compose(
    finalMovement,
    incSpriteCount(maxSpriteCount),
    turnIfNeeded(sheet, obstacles),
    verticalVelocity,
    checkObstacles(sheet, obstacles),
    initHorisontalMovement,
  )(entity);
};
