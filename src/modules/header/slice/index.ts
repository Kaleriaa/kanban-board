import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface HeaderState {
    themeColor: string
    searchValue: string
}

const initialState: HeaderState = {
    themeColor: '#9db6d4',
    searchValue: '',
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.themeColor = action.payload
        },
        searchTasks: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
    },
})

export const { changeTheme, searchTasks } = headerSlice.actions
export default headerSlice.reducer
