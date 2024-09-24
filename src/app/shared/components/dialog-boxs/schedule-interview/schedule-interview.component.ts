import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css'],
})
export class ScheduleInterviewComponent {
  constructor(private fb: FormBuilder,private router:Router, private dialog:MatDialog) {}
  
  scheduledInterviewDetails = this.fb.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    interviewType: ['', Validators.required],
    interviwer: [''],
  });

  get scheduledInterviewDetailsControl(){
    return this.scheduledInterviewDetails.controls
  }
  scheduleInterview(){
    this.router.navigateByUrl('dashboard/interview')
    this.dialog.closeAll()
  }
}
