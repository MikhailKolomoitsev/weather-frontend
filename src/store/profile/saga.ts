import { setInstanceToken } from '@api/instance'
import { api } from '@api/index'
import storage from '@app/helpers/store-helper'
import { getProfileError, getProfileSuccess, updateMoodError, updateMoodSuccess } from '@store/profile'
import Router from 'next/router'
import { all, call, put, takeLatest } from 'redux-saga/effects'

function* getProfileWorker() {
  try {
    const profile = yield call(api.getProfile)
    yield put(getProfileSuccess(profile))
  } catch (error) {
    yield put(getProfileError())
  }
}

function* updateCitiesWorker(action) {
  const { payload: cities } = action

  try {
    const citiesList = yield call(api.updateCities, { value: cities })
    yield put(updateMoodSuccess(citiesList))
  } catch (error) {
    yield put(updateMoodError())
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
