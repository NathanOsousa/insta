import {ADD_COMMENT} from '../constants/comments';
const INITIAL_STATE = [
  {
    comment: null,
    nickname: null,
  },
];
const CommentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comment: action.payload.comment,
        nickname: action.payload.name,
      };

    default:
      return state;
  }
};
export default CommentReducer;
