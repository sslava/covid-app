import {useState, useReducer, useEffect} from 'react';

function dataFetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH':
      return {...state, isLoading: true, isError: false};
    case 'FETCH_SUCCESS':
      return {...state, isLoading: false, isError: false, data: action.payload};
    case 'FETCH_FAILURE':
      return {...state, isLoading: false, isError: true};
    default:
      throw new Error();
  }
}

export default function useDataApi(initialUrl, initialData, apiCall) {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({type: 'FETCH'});
      try {
        const result = await apiCall(url);
        if (!didCancel) {
          dispatch({type: 'FETCH_SUCCESS', payload: result.data});
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({type: 'FETCH_FAILURE'});
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url, apiCall]);

  return [state, setUrl];
}
