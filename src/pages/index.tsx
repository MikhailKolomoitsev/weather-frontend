import { isEmpty } from '@app/utils/global'
import  Home  from '@components/home'
import { Loader } from '@components/loader'
import { Login } from '@components/login'
import Page from '@components/page'
import { useShallowEqualSelector } from '@hooks/redux-typed-hooks'

const Pages = () => {
  const { data: profile, loading } = useShallowEqualSelector(s => s.profile)

  const component = !isEmpty(profile) ? <Home /> : <Login />

  return (
    <Page title="Home">
      <Loader loading={loading}>{component}</Loader>
    </Page>
  )
}

export default Pages
