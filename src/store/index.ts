import { configureStore } from '@reduxjs/toolkit'
import { rootReducer, RootStore } from '@store/reducers'
import sagas from '@store/sagas'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

export const store = configureStore<RootStore>({
  reducer: rootReducer,
  middleware: [saga],
})

saga.run(sagas)

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>
