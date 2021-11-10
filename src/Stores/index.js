import {combineReducers} from 'redux';

//reducers
import PostReducer from './Post/Reducers';
import UserReducer from './User/Reducers';
import RemoteReducer from './Remote/Reducer';

import rootSaga from '../Sagas';

import configureStore from './CreateStore';

export default () => {
  const rootReducer = combineReducers({
    post: PostReducer,
    user: UserReducer,
    remote: RemoteReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
