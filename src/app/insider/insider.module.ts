import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsiderRoutingModule } from './insider-routing.module';
import { InsiderComponent } from './insider.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeesModule } from '../employees/employees.module';

@NgModule({
  imports: [
    CommonModule,
    InsiderRoutingModule,
    EmployeesModule
  ],
  declarations: [InsiderComponent, HeaderComponent, SidebarComponent]
})
export class InsiderModule { }
