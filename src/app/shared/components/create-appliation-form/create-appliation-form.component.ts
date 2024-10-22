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
      {
        fieldName: 'Marital Status',
        type: 'option',
        required: true,
        options: ['Single', 'Married'],
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

  //funtion for check the question already present
  isQuestionPresent(option: any) {
    return this.applicationRequiredQuestion.personalInfo.findIndex(
      (value: any) => value.fieldName === option.question
    );
  }

  // Function to update the selected option
  selectOption(option: any, selectedOption: string) {
    option.selected = selectedOption;
    const isPresentIndex = this.isQuestionPresent(option);
    if (selectedOption === 'off') {
      if (isPresentIndex !== -1) {
        this.applicationRequiredQuestion.personalInfo.splice(isPresentIndex, 1);
      }
    } else {
      // if question not there add the questions
      this.addNewFormField(option, selectedOption);
    }
  }
  //add new custom questions
  addNewQutions(questionDetails: FormData) {}

  // Function to add a new form field
  addNewFormField(option: any, selectedOption: string, type: string = 'text') {
    const isPresentIndex = this.isQuestionPresent(option);
    const field = {
      fieldName: option.question,
      type: type,
      required: selectedOption === 'mandatory',
    };
    if (
      (selectedOption == 'mandatory' || selectedOption == 'optional') &&
      isPresentIndex != -1
    ) {
      this.applicationRequiredQuestion.personalInfo.splice(
        isPresentIndex,
        1,
        field
      );
    } else {
      this.applicationRequiredQuestion.personalInfo.push(field);
    }
  }
  proceedToNextPage() {
    this.proceed.emit(true);
  }
}
