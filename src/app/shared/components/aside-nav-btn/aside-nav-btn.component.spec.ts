import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNavBtnComponent } from './aside-nav-btn.component';

describe('AsideNavBtnComponent', () => {
  let component: AsideNavBtnComponent;
  let fixture: ComponentFixture<AsideNavBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideNavBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideNavBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
