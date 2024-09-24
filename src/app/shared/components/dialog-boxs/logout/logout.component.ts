import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private router:Router, private dialog:MatDialog){}
  logOut() {
    this.router.navigateByUrl('/')
    this.dialog.closeAll()
  }
}
