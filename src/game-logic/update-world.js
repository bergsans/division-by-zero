import { compose } from '../utilities';
import handleActionItems from './handle-action-items';
import handleItems from './handle-items';
import handleShots from './handle-shots';
import handleHits from './handle-hits';
import handleExplosions from './handle-explosions';
import handleEnemies from './handle-enemies';

const updateWorld = ({ state, assets }) => ({
  state: compose(
    handleActionItems({
      x: state.player.x,
      y: state.player.y,
      w: 80,
      h: 130,
    }),
    handleItems,
    handleShots,
    handleHits,
    handleExplosions,
    handleEnemies,
  )(state),
  assets,
});
export default updateWorld;
