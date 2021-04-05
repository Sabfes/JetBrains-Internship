import React, {useRef, useState} from 'react'
import Todo from "../../Components/Todo/Todo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addTodo, todoCompleteToggle} from "../../Redux/actionCreators/todoActions";
import Modal from "../../Components/Modal/Modal";
import {useInput} from "../../hooks/useInput";
import styled from "styled-components";

const AllTodos: React.FC = () => {
    const todoAnchorRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(false)
    const todos = useTypedSelector( state => state.todos.todos)
    const dispatch = useDispatch()
    const todoText = useInput('', {isEmpty: true, minLength: 5})

    const makeTodoCompleted = (todo: any) => {
        dispatch(todoCompleteToggle(todo.id))
    }

    const addTodoHandler = () => {
        dispatch(addTodo(todoText.value))
        // Закрытие модалки и очистка инпутов
        setActive(false)
        todoText.clearValue()
        // Скроллинг к добавленной задаче
        setTimeout(()=> {
            todoAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }, 200)
    }

    return (
        <StyledAllTodos>
            <Modal active={active} setActive={setActive}>
                <StyledInputLabel htmlFor="todotext">Todo text</StyledInputLabel>

                {/*Текст об ошибке - путое значение*/}
                {(todoText.isDirty && todoText.isEmpty) && <div style={{color: 'red'}}>Напишите что-нибудь</div>}
                {/*Текст об ошибке - минимальная длина */}
                {(todoText.isDirty && todoText.minLengthError) && <div style={{color: 'red'}}>Минимальная длина - 5</div>}

                {/*input*/}
                <StyledTextInput
                    id="todotext"
                    type="text"
                    value={todoText.value}
                    onChange={e => todoText.onChange(e)}
                    onBlur={e => todoText.onBlur(e)}
                />

                {/*Кнопка добавления задачи*/}
                <StyledAddTodoBtn
                    disabled={!todoText.isInputValid}
                    onClick={addTodoHandler}
                >
                    add
                </StyledAddTodoBtn>
            </Modal>

            {/*Вывод всех задач*/}
            {
                todos.map((todo) => {
                    return <Todo
                                onClick={() => makeTodoCompleted(todo)}
                                text={todo.text}
                                dayOfCreating={todo.dayOfCreating}
                                dayOfCompleted={todo.dayOfCompleted}
                                key={todo.id}
                                desc={todo.desc}
                                id={todo.id}
                                isCompleted={todo.completed}
                            />
                })
            }
            {/*Якорь для скролинга к выполненной задачи*/}
            <div ref={todoAnchorRef}></div>

            {/*Кнопка открытия модального окна для добавления новой задачи*/}
            <StyledModalBtn onClick={()=> setActive(true)}>
                <span style={{fontSize: '40px'}} className="material-icons">add_circle_outline</span>
            </StyledModalBtn>
        </StyledAllTodos>
    )
}
export default AllTodos

const StyledAllTodos = styled.div`
    padding-top: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-bottom: 60px;
`

const StyledModalBtn = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    right: 40px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    color: #329D5F;
    cursor: pointer;
    background-color: #21212B;
    outline: none;
    transition: .4s;

    &:hover {
        transform: scale(1.1);
    }
`

const StyledTextInput = styled.input`
    height: 40px;
    outline: none;
    padding: 5px;
    color: rgb(33, 33, 43);
    font-size: 20px;
    margin: 10px 0;
`

const StyledInputLabel = styled.label`
    font-size: 30px;
    margin-bottom: 20px;
    cursor: pointer;
`

const StyledAddTodoBtn = styled.button`
    height: 40px;
    background: #B7B6BB;
    color: black;
    font-size: 20px;
    cursor: pointer;
    transition: .6s;

    &::disabled {
    background-color: #181820;
    color: #434343;
}
`
