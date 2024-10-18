import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateQuestionComponent>,
    private fb: FormBuilder
  ) {}
  customQuestionFrom!: FormGroup;
  ngOnInit(): void {
    this.customQuestionFrom = this.fb.group({
      questionType: ['', Validators.required],
      question: ['', Validators.required],
    });
  }
  isPanelOpen = false;

  onOpened() {
    this.isPanelOpen = true;
  }

  get customQuestionFromControlles() {
    return this.customQuestionFrom.controls;
  }

  addQuestion() {
    if (this.customQuestionFrom.valid) {
      this.dialogRef.close(this.customQuestionFrom.value);
    }

    this.customQuestionFrom.markAllAsTouched();
  }
  closeOpenBox() {
    this.dialogRef.close();
  }
}
