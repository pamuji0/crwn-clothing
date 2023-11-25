import { all, call, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.type';

import { getCurrentUser } from '../../utils/firebase';
import { signInFailed, signInSuccess } from './user.action';

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;
	} catch (error) {
		console.log(error);
	}
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export function* userSaga() {
	yield all([]);
}
