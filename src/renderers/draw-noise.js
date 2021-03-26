import { IMG_NOISE } from '../constants';

const drawNoise = (ctx, assets, noiseCount) => {
  ctx.drawImage(assets[IMG_NOISE + noiseCount], 0, 0);
};
export default drawNoise;
