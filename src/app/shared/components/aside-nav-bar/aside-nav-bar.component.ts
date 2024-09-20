import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MenuBar } from '../../intserfaces/layout.interfaces';

@Component({
  selector: 'app-aside-nav-bar',
  templateUrl: './aside-nav-bar.component.html',
  styleUrls: ['./aside-nav-bar.component.css'],
})
export class AsideNavBarComponent {
  showFiller:boolean = false;
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  


  constructor(private breakpointObserver: BreakpointObserver) {}

  
  toggleDrawer() {
    this.drawer.toggle();
  }
  ngAfterViewInit() {
    this.toggleDrawer();
    this.breakpointObserver
      .observe(['(max-width: 750px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.drawer.close(); 
        } else {
          this.drawer.open();
        }
      });
  }
  // menuItems:menuBar[] = [
  //   [
  //     { label: 'Dashboard', route: 'dashboard', logo: 'dashboard' },
  //     { label: 'Jobs', route: 'dashboard/jobs', logo: 'work' },
  //     { label: 'Application', route: 'dashboard/application', logo: 'article' },
  //     { label: 'Interview', route: 'dashboard/interview', logo: 'groups' },
  //     { label: 'Reports', route: 'dashboard/report', logo: 'summarize' },
  //     { label: 'Tallent Pool', route: 'dashboard/talent-pool', logo: 'data_thresholding' },
  //     { label: 'Resignation', route: 'dashboard/resignation', logo: 'how_to_reg' },
  //   ],[
  //     { label: 'Settings', route: '/settings', logo: 'settings' },
  //     { label: 'Log Out', route: '/settings', logo: 'logout' },
  //   ]
  // ];
  menuItemsTop: MenuBar[] = [
    { label: 'Dashboard', route: 'dashboard', logo: 'dashboard' },
    { label: 'Jobs', route: 'dashboard/jobs', logo: 'work' },
    { label: 'Application', route: 'dashboard/application', logo: 'article' },
    { label: 'Interview', route: 'dashboard/interview', logo: 'groups' },
    { label: 'Reports', route: 'dashboard/report', logo: 'summarize' },
    { label: 'Talent Pool', route: 'dashboard/talent-pool', logo: 'data_thresholding' },
    { label: 'Resignation', route: 'dashboard/resignation', logo: 'how_to_reg' },
  ];
  
menuItemsBottom: MenuBar[] = [
    { label: 'Settings', route: '/settings', logo: 'settings' },
    { label: 'Log Out', route: '/logout', logo: 'logout' },
  ];
}
