import { userConstants } from '../constants';

const item = localStorage.getItem('auth');
const auth = item && JSON.parse(localStorage.getItem('auth'));
const initialState = auth ? { loggedIn: true, auth } : { loggedIn: false };

export const authentication = (state = initialState, action) => {
  let final = state;
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      final = {
        loggingIn: true,
        user: action.user,
      };
      break;
    case userConstants.LOGIN_SUCCESS:
      final = {
        loggedIn: true,
        user: action.user,
      };
      break;
    case userConstants.LOGIN_FAILURE:
      final = {
        loggedIn: false,
      };
      break;
    case userConstants.LOGOUT:
      final = {
        loggedIn: false,
      };
      break;
  }
  return final;
};
