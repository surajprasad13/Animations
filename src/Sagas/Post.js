import {call, put} from 'redux-saga/effects';
import {postService} from '../Services/Post';
import PostActions from '../Stores/Post/Actions';

export function* fetchPost() {
  yield put(PostActions.fetchPostLoading());
  const post = yield call(postService.fetchPost);

  if (post) {
    yield put(PostActions.fetchPostSuccess(post));
  } else {
    yield put(PostActions.fetchPostFail('Faild in fetching'));
  }
}
