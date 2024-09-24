import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { JobsComponent } from './jobs/jobs.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ApplicationsComponent } from './applications/applications.component';
import { InsterviewComponent } from './insterview/insterview.component';
import { ReportsComponent } from './reports/reports.component';
import { TalentPoolComponent } from './talent-pool/talent-pool.component';
import { CoreModule } from 'src/app/core/core.module';
import { SearchPipe } from 'src/app/core/pipe/searchpipe/search.pipe';
import { ManageHiringTeamComponent } from './manage-hiring-team/manage-hiring-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersControllesComponent } from './users-controlles/users-controlles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    JobsComponent,
    ApplicationsComponent,
    InsterviewComponent,
    ReportsComponent,
    TalentPoolComponent,
    ManageHiringTeamComponent,
    RegistrationComponent,
    SettingsComponent,
    UsersControllesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
