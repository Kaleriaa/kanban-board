import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../style/color'
import { SearchState } from './type'

export const Search = React.forwardRef<HTMLInputElement, SearchState>(
    (props, ref) => {
        return (
            <Wrapper>
                <SearchIcon>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </SearchIcon>
                <SearchPanel
                    ref={ref}
                    value={props.value}
                    onChange={(e) => props.getValue(e.target.value)}
                />
            </Wrapper>
        )
    },
)

const SearchPanel = styled.input`
    width: 270px;
    height: 40px;
    padding: 10px 34px;
    font-size: 15px;
    background: var(${COLORS.grey.light});
    border-radius: 5px;
    border: none;
    transition: all 0.4s;
    &:focus {
        outline: none;
        width: 300px;
        background: #fff;
    }
`
const SearchIcon = styled.span`
    position: absolute;
    left: 10px;
    top: 9px;
    opacity: 0.2;
    font-size: 15px;
`
const Wrapper = styled.div`
    position: relative;
`
