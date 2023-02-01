import { setInstanceToken } from '@api/instance'
import storage from '@app/helpers/store-helper'
import { useAppDispatch } from '@hooks/redux-typed-hooks'
import { getProfileRequest } from '@store/profile'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useGlobal = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleUpdate = () => {
    if (!router.isReady) return

    const { errorMessage, token } = router.query
    const storageToken = storage.getToken()

    if (token) {
      storage.setToken(token as string)
      setInstanceToken(token as string)
      dispatch(getProfileRequest())
      router.push('/')
    } else if (storageToken) {
      dispatch(getProfileRequest())
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    handleUpdate()
  }, [router.isReady])
}

