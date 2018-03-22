import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'marketing',
    loadChildren: 'app/marketing/marketing.module#MarketingModule'
  },
  {
    path: 'insider',
    loadChildren: 'app/insider/insider.module#InsiderModule'
  },
  {
    path: '**',
    redirectTo: 'marketing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
