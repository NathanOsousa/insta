import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_USER,
  USER_LOADED,
} from '../constants/user';
import axios from 'axios';

const authBaseURL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'jhiguyfriiukony';

export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export const createUser = user => {
  return dispatch => {
    axios
      .post(`${authBaseURL}singupNewUser?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      })
      .then(res => {
        if (res.data.localId) {
          axios
            .put(`/user/${res.data.localId}.json`, {
              name: user.name,
            })
            .then(res => {
              console.log('🚀 ~  usuario criado com sucesso');
            })
            .catch(error => {
              console.log('🚀 ~ file: userActions.js ~ line 38 ~ error', error);
            });
        }
      })
      .catch(error => {
        console.log('🚀 ~ file: userActions.js ~ line 30 ~ error', error);
      });
  };
};

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

export const login = user => {
  return dispatch => {
    dispatch(loadingUser);
    axios
      .post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
        email: user.email,
        password: user.password,
        returnSecureToken: true,
      })
      .then(res => {
        if (res.data.localId) {
          axios
            .get(`/users/${res.data.localId}.json`)
            .then(res => {
              user.password = null;
              user.name = res.data.name;
              dispatch(userLogged(user));
              dispatch(userLoaded());
            })
            .catch(error => {
              console.log(
                '🚀 ~ file: userActions.js ~ line 80 ~ axios.get ~ error',
                error,
              );
            });
        }
      })
      .catch(error => {
        console.log('🚀 ~ file: userActions.js ~ line 77 ~ error', error);
      });
  };
};
