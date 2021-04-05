export type TodoType = {
    id: number,
    text: string,
    dayOfCreating: string,
    dayOfCompleted: string,
    completed: boolean,
    desc?: string | undefined,
}

export enum TodoActionTypes {
    TODO_COMPLETED_TOGGLE = 'TODO_COMPLETED_TOGGLE',
    DELETE_TODO = 'DELETE_TODO',
    ADD_TODO = 'ADD_TODO',
}

export interface TodoCompletedToggleType {
    type: TodoActionTypes.TODO_COMPLETED_TOGGLE,
    payload: number
}

export interface AddTodoType {
    type: TodoActionTypes.ADD_TODO,
    payload: string,
}

export interface DeleteTodoType {
    type: TodoActionTypes.DELETE_TODO,
    payload: number,
}

export interface todoState {
    todos: Array<TodoType>
}

export type TodoActions = TodoCompletedToggleType | DeleteTodoType | AddTodoType
