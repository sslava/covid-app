import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {statsReducer} from './statsModule';
import {historyReducer} from './historyModule';
import {regionsReducer} from './regionsModule';
import {preferencesReducer} from './preferencesModule';

const reducer = combineReducers({
  stats: statsReducer,
  history: historyReducer,
  regions: regionsReducer,
  preferences: preferencesReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
