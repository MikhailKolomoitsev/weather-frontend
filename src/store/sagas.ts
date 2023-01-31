import { all } from 'axios'
import { fork } from 'child_process'
import profile from './profile/saga'

const allSagas = function* () {
    yield all([

      fork(profile),

    ])
  }
  
  export default allSagas
  