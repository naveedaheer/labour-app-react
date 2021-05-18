import { userConstants } from '../constants';
import { userService } from '../../services';
import { history } from '../../helpers';

const login = (username, password) => {
  const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
  const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, user });
  const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error });

  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        (user) => {
          dispatch(success(user));
          history.push('/dashboard');
        },
        (error) => {
          dispatch(failure(error.toString()));
        },
      );
  };
};

const logout = () => {
  userService.logout();
  history.push('/');
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout,
};
