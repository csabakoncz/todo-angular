import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    SubfooterComponent,
  ]
})
export class SubfooterModule {
}
