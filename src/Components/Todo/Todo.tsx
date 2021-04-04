import React from 'react'
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../Redux/actionCreators/todoActions";
import styled from "styled-components";

type PropsTypes = {
    day: string,
    text: string,
    isCompleted: boolean,
    desc: string | undefined,
    id: number,
    onClick: (todo: any) => void
}

const Todo: React.FC<PropsTypes> = ({id, day, text, isCompleted, desc, onClick}) => {
    const dispatch = useDispatch()

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <StyledTodo isCompleted={isCompleted}>
            <StyledCheckbox onClick={onClick}>
                {/*Показ галочки*/}
                {
                    isCompleted
                        ? <span className="material-icons">expand_more</span>
                        : null
                }
            </StyledCheckbox>


            <StyledTodoContent>
                <StyledTodoText isCompleted={isCompleted}>{text}</StyledTodoText>
                <StyledDayTitle isCompleted={isCompleted}>{day}</StyledDayTitle>
            </StyledTodoContent>

            <StyledCloseIcon isCompleted={isCompleted} onClick={deleteTodoHandler} className="material-icons">
                close
            </StyledCloseIcon>
        </StyledTodo>
    )
}
export default Todo

const StyledTodo = styled.div<{isCompleted: boolean}>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    opacity: 1;
    transition: 1s;
    padding: 18px;
    margin-top: 20px;
    width: 875px;
    height: 80px;
    border-radius: 25px;
    background-color: ${({isCompleted}) => isCompleted ? '#FFBCBC' : '#21212B'};
    
    &:first-of-type {
        margin-top: 0;
    }
`

const StyledTodoContent = styled.div`
    height: 40px;
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const StyledCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    color: #FF75A1;
    border: 3px solid #FF75A1;
    
    &:hover {
        cursor: pointer;
    }
`

const StyledTodoText = styled.p<{isCompleted: boolean}>`
    padding: 0;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${ ({isCompleted}) => isCompleted ? '#2F2C39' : 'darkgrey'}
`

const StyledCloseIcon = styled.span<{isCompleted: boolean}>`
    position: absolute;
    align-self: center;
    display: flex;
    right: 18px;
    cursor: pointer;
    color: ${ ({isCompleted}) => isCompleted ? 'black' : 'darkgrey'}
`

const StyledDayTitle = styled.span<{isCompleted: boolean}>`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${ ({isCompleted}) => isCompleted ? '#35220b' : '#329d5f'}
`
