import {createStore, combineReducers} from 'redux';
import UserReducer from './reducers/user';
import PostReducer from './reducers/post';
import CommentReducer from './reducers/comments';

const reducers = combineReducers({
  user: UserReducer,
  posts: PostReducer,
  comment: CommentReducer,
});

const storeConfig = () => createStore(reducers);

export default storeConfig;
