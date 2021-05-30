import {ADD_POST, SET_POSTS} from '../constants/post';
import {ADD_COMMENT} from '../constants/comments';

const INITIAL_STATE = {
  posts: [
    // {
    //   id: Math.random(),
    //   nickname: 'Rafael Pereira Filho',
    //   email: 'rafaelprrflh@gmail.com',
    //   image: require('../../../assets/imgs/fence.jpg'),
    //   comments: [
    //     {
    //       id: Math.random(),
    //       nickname: 'John Ray Sheldon',
    //       comment: 'Stunning!',
    //     },
    //     {
    //       id: Math.random(),
    //       nickname: 'Ana Julia Arruda',
    //       comment: 'Foto linda! Onde foi tirada?',
    //     },
    //   ],
    // },
    // {
    //   id: Math.random(),
    //   nickname: 'Francisco Leandro Lima',
    //   email: 'fllima@gmail.com',
    //   image: require('../../../assets/imgs/bw.jpg'),
    //   comments: [],
    // },
  ],
};

const PostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        }),
      };

    default:
      return state;
  }
};

export default PostReducer;
