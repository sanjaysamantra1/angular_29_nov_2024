import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormModelComponent } from './employee-form-model.component';

describe('EmployeeFormModelComponent', () => {
  let component: EmployeeFormModelComponent;
  let fixture: ComponentFixture<EmployeeFormModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
