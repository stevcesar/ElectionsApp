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
import { authSlice, tableSlice, voterSlicer } from './';

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    table: tableSlice.reducer,
    voter: voterSlicer.reducer,
});
const persistConfig = { key: "root", storage, whitelist: ['auth','table','voter']};
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


