import { Component, signal } from '@angular/core';
import { interviewDetails } from 'src/app/utils/demoData';

@Component({
  selector: 'app-interview-history',
  templateUrl: './interview-history.component.html',
  styleUrls: ['./interview-history.component.css']
})
export class InterviewHistoryComponent {
   /*@@ Interview 
       Open n  close functionality of accordian */
       readonly panelOpenState = signal(false);
    // create an interface for actual data
    interviewDetails: any =interviewDetails;
}
