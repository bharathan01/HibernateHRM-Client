import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { applicationMenu } from 'src/app/shared/intserfaces/layout.interfaces';
import { applicationFormDetails } from 'src/app/utils/demoData';
import { ScheduleInterviewComponent } from '../schedule-interview/schedule-interview.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css'],
})
export class CandidateProfileComponent implements OnInit {
  candidateAppliationfrom: any;
  isOpenMoveCandidateMenu: boolean = false;
  selectedTab: string = 'Application Form';
  applicationFromMenu: applicationMenu[] = [
    { name: 'Application Form' },
    { name: 'Resume' },
    { name: 'Inital Screening' },
    { name: 'Interviews' },
    { name: 'Feedback' },
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public applicationId: number, private dialog:MatDialog) {}

  /*@@ Interview 
       Open n  close functionality of accordian */
  readonly panelOpenState = signal(false);

  ngOnInit(): void {
    console.log(this.applicationId);
    this.getAppliationDetails(this.applicationId);
  }

  /*@@c get demo profile data */
  getAppliationDetails(applicationId: number) {
    this.candidateAppliationfrom = applicationFormDetails.filter(
      (application) => applicationId == application.applicationId
    );
    console.log(this.candidateAppliationfrom);
  }

  onSelectMenu(menu: string) {
    this.selectedTab = menu;
  }

/*@Schedule interview dialog box */
 
scheduleInterview(){
    this.dialog
    .open(ScheduleInterviewComponent, {
      width: 'auto',
      height: 'auto',
    })
}
/*@Schedule interview dialog box */
 
addFeedback(){
  this.dialog
  .open(FeedbackFormComponent, {
    width: 'auto',
    height: 'auto',
  })
}

}
