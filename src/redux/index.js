import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import allSagas from './sagas'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(allSagas)

export default store
