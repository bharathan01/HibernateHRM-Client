import { Component, Input } from '@angular/core';
import { Job } from '../../intserfaces/users.intserfaces';
import { MatDialog } from '@angular/material/dialog';
import { ShareJobDialogComponent } from '../dialog-boxs/share-job-dialog/share-job-dialog.component';
import { JobApplicationDialogBoxComponent } from '../job-application-dialog-box/job-application-dialog-box.component';


@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css'],
})
export class JobViewComponent {
  @Input() job!: Job;
  isOpenMoreMenu:boolean = false
  isOpenAddCandidate:boolean = false
  constructor(private dialog: MatDialog) {}

  toggleJobApplicationView() {
    this.dialog.open(JobApplicationDialogBoxComponent, {
      data:this.job,
      width: 'auto',
      height: 'auto',
    });
  }
  toggleShareView(){
    this.dialog.open(ShareJobDialogComponent, {
      data:this.job['jobLink'],
      width: 'auto',
      height: 'auto',
    });
  }
}
