import React from 'react'
import classes from './NotCompletedTodos.module.css'
import Todo from "../../Components/Todo/Todo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {todoCompleteToggle} from "../../Redux/actionCreators/todoActions";
import {useDispatch} from "react-redux";

const NotCompletedTodos = () => {
    const todos = useTypedSelector(state=> state.todo.todo)
    const dispatch = useDispatch()

    const makeTodoCompleted = (todo: any) => {
        dispatch(todoCompleteToggle(todo.id))
    }

    return (
        <div className={classes.NotCompletedTodos}>

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
        </div>
    )
}

export default NotCompletedTodos
