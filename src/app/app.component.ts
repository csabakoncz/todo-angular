import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <AddTodo></AddTodo>
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-ride';
}
