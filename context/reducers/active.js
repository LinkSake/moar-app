export const active = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, active: action.payload };
    default:
      return state;
  }
}