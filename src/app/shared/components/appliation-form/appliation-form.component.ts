import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { JdTemplateComponent } from '../dialog-boxs/jd-template/jd-template.component';
import { MatDialog } from '@angular/material/dialog';
import { jobDescriptions } from 'src/app/utils/demoData';
import { JrfPreviewComponent } from '../dialog-boxs/jrf-preview/jrf-preview.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliation-form',
  templateUrl: './appliation-form.component.html',
  styleUrls: ['./appliation-form.component.css'],
})
export class AppliationFormComponent implements OnInit {
  departmentNames: string[] = [
    'Human Resources',
    'Finance',
    'Engineering',
    'Marketing',
    'Sales',
    'Customer Support',
    'IT Services',
    'Legal',
    'Research and Development',
    'Operations',
  ];
  locations: string[] = [
    'New York, USA',
    'London, UK',
    'Tokyo, Japan',
    'Sydney, Australia',
    'Toronto, Canada',
    'Berlin, Germany',
    'Singapore',
    'Paris, France',
    'Mumbai, India',
    'Cape Town, South Africa',
  ];
  skills: string[] = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'HTML & CSS',
    'React',
    'Angular',
    'Node.js',
    'SQL',
    'Machine Learning',
  ];
  seniorityLevels: string[] = [
    'Intern',
    'Junior',
    'Mid-level',
    'Senior',
    'Lead',
    'Manager',
    'Director',
    'Vice President',
    'C-Level (e.g., CEO, CTO)',
    'Executive',
  ];
  educationLevels: string[] = [
    'High School Diploma',
    'Associate Degree',
    'Bachelor’s Degree',
    'Master’s Degree',
    'Doctorate (PhD)',
    'Professional Degree (e.g., MD, JD)',
    'Certification (e.g., PMP, CPA)',
    'Vocational Training',
    'Diploma',
    'Postgraduate Certificate',
  ];

  filterdDepartmant!: any; //avoid any when intergration(now unknown)
  filteredLocation!: any; //avoid any when intergration(now unknown)
  filteredSkills!: any; //avoid any when intergration(now unknown)
  filteredSeniorityLevels!: any; //avoid any when intergration(now unknown)
  filteredEducation!: any; //avoid any when intergration(now unknown)

  public Editor = ClassicEditor;
  jobDescriptionFrom!: FormGroup;
  @Output() proceed: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private dialogBox: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.jobDescriptionFrom = this.fb.group({
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      location: ['', Validators.required],
      jobDescription: ['', Validators.required],
      employementType: [''],
      seniorityLevel: [''],
      industryType: [''],
      salaryRangeFrom: [''],
      salaryRangeTo: [''],
      salaryRangeIn: [''],
      workExperienceFrom: [''],
      workExperienceTo: [''],
      skills: [''],
      education: [''],
      skillArray: this.fb.array([]),
    });
    // methode for find which input field value is changing
    this.jobDescriptionFrom.valueChanges.subscribe((value) => {
      // Find which control changed by comparing current form values
      for (const field in this.jobDescriptionFrom.controls) {
        const control = this.jobDescriptionFrom.get(field);
        if (control?.dirty) {
          this.filterOptions(field, control.value);
        }
      }
    });
  }

  // getter for the formcontroller
  get jobDescriptionFromControllers() {
    return this.jobDescriptionFrom.controls;
  }

  // commen method for return filterd value
  getFilterValues(value: string, optionsObj: string[]): string[] {
    return optionsObj.filter((departmant: string) => {
      return departmant.toLowerCase().includes(value.toLowerCase());
    });
  }

  filterOptions(fieldName: string, value: string) {
    switch (fieldName) {
      case (fieldName = 'department'):
        this.filterdDepartmant = this.getFilterValues(
          value,
          this.departmentNames
        );
        break;
      case (fieldName = 'location'):
        this.filteredLocation = this.getFilterValues(value, this.locations);
        break;
      case (fieldName = 'skills'):
        this.filteredSkills = this.getFilterValues(value, this.skills);
        break;
      case (fieldName = 'seniorityLevel'):
        this.filteredSeniorityLevels = this.getFilterValues(
          value,
          this.seniorityLevels
        );
        break;
      case (fieldName = 'education'):
        this.filteredEducation = this.getFilterValues(
          value,
          this.educationLevels
        );
        break;
      default:
        return;
    }
  }

  addSkillsArray() {
    console.log('okayy');
  }

  getSkillValue() {
    const skillInputValue = this.jobDescriptionFrom.get('skills')?.value;
    if (
      skillInputValue &&
      !this.jobDescriptionFrom
        .get('skillArray')!
        .value.includes(skillInputValue)
    ) {
      (this.jobDescriptionFrom.get('skillArray') as FormArray).push(
        this.fb.control(skillInputValue)
      );
      this.jobDescriptionFrom.get('skills')?.reset();
      this.filteredSkills = [];
    }
  }
  removeSkill(idx: number) {
    const skillArray = this.jobDescriptionFrom.get('skillArray') as FormArray;
    skillArray.removeAt(idx);
  }
  get skillsControls() {
    return (this.jobDescriptionFrom.get('skillArray') as FormArray).controls;
  }
  openJDTemplates() {
    const dialogRef = this.dialogBox.open(JdTemplateComponent, {
      width: 'auto',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getJobDetailsAppend(result);
      }
    });
  }
  // for filter the job description and append the value to the jd form
  getJobDetailsAppend(jobDescriptionId: number) {
    const jobDescriptionDetails = jobDescriptions.filter((jd: any) => {
      return jd.jobId === jobDescriptionId;
    });
    this.jobDescriptionFrom.patchValue({
      jobTitle: jobDescriptionDetails[0].jobTitle,
      jobDescription: `
    <div >
      <strong>About Company:</strong> <br/><br/> ${
        jobDescriptionDetails[0].aboutCompany
      } <br/><br/>
      <strong>About Role:</strong><br/><br/> ${
        jobDescriptionDetails[0].aboutRole
      } <br/><br/>
      <strong>Responsibilities:</strong><br/>
      <ul>
        ${jobDescriptionDetails[0].responsibilities
          .map((res) => `<li>${res}</li>`)
          .join('')}
      </ul><br/>
      <strong>Qualifications:</strong><br/>
      <ul style="list-style-type: disc; margin-left: 20px;">
        ${jobDescriptionDetails[0].qualifications
          .map((qual) => `<li>${qual}</li>`)
          .join('')}
      </ul>
    </div>
  `,
    });
    const skillArray = this.jobDescriptionFrom.get('skillArray') as FormArray;
    // Iterate through keySkills array and push each skill into the FormArray
    jobDescriptionDetails[0].keySkills.forEach((skill) => {
      skillArray.push(new FormControl(skill)); // Push each skill as a new FormControl
    });
  }

  showJobDecriptionPreview() {
    if (this.jobDescriptionFrom.valid) {
    }
    this.jobDescriptionFrom.markAllAsTouched();
    const dialogRef = this.dialogBox.open(JrfPreviewComponent, {
      data: this.jobDescriptionFrom.value,
      width: 'auto',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.proceed.emit(true);
      }
    });
  }
  onCancelJobAppcation() {
    this.router.navigateByUrl('/dashboard/jobs');
  }
}
