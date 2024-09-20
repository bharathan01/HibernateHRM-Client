import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CreateJrfComponent } from './createJRF/create-jrf/create-jrf.component';
import { CandidateApplicationComponent } from './candidate-application/candidate-application.component';

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
    path: 'dashboard/candidate-application/:id',
    component: CandidateApplicationComponent,
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
