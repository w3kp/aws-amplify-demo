import * as userTypes from 'redux/constants/user-types'

const userState = {
  user: null,
  error: null,
  loading: false,
  registeredUser: null,
}

const usersReducer = (state = userState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN_REQUEST:
      return { ...state, loading: true }
    case userTypes.USER_LOGIN_SUCCESS:
    case userTypes.USER_LOGIN_FAILURE:
      return { ...state, error: action.error, loading: false }
    case userTypes.USER_REGISTER_REQUEST:
      return { ...state, loading: true }
    case userTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        registeredUser: action.payload,
      }
    case userTypes.USER_REGISTER_FAILURE:
      return { ...state, error: action.error, loading: false }
    case userTypes.USER_REGISTERED_CLEAR:
      return { ...state, registeredUser: null }
    case userTypes.USER_LOGOUT_SUCCESS:
      return { ...state, user: null }
    case userTypes.USER_ERROR_CLEAR:
      return { ...state, error: null }
    default:
      return state
  }
}

export default usersReducer
