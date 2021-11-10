import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  fetchRemote: null,
  fetchRemoteLoading: null,
  fetchRemoteSuccess: ['remote'],
  fetchRemoteFail: ['error'],
});

export const RemoteTypes = Types;
export default Creators;
