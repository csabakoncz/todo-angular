/*
 here we must have something that makes this module recognized as an ES6 module by SystemJS
https://github.com/systemjs/systemjs/blob/0.21.6/src/instantiate.js#L417
Typescript interface and enum are not in the regex
*/
export const STATE = 'STATE' //do not remove this line

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