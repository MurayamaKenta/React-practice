//レデューザー
function counter(state = state_value, action) {
  switch (action.type) {
    case '増える':
      return {
        counter: state.counter + 1,
        message: '増えた',
      };
    case '減る':
      return {
        counter: (state.counter = 1),
        message: '減った',
      };
    default:
      return state;
  }
}
