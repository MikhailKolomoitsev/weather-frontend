import { API_URL } from '@app/config/constants'
import storage from '@app/helpers/store-helper'
import { ERROR } from '@app/models/api.model'
import { store } from '@app/store'
import { logout } from '@store/profile/index'
import axios from 'axios'

export const instance = axios.create({
  baseURL: API_URL,
})

instance.interceptors.request.use(
  function (config) {
    const token = typeof window !== 'undefined' ? storage.getToken() : ''
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status === 401) {
      store.dispatch(logout())
      throw new Error(ERROR.SESSION_EXPIRED)
    }
    const otherError = error?.response?.data?.message ?? ERROR.UNKNOWN
    throw new Error(otherError)
  }
)

export function setInstanceToken(token: string) {
  instance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ''
}
