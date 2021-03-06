import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import tasks from './tasks';
import quotes from './quotes';
import colors from './colors';
import singleTask from './singletask'
import rewards from './rewards'
import logs from './logs'

const rootReducer = combineReducers({
  session,
  tasks,
  quotes,
  colors,
  singleTask,
  rewards,
  logs
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
