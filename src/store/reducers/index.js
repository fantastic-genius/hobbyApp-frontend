import { combineReducers } from 'redux'
import auth from './auth';
import hobby from './hobby'

const reducer = combineReducers({
    auth,
    hobby
});

export default reducer;
