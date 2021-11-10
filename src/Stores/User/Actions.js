import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  fetchUser: null,
  fetchUserLoading: null,
  fetchUserSuccess: ['user'],
  fetchUserFail: ['errorMessage'],
});

export const UserTypes = Types;

export default Creators;
