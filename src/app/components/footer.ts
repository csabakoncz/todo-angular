import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Footer',
  template: `
    <p>
      footer works!
      <a routerLink="/subfooter" routerLinkActive="active">Subfooter to test lazy loading</a>
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
