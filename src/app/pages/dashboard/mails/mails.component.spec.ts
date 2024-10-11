import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsComponent } from './mails.component';

describe('MailsComponent', () => {
  let component: MailsComponent;
  let fixture: ComponentFixture<MailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailsComponent]
    });
    fixture = TestBed.createComponent(MailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
