import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { AddRequestComponent } from './add-request/add-request.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'create',
    component: AddRequestComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'view'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
