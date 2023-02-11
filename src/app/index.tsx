import React from 'react'
import { AppHeader } from '../modules/header'
import { CardsList } from '../modules/cards-list/cards-list'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../modules/header/slice'
import { RootState } from '../redux/store'

export const App: React.FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector(
        (state: RootState) => state.headerSlice.themeColor,
    )

    React.useEffect(() => {
        dispatch(changeTheme(localStorage.getItem('theme') || ''))
    }, [])

    return (
        <Container bg={theme}>
            <AppHeader />
            <CardsList />
        </Container>
    )
}
const Container = styled.div<{ bg: string }>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bg};
`
