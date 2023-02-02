import { api } from '@api/index'
import { setInstanceToken } from '@api/instance'
import storage from '@app/helpers/store-helper'
import { addCitiesError, addCitiesSuccess, getProfileError, getProfileSuccess } from '@store/profile'
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

function* addCitiesWorker(action: any): Generator {
  const { payload: city } = action

  try {
    const citiesList = yield call(api.addCity, city)
    yield put(addCitiesSuccess(citiesList))
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
    takeLatest('profile/addCitiesRequest', addCitiesWorker),
    takeLatest('profile/logout', logoutWorker),
  ])
}

export default profileSaga
