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
    addCitiesRequest: (state, action) => {
      state.loading = false
    },
    addCitiesSuccess: (state, action) => {
      const { name, id } = action.payload.data
      state.data?.cities.push({ name, id })
    },
    addCitiesError: state => {
      state.loading = false
    },

    logout: state => {
      state.data = null
    },
  },
})

export const {
  getProfileRequest,
  getProfileSuccess,
  getProfileError,
  addCitiesRequest,
  addCitiesSuccess,
  addCitiesError,
  logout,
} = profile.actions

export default profile.reducer
