import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {statsReducer} from './statsModule';
import {historyReducer} from './historyModule';
import {regionsReducer} from './regionsModule';

const reducer = combineReducers({
  stats: statsReducer,
  history: historyReducer,
  regions: regionsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
