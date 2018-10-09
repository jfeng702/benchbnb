import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)),
      serverError => {
        dispatch(receiveErrors(serverError.responseJSON));
      }
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));
};

export const signUp = (user) => dispatch => {
  return SessionApiUtil.signUp(user)
    .then(serverUser => dispatch(receiveCurrentUser(serverUser)),
      serverError => dispatch(receiveErrors(serverError.responseJSON)));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};
export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
