import React from 'react'
import classes from './Todo.module.css'
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../Redux/actionCreators/todoActions";

type PropsTypes = {
    day: string,
    text: string,
    isCompleted: boolean,
    desc: string | undefined,
    id: number,
    onClick: (todo: any) => void
}

const Todo: React.FC<PropsTypes> = ({id,onClick,day, text,isCompleted,desc}) => {
    const dispatch = useDispatch()

    let todoStyles = {
        backgroundColor: '',
        color: '',
    }
    if (isCompleted) {
        todoStyles.backgroundColor = '#FFBCBC'
        todoStyles.color = '#2F2C39'
    } else {
        todoStyles.backgroundColor = '#21212B'
    }

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(id))
    }

    return (
        <div style={todoStyles} className={classes.Todo}>
            <div className={classes.Todo__checkbox} onClick={onClick}>
                {
                    isCompleted
                        ? <span className="material-icons">
                            expand_more
                        </span>
                        : null
                }
            </div>
            <div className={classes.Todo__content}>
                <p className={classes.Todo__text}>{text}</p>
                <span className={classes.Todo__day}>{day}</span>
            </div>
            <span onClick={deleteTodoHandler} className={classes.Todo__closeBtn + " material-icons"}>
                close
            </span>
        </div>
    )
}

export default Todo
