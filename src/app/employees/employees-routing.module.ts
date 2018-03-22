import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewEmployeesComponent
  },
  {
    path: 'add',
    component: AddEmployeeComponent
  },
  {
    path: '**',
    redirectTo: 'view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
