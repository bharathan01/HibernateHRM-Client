import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersControllesComponent } from './users-controlles.component';

describe('UsersControllesComponent', () => {
  let component: UsersControllesComponent;
  let fixture: ComponentFixture<UsersControllesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersControllesComponent]
    });
    fixture = TestBed.createComponent(UsersControllesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
