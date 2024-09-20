import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJrfHeaderComponent } from './create-jrf-header.component';

describe('CreateJrfHeaderComponent', () => {
  let component: CreateJrfHeaderComponent;
  let fixture: ComponentFixture<CreateJrfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJrfHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJrfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
