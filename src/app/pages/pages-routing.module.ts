import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreateJrfComponent } from './createJRF/create-jrf/create-jrf.component';
import { ApplicationStagesComponent } from './application-stages/application-stages.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => DashboardModule),
  },
  {
    path: 'dashboard/creat-jrf',
    component: CreateJrfComponent,
  },
  {
    path: 'dashboard/application-stage/:id',
    component: ApplicationStagesComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
