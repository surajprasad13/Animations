import {createReducer} from 'reduxsauce';
import {RemoteTypes} from './Action';

import {INITIAL_STATE} from './InitialState';

export const fetchRemote = state => ({
  ...state,
  development: false,
  error: '',
});

export const fetchRemoteSuccess = (state, {remote}) => ({
  ...state,
  development: remote,
  error: '',
});

export const fetchRemoteFail = (state, {error}) => ({
  ...state,
  development: false,
  error: error,
});

export default RemoteReducer = createReducer(INITIAL_STATE, {
  [RemoteTypes.FETCH_REMOTE_LOADING]: fetchRemote,
  [RemoteTypes.FETCH_REMOTE_SUCCESS]: fetchRemoteSuccess,
  [RemoteTypes.FETCH_REMOTE_FAIL]: fetchRemoteFail,
});
