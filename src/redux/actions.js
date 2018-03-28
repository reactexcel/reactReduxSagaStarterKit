import {createAction} from 'redux-actions';
import * as constants from './constants';

export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginError = createAction(constants.USER_LOGIN_ERROR);
