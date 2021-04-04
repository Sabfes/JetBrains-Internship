import React, {useRef, useState} from 'react'
import classes from './AllTodos.module.css'
import Todo from "../../Components/Todo/Todo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addTodo, todoCompleteToggle} from "../../Redux/actionCreators/todoActions";
import Modal from "../../Components/Modal/Modal";
import {useInput} from "../../hooks/useInput";

const AllTodos: React.FC = () => {
    const todoAnchorRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(false)
    const todos = useTypedSelector( state => state.todo.todo)
    const dispatch = useDispatch()
    const todoText = useInput('', {isEmpty: true, minLength: 5})

    const makeTodoCompleted = (todo: any) => {
        dispatch(todoCompleteToggle(todo.id))
    }

    const addTodoHandler = () => {
        dispatch(addTodo(todoText.value))
        setActive(false)
        todoText.clearValue()
        setTimeout(()=> {
            todoAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }, 200)
    }
    return (
        <div className={classes.AllTodos}>
            <Modal active={active} setActive={setActive}>
                <label className={classes.AllTodos__inputLabel} htmlFor="todotext">Todo text</label>
                {(todoText.isDirty && todoText.isEmpty) && <div style={{color: 'red'}}>Напишите что-нибудь</div>}
                {(todoText.isDirty && todoText.minLengthError) && <div style={{color: 'red'}}>Минимальная длина - 5</div>}
                <input
                    id="todotext"
                    type="text"
                    value={todoText.value}
                    onChange={e => todoText.onChange(e)}
                    onBlur={e => todoText.onBlur(e)}
                    className={classes.AllTodos__textInput}
                />
                <button
                    className={classes.AllTodos__addTodoBtn}
                    disabled={!todoText.isInputValid}
                    onClick={addTodoHandler}
                >
                    add
                </button>
            </Modal>

            {
                todos.map((todo) => {
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
            <div ref={todoAnchorRef}></div>
            <button className={classes.AllTodos__modalBtn} onClick={()=> setActive(true)}>
                <span className="material-icons">
                    add_circle_outline
                </span>
            </button>
        </div>
    )
}

export default AllTodos
