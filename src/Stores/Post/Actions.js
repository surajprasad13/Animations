import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  fetchPost: null,
  fetchPostLoading: null,
  fetchPostSuccess: ['post'],
  fetchPostFail: ['errorMessage'],
});

export const PostTypes = Types;

export default Creators;
