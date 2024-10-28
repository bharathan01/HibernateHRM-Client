import { Component, HostListener } from '@angular/core';
import { MenuBar } from '../../intserfaces/layout.interfaces';
import { NotificationDialogComponent } from '../dialog-boxs/notification-dialog/notification-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css'],
})
export class HeaderNavBarComponent {
  isNotificationsTabOpen: boolean = false;
  isOpenSettingsMenu: boolean = false;
  isSideMenuOpen: boolean = false;

  constructor(private dialog: MatDialog) {}

  menuItemsTop: MenuBar[] = [
    { label: 'Dashboard', route: 'dashboard', logo: 'dashboard' },
    { label: 'Jobs', route: 'dashboard/jobs', logo: 'work' },
    {
      label: 'Talent Pool',
      route: 'dashboard/talent-pool',
      logo: 'data_thresholding',
    },
    { label: 'Interview', route: 'dashboard/interview', logo: 'groups' },
    { label: 'Reports', route: 'dashboard/report', logo: 'summarize' },
    { label: 'Mails', route: 'dashboard/mails-box', logo: 'mail' },
  ];

  menuItemsBottom: MenuBar[] = [
    { label: 'Settings', route: 'dashboard/settings', logo: 'settings' },
    { label: 'Log Out', route: '/logout', logo: 'logout' },
  ];

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
  toggleSidemenuBar(event:Event) {
    event.stopPropagation();
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
  toggleSettingsOptions(event: Event) {
    this.isOpenSettingsMenu = !this.isOpenSettingsMenu;
    event.stopPropagation();
  }
}
