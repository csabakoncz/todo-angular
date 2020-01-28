import { AppState } from '../model/index';
import { IAction } from './iaction';
import { ActionTarget } from './action-target';

export class AddTodo implements IAction<AppState>{
  target = ActionTarget.AppState

  constructor(private text: string){
  }

  transform(state: AppState): AppState {
    return {
      ...state,
      todos:[{
        text: this.text,
        completed: false
      }].concat(state.todos)
    }
  }
}
