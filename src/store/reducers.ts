import { combineReducers } from "@reduxjs/toolkit";
import profile from './profile'
import weather from './weather'

export const rootReducer = combineReducers({
    profile,
    weather
})

export type RootStore = ReturnType<typeof rootReducer>