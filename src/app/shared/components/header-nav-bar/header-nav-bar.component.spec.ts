import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavBarComponent } from './header-nav-bar.component';

describe('HeaderNavBarComponent', () => {
  let component: HeaderNavBarComponent;
  let fixture: ComponentFixture<HeaderNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavBarComponent]
    });
    fixture = TestBed.createComponent(HeaderNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
