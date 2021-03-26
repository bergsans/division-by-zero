const drawScreenInstructionText = (ctx, msg, fillStyle = 'rgba(20, 120, 100, 0.8)') => {
  ctx.textAlign = 'left';
  ctx.fillStyle = fillStyle;
  ctx.font = '25px PixelFont';
  ctx.fillText(msg, 870, 130);
};
export default drawScreenInstructionText;
