import { Card } from '../../../@types'

export interface CardState {
    list: Card[]
}

export type TextState = Pick<Card, 'item' | 'text'>
