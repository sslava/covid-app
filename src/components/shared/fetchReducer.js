export const actionTypes = {
  FETCH: 'FETCH',
  FETCH_COMPLETE: 'FETCH_COMPLETE',
  FETCH_FAILED: 'FETCH_FAILED',
  SET: 'SET',
};

export const getInitialFetchState = (data = null) => ({
  data,
  fetchState: 'NotFetched',
  error: null,
});

export function fetchReducer(state, action) {
  switch (action.type) {
    case actionTypes.FETCH:
      return {...state, fetchState: 'Fetching', error: null};
    case actionTypes.FETCH_COMPLETE:
      return {
        ...state,
        fetchState: 'Fetched',
        data: action.payload,
        error: null,
      };
    case actionTypes.FETCH_FAILED:
      return {...state, fetchState: 'Error', error: action.payload};
    case actionTypes.SET:
      return {...state, data: action.payload};
  }
  return state;
}
