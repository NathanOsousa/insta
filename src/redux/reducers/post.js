import {ADD_POST} from '../constants/post';

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

    default:
      return state;
  }
};

export default PostReducer;
