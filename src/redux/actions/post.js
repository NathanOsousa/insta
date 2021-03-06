import {SET_POSTS, CREATING_POSTS, POST_CREATED} from '../constants/post';
import {ADD_COMMENT} from '../constants/comments';
import axios from 'axios';
import {setMessage} from './message';

export const addPost = post => {
  return (dispatch, getState) => {
    dispatch(creatingPost());
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
          .post(`/posts.json?auth=${getState().user.token}`, {...post})
          .then(response => {
            dispatch(getPosts());
            dispatch(postCreated());
          })
          .catch(error => {
            dispatch(setMessage({title: 'Erro', text: error}));
          });
      })
      .catch(err => {
        console.log('🚀 ~ file: post.js ~ line 29 ~ err', err);
      });
  };
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
        dispatch(setPosts(posts.reverse));
      })
      .catch(err => {
        console.log('🚀 ~ file: post.js ~ line 56 ~ axios.get ~ err', err);
      });
  };
};

export const creatingPost = () => {
  return {
    type: CREATING_POSTS,
  };
};

export const postCreated = () => {
  return {
    type: POST_CREATED,
  };
};
