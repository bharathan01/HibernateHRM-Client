import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { applicationFormDetails } from 'src/app/utils/demoData';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
   candidateAppliationfrom:any
   isOpenMoveCandidateMenu:boolean = false; 

   constructor(@Inject(MAT_DIALOG_DATA) public applicationId: number){}
  
   ngOnInit(): void {
     console.log(this.applicationId)
     this.getAppliationDetails(this.applicationId)
   }
   
   /*@@c get demo profile data */
   getAppliationDetails(applicationId:number){
    this.candidateAppliationfrom =  applicationFormDetails.filter(application => applicationId == application.applicationId)
    console.log(this.candidateAppliationfrom)
   }
}
