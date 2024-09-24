import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  disabledForm:boolean = true
  constructor(private fb:FormBuilder){}
   
  ngOnInit(): void {
    this.registrationFormPhaseTwo.disable()
  }
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  registrationFormPhaseOne = this.fb.group({
    nameOfEmployee:['', Validators.required],
    employeeId:['', Validators.required],
    designation:['', Validators.required],
    department:['', Validators.required],
  })
  registrationFormPhaseTwo = this.fb.group({
    phoneNumber:['', Validators.required],
    emailId:['', Validators.required],
    password:['', Validators.required],
    confirmPassword:['', Validators.required],
  })
  

 
  get registrationFormOneController(){
  return this.registrationFormPhaseOne.controls
  }

  get registrationFormTwoController(){
    return this.registrationFormPhaseTwo.controls
    }
  
  OnFormOneSubmit(){
    if (this.registrationFormPhaseOne.valid) {
      console.log(this.registrationFormPhaseOne.value);
      this.disabledForm = false
      this.registrationFormPhaseTwo.enable()
    }
    this.registrationFormPhaseOne.markAllAsTouched();
  }
}
