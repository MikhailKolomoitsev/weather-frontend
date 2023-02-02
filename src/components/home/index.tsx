import { Button, styled, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import {
  useAppDispatch,
  useShallowEqualSelector,
} from '../../hooks/redux-typed-hooks'
import { getLocalWeatherRequest } from '../../store/profile'
import { getWeatherRequest } from '../../store/weather'
import CitiesCard from '../cities-card'
import CitiesForm from '../cities-form'
import { Loader } from '../loader'
import { WeatherWidget } from '../weather-widget'

const Home = () => {
  const dispatch = useAppDispatch()
  const { data: profile, loading } = useShallowEqualSelector(s => s.profile)
  const { data: weather } = useShallowEqualSelector(s => s.weather)
  const [lontitude, setLontitude] = useState(0)
  const [latitude, setLatitude] = useState(0)

  const getPostition = async () => {
    await navigator.geolocation.getCurrentPosition(position => {
      setLontitude(position.coords.latitude)
      setLatitude(position.coords.longitude)
    })
  }

  useEffect(() => {
    dispatch(getWeatherRequest(profile?.cities))
  }, [profile?.cities])

  const weatherItems = useMemo(
    () => weather.map((city: any) => <CitiesCard key={city.id} data={city} />),
    [weather]
  )

  return (
    <Container>
      <MainHeading variant="h1" gutterBottom>
        Welcome, {profile?.email}
      </MainHeading>
      <CitiesForm />
      {!lontitude && !latitude && (<GetLocal onClick={getPostition} variant='contained' >Get Local Forecast</GetLocal>)}
      {lontitude && latitude && (<WeatherWidget data={{}}></WeatherWidget>)}
      
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