import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetailsComponent } from './empdetails.component';

describe('EmpdetailsComponent', () => {
  let component: EmpdetailsComponent;
  let fixture: ComponentFixture<EmpdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
