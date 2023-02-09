export type ColorToDo = {
    color: string
}

export interface CardState {
    children: JSX.Element[] | null
    title: string
    id: string
}
