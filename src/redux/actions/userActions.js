import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/user';
import axios from 'axios';

const authBaseURL =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'jhiguyfriiukony';

export const login = user => {
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
