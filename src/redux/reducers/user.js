import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../constants/user';

const INITAL_STATE = {
  name: null,
  email: null,
};

const UserReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null,
      };

    default:
      return state;
  }
};

export default UserReducer;
