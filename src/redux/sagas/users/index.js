import { call, put, takeLatest } from 'redux-saga/effects'

import history from 'helpers/history'
import * as userActions from 'redux/actions/users'
import * as userTypes from 'redux/constants/user-types'

import { Auth } from 'aws-amplify'

function* login(action) {
  try {
    //=======
    // STEP 3
    //=======
    // yield amplify signin here
    const {
      username,
      signInUserSession: {
        accessToken: { jwtToken },
      },
    } = yield call((user) => {
      const { password, usernameEmail: username } = user
      return Auth.signIn(username, password)
    }, action.payload)

    localStorage.token = jwtToken
    localStorage.username = username

    history.replace('/')
    yield put(userActions.userLoginSuccess({ user: { username, jwtToken } }))
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
    //=======
    // STEP 2
    //=======
    // yield amplify signup here
    const signUpResponse = yield call((user) => {
      const { email, password, username } = user
      return Auth.signUp({
        username,
        password,
        attributes: { email },
      })
    }, action.payload)

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
