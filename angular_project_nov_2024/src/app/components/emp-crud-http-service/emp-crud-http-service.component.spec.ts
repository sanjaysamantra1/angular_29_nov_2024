import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCrudHttpServiceComponent } from './emp-crud-http-service.component';

describe('EmpCrudHttpServiceComponent', () => {
  let component: EmpCrudHttpServiceComponent;
  let fixture: ComponentFixture<EmpCrudHttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCrudHttpServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCrudHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
