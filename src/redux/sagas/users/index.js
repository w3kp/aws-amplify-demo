import { put, takeLatest } from 'redux-saga/effects'

import history from 'helpers/history'
import * as userActions from 'redux/actions/users'
import * as userTypes from 'redux/constants/user-types'

function* login(action) {
  try {
    // IMPLEMENT AWS AMPLIFY SIGNUP
    history.replace('/')
    yield put(userActions.userLoginSuccess({ user: { username: 'username', jwtToken: 'jwtToken' } }))
  } catch (err) {
    yield put(userActions.userLoginFailure(err.message))
  }
}

function* logout() {
  localStorage.clear()
  history.push('/login')
  yield put(userActions.userLogoutSuccess())
}

function* register(action) {
  try {
    // IMPLEMENT AWS AMPLIFY SIGNUP
    const signUpResponse = { user: 'user ' }
    yield put(userActions.userRegisterSuccess(signUpResponse.user))
  } catch (err) {
    const error = `${err.message}. Please contact administrator`
    yield put(userActions.userRegisterFailure(error))
  }
}

export function* loginUserSaga() {
  yield takeLatest(userTypes.USER_LOGIN_REQUEST, login)
}

export function* logoutUserSaga() {
  yield takeLatest(userTypes.USER_LOGOUT_REQUEST, logout)
}

export function* createUserSaga() {
  yield takeLatest(userTypes.USER_REGISTER_REQUEST, register)
}
