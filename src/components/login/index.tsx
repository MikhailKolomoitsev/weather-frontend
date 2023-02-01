import { API_URL } from '@app/config/constants'
import { Button, styled, Typography } from '@mui/material'

export const Login = () => {
  return (
    <Wrapper>
      <Typography id="test-welcome-text" variant={'h4'}>
        Welcome to Weather App
      </Typography>
      <LoginButton variant="contained" href={`${API_URL}/google`}>
        Login with Google
      </LoginButton>
    </Wrapper>
  )
}

const LoginButton = styled(Button)`
  color: #2acaea;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 150px);
  position: relative;
`

