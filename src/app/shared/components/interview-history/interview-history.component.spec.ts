import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewHistoryComponent } from './interview-history.component';

describe('InterviewHistoryComponent', () => {
  let component: InterviewHistoryComponent;
  let fixture: ComponentFixture<InterviewHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewHistoryComponent]
    });
    fixture = TestBed.createComponent(InterviewHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
