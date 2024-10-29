import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent implements OnInit {
  interviewDetails: any = this.data;
  ratingStar: number[] = [1, 2, 3, 4, 5];
  currentSelectedStar: number = 0;
  feedbackForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FeedbackFormComponent>
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      remarks: [, Validators.required],
      skillRating: this.fb.array([
        this.fb.group({
          skill: ['Coding'],
          rating: [],
        }),
      ]),
    });
  }

  get skillRating(): FormArray {
    return this.feedbackForm.get('skillRating') as FormArray;
  }
  // Method to add a new skill rating field
  addSkillRating(): void {
    const skillFormGroup = this.fb.group({
      skill: [''],
      rating: [0],
    });
    this.skillRating.push(skillFormGroup);
  }

  setRating(formGroup: any, rating: number): void {
    formGroup.get('rating')?.setValue(rating);
    this.currentSelectedStar = rating;
  }
  get FeedbackFormController() {
    return this.feedbackForm.controls;
  }
   
  onCancelFeedback(){
    this.dialogRef.close();
  }
  onSubmitFeedback() {
    this.dialogRef.close();
  }
}
