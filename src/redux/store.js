import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import reducers from "./reducer";

const persistConfig = {
	key: 'root',
  blackList: ['restaurant'],
  whiteList: ['user'],
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);