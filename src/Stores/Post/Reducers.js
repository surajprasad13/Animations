import {createReducer} from 'reduxsauce';
import {PostTypes} from './Actions';
import {INITIAL_STATE} from './InitialState';

export const fetchPost = state => ({
  ...state,
  postLoading: true,
  post: null,
  postFail: '',
});

export const fetchPostSuccess = (state, {post}) => ({
  ...state,
  postLoading: false,
  post: post,
  postFail: '',
});

export const fetchPostFail = (state, {errorMessage}) => ({
  ...state,
  postLoading: false,
  post: null,
  postFail: errorMessage,
});

export default PostReducer = createReducer(INITIAL_STATE, {
  [PostTypes.FETCH_POST_LOADING]: fetchPost,
  [PostTypes.FETCH_POST_SUCCESS]: fetchPostSuccess,
  [PostTypes.FETCH_POST_FAIL]: fetchPostFail,
});
