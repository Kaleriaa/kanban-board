import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Modal } from '../../../components'
import { Cover } from '../../../ui'
import { Card } from '../../../@types'
import { ColorToDo } from './type'
import { addText, deleteCard } from '../slice'

export const ToDoCard: React.FC<Card & ColorToDo> = (props) => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const dispatch = useDispatch()

    const onCloseModal = () => {
        setVisible(false)
    }
    const onDeleteCard = (id: string) => {
        dispatch(deleteCard(id))
    }
    const onAddText = (value: string) => {
        dispatch(addText({ item: props.item, text: value }))
    }

    return (
        <CardBlock>
            <Cover color={props.color} height="32px" />
            <Title onClick={() => setVisible(true)}>{props.title}</Title>
            {visible ? (
                <Modal
                    id={props.item}
                    color={props.color}
                    onClick={onCloseModal}
                    onDelete={onDeleteCard}
                    onAddText={onAddText}
                />
            ) : null}
        </CardBlock>
    )
}

const CardBlock = styled.div`
    position: relative;
    min-height: 106px;
    background: #fff;
    margin-bottom: 12px;
    word-wrap: break-word;
`
const Title = styled.span`
    position: absolute;
    cursor: pointer;
    top: 45px;
    left: 15px;
    font-size: 16px;
    color: #000;
    font-weight: 500;
`
