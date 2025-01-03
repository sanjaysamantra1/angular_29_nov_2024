import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2EmployeeDetailsComponent } from './child2-employee-details.component';

describe('Child2EmployeeDetailsComponent', () => {
  let component: Child2EmployeeDetailsComponent;
  let fixture: ComponentFixture<Child2EmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2EmployeeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
