import {put} from 'redux-saga/effects';

import RemoteActions from '../Stores/Remote/Action';
import {remoteService} from '../Services/Remote';

export function* fetchRemote() {
  yield put(RemoteActions.fetchRemoteLoading());

  const data = yield remoteService.fetchRemote();

  console.log(data);
}
