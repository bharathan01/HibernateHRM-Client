import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailHistoryViewComponent } from './mail-history-view.component';

describe('MailHistoryViewComponent', () => {
  let component: MailHistoryViewComponent;
  let fixture: ComponentFixture<MailHistoryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailHistoryViewComponent]
    });
    fixture = TestBed.createComponent(MailHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
