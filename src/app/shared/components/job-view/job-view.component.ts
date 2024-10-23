import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Job } from '../../intserfaces/users.intserfaces';
import { MatDialog } from '@angular/material/dialog';
import { ShareJobDialogComponent } from '../dialog-boxs/share-job-dialog/share-job-dialog.component';
import { JobApplicationDialogBoxComponent } from '../job-application-dialog-box/job-application-dialog-box.component';
import { Router } from '@angular/router';
import { CreateHiringTeamComponent } from '../dialog-boxs/create-hiring-team/create-hiring-team.component';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css'],
})
export class JobViewComponent {
  @Input() job!: Job;
  isOpenMoreMenu: boolean = false;
  constructor(
    private dialog: MatDialog,
    private eRef: ElementRef,
    private router: Router
  ) {}

  /*@@ close the menu when clicks outside */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    this.isOpenMoreMenu = false;
  }
  /*@@ Inside the menu, stop the click event from bubbling up to the document click 
  listener, which would otherwise immediately close the menu when clicking on it. */
  onMenuClick(event: Event) {
    event.stopPropagation();
  }

  toggleJobApplicationView() {
    this.dialog.open(JobApplicationDialogBoxComponent, {
      data: this.job,
      width: 'auto',
      height: 'auto',
    });
  }
  toggleShareView() {
    this.dialog.open(ShareJobDialogComponent, {
      data: this.job['jobLink'],
      width: 'auto',
      height: 'auto',
    });
  }
  openApplicationView() {
    this.router.navigateByUrl(`/dashboard/application-stage/${this.job?.id}`);
  }
  addHiringTeam() {
    this.dialog.open(CreateHiringTeamComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
