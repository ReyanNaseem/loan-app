import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authReducer from './AuthSlice.js'
import { version } from 'react';

const setup = {
  key: "userInfo",
  version: 1,
  storage: storage
}

const slices = combineReducers({
  auth: authReducer
})

export const store = configureStore({
  reducer: persistReducer( setup, slices ),
  devTools: true,
  middleware: (config)=>config({
    serializableCheck: false
  })
})
