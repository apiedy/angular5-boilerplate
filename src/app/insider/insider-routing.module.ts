import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsiderComponent } from './insider.component';

const routes: Routes = [
  {
    path: '',
    component: InsiderComponent,
    children: [
      {
        path: 'employees',
        loadChildren: 'app/employees/employees.module#EmployeesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsiderRoutingModule { }
