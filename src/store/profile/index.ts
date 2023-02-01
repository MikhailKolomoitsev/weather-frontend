import { UsersModel } from '@app/models/users.model'
import { createSlice } from '@reduxjs/toolkit'

export interface ProfileInterface {
  data: UsersModel | null
  loading: boolean
}

const profile = createSlice({
  name: 'profile',
  initialState: { data: null, loading: false } as ProfileInterface,
  reducers: {
    getProfileRequest: state => {
      state.loading = true
    },
    getProfileSuccess: (state, action) => {
      state.data = action.payload.data
      state.loading = false
    },
    getProfileError: state => {
      state.loading = false
    },

    updateCitiesRequest: (state, action) => {
      state.loading = false
    },
    updateCitiesSuccess: (state, action) => {
      // state.data = { ...state.data, cities: action.payload.data }
    },
    updateCitiesError: state => {
      state.loading = false
    },

    logout: state => {
      state.data = null
    },
  },
})

export const { getProfileRequest, getProfileSuccess, getProfileError, updateCitiesRequest, updateCitiesSuccess, updateCitiesError, logout } = profile.actions

export default profile.reducer
