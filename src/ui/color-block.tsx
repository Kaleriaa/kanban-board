import React from 'react'
import styled from 'styled-components'
import { ColorState } from './types'

export const Colors: React.FC<ColorState> = (props) => {
    return (
        <ColorBlock
            color={props.color}
            onClick={() => props.onChangeTheme(props.color)}
            className={props.currentColor === props.color ? 'active' : ''}
        />
    )
}

const ColorBlock = styled.div<Pick<ColorState, 'color'>>`
    cursor: pointer;
    width: 38px;
    height: 38px;
    background-color: ${(prop) => prop.color};
    &.active {
        border: 2px solid #000;
    }
`
