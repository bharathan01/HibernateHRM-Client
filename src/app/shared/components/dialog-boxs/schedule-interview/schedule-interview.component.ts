import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { interviewDetails } from 'src/app/utils/demoData';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css'],
  providers: [DatePipe],
})
export class ScheduleInterviewComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<ScheduleInterviewComponent>,
    private datePipe: DatePipe
  ) {}
 ngOnInit(): void {
 }


  scheduledInterviewDetails = this.fb.group({
    date: ['', Validators.required],
    timeFrom: ['', Validators.required],
    timeTo: ['', Validators.required],
    interviewType: ['', Validators.required],
    interviwer: [''],
  });
  get scheduledInterviewDetailsControl() {
    return this.scheduledInterviewDetails.controls;
  }
  scheduleInterview() { 
    const formValue = this.scheduledInterviewDetails.value
    const newInterviewDetails = {
       interviewType: formValue.interviewType,
        interviewer: formValue.interviwer,
        date: this.datePipe.transform(formValue.date, 'MM/dd/yyyy'),
        time: `${formValue.timeFrom} - ${formValue.timeTo}`,
    }
    interviewDetails[0].upcommingInterview.push(newInterviewDetails)
    this.dialogRef.close()
  }
}
