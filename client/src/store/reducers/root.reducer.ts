import { combineReducers } from 'redux';
import { herosReducer } from './heros.reducer';

export const rootReducer = combineReducers({
  heros: herosReducer
})
