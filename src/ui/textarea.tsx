import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../style/color'
import { appear } from './appear-animate'

//TODO: fix type
// !
type FormType = {
    getValue?: (value: string) => void
    rows: number
    value?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, FormType>(
    (props, ref) => {
        return (
            <AddForm
                placeholder="Введите название задачи"
                name="textarea"
                rows={props.rows}
                ref={ref}
                value={props.value}
                onChange={(e) =>
                    props.getValue && props.getValue(e.target.value)
                }
            />
        )
    },
)

const AddForm = styled.textarea`
    resize: none;
    width: 100%;
    border: 1px solid var(${COLORS.grey.light});
    padding: 16px 12px;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    animation: ${appear} 0.4s ease-in;
    &:focus-visible {
        outline: none;
    }
`
