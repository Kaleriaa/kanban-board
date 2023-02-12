import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardState, TextState } from '../types'
import { Card } from '../../../@types'

const initialState: CardState = {
    list: [],
}

export const cardSlice = createSlice({
    name: 'cardList',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.list.push(action.payload)
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((id) => id.item !== action.payload)
        },
        addText: (state, action: PayloadAction<TextState>) => {
            const foundedCard = state.list.find(
                (card) => card.item === action.payload.item,
            )
            if (foundedCard) {
                const updatedCard = {
                    ...foundedCard,
                    text: action.payload.text,
                }
                state.list = state.list.filter(
                    (id) => id.item !== action.payload.item,
                )
                state.list.push(updatedCard)
            }
        },
        dropCard: (state, action: PayloadAction<Record<string, string>>) => {
            const foundedCard = state.list.find(
                (card) => card.item === action.payload.id,
            )
            if (foundedCard) {
                foundedCard.id = action.payload.column
            }
        },
    },
})

export const { addCard, deleteCard, addText, dropCard } = cardSlice.actions

export default cardSlice.reducer
