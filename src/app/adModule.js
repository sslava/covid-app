import createFetchReducer from './createFetchReducer';

import {ItemStore} from '../common/ItemStore';
import {apiRequest} from '../common/api';

const fetcher = () => apiRequest('GET', 'https://covidum.com/request/get_adv');

const initial = {
  statsTop: null,
  statsMiddle: null,
  countryTop: null,
  countryMiddle: null,
};

const storage = new ItemStore('ads', initial);

const [adsReducer, actionTypes] = createFetchReducer('ads', initial);

export {adsReducer};

export const fetchAds = () => async (dispatch) => {
  dispatch({type: actionTypes.FETCH});
  try {
    const payload = await fetcher();

    dispatch({type: actionTypes.FETCH_COMPLETE, payload: payload || initial});
    storage.set(payload);
  } catch (error) {
    dispatch({type: actionTypes.FETCH_FAILED, payload: error});
    console.log(error);
  }
};

export const initAds = () => async (dispatch) => {
  const payload = await storage.load();
  if (payload) {
    dispatch({type: actionTypes.SET, payload});
  }
  dispatch(fetchAds());
};

export const fetchingAdsSelector = (state) => state.ads.isFetching;
export const adsSelector = (state) => state.ads.data;
