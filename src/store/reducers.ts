import { combineReducers } from "@reduxjs/toolkit";
import profile from './profile'

export const rootReducer = combineReducers({
    profile
})

export type RootStore = ReturnType<typeof rootReducer>