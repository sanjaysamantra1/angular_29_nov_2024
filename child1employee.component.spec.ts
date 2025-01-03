import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1employeeComponent } from './child1employee.component';

describe('Child1employeeComponent', () => {
  let component: Child1employeeComponent;
  let fixture: ComponentFixture<Child1employeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1employeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1employeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
