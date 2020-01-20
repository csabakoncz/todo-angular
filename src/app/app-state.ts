export interface Todo{
    text: string
    completed: boolean
}
export interface AppState {
    title: string,
    todos: Todo[],
    visibilityFilter:  VisibilityFilter
}

export enum VisibilityFilter{
    All, Active, Completed
}