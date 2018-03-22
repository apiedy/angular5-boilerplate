import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { AddRequestComponent } from './add-request/add-request.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    HrRoutingModule
  ],
  declarations: [AddRequestComponent, ViewComponent]
})
export class HrModule { }
