const isAuth = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  return auth !== null;
};

export const utils = {
  isAuth,
};
