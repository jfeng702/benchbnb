import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

// TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signUp = signUp;
  window.login = login;
  window.logout = logout;
// TESTING END


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
