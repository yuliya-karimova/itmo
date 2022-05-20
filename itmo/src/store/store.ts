import { combineReducers, configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';
import newsReducer from './newsSlice';

const rootReducer = combineReducers({
  langReducer,
  newsReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
