import { Card, styled, Typography } from '@mui/material'
import CitiesCard from '../cities-card'

export const WeatherWidget = (data: any) => {
  console.log(data.data.data)
  const { main, weather, name } = data.data.data
  return (
    <Container>
      <Typography variant="h5" color='red' component="div">
        Your location
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h5" component="div">
        Temperature: {Math.ceil(main?.temp - 273.15)} C
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Feels Like: {Math.ceil(main?.feels_like - 273.15)} C
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Weather: {weather ? weather[0].description : ''}
      </Typography>
    </Container>
  )
}

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: fixed;
  top: 10px;
  right: 20px;
`
