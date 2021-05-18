import { API } from '../config';

const login = (email, password) => API.post('/auth/login', { email, password })
  .then((res) => {
    /**
     * store user details and jwt token in local storage
     */
    localStorage.setItem('auth', JSON.stringify(res.data));
    return res.data;
  }, (err) => err);

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('auth');
};

export const userService = {
  login,
  logout,
};
