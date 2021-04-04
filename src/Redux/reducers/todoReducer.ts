import {TodoActions, TodoActionTypes, todoState} from "../types/todo";
const data = require('../../data.json')

const initialState: todoState = {
    todo: data.todos || []
}

export const todoReducer = (state = initialState, action: TodoActions): todoState => {
    switch (action.type) {
        case TodoActionTypes.TODO_COMPLETED_TOGGLE:
            const prevTodo = state.todo.map( el => {
                if (el.id === action.payload) {
                    el.completed = !el.completed
                }
                return el
            })
            return {
                ...state, todo: prevTodo
            }
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state, todo: state.todo.filter(todo => todo.id !== action.payload)
            }
        case TodoActionTypes.ADD_TODO:
            const day = new Date().getDay()
            const dayEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const newTodo = {
                id: state.todo.length + 1,
                text: action.payload,
                day: dayEnglish[day],
                completed: false
            }
            const todos = state.todo
            todos.push(newTodo)
            return {
                ...state, todo: todos
            }
        default:
            return state
    }
}
