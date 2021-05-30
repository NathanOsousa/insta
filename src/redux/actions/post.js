import {ADD_POST} from '../constants/post';
import {ADD_COMMENT} from '../constants/comments';
import axios from 'axios';

export const addPost = post => {
  return dispatch => {
    axios
      .post('/posts.json', {...post})
      .then(response => {
        console.log('🚀 ~ file: post.js ~ line 9 ~ response', response);
      })
      .catch(error => {
        console.log('🚀 ~ file: post.js ~ line 8 ~ axios.post ~ error', error);
      });
  };
  // return {
  //   type: ADD_POST,
  //   payload: post,
  // };
};

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};
