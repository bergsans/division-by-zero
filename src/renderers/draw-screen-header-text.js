const drawScreenHeaderText = (ctx, msg, fillStyle = 'rgba(20, 120, 100, 0.8)') => {
  ctx.textAlign = 'left';
  ctx.fillStyle = fillStyle;
  ctx.font = '25px PixelFont';
  ctx.fillText(msg, 140, 130);
};
export default drawScreenHeaderText;
