import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeServiceComponentComponent } from './employee-service-component.component';

describe('EmployeeServiceComponentComponent', () => {
  let component: EmployeeServiceComponentComponent;
  let fixture: ComponentFixture<EmployeeServiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeServiceComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
