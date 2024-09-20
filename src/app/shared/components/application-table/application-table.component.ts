import { Component } from '@angular/core';
import { ApplicationDetail } from '../../intserfaces/users.intserfaces';
import { jobApplicants } from 'src/app/utils/demoData';
import { CandidateApplicationService } from 'src/app/core/services/candidate-application/candidate-application.service';

@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.css'],
})
export class ApplicationTableComponent {
  applicationDetails: ApplicationDetail[] = [];
  applicationTableHeader: (keyof ApplicationDetail)[] = [];
  constructor(
    private candidateApplicationService: CandidateApplicationService
  ) {}

  ngOnInit(): void {
    this.getTheFillteredApplicationData();
  } /*@@ function for filter the application array(temporary) */
  getTheFillteredApplicationData() {
    const newApplications = jobApplicants.filter(
      (applicaton) => applicaton.status == 'new'
    );
    this.applicationDetails = newApplications.reduce((acc: any, item: any) => {
      acc.push({
        id: item.id,
        candidate: item.candidate,
        experience: item.experience,
        noticePeriod: item.noticePeriod,
        currentCTC: item.currentCTC,
        source: item.source,
        phone: item.phone,
        email: item.email,
        status: item.status,
      });
      return acc;
    }, []);

    /*@@get the key from the data for application table header.
     @@  filterd out the id from the header */
    this.applicationTableHeader = Object.keys(
      this.applicationDetails[0]
    ).filter((key) => key !== 'id') as (keyof ApplicationDetail)[];
  }
}
