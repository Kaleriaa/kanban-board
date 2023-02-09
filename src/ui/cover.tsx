import React from 'react'
import styled from 'styled-components'

type CoverType = {
    height: string
    color: string
}

export const Cover: React.FC<CoverType> = ({ height, color }) => {
    return <CoverBlock color={color} height={height} />
}
const CoverBlock = styled.div<CoverType>`
    position: absolute;
    width: 100%;
    height: ${(props) => props.height};
    background: ${(props) => props.color};
`
