import React from 'react'
import styled from "styled-components";

type PropsType = {
    active: boolean,
    setActive: (bol: boolean) => void,
}

const Modal: React.FC<PropsType> = ({active, setActive, children}) => {
    return (
        // Модальное окно
        <StyledModal
            active={active}
            onClick={() => setActive(false)}
        >
            <StyledModalContent active={active} onClick={e => e.stopPropagation()}>
                {children}
            </StyledModalContent>
        </StyledModal>
    )
}
export default Modal

const StyledModal = styled.div<{active: boolean}>`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({active}) => active ? 1 : 0};
    pointer-events: ${({active}) => active ? 'all' : 'none'};
    z-index: ${({active}) => active ? 100 : 0};
    transition: 0.3s;
`

const StyledModalContent = styled.div<{active: boolean}>`
    padding: 40px;
    border-radius: 25px;
    background-color: rgb(33, 33, 43);
    transform: ${({active}) => active ? 'scale(1)' : 'scale(0.5)'};
    transition: 0.4s all;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
`
