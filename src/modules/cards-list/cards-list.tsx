import React from 'react'
import styled from 'styled-components'
import { CardItem } from './components/card-item'
import { ToDoCard } from './components/todo-card'
import { cardLabels, coverColor } from './constant'
import { selectToDo } from './helpers/selectToDo'

export const CardsList = React.memo(() => {
    return (
        <Wrapper>
            {cardLabels.map(({ id, title }, i) => {
                const toDo = selectToDo(id)
                return (
                    <CardItem key={id} id={id} title={title}>
                        {toDo?.map((item) => (
                            <ToDoCard
                                color={coverColor[i % 6]}
                                key={item.item}
                                {...item}
                            />
                        ))}
                    </CardItem>
                )
            })}
        </Wrapper>
    )
})

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    padding: 40px;
    margin-top: 10px;
`
