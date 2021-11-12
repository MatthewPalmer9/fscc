import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLoggedinComponent } from './navbar-loggedin.component';

describe('NavbarLoggedinComponent', () => {
  let component: NavbarLoggedinComponent;
  let fixture: ComponentFixture<NavbarLoggedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLoggedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
