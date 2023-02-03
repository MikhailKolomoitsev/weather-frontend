import { all, put, takeLatest, call } from 'redux-saga/effects'
import { getWeatherError, getWeatherSuccess, removeCityError, removeCitySuccess } from '.'
import { api } from '@app/api/index'

function* fetchResource(resource: { name: string; id: string }) {
  const { data } = yield call(api.getCityWeather, resource.name)
  yield put(getWeatherSuccess({ ...data, ...resource }))
}

function* getWeatherWorker(action: any): Generator {
  try {
    const weather = yield all(
      action.payload.map((city: { name: string; id: string }) =>
        call(fetchResource, city)
      )
    )
  } catch (error) {
    yield put(getWeatherError())
  }
}

function* removeCityWorker(action: any): Generator {
  try {
    yield call(api.deleteCity, action.payload)
    yield put(removeCitySuccess(action.payload))
  } catch (error) {
    yield put(removeCityError())
  }
}

function* weatherSaga() {
  yield all([
    takeLatest('weather/getWeatherRequest', getWeatherWorker),
    takeLatest('weather/removeCityRequest', removeCityWorker),
  ])
}

export default weatherSaga
