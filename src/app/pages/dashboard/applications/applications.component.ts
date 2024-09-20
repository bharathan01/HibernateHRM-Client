import { Component, OnInit } from '@angular/core';
import { CandidateApplicationService } from 'src/app/core/services/candidate-application/candidate-application.service';
import { ApplicationDetail } from 'src/app/shared/intserfaces/users.intserfaces';
import { jobApplicants } from 'src/app/utils/demoData';

interface FilterOptions {
  jobRole: { role: string }[];
  experience: { level: string }[];
  skills: { skill: string }[];
  noticePeriod: { period: string }[];
}
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit {
  openFilterTab: boolean = false;
  applicationDetails: ApplicationDetail[] = [];
  applicationTableHeader: (keyof ApplicationDetail)[] = [];
  constructor(
    private candidateApplicationService: CandidateApplicationService
  ) {}

  ngOnInit(): void {
    this.getTheFillteredApplicationData();
  }

  toggleFilterMenu(selection: string) {}
  filterMenu: FilterOptions = {
    jobRole: [
      { role: 'Software Engineer' },
      { role: 'Robotic Engineer' },
      { role: 'Linux Kernel Engineer' },
      { role: 'Marketing' },
    ],
    experience: [
      { level: '0-1 years' },
      { level: '1-3 years' },
      { level: '3-5 years' },
      { level: '5+ years' },
    ],
    skills: [
      { skill: 'JavaScript' },
      { skill: 'Python' },
      { skill: 'Java' },
      { skill: 'C++' },
    ],
    noticePeriod: [
      { period: 'Immediate' },
      { period: '1 Month' },
      { period: '2 Months' },
      { period: '3 Months' },
    ],
  };
  // Define filterKeys to have the keys of filterMenu
  filterKeys: (keyof FilterOptions)[] = Object.keys(
    this.filterMenu
  ) as (keyof FilterOptions)[];

  // Method to get the value from the option object
  getOptionValue(option: {
    role?: string;
    level?: string;
    skill?: string;
    period?: string;
  }): string {
    return option.role || option.level || option.skill || option.period || '';
  }

  /*@@ function for filter the application array(temporary) */
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
        status:item.status
      });
      return acc;
    }, []);

    /*@@get the key from the data for application table header.
     @@  filterd out the id from the header */
    this.applicationTableHeader = Object.keys(
      this.applicationDetails[0]
    ).filter(key => key !== 'id') as (keyof ApplicationDetail)[];
  }
}
