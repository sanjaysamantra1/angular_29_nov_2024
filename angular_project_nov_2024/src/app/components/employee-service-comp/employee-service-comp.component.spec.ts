import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeServiceCompComponent } from './employee-service-comp.component';

describe('EmployeeServiceCompComponent', () => {
  let component: EmployeeServiceCompComponent;
  let fixture: ComponentFixture<EmployeeServiceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeServiceCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeServiceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
