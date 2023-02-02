import { all, fork } from 'redux-saga/effects'
import profile from './profile/saga'
import weather from './weather/saga'

const allSagas = function* () {
    yield all([
      fork(profile),
      fork(weather),
    ])
  }
  
  export default allSagas
  