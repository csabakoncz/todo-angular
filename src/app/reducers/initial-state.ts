import { AppState, VisibilityFilter } from '../model/index';

export const INITIAL_STATE: AppState={
  title: 'AAA',
  todos: [
    {
      text: 'first item',
      completed: false
    },
    {
      text: 'second  (completed)  item',
      completed: true
    },
    {
      text: 'third item',
      completed: false
    }
  ],
  visibilityFilter: VisibilityFilter.All
}
