import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default (preloadedState = {}) => {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};
