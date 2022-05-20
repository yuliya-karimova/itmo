import { combineReducers, configureStore } from '@reduxjs/toolkit';
import langReducer from './langSlice';

const rootReducer = combineReducers({
  langReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
