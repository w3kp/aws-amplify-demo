import * as userTypes from 'redux/constants/user-types'

export const userLoginRequest = (credentials) => ({
  payload: credentials,
  type: userTypes.USER_LOGIN_REQUEST,
})

export const userLoginSuccess = (user) => ({
  payload: user,
  type: userTypes.USER_LOGIN_SUCCESS,
})

export const userLoginFailure = (error) => ({
  error,
  type: userTypes.USER_LOGIN_FAILURE,
})

export const userLogoutRequest = () => ({
  type: userTypes.USER_LOGOUT_REQUEST,
})

export const userLogoutSuccess = () => ({
  type: userTypes.USER_LOGOUT_SUCCESS,
})

export const userErrorClear = () => ({
  type: userTypes.USER_ERROR_CLEAR,
})

export const userRegisterRequest = (formData) => ({
  payload: formData,
  type: userTypes.USER_REGISTER_REQUEST,
})

export const userRegisterSuccess = (user) => ({
  payload: user,
  type: userTypes.USER_REGISTER_SUCCESS,
})

export const userRegisterFailure = (error) => ({
  error,
  type: userTypes.USER_REGISTER_FAILURE,
})

export const userRegisteredClear = () => ({
  type: userTypes.USER_REGISTERED_CLEAR,
})
