import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsiderComponent } from './insider.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: InsiderComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'employees',
        loadChildren: 'app/employees/employees.module#EmployeesModule'
      },
      {
        path: 'hrrequests',
        loadChildren: 'app/hr/hr.module#HrModule'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'employees'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsiderRoutingModule { }
