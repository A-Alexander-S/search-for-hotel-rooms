import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers'; //initReducers

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function initStore() {
  const initialStore = {};

  return createStore(
    rootReducers,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
  );
}

export default initStore;