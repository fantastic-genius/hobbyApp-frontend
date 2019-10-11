import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducers';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, composeWithDevTools(middleware));

export default store;
