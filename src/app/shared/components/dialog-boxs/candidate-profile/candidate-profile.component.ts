import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { applicationMenu } from 'src/app/shared/intserfaces/layout.interfaces';
import { applicationFormDetails } from 'src/app/utils/demoData';
import { ScheduleInterviewComponent } from '../schedule-interview/schedule-interview.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css'],
})
export class CandidateProfileComponent implements OnInit {
  isOpenMoveCandidateMenu: boolean = false;
  selectedTab: string = 'Application Form';
  candidateAppliationfrom: any;
  isFormEnabled: boolean = false;
  applicationFromMenu: applicationMenu[] = [
    { name: 'Application Form' },
    { name: 'Resume' },
    { name: 'Inital Screening' },
    { name: 'Interviews' },
    { name: 'Feedback' },
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public applicationId: number,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  /*@@ Interview 
       Open n  close functionality of accordian */
  readonly panelOpenState = signal(false);

  ngOnInit(): void {
    this.personalDetails.disable();
    this.getAppliationDetails(this.applicationId);
    this.getInitalScreeningData();
  }

  personalDetails = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    contactNo: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    state: ['', Validators.required],
    postcode: ['', Validators.required],
    country: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    city: [''],
    maritalStatus: ['', Validators.required],
    noticePeriod: ['', Validators.required],
    PortfolioLink: ['', Validators.required],
    currentlyWorking: ['', Validators.required],
    education: this.fb.array([]),
    workExperience: this.fb.array([]),
  });
  initalScreeningDetails = this.fb.group({
    experience: ['', Validators.required],
    noticePeriod: ['', Validators.required],
    currentCtc: ['', Validators.required],
    expectedCtc: ['', Validators.required],
    currentlyWorking: ['', Validators.required],
    companyName: ['', Validators.required],
    qualification: ['', Validators.required],
    remarks: ['', Validators.required],
    passout: ['', Validators.required],
  });

  /*@get the form array for dynamic field */
  get education(): FormArray {
    return this.personalDetails.get('education') as FormArray;
  }
  get workExperience(): FormArray {
    return this.personalDetails.get('workExperience') as FormArray;
  }

  addNewEducationField(data?: any) {
    const educationDeatils = this.fb.group({
      qualification: [data ? data.education : '', Validators.required],
      course: [data ? data.Course : '', Validators.required],
      specialization: [data ? data.specilization : '', Validators.required],
      instituteName: [data ? data.instituteName : '', Validators.required],
      durationFrom: [data ? data.durationFrom : '', Validators.required],
      durationTo: [data ? data.durationTo : '', Validators.required],
    });
    this.education.push(educationDeatils);
  }
  addNewworkExperience(data?: any) {
    const workExperience = this.fb.group({
      companyName: [data ? data.companyName : '', Validators.required],
      designation: [data ? data.designation : '', Validators.required],
      workFrom: [data ? data.workFrom : '', Validators.required],
      workTo: [data ? data.workTo : '', Validators.required],
    });
    this.workExperience.push(workExperience);
  }

  // Method to remove a specific form field
  removeInputField(index: number, fields: string) {
    fields === 'education'
      ? this.education.removeAt(index)
      : this.workExperience.removeAt(index);
  }

  /*@@c get demo profile data */
  getAppliationDetails(applicationId: number) {
    this.candidateAppliationfrom = applicationFormDetails.filter(
      (application) => applicationId == application.applicationId
    )[0];
    this.personalDetails.patchValue({
      firstName: this.candidateAppliationfrom.personalInfo.firstName,
      lastName: this.candidateAppliationfrom?.personalInfo.lastName,
      contactNo: this.candidateAppliationfrom?.personalInfo.phone,
      email: this.candidateAppliationfrom?.personalInfo.email,
      address: this.candidateAppliationfrom?.personalInfo.address,
      state: this.candidateAppliationfrom?.personalInfo.state,
      postcode: this.candidateAppliationfrom?.personalInfo.postcode,
      country: this.candidateAppliationfrom?.personalInfo.country,
      dob: this.candidateAppliationfrom?.personalInfo.dob,
      gender: this.candidateAppliationfrom?.personalInfo.gender,
      maritalStatus: this.candidateAppliationfrom?.personalInfo.maritalStatus,
      noticePeriod: this.candidateAppliationfrom?.noticePeriod,
      currentlyWorking: this.candidateAppliationfrom?.currentlyWorking,
      PortfolioLink: this.candidateAppliationfrom?.links,
    });
    this.candidateAppliationfrom.background.forEach((data: any) => {
      this.addNewEducationField(data);
    });
    this.candidateAppliationfrom.experience.forEach((data: any) => {
      this.addNewworkExperience(data);
    });
  }
  /*@@c get demo inital screening  data */
  getInitalScreeningData() {
    console.log(this.candidateAppliationfrom.initalScreeningDetails);
    this.initalScreeningDetails.patchValue({
      experience:
        this.candidateAppliationfrom.initalScreeningDetails[0].experience,
      noticePeriod:
        this.candidateAppliationfrom.initalScreeningDetails[0].noticePeriod,
      currentCtc:
        this.candidateAppliationfrom.initalScreeningDetails[0].currentCtc,
      expectedCtc:
        this.candidateAppliationfrom.initalScreeningDetails[0].expectedCtc,
      currentlyWorking:
        this.candidateAppliationfrom.initalScreeningDetails[0].currentlyWorking,
      companyName:
        this.candidateAppliationfrom.initalScreeningDetails[0].companyName,
      qualification:
        this.candidateAppliationfrom.initalScreeningDetails[0].qualification,
      remarks: this.candidateAppliationfrom.initalScreeningDetails[0].remarks,
      passout: this.candidateAppliationfrom.initalScreeningDetails[0].passout,
    });
  }

  //editCandidateDetail
  editCandidateDetail() {
    this.personalDetails.enable();
    this.isFormEnabled = true;
  }

  onSelectMenu(menu: string) {
    this.selectedTab = menu;
  }

  /*@Schedule interview dialog box */

  scheduleInterview() {
    this.dialog.open(ScheduleInterviewComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
  cancelInterview() {}

  /*@Schedule interview dialog box */

  addFeedback() {
    this.dialog.open(FeedbackFormComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
