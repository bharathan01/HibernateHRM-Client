import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isSelectedMultipleQuestion: boolean = false;
  ngOnInit(): void {
    this.customQuestionFrom = this.fb.group({
      questionType: ['', Validators.required],
      question: ['', Validators.required],
      options: this.fb.array([]),
    });
    this.customQuestionFrom.controls['questionType'].valueChanges.subscribe(
      (selectedvalue) => {
        if (selectedvalue == 'multipleChoose') this.addMulipleOptionField();
      }
    );
  }
  isPanelOpen = false;

  onOpened() {
    this.isPanelOpen = true;
  }

  get customQuestionFromControlles() {
    return this.customQuestionFrom.controls;
  }
  get options(): FormArray {
    return this.customQuestionFrom.get('options') as FormArray;
  }
  addMulipleOptionField() {
    this.options.push(
      this.fb.group({
        optionText: ['', Validators.required],
      })
    );
  }
  removeOption(optionIndex:number){
    
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
