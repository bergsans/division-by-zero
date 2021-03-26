const getMessages = (state) => ({
  ...state,
  level: {
    ...state.level,
    [state.player.currentScreen]: {
      ...state.level[state.player.currentScreen],
      messages: state.level[state.player.currentScreen].messages.map(
        (msg) => (msg.active
          ? ({ ...msg, count: msg.count - 1, active: msg.count > 0 })
          : msg),
      ),
    },
  },
});

const updateMessages = ({ state, assets }) => ({
  state: getMessages(state),
  assets,
});
export default updateMessages;
