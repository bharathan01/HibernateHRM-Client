import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateApplicationService } from 'src/app/core/services/candidate-application/candidate-application.service';
import { ApplicationDetail } from 'src/app/shared/intserfaces/users.intserfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-application',
  templateUrl: './candidate-application.component.html',
  styleUrls: ['./candidate-application.component.css'],
})
export class CandidateApplicationComponent implements OnInit {
  applicationDetails: ApplicationDetail = {} as ApplicationDetail;
  safeUrl: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private candidateApplicationService: CandidateApplicationService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this,
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id') || '';
        this.getApplicationDetails(id);
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
  openPdfInNewTab() {
    window.open(this.applicationDetails.resumeURL , '_blank');
  }
}
