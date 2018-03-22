import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [ViewEmployeesComponent, AddEmployeeComponent]
})
export class EmployeesModule { }
