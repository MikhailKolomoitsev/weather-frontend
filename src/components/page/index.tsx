
import { styled } from '@mui/material'
import Head from 'next/head'
import { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
  title: string
}

const Page = ({ children, title }: PageProps) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Container>
  )
}

export default Page

const Container = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
`
