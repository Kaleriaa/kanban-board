import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export const selectToDo = (id: string) =>
    useSelector((state: RootState) =>
        state.cardSlice.list.filter((item) => item.id === id),
    )
export const selectItemProps = (id: string) =>
    useSelector((state: RootState) =>
        state.cardSlice.list.find((item) => item.item === id),
    )
