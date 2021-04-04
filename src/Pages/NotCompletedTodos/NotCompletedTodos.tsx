import React from 'react'
import Todo from "../../Components/Todo/Todo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {todoCompleteToggle} from "../../Redux/actionCreators/todoActions";
import {useDispatch} from "react-redux";
import styled from "styled-components";

const NotCompletedTodos = () => {
    const todos = useTypedSelector(state=> state.todo.todo)
    const dispatch = useDispatch()

    const makeTodoCompleted = (todo: any) => {
        dispatch(todoCompleteToggle(todo.id))
    }

    return (
        <StyledNotCompletedPage>

            {
                todos.filter(el=> el.completed !== true).map((todo) => {
                    return <Todo
                        onClick={() => makeTodoCompleted(todo)}
                        text={todo.text}
                        day={todo.day}
                        key={todo.id}
                        desc={todo.desc}
                        id={todo.id}
                        isCompleted={todo.completed}
                    />
                })
            }
        </StyledNotCompletedPage>
    )
}
export default NotCompletedTodos

const StyledNotCompletedPage = styled.div`
    padding-top: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;   
`
