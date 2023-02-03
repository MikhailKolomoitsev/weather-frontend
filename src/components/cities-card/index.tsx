import { useEffect } from 'react'
import { styled, Typography, Button } from '@mui/material'
import Card from '@mui/material/Card'
import { useAppDispatch } from '../../hooks/redux-typed-hooks'
import { removeCityRequest } from '../../store/weather'

const CitiesCard = (data: any) => {
  const { name, main, weather, id } = data.data
  const dispatch = useAppDispatch()

  const handleRemoveCity =  () => {
    dispatch(removeCityRequest(id))
  }

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
      <DeleteButton
        variant="contained"
        color="error"
        onClick={handleRemoveCity}
      >
        Remove
      </DeleteButton>
    </Container>
  )
}

export default CitiesCard

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  transition: all 0.5s ease-in-out;
  width: 200px;

  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`

const DeleteButton = styled(Button)`
  color: #fff;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.05;
  }
`
