import { all, put, takeLatest, call } from 'redux-saga/effects'
import { getWeatherError, getWeatherSuccess } from '.'
import { api } from '@app/api/index'

function* fetchResource(resource: string) {
  const { data } = yield call(api.getCityWeather, resource)
  yield put(getWeatherSuccess(data))
}

function* getWeatherWorker(action: any): Generator {
  const citiesNames = action.payload.map((city: any) => city.name)
  try {
    const weather = yield all(citiesNames.map((city: string) => call(fetchResource, city)))
  } catch (error) {
    yield put(getWeatherError())
  }
}

function* weatherSaga() {
  yield all([takeLatest('weather/getWeatherRequest', getWeatherWorker)])
}

export default weatherSaga
