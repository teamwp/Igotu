import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

export default store;
