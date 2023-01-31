import { instance } from '@api/instance'
import { CitiesModel } from '../models/cities.model'

const getProfile= () =>instance.get('/users/profile')

const updateCities = (cities: CitiesModel[]) => instance.put('/users/profile', { cities })

export const api = {
    getProfile,
    updateCities,
}