import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ResignationComponent } from './resignation/resignation.component';
import { ReportsComponent } from './reports/reports.component';
import { InsterviewComponent } from './insterview/insterview.component';
import { TalentPoolComponent } from './talent-pool/talent-pool.component';
import { ManageHiringTeamComponent } from './manage-hiring-team/manage-hiring-team.component';
import { AddCandidateManuallyComponent } from 'src/app/shared/components/add-candidate-manually/add-candidate-manually.component';
import { ImportResumeComponent } from 'src/app/shared/components/import-resume/import-resume.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'jobs/hiringteam',
        component: ManageHiringTeamComponent,
      },
      {
        path: 'jobs/add-candidate',
        component: AddCandidateManuallyComponent,
      },
      {
        path: 'jobs/import-resume',
        component:ImportResumeComponent ,
      },
      {
        path: 'application',
        component: ApplicationsComponent,
      },
      {
        path: 'interview',
        component: InsterviewComponent,
      },
      {
        path: 'report',
        component: ReportsComponent,
      },
      {
        path: 'resignation',
        component: ResignationComponent,
      },
      {
        path: 'talent-pool',
        component: TalentPoolComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
