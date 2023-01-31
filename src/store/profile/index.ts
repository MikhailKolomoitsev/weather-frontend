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

    updateMoodRequest: (state, action) => {
      state.loading = false
    },
    updateMoodSuccess: (state, action) => {
      state.data = { ...state.data, todays_mood: action.payload.data }
    },
    updateMoodError: state => {
      state.loading = false
    },

    logout: state => {
      state.data = null
    },
  },
})

export const { getProfileRequest, getProfileSuccess, getProfileError, updateMoodRequest, updateMoodSuccess, updateMoodError, logout } = profile.actions

export default profile.reducer
