function posts(state = [], action) {
  switch(action.tyle) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, i), // posts before the post being updated
        { ...state[i], likes: state[i].likes + 1 }, // the post being updated
        ...state.slice(i + 1), // posts after the post being updated
      ];
    default:
      return state;
  }
  console.log(state, action);

  return state;
}

export default posts;
