import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middlweare = applyMiddleware(thunk);
const store = createStore(reducers, middlweare, composeWithDevTools());

export default store;
