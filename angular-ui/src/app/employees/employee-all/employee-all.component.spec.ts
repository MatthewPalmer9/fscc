import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAllComponent } from './employee-all.component';

describe('EmployeeAllComponent', () => {
  let component: EmployeeAllComponent;
  let fixture: ComponentFixture<EmployeeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
