import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  cards: cardsReducer
  // search: searchReducer
});

export default reducers;
