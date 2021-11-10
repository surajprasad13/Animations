import {call, put} from 'redux-saga/effects';
import {userService} from '../Services/User';

import UserActions from '../Stores/User/Actions';

export function* fetchUser() {
 // yield put(UserActions.fetchUserLoading());

  const data = yield call(userService.fetchUser);

  if (data) {
    yield put(UserActions.fetchUserSuccess(data));
  } else {
    yield put(UserActions.fetchUserFail('Error in fetching'));
  }
}
