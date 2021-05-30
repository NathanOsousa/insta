import {ADD_POST} from '../constants/post';
import {ADD_COMMENT} from '../constants/comments';
import axios from 'axios';

export const addPost = post => {
  return dispatch => {
    axios({
      url: 'uploadImage',
      baseURL: 'https://insta-71514-default-rtdb.firebaseio.com',
      method: 'post',
      data: {
        image: post.image.base64,
      },
    })
      .then(res => {
        post.image = res.data.imageUrl;
        axios
          .post('/posts.json', {...post})
          .then(response => {
            console.log('🚀 ~ file: post.js ~ line 9 ~ response', response);
          })
          .catch(error => {
            console.log(
              '🚀 ~ file: post.js ~ line 8 ~ axios.post ~ error',
              error,
            );
          });
      })
      .catch(err => {
        console.log('🚀 ~ file: post.js ~ line 29 ~ err', err);
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
