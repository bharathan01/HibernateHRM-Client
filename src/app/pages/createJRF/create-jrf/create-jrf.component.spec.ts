import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJrfComponent } from './create-jrf.component';

describe('CreateJrfComponent', () => {
  let component: CreateJrfComponent;
  let fixture: ComponentFixture<CreateJrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJrfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
