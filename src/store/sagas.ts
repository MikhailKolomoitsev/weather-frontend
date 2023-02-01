import { all, fork } from 'redux-saga/effects'
import profile from './profile/saga'

const allSagas = function* () {
    yield all([
      fork(profile),
    ])
  }
  
  export default allSagas
  