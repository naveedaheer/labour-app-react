import axios from 'axios';

/**
 * Configuration for all API calls
 */
export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/**
 * Default headers for POST calls
 */
API.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * The below code runs for every endpoint request
 */
API.interceptors.request.use((req) => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  /**
   * If access_token available then send in endpoint request
   */
  if (auth && auth.access_token) {
    API.defaults.headers.common.Authorization = `Bearer ${auth.access_token}`;
  }
  return req;
}, (error) => Promise.reject(error));
