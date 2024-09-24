import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
  interviewDetails: any = this.data;
  ratingStar:number[] = [1, 2, 3, 4, 5];;
  currentSelectedStar:number = 0
  

  setRating(star:number){
    this.currentSelectedStar = star
  }
}
