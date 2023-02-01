import { ReactNode } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import * as S from './style'

interface Props {
  loading?: boolean
  children?: ReactNode
  inline?: boolean
}

export function Loader({ loading, inline, children }: Props) {
  return (
    <S.Loader loading={loading ? 'isLoading' : ''} inline={inline}>
      {loading && (
        <S.Spinner>
          <CircularProgress />
        </S.Spinner>
      )}
      {!loading && <S.Component>{children}</S.Component>}
    </S.Loader>
  )
}
