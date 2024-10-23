import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { ReportsComponent } from './reports/reports.component';
import { InsterviewComponent } from './insterview/insterview.component';
import { TalentPoolComponent } from './talent-pool/talent-pool.component';
import { AddCandidateManuallyComponent } from 'src/app/shared/components/add-candidate-manually/add-candidate-manually.component';
import { ImportResumeComponent } from 'src/app/shared/components/import-resume/import-resume.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersControllesComponent } from './users-controlles/users-controlles.component';
import { TalentPoolTableComponent } from 'src/app/shared/components/talent-pool-table/talent-pool-table.component';
import { MailsComponent } from './mails/mails.component';
import { SingleMailComponent } from 'src/app/shared/components/single-mail/single-mail.component';
import { MailListComponent } from 'src/app/shared/components/mail-list/mail-list.component';
import { InviteTeamComponent } from 'src/app/shared/components/settingsComponents/invite-team/invite-team.component';
import { ProfileInfoComponent } from 'src/app/shared/components/settingsComponents/profile-info/profile-info.component';
import { NotificationSettingsComponent } from 'src/app/shared/components/settingsComponents/notification-settings/notification-settings.component';
import { CompanySettingsComponent } from 'src/app/shared/components/settingsComponents/company-settings/company-settings.component';
import { TemplateSettingsComponent } from 'src/app/shared/components/settingsComponents/template-settings/template-settings.component';

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
        path: 'jobs/add-candidate',
        component: AddCandidateManuallyComponent,
      },
      {
        path: 'jobs/import-resume',
        component: ImportResumeComponent,
      },
      {
        path: 'mails-box',
        component: MailsComponent,
        children: [
          {
            path: '',
            component: MailListComponent,
          },
          {
            path: 'view-mail/:id',
            component: SingleMailComponent,
          },
        ],
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
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'talent-pool',
        component: TalentPoolComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: ProfileInfoComponent,
          },

          {
            path: 'notificatons',
            component: NotificationSettingsComponent,
          },
          {
            path: 'about_company',
            component: CompanySettingsComponent,
          },
          {
            path: 'invite_team',
            component: InviteTeamComponent,
          },
          {
            path: 'email_template',
            component: TemplateSettingsComponent,
          },
        ],
      },
      {
        path: 'users-controlles/:id',
        component: UsersControllesComponent,
      },
      {
        path: 'talent-pool/talent-folder',
        component: TalentPoolTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
