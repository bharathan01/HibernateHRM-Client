import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent {
  @ViewChild('profileImge') profileImge!: ElementRef;
  selectProfileImage(){
    this.profileImge.nativeElement.click()
  }
}
