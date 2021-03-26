const updateScreen = ({ state, assets }) => ({
  state: {
    ...state,
    noiseCount: state.noiseCount + 1 > 3
      ? 0
      : state.noiseCount + 1,
    msg: state.text[state.mode].message.substring(0, state.msg.length + 1),
    fps: 20,
  },
  assets,
});
export default updateScreen;
