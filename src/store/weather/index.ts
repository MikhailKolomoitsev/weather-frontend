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
  },
})

export const { getWeatherRequest, getWeatherSuccess, getWeatherError } =
  weather.actions

export default weather.reducer
