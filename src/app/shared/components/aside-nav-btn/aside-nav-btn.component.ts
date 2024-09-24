import { Component, Input } from '@angular/core';
import { MenuBar } from '../../intserfaces/layout.interfaces';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../dialog-boxs/logout/logout.component';

@Component({
  selector: 'app-aside-nav-btn',
  templateUrl: './aside-nav-btn.component.html',
  styleUrls: ['./aside-nav-btn.component.css'],
})
export class AsideNavBtnComponent {
  constructor(private router:Router ,private dialog:MatDialog){}
  @Input() buttonAction!: MenuBar


  openLogoutDialog(){
    this.dialog
    .open(LogoutComponent, {
      width: 'auto',
      height: 'auto',
    })
  }
}
