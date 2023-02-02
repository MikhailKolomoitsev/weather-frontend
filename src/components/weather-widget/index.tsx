import { styled } from '@mui/material'
import CitiesCard from '../cities-card'

export const WeatherWidget = (data: any) => {
  return <CitiesCard data={data} />
}

const Fixed = styled('form')`
  position: fixed;
  top: 0;
  right: 0;
`
