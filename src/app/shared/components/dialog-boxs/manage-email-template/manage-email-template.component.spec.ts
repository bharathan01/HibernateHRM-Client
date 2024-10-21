import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmailTemplateComponent } from './manage-email-template.component';

describe('ManageEmailTemplateComponent', () => {
  let component: ManageEmailTemplateComponent;
  let fixture: ComponentFixture<ManageEmailTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageEmailTemplateComponent]
    });
    fixture = TestBed.createComponent(ManageEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
