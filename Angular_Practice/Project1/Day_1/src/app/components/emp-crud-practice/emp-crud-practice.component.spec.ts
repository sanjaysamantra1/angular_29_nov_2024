import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCrudPracticeComponent } from './emp-crud-practice.component';

describe('EmpCrudPracticeComponent', () => {
  let component: EmpCrudPracticeComponent;
  let fixture: ComponentFixture<EmpCrudPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCrudPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCrudPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
