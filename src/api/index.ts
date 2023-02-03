import { instance } from '@api/instance'
import axios from 'axios'
import { CitiesModel } from '../models/cities.model'

const getProfile = () => instance.get('/users/profile')

const addCity = (city: CitiesModel) => instance.post('/cities', { name: city })

const deleteCity = (id: string) => instance.delete(`/cities/${id}`)

const getCityWeather = (city: string) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=088bb9de534e4a7844076c98a088a6b6`
  )

const getLocalWeather = (latitude: number, longitude: number) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=088bb9de534e4a7844076c98a088a6b6`
  )

export const api = {
  getProfile,
  addCity,
  deleteCity,
  getCityWeather,
  getLocalWeather,
}
