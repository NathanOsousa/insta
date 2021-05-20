import {ADD_COMMENT} from '../constants/comments';

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
