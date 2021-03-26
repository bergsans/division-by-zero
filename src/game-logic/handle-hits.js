const handleHits = (state) => ({
  ...state,
  level: {
    ...state.level,
    [state.player.currentScreen]: {
      ...state.level[state.player.currentScreen],
      hits: state.level[state.player.currentScreen].shots.filter(
        (shot) => shot.hasHit >= 0 || shot.hasHitObstacle,
      ),
    },
  },
});
export default handleHits;
