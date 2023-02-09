import React from 'react'
import styled from 'styled-components'

type CloseType = {
    onClose: () => void
}

export const CloseButton = ({ onClose }: CloseType) => {
    return <Close onClick={onClose}>&#10005;</Close>
}

const Close = styled.span`
    cursor: pointer;
    font-size: 20px;
`
