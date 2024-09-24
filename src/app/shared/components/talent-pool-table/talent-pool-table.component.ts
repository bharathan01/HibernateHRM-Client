import { Component, OnInit } from '@angular/core';
import { jobApplicants } from 'src/app/utils/demoData';
import { ApplicationDetail } from '../../intserfaces/users.intserfaces';

@Component({
  selector: 'app-talent-pool-table',
  templateUrl: './talent-pool-table.component.html',
  styleUrls: ['./talent-pool-table.component.css'],
})
export class TalentPoolTableComponent implements OnInit {
  ngOnInit(): void {
    this.getTheFillteredTalentPoolDetails();
  }
  talentPoolDetails: any[] = [];
  applicationTableHeader: any[] = [];
  isChecked: boolean = false;
  selectedCandidateApplication: ApplicationDetail[] = []
  talentPoolHeader: string[] = [
    'Select All',
    'Candidate',
    'Job',
    'profile Created On',
    'Source',
    'Phone',
    'Email',
  ];

  getTheFillteredTalentPoolDetails() {
    this.talentPoolDetails = jobApplicants.reduce((acc: any, item: any) => {
      acc.push({
        id: item.id,
        candidate: item.candidate,
        PrfileCreatedon: item.profileCreatedOn,
        job: item.jobPosition,
        source: item.source,
        phone: item.phone,
        email: item.email,
        checked:false
      });
      return acc;
    }, []);

    /*@@get the key from the data for application table header.
     @@  filterd out the id from the header */
     this.applicationTableHeader = Object.keys(
      this.talentPoolDetails[0]
    ).filter((key) => key !== 'id' && key !=='checked') as (keyof ApplicationDetail)[];
    
  }
  OnChangeCheckBox(){
    this.selectedCandidateApplication =  this.talentPoolDetails.filter((item) => item.checked == true)
    console.log(this.selectedCandidateApplication)
  }
}
