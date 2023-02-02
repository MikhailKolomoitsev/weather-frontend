import { Button, styled, Typography } from '@mui/material'
import { AxiosResponse } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../../api'
import {
  useAppDispatch,
  useShallowEqualSelector
} from '../../hooks/redux-typed-hooks'
import { getWeatherRequest } from '../../store/weather'
import CitiesCard from '../cities-card'
import CitiesForm from '../cities-form'
import { Loader } from '../loader'
import { WeatherWidget } from '../weather-widget'

const Home = () => {
  const dispatch = useAppDispatch()
  const { data: profile, loading } = useShallowEqualSelector(s => s.profile)
  const { data: weather } = useShallowEqualSelector(s => s.weather)
  const [localWeather, setLocalWeather] = useState<AxiosResponse | null | void>(null);

  let longitude: number
  let latitude: number
  const getPostition = async () => {
    await navigator.geolocation.getCurrentPosition(async (position) => {
      latitude = position.coords.latitude
      longitude = position.coords.longitude
      const localWeather = await api.getLocalWeather(latitude, longitude)
      setLocalWeather(localWeather)
    })
   
  }

  useEffect(() => {
    dispatch(getWeatherRequest(profile?.cities))
  }, [profile?.cities])

  const weatherItems = useMemo(
    () => {
      // const prepareData
      return weather.map((city: any) => <CitiesCard key={city.id} data={city} />)
    },
    [weather]
  )

  return (
    <Container>
      <MainHeading variant="h1" gutterBottom>
        Welcome, {profile?.email}
      </MainHeading>
      <CitiesForm />
      {!localWeather && (
        <GetLocal onClick={getPostition} variant="contained">
          Get Local Forecast
        </GetLocal>
      )}
      {localWeather && <WeatherWidget data={localWeather}></WeatherWidget>}

      <Loader loading={loading}>
        <CitiesList>{weatherItems}</CitiesList>
      </Loader>
    </Container>
  )
}

export default Home

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const MainHeading = styled(Typography)`
  font-size: 25px;
  align-self: center;
  margin-bottom: 20px;
`

const CitiesList = styled('div')`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 10px;
  padding: 10px;
`

const GetLocal = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  max-width: 100px;
`
