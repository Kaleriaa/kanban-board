import React from 'react'
import styled from 'styled-components'
import { widgets } from './constants/colors-widget'
import { Colors, appear } from '../../ui'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { changeTheme } from '../../modules/header/slice'

export const ColorTheme: React.FC = () => {
    const dispatch = useDispatch()

    const currentColor = useSelector(
        (state: RootState) => state.headerSlice.themeColor,
    )
    const onChangeColor = (color: string) => {
        localStorage.setItem('theme', color)
        dispatch(changeTheme(color))
    }

    return (
        <ColorWidget>
            {widgets.map((item) => {
                return (
                    <Colors
                        key={item}
                        currentColor={currentColor}
                        onChangeTheme={onChangeColor}
                        color={item}
                    />
                )
            })}
        </ColorWidget>
    )
}

const ColorWidget = styled.div`
    position: absolute;
    right: 36px;
    top: 60px;
    display: flex;
    align-items: center;
    z-index: 3;
    gap: 5px;
    justify-content: space-between;
    padding: 13px 16px;
    width: fit-content;
    height: 64px;
    border-radius: 5px;
    background: #fffbfb;
    animation: ${appear} 0.4s ease-in;
    -webkit-box-shadow: -2px 15px 37px 11px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: -2px 15px 37px 11px rgba(34, 60, 80, 0.2);
    box-shadow: -2px 15px 37px 11px rgba(34, 60, 80, 0.2);
`
