import {call, put} from 'redux-saga/effects';
import * as actions from '../../actions';
import fireAjax from '../../../services/index';
import {CONFIG} from '../../../config/index';

export function* loginRequest (action) {
  try {
    const response = yield call(fireAjax, 'POST', `${CONFIG.BASE_URL}${CONFIG.LOGIN}`, {
      'email': action.payload.email,
      'password': action.payload.password
    });
    if (response && (response.status === 200 || response.status === 304) ) {
      yield put(actions.userLoginSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.userLoginError('Invalid Login...'));
    }
  } catch (e) {
    yield put(actions.userLoginError('Error Occurs !!'));
    console.warn('Some error found in "logingRequest" action\n', e);
  }
}
