import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCrudSubjectComponent } from './emp-crud-subject.component';

describe('EmpCrudSubjectComponent', () => {
  let component: EmpCrudSubjectComponent;
  let fixture: ComponentFixture<EmpCrudSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCrudSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCrudSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
