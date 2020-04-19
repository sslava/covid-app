export const actionTypes = {
  FETCH: 'FETCH',
  FETCH_COMPLETE: 'FETCH_COMPLETE',
  FETCH_FAILED: 'FETCH_FAILED',
  SET: 'SET',
};

export const getInitialState = (data = null) => ({
  data,
  isFetching: false,
  error: null,
});

export function fetchReducer(state, action) {
  switch (action.type) {
    case actionTypes.FETCH:
      return {...state, isFetching: true, error: null};
    case actionTypes.FETCH_COMPLETE:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: null,
      };
    case actionTypes.FETCH_FAILED:
      return {...state, isFetching: false, error: action.payload};
    case actionTypes.SET:
      return {...state, data: action.payload};
  }
  return state;
}
