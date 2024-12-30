import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecrudparentComponent } from './employeecrudparent.component';

describe('EmployeecrudparentComponent', () => {
  let component: EmployeecrudparentComponent;
  let fixture: ComponentFixture<EmployeecrudparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeecrudparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecrudparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
