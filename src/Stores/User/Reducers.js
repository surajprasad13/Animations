import {createReducer} from 'reduxsauce';
import {UserTypes} from './Actions';
import {INITIAL_STATE} from './InitialState';

export const fetchUser = state => ({
  ...state,
  userLoading: true,
  user: null,
  userErrorMessage: '',
});

export const fetchUserSuccess = (state, {user}) => ({
  ...state,
  user: user,
  userLoading: false,
  userErrorMessage: '',
});

export const fetchUserFail = (state, {errorMessage}) => ({
  ...state,
  user: null,
  userLoading: false,
  userErrorMessage: errorMessage,
});

export default UserReducer = createReducer(INITIAL_STATE, {
  [UserTypes.FETCH_USER_LOADING]: fetchUser,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.FETCH_USER_FAIL]: fetchUserFail,
});
