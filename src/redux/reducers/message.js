import {SET_MESSAGE} from '../constants/message';

const INITAL_STATE = {
  title: '',
  text: '',
};

const MessageReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text,
      };

    default:
      return {...state};
  }
};

export default MessageReducer;
