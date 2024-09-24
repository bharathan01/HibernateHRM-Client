import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersInfo } from 'src/app/shared/intserfaces/users.intserfaces';
import { demoUsersInfo } from 'src/app/utils/demoData';

@Component({
  selector: 'app-users-controlles',
  templateUrl: './users-controlles.component.html',
  styleUrls: ['./users-controlles.component.css'],
})
export class UsersControllesComponent implements OnInit {
  userInfo: UsersInfo | undefined = {} as UsersInfo;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') || '';
      this.getUserDetails(id);
    });
  }

  usersDetails = this.fb.group({
    userName: ['', Validators.required],
    emailId: ['', Validators.required],
    designation: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  get usersDetailController() {
    return this.usersDetails.controls;
  }

  getUserDetails(id: string): void {
    this.userInfo = demoUsersInfo.find((info) => info.id == id);
    this.usersDetails.patchValue({
      userName: this.userInfo?.userName,
      emailId: this.userInfo?.emailId,
      designation: this.userInfo?.designation,
      phoneNumber: this.userInfo?.phoneNumber,
    });
  }
}
