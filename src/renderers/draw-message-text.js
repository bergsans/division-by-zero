import getRelativePos from './get-relative-pos';

const drawMessageText = (ctx, player, playerX, playerY, msg) => {
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '25px PixelFont';
  const [remoteX, remoteY] = getRelativePos(
    { x: player.x, y: player.y },
    { x: player.remote.x, y: player.remote.y }, playerX, playerY,
  );
  const playerCoords = player.remote.active
    ? ({ x: remoteX, y: remoteY })
    : ({ x: playerX, y: playerY });
  ctx.fillText(msg.message, playerCoords.x + 40, playerCoords.y - 35);
};
export default drawMessageText;
