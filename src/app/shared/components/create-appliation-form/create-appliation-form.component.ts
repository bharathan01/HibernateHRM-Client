import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionComponent } from '../dialog-boxs/create-question/create-question.component';

@Component({
  selector: 'app-create-appliation-form',
  templateUrl: './create-appliation-form.component.html',
  styleUrls: ['./create-appliation-form.component.css'],
})
export class CreateAppliationFormComponent {
  readonly panelOpenState = signal(false);
  @Output() proceed: EventEmitter<boolean> = new EventEmitter();
  @Output() previous: EventEmitter<boolean> = new EventEmitter();
  jobQuestions = [
    {
      fieldName: 'Personal Info',
      questions: [
        {
          question: 'Marital Status',
          selected: 'off',
          type: 'radio',
          option: ['Single', 'Married'],
        },
        { question: 'Date Of Birth', selected: 'off', type: 'date' },
        {
          question: 'Gender',
          selected: 'off',
          type: 'radio',
          option: ['Male', 'Female'],
        },
        { question: 'Address', selected: 'off', type: 'text' },
        { question: 'Photo', selected: 'off', type: 'file' },
      ],
    },
    {
      fieldName: 'Background Info',
      questions: [
        { question: 'workExperience', selected: 'off', type: 'text' },
        { question: 'skills', selected: 'off', type: 'text' },
        { question: 'educationalDetails', selected: 'off', type: 'text' },
        { question: 'workLink', selected: 'off', type: 'text' },
        { question: 'noticePeriod', selected: 'off', type: 'text' },
      ],
    },
  ];
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
  constructor(private dialog: MatDialog) {}

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
  // Function to find the question object
  findQuestion(questionName: string) {
    for (const field of this.jobQuestions) {
      const question = field.questions.find((q) => q.question === questionName);
      if (question) {
        return question; // Returns the found question object
      }
    }
    return null;
  }
  // Function to add a new form field
  addNewFormField(option: any, selectedOption: string, type: string = 'text') {
    const isPresentIndex = this.isQuestionPresent(option);
    const selectedfield = this.findQuestion(option.question);
    const field = {
      fieldName: selectedfield?.question,
      type: selectedfield?.type,
      options: selectedfield?.option,
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
  //add new custom questions
  addNewCustomQutions(questionDetails: any) {
    const isQuestionPresent = this.isQuestionPresent(questionDetails);
    if (isQuestionPresent !== -1) {
      alert('Question is already added');
    } else {
      //create new input field
      const field = {
        fieldName: questionDetails.question,
        type: questionDetails.questionType,
        options: questionDetails.options.map((item: any) => item.optionText),
        required: questionDetails.mandatory ? questionDetails.mandatory : false,
      };
      console.log(field);
      this.applicationRequiredQuestion.personalInfo.push(field);
    }
  }

  createNewQuestion() {
    const dialogRef = this.dialog.open(CreateQuestionComponent, {
      width: 'auto',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe((formData: any) => {
      if (formData) {
        this.addNewCustomQutions(formData);
      }
    });
  }
  proceedToNextPage() {
    this.proceed.emit(true);
  }
  previousPage() {
    this.previous.emit(true)
  }
}
