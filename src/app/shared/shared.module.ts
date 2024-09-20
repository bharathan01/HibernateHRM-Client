import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavBarComponent } from './components/aside-nav-bar/aside-nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { AsideNavBtnComponent } from './components/aside-nav-btn/aside-nav-btn.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

import { SingleNotificationComponent } from './components/single-notification/single-notification.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { CandidatesChatComponent } from './components/candidates-chat/candidates-chat.component';
import { UpcomingInterviewsTableComponent } from './components/upcoming-interviews-table/upcoming-interviews-table.component';
import { JobViewComponent } from './components/job-view/job-view.component';

import { CoreModule } from '../core/core.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { JobApplicationDialogBoxComponent } from './components/job-application-dialog-box/job-application-dialog-box.component';
import { ShareJobDialogComponent } from './components/dialog-boxs/share-job-dialog/share-job-dialog.component';
import { NotificationDialogComponent } from './components/dialog-boxs/notification-dialog/notification-dialog.component';
import { CreateJrfHeaderComponent } from './components/create-jrf-header/create-jrf-header.component';
import { JrfPreviewComponent } from './components/jrf-preview/jrf-preview.component';
import { PublishJrfComponent } from './components/publish-jrf/publish-jrf.component';
import { MultipleJobBoardsComponent } from './components/dialog-boxs/multiple-job-boards/multiple-job-boards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCandidateManuallyComponent } from './components/add-candidate-manually/add-candidate-manually.component';
import { DragAndDropDirective } from '../core/directive/dragNDrop/drag-and-drop.directive';
import { ImportResumeComponent } from './components/import-resume/import-resume.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ApplicationTableComponent } from './components/application-table/application-table.component';


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
  ApplicationTableComponent
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
    CreateJrfHeaderComponent,
    JrfPreviewComponent,
    PublishJrfComponent,
    MultipleJobBoardsComponent,
    AddCandidateManuallyComponent,
    ImportResumeComponent,
    FileUploaderComponent,
    ApplicationTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    CoreModule,
    ClipboardModule,
    ReactiveFormsModule,
  ],
  exports: [components, ],
})
export class SharedModule {}
