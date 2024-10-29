import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationDialogBoxComponent } from './job-application-dialog-box.component';

describe('JobApplicationDialogBoxComponent', () => {
  let component: JobApplicationDialogBoxComponent;
  let fixture: ComponentFixture<JobApplicationDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
