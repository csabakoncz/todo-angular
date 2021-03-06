import { AppState, VisibilityFilter } from '../model/index';
import { TodoImpl } from '../model/todo';
import { isNgTemplate } from '@angular/compiler';

export const INITIAL_STATE: AppState={
  title: 'AAA',
  todos: [
    new TodoImpl('first item'),
    new TodoImpl('second  (completed)  item', true),
    new TodoImpl('third item')
  ],
  visibilityFilter: VisibilityFilter.All
}
