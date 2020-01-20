import { Injectable } from '@angular/core';
import {Store, createStore, Action} from 'redux'
import { AppState, VisibilityFilter , Todo} from './app-state';

export enum AppAction {
  TITLE_CLICK,
  ADD_TODO,
  TODO_TOGGLE
}

interface HasTitle{
  title: string
}
const state0: AppState={
  title: 'AAA',
  todos: [],
  visibilityFilter: VisibilityFilter.All
}

const reducer = function(state: AppState=state0, action: Action){
  if(action.type==AppAction.TITLE_CLICK){
    return {
      ...state,
      title: state.title + 'K'
    }
  }
  else if (action.type==AppAction.ADD_TODO){
    return {
      ...state,
      todos:[{
        text: action['text'],
        completed: false
      }].concat(state.todos)
    }
  }
  else{
    return {
      ...state,
      todos: state.todos.map(todo=>todoReducer(todo, action))
    }
  }
  return state
}

const todoReducer = function(todo: Todo, action: Action){
    if(action.type == AppAction.TODO_TOGGLE && todo == action['todo']){
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo
}

@Injectable()
export class AppStoreService {
  store: Store<AppState>
  reducer = reducer
  constructor() {
    this.store = createStore(reducer)
  }
}
