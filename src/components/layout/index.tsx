import { useGlobal } from '@hooks/useGlobal'
import { styled } from '@mui/material'
import { ReactElement } from 'react'

interface MainLayoutProps {
  children: ReactElement
}

const MainLayout = ({ children }: MainLayoutProps) => {
  useGlobal()

  return (
    <Root>
      {children}
    </Root>
  )
}

export default MainLayout

const Root = styled('div')`
  display: flex;
  min-height: 100vh;
  position: relative;
  background: radial-gradient(ellipse at top, #e66465, transparent),
            radial-gradient(ellipse at bottom, #4d9f0c, transparent);
`
