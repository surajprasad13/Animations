import {call, put, select} from 'redux-saga/effects';

import {remoteService} from '../Services/Remote';
import remoteConfig from '@react-native-firebase/remote-config';

export function* startup() {
  const data = yield remoteService.fetchRemote();

  console.log(data, 'from here');
}
