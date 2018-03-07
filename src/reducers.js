import { combineReducers } from 'redux';
import { persistStore, autoRehydrate, storages } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import { LoginReducer } from './containers/Login';

const reducers = combineReducers({
  currentUser: LoginReducer,
});

export default reducers;
