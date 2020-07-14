import { all, fork } from 'redux-saga/effects'

import * as usersSagas from './users'

export default function* rootSaga() {
  yield all([...Object.values(usersSagas)].map(fork))
}
