import {SET_MESSAGE} from '../constants/message';

export const setMessage = message => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};
