import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>App title: {{title}}</h1>
    <AddTodo></AddTodo>
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
  `,
  styles: []
})
export class AppComponent {
  _title = 'angular-ride';

  get title(){
    return this._title
  }
}
