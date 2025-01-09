import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecompComponent } from './employeecomp.component';

describe('EmployeecompComponent', () => {
  let component: EmployeecompComponent;
  let fixture: ComponentFixture<EmployeecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
