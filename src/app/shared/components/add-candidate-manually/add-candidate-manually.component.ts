import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileHandle, FilePreview } from '../../intserfaces/layout.interfaces';
import { SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-add-candidate-manually',
  templateUrl: './add-candidate-manually.component.html',
  styleUrls: ['./add-candidate-manually.component.css'],
})
export class AddCandidateManuallyComponent {
  constructor(private fb: FormBuilder, private renderer: Renderer2) {}
  filePreviews: FilePreview[] = [];
  @ViewChild('InputImageFiled') InputImageFiled!: ElementRef;

  candidateDetailsForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contactNumber: ['', Validators.required],
    experience: ['', Validators.required],
    noticePeriod: ['', Validators.required],
    currentCTC: ['', Validators.required],
    ExpectedCTCFrom: ['', Validators.required],
    ExpectedCTCTo: ['', Validators.required],
    educationalQulification: ['', Validators.required],
  });
  get candidateFormControllers() {
    return this.candidateDetailsForm.controls;
  }
  addCandidte() {
    if (this.candidateDetailsForm.valid) {
      console.log(this.candidateDetailsForm.value);
    }
    this.candidateDetailsForm.markAllAsTouched();
  }
 
}
