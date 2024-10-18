import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionComponent } from '../dialog-boxs/create-question/create-question.component';

@Component({
  selector: 'app-create-appliation-form',
  templateUrl: './create-appliation-form.component.html',
  styleUrls: ['./create-appliation-form.component.css'],
})
export class CreateAppliationFormComponent implements OnInit {
  readonly panelOpenState = signal(false);
  @Output() proceed: EventEmitter<boolean> = new EventEmitter();
  jobQuestions = [
    {
      fieldName: 'Personal Info',
      questions: [
        { question: 'Marital Status', selected: 'off' },
        { question: 'Date Of Birth', selected: 'off' },
        { question: 'Gender', selected: 'off' },
        { question: 'Address', selected: 'off' },
        { question: 'Photo', selected: 'off' },
      ],
    },
    {
      fieldName: 'Background Info',
      questions: [
        { question: 'workExperience', selected: 'off' },
        { question: 'skills', selected: 'off' },
        { question: 'educationalDetails', selected: 'off' },
        { question: 'workLink', selected: 'off' },
        { question: 'noticePeriod', selected: 'off' },
      ],
    },
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  applicationRequiredQuestion: any = {
    personalInfo: [
      {
        fieldName: 'First Name',
        type: 'text',
        required: true,
      },
      {
        fieldName: 'Last Name',
        type: 'text',
        required: true,
      },
      {
        fieldName: 'Email ID',
        type: 'text',
        required: true,
      },
      {
        fieldName: 'Contact Number',
        type: 'text',
        required: true,
      },
      {
        fieldName: 'Resume',
        type: 'file',
        required: true,
      },
    ],
  };

  createNewQuestion() {
    const dialogRef = this.dialog.open(CreateQuestionComponent, {
      width: 'auto',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe((formData: any) => {
      if (formData) {
        console.log(formData);
      }
    });
  }

  // Function to update the selected option
  selectOption(option: any, selectedOption: string) {
    option.selected = selectedOption;

    const index = this.applicationRequiredQuestion.personalInfo.findIndex(
      (value: any) => value.fieldName === option.question
    );

    if (selectedOption === 'off') {
      if (index !== -1) {
        this.applicationRequiredQuestion.personalInfo.splice(index, 1);
      }
    } else {
      // issue - if the required change the func not call fix
      if (index === -1) {
        this.addNewFormField(option, selectedOption);
      }
    }
  }
  //add new custom questions 
  addNewQutions(questionDetails:FormData){
      
  }

  // Function to add a new form field
  addNewFormField(option: any, selectedOption: string, type: string = '') {
    const field = {
      fieldName: option.question,
      type: type,
      required: selectedOption === 'mandatory',
    };
    this.applicationRequiredQuestion.personalInfo.push(field);
  }
  proceedToNextPage(){
    this.proceed.emit(true)
  }
}
