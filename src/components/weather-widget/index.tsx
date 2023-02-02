import { Card, styled, Typography } from '@mui/material'
import CitiesCard from '../cities-card'

export const WeatherWidget = (data: any) => {
  
  return (
    <Container>
      <Typography variant="h5" component="div">Weather at your location</Typography>
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