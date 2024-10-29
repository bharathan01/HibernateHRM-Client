import { Component, HostListener } from '@angular/core';
import { MenuBar } from '../../intserfaces/layout.interfaces';
import { NotificationDialogComponent } from '../dialog-boxs/notification-dialog/notification-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../dialog-boxs/logout/logout.component';
import { menuItemsTop } from 'src/app/utils/app-data';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css'],
})
export class HeaderNavBarComponent {
  isNotificationsTabOpen: boolean = false;
  isOpenSettingsMenu: boolean = false;
  isSideMenuOpen: boolean = false;
  menuItemsTop: MenuBar[] = menuItemsTop;

  constructor(private dialog: MatDialog) {}
  toggleNotifications() {
    this.isNotificationsTabOpen = true;
    this.dialog
      .open(NotificationDialogComponent, {
        position: { top: '60px', right: '30px' },
        width: '500px',
        height: '70%',
      })
      .afterClosed()
      .subscribe(() => {
        this.isNotificationsTabOpen = false;
      });
  }
  /*@@ close the menu when clicks outside */
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    this.isOpenSettingsMenu = false;
    this.isSideMenuOpen = false;
  }
  toggleSidemenuBar(event: Event) {
    event.stopPropagation();
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
  toggleSettingsOptions(event: Event) {
    this.isOpenSettingsMenu = !this.isOpenSettingsMenu;
    event.stopPropagation();
  }
  openLogoutDialog() {
    this.dialog.open(LogoutComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
