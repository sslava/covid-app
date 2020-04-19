export function createFetchReducer(scope, initialData) {
  const initialState = {
    data: initialData,
    isFetching: false,
    error: null,
  };

  const actionTypes = {
    FETCH: `${scope}/FETCH`,
    FETCH_COMPLETE: `${scope}/FETCH_COMPLETE`,
    FETCH_FAILED: `${scope}/FETCH_FAILED`,
    SET: `${scope}/SET`,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH:
        return {...state, isFetching: true, error: null};
      case actionTypes.FETCH_COMPLETE:
        return {isFetching: false, data: action.payload, error: null};
      case actionTypes.FETCH_FAILED:
        return {...state, isFetching: false, error: action.payload};
      case actionTypes.SET:
        return {...state, data: action.payload};
    }
    return state;
  };

  return [reducer, actionTypes];
}
