import { UsersModel } from '@app/models/users.model'
import { createSlice } from '@reduxjs/toolkit'

export interface WeatherInterface {
  data: any | null
  loading: boolean
}

const weather = createSlice({
  name: 'weather',
  initialState: { data: [], loading: false } as WeatherInterface,
  reducers: {
    getWeatherRequest: (state, action) => {
      state.loading = true
    },
    getWeatherSuccess: (state, action) => {
      if (!state.data.some((city: any) => city.name === action.payload.name)) {
        state.data.push(action.payload)
      }
      state.loading = false
    },
    getWeatherError: state => {
      state.loading = false
    },
    removeCityRequest: (state, action) => {
      state.loading = true
    },
    removeCitySuccess: (state, action) => {
      console.log(action.payload)
      state.data = state.data.filter((city: any) => city.id === action.payload)
      state.loading = false
    },
    removeCityError: state => {
      state.loading = false
    },
  },
})

export const {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
  removeCityRequest,
  removeCitySuccess,
  removeCityError,
} = weather.actions

export default weather.reducer
