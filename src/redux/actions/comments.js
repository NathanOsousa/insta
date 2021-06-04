import axios from 'axios';
import {ADD_COMMENT} from '../constants/comments';
import {getPosts} from '../actions/post';

export const addComment = comment => {
  return (dispatch, getState) => {
    axios
      .get(`/posts/${payload.postId}.json`)
      .then(response => {
        const comments = response.data.comments || [];
        comments.push(payload.coment);
        axios
          .patch(
            `/posts/${payload.postId}.json?auth=${getState().user.token}`,
            {comments},
          )
          .then(response => {
            dispatch(getPosts());
          })
          .catch(error => {
            console.log(
              '🚀 ~ file: comments.js ~ line 14 ~ axios.patch ~ error',
              error,
            );
          });
      })
      .catch(error => {
        console.log(
          '🚀 ~ file: comments.js ~ line 7 ~ axios.get ~ error',
          error,
        );
      });
  };
};
