const drawDataText = (
  ctx,
  msg,
  x = 806,
  fontSize = 22,
  y = 350,
  fillStyle = 'rgba(255,255,255,0.7)',
) => {
  const render = () => {
    ctx.font = `${fontSize}px PixelFont`;
    ctx.textAlign = 'left';
    ctx.fillStyle = fillStyle;
    const splittedText = msg.split('\n');
    splittedText.forEach((ln, i) => ctx.fillText(ln, x, y + i * 27));
  };
  document.fonts.load(`${fontSize}px "PixelFont"`).then(render);
};
export default drawDataText;
