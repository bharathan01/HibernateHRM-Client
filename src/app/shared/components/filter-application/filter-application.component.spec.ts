import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterApplicationComponent } from './filter-application.component';

describe('FilterApplicationComponent', () => {
  let component: FilterApplicationComponent;
  let fixture: ComponentFixture<FilterApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterApplicationComponent]
    });
    fixture = TestBed.createComponent(FilterApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
