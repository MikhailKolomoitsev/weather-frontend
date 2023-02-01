import { AppDispatch, AppState } from '@app/store'
import { RootStore } from '@store/reducers'
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export function useShallowEqualSelector<T>(selector: (store: RootStore) => T) {
  return useAppSelector<T>(selector, shallowEqual)
}
