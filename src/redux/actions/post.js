import {ADD_POST} from '../constants/post';
import {ADD_COMMENT} from '../constants/comments';

export const addPost = post => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
