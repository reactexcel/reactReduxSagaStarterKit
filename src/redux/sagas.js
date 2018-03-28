import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

import { loginRequest } from './login/action/';

export function* watchActions () {
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginRequest);
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
