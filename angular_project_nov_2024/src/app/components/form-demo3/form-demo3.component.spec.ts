import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemo3Component } from './form-demo3.component';

describe('FormDemo3Component', () => {
  let component: FormDemo3Component;
  let fixture: ComponentFixture<FormDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDemo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
