import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppliationFormComponent } from './create-appliation-form.component';

describe('CreateAppliationFormComponent', () => {
  let component: CreateAppliationFormComponent;
  let fixture: ComponentFixture<CreateAppliationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAppliationFormComponent]
    });
    fixture = TestBed.createComponent(CreateAppliationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
