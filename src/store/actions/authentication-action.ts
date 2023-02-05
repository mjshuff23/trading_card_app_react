/******* Constant Declarations *******/
export const TOKEN_KEY = 'card_catalog/authentication/token';
export const SET_TOKEN = 'card_catalog/authentication/SET_TOKEN';
export const REMOVE_TOKEN = 'card_catalog/authentication/REMOVE_TOKEN';

export const USER_KEY = 'card_catalog/authentication/user';
export const SET_USER = 'card_catalog/authentication/ADD_USER';
export const REMOVE_USER = 'card_catalog/authentication/REMOVE_USER';

export const IS_AUTHENTICATED_KEY = 'card_catalog/authentication/isAuthenticated';
export const SET_IS_AUTHENTICATED = 'card_catalog/authentication/ADD_IS_AUTHENTICATED';
export const REMOVE_IS_AUTHENTICATED = 'card_catalog/authentication/REMOVE_IS_AUTHENTICATED';

/******* Action Creators *******/
export const setToken = (token: string) => ({ type: SET_TOKEN, token});
export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setUser = (user: string) => ({ type: SET_USER, user})
export const setIsAuthenticated = (isAuthenticated: boolean) => ({ type: SET_IS_AUTHENTICATED, isAuthenticated});

export const loadToken = () => async (dispatch: any) => {
  const token = window.localStorage.getItem(TOKEN_KEY);

  if (token) {
    // const userId = window.localStorage.getItem('card_catalog-userId');
    
    dispatch(setToken(token));

    const responseData = 'Yokito';

    if (responseData) {
      dispatch(setUser(responseData));
      dispatch(setIsAuthenticated(true));
      return true;
    } else {
      return false;
    }
  }
}

export const login = (email: string, password: string) => async (dispatch: any) => {
  const responseData= { token: '1241ksdrfsd', user: 'Yokito', ok: true };

  if (responseData.ok) {
    window.localStorage.setItem(TOKEN_KEY, responseData.token);
    window.localStorage.setItem(USER_KEY, responseData.user);
    dispatch(setToken(responseData.token));
    return true;
  } else {
    return false;
  }
}

export const logout = () => async (dispatch: any) => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
  dispatch(removeToken);
  window.location.href = '/';
}

export const register = (username: string, email: string, password: string, confirmPassword: string) => async (dispatch: any) => {
  const responseData = { token: '1o3k2p1k31', user: 'Yokito', ok: true };

  if (responseData.ok) {
    window.localStorage.setItem(TOKEN_KEY, responseData.token);
    window.localStorage.setItem(USER_KEY, responseData.user);
    dispatch(setToken(responseData.token));

    return true;
  } else {
    return false;
  }
}