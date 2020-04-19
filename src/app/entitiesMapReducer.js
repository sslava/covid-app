export default function entitiesMapReducer(reduce, actionsSet, idSelector) {
  return (state = {}, action) => {
    if (actionsSet.has(action.type)) {
      const id = idSelector(action);
      return {
        ...state,
        [id]: reduce(state[id], action),
      };
    }
    return state;
  };
}
