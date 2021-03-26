const handleExplosions = (state) => ({
  ...state,
  audio: {
    ...state.audio,
    explosion: state.level[state.player.currentScreen].hits.length && !state.audio.explosion,
  },
  level: {
    ...state.level,
    [state.player.currentScreen]: {
      ...state.level[state.player.currentScreen],
      explosions: [
        ...state.level[state.player.currentScreen].hits.map(
          (hit) => (
            hit.hasHit >= 0 ? {
              x: hit.x - 128,
              y: hit.y - 128,
              w: 128 * 2,
              h: 128 * 2,
              status: true,
              spriteCount: 0,
            }
              : {
                x: hit.x - (128 * 1.5) / 2,
                y: hit.y - (128 * 1.5) / 2,
                w: 128 * 1.5,
                h: 128 * 1.5,
                status: true,
                spriteCount: 0,
              }
          ),
        ),
        ...state.level[state.player.currentScreen].explosions.map(
          (explosion) => ({
            ...explosion,
            spriteCount: explosion.spriteCount + 0.5,
            status: explosion.spriteCount < 11,
          }),
        ),
      ],
    },
  },
});
export default handleExplosions;
