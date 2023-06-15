import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import { settingsReducer, settingsSlice } from './settings';
import postsReducer from './posts';
import { nextReduxCookieMiddleware, wrapMakeStore } from 'next-redux-cookie-wrapper';
import { COOKIE_MAX_AGE, LANGUAGE_COOKIE } from '@/constants/constants';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      modal: modalReducer,
      settings: settingsReducer,
      posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: [
            {
              subtree: `${settingsSlice.name}.language`,
              cookieName: LANGUAGE_COOKIE,
              maxAge: COOKIE_MAX_AGE,
              sameSite: true,
              serializationFunction: String,
              deserializationFunction: String,
              defaultState: settingsSlice.getInitialState().language,
            },
          ],
        })
      ),
  })
);

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export const storeWrapper = createWrapper<AppStore>(makeStore);
