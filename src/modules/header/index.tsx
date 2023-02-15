import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../style/color'
import { Search, ColorTheme } from '../../components'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { searchTasks } from './slice'

export const AppHeader = React.memo(() => {
    const [theme, setTheme] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState<string>('')
    const dispatch = useDispatch()

    const onChangeValue = (req: string) => {
        setSearch(req)
        debounceSearch(req)
    }
    const debounceSearch = React.useCallback(
        debounce((str) => dispatch(searchTasks(str)), 1000),
        [],
    )

    return (
        <Header>
            <Search value={search} getValue={onChangeValue} />
            <Settings onClick={() => setTheme((prev) => !prev)}>
                <i className="fa fa-cog" aria-hidden="true" />
            </Settings>
            {theme && <ColorTheme />}
        </Header>
    )
})

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 40px;
    justify-content: space-between;
    height: 65px;
    background-color: rgba(217, 217, 217, 0.55);
`
const Settings = styled.span`
    cursor: pointer;
    position: relative;
    font-size: 23px;
    color: var(${COLORS.grey.dark});
`
