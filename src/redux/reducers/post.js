import {ADD_POST} from '../constants/post';
import {ADD_COMMENT} from '../constants/comments';

const INITIAL_STATE = {
  posts: [],
};

const PostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
