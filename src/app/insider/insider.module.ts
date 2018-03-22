import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsiderRoutingModule } from './insider-routing.module';
import { InsiderComponent } from './insider.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    InsiderRoutingModule
  ],
  declarations: [
    InsiderComponent,
    HeaderComponent, 
    SidebarComponent,
    DashboardComponent
  ]
})
export class InsiderModule { }
