import { useEffect } from 'react'
import { styled, Typography, Button } from '@mui/material'
import Card from '@mui/material/Card'

const CitiesCard = (data: any) => {
  const { name, main, weather } = data.data

  return (
    <Container>
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
      <DeleteButton variant="contained" color="error">
        Remove
      </DeleteButton>
    </Container>
  )
}

export default CitiesCard

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const DeleteButton = styled(Button)`
  color: #fff;
`
