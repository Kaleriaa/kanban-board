import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CardItem } from './components/card-item'
import { ToDoCard } from './components/todo-card'
import { cardLabels, coverColor } from './constant'
import { selectSearch, selectToDo } from './helpers/selectors'

export const CardsList = React.memo(() => {
    const resultTasks = useSelector(selectSearch)
    return (
        <Wrapper>
            {cardLabels.map(({ id, title }, i) => {
                const toDo = selectToDo(id, resultTasks)
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
