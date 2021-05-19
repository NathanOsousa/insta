import {createStore, combineReducers} from 'redux';
import UserReducer from './reducers/user';
import PostReducer from './reducers/post';

const reducers = combineReducers({
  user: UserReducer,
  posts: PostReducer,
});

const storeConfig = () => createStore(reducers);

export default storeConfig;
