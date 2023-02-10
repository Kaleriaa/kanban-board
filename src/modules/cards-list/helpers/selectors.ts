import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export const selectToDo = (id: string, search: string) =>
    useSelector((state: RootState) =>
        state.cardSlice.list.filter((item) =>
            search ? item.id === id && item.title === search : item.id === id,
        ),
    )
export const selectItemProps = (id: string) =>
    useSelector((state: RootState) =>
        state.cardSlice.list.find((item) => item.item === id),
    )
export const selectSearch = (state: RootState) => state.headerSlice.searchValue
