import {createStore, combineReducers} from 'redux';
import UserReducer from './reducers/user';

const reducers = combineReducers({
  user: UserReducer,
});

const storeConfig = () => createStore(reducers);

export default storeConfig;
