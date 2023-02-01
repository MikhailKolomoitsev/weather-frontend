import { styled } from '@mui/material'
import CitiesForm from '../cities-form'

const Home = () => {
  return (
    <Container>
      <CitiesForm />
    </Container>
  )
}

export default Home

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px;
`