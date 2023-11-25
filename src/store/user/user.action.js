import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.type';

export const setCurrentUser = (user) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

// SET_CURRENT_USER: 'SET_CURRENT_USER',
// CHECK_USER_SESSION: 'CHECK_USER_SESSION',
// GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
// EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
// SIGN_IN_SUCCESS:'SIGN_IN_SUCCESS',
// SIGN_IN_FAILED:'SIGN_IN_FAILED',

export const checkUsesSession = () =>
	createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
	createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
	createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
	createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
	createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
