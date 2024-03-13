import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import wordsReducer from '@/redux/words/wordsSlice';
import authReducer from '@/redux/auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  words: wordsReducer,
  auth: persistedReducer,
});

export default rootReducer;
