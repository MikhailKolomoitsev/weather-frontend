import { styled } from '@mui/material'

interface LoaderProps {
  loading: string
  inline: boolean
}

export const Loader = styled('div')<LoaderProps>`
  width: 100%;
  height: auto;
  position: relative;
  display: ${props => (props.loading === 'isLoading' ? 'inline-block' : 'block')};

  & .component {
    opacity: ${props => (props.inline ? '0.5' : '')};
    user-select: ${props => (props.inline ? 'none' : '')};
    pointer-events: ${props => (props.inline ? 'none' : '')};
  }
`

export const Spinner = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%, -50%);
  & .root {
    color: #fff;
  }
`

export const Component = styled('div')`
  transition: opacity 0.15s;
`
