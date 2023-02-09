import React from 'react'
import styled, { keyframes } from 'styled-components'
import debounce from 'lodash.debounce'
import { selectItemProps } from '../../modules/cards-list/helpers/selectToDo'
import { COLORS } from '../../style/color'
import { appear, CloseButton, Cover, TextArea } from '../../ui'
import { ModalState } from './type'

export const Modal: React.FC<ModalState> = (props) => {
    const currentCard = selectItemProps(props.id)

    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const [value, setValue] = React.useState<string>('')
    const [active, setActive] = React.useState<boolean>(false)

    const saveTask: React.MouseEventHandler<HTMLButtonElement> = () => {
        props.onAddText(value)
        setActive(false)
    }

    React.useEffect(() => {
        !currentCard?.text && setActive(true)
    }, [currentCard])

    return (
        <ModalWrapper>
            <ModalDialog>
                <Cover color={props.color} height="70px" />
                <TopWrapper>
                    <Title>{currentCard?.title}</Title>
                    <CloseButton onClose={props.onClick} />
                </TopWrapper>
                <Wrapper>
                    {!active ? (
                        <Description>{currentCard?.text}</Description>
                    ) : (
                        <TextArea
                            rows={4}
                            ref={textAreaRef}
                            value={value}
                            getValue={setValue}
                        />
                    )}
                    <Icon>
                        <i
                            onClick={() => setActive(false)}
                            className="fa fa-times-circle-o"
                            aria-hidden="true"
                        />
                        <i
                            onClick={() => setActive(true)}
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                        />
                    </Icon>
                </Wrapper>
                <Wrapper>
                    <Button onClick={() => props.onDelete(props.id)}>
                        Удалить задачу
                    </Button>
                    <Button color="#54bb63" onClick={saveTask}>
                        Сохранить задачу
                    </Button>
                </Wrapper>
            </ModalDialog>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    animation-name: ${appear};
    animation-duration: 300ms;
`
const slide = keyframes`
    from {
    transform: translateY(-150px);
  }
    to {
    transform: translateY(0);
  }
`
const ModalDialog = styled.div`
    width: calc(100vw - 500px);
    background: white;
    position: relative;
    margin: 0 20px;
    height: 500px;
    text-align: left;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: ${slide};
    animation-duration: 0.5s;
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 50px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`
const TopWrapper = styled(Wrapper)`
    margin-top: 90px;
    margin-bottom: 40px;
`
const Title = styled.div`
    font-weight: 700;
    line-height: 36px;
    font-size: 28px;
`
const Icon = styled.div`
    font-size: 20px;
    cursor: pointer;
    font-weight: 400;
    height: 100%;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    i {
        &:first-child {
            color: #616971;
        }
        &:last-child {
            color: #ab9574;
        }
    }
`
const Description = styled.div`
    width: 100%;
    border: 1px solid var(${COLORS.grey.light});
    height: fit-content;
    padding: 20px;
`
const Button = styled.button<{ color?: string }>`
    border-radius: 5px;
    border: 1px solid;
    border-color: ${(props) => props.color ?? '#ce3e3e'};
    background-color: #fff;
    color: ${(props) => props.color ?? '#ce3e3e'};
    width: 150px;
    height: 42px;
    margin-top: 40px;
    transition: all 0.5s ease-out;
    &:hover {
        background-color: ${(props) => props.color ?? '#ce3e3e'};
        color: #fff;
    }
`
