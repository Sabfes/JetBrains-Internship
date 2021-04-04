import {AddTodoType, DeleteTodoType, TodoActionTypes, TodoCompletedToggleType} from "../types/todo";

export const todoCompleteToggle = (id: number): TodoCompletedToggleType => {
    return {
        type: TodoActionTypes.TODO_COMPLETED_TOGGLE,
        payload: id,
    }
}

export const deleteTodo = (id: number): DeleteTodoType => {
    return {
        type: TodoActionTypes.DELETE_TODO,
        payload: id,
    }
}

export const addTodo = (todoText: string): AddTodoType=> {
    return {
        type: TodoActionTypes.ADD_TODO,
        payload: todoText,
    }
}
