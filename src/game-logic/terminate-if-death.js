import { PLAYER_FACES_LEFT } from '../constants';

const terminateIfDeath = (player) => (player.hp <= 0
  ? ({
    ...player,
    death: true,
    state: `PLAYER_${player.specialState}DEATH_${player.faces === PLAYER_FACES_LEFT ? 'LEFT' : 'RIGHT'}`,
    spriteCount: 0,
  })
  : player
);
export default terminateIfDeath;
