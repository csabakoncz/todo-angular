import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ComponentsModule, AppComponent } from './components/index';
import {AppStoreService} from './services/index';

const routes: Routes=[
  {
    path: 'subfooter',
    loadChildren: () => import('./components/subfooter.module').then(m => m.SubfooterModule)
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      useHash: true
    }),
    ComponentsModule
  ],
  providers: [AppStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
