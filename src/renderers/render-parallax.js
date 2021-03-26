const renderParallax = (ctx, assets) => (layer, i) => {
  ctx.drawImage(assets[i], layer.x, layer.y);
  ctx.drawImage(assets[i], layer.x + assets[i].width, layer.y);
};
export default renderParallax;
