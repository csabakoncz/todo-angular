import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'Subfooter',
  template: `
    <h2>
      Subfooter works!
    </h2>
  `,
  styles: []
})
class SubfooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

const routes: Routes = [
  {
    path: '',
    component: SubfooterComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    SubfooterComponent,
  ]
})
export class SubfooterModule {
}
