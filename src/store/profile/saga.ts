import { setInstanceToken } from '@api/instance'
import { api } from '@api/index'
import storage from '@app/helpers/store-helper'
import { getProfileError, getProfileSuccess, addCitiesSuccess, addCitiesError } from '@store/profile'
import Router from 'next/router'
import { all, call, put, takeLatest } from 'redux-saga/effects'

function* getProfileWorker(): Generator {
  try {
    const profile = yield call(api.getProfile)
    yield put(getProfileSuccess(profile))
  } catch (error) {
    yield put(getProfileError())
  }
}

function* updateCitiesWorker(action:any): Generator {
  const { payload: cities  } = action

  try {
    // const citiesList = yield call(api.updateCities, { cities })
    // yield put(addCitiesSuccess(citiesList))
  } catch (error) {
    yield put(addCitiesError())
  }
}

function* logoutWorker() {
  storage.removeToken()
  setInstanceToken('')
  if (Router.isReady) {
    Router.push('/')
  }
}

function* profileSaga() {
  yield all([
    takeLatest('profile/getProfileRequest', getProfileWorker),
    takeLatest('profile/updateCitiesRequest', updateCitiesWorker),
    takeLatest('profile/logout', logoutWorker),
  ])
}

export default profileSaga
