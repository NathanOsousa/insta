import {SET_POSTS} from '../constants/post';
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

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: comment,
  };
};

export const getPosts = () => {
  return dispatch => {
    axios
      .get('/posts.json')
      .then(response => {
        const rawPosts = res.data;
        const posts = [];
        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key,
          });
        }
        dispatch(setPosts(posts));
      })
      .catch(err => {
        console.log('🚀 ~ file: post.js ~ line 56 ~ axios.get ~ err', err);
      });
  };
};
