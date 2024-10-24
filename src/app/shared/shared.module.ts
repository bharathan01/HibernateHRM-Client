import { Component, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AsideNavBarComponent } from './components/aside-nav-bar/aside-nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { AsideNavBtnComponent } from './components/aside-nav-btn/aside-nav-btn.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

import { SingleNotificationComponent } from './components/single-notification/single-notification.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { UpcomingInterviewsTableComponent } from './components/upcoming-interviews-table/upcoming-interviews-table.component';
import { JobViewComponent } from './components/job-view/job-view.component';

import { CoreModule } from '../core/core.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { JobApplicationDialogBoxComponent } from './components/job-application-dialog-box/job-application-dialog-box.component';
import { ShareJobDialogComponent } from './components/dialog-boxs/share-job-dialog/share-job-dialog.component';
import { NotificationDialogComponent } from './components/dialog-boxs/notification-dialog/notification-dialog.component';
import { CreateJrfHeaderComponent } from './components/create-jrf-header/create-jrf-header.component';
import { JrfPreviewComponent } from './components/dialog-boxs/jrf-preview/jrf-preview.component';
import { PublishJrfComponent } from './components/publish-jrf/publish-jrf.component';
import { MultipleJobBoardsComponent } from './components/dialog-boxs/multiple-job-boards/multiple-job-boards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCandidateManuallyComponent } from './components/add-candidate-manually/add-candidate-manually.component';
import { DragAndDropDirective } from '../core/directive/dragNDrop/drag-and-drop.directive';
import { ImportResumeComponent } from './components/import-resume/import-resume.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { InviteMembersComponent } from './components/dialog-boxs/invite-members/invite-members.component';
import { TalentPoolTableComponent } from './components/talent-pool-table/talent-pool-table.component';
import { ScheduleInterviewComponent } from './components/dialog-boxs/schedule-interview/schedule-interview.component';
import { FeedbackFormComponent } from './components/dialog-boxs/feedback-form/feedback-form.component';
import { SelectJobTalentpoolComponent } from './components/dialog-boxs/select-job-talentpool/select-job-talentpool.component';
import { LogoutComponent } from './components/dialog-boxs/logout/logout.component';
import { CandidateProfileComponent } from './components/dialog-boxs/candidate-profile/candidate-profile.component';
import { SendMailComponent } from './components/dialog-boxs/send-mail/send-mail.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MailHistoryViewComponent } from './components/mail-history-view/mail-history-view.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { InterviewHistoryComponent } from './components/interview-history/interview-history.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { SingleMailComponent } from './components/single-mail/single-mail.component';
import { AppliationFormComponent } from './components/appliation-form/appliation-form.component';
import { JdTemplateComponent } from './components/dialog-boxs/jd-template/jd-template.component';
import { CreateAppliationFormComponent } from './components/create-appliation-form/create-appliation-form.component';
import { CreateQuestionComponent } from './components/dialog-boxs/create-question/create-question.component';
import { HiringFlowComponent } from './components/hiring-flow/hiring-flow.component';
import { ProfileInfoComponent } from './components/settingsComponents/profile-info/profile-info.component';
import { InviteTeamComponent } from './components/settingsComponents/invite-team/invite-team.component';
import { NotificationSettingsComponent } from './components/settingsComponents/notification-settings/notification-settings.component';
import { TemplateSettingsComponent } from './components/settingsComponents/template-settings/template-settings.component';
import { CompanySettingsComponent } from './components/settingsComponents/company-settings/company-settings.component';
import { ManageEmailTemplateComponent } from './components/dialog-boxs/manage-email-template/manage-email-template.component';
import { CreateHiringTeamComponent } from './components/dialog-boxs/create-hiring-team/create-hiring-team.component';
import { CandidatesChatComponent } from './components/candidates-chat/candidates-chat.component';
import { HeaderNavBarComponent } from './components/header-nav-bar/header-nav-bar.component';

const components = [
  AsideNavBarComponent,
  HeaderComponent,
  StatusBarComponent,
  CandidatesChatComponent,
  UpcomingInterviewsTableComponent,
  JobViewComponent,
  CreateJrfHeaderComponent,
  JrfPreviewComponent,
  PublishJrfComponent,
  MultipleJobBoardsComponent,
  AddCandidateManuallyComponent,
  ImportResumeComponent,
  FileUploaderComponent,
  TalentPoolTableComponent,
  ScheduleInterviewComponent,
  FeedbackFormComponent,
  SelectJobTalentpoolComponent,
  CandidateProfileComponent,
  MailHistoryViewComponent,
  TimeLineComponent,
  FeedbackComponent,
  InterviewHistoryComponent,
  SingleMailComponent,
  AppliationFormComponent,
  JdTemplateComponent,
  CreateAppliationFormComponent,
  CreateQuestionComponent,
  HiringFlowComponent,
  ProfileInfoComponent,
  InviteTeamComponent,
  NotificationSettingsComponent,
  TemplateSettingsComponent,
  CompanySettingsComponent,
  ManageEmailTemplateComponent,
  CreateHiringTeamComponent,
  HeaderNavBarComponent,
];

@NgModule({
  declarations: [
    [components],
    AsideNavBtnComponent,
    NotificationDialogComponent,
    SingleNotificationComponent,
    StatusBarComponent,
    JobApplicationDialogBoxComponent,
    ShareJobDialogComponent,
    InviteMembersComponent,
    LogoutComponent,
    SendMailComponent,
    MailListComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    CoreModule,
    ClipboardModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  exports: [components],
})
export class SharedModule {}
