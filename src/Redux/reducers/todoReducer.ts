import {TodoActions, TodoActionTypes, todoState} from "../types/todo";
import data from '../../data.json'

const {todos} = (localStorage["data"]) ? JSON.parse(localStorage["data"]) : data

const initialState: todoState = {
    todos: todos
}

export const todoReducer = (state = initialState, action: TodoActions): todoState => {
    switch (action.type) {
        case TodoActionTypes.TODO_COMPLETED_TOGGLE:
            const prevTodo = state.todos.map( el => {
                if (el.id === action.payload) {
                    el.completed = !el.completed
                }
                return el
            })
            return {
                ...state, todos: prevTodo
            }
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case TodoActionTypes.ADD_TODO:
            const day = new Date().getDay()
            const dayEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const newTodo = {
                id: state.todos.length + 1,
                text: action.payload,
                day: dayEnglish[day],
                completed: false
            }
            const todos = state.todos
            todos.push(newTodo)
            return {
                ...state, todos: todos
            }
        default:
            return state
    }
}
