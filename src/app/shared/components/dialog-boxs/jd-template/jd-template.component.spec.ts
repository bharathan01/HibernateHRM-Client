import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdTemplateComponent } from './jd-template.component';

describe('JdTemplateComponent', () => {
  let component: JdTemplateComponent;
  let fixture: ComponentFixture<JdTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JdTemplateComponent]
    });
    fixture = TestBed.createComponent(JdTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
