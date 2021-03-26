const updateMenu = ({ state, assets }) => {
  if (state.mode === 'MODE_MENU') {
    return {
      state: {
        ...state,
        layers: state.layers.map((layer, i) => ({
          ...layer,
          x: Math.abs(layer.x) > assets[i].width
            ? 0
            : layer.x + layer.speed,
        })),
      },
      assets,
    };
  }
  return { state, assets };
};
export default updateMenu;
