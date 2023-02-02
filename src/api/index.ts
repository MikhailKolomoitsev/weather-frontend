import { instance } from '@api/instance'
import { CitiesModel } from '../models/cities.model'

const getProfile = () => instance.get('/users/profile')

const addCity = (city: CitiesModel) => instance.post('/cities', { name: city })

export const api = {
  getProfile,
  addCity,
}
