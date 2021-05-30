import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import UserReducer from './reducers/user';
import PostReducer from './reducers/post';
import CommentReducer from './reducers/comments';
import trunk from 'redux-thunk';

const reducers = combineReducers({
  user: UserReducer,
  posts: PostReducer,
  comment: CommentReducer,
});

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(trunk)));
};

export default storeConfig;
