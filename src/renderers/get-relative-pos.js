const getRelativePos = ({ x, y }, entity, camX = 1152 / 2, camY = 768 / 2) => {
  let relX = x;
  let relY = y;
  if (entity.x <= x && entity.y <= y) {
    relX = camX - Math.abs(x - entity.x);
    relY = camY - Math.abs(y - entity.y);
  } else if (entity.x >= x && entity.y <= y) {
    relY = camY - Math.abs(y - entity.y);
    relX = camX + Math.abs(x - entity.x);
  } else if (entity.x <= x && entity.y >= y) {
    relX = camX - Math.abs(x - entity.x);
    relY = camY + Math.abs(y - entity.y);
  } else if (entity.x >= x && entity.y >= y) {
    relX = camX + Math.abs(x - entity.x);
    relY = camY + Math.abs(y - entity.y);
  }
  return [relX, relY];
};
export default getRelativePos;
