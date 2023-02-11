import React from 'react'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AddButton } from '../../../components/card-button'
import { TextArea } from '../../../ui'
import { addCard } from '../slice'
import { CardState } from './type'
import { useDrop } from 'react-dnd/dist/hooks'
import { DropTargetMonitor } from 'react-dnd/dist/types'

export const CardItem: React.FC<CardState> = (props) => {
    const [active, setActive] = React.useState<boolean>(false)
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)

    const [_, drop] = useDrop({
        accept: 'Task',
        drop: () => ({ name: props.id }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const dispatch = useDispatch()

    const onClose = () => {
        setActive(false)
    }
    const onAddCard = () => {
        setActive(true)
        if (textAreaRef.current) {
            dispatch(
                addCard({
                    id: props.id,
                    title: textAreaRef.current?.value,
                    item: nanoid(),
                }),
            )
            setActive(false)
        }
    }

    return (
        <CardBlock ref={drop}>
            <Title>{props.title}</Title>
            {props.children}
            {active && (
                <TextArea
                    value={textAreaRef.current?.value}
                    rows={2}
                    ref={textAreaRef}
                />
            )}
            <AddButton
                active={active}
                onAddButton={onAddCard}
                onClose={onClose}
            />
        </CardBlock>
    )
}
const CardBlock = styled.div`
    height: fit-content;
    padding: 16px 12px;
    width: 300px;
    border-radius: 5px;
    background: #d9d9d9;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.15);
`
const Title = styled.div`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
`
