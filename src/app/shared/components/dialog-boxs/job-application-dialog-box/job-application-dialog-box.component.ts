import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from 'src/app/shared/intserfaces/users.intserfaces';

@Component({
  selector: 'app-job-application-dialog-box',
  templateUrl: './job-application-dialog-box.component.html',
  styleUrls: ['./job-application-dialog-box.component.css']
})
export class JobApplicationDialogBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public jobApplicationDetail: Job){
  }
}
