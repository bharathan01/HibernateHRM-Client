import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialog: MatDialog,
    private router: Router,
    private fb:FormBuilder
  ) {}
  interviewDetails: any = this.data;
  ratingStar: number[] = [1, 2, 3, 4, 5];
  currentSelectedStar: number = 0;

  setRating(star: number) {
    this.currentSelectedStar = star;
  }
  
  feedbackForm = this.fb.group({
    interview:['',Validators.required],
    interviewer:['',Validators.required],
    remarks:['',Validators.required],
  })
  
  get FeedbackFormController(){
    return this.feedbackForm.controls
  }




  onSubmitFeedback(){
    this.router.navigateByUrl('dashboard/interview')
    this.dialog.closeAll()
  }
}
