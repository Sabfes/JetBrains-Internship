import {TodoActions, TodoActionTypes, todoState} from "../types/todo";
import data from '../../data.json'
import {getDayOfWeek} from "../../utils/utils";

const {todos} = (localStorage["data"]) ? JSON.parse(localStorage["data"]) : data

const initialState: todoState = {
    todos: todos
}

export const todoReducer = (state = initialState, action: TodoActions): todoState => {

    switch (action.type) {
        case TodoActionTypes.TODO_COMPLETED_TOGGLE:
            const prevTodo = state.todos.map( el => {
                if (el.id === action.payload) {
                    el.completed = !el.completed;
                    el.dayOfCompleted = getDayOfWeek();
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
            const newTodo = {
                id: state.todos.length + 1,
                text: action.payload,
                dayOfCreating: getDayOfWeek(),
                dayOfCompleted: '',
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
