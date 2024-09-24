import { DomPortalOutlet } from '@angular/cdk/portal';
import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MultipleJobBoardsComponent } from 'src/app/shared/components/dialog-boxs/multiple-job-boards/multiple-job-boards.component';
import {
  JobOption,
  Location,
} from 'src/app/shared/intserfaces/users.intserfaces';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-create-jrf',
  templateUrl: './create-jrf.component.html',
  styleUrls: ['./create-jrf.component.css'],
  providers: [DatePipe],
})
export class CreateJrfComponent implements AfterViewInit {
  @ViewChild('contentToCopy', { static: false }) contentToCopy!: ElementRef;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private datePipe: DatePipe
  ) {}

  ngAfterViewInit(): void {}

  stepperCount = 0;
  filterJob: string[] = [];
  steps = [
    { title: 'receipt_long', isComplete: false, page: 'JRF_form' },
    { title: 'plagiarism', isComplete: false, page: 'preview' },
    { title: 'task', isComplete: false, page: 'form_approval' },
    { title: 'upload_file', isComplete: false, page: 'JRF_uplaod' },
  ];

  jobOptions: JobOption[] = [
    {
      department: 'R&D Mechanical Department',
      jobs: ['Senior Mechanical Engineer', 'Production Engineer'],
    },
    {
      department: 'R&D Software Department',
      jobs: ['Flutter Developer', 'Android Developer'],
    },
    {
      department: 'Financial Department',
      jobs: ['Accountant', 'Financial Analyst'],
    },
    {
      department: 'Marketings',
      jobs: ['Marketing Manager', 'Content Strategist'],
    },
  ];
  locations: Location[] = [{ city: 'Trivandrum' }, { city: 'Kochi' }];

  JRFormData: FormGroup = this.fb.group({
    department: ['', Validators.required],
    job: ['', Validators.required],
    location: ['', Validators.required],
    date: ['', Validators.required],
    responsibilities: ['', Validators.required],
    skills: ['', Validators.required],
    vacancies: ['', Validators.required],
    qualification: ['', Validators.required],
    qualificationExInfo: [''],
    experienceFrom: ['', Validators.required],
    experienceTo: ['', Validators.required],
    jobLocation: ['', Validators.required],
    travel: ['', Validators.required],
    gender: ['', Validators.required],
    maritalStatus: [''],
    locality: ['', Validators.required],
    industry: ['', Validators.required],
    salary: [''],
    jobId: ['', Validators.required],
    remarks: [''],
    name: ['', Validators.required],
    designation: ['', Validators.required],
  });
  JRFormPulishDetails: FormGroup = this.fb.group({
    actionTaken: ['', Validators.required],
    statusofRequest: ['', Validators.required],
    name: ['', Validators.required],
    signature: ['', Validators.required],
    date: ['', Validators.required],
  });

  onDepartmentChange() {
    const selectedDepartmat = this.jobOptions.find(
      (option) => option.department == this.JRFormData.get('department')?.value
    );
    this.filterJob = selectedDepartmat ? selectedDepartmat.jobs : [];
    this.JRFormData.get('job')?.setValue('');
  }
  submitPreviewJrfFormData() {
    if (this.JRFormData.valid) {
      this.JRFormData.patchValue(
        {
          date: this.datePipe.transform(
            this.JRFormData.value.date,
            'dd-MM-yyyy'
          ),
        },
        { emitEvent: false }
      );
    }
    this.nextPage();
    // this.JRFormData.markAllAsTouched();
  }
  submitJRFormPulishDetails() {
    if (this.JRFormPulishDetails.valid) {
      this.nextPage();
    }
    this.JRFormPulishDetails.markAllAsTouched();
  }

  get JrfControls() {
    return this.JRFormData.controls;
  }
  get JRFormPulishDetailsControls() {
    return this.JRFormPulishDetails.controls;
  }
  scrollToTop() {
    const element = document.getElementById('scroll-top');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  nextPage() {
    this.scrollToTop();
    if (this.stepperCount < this.steps.length) {
      this.steps[this.stepperCount].isComplete = true;
      this.stepperCount++;
    }
  }

  previousPage() {
    this.scrollToTop();
    if (this.stepperCount > 0) {
      this.stepperCount--;
      this.steps[this.stepperCount].isComplete = false;
    }
  }

  togglePublishJob() {
    this.dialog.open(MultipleJobBoardsComponent, {
      width: '400px',
      height: 'auto',
    });
  }

  copyJRFContent() {
    const content = this.contentToCopy.nativeElement.innerHTML;
    navigator.clipboard.writeText(content);
  }
  print(): void {
    const printContents = document.getElementById('print-section')?.innerHTML;
    if (printContents) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = `
        <html>
        <head>
          <title>Print</title>
          <style>
            @media print {
              body, * {
                color: black !important; 
                background-color: white !important;  
            }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
      `;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  }
}
