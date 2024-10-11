import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, map, Observable, of, startWith } from 'rxjs';
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
  filteredField: Observable<string[]> | undefined;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<ScheduleInterviewComponent>,
    private datePipe: DatePipe
  ) {}
  filteredJob!: Observable<string[]>;
  filteredInterview!: Observable<string[]>;
  filteredInterviewType!: Observable<string[]>;

  ngOnInit(): void {
    this.interviewDetailsForm = this.fb.group({
      interviewType: [''],
      jobTitle: [''],
      candidateMail: [''],
      interviewer: [''],
    });

    // Setting up filtering for each field
    this.filteredInterviewType = this.createFilteredObservable('interviewType');
    this.filteredInterview = this.createFilteredObservable('interviewer');
    this.filteredJob = this.createFilteredObservable('jobTitle');
  }

  // Generic method to create filtered observable
  createFilteredObservable(controlName: string): Observable<string[]> {
    return this.interviewDetailsForm.get(controlName)!.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value || '', controlName))
    );
  }

  // Method to normalize the input
  private _normalizeValue(value: string): string {
    return value.toLowerCase();
  }

  // Filtering the list based on input
  filter(value: string, controlName: string): string[] {
    const filterValue = this._normalizeValue(value);
    if (controlName == 'jobTitle') {
      return this.jobTiltes.filter((street) =>
        this._normalizeValue(street).includes(filterValue)
      );
    }
    if (controlName == 'interviewer') {
      return this.interviewer.filter((street) =>
        this._normalizeValue(street).includes(filterValue)
      );
    }
    if (controlName === 'interviewType') {
      return this.streets.filter((street) =>
        this._normalizeValue(street).includes(filterValue)
      );
    }
    return []
    // return this.interviewer.filter((street) =>
    //   this._normalizeValue(street).includes(filterValue)
    // );
  }

  scheduleInterview() {
    this.dialogRef.close()
  }
}
