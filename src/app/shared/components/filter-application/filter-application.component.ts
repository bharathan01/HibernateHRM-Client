import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-filter-application',
  templateUrl: './filter-application.component.html',
  styleUrls: ['./filter-application.component.css'],
})
export class FilterApplicationComponent implements AfterViewInit {
  isFilterMenuOpen: boolean = true;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isFilterMenuOpen = false;
        } else {
          this.isFilterMenuOpen = true;
        }
      });
    this.cdr.detectChanges();
  }

  /*@@ notice period slider value calcuate  */
  formatLabel(value: number): string {
    if (value >= 1) {
      return Math.round(value / 1) + 'Days';
    }

    return `${value}`;
  }
}
