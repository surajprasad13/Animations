import {takeLatest, all} from 'redux-saga/effects';

//types
import {StartupTypes} from '../Stores/Startup/Actions';
import {PostTypes} from '../Stores/Post/Actions';
import {UserTypes} from '../Stores/User/Actions';

//actions
import {startup} from './StartupSaga';
import {fetchPost} from './Post';
import {fetchUser} from './User';
import {RemoteTypes} from '../Stores/Remote/Action';
import {fetchRemote} from './Remote';

export default function* root() {
  yield all([
    takeLatest(RemoteTypes.FETCH_REMOTE, fetchRemote),
    takeLatest(PostTypes.FETCH_POST, fetchPost),
    takeLatest(UserTypes.FETCH_USER, fetchUser),
  ]);
}
