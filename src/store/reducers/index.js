import { combineReducers } from 'redux';
/**
 * all reducers
 */
import { authentication } from './auth.reducer';

const rootReducer = combineReducers({
  authentication,
});

export default rootReducer;
