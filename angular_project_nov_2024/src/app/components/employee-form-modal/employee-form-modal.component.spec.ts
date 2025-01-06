import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormModalComponent } from './employee-form-modal.component';

describe('EmployeeFormModalComponent', () => {
  let component: EmployeeFormModalComponent;
  let fixture: ComponentFixture<EmployeeFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
