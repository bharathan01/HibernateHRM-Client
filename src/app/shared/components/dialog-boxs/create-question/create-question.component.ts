import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { questionTypes } from 'src/app/shared/intserfaces/layout.interfaces';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  customQuestionFrom!: FormGroup;
  isPanelOpen: boolean = false;

  // for using map - each time option change not need a filtration to get the type
  questionTypeMap = new Map<string, string>([
    ['Single Line', 'text'],
    ['Multiple Line', 'text'],
    ['Yes/No', 'radio'],
    ['Files', 'file'],
    ['Multiple Choose', 'radio'],
  ]);
  questionTypeArray = Array.from(this.questionTypeMap.entries());

  // questionTypes: questionTypes[] = [
  //   {
  //     typeName: 'Single Line',
  //     type: 'text',
  //   },
  //   {
  //     typeName: 'Multiple Line',
  //     type: 'text',
  //   },
  //   {
  //     typeName: 'Yes/No',
  //     type: 'radio',
  //   },
  //   {
  //     typeName: 'Files',
  //     type: 'file',
  //   },
  //   {
  //     typeName: 'Multiple Choose',
  //     type: 'radio',
  //   },
  // ];

  constructor(
    public dialogRef: MatDialogRef<CreateQuestionComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.customQuestionFrom = this.fb.group({
      questionType: ['', Validators.required],
      question: ['', Validators.required],
      mandatory:[''],
      options: this.fb.array([]),
    });
  
  }

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
  removeOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
  }

  addQuestion() {
    if (this.customQuestionFrom.valid) {
      // get the actual type from the map
      const selectedType = this.questionTypeMap.get(
        this.customQuestionFrom.value.questionType
      );
      // If a type is found, update the form control
      if (selectedType) {
        // Dynamically add form fields based on type
        this.customQuestionFrom.patchValue({
          questionType: selectedType, // Update to the actual type
        });
      }
      this.dialogRef.close(this.customQuestionFrom.value);
    }

    this.customQuestionFrom.markAllAsTouched();
  }
  closeOpenBox() {
    this.dialogRef.close();
  }
}
