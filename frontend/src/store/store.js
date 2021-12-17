import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (preloadedState = {}) => {
  let store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
  let persistor = persistStore(store);
  return { store, persistor }
};

export default configureStore;