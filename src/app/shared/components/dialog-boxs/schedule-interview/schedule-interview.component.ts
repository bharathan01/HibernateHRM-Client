import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css'],
})
export class ScheduleInterviewComponent {
  constructor(private fb: FormBuilder) {}
  
  scheduledInterviewDetails = this.fb.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    interviewType: ['', Validators.required],
    interviwer: [''],
  });

  get scheduledInterviewDetailsControl(){
    return this.scheduledInterviewDetails.controls
  }
}
