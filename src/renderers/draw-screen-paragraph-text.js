const drawScreenParagraphText = (ctx, msg, fillStyle = 'rgba(20, 120, 100, 0.8)') => {
  const render = () => {
    ctx.font = '18px PixelFont';
    ctx.textAlign = 'left';
    ctx.fillStyle = fillStyle;
    const splittedText = msg.split('\n');
    splittedText.forEach((ln, i) => ctx.fillText(ln, 140, 140 + i * 27));
  };
  document.fonts.load('20px "PixelFont"').then(render);
};
export default drawScreenParagraphText;
