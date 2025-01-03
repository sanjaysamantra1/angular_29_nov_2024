import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1EmployeeCrudComponent } from './child1-employee-crud.component';

describe('Child1EmployeeCrudComponent', () => {
  let component: Child1EmployeeCrudComponent;
  let fixture: ComponentFixture<Child1EmployeeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1EmployeeCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1EmployeeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
