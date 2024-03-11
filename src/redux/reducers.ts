// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
// import teachersReducer from '@/redux/teachers/teachersSlice';
// import authReducer from '@/redux/auth/authSlice';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['favorites'],
// };

// const persistedReducer = persistReducer(persistConfig, teachersReducer);

const rootReducer = combineReducers({
  // teachers: persistedReducer,
  // auth: authReducer,
});

export default rootReducer;
