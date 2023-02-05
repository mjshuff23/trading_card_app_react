import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { batchedSubscribe } from 'redux-batched-subscribe';
import _ from 'lodash'; 

import authenticationReducer from './reducers/authentication-reducer';

const reducer = {
  authentication: authenticationReducer,
}

const preloadedState = {
  authentication: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
}

const debounceNotify = _.debounce((notify) => notify(), 100);

// The store is being created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together
export const store = () => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [batchedSubscribe(debounceNotify),]
})

