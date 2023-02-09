import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeTheme } from '../modules/header/slice'
import { RootState } from '../redux/store'

export const Colors: React.FC<{ color: string }> = (prop) => {
    const dispatch = useDispatch()

    const currentColor = useSelector(
        (state: RootState) => state.headerSlice.themeColor,
    )
    const onChangeColor = () => {
        localStorage.setItem('theme', prop.color)
        dispatch(changeTheme(prop.color))
    }

    //TODO: вынести логику
    return (
        <ColorBlock
            {...prop}
            onClick={onChangeColor}
            className={currentColor === prop.color ? 'active' : ''}
        />
    )
}

const ColorBlock = styled.div`
    cursor: pointer;
    width: 38px;
    height: 38px;
    background-color: ${(prop) => prop.color};
    &.active {
        border: 2px solid #000;
    }
`
