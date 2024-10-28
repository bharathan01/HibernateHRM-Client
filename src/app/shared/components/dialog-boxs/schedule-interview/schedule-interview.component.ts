import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  startWith,
} from 'rxjs';
import { interviewDetails } from 'src/app/utils/demoData';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css'],
  providers: [DatePipe],
})
export class ScheduleInterviewComponent implements OnInit {
  onChangeJobTitleInput: boolean = false;
  onInterviewerChanges: boolean = false;
  onInterviewTypeChanges: boolean = false;
  filteredJobTitles: string[] = [];
  jobTiltes: string[] = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'Marketing Specialist',
    'Sales Executive',
    'Customer Support Representative',
    'Human Resources Manager',
    'Business Analyst',
    'Project Coordinator',
    'Full Stack Developer',
    'Content Writer',
    'Graphic Designer',
    'UI/UX Designer',
    'Financial Analyst',
    'Operations Manager',
    'DevOps Engineer',
    'Quality Assurance Engineer',
    'Network Administrator',
    'Database Administrator',
    'Mobile App Developer',
  ];
  interviewer: string[] = [
    'John',
    'Sophia',
    'Michael',
    'Emma',
    'James',
    'Olivia',
    'Daniel',
    'Ava',
    'David',
    'Isabella',
  ];

  interviewDetailsForm!: FormGroup;

  streets: string[] = [
    'Technical Interview',
    'HR Interview',
    'Behavioral Interview',
    'Coding Interview',
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<ScheduleInterviewComponent>,
    private datePipe: DatePipe
  ) {}
  filteredJob: string[] = [];
  filteredInterviewer: string[] = [];
  filteredInterviewType: string[] = [];

  ngOnInit(): void {
    this.interviewDetailsForm = this.fb.group({
      interviewType: [''],
      jobTitle: [''],
      candidateMail: [''],
      interviewer: [''],
    });
    this.interviewDetailsForm
      .get('interviewType')
      ?.valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.filter(value, 'interviewType');
      });
    this.interviewDetailsForm
      .get('interviewer')
      ?.valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.filter(value, 'interviewer');
      });
    this.interviewDetailsForm
      .get('jobTitle')
      ?.valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.filter(value, 'jobTitle');
      });
  }

  // Method to normalize the input
  private _normalizeValue(value: string): string {
    return value.toLowerCase();
  }

  filterByFieldName(valueObject: string[], filterValue: string) {
    const value = this._normalizeValue(filterValue);
    return valueObject.filter((item: string) =>
      this._normalizeValue(item).includes(value)
    );
  }

  // Filtering the list based on input
  filter(value: string, controlName: string): any {
    if (controlName == 'jobTitle') {
      this.filteredJob = this.filterByFieldName(this.jobTiltes, value);
    }
    if (controlName == 'interviewer') {
      this.filteredInterviewer = this.filterByFieldName(
        this.interviewer,
        value
      );
    }
    if (controlName === 'interviewType') {
      this.filteredInterviewType = this.filterByFieldName(this.streets, value);
    }
  }

  scheduleInterview() {
    this.dialogRef.close();
  }
}
