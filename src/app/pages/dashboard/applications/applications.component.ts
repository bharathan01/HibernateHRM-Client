import { Component, OnInit } from '@angular/core';
import { CandidateApplicationService } from 'src/app/core/services/candidate-application/candidate-application.service';
import { ApplicationDetail } from 'src/app/shared/intserfaces/users.intserfaces';
import { jobApplicants } from 'src/app/utils/demoData';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent {  }
