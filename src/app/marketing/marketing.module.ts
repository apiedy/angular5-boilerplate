import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    MarketingRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class MarketingModule { }
