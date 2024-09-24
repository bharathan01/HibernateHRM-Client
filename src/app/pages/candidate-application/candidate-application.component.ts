import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateApplicationService } from 'src/app/core/services/candidate-application/candidate-application.service';
import { ApplicationDetail, ScreeningDetails } from 'src/app/shared/intserfaces/users.intserfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleInterviewComponent } from 'src/app/shared/components/dialog-boxs/schedule-interview/schedule-interview.component';
import { FeedbackFormComponent } from 'src/app/shared/components/dialog-boxs/feedback-form/feedback-form.component';

@Component({
  selector: 'app-candidate-application',
  templateUrl: './candidate-application.component.html',
  styleUrls: ['./candidate-application.component.css'],
})
export class CandidateApplicationComponent implements OnInit {
  applicationDetails: ApplicationDetail = {} as ApplicationDetail;
  safeUrl: SafeResourceUrl = '';
  initialScreeningDetails:ScreeningDetails = {} as ScreeningDetails
  interviewDetails :any
  ratingStar:number[] = [1, 2, 3, 4, 5];;
  currentSelectedStar:number = 4

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private candidateApplicationService: CandidateApplicationService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id') || '';
        this.getApplicationDetails(id);
        this.filterInitalScreeningDetails()
        this.filterInterviewDetails()
      });
  }
  toggleMoreMenu: boolean = false;

  /* @@ subscribing the methode that fetch application details
     @@  
  */
  getApplicationDetails(id: string) {
    this.candidateApplicationService
      .fetchApplicationDetails(id)
      ?.subscribe((application) => {
        if (application) {
          console.log(application);
          this.applicationDetails = application;
          /* @@ bypass the resume  URL */
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `${this.applicationDetails.resumeURL}#toolbar=0&navpanes=0&scrollbar=0`
          );
        }
      });
  }
  /*@@ filter the inital screening details from the applicationDetails */
  filterInitalScreeningDetails(){
      this.applicationDetails?.screeningDetails?.length
        ? this.initialScreeningDetails = this.applicationDetails?.screeningDetails[0]
        : ""
  }
   /*@@ filter the interview details from the applicationDetails */
   filterInterviewDetails(){
    this.applicationDetails?.interviewDetails?.length
      ? this.interviewDetails = this.applicationDetails?.interviewDetails[0]
      : ""
}
  openPdfInNewTab() {
    window.open(this.applicationDetails.resumeURL , '_blank');
  }
  openScheduleInterview(){
    this.dialog
    .open(ScheduleInterviewComponent, {
      width: 'auto',
      height: 'auto',
    })
  }
  openFeedbackFrom(){
    this.dialog
    .open(FeedbackFormComponent, {
      data:this.interviewDetails,
      width: 'auto',
      height: 'auto',
    })
  }
  initalScreening(){
    this.router.navigateByUrl('dashboard/interview')
  }
  handleHire(){
    this.router.navigateByUrl('dashboard/interview')
  }
  handleReject(){
    this.router.navigateByUrl('dashboard/application')
  }
}
