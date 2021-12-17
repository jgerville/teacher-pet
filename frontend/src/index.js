import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import './index.css'
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let persistor;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    ({ store, persistor } = configureStore(preloadedState));

    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    ({ store, persistor } = configureStore({}));
  }
  const root = document.getElementById('root');

  window.getState = store.getState;

  ReactDOM.render(<Root store={store} persistor={persistor} />, root);
});


