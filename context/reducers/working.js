export const working = (state, action) => {
  switch (action.type) {
    case 'SET_WORKING_TASK':
      return { ...state, working: action.payload };
    default:
      return state;
  }
}