import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliationFormComponent } from './appliation-form.component';

describe('AppliationFormComponent', () => {
  let component: AppliationFormComponent;
  let fixture: ComponentFixture<AppliationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliationFormComponent]
    });
    fixture = TestBed.createComponent(AppliationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
