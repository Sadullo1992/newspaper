import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import { settingsReducer } from './settings';
import postsReducer from './posts';

const rootReducer = combineReducers({
  modal: modalReducer,
  settings: settingsReducer,
  posts: postsReducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
