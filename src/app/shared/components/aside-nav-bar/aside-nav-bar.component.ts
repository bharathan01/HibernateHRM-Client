import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MenuBar } from '../../intserfaces/layout.interfaces';

@Component({
  selector: 'app-aside-nav-bar',
  templateUrl: './aside-nav-bar.component.html',
  styleUrls: ['./aside-nav-bar.component.css'],
})
export class AsideNavBarComponent {
  showFiller: boolean = false;
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  constructor(private breakpointObserver: BreakpointObserver,private cdr: ChangeDetectorRef) {}

  toggleDrawer() {
    this.drawer.toggle();
  }
  ngAfterViewInit():void {
    // this.toggleDrawer();
    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.drawer.close();
        } else {
          this.drawer.open();
        }
      });
      this.cdr.detectChanges();
  }
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
}
