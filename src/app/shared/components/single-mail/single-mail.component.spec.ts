import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMailComponent } from './single-mail.component';

describe('SingleMailComponent', () => {
  let component: SingleMailComponent;
  let fixture: ComponentFixture<SingleMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleMailComponent]
    });
    fixture = TestBed.createComponent(SingleMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
