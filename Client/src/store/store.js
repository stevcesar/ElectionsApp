import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import { authSlice, tableSlice } from './';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    table: tableSlice.reducer,
});
const persistConfig = { key: "root", storage, whitelist: ['auth','table']};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});


