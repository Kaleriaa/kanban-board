import cardSlice from '../modules/cards-list/slice/index'
import headerSlice from './../modules/header/slice/index'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        headerSlice,
        cardSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
