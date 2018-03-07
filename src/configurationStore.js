import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import {
  persistStore,
  autoRehydrate,
  storages
} from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import logger from 'redux-logger';
import reducers from './reducers';

const enchancer = compose(applyMiddleware(logger), autoRehydrate());
const store = createStore(reducers, enchancer);
const filter = createFilter('currentUser', ['token']);
const persistOptions = {
  storage: storages.asyncLocalStorage,
	transforms: [filter],
};

export default store;
export {
  persistOptions,
};
