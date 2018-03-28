import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from '../redux/reducers'
import rootSaga from '../redux/sagas';


const createStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

   const middleware = [sagaMiddleware];
   const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../redux/reducers', () => {
      const reducers = require('../redux/reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  sagaMiddleware.run(rootSaga);
  return store
}

export default createStore
