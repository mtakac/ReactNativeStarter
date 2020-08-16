import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';

import reducer, { AppState } from './reducer';

const persistConfig: PersistConfig<AppState> = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist all reducers that should be persisted
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(...[]));
const persistor = persistStore(store);

export { store, persistor };
