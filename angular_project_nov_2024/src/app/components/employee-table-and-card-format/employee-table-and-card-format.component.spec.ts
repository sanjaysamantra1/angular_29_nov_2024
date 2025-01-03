import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableAndCardFormatComponent } from './employee-table-and-card-format.component';

describe('EmployeeTableAndCardFormatComponent', () => {
  let component: EmployeeTableAndCardFormatComponent;
  let fixture: ComponentFixture<EmployeeTableAndCardFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTableAndCardFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTableAndCardFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
