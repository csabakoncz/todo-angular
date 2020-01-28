import { Todo } from '../model/index';
import { AddTodo } from './add-todo';
import { TitleClick } from './title-click';
import { ToggleTodo } from './toggle-todo';

export class Actions{
  static titleClick(){
      return TitleClick.INSTANCE;
  }

  static addTodo(text: string){
    return new AddTodo(text)
  }

  static toggleTodo(todo: Todo){
    return new ToggleTodo(todo)
  }
}
