import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './ducks/reducers';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// logs state changes in chrome console
const logger = createLogger({collapsed: true})

// allows use of Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger, thunkMiddleware)
  )
);

export default store;
