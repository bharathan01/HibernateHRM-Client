import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrfPreviewComponent } from './jrf-preview.component';

describe('JrfPreviewComponent', () => {
  let component: JrfPreviewComponent;
  let fixture: ComponentFixture<JrfPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JrfPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JrfPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
